import type { Client } from "@microsoft/microsoft-graph-client";

export type OutlookEmailJsonPrimitive = string | number | boolean | null;
export type OutlookEmailJsonValue =
  | OutlookEmailJsonPrimitive
  | OutlookEmailJsonObject
  | readonly OutlookEmailJsonValue[];
export type OutlookEmailProviderExtensionValue = OutlookEmailJsonValue | object | undefined;
export interface OutlookEmailJsonObject {
  [key: string]: OutlookEmailProviderExtensionValue;
}
export type OutlookEmailProviderPayload = OutlookEmailJsonObject | object;
export type OutlookEmailProviderQuery = Record<string, OutlookEmailProviderExtensionValue>;
export interface OutlookEmailProviderExtensionFields extends OutlookEmailJsonObject {}

export interface OutlookEmailClientOptions {
  accessToken: string;
  userId?: string;
  graphBaseUrl?: string;
  graphApiVersion?: string;
  fetch?: typeof fetch;
  signal?: AbortSignal | undefined;
  graphClient?: Client;
}

export interface OutlookProviderRequestOptions {
  signal?: AbortSignal | undefined;
}

export type OutlookGraphHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface OutlookGraphResource {
  [key: string]: OutlookEmailProviderExtensionValue;
}

export interface OutlookGraphRequestInput extends OutlookProviderRequestOptions {
  method: OutlookGraphHttpMethod;
  path: string;
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: OutlookEmailProviderQuery | undefined;
  body?: OutlookEmailProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  rawResponse?: boolean | undefined;
}

export interface OutlookCredentialStatusInput {
  accessToken?: string;
  scopes?: string[];
  expiresAt?: string;
  userId?: string;
  delegatedMe?: boolean;
  clientStateConfigured?: boolean;
}

export interface OutlookRecipient {
  emailAddress: {
    address: string;
    name?: string;
  };
}

export interface OutlookItemBody {
  contentType: "text" | "html";
  content: string;
}

export interface OutlookInternetMessageHeader {
  name?: string;
  value?: string;
  [key: string]: OutlookEmailProviderExtensionValue;
}

export interface OutlookAttachmentResource {
  id?: string;
  name?: string;
  contentType?: string;
  size?: number;
  isInline?: boolean;
  [key: string]: OutlookEmailProviderExtensionValue;
}

export interface OutlookMessageResource {
  id?: string;
  subject?: string;
  bodyPreview?: string;
  body?: OutlookItemBody;
  sender?: OutlookRecipient;
  from?: OutlookRecipient;
  toRecipients?: OutlookRecipient[];
  ccRecipients?: OutlookRecipient[];
  bccRecipients?: OutlookRecipient[];
  replyTo?: OutlookRecipient[];
  conversationId?: string;
  internetMessageId?: string;
  internetMessageHeaders?: OutlookInternetMessageHeader[];
  categories?: string[];
  importance?: "low" | "normal" | "high" | string;
  isRead?: boolean;
  hasAttachments?: boolean;
  receivedDateTime?: string;
  sentDateTime?: string;
  webLink?: string;
  attachments?: OutlookAttachmentResource[];
  [key: string]: OutlookEmailProviderExtensionValue;
}

export interface OutlookMailboxUserResource {
  id?: string;
  displayName?: string;
  mail?: string | null;
  userPrincipalName?: string;
  [key: string]: OutlookEmailProviderExtensionValue;
}

export interface OutlookListMessagesInput extends OutlookProviderRequestOptions {
  folderId?: string;
  top?: number;
  skip?: number;
  filter?: string;
  search?: string;
  orderBy?: string[];
  select?: string[];
  expand?: string[];
}

export interface OutlookGetMessageInput extends OutlookProviderRequestOptions {
  id: string;
  select?: string[];
  expand?: string[];
}

export interface OutlookMessageInput extends OutlookProviderRequestOptions {
  subject?: string;
  body?: OutlookItemBody;
  toRecipients?: OutlookRecipient[];
  ccRecipients?: OutlookRecipient[];
  bccRecipients?: OutlookRecipient[];
  replyTo?: OutlookRecipient[];
  categories?: string[];
  importance?: "low" | "normal" | "high" | string;
  attachments?: OutlookAttachmentResource[];
  internetMessageHeaders?: OutlookInternetMessageHeader[];
  additionalFields?: OutlookEmailProviderExtensionFields;
}

export interface OutlookCreateDraftInput extends OutlookMessageInput {}

export interface OutlookSendMailInput extends OutlookProviderRequestOptions {
  message: OutlookMessageInput;
  saveToSentItems?: boolean;
}

