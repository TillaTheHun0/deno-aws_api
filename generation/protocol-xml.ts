import type * as Schema from './sdk-schema.ts';
import type ShapeLibrary from './shape-library.ts';
import type { KnownShape } from './shape-library.ts';
import type HelperLibrary from "./helper-library.ts";

// XML input/output, used by "rest-xml" and also for "query"s output
export default class ProtocolXmlCodegen {
  shapes: ShapeLibrary;
  helpers: HelperLibrary;
  ec2Mode: boolean;
  constructor(shapes: ShapeLibrary, helpers: HelperLibrary, {ec2}: {ec2?: boolean}={}) {
    this.shapes = shapes;
    this.helpers = helpers;
    this.ec2Mode = ec2 ?? false;

    helpers.addDep("xmlP", "../../encoding/xml.ts");
  }

  generateOperationInputParsingTypescript(inputShape: KnownShape, meta: Schema.LocationInfo & {paramRef?: string}): { inputParsingCode: string; inputVariables: string[]; } {
    if (inputShape.spec.type !== 'structure') throw new Error(
      `Can only generate top level structures`);

    const chunks = new Array<string>();

    const {attrCode, childrenCode} = this.generateStructureInputTypescript(inputShape.spec, meta.paramRef ?? 'params');

    chunks.push(`    const body = ${meta.paramRef === 'inner' ? 'inner ? ' : ''}xmlP.stringify({`);
    chunks.push(`      name: ${JSON.stringify(meta.locationName ?? inputShape.spec.locationName ?? inputShape.name)},`);
    chunks.push(`      attributes: ${JSON.stringify({xmlns: meta.xmlNamespace?.uri})},`);
    chunks.push(`      children: [`);
    chunks.push(childrenCode.replace(/^/gm,'    '));

    // const paramBase = meta.paramRef ?? 'params';
    // for (const [field, spec] of Object.entries(inputShape.members)) {
    //   const shape = this.shapes.get(spec);
    //   const defaultName = this.ucfirst(field, false);
    //   const locationName = this.ucfirst(spec.locationName, false) ?? shape.spec.locationName ?? defaultName;
    //   const isRequired = (inputShape.required ?? []).map(x => x.toLowerCase()).includes(field.toLowerCase());
    //   const paramRef = `${paramBase}[${JSON.stringify(field)}]`;

    //   switch (shape.spec.type) {
    //     case 'string':
    //       chunks.push(`    {name: ${JSON.stringify(locationName)}, content: ${paramRef}},`);
    //       break;
    //     case 'structure':
    //       chunks.push(`    {name: ${JSON.stringify(locationName)}, children: ${shape.censoredName}_Serialize(${paramRef})},`);
    //     // case 'm':
    //     //   chunks.push(`    {name: ${JSON.stringify(locationName)}, contents: ${paramRef}},`);
    //     //   break;
    //     default:
    //       chunks.push(`    // TODO: ${field} ${JSON.stringify(spec)}`);
    //   }
    //   // chunks.push(`    {name: ${JSON.stringify(locationName)}}`);
    // }

    // chunks.push(`    {name: 'VPC', children: [`);
    // chunks.push(`      {name: ''}`);
    // chunks.push(`    ]},`);
    chunks.push(`      ]})${meta.paramRef === 'inner' ? ' : ""' : ''};`);


    // chunks.push(`// TODO: protocol-xml input - ${meta.locationName} ${meta.xmlNamespace}`);
    // for (const [field, spec] of Object.entries(inputShape.members)) {
    //   chunks.push(`// ${field} ${JSON.stringify(spec)}`);
    // }

    // chunks.push(`// TODO: protocol-xml input`);
    // chunks.push(`    const body = new URLSearchParams;`);
    // chunks.push(`    const prefix = '';`);

    // chunks.push(this.generateStructureInputTypescript(inputShape, "params", ''));

    return {
      inputParsingCode: chunks.join('\n'),
      inputVariables: ['body'],
    };
  }

