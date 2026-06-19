import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const integrationsSrcDir = path.join(repoRoot, "packages/integrations/src");
const operationsFileSuffix = "-operations.generated.ts";
const clientFileSuffix = "-client.generated.ts";
const minOperationCount = Number(process.env.COGNIDESK_GENERATED_SPLIT_MIN_OPERATIONS ?? "40");
const maxOperationsPerChunk = Number(process.env.COGNIDESK_GENERATED_SPLIT_MAX_OPERATIONS_PER_CHUNK ?? "80");

const files = await walk(integrationsSrcDir);
const operationFiles = files
  .filter((file) => file.endsWith(operationsFileSuffix))
  .sort((a, b) => a.localeCompare(b));

let splitSurfaces = 0;
let splitChunks = 0;

for (const operationsFile of operationFiles) {
  const clientFile = operationsFile.replace(operationsFileSuffix, clientFileSuffix);
  if (!files.includes(clientFile)) continue;

  const operationsSource = await readFile(operationsFile, "utf8");
  const clientSource = await readFile(clientFile, "utf8");
  const operations = extractOperations(operationsSource, operationsFile);
  if (operations.length < minOperationCount) continue;

  const shape = parseClientShape(clientSource, clientFile);
  const render = renderSplitClient({ clientSource, clientFile, operations, shape });
  await rm(render.chunkDir, { recursive: true, force: true });
  await mkdir(render.chunkDir, { recursive: true });
  await Promise.all(render.chunks.map((chunk) => writeFile(chunk.file, chunk.source)));
  await writeFile(clientFile, render.clientSource);
  splitSurfaces += 1;
  splitChunks += render.chunks.length;
}

console.log(`Split ${splitSurfaces} generated client surfaces into ${splitChunks} endpoint chunks.`);

async function walk(root) {
  const result = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "dist" || entry.name === "build") continue;
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) {
      result.push(...await walk(absolute));
    } else {
      result.push(absolute);
    }
  }
  return result;
}

function extractOperations(source, file) {
  const parseMatch = source.match(/export const \w+_OPERATIONS\s*=\s*JSON\.parse\(([\s\S]*?)\)\s*as\s+readonly\s+\w+\[\];/);
  if (parseMatch?.[1]) return JSON.parse(JSON.parse(parseMatch[1]));

  const literalMatch = source.match(/export const \w+_OPERATIONS(?:\s*:\s*readonly\s+\w+\[\])?\s*=/);
  if (literalMatch?.[0]) {
    const assignmentStart = literalMatch.index ?? 0;
    const literal = extractFirstJsonArray(source.slice(assignmentStart + literalMatch[0].length));
    try {
      return JSON.parse(literal);
    } catch (error) {
      throw new Error(`Could not parse generated operations from ${path.relative(repoRoot, file)}: ${error.message}`);
    }
  }

  throw new Error(`Could not extract generated operations from ${path.relative(repoRoot, file)}`);
}

function parseClientShape(source, file) {
  const importMatch = source.match(/import type \{ ([^}]+) \} from "\.\/index\.js";/);
  if (!importMatch?.[1]) throw new Error(`Could not parse index import in ${path.relative(repoRoot, file)}`);

  const importedTypes = importMatch[1].split(",").map((part) => part.trim()).filter(Boolean);
  const requestType = importedTypes.find((name) => name.endsWith("OperationRequestInput"));
  if (!requestType) throw new Error(`Could not find operation request input type in ${path.relative(repoRoot, file)}`);

  const callerMatch = source.match(/export type (\w+GeneratedOperationCaller)\s*=/);
  const interfaceMatch = source.match(/export interface (\w+GeneratedClient)\b/);
  const countMatch = source.match(/export const ([A-Z0-9_]+_GENERATED_FUNCTION_COUNT)\b/);
  const namesMatch = source.match(/export const ([A-Z0-9_]+_GENERATED_FUNCTION_NAMES)\b/);
  const createMatch = source.match(/export function (create\w+GeneratedClient)\(/);
  if (!callerMatch?.[1] || !interfaceMatch?.[1] || !countMatch?.[1] || !namesMatch?.[1] || !createMatch?.[1]) {
    throw new Error(`Could not parse generated client shape in ${path.relative(repoRoot, file)}`);
  }

  return {
    callerType: callerMatch[1],
    clientInterface: interfaceMatch[1],
    functionCountConst: countMatch[1],
    functionNamesConst: namesMatch[1],
    createFunction: createMatch[1],
    requestType,
    surface: interfaceMatch[1].replace(/GeneratedClient$/, ""),
  };
}

