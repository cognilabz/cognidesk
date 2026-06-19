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
export const AppStoreFullApiBetaAppReviewDetailsOperationKeys = [
  "betaAppReviewDetails_app_getToOneRelated",
  "betaAppReviewDetails_app_getToOneRelationship",
  "betaAppReviewDetails_getCollection",
  "betaAppReviewDetails_getInstance",
  "betaAppReviewDetails_updateInstance"
] as const;
export type AppStoreFullApiBetaAppReviewDetailsOperationKey = typeof AppStoreFullApiBetaAppReviewDetailsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaAppReviewDetailsOperationPathParamMap {
  "betaAppReviewDetails_app_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "betaAppReviewDetails_app_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaAppReviewDetails_getCollection": {};
  "betaAppReviewDetails_getInstance": { "id": AppStoreFullApiPathParamValue };
  "betaAppReviewDetails_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaAppReviewDetailsOperationRequestMap {
  "betaAppReviewDetails_app_getToOneRelated": AppStoreFullApiOperationInput<"betaAppReviewDetails_app_getToOneRelated">;
  "betaAppReviewDetails_app_getToOneRelationship": AppStoreFullApiOperationInput<"betaAppReviewDetails_app_getToOneRelationship">;
  "betaAppReviewDetails_getCollection": AppStoreFullApiOperationInput<"betaAppReviewDetails_getCollection">;
  "betaAppReviewDetails_getInstance": AppStoreFullApiOperationInput<"betaAppReviewDetails_getInstance">;
  "betaAppReviewDetails_updateInstance": AppStoreFullApiOperationInput<"betaAppReviewDetails_updateInstance">;
}

export interface AppStoreFullApiBetaAppReviewDetailsGeneratedClient {
  BetaAppReviewDetailsAppGetToOneRelated(...args: AppStoreFullApiOperationArgs<"betaAppReviewDetails_app_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["betaAppReviewDetails_app_getToOneRelated"]>;
  BetaAppReviewDetailsAppGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"betaAppReviewDetails_app_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaAppReviewDetails_app_getToOneRelationship"]>;
  BetaAppReviewDetailsGetCollection(...args: AppStoreFullApiOperationArgs<"betaAppReviewDetails_getCollection">): Promise<AppStoreFullApiOperationResponseMap["betaAppReviewDetails_getCollection"]>;
  BetaAppReviewDetailsGetInstance(...args: AppStoreFullApiOperationArgs<"betaAppReviewDetails_getInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppReviewDetails_getInstance"]>;
  BetaAppReviewDetailsUpdateInstance(...args: AppStoreFullApiOperationArgs<"betaAppReviewDetails_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppReviewDetails_updateInstance"]>;
}

export const AppStoreFullApiBetaAppReviewDetailsGeneratedFunctionNames = [
  "BetaAppReviewDetailsAppGetToOneRelated",
  "BetaAppReviewDetailsAppGetToOneRelationship",
  "BetaAppReviewDetailsGetCollection",
  "BetaAppReviewDetailsGetInstance",
  "BetaAppReviewDetailsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaAppReviewDetailsGeneratedClient)[];

export function createAppStoreFullApiBetaAppReviewDetailsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaAppReviewDetailsGeneratedClient {
  return {
    BetaAppReviewDetailsAppGetToOneRelated: (...args) => callOperation("betaAppReviewDetails_app_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"betaAppReviewDetails_app_getToOneRelated">)),
    BetaAppReviewDetailsAppGetToOneRelationship: (...args) => callOperation("betaAppReviewDetails_app_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"betaAppReviewDetails_app_getToOneRelationship">)),
    BetaAppReviewDetailsGetCollection: (...args) => callOperation("betaAppReviewDetails_getCollection", ...(args as AppStoreFullApiOperationArgs<"betaAppReviewDetails_getCollection">)),
    BetaAppReviewDetailsGetInstance: (...args) => callOperation("betaAppReviewDetails_getInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppReviewDetails_getInstance">)),
    BetaAppReviewDetailsUpdateInstance: (...args) => callOperation("betaAppReviewDetails_updateInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppReviewDetails_updateInstance">)),
  };
}
