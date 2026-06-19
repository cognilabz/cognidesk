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
export const AppStoreFullApiCustomerReviewsOperationKeys = [
  "customerReviews_getInstance",
  "customerReviews_response_getToOneRelated",
  "customerReviews_response_getToOneRelationship"
] as const;
export type AppStoreFullApiCustomerReviewsOperationKey = typeof AppStoreFullApiCustomerReviewsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiCustomerReviewsOperationPathParamMap {
  "customerReviews_getInstance": { "id": AppStoreFullApiPathParamValue };
  "customerReviews_response_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "customerReviews_response_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiCustomerReviewsOperationRequestMap {
  "customerReviews_getInstance": AppStoreFullApiOperationInput<"customerReviews_getInstance">;
  "customerReviews_response_getToOneRelated": AppStoreFullApiOperationInput<"customerReviews_response_getToOneRelated">;
  "customerReviews_response_getToOneRelationship": AppStoreFullApiOperationInput<"customerReviews_response_getToOneRelationship">;
}

export interface AppStoreFullApiCustomerReviewsGeneratedClient {
  CustomerReviewsGetInstance(...args: AppStoreFullApiOperationArgs<"customerReviews_getInstance">): Promise<AppStoreFullApiOperationResponseMap["customerReviews_getInstance"]>;
  CustomerReviewsResponseGetToOneRelated(...args: AppStoreFullApiOperationArgs<"customerReviews_response_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["customerReviews_response_getToOneRelated"]>;
  CustomerReviewsResponseGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"customerReviews_response_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["customerReviews_response_getToOneRelationship"]>;
}

export const AppStoreFullApiCustomerReviewsGeneratedFunctionNames = [
  "CustomerReviewsGetInstance",
  "CustomerReviewsResponseGetToOneRelated",
  "CustomerReviewsResponseGetToOneRelationship"
] as const satisfies readonly (keyof AppStoreFullApiCustomerReviewsGeneratedClient)[];

export function createAppStoreFullApiCustomerReviewsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiCustomerReviewsGeneratedClient {
  return {
    CustomerReviewsGetInstance: (...args) => callOperation("customerReviews_getInstance", ...(args as AppStoreFullApiOperationArgs<"customerReviews_getInstance">)),
    CustomerReviewsResponseGetToOneRelated: (...args) => callOperation("customerReviews_response_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"customerReviews_response_getToOneRelated">)),
    CustomerReviewsResponseGetToOneRelationship: (...args) => callOperation("customerReviews_response_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"customerReviews_response_getToOneRelationship">)),
  };
}
