import { FacebookAdsApi } from "facebook-nodejs-business-sdk";
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
  normalizeMessengerGraphApiBaseUrl,
  normalizeMessengerGraphApiVersion,
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
      requirePlainObject(input, "Messenger senderAction input");
      return client.sendMessage({
        recipient: { id: requireNonEmptyString(input.recipientId, "recipientId") },
        senderAction: requireEnum(input.action, messengerSenderActions, "senderAction"),
      });
    },
    async uploadAttachment(input) {
      return providerClient.uploadAttachment(normalizeAttachmentUploadInput(input));
    },
    async passThreadControl(input) {
      return providerClient.passThreadControl(handoverBody(input, { requireTargetAppId: true }));
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
      return providerClient.getConversationMessages(
        requireNonEmptyString(conversationId, "conversationId"),
        normalizeConversationMessagesSearchInput(input),
      );
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
  if (requiresMessengerRestTransport(options)) {
    return createMessengerGraphRestProviderClient(options, accessToken, pageId);
  }

  return createMessengerFacebookBusinessSdkProviderClient(options, accessToken, pageId);
}

export function createMessengerFacebookBusinessSdkProviderClient(
  options: MessengerSocialClientOptions,
  accessToken = requireConfiguredMessengerOption(options.pageAccessToken ?? options.accessToken, "accessToken"),
  pageId = requireConfiguredMessengerOption(options.pageId, "pageId"),
): MessengerSocialProviderClient {
  const api = FacebookAdsApi.init(accessToken, "en_US", false);
  const call = <T>(method: "GET" | "POST", path: readonly string[], params: Record<string, unknown> = {}) =>
    api.call(method, path, params) as Promise<T>;

  return {
    sendMessage(input) {
      return call<MessengerApiResponse>("POST", [pageId, "messages"], input);
    },
    uploadAttachment(input) {
      return call<MessengerApiResponse>("POST", [pageId, "message_attachments"], input);
    },
    passThreadControl(input) {
      return call<MessengerApiResponse>("POST", [pageId, "pass_thread_control"], input);
    },
    takeThreadControl(input) {
      return call<MessengerApiResponse>("POST", [pageId, "take_thread_control"], input);
    },
    requestThreadControl(input) {
      return call<MessengerApiResponse>("POST", [pageId, "request_thread_control"], input);
    },
    listConversations(input = {}) {
      return call<MessengerConversationResponse>("GET", [pageId, "conversations"], messengerConversationSdkQuery(input));
    },
    getConversationMessages(conversationId, input = {}) {
      return call<MessengerConversationResponse>(
        "GET",
        [conversationId, "messages"],
        messengerConversationSdkQuery(input),
      );
    },
    getPage() {
      return call<MessengerSocialProviderResponse>("GET", [pageId], { fields: "id,name,category,link" });
    },
  };
}

