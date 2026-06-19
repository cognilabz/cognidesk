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
export const AppStoreFullApiAppEventScreenshotsOperationKeys = [
  "appEventScreenshots_createInstance",
  "appEventScreenshots_deleteInstance",
  "appEventScreenshots_getInstance",
  "appEventScreenshots_updateInstance"
] as const;
export type AppStoreFullApiAppEventScreenshotsOperationKey = typeof AppStoreFullApiAppEventScreenshotsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppEventScreenshotsOperationPathParamMap {
  "appEventScreenshots_createInstance": {};
  "appEventScreenshots_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appEventScreenshots_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appEventScreenshots_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppEventScreenshotsOperationRequestMap {
  "appEventScreenshots_createInstance": AppStoreFullApiOperationInput<"appEventScreenshots_createInstance">;
  "appEventScreenshots_deleteInstance": AppStoreFullApiOperationInput<"appEventScreenshots_deleteInstance">;
  "appEventScreenshots_getInstance": AppStoreFullApiOperationInput<"appEventScreenshots_getInstance">;
  "appEventScreenshots_updateInstance": AppStoreFullApiOperationInput<"appEventScreenshots_updateInstance">;
}

export interface AppStoreFullApiAppEventScreenshotsGeneratedClient {
  AppEventScreenshotsCreateInstance(...args: AppStoreFullApiOperationArgs<"appEventScreenshots_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appEventScreenshots_createInstance"]>;
  AppEventScreenshotsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appEventScreenshots_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appEventScreenshots_deleteInstance"]>;
  AppEventScreenshotsGetInstance(...args: AppStoreFullApiOperationArgs<"appEventScreenshots_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appEventScreenshots_getInstance"]>;
  AppEventScreenshotsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appEventScreenshots_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appEventScreenshots_updateInstance"]>;
}

export const AppStoreFullApiAppEventScreenshotsGeneratedFunctionNames = [
  "AppEventScreenshotsCreateInstance",
  "AppEventScreenshotsDeleteInstance",
  "AppEventScreenshotsGetInstance",
  "AppEventScreenshotsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppEventScreenshotsGeneratedClient)[];

export function createAppStoreFullApiAppEventScreenshotsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppEventScreenshotsGeneratedClient {
  return {
    AppEventScreenshotsCreateInstance: (...args) => callOperation("appEventScreenshots_createInstance", ...(args as AppStoreFullApiOperationArgs<"appEventScreenshots_createInstance">)),
    AppEventScreenshotsDeleteInstance: (...args) => callOperation("appEventScreenshots_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appEventScreenshots_deleteInstance">)),
    AppEventScreenshotsGetInstance: (...args) => callOperation("appEventScreenshots_getInstance", ...(args as AppStoreFullApiOperationArgs<"appEventScreenshots_getInstance">)),
    AppEventScreenshotsUpdateInstance: (...args) => callOperation("appEventScreenshots_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appEventScreenshots_updateInstance">)),
  };
}
