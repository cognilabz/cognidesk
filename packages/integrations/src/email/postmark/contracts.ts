import type {
  PostmarkFullApiGeneratedClient,
  PostmarkGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type PostmarkEmailJsonPrimitive = string | number | boolean | null;
export type PostmarkEmailJsonValue =
  | PostmarkEmailJsonPrimitive
  | PostmarkEmailJsonObject
  | readonly PostmarkEmailJsonValue[];
export type PostmarkEmailProviderExtensionValue = PostmarkEmailJsonValue | object | undefined;
export interface PostmarkEmailJsonObject {
  [key: string]: PostmarkEmailProviderExtensionValue;
}
export type PostmarkEmailProviderPayload = PostmarkEmailJsonObject | object;
export type PostmarkEmailProviderQuery = Record<string, PostmarkEmailProviderExtensionValue>;
export interface PostmarkEmailProviderResponse extends PostmarkEmailJsonObject {}
export interface PostmarkEmailProviderExtensionFields extends PostmarkEmailJsonObject {}

export interface PostmarkEmailClientOptions {
  serverToken: string;
  accountToken?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export interface PostmarkCredentialStatusInput {
  serverTokenConfigured?: boolean;
  accountTokenConfigured?: boolean;
  messageStream?: string;
  webhookAuthConfigured?: boolean;
}

export type PostmarkJsonPrimitive = string | number | boolean | null;
export type PostmarkJsonValue = PostmarkJsonPrimitive | PostmarkJsonObject | PostmarkJsonValue[];
export interface PostmarkJsonObject {
  [key: string]: PostmarkJsonValue | undefined;
}

export interface PostmarkAttachmentInput {
  Name: string;
  Content: string;
  ContentType: string;
  ContentID?: string;
}

export interface PostmarkEmailInput {
  From: string;
  To: string;
  Subject: string;
  Cc?: string;
  Bcc?: string;
  ReplyTo?: string;
  HtmlBody?: string;
  TextBody?: string;
  Tag?: string;
  MessageStream?: string;
  TrackOpens?: boolean;
  TrackLinks?: "None" | "HtmlAndText" | "HtmlOnly" | "TextOnly";
  Headers?: Array<{ Name: string; Value: string }>;
  Attachments?: PostmarkAttachmentInput[];
  Metadata?: Record<string, string>;
}

export interface PostmarkTemplateEmailInput extends Omit<PostmarkEmailInput, "Subject" | "HtmlBody" | "TextBody"> {
  TemplateId?: number;
  TemplateAlias?: string;
  TemplateModel: PostmarkJsonObject;
  InlineCss?: boolean;
}

export interface PostmarkSendEmailResponse {
  To?: string;
  SubmittedAt?: string;
  MessageID?: string;
  ErrorCode?: number;
  Message?: string;
}

export interface PostmarkMessageSearchInput {
  count?: number;
  offset?: number;
  recipient?: string;
  fromEmail?: string;
  tag?: string;
  status?: string;
  messageStream?: string;
  fromDate?: string;
  toDate?: string;
}

export interface PostmarkMessageSearchResponse {
  TotalCount?: number;
  Messages?: PostmarkMessageSummary[];
}

export interface PostmarkMessageSummary {
  MessageID?: string;
  To?: string[];
  Cc?: string[];
  Bcc?: string[];
  Recipients?: string[];
  From?: string;
  Subject?: string;
  Tag?: string;
  MessageStream?: string;
  Status?: string;
  ReceivedAt?: string;
  Details?: string;
}

export interface PostmarkMessageDetails extends PostmarkMessageSummary {
  TextBody?: string;
  HtmlBody?: string;
  Headers?: Array<{ Name?: string; Value?: string }>;
  Attachments?: Array<{
    Name?: string;
    ContentType?: string;
    ContentLength?: number;
    ContentID?: string;
  }>;
  Metadata?: Record<string, string>;
}

export interface PostmarkMessageStreamsInput {
  MessageStreamType?: "All" | "Inbound" | "Transactional" | "Broadcasts";
  IncludeArchivedStreams?: boolean;
}

export interface PostmarkMessageStreamsResponse {
  MessageStreams?: PostmarkMessageStreamResource[];
}

export type PostmarkMessageStreamType = "Transactional" | "Broadcasts" | "Inbound";

export interface PostmarkMessageStreamResource {
  ID?: string;
  ServerID?: number;
  Name?: string;
  Description?: string;
  MessageStreamType?: PostmarkMessageStreamType;
  CreatedAt?: string;
  UpdatedAt?: string;
  ArchivedAt?: string | null;
}

export interface PostmarkSuppressionDumpInput {
  streamId: string;
  fromDate?: string;
  toDate?: string;
}

export interface PostmarkSuppressionDumpResponse {
  Suppressions?: PostmarkSuppressionRecord[];
}

export interface PostmarkSuppressionChangeInput {
  streamId: string;
  suppressions: Array<{ EmailAddress: string }>;
}

export type PostmarkSuppressionReason =
  | "HardBounce"
  | "ManualSuppression"
  | "SpamComplaint"
  | "SubscriptionChange";

export interface PostmarkSuppressionRecord {
  EmailAddress?: string;
  SuppressionReason?: PostmarkSuppressionReason | string;
  Origin?: string;
  CreatedAt?: string;
}

export interface PostmarkSuppressionChangeResponse {
  Suppressions?: Array<{
    EmailAddress?: string;
    Status?: string;
    Message?: string | null;
  }>;
}

export interface PostmarkWebhookTrigger {
  Enabled?: boolean;
  PostFirstOpenOnly?: boolean;
}

export interface PostmarkWebhookTriggers {
  Open?: PostmarkWebhookTrigger;
  Click?: PostmarkWebhookTrigger;
  Delivery?: PostmarkWebhookTrigger;
  Bounce?: PostmarkWebhookTrigger;
  SpamComplaint?: PostmarkWebhookTrigger;
  SubscriptionChange?: PostmarkWebhookTrigger;
}

export interface PostmarkWebhookResource {
  ID?: number;
  Url?: string;
  MessageStream?: string;
  Triggers?: PostmarkWebhookTriggers;
}

export type PostmarkHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface PostmarkResource extends PostmarkJsonObject {}

export type PostmarkQueryValue = string | number | boolean | readonly (string | number | boolean)[] | undefined | null;
export type PostmarkQueryParams = Record<string, PostmarkQueryValue>;
export type PostmarkPathParams = Record<string, string | number | boolean | undefined>;

export interface PostmarkOperationRequestInput {
  pathParams?: PostmarkPathParams | undefined;
  query?: PostmarkQueryParams | undefined;
  /** Escape hatch for generated Swagger operations whose schemas are not projected into TypeScript yet. */
  body?: PostmarkEmailProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
}

export interface PostmarkInboundWebhook {
  From?: string;
  FromName?: string;
  To?: string;
  Cc?: string;
  Bcc?: string;
  Subject?: string;
  MessageID?: string;
  Date?: string;
  MailboxHash?: string;
  TextBody?: string;
  HtmlBody?: string;
  StrippedTextReply?: string;
  Tag?: string;
  MessageStream?: string;
  Headers?: Array<{ Name?: string; Value?: string }>;
  Attachments?: Array<{
    Name?: string;
    Content?: string;
    ContentType?: string;
    ContentLength?: number;
    ContentID?: string;
  }>;
}

export interface PostmarkOperationRequestMap {
  "server:POST:/email": { body: PostmarkEmailInput & PostmarkJsonObject };
  "server:POST:/email/withTemplate": { body: PostmarkTemplateEmailInput & PostmarkJsonObject };
  "server:GET:/messages/outbound/{messageid}/details": { pathParams: { messageid: string } };
  "server:GET:/messages/inbound/{messageid}/details": { pathParams: { messageid: string } };
  "server:GET:/messages/outbound": { query?: PostmarkMessageSearchInput & PostmarkQueryParams };
  "server:GET:/messages/inbound": { query?: PostmarkMessageSearchInput & PostmarkQueryParams };
  "server:GET:/webhooks": {};
}

export interface PostmarkOperationResponseMap {
  "server:POST:/email": PostmarkSendEmailResponse;
  "server:POST:/email/withTemplate": PostmarkSendEmailResponse;
  "server:GET:/messages/outbound/{messageid}/details": PostmarkMessageDetails;
  "server:GET:/messages/inbound/{messageid}/details": PostmarkMessageDetails;
  "server:GET:/messages/outbound": PostmarkMessageSearchResponse;
  "server:GET:/messages/inbound": PostmarkMessageSearchResponse;
  "server:GET:/webhooks": { Webhooks?: PostmarkWebhookResource[] };
}

export interface PostmarkEmailClient {
  fullApi: PostmarkFullApiGeneratedClient;
  requestOperation: PostmarkGeneratedOperationCaller;
  sendEmail(input: PostmarkEmailInput): Promise<PostmarkSendEmailResponse>;
  sendEmailWithTemplate(input: PostmarkTemplateEmailInput): Promise<PostmarkSendEmailResponse>;
  getOutboundMessageDetails(messageId: string): Promise<PostmarkMessageDetails>;
  getInboundMessageDetails(messageId: string): Promise<PostmarkMessageDetails>;
  searchOutboundMessages(input?: PostmarkMessageSearchInput): Promise<PostmarkMessageSearchResponse>;
  searchInboundMessages(input?: PostmarkMessageSearchInput): Promise<PostmarkMessageSearchResponse>;
  listWebhooks(): Promise<PostmarkWebhookResource[]>;
  listMessageStreams(input?: PostmarkMessageStreamsInput): Promise<PostmarkMessageStreamsResponse>;
  dumpSuppressions(input: PostmarkSuppressionDumpInput): Promise<PostmarkSuppressionDumpResponse>;
  createSuppressions(input: PostmarkSuppressionChangeInput): Promise<PostmarkSuppressionChangeResponse>;
  deleteSuppressions(input: PostmarkSuppressionChangeInput): Promise<PostmarkSuppressionChangeResponse>;
}

export interface PostmarkLiveCheckOptions extends PostmarkEmailClientOptions {
  client?: Pick<PostmarkEmailClient, "listWebhooks" | "listMessageStreams">;
}

export interface ParsePostmarkInboundWebhookOptions {
  expectedAuthHeader?: string;
  requireAuth?: boolean;
}
