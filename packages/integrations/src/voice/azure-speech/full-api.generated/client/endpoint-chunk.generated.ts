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
export const AzureSpeechFullApiEndpointOperationKeys = [
  "custom-text-to-speech:Endpoints_Create:/endpoints/{id}",
  "custom-text-to-speech:Endpoints_Delete:/endpoints/{id}",
  "custom-text-to-speech:Endpoints_Get:/endpoints/{id}",
  "custom-text-to-speech:Endpoints_List:/endpoints",
  "custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume",
  "custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend"
] as const;
export type AzureSpeechFullApiEndpointOperationKey = typeof AzureSpeechFullApiEndpointOperationKeys[number];
// End hardened literal operation keys.

export interface AzureSpeechFullApiEndpointOperationPathParamMap {
  "custom-text-to-speech:Endpoints_Create:/endpoints/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Endpoints_Delete:/endpoints/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Endpoints_Get:/endpoints/{id}": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Endpoints_List:/endpoints": {};
  "custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume": { "id": AzureSpeechFullApiPathParamValue };
  "custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend": { "id": AzureSpeechFullApiPathParamValue };
}

export interface AzureSpeechFullApiEndpointOperationRequestMap {
  "custom-text-to-speech:Endpoints_Create:/endpoints/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Endpoints_Create:/endpoints/{id}">;
  "custom-text-to-speech:Endpoints_Delete:/endpoints/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Endpoints_Delete:/endpoints/{id}">;
  "custom-text-to-speech:Endpoints_Get:/endpoints/{id}": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Endpoints_Get:/endpoints/{id}">;
  "custom-text-to-speech:Endpoints_List:/endpoints": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Endpoints_List:/endpoints">;
  "custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume">;
  "custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend": AzureSpeechFullApiOperationInput<"custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend">;
}

export interface AzureSpeechFullApiEndpointGeneratedClient {
  CustomTextToSpeechEndpointsCreate(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Endpoints_Create:/endpoints/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Endpoints_Create:/endpoints/{id}"]>;
  CustomTextToSpeechEndpointsDelete(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Endpoints_Delete:/endpoints/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Endpoints_Delete:/endpoints/{id}"]>;
  CustomTextToSpeechEndpointsGet(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Endpoints_Get:/endpoints/{id}">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Endpoints_Get:/endpoints/{id}"]>;
  CustomTextToSpeechEndpointsList(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Endpoints_List:/endpoints">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Endpoints_List:/endpoints"]>;
  CustomTextToSpeechEndpointsResume(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume"]>;
  CustomTextToSpeechEndpointsSuspend(...args: AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend">): Promise<AzureSpeechFullApiOperationResponseMap["custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend"]>;
}

export const AzureSpeechFullApiEndpointGeneratedFunctionNames = [
  "CustomTextToSpeechEndpointsCreate",
  "CustomTextToSpeechEndpointsDelete",
  "CustomTextToSpeechEndpointsGet",
  "CustomTextToSpeechEndpointsList",
  "CustomTextToSpeechEndpointsResume",
  "CustomTextToSpeechEndpointsSuspend"
] as const satisfies readonly (keyof AzureSpeechFullApiEndpointGeneratedClient)[];

export function createAzureSpeechFullApiEndpointGeneratedClient(
  callOperation: AzureSpeechGeneratedOperationCaller,
): AzureSpeechFullApiEndpointGeneratedClient {
  return {
    CustomTextToSpeechEndpointsCreate: (...args) => callOperation("custom-text-to-speech:Endpoints_Create:/endpoints/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Endpoints_Create:/endpoints/{id}">)),
    CustomTextToSpeechEndpointsDelete: (...args) => callOperation("custom-text-to-speech:Endpoints_Delete:/endpoints/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Endpoints_Delete:/endpoints/{id}">)),
    CustomTextToSpeechEndpointsGet: (...args) => callOperation("custom-text-to-speech:Endpoints_Get:/endpoints/{id}", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Endpoints_Get:/endpoints/{id}">)),
    CustomTextToSpeechEndpointsList: (...args) => callOperation("custom-text-to-speech:Endpoints_List:/endpoints", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Endpoints_List:/endpoints">)),
    CustomTextToSpeechEndpointsResume: (...args) => callOperation("custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume">)),
    CustomTextToSpeechEndpointsSuspend: (...args) => callOperation("custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend", ...(args as AzureSpeechFullApiOperationArgs<"custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend">)),
  };
}
