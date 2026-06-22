import type { IntegrationProviderReference } from "../types.js";

export const communityProviderReferences = [
  {
    "id": "community.forum",
    "category": "community",
    "provider": "forum",
    "importPath": "@cognidesk/integrations/community/forum",
    "modulePath": "./community/forum/index.js",
    "manifestExport": "forumCommunityProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
