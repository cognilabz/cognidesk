import { mkdir, writeFile } from "node:fs/promises";

const GENERATED_AT = "2026-06-18";
const PACKAGE_DIR = "packages/integrations/src/voice/vonage";
const DOCS_DIR = "docs/provider-coverage";
const httpMethods = new Set(["get", "post", "put", "patch", "delete"]);

const specs = [
  {
    key: "voice_v1",
    label: "Vonage Voice API v1",
    source: "https://developer.vonage.com/api/v1/developer/api/file/voice?format=json&vendorId=vonage",
    docs: "https://developer.vonage.com/en/api/voice",
  },
  {
    key: "voice_v2",
    label: "Vonage Voice API v2",
    source: "https://developer.vonage.com/api/v1/developer/api/file/voice.v2?format=json&vendorId=vonage",
    docs: "https://developer.vonage.com/en/api/voice.v2",
  },
  {
    key: "application_v2",
    label: "Vonage Application API v2",
    source: "https://developer.vonage.com/api/v1/developer/api/file/application.v2?format=json&vendorId=vonage",
    docs: "https://developer.vonage.com/en/api/application.v2",
  },
  {
    key: "conversation_v1",
    label: "Vonage Conversation API v1",
    source: "https://developer.vonage.com/api/v1/developer/api/file/conversation?format=json&vendorId=vonage",
    docs: "https://developer.vonage.com/en/api/conversation",
  },
  {
    key: "numbers",
    label: "Vonage Numbers API",
    source: "https://developer.vonage.com/api/v1/developer/api/file/numbers?format=json&vendorId=vonage",
    docs: "https://developer.vonage.com/en/api/numbers",
  },
];

const operations = [];
const specSummaries = [];
const usedFunctionNames = new Set();
for (const specConfig of specs) {
  const response = await fetch(specConfig.source, {
    headers: {
      accept: "application/json",
      "user-agent": "cognidesk-vonage-voice-full-api-generator",
    },
  });
  if (!response.ok) {
    throw new Error(`Unable to fetch ${specConfig.label}: ${response.status} ${response.statusText}`);
  }
  const spec = await response.json();
  if (!spec.paths || spec.openapi !== "3.0.0") {
    throw new Error(`${specConfig.label} did not contain expected OpenAPI 3.0.0 paths.`);
  }
  const serverUrl = spec.servers?.[0]?.url;
  if (typeof serverUrl !== "string" || !serverUrl.startsWith("https://")) {
    throw new Error(`${specConfig.label} did not expose a usable https server URL.`);
  }
  const specSecurity = Array.isArray(spec.security) ? spec.security : [];
  let includedOperationCount = 0;
  for (const [path, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem ?? {})) {
      if (!httpMethods.has(method)) continue;
      includedOperationCount += 1;
      const methodUpper = method.toUpperCase();
      const operationId = operation.operationId ?? toOperationId(methodUpper, path, operation.summary);
      const functionName = uniqueFunctionName(`${toPascalCase(specConfig.key)}${toPascalCase(operationId)}`);
      const security = Array.isArray(operation.security) ? operation.security : specSecurity;
      operations.push({
        id: `${specConfig.key}:${operationId}`,
        operationId,
        functionName,
        specKey: specConfig.key,
        specLabel: specConfig.label,
        method: methodUpper,
        path,
        serverUrl,
        summary: operation.summary ?? "",
        tags: Array.isArray(operation.tags) ? operation.tags : [],
        authSchemes: operationAuthSchemes(security),
        source: specConfig.source,
        docs: specConfig.docs,
      });
    }
  }
  specSummaries.push({
    key: specConfig.key,
    label: specConfig.label,
    source: specConfig.source,
    docs: specConfig.docs,
    openapi: spec.openapi ?? "",
    version: spec.info?.version ?? "",
    title: spec.info?.title ?? "",
    serverUrl,
    pathCount: Object.keys(spec.paths ?? {}).length,
    operationCount: includedOperationCount,
  });
}

await mkdir(PACKAGE_DIR, { recursive: true });
await mkdir(DOCS_DIR, { recursive: true });

