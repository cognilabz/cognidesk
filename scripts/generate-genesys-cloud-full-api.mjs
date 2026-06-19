import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const generatedAt = "2026-06-17";
const swaggerUrl = "https://api.mypurecloud.com/api/v2/docs/swagger";
const methods = new Set(["get", "post", "put", "patch", "delete", "head"]);

const response = await fetch(swaggerUrl);
if (!response.ok) throw new Error(`Failed to fetch ${swaggerUrl}: ${response.status}`);
const spec = await response.json();

const operations = [];
for (const [operationPath, pathItem] of Object.entries(spec.paths ?? {})) {
  for (const [method, operation] of Object.entries(pathItem ?? {})) {
    if (!methods.has(method)) continue;
    const bodyParamCount = (operation.parameters ?? [])
      .filter((parameter) => parameter.in === "body" || parameter.in === "formData")
      .length;
    const consumes = operation.consumes ?? spec.consumes ?? [];
    const operationId = operation.operationId ?? `${method}_${operationPath}`;
    operations.push({
      id: operationId,
      operationId,
      functionName: pascal(operationId),
      method: method.toUpperCase(),
      path: operationPath,
      tags: Array.isArray(operation.tags) ? operation.tags : [],
      summary: operation.summary ?? "",
      requestContentTypes: bodyParamCount > 0 ? consumes : [],
      sourceUrl: swaggerUrl,
    });
  }
}

operations.sort((a, b) => a.functionName.localeCompare(b.functionName));
assertUnique(operations.map((operation) => operation.functionName), "function name");

const docsDir = path.join(repoRoot, "docs/provider-coverage");
const srcDir = path.join(repoRoot, "packages/integrations/src/contact-center/genesys-cloud");
await mkdir(docsDir, { recursive: true });
await mkdir(srcDir, { recursive: true });

const artifactStem = `genesys-cloud-full-api-${generatedAt}`;
const specSummary = {
  sourceUrl: swaggerUrl,
  swagger: String(spec.swagger ?? "unknown"),
  version: String(spec.info?.version ?? "unknown"),
  pathCount: Object.keys(spec.paths ?? {}).length,
  documentedOperationCount: operations.length,
  tagCount: Array.isArray(spec.tags) ? spec.tags.length : countTags(operations),
};

await writeFile(
  path.join(docsDir, `${artifactStem}.operations.json`),
  `${JSON.stringify({ generatedAt, spec: specSummary, operations }, null, 2)}\n`,
);
await writeFile(
  path.join(docsDir, `${artifactStem}.functions.json`),
  `${JSON.stringify({
    generatedAt,
    functionCount: operations.length,
    functions: operations.map(({ id, operationId, functionName, method, path, tags, sourceUrl }) => ({
      id,
      operationId,
      functionName,
      method,
      path,
      tags,
      sourceUrl,
    })),
  }, null, 2)}\n`,
);

await writeFile(
  path.join(srcDir, "full-api-operations.generated.ts"),
  renderOperationsFile(specSummary, operations),
);
await writeFile(
  path.join(srcDir, "full-api-client.generated.ts"),
  renderClientFile(operations),
);

console.log(`packages/integrations/src/contact-center/genesys-cloud: generated ${operations.length} operations`);

function renderOperationsFile(specSummary, operations) {
  return `// Generated from Genesys Cloud Platform API Swagger (${swaggerUrl}).\n// Do not edit by hand; run scripts/generate-genesys-cloud-full-api.mjs after checking upstream docs.\n\nexport type GenesysCloudFullApiOperationMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD";\n\nexport interface GenesysCloudFullApiSpec {\n  sourceUrl: string;\n  swagger: string;\n  version: string;\n  pathCount: number;\n  documentedOperationCount: number;\n  tagCount: number;\n}\n\nexport interface GenesysCloudFullApiOperation {\n  id: string;\n  operationId: string;\n  functionName: string;\n  method: GenesysCloudFullApiOperationMethod;\n  path: string;\n  tags: readonly string[];\n  summary: string;\n  requestContentTypes: readonly string[];\n  sourceUrl: string;\n}\n\nexport const GENESYS_CLOUD_FULL_API_SPEC_SOURCE = "${swaggerUrl}" as const;\nexport const GENESYS_CLOUD_FULL_API_SPEC_VERSION = "genesys-cloud-${specSummary.version}-${generatedAt}" as const;\nexport const GENESYS_CLOUD_FULL_API_GENERATED_AT = "${generatedAt}" as const;\nexport const GENESYS_CLOUD_FULL_API_OPERATION_COUNT = ${operations.length} as const;\n\nexport const GENESYS_CLOUD_FULL_API_SPEC: GenesysCloudFullApiSpec = ${literal(specSummary)};\n\nexport const GENESYS_CLOUD_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly GenesysCloudFullApiOperation[];\n\nexport type GenesysCloudFullApiOperationId = string;\n\nexport const GENESYS_CLOUD_FULL_API_OPERATION_BY_ID = new Map<string, GenesysCloudFullApiOperation>(\n  GENESYS_CLOUD_FULL_API_OPERATIONS.map((operation) => [operation.id, operation]),\n);\n`;
}

function renderClientFile(operations) {
  const interfaceMethods = operations
    .map((operation) => `  ${operation.functionName}<T = GenesysCloudResource>(input?: GenesysCloudOperationRequestInput): Promise<T>;`)
    .join("\n");
  const functionNames = operations.map((operation) => operation.functionName);
  const bodyMethods = operations
    .map((operation) => `    ${operation.functionName}: (input) => callOperation("${operation.id}", input),`)
    .join("\n");

  return `// Generated from Genesys Cloud Platform API Swagger (${swaggerUrl}).\n// Do not edit by hand; run scripts/generate-genesys-cloud-full-api.mjs after checking upstream docs.\n\nimport type { GenesysCloudOperationRequestInput, GenesysCloudResource } from "./index.js";\n\nexport type GenesysCloudGeneratedOperationCaller = <T = GenesysCloudResource>(operationId: string, input?: GenesysCloudOperationRequestInput) => Promise<T>;\n\nexport interface GenesysCloudFullApiGeneratedClient {\n${interfaceMethods}\n}\n\nexport const GENESYS_CLOUD_FULL_API_GENERATED_FUNCTION_COUNT = ${operations.length} as const;\nexport const GENESYS_CLOUD_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly string[];\n\nexport function createGenesysCloudFullApiGeneratedClient(\n  callOperation: GenesysCloudGeneratedOperationCaller,\n): GenesysCloudFullApiGeneratedClient {\n  return {\n${bodyMethods}\n  };\n}\n`;
}

function pascal(value) {
  const normalized = String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim();
  const result = normalized
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join("");
  return /^\d/.test(result) ? `Op${result}` : result;
}

function assertUnique(values, label) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) throw new Error(`Duplicate Genesys Cloud ${label}: ${value}`);
    seen.add(value);
  }
}

function countTags(operations) {
  return new Set(operations.flatMap((operation) => operation.tags)).size;
}

function literal(value) {
  return JSON.stringify(value, null, 2);
}
