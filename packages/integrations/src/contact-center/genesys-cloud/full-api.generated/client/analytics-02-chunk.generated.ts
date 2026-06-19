// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiAnalytics02OperationKeys = [
  "postAnalyticsConversationsAggregatesQuery",
  "postAnalyticsConversationsDetailsJobs",
  "postAnalyticsConversationsDetailsQuery",
  "postAnalyticsEvaluationsAggregatesJobs",
  "postAnalyticsEvaluationsAggregatesQuery",
  "postAnalyticsFlowexecutionsAggregatesJobs",
  "postAnalyticsFlowexecutionsAggregatesQuery",
  "postAnalyticsFlowsActivityQuery",
  "postAnalyticsFlowsAggregatesJobs",
  "postAnalyticsFlowsAggregatesQuery",
  "postAnalyticsFlowsObservationsQuery",
  "postAnalyticsJourneysAggregatesJobs",
  "postAnalyticsJourneysAggregatesQuery",
  "postAnalyticsKnowledgeAggregatesJobs",
  "postAnalyticsKnowledgeAggregatesQuery",
  "postAnalyticsQueuesObservationsQuery",
  "postAnalyticsRatelimitsAggregatesQuery",
  "postAnalyticsReportingDashboardsUsersBulkRemove",
  "postAnalyticsReportingExports",
  "postAnalyticsReportingSettingsDashboardsBulkRemove",
  "postAnalyticsReportingSettingsDashboardsQuery",
  "postAnalyticsResolutionsAggregatesJobs",
  "postAnalyticsResolutionsAggregatesQuery",
  "postAnalyticsRoutingActivityQuery",
  "postAnalyticsSummariesAggregatesJobs",
  "postAnalyticsSummariesAggregatesQuery",
  "postAnalyticsSurveysAggregatesJobs",
  "postAnalyticsSurveysAggregatesQuery",
  "postAnalyticsTaskmanagementAggregatesJobs",
  "postAnalyticsTaskmanagementAggregatesQuery",
  "postAnalyticsTaskmanagementMetricsQuery",
  "postAnalyticsTeamsActivityQuery",
  "postAnalyticsTranscriptsAggregatesJobs",
  "postAnalyticsTranscriptsAggregatesQuery",
  "postAnalyticsUsersActivityQuery",
  "postAnalyticsUsersAggregatesJobs",
  "postAnalyticsUsersAggregatesQuery",
  "postAnalyticsUsersDetailsJobs",
  "postAnalyticsUsersDetailsQuery",
  "postAnalyticsUsersObservationsQuery",
  "putAnalyticsDataretentionSettings"
] as const;
export type GenesysCloudFullApiAnalytics02OperationKey = typeof GenesysCloudFullApiAnalytics02OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiAnalytics02OperationPathParamMap {
  "postAnalyticsConversationsAggregatesQuery": {};
  "postAnalyticsConversationsDetailsJobs": {};
  "postAnalyticsConversationsDetailsQuery": {};
  "postAnalyticsEvaluationsAggregatesJobs": {};
  "postAnalyticsEvaluationsAggregatesQuery": {};
  "postAnalyticsFlowexecutionsAggregatesJobs": {};
  "postAnalyticsFlowexecutionsAggregatesQuery": {};
  "postAnalyticsFlowsActivityQuery": {};
  "postAnalyticsFlowsAggregatesJobs": {};
  "postAnalyticsFlowsAggregatesQuery": {};
  "postAnalyticsFlowsObservationsQuery": {};
  "postAnalyticsJourneysAggregatesJobs": {};
  "postAnalyticsJourneysAggregatesQuery": {};
  "postAnalyticsKnowledgeAggregatesJobs": {};
  "postAnalyticsKnowledgeAggregatesQuery": {};
  "postAnalyticsQueuesObservationsQuery": {};
  "postAnalyticsRatelimitsAggregatesQuery": {};
  "postAnalyticsReportingDashboardsUsersBulkRemove": {};
  "postAnalyticsReportingExports": {};
  "postAnalyticsReportingSettingsDashboardsBulkRemove": {};
  "postAnalyticsReportingSettingsDashboardsQuery": {};
  "postAnalyticsResolutionsAggregatesJobs": {};
  "postAnalyticsResolutionsAggregatesQuery": {};
  "postAnalyticsRoutingActivityQuery": {};
  "postAnalyticsSummariesAggregatesJobs": {};
  "postAnalyticsSummariesAggregatesQuery": {};
  "postAnalyticsSurveysAggregatesJobs": {};
  "postAnalyticsSurveysAggregatesQuery": {};
  "postAnalyticsTaskmanagementAggregatesJobs": {};
  "postAnalyticsTaskmanagementAggregatesQuery": {};
  "postAnalyticsTaskmanagementMetricsQuery": {};
  "postAnalyticsTeamsActivityQuery": {};
  "postAnalyticsTranscriptsAggregatesJobs": {};
  "postAnalyticsTranscriptsAggregatesQuery": {};
  "postAnalyticsUsersActivityQuery": {};
  "postAnalyticsUsersAggregatesJobs": {};
  "postAnalyticsUsersAggregatesQuery": {};
  "postAnalyticsUsersDetailsJobs": {};
  "postAnalyticsUsersDetailsQuery": {};
  "postAnalyticsUsersObservationsQuery": {};
  "putAnalyticsDataretentionSettings": {};
}

