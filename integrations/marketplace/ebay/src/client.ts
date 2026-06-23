import type { ProviderCredentialStatusInput } from "@cognidesk/integration-kit";
import { ebayMarketplaceProviderManifest } from "./catalog.js";
import type {
  EbayConversation,
  EbayConversationsCollection,
  EbayCredentialStatusInput,
  EbayLiveCheckOptions,
  EbayMarketplaceClient,
  EbayMarketplaceClientOptions,
  EbayMarketplaceJsonObject,
  EbayMarketplaceJsonValue,
  EbayMarketplaceProviderPayload,
  EbayMessageResponse,
  EbayNotificationConfig,
  EbayNotificationDestination,
  EbayNotificationDestinationsCollection,
  EbayNotificationPublicKey,
  EbayNotificationSubscription,
  EbayNotificationSubscriptionFilter,
  EbayNotificationSubscriptionsCollection,
  EbayOrder,
  EbayOrdersCollection,
  EbayPaymentDispute,
  EbayPaymentDisputeActivities,
  EbayPaymentDisputeActionResponse,
  EbayPaymentDisputesCollection,
  EbayRefund,
  EbayRestCollection,
  EbayShippingFulfillment,
  EbayShippingFulfillmentsCollection,
  EbaySigningKey,
  EbaySigningKeysCollection,
  EbayUser,
} from "./contracts.js";
import { createEbayDigitalSignatureHeaders } from "./signing.js";
import { isEuOrUkCountry, readString, withQuery } from "./utils.js";

