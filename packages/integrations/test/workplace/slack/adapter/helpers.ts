import { createHmac } from "node:crypto";

export { describe, expect, it, vi } from "vitest";
export { runProviderConformance } from "@cognidesk/test-harness";
export {
  createSlackWorkplaceClient,
  createSlackWorkplaceLiveChecks,
  parseSlackSignedRequest,
  ProviderApiError,
  SLACK_WEB_API_GENERATED_FUNCTION_COUNT,
  SLACK_WEB_API_OPERATION_COUNT,
  SLACK_WEB_API_PATH_COUNT,
  slackWorkplaceCredentialStatuses,
  slackWorkplaceProviderManifest,
  validateSlackRequestSignature,
} from "../../../../src/workplace/slack/index.js";

export function signSlack(input: { signingSecret: string; timestamp: number; body: string }) {
  const base = `v0:${input.timestamp}:${input.body}`;
  return `v0=${createHmac("sha256", input.signingSecret).update(base).digest("hex")}`;
}
