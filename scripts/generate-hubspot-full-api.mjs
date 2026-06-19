import { mkdir, writeFile } from "node:fs/promises";

const INDEX_SOURCE = "https://api.hubspot.com/public/api/spec/v1/specs";
const PACKAGE_DIR = "packages/integrations/src/ticketing/hubspot";
const DOCS_DIR = "docs/provider-coverage";
const GENERATED_AT = "2026-06-17";
const httpMethods = new Set(["get", "post", "put", "patch", "delete"]);

const indexResponse = await fetch(INDEX_SOURCE, {
  headers: { "user-agent": "cognidesk-hubspot-full-api-generator" },
});
if (!indexResponse.ok) {
  throw new Error(`Unable to fetch HubSpot spec index: ${indexResponse.status} ${indexResponse.statusText}`);
}
const index = await indexResponse.json();
const specs = index.results ?? [];
const selectedSpecs = specs
  .map((spec) => {
    const versions = (spec.versions ?? [])
      .filter((version) => version.openApi)
      .sort((left, right) => stageRank(left.stage) - stageRank(right.stage)
        || String(right.version).localeCompare(String(left.version)));
    const version = versions[0];
    return version ? {
      name: spec.name,
      group: spec.group,
      version: version.version,
      stage: version.stage,
      openApi: version.openApi,
    } : undefined;
  })
  .filter(Boolean);

const operations = [];
for (const selectedSpec of selectedSpecs) {
  const response = await fetch(selectedSpec.openApi, {
    headers: { "user-agent": "cognidesk-hubspot-full-api-generator" },
  });
  if (!response.ok) {
    throw new Error(`Unable to fetch HubSpot OpenAPI spec ${selectedSpec.name}: ${response.status} ${response.statusText}`);
  }
  const spec = await response.json();
  for (const [operationPath, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem ?? {})) {
      if (!httpMethods.has(method)) continue;
      const operationId = operation.operationId ?? `${method}_${operationPath}`;
      operations.push({
        uid: `${slug(selectedSpec.group)}:${slug(selectedSpec.name)}:${selectedSpec.version}:${operationId}`,
        operationId,
        functionNameBase: toPascalCase(`${selectedSpec.name} ${operationId}`),
        method: method.toUpperCase(),
        path: operationPath,
        specName: selectedSpec.name,
        group: selectedSpec.group,
        version: selectedSpec.version,
        stage: selectedSpec.stage,
        openApi: selectedSpec.openApi,
        summary: operation.summary ?? "",
        tags: Array.isArray(operation.tags) ? operation.tags : [],
      });
    }
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
    functionName: seen === 0 ? baseName : `${baseName}${seen + 1}`,
    method: operation.method,
    path: operation.path,
    specName: operation.specName,
    group: operation.group,
    version: operation.version,
    stage: operation.stage,
    openApi: operation.openApi,
    summary: operation.summary,
    tags: operation.tags,
  };
});

await mkdir(PACKAGE_DIR, { recursive: true });
await mkdir(DOCS_DIR, { recursive: true });

const operationModule = `// Generated from HubSpot's public OpenAPI catalog (${INDEX_SOURCE}).\n// Do not edit by hand; run scripts/generate-hubspot-full-api.mjs after checking upstream docs.\n\nexport const HUBSPOT_FULL_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const HUBSPOT_FULL_API_SPEC_SOURCE = ${JSON.stringify(INDEX_SOURCE)};\nexport const HUBSPOT_FULL_API_SPEC_VERSION = ${JSON.stringify(GENERATED_AT)};\nexport const HUBSPOT_FULL_API_SPEC_COUNT = ${selectedSpecs.length};\nexport const HUBSPOT_FULL_API_OPERATION_COUNT = ${generatedOperations.length};\n\nexport interface HubSpotFullApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: \"GET\" | \"POST\" | \"PUT\" | \"PATCH\" | \"DELETE\";\n  path: string;\n  specName: string;\n  group: string;\n  version: string;\n  stage: string;\n  openApi: string;\n  summary: string;\n  tags: readonly string[];\n}\n\nexport const HUBSPOT_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(generatedOperations))}) as readonly HubSpotFullApiOperation[];\nexport const HUBSPOT_FULL_API_OPERATION_BY_UID = new Map(HUBSPOT_FULL_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const HUBSPOT_FULL_API_OPERATION_BY_ID = new Map<string, HubSpotFullApiOperation>();\nfor (const operation of HUBSPOT_FULL_API_OPERATIONS) {\n  if (!HUBSPOT_FULL_API_OPERATION_BY_ID.has(operation.operationId)) {\n    HUBSPOT_FULL_API_OPERATION_BY_ID.set(operation.operationId, operation);\n  }\n}\n\nexport type HubSpotFullApiOperationUid = (typeof HUBSPOT_FULL_API_OPERATIONS)[number][\"uid\"];\n`;

const clientInterface = generatedOperations
  .map((operation) => `  ${operation.functionName}<T = HubSpotResource>(input?: HubSpotOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = generatedOperations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = generatedOperations.map((operation) => operation.functionName);

const clientModule = `// Generated from HubSpot's public OpenAPI catalog (${INDEX_SOURCE}).\n// Do not edit by hand; run scripts/generate-hubspot-full-api.mjs after checking upstream docs.\n\nimport type { HubSpotOperationRequestInput, HubSpotResource } from \"./index.js\";\n\nexport type HubSpotGeneratedOperationCaller = <T = HubSpotResource>(operationUid: string, input?: HubSpotOperationRequestInput) => Promise<T>;\n\nexport interface HubSpotFullApiGeneratedClient {\n${clientInterface}\n}\n\nexport const HUBSPOT_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof HubSpotFullApiGeneratedClient)[];\nexport const HUBSPOT_FULL_API_GENERATED_FUNCTION_COUNT = HUBSPOT_FULL_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createHubSpotFullApiGeneratedClient(caller: HubSpotGeneratedOperationCaller): HubSpotFullApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  spec: {
    source: INDEX_SOURCE,
    selectedSpecCount: selectedSpecs.length,
    operationCount: generatedOperations.length,
  },
  selectedSpecs,
  operations: generatedOperations,
};

await writeFile(`${PACKAGE_DIR}/full-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/full-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/hubspot-full-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/hubspot-full-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: docsPayload.spec,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${generatedOperations.length} operations from ${selectedSpecs.length} HubSpot public specs.`);

function stageRank(stage) {
  if (stage === "LATEST") return 0;
  if (stage === "STABLE") return 1;
  if (stage === "DEVELOPER_PREVIEW") return 2;
  return 3;
}

function slug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

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
