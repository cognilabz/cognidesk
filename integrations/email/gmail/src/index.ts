export type * from "./contracts.js";
export {
  createGmailEmailClient,
  createGmailEmailIntegration,
  createGmailEmailLiveChecks,
  gmailAuth,
} from "./client.js";
export { gmailEmailCredentialStatuses } from "./credentials.js";
export {
  ProviderApiError,
  type ProviderApiErrorInput,
  type ProviderApiErrorResponseMetadata,
} from "./errors.js";
export {
  GMAIL_EMAIL_OPERATION_ALIASES,
  gmailEmailProviderOperations,
  type GmailEmailOperationAlias,
} from "./operations.js";
export {
  createGmailRawMessage,
  normalizeGmailDraft,
  normalizeGmailMessage,
  normalizeGmailThread,
} from "./mappers.js";
export { gmailEmailProviderManifest } from "./manifest.js";
export { parseGmailPubSubNotification } from "./webhooks.js";
export { gmail_v1 } from "@googleapis/gmail";