  generateShapeInputParsingTypescript(shape: KnownShape): { inputParsingFunction: string; } {
    if (shape.spec.type !== 'structure') return {
      inputParsingFunction: '',
    };

    const {attrCode, childrenCode} = this.generateStructureInputTypescript(shape.spec, 'data');

    const chunks = new Array<string>();
    chunks.push(`function ${shape.censoredName}_Serialize(data: ${shape.censoredName} | undefined | null): Partial<xmlP.Node> {`);
    chunks.push(`  if (!data) return {};`);
    if (attrCode.length > 0) {
      chunks.push(`  return {attributes: {`);
      for (const line of attrCode) chunks.push(line);
      chunks.push(`  }, children: [`);
    } else {
      chunks.push(`  return {children: [`);
    }
    // return {attributes: {
    //   "xsi:type": data["Type"] ?? undefined,
    // }, children: [

    // attributes: {
    //   "xmlns:xsi": 'http://www.w3.org/2001/XMLSchema-instance',
    //   "xsi:type": data["Type"] ?? undefined,
    // },

    chunks.push(childrenCode);
    chunks.push(`  ]};`);
    chunks.push(`}`);

    // chunks.push(`TODO: protocol-xml input`);
    // chunks.push(`function ${shape.censoredName}_Serialize(body: URLSearchParams, prefix: string, params: ${shape.censoredName}) {`);

    // switch (shape.spec.type) {
    //   case 'structure':
    //     chunks.push(this.generateStructureInputTypescript(shape.spec, "params", '.'));
    //     break;
    //   default:
    //     throw new Error(`TODO: protocol-query.ts lacks shape generator for ${shape.spec.type}`);
    // }

    // chunks.push(`}`);
    return {
      inputParsingFunction: chunks.join('\n'),
    };
  }

