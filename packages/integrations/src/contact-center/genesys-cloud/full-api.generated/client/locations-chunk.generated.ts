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
export const GenesysCloudFullApiLocationsOperationKeys = [
  "deleteLocation",
  "getLocation",
  "getLocations",
  "getLocationsSearch",
  "getLocationSublocations",
  "patchLocation",
  "postLocations",
  "postLocationsSearch"
] as const;
export type GenesysCloudFullApiLocationsOperationKey = typeof GenesysCloudFullApiLocationsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiLocationsOperationPathParamMap {
  "deleteLocation": { "locationId": GenesysCloudFullApiPathParamValue };
  "getLocation": { "locationId": GenesysCloudFullApiPathParamValue };
  "getLocations": {};
  "getLocationsSearch": {};
  "getLocationSublocations": { "locationId": GenesysCloudFullApiPathParamValue };
  "patchLocation": { "locationId": GenesysCloudFullApiPathParamValue };
  "postLocations": {};
  "postLocationsSearch": {};
}

export interface GenesysCloudFullApiLocationsOperationRequestMap {
  "deleteLocation": GenesysCloudFullApiOperationInput<"deleteLocation">;
  "getLocation": GenesysCloudFullApiOperationInput<"getLocation">;
  "getLocations": GenesysCloudFullApiOperationInput<"getLocations">;
  "getLocationsSearch": GenesysCloudFullApiOperationInput<"getLocationsSearch">;
  "getLocationSublocations": GenesysCloudFullApiOperationInput<"getLocationSublocations">;
  "patchLocation": GenesysCloudFullApiOperationInput<"patchLocation">;
  "postLocations": GenesysCloudFullApiOperationInput<"postLocations">;
  "postLocationsSearch": GenesysCloudFullApiOperationInput<"postLocationsSearch">;
}

export interface GenesysCloudFullApiLocationsGeneratedClient {
  DeleteLocation(...args: GenesysCloudFullApiOperationArgs<"deleteLocation">): Promise<GenesysCloudFullApiOperationResponseMap["deleteLocation"]>;
  GetLocation(...args: GenesysCloudFullApiOperationArgs<"getLocation">): Promise<GenesysCloudFullApiOperationResponseMap["getLocation"]>;
  GetLocations(...args: GenesysCloudFullApiOperationArgs<"getLocations">): Promise<GenesysCloudFullApiOperationResponseMap["getLocations"]>;
  GetLocationsSearch(...args: GenesysCloudFullApiOperationArgs<"getLocationsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["getLocationsSearch"]>;
  GetLocationSublocations(...args: GenesysCloudFullApiOperationArgs<"getLocationSublocations">): Promise<GenesysCloudFullApiOperationResponseMap["getLocationSublocations"]>;
  PatchLocation(...args: GenesysCloudFullApiOperationArgs<"patchLocation">): Promise<GenesysCloudFullApiOperationResponseMap["patchLocation"]>;
  PostLocations(...args: GenesysCloudFullApiOperationArgs<"postLocations">): Promise<GenesysCloudFullApiOperationResponseMap["postLocations"]>;
  PostLocationsSearch(...args: GenesysCloudFullApiOperationArgs<"postLocationsSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postLocationsSearch"]>;
}

export const GenesysCloudFullApiLocationsGeneratedFunctionNames = [
  "DeleteLocation",
  "GetLocation",
  "GetLocations",
  "GetLocationsSearch",
  "GetLocationSublocations",
  "PatchLocation",
  "PostLocations",
  "PostLocationsSearch"
] as const satisfies readonly (keyof GenesysCloudFullApiLocationsGeneratedClient)[];

export function createGenesysCloudFullApiLocationsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiLocationsGeneratedClient {
  return {
    DeleteLocation: (...args) => callOperation("deleteLocation", ...(args as GenesysCloudFullApiOperationArgs<"deleteLocation">)),
    GetLocation: (...args) => callOperation("getLocation", ...(args as GenesysCloudFullApiOperationArgs<"getLocation">)),
    GetLocations: (...args) => callOperation("getLocations", ...(args as GenesysCloudFullApiOperationArgs<"getLocations">)),
    GetLocationsSearch: (...args) => callOperation("getLocationsSearch", ...(args as GenesysCloudFullApiOperationArgs<"getLocationsSearch">)),
    GetLocationSublocations: (...args) => callOperation("getLocationSublocations", ...(args as GenesysCloudFullApiOperationArgs<"getLocationSublocations">)),
    PatchLocation: (...args) => callOperation("patchLocation", ...(args as GenesysCloudFullApiOperationArgs<"patchLocation">)),
    PostLocations: (...args) => callOperation("postLocations", ...(args as GenesysCloudFullApiOperationArgs<"postLocations">)),
    PostLocationsSearch: (...args) => callOperation("postLocationsSearch", ...(args as GenesysCloudFullApiOperationArgs<"postLocationsSearch">)),
  };
}
