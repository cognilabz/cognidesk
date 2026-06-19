import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const generatedAt = "2026-06-18";
const sourceUrl = "https://raw.githubusercontent.com/stripe/openapi/master/latest/openapi.spec3.json";
const docsDir = path.join(repoRoot, "docs/provider-coverage");
const srcDir = path.join(repoRoot, "packages/integrations/src/ecommerce/stripe");
const httpMethods = new Set(["get", "post", "delete"]);

const response = await fetch(sourceUrl, {
  headers: { "user-agent": "cognidesk-stripe-full-api-generator" },
});
if (!response.ok) {
  throw new Error(`Failed to fetch ${sourceUrl}: ${response.status} ${response.statusText}`);
}

const spec = await response.json();
const apiVersion = String(spec.info?.version ?? "unknown");
const operations = [];

for (const [operationPath, pathItem] of Object.entries(spec.paths ?? {})) {
  for (const [method, operation] of Object.entries(pathItem ?? {})) {
    if (!httpMethods.has(method)) continue;
    const operationId = operation.operationId ?? pascal(`${method}_${operationPath}`);
    operations.push({
      operationId,
      method: method.toUpperCase(),
      path: operationPath,
      pathParameters: pathParametersFor(operationPath),
      requestBodyContentTypes: Object.keys(operation.requestBody?.content ?? {}),
      ...(operation.summary ? { summary: operation.summary } : {}),
    });
  }
}

operations.sort((a, b) => a.operationId.localeCompare(b.operationId));
assertUnique(operations.map((operation) => operation.operationId), "operationId");

await mkdir(docsDir, { recursive: true });
await mkdir(srcDir, { recursive: true });

await writeFile(
  path.join(docsDir, `stripe-${apiVersion}.operations.json`),
  `${JSON.stringify({
    provider: "stripe",
    source: sourceUrl,
    apiVersion,
    generatedAt,
    documentedOperationCount: operations.length,
    implementedOperationCount: operations.length,
    unimplementedOperationCount: 0,
    generatedFunctionCount: operations.length,
    operations,
  }, null, 2)}\n`,
);

await writeFile(
  path.join(docsDir, `stripe-${apiVersion}.functions.json`),
  `${JSON.stringify({
    provider: "stripe",
    source: sourceUrl,
    apiVersion,
    generatedAt,
    generatedFunctionCount: operations.length,
    functions: operations.map((operation) => ({
      name: operation.operationId,
      operationId: operation.operationId,
    })),
  }, null, 2)}\n`,
);

await writeFile(path.join(srcDir, "full-api-operations.generated.ts"), renderOperationsFile(apiVersion));
await writeFile(path.join(srcDir, "full-api-client.generated.ts"), renderClientFile(apiVersion));

console.log(`packages/integrations/src/ecommerce/stripe: generated ${operations.length} operations from Stripe OpenAPI ${apiVersion}`);

function renderOperationsFile(apiVersion) {
  return `// Generated from Stripe OpenAPI ${apiVersion} (${sourceUrl}).\n`
    + "// Do not edit by hand; run scripts/generate-stripe-full-api.mjs after checking upstream docs.\n\n"
    + "export type StripeFullApiHttpMethod = \"GET\" | \"POST\" | \"DELETE\";\n\n"
    + "export interface StripeFullApiOperation {\n"
    + "  operationId: string;\n"
    + "  method: StripeFullApiHttpMethod;\n"
    + "  path: string;\n"
    + "  pathParameters: string[];\n"
    + "  requestBodyContentTypes: string[];\n"
    + "  summary?: string;\n"
    + "}\n\n"
    + `export const STRIPE_FULL_API_SPEC_SOURCE = ${JSON.stringify(sourceUrl)};\n`
    + `export const STRIPE_FULL_API_SPEC_VERSION = ${JSON.stringify(apiVersion)};\n`
    + `export const STRIPE_FULL_API_OPERATION_COUNT = ${operations.length};\n`
    + `export const STRIPE_FULL_API_OPERATIONS = ${JSON.stringify(operations, null, 2)} as const satisfies readonly StripeFullApiOperation[];\n\n`
    + "export type StripeFullApiOperationId = typeof STRIPE_FULL_API_OPERATIONS[number][\"operationId\"];\n\n"
    + "export const STRIPE_FULL_API_OPERATION_BY_ID: ReadonlyMap<string, StripeFullApiOperation> = new Map(\n"
    + "  STRIPE_FULL_API_OPERATIONS.map((operation) => [operation.operationId, operation]),\n"
    + ");\n";
}

function renderClientFile(apiVersion) {
  const interfaceMethods = operations
    .map((operation) => `  ${operation.operationId}<T = StripeResource>(input?: StripeOperationRequestInput): Promise<T>;`)
    .join("\n");
  const functionNames = operations.map((operation) => operation.operationId);
  const bodyMethods = operations
    .map((operation) => `    ${operation.operationId}: (input) => callOperation(${JSON.stringify(operation.operationId)}, input),`)
    .join("\n");

  return `// Generated from Stripe OpenAPI ${apiVersion} (${sourceUrl}).\n`
    + "// Do not edit by hand; run scripts/generate-stripe-full-api.mjs after checking upstream docs.\n\n"
    + "import type { StripeOperationRequestInput, StripeResource } from \"./index.js\";\n\n"
    + "export type StripeGeneratedOperationCaller = <T = StripeResource>(operationId: string, input?: StripeOperationRequestInput) => Promise<T>;\n\n"
    + "export interface StripeFullApiGeneratedClient {\n"
    + `${interfaceMethods}\n`
    + "}\n\n"
    + `export const STRIPE_FULL_API_GENERATED_FUNCTION_NAMES = ${JSON.stringify(functionNames, null, 2)} as const;\n`
    + "export const STRIPE_FULL_API_GENERATED_FUNCTION_COUNT = STRIPE_FULL_API_GENERATED_FUNCTION_NAMES.length;\n\n"
    + "export function createStripeFullApiGeneratedClient(callOperation: StripeGeneratedOperationCaller): StripeFullApiGeneratedClient {\n"
    + "  return {\n"
    + `${bodyMethods}\n`
    + "  };\n"
    + "}\n";
}

function pathParametersFor(operationPath) {
  return [...String(operationPath).matchAll(/\{([^}]+)\}/g)].map((match) => match[1]);
}

function pascal(value) {
  return String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join("");
}

function assertUnique(values, label) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) throw new Error(`Duplicate Stripe ${label}: ${value}`);
    seen.add(value);
  }
}
