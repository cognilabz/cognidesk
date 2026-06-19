import path from "node:path";
import { hardenedBlockEnd, hardenedBlockStart, repoRoot } from "./constants.mjs";
import {
  extractFirstJsonArray,
  extractPathParams,
  findOperationsStatementEnd,
  literalArray,
  removeHardenedBlock,
  renderPathParamObject,
  uniqueBy,
  uniqueStrings,
} from "./utils.mjs";

export function extractOperations(source, file) {
  const parseMatch = source.match(/export const \w+_OPERATIONS\s*=\s*JSON\.parse\(([\s\S]*?)\)\s*as\s+readonly\s+\w+\[\];/);
  if (parseMatch?.[1]) {
    return JSON.parse(JSON.parse(parseMatch[1]));
  }

  const literalMatch = source.match(/export const \w+_OPERATIONS(?:\s*:\s*readonly\s+\w+\[\])?\s*=/);
  if (literalMatch?.[0]) {
    const assignmentStart = literalMatch.index ?? 0;
    const literal = extractFirstJsonArray(source.slice(assignmentStart + literalMatch[0].length));
    try {
      return JSON.parse(literal);
    } catch (error) {
      throw new Error(`Could not parse literal generated operations from ${path.relative(repoRoot, file)}: ${error.message}`);
    }
  }

  throw new Error(`Could not extract generated operations from ${path.relative(repoRoot, file)}`);
}

