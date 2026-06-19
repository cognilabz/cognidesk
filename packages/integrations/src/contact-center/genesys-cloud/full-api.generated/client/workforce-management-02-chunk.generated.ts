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
export const GenesysCloudFullApiWorkforceManagement02OperationKeys = [
  "getWorkforcemanagementBusinessunitTimeoffplan",
  "getWorkforcemanagementBusinessunitTimeoffplans",
  "getWorkforcemanagementBusinessunitUsers",
  "getWorkforcemanagementBusinessunitWeekSchedule",
  "getWorkforcemanagementBusinessunitWeekScheduleGenerationresults",
  "getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast",
  "getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent",
  "getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions",
  "getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation",
  "getWorkforcemanagementBusinessunitWeekSchedules",
  "getWorkforcemanagementBusinessunitWeekShorttermforecast",
  "getWorkforcemanagementBusinessunitWeekShorttermforecastData",
  "getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults",
  "getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata",
  "getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups",
  "getWorkforcemanagementBusinessunitWeekShorttermforecasts",
  "getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement",
  "getWorkforcemanagementBusinessunitWorkplanbid",
  "getWorkforcemanagementBusinessunitWorkplanbidGroup",
  "getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences",
  "getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary",
  "getWorkforcemanagementBusinessunitWorkplanbids",
  "getWorkforcemanagementCalendarDataIcs",
  "getWorkforcemanagementCalendarUrlIcs",
  "getWorkforcemanagementHistoricaldataBulkRemoveJob",
  "getWorkforcemanagementHistoricaldataBulkRemoveJobs",
  "getWorkforcemanagementHistoricaldataImportstatus",
  "getWorkforcemanagementHistoricaldataImportstatusJobId",
  "getWorkforcemanagementIntegrationsHris",
  "getWorkforcemanagementIntegrationsHrisTimeofftypesJob",
  "getWorkforcemanagementManagementunit",
  "getWorkforcemanagementManagementunitActivitycodes",
  "getWorkforcemanagementManagementunitAdherence",
  "getWorkforcemanagementManagementunitAgent",
  "getWorkforcemanagementManagementunitAgentShifttrades",
  "getWorkforcemanagementManagementunits",
  "getWorkforcemanagementManagementunitsDivisionviews",
  "getWorkforcemanagementManagementunitShifttradesMatched",
  "getWorkforcemanagementManagementunitShifttradesUsers",
  "getWorkforcemanagementManagementunitTimeofflimit",
  "getWorkforcemanagementManagementunitTimeofflimits",
  "getWorkforcemanagementManagementunitTimeoffplan",
  "getWorkforcemanagementManagementunitTimeoffplans",
  "getWorkforcemanagementManagementunitUsers",
  "getWorkforcemanagementManagementunitUserTimeoffrequest",
  "getWorkforcemanagementManagementunitUserTimeoffrequests",
  "getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits",
  "getWorkforcemanagementManagementunitWeekSchedule",
  "getWorkforcemanagementManagementunitWeekSchedules",
  "getWorkforcemanagementManagementunitWeekShifttrades",
  "getWorkforcemanagementManagementunitWorkplan",
  "getWorkforcemanagementManagementunitWorkplanrotation",
  "getWorkforcemanagementManagementunitWorkplanrotations",
  "getWorkforcemanagementManagementunitWorkplans",
  "getWorkforcemanagementNotifications",
  "getWorkforcemanagementSchedulebidPreference",
  "getWorkforcemanagementSchedulebids",
  "getWorkforcemanagementSchedulebidSchedulesets",
  "getWorkforcemanagementSchedulingjob",
  "getWorkforcemanagementShifttrades",
  "getWorkforcemanagementShifttradingTradeJob",
  "getWorkforcemanagementShifttradingTradeMatchJob",
  "getWorkforcemanagementShifttradingTradesJob",
  "getWorkforcemanagementShifttradingTradesMineQueryJob",
  "getWorkforcemanagementShifttradingTradeStateJob",
  "getWorkforcemanagementShrinkageJob",
  "getWorkforcemanagementTeamAdherence",
  "getWorkforcemanagementTimeoffbalanceJob",
  "getWorkforcemanagementTimeoffrequest",
  "getWorkforcemanagementTimeoffrequests",
  "getWorkforcemanagementTimeoffrequestWaitlistpositions",
  "getWorkforcemanagementUnavailabletimesSettings",
  "getWorkforcemanagementUnavailabletimesValidationJob",
  "getWorkforcemanagementUserWorkplanbidranks",
  "getWorkforcemanagementWorkplanbidPreferences",
  "getWorkforcemanagementWorkplanbids",
  "getWorkforcemanagementWorkplanbidWorkplans",
  "patchWorkforcemanagementAgentAdherenceExplanation",
  "patchWorkforcemanagementAlternativeshiftsTrade",
  "patchWorkforcemanagementAlternativeshiftsTradesStateJobs"
] as const;
export type GenesysCloudFullApiWorkforceManagement02OperationKey = typeof GenesysCloudFullApiWorkforceManagement02OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiWorkforceManagement02OperationPathParamMap {
  "getWorkforcemanagementBusinessunitTimeoffplan": { "businessUnitId": GenesysCloudFullApiPathParamValue; "timeOffPlanId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitTimeoffplans": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitUsers": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekSchedule": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekId": GenesysCloudFullApiPathParamValue; "scheduleId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekScheduleGenerationresults": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekId": GenesysCloudFullApiPathParamValue; "scheduleId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekId": GenesysCloudFullApiPathParamValue; "scheduleId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekId": GenesysCloudFullApiPathParamValue; "scheduleId": GenesysCloudFullApiPathParamValue; "agentId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekId": GenesysCloudFullApiPathParamValue; "scheduleId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekId": GenesysCloudFullApiPathParamValue; "scheduleId": GenesysCloudFullApiPathParamValue; "recalculationId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekSchedules": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekShorttermforecast": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekDateId": GenesysCloudFullApiPathParamValue; "forecastId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekShorttermforecastData": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekDateId": GenesysCloudFullApiPathParamValue; "forecastId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekDateId": GenesysCloudFullApiPathParamValue; "forecastId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekDateId": GenesysCloudFullApiPathParamValue; "forecastId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekDateId": GenesysCloudFullApiPathParamValue; "forecastId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekShorttermforecasts": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekDateId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekDateId": GenesysCloudFullApiPathParamValue; "forecastId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWorkplanbid": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWorkplanbidGroup": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue; "bidGroupId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue; "bidGroupId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementBusinessunitWorkplanbids": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementCalendarDataIcs": {};
  "getWorkforcemanagementCalendarUrlIcs": {};
  "getWorkforcemanagementHistoricaldataBulkRemoveJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementHistoricaldataBulkRemoveJobs": {};
  "getWorkforcemanagementHistoricaldataImportstatus": {};
  "getWorkforcemanagementHistoricaldataImportstatusJobId": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementIntegrationsHris": {};
  "getWorkforcemanagementIntegrationsHrisTimeofftypesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunit": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitActivitycodes": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitAdherence": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitAgent": { "managementUnitId": GenesysCloudFullApiPathParamValue; "agentId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitAgentShifttrades": { "managementUnitId": GenesysCloudFullApiPathParamValue; "agentId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunits": {};
  "getWorkforcemanagementManagementunitsDivisionviews": {};
  "getWorkforcemanagementManagementunitShifttradesMatched": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitShifttradesUsers": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitTimeofflimit": { "managementUnitId": GenesysCloudFullApiPathParamValue; "timeOffLimitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitTimeofflimits": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitTimeoffplan": { "managementUnitId": GenesysCloudFullApiPathParamValue; "timeOffPlanId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitTimeoffplans": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitUsers": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitUserTimeoffrequest": { "managementUnitId": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue; "timeOffRequestId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitUserTimeoffrequests": { "managementUnitId": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits": { "managementUnitId": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue; "timeOffRequestId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitWeekSchedule": { "managementUnitId": GenesysCloudFullApiPathParamValue; "weekId": GenesysCloudFullApiPathParamValue; "scheduleId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitWeekSchedules": { "managementUnitId": GenesysCloudFullApiPathParamValue; "weekId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitWeekShifttrades": { "managementUnitId": GenesysCloudFullApiPathParamValue; "weekDateId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitWorkplan": { "managementUnitId": GenesysCloudFullApiPathParamValue; "workPlanId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitWorkplanrotation": { "managementUnitId": GenesysCloudFullApiPathParamValue; "workPlanRotationId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitWorkplanrotations": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementManagementunitWorkplans": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementNotifications": {};
  "getWorkforcemanagementSchedulebidPreference": { "bidId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementSchedulebids": {};
  "getWorkforcemanagementSchedulebidSchedulesets": { "bidId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementSchedulingjob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementShifttrades": {};
  "getWorkforcemanagementShifttradingTradeJob": { "tradeId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementShifttradingTradeMatchJob": { "tradeId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementShifttradingTradesJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementShifttradingTradesMineQueryJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementShifttradingTradeStateJob": { "tradeId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementShrinkageJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementTeamAdherence": { "teamId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementTimeoffbalanceJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementTimeoffrequest": { "timeOffRequestId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementTimeoffrequests": {};
  "getWorkforcemanagementTimeoffrequestWaitlistpositions": { "timeOffRequestId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementUnavailabletimesSettings": {};
  "getWorkforcemanagementUnavailabletimesValidationJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementUserWorkplanbidranks": { "userId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementWorkplanbidPreferences": { "bidId": GenesysCloudFullApiPathParamValue };
  "getWorkforcemanagementWorkplanbids": {};
  "getWorkforcemanagementWorkplanbidWorkplans": { "bidId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementAgentAdherenceExplanation": { "agentId": GenesysCloudFullApiPathParamValue; "explanationId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementAlternativeshiftsTrade": { "tradeId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementAlternativeshiftsTradesStateJobs": {};
}

export interface GenesysCloudFullApiWorkforceManagement02OperationRequestMap {
  "getWorkforcemanagementBusinessunitTimeoffplan": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitTimeoffplan">;
  "getWorkforcemanagementBusinessunitTimeoffplans": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitTimeoffplans">;
  "getWorkforcemanagementBusinessunitUsers": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitUsers">;
  "getWorkforcemanagementBusinessunitWeekSchedule": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekSchedule">;
  "getWorkforcemanagementBusinessunitWeekScheduleGenerationresults": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekScheduleGenerationresults">;
  "getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast">;
  "getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent">;
  "getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions">;
  "getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation">;
  "getWorkforcemanagementBusinessunitWeekSchedules": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekSchedules">;
  "getWorkforcemanagementBusinessunitWeekShorttermforecast": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekShorttermforecast">;
  "getWorkforcemanagementBusinessunitWeekShorttermforecastData": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekShorttermforecastData">;
  "getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults">;
  "getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata">;
  "getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups">;
  "getWorkforcemanagementBusinessunitWeekShorttermforecasts": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekShorttermforecasts">;
  "getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement">;
  "getWorkforcemanagementBusinessunitWorkplanbid": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWorkplanbid">;
  "getWorkforcemanagementBusinessunitWorkplanbidGroup": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWorkplanbidGroup">;
  "getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences">;
  "getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary">;
  "getWorkforcemanagementBusinessunitWorkplanbids": GenesysCloudFullApiOperationInput<"getWorkforcemanagementBusinessunitWorkplanbids">;
  "getWorkforcemanagementCalendarDataIcs": GenesysCloudFullApiOperationInput<"getWorkforcemanagementCalendarDataIcs">;
  "getWorkforcemanagementCalendarUrlIcs": GenesysCloudFullApiOperationInput<"getWorkforcemanagementCalendarUrlIcs">;
  "getWorkforcemanagementHistoricaldataBulkRemoveJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementHistoricaldataBulkRemoveJob">;
  "getWorkforcemanagementHistoricaldataBulkRemoveJobs": GenesysCloudFullApiOperationInput<"getWorkforcemanagementHistoricaldataBulkRemoveJobs">;
  "getWorkforcemanagementHistoricaldataImportstatus": GenesysCloudFullApiOperationInput<"getWorkforcemanagementHistoricaldataImportstatus">;
  "getWorkforcemanagementHistoricaldataImportstatusJobId": GenesysCloudFullApiOperationInput<"getWorkforcemanagementHistoricaldataImportstatusJobId">;
  "getWorkforcemanagementIntegrationsHris": GenesysCloudFullApiOperationInput<"getWorkforcemanagementIntegrationsHris">;
  "getWorkforcemanagementIntegrationsHrisTimeofftypesJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementIntegrationsHrisTimeofftypesJob">;
  "getWorkforcemanagementManagementunit": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunit">;
  "getWorkforcemanagementManagementunitActivitycodes": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitActivitycodes">;
  "getWorkforcemanagementManagementunitAdherence": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitAdherence">;
  "getWorkforcemanagementManagementunitAgent": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitAgent">;
  "getWorkforcemanagementManagementunitAgentShifttrades": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitAgentShifttrades">;
  "getWorkforcemanagementManagementunits": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunits">;
  "getWorkforcemanagementManagementunitsDivisionviews": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitsDivisionviews">;
  "getWorkforcemanagementManagementunitShifttradesMatched": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitShifttradesMatched">;
  "getWorkforcemanagementManagementunitShifttradesUsers": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitShifttradesUsers">;
  "getWorkforcemanagementManagementunitTimeofflimit": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitTimeofflimit">;
  "getWorkforcemanagementManagementunitTimeofflimits": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitTimeofflimits">;
  "getWorkforcemanagementManagementunitTimeoffplan": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitTimeoffplan">;
  "getWorkforcemanagementManagementunitTimeoffplans": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitTimeoffplans">;
  "getWorkforcemanagementManagementunitUsers": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitUsers">;
  "getWorkforcemanagementManagementunitUserTimeoffrequest": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitUserTimeoffrequest">;
  "getWorkforcemanagementManagementunitUserTimeoffrequests": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitUserTimeoffrequests">;
  "getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits">;
  "getWorkforcemanagementManagementunitWeekSchedule": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitWeekSchedule">;
  "getWorkforcemanagementManagementunitWeekSchedules": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitWeekSchedules">;
  "getWorkforcemanagementManagementunitWeekShifttrades": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitWeekShifttrades">;
  "getWorkforcemanagementManagementunitWorkplan": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitWorkplan">;
  "getWorkforcemanagementManagementunitWorkplanrotation": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitWorkplanrotation">;
  "getWorkforcemanagementManagementunitWorkplanrotations": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitWorkplanrotations">;
  "getWorkforcemanagementManagementunitWorkplans": GenesysCloudFullApiOperationInput<"getWorkforcemanagementManagementunitWorkplans">;
  "getWorkforcemanagementNotifications": GenesysCloudFullApiOperationInput<"getWorkforcemanagementNotifications">;
  "getWorkforcemanagementSchedulebidPreference": GenesysCloudFullApiOperationInput<"getWorkforcemanagementSchedulebidPreference">;
  "getWorkforcemanagementSchedulebids": GenesysCloudFullApiOperationInput<"getWorkforcemanagementSchedulebids">;
  "getWorkforcemanagementSchedulebidSchedulesets": GenesysCloudFullApiOperationInput<"getWorkforcemanagementSchedulebidSchedulesets">;
  "getWorkforcemanagementSchedulingjob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementSchedulingjob">;
  "getWorkforcemanagementShifttrades": GenesysCloudFullApiOperationInput<"getWorkforcemanagementShifttrades">;
  "getWorkforcemanagementShifttradingTradeJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementShifttradingTradeJob">;
  "getWorkforcemanagementShifttradingTradeMatchJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementShifttradingTradeMatchJob">;
  "getWorkforcemanagementShifttradingTradesJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementShifttradingTradesJob">;
  "getWorkforcemanagementShifttradingTradesMineQueryJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementShifttradingTradesMineQueryJob">;
  "getWorkforcemanagementShifttradingTradeStateJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementShifttradingTradeStateJob">;
  "getWorkforcemanagementShrinkageJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementShrinkageJob">;
  "getWorkforcemanagementTeamAdherence": GenesysCloudFullApiOperationInput<"getWorkforcemanagementTeamAdherence">;
  "getWorkforcemanagementTimeoffbalanceJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementTimeoffbalanceJob">;
  "getWorkforcemanagementTimeoffrequest": GenesysCloudFullApiOperationInput<"getWorkforcemanagementTimeoffrequest">;
  "getWorkforcemanagementTimeoffrequests": GenesysCloudFullApiOperationInput<"getWorkforcemanagementTimeoffrequests">;
  "getWorkforcemanagementTimeoffrequestWaitlistpositions": GenesysCloudFullApiOperationInput<"getWorkforcemanagementTimeoffrequestWaitlistpositions">;
  "getWorkforcemanagementUnavailabletimesSettings": GenesysCloudFullApiOperationInput<"getWorkforcemanagementUnavailabletimesSettings">;
  "getWorkforcemanagementUnavailabletimesValidationJob": GenesysCloudFullApiOperationInput<"getWorkforcemanagementUnavailabletimesValidationJob">;
  "getWorkforcemanagementUserWorkplanbidranks": GenesysCloudFullApiOperationInput<"getWorkforcemanagementUserWorkplanbidranks">;
  "getWorkforcemanagementWorkplanbidPreferences": GenesysCloudFullApiOperationInput<"getWorkforcemanagementWorkplanbidPreferences">;
  "getWorkforcemanagementWorkplanbids": GenesysCloudFullApiOperationInput<"getWorkforcemanagementWorkplanbids">;
  "getWorkforcemanagementWorkplanbidWorkplans": GenesysCloudFullApiOperationInput<"getWorkforcemanagementWorkplanbidWorkplans">;
  "patchWorkforcemanagementAgentAdherenceExplanation": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementAgentAdherenceExplanation">;
  "patchWorkforcemanagementAlternativeshiftsTrade": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementAlternativeshiftsTrade">;
  "patchWorkforcemanagementAlternativeshiftsTradesStateJobs": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementAlternativeshiftsTradesStateJobs">;
}

export interface GenesysCloudFullApiWorkforceManagement02GeneratedClient {
  GetWorkforcemanagementBusinessunitTimeoffplan(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitTimeoffplan">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitTimeoffplan"]>;
  GetWorkforcemanagementBusinessunitTimeoffplans(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitTimeoffplans">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitTimeoffplans"]>;
  GetWorkforcemanagementBusinessunitUsers(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitUsers"]>;
  GetWorkforcemanagementBusinessunitWeekSchedule(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekSchedule">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekSchedule"]>;
  GetWorkforcemanagementBusinessunitWeekScheduleGenerationresults(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekScheduleGenerationresults">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekScheduleGenerationresults"]>;
  GetWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast"]>;
  GetWorkforcemanagementBusinessunitWeekScheduleHistoryAgent(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent"]>;
  GetWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions"]>;
  GetWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation"]>;
  GetWorkforcemanagementBusinessunitWeekSchedules(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekSchedules">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekSchedules"]>;
  GetWorkforcemanagementBusinessunitWeekShorttermforecast(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecast">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekShorttermforecast"]>;
  GetWorkforcemanagementBusinessunitWeekShorttermforecastData(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecastData">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekShorttermforecastData"]>;
  GetWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults"]>;
  GetWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata"]>;
  GetWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups"]>;
  GetWorkforcemanagementBusinessunitWeekShorttermforecasts(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecasts">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekShorttermforecasts"]>;
  GetWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement"]>;
  GetWorkforcemanagementBusinessunitWorkplanbid(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWorkplanbid">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWorkplanbid"]>;
  GetWorkforcemanagementBusinessunitWorkplanbidGroup(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWorkplanbidGroup">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWorkplanbidGroup"]>;
  GetWorkforcemanagementBusinessunitWorkplanbidGroupPreferences(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences"]>;
  GetWorkforcemanagementBusinessunitWorkplanbidGroupsSummary(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary"]>;
  GetWorkforcemanagementBusinessunitWorkplanbids(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWorkplanbids">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementBusinessunitWorkplanbids"]>;
  GetWorkforcemanagementCalendarDataIcs(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementCalendarDataIcs">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementCalendarDataIcs"]>;
  GetWorkforcemanagementCalendarUrlIcs(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementCalendarUrlIcs">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementCalendarUrlIcs"]>;
  GetWorkforcemanagementHistoricaldataBulkRemoveJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementHistoricaldataBulkRemoveJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementHistoricaldataBulkRemoveJob"]>;
  GetWorkforcemanagementHistoricaldataBulkRemoveJobs(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementHistoricaldataBulkRemoveJobs">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementHistoricaldataBulkRemoveJobs"]>;
  GetWorkforcemanagementHistoricaldataImportstatus(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementHistoricaldataImportstatus">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementHistoricaldataImportstatus"]>;
  GetWorkforcemanagementHistoricaldataImportstatusJobId(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementHistoricaldataImportstatusJobId">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementHistoricaldataImportstatusJobId"]>;
  GetWorkforcemanagementIntegrationsHris(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementIntegrationsHris">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementIntegrationsHris"]>;
  GetWorkforcemanagementIntegrationsHrisTimeofftypesJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementIntegrationsHrisTimeofftypesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementIntegrationsHrisTimeofftypesJob"]>;
  GetWorkforcemanagementManagementunit(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunit">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunit"]>;
  GetWorkforcemanagementManagementunitActivitycodes(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitActivitycodes">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitActivitycodes"]>;
  GetWorkforcemanagementManagementunitAdherence(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitAdherence">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitAdherence"]>;
  GetWorkforcemanagementManagementunitAgent(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitAgent">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitAgent"]>;
  GetWorkforcemanagementManagementunitAgentShifttrades(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitAgentShifttrades">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitAgentShifttrades"]>;
  GetWorkforcemanagementManagementunits(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunits">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunits"]>;
  GetWorkforcemanagementManagementunitsDivisionviews(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitsDivisionviews">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitsDivisionviews"]>;
  GetWorkforcemanagementManagementunitShifttradesMatched(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitShifttradesMatched">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitShifttradesMatched"]>;
  GetWorkforcemanagementManagementunitShifttradesUsers(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitShifttradesUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitShifttradesUsers"]>;
  GetWorkforcemanagementManagementunitTimeofflimit(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitTimeofflimit">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitTimeofflimit"]>;
  GetWorkforcemanagementManagementunitTimeofflimits(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitTimeofflimits">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitTimeofflimits"]>;
  GetWorkforcemanagementManagementunitTimeoffplan(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitTimeoffplan">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitTimeoffplan"]>;
  GetWorkforcemanagementManagementunitTimeoffplans(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitTimeoffplans">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitTimeoffplans"]>;
  GetWorkforcemanagementManagementunitUsers(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitUsers">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitUsers"]>;
  GetWorkforcemanagementManagementunitUserTimeoffrequest(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitUserTimeoffrequest">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitUserTimeoffrequest"]>;
  GetWorkforcemanagementManagementunitUserTimeoffrequests(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitUserTimeoffrequests">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitUserTimeoffrequests"]>;
  GetWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits"]>;
  GetWorkforcemanagementManagementunitWeekSchedule(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWeekSchedule">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitWeekSchedule"]>;
  GetWorkforcemanagementManagementunitWeekSchedules(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWeekSchedules">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitWeekSchedules"]>;
  GetWorkforcemanagementManagementunitWeekShifttrades(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWeekShifttrades">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitWeekShifttrades"]>;
  GetWorkforcemanagementManagementunitWorkplan(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWorkplan">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitWorkplan"]>;
  GetWorkforcemanagementManagementunitWorkplanrotation(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWorkplanrotation">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitWorkplanrotation"]>;
  GetWorkforcemanagementManagementunitWorkplanrotations(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWorkplanrotations">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitWorkplanrotations"]>;
  GetWorkforcemanagementManagementunitWorkplans(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWorkplans">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementManagementunitWorkplans"]>;
  GetWorkforcemanagementNotifications(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementNotifications">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementNotifications"]>;
  GetWorkforcemanagementSchedulebidPreference(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementSchedulebidPreference">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementSchedulebidPreference"]>;
  GetWorkforcemanagementSchedulebids(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementSchedulebids">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementSchedulebids"]>;
  GetWorkforcemanagementSchedulebidSchedulesets(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementSchedulebidSchedulesets">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementSchedulebidSchedulesets"]>;
  GetWorkforcemanagementSchedulingjob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementSchedulingjob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementSchedulingjob"]>;
  GetWorkforcemanagementShifttrades(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShifttrades">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementShifttrades"]>;
  GetWorkforcemanagementShifttradingTradeJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShifttradingTradeJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementShifttradingTradeJob"]>;
  GetWorkforcemanagementShifttradingTradeMatchJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShifttradingTradeMatchJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementShifttradingTradeMatchJob"]>;
  GetWorkforcemanagementShifttradingTradesJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShifttradingTradesJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementShifttradingTradesJob"]>;
  GetWorkforcemanagementShifttradingTradesMineQueryJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShifttradingTradesMineQueryJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementShifttradingTradesMineQueryJob"]>;
  GetWorkforcemanagementShifttradingTradeStateJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShifttradingTradeStateJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementShifttradingTradeStateJob"]>;
  GetWorkforcemanagementShrinkageJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShrinkageJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementShrinkageJob"]>;
  GetWorkforcemanagementTeamAdherence(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementTeamAdherence">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementTeamAdherence"]>;
  GetWorkforcemanagementTimeoffbalanceJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementTimeoffbalanceJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementTimeoffbalanceJob"]>;
  GetWorkforcemanagementTimeoffrequest(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementTimeoffrequest">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementTimeoffrequest"]>;
  GetWorkforcemanagementTimeoffrequests(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementTimeoffrequests">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementTimeoffrequests"]>;
  GetWorkforcemanagementTimeoffrequestWaitlistpositions(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementTimeoffrequestWaitlistpositions">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementTimeoffrequestWaitlistpositions"]>;
  GetWorkforcemanagementUnavailabletimesSettings(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementUnavailabletimesSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementUnavailabletimesSettings"]>;
  GetWorkforcemanagementUnavailabletimesValidationJob(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementUnavailabletimesValidationJob">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementUnavailabletimesValidationJob"]>;
  GetWorkforcemanagementUserWorkplanbidranks(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementUserWorkplanbidranks">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementUserWorkplanbidranks"]>;
  GetWorkforcemanagementWorkplanbidPreferences(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementWorkplanbidPreferences">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementWorkplanbidPreferences"]>;
  GetWorkforcemanagementWorkplanbids(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementWorkplanbids">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementWorkplanbids"]>;
  GetWorkforcemanagementWorkplanbidWorkplans(...args: GenesysCloudFullApiOperationArgs<"getWorkforcemanagementWorkplanbidWorkplans">): Promise<GenesysCloudFullApiOperationResponseMap["getWorkforcemanagementWorkplanbidWorkplans"]>;
  PatchWorkforcemanagementAgentAdherenceExplanation(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementAgentAdherenceExplanation">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementAgentAdherenceExplanation"]>;
  PatchWorkforcemanagementAlternativeshiftsTrade(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementAlternativeshiftsTrade">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementAlternativeshiftsTrade"]>;
  PatchWorkforcemanagementAlternativeshiftsTradesStateJobs(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementAlternativeshiftsTradesStateJobs">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementAlternativeshiftsTradesStateJobs"]>;
}

export const GenesysCloudFullApiWorkforceManagement02GeneratedFunctionNames = [
  "GetWorkforcemanagementBusinessunitTimeoffplan",
  "GetWorkforcemanagementBusinessunitTimeoffplans",
  "GetWorkforcemanagementBusinessunitUsers",
  "GetWorkforcemanagementBusinessunitWeekSchedule",
  "GetWorkforcemanagementBusinessunitWeekScheduleGenerationresults",
  "GetWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast",
  "GetWorkforcemanagementBusinessunitWeekScheduleHistoryAgent",
  "GetWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions",
  "GetWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation",
  "GetWorkforcemanagementBusinessunitWeekSchedules",
  "GetWorkforcemanagementBusinessunitWeekShorttermforecast",
  "GetWorkforcemanagementBusinessunitWeekShorttermforecastData",
  "GetWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults",
  "GetWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata",
  "GetWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups",
  "GetWorkforcemanagementBusinessunitWeekShorttermforecasts",
  "GetWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement",
  "GetWorkforcemanagementBusinessunitWorkplanbid",
  "GetWorkforcemanagementBusinessunitWorkplanbidGroup",
  "GetWorkforcemanagementBusinessunitWorkplanbidGroupPreferences",
  "GetWorkforcemanagementBusinessunitWorkplanbidGroupsSummary",
  "GetWorkforcemanagementBusinessunitWorkplanbids",
  "GetWorkforcemanagementCalendarDataIcs",
  "GetWorkforcemanagementCalendarUrlIcs",
  "GetWorkforcemanagementHistoricaldataBulkRemoveJob",
  "GetWorkforcemanagementHistoricaldataBulkRemoveJobs",
  "GetWorkforcemanagementHistoricaldataImportstatus",
  "GetWorkforcemanagementHistoricaldataImportstatusJobId",
  "GetWorkforcemanagementIntegrationsHris",
  "GetWorkforcemanagementIntegrationsHrisTimeofftypesJob",
  "GetWorkforcemanagementManagementunit",
  "GetWorkforcemanagementManagementunitActivitycodes",
  "GetWorkforcemanagementManagementunitAdherence",
  "GetWorkforcemanagementManagementunitAgent",
  "GetWorkforcemanagementManagementunitAgentShifttrades",
  "GetWorkforcemanagementManagementunits",
  "GetWorkforcemanagementManagementunitsDivisionviews",
  "GetWorkforcemanagementManagementunitShifttradesMatched",
  "GetWorkforcemanagementManagementunitShifttradesUsers",
  "GetWorkforcemanagementManagementunitTimeofflimit",
  "GetWorkforcemanagementManagementunitTimeofflimits",
  "GetWorkforcemanagementManagementunitTimeoffplan",
  "GetWorkforcemanagementManagementunitTimeoffplans",
  "GetWorkforcemanagementManagementunitUsers",
  "GetWorkforcemanagementManagementunitUserTimeoffrequest",
  "GetWorkforcemanagementManagementunitUserTimeoffrequests",
  "GetWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits",
  "GetWorkforcemanagementManagementunitWeekSchedule",
  "GetWorkforcemanagementManagementunitWeekSchedules",
  "GetWorkforcemanagementManagementunitWeekShifttrades",
  "GetWorkforcemanagementManagementunitWorkplan",
  "GetWorkforcemanagementManagementunitWorkplanrotation",
  "GetWorkforcemanagementManagementunitWorkplanrotations",
  "GetWorkforcemanagementManagementunitWorkplans",
  "GetWorkforcemanagementNotifications",
  "GetWorkforcemanagementSchedulebidPreference",
  "GetWorkforcemanagementSchedulebids",
  "GetWorkforcemanagementSchedulebidSchedulesets",
  "GetWorkforcemanagementSchedulingjob",
  "GetWorkforcemanagementShifttrades",
  "GetWorkforcemanagementShifttradingTradeJob",
  "GetWorkforcemanagementShifttradingTradeMatchJob",
  "GetWorkforcemanagementShifttradingTradesJob",
  "GetWorkforcemanagementShifttradingTradesMineQueryJob",
  "GetWorkforcemanagementShifttradingTradeStateJob",
  "GetWorkforcemanagementShrinkageJob",
  "GetWorkforcemanagementTeamAdherence",
  "GetWorkforcemanagementTimeoffbalanceJob",
  "GetWorkforcemanagementTimeoffrequest",
  "GetWorkforcemanagementTimeoffrequests",
  "GetWorkforcemanagementTimeoffrequestWaitlistpositions",
  "GetWorkforcemanagementUnavailabletimesSettings",
  "GetWorkforcemanagementUnavailabletimesValidationJob",
  "GetWorkforcemanagementUserWorkplanbidranks",
  "GetWorkforcemanagementWorkplanbidPreferences",
  "GetWorkforcemanagementWorkplanbids",
  "GetWorkforcemanagementWorkplanbidWorkplans",
  "PatchWorkforcemanagementAgentAdherenceExplanation",
  "PatchWorkforcemanagementAlternativeshiftsTrade",
  "PatchWorkforcemanagementAlternativeshiftsTradesStateJobs"
] as const satisfies readonly (keyof GenesysCloudFullApiWorkforceManagement02GeneratedClient)[];

export function createGenesysCloudFullApiWorkforceManagement02GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiWorkforceManagement02GeneratedClient {
  return {
    GetWorkforcemanagementBusinessunitTimeoffplan: (...args) => callOperation("getWorkforcemanagementBusinessunitTimeoffplan", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitTimeoffplan">)),
    GetWorkforcemanagementBusinessunitTimeoffplans: (...args) => callOperation("getWorkforcemanagementBusinessunitTimeoffplans", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitTimeoffplans">)),
    GetWorkforcemanagementBusinessunitUsers: (...args) => callOperation("getWorkforcemanagementBusinessunitUsers", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitUsers">)),
    GetWorkforcemanagementBusinessunitWeekSchedule: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekSchedule", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekSchedule">)),
    GetWorkforcemanagementBusinessunitWeekScheduleGenerationresults: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekScheduleGenerationresults", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekScheduleGenerationresults">)),
    GetWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast">)),
    GetWorkforcemanagementBusinessunitWeekScheduleHistoryAgent: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent">)),
    GetWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions">)),
    GetWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation">)),
    GetWorkforcemanagementBusinessunitWeekSchedules: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekSchedules", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekSchedules">)),
    GetWorkforcemanagementBusinessunitWeekShorttermforecast: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekShorttermforecast", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecast">)),
    GetWorkforcemanagementBusinessunitWeekShorttermforecastData: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekShorttermforecastData", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecastData">)),
    GetWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults">)),
    GetWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata">)),
    GetWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups">)),
    GetWorkforcemanagementBusinessunitWeekShorttermforecasts: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekShorttermforecasts", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecasts">)),
    GetWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement: (...args) => callOperation("getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement">)),
    GetWorkforcemanagementBusinessunitWorkplanbid: (...args) => callOperation("getWorkforcemanagementBusinessunitWorkplanbid", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWorkplanbid">)),
    GetWorkforcemanagementBusinessunitWorkplanbidGroup: (...args) => callOperation("getWorkforcemanagementBusinessunitWorkplanbidGroup", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWorkplanbidGroup">)),
    GetWorkforcemanagementBusinessunitWorkplanbidGroupPreferences: (...args) => callOperation("getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences">)),
    GetWorkforcemanagementBusinessunitWorkplanbidGroupsSummary: (...args) => callOperation("getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary">)),
    GetWorkforcemanagementBusinessunitWorkplanbids: (...args) => callOperation("getWorkforcemanagementBusinessunitWorkplanbids", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementBusinessunitWorkplanbids">)),
    GetWorkforcemanagementCalendarDataIcs: (...args) => callOperation("getWorkforcemanagementCalendarDataIcs", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementCalendarDataIcs">)),
    GetWorkforcemanagementCalendarUrlIcs: (...args) => callOperation("getWorkforcemanagementCalendarUrlIcs", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementCalendarUrlIcs">)),
    GetWorkforcemanagementHistoricaldataBulkRemoveJob: (...args) => callOperation("getWorkforcemanagementHistoricaldataBulkRemoveJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementHistoricaldataBulkRemoveJob">)),
    GetWorkforcemanagementHistoricaldataBulkRemoveJobs: (...args) => callOperation("getWorkforcemanagementHistoricaldataBulkRemoveJobs", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementHistoricaldataBulkRemoveJobs">)),
    GetWorkforcemanagementHistoricaldataImportstatus: (...args) => callOperation("getWorkforcemanagementHistoricaldataImportstatus", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementHistoricaldataImportstatus">)),
    GetWorkforcemanagementHistoricaldataImportstatusJobId: (...args) => callOperation("getWorkforcemanagementHistoricaldataImportstatusJobId", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementHistoricaldataImportstatusJobId">)),
    GetWorkforcemanagementIntegrationsHris: (...args) => callOperation("getWorkforcemanagementIntegrationsHris", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementIntegrationsHris">)),
    GetWorkforcemanagementIntegrationsHrisTimeofftypesJob: (...args) => callOperation("getWorkforcemanagementIntegrationsHrisTimeofftypesJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementIntegrationsHrisTimeofftypesJob">)),
    GetWorkforcemanagementManagementunit: (...args) => callOperation("getWorkforcemanagementManagementunit", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunit">)),
    GetWorkforcemanagementManagementunitActivitycodes: (...args) => callOperation("getWorkforcemanagementManagementunitActivitycodes", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitActivitycodes">)),
    GetWorkforcemanagementManagementunitAdherence: (...args) => callOperation("getWorkforcemanagementManagementunitAdherence", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitAdherence">)),
    GetWorkforcemanagementManagementunitAgent: (...args) => callOperation("getWorkforcemanagementManagementunitAgent", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitAgent">)),
    GetWorkforcemanagementManagementunitAgentShifttrades: (...args) => callOperation("getWorkforcemanagementManagementunitAgentShifttrades", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitAgentShifttrades">)),
    GetWorkforcemanagementManagementunits: (...args) => callOperation("getWorkforcemanagementManagementunits", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunits">)),
    GetWorkforcemanagementManagementunitsDivisionviews: (...args) => callOperation("getWorkforcemanagementManagementunitsDivisionviews", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitsDivisionviews">)),
    GetWorkforcemanagementManagementunitShifttradesMatched: (...args) => callOperation("getWorkforcemanagementManagementunitShifttradesMatched", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitShifttradesMatched">)),
    GetWorkforcemanagementManagementunitShifttradesUsers: (...args) => callOperation("getWorkforcemanagementManagementunitShifttradesUsers", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitShifttradesUsers">)),
    GetWorkforcemanagementManagementunitTimeofflimit: (...args) => callOperation("getWorkforcemanagementManagementunitTimeofflimit", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitTimeofflimit">)),
    GetWorkforcemanagementManagementunitTimeofflimits: (...args) => callOperation("getWorkforcemanagementManagementunitTimeofflimits", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitTimeofflimits">)),
    GetWorkforcemanagementManagementunitTimeoffplan: (...args) => callOperation("getWorkforcemanagementManagementunitTimeoffplan", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitTimeoffplan">)),
    GetWorkforcemanagementManagementunitTimeoffplans: (...args) => callOperation("getWorkforcemanagementManagementunitTimeoffplans", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitTimeoffplans">)),
    GetWorkforcemanagementManagementunitUsers: (...args) => callOperation("getWorkforcemanagementManagementunitUsers", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitUsers">)),
    GetWorkforcemanagementManagementunitUserTimeoffrequest: (...args) => callOperation("getWorkforcemanagementManagementunitUserTimeoffrequest", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitUserTimeoffrequest">)),
    GetWorkforcemanagementManagementunitUserTimeoffrequests: (...args) => callOperation("getWorkforcemanagementManagementunitUserTimeoffrequests", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitUserTimeoffrequests">)),
    GetWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits: (...args) => callOperation("getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits">)),
    GetWorkforcemanagementManagementunitWeekSchedule: (...args) => callOperation("getWorkforcemanagementManagementunitWeekSchedule", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWeekSchedule">)),
    GetWorkforcemanagementManagementunitWeekSchedules: (...args) => callOperation("getWorkforcemanagementManagementunitWeekSchedules", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWeekSchedules">)),
    GetWorkforcemanagementManagementunitWeekShifttrades: (...args) => callOperation("getWorkforcemanagementManagementunitWeekShifttrades", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWeekShifttrades">)),
    GetWorkforcemanagementManagementunitWorkplan: (...args) => callOperation("getWorkforcemanagementManagementunitWorkplan", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWorkplan">)),
    GetWorkforcemanagementManagementunitWorkplanrotation: (...args) => callOperation("getWorkforcemanagementManagementunitWorkplanrotation", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWorkplanrotation">)),
    GetWorkforcemanagementManagementunitWorkplanrotations: (...args) => callOperation("getWorkforcemanagementManagementunitWorkplanrotations", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWorkplanrotations">)),
    GetWorkforcemanagementManagementunitWorkplans: (...args) => callOperation("getWorkforcemanagementManagementunitWorkplans", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementManagementunitWorkplans">)),
    GetWorkforcemanagementNotifications: (...args) => callOperation("getWorkforcemanagementNotifications", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementNotifications">)),
    GetWorkforcemanagementSchedulebidPreference: (...args) => callOperation("getWorkforcemanagementSchedulebidPreference", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementSchedulebidPreference">)),
    GetWorkforcemanagementSchedulebids: (...args) => callOperation("getWorkforcemanagementSchedulebids", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementSchedulebids">)),
    GetWorkforcemanagementSchedulebidSchedulesets: (...args) => callOperation("getWorkforcemanagementSchedulebidSchedulesets", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementSchedulebidSchedulesets">)),
    GetWorkforcemanagementSchedulingjob: (...args) => callOperation("getWorkforcemanagementSchedulingjob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementSchedulingjob">)),
    GetWorkforcemanagementShifttrades: (...args) => callOperation("getWorkforcemanagementShifttrades", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShifttrades">)),
    GetWorkforcemanagementShifttradingTradeJob: (...args) => callOperation("getWorkforcemanagementShifttradingTradeJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShifttradingTradeJob">)),
    GetWorkforcemanagementShifttradingTradeMatchJob: (...args) => callOperation("getWorkforcemanagementShifttradingTradeMatchJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShifttradingTradeMatchJob">)),
    GetWorkforcemanagementShifttradingTradesJob: (...args) => callOperation("getWorkforcemanagementShifttradingTradesJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShifttradingTradesJob">)),
    GetWorkforcemanagementShifttradingTradesMineQueryJob: (...args) => callOperation("getWorkforcemanagementShifttradingTradesMineQueryJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShifttradingTradesMineQueryJob">)),
    GetWorkforcemanagementShifttradingTradeStateJob: (...args) => callOperation("getWorkforcemanagementShifttradingTradeStateJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShifttradingTradeStateJob">)),
    GetWorkforcemanagementShrinkageJob: (...args) => callOperation("getWorkforcemanagementShrinkageJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementShrinkageJob">)),
    GetWorkforcemanagementTeamAdherence: (...args) => callOperation("getWorkforcemanagementTeamAdherence", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementTeamAdherence">)),
    GetWorkforcemanagementTimeoffbalanceJob: (...args) => callOperation("getWorkforcemanagementTimeoffbalanceJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementTimeoffbalanceJob">)),
    GetWorkforcemanagementTimeoffrequest: (...args) => callOperation("getWorkforcemanagementTimeoffrequest", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementTimeoffrequest">)),
    GetWorkforcemanagementTimeoffrequests: (...args) => callOperation("getWorkforcemanagementTimeoffrequests", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementTimeoffrequests">)),
    GetWorkforcemanagementTimeoffrequestWaitlistpositions: (...args) => callOperation("getWorkforcemanagementTimeoffrequestWaitlistpositions", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementTimeoffrequestWaitlistpositions">)),
    GetWorkforcemanagementUnavailabletimesSettings: (...args) => callOperation("getWorkforcemanagementUnavailabletimesSettings", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementUnavailabletimesSettings">)),
    GetWorkforcemanagementUnavailabletimesValidationJob: (...args) => callOperation("getWorkforcemanagementUnavailabletimesValidationJob", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementUnavailabletimesValidationJob">)),
    GetWorkforcemanagementUserWorkplanbidranks: (...args) => callOperation("getWorkforcemanagementUserWorkplanbidranks", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementUserWorkplanbidranks">)),
    GetWorkforcemanagementWorkplanbidPreferences: (...args) => callOperation("getWorkforcemanagementWorkplanbidPreferences", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementWorkplanbidPreferences">)),
    GetWorkforcemanagementWorkplanbids: (...args) => callOperation("getWorkforcemanagementWorkplanbids", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementWorkplanbids">)),
    GetWorkforcemanagementWorkplanbidWorkplans: (...args) => callOperation("getWorkforcemanagementWorkplanbidWorkplans", ...(args as GenesysCloudFullApiOperationArgs<"getWorkforcemanagementWorkplanbidWorkplans">)),
    PatchWorkforcemanagementAgentAdherenceExplanation: (...args) => callOperation("patchWorkforcemanagementAgentAdherenceExplanation", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementAgentAdherenceExplanation">)),
    PatchWorkforcemanagementAlternativeshiftsTrade: (...args) => callOperation("patchWorkforcemanagementAlternativeshiftsTrade", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementAlternativeshiftsTrade">)),
    PatchWorkforcemanagementAlternativeshiftsTradesStateJobs: (...args) => callOperation("patchWorkforcemanagementAlternativeshiftsTradesStateJobs", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementAlternativeshiftsTradesStateJobs">)),
  };
}
