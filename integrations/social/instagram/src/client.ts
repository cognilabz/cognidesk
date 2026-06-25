import type {
  InstagramAccountResource,
  InstagramConversationResource,
  InstagramGraphCollection,
  InstagramListConversationsInput,
  InstagramListMessagesInput,
  InstagramMetaProviderClient,
  InstagramMessageInput,
  InstagramMessageResponse,
  InstagramMessageResource,
  InstagramPageResource,
  InstagramSocialJsonObject,
  InstagramSocialClient,
  InstagramSocialClientOptions,
} from "./contracts.js";
import {
  applyListQuery,
  instagramGraphUrl,
  instagramRequest,
} from "./request.js";

export function createInstagramSocialClient(options: InstagramSocialClientOptions = {}): InstagramSocialClient {
  const providerClient = requireInstagramMetaProviderClient(
    options.providerClient ?? createInstagramGraphProviderClient(options),
  );

  const client: InstagramSocialClient = {
    providerClient,
    async sendMessage(input) {
      return providerClient.sendMessage(withConfiguredSender(input, options.pageId));
    },
    async sendTextMessage(input) {
      return client.sendMessage(createInstagramTextMessage({
        recipientId: input.recipientId,
        text: input.text,
        ...(input.messagingType ? { messagingType: input.messagingType } : {}),
        ...(input.senderId ?? options.pageId ? { senderId: input.senderId ?? options.pageId } : {}),
        ...(input.tag ? { tag: input.tag } : {}),
      }));
    },
    async listConversations(input = {}) {
      return providerClient.listConversations(withConfiguredAccount(input, options.instagramBusinessAccountId));
    },
    async listConversationMessages(conversationId, input: InstagramListMessagesInput = {}) {
      return providerClient.listConversationMessages(conversationId, input);
    },
    async getMessage(messageId, fields) {
      return providerClient.getMessage(messageId, fields);
    },
    async getInstagramBusinessAccount(fields) {
      return providerClient.getInstagramBusinessAccount(fields);
    },
    async getPage(fields) {
      return providerClient.getPage(fields);
    },
  };

  return client;
}

export function createInstagramTextMessage(input: {
  recipientId: string;
  text: string;
  messagingType?: InstagramMessageInput["messagingType"];
  senderId?: string;
  tag?: string;
}): InstagramMessageInput {
  return stripUndefined({
    recipient: { id: input.recipientId },
    message: { text: input.text },
    messagingType: input.messagingType,
    senderId: input.senderId,
    tag: input.tag,
  }) as unknown as InstagramMessageInput;
}

function requireInstagramMetaProviderClient(client: InstagramMetaProviderClient) {
  for (const method of requiredProviderClientMethods) {
    if (typeof client[method] !== "function") {
      throw new Error(`Instagram/Meta provider client must implement ${method}().`);
    }
  }
  return client;
}

