import { IntegrationError, normalizeIntegrationError } from "@cognidesk/integration-kit";
import type {
  AppStoreAppResponse,
  AppStoreCustomerReviewResponseDocument,
  AppStoreHttpMethod,
  AppStoreListReviewsInput,
  AppStoreRawRequestInput,
  AppStoreReviewResponse,
  AppStoreReviewResponseInput,
  AppStoreReviewsClient,
  AppStoreReviewsClientOptions,
  AppStoreReviewsListResponse,
  AppStoreReviewsProviderPayload,
  AppStoreReviewsProviderQuery,
} from "./contracts.js";
import { createAppStoreConnectJwt } from "./jwt.js";

export function createAppStoreReviewsClient(options: AppStoreReviewsClientOptions): AppStoreReviewsClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://api.appstoreconnect.apple.com").replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;
  const rawClient = {
    request: <T = unknown>(input: AppStoreRawRequestInput) =>
      appStoreRequest<T>({
        url: appStoreOperationUrl(apiBaseUrl, input.path, {}, input.query),
        method: input.method,
        options,
        fetch: fetchImpl,
        body: input.body,
      }),
  };

  return {
    rawClient,
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
        body: reviewResponseBody(input),
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

export async function appStoreRequest<T>(input: {
  url: string;
  method: AppStoreHttpMethod;
  options: AppStoreReviewsClientOptions;
  fetch: typeof fetch;
  body?: AppStoreReviewsProviderPayload | undefined;
}): Promise<T> {
  const jwt = await resolveJwt(input.options);
  const response = await input.fetch(input.url, {
    method: input.method,
    headers: {
      authorization: `Bearer ${jwt}`,
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  if (response.status === 204) return undefined as T;
  const text = await response.text();
  const body = (text ? JSON.parse(text) : {}) as T & { errors?: Array<{ detail?: string; title?: string }> };
  if (!response.ok) {
    const firstError = body.errors?.[0];
    throw normalizeIntegrationError(
      new Error(firstError?.detail ?? firstError?.title ?? `App Store Connect API returned ${response.status}.`),
      { providerPackageId: "review.appstore", provider: "appstore" },
    );
  }
  return body as T;
}

export function appStoreOperationUrl(
  apiBaseUrl: string,
  path: string,
  pathParams: Record<string, string | number | boolean | undefined> = {},
  query?: AppStoreReviewsProviderQuery,
) {
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new IntegrationError(
      "provider-validation",
      `Missing App Store Connect path parameter '${key}'.`,
      { providerPackageId: "review.appstore", provider: "appstore" },
    );
    return encodeURIComponent(String(value));
  });
  const url = new URL(resolvedPath.startsWith("/") ? resolvedPath : `/${resolvedPath}`, apiBaseUrl);
  appendAppStoreQuery(url.searchParams, query);
  return url.toString();
}

export function applyListQuery(
  url: URL,
  input: AppStoreListReviewsInput | Pick<AppStoreListReviewsInput, "include" | "fields">,
) {
  if ("limit" in input && input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
  if ("sort" in input && input.sort) url.searchParams.set("sort", input.sort);
  if ("cursor" in input && input.cursor) url.searchParams.set("cursor", input.cursor);
  if (input.include?.length) url.searchParams.set("include", input.include.join(","));
  for (const [resource, fields] of Object.entries(input.fields ?? {})) {
    if (fields?.length) url.searchParams.set(`fields[${resource}]`, fields.join(","));
  }
  if ("filter" in input) {
    for (const [key, value] of Object.entries(input.filter ?? {})) {
      if (value === undefined) continue;
      url.searchParams.set(`filter[${key}]`, Array.isArray(value) ? value.join(",") : value);
    }
  }
}

export function normalizeAppStoreReviewsPageUrl(pageUrl: string, apiBaseUrl: string, appId: string) {
  const url = new URL(pageUrl);
  const baseUrl = new URL(apiBaseUrl);
  const expectedPath = `/v1/apps/${encodeURIComponent(appId)}/customerReviews`;
  if (url.origin !== baseUrl.origin || url.pathname !== expectedPath) {
    throw new IntegrationError(
      "provider-validation",
      "App Store review page URL must come from the configured app's customerReviews pagination links.",
      { providerPackageId: "review.appstore", provider: "appstore" },
    );
  }
  return url.toString();
}

function reviewResponseBody(input: AppStoreReviewResponseInput) {
  return {
    data: {
      type: "customerReviewResponses",
      attributes: { responseBody: input.responseBody },
      relationships: {
        review: {
          data: { type: "customerReviews", id: input.reviewId },
        },
      },
    },
  };
}

function appendAppStoreQuery(params: URLSearchParams, query?: AppStoreReviewsProviderQuery) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      params.set(key, value.map(String).join(","));
      continue;
    }
    params.set(key, String(value));
  }
}

async function resolveJwt(options: AppStoreReviewsClientOptions) {
  if (options.jwtFactory) return await options.jwtFactory();
  if (!options.privateKey) {
    throw new IntegrationError(
      "credential-missing",
      "App Store Connect private key or jwtFactory is required.",
      { providerPackageId: "review.appstore", provider: "appstore" },
    );
  }
  return createAppStoreConnectJwt({
    issuerId: options.issuerId,
    keyId: options.keyId,
    privateKey: options.privateKey,
  });
}
