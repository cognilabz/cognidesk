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
export const AppStoreFullApiAnalyticsReportInstancesOperationKeys = [
  "analyticsReportInstances_getInstance",
  "analyticsReportInstances_segments_getToManyRelated",
  "analyticsReportInstances_segments_getToManyRelationship"
] as const;
export type AppStoreFullApiAnalyticsReportInstancesOperationKey = typeof AppStoreFullApiAnalyticsReportInstancesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAnalyticsReportInstancesOperationPathParamMap {
  "analyticsReportInstances_getInstance": { "id": AppStoreFullApiPathParamValue };
  "analyticsReportInstances_segments_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "analyticsReportInstances_segments_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAnalyticsReportInstancesOperationRequestMap {
  "analyticsReportInstances_getInstance": AppStoreFullApiOperationInput<"analyticsReportInstances_getInstance">;
  "analyticsReportInstances_segments_getToManyRelated": AppStoreFullApiOperationInput<"analyticsReportInstances_segments_getToManyRelated">;
  "analyticsReportInstances_segments_getToManyRelationship": AppStoreFullApiOperationInput<"analyticsReportInstances_segments_getToManyRelationship">;
}

export interface AppStoreFullApiAnalyticsReportInstancesGeneratedClient {
  AnalyticsReportInstancesGetInstance(...args: AppStoreFullApiOperationArgs<"analyticsReportInstances_getInstance">): Promise<AppStoreFullApiOperationResponseMap["analyticsReportInstances_getInstance"]>;
  AnalyticsReportInstancesSegmentsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"analyticsReportInstances_segments_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["analyticsReportInstances_segments_getToManyRelated"]>;
  AnalyticsReportInstancesSegmentsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"analyticsReportInstances_segments_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["analyticsReportInstances_segments_getToManyRelationship"]>;
}

export const AppStoreFullApiAnalyticsReportInstancesGeneratedFunctionNames = [
  "AnalyticsReportInstancesGetInstance",
  "AnalyticsReportInstancesSegmentsGetToManyRelated",
  "AnalyticsReportInstancesSegmentsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiAnalyticsReportInstancesGeneratedClient)[];

export function createAppStoreFullApiAnalyticsReportInstancesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAnalyticsReportInstancesGeneratedClient {
  return {
    AnalyticsReportInstancesGetInstance: (...args) => callOperation("analyticsReportInstances_getInstance", ...(args as AppStoreFullApiOperationArgs<"analyticsReportInstances_getInstance">)),
    AnalyticsReportInstancesSegmentsGetToManyRelated: (...args) => callOperation("analyticsReportInstances_segments_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"analyticsReportInstances_segments_getToManyRelated">)),
    AnalyticsReportInstancesSegmentsGetToManyRelationship: (...args) => callOperation("analyticsReportInstances_segments_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"analyticsReportInstances_segments_getToManyRelationship">)),
  };
}
