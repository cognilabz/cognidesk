import type {
  AmazonBuyerInfo,
  AmazonMarketplaceClient,
  AmazonMarketplaceClientOptions,
  AmazonNotificationDestinationResponse,
  AmazonNotificationDestinationsResponse,
  AmazonNotificationSubscriptionResponse,
  AmazonOrder,
  AmazonOrderItemsResponse,
  AmazonOrderItem,
  AmazonOrderResponse,
  AmazonOrderSearchInput,
  AmazonOrdersResponse,
  AmazonOrdersV2026GetInput,
  AmazonOrdersV2026SearchInput,
  AmazonResource,
  AmazonRestrictedDataTokenRequest,
  AmazonSolicitationActionsResponse,
} from "./contracts.js";
import { createAmazonRestrictedDataToken, refreshAmazonLwaAccessToken } from "./credentials/tokens.js";
import {
  amazonRequest,
  endpointBaseUrl,
  marketplaceIdsFromOptions,
  resolveAmazonRestrictedDataToken,
  withQuery,
  type AmazonRequestInit,
} from "./request.js";

export function createAmazonMarketplaceClient(options: AmazonMarketplaceClientOptions): AmazonMarketplaceClient {
  const fetchImpl = options.fetch ?? fetch;
  const apiBaseUrl = (options.apiBaseUrl ?? endpointBaseUrl(options.endpoint ?? "na")).replace(/\/+$/, "");
  const requestPath = <T>(path: string, init?: AmazonRequestInit) => amazonRequest<T>({
    url: `${apiBaseUrl}${path}`,
    fetch: fetchImpl,
    options,
    ...init,
  });
  const createRestrictedDataToken = (input: AmazonRestrictedDataTokenRequest) =>
    createAmazonRestrictedDataToken({ ...options, fetch: fetchImpl }, input);
  const requestWithRestrictedDataToken = async <T>(
    path: string,
    restrictedResourcePath: string,
    init?: AmazonRequestInit,
  ) => {
    const restrictedDataToken = await resolveAmazonRestrictedDataToken(options, {
      restrictedResources: [{
        method: init?.method ?? "GET",
        path: restrictedResourcePath,
        dataElements: ["buyerInfo"],
      }],
      ...(options.restrictedDataTokenTargetApplication
        ? { targetApplication: options.restrictedDataTokenTargetApplication }
        : {}),
    }, createRestrictedDataToken);
    return requestPath<T>(path, {
      ...init,
      headers: {
        ...init?.headers,
        "x-amz-access-token": restrictedDataToken,
      },
    });
  };

  return {
    async refreshAccessToken() {
      return refreshAmazonLwaAccessToken({ ...options, fetch: fetchImpl });
    },
    async createRestrictedDataToken(input) {
      return createRestrictedDataToken(input);
    },
    async getOrders(input: AmazonOrderSearchInput = {}) {
      const marketplaceIds = input.marketplaceIds ?? (options.marketplaceId ? [options.marketplaceId] : undefined);
      return requestPath<AmazonOrdersResponse>(withQuery("/orders/v0/orders", {
        MarketplaceIds: marketplaceIds?.join(","),
        CreatedAfter: input.createdAfter,
        CreatedBefore: input.createdBefore,
        LastUpdatedAfter: input.lastUpdatedAfter,
        LastUpdatedBefore: input.lastUpdatedBefore,
        OrderStatuses: input.orderStatuses?.join(","),
        FulfillmentChannels: input.fulfillmentChannels?.join(","),
        PaymentMethods: input.paymentMethods?.join(","),
        BuyerEmail: input.buyerEmail,
        SellerOrderId: input.sellerOrderId,
        MaxResultsPerPage: input.maxResultsPerPage,
        NextToken: input.nextToken,
        AmazonOrderIds: input.amazonOrderIds?.join(","),
        EasyShipShipmentStatuses: input.easyShipShipmentStatuses?.join(","),
        ElectronicInvoiceStatuses: input.electronicInvoiceStatuses?.join(","),
      }));
    },
    async getOrder(amazonOrderId) {
      return requestPath<AmazonOrderResponse>(`/orders/v0/orders/${encodeURIComponent(amazonOrderId)}`);
    },
    async getOrderBuyerInfo(amazonOrderId) {
      const path = `/orders/v0/orders/${encodeURIComponent(amazonOrderId)}/buyerInfo`;
      return requestWithRestrictedDataToken<AmazonOrderResponse<AmazonOrder & { BuyerInfo?: AmazonBuyerInfo }>>(path, path);
    },
    async getOrderItems(amazonOrderId, input = {}) {
      return requestPath<AmazonOrderItemsResponse>(withQuery(
        `/orders/v0/orders/${encodeURIComponent(amazonOrderId)}/orderItems`,
        { NextToken: input.nextToken },
      ));
    },
    async getOrderItemsBuyerInfo(amazonOrderId, input = {}) {
      const path = `/orders/v0/orders/${encodeURIComponent(amazonOrderId)}/orderItems/buyerInfo`;
      return requestWithRestrictedDataToken<AmazonOrderItemsResponse<AmazonOrderItem & { BuyerInfo?: AmazonBuyerInfo }>>(withQuery(path, { NextToken: input.nextToken }), path);
    },
    async searchOrdersV2026(input: AmazonOrdersV2026SearchInput = {}) {
      const marketplaceIds = input.marketplaceIds ?? (options.marketplaceId ? [options.marketplaceId] : undefined);
      return requestPath<AmazonOrdersResponse>(withQuery("/orders/2026-01-01/orders", {
        marketplaceIds: marketplaceIds?.join(","),
        createdAfter: input.createdAfter,
        createdBefore: input.createdBefore,
        lastUpdatedAfter: input.lastUpdatedAfter,
        lastUpdatedBefore: input.lastUpdatedBefore,
        fulfillmentStatuses: input.fulfillmentStatuses?.join(","),
        fulfilledBy: input.fulfilledBy,
        maxResultsPerPage: input.maxResultsPerPage,
        paginationToken: input.paginationToken,
        amazonOrderIds: input.amazonOrderIds?.join(","),
        includedData: input.includedData?.join(","),
      }));
    },
    async getOrderV2026(amazonOrderId, input: AmazonOrdersV2026GetInput = {}) {
      return requestPath<AmazonOrderResponse>(withQuery(
        `/orders/2026-01-01/orders/${encodeURIComponent(amazonOrderId)}`,
        { includedData: input.includedData?.join(",") },
      ));
    },
    async getSolicitationActionsForOrder(amazonOrderId, marketplaceIds) {
      return requestPath<AmazonSolicitationActionsResponse>(withQuery(
        `/solicitations/v1/orders/${encodeURIComponent(amazonOrderId)}`,
        { marketplaceIds: (marketplaceIds ?? marketplaceIdsFromOptions(options)).join(",") },
      ));
    },
    async createProductReviewAndSellerFeedbackSolicitation(amazonOrderId, marketplaceIds) {
      return requestPath<AmazonResource>(withQuery(
        `/solicitations/v1/orders/${encodeURIComponent(amazonOrderId)}/solicitations/productReviewAndSellerFeedback`,
        { marketplaceIds: (marketplaceIds ?? marketplaceIdsFromOptions(options)).join(",") },
      ), { method: "POST" });
    },
    async getMarketplaceParticipations(input = {}) {
      return requestPath("/sellers/v1/marketplaceParticipations", input.signal ? { signal: input.signal } : undefined);
    },
    async getDestinations() {
      return requestPath<AmazonNotificationDestinationsResponse>("/notifications/v1/destinations");
    },
    async getDestination(destinationId) {
      return requestPath<AmazonNotificationDestinationResponse>(`/notifications/v1/destinations/${encodeURIComponent(destinationId)}`);
    },
    async createSubscription(input) {
      if (!input.notificationType) {
        throw new Error("Amazon Notifications createSubscription requires a notificationType.");
      }
      if (!input.destinationId) {
        throw new Error("Amazon Notifications createSubscription requires a destinationId.");
      }
      if (input.marketplaceIds?.length) {
        throw new Error("Amazon Notifications createSubscription does not accept marketplaceIds as a query parameter; configure filtering through processingDirective when supported.");
      }
      return requestPath<AmazonNotificationSubscriptionResponse>(
        `/notifications/v1/subscriptions/${encodeURIComponent(input.notificationType)}`,
        {
          method: "POST",
          body: {
            payloadVersion: input.payloadVersion ?? "1.0",
            destinationId: input.destinationId,
            ...(input.processingDirective ? { processingDirective: input.processingDirective } : {}),
          },
        },
      );
    },
    async getSubscription(input) {
      if (!input.notificationType) {
        throw new Error("Amazon Notifications getSubscription requires a notificationType.");
      }
      return requestPath<AmazonNotificationSubscriptionResponse>(withQuery(
        `/notifications/v1/subscriptions/${encodeURIComponent(input.notificationType)}`,
        { payloadVersion: input.payloadVersion },
      ));
    },
    async deleteSubscription(input) {
      if (!input.notificationType) {
        throw new Error("Amazon Notifications deleteSubscription requires a notificationType.");
      }
      if (!input.subscriptionId) {
        throw new Error("Amazon Notifications deleteSubscription requires a subscriptionId from getSubscription/getSubscriptionById.");
      }
      return requestPath<Record<string, never>>(
        `/notifications/v1/subscriptions/${encodeURIComponent(input.notificationType)}/${encodeURIComponent(input.subscriptionId)}`,
        { method: "DELETE" },
      );
    },
  };
}
