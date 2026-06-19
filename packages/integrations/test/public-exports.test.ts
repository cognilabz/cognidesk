import { describe, expect, it } from "vitest";
import { contactCenterProviderReferences } from "../src/provider-catalog/categories/contact-center.js";
import { videoProviderReferences } from "../src/provider-catalog/categories/video.js";

const publicProviderCatalogs = [
  {
    categoryName: "contact-center",
    references: contactCenterProviderReferences,
  },
  {
    categoryName: "video",
    references: videoProviderReferences,
  },
] as const;

describe.each(publicProviderCatalogs)("$categoryName public exports", ({ references }) => {
  it("imports every catalogued provider subpath", async () => {
    for (const reference of references) {
      const providerModule = await import(reference.importPath);

      expect(providerModule).toHaveProperty(reference.manifestExport);
    }
  });
});
