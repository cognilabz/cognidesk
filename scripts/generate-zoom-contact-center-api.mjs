import { mkdir, writeFile } from "node:fs/promises";

const GENERATED_AT = "2026-06-18";
const SPEC_SOURCE = "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
const WEBHOOK_SPEC_SOURCE = "https://developers.zoom.us/api-hub/contact-center/events/webhooks.json";
const DOCS_SOURCE = "https://developers.zoom.us/docs/api/contact-center/";
const WEBHOOK_DOCS_SOURCE = "https://developers.zoom.us/docs/api/contact-center/events/";
const PACKAGE_DIR = "packages/integrations/src/contact-center/zoom";
const DOCS_DIR = "docs/provider-coverage";
const httpMethods = new Set(["get", "post", "put", "patch", "delete"]);

const restResponse = await fetch(SPEC_SOURCE, {
  headers: {
    accept: "application/json",
    "user-agent": "cognidesk-zoom-contact-center-api-generator",
  },
});
if (!restResponse.ok) {
  throw new Error(`Unable to fetch Zoom Contact Center REST spec: ${restResponse.status} ${restResponse.statusText}`);
}
const restSpec = await restResponse.json();
if (!restSpec.paths || restSpec.openapi !== "3.0.0") {
  throw new Error("Zoom Contact Center REST spec did not contain expected OpenAPI 3.0.0 paths.");
}

const webhookResponse = await fetch(WEBHOOK_SPEC_SOURCE, {
  headers: {
    accept: "application/json",
    "user-agent": "cognidesk-zoom-contact-center-webhook-generator",
  },
});
if (!webhookResponse.ok) {
  throw new Error(`Unable to fetch Zoom Contact Center webhook spec: ${webhookResponse.status} ${webhookResponse.statusText}`);
}
const webhookSpec = await webhookResponse.json();
if (!webhookSpec.webhooks || webhookSpec.openapi !== "3.1.0") {
  throw new Error("Zoom Contact Center webhook spec did not contain expected OpenAPI 3.1.0 webhooks.");
}

const operations = [];
const usedFunctionNames = new Map();
for (const [path, pathItem] of Object.entries(restSpec.paths ?? {})) {
  for (const [method, operation] of Object.entries(pathItem ?? {})) {
    if (!httpMethods.has(method)) continue;
    const methodUpper = method.toUpperCase();
    const operationId = operation.operationId ?? toOperationId(methodUpper, path, operation.summary);
    const baseName = toPascalCase(operationId);
    const seen = usedFunctionNames.get(baseName) ?? 0;
    usedFunctionNames.set(baseName, seen + 1);
    operations.push({
      uid: `${methodUpper} ${path}`,
      operationId,
      functionName: seen === 0 ? baseName : `${baseName}${seen + 1}`,
      method: methodUpper,
      path,
      summary: operation.summary ?? "",
      tags: Array.isArray(operation.tags) ? operation.tags : [],
      scopes: operationScopes(operation.security),
    });
  }
}

const webhookEvents = Object.entries(webhookSpec.webhooks ?? {})
  .map(([event, hook]) => {
    const post = hook?.post ?? {};
    return {
      event,
      operationId: post.operationId ?? toOperationId("POST", event, post.summary ?? event),
      summary: post.summary ?? "",
      description: post.description ?? "",
      tags: Array.isArray(post.tags) ? post.tags : [],
      scopes: operationScopes(post.security),
    };
  })
  .sort((a, b) => a.event.localeCompare(b.event));

await mkdir(PACKAGE_DIR, { recursive: true });
await mkdir(DOCS_DIR, { recursive: true });

const restSummary = {
  source: SPEC_SOURCE,
  docs: DOCS_SOURCE,
  openapi: restSpec.openapi ?? "",
  version: restSpec.info?.version ?? "",
  title: restSpec.info?.title ?? "",
  serverUrl: restSpec.servers?.[0]?.url ?? "",
  pathCount: Object.keys(restSpec.paths ?? {}).length,
  operationCount: operations.length,
  tags: [...new Set(operations.flatMap((operation) => operation.tags))].sort(),
};

const webhookSummary = {
  source: WEBHOOK_SPEC_SOURCE,
  docs: WEBHOOK_DOCS_SOURCE,
  openapi: webhookSpec.openapi ?? "",
  version: webhookSpec.info?.version ?? "",
  title: webhookSpec.info?.title ?? "",
  eventCount: webhookEvents.length,
};

