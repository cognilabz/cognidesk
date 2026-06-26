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

export function createWhatsAppMessagingOperationHandlers(options: WhatsAppMessagingIntegrationOptions) {
  type WebhookSignatureInput = Omit<ValidateWhatsAppWebhookSignatureInput, "appSecret">;
  const client = options.client ?? createWhatsAppMessagingClient(options);
  return {
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
    "whatsapp.webhook-signature": async (input: unknown) => {
      const request = input as WebhookSignatureInput;
      return validateWhatsAppWebhookSignature({
        appSecret: options.appSecret,
        rawBody: request.rawBody,
        signature: request.signature,
      });
    },
  } as const;
}

export function defineWhatsAppMessagingIntegration(options: WhatsAppMessagingIntegrationOptions) {
  return defineIntegration({
    manifest: whatsappMessagingProviderManifest,
    credentials: { appSecret: options.appSecret },
    operations: createWhatsAppMessagingOperationHandlers(options),
    metadata: {
      implementationStrategy: options.providerClient ? "provider-client-override" : "provider-rest-adapter",
      providerClient: "WhatsAppMessagingProviderClient",
      defaultClientPolicy: "provider-rest-adapter-when-configured",
    },
  });
}

export const createWhatsAppIntegrationOperationHandlers = createWhatsAppMessagingOperationHandlers;
