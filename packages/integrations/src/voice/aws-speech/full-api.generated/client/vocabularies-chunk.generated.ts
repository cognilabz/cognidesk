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
export const AwsSpeechFullApiVocabulariesOperationKeys = [
  "transcribe:CreateVocabulary",
  "transcribe:DeleteVocabulary",
  "transcribe:GetVocabulary",
  "transcribe:ListVocabularies",
  "transcribe:UpdateVocabulary"
] as const;
export type AwsSpeechFullApiVocabulariesOperationKey = typeof AwsSpeechFullApiVocabulariesOperationKeys[number];
// End hardened literal operation keys.

export interface AwsSpeechFullApiVocabulariesOperationPathParamMap {
  "transcribe:CreateVocabulary": { "VocabularyName": AwsSpeechFullApiPathParamValue };
  "transcribe:DeleteVocabulary": { "VocabularyName": AwsSpeechFullApiPathParamValue };
  "transcribe:GetVocabulary": { "VocabularyName": AwsSpeechFullApiPathParamValue };
  "transcribe:ListVocabularies": {};
  "transcribe:UpdateVocabulary": { "VocabularyName": AwsSpeechFullApiPathParamValue };
}

export interface AwsSpeechFullApiVocabulariesOperationRequestMap {
  "transcribe:CreateVocabulary": AwsSpeechFullApiOperationInput<"transcribe:CreateVocabulary">;
  "transcribe:DeleteVocabulary": AwsSpeechFullApiOperationInput<"transcribe:DeleteVocabulary">;
  "transcribe:GetVocabulary": AwsSpeechFullApiOperationInput<"transcribe:GetVocabulary">;
  "transcribe:ListVocabularies": AwsSpeechFullApiOperationInput<"transcribe:ListVocabularies">;
  "transcribe:UpdateVocabulary": AwsSpeechFullApiOperationInput<"transcribe:UpdateVocabulary">;
}

export interface AwsSpeechFullApiVocabulariesGeneratedClient {
  TranscribeCreateVocabulary(...args: AwsSpeechFullApiOperationArgs<"transcribe:CreateVocabulary">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:CreateVocabulary"]>;
  TranscribeDeleteVocabulary(...args: AwsSpeechFullApiOperationArgs<"transcribe:DeleteVocabulary">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:DeleteVocabulary"]>;
  TranscribeGetVocabulary(...args: AwsSpeechFullApiOperationArgs<"transcribe:GetVocabulary">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:GetVocabulary"]>;
  TranscribeListVocabularies(...args: AwsSpeechFullApiOperationArgs<"transcribe:ListVocabularies">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:ListVocabularies"]>;
  TranscribeUpdateVocabulary(...args: AwsSpeechFullApiOperationArgs<"transcribe:UpdateVocabulary">): Promise<AwsSpeechFullApiOperationResponseMap["transcribe:UpdateVocabulary"]>;
}

export const AwsSpeechFullApiVocabulariesGeneratedFunctionNames = [
  "TranscribeCreateVocabulary",
  "TranscribeDeleteVocabulary",
  "TranscribeGetVocabulary",
  "TranscribeListVocabularies",
  "TranscribeUpdateVocabulary"
] as const satisfies readonly (keyof AwsSpeechFullApiVocabulariesGeneratedClient)[];

export function createAwsSpeechFullApiVocabulariesGeneratedClient(
  callOperation: AwsSpeechGeneratedOperationCaller,
): AwsSpeechFullApiVocabulariesGeneratedClient {
  return {
    TranscribeCreateVocabulary: (...args) => callOperation("transcribe:CreateVocabulary", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:CreateVocabulary">)),
    TranscribeDeleteVocabulary: (...args) => callOperation("transcribe:DeleteVocabulary", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:DeleteVocabulary">)),
    TranscribeGetVocabulary: (...args) => callOperation("transcribe:GetVocabulary", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:GetVocabulary">)),
    TranscribeListVocabularies: (...args) => callOperation("transcribe:ListVocabularies", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:ListVocabularies">)),
    TranscribeUpdateVocabulary: (...args) => callOperation("transcribe:UpdateVocabulary", ...(args as AwsSpeechFullApiOperationArgs<"transcribe:UpdateVocabulary">)),
  };
}
