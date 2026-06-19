import { mkdir, writeFile } from "node:fs/promises";

const GENERATED_AT = "2026-06-18";
const PACKAGE_DIR = "packages/integrations/src/contact-center/8x8";
const DOCS_DIR = "docs/provider-coverage";
const SPECS = [
  {
    id: "chat-api-v2-actions-events",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/8x8_contact_center_chat_api_v2.json",
    docs: "https://developer.8x8.com/actions-events/reference/8-x-8-contact-center-chat-api-v-2/",
  },
  {
    id: "dynamic-campaigns",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/8x8_contact_center_dynamic_campaigns.json",
    docs: "https://developer.8x8.com/actions-events/reference/8-x-8-contact-center-dynamic-campaigns/",
  },
  {
    id: "campaigns-beta",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/8x8_contact_center_new_campaigns.json",
    docs: "https://developer.8x8.com/actions-events/reference/contact-center-campaigns-api/",
  },
  {
    id: "chapi-chat-api",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/chapi_-_chat_api.json",
    docs: "https://developer.8x8.com/actions-events/reference/getmessagesusingget-1/",
  },
  {
    id: "chat-gateway",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact-center-chat-gateway-v1.oas.yml",
    docs: "https://developer.8x8.com/actions-events/reference/contact-center-chat-gateway/",
  },
  {
    id: "call",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json",
    docs: "https://developer.8x8.com/actions-events/reference/8-x-8-contact-center-call-api-reference/",
  },
  {
    id: "agent-status",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json",
    docs: "https://developer.8x8.com/actions-events/docs/cc-managing-agent-status/",
  },
  {
    id: "historical-analytics",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/analytics/8x8_analytics_for_contact_center_historical_metrics_api.json",
    docs: "https://developer.8x8.com/analytics/reference/8-x-8-analytics-for-contact-center-historical-metrics-api/",
  },
  {
    id: "real-time-analytics",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/analytics/8x8_analytics_for_contact_center_real-time_metrics_api.json",
    docs: "https://developer.8x8.com/analytics/reference/8-x-8-analytics-for-contact-center-real-time-metrics-api/",
  },
  {
    id: "qmsa",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/analytics/quality_management_and_speech_analytics_api.json",
    docs: "https://developer.8x8.com/analytics/reference/quality-management-and-speech-analytics-api/",
  },
  {
    id: "chat-api-contactcenter",
    source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/contactcenter/8x8_contact_center_chat_api.json",
    docs: "https://developer.8x8.com/contactcenter/docs/contact-center-chat/",
  },
];
const httpMethods = new Set(["get", "post", "put", "patch", "delete", "head", "options"]);
const nonGeneratedSurfaces = [
  {
    surface: "8x8 CRM, legacy recordings/transcripts, and event streaming",
    reason: "No public machine-readable OpenAPI spec was verified in docs_oas for these Contact Center surfaces.",
  },
  {
    surface: "PDF-only, gated, support-portal-only, or prose-only 8x8 pages",
    reason: "The generator only emits endpoints from official machine-readable 8x8 OpenAPI files.",
  },
  {
    surface: "Non-Contact-Center 8x8 Administration, CPaaS Connect, Work Analytics, Audit Records, and Cloud Storage APIs",
    reason: "Public OAS files exist for some of these products, but they are outside this contact-center package remit.",
  },
];

const operations = [];
const specSummaries = [];
const usedFunctionNames = new Map();
for (const specInput of SPECS) {
  const response = await fetch(specInput.source, {
    headers: {
      accept: "application/json, application/yaml, text/yaml",
      "user-agent": "cognidesk-8x8-contact-center-api-generator",
    },
  });
  if (!response.ok) {
    throw new Error(`Unable to fetch 8x8 Contact Center spec ${specInput.id}: ${response.status} ${response.statusText}`);
  }
  const spec = parseOpenApiSpec(specInput, await response.text());
  if (!spec?.operations?.length || !String(spec.openapi).startsWith("3.0.")) {
    throw new Error(`8x8 Contact Center spec ${specInput.id} did not contain expected OpenAPI 3.0.x operations.`);
  }
  specSummaries.push({
    id: specInput.id,
    source: specInput.source,
    docs: specInput.docs,
    openapi: spec.openapi ?? "",
    version: spec.info?.version ?? "",
    title: spec.info?.title ?? "",
    serverUrls: (spec.servers ?? []).map((server) => server.url).filter(Boolean),
    pathCount: spec.pathCount,
    operationCount: spec.operations.length,
  });
  for (const operation of spec.operations) {
    const methodUpper = operation.method.toUpperCase();
    const operationId = operation.operationId ?? toOperationId(methodUpper, operation.path, operation.summary);
    const baseName = toPascalCase(operationId);
    const seen = usedFunctionNames.get(baseName) ?? 0;
    usedFunctionNames.set(baseName, seen + 1);
    operations.push({
      uid: `${specInput.id}:${methodUpper} ${operation.path}`,
      legacyUid: `${methodUpper} ${operation.path}`,
      specId: specInput.id,
      operationId,
      functionName: seen === 0 ? baseName : `${baseName}${seen + 1}`,
      method: methodUpper,
      path: operation.path,
      summary: operation.summary ?? "",
      tags: Array.isArray(operation.tags) ? operation.tags : [],
    });
  }
}

