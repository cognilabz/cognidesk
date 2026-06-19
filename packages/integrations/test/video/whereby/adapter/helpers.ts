import { createHmac } from "node:crypto";

export { runProviderConformance } from "@cognidesk/test-harness";
export { expect, expectTypeOf, it, vi } from "vitest";
export {
  type WherebyCreateMeetingInput,
  type WherebyLiveTranscriptionOptions,
  type WherebyRecordingOptions,
  type WherebyTranscriptionResource,
  createWherebyVideoClient,
  createWherebyVideoLiveChecks,
  parseWherebySignatureHeader,
  parseWherebyWebhookRequest,
  validateWherebyWebhookSignature,
  WHEREBY_FULL_API_GENERATED_FUNCTION_COUNT,
  WHEREBY_FULL_API_OPERATION_COUNT,
  WHEREBY_FULL_API_PATH_COUNT,
  wherebyVideoCredentialStatuses,
  wherebyVideoProviderManifest,
} from "../../../../src/video/whereby/index.js";

type WherebySignatureInput = {
  webhookSigningSecret: string;
  timestamp: number;
  body: string;
};

export function createWherebySignatureDigest(input: WherebySignatureInput) {
  return createHmac("sha256", input.webhookSigningSecret)
    .update(`${input.timestamp}.${input.body}`)
    .digest("hex");
}

export function signWhereby(input: WherebySignatureInput) {
  return `t=${input.timestamp},v1=${createWherebySignatureDigest(input)}`;
}
