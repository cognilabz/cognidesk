import type { ChannelEventEnvelopeInput } from "@cognidesk/core";
import type { WebClient, WebClientOptions } from "@slack/web-api";

export type SlackWorkplaceJsonPrimitive = string | number | boolean | null;
export type SlackWorkplaceJsonValue =
  | SlackWorkplaceJsonPrimitive
  | SlackWorkplaceJsonObject
  | readonly SlackWorkplaceJsonValue[];
export type SlackWorkplaceProviderExtensionValue = SlackWorkplaceJsonValue | object | undefined;

export interface SlackWorkplaceJsonObject {
  [key: string]: SlackWorkplaceProviderExtensionValue;
}

export interface SlackWorkplaceCredentials {
  botToken?: string;
  signingSecret?: string;
}

export interface SlackWorkplaceClientOptions extends SlackWorkplaceCredentials {
  apiBaseUrl?: string;
  client?: WebClient;
  webClientOptions?: WebClientOptions;
  fetch?: typeof fetch;
  signal?: AbortSignal | undefined;
}

export interface SlackCredentialStatusInput extends SlackWorkplaceCredentials {
  scopes?: string[];
  expiresAt?: string;
}

export interface SlackProviderRequestOptions {
  signal?: AbortSignal | undefined;
}

export interface SlackMessageResource {
  type?: string;
  subtype?: string;
  user?: string;
  username?: string;
  text?: string;
  ts?: string;
  thread_ts?: string;
  channel?: string;
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
  metadata?: SlackWorkplaceJsonObject;
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
  metadata?: SlackWorkplaceJsonObject;
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

export interface SlackUploadExternalFileBytesInput extends SlackProviderRequestOptions {
  uploadUrl: string;
  body: BodyInit;
  contentType?: string;
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

export interface SlackUploadExternalFileInput extends SlackGetUploadUrlExternalInput {
  body: BodyInit;
  contentType?: string;
  channelId?: string;
  initialComment?: string;
  threadTs?: string;
  title?: string;
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

export interface SlackConversationsRepliesResponse extends SlackApiResponse {
  messages?: SlackMessageResource[];
  has_more?: boolean;
}

export interface SlackCompleteUploadExternalResponse extends SlackApiResponse {
  files?: SlackFileResource[];
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

export interface SlackWorkplaceClient {
  webClient: WebClient;
  apiCall<T = SlackApiResponse>(method: string, options?: SlackWorkplaceJsonObject): Promise<T>;
  postMessage(input: SlackPostMessageInput): Promise<SlackPostMessageResponse>;
  postEphemeralMessage(input: SlackPostEphemeralInput): Promise<SlackPostEphemeralResponse>;
  postInternalAssistMessage(input: SlackPostEphemeralInput): Promise<SlackPostEphemeralResponse>;
  updateMessage(input: SlackUpdateMessageInput): Promise<SlackUpdateMessageResponse>;
  conversationsReplies(input: SlackConversationsRepliesInput): Promise<SlackConversationsRepliesResponse>;
  getUploadUrlExternal(input: SlackGetUploadUrlExternalInput): Promise<SlackGetUploadUrlExternalResponse>;
  uploadExternalFileBytes(input: SlackUploadExternalFileBytesInput): Promise<Response>;
  uploadExternalFile(input: SlackUploadExternalFileInput): Promise<SlackCompleteUploadExternalResponse>;
  completeUploadExternal(input: SlackCompleteUploadExternalInput): Promise<SlackCompleteUploadExternalResponse>;
  authTest(input?: SlackProviderRequestOptions): Promise<SlackAuthTestResponse>;
}

export interface SlackLiveCheckOptions extends Omit<SlackWorkplaceClientOptions, "client"> {
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

export interface ParseSlackSignedRequestInput extends ParseSlackSignedRequestOptions {
  request: Request;
}

export interface SlackSignedRequest {
  rawBody: string;
  contentType?: string;
  json?: unknown;
  form?: Record<string, string>;
  payload?: unknown;
}

export interface NormalizeSlackChannelEventInput {
  signedRequest: SlackSignedRequest;
  defaultChannelId?: string;
  receivedAt?: string;
}

export type SlackChannelEvent = ChannelEventEnvelopeInput<Record<string, unknown>, unknown>;
