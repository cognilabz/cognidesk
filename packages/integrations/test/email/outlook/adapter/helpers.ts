import { outlookEmailProviderManifest } from "../../../../src/email/outlook/index.js";

export { describe, expect, it, vi } from "vitest";
export { runProviderConformance } from "@cognidesk/test-harness";
export { outlookEmailProviderManifest };
export {
  createOutlookEmailClient,
  createOutlookEmailLiveChecks,
  createOutlookRecipient,
  OUTLOOK_GRAPH_API_GENERATED_FUNCTION_COUNT,
  OUTLOOK_GRAPH_API_GENERATED_FUNCTION_NAMES,
  OUTLOOK_GRAPH_API_OPERATION_COUNT,
  OUTLOOK_GRAPH_API_PATH_COUNT,
  ProviderApiError,
  outlookEmailCredentialStatuses,
  parseOutlookWebhook,
  validateOutlookWebhookClientState,
  verifyOutlookWebhookValidationToken,
} from "../../../../src/email/outlook/index.js";

export const emailChannel = {
  id: "email-support",
  channel: "email",
  providerPackageIds: [outlookEmailProviderManifest.id],
  enabledCapabilities: ["receive", "draft", "send", "thread", "attach", "update-provider-object"],
};
