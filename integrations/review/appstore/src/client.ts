import {
  IntegrationError,
  normalizeIntegrationError,
  providerJsonRequest,
  type ProviderQueryValue,
} from "@cognidesk/integration-kit";
import {
  appsCustomerReviewsGetToManyRelated,
  appsGetInstance,
  createClient as createAppStoreConnectSdkClient,
  customerReviewResponsesCreateInstance,
  customerReviewResponsesDeleteInstance,
  customerReviewsGetInstance,
  type AppsCustomerReviewsGetToManyRelatedData,
  type CustomerReviewsGetInstanceData,
  type CustomerReviewResponsesCreateInstanceData,
  type Client as AppStoreConnectSdkClient,
} from "appstore-connect-sdk";
import type {
  AppStoreAppResponse,
  AppStoreCustomerReviewResponseDocument,
  AppStoreListReviewsInput,
  AppStoreReviewResponse,
  AppStoreReviewResponseInput,
  AppStoreReviewsClient,
  AppStoreReviewsClientOptions,
  AppStoreReviewsListResponse,
  AppStoreReviewsProviderClient,
  AppStoreReviewsProviderQuery,
} from "./contracts.js";
import { createAppStoreConnectJwt } from "./jwt.js";

const APP_STORE_CONNECT_DEFAULT_BASE_URL = "https://api.appstoreconnect.apple.com";

export function createAppStoreReviewsClient(options: AppStoreReviewsClientOptions): AppStoreReviewsClient {
  const providerClient = options.providerClient ?? createAppStoreConnectRestProviderClient(options);
  return {
    providerClient,
    listReviews: (input) => providerClient.listReviews(input),
    async listReviewsPage(pageUrl) {
      return providerClient.listReviewsPage(normalizeAppStoreReviewsPageUrl(
        pageUrl,
        options.baseUrl ?? APP_STORE_CONNECT_DEFAULT_BASE_URL,
        options.appId,
      ));
    },
    getReview: (reviewId, input) => providerClient.getReview(reviewId, input),
    createOrUpdateReviewResponse: (input) => providerClient.createOrUpdateReviewResponse(input),
    deleteReviewResponse: (responseId) => providerClient.deleteReviewResponse(responseId),
    getApp: () => providerClient.getApp(),
  };
}

export function createAppStoreConnectRestProviderClient(
  options: Omit<AppStoreReviewsClientOptions, "providerClient">,
): AppStoreReviewsProviderClient {
  if (shouldUseAppStoreConnectSdk(options)) return createAppStoreConnectSdkProviderClient(options);
  if (!hasAppStoreAuth(options)) return createUnconfiguredAppStoreProviderClient();
  assertAppStoreAppId(options.appId);
  return {
    async listReviews(input = {}) {
      return appStoreJsonRequest<AppStoreReviewsListResponse>(options, {
        method: "GET",
        path: "/v1/apps/{id}/customerReviews",
        pathParams: { id: options.appId },
        query: appStoreListReviewsQuery(input),
        operationAlias: "appstore.reviews.list",
      });
    },
    async listReviewsPage(pageUrl) {
      const url = normalizeAppStoreReviewsPageUrl(
        pageUrl,
        options.baseUrl ?? APP_STORE_CONNECT_DEFAULT_BASE_URL,
        options.appId,
      );
      return appStoreJsonRequest<AppStoreReviewsListResponse>(options, {
        method: "GET",
        absoluteUrl: url,
        operationAlias: "appstore.reviews.page",
      });
    },
    async getReview(reviewId, input = {}) {
      return appStoreJsonRequest<AppStoreReviewResponse>(options, {
        method: "GET",
        path: "/v1/customerReviews/{id}",
        pathParams: { id: reviewId },
        query: appStoreListReviewsQuery(input),
        operationAlias: "appstore.reviews.get",
      });
    },
    async createOrUpdateReviewResponse(input) {
      return appStoreJsonRequest<AppStoreCustomerReviewResponseDocument>(options, {
        method: "POST",
        path: "/v1/customerReviewResponses",
        body: appStoreReviewResponseBody(input),
        operationAlias: "appstore.reviewResponses.createOrUpdate",
      });
    },
    async deleteReviewResponse(responseId) {
      await appStoreJsonRequest(options, {
        method: "DELETE",
        path: "/v1/customerReviewResponses/{id}",
        pathParams: { id: responseId },
        operationAlias: "appstore.reviewResponses.delete",
      });
    },
    async getApp() {
      return appStoreJsonRequest<AppStoreAppResponse>(options, {
        method: "GET",
        path: "/v1/apps/{id}",
        pathParams: { id: options.appId },
        operationAlias: "appstore.app.get",
      });
    },
  };
}

