import { generatedAt } from "./config.mjs";

export function renderOperationsFile({
  header,
  constPrefix,
  typePrefix,
  methodType,
  specSource,
  specVersion,
  specType,
  specSummary,
  specsConstType,
  specs,
  operationInterfaceFields,
  operations,
  keyTypeName,
  keyField,
}) {
  const specInterface = specsConstType
    ? `
export interface ${specsConstType} {
  id: string;
  label: string;
  sourceUrl: string;
  docsUrl: string;
  version: string;
  title?: string;
  revision?: string;
  swagger?: string;
  pathCount?: number;
  operationCount: number;
}
`
    : "";
  const specsConst = specsConstType && specs
    ? `
export const ${constPrefix}_SPECS = JSON.parse(${JSON.stringify(JSON.stringify(specs))}) as readonly ${specsConstType}[];
`
    : "";
  return `${header}\n\n` +
    `export type ${typePrefix}OperationMethod = ${methodType};\n` +
    `${specInterface}\n` +
    `export interface ${typePrefix}Operation {\n  ${operationInterfaceFields.join("\n  ")}\n}\n\n` +
    `export const ${constPrefix}_SPEC_SOURCE = ${JSON.stringify(specSource)} as const;\n` +
    `export const ${constPrefix}_SPEC_VERSION = ${JSON.stringify(specVersion)} as const;\n` +
    `export const ${constPrefix}_GENERATED_AT = ${JSON.stringify(generatedAt)} as const;\n` +
    `export const ${constPrefix}_OPERATION_COUNT = ${operations.length} as const;\n` +
    `${specsConst}` +
    `\nexport const ${constPrefix}_SPEC = JSON.parse(${JSON.stringify(JSON.stringify(specSummary))}) as ${specType};\n\n` +
    `export const ${constPrefix}_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly ${typePrefix}Operation[];\n\n` +
    `export type ${keyTypeName} = string;\n\n` +
    `export const ${constPrefix}_OPERATION_BY_ID = new Map<string, ${typePrefix}Operation>(\n` +
    `  ${constPrefix}_OPERATIONS.map((operation) => [operation.${keyField}, operation]),\n` +
    `);\n` +
    (keyField === "uid"
      ? `export const ${constPrefix}_OPERATION_BY_UID = ${constPrefix}_OPERATION_BY_ID;\n`
      : "") +
    (operations.some((operation) => operation.operationId)
      ? `export const ${constPrefix}_OPERATION_BY_OPERATION_ID = new Map<string, ${typePrefix}Operation>();\n` +
        `for (const operation of ${constPrefix}_OPERATIONS) {\n` +
        `  if (operation.operationId && !${constPrefix}_OPERATION_BY_OPERATION_ID.has(operation.operationId)) {\n` +
        `    ${constPrefix}_OPERATION_BY_OPERATION_ID.set(operation.operationId, operation);\n` +
        `  }\n` +
        `}\n`
      : "");
}

export function renderClientFile({
  header,
  typePrefix,
  callerType,
  clientInterface,
  createFunction,
  constPrefix,
  requestInputType,
  resourceType,
  operations,
  keyField,
}) {
  const interfaceMethods = operations
    .map((operation) => `  ${operation.functionName}<T = ${resourceType}>(input?: ${requestInputType}): Promise<T>;`)
    .join("\n");
  const functionNames = operations.map((operation) => operation.functionName);
  const bodyMethods = operations
    .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation[keyField])}, input),`)
    .join("\n");
  return `${header}\n\n` +
    `import type { ${requestInputType}, ${resourceType} } from "./index.js";\n\n` +
    `export type ${callerType} = <T = ${resourceType}>(operationId: string, input?: ${requestInputType}) => Promise<T>;\n\n` +
    `export interface ${clientInterface} {\n${interfaceMethods}\n}\n\n` +
    `export const ${constPrefix}_GENERATED_FUNCTION_COUNT = ${operations.length} as const;\n` +
    `export const ${constPrefix}_GENERATED_FUNCTION_NAMES = ${literal(functionNames)} as const satisfies readonly (keyof ${clientInterface})[];\n\n` +
    `export function ${createFunction}(caller: ${callerType}): ${clientInterface} {\n` +
    `  return {\n${bodyMethods}\n  };\n}\n`;
}

export function literal(value) {
  return JSON.stringify(value, null, 2);
}
