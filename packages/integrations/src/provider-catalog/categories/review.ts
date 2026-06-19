import type { IntegrationProviderReference } from "../types.js";

export const reviewProviderReferences = [
  {
    "id": "review.appstore",
    "category": "review",
    "provider": "appstore",
    "importPath": "@cognidesk/integrations/review/appstore",
    "modulePath": "./review/appstore/index.js",
    "manifestExport": "appStoreReviewsProviderManifest"
  },
  {
    "id": "review.googleplay",
    "category": "review",
    "provider": "googleplay",
    "importPath": "@cognidesk/integrations/review/googleplay",
    "modulePath": "./review/googleplay/index.js",
    "manifestExport": "googlePlayReviewsProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
