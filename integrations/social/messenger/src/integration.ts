import { defineIntegration } from "@cognidesk/integration-kit";
import { createMessengerSocialClient } from "./client.js";
import type {
  MessengerSocialClient,
  MessengerSocialClientOptions,
} from "./contracts.js";
import { messengerSocialProviderManifest } from "./manifest.js";
import {
  parseMessengerWebhook,
  validateMessengerWebhookSignature,
} from "./webhooks.js";

export interface MessengerSocialIntegrationOptions extends MessengerSocialClientOptions {
  appSecret: string;
  verifyToken?: string | undefined;
  pageWebhookSubscribed?: boolean | undefined;
  scopes?: string[] | undefined;
  expiresAt?: string | undefined;
  client?: MessengerSocialClient | undefined;
}

export function defineMessengerSocialIntegration(options: MessengerSocialIntegrationOptions) {
  type WebhookSignatureInput = Omit<Parameters<typeof validateMessengerWebhookSignature>[0], "appSecret">;
  requireIntegrationObject(options, "Messenger integration options");
  const appSecret = requireIntegrationString(options.appSecret, "appSecret");
  const client = options.client ?? createMessengerSocialClient(options);
  return defineIntegration({
    manifest: messengerSocialProviderManifest,
    credentials: options,
    operations: {
      "messenger.webhook.parse": async (input: unknown) => parseMessengerWebhook(input as Request, {
        appSecret,
      }),
      "messenger.message.send": async (input: unknown) =>
        client.sendMessage(input as Parameters<MessengerSocialClient["sendMessage"]>[0]),
      "messenger.senderAction.send": async (input: unknown) =>
        client.sendSenderAction(input as Parameters<MessengerSocialClient["sendSenderAction"]>[0]),
      "messenger.attachment.upload": async (input: unknown) =>
        client.uploadAttachment(input as Parameters<MessengerSocialClient["uploadAttachment"]>[0]),
      "messenger.conversations.list": async (input: unknown) =>
        client.listConversations(input as Parameters<MessengerSocialClient["listConversations"]>[0]),
      "messenger.conversationMessages.list": async (input: unknown) => {
        const request = requireIntegrationObject(input, "Messenger conversationMessages.list input") as {
          conversationId?: unknown;
          fields?: string[];
          limit?: number;
          after?: string;
        };
        return client.getConversationMessages(requireIntegrationString(request.conversationId, "conversationId"), {
          ...(request.fields ? { fields: request.fields } : {}),
          ...(request.limit !== undefined ? { limit: request.limit } : {}),
          ...(request.after !== undefined ? { after: request.after } : {}),
        });
      },
      "messenger.page.read": async () => client.getPage(),
      "messenger.webhook-signature": async (input: unknown) => {
        const request = requireIntegrationObject(input, "Messenger webhook-signature input") as WebhookSignatureInput;
        return validateMessengerWebhookSignature({
          appSecret,
          rawBody: request.rawBody,
          signature: request.signature,
        });
      },
    },
    metadata: {
      implementationStrategy: options.providerClient ? "provider-client-override" : "facebook-nodejs-business-sdk",
      providerClientAccess: "createMessengerSocialClient({ providerClient })",
      defaultClientPolicy: "facebook-nodejs-business-sdk-when-configured",
    },
  });
}

function requireIntegrationObject(value: unknown, name: string): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(`${name} must be an object.`);
  }
  return value as Record<string, unknown>;
}

function requireIntegrationString(value: unknown, name: string) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Messenger integration ${name} must be a non-empty string.`);
  }
  return value;
}
