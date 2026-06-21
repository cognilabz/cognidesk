import type { androidpublisher_v3 } from "@googleapis/androidpublisher";

export type GooglePlayAndroidPublisherClient = androidpublisher_v3.Androidpublisher;
export type GooglePlaySdkAuth = NonNullable<androidpublisher_v3.Params$Resource$Reviews$List["auth"]>;

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

export interface GooglePlayReviewsClient {
  rawClient: Pick<GooglePlayAndroidPublisherClient, "reviews">;
  listReviews(input?: GooglePlayReviewsListInput): Promise<GooglePlayReviewsListResponse>;
  getReview(reviewId: string, input?: GooglePlayReviewsGetInput): Promise<GooglePlayReview>;
  replyToReview(reviewId: string, input: GooglePlayReviewReplyInput): Promise<GooglePlayReviewReplyResponse>;
}

export interface GooglePlayReviewsLiveCheckOptions extends GooglePlayReviewsClientOptions {
  client?: Pick<GooglePlayReviewsClient, "listReviews">;
}
