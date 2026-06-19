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
export const AppStoreFullApiInAppPurchasePricePointsOperationKeys = [
  "inAppPurchasePricePoints_equalizations_getToManyRelated",
  "inAppPurchasePricePoints_equalizations_getToManyRelationship"
] as const;
export type AppStoreFullApiInAppPurchasePricePointsOperationKey = typeof AppStoreFullApiInAppPurchasePricePointsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiInAppPurchasePricePointsOperationPathParamMap {
  "inAppPurchasePricePoints_equalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasePricePoints_equalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiInAppPurchasePricePointsOperationRequestMap {
  "inAppPurchasePricePoints_equalizations_getToManyRelated": AppStoreFullApiOperationInput<"inAppPurchasePricePoints_equalizations_getToManyRelated">;
  "inAppPurchasePricePoints_equalizations_getToManyRelationship": AppStoreFullApiOperationInput<"inAppPurchasePricePoints_equalizations_getToManyRelationship">;
}

export interface AppStoreFullApiInAppPurchasePricePointsGeneratedClient {
  InAppPurchasePricePointsEqualizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasePricePoints_equalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasePricePoints_equalizations_getToManyRelated"]>;
  InAppPurchasePricePointsEqualizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasePricePoints_equalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasePricePoints_equalizations_getToManyRelationship"]>;
}

export const AppStoreFullApiInAppPurchasePricePointsGeneratedFunctionNames = [
  "InAppPurchasePricePointsEqualizationsGetToManyRelated",
  "InAppPurchasePricePointsEqualizationsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiInAppPurchasePricePointsGeneratedClient)[];

export function createAppStoreFullApiInAppPurchasePricePointsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiInAppPurchasePricePointsGeneratedClient {
  return {
    InAppPurchasePricePointsEqualizationsGetToManyRelated: (...args) => callOperation("inAppPurchasePricePoints_equalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasePricePoints_equalizations_getToManyRelated">)),
    InAppPurchasePricePointsEqualizationsGetToManyRelationship: (...args) => callOperation("inAppPurchasePricePoints_equalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasePricePoints_equalizations_getToManyRelationship">)),
  };
}
