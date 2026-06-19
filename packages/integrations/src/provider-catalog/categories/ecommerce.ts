import type { IntegrationProviderReference } from "../types.js";

export const ecommerceProviderReferences = [
  {
    "id": "ecommerce.shopify",
    "category": "ecommerce",
    "provider": "shopify",
    "importPath": "@cognidesk/integrations/ecommerce/shopify",
    "modulePath": "./ecommerce/shopify/index.js",
    "manifestExport": "shopifyEcommerceProviderManifest"
  },
  {
    "id": "ecommerce.stripe",
    "category": "ecommerce",
    "provider": "stripe",
    "importPath": "@cognidesk/integrations/ecommerce/stripe",
    "modulePath": "./ecommerce/stripe/index.js",
    "manifestExport": "stripeEcommerceProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
