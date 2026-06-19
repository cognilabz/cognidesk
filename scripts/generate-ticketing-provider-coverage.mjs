import { execFile } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const GENERATED_AT = "2026-06-18";
const DOCS_DIR = "docs/provider-coverage";
const HTTP_METHODS = new Set(["get", "post", "put", "patch", "delete"]);

import { implemented } from "./generate-ticketing-provider-coverage/implemented-operations.mjs";
import { inventoryProviders } from "./generate-ticketing-provider-coverage/inventory-providers.mjs";

await mkdir(DOCS_DIR, { recursive: true });
await generateFront();
await generateIntercom();
await generateGorgias();
await generateKustomer();
await generateInventories();

async function generateFront() {
  const sources = [
    {
      label: "Front Core API OpenAPI JSON",
      url: "https://raw.githubusercontent.com/frontapp/front-api-specs/main/core-api/core-api.json",
    },
    {
      label: "Front Channel API OpenAPI JSON",
      url: "https://raw.githubusercontent.com/frontapp/front-api-specs/main/channel-api/channel-api.json",
    },
  ];
  const specs = [];
  const operations = [];
  for (const source of sources) {
    const spec = await fetchJson(source.url);
    specs.push({ source, spec });
    operations.push(...extractOperations(spec, source.url));
  }
  await writeOperationArtifact({
    provider: "front",
    providerPascal: "Front",
    packageDir: "packages/integrations/src/ticketing/front",
    packageName: "@cognidesk/integrations",
    artifactStem: "front-core-and-channel-api",
    sourceKind: "openapi-bundle",
    officialSources: [
      { label: "Front official OpenAPI repo", url: "https://github.com/frontapp/front-api-specs", kind: "openapi-repository" },
      ...sources.map((source) => ({ label: source.label, url: source.url, kind: "openapi-json" })),
    ],
    specSummary: {
      title: "Front Core and Channel APIs",
      version: "1.0.0",
      openapi: "3.0.0",
      sourceUrl: "https://github.com/frontapp/front-api-specs",
      sourceCount: specs.length,
      sources: specs.map(({ source, spec }) => ({
        label: source.label,
        url: source.url,
        title: String(spec.info?.title ?? "unknown"),
        version: String(spec.info?.version ?? "unknown"),
        pathCount: Object.keys(spec.paths ?? {}).length,
        operationCount: extractOperations(spec, source.url).length,
      })),
      pathCount: specs.reduce((sum, { spec }) => sum + Object.keys(spec.paths ?? {}).length, 0),
      documentedOperationCount: operations.length,
    },
    operations,
    implementedOperations: implemented.front,
  });
}

async function generateIntercom() {
  const sourceUrl = "https://raw.githubusercontent.com/intercom/Intercom-OpenAPI/main/descriptions/2.15/api.intercom.io.yaml";
  const spec = await fetchYamlAsJson(sourceUrl);
  await writeOperationArtifact({
    provider: "intercom",
    providerPascal: "Intercom",
    packageDir: "packages/integrations/src/ticketing/intercom",
    packageName: "@cognidesk/integrations",
    artifactStem: "intercom-rest-api-2.15",
    sourceKind: "openapi",
    officialSources: [
      { label: "Intercom official OpenAPI repo", url: "https://github.com/intercom/Intercom-OpenAPI", kind: "openapi-repository" },
      { label: "Intercom REST API 2.15 OpenAPI YAML", url: sourceUrl, kind: "openapi-yaml" },
    ],
    spec,
    sourceUrl,
    implementedOperations: implemented.intercom,
  });
}

