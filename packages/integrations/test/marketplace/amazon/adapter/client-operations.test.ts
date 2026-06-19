import {
  createAmazonMarketplaceClient,
  describe,
  expect,
  it,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("reads orders and order items through SP-API paths", async () => {
    const fetchMock = vi.fn(async (url: string) =>
      new Response(JSON.stringify(url.includes("/orderItems")
        ? { payload: { OrderItems: [{ ASIN: "asin-1" }] } }
        : { payload: { Orders: [{ AmazonOrderId: "order-1" }] } }), { status: 200 })
    );
    const client = createAmazonMarketplaceClient({
      accessToken: "access-token",
      marketplaceId: "ATVPDKIKX0DER",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.getOrders({ createdAfter: "2026-06-01T00:00:00Z", maxResultsPerPage: 10 });
    await client.getOrderItems("order-1");

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://sellingpartnerapi-na.amazon.com/orders/v0/orders?MarketplaceIds=ATVPDKIKX0DER&CreatedAfter=2026-06-01T00%3A00%3A00Z&MaxResultsPerPage=10",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({
          "user-agent": "@cognidesk/integrations/0.0.2",
          "x-amz-access-token": "access-token",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://sellingpartnerapi-na.amazon.com/orders/v0/orders/order-1/orderItems",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("uses Restricted Data Tokens for buyer-info SP-API paths", async () => {
    const fetchMock = vi.fn(async (url: string) =>
      new Response(JSON.stringify(url.includes("/tokens/2021-03-01/restrictedDataToken")
        ? { restrictedDataToken: "rdt-token", expiresIn: 3600 }
        : url.includes("/orderItems/buyerInfo")
          ? { payload: { OrderItems: [{ ASIN: "asin-1", BuyerInfo: { GiftMessageText: "hi" } }] } }
          : { payload: { BuyerEmail: "buyer@example.test" } }), { status: 200 })
    );
    const client = createAmazonMarketplaceClient({
      accessToken: "lwa-access-token",
      marketplaceId: "ATVPDKIKX0DER",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.getOrderBuyerInfo("order-1");
    await client.getOrderItemsBuyerInfo("order-1", { nextToken: "page-2" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://sellingpartnerapi-na.amazon.com/tokens/2021-03-01/restrictedDataToken",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "user-agent": "@cognidesk/integrations/0.0.2",
          "x-amz-access-token": "lwa-access-token",
        }),
      }),
    );
    expect(JSON.parse(((fetchMock.mock.calls[0] as unknown[])[1] as { body: string }).body)).toMatchObject({
      restrictedResources: [{
        method: "GET",
        path: "/orders/v0/orders/order-1/buyerInfo",
        dataElements: ["buyerInfo"],
      }],
    });
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://sellingpartnerapi-na.amazon.com/orders/v0/orders/order-1/buyerInfo",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({
          "user-agent": "@cognidesk/integrations/0.0.2",
          "x-amz-access-token": "rdt-token",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://sellingpartnerapi-na.amazon.com/tokens/2021-03-01/restrictedDataToken",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ "x-amz-access-token": "lwa-access-token" }),
      }),
    );
    expect(JSON.parse(((fetchMock.mock.calls[2] as unknown[])[1] as { body: string }).body)).toMatchObject({
      restrictedResources: [{
        method: "GET",
        path: "/orders/v0/orders/order-1/orderItems/buyerInfo",
        dataElements: ["buyerInfo"],
      }],
    });
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://sellingpartnerapi-na.amazon.com/orders/v0/orders/order-1/orderItems/buyerInfo?NextToken=page-2",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({ "x-amz-access-token": "rdt-token" }),
      }),
    );
  });

  it("supports Orders API v2026 search/get with includedData migration semantics", async () => {
    const fetchMock = vi.fn(async (url: string) =>
      new Response(JSON.stringify(url.includes("/orders/order-1")
        ? { order: { amazonOrderId: "order-1", buyer: { buyerEmail: "buyer@example.test" } } }
        : { orders: [{ amazonOrderId: "order-1" }], paginationToken: "page-2" }), { status: 200 })
    );
    const client = createAmazonMarketplaceClient({
      accessToken: "access-token",
      marketplaceId: "ATVPDKIKX0DER",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.searchOrdersV2026({
      createdAfter: "2026-06-01T00:00:00Z",
      maxResultsPerPage: 10,
      fulfilledBy: "MERCHANT",
      fulfillmentStatuses: ["SHIPPED"],
      includedData: ["BUYER", "FULFILLMENT"],
    });
    await client.getOrderV2026("order-1", { includedData: ["BUYER", "RECIPIENT"] });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://sellingpartnerapi-na.amazon.com/orders/2026-01-01/orders?marketplaceIds=ATVPDKIKX0DER&createdAfter=2026-06-01T00%3A00%3A00Z&fulfillmentStatuses=SHIPPED&fulfilledBy=MERCHANT&maxResultsPerPage=10&includedData=BUYER%2CFULFILLMENT",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({ "x-amz-access-token": "access-token" }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://sellingpartnerapi-na.amazon.com/orders/2026-01-01/orders/order-1?includedData=BUYER%2CRECIPIENT",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).not.toHaveBeenCalledWith(
      expect.stringContaining("/tokens/2021-03-01/restrictedDataToken"),
      expect.anything(),
    );
  });

  it("supports solicitations, notifications, and seller live-check primitives", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ payload: { ok: true } }), { status: 200 }));
    const client = createAmazonMarketplaceClient({
      accessToken: "access-token",
      marketplaceId: "ATVPDKIKX0DER",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.getSolicitationActionsForOrder("order-1");
    await client.createProductReviewAndSellerFeedbackSolicitation("order-1");
    await client.createSubscription({
      notificationType: "ORDER_CHANGE",
      destinationId: "destination-1",
    });
    await client.getSubscription({
      notificationType: "ORDER_CHANGE",
      payloadVersion: "1.0",
    });
    await client.deleteSubscription({
      notificationType: "ORDER_CHANGE",
      subscriptionId: "subscription-1",
    });
    await client.getMarketplaceParticipations();

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://sellingpartnerapi-na.amazon.com/solicitations/v1/orders/order-1?marketplaceIds=ATVPDKIKX0DER",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://sellingpartnerapi-na.amazon.com/solicitations/v1/orders/order-1/solicitations/productReviewAndSellerFeedback?marketplaceIds=ATVPDKIKX0DER",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://sellingpartnerapi-na.amazon.com/notifications/v1/subscriptions/ORDER_CHANGE",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://sellingpartnerapi-na.amazon.com/notifications/v1/subscriptions/ORDER_CHANGE?payloadVersion=1.0",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      5,
      "https://sellingpartnerapi-na.amazon.com/notifications/v1/subscriptions/ORDER_CHANGE/subscription-1",
      expect.objectContaining({ method: "DELETE" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      6,
      "https://sellingpartnerapi-na.amazon.com/sellers/v1/marketplaceParticipations",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("requires Amazon notification deletion by subscriptionId", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ payload: { ok: true } }), { status: 200 }));
    const client = createAmazonMarketplaceClient({
      accessToken: "access-token",
      marketplaceId: "ATVPDKIKX0DER",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.deleteSubscription({ notificationType: "ORDER_CHANGE", subscriptionId: "" })).rejects.toThrow("subscriptionId");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("fails closed for unsupported marketplaceIds query on notification subscription creation", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({}), { status: 200 }));
    const client = createAmazonMarketplaceClient({
      accessToken: "access-token",
      marketplaceId: "ATVPDKIKX0DER",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createSubscription({
      notificationType: "ORDER_CHANGE",
      destinationId: "destination-1",
      marketplaceIds: ["ATVPDKIKX0DER"],
    })).rejects.toThrow("does not accept marketplaceIds");
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
