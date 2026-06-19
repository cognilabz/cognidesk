// Generated endpoint chunk for AzureSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AzureSpeechGeneratedOperationCaller,
  AzureSpeechFullApiOperationArgs,
  AzureSpeechFullApiOperationInput,
  AzureSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AzureSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AzureSpeechFullApiTranscriptionsTranscribeOperationKeys = [
  "transcription:Transcribe:/transcriptions:transcribe"
] as const;
export type AzureSpeechFullApiTranscriptionsTranscribeOperationKey = typeof AzureSpeechFullApiTranscriptionsTranscribeOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiTranscriptionsTranscribeOperationPathParamMap {
  "transcription:Transcribe:/transcriptions:transcribe": {};
}

export interface AzureSpeechFullApiTranscriptionsTranscribeOperationRequestMap {
  "transcription:Transcribe:/transcriptions:transcribe": AzureSpeechFullApiOperationInput<"transcription:Transcribe:/transcriptions:transcribe">;
}

export interface AzureSpeechFullApiTranscriptionsTranscribeGeneratedClient {
  TranscriptionTranscribe(...args: AzureSpeechFullApiOperationArgs<"transcription:Transcribe:/transcriptions:transcribe">): Promise<AzureSpeechFullApiOperationResponseMap["transcription:Transcribe:/transcriptions:transcribe"]>;
}

export const AzureSpeechFullApiTranscriptionsTranscribeGeneratedFunctionNames = [
  "TranscriptionTranscribe"
] as const satisfies readonly (keyof AzureSpeechFullApiTranscriptionsTranscribeGeneratedClient)[];

export function createAzureSpeechFullApiTranscriptionsTranscribeGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiTranscriptionsTranscribeGeneratedClient {
  return {
    TranscriptionTranscribe: (...args) => callOperation("transcription:Transcribe:/transcriptions:transcribe", ...(args as AzureSpeechFullApiOperationArgs<"transcription:Transcribe:/transcriptions:transcribe">)),
  };
}
