import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const repoRoot = path.resolve(fileURLToPath(new URL("../../..", import.meta.url)));
const splitIntegrationsRoot = path.join(repoRoot, "integrations");
const fixtureGeneratedRoot = path.join(repoRoot, "packages", "test-harness", "test", "fixtures", "generated-provider");

describe("generated provider API typing", () => {
  it("keeps generated clients from degrading to generic facade typing", async () => {
    const generatedClients = await generatedProviderFiles("client");

    const failures: string[] = [];
    for (const file of generatedClients) {
      const source = await readFile(file, "utf8");
      const relative = path.relative(repoRoot, file);
      const operationsFile = file.replace(/-client\.generated\.ts$/, "-operations.generated.ts");
      const schemaFile = file.replace(/-client\.generated\.ts$/, "-schema-types.generated.ts");

      if (!existsSync(operationsFile)) {
        failures.push(`${relative}: missing sibling operations module`);
      }
      if (!existsSync(schemaFile)) {
        failures.push(`${relative}: missing sibling provider schema DTO module`);
      }
      if (!source.includes("schema-types.generated.js")) {
        failures.push(`${relative}: missing generated provider schema DTO import`);
      }
      if (!source.includes("OperationPathParamMap")) {
        failures.push(`${relative}: missing generated operation-specific path parameter map`);
      }
      if (!source.includes("OperationRequestMap")) {
        failures.push(`${relative}: missing generated operation-specific request map`);
      }
      if (!source.includes("OperationResponseMap")) {
        failures.push(`${relative}: missing generated operation-specific response map`);
      }
      if (/<T\s*=\s*[^>]+>\(input\?:\s*\w+OperationRequestInput\):\s*Promise<T>/.test(source)) {
        failures.push(`${relative}: generated functions still expose caller-selected generic responses`);
      }
      if (/GeneratedOperationCaller\s*=\s*<T\s*=/.test(source)) {
        failures.push(`${relative}: operation caller still exposes caller-selected generic responses`);
      }
      if (/ProviderResponse\s*</.test(source)) {
        failures.push(`${relative}: generated client still exposes provider response facade alias`);
      }
      if (/=\s*unknown\b/.test(source)) {
        failures.push(`${relative}: generated client still defaults generated response typing to unknown`);
      }
      if (/operation(?:Uid|Id):\s*string/.test(source)) {
        failures.push(`${relative}: operation caller still accepts arbitrary string keys`);
      }
    }

    expect(failures).toEqual([]);
  });

  it("keeps generated operation id aliases literal instead of plain string", async () => {
    const operationModules = await generatedProviderFiles("operations");

    const failures: string[] = [];
    for (const file of operationModules) {
      const source = await readFile(file, "utf8");
      const relative = path.relative(repoRoot, file);
      if (/export type \w+OperationId\s*=\s*string;/.test(source)) {
        failures.push(`${relative}: OperationId is still string`);
      }
      if (!source.includes("Hardened literal operation keys")) {
        failures.push(`${relative}: missing generated literal key constants`);
      }
    }

    expect(failures).toEqual([]);
  });

  it("keeps generated schema DTO maps sourced and non-generic", async () => {
    const schemaModules = await generatedProviderFiles("schema");

    const failures: string[] = [];
    for (const file of schemaModules) {
      const source = await readFile(file, "utf8");
      const relative = path.relative(repoRoot, file);
      if (!source.includes("OperationResponseMap")) {
        failures.push(`${relative}: missing operation response DTO map`);
      }
      if (/SchemaJsonValue \/\* (?:No provider schema source|Operation not found|Discovery method not found)/.test(source)) {
        failures.push(`${relative}: contains fallback provider response DTO`);
      }
      if (/Promise\s*<\s*unknown\s*>|Record\s*<\s*string\s*,\s*unknown\s*>|\[key: string\]: unknown/.test(source)) {
        failures.push(`${relative}: contains unknown-valued generated provider contract`);
      }
      if (/\[key: string\]: any\b/.test(source)) {
        failures.push(`${relative}: contains any-valued generated provider contract`);
      }
      if (/readonly readonly\b/.test(source)) {
        failures.push(`${relative}: contains invalid duplicate readonly modifier`);
      }
      for (const [mapName, duplicateKeys] of duplicateQuotedKeysByInterface(source)) {
        for (const key of duplicateKeys) {
          failures.push(`${relative}: duplicate operation key ${JSON.stringify(key)} in ${mapName}`);
        }
      }
    }

    expect(failures).toEqual([]);
  });

  it("exports generated schema DTO modules from package indexes", async () => {
    const schemaModules = await generatedProviderFiles("schema");

    const failures: string[] = [];
    for (const file of schemaModules) {
      const indexFile = path.join(path.dirname(file), "index.ts");
      if (!existsSync(indexFile)) continue;
      const indexSource = await readFile(indexFile, "utf8");
      const basename = path.basename(file, ".ts");
      const relative = path.relative(repoRoot, indexFile);
      if (!indexSource.includes(`export type * from "./${basename}.js";`)) {
        failures.push(`${relative}: missing schema DTO export for ${basename}`);
      }
    }

    expect(failures).toEqual([]);
  });

  it("keeps public generated-operation callers hard typed", async () => {
    const indexFiles = await generatedProviderIndexFiles();

    const failures: string[] = [];
    for (const file of indexFiles) {
      const source = await readFile(file, "utf8");
      if (!/type \w+GeneratedOperationCaller/.test(source)) continue;
      const relative = path.relative(repoRoot, file);
      if (/requestOperation<T\s*=/.test(source)) {
        failures.push(`${relative}: public requestOperation still exposes caller-selected generic responses`);
      }
      if (/requestJson<T\s*=\s*unknown/.test(source)) {
        failures.push(`${relative}: public requestJson still defaults provider JSON to unknown`);
      }
      if (/create\w+GeneratedClient\(requestOperation\)/.test(source)) {
        failures.push(`${relative}: generated client is wired through an untyped requestOperation function`);
      }
      if (/requestOperation,\s*\n/.test(source)) {
        failures.push(`${relative}: returned public requestOperation is not cast to the generated caller contract`);
      }
    }

    expect(failures).toEqual([]);
  });

  it("keeps generated clients from re-exposing raw path request helpers", async () => {
    const indexFiles = await generatedProviderIndexFiles();

    const failures: string[] = [];
    for (const file of indexFiles) {
      const source = await readFile(file, "utf8");
      const relative = path.relative(repoRoot, file);
      for (const block of exportedClientInterfaceBlocks(source)) {
        if (
          /\brequest\w*Operation:\s*\w+GeneratedOperationCaller\b/.test(block.body)
          && /\brequest(?:Json|ArrayBuffer|Stream)?\s*\(/.test(block.body)
        ) {
          failures.push(`${relative}: ${block.name} exposes raw path request helpers alongside generated operation callers`);
        }
        if (/\brequest(?:Json)?\s*<[^>]+>\s*\(/.test(block.body)) {
          failures.push(`${relative}: ${block.name} exposes caller-selected generic raw request typing`);
        }
        if (/\bgraphql\s*<[^>]+>\s*\(/.test(block.body)) {
          failures.push(`${relative}: ${block.name} exposes caller-selected generic GraphQL response typing`);
        }
        if (/\brequest(?:Json)?\([^)]*\):\s*Promise\s*<\s*(?:any|unknown)\s*>/.test(block.body)) {
          failures.push(`${relative}: ${block.name} exposes any/unknown raw request response typing`);
        }
      }
    }

    expect(failures).toEqual([]);
  });
});

async function generatedProviderFiles(kind: "client" | "operations" | "schema") {
  const workspaceFiles = (await Promise.all(
    generatedProviderSearchRoots().map((root) => findGeneratedFiles(root, kind, { excludeFixtures: true })),
  )).flat().sort((a, b) => a.localeCompare(b));
  if (workspaceFiles.length > 0 || existsSync(splitIntegrationsRoot)) {
    expect(workspaceFiles.length).toBeGreaterThan(0);
    return workspaceFiles;
  }

  const fixtureFiles = await findGeneratedFiles(fixtureGeneratedRoot, kind);
  expect(fixtureFiles.length).toBeGreaterThan(0);
  return fixtureFiles;
}

async function generatedProviderIndexFiles() {
  const indexFiles = [...new Set(
    (await generatedProviderFiles("client"))
      .map((file) => path.join(path.dirname(file), "index.ts"))
      .filter((file) => existsSync(file)),
  )].sort((a, b) => a.localeCompare(b));
  expect(indexFiles.length).toBeGreaterThan(0);
  return indexFiles;
}

function generatedProviderSearchRoots() {
  return [
    path.join(repoRoot, "integrations"),
    path.join(repoRoot, "packages"),
  ].filter((root) => existsSync(root));
}

async function findGeneratedFiles(
  root: string,
  kind: "client" | "operations" | "schema",
  options: { excludeFixtures?: boolean } = {},
) {
  const suffix = kind === "client"
    ? "-client.generated.ts"
    : kind === "operations"
      ? "-operations.generated.ts"
      : "-schema-types.generated.ts";
  const files = await walk(root);
  return files
    .filter((file) => file.endsWith(suffix) && (!options.excludeFixtures || !isFixturePath(file)))
    .sort((a, b) => a.localeCompare(b));
}

function isFixturePath(file: string) {
  return file.startsWith(fixtureGeneratedRoot + path.sep);
}

function exportedClientInterfaceBlocks(source: string) {
  const blocks: Array<{ name: string; body: string }> = [];
  const interfacePattern = /export interface (\w*Client)\b[^{]*\{/g;
  let match: RegExpExecArray | null;
  while ((match = interfacePattern.exec(source))) {
    const name = match[1];
    if (!name) continue;
    let depth = 1;
    let index = interfacePattern.lastIndex;
    for (; index < source.length; index += 1) {
      const char = source[index];
      if (char === "{") depth += 1;
      if (char === "}") {
        depth -= 1;
        if (depth === 0) break;
      }
    }
    blocks.push({ name, body: source.slice(interfacePattern.lastIndex, index) });
    interfacePattern.lastIndex = index + 1;
  }
  return blocks;
}

function duplicateQuotedKeysByInterface(source: string) {
  const duplicates: Array<[string, string[]]> = [];
  const interfacePattern = /export interface (\w+Operation(?:Query|RequestBody|Response|PathParam)Map)\s*\{/g;
  let match: RegExpExecArray | null;
  while ((match = interfacePattern.exec(source))) {
    const name = match[1];
    if (!name) continue;
    let depth = 1;
    let index = interfacePattern.lastIndex;
    for (; index < source.length; index += 1) {
      const char = source[index];
      if (char === "{") depth += 1;
      if (char === "}") {
        depth -= 1;
        if (depth === 0) break;
      }
    }
    const body = source.slice(interfacePattern.lastIndex, index);
    const keys = new Map<string, number>();
    let bodyDepth = 0;
    for (let bodyIndex = 0; bodyIndex < body.length; bodyIndex += 1) {
      const char = body[bodyIndex];
      if (bodyDepth === 0 && char === "\"") {
        const end = body.indexOf("\"", bodyIndex + 1);
        if (end === -1) break;
        let after = end + 1;
        while (/\s/.test(body[after] ?? "")) after += 1;
        if (body[after] === ":") {
          const key = body.slice(bodyIndex + 1, end);
          keys.set(key, (keys.get(key) ?? 0) + 1);
        }
        bodyIndex = end;
        continue;
      }
      if (char === "{") bodyDepth += 1;
      if (char === "}") bodyDepth -= 1;
    }
    const duplicateKeys = [...keys.entries()].filter(([, count]) => count > 1).map(([key]) => key);
    if (duplicateKeys.length) duplicates.push([name, duplicateKeys]);
    interfacePattern.lastIndex = index + 1;
  }
  return duplicates;
}

async function walk(root: string): Promise<string[]> {
  const entries = await readdir(root, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === "dist" || entry.name === "build") continue;
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(absolute));
    } else {
      files.push(absolute);
    }
  }
  return files;
}
