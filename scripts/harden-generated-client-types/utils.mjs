import { hardenedBlockEnd, hardenedBlockStart } from "./constants.mjs";

export function removeHardenedBlock(source) {
  const start = source.indexOf(hardenedBlockStart);
  if (start < 0) return source;
  const end = source.indexOf(hardenedBlockEnd, start);
  if (end < 0) return source;
  const afterEnd = source.indexOf("\n", end);
  return `${source.slice(0, start).replace(/\n+$/, "\n")}${source.slice(afterEnd + 1).replace(/^\n+/, "\n")}`;
}

export function findOperationsStatementEnd(source, operationConstName) {
  const start = source.indexOf(`export const ${operationConstName}`);
  if (start < 0) throw new Error(`Could not find ${operationConstName}`);
  let marker = source.indexOf(";\n\nexport", start);
  if (marker < 0) marker = source.indexOf(";\nexport", start);
  if (marker < 0) throw new Error(`Could not find end of ${operationConstName}`);
  return marker + 2;
}

export function extractPathParams(operationPath) {
  const params = [];
  for (const match of operationPath.matchAll(/\{([^}]+)\}/g)) {
    const paramName = match[1]?.replace(/^\+/, "");
    if (paramName && !params.includes(paramName)) params.push(paramName);
  }
  return params;
}

export function renderPathParamObject(surface, params) {
  if (params.length === 0) return "{}";
  const fields = params
    .map((param) => `${quoteProperty(param)}: ${surface}PathParamValue`)
    .join("; ");
  return `{ ${fields} }`;
}

export function quoteProperty(value) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value) ? value : JSON.stringify(value);
}

export function literalType(value) {
  if (value === null) return "null";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return "never";
}

export function parenthesizeUnion(value) {
  return value.includes(" | ") || value.includes(" & ") ? `(${value})` : value;
}

export function arrayOf(value) {
  return Array.isArray(value) ? value : [];
}

export function uniqueStrings(values) {
  return [...new Set(values.map((value) => String(value)))];
}

export function uniqueBy(values, keyFor) {
  const seen = new Set();
  const result = [];
  for (const value of values) {
    const key = keyFor(value);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(value);
  }
  return result;
}

export function uniqueTypeName(base, used) {
  let candidate = base;
  let index = 2;
  while (used.has(candidate)) {
    candidate = `${base}${index}`;
    index += 1;
  }
  return candidate;
}

export function literalArray(values) {
  return JSON.stringify(values, null, 2);
}

export function extractFirstJsonArray(source) {
  const start = source.indexOf("[");
  if (start < 0) throw new Error("Missing array literal");
  let depth = 0;
  let inString = false;
  let escape = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (inString) {
      if (escape) {
        escape = false;
      } else if (char === "\\") {
        escape = true;
      } else if (char === "\"") {
        inString = false;
      }
      continue;
    }
    if (char === "\"") {
      inString = true;
      continue;
    }
    if (char === "[") depth += 1;
    if (char === "]") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error("Unterminated array literal");
}

export function toPascalCase(value) {
  const cleaned = String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^A-Za-z0-9]+/g, " ")
    .trim();
  if (!cleaned) return "Schema";
  const result = cleaned
    .split(/\s+/)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join("");
  return /^[0-9]/.test(result) ? `N${result}` : result;
}