  generateStructureInputTypescript(inputStruct: Schema.ShapeStructure, paramsRef: string): {attrCode: string[], childrenCode: string} {
    const attrChunks = new Array<string>();
    const chunks = new Array<string>();

    if (inputStruct.xmlNamespace?.prefix) {
      attrChunks.push(`    ${JSON.stringify(`xmlns:${inputStruct.xmlNamespace.prefix}`)}: ${JSON.stringify(inputStruct.xmlNamespace.uri)},`);
    }

    for (const [field, spec] of Object.entries(inputStruct.members)) {
      const shape = this.shapes.get(spec);
      const defaultName = this.ucfirst(field, false);
      const locationName = this.ucfirst(spec.locationName, false) ?? shape.spec.locationName ?? defaultName;
      const isRequired = (inputStruct.required ?? []).map(x => x.toLowerCase()).includes(field.toLowerCase());
      const paramRef = `${paramsRef}[${JSON.stringify(field)}]`;

      if (spec.xmlAttribute) {
        if (shape.spec.type === 'string') {
          attrChunks.push(`    ${JSON.stringify(locationName)}: ${paramRef} ?? undefined,`);
          continue;
        }
        throw new Error(`TODO: xmlAttribute is only handled in certain cases`);
      }

      switch (shape.spec.type) {

        case 'string':
          if (spec.idempotencyToken) {
            this.helpers.useHelper('generateIdemptToken');
            chunks.push(`    {name: ${JSON.stringify(locationName)}, content: (${paramRef} ?? generateIdemptToken()).toString()},`);
            break;
          } // fallthrough
        case 'boolean':
        case 'integer':
        case 'float':
        case 'double':
        case 'long':
          chunks.push(`    {name: ${JSON.stringify(locationName)}, content: ${paramRef}?.toString()},`);
          break;

        case 'timestamp':
          const dateFmt = spec.timestampFormat ?? shape.spec.timestampFormat ?? 'iso8601';
          chunks.push(`    {name: ${JSON.stringify(locationName)}, content: cmnP.serializeDate_${dateFmt}(${paramRef})},`);
          break;

        case 'blob':
          chunks.push(`    {name: ${JSON.stringify(locationName)}, content: cmnP.serializeBlob(${paramRef})},`);
          break;

        case 'list': {
          const isFlattened = spec.flattened || shape.spec.flattened;
          const innerShape = this.shapes.get(shape.spec.member);

          let childField: 'content: ' | 'children: ' | '...' = 'content: ';
          let childExpr = '';
          switch (innerShape.spec.type) {

            case 'structure':
              childField = '...';
              childExpr = `${innerShape.censoredName}_Serialize(x)`;
              // chunks.push(`    {name: ${JSON.stringify(locationName)}, children: ${paramRef}?.flatMap(${innerShape.censoredName}_Serialize)},`);
              break;

            case 'string':
              childField = 'content: ';
              childExpr = `x`;
              // if (isFlattened) {
              //   chunks.push(`    ...(${paramRef}?.map(x => ({name: ${JSON.stringify(locationName)}, content: x})) ?? []),`);
              // } else {
              //   chunks.push(`    {name: ${JSON.stringify(locationName)}, children: ${paramRef}?.map(x => ({name: ${JSON.stringify(shape.spec.member.locationName ?? 'member')}, content: x}))},`);
              // }
              break;

            case 'integer':
            case 'float':
            case 'double':
            case 'long':
              childField = 'content: ';
              childExpr = `x.toString()`;
              break;

            default:
              throw new Error(`TODO: protocol-xml.ts lacks input shape list generator for ${innerShape.spec.type}`);
          }

          if (isFlattened) {
            chunks.push(`    ...(${paramRef}?.map(x => ({name: ${JSON.stringify(locationName)}, ${childField}${childExpr}})) ?? []),`);
          } else {
            chunks.push(`    {name: ${JSON.stringify(locationName)}, children: ${paramRef}?.map(x => ({name: ${JSON.stringify(shape.spec.member.locationName ?? 'member')}, ${childField}${childExpr}}))},`);
          }

          break;
        }

        case 'map': {
          const isFlattened = spec.flattened || shape.spec.flattened;
          const keyShape = this.shapes.get(shape.spec.key);
          const valShape = this.shapes.get(shape.spec.value);
          // console.log('map', keyShape.spec.type, valShape.spec.type, shape.spec.value.locationName);

          let valEncoder = '';
          switch (valShape.spec.type) {

            case 'structure':
              valEncoder = `x => ({name: ${JSON.stringify(shape.spec.key.locationName ?? 'value')}, ...${valShape.censoredName}_Serialize(x)})`;
              // chunks.push(`    {name: ${JSON.stringify(locationName)}, children: ${paramRef}?.flatMap(${innerShape.censoredName}_Serialize)},`);
              break;

            case 'string':
              valEncoder = `x => ({name: ${JSON.stringify(shape.spec.key.locationName ?? 'value')}, contents: x})`;
              break;

            default:
              throw new Error(`TODO: protocol-xml.ts lacks input shape map value generator for ${valShape.spec.type}`);
          }

          if (isFlattened) {
            throw new Error(`TODO: xml output map flattened`);
            // chunks.push(`    ...(${paramRef}?.map(x => ({name: ${JSON.stringify(locationName)}, ${childField}${childExpr}})) ?? []),`);
          } else {
            chunks.push(`    {name: ${JSON.stringify(locationName)}, ...xmlP.emitMap(${paramRef}, ${JSON.stringify(shape.spec.locationName ?? 'entry')}, ${JSON.stringify(shape.spec.key.locationName ?? 'key')}, ${valEncoder})},`);
          }

          break;
        }

        case 'structure':
          chunks.push(`    {name: ${JSON.stringify(locationName)}, ...${shape.censoredName}_Serialize(${paramRef})},`);
          break;

      // {name: "ResourceRecordSet", children: ResourceRecordSet_Serialize(data["ResourceRecordSet"])},

        default:
          throw new Error(`TODO: protocol-xml.ts lacks input shape generator for ${shape.spec.type}`);
      }
    }

    return {
      attrCode: attrChunks,
      childrenCode: chunks.join('\n'),
    };
  }

