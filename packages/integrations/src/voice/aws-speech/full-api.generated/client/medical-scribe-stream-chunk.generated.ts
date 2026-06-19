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
export const AwsSpeechFullApiMedicalScribeStreamOperationKeys = [
  "transcribe-streaming:GetMedicalScribeStream",
  "transcribe-streaming:StartMedicalScribeStream"
] as const;
export type AwsSpeechFullApiMedicalScribeStreamOperationKey = typeof AwsSpeechFullApiMedicalScribeStreamOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiMedicalScribeStreamOperationPathParamMap {
  "transcribe-streaming:GetMedicalScribeStream": { "SessionId": AwsSpeechFullApiPathParamValue };
  "transcribe-streaming:StartMedicalScribeStream": {};
}

export interface AwsSpeechFullApiMedicalScribeStreamOperationRequestMap {
  "transcribe-streaming:GetMedicalScribeStream": AwsSpeechFullApiOperationInput<"transcribe-streaming:GetMedicalScribeStream">;
  "transcribe-streaming:StartMedicalScribeStream": AwsSpeechFullApiOperationInput<"transcribe-streaming:StartMedicalScribeStream">;
}

export interface AwsSpeechFullApiMedicalScribeStreamGeneratedClient {
  TranscribeStreamingGetMedicalScribeStream(...args: AwsSpeechFullApiOperationArgs<"transcribe-streaming:GetMedicalScribeStream">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe-streaming:GetMedicalScribeStream"]>;
  TranscribeStreamingStartMedicalScribeStream(...args: AwsSpeechFullApiOperationArgs<"transcribe-streaming:StartMedicalScribeStream">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe-streaming:StartMedicalScribeStream"]>;
}

export const AwsSpeechFullApiMedicalScribeStreamGeneratedFunctionNames = [
  "TranscribeStreamingGetMedicalScribeStream",
  "TranscribeStreamingStartMedicalScribeStream"
] as const satisfies readonly (keyof AwsSpeechFullApiMedicalScribeStreamGeneratedClient)[];

export function createAwsSpeechFullApiMedicalScribeStreamGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiMedicalScribeStreamGeneratedClient {
  return {
    TranscribeStreamingGetMedicalScribeStream: (...args) => callOperation("transcribe-streaming:GetMedicalScribeStream", ...(args as AwsSpeechFullApiOperationArgs<"transcribe-streaming:GetMedicalScribeStream">)),
    TranscribeStreamingStartMedicalScribeStream: (...args) => callOperation("transcribe-streaming:StartMedicalScribeStream", ...(args as AwsSpeechFullApiOperationArgs<"transcribe-streaming:StartMedicalScribeStream">)),
  };
}
