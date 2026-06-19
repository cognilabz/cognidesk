import { mkdir, writeFile } from "node:fs/promises";

const SPEC_SOURCE = "https://api.elevenlabs.io/openapi.json";
const DOCS_SOURCE = "https://elevenlabs.io/docs/api-reference";
const PACKAGE_DIR = "packages/integrations/src/voice/elevenlabs";
const DOCS_DIR = "docs/provider-coverage";
const GENERATED_AT = "2026-06-18";
const httpMethods = new Set(["get", "post", "put", "patch", "delete"]);

const response = await fetch(SPEC_SOURCE, {
  headers: {
    accept: "application/json",
    "user-agent": "cognidesk-elevenlabs-full-api-generator",
  },
});
if (!response.ok) {
  throw new Error(`Unable to fetch ElevenLabs OpenAPI spec: ${response.status} ${response.statusText}`);
}

const spec = await response.json();
if (!spec.paths || spec.openapi !== "3.1.0") {
  throw new Error("ElevenLabs OpenAPI spec did not contain expected OpenAPI 3.1.0 paths.");
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
  openapi: spec.openapi ?? "",
  version: spec.info?.version ?? "",
  title: spec.info?.title ?? "",
  pathCount: Object.keys(spec.paths ?? {}).length,
  operationCount: operations.length,
  tags: [...new Set(operations.flatMap((operation) => operation.tags))].sort(),
};

const operationModule = `// Generated from the ElevenLabs OpenAPI spec (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-elevenlabs-full-api.mjs after checking upstream docs.\n\nexport const ELEVENLABS_FULL_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const ELEVENLABS_FULL_API_SPEC_SOURCE = ${JSON.stringify(SPEC_SOURCE)};\nexport const ELEVENLABS_FULL_API_DOCS_SOURCE = ${JSON.stringify(DOCS_SOURCE)};\nexport const ELEVENLABS_FULL_API_SPEC_VERSION = ${JSON.stringify(spec.info?.version ?? "")};\nexport const ELEVENLABS_FULL_API_OPENAPI_VERSION = ${JSON.stringify(spec.openapi ?? "")};\nexport const ELEVENLABS_FULL_API_PATH_COUNT = ${specSummary.pathCount};\nexport const ELEVENLABS_FULL_API_OPERATION_COUNT = ${operations.length};\n\nexport interface ElevenLabsFullApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n  path: string;\n  summary: string;\n  tags: readonly string[];\n}\n\nexport const ELEVENLABS_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly ElevenLabsFullApiOperation[];\nexport const ELEVENLABS_FULL_API_OPERATION_BY_UID = new Map(ELEVENLABS_FULL_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const ELEVENLABS_FULL_API_OPERATION_BY_ID = new Map<string, ElevenLabsFullApiOperation>();\nfor (const operation of ELEVENLABS_FULL_API_OPERATIONS) {\n  if (!ELEVENLABS_FULL_API_OPERATION_BY_ID.has(operation.operationId)) {\n    ELEVENLABS_FULL_API_OPERATION_BY_ID.set(operation.operationId, operation);\n  }\n}\n\nexport type ElevenLabsFullApiOperationUid = (typeof ELEVENLABS_FULL_API_OPERATIONS)[number]["uid"];\n`;

const clientInterface = operations
  .map((operation) => `  ${operation.functionName}<T = unknown>(input?: ElevenLabsOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = operations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = operations.map((operation) => operation.functionName);

const clientModule = `// Generated from the ElevenLabs OpenAPI spec (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-elevenlabs-full-api.mjs after checking upstream docs.\n\nimport type { ElevenLabsOperationRequestInput } from "./index.js";\n\nexport type ElevenLabsGeneratedOperationCaller = <T = unknown>(operationUid: string, input?: ElevenLabsOperationRequestInput) => Promise<T>;\n\nexport interface ElevenLabsFullApiGeneratedClient {\n${clientInterface}\n}\n\nexport const ELEVENLABS_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof ElevenLabsFullApiGeneratedClient)[];\nexport const ELEVENLABS_FULL_API_GENERATED_FUNCTION_COUNT = ELEVENLABS_FULL_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createElevenLabsFullApiGeneratedClient(caller: ElevenLabsGeneratedOperationCaller): ElevenLabsFullApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  spec: specSummary,
  operations,
};

await writeFile(`${PACKAGE_DIR}/full-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/full-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/elevenlabs-full-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/elevenlabs-full-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: specSummary,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${operations.length} ElevenLabs REST operations from ${specSummary.pathCount} OpenAPI paths.`);

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