export interface GenesysCloudFullApiAnalytics02OperationRequestMap {
  "postAnalyticsConversationsAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsConversationsAggregatesQuery">;
  "postAnalyticsConversationsDetailsJobs": GenesysCloudFullApiOperationInput<"postAnalyticsConversationsDetailsJobs">;
  "postAnalyticsConversationsDetailsQuery": GenesysCloudFullApiOperationInput<"postAnalyticsConversationsDetailsQuery">;
  "postAnalyticsEvaluationsAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsEvaluationsAggregatesJobs">;
  "postAnalyticsEvaluationsAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsEvaluationsAggregatesQuery">;
  "postAnalyticsFlowexecutionsAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsFlowexecutionsAggregatesJobs">;
  "postAnalyticsFlowexecutionsAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsFlowexecutionsAggregatesQuery">;
  "postAnalyticsFlowsActivityQuery": GenesysCloudFullApiOperationInput<"postAnalyticsFlowsActivityQuery">;
  "postAnalyticsFlowsAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsFlowsAggregatesJobs">;
  "postAnalyticsFlowsAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsFlowsAggregatesQuery">;
  "postAnalyticsFlowsObservationsQuery": GenesysCloudFullApiOperationInput<"postAnalyticsFlowsObservationsQuery">;
  "postAnalyticsJourneysAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsJourneysAggregatesJobs">;
  "postAnalyticsJourneysAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsJourneysAggregatesQuery">;
  "postAnalyticsKnowledgeAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsKnowledgeAggregatesJobs">;
  "postAnalyticsKnowledgeAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsKnowledgeAggregatesQuery">;
  "postAnalyticsQueuesObservationsQuery": GenesysCloudFullApiOperationInput<"postAnalyticsQueuesObservationsQuery">;
  "postAnalyticsRatelimitsAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsRatelimitsAggregatesQuery">;
  "postAnalyticsReportingDashboardsUsersBulkRemove": GenesysCloudFullApiOperationInput<"postAnalyticsReportingDashboardsUsersBulkRemove">;
  "postAnalyticsReportingExports": GenesysCloudFullApiOperationInput<"postAnalyticsReportingExports">;
  "postAnalyticsReportingSettingsDashboardsBulkRemove": GenesysCloudFullApiOperationInput<"postAnalyticsReportingSettingsDashboardsBulkRemove">;
  "postAnalyticsReportingSettingsDashboardsQuery": GenesysCloudFullApiOperationInput<"postAnalyticsReportingSettingsDashboardsQuery">;
  "postAnalyticsResolutionsAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsResolutionsAggregatesJobs">;
  "postAnalyticsResolutionsAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsResolutionsAggregatesQuery">;
  "postAnalyticsRoutingActivityQuery": GenesysCloudFullApiOperationInput<"postAnalyticsRoutingActivityQuery">;
  "postAnalyticsSummariesAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsSummariesAggregatesJobs">;
  "postAnalyticsSummariesAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsSummariesAggregatesQuery">;
  "postAnalyticsSurveysAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsSurveysAggregatesJobs">;
  "postAnalyticsSurveysAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsSurveysAggregatesQuery">;
  "postAnalyticsTaskmanagementAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsTaskmanagementAggregatesJobs">;
  "postAnalyticsTaskmanagementAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsTaskmanagementAggregatesQuery">;
  "postAnalyticsTaskmanagementMetricsQuery": GenesysCloudFullApiOperationInput<"postAnalyticsTaskmanagementMetricsQuery">;
  "postAnalyticsTeamsActivityQuery": GenesysCloudFullApiOperationInput<"postAnalyticsTeamsActivityQuery">;
  "postAnalyticsTranscriptsAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsTranscriptsAggregatesJobs">;
  "postAnalyticsTranscriptsAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsTranscriptsAggregatesQuery">;
  "postAnalyticsUsersActivityQuery": GenesysCloudFullApiOperationInput<"postAnalyticsUsersActivityQuery">;
  "postAnalyticsUsersAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsUsersAggregatesJobs">;
  "postAnalyticsUsersAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsUsersAggregatesQuery">;
  "postAnalyticsUsersDetailsJobs": GenesysCloudFullApiOperationInput<"postAnalyticsUsersDetailsJobs">;
  "postAnalyticsUsersDetailsQuery": GenesysCloudFullApiOperationInput<"postAnalyticsUsersDetailsQuery">;
  "postAnalyticsUsersObservationsQuery": GenesysCloudFullApiOperationInput<"postAnalyticsUsersObservationsQuery">;
  "putAnalyticsDataretentionSettings": GenesysCloudFullApiOperationInput<"putAnalyticsDataretentionSettings">;
}

