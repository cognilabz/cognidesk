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
export const AppStoreFullApiInAppPurchaseOfferCodesOperationKeys = [
  "inAppPurchaseOfferCodes_createInstance",
  "inAppPurchaseOfferCodes_customCodes_getToManyRelated",
  "inAppPurchaseOfferCodes_customCodes_getToManyRelationship",
  "inAppPurchaseOfferCodes_getInstance",
  "inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelated",
  "inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelationship",
  "inAppPurchaseOfferCodes_prices_getToManyRelated",
  "inAppPurchaseOfferCodes_prices_getToManyRelationship",
  "inAppPurchaseOfferCodes_updateInstance"
] as const;
export type AppStoreFullApiInAppPurchaseOfferCodesOperationKey = typeof AppStoreFullApiInAppPurchaseOfferCodesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiInAppPurchaseOfferCodesOperationPathParamMap {
  "inAppPurchaseOfferCodes_createInstance": {};
  "inAppPurchaseOfferCodes_customCodes_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseOfferCodes_customCodes_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseOfferCodes_getInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseOfferCodes_prices_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseOfferCodes_prices_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchaseOfferCodes_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiInAppPurchaseOfferCodesOperationRequestMap {
  "inAppPurchaseOfferCodes_createInstance": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodes_createInstance">;
  "inAppPurchaseOfferCodes_customCodes_getToManyRelated": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodes_customCodes_getToManyRelated">;
  "inAppPurchaseOfferCodes_customCodes_getToManyRelationship": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodes_customCodes_getToManyRelationship">;
  "inAppPurchaseOfferCodes_getInstance": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodes_getInstance">;
  "inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelated": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelated">;
  "inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelationship": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelationship">;
  "inAppPurchaseOfferCodes_prices_getToManyRelated": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodes_prices_getToManyRelated">;
  "inAppPurchaseOfferCodes_prices_getToManyRelationship": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodes_prices_getToManyRelationship">;
  "inAppPurchaseOfferCodes_updateInstance": AppStoreFullApiOperationInput<"inAppPurchaseOfferCodes_updateInstance">;
}

export interface AppStoreFullApiInAppPurchaseOfferCodesGeneratedClient {
  InAppPurchaseOfferCodesCreateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_createInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodes_createInstance"]>;
  InAppPurchaseOfferCodesCustomCodesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_customCodes_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodes_customCodes_getToManyRelated"]>;
  InAppPurchaseOfferCodesCustomCodesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_customCodes_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodes_customCodes_getToManyRelationship"]>;
  InAppPurchaseOfferCodesGetInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_getInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodes_getInstance"]>;
  InAppPurchaseOfferCodesOneTimeUseCodesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelated"]>;
  InAppPurchaseOfferCodesOneTimeUseCodesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelationship"]>;
  InAppPurchaseOfferCodesPricesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_prices_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodes_prices_getToManyRelated"]>;
  InAppPurchaseOfferCodesPricesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_prices_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodes_prices_getToManyRelationship"]>;
  InAppPurchaseOfferCodesUpdateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchaseOfferCodes_updateInstance"]>;
}

export const AppStoreFullApiInAppPurchaseOfferCodesGeneratedFunctionNames = [
  "InAppPurchaseOfferCodesCreateInstance",
  "InAppPurchaseOfferCodesCustomCodesGetToManyRelated",
  "InAppPurchaseOfferCodesCustomCodesGetToManyRelationship",
  "InAppPurchaseOfferCodesGetInstance",
  "InAppPurchaseOfferCodesOneTimeUseCodesGetToManyRelated",
  "InAppPurchaseOfferCodesOneTimeUseCodesGetToManyRelationship",
  "InAppPurchaseOfferCodesPricesGetToManyRelated",
  "InAppPurchaseOfferCodesPricesGetToManyRelationship",
  "InAppPurchaseOfferCodesUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiInAppPurchaseOfferCodesGeneratedClient)[];

export function createAppStoreFullApiInAppPurchaseOfferCodesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiInAppPurchaseOfferCodesGeneratedClient {
  return {
    InAppPurchaseOfferCodesCreateInstance: (...args) => callOperation("inAppPurchaseOfferCodes_createInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_createInstance">)),
    InAppPurchaseOfferCodesCustomCodesGetToManyRelated: (...args) => callOperation("inAppPurchaseOfferCodes_customCodes_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_customCodes_getToManyRelated">)),
    InAppPurchaseOfferCodesCustomCodesGetToManyRelationship: (...args) => callOperation("inAppPurchaseOfferCodes_customCodes_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_customCodes_getToManyRelationship">)),
    InAppPurchaseOfferCodesGetInstance: (...args) => callOperation("inAppPurchaseOfferCodes_getInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_getInstance">)),
    InAppPurchaseOfferCodesOneTimeUseCodesGetToManyRelated: (...args) => callOperation("inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelated">)),
    InAppPurchaseOfferCodesOneTimeUseCodesGetToManyRelationship: (...args) => callOperation("inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_oneTimeUseCodes_getToManyRelationship">)),
    InAppPurchaseOfferCodesPricesGetToManyRelated: (...args) => callOperation("inAppPurchaseOfferCodes_prices_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_prices_getToManyRelated">)),
    InAppPurchaseOfferCodesPricesGetToManyRelationship: (...args) => callOperation("inAppPurchaseOfferCodes_prices_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_prices_getToManyRelationship">)),
    InAppPurchaseOfferCodesUpdateInstance: (...args) => callOperation("inAppPurchaseOfferCodes_updateInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchaseOfferCodes_updateInstance">)),
  };
}
