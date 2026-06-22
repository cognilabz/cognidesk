import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import {
  EBAY_SELECTED_API_OPERATION_COUNT,
  createEbayMarketplaceClient,
  ebayMarketplaceIntegration,
  ebayMarketplaceOperationAlias,
  ebayMarketplaceProviderManifest,
  ebaySelectedApiOperationCatalog,
  parseEbayNotificationWebhook,
} from "../src/index.js";

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
    expect(runtimeModule).toHaveProperty("parseEbayNotificationWebhook");
  });

  it("returns binary payment dispute evidence content without JSON parsing", async () => {
    const client = createEbayMarketplaceClient({
      accessToken: "token",
      fetch: (async () => new Response(new Uint8Array([1, 2, 3]))) as typeof fetch,
    });

    const body = await client.fetchPaymentDisputeEvidenceContent("dispute-1");

    expect(body).toBeInstanceOf(ArrayBuffer);
    expect([...new Uint8Array(body as ArrayBuffer)]).toEqual([1, 2, 3]);
  });

  it("surfaces non-JSON eBay error bodies with HTTP status context", async () => {
    const client = createEbayMarketplaceClient({
      accessToken: "token",
      fetch: (async () => new Response("temporarily unavailable", { status: 503 })) as typeof fetch,
    });

    await expect(client.getOrder("order-1")).rejects.toThrow("eBay API returned non-JSON error body with HTTP 503");
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
