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
export const AzureSpeechFullApiProjectOperationKeys = [
  "custom-text-to-speech:Projects_Create:/projects/{id}",
  "custom-text-to-speech:Projects_Delete:/projects/{id}",
  "custom-text-to-speech:Projects_Get:/projects/{id}",
  "custom-text-to-speech:Projects_List:/projects"
] as const;
export type AzureSpeechFullApiProjectOperationKey = typeof AzureSpeechFullApiProjectOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiProjectOperationPathParamMap {
  "custom-text-to-speech:Projects_Create:/projects/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Projects_Delete:/projects/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Projects_Get:/projects/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Projects_List:/projects": {};
}

export interface AzureSpeechFullApiProjectOperationRequestMap {
  "custom-text-to-speech:Projects_Create:/projects/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Projects_Create:/projects/{id}">;
  "custom-text-to-speech:Projects_Delete:/projects/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Projects_Delete:/projects/{id}">;
  "custom-text-to-speech:Projects_Get:/projects/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Projects_Get:/projects/{id}">;
  "custom-text-to-speech:Projects_List:/projects": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Projects_List:/projects">;
}

export interface AzureSpeechFullApiProjectGeneratedClient {
  CustomTextToSpeechProjectsCreate(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Projects_Create:/projects/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Projects_Create:/projects/{id}"]>;
  CustomTextToSpeechProjectsDelete(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Projects_Delete:/projects/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Projects_Delete:/projects/{id}"]>;
  CustomTextToSpeechProjectsGet(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Projects_Get:/projects/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Projects_Get:/projects/{id}"]>;
  CustomTextToSpeechProjectsList(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Projects_List:/projects">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Projects_List:/projects"]>;
}

export const AzureSpeechFullApiProjectGeneratedFunctionNames = [
  "CustomTextToSpeechProjectsCreate",
  "CustomTextToSpeechProjectsDelete",
  "CustomTextToSpeechProjectsGet",
  "CustomTextToSpeechProjectsList"
] as const satisfies readonly (keyof AzureSpeechFullApiProjectGeneratedClient)[];

export function createAzureSpeechFullApiProjectGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiProjectGeneratedClient {
  return {
    CustomTextToSpeechProjectsCreate: (...args) => callOperation("custom-text-to-speech:Projects_Create:/projects/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Projects_Create:/projects/{id}">)),
    CustomTextToSpeechProjectsDelete: (...args) => callOperation("custom-text-to-speech:Projects_Delete:/projects/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Projects_Delete:/projects/{id}">)),
    CustomTextToSpeechProjectsGet: (...args) => callOperation("custom-text-to-speech:Projects_Get:/projects/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Projects_Get:/projects/{id}">)),
    CustomTextToSpeechProjectsList: (...args) => callOperation("custom-text-to-speech:Projects_List:/projects", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Projects_List:/projects">)),
  };
}
