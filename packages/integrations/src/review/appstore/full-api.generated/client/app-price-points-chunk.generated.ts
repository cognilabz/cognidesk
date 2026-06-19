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
export const AppStoreFullApiAppPricePointsOperationKeys = [
  "appPricePointsV3_equalizations_getToManyRelated",
  "appPricePointsV3_equalizations_getToManyRelationship",
  "appPricePointsV3_getInstance"
] as const;
export type AppStoreFullApiAppPricePointsOperationKey = typeof AppStoreFullApiAppPricePointsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppPricePointsOperationPathParamMap {
  "appPricePointsV3_equalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appPricePointsV3_equalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appPricePointsV3_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppPricePointsOperationRequestMap {
  "appPricePointsV3_equalizations_getToManyRelated": AppStoreFullApiOperationInput<"appPricePointsV3_equalizations_getToManyRelated">;
  "appPricePointsV3_equalizations_getToManyRelationship": AppStoreFullApiOperationInput<"appPricePointsV3_equalizations_getToManyRelationship">;
  "appPricePointsV3_getInstance": AppStoreFullApiOperationInput<"appPricePointsV3_getInstance">;
}

export interface AppStoreFullApiAppPricePointsGeneratedClient {
  AppPricePointsV3EqualizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appPricePointsV3_equalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appPricePointsV3_equalizations_getToManyRelated"]>;
  AppPricePointsV3EqualizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appPricePointsV3_equalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appPricePointsV3_equalizations_getToManyRelationship"]>;
  AppPricePointsV3GetInstance(...args: AppStoreFullApiOperationArgs<"appPricePointsV3_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appPricePointsV3_getInstance"]>;
}

export const AppStoreFullApiAppPricePointsGeneratedFunctionNames = [
  "AppPricePointsV3EqualizationsGetToManyRelated",
  "AppPricePointsV3EqualizationsGetToManyRelationship",
  "AppPricePointsV3GetInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppPricePointsGeneratedClient)[];

export function createAppStoreFullApiAppPricePointsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppPricePointsGeneratedClient {
  return {
    AppPricePointsV3EqualizationsGetToManyRelated: (...args) => callOperation("appPricePointsV3_equalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appPricePointsV3_equalizations_getToManyRelated">)),
    AppPricePointsV3EqualizationsGetToManyRelationship: (...args) => callOperation("appPricePointsV3_equalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appPricePointsV3_equalizations_getToManyRelationship">)),
    AppPricePointsV3GetInstance: (...args) => callOperation("appPricePointsV3_getInstance", ...(args as AppStoreFullApiOperationArgs<"appPricePointsV3_getInstance">)),
  };
}
