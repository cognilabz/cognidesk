import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  ParseShopifyWebhookOptions,
  ShopifyWebhook,
  ValidateShopifyWebhookSignatureInput,
} from "./contracts.js";

export async function parseShopifyWebhook(
  request: Request,
  options: ParseShopifyWebhookOptions = {},
): Promise<ShopifyWebhook> {
  const rawBody = await request.text();
  const requireSignature = options.requireSignature ?? true;
  if (requireSignature) {
    if (!options.webhookSecret) throw new Error("Shopify webhook secret is required to validate webhook signatures.");
    const hmac = request.headers.get("x-shopify-hmac-sha256") ?? "";
    if (!validateShopifyWebhookSignature({ webhookSecret: options.webhookSecret, rawBody, hmac })) {
      throw new Error("Shopify webhook signature validation failed.");
    }
  }

  return {
    rawBody,
    ...(request.headers.get("x-shopify-topic") ? { topic: request.headers.get("x-shopify-topic") as string } : {}),
    ...(request.headers.get("x-shopify-shop-domain")
      ? { shopDomain: request.headers.get("x-shopify-shop-domain") as string }
      : {}),
    ...(request.headers.get("x-shopify-webhook-id")
      ? { webhookId: request.headers.get("x-shopify-webhook-id") as string }
      : {}),
    ...(request.headers.get("x-shopify-api-version")
      ? { apiVersion: request.headers.get("x-shopify-api-version") as string }
      : {}),
    ...(rawBody ? { payload: JSON.parse(rawBody) as unknown } : {}),
  };
}

export function validateShopifyWebhookSignature(input: ValidateShopifyWebhookSignatureInput) {
  const rawBody = Buffer.isBuffer(input.rawBody) ? input.rawBody : Buffer.from(input.rawBody, "utf8");
  const expected = createHmac("sha256", input.webhookSecret).update(rawBody).digest("base64");
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.hmac);
  return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer);
}
