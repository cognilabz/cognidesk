import type { IntegrationProviderReference } from "../types.js";

export const marketplaceProviderReferences = [
  {
    "id": "marketplace.amazon",
    "category": "marketplace",
    "provider": "amazon",
    "importPath": "@cognidesk/integrations/marketplace/amazon",
    "modulePath": "./marketplace/amazon/index.js",
    "manifestExport": "amazonMarketplaceProviderManifest"
  },
  {
    "id": "marketplace.ebay",
    "category": "marketplace",
    "provider": "ebay",
    "importPath": "@cognidesk/integrations/marketplace/ebay",
    "modulePath": "./marketplace/ebay/index.js",
    "manifestExport": "ebayMarketplaceProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
