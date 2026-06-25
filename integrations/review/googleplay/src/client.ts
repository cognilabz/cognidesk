import {
  androidpublisher,
  auth,
  type androidpublisher_v3,
} from "@googleapis/androidpublisher";
import { IntegrationError, normalizeIntegrationError } from "@cognidesk/integration-kit";
import type {
  GooglePlayReviewsClient,
  GooglePlayReviewsClientOptions,
  GooglePlayReviewsOperationAlias,
  GooglePlayReviewsOperationHandlers,
  GooglePlayReviewsOperationInputMap,
  GooglePlayReviewReplyInput,
  GooglePlaySdkAuth,
} from "./contracts.js";

const androidPublisherScope = "https://www.googleapis.com/auth/androidpublisher";

export function createGooglePlayReviewsClient(options: GooglePlayReviewsClientOptions): GooglePlayReviewsClient {
  const configuredAuth = normalizeGooglePlaySdkAuth(options.auth);
  const rawClient = options.rawClient ?? androidpublisher({
    version: "v3",
    ...(configuredAuth ? { auth: configuredAuth } : {}),
  });

  const handlers: GooglePlayReviewsOperationHandlers = {
    async "googleplay.reviews.list"(input = {}) {
      const authClient = await resolveGooglePlayAuth(options, configuredAuth);
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
    async "googleplay.reviews.get"(input) {
      const { reviewId } = input;
      const authClient = await resolveGooglePlayAuth(options, configuredAuth);
      const params: androidpublisher_v3.Params$Resource$Reviews$Get = {
        packageName: input.packageName ?? options.packageName,
        reviewId,
      };
      if (input.translationLanguage !== undefined) params.translationLanguage = input.translationLanguage;
      if (authClient) params.auth = authClient;
      const response = await rawClient.reviews.get(params);
      return response.data;
    },
    async "googleplay.reviews.reply"(input) {
      const { reviewId } = input;
      if (input.replyText.length > 350) {
        throw new IntegrationError(
          "provider-validation",
          "Google Play review replies must be 350 characters or fewer.",
          { providerPackageId: "review.googleplay", provider: "googleplay" },
        );
      }
      const authClient = await resolveGooglePlayAuth(options, configuredAuth);
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

  const execute = (<K extends GooglePlayReviewsOperationAlias>(
    alias: K,
    input: GooglePlayReviewsOperationInputMap[K],
  ) => handlers[alias](input as never)) as GooglePlayReviewsClient["execute"];

  return {
    rawClient,
    handlers,
    execute,
    listReviews(input) {
      return handlers["googleplay.reviews.list"](input);
    },
    getReview(reviewId, input = {}) {
      return handlers["googleplay.reviews.get"]({ ...input, reviewId });
    },
    replyToReview(reviewId, input: GooglePlayReviewReplyInput) {
      return handlers["googleplay.reviews.reply"]({ ...input, reviewId });
    },
  };
}

async function resolveGooglePlayAuth(
  options: GooglePlayReviewsClientOptions,
  configuredAuth: GooglePlaySdkAuth | undefined,
): Promise<GooglePlaySdkAuth | undefined> {
  if (configuredAuth) return configuredAuth;
  if (options.getAccessToken) return googlePlayOAuthAccessTokenAuth(await options.getAccessToken());
  if (options.accessToken) return googlePlayOAuthAccessTokenAuth(options.accessToken);
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

function normalizeGooglePlaySdkAuth(authClient: unknown): GooglePlaySdkAuth | undefined {
  if (authClient === undefined) return undefined;
  if (typeof authClient === "string") {
    throw new IntegrationError(
      "provider-validation",
      "Google Play auth strings are treated by googleapis-common as API keys; use accessToken, getAccessToken, serviceAccount, or an official Google auth client for OAuth bearer auth.",
      { providerPackageId: "review.googleplay", provider: "googleplay" },
    );
  }
  return authClient as GooglePlaySdkAuth;
}

function googlePlayOAuthAccessTokenAuth(accessToken: string): GooglePlaySdkAuth {
  const oauthClient = new auth.OAuth2();
  oauthClient.setCredentials({ access_token: accessToken });
  return oauthClient as GooglePlaySdkAuth;
}

export type GooglePlayAndroidPublisherV3 = androidpublisher_v3.Androidpublisher;
