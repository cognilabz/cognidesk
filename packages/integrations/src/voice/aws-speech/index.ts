export {
  AWS_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
  AWS_SPEECH_FULL_API_GENERATED_FUNCTION_NAMES,
  createAwsSpeechFullApiGeneratedClient,
  type AwsSpeechFullApiGeneratedClient,
  type AwsSpeechGeneratedOperationCaller,
} from "./full-api-client.generated.js";
export {
  AWS_SPEECH_FULL_API_GENERATED_AT,
  AWS_SPEECH_FULL_API_OPERATION_BY_ID,
  AWS_SPEECH_FULL_API_OPERATION_BY_OPERATION_ID,
  AWS_SPEECH_FULL_API_OPERATION_BY_UID,
  AWS_SPEECH_FULL_API_OPERATION_COUNT,
  AWS_SPEECH_FULL_API_OPERATIONS,
  AWS_SPEECH_FULL_API_SPEC,
  AWS_SPEECH_FULL_API_SPEC_SOURCE,
  AWS_SPEECH_FULL_API_SPEC_VERSION,
  type AwsSpeechFullApiOperation,
  type AwsSpeechFullApiOperationMethod,
  type AwsSpeechFullApiOperationUid,
} from "./full-api-operations.generated.js";
export type * from "./full-api-schema-types.generated.js";

export { AWS_SPEECH_API_SOURCES } from "./contracts.js";
export type * from "./contracts.js";
export { createAwsSdkSpeechClient } from "./client.js";
export { awsSpeechCredentialStatuses } from "./credentials.js";
export { awsSpeechProviderManifest } from "./manifest.js";
export {
  createAwsSpeechVoiceAdapter,
  createAwsSpeechVoiceProvider,
} from "./speech-provider.js";
