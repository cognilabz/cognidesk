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
export const AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesOperationKeys = [
  "inAppPurchaseOfferCodeOneTimeUseCodes_createInstance",
  "inAppPurchaseOfferCodeOneTimeUseCodes_getInstance",
  "inAppPurchaseOfferCodeOneTimeUseCodes_updateInstance",
  "inAppPurchaseOfferCodeOneTimeUseCodes_values_getToOneRelated"
] as const;
export type AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesOperationKey = typeof AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesOperationPathParamMap {
  "inAppPurchaseOfferCodeOneTimeUseCodes_createInstance": {};
  "inAppPurchaseOfferCodeOneTimeUseCodes_getInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseOfferCodeOneTimeUseCodes_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseOfferCodeOneTimeUseCodes_values_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesOperationRequestMap {
  "inAppPurchaseOfferCodeOneTimeUseCodes_createInstance": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodeOneTimeUseCodes_createInstance">;
  "inAppPurchaseOfferCodeOneTimeUseCodes_getInstance": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodeOneTimeUseCodes_getInstance">;
  "inAppPurchaseOfferCodeOneTimeUseCodes_updateInstance": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodeOneTimeUseCodes_updateInstance">;
  "inAppPurchaseOfferCodeOneTimeUseCodes_values_getToOneRelated": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodeOneTimeUseCodes_values_getToOneRelated">;
}

export interface AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesGeneratedClient {
  InAppPurchaseOfferCodeOneTimeUseCodesCreateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeOneTimeUseCodes_createInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodeOneTimeUseCodes_createInstance"]>;
  InAppPurchaseOfferCodeOneTimeUseCodesGetInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeOneTimeUseCodes_getInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodeOneTimeUseCodes_getInstance"]>;
  InAppPurchaseOfferCodeOneTimeUseCodesUpdateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeOneTimeUseCodes_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodeOneTimeUseCodes_updateInstance"]>;
  InAppPurchaseOfferCodeOneTimeUseCodesValuesGetToOneRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeOneTimeUseCodes_values_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodeOneTimeUseCodes_values_getToOneRelated"]>;
}

export const AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesGeneratedFunctionNames = [
  "InAppPurchaseOfferCodeOneTimeUseCodesCreateInstance",
  "InAppPurchaseOfferCodeOneTimeUseCodesGetInstance",
  "InAppPurchaseOfferCodeOneTimeUseCodesUpdateInstance",
  "InAppPurchaseOfferCodeOneTimeUseCodesValuesGetToOneRelated"
] as const satisfies readonly (keyof AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesGeneratedClient)[];

export function createAppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiInAppPurchaseOfferCodeOneTimeUseCodesGeneratedClient {
  return {
    InAppPurchaseOfferCodeOneTimeUseCodesCreateInstance: (...args) => callOperation("inAppPurchaseOfferCodeOneTimeUseCodes_createInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeOneTimeUseCodes_createInstance">)),
    InAppPurchaseOfferCodeOneTimeUseCodesGetInstance: (...args) => callOperation("inAppPurchaseOfferCodeOneTimeUseCodes_getInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeOneTimeUseCodes_getInstance">)),
    InAppPurchaseOfferCodeOneTimeUseCodesUpdateInstance: (...args) => callOperation("inAppPurchaseOfferCodeOneTimeUseCodes_updateInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeOneTimeUseCodes_updateInstance">)),
    InAppPurchaseOfferCodeOneTimeUseCodesValuesGetToOneRelated: (...args) => callOperation("inAppPurchaseOfferCodeOneTimeUseCodes_values_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodeOneTimeUseCodes_values_getToOneRelated">)),
  };
}
