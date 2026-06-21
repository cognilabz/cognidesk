import {
  androidpublisher,
  auth,
  type androidpublisher_v3,
} from "@googleapis/androidpublisher";
import { IntegrationError, normalizeIntegrationError } from "@cognidesk/integration-kit";
import type {
  GooglePlayReviewsClient,
  GooglePlayReviewsClientOptions,
  GooglePlayReviewReplyInput,
  GooglePlaySdkAuth,
} from "./contracts.js";

const androidPublisherScope = "https://www.googleapis.com/auth/androidpublisher";

export function createGooglePlayReviewsClient(options: GooglePlayReviewsClientOptions): GooglePlayReviewsClient {
  const rawClient = options.rawClient ?? androidpublisher({
    version: "v3",
    ...(options.auth ? { auth: options.auth } : {}),
  });

  return {
    rawClient,
    async listReviews(input = {}) {
      const authClient = await resolveGooglePlayAuth(options);
      const params: androidpublisher_v3.Params$Resource$Reviews$List = {
        packageName: input.packageName ?? options.packageName,
      };
      if (input.maxResults !== undefined) params.maxResults = input.maxResults;
      if (input.startIndex !== undefined) params.startIndex = input.startIndex;
      if (input.token !== undefined) params.token = input.token;
      if (input.translationLanguage !== undefined) params.translationLanguage = input.translationLanguage;
      if (authClient) params.auth = authClient;
      const response = await rawClient.reviews.list(params);
      return response.data;
    },
    async getReview(reviewId, input = {}) {
      const authClient = await resolveGooglePlayAuth(options);
      const params: androidpublisher_v3.Params$Resource$Reviews$Get = {
        packageName: input.packageName ?? options.packageName,
        reviewId,
      };
      if (input.translationLanguage !== undefined) params.translationLanguage = input.translationLanguage;
      if (authClient) params.auth = authClient;
      const response = await rawClient.reviews.get(params);
      return response.data;
    },
    async replyToReview(reviewId, input: GooglePlayReviewReplyInput) {
      if (input.replyText.length > 350) {
        throw new IntegrationError(
          "provider-validation",
          "Google Play review replies must be 350 characters or fewer.",
          { providerPackageId: "review.googleplay", provider: "googleplay" },
        );
      }
      const authClient = await resolveGooglePlayAuth(options);
      try {
        const response = await rawClient.reviews.reply({
          packageName: input.packageName ?? options.packageName,
          reviewId,
          requestBody: { replyText: input.replyText },
          ...(authClient ? { auth: authClient } : {}),
        });
        return response.data;
      } catch (error) {
        throw normalizeIntegrationError(error, {
          providerPackageId: "review.googleplay",
          provider: "googleplay",
          operationAlias: "googleplay.reviews.reply",
        });
      }
    },
  };
}

async function resolveGooglePlayAuth(options: GooglePlayReviewsClientOptions): Promise<GooglePlaySdkAuth | undefined> {
  if (options.auth) return options.auth;
  if (options.getAccessToken) return await options.getAccessToken();
  if (options.accessToken) return options.accessToken;
  if (options.serviceAccount) {
    const jwtOptions = {
      email: options.serviceAccount.clientEmail,
      key: options.serviceAccount.privateKey,
      scopes: options.scopes ?? options.serviceAccount.scopes ?? [androidPublisherScope],
      ...(options.serviceAccount.privateKeyId ? { keyId: options.serviceAccount.privateKeyId } : {}),
      ...(options.serviceAccount.subject ? { subject: options.serviceAccount.subject } : {}),
    };
    return new auth.JWT(jwtOptions) as GooglePlaySdkAuth;
  }
  return undefined;
}

export type GooglePlayAndroidPublisherV3 = androidpublisher_v3.Androidpublisher;
