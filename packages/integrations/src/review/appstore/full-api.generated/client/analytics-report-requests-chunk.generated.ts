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
export const AppStoreFullApiAnalyticsReportRequestsOperationKeys = [
  "analyticsReportRequests_createInstance",
  "analyticsReportRequests_deleteInstance",
  "analyticsReportRequests_getInstance",
  "analyticsReportRequests_reports_getToManyRelated",
  "analyticsReportRequests_reports_getToManyRelationship"
] as const;
export type AppStoreFullApiAnalyticsReportRequestsOperationKey = typeof AppStoreFullApiAnalyticsReportRequestsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAnalyticsReportRequestsOperationPathParamMap {
  "analyticsReportRequests_createInstance": {};
  "analyticsReportRequests_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "analyticsReportRequests_getInstance": { "id": AppStoreFullApiPathParamValue };
  "analyticsReportRequests_reports_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "analyticsReportRequests_reports_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAnalyticsReportRequestsOperationRequestMap {
  "analyticsReportRequests_createInstance": AppStoreFullApiOperationInput<"analyticsReportRequests_createInstance">;
  "analyticsReportRequests_deleteInstance": AppStoreFullApiOperationInput<"analyticsReportRequests_deleteInstance">;
  "analyticsReportRequests_getInstance": AppStoreFullApiOperationInput<"analyticsReportRequests_getInstance">;
  "analyticsReportRequests_reports_getToManyRelated": AppStoreFullApiOperationInput<"analyticsReportRequests_reports_getToManyRelated">;
  "analyticsReportRequests_reports_getToManyRelationship": AppStoreFullApiOperationInput<"analyticsReportRequests_reports_getToManyRelationship">;
}

export interface AppStoreFullApiAnalyticsReportRequestsGeneratedClient {
  AnalyticsReportRequestsCreateInstance(...args: AppStoreFullApiOperationArgs<"analyticsReportRequests_createInstance">): Promise<AppStoreFullApiOperationResponseMap["analyticsReportRequests_createInstance"]>;
  AnalyticsReportRequestsDeleteInstance(...args: AppStoreFullApiOperationArgs<"analyticsReportRequests_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["analyticsReportRequests_deleteInstance"]>;
  AnalyticsReportRequestsGetInstance(...args: AppStoreFullApiOperationArgs<"analyticsReportRequests_getInstance">): Promise<AppStoreFullApiOperationResponseMap["analyticsReportRequests_getInstance"]>;
  AnalyticsReportRequestsReportsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"analyticsReportRequests_reports_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["analyticsReportRequests_reports_getToManyRelated"]>;
  AnalyticsReportRequestsReportsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"analyticsReportRequests_reports_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["analyticsReportRequests_reports_getToManyRelationship"]>;
}

export const AppStoreFullApiAnalyticsReportRequestsGeneratedFunctionNames = [
  "AnalyticsReportRequestsCreateInstance",
  "AnalyticsReportRequestsDeleteInstance",
  "AnalyticsReportRequestsGetInstance",
  "AnalyticsReportRequestsReportsGetToManyRelated",
  "AnalyticsReportRequestsReportsGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiAnalyticsReportRequestsGeneratedClient)[];

export function createAppStoreFullApiAnalyticsReportRequestsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAnalyticsReportRequestsGeneratedClient {
  return {
    AnalyticsReportRequestsCreateInstance: (...args) => callOperation("analyticsReportRequests_createInstance", ...(args as AppStoreFullApiOperationArgs<"analyticsReportRequests_createInstance">)),
    AnalyticsReportRequestsDeleteInstance: (...args) => callOperation("analyticsReportRequests_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"analyticsReportRequests_deleteInstance">)),
    AnalyticsReportRequestsGetInstance: (...args) => callOperation("analyticsReportRequests_getInstance", ...(args as AppStoreFullApiOperationArgs<"analyticsReportRequests_getInstance">)),
    AnalyticsReportRequestsReportsGetToManyRelated: (...args) => callOperation("analyticsReportRequests_reports_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"analyticsReportRequests_reports_getToManyRelated">)),
    AnalyticsReportRequestsReportsGetToManyRelationship: (...args) => callOperation("analyticsReportRequests_reports_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"analyticsReportRequests_reports_getToManyRelationship">)),
  };
}
