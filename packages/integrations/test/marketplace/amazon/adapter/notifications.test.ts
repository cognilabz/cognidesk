import {
  createHmac,
  describe,
  expect,
  it,
  parseAmazonMarketplaceNotificationWebhook,
  unwrapAmazonNotificationPayload,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("unwraps SQS/SNS notification payloads and verifies with a hook", async () => {
    const notification = {
      NotificationType: "ORDER_CHANGE",
      NotificationMetadata: {
        NotificationId: "notification-1",
        SellerId: "seller-1",
        MarketplaceId: "ATVPDKIKX0DER",
      },
      Payload: { AmazonOrderId: "order-1" },
    };
    const body = JSON.stringify({
      Records: [{ body: JSON.stringify({ Message: JSON.stringify(notification) }) }],
    });
    expect(unwrapAmazonNotificationPayload(JSON.parse(body))).toMatchObject({ NotificationType: "ORDER_CHANGE" });

    const verifier = vi.fn(async () => true);
    const parsed = await parseAmazonMarketplaceNotificationWebhook(
      new Request("https://example.test/amazon", { method: "POST", body }),
      { verifyNotification: verifier },
    );

    expect(parsed).toMatchObject({
      notificationType: "ORDER_CHANGE",
      notificationId: "notification-1",
      sellerId: "seller-1",
      marketplaceId: "ATVPDKIKX0DER",
      verifiedBy: "hook",
    });
  });

  it("supports gateway HMAC notification signatures and fails closed otherwise", async () => {
    const rawBody = JSON.stringify({ notificationType: "ORDER_CHANGE" });
    const signature = createHmac("sha256", "gateway-secret").update(rawBody).digest("hex");

    await expect(parseAmazonMarketplaceNotificationWebhook(
      new Request("https://example.test/amazon", {
        method: "POST",
        headers: { "x-cognidesk-amazon-signature": signature },
        body: rawBody,
      }),
      { expectedSignatureSecret: "gateway-secret" },
    )).resolves.toMatchObject({ verifiedBy: "signature" });

    await expect(parseAmazonMarketplaceNotificationWebhook(
      new Request("https://example.test/amazon", { method: "POST", body: rawBody }),
    )).rejects.toThrow("verification is required");
  });
});
