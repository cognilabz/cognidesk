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
export const AppStoreFullApiAndroidToIosAppMappingDetailsOperationKeys = [
  "androidToIosAppMappingDetails_createInstance",
  "androidToIosAppMappingDetails_deleteInstance",
  "androidToIosAppMappingDetails_getInstance",
  "androidToIosAppMappingDetails_updateInstance"
] as const;
export type AppStoreFullApiAndroidToIosAppMappingDetailsOperationKey = typeof AppStoreFullApiAndroidToIosAppMappingDetailsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAndroidToIosAppMappingDetailsOperationPathParamMap {
  "androidToIosAppMappingDetails_createInstance": {};
  "androidToIosAppMappingDetails_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "androidToIosAppMappingDetails_getInstance": { "id": AppStoreFullApiPathParamValue };
  "androidToIosAppMappingDetails_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAndroidToIosAppMappingDetailsOperationRequestMap {
  "androidToIosAppMappingDetails_createInstance": AppStoreFullApiOperationInput<"androidToIosAppMappingDetails_createInstance">;
  "androidToIosAppMappingDetails_deleteInstance": AppStoreFullApiOperationInput<"androidToIosAppMappingDetails_deleteInstance">;
  "androidToIosAppMappingDetails_getInstance": AppStoreFullApiOperationInput<"androidToIosAppMappingDetails_getInstance">;
  "androidToIosAppMappingDetails_updateInstance": AppStoreFullApiOperationInput<"androidToIosAppMappingDetails_updateInstance">;
}

export interface AppStoreFullApiAndroidToIosAppMappingDetailsGeneratedClient {
  AndroidToIosAppMappingDetailsCreateInstance(...args: AppStoreFullApiOperationArgs<"androidToIosAppMappingDetails_createInstance">): Promise<AppStoreFullApiOperationResponseMap["androidToIosAppMappingDetails_createInstance"]>;
  AndroidToIosAppMappingDetailsDeleteInstance(...args: AppStoreFullApiOperationArgs<"androidToIosAppMappingDetails_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["androidToIosAppMappingDetails_deleteInstance"]>;
  AndroidToIosAppMappingDetailsGetInstance(...args: AppStoreFullApiOperationArgs<"androidToIosAppMappingDetails_getInstance">): Promise<AppStoreFullApiOperationResponseMap["androidToIosAppMappingDetails_getInstance"]>;
  AndroidToIosAppMappingDetailsUpdateInstance(...args: AppStoreFullApiOperationArgs<"androidToIosAppMappingDetails_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["androidToIosAppMappingDetails_updateInstance"]>;
}

export const AppStoreFullApiAndroidToIosAppMappingDetailsGeneratedFunctionNames = [
  "AndroidToIosAppMappingDetailsCreateInstance",
  "AndroidToIosAppMappingDetailsDeleteInstance",
  "AndroidToIosAppMappingDetailsGetInstance",
  "AndroidToIosAppMappingDetailsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAndroidToIosAppMappingDetailsGeneratedClient)[];

export function createAppStoreFullApiAndroidToIosAppMappingDetailsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAndroidToIosAppMappingDetailsGeneratedClient {
  return {
    AndroidToIosAppMappingDetailsCreateInstance: (...args) => callOperation("androidToIosAppMappingDetails_createInstance", ...(args as AppStoreFullApiOperationArgs<"androidToIosAppMappingDetails_createInstance">)),
    AndroidToIosAppMappingDetailsDeleteInstance: (...args) => callOperation("androidToIosAppMappingDetails_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"androidToIosAppMappingDetails_deleteInstance">)),
    AndroidToIosAppMappingDetailsGetInstance: (...args) => callOperation("androidToIosAppMappingDetails_getInstance", ...(args as AppStoreFullApiOperationArgs<"androidToIosAppMappingDetails_getInstance">)),
    AndroidToIosAppMappingDetailsUpdateInstance: (...args) => callOperation("androidToIosAppMappingDetails_updateInstance", ...(args as AppStoreFullApiOperationArgs<"androidToIosAppMappingDetails_updateInstance">)),
  };
}
