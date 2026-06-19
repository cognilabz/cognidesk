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
export const GenesysCloudFullApiCarrierServicesOperationKeys = [
  "getCarrierservicesIntegrationsEmergencylocationsMe",
  "postCarrierservicesIntegrationsEmergencylocationsMe"
] as const;
export type GenesysCloudFullApiCarrierServicesOperationKey = typeof GenesysCloudFullApiCarrierServicesOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiCarrierServicesOperationPathParamMap {
  "getCarrierservicesIntegrationsEmergencylocationsMe": {};
  "postCarrierservicesIntegrationsEmergencylocationsMe": {};
}

export interface GenesysCloudFullApiCarrierServicesOperationRequestMap {
  "getCarrierservicesIntegrationsEmergencylocationsMe": GenesysCloudFullApiOperationInput<"getCarrierservicesIntegrationsEmergencylocationsMe">;
  "postCarrierservicesIntegrationsEmergencylocationsMe": GenesysCloudFullApiOperationInput<"postCarrierservicesIntegrationsEmergencylocationsMe">;
}

export interface GenesysCloudFullApiCarrierServicesGeneratedClient {
  GetCarrierservicesIntegrationsEmergencylocationsMe(...args: GenesysCloudFullApiOperationArgs<"getCarrierservicesIntegrationsEmergencylocationsMe">): Promise<GenesysCloudFullApiOperationResponseMap["getCarrierservicesIntegrationsEmergencylocationsMe"]>;
  PostCarrierservicesIntegrationsEmergencylocationsMe(...args: GenesysCloudFullApiOperationArgs<"postCarrierservicesIntegrationsEmergencylocationsMe">): Promise<GenesysCloudFullApiOperationResponseMap["postCarrierservicesIntegrationsEmergencylocationsMe"]>;
}

export const GenesysCloudFullApiCarrierServicesGeneratedFunctionNames = [
  "GetCarrierservicesIntegrationsEmergencylocationsMe",
  "PostCarrierservicesIntegrationsEmergencylocationsMe"
] as const satisfies readonly (keyof GenesysCloudFullApiCarrierServicesGeneratedClient)[];

export function createGenesysCloudFullApiCarrierServicesGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiCarrierServicesGeneratedClient {
  return {
    GetCarrierservicesIntegrationsEmergencylocationsMe: (...args) => callOperation("getCarrierservicesIntegrationsEmergencylocationsMe", ...(args as GenesysCloudFullApiOperationArgs<"getCarrierservicesIntegrationsEmergencylocationsMe">)),
    PostCarrierservicesIntegrationsEmergencylocationsMe: (...args) => callOperation("postCarrierservicesIntegrationsEmergencylocationsMe", ...(args as GenesysCloudFullApiOperationArgs<"postCarrierservicesIntegrationsEmergencylocationsMe">)),
  };
}
