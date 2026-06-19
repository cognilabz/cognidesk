import { mkdir, writeFile } from "node:fs/promises";

const DOCS_ROOT = "https://developer.niceincontact.com";
const API_PAGES = [
  "/API/AdminAPI",
  "/API/AgentAPI",
  "/API/AuthenticationAPI",
  "/API/PatronAPI",
  "/API/RealTimeDataAPI",
  "/API/ReportingAPI",
  "/API/UserHubAPI",
  "/API/DataExtractionAPI",
  "/API/MediaPlaybackAPI",
  "/API/DigitalEngagementAPI",
  "/API/BusinessDataAPI",
  "/API/WFMAPI",
  "/API/RecordingAPI",
  "/API/InteractionAnalyticsAPI",
  "/API/PrivacyAPI",
  "/API/DataPolicyAPI",
];
const GENERATED_AT = "2026-06-18";
const PACKAGE_DIR = "packages/integrations/src/contact-center/nice-cxone";
const DOCS_DIR = "docs/provider-coverage";

const specSources = new Map();
for (const pagePath of API_PAGES) {
  const pageUrl = `${DOCS_ROOT}${pagePath}`;
  const response = await fetch(pageUrl, {
    headers: { "user-agent": "cognidesk-nice-cxone-full-api-generator" },
  });
  if (!response.ok) {
    throw new Error(`Unable to fetch NICE CXone API page ${pageUrl}: ${response.status} ${response.statusText}`);
  }
  const html = await response.text();
  for (const match of html.matchAll(/inContact\.Swagger\.init\(\s*"([^"]+)"/g)) {
    specSources.set(`${DOCS_ROOT}${match[1]}`, pagePath);
  }
}

