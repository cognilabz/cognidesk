import type {
  SlackWebApiGeneratedClient,
  SlackWebApiGeneratedOperationCaller,
} from "./web-api-client.generated.js";

export type SlackWorkplaceJsonPrimitive = string | number | boolean | null;
export type SlackWorkplaceJsonValue =
  | SlackWorkplaceJsonPrimitive
  | SlackWorkplaceJsonObject
  | readonly SlackWorkplaceJsonValue[];
export type SlackWorkplaceProviderExtensionValue = SlackWorkplaceJsonValue | object | undefined;
export interface SlackWorkplaceJsonObject {
  [key: string]: SlackWorkplaceProviderExtensionValue;
}
export type SlackWorkplaceProviderPayload = SlackWorkplaceJsonObject | object;
export type SlackWorkplaceProviderQuery = Record<string, SlackWorkplaceProviderExtensionValue>;
export interface SlackWorkplaceProviderResponse extends SlackWorkplaceJsonObject {}
export interface SlackWorkplaceProviderExtensionFields extends SlackWorkplaceJsonObject {}

export interface SlackWorkplaceClientOptions {
  botToken: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
  signal?: AbortSignal | undefined;
}

export interface SlackCredentialStatusInput {
  botToken?: string;
  signingSecret?: string;
  scopes?: string[];
  expiresAt?: string;
}

export interface SlackMessageResource {
  type?: string;
  subtype?: string;
  user?: string;
  username?: string;
  text?: string;
  ts?: string;
  thread_ts?: string;
  blocks?: SlackWorkplaceJsonValue[];
  attachments?: SlackWorkplaceJsonValue[];
  [key: string]: SlackWorkplaceProviderExtensionValue;
}

export interface SlackApiResponse {
  ok: boolean;
  error?: string;
  needed?: string;
  provided?: string;
  warning?: string;
  response_metadata?: {
    next_cursor?: string;
    warnings?: string[];
    messages?: string[];
    [key: string]: SlackWorkplaceProviderExtensionValue;
  };
  [key: string]: SlackWorkplaceProviderExtensionValue;
}

export interface SlackProviderRequestOptions {
  signal?: AbortSignal | undefined;
}

export interface SlackPostMessageInput extends SlackProviderRequestOptions {
  channel: string;
  text?: string;
  blocks?: SlackWorkplaceJsonValue[];
  attachments?: SlackWorkplaceJsonValue[];
  threadTs?: string;
  mrkdwn?: boolean;
  unfurlLinks?: boolean;
  unfurlMedia?: boolean;
  replyBroadcast?: boolean;
  metadata?: SlackWorkplaceProviderExtensionFields;
}

export interface SlackPostEphemeralInput extends SlackProviderRequestOptions {
  channel: string;
  user: string;
  text?: string;
  blocks?: SlackWorkplaceJsonValue[];
  attachments?: SlackWorkplaceJsonValue[];
  threadTs?: string;
  mrkdwn?: boolean;
}

export interface SlackUpdateMessageInput extends SlackProviderRequestOptions {
  channel: string;
  ts: string;
  text?: string;
  blocks?: SlackWorkplaceJsonValue[];
  attachments?: SlackWorkplaceJsonValue[];
  metadata?: SlackWorkplaceProviderExtensionFields;
}

export interface SlackConversationsHistoryInput extends SlackProviderRequestOptions {
  channel: string;
  cursor?: string;
  inclusive?: boolean;
  includeAllMetadata?: boolean;
  latest?: string;
  limit?: number;
  oldest?: string;
}

export interface SlackConversationsRepliesInput extends SlackProviderRequestOptions {
  channel: string;
  ts: string;
  cursor?: string;
  inclusive?: boolean;
  latest?: string;
  limit?: number;
  oldest?: string;
}

export interface SlackGetUploadUrlExternalInput extends SlackProviderRequestOptions {
  filename: string;
  length: number;
  altTxt?: string;
  snippetType?: string;
}

export interface SlackGetUploadUrlExternalResponse extends SlackApiResponse {
  upload_url?: string;
  file_id?: string;
}

