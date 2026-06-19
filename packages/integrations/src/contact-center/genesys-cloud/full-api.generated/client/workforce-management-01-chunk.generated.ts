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
export const GenesysCloudFullApiWorkforceManagement01OperationKeys = [
  "deleteWorkforcemanagementBusinessunit",
  "deleteWorkforcemanagementBusinessunitActivitycode",
  "deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory",
  "deleteWorkforcemanagementBusinessunitPlanninggroup",
  "deleteWorkforcemanagementBusinessunitSchedulebid",
  "deleteWorkforcemanagementBusinessunitSchedulebidGroup",
  "deleteWorkforcemanagementBusinessunitSchedulingRun",
  "deleteWorkforcemanagementBusinessunitServicegoaltemplate",
  "deleteWorkforcemanagementBusinessunitStaffinggroup",
  "deleteWorkforcemanagementBusinessunitTimeofflimit",
  "deleteWorkforcemanagementBusinessunitTimeoffplan",
  "deleteWorkforcemanagementBusinessunitWeekSchedule",
  "deleteWorkforcemanagementBusinessunitWeekShorttermforecast",
  "deleteWorkforcemanagementBusinessunitWorkplanbid",
  "deleteWorkforcemanagementBusinessunitWorkplanbidGroup",
  "deleteWorkforcemanagementCalendarUrlIcs",
  "deleteWorkforcemanagementManagementunit",
  "deleteWorkforcemanagementManagementunitTimeofflimit",
  "deleteWorkforcemanagementManagementunitTimeoffplan",
  "deleteWorkforcemanagementManagementunitWorkplan",
  "deleteWorkforcemanagementManagementunitWorkplanrotation",
  "getWorkforcemanagementAdherence",
  "getWorkforcemanagementAdherenceExplanation",
  "getWorkforcemanagementAdherenceExplanationsJob",
  "getWorkforcemanagementAdherenceHistoricalBulkJob",
  "getWorkforcemanagementAdherenceHistoricalJob",
  "getWorkforcemanagementAgentAdherenceExplanation",
  "getWorkforcemanagementAgentManagementunit",
  "getWorkforcemanagementAgentsMeAdherenceHistoricalJob",
  "getWorkforcemanagementAgentsMeManagementunit",
  "getWorkforcemanagementAlternativeshiftsOffersJob",
  "getWorkforcemanagementAlternativeshiftsOffersSearchJob",
  "getWorkforcemanagementAlternativeshiftsSettings",
  "getWorkforcemanagementAlternativeshiftsTrade",
  "getWorkforcemanagementAlternativeshiftsTrades",
  "getWorkforcemanagementAlternativeshiftsTradesJob",
  "getWorkforcemanagementAlternativeshiftsTradesStateJob",
  "getWorkforcemanagementBusinessunit",
  "getWorkforcemanagementBusinessunitActivitycode",
  "getWorkforcemanagementBusinessunitActivitycodes",
  "getWorkforcemanagementBusinessunitActivityplan",
  "getWorkforcemanagementBusinessunitActivityplanRunsJob",
  "getWorkforcemanagementBusinessunitActivityplans",
  "getWorkforcemanagementBusinessunitActivityplansJobs",
  "getWorkforcemanagementBusinessunitAlternativeshiftsSettings",
  "getWorkforcemanagementBusinessunitAlternativeshiftsTrade",
  "getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob",
  "getWorkforcemanagementBusinessunitCapacityplan",
  "getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast",
  "getWorkforcemanagementBusinessunitCapacityplans",
  "getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations",
  "getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements",
  "getWorkforcemanagementBusinessunitIntradayPlanninggroups",
  "getWorkforcemanagementBusinessunitManagementunits",
  "getWorkforcemanagementBusinessunitMinimumstaffingSettings",
  "getWorkforcemanagementBusinessunitOpportunity",
  "getWorkforcemanagementBusinessunitPlanninggroup",
  "getWorkforcemanagementBusinessunitPlanninggroups",
  "getWorkforcemanagementBusinessunits",
  "getWorkforcemanagementBusinessunitSchedulebid",
  "getWorkforcemanagementBusinessunitSchedulebidGroup",
  "getWorkforcemanagementBusinessunitSchedulebidGroupPreferences",
  "getWorkforcemanagementBusinessunitSchedulebidGroupsSummary",
  "getWorkforcemanagementBusinessunitSchedulebids",
  "getWorkforcemanagementBusinessunitSchedulerSettings",
  "getWorkforcemanagementBusinessunitSchedulingRun",
  "getWorkforcemanagementBusinessunitSchedulingRunResult",
  "getWorkforcemanagementBusinessunitSchedulingRuns",
  "getWorkforcemanagementBusinessunitsDivisionviews",
  "getWorkforcemanagementBusinessunitServicegoaltemplate",
  "getWorkforcemanagementBusinessunitServicegoaltemplates",
  "getWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob",
  "getWorkforcemanagementBusinessunitShifttradingTradesQueryJob",
  "getWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob",
  "getWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob",
  "getWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob",
  "getWorkforcemanagementBusinessunitStaffinggroup",
  "getWorkforcemanagementBusinessunitStaffinggroups",
  "getWorkforcemanagementBusinessunitTimeofflimit",
  "getWorkforcemanagementBusinessunitTimeofflimits"
] as const;
export type GenesysCloudFullApiWorkforceManagement01OperationKey = typeof GenesysCloudFullApiWorkforceManagement01OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiWorkforceManagement01OperationPathParamMap {
  "deleteWorkforcemanagementBusinessunit": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitActivitycode": { "businessUnitId": GenesysCloudFullApiPathParamValue; "activityCodeId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory": { "businessUnitId": GenesysCloudFullApiPathParamValue; "capacityPlanId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitPlanninggroup": { "businessUnitId": GenesysCloudFullApiPathParamValue; "planningGroupId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitSchedulebid": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitSchedulebidGroup": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue; "bidGroupId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitSchedulingRun": { "businessUnitId": GenesysCloudFullApiPathParamValue; "runId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitServicegoaltemplate": { "businessUnitId": GenesysCloudFullApiPathParamValue; "serviceGoalTemplateId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitStaffinggroup": { "businessUnitId": GenesysCloudFullApiPathParamValue; "staffingGroupId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitTimeofflimit": { "businessUnitId": GenesysCloudFullApiPathParamValue; "timeOffLimitId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitTimeoffplan": { "businessUnitId": GenesysCloudFullApiPathParamValue; "timeOffPlanId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitWeekSchedule": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekId": GenesysCloudFullApiPathParamValue; "scheduleId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitWeekShorttermforecast": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekDateId": GenesysCloudFullApiPathParamValue; "forecastId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitWorkplanbid": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementBusinessunitWorkplanbidGroup": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue; "bidGroupId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementCalendarUrlIcs": {};
  "deleteWorkforcemanagementManagementunit": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementManagementunitTimeofflimit": { "managementUnitId": GenesysCloudFullApiPathParamValue; "timeOffLimitId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementManagementunitTimeoffplan": { "managementUnitId": GenesysCloudFullApiPathParamValue; "timeOffPlanId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementManagementunitWorkplan": { "managementUnitId": GenesysCloudFullApiPathParamValue; "workPlanId": GenesysCloudFullApiPathParamValue };
  "deleteWorkforcemanagementManagementunitWorkplanrotation": { "managementUnitId": GenesysCloudFullApiPathParamValue; "workPlanRotationId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementAdherence": {};
  "getWorkforcemanagementAdherenceExplanation": { "explanationId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementAdherenceExplanationsJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementAdherenceHistoricalBulkJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementAdherenceHistoricalJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementAgentAdherenceExplanation": { "agentId": GenesysCloudFullApiPathParamValue; "explanationId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementAgentManagementunit": { "agentId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementAgentsMeAdherenceHistoricalJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementAgentsMeManagementunit": {};
  "getWorkforcemanagementAlternativeshiftsOffersJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementAlternativeshiftsOffersSearchJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementAlternativeshiftsSettings": {};
  "getWorkforcemanagementAlternativeshiftsTrade": { "tradeId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementAlternativeshiftsTrades": {};
  "getWorkforcemanagementAlternativeshiftsTradesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementAlternativeshiftsTradesStateJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunit": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitActivitycode": { "businessUnitId": GenesysCloudFullApiPathParamValue; "activityCodeId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitActivitycodes": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitActivityplan": { "businessUnitId": GenesysCloudFullApiPathParamValue; "activityPlanId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitActivityplanRunsJob": { "businessUnitId": GenesysCloudFullApiPathParamValue; "activityPlanId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitActivityplans": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitActivityplansJobs": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitAlternativeshiftsSettings": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitAlternativeshiftsTrade": { "businessUnitId": GenesysCloudFullApiPathParamValue; "tradeId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob": { "businessUnitId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitCapacityplan": { "businessUnitId": GenesysCloudFullApiPathParamValue; "capacityPlanId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekDateId": GenesysCloudFullApiPathParamValue; "forecastId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitCapacityplans": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations": { "businessUnitId": GenesysCloudFullApiPathParamValue; "capacityPlanId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements": { "businessUnitId": GenesysCloudFullApiPathParamValue; "capacityPlanId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitIntradayPlanninggroups": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitManagementunits": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitMinimumstaffingSettings": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitOpportunity": { "businessUnitId": GenesysCloudFullApiPathParamValue; "opportunityId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitPlanninggroup": { "businessUnitId": GenesysCloudFullApiPathParamValue; "planningGroupId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitPlanninggroups": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunits": {};
  "getWorkforcemanagementBusinessunitSchedulebid": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitSchedulebidGroup": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue; "bidGroupId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitSchedulebidGroupPreferences": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue; "bidGroupId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitSchedulebidGroupsSummary": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitSchedulebids": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitSchedulerSettings": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitSchedulingRun": { "businessUnitId": GenesysCloudFullApiPathParamValue; "runId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitSchedulingRunResult": { "businessUnitId": GenesysCloudFullApiPathParamValue; "runId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitSchedulingRuns": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitsDivisionviews": {};
  "getWorkforcemanagementBusinessunitServicegoaltemplate": { "businessUnitId": GenesysCloudFullApiPathParamValue; "serviceGoalTemplateId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitServicegoaltemplates": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob": { "businessUnitId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitShifttradingTradesQueryJob": { "businessUnitId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob": { "businessUnitId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob": { "businessUnitId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob": { "businessUnitId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitStaffinggroup": { "businessUnitId": GenesysCloudFullApiPathParamValue; "staffingGroupId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitStaffinggroups": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitTimeofflimit": { "businessUnitId": GenesysCloudFullApiPathParamValue; "timeOffLimitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitTimeofflimits": { "businessUnitId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiWorkforceManagement01OperationRequestMap {
  "deleteWorkforcemanagementBusinessunit": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunit">;
  "deleteWorkforcemanagementBusinessunitActivitycode": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitActivitycode">;
  "deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory">;
  "deleteWorkforcemanagementBusinessunitPlanninggroup": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitPlanninggroup">;
  "deleteWorkforcemanagementBusinessunitSchedulebid": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitSchedulebid">;
  "deleteWorkforcemanagementBusinessunitSchedulebidGroup": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitSchedulebidGroup">;
  "deleteWorkforcemanagementBusinessunitSchedulingRun": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitSchedulingRun">;
  "deleteWorkforcemanagementBusinessunitServicegoaltemplate": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitServicegoaltemplate">;
  "deleteWorkforcemanagementBusinessunitStaffinggroup": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitStaffinggroup">;
  "deleteWorkforcemanagementBusinessunitTimeofflimit": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitTimeofflimit">;
  "deleteWorkforcemanagementBusinessunitTimeoffplan": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitTimeoffplan">;
  "deleteWorkforcemanagementBusinessunitWeekSchedule": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitWeekSchedule">;
  "deleteWorkforcemanagementBusinessunitWeekShorttermforecast": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitWeekShorttermforecast">;
  "deleteWorkforcemanagementBusinessunitWorkplanbid": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitWorkplanbid">;
  "deleteWorkforcemanagementBusinessunitWorkplanbidGroup": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementBusinessunitWorkplanbidGroup">;
  "deleteWorkforcemanagementCalendarUrlIcs": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementCalendarUrlIcs">;
  "deleteWorkforcemanagementManagementunit": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementManagementunit">;
  "deleteWorkforcemanagementManagementunitTimeofflimit": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementManagementunitTimeofflimit">;
  "deleteWorkforcemanagementManagementunitTimeoffplan": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementManagementunitTimeoffplan">;
  "deleteWorkforcemanagementManagementunitWorkplan": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementManagementunitWorkplan">;
  "deleteWorkforcemanagementManagementunitWorkplanrotation": GenesysCloudFullApiOperationInput<"deleteWorkforcemanagementManagementunitWorkplanrotation">;
  "getWorkforcemanagementAdherence": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAdherence">;
  "getWorkforcemanagementAdherenceExplanation": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAdherenceExplanation">;
  "getWorkforcemanagementAdherenceExplanationsJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAdherenceExplanationsJob">;
  "getWorkforcemanagementAdherenceHistoricalBulkJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAdherenceHistoricalBulkJob">;
  "getWorkforcemanagementAdherenceHistoricalJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAdherenceHistoricalJob">;
  "getWorkforcemanagementAgentAdherenceExplanation": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAgentAdherenceExplanation">;
  "getWorkforcemanagementAgentManagementunit": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAgentManagementunit">;
  "getWorkforcemanagementAgentsMeAdherenceHistoricalJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAgentsMeAdherenceHistoricalJob">;
  "getWorkforcemanagementAgentsMeManagementunit": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAgentsMeManagementunit">;
  "getWorkforcemanagementAlternativeshiftsOffersJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAlternativeshiftsOffersJob">;
  "getWorkforcemanagementAlternativeshiftsOffersSearchJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAlternativeshiftsOffersSearchJob">;
  "getWorkforcemanagementAlternativeshiftsSettings": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAlternativeshiftsSettings">;
  "getWorkforcemanagementAlternativeshiftsTrade": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAlternativeshiftsTrade">;
  "getWorkforcemanagementAlternativeshiftsTrades": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAlternativeshiftsTrades">;
  "getWorkforcemanagementAlternativeshiftsTradesJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAlternativeshiftsTradesJob">;
  "getWorkforcemanagementAlternativeshiftsTradesStateJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementAlternativeshiftsTradesStateJob">;
  "getWorkforcemanagementBusinessunit": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunit">;
  "getWorkforcemanagementBusinessunitActivitycode": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitActivitycode">;
  "getWorkforcemanagementBusinessunitActivitycodes": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitActivitycodes">;
  "getWorkforcemanagementBusinessunitActivityplan": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitActivityplan">;
  "getWorkforcemanagementBusinessunitActivityplanRunsJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitActivityplanRunsJob">;
  "getWorkforcemanagementBusinessunitActivityplans": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitActivityplans">;
  "getWorkforcemanagementBusinessunitActivityplansJobs": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitActivityplansJobs">;
  "getWorkforcemanagementBusinessunitAlternativeshiftsSettings": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitAlternativeshiftsSettings">;
  "getWorkforcemanagementBusinessunitAlternativeshiftsTrade": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitAlternativeshiftsTrade">;
  "getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob">;
  "getWorkforcemanagementBusinessunitCapacityplan": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitCapacityplan">;
  "getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast">;
  "getWorkforcemanagementBusinessunitCapacityplans": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitCapacityplans">;
  "getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations">;
  "getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements">;
  "getWorkforcemanagementBusinessunitIntradayPlanninggroups": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitIntradayPlanninggroups">;
  "getWorkforcemanagementBusinessunitManagementunits": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitManagementunits">;
  "getWorkforcemanagementBusinessunitMinimumstaffingSettings": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitMinimumstaffingSettings">;
  "getWorkforcemanagementBusinessunitOpportunity": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitOpportunity">;
  "getWorkforcemanagementBusinessunitPlanninggroup": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitPlanninggroup">;
  "getWorkforcemanagementBusinessunitPlanninggroups": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitPlanninggroups">;
  "getWorkforcemanagementBusinessunits": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunits">;
  "getWorkforcemanagementBusinessunitSchedulebid": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitSchedulebid">;
  "getWorkforcemanagementBusinessunitSchedulebidGroup": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitSchedulebidGroup">;
  "getWorkforcemanagementBusinessunitSchedulebidGroupPreferences": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitSchedulebidGroupPreferences">;
  "getWorkforcemanagementBusinessunitSchedulebidGroupsSummary": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitSchedulebidGroupsSummary">;
  "getWorkforcemanagementBusinessunitSchedulebids": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitSchedulebids">;
  "getWorkforcemanagementBusinessunitSchedulerSettings": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitSchedulerSettings">;
  "getWorkforcemanagementBusinessunitSchedulingRun": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitSchedulingRun">;
  "getWorkforcemanagementBusinessunitSchedulingRunResult": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitSchedulingRunResult">;
  "getWorkforcemanagementBusinessunitSchedulingRuns": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitSchedulingRuns">;
  "getWorkforcemanagementBusinessunitsDivisionviews": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitsDivisionviews">;
  "getWorkforcemanagementBusinessunitServicegoaltemplate": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitServicegoaltemplate">;
  "getWorkforcemanagementBusinessunitServicegoaltemplates": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitServicegoaltemplates">;
  "getWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob">;
  "getWorkforcemanagementBusinessunitShifttradingTradesQueryJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitShifttradingTradesQueryJob">;
  "getWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob">;
  "getWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob">;
  "getWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob">;
  "getWorkforcemanagementBusinessunitStaffinggroup": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitStaffinggroup">;
  "getWorkforcemanagementBusinessunitStaffinggroups": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitStaffinggroups">;
  "getWorkforcemanagementBusinessunitTimeofflimit": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitTimeofflimit">;
  "getWorkforcemanagementBusinessunitTimeofflimits": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitTimeofflimits">;
}

export interface GenesysCloudFullApiWorkforceManagement01GeneratedClient {
  DeleteWorkforcemanagementBusinessunit(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunit">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunit"]>;
  DeleteWorkforcemanagementBusinessunitActivitycode(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitActivitycode">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitActivitycode"]>;
  DeleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory"]>;
  DeleteWorkforcemanagementBusinessunitPlanninggroup(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitPlanninggroup">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitPlanninggroup"]>;
  DeleteWorkforcemanagementBusinessunitSchedulebid(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitSchedulebid">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitSchedulebid"]>;
  DeleteWorkforcemanagementBusinessunitSchedulebidGroup(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitSchedulebidGroup">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitSchedulebidGroup"]>;
  DeleteWorkforcemanagementBusinessunitSchedulingRun(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitSchedulingRun">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitSchedulingRun"]>;
  DeleteWorkforcemanagementBusinessunitServicegoaltemplate(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitServicegoaltemplate">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitServicegoaltemplate"]>;
  DeleteWorkforcemanagementBusinessunitStaffinggroup(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitStaffinggroup">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitStaffinggroup"]>;
  DeleteWorkforcemanagementBusinessunitTimeofflimit(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitTimeofflimit">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitTimeofflimit"]>;
  DeleteWorkforcemanagementBusinessunitTimeoffplan(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitTimeoffplan">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitTimeoffplan"]>;
  DeleteWorkforcemanagementBusinessunitWeekSchedule(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitWeekSchedule">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitWeekSchedule"]>;
  DeleteWorkforcemanagementBusinessunitWeekShorttermforecast(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitWeekShorttermforecast">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitWeekShorttermforecast"]>;
  DeleteWorkforcemanagementBusinessunitWorkplanbid(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitWorkplanbid">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitWorkplanbid"]>;
  DeleteWorkforcemanagementBusinessunitWorkplanbidGroup(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitWorkplanbidGroup">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementBusinessunitWorkplanbidGroup"]>;
  DeleteWorkforcemanagementCalendarUrlIcs(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementCalendarUrlIcs">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementCalendarUrlIcs"]>;
  DeleteWorkforcemanagementManagementunit(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementManagementunit">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementManagementunit"]>;
  DeleteWorkforcemanagementManagementunitTimeofflimit(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementManagementunitTimeofflimit">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementManagementunitTimeofflimit"]>;
  DeleteWorkforcemanagementManagementunitTimeoffplan(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementManagementunitTimeoffplan">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementManagementunitTimeoffplan"]>;
  DeleteWorkforcemanagementManagementunitWorkplan(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementManagementunitWorkplan">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementManagementunitWorkplan"]>;
  DeleteWorkforcemanagementManagementunitWorkplanrotation(...args: GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementManagementunitWorkplanrotation">): Promise<GenesysCloudFullApiOperationResponseMap["deleteWorkforcemanagementManagementunitWorkplanrotation"]>;
  GetWorkforcemanagementAdherence(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAdherence">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAdherence"]>;
  GetWorkforcemanagementAdherenceExplanation(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAdherenceExplanation">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAdherenceExplanation"]>;
  GetWorkforcemanagementAdherenceExplanationsJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAdherenceExplanationsJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAdherenceExplanationsJob"]>;
  GetWorkforcemanagementAdherenceHistoricalBulkJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAdherenceHistoricalBulkJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAdherenceHistoricalBulkJob"]>;
  GetWorkforcemanagementAdherenceHistoricalJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAdherenceHistoricalJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAdherenceHistoricalJob"]>;
  GetWorkforcemanagementAgentAdherenceExplanation(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAgentAdherenceExplanation">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAgentAdherenceExplanation"]>;
  GetWorkforcemanagementAgentManagementunit(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAgentManagementunit">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAgentManagementunit"]>;
  GetWorkforcemanagementAgentsMeAdherenceHistoricalJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAgentsMeAdherenceHistoricalJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAgentsMeAdherenceHistoricalJob"]>;
  GetWorkforcemanagementAgentsMeManagementunit(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAgentsMeManagementunit">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAgentsMeManagementunit"]>;
  GetWorkforcemanagementAlternativeshiftsOffersJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsOffersJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAlternativeshiftsOffersJob"]>;
  GetWorkforcemanagementAlternativeshiftsOffersSearchJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsOffersSearchJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAlternativeshiftsOffersSearchJob"]>;
  GetWorkforcemanagementAlternativeshiftsSettings(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAlternativeshiftsSettings"]>;
  GetWorkforcemanagementAlternativeshiftsTrade(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsTrade">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAlternativeshiftsTrade"]>;
  GetWorkforcemanagementAlternativeshiftsTrades(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsTrades">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAlternativeshiftsTrades"]>;
  GetWorkforcemanagementAlternativeshiftsTradesJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsTradesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAlternativeshiftsTradesJob"]>;
  GetWorkforcemanagementAlternativeshiftsTradesStateJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsTradesStateJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementAlternativeshiftsTradesStateJob"]>;
  GetWorkforcemanagementBusinessunit(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunit">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunit"]>;
  GetWorkforcemanagementBusinessunitActivitycode(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitActivitycode">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitActivitycode"]>;
  GetWorkforcemanagementBusinessunitActivitycodes(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitActivitycodes">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitActivitycodes"]>;
  GetWorkforcemanagementBusinessunitActivityplan(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitActivityplan">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitActivityplan"]>;
  GetWorkforcemanagementBusinessunitActivityplanRunsJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitActivityplanRunsJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitActivityplanRunsJob"]>;
  GetWorkforcemanagementBusinessunitActivityplans(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitActivityplans">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitActivityplans"]>;
  GetWorkforcemanagementBusinessunitActivityplansJobs(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitActivityplansJobs">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitActivityplansJobs"]>;
  GetWorkforcemanagementBusinessunitAlternativeshiftsSettings(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitAlternativeshiftsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitAlternativeshiftsSettings"]>;
  GetWorkforcemanagementBusinessunitAlternativeshiftsTrade(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitAlternativeshiftsTrade">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitAlternativeshiftsTrade"]>;
  GetWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob"]>;
  GetWorkforcemanagementBusinessunitCapacityplan(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitCapacityplan">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitCapacityplan"]>;
  GetWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast"]>;
  GetWorkforcemanagementBusinessunitCapacityplans(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitCapacityplans">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitCapacityplans"]>;
  GetWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations"]>;
  GetWorkforcemanagementBusinessunitCapacityplanStaffingrequirements(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements"]>;
  GetWorkforcemanagementBusinessunitIntradayPlanninggroups(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitIntradayPlanninggroups">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitIntradayPlanninggroups"]>;
  GetWorkforcemanagementBusinessunitManagementunits(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitManagementunits">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitManagementunits"]>;
  GetWorkforcemanagementBusinessunitMinimumstaffingSettings(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitMinimumstaffingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitMinimumstaffingSettings"]>;
  GetWorkforcemanagementBusinessunitOpportunity(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitOpportunity">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitOpportunity"]>;
  GetWorkforcemanagementBusinessunitPlanninggroup(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitPlanninggroup">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitPlanninggroup"]>;
  GetWorkforcemanagementBusinessunitPlanninggroups(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitPlanninggroups">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitPlanninggroups"]>;
  GetWorkforcemanagementBusinessunits(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunits">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunits"]>;
  GetWorkforcemanagementBusinessunitSchedulebid(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulebid">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitSchedulebid"]>;
  GetWorkforcemanagementBusinessunitSchedulebidGroup(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulebidGroup">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitSchedulebidGroup"]>;
  GetWorkforcemanagementBusinessunitSchedulebidGroupPreferences(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulebidGroupPreferences">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitSchedulebidGroupPreferences"]>;
  GetWorkforcemanagementBusinessunitSchedulebidGroupsSummary(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulebidGroupsSummary">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitSchedulebidGroupsSummary"]>;
  GetWorkforcemanagementBusinessunitSchedulebids(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulebids">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitSchedulebids"]>;
  GetWorkforcemanagementBusinessunitSchedulerSettings(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulerSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitSchedulerSettings"]>;
  GetWorkforcemanagementBusinessunitSchedulingRun(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulingRun">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitSchedulingRun"]>;
  GetWorkforcemanagementBusinessunitSchedulingRunResult(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulingRunResult">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitSchedulingRunResult"]>;
  GetWorkforcemanagementBusinessunitSchedulingRuns(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulingRuns">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitSchedulingRuns"]>;
  GetWorkforcemanagementBusinessunitsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitsDivisionviews"]>;
  GetWorkforcemanagementBusinessunitServicegoaltemplate(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitServicegoaltemplate">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitServicegoaltemplate"]>;
  GetWorkforcemanagementBusinessunitServicegoaltemplates(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitServicegoaltemplates">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitServicegoaltemplates"]>;
  GetWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob"]>;
  GetWorkforcemanagementBusinessunitShifttradingTradesQueryJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitShifttradingTradesQueryJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitShifttradingTradesQueryJob"]>;
  GetWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob"]>;
  GetWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob"]>;
  GetWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob"]>;
  GetWorkforcemanagementBusinessunitStaffinggroup(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitStaffinggroup">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitStaffinggroup"]>;
  GetWorkforcemanagementBusinessunitStaffinggroups(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitStaffinggroups">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitStaffinggroups"]>;
  GetWorkforcemanagementBusinessunitTimeofflimit(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitTimeofflimit">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitTimeofflimit"]>;
  GetWorkforcemanagementBusinessunitTimeofflimits(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitTimeofflimits">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitTimeofflimits"]>;
}

export const GenesysCloudFullApiWorkforceManagement01GeneratedFunctionNames = [
  "DeleteWorkforcemanagementBusinessunit",
  "DeleteWorkforcemanagementBusinessunitActivitycode",
  "DeleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory",
  "DeleteWorkforcemanagementBusinessunitPlanninggroup",
  "DeleteWorkforcemanagementBusinessunitSchedulebid",
  "DeleteWorkforcemanagementBusinessunitSchedulebidGroup",
  "DeleteWorkforcemanagementBusinessunitSchedulingRun",
  "DeleteWorkforcemanagementBusinessunitServicegoaltemplate",
  "DeleteWorkforcemanagementBusinessunitStaffinggroup",
  "DeleteWorkforcemanagementBusinessunitTimeofflimit",
  "DeleteWorkforcemanagementBusinessunitTimeoffplan",
  "DeleteWorkforcemanagementBusinessunitWeekSchedule",
  "DeleteWorkforcemanagementBusinessunitWeekShorttermforecast",
  "DeleteWorkforcemanagementBusinessunitWorkplanbid",
  "DeleteWorkforcemanagementBusinessunitWorkplanbidGroup",
  "DeleteWorkforcemanagementCalendarUrlIcs",
  "DeleteWorkforcemanagementManagementunit",
  "DeleteWorkforcemanagementManagementunitTimeofflimit",
  "DeleteWorkforcemanagementManagementunitTimeoffplan",
  "DeleteWorkforcemanagementManagementunitWorkplan",
  "DeleteWorkforcemanagementManagementunitWorkplanrotation",
  "GetWorkforcemanagementAdherence",
  "GetWorkforcemanagementAdherenceExplanation",
  "GetWorkforcemanagementAdherenceExplanationsJob",
  "GetWorkforcemanagementAdherenceHistoricalBulkJob",
  "GetWorkforcemanagementAdherenceHistoricalJob",
  "GetWorkforcemanagementAgentAdherenceExplanation",
  "GetWorkforcemanagementAgentManagementunit",
  "GetWorkforcemanagementAgentsMeAdherenceHistoricalJob",
  "GetWorkforcemanagementAgentsMeManagementunit",
  "GetWorkforcemanagementAlternativeshiftsOffersJob",
  "GetWorkforcemanagementAlternativeshiftsOffersSearchJob",
  "GetWorkforcemanagementAlternativeshiftsSettings",
  "GetWorkforcemanagementAlternativeshiftsTrade",
  "GetWorkforcemanagementAlternativeshiftsTrades",
  "GetWorkforcemanagementAlternativeshiftsTradesJob",
  "GetWorkforcemanagementAlternativeshiftsTradesStateJob",
  "GetWorkforcemanagementBusinessunit",
  "GetWorkforcemanagementBusinessunitActivitycode",
  "GetWorkforcemanagementBusinessunitActivitycodes",
  "GetWorkforcemanagementBusinessunitActivityplan",
  "GetWorkforcemanagementBusinessunitActivityplanRunsJob",
  "GetWorkforcemanagementBusinessunitActivityplans",
  "GetWorkforcemanagementBusinessunitActivityplansJobs",
  "GetWorkforcemanagementBusinessunitAlternativeshiftsSettings",
  "GetWorkforcemanagementBusinessunitAlternativeshiftsTrade",
  "GetWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob",
  "GetWorkforcemanagementBusinessunitCapacityplan",
  "GetWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast",
  "GetWorkforcemanagementBusinessunitCapacityplans",
  "GetWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations",
  "GetWorkforcemanagementBusinessunitCapacityplanStaffingrequirements",
  "GetWorkforcemanagementBusinessunitIntradayPlanninggroups",
  "GetWorkforcemanagementBusinessunitManagementunits",
  "GetWorkforcemanagementBusinessunitMinimumstaffingSettings",
  "GetWorkforcemanagementBusinessunitOpportunity",
  "GetWorkforcemanagementBusinessunitPlanninggroup",
  "GetWorkforcemanagementBusinessunitPlanninggroups",
  "GetWorkforcemanagementBusinessunits",
  "GetWorkforcemanagementBusinessunitSchedulebid",
  "GetWorkforcemanagementBusinessunitSchedulebidGroup",
  "GetWorkforcemanagementBusinessunitSchedulebidGroupPreferences",
  "GetWorkforcemanagementBusinessunitSchedulebidGroupsSummary",
  "GetWorkforcemanagementBusinessunitSchedulebids",
  "GetWorkforcemanagementBusinessunitSchedulerSettings",
  "GetWorkforcemanagementBusinessunitSchedulingRun",
  "GetWorkforcemanagementBusinessunitSchedulingRunResult",
  "GetWorkforcemanagementBusinessunitSchedulingRuns",
  "GetWorkforcemanagementBusinessunitsDivisionviews",
  "GetWorkforcemanagementBusinessunitServicegoaltemplate",
  "GetWorkforcemanagementBusinessunitServicegoaltemplates",
  "GetWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob",
  "GetWorkforcemanagementBusinessunitShifttradingTradesQueryJob",
  "GetWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob",
  "GetWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob",
  "GetWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob",
  "GetWorkforcemanagementBusinessunitStaffinggroup",
  "GetWorkforcemanagementBusinessunitStaffinggroups",
  "GetWorkforcemanagementBusinessunitTimeofflimit",
  "GetWorkforcemanagementBusinessunitTimeofflimits"
] as const satisfies readonly (keyof GenesysCloudFullApiWorkforceManagement01GeneratedClient)[];

export function createGenesysCloudFullApiWorkforceManagement01GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiWorkforceManagement01GeneratedClient {
  return {
    DeleteWorkforcemanagementBusinessunit: (...args) => callOperation("deleteWorkforcemanagementBusinessunit", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunit">)),
    DeleteWorkforcemanagementBusinessunitActivitycode: (...args) => callOperation("deleteWorkforcemanagementBusinessunitActivitycode", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitActivitycode">)),
    DeleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory: (...args) => callOperation("deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory">)),
    DeleteWorkforcemanagementBusinessunitPlanninggroup: (...args) => callOperation("deleteWorkforcemanagementBusinessunitPlanninggroup", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitPlanninggroup">)),
    DeleteWorkforcemanagementBusinessunitSchedulebid: (...args) => callOperation("deleteWorkforcemanagementBusinessunitSchedulebid", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitSchedulebid">)),
    DeleteWorkforcemanagementBusinessunitSchedulebidGroup: (...args) => callOperation("deleteWorkforcemanagementBusinessunitSchedulebidGroup", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitSchedulebidGroup">)),
    DeleteWorkforcemanagementBusinessunitSchedulingRun: (...args) => callOperation("deleteWorkforcemanagementBusinessunitSchedulingRun", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitSchedulingRun">)),
    DeleteWorkforcemanagementBusinessunitServicegoaltemplate: (...args) => callOperation("deleteWorkforcemanagementBusinessunitServicegoaltemplate", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitServicegoaltemplate">)),
    DeleteWorkforcemanagementBusinessunitStaffinggroup: (...args) => callOperation("deleteWorkforcemanagementBusinessunitStaffinggroup", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitStaffinggroup">)),
    DeleteWorkforcemanagementBusinessunitTimeofflimit: (...args) => callOperation("deleteWorkforcemanagementBusinessunitTimeofflimit", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitTimeofflimit">)),
    DeleteWorkforcemanagementBusinessunitTimeoffplan: (...args) => callOperation("deleteWorkforcemanagementBusinessunitTimeoffplan", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitTimeoffplan">)),
    DeleteWorkforcemanagementBusinessunitWeekSchedule: (...args) => callOperation("deleteWorkforcemanagementBusinessunitWeekSchedule", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitWeekSchedule">)),
    DeleteWorkforcemanagementBusinessunitWeekShorttermforecast: (...args) => callOperation("deleteWorkforcemanagementBusinessunitWeekShorttermforecast", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitWeekShorttermforecast">)),
    DeleteWorkforcemanagementBusinessunitWorkplanbid: (...args) => callOperation("deleteWorkforcemanagementBusinessunitWorkplanbid", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitWorkplanbid">)),
    DeleteWorkforcemanagementBusinessunitWorkplanbidGroup: (...args) => callOperation("deleteWorkforcemanagementBusinessunitWorkplanbidGroup", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementBusinessunitWorkplanbidGroup">)),
    DeleteWorkforcemanagementCalendarUrlIcs: (...args) => callOperation("deleteWorkforcemanagementCalendarUrlIcs", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementCalendarUrlIcs">)),
    DeleteWorkforcemanagementManagementunit: (...args) => callOperation("deleteWorkforcemanagementManagementunit", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementManagementunit">)),
    DeleteWorkforcemanagementManagementunitTimeofflimit: (...args) => callOperation("deleteWorkforcemanagementManagementunitTimeofflimit", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementManagementunitTimeofflimit">)),
    DeleteWorkforcemanagementManagementunitTimeoffplan: (...args) => callOperation("deleteWorkforcemanagementManagementunitTimeoffplan", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementManagementunitTimeoffplan">)),
    DeleteWorkforcemanagementManagementunitWorkplan: (...args) => callOperation("deleteWorkforcemanagementManagementunitWorkplan", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementManagementunitWorkplan">)),
    DeleteWorkforcemanagementManagementunitWorkplanrotation: (...args) => callOperation("deleteWorkforcemanagementManagementunitWorkplanrotation", ...(args as GenesysCloudFullApiOperationArgs<"deleteWorkforcemanagementManagementunitWorkplanrotation">)),
    GetWorkforcemanagementAdherence: (...args) => callOperation("getWorkforcemanagementAdherence", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAdherence">)),
    GetWorkforcemanagementAdherenceExplanation: (...args) => callOperation("getWorkforcemanagementAdherenceExplanation", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAdherenceExplanation">)),
    GetWorkforcemanagementAdherenceExplanationsJob: (...args) => callOperation("getWorkforcemanagementAdherenceExplanationsJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAdherenceExplanationsJob">)),
    GetWorkforcemanagementAdherenceHistoricalBulkJob: (...args) => callOperation("getWorkforcemanagementAdherenceHistoricalBulkJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAdherenceHistoricalBulkJob">)),
    GetWorkforcemanagementAdherenceHistoricalJob: (...args) => callOperation("getWorkforcemanagementAdherenceHistoricalJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAdherenceHistoricalJob">)),
    GetWorkforcemanagementAgentAdherenceExplanation: (...args) => callOperation("getWorkforcemanagementAgentAdherenceExplanation", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAgentAdherenceExplanation">)),
    GetWorkforcemanagementAgentManagementunit: (...args) => callOperation("getWorkforcemanagementAgentManagementunit", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAgentManagementunit">)),
    GetWorkforcemanagementAgentsMeAdherenceHistoricalJob: (...args) => callOperation("getWorkforcemanagementAgentsMeAdherenceHistoricalJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAgentsMeAdherenceHistoricalJob">)),
    GetWorkforcemanagementAgentsMeManagementunit: (...args) => callOperation("getWorkforcemanagementAgentsMeManagementunit", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAgentsMeManagementunit">)),
    GetWorkforcemanagementAlternativeshiftsOffersJob: (...args) => callOperation("getWorkforcemanagementAlternativeshiftsOffersJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsOffersJob">)),
    GetWorkforcemanagementAlternativeshiftsOffersSearchJob: (...args) => callOperation("getWorkforcemanagementAlternativeshiftsOffersSearchJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsOffersSearchJob">)),
    GetWorkforcemanagementAlternativeshiftsSettings: (...args) => callOperation("getWorkforcemanagementAlternativeshiftsSettings", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsSettings">)),
    GetWorkforcemanagementAlternativeshiftsTrade: (...args) => callOperation("getWorkforcemanagementAlternativeshiftsTrade", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsTrade">)),
    GetWorkforcemanagementAlternativeshiftsTrades: (...args) => callOperation("getWorkforcemanagementAlternativeshiftsTrades", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsTrades">)),
    GetWorkforcemanagementAlternativeshiftsTradesJob: (...args) => callOperation("getWorkforcemanagementAlternativeshiftsTradesJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsTradesJob">)),
    GetWorkforcemanagementAlternativeshiftsTradesStateJob: (...args) => callOperation("getWorkforcemanagementAlternativeshiftsTradesStateJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementAlternativeshiftsTradesStateJob">)),
    GetWorkforcemanagementBusinessunit: (...args) => callOperation("getWorkforcemanagementBusinessunit", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunit">)),
    GetWorkforcemanagementBusinessunitActivitycode: (...args) => callOperation("getWorkforcemanagementBusinessunitActivitycode", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitActivitycode">)),
    GetWorkforcemanagementBusinessunitActivitycodes: (...args) => callOperation("getWorkforcemanagementBusinessunitActivitycodes", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitActivitycodes">)),
    GetWorkforcemanagementBusinessunitActivityplan: (...args) => callOperation("getWorkforcemanagementBusinessunitActivityplan", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitActivityplan">)),
    GetWorkforcemanagementBusinessunitActivityplanRunsJob: (...args) => callOperation("getWorkforcemanagementBusinessunitActivityplanRunsJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitActivityplanRunsJob">)),
    GetWorkforcemanagementBusinessunitActivityplans: (...args) => callOperation("getWorkforcemanagementBusinessunitActivityplans", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitActivityplans">)),
    GetWorkforcemanagementBusinessunitActivityplansJobs: (...args) => callOperation("getWorkforcemanagementBusinessunitActivityplansJobs", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitActivityplansJobs">)),
    GetWorkforcemanagementBusinessunitAlternativeshiftsSettings: (...args) => callOperation("getWorkforcemanagementBusinessunitAlternativeshiftsSettings", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitAlternativeshiftsSettings">)),
    GetWorkforcemanagementBusinessunitAlternativeshiftsTrade: (...args) => callOperation("getWorkforcemanagementBusinessunitAlternativeshiftsTrade", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitAlternativeshiftsTrade">)),
    GetWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob: (...args) => callOperation("getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob">)),
    GetWorkforcemanagementBusinessunitCapacityplan: (...args) => callOperation("getWorkforcemanagementBusinessunitCapacityplan", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitCapacityplan">)),
    GetWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast: (...args) => callOperation("getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast">)),
    GetWorkforcemanagementBusinessunitCapacityplans: (...args) => callOperation("getWorkforcemanagementBusinessunitCapacityplans", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitCapacityplans">)),
    GetWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations: (...args) => callOperation("getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations">)),
    GetWorkforcemanagementBusinessunitCapacityplanStaffingrequirements: (...args) => callOperation("getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements">)),
    GetWorkforcemanagementBusinessunitIntradayPlanninggroups: (...args) => callOperation("getWorkforcemanagementBusinessunitIntradayPlanninggroups", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitIntradayPlanninggroups">)),
    GetWorkforcemanagementBusinessunitManagementunits: (...args) => callOperation("getWorkforcemanagementBusinessunitManagementunits", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitManagementunits">)),
    GetWorkforcemanagementBusinessunitMinimumstaffingSettings: (...args) => callOperation("getWorkforcemanagementBusinessunitMinimumstaffingSettings", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitMinimumstaffingSettings">)),
    GetWorkforcemanagementBusinessunitOpportunity: (...args) => callOperation("getWorkforcemanagementBusinessunitOpportunity", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitOpportunity">)),
    GetWorkforcemanagementBusinessunitPlanninggroup: (...args) => callOperation("getWorkforcemanagementBusinessunitPlanninggroup", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitPlanninggroup">)),
    GetWorkforcemanagementBusinessunitPlanninggroups: (...args) => callOperation("getWorkforcemanagementBusinessunitPlanninggroups", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitPlanninggroups">)),
    GetWorkforcemanagementBusinessunits: (...args) => callOperation("getWorkforcemanagementBusinessunits", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunits">)),
    GetWorkforcemanagementBusinessunitSchedulebid: (...args) => callOperation("getWorkforcemanagementBusinessunitSchedulebid", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulebid">)),
    GetWorkforcemanagementBusinessunitSchedulebidGroup: (...args) => callOperation("getWorkforcemanagementBusinessunitSchedulebidGroup", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulebidGroup">)),
    GetWorkforcemanagementBusinessunitSchedulebidGroupPreferences: (...args) => callOperation("getWorkforcemanagementBusinessunitSchedulebidGroupPreferences", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulebidGroupPreferences">)),
    GetWorkforcemanagementBusinessunitSchedulebidGroupsSummary: (...args) => callOperation("getWorkforcemanagementBusinessunitSchedulebidGroupsSummary", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulebidGroupsSummary">)),
    GetWorkforcemanagementBusinessunitSchedulebids: (...args) => callOperation("getWorkforcemanagementBusinessunitSchedulebids", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulebids">)),
    GetWorkforcemanagementBusinessunitSchedulerSettings: (...args) => callOperation("getWorkforcemanagementBusinessunitSchedulerSettings", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulerSettings">)),
    GetWorkforcemanagementBusinessunitSchedulingRun: (...args) => callOperation("getWorkforcemanagementBusinessunitSchedulingRun", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulingRun">)),
    GetWorkforcemanagementBusinessunitSchedulingRunResult: (...args) => callOperation("getWorkforcemanagementBusinessunitSchedulingRunResult", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulingRunResult">)),
    GetWorkforcemanagementBusinessunitSchedulingRuns: (...args) => callOperation("getWorkforcemanagementBusinessunitSchedulingRuns", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitSchedulingRuns">)),
    GetWorkforcemanagementBusinessunitsDivisionviews: (...args) => callOperation("getWorkforcemanagementBusinessunitsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitsDivisionviews">)),
    GetWorkforcemanagementBusinessunitServicegoaltemplate: (...args) => callOperation("getWorkforcemanagementBusinessunitServicegoaltemplate", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitServicegoaltemplate">)),
    GetWorkforcemanagementBusinessunitServicegoaltemplates: (...args) => callOperation("getWorkforcemanagementBusinessunitServicegoaltemplates", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitServicegoaltemplates">)),
    GetWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob: (...args) => callOperation("getWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob">)),
    GetWorkforcemanagementBusinessunitShifttradingTradesQueryJob: (...args) => callOperation("getWorkforcemanagementBusinessunitShifttradingTradesQueryJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitShifttradingTradesQueryJob">)),
    GetWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob: (...args) => callOperation("getWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob">)),
    GetWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob: (...args) => callOperation("getWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob">)),
    GetWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob: (...args) => callOperation("getWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob">)),
    GetWorkforcemanagementBusinessunitStaffinggroup: (...args) => callOperation("getWorkforcemanagementBusinessunitStaffinggroup", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitStaffinggroup">)),
    GetWorkforcemanagementBusinessunitStaffinggroups: (...args) => callOperation("getWorkforcemanagementBusinessunitStaffinggroups", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitStaffinggroups">)),
    GetWorkforcemanagementBusinessunitTimeofflimit: (...args) => callOperation("getWorkforcemanagementBusinessunitTimeofflimit", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitTimeofflimit">)),
    GetWorkforcemanagementBusinessunitTimeofflimits: (...args) => callOperation("getWorkforcemanagementBusinessunitTimeofflimits", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitTimeofflimits">)),
  };
}
