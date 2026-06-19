// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiReportingOperationKeys = [
  "reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history",
  "reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history",
  "reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent",
  "reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history",
  "reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history",
  "reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history",
  "reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance",
  "reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance",
  "reporting-reporting-api-docs:get_/contacts:GET:/contacts",
  "reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}",
  "reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts",
  "reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts",
  "reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed",
  "reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history",
  "reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history",
  "reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data",
  "reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data",
  "reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary",
  "reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary",
  "reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary",
  "reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary",
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total",
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total",
  "reporting-reporting-api-docs:CustomReports:GET:/reports",
  "reporting-reporting-api-docs:ReportJobs:GET:/report-jobs",
  "reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}",
  "reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}",
  "reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}",
  "reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy"
] as const;
export type NiceCxoneFullApiReportingOperationKey = typeof NiceCxoneFullApiReportingOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiReportingOperationPathParamMap {
  "reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history": {};
  "reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history": { "agentId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent": { "agentId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history": { "agentId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history": {};
  "reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history": { "agentId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance": {};
  "reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance": { "agentId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:get_/contacts:GET:/contacts": {};
  "reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}": { "contactId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts": {};
  "reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts": { "contactId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed": {};
  "reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history": {};
  "reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history": { "contactId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data": {};
  "reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data": { "contactId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary": {};
  "reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary": { "skillId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary": {};
  "reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary": { "skillId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total": {};
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total": { "teamId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:CustomReports:GET:/reports": {};
  "reporting-reporting-api-docs:ReportJobs:GET:/report-jobs": {};
  "reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}": { "jobId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}": { "reportId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}": { "reportId": NiceCxoneFullApiPathParamValue };
  "reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy": { "contactId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiReportingOperationRequestMap {
  "reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history">;
  "reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history">;
  "reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent">;
  "reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history">;
  "reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history">;
  "reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history">;
  "reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance">;
  "reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance">;
  "reporting-reporting-api-docs:get_/contacts:GET:/contacts": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:get_/contacts:GET:/contacts">;
  "reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}">;
  "reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts">;
  "reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts">;
  "reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed">;
  "reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history">;
  "reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history">;
  "reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data">;
  "reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data">;
  "reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary">;
  "reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary">;
  "reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary">;
  "reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary">;
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total">;
  "reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total">;
  "reporting-reporting-api-docs:CustomReports:GET:/reports": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:CustomReports:GET:/reports">;
  "reporting-reporting-api-docs:ReportJobs:GET:/report-jobs": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:ReportJobs:GET:/report-jobs">;
  "reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}">;
  "reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}">;
  "reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}">;
  "reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy": NiceCxoneFullApiOperationInput<"reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy">;
}

export interface NiceCxoneFullApiReportingGeneratedClient {
  ReportingReportingApiDocsGetAgentsInteractionHistory(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history"]>;
  ReportingReportingApiDocsGetAgentHistoryByid(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history"]>;
  ReportingReportingApiDocsRecentContactHistory(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent"]>;
  ReportingReportingApiDocsAgentLoginHistory(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history"]>;
  ReportingReportingApiDocsGetAgentsStateHistory(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history"]>;
  ReportingReportingApiDocsGetAgentsAgentIdStateHistory(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history"]>;
  ReportingReportingApiDocsPerformanceSummary(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance"]>;
  ReportingReportingApiDocsAgentPerformanceSummary(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance"]>;
  ReportingReportingApiDocsGetContacts(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/contacts:GET:/contacts">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:get_/contacts:GET:/contacts"]>;
  ReportingReportingApiDocsGetContactsContactId(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}"]>;
  ReportingReportingApiDocsSmsTranscripts(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts"]>;
  ReportingReportingApiDocsContactIdSmsTranscripts(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts"]>;
  ReportingReportingApiDocsCompletedContactDetails(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed"]>;
  ReportingReportingApiDocsGetContactsStateHistory(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history"]>;
  ReportingReportingApiDocsContactStateHistory(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history"]>;
  ReportingReportingApiDocsGetContactsCustomData(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data"]>;
  ReportingReportingApiDocsContactCustomData(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data"]>;
  ReportingReportingApiDocsGetFullSkillSummaries(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary"]>;
  ReportingReportingApiDocsGetSkillsSkillIdSummary(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary"]>;
  ReportingReportingApiDocsGetFullSLASummaries(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary"]>;
  ReportingReportingApiDocsGetFullSLASkillSummary(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary"]>;
  ReportingReportingApiDocsTeamPerformanceSummaryTotalsAll(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total"]>;
  ReportingReportingApiDocsTeamPerformanceSummaryTotals(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total"]>;
  ReportingReportingApiDocsCustomReports(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:CustomReports:GET:/reports">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:CustomReports:GET:/reports"]>;
  ReportingReportingApiDocsReportJobs(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:ReportJobs:GET:/report-jobs">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:ReportJobs:GET:/report-jobs"]>;
  ReportingReportingApiDocsReportJobByID(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}"]>;
  ReportingReportingApiDocsStartReportJob(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}"]>;
  ReportingReportingApiDocsGenerateADatadownloadReportFile(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}"]>;
  ReportingReportingApiDocsGetContactsIdHierarchy(...args: NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy">): Promise<NiceCxoneFullApiOperationResponseMap["reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy"]>;
}

export const NiceCxoneFullApiReportingGeneratedFunctionNames = [
  "ReportingReportingApiDocsGetAgentsInteractionHistory",
  "ReportingReportingApiDocsGetAgentHistoryByid",
  "ReportingReportingApiDocsRecentContactHistory",
  "ReportingReportingApiDocsAgentLoginHistory",
  "ReportingReportingApiDocsGetAgentsStateHistory",
  "ReportingReportingApiDocsGetAgentsAgentIdStateHistory",
  "ReportingReportingApiDocsPerformanceSummary",
  "ReportingReportingApiDocsAgentPerformanceSummary",
  "ReportingReportingApiDocsGetContacts",
  "ReportingReportingApiDocsGetContactsContactId",
  "ReportingReportingApiDocsSmsTranscripts",
  "ReportingReportingApiDocsContactIdSmsTranscripts",
  "ReportingReportingApiDocsCompletedContactDetails",
  "ReportingReportingApiDocsGetContactsStateHistory",
  "ReportingReportingApiDocsContactStateHistory",
  "ReportingReportingApiDocsGetContactsCustomData",
  "ReportingReportingApiDocsContactCustomData",
  "ReportingReportingApiDocsGetFullSkillSummaries",
  "ReportingReportingApiDocsGetSkillsSkillIdSummary",
  "ReportingReportingApiDocsGetFullSLASummaries",
  "ReportingReportingApiDocsGetFullSLASkillSummary",
  "ReportingReportingApiDocsTeamPerformanceSummaryTotalsAll",
  "ReportingReportingApiDocsTeamPerformanceSummaryTotals",
  "ReportingReportingApiDocsCustomReports",
  "ReportingReportingApiDocsReportJobs",
  "ReportingReportingApiDocsReportJobByID",
  "ReportingReportingApiDocsStartReportJob",
  "ReportingReportingApiDocsGenerateADatadownloadReportFile",
  "ReportingReportingApiDocsGetContactsIdHierarchy"
] as const satisfies readonly (keyof NiceCxoneFullApiReportingGeneratedClient)[];

export function createNiceCxoneFullApiReportingGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiReportingGeneratedClient {
  return {
    ReportingReportingApiDocsGetAgentsInteractionHistory: (...args) => callOperation("reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/agents/interaction-history:GET:/agents/interaction-history">)),
    ReportingReportingApiDocsGetAgentHistoryByid: (...args) => callOperation("reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:getAgentHistoryByid:GET:/agents/{agentId}/interaction-history">)),
    ReportingReportingApiDocsRecentContactHistory: (...args) => callOperation("reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:RecentContactHistory:GET:/agents/{agentId}/interaction-recent">)),
    ReportingReportingApiDocsAgentLoginHistory: (...args) => callOperation("reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:AgentLoginHistory:GET:/agents/{agentId}/login-history">)),
    ReportingReportingApiDocsGetAgentsStateHistory: (...args) => callOperation("reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/agents/state-history:GET:/agents/state-history">)),
    ReportingReportingApiDocsGetAgentsAgentIdStateHistory: (...args) => callOperation("reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/agents/{agentId}/state-history:GET:/agents/{agentId}/state-history">)),
    ReportingReportingApiDocsPerformanceSummary: (...args) => callOperation("reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:PerformanceSummary:GET:/agents/performance">)),
    ReportingReportingApiDocsAgentPerformanceSummary: (...args) => callOperation("reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:AgentPerformanceSummary:GET:/agents/{agentId}/performance">)),
    ReportingReportingApiDocsGetContacts: (...args) => callOperation("reporting-reporting-api-docs:get_/contacts:GET:/contacts", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/contacts:GET:/contacts">)),
    ReportingReportingApiDocsGetContactsContactId: (...args) => callOperation("reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/contacts/{contactId}:GET:/contacts/{contactId}">)),
    ReportingReportingApiDocsSmsTranscripts: (...args) => callOperation("reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:SmsTranscripts:GET:/contacts/sms-transcripts">)),
    ReportingReportingApiDocsContactIdSmsTranscripts: (...args) => callOperation("reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:ContactIdSmsTranscripts:GET:/contacts/{contactId}/sms-transcripts">)),
    ReportingReportingApiDocsCompletedContactDetails: (...args) => callOperation("reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:CompletedContactDetails:GET:/contacts/completed">)),
    ReportingReportingApiDocsGetContactsStateHistory: (...args) => callOperation("reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/contacts/state-history:GET:/contacts/state-history">)),
    ReportingReportingApiDocsContactStateHistory: (...args) => callOperation("reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:ContactStateHistory:GET:/contacts/{contactId}/state-history">)),
    ReportingReportingApiDocsGetContactsCustomData: (...args) => callOperation("reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/contacts/custom-data:GET:/contacts/custom-data">)),
    ReportingReportingApiDocsContactCustomData: (...args) => callOperation("reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:ContactCustomData:GET:/contacts/{contactId}/custom-data">)),
    ReportingReportingApiDocsGetFullSkillSummaries: (...args) => callOperation("reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:getFullSkillSummaries:GET:/skills/summary">)),
    ReportingReportingApiDocsGetSkillsSkillIdSummary: (...args) => callOperation("reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get_/skills/{skillId}/summary:GET:/skills/{skillId}/summary">)),
    ReportingReportingApiDocsGetFullSLASummaries: (...args) => callOperation("reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:getFullSLASummaries:GET:/skills/sla-summary">)),
    ReportingReportingApiDocsGetFullSLASkillSummary: (...args) => callOperation("reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:getFullSLASkillSummary:GET:/skills/{skillId}/sla-summary">)),
    ReportingReportingApiDocsTeamPerformanceSummaryTotalsAll: (...args) => callOperation("reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:TeamPerformanceSummaryTotalsAll:GET:/teams/performance-total">)),
    ReportingReportingApiDocsTeamPerformanceSummaryTotals: (...args) => callOperation("reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:TeamPerformanceSummaryTotals:GET:/teams/{teamId}/performance-total">)),
    ReportingReportingApiDocsCustomReports: (...args) => callOperation("reporting-reporting-api-docs:CustomReports:GET:/reports", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:CustomReports:GET:/reports">)),
    ReportingReportingApiDocsReportJobs: (...args) => callOperation("reporting-reporting-api-docs:ReportJobs:GET:/report-jobs", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:ReportJobs:GET:/report-jobs">)),
    ReportingReportingApiDocsReportJobByID: (...args) => callOperation("reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:ReportJobByID:GET:/report-jobs/{jobId}">)),
    ReportingReportingApiDocsStartReportJob: (...args) => callOperation("reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:StartReportJob:POST:/report-jobs/{reportId}">)),
    ReportingReportingApiDocsGenerateADatadownloadReportFile: (...args) => callOperation("reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:GenerateADatadownloadReportFile:POST:/report-jobs/datadownload/{reportId}">)),
    ReportingReportingApiDocsGetContactsIdHierarchy: (...args) => callOperation("reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy", ...(args as NiceCxoneFullApiOperationArgs<"reporting-reporting-api-docs:get-contacts-id-hierarchy:GET:/contacts/{contactId}/hierarchy">)),
  };
}
