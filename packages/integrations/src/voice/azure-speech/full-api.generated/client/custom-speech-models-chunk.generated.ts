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
export const AzureSpeechFullApiCustomSpeechModelsOperationKeys = [
  "speech-to-text:Models_AuthorizeCopy:/models:authorizecopy",
  "speech-to-text:Models_Copy:/models/{id}:copy",
  "speech-to-text:Models_Create:/models",
  "speech-to-text:Models_Delete:/models/{id}",
  "speech-to-text:Models_GetBaseModel:/models/base/{id}",
  "speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest",
  "speech-to-text:Models_GetCustomModel:/models/{id}",
  "speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest",
  "speech-to-text:Models_GetFile:/models/{id}/files/{fileId}",
  "speech-to-text:Models_ListBaseModels:/models/base",
  "speech-to-text:Models_ListCustomModels:/models",
  "speech-to-text:Models_ListFiles:/models/{id}/files",
  "speech-to-text:Models_ListSupportedLocales:/models/locales",
  "speech-to-text:Models_Update:/models/{id}"
] as const;
export type AzureSpeechFullApiCustomSpeechModelsOperationKey = typeof AzureSpeechFullApiCustomSpeechModelsOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiCustomSpeechModelsOperationPathParamMap {
  "speech-to-text:Models_AuthorizeCopy:/models:authorizecopy": {};
  "speech-to-text:Models_Copy:/models/{id}:copy": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Models_Create:/models": {};
  "speech-to-text:Models_Delete:/models/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Models_GetBaseModel:/models/base/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Models_GetCustomModel:/models/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Models_GetFile:/models/{id}/files/{fileId}": { "id": AzureSpeechFullApiPathParamValue; "fileId": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Models_ListBaseModels:/models/base": {};
  "speech-to-text:Models_ListCustomModels:/models": {};
  "speech-to-text:Models_ListFiles:/models/{id}/files": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Models_ListSupportedLocales:/models/locales": {};
  "speech-to-text:Models_Update:/models/{id}": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiCustomSpeechModelsOperationRequestMap {
  "speech-to-text:Models_AuthorizeCopy:/models:authorizecopy": AzureSpeechFullApiOperationInput<"speech-to-text:Models_AuthorizeCopy:/models:authorizecopy">;
  "speech-to-text:Models_Copy:/models/{id}:copy": AzureSpeechFullApiOperationInput<"speech-to-text:Models_Copy:/models/{id}:copy">;
  "speech-to-text:Models_Create:/models": AzureSpeechFullApiOperationInput<"speech-to-text:Models_Create:/models">;
  "speech-to-text:Models_Delete:/models/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Models_Delete:/models/{id}">;
  "speech-to-text:Models_GetBaseModel:/models/base/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Models_GetBaseModel:/models/base/{id}">;
  "speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest": AzureSpeechFullApiOperationInput<"speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest">;
  "speech-to-text:Models_GetCustomModel:/models/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Models_GetCustomModel:/models/{id}">;
  "speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest": AzureSpeechFullApiOperationInput<"speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest">;
  "speech-to-text:Models_GetFile:/models/{id}/files/{fileId}": AzureSpeechFullApiOperationInput<"speech-to-text:Models_GetFile:/models/{id}/files/{fileId}">;
  "speech-to-text:Models_ListBaseModels:/models/base": AzureSpeechFullApiOperationInput<"speech-to-text:Models_ListBaseModels:/models/base">;
  "speech-to-text:Models_ListCustomModels:/models": AzureSpeechFullApiOperationInput<"speech-to-text:Models_ListCustomModels:/models">;
  "speech-to-text:Models_ListFiles:/models/{id}/files": AzureSpeechFullApiOperationInput<"speech-to-text:Models_ListFiles:/models/{id}/files">;
  "speech-to-text:Models_ListSupportedLocales:/models/locales": AzureSpeechFullApiOperationInput<"speech-to-text:Models_ListSupportedLocales:/models/locales">;
  "speech-to-text:Models_Update:/models/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Models_Update:/models/{id}">;
}

export interface AzureSpeechFullApiCustomSpeechModelsGeneratedClient {
  SpeechToTextModelsAuthorizeCopy(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_AuthorizeCopy:/models:authorizecopy">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_AuthorizeCopy:/models:authorizecopy"]>;
  SpeechToTextModelsCopy(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_Copy:/models/{id}:copy">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_Copy:/models/{id}:copy"]>;
  SpeechToTextModelsCreate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_Create:/models">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_Create:/models"]>;
  SpeechToTextModelsDelete(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_Delete:/models/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_Delete:/models/{id}"]>;
  SpeechToTextModelsGetBaseModel(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_GetBaseModel:/models/base/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_GetBaseModel:/models/base/{id}"]>;
  SpeechToTextModelsGetBaseModelManifest(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest"]>;
  SpeechToTextModelsGetCustomModel(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_GetCustomModel:/models/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_GetCustomModel:/models/{id}"]>;
  SpeechToTextModelsGetCustomModelManifest(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest"]>;
  SpeechToTextModelsGetFile(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_GetFile:/models/{id}/files/{fileId}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_GetFile:/models/{id}/files/{fileId}"]>;
  SpeechToTextModelsListBaseModels(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_ListBaseModels:/models/base">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_ListBaseModels:/models/base"]>;
  SpeechToTextModelsListCustomModels(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_ListCustomModels:/models">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_ListCustomModels:/models"]>;
  SpeechToTextModelsListFiles(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_ListFiles:/models/{id}/files">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_ListFiles:/models/{id}/files"]>;
  SpeechToTextModelsListSupportedLocales(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_ListSupportedLocales:/models/locales">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_ListSupportedLocales:/models/locales"]>;
  SpeechToTextModelsUpdate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Models_Update:/models/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Models_Update:/models/{id}"]>;
}

export const AzureSpeechFullApiCustomSpeechModelsGeneratedFunctionNames = [
  "SpeechToTextModelsAuthorizeCopy",
  "SpeechToTextModelsCopy",
  "SpeechToTextModelsCreate",
  "SpeechToTextModelsDelete",
  "SpeechToTextModelsGetBaseModel",
  "SpeechToTextModelsGetBaseModelManifest",
  "SpeechToTextModelsGetCustomModel",
  "SpeechToTextModelsGetCustomModelManifest",
  "SpeechToTextModelsGetFile",
  "SpeechToTextModelsListBaseModels",
  "SpeechToTextModelsListCustomModels",
  "SpeechToTextModelsListFiles",
  "SpeechToTextModelsListSupportedLocales",
  "SpeechToTextModelsUpdate"
] as const satisfies readonly (keyof AzureSpeechFullApiCustomSpeechModelsGeneratedClient)[];

export function createAzureSpeechFullApiCustomSpeechModelsGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiCustomSpeechModelsGeneratedClient {
  return {
    SpeechToTextModelsAuthorizeCopy: (...args) => callOperation("speech-to-text:Models_AuthorizeCopy:/models:authorizecopy", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_AuthorizeCopy:/models:authorizecopy">)),
    SpeechToTextModelsCopy: (...args) => callOperation("speech-to-text:Models_Copy:/models/{id}:copy", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_Copy:/models/{id}:copy">)),
    SpeechToTextModelsCreate: (...args) => callOperation("speech-to-text:Models_Create:/models", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_Create:/models">)),
    SpeechToTextModelsDelete: (...args) => callOperation("speech-to-text:Models_Delete:/models/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_Delete:/models/{id}">)),
    SpeechToTextModelsGetBaseModel: (...args) => callOperation("speech-to-text:Models_GetBaseModel:/models/base/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_GetBaseModel:/models/base/{id}">)),
    SpeechToTextModelsGetBaseModelManifest: (...args) => callOperation("speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest">)),
    SpeechToTextModelsGetCustomModel: (...args) => callOperation("speech-to-text:Models_GetCustomModel:/models/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_GetCustomModel:/models/{id}">)),
    SpeechToTextModelsGetCustomModelManifest: (...args) => callOperation("speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest">)),
    SpeechToTextModelsGetFile: (...args) => callOperation("speech-to-text:Models_GetFile:/models/{id}/files/{fileId}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_GetFile:/models/{id}/files/{fileId}">)),
    SpeechToTextModelsListBaseModels: (...args) => callOperation("speech-to-text:Models_ListBaseModels:/models/base", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_ListBaseModels:/models/base">)),
    SpeechToTextModelsListCustomModels: (...args) => callOperation("speech-to-text:Models_ListCustomModels:/models", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_ListCustomModels:/models">)),
    SpeechToTextModelsListFiles: (...args) => callOperation("speech-to-text:Models_ListFiles:/models/{id}/files", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_ListFiles:/models/{id}/files">)),
    SpeechToTextModelsListSupportedLocales: (...args) => callOperation("speech-to-text:Models_ListSupportedLocales:/models/locales", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_ListSupportedLocales:/models/locales">)),
    SpeechToTextModelsUpdate: (...args) => callOperation("speech-to-text:Models_Update:/models/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Models_Update:/models/{id}">)),
  };
}
