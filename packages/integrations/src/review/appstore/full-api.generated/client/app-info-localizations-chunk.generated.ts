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
export const AppStoreFullApiAppInfoLocalizationsOperationKeys = [
  "appInfoLocalizations_createInstance",
  "appInfoLocalizations_deleteInstance",
  "appInfoLocalizations_getInstance",
  "appInfoLocalizations_updateInstance"
] as const;
export type AppStoreFullApiAppInfoLocalizationsOperationKey = typeof AppStoreFullApiAppInfoLocalizationsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppInfoLocalizationsOperationPathParamMap {
  "appInfoLocalizations_createInstance": {};
  "appInfoLocalizations_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appInfoLocalizations_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appInfoLocalizations_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppInfoLocalizationsOperationRequestMap {
  "appInfoLocalizations_createInstance": AppStoreFullApiOperationInput<"appInfoLocalizations_createInstance">;
  "appInfoLocalizations_deleteInstance": AppStoreFullApiOperationInput<"appInfoLocalizations_deleteInstance">;
  "appInfoLocalizations_getInstance": AppStoreFullApiOperationInput<"appInfoLocalizations_getInstance">;
  "appInfoLocalizations_updateInstance": AppStoreFullApiOperationInput<"appInfoLocalizations_updateInstance">;
}

export interface AppStoreFullApiAppInfoLocalizationsGeneratedClient {
  AppInfoLocalizationsCreateInstance(...args: AppStoreFullApiOperationArgs<"appInfoLocalizations_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appInfoLocalizations_createInstance"]>;
  AppInfoLocalizationsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appInfoLocalizations_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appInfoLocalizations_deleteInstance"]>;
  AppInfoLocalizationsGetInstance(...args: AppStoreFullApiOperationArgs<"appInfoLocalizations_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appInfoLocalizations_getInstance"]>;
  AppInfoLocalizationsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appInfoLocalizations_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appInfoLocalizations_updateInstance"]>;
}

export const AppStoreFullApiAppInfoLocalizationsGeneratedFunctionNames = [
  "AppInfoLocalizationsCreateInstance",
  "AppInfoLocalizationsDeleteInstance",
  "AppInfoLocalizationsGetInstance",
  "AppInfoLocalizationsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppInfoLocalizationsGeneratedClient)[];

export function createAppStoreFullApiAppInfoLocalizationsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppInfoLocalizationsGeneratedClient {
  return {
    AppInfoLocalizationsCreateInstance: (...args) => callOperation("appInfoLocalizations_createInstance", ...(args as AppStoreFullApiOperationArgs<"appInfoLocalizations_createInstance">)),
    AppInfoLocalizationsDeleteInstance: (...args) => callOperation("appInfoLocalizations_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appInfoLocalizations_deleteInstance">)),
    AppInfoLocalizationsGetInstance: (...args) => callOperation("appInfoLocalizations_getInstance", ...(args as AppStoreFullApiOperationArgs<"appInfoLocalizations_getInstance">)),
    AppInfoLocalizationsUpdateInstance: (...args) => callOperation("appInfoLocalizations_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appInfoLocalizations_updateInstance">)),
  };
}
