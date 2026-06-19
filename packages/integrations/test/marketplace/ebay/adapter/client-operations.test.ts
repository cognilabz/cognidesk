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
  it("reads and searches orders through the Sell Fulfillment API", async () => {
      const fetchMock = vi.fn(async (url: string) =>
        new Response(JSON.stringify(url.includes("/order/order-1")
          ? { orderId: "order-1", orderFulfillmentStatus: "NOT_STARTED" }
          : { orders: [{ orderId: "order-1" }], total: 1 }), { status: 200 })
      );
      const client = createEbayMarketplaceClient({
        accessToken: "oauth-token",
        marketplaceId: "EBAY_US",
        fetch: fetchMock as unknown as typeof fetch,
      });
  
      await expect(client.getOrder("order-1")).resolves.toMatchObject({ orderId: "order-1" });
      const search = await client.searchOrders({
        orderIds: ["order-1", "order-2"],
        limit: 10,
        offset: 0,
        filter: ["creationdate:[2026-06-01T00:00:00.000Z..]"],
      });
  
      expect(search.orders).toHaveLength(1);
      expect(fetchMock).toHaveBeenNthCalledWith(
        1,
        "https://api.ebay.com/sell/fulfillment/v1/order/order-1",
        expect.objectContaining({
          method: "GET",
          headers: expect.objectContaining({
            authorization: "Bearer oauth-token",
            "x-ebay-c-marketplace-id": "EBAY_US",
          }),
        }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        2,
        "https://api.ebay.com/sell/fulfillment/v1/order?filter=creationdate%3A%5B2026-06-01T00%3A00%3A00.000Z..%5D&limit=10&offset=0&orderids=order-1%2Corder-2",
        expect.objectContaining({ method: "GET" }),
      );
    });

  it("creates fulfillment and refund primitives without deciding business policy", async () => {
      const fetchMock = vi.fn(async () => new Response(JSON.stringify({ status: "accepted" }), { status: 200 }));
      const client = createEbayMarketplaceClient({
        accessToken: "oauth-token",
        marketplaceId: "EBAY_DE",
        fetch: fetchMock as unknown as typeof fetch,
      });
  
      await client.createShippingFulfillment("order-1", {
        shippingCarrierCode: "DHL",
        trackingNumber: "tracking-1",
      });
      await client.issueRefund("order-1", {
        reasonForRefund: "BUYER_CANCELLED",
        comment: "Configured support action.",
      });
  
      expect(fetchMock).toHaveBeenNthCalledWith(
        1,
        "https://api.ebay.com/sell/fulfillment/v1/order/order-1/shipping_fulfillment",
        expect.objectContaining({ method: "POST" }),
      );
      expect(JSON.parse(((fetchMock.mock.calls[0] as unknown[])[1] as { body: string }).body)).toMatchObject({
        shippingCarrierCode: "DHL",
        trackingNumber: "tracking-1",
      });
      expect(fetchMock).toHaveBeenNthCalledWith(
        2,
        "https://api.ebay.com/sell/fulfillment/v1/order/order-1/issue_refund",
        expect.objectContaining({ method: "POST" }),
      );
    });

  it("supports message conversations and payment dispute primitives", async () => {
      const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true, conversations: [] }), { status: 200 }));
      const client = createEbayMarketplaceClient({
        accessToken: "oauth-token",
        fetch: fetchMock as unknown as typeof fetch,
      });
  
      await client.getConversations({ limit: 5, filter: "conversation_status:{ACTIVE}" });
      await client.sendMessage({ conversationId: "conversation-1", messageText: "We can help." });
      await client.bulkUpdateConversations({
        conversations: [{ conversationId: "conversation-1", status: "READ" }],
      });
      await client.fetchPaymentDisputeEvidenceContent("dispute-1");
      await client.getPaymentDisputeActivities("dispute-1");
      await client.uploadPaymentDisputeEvidenceFile("dispute-1", { fileId: "evidence-file-1" });
      await client.acceptPaymentDispute("dispute-1", { note: "Configured operator decision." });
      await client.addPaymentDisputeEvidence("dispute-1", { evidenceType: "PROOF_OF_DELIVERY" });
      await client.updatePaymentDisputeEvidence("dispute-1", { evidenceId: "evidence-1" });
  
      expect(fetchMock).toHaveBeenNthCalledWith(
        1,
        "https://api.ebay.com/commerce/message/v1/conversation?limit=5&filter=conversation_status%3A%7BACTIVE%7D",
        expect.objectContaining({ method: "GET" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        2,
        "https://api.ebay.com/commerce/message/v1/send_message",
        expect.objectContaining({ method: "POST" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        3,
        "https://api.ebay.com/commerce/message/v1/bulk_update_conversation",
        expect.objectContaining({ method: "POST" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        4,
        "https://api.ebay.com/sell/fulfillment/v1/payment_dispute/dispute-1/fetch_evidence_content",
        expect.objectContaining({ method: "GET" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        5,
        "https://api.ebay.com/sell/fulfillment/v1/payment_dispute/dispute-1/activity",
        expect.objectContaining({ method: "GET" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        6,
        "https://api.ebay.com/sell/fulfillment/v1/payment_dispute/dispute-1/upload_evidence_file",
        expect.objectContaining({ method: "POST" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        7,
        "https://api.ebay.com/sell/fulfillment/v1/payment_dispute/dispute-1/accept",
        expect.objectContaining({ method: "POST" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        8,
        "https://api.ebay.com/sell/fulfillment/v1/payment_dispute/dispute-1/add_evidence",
        expect.objectContaining({ method: "POST" }),
      );
      expect(fetchMock).toHaveBeenNthCalledWith(
        9,
        "https://api.ebay.com/sell/fulfillment/v1/payment_dispute/dispute-1/update_evidence",
        expect.objectContaining({ method: "POST" }),
      );
    });
});
