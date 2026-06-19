import { mkdir, writeFile } from "node:fs/promises";

const SERVER_SPEC_SOURCE = "https://postmarkapp.com/swagger/server.yml";
const ACCOUNT_SPEC_SOURCE = "https://postmarkapp.com/swagger/account.yml";
const DOCS_SOURCE = "https://postmarkapp.com/api-explorer";
const PACKAGE_DIR = "packages/integrations/src/email/postmark";
const DOCS_DIR = "docs/provider-coverage";
const GENERATED_AT = "2026-06-18";
const httpMethods = new Set(["get", "post", "put", "patch", "delete"]);

const specs = [
  { surface: "server", source: SERVER_SPEC_SOURCE, tokenHeader: "X-Postmark-Server-Token" },
  { surface: "account", source: ACCOUNT_SPEC_SOURCE, tokenHeader: "X-Postmark-Account-Token" },
];

const operations = [];
const specSummaries = [];
for (const specInfo of specs) {
  const response = await fetch(specInfo.source, {
    headers: {
      accept: "application/yaml,text/yaml,text/plain",
      "user-agent": "cognidesk-postmark-full-api-generator",
    },
  });
  if (!response.ok) {
    throw new Error(`Unable to fetch Postmark Swagger spec ${specInfo.source}: ${response.status} ${response.statusText}`);
  }
  const text = await response.text();
  const parsed = parseSwaggerPathOperations(text, specInfo);
  operations.push(...parsed.operations);
  specSummaries.push({
    surface: specInfo.surface,
    source: specInfo.source,
    tokenHeader: specInfo.tokenHeader,
    pathCount: parsed.pathCount,
    operationCount: parsed.operations.length,
  });
}

const usedFunctionNames = new Map();
const generatedOperations = operations.map((operation) => {
  const baseName = toPascalCase(operation.operationId || operation.summary || `${operation.method} ${operation.path}`);
  const seen = usedFunctionNames.get(baseName) ?? 0;
  usedFunctionNames.set(baseName, seen + 1);
  return {
    ...operation,
    functionName: seen === 0 ? baseName : `${baseName}${toPascalCase(operation.surface)}`,
  };
}).sort((left, right) => left.functionName.localeCompare(right.functionName));

await mkdir(PACKAGE_DIR, { recursive: true });
await mkdir(DOCS_DIR, { recursive: true });

const specSummary = {
  source: DOCS_SOURCE,
  docs: DOCS_SOURCE,
  swagger: "2.0",
  specs: specSummaries,
  documentedPathCount: specSummaries.reduce((sum, spec) => sum + spec.pathCount, 0),
  documentedOperationCount: generatedOperations.length,
};

const operationModule = `// Generated from Postmark official Swagger files (${SERVER_SPEC_SOURCE}, ${ACCOUNT_SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-postmark-full-api.mjs after checking upstream docs.\n\nexport const POSTMARK_FULL_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const POSTMARK_FULL_API_DOCS_SOURCE = ${JSON.stringify(DOCS_SOURCE)};\nexport const POSTMARK_FULL_API_SERVER_SPEC_SOURCE = ${JSON.stringify(SERVER_SPEC_SOURCE)};\nexport const POSTMARK_FULL_API_ACCOUNT_SPEC_SOURCE = ${JSON.stringify(ACCOUNT_SPEC_SOURCE)};\nexport const POSTMARK_FULL_API_SPEC_VERSION = ${JSON.stringify(`postmark-swagger-${GENERATED_AT}`)};\nexport const POSTMARK_FULL_API_PATH_COUNT = ${specSummary.documentedPathCount};\nexport const POSTMARK_FULL_API_OPERATION_COUNT = ${generatedOperations.length};\n\nexport type PostmarkFullApiSurface = "server" | "account";\n\nexport interface PostmarkFullApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n  path: string;\n  summary: string;\n  surface: PostmarkFullApiSurface;\n  tokenHeader: "X-Postmark-Server-Token" | "X-Postmark-Account-Token";\n  sourceUrl: string;\n}\n\nexport const POSTMARK_FULL_API_SPEC = JSON.parse(${JSON.stringify(JSON.stringify(specSummary))}) as {\n  source: string;\n  docs: string;\n  swagger: string;\n  specs: readonly { surface: PostmarkFullApiSurface; source: string; tokenHeader: string; pathCount: number; operationCount: number }[];\n  documentedPathCount: number;\n  documentedOperationCount: number;\n};\n\nexport const POSTMARK_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(generatedOperations))}) as readonly PostmarkFullApiOperation[];\nexport const POSTMARK_FULL_API_OPERATION_BY_UID = new Map(POSTMARK_FULL_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const POSTMARK_FULL_API_OPERATION_BY_ID = new Map<string, PostmarkFullApiOperation>();\nfor (const operation of POSTMARK_FULL_API_OPERATIONS) {\n  if (!POSTMARK_FULL_API_OPERATION_BY_ID.has(operation.operationId)) {\n    POSTMARK_FULL_API_OPERATION_BY_ID.set(operation.operationId, operation);\n  }\n}\n\nexport type PostmarkFullApiOperationUid = (typeof POSTMARK_FULL_API_OPERATIONS)[number]["uid"];\n`;

