import type { ProviderJsonRetryOptions } from "@cognidesk/integration-kit";

export type EbayMarketplaceJsonPrimitive = string | number | boolean | null;
export type EbayMarketplaceJsonValue =
  | EbayMarketplaceJsonPrimitive
  | EbayMarketplaceJsonObject
  | readonly EbayMarketplaceJsonValue[];
export type EbayMarketplaceProviderExtensionValue = EbayMarketplaceJsonValue | object | undefined;
export interface EbayMarketplaceJsonObject {
  [key: string]: EbayMarketplaceProviderExtensionValue;
}
export type EbayMarketplaceProviderPayload = EbayMarketplaceJsonObject | object;
export type EbayMarketplaceProviderQuery = Record<string, EbayMarketplaceProviderExtensionValue>;
export interface EbayMarketplaceProviderResponse extends EbayMarketplaceJsonObject {}
export interface EbayMarketplaceProviderExtensionFields extends EbayMarketplaceJsonObject {}

export interface EbayMarketplaceClientOptions {
  providerClient?: EbayMarketplaceProviderClient | undefined;
  marketplaceId?: string;
  accessToken?: string;
  applicationAccessToken?: string;
  environment?: "production" | "sandbox";
  baseUrl?: string;
  fetch?: typeof fetch;
  requestSigner?: EbayRequestSigner;
  signal?: AbortSignal;
  timeoutMs?: number;
  retry?: number | ProviderJsonRetryOptions;
}

export interface EbayCredentialStatusInput {
  providerClientConfigured?: boolean;
  accessTokenConfigured?: boolean;
  applicationAccessTokenConfigured?: boolean;
  clientIdConfigured?: boolean;
  clientSecretConfigured?: boolean;
  marketplaceId?: string;
  sellerDomicileCountry?: string;
  digitalSignatureConfigured?: boolean;
  requireDigitalSignatureForRefunds?: boolean;
  notificationVerificationTokenConfigured?: boolean;
  scopes?: string[];
  expiresAt?: string;
}

export interface EbayDigitalSignatureOptions {
  privateKey: string;
  publicKeyJwe: string;
  created?: number;
  algorithm?: "rsa-v1_5-sha256";
}

export interface EbaySignedRequestInput {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  body?: string;
}

export type EbayRequestSigner = (
  input: EbaySignedRequestInput,
) => Record<string, string> | Promise<Record<string, string>>;

export interface EbayOrderSearchInput {
  filter?: string | string[];
  limit?: number;
  offset?: number;
  orderIds?: string[];
  fieldGroups?: string[];
}

export interface EbayConversationSearchInput {
  filter?: string | string[];
  limit?: number;
  offset?: number;
}

export interface EbayPaymentDisputeSearchInput {
  filter?: string | string[];
  limit?: number;
  offset?: number;
}

