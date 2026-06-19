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
  it("signs regulated eBay issueRefund requests with HTTP Message Signature headers", async () => {
      const fetchMock = vi.fn(async () => new Response(JSON.stringify({ refundId: "refund-1" }), { status: 200 }));
      const signRequest = vi.fn(async ({ body }: { body?: string }) => ({
        "content-digest": `sha-256=:${createHash("sha256").update(body ?? "").digest("base64")}:`,
        "x-ebay-signature-key": "public-key-jwe",
        "signature-input": 'sig1=("content-digest" "x-ebay-signature-key" "@method" "@path" "@authority");created=1781710000',
        signature: "sig1=:signed:",
      }));
      const client = createEbayMarketplaceClient({
        accessToken: "oauth-token",
        marketplaceId: "EBAY_DE",
        sellerDomicileCountry: "DE",
        signRequest,
        fetch: fetchMock as unknown as typeof fetch,
      });
  
      await expect(client.issueRefund("order-1", {
        reasonForRefund: "BUYER_CANCELLED",
        comment: "Configured support action.",
      })).resolves.toMatchObject({ refundId: "refund-1" });
  
      const init = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string; headers: Record<string, string> };
      expect(signRequest).toHaveBeenCalledWith(expect.objectContaining({
        method: "POST",
        url: "https://api.ebay.com/sell/fulfillment/v1/order/order-1/issue_refund",
        body: init.body,
      }));
      expect(init.headers).toMatchObject({
        "content-digest": `sha-256=:${createHash("sha256").update(init.body).digest("base64")}:`,
        "x-ebay-signature-key": "public-key-jwe",
        "signature-input": expect.stringContaining('"content-digest"'),
        signature: "sig1=:signed:",
      });
    });

  it("fails closed for regulated eBay issueRefund when signing is missing", async () => {
      const fetchMock = vi.fn(async () => new Response(JSON.stringify({ refundId: "refund-1" }), { status: 200 }));
      const client = createEbayMarketplaceClient({
        accessToken: "oauth-token",
        marketplaceId: "EBAY_DE",
        requireDigitalSignatureForRefunds: true,
        fetch: fetchMock as unknown as typeof fetch,
      });
  
      await expect(client.issueRefund("order-1", { reasonForRefund: "BUYER_CANCELLED" }))
        .rejects.toThrow("eBay digital signature key material is required");
      expect(fetchMock).not.toHaveBeenCalled();
    });

  it("creates eBay digital signature headers over the exact request body", () => {
      const { privateKey } = generateKeyPairSync("rsa", { modulusLength: 2048 });
      const body = JSON.stringify({ reasonForRefund: "BUYER_CANCELLED" });
      const headers = createEbayDigitalSignatureHeaders({
        method: "POST",
        url: "https://api.ebay.com/sell/fulfillment/v1/order/order-1/issue_refund",
        body,
        privateKey: privateKey.export({ format: "pem", type: "pkcs8" }).toString(),
        publicKeyJwe: "public-key-jwe",
        created: 1781710000,
      });
  
      expect(headers["content-digest"]).toBe(`sha-256=:${createHash("sha256").update(body).digest("base64")}:`);
      expect(headers["x-ebay-signature-key"]).toBe("public-key-jwe");
      expect(headers["signature-input"]).toBe('sig1=("content-digest" "x-ebay-signature-key" "@method" "@path" "@authority");created=1781710000');
      expect(headers.signature).toMatch(/^sig1=:.+:$/);
      expect(() => createEbayDigitalSignatureHeaders({
        method: "POST",
        url: "https://api.ebay.com/sell/fulfillment/v1/order/order-1/issue_refund",
        privateKey: privateKey.export({ format: "pem", type: "pkcs8" }).toString(),
        publicKeyJwe: "public-key-jwe",
        algorithm: "eddsa" as never,
      })).toThrow("Unsupported eBay digital signature algorithm");
    });
});
