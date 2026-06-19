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
export const GenesysCloudFullApiGeolocationOperationKeys = [
  "getGeolocationsSettings",
  "getUserGeolocation",
  "patchGeolocationsSettings",
  "patchUserGeolocation"
] as const;
export type GenesysCloudFullApiGeolocationOperationKey = typeof GenesysCloudFullApiGeolocationOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiGeolocationOperationPathParamMap {
  "getGeolocationsSettings": {};
  "getUserGeolocation": { "userId": GenesysCloudFullApiPathParamValue; "clientId": GenesysCloudFullApiPathParamValue };
  "patchGeolocationsSettings": {};
  "patchUserGeolocation": { "userId": GenesysCloudFullApiPathParamValue; "clientId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiGeolocationOperationRequestMap {
  "getGeolocationsSettings": GenesysCloudFullApiOperationInput<"getGeolocationsSettings">;
  "getUserGeolocation": GenesysCloudFullApiOperationInput<"getUserGeolocation">;
  "patchGeolocationsSettings": GenesysCloudFullApiOperationInput<"patchGeolocationsSettings">;
  "patchUserGeolocation": GenesysCloudFullApiOperationInput<"patchUserGeolocation">;
}

export interface GenesysCloudFullApiGeolocationGeneratedClient {
  GetGeolocationsSettings(...args: GenesysCloudFullApiOperationArgs<"getGeolocationsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getGeolocationsSettings"]>;
  GetUserGeolocation(...args: GenesysCloudFullApiOperationArgs<"getUserGeolocation">): Promise<GenesysCloudFullApiOperationResponseMap["getUserGeolocation"]>;
  PatchGeolocationsSettings(...args: GenesysCloudFullApiOperationArgs<"patchGeolocationsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchGeolocationsSettings"]>;
  PatchUserGeolocation(...args: GenesysCloudFullApiOperationArgs<"patchUserGeolocation">): Promise<GenesysCloudFullApiOperationResponseMap["patchUserGeolocation"]>;
}

export const GenesysCloudFullApiGeolocationGeneratedFunctionNames = [
  "GetGeolocationsSettings",
  "GetUserGeolocation",
  "PatchGeolocationsSettings",
  "PatchUserGeolocation"
] as const satisfies readonly (keyof GenesysCloudFullApiGeolocationGeneratedClient)[];

export function createGenesysCloudFullApiGeolocationGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiGeolocationGeneratedClient {
  return {
    GetGeolocationsSettings: (...args) => callOperation("getGeolocationsSettings", ...(args as GenesysCloudFullApiOperationArgs<"getGeolocationsSettings">)),
    GetUserGeolocation: (...args) => callOperation("getUserGeolocation", ...(args as GenesysCloudFullApiOperationArgs<"getUserGeolocation">)),
    PatchGeolocationsSettings: (...args) => callOperation("patchGeolocationsSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchGeolocationsSettings">)),
    PatchUserGeolocation: (...args) => callOperation("patchUserGeolocation", ...(args as GenesysCloudFullApiOperationArgs<"patchUserGeolocation">)),
  };
}
