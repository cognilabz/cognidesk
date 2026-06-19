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
export const AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationOperationKeys = [
  "speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit",
  "speech-to-text:Datasets_Create:/datasets",
  "speech-to-text:Datasets_Delete:/datasets/{id}",
  "speech-to-text:Datasets_Get:/datasets/{id}",
  "speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks",
  "speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}",
  "speech-to-text:Datasets_List:/datasets",
  "speech-to-text:Datasets_ListFiles:/datasets/{id}/files",
  "speech-to-text:Datasets_ListSupportedLocales:/datasets/locales",
  "speech-to-text:Datasets_Update:/datasets/{id}",
  "speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks"
] as const;
export type AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationOperationKey = typeof AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationOperationPathParamMap {
  "speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Datasets_Create:/datasets": {};
  "speech-to-text:Datasets_Delete:/datasets/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Datasets_Get:/datasets/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}": { "id": AzureSpeechFullApiPathParamValue; "fileId": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Datasets_List:/datasets": {};
  "speech-to-text:Datasets_ListFiles:/datasets/{id}/files": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Datasets_ListSupportedLocales:/datasets/locales": {};
  "speech-to-text:Datasets_Update:/datasets/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationOperationRequestMap {
  "speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit": AzureSpeechFullApiOperationInput<"speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit">;
  "speech-to-text:Datasets_Create:/datasets": AzureSpeechFullApiOperationInput<"speech-to-text:Datasets_Create:/datasets">;
  "speech-to-text:Datasets_Delete:/datasets/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Datasets_Delete:/datasets/{id}">;
  "speech-to-text:Datasets_Get:/datasets/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Datasets_Get:/datasets/{id}">;
  "speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks": AzureSpeechFullApiOperationInput<"speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks">;
  "speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}": AzureSpeechFullApiOperationInput<"speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}">;
  "speech-to-text:Datasets_List:/datasets": AzureSpeechFullApiOperationInput<"speech-to-text:Datasets_List:/datasets">;
  "speech-to-text:Datasets_ListFiles:/datasets/{id}/files": AzureSpeechFullApiOperationInput<"speech-to-text:Datasets_ListFiles:/datasets/{id}/files">;
  "speech-to-text:Datasets_ListSupportedLocales:/datasets/locales": AzureSpeechFullApiOperationInput<"speech-to-text:Datasets_ListSupportedLocales:/datasets/locales">;
  "speech-to-text:Datasets_Update:/datasets/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Datasets_Update:/datasets/{id}">;
  "speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks": AzureSpeechFullApiOperationInput<"speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks">;
}

export interface AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient {
  SpeechToTextDatasetsCommitBlocks(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit"]>;
  SpeechToTextDatasetsCreate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_Create:/datasets">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Datasets_Create:/datasets"]>;
  SpeechToTextDatasetsDelete(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_Delete:/datasets/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Datasets_Delete:/datasets/{id}"]>;
  SpeechToTextDatasetsGet(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_Get:/datasets/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Datasets_Get:/datasets/{id}"]>;
  SpeechToTextDatasetsGetBlocks(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks"]>;
  SpeechToTextDatasetsGetFile(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}"]>;
  SpeechToTextDatasetsList(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_List:/datasets">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Datasets_List:/datasets"]>;
  SpeechToTextDatasetsListFiles(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_ListFiles:/datasets/{id}/files">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Datasets_ListFiles:/datasets/{id}/files"]>;
  SpeechToTextDatasetsListSupportedLocales(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_ListSupportedLocales:/datasets/locales">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Datasets_ListSupportedLocales:/datasets/locales"]>;
  SpeechToTextDatasetsUpdate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_Update:/datasets/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Datasets_Update:/datasets/{id}"]>;
  SpeechToTextDatasetsUploadBlock(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks"]>;
}

export const AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedFunctionNames = [
  "SpeechToTextDatasetsCommitBlocks",
  "SpeechToTextDatasetsCreate",
  "SpeechToTextDatasetsDelete",
  "SpeechToTextDatasetsGet",
  "SpeechToTextDatasetsGetBlocks",
  "SpeechToTextDatasetsGetFile",
  "SpeechToTextDatasetsList",
  "SpeechToTextDatasetsListFiles",
  "SpeechToTextDatasetsListSupportedLocales",
  "SpeechToTextDatasetsUpdate",
  "SpeechToTextDatasetsUploadBlock"
] as const satisfies readonly (keyof AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient)[];

export function createAzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient {
  return {
    SpeechToTextDatasetsCommitBlocks: (...args) => callOperation("speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit">)),
    SpeechToTextDatasetsCreate: (...args) => callOperation("speech-to-text:Datasets_Create:/datasets", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_Create:/datasets">)),
    SpeechToTextDatasetsDelete: (...args) => callOperation("speech-to-text:Datasets_Delete:/datasets/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_Delete:/datasets/{id}">)),
    SpeechToTextDatasetsGet: (...args) => callOperation("speech-to-text:Datasets_Get:/datasets/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_Get:/datasets/{id}">)),
    SpeechToTextDatasetsGetBlocks: (...args) => callOperation("speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks">)),
    SpeechToTextDatasetsGetFile: (...args) => callOperation("speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}">)),
    SpeechToTextDatasetsList: (...args) => callOperation("speech-to-text:Datasets_List:/datasets", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_List:/datasets">)),
    SpeechToTextDatasetsListFiles: (...args) => callOperation("speech-to-text:Datasets_ListFiles:/datasets/{id}/files", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_ListFiles:/datasets/{id}/files">)),
    SpeechToTextDatasetsListSupportedLocales: (...args) => callOperation("speech-to-text:Datasets_ListSupportedLocales:/datasets/locales", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_ListSupportedLocales:/datasets/locales">)),
    SpeechToTextDatasetsUpdate: (...args) => callOperation("speech-to-text:Datasets_Update:/datasets/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_Update:/datasets/{id}">)),
    SpeechToTextDatasetsUploadBlock: (...args) => callOperation("speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks">)),
  };
}
