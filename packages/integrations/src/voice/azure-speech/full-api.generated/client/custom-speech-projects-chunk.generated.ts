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
export const AzureSpeechFullApiCustomSpeechProjectsOperationKeys = [
  "speech-to-text:Projects_Create:/projects",
  "speech-to-text:Projects_Delete:/projects/{id}",
  "speech-to-text:Projects_Get:/projects/{id}",
  "speech-to-text:Projects_List:/projects",
  "speech-to-text:Projects_ListDatasets:/projects/{id}/datasets",
  "speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints",
  "speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations",
  "speech-to-text:Projects_ListModels:/projects/{id}/models",
  "speech-to-text:Projects_ListSupportedLocales:/projects/locales",
  "speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions",
  "speech-to-text:Projects_Update:/projects/{id}"
] as const;
export type AzureSpeechFullApiCustomSpeechProjectsOperationKey = typeof AzureSpeechFullApiCustomSpeechProjectsOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiCustomSpeechProjectsOperationPathParamMap {
  "speech-to-text:Projects_Create:/projects": {};
  "speech-to-text:Projects_Delete:/projects/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Projects_Get:/projects/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Projects_List:/projects": {};
  "speech-to-text:Projects_ListDatasets:/projects/{id}/datasets": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Projects_ListModels:/projects/{id}/models": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Projects_ListSupportedLocales:/projects/locales": {};
  "speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Projects_Update:/projects/{id}": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiCustomSpeechProjectsOperationRequestMap {
  "speech-to-text:Projects_Create:/projects": AzureSpeechFullApiOperationInput<"speech-to-text:Projects_Create:/projects">;
  "speech-to-text:Projects_Delete:/projects/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Projects_Delete:/projects/{id}">;
  "speech-to-text:Projects_Get:/projects/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Projects_Get:/projects/{id}">;
  "speech-to-text:Projects_List:/projects": AzureSpeechFullApiOperationInput<"speech-to-text:Projects_List:/projects">;
  "speech-to-text:Projects_ListDatasets:/projects/{id}/datasets": AzureSpeechFullApiOperationInput<"speech-to-text:Projects_ListDatasets:/projects/{id}/datasets">;
  "speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints": AzureSpeechFullApiOperationInput<"speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints">;
  "speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations": AzureSpeechFullApiOperationInput<"speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations">;
  "speech-to-text:Projects_ListModels:/projects/{id}/models": AzureSpeechFullApiOperationInput<"speech-to-text:Projects_ListModels:/projects/{id}/models">;
  "speech-to-text:Projects_ListSupportedLocales:/projects/locales": AzureSpeechFullApiOperationInput<"speech-to-text:Projects_ListSupportedLocales:/projects/locales">;
  "speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions": AzureSpeechFullApiOperationInput<"speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions">;
  "speech-to-text:Projects_Update:/projects/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Projects_Update:/projects/{id}">;
}

export interface AzureSpeechFullApiCustomSpeechProjectsGeneratedClient {
  SpeechToTextProjectsCreate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_Create:/projects">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Projects_Create:/projects"]>;
  SpeechToTextProjectsDelete(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_Delete:/projects/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Projects_Delete:/projects/{id}"]>;
  SpeechToTextProjectsGet(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_Get:/projects/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Projects_Get:/projects/{id}"]>;
  SpeechToTextProjectsList(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_List:/projects">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Projects_List:/projects"]>;
  SpeechToTextProjectsListDatasets(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_ListDatasets:/projects/{id}/datasets">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Projects_ListDatasets:/projects/{id}/datasets"]>;
  SpeechToTextProjectsListEndpoints(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints"]>;
  SpeechToTextProjectsListEvaluations(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations"]>;
  SpeechToTextProjectsListModels(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_ListModels:/projects/{id}/models">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Projects_ListModels:/projects/{id}/models"]>;
  SpeechToTextProjectsListSupportedLocales(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_ListSupportedLocales:/projects/locales">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Projects_ListSupportedLocales:/projects/locales"]>;
  SpeechToTextProjectsListTranscriptions(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions"]>;
  SpeechToTextProjectsUpdate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_Update:/projects/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Projects_Update:/projects/{id}"]>;
}

export const AzureSpeechFullApiCustomSpeechProjectsGeneratedFunctionNames = [
  "SpeechToTextProjectsCreate",
  "SpeechToTextProjectsDelete",
  "SpeechToTextProjectsGet",
  "SpeechToTextProjectsList",
  "SpeechToTextProjectsListDatasets",
  "SpeechToTextProjectsListEndpoints",
  "SpeechToTextProjectsListEvaluations",
  "SpeechToTextProjectsListModels",
  "SpeechToTextProjectsListSupportedLocales",
  "SpeechToTextProjectsListTranscriptions",
  "SpeechToTextProjectsUpdate"
] as const satisfies readonly (keyof AzureSpeechFullApiCustomSpeechProjectsGeneratedClient)[];

export function createAzureSpeechFullApiCustomSpeechProjectsGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiCustomSpeechProjectsGeneratedClient {
  return {
    SpeechToTextProjectsCreate: (...args) => callOperation("speech-to-text:Projects_Create:/projects", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_Create:/projects">)),
    SpeechToTextProjectsDelete: (...args) => callOperation("speech-to-text:Projects_Delete:/projects/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_Delete:/projects/{id}">)),
    SpeechToTextProjectsGet: (...args) => callOperation("speech-to-text:Projects_Get:/projects/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_Get:/projects/{id}">)),
    SpeechToTextProjectsList: (...args) => callOperation("speech-to-text:Projects_List:/projects", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_List:/projects">)),
    SpeechToTextProjectsListDatasets: (...args) => callOperation("speech-to-text:Projects_ListDatasets:/projects/{id}/datasets", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_ListDatasets:/projects/{id}/datasets">)),
    SpeechToTextProjectsListEndpoints: (...args) => callOperation("speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints">)),
    SpeechToTextProjectsListEvaluations: (...args) => callOperation("speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations">)),
    SpeechToTextProjectsListModels: (...args) => callOperation("speech-to-text:Projects_ListModels:/projects/{id}/models", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_ListModels:/projects/{id}/models">)),
    SpeechToTextProjectsListSupportedLocales: (...args) => callOperation("speech-to-text:Projects_ListSupportedLocales:/projects/locales", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_ListSupportedLocales:/projects/locales">)),
    SpeechToTextProjectsListTranscriptions: (...args) => callOperation("speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions">)),
    SpeechToTextProjectsUpdate: (...args) => callOperation("speech-to-text:Projects_Update:/projects/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Projects_Update:/projects/{id}">)),
  };
}
