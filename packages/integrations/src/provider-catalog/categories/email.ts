import type { IntegrationProviderReference } from "../types.js";

export const emailProviderReferences = [
  {
    "id": "email.gmail",
    "category": "email",
    "provider": "gmail",
    "importPath": "@cognidesk/integrations/email/gmail",
    "modulePath": "./email/gmail/index.js",
    "manifestExport": "gmailEmailProviderManifest"
  },
  {
    "id": "email.outlook",
    "category": "email",
    "provider": "outlook",
    "importPath": "@cognidesk/integrations/email/outlook",
    "modulePath": "./email/outlook/index.js",
    "manifestExport": "outlookEmailProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
