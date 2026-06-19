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
export const AwsSpeechFullApiMedicaltranscriptionjobsOperationKeys = [
  "transcribe:DeleteMedicalTranscriptionJob",
  "transcribe:GetMedicalTranscriptionJob",
  "transcribe:ListMedicalTranscriptionJobs",
  "transcribe:StartMedicalTranscriptionJob"
] as const;
export type AwsSpeechFullApiMedicaltranscriptionjobsOperationKey = typeof AwsSpeechFullApiMedicaltranscriptionjobsOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiMedicaltranscriptionjobsOperationPathParamMap {
  "transcribe:DeleteMedicalTranscriptionJob": { "MedicalTranscriptionJobName": AwsSpeechFullApiPathParamValue };
  "transcribe:GetMedicalTranscriptionJob": { "MedicalTranscriptionJobName": AwsSpeechFullApiPathParamValue };
  "transcribe:ListMedicalTranscriptionJobs": {};
  "transcribe:StartMedicalTranscriptionJob": { "MedicalTranscriptionJobName": AwsSpeechFullApiPathParamValue };
}

export interface AwsSpeechFullApiMedicaltranscriptionjobsOperationRequestMap {
  "transcribe:DeleteMedicalTranscriptionJob": AwsSpeechFullApiOperationInput<"transcribe:DeleteMedicalTranscriptionJob">;
  "transcribe:GetMedicalTranscriptionJob": AwsSpeechFullApiOperationInput<"transcribe:GetMedicalTranscriptionJob">;
  "transcribe:ListMedicalTranscriptionJobs": AwsSpeechFullApiOperationInput<"transcribe:ListMedicalTranscriptionJobs">;
  "transcribe:StartMedicalTranscriptionJob": AwsSpeechFullApiOperationInput<"transcribe:StartMedicalTranscriptionJob">;
}

export interface AwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient {
  TranscribeDeleteMedicalTranscriptionJob(...args: AwsSpeechFullApiOperationArgs<"transcribe:DeleteMedicalTranscriptionJob">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:DeleteMedicalTranscriptionJob"]>;
  TranscribeGetMedicalTranscriptionJob(...args: AwsSpeechFullApiOperationArgs<"transcribe:GetMedicalTranscriptionJob">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:GetMedicalTranscriptionJob"]>;
  TranscribeListMedicalTranscriptionJobs(...args: AwsSpeechFullApiOperationArgs<"transcribe:ListMedicalTranscriptionJobs">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:ListMedicalTranscriptionJobs"]>;
  TranscribeStartMedicalTranscriptionJob(...args: AwsSpeechFullApiOperationArgs<"transcribe:StartMedicalTranscriptionJob">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:StartMedicalTranscriptionJob"]>;
}

export const AwsSpeechFullApiMedicaltranscriptionjobsGeneratedFunctionNames = [
  "TranscribeDeleteMedicalTranscriptionJob",
  "TranscribeGetMedicalTranscriptionJob",
  "TranscribeListMedicalTranscriptionJobs",
  "TranscribeStartMedicalTranscriptionJob"
] as const satisfies readonly (keyof AwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient)[];

export function createAwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient {
  return {
    TranscribeDeleteMedicalTranscriptionJob: (...args) => callOperation("transcribe:DeleteMedicalTranscriptionJob", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:DeleteMedicalTranscriptionJob">)),
    TranscribeGetMedicalTranscriptionJob: (...args) => callOperation("transcribe:GetMedicalTranscriptionJob", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:GetMedicalTranscriptionJob">)),
    TranscribeListMedicalTranscriptionJobs: (...args) => callOperation("transcribe:ListMedicalTranscriptionJobs", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:ListMedicalTranscriptionJobs">)),
    TranscribeStartMedicalTranscriptionJob: (...args) => callOperation("transcribe:StartMedicalTranscriptionJob", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:StartMedicalTranscriptionJob">)),
  };
}
