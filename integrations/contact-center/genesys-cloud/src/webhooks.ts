import { createHmac, timingSafeEqual } from "node:crypto";

export function verifyGenesysCloudOpenMessagingWebhookSignature(input: {
  secret: string;
  body: string | Buffer;
  signature: string;
}) {
  const expected = createHmac("sha256", input.secret).update(input.body).digest("hex");
  const expectedHeader = `sha256=${expected}`;
  const received = Buffer.from(input.signature);
  const expectedBuffer = Buffer.from(expectedHeader);
  return received.length === expectedBuffer.length && timingSafeEqual(received, expectedBuffer);
}