const operationModule = `// Generated from the Zoom Contact Center OpenAPI spec (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-zoom-contact-center-api.mjs after checking upstream docs.\n\nexport const ZOOM_CONTACT_CENTER_FULL_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const ZOOM_CONTACT_CENTER_FULL_API_SPEC_SOURCE = ${JSON.stringify(SPEC_SOURCE)};\nexport const ZOOM_CONTACT_CENTER_FULL_API_DOCS_SOURCE = ${JSON.stringify(DOCS_SOURCE)};\nexport const ZOOM_CONTACT_CENTER_FULL_API_SPEC_VERSION = ${JSON.stringify(restSpec.info?.version ?? "")};\nexport const ZOOM_CONTACT_CENTER_FULL_API_OPENAPI_VERSION = ${JSON.stringify(restSpec.openapi ?? "")};\nexport const ZOOM_CONTACT_CENTER_FULL_API_PATH_COUNT = ${restSummary.pathCount};\nexport const ZOOM_CONTACT_CENTER_FULL_API_OPERATION_COUNT = ${operations.length};\nexport const ZOOM_CONTACT_CENTER_WEBHOOK_SPEC_SOURCE = ${JSON.stringify(WEBHOOK_SPEC_SOURCE)};\nexport const ZOOM_CONTACT_CENTER_WEBHOOK_DOCS_SOURCE = ${JSON.stringify(WEBHOOK_DOCS_SOURCE)};\nexport const ZOOM_CONTACT_CENTER_WEBHOOK_SPEC_VERSION = ${JSON.stringify(webhookSpec.info?.version ?? "")};\nexport const ZOOM_CONTACT_CENTER_WEBHOOK_OPENAPI_VERSION = ${JSON.stringify(webhookSpec.openapi ?? "")};\nexport const ZOOM_CONTACT_CENTER_WEBHOOK_EVENT_COUNT = ${webhookEvents.length};\n\nexport interface ZoomContactCenterFullApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n  path: string;\n  summary: string;\n  tags: readonly string[];\n  scopes: readonly string[];\n}\n\nexport interface ZoomContactCenterWebhookEvent {\n  event: string;\n  operationId: string;\n  summary: string;\n  description: string;\n  tags: readonly string[];\n  scopes: readonly string[];\n}\n\nexport const ZOOM_CONTACT_CENTER_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly ZoomContactCenterFullApiOperation[];\nexport const ZOOM_CONTACT_CENTER_FULL_API_OPERATION_BY_UID = new Map(ZOOM_CONTACT_CENTER_FULL_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const ZOOM_CONTACT_CENTER_FULL_API_OPERATION_BY_ID = new Map<string, ZoomContactCenterFullApiOperation>();\nfor (const operation of ZOOM_CONTACT_CENTER_FULL_API_OPERATIONS) {\n  if (!ZOOM_CONTACT_CENTER_FULL_API_OPERATION_BY_ID.has(operation.operationId)) {\n    ZOOM_CONTACT_CENTER_FULL_API_OPERATION_BY_ID.set(operation.operationId, operation);\n  }\n}\n\nexport const ZOOM_CONTACT_CENTER_WEBHOOK_EVENTS = JSON.parse(${JSON.stringify(JSON.stringify(webhookEvents))}) as readonly ZoomContactCenterWebhookEvent[];\nexport const ZOOM_CONTACT_CENTER_WEBHOOK_EVENT_BY_NAME = new Map(ZOOM_CONTACT_CENTER_WEBHOOK_EVENTS.map((event) => [event.event, event]));\n\nexport type ZoomContactCenterFullApiOperationUid = (typeof ZOOM_CONTACT_CENTER_FULL_API_OPERATIONS)[number]["uid"];\nexport type ZoomContactCenterWebhookEventName = (typeof ZOOM_CONTACT_CENTER_WEBHOOK_EVENTS)[number]["event"];\n`;

const clientInterface = operations
  .map((operation) => `  ${operation.functionName}<T = ZoomContactCenterResource>(input?: ZoomContactCenterOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = operations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = operations.map((operation) => operation.functionName);

const clientModule = `// Generated from the Zoom Contact Center OpenAPI spec (${SPEC_SOURCE}).\n// Do not edit by hand; run scripts/generate-zoom-contact-center-api.mjs after checking upstream docs.\n\nimport type { ZoomContactCenterOperationRequestInput, ZoomContactCenterResource } from "./index.js";\n\nexport type ZoomContactCenterGeneratedOperationCaller = <T = ZoomContactCenterResource>(operationUid: string, input?: ZoomContactCenterOperationRequestInput) => Promise<T>;\n\nexport interface ZoomContactCenterFullApiGeneratedClient {\n${clientInterface}\n}\n\nexport const ZOOM_CONTACT_CENTER_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof ZoomContactCenterFullApiGeneratedClient)[];\nexport const ZOOM_CONTACT_CENTER_FULL_API_GENERATED_FUNCTION_COUNT = ZOOM_CONTACT_CENTER_FULL_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createZoomContactCenterFullApiGeneratedClient(caller: ZoomContactCenterGeneratedOperationCaller): ZoomContactCenterFullApiGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  restSpec: restSummary,
  webhookSpec: webhookSummary,
  operations,
  webhookEvents,
};

await writeFile(`${PACKAGE_DIR}/full-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/full-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/zoom-contact-center-full-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/zoom-contact-center-full-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  restSpec: restSummary,
  webhookSpec: webhookSummary,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${operations.length} REST operations and ${webhookEvents.length} webhook events.`);

function operationScopes(security) {
  const scopes = new Set();
  for (const entry of security ?? []) {
    if (!entry || typeof entry !== "object") continue;
    for (const value of Object.values(entry)) {
      if (!Array.isArray(value)) continue;
      for (const scope of value) {
        if (typeof scope === "string" && scope) scopes.add(scope);
      }
    }
  }
  return [...scopes].sort();
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