function renderSplitClient({ clientSource, clientFile, operations, shape }) {
  const headerEnd = clientSource.indexOf("import type");
  if (headerEnd < 0) throw new Error(`Missing index import in ${path.relative(repoRoot, clientFile)}`);
  const header = clientSource.slice(0, headerEnd);
  const providerDir = path.dirname(clientFile);
  const clientModuleBase = path.basename(clientFile, ".ts");
  const schemaModuleBase = `${path.basename(clientFile, clientFileSuffix)}-schema-types.generated`;
  const generatedDirName = `${path.basename(clientFile, clientFileSuffix)}.generated`;
  const chunkDir = path.join(providerDir, generatedDirName, "client");
  const importBase = `./${generatedDirName}/client`;
  const operationEntries = uniqueBy(operations.map((operation) => ({
    key: operationKey(operation, operations),
    functionName: String(operation.functionName ?? operation.operationId ?? operation.id ?? operation.uid),
    pathParams: extractPathParams(String(operation.path ?? "")),
    group: operationGroup(operation),
  })), (entry) => entry.key);
  const groups = groupBy(operationEntries, (entry) => entry.group);
  const chunks = [];
  const chunkImports = [];
  const pathParamInterfaces = [];
  const requestMapInterfaces = [];
  const clientInterfaces = [];
  const functionNameConstants = [];
  const createFunctions = [];

  for (const [groupName, groupedEntries] of [...groups.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    const entryChunks = chunkEntries(groupedEntries, maxOperationsPerChunk);
    for (let index = 0; index < entryChunks.length; index += 1) {
      const entries = entryChunks[index];
      const chunkName = entryChunks.length > 1
        ? `${groupName}-${String(index + 1).padStart(2, "0")}`
        : groupName;
      const identifier = uniqueChunkIdentifier(chunkName, chunks.map((chunk) => chunk.identifier), shape.surface);
      const fileName = `${slug(chunkName)}-chunk.generated.ts`;
    const file = path.join(chunkDir, fileName);
    const modulePath = `${importBase}/${path.basename(fileName, ".ts")}.js`;
    const chunk = {
      file,
      identifier,
      modulePath,
      pathParamInterface: `${shape.surface}${identifier}OperationPathParamMap`,
      requestMapInterface: `${shape.surface}${identifier}OperationRequestMap`,
      clientInterface: `${shape.surface}${identifier}GeneratedClient`,
      functionNamesConst: `${shape.surface}${identifier}GeneratedFunctionNames`,
      createFunction: `create${shape.surface}${identifier}GeneratedClient`,
      source: renderChunkFile({ shape, identifier, entries, clientModuleBase, schemaModuleBase }),
    };
      chunks.push(chunk);
      chunkImports.push(renderChunkImport(chunk));
      pathParamInterfaces.push(chunk.pathParamInterface);
      requestMapInterfaces.push(chunk.requestMapInterface);
      clientInterfaces.push(chunk.clientInterface);
      functionNameConstants.push(chunk.functionNamesConst);
      createFunctions.push(chunk.createFunction);
    }
  }

  const importLine = `import type { ${shape.requestType} } from "./index.js";`;
  const schemaImportLine = `import type {
  ${shape.surface}OperationQueryMap,
  ${shape.surface}OperationQueryRequiredMap,
  ${shape.surface}OperationRequestBodyMap,
  ${shape.surface}OperationRequestBodyRequiredMap,
  ${shape.surface}OperationResponseMap,
} from "./${path.basename(clientFile, clientFileSuffix)}-schema-types.generated.js";`;

  const clientSourceNext = `${header}${importLine}
${schemaImportLine}
${chunkImports.join("\n")}

export type ${shape.surface}PathParamValue = string | number;
export interface ${shape.surface}OperationPathParamMap extends ${pathParamInterfaces.join(", ")} {}

export type ${shape.surface}OperationKey = keyof ${shape.surface}OperationPathParamMap & string;

export type ${shape.surface}OperationQueryInput<OperationKey extends ${shape.surface}OperationKey> =
  ${shape.surface}OperationQueryRequiredMap[OperationKey] extends true
    ? { query: ${shape.surface}OperationQueryMap[OperationKey] }
    : { query?: ${shape.surface}OperationQueryMap[OperationKey] };

export type ${shape.surface}OperationBodyInput<OperationKey extends ${shape.surface}OperationKey> =
  [${shape.surface}OperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : ${shape.surface}OperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: ${shape.surface}OperationRequestBodyMap[OperationKey] }
      : { body?: ${shape.surface}OperationRequestBodyMap[OperationKey] };

export type ${shape.surface}OperationInput<OperationKey extends ${shape.surface}OperationKey> = Omit<${shape.requestType}, "pathParams" | "query" | "body"> & (
  {} extends ${shape.surface}OperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: ${shape.surface}OperationPathParamMap[OperationKey] }
) & ${shape.surface}OperationQueryInput<OperationKey> & ${shape.surface}OperationBodyInput<OperationKey>;

export interface ${shape.surface}OperationRequestMap extends ${requestMapInterfaces.join(", ")} {}

export type ${shape.surface}OperationArgs<OperationKey extends ${shape.surface}OperationKey> = {} extends ${shape.surface}OperationPathParamMap[OperationKey]
  ? [input?: ${shape.surface}OperationRequestMap[OperationKey]]
  : [input: ${shape.surface}OperationRequestMap[OperationKey]];

export type ${shape.callerType} = <OperationKey extends ${shape.surface}OperationKey>(
  operationKey: OperationKey,
  ...args: ${shape.surface}OperationArgs<OperationKey>
) => Promise<${shape.surface}OperationResponseMap[OperationKey]>;

export interface ${shape.clientInterface} extends ${clientInterfaces.join(", ")} {}

export const ${shape.functionCountConst} = ${operationEntries.length} as const;
export const ${shape.functionNamesConst} = [
${functionNameConstants.map((constant) => `  ...${constant},`).join("\n")}
] as const satisfies readonly (keyof ${shape.clientInterface})[];

export function ${shape.createFunction}(
  callOperation: ${shape.callerType},
): ${shape.clientInterface} {
  return Object.assign(
    {},
${createFunctions.map((factory) => `    ${factory}(callOperation),`).join("\n")}
  ) as ${shape.clientInterface};
}
`;

  return { clientSource: clientSourceNext, chunkDir, chunks };
}

function renderChunkImport(chunk) {
  return `import {
  ${chunk.createFunction},
  ${chunk.functionNamesConst},
  type ${chunk.clientInterface},
  type ${chunk.pathParamInterface},
  type ${chunk.requestMapInterface},
} from "${chunk.modulePath}";`;
}

function renderChunkFile({ shape, identifier, entries, clientModuleBase, schemaModuleBase }) {
  const pathParamInterface = `${shape.surface}${identifier}OperationPathParamMap`;
  const requestMapInterface = `${shape.surface}${identifier}OperationRequestMap`;
  const clientInterface = `${shape.surface}${identifier}GeneratedClient`;
  const functionNamesConst = `${shape.surface}${identifier}GeneratedFunctionNames`;
  const createFunction = `create${shape.surface}${identifier}GeneratedClient`;
  const operationKeysConst = `${shape.surface}${identifier}OperationKeys`;
  const operationKeyType = `${shape.surface}${identifier}OperationKey`;
  const pathParamMap = entries
    .map((entry) => `  ${JSON.stringify(entry.key)}: ${renderPathParamObject(shape.surface, entry.pathParams)};`)
    .join("\n");
  const requestMap = entries
    .map((entry) => `  ${JSON.stringify(entry.key)}: ${shape.surface}OperationInput<${JSON.stringify(entry.key)}>;`)
    .join("\n");
  const interfaceMethods = entries
    .map((entry) => `  ${entry.functionName}(...args: ${shape.surface}OperationArgs<${JSON.stringify(entry.key)}>): Promise<${shape.surface}OperationResponseMap[${JSON.stringify(entry.key)}]>;`)
    .join("\n");
  const bodyMethods = entries
    .map((entry) => `    ${entry.functionName}: (...args) => callOperation(${JSON.stringify(entry.key)}, ...(args as ${shape.surface}OperationArgs<${JSON.stringify(entry.key)}>)),`)
    .join("\n");
  const functionNames = entries.map((entry) => entry.functionName);
  const operationKeys = entries.map((entry) => entry.key);

  return `// Generated endpoint chunk for ${shape.surface}.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ${shape.callerType},
  ${shape.surface}OperationArgs,
  ${shape.surface}OperationInput,
  ${shape.surface}PathParamValue,
} from "../../${clientModuleBase}.js";
import type { ${shape.surface}OperationResponseMap } from "../../${schemaModuleBase}.js";

// Hardened literal operation keys for generated SDK typing.
export const ${operationKeysConst} = ${JSON.stringify(operationKeys, null, 2)} as const;
export type ${operationKeyType} = typeof ${operationKeysConst}[number];
// End hardened literal operation keys.

export interface ${pathParamInterface} {
${pathParamMap}
}

export interface ${requestMapInterface} {
${requestMap}
}

export interface ${clientInterface} {
${interfaceMethods}
}

export const ${functionNamesConst} = ${JSON.stringify(functionNames, null, 2)} as const satisfies readonly (keyof ${clientInterface})[];

export function ${createFunction}(
  callOperation: ${shape.callerType},
): ${clientInterface} {
  return {
${bodyMethods}
  };
}
`;
}

function uniqueChunkIdentifier(groupName, existing, surface) {
  const base = pascal(groupName) || "General";
  let candidate = base;
  let index = 2;
  while (existing.includes(candidate) || candidate === surface) {
    candidate = `${base}${index}`;
    index += 1;
  }
  return candidate;
}

function operationKey(operation, operations) {
  if (operations.every((candidate) => typeof candidate.uid === "string")) return String(operation.uid);
  if (operations.every((candidate) => typeof candidate.id === "string")) return String(operation.id);
  return String(operation.operationId);
}

function operationGroup(operation) {
  if (typeof operation.specKey === "string" && operation.specKey.length > 0) return operation.specKey;
  if (Array.isArray(operation.tags) && typeof operation.tags[0] === "string" && operation.tags[0].length > 0) {
    return operation.tags[0];
  }
  const pathSegment = String(operation.path ?? "").split("/").filter(Boolean)[0];
  return pathSegment || "general";
}

function extractPathParams(operationPath) {
  return [...operationPath.matchAll(/\{([^}]+)\}/g)]
    .map((match) => match[1]?.replace(/^\+/, ""))
    .filter(Boolean);
}

