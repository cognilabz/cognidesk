import type { IntegrationProviderReference } from "../types.js";

export const socialProviderReferences = [
  {
    "id": "social.instagram",
    "category": "social",
    "provider": "instagram",
    "importPath": "@cognidesk/integrations/social/instagram",
    "modulePath": "./social/instagram/index.js",
    "manifestExport": "instagramSocialProviderManifest"
  },
  {
    "id": "social.messenger",
    "category": "social",
    "provider": "messenger",
    "importPath": "@cognidesk/integrations/social/messenger",
    "modulePath": "./social/messenger/index.js",
    "manifestExport": "messengerSocialProviderManifest"
  },
  {
    "id": "social.tiktok",
    "category": "social",
    "provider": "tiktok",
    "importPath": "@cognidesk/integrations/social/tiktok",
    "modulePath": "./social/tiktok/index.js",
    "manifestExport": "tiktokSocialProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