export function parseClientShape(source, file) {
  const importMatch = source.match(/import type \{ ([^}]+) \} from "\.\/index\.js";/);
  if (!importMatch?.[1]) throw new Error(`Could not parse index import in ${path.relative(repoRoot, file)}`);

  const importedTypes = importMatch[1].split(",").map((part) => part.trim()).filter(Boolean);
  const requestType = importedTypes.find((name) => name.endsWith("OperationRequestInput"));
  if (!requestType) throw new Error(`Could not find operation request input type in ${path.relative(repoRoot, file)}`);

  const callerMatch = source.match(/export type (\w+GeneratedOperationCaller)\s*=/);
  const interfaceMatch = source.match(/export interface (\w+GeneratedClient)\b[^{]*\{/);
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

export function hardenOperationsFile(source, operations) {
  const operationConstMatch = source.match(/export const ([A-Z0-9_]+_OPERATIONS)\b/);
  if (!operationConstMatch?.[1]) return source;

  const operationConstName = operationConstMatch[1];
  const ids = uniqueStrings(operations.map((operation) => operation.id ?? operation.operationId).filter(Boolean));
  const operationIds = uniqueStrings(operations.map((operation) => operation.operationId).filter(Boolean));
  const uids = uniqueStrings(operations.map((operation) => operation.uid).filter(Boolean));
  const idsConstName = operationConstName.replace(/_OPERATIONS$/, "_OPERATION_IDS");
  const operationIdsConstName = operationIds.length > 0
    ? operationConstName.replace(/_OPERATIONS$/, "_OPERATION_OPERATION_IDS")
    : idsConstName;
  const uidsConstName = operationConstName.replace(/_OPERATIONS$/, "_OPERATION_UIDS");

  let next = removeHardenedBlock(source);
  const insertionIndex = findOperationsStatementEnd(next, operationConstName);
  const block = [
    "",
    hardenedBlockStart,
    ...(ids.length > 0 ? [`export const ${idsConstName} = ${literalArray(ids)} as const;`] : []),
    ...(operationIds.length > 0 ? [`export const ${operationIdsConstName} = ${literalArray(operationIds)} as const;`] : []),
    ...(uids.length > 0 ? [`export const ${uidsConstName} = ${literalArray(uids)} as const;`] : []),
    hardenedBlockEnd,
    "",
  ].join("\n");
  next = `${next.slice(0, insertionIndex)}${block}${next.slice(insertionIndex)}`;

  next = next.replace(
    /export type (\w+OperationUid)\s*=\s*[^;]+;/g,
    (_match, typeName) => `export type ${typeName} = typeof ${uidsConstName}[number];`,
  );
  next = next.replace(
    /export type (\w+OperationId)\s*=\s*string;/g,
    (_match, typeName) => `export type ${typeName} = typeof ${operationIdsConstName}[number];`,
  );
  next = next.replace(
    /export type (\w+OperationId)\s*=\s*\(typeof\s+\w+_OPERATIONS\)\[number\]\["operationId"\];/g,
    (_match, typeName) => `export type ${typeName} = typeof ${operationIdsConstName}[number];`,
  );
  next = next.replace(
    /export type (\w+OperationId)\s*=\s*typeof\s+\w+_OPERATION_OPERATION_IDS\[number\];/g,
    (_match, typeName) => `export type ${typeName} = typeof ${operationIdsConstName}[number];`,
  );

  return next;
}

export function renderClientFile(source, operations, file, shape, schemaFile) {
  const headerEnd = source.indexOf("import type");
  if (headerEnd < 0) throw new Error(`Missing index import in ${path.relative(repoRoot, file)}`);
  const header = source.slice(0, headerEnd);
  const keyField = operations.every((operation) => typeof operation.uid === "string")
    ? "uid"
    : operations.every((operation) => typeof operation.id === "string")
      ? "id"
      : "operationId";
  const operationEntries = operations.map((operation) => ({
    key: String(operation[keyField]),
    functionName: String(operation.functionName ?? operation.operationId ?? operation.id ?? operation.uid),
    pathParams: extractPathParams(String(operation.path ?? "")),
  }));
  const uniqueOperationEntries = uniqueBy(operationEntries, (entry) => entry.key);
  const functionNames = uniqueOperationEntries.map((entry) => entry.functionName);
  const schemaImport = `./${path.basename(schemaFile, ".ts")}.js`;

  const importLine = `import type { ${shape.requestType} } from "./index.js";`;
  const schemaImportLine = `import type {
  ${shape.surface}OperationQueryMap,
  ${shape.surface}OperationQueryRequiredMap,
  ${shape.surface}OperationRequestBodyMap,
  ${shape.surface}OperationRequestBodyRequiredMap,
  ${shape.surface}OperationResponseMap,
} from "${schemaImport}";`;

  const pathParamMap = uniqueOperationEntries
    .map((entry) => `  ${JSON.stringify(entry.key)}: ${renderPathParamObject(shape.surface, entry.pathParams)};`)
    .join("\n");
  const requestMap = uniqueOperationEntries
    .map((entry) => `  ${JSON.stringify(entry.key)}: ${shape.surface}OperationInput<${JSON.stringify(entry.key)}>;`)
    .join("\n");
  const interfaceMethods = uniqueOperationEntries
    .map((entry) => `  ${entry.functionName}(...args: ${shape.surface}OperationArgs<${JSON.stringify(entry.key)}>): Promise<${shape.surface}OperationResponseMap[${JSON.stringify(entry.key)}]>;`)
    .join("\n");
  const bodyMethods = uniqueOperationEntries
    .map((entry) => `    ${entry.functionName}: (...args) => callOperation(${JSON.stringify(entry.key)}, ...(args as ${shape.surface}OperationArgs<${JSON.stringify(entry.key)}>)),`)
    .join("\n");

  return `${header}${importLine}\n${schemaImportLine}\n\n` +
    `export type ${shape.surface}PathParamValue = string | number;\n` +
    `export interface ${shape.surface}OperationPathParamMap {\n${pathParamMap}\n}\n\n` +
    `export type ${shape.surface}OperationKey = keyof ${shape.surface}OperationPathParamMap & string;\n\n` +
    `export type ${shape.surface}OperationQueryInput<OperationKey extends ${shape.surface}OperationKey> =\n` +
    `  ${shape.surface}OperationQueryRequiredMap[OperationKey] extends true\n` +
    `    ? { query: ${shape.surface}OperationQueryMap[OperationKey] }\n` +
    `    : { query?: ${shape.surface}OperationQueryMap[OperationKey] };\n\n` +
    `export type ${shape.surface}OperationBodyInput<OperationKey extends ${shape.surface}OperationKey> =\n` +
    `  [${shape.surface}OperationRequestBodyMap[OperationKey]] extends [never]\n` +
    `    ? { body?: never }\n` +
    `    : ${shape.surface}OperationRequestBodyRequiredMap[OperationKey] extends true\n` +
    `      ? { body: ${shape.surface}OperationRequestBodyMap[OperationKey] }\n` +
    `      : { body?: ${shape.surface}OperationRequestBodyMap[OperationKey] };\n\n` +
    `export type ${shape.surface}OperationInput<OperationKey extends ${shape.surface}OperationKey> = Omit<${shape.requestType}, "pathParams" | "query" | "body"> & (\n` +
    `  {} extends ${shape.surface}OperationPathParamMap[OperationKey]\n` +
    `    ? { pathParams?: never }\n` +
    `    : { pathParams: ${shape.surface}OperationPathParamMap[OperationKey] }\n` +
    `) & ${shape.surface}OperationQueryInput<OperationKey> & ${shape.surface}OperationBodyInput<OperationKey>;\n\n` +
    `export interface ${shape.surface}OperationRequestMap {\n${requestMap}\n}\n\n` +
    `export type ${shape.surface}OperationArgs<OperationKey extends ${shape.surface}OperationKey> = {} extends ${shape.surface}OperationPathParamMap[OperationKey]\n` +
    `  ? [input?: ${shape.surface}OperationRequestMap[OperationKey]]\n` +
    `  : [input: ${shape.surface}OperationRequestMap[OperationKey]];\n\n` +
    `export type ${shape.callerType} = <OperationKey extends ${shape.surface}OperationKey>(\n` +
    `  operationKey: OperationKey,\n` +
    `  ...args: ${shape.surface}OperationArgs<OperationKey>\n` +
    `) => Promise<${shape.surface}OperationResponseMap[OperationKey]>;\n\n` +
    `export interface ${shape.clientInterface} {\n${interfaceMethods}\n}\n\n` +
    `export const ${shape.functionCountConst} = ${uniqueOperationEntries.length} as const;\n` +
    `export const ${shape.functionNamesConst} = ${JSON.stringify(functionNames, null, 2)} as const satisfies readonly (keyof ${shape.clientInterface})[];\n\n` +
    `export function ${shape.createFunction}(\n` +
    `  callOperation: ${shape.callerType},\n` +
    `): ${shape.clientInterface} {\n` +
    `  return {\n${bodyMethods}\n  };\n}\n`;
}
