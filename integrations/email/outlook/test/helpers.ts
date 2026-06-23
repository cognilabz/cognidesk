import type { Mock } from "vitest";
import { outlookEmailProviderManifest } from "../src/manifest.js";

export { describe, expect, it, vi } from "vitest";
export { IntegrationError } from "@cognidesk/integration-kit";
export { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
export { runProviderConformance } from "@cognidesk/test-harness";
export { outlookEmailProviderManifest };
export {
  createOutlookEmailClient,
  createOutlookEmailLiveChecks,
  createOutlookRecipient,
  outlookEmailCredentialStatuses,
  outlookEmailIntegration,
  outlookEmailOperationHandlers,
  outlookEmailOperationAliases,
  parseOutlookWebhook,
  validateOutlookWebhookClientState,
  verifyOutlookWebhookValidationToken,
} from "../src/index.js";

export const emailChannel = {
  id: "email-support",
  channel: "email",
  providerPackageIds: [outlookEmailProviderManifest.id],
  enabledCapabilities: ["receive", "draft", "send", "read-provider-object", "update-provider-object"],
};

export function graphFetchCall(fetchMock: Mock, index = 0) {
  const [request, init] = fetchMock.mock.calls[index] as [RequestInfo | URL, RequestInit | undefined];
  const url = request instanceof Request ? request.url : request.toString();
  const method = init?.method ?? (request instanceof Request ? request.method : "GET");
  const headers = new Headers(request instanceof Request ? request.headers : init?.headers);
  const body = init?.body ?? (request instanceof Request ? request.body : undefined);
  return {
    url,
    method,
    headers,
    body,
    signal: init?.signal ?? (request instanceof Request ? request.signal : undefined),
  };
}

export function graphFetchJsonBody(fetchMock: Mock, index = 0) {
  const body = graphFetchCall(fetchMock, index).body;
  if (typeof body !== "string") throw new Error("Expected Graph fetch body to be a JSON string.");
  return JSON.parse(body) as unknown;
}
