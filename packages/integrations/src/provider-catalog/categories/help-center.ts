import type { IntegrationProviderReference } from "../types.js";

export const helpCenterProviderReferences = [
  {
    "id": "helpcenter.cognidesk",
    "category": "helpCenter",
    "provider": "cognidesk",
    "importPath": "@cognidesk/integrations/help-center/cognidesk",
    "modulePath": "./help-center/cognidesk/index.js",
    "manifestExport": "cognideskHelpCenterProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
