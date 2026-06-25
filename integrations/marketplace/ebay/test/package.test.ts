import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it, vi } from "vitest";
import {
  EBAY_SELECTED_API_OPERATION_COUNT,
  createEbayMarketplaceClient,
  createEbayMarketplaceIntegration,
  createUnconfiguredEbayMarketplaceProviderClient,
  ebayMarketplaceIntegration,
  ebayMarketplaceOperationAlias,
  ebayMarketplaceProviderManifest,
  ebaySelectedApiFunctionCatalog,
  ebaySelectedApiOperationCatalog,
  parseEbayNotificationWebhook,
} from "../src/index.js";
import type { EbayMarketplaceProviderClient } from "../src/index.js";

describe("@cognidesk/integration-marketplace-ebay", () => {
  it("binds every selected support-slice operation to a handler", () => {
    const report = assertIntegrationConformance(ebayMarketplaceIntegration);

    expect(report.missingHandlerAliases).toEqual([]);
    expect(report.extraHandlerAliases).toEqual([]);
    expect(ebayMarketplaceProviderManifest.packageName).toBe("@cognidesk/integration-marketplace-ebay");
    expect(ebayMarketplaceProviderManifest.coverage.scope).toBe("support-workflow-subset");
    expect(ebayMarketplaceProviderManifest.operations).toHaveLength(EBAY_SELECTED_API_OPERATION_COUNT);
    expect(ebayMarketplaceProviderManifest.operations.map((operation) => operation.alias)).toContain(
      ebayMarketplaceOperationAlias("getOrder"),
    );
  });

  it("routes operation capabilities with operation-level specificity", () => {
    const capabilityByAlias = new Map(
      ebayMarketplaceProviderManifest.operations.map((operation) => [operation.alias, operation.capability]),
    );

    expect(capabilityByAlias.get(ebayMarketplaceOperationAlias("getConversations"))).toBe("search-provider-object");
    expect(capabilityByAlias.get(ebayMarketplaceOperationAlias("getConversation"))).toBe("read-provider-object");
    expect(capabilityByAlias.get(ebayMarketplaceOperationAlias("sendMessage"))).toBe("send");
    expect(capabilityByAlias.get(ebayMarketplaceOperationAlias("updateConversation"))).toBe("update-provider-object");
    expect(capabilityByAlias.get(ebayMarketplaceOperationAlias("createNotificationSubscription"))).toBe("create-provider-object");
    expect(capabilityByAlias.get(ebayMarketplaceOperationAlias("deleteNotificationSubscription"))).toBe("delete-provider-object");
  });

  it("records host-provider client metadata and local helper decisions", () => {
    expect(ebayMarketplaceProviderManifest.metadata?.providerClient).toMatchObject({
      interface: "EbayMarketplaceProviderClient",
      importPolicy: "optional-host-override",
      defaultClientPolicy: "built-in-rest-with-oauth-tokens",
      transportPolicy: "package-owned-provider-rest-adapter",
    });

    const implementationMetadata = JSON.stringify(ebayMarketplaceProviderManifest.metadata?.implementation);
    expect(implementationMetadata).toContain("no-official-sdk-rest-adapter");
    expect(implementationMetadata).toContain("providerJsonRequest");
    expect(implementationMetadata).toContain("local-helper-retained-for-signature-header-creation-only");
    expect(implementationMetadata).toContain("local-helper-retained-for-webhook-parsing-only");
    expect(implementationMetadata).toContain("non-official-package-not-used-as-default-provider-client");
  });

  it("keeps manifest imports runtime-light", async () => {
    const manifestModule = await import("../src/manifest.js");

    expect(Object.keys(manifestModule).sort()).toEqual([
      "EBAY_SELECTED_API_GENERATED_FUNCTION_COUNT",
      "EBAY_SELECTED_API_OPERATION_COUNT",
      "EBAY_SELECTED_API_PATH_COUNT",
      "EBAY_SELECTED_API_VERIFICATION_DATE",
      "ebayMarketplaceOperationAlias",
      "ebayMarketplaceProviderManifest",
      "ebaySelectedApiFunctionCatalog",
      "ebaySelectedApiOperationCatalog",
      "ebaySelectedApiSpecs",
    ]);
  });

  it("exposes runtime imports separately from manifest-only metadata", async () => {
    const runtimeModule = await import("../src/runtime.js");

    expect(runtimeModule).toHaveProperty("ebayMarketplaceIntegration");
    expect(runtimeModule).toHaveProperty("createEbayMarketplaceClient");
    expect(runtimeModule).toHaveProperty("createEbayMarketplaceIntegration");
    expect(runtimeModule).toHaveProperty("createUnconfiguredEbayMarketplaceProviderClient");
    expect(runtimeModule).toHaveProperty("parseEbayNotificationWebhook");
  });

  it("delegates marketplace operations to the injected provider client", async () => {
    const providerClient = fakeEbayProviderClient({
      fetchPaymentDisputeEvidenceContent: vi.fn(async () => new ArrayBuffer(3)),
    });
    const client = createEbayMarketplaceClient({
      providerClient,
    });

    await expect(client.getOrder("order-1")).resolves.toEqual({ ok: true, method: "getOrder" });
    const body = await client.fetchPaymentDisputeEvidenceContent("dispute-1");

    expect(providerClient.getOrder).toHaveBeenCalledWith("order-1");
    expect(providerClient.fetchPaymentDisputeEvidenceContent).toHaveBeenCalledWith("dispute-1");
    expect(body).toBeInstanceOf(ArrayBuffer);
  });

  it("calls eBay selected REST APIs by default when OAuth tokens are configured", async () => {
    const fetchMock = vi.fn(async (url: RequestInfo | URL, init?: RequestInit) => {
      if (String(url).includes("/public_key/")) {
        return new Response(JSON.stringify({ key: "public-key" }), { status: 200 });
      }
      if (init?.method === "POST") {
        return new Response(JSON.stringify({ destinationId: "destination-1" }), { status: 201 });
      }
      return new Response(JSON.stringify({ orderId: "order 1" }), { status: 200 });
    });
    const client = createEbayMarketplaceClient({
      accessToken: "user-token",
      applicationAccessToken: "application-token",
      marketplaceId: "EBAY_US",
      environment: "sandbox",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getOrder("order 1")).resolves.toMatchObject({ orderId: "order 1" });
    await expect(client.createNotificationDestination({ name: "Support destination" }))
      .resolves.toMatchObject({ destinationId: "destination-1" });
    await expect(client.getNotificationPublicKey("public key/1")).resolves.toMatchObject({ key: "public-key" });

    const [getOrderUrl, getOrderInit] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(getOrderUrl).toBe("https://api.sandbox.ebay.com/sell/fulfillment/v1/order/order%201");
    expect(getOrderInit.headers).toMatchObject({
      accept: "application/json",
      authorization: "Bearer user-token",
      "x-ebay-c-marketplace-id": "EBAY_US",
    });
    const [createDestinationUrl, createDestinationInit] = fetchMock.mock.calls[1] as [string, RequestInit];
    expect(createDestinationUrl).toBe("https://api.sandbox.ebay.com/commerce/notification/v1/destination");
    expect(createDestinationInit.method).toBe("POST");
    expect(JSON.parse(String(createDestinationInit.body))).toEqual({ name: "Support destination" });
    const [publicKeyUrl, publicKeyInit] = fetchMock.mock.calls[2] as [string, RequestInit];
    expect(publicKeyUrl).toBe("https://api.sandbox.ebay.com/commerce/notification/v1/public_key/public%20key%2F1");
    expect(publicKeyInit.headers).toMatchObject({ authorization: "Bearer application-token" });
  });

  it("throws structured eBay JSON errors from the built-in REST adapter", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ errors: [{ errorId: 25002, message: "Refund denied" }] }), { status: 409 })
    );
    const client = createEbayMarketplaceClient({
      accessToken: "user-token",
      marketplaceId: "EBAY_US",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.issueRefund("order-1", { reasonForRefund: "BUYER_CANCELLED" })).rejects.toMatchObject({
      name: "IntegrationError",
      code: "provider-validation",
      statusCode: 409,
      details: { payload: { errors: [{ errorId: 25002, message: "Refund denied" }] } },
    });
  });

  it("fails closed without OAuth tokens or an injected provider client", async () => {
    const client = createEbayMarketplaceClient();
    const providerClient = createUnconfiguredEbayMarketplaceProviderClient();

    await expect(client.getOrder("order-1")).rejects.toThrow("accessToken");
    await expect(providerClient.getUser()).rejects.toThrow("accessToken");
  });

  it("builds integration handlers around an injected provider client", async () => {
    const providerClient = fakeEbayProviderClient();
    const integration = createEbayMarketplaceIntegration({ providerClient });
    const handler = integration.operations[ebayMarketplaceOperationAlias("getOrder")];
    if (!handler) throw new Error("Expected eBay getOrder operation handler.");

    await expect(handler(
      { args: ["order-1"] },
      {
        providerPackageId: ebayMarketplaceProviderManifest.id,
        provider: ebayMarketplaceProviderManifest.provider,
        operationAlias: ebayMarketplaceOperationAlias("getOrder"),
      },
    )).resolves.toEqual({ ok: true, method: "getOrder" });

    expect(providerClient.getOrder).toHaveBeenCalledWith("order-1");
  });

  it("does not require signature verification when requireEbaySignature is false", async () => {
    const signatureHeader = Buffer.from(JSON.stringify({
      kid: "key-1",
      alg: "ECDSA",
      digest: "SHA1",
      signature: "invalid",
    })).toString("base64");

    const webhook = await parseEbayNotificationWebhook(
      new Request("https://example.test/webhook", {
        method: "POST",
        headers: { "x-ebay-signature": signatureHeader },
        body: JSON.stringify({ topic: "MARKETPLACE_ACCOUNT_DELETION", notificationId: "notification-1" }),
      }),
      { requireEbaySignature: false },
    );

    expect(webhook.signatureHeader?.kid).toBe("key-1");
    expect(webhook.topic).toBe("MARKETPLACE_ACCOUNT_DELETION");
  });

  it("throws a clear dispatch error when a selected operation is missing on the client", async () => {
    const handler = ebayMarketplaceIntegration.operations[ebayMarketplaceOperationAlias("getOrder")];
    if (!handler) throw new Error("Expected eBay getOrder operation handler.");

    await expect(handler(
      { client: {}, args: ["order-1"] },
      {
        providerPackageId: ebayMarketplaceProviderManifest.id,
        provider: ebayMarketplaceProviderManifest.provider,
        operationAlias: ebayMarketplaceOperationAlias("getOrder"),
      },
    )).rejects.toThrow("eBay marketplace client does not implement operation 'getOrder'");
  });

  it("records selected source metadata for each allowed operation", () => {
    const allowlist = ebayMarketplaceProviderManifest.metadata?.supportSlice as {
      allowlist?: Array<{ alias?: string; specUrl?: string }>;
    };

    expect(allowlist.allowlist).toHaveLength(ebaySelectedApiOperationCatalog.length);
    const firstOperation = ebaySelectedApiOperationCatalog.at(0);
    expect(firstOperation).toBeDefined();
    expect(allowlist.allowlist?.at(0)).toMatchObject({
      alias: ebayMarketplaceOperationAlias(firstOperation?.functionName ?? ""),
    });
  });
});

function fakeEbayProviderClient(
  overrides: Partial<Record<keyof EbayMarketplaceProviderClient, ReturnType<typeof vi.fn>>> = {},
): EbayMarketplaceProviderClient {
  return Object.fromEntries(
    ebaySelectedApiFunctionCatalog.map((functionName) => [
      functionName,
      overrides[functionName] ?? vi.fn(async () => ({ ok: true, method: functionName })),
    ]),
  ) as unknown as EbayMarketplaceProviderClient;
}
