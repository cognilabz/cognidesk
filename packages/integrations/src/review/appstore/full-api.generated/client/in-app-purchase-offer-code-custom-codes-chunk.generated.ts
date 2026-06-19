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
export const AppStoreFullApiInAppPurchaseOfferCodeCustomCodesOperationKeys = [
  "inAppPurchaseOfferCodeCustomCodes_createInstance",
  "inAppPurchaseOfferCodeCustomCodes_getInstance",
  "inAppPurchaseOfferCodeCustomCodes_updateInstance"
] as const;
export type AppStoreFullApiInAppPurchaseOfferCodeCustomCodesOperationKey = typeof AppStoreFullApiInAppPurchaseOfferCodeCustomCodesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiInAppPurchaseOfferCodeCustomCodesOperationPathParamMap {
  "inAppPurchaseOfferCodeCustomCodes_createInstance": {};
  "inAppPurchaseOfferCodeCustomCodes_getInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseOfferCodeCustomCodes_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiInAppPurchaseOfferCodeCustomCodesOperationRequestMap {
  "inAppPurchaseOfferCodeCustomCodes_createInstance": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodeCustomCodes_createInstance">;
  "inAppPurchaseOfferCodeCustomCodes_getInstance": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodeCustomCodes_getInstance">;
  "inAppPurchaseOfferCodeCustomCodes_updateInstance": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodeCustomCodes_updateInstance">;
}

export interface AppStoreFullApiInAppPurchaseOfferCodeCustomCodesGeneratedClient {
  InAppPurchaseOfferCodeCustomCodesCreateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeCustomCodes_createInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodeCustomCodes_createInstance"]>;
  InAppPurchaseOfferCodeCustomCodesGetInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeCustomCodes_getInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodeCustomCodes_getInstance"]>;
  InAppPurchaseOfferCodeCustomCodesUpdateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeCustomCodes_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodeCustomCodes_updateInstance"]>;
}

export const AppStoreFullApiInAppPurchaseOfferCodeCustomCodesGeneratedFunctionNames = [
  "InAppPurchaseOfferCodeCustomCodesCreateInstance",
  "InAppPurchaseOfferCodeCustomCodesGetInstance",
  "InAppPurchaseOfferCodeCustomCodesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiInAppPurchaseOfferCodeCustomCodesGeneratedClient)[];

export function createAppStoreFullApiInAppPurchaseOfferCodeCustomCodesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiInAppPurchaseOfferCodeCustomCodesGeneratedClient {
  return {
    InAppPurchaseOfferCodeCustomCodesCreateInstance: (...args) => callOperation("inAppPurchaseOfferCodeCustomCodes_createInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeCustomCodes_createInstance">)),
    InAppPurchaseOfferCodeCustomCodesGetInstance: (...args) => callOperation("inAppPurchaseOfferCodeCustomCodes_getInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeCustomCodes_getInstance">)),
    InAppPurchaseOfferCodeCustomCodesUpdateInstance: (...args) => callOperation("inAppPurchaseOfferCodeCustomCodes_updateInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeCustomCodes_updateInstance">)),
  };
}
