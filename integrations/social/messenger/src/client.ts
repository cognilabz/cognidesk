import type {
  MessengerApiResponse,
  MessengerAttachmentType,
  MessengerConversationResponse,
  MessengerConversationSearchInput,
  MessengerHandoverInput,
  MessengerSendMessageInput,
  MessengerSocialClient,
  MessengerSocialClientOptions,
  MessengerSocialJsonObject,
  MessengerSocialProviderPayload,
} from "./contracts.js";
import {
  applyConversationQuery,
  messengerRequest,
} from "./request.js";

export function createMessengerSocialClient(options: MessengerSocialClientOptions): MessengerSocialClient {
  const graphApiBaseUrl = (options.graphApiBaseUrl ?? "https://graph.facebook.com").replace(/\/+$/, "");
  const graphApiVersion = options.graphApiVersion ?? "v25.0";
  const fetchImpl = options.fetch ?? fetch;

  return {
    async sendMessage(input) {
      return messengerRequest<MessengerApiResponse>({
        url: `${graphApiBaseUrl}/${graphApiVersion}/${encodeURIComponent(options.pageId)}/messages`,
        method: "POST",
        token: options.pageAccessToken,
        fetch: fetchImpl,
        body: normalizeMessageInput(input),
      });
    },
    async sendText(input) {
      return this.sendMessage(createMessengerTextMessage(input));
    },
    async sendSenderAction(input) {
      return this.sendMessage({
        recipient: { id: input.recipientId },
        senderAction: input.action,
      });
    },
    async uploadAttachment(input) {
      return messengerRequest<MessengerApiResponse>({
        url: `${graphApiBaseUrl}/${graphApiVersion}/${encodeURIComponent(options.pageId)}/message_attachments`,
        method: "POST",
        token: options.pageAccessToken,
        fetch: fetchImpl,
        body: {
          message: {
            attachment: {
              type: input.type,
              payload: {
                is_reusable: input.isReusable ?? true,
                url: input.url,
              },
            },
          },
        },
      });
    },
    async passThreadControl(input) {
      return messengerRequest<MessengerApiResponse>({
        url: `${graphApiBaseUrl}/${graphApiVersion}/${encodeURIComponent(options.pageId)}/pass_thread_control`,
        method: "POST",
        token: options.pageAccessToken,
        fetch: fetchImpl,
        body: handoverBody(input),
      });
    },
    async takeThreadControl(input) {
      return messengerRequest<MessengerApiResponse>({
        url: `${graphApiBaseUrl}/${graphApiVersion}/${encodeURIComponent(options.pageId)}/take_thread_control`,
        method: "POST",
        token: options.pageAccessToken,
        fetch: fetchImpl,
        body: handoverBody(input),
      });
    },
    async requestThreadControl(input) {
      return messengerRequest<MessengerApiResponse>({
        url: `${graphApiBaseUrl}/${graphApiVersion}/${encodeURIComponent(options.pageId)}/request_thread_control`,
        method: "POST",
        token: options.pageAccessToken,
        fetch: fetchImpl,
        body: handoverBody(input),
      });
    },
    async listConversations(input = {}) {
      const url = new URL(`${graphApiBaseUrl}/${graphApiVersion}/${encodeURIComponent(options.pageId)}/conversations`);
      applyConversationQuery(url, input);
      return messengerRequest<MessengerConversationResponse>({
        url: url.toString(),
        method: "GET",
        token: options.pageAccessToken,
        fetch: fetchImpl,
      });
    },
    async getConversationMessages(conversationId, input = {}) {
      const url = new URL(`${graphApiBaseUrl}/${graphApiVersion}/${encodeURIComponent(conversationId)}/messages`);
      applyConversationQuery(url, input);
      return messengerRequest<MessengerConversationResponse>({
        url: url.toString(),
        method: "GET",
        token: options.pageAccessToken,
        fetch: fetchImpl,
      });
    },
    async getPage() {
      const url = new URL(`${graphApiBaseUrl}/${graphApiVersion}/${encodeURIComponent(options.pageId)}`);
      url.searchParams.set("fields", "id,name,category,link");
      return messengerRequest<MessengerSocialJsonObject>({
        url: url.toString(),
        method: "GET",
        token: options.pageAccessToken,
        fetch: fetchImpl,
      });
    },
  };
}

export function createMessengerTextMessage(input: {
  recipientId: string;
  text: string;
  messagingType?: MessengerSendMessageInput["messagingType"];
  tag?: string;
}): MessengerSendMessageInput {
  return {
    recipient: { id: input.recipientId },
    messagingType: input.messagingType ?? "RESPONSE",
    ...(input.tag ? { tag: input.tag } : {}),
    message: { text: input.text },
  };
}

export function createMessengerAttachmentMessage(input: {
  recipientId: string;
  type: MessengerAttachmentType | "template";
  payload: MessengerSocialProviderPayload;
  messagingType?: MessengerSendMessageInput["messagingType"];
  tag?: string;
}): MessengerSendMessageInput {
  return {
    recipient: { id: input.recipientId },
    messagingType: input.messagingType ?? "RESPONSE",
    ...(input.tag ? { tag: input.tag } : {}),
    message: {
      attachment: {
        type: input.type,
        payload: input.payload,
      },
    },
  };
}

function normalizeMessageInput(input: MessengerSendMessageInput) {
  return {
    recipient: input.recipient,
    messaging_type: input.messagingType ?? "RESPONSE",
    ...(input.message ? { message: input.message } : {}),
    ...(input.senderAction ? { sender_action: input.senderAction } : {}),
    ...(input.tag ? { tag: input.tag } : {}),
    ...(input.notificationType ? { notification_type: input.notificationType } : {}),
    ...(input.additionalFields ?? {}),
  };
}

function handoverBody(input: MessengerHandoverInput) {
  return {
    recipient: { id: input.recipientId },
    ...(input.targetAppId ? { target_app_id: input.targetAppId } : {}),
    ...(input.metadata ? { metadata: input.metadata } : {}),
  };
}
