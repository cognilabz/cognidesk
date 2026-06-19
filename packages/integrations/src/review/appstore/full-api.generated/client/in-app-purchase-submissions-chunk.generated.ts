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
export const AppStoreFullApiInAppPurchaseSubmissionsOperationKeys = [
  "inAppPurchaseSubmissions_createInstance"
] as const;
export type AppStoreFullApiInAppPurchaseSubmissionsOperationKey = typeof AppStoreFullApiInAppPurchaseSubmissionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiInAppPurchaseSubmissionsOperationPathParamMap {
  "inAppPurchaseSubmissions_createInstance": {};
}

export interface AppStoreFullApiInAppPurchaseSubmissionsOperationRequestMap {
  "inAppPurchaseSubmissions_createInstance": AppStoreFullApiOperationInput<"inAppPurchaseSubmissions_createInstance">;
}

export interface AppStoreFullApiInAppPurchaseSubmissionsGeneratedClient {
  InAppPurchaseSubmissionsCreateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseSubmissions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseSubmissions_createInstance"]>;
}

export const AppStoreFullApiInAppPurchaseSubmissionsGeneratedFunctionNames = [
  "InAppPurchaseSubmissionsCreateInstance"
] as const satisfies readonly (keyof AppStoreFullApiInAppPurchaseSubmissionsGeneratedClient)[];

export function createAppStoreFullApiInAppPurchaseSubmissionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiInAppPurchaseSubmissionsGeneratedClient {
  return {
    InAppPurchaseSubmissionsCreateInstance: (...args) => callOperation("inAppPurchaseSubmissions_createInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseSubmissions_createInstance">)),
  };
}
