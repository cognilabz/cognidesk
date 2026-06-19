import { mkdir, writeFile } from "node:fs/promises";

const SPEC_SOURCE = "https://documentation.mailgun.com/_spec/docs/mailgun/api-reference/send/mailgun.json?download";
const DOCS_SOURCE = "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun";
const PACKAGE_DIR = "packages/integrations/src/email/mailgun";
const DOCS_DIR = "docs/provider-coverage";
const GENERATED_AT = "2026-06-18";
const httpMethods = new Set(["get", "post", "put", "patch", "delete"]);

const response = await fetch(SPEC_SOURCE, {
  headers: {
    accept: "application/json",
    "user-agent": "cognidesk-mailgun-full-api-generator",
  },
});
if (!response.ok) {
  throw new Error(`Unable to fetch Mailgun OpenAPI spec: ${response.status} ${response.statusText}`);
}

const spec = await response.json();
if (!spec.paths || spec.openapi !== "3.1.0") {
  throw new Error("Mailgun OpenAPI spec did not contain expected OpenAPI 3.1.0 paths.");
}

const operations = [];
const usedFunctionNames = new Map();
for (const [path, pathItem] of Object.entries(spec.paths ?? {})) {
  for (const [method, operation] of Object.entries(pathItem ?? {})) {
    if (!httpMethods.has(method)) continue;
    const methodUpper = method.toUpperCase();
    const operationId = operation.operationId ?? toOperationId(methodUpper, path, operation.summary);
    const baseName = toPascalCase(operation.summary ?? operationId);
    const seen = usedFunctionNames.get(baseName) ?? 0;
    usedFunctionNames.set(baseName, seen + 1);
    operations.push({
      uid: `${methodUpper} ${path}`,
      operationId,
      functionName: seen === 0 ? baseName : `${baseName}${seen + 1}`,
      method: methodUpper,
      path,
      summary: operation.summary ?? "",
      tags: Array.isArray(operation.tags) ? operation.tags : [],
    });
  }
}

await mkdir(PACKAGE_DIR, { recursive: true });
await mkdir(DOCS_DIR, { recursive: true });

const specSummary = {
  source: SPEC_SOURCE,
  docs: DOCS_SOURCE,
  openapi: spec.openapi ?? "",
  version: spec.info?.version ?? "",
  title: spec.info?.title ?? "",
  pathCount: Object.keys(spec.paths ?? {}).length,
  operationCount: operations.length,
  tags: [...new Set(operations.flatMap((operation) => operation.tags))].sort(),
};

const operationModule = `// Generated from the Mailgun OpenAPI spec (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-mailgun-full-api.mjs after checking upstream docs.\n\nexport const MAILGUN_FULL_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const MAILGUN_FULL_API_SPEC_SOURCE = ${JSON.stringify(SPEC_SOURCE)};\nexport const MAILGUN_FULL_API_DOCS_SOURCE = ${JSON.stringify(DOCS_SOURCE)};\nexport const MAILGUN_FULL_API_SPEC_VERSION = ${JSON.stringify(spec.info?.version ?? "")};\nexport const MAILGUN_FULL_API_OPENAPI_VERSION = ${JSON.stringify(spec.openapi ?? "")};\nexport const MAILGUN_FULL_API_PATH_COUNT = ${specSummary.pathCount};\nexport const MAILGUN_FULL_API_OPERATION_COUNT = ${operations.length};\n\nexport interface MailgunFullApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n  path: string;\n  summary: string;\n  tags: readonly string[];\n}\n\nexport const MAILGUN_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly MailgunFullApiOperation[];\nexport const MAILGUN_FULL_API_OPERATION_BY_UID = new Map(MAILGUN_FULL_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const MAILGUN_FULL_API_OPERATION_BY_ID = new Map<string, MailgunFullApiOperation>();\nfor (const operation of MAILGUN_FULL_API_OPERATIONS) {\n  if (!MAILGUN_FULL_API_OPERATION_BY_ID.has(operation.operationId)) {\n    MAILGUN_FULL_API_OPERATION_BY_ID.set(operation.operationId, operation);\n  }\n}\n\nexport type MailgunFullApiOperationUid = (typeof MAILGUN_FULL_API_OPERATIONS)[number]["uid"];\n`;

const clientInterface = operations
  .map((operation) => `  ${operation.functionName}<T = MailgunResource>(input?: MailgunOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = operations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = operations.map((operation) => operation.functionName);

const clientModule = `// Generated from the Mailgun OpenAPI spec (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-mailgun-full-api.mjs after checking upstream docs.\n\nimport type { MailgunOperationRequestInput, MailgunResource } from "./index.js";\n\nexport type MailgunGeneratedOperationCaller = <T = MailgunResource>(operationUid: string, input?: MailgunOperationRequestInput) => Promise<T>;\n\nexport interface MailgunFullApiGeneratedClient {\n${clientInterface}\n}\n\nexport const MAILGUN_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof MailgunFullApiGeneratedClient)[];\nexport const MAILGUN_FULL_API_GENERATED_FUNCTION_COUNT = MAILGUN_FULL_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createMailgunFullApiGeneratedClient(caller: MailgunGeneratedOperationCaller): MailgunFullApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  spec: specSummary,
  operations,
};

await writeFile(`${PACKAGE_DIR}/full-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/full-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/mailgun-full-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/mailgun-full-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: specSummary,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${operations.length} Mailgun operations from ${specSummary.pathCount} OpenAPI paths.`);

function toOperationId(method, path, summary) {
  const summarySlug = summary ? toCamelCase(summary) : "";
  const pathSlug = path
    .replace(/[{}]/g, "")
    .replace(/[^A-Za-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
  return summarySlug || `${method.toLowerCase()}_${pathSlug}`;
}

function toPascalCase(value) {
  const cleaned = String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^A-Za-z0-9]+/g, " ")
    .trim();
  if (!cleaned) return "CallOperation";
  return cleaned
    .split(/\s+/)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join("");
}

function toCamelCase(value) {
  const pascal = toPascalCase(value);
  return pascal ? `${pascal.charAt(0).toLowerCase()}${pascal.slice(1)}` : "";
}
