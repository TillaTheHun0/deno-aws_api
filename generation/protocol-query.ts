import type * as Schema from './sdk-schema.ts';
import type { ShapeLibrary, KnownShape } from "./shape-library.ts";
import type { HelperLibrary } from "./helper-library.ts";

import ProtocolXmlCodegen from "./protocol-xml.ts";

// "query" and also "ec2" which is based on "query"
// Uses XML for output, querystrings are input only
export default class ProtocolQueryCodegen extends ProtocolXmlCodegen {
  constructor(shapes: ShapeLibrary, helpers: HelperLibrary, opts: {ec2?: boolean}={}) {
    super(shapes, helpers, opts);
  }

  generateOperationInputParsingTypescript(inputShape: KnownShape): { inputParsingCode: string; inputVariables: string[]; } {
    if (inputShape.spec.type !== 'structure') throw new Error(
      `Can only generate top level structures`);

    const chunks = new Array<string>();
    chunks.push(`    const body = new URLSearchParams;`);
    chunks.push(`    const prefix = '';`);

    chunks.push(this.generateQStructureInputTypescript(inputShape.spec, "params", ''));

    return {
      inputParsingCode: chunks.join('\n'),
      inputVariables: ['body'],
    };
  }

  generateShapeInputParsingTypescript(shape: KnownShape): { inputParsingFunction: string; } {
    if (shape.spec.type === 'string') return {
      inputParsingFunction: '',
    };
    const namePrefix = (this.helpers.hasDep('s')) ? 's.' : '';

    const chunks = new Array<string>();
    chunks.push(`function ${shape.censoredName}_Serialize(body: URLSearchParams, prefix: string, params: ${namePrefix}${shape.censoredName}) {`);

    switch (shape.spec.type) {
      case 'structure':
        chunks.push(this.generateQStructureInputTypescript(shape.spec, "params", '.'));
        break;
      default:
        throw new Error(`TODO: protocol-query.ts lacks shape generator for ${shape.spec.type}`);
    }

    chunks.push(`}`);
    return {
      inputParsingFunction: chunks.join('\n'),
    };
  }

