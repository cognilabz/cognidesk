// Generated endpoint chunk for AppStoreFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AppStoreGeneratedOperationCaller,
  AppStoreFullApiOperationArgs,
  AppStoreFullApiOperationInput,
  AppStoreFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AppStoreFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AppStoreFullApiDevicesOperationKeys = [
  "devices_createInstance",
  "devices_getCollection",
  "devices_getInstance",
  "devices_updateInstance"
] as const;
export type AppStoreFullApiDevicesOperationKey = typeof AppStoreFullApiDevicesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiDevicesOperationPathParamMap {
  "devices_createInstance": {};
  "devices_getCollection": {};
  "devices_getInstance": { "id": AppStoreFullApiPathParamValue };
  "devices_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiDevicesOperationRequestMap {
  "devices_createInstance": AppStoreFullApiOperationInput<"devices_createInstance">;
  "devices_getCollection": AppStoreFullApiOperationInput<"devices_getCollection">;
  "devices_getInstance": AppStoreFullApiOperationInput<"devices_getInstance">;
  "devices_updateInstance": AppStoreFullApiOperationInput<"devices_updateInstance">;
}

export interface AppStoreFullApiDevicesGeneratedClient {
  DevicesCreateInstance(...args: AppStoreFullApiOperationArgs<"devices_createInstance">): Promise<AppStoreFullApiOperationResponseMap["devices_createInstance"]>;
  DevicesGetCollection(...args: AppStoreFullApiOperationArgs<"devices_getCollection">): Promise<AppStoreFullApiOperationResponseMap["devices_getCollection"]>;
  DevicesGetInstance(...args: AppStoreFullApiOperationArgs<"devices_getInstance">): Promise<AppStoreFullApiOperationResponseMap["devices_getInstance"]>;
  DevicesUpdateInstance(...args: AppStoreFullApiOperationArgs<"devices_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["devices_updateInstance"]>;
}

export const AppStoreFullApiDevicesGeneratedFunctionNames = [
  "DevicesCreateInstance",
  "DevicesGetCollection",
  "DevicesGetInstance",
  "DevicesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiDevicesGeneratedClient)[];

export function createAppStoreFullApiDevicesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiDevicesGeneratedClient {
  return {
    DevicesCreateInstance: (...args) => callOperation("devices_createInstance", ...(args as AppStoreFullApiOperationArgs<"devices_createInstance">)),
    DevicesGetCollection: (...args) => callOperation("devices_getCollection", ...(args as AppStoreFullApiOperationArgs<"devices_getCollection">)),
    DevicesGetInstance: (...args) => callOperation("devices_getInstance", ...(args as AppStoreFullApiOperationArgs<"devices_getInstance">)),
    DevicesUpdateInstance: (...args) => callOperation("devices_updateInstance", ...(args as AppStoreFullApiOperationArgs<"devices_updateInstance">)),
  };
}
