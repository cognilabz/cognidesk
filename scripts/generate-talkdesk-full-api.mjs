import { mkdir, writeFile } from "node:fs/promises";

const SPEC_SOURCE = "https://api-docs.talkdeskapp.com/public-api";
const PACKAGE_DIR = "packages/integrations/src/contact-center/talkdesk";
const DOCS_DIR = "docs/provider-coverage";
const GENERATED_AT = "2026-06-17";
const httpMethods = new Set(["get", "post", "put", "patch", "delete", "options"]);

const response = await fetch(SPEC_SOURCE, {
  headers: { "user-agent": "cognidesk-talkdesk-full-api-generator" },
});
if (!response.ok) {
  throw new Error(`Unable to fetch Talkdesk OpenAPI bundle: ${response.status} ${response.statusText}`);
}
const spec = await response.json();

const operations = [];
for (const [operationPath, pathItem] of Object.entries(spec.paths ?? {})) {
  for (const [method, operation] of Object.entries(pathItem ?? {})) {
    if (!httpMethods.has(method)) continue;
    const operationId = operation.operationId ?? `${method}_${operationPath}`;
    operations.push({
      operationId,
      functionNameBase: toPascalCase(operationId),
      method: method.toUpperCase(),
      path: operationPath,
      summary: operation.summary ?? "",
      tags: Array.isArray(operation.tags) ? operation.tags : [],
    });
  }
}

const usedFunctionNames = new Map();
const generatedOperations = operations.map((operation) => {
  const baseName = operation.functionNameBase || "CallOperation";
  const seen = usedFunctionNames.get(baseName) ?? 0;
  usedFunctionNames.set(baseName, seen + 1);
  return {
    operationId: operation.operationId,
    functionName: seen === 0 ? baseName : `${baseName}${seen + 1}`,
    method: operation.method,
    path: operation.path,
    summary: operation.summary,
    tags: operation.tags,
  };
});

await mkdir(PACKAGE_DIR, { recursive: true });
await mkdir(DOCS_DIR, { recursive: true });

const operationModule = `// Generated from Talkdesk OpenAPI (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-talkdesk-full-api.mjs after checking upstream docs.\n\nexport const TALKDESK_FULL_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const TALKDESK_FULL_API_SPEC_SOURCE = ${JSON.stringify(SPEC_SOURCE)};\nexport const TALKDESK_FULL_API_SPEC_VERSION = ${JSON.stringify(spec.info?.version ?? "")};\nexport const TALKDESK_FULL_API_OPENAPI_VERSION = ${JSON.stringify(spec.openapi ?? "")};\nexport const TALKDESK_FULL_API_PATH_COUNT = ${Object.keys(spec.paths ?? {}).length};\nexport const TALKDESK_FULL_API_OPERATION_COUNT = ${generatedOperations.length};\n\nexport interface TalkdeskFullApiOperation {\n  operationId: string;\n  functionName: string;\n  method: \"GET\" | \"POST\" | \"PUT\" | \"PATCH\" | \"DELETE\";\n  path: string;\n  summary: string;\n  tags: readonly string[];\n}\n\nexport const TALKDESK_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(generatedOperations))}) as readonly TalkdeskFullApiOperation[];\nexport const TALKDESK_FULL_API_OPERATION_BY_ID = new Map(TALKDESK_FULL_API_OPERATIONS.map((operation) => [operation.operationId, operation]));\n\nexport type TalkdeskFullApiOperationId = (typeof TALKDESK_FULL_API_OPERATIONS)[number][\"operationId\"];\n`;
const typedOperationModule = operationModule.replace(
  'method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";',
  'method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";',
);

const clientInterface = generatedOperations
  .map((operation) => `  ${operation.functionName}<T = TalkdeskResource>(input?: TalkdeskOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = generatedOperations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.operationId)}, input),`)
  .join("\n");
const functionNames = generatedOperations.map((operation) => operation.functionName);

const clientModule = `// Generated from Talkdesk OpenAPI (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-talkdesk-full-api.mjs after checking upstream docs.\n\nimport type { TalkdeskOperationRequestInput, TalkdeskResource } from \"./index.js\";\n\nexport type TalkdeskGeneratedOperationCaller = <T = TalkdeskResource>(operationId: string, input?: TalkdeskOperationRequestInput) => Promise<T>;\n\nexport interface TalkdeskFullApiGeneratedClient {\n${clientInterface}\n}\n\nexport const TALKDESK_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof TalkdeskFullApiGeneratedClient)[];\nexport const TALKDESK_FULL_API_GENERATED_FUNCTION_COUNT = TALKDESK_FULL_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createTalkdeskFullApiGeneratedClient(caller: TalkdeskGeneratedOperationCaller): TalkdeskFullApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  spec: {
    source: SPEC_SOURCE,
    openapi: spec.openapi ?? "",
    version: spec.info?.version ?? "",
    title: spec.info?.title ?? "",
    pathCount: Object.keys(spec.paths ?? {}).length,
    operationCount: generatedOperations.length,
  },
  operations: generatedOperations,
};

await writeFile(`${PACKAGE_DIR}/full-api-operations.generated.ts`, typedOperationModule);
await writeFile(`${PACKAGE_DIR}/full-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/talkdesk-full-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/talkdesk-full-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: docsPayload.spec,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${generatedOperations.length} operations from ${Object.keys(spec.paths ?? {}).length} Talkdesk OpenAPI paths.`);

function toPascalCase(value) {
  const cleaned = String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^A-Za-z0-9]+/g, " ")
    .trim();
  if (!cleaned) return "";
  return cleaned
    .split(/\s+/)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join("");
}
