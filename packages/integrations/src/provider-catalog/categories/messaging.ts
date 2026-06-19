import type { IntegrationProviderReference } from "../types.js";

export const messagingProviderReferences = [
  {
    "id": "messaging.rcs",
    "category": "messaging",
    "provider": "rcs",
    "importPath": "@cognidesk/integrations/messaging/rcs",
    "modulePath": "./messaging/rcs/index.js",
    "manifestExport": "rcsMessagingProviderManifest"
  },
  {
    "id": "messaging.whatsapp",
    "category": "messaging",
    "provider": "whatsapp",
    "importPath": "@cognidesk/integrations/messaging/whatsapp",
    "modulePath": "./messaging/whatsapp/index.js",
    "manifestExport": "whatsappMessagingProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
