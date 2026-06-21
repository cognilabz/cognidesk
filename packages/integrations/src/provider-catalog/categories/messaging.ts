import type { IntegrationProviderReference } from "../types.js";

export const messagingProviderReferences = [
  {
    "id": "messaging.whatsapp",
    "category": "messaging",
    "provider": "whatsapp",
    "importPath": "@cognidesk/integrations/messaging/whatsapp",
    "modulePath": "./messaging/whatsapp/index.js",
    "manifestExport": "whatsappMessagingProviderManifest"
  }
] as const satisfies readonly IntegrationProviderReference[];
