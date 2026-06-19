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
export const AppStoreFullApiBetaAppReviewSubmissionsOperationKeys = [
  "betaAppReviewSubmissions_build_getToOneRelated",
  "betaAppReviewSubmissions_build_getToOneRelationship",
  "betaAppReviewSubmissions_createInstance",
  "betaAppReviewSubmissions_getCollection",
  "betaAppReviewSubmissions_getInstance"
] as const;
export type AppStoreFullApiBetaAppReviewSubmissionsOperationKey = typeof AppStoreFullApiBetaAppReviewSubmissionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaAppReviewSubmissionsOperationPathParamMap {
  "betaAppReviewSubmissions_build_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "betaAppReviewSubmissions_build_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaAppReviewSubmissions_createInstance": {};
  "betaAppReviewSubmissions_getCollection": {};
  "betaAppReviewSubmissions_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaAppReviewSubmissionsOperationRequestMap {
  "betaAppReviewSubmissions_build_getToOneRelated": AppStoreFullApiOperationInput<"betaAppReviewSubmissions_build_getToOneRelated">;
  "betaAppReviewSubmissions_build_getToOneRelationship": AppStoreFullApiOperationInput<"betaAppReviewSubmissions_build_getToOneRelationship">;
  "betaAppReviewSubmissions_createInstance": AppStoreFullApiOperationInput<"betaAppReviewSubmissions_createInstance">;
  "betaAppReviewSubmissions_getCollection": AppStoreFullApiOperationInput<"betaAppReviewSubmissions_getCollection">;
  "betaAppReviewSubmissions_getInstance": AppStoreFullApiOperationInput<"betaAppReviewSubmissions_getInstance">;
}

export interface AppStoreFullApiBetaAppReviewSubmissionsGeneratedClient {
  BetaAppReviewSubmissionsBuildGetToOneRelated(...args: AppStoreFullApiOperationArgs<"betaAppReviewSubmissions_build_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["betaAppReviewSubmissions_build_getToOneRelated"]>;
  BetaAppReviewSubmissionsBuildGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"betaAppReviewSubmissions_build_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaAppReviewSubmissions_build_getToOneRelationship"]>;
  BetaAppReviewSubmissionsCreateInstance(...args: AppStoreFullApiOperationArgs<"betaAppReviewSubmissions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppReviewSubmissions_createInstance"]>;
  BetaAppReviewSubmissionsGetCollection(...args: AppStoreFullApiOperationArgs<"betaAppReviewSubmissions_getCollection">): Promise<AppStoreFullApiOperationResponseMap["betaAppReviewSubmissions_getCollection"]>;
  BetaAppReviewSubmissionsGetInstance(...args: AppStoreFullApiOperationArgs<"betaAppReviewSubmissions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["betaAppReviewSubmissions_getInstance"]>;
}

export const AppStoreFullApiBetaAppReviewSubmissionsGeneratedFunctionNames = [
  "BetaAppReviewSubmissionsBuildGetToOneRelated",
  "BetaAppReviewSubmissionsBuildGetToOneRelationship",
  "BetaAppReviewSubmissionsCreateInstance",
  "BetaAppReviewSubmissionsGetCollection",
  "BetaAppReviewSubmissionsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaAppReviewSubmissionsGeneratedClient)[];

export function createAppStoreFullApiBetaAppReviewSubmissionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaAppReviewSubmissionsGeneratedClient {
  return {
    BetaAppReviewSubmissionsBuildGetToOneRelated: (...args) => callOperation("betaAppReviewSubmissions_build_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"betaAppReviewSubmissions_build_getToOneRelated">)),
    BetaAppReviewSubmissionsBuildGetToOneRelationship: (...args) => callOperation("betaAppReviewSubmissions_build_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"betaAppReviewSubmissions_build_getToOneRelationship">)),
    BetaAppReviewSubmissionsCreateInstance: (...args) => callOperation("betaAppReviewSubmissions_createInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppReviewSubmissions_createInstance">)),
    BetaAppReviewSubmissionsGetCollection: (...args) => callOperation("betaAppReviewSubmissions_getCollection", ...(args as AppStoreFullApiOperationArgs<"betaAppReviewSubmissions_getCollection">)),
    BetaAppReviewSubmissionsGetInstance: (...args) => callOperation("betaAppReviewSubmissions_getInstance", ...(args as AppStoreFullApiOperationArgs<"betaAppReviewSubmissions_getInstance">)),
  };
}
