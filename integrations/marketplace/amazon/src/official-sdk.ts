import * as amazonSpApiSdk from "@amazon-sp-api-release/amazon-sp-api-sdk-js";
import type {
  AmazonCreateSubscriptionInput,
  AmazonMarketplaceClientOptions,
  AmazonMarketplaceProviderPayload,
  AmazonOrdersIncludedData,
  AmazonRestrictedDataTokenRequest,
} from "./contracts.js";
import { endpointBaseUrl } from "./request.js";

export interface AmazonSpApiOfficialApiClient {
  defaultHeaders?: Record<string, string>;
  timeout?: number;
  enableAutoRetrievalAccessToken?: (
    clientId: string,
    clientSecret: string,
    refreshToken?: string | null,
    scope?: string | null,
  ) => AmazonSpApiOfficialApiClient;
  enableAutoRetrievalRestrictedDataToken?: (
    clientId: string,
    clientSecret: string,
    refreshToken: string,
    dataElements: string[],
  ) => AmazonSpApiOfficialApiClient;
  applyRestrictedDataToken?: (restrictedDataToken: string) => AmazonSpApiOfficialApiClient;
  applyXAmzAccessTokenToRequest?: (accessOrRdtToken: string) => AmazonSpApiOfficialApiClient;
}

export type AmazonSpApiOfficialApiClientConstructor = new (basePath?: string) => AmazonSpApiOfficialApiClient;

export interface AmazonOrdersV0SdkApi {
  getOrders(marketplaceIds: string[], opts?: AmazonOrdersV0SdkSearchInput): Promise<unknown>;
  getOrder(orderId: string): Promise<unknown>;
  getOrderBuyerInfo(orderId: string): Promise<unknown>;
  getOrderItems(orderId: string, opts?: { nextToken?: string | undefined }): Promise<unknown>;
  getOrderItemsBuyerInfo(orderId: string, opts?: { nextToken?: string | undefined }): Promise<unknown>;
}

export interface AmazonOrdersV0SdkSearchInput {
  createdAfter?: string | undefined;
  createdBefore?: string | undefined;
  lastUpdatedAfter?: string | undefined;
  lastUpdatedBefore?: string | undefined;
  orderStatuses?: string[] | undefined;
  fulfillmentChannels?: string[] | undefined;
  paymentMethods?: string[] | undefined;
  buyerEmail?: string | undefined;
  sellerOrderId?: string | undefined;
  maxResultsPerPage?: number | undefined;
  easyShipShipmentStatuses?: string[] | undefined;
  electronicInvoiceStatuses?: string[] | undefined;
  nextToken?: string | undefined;
  amazonOrderIds?: string[] | undefined;
}

export interface AmazonOrdersV2026SearchSdkApi {
  searchOrders(opts?: AmazonOrdersV2026SdkSearchInput): Promise<unknown>;
}

export interface AmazonOrdersV2026GetSdkApi {
  getOrder(orderId: string, opts?: { includedData?: AmazonOrdersIncludedData[] | undefined }): Promise<unknown>;
}

export interface AmazonOrdersV2026SdkSearchInput {
  createdAfter?: Date | undefined;
  createdBefore?: Date | undefined;
  lastUpdatedAfter?: Date | undefined;
  lastUpdatedBefore?: Date | undefined;
  fulfillmentStatuses?: string[] | undefined;
  marketplaceIds?: string[] | undefined;
  fulfilledBy?: string[] | undefined;
  maxResultsPerPage?: number | undefined;
  paginationToken?: string | undefined;
  includedData?: AmazonOrdersIncludedData[] | undefined;
}

export interface AmazonSellersSdkApi {
  getMarketplaceParticipations(): Promise<unknown>;
}

export interface AmazonNotificationsSdkApi {
  getDestinations(): Promise<unknown>;
  getDestination(destinationId: string): Promise<unknown>;
  createSubscription(
    notificationType: string,
    body: Omit<AmazonCreateSubscriptionInput, "notificationType" | "marketplaceIds">,
  ): Promise<unknown>;
  getSubscription(notificationType: string, opts?: { payloadVersion?: string | undefined }): Promise<unknown>;
  deleteSubscriptionById(subscriptionId: string, notificationType: string): Promise<unknown>;
}

