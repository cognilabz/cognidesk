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
export const AzureSpeechFullApiTranscribeOperationKeys = [
  "speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe"
] as const;
export type AzureSpeechFullApiTranscribeOperationKey = typeof AzureSpeechFullApiTranscribeOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiTranscribeOperationPathParamMap {
  "speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe": {};
}

export interface AzureSpeechFullApiTranscribeOperationRequestMap {
  "speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe": AzureSpeechFullApiOperationInput<"speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe">;
}

export interface AzureSpeechFullApiTranscribeGeneratedClient {
  SpeechToTextTranscriptionsTranscribe(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe"]>;
}

export const AzureSpeechFullApiTranscribeGeneratedFunctionNames = [
  "SpeechToTextTranscriptionsTranscribe"
] as const satisfies readonly (keyof AzureSpeechFullApiTranscribeGeneratedClient)[];

export function createAzureSpeechFullApiTranscribeGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiTranscribeGeneratedClient {
  return {
    SpeechToTextTranscriptionsTranscribe: (...args) => callOperation("speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe">)),
  };
}
