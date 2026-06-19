import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const repoRoot = process.cwd();
const generatedAt = "2026-06-18";
const sourceUrl = "https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip";

const response = await fetch(sourceUrl);
if (!response.ok) throw new Error(`Failed to fetch ${sourceUrl}: ${response.status}`);
const tmpDir = await mkdtemp(path.join(tmpdir(), "appstore-openapi-"));
try {
  const zipPath = path.join(tmpDir, "appstore-openapi.zip");
  await writeFile(zipPath, Buffer.from(await response.arrayBuffer()));
  const { stdout } = await execFileAsync("unzip", ["-p", zipPath, "openapi.oas.json"], { maxBuffer: 80 * 1024 * 1024 });
  const spec = JSON.parse(stdout);
  const operations = [];
  for (const [operationPath, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem ?? {})) {
      if (!["get", "post", "put", "patch", "delete"].includes(method)) continue;
      const operationId = operation.operationId ?? `${method}_${operationPath}`;
      operations.push({
        id: operationId,
        operationId,
        functionName: pascal(operationId),
        method: method.toUpperCase(),
        path: operationPath,
        tags: Array.isArray(operation.tags) ? operation.tags : [],
        summary: operation.summary ?? "",
        sourceUrl,
      });
    }
  }
  operations.sort((a, b) => a.functionName.localeCompare(b.functionName));
  assertUnique(operations.map((operation) => operation.functionName), "function name");

  const docsDir = path.join(repoRoot, "docs/provider-coverage");
  const srcDir = path.join(repoRoot, "packages/integrations/src/review/appstore");
  await mkdir(docsDir, { recursive: true });
  await mkdir(srcDir, { recursive: true });

  const artifactStem = `appstore-full-api-${generatedAt}`;
  const specSummary = {
    sourceUrl,
    openapi: String(spec.openapi ?? "unknown"),
    version: String(spec.info?.version ?? "unknown"),
    documentedOperationCount: operations.length,
    pathCount: Object.keys(spec.paths ?? {}).length,
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
      functions: operations.map(({ id, operationId, functionName, method, path, tags, sourceUrl }) => ({
        id,
        operationId,
        functionName,
        method,
        path,
        tags,
        sourceUrl,
      })),
    }, null, 2)}\n`,
  );

  await writeFile(path.join(srcDir, "full-api-operations.generated.ts"), renderOperationsFile(specSummary, operations));
  await writeFile(path.join(srcDir, "full-api-client.generated.ts"), renderClientFile(operations));
  console.log(`packages/integrations/src/review/appstore: generated ${operations.length} operations`);
} finally {
  await rm(tmpDir, { recursive: true, force: true });
}

function renderOperationsFile(specSummary, operations) {
  return `// Generated from App Store Connect OpenAPI (${sourceUrl}).\n// Do not edit by hand; run scripts/generate-appstore-full-api.mjs after checking upstream docs.\n\nexport type AppStoreFullApiOperationMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n\nexport interface AppStoreFullApiSpec {\n  sourceUrl: string;\n  openapi: string;\n  version: string;\n  documentedOperationCount: number;\n  pathCount: number;\n}\n\nexport interface AppStoreFullApiOperation {\n  id: string;\n  operationId: string;\n  functionName: string;\n  method: AppStoreFullApiOperationMethod;\n  path: string;\n  tags: readonly string[];\n  summary: string;\n  sourceUrl: string;\n}\n\nexport const APPSTORE_FULL_API_SPEC_SOURCE = "${sourceUrl}" as const;\nexport const APPSTORE_FULL_API_SPEC_VERSION = "app-store-connect-${specSummary.version}-${generatedAt}" as const;\nexport const APPSTORE_FULL_API_GENERATED_AT = "${generatedAt}" as const;\nexport const APPSTORE_FULL_API_OPERATION_COUNT = ${operations.length} as const;\n\nexport const APPSTORE_FULL_API_SPEC: AppStoreFullApiSpec = ${literal(specSummary)};\n\nexport const APPSTORE_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly AppStoreFullApiOperation[];\n\nexport type AppStoreFullApiOperationId = string;\n\nexport const APPSTORE_FULL_API_OPERATION_BY_ID = new Map<string, AppStoreFullApiOperation>(\n  APPSTORE_FULL_API_OPERATIONS.map((operation) => [operation.id, operation]),\n);\n`;
}

function renderClientFile(operations) {
  const interfaceMethods = operations
    .map((operation) => `  ${operation.functionName}<T = AppStoreResource>(input?: AppStoreOperationRequestInput): Promise<T>;`)
    .join("\n");
  const functionNames = operations.map((operation) => operation.functionName);
  const bodyMethods = operations
    .map((operation) => `    ${operation.functionName}: (input) => callOperation("${operation.id}", input),`)
    .join("\n");
  return `// Generated from App Store Connect OpenAPI (${sourceUrl}).\n// Do not edit by hand; run scripts/generate-appstore-full-api.mjs after checking upstream docs.\n\nimport type { AppStoreOperationRequestInput, AppStoreResource } from "./index.js";\n\nexport type AppStoreGeneratedOperationCaller = <T = AppStoreResource>(operationId: string, input?: AppStoreOperationRequestInput) => Promise<T>;\n\nexport interface AppStoreFullApiGeneratedClient {\n${interfaceMethods}\n}\n\nexport const APPSTORE_FULL_API_GENERATED_FUNCTION_COUNT = ${operations.length} as const;\nexport const APPSTORE_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly string[];\n\nexport function createAppStoreFullApiGeneratedClient(\n  callOperation: AppStoreGeneratedOperationCaller,\n): AppStoreFullApiGeneratedClient {\n  return {\n${bodyMethods}\n  };\n}\n`;
}

function pascal(value) {
  const normalized = String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim();
  const result = normalized
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join("");
  return /^\d/.test(result) ? `Op${result}` : result;
}

function assertUnique(values, label) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) throw new Error(`Duplicate App Store ${label}: ${value}`);
    seen.add(value);
  }
}

function literal(value) {
  return JSON.stringify(value, null, 2);
}
