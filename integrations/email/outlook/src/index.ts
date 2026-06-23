export { createOutlookEmailClient, createOutlookEmailLiveChecks } from "./client.js";
export type * from "./contracts.js";
export { outlookEmailCredentialStatuses } from "./credentials.js";
export {
  outlookEmailIntegration,
  outlookEmailOperationHandlers,
  type OutlookEmailOperationCredentials,
} from "./integration.js";
export {
  outlookEmailManifestInput,
  outlookEmailOperationAliases,
  outlookEmailProviderManifest,
} from "./manifest.js";
export { createOutlookRecipient } from "./mappers.js";
export {
  parseOutlookWebhook,
  validateOutlookWebhookClientState,
  verifyOutlookWebhookValidationToken,
} from "./webhooks.js";
export { normalizeOutlookGraphError } from "./request.js";
