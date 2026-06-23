import { mkdtemp, readFile, rm, writeFile, mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const repoRoot = process.cwd();
const generatedAt = "2026-06-17";
const sourceUrl = "https://developer.zendesk.com/zendesk/oas.yaml";

const response = await fetch(sourceUrl);
if (!response.ok) throw new Error(`Failed to fetch ${sourceUrl}: ${response.status}`);
const tmpDir = await mkdtemp(path.join(tmpdir(), "zendesk-oas-"));
try {
  const yamlPath = path.join(tmpDir, "zendesk-oas.yaml");
  const jsonPath = path.join(tmpDir, "zendesk-oas.json");
  await writeFile(yamlPath, Buffer.from(await response.arrayBuffer()));
  await execFileAsync("ruby", [
    "-ryaml",
    "-rjson",
    "-e",
    `File.write(ARGV[1], JSON.generate(YAML.safe_load(File.read(ARGV[0]), aliases: true, permitted_classes: [Time])))`,
    yamlPath,
    jsonPath,
  ], { maxBuffer: 80 * 1024 * 1024 });
  const spec = JSON.parse(await readFile(jsonPath, "utf8"));
  const operations = [];
  for (const [operationPath, pathItem] of Object.entries(spec.paths ?? {})) {
    for (const [method, operation] of Object.entries(pathItem ?? {})) {
      if (!["get", "post", "put", "patch", "delete"].includes(method)) continue;
      const operationId = operation.operationId ?? `${method}_${operationPath}`;
      operations.push({
        id: operationId,
        operationId,
        functionName: uniqueFunctionName(operations, pascal(operationId)),
        method: method.toUpperCase(),
        path: operationPath,
        tags: Array.isArray(operation.tags) ? operation.tags : [],
        summary: operation.summary ?? "",
        sourceUrl,
      });
    }
  }
  operations.sort((a, b) => a.functionName.localeCompare(b.functionName));

  const docsDir = path.join(repoRoot, "docs/provider-coverage");
  await mkdir(docsDir, { recursive: true });

  const artifactStem = `zendesk-full-api-${generatedAt}`;
  const specSummary = {
    sourceUrl,
    openapi: String(spec.openapi ?? "unknown"),
    version: String(spec.info?.version ?? "unknown"),
    title: String(spec.info?.title ?? "unknown"),
    documentedOperationCount: operations.length,
    pathCount: Object.keys(spec.paths ?? {}).length,
  };

  await writeFile(path.join(docsDir, `${artifactStem}.operations.json`), `${JSON.stringify({ generatedAt, spec: specSummary, operations }, null, 2)}\n`);
  await writeFile(path.join(docsDir, `${artifactStem}.functions.json`), `${JSON.stringify({
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
  }, null, 2)}\n`);
  console.log(`docs/provider-coverage: cataloged ${operations.length} Zendesk Support operations`);
} finally {
  await rm(tmpDir, { recursive: true, force: true });
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

function uniqueFunctionName(existingOperations, candidate) {
  let name = candidate || "Operation";
  let index = 2;
  const existing = new Set(existingOperations.map((operation) => operation.functionName));
  while (existing.has(name)) {
    name = `${candidate}${index}`;
    index += 1;
  }
  return name;
}
