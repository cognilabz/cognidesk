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
export const AppStoreFullApiReviewSubmissionItemsOperationKeys = [
  "reviewSubmissionItems_createInstance",
  "reviewSubmissionItems_deleteInstance",
  "reviewSubmissionItems_updateInstance"
] as const;
export type AppStoreFullApiReviewSubmissionItemsOperationKey = typeof AppStoreFullApiReviewSubmissionItemsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiReviewSubmissionItemsOperationPathParamMap {
  "reviewSubmissionItems_createInstance": {};
  "reviewSubmissionItems_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "reviewSubmissionItems_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiReviewSubmissionItemsOperationRequestMap {
  "reviewSubmissionItems_createInstance": AppStoreFullApiOperationInput<"reviewSubmissionItems_createInstance">;
  "reviewSubmissionItems_deleteInstance": AppStoreFullApiOperationInput<"reviewSubmissionItems_deleteInstance">;
  "reviewSubmissionItems_updateInstance": AppStoreFullApiOperationInput<"reviewSubmissionItems_updateInstance">;
}

export interface AppStoreFullApiReviewSubmissionItemsGeneratedClient {
  ReviewSubmissionItemsCreateInstance(...args: AppStoreFullApiOperationArgs<"reviewSubmissionItems_createInstance">): Promise<AppStoreFullApiOperationResponseMap["reviewSubmissionItems_createInstance"]>;
  ReviewSubmissionItemsDeleteInstance(...args: AppStoreFullApiOperationArgs<"reviewSubmissionItems_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["reviewSubmissionItems_deleteInstance"]>;
  ReviewSubmissionItemsUpdateInstance(...args: AppStoreFullApiOperationArgs<"reviewSubmissionItems_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["reviewSubmissionItems_updateInstance"]>;
}

export const AppStoreFullApiReviewSubmissionItemsGeneratedFunctionNames = [
  "ReviewSubmissionItemsCreateInstance",
  "ReviewSubmissionItemsDeleteInstance",
  "ReviewSubmissionItemsUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiReviewSubmissionItemsGeneratedClient)[];

export function createAppStoreFullApiReviewSubmissionItemsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiReviewSubmissionItemsGeneratedClient {
  return {
    ReviewSubmissionItemsCreateInstance: (...args) => callOperation("reviewSubmissionItems_createInstance", ...(args as AppStoreFullApiOperationArgs<"reviewSubmissionItems_createInstance">)),
    ReviewSubmissionItemsDeleteInstance: (...args) => callOperation("reviewSubmissionItems_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"reviewSubmissionItems_deleteInstance">)),
    ReviewSubmissionItemsUpdateInstance: (...args) => callOperation("reviewSubmissionItems_updateInstance", ...(args as AppStoreFullApiOperationArgs<"reviewSubmissionItems_updateInstance">)),
  };
}
