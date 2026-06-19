import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  IntercomProviderExtensionValue,
  IntercomSignedRequest,
  ParseIntercomSignedRequestOptions,
  ValidateIntercomRequestSignatureInput,
} from "./contracts.js";

export async function parseIntercomSignedRequest(
  request: Request,
  options: ParseIntercomSignedRequestOptions = {},
): Promise<IntercomSignedRequest> {
  const rawBody = await request.text();
  const requireSignature = options.requireSignature ?? true;
  if (requireSignature) {
    if (!options.webhookSecret) throw new Error("Intercom webhook secret is required to validate request signatures.");
    const signature = request.headers.get("x-hub-signature") ?? "";
    if (!validateIntercomRequestSignature({
      webhookSecret: options.webhookSecret,
      rawBody,
      signature,
    })) {
      throw new Error("Intercom request signature validation failed.");
    }
  }

  const contentType = request.headers.get("content-type") ?? undefined;
  if (contentType?.includes("application/json")) {
    return {
      rawBody,
      contentType,
      json: rawBody ? JSON.parse(rawBody) as IntercomProviderExtensionValue : undefined,
    };
  }
  return { rawBody, ...(contentType ? { contentType } : {}) };
}

export function validateIntercomRequestSignature(input: ValidateIntercomRequestSignatureInput) {
  const rawBody = Buffer.isBuffer(input.rawBody) ? input.rawBody : Buffer.from(input.rawBody, "utf8");
  const expected = `sha1=${createHmac("sha1", input.webhookSecret).update(rawBody).digest("hex")}`;
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}
