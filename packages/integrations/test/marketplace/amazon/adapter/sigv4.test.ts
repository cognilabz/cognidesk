import {
  createAmazonMarketplaceClient,
  describe,
  expect,
  it,
  signAmazonSpApiRequest,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("can apply optional SigV4 signing for legacy or gateway SP-API deployments", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ payload: {} }), { status: 200 }));
    const client = createAmazonMarketplaceClient({
      accessToken: "access-token",
      marketplaceId: "ATVPDKIKX0DER",
      aws: {
        accessKeyId: "AKIDEXAMPLE",
        secretAccessKey: "wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY",
        region: "us-east-1",
      },
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.getOrder("order-1");

    expect(((fetchMock.mock.calls[0] as unknown[])[1] as { headers: Record<string, string> }).headers.authorization)
      .toContain("AWS4-HMAC-SHA256 Credential=AKIDEXAMPLE/");
    expect(((fetchMock.mock.calls[0] as unknown[])[1] as { headers: Record<string, string> }).headers["x-amz-date"])
      .toBeTruthy();

    const signed = signAmazonSpApiRequest({
      method: "GET",
      url: "https://sellingpartnerapi-na.amazon.com/orders/v0/orders?MarketplaceIds=ATVPDKIKX0DER",
      region: "us-east-1",
      accessKeyId: "AKIDEXAMPLE",
      secretAccessKey: "secret",
      headers: { "x-amz-access-token": "token" },
      now: new Date("2026-06-17T12:00:00Z"),
    });
    expect(signed.authorization).toContain("SignedHeaders=host;x-amz-access-token;x-amz-date");
  });
});
