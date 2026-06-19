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
export const AppStoreFullApiInAppPurchaseContentsOperationKeys = [
  "inAppPurchaseContents_getInstance"
] as const;
export type AppStoreFullApiInAppPurchaseContentsOperationKey = typeof AppStoreFullApiInAppPurchaseContentsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiInAppPurchaseContentsOperationPathParamMap {
  "inAppPurchaseContents_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiInAppPurchaseContentsOperationRequestMap {
  "inAppPurchaseContents_getInstance": AppStoreFullApiOperationInput<"inAppPurchaseContents_getInstance">;
}

export interface AppStoreFullApiInAppPurchaseContentsGeneratedClient {
  InAppPurchaseContentsGetInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseContents_getInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseContents_getInstance"]>;
}

export const AppStoreFullApiInAppPurchaseContentsGeneratedFunctionNames = [
  "InAppPurchaseContentsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiInAppPurchaseContentsGeneratedClient)[];

export function createAppStoreFullApiInAppPurchaseContentsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiInAppPurchaseContentsGeneratedClient {
  return {
    InAppPurchaseContentsGetInstance: (...args) => callOperation("inAppPurchaseContents_getInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseContents_getInstance">)),
  };
}
