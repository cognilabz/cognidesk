export type AmazonMarketplaceJsonPrimitive = string | number | boolean | null;
export type AmazonMarketplaceJsonValue =
  | AmazonMarketplaceJsonPrimitive
  | AmazonMarketplaceJsonObject
  | readonly AmazonMarketplaceJsonValue[];
export type AmazonMarketplaceProviderExtensionValue = AmazonMarketplaceJsonValue | object | undefined;
export interface AmazonMarketplaceJsonObject {
  [key: string]: AmazonMarketplaceProviderExtensionValue;
}
export type AmazonMarketplaceProviderPayload = AmazonMarketplaceJsonObject | object;
export type AmazonMarketplaceProviderQuery = Record<string, AmazonMarketplaceProviderExtensionValue>;
export interface AmazonMarketplaceProviderResponse extends AmazonMarketplaceJsonObject {}
export interface AmazonMarketplaceProviderExtensionFields extends AmazonMarketplaceJsonObject {}

export interface AmazonMarketplaceClientOptions {
  accessToken?: string;
  restrictedDataToken?: string;
  restrictedDataTokenProvider?: (
    input: AmazonRestrictedDataTokenRequest,
  ) => string | AmazonRestrictedDataTokenResponse | Promise<string | AmazonRestrictedDataTokenResponse>;
  restrictedDataTokenTargetApplication?: string;
  refreshToken?: string;
  lwaClientId?: string;
  lwaClientSecret?: string;
  marketplaceId?: string;
  endpoint?: AmazonSpApiEndpoint;
  apiBaseUrl?: string;
  lwaTokenUrl?: string;
  userAgent?: string;
  region?: string;
  aws?: AmazonAwsSigningOptions;
  fetch?: typeof fetch;
}

