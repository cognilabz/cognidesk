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
export const GenesysCloudFullApiStationsOperationKeys = [
  "deleteStationAssociateduser",
  "getStation",
  "getStations"
] as const;
export type GenesysCloudFullApiStationsOperationKey = typeof GenesysCloudFullApiStationsOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiStationsOperationPathParamMap {
  "deleteStationAssociateduser": { "stationId": GenesysCloudFullApiPathParamValue };
  "getStation": { "stationId": GenesysCloudFullApiPathParamValue };
  "getStations": {};
}

export interface GenesysCloudFullApiStationsOperationRequestMap {
  "deleteStationAssociateduser": GenesysCloudFullApiOperationInput<"deleteStationAssociateduser">;
  "getStation": GenesysCloudFullApiOperationInput<"getStation">;
  "getStations": GenesysCloudFullApiOperationInput<"getStations">;
}

export interface GenesysCloudFullApiStationsGeneratedClient {
  DeleteStationAssociateduser(...args: GenesysCloudFullApiOperationArgs<"deleteStationAssociateduser">): Promise<GenesysCloudFullApiOperationResponseMap["deleteStationAssociateduser"]>;
  GetStation(...args: GenesysCloudFullApiOperationArgs<"getStation">): Promise<GenesysCloudFullApiOperationResponseMap["getStation"]>;
  GetStations(...args: GenesysCloudFullApiOperationArgs<"getStations">): Promise<GenesysCloudFullApiOperationResponseMap["getStations"]>;
}

export const GenesysCloudFullApiStationsGeneratedFunctionNames = [
  "DeleteStationAssociateduser",
  "GetStation",
  "GetStations"
] as const satisfies readonly (keyof GenesysCloudFullApiStationsGeneratedClient)[];

export function createGenesysCloudFullApiStationsGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiStationsGeneratedClient {
  return {
    DeleteStationAssociateduser: (...args) => callOperation("deleteStationAssociateduser", ...(args as GenesysCloudFullApiOperationArgs<"deleteStationAssociateduser">)),
    GetStation: (...args) => callOperation("getStation", ...(args as GenesysCloudFullApiOperationArgs<"getStation">)),
    GetStations: (...args) => callOperation("getStations", ...(args as GenesysCloudFullApiOperationArgs<"getStations">)),
  };
}
