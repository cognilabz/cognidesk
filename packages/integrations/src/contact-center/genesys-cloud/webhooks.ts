import { createHmac, timingSafeEqual } from "node:crypto";

export function verifyGenesysCloudOpenMessagingWebhookSignature(input: {
  rawBody: string | Buffer;
  signatureHeader?: string | null;
  secret: string;
}) {
  if (!input.signatureHeader || !input.secret) return false;
  const expected = `sha256=${createHmac("sha256", input.secret).update(input.rawBody).digest("hex")}`;
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signatureHeader);
  return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer);
}
