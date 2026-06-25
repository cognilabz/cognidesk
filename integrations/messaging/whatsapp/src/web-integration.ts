import { defineIntegration } from "@cognidesk/integration-kit";
import { createWhatsAppWebMessagingClient } from "./web-client.js";
import type {
  WhatsAppWebMessagingClient,
  WhatsAppWebMessagingClientOptions,
  WhatsAppWebSendTextInput,
} from "./web-contracts.js";
import { whatsappWebMessagingProviderManifest } from "./web-manifest.js";

export interface WhatsAppWebMessagingIntegrationOptions extends WhatsAppWebMessagingClientOptions {
  client?: WhatsAppWebMessagingClient;
}

export function createWhatsAppWebMessagingOperationHandlers(
  options: WhatsAppWebMessagingIntegrationOptions = {},
) {
  const client = options.client ?? createWhatsAppWebMessagingClient(options);
  return {
    "whatsapp-web.message.send": (input: WhatsAppWebSendTextInput) => client.sendText(input),
    "whatsapp-web.readiness.check": () => client.checkReadiness(),
  } as const;
}

export function defineWhatsAppWebMessagingIntegration(
  options: WhatsAppWebMessagingIntegrationOptions = {},
) {
  return defineIntegration({
    manifest: whatsappWebMessagingProviderManifest,
    operations: createWhatsAppWebMessagingOperationHandlers(options),
    metadata: {
      implementationStrategy: "linked-device-websocket",
      protocol: "whatsapp-web-linked-device",
      runtimeLibrary: "baileys",
    },
  });
}
