import type {
  MethodOptions,
  auth as gmailAuth,
  gmail_v1,
} from "@googleapis/gmail";
import type { GmailEmailOperationAlias } from "./operations.js";

export type GmailOfficialClient = gmail_v1.Gmail;
export type GmailOfficialAuthClient = NonNullable<gmail_v1.Options["auth"]>;
export type GmailOfficialAuth = typeof gmailAuth;
export type GmailOfficialMethodOptions = MethodOptions;

export type GmailJsonPrimitive = string | number | boolean | null;
export type GmailJsonValue = GmailJsonPrimitive | GmailJsonObject | GmailJsonValue[];
export interface GmailJsonObject {
  [key: string]: GmailJsonValue | undefined;
}

export interface GmailProviderRequestOptions {
  signal?: AbortSignal | undefined;
}

export interface GmailEmailClientOptions extends GmailProviderRequestOptions {
  accessToken?: string;
  userId?: string;
  auth?: GmailOfficialAuthClient;
  rawClient?: GmailOfficialClient;
  rootUrl?: string;
}

export interface GmailCredentialStatusInput {
  accessToken?: string;
  scopes?: string[];
  expiresAt?: string;
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

export type GmailComposedMessageInput = GmailProviderRequestOptions & Partial<GmailRawMessageInput> & {
  raw?: string;
};

export interface GmailReadThreadInput extends GmailProviderRequestOptions {
  threadId: string;
  format?: "minimal" | "full" | "raw" | "metadata";
  metadataHeaders?: string[];
}

export interface GmailReplySendInput extends GmailComposedMessageInput {
  threadId: string;
}

export interface GmailSendEmailInput extends GmailComposedMessageInput {
  threadId?: string;
}

export interface GmailCreateDraftInput extends GmailComposedMessageInput {
  threadId?: string;
}

export interface GmailSendDraftInput extends GmailProviderRequestOptions {
  draftId: string;
}

export interface GmailArchiveThreadInput extends GmailProviderRequestOptions {
  threadId: string;
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

export interface GmailWatchInput extends GmailProviderRequestOptions {
  topicName: string;
  labelIds?: string[];
  labelFilterBehavior?: "include" | "exclude";
}

export interface GmailGetAttachmentInput extends GmailProviderRequestOptions {
  messageId: string;
  attachmentId: string;
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

export interface GmailEmailAttachment {
  partId?: string;
  attachmentId?: string;
  filename?: string;
  mimeType?: string;
  size?: number;
}

export interface GmailEmailMessage {
  provider: "gmail";
  id?: string;
  threadId?: string;
  historyId?: string;
  internalDate?: string;
  snippet?: string;
  labelIds: string[];
  headers: Record<string, string[]>;
  subject?: string;
  from?: string;
  to?: string[];
  cc?: string[];
  bcc?: string[];
  replyTo?: string;
  messageId?: string;
  inReplyTo?: string;
  references?: string[];
  attachments: GmailEmailAttachment[];
  raw: gmail_v1.Schema$Message;
}

export interface GmailEmailThread {
  provider: "gmail";
  id?: string;
  historyId?: string;
  messages: GmailEmailMessage[];
  raw: gmail_v1.Schema$Thread;
}

export interface GmailEmailDraft {
  provider: "gmail";
  id?: string;
  message?: GmailEmailMessage;
  raw: gmail_v1.Schema$Draft;
}

export type GmailWatchResponse = gmail_v1.Schema$WatchResponse;
export type GmailHistoryListResponse = gmail_v1.Schema$ListHistoryResponse;
export type GmailAttachmentBody = gmail_v1.Schema$MessagePartBody;
export type GmailLabelListResponse = gmail_v1.Schema$ListLabelsResponse;
export type GmailProfileResource = gmail_v1.Schema$Profile;

export interface GmailEmailOperationInputMap {
  "email.receive": Request | GmailPubSubNotificationEnvelope;
  "email.thread.read": GmailReadThreadInput;
  "email.reply.send": GmailReplySendInput;
  "email.send": GmailSendEmailInput;
  "email.draft.create": GmailCreateDraftInput;
  "email.draft.send": GmailSendDraftInput;
  "email.archive": GmailArchiveThreadInput;
  "mailbox.watch": GmailWatchInput;
  "gmail.history.list": GmailListHistoryInput;
  "gmail.attachment.get": GmailGetAttachmentInput;
  "gmail.labels.list": GmailProviderRequestOptions | undefined;
}

export interface GmailEmailOperationOutputMap {
  "email.receive": GmailPubSubNotification;
  "email.thread.read": GmailEmailThread;
  "email.reply.send": GmailEmailMessage;
  "email.send": GmailEmailMessage;
  "email.draft.create": GmailEmailDraft;
  "email.draft.send": GmailEmailMessage;
  "email.archive": GmailEmailThread;
  "mailbox.watch": GmailWatchResponse;
  "gmail.history.list": GmailHistoryListResponse;
  "gmail.attachment.get": GmailAttachmentBody;
  "gmail.labels.list": GmailLabelListResponse;
}

export type GmailEmailOperationHandler<K extends GmailEmailOperationAlias> = (
  input: GmailEmailOperationInputMap[K],
) => Promise<GmailEmailOperationOutputMap[K]>;

export type GmailEmailOperationHandlers = {
  [K in GmailEmailOperationAlias]: GmailEmailOperationHandler<K>;
};

export interface GmailEmailClient {
  rawClient: GmailOfficialClient;
  userId: string;
  handlers: GmailEmailOperationHandlers;
  execute<K extends GmailEmailOperationAlias>(
    alias: K,
    input: GmailEmailOperationInputMap[K],
  ): Promise<GmailEmailOperationOutputMap[K]>;
  readThread(input: GmailReadThreadInput): Promise<GmailEmailThread>;
  sendReply(input: GmailReplySendInput): Promise<GmailEmailMessage>;
  sendEmail(input: GmailSendEmailInput): Promise<GmailEmailMessage>;
  createDraft(input: GmailCreateDraftInput): Promise<GmailEmailDraft>;
  sendDraft(input: GmailSendDraftInput): Promise<GmailEmailMessage>;
  archiveThread(input: GmailArchiveThreadInput): Promise<GmailEmailThread>;
  watchMailbox(input: GmailWatchInput): Promise<GmailWatchResponse>;
  listHistory(input: GmailListHistoryInput): Promise<GmailHistoryListResponse>;
  getAttachment(input: GmailGetAttachmentInput): Promise<GmailAttachmentBody>;
  listLabels(input?: GmailProviderRequestOptions): Promise<GmailLabelListResponse>;
  getProfile(input?: GmailProviderRequestOptions): Promise<GmailProfileResource>;
}

export type GmailLiveCheckOptions = GmailEmailClientOptions & {
  client?: Pick<GmailEmailClient, "getProfile">;
};