async function generateGorgias() {
  const indexUrl = "https://developers.gorgias.com/llms.txt";
  const index = await fetchText(indexUrl);
  const pageUrls = [...index.matchAll(/\((https:\/\/developers\.gorgias\.com\/reference\/[^)]+\.md)\)/g)]
    .map((match) => match[1]);
  const operationMap = new Map();
  for (const pageUrl of pageUrls) {
    const page = await fetchText(pageUrl);
    const jsonBlock = extractOpenApiJsonBlock(page);
    if (!jsonBlock) continue;
    let spec;
    try {
      spec = JSON.parse(jsonBlock);
    } catch {
      continue;
    }
    for (const operation of extractOperations(spec, pageUrl)) {
      const key = `${operation.method} ${operation.path} ${operation.operationId}`;
      operationMap.set(key, operation);
    }
  }
  await writeOperationArtifact({
    provider: "gorgias",
    providerPascal: "Gorgias",
    packageDir: "packages/integrations/src/ticketing/gorgias",
    packageName: "@cognidesk/integrations",
    artifactStem: "gorgias-public-api",
    sourceKind: "readme-openapi-pages",
    officialSources: [
      { label: "Gorgias developer llms.txt", url: indexUrl, kind: "llms-index" },
      { label: "Gorgias endpoint markdown pages", url: "https://developers.gorgias.com/reference", kind: "readme-openapi-pages" },
    ],
    specSummary: {
      title: "Gorgias REST API",
      version: "1.0.0",
      openapi: "per-endpoint OpenAPI JSON blocks",
      sourceUrl: indexUrl,
      pathCount: new Set([...operationMap.values()].map((operation) => operation.path)).size,
      documentedOperationCount: operationMap.size,
    },
    operations: [...operationMap.values()],
    implementedOperations: implemented.gorgias,
  });
}

async function generateKustomer() {
  const registries = [
    ["workflows.json", "a3dlq73hmoecp4bk"],
    ["apps-platform.json", "xvpl12dmoekk2d0"],
    ["queues-and-routing.json", "3jv1lumoi0ba0m"],
    ["knowledge-base-kb.json", "1836s2z4lmoi0ba5f"],
    ["settings-and-configurations.json", "7tpx26moi0ba5d"],
    ["access-management.json", "xvpl12dmoegg5vg"],
    ["core-resources.json", "a9esg22kmox9ylt0"],
    ["ai-and-automations.json", "xvpl11gmoef4kqe"],
    ["core-resources-v2.yaml", "18vehcovmod7cbhv"],
  ];
  const operationMap = new Map();
  const sourceSummaries = [];
  for (const [filename, uuid] of registries) {
    const sourceUrl = `https://dash.readme.com/api/v1/api-registry/${uuid}`;
    const spec = await fetchJson(sourceUrl);
    const operations = extractOperations(spec, sourceUrl);
    for (const operation of operations) {
      const key = `${operation.method} ${operation.path} ${operation.operationId}`;
      operationMap.set(key, { ...operation, sourceFile: filename });
    }
    sourceSummaries.push({
      filename,
      uuid,
      sourceUrl,
      title: String(spec.info?.title ?? filename),
      version: String(spec.info?.version ?? "unknown"),
      operationCount: operations.length,
      pathCount: Object.keys(spec.paths ?? {}).length,
    });
  }
  await writeOperationArtifact({
    provider: "kustomer",
    providerPascal: "Kustomer",
    packageDir: "packages/integrations/src/ticketing/kustomer",
    packageName: "@cognidesk/integrations",
    artifactStem: "kustomer-public-api",
    sourceKind: "readme-openapi-registries",
    officialSources: [
      { label: "Kustomer API reference", url: "https://developer.kustomer.com/kustomer-api-docs/reference", kind: "official-docs" },
      ...registries.map(([filename, uuid]) => ({ label: `Kustomer ReadMe API registry ${filename}`, url: `https://dash.readme.com/api/v1/api-registry/${uuid}`, kind: "openapi-json" })),
    ],
    specSummary: {
      title: "Kustomer API ReadMe registries",
      version: "2.0.0",
      openapi: "3.0.0",
      sourceUrl: "https://developer.kustomer.com/kustomer-api-docs/reference",
      registryCount: registries.length,
      registries: sourceSummaries,
      pathCount: new Set([...operationMap.values()].map((operation) => operation.path)).size,
      documentedOperationCount: operationMap.size,
    },
    operations: [...operationMap.values()],
    implementedOperations: implemented.kustomer,
  });
}

async function generateInventories() {
  for (const provider of inventoryProviders) {
    const implementedOperationCount = provider.families.reduce((sum, item) => sum + item.implementedOperations.length, 0);
    const payload = {
      generatedAt: GENERATED_AT,
      provider: provider.provider,
      packageName: provider.packageName,
      sourceKind: "checked-endpoint-family-inventory",
      officialSources: provider.officialSources,
      counts: {
        familyCount: provider.families.length,
        implementedFamilyCount: provider.families.filter((item) => item.status === "implemented-subset").length,
        gapFamilyCount: provider.families.filter((item) => item.status === "gap").length,
        implementedOperationCount,
      },
      families: provider.families,
    };
    await writeFile(path.join(DOCS_DIR, `${provider.artifactStem}-${GENERATED_AT}.inventory.json`), `${JSON.stringify(payload, null, 2)}\n`);
  }
}

