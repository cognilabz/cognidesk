import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const REPO = "aws/api-models-aws";
const BRANCH = "main";
const RAW_BASE_URL = `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;
const SPEC_SOURCE = `https://github.com/${REPO}/tree/${BRANCH}/models`;
const PACKAGE_DIR = "packages/integrations/src/email/ses";
const DOCS_DIR = "docs/provider-coverage";
const GENERATED_AT = "2026-06-18";

const modelPaths = [
  {
    serviceKey: "sesv2",
    apiVersion: "2019-09-27",
    modelPath: "models/sesv2/service/2019-09-27/sesv2-2019-09-27.json",
    docsBase: "https://docs.aws.amazon.com/ses/latest/APIReference-V2",
  },
  {
    serviceKey: "ses",
    apiVersion: "2010-12-01",
    modelPath: "models/ses/service/2010-12-01/ses-2010-12-01.json",
    docsBase: "https://docs.aws.amazon.com/ses/latest/APIReference",
  },
];

const operations = [];
const modelSummaries = [];
for (const model of modelPaths) {
  const response = await fetch(`${RAW_BASE_URL}/${model.modelPath}`, {
    headers: { "user-agent": "cognidesk-ses-full-api-generator" },
  });
  if (!response.ok) {
    throw new Error(`Unable to fetch ${model.modelPath}: ${response.status} ${response.statusText}`);
  }
  const spec = await response.json();
  const service = Object.entries(spec.shapes ?? {}).find(([, shape]) => shape.type === "service");
  const serviceShape = service?.[1] ?? {};
  const serviceTraits = serviceShape.traits ?? {};
  const awsService = serviceTraits["aws.api#service"] ?? {};
  const sigv4 = serviceTraits["aws.auth#sigv4"] ?? {};
  const protocol = serviceTraits["aws.protocols#restJson1"] !== undefined ? "restJson1" : "awsQuery";
  const modelName = path.basename(model.modelPath, ".json");
  const operationEntries = Object.entries(spec.shapes ?? {}).filter(([, shape]) => shape.type === "operation");
  modelSummaries.push({
    serviceKey: model.serviceKey,
    apiVersion: model.apiVersion,
    modelPath: model.modelPath,
    sdkId: awsService.sdkId ?? model.serviceKey,
    protocol,
    operationCount: operationEntries.length,
  });
  for (const [qualifiedName, operation] of operationEntries) {
    const operationName = qualifiedName.split("#").pop() ?? qualifiedName;
    const http = operation.traits?.["smithy.api#http"] ?? {};
    operations.push({
      uid: `${model.serviceKey}:${operationName}`,
      operationId: operationName,
      functionNameBase: toPascalCase(operationName),
      method: http.method ?? "POST",
      path: http.uri ?? "/",
      serviceKey: model.serviceKey,
      serviceName: awsService.sdkId ?? model.serviceKey,
      apiVersion: model.apiVersion,
      modelName,
      modelPath: model.modelPath,
      endpointPrefix: awsService.endpointPrefix ?? "email",
      signingName: sigv4.name ?? "ses",
      protocol,
      inputShape: operation.input?.target ?? "",
      outputShape: operation.output?.target ?? "",
      docsUrl: `${model.docsBase}/API_${operationName}.html`,
    });
  }
}

const usedFunctionNames = new Map();
const generatedOperations = operations.map((operation) => {
  const baseName = operation.functionNameBase || "CallOperation";
  const seen = usedFunctionNames.get(baseName) ?? 0;
  usedFunctionNames.set(baseName, seen + 1);
  return {
    uid: operation.uid,
    operationId: operation.operationId,
    functionName: seen === 0 ? baseName : `${baseName}${toPascalCase(operation.serviceKey)}`,
    method: operation.method,
    path: operation.path,
    serviceKey: operation.serviceKey,
    serviceName: operation.serviceName,
    apiVersion: operation.apiVersion,
    modelName: operation.modelName,
    modelPath: operation.modelPath,
    endpointPrefix: operation.endpointPrefix,
    signingName: operation.signingName,
    protocol: operation.protocol,
    inputShape: operation.inputShape,
    outputShape: operation.outputShape,
    docsUrl: operation.docsUrl,
  };
}).sort((left, right) => left.functionName.localeCompare(right.functionName));