  generateQStructureInputTypescript(inputStruct: Schema.ShapeStructure, paramsRef = "params", prefix = ""): string {
    const chunks = new Array<string>();

    for (const [field, spec] of Object.entries(inputStruct.members)) {
      const shape = this.shapes.get(spec);
      const defaultName = this.ucfirst(field, false);
      const locationName = this.ucfirst(spec.queryName, true) ?? this.ucfirst(spec.locationName, false) ?? shape.spec.locationName ?? defaultName;
      const isRequired = (inputStruct.required ?? []).map(x => x.toLowerCase()).includes(field.toLowerCase());
      const paramRef = `${paramsRef}[${JSON.stringify(field)}]`;

      switch (shape.spec.type) {
        // case 'boolean':
        //   chunks.push(`    ${isRequired ? '' : `if (${paramRef} != null) `}body.append(${JSON.stringify(locationName)}, ${paramRef});`);
        case 'list': {
          const isFlattened = spec.flattened || shape.spec.flattened || this.ec2Mode;
          const listConfig: any = {};
          // if (shape.spec.member.locationName) listConfig.entName = '.'+shape.spec.member.locationName;
          // console.log(shape.name, [spec.queryName, spec.locationName, shape.spec.locationName, defaultName])
          const listPrefix = isFlattened
            ? spec.queryName ?? spec.locationName ?? shape.spec.locationName ?? shape.spec.member.locationName ?? defaultName
            : spec.queryName ?? spec.locationName ?? defaultName;
          listConfig.entryPrefix = isFlattened
            ? '.'
            : `.${shape.spec.locationName ?? shape.spec.member.locationName ?? 'member'}.`;
          const innerShape = this.shapes.get(shape.spec.member);
          this.helpers.useHelper("qsP");
          chunks.push(`    if (${paramRef}) qsP.appendList(body, prefix+${JSON.stringify(prefix+listPrefix)}, ${paramRef}, ${this.configureInnerShapeEncoding(innerShape, listConfig)})`);
          break;
        }
        case 'map': {
          const isFlattened = spec.flattened || shape.spec.flattened || this.ec2Mode;
          const mapConfig: any = {};
          if (shape.spec.key.locationName) mapConfig.keyName = '.'+shape.spec.key.locationName;
          if (shape.spec.value.locationName) mapConfig.valName = '.'+shape.spec.value.locationName;
          const mapPrefix = isFlattened
            ? spec.queryName ?? spec.locationName ?? shape.spec.locationName ?? defaultName
            : spec.queryName ?? spec.locationName ?? defaultName;
          mapConfig.entryPrefix = isFlattened
            ? '.'
            : `.${shape.spec.locationName ?? 'entry'}.`;
          const valueShape = this.shapes.get(shape.spec.value);
          this.helpers.useHelper("qsP");
          chunks.push(`    if (${paramRef}) qsP.appendMap(body, prefix+${JSON.stringify(prefix+mapPrefix)}, ${paramRef}, ${this.configureInnerShapeEncoding(valueShape, mapConfig)})`);
          break;
        }
        case 'string':
          if (spec.idempotencyToken) {
            this.helpers.useHelper('generateIdemptToken');
            chunks.push(`    body.append(prefix+${JSON.stringify(prefix+locationName)}, (${paramRef} ?? generateIdemptToken()).toString());`);
            break;
          } // fallthrough
        case 'boolean':
        case 'integer':
        case 'float':
        case 'double':
        case 'long':
          chunks.push(`    ${isRequired ? '' : `if (${JSON.stringify(field)} in params) `}body.append(prefix+${JSON.stringify(prefix+locationName)}, (${paramRef} ?? '').toString());`);
          break;
        case 'blob':
          this.helpers.useHelper("serializeBlob");
          chunks.push(`    ${isRequired ? '' : `if (${JSON.stringify(field)} in params) `}body.append(prefix+${JSON.stringify(prefix+locationName)}, serializeBlob(${paramRef}) ?? '');`);
          break;
        case 'timestamp':
          this.helpers.useHelper("qsP");
          const dateFmt = spec.timestampFormat ?? shape.spec.timestampFormat ?? 'iso8601';
          chunks.push(`    ${isRequired ? '' : `if (${JSON.stringify(field)} in params) `}body.append(prefix+${JSON.stringify(prefix+locationName)}, qsP.encodeDate_${dateFmt}(${paramRef}));`);
          break;
        case 'structure':
          if (shape.tags.has('named')) {
            chunks.push(`    ${isRequired ? '' : `if (${paramRef} != null) `}${shape.censoredName}_Serialize(body, prefix+${JSON.stringify(prefix+locationName)}, ${paramRef});`);
          } else {
            if (isRequired) chunks.push(`    if (${paramRef}) {`);
            chunks.push(this.generateQStructureInputTypescript(shape.spec, paramRef, prefix+locationName+'.'));
            if (isRequired) chunks.push(`    }`);
          }
          break;
        default:
          throw new Error(`TODO: query input appending for ${(shape as KnownShape).spec.type}`);
          // chunks.push(`    // TODO: appending for ${(shape as KnownShape).spec.type}`);
      }
    }

    return chunks.join('\n');
  }




  ucfirst(name: string | undefined, isQueryName = false): string | undefined {
    if (!name) return name;
    if (isQueryName || !this.ec2Mode) {
      return name;
    } else {
      return name[0].toUpperCase() + name.slice(1);
    }
  }

  configureInnerShapeEncoding(innerShape: KnownShape, extraConfig: any) {
    let confExtras = '';
    switch (innerShape.spec.type) {
      case 'blob':
        this.helpers.useHelper("serializeBlob");
        confExtras += `"encoder":(x)=>serializeBlob(x) ?? '',`;
        break;
      case 'timestamp':
        this.helpers.useHelper("qsP");
        const dateFmt = innerShape.spec.timestampFormat ?? 'iso8601';
        confExtras += `"encoder":qsP.encodeDate_${dateFmt},`;
        break;
      case 'structure':
        if (innerShape.tags.has('named')) {
          confExtras += `"appender":${innerShape.censoredName}_Serialize,`;
          break;
        } else {
          throw new Error(`Structure ${innerShape.name} is used in a list but wasn't named`);
        }
    }
    // sue me
    return '{' + confExtras + JSON.stringify(extraConfig).slice(1);
  }

}
