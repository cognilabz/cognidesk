import type {
  GmailFullApiGeneratedClient,
  GmailGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type GmailEmailJsonPrimitive = string | number | boolean | null;
export type GmailEmailJsonValue =
  | GmailEmailJsonPrimitive
  | GmailEmailJsonObject
  | readonly GmailEmailJsonValue[];
export type GmailEmailProviderExtensionValue = GmailEmailJsonValue | object | undefined;
export interface GmailEmailJsonObject {
  [key: string]: GmailEmailProviderExtensionValue;
}
export type GmailEmailProviderPayload = GmailEmailJsonObject | object;
export type GmailEmailProviderQuery = Record<string, GmailEmailProviderExtensionValue>;
export interface GmailEmailProviderResponse extends GmailEmailJsonObject {}
export interface GmailEmailProviderExtensionFields extends GmailEmailJsonObject {}

export interface GmailEmailClientOptions {
  accessToken: string;
  userId?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
  signal?: AbortSignal | undefined;
}

export interface GmailCredentialStatusInput {
  accessToken?: string;
  scopes?: string[];
  expiresAt?: string;
}

export type GmailJsonPrimitive = string | number | boolean | null;
export type GmailJsonValue = GmailJsonPrimitive | GmailJsonObject | GmailJsonValue[];
export interface GmailJsonObject {
  [key: string]: GmailJsonValue | undefined;
}

export interface GmailMessagePartHeader {
  name?: string;
  value?: string;
}

export interface GmailMessagePartBody {
  attachmentId?: string;
  size?: number;
  data?: string;
}

export interface GmailMessagePart {
  partId?: string;
  mimeType?: string;
  filename?: string;
  headers?: GmailMessagePartHeader[];
  body?: GmailMessagePartBody;
  parts?: GmailMessagePart[];
}

export interface GmailMessageResource {
  id?: string;
  threadId?: string;
  labelIds?: string[];
  snippet?: string;
  historyId?: string;
  internalDate?: string;
  sizeEstimate?: number;
  raw?: string;
  payload?: GmailMessagePart;
}

export interface GmailDraftResource {
  id?: string;
  message?: GmailMessageResource;
}

export interface GmailProfileResource {
  emailAddress?: string;
  messagesTotal?: number;
  threadsTotal?: number;
  historyId?: string;
}

export interface GmailAttachmentResource extends GmailMessagePartBody {}

export type GmailLabelListVisibility = "labelShow" | "labelShowIfUnread" | "labelHide";
export type GmailMessageListVisibility = "show" | "hide";
export type GmailLabelType = "system" | "user";

export interface GmailLabelResource {
  id?: string;
  name?: string;
  messageListVisibility?: GmailMessageListVisibility;
  labelListVisibility?: GmailLabelListVisibility;
  type?: GmailLabelType;
  messagesTotal?: number;
  messagesUnread?: number;
  threadsTotal?: number;
  threadsUnread?: number;
  color?: {
    textColor?: string;
    backgroundColor?: string;
  };
}

export interface GmailProviderRequestOptions {
  signal?: AbortSignal | undefined;
}

export interface GmailListMessagesInput extends GmailProviderRequestOptions {
  query?: string;
  labelIds?: string[];
  maxResults?: number;
  pageToken?: string;
  includeSpamTrash?: boolean;
}

export interface GmailGetMessageInput extends GmailProviderRequestOptions {
  id: string;
  format?: "minimal" | "full" | "raw" | "metadata";
  metadataHeaders?: string[];
}

export interface GmailRawMessageInput {
  to: string[];
  from: string;
  subject: string;
  text: string;
  cc?: string[];
  bcc?: string[];
  replyTo?: string;
  inReplyTo?: string;
  references?: string[];
  messageId?: string;
}

export interface GmailCreateDraftInput extends GmailProviderRequestOptions {
  raw: string;
  threadId?: string;
}

export interface GmailSendMessageInput extends GmailProviderRequestOptions {
  raw: string;
  threadId?: string;
}

export interface GmailModifyMessageInput extends GmailProviderRequestOptions {
  id: string;
  addLabelIds?: string[];
  removeLabelIds?: string[];
}

export type GmailHistoryType =
  | "messageAdded"
  | "messageDeleted"
  | "labelAdded"
  | "labelRemoved";

export interface GmailListHistoryInput extends GmailProviderRequestOptions {
  startHistoryId: string;
  historyTypes?: GmailHistoryType[];
  labelId?: string;
  maxResults?: number;
  pageToken?: string;
}

export interface GmailHistoryResource {
  id?: string;
  messages?: GmailMessageResource[];
  messagesAdded?: Array<{ message?: GmailMessageResource }>;
  messagesDeleted?: Array<{ message?: GmailMessageResource }>;
  labelsAdded?: Array<{ message?: GmailMessageResource; labelIds?: string[] }>;
  labelsRemoved?: Array<{ message?: GmailMessageResource; labelIds?: string[] }>;
}

export interface GmailListHistoryResult {
  history?: GmailHistoryResource[];
  nextPageToken?: string;
  historyId?: string;
}

export interface GmailWatchInput extends GmailProviderRequestOptions {
  topicName: string;
  labelIds?: string[];
  labelFilterBehavior?: "include" | "exclude";
}

export interface GmailWatchResponse {
  historyId?: string;
  expiration?: string;
}

export interface GmailPubSubNotificationEnvelope {
  message?: {
    data?: string;
    messageId?: string;
    message_id?: string;
    publishTime?: string;
    publish_time?: string;
    attributes?: Record<string, string>;
  };
  subscription?: string;
}

export interface GmailPubSubNotification {
  emailAddress: string;
  historyId: string;
  messageId?: string;
  publishTime?: string;
  subscription?: string;
  attributes?: Record<string, string>;
  rawPayload: GmailJsonObject;
}

export interface GmailGetAttachmentInput extends GmailProviderRequestOptions {
  messageId: string;
  attachmentId: string;
}

export type GmailHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type GmailQueryValue = string | number | boolean | readonly (string | number | boolean)[] | undefined | null;
export type GmailQueryParams = Record<string, GmailQueryValue>;
export type GmailPathParams = Record<string, string | number | boolean | undefined>;

export interface GmailResource extends GmailJsonObject {}

export interface GmailClientRequestInput extends GmailProviderRequestOptions {
  pathParams?: GmailPathParams | undefined;
  query?: GmailQueryParams | undefined;
  body?: GmailJsonObject | undefined;
}

export interface GmailOperationRequestInput extends GmailClientRequestInput {}

export interface GmailOperationRequestMap {
  "users.getProfile": { pathParams: { userId: string } };
  "users.messages.list": {
    pathParams: { userId: string };
    query?: GmailListMessagesInput & GmailQueryParams;
  };
  "users.messages.get": {
    pathParams: { userId: string; id: string };
    query?: Pick<GmailGetMessageInput, "format" | "metadataHeaders"> & GmailQueryParams;
  };
  "users.messages.send": {
    pathParams: { userId: string };
    body: GmailSendMessageInput & GmailJsonObject;
  };
  "users.messages.modify": {
    pathParams: { userId: string; id: string };
    body: Omit<GmailModifyMessageInput, "id"> & GmailJsonObject;
  };
  "users.messages.attachments.get": {
    pathParams: { userId: string; messageId: string; id: string };
  };
  "users.history.list": {
    pathParams: { userId: string };
    query: GmailListHistoryInput & GmailQueryParams;
  };
  "users.labels.list": { pathParams: { userId: string } };
  "users.watch": {
    pathParams: { userId: string };
    body: GmailWatchInput & GmailJsonObject;
  };
}

export interface GmailOperationResponseMap {
  "users.getProfile": GmailProfileResource;
  "users.messages.list": { messages?: GmailMessageResource[]; nextPageToken?: string; resultSizeEstimate?: number };
  "users.messages.get": GmailMessageResource;
  "users.messages.send": GmailMessageResource;
  "users.messages.modify": GmailMessageResource;
  "users.messages.attachments.get": GmailAttachmentResource;
  "users.history.list": GmailListHistoryResult;
  "users.labels.list": { labels?: GmailLabelResource[] };
  "users.watch": GmailWatchResponse;
}

export interface GmailEmailClient {
  fullApi: GmailFullApiGeneratedClient;
  requestOperation: GmailGeneratedOperationCaller;
  listMessages(input?: GmailListMessagesInput): Promise<{ messages?: GmailMessageResource[]; nextPageToken?: string }>;
  getMessage(input: GmailGetMessageInput): Promise<GmailMessageResource>;
  listHistory(input: GmailListHistoryInput): Promise<GmailListHistoryResult>;
  watchMailbox(input: GmailWatchInput): Promise<GmailWatchResponse>;
  getAttachment(input: GmailGetAttachmentInput): Promise<GmailAttachmentResource>;
  listLabels(input?: GmailProviderRequestOptions): Promise<{ labels?: GmailLabelResource[] }>;
  createDraft(input: GmailCreateDraftInput): Promise<GmailDraftResource>;
  sendDraft(draftId: string, input?: GmailProviderRequestOptions): Promise<GmailMessageResource>;
  sendMessage(input: GmailSendMessageInput): Promise<GmailMessageResource>;
  modifyMessage(input: GmailModifyMessageInput): Promise<GmailMessageResource>;
  getProfile(input?: GmailProviderRequestOptions): Promise<GmailProfileResource>;
}

export interface GmailLiveCheckOptions extends GmailEmailClientOptions {
  client?: Pick<GmailEmailClient, "getProfile">;
}