export function createMessengerGraphRestProviderClient(
  options: MessengerSocialClientOptions,
  accessToken = requireConfiguredMessengerOption(options.pageAccessToken ?? options.accessToken, "accessToken"),
  pageId = requireConfiguredMessengerOption(options.pageId, "pageId"),
): MessengerSocialProviderClient {
  const graphApiBaseUrl = normalizeMessengerGraphApiBaseUrl(options.graphApiBaseUrl ?? options.baseUrl ?? "https://graph.facebook.com");
  const graphApiVersion = normalizeMessengerGraphApiVersion(options.graphApiVersion ?? "v25.0");
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

function requiresMessengerRestTransport(options: MessengerSocialClientOptions) {
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

function messengerConversationSdkQuery(input: MessengerConversationSearchInput) {
  return stripUndefinedRecord({
    fields: (input.fields?.length
      ? input.fields
      : ["id", "updated_time", "participants", "messages{message,from,to,created_time,attachments}"]).join(","),
    limit: input.limit,
    after: input.after,
    user_id: input.userId,
  });
}

export function createMessengerTextMessage(input: {
  recipientId: string;
  text: string;
  messagingType?: MessengerSendMessageInput["messagingType"];
  tag?: string;
}): MessengerSendMessageInput {
  requirePlainObject(input, "Messenger text message input");
  return {
    recipient: { id: requireNonEmptyString(input.recipientId, "recipientId") },
    messagingType: normalizeOptionalEnum(input.messagingType, messengerMessagingTypes, "messagingType") ?? "RESPONSE",
    ...(input.tag ? { tag: requireNonEmptyString(input.tag, "tag") } : {}),
    message: { text: requireNonEmptyString(input.text, "text") },
  };
}

export function createMessengerAttachmentMessage(input: {
  recipientId: string;
  type: MessengerAttachmentType | "template";
  payload: MessengerSocialProviderPayload;
  messagingType?: MessengerSendMessageInput["messagingType"];
  tag?: string;
}): MessengerSendMessageInput {
  requirePlainObject(input, "Messenger attachment message input");
  const type = requireMessengerAttachmentMessageType(input.type);
  requirePlainObject(input.payload, "Messenger attachment payload");
  return {
    recipient: { id: requireNonEmptyString(input.recipientId, "recipientId") },
    messagingType: normalizeOptionalEnum(input.messagingType, messengerMessagingTypes, "messagingType") ?? "RESPONSE",
    ...(input.tag ? { tag: requireNonEmptyString(input.tag, "tag") } : {}),
    message: {
      attachment: {
        type,
        payload: input.payload,
      },
    },
  };
}

function normalizeMessageInput(input: MessengerSendMessageInput): MessengerProviderSendMessageInput {
  requirePlainObject(input, "Messenger sendMessage input");
  requirePlainObject(input.recipient, "Messenger sendMessage recipient");
  const message = input.message === undefined
    ? undefined
    : requirePlainObject(input.message, "Messenger sendMessage message");
  const senderAction = normalizeOptionalEnum(input.senderAction, messengerSenderActions, "senderAction");
  if ((message === undefined) === (senderAction === undefined)) {
    throw new Error("Messenger sendMessage input must include exactly one of message or senderAction.");
  }
  const additionalFields = input.additionalFields === undefined
    ? undefined
    : requirePlainObject(input.additionalFields, "Messenger sendMessage additionalFields");
  rejectReservedAdditionalFields(additionalFields, messengerSendMessageReservedFields, "Messenger sendMessage additionalFields");

  return {
    ...(additionalFields ?? {}),
    recipient: { id: requireNonEmptyString(input.recipient.id, "recipient.id") },
    messaging_type: normalizeOptionalEnum(input.messagingType, messengerMessagingTypes, "messagingType") ?? "RESPONSE",
    ...(message ? { message } : {}),
    ...(senderAction ? { sender_action: senderAction } : {}),
    ...(input.tag ? { tag: requireNonEmptyString(input.tag, "tag") } : {}),
    ...(input.notificationType
      ? { notification_type: requireEnum(input.notificationType, messengerNotificationTypes, "notificationType") }
      : {}),
  };
}

function normalizeAttachmentUploadInput(input: {
  type: MessengerAttachmentType;
  url: string;
  isReusable?: boolean;
}): MessengerProviderUploadAttachmentInput {
  requirePlainObject(input, "Messenger uploadAttachment input");
  const type = requireMessengerAttachmentType(input.type);
  requireHttpsUrl(input.url, "attachment url");
  if (input.isReusable !== undefined && typeof input.isReusable !== "boolean") {
    throw new Error("Messenger uploadAttachment isReusable must be a boolean when provided.");
  }
  return {
    message: {
      attachment: {
        type,
        payload: {
          is_reusable: input.isReusable ?? true,
          url: input.url,
        },
      },
    },
  };
}

function handoverBody(
  input: MessengerHandoverInput,
  options: { requireTargetAppId?: boolean } = {},
): MessengerProviderHandoverInput {
  requirePlainObject(input, "Messenger handover input");
  if (input.targetAppId !== undefined) requireNonEmptyString(input.targetAppId, "targetAppId");
  if (options.requireTargetAppId && !input.targetAppId) {
    throw new Error("Messenger passThreadControl requires targetAppId.");
  }
  if (input.metadata !== undefined) requireNonEmptyString(input.metadata, "metadata");
  return {
    recipient: { id: requireNonEmptyString(input.recipientId, "recipientId") },
    ...(input.targetAppId ? { target_app_id: input.targetAppId } : {}),
    ...(input.metadata ? { metadata: input.metadata } : {}),
  };
}

function normalizeConversationSearchInput<T extends MessengerConversationSearchInput>(input: T): T {
  requirePlainObject(input, "Messenger conversation search input");
  const fields = input.fields === undefined
    ? defaultMessengerConversationFields
    : normalizeStringArray(input.fields, "fields");
  if (input.limit !== undefined && (!Number.isInteger(input.limit) || input.limit <= 0)) {
    throw new Error("Messenger conversation search limit must be a positive integer.");
  }
  if (input.after !== undefined) requireNonEmptyString(input.after, "after");
  if (input.userId !== undefined) requireNonEmptyString(input.userId, "userId");
  return {
    ...input,
    fields,
  };
}

function normalizeConversationMessagesSearchInput(
  input: Omit<MessengerConversationSearchInput, "userId">,
): Omit<MessengerConversationSearchInput, "userId"> {
  if ("userId" in input) {
    throw new Error("Messenger conversation message search does not accept userId.");
  }
  return normalizeConversationSearchInput(input);
}

function stripUndefinedRecord(input: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined));
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
  return requireNonEmptyString(value, name);
}

