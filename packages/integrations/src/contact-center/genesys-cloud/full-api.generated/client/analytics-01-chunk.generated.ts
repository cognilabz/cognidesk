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
export const GenesysCloudFullApiAnalytics01OperationKeys = [
  "deleteAnalyticsActionsAggregatesJob",
  "deleteAnalyticsBotsAggregatesJob",
  "deleteAnalyticsCasemanagementAggregatesJob",
  "deleteAnalyticsConversationsAggregatesJob",
  "deleteAnalyticsConversationsDetailsJob",
  "deleteAnalyticsEvaluationsAggregatesJob",
  "deleteAnalyticsFlowexecutionsAggregatesJob",
  "deleteAnalyticsFlowsAggregatesJob",
  "deleteAnalyticsJourneysAggregatesJob",
  "deleteAnalyticsKnowledgeAggregatesJob",
  "deleteAnalyticsResolutionsAggregatesJob",
  "deleteAnalyticsSummariesAggregatesJob",
  "deleteAnalyticsSurveysAggregatesJob",
  "deleteAnalyticsTaskmanagementAggregatesJob",
  "deleteAnalyticsTranscriptsAggregatesJob",
  "deleteAnalyticsUsersAggregatesJob",
  "deleteAnalyticsUsersDetailsJob",
  "getAnalyticsActionsAggregatesJob",
  "getAnalyticsActionsAggregatesJobResults",
  "getAnalyticsAgentStatus",
  "getAnalyticsBotflowDivisionsReportingturns",
  "getAnalyticsBotflowReportingturns",
  "getAnalyticsBotflowSessions",
  "getAnalyticsBotsAggregatesJob",
  "getAnalyticsBotsAggregatesJobResults",
  "getAnalyticsCasemanagementAggregatesJob",
  "getAnalyticsCasemanagementAggregatesJobResults",
  "getAnalyticsConversationDetails",
  "getAnalyticsConversationsAggregatesJob",
  "getAnalyticsConversationsAggregatesJobResults",
  "getAnalyticsConversationsDetails",
  "getAnalyticsConversationsDetailsJob",
  "getAnalyticsConversationsDetailsJobResults",
  "getAnalyticsConversationsDetailsJobsAvailability",
  "getAnalyticsDataretentionSettings",
  "getAnalyticsEvaluationsAggregatesJob",
  "getAnalyticsEvaluationsAggregatesJobResults",
  "getAnalyticsFlowexecutionsAggregatesJob",
  "getAnalyticsFlowexecutionsAggregatesJobResults",
  "getAnalyticsFlowsAggregatesJob",
  "getAnalyticsFlowsAggregatesJobResults",
  "getAnalyticsJourneysAggregatesJob",
  "getAnalyticsJourneysAggregatesJobResults",
  "getAnalyticsKnowledgeAggregatesJob",
  "getAnalyticsKnowledgeAggregatesJobResults",
  "getAnalyticsReportingDashboardsUser",
  "getAnalyticsReportingDashboardsUsers",
  "getAnalyticsReportingExports",
  "getAnalyticsReportingExportsMetadata",
  "getAnalyticsReportingSettings",
  "getAnalyticsReportingSettingsDashboardsQuery",
  "getAnalyticsReportingSettingsUserDashboards",
  "getAnalyticsResolutionsAggregatesJob",
  "getAnalyticsResolutionsAggregatesJobResults",
  "getAnalyticsSummariesAggregatesJob",
  "getAnalyticsSummariesAggregatesJobResults",
  "getAnalyticsSurveysAggregatesJob",
  "getAnalyticsSurveysAggregatesJobResults",
  "getAnalyticsTaskmanagementAggregatesJob",
  "getAnalyticsTaskmanagementAggregatesJobResults",
  "getAnalyticsTranscriptsAggregatesJob",
  "getAnalyticsTranscriptsAggregatesJobResults",
  "getAnalyticsUsersAggregatesJob",
  "getAnalyticsUsersAggregatesJobResults",
  "getAnalyticsUsersDetailsJob",
  "getAnalyticsUsersDetailsJobResults",
  "getAnalyticsUsersDetailsJobsAvailability",
  "patchAnalyticsReportingSettings",
  "postAnalyticsActionsAggregatesJobs",
  "postAnalyticsActionsAggregatesQuery",
  "postAnalyticsAgentcopilotsAggregatesQuery",
  "postAnalyticsAgentsStatusCounts",
  "postAnalyticsAgentsStatusQuery",
  "postAnalyticsBotsAggregatesJobs",
  "postAnalyticsBotsAggregatesQuery",
  "postAnalyticsCasemanagementAggregatesJobs",
  "postAnalyticsCasemanagementAggregatesQuery",
  "postAnalyticsConversationDetailsProperties",
  "postAnalyticsConversationsActivityQuery",
  "postAnalyticsConversationsAggregatesJobs"
] as const;
export type GenesysCloudFullApiAnalytics01OperationKey = typeof GenesysCloudFullApiAnalytics01OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiAnalytics01OperationPathParamMap {
  "deleteAnalyticsActionsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsBotsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsCasemanagementAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsConversationsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsConversationsDetailsJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsEvaluationsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsFlowexecutionsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsFlowsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsJourneysAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsKnowledgeAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsResolutionsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsSummariesAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsSurveysAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsTaskmanagementAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsTranscriptsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsUsersAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "deleteAnalyticsUsersDetailsJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsActionsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsActionsAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsAgentStatus": { "userId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsBotflowDivisionsReportingturns": { "botFlowId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsBotflowReportingturns": { "botFlowId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsBotflowSessions": { "botFlowId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsBotsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsBotsAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsCasemanagementAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsCasemanagementAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsConversationDetails": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsConversationsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsConversationsAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsConversationsDetails": {};
  "getAnalyticsConversationsDetailsJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsConversationsDetailsJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsConversationsDetailsJobsAvailability": {};
  "getAnalyticsDataretentionSettings": {};
  "getAnalyticsEvaluationsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsEvaluationsAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsFlowexecutionsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsFlowexecutionsAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsFlowsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsFlowsAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsJourneysAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsJourneysAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsKnowledgeAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsKnowledgeAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsReportingDashboardsUser": { "userId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsReportingDashboardsUsers": {};
  "getAnalyticsReportingExports": {};
  "getAnalyticsReportingExportsMetadata": {};
  "getAnalyticsReportingSettings": {};
  "getAnalyticsReportingSettingsDashboardsQuery": {};
  "getAnalyticsReportingSettingsUserDashboards": { "userId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsResolutionsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsResolutionsAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsSummariesAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsSummariesAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsSurveysAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsSurveysAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsTaskmanagementAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsTaskmanagementAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsTranscriptsAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsTranscriptsAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsUsersAggregatesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsUsersAggregatesJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsUsersDetailsJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsUsersDetailsJobResults": { "jobId": GenesysCloudFullApiPathParamValue };
  "getAnalyticsUsersDetailsJobsAvailability": {};
  "patchAnalyticsReportingSettings": {};
  "postAnalyticsActionsAggregatesJobs": {};
  "postAnalyticsActionsAggregatesQuery": {};
  "postAnalyticsAgentcopilotsAggregatesQuery": {};
  "postAnalyticsAgentsStatusCounts": {};
  "postAnalyticsAgentsStatusQuery": {};
  "postAnalyticsBotsAggregatesJobs": {};
  "postAnalyticsBotsAggregatesQuery": {};
  "postAnalyticsCasemanagementAggregatesJobs": {};
  "postAnalyticsCasemanagementAggregatesQuery": {};
  "postAnalyticsConversationDetailsProperties": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postAnalyticsConversationsActivityQuery": {};
  "postAnalyticsConversationsAggregatesJobs": {};
}

export interface GenesysCloudFullApiAnalytics01OperationRequestMap {
  "deleteAnalyticsActionsAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsActionsAggregatesJob">;
  "deleteAnalyticsBotsAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsBotsAggregatesJob">;
  "deleteAnalyticsCasemanagementAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsCasemanagementAggregatesJob">;
  "deleteAnalyticsConversationsAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsConversationsAggregatesJob">;
  "deleteAnalyticsConversationsDetailsJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsConversationsDetailsJob">;
  "deleteAnalyticsEvaluationsAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsEvaluationsAggregatesJob">;
  "deleteAnalyticsFlowexecutionsAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsFlowexecutionsAggregatesJob">;
  "deleteAnalyticsFlowsAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsFlowsAggregatesJob">;
  "deleteAnalyticsJourneysAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsJourneysAggregatesJob">;
  "deleteAnalyticsKnowledgeAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsKnowledgeAggregatesJob">;
  "deleteAnalyticsResolutionsAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsResolutionsAggregatesJob">;
  "deleteAnalyticsSummariesAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsSummariesAggregatesJob">;
  "deleteAnalyticsSurveysAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsSurveysAggregatesJob">;
  "deleteAnalyticsTaskmanagementAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsTaskmanagementAggregatesJob">;
  "deleteAnalyticsTranscriptsAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsTranscriptsAggregatesJob">;
  "deleteAnalyticsUsersAggregatesJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsUsersAggregatesJob">;
  "deleteAnalyticsUsersDetailsJob": GenesysCloudFullApiOperationInput<"deleteAnalyticsUsersDetailsJob">;
  "getAnalyticsActionsAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsActionsAggregatesJob">;
  "getAnalyticsActionsAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsActionsAggregatesJobResults">;
  "getAnalyticsAgentStatus": GenesysCloudFullApiOperationInput<"getAnalyticsAgentStatus">;
  "getAnalyticsBotflowDivisionsReportingturns": GenesysCloudFullApiOperationInput<"getAnalyticsBotflowDivisionsReportingturns">;
  "getAnalyticsBotflowReportingturns": GenesysCloudFullApiOperationInput<"getAnalyticsBotflowReportingturns">;
  "getAnalyticsBotflowSessions": GenesysCloudFullApiOperationInput<"getAnalyticsBotflowSessions">;
  "getAnalyticsBotsAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsBotsAggregatesJob">;
  "getAnalyticsBotsAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsBotsAggregatesJobResults">;
  "getAnalyticsCasemanagementAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsCasemanagementAggregatesJob">;
  "getAnalyticsCasemanagementAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsCasemanagementAggregatesJobResults">;
  "getAnalyticsConversationDetails": GenesysCloudFullApiOperationInput<"getAnalyticsConversationDetails">;
  "getAnalyticsConversationsAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsConversationsAggregatesJob">;
  "getAnalyticsConversationsAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsConversationsAggregatesJobResults">;
  "getAnalyticsConversationsDetails": GenesysCloudFullApiOperationInput<"getAnalyticsConversationsDetails">;
  "getAnalyticsConversationsDetailsJob": GenesysCloudFullApiOperationInput<"getAnalyticsConversationsDetailsJob">;
  "getAnalyticsConversationsDetailsJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsConversationsDetailsJobResults">;
  "getAnalyticsConversationsDetailsJobsAvailability": GenesysCloudFullApiOperationInput<"getAnalyticsConversationsDetailsJobsAvailability">;
  "getAnalyticsDataretentionSettings": GenesysCloudFullApiOperationInput<"getAnalyticsDataretentionSettings">;
  "getAnalyticsEvaluationsAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsEvaluationsAggregatesJob">;
  "getAnalyticsEvaluationsAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsEvaluationsAggregatesJobResults">;
  "getAnalyticsFlowexecutionsAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsFlowexecutionsAggregatesJob">;
  "getAnalyticsFlowexecutionsAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsFlowexecutionsAggregatesJobResults">;
  "getAnalyticsFlowsAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsFlowsAggregatesJob">;
  "getAnalyticsFlowsAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsFlowsAggregatesJobResults">;
  "getAnalyticsJourneysAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsJourneysAggregatesJob">;
  "getAnalyticsJourneysAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsJourneysAggregatesJobResults">;
  "getAnalyticsKnowledgeAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsKnowledgeAggregatesJob">;
  "getAnalyticsKnowledgeAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsKnowledgeAggregatesJobResults">;
  "getAnalyticsReportingDashboardsUser": GenesysCloudFullApiOperationInput<"getAnalyticsReportingDashboardsUser">;
  "getAnalyticsReportingDashboardsUsers": GenesysCloudFullApiOperationInput<"getAnalyticsReportingDashboardsUsers">;
  "getAnalyticsReportingExports": GenesysCloudFullApiOperationInput<"getAnalyticsReportingExports">;
  "getAnalyticsReportingExportsMetadata": GenesysCloudFullApiOperationInput<"getAnalyticsReportingExportsMetadata">;
  "getAnalyticsReportingSettings": GenesysCloudFullApiOperationInput<"getAnalyticsReportingSettings">;
  "getAnalyticsReportingSettingsDashboardsQuery": GenesysCloudFullApiOperationInput<"getAnalyticsReportingSettingsDashboardsQuery">;
  "getAnalyticsReportingSettingsUserDashboards": GenesysCloudFullApiOperationInput<"getAnalyticsReportingSettingsUserDashboards">;
  "getAnalyticsResolutionsAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsResolutionsAggregatesJob">;
  "getAnalyticsResolutionsAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsResolutionsAggregatesJobResults">;
  "getAnalyticsSummariesAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsSummariesAggregatesJob">;
  "getAnalyticsSummariesAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsSummariesAggregatesJobResults">;
  "getAnalyticsSurveysAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsSurveysAggregatesJob">;
  "getAnalyticsSurveysAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsSurveysAggregatesJobResults">;
  "getAnalyticsTaskmanagementAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsTaskmanagementAggregatesJob">;
  "getAnalyticsTaskmanagementAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsTaskmanagementAggregatesJobResults">;
  "getAnalyticsTranscriptsAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsTranscriptsAggregatesJob">;
  "getAnalyticsTranscriptsAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsTranscriptsAggregatesJobResults">;
  "getAnalyticsUsersAggregatesJob": GenesysCloudFullApiOperationInput<"getAnalyticsUsersAggregatesJob">;
  "getAnalyticsUsersAggregatesJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsUsersAggregatesJobResults">;
  "getAnalyticsUsersDetailsJob": GenesysCloudFullApiOperationInput<"getAnalyticsUsersDetailsJob">;
  "getAnalyticsUsersDetailsJobResults": GenesysCloudFullApiOperationInput<"getAnalyticsUsersDetailsJobResults">;
  "getAnalyticsUsersDetailsJobsAvailability": GenesysCloudFullApiOperationInput<"getAnalyticsUsersDetailsJobsAvailability">;
  "patchAnalyticsReportingSettings": GenesysCloudFullApiOperationInput<"patchAnalyticsReportingSettings">;
  "postAnalyticsActionsAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsActionsAggregatesJobs">;
  "postAnalyticsActionsAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsActionsAggregatesQuery">;
  "postAnalyticsAgentcopilotsAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsAgentcopilotsAggregatesQuery">;
  "postAnalyticsAgentsStatusCounts": GenesysCloudFullApiOperationInput<"postAnalyticsAgentsStatusCounts">;
  "postAnalyticsAgentsStatusQuery": GenesysCloudFullApiOperationInput<"postAnalyticsAgentsStatusQuery">;
  "postAnalyticsBotsAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsBotsAggregatesJobs">;
  "postAnalyticsBotsAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsBotsAggregatesQuery">;
  "postAnalyticsCasemanagementAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsCasemanagementAggregatesJobs">;
  "postAnalyticsCasemanagementAggregatesQuery": GenesysCloudFullApiOperationInput<"postAnalyticsCasemanagementAggregatesQuery">;
  "postAnalyticsConversationDetailsProperties": GenesysCloudFullApiOperationInput<"postAnalyticsConversationDetailsProperties">;
  "postAnalyticsConversationsActivityQuery": GenesysCloudFullApiOperationInput<"postAnalyticsConversationsActivityQuery">;
  "postAnalyticsConversationsAggregatesJobs": GenesysCloudFullApiOperationInput<"postAnalyticsConversationsAggregatesJobs">;
}

export interface GenesysCloudFullApiAnalytics01GeneratedClient {
  DeleteAnalyticsActionsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsActionsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsActionsAggregatesJob"]>;
  DeleteAnalyticsBotsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsBotsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsBotsAggregatesJob"]>;
  DeleteAnalyticsCasemanagementAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsCasemanagementAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsCasemanagementAggregatesJob"]>;
  DeleteAnalyticsConversationsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsConversationsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsConversationsAggregatesJob"]>;
  DeleteAnalyticsConversationsDetailsJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsConversationsDetailsJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsConversationsDetailsJob"]>;
  DeleteAnalyticsEvaluationsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsEvaluationsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsEvaluationsAggregatesJob"]>;
  DeleteAnalyticsFlowexecutionsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsFlowexecutionsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsFlowexecutionsAggregatesJob"]>;
  DeleteAnalyticsFlowsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsFlowsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsFlowsAggregatesJob"]>;
  DeleteAnalyticsJourneysAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsJourneysAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsJourneysAggregatesJob"]>;
  DeleteAnalyticsKnowledgeAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsKnowledgeAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsKnowledgeAggregatesJob"]>;
  DeleteAnalyticsResolutionsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsResolutionsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsResolutionsAggregatesJob"]>;
  DeleteAnalyticsSummariesAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsSummariesAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsSummariesAggregatesJob"]>;
  DeleteAnalyticsSurveysAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsSurveysAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsSurveysAggregatesJob"]>;
  DeleteAnalyticsTaskmanagementAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsTaskmanagementAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsTaskmanagementAggregatesJob"]>;
  DeleteAnalyticsTranscriptsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsTranscriptsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsTranscriptsAggregatesJob"]>;
  DeleteAnalyticsUsersAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsUsersAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsUsersAggregatesJob"]>;
  DeleteAnalyticsUsersDetailsJob(...args: GenesysCloudFullApiOperationArgs<"deleteAnalyticsUsersDetailsJob">): Promise<GenesysCloudFullApiOperationResponseMap["deleteAnalyticsUsersDetailsJob"]>;
  GetAnalyticsActionsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsActionsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsActionsAggregatesJob"]>;
  GetAnalyticsActionsAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsActionsAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsActionsAggregatesJobResults"]>;
  GetAnalyticsAgentStatus(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsAgentStatus">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsAgentStatus"]>;
  GetAnalyticsBotflowDivisionsReportingturns(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsBotflowDivisionsReportingturns">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsBotflowDivisionsReportingturns"]>;
  GetAnalyticsBotflowReportingturns(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsBotflowReportingturns">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsBotflowReportingturns"]>;
  GetAnalyticsBotflowSessions(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsBotflowSessions">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsBotflowSessions"]>;
  GetAnalyticsBotsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsBotsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsBotsAggregatesJob"]>;
  GetAnalyticsBotsAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsBotsAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsBotsAggregatesJobResults"]>;
  GetAnalyticsCasemanagementAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsCasemanagementAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsCasemanagementAggregatesJob"]>;
  GetAnalyticsCasemanagementAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsCasemanagementAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsCasemanagementAggregatesJobResults"]>;
  GetAnalyticsConversationDetails(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsConversationDetails">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsConversationDetails"]>;
  GetAnalyticsConversationsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsConversationsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsConversationsAggregatesJob"]>;
  GetAnalyticsConversationsAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsConversationsAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsConversationsAggregatesJobResults"]>;
  GetAnalyticsConversationsDetails(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsConversationsDetails">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsConversationsDetails"]>;
  GetAnalyticsConversationsDetailsJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsConversationsDetailsJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsConversationsDetailsJob"]>;
  GetAnalyticsConversationsDetailsJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsConversationsDetailsJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsConversationsDetailsJobResults"]>;
  GetAnalyticsConversationsDetailsJobsAvailability(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsConversationsDetailsJobsAvailability">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsConversationsDetailsJobsAvailability"]>;
  GetAnalyticsDataretentionSettings(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsDataretentionSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsDataretentionSettings"]>;
  GetAnalyticsEvaluationsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsEvaluationsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsEvaluationsAggregatesJob"]>;
  GetAnalyticsEvaluationsAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsEvaluationsAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsEvaluationsAggregatesJobResults"]>;
  GetAnalyticsFlowexecutionsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsFlowexecutionsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsFlowexecutionsAggregatesJob"]>;
  GetAnalyticsFlowexecutionsAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsFlowexecutionsAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsFlowexecutionsAggregatesJobResults"]>;
  GetAnalyticsFlowsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsFlowsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsFlowsAggregatesJob"]>;
  GetAnalyticsFlowsAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsFlowsAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsFlowsAggregatesJobResults"]>;
  GetAnalyticsJourneysAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsJourneysAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsJourneysAggregatesJob"]>;
  GetAnalyticsJourneysAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsJourneysAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsJourneysAggregatesJobResults"]>;
  GetAnalyticsKnowledgeAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsKnowledgeAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsKnowledgeAggregatesJob"]>;
  GetAnalyticsKnowledgeAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsKnowledgeAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsKnowledgeAggregatesJobResults"]>;
  GetAnalyticsReportingDashboardsUser(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsReportingDashboardsUser">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsReportingDashboardsUser"]>;
  GetAnalyticsReportingDashboardsUsers(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsReportingDashboardsUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsReportingDashboardsUsers"]>;
  GetAnalyticsReportingExports(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsReportingExports">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsReportingExports"]>;
  GetAnalyticsReportingExportsMetadata(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsReportingExportsMetadata">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsReportingExportsMetadata"]>;
  GetAnalyticsReportingSettings(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsReportingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsReportingSettings"]>;
  GetAnalyticsReportingSettingsDashboardsQuery(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsReportingSettingsDashboardsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsReportingSettingsDashboardsQuery"]>;
  GetAnalyticsReportingSettingsUserDashboards(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsReportingSettingsUserDashboards">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsReportingSettingsUserDashboards"]>;
  GetAnalyticsResolutionsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsResolutionsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsResolutionsAggregatesJob"]>;
  GetAnalyticsResolutionsAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsResolutionsAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsResolutionsAggregatesJobResults"]>;
  GetAnalyticsSummariesAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsSummariesAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsSummariesAggregatesJob"]>;
  GetAnalyticsSummariesAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsSummariesAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsSummariesAggregatesJobResults"]>;
  GetAnalyticsSurveysAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsSurveysAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsSurveysAggregatesJob"]>;
  GetAnalyticsSurveysAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsSurveysAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsSurveysAggregatesJobResults"]>;
  GetAnalyticsTaskmanagementAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsTaskmanagementAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsTaskmanagementAggregatesJob"]>;
  GetAnalyticsTaskmanagementAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsTaskmanagementAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsTaskmanagementAggregatesJobResults"]>;
  GetAnalyticsTranscriptsAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsTranscriptsAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsTranscriptsAggregatesJob"]>;
  GetAnalyticsTranscriptsAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsTranscriptsAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsTranscriptsAggregatesJobResults"]>;
  GetAnalyticsUsersAggregatesJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsUsersAggregatesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsUsersAggregatesJob"]>;
  GetAnalyticsUsersAggregatesJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsUsersAggregatesJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsUsersAggregatesJobResults"]>;
  GetAnalyticsUsersDetailsJob(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsUsersDetailsJob">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsUsersDetailsJob"]>;
  GetAnalyticsUsersDetailsJobResults(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsUsersDetailsJobResults">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsUsersDetailsJobResults"]>;
  GetAnalyticsUsersDetailsJobsAvailability(...args: GenesysCloudFullApiOperationArgs<"getAnalyticsUsersDetailsJobsAvailability">): Promise<GenesysCloudFullApiOperationResponseMap["getAnalyticsUsersDetailsJobsAvailability"]>;
  PatchAnalyticsReportingSettings(...args: GenesysCloudFullApiOperationArgs<"patchAnalyticsReportingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchAnalyticsReportingSettings"]>;
  PostAnalyticsActionsAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsActionsAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsActionsAggregatesJobs"]>;
  PostAnalyticsActionsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsActionsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsActionsAggregatesQuery"]>;
  PostAnalyticsAgentcopilotsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsAgentcopilotsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsAgentcopilotsAggregatesQuery"]>;
  PostAnalyticsAgentsStatusCounts(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsAgentsStatusCounts">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsAgentsStatusCounts"]>;
  PostAnalyticsAgentsStatusQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsAgentsStatusQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsAgentsStatusQuery"]>;
  PostAnalyticsBotsAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsBotsAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsBotsAggregatesJobs"]>;
  PostAnalyticsBotsAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsBotsAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsBotsAggregatesQuery"]>;
  PostAnalyticsCasemanagementAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsCasemanagementAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsCasemanagementAggregatesJobs"]>;
  PostAnalyticsCasemanagementAggregatesQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsCasemanagementAggregatesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsCasemanagementAggregatesQuery"]>;
  PostAnalyticsConversationDetailsProperties(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsConversationDetailsProperties">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsConversationDetailsProperties"]>;
  PostAnalyticsConversationsActivityQuery(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsConversationsActivityQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsConversationsActivityQuery"]>;
  PostAnalyticsConversationsAggregatesJobs(...args: GenesysCloudFullApiOperationArgs<"postAnalyticsConversationsAggregatesJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postAnalyticsConversationsAggregatesJobs"]>;
}

export const GenesysCloudFullApiAnalytics01GeneratedFunctionNames = [
  "DeleteAnalyticsActionsAggregatesJob",
  "DeleteAnalyticsBotsAggregatesJob",
  "DeleteAnalyticsCasemanagementAggregatesJob",
  "DeleteAnalyticsConversationsAggregatesJob",
  "DeleteAnalyticsConversationsDetailsJob",
  "DeleteAnalyticsEvaluationsAggregatesJob",
  "DeleteAnalyticsFlowexecutionsAggregatesJob",
  "DeleteAnalyticsFlowsAggregatesJob",
  "DeleteAnalyticsJourneysAggregatesJob",
  "DeleteAnalyticsKnowledgeAggregatesJob",
  "DeleteAnalyticsResolutionsAggregatesJob",
  "DeleteAnalyticsSummariesAggregatesJob",
  "DeleteAnalyticsSurveysAggregatesJob",
  "DeleteAnalyticsTaskmanagementAggregatesJob",
  "DeleteAnalyticsTranscriptsAggregatesJob",
  "DeleteAnalyticsUsersAggregatesJob",
  "DeleteAnalyticsUsersDetailsJob",
  "GetAnalyticsActionsAggregatesJob",
  "GetAnalyticsActionsAggregatesJobResults",
  "GetAnalyticsAgentStatus",
  "GetAnalyticsBotflowDivisionsReportingturns",
  "GetAnalyticsBotflowReportingturns",
  "GetAnalyticsBotflowSessions",
  "GetAnalyticsBotsAggregatesJob",
  "GetAnalyticsBotsAggregatesJobResults",
  "GetAnalyticsCasemanagementAggregatesJob",
  "GetAnalyticsCasemanagementAggregatesJobResults",
  "GetAnalyticsConversationDetails",
  "GetAnalyticsConversationsAggregatesJob",
  "GetAnalyticsConversationsAggregatesJobResults",
  "GetAnalyticsConversationsDetails",
  "GetAnalyticsConversationsDetailsJob",
  "GetAnalyticsConversationsDetailsJobResults",
  "GetAnalyticsConversationsDetailsJobsAvailability",
  "GetAnalyticsDataretentionSettings",
  "GetAnalyticsEvaluationsAggregatesJob",
  "GetAnalyticsEvaluationsAggregatesJobResults",
  "GetAnalyticsFlowexecutionsAggregatesJob",
  "GetAnalyticsFlowexecutionsAggregatesJobResults",
  "GetAnalyticsFlowsAggregatesJob",
  "GetAnalyticsFlowsAggregatesJobResults",
  "GetAnalyticsJourneysAggregatesJob",
  "GetAnalyticsJourneysAggregatesJobResults",
  "GetAnalyticsKnowledgeAggregatesJob",
  "GetAnalyticsKnowledgeAggregatesJobResults",
  "GetAnalyticsReportingDashboardsUser",
  "GetAnalyticsReportingDashboardsUsers",
  "GetAnalyticsReportingExports",
  "GetAnalyticsReportingExportsMetadata",
  "GetAnalyticsReportingSettings",
  "GetAnalyticsReportingSettingsDashboardsQuery",
  "GetAnalyticsReportingSettingsUserDashboards",
  "GetAnalyticsResolutionsAggregatesJob",
  "GetAnalyticsResolutionsAggregatesJobResults",
  "GetAnalyticsSummariesAggregatesJob",
  "GetAnalyticsSummariesAggregatesJobResults",
  "GetAnalyticsSurveysAggregatesJob",
  "GetAnalyticsSurveysAggregatesJobResults",
  "GetAnalyticsTaskmanagementAggregatesJob",
  "GetAnalyticsTaskmanagementAggregatesJobResults",
  "GetAnalyticsTranscriptsAggregatesJob",
  "GetAnalyticsTranscriptsAggregatesJobResults",
  "GetAnalyticsUsersAggregatesJob",
  "GetAnalyticsUsersAggregatesJobResults",
  "GetAnalyticsUsersDetailsJob",
  "GetAnalyticsUsersDetailsJobResults",
  "GetAnalyticsUsersDetailsJobsAvailability",
  "PatchAnalyticsReportingSettings",
  "PostAnalyticsActionsAggregatesJobs",
  "PostAnalyticsActionsAggregatesQuery",
  "PostAnalyticsAgentcopilotsAggregatesQuery",
  "PostAnalyticsAgentsStatusCounts",
  "PostAnalyticsAgentsStatusQuery",
  "PostAnalyticsBotsAggregatesJobs",
  "PostAnalyticsBotsAggregatesQuery",
  "PostAnalyticsCasemanagementAggregatesJobs",
  "PostAnalyticsCasemanagementAggregatesQuery",
  "PostAnalyticsConversationDetailsProperties",
  "PostAnalyticsConversationsActivityQuery",
  "PostAnalyticsConversationsAggregatesJobs"
] as const satisfies readonly (keyof GenesysCloudFullApiAnalytics01GeneratedClient)[];

export function createGenesysCloudFullApiAnalytics01GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiAnalytics01GeneratedClient {
  return {
    DeleteAnalyticsActionsAggregatesJob: (...args) => callOperation("deleteAnalyticsActionsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsActionsAggregatesJob">)),
    DeleteAnalyticsBotsAggregatesJob: (...args) => callOperation("deleteAnalyticsBotsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsBotsAggregatesJob">)),
    DeleteAnalyticsCasemanagementAggregatesJob: (...args) => callOperation("deleteAnalyticsCasemanagementAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsCasemanagementAggregatesJob">)),
    DeleteAnalyticsConversationsAggregatesJob: (...args) => callOperation("deleteAnalyticsConversationsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsConversationsAggregatesJob">)),
    DeleteAnalyticsConversationsDetailsJob: (...args) => callOperation("deleteAnalyticsConversationsDetailsJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsConversationsDetailsJob">)),
    DeleteAnalyticsEvaluationsAggregatesJob: (...args) => callOperation("deleteAnalyticsEvaluationsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsEvaluationsAggregatesJob">)),
    DeleteAnalyticsFlowexecutionsAggregatesJob: (...args) => callOperation("deleteAnalyticsFlowexecutionsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsFlowexecutionsAggregatesJob">)),
    DeleteAnalyticsFlowsAggregatesJob: (...args) => callOperation("deleteAnalyticsFlowsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsFlowsAggregatesJob">)),
    DeleteAnalyticsJourneysAggregatesJob: (...args) => callOperation("deleteAnalyticsJourneysAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsJourneysAggregatesJob">)),
    DeleteAnalyticsKnowledgeAggregatesJob: (...args) => callOperation("deleteAnalyticsKnowledgeAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsKnowledgeAggregatesJob">)),
    DeleteAnalyticsResolutionsAggregatesJob: (...args) => callOperation("deleteAnalyticsResolutionsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsResolutionsAggregatesJob">)),
    DeleteAnalyticsSummariesAggregatesJob: (...args) => callOperation("deleteAnalyticsSummariesAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsSummariesAggregatesJob">)),
    DeleteAnalyticsSurveysAggregatesJob: (...args) => callOperation("deleteAnalyticsSurveysAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsSurveysAggregatesJob">)),
    DeleteAnalyticsTaskmanagementAggregatesJob: (...args) => callOperation("deleteAnalyticsTaskmanagementAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsTaskmanagementAggregatesJob">)),
    DeleteAnalyticsTranscriptsAggregatesJob: (...args) => callOperation("deleteAnalyticsTranscriptsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsTranscriptsAggregatesJob">)),
    DeleteAnalyticsUsersAggregatesJob: (...args) => callOperation("deleteAnalyticsUsersAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsUsersAggregatesJob">)),
    DeleteAnalyticsUsersDetailsJob: (...args) => callOperation("deleteAnalyticsUsersDetailsJob", ...(args as GenesysCloudFullApiOperationArgs<"deleteAnalyticsUsersDetailsJob">)),
    GetAnalyticsActionsAggregatesJob: (...args) => callOperation("getAnalyticsActionsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsActionsAggregatesJob">)),
    GetAnalyticsActionsAggregatesJobResults: (...args) => callOperation("getAnalyticsActionsAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsActionsAggregatesJobResults">)),
    GetAnalyticsAgentStatus: (...args) => callOperation("getAnalyticsAgentStatus", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsAgentStatus">)),
    GetAnalyticsBotflowDivisionsReportingturns: (...args) => callOperation("getAnalyticsBotflowDivisionsReportingturns", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsBotflowDivisionsReportingturns">)),
    GetAnalyticsBotflowReportingturns: (...args) => callOperation("getAnalyticsBotflowReportingturns", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsBotflowReportingturns">)),
    GetAnalyticsBotflowSessions: (...args) => callOperation("getAnalyticsBotflowSessions", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsBotflowSessions">)),
    GetAnalyticsBotsAggregatesJob: (...args) => callOperation("getAnalyticsBotsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsBotsAggregatesJob">)),
    GetAnalyticsBotsAggregatesJobResults: (...args) => callOperation("getAnalyticsBotsAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsBotsAggregatesJobResults">)),
    GetAnalyticsCasemanagementAggregatesJob: (...args) => callOperation("getAnalyticsCasemanagementAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsCasemanagementAggregatesJob">)),
    GetAnalyticsCasemanagementAggregatesJobResults: (...args) => callOperation("getAnalyticsCasemanagementAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsCasemanagementAggregatesJobResults">)),
    GetAnalyticsConversationDetails: (...args) => callOperation("getAnalyticsConversationDetails", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsConversationDetails">)),
    GetAnalyticsConversationsAggregatesJob: (...args) => callOperation("getAnalyticsConversationsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsConversationsAggregatesJob">)),
    GetAnalyticsConversationsAggregatesJobResults: (...args) => callOperation("getAnalyticsConversationsAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsConversationsAggregatesJobResults">)),
    GetAnalyticsConversationsDetails: (...args) => callOperation("getAnalyticsConversationsDetails", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsConversationsDetails">)),
    GetAnalyticsConversationsDetailsJob: (...args) => callOperation("getAnalyticsConversationsDetailsJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsConversationsDetailsJob">)),
    GetAnalyticsConversationsDetailsJobResults: (...args) => callOperation("getAnalyticsConversationsDetailsJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsConversationsDetailsJobResults">)),
    GetAnalyticsConversationsDetailsJobsAvailability: (...args) => callOperation("getAnalyticsConversationsDetailsJobsAvailability", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsConversationsDetailsJobsAvailability">)),
    GetAnalyticsDataretentionSettings: (...args) => callOperation("getAnalyticsDataretentionSettings", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsDataretentionSettings">)),
    GetAnalyticsEvaluationsAggregatesJob: (...args) => callOperation("getAnalyticsEvaluationsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsEvaluationsAggregatesJob">)),
    GetAnalyticsEvaluationsAggregatesJobResults: (...args) => callOperation("getAnalyticsEvaluationsAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsEvaluationsAggregatesJobResults">)),
    GetAnalyticsFlowexecutionsAggregatesJob: (...args) => callOperation("getAnalyticsFlowexecutionsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsFlowexecutionsAggregatesJob">)),
    GetAnalyticsFlowexecutionsAggregatesJobResults: (...args) => callOperation("getAnalyticsFlowexecutionsAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsFlowexecutionsAggregatesJobResults">)),
    GetAnalyticsFlowsAggregatesJob: (...args) => callOperation("getAnalyticsFlowsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsFlowsAggregatesJob">)),
    GetAnalyticsFlowsAggregatesJobResults: (...args) => callOperation("getAnalyticsFlowsAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsFlowsAggregatesJobResults">)),
    GetAnalyticsJourneysAggregatesJob: (...args) => callOperation("getAnalyticsJourneysAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsJourneysAggregatesJob">)),
    GetAnalyticsJourneysAggregatesJobResults: (...args) => callOperation("getAnalyticsJourneysAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsJourneysAggregatesJobResults">)),
    GetAnalyticsKnowledgeAggregatesJob: (...args) => callOperation("getAnalyticsKnowledgeAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsKnowledgeAggregatesJob">)),
    GetAnalyticsKnowledgeAggregatesJobResults: (...args) => callOperation("getAnalyticsKnowledgeAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsKnowledgeAggregatesJobResults">)),
    GetAnalyticsReportingDashboardsUser: (...args) => callOperation("getAnalyticsReportingDashboardsUser", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsReportingDashboardsUser">)),
    GetAnalyticsReportingDashboardsUsers: (...args) => callOperation("getAnalyticsReportingDashboardsUsers", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsReportingDashboardsUsers">)),
    GetAnalyticsReportingExports: (...args) => callOperation("getAnalyticsReportingExports", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsReportingExports">)),
    GetAnalyticsReportingExportsMetadata: (...args) => callOperation("getAnalyticsReportingExportsMetadata", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsReportingExportsMetadata">)),
    GetAnalyticsReportingSettings: (...args) => callOperation("getAnalyticsReportingSettings", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsReportingSettings">)),
    GetAnalyticsReportingSettingsDashboardsQuery: (...args) => callOperation("getAnalyticsReportingSettingsDashboardsQuery", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsReportingSettingsDashboardsQuery">)),
    GetAnalyticsReportingSettingsUserDashboards: (...args) => callOperation("getAnalyticsReportingSettingsUserDashboards", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsReportingSettingsUserDashboards">)),
    GetAnalyticsResolutionsAggregatesJob: (...args) => callOperation("getAnalyticsResolutionsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsResolutionsAggregatesJob">)),
    GetAnalyticsResolutionsAggregatesJobResults: (...args) => callOperation("getAnalyticsResolutionsAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsResolutionsAggregatesJobResults">)),
    GetAnalyticsSummariesAggregatesJob: (...args) => callOperation("getAnalyticsSummariesAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsSummariesAggregatesJob">)),
    GetAnalyticsSummariesAggregatesJobResults: (...args) => callOperation("getAnalyticsSummariesAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsSummariesAggregatesJobResults">)),
    GetAnalyticsSurveysAggregatesJob: (...args) => callOperation("getAnalyticsSurveysAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsSurveysAggregatesJob">)),
    GetAnalyticsSurveysAggregatesJobResults: (...args) => callOperation("getAnalyticsSurveysAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsSurveysAggregatesJobResults">)),
    GetAnalyticsTaskmanagementAggregatesJob: (...args) => callOperation("getAnalyticsTaskmanagementAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsTaskmanagementAggregatesJob">)),
    GetAnalyticsTaskmanagementAggregatesJobResults: (...args) => callOperation("getAnalyticsTaskmanagementAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsTaskmanagementAggregatesJobResults">)),
    GetAnalyticsTranscriptsAggregatesJob: (...args) => callOperation("getAnalyticsTranscriptsAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsTranscriptsAggregatesJob">)),
    GetAnalyticsTranscriptsAggregatesJobResults: (...args) => callOperation("getAnalyticsTranscriptsAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsTranscriptsAggregatesJobResults">)),
    GetAnalyticsUsersAggregatesJob: (...args) => callOperation("getAnalyticsUsersAggregatesJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsUsersAggregatesJob">)),
    GetAnalyticsUsersAggregatesJobResults: (...args) => callOperation("getAnalyticsUsersAggregatesJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsUsersAggregatesJobResults">)),
    GetAnalyticsUsersDetailsJob: (...args) => callOperation("getAnalyticsUsersDetailsJob", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsUsersDetailsJob">)),
    GetAnalyticsUsersDetailsJobResults: (...args) => callOperation("getAnalyticsUsersDetailsJobResults", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsUsersDetailsJobResults">)),
    GetAnalyticsUsersDetailsJobsAvailability: (...args) => callOperation("getAnalyticsUsersDetailsJobsAvailability", ...(args as GenesysCloudFullApiOperationArgs<"getAnalyticsUsersDetailsJobsAvailability">)),
    PatchAnalyticsReportingSettings: (...args) => callOperation("patchAnalyticsReportingSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchAnalyticsReportingSettings">)),
    PostAnalyticsActionsAggregatesJobs: (...args) => callOperation("postAnalyticsActionsAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsActionsAggregatesJobs">)),
    PostAnalyticsActionsAggregatesQuery: (...args) => callOperation("postAnalyticsActionsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsActionsAggregatesQuery">)),
    PostAnalyticsAgentcopilotsAggregatesQuery: (...args) => callOperation("postAnalyticsAgentcopilotsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsAgentcopilotsAggregatesQuery">)),
    PostAnalyticsAgentsStatusCounts: (...args) => callOperation("postAnalyticsAgentsStatusCounts", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsAgentsStatusCounts">)),
    PostAnalyticsAgentsStatusQuery: (...args) => callOperation("postAnalyticsAgentsStatusQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsAgentsStatusQuery">)),
    PostAnalyticsBotsAggregatesJobs: (...args) => callOperation("postAnalyticsBotsAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsBotsAggregatesJobs">)),
    PostAnalyticsBotsAggregatesQuery: (...args) => callOperation("postAnalyticsBotsAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsBotsAggregatesQuery">)),
    PostAnalyticsCasemanagementAggregatesJobs: (...args) => callOperation("postAnalyticsCasemanagementAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsCasemanagementAggregatesJobs">)),
    PostAnalyticsCasemanagementAggregatesQuery: (...args) => callOperation("postAnalyticsCasemanagementAggregatesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsCasemanagementAggregatesQuery">)),
    PostAnalyticsConversationDetailsProperties: (...args) => callOperation("postAnalyticsConversationDetailsProperties", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsConversationDetailsProperties">)),
    PostAnalyticsConversationsActivityQuery: (...args) => callOperation("postAnalyticsConversationsActivityQuery", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsConversationsActivityQuery">)),
    PostAnalyticsConversationsAggregatesJobs: (...args) => callOperation("postAnalyticsConversationsAggregatesJobs", ...(args as GenesysCloudFullApiOperationArgs<"postAnalyticsConversationsAggregatesJobs">)),
  };
}
