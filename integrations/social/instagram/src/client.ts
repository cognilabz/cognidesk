import { FacebookAdsApi } from "facebook-nodejs-business-sdk";
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
    recipient: {
      id: requireNonEmptyInstagramString(
        input.recipientId,
        "Instagram recipient ID is required to build a text message.",
      ),
    },
    message: {
      text: requireNonEmptyInstagramString(
        input.text,
        "Instagram message text is required to build a text message.",
      ),
    },
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
  if (requiresInstagramRestTransport(options)) {
    return createInstagramGraphRestProviderClient(options, accessToken);
  }

  return createInstagramFacebookBusinessSdkProviderClient(options, accessToken);
}

export function createInstagramFacebookBusinessSdkProviderClient(
  options: InstagramSocialClientOptions,
  accessToken = requireConfiguredInstagramOption(options.pageAccessToken ?? options.accessToken, "accessToken"),
): InstagramMetaProviderClient {
  const api = FacebookAdsApi.init(accessToken, "en_US", false);
  const call = <T>(method: "GET" | "POST", path: readonly string[], params: Record<string, unknown> = {}) =>
    api.call(method, path, params) as Promise<T>;

  return {
    sendMessage(input) {
      const senderId = requireNonEmptyInstagramString(
        input.senderId ?? options.pageId,
        "Instagram Page ID is required to send messages.",
      );
      return call<InstagramMessageResponse>("POST", [senderId, "messages"], instagramMessageBody(input));
    },
    listConversations(input = {}) {
      const accountId = requireNonEmptyInstagramString(
        input.accountId ?? options.instagramBusinessAccountId,
        "Instagram business account ID is required to list conversations.",
      );
      return call<InstagramGraphCollection<InstagramConversationResource>>(
        "GET",
        [accountId, "conversations"],
        instagramListQuery(input, defaultConversationFields, { platform: "instagram" }),
      );
    },
    listConversationMessages(conversationId, input: InstagramListMessagesInput = {}) {
      const resolvedConversationId = requireNonEmptyInstagramString(
        conversationId,
        "Instagram conversation ID is required to list conversation messages.",
      );
      return call<InstagramGraphCollection<InstagramMessageResource>>(
        "GET",
        [resolvedConversationId, "messages"],
        instagramListQuery(input, defaultMessageFields),
      );
    },
    getMessage(messageId, fields = defaultMessageFields) {
      const resolvedMessageId = requireNonEmptyInstagramString(
        messageId,
        "Instagram message ID is required to read a message.",
      );
      return call<InstagramMessageResource>("GET", [resolvedMessageId], instagramFieldsQuery(fields));
    },
    getInstagramBusinessAccount(fields = defaultAccountFields) {
      const accountId = requireConfiguredInstagramOption(
        options.instagramBusinessAccountId,
        "instagramBusinessAccountId",
      );
      return call<InstagramAccountResource>("GET", [accountId], instagramFieldsQuery(fields));
    },
    getPage(fields = defaultPageFields) {
      const pageId = requireConfiguredInstagramOption(options.pageId, "pageId");
      return call<InstagramPageResource>("GET", [pageId], instagramFieldsQuery(fields));
    },
  };
}

export function createInstagramGraphRestProviderClient(
  options: InstagramSocialClientOptions,
  accessToken = requireConfiguredInstagramOption(options.pageAccessToken ?? options.accessToken, "accessToken"),
): InstagramMetaProviderClient {
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
      const senderId = requireNonEmptyInstagramString(
        input.senderId ?? options.pageId,
        "Instagram Page ID is required to send messages.",
      );
      return instagramRequest<InstagramMessageResponse>({
        url: instagramGraphUrl(graphApiBaseUrl, graphApiVersion, [senderId], "/messages"),
        method: "POST",
        options: graphOptions,
        fetch: fetchImpl,
        body: instagramMessageBody(input),
      });
    },
    listConversations(input = {}) {
      const accountId = requireNonEmptyInstagramString(
        input.accountId ?? options.instagramBusinessAccountId,
        "Instagram business account ID is required to list conversations.",
      );
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
      const resolvedConversationId = requireNonEmptyInstagramString(
        conversationId,
        "Instagram conversation ID is required to list conversation messages.",
      );
      const url = instagramGraphUrl(graphApiBaseUrl, graphApiVersion, [resolvedConversationId], "/messages");
      applyListQuery(url, input, defaultMessageFields);
      return instagramRequest<InstagramGraphCollection<InstagramMessageResource>>({
        url,
        method: "GET",
        options: graphOptions,
        fetch: fetchImpl,
      });
    },
    getMessage(messageId, fields = defaultMessageFields) {
      const resolvedMessageId = requireNonEmptyInstagramString(
        messageId,
        "Instagram message ID is required to read a message.",
      );
      const url = instagramGraphUrl(graphApiBaseUrl, graphApiVersion, [resolvedMessageId]);
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

function requiresInstagramRestTransport(options: InstagramSocialClientOptions) {
  return Boolean(
    options.fetch ||
      options.signal ||
      options.timeoutMs !== undefined ||
      options.retry !== undefined ||
      options.baseUrl ||
      options.graphApiBaseUrl ||
      options.graphApiVersion,
  );
}

function instagramListQuery(
  input: {
    fields?: string[];
    limit?: number;
    after?: string;
    before?: string;
  },
  defaultFields: readonly string[],
  extra: Record<string, unknown> = {},
) {
  return stripUndefined({
    ...extra,
    ...instagramFieldsQuery(input.fields ?? defaultFields),
    limit: input.limit,
    after: input.after,
    before: input.before,
  });
}

function instagramFieldsQuery(fields: readonly string[]) {
  return fields.length ? { fields: fields.join(",") } : {};
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
  if (!isInstagramSocialJsonObject(input.message)) {
    throw new Error("Instagram message payload is required to send messages.");
  }
  const recipientId = requireNonEmptyInstagramString(
    input.recipient?.id,
    "Instagram recipient ID is required to send messages.",
  );
  return stripUndefined({
    ...(input.additionalFields ?? {}),
    recipient: {
      ...input.recipient,
      id: recipientId,
    },
    message: input.message,
    ...(input.messagingType ? { messaging_type: input.messagingType } : {}),
    ...(input.tag ? { tag: input.tag } : {}),
  });
}

function requireConfiguredInstagramOption(value: string | undefined, name: string) {
  return requireNonEmptyInstagramString(
    value,
    `Instagram built-in Graph API adapter requires ${name}; pass ${name} or providerClient.`,
  );
}

function requireNonEmptyInstagramString(value: string | undefined, message: string) {
  if (typeof value !== "string" || value.trim() === "") throw new Error(message);
  return value;
}

function isInstagramSocialJsonObject(value: unknown): value is InstagramSocialJsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
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
