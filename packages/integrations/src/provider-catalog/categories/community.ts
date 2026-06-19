import type { IntegrationProviderReference } from "../types.js";

export const communityProviderReferences = [
  {
    "id": "community.discord",
    "category": "community",
    "provider": "discord",
    "importPath": "@cognidesk/integrations/community/discord",
    "modulePath": "./community/discord/index.js",
    "manifestExport": "discordCommunityProviderManifest"
  },
  {
    "id": "community.forum",
    "category": "community",
    "provider": "forum",
    "importPath": "@cognidesk/integrations/community/forum",
    "modulePath": "./community/forum/index.js",
    "manifestExport": "forumCommunityProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
