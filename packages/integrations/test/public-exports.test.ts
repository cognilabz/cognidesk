import { describe, expect, it } from "vitest";
import { contactCenterProviderReferences } from "../src/provider-catalog/categories/contact-center.js";
import { emailProviderReferences } from "../src/provider-catalog/categories/email.js";
import { ticketingProviderReferences } from "../src/provider-catalog/categories/ticketing.js";
import { videoProviderReferences } from "../src/provider-catalog/categories/video.js";
import { workplaceProviderReferences } from "../src/provider-catalog/categories/workplace.js";

const publicProviderCatalogs = [
  {
    categoryName: "contact-center",
    references: contactCenterProviderReferences,
  },
  {
    categoryName: "email",
    references: emailProviderReferences,
  },
  {
    categoryName: "ticketing",
    references: ticketingProviderReferences,
  },
  {
    categoryName: "video",
    references: videoProviderReferences,
  },
  {
    categoryName: "workplace",
    references: workplaceProviderReferences,
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