export interface AmazonSolicitationsSdkApi {
  getSolicitationActionsForOrder(amazonOrderId: string, marketplaceIds: string[]): Promise<unknown>;
  createProductReviewAndSellerFeedbackSolicitation(amazonOrderId: string, marketplaceIds: string[]): Promise<unknown>;
}

export interface AmazonTokensSdkApi {
  createRestrictedDataToken(body: AmazonRestrictedDataTokenRequest): Promise<unknown>;
}

export interface AmazonSpApiOfficialSdk {
  SellersSpApi?: {
    ApiClient: AmazonSpApiOfficialApiClientConstructor;
    SellersApi: new (apiClient: AmazonSpApiOfficialApiClient) => AmazonSellersSdkApi;
  };
  OrdersSpApi?: {
    ApiClient: AmazonSpApiOfficialApiClientConstructor;
    OrdersV0Api: new (apiClient: AmazonSpApiOfficialApiClient) => AmazonOrdersV0SdkApi;
  };
  Orders_v2026SpApi?: {
    ApiClient: AmazonSpApiOfficialApiClientConstructor;
    SearchOrdersApi: new (apiClient: AmazonSpApiOfficialApiClient) => AmazonOrdersV2026SearchSdkApi;
    GetOrderApi: new (apiClient: AmazonSpApiOfficialApiClient) => AmazonOrdersV2026GetSdkApi;
  };
  NotificationsSpApi?: {
    ApiClient: AmazonSpApiOfficialApiClientConstructor;
    NotificationsApi: new (apiClient: AmazonSpApiOfficialApiClient) => AmazonNotificationsSdkApi;
  };
  SolicitationsSpApi?: {
    ApiClient: AmazonSpApiOfficialApiClientConstructor;
    SolicitationsApi: new (apiClient: AmazonSpApiOfficialApiClient) => AmazonSolicitationsSdkApi;
  };
  TokensSpApi?: {
    ApiClient: AmazonSpApiOfficialApiClientConstructor;
    TokensApi: new (apiClient: AmazonSpApiOfficialApiClient) => AmazonTokensSdkApi;
  };
}

export interface AmazonSpApiOfficialSdkApis {
  ordersV0(): AmazonOrdersV0SdkApi;
  ordersV0WithRestrictedDataToken(restrictedDataToken: string): AmazonOrdersV0SdkApi;
  ordersV2026Search(): AmazonOrdersV2026SearchSdkApi;
  ordersV2026Get(): AmazonOrdersV2026GetSdkApi;
  sellers(): AmazonSellersSdkApi;
  notifications(): AmazonNotificationsSdkApi;
  solicitations(): AmazonSolicitationsSdkApi;
  tokens(): AmazonTokensSdkApi;
}

export function getAmazonSpApiOfficialSdk(): AmazonSpApiOfficialSdk {
  return amazonSpApiSdk as AmazonSpApiOfficialSdk;
}

export async function loadAmazonSpApiOfficialSdk(): Promise<AmazonSpApiOfficialSdk> {
  return getAmazonSpApiOfficialSdk();
}

