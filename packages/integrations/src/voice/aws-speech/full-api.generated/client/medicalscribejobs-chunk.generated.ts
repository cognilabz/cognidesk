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
export const AwsSpeechFullApiMedicalscribejobsOperationKeys = [
  "transcribe:DeleteMedicalScribeJob",
  "transcribe:GetMedicalScribeJob",
  "transcribe:ListMedicalScribeJobs",
  "transcribe:StartMedicalScribeJob"
] as const;
export type AwsSpeechFullApiMedicalscribejobsOperationKey = typeof AwsSpeechFullApiMedicalscribejobsOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiMedicalscribejobsOperationPathParamMap {
  "transcribe:DeleteMedicalScribeJob": { "MedicalScribeJobName": AwsSpeechFullApiPathParamValue };
  "transcribe:GetMedicalScribeJob": { "MedicalScribeJobName": AwsSpeechFullApiPathParamValue };
  "transcribe:ListMedicalScribeJobs": {};
  "transcribe:StartMedicalScribeJob": { "MedicalScribeJobName": AwsSpeechFullApiPathParamValue };
}

export interface AwsSpeechFullApiMedicalscribejobsOperationRequestMap {
  "transcribe:DeleteMedicalScribeJob": AwsSpeechFullApiOperationInput<"transcribe:DeleteMedicalScribeJob">;
  "transcribe:GetMedicalScribeJob": AwsSpeechFullApiOperationInput<"transcribe:GetMedicalScribeJob">;
  "transcribe:ListMedicalScribeJobs": AwsSpeechFullApiOperationInput<"transcribe:ListMedicalScribeJobs">;
  "transcribe:StartMedicalScribeJob": AwsSpeechFullApiOperationInput<"transcribe:StartMedicalScribeJob">;
}

export interface AwsSpeechFullApiMedicalscribejobsGeneratedClient {
  TranscribeDeleteMedicalScribeJob(...args: AwsSpeechFullApiOperationArgs<"transcribe:DeleteMedicalScribeJob">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:DeleteMedicalScribeJob"]>;
  TranscribeGetMedicalScribeJob(...args: AwsSpeechFullApiOperationArgs<"transcribe:GetMedicalScribeJob">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:GetMedicalScribeJob"]>;
  TranscribeListMedicalScribeJobs(...args: AwsSpeechFullApiOperationArgs<"transcribe:ListMedicalScribeJobs">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:ListMedicalScribeJobs"]>;
  TranscribeStartMedicalScribeJob(...args: AwsSpeechFullApiOperationArgs<"transcribe:StartMedicalScribeJob">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:StartMedicalScribeJob"]>;
}

export const AwsSpeechFullApiMedicalscribejobsGeneratedFunctionNames = [
  "TranscribeDeleteMedicalScribeJob",
  "TranscribeGetMedicalScribeJob",
  "TranscribeListMedicalScribeJobs",
  "TranscribeStartMedicalScribeJob"
] as const satisfies readonly (keyof AwsSpeechFullApiMedicalscribejobsGeneratedClient)[];

export function createAwsSpeechFullApiMedicalscribejobsGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiMedicalscribejobsGeneratedClient {
  return {
    TranscribeDeleteMedicalScribeJob: (...args) => callOperation("transcribe:DeleteMedicalScribeJob", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:DeleteMedicalScribeJob">)),
    TranscribeGetMedicalScribeJob: (...args) => callOperation("transcribe:GetMedicalScribeJob", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:GetMedicalScribeJob">)),
    TranscribeListMedicalScribeJobs: (...args) => callOperation("transcribe:ListMedicalScribeJobs", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:ListMedicalScribeJobs">)),
    TranscribeStartMedicalScribeJob: (...args) => callOperation("transcribe:StartMedicalScribeJob", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:StartMedicalScribeJob">)),
  };
}
