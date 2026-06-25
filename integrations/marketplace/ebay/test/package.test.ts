import { createHash, generateKeyPairSync } from "node:crypto";
import { readFile } from "node:fs/promises";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it, vi } from "vitest";
import {
  EBAY_SELECTED_API_OPERATION_COUNT,
  createEbayDigitalSignatureHeaders,
  createEbayMarketplaceClient,
  createEbayMarketplaceIntegration,
  createEbayNotificationChallengeResponse,
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
      defaultClientPolicy: "built-in-rest-with-oauth-tokens-fail-closed",
      transportPolicy: "package-owned-typed-provider-rest-adapter",
      failClosedPolicy: "credential-missing-without-token-or-host-client",
    });

    const implementationMetadata = JSON.stringify(ebayMarketplaceProviderManifest.metadata?.implementation);
    expect(implementationMetadata).toContain("provider-owned-utility-sdks-plus-selected-rest-adapter");
    expect(implementationMetadata).toContain("provider-owned-utility-sdks-used-no-provider-owned-general-rest-sdk");
    expect(implementationMetadata).toContain("2026-06-25");
    expect(implementationMetadata).toContain("providerJsonRequest-for-selected-rest-operations");
    expect(implementationMetadata).toContain("provider-owned-runtime-used-for-default-digital-signature-headers");
    expect(implementationMetadata).toContain("provider-owned-runtime-used-for-endpoint-challenge");
    expect(implementationMetadata).toContain("provider-owned-oauth-helper-not-selected-rest-runtime");
    expect(implementationMetadata).toContain("community-wrapper-rejected-not-provider-owned");
    expect(implementationMetadata).toContain("ebay-api");
    expect(implementationMetadata).toContain("@tradebuddyhq/ebay-wrapper");
  });

  it("declares and imports provider-owned eBay utility SDKs at runtime", async () => {
    const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8")) as {
      dependencies?: Record<string, string>;
      cognidesk?: {
        providerSdkDependencies?: string[];
        providerRestAdapterException?: {
          result?: string;
          typedClientOverride?: string;
          packagesRejected?: Array<{ package?: string; reason?: string }>;
        };
      };
    };
    const signingSource = await readFile(new URL("../src/signing.ts", import.meta.url), "utf8");
    const webhookSource = await readFile(new URL("../src/webhook.ts", import.meta.url), "utf8");

    expect(packageJson.dependencies ?? {}).toHaveProperty("digital-signature-nodejs-sdk");
    expect(packageJson.dependencies ?? {}).toHaveProperty("event-notification-nodejs-sdk");
    expect(packageJson.cognidesk?.providerSdkDependencies).toEqual([
      "digital-signature-nodejs-sdk",
      "event-notification-nodejs-sdk",
    ]);
    expect(packageJson.cognidesk?.providerRestAdapterException).toMatchObject({
      result: "no-provider-owned-general-ebay-rest-sdk",
      typedClientOverride: "EbayMarketplaceProviderClient",
    });
    expect(packageJson.cognidesk?.providerRestAdapterException?.packagesRejected)
      .toEqual(expect.arrayContaining([
        expect.objectContaining({
          package: "ebay-api",
          reason: expect.stringContaining("not eBay/provider-owned"),
        }),
        expect.objectContaining({
          package: "ebay-oauth-nodejs-client",
          reason: expect.stringContaining("OAuth helper only"),
        }),
      ]));
    expect(signingSource).toContain("from \"digital-signature-nodejs-sdk\"");
    expect(signingSource).toContain("generateDigestHeader");
    expect(signingSource).toContain("generateSignatureInput");
    expect(signingSource).toContain("generateSignature");
    expect(webhookSource).toContain("from \"event-notification-nodejs-sdk\"");
    expect(webhookSource).toContain("validateEbayNotificationEndpoint");
  });

  it("uses eBay provider-owned utility SDKs for challenge and default signature headers", () => {
    const challengeCode = "challenge-code";
    const verificationToken = "verification_token_123456789012345";
    const endpoint = "https://example.test/ebay/webhook";
    const challenge = createEbayNotificationChallengeResponse({
      challengeCode,
      verificationToken,
      endpoint,
    });
    expect(challenge).toEqual({
      challengeResponse: createHash("sha256")
        .update(challengeCode)
        .update(verificationToken)
        .update(endpoint)
        .digest("hex"),
    });

    const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
    const headers = createEbayDigitalSignatureHeaders({
      method: "POST",
      url: "https://api.ebay.com/sell/fulfillment/v1/order/order-1/issue_refund",
      body: JSON.stringify({ reasonForRefund: "BUYER_CANCELLED" }),
      privateKey: privateKey.export({ type: "pkcs8", format: "pem" }).toString(),
      publicKeyJwe: "jwe-header-from-ebay",
    });

    expect(headers["content-digest"]).toBe(`sha-256=:${createHash("sha256")
      .update(JSON.stringify({ reasonForRefund: "BUYER_CANCELLED" }))
      .digest("base64")}:`);
    expect(headers["x-ebay-signature-key"]).toBe("jwe-header-from-ebay");
    expect(headers["signature-input"]).toMatch(/^sig1=\("content-digest" "x-ebay-signature-key" "@method" "@path" "@authority"\);created=\d+$/);
    expect(headers.signature).toMatch(/^sig1=:.+:$/);
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

    await expect(client.getOrder("order-1")).rejects.toMatchObject({
      name: "IntegrationError",
      code: "credential-missing",
      providerPackageId: "marketplace.ebay",
      provider: "ebay",
      message: expect.stringContaining("accessToken"),
      details: {
        functionName: "getOrder",
        providerClientInterface: "EbayMarketplaceProviderClient",
      },
    });
    await expect(providerClient.getUser()).rejects.toMatchObject({
      name: "IntegrationError",
      code: "credential-missing",
      details: {
        functionName: "getUser",
        requiredCredentials: ["accessToken", "applicationAccessToken"],
      },
    });
  });

  it("fails closed when an injected provider client omits a selected operation", async () => {
    const client = createEbayMarketplaceClient({
      providerClient: { getUser: vi.fn(async () => ({ userId: "user-1" })) } as unknown as EbayMarketplaceProviderClient,
    });

    await expect(client.getOrder("order-1")).rejects.toMatchObject({
      name: "IntegrationError",
      code: "contract-violation",
      providerPackageId: "marketplace.ebay",
      provider: "ebay",
      details: {
        functionName: "getOrder",
        providerClientInterface: "EbayMarketplaceProviderClient",
      },
    });
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
    )).rejects.toMatchObject({
      name: "IntegrationError",
      code: "contract-violation",
      providerPackageId: ebayMarketplaceProviderManifest.id,
      provider: ebayMarketplaceProviderManifest.provider,
      operationAlias: ebayMarketplaceOperationAlias("getOrder"),
      details: {
        functionName: "getOrder",
        clientInterface: "EbayMarketplaceClient",
      },
    });
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
