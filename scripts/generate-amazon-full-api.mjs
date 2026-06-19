import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const REPO = "amzn/selling-partner-api-models";
const BRANCH = "main";
const TREE_URL = `https://api.github.com/repos/${REPO}/git/trees/${BRANCH}?recursive=1`;
const RAW_BASE_URL = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;
const PACKAGE_DIR = "packages/integrations/src/marketplace/amazon";
const DOCS_DIR = "docs/provider-coverage";
const GENERATED_AT = "2026-06-18";
const SPEC_SOURCE = "https://github.com/amzn/selling-partner-api-models/tree/main/models";

const httpMethods = new Set(["get", "post", "put", "patch", "delete"]);

const response = await fetch(TREE_URL, {
  headers: { "user-agent": "cognidesk-amazon-full-api-generator" },
});
if (!response.ok) {
  throw new Error(`Unable to fetch Amazon SP-API model tree: ${response.status} ${response.statusText}`);
}
const tree = await response.json();
const modelFiles = tree.tree
  .filter((entry) => entry.type === "blob" && entry.path.startsWith("models/") && entry.path.endsWith(".json"))
  .map((entry) => entry.path)
  .sort();

const operations = [];
for (const modelPath of modelFiles) {
  const modelResponse = await fetch(`${RAW_BASE_URL}/${modelPath}`, {
    headers: { "user-agent": "cognidesk-amazon-full-api-generator" },
  });
  if (!modelResponse.ok) {
    throw new Error(`Unable to fetch ${modelPath}: ${modelResponse.status} ${modelResponse.statusText}`);
  }
  const spec = await modelResponse.json();
  const modelName = path.basename(modelPath, ".json");
  const apiVersion = spec.info?.version ?? "";
  for (const [operationPath, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem ?? {})) {
      if (!httpMethods.has(method)) continue;
      const operationId = operation.operationId ?? `${method}_${operationPath}`;
      operations.push({
        uid: `${modelName}:${operationId}`,
        operationId,
        functionNameBase: toPascalCase(operationId),
        method: method.toUpperCase(),
        path: operationPath,
        modelName,
        modelPath,
        apiVersion,
        summary: operation.summary ?? "",
        tags: Array.isArray(operation.tags) ? operation.tags : [],
      });
    }
  }
}

const usedFunctionNames = new Map();
const generatedOperations = withUniqueOperationUids(operations).map((operation) => {
  const baseName = operation.functionNameBase || "CallOperation";
  const seen = usedFunctionNames.get(baseName) ?? 0;
  usedFunctionNames.set(baseName, seen + 1);
  const functionName = seen === 0 ? baseName : `${baseName}${toPascalCase(operation.modelName)}`;
  return {
    uid: operation.uid,
    operationId: operation.operationId,
    functionName,
    method: operation.method,
    path: operation.path,
    modelName: operation.modelName,
    modelPath: operation.modelPath,
    apiVersion: operation.apiVersion,
    summary: operation.summary,
    tags: operation.tags,
  };
});

await mkdir(PACKAGE_DIR, { recursive: true });
await mkdir(DOCS_DIR, { recursive: true });

const operationModule = `// Generated from Amazon SP-API models (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-amazon-full-api.mjs after checking upstream docs.\n\nexport const AMAZON_FULL_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const AMAZON_FULL_API_SPEC_SOURCE = ${JSON.stringify(SPEC_SOURCE)};\nexport const AMAZON_FULL_API_SPEC_VERSION = ${JSON.stringify(BRANCH)};\nexport const AMAZON_FULL_API_MODEL_COUNT = ${modelFiles.length};\nexport const AMAZON_FULL_API_OPERATION_COUNT = ${generatedOperations.length};\n\nexport interface AmazonFullApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: \"GET\" | \"POST\" | \"PUT\" | \"PATCH\" | \"DELETE\";\n  path: string;\n  modelName: string;\n  modelPath: string;\n  apiVersion: string;\n  summary: string;\n  tags: readonly string[];\n}\n\nexport const AMAZON_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(generatedOperations))}) as readonly AmazonFullApiOperation[];\nexport const AMAZON_FULL_API_OPERATION_BY_UID = new Map(AMAZON_FULL_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const AMAZON_FULL_API_OPERATION_BY_ID = new Map<string, AmazonFullApiOperation>();\nfor (const operation of AMAZON_FULL_API_OPERATIONS) {\n  if (!AMAZON_FULL_API_OPERATION_BY_ID.has(operation.operationId)) {\n    AMAZON_FULL_API_OPERATION_BY_ID.set(operation.operationId, operation);\n  }\n}\n\nexport type AmazonFullApiOperationUid = (typeof AMAZON_FULL_API_OPERATIONS)[number][\"uid\"];\n`;

const clientInterface = generatedOperations
  .map((operation) => `  ${operation.functionName}<T = AmazonResource>(input?: AmazonOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = generatedOperations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = generatedOperations.map((operation) => operation.functionName);

const clientModule = `// Generated from Amazon SP-API models (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-amazon-full-api.mjs after checking upstream docs.\n\nimport type { AmazonOperationRequestInput, AmazonResource } from \"./index.js\";\n\nexport type AmazonGeneratedOperationCaller = <T = AmazonResource>(operationUid: string, input?: AmazonOperationRequestInput) => Promise<T>;\n\nexport interface AmazonFullApiGeneratedClient {\n${clientInterface}\n}\n\nexport const AMAZON_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof AmazonFullApiGeneratedClient)[];\nexport const AMAZON_FULL_API_GENERATED_FUNCTION_COUNT = AMAZON_FULL_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createAmazonFullApiGeneratedClient(caller: AmazonGeneratedOperationCaller): AmazonFullApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  spec: {
    source: SPEC_SOURCE,
    repository: REPO,
    branch: BRANCH,
    modelCount: modelFiles.length,
    operationCount: generatedOperations.length,
  },
  operations: generatedOperations,
};

await writeFile(`${PACKAGE_DIR}/full-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/full-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/amazon-spapi-full-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/amazon-spapi-full-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: docsPayload.spec,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${generatedOperations.length} operations from ${modelFiles.length} Amazon SP-API model files.`);

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

function withUniqueOperationUids(rawOperations) {
  const counts = new Map();
  for (const operation of rawOperations) {
    counts.set(operation.uid, (counts.get(operation.uid) ?? 0) + 1);
  }
  const seen = new Map();
  return rawOperations.map((operation) => {
    if ((counts.get(operation.uid) ?? 0) <= 1) return operation;
    const seenCount = seen.get(operation.uid) ?? 0;
    seen.set(operation.uid, seenCount + 1);
    if (seenCount === 0) return operation;
    return {
      ...operation,
      uid: `${operation.uid}:${operation.method} ${operation.path}`,
    };
  });
}
