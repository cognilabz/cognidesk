import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const repoRoot = path.resolve(fileURLToPath(new URL("../../..", import.meta.url)));
const integrationsPackage = path.join(repoRoot, "packages", "integrations");
const integrationsSrc = path.join(repoRoot, "packages", "integrations", "src");
const integrationsDist = path.join(integrationsPackage, "dist");
const oneMiB = 1024 * 1024;
const publishedDistMaxBytes = 100 * oneMiB;
const declarationChunkMaxBytes = 7 * oneMiB;

describe("generated provider source layout", () => {
  it("keeps provider API generators scoped to generated source artifacts", async () => {
    const scriptsDir = path.join(repoRoot, "scripts");
    const generatorScripts = (await generatorSourceFiles(scriptsDir))
      .sort();
    const sourceWriteFailures: string[] = [];

    for (const file of generatorScripts) {
      const relativeScript = path.relative(repoRoot, file);
      const source = await readFile(file, "utf8");
      const writeCalls = source.matchAll(/writeFile\(([\s\S]*?)\);/g);

      for (const match of writeCalls) {
        const call = match[1] ?? "";
        const writesIntegrationSource =
          /\bPACKAGE_DIR\b|\bsrcDir\b|\bpackageDir\b|\binput\.packageDir\b/.test(call);
        if (!writesIntegrationSource) continue;
        if (call.includes(".generated.ts")) continue;
        sourceWriteFailures.push(`${relativeScript}: ${firstLine(call)}`);
      }
    }

    expect(sourceWriteFailures).toEqual([]);
  });

  it("keeps generated endpoint client chunks small and reviewable", async () => {
    const generatedFiles = await walk(integrationsSrc);
    const clientAggregators = await Promise.all(generatedFiles
      .filter((file) => file.endsWith("-client.generated.ts"))
      .map((file) => lineBudget(file, 2200, "generated client aggregator")));
    const endpointChunks = await Promise.all(generatedFiles
      .filter((file) => file.includes(`${path.sep}client${path.sep}`) && file.endsWith(".generated.ts"))
      .map((file) => lineBudget(file, 700, "generated endpoint chunk")));

    if (clientAggregators.length > 0) {
      expect(endpointChunks.length).toBeGreaterThan(1000);
    }
    expect([...clientAggregators, ...endpointChunks].filter((result) => !result.passed)).toEqual([]);
  });

  it("does not run provider generation from install-time package hooks", async () => {
    const packageJsonFiles = [
      path.join(repoRoot, "package.json"),
      ...await packageJsons(path.join(repoRoot, "packages")),
      ...await packageJsons(path.join(repoRoot, "apps")),
    ];
    const forbiddenHooks = new Set(["preinstall", "install", "postinstall", "prepare"]);
    const failures: string[] = [];

    for (const file of packageJsonFiles) {
      const manifest = JSON.parse(await readFile(file, "utf8")) as { scripts?: Record<string, string> };
      for (const hook of Object.keys(manifest.scripts ?? {})) {
        if (forbiddenHooks.has(hook)) failures.push(`${path.relative(repoRoot, file)} defines ${hook}`);
      }
    }

    expect(failures).toEqual([]);
  });

  it("keeps provider SDKs out of install-time dependencies", async () => {
    const manifest = JSON.parse(await readFile(path.join(integrationsPackage, "package.json"), "utf8")) as {
      dependencies?: Record<string, string>;
      devDependencies?: Record<string, string>;
      optionalDependencies?: Record<string, string>;
      peerDependencies?: Record<string, string>;
      peerDependenciesMeta?: Record<string, { optional?: boolean }>;
      bundledDependencies?: string[];
      bundleDependencies?: string[];
    };

    expect(Object.keys(manifest.dependencies ?? {}).sort()).toEqual([
      "@cognidesk/core",
    ]);
    expect(manifest.optionalDependencies ?? {}).toEqual({});
    expect(manifest.bundledDependencies ?? manifest.bundleDependencies ?? []).toEqual([]);
    expect(manifest.peerDependencies ?? {}).toEqual({});
    expect(manifest.peerDependenciesMeta ?? {}).toEqual({});
  });

  it("keeps built package size and declaration chunks under release budgets", async () => {
    const distFiles = await walk(integrationsDist);
    if (distFiles.length === 0) return;

    const sizes = await Promise.all(distFiles.map(async (file) => ({
      file: path.relative(repoRoot, file),
      bytes: (await stat(file)).size,
    })));
    const totalBytes = sizes.reduce((sum, file) => sum + file.bytes, 0);
    const declarationFailures = sizes
      .filter((file) => file.file.endsWith(".d.ts") && file.bytes > declarationChunkMaxBytes)
      .sort((a, b) => b.bytes - a.bytes)
      .map((file) => sizeFailure(file.file, file.bytes, declarationChunkMaxBytes, "declaration chunk"))
      .slice(0, 20);
    const failures = [
      ...(totalBytes > publishedDistMaxBytes
        ? [sizeFailure("packages/integrations/dist", totalBytes, publishedDistMaxBytes, "published dist")]
        : []),
      ...declarationFailures,
    ];

    expect(failures).toEqual([]);
  });
});

async function packageJsons(root: string) {
  const files: string[] = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    files.push(path.join(root, entry.name, "package.json"));
  }
  return files;
}

async function generatorSourceFiles(scriptsDir: string) {
  const files = await walk(scriptsDir);
  return files
    .filter((file) => file.endsWith(".mjs"))
    .filter((file) => isProviderGeneratorSource(file, scriptsDir))
    .filter((file) => !isAllowedNonApiGenerator(file, scriptsDir));
}

function isProviderGeneratorSource(file: string, scriptsDir: string) {
  const relative = path.relative(scriptsDir, file);
  const [topLevel] = relative.split(path.sep);
  return /^generate-.*\.mjs$/.test(relative) || /^generate-.+/.test(topLevel ?? "");
}

function isAllowedNonApiGenerator(file: string, scriptsDir: string) {
  const relative = path.relative(scriptsDir, file);
  const [topLevel] = relative.split(path.sep);
  return topLevel === "generate-provider-surfaces.mjs"
    || topLevel === "generate-provider-integration-catalog.mjs";
}

async function walk(root: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await readdir(root, { withFileTypes: true }).catch((error: unknown) => {
    if (isMissingPath(error)) return [];
    throw error;
  });
  for (const entry of entries) {
    const file = path.join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(file));
    } else {
      files.push(file);
    }
  }
  return files;
}

function lineBudget(file: string, maxLines: number, label: string) {
  return readFile(file, "utf8").then((source) => {
    const lines = source.split("\n").length;
    return {
      passed: lines <= maxLines,
      file: path.relative(repoRoot, file),
      label,
      lines,
      maxLines,
    };
  });
}

function sizeFailure(file: string, bytes: number, maxBytes: number, label: string) {
  return {
    passed: false,
    file,
    label,
    bytes: formatBytes(bytes),
    maxBytes: formatBytes(maxBytes),
  };
}

function formatBytes(bytes: number) {
  return `${(bytes / oneMiB).toFixed(2)} MiB`;
}

function firstLine(value: string) {
  return value.trim().split(/\r?\n/)[0]?.trim() ?? "";
}

function isMissingPath(error: unknown) {
  return typeof error === "object"
    && error !== null
    && "code" in error
    && (error as { code?: string }).code === "ENOENT";
}
