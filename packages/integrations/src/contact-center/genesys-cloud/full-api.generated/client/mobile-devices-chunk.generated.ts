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
export const GenesysCloudFullApiMobileDevicesOperationKeys = [
  "deleteMobiledevice",
  "getMobiledevice",
  "getMobiledevices",
  "postMobiledevices",
  "putMobiledevice"
] as const;
export type GenesysCloudFullApiMobileDevicesOperationKey = typeof GenesysCloudFullApiMobileDevicesOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiMobileDevicesOperationPathParamMap {
  "deleteMobiledevice": { "deviceId": GenesysCloudFullApiPathParamValue };
  "getMobiledevice": { "deviceId": GenesysCloudFullApiPathParamValue };
  "getMobiledevices": {};
  "postMobiledevices": {};
  "putMobiledevice": { "deviceId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiMobileDevicesOperationRequestMap {
  "deleteMobiledevice": GenesysCloudFullApiOperationInput<"deleteMobiledevice">;
  "getMobiledevice": GenesysCloudFullApiOperationInput<"getMobiledevice">;
  "getMobiledevices": GenesysCloudFullApiOperationInput<"getMobiledevices">;
  "postMobiledevices": GenesysCloudFullApiOperationInput<"postMobiledevices">;
  "putMobiledevice": GenesysCloudFullApiOperationInput<"putMobiledevice">;
}

export interface GenesysCloudFullApiMobileDevicesGeneratedClient {
  DeleteMobiledevice(...args: GenesysCloudFullApiOperationArgs<"deleteMobiledevice">): Promise<GenesysCloudFullApiOperationResponseMap["deleteMobiledevice"]>;
  GetMobiledevice(...args: GenesysCloudFullApiOperationArgs<"getMobiledevice">): Promise<GenesysCloudFullApiOperationResponseMap["getMobiledevice"]>;
  GetMobiledevices(...args: GenesysCloudFullApiOperationArgs<"getMobiledevices">): Promise<GenesysCloudFullApiOperationResponseMap["getMobiledevices"]>;
  PostMobiledevices(...args: GenesysCloudFullApiOperationArgs<"postMobiledevices">): Promise<GenesysCloudFullApiOperationResponseMap["postMobiledevices"]>;
  PutMobiledevice(...args: GenesysCloudFullApiOperationArgs<"putMobiledevice">): Promise<GenesysCloudFullApiOperationResponseMap["putMobiledevice"]>;
}

export const GenesysCloudFullApiMobileDevicesGeneratedFunctionNames = [
  "DeleteMobiledevice",
  "GetMobiledevice",
  "GetMobiledevices",
  "PostMobiledevices",
  "PutMobiledevice"
] as const satisfies readonly (keyof GenesysCloudFullApiMobileDevicesGeneratedClient)[];

export function createGenesysCloudFullApiMobileDevicesGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiMobileDevicesGeneratedClient {
  return {
    DeleteMobiledevice: (...args) => callOperation("deleteMobiledevice", ...(args as GenesysCloudFullApiOperationArgs<"deleteMobiledevice">)),
    GetMobiledevice: (...args) => callOperation("getMobiledevice", ...(args as GenesysCloudFullApiOperationArgs<"getMobiledevice">)),
    GetMobiledevices: (...args) => callOperation("getMobiledevices", ...(args as GenesysCloudFullApiOperationArgs<"getMobiledevices">)),
    PostMobiledevices: (...args) => callOperation("postMobiledevices", ...(args as GenesysCloudFullApiOperationArgs<"postMobiledevices">)),
    PutMobiledevice: (...args) => callOperation("putMobiledevice", ...(args as GenesysCloudFullApiOperationArgs<"putMobiledevice">)),
  };
}