export function createEbayMarketplaceClient(options: EbayMarketplaceClientOptions): EbayMarketplaceClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://api.ebay.com").replace(/\/+$/, "");
  const identityApiBaseUrl = (options.identityApiBaseUrl ?? "https://apiz.ebay.com").replace(/\/+$/, "");
  const keyManagementApiBaseUrl = (options.keyManagementApiBaseUrl ?? "https://apiz.ebay.com").replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;
  const request = <T>(path: string, init?: EbayRequestInit) => ebayRequest<T>({
    url: `${apiBaseUrl}${path}`,
    fetch: fetchImpl,
    options,
    ...init,
  });
  const applicationRequest = <T>(path: string, init?: EbayRequestInit & { baseUrl?: string }) => {
    if (!options.applicationAccessToken) {
      throw new Error("eBay application access token from the client credentials grant is required for this operation.");
    }
    return ebayRequest<T>({
      url: `${init?.baseUrl ?? apiBaseUrl}${path}`,
      fetch: fetchImpl,
      options,
      ...init,
      accessToken: options.applicationAccessToken,
    });
  };

  return {
    async getOrder(orderId) {
      return request<EbayOrder>(`/sell/fulfillment/v1/order/${encodeURIComponent(orderId)}`);
    },
    async searchOrders(input = {}) {
      const url = withQuery("/sell/fulfillment/v1/order", {
        filter: input.filter,
        limit: input.limit,
        offset: input.offset,
        orderids: input.orderIds?.join(","),
        fieldGroups: input.fieldGroups?.join(","),
      });
      return request<EbayOrdersCollection>(url);
    },
    async createShippingFulfillment(orderId, input) {
      return request<EbayShippingFulfillment>(
        `/sell/fulfillment/v1/order/${encodeURIComponent(orderId)}/shipping_fulfillment`,
        { method: "POST", body: input },
      );
    },
    async getShippingFulfillments(orderId) {
      return request<EbayShippingFulfillmentsCollection>(
        `/sell/fulfillment/v1/order/${encodeURIComponent(orderId)}/shipping_fulfillment`,
      );
    },
    async getShippingFulfillment(orderId, fulfillmentId) {
      return request<EbayShippingFulfillment>(
        `/sell/fulfillment/v1/order/${encodeURIComponent(orderId)}/shipping_fulfillment/${encodeURIComponent(fulfillmentId)}`,
      );
    },
    async issueRefund(orderId, input) {
      const path = `/sell/fulfillment/v1/order/${encodeURIComponent(orderId)}/issue_refund`;
      return request<EbayRefund>(
        path,
        {
          method: "POST",
          body: input,
          requireDigitalSignature: shouldRequireEbayRefundSignature(options),
        },
      );
    },
    async getPaymentDispute(paymentDisputeId) {
      return request<EbayPaymentDispute>(
        `/sell/fulfillment/v1/payment_dispute/${encodeURIComponent(paymentDisputeId)}`,
      );
    },
    async fetchPaymentDisputeEvidenceContent(paymentDisputeId) {
      return request<ArrayBuffer | EbayMarketplaceJsonObject>(
        `/sell/fulfillment/v1/payment_dispute/${encodeURIComponent(paymentDisputeId)}/fetch_evidence_content`,
        { responseType: "arrayBuffer" },
      );
    },
    async getPaymentDisputeActivities(paymentDisputeId) {
      return request<EbayPaymentDisputeActivities>(
        `/sell/fulfillment/v1/payment_dispute/${encodeURIComponent(paymentDisputeId)}/activity`,
      );
    },
    async searchPaymentDisputes(input = {}) {
      return request<EbayPaymentDisputesCollection>(withQuery("/sell/fulfillment/v1/payment_dispute_summary", input));
    },
    async acceptPaymentDispute(paymentDisputeId, input = {}) {
      return request<EbayPaymentDisputeActionResponse>(
        `/sell/fulfillment/v1/payment_dispute/${encodeURIComponent(paymentDisputeId)}/accept`,
        { method: "POST", body: input },
      );
    },
    async contestPaymentDispute(paymentDisputeId, input) {
      return request<EbayPaymentDisputeActionResponse>(
        `/sell/fulfillment/v1/payment_dispute/${encodeURIComponent(paymentDisputeId)}/contest`,
        { method: "POST", body: input },
      );
    },
    async uploadPaymentDisputeEvidenceFile(paymentDisputeId, input) {
      return request<EbayPaymentDisputeActionResponse>(
        `/sell/fulfillment/v1/payment_dispute/${encodeURIComponent(paymentDisputeId)}/upload_evidence_file`,
        { method: "POST", body: input },
      );
    },
    async addPaymentDisputeEvidence(paymentDisputeId, input) {
      return request<EbayPaymentDisputeActionResponse>(
        `/sell/fulfillment/v1/payment_dispute/${encodeURIComponent(paymentDisputeId)}/add_evidence`,
        { method: "POST", body: input },
      );
    },
    async updatePaymentDisputeEvidence(paymentDisputeId, input) {
      return request<EbayPaymentDisputeActionResponse>(
        `/sell/fulfillment/v1/payment_dispute/${encodeURIComponent(paymentDisputeId)}/update_evidence`,
        { method: "POST", body: input },
      );
    },
    async getConversations(input = {}) {
      return request<EbayConversationsCollection>(withQuery("/commerce/message/v1/conversation", input));
    },
    async getConversation(conversationId) {
      return request<EbayConversation>(
        `/commerce/message/v1/conversation/${encodeURIComponent(conversationId)}`,
      );
    },
    async sendMessage(input) {
      return request<EbayMessageResponse>("/commerce/message/v1/send_message", {
        method: "POST",
        body: input.body ?? input,
      });
    },
    async updateConversation(input) {
      return request<EbayConversation>("/commerce/message/v1/update_conversation", {
        method: "POST",
        body: input,
      });
    },
    async bulkUpdateConversations(input) {
      return request<{ conversations?: EbayConversation[]; [providerField: string]: EbayMarketplaceJsonValue | undefined }>("/commerce/message/v1/bulk_update_conversation", {
        method: "POST",
        body: input,
      });
    },
    async getUser() {
      return ebayRequest<EbayUser>({
        url: `${identityApiBaseUrl}/commerce/identity/v1/user/`,
        fetch: fetchImpl,
        options,
      });
    },
    async createSigningKey(input = {}) {
      return applicationRequest<EbaySigningKey>(
        "/developer/key_management/v1/signing_key",
        { method: "POST", body: input, baseUrl: keyManagementApiBaseUrl },
      );
    },
    async getSigningKey(signingKeyId) {
      return applicationRequest<EbaySigningKey>(
        `/developer/key_management/v1/signing_key/${encodeURIComponent(signingKeyId)}`,
        { baseUrl: keyManagementApiBaseUrl },
      );
    },
    async getSigningKeys() {
      return applicationRequest<EbaySigningKeysCollection>(
        "/developer/key_management/v1/signing_key",
        { baseUrl: keyManagementApiBaseUrl },
      );
    },
    async getNotificationConfig() {
      return request<EbayNotificationConfig>("/commerce/notification/v1/config");
    },
    async updateNotificationConfig(input) {
      return request<EbayNotificationConfig>("/commerce/notification/v1/config", {
        method: "PUT",
        body: input,
      });
    },
    async getNotificationPublicKey(publicKeyId) {
      return applicationRequest<EbayNotificationPublicKey>(
        `/commerce/notification/v1/public_key/${encodeURIComponent(publicKeyId)}`,
      );
    },
    async createNotificationDestination(input) {
      return request<EbayNotificationDestination>("/commerce/notification/v1/destination", {
        method: "POST",
        body: input,
      });
    },
    async getNotificationDestination(destinationId) {
      return request<EbayNotificationDestination>(
        `/commerce/notification/v1/destination/${encodeURIComponent(destinationId)}`,
      );
    },
    async getNotificationDestinations() {
      return request<EbayNotificationDestinationsCollection>("/commerce/notification/v1/destination");
    },
    async updateNotificationDestination(destinationId, input) {
      return request<EbayNotificationDestination>(
        `/commerce/notification/v1/destination/${encodeURIComponent(destinationId)}`,
        { method: "PUT", body: input },
      );
    },
    async deleteNotificationDestination(destinationId) {
      return request<Record<string, never>>(
        `/commerce/notification/v1/destination/${encodeURIComponent(destinationId)}`,
        { method: "DELETE" },
      );
    },
    async createNotificationSubscription(input) {
      return request<EbayNotificationSubscription>("/commerce/notification/v1/subscription", {
        method: "POST",
        body: input,
      });
    },
    async getNotificationSubscription(subscriptionId) {
      return request<EbayNotificationSubscription>(
        `/commerce/notification/v1/subscription/${encodeURIComponent(subscriptionId)}`,
      );
    },
    async getNotificationSubscriptions() {
      return request<EbayNotificationSubscriptionsCollection>("/commerce/notification/v1/subscription");
    },
    async updateNotificationSubscription(subscriptionId, input) {
      return request<EbayNotificationSubscription>(
        `/commerce/notification/v1/subscription/${encodeURIComponent(subscriptionId)}`,
        { method: "PUT", body: input },
      );
    },
    async enableNotificationSubscription(subscriptionId) {
      return request<EbayNotificationSubscription>(
        `/commerce/notification/v1/subscription/${encodeURIComponent(subscriptionId)}/enable`,
        { method: "POST" },
      );
    },
    async disableNotificationSubscription(subscriptionId) {
      return request<EbayNotificationSubscription>(
        `/commerce/notification/v1/subscription/${encodeURIComponent(subscriptionId)}/disable`,
        { method: "POST" },
      );
    },
    async testNotificationSubscription(subscriptionId) {
      return request<EbayNotificationSubscription>(
        `/commerce/notification/v1/subscription/${encodeURIComponent(subscriptionId)}/test`,
        { method: "POST" },
      );
    },
    async deleteNotificationSubscription(subscriptionId) {
      return request<Record<string, never>>(
        `/commerce/notification/v1/subscription/${encodeURIComponent(subscriptionId)}`,
        { method: "DELETE" },
      );
    },
    async createNotificationSubscriptionFilter(subscriptionId, input) {
      return request<EbayNotificationSubscriptionFilter>(
        `/commerce/notification/v1/subscription/${encodeURIComponent(subscriptionId)}/filter`,
        { method: "POST", body: input },
      );
    },
    async getNotificationSubscriptionFilter(subscriptionId, filterId) {
      return request<EbayNotificationSubscriptionFilter>(
        `/commerce/notification/v1/subscription/${encodeURIComponent(subscriptionId)}/filter/${encodeURIComponent(filterId)}`,
      );
    },
    async deleteNotificationSubscriptionFilter(subscriptionId, filterId) {
      return request<Record<string, never>>(
        `/commerce/notification/v1/subscription/${encodeURIComponent(subscriptionId)}/filter/${encodeURIComponent(filterId)}`,
        { method: "DELETE" },
      );
    },
    async getNotificationTopic(topicId) {
      return request<{ topicId?: string; description?: string; supportedPayloadVersions?: string[]; [providerField: string]: EbayMarketplaceJsonValue | undefined }>(
        `/commerce/notification/v1/topic/${encodeURIComponent(topicId)}`,
      );
    },
    async getNotificationTopics(input = {}) {
      return request<EbayRestCollection>(withQuery("/commerce/notification/v1/topic", {
        limit: input.limit,
        continuation_token: input.continuation_token ?? input.continuationToken,
      }));
    },
  };
}

