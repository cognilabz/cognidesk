import { defineIntegration } from "@cognidesk/integration-kit";
import { createWhatsAppMessagingClient } from "./client/index.js";
import { buildWhatsAppMessageBody } from "./client/payload.js";
import type {
  ValidateWhatsAppWebhookSignatureInput,
  WhatsAppMessagingClient,
  WhatsAppMessagingClientOptions,
} from "./contracts.js";
import { whatsappMessagingProviderManifest } from "./manifest.js";
import {
  parseWhatsAppWebhook,
  validateWhatsAppWebhookSignature,
} from "./webhooks.js";

export interface WhatsAppMessagingIntegrationOptions extends WhatsAppMessagingClientOptions {
  appSecret: string;
  client?: WhatsAppMessagingClient;
}

export function defineWhatsAppMessagingIntegration(options: WhatsAppMessagingIntegrationOptions) {
  const client = options.client ?? createWhatsAppMessagingClient(options);
  return defineIntegration({
    manifest: whatsappMessagingProviderManifest,
    credentials: options,
    operations: {
      "messaging.message.receive": async (input: unknown) => parseWhatsAppWebhook(input as Request, {
        appSecret: options.appSecret,
      }),
      "messaging.message.send": async (input: unknown) => client.sendMessage(input as Parameters<WhatsAppMessagingClient["sendMessage"]>[0]),
      "messaging.template.send": async (input: unknown) => client.sendMessage(input as Parameters<WhatsAppMessagingClient["sendMessage"]>[0]),
      "messaging.draft.create": async (input: unknown) => buildWhatsAppMessageBody(input as Parameters<WhatsAppMessagingClient["sendMessage"]>[0]),
      "messaging.media.send": async (input: unknown) => client.uploadMedia(input as Parameters<WhatsAppMessagingClient["uploadMedia"]>[0]),
      "whatsapp.phoneNumber.read": async (input: unknown) => client.getPhoneNumber(input as string[] | undefined),
      "whatsapp.businessProfile.read": async (input: unknown) => client.getBusinessProfile(input as string[] | undefined),
      "whatsapp.businessProfile.update": async (input: unknown) =>
        client.updateBusinessProfile(input as Parameters<WhatsAppMessagingClient["updateBusinessProfile"]>[0]),
      "whatsapp.webhook-signature": async (input: unknown) =>
        validateWhatsAppWebhookSignature(input as ValidateWhatsAppWebhookSignatureInput),
    },
    metadata: {
      implementationStrategy: "direct-graph-support-slice",
      rawClientAccess: "createWhatsAppMessagingClient",
    },
  });
}
