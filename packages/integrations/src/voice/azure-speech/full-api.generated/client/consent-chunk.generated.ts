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
export const AzureSpeechFullApiConsentOperationKeys = [
  "custom-text-to-speech:Consents_Create:/consents/{id}",
  "custom-text-to-speech:Consents_Delete:/consents/{id}",
  "custom-text-to-speech:Consents_Get:/consents/{id}",
  "custom-text-to-speech:Consents_List:/consents",
  "custom-text-to-speech:Consents_Post:/consents/{id}"
] as const;
export type AzureSpeechFullApiConsentOperationKey = typeof AzureSpeechFullApiConsentOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiConsentOperationPathParamMap {
  "custom-text-to-speech:Consents_Create:/consents/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Consents_Delete:/consents/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Consents_Get:/consents/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Consents_List:/consents": {};
  "custom-text-to-speech:Consents_Post:/consents/{id}": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiConsentOperationRequestMap {
  "custom-text-to-speech:Consents_Create:/consents/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Consents_Create:/consents/{id}">;
  "custom-text-to-speech:Consents_Delete:/consents/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Consents_Delete:/consents/{id}">;
  "custom-text-to-speech:Consents_Get:/consents/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Consents_Get:/consents/{id}">;
  "custom-text-to-speech:Consents_List:/consents": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Consents_List:/consents">;
  "custom-text-to-speech:Consents_Post:/consents/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Consents_Post:/consents/{id}">;
}

export interface AzureSpeechFullApiConsentGeneratedClient {
  CustomTextToSpeechConsentsCreate(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Consents_Create:/consents/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Consents_Create:/consents/{id}"]>;
  CustomTextToSpeechConsentsDelete(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Consents_Delete:/consents/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Consents_Delete:/consents/{id}"]>;
  CustomTextToSpeechConsentsGet(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Consents_Get:/consents/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Consents_Get:/consents/{id}"]>;
  CustomTextToSpeechConsentsList(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Consents_List:/consents">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Consents_List:/consents"]>;
  CustomTextToSpeechConsentsPost(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Consents_Post:/consents/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Consents_Post:/consents/{id}"]>;
}

export const AzureSpeechFullApiConsentGeneratedFunctionNames = [
  "CustomTextToSpeechConsentsCreate",
  "CustomTextToSpeechConsentsDelete",
  "CustomTextToSpeechConsentsGet",
  "CustomTextToSpeechConsentsList",
  "CustomTextToSpeechConsentsPost"
] as const satisfies readonly (keyof AzureSpeechFullApiConsentGeneratedClient)[];

export function createAzureSpeechFullApiConsentGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiConsentGeneratedClient {
  return {
    CustomTextToSpeechConsentsCreate: (...args) => callOperation("custom-text-to-speech:Consents_Create:/consents/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Consents_Create:/consents/{id}">)),
    CustomTextToSpeechConsentsDelete: (...args) => callOperation("custom-text-to-speech:Consents_Delete:/consents/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Consents_Delete:/consents/{id}">)),
    CustomTextToSpeechConsentsGet: (...args) => callOperation("custom-text-to-speech:Consents_Get:/consents/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Consents_Get:/consents/{id}">)),
    CustomTextToSpeechConsentsList: (...args) => callOperation("custom-text-to-speech:Consents_List:/consents", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Consents_List:/consents">)),
    CustomTextToSpeechConsentsPost: (...args) => callOperation("custom-text-to-speech:Consents_Post:/consents/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Consents_Post:/consents/{id}">)),
  };
}