export function ebayMarketplaceCredentialStatuses(input: EbayCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-oauth-access-token",
      state: input.accessTokenConfigured ? "configured" : "missing",
      scopes: input.scopes ?? [
        "https://api.ebay.com/oauth/api_scope/sell.fulfillment",
        "https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly",
        "https://api.ebay.com/oauth/api_scope/commerce.message",
        "https://api.ebay.com/oauth/api_scope/commerce.identity.readonly",
        "https://api.ebay.com/oauth/api_scope/commerce.notification.subscription",
      ],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: input.accessTokenConfigured
        ? "eBay OAuth user access is configured."
        : "An eBay OAuth user access token is required for marketplace APIs.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-application-access-token",
      state: input.applicationAccessTokenConfigured ? "configured" : "missing",
      scopes: ["https://api.ebay.com/oauth/api_scope"],
      message: input.applicationAccessTokenConfigured
        ? "eBay application access token is configured for Notification public-key retrieval."
        : "An eBay client-credentials application access token is required for Notification public-key retrieval.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-client-id",
      state: input.clientIdConfigured ? "configured" : "missing",
      message: input.clientIdConfigured
        ? "eBay application client ID is configured."
        : "The SDK user's eBay application client ID is required.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-client-secret",
      state: input.clientSecretConfigured ? "configured" : "missing",
      message: input.clientSecretConfigured
        ? "eBay application client secret is configured server-side."
        : "The SDK user's eBay application client secret is required for OAuth lifecycle operations.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-marketplace-id",
      state: input.marketplaceId ? "configured" : "missing",
      message: input.marketplaceId
        ? `eBay marketplace '${input.marketplaceId}' is configured.`
        : "An eBay marketplace ID such as EBAY_US is required.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-digital-signature-key",
      state: input.digitalSignatureConfigured ? "configured" : input.requireDigitalSignatureForRefunds || isEuOrUkCountry(input.sellerDomicileCountry) ? "missing" : "not-required",
      message: input.digitalSignatureConfigured
        ? "eBay digital signature key material is configured for regulated refund requests."
        : input.requireDigitalSignatureForRefunds || isEuOrUkCountry(input.sellerDomicileCountry)
          ? "eBay digital signature key material is required for issueRefund under EU/UK seller policy."
          : "eBay digital signature key material is only required when EU/UK seller or SDK policy requires signed issueRefund calls.",
    },
    {
      providerPackageId: ebayMarketplaceProviderManifest.id,
      requirementId: "ebay-notification-verification-token",
      state: input.notificationVerificationTokenConfigured ? "configured" : "missing",
      message: input.notificationVerificationTokenConfigured
        ? "eBay notification endpoint verification token is configured."
        : "An eBay notification verification token is required for endpoint challenge responses.",
    },
  ];
}