  // generateStructureInputTypescript(inputStruct: Schema.ShapeStructure, paramsRef = "params", prefix = ""): string {
  //   const chunks = new Array<string>();

  //   for (const [field, spec] of Object.entries(inputStruct.members)) {
  //     const shape = this.shapes.get(spec);
  //     const defaultName = this.ucfirst(field, false);
  //     const locationName = this.ucfirst(spec.queryName, true) ?? this.ucfirst(spec.locationName, false) ?? shape.spec.locationName ?? defaultName;
  //     const isRequired = (inputStruct.required ?? []).map(x => x.toLowerCase()).includes(field.toLowerCase());
  //     const paramRef = `${paramsRef}[${JSON.stringify(field)}]`;

  //     switch (shape.spec.type) {
  //       // case 'boolean':
  //       //   chunks.push(`    ${isRequired ? '' : `if (${paramRef} != null) `}body.append(${JSON.stringify(locationName)}, ${paramRef});`);
  //       case 'list': {
  //         const isFlattened = spec.flattened || shape.spec.flattened || this.ec2Mode;
  //         const listConfig: any = {};
  //         // if (shape.spec.member.locationName) listConfig.entName = '.'+shape.spec.member.locationName;
  //         // console.log(shape.name, [spec.queryName, spec.locationName, shape.spec.locationName, defaultName])
  //         const listPrefix = isFlattened
  //           ? spec.queryName ?? spec.locationName ?? shape.spec.locationName ?? shape.spec.member.locationName ?? defaultName
  //           : spec.queryName ?? spec.locationName ?? defaultName;
  //         listConfig.entryPrefix = isFlattened
  //           ? '.'
  //           : `.${shape.spec.locationName ?? shape.spec.member.locationName ?? 'member'}.`;
  //         const innerShape = this.shapes.get(shape.spec.member);
  //         chunks.push(`    if (${paramRef}) prt.appendList(body, prefix+${JSON.stringify(prefix+listPrefix)}, ${paramRef}, ${this.configureInnerShapeEncoding(innerShape, listConfig)})`);
  //         break;
  //       }
  //       case 'map': {
  //         const isFlattened = spec.flattened || shape.spec.flattened || this.ec2Mode;
  //         const mapConfig: any = {};
  //         if (shape.spec.key.locationName) mapConfig.keyName = '.'+shape.spec.key.locationName;
  //         if (shape.spec.value.locationName) mapConfig.valName = '.'+shape.spec.value.locationName;
  //         const mapPrefix = isFlattened
  //           ? spec.queryName ?? spec.locationName ?? shape.spec.locationName ?? defaultName
  //           : spec.queryName ?? spec.locationName ?? defaultName;
  //         mapConfig.entryPrefix = isFlattened
  //           ? '.'
  //           : `.${shape.spec.locationName ?? 'entry'}.`;
  //         const valueShape = this.shapes.get(shape.spec.value);
  //         chunks.push(`    if (${paramRef}) prt.appendMap(body, prefix+${JSON.stringify(prefix+mapPrefix)}, ${paramRef}, ${this.configureInnerShapeEncoding(valueShape, mapConfig)})`);
  //         break;
  //       }
  //       case 'string':
  //         if (spec.idempotencyToken) {
  //           this.helpers.useHelper('generateIdemptToken');
  //           chunks.push(`    body.append(prefix+${JSON.stringify(prefix+locationName)}, (${paramRef} ?? generateIdemptToken()).toString());`);
  //           break;
  //         } // fallthrough
  //       case 'boolean':
  //       case 'integer':
  //       case 'float':
  //       case 'double':
  //       case 'long':
  //         chunks.push(`    ${isRequired ? '' : `if (${JSON.stringify(field)} in params) `}body.append(prefix+${JSON.stringify(prefix+locationName)}, (${paramRef} ?? '').toString());`);
  //         break;
  //       case 'blob':
  //         chunks.push(`    ${isRequired ? '' : `if (${JSON.stringify(field)} in params) `}body.append(prefix+${JSON.stringify(prefix+locationName)}, prt.encodeBlob(${paramRef}));`);
  //         break;
  //       case 'timestamp':
  //         const dateFmt = spec.timestampFormat ?? shape.spec.timestampFormat ?? 'iso8601';
  //         chunks.push(`    ${isRequired ? '' : `if (${JSON.stringify(field)} in params) `}body.append(prefix+${JSON.stringify(prefix+locationName)}, prt.encodeDate_${dateFmt}(${paramRef}));`);
  //         break;
  //       case 'structure':
  //         if (shape.tags.has('named')) {
  //           chunks.push(`    ${isRequired ? '' : `if (${paramRef} != null) `}${shape.censoredName}_Serialize(body, prefix+${JSON.stringify(prefix+locationName)}, ${paramRef});`);
  //         } else {
  //           if (isRequired) chunks.push(`    if (${paramRef}) {`);
  //           chunks.push(this.generateStructureInputTypescript(shape.spec, paramRef, prefix+locationName+'.'));
  //           if (isRequired) chunks.push(`    }`);
  //         }
  //         break;
  //       default:
  //         chunks.push(`    // TODO: appending for ${(shape as KnownShape).spec.type}`);
  //     }
  //   }