export interface SlackCompleteUploadExternalInput extends SlackProviderRequestOptions {
  files: Array<{
    id: string;
    title?: string;
  }>;
  channelId?: string;
  initialComment?: string;
  threadTs?: string;
}

export interface SlackFileResource {
  id?: string;
  name?: string;
  title?: string;
  mimetype?: string;
  filetype?: string;
  url_private?: string;
  [key: string]: SlackWorkplaceProviderExtensionValue;
}

export interface SlackCompleteUploadExternalResponse extends SlackApiResponse {
  files?: SlackFileResource[];
}

export interface SlackUploadExternalFileBytesInput extends SlackProviderRequestOptions {
  uploadUrl: string;
  body: BodyInit;
  contentType?: string;
}

export interface SlackPostMessageResponse extends SlackApiResponse {
  channel?: string;
  ts?: string;
  message?: SlackMessageResource;
}

export interface SlackPostEphemeralResponse extends SlackApiResponse {
  message_ts?: string;
}

export interface SlackUpdateMessageResponse extends SlackApiResponse {
  channel?: string;
  ts?: string;
  text?: string;
  message?: SlackMessageResource;
}

export interface SlackConversationsHistoryResponse extends SlackApiResponse {
  messages?: SlackMessageResource[];
  has_more?: boolean;
  pin_count?: number;
}

export interface SlackConversationsRepliesResponse extends SlackApiResponse {
  messages?: SlackMessageResource[];
  has_more?: boolean;
}

export interface SlackAuthTestResponse extends SlackApiResponse {
  url?: string;
  team?: string;
  user?: string;
  team_id?: string;
  user_id?: string;
  bot_id?: string;
  enterprise_id?: string;
}

export type SlackHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface SlackResource {
  [key: string]: SlackWorkplaceProviderExtensionValue;
}

export interface SlackOperationRequestInput extends SlackProviderRequestOptions {
  query?: SlackWorkplaceProviderQuery | undefined;
  body?: SlackWorkplaceProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
}

export interface SlackWorkplaceClient {
  webApi: SlackWebApiGeneratedClient;
  requestOperation: SlackWebApiGeneratedOperationCaller;
  postMessage(input: SlackPostMessageInput): Promise<SlackPostMessageResponse>;
  postEphemeralMessage(input: SlackPostEphemeralInput): Promise<SlackPostEphemeralResponse>;
  postInternalAssistMessage(input: SlackPostEphemeralInput): Promise<SlackPostEphemeralResponse>;
  updateMessage(input: SlackUpdateMessageInput): Promise<SlackUpdateMessageResponse>;
  conversationsHistory(input: SlackConversationsHistoryInput): Promise<SlackConversationsHistoryResponse>;
  conversationsReplies(input: SlackConversationsRepliesInput): Promise<SlackConversationsRepliesResponse>;
  getUploadUrlExternal(input: SlackGetUploadUrlExternalInput): Promise<SlackGetUploadUrlExternalResponse>;
  uploadExternalFileBytes(input: SlackUploadExternalFileBytesInput): Promise<Response>;
  completeUploadExternal(input: SlackCompleteUploadExternalInput): Promise<SlackCompleteUploadExternalResponse>;
  authTest(input?: SlackProviderRequestOptions): Promise<SlackAuthTestResponse>;
}

export interface SlackLiveCheckOptions extends SlackWorkplaceClientOptions {
  client?: Pick<SlackWorkplaceClient, "authTest">;
}

export interface ValidateSlackRequestSignatureInput {
  signingSecret: string;
  rawBody: string | Buffer;
  timestamp: string | number;
  signature: string;
  version?: "v0";
  nowSeconds?: number;
  timestampToleranceSeconds?: number;
}

export interface ParseSlackSignedRequestOptions {
  signingSecret?: string;
  requireSignature?: boolean;
  nowSeconds?: number;
  timestampToleranceSeconds?: number;
}

export interface SlackSignedRequest {
  rawBody: string;
  contentType?: string;
  json?: unknown;
  form?: Record<string, string>;
  payload?: unknown;
}
