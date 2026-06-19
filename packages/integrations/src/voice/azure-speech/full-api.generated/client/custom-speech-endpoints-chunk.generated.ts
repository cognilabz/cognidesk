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
export const AzureSpeechFullApiCustomSpeechEndpointsOperationKeys = [
  "speech-to-text:Endpoints_Create:/endpoints",
  "speech-to-text:Endpoints_Delete:/endpoints/{id}",
  "speech-to-text:Endpoints_Get:/endpoints/{id}",
  "speech-to-text:Endpoints_List:/endpoints",
  "speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales",
  "speech-to-text:Endpoints_Update:/endpoints/{id}"
] as const;
export type AzureSpeechFullApiCustomSpeechEndpointsOperationKey = typeof AzureSpeechFullApiCustomSpeechEndpointsOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiCustomSpeechEndpointsOperationPathParamMap {
  "speech-to-text:Endpoints_Create:/endpoints": {};
  "speech-to-text:Endpoints_Delete:/endpoints/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Endpoints_Get:/endpoints/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "speech-to-text:Endpoints_List:/endpoints": {};
  "speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales": {};
  "speech-to-text:Endpoints_Update:/endpoints/{id}": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiCustomSpeechEndpointsOperationRequestMap {
  "speech-to-text:Endpoints_Create:/endpoints": AzureSpeechFullApiOperationInput<"speech-to-text:Endpoints_Create:/endpoints">;
  "speech-to-text:Endpoints_Delete:/endpoints/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Endpoints_Delete:/endpoints/{id}">;
  "speech-to-text:Endpoints_Get:/endpoints/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Endpoints_Get:/endpoints/{id}">;
  "speech-to-text:Endpoints_List:/endpoints": AzureSpeechFullApiOperationInput<"speech-to-text:Endpoints_List:/endpoints">;
  "speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales": AzureSpeechFullApiOperationInput<"speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales">;
  "speech-to-text:Endpoints_Update:/endpoints/{id}": AzureSpeechFullApiOperationInput<"speech-to-text:Endpoints_Update:/endpoints/{id}">;
}

export interface AzureSpeechFullApiCustomSpeechEndpointsGeneratedClient {
  SpeechToTextEndpointsCreate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Endpoints_Create:/endpoints">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Endpoints_Create:/endpoints"]>;
  SpeechToTextEndpointsDelete(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Endpoints_Delete:/endpoints/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Endpoints_Delete:/endpoints/{id}"]>;
  SpeechToTextEndpointsGet(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Endpoints_Get:/endpoints/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Endpoints_Get:/endpoints/{id}"]>;
  SpeechToTextEndpointsList(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Endpoints_List:/endpoints">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Endpoints_List:/endpoints"]>;
  SpeechToTextEndpointsListSupportedLocales(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales"]>;
  SpeechToTextEndpointsUpdate(...args: AzureSpeechFullApiOperationArgs<"speech-to-text:Endpoints_Update:/endpoints/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["speech-to-text:Endpoints_Update:/endpoints/{id}"]>;
}

export const AzureSpeechFullApiCustomSpeechEndpointsGeneratedFunctionNames = [
  "SpeechToTextEndpointsCreate",
  "SpeechToTextEndpointsDelete",
  "SpeechToTextEndpointsGet",
  "SpeechToTextEndpointsList",
  "SpeechToTextEndpointsListSupportedLocales",
  "SpeechToTextEndpointsUpdate"
] as const satisfies readonly (keyof AzureSpeechFullApiCustomSpeechEndpointsGeneratedClient)[];

export function createAzureSpeechFullApiCustomSpeechEndpointsGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiCustomSpeechEndpointsGeneratedClient {
  return {
    SpeechToTextEndpointsCreate: (...args) => callOperation("speech-to-text:Endpoints_Create:/endpoints", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Endpoints_Create:/endpoints">)),
    SpeechToTextEndpointsDelete: (...args) => callOperation("speech-to-text:Endpoints_Delete:/endpoints/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Endpoints_Delete:/endpoints/{id}">)),
    SpeechToTextEndpointsGet: (...args) => callOperation("speech-to-text:Endpoints_Get:/endpoints/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Endpoints_Get:/endpoints/{id}">)),
    SpeechToTextEndpointsList: (...args) => callOperation("speech-to-text:Endpoints_List:/endpoints", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Endpoints_List:/endpoints">)),
    SpeechToTextEndpointsListSupportedLocales: (...args) => callOperation("speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales">)),
    SpeechToTextEndpointsUpdate: (...args) => callOperation("speech-to-text:Endpoints_Update:/endpoints/{id}", ...(args as AzureSpeechFullApiOperationArgs<"speech-to-text:Endpoints_Update:/endpoints/{id}">)),
  };
}
