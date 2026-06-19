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
export const AppStoreFullApiAppScreenshotsOperationKeys = [
  "appScreenshots_createInstance",
  "appScreenshots_deleteInstance",
  "appScreenshots_getInstance",
  "appScreenshots_updateInstance"
] as const;
export type AppStoreFullApiAppScreenshotsOperationKey = typeof AppStoreFullApiAppScreenshotsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppScreenshotsOperationPathParamMap {
  "appScreenshots_createInstance": {};
  "appScreenshots_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "appScreenshots_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appScreenshots_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppScreenshotsOperationRequestMap {
  "appScreenshots_createInstance": AppStoreFullApiOperationInput<"appScreenshots_createInstance">;
  "appScreenshots_deleteInstance": AppStoreFullApiOperationInput<"appScreenshots_deleteInstance">;
  "appScreenshots_getInstance": AppStoreFullApiOperationInput<"appScreenshots_getInstance">;
  "appScreenshots_updateInstance": AppStoreFullApiOperationInput<"appScreenshots_updateInstance">;
}

export interface AppStoreFullApiAppScreenshotsGeneratedClient {
  AppScreenshotsCreateInstance(...args: AppStoreFullApiOperationArgs<"appScreenshots_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appScreenshots_createInstance"]>;
  AppScreenshotsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appScreenshots_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appScreenshots_deleteInstance"]>;
  AppScreenshotsGetInstance(...args: AppStoreFullApiOperationArgs<"appScreenshots_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appScreenshots_getInstance"]>;
  AppScreenshotsUpdateInstance(...args: AppStoreFullApiOperationArgs<"appScreenshots_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appScreenshots_updateInstance"]>;
}

export const AppStoreFullApiAppScreenshotsGeneratedFunctionNames = [
  "AppScreenshotsCreateInstance",
  "AppScreenshotsDeleteInstance",
  "AppScreenshotsGetInstance",
  "AppScreenshotsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppScreenshotsGeneratedClient)[];

export function createAppStoreFullApiAppScreenshotsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppScreenshotsGeneratedClient {
  return {
    AppScreenshotsCreateInstance: (...args) => callOperation("appScreenshots_createInstance", ...(args as AppStoreFullApiOperationArgs<"appScreenshots_createInstance">)),
    AppScreenshotsDeleteInstance: (...args) => callOperation("appScreenshots_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appScreenshots_deleteInstance">)),
    AppScreenshotsGetInstance: (...args) => callOperation("appScreenshots_getInstance", ...(args as AppStoreFullApiOperationArgs<"appScreenshots_getInstance">)),
    AppScreenshotsUpdateInstance: (...args) => callOperation("appScreenshots_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appScreenshots_updateInstance">)),
  };
}