async function writeOperationArtifact(input) {
  const rawOperations = input.operations ?? extractOperations(input.spec, input.sourceUrl);
  const generatedOperations = withUniqueOperationIds(withGeneratedFunctionNames(input.providerPascal, rawOperations));
  const localOperations = input.implementedOperations.map(([clientMethod, method, requestPath]) => ({
    clientMethod,
    method,
    path: requestPath,
    normalizedPath: normalizePath(requestPath),
  }));
  const operations = generatedOperations
    .map((operation) => {
      const match = localOperations.find((candidate) =>
        candidate.method === operation.method && candidate.normalizedPath === normalizePath(operation.path)
      );
      return {
        ...operation,
        implementationStatus: match ? "support-helper-and-generated" : "generated-only",
        ...(match ? { implementedBy: match.clientMethod } : {}),
      };
    })
    .sort((a, b) => `${a.path} ${a.method} ${a.operationId}`.localeCompare(`${b.path} ${b.method} ${b.operationId}`));
  const supportHelperOperationCount = operations.filter((operation) => operation.implementedBy).length;
  const specSummary = input.specSummary ?? {
    title: String(input.spec.info?.title ?? "unknown"),
    version: String(input.spec.info?.version ?? "unknown"),
    openapi: String(input.spec.openapi ?? input.spec.swagger ?? "unknown"),
    sourceUrl: input.sourceUrl,
    pathCount: Object.keys(input.spec.paths ?? {}).length,
    documentedOperationCount: operations.length,
  };
  const payload = {
    generatedAt: GENERATED_AT,
    provider: input.provider,
    packageName: input.packageName,
    sourceKind: input.sourceKind,
    officialSources: input.officialSources,
    spec: {
      ...specSummary,
      documentedOperationCount: operations.length,
    },
    localSurface: {
      generatedOperationCount: operations.length,
      generatedFunctionCount: operations.length,
      unimplementedOperationCount: 0,
      gapOperationCount: 0,
      supportHelperOperationCount,
      supportHelperGapOperationCount: operations.length - supportHelperOperationCount,
      declaredLocalOperationCount: localOperations.length,
      implementedOperations: localOperations.map(({ clientMethod, method, path: requestPath }) => {
        const matches = operations.filter((operation) => operation.implementedBy === clientMethod);
        return {
          clientMethod,
          method,
          path: requestPath,
          matchedOperationIds: matches.map((operation) => operation.operationId),
        };
      }),
    },
    operations,
  };
  await writeGeneratedOperationModules(input, specSummary, operations);
  await writeFile(path.join(DOCS_DIR, `${input.artifactStem}-${GENERATED_AT}.operations.json`), `${JSON.stringify(payload, null, 2)}\n`);
  await writeFile(path.join(DOCS_DIR, `${input.artifactStem}-${GENERATED_AT}.functions.json`), `${JSON.stringify({
    generatedAt: GENERATED_AT,
    provider: input.provider,
    packageName: input.packageName,
    sourceKind: input.sourceKind,
    officialSources: input.officialSources,
    spec: {
      ...specSummary,
      documentedOperationCount: operations.length,
    },
    functionCount: operations.length,
    functions: operations.map(({ id, operationId, functionName, method, path: operationPath, tags, sourceUrl }) => ({
      id,
      operationId,
      functionName,
      method,
      path: operationPath,
      tags,
      sourceUrl,
    })),
  }, null, 2)}\n`);
}

async function writeGeneratedOperationModules(input, specSummary, operations) {
  if (!input.packageDir || !input.providerPascal) return;
  await mkdir(input.packageDir, { recursive: true });
  await writeFile(
    path.join(input.packageDir, "full-api-operations.generated.ts"),
    renderGeneratedOperationsFile(input, specSummary, operations),
  );
  await writeFile(
    path.join(input.packageDir, "full-api-client.generated.ts"),
    renderGeneratedClientFile(input, operations),
  );
}

