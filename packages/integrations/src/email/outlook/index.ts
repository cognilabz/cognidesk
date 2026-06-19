export {
  createOutlookGraphGeneratedClient,
  OUTLOOK_GRAPH_API_GENERATED_FUNCTION_COUNT,
  OUTLOOK_GRAPH_API_GENERATED_FUNCTION_NAMES,
  type OutlookGraphGeneratedClient,
  type OutlookGraphGeneratedOperationCaller,
} from "./graph-api-client.generated.js";
export {
  OUTLOOK_GRAPH_API_GENERATED_AT,
  OUTLOOK_GRAPH_API_OPENAPI_VERSION,
  OUTLOOK_GRAPH_API_OPERATION_BY_ID,
  OUTLOOK_GRAPH_API_OPERATION_BY_UID,
  OUTLOOK_GRAPH_API_OPERATION_COUNT,
  OUTLOOK_GRAPH_API_OPERATIONS,
  OUTLOOK_GRAPH_API_PATH_COUNT,
  OUTLOOK_GRAPH_API_SPEC_REGISTRY,
  OUTLOOK_GRAPH_API_SPEC_SOURCE,
  OUTLOOK_GRAPH_API_SPEC_VERSION,
  type OutlookGraphApiOperation,
  type OutlookGraphApiOperationUid,
} from "./graph-api-operations.generated.js";
export type * from "./graph-api-schema-types.generated.js";
export { ProviderApiError } from "../../internal/provider-transport.js";
export type * from "./contracts.js";
export {
  createOutlookEmailClient,
  createOutlookEmailLiveChecks,
} from "./client.js";
export { outlookEmailCredentialStatuses } from "./credentials.js";
export { outlookEmailProviderManifest } from "./manifest.js";
export { createOutlookRecipient } from "./mappers.js";
export {
  parseOutlookWebhook,
  validateOutlookWebhookClientState,
  verifyOutlookWebhookValidationToken,
} from "./webhooks.js";
