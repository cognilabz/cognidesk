import { mkdir, writeFile } from "node:fs/promises";
import { parse } from "yaml";

const SPEC_SOURCE = "https://raw.githubusercontent.com/ringcentral/engage-digital-api-docs/master/specs/engage-digital_openapi3.yaml";
const DOCS_SOURCE = "https://developers.ringcentral.com/engage-digital-api";
const REPO_SOURCE = "https://github.com/ringcentral/engage-digital-api-docs";
const PACKAGE_DIR = "packages/integrations/src/contact-center/ringcentral";
const DOCS_DIR = "docs/provider-coverage";
const GENERATED_AT = "2026-06-18";
const httpMethods = new Set(["get", "post", "put", "patch", "delete", "head", "options"]);

const response = await fetch(SPEC_SOURCE, {
  headers: {
    accept: "text/yaml, application/yaml, text/plain",
    "user-agent": "cognidesk-ringcentral-digital-api-generator",
  },
});
if (!response.ok) {
  throw new Error(`Unable to fetch RingCentral Engage Digital OpenAPI spec: ${response.status} ${response.statusText}`);
}
const spec = parse(await response.text());
if (!spec?.paths || spec.openapi !== "3.0.0") {
  throw new Error("RingCentral Engage Digital spec did not contain expected OpenAPI 3.0.0 paths.");
}

const operations = [];
const usedFunctionNames = new Map();
for (const [path, pathItem] of Object.entries(spec.paths ?? {})) {
  for (const [method, operation] of Object.entries(pathItem ?? {})) {
    if (!httpMethods.has(method)) continue;
    const methodUpper = method.toUpperCase();
    const operationId = operation.operationId ?? toOperationId(methodUpper, path, operation.summary);
    const baseName = toPascalCase(operationId);
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
  repository: REPO_SOURCE,
  openapi: spec.openapi ?? "",
  version: spec.info?.version ?? "",
  title: spec.info?.title ?? "",
  serverUrl: spec.servers?.[0]?.url ?? "",
  pathCount: Object.keys(spec.paths ?? {}).length,
  operationCount: operations.length,
  tags: [...new Set(operations.flatMap((operation) => operation.tags))].sort(),
};

const operationModule = `// Generated from the RingCentral Engage Digital OpenAPI spec (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-ringcentral-digital-api.mjs after checking upstream docs.\n\nexport const RINGCENTRAL_DIGITAL_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const RINGCENTRAL_DIGITAL_API_SPEC_SOURCE = ${JSON.stringify(SPEC_SOURCE)};\nexport const RINGCENTRAL_DIGITAL_API_DOCS_SOURCE = ${JSON.stringify(DOCS_SOURCE)};\nexport const RINGCENTRAL_DIGITAL_API_REPO_SOURCE = ${JSON.stringify(REPO_SOURCE)};\nexport const RINGCENTRAL_DIGITAL_API_SPEC_VERSION = ${JSON.stringify(spec.info?.version ?? "")};\nexport const RINGCENTRAL_DIGITAL_API_OPENAPI_VERSION = ${JSON.stringify(spec.openapi ?? "")};\nexport const RINGCENTRAL_DIGITAL_API_PATH_COUNT = ${specSummary.pathCount};\nexport const RINGCENTRAL_DIGITAL_API_OPERATION_COUNT = ${operations.length};\n\nexport interface RingCentralDigitalApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";\n  path: string;\n  summary: string;\n  tags: readonly string[];\n}\n\nexport const RINGCENTRAL_DIGITAL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly RingCentralDigitalApiOperation[];\nexport const RINGCENTRAL_DIGITAL_API_OPERATION_BY_ID = new Map(RINGCENTRAL_DIGITAL_API_OPERATIONS.map((operation) => [operation.operationId, operation]));\nexport const RINGCENTRAL_DIGITAL_API_OPERATION_BY_UID = new Map(RINGCENTRAL_DIGITAL_API_OPERATIONS.map((operation) => [operation.uid, operation]));\n\nexport type RingCentralDigitalApiOperationId = (typeof RINGCENTRAL_DIGITAL_API_OPERATIONS)[number]["operationId"];\nexport type RingCentralDigitalApiOperationUid = (typeof RINGCENTRAL_DIGITAL_API_OPERATIONS)[number]["uid"];\n`;

const clientInterface = operations
  .map((operation) => `  ${operation.functionName}<T = RingCentralResource>(input?: RingCentralOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = operations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = operations.map((operation) => operation.functionName);

const clientModule = `// Generated from the RingCentral Engage Digital OpenAPI spec (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-ringcentral-digital-api.mjs after checking upstream docs.\n\nimport type { RingCentralOperationRequestInput, RingCentralResource } from "./index.js";\n\nexport type RingCentralDigitalGeneratedOperationCaller = <T = RingCentralResource>(operationUid: string, input?: RingCentralOperationRequestInput) => Promise<T>;\n\nexport interface RingCentralDigitalApiGeneratedClient {\n${clientInterface}\n}\n\nexport const RINGCENTRAL_DIGITAL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof RingCentralDigitalApiGeneratedClient)[];\nexport const RINGCENTRAL_DIGITAL_API_GENERATED_FUNCTION_COUNT = RINGCENTRAL_DIGITAL_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createRingCentralDigitalApiGeneratedClient(caller: RingCentralDigitalGeneratedOperationCaller): RingCentralDigitalApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

await writeFile(`${PACKAGE_DIR}/digital-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/digital-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/ringcentral-digital-api-${GENERATED_AT}.operations.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: specSummary,
  operations,
}, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/ringcentral-digital-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: specSummary,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${operations.length} RingCentral Engage Digital operations from ${specSummary.pathCount} OpenAPI paths.`);

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
  const pascal = cleaned
    .split(/\s+/)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join("");
  return /^[A-Za-z_]/.test(pascal) ? pascal : `Operation${pascal}`;
}

function toCamelCase(value) {
  const pascal = toPascalCase(value);
  return pascal ? `${pascal.charAt(0).toLowerCase()}${pascal.slice(1)}` : "";
}
