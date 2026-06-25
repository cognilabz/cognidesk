import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createShopifyEcommerceLiveChecks,
  createShopifyEcommerceClient,
  createShopifyEcommerceIntegrationFromClient,
  normalizeShopifyShopDomain,
  shopifyEcommerceCredentialStatuses,
  shopifyEcommerceProviderManifest,
  validateShopifyWebhookSignature,
} from "../src/index.js";
import type { ShopifyAdminApiClient } from "../src/index.js";

describe("@cognidesk/integration-ecommerce-shopify", () => {
  it("binds every manifest operation to exactly one handler", () => {
    const integration = createShopifyEcommerceIntegrationFromClient(createShopifyEcommerceClient({
      shopDomain: "example.myshopify.com",
      adminAccessToken: "shpat_test",
      fetch: mockShopifyFetch(),
    }));

    expect(assertIntegrationConformance(integration)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(integration.operationAliases).toContain("shopify.adminGraphql");
  });

  it("keeps manifest imports SDK-free", async () => {
    const source = await readFile(new URL("../src/manifest.ts", import.meta.url), "utf8");
    expect(source).not.toMatch(/from ["']@shopify\/admin-api-client["']/);
    expect(source).not.toContain("createAdminApiClient");
    expect(shopifyEcommerceProviderManifest.packageName).toBe("@cognidesk/integration-ecommerce-shopify");
    expect(shopifyEcommerceProviderManifest.coverage.scope).toBe("support-workflow-subset");
  });

  it("uses the official Admin API client endpoint and headers", async () => {
    const calls: Array<{ url: string; headers: Record<string, string>; body: string }> = [];
    const client = createShopifyEcommerceClient({
      shopDomain: "https://example.myshopify.com/admin",
      adminAccessToken: "shpat_test",
      fetch: mockShopifyFetch(calls),
    });

    await expect(client.getShop()).resolves.toMatchObject({ id: "gid://shopify/Shop/1" });
    expect(calls[0]).toMatchObject({
      url: "https://example.myshopify.com/admin/api/2026-04/graphql.json",
    });
    expect(calls[0]?.headers["x-shopify-access-token"]).toBe("shpat_test");
  });

  it("translates GraphQL-backed operations to the Admin API SDK request function", async () => {
    const sdk = mockShopifyAdminApiClient();
    const client = createShopifyEcommerceClient({
      shopDomain: "example.myshopify.com",
      adminAccessToken: "shpat_test",
      rawClient: sdk.rawClient,
    });
    const integration = createShopifyEcommerceIntegrationFromClient(client) as any;

    await expect(integration.run("ecommerce.order.read", { id: "gid://shopify/Order/1" }))
      .resolves.toMatchObject({ id: "gid://shopify/Order/1", name: "#1001" });
    await expect(integration.run("ecommerce.order.search", {
      first: 2,
      after: "order-cursor",
      query: "email:customer@example.test",
    })).resolves.toMatchObject({ nodes: [{ id: "gid://shopify/Order/2" }], endCursor: "next-order" });
    await expect(integration.run("ecommerce.customer.read", { id: "gid://shopify/Customer/1" }))
      .resolves.toMatchObject({ id: "gid://shopify/Customer/1" });
    await expect(integration.run("ecommerce.customer.search", { first: 1, query: "email:customer@example.test" }))
      .resolves.toMatchObject({ nodes: [{ id: "gid://shopify/Customer/2" }] });
    await expect(integration.run("ecommerce.product.read", { id: "gid://shopify/Product/1" }))
      .resolves.toMatchObject({ id: "gid://shopify/Product/1", title: "Desk" });
    await expect(integration.run("ecommerce.product.search", { first: 1, query: "title:Desk" }))
      .resolves.toMatchObject({ nodes: [{ id: "gid://shopify/Product/2" }] });
    await expect(integration.run("ecommerce.draftOrder.create", { input: { lineItems: [] } }))
      .resolves.toMatchObject({ draftOrder: { id: "gid://shopify/DraftOrder/1" }, userErrors: [] });
    await expect(integration.run("shopify.adminGraphql", {
      query: "query CognideskRaw($id: ID!) { shop { id } }",
      variables: { id: "gid://shopify/Shop/1" },
      apiVersion: "2025-10",
      headers: { "X-Cognidesk-Test": "1" },
      retries: 1,
      operationName: "IgnoredByShopifySdk",
    })).resolves.toMatchObject({ data: { shop: { id: "gid://shopify/Shop/1" } } });

    expect(sdk.fetch).not.toHaveBeenCalled();
    expect(sdk.request.mock.calls.map(([operation]) => operation)).toEqual([
      expect.stringContaining("query CognideskShopifyOrder"),
      expect.stringContaining("query CognideskShopifyOrders"),
      expect.stringContaining("query CognideskShopifyCustomer"),
      expect.stringContaining("query CognideskShopifyCustomers"),
      expect.stringContaining("query CognideskShopifyProduct"),
      expect.stringContaining("query CognideskShopifyProducts"),
      expect.stringContaining("mutation CognideskShopifyDraftOrderCreate"),
      "query CognideskRaw($id: ID!) { shop { id } }",
    ]);
    expect(sdk.request.mock.calls[0]?.[1]).toEqual({ variables: { id: "gid://shopify/Order/1" } });
    expect(sdk.request.mock.calls[1]?.[1]).toEqual({
      variables: { first: 2, after: "order-cursor", query: "email:customer@example.test" },
    });
    expect(sdk.request.mock.calls.at(-1)?.[1]).toEqual({
      variables: { id: "gid://shopify/Shop/1" },
      apiVersion: "2025-10",
      headers: { "X-Cognidesk-Test": "1" },
      retries: 1,
    });
    expect(sdk.request.mock.calls.at(-1)?.[1]).not.toHaveProperty("operationName");
  });

  it("trims Shopify shop domains before stripping protocol and paths", () => {
    expect(normalizeShopifyShopDomain(" https://example.myshopify.com/admin ")).toBe("example.myshopify.com");
  });

  it("exposes raw Admin GraphQL and raw-client escape hatches", async () => {
    const client = createShopifyEcommerceClient({
      shopDomain: "example.myshopify.com",
      adminAccessToken: "shpat_test",
      fetch: mockShopifyFetch(),
    });
    const integration = createShopifyEcommerceIntegrationFromClient(client) as any;

    await expect(integration.run("shopify.adminGraphql", {})).resolves.toBe(client.rawClient);
    await expect(integration.run("shopify.adminGraphql", { query: "query Test { shop { id } }" }))
      .resolves.toMatchObject({ data: { shop: { id: "gid://shopify/Shop/1" } } });
  });

  it("validates and parses Shopify webhooks", async () => {
    const body = JSON.stringify({ id: 1, email: "customer@example.test" });
    const hmac = createHmac("sha256", "secret").update(Buffer.from(body)).digest("base64");
    const request = new Request("https://example.test/shopify", {
      method: "POST",
      headers: {
        "x-shopify-hmac-sha256": hmac,
        "x-shopify-topic": "orders/paid",
        "x-shopify-shop-domain": "example.myshopify.com",
      },
      body,
    });
    const client = createShopifyEcommerceClient({
      shopDomain: "example.myshopify.com",
      adminAccessToken: "shpat_test",
      fetch: mockShopifyFetch(),
    });

    expect(validateShopifyWebhookSignature({ webhookSecret: "secret", rawBody: body, hmac })).toBe(true);
    await expect(client.parseWebhook({ request, webhookSecret: "secret" })).resolves.toMatchObject({
      topic: "orders/paid",
      shopDomain: "example.myshopify.com",
      payload: { id: 1 },
    });
  });

  it("reports credential readiness without a live client", () => {
    expect(shopifyEcommerceCredentialStatuses({
      shopDomain: "example.myshopify.com",
      adminAccessConfigured: true,
      webhookSecretConfigured: false,
    })).toEqual(expect.arrayContaining([
      expect.objectContaining({ requirementId: "shopify-shop-domain", state: "configured" }),
      expect.objectContaining({ requirementId: "shopify-admin-access", state: "configured" }),
      expect.objectContaining({ requirementId: "shopify-webhook-secret", state: "missing" }),
    ]));
  });

  it("short-circuits aborted live checks and returns bounded shop details", async () => {
    let calls = 0;
    const [check] = createShopifyEcommerceLiveChecks({
      client: {
        async getShop() {
          calls += 1;
          return {
            id: "gid://shopify/Shop/1",
            name: "Example",
            myshopifyDomain: "example.myshopify.com",
            plan: "plus",
          };
        },
      },
    });
    if (!check) throw new Error("Shopify live check should be registered.");
    const controller = new AbortController();
    controller.abort();

    await expect(check.run({ signal: controller.signal })).rejects.toThrow("aborted");
    expect(calls).toBe(0);
    await expect(check.run()).resolves.toEqual({
      details: {
        id: "gid://shopify/Shop/1",
        name: "Example",
        myshopifyDomain: "example.myshopify.com",
      },
    });
  });
});

function mockShopifyAdminApiClient() {
  const request = vi.fn(async (operation: string, _options?: unknown) => shopifyAdminGraphqlResponse(operation));
  const fetch = vi.fn(async () => {
    throw new Error("Shopify GraphQL operations should use the Admin API SDK request function.");
  });
  const rawClient = {
    config: {
      storeDomain: "https://example.myshopify.com",
      apiVersion: "2026-04",
      apiUrl: "https://example.myshopify.com/admin/api/2026-04/graphql.json",
      accessToken: "shpat_test",
      headers: {},
    },
    getHeaders: (headers = {}) => headers,
    getApiUrl: () => "https://example.myshopify.com/admin/api/2026-04/graphql.json",
    fetch,
    request,
  } as unknown as ShopifyAdminApiClient;

  return { rawClient, fetch, request };
}

function shopifyAdminGraphqlResponse(operation: string) {
  if (operation.includes("CognideskShopifyOrder(")) {
    return { data: { node: { __typename: "Order", id: "gid://shopify/Order/1", name: "#1001" } } };
  }
  if (operation.includes("CognideskShopifyOrders")) {
    return {
      data: {
        orders: {
          edges: [{ node: { id: "gid://shopify/Order/2", name: "#1002" } }],
          pageInfo: { hasNextPage: true, endCursor: "next-order" },
        },
      },
    };
  }
  if (operation.includes("CognideskShopifyCustomer(")) {
    return { data: { customer: { id: "gid://shopify/Customer/1", email: "customer@example.test" } } };
  }
  if (operation.includes("CognideskShopifyCustomers")) {
    return {
      data: {
        customers: {
          edges: [{ node: { id: "gid://shopify/Customer/2", email: "customer@example.test" } }],
          pageInfo: { hasNextPage: false, endCursor: null },
        },
      },
    };
  }
  if (operation.includes("CognideskShopifyProduct(")) {
    return { data: { node: { __typename: "Product", id: "gid://shopify/Product/1", title: "Desk" } } };
  }
  if (operation.includes("CognideskShopifyProducts")) {
    return {
      data: {
        products: {
          edges: [{ node: { id: "gid://shopify/Product/2", title: "Desk Lamp" } }],
          pageInfo: { hasNextPage: false, endCursor: null },
        },
      },
    };
  }
  if (operation.includes("CognideskShopifyDraftOrderCreate")) {
    return {
      data: {
        draftOrderCreate: {
          draftOrder: { id: "gid://shopify/DraftOrder/1", name: "#D1" },
          userErrors: [],
        },
      },
    };
  }
  return { data: { shop: { id: "gid://shopify/Shop/1" } } };
}

function mockShopifyFetch(calls: Array<{ url: string; headers: Record<string, string>; body: string }> = []) {
  return async (url: RequestInfo | URL, init?: RequestInit) => {
    calls.push({
      url: String(url),
      headers: Object.fromEntries(Array.from(new Headers(init?.headers) as unknown as Iterable<[string, string]>)),
      body: String(init?.body ?? ""),
    });
    return new Response(JSON.stringify({
      data: {
        shop: { id: "gid://shopify/Shop/1", name: "Example", myshopifyDomain: "example.myshopify.com" },
      },
    }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  };
}