export interface OutlookUpdateMessageInput extends OutlookMessageInput {
  id: string;
  isRead?: boolean;
}

export interface OutlookListMessagesResult {
  value: OutlookMessageResource[];
  nextLink?: string;
  deltaLink?: string;
}

export interface OutlookSendMailResult {
  accepted: true;
  status?: number;
}

export interface OutlookDeltaMessagesInput extends OutlookProviderRequestOptions {
  folderId: string;
  top?: number;
  select?: string[];
}

export interface OutlookListAttachmentsInput extends OutlookProviderRequestOptions {
  messageId: string;
  folderId?: string;
}

export interface OutlookGetAttachmentInput extends OutlookListAttachmentsInput {
  attachmentId: string;
}

export interface OutlookCreateSubscriptionInput extends OutlookProviderRequestOptions {
  changeType: string;
  notificationUrl: string;
  resource: string;
  expirationDateTime: string;
  clientState?: string;
  lifecycleNotificationUrl?: string;
  includeResourceData?: boolean;
  encryptionCertificate?: string;
  encryptionCertificateId?: string;
  latestSupportedTlsVersion?: string;
  additionalFields?: OutlookEmailProviderExtensionFields;
}

export interface OutlookSubscriptionResource {
  id?: string;
  resource?: string;
  applicationId?: string;
  changeType?: string;
  clientState?: string;
  notificationUrl?: string;
  lifecycleNotificationUrl?: string;
  expirationDateTime?: string;
  [key: string]: OutlookEmailProviderExtensionValue;
}

export interface OutlookEmailClient {
  graphClient: Client;
  rawClient: Client;
  requestGraph<T = OutlookGraphResource>(input: OutlookGraphRequestInput): Promise<T>;
  listMessages(input?: OutlookListMessagesInput): Promise<OutlookListMessagesResult>;
  getMessage(input: OutlookGetMessageInput): Promise<OutlookMessageResource>;
  deltaMessages(input: OutlookDeltaMessagesInput): Promise<OutlookListMessagesResult>;
  listAttachments(input: OutlookListAttachmentsInput): Promise<{ value: OutlookAttachmentResource[]; nextLink?: string }>;
  getAttachment(input: OutlookGetAttachmentInput): Promise<OutlookAttachmentResource>;
  getAttachmentValue(input: OutlookGetAttachmentInput): Promise<Response>;
  createSubscription(input: OutlookCreateSubscriptionInput): Promise<OutlookSubscriptionResource>;
  createDraft(input: OutlookCreateDraftInput): Promise<OutlookMessageResource>;
  sendMail(input: OutlookSendMailInput): Promise<OutlookSendMailResult>;
  updateMessage(input: OutlookUpdateMessageInput): Promise<OutlookMessageResource>;
  getMailboxUser(input?: OutlookProviderRequestOptions): Promise<OutlookMailboxUserResource>;
}

export interface OutlookLiveCheckOptions extends OutlookEmailClientOptions {
  client?: Pick<OutlookEmailClient, "getMailboxUser">;
}

export interface ValidateOutlookWebhookClientStateInput {
  expectedClientState: string;
  actualClientState?: string | null | undefined;
}

export interface ParseOutlookWebhookOptions {
  clientState?: string;
  requireClientState?: boolean;
}

export interface OutlookChangeNotificationPayload {
  value?: OutlookChangeNotification[];
  validationTokens?: string[];
  [key: string]: OutlookEmailProviderExtensionValue;
}

export interface OutlookChangeNotification {
  subscriptionId?: string;
  subscriptionExpirationDateTime?: string;
  changeType?: string;
  resource?: string;
  resourceData?: OutlookResourceData;
  clientState?: string;
  tenantId?: string;
  lifecycleEvent?: string;
  encryptedContent?: OutlookEmailProviderExtensionValue;
  [key: string]: OutlookEmailProviderExtensionValue;
}

export interface OutlookResourceData {
  id?: string;
  oDataType?: string;
  oDataId?: string;
  etag?: string;
  [key: string]: OutlookEmailProviderExtensionValue;
}

export interface OutlookWebhookRequest {
  rawBody: string;
  contentType?: string;
  payload: OutlookChangeNotificationPayload;
  notifications: OutlookChangeNotification[];
  validationTokens: string[];
}

/** @deprecated Microsoft Graph change notifications are validated by clientState, not provider signatures. */
export type OutlookSignedWebhook = OutlookWebhookRequest;

export interface VerifyOutlookWebhookValidationTokenInput {
  validationToken: string | null;
}
