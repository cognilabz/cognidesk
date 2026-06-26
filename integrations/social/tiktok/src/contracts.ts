import type { ProviderJsonRetryOptions } from "@cognidesk/integration-kit";

export type TikTokSocialJsonPrimitive = string | number | boolean | null;
export type TikTokSocialJsonValue =
  | TikTokSocialJsonPrimitive
  | TikTokSocialJsonObject
  | readonly TikTokSocialJsonValue[];
export type TikTokSocialProviderExtensionValue = TikTokSocialJsonValue | object | undefined;
export interface TikTokSocialJsonObject {
  [key: string]: TikTokSocialProviderExtensionValue;
}

export type TikTokSocialProviderPayload = TikTokSocialJsonObject | object;
export type TikTokSocialProviderQuery = Record<string, TikTokSocialProviderExtensionValue>;
export interface TikTokSocialProviderResponse extends TikTokSocialJsonObject {}
export interface TikTokSocialProviderExtensionFields extends TikTokSocialJsonObject {}

export interface TikTokSocialClientOptions {
  accessToken?: string;
  baseUrl?: string;
  openApiBaseUrl?: string;
  businessApiBaseUrl?: string;
  businessApiVersion?: string;
  fetch?: typeof fetch;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
  clientKey?: string;
  clientSecret?: string;
  openId?: string;
  businessId?: string;
  providerClient?: TikTokSocialProviderClient;
}

export interface TikTokCredentialStatusInput {
  clientKey?: string;
  clientSecret?: string;
  accessToken?: string;
  openId?: string;
  businessId?: string;
  webhookSignatureSecret?: string;
  webhookConfigured?: boolean;
  scopes?: string[];
  expiresAt?: string;
}

export interface TikTokApiResponse<T extends TikTokSocialProviderExtensionValue = TikTokSocialJsonObject> {
  data?: T;
  error?: {
    code?: string;
    message?: string;
    log_id?: string;
  };
  code?: number | string;
  message?: string;
  request_id?: string;
  [key: string]: TikTokSocialProviderExtensionValue;
}

export interface TikTokUserInfo {
  user?: {
    open_id?: string;
    union_id?: string;
    avatar_url?: string;
    avatar_url_100?: string;
    avatar_large_url?: string;
    display_name?: string;
    bio_description?: string;
    profile_deep_link?: string;
    is_verified?: boolean;
    username?: string;
    follower_count?: number;
    following_count?: number;
    likes_count?: number;
    video_count?: number;
    [key: string]: TikTokSocialProviderExtensionValue;
  };
  [key: string]: TikTokSocialProviderExtensionValue;
}

export interface TikTokVideoListInput {
  fields?: string[];
  cursor?: number;
  maxCount?: number;
}

export interface TikTokVideo {
  id?: string;
  create_time?: number;
  cover_image_url?: string;
  share_url?: string;
  video_description?: string;
  duration?: number;
  height?: number;
  width?: number;
  title?: string;
  embed_html?: string;
  embed_link?: string;
  like_count?: number;
  comment_count?: number;
  share_count?: number;
  view_count?: number;
  [key: string]: TikTokSocialProviderExtensionValue;
}

export interface TikTokVideoList {
  videos?: TikTokVideo[];
  video_list?: TikTokVideo[];
  cursor?: number;
  has_more?: boolean;
  [key: string]: TikTokSocialProviderExtensionValue;
}

export interface TikTokResearchCommentListInput {
  videoId?: string;
  commentId?: string;
  fields?: string[];
  maxCount?: number;
  cursor?: number;
}

export interface TikTokComment {
  id?: string;
  video_id?: string;
  text?: string;
  like_count?: number;
  reply_count?: number;
  parent_comment_id?: string;
  create_time?: number;
  [key: string]: TikTokSocialProviderExtensionValue;
}

export interface TikTokCommentList {
  comments?: TikTokComment[];
  cursor?: number;
  has_more?: boolean;
  [key: string]: TikTokSocialProviderExtensionValue;
}

export interface TikTokBusinessVideoListInput {
  businessId?: string;
  fields?: string[];
  filters?: TikTokSocialJsonObject;
}

export interface TikTokBusinessCommentListInput {
  businessId?: string;
  videoId: string;
  status?: "PUBLIC" | "HIDDEN" | "ALL" | string;
  cursor?: number;
  pageSize?: number;
  fields?: string[];
}

export interface TikTokCommentReplyInput {
  businessId?: string;
  videoId: string;
  commentId: string;
  text: string;
  additionalFields?: TikTokSocialProviderExtensionFields;
}

export interface TikTokPostStatusInput {
  publishId: string;
}

export interface TikTokGeneralDmSupport {
  supported: false;
  reason: string;
  alternatives: string[];
}

export interface TikTokSocialProviderClient {
  getUserInfo(fields?: string[]): Promise<TikTokApiResponse<TikTokUserInfo>>;
  listVideos(input?: TikTokVideoListInput): Promise<TikTokApiResponse<TikTokVideoList>>;
  fetchPostStatus(input: TikTokPostStatusInput): Promise<TikTokApiResponse>;
  queryResearchVideoComments(input: TikTokResearchCommentListInput): Promise<TikTokApiResponse<TikTokCommentList>>;
  listBusinessVideos(input?: TikTokBusinessVideoListInput): Promise<TikTokApiResponse>;
  listBusinessComments(input: TikTokBusinessCommentListInput): Promise<TikTokApiResponse<TikTokCommentList>>;
  replyToBusinessComment(input: TikTokCommentReplyInput): Promise<TikTokApiResponse>;
  createBusinessComment(input: Omit<TikTokCommentReplyInput, "commentId">): Promise<TikTokApiResponse>;
}

export interface TikTokSocialClient extends TikTokSocialProviderClient {
  providerClient: TikTokSocialProviderClient;
}

export interface TikTokLiveCheckOptions extends TikTokSocialClientOptions {
  client?: Pick<TikTokSocialClient, "getUserInfo" | "listVideos">;
}

export interface TikTokWebhookPayload {
  event?: string;
  event_name?: string;
  client_key?: string;
  event_id?: string;
  create_time?: number;
  user_open_id?: string;
  data?: TikTokSocialJsonObject;
  [key: string]: TikTokSocialProviderExtensionValue;
}

export interface TikTokSignedWebhook {
  rawBody: string;
  contentType?: string;
  timestamp?: number;
  signature?: string;
  payload: TikTokWebhookPayload;
}

export interface TikTokSignatureParts {
  timestamp?: number;
  signature?: string;
}

export interface ValidateTikTokWebhookSignatureInput {
  clientSecret: string;
  rawBody: string | Buffer;
  signatureHeader: string;
  nowSeconds?: number;
  toleranceSeconds?: number;
}

export interface ParseTikTokWebhookOptions {
  clientSecret?: string;
  requireSignature?: boolean;
  toleranceSeconds?: number;
  nowSeconds?: number;
}