  //   return chunks.join('\n');
  // }






  generateOperationOutputParsingTypescript(shape: KnownShape, resultWrapper?: string): { outputParsingCode: string; outputVariables: string[]; } {
    if (shape.spec.type !== 'structure') throw new Error(
      `Can only generate top level output structures`);

    const chunks = new Array<string>();
    chunks.push(`    const xml = xmlP.readXmlResult(await resp.text()${resultWrapper ? `, ${JSON.stringify(resultWrapper)}` : ''});`);
    if (shape.refCount > 1) {
      chunks.push(`    return ${shape.censoredName}_Parse(xml);`);
    } else {
      chunks.push('  '+this.generateStructureOutputTypescript(shape.spec, 'xml', shape.spec.payload)
        .replace(/\n/g, '\n  '));
    }

    return {
      outputParsingCode: chunks.join('\n'),
      outputVariables: ['body'],
    };
  }

  generateShapeOutputParsingTypescript(shape: KnownShape): { outputParsingFunction: string; } {
    // TODO: we probably want these instead of casting
    if (shape.spec.type === 'string') return {
      outputParsingFunction: '',
    };

    const chunks = new Array<string>();
    chunks.push(`function ${shape.censoredName}_Parse(node: xmlP.XmlNode): ${shape.censoredName} {`);

    switch (shape.spec.type) {
      case 'structure':
        chunks.push(this.generateStructureOutputTypescript(shape.spec, 'node', shape.spec.payload));
        break;
      default:
        throw new Error(`TODO: protocol-query.ts lacks shape output generator for ${shape.spec.type}`);
    }

    chunks.push(`}`);
    return {
      outputParsingFunction: chunks.join('\n'),
    };
  }

