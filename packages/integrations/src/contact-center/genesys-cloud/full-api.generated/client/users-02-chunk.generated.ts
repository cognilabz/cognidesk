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
export const GenesysCloudFullApiUsers02OperationKeys = [
  "putUserVerifier"
] as const;
export type GenesysCloudFullApiUsers02OperationKey = typeof GenesysCloudFullApiUsers02OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiUsers02OperationPathParamMap {
  "putUserVerifier": { "userId": GenesysCloudFullApiPathParamValue; "verifierId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiUsers02OperationRequestMap {
  "putUserVerifier": GenesysCloudFullApiOperationInput<"putUserVerifier">;
}

export interface GenesysCloudFullApiUsers02GeneratedClient {
  PutUserVerifier(...args: GenesysCloudFullApiOperationArgs<"putUserVerifier">): Promise<GenesysCloudFullApiOperationResponseMap["putUserVerifier"]>;
}

export const GenesysCloudFullApiUsers02GeneratedFunctionNames = [
  "PutUserVerifier"
] as const satisfies readonly (keyof GenesysCloudFullApiUsers02GeneratedClient)[];

export function createGenesysCloudFullApiUsers02GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiUsers02GeneratedClient {
  return {
    PutUserVerifier: (...args) => callOperation("putUserVerifier", ...(args as GenesysCloudFullApiOperationArgs<"putUserVerifier">)),
  };
}
