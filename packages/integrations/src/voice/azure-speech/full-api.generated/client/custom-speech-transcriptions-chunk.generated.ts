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
export const AzureSpeechFullApiCustomSpeechTranscriptionsOperationKeys = [
  "speech-to-text:Transcriptions_Delete:/transcriptions/{id}",
  "speech-to-text:Transcriptions_Get:/transcriptions/{id}",
  "speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}",
  "speech-to-text:Transcriptions_List:/transcriptions",
  "speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files",
  "speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales",
  "speech-to-text:Transcriptions_Submit:/transcriptions:submit",
  "speech-to-text:Transcriptions_Update:/transcriptions/{id}"
] as const;
export type AzureSpeechFullApiCustomSpeechTranscriptionsOperationKey = typeof AzureSpeechFullApiCustomSpeechTranscriptionsOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiCustomSpeechTranscriptionsOperationPathParamMap {
  "speech-to-text:Transcriptions_Delete:/transcriptions/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Transcriptions_Get:/transcriptions/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}": { "id": AzureSpeechFullApiPathParamValue; "fileId": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Transcriptions_List:/transcriptions": {};
  "speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales": {};
  "speech-to-text:Transcriptions_Submit:/transcriptions:submit": {};
  "speech-to-text:Transcriptions_Update:/transcriptions/{id}": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiCustomSpeechTranscriptionsOperationRequestMap {
  "speech-to-text:Transcriptions_Delete:/transcriptions/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Transcriptions_Delete:/transcriptions/{id}">;
  "speech-to-text:Transcriptions_Get:/transcriptions/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Transcriptions_Get:/transcriptions/{id}">;
  "speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}": AzureSpeechFullApiOperationInput<"speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}">;
  "speech-to-text:Transcriptions_List:/transcriptions": AzureSpeechFullApiOperationInput<"speech-to-text:Transcriptions_List:/transcriptions">;
  "speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files": AzureSpeechFullApiOperationInput<"speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files">;
  "speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales": AzureSpeechFullApiOperationInput<"speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales">;
  "speech-to-text:Transcriptions_Submit:/transcriptions:submit": AzureSpeechFullApiOperationInput<"speech-to-text:Transcriptions_Submit:/transcriptions:submit">;
  "speech-to-text:Transcriptions_Update:/transcriptions/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Transcriptions_Update:/transcriptions/{id}">;
}

export interface AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient {
  SpeechToTextTranscriptionsDelete(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_Delete:/transcriptions/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Transcriptions_Delete:/transcriptions/{id}"]>;
  SpeechToTextTranscriptionsGet(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_Get:/transcriptions/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Transcriptions_Get:/transcriptions/{id}"]>;
  SpeechToTextTranscriptionsGetFile(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}"]>;
  SpeechToTextTranscriptionsList(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_List:/transcriptions">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Transcriptions_List:/transcriptions"]>;
  SpeechToTextTranscriptionsListFiles(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files"]>;
  SpeechToTextTranscriptionsListSupportedLocales(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales"]>;
  SpeechToTextTranscriptionsSubmit(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_Submit:/transcriptions:submit">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Transcriptions_Submit:/transcriptions:submit"]>;
  SpeechToTextTranscriptionsUpdate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_Update:/transcriptions/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Transcriptions_Update:/transcriptions/{id}"]>;
}

export const AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedFunctionNames = [
  "SpeechToTextTranscriptionsDelete",
  "SpeechToTextTranscriptionsGet",
  "SpeechToTextTranscriptionsGetFile",
  "SpeechToTextTranscriptionsList",
  "SpeechToTextTranscriptionsListFiles",
  "SpeechToTextTranscriptionsListSupportedLocales",
  "SpeechToTextTranscriptionsSubmit",
  "SpeechToTextTranscriptionsUpdate"
] as const satisfies readonly (keyof AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient)[];

export function createAzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient {
  return {
    SpeechToTextTranscriptionsDelete: (...args) => callOperation("speech-to-text:Transcriptions_Delete:/transcriptions/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_Delete:/transcriptions/{id}">)),
    SpeechToTextTranscriptionsGet: (...args) => callOperation("speech-to-text:Transcriptions_Get:/transcriptions/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_Get:/transcriptions/{id}">)),
    SpeechToTextTranscriptionsGetFile: (...args) => callOperation("speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}">)),
    SpeechToTextTranscriptionsList: (...args) => callOperation("speech-to-text:Transcriptions_List:/transcriptions", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_List:/transcriptions">)),
    SpeechToTextTranscriptionsListFiles: (...args) => callOperation("speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files">)),
    SpeechToTextTranscriptionsListSupportedLocales: (...args) => callOperation("speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales">)),
    SpeechToTextTranscriptionsSubmit: (...args) => callOperation("speech-to-text:Transcriptions_Submit:/transcriptions:submit", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_Submit:/transcriptions:submit">)),
    SpeechToTextTranscriptionsUpdate: (...args) => callOperation("speech-to-text:Transcriptions_Update:/transcriptions/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Transcriptions_Update:/transcriptions/{id}">)),
  };
}
