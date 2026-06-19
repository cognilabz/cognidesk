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
export const AppStoreFullApiAppStoreVersionReleaseRequestsOperationKeys = [
  "appStoreVersionReleaseRequests_createInstance"
] as const;
export type AppStoreFullApiAppStoreVersionReleaseRequestsOperationKey = typeof AppStoreFullApiAppStoreVersionReleaseRequestsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppStoreVersionReleaseRequestsOperationPathParamMap {
  "appStoreVersionReleaseRequests_createInstance": {};
}

export interface AppStoreFullApiAppStoreVersionReleaseRequestsOperationRequestMap {
  "appStoreVersionReleaseRequests_createInstance": AppStoreFullApiOperationInput<"appStoreVersionReleaseRequests_createInstance">;
}

export interface AppStoreFullApiAppStoreVersionReleaseRequestsGeneratedClient {
  AppStoreVersionReleaseRequestsCreateInstance(...args: AppStoreFullApiOperationArgs<"appStoreVersionReleaseRequests_createInstance">): Promise<AppStoreFullApiOperationResponseMap["appStoreVersionReleaseRequests_createInstance"]>;
}

export const AppStoreFullApiAppStoreVersionReleaseRequestsGeneratedFunctionNames = [
  "AppStoreVersionReleaseRequestsCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppStoreVersionReleaseRequestsGeneratedClient)[];

export function createAppStoreFullApiAppStoreVersionReleaseRequestsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppStoreVersionReleaseRequestsGeneratedClient {
  return {
    AppStoreVersionReleaseRequestsCreateInstance: (...args) => callOperation("appStoreVersionReleaseRequests_createInstance", ...(args as AppStoreFullApiOperationArgs<"appStoreVersionReleaseRequests_createInstance">)),
  };
}
