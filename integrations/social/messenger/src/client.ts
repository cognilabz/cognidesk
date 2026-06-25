import type {
  MessengerAttachmentType,
  MessengerApiResponse,
  MessengerConversationResponse,
  MessengerConversationSearchInput,
  MessengerHandoverInput,
  MessengerProviderHandoverInput,
  MessengerProviderSendMessageInput,
  MessengerProviderUploadAttachmentInput,
  MessengerSendMessageInput,
  MessengerSocialClient,
  MessengerSocialClientOptions,
  MessengerSocialProviderClient,
  MessengerSocialProviderPayload,
  MessengerSocialProviderResponse,
} from "./contracts.js";
import {
  applyConversationQuery,
  messengerGraphUrl,
  messengerRequest,
} from "./request.js";

export function createMessengerSocialClient(options: MessengerSocialClientOptions = {}): MessengerSocialClient {
  const providerClient = requireMessengerSocialProviderClient(
    options.providerClient ?? createMessengerGraphProviderClient(options),
  );

  const client: MessengerSocialClient = {
    providerClient,
    async sendMessage(input) {
      return providerClient.sendMessage(normalizeMessageInput(input));
    },
    async sendText(input) {
      return client.sendMessage(createMessengerTextMessage(input));
    },
    async sendSenderAction(input) {
      return client.sendMessage({
        recipient: { id: input.recipientId },
        senderAction: input.action,
      });
    },
    async uploadAttachment(input) {
      return providerClient.uploadAttachment(normalizeAttachmentUploadInput(input));
    },
    async passThreadControl(input) {
      return providerClient.passThreadControl(handoverBody(input));
    },
    async takeThreadControl(input) {
      return providerClient.takeThreadControl(handoverBody(input));
    },
    async requestThreadControl(input) {
      return providerClient.requestThreadControl(handoverBody(input));
    },
    async listConversations(input = {}) {
      return providerClient.listConversations(normalizeConversationSearchInput(input));
    },
    async getConversationMessages(conversationId, input = {}) {
      return providerClient.getConversationMessages(conversationId, normalizeConversationSearchInput(input));
    },
    async getPage() {
      return providerClient.getPage();
    },
  };
  return client;
}

export function createMessengerGraphProviderClient(options: MessengerSocialClientOptions): MessengerSocialProviderClient {
  const accessToken = requireConfiguredMessengerOption(
    options.pageAccessToken ?? options.accessToken,
    "accessToken",
  );
  const pageId = requireConfiguredMessengerOption(options.pageId, "pageId");
  const graphApiBaseUrl = (options.graphApiBaseUrl ?? options.baseUrl ?? "https://graph.facebook.com").replace(/\/+$/, "");
  const graphApiVersion = options.graphApiVersion ?? "v25.0";
  const fetchImpl = options.fetch ?? fetch;
  const graphOptions = {
    accessToken,
    ...(options.signal ? { signal: options.signal } : {}),
    ...(options.timeoutMs !== undefined ? { timeoutMs: options.timeoutMs } : {}),
    ...(options.retry !== undefined ? { retry: options.retry } : {}),
  };

  return {
    sendMessage(input) {
      return messengerRequest<MessengerApiResponse>({
        url: messengerGraphUrl(graphApiBaseUrl, graphApiVersion, [pageId], "/messages"),
        method: "POST",
        options: graphOptions,
        fetch: fetchImpl,
        body: input,
      });
    },
    uploadAttachment(input) {
      return messengerRequest<MessengerApiResponse>({
        url: messengerGraphUrl(graphApiBaseUrl, graphApiVersion, [pageId], "/message_attachments"),
        method: "POST",
        options: graphOptions,
        fetch: fetchImpl,
        body: input,
      });
    },
    passThreadControl(input) {
      return messengerRequest<MessengerApiResponse>({
        url: messengerGraphUrl(graphApiBaseUrl, graphApiVersion, [pageId], "/pass_thread_control"),
        method: "POST",
        options: graphOptions,
        fetch: fetchImpl,
        body: input,
      });
    },
    takeThreadControl(input) {
      return messengerRequest<MessengerApiResponse>({
        url: messengerGraphUrl(graphApiBaseUrl, graphApiVersion, [pageId], "/take_thread_control"),
        method: "POST",
        options: graphOptions,
        fetch: fetchImpl,
        body: input,
      });
    },
    requestThreadControl(input) {
      return messengerRequest<MessengerApiResponse>({
        url: messengerGraphUrl(graphApiBaseUrl, graphApiVersion, [pageId], "/request_thread_control"),
        method: "POST",
        options: graphOptions,
        fetch: fetchImpl,
        body: input,
      });
    },
    listConversations(input = {}) {
      const url = messengerGraphUrl(graphApiBaseUrl, graphApiVersion, [pageId], "/conversations");
      applyConversationQuery(url, input);
      return messengerRequest<MessengerConversationResponse>({
        url,
        method: "GET",
        options: graphOptions,
        fetch: fetchImpl,
      });
    },
    getConversationMessages(conversationId, input = {}) {
      const url = messengerGraphUrl(graphApiBaseUrl, graphApiVersion, [conversationId], "/messages");
      applyConversationQuery(url, input);
      return messengerRequest<MessengerConversationResponse>({
        url,
        method: "GET",
        options: graphOptions,
        fetch: fetchImpl,
      });
    },
    getPage() {
      const url = messengerGraphUrl(graphApiBaseUrl, graphApiVersion, [pageId]);
      url.searchParams.set("fields", "id,name,category,link");
      return messengerRequest<MessengerSocialProviderResponse>({
        url,
        method: "GET",
        options: graphOptions,
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

function normalizeMessageInput(input: MessengerSendMessageInput): MessengerProviderSendMessageInput {
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

function normalizeAttachmentUploadInput(input: {
  type: MessengerAttachmentType;
  url: string;
  isReusable?: boolean;
}): MessengerProviderUploadAttachmentInput {
  return {
    message: {
      attachment: {
        type: input.type,
        payload: {
          is_reusable: input.isReusable ?? true,
          url: input.url,
        },
      },
    },
  };
}

function handoverBody(input: MessengerHandoverInput): MessengerProviderHandoverInput {
  return {
    recipient: { id: input.recipientId },
    ...(input.targetAppId ? { target_app_id: input.targetAppId } : {}),
    ...(input.metadata ? { metadata: input.metadata } : {}),
  };
}

function normalizeConversationSearchInput<T extends MessengerConversationSearchInput>(input: T): T {
  return {
    ...input,
    fields: input.fields?.length ? input.fields : defaultMessengerConversationFields,
  };
}

function requireMessengerSocialProviderClient(client: MessengerSocialProviderClient) {
  for (const method of requiredProviderClientMethods) {
    if (typeof client[method] !== "function") {
      throw new Error(`MessengerSocialProviderClient must implement ${method}().`);
    }
  }
  return client;
}

function requireConfiguredMessengerOption(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`Messenger built-in Graph API adapter requires ${name}; pass ${name} or providerClient.`);
  }
  return value;
}

const requiredProviderClientMethods = [
  "sendMessage",
  "uploadAttachment",
  "passThreadControl",
  "takeThreadControl",
  "requestThreadControl",
  "listConversations",
  "getConversationMessages",
  "getPage",
] as const;

const defaultMessengerConversationFields = [
  "id",
  "updated_time",
  "participants",
  "messages{message,from,to,created_time,attachments}",
];
