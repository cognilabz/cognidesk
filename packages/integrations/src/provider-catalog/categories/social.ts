import type { IntegrationProviderReference } from "../types.js";

export const socialProviderReferences = [
  {
    "id": "social.tiktok",
    "category": "social",
    "provider": "tiktok",
    "importPath": "@cognidesk/integrations/social/tiktok",
    "modulePath": "./social/tiktok/index.js",
    "manifestExport": "tiktokSocialProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