  generateStructureOutputTypescript(outputStruct: Schema.ShapeStructure, nodeRef: string, payload?: string): string {
    // Organize fields into basic strings and 'special' others
    // Basic strings can be passed directly from the xml module
    // TODO: support for locationName and maybe even enums, as further strings() arguments
    const reqStrings: {[key: string]: true} = {};
    let hasRequiredStrs = false;
    const optStrings: {[key: string]: true} = {};
    let hasOptionalStrs = false;
    const specials: Array<[string, Schema.StructureFieldDetails, KnownShape]> = [];
    for (const [field, spec] of Object.entries(outputStruct.members)) {
      const fieldShape = this.shapes.get(spec);
      const defaultName = this.ucfirst(field, false);
      const locationName = this.ucfirst(spec.queryName, true) ?? spec.locationName ?? fieldShape.spec.locationName ?? defaultName;
      if (fieldShape.spec.type == 'string' && !fieldShape.spec.enum && (!locationName || locationName === field) && !spec.xmlAttribute) {
        if (outputStruct.required?.includes(field) || payload === field) {
          reqStrings[field] = true;
          hasRequiredStrs = true;
        } else {
          optStrings[field] = true;
          hasOptionalStrs = true;
        }
        continue;
      } else {
        specials.push([field, spec, fieldShape]);
      }
    }

    const chunks = new Array<string>();

    // Simplified statement if no fields need individual treatment
    if (specials.length === 0) {
      if (hasOptionalStrs || hasRequiredStrs) {
        chunks.push(`  return ${nodeRef}.strings({`);
        if (hasRequiredStrs) chunks.push(`    required: ${JSON.stringify(reqStrings)},`);
        if (hasOptionalStrs) chunks.push(`    optional: ${JSON.stringify(optStrings)},`);
        chunks.push(`  });`);
        return chunks.join('\n');
      } else {
        return `  return {};`;
      }
    }

    // Full construction :) start an object
    chunks.push('  return {');

    if (hasOptionalStrs || hasRequiredStrs) {
      chunks.push(`    ...${nodeRef}.strings({`);
      if (hasRequiredStrs) chunks.push(`      required: ${JSON.stringify(reqStrings)},`);
      if (hasOptionalStrs) chunks.push(`      optional: ${JSON.stringify(optStrings)},`);
      chunks.push(`    }),`);
    }

    for (const [field, spec, shape] of specials) {
      const defaultName = field;
      const locationName = this.ucfirst(spec.queryName, true) ?? spec.locationName ?? shape.spec.locationName ?? defaultName;
      const isRequired = payload === field || (outputStruct.required ?? []).map(x => x.toLowerCase()).includes(field.toLowerCase());
      // const paramRef = `${paramsRef}[${JSON.stringify(field)}]`;

      switch (shape.spec.type) {

        case 'list': {
          const isFlattened = spec.flattened || shape.spec.flattened;
          // console.log(shape.name, [spec.queryName, spec.locationName, shape.spec.locationName, defaultName])
          const listPrefix = isFlattened
            ? spec.queryName ?? spec.locationName ?? shape.spec.locationName ?? shape.spec.member.locationName ?? defaultName
            : spec.queryName ?? spec.locationName ?? defaultName;
          const memberPath = [listPrefix];
          if (!isFlattened)
            memberPath.push(shape.spec.locationName ?? shape.spec.member.locationName ?? 'member');

          const innerShape = this.shapes.get(shape.spec.member);
          // console.log([listPrefix, memberPrefix, innerShape.spec.type, innerShape.spec.locationName]);

          chunks.push(`    ${field}: ${nodeRef}.getList(${memberPath.map(x => JSON.stringify(x)).join(', ')}).map(${this.configureInnerShapeReading(innerShape)}),`);
          break;
        }

        case 'map': {
          const isFlattened = spec.flattened || shape.spec.flattened;
          const mapConfig: any = {};
          if (shape.spec.key.locationName) mapConfig.keyName = shape.spec.key.locationName;
          if (shape.spec.value.locationName) mapConfig.valName = shape.spec.value.locationName;

          // console.log(shape.name, [spec.queryName, spec.locationName, shape.spec.locationName, defaultName])
          const mapPrefix = isFlattened
            ? spec.queryName ?? spec.locationName ?? shape.spec.locationName ?? defaultName
            : spec.queryName ?? spec.locationName ?? defaultName;
          const entryPath = [mapPrefix];
          if (!isFlattened)
            entryPath.push(shape.spec.locationName ?? 'entry');

          const keyShape = this.shapes.get(shape.spec.key);
          const valueShape = this.shapes.get(shape.spec.value);
          // console.log([mapPrefix, entryPrefix, innerShape.spec.type, innerShape.spec.locationName]);
          chunks.push(`    ${field}: xmlP.readXmlMap(${nodeRef}.getList(${entryPath.map(x => JSON.stringify(x)).join(', ')}), ${this.configureInnerShapeReading(valueShape)}, ${JSON.stringify(mapConfig)}),`);
          break;
        }

        case 'string': {
          if (spec.xmlAttribute) {
            if (shape.spec.enum && isRequired) {
              chunks.push(`    ${field}: cmnP.readEnumReq<${shape.censoredName}>(${nodeRef}.attributes[${JSON.stringify(locationName)}]),`);
              break;
            }
            throw new Error(`xmlAttribute is only handled in certain cases for S3`);
          }
          // falls through
        }

        default:
          chunks.push(`    ${field}: ${nodeRef}.first(${JSON.stringify(locationName)}, ${isRequired}, ${this.configureInnerShapeReading(shape)}),`);
          // chunks.push(`    // TODO: reading for ${(shape as KnownShape).spec.type}`);

      }
    }

    chunks.push('  };');
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

  // configureInnerShapeEncoding(innerShape: KnownShape, extraConfig: any) {
  //   let confExtras = '';
  //   switch (innerShape.spec.type) {
  //     case 'blob':
  //       confExtras += `"encoder":prt.encodeBlob,`;
  //       break;
  //     case 'timestamp':
  //       const dateFmt = innerShape.spec.timestampFormat ?? 'iso8601';
  //       confExtras += `"encoder":prt.encodeDate_${dateFmt},`;
  //       break;
  //     case 'structure':
  //       if (innerShape.tags.has('named')) {
  //         confExtras += `"appender":${innerShape.censoredName}_Serialize,`;
  //         break;
  //       } else {
  //         throw new Error(`Structure ${innerShape.name} is used in a list but wasn't named`);
  //       }
  //   }
  //   // sue me
  //   return '{' + confExtras + JSON.stringify(extraConfig).slice(1);
  // }

  configureInnerShapeReading(innerShape: KnownShape) {
    switch (innerShape.spec.type) {
      case 'string':
        if (innerShape.spec.enum) {
          // TODO: is there a better way of mapping freetext into enums?
          if (innerShape.tags.has('named')) {
            return `x => (x.content ?? '') as ${innerShape.censoredName}`;
          } else {
            return `x => (x.content ?? '') as ${innerShape.spec.enum.map(x => JSON.stringify(x)).join(' | ')}`;
          }
        }
        return `x => x.content ?? ''`;
      case 'character':
        return `x => x.content ?? ''`;
      case 'boolean':
        return `x => x.content === 'true'`;
      case 'integer':
      case 'long':
        return `x => parseInt(x.content ?? '0')`;
      case 'float':
      case 'double':
        return `x => parseFloat(x.content ?? '0')`;
      case 'blob':
        this.helpers.addDep('Base64', 'https://deno.land/x/base64@v0.2.1/mod.ts');
        return `x => Base64.toUint8Array(x.content ?? '')`;
      case 'timestamp':
        return `x => xmlP.parseTimestamp(x.content)`;
      case 'map':
        throw new Error(`TODO: xml output map ${innerShape.spec.value.shape}`);
        // return `() => ({}) /* TODO: map output */`; // TODO
      case 'structure':
        if (innerShape.tags.has('named')) {
          return `${innerShape.censoredName}_Parse`;
        } else {
          throw new Error(`Structure ${innerShape.name} is used in an output list but wasn't named`);
        }
    }
    // sue me
    throw new Error(`TODO: xml output field ${innerShape.spec.type}`);
    return `x => x /* TODO: ${innerShape.spec.type} output*/`;
    // return '{' + confExtras + JSON.stringify(extraConfig).slice(1);
  }

}
