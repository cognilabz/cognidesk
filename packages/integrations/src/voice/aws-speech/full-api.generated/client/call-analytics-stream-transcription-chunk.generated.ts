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
export const AwsSpeechFullApiCallAnalyticsStreamTranscriptionOperationKeys = [
  "transcribe-streaming:StartCallAnalyticsStreamTranscription"
] as const;
export type AwsSpeechFullApiCallAnalyticsStreamTranscriptionOperationKey = typeof AwsSpeechFullApiCallAnalyticsStreamTranscriptionOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiCallAnalyticsStreamTranscriptionOperationPathParamMap {
  "transcribe-streaming:StartCallAnalyticsStreamTranscription": {};
}

export interface AwsSpeechFullApiCallAnalyticsStreamTranscriptionOperationRequestMap {
  "transcribe-streaming:StartCallAnalyticsStreamTranscription": AwsSpeechFullApiOperationInput<"transcribe-streaming:StartCallAnalyticsStreamTranscription">;
}

export interface AwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedClient {
  TranscribeStreamingStartCallAnalyticsStreamTranscription(...args: AwsSpeechFullApiOperationArgs<"transcribe-streaming:StartCallAnalyticsStreamTranscription">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe-streaming:StartCallAnalyticsStreamTranscription"]>;
}

export const AwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedFunctionNames = [
  "TranscribeStreamingStartCallAnalyticsStreamTranscription"
] as const satisfies readonly (keyof AwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedClient)[];

export function createAwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedClient {
  return {
    TranscribeStreamingStartCallAnalyticsStreamTranscription: (...args) => callOperation("transcribe-streaming:StartCallAnalyticsStreamTranscription", ...(args as AwsSpeechFullApiOperationArgs<"transcribe-streaming:StartCallAnalyticsStreamTranscription">)),
  };
}