function renderGeneratedOperationsFile(input, specSummary, operations) {
  const upper = constantPrefix(input.provider);
  const pascal = input.providerPascal;
  const specLiteral = {
    ...specSummary,
    documentedOperationCount: operations.length,
  };
  return `// Generated from official ${input.packageName} API documentation.\n// Do not edit by hand; run scripts/generate-ticketing-provider-coverage.mjs after checking upstream docs.\n\nexport type ${pascal}FullApiOperationMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";\n\nexport interface ${pascal}FullApiSpecSource {\n  label?: string;\n  url?: string;\n  filename?: string;\n  uuid?: string;\n  sourceUrl?: string;\n  title?: string;\n  version?: string;\n  pathCount?: number;\n  operationCount?: number;\n}\n\nexport interface ${pascal}FullApiSpec {\n  title: string;\n  version: string;\n  openapi: string;\n  sourceUrl: string;\n  pathCount: number;\n  documentedOperationCount: number;\n  sourceCount?: number;\n  registryCount?: number;\n  sources?: readonly ${pascal}FullApiSpecSource[];\n  registries?: readonly ${pascal}FullApiSpecSource[];\n}\n\nexport interface ${pascal}FullApiOperation {\n  id: string;\n  operationId: string;\n  functionName: string;\n  method: ${pascal}FullApiOperationMethod;\n  path: string;\n  tags: readonly string[];\n  summary: string;\n  sourceUrl: string;\n}\n\nexport const ${upper}_FULL_API_GENERATED_AT = "${GENERATED_AT}" as const;\nexport const ${upper}_FULL_API_SPEC_SOURCE = ${JSON.stringify(String(specSummary.sourceUrl ?? input.officialSources[0]?.url ?? ""))} as const;\nexport const ${upper}_FULL_API_SPEC_VERSION = "${input.provider}-${GENERATED_AT}" as const;\nexport const ${upper}_FULL_API_OPERATION_COUNT = ${operations.length} as const;\n\nexport const ${upper}_FULL_API_SPEC: ${pascal}FullApiSpec = ${JSON.stringify(specLiteral, null, 2)};\n\nexport const ${upper}_FULL_API_OPERATIONS = JSON.parse(${JSON.stringify(JSON.stringify(operations))}) as readonly ${pascal}FullApiOperation[];\n\nexport type ${pascal}FullApiOperationId = string;\n\nexport const ${upper}_FULL_API_OPERATION_BY_ID = new Map<string, ${pascal}FullApiOperation>(\n  ${upper}_FULL_API_OPERATIONS.map((operation) => [operation.id, operation]),\n);\n`;
}

function renderGeneratedClientFile(input, operations) {
  const upper = constantPrefix(input.provider);
  const pascal = input.providerPascal;
  const interfaceMethods = operations.map((operation) =>
    `  ${operation.functionName}<T = ${pascal}Resource>(input?: ${pascal}OperationRequestInput): Promise<T>;`
  ).join("\n");
  const functionNames = operations.map((operation) => operation.functionName);
  const bodyMethods = operations.map((operation) =>
    `    ${operation.functionName}: (input) => callOperation(${JSON.stringify(operation.id)}, input),`
  ).join("\n");
  return `// Generated from official ${input.packageName} API documentation.\n// Do not edit by hand; run scripts/generate-ticketing-provider-coverage.mjs after checking upstream docs.\n\nimport type { ${pascal}OperationRequestInput, ${pascal}Resource } from "./index.js";\n\nexport type ${pascal}GeneratedOperationCaller = <T = ${pascal}Resource>(operationId: string, input?: ${pascal}OperationRequestInput) => Promise<T>;\n\nexport interface ${pascal}FullApiGeneratedClient {\n${interfaceMethods}\n}\n\nexport const ${upper}_FULL_API_GENERATED_FUNCTION_COUNT = ${operations.length} as const;\nexport const ${upper}_FULL_API_GENERATED_FUNCTION_NAMES = JSON.parse(${JSON.stringify(JSON.stringify(functionNames))}) as readonly string[];\n\nexport function create${pascal}FullApiGeneratedClient(\n  callOperation: ${pascal}GeneratedOperationCaller,\n): ${pascal}FullApiGeneratedClient {\n  return {\n${bodyMethods}\n  };\n}\n`;
}

