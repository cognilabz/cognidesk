import { defineIntegration } from "@cognidesk/integration-kit";
import { createShopifyEcommerceClient } from "./client.js";
import { shopifyEcommerceProviderManifestInput } from "./manifest.js";
import type {
  ShopifyEcommerceClient,
  ShopifyEcommerceClientOptions,
  ShopifyRawAdminGraphqlInput,
} from "./types.js";

export function createShopifyEcommerceIntegration(options: ShopifyEcommerceClientOptions) {
  return createShopifyEcommerceIntegrationFromClient(createShopifyEcommerceClient(options));
}

export function createShopifyEcommerceIntegrationFromClient(client: ShopifyEcommerceClient) {
  return defineIntegration({
    manifest: shopifyEcommerceProviderManifestInput,
    operations: shopifyOperationHandlers(client) as never,
  });
}

export function shopifyOperationHandlers(client: ShopifyEcommerceClient) {
  return {
    "ecommerce.event.receive": (input: Parameters<ShopifyEcommerceClient["parseWebhook"]>[0]) => client.parseWebhook(input),
    "ecommerce.order.read": (input: Parameters<ShopifyEcommerceClient["getOrder"]>[0]) => client.getOrder(input),
    "ecommerce.order.search": (input: Parameters<ShopifyEcommerceClient["searchOrders"]>[0]) => client.searchOrders(input),
    "ecommerce.customer.read": (input: Parameters<ShopifyEcommerceClient["getCustomer"]>[0]) => client.getCustomer(input),
    "ecommerce.customer.search": (input: Parameters<ShopifyEcommerceClient["searchCustomers"]>[0]) => client.searchCustomers(input),
    "ecommerce.product.read": (input: Parameters<ShopifyEcommerceClient["getProduct"]>[0]) => client.getProduct(input),
    "ecommerce.product.search": (input: Parameters<ShopifyEcommerceClient["searchProducts"]>[0]) => client.searchProducts(input),
    "ecommerce.draftOrder.create": (input: Parameters<ShopifyEcommerceClient["createDraftOrder"]>[0]) => client.createDraftOrder(input),
    "shopify.adminGraphql": (input: ShopifyRawAdminGraphqlInput = {}) => {
      if (!input.query) return client.rawClient;
      return client.graphql(input as Required<Pick<ShopifyRawAdminGraphqlInput, "query">> & ShopifyRawAdminGraphqlInput);
    },
  };
}
