import { mkdir, writeFile } from "node:fs/promises";

const SPEC_SOURCE = "https://developers.zoom.us/api-hub/meetings/methods/endpoints.json";
const DOCS_SOURCE = "https://developers.zoom.us/docs/api/meetings/";
const PACKAGE_DIR = "packages/integrations/src/video/zoom";
const DOCS_DIR = "docs/provider-coverage";
const GENERATED_AT = "2026-06-18";
const httpMethods = new Set(["get", "post", "put", "patch", "delete"]);

const response = await fetch(SPEC_SOURCE, {
  headers: {
    accept: "application/json",
    "user-agent": "cognidesk-zoom-meetings-api-generator",
  },
});
if (!response.ok) {
  throw new Error(`Unable to fetch Zoom Meetings API Hub spec: ${response.status} ${response.statusText}`);
}
const spec = await response.json();
if (!spec.paths || spec.openapi !== "3.0.0") {
  throw new Error("Zoom Meetings API Hub spec did not contain expected OpenAPI paths.");
}

const operations = [];
const usedFunctionNames = new Map();
for (const [path, pathItem] of Object.entries(spec.paths ?? {})) {
  for (const [method, operation] of Object.entries(pathItem ?? {})) {
    if (!httpMethods.has(method)) continue;
    const operationId = operation.operationId ?? `${method}_${path}`;
    const baseName = toPascalCase(operationId);
    const seen = usedFunctionNames.get(baseName) ?? 0;
    usedFunctionNames.set(baseName, seen + 1);
    operations.push({
      uid: `${method.toUpperCase()} ${path}`,
      operationId,
      functionName: seen === 0 ? baseName : `${baseName}${seen + 1}`,
      method: method.toUpperCase(),
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
};

const operationModule = `// Generated from the Zoom Meetings API Hub OpenAPI spec (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-zoom-meetings-api.mjs after checking upstream docs.\n\nexport const ZOOM_MEETINGS_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const ZOOM_MEETINGS_API_SPEC_SOURCE = ${JSON.stringify(SPEC_SOURCE)};\nexport const ZOOM_MEETINGS_API_DOCS_SOURCE = ${JSON.stringify(DOCS_SOURCE)};\nexport const ZOOM_MEETINGS_API_SPEC_VERSION = ${JSON.stringify(spec.info?.version ?? "")};\nexport const ZOOM_MEETINGS_API_OPENAPI_VERSION = ${JSON.stringify(spec.openapi ?? "")};\nexport const ZOOM_MEETINGS_API_PATH_COUNT = ${specSummary.pathCount};\nexport const ZOOM_MEETINGS_API_OPERATION_COUNT = ${operations.length};\n\nexport interface ZoomMeetingsApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n  path: string;\n  summary: string;\n  tags: readonly string[];\n}\n\nexport const ZOOM_MEETINGS_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly ZoomMeetingsApiOperation[];\nexport const ZOOM_MEETINGS_API_OPERATION_BY_UID = new Map(ZOOM_MEETINGS_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const ZOOM_MEETINGS_API_OPERATION_BY_ID = new Map<string, ZoomMeetingsApiOperation>();\nfor (const operation of ZOOM_MEETINGS_API_OPERATIONS) {\n  if (!ZOOM_MEETINGS_API_OPERATION_BY_ID.has(operation.operationId)) {\n    ZOOM_MEETINGS_API_OPERATION_BY_ID.set(operation.operationId, operation);\n  }\n}\n\nexport type ZoomMeetingsApiOperationUid = (typeof ZOOM_MEETINGS_API_OPERATIONS)[number]["uid"];\n`;

const clientInterface = operations
  .map((operation) => `  ${operation.functionName}<T = ZoomResource>(input?: ZoomOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = operations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = operations.map((operation) => operation.functionName);

const clientModule = `// Generated from the Zoom Meetings API Hub OpenAPI spec (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-zoom-meetings-api.mjs after checking upstream docs.\n\nimport type { ZoomOperationRequestInput, ZoomResource } from "./index.js";\n\nexport type ZoomMeetingsGeneratedOperationCaller = <T = ZoomResource>(operationUid: string, input?: ZoomOperationRequestInput) => Promise<T>;\n\nexport interface ZoomMeetingsApiGeneratedClient {\n${clientInterface}\n}\n\nexport const ZOOM_MEETINGS_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof ZoomMeetingsApiGeneratedClient)[];\nexport const ZOOM_MEETINGS_API_GENERATED_FUNCTION_COUNT = ZOOM_MEETINGS_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createZoomMeetingsApiGeneratedClient(caller: ZoomMeetingsGeneratedOperationCaller): ZoomMeetingsApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  spec: specSummary,
  operations,
};

await writeFile(`${PACKAGE_DIR}/meetings-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/meetings-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/zoom-meetings-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/zoom-meetings-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: specSummary,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${operations.length} Zoom Meetings API operations from ${specSummary.pathCount} API Hub paths.`);

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
