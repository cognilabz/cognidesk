import { defineIntegration } from "@cognidesk/integration-kit";
import {
  createInstagramSocialClient,
  createInstagramTextMessage,
} from "./client.js";
import type {
  InstagramSocialClient,
  InstagramSocialClientOptions,
  ValidateInstagramWebhookSignatureInput,
} from "./contracts.js";
import { instagramSocialProviderManifest } from "./manifest.js";
import {
  parseInstagramWebhook,
  validateInstagramWebhookSignature,
} from "./webhooks.js";

export interface InstagramSocialIntegrationOptions extends InstagramSocialClientOptions {
  appSecret: string;
  client?: InstagramSocialClient;
}

export function defineInstagramSocialIntegration(options: InstagramSocialIntegrationOptions) {
  type WebhookSignatureInput = Omit<ValidateInstagramWebhookSignatureInput, "appSecret">;
  const client = options.client ?? createInstagramSocialClient(options);
  return defineIntegration({
    manifest: instagramSocialProviderManifest,
    credentials: options,
    operations: {
      "instagram.webhook.parse": async (input: unknown) => parseInstagramWebhook(input as Request, {
        appSecret: options.appSecret,
      }),
      "instagram.message.send": async (input: unknown) =>
        client.sendMessage(input as Parameters<InstagramSocialClient["sendMessage"]>[0]),
      "instagram.draft.create": async (input: unknown) =>
        createInstagramTextMessage(input as Parameters<typeof createInstagramTextMessage>[0]),
      "instagram.conversations.list": async (input: unknown) =>
        client.listConversations(input as Parameters<InstagramSocialClient["listConversations"]>[0]),
      "instagram.conversationMessages.list": async (input: unknown) => {
        const request = input as {
        conversationId: string;
        fields?: string[];
        limit?: number;
        after?: string;
        before?: string;
        };
        return client.listConversationMessages(request.conversationId, request);
      },
      "instagram.message.read": async (input: unknown) => {
        const request = input as { messageId: string; fields?: string[] };
        return client.getMessage(request.messageId, request.fields);
      },
      "instagram.account.read": async (input: unknown) => client.getInstagramBusinessAccount(input as string[] | undefined),
      "instagram.page.read": async (input: unknown) => client.getPage(input as string[] | undefined),
      "instagram.webhook-signature": async (input: unknown) => {
        const request = input as WebhookSignatureInput;
        return validateInstagramWebhookSignature({
          appSecret: options.appSecret,
          rawBody: request.rawBody,
          signature: request.signature,
        });
      },
    },
    metadata: {
      implementationStrategy: options.providerClient ? "provider-client-override" : "facebook-nodejs-business-sdk",
      providerClient: {
        interface: "InstagramMetaProviderClient",
        defaultClientPolicy: "facebook-nodejs-business-sdk-when-configured",
      },
    },
  });
}
