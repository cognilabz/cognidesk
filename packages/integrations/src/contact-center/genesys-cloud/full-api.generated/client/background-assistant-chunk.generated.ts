// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiBackgroundAssistantOperationKeys = [
  "postScreenrecordingToken"
] as const;
export type GenesysCloudFullApiBackgroundAssistantOperationKey = typeof GenesysCloudFullApiBackgroundAssistantOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiBackgroundAssistantOperationPathParamMap {
  "postScreenrecordingToken": {};
}

export interface GenesysCloudFullApiBackgroundAssistantOperationRequestMap {
  "postScreenrecordingToken": GenesysCloudFullApiOperationInput<"postScreenrecordingToken">;
}

export interface GenesysCloudFullApiBackgroundAssistantGeneratedClient {
  PostScreenrecordingToken(...args: GenesysCloudFullApiOperationArgs<"postScreenrecordingToken">): Promise<GenesysCloudFullApiOperationResponseMap["postScreenrecordingToken"]>;
}

export const GenesysCloudFullApiBackgroundAssistantGeneratedFunctionNames = [
  "PostScreenrecordingToken"
] as const satisfies readonly (keyof GenesysCloudFullApiBackgroundAssistantGeneratedClient)[];

export function createGenesysCloudFullApiBackgroundAssistantGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiBackgroundAssistantGeneratedClient {
  return {
    PostScreenrecordingToken: (...args) => callOperation("postScreenrecordingToken", ...(args as GenesysCloudFullApiOperationArgs<"postScreenrecordingToken">)),
  };
}
