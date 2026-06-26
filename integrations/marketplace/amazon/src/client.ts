import type {
  AmazonBuyerInfo,
  AmazonMarketplaceClient,
  AmazonMarketplaceClientOptions,
  AmazonMarketplaceParticipationsResponse,
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
  createAmazonSpApiOfficialSdkApis,
  stripUndefinedAmazonPayload,
  type AmazonOrdersV2026SdkSearchInput,
} from "./official-sdk.js";
import {
  marketplaceIdsFromOptions,
  resolveAmazonRestrictedDataToken,
} from "./request.js";

export function createAmazonMarketplaceClient(options: AmazonMarketplaceClientOptions): AmazonMarketplaceClient {
  const sdkApis = createAmazonSpApiOfficialSdkApis(options);
  const createRestrictedDataToken = (input: AmazonRestrictedDataTokenRequest) =>
    createAmazonRestrictedDataToken(options, input);
  const ordersV0WithRestrictedDataToken = async (
    path: string,
    dataElements: string[] = ["buyerInfo"],
  ) => {
    const restrictedDataToken = await resolveAmazonRestrictedDataToken(options, {
      restrictedResources: [{
        method: "GET",
        path,
        dataElements,
      }],
      ...(options.restrictedDataTokenTargetApplication
        ? { targetApplication: options.restrictedDataTokenTargetApplication }
        : {}),
    }, createRestrictedDataToken);
    return sdkApis.ordersV0WithRestrictedDataToken(restrictedDataToken);
  };

  return {
    async refreshAccessToken() {
      return refreshAmazonLwaAccessToken(options);
    },
    async createRestrictedDataToken(input) {
      return createRestrictedDataToken(input);
    },
    async getOrders(input: AmazonOrderSearchInput = {}) {
      const marketplaceIds = input.marketplaceIds ?? marketplaceIdsFromOptions(options);
      return sdkApis.ordersV0().getOrders(marketplaceIds, stripUndefinedAmazonPayload({
        createdAfter: input.createdAfter,
        createdBefore: input.createdBefore,
        lastUpdatedAfter: input.lastUpdatedAfter,
        lastUpdatedBefore: input.lastUpdatedBefore,
        orderStatuses: input.orderStatuses,
        fulfillmentChannels: input.fulfillmentChannels,
        paymentMethods: input.paymentMethods,
        buyerEmail: input.buyerEmail,
        sellerOrderId: input.sellerOrderId,
        maxResultsPerPage: input.maxResultsPerPage,
        nextToken: input.nextToken,
        amazonOrderIds: input.amazonOrderIds,
        easyShipShipmentStatuses: input.easyShipShipmentStatuses,
        electronicInvoiceStatuses: input.electronicInvoiceStatuses,
      })) as Promise<AmazonOrdersResponse>;
    },
    async getOrder(amazonOrderId) {
      return sdkApis.ordersV0().getOrder(amazonOrderId) as Promise<AmazonOrderResponse>;
    },
    async getOrderBuyerInfo(amazonOrderId) {
      const path = `/orders/v0/orders/${encodeURIComponent(amazonOrderId)}/buyerInfo`;
      const orders = await ordersV0WithRestrictedDataToken(path);
      return orders.getOrderBuyerInfo(amazonOrderId) as Promise<AmazonOrderResponse<AmazonOrder & { BuyerInfo?: AmazonBuyerInfo }>>;
    },
    async getOrderItems(amazonOrderId, input = {}) {
      return sdkApis.ordersV0().getOrderItems(amazonOrderId, stripUndefinedAmazonPayload({
        nextToken: input.nextToken,
      })) as Promise<AmazonOrderItemsResponse>;
    },
    async getOrderItemsBuyerInfo(amazonOrderId, input = {}) {
      const path = `/orders/v0/orders/${encodeURIComponent(amazonOrderId)}/orderItems/buyerInfo`;
      const orders = await ordersV0WithRestrictedDataToken(path);
      return orders.getOrderItemsBuyerInfo(amazonOrderId, stripUndefinedAmazonPayload({
        nextToken: input.nextToken,
      })) as Promise<AmazonOrderItemsResponse<AmazonOrderItem & { BuyerInfo?: AmazonBuyerInfo }>>;
    },
    async searchOrdersV2026(input: AmazonOrdersV2026SearchInput = {}) {
      if (input.amazonOrderIds?.length) {
        throw new Error("Amazon Orders v2026 SearchOrdersApi does not support amazonOrderIds; call getOrderV2026 for each order ID.");
      }
      const marketplaceIds = input.marketplaceIds ?? marketplaceIdsFromOptions(options);
      return sdkApis.ordersV2026Search().searchOrders(stripUndefinedAmazonPayload({
        marketplaceIds,
        createdAfter: sdkDate(input.createdAfter, "createdAfter"),
        createdBefore: sdkDate(input.createdBefore, "createdBefore"),
        lastUpdatedAfter: sdkDate(input.lastUpdatedAfter, "lastUpdatedAfter"),
        lastUpdatedBefore: sdkDate(input.lastUpdatedBefore, "lastUpdatedBefore"),
        fulfillmentStatuses: input.fulfillmentStatuses,
        fulfilledBy: input.fulfilledBy ? [input.fulfilledBy] : undefined,
        maxResultsPerPage: input.maxResultsPerPage,
        paginationToken: input.paginationToken,
        includedData: input.includedData,
      } satisfies AmazonOrdersV2026SdkSearchInput)) as Promise<AmazonOrdersResponse>;
    },
    async getOrderV2026(amazonOrderId, input: AmazonOrdersV2026GetInput = {}) {
      return sdkApis.ordersV2026Get().getOrder(amazonOrderId, stripUndefinedAmazonPayload({
        includedData: input.includedData,
      })) as Promise<AmazonOrderResponse>;
    },
    async getSolicitationActionsForOrder(amazonOrderId, marketplaceIds) {
      return sdkApis.solicitations().getSolicitationActionsForOrder(
        amazonOrderId,
        marketplaceIds ?? marketplaceIdsFromOptions(options),
      ) as Promise<AmazonSolicitationActionsResponse>;
    },
    async createProductReviewAndSellerFeedbackSolicitation(amazonOrderId, marketplaceIds) {
      return sdkApis.solicitations().createProductReviewAndSellerFeedbackSolicitation(
        amazonOrderId,
        marketplaceIds ?? marketplaceIdsFromOptions(options),
      ) as Promise<AmazonResource>;
    },
    async getMarketplaceParticipations(_input = {}) {
      return sdkApis.sellers().getMarketplaceParticipations() as Promise<AmazonMarketplaceParticipationsResponse>;
    },
    async getDestinations() {
      return sdkApis.notifications().getDestinations() as Promise<AmazonNotificationDestinationsResponse>;
    },
    async getDestination(destinationId) {
      return sdkApis.notifications().getDestination(destinationId) as Promise<AmazonNotificationDestinationResponse>;
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
      return sdkApis.notifications().createSubscription(input.notificationType, stripUndefinedAmazonPayload({
        payloadVersion: input.payloadVersion ?? "1.0",
        destinationId: input.destinationId,
        processingDirective: input.processingDirective,
      })) as Promise<AmazonNotificationSubscriptionResponse>;
    },
    async getSubscription(input) {
      if (!input.notificationType) {
        throw new Error("Amazon Notifications getSubscription requires a notificationType.");
      }
      return sdkApis.notifications().getSubscription(input.notificationType, stripUndefinedAmazonPayload({
        payloadVersion: input.payloadVersion,
      })) as Promise<AmazonNotificationSubscriptionResponse>;
    },
    async deleteSubscription(input) {
      if (!input.notificationType) {
        throw new Error("Amazon Notifications deleteSubscription requires a notificationType.");
      }
      if (!input.subscriptionId) {
        throw new Error("Amazon Notifications deleteSubscription requires a subscriptionId from getSubscription/getSubscriptionById.");
      }
      return sdkApis.notifications().deleteSubscriptionById(
        input.subscriptionId,
        input.notificationType,
      ) as Promise<Record<string, never>>;
    },
  };
}

function sdkDate(value: string | undefined, key: string): Date | undefined {
  if (!value) return undefined;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Amazon Orders v2026 requires '${key}' to be an ISO-8601 date string.`);
  }
  return parsed;
}
