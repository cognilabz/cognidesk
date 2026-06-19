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
export const GenesysCloudFullApiGeneralDataProtectionRegulationOperationKeys = [
  "getGdprRequest",
  "getGdprRequests",
  "getGdprSubjects",
  "postGdprRequests"
] as const;
export type GenesysCloudFullApiGeneralDataProtectionRegulationOperationKey = typeof GenesysCloudFullApiGeneralDataProtectionRegulationOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiGeneralDataProtectionRegulationOperationPathParamMap {
  "getGdprRequest": { "requestId": GenesysCloudFullApiPathParamValue };
  "getGdprRequests": {};
  "getGdprSubjects": {};
  "postGdprRequests": {};
}

export interface GenesysCloudFullApiGeneralDataProtectionRegulationOperationRequestMap {
  "getGdprRequest": GenesysCloudFullApiOperationInput<"getGdprRequest">;
  "getGdprRequests": GenesysCloudFullApiOperationInput<"getGdprRequests">;
  "getGdprSubjects": GenesysCloudFullApiOperationInput<"getGdprSubjects">;
  "postGdprRequests": GenesysCloudFullApiOperationInput<"postGdprRequests">;
}

export interface GenesysCloudFullApiGeneralDataProtectionRegulationGeneratedClient {
  GetGdprRequest(...args: GenesysCloudFullApiOperationArgs<"getGdprRequest">): Promise<GenesysCloudFullApiOperationResponseMap["getGdprRequest"]>;
  GetGdprRequests(...args: GenesysCloudFullApiOperationArgs<"getGdprRequests">): Promise<GenesysCloudFullApiOperationResponseMap["getGdprRequests"]>;
  GetGdprSubjects(...args: GenesysCloudFullApiOperationArgs<"getGdprSubjects">): Promise<GenesysCloudFullApiOperationResponseMap["getGdprSubjects"]>;
  PostGdprRequests(...args: GenesysCloudFullApiOperationArgs<"postGdprRequests">): Promise<GenesysCloudFullApiOperationResponseMap["postGdprRequests"]>;
}

export const GenesysCloudFullApiGeneralDataProtectionRegulationGeneratedFunctionNames = [
  "GetGdprRequest",
  "GetGdprRequests",
  "GetGdprSubjects",
  "PostGdprRequests"
] as const satisfies readonly (keyof GenesysCloudFullApiGeneralDataProtectionRegulationGeneratedClient)[];

export function createGenesysCloudFullApiGeneralDataProtectionRegulationGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiGeneralDataProtectionRegulationGeneratedClient {
  return {
    GetGdprRequest: (...args) => callOperation("getGdprRequest", ...(args as GenesysCloudFullApiOperationArgs<"getGdprRequest">)),
    GetGdprRequests: (...args) => callOperation("getGdprRequests", ...(args as GenesysCloudFullApiOperationArgs<"getGdprRequests">)),
    GetGdprSubjects: (...args) => callOperation("getGdprSubjects", ...(args as GenesysCloudFullApiOperationArgs<"getGdprSubjects">)),
    PostGdprRequests: (...args) => callOperation("postGdprRequests", ...(args as GenesysCloudFullApiOperationArgs<"postGdprRequests">)),
  };
}
