import type {
  ParsePostmarkInboundWebhookOptions,
  PostmarkInboundWebhook,
} from "./contracts.js";

export async function parsePostmarkInboundWebhook(
  request: Request,
  options: ParsePostmarkInboundWebhookOptions = {},
): Promise<PostmarkInboundWebhook> {
  if (options.requireAuth && !options.expectedAuthHeader) {
    throw new Error("Postmark webhook authentication is required.");
  }
  if (options.expectedAuthHeader && request.headers.get("authorization") !== options.expectedAuthHeader) {
    throw new Error("Postmark webhook authentication failed.");
  }
  return await request.json() as PostmarkInboundWebhook;
}
