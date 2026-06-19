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
export const AwsSpeechFullApiCallanalyticsjobsOperationKeys = [
  "transcribe:DeleteCallAnalyticsJob",
  "transcribe:GetCallAnalyticsJob",
  "transcribe:ListCallAnalyticsJobs",
  "transcribe:StartCallAnalyticsJob"
] as const;
export type AwsSpeechFullApiCallanalyticsjobsOperationKey = typeof AwsSpeechFullApiCallanalyticsjobsOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiCallanalyticsjobsOperationPathParamMap {
  "transcribe:DeleteCallAnalyticsJob": { "CallAnalyticsJobName": AwsSpeechFullApiPathParamValue };
  "transcribe:GetCallAnalyticsJob": { "CallAnalyticsJobName": AwsSpeechFullApiPathParamValue };
  "transcribe:ListCallAnalyticsJobs": {};
  "transcribe:StartCallAnalyticsJob": { "CallAnalyticsJobName": AwsSpeechFullApiPathParamValue };
}

export interface AwsSpeechFullApiCallanalyticsjobsOperationRequestMap {
  "transcribe:DeleteCallAnalyticsJob": AwsSpeechFullApiOperationInput<"transcribe:DeleteCallAnalyticsJob">;
  "transcribe:GetCallAnalyticsJob": AwsSpeechFullApiOperationInput<"transcribe:GetCallAnalyticsJob">;
  "transcribe:ListCallAnalyticsJobs": AwsSpeechFullApiOperationInput<"transcribe:ListCallAnalyticsJobs">;
  "transcribe:StartCallAnalyticsJob": AwsSpeechFullApiOperationInput<"transcribe:StartCallAnalyticsJob">;
}

export interface AwsSpeechFullApiCallanalyticsjobsGeneratedClient {
  TranscribeDeleteCallAnalyticsJob(...args: AwsSpeechFullApiOperationArgs<"transcribe:DeleteCallAnalyticsJob">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:DeleteCallAnalyticsJob"]>;
  TranscribeGetCallAnalyticsJob(...args: AwsSpeechFullApiOperationArgs<"transcribe:GetCallAnalyticsJob">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:GetCallAnalyticsJob"]>;
  TranscribeListCallAnalyticsJobs(...args: AwsSpeechFullApiOperationArgs<"transcribe:ListCallAnalyticsJobs">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:ListCallAnalyticsJobs"]>;
  TranscribeStartCallAnalyticsJob(...args: AwsSpeechFullApiOperationArgs<"transcribe:StartCallAnalyticsJob">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:StartCallAnalyticsJob"]>;
}

export const AwsSpeechFullApiCallanalyticsjobsGeneratedFunctionNames = [
  "TranscribeDeleteCallAnalyticsJob",
  "TranscribeGetCallAnalyticsJob",
  "TranscribeListCallAnalyticsJobs",
  "TranscribeStartCallAnalyticsJob"
] as const satisfies readonly (keyof AwsSpeechFullApiCallanalyticsjobsGeneratedClient)[];

export function createAwsSpeechFullApiCallanalyticsjobsGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiCallanalyticsjobsGeneratedClient {
  return {
    TranscribeDeleteCallAnalyticsJob: (...args) => callOperation("transcribe:DeleteCallAnalyticsJob", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:DeleteCallAnalyticsJob">)),
    TranscribeGetCallAnalyticsJob: (...args) => callOperation("transcribe:GetCallAnalyticsJob", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:GetCallAnalyticsJob">)),
    TranscribeListCallAnalyticsJobs: (...args) => callOperation("transcribe:ListCallAnalyticsJobs", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:ListCallAnalyticsJobs">)),
    TranscribeStartCallAnalyticsJob: (...args) => callOperation("transcribe:StartCallAnalyticsJob", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:StartCallAnalyticsJob">)),
  };
}
