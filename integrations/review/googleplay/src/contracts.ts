import type { androidpublisher_v3 } from "@googleapis/androidpublisher";

export type GooglePlayAndroidPublisherClient = androidpublisher_v3.Androidpublisher;
export type GooglePlaySdkAuth = Exclude<NonNullable<androidpublisher_v3.Params$Resource$Reviews$List["auth"]>, string>;

export interface GooglePlayServiceAccountCredentials {
  clientEmail: string;
  privateKey: string;
  privateKeyId?: string;
  scopes?: string[];
  subject?: string;
}

export interface GooglePlayReviewsClientOptions {
  packageName: string;
  rawClient?: Pick<GooglePlayAndroidPublisherClient, "reviews">;
  auth?: GooglePlaySdkAuth;
  accessToken?: string;
  getAccessToken?: () => string | Promise<string>;
  serviceAccount?: GooglePlayServiceAccountCredentials;
  scopes?: string[];
}

export interface GooglePlayReviewsCredentialStatusInput {
  serviceAccountConfigured?: boolean;
  accessTokenConfigured?: boolean;
  tokenSupplierConfigured?: boolean;
  packageName?: string;
  scopes?: string[];
  expiresAt?: string;
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

export type GooglePlayReview = androidpublisher_v3.Schema$Review;
export type GooglePlayReviewsListResponse = androidpublisher_v3.Schema$ReviewsListResponse;
export type GooglePlayReviewReplyResponse = androidpublisher_v3.Schema$ReviewsReplyResponse;

export type GooglePlayReviewsOperationAlias =
  | "googleplay.reviews.list"
  | "googleplay.reviews.get"
  | "googleplay.reviews.reply";

export interface GooglePlayReviewsOperationInputMap {
  "googleplay.reviews.list": GooglePlayReviewsListInput | undefined;
  "googleplay.reviews.get": { reviewId: string } & GooglePlayReviewsGetInput;
  "googleplay.reviews.reply": { reviewId: string } & GooglePlayReviewReplyInput;
}

export interface GooglePlayReviewsOperationOutputMap {
  "googleplay.reviews.list": GooglePlayReviewsListResponse;
  "googleplay.reviews.get": GooglePlayReview;
  "googleplay.reviews.reply": GooglePlayReviewReplyResponse;
}

export type GooglePlayReviewsOperationHandler<K extends GooglePlayReviewsOperationAlias> = (
  input: GooglePlayReviewsOperationInputMap[K],
) => Promise<GooglePlayReviewsOperationOutputMap[K]>;

export type GooglePlayReviewsOperationHandlers = {
  [K in GooglePlayReviewsOperationAlias]: GooglePlayReviewsOperationHandler<K>;
};

export interface GooglePlayReviewsClient {
  rawClient: Pick<GooglePlayAndroidPublisherClient, "reviews">;
  handlers: GooglePlayReviewsOperationHandlers;
  execute<K extends GooglePlayReviewsOperationAlias>(
    alias: K,
    input: GooglePlayReviewsOperationInputMap[K],
  ): Promise<GooglePlayReviewsOperationOutputMap[K]>;
  listReviews(input?: GooglePlayReviewsListInput): Promise<GooglePlayReviewsListResponse>;
  getReview(reviewId: string, input?: GooglePlayReviewsGetInput): Promise<GooglePlayReview>;
  replyToReview(reviewId: string, input: GooglePlayReviewReplyInput): Promise<GooglePlayReviewReplyResponse>;
}

export interface GooglePlayReviewsLiveCheckOptions extends GooglePlayReviewsClientOptions {
  client?: Pick<GooglePlayReviewsClient, "listReviews">;
}