export interface EbayRestCollection<TItem = EbayMarketplaceJsonObject> {
  href?: string;
  limit?: number;
  offset?: number;
  total?: number;
  orders?: TItem[];
  conversations?: TItem[];
  paymentDisputeSummaries?: TItem[];
  [key: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayAmount {
  currency?: string;
  value?: string;
}

export interface EbayOrderLineItem {
  lineItemId?: string;
  legacyItemId?: string;
  sku?: string;
  title?: string;
  quantity?: number;
  lineItemCost?: EbayAmount;
  total?: EbayAmount;
  appliedPromotions?: Array<{ discountAmount?: EbayAmount; promotionId?: string; description?: string }>;
  taxes?: Array<{ amount?: EbayAmount; taxType?: string }>;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayOrder {
  orderId?: string;
  legacyOrderId?: string;
  creationDate?: string;
  lastModifiedDate?: string;
  orderFulfillmentStatus?: string;
  orderPaymentStatus?: string;
  sellerId?: string;
  buyer?: { username?: string; taxAddress?: EbayMarketplaceJsonObject; [providerField: string]: EbayMarketplaceJsonValue | undefined };
  pricingSummary?: {
    priceSubtotal?: EbayAmount;
    deliveryCost?: EbayAmount;
    total?: EbayAmount;
    [providerField: string]: EbayMarketplaceProviderExtensionValue;
  };
  lineItems?: EbayOrderLineItem[];
  paymentSummary?: EbayMarketplaceJsonObject;
  fulfillmentStartInstructions?: Array<EbayMarketplaceJsonObject>;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayOrdersCollection extends EbayRestCollection<EbayOrder> {
  orders?: EbayOrder[];
}

export interface EbayShippingFulfillment {
  fulfillmentId?: string;
  shipmentTrackingNumber?: string;
  shippingCarrierCode?: string;
  shippedDate?: string;
  lineItems?: Array<{ lineItemId?: string; quantity?: number }>;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayShippingFulfillmentsCollection extends EbayRestCollection<EbayShippingFulfillment> {
  fulfillments?: EbayShippingFulfillment[];
}

export interface EbayRefund {
  refundId?: string;
  orderId?: string;
  refundStatus?: string;
  refundAmount?: EbayAmount;
  refundDate?: string;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayPaymentDispute {
  paymentDisputeId?: string;
  orderId?: string;
  buyerUsername?: string;
  reason?: string;
  status?: string;
  amount?: EbayAmount;
  openDate?: string;
  respondByDate?: string;
  evidence?: Array<EbayMarketplaceJsonObject>;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayPaymentDisputeActivity {
  activityDate?: string;
  activityType?: string;
  actor?: string;
  notes?: string;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayPaymentDisputeActivities {
  activities?: EbayPaymentDisputeActivity[];
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayPaymentDisputesCollection extends EbayRestCollection<EbayPaymentDispute> {
  paymentDisputeSummaries?: EbayPaymentDispute[];
}

export interface EbayPaymentDisputeActionResponse {
  actionId?: string;
  paymentDisputeId?: string;
  status?: string;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayConversation {
  conversationId?: string;
  creationDate?: string;
  lastModifiedDate?: string;
  status?: string;
  messages?: Array<EbayMarketplaceJsonObject>;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayConversationsCollection extends EbayRestCollection<EbayConversation> {
  conversations?: EbayConversation[];
}

export interface EbayMessageResponse {
  messageId?: string;
  conversationId?: string;
  status?: string;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayUser {
  userId?: string;
  username?: string;
  registrationMarketplaceId?: string;
  status?: string;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbaySigningKey {
  signingKeyId?: string;
  signingKeyCipher?: string;
  publicKeyJwe?: string;
  expirationDate?: string;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbaySigningKeysCollection extends EbayRestCollection<EbaySigningKey> {
  signingKeys?: EbaySigningKey[];
}

export interface EbayNotificationConfig {
  alertEmail?: string;
  alerts?: Array<EbayMarketplaceJsonObject>;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayShippingFulfillmentInput {
  lineItemsById?: Array<{ lineItemId: string; quantity: number }>;
  shippingCarrierCode?: string;
  trackingNumber?: string;
  shippedDate?: string;
  [key: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayIssueRefundInput {
  reasonForRefund: string;
  comment?: string;
  refundItems?: Array<EbayMarketplaceJsonObject>;
  [key: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbaySendMessageInput {
  conversationId?: string;
  recipient?: string;
  subject?: string;
  messageText?: string;
  body?: EbayMarketplaceProviderPayload;
  [key: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayUpdateConversationInput {
  conversationId?: string;
  status?: "ACTIVE" | "ARCHIVED" | "DELETED" | "READ" | "UNREAD" | string;
  [key: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayBulkUpdateConversationsInput {
  conversations: Array<EbayMarketplaceJsonObject>;
  [key: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayNotificationPublicKey {
  key?: string;
  publicKey?: string;
  algorithm?: string;
  [key: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayNotificationDestinationInput {
  name?: string;
  status?: "ENABLED" | "DISABLED" | string;
  destinationUrl?: string;
  deliveryConfig?: EbayMarketplaceJsonObject;
  [key: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayNotificationDestination {
  destinationId?: string;
  name?: string;
  status?: "ENABLED" | "DISABLED" | (string & {});
  destinationUrl?: string;
  deliveryConfig?: EbayMarketplaceJsonObject;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayNotificationDestinationsCollection extends EbayRestCollection<EbayNotificationDestination> {
  destinations?: EbayNotificationDestination[];
}

export interface EbayNotificationSubscriptionInput {
  topicId?: string;
  destinationId?: string;
  status?: "ENABLED" | "DISABLED" | string;
  payloadVersion?: string;
  [key: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayNotificationSubscription {
  subscriptionId?: string;
  topicId?: string;
  destinationId?: string;
  status?: "ENABLED" | "DISABLED" | (string & {});
  payloadVersion?: string;
  creationDate?: string;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayNotificationSubscriptionsCollection extends EbayRestCollection<EbayNotificationSubscription> {
  subscriptions?: EbayNotificationSubscription[];
}

export interface EbayNotificationSubscriptionFilterInput {
  filterType?: string;
  schemaVersion?: string;
  filter?: EbayMarketplaceJsonObject;
  [key: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayNotificationSubscriptionFilter {
  filterId?: string;
  filterType?: string;
  schemaVersion?: string;
  filter?: EbayMarketplaceJsonObject;
  [providerField: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayNotificationTopicSearchInput {
  limit?: number;
  continuation_token?: string;
  continuationToken?: string;
}

export interface EbayCreateSigningKeyInput {
  signingKeyCipher?: string;
  [key: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayMarketplaceProviderClient {
  getOrder(orderId: string): Promise<EbayOrder>;
  searchOrders(input?: EbayOrderSearchInput): Promise<EbayOrdersCollection>;
  createShippingFulfillment(orderId: string, input: EbayShippingFulfillmentInput): Promise<EbayShippingFulfillment>;
  getShippingFulfillments(orderId: string): Promise<EbayShippingFulfillmentsCollection>;
  getShippingFulfillment(orderId: string, fulfillmentId: string): Promise<EbayShippingFulfillment>;
  issueRefund(orderId: string, input: EbayIssueRefundInput): Promise<EbayRefund>;
  getPaymentDispute(paymentDisputeId: string): Promise<EbayPaymentDispute>;
  fetchPaymentDisputeEvidenceContent(paymentDisputeId: string): Promise<ArrayBuffer | EbayMarketplaceJsonObject>;
  getPaymentDisputeActivities(paymentDisputeId: string): Promise<EbayPaymentDisputeActivities>;
  searchPaymentDisputes(input?: EbayPaymentDisputeSearchInput): Promise<EbayPaymentDisputesCollection>;
  acceptPaymentDispute(paymentDisputeId: string, input?: EbayMarketplaceJsonObject): Promise<EbayPaymentDisputeActionResponse>;
  contestPaymentDispute(paymentDisputeId: string, input: EbayMarketplaceJsonObject): Promise<EbayPaymentDisputeActionResponse>;
  uploadPaymentDisputeEvidenceFile(paymentDisputeId: string, input: EbayMarketplaceJsonObject): Promise<EbayPaymentDisputeActionResponse>;
  addPaymentDisputeEvidence(paymentDisputeId: string, input: EbayMarketplaceJsonObject): Promise<EbayPaymentDisputeActionResponse>;
  updatePaymentDisputeEvidence(paymentDisputeId: string, input: EbayMarketplaceJsonObject): Promise<EbayPaymentDisputeActionResponse>;
  getConversations(input?: EbayConversationSearchInput): Promise<EbayConversationsCollection>;
  getConversation(conversationId: string): Promise<EbayConversation>;
  sendMessage(input: EbaySendMessageInput): Promise<EbayMessageResponse>;
  updateConversation(input: EbayUpdateConversationInput): Promise<EbayConversation>;
  bulkUpdateConversations(input: EbayBulkUpdateConversationsInput): Promise<{ conversations?: EbayConversation[]; [providerField: string]: EbayMarketplaceJsonValue | undefined }>;
  getUser(): Promise<EbayUser>;
  createSigningKey(input?: EbayCreateSigningKeyInput): Promise<EbaySigningKey>;
  getSigningKey(signingKeyId: string): Promise<EbaySigningKey>;
  getSigningKeys(): Promise<EbaySigningKeysCollection>;
  getNotificationConfig(): Promise<EbayNotificationConfig>;
  updateNotificationConfig(input: EbayMarketplaceJsonObject): Promise<EbayNotificationConfig>;
  getNotificationPublicKey(publicKeyId: string): Promise<EbayNotificationPublicKey>;
  createNotificationDestination(input: EbayNotificationDestinationInput): Promise<EbayNotificationDestination>;
  getNotificationDestination(destinationId: string): Promise<EbayNotificationDestination>;
  getNotificationDestinations(): Promise<EbayNotificationDestinationsCollection>;
  updateNotificationDestination(destinationId: string, input: EbayNotificationDestinationInput): Promise<EbayNotificationDestination>;
  deleteNotificationDestination(destinationId: string): Promise<Record<string, never>>;
  createNotificationSubscription(input: EbayNotificationSubscriptionInput): Promise<EbayNotificationSubscription>;
  getNotificationSubscription(subscriptionId: string): Promise<EbayNotificationSubscription>;
  getNotificationSubscriptions(): Promise<EbayNotificationSubscriptionsCollection>;
  updateNotificationSubscription(subscriptionId: string, input: EbayNotificationSubscriptionInput): Promise<EbayNotificationSubscription>;
  enableNotificationSubscription(subscriptionId: string): Promise<EbayNotificationSubscription>;
  disableNotificationSubscription(subscriptionId: string): Promise<EbayNotificationSubscription>;
  testNotificationSubscription(subscriptionId: string): Promise<EbayNotificationSubscription>;
  deleteNotificationSubscription(subscriptionId: string): Promise<Record<string, never>>;
  createNotificationSubscriptionFilter(subscriptionId: string, input: EbayNotificationSubscriptionFilterInput): Promise<EbayNotificationSubscriptionFilter>;
  getNotificationSubscriptionFilter(subscriptionId: string, filterId: string): Promise<EbayNotificationSubscriptionFilter>;
  deleteNotificationSubscriptionFilter(subscriptionId: string, filterId: string): Promise<Record<string, never>>;
  getNotificationTopic(topicId: string): Promise<{ topicId?: string; description?: string; supportedPayloadVersions?: string[]; [providerField: string]: EbayMarketplaceJsonValue | undefined }>;
  getNotificationTopics(input?: EbayNotificationTopicSearchInput): Promise<EbayRestCollection>;
}

export interface EbayMarketplaceClient extends EbayMarketplaceProviderClient {
  providerClient: EbayMarketplaceProviderClient;
}

export interface EbaySelectedApiOperation {
  api: "sell.fulfillment" | "commerce.message" | "commerce.notification" | "developer.key-management" | "commerce.identity";
  specUrl: string;
  operationId: string;
  functionName: keyof EbayMarketplaceProviderClient;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  resource: string;
}

export interface EbayLiveCheckOptions extends EbayMarketplaceClientOptions {
  client?: Pick<EbayMarketplaceProviderClient, "getUser">;
}

export interface EbayNotificationSignatureHeader {
  alg?: string;
  kid?: string;
  signature?: string;
  digest?: string;
  [key: string]: EbayMarketplaceProviderExtensionValue;
}

export interface EbayNotificationWebhook {
  rawBody: string;
  signatureHeader?: EbayNotificationSignatureHeader;
  topic?: string;
  notificationId?: string;
  payload: unknown;
}

export interface ParseEbayNotificationWebhookOptions {
  requireEbaySignature?: boolean;
  publicKey?: string;
  verifySignature?: (input: {
    rawBody: string;
    signatureHeader: EbayNotificationSignatureHeader;
  }) => boolean | Promise<boolean>;
  expectedSharedSecret?: string;
  sharedSecretHeaderName?: string;
}