export interface GenesysCloudFullApiAnalytics02GeneratedClient {
  PostAnalyticsConversationsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsConversationsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsConversationsAggregatesQuery"]>;
  PostAnalyticsConversationsDetailsJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsConversationsDetailsJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsConversationsDetailsJobs"]>;
  PostAnalyticsConversationsDetailsQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsConversationsDetailsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsConversationsDetailsQuery"]>;
  PostAnalyticsEvaluationsAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsEvaluationsAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsEvaluationsAggregatesJobs"]>;
  PostAnalyticsEvaluationsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsEvaluationsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsEvaluationsAggregatesQuery"]>;
  PostAnalyticsFlowexecutionsAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsFlowexecutionsAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsFlowexecutionsAggregatesJobs"]>;
  PostAnalyticsFlowexecutionsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsFlowexecutionsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsFlowexecutionsAggregatesQuery"]>;
  PostAnalyticsFlowsActivityQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsFlowsActivityQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsFlowsActivityQuery"]>;
  PostAnalyticsFlowsAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsFlowsAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsFlowsAggregatesJobs"]>;
  PostAnalyticsFlowsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsFlowsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsFlowsAggregatesQuery"]>;
  PostAnalyticsFlowsObservationsQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsFlowsObservationsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsFlowsObservationsQuery"]>;
  PostAnalyticsJourneysAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsJourneysAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsJourneysAggregatesJobs"]>;
  PostAnalyticsJourneysAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsJourneysAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsJourneysAggregatesQuery"]>;
  PostAnalyticsKnowledgeAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsKnowledgeAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsKnowledgeAggregatesJobs"]>;
  PostAnalyticsKnowledgeAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsKnowledgeAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsKnowledgeAggregatesQuery"]>;
  PostAnalyticsQueuesObservationsQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsQueuesObservationsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsQueuesObservationsQuery"]>;
  PostAnalyticsRatelimitsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsRatelimitsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsRatelimitsAggregatesQuery"]>;
  PostAnalyticsReportingDashboardsUsersBulkRemove(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsReportingDashboardsUsersBulkRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsReportingDashboardsUsersBulkRemove"]>;
  PostAnalyticsReportingExports(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsReportingExports">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsReportingExports"]>;
  PostAnalyticsReportingSettingsDashboardsBulkRemove(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsReportingSettingsDashboardsBulkRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsReportingSettingsDashboardsBulkRemove"]>;
  PostAnalyticsReportingSettingsDashboardsQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsReportingSettingsDashboardsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsReportingSettingsDashboardsQuery"]>;
  PostAnalyticsResolutionsAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsResolutionsAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsResolutionsAggregatesJobs"]>;
  PostAnalyticsResolutionsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsResolutionsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsResolutionsAggregatesQuery"]>;
  PostAnalyticsRoutingActivityQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsRoutingActivityQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsRoutingActivityQuery"]>;
  PostAnalyticsSummariesAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsSummariesAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsSummariesAggregatesJobs"]>;
  PostAnalyticsSummariesAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsSummariesAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsSummariesAggregatesQuery"]>;
  PostAnalyticsSurveysAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsSurveysAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsSurveysAggregatesJobs"]>;
  PostAnalyticsSurveysAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsSurveysAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsSurveysAggregatesQuery"]>;
  PostAnalyticsTaskmanagementAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsTaskmanagementAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsTaskmanagementAggregatesJobs"]>;
  PostAnalyticsTaskmanagementAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsTaskmanagementAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsTaskmanagementAggregatesQuery"]>;
  PostAnalyticsTaskmanagementMetricsQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsTaskmanagementMetricsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsTaskmanagementMetricsQuery"]>;
  PostAnalyticsTeamsActivityQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsTeamsActivityQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsTeamsActivityQuery"]>;
  PostAnalyticsTranscriptsAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsTranscriptsAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsTranscriptsAggregatesJobs"]>;
  PostAnalyticsTranscriptsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsTranscriptsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsTranscriptsAggregatesQuery"]>;
  PostAnalyticsUsersActivityQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsUsersActivityQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsUsersActivityQuery"]>;
  PostAnalyticsUsersAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsUsersAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsUsersAggregatesJobs"]>;
  PostAnalyticsUsersAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsUsersAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsUsersAggregatesQuery"]>;
  PostAnalyticsUsersDetailsJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsUsersDetailsJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsUsersDetailsJobs"]>;
  PostAnalyticsUsersDetailsQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsUsersDetailsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsUsersDetailsQuery"]>;
  PostAnalyticsUsersObservationsQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsUsersObservationsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsUsersObservationsQuery"]>;
  PutAnalyticsDataretentionSettings(...args: GenesysCloudFullApiOperationArgs<"putAnalyticsDataretentionSettings">): Promise<GenesysCloudFullApiOperationResponseMap["putAnalyticsDataretentionSettings"]>;
}

export const GenesysCloudFullApiAnalytics02GeneratedFunctionNames = [
  "PostAnalyticsConversationsAggregatesQuery",
  "PostAnalyticsConversationsDetailsJobs",
  "PostAnalyticsConversationsDetailsQuery",
  "PostAnalyticsEvaluationsAggregatesJobs",
  "PostAnalyticsEvaluationsAggregatesQuery",
  "PostAnalyticsFlowexecutionsAggregatesJobs",
  "PostAnalyticsFlowexecutionsAggregatesQuery",
  "PostAnalyticsFlowsActivityQuery",
  "PostAnalyticsFlowsAggregatesJobs",
  "PostAnalyticsFlowsAggregatesQuery",
  "PostAnalyticsFlowsObservationsQuery",
  "PostAnalyticsJourneysAggregatesJobs",
  "PostAnalyticsJourneysAggregatesQuery",
  "PostAnalyticsKnowledgeAggregatesJobs",
  "PostAnalyticsKnowledgeAggregatesQuery",
  "PostAnalyticsQueuesObservationsQuery",
  "PostAnalyticsRatelimitsAggregatesQuery",
  "PostAnalyticsReportingDashboardsUsersBulkRemove",
  "PostAnalyticsReportingExports",
  "PostAnalyticsReportingSettingsDashboardsBulkRemove",
  "PostAnalyticsReportingSettingsDashboardsQuery",
  "PostAnalyticsResolutionsAggregatesJobs",
  "PostAnalyticsResolutionsAggregatesQuery",
  "PostAnalyticsRoutingActivityQuery",
  "PostAnalyticsSummariesAggregatesJobs",
  "PostAnalyticsSummariesAggregatesQuery",
  "PostAnalyticsSurveysAggregatesJobs",
  "PostAnalyticsSurveysAggregatesQuery",
  "PostAnalyticsTaskmanagementAggregatesJobs",
  "PostAnalyticsTaskmanagementAggregatesQuery",
  "PostAnalyticsTaskmanagementMetricsQuery",
  "PostAnalyticsTeamsActivityQuery",
  "PostAnalyticsTranscriptsAggregatesJobs",
  "PostAnalyticsTranscriptsAggregatesQuery",
  "PostAnalyticsUsersActivityQuery",
  "PostAnalyticsUsersAggregatesJobs",
  "PostAnalyticsUsersAggregatesQuery",
  "PostAnalyticsUsersDetailsJobs",
  "PostAnalyticsUsersDetailsQuery",
  "PostAnalyticsUsersObservationsQuery",
  "PutAnalyticsDataretentionSettings"
] as const satisfies readonly (keyof GenesysCloudFullApiAnalytics02GeneratedClient)[];

export function createGenesysCloudFullApiAnalytics02GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiAnalytics02GeneratedClient {
  return {
    PostAnalyticsConversationsAggregatesQuery: (...args) => callOperation("postAnalyticsConversationsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsConversationsAggregatesQuery">)),
    PostAnalyticsConversationsDetailsJobs: (...args) => callOperation("postAnalyticsConversationsDetailsJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsConversationsDetailsJobs">)),
    PostAnalyticsConversationsDetailsQuery: (...args) => callOperation("postAnalyticsConversationsDetailsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsConversationsDetailsQuery">)),
    PostAnalyticsEvaluationsAggregatesJobs: (...args) => callOperation("postAnalyticsEvaluationsAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsEvaluationsAggregatesJobs">)),
    PostAnalyticsEvaluationsAggregatesQuery: (...args) => callOperation("postAnalyticsEvaluationsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsEvaluationsAggregatesQuery">)),
    PostAnalyticsFlowexecutionsAggregatesJobs: (...args) => callOperation("postAnalyticsFlowexecutionsAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsFlowexecutionsAggregatesJobs">)),
    PostAnalyticsFlowexecutionsAggregatesQuery: (...args) => callOperation("postAnalyticsFlowexecutionsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsFlowexecutionsAggregatesQuery">)),
    PostAnalyticsFlowsActivityQuery: (...args) => callOperation("postAnalyticsFlowsActivityQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsFlowsActivityQuery">)),
    PostAnalyticsFlowsAggregatesJobs: (...args) => callOperation("postAnalyticsFlowsAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsFlowsAggregatesJobs">)),
    PostAnalyticsFlowsAggregatesQuery: (...args) => callOperation("postAnalyticsFlowsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsFlowsAggregatesQuery">)),
    PostAnalyticsFlowsObservationsQuery: (...args) => callOperation("postAnalyticsFlowsObservationsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsFlowsObservationsQuery">)),
    PostAnalyticsJourneysAggregatesJobs: (...args) => callOperation("postAnalyticsJourneysAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsJourneysAggregatesJobs">)),
    PostAnalyticsJourneysAggregatesQuery: (...args) => callOperation("postAnalyticsJourneysAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsJourneysAggregatesQuery">)),
    PostAnalyticsKnowledgeAggregatesJobs: (...args) => callOperation("postAnalyticsKnowledgeAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsKnowledgeAggregatesJobs">)),
    PostAnalyticsKnowledgeAggregatesQuery: (...args) => callOperation("postAnalyticsKnowledgeAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsKnowledgeAggregatesQuery">)),
    PostAnalyticsQueuesObservationsQuery: (...args) => callOperation("postAnalyticsQueuesObservationsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsQueuesObservationsQuery">)),
    PostAnalyticsRatelimitsAggregatesQuery: (...args) => callOperation("postAnalyticsRatelimitsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsRatelimitsAggregatesQuery">)),
    PostAnalyticsReportingDashboardsUsersBulkRemove: (...args) => callOperation("postAnalyticsReportingDashboardsUsersBulkRemove", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsReportingDashboardsUsersBulkRemove">)),
    PostAnalyticsReportingExports: (...args) => callOperation("postAnalyticsReportingExports", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsReportingExports">)),
    PostAnalyticsReportingSettingsDashboardsBulkRemove: (...args) => callOperation("postAnalyticsReportingSettingsDashboardsBulkRemove", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsReportingSettingsDashboardsBulkRemove">)),
    PostAnalyticsReportingSettingsDashboardsQuery: (...args) => callOperation("postAnalyticsReportingSettingsDashboardsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsReportingSettingsDashboardsQuery">)),
    PostAnalyticsResolutionsAggregatesJobs: (...args) => callOperation("postAnalyticsResolutionsAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsResolutionsAggregatesJobs">)),
    PostAnalyticsResolutionsAggregatesQuery: (...args) => callOperation("postAnalyticsResolutionsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsResolutionsAggregatesQuery">)),
    PostAnalyticsRoutingActivityQuery: (...args) => callOperation("postAnalyticsRoutingActivityQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsRoutingActivityQuery">)),
    PostAnalyticsSummariesAggregatesJobs: (...args) => callOperation("postAnalyticsSummariesAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsSummariesAggregatesJobs">)),
    PostAnalyticsSummariesAggregatesQuery: (...args) => callOperation("postAnalyticsSummariesAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsSummariesAggregatesQuery">)),
    PostAnalyticsSurveysAggregatesJobs: (...args) => callOperation("postAnalyticsSurveysAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsSurveysAggregatesJobs">)),
    PostAnalyticsSurveysAggregatesQuery: (...args) => callOperation("postAnalyticsSurveysAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsSurveysAggregatesQuery">)),
    PostAnalyticsTaskmanagementAggregatesJobs: (...args) => callOperation("postAnalyticsTaskmanagementAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsTaskmanagementAggregatesJobs">)),
    PostAnalyticsTaskmanagementAggregatesQuery: (...args) => callOperation("postAnalyticsTaskmanagementAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsTaskmanagementAggregatesQuery">)),
    PostAnalyticsTaskmanagementMetricsQuery: (...args) => callOperation("postAnalyticsTaskmanagementMetricsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsTaskmanagementMetricsQuery">)),
    PostAnalyticsTeamsActivityQuery: (...args) => callOperation("postAnalyticsTeamsActivityQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsTeamsActivityQuery">)),
    PostAnalyticsTranscriptsAggregatesJobs: (...args) => callOperation("postAnalyticsTranscriptsAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsTranscriptsAggregatesJobs">)),
    PostAnalyticsTranscriptsAggregatesQuery: (...args) => callOperation("postAnalyticsTranscriptsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsTranscriptsAggregatesQuery">)),
    PostAnalyticsUsersActivityQuery: (...args) => callOperation("postAnalyticsUsersActivityQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsUsersActivityQuery">)),
    PostAnalyticsUsersAggregatesJobs: (...args) => callOperation("postAnalyticsUsersAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsUsersAggregatesJobs">)),
    PostAnalyticsUsersAggregatesQuery: (...args) => callOperation("postAnalyticsUsersAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsUsersAggregatesQuery">)),
    PostAnalyticsUsersDetailsJobs: (...args) => callOperation("postAnalyticsUsersDetailsJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsUsersDetailsJobs">)),
    PostAnalyticsUsersDetailsQuery: (...args) => callOperation("postAnalyticsUsersDetailsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsUsersDetailsQuery">)),
    PostAnalyticsUsersObservationsQuery: (...args) => callOperation("postAnalyticsUsersObservationsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsUsersObservationsQuery">)),
    PutAnalyticsDataretentionSettings: (...args) => callOperation("putAnalyticsDataretentionSettings", ...(args as GenesysCloudFullApiOperationArgs<"putAnalyticsDataretentionSettings">)),
  };
}