const operationIdCounts = countBy(operations, (operation) => operation.operationId);
const legacyUidCounts = countBy(operations, (operation) => operation.legacyUid);
const uniqueOperationIdEntries = operations
  .filter((operation) => operation.operationId && operationIdCounts.get(operation.operationId) === 1)
  .map((operation) => [operation.operationId, operation]);
const uniqueLegacyUidEntries = operations
  .filter((operation) => legacyUidCounts.get(operation.legacyUid) === 1)
  .map((operation) => [operation.legacyUid, operation]);

await mkdir(PACKAGE_DIR, { recursive: true });
await mkdir(DOCS_DIR, { recursive: true });

const operationModule = `// Generated from official 8x8 Contact Center OpenAPI specs.\n// Do not edit by hand; run scripts/generate-8x8-contact-center-api.mjs after checking upstream docs.\n\nexport const EIGHT_BY_EIGHT_CONTACT_CENTER_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const EIGHT_BY_EIGHT_CONTACT_CENTER_API_SPECS = JSON.parse(${JSON.stringify(JSON.stringify(specSummaries))}) as readonly EightByEightContactCenterApiSpec[];\nexport const EIGHT_BY_EIGHT_CONTACT_CENTER_API_PATH_COUNT = ${specSummaries.reduce((total, spec) => total + spec.pathCount, 0)};\nexport const EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATION_COUNT = ${operations.length};\n\nexport interface EightByEightContactCenterApiSpec {\n  id: string;\n  source: string;\n  docs: string;\n  openapi: string;\n  version: string;\n  title: string;\n  serverUrls: readonly string[];\n  pathCount: number;\n  operationCount: number;\n}\n\nexport interface EightByEightContactCenterApiOperation {\n  uid: string;\n  legacyUid: string;\n  specId: string;\n  operationId: string;\n  functionName: string;\n  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";\n  path: string;\n  summary: string;\n  tags: readonly string[];\n}\n\nexport const EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly EightByEightContactCenterApiOperation[];\nexport const EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATION_BY_ID = new Map(${JSON.stringify(uniqueOperationIdEntries)} as readonly (readonly [string, EightByEightContactCenterApiOperation])[]);\nexport const EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATION_BY_UID = new Map(EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATION_BY_LEGACY_UID = new Map(${JSON.stringify(uniqueLegacyUidEntries)} as readonly (readonly [string, EightByEightContactCenterApiOperation])[]);\n\nexport type EightByEightContactCenterApiOperationId = (typeof EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATIONS)[number]["operationId"];\nexport type EightByEightContactCenterApiOperationUid = (typeof EIGHT_BY_EIGHT_CONTACT_CENTER_API_OPERATIONS)[number]["uid"];\n`;

