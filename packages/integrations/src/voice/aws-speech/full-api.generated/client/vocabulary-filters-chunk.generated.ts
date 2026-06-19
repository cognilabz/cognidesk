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
export const AwsSpeechFullApiVocabularyFiltersOperationKeys = [
  "transcribe:CreateVocabularyFilter",
  "transcribe:DeleteVocabularyFilter",
  "transcribe:GetVocabularyFilter",
  "transcribe:ListVocabularyFilters",
  "transcribe:UpdateVocabularyFilter"
] as const;
export type AwsSpeechFullApiVocabularyFiltersOperationKey = typeof AwsSpeechFullApiVocabularyFiltersOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiVocabularyFiltersOperationPathParamMap {
  "transcribe:CreateVocabularyFilter": { "VocabularyFilterName": AwsSpeechFullApiPathParamValue };
  "transcribe:DeleteVocabularyFilter": { "VocabularyFilterName": AwsSpeechFullApiPathParamValue };
  "transcribe:GetVocabularyFilter": { "VocabularyFilterName": AwsSpeechFullApiPathParamValue };
  "transcribe:ListVocabularyFilters": {};
  "transcribe:UpdateVocabularyFilter": { "VocabularyFilterName": AwsSpeechFullApiPathParamValue };
}

export interface AwsSpeechFullApiVocabularyFiltersOperationRequestMap {
  "transcribe:CreateVocabularyFilter": AwsSpeechFullApiOperationInput<"transcribe:CreateVocabularyFilter">;
  "transcribe:DeleteVocabularyFilter": AwsSpeechFullApiOperationInput<"transcribe:DeleteVocabularyFilter">;
  "transcribe:GetVocabularyFilter": AwsSpeechFullApiOperationInput<"transcribe:GetVocabularyFilter">;
  "transcribe:ListVocabularyFilters": AwsSpeechFullApiOperationInput<"transcribe:ListVocabularyFilters">;
  "transcribe:UpdateVocabularyFilter": AwsSpeechFullApiOperationInput<"transcribe:UpdateVocabularyFilter">;
}

export interface AwsSpeechFullApiVocabularyFiltersGeneratedClient {
  TranscribeCreateVocabularyFilter(...args: AwsSpeechFullApiOperationArgs<"transcribe:CreateVocabularyFilter">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:CreateVocabularyFilter"]>;
  TranscribeDeleteVocabularyFilter(...args: AwsSpeechFullApiOperationArgs<"transcribe:DeleteVocabularyFilter">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:DeleteVocabularyFilter"]>;
  TranscribeGetVocabularyFilter(...args: AwsSpeechFullApiOperationArgs<"transcribe:GetVocabularyFilter">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:GetVocabularyFilter"]>;
  TranscribeListVocabularyFilters(...args: AwsSpeechFullApiOperationArgs<"transcribe:ListVocabularyFilters">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:ListVocabularyFilters"]>;
  TranscribeUpdateVocabularyFilter(...args: AwsSpeechFullApiOperationArgs<"transcribe:UpdateVocabularyFilter">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:UpdateVocabularyFilter"]>;
}

export const AwsSpeechFullApiVocabularyFiltersGeneratedFunctionNames = [
  "TranscribeCreateVocabularyFilter",
  "TranscribeDeleteVocabularyFilter",
  "TranscribeGetVocabularyFilter",
  "TranscribeListVocabularyFilters",
  "TranscribeUpdateVocabularyFilter"
] as const satisfies readonly (keyof AwsSpeechFullApiVocabularyFiltersGeneratedClient)[];

export function createAwsSpeechFullApiVocabularyFiltersGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiVocabularyFiltersGeneratedClient {
  return {
    TranscribeCreateVocabularyFilter: (...args) => callOperation("transcribe:CreateVocabularyFilter", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:CreateVocabularyFilter">)),
    TranscribeDeleteVocabularyFilter: (...args) => callOperation("transcribe:DeleteVocabularyFilter", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:DeleteVocabularyFilter">)),
    TranscribeGetVocabularyFilter: (...args) => callOperation("transcribe:GetVocabularyFilter", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:GetVocabularyFilter">)),
    TranscribeListVocabularyFilters: (...args) => callOperation("transcribe:ListVocabularyFilters", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:ListVocabularyFilters">)),
    TranscribeUpdateVocabularyFilter: (...args) => callOperation("transcribe:UpdateVocabularyFilter", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:UpdateVocabularyFilter">)),
  };
}
