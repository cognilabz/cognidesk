import {
  createAmazonMarketplaceClient,
  describe,
  expect,
  it,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("exposes generated functions for the full Amazon SP-API model surface", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/orders/v0/orders/order-1/address") && init.method === "GET") {
        return new Response(JSON.stringify({ payload: { ShippingAddress: { City: "Wien" } } }), { status: 200 });
      }
      if (url.endsWith("/orders/v0/orders/order-1/shipmentConfirmation") && init.method === "POST") {
        return new Response(JSON.stringify({ payload: { ok: true } }), { status: 200 });
      }
      if (url.includes("/catalog/2022-04-01/items?") && init.method === "GET") {
        return new Response(JSON.stringify({ items: [{ asin: "B000TEST" }] }), { status: 200 });
      }
      if (url.endsWith("/feeds/2021-06-30/feeds") && init.method === "POST") {
        return new Response(JSON.stringify({ feedId: "feed-1" }), { status: 202 });
      }
      if (url.endsWith("/reports/2021-06-30/reports") && init.method === "POST") {
        return new Response(JSON.stringify({ reportId: "report-1" }), { status: 202 });
      }
      if (url.endsWith("/notifications/v1/destinations") && init.method === "POST") {
        return new Response(JSON.stringify({ payload: { destinationId: "destination-1" } }), { status: 201 });
      }
      if (url.endsWith("/notifications/v1/subscriptions/ORDER_CHANGE/subscription-1") && init.method === "DELETE") {
        return new Response(JSON.stringify({ payload: { ok: true } }), { status: 200 });
      }
      return new Response(JSON.stringify({ errors: [{ message: `unexpected ${init.method} ${url}` }] }), { status: 500 });
    });
    const client = createAmazonMarketplaceClient({
      accessToken: "access-token",
      marketplaceId: "ATVPDKIKX0DER",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.fullApi.GetOrderAddress({
      pathParams: { orderId: "order-1" },
    })).resolves.toMatchObject({ payload: { ShippingAddress: { City: "Wien" } } });
    await expect(client.fullApi.ConfirmShipment({
      pathParams: { orderId: "order-1" },
      body: { marketplaceId: "ATVPDKIKX0DER", packageDetail: { packageReferenceId: "pkg-1", carrierCode: "UPS", trackingNumber: "1Z999", shipDate: "2026-06-18T00:00:00Z", orderItems: [] } },
    })).resolves.toMatchObject({ payload: { ok: true } });
    await expect(client.fullApi.SearchCatalogItemsCatalogItems20220401({
      query: { marketplaceIds: ["ATVPDKIKX0DER"], identifiers: ["B000TEST"], identifiersType: "ASIN" },
    })).resolves.toMatchObject({ items: [{ asin: "B000TEST" }] });
    await expect(client.fullApi.CreateFeed({
      body: { feedType: "POST_PRODUCT_DATA", marketplaceIds: ["ATVPDKIKX0DER"], inputFeedDocumentId: "doc-1" },
    })).resolves.toMatchObject({ feedId: "feed-1" });
    await expect(client.fullApi.CreateReport({
      body: { reportType: "GET_FLAT_FILE_ALL_ORDERS_DATA_BY_ORDER_DATE_GENERAL", marketplaceIds: ["ATVPDKIKX0DER"] },
    })).resolves.toMatchObject({ reportId: "report-1" });
    await expect(client.requestOperation("notifications:createDestination", {
      body: { name: "support-events", resourceSpecification: { sqs: { arn: "arn:aws:sqs:us-east-1:123456789012:queue" } } },
    })).resolves.toMatchObject({ payload: { destinationId: "destination-1" } });
    await expect(client.fullApi.DeleteSubscriptionById({
      pathParams: { notificationType: "ORDER_CHANGE", subscriptionId: "subscription-1" },
    })).resolves.toMatchObject({ payload: { ok: true } });
    // @ts-expect-error Runtime validation still rejects missing path params when JS callers omit typed input.
    await expect(client.fullApi.GetOrderAddress()).rejects.toThrow("Missing Amazon SP-API path parameter 'orderId'");

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://sellingpartnerapi-na.amazon.com/orders/v0/orders/order-1/address",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({
          "x-amz-access-token": "access-token",
          "user-agent": "@cognidesk/integrations/0.0.2",
        }),
      }),
    );
    const confirmRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string; headers: Record<string, string> };
    expect(confirmRequest.headers["content-type"]).toBe("application/json");
    expect(JSON.parse(confirmRequest.body)).toMatchObject({ packageDetail: { packageReferenceId: "pkg-1" } });
    const [catalogUrl] = fetchMock.mock.calls[2] as unknown as [string, RequestInit];
    expect(catalogUrl).toContain("marketplaceIds=ATVPDKIKX0DER");
    expect(catalogUrl).toContain("identifiers=B000TEST");
  });
});
