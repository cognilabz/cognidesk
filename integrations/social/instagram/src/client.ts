import type {
  InstagramAccountResource,
  InstagramConversationResource,
  InstagramGraphCollection,
  InstagramListMessagesInput,
  InstagramMessageInput,
  InstagramMessageResponse,
  InstagramMessageResource,
  InstagramPageResource,
  InstagramSocialClient,
  InstagramSocialClientOptions,
} from "./contracts.js";
import {
  applyListQuery,
  instagramGraphUrl,
  instagramRequest,
  stripUndefined,
} from "./request.js";

export function createInstagramSocialClient(options: InstagramSocialClientOptions): InstagramSocialClient {
  const graphApiBaseUrl = (options.graphApiBaseUrl ?? "https://graph.facebook.com").replace(/\/+$/, "");
  const graphApiVersion = options.graphApiVersion ?? "v25.0";
  const fetchImpl = options.fetch ?? fetch;

  return {
    async sendMessage(input) {
      const senderId = input.senderId ?? options.pageId;
      if (!senderId) throw new Error("Instagram Page ID is required to send messages.");
      return instagramRequest<InstagramMessageResponse>({
        url: instagramGraphUrl(graphApiBaseUrl, graphApiVersion, `/${senderId}/messages`),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: instagramMessageBody(input),
      });
    },
    async sendTextMessage(input) {
      return this.sendMessage({
        recipient: { id: input.recipientId },
        message: { text: input.text },
        ...(input.messagingType ? { messagingType: input.messagingType } : {}),
        ...(input.senderId ? { senderId: input.senderId } : {}),
        ...(input.tag ? { tag: input.tag } : {}),
      });
    },
    async listConversations(input = {}) {
      const accountId = input.accountId ?? options.instagramBusinessAccountId;
      if (!accountId) throw new Error("Instagram business account ID is required to list conversations.");
      const url = instagramGraphUrl(graphApiBaseUrl, graphApiVersion, `/${accountId}/conversations`);
      url.searchParams.set("platform", "instagram");
      applyListQuery(url, input, defaultConversationFields);
      return instagramRequest<InstagramGraphCollection<InstagramConversationResource>>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async listConversationMessages(conversationId, input: InstagramListMessagesInput = {}) {
      const url = instagramGraphUrl(
        graphApiBaseUrl,
        graphApiVersion,
        `/${encodeURIComponent(conversationId)}/messages`,
      );
      applyListQuery(url, input, defaultMessageFields);
      return instagramRequest<InstagramGraphCollection<InstagramMessageResource>>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getMessage(messageId, fields = defaultMessageFields) {
      const url = instagramGraphUrl(graphApiBaseUrl, graphApiVersion, `/${encodeURIComponent(messageId)}`);
      if (fields.length) url.searchParams.set("fields", fields.join(","));
      return instagramRequest<InstagramMessageResource>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getInstagramBusinessAccount(fields = defaultAccountFields) {
      if (!options.instagramBusinessAccountId) {
        throw new Error("Instagram business account ID is required for account live checks.");
      }
      const url = instagramGraphUrl(graphApiBaseUrl, graphApiVersion, `/${options.instagramBusinessAccountId}`);
      if (fields.length) url.searchParams.set("fields", fields.join(","));
      return instagramRequest<InstagramAccountResource>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getPage(fields = defaultPageFields) {
      if (!options.pageId) throw new Error("Facebook Page ID is required for Page live checks.");
      const url = instagramGraphUrl(graphApiBaseUrl, graphApiVersion, `/${options.pageId}`);
      if (fields.length) url.searchParams.set("fields", fields.join(","));
      return instagramRequest<InstagramPageResource>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
  };
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

function instagramMessageBody(input: InstagramMessageInput) {
  return stripUndefined({
    recipient: input.recipient,
    message: input.message,
    messaging_type: input.messagingType,
    tag: input.tag,
    ...(input.additionalFields ?? {}),
  });
}

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
