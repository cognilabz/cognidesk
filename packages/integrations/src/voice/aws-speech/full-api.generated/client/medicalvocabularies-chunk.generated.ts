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
export const AwsSpeechFullApiMedicalvocabulariesOperationKeys = [
  "transcribe:CreateMedicalVocabulary",
  "transcribe:DeleteMedicalVocabulary",
  "transcribe:GetMedicalVocabulary",
  "transcribe:ListMedicalVocabularies",
  "transcribe:UpdateMedicalVocabulary"
] as const;
export type AwsSpeechFullApiMedicalvocabulariesOperationKey = typeof AwsSpeechFullApiMedicalvocabulariesOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiMedicalvocabulariesOperationPathParamMap {
  "transcribe:CreateMedicalVocabulary": { "VocabularyName": AwsSpeechFullApiPathParamValue };
  "transcribe:DeleteMedicalVocabulary": { "VocabularyName": AwsSpeechFullApiPathParamValue };
  "transcribe:GetMedicalVocabulary": { "VocabularyName": AwsSpeechFullApiPathParamValue };
  "transcribe:ListMedicalVocabularies": {};
  "transcribe:UpdateMedicalVocabulary": { "VocabularyName": AwsSpeechFullApiPathParamValue };
}

export interface AwsSpeechFullApiMedicalvocabulariesOperationRequestMap {
  "transcribe:CreateMedicalVocabulary": AwsSpeechFullApiOperationInput<"transcribe:CreateMedicalVocabulary">;
  "transcribe:DeleteMedicalVocabulary": AwsSpeechFullApiOperationInput<"transcribe:DeleteMedicalVocabulary">;
  "transcribe:GetMedicalVocabulary": AwsSpeechFullApiOperationInput<"transcribe:GetMedicalVocabulary">;
  "transcribe:ListMedicalVocabularies": AwsSpeechFullApiOperationInput<"transcribe:ListMedicalVocabularies">;
  "transcribe:UpdateMedicalVocabulary": AwsSpeechFullApiOperationInput<"transcribe:UpdateMedicalVocabulary">;
}

export interface AwsSpeechFullApiMedicalvocabulariesGeneratedClient {
  TranscribeCreateMedicalVocabulary(...args: AwsSpeechFullApiOperationArgs<"transcribe:CreateMedicalVocabulary">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:CreateMedicalVocabulary"]>;
  TranscribeDeleteMedicalVocabulary(...args: AwsSpeechFullApiOperationArgs<"transcribe:DeleteMedicalVocabulary">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:DeleteMedicalVocabulary"]>;
  TranscribeGetMedicalVocabulary(...args: AwsSpeechFullApiOperationArgs<"transcribe:GetMedicalVocabulary">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:GetMedicalVocabulary"]>;
  TranscribeListMedicalVocabularies(...args: AwsSpeechFullApiOperationArgs<"transcribe:ListMedicalVocabularies">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:ListMedicalVocabularies"]>;
  TranscribeUpdateMedicalVocabulary(...args: AwsSpeechFullApiOperationArgs<"transcribe:UpdateMedicalVocabulary">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:UpdateMedicalVocabulary"]>;
}

export const AwsSpeechFullApiMedicalvocabulariesGeneratedFunctionNames = [
  "TranscribeCreateMedicalVocabulary",
  "TranscribeDeleteMedicalVocabulary",
  "TranscribeGetMedicalVocabulary",
  "TranscribeListMedicalVocabularies",
  "TranscribeUpdateMedicalVocabulary"
] as const satisfies readonly (keyof AwsSpeechFullApiMedicalvocabulariesGeneratedClient)[];

export function createAwsSpeechFullApiMedicalvocabulariesGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiMedicalvocabulariesGeneratedClient {
  return {
    TranscribeCreateMedicalVocabulary: (...args) => callOperation("transcribe:CreateMedicalVocabulary", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:CreateMedicalVocabulary">)),
    TranscribeDeleteMedicalVocabulary: (...args) => callOperation("transcribe:DeleteMedicalVocabulary", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:DeleteMedicalVocabulary">)),
    TranscribeGetMedicalVocabulary: (...args) => callOperation("transcribe:GetMedicalVocabulary", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:GetMedicalVocabulary">)),
    TranscribeListMedicalVocabularies: (...args) => callOperation("transcribe:ListMedicalVocabularies", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:ListMedicalVocabularies">)),
    TranscribeUpdateMedicalVocabulary: (...args) => callOperation("transcribe:UpdateMedicalVocabulary", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:UpdateMedicalVocabulary">)),
  };
}
