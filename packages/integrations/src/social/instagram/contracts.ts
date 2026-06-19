export type InstagramSocialJsonPrimitive = string | number | boolean | null;
export type InstagramSocialJsonValue =
  | InstagramSocialJsonPrimitive
  | InstagramSocialJsonObject
  | readonly InstagramSocialJsonValue[];
export type InstagramSocialProviderExtensionValue = InstagramSocialJsonValue | object | undefined;
export interface InstagramSocialJsonObject {
  [key: string]: InstagramSocialProviderExtensionValue;
}
export type InstagramSocialProviderPayload = InstagramSocialJsonObject | object;
export type InstagramSocialProviderQuery = Record<string, InstagramSocialProviderExtensionValue>;
export interface InstagramSocialProviderResponse extends InstagramSocialJsonObject {}
export interface InstagramSocialProviderExtensionFields extends InstagramSocialJsonObject {}

export interface InstagramSocialClientOptions {
  accessToken: string;
  pageId?: string;
  instagramBusinessAccountId?: string;
  graphApiBaseUrl?: string;
  graphApiVersion?: string;
  fetch?: typeof fetch;
}

export interface InstagramCredentialStatusInput {
  pageAccessToken?: string;
  pageId?: string;
  instagramBusinessAccountId?: string;
  appSecret?: string;
  verifyToken?: string;
  pageWebhookSubscribed?: boolean;
  permissions?: string[];
  expiresAt?: string;
}

export interface InstagramPaging {
  cursors?: {
    before?: string;
    after?: string;
  };
  next?: string;
  previous?: string;
  [key: string]: InstagramSocialProviderExtensionValue;
}

export interface InstagramGraphCollection<T> {
  data?: T[];
  paging?: InstagramPaging;
  summary?: InstagramSocialJsonObject;
  [key: string]: InstagramSocialProviderExtensionValue;
}

export interface InstagramMessageRecipient {
  id: string;
}

export interface InstagramMessageInput {
  recipient: InstagramMessageRecipient;
  message: InstagramSocialJsonObject;
  messagingType?: "RESPONSE" | "UPDATE" | "MESSAGE_TAG";
  tag?: string;
  senderId?: string;
  additionalFields?: InstagramSocialProviderExtensionFields;
}

export interface InstagramMessageResponse {
  recipient_id?: string;
  message_id?: string;
  [key: string]: InstagramSocialProviderExtensionValue;
}

export interface InstagramConversationResource {
  id?: string;
  participants?: InstagramGraphCollection<InstagramSocialJsonObject>;
  messages?: InstagramGraphCollection<InstagramSocialJsonObject>;
  updated_time?: string;
  link?: string;
  [key: string]: InstagramSocialProviderExtensionValue;
}

export interface InstagramMessageResource {
  id?: string;
  from?: InstagramSocialJsonObject;
  to?: InstagramSocialJsonObject;
  message?: string;
  attachments?: InstagramGraphCollection<InstagramSocialJsonObject>;
  created_time?: string;
  [key: string]: InstagramSocialProviderExtensionValue;
}

export interface InstagramAccountResource {
  id?: string;
  username?: string;
  name?: string;
  profile_picture_url?: string;
  followers_count?: number;
  follows_count?: number;
  media_count?: number;
  [key: string]: InstagramSocialProviderExtensionValue;
}

export interface InstagramPageResource {
  id?: string;
  name?: string;
  instagram_business_account?: InstagramAccountResource;
  [key: string]: InstagramSocialProviderExtensionValue;
}

export interface InstagramListConversationsInput {
  accountId?: string;
  fields?: string[];
  limit?: number;
  after?: string;
  before?: string;
}

export interface InstagramListMessagesInput {
  fields?: string[];
  limit?: number;
  after?: string;
  before?: string;
}

export interface InstagramSocialClient {
  sendMessage(input: InstagramMessageInput): Promise<InstagramMessageResponse>;
  sendTextMessage(input: {
    recipientId: string;
    text: string;
    messagingType?: InstagramMessageInput["messagingType"];
    senderId?: string;
    tag?: string;
  }): Promise<InstagramMessageResponse>;
  listConversations(input?: InstagramListConversationsInput): Promise<InstagramGraphCollection<InstagramConversationResource>>;
  listConversationMessages(
    conversationId: string,
    input?: InstagramListMessagesInput,
  ): Promise<InstagramGraphCollection<InstagramMessageResource>>;
  getMessage(messageId: string, fields?: string[]): Promise<InstagramMessageResource>;
  getInstagramBusinessAccount(fields?: string[]): Promise<InstagramAccountResource>;
  getPage(fields?: string[]): Promise<InstagramPageResource>;
}

export interface InstagramLiveCheckOptions extends InstagramSocialClientOptions {
  client?: Pick<InstagramSocialClient, "getInstagramBusinessAccount" | "getPage">;
}

export interface ValidateInstagramWebhookSignatureInput {
  appSecret: string;
  rawBody: string | Buffer;
  signature: string;
}

export interface ParseInstagramWebhookOptions {
  appSecret?: string;
  requireSignature?: boolean;
}

export interface VerifyInstagramWebhookChallengeInput {
  mode: string | null;
  verifyToken: string | null;
  challenge: string | null;
  expectedVerifyToken: string;
}

export interface InstagramWebhookPayload {
  object?: string;
  entry?: InstagramWebhookEntry[];
  [key: string]: InstagramSocialProviderExtensionValue;
}

export interface InstagramWebhookEntry {
  id?: string;
  time?: number;
  messaging?: InstagramWebhookMessagingEvent[];
  changes?: InstagramWebhookChange[];
  [key: string]: InstagramSocialProviderExtensionValue;
}

export interface InstagramWebhookMessagingEvent {
  sender?: { id?: string; [key: string]: InstagramSocialJsonValue | undefined };
  recipient?: { id?: string; [key: string]: InstagramSocialJsonValue | undefined };
  timestamp?: number;
  message?: {
    mid?: string;
    text?: string;
    attachments?: InstagramSocialJsonValue[];
    quick_reply?: InstagramSocialJsonObject;
    reply_to?: InstagramSocialJsonObject;
    [key: string]: InstagramSocialProviderExtensionValue;
  };
  postback?: InstagramSocialJsonObject;
  read?: InstagramSocialJsonObject;
  delivery?: InstagramSocialJsonObject;
  reaction?: InstagramSocialJsonObject;
  [key: string]: InstagramSocialProviderExtensionValue;
}

export interface InstagramWebhookChange {
  field?: string;
  value?: InstagramSocialJsonObject;
  [key: string]: InstagramSocialProviderExtensionValue;
}

export interface InstagramSignedWebhook {
  rawBody: string;
  contentType?: string;
  payload: InstagramWebhookPayload;
}
