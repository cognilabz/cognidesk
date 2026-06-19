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
export const GenesysCloudFullApiWorkforceManagement03OperationKeys = [
  "patchWorkforcemanagementBusinessunit",
  "patchWorkforcemanagementBusinessunitActivitycode",
  "patchWorkforcemanagementBusinessunitActivityplan",
  "patchWorkforcemanagementBusinessunitAlternativeshiftsSettings",
  "patchWorkforcemanagementBusinessunitCapacityplan",
  "patchWorkforcemanagementBusinessunitMinimumstaffingSettings",
  "patchWorkforcemanagementBusinessunitOpportunity",
  "patchWorkforcemanagementBusinessunitPlanninggroup",
  "patchWorkforcemanagementBusinessunitSchedulebid",
  "patchWorkforcemanagementBusinessunitSchedulebidGroup",
  "patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences",
  "patchWorkforcemanagementBusinessunitSchedulerSettings",
  "patchWorkforcemanagementBusinessunitSchedulingRun",
  "patchWorkforcemanagementBusinessunitServicegoaltemplate",
  "patchWorkforcemanagementBusinessunitStaffinggroup",
  "patchWorkforcemanagementBusinessunitTimeoffplan",
  "patchWorkforcemanagementBusinessunitWorkplanbid",
  "patchWorkforcemanagementBusinessunitWorkplanbidGroup",
  "patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences",
  "patchWorkforcemanagementManagementunit",
  "patchWorkforcemanagementManagementunitAgents",
  "patchWorkforcemanagementManagementunitAgentsWorkplansBulk",
  "patchWorkforcemanagementManagementunitTimeofflimit",
  "patchWorkforcemanagementManagementunitTimeoffplan",
  "patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus",
  "patchWorkforcemanagementManagementunitUnavailabletimesSettings",
  "patchWorkforcemanagementManagementunitUserTimeoffrequest",
  "patchWorkforcemanagementManagementunitWeekShifttrade",
  "patchWorkforcemanagementManagementunitWorkplan",
  "patchWorkforcemanagementManagementunitWorkplanrotation",
  "patchWorkforcemanagementTimeoffrequest",
  "patchWorkforcemanagementUnavailabletimes",
  "patchWorkforcemanagementUsersWorkplanbidranksBulk",
  "patchWorkforcemanagementUserWorkplanbidranks",
  "patchWorkforcemanagementWorkplanbidPreferences",
  "postWorkforcemanagementAdherenceExplanations",
  "postWorkforcemanagementAdherenceExplanationsQuery",
  "postWorkforcemanagementAdherenceHistoricalBulk",
  "postWorkforcemanagementAgentAdherenceExplanations",
  "postWorkforcemanagementAgentAdherenceExplanationsQuery",
  "postWorkforcemanagementAgents",
  "postWorkforcemanagementAgentschedulesManagementunitsMine",
  "postWorkforcemanagementAgentschedulesMine",
  "postWorkforcemanagementAgentsIntegrationsHrisQuery",
  "postWorkforcemanagementAgentsMeAdherenceHistoricalJobs",
  "postWorkforcemanagementAgentsMePossibleworkshifts",
  "postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd",
  "postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate",
  "postWorkforcemanagementAgentsOpportunitiesQuery",
  "postWorkforcemanagementAgentUnavailabletimesQuery",
  "postWorkforcemanagementAlternativeshiftsOffersJobs",
  "postWorkforcemanagementAlternativeshiftsOffersSearchJobs",
  "postWorkforcemanagementAlternativeshiftsTrades",
  "postWorkforcemanagementBusinessunitActivitycodes",
  "postWorkforcemanagementBusinessunitActivityplanRunsJobs",
  "postWorkforcemanagementBusinessunitActivityplans",
  "postWorkforcemanagementBusinessunitAdherenceExplanationsQuery",
  "postWorkforcemanagementBusinessunitAgentschedulesSearch",
  "postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch",
  "postWorkforcemanagementBusinessunitCapacityplanCopy",
  "postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate",
  "postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate",
  "postWorkforcemanagementBusinessunitCapacityplans",
  "postWorkforcemanagementBusinessunitCapacityplansBulkRemove",
  "postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations",
  "postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery",
  "postWorkforcemanagementBusinessunitIntraday",
  "postWorkforcemanagementBusinessunitOpportunitiesBulkAdd",
  "postWorkforcemanagementBusinessunitOpportunitiesBulkPublish",
  "postWorkforcemanagementBusinessunitOpportunitiesBulkRemove",
  "postWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate",
  "postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate",
  "postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery",
  "postWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery",
  "postWorkforcemanagementBusinessunitOpportunitiesQuery",
  "postWorkforcemanagementBusinessunitPlanninggroups",
  "postWorkforcemanagementBusinessunits",
  "postWorkforcemanagementBusinessunitSchedulebidCopy",
  "postWorkforcemanagementBusinessunitSchedulebidGroups",
  "postWorkforcemanagementBusinessunitSchedulebids"
] as const;
export type GenesysCloudFullApiWorkforceManagement03OperationKey = typeof GenesysCloudFullApiWorkforceManagement03OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiWorkforceManagement03OperationPathParamMap {
  "patchWorkforcemanagementBusinessunit": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitActivitycode": { "businessUnitId": GenesysCloudFullApiPathParamValue; "activityCodeId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitActivityplan": { "businessUnitId": GenesysCloudFullApiPathParamValue; "activityPlanId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitAlternativeshiftsSettings": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitCapacityplan": { "businessUnitId": GenesysCloudFullApiPathParamValue; "capacityPlanId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitMinimumstaffingSettings": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitOpportunity": { "businessUnitId": GenesysCloudFullApiPathParamValue; "opportunityId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitPlanninggroup": { "businessUnitId": GenesysCloudFullApiPathParamValue; "planningGroupId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitSchedulebid": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitSchedulebidGroup": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue; "bidGroupId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue; "bidGroupId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitSchedulerSettings": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitSchedulingRun": { "businessUnitId": GenesysCloudFullApiPathParamValue; "runId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitServicegoaltemplate": { "businessUnitId": GenesysCloudFullApiPathParamValue; "serviceGoalTemplateId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitStaffinggroup": { "businessUnitId": GenesysCloudFullApiPathParamValue; "staffingGroupId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitTimeoffplan": { "businessUnitId": GenesysCloudFullApiPathParamValue; "timeOffPlanId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitWorkplanbid": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitWorkplanbidGroup": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue; "bidGroupId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue; "bidGroupId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementManagementunit": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementManagementunitAgents": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementManagementunitAgentsWorkplansBulk": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementManagementunitTimeofflimit": { "managementUnitId": GenesysCloudFullApiPathParamValue; "timeOffLimitId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementManagementunitTimeoffplan": { "managementUnitId": GenesysCloudFullApiPathParamValue; "timeOffPlanId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus": { "managementUnitId": GenesysCloudFullApiPathParamValue; "timeOffRequestId": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementManagementunitUnavailabletimesSettings": { "managementUnitId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementManagementunitUserTimeoffrequest": { "managementUnitId": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue; "timeOffRequestId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementManagementunitWeekShifttrade": { "managementUnitId": GenesysCloudFullApiPathParamValue; "weekDateId": GenesysCloudFullApiPathParamValue; "tradeId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementManagementunitWorkplan": { "managementUnitId": GenesysCloudFullApiPathParamValue; "workPlanId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementManagementunitWorkplanrotation": { "managementUnitId": GenesysCloudFullApiPathParamValue; "workPlanRotationId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementTimeoffrequest": { "timeOffRequestId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementUnavailabletimes": {};
  "patchWorkforcemanagementUsersWorkplanbidranksBulk": {};
  "patchWorkforcemanagementUserWorkplanbidranks": { "userId": GenesysCloudFullApiPathParamValue };
  "patchWorkforcemanagementWorkplanbidPreferences": { "bidId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementAdherenceExplanations": {};
  "postWorkforcemanagementAdherenceExplanationsQuery": {};
  "postWorkforcemanagementAdherenceHistoricalBulk": {};
  "postWorkforcemanagementAgentAdherenceExplanations": { "agentId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementAgentAdherenceExplanationsQuery": { "agentId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementAgents": {};
  "postWorkforcemanagementAgentschedulesManagementunitsMine": {};
  "postWorkforcemanagementAgentschedulesMine": {};
  "postWorkforcemanagementAgentsIntegrationsHrisQuery": {};
  "postWorkforcemanagementAgentsMeAdherenceHistoricalJobs": {};
  "postWorkforcemanagementAgentsMePossibleworkshifts": {};
  "postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd": {};
  "postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate": {};
  "postWorkforcemanagementAgentsOpportunitiesQuery": {};
  "postWorkforcemanagementAgentUnavailabletimesQuery": { "agentId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementAlternativeshiftsOffersJobs": {};
  "postWorkforcemanagementAlternativeshiftsOffersSearchJobs": {};
  "postWorkforcemanagementAlternativeshiftsTrades": {};
  "postWorkforcemanagementBusinessunitActivitycodes": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitActivityplanRunsJobs": { "businessUnitId": GenesysCloudFullApiPathParamValue; "activityPlanId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitActivityplans": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitAdherenceExplanationsQuery": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitAgentschedulesSearch": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitCapacityplanCopy": { "businessUnitId": GenesysCloudFullApiPathParamValue; "capacityPlanId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate": { "businessUnitId": GenesysCloudFullApiPathParamValue; "weekDateId": GenesysCloudFullApiPathParamValue; "forecastId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate": { "businessUnitId": GenesysCloudFullApiPathParamValue; "capacityPlanId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitCapacityplans": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitCapacityplansBulkRemove": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations": { "businessUnitId": GenesysCloudFullApiPathParamValue; "capacityPlanId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery": { "businessUnitId": GenesysCloudFullApiPathParamValue; "capacityPlanId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitIntraday": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitOpportunitiesBulkAdd": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitOpportunitiesBulkPublish": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitOpportunitiesBulkRemove": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitOpportunitiesQuery": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitPlanninggroups": { "businessUnitId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunits": {};
  "postWorkforcemanagementBusinessunitSchedulebidCopy": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitSchedulebidGroups": { "businessUnitId": GenesysCloudFullApiPathParamValue; "bidId": GenesysCloudFullApiPathParamValue };
  "postWorkforcemanagementBusinessunitSchedulebids": { "businessUnitId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiWorkforceManagement03OperationRequestMap {
  "patchWorkforcemanagementBusinessunit": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunit">;
  "patchWorkforcemanagementBusinessunitActivitycode": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitActivitycode">;
  "patchWorkforcemanagementBusinessunitActivityplan": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitActivityplan">;
  "patchWorkforcemanagementBusinessunitAlternativeshiftsSettings": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitAlternativeshiftsSettings">;
  "patchWorkforcemanagementBusinessunitCapacityplan": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitCapacityplan">;
  "patchWorkforcemanagementBusinessunitMinimumstaffingSettings": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitMinimumstaffingSettings">;
  "patchWorkforcemanagementBusinessunitOpportunity": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitOpportunity">;
  "patchWorkforcemanagementBusinessunitPlanninggroup": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitPlanninggroup">;
  "patchWorkforcemanagementBusinessunitSchedulebid": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitSchedulebid">;
  "patchWorkforcemanagementBusinessunitSchedulebidGroup": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitSchedulebidGroup">;
  "patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences">;
  "patchWorkforcemanagementBusinessunitSchedulerSettings": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitSchedulerSettings">;
  "patchWorkforcemanagementBusinessunitSchedulingRun": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitSchedulingRun">;
  "patchWorkforcemanagementBusinessunitServicegoaltemplate": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitServicegoaltemplate">;
  "patchWorkforcemanagementBusinessunitStaffinggroup": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitStaffinggroup">;
  "patchWorkforcemanagementBusinessunitTimeoffplan": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitTimeoffplan">;
  "patchWorkforcemanagementBusinessunitWorkplanbid": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitWorkplanbid">;
  "patchWorkforcemanagementBusinessunitWorkplanbidGroup": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitWorkplanbidGroup">;
  "patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences">;
  "patchWorkforcemanagementManagementunit": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementManagementunit">;
  "patchWorkforcemanagementManagementunitAgents": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementManagementunitAgents">;
  "patchWorkforcemanagementManagementunitAgentsWorkplansBulk": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementManagementunitAgentsWorkplansBulk">;
  "patchWorkforcemanagementManagementunitTimeofflimit": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementManagementunitTimeofflimit">;
  "patchWorkforcemanagementManagementunitTimeoffplan": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementManagementunitTimeoffplan">;
  "patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus">;
  "patchWorkforcemanagementManagementunitUnavailabletimesSettings": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementManagementunitUnavailabletimesSettings">;
  "patchWorkforcemanagementManagementunitUserTimeoffrequest": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementManagementunitUserTimeoffrequest">;
  "patchWorkforcemanagementManagementunitWeekShifttrade": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementManagementunitWeekShifttrade">;
  "patchWorkforcemanagementManagementunitWorkplan": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementManagementunitWorkplan">;
  "patchWorkforcemanagementManagementunitWorkplanrotation": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementManagementunitWorkplanrotation">;
  "patchWorkforcemanagementTimeoffrequest": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementTimeoffrequest">;
  "patchWorkforcemanagementUnavailabletimes": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementUnavailabletimes">;
  "patchWorkforcemanagementUsersWorkplanbidranksBulk": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementUsersWorkplanbidranksBulk">;
  "patchWorkforcemanagementUserWorkplanbidranks": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementUserWorkplanbidranks">;
  "patchWorkforcemanagementWorkplanbidPreferences": GenesysCloudFullApiOperationInput<"patchWorkforcemanagementWorkplanbidPreferences">;
  "postWorkforcemanagementAdherenceExplanations": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAdherenceExplanations">;
  "postWorkforcemanagementAdherenceExplanationsQuery": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAdherenceExplanationsQuery">;
  "postWorkforcemanagementAdherenceHistoricalBulk": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAdherenceHistoricalBulk">;
  "postWorkforcemanagementAgentAdherenceExplanations": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAgentAdherenceExplanations">;
  "postWorkforcemanagementAgentAdherenceExplanationsQuery": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAgentAdherenceExplanationsQuery">;
  "postWorkforcemanagementAgents": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAgents">;
  "postWorkforcemanagementAgentschedulesManagementunitsMine": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAgentschedulesManagementunitsMine">;
  "postWorkforcemanagementAgentschedulesMine": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAgentschedulesMine">;
  "postWorkforcemanagementAgentsIntegrationsHrisQuery": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAgentsIntegrationsHrisQuery">;
  "postWorkforcemanagementAgentsMeAdherenceHistoricalJobs": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAgentsMeAdherenceHistoricalJobs">;
  "postWorkforcemanagementAgentsMePossibleworkshifts": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAgentsMePossibleworkshifts">;
  "postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd">;
  "postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate">;
  "postWorkforcemanagementAgentsOpportunitiesQuery": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAgentsOpportunitiesQuery">;
  "postWorkforcemanagementAgentUnavailabletimesQuery": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAgentUnavailabletimesQuery">;
  "postWorkforcemanagementAlternativeshiftsOffersJobs": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAlternativeshiftsOffersJobs">;
  "postWorkforcemanagementAlternativeshiftsOffersSearchJobs": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAlternativeshiftsOffersSearchJobs">;
  "postWorkforcemanagementAlternativeshiftsTrades": GenesysCloudFullApiOperationInput<"postWorkforcemanagementAlternativeshiftsTrades">;
  "postWorkforcemanagementBusinessunitActivitycodes": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitActivitycodes">;
  "postWorkforcemanagementBusinessunitActivityplanRunsJobs": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitActivityplanRunsJobs">;
  "postWorkforcemanagementBusinessunitActivityplans": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitActivityplans">;
  "postWorkforcemanagementBusinessunitAdherenceExplanationsQuery": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitAdherenceExplanationsQuery">;
  "postWorkforcemanagementBusinessunitAgentschedulesSearch": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitAgentschedulesSearch">;
  "postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch">;
  "postWorkforcemanagementBusinessunitCapacityplanCopy": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitCapacityplanCopy">;
  "postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate">;
  "postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate">;
  "postWorkforcemanagementBusinessunitCapacityplans": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitCapacityplans">;
  "postWorkforcemanagementBusinessunitCapacityplansBulkRemove": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitCapacityplansBulkRemove">;
  "postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations">;
  "postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery">;
  "postWorkforcemanagementBusinessunitIntraday": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitIntraday">;
  "postWorkforcemanagementBusinessunitOpportunitiesBulkAdd": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitOpportunitiesBulkAdd">;
  "postWorkforcemanagementBusinessunitOpportunitiesBulkPublish": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitOpportunitiesBulkPublish">;
  "postWorkforcemanagementBusinessunitOpportunitiesBulkRemove": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitOpportunitiesBulkRemove">;
  "postWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate">;
  "postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate">;
  "postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery">;
  "postWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery">;
  "postWorkforcemanagementBusinessunitOpportunitiesQuery": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitOpportunitiesQuery">;
  "postWorkforcemanagementBusinessunitPlanninggroups": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitPlanninggroups">;
  "postWorkforcemanagementBusinessunits": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunits">;
  "postWorkforcemanagementBusinessunitSchedulebidCopy": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitSchedulebidCopy">;
  "postWorkforcemanagementBusinessunitSchedulebidGroups": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitSchedulebidGroups">;
  "postWorkforcemanagementBusinessunitSchedulebids": GenesysCloudFullApiOperationInput<"postWorkforcemanagementBusinessunitSchedulebids">;
}

export interface GenesysCloudFullApiWorkforceManagement03GeneratedClient {
  PatchWorkforcemanagementBusinessunit(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunit">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunit"]>;
  PatchWorkforcemanagementBusinessunitActivitycode(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitActivitycode">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitActivitycode"]>;
  PatchWorkforcemanagementBusinessunitActivityplan(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitActivityplan">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitActivityplan"]>;
  PatchWorkforcemanagementBusinessunitAlternativeshiftsSettings(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitAlternativeshiftsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitAlternativeshiftsSettings"]>;
  PatchWorkforcemanagementBusinessunitCapacityplan(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitCapacityplan">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitCapacityplan"]>;
  PatchWorkforcemanagementBusinessunitMinimumstaffingSettings(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitMinimumstaffingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitMinimumstaffingSettings"]>;
  PatchWorkforcemanagementBusinessunitOpportunity(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitOpportunity">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitOpportunity"]>;
  PatchWorkforcemanagementBusinessunitPlanninggroup(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitPlanninggroup">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitPlanninggroup"]>;
  PatchWorkforcemanagementBusinessunitSchedulebid(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitSchedulebid">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitSchedulebid"]>;
  PatchWorkforcemanagementBusinessunitSchedulebidGroup(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitSchedulebidGroup">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitSchedulebidGroup"]>;
  PatchWorkforcemanagementBusinessunitSchedulebidGroupPreferences(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences"]>;
  PatchWorkforcemanagementBusinessunitSchedulerSettings(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitSchedulerSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitSchedulerSettings"]>;
  PatchWorkforcemanagementBusinessunitSchedulingRun(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitSchedulingRun">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitSchedulingRun"]>;
  PatchWorkforcemanagementBusinessunitServicegoaltemplate(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitServicegoaltemplate">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitServicegoaltemplate"]>;
  PatchWorkforcemanagementBusinessunitStaffinggroup(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitStaffinggroup">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitStaffinggroup"]>;
  PatchWorkforcemanagementBusinessunitTimeoffplan(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitTimeoffplan">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitTimeoffplan"]>;
  PatchWorkforcemanagementBusinessunitWorkplanbid(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitWorkplanbid">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitWorkplanbid"]>;
  PatchWorkforcemanagementBusinessunitWorkplanbidGroup(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitWorkplanbidGroup">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitWorkplanbidGroup"]>;
  PatchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences"]>;
  PatchWorkforcemanagementManagementunit(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunit">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementManagementunit"]>;
  PatchWorkforcemanagementManagementunitAgents(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitAgents">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementManagementunitAgents"]>;
  PatchWorkforcemanagementManagementunitAgentsWorkplansBulk(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitAgentsWorkplansBulk">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementManagementunitAgentsWorkplansBulk"]>;
  PatchWorkforcemanagementManagementunitTimeofflimit(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitTimeofflimit">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementManagementunitTimeofflimit"]>;
  PatchWorkforcemanagementManagementunitTimeoffplan(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitTimeoffplan">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementManagementunitTimeoffplan"]>;
  PatchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus"]>;
  PatchWorkforcemanagementManagementunitUnavailabletimesSettings(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitUnavailabletimesSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementManagementunitUnavailabletimesSettings"]>;
  PatchWorkforcemanagementManagementunitUserTimeoffrequest(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitUserTimeoffrequest">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementManagementunitUserTimeoffrequest"]>;
  PatchWorkforcemanagementManagementunitWeekShifttrade(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitWeekShifttrade">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementManagementunitWeekShifttrade"]>;
  PatchWorkforcemanagementManagementunitWorkplan(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitWorkplan">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementManagementunitWorkplan"]>;
  PatchWorkforcemanagementManagementunitWorkplanrotation(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitWorkplanrotation">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementManagementunitWorkplanrotation"]>;
  PatchWorkforcemanagementTimeoffrequest(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementTimeoffrequest">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementTimeoffrequest"]>;
  PatchWorkforcemanagementUnavailabletimes(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementUnavailabletimes">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementUnavailabletimes"]>;
  PatchWorkforcemanagementUsersWorkplanbidranksBulk(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementUsersWorkplanbidranksBulk">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementUsersWorkplanbidranksBulk"]>;
  PatchWorkforcemanagementUserWorkplanbidranks(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementUserWorkplanbidranks">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementUserWorkplanbidranks"]>;
  PatchWorkforcemanagementWorkplanbidPreferences(...args: GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementWorkplanbidPreferences">): Promise<GenesysCloudFullApiOperationResponseMap["patchWorkforcemanagementWorkplanbidPreferences"]>;
  PostWorkforcemanagementAdherenceExplanations(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAdherenceExplanations">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAdherenceExplanations"]>;
  PostWorkforcemanagementAdherenceExplanationsQuery(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAdherenceExplanationsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAdherenceExplanationsQuery"]>;
  PostWorkforcemanagementAdherenceHistoricalBulk(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAdherenceHistoricalBulk">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAdherenceHistoricalBulk"]>;
  PostWorkforcemanagementAgentAdherenceExplanations(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentAdherenceExplanations">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAgentAdherenceExplanations"]>;
  PostWorkforcemanagementAgentAdherenceExplanationsQuery(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentAdherenceExplanationsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAgentAdherenceExplanationsQuery"]>;
  PostWorkforcemanagementAgents(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgents">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAgents"]>;
  PostWorkforcemanagementAgentschedulesManagementunitsMine(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentschedulesManagementunitsMine">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAgentschedulesManagementunitsMine"]>;
  PostWorkforcemanagementAgentschedulesMine(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentschedulesMine">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAgentschedulesMine"]>;
  PostWorkforcemanagementAgentsIntegrationsHrisQuery(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentsIntegrationsHrisQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAgentsIntegrationsHrisQuery"]>;
  PostWorkforcemanagementAgentsMeAdherenceHistoricalJobs(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentsMeAdherenceHistoricalJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAgentsMeAdherenceHistoricalJobs"]>;
  PostWorkforcemanagementAgentsMePossibleworkshifts(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentsMePossibleworkshifts">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAgentsMePossibleworkshifts"]>;
  PostWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd"]>;
  PostWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate"]>;
  PostWorkforcemanagementAgentsOpportunitiesQuery(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentsOpportunitiesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAgentsOpportunitiesQuery"]>;
  PostWorkforcemanagementAgentUnavailabletimesQuery(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentUnavailabletimesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAgentUnavailabletimesQuery"]>;
  PostWorkforcemanagementAlternativeshiftsOffersJobs(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAlternativeshiftsOffersJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAlternativeshiftsOffersJobs"]>;
  PostWorkforcemanagementAlternativeshiftsOffersSearchJobs(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAlternativeshiftsOffersSearchJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAlternativeshiftsOffersSearchJobs"]>;
  PostWorkforcemanagementAlternativeshiftsTrades(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAlternativeshiftsTrades">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementAlternativeshiftsTrades"]>;
  PostWorkforcemanagementBusinessunitActivitycodes(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitActivitycodes">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitActivitycodes"]>;
  PostWorkforcemanagementBusinessunitActivityplanRunsJobs(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitActivityplanRunsJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitActivityplanRunsJobs"]>;
  PostWorkforcemanagementBusinessunitActivityplans(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitActivityplans">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitActivityplans"]>;
  PostWorkforcemanagementBusinessunitAdherenceExplanationsQuery(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitAdherenceExplanationsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitAdherenceExplanationsQuery"]>;
  PostWorkforcemanagementBusinessunitAgentschedulesSearch(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitAgentschedulesSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitAgentschedulesSearch"]>;
  PostWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch"]>;
  PostWorkforcemanagementBusinessunitCapacityplanCopy(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplanCopy">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitCapacityplanCopy"]>;
  PostWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate"]>;
  PostWorkforcemanagementBusinessunitCapacityplanRequirementGenerate(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate"]>;
  PostWorkforcemanagementBusinessunitCapacityplans(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplans">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitCapacityplans"]>;
  PostWorkforcemanagementBusinessunitCapacityplansBulkRemove(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplansBulkRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitCapacityplansBulkRemove"]>;
  PostWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations"]>;
  PostWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery"]>;
  PostWorkforcemanagementBusinessunitIntraday(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitIntraday">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitIntraday"]>;
  PostWorkforcemanagementBusinessunitOpportunitiesBulkAdd(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesBulkAdd">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitOpportunitiesBulkAdd"]>;
  PostWorkforcemanagementBusinessunitOpportunitiesBulkPublish(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesBulkPublish">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitOpportunitiesBulkPublish"]>;
  PostWorkforcemanagementBusinessunitOpportunitiesBulkRemove(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesBulkRemove">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitOpportunitiesBulkRemove"]>;
  PostWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate"]>;
  PostWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate"]>;
  PostWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery"]>;
  PostWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery"]>;
  PostWorkforcemanagementBusinessunitOpportunitiesQuery(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesQuery">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitOpportunitiesQuery"]>;
  PostWorkforcemanagementBusinessunitPlanninggroups(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitPlanninggroups">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitPlanninggroups"]>;
  PostWorkforcemanagementBusinessunits(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunits">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunits"]>;
  PostWorkforcemanagementBusinessunitSchedulebidCopy(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitSchedulebidCopy">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitSchedulebidCopy"]>;
  PostWorkforcemanagementBusinessunitSchedulebidGroups(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitSchedulebidGroups">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitSchedulebidGroups"]>;
  PostWorkforcemanagementBusinessunitSchedulebids(...args: GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitSchedulebids">): Promise<GenesysCloudFullApiOperationResponseMap["postWorkforcemanagementBusinessunitSchedulebids"]>;
}

export const GenesysCloudFullApiWorkforceManagement03GeneratedFunctionNames = [
  "PatchWorkforcemanagementBusinessunit",
  "PatchWorkforcemanagementBusinessunitActivitycode",
  "PatchWorkforcemanagementBusinessunitActivityplan",
  "PatchWorkforcemanagementBusinessunitAlternativeshiftsSettings",
  "PatchWorkforcemanagementBusinessunitCapacityplan",
  "PatchWorkforcemanagementBusinessunitMinimumstaffingSettings",
  "PatchWorkforcemanagementBusinessunitOpportunity",
  "PatchWorkforcemanagementBusinessunitPlanninggroup",
  "PatchWorkforcemanagementBusinessunitSchedulebid",
  "PatchWorkforcemanagementBusinessunitSchedulebidGroup",
  "PatchWorkforcemanagementBusinessunitSchedulebidGroupPreferences",
  "PatchWorkforcemanagementBusinessunitSchedulerSettings",
  "PatchWorkforcemanagementBusinessunitSchedulingRun",
  "PatchWorkforcemanagementBusinessunitServicegoaltemplate",
  "PatchWorkforcemanagementBusinessunitStaffinggroup",
  "PatchWorkforcemanagementBusinessunitTimeoffplan",
  "PatchWorkforcemanagementBusinessunitWorkplanbid",
  "PatchWorkforcemanagementBusinessunitWorkplanbidGroup",
  "PatchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences",
  "PatchWorkforcemanagementManagementunit",
  "PatchWorkforcemanagementManagementunitAgents",
  "PatchWorkforcemanagementManagementunitAgentsWorkplansBulk",
  "PatchWorkforcemanagementManagementunitTimeofflimit",
  "PatchWorkforcemanagementManagementunitTimeoffplan",
  "PatchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus",
  "PatchWorkforcemanagementManagementunitUnavailabletimesSettings",
  "PatchWorkforcemanagementManagementunitUserTimeoffrequest",
  "PatchWorkforcemanagementManagementunitWeekShifttrade",
  "PatchWorkforcemanagementManagementunitWorkplan",
  "PatchWorkforcemanagementManagementunitWorkplanrotation",
  "PatchWorkforcemanagementTimeoffrequest",
  "PatchWorkforcemanagementUnavailabletimes",
  "PatchWorkforcemanagementUsersWorkplanbidranksBulk",
  "PatchWorkforcemanagementUserWorkplanbidranks",
  "PatchWorkforcemanagementWorkplanbidPreferences",
  "PostWorkforcemanagementAdherenceExplanations",
  "PostWorkforcemanagementAdherenceExplanationsQuery",
  "PostWorkforcemanagementAdherenceHistoricalBulk",
  "PostWorkforcemanagementAgentAdherenceExplanations",
  "PostWorkforcemanagementAgentAdherenceExplanationsQuery",
  "PostWorkforcemanagementAgents",
  "PostWorkforcemanagementAgentschedulesManagementunitsMine",
  "PostWorkforcemanagementAgentschedulesMine",
  "PostWorkforcemanagementAgentsIntegrationsHrisQuery",
  "PostWorkforcemanagementAgentsMeAdherenceHistoricalJobs",
  "PostWorkforcemanagementAgentsMePossibleworkshifts",
  "PostWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd",
  "PostWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate",
  "PostWorkforcemanagementAgentsOpportunitiesQuery",
  "PostWorkforcemanagementAgentUnavailabletimesQuery",
  "PostWorkforcemanagementAlternativeshiftsOffersJobs",
  "PostWorkforcemanagementAlternativeshiftsOffersSearchJobs",
  "PostWorkforcemanagementAlternativeshiftsTrades",
  "PostWorkforcemanagementBusinessunitActivitycodes",
  "PostWorkforcemanagementBusinessunitActivityplanRunsJobs",
  "PostWorkforcemanagementBusinessunitActivityplans",
  "PostWorkforcemanagementBusinessunitAdherenceExplanationsQuery",
  "PostWorkforcemanagementBusinessunitAgentschedulesSearch",
  "PostWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch",
  "PostWorkforcemanagementBusinessunitCapacityplanCopy",
  "PostWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate",
  "PostWorkforcemanagementBusinessunitCapacityplanRequirementGenerate",
  "PostWorkforcemanagementBusinessunitCapacityplans",
  "PostWorkforcemanagementBusinessunitCapacityplansBulkRemove",
  "PostWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations",
  "PostWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery",
  "PostWorkforcemanagementBusinessunitIntraday",
  "PostWorkforcemanagementBusinessunitOpportunitiesBulkAdd",
  "PostWorkforcemanagementBusinessunitOpportunitiesBulkPublish",
  "PostWorkforcemanagementBusinessunitOpportunitiesBulkRemove",
  "PostWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate",
  "PostWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate",
  "PostWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery",
  "PostWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery",
  "PostWorkforcemanagementBusinessunitOpportunitiesQuery",
  "PostWorkforcemanagementBusinessunitPlanninggroups",
  "PostWorkforcemanagementBusinessunits",
  "PostWorkforcemanagementBusinessunitSchedulebidCopy",
  "PostWorkforcemanagementBusinessunitSchedulebidGroups",
  "PostWorkforcemanagementBusinessunitSchedulebids"
] as const satisfies readonly (keyof GenesysCloudFullApiWorkforceManagement03GeneratedClient)[];

export function createGenesysCloudFullApiWorkforceManagement03GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiWorkforceManagement03GeneratedClient {
  return {
    PatchWorkforcemanagementBusinessunit: (...args) => callOperation("patchWorkforcemanagementBusinessunit", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunit">)),
    PatchWorkforcemanagementBusinessunitActivitycode: (...args) => callOperation("patchWorkforcemanagementBusinessunitActivitycode", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitActivitycode">)),
    PatchWorkforcemanagementBusinessunitActivityplan: (...args) => callOperation("patchWorkforcemanagementBusinessunitActivityplan", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitActivityplan">)),
    PatchWorkforcemanagementBusinessunitAlternativeshiftsSettings: (...args) => callOperation("patchWorkforcemanagementBusinessunitAlternativeshiftsSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitAlternativeshiftsSettings">)),
    PatchWorkforcemanagementBusinessunitCapacityplan: (...args) => callOperation("patchWorkforcemanagementBusinessunitCapacityplan", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitCapacityplan">)),
    PatchWorkforcemanagementBusinessunitMinimumstaffingSettings: (...args) => callOperation("patchWorkforcemanagementBusinessunitMinimumstaffingSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitMinimumstaffingSettings">)),
    PatchWorkforcemanagementBusinessunitOpportunity: (...args) => callOperation("patchWorkforcemanagementBusinessunitOpportunity", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitOpportunity">)),
    PatchWorkforcemanagementBusinessunitPlanninggroup: (...args) => callOperation("patchWorkforcemanagementBusinessunitPlanninggroup", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitPlanninggroup">)),
    PatchWorkforcemanagementBusinessunitSchedulebid: (...args) => callOperation("patchWorkforcemanagementBusinessunitSchedulebid", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitSchedulebid">)),
    PatchWorkforcemanagementBusinessunitSchedulebidGroup: (...args) => callOperation("patchWorkforcemanagementBusinessunitSchedulebidGroup", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitSchedulebidGroup">)),
    PatchWorkforcemanagementBusinessunitSchedulebidGroupPreferences: (...args) => callOperation("patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences">)),
    PatchWorkforcemanagementBusinessunitSchedulerSettings: (...args) => callOperation("patchWorkforcemanagementBusinessunitSchedulerSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitSchedulerSettings">)),
    PatchWorkforcemanagementBusinessunitSchedulingRun: (...args) => callOperation("patchWorkforcemanagementBusinessunitSchedulingRun", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitSchedulingRun">)),
    PatchWorkforcemanagementBusinessunitServicegoaltemplate: (...args) => callOperation("patchWorkforcemanagementBusinessunitServicegoaltemplate", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitServicegoaltemplate">)),
    PatchWorkforcemanagementBusinessunitStaffinggroup: (...args) => callOperation("patchWorkforcemanagementBusinessunitStaffinggroup", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitStaffinggroup">)),
    PatchWorkforcemanagementBusinessunitTimeoffplan: (...args) => callOperation("patchWorkforcemanagementBusinessunitTimeoffplan", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitTimeoffplan">)),
    PatchWorkforcemanagementBusinessunitWorkplanbid: (...args) => callOperation("patchWorkforcemanagementBusinessunitWorkplanbid", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitWorkplanbid">)),
    PatchWorkforcemanagementBusinessunitWorkplanbidGroup: (...args) => callOperation("patchWorkforcemanagementBusinessunitWorkplanbidGroup", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitWorkplanbidGroup">)),
    PatchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences: (...args) => callOperation("patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences">)),
    PatchWorkforcemanagementManagementunit: (...args) => callOperation("patchWorkforcemanagementManagementunit", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunit">)),
    PatchWorkforcemanagementManagementunitAgents: (...args) => callOperation("patchWorkforcemanagementManagementunitAgents", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitAgents">)),
    PatchWorkforcemanagementManagementunitAgentsWorkplansBulk: (...args) => callOperation("patchWorkforcemanagementManagementunitAgentsWorkplansBulk", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitAgentsWorkplansBulk">)),
    PatchWorkforcemanagementManagementunitTimeofflimit: (...args) => callOperation("patchWorkforcemanagementManagementunitTimeofflimit", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitTimeofflimit">)),
    PatchWorkforcemanagementManagementunitTimeoffplan: (...args) => callOperation("patchWorkforcemanagementManagementunitTimeoffplan", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitTimeoffplan">)),
    PatchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus: (...args) => callOperation("patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus">)),
    PatchWorkforcemanagementManagementunitUnavailabletimesSettings: (...args) => callOperation("patchWorkforcemanagementManagementunitUnavailabletimesSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitUnavailabletimesSettings">)),
    PatchWorkforcemanagementManagementunitUserTimeoffrequest: (...args) => callOperation("patchWorkforcemanagementManagementunitUserTimeoffrequest", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitUserTimeoffrequest">)),
    PatchWorkforcemanagementManagementunitWeekShifttrade: (...args) => callOperation("patchWorkforcemanagementManagementunitWeekShifttrade", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitWeekShifttrade">)),
    PatchWorkforcemanagementManagementunitWorkplan: (...args) => callOperation("patchWorkforcemanagementManagementunitWorkplan", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitWorkplan">)),
    PatchWorkforcemanagementManagementunitWorkplanrotation: (...args) => callOperation("patchWorkforcemanagementManagementunitWorkplanrotation", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementManagementunitWorkplanrotation">)),
    PatchWorkforcemanagementTimeoffrequest: (...args) => callOperation("patchWorkforcemanagementTimeoffrequest", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementTimeoffrequest">)),
    PatchWorkforcemanagementUnavailabletimes: (...args) => callOperation("patchWorkforcemanagementUnavailabletimes", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementUnavailabletimes">)),
    PatchWorkforcemanagementUsersWorkplanbidranksBulk: (...args) => callOperation("patchWorkforcemanagementUsersWorkplanbidranksBulk", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementUsersWorkplanbidranksBulk">)),
    PatchWorkforcemanagementUserWorkplanbidranks: (...args) => callOperation("patchWorkforcemanagementUserWorkplanbidranks", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementUserWorkplanbidranks">)),
    PatchWorkforcemanagementWorkplanbidPreferences: (...args) => callOperation("patchWorkforcemanagementWorkplanbidPreferences", ...(args as GenesysCloudFullApiOperationArgs<"patchWorkforcemanagementWorkplanbidPreferences">)),
    PostWorkforcemanagementAdherenceExplanations: (...args) => callOperation("postWorkforcemanagementAdherenceExplanations", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAdherenceExplanations">)),
    PostWorkforcemanagementAdherenceExplanationsQuery: (...args) => callOperation("postWorkforcemanagementAdherenceExplanationsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAdherenceExplanationsQuery">)),
    PostWorkforcemanagementAdherenceHistoricalBulk: (...args) => callOperation("postWorkforcemanagementAdherenceHistoricalBulk", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAdherenceHistoricalBulk">)),
    PostWorkforcemanagementAgentAdherenceExplanations: (...args) => callOperation("postWorkforcemanagementAgentAdherenceExplanations", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentAdherenceExplanations">)),
    PostWorkforcemanagementAgentAdherenceExplanationsQuery: (...args) => callOperation("postWorkforcemanagementAgentAdherenceExplanationsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentAdherenceExplanationsQuery">)),
    PostWorkforcemanagementAgents: (...args) => callOperation("postWorkforcemanagementAgents", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgents">)),
    PostWorkforcemanagementAgentschedulesManagementunitsMine: (...args) => callOperation("postWorkforcemanagementAgentschedulesManagementunitsMine", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentschedulesManagementunitsMine">)),
    PostWorkforcemanagementAgentschedulesMine: (...args) => callOperation("postWorkforcemanagementAgentschedulesMine", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentschedulesMine">)),
    PostWorkforcemanagementAgentsIntegrationsHrisQuery: (...args) => callOperation("postWorkforcemanagementAgentsIntegrationsHrisQuery", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentsIntegrationsHrisQuery">)),
    PostWorkforcemanagementAgentsMeAdherenceHistoricalJobs: (...args) => callOperation("postWorkforcemanagementAgentsMeAdherenceHistoricalJobs", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentsMeAdherenceHistoricalJobs">)),
    PostWorkforcemanagementAgentsMePossibleworkshifts: (...args) => callOperation("postWorkforcemanagementAgentsMePossibleworkshifts", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentsMePossibleworkshifts">)),
    PostWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd: (...args) => callOperation("postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd">)),
    PostWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate: (...args) => callOperation("postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate">)),
    PostWorkforcemanagementAgentsOpportunitiesQuery: (...args) => callOperation("postWorkforcemanagementAgentsOpportunitiesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentsOpportunitiesQuery">)),
    PostWorkforcemanagementAgentUnavailabletimesQuery: (...args) => callOperation("postWorkforcemanagementAgentUnavailabletimesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAgentUnavailabletimesQuery">)),
    PostWorkforcemanagementAlternativeshiftsOffersJobs: (...args) => callOperation("postWorkforcemanagementAlternativeshiftsOffersJobs", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAlternativeshiftsOffersJobs">)),
    PostWorkforcemanagementAlternativeshiftsOffersSearchJobs: (...args) => callOperation("postWorkforcemanagementAlternativeshiftsOffersSearchJobs", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAlternativeshiftsOffersSearchJobs">)),
    PostWorkforcemanagementAlternativeshiftsTrades: (...args) => callOperation("postWorkforcemanagementAlternativeshiftsTrades", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementAlternativeshiftsTrades">)),
    PostWorkforcemanagementBusinessunitActivitycodes: (...args) => callOperation("postWorkforcemanagementBusinessunitActivitycodes", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitActivitycodes">)),
    PostWorkforcemanagementBusinessunitActivityplanRunsJobs: (...args) => callOperation("postWorkforcemanagementBusinessunitActivityplanRunsJobs", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitActivityplanRunsJobs">)),
    PostWorkforcemanagementBusinessunitActivityplans: (...args) => callOperation("postWorkforcemanagementBusinessunitActivityplans", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitActivityplans">)),
    PostWorkforcemanagementBusinessunitAdherenceExplanationsQuery: (...args) => callOperation("postWorkforcemanagementBusinessunitAdherenceExplanationsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitAdherenceExplanationsQuery">)),
    PostWorkforcemanagementBusinessunitAgentschedulesSearch: (...args) => callOperation("postWorkforcemanagementBusinessunitAgentschedulesSearch", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitAgentschedulesSearch">)),
    PostWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch: (...args) => callOperation("postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch">)),
    PostWorkforcemanagementBusinessunitCapacityplanCopy: (...args) => callOperation("postWorkforcemanagementBusinessunitCapacityplanCopy", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplanCopy">)),
    PostWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate: (...args) => callOperation("postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate">)),
    PostWorkforcemanagementBusinessunitCapacityplanRequirementGenerate: (...args) => callOperation("postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate">)),
    PostWorkforcemanagementBusinessunitCapacityplans: (...args) => callOperation("postWorkforcemanagementBusinessunitCapacityplans", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplans">)),
    PostWorkforcemanagementBusinessunitCapacityplansBulkRemove: (...args) => callOperation("postWorkforcemanagementBusinessunitCapacityplansBulkRemove", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplansBulkRemove">)),
    PostWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations: (...args) => callOperation("postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations">)),
    PostWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery: (...args) => callOperation("postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery">)),
    PostWorkforcemanagementBusinessunitIntraday: (...args) => callOperation("postWorkforcemanagementBusinessunitIntraday", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitIntraday">)),
    PostWorkforcemanagementBusinessunitOpportunitiesBulkAdd: (...args) => callOperation("postWorkforcemanagementBusinessunitOpportunitiesBulkAdd", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesBulkAdd">)),
    PostWorkforcemanagementBusinessunitOpportunitiesBulkPublish: (...args) => callOperation("postWorkforcemanagementBusinessunitOpportunitiesBulkPublish", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesBulkPublish">)),
    PostWorkforcemanagementBusinessunitOpportunitiesBulkRemove: (...args) => callOperation("postWorkforcemanagementBusinessunitOpportunitiesBulkRemove", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesBulkRemove">)),
    PostWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate: (...args) => callOperation("postWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate">)),
    PostWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate: (...args) => callOperation("postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate">)),
    PostWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery: (...args) => callOperation("postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery">)),
    PostWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery: (...args) => callOperation("postWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery">)),
    PostWorkforcemanagementBusinessunitOpportunitiesQuery: (...args) => callOperation("postWorkforcemanagementBusinessunitOpportunitiesQuery", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitOpportunitiesQuery">)),
    PostWorkforcemanagementBusinessunitPlanninggroups: (...args) => callOperation("postWorkforcemanagementBusinessunitPlanninggroups", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitPlanninggroups">)),
    PostWorkforcemanagementBusinessunits: (...args) => callOperation("postWorkforcemanagementBusinessunits", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunits">)),
    PostWorkforcemanagementBusinessunitSchedulebidCopy: (...args) => callOperation("postWorkforcemanagementBusinessunitSchedulebidCopy", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitSchedulebidCopy">)),
    PostWorkforcemanagementBusinessunitSchedulebidGroups: (...args) => callOperation("postWorkforcemanagementBusinessunitSchedulebidGroups", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitSchedulebidGroups">)),
    PostWorkforcemanagementBusinessunitSchedulebids: (...args) => callOperation("postWorkforcemanagementBusinessunitSchedulebids", ...(args as GenesysCloudFullApiOperationArgs<"postWorkforcemanagementBusinessunitSchedulebids">)),
  };
}
