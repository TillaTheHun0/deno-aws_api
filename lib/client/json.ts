import * as Base64 from 'https://deno.land/x/base64@v0.2.1/mod.ts';

// Things that JSON can encode directly
export type JSONPrimitive = string | number | boolean | null | undefined;
export type JSONValue = JSONPrimitive | JSONObject | JSONArray;
export type JSONObject = {[key: string]: JSONValue};
export type JSONArray = JSONValue[];

// Prebuilt types for decoding
export type FieldTypeIn =
  | 's' | 'n' | 'b' | 'd' | 'a'
  | ((obj: JSONValue) => any);
const FieldTypeNames = {
  // native to json
  s: 'string', n: 'number', b: 'boolean',
  // enriched
  d: 'date', a: 'blob',
};

type ResolveFieldTypeIn<
  T extends FieldTypeIn | [FieldTypeIn],
  U = T extends [infer R] ? R : T,
  V = U extends (obj: JSONValue) => null | infer R ? R
    : U extends 's' ? string
    : U extends 'n' ? number
    : U extends 'b' ? boolean
    : U extends 'd' ? Date
    : U extends 'a' ? Uint8Array
    : never,
> = T extends [any] ? V[] : V;

export function readObj<
  R extends {[key: string]: (FieldTypeIn | [FieldTypeIn])},
  O extends {[key: string]: (FieldTypeIn | [FieldTypeIn])},
>(
  opts: {
    required: R,
    optional: O,
    remap?: {[key: string]: keyof R | keyof O},
  },
  data: JSONValue,
): {[key in keyof R | keyof O]
  : key extends keyof R ? ResolveFieldTypeIn<R[key]>
  : key extends keyof O ? (ResolveFieldTypeIn<O[key]> | null)
  : never
} {
  if (data === null || typeof data !== "object" || Array.isArray(data)) {
    throw new Error(`Object wasn't an object, was ${typeof data}, wanted keys ${JSON.stringify(Object.keys(opts.required).concat(Object.keys(opts.optional)))}`);
  }

  const remap = opts.remap ?? {};
  const missing = new Set<string>(Object.keys(opts.required));
  const problems = new Array<string>();
  const obj = Object.create(null);

  for (const [key, raw] of Object.entries(data)) {
    const targetName = key in remap ? remap[key].toString() : key;
    const isRequired = targetName in opts.required;
    if (!isRequired && !(targetName in opts.optional)) continue;

    if (raw == null) {
      obj[targetName] = null;
    } else {
      const typeSig = isRequired ? opts.required[targetName] : opts.optional[targetName];
      const value = readField(typeSig, raw);
      if (value == null) {
        problems.push(`Key ${key} of type ${typeof raw} failed to parse as ${typeof typeSig === 'string' ? FieldTypeNames[typeSig] : typeof typeSig}`);
      } else {
        missing.delete(targetName);
      }
      obj[targetName] = value;
    }
  }
  if (problems.length > 0) throw new Error(`BUG: JSON object `+
    `failed to read some keys: ${problems.join(' ; ')
    } - had keys ${JSON.stringify(Object.keys(data))}`);
  if (missing.size > 0) throwMissingKeys(missing, Object.keys(data));

  return obj;
}

function readField(typeSig: FieldTypeIn | [FieldTypeIn], raw: JSONValue): unknown {
  if (raw == null) return null;
  switch (typeSig) {
    case 's':
      return typeof raw === 'string' ? raw : null;
    case 'n':
      return typeof raw === 'number' ? raw : null;
    case 'b':
      return typeof raw === 'boolean' ? raw : null
    case 'd':
      if (typeof raw === 'string') {
        return new Date(raw);
      } else if (typeof raw === 'number') {
        return new Date(raw * 1000);
      }
      break;
    case 'a':
      if (typeof raw === 'string') {
        return Base64.toUint8Array(raw);
      }
      break;
    default:
      if (typeof typeSig === 'function') {
        return typeSig(raw);
      } else if (Array.isArray(typeSig)) {
        if (Array.isArray(raw)) {
          return raw.map(readField.bind(null, typeSig[0]));
        }
      }
  }
  return null;
}

function throwMissingKeys(missingKeys: Iterable<string>, hadKeys: Iterable<string>): never {
  throw new Error(`BUG: JSON object `+
    `missing required keys ${JSON.stringify(Array.from(missingKeys))
    } - had keys ${JSON.stringify(Array.from(hadKeys))}`);
}
