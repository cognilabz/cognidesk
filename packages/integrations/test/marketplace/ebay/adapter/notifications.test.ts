import {
  EBAY_SELECTED_API_GENERATED_FUNCTION_COUNT,
  EBAY_SELECTED_API_OPERATION_COUNT,
  EBAY_SELECTED_API_PATH_COUNT,
  createEbayDigitalSignatureHeaders,
  createEbayMarketplaceClient,
  createEbayMarketplaceLiveChecks,
  createEbayNotificationChallengeResponse,
  createHash,
  createSign,
  describe,
  ebayMarketplaceCredentialStatuses,
  ebayMarketplaceProviderManifest,
  ebaySelectedApiFunctionCatalog,
  ebaySelectedApiOperationCatalog,
  ebaySelectedApiSpecs,
  expect,
  generateKeyPairSync,
  it,
  parseEbayNotificationSignatureHeader,
  parseEbayNotificationWebhook,
  readProviderCoverageArtifact,
  runProviderConformance,
  verifyEbayNotificationSignature,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("computes the eBay notification challenge response in documented order", () => {
      const result = createEbayNotificationChallengeResponse({
        challengeCode: "challenge-code",
        verificationToken: "verification_token_12345678901234567890",
        endpoint: "https://example.test/ebay/notifications",
      });

      expect(result.challengeResponse).toBe(
        "412bfd036564c49f0b676e8fc1a1a78d5c0cadcf2d31d9e118735d6e6bd13588",
      );
    });

  it("manages eBay notification destinations and subscriptions through documented lifecycle endpoints", async () => {
      const fetchMock = vi.fn(async (_url: string, init: RequestInit) =>
        new Response(init.method === "DELETE" ? null : JSON.stringify({ id: "ok" }), {
          status: init.method === "DELETE" ? 204 : 200,
        })
      );
      const client = createEbayMarketplaceClient({
        accessToken: "oauth-token",
        fetch: fetchMock as unknown as typeof fetch,
      });

      await client.createNotificationDestination({
        name: "Cognidesk notifications",
        destinationUrl: "https://example.test/ebay/notifications",
        status: "ENABLED",
      });
      await client.updateNotificationDestination("destination-1", { status: "DISABLED" });
      await client.deleteNotificationDestination("destination-1");
      await client.createNotificationSubscription({
        topicId: "ORDER_CONFIRMATION",
        destinationId: "destination-1",
        payloadVersion: "1.0",
      });
      await client.disableNotificationSubscription("subscription-1");
      await client.enableNotificationSubscription("subscription-1");
      await client.testNotificationSubscription("subscription-1");
      await client.createNotificationSubscriptionFilter("subscription-1", {
        filterType: "ITEM_LOCATION",
        filter: { marketplaceId: "EBAY_US" },
      });
      await client.deleteNotificationSubscriptionFilter("subscription-1", "filter-1");
      await client.deleteNotificationSubscription("subscription-1");
      await client.getNotificationTopic("ORDER_CONFIRMATION");
      await client.getNotificationTopics({ limit: 25, continuationToken: "next-page" });

      expect(fetchMock).toHaveBeenNthCalledWith(
        1,
        "https://api.ebay.com/commerce/notification/v1/destination",
        expect.objectContaining({ method: "POST" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        2,
        "https://api.ebay.com/commerce/notification/v1/destination/destination-1",
        expect.objectContaining({ method: "PUT" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        3,
        "https://api.ebay.com/commerce/notification/v1/destination/destination-1",
        expect.objectContaining({ method: "DELETE" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        4,
        "https://api.ebay.com/commerce/notification/v1/subscription",
        expect.objectContaining({ method: "POST" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        5,
        "https://api.ebay.com/commerce/notification/v1/subscription/subscription-1/disable",
        expect.objectContaining({ method: "POST" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        6,
        "https://api.ebay.com/commerce/notification/v1/subscription/subscription-1/enable",
        expect.objectContaining({ method: "POST" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        7,
        "https://api.ebay.com/commerce/notification/v1/subscription/subscription-1/test",
        expect.objectContaining({ method: "POST" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        8,
        "https://api.ebay.com/commerce/notification/v1/subscription/subscription-1/filter",
        expect.objectContaining({ method: "POST" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        9,
        "https://api.ebay.com/commerce/notification/v1/subscription/subscription-1/filter/filter-1",
        expect.objectContaining({ method: "DELETE" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        10,
        "https://api.ebay.com/commerce/notification/v1/subscription/subscription-1",
        expect.objectContaining({ method: "DELETE" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        11,
        "https://api.ebay.com/commerce/notification/v1/topic/ORDER_CONFIRMATION",
        expect.objectContaining({ method: "GET" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        12,
        "https://api.ebay.com/commerce/notification/v1/topic?limit=25&continuation_token=next-page",
        expect.objectContaining({ method: "GET" }),
      );
    });

  it("retrieves eBay notification public keys and signing keys with the client-credentials application token", async () => {
      const fetchMock = vi.fn(async (url: string) =>
        new Response(JSON.stringify(url.includes("/commerce/identity/")
          ? { userId: "seller-1" }
          : { key: "public-key", signingKeyId: "signing-key-1", algorithm: "ECDSA", digest: "SHA1" }), { status: 200 })
      );
      const client = createEbayMarketplaceClient({
        accessToken: "user-token",
        applicationAccessToken: "application-token",
        fetch: fetchMock as unknown as typeof fetch,
      });

      await expect(client.getUser()).resolves.toMatchObject({ userId: "seller-1" });
      await expect(client.getNotificationPublicKey("public-key-1"))
        .resolves.toMatchObject({ key: "public-key" });
      await expect(client.createSigningKey()).resolves.toMatchObject({ signingKeyId: "signing-key-1" });
      await expect(client.getSigningKey("signing-key-1")).resolves.toMatchObject({ signingKeyId: "signing-key-1" });
      await expect(client.getSigningKeys()).resolves.toMatchObject({ signingKeyId: "signing-key-1" });

      expect(fetchMock).toHaveBeenNthCalledWith(
        1,
        "https://apiz.ebay.com/commerce/identity/v1/user/",
        expect.objectContaining({
          method: "GET",
          headers: expect.objectContaining({
            authorization: "Bearer user-token",
          }),
        }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        2,
        "https://api.ebay.com/commerce/notification/v1/public_key/public-key-1",
        expect.objectContaining({
          method: "GET",
          headers: expect.objectContaining({
            authorization: "Bearer application-token",
          }),
        }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        3,
        "https://apiz.ebay.com/developer/key_management/v1/signing_key",
        expect.objectContaining({ method: "POST" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        4,
        "https://apiz.ebay.com/developer/key_management/v1/signing_key/signing-key-1",
        expect.objectContaining({ method: "GET" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        5,
        "https://apiz.ebay.com/developer/key_management/v1/signing_key",
        expect.objectContaining({ method: "GET" }),
      );
    });

  it("fails closed when eBay notification public-key retrieval lacks an application token", async () => {
      const fetchMock = vi.fn(async () =>
        new Response(JSON.stringify({ key: "unexpected" }), { status: 200 })
      );
      const client = createEbayMarketplaceClient({
        accessToken: "user-token",
        fetch: fetchMock as unknown as typeof fetch,
      });

      await expect(client.getNotificationPublicKey("public-key-1"))
        .rejects.toThrow("client credentials grant");
      expect(fetchMock).not.toHaveBeenCalled();
    });

  it("parses and verifies signed eBay notifications", async () => {
      const { privateKey, publicKey } = generateKeyPairSync("ec", { namedCurve: "prime256v1" });
      const rawBody = JSON.stringify({
        metadata: { topic: "ORDER_CONFIRMATION" },
        notificationId: "notification-1",
        data: { orderId: "order-1" },
      });
      const signature = createSign("sha1").update(rawBody).end().sign(privateKey, "base64");
      const encodedHeader = Buffer.from(JSON.stringify({
        alg: "ECDSA",
        kid: "public-key-1",
        signature,
        digest: "SHA1",
      })).toString("base64");

      expect(parseEbayNotificationSignatureHeader(encodedHeader)).toMatchObject({ kid: "public-key-1" });
      expect(verifyEbayNotificationSignature({
        rawBody,
        signatureHeader: encodedHeader,
        publicKey: publicKey.export({ format: "pem", type: "spki" }).toString(),
      })).toBe(true);
      const unsupportedDigestHeader = Buffer.from(JSON.stringify({
        alg: "ECDSA",
        kid: "public-key-1",
        signature,
        digest: "SHA256",
      })).toString("base64");
      expect(() => verifyEbayNotificationSignature({
        rawBody,
        signatureHeader: unsupportedDigestHeader,
        publicKey: publicKey.export({ format: "pem", type: "spki" }).toString(),
      })).toThrow("Unsupported eBay notification signature digest");
      const missingDigestHeader = Buffer.from(JSON.stringify({
        alg: "ECDSA",
        kid: "public-key-1",
        signature,
      })).toString("base64");
      expect(() => parseEbayNotificationSignatureHeader(missingDigestHeader)).toThrow("missing kid, algorithm, digest, or signature");

      const webhook = await parseEbayNotificationWebhook(
        new Request("https://example.test/ebay", {
          method: "POST",
          headers: {
            "x-ebay-signature": encodedHeader,
            "x-cognidesk-webhook-secret": "gateway-secret",
            "content-type": "application/json",
          },
          body: rawBody,
        }),
        {
          publicKey: publicKey.export({ format: "pem", type: "spki" }).toString(),
          expectedSharedSecret: "gateway-secret",
        },
      );

      expect(webhook).toMatchObject({
        topic: "ORDER_CONFIRMATION",
        notificationId: "notification-1",
      });
    });

  it("fails closed when notification signature verification is not configured", async () => {
      await expect(parseEbayNotificationWebhook(
        new Request("https://example.test/ebay", {
          method: "POST",
          body: JSON.stringify({ notificationId: "notification-1" }),
        }),
      )).rejects.toThrow("signature header is required");
    });
});