await mkdir(PACKAGE_DIR, { recursive: true });
await mkdir(DOCS_DIR, { recursive: true });

const specSummary = {
  source: SPEC_SOURCE,
  repository: REPO,
  branch: BRANCH,
  modelCount: modelPaths.length,
  models: modelSummaries,
  operationCount: generatedOperations.length,
};

const operationModule = `// Generated from AWS official API models (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-ses-full-api.mjs after checking upstream docs.\n\nexport const SES_FULL_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const SES_FULL_API_SPEC_SOURCE = ${JSON.stringify(SPEC_SOURCE)};\nexport const SES_FULL_API_SPEC_VERSION = ${JSON.stringify(`aws-api-models-${BRANCH}-${GENERATED_AT}`)};\nexport const SES_FULL_API_MODEL_COUNT = ${modelPaths.length};\nexport const SES_FULL_API_OPERATION_COUNT = ${generatedOperations.length};\n\nexport type SesFullApiServiceKey = "sesv2" | "ses";\nexport type SesFullApiProtocol = "restJson1" | "awsQuery";\n\nexport interface SesFullApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n  path: string;\n  serviceKey: SesFullApiServiceKey;\n  serviceName: string;\n  apiVersion: string;\n  modelName: string;\n  modelPath: string;\n  endpointPrefix: string;\n  signingName: string;\n  protocol: SesFullApiProtocol;\n  inputShape: string;\n  outputShape: string;\n  docsUrl: string;\n}\n\nexport const SES_FULL_API_SPEC = JSON.parse(${JSON.stringify(JSON.stringify(specSummary))}) as {\n  source: string;\n  repository: string;\n  branch: string;\n  modelCount: number;\n  models: readonly { serviceKey: SesFullApiServiceKey; apiVersion: string; modelPath: string; sdkId: string; protocol: SesFullApiProtocol; operationCount: number }[];\n  operationCount: number;\n};\n\nexport const SES_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(generatedOperations))}) as readonly SesFullApiOperation[];\nexport const SES_FULL_API_OPERATION_BY_UID = new Map(SES_FULL_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const SES_FULL_API_OPERATION_BY_ID = new Map<string, SesFullApiOperation>();\nfor (const operation of SES_FULL_API_OPERATIONS) {\n  if (!SES_FULL_API_OPERATION_BY_ID.has(operation.operationId)) {\n    SES_FULL_API_OPERATION_BY_ID.set(operation.operationId, operation);\n  }\n}\n\nexport type SesFullApiOperationUid = (typeof SES_FULL_API_OPERATIONS)[number]["uid"];\n`;

const clientInterface = generatedOperations
  .map((operation) => `  ${operation.functionName}<T = SesResource>(input?: SesOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = generatedOperations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = generatedOperations.map((operation) => operation.functionName);

const clientModule = `// Generated from AWS official API models (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-ses-full-api.mjs after checking upstream docs.\n\nimport type { SesOperationRequestInput, SesResource } from "./index.js";\n\nexport type SesGeneratedOperationCaller = <T = SesResource>(operationUid: string, input?: SesOperationRequestInput) => Promise<T>;\n\nexport interface SesFullApiGeneratedClient {\n${clientInterface}\n}\n\nexport const SES_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof SesFullApiGeneratedClient)[];\nexport const SES_FULL_API_GENERATED_FUNCTION_COUNT = SES_FULL_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createSesFullApiGeneratedClient(caller: SesGeneratedOperationCaller): SesFullApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  spec: specSummary,
  operations: generatedOperations,
};

await writeFile(`${PACKAGE_DIR}/full-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/full-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/ses-full-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/ses-full-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: specSummary,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${generatedOperations.length} operations from ${modelPaths.length} AWS SES models.`);

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