function renderPathParamObject(surface, params) {
  if (params.length === 0) return "{}";
  return `{ ${params.map((param) => `${JSON.stringify(param)}: ${surface}PathParamValue`).join("; ")} }`;
}

function groupBy(values, keyFn) {
  const groups = new Map();
  for (const value of values) {
    const key = keyFn(value);
    const group = groups.get(key) ?? [];
    group.push(value);
    groups.set(key, group);
  }
  return groups;
}

function chunkEntries(entries, maxEntries) {
  if (entries.length <= maxEntries) return [entries];
  const chunks = [];
  for (let index = 0; index < entries.length; index += maxEntries) {
    chunks.push(entries.slice(index, index + maxEntries));
  }
  return chunks;
}

function uniqueBy(values, keyFn) {
  const seen = new Set();
  const result = [];
  for (const value of values) {
    const key = keyFn(value);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(value);
  }
  return result;
}

function slug(value) {
  const result = String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return result || "general";
}

function pascal(value) {
  const result = String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join("");
  return /^\d/.test(result) ? `Op${result}` : result;
}

function extractFirstJsonArray(source) {
  const start = source.indexOf("[");
  if (start < 0) throw new Error("Missing JSON array.");
  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    if (inString) {
      escaped = char === "\\" ? !escaped : false;
      if (char === "\"" && !escaped) inString = false;
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
  throw new Error("Could not find JSON array end.");
}
