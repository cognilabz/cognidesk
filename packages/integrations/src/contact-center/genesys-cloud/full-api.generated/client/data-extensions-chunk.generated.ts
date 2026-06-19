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
export const GenesysCloudFullApiDataExtensionsOperationKeys = [
  "getDataextensionsCoretype",
  "getDataextensionsCoretypes",
  "getDataextensionsLimits"
] as const;
export type GenesysCloudFullApiDataExtensionsOperationKey = typeof GenesysCloudFullApiDataExtensionsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiDataExtensionsOperationPathParamMap {
  "getDataextensionsCoretype": { "coretypeName": GenesysCloudFullApiPathParamValue };
  "getDataextensionsCoretypes": {};
  "getDataextensionsLimits": {};
}

export interface GenesysCloudFullApiDataExtensionsOperationRequestMap {
  "getDataextensionsCoretype": GenesysCloudFullApiOperationInput<"getDataextensionsCoretype">;
  "getDataextensionsCoretypes": GenesysCloudFullApiOperationInput<"getDataextensionsCoretypes">;
  "getDataextensionsLimits": GenesysCloudFullApiOperationInput<"getDataextensionsLimits">;
}

export interface GenesysCloudFullApiDataExtensionsGeneratedClient {
  GetDataextensionsCoretype(...args: GenesysCloudFullApiOperationArgs<"getDataextensionsCoretype">): Promise<GenesysCloudFullApiOperationResponseMap["getDataextensionsCoretype"]>;
  GetDataextensionsCoretypes(...args: GenesysCloudFullApiOperationArgs<"getDataextensionsCoretypes">): Promise<GenesysCloudFullApiOperationResponseMap["getDataextensionsCoretypes"]>;
  GetDataextensionsLimits(...args: GenesysCloudFullApiOperationArgs<"getDataextensionsLimits">): Promise<GenesysCloudFullApiOperationResponseMap["getDataextensionsLimits"]>;
}

export const GenesysCloudFullApiDataExtensionsGeneratedFunctionNames = [
  "GetDataextensionsCoretype",
  "GetDataextensionsCoretypes",
  "GetDataextensionsLimits"
] as const satisfies readonly (keyof GenesysCloudFullApiDataExtensionsGeneratedClient)[];

export function createGenesysCloudFullApiDataExtensionsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiDataExtensionsGeneratedClient {
  return {
    GetDataextensionsCoretype: (...args) => callOperation("getDataextensionsCoretype", ...(args as GenesysCloudFullApiOperationArgs<"getDataextensionsCoretype">)),
    GetDataextensionsCoretypes: (...args) => callOperation("getDataextensionsCoretypes", ...(args as GenesysCloudFullApiOperationArgs<"getDataextensionsCoretypes">)),
    GetDataextensionsLimits: (...args) => callOperation("getDataextensionsLimits", ...(args as GenesysCloudFullApiOperationArgs<"getDataextensionsLimits">)),
  };
}
