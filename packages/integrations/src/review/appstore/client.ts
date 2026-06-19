import {
  createAppStoreFullApiGeneratedClient,
  type AppStoreGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  APPSTORE_FULL_API_OPERATION_BY_ID,
  type AppStoreFullApiOperationId,
} from "./full-api-operations.generated.js";
import type {
  AppStoreAppResponse,
  AppStoreClientRequestInput,
  AppStoreCustomerReviewResponseDocument,
  AppStoreHttpMethod,
  AppStoreOperationRequestInput,
  AppStoreReviewResponse,
  AppStoreReviewsClient,
  AppStoreReviewsClientOptions,
  AppStoreReviewsListResponse,
  AppStoreResource,
} from "./contracts.js";
import {
  appStoreOperationUrl,
  appStoreRequest,
  applyListQuery,
  normalizeAppStoreReviewsPageUrl,
} from "./request.js";

export function createAppStoreReviewsClient(options: AppStoreReviewsClientOptions): AppStoreReviewsClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://api.appstoreconnect.apple.com").replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;
  const request = <T = AppStoreResource>(
    method: AppStoreHttpMethod,
    path: string,
    input: AppStoreClientRequestInput = {},
  ) => appStoreRequest<T>({
    url: appStoreOperationUrl(apiBaseUrl, path, input.pathParams, input.query),
    method,
    options,
    fetch: fetchImpl,
    body: input.body,
  });
  const requestOperation = async (
    operationId: AppStoreFullApiOperationId | string,
    input: AppStoreOperationRequestInput = {},
  ) => {
    const operation = APPSTORE_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) throw new Error(`Unknown App Store Connect OpenAPI operation '${operationId}'.`);
    return request(operation.method, operation.path, input);
  };
  const fullApi = createAppStoreFullApiGeneratedClient(requestOperation as AppStoreGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as AppStoreGeneratedOperationCaller,
    async listReviews(input = {}) {
      const url = new URL(`${apiBaseUrl}/v1/apps/${encodeURIComponent(options.appId)}/customerReviews`);
      applyListQuery(url, input);
      return appStoreRequest<AppStoreReviewsListResponse>({ url: url.toString(), method: "GET", options, fetch: fetchImpl });
    },
    async listReviewsPage(pageUrl) {
      return appStoreRequest<AppStoreReviewsListResponse>({
        url: normalizeAppStoreReviewsPageUrl(pageUrl, apiBaseUrl, options.appId),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getReview(reviewId, input = {}) {
      const url = new URL(`${apiBaseUrl}/v1/customerReviews/${encodeURIComponent(reviewId)}`);
      applyListQuery(url, input);
      return appStoreRequest<AppStoreReviewResponse>({ url: url.toString(), method: "GET", options, fetch: fetchImpl });
    },
    async createOrUpdateReviewResponse(input) {
      return appStoreRequest<AppStoreCustomerReviewResponseDocument>({
        url: `${apiBaseUrl}/v1/customerReviewResponses`,
        method: "POST",
        options,
        fetch: fetchImpl,
        body: {
          data: {
            type: "customerReviewResponses",
            attributes: { responseBody: input.responseBody },
            relationships: {
              review: {
                data: { type: "customerReviews", id: input.reviewId },
              },
            },
          },
        },
      });
    },
    async updateReviewResponse(input) {
      return appStoreRequest<AppStoreCustomerReviewResponseDocument>({
        url: `${apiBaseUrl}/v1/customerReviewResponses`,
        method: "POST",
        options,
        fetch: fetchImpl,
        body: {
          data: {
            type: "customerReviewResponses",
            attributes: { responseBody: input.responseBody },
            relationships: {
              review: {
                data: { type: "customerReviews", id: input.reviewId },
              },
            },
          },
        },
      });
    },
    async deleteReviewResponse(responseId) {
      await appStoreRequest<void>({
        url: `${apiBaseUrl}/v1/customerReviewResponses/${encodeURIComponent(responseId)}`,
        method: "DELETE",
        options,
        fetch: fetchImpl,
      });
    },
    async getApp() {
      return appStoreRequest<AppStoreAppResponse>({
        url: `${apiBaseUrl}/v1/apps/${encodeURIComponent(options.appId)}?fields%5Bapps%5D=name%2CbundleId%2Csku%2CprimaryLocale`,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
  };
}
