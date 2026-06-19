import type { IntegrationProviderReference } from "../types.js";

export const cobrowsingProviderReferences = [
  {
    "id": "cobrowsing.cognidesk",
    "category": "cobrowsing",
    "provider": "cognidesk",
    "importPath": "@cognidesk/integrations/cobrowsing/cognidesk",
    "modulePath": "./cobrowsing/cognidesk/index.js",
    "manifestExport": "cognideskCobrowsingProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
