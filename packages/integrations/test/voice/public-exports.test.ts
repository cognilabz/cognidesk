import { describe, expect, it } from "vitest";
import { voiceProviderReferences } from "../../src/provider-catalog/categories/voice.js";

describe("voice public exports", () => {
  it("imports every catalogued voice provider subpath", async () => {
    for (const reference of voiceProviderReferences) {
      const providerModule = await import(reference.importPath);

      expect(providerModule).toHaveProperty(reference.manifestExport);
    }
  });
});
