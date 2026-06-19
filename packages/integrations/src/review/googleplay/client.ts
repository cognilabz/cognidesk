import {
  createGooglePlayFullApiGeneratedClient,
  type GooglePlayGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  GOOGLEPLAY_FULL_API_OPERATION_BY_ID,
  type GooglePlayFullApiOperationId,
} from "./full-api-operations.generated.js";
import type {
  GooglePlayClientRequestInput,
  GooglePlayHttpMethod,
  GooglePlayOperationRequestInput,
  GooglePlayResource,
  GooglePlayReview,
  GooglePlayReviewReplyResponse,
  GooglePlayReviewsClient,
  GooglePlayReviewsClientOptions,
  GooglePlayReviewsListResponse,
} from "./contracts.js";
import { googlePlayOperationUrl, googlePlayRequest } from "./request.js";
import { createGooglePlayServiceAccountTokenProvider } from "./service-account.js";

export function createGooglePlayReviewsClient(options: GooglePlayReviewsClientOptions): GooglePlayReviewsClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://androidpublisher.googleapis.com/androidpublisher/v3").replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;
  const tokenProvider = options.getAccessToken
    ?? (options.serviceAccount
      ? createGooglePlayServiceAccountTokenProvider({
        serviceAccount: options.serviceAccount,
        fetch: fetchImpl,
      })
      : undefined);
  const requestOptions = tokenProvider ? { ...options, getAccessToken: tokenProvider } : options;
  const request = <T = GooglePlayResource>(
    method: GooglePlayHttpMethod,
    path: string,
    input: GooglePlayClientRequestInput = {},
  ) => googlePlayRequest<T>({
    url: googlePlayOperationUrl(
      (options.apiBaseUrl ?? "https://androidpublisher.googleapis.com").replace(/\/+$/, ""),
      path,
      input.pathParams,
      input.query,
    ),
    method,
    options: requestOptions,
    fetch: fetchImpl,
    body: input.body,
  });
  const requestOperation = async (
    operationId: GooglePlayFullApiOperationId | string,
    input: GooglePlayOperationRequestInput = {},
  ) => {
    const operation = GOOGLEPLAY_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) throw new Error(`Unknown Google Play Discovery operation '${operationId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi = createGooglePlayFullApiGeneratedClient(requestOperation as GooglePlayGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as GooglePlayGeneratedOperationCaller,
    async listReviews(input = {}) {
      const packageName = input.packageName ?? options.packageName;
      const url = new URL(`${apiBaseUrl}/applications/${encodeURIComponent(packageName)}/reviews`);
      if (input.maxResults !== undefined) url.searchParams.set("maxResults", String(input.maxResults));
      if (input.startIndex !== undefined) url.searchParams.set("startIndex", String(input.startIndex));
      if (input.token) url.searchParams.set("token", input.token);
      if (input.translationLanguage) url.searchParams.set("translationLanguage", input.translationLanguage);
      return googlePlayRequest<GooglePlayReviewsListResponse>({
        url: url.toString(),
        method: "GET",
        options: requestOptions,
        fetch: fetchImpl,
      });
    },
    async getReview(reviewId, input = {}) {
      const packageName = input.packageName ?? options.packageName;
      const url = new URL(
        `${apiBaseUrl}/applications/${encodeURIComponent(packageName)}/reviews/${encodeURIComponent(reviewId)}`,
      );
      if (input.translationLanguage) url.searchParams.set("translationLanguage", input.translationLanguage);
      return googlePlayRequest<GooglePlayReview>({
        url: url.toString(),
        method: "GET",
        options: requestOptions,
        fetch: fetchImpl,
      });
    },
    async replyToReview(reviewId, input) {
      if (input.replyText.length > 350) {
        throw new Error("Google Play review replies must be 350 characters or fewer.");
      }
      const packageName = input.packageName ?? options.packageName;
      return googlePlayRequest<GooglePlayReviewReplyResponse>({
        url: `${apiBaseUrl}/applications/${encodeURIComponent(packageName)}/reviews/${encodeURIComponent(reviewId)}:reply`,
        method: "POST",
        options: requestOptions,
        fetch: fetchImpl,
        body: { replyText: input.replyText },
      });
    },
  };
}