const operationModule = `// Generated from official Vonage OpenAPI specs.\n// Do not edit by hand; run scripts/generate-vonage-voice-full-api.mjs after checking upstream docs.\n\nexport const VONAGE_VOICE_FULL_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const VONAGE_VOICE_FULL_API_SPEC_VERSION = ${JSON.stringify(`vonage-voice-bundle-${GENERATED_AT}`)};\nexport const VONAGE_VOICE_FULL_API_PATH_COUNT = ${specSummaries.reduce((count, spec) => count + spec.pathCount, 0)};\nexport const VONAGE_VOICE_FULL_API_OPERATION_COUNT = ${operations.length};\n\nexport interface VonageVoiceFullApiSpecSummary {\n  key: string;\n  label: string;\n  source: string;\n  docs: string;\n  openapi: string;\n  version: string;\n  title: string;\n  serverUrl: string;\n  pathCount: number;\n  operationCount: number;\n}\n\nexport interface VonageVoiceFullApiOperation {\n  id: string;\n  operationId: string;\n  functionName: string;\n  specKey: string;\n  specLabel: string;\n  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n  path: string;\n  serverUrl: string;\n  summary: string;\n  tags: readonly string[];\n  authSchemes: readonly string[];\n  source: string;\n  docs: string;\n}\n\nexport const VONAGE_VOICE_FULL_API_SPECS = JSON.parse(${JSON.stringify(JSON.stringify(specSummaries))}) as readonly VonageVoiceFullApiSpecSummary[];\nexport const VONAGE_VOICE_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly VonageVoiceFullApiOperation[];\nexport const VONAGE_VOICE_FULL_API_OPERATION_BY_ID = new Map(VONAGE_VOICE_FULL_API_OPERATIONS.map((operation) => [operation.id, operation]));\nexport const VONAGE_VOICE_FULL_API_OPERATION_BY_OPERATION_ID = new Map<string, VonageVoiceFullApiOperation>();\nfor (const operation of VONAGE_VOICE_FULL_API_OPERATIONS) {\n  if (!VONAGE_VOICE_FULL_API_OPERATION_BY_OPERATION_ID.has(operation.operationId)) {\n    VONAGE_VOICE_FULL_API_OPERATION_BY_OPERATION_ID.set(operation.operationId, operation);\n  }\n}\n\nexport type VonageVoiceFullApiOperationId = (typeof VONAGE_VOICE_FULL_API_OPERATIONS)[number]["id"];\n`;

const clientInterface = operations
  .map((operation) => `  ${operation.functionName}<T = VonageResource>(input?: VonageOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = operations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.id)}, input),`)
  .join("\n");
const functionNames = operations.map((operation) => operation.functionName);

const clientModule = `// Generated from official Vonage OpenAPI specs.\n// Do not edit by hand; run scripts/generate-vonage-voice-full-api.mjs after checking upstream docs.\n\nimport type { VonageOperationRequestInput, VonageResource } from "./index.js";\n\nexport type VonageGeneratedOperationCaller = <T = VonageResource>(operationId: string, input?: VonageOperationRequestInput) => Promise<T>;\n\nexport interface VonageVoiceFullApiGeneratedClient {\n${clientInterface}\n}\n\nexport const VONAGE_VOICE_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof VonageVoiceFullApiGeneratedClient)[];\nexport const VONAGE_VOICE_FULL_API_GENERATED_FUNCTION_COUNT = VONAGE_VOICE_FULL_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createVonageVoiceFullApiGeneratedClient(caller: VonageGeneratedOperationCaller): VonageVoiceFullApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  specs: specSummaries,
  operations,
};

await writeFile(`${PACKAGE_DIR}/full-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/full-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/vonage-voice-full-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/vonage-voice-full-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  specs: specSummaries,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${operations.length} operations from ${specSummaries.length} official Vonage specs.`);

function operationAuthSchemes(security) {
  const schemes = new Set();
  for (const entry of security ?? []) {
    if (!entry || typeof entry !== "object") continue;
    for (const key of Object.keys(entry)) schemes.add(key);
  }
  return [...schemes].sort();
}

function uniqueFunctionName(candidate) {
  let name = candidate;
  let index = 2;
  while (usedFunctionNames.has(name)) {
    name = `${candidate}${index}`;
    index += 1;
  }
  usedFunctionNames.add(name);
  return name;
}

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