export function createEbayMarketplaceLiveChecks(options: EbayLiveCheckOptions) {
  return [{
    id: "identity",
    description: "eBay Identity API is reachable with the configured OAuth access token.",
    requiredCredentialIds: ["ebay-oauth-access-token", "ebay-marketplace-id"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createEbayMarketplaceClient(options);
      const user = await client.getUser();
      if (context.signal?.aborted) throw new Error("eBay live identity check aborted.");
      return {
        details: {
          userId: readString(user, "userId") ?? readString(user, "username") ?? "available",
          marketplaceId: options.marketplaceId,
        },
      };
    },
  }];
}

interface EbayRequestInit {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: EbayMarketplaceProviderPayload | undefined;
  headers?: Record<string, string>;
  requireDigitalSignature?: boolean;
  accessToken?: string;
  responseType?: "json" | "arrayBuffer" | "text";
}

async function ebayRequest<T>(input: EbayRequestInit & {
  url: string;
  fetch: typeof fetch;
  options: EbayMarketplaceClientOptions;
}): Promise<T> {
  const method = input.method ?? "GET";
  const bodyText = input.body === undefined ? undefined : JSON.stringify(input.body);
  const digitalSignatureHeaders = input.requireDigitalSignature
    ? await resolveEbayDigitalSignatureHeaders({
      options: input.options,
      method,
      url: input.url,
      ...(bodyText !== undefined ? { body: bodyText } : {}),
    })
    : {};
  const response = await input.fetch(input.url, {
    method,
    headers: {
      accept: "application/json",
      authorization: `Bearer ${input.accessToken ?? input.options.accessToken}`,
      ...(input.options.marketplaceId ? { "x-ebay-c-marketplace-id": input.options.marketplaceId } : {}),
      ...(bodyText ? { "content-type": "application/json" } : {}),
      ...digitalSignatureHeaders,
      ...input.headers,
    },
    ...(bodyText ? { body: bodyText } : {}),
  });
  const responseType = input.responseType ?? "json";
  const body = await readEbayResponseBody<T>(response, responseType);
  if (!response.ok) {
    const errorMessage = Array.isArray((body as { errors?: Array<{ message?: string }> }).errors)
      ? (body as { errors?: Array<{ message?: string }> }).errors?.[0]?.message
      : undefined;
    throw new Error(errorMessage ?? (body as { message?: string }).message ?? `eBay API returned ${response.status}.`);
  }
  return body as T;
}