const clientInterface = operations
  .map((operation) => `  ${operation.functionName}<T = EightByEightResource>(input?: EightByEightOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = operations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = operations.map((operation) => operation.functionName);

const clientModule = `// Generated from official 8x8 Contact Center OpenAPI specs.\n// Do not edit by hand; run scripts/generate-8x8-contact-center-api.mjs after checking upstream docs.\n\nimport type { EightByEightOperationRequestInput, EightByEightResource } from "./index.js";\n\nexport type EightByEightGeneratedOperationCaller = <T = EightByEightResource>(operationUid: string, input?: EightByEightOperationRequestInput) => Promise<T>;\n\nexport interface EightByEightContactCenterApiGeneratedClient {\n${clientInterface}\n}\n\nexport const EIGHT_BY_EIGHT_CONTACT_CENTER_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof EightByEightContactCenterApiGeneratedClient)[];\nexport const EIGHT_BY_EIGHT_CONTACT_CENTER_API_GENERATED_FUNCTION_COUNT = EIGHT_BY_EIGHT_CONTACT_CENTER_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createEightByEightContactCenterApiGeneratedClient(caller: EightByEightGeneratedOperationCaller): EightByEightContactCenterApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

await writeFile(`${PACKAGE_DIR}/full-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/full-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/8x8-contact-center-api-${GENERATED_AT}.operations.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  specs: specSummaries,
  operations,
  nonGeneratedSurfaces,
}, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/8x8-contact-center-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  specs: specSummaries,
  functions: functionNames,
  nonGeneratedSurfaces,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${operations.length} operations from ${specSummaries.length} official 8x8 specs.`);

function parseOpenApiSpec(specInput, text) {
  if (specInput.source.endsWith(".json")) {
    const spec = JSON.parse(text);
    const parsedOperations = [];
    for (const [path, pathItem] of Object.entries(spec.paths ?? {})) {
      for (const [method, operation] of Object.entries(pathItem ?? {})) {
        if (!httpMethods.has(method)) continue;
        parsedOperations.push({
          method,
          path,
          operationId: operation.operationId,
          summary: operation.summary,
          tags: Array.isArray(operation.tags) ? operation.tags : [],
        });
      }
    }
    return {
      openapi: spec.openapi,
      info: spec.info ?? {},
      servers: spec.servers ?? [],
      pathCount: Object.keys(spec.paths ?? {}).length,
      operations: parsedOperations,
    };
  }
  return parseOpenApiYamlSummary(text);
}

function parseOpenApiYamlSummary(text) {
  const lines = text.split(/\r?\n/);
  const parsedOperations = [];
  const paths = new Set();
  const servers = [];
  let openapi = "";
  let title = "";
  let version = "";
  let inInfo = false;
  let inServers = false;
  let inPaths = false;
  let currentPath = "";
  let currentOperation;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const topLevel = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (topLevel) {
      inInfo = topLevel[1] === "info";
      inServers = topLevel[1] === "servers";
      inPaths = topLevel[1] === "paths";
      currentPath = inPaths ? currentPath : "";
      currentOperation = undefined;
      if (topLevel[1] === "openapi") openapi = cleanYamlScalar(topLevel[2]);
      continue;
    }

    if (inInfo) {
      const titleMatch = line.match(/^  title:\s*(.+?)\s*$/);
      const versionMatch = line.match(/^  version:\s*(.+?)\s*$/);
      if (titleMatch) title = cleanYamlScalar(titleMatch[1]);
      if (versionMatch) version = cleanYamlScalar(versionMatch[1]);
      continue;
    }

    if (inServers) {
      const serverMatch = line.match(/^  - url:\s*(.+?)\s*$/);
      if (serverMatch) servers.push({ url: cleanYamlScalar(serverMatch[1]) });
      continue;
    }

    if (!inPaths) continue;
    const pathMatch = line.match(/^  (?:"([^"]+)"|'([^']+)'|([^:'"]+)):\s*$/);
    const matchedPath = pathMatch ? pathMatch[1] ?? pathMatch[2] ?? pathMatch[3] ?? "" : "";
    if (matchedPath.startsWith("/")) {
      currentPath = matchedPath;
      paths.add(currentPath);
      currentOperation = undefined;
      continue;
    }
    const methodMatch = line.match(/^    ([a-z]+):\s*$/);
    if (methodMatch && currentPath && httpMethods.has(methodMatch[1])) {
      currentOperation = { method: methodMatch[1], path: currentPath, tags: [] };
      parsedOperations.push(currentOperation);
      continue;
    }
    if (!currentOperation) continue;
    const operationIdMatch = line.match(/^      operationId:\s*(.+?)\s*$/);
    const summaryMatch = line.match(/^      summary:\s*(.+?)\s*$/);
    if (operationIdMatch) currentOperation.operationId = cleanYamlScalar(operationIdMatch[1]);
    if (summaryMatch) currentOperation.summary = cleanYamlScalar(summaryMatch[1]);
    if (/^      tags:\s*$/.test(line)) {
      const tags = [];
      for (let tagIndex = index + 1; tagIndex < lines.length; tagIndex += 1) {
        const tagMatch = lines[tagIndex].match(/^        -\s*(.+?)\s*$/);
        if (!tagMatch) break;
        tags.push(cleanYamlScalar(tagMatch[1]));
      }
      currentOperation.tags = tags;
    }
  }

  return {
    openapi,
    info: { title, version },
    servers,
    pathCount: paths.size,
    operations: parsedOperations,
  };
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

function cleanYamlScalar(value) {
  return String(value).trim().replace(/^['"]|['"]$/g, "");
}

function countBy(items, keyOf) {
  const counts = new Map();
  for (const item of items) {
    const key = keyOf(item);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}
