import { describe, expect, it } from "vitest";
import { cobrowsingProviderReferences } from "../src/provider-catalog/categories/cobrowsing.js";
import { communityProviderReferences } from "../src/provider-catalog/categories/community.js";
import { contactCenterProviderReferences } from "../src/provider-catalog/categories/contact-center.js";
import { ecommerceProviderReferences } from "../src/provider-catalog/categories/ecommerce.js";
import { emailProviderReferences } from "../src/provider-catalog/categories/email.js";
import { formProviderReferences } from "../src/provider-catalog/categories/form.js";
import { helpCenterProviderReferences } from "../src/provider-catalog/categories/help-center.js";
import { marketplaceProviderReferences } from "../src/provider-catalog/categories/marketplace.js";
import { messagingProviderReferences } from "../src/provider-catalog/categories/messaging.js";
import { reviewProviderReferences } from "../src/provider-catalog/categories/review.js";
import { smsProviderReferences } from "../src/provider-catalog/categories/sms.js";
import { socialProviderReferences } from "../src/provider-catalog/categories/social.js";
import { ticketingProviderReferences } from "../src/provider-catalog/categories/ticketing.js";
import { videoProviderReferences } from "../src/provider-catalog/categories/video.js";
import { workplaceProviderReferences } from "../src/provider-catalog/categories/workplace.js";

const publicProviderCatalogs = [
  {
    categoryName: "cobrowsing",
    references: cobrowsingProviderReferences,
  },
  {
    categoryName: "community",
    references: communityProviderReferences,
  },
  {
    categoryName: "contact-center",
    references: contactCenterProviderReferences,
  },
  {
    categoryName: "ecommerce",
    references: ecommerceProviderReferences,
  },
  {
    categoryName: "email",
    references: emailProviderReferences,
  },
  {
    categoryName: "form",
    references: formProviderReferences,
  },
  {
    categoryName: "help-center",
    references: helpCenterProviderReferences,
  },
  {
    categoryName: "marketplace",
    references: marketplaceProviderReferences,
  },
  {
    categoryName: "messaging",
    references: messagingProviderReferences,
  },
  {
    categoryName: "review",
    references: reviewProviderReferences,
  },
  {
    categoryName: "sms",
    references: smsProviderReferences,
  },
  {
    categoryName: "social",
    references: socialProviderReferences,
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
  it("imports every legacy catalogued provider subpath", async () => {
    for (const reference of references) {
      if (!reference.importPath.startsWith("@cognidesk/integrations/")) continue;

      const providerModule = await import(reference.importPath);

      expect(providerModule).toHaveProperty(reference.manifestExport);
    }
  });
});

describe("marketplace public references", () => {
  it("publishes migrated split-package manifest imports", () => {
    expect(marketplaceProviderReferences).toEqual([
      expect.objectContaining({
        id: "marketplace.amazon",
        importPath: "@cognidesk/marketplace-amazon/manifest",
        modulePath: "integrations/marketplace/amazon/src/manifest.js",
        manifestExport: "amazonMarketplaceProviderManifest",
      }),
      expect.objectContaining({
        id: "marketplace.ebay",
        importPath: "@cognidesk/marketplace-ebay/manifest",
        modulePath: "integrations/marketplace/ebay/src/manifest.js",
        manifestExport: "ebayMarketplaceProviderManifest",
      }),
    ]);
    expect(marketplaceProviderReferences.map((reference) => reference.importPath)).not.toContain(
      "@cognidesk/integrations/marketplace/amazon",
    );
    expect(marketplaceProviderReferences.map((reference) => reference.importPath)).not.toContain(
      "@cognidesk/integrations/marketplace/ebay",
    );
  });
});