const clientInterface = generatedOperations
  .map((operation) => `  ${operation.functionName}<T = PostmarkResource>(input?: PostmarkOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = generatedOperations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = generatedOperations.map((operation) => operation.functionName);

const clientModule = `// Generated from Postmark official Swagger files (${SERVER_SPEC_SOURCE}, ${ACCOUNT_SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-postmark-full-api.mjs after checking upstream docs.\n\nimport type { PostmarkOperationRequestInput, PostmarkResource } from "./index.js";\n\nexport type PostmarkGeneratedOperationCaller = <T = PostmarkResource>(operationUid: string, input?: PostmarkOperationRequestInput) => Promise<T>;\n\nexport interface PostmarkFullApiGeneratedClient {\n${clientInterface}\n}\n\nexport const POSTMARK_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof PostmarkFullApiGeneratedClient)[];\nexport const POSTMARK_FULL_API_GENERATED_FUNCTION_COUNT = POSTMARK_FULL_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createPostmarkFullApiGeneratedClient(caller: PostmarkGeneratedOperationCaller): PostmarkFullApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  spec: specSummary,
  operations: generatedOperations,
};

await writeFile(`${PACKAGE_DIR}/full-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/full-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/postmark-full-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/postmark-full-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: specSummary,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${generatedOperations.length} operations from ${specSummaries.length} official Postmark Swagger files.`);

function parseSwaggerPathOperations(text, specInfo) {
  const lines = text.split(/\r?\n/);
  let inPaths = false;
  let currentPath = "";
  let currentOperation = null;
  const paths = new Set();
  const parsedOperations = [];

  for (const line of lines) {
    if (line === "paths:") {
      inPaths = true;
      continue;
    }
    if (!inPaths) continue;
    const pathMatch = line.match(/^  (\/[^:]+):\s*$/);
    if (pathMatch) {
      currentPath = pathMatch[1];
      paths.add(currentPath);
      currentOperation = null;
      continue;
    }
    const methodMatch = line.match(/^    (get|post|put|patch|delete):\s*$/);
    if (methodMatch && httpMethods.has(methodMatch[1])) {
      currentOperation = {
        uid: `${specInfo.surface}:${methodMatch[1].toUpperCase()}:${currentPath}`,
        operationId: "",
        functionName: "",
        method: methodMatch[1].toUpperCase(),
        path: currentPath,
        summary: "",
        surface: specInfo.surface,
        tokenHeader: specInfo.tokenHeader,
        sourceUrl: specInfo.source,
      };
      parsedOperations.push(currentOperation);
      continue;
    }
    if (!currentOperation) continue;
    const operationIdMatch = line.match(/^      operationId:\s*(.+?)\s*$/);
    if (operationIdMatch) {
      currentOperation.operationId = unquote(operationIdMatch[1]);
      continue;
    }
    const summaryMatch = line.match(/^      summary:\s*(.+?)\s*$/);
    if (summaryMatch) {
      currentOperation.summary = unquote(summaryMatch[1]);
    }
  }

  for (const operation of parsedOperations) {
    if (!operation.operationId) {
      operation.operationId = toCamelCase(`${operation.method} ${operation.path}`);
    }
    if (!operation.summary) operation.summary = operation.operationId;
  }

  return { pathCount: paths.size, operations: parsedOperations };
}

function unquote(value) {
  return String(value).trim().replace(/^['"]|['"]$/g, "");
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
