import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const REPO = "aws/api-models-aws";
const BRANCH = "main";
const RAW_BASE_URL = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;
const SPEC_SOURCE = `https://github.com/${REPO}/tree/${BRANCH}/models`;
const PACKAGE_DIR = "packages/integrations/src/contact-center/amazon-connect";
const DOCS_DIR = "docs/provider-coverage";
const GENERATED_AT = "2026-06-17";

const modelPaths = [
  "models/appintegrations/service/2020-07-29/appintegrations-2020-07-29.json",
  "models/connect/service/2017-08-08/connect-2017-08-08.json",
  "models/connectparticipant/service/2018-09-07/connectparticipant-2018-09-07.json",
  "models/connectcases/service/2022-10-03/connectcases-2022-10-03.json",
  "models/connectcampaigns/service/2021-01-30/connectcampaigns-2021-01-30.json",
  "models/connectcampaignsv2/service/2024-04-23/connectcampaignsv2-2024-04-23.json",
  "models/connect-contact-lens/service/2020-08-21/connect-contact-lens-2020-08-21.json",
  "models/connecthealth/service/2025-01-29/connecthealth-2025-01-29.json",
  "models/customer-profiles/service/2020-08-15/customer-profiles-2020-08-15.json",
  "models/qconnect/service/2020-10-19/qconnect-2020-10-19.json",
  "models/wisdom/service/2020-10-19/wisdom-2020-10-19.json",
];

const fallbackEndpointPrefixes = {
  connectcampaigns: "connect-campaigns",
  connectcampaignsv2: "connect-campaigns",
};

const operations = [];
for (const modelPath of modelPaths) {
  const response = await fetch(`${RAW_BASE_URL}/${modelPath}`, {
    headers: { "user-agent": "cognidesk-amazon-connect-full-api-generator" },
  });
  if (!response.ok) {
    throw new Error(`Unable to fetch ${modelPath}: ${response.status} ${response.statusText}`);
  }
  const spec = await response.json();
  const modelName = path.basename(modelPath, ".json");
  const service = Object.entries(spec.shapes ?? {}).find(([, shape]) => shape.type === "service");
  const serviceShape = service?.[1] ?? {};
  const serviceTraits = serviceShape.traits ?? {};
  const awsService = serviceTraits["aws.api#service"] ?? {};
  const sigv4 = serviceTraits["aws.auth#sigv4"] ?? {};
  const serviceKey = modelPath.split("/")[1];
  const endpointPrefix = awsService.endpointPrefix ?? fallbackEndpointPrefixes[serviceKey] ?? sigv4.name ?? serviceKey;
  const signingName = sigv4.name ?? endpointPrefix;
  const sdkId = awsService.sdkId ?? modelName;
  const operationEntries = Object.entries(spec.shapes ?? {}).filter(([, shape]) => shape.type === "operation");
  for (const [qualifiedName, operation] of operationEntries) {
    const operationName = qualifiedName.split("#").pop() ?? qualifiedName;
    const http = operation.traits?.["smithy.api#http"] ?? {};
    operations.push({
      uid: `${serviceKey}:${operationName}`,
      operationId: operationName,
      functionNameBase: toPascalCase(operationName),
      method: http.method ?? "POST",
      path: http.uri ?? "/",
      serviceKey,
      serviceName: sdkId,
      modelName,
      modelPath,
      endpointPrefix,
      signingName,
      inputShape: operation.input?.target ?? "",
      outputShape: operation.output?.target ?? "",
    });
  }
}

const usedFunctionNames = new Map();
const generatedOperations = operations.map((operation) => {
  const baseName = operation.functionNameBase || "CallOperation";
  const seen = usedFunctionNames.get(baseName) ?? 0;
  usedFunctionNames.set(baseName, seen + 1);
  const functionName = seen === 0 ? baseName : `${baseName}${toPascalCase(operation.serviceKey)}`;
  return {
    uid: operation.uid,
    operationId: operation.operationId,
    functionName,
    method: operation.method,
    path: operation.path,
    serviceKey: operation.serviceKey,
    serviceName: operation.serviceName,
    modelName: operation.modelName,
    modelPath: operation.modelPath,
    endpointPrefix: operation.endpointPrefix,
    signingName: operation.signingName,
    inputShape: operation.inputShape,
    outputShape: operation.outputShape,
  };
});

