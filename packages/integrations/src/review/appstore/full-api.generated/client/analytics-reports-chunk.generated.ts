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
export const AppStoreFullApiAnalyticsReportsOperationKeys = [
  "analyticsReports_getInstance",
  "analyticsReports_instances_getToManyRelated",
  "analyticsReports_instances_getToManyRelationship"
] as const;
export type AppStoreFullApiAnalyticsReportsOperationKey = typeof AppStoreFullApiAnalyticsReportsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAnalyticsReportsOperationPathParamMap {
  "analyticsReports_getInstance": { "id": AppStoreFullApiPathParamValue };
  "analyticsReports_instances_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "analyticsReports_instances_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAnalyticsReportsOperationRequestMap {
  "analyticsReports_getInstance": AppStoreFullApiOperationInput<"analyticsReports_getInstance">;
  "analyticsReports_instances_getToManyRelated": AppStoreFullApiOperationInput<"analyticsReports_instances_getToManyRelated">;
  "analyticsReports_instances_getToManyRelationship": AppStoreFullApiOperationInput<"analyticsReports_instances_getToManyRelationship">;
}

export interface AppStoreFullApiAnalyticsReportsGeneratedClient {
  AnalyticsReportsGetInstance(...args: AppStoreFullApiOperationArgs<"analyticsReports_getInstance">): Promise<AppStoreFullApiOperationResponseMap["analyticsReports_getInstance"]>;
  AnalyticsReportsInstancesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"analyticsReports_instances_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["analyticsReports_instances_getToManyRelated"]>;
  AnalyticsReportsInstancesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"analyticsReports_instances_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["analyticsReports_instances_getToManyRelationship"]>;
}

export const AppStoreFullApiAnalyticsReportsGeneratedFunctionNames = [
  "AnalyticsReportsGetInstance",
  "AnalyticsReportsInstancesGetToManyRelated",
  "AnalyticsReportsInstancesGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiAnalyticsReportsGeneratedClient)[];

export function createAppStoreFullApiAnalyticsReportsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAnalyticsReportsGeneratedClient {
  return {
    AnalyticsReportsGetInstance: (...args) => callOperation("analyticsReports_getInstance", ...(args as AppStoreFullApiOperationArgs<"analyticsReports_getInstance">)),
    AnalyticsReportsInstancesGetToManyRelated: (...args) => callOperation("analyticsReports_instances_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"analyticsReports_instances_getToManyRelated">)),
    AnalyticsReportsInstancesGetToManyRelationship: (...args) => callOperation("analyticsReports_instances_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"analyticsReports_instances_getToManyRelationship">)),
  };
}
