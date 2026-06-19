import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const generatedAt = "2026-06-18";
const discoveryUrl = "https://androidpublisher.googleapis.com/$discovery/rest?version=v3";

const response = await fetch(discoveryUrl);
if (!response.ok) throw new Error(`Failed to fetch ${discoveryUrl}: ${response.status}`);
const doc = await response.json();

const operations = [];
walkResources(doc.resources);
operations.sort((a, b) => a.functionName.localeCompare(b.functionName));

const docsDir = path.join(repoRoot, "docs/provider-coverage");
const srcDir = path.join(repoRoot, "packages/integrations/src/review/googleplay");
await mkdir(docsDir, { recursive: true });
await mkdir(srcDir, { recursive: true });

const artifactStem = `googleplay-full-api-${generatedAt}`;
const specSummary = {
  sourceUrl: discoveryUrl,
  revision: String(doc.revision ?? "unknown"),
  version: String(doc.version ?? "unknown"),
  documentedOperationCount: operations.length,
};

await writeFile(
  path.join(docsDir, `${artifactStem}.operations.json`),
  `${JSON.stringify({ generatedAt, spec: specSummary, operations }, null, 2)}\n`,
);
await writeFile(
  path.join(docsDir, `${artifactStem}.functions.json`),
  `${JSON.stringify({
    generatedAt,
    functionCount: operations.length,
    functions: operations.map(({ id, functionName, method, path, sourceUrl }) => ({
      id,
      functionName,
      method,
      path,
      sourceUrl,
    })),
  }, null, 2)}\n`,
);

await writeFile(path.join(srcDir, "full-api-operations.generated.ts"), renderOperationsFile());
await writeFile(path.join(srcDir, "full-api-client.generated.ts"), renderClientFile());

console.log(`packages/integrations/src/review/googleplay: generated ${operations.length} operations`);

function walkResources(resources, prefix = []) {
  for (const [resourceName, resource] of Object.entries(resources ?? {})) {
    const resourcePrefix = [...prefix, resourceName];
    for (const [methodName, method] of Object.entries(resource.methods ?? {})) {
      const id = [...resourcePrefix, methodName].join(".");
      operations.push({
        id,
        functionName: pascal(id),
        method: String(method.httpMethod ?? "GET").toUpperCase(),
        path: method.path ?? method.flatPath ?? "",
        description: method.description ?? "",
        sourceUrl: discoveryUrl,
      });
    }
    walkResources(resource.resources, resourcePrefix);
  }
}

function renderOperationsFile() {
  return `// Generated from Google Play Android Publisher Discovery (${discoveryUrl}).\n// Do not edit by hand; run scripts/generate-googleplay-full-api.mjs after checking upstream docs.\n\nexport type GooglePlayFullApiOperationMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n\nexport interface GooglePlayFullApiSpec {\n  sourceUrl: string;\n  revision: string;\n  version: string;\n  documentedOperationCount: number;\n}\n\nexport interface GooglePlayFullApiOperation {\n  id: string;\n  functionName: string;\n  method: GooglePlayFullApiOperationMethod;\n  path: string;\n  description: string;\n  sourceUrl: string;\n}\n\nexport const GOOGLEPLAY_FULL_API_SPEC_SOURCE = "${discoveryUrl}" as const;\nexport const GOOGLEPLAY_FULL_API_SPEC_VERSION = "androidpublisher-${specSummary.revision}-${generatedAt}" as const;\nexport const GOOGLEPLAY_FULL_API_GENERATED_AT = "${generatedAt}" as const;\nexport const GOOGLEPLAY_FULL_API_OPERATION_COUNT = ${operations.length} as const;\n\nexport const GOOGLEPLAY_FULL_API_SPEC: GooglePlayFullApiSpec = ${literal(specSummary)};\n\nexport const GOOGLEPLAY_FULL_API_OPERATIONS: readonly GooglePlayFullApiOperation[] = ${literal(operations)};\n\nexport type GooglePlayFullApiOperationId = string;\n\nexport const GOOGLEPLAY_FULL_API_OPERATION_BY_ID = new Map<string, GooglePlayFullApiOperation>(\n  GOOGLEPLAY_FULL_API_OPERATIONS.map((operation) => [operation.id, operation]),\n);\n`;
}

function renderClientFile() {
  const interfaceMethods = operations
    .map((operation) => `  ${operation.functionName}<T = GooglePlayResource>(input?: GooglePlayOperationRequestInput): Promise<T>;`)
    .join("\n");
  const functionNames = operations.map((operation) => operation.functionName);
  const bodyMethods = operations
    .map((operation) => `    ${operation.functionName}: (input) => callOperation("${operation.id}", input),`)
    .join("\n");
  return `// Generated from Google Play Android Publisher Discovery (${discoveryUrl}).\n// Do not edit by hand; run scripts/generate-googleplay-full-api.mjs after checking upstream docs.\n\nimport type { GooglePlayOperationRequestInput, GooglePlayResource } from "./index.js";\n\nexport type GooglePlayGeneratedOperationCaller = <T = GooglePlayResource>(operationId: string, input?: GooglePlayOperationRequestInput) => Promise<T>;\n\nexport interface GooglePlayFullApiGeneratedClient {\n${interfaceMethods}\n}\n\nexport const GOOGLEPLAY_FULL_API_GENERATED_FUNCTION_COUNT = ${operations.length} as const;\nexport const GOOGLEPLAY_FULL_API_GENERATED_FUNCTION_NAMES = ${literal(functionNames)} as const;\n\nexport function createGooglePlayFullApiGeneratedClient(\n  callOperation: GooglePlayGeneratedOperationCaller,\n): GooglePlayFullApiGeneratedClient {\n  return {\n${bodyMethods}\n  };\n}\n`;
}

function pascal(value) {
  const normalized = String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim();
  return normalized
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join("");
}

function literal(value) {
  return JSON.stringify(value, null, 2);
}
