import type {
  GooglePlayFullApiGeneratedClient,
  GooglePlayGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type GooglePlayReviewsJsonPrimitive = string | number | boolean | null;
export type GooglePlayReviewsJsonValue =
  | GooglePlayReviewsJsonPrimitive
  | GooglePlayReviewsJsonObject
  | readonly GooglePlayReviewsJsonValue[];
export type GooglePlayReviewsProviderExtensionValue = GooglePlayReviewsJsonValue | object | undefined;
export interface GooglePlayReviewsJsonObject {
  [key: string]: GooglePlayReviewsProviderExtensionValue;
}
export type GooglePlayReviewsProviderPayload = GooglePlayReviewsJsonObject | object;
export type GooglePlayReviewsProviderQuery = Record<string, GooglePlayReviewsProviderExtensionValue>;
export interface GooglePlayReviewsProviderResponse extends GooglePlayReviewsJsonObject {}
export interface GooglePlayReviewsProviderExtensionFields extends GooglePlayReviewsJsonObject {}

export interface GooglePlayReviewsCredentialStatusInput {
  serviceAccountConfigured?: boolean;
  accessTokenConfigured?: boolean;
  tokenSupplierConfigured?: boolean;
  packageName?: string;
  scopes?: string[];
  expiresAt?: string;
}

export interface GooglePlayReviewsClientOptions {
  accessToken?: string;
  getAccessToken?: () => string | Promise<string>;
  serviceAccount?: GooglePlayServiceAccountCredentials;
  packageName: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export interface GooglePlayServiceAccountCredentials {
  clientEmail: string;
  privateKey: string;
  privateKeyId?: string;
  tokenUri?: string;
  scopes?: string[];
  subject?: string;
}

export interface GooglePlayServiceAccountTokenProviderOptions {
  serviceAccount: GooglePlayServiceAccountCredentials;
  scopes?: string[];
  fetch?: typeof fetch;
  now?: () => number;
  lifetimeSeconds?: number;
}

export interface GooglePlayServiceAccountTokenResponse {
  access_token?: string;
  token_type?: string;
  expires_in?: number;
  error?: string;
  error_description?: string;
  [key: string]: GooglePlayReviewsProviderExtensionValue;
}

export interface GooglePlayReviewsListInput {
  packageName?: string;
  maxResults?: number;
  startIndex?: number;
  token?: string;
  translationLanguage?: string;
}

export interface GooglePlayReviewsGetInput {
  packageName?: string;
  translationLanguage?: string;
}

export interface GooglePlayReviewReplyInput {
  packageName?: string;
  replyText: string;
}

export type GooglePlayReviewStarRating = 1 | 2 | 3 | 4 | 5;

export interface GooglePlayTimestamp {
  seconds?: string;
  nanos?: number;
}

export interface GooglePlayDeviceMetadata {
  productName?: string;
  manufacturer?: string;
  deviceClass?: string;
  screenWidthPx?: number;
  screenHeightPx?: number;
  nativePlatform?: string;
  screenDensityDpi?: number;
  glEsVersion?: number;
  cpuModel?: string;
  cpuMake?: string;
  ramMb?: number;
  [key: string]: GooglePlayReviewsProviderExtensionValue;
}

export interface GooglePlayUserComment {
  text?: string;
  lastModified?: GooglePlayTimestamp;
  starRating?: GooglePlayReviewStarRating;
  reviewerLanguage?: string;
  device?: string;
  androidOsVersion?: number;
  appVersionCode?: number;
  appVersionName?: string;
  thumbsUpCount?: number;
  thumbsDownCount?: number;
  deviceMetadata?: GooglePlayDeviceMetadata;
  originalText?: string;
  [key: string]: GooglePlayReviewsProviderExtensionValue;
}

export interface GooglePlayDeveloperComment {
  text?: string;
  lastModified?: GooglePlayTimestamp;
  [key: string]: GooglePlayReviewsProviderExtensionValue;
}

export interface GooglePlayReviewComment {
  userComment?: GooglePlayUserComment;
  developerComment?: GooglePlayDeveloperComment;
  [key: string]: GooglePlayReviewsProviderExtensionValue;
}

export interface GooglePlayReview {
  reviewId?: string;
  authorName?: string;
  comments?: GooglePlayReviewComment[];
  [key: string]: GooglePlayReviewsProviderExtensionValue;
}

export interface GooglePlayReviewsListResponse {
  reviews?: GooglePlayReview[];
  tokenPagination?: {
    nextPageToken?: string;
    previousPageToken?: string;
    [key: string]: GooglePlayReviewsProviderExtensionValue;
  };
  pageInfo?: {
    totalResults?: number;
    resultPerPage?: number;
    startIndex?: number;
    [key: string]: GooglePlayReviewsProviderExtensionValue;
  };
  [key: string]: GooglePlayReviewsProviderExtensionValue;
}

export interface GooglePlayReviewReplyResponse {
  result?: {
    replyText?: string;
    lastEdited?: GooglePlayTimestamp;
    [key: string]: GooglePlayReviewsProviderExtensionValue;
  };
  [key: string]: GooglePlayReviewsProviderExtensionValue;
}

export type GooglePlayHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface GooglePlayResource {
  [key: string]: GooglePlayReviewsProviderExtensionValue;
}

export interface GooglePlayClientRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: GooglePlayReviewsProviderQuery | undefined;
  body?: GooglePlayReviewsProviderPayload | undefined;
}

export interface GooglePlayOperationRequestInput extends GooglePlayClientRequestInput {}

export interface GooglePlayKnownOperationRequestMap {
  "reviews.list": GooglePlayOperationRequestInput & {
    pathParams: { packageName: string };
    query?: Pick<GooglePlayReviewsListInput, "maxResults" | "startIndex" | "token" | "translationLanguage">;
  };
  "reviews.get": GooglePlayOperationRequestInput & {
    pathParams: { packageName: string; reviewId: string };
    query?: Pick<GooglePlayReviewsGetInput, "translationLanguage">;
  };
  "reviews.reply": GooglePlayOperationRequestInput & {
    pathParams: { packageName: string; reviewId: string };
    body: Pick<GooglePlayReviewReplyInput, "replyText">;
  };
}

export interface GooglePlayKnownOperationResponseMap {
  "reviews.list": GooglePlayReviewsListResponse;
  "reviews.get": GooglePlayReview;
  "reviews.reply": GooglePlayReviewReplyResponse;
}

export type GooglePlayKnownOperationId = keyof GooglePlayKnownOperationRequestMap;

export interface GooglePlayReviewsClient {
  fullApi: GooglePlayFullApiGeneratedClient;
  requestOperation: GooglePlayGeneratedOperationCaller;
  listReviews(input?: GooglePlayReviewsListInput): Promise<GooglePlayReviewsListResponse>;
  getReview(reviewId: string, input?: GooglePlayReviewsGetInput): Promise<GooglePlayReview>;
  replyToReview(reviewId: string, input: GooglePlayReviewReplyInput): Promise<GooglePlayReviewReplyResponse>;
}

export interface GooglePlayReviewsLiveCheckOptions extends GooglePlayReviewsClientOptions {
  client?: Pick<GooglePlayReviewsClient, "listReviews">;
}