export function createInstagramGraphProviderClient(options: InstagramSocialClientOptions): InstagramMetaProviderClient {
  const accessToken = requireConfiguredInstagramOption(
    options.pageAccessToken ?? options.accessToken,
    "accessToken",
  );
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
      const senderId = input.senderId ?? options.pageId;
      if (!senderId) throw new Error("Instagram Page ID is required to send messages.");
      return instagramRequest<InstagramMessageResponse>({
        url: instagramGraphUrl(graphApiBaseUrl, graphApiVersion, [senderId], "/messages"),
        method: "POST",
        options: graphOptions,
        fetch: fetchImpl,
        body: instagramMessageBody(input),
      });
    },
    listConversations(input = {}) {
      const accountId = input.accountId ?? options.instagramBusinessAccountId;
      if (!accountId) throw new Error("Instagram business account ID is required to list conversations.");
      const url = instagramGraphUrl(graphApiBaseUrl, graphApiVersion, [accountId], "/conversations");
      url.searchParams.set("platform", "instagram");
      applyListQuery(url, input, defaultConversationFields);
      return instagramRequest<InstagramGraphCollection<InstagramConversationResource>>({
        url,
        method: "GET",
        options: graphOptions,
        fetch: fetchImpl,
      });
    },
    listConversationMessages(conversationId, input: InstagramListMessagesInput = {}) {
      const url = instagramGraphUrl(graphApiBaseUrl, graphApiVersion, [conversationId], "/messages");
      applyListQuery(url, input, defaultMessageFields);
      return instagramRequest<InstagramGraphCollection<InstagramMessageResource>>({
        url,
        method: "GET",
        options: graphOptions,
        fetch: fetchImpl,
      });
    },
    getMessage(messageId, fields = defaultMessageFields) {
      const url = instagramGraphUrl(graphApiBaseUrl, graphApiVersion, [messageId]);
      if (fields.length) url.searchParams.set("fields", fields.join(","));
      return instagramRequest<InstagramMessageResource>({
        url,
        method: "GET",
        options: graphOptions,
        fetch: fetchImpl,
      });
    },
    getInstagramBusinessAccount(fields = defaultAccountFields) {
      const accountId = requireConfiguredInstagramOption(
        options.instagramBusinessAccountId,
        "instagramBusinessAccountId",
      );
      const url = instagramGraphUrl(graphApiBaseUrl, graphApiVersion, [accountId]);
      if (fields.length) url.searchParams.set("fields", fields.join(","));
      return instagramRequest<InstagramAccountResource>({
        url,
        method: "GET",
        options: graphOptions,
        fetch: fetchImpl,
      });
    },
    getPage(fields = defaultPageFields) {
      const pageId = requireConfiguredInstagramOption(options.pageId, "pageId");
      const url = instagramGraphUrl(graphApiBaseUrl, graphApiVersion, [pageId]);
      if (fields.length) url.searchParams.set("fields", fields.join(","));
      return instagramRequest<InstagramPageResource>({
        url,
        method: "GET",
        options: graphOptions,
        fetch: fetchImpl,
      });
    },
  };
}

function withConfiguredSender(input: InstagramMessageInput, pageId: string | undefined): InstagramMessageInput {
  const senderId = input.senderId ?? pageId;
  if (!senderId || input.senderId === senderId) return input;
  return { ...input, senderId };
}

function withConfiguredAccount(
  input: InstagramListConversationsInput,
  instagramBusinessAccountId: string | undefined,
): InstagramListConversationsInput {
  const accountId = input.accountId ?? instagramBusinessAccountId;
  if (!accountId || input.accountId === accountId) return input;
  return { ...input, accountId };
}

export function stripUndefined<T extends InstagramSocialJsonObject>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined)) as T;
}

function instagramMessageBody(input: InstagramMessageInput) {
  return stripUndefined({
    recipient: input.recipient,
    message: input.message,
    messaging_type: input.messagingType,
    tag: input.tag,
    ...(input.additionalFields ?? {}),
  });
}

function requireConfiguredInstagramOption(value: string | undefined, name: string) {
  if (!value) {
    throw new Error(`Instagram built-in Graph API adapter requires ${name}; pass ${name} or providerClient.`);
  }
  return value;
}

const requiredProviderClientMethods = [
  "sendMessage",
  "listConversations",
  "listConversationMessages",
  "getMessage",
  "getInstagramBusinessAccount",
  "getPage",
] as const;

const defaultConversationFields = [
  "id",
  "updated_time",
  "participants",
  "messages.limit(10){id,created_time,from,to,message,attachments}",
];

const defaultMessageFields = [
  "id",
  "created_time",
  "from",
  "to",
  "message",
  "attachments",
];

const defaultAccountFields = [
  "id",
  "username",
  "name",
  "profile_picture_url",
  "followers_count",
  "follows_count",
  "media_count",
];

const defaultPageFields = [
  "id",
  "name",
  "instagram_business_account",
];
