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
export const AzureSpeechFullApiPersonalVoiceOperationKeys = [
  "custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}",
  "custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}",
  "custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}",
  "custom-text-to-speech:PersonalVoices_List:/personalvoices",
  "custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}"
] as const;
export type AzureSpeechFullApiPersonalVoiceOperationKey = typeof AzureSpeechFullApiPersonalVoiceOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiPersonalVoiceOperationPathParamMap {
  "custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:PersonalVoices_List:/personalvoices": {};
  "custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiPersonalVoiceOperationRequestMap {
  "custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}">;
  "custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}">;
  "custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}">;
  "custom-text-to-speech:PersonalVoices_List:/personalvoices": AzureSpeechFullApiOperationInput<"custom-text-to-speech:PersonalVoices_List:/personalvoices">;
  "custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}">;
}

export interface AzureSpeechFullApiPersonalVoiceGeneratedClient {
  CustomTextToSpeechPersonalVoicesCreate(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}"]>;
  CustomTextToSpeechPersonalVoicesDelete(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}"]>;
  CustomTextToSpeechPersonalVoicesGet(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}"]>;
  CustomTextToSpeechPersonalVoicesList(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:PersonalVoices_List:/personalvoices">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:PersonalVoices_List:/personalvoices"]>;
  CustomTextToSpeechPersonalVoicesPost(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}"]>;
}

export const AzureSpeechFullApiPersonalVoiceGeneratedFunctionNames = [
  "CustomTextToSpeechPersonalVoicesCreate",
  "CustomTextToSpeechPersonalVoicesDelete",
  "CustomTextToSpeechPersonalVoicesGet",
  "CustomTextToSpeechPersonalVoicesList",
  "CustomTextToSpeechPersonalVoicesPost"
] as const satisfies readonly (keyof AzureSpeechFullApiPersonalVoiceGeneratedClient)[];

export function createAzureSpeechFullApiPersonalVoiceGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiPersonalVoiceGeneratedClient {
  return {
    CustomTextToSpeechPersonalVoicesCreate: (...args) => callOperation("custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}">)),
    CustomTextToSpeechPersonalVoicesDelete: (...args) => callOperation("custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}">)),
    CustomTextToSpeechPersonalVoicesGet: (...args) => callOperation("custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}">)),
    CustomTextToSpeechPersonalVoicesList: (...args) => callOperation("custom-text-to-speech:PersonalVoices_List:/personalvoices", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:PersonalVoices_List:/personalvoices">)),
    CustomTextToSpeechPersonalVoicesPost: (...args) => callOperation("custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}">)),
  };
}
