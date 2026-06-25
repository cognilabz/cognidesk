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
  const client = options.client ?? createMessengerSocialClient(options);
  return defineIntegration({
    manifest: messengerSocialProviderManifest,
    credentials: options,
    operations: {
      "messenger.webhook.parse": async (input: unknown) => parseMessengerWebhook(input as Request, {
        appSecret: options.appSecret,
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
        const request = input as {
        conversationId: string;
        fields?: string[];
        limit?: number;
        after?: string;
        };
        return client.getConversationMessages(request.conversationId, request);
      },
      "messenger.page.read": async () => client.getPage(),
      "messenger.webhook-signature": async (input: unknown) => {
        const request = input as WebhookSignatureInput;
        return validateMessengerWebhookSignature({
          appSecret: options.appSecret,
          rawBody: request.rawBody,
          signature: request.signature,
        });
      },
    },
    metadata: {
      implementationStrategy: options.providerClient ? "provider-client-override" : "provider-rest-adapter",
      providerClientAccess: "createMessengerSocialClient({ providerClient })",
      defaultClientPolicy: "provider-rest-adapter-when-configured",
    },
  });
}
