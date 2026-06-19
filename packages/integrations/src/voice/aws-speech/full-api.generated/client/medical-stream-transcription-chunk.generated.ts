// Generated endpoint chunk for AwsSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AwsSpeechGeneratedOperationCaller,
  AwsSpeechFullApiOperationArgs,
  AwsSpeechFullApiOperationInput,
  AwsSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AwsSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AwsSpeechFullApiMedicalStreamTranscriptionOperationKeys = [
  "transcribe-streaming:StartMedicalStreamTranscription"
] as const;
export type AwsSpeechFullApiMedicalStreamTranscriptionOperationKey = typeof AwsSpeechFullApiMedicalStreamTranscriptionOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiMedicalStreamTranscriptionOperationPathParamMap {
  "transcribe-streaming:StartMedicalStreamTranscription": {};
}

export interface AwsSpeechFullApiMedicalStreamTranscriptionOperationRequestMap {
  "transcribe-streaming:StartMedicalStreamTranscription": AwsSpeechFullApiOperationInput<"transcribe-streaming:StartMedicalStreamTranscription">;
}

export interface AwsSpeechFullApiMedicalStreamTranscriptionGeneratedClient {
  TranscribeStreamingStartMedicalStreamTranscription(...args: AwsSpeechFullApiOperationArgs<"transcribe-streaming:StartMedicalStreamTranscription">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe-streaming:StartMedicalStreamTranscription"]>;
}

export const AwsSpeechFullApiMedicalStreamTranscriptionGeneratedFunctionNames = [
  "TranscribeStreamingStartMedicalStreamTranscription"
] as const satisfies readonly (keyof AwsSpeechFullApiMedicalStreamTranscriptionGeneratedClient)[];

export function createAwsSpeechFullApiMedicalStreamTranscriptionGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiMedicalStreamTranscriptionGeneratedClient {
  return {
    TranscribeStreamingStartMedicalStreamTranscription: (...args) => callOperation("transcribe-streaming:StartMedicalStreamTranscription", ...(args as AwsSpeechFullApiOperationArgs<"transcribe-streaming:StartMedicalStreamTranscription">)),
  };
}
