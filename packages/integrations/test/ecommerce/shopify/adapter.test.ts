import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { readProviderCoverageArtifact } from "../../provider-coverage-artifacts.js";
import {
  SHOPIFY_ADMIN_GRAPHQL_API_VERSION,
  SHOPIFY_ADMIN_GRAPHQL_GENERATED_PER_ROOT_FIELD_WRAPPER_COUNT,
  SHOPIFY_ADMIN_GRAPHQL_HELPER_CATALOG,
  SHOPIFY_ADMIN_GRAPHQL_HELPER_CATALOG_ENTRY_COUNT,
  SHOPIFY_ADMIN_GRAPHQL_MUTATION_FIELD_COUNT,
  SHOPIFY_ADMIN_GRAPHQL_QUERY_ROOT_FIELD_COUNT,
  SHOPIFY_ADMIN_GRAPHQL_ROOT_FIELD_COUNT,
  SHOPIFY_ADMIN_GRAPHQL_ROOT_FIELDS,
  SHOPIFY_ADMIN_GRAPHQL_SELECTED_TYPED_HELPER_COUNT,
  SHOPIFY_ADMIN_GRAPHQL_SELECTED_TYPED_ROOT_FIELD_COUNT,
  SHOPIFY_PLATFORM_GAPS,
  createShopifyEcommerceClient,
  createShopifyEcommerceLiveChecks,
  parseShopifyWebhook,
  shopifyEcommerceCredentialStatuses,
  shopifyEcommerceProviderManifest,
  validateShopifyWebhookSignature,
} from "../../../src/ecommerce/shopify/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Shopify ecommerce", () => {
    expect(shopifyEcommerceProviderManifest).toMatchObject({
      id: "ecommerce.shopify",
      packageName: "@cognidesk/integrations",
      category: "ecommerce",
      provider: "shopify",
      trustLevel: "official",
    });
    expect(shopifyEcommerceProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "read-provider-object",
        "search-provider-object",
        "create-provider-object",
        "ecommerce.graphql",
      ]));
    const searchCapability = shopifyEcommerceProviderManifest.capabilities
      .find((capability) => capability.capability === "search-provider-object");
    expect(searchCapability?.providerObjects).toEqual(expect.arrayContaining([
      expect.objectContaining({ kind: "shopifyProduct" }),
    ]));
    expect(shopifyEcommerceProviderManifest.coverage).toMatchObject({
      scope: "support-workflow-subset",
    });
    expect(shopifyEcommerceProviderManifest.coverage.notes.join(" "))
      .toContain("full Shopify Admin API coverage, Storefront");
    expect(shopifyEcommerceProviderManifest.coverage.notes.join(" "))
      .toContain("raw Admin GraphQL escape-hatch");
    expect(shopifyEcommerceProviderManifest.metadata).toMatchObject({
      adminGraphqlSchemaCatalog: {
        apiVersion: "2026-04",
        queryRootFieldCount: 282,
        mutationFieldCount: 510,
        rootFieldCount: 792,
        selectedTypedHelperCount: 9,
        selectedTypedRootFieldCount: 8,
        generatedPerRootFieldWrapperCount: 0,
        rawAdminGraphqlEscapeHatch: true,
        fullShopifyPlatformCoverage: false,
      },
      rawProviderRequest: {
        capability: "ecommerce.graphql",
        acknowledgementRequired: true,
        coverage: "escape-hatch-not-full-provider-api",
      },
    });
    expect(shopifyEcommerceProviderManifest.capabilities.find((capability) =>
      capability.capability === "ecommerce.graphql"
    )?.description).toContain("does not imply full-provider API coverage");
    expect(shopifyEcommerceProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://shopify.dev/docs/api/admin-graphql/latest",
        "https://shopify.dev/docs/api/admin-graphql/2026-04/objects/QueryRoot",
        "https://shopify.dev/docs/api/admin-graphql/2026-04/objects/Mutation",
        "https://shopify.dev/docs/api/storefront/latest",
        "https://shopify.dev/docs/api/functions/latest",
        "https://shopify.dev/docs/apps/build/payments",
        "https://shopify.dev/docs/apps/build/webhooks/subscribe/https#step-5-verify-the-webhook",
      ]));
  });

  it("publishes a generated Admin GraphQL root-field inventory without implying generated wrappers", () => {
    expect(SHOPIFY_ADMIN_GRAPHQL_API_VERSION).toBe("2026-04");
    expect(SHOPIFY_ADMIN_GRAPHQL_QUERY_ROOT_FIELD_COUNT).toBe(282);
    expect(SHOPIFY_ADMIN_GRAPHQL_MUTATION_FIELD_COUNT).toBe(510);
    expect(SHOPIFY_ADMIN_GRAPHQL_ROOT_FIELD_COUNT).toBe(792);
    expect(SHOPIFY_ADMIN_GRAPHQL_SELECTED_TYPED_HELPER_COUNT).toBe(9);
    expect(SHOPIFY_ADMIN_GRAPHQL_HELPER_CATALOG_ENTRY_COUNT).toBe(14);
    expect(SHOPIFY_ADMIN_GRAPHQL_SELECTED_TYPED_ROOT_FIELD_COUNT).toBe(8);
    expect(SHOPIFY_ADMIN_GRAPHQL_GENERATED_PER_ROOT_FIELD_WRAPPER_COUNT).toBe(0);
    expect(SHOPIFY_ADMIN_GRAPHQL_ROOT_FIELDS).toHaveLength(792);
    expect(SHOPIFY_ADMIN_GRAPHQL_HELPER_CATALOG.map((helper) => helper.name))
      .toEqual(expect.arrayContaining(["graphql", "getShop", "searchProducts", "createDraftOrder"]));
    expect(SHOPIFY_PLATFORM_GAPS.map((gap) => gap.url)).toEqual(expect.arrayContaining([
      "https://shopify.dev/docs/api/storefront/latest",
      "https://shopify.dev/docs/api/functions/latest",
      "https://shopify.dev/docs/apps/build/payments",
      "https://shopify.dev/docs/api/admin-rest",
    ]));

    const rootFieldArtifact = readProviderCoverageArtifact<{
      summary: {
        rootFieldCount: number;
        generatedPerRootFieldWrapperCount: number;
        fullShopifyPlatformCoverage: boolean;
      };
      rootFields: Array<{ uid: string; type: string }>;
    }>("docs/provider-coverage/shopify-admin-graphql-2026-04-2026-06-18.root-fields.json", () => ({
      summary: {
        rootFieldCount: SHOPIFY_ADMIN_GRAPHQL_ROOT_FIELD_COUNT,
        generatedPerRootFieldWrapperCount: SHOPIFY_ADMIN_GRAPHQL_GENERATED_PER_ROOT_FIELD_WRAPPER_COUNT,
        fullShopifyPlatformCoverage: false,
      },
      rootFields: SHOPIFY_ADMIN_GRAPHQL_ROOT_FIELDS.map(({ uid, type }) => ({ uid, type })),
    }));
    const functionArtifact = readProviderCoverageArtifact<{
      summary: { helperCatalogEntryCount: number };
      functions: Array<{ name: string; kind: string }>;
    }>("docs/provider-coverage/shopify-admin-graphql-2026-04-2026-06-18.functions.json", () => ({
      summary: { helperCatalogEntryCount: SHOPIFY_ADMIN_GRAPHQL_HELPER_CATALOG_ENTRY_COUNT },
      functions: SHOPIFY_ADMIN_GRAPHQL_HELPER_CATALOG.map(({ name, kind }) => ({ name, kind })),
    }));

    expect(rootFieldArtifact.summary).toMatchObject({
      rootFieldCount: 792,
      generatedPerRootFieldWrapperCount: 0,
      fullShopifyPlatformCoverage: false,
    });
    expect(rootFieldArtifact.rootFields).toEqual(expect.arrayContaining([
      expect.objectContaining({ uid: "QueryRoot.products", type: "ProductConnection!" }),
      expect.objectContaining({ uid: "Mutation.draftOrderCreate", type: "DraftOrderCreatePayload" }),
    ]));
    expect(functionArtifact.summary.helperCatalogEntryCount).toBe(14);
    expect(functionArtifact.functions).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: "graphql", kind: "raw-admin-graphql-escape-hatch" }),
    ]));
  });

  it("runs Shopify Admin GraphQL requests through the configured shop endpoint", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        data: {
          shop: {
            id: "gid://shopify/Shop/1",
            name: "Example",
            myshopifyDomain: "example.myshopify.com",
            plan: { displayName: "Advanced" },
          },
        },
      }), { status: 200 })
    );
    const client = createShopifyEcommerceClient({
      shopDomain: "https://example.myshopify.com/admin",
      adminAccessToken: "shpat_token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const shop = await client.getShop();

    expect(shop.name).toBe("Example");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.myshopify.com/admin/api/2026-04/graphql.json",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "x-shopify-access-token": "shpat_token",
          "content-type": "application/json",
        }),
      }),
    );
  });

  it("searches orders and creates draft orders with GraphQL operation shapes", async () => {
    const fetchMock = vi.fn(async (_url: string, init: RequestInit) => {
      const body = JSON.parse(String(init.body)) as { query: string };
      if (body.query.includes("draftOrderCreate")) {
        return new Response(JSON.stringify({
          data: {
            draftOrderCreate: {
              draftOrder: { id: "gid://shopify/DraftOrder/1", name: "#D1" },
              userErrors: [],
            },
          },
        }), { status: 200 });
      }
      return new Response(JSON.stringify({
        data: {
          orders: {
            edges: [{
              node: {
                id: "gid://shopify/Order/1",
                name: "#1001",
                displayFinancialStatus: "PAID",
                displayFulfillmentStatus: "UNFULFILLED",
              },
            }],
            pageInfo: { hasNextPage: false, endCursor: null },
          },
        },
      }), { status: 200 });
    });
    const client = createShopifyEcommerceClient({
      shopDomain: "example.myshopify.com",
      adminAccessToken: "shpat_token",
      apiVersion: "2026-04",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const orders = await client.searchOrders({ query: "email:customer@example.test", first: 5 });
    const draftOrder = await client.createDraftOrder({
      input: {
        email: "customer@example.test",
        lineItems: [{ title: "Support replacement", quantity: 1, originalUnitPrice: "0.00" }],
      },
    });

    expect(orders.nodes).toHaveLength(1);
    expect(draftOrder.draftOrder).toMatchObject({ name: "#D1" });
    const orderRequest = JSON.parse(String((fetchMock.mock.calls[0] as unknown[])[1] && ((fetchMock.mock.calls[0] as unknown[])[1] as RequestInit).body));
    expect(orderRequest.variables).toMatchObject({
      first: 5,
      query: "email:customer@example.test",
    });
    const draftRequest = JSON.parse(String(((fetchMock.mock.calls[1] as unknown[])[1] as RequestInit).body));
    expect(draftRequest.variables.input).toMatchObject({
      email: "customer@example.test",
    });
  });

  it("reads Shopify customers and draft orders through documented GraphQL queries", async () => {
    const fetchMock = vi.fn(async (_url: string, init: RequestInit) => {
      const body = JSON.parse(String(init.body)) as { query: string };
      if (body.query.includes("CognideskShopifyCustomer(")) {
        return new Response(JSON.stringify({
          data: {
            customer: {
              id: "gid://shopify/Customer/1",
              displayName: "Ada Lovelace",
              email: "ada@example.test",
              phone: "+15550100",
              updatedAt: "2026-06-17T12:00:00Z",
            },
          },
        }), { status: 200 });
      }
      return new Response(JSON.stringify({
        data: {
          draftOrder: {
            id: "gid://shopify/DraftOrder/1",
            name: "#D1",
            email: "ada@example.test",
            status: "OPEN",
            updatedAt: "2026-06-17T12:01:00Z",
          },
        },
      }), { status: 200 });
    });
    const client = createShopifyEcommerceClient({
      shopDomain: "example.myshopify.com",
      adminAccessToken: "shpat_token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getCustomer("gid://shopify/Customer/1")).resolves.toMatchObject({
      id: "gid://shopify/Customer/1",
      displayName: "Ada Lovelace",
    });
    await expect(client.getDraftOrder("gid://shopify/DraftOrder/1")).resolves.toMatchObject({
      id: "gid://shopify/DraftOrder/1",
      name: "#D1",
    });

    const customerRequest = JSON.parse(String(((fetchMock.mock.calls[0] as unknown[])[1] as RequestInit).body));
    expect(customerRequest.query).toContain("customer(id: $id)");
    expect(customerRequest.variables).toEqual({ id: "gid://shopify/Customer/1" });
    const draftOrderRequest = JSON.parse(String(((fetchMock.mock.calls[1] as unknown[])[1] as RequestInit).body));
    expect(draftOrderRequest.query).toContain("draftOrder(id: $id)");
    expect(draftOrderRequest.variables).toEqual({ id: "gid://shopify/DraftOrder/1" });
  });

  it("reads and searches Shopify products with GraphQL operation shapes", async () => {
    const fetchMock = vi.fn(async (_url: string, init: RequestInit) => {
      const body = JSON.parse(String(init.body)) as { query: string };
      if (body.query.includes("CognideskShopifyProduct(")) {
        return new Response(JSON.stringify({
          data: {
            node: {
              __typename: "Product",
              id: "gid://shopify/Product/1",
              title: "Replacement part",
              handle: "replacement-part",
              status: "ACTIVE",
              productType: "Parts",
              vendor: "Example",
              updatedAt: "2026-06-17T12:00:00Z",
            },
          },
        }), { status: 200 });
      }
      return new Response(JSON.stringify({
        data: {
          products: {
            edges: [{
              node: {
                id: "gid://shopify/Product/1",
                title: "Replacement part",
                handle: "replacement-part",
                status: "ACTIVE",
              },
            }],
            pageInfo: { hasNextPage: true, endCursor: "cursor_1" },
          },
        },
      }), { status: 200 });
    });
    const client = createShopifyEcommerceClient({
      shopDomain: "example.myshopify.com",
      adminAccessToken: "shpat_token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getProduct("gid://shopify/Product/1")).resolves.toMatchObject({
      id: "gid://shopify/Product/1",
      title: "Replacement part",
    });
    await expect(client.searchProducts({ query: "title:'Replacement part'", first: 3, after: "cursor_0" }))
      .resolves.toMatchObject({
        nodes: [expect.objectContaining({ id: "gid://shopify/Product/1" })],
        hasNextPage: true,
        endCursor: "cursor_1",
      });

    const getRequest = JSON.parse(String(((fetchMock.mock.calls[0] as unknown[])[1] as RequestInit).body));
    expect(getRequest.variables).toEqual({ id: "gid://shopify/Product/1" });
    const searchRequest = JSON.parse(String(((fetchMock.mock.calls[1] as unknown[])[1] as RequestInit).body));
    expect(searchRequest.variables).toMatchObject({
      first: 3,
      after: "cursor_0",
      query: "title:'Replacement part'",
    });
  });

  it("validates and parses Shopify webhook HMAC signatures", async () => {
    const webhookSecret = "webhook-secret";
    const body = JSON.stringify({ id: 123, name: "#1001" });
    const hmac = signShopifyWebhook(webhookSecret, body);
    const request = new Request("https://example.test/shopify/webhook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-shopify-hmac-sha256": hmac,
        "x-shopify-topic": "orders/paid",
        "x-shopify-shop-domain": "example.myshopify.com",
        "x-shopify-webhook-id": "webhook_1",
        "x-shopify-api-version": "2026-04",
      },
      body,
    });

    expect(validateShopifyWebhookSignature({ webhookSecret, rawBody: body, hmac })).toBe(true);
    const parsed = await parseShopifyWebhook(request, { webhookSecret });

    expect(parsed).toMatchObject({
      topic: "orders/paid",
      shopDomain: "example.myshopify.com",
      webhookId: "webhook_1",
      apiVersion: "2026-04",
      payload: { id: 123, name: "#1001" },
    });
  });

  it("rejects tampered Shopify webhook signatures", () => {
    const webhookSecret = "webhook-secret";
    const body = JSON.stringify({ id: 123 });
    const hmac = signShopifyWebhook(webhookSecret, body);

    expect(validateShopifyWebhookSignature({
      webhookSecret,
      rawBody: JSON.stringify({ id: 456 }),
      hmac,
    })).toBe(false);
  });

  it("fails closed by default when Shopify webhook verification has no secret", async () => {
    const request = new Request("https://example.test/shopify/webhook", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: 123 }),
    });

    await expect(parseShopifyWebhook(request))
      .rejects.toThrow("Shopify webhook secret is required");
  });

  it("parses Shopify webhooks without verification only when explicitly requested", async () => {
    const request = new Request("https://example.test/shopify/webhook", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: 123 }),
    });

    await expect(parseShopifyWebhook(request, { requireSignature: false }))
      .resolves.toMatchObject({ payload: { id: 123 } });
  });

  it("reports live conformance as credential-blocked until Shopify credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: shopifyEcommerceProviderManifest,
      channels: [{
        id: "ecommerce",
        channel: "ecommerce",
        providerPackageIds: [shopifyEcommerceProviderManifest.id],
        enabledCapabilities: ["receive", "read-provider-object", "search-provider-object", "create-provider-object"],
      }],
      credentialStatuses: shopifyEcommerceCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createShopifyEcommerceLiveChecks({
          shopDomain: "example.myshopify.com",
          adminAccessToken: "missing",
          client: {
            async getShop() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.shop" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Shopify shop live check and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: shopifyEcommerceProviderManifest,
      channels: [{
        id: "ecommerce",
        channel: "ecommerce",
        providerPackageIds: [shopifyEcommerceProviderManifest.id],
        enabledCapabilities: ["receive", "read-provider-object", "search-provider-object", "create-provider-object"],
      }],
      credentialStatuses: shopifyEcommerceCredentialStatuses({
        shopDomain: "example.myshopify.com",
        adminAccessConfigured: true,
        webhookSecretConfigured: true,
        scopes: ["read_orders", "read_customers"],
        apiVersion: "2026-04",
      }),
      live: {
        enabled: true,
        checks: createShopifyEcommerceLiveChecks({
          shopDomain: "example.myshopify.com",
          adminAccessToken: "configured",
          client: {
            async getShop() {
              return { id: "gid://shopify/Shop/1", name: "Example", myshopifyDomain: "example.myshopify.com" };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.shop",
      status: "passed",
    }));
  });
});

function signShopifyWebhook(secret: string, body: string) {
  return createHmac("sha256", secret).update(body).digest("base64");
}