await mkdir(PACKAGE_DIR, { recursive: true });
await mkdir(DOCS_DIR, { recursive: true });

const operationModule = `// Generated from AWS official API models (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-amazon-connect-full-api.mjs after checking upstream docs.\n\nexport const AMAZON_CONNECT_FULL_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const AMAZON_CONNECT_FULL_API_SPEC_SOURCE = ${JSON.stringify(SPEC_SOURCE)};\nexport const AMAZON_CONNECT_FULL_API_SPEC_VERSION = ${JSON.stringify(BRANCH)};\nexport const AMAZON_CONNECT_FULL_API_MODEL_COUNT = ${modelPaths.length};\nexport const AMAZON_CONNECT_FULL_API_OPERATION_COUNT = ${generatedOperations.length};\n\nexport interface AmazonConnectFullApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: \"GET\" | \"POST\" | \"PUT\" | \"PATCH\" | \"DELETE\";\n  path: string;\n  serviceKey: string;\n  serviceName: string;\n  modelName: string;\n  modelPath: string;\n  endpointPrefix: string;\n  signingName: string;\n  inputShape: string;\n  outputShape: string;\n}\n\nexport const AMAZON_CONNECT_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(generatedOperations))}) as readonly AmazonConnectFullApiOperation[];\nexport const AMAZON_CONNECT_FULL_API_OPERATION_BY_UID = new Map(AMAZON_CONNECT_FULL_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const AMAZON_CONNECT_FULL_API_OPERATION_BY_ID = new Map<string, AmazonConnectFullApiOperation>();\nfor (const operation of AMAZON_CONNECT_FULL_API_OPERATIONS) {\n  if (!AMAZON_CONNECT_FULL_API_OPERATION_BY_ID.has(operation.operationId)) {\n    AMAZON_CONNECT_FULL_API_OPERATION_BY_ID.set(operation.operationId, operation);\n  }\n}\n\nexport type AmazonConnectFullApiOperationUid = (typeof AMAZON_CONNECT_FULL_API_OPERATIONS)[number][\"uid\"];\n`;

const clientInterface = generatedOperations
  .map((operation) => `  ${operation.functionName}<T = AmazonConnectResource>(input?: AmazonConnectOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = generatedOperations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = generatedOperations.map((operation) => operation.functionName);

const clientModule = `// Generated from AWS official API models (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-amazon-connect-full-api.mjs after checking upstream docs.\n\nimport type { AmazonConnectOperationRequestInput, AmazonConnectResource } from \"./index.js\";\n\nexport type AmazonConnectGeneratedOperationCaller = <T = AmazonConnectResource>(operationUid: string, input?: AmazonConnectOperationRequestInput) => Promise<T>;\n\nexport interface AmazonConnectFullApiGeneratedClient {\n${clientInterface}\n}\n\nexport const AMAZON_CONNECT_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof AmazonConnectFullApiGeneratedClient)[];\nexport const AMAZON_CONNECT_FULL_API_GENERATED_FUNCTION_COUNT = AMAZON_CONNECT_FULL_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createAmazonConnectFullApiGeneratedClient(caller: AmazonConnectGeneratedOperationCaller): AmazonConnectFullApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  spec: {
    source: SPEC_SOURCE,
    repository: REPO,
    branch: BRANCH,
    modelCount: modelPaths.length,
    operationCount: generatedOperations.length,
  },
  operations: generatedOperations,
};

await writeFile(`${PACKAGE_DIR}/full-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/full-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/amazon-connect-full-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/amazon-connect-full-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: docsPayload.spec,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${generatedOperations.length} operations from ${modelPaths.length} AWS Connect-family models.`);

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