function requirePlainObject<T extends object>(value: T, name: string): T;
function requirePlainObject(value: unknown, name: string): MessengerSocialProviderPayload;
function requirePlainObject(value: unknown, name: string): MessengerSocialProviderPayload {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(`${name} must be an object.`);
  }
  return value as MessengerSocialProviderPayload;
}

function requireNonEmptyString(value: unknown, name: string) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Messenger ${name} must be a non-empty string.`);
  }
  return value;
}

function normalizeOptionalEnum<const T extends readonly string[]>(
  value: string | undefined,
  allowedValues: T,
  name: string,
): T[number] | undefined {
  if (value === undefined) return undefined;
  if (!(allowedValues as readonly string[]).includes(value)) {
    throw new Error(`Messenger ${name} must be one of: ${allowedValues.join(", ")}.`);
  }
  return value as T[number];
}

function requireEnum<const T extends readonly string[]>(
  value: unknown,
  allowedValues: T,
  name: string,
): T[number] {
  return normalizeOptionalEnum(requireNonEmptyString(value, name), allowedValues, name) as T[number];
}

function requireMessengerAttachmentType(value: unknown) {
  return requireEnum(value, messengerAttachmentTypes, "attachment type");
}

function requireMessengerAttachmentMessageType(value: unknown) {
  return requireEnum(value, messengerAttachmentMessageTypes, "attachment type");
}

function requireHttpsUrl(value: unknown, name: string) {
  const rawUrl = requireNonEmptyString(value, name);
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    throw new Error(`Messenger ${name} must be an HTTPS URL.`);
  }
  if (parsed.protocol !== "https:") {
    throw new Error(`Messenger ${name} must be an HTTPS URL.`);
  }
  return rawUrl;
}

function normalizeStringArray(value: unknown, name: string) {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`Messenger ${name} must be a non-empty string array.`);
  }
  return value.map((entry, index) => requireNonEmptyString(entry, `${name}[${index}]`));
}

function rejectReservedAdditionalFields(
  value: MessengerSocialProviderPayload | undefined,
  reservedFields: readonly string[],
  name: string,
) {
  if (!value) return;
  for (const field of reservedFields) {
    if (Object.prototype.hasOwnProperty.call(value, field)) {
      throw new Error(`${name} cannot override ${field}.`);
    }
  }
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

const messengerMessagingTypes = ["RESPONSE", "UPDATE", "MESSAGE_TAG"] as const;
const messengerSenderActions = ["typing_on", "typing_off", "mark_seen"] as const;
const messengerNotificationTypes = ["REGULAR", "SILENT_PUSH", "NO_PUSH"] as const;
const messengerAttachmentTypes = ["image", "audio", "video", "file"] as const;
const messengerAttachmentMessageTypes = [...messengerAttachmentTypes, "template"] as const;
const messengerSendMessageReservedFields = [
  "recipient",
  "messaging_type",
  "message",
  "sender_action",
  "tag",
  "notification_type",
] as const;
