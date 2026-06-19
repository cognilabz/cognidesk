export type * from "./full-api-schema-types.generated.js";
export {
  GOOGLE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT,
  GOOGLE_SPEECH_FULL_API_GENERATED_FUNCTION_NAMES,
  createGoogleSpeechFullApiGeneratedClient,
  type GoogleSpeechFullApiGeneratedClient,
  type GoogleSpeechGeneratedOperationCaller,
} from "./full-api-client.generated.js";
export {
  GOOGLE_SPEECH_FULL_API_GENERATED_AT,
  GOOGLE_SPEECH_FULL_API_OPERATION_BY_ID,
  GOOGLE_SPEECH_FULL_API_OPERATION_BY_OPERATION_ID,
  GOOGLE_SPEECH_FULL_API_OPERATION_COUNT,
  GOOGLE_SPEECH_FULL_API_OPERATIONS,
  GOOGLE_SPEECH_FULL_API_SPECS,
  GOOGLE_SPEECH_FULL_API_SPEC,
  GOOGLE_SPEECH_FULL_API_SPEC_SOURCE,
  GOOGLE_SPEECH_FULL_API_SPEC_VERSION,
  type GoogleSpeechFullApiOperation,
  type GoogleSpeechFullApiOperationId,
  type GoogleSpeechFullApiOperationMethod,
  type GoogleSpeechFullApiSpec,
} from "./full-api-operations.generated.js";

export type * from "./contracts.js";
export { createGoogleSpeechClient } from "./client.js";
export { googleSpeechCredentialStatuses } from "./credentials.js";
export { googleSpeechProviderManifest } from "./manifest.js";
export { createGoogleSpeechVoiceProvider } from "./speech-provider.js";
