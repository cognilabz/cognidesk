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
export const AppStoreFullApiBetaFeedbackCrashSubmissionsOperationKeys = [
  "betaFeedbackCrashSubmissions_crashLog_getToOneRelated",
  "betaFeedbackCrashSubmissions_crashLog_getToOneRelationship",
  "betaFeedbackCrashSubmissions_deleteInstance",
  "betaFeedbackCrashSubmissions_getInstance"
] as const;
export type AppStoreFullApiBetaFeedbackCrashSubmissionsOperationKey = typeof AppStoreFullApiBetaFeedbackCrashSubmissionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiBetaFeedbackCrashSubmissionsOperationPathParamMap {
  "betaFeedbackCrashSubmissions_crashLog_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "betaFeedbackCrashSubmissions_crashLog_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "betaFeedbackCrashSubmissions_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "betaFeedbackCrashSubmissions_getInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiBetaFeedbackCrashSubmissionsOperationRequestMap {
  "betaFeedbackCrashSubmissions_crashLog_getToOneRelated": AppStoreFullApiOperationInput<"betaFeedbackCrashSubmissions_crashLog_getToOneRelated">;
  "betaFeedbackCrashSubmissions_crashLog_getToOneRelationship": AppStoreFullApiOperationInput<"betaFeedbackCrashSubmissions_crashLog_getToOneRelationship">;
  "betaFeedbackCrashSubmissions_deleteInstance": AppStoreFullApiOperationInput<"betaFeedbackCrashSubmissions_deleteInstance">;
  "betaFeedbackCrashSubmissions_getInstance": AppStoreFullApiOperationInput<"betaFeedbackCrashSubmissions_getInstance">;
}

export interface AppStoreFullApiBetaFeedbackCrashSubmissionsGeneratedClient {
  BetaFeedbackCrashSubmissionsCrashLogGetToOneRelated(...args: AppStoreFullApiOperationArgs<"betaFeedbackCrashSubmissions_crashLog_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["betaFeedbackCrashSubmissions_crashLog_getToOneRelated"]>;
  BetaFeedbackCrashSubmissionsCrashLogGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"betaFeedbackCrashSubmissions_crashLog_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["betaFeedbackCrashSubmissions_crashLog_getToOneRelationship"]>;
  BetaFeedbackCrashSubmissionsDeleteInstance(...args: AppStoreFullApiOperationArgs<"betaFeedbackCrashSubmissions_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["betaFeedbackCrashSubmissions_deleteInstance"]>;
  BetaFeedbackCrashSubmissionsGetInstance(...args: AppStoreFullApiOperationArgs<"betaFeedbackCrashSubmissions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["betaFeedbackCrashSubmissions_getInstance"]>;
}

export const AppStoreFullApiBetaFeedbackCrashSubmissionsGeneratedFunctionNames = [
  "BetaFeedbackCrashSubmissionsCrashLogGetToOneRelated",
  "BetaFeedbackCrashSubmissionsCrashLogGetToOneRelationship",
  "BetaFeedbackCrashSubmissionsDeleteInstance",
  "BetaFeedbackCrashSubmissionsGetInstance"
] as const satisfies readonly (keyof AppStoreFullApiBetaFeedbackCrashSubmissionsGeneratedClient)[];

export function createAppStoreFullApiBetaFeedbackCrashSubmissionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiBetaFeedbackCrashSubmissionsGeneratedClient {
  return {
    BetaFeedbackCrashSubmissionsCrashLogGetToOneRelated: (...args) => callOperation("betaFeedbackCrashSubmissions_crashLog_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"betaFeedbackCrashSubmissions_crashLog_getToOneRelated">)),
    BetaFeedbackCrashSubmissionsCrashLogGetToOneRelationship: (...args) => callOperation("betaFeedbackCrashSubmissions_crashLog_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"betaFeedbackCrashSubmissions_crashLog_getToOneRelationship">)),
    BetaFeedbackCrashSubmissionsDeleteInstance: (...args) => callOperation("betaFeedbackCrashSubmissions_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"betaFeedbackCrashSubmissions_deleteInstance">)),
    BetaFeedbackCrashSubmissionsGetInstance: (...args) => callOperation("betaFeedbackCrashSubmissions_getInstance", ...(args as AppStoreFullApiOperationArgs<"betaFeedbackCrashSubmissions_getInstance">)),
  };
}