export function createAppStoreConnectSdkProviderClient(
  options: Omit<AppStoreReviewsClientOptions, "providerClient">,
): AppStoreReviewsProviderClient {
  if (!hasAppStoreAuth(options)) return createUnconfiguredAppStoreProviderClient();
  const appId = assertAppStoreAppId(options.appId);
  return {
    async listReviews(input = {}) {
      const client = await appStoreConnectSdkClient(options);
      return appStoreSdkResult<AppStoreReviewsListResponse>(await appsCustomerReviewsGetToManyRelated({
        client,
        path: { id: appId },
        query: appStoreSdkListReviewsQuery(input),
        responseStyle: "data",
        throwOnError: true,
      }), "appstore.reviews.list");
    },
    async listReviewsPage(pageUrl) {
      const url = new URL(normalizeAppStoreReviewsPageUrl(
        pageUrl,
        options.baseUrl ?? APP_STORE_CONNECT_DEFAULT_BASE_URL,
        appId,
      ));
      const client = await appStoreConnectSdkClient(options);
      return appStoreSdkResult<AppStoreReviewsListResponse>(await client.get({
        url: `${url.pathname}${url.search}`,
        responseStyle: "data",
        throwOnError: true,
      }), "appstore.reviews.page");
    },
    async getReview(reviewId, input = {}) {
      const client = await appStoreConnectSdkClient(options);
      return appStoreSdkResult<AppStoreReviewResponse>(await customerReviewsGetInstance({
        client,
        path: { id: reviewId },
        query: appStoreSdkReviewQuery(input),
        responseStyle: "data",
        throwOnError: true,
      }), "appstore.reviews.get");
    },
    async createOrUpdateReviewResponse(input) {
      const client = await appStoreConnectSdkClient(options);
      return appStoreSdkResult<AppStoreCustomerReviewResponseDocument>(await customerReviewResponsesCreateInstance({
        client,
        body: appStoreReviewResponseBody(input) as CustomerReviewResponsesCreateInstanceData["body"],
        responseStyle: "data",
        throwOnError: true,
      }), "appstore.reviewResponses.createOrUpdate");
    },
    async deleteReviewResponse(responseId) {
      const client = await appStoreConnectSdkClient(options);
      await customerReviewResponsesDeleteInstance({
        client,
        path: { id: responseId },
        responseStyle: "data",
        throwOnError: true,
      });
    },
    async getApp() {
      const client = await appStoreConnectSdkClient(options);
      return appStoreSdkResult<AppStoreAppResponse>(await appsGetInstance({
        client,
        path: { id: appId },
        query: { "fields[apps]": ["name", "bundleId", "sku", "primaryLocale"] },
        responseStyle: "data",
        throwOnError: true,
      }), "appstore.app.get");
    },
  };
}

export function createUnconfiguredAppStoreProviderClient(): AppStoreReviewsProviderClient {
  const fail = async () => {
    throw new IntegrationError(
      "credential-missing",
      "App Store Connect API credentials are required. Pass issuerId/keyId/privateKey, accessToken/getJwt, or providerClient.",
      { providerPackageId: "review.appstore", provider: "appstore" },
    );
  };
  return {
    listReviews: fail,
    listReviewsPage: fail,
    getReview: fail,
    createOrUpdateReviewResponse: fail,
    deleteReviewResponse: fail,
    getApp: fail,
  };
}

function shouldUseAppStoreConnectSdk(options: Omit<AppStoreReviewsClientOptions, "providerClient">) {
  return Boolean(
    options.sdkClient ||
      (!options.fetch && options.timeoutMs === undefined && options.retry === undefined && !options.signal),
  );
}