const specs = [];
for (const [sourceUrl, apiPage] of [...specSources.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
  const response = await fetch(sourceUrl, {
    headers: { "user-agent": "cognidesk-nice-cxone-full-api-generator" },
  });
  if (!response.ok) {
    throw new Error(`Unable to fetch NICE CXone OpenAPI spec ${sourceUrl}: ${response.status} ${response.statusText}`);
  }
  const spec = await response.json();
  if (!spec.paths || (!spec.openapi && !spec.swagger)) {
    throw new Error(`NICE CXone spec did not contain OpenAPI paths: ${sourceUrl}`);
  }
  specs.push({ sourceUrl, apiPage, spec });
}

const methods = new Set(["get", "post", "put", "patch", "delete"]);
const usedFunctionNames = new Map();
const operations = [];

for (const { sourceUrl, apiPage, spec } of specs) {
  const specSlug = sourceUrl.split("/").at(-1) ?? "spec";
  for (const [path, pathItem] of Object.entries(spec.paths)) {
    for (const [method, operation] of Object.entries(pathItem)) {
      if (!methods.has(method)) continue;
      const operationId = operation.operationId || `${method}_${path}`;
      const baseName = toPascalCase(`${specSlug} ${operationId}`);
      const seen = usedFunctionNames.get(baseName) ?? 0;
      usedFunctionNames.set(baseName, seen + 1);
      operations.push({
        uid: `${specSlug}:${operationId}:${method.toUpperCase()}:${path}`,
        operationId,
        functionName: seen === 0 ? baseName : `${baseName}${seen + 1}`,
        method: method.toUpperCase(),
        path,
        specSlug,
        specTitle: spec.info?.title ?? specSlug,
        apiPage,
        sourceUrl,
        openapi: spec.openapi ?? spec.swagger ?? "",
        summary: operation.summary ?? "",
        tags: operation.tags ?? [],
      });
    }
  }
}

await mkdir(PACKAGE_DIR, { recursive: true });
await mkdir(DOCS_DIR, { recursive: true });

const specSummaries = specs.map(({ sourceUrl, apiPage, spec }) => ({
  sourceUrl,
  apiPage: `${DOCS_ROOT}${apiPage}`,
  title: spec.info?.title ?? "",
  version: spec.info?.version ?? "",
  openapi: spec.openapi ?? spec.swagger ?? "",
  pathCount: Object.keys(spec.paths).length,
  operationCount: countOperations(spec.paths),
}));

const operationModule = `// Generated from NICE CXone public OpenAPI specs (${DOCS_ROOT}/API).\n// Do not edit by hand; run scripts/generate-nice-cxone-full-api.mjs after checking upstream docs.\n\nexport const NICE_CXONE_FULL_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const NICE_CXONE_FULL_API_SPEC_SOURCE = ${JSON.stringify(`${DOCS_ROOT}/API`)};\nexport const NICE_CXONE_FULL_API_SPEC_VERSION = ${JSON.stringify(`nice-cxone-public-openapi-${GENERATED_AT}`)};\nexport const NICE_CXONE_FULL_API_SPEC_COUNT = ${specs.length};\nexport const NICE_CXONE_FULL_API_PATH_COUNT = ${specSummaries.reduce((sum, spec) => sum + spec.pathCount, 0)};\nexport const NICE_CXONE_FULL_API_OPERATION_COUNT = ${operations.length};\n\nexport interface NiceCxoneFullApiSpec {\n  sourceUrl: string;\n  apiPage: string;\n  title: string;\n  version: string;\n  openapi: string;\n  pathCount: number;\n  operationCount: number;\n}\n\nexport interface NiceCxoneFullApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n  path: string;\n  specSlug: string;\n  specTitle: string;\n  apiPage: string;\n  sourceUrl: string;\n  openapi: string;\n  summary: string;\n  tags: readonly string[];\n}\n\nexport const NICE_CXONE_FULL_API_SPECS = JSON.parse(${JSON.stringify(JSON.stringify(specSummaries))}) as readonly NiceCxoneFullApiSpec[];\nexport const NICE_CXONE_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly NiceCxoneFullApiOperation[];\nexport const NICE_CXONE_FULL_API_OPERATION_BY_UID = new Map(NICE_CXONE_FULL_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const NICE_CXONE_FULL_API_OPERATION_BY_ID = new Map<string, NiceCxoneFullApiOperation>();\nfor (const operation of NICE_CXONE_FULL_API_OPERATIONS) {\n  if (!NICE_CXONE_FULL_API_OPERATION_BY_ID.has(operation.operationId)) {\n    NICE_CXONE_FULL_API_OPERATION_BY_ID.set(operation.operationId, operation);\n  }\n}\n\nexport type NiceCxoneFullApiOperationUid = (typeof NICE_CXONE_FULL_API_OPERATIONS)[number]["uid"];\n`;

const clientInterface = operations
  .map((operation) => `  ${operation.functionName}<T = NiceCxoneResource>(input?: NiceCxoneOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = operations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = operations.map((operation) => operation.functionName);

const clientModule = `// Generated from NICE CXone public OpenAPI specs (${DOCS_ROOT}/API).\n// Do not edit by hand; run scripts/generate-nice-cxone-full-api.mjs after checking upstream docs.\n\nimport type { NiceCxoneOperationRequestInput, NiceCxoneResource } from "./index.js";\n\nexport type NiceCxoneGeneratedOperationCaller = <T = NiceCxoneResource>(operationUid: string, input?: NiceCxoneOperationRequestInput) => Promise<T>;\n\nexport interface NiceCxoneFullApiGeneratedClient {\n${clientInterface}\n}\n\nexport const NICE_CXONE_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof NiceCxoneFullApiGeneratedClient)[];\nexport const NICE_CXONE_FULL_API_GENERATED_FUNCTION_COUNT = NICE_CXONE_FULL_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createNiceCxoneFullApiGeneratedClient(caller: NiceCxoneGeneratedOperationCaller): NiceCxoneFullApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  spec: {
    source: `${DOCS_ROOT}/API`,
    apiPages: API_PAGES.map((pagePath) => `${DOCS_ROOT}${pagePath}`),
    specCount: specs.length,
    pathCount: specSummaries.reduce((sum, spec) => sum + spec.pathCount, 0),
    operationCount: operations.length,
  },
  specs: specSummaries,
  operations,
};

await writeFile(`${PACKAGE_DIR}/full-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/full-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/nice-cxone-full-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/nice-cxone-full-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: docsPayload.spec,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${operations.length} NICE CXone operations from ${specs.length} public OpenAPI specs and ${docsPayload.spec.pathCount} paths.`);

function countOperations(paths) {
  let count = 0;
  for (const pathItem of Object.values(paths)) {
    for (const method of Object.keys(pathItem)) {
      if (methods.has(method)) count += 1;
    }
  }
  return count;
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
