import type { IntegrationProviderReference } from "../types.js";

export const messagingProviderReferences = [
  {
    "id": "messaging.rcs",
    "category": "messaging",
    "provider": "rcs",
    "importPath": "@cognidesk/integrations/messaging/rcs",
    "modulePath": "./messaging/rcs/index.js",
    "manifestExport": "rcsMessagingProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
