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

const splitMigratedProviderIds = new Set(["email.gmail", "email.outlook", "workplace.teams"]);

describe.each(publicProviderCatalogs)("$categoryName public exports", ({ references }) => {
  it("imports every catalogued provider subpath", async () => {
    for (const reference of references) {
      if (splitMigratedProviderIds.has(reference.id)) continue;
      if (!reference.importPath.startsWith("@cognidesk/integrations/")) continue;
      const providerModule = await importProviderModule(reference);

      expect(providerModule).toHaveProperty(reference.manifestExport);
    }
  });
});

function importProviderModule(reference: { importPath: string; modulePath: string }) {
  if (reference.importPath.startsWith("@cognidesk/integrations/")) {
    const distPath = reference.modulePath.replace(/^\.\//, "");
    return import(new URL(`../dist/${distPath}`, import.meta.url).href);
  }
  return import(reference.importPath);
}
