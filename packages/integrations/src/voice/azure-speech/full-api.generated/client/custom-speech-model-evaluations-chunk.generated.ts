// Generated endpoint chunk for AzureSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AzureSpeechGeneratedOperationCaller,
  AzureSpeechFullApiOperationArgs,
  AzureSpeechFullApiOperationInput,
  AzureSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AzureSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AzureSpeechFullApiCustomSpeechModelEvaluationsOperationKeys = [
  "speech-to-text:Evaluations_Create:/evaluations",
  "speech-to-text:Evaluations_Delete:/evaluations/{id}",
  "speech-to-text:Evaluations_Get:/evaluations/{id}",
  "speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}",
  "speech-to-text:Evaluations_List:/evaluations",
  "speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files",
  "speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales",
  "speech-to-text:Evaluations_Update:/evaluations/{id}"
] as const;
export type AzureSpeechFullApiCustomSpeechModelEvaluationsOperationKey = typeof AzureSpeechFullApiCustomSpeechModelEvaluationsOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiCustomSpeechModelEvaluationsOperationPathParamMap {
  "speech-to-text:Evaluations_Create:/evaluations": {};
  "speech-to-text:Evaluations_Delete:/evaluations/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Evaluations_Get:/evaluations/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}": { "id": AzureSpeechFullApiPathParamValue; "fileId": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Evaluations_List:/evaluations": {};
  "speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales": {};
  "speech-to-text:Evaluations_Update:/evaluations/{id}": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiCustomSpeechModelEvaluationsOperationRequestMap {
  "speech-to-text:Evaluations_Create:/evaluations": AzureSpeechFullApiOperationInput<"speech-to-text:Evaluations_Create:/evaluations">;
  "speech-to-text:Evaluations_Delete:/evaluations/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Evaluations_Delete:/evaluations/{id}">;
  "speech-to-text:Evaluations_Get:/evaluations/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Evaluations_Get:/evaluations/{id}">;
  "speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}": AzureSpeechFullApiOperationInput<"speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}">;
  "speech-to-text:Evaluations_List:/evaluations": AzureSpeechFullApiOperationInput<"speech-to-text:Evaluations_List:/evaluations">;
  "speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files": AzureSpeechFullApiOperationInput<"speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files">;
  "speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales": AzureSpeechFullApiOperationInput<"speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales">;
  "speech-to-text:Evaluations_Update:/evaluations/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Evaluations_Update:/evaluations/{id}">;
}

export interface AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient {
  SpeechToTextEvaluationsCreate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_Create:/evaluations">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Evaluations_Create:/evaluations"]>;
  SpeechToTextEvaluationsDelete(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_Delete:/evaluations/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Evaluations_Delete:/evaluations/{id}"]>;
  SpeechToTextEvaluationsGet(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_Get:/evaluations/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Evaluations_Get:/evaluations/{id}"]>;
  SpeechToTextEvaluationsGetFile(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}"]>;
  SpeechToTextEvaluationsList(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_List:/evaluations">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Evaluations_List:/evaluations"]>;
  SpeechToTextEvaluationsListFiles(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files"]>;
  SpeechToTextEvaluationsListSupportedLocales(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales"]>;
  SpeechToTextEvaluationsUpdate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_Update:/evaluations/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Evaluations_Update:/evaluations/{id}"]>;
}

export const AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedFunctionNames = [
  "SpeechToTextEvaluationsCreate",
  "SpeechToTextEvaluationsDelete",
  "SpeechToTextEvaluationsGet",
  "SpeechToTextEvaluationsGetFile",
  "SpeechToTextEvaluationsList",
  "SpeechToTextEvaluationsListFiles",
  "SpeechToTextEvaluationsListSupportedLocales",
  "SpeechToTextEvaluationsUpdate"
] as const satisfies readonly (keyof AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient)[];

export function createAzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient {
  return {
    SpeechToTextEvaluationsCreate: (...args) => callOperation("speech-to-text:Evaluations_Create:/evaluations", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_Create:/evaluations">)),
    SpeechToTextEvaluationsDelete: (...args) => callOperation("speech-to-text:Evaluations_Delete:/evaluations/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_Delete:/evaluations/{id}">)),
    SpeechToTextEvaluationsGet: (...args) => callOperation("speech-to-text:Evaluations_Get:/evaluations/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_Get:/evaluations/{id}">)),
    SpeechToTextEvaluationsGetFile: (...args) => callOperation("speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}">)),
    SpeechToTextEvaluationsList: (...args) => callOperation("speech-to-text:Evaluations_List:/evaluations", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_List:/evaluations">)),
    SpeechToTextEvaluationsListFiles: (...args) => callOperation("speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files">)),
    SpeechToTextEvaluationsListSupportedLocales: (...args) => callOperation("speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales">)),
    SpeechToTextEvaluationsUpdate: (...args) => callOperation("speech-to-text:Evaluations_Update:/evaluations/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Evaluations_Update:/evaluations/{id}">)),
  };
}