export type AmazonSpApiEndpoint = "na" | "eu" | "fe";
export type AmazonSpApiMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface AmazonResource {
  [key: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonMoney {
  CurrencyCode?: string;
  Amount?: string;
}

export interface AmazonAddress {
  Name?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  AddressLine3?: string;
  City?: string;
  County?: string;
  District?: string;
  StateOrRegion?: string;
  PostalCode?: string;
  CountryCode?: string;
  Phone?: string;
  AddressType?: string;
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonBuyerInfo {
  BuyerEmail?: string;
  BuyerName?: string;
  BuyerCounty?: string;
  BuyerTaxInfo?: {
    CompanyLegalName?: string;
    TaxingRegion?: string;
    TaxClassifications?: Array<{ Name?: string; Value?: string }>;
  };
  PurchaseOrderNumber?: string;
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export type AmazonOrderStatus =
  | "Pending"
  | "Unshipped"
  | "PartiallyShipped"
  | "Shipped"
  | "Canceled"
  | "Unfulfillable"
  | "InvoiceUnconfirmed"
  | "PendingAvailability";

export interface AmazonOrder {
  AmazonOrderId?: string;
  SellerOrderId?: string;
  PurchaseDate?: string;
  LastUpdateDate?: string;
  OrderStatus?: AmazonOrderStatus | (string & {});
  FulfillmentChannel?: "AFN" | "MFN" | (string & {});
  SalesChannel?: string;
  OrderChannel?: string;
  ShipServiceLevel?: string;
  OrderTotal?: AmazonMoney;
  NumberOfItemsShipped?: number;
  NumberOfItemsUnshipped?: number;
  PaymentMethod?: string;
  PaymentMethodDetails?: string[];
  MarketplaceId?: string;
  ShipmentServiceLevelCategory?: string;
  EasyShipShipmentStatus?: string;
  CbaDisplayableShippingLabel?: string;
  OrderType?: string;
  EarliestShipDate?: string;
  LatestShipDate?: string;
  EarliestDeliveryDate?: string;
  LatestDeliveryDate?: string;
  IsBusinessOrder?: boolean;
  IsPrime?: boolean;
  IsPremiumOrder?: boolean;
  IsGlobalExpressEnabled?: boolean;
  ReplacedOrderId?: string;
  IsReplacementOrder?: boolean;
  BuyerInfo?: AmazonBuyerInfo;
  ShippingAddress?: AmazonAddress;
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonOrderItem {
  ASIN?: string;
  SellerSKU?: string;
  OrderItemId?: string;
  Title?: string;
  QuantityOrdered?: number;
  QuantityShipped?: number;
  ProductInfo?: { NumberOfItems?: number };
  PointsGranted?: { PointsNumber?: number; PointsMonetaryValue?: AmazonMoney };
  ItemPrice?: AmazonMoney;
  ShippingPrice?: AmazonMoney;
  ItemTax?: AmazonMoney;
  ShippingTax?: AmazonMoney;
  PromotionDiscount?: AmazonMoney;
  ShippingDiscount?: AmazonMoney;
  ConditionId?: string;
  ConditionSubtypeId?: string;
  ConditionNote?: string;
  BuyerInfo?: AmazonBuyerInfo;
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonOrdersPayload<TOrder extends AmazonMarketplaceProviderExtensionValue = AmazonOrder> {
  Orders?: TOrder[];
  NextToken?: string;
  LastUpdatedBefore?: string;
  CreatedBefore?: string;
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonOrderPayload<TOrder extends AmazonMarketplaceProviderExtensionValue = AmazonOrder> {
  Order?: TOrder;
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonOrderItemsPayload<TItem extends AmazonMarketplaceProviderExtensionValue = AmazonOrderItem> {
  AmazonOrderId?: string;
  OrderItems?: TItem[];
  NextToken?: string;
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonOrderItemsResponse<TItem extends AmazonMarketplaceProviderExtensionValue = AmazonOrderItem> {
  payload?: AmazonOrderItemsPayload<TItem>;
  errors?: AmazonSpApiError[];
}

export interface AmazonSpApiError {
  code?: string;
  message?: string;
  details?: string;
}

export interface AmazonOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: AmazonMarketplaceProviderQuery | undefined;
  body?: AmazonMarketplaceProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
}

export interface AmazonAwsSigningOptions {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
  region: string;
  service?: string;
}

export interface AmazonCredentialStatusInput {
  lwaClientConfigured?: boolean;
  refreshTokenConfigured?: boolean;
  accessTokenConfigured?: boolean;
  awsRoleConfigured?: boolean;
  awsRegion?: string;
  marketplaceId?: string;
  notificationDestinationConfigured?: boolean;
  notificationSignatureConfigured?: boolean;
  scopes?: string[];
  expiresAt?: string;
}

export interface AmazonOrderSearchInput {
  marketplaceIds?: string[];
  createdAfter?: string;
  createdBefore?: string;
  lastUpdatedAfter?: string;
  lastUpdatedBefore?: string;
  orderStatuses?: string[];
  fulfillmentChannels?: string[];
  paymentMethods?: string[];
  buyerEmail?: string;
  sellerOrderId?: string;
  maxResultsPerPage?: number;
  nextToken?: string;
  amazonOrderIds?: string[];
  easyShipShipmentStatuses?: string[];
  electronicInvoiceStatuses?: string[];
}

export type AmazonOrdersIncludedData =
  | "BUYER"
  | "RECIPIENT"
  | "FULFILLMENT"
  | "PROCEEDS"
  | "EXPENSE"
  | "PROMOTION"
  | "TAX"
  | "PAYMENT"
  | "CANCELLATION"
  | (string & {});

export interface AmazonOrdersV2026SearchInput {
  marketplaceIds?: string[];
  createdAfter?: string;
  createdBefore?: string;
  lastUpdatedAfter?: string;
  lastUpdatedBefore?: string;
  fulfillmentStatuses?: string[];
  fulfilledBy?: "AMAZON" | "MERCHANT" | (string & {});
  maxResultsPerPage?: number;
  paginationToken?: string;
  amazonOrderIds?: string[];
  includedData?: AmazonOrdersIncludedData[];
}

export interface AmazonOrdersV2026GetInput {
  includedData?: AmazonOrdersIncludedData[];
}

export interface AmazonRestCollection<TItem extends AmazonMarketplaceProviderExtensionValue = AmazonMarketplaceJsonObject> {
  payload?: {
    Orders?: TItem[];
    OrderItems?: TItem[];
    NextToken?: string;
    [key: string]: AmazonMarketplaceProviderExtensionValue;
  };
  errors?: AmazonSpApiError[];
  [key: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonOrdersResponse<TOrder extends AmazonMarketplaceProviderExtensionValue = AmazonOrder> extends AmazonRestCollection<TOrder> {
  payload?: AmazonOrdersPayload<TOrder>;
}

export interface AmazonOrderResponse<TOrder extends AmazonMarketplaceProviderExtensionValue = AmazonOrder> {
  payload?: AmazonOrderPayload<TOrder> | TOrder;
  errors?: AmazonSpApiError[];
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonCreateSubscriptionInput {
  notificationType: string;
  payloadVersion?: string;
  destinationId: string;
  processingDirective?: AmazonMarketplaceJsonObject;
  /** @deprecated Amazon Notifications createSubscription does not accept marketplaceIds as a query parameter. Use processingDirective.eventFilter when supported by the notification type. */
  marketplaceIds?: string[];
  [key: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonGetSubscriptionInput {
  notificationType: string;
  payloadVersion?: string;
}

export interface AmazonDeleteSubscriptionInput {
  notificationType: string;
  subscriptionId: string;
}

export interface AmazonRestrictedResource {
  method: AmazonSpApiMethod;
  path: string;
  dataElements?: string[];
}

export interface AmazonRestrictedDataTokenRequest {
  targetApplication?: string;
  restrictedResources: AmazonRestrictedResource[];
}

export interface AmazonRestrictedDataTokenResponse {
  restrictedDataToken?: string;
  expiresIn?: number;
  [key: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonSolicitationActionsResponse {
  _links?: {
    actions?: Array<{ href?: string; name?: string }>;
    self?: { href?: string };
  };
  _embedded?: AmazonMarketplaceJsonObject;
  errors?: AmazonSpApiError[];
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonMarketplaceParticipation {
  marketplace?: {
    id?: string;
    name?: string;
    countryCode?: string;
    defaultCurrencyCode?: string;
    defaultLanguageCode?: string;
    domainName?: string;
  };
  participation?: {
    isParticipating?: boolean;
    hasSuspendedListings?: boolean;
  };
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonMarketplaceParticipationsResponse {
  payload?: AmazonMarketplaceParticipation[];
  errors?: AmazonSpApiError[];
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonNotificationDestination {
  destinationId?: string;
  name?: string;
  resource?: {
    sqs?: { arn?: string };
    eventBridge?: { name?: string; accountId?: string; region?: string };
    [providerField: string]: AmazonMarketplaceProviderExtensionValue;
  };
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonNotificationDestinationResponse {
  payload?: AmazonNotificationDestination;
  errors?: AmazonSpApiError[];
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonNotificationDestinationsResponse {
  payload?: AmazonNotificationDestination[];
  errors?: AmazonSpApiError[];
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonNotificationSubscription {
  subscriptionId?: string;
  payloadVersion?: string;
  destinationId?: string;
  processingDirective?: AmazonMarketplaceJsonObject;
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonNotificationSubscriptionResponse {
  payload?: AmazonNotificationSubscription;
  errors?: AmazonSpApiError[];
  [providerField: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonKnownOperationRequestMap {
  "ordersV0:getOrders": AmazonOperationRequestInput & { query?: AmazonOrderSearchInput };
  "ordersV0:getOrder": AmazonOperationRequestInput & { pathParams: { orderId: string } };
  "ordersV0:getOrderItems": AmazonOperationRequestInput & { pathParams: { orderId: string }; query?: { NextToken?: string } };
  "tokens_2021-03-01:createRestrictedDataToken": AmazonOperationRequestInput & { body: AmazonRestrictedDataTokenRequest };
  "sellers:getMarketplaceParticipations": AmazonOperationRequestInput;
  "notifications:getDestinations": AmazonOperationRequestInput;
  "notifications:getDestination": AmazonOperationRequestInput & { pathParams: { destinationId: string } };
  "notifications:createSubscription": AmazonOperationRequestInput & {
    pathParams: { notificationType: string };
    body: Omit<AmazonCreateSubscriptionInput, "notificationType">;
  };
  "notifications:getSubscription": AmazonOperationRequestInput & {
    pathParams: { notificationType: string };
    query?: { payloadVersion?: string };
  };
  "notifications:deleteSubscriptionById": AmazonOperationRequestInput & {
    pathParams: { notificationType: string; subscriptionId: string };
  };
}

export interface AmazonKnownOperationResponseMap {
  "ordersV0:getOrders": AmazonOrdersResponse;
  "ordersV0:getOrder": AmazonOrderResponse;
  "ordersV0:getOrderItems": AmazonOrderItemsResponse;
  "tokens_2021-03-01:createRestrictedDataToken": AmazonRestrictedDataTokenResponse;
  "sellers:getMarketplaceParticipations": AmazonMarketplaceParticipationsResponse;
  "notifications:getDestinations": AmazonNotificationDestinationsResponse;
  "notifications:getDestination": AmazonNotificationDestinationResponse;
  "notifications:createSubscription": AmazonNotificationSubscriptionResponse;
  "notifications:getSubscription": AmazonNotificationSubscriptionResponse;
  "notifications:deleteSubscriptionById": Record<string, never>;
}

export type AmazonKnownOperationUid = keyof AmazonKnownOperationRequestMap;

export interface AmazonNotificationEnvelope {
  rawBody: string;
  notificationType?: string;
  notificationId?: string;
  sellerId?: string;
  marketplaceId?: string;
  payload: unknown;
  transport?: "direct" | "sns" | "sqs" | "eventbridge";
  verifiedBy: "hook" | "shared-secret" | "signature";
}

export interface ParseAmazonNotificationOptions {
  requireVerification?: boolean;
  expectedSharedSecret?: string;
  sharedSecretHeaderName?: string;
  signatureHeaderName?: string;
  expectedSignatureSecret?: string;
  verifyNotification?: (input: {
    rawBody: string;
    headers: Headers;
    payload: unknown;
  }) => boolean | Promise<boolean>;
}

export interface AmazonMarketplaceClient {
  refreshAccessToken(): Promise<AmazonLwaTokenResponse>;
  createRestrictedDataToken(input: AmazonRestrictedDataTokenRequest): Promise<AmazonRestrictedDataTokenResponse>;
  getOrders(input?: AmazonOrderSearchInput): Promise<AmazonOrdersResponse>;
  getOrder(amazonOrderId: string): Promise<AmazonOrderResponse>;
  getOrderBuyerInfo(amazonOrderId: string): Promise<AmazonOrderResponse<AmazonOrder & { BuyerInfo?: AmazonBuyerInfo }>>;
  getOrderItems(amazonOrderId: string, input?: { nextToken?: string }): Promise<AmazonOrderItemsResponse>;
  getOrderItemsBuyerInfo(amazonOrderId: string, input?: { nextToken?: string }): Promise<AmazonOrderItemsResponse<AmazonOrderItem & { BuyerInfo?: AmazonBuyerInfo }>>;
  searchOrdersV2026(input?: AmazonOrdersV2026SearchInput): Promise<AmazonOrdersResponse>;
  getOrderV2026(amazonOrderId: string, input?: AmazonOrdersV2026GetInput): Promise<AmazonOrderResponse>;
  getSolicitationActionsForOrder(amazonOrderId: string, marketplaceIds?: string[]): Promise<AmazonSolicitationActionsResponse>;
  createProductReviewAndSellerFeedbackSolicitation(amazonOrderId: string, marketplaceIds?: string[]): Promise<AmazonResource>;
  getMarketplaceParticipations(): Promise<AmazonMarketplaceParticipationsResponse>;
  getDestinations(): Promise<AmazonNotificationDestinationsResponse>;
  getDestination(destinationId: string): Promise<AmazonNotificationDestinationResponse>;
  createSubscription(input: AmazonCreateSubscriptionInput): Promise<AmazonNotificationSubscriptionResponse>;
  getSubscription(input: AmazonGetSubscriptionInput): Promise<AmazonNotificationSubscriptionResponse>;
  deleteSubscription(input: AmazonDeleteSubscriptionInput): Promise<Record<string, never>>;
}

export interface AmazonLwaTokenResponse {
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
  expires_in?: number;
  [key: string]: AmazonMarketplaceProviderExtensionValue;
}

export interface AmazonLiveCheckOptions extends AmazonMarketplaceClientOptions {
  client?: Pick<AmazonMarketplaceClient, "getMarketplaceParticipations">;
}
