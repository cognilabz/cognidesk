import type { IntegrationProviderReference } from "../types.js";

export const marketplaceProviderReferences = [
  {
    "id": "marketplace.amazon",
    "category": "marketplace",
    "provider": "amazon",
    "importPath": "@cognidesk/marketplace-amazon/manifest",
    "modulePath": "integrations/marketplace/amazon/src/manifest.js",
    "manifestExport": "amazonMarketplaceProviderManifest"
  },
  {
    "id": "marketplace.ebay",
    "category": "marketplace",
    "provider": "ebay",
    "importPath": "@cognidesk/marketplace-ebay/manifest",
    "modulePath": "integrations/marketplace/ebay/src/manifest.js",
    "manifestExport": "ebayMarketplaceProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
