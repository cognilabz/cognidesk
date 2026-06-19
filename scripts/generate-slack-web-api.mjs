import { mkdir, writeFile } from "node:fs/promises";

const SPEC_SOURCE = "https://raw.githubusercontent.com/slackapi/slack-api-specs/master/web-api/slack_web_openapi_v2.json";
const DOCS_SOURCE = "https://docs.slack.dev/reference/methods/";
const SPEC_REPOSITORY = "https://github.com/slackapi/slack-api-specs";
const PACKAGE_DIR = "packages/integrations/src/workplace/slack";
const DOCS_DIR = "docs/provider-coverage";
const GENERATED_AT = "2026-06-18";
const httpMethods = new Set(["get", "post", "put", "patch", "delete"]);

const response = await fetch(SPEC_SOURCE, {
  headers: {
    accept: "application/json",
    "user-agent": "cognidesk-slack-web-api-generator",
  },
});
if (!response.ok) {
  throw new Error(`Unable to fetch Slack Web API spec: ${response.status} ${response.statusText}`);
}
const spec = await response.json();
if (!spec.paths || spec.swagger !== "2.0") {
  throw new Error("Slack Web API spec did not contain expected Swagger 2.0 paths.");
}

const operations = [];
const usedFunctionNames = new Map();
for (const [path, pathItem] of Object.entries(spec.paths ?? {})) {
  for (const [method, operation] of Object.entries(pathItem ?? {})) {
    if (!httpMethods.has(method)) continue;
    const operationId = operation.operationId ?? path.replace(/^\//, "").replace(/\./g, "_");
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
  repository: SPEC_REPOSITORY,
  swagger: spec.swagger ?? "",
  version: spec.info?.version ?? "",
  title: spec.info?.title ?? "",
  pathCount: Object.keys(spec.paths ?? {}).length,
  operationCount: operations.length,
  archiveNotice: "slackapi/slack-api-specs is an official but archived repository; generated coverage is a pinned Web API slice, not full current Slack platform coverage.",
};

const operationModule = `// Generated from the archived official Slack Web API Swagger spec (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-slack-web-api.mjs after checking upstream docs.\n\nexport const SLACK_WEB_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const SLACK_WEB_API_SPEC_SOURCE = ${JSON.stringify(SPEC_SOURCE)};\nexport const SLACK_WEB_API_DOCS_SOURCE = ${JSON.stringify(DOCS_SOURCE)};\nexport const SLACK_WEB_API_SPEC_REPOSITORY = ${JSON.stringify(SPEC_REPOSITORY)};\nexport const SLACK_WEB_API_SPEC_VERSION = ${JSON.stringify(spec.info?.version ?? "")};\nexport const SLACK_WEB_API_SWAGGER_VERSION = ${JSON.stringify(spec.swagger ?? "")};\nexport const SLACK_WEB_API_PATH_COUNT = ${specSummary.pathCount};\nexport const SLACK_WEB_API_OPERATION_COUNT = ${operations.length};\n\nexport interface SlackWebApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n  path: string;\n  summary: string;\n  tags: readonly string[];\n}\n\nexport const SLACK_WEB_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly SlackWebApiOperation[];\nexport const SLACK_WEB_API_OPERATION_BY_UID = new Map(SLACK_WEB_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const SLACK_WEB_API_OPERATION_BY_ID = new Map<string, SlackWebApiOperation>();\nfor (const operation of SLACK_WEB_API_OPERATIONS) {\n  if (!SLACK_WEB_API_OPERATION_BY_ID.has(operation.operationId)) {\n    SLACK_WEB_API_OPERATION_BY_ID.set(operation.operationId, operation);\n  }\n}\n\nexport type SlackWebApiOperationUid = (typeof SLACK_WEB_API_OPERATIONS)[number]["uid"];\n`;

const clientInterface = operations
  .map((operation) => `  ${operation.functionName}<T = SlackResource>(input?: SlackOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = operations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = operations.map((operation) => operation.functionName);

const clientModule = `// Generated from the archived official Slack Web API Swagger spec (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-slack-web-api.mjs after checking upstream docs.\n\nimport type { SlackOperationRequestInput, SlackResource } from "./index.js";\n\nexport type SlackWebApiGeneratedOperationCaller = <T = SlackResource>(operationUid: string, input?: SlackOperationRequestInput) => Promise<T>;\n\nexport interface SlackWebApiGeneratedClient {\n${clientInterface}\n}\n\nexport const SLACK_WEB_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof SlackWebApiGeneratedClient)[];\nexport const SLACK_WEB_API_GENERATED_FUNCTION_COUNT = SLACK_WEB_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createSlackWebApiGeneratedClient(caller: SlackWebApiGeneratedOperationCaller): SlackWebApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  spec: specSummary,
  operations,
};

await writeFile(`${PACKAGE_DIR}/web-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/web-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/slack-web-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/slack-web-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: specSummary,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${operations.length} Slack Web API operations from ${specSummary.pathCount} archived official Swagger paths.`);

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
