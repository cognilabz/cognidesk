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
export const AppStoreFullApiReviewSubmissionsOperationKeys = [
  "reviewSubmissions_createInstance",
  "reviewSubmissions_getCollection",
  "reviewSubmissions_getInstance",
  "reviewSubmissions_items_getToManyRelated",
  "reviewSubmissions_items_getToManyRelationship",
  "reviewSubmissions_updateInstance"
] as const;
export type AppStoreFullApiReviewSubmissionsOperationKey = typeof AppStoreFullApiReviewSubmissionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiReviewSubmissionsOperationPathParamMap {
  "reviewSubmissions_createInstance": {};
  "reviewSubmissions_getCollection": {};
  "reviewSubmissions_getInstance": { "id": AppStoreFullApiPathParamValue };
  "reviewSubmissions_items_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "reviewSubmissions_items_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "reviewSubmissions_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiReviewSubmissionsOperationRequestMap {
  "reviewSubmissions_createInstance": AppStoreFullApiOperationInput<"reviewSubmissions_createInstance">;
  "reviewSubmissions_getCollection": AppStoreFullApiOperationInput<"reviewSubmissions_getCollection">;
  "reviewSubmissions_getInstance": AppStoreFullApiOperationInput<"reviewSubmissions_getInstance">;
  "reviewSubmissions_items_getToManyRelated": AppStoreFullApiOperationInput<"reviewSubmissions_items_getToManyRelated">;
  "reviewSubmissions_items_getToManyRelationship": AppStoreFullApiOperationInput<"reviewSubmissions_items_getToManyRelationship">;
  "reviewSubmissions_updateInstance": AppStoreFullApiOperationInput<"reviewSubmissions_updateInstance">;
}

export interface AppStoreFullApiReviewSubmissionsGeneratedClient {
  ReviewSubmissionsCreateInstance(...args: AppStoreFullApiOperationArgs<"reviewSubmissions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["reviewSubmissions_createInstance"]>;
  ReviewSubmissionsGetCollection(...args: AppStoreFullApiOperationArgs<"reviewSubmissions_getCollection">): Promise<AppStoreFullApiOperationResponseMap["reviewSubmissions_getCollection"]>;
  ReviewSubmissionsGetInstance(...args: AppStoreFullApiOperationArgs<"reviewSubmissions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["reviewSubmissions_getInstance"]>;
  ReviewSubmissionsItemsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"reviewSubmissions_items_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["reviewSubmissions_items_getToManyRelated"]>;
  ReviewSubmissionsItemsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"reviewSubmissions_items_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["reviewSubmissions_items_getToManyRelationship"]>;
  ReviewSubmissionsUpdateInstance(...args: AppStoreFullApiOperationArgs<"reviewSubmissions_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["reviewSubmissions_updateInstance"]>;
}

export const AppStoreFullApiReviewSubmissionsGeneratedFunctionNames = [
  "ReviewSubmissionsCreateInstance",
  "ReviewSubmissionsGetCollection",
  "ReviewSubmissionsGetInstance",
  "ReviewSubmissionsItemsGetToManyRelated",
  "ReviewSubmissionsItemsGetToManyRelationship",
  "ReviewSubmissionsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiReviewSubmissionsGeneratedClient)[];

export function createAppStoreFullApiReviewSubmissionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiReviewSubmissionsGeneratedClient {
  return {
    ReviewSubmissionsCreateInstance: (...args) => callOperation("reviewSubmissions_createInstance", ...(args as AppStoreFullApiOperationArgs<"reviewSubmissions_createInstance">)),
    ReviewSubmissionsGetCollection: (...args) => callOperation("reviewSubmissions_getCollection", ...(args as AppStoreFullApiOperationArgs<"reviewSubmissions_getCollection">)),
    ReviewSubmissionsGetInstance: (...args) => callOperation("reviewSubmissions_getInstance", ...(args as AppStoreFullApiOperationArgs<"reviewSubmissions_getInstance">)),
    ReviewSubmissionsItemsGetToManyRelated: (...args) => callOperation("reviewSubmissions_items_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"reviewSubmissions_items_getToManyRelated">)),
    ReviewSubmissionsItemsGetToManyRelationship: (...args) => callOperation("reviewSubmissions_items_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"reviewSubmissions_items_getToManyRelationship">)),
    ReviewSubmissionsUpdateInstance: (...args) => callOperation("reviewSubmissions_updateInstance", ...(args as AppStoreFullApiOperationArgs<"reviewSubmissions_updateInstance">)),
  };
}
