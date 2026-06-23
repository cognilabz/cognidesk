import { defineIntegrationProviderPackage } from "@cognidesk/integration-kit";
import type { ProviderManifestInput } from "@cognidesk/core";

export const defaultShopifyGraphqlAdminApiVersion = "2026-04";

export const shopifyEcommerceProviderManifestInput = {
  id: "ecommerce.shopify",
  name: "Shopify",
  packageName: "@cognidesk/integration-ecommerce-shopify",
  provider: "shopify",
  category: "ecommerce",
  trustLevel: "official",
  directions: ["receive-only", "send-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Coverage is limited to selected Shopify Admin GraphQL support operations backed by the official Shopify Admin API client.",
      "The raw Admin GraphQL client remains available as an explicit escape hatch; Storefront, Functions, Payments, REST Admin, and app lifecycle coverage are not implied.",
      "Generated Shopify per-root-field Admin GraphQL wrappers are intentionally not part of this package.",
    ],
    evidence: [
      { label: "Shopify Admin GraphQL API reference", url: "https://shopify.dev/docs/api/admin-graphql/latest" },
      { label: "Shopify Admin API client", url: "https://www.npmjs.com/package/@shopify/admin-api-client" },
      { label: "Shopify webhook HMAC validation", url: "https://shopify.dev/docs/apps/build/webhooks/subscribe/https#step-5-verify-the-webhook" },
    ],
  },
  credentialRequirements: [
    {
      id: "shopify-shop-domain",
      label: "Shopify shop domain",
      description: "The SDK user's Shopify admin shop domain, for example example.myshopify.com.",
      required: true,
    },
    {
      id: "shopify-admin-access",
      label: "Shopify Admin API access",
      description: "Server-side Admin API access token with SDK-user-selected scopes.",
      scopes: ["read_orders", "read_customers", "read_products", "write_draft_orders"],
      required: true,
      metadata: { scopeKind: "provider-oauth-scopes" },
    },
    {
      id: "shopify-webhook-secret",
      label: "Shopify webhook secret",
      description: "Server-side secret used to validate Shopify webhook HMAC signatures.",
      required: false,
    },
  ],
  capabilities: [
    {
      capability: "receive",
      label: "Receive Shopify webhooks",
      description: "Validates and parses Shopify webhooks for SDK-user-owned commerce support workflows.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [{ kind: "shopifyWebhook", label: "Shopify Webhook" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "read-provider-object",
      label: "Read Shopify records",
      description: "Reads Shopify Admin GraphQL records such as shop, order, customer, product, and draft order nodes.",
      audiences: ["customer-facing", "internal-support", "mixed"],
      providerObjects: [
        { kind: "shopifyShop", label: "Shopify Shop" },
        { kind: "shopifyOrder", label: "Shopify Order" },
        { kind: "shopifyCustomer", label: "Shopify Customer" },
        { kind: "shopifyProduct", label: "Shopify Product" },
      ],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "search-provider-object",
      label: "Search Shopify records",
      description: "Searches Shopify orders, customers, and products with SDK-user-supplied Admin GraphQL queries.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [
        { kind: "shopifyOrder", label: "Shopify Order" },
        { kind: "shopifyCustomer", label: "Shopify Customer" },
        { kind: "shopifyProduct", label: "Shopify Product" },
      ],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "create-provider-object",
      label: "Create Shopify draft orders",
      description: "Creates Shopify draft orders through Admin GraphQL when SDK-user policy permits commerce mutations.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "shopifyDraftOrder", label: "Shopify Draft Order" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "ecommerce.graphql",
      label: "Run Shopify Admin GraphQL",
      description: "Runs SDK-user-selected raw Admin GraphQL operations against the configured Shopify shop as an explicit escape hatch.",
      audiences: ["internal-support"],
      providerObjects: [{ kind: "shopifyGraphqlResult", label: "Shopify GraphQL Result" }],
      requiresCredential: true,
      exposesSensitiveData: true,
      extension: true,
    },
  ],
  operations: [
    { alias: "ecommerce.event.receive", capability: "receive", providerObjects: [{ kind: "shopifyWebhook" }], exposesSensitiveData: true },
    { alias: "ecommerce.order.read", capability: "read-provider-object", providerOperation: "AdminGraphQL node Order", providerObjects: [{ kind: "shopifyOrder" }], exposesSensitiveData: true },
    { alias: "ecommerce.order.search", capability: "search-provider-object", providerOperation: "AdminGraphQL orders", providerObjects: [{ kind: "shopifyOrder" }], exposesSensitiveData: true },
    { alias: "ecommerce.customer.read", capability: "read-provider-object", providerOperation: "AdminGraphQL customer", providerObjects: [{ kind: "shopifyCustomer" }], exposesSensitiveData: true },
    { alias: "ecommerce.customer.search", capability: "search-provider-object", providerOperation: "AdminGraphQL customers", providerObjects: [{ kind: "shopifyCustomer" }], exposesSensitiveData: true },
    { alias: "ecommerce.product.read", capability: "read-provider-object", providerOperation: "AdminGraphQL node Product", providerObjects: [{ kind: "shopifyProduct" }], exposesSensitiveData: true },
    { alias: "ecommerce.product.search", capability: "search-provider-object", providerOperation: "AdminGraphQL products", providerObjects: [{ kind: "shopifyProduct" }], exposesSensitiveData: true },
    { alias: "ecommerce.draftOrder.create", capability: "create-provider-object", providerOperation: "AdminGraphQL draftOrderCreate", providerObjects: [{ kind: "shopifyDraftOrder" }], sideEffect: true, externallyVisible: true, requiresApproval: true, changesWorkflow: true, exposesSensitiveData: true },
    { alias: "shopify.adminGraphql", capability: "ecommerce.graphql", providerObjects: [{ kind: "shopifyGraphqlResult" }], extension: true, exposesSensitiveData: true },
  ],
  privacyNotes: [
    "Shopify records can include customer contact data, order contents, payment state, fulfillment state, addresses, discounts, and commerce workflow metadata.",
    "Admin API tokens and webhook secrets stay server-side; Studio receives only readiness status and policy-visible capability metadata.",
  ],
  limitations: [
    "The SDK user chooses Admin API version, scopes, webhook topics, customer visibility, fulfillment behavior, consent rules, and retention policy.",
    "This package provides normalized Admin GraphQL support operations and signature checks; it does not decide when to create draft orders, contact customers, issue discounts, refund orders, or expose commerce data.",
  ],
  maintainers: [{ name: "Cognidesk", type: "official" }],
  metadata: {
    defaultGraphqlAdminApiVersion: defaultShopifyGraphqlAdminApiVersion,
    docs: "https://shopify.dev/docs/api/admin-graphql/latest",
    sdkPackage: "@shopify/admin-api-client",
    implementation: {
      strategy: "official-sdk",
      sdkPackage: "@shopify/admin-api-client",
      optionalBroaderSdkPackage: "@shopify/shopify-api",
      generatedFullProviderApiClone: false,
      rawClientEscapeHatch: true,
    },
    rawProviderRequest: {
      capability: "ecommerce.graphql",
      acknowledgementRequired: true,
      coverage: "escape-hatch-not-full-provider-api",
    },
  },
} as const satisfies ProviderManifestInput;

export const shopifyEcommerceProviderManifest = defineIntegrationProviderPackage(shopifyEcommerceProviderManifestInput);
