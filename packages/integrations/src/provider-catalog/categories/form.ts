import type { IntegrationProviderReference } from "../types.js";

export const formProviderReferences = [
  {
    "id": "form.cognidesk",
    "category": "form",
    "provider": "cognidesk",
    "importPath": "@cognidesk/integrations/form/cognidesk",
    "modulePath": "./form/cognidesk/index.js",
    "manifestExport": "cognideskFormsProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