async function readEbayResponseBody<T>(
  response: Response,
  responseType: "json" | "arrayBuffer" | "text",
): Promise<T & { errors?: Array<{ message?: string }>; message?: string }> {
  if (response.ok && responseType === "arrayBuffer") {
    return await response.arrayBuffer() as unknown as T & { errors?: Array<{ message?: string }>; message?: string };
  }

  const text = await response.text();
  if (response.ok && responseType === "text") {
    return text as unknown as T & { errors?: Array<{ message?: string }>; message?: string };
  }
  if (!text) return {} as T & { errors?: Array<{ message?: string }>; message?: string };

  try {
    return JSON.parse(text) as T & { errors?: Array<{ message?: string }>; message?: string };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (response.ok) {
      throw new Error(`eBay API returned malformed JSON with HTTP ${response.status}: ${message}`);
    }
    return { message: `eBay API returned non-JSON error body with HTTP ${response.status}: ${message}` } as unknown as T & { message: string };
  }
}

async function resolveEbayDigitalSignatureHeaders(input: {
  options: EbayMarketplaceClientOptions;
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  body?: string;
}) {
  if (input.options.signRequest) {
    return await input.options.signRequest({
      method: input.method,
      url: input.url,
      ...(input.body ? { body: input.body } : {}),
    });
  }
  if (input.options.digitalSignature) {
    return createEbayDigitalSignatureHeaders({
      method: input.method,
      url: input.url,
      ...(input.body ? { body: input.body } : {}),
      ...input.options.digitalSignature,
    });
  }
  throw new Error("eBay digital signature key material is required for regulated issueRefund calls.");
}

function shouldRequireEbayRefundSignature(options: EbayMarketplaceClientOptions) {
  return Boolean(options.requireDigitalSignatureForRefunds || isEuOrUkCountry(options.sellerDomicileCountry));
}
