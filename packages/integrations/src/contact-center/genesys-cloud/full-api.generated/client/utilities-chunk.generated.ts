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
export const GenesysCloudFullApiUtilitiesOperationKeys = [
  "getDate",
  "getIpranges",
  "getTimezones",
  "postCertificateDetails"
] as const;
export type GenesysCloudFullApiUtilitiesOperationKey = typeof GenesysCloudFullApiUtilitiesOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiUtilitiesOperationPathParamMap {
  "getDate": {};
  "getIpranges": {};
  "getTimezones": {};
  "postCertificateDetails": {};
}

export interface GenesysCloudFullApiUtilitiesOperationRequestMap {
  "getDate": GenesysCloudFullApiOperationInput<"getDate">;
  "getIpranges": GenesysCloudFullApiOperationInput<"getIpranges">;
  "getTimezones": GenesysCloudFullApiOperationInput<"getTimezones">;
  "postCertificateDetails": GenesysCloudFullApiOperationInput<"postCertificateDetails">;
}

export interface GenesysCloudFullApiUtilitiesGeneratedClient {
  GetDate(...args: GenesysCloudFullApiOperationArgs<"getDate">): Promise<GenesysCloudFullApiOperationResponseMap["getDate"]>;
  GetIpranges(...args: GenesysCloudFullApiOperationArgs<"getIpranges">): Promise<GenesysCloudFullApiOperationResponseMap["getIpranges"]>;
  GetTimezones(...args: GenesysCloudFullApiOperationArgs<"getTimezones">): Promise<GenesysCloudFullApiOperationResponseMap["getTimezones"]>;
  PostCertificateDetails(...args: GenesysCloudFullApiOperationArgs<"postCertificateDetails">): Promise<GenesysCloudFullApiOperationResponseMap["postCertificateDetails"]>;
}

export const GenesysCloudFullApiUtilitiesGeneratedFunctionNames = [
  "GetDate",
  "GetIpranges",
  "GetTimezones",
  "PostCertificateDetails"
] as const satisfies readonly (keyof GenesysCloudFullApiUtilitiesGeneratedClient)[];

export function createGenesysCloudFullApiUtilitiesGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiUtilitiesGeneratedClient {
  return {
    GetDate: (...args) => callOperation("getDate", ...(args as GenesysCloudFullApiOperationArgs<"getDate">)),
    GetIpranges: (...args) => callOperation("getIpranges", ...(args as GenesysCloudFullApiOperationArgs<"getIpranges">)),
    GetTimezones: (...args) => callOperation("getTimezones", ...(args as GenesysCloudFullApiOperationArgs<"getTimezones">)),
    PostCertificateDetails: (...args) => callOperation("postCertificateDetails", ...(args as GenesysCloudFullApiOperationArgs<"postCertificateDetails">)),
  };
}
