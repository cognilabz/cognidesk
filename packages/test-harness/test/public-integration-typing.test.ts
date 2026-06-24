import { existsSync, readdirSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const repoRoot = path.resolve(fileURLToPath(new URL("../../..", import.meta.url)));
const integrationPackagePattern =
  /^(connections|model$|voice-websocket$)/;
const splitIntegrationsRoot = path.join(repoRoot, "integrations");

describe("public integration API typing", () => {
  it("does not expose anonymous unknown/Record provider contracts from hand-written package entrypoints", async () => {
    const { files } = await integrationIndexFiles();
    expect(files.length).toBeGreaterThan(0);

    const forbiddenPatterns: Array<[RegExp, string]> = [
      [/Promise\s*<\s*Record\s*<\s*string\s*,\s*unknown\s*>\s*>/g, "anonymous Record response promise"],
      [/Promise\s*<\s*unknown\s*>/g, "unknown response promise"],
      [/Record\s*<\s*string\s*,\s*unknown\s*>\s*&/g, "anonymous Record intersection"],
      [/\bbody\s*\?\s*:\s*unknown\b/g, "unknown request body"],
      [/\bunknown\s*\[\s*]/g, "unknown array"],
      [/Record\s*<\s*string\s*,\s*any\s*>/g, "any-valued Record"],
      [/\[[A-Za-z_$][A-Za-z0-9_$]*\s*:\s*string\s*]\s*:\s*unknown\b/g, "unknown index signature"],
      [/Record\s*<\s*string\s*,\s*unknown\s*>/g, "anonymous unknown-valued Record"],
    ];

    const failures: string[] = [];
    for (const file of files) {
      const source = stripCommentsAndStrings(await readFile(file, "utf8"));
      const relative = path.relative(repoRoot, file);
      for (const [pattern, label] of forbiddenPatterns) {
        pattern.lastIndex = 0;
        if (pattern.test(source)) failures.push(`${relative}: exposes ${label}`);
      }
    }

    expect(failures).toEqual([]);
  });
});

async function integrationIndexFiles() {
  const packagesDir = path.join(repoRoot, "packages");
  const entries = await readdir(packagesDir, { withFileTypes: true });
  const topLevelFiles = entries
    .filter((entry) => entry.isDirectory() && integrationPackagePattern.test(entry.name))
    .map((entry) => path.join(packagesDir, entry.name, "src", "index.ts"))
    .filter((file) => existsSync(file))
    .sort((a, b) => a.localeCompare(b));
  const integrationModuleFiles = existsSync(splitIntegrationsRoot)
    ? (await walk(splitIntegrationsRoot))
        .filter((file) => path.basename(file) === "index.ts")
        .filter((file) => file.includes(`${path.sep}src${path.sep}`))
        .filter(hasGeneratedClientSibling)
        .sort((a, b) => a.localeCompare(b))
    : [];
  return {
    files: [...topLevelFiles, ...integrationModuleFiles],
    includesSplitIntegrations: existsSync(splitIntegrationsRoot),
  };
}

function hasGeneratedClientSibling(indexFile: string) {
  const srcDir = path.dirname(indexFile);
  return readdirSync(srcDir).some((entry) => entry.endsWith("-client.generated.ts"));
}

async function walk(dir: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(file));
    } else {
      files.push(file);
    }
  }
  return files;
}

function stripCommentsAndStrings(source: string) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "")
    .replace(/`(?:\\.|[^`\\])*`/g, "``")
    .replace(/"(?:\\.|[^"\\])*"/g, "\"\"")
    .replace(/'(?:\\.|[^'\\])*'/g, "''");
}
