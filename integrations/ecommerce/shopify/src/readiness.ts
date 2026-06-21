import type { ProviderCredentialStatusInput } from "@cognidesk/core";
import { shopifyEcommerceProviderManifest } from "./manifest.js";
import type { ShopifyCredentialStatusInput, ShopifyEcommerceClient } from "./types.js";

export function shopifyEcommerceCredentialStatuses(input: ShopifyCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: shopifyEcommerceProviderManifest.id,
      requirementId: "shopify-shop-domain",
      state: input.shopDomain ? "configured" : "missing",
      message: input.shopDomain ? "Shopify shop domain is configured." : "A Shopify shop domain is required.",
    },
    {
      providerPackageId: shopifyEcommerceProviderManifest.id,
      requirementId: "shopify-admin-access",
      state: input.adminAccessConfigured ? "configured" : "missing",
      scopes: input.scopes ?? [],
      message: input.adminAccessConfigured
        ? "Shopify Admin API access is configured."
        : "A server-side Shopify Admin API access token is required.",
    },
    {
      providerPackageId: shopifyEcommerceProviderManifest.id,
      requirementId: "shopify-webhook-secret",
      state: input.webhookSecretConfigured ? "configured" : "missing",
      message: input.webhookSecretConfigured
        ? "Shopify webhook secret is configured."
        : "A Shopify webhook secret is required before webhook signature validation can be enforced.",
    },
  ];
}

export function createShopifyEcommerceLiveChecks(options: { client: Pick<ShopifyEcommerceClient, "getShop"> }) {
  return [{
    id: "shop",
    description: "Shopify Admin GraphQL shop query is reachable with the configured Admin API token.",
    requiredCredentialIds: ["shopify-shop-domain", "shopify-admin-access"],
    async run(context: { signal?: AbortSignal } = {}) {
      const shop = await options.client.getShop();
      if (context.signal?.aborted) throw new Error("Shopify live shop check aborted.");
      return { details: shop };
    },
  }];
}
