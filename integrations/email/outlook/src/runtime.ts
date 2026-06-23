export { createOutlookEmailClient, createOutlookEmailLiveChecks } from "./client.js";
export type * from "./contracts.js";
export { outlookEmailCredentialStatuses } from "./credentials.js";
export {
  outlookEmailIntegration,
  outlookEmailOperationHandlers,
  type OutlookEmailOperationCredentials,
} from "./integration.js";
export { createOutlookRecipient } from "./mappers.js";
export { normalizeOutlookGraphError } from "./request.js";
export {
  parseOutlookWebhook,
  validateOutlookWebhookClientState,
  verifyOutlookWebhookValidationToken,
} from "./webhooks.js";
