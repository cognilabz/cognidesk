import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createShopifyEcommerceClient,
  createShopifyEcommerceIntegrationFromClient,
  shopifyEcommerceCredentialStatuses,
  shopifyEcommerceProviderManifest,
  validateShopifyWebhookSignature,
} from "../src/index.js";

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
});

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