async function appStoreConnectSdkClient(
  options: Omit<AppStoreReviewsClientOptions, "providerClient">,
): Promise<AppStoreConnectSdkClient> {
  if (options.sdkClient) return options.sdkClient;
  return createAppStoreConnectSdkClient({
    bearerToken: await appStoreJwt(options),
    ...(options.baseUrl ? { baseUrl: options.baseUrl } : {}),
  });
}

function appStoreSdkResult<T>(result: unknown, operationAlias: string): T {
  if (isRecord(result) && "error" in result && result.error !== undefined) {
    throw normalizeProviderRequestError(result.error, {
      providerPackageId: "review.appstore",
      provider: "appstore",
      operationAlias,
    });
  }
  if (isRecord(result) && "data" in result && ("response" in result || "request" in result || "error" in result)) {
    return result.data as T;
  }
  return result as T;
}

function appStoreSdkListReviewsQuery(
  input: AppStoreListReviewsInput,
): NonNullable<AppsCustomerReviewsGetToManyRelatedData["query"]> {
  const query: Record<string, unknown> = {};
  if (input.limit !== undefined) query.limit = input.limit;
  if (input.sort) query.sort = [input.sort];
  if (input.include?.length) query.include = input.include;
  for (const [resource, fields] of Object.entries(input.fields ?? {})) {
    if (fields?.length) query[`fields[${resource}]`] = fields;
  }
  for (const [key, value] of Object.entries(input.filter ?? {})) {
    if (value === undefined) continue;
    const sdkKey = key === "existsPublishedResponse" ? "exists[publishedResponse]" : `filter[${key}]`;
    query[sdkKey] = Array.isArray(value) ? value : [value];
  }
  return query as NonNullable<AppsCustomerReviewsGetToManyRelatedData["query"]>;
}

function appStoreSdkReviewQuery(
  input: Pick<AppStoreListReviewsInput, "include" | "fields">,
): NonNullable<CustomerReviewsGetInstanceData["query"]> {
  const query: Record<string, unknown> = {};
  if (input.include?.length) query.include = input.include;
  for (const [resource, fields] of Object.entries(input.fields ?? {})) {
    if (fields?.length) query[`fields[${resource}]`] = fields;
  }
  return query as NonNullable<CustomerReviewsGetInstanceData["query"]>;
}

async function appStoreJsonRequest<T>(
  options: Omit<AppStoreReviewsClientOptions, "providerClient">,
  request: {
    method: "GET" | "POST" | "DELETE";
    path?: string;
    absoluteUrl?: string;
    pathParams?: Record<string, string | number | boolean | undefined>;
    query?: Record<string, ProviderQueryValue>;
    body?: unknown;
    operationAlias: string;
  },
): Promise<T> {
  const token = await appStoreJwt(options);
  try {
    if (request.absoluteUrl) {
      const url = new URL(request.absoluteUrl);
      return await providerJsonRequest<T>({
        baseUrl: url.origin,
        path: `${url.pathname}${url.search}`,
        method: request.method,
        accessToken: token,
        fetch: options.fetch,
        signal: options.signal,
        timeoutMs: options.timeoutMs,
        retry: options.retry,
        providerName: `App Store Connect ${request.operationAlias}`,
      });
    }
    return await providerJsonRequest<T>({
      baseUrl: options.baseUrl ?? APP_STORE_CONNECT_DEFAULT_BASE_URL,
      path: request.path ?? "/",
      method: request.method,
      pathParams: request.pathParams,
      query: request.query,
      body: request.body,
      accessToken: token,
      fetch: options.fetch,
      signal: options.signal,
      timeoutMs: options.timeoutMs,
      retry: options.retry,
      providerName: `App Store Connect ${request.operationAlias}`,
    });
  } catch (error) {
    throw normalizeProviderRequestError(error, {
      providerPackageId: "review.appstore",
      provider: "appstore",
      operationAlias: request.operationAlias,
    });
  }
}

async function appStoreJwt(options: Omit<AppStoreReviewsClientOptions, "providerClient">) {
  if (hasNonBlankString(options.accessToken)) return options.accessToken;
  if (options.getJwt) return requireNonBlankJwt(await options.getJwt(), "getJwt");
  if (hasNonBlankString(options.issuerId) && hasNonBlankString(options.keyId) && hasNonBlankString(options.privateKey)) {
    return createAppStoreConnectJwt({
      issuerId: options.issuerId,
      keyId: options.keyId,
      privateKey: options.privateKey,
    });
  }
  throw new IntegrationError(
    "credential-missing",
    "App Store Connect issuerId, keyId, and privateKey are required for JWT auth.",
    { providerPackageId: "review.appstore", provider: "appstore" },
  );
}

