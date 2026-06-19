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
export const AppStoreFullApiAppStoreVersionSubmissionsOperationKeys = [
  "appStoreVersionSubmissions_deleteInstance"
] as const;
export type AppStoreFullApiAppStoreVersionSubmissionsOperationKey = typeof AppStoreFullApiAppStoreVersionSubmissionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppStoreVersionSubmissionsOperationPathParamMap {
  "appStoreVersionSubmissions_deleteInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppStoreVersionSubmissionsOperationRequestMap {
  "appStoreVersionSubmissions_deleteInstance": AppStoreFullApiOperationInput<"appStoreVersionSubmissions_deleteInstance">;
}

export interface AppStoreFullApiAppStoreVersionSubmissionsGeneratedClient {
  AppStoreVersionSubmissionsDeleteInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionSubmissions_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionSubmissions_deleteInstance"]>;
}

export const AppStoreFullApiAppStoreVersionSubmissionsGeneratedFunctionNames = [
  "AppStoreVersionSubmissionsDeleteInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppStoreVersionSubmissionsGeneratedClient)[];

export function createAppStoreFullApiAppStoreVersionSubmissionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppStoreVersionSubmissionsGeneratedClient {
  return {
    AppStoreVersionSubmissionsDeleteInstance: (...args) => callOperation("appStoreVersionSubmissions_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionSubmissions_deleteInstance">)),
  };
}
