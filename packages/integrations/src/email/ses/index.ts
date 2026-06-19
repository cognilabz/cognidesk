export {
  createSesFullApiGeneratedClient,
  SES_FULL_API_GENERATED_FUNCTION_COUNT,
  SES_FULL_API_GENERATED_FUNCTION_NAMES,
  type SesFullApiGeneratedClient,
  type SesGeneratedOperationCaller,
} from "./full-api-client.generated.js";
export {
  SES_FULL_API_GENERATED_AT,
  SES_FULL_API_MODEL_COUNT,
  SES_FULL_API_OPERATION_BY_ID,
  SES_FULL_API_OPERATION_BY_UID,
  SES_FULL_API_OPERATION_COUNT,
  SES_FULL_API_OPERATIONS,
  SES_FULL_API_SPEC,
  SES_FULL_API_SPEC_SOURCE,
  SES_FULL_API_SPEC_VERSION,
  type SesFullApiOperation,
  type SesFullApiOperationUid,
  type SesFullApiProtocol,
  type SesFullApiServiceKey,
} from "./full-api-operations.generated.js";
export type * from "./full-api-schema-types.generated.js";
export { ProviderApiError } from "../../internal/provider-transport.js";

export type * from "./contracts.js";
export {
  createSesEmailClient,
  createSesEmailLiveChecks,
  type SesEmailClient,
  type SesLiveCheckOptions,
} from "./client.js";
export { sesEmailCredentialStatuses } from "./credentials.js";
export { sesEmailProviderManifest } from "./manifest.js";
export {
  parseSesSnsNotification,
  parseSesSqsRecord,
  type ParsedSesSnsNotification,
  type ParseSesSnsNotificationOptions,
  type SesEventNotification,
  type SesSnsNotification,
  type SesSnsSignatureVerifier,
} from "./sns.js";
