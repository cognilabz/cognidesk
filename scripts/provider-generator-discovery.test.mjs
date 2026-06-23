import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const scriptsDir = path.join(repoRoot, "scripts");
const migratedHelpdeskProviders = ["front", "gorgias", "kustomer", "zendesk"];
const staleFullCloneGenerators = new Set([
  "generate-zendesk-full-api.mjs",
]);

describe("provider generator discovery", () => {
  it("does not expose stale full-clone generators for migrated helpdesk providers", () => {
    const listedScripts = providerGeneratorList();

    for (const script of staleFullCloneGenerators) {
      assert.equal(listedScripts.includes(script), false, script);
    }
  });

  it("does not list generators that write deleted aggregate helpdesk source paths", () => {
    const failures = listedGeneratorSources()
      .filter(({ source }) => migratedHelpdeskProviders.some((provider) =>
        source.includes(`packages/integrations/src/ticketing/${provider}`)
      ))
      .map(({ script }) => script);

    assert.deepEqual(failures, []);
  });

  it("keeps migrated helpdesk coverage scripts from writing deleted aggregate paths", () => {
    const scripts = [
      "generate-ticketing-provider-coverage.mjs",
      "generate-zendesk-full-api.mjs",
    ];
    const failures = scripts
      .filter((script) => {
        const source = readFileSync(path.join(scriptsDir, script), "utf8");
        return migratedHelpdeskProviders.some((provider) =>
          source.includes(`packages/integrations/src/ticketing/${provider}`)
        );
      });

    assert.deepEqual(failures, []);
  });
});

function providerGeneratorList() {
  return execFileSync(process.execPath, [path.join(scriptsDir, "generate-provider-surfaces.mjs"), "--list"], {
    cwd: repoRoot,
    encoding: "utf8",
  })
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.endsWith(".mjs"));
}

function listedGeneratorSources() {
  return providerGeneratorList().map((script) => ({
    script,
    source: readFileSync(path.join(scriptsDir, script), "utf8"),
  }));
}