function withGeneratedFunctionNames(providerPascal, rawOperations) {
  const used = new Map();
  return rawOperations.map((operation) => {
    const baseName = `${lowerFirst(providerPascal)}${pascal(operation.operationId) || pascal(`${operation.method} ${operation.path}`) || "Operation"}`;
    const seen = used.get(baseName) ?? 0;
    used.set(baseName, seen + 1);
    return {
      ...operation,
      functionName: seen === 0 ? baseName : `${baseName}${seen + 1}`,
    };
  });
}

function withUniqueOperationIds(rawOperations) {
  const counts = new Map();
  for (const operation of rawOperations) {
    counts.set(operation.id, (counts.get(operation.id) ?? 0) + 1);
  }
  const seen = new Map();
  return rawOperations.map((operation) => {
    if ((counts.get(operation.id) ?? 0) <= 1) return operation;
    const seenCount = seen.get(operation.id) ?? 0;
    seen.set(operation.id, seenCount + 1);
    if (seenCount === 0) return operation;
    return {
      ...operation,
      id: `${operation.id}:${sourceSuffix(operation.sourceUrl) || `${operation.method}-${operation.path}`}`,
    };
  });
}

function sourceSuffix(sourceUrl) {
  const filename = String(sourceUrl ?? "").split("/").filter(Boolean).at(-2);
  return filename ? filename.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase() : "";
}

function lowerFirst(value) {
  return `${value.slice(0, 1).toLowerCase()}${value.slice(1)}`;
}

function constantPrefix(value) {
  return String(value).replace(/[^a-zA-Z0-9]+/g, "_").replace(/^_|_$/g, "").toUpperCase();
}

function pascal(value) {
  const normalized = String(value)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim();
  const result = normalized.split(/\s+/).filter(Boolean)
    .map((part) => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
    .join("");
  return /^\d/.test(result) ? `Op${result}` : result;
}

function extractOperations(spec, sourceUrl) {
  const operations = [];
  for (const [operationPath, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem ?? {})) {
      if (!HTTP_METHODS.has(method)) continue;
      const operationId = String(operation.operationId ?? `${method}_${operationPath}`);
      operations.push({
        id: operationId,
        operationId,
        method: method.toUpperCase(),
        path: operationPath,
        tags: Array.isArray(operation.tags) ? operation.tags.map(String) : [],
        summary: String(operation.summary ?? ""),
        sourceUrl,
      });
    }
  }
  return operations;
}

function extractOpenApiJsonBlock(page) {
  const markerIndex = page.indexOf("# OpenAPI definition");
  if (markerIndex === -1) return undefined;
  const lines = page.slice(markerIndex).split(/\r?\n/);
  const startIndex = lines.findIndex((line) => /^`{3,}json\s*$/.test(line));
  if (startIndex === -1) return undefined;
  const fence = lines[startIndex].match(/^(`{3,})json\s*$/)?.[1] ?? "```";
  const endIndex = lines.findIndex((line, index) => index > startIndex && line === fence);
  if (endIndex === -1) return undefined;
  return lines.slice(startIndex + 1, endIndex).join("\n");
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  return response.json();
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  return response.text();
}

async function fetchYamlAsJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  const tmpDir = await mkdtemp(path.join(tmpdir(), "ticketing-oas-"));
  try {
    const yamlPath = path.join(tmpDir, "openapi.yaml");
    const jsonPath = path.join(tmpDir, "openapi.json");
    await writeFile(yamlPath, await response.text());
    await execFileAsync("ruby", [
      "-ryaml",
      "-rjson",
      "-e",
      "File.write(ARGV[1], JSON.generate(YAML.safe_load(File.read(ARGV[0]), aliases: true, permitted_classes: [Time])))",
      yamlPath,
      jsonPath,
    ], { maxBuffer: 80 * 1024 * 1024 });
    return JSON.parse(await readFile(jsonPath, "utf8"));
  } finally {
    await rm(tmpDir, { recursive: true, force: true });
  }
}

function normalizePath(value) {
  return String(value)
    .replace(/^\/v1(?=\/)/, "")
    .replace(/\{[^}]+\}/g, "{}")
    .replace(/\/+$/, "")
    || "/";
}
