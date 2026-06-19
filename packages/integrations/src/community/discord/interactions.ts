import { createPublicKey, verify as verifySignature } from "node:crypto";
import type {
  DiscordInteractionPayload,
  DiscordParsedInteractionRequest,
  ParseDiscordInteractionOptions,
  ValidateDiscordInteractionSignatureInput,
} from "./contracts.js";

export function validateDiscordInteractionSignature(input: ValidateDiscordInteractionSignatureInput) {
  const rawBody = Buffer.isBuffer(input.rawBody) ? input.rawBody : Buffer.from(input.rawBody, "utf8");
  const signedPayload = Buffer.concat([Buffer.from(input.timestamp, "utf8"), rawBody]);
  const signature = Buffer.from(input.signature, "hex");
  const publicKey = discordEd25519PublicKeyFromHex(input.publicKey);
  return verifySignature(null, signedPayload, publicKey, signature);
}

export async function parseDiscordInteractionRequest(
  request: Request,
  options: ParseDiscordInteractionOptions = {},
): Promise<DiscordParsedInteractionRequest> {
  const rawBody = await request.text();
  const requireSignature = options.requireSignature ?? true;
  let validSignature: boolean | undefined;
  if (requireSignature) {
    if (!options.publicKey) throw new Error("Discord public key is required to validate interaction signatures.");
    const signature = request.headers.get("x-signature-ed25519") ?? "";
    const timestamp = request.headers.get("x-signature-timestamp") ?? "";
    if (!signature || !timestamp) {
      throw new Error("Discord interaction signature headers are required.");
    }
    validSignature = validateDiscordInteractionSignature({
      publicKey: options.publicKey,
      signature,
      timestamp,
      rawBody,
    });
    if (!validSignature) throw new Error("Discord interaction signature validation failed.");
  }
  const contentType = request.headers.get("content-type") ?? undefined;
  return {
    rawBody,
    ...(contentType ? { contentType } : {}),
    payload: rawBody ? JSON.parse(rawBody) as DiscordInteractionPayload : {},
    ...(validSignature !== undefined ? { validSignature } : {}),
  };
}

export function discordInteractionPongResponse() {
  return { type: 1 };
}

function discordEd25519PublicKeyFromHex(publicKey: string) {
  const rawKey = Buffer.from(publicKey, "hex");
  if (rawKey.length !== 32) {
    throw new Error("Discord Ed25519 public key must be a 32-byte hex string.");
  }
  const spkiPrefix = Buffer.from("302a300506032b6570032100", "hex");
  return createPublicKey({
    key: Buffer.concat([spkiPrefix, rawKey]),
    format: "der",
    type: "spki",
  });
}
