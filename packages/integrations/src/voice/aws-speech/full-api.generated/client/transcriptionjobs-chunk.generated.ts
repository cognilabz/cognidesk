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
export const AwsSpeechFullApiTranscriptionjobsOperationKeys = [
  "transcribe:DeleteTranscriptionJob",
  "transcribe:GetTranscriptionJob",
  "transcribe:ListTranscriptionJobs",
  "transcribe:StartTranscriptionJob"
] as const;
export type AwsSpeechFullApiTranscriptionjobsOperationKey = typeof AwsSpeechFullApiTranscriptionjobsOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiTranscriptionjobsOperationPathParamMap {
  "transcribe:DeleteTranscriptionJob": { "TranscriptionJobName": AwsSpeechFullApiPathParamValue };
  "transcribe:GetTranscriptionJob": { "TranscriptionJobName": AwsSpeechFullApiPathParamValue };
  "transcribe:ListTranscriptionJobs": {};
  "transcribe:StartTranscriptionJob": { "TranscriptionJobName": AwsSpeechFullApiPathParamValue };
}

export interface AwsSpeechFullApiTranscriptionjobsOperationRequestMap {
  "transcribe:DeleteTranscriptionJob": AwsSpeechFullApiOperationInput<"transcribe:DeleteTranscriptionJob">;
  "transcribe:GetTranscriptionJob": AwsSpeechFullApiOperationInput<"transcribe:GetTranscriptionJob">;
  "transcribe:ListTranscriptionJobs": AwsSpeechFullApiOperationInput<"transcribe:ListTranscriptionJobs">;
  "transcribe:StartTranscriptionJob": AwsSpeechFullApiOperationInput<"transcribe:StartTranscriptionJob">;
}

export interface AwsSpeechFullApiTranscriptionjobsGeneratedClient {
  TranscribeDeleteTranscriptionJob(...args: AwsSpeechFullApiOperationArgs<"transcribe:DeleteTranscriptionJob">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:DeleteTranscriptionJob"]>;
  TranscribeGetTranscriptionJob(...args: AwsSpeechFullApiOperationArgs<"transcribe:GetTranscriptionJob">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:GetTranscriptionJob"]>;
  TranscribeListTranscriptionJobs(...args: AwsSpeechFullApiOperationArgs<"transcribe:ListTranscriptionJobs">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:ListTranscriptionJobs"]>;
  TranscribeStartTranscriptionJob(...args: AwsSpeechFullApiOperationArgs<"transcribe:StartTranscriptionJob">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:StartTranscriptionJob"]>;
}

export const AwsSpeechFullApiTranscriptionjobsGeneratedFunctionNames = [
  "TranscribeDeleteTranscriptionJob",
  "TranscribeGetTranscriptionJob",
  "TranscribeListTranscriptionJobs",
  "TranscribeStartTranscriptionJob"
] as const satisfies readonly (keyof AwsSpeechFullApiTranscriptionjobsGeneratedClient)[];

export function createAwsSpeechFullApiTranscriptionjobsGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiTranscriptionjobsGeneratedClient {
  return {
    TranscribeDeleteTranscriptionJob: (...args) => callOperation("transcribe:DeleteTranscriptionJob", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:DeleteTranscriptionJob">)),
    TranscribeGetTranscriptionJob: (...args) => callOperation("transcribe:GetTranscriptionJob", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:GetTranscriptionJob">)),
    TranscribeListTranscriptionJobs: (...args) => callOperation("transcribe:ListTranscriptionJobs", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:ListTranscriptionJobs">)),
    TranscribeStartTranscriptionJob: (...args) => callOperation("transcribe:StartTranscriptionJob", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:StartTranscriptionJob">)),
  };
}
