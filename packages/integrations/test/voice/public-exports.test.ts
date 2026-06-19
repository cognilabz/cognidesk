import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { voiceProviderReferences } from "../../src/provider-catalog/categories/voice.js";

describe("voice public exports", () => {
  it("imports every catalogued voice provider subpath", async () => {
    for (const reference of voiceProviderReferences) {
      const providerModule = await import(reference.importPath);

      expect(providerModule).toHaveProperty(reference.manifestExport);
    }
  });

  it("declares packages used by public voice entrypoints as runtime dependencies", async () => {
    const packageJsonPath = join(dirname(fileURLToPath(import.meta.url)), "../../package.json");
    const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8")) as {
      dependencies?: Record<string, string>;
      devDependencies?: Record<string, string>;
    };

    expect(packageJson.dependencies).toMatchObject({
      "@cognidesk/voice-websocket": "workspace:*",
      openai: "^6.42.0",
    });
    expect(packageJson.devDependencies).not.toHaveProperty("@cognidesk/voice-websocket");
    expect(packageJson.devDependencies).not.toHaveProperty("openai");
  });
});