export function createAmazonSpApiOfficialSdkApis(
  options: AmazonMarketplaceClientOptions,
): AmazonSpApiOfficialSdkApis {
  const sdk = options.officialSdk ?? getAmazonSpApiOfficialSdk();

  return {
    ordersV0: () => {
      const namespace = requireAmazonSdkNamespace(sdk.OrdersSpApi, "OrdersSpApi");
      return new namespace.OrdersV0Api(createOfficialApiClient(namespace.ApiClient, options));
    },
    ordersV0WithRestrictedDataToken: (restrictedDataToken) => {
      const namespace = requireAmazonSdkNamespace(sdk.OrdersSpApi, "OrdersSpApi");
      return new namespace.OrdersV0Api(createOfficialApiClient(namespace.ApiClient, options, { restrictedDataToken }));
    },
    ordersV2026Search: () => {
      const namespace = requireAmazonSdkNamespace(sdk.Orders_v2026SpApi, "Orders_v2026SpApi");
      return new namespace.SearchOrdersApi(createOfficialApiClient(namespace.ApiClient, options));
    },
    ordersV2026Get: () => {
      const namespace = requireAmazonSdkNamespace(sdk.Orders_v2026SpApi, "Orders_v2026SpApi");
      return new namespace.GetOrderApi(createOfficialApiClient(namespace.ApiClient, options));
    },
    sellers: () => {
      const namespace = requireAmazonSdkNamespace(sdk.SellersSpApi, "SellersSpApi");
      return new namespace.SellersApi(createOfficialApiClient(namespace.ApiClient, options));
    },
    notifications: () => {
      const namespace = requireAmazonSdkNamespace(sdk.NotificationsSpApi, "NotificationsSpApi");
      return new namespace.NotificationsApi(createOfficialApiClient(namespace.ApiClient, options));
    },
    solicitations: () => {
      const namespace = requireAmazonSdkNamespace(sdk.SolicitationsSpApi, "SolicitationsSpApi");
      return new namespace.SolicitationsApi(createOfficialApiClient(namespace.ApiClient, options));
    },
    tokens: () => {
      const namespace = requireAmazonSdkNamespace(sdk.TokensSpApi, "TokensSpApi");
      return new namespace.TokensApi(createOfficialApiClient(namespace.ApiClient, options));
    },
  };
}

function createOfficialApiClient(
  ApiClient: AmazonSpApiOfficialApiClientConstructor,
  options: AmazonMarketplaceClientOptions,
  auth: { restrictedDataToken?: string } = {},
) {
  const apiBaseUrl = (options.apiBaseUrl ?? endpointBaseUrl(options.endpoint ?? "na")).replace(/\/+$/, "");
  const apiClient = new ApiClient(apiBaseUrl);
  if (options.userAgent) {
    apiClient.defaultHeaders = {
      ...(apiClient.defaultHeaders ?? {}),
      "User-Agent": options.userAgent,
    };
  }
  if (auth.restrictedDataToken) {
    applyAccessToken(apiClient, auth.restrictedDataToken, "restricted data token");
    return apiClient;
  }
  if (options.accessToken) {
    applyAccessToken(apiClient, options.accessToken, "access token");
    return apiClient;
  }
  if (options.lwaClientId && options.lwaClientSecret && options.refreshToken) {
    if (!apiClient.enableAutoRetrievalAccessToken) {
      throw new Error("Amazon official SDK ApiClient does not support LWA access-token auto retrieval.");
    }
    apiClient.enableAutoRetrievalAccessToken(options.lwaClientId, options.lwaClientSecret, options.refreshToken);
  }
  return apiClient;
}

function applyAccessToken(
  apiClient: AmazonSpApiOfficialApiClient,
  token: string,
  tokenLabel: string,
) {
  if (tokenLabel === "restricted data token" && apiClient.applyRestrictedDataToken) {
    apiClient.applyRestrictedDataToken(token);
    return;
  }
  if (!apiClient.applyXAmzAccessTokenToRequest) {
    throw new Error(`Amazon official SDK ApiClient does not support applying an ${tokenLabel}.`);
  }
  apiClient.applyXAmzAccessTokenToRequest(token);
}

function requireAmazonSdkNamespace<T>(
  namespace: T | undefined,
  name: string,
): T {
  if (!namespace) {
    throw new Error(`Amazon official SDK namespace '${name}' is unavailable.`);
  }
  return namespace;
}

export function stripUndefinedAmazonPayload<T extends AmazonMarketplaceProviderPayload>(input: T): T {
  return Object.fromEntries(Object.entries(input).filter(([, value]) => value !== undefined)) as T;
}
