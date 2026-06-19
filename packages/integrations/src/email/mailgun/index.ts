export {
  createMailgunFullApiGeneratedClient,
  MAILGUN_FULL_API_GENERATED_FUNCTION_COUNT,
  MAILGUN_FULL_API_GENERATED_FUNCTION_NAMES,
  type MailgunFullApiGeneratedClient,
  type MailgunGeneratedOperationCaller,
} from "./full-api-client.generated.js";
export {
  MAILGUN_FULL_API_DOCS_SOURCE,
  MAILGUN_FULL_API_GENERATED_AT,
  MAILGUN_FULL_API_OPENAPI_VERSION,
  MAILGUN_FULL_API_OPERATION_BY_ID,
  MAILGUN_FULL_API_OPERATION_BY_UID,
  MAILGUN_FULL_API_OPERATION_COUNT,
  MAILGUN_FULL_API_OPERATIONS,
  MAILGUN_FULL_API_PATH_COUNT,
  MAILGUN_FULL_API_SPEC_SOURCE,
  MAILGUN_FULL_API_SPEC_VERSION,
  type MailgunFullApiOperation,
  type MailgunFullApiOperationUid,
} from "./full-api-operations.generated.js";
export type * from "./full-api-schema-types.generated.js";

export type * from "./contracts.js";
export {
  createMailgunEmailClient,
  createMailgunEmailLiveChecks,
} from "./client.js";
export { mailgunEmailCredentialStatuses } from "./credentials.js";
export { mailgunEmailProviderManifest } from "./manifest.js";
export {
  parseMailgunInboundRouteRequest,
  parseMailgunWebhook,
  verifyMailgunWebhookSignature,
} from "./webhooks.js";
