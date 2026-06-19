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
export const AwsSpeechFullApiStreamTranscriptionOperationKeys = [
  "transcribe-streaming:StartStreamTranscription"
] as const;
export type AwsSpeechFullApiStreamTranscriptionOperationKey = typeof AwsSpeechFullApiStreamTranscriptionOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiStreamTranscriptionOperationPathParamMap {
  "transcribe-streaming:StartStreamTranscription": {};
}

export interface AwsSpeechFullApiStreamTranscriptionOperationRequestMap {
  "transcribe-streaming:StartStreamTranscription": AwsSpeechFullApiOperationInput<"transcribe-streaming:StartStreamTranscription">;
}

export interface AwsSpeechFullApiStreamTranscriptionGeneratedClient {
  TranscribeStreamingStartStreamTranscription(...args: AwsSpeechFullApiOperationArgs<"transcribe-streaming:StartStreamTranscription">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe-streaming:StartStreamTranscription"]>;
}

export const AwsSpeechFullApiStreamTranscriptionGeneratedFunctionNames = [
  "TranscribeStreamingStartStreamTranscription"
] as const satisfies readonly (keyof AwsSpeechFullApiStreamTranscriptionGeneratedClient)[];

export function createAwsSpeechFullApiStreamTranscriptionGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiStreamTranscriptionGeneratedClient {
  return {
    TranscribeStreamingStartStreamTranscription: (...args) => callOperation("transcribe-streaming:StartStreamTranscription", ...(args as AwsSpeechFullApiOperationArgs<"transcribe-streaming:StartStreamTranscription">)),
  };
}
