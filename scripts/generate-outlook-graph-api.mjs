import { spawnSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";

const SPEC_SOURCE = "https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/master/openapi/v1.0/openapi.yaml";
const SPEC_REGISTRY = "https://github.com/microsoftgraph/msgraph-metadata/blob/master/apis.yaml";
const PACKAGE_DIR = "packages/integrations/src/email/outlook";
const DOCS_DIR = "docs/provider-coverage";
const GENERATED_AT = "2026-06-17";

const response = await fetch(SPEC_SOURCE, {
  headers: { "user-agent": "cognidesk-outlook-graph-generator" },
});
if (!response.ok) {
  throw new Error(`Unable to fetch Microsoft Graph v1.0 OpenAPI: ${response.status} ${response.statusText}`);
}
const yaml = await response.text();

const ruby = String.raw`
require "yaml"
require "json"

spec = YAML.safe_load(STDIN.read, aliases: true)
paths = spec["paths"] || {}
methods = %w[get post put patch delete]

def include_path?(path)
  return true if path == "/me" || path == "/users/{user-id}"
  return true if path.start_with?("/subscriptions")
  prefixes = [
    "/me/messages",
    "/users/{user-id}/messages",
    "/me/mailFolders",
    "/users/{user-id}/mailFolders",
    "/me/sendMail",
    "/users/{user-id}/sendMail",
    "/me/outlook",
    "/users/{user-id}/outlook"
  ]
  prefixes.any? { |prefix| path.start_with?(prefix) }
end

operations = []
paths.each do |operation_path, path_item|
  next unless include_path?(operation_path)
  path_item.each do |method, operation|
    next unless methods.include?(method)
    operations << {
      path: operation_path,
      method: method.upcase,
      operationId: operation["operationId"] || "#{method}_#{operation_path}",
      summary: operation["summary"] || "",
      tags: operation["tags"] || []
    }
  end
end

puts JSON.generate({
  openapi: spec["openapi"],
  pathCount: paths.keys.select { |path| include_path?(path) }.length,
  operations: operations
})
`;

const parsed = spawnSync("ruby", ["-e", ruby], {
  input: yaml,
  encoding: "utf8",
  maxBuffer: 24 * 1024 * 1024,
});
if (parsed.status !== 0) {
  throw new Error(`Unable to parse Microsoft Graph OpenAPI with Ruby:\n${parsed.stderr}`);
}

const parsedSpec = JSON.parse(parsed.stdout);
const usedFunctionNames = new Map();
const generatedOperations = parsedSpec.operations.map((operation) => {
  const baseName = toPascalCase(operation.operationId);
  const seen = usedFunctionNames.get(baseName) ?? 0;
  usedFunctionNames.set(baseName, seen + 1);
  return {
    uid: operation.operationId,
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

const operationModule = `// Generated from Microsoft Graph v1.0 OpenAPI (${SPEC_SOURCE}).\n// This is the Outlook/mailbox slice for @cognidesk/integrations, not the full Microsoft Graph API.\n// Do not edit by hand; run scripts/generate-outlook-graph-api.mjs after checking upstream docs.\n\nexport const OUTLOOK_GRAPH_API_GENERATED_AT = ${JSON.stringify(GENERATED_AT)};\nexport const OUTLOOK_GRAPH_API_SPEC_SOURCE = ${JSON.stringify(SPEC_SOURCE)};\nexport const OUTLOOK_GRAPH_API_SPEC_REGISTRY = ${JSON.stringify(SPEC_REGISTRY)};\nexport const OUTLOOK_GRAPH_API_SPEC_VERSION = \"v1.0\";\nexport const OUTLOOK_GRAPH_API_OPENAPI_VERSION = ${JSON.stringify(parsedSpec.openapi ?? "")};\nexport const OUTLOOK_GRAPH_API_PATH_COUNT = ${parsedSpec.pathCount};\nexport const OUTLOOK_GRAPH_API_OPERATION_COUNT = ${generatedOperations.length};\n\nexport interface OutlookGraphApiOperation {\n  uid: string;\n  operationId: string;\n  functionName: string;\n  method: \"GET\" | \"POST\" | \"PUT\" | \"PATCH\" | \"DELETE\";\n  path: string;\n  summary: string;\n  tags: readonly string[];\n}\n\nexport const OUTLOOK_GRAPH_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(generatedOperations))}) as readonly OutlookGraphApiOperation[];\nexport const OUTLOOK_GRAPH_API_OPERATION_BY_UID = new Map(OUTLOOK_GRAPH_API_OPERATIONS.map((operation) => [operation.uid, operation]));\nexport const OUTLOOK_GRAPH_API_OPERATION_BY_ID = new Map(OUTLOOK_GRAPH_API_OPERATIONS.map((operation) => [operation.operationId, operation]));\n\nexport type OutlookGraphApiOperationUid = (typeof OUTLOOK_GRAPH_API_OPERATIONS)[number][\"uid\"];\n`;

const clientInterface = generatedOperations
  .map((operation) => `  ${operation.functionName}<T = OutlookGraphResource>(input?: OutlookGraphOperationRequestInput): Promise<T>;`)
  .join("\n");
const clientBody = generatedOperations
  .map((operation) => `    ${operation.functionName}: (input) => caller(${JSON.stringify(operation.uid)}, input),`)
  .join("\n");
const functionNames = generatedOperations.map((operation) => operation.functionName);

const clientModule = `// Generated from Microsoft Graph v1.0 OpenAPI (${SPEC_SOURCE}).\n// This is the Outlook/mailbox slice for @cognidesk/integrations, not the full Microsoft Graph API.\n// Do not edit by hand; run scripts/generate-outlook-graph-api.mjs after checking upstream docs.\n\nimport type { OutlookGraphOperationRequestInput, OutlookGraphResource } from \"./index.js\";\n\nexport type OutlookGraphGeneratedOperationCaller = <T = OutlookGraphResource>(operationUid: string, input?: OutlookGraphOperationRequestInput) => Promise<T>;\n\nexport interface OutlookGraphGeneratedClient {\n${clientInterface}\n}\n\nexport const OUTLOOK_GRAPH_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly (keyof OutlookGraphGeneratedClient)[];\nexport const OUTLOOK_GRAPH_API_GENERATED_FUNCTION_COUNT = OUTLOOK_GRAPH_API_GENERATED_FUNCTION_NAMES.length;\n\nexport function createOutlookGraphGeneratedClient(caller: OutlookGraphGeneratedOperationCaller): OutlookGraphGeneratedClient {\n  return {\n${clientBody}\n  };\n}\n`;

const docsPayload = {
  generatedAt: GENERATED_AT,
  spec: {
    source: SPEC_SOURCE,
    registry: SPEC_REGISTRY,
    version: "v1.0",
    openapi: parsedSpec.openapi ?? "",
    pathCount: parsedSpec.pathCount,
    operationCount: generatedOperations.length,
    slice: "Outlook mailbox: /me, /users/{user-id}, messages, mailFolders, attachments, sendMail, subscriptions, outlook categories",
  },
  operations: generatedOperations,
};

await writeFile(`${PACKAGE_DIR}/graph-api-operations.generated.ts`, operationModule);
await writeFile(`${PACKAGE_DIR}/graph-api-client.generated.ts`, clientModule);
await writeFile(`${DOCS_DIR}/outlook-graph-api-${GENERATED_AT}.operations.json`, `${JSON.stringify(docsPayload, null, 2)}\n`);
await writeFile(`${DOCS_DIR}/outlook-graph-api-${GENERATED_AT}.functions.json`, `${JSON.stringify({
  generatedAt: GENERATED_AT,
  spec: docsPayload.spec,
  functions: functionNames,
}, null, 2)}\n`);

console.log(`@cognidesk/integrations: generated ${generatedOperations.length} Outlook Graph operations from ${parsedSpec.pathCount} Microsoft Graph v1.0 paths.`);

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