function hasAppStoreAuth(options: Omit<AppStoreReviewsClientOptions, "providerClient">) {
  return Boolean(
    options.sdkClient ||
      hasNonBlankString(options.accessToken) ||
      options.getJwt ||
      (hasNonBlankString(options.issuerId) && hasNonBlankString(options.keyId) && hasNonBlankString(options.privateKey)),
  );
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
  const appIdValue = assertAppStoreAppId(appId);
  let url: URL;
  let baseUrl: URL;
  try {
    url = new URL(pageUrl);
    baseUrl = new URL(apiBaseUrl);
  } catch (error) {
    throw new IntegrationError(
      "provider-validation",
      "App Store review page URL must be an absolute App Store Connect customerReviews pagination link.",
      { providerPackageId: "review.appstore", provider: "appstore", cause: error },
    );
  }
  const expectedPath = `/v1/apps/${encodeURIComponent(appIdValue)}/customerReviews`;
  if (url.origin !== baseUrl.origin || url.pathname !== expectedPath) {
    throw new IntegrationError(
      "provider-validation",
      "App Store review page URL must come from the configured app's customerReviews pagination links.",
      { providerPackageId: "review.appstore", provider: "appstore" },
    );
  }
  return url.toString();
}

function assertAppStoreAppId(appId: string | undefined): string {
  if (!hasNonBlankString(appId)) {
    throw new IntegrationError(
      "credential-missing",
      "An App Store Connect app ID is required. Pass appId or providerClient.",
      { providerPackageId: "review.appstore", provider: "appstore" },
    );
  }
  return appId;
}

function requireNonBlankJwt(token: unknown, source: "getJwt"): string {
  if (!hasNonBlankString(token)) {
    throw new IntegrationError(
      "credential-missing",
      `App Store Connect ${source} must return a non-empty JWT.`,
      { providerPackageId: "review.appstore", provider: "appstore" },
    );
  }
  return token;
}

function hasNonBlankString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
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

function appStoreListReviewsQuery(
  input: AppStoreListReviewsInput | Pick<AppStoreListReviewsInput, "include" | "fields">,
) {
  const query: Record<string, ProviderQueryValue> = {};
  if ("limit" in input && input.limit !== undefined) query.limit = input.limit;
  if ("sort" in input && input.sort) query.sort = input.sort;
  if ("cursor" in input && input.cursor) query.cursor = input.cursor;
  if (input.include?.length) query.include = input.include.join(",");
  for (const [resource, fields] of Object.entries(input.fields ?? {})) {
    if (fields?.length) query[`fields[${resource}]`] = fields.join(",");
  }
  if ("filter" in input) {
    for (const [key, value] of Object.entries(input.filter ?? {})) {
      if (value === undefined) continue;
      query[`filter[${key}]`] = Array.isArray(value) ? value.join(",") : value;
    }
  }
  return query;
}

function appStoreReviewResponseBody(input: AppStoreReviewResponseInput) {
  return {
    data: {
      type: "customerReviewResponses",
      attributes: {
        responseBody: input.responseBody,
      },
      relationships: {
        review: {
          data: {
            type: "customerReviews",
            id: input.reviewId,
          },
        },
      },
    },
  };
}

function normalizeProviderRequestError(
  error: unknown,
  context: { providerPackageId: string; provider: string; operationAlias: string },
) {
  return normalizeIntegrationError(error, {
    ...context,
    statusCode: readErrorStatus(error),
    retryable: readErrorRetryable(error),
    details: readErrorPayload(error),
  });
}

function readErrorStatus(error: unknown) {
  if (!isRecord(error)) return undefined;
  const status = error.status ?? error.statusCode;
  return typeof status === "number" ? status : undefined;
}

function readErrorRetryable(error: unknown) {
  const status = readErrorStatus(error);
  return status === undefined ? undefined : status === 429 || status >= 500;
}

function readErrorPayload(error: unknown) {
  if (!isRecord(error) || error.payload === undefined) return undefined;
  return { payload: error.payload };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
