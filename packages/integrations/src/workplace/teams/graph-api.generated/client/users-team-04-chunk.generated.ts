// Generated endpoint chunk for TeamsGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TeamsGraphGeneratedOperationCaller,
  TeamsGraphOperationArgs,
  TeamsGraphOperationInput,
  TeamsGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { TeamsGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TeamsGraphUsersTeam04OperationKeys = [
  "users.joinedTeams.primaryChannel.tabs.GetTeamsApp",
  "users.joinedTeams.primaryChannel.tabs.GetCount-86f9",
  "users.joinedTeams.GetSchedule",
  "users.joinedTeams.SetSchedule",
  "users.joinedTeams.DeleteSchedule",
  "users.joinedTeams.schedule.ListDayNotes",
  "users.joinedTeams.schedule.CreateDayNotes",
  "users.joinedTeams.schedule.GetDayNotes",
  "users.joinedTeams.schedule.UpdateDayNotes",
  "users.joinedTeams.schedule.DeleteDayNotes",
  "users.joinedTeams.schedule.dayNotes.GetCount-282c",
  "users.user.joinedTeams.team.schedule.share",
  "users.joinedTeams.schedule.ListOfferShiftRequests",
  "users.joinedTeams.schedule.CreateOfferShiftRequests",
  "users.joinedTeams.schedule.GetOfferShiftRequests",
  "users.joinedTeams.schedule.UpdateOfferShiftRequests",
  "users.joinedTeams.schedule.DeleteOfferShiftRequests",
  "users.joinedTeams.schedule.offerShiftRequests.GetCount-b933",
  "users.joinedTeams.schedule.ListOpenShiftChangeRequests",
  "users.joinedTeams.schedule.CreateOpenShiftChangeRequests",
  "users.joinedTeams.schedule.GetOpenShiftChangeRequests",
  "users.joinedTeams.schedule.UpdateOpenShiftChangeRequests",
  "users.joinedTeams.schedule.DeleteOpenShiftChangeRequests",
  "users.joinedTeams.schedule.openShiftChangeRequests.GetCount-270a",
  "users.joinedTeams.schedule.ListOpenShifts",
  "users.joinedTeams.schedule.CreateOpenShifts",
  "users.joinedTeams.schedule.GetOpenShifts",
  "users.joinedTeams.schedule.UpdateOpenShifts",
  "users.joinedTeams.schedule.DeleteOpenShifts",
  "users.joinedTeams.schedule.openShifts.GetCount-785e",
  "users.joinedTeams.schedule.ListSchedulingGroups",
  "users.joinedTeams.schedule.CreateSchedulingGroups",
  "users.joinedTeams.schedule.GetSchedulingGroups",
  "users.joinedTeams.schedule.UpdateSchedulingGroups",
  "users.joinedTeams.schedule.DeleteSchedulingGroups",
  "users.joinedTeams.schedule.schedulingGroups.GetCount-b253",
  "users.joinedTeams.schedule.ListShifts",
  "users.joinedTeams.schedule.CreateShifts",
  "users.joinedTeams.schedule.GetShifts",
  "users.joinedTeams.schedule.UpdateShifts",
  "users.joinedTeams.schedule.DeleteShifts",
  "users.joinedTeams.schedule.shifts.GetCount-6a1a",
  "users.joinedTeams.schedule.ListSwapShiftsChangeRequests",
  "users.joinedTeams.schedule.CreateSwapShiftsChangeRequests",
  "users.joinedTeams.schedule.GetSwapShiftsChangeRequests",
  "users.joinedTeams.schedule.UpdateSwapShiftsChangeRequests",
  "users.joinedTeams.schedule.DeleteSwapShiftsChangeRequests",
  "users.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-b5f7",
  "users.joinedTeams.schedule.ListTimeCards",
  "users.joinedTeams.schedule.CreateTimeCards",
  "users.joinedTeams.schedule.GetTimeCards",
  "users.joinedTeams.schedule.UpdateTimeCards",
  "users.joinedTeams.schedule.DeleteTimeCards",
  "users.user.joinedTeams.team.schedule.timeCards.timeCard.clockOut",
  "users.user.joinedTeams.team.schedule.timeCards.timeCard.confirm",
  "users.user.joinedTeams.team.schedule.timeCards.timeCard.endBreak",
  "users.user.joinedTeams.team.schedule.timeCards.timeCard.startBreak",
  "users.joinedTeams.schedule.timeCards.GetCount-4f50",
  "users.user.joinedTeams.team.schedule.timeCards.clockIn",
  "users.joinedTeams.schedule.ListTimeOffReasons",
  "users.joinedTeams.schedule.CreateTimeOffReasons",
  "users.joinedTeams.schedule.GetTimeOffReasons",
  "users.joinedTeams.schedule.UpdateTimeOffReasons",
  "users.joinedTeams.schedule.DeleteTimeOffReasons",
  "users.joinedTeams.schedule.timeOffReasons.GetCount-9789",
  "users.joinedTeams.schedule.ListTimeOffRequests",
  "users.joinedTeams.schedule.CreateTimeOffRequests",
  "users.joinedTeams.schedule.GetTimeOffRequests",
  "users.joinedTeams.schedule.UpdateTimeOffRequests",
  "users.joinedTeams.schedule.DeleteTimeOffRequests",
  "users.joinedTeams.schedule.timeOffRequests.GetCount-c179",
  "users.joinedTeams.schedule.ListTimesOff",
  "users.joinedTeams.schedule.CreateTimesOff",
  "users.joinedTeams.schedule.GetTimesOff",
  "users.joinedTeams.schedule.UpdateTimesOff",
  "users.joinedTeams.schedule.DeleteTimesOff",
  "users.joinedTeams.schedule.timesOff.GetCount-1ead",
  "users.joinedTeams.ListTags",
  "users.joinedTeams.CreateTags",
  "users.joinedTeams.GetTags"
] as const;
export type TeamsGraphUsersTeam04OperationKey = typeof TeamsGraphUsersTeam04OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphUsersTeam04OperationPathParamMap {
  "users.joinedTeams.primaryChannel.tabs.GetTeamsApp": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.tabs.GetCount-86f9": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetSchedule": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.SetSchedule": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.DeleteSchedule": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.ListDayNotes": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.CreateDayNotes": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.GetDayNotes": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "dayNote-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.UpdateDayNotes": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "dayNote-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.DeleteDayNotes": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "dayNote-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.dayNotes.GetCount-282c": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.schedule.share": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.ListOfferShiftRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.CreateOfferShiftRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.GetOfferShiftRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "offerShiftRequest-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.UpdateOfferShiftRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "offerShiftRequest-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.DeleteOfferShiftRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "offerShiftRequest-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.offerShiftRequests.GetCount-b933": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.ListOpenShiftChangeRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.CreateOpenShiftChangeRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.GetOpenShiftChangeRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "openShiftChangeRequest-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.UpdateOpenShiftChangeRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "openShiftChangeRequest-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.DeleteOpenShiftChangeRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "openShiftChangeRequest-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.openShiftChangeRequests.GetCount-270a": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.ListOpenShifts": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.CreateOpenShifts": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.GetOpenShifts": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "openShift-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.UpdateOpenShifts": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "openShift-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.DeleteOpenShifts": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "openShift-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.openShifts.GetCount-785e": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.ListSchedulingGroups": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.CreateSchedulingGroups": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.GetSchedulingGroups": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "schedulingGroup-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.UpdateSchedulingGroups": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "schedulingGroup-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.DeleteSchedulingGroups": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "schedulingGroup-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.schedulingGroups.GetCount-b253": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.ListShifts": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.CreateShifts": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.GetShifts": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "shift-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.UpdateShifts": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "shift-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.DeleteShifts": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "shift-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.shifts.GetCount-6a1a": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.ListSwapShiftsChangeRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.CreateSwapShiftsChangeRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.GetSwapShiftsChangeRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "swapShiftsChangeRequest-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.UpdateSwapShiftsChangeRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "swapShiftsChangeRequest-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.DeleteSwapShiftsChangeRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "swapShiftsChangeRequest-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-b5f7": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.ListTimeCards": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.CreateTimeCards": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.GetTimeCards": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.UpdateTimeCards": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.DeleteTimeCards": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.schedule.timeCards.timeCard.clockOut": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.schedule.timeCards.timeCard.confirm": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.schedule.timeCards.timeCard.endBreak": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.schedule.timeCards.timeCard.startBreak": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.timeCards.GetCount-4f50": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.schedule.timeCards.clockIn": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.ListTimeOffReasons": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.CreateTimeOffReasons": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.GetTimeOffReasons": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeOffReason-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.UpdateTimeOffReasons": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeOffReason-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.DeleteTimeOffReasons": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeOffReason-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.timeOffReasons.GetCount-9789": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.ListTimeOffRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.CreateTimeOffRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.GetTimeOffRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeOffRequest-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.UpdateTimeOffRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeOffRequest-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.DeleteTimeOffRequests": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeOffRequest-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.timeOffRequests.GetCount-c179": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.ListTimesOff": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.CreateTimesOff": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.GetTimesOff": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeOff-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.UpdateTimesOff": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeOff-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.DeleteTimesOff": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "timeOff-id": TeamsGraphPathParamValue };
  "users.joinedTeams.schedule.timesOff.GetCount-1ead": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.ListTags": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.CreateTags": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetTags": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphUsersTeam04OperationRequestMap {
  "users.joinedTeams.primaryChannel.tabs.GetTeamsApp": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.tabs.GetTeamsApp">;
  "users.joinedTeams.primaryChannel.tabs.GetCount-86f9": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.tabs.GetCount-86f9">;
  "users.joinedTeams.GetSchedule": TeamsGraphOperationInput<"users.joinedTeams.GetSchedule">;
  "users.joinedTeams.SetSchedule": TeamsGraphOperationInput<"users.joinedTeams.SetSchedule">;
  "users.joinedTeams.DeleteSchedule": TeamsGraphOperationInput<"users.joinedTeams.DeleteSchedule">;
  "users.joinedTeams.schedule.ListDayNotes": TeamsGraphOperationInput<"users.joinedTeams.schedule.ListDayNotes">;
  "users.joinedTeams.schedule.CreateDayNotes": TeamsGraphOperationInput<"users.joinedTeams.schedule.CreateDayNotes">;
  "users.joinedTeams.schedule.GetDayNotes": TeamsGraphOperationInput<"users.joinedTeams.schedule.GetDayNotes">;
  "users.joinedTeams.schedule.UpdateDayNotes": TeamsGraphOperationInput<"users.joinedTeams.schedule.UpdateDayNotes">;
  "users.joinedTeams.schedule.DeleteDayNotes": TeamsGraphOperationInput<"users.joinedTeams.schedule.DeleteDayNotes">;
  "users.joinedTeams.schedule.dayNotes.GetCount-282c": TeamsGraphOperationInput<"users.joinedTeams.schedule.dayNotes.GetCount-282c">;
  "users.user.joinedTeams.team.schedule.share": TeamsGraphOperationInput<"users.user.joinedTeams.team.schedule.share">;
  "users.joinedTeams.schedule.ListOfferShiftRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.ListOfferShiftRequests">;
  "users.joinedTeams.schedule.CreateOfferShiftRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.CreateOfferShiftRequests">;
  "users.joinedTeams.schedule.GetOfferShiftRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.GetOfferShiftRequests">;
  "users.joinedTeams.schedule.UpdateOfferShiftRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.UpdateOfferShiftRequests">;
  "users.joinedTeams.schedule.DeleteOfferShiftRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.DeleteOfferShiftRequests">;
  "users.joinedTeams.schedule.offerShiftRequests.GetCount-b933": TeamsGraphOperationInput<"users.joinedTeams.schedule.offerShiftRequests.GetCount-b933">;
  "users.joinedTeams.schedule.ListOpenShiftChangeRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.ListOpenShiftChangeRequests">;
  "users.joinedTeams.schedule.CreateOpenShiftChangeRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.CreateOpenShiftChangeRequests">;
  "users.joinedTeams.schedule.GetOpenShiftChangeRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.GetOpenShiftChangeRequests">;
  "users.joinedTeams.schedule.UpdateOpenShiftChangeRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.UpdateOpenShiftChangeRequests">;
  "users.joinedTeams.schedule.DeleteOpenShiftChangeRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.DeleteOpenShiftChangeRequests">;
  "users.joinedTeams.schedule.openShiftChangeRequests.GetCount-270a": TeamsGraphOperationInput<"users.joinedTeams.schedule.openShiftChangeRequests.GetCount-270a">;
  "users.joinedTeams.schedule.ListOpenShifts": TeamsGraphOperationInput<"users.joinedTeams.schedule.ListOpenShifts">;
  "users.joinedTeams.schedule.CreateOpenShifts": TeamsGraphOperationInput<"users.joinedTeams.schedule.CreateOpenShifts">;
  "users.joinedTeams.schedule.GetOpenShifts": TeamsGraphOperationInput<"users.joinedTeams.schedule.GetOpenShifts">;
  "users.joinedTeams.schedule.UpdateOpenShifts": TeamsGraphOperationInput<"users.joinedTeams.schedule.UpdateOpenShifts">;
  "users.joinedTeams.schedule.DeleteOpenShifts": TeamsGraphOperationInput<"users.joinedTeams.schedule.DeleteOpenShifts">;
  "users.joinedTeams.schedule.openShifts.GetCount-785e": TeamsGraphOperationInput<"users.joinedTeams.schedule.openShifts.GetCount-785e">;
  "users.joinedTeams.schedule.ListSchedulingGroups": TeamsGraphOperationInput<"users.joinedTeams.schedule.ListSchedulingGroups">;
  "users.joinedTeams.schedule.CreateSchedulingGroups": TeamsGraphOperationInput<"users.joinedTeams.schedule.CreateSchedulingGroups">;
  "users.joinedTeams.schedule.GetSchedulingGroups": TeamsGraphOperationInput<"users.joinedTeams.schedule.GetSchedulingGroups">;
  "users.joinedTeams.schedule.UpdateSchedulingGroups": TeamsGraphOperationInput<"users.joinedTeams.schedule.UpdateSchedulingGroups">;
  "users.joinedTeams.schedule.DeleteSchedulingGroups": TeamsGraphOperationInput<"users.joinedTeams.schedule.DeleteSchedulingGroups">;
  "users.joinedTeams.schedule.schedulingGroups.GetCount-b253": TeamsGraphOperationInput<"users.joinedTeams.schedule.schedulingGroups.GetCount-b253">;
  "users.joinedTeams.schedule.ListShifts": TeamsGraphOperationInput<"users.joinedTeams.schedule.ListShifts">;
  "users.joinedTeams.schedule.CreateShifts": TeamsGraphOperationInput<"users.joinedTeams.schedule.CreateShifts">;
  "users.joinedTeams.schedule.GetShifts": TeamsGraphOperationInput<"users.joinedTeams.schedule.GetShifts">;
  "users.joinedTeams.schedule.UpdateShifts": TeamsGraphOperationInput<"users.joinedTeams.schedule.UpdateShifts">;
  "users.joinedTeams.schedule.DeleteShifts": TeamsGraphOperationInput<"users.joinedTeams.schedule.DeleteShifts">;
  "users.joinedTeams.schedule.shifts.GetCount-6a1a": TeamsGraphOperationInput<"users.joinedTeams.schedule.shifts.GetCount-6a1a">;
  "users.joinedTeams.schedule.ListSwapShiftsChangeRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.ListSwapShiftsChangeRequests">;
  "users.joinedTeams.schedule.CreateSwapShiftsChangeRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.CreateSwapShiftsChangeRequests">;
  "users.joinedTeams.schedule.GetSwapShiftsChangeRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.GetSwapShiftsChangeRequests">;
  "users.joinedTeams.schedule.UpdateSwapShiftsChangeRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.UpdateSwapShiftsChangeRequests">;
  "users.joinedTeams.schedule.DeleteSwapShiftsChangeRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.DeleteSwapShiftsChangeRequests">;
  "users.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-b5f7": TeamsGraphOperationInput<"users.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-b5f7">;
  "users.joinedTeams.schedule.ListTimeCards": TeamsGraphOperationInput<"users.joinedTeams.schedule.ListTimeCards">;
  "users.joinedTeams.schedule.CreateTimeCards": TeamsGraphOperationInput<"users.joinedTeams.schedule.CreateTimeCards">;
  "users.joinedTeams.schedule.GetTimeCards": TeamsGraphOperationInput<"users.joinedTeams.schedule.GetTimeCards">;
  "users.joinedTeams.schedule.UpdateTimeCards": TeamsGraphOperationInput<"users.joinedTeams.schedule.UpdateTimeCards">;
  "users.joinedTeams.schedule.DeleteTimeCards": TeamsGraphOperationInput<"users.joinedTeams.schedule.DeleteTimeCards">;
  "users.user.joinedTeams.team.schedule.timeCards.timeCard.clockOut": TeamsGraphOperationInput<"users.user.joinedTeams.team.schedule.timeCards.timeCard.clockOut">;
  "users.user.joinedTeams.team.schedule.timeCards.timeCard.confirm": TeamsGraphOperationInput<"users.user.joinedTeams.team.schedule.timeCards.timeCard.confirm">;
  "users.user.joinedTeams.team.schedule.timeCards.timeCard.endBreak": TeamsGraphOperationInput<"users.user.joinedTeams.team.schedule.timeCards.timeCard.endBreak">;
  "users.user.joinedTeams.team.schedule.timeCards.timeCard.startBreak": TeamsGraphOperationInput<"users.user.joinedTeams.team.schedule.timeCards.timeCard.startBreak">;
  "users.joinedTeams.schedule.timeCards.GetCount-4f50": TeamsGraphOperationInput<"users.joinedTeams.schedule.timeCards.GetCount-4f50">;
  "users.user.joinedTeams.team.schedule.timeCards.clockIn": TeamsGraphOperationInput<"users.user.joinedTeams.team.schedule.timeCards.clockIn">;
  "users.joinedTeams.schedule.ListTimeOffReasons": TeamsGraphOperationInput<"users.joinedTeams.schedule.ListTimeOffReasons">;
  "users.joinedTeams.schedule.CreateTimeOffReasons": TeamsGraphOperationInput<"users.joinedTeams.schedule.CreateTimeOffReasons">;
  "users.joinedTeams.schedule.GetTimeOffReasons": TeamsGraphOperationInput<"users.joinedTeams.schedule.GetTimeOffReasons">;
  "users.joinedTeams.schedule.UpdateTimeOffReasons": TeamsGraphOperationInput<"users.joinedTeams.schedule.UpdateTimeOffReasons">;
  "users.joinedTeams.schedule.DeleteTimeOffReasons": TeamsGraphOperationInput<"users.joinedTeams.schedule.DeleteTimeOffReasons">;
  "users.joinedTeams.schedule.timeOffReasons.GetCount-9789": TeamsGraphOperationInput<"users.joinedTeams.schedule.timeOffReasons.GetCount-9789">;
  "users.joinedTeams.schedule.ListTimeOffRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.ListTimeOffRequests">;
  "users.joinedTeams.schedule.CreateTimeOffRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.CreateTimeOffRequests">;
  "users.joinedTeams.schedule.GetTimeOffRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.GetTimeOffRequests">;
  "users.joinedTeams.schedule.UpdateTimeOffRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.UpdateTimeOffRequests">;
  "users.joinedTeams.schedule.DeleteTimeOffRequests": TeamsGraphOperationInput<"users.joinedTeams.schedule.DeleteTimeOffRequests">;
  "users.joinedTeams.schedule.timeOffRequests.GetCount-c179": TeamsGraphOperationInput<"users.joinedTeams.schedule.timeOffRequests.GetCount-c179">;
  "users.joinedTeams.schedule.ListTimesOff": TeamsGraphOperationInput<"users.joinedTeams.schedule.ListTimesOff">;
  "users.joinedTeams.schedule.CreateTimesOff": TeamsGraphOperationInput<"users.joinedTeams.schedule.CreateTimesOff">;
  "users.joinedTeams.schedule.GetTimesOff": TeamsGraphOperationInput<"users.joinedTeams.schedule.GetTimesOff">;
  "users.joinedTeams.schedule.UpdateTimesOff": TeamsGraphOperationInput<"users.joinedTeams.schedule.UpdateTimesOff">;
  "users.joinedTeams.schedule.DeleteTimesOff": TeamsGraphOperationInput<"users.joinedTeams.schedule.DeleteTimesOff">;
  "users.joinedTeams.schedule.timesOff.GetCount-1ead": TeamsGraphOperationInput<"users.joinedTeams.schedule.timesOff.GetCount-1ead">;
  "users.joinedTeams.ListTags": TeamsGraphOperationInput<"users.joinedTeams.ListTags">;
  "users.joinedTeams.CreateTags": TeamsGraphOperationInput<"users.joinedTeams.CreateTags">;
  "users.joinedTeams.GetTags": TeamsGraphOperationInput<"users.joinedTeams.GetTags">;
}

export interface TeamsGraphUsersTeam04GeneratedClient {
  UsersJoinedTeamsPrimaryChannelTabsGetTeamsApp(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.tabs.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.tabs.GetTeamsApp"]>;
  UsersJoinedTeamsPrimaryChannelTabsGetCount86f9(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.tabs.GetCount-86f9">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.tabs.GetCount-86f9"]>;
  UsersJoinedTeamsGetSchedule(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetSchedule">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetSchedule"]>;
  UsersJoinedTeamsSetSchedule(...args: TeamsGraphOperationArgs<"users.joinedTeams.SetSchedule">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.SetSchedule"]>;
  UsersJoinedTeamsDeleteSchedule(...args: TeamsGraphOperationArgs<"users.joinedTeams.DeleteSchedule">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.DeleteSchedule"]>;
  UsersJoinedTeamsScheduleListDayNotes(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListDayNotes">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.ListDayNotes"]>;
  UsersJoinedTeamsScheduleCreateDayNotes(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateDayNotes">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.CreateDayNotes"]>;
  UsersJoinedTeamsScheduleGetDayNotes(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetDayNotes">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.GetDayNotes"]>;
  UsersJoinedTeamsScheduleUpdateDayNotes(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateDayNotes">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.UpdateDayNotes"]>;
  UsersJoinedTeamsScheduleDeleteDayNotes(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteDayNotes">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.DeleteDayNotes"]>;
  UsersJoinedTeamsScheduleDayNotesGetCount282c(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.dayNotes.GetCount-282c">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.dayNotes.GetCount-282c"]>;
  UsersUserJoinedTeamsTeamScheduleShare(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.schedule.share">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.schedule.share"]>;
  UsersJoinedTeamsScheduleListOfferShiftRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.ListOfferShiftRequests"]>;
  UsersJoinedTeamsScheduleCreateOfferShiftRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.CreateOfferShiftRequests"]>;
  UsersJoinedTeamsScheduleGetOfferShiftRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.GetOfferShiftRequests"]>;
  UsersJoinedTeamsScheduleUpdateOfferShiftRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.UpdateOfferShiftRequests"]>;
  UsersJoinedTeamsScheduleDeleteOfferShiftRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.DeleteOfferShiftRequests"]>;
  UsersJoinedTeamsScheduleOfferShiftRequestsGetCountB933(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.offerShiftRequests.GetCount-b933">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.offerShiftRequests.GetCount-b933"]>;
  UsersJoinedTeamsScheduleListOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.ListOpenShiftChangeRequests"]>;
  UsersJoinedTeamsScheduleCreateOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.CreateOpenShiftChangeRequests"]>;
  UsersJoinedTeamsScheduleGetOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.GetOpenShiftChangeRequests"]>;
  UsersJoinedTeamsScheduleUpdateOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.UpdateOpenShiftChangeRequests"]>;
  UsersJoinedTeamsScheduleDeleteOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.DeleteOpenShiftChangeRequests"]>;
  UsersJoinedTeamsScheduleOpenShiftChangeRequestsGetCount270a(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.openShiftChangeRequests.GetCount-270a">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.openShiftChangeRequests.GetCount-270a"]>;
  UsersJoinedTeamsScheduleListOpenShifts(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListOpenShifts">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.ListOpenShifts"]>;
  UsersJoinedTeamsScheduleCreateOpenShifts(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateOpenShifts">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.CreateOpenShifts"]>;
  UsersJoinedTeamsScheduleGetOpenShifts(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetOpenShifts">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.GetOpenShifts"]>;
  UsersJoinedTeamsScheduleUpdateOpenShifts(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateOpenShifts">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.UpdateOpenShifts"]>;
  UsersJoinedTeamsScheduleDeleteOpenShifts(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteOpenShifts">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.DeleteOpenShifts"]>;
  UsersJoinedTeamsScheduleOpenShiftsGetCount785e(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.openShifts.GetCount-785e">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.openShifts.GetCount-785e"]>;
  UsersJoinedTeamsScheduleListSchedulingGroups(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.ListSchedulingGroups"]>;
  UsersJoinedTeamsScheduleCreateSchedulingGroups(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.CreateSchedulingGroups"]>;
  UsersJoinedTeamsScheduleGetSchedulingGroups(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.GetSchedulingGroups"]>;
  UsersJoinedTeamsScheduleUpdateSchedulingGroups(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.UpdateSchedulingGroups"]>;
  UsersJoinedTeamsScheduleDeleteSchedulingGroups(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.DeleteSchedulingGroups"]>;
  UsersJoinedTeamsScheduleSchedulingGroupsGetCountB253(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.schedulingGroups.GetCount-b253">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.schedulingGroups.GetCount-b253"]>;
  UsersJoinedTeamsScheduleListShifts(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListShifts">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.ListShifts"]>;
  UsersJoinedTeamsScheduleCreateShifts(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateShifts">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.CreateShifts"]>;
  UsersJoinedTeamsScheduleGetShifts(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetShifts">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.GetShifts"]>;
  UsersJoinedTeamsScheduleUpdateShifts(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateShifts">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.UpdateShifts"]>;
  UsersJoinedTeamsScheduleDeleteShifts(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteShifts">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.DeleteShifts"]>;
  UsersJoinedTeamsScheduleShiftsGetCount6a1a(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.shifts.GetCount-6a1a">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.shifts.GetCount-6a1a"]>;
  UsersJoinedTeamsScheduleListSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.ListSwapShiftsChangeRequests"]>;
  UsersJoinedTeamsScheduleCreateSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.CreateSwapShiftsChangeRequests"]>;
  UsersJoinedTeamsScheduleGetSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.GetSwapShiftsChangeRequests"]>;
  UsersJoinedTeamsScheduleUpdateSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.UpdateSwapShiftsChangeRequests"]>;
  UsersJoinedTeamsScheduleDeleteSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.DeleteSwapShiftsChangeRequests"]>;
  UsersJoinedTeamsScheduleSwapShiftsChangeRequestsGetCountB5f7(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-b5f7">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-b5f7"]>;
  UsersJoinedTeamsScheduleListTimeCards(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListTimeCards">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.ListTimeCards"]>;
  UsersJoinedTeamsScheduleCreateTimeCards(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateTimeCards">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.CreateTimeCards"]>;
  UsersJoinedTeamsScheduleGetTimeCards(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetTimeCards">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.GetTimeCards"]>;
  UsersJoinedTeamsScheduleUpdateTimeCards(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateTimeCards">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.UpdateTimeCards"]>;
  UsersJoinedTeamsScheduleDeleteTimeCards(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteTimeCards">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.DeleteTimeCards"]>;
  UsersUserJoinedTeamsTeamScheduleTimeCardsTimeCardClockOut(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.schedule.timeCards.timeCard.clockOut">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.schedule.timeCards.timeCard.clockOut"]>;
  UsersUserJoinedTeamsTeamScheduleTimeCardsTimeCardConfirm(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.schedule.timeCards.timeCard.confirm">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.schedule.timeCards.timeCard.confirm"]>;
  UsersUserJoinedTeamsTeamScheduleTimeCardsTimeCardEndBreak(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.schedule.timeCards.timeCard.endBreak">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.schedule.timeCards.timeCard.endBreak"]>;
  UsersUserJoinedTeamsTeamScheduleTimeCardsTimeCardStartBreak(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.schedule.timeCards.timeCard.startBreak">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.schedule.timeCards.timeCard.startBreak"]>;
  UsersJoinedTeamsScheduleTimeCardsGetCount4f50(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.timeCards.GetCount-4f50">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.timeCards.GetCount-4f50"]>;
  UsersUserJoinedTeamsTeamScheduleTimeCardsClockIn(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.schedule.timeCards.clockIn">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.schedule.timeCards.clockIn"]>;
  UsersJoinedTeamsScheduleListTimeOffReasons(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.ListTimeOffReasons"]>;
  UsersJoinedTeamsScheduleCreateTimeOffReasons(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.CreateTimeOffReasons"]>;
  UsersJoinedTeamsScheduleGetTimeOffReasons(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.GetTimeOffReasons"]>;
  UsersJoinedTeamsScheduleUpdateTimeOffReasons(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.UpdateTimeOffReasons"]>;
  UsersJoinedTeamsScheduleDeleteTimeOffReasons(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.DeleteTimeOffReasons"]>;
  UsersJoinedTeamsScheduleTimeOffReasonsGetCount9789(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.timeOffReasons.GetCount-9789">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.timeOffReasons.GetCount-9789"]>;
  UsersJoinedTeamsScheduleListTimeOffRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.ListTimeOffRequests"]>;
  UsersJoinedTeamsScheduleCreateTimeOffRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.CreateTimeOffRequests"]>;
  UsersJoinedTeamsScheduleGetTimeOffRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.GetTimeOffRequests"]>;
  UsersJoinedTeamsScheduleUpdateTimeOffRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.UpdateTimeOffRequests"]>;
  UsersJoinedTeamsScheduleDeleteTimeOffRequests(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.DeleteTimeOffRequests"]>;
  UsersJoinedTeamsScheduleTimeOffRequestsGetCountC179(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.timeOffRequests.GetCount-c179">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.timeOffRequests.GetCount-c179"]>;
  UsersJoinedTeamsScheduleListTimesOff(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListTimesOff">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.ListTimesOff"]>;
  UsersJoinedTeamsScheduleCreateTimesOff(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateTimesOff">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.CreateTimesOff"]>;
  UsersJoinedTeamsScheduleGetTimesOff(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetTimesOff">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.GetTimesOff"]>;
  UsersJoinedTeamsScheduleUpdateTimesOff(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateTimesOff">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.UpdateTimesOff"]>;
  UsersJoinedTeamsScheduleDeleteTimesOff(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteTimesOff">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.DeleteTimesOff"]>;
  UsersJoinedTeamsScheduleTimesOffGetCount1ead(...args: TeamsGraphOperationArgs<"users.joinedTeams.schedule.timesOff.GetCount-1ead">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.schedule.timesOff.GetCount-1ead"]>;
  UsersJoinedTeamsListTags(...args: TeamsGraphOperationArgs<"users.joinedTeams.ListTags">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.ListTags"]>;
  UsersJoinedTeamsCreateTags(...args: TeamsGraphOperationArgs<"users.joinedTeams.CreateTags">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.CreateTags"]>;
  UsersJoinedTeamsGetTags(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetTags">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetTags"]>;
}

export const TeamsGraphUsersTeam04GeneratedFunctionNames = [
  "UsersJoinedTeamsPrimaryChannelTabsGetTeamsApp",
  "UsersJoinedTeamsPrimaryChannelTabsGetCount86f9",
  "UsersJoinedTeamsGetSchedule",
  "UsersJoinedTeamsSetSchedule",
  "UsersJoinedTeamsDeleteSchedule",
  "UsersJoinedTeamsScheduleListDayNotes",
  "UsersJoinedTeamsScheduleCreateDayNotes",
  "UsersJoinedTeamsScheduleGetDayNotes",
  "UsersJoinedTeamsScheduleUpdateDayNotes",
  "UsersJoinedTeamsScheduleDeleteDayNotes",
  "UsersJoinedTeamsScheduleDayNotesGetCount282c",
  "UsersUserJoinedTeamsTeamScheduleShare",
  "UsersJoinedTeamsScheduleListOfferShiftRequests",
  "UsersJoinedTeamsScheduleCreateOfferShiftRequests",
  "UsersJoinedTeamsScheduleGetOfferShiftRequests",
  "UsersJoinedTeamsScheduleUpdateOfferShiftRequests",
  "UsersJoinedTeamsScheduleDeleteOfferShiftRequests",
  "UsersJoinedTeamsScheduleOfferShiftRequestsGetCountB933",
  "UsersJoinedTeamsScheduleListOpenShiftChangeRequests",
  "UsersJoinedTeamsScheduleCreateOpenShiftChangeRequests",
  "UsersJoinedTeamsScheduleGetOpenShiftChangeRequests",
  "UsersJoinedTeamsScheduleUpdateOpenShiftChangeRequests",
  "UsersJoinedTeamsScheduleDeleteOpenShiftChangeRequests",
  "UsersJoinedTeamsScheduleOpenShiftChangeRequestsGetCount270a",
  "UsersJoinedTeamsScheduleListOpenShifts",
  "UsersJoinedTeamsScheduleCreateOpenShifts",
  "UsersJoinedTeamsScheduleGetOpenShifts",
  "UsersJoinedTeamsScheduleUpdateOpenShifts",
  "UsersJoinedTeamsScheduleDeleteOpenShifts",
  "UsersJoinedTeamsScheduleOpenShiftsGetCount785e",
  "UsersJoinedTeamsScheduleListSchedulingGroups",
  "UsersJoinedTeamsScheduleCreateSchedulingGroups",
  "UsersJoinedTeamsScheduleGetSchedulingGroups",
  "UsersJoinedTeamsScheduleUpdateSchedulingGroups",
  "UsersJoinedTeamsScheduleDeleteSchedulingGroups",
  "UsersJoinedTeamsScheduleSchedulingGroupsGetCountB253",
  "UsersJoinedTeamsScheduleListShifts",
  "UsersJoinedTeamsScheduleCreateShifts",
  "UsersJoinedTeamsScheduleGetShifts",
  "UsersJoinedTeamsScheduleUpdateShifts",
  "UsersJoinedTeamsScheduleDeleteShifts",
  "UsersJoinedTeamsScheduleShiftsGetCount6a1a",
  "UsersJoinedTeamsScheduleListSwapShiftsChangeRequests",
  "UsersJoinedTeamsScheduleCreateSwapShiftsChangeRequests",
  "UsersJoinedTeamsScheduleGetSwapShiftsChangeRequests",
  "UsersJoinedTeamsScheduleUpdateSwapShiftsChangeRequests",
  "UsersJoinedTeamsScheduleDeleteSwapShiftsChangeRequests",
  "UsersJoinedTeamsScheduleSwapShiftsChangeRequestsGetCountB5f7",
  "UsersJoinedTeamsScheduleListTimeCards",
  "UsersJoinedTeamsScheduleCreateTimeCards",
  "UsersJoinedTeamsScheduleGetTimeCards",
  "UsersJoinedTeamsScheduleUpdateTimeCards",
  "UsersJoinedTeamsScheduleDeleteTimeCards",
  "UsersUserJoinedTeamsTeamScheduleTimeCardsTimeCardClockOut",
  "UsersUserJoinedTeamsTeamScheduleTimeCardsTimeCardConfirm",
  "UsersUserJoinedTeamsTeamScheduleTimeCardsTimeCardEndBreak",
  "UsersUserJoinedTeamsTeamScheduleTimeCardsTimeCardStartBreak",
  "UsersJoinedTeamsScheduleTimeCardsGetCount4f50",
  "UsersUserJoinedTeamsTeamScheduleTimeCardsClockIn",
  "UsersJoinedTeamsScheduleListTimeOffReasons",
  "UsersJoinedTeamsScheduleCreateTimeOffReasons",
  "UsersJoinedTeamsScheduleGetTimeOffReasons",
  "UsersJoinedTeamsScheduleUpdateTimeOffReasons",
  "UsersJoinedTeamsScheduleDeleteTimeOffReasons",
  "UsersJoinedTeamsScheduleTimeOffReasonsGetCount9789",
  "UsersJoinedTeamsScheduleListTimeOffRequests",
  "UsersJoinedTeamsScheduleCreateTimeOffRequests",
  "UsersJoinedTeamsScheduleGetTimeOffRequests",
  "UsersJoinedTeamsScheduleUpdateTimeOffRequests",
  "UsersJoinedTeamsScheduleDeleteTimeOffRequests",
  "UsersJoinedTeamsScheduleTimeOffRequestsGetCountC179",
  "UsersJoinedTeamsScheduleListTimesOff",
  "UsersJoinedTeamsScheduleCreateTimesOff",
  "UsersJoinedTeamsScheduleGetTimesOff",
  "UsersJoinedTeamsScheduleUpdateTimesOff",
  "UsersJoinedTeamsScheduleDeleteTimesOff",
  "UsersJoinedTeamsScheduleTimesOffGetCount1ead",
  "UsersJoinedTeamsListTags",
  "UsersJoinedTeamsCreateTags",
  "UsersJoinedTeamsGetTags"
] as const satisfies readonly (keyof TeamsGraphUsersTeam04GeneratedClient)[];

export function createTeamsGraphUsersTeam04GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphUsersTeam04GeneratedClient {
  return {
    UsersJoinedTeamsPrimaryChannelTabsGetTeamsApp: (...args) => callOperation("users.joinedTeams.primaryChannel.tabs.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.tabs.GetTeamsApp">)),
    UsersJoinedTeamsPrimaryChannelTabsGetCount86f9: (...args) => callOperation("users.joinedTeams.primaryChannel.tabs.GetCount-86f9", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.tabs.GetCount-86f9">)),
    UsersJoinedTeamsGetSchedule: (...args) => callOperation("users.joinedTeams.GetSchedule", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetSchedule">)),
    UsersJoinedTeamsSetSchedule: (...args) => callOperation("users.joinedTeams.SetSchedule", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.SetSchedule">)),
    UsersJoinedTeamsDeleteSchedule: (...args) => callOperation("users.joinedTeams.DeleteSchedule", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.DeleteSchedule">)),
    UsersJoinedTeamsScheduleListDayNotes: (...args) => callOperation("users.joinedTeams.schedule.ListDayNotes", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListDayNotes">)),
    UsersJoinedTeamsScheduleCreateDayNotes: (...args) => callOperation("users.joinedTeams.schedule.CreateDayNotes", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateDayNotes">)),
    UsersJoinedTeamsScheduleGetDayNotes: (...args) => callOperation("users.joinedTeams.schedule.GetDayNotes", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetDayNotes">)),
    UsersJoinedTeamsScheduleUpdateDayNotes: (...args) => callOperation("users.joinedTeams.schedule.UpdateDayNotes", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateDayNotes">)),
    UsersJoinedTeamsScheduleDeleteDayNotes: (...args) => callOperation("users.joinedTeams.schedule.DeleteDayNotes", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteDayNotes">)),
    UsersJoinedTeamsScheduleDayNotesGetCount282c: (...args) => callOperation("users.joinedTeams.schedule.dayNotes.GetCount-282c", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.dayNotes.GetCount-282c">)),
    UsersUserJoinedTeamsTeamScheduleShare: (...args) => callOperation("users.user.joinedTeams.team.schedule.share", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.schedule.share">)),
    UsersJoinedTeamsScheduleListOfferShiftRequests: (...args) => callOperation("users.joinedTeams.schedule.ListOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListOfferShiftRequests">)),
    UsersJoinedTeamsScheduleCreateOfferShiftRequests: (...args) => callOperation("users.joinedTeams.schedule.CreateOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateOfferShiftRequests">)),
    UsersJoinedTeamsScheduleGetOfferShiftRequests: (...args) => callOperation("users.joinedTeams.schedule.GetOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetOfferShiftRequests">)),
    UsersJoinedTeamsScheduleUpdateOfferShiftRequests: (...args) => callOperation("users.joinedTeams.schedule.UpdateOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateOfferShiftRequests">)),
    UsersJoinedTeamsScheduleDeleteOfferShiftRequests: (...args) => callOperation("users.joinedTeams.schedule.DeleteOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteOfferShiftRequests">)),
    UsersJoinedTeamsScheduleOfferShiftRequestsGetCountB933: (...args) => callOperation("users.joinedTeams.schedule.offerShiftRequests.GetCount-b933", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.offerShiftRequests.GetCount-b933">)),
    UsersJoinedTeamsScheduleListOpenShiftChangeRequests: (...args) => callOperation("users.joinedTeams.schedule.ListOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListOpenShiftChangeRequests">)),
    UsersJoinedTeamsScheduleCreateOpenShiftChangeRequests: (...args) => callOperation("users.joinedTeams.schedule.CreateOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateOpenShiftChangeRequests">)),
    UsersJoinedTeamsScheduleGetOpenShiftChangeRequests: (...args) => callOperation("users.joinedTeams.schedule.GetOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetOpenShiftChangeRequests">)),
    UsersJoinedTeamsScheduleUpdateOpenShiftChangeRequests: (...args) => callOperation("users.joinedTeams.schedule.UpdateOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateOpenShiftChangeRequests">)),
    UsersJoinedTeamsScheduleDeleteOpenShiftChangeRequests: (...args) => callOperation("users.joinedTeams.schedule.DeleteOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteOpenShiftChangeRequests">)),
    UsersJoinedTeamsScheduleOpenShiftChangeRequestsGetCount270a: (...args) => callOperation("users.joinedTeams.schedule.openShiftChangeRequests.GetCount-270a", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.openShiftChangeRequests.GetCount-270a">)),
    UsersJoinedTeamsScheduleListOpenShifts: (...args) => callOperation("users.joinedTeams.schedule.ListOpenShifts", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListOpenShifts">)),
    UsersJoinedTeamsScheduleCreateOpenShifts: (...args) => callOperation("users.joinedTeams.schedule.CreateOpenShifts", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateOpenShifts">)),
    UsersJoinedTeamsScheduleGetOpenShifts: (...args) => callOperation("users.joinedTeams.schedule.GetOpenShifts", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetOpenShifts">)),
    UsersJoinedTeamsScheduleUpdateOpenShifts: (...args) => callOperation("users.joinedTeams.schedule.UpdateOpenShifts", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateOpenShifts">)),
    UsersJoinedTeamsScheduleDeleteOpenShifts: (...args) => callOperation("users.joinedTeams.schedule.DeleteOpenShifts", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteOpenShifts">)),
    UsersJoinedTeamsScheduleOpenShiftsGetCount785e: (...args) => callOperation("users.joinedTeams.schedule.openShifts.GetCount-785e", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.openShifts.GetCount-785e">)),
    UsersJoinedTeamsScheduleListSchedulingGroups: (...args) => callOperation("users.joinedTeams.schedule.ListSchedulingGroups", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListSchedulingGroups">)),
    UsersJoinedTeamsScheduleCreateSchedulingGroups: (...args) => callOperation("users.joinedTeams.schedule.CreateSchedulingGroups", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateSchedulingGroups">)),
    UsersJoinedTeamsScheduleGetSchedulingGroups: (...args) => callOperation("users.joinedTeams.schedule.GetSchedulingGroups", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetSchedulingGroups">)),
    UsersJoinedTeamsScheduleUpdateSchedulingGroups: (...args) => callOperation("users.joinedTeams.schedule.UpdateSchedulingGroups", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateSchedulingGroups">)),
    UsersJoinedTeamsScheduleDeleteSchedulingGroups: (...args) => callOperation("users.joinedTeams.schedule.DeleteSchedulingGroups", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteSchedulingGroups">)),
    UsersJoinedTeamsScheduleSchedulingGroupsGetCountB253: (...args) => callOperation("users.joinedTeams.schedule.schedulingGroups.GetCount-b253", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.schedulingGroups.GetCount-b253">)),
    UsersJoinedTeamsScheduleListShifts: (...args) => callOperation("users.joinedTeams.schedule.ListShifts", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListShifts">)),
    UsersJoinedTeamsScheduleCreateShifts: (...args) => callOperation("users.joinedTeams.schedule.CreateShifts", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateShifts">)),
    UsersJoinedTeamsScheduleGetShifts: (...args) => callOperation("users.joinedTeams.schedule.GetShifts", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetShifts">)),
    UsersJoinedTeamsScheduleUpdateShifts: (...args) => callOperation("users.joinedTeams.schedule.UpdateShifts", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateShifts">)),
    UsersJoinedTeamsScheduleDeleteShifts: (...args) => callOperation("users.joinedTeams.schedule.DeleteShifts", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteShifts">)),
    UsersJoinedTeamsScheduleShiftsGetCount6a1a: (...args) => callOperation("users.joinedTeams.schedule.shifts.GetCount-6a1a", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.shifts.GetCount-6a1a">)),
    UsersJoinedTeamsScheduleListSwapShiftsChangeRequests: (...args) => callOperation("users.joinedTeams.schedule.ListSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListSwapShiftsChangeRequests">)),
    UsersJoinedTeamsScheduleCreateSwapShiftsChangeRequests: (...args) => callOperation("users.joinedTeams.schedule.CreateSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateSwapShiftsChangeRequests">)),
    UsersJoinedTeamsScheduleGetSwapShiftsChangeRequests: (...args) => callOperation("users.joinedTeams.schedule.GetSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetSwapShiftsChangeRequests">)),
    UsersJoinedTeamsScheduleUpdateSwapShiftsChangeRequests: (...args) => callOperation("users.joinedTeams.schedule.UpdateSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateSwapShiftsChangeRequests">)),
    UsersJoinedTeamsScheduleDeleteSwapShiftsChangeRequests: (...args) => callOperation("users.joinedTeams.schedule.DeleteSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteSwapShiftsChangeRequests">)),
    UsersJoinedTeamsScheduleSwapShiftsChangeRequestsGetCountB5f7: (...args) => callOperation("users.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-b5f7", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-b5f7">)),
    UsersJoinedTeamsScheduleListTimeCards: (...args) => callOperation("users.joinedTeams.schedule.ListTimeCards", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListTimeCards">)),
    UsersJoinedTeamsScheduleCreateTimeCards: (...args) => callOperation("users.joinedTeams.schedule.CreateTimeCards", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateTimeCards">)),
    UsersJoinedTeamsScheduleGetTimeCards: (...args) => callOperation("users.joinedTeams.schedule.GetTimeCards", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetTimeCards">)),
    UsersJoinedTeamsScheduleUpdateTimeCards: (...args) => callOperation("users.joinedTeams.schedule.UpdateTimeCards", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateTimeCards">)),
    UsersJoinedTeamsScheduleDeleteTimeCards: (...args) => callOperation("users.joinedTeams.schedule.DeleteTimeCards", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteTimeCards">)),
    UsersUserJoinedTeamsTeamScheduleTimeCardsTimeCardClockOut: (...args) => callOperation("users.user.joinedTeams.team.schedule.timeCards.timeCard.clockOut", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.schedule.timeCards.timeCard.clockOut">)),
    UsersUserJoinedTeamsTeamScheduleTimeCardsTimeCardConfirm: (...args) => callOperation("users.user.joinedTeams.team.schedule.timeCards.timeCard.confirm", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.schedule.timeCards.timeCard.confirm">)),
    UsersUserJoinedTeamsTeamScheduleTimeCardsTimeCardEndBreak: (...args) => callOperation("users.user.joinedTeams.team.schedule.timeCards.timeCard.endBreak", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.schedule.timeCards.timeCard.endBreak">)),
    UsersUserJoinedTeamsTeamScheduleTimeCardsTimeCardStartBreak: (...args) => callOperation("users.user.joinedTeams.team.schedule.timeCards.timeCard.startBreak", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.schedule.timeCards.timeCard.startBreak">)),
    UsersJoinedTeamsScheduleTimeCardsGetCount4f50: (...args) => callOperation("users.joinedTeams.schedule.timeCards.GetCount-4f50", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.timeCards.GetCount-4f50">)),
    UsersUserJoinedTeamsTeamScheduleTimeCardsClockIn: (...args) => callOperation("users.user.joinedTeams.team.schedule.timeCards.clockIn", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.schedule.timeCards.clockIn">)),
    UsersJoinedTeamsScheduleListTimeOffReasons: (...args) => callOperation("users.joinedTeams.schedule.ListTimeOffReasons", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListTimeOffReasons">)),
    UsersJoinedTeamsScheduleCreateTimeOffReasons: (...args) => callOperation("users.joinedTeams.schedule.CreateTimeOffReasons", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateTimeOffReasons">)),
    UsersJoinedTeamsScheduleGetTimeOffReasons: (...args) => callOperation("users.joinedTeams.schedule.GetTimeOffReasons", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetTimeOffReasons">)),
    UsersJoinedTeamsScheduleUpdateTimeOffReasons: (...args) => callOperation("users.joinedTeams.schedule.UpdateTimeOffReasons", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateTimeOffReasons">)),
    UsersJoinedTeamsScheduleDeleteTimeOffReasons: (...args) => callOperation("users.joinedTeams.schedule.DeleteTimeOffReasons", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteTimeOffReasons">)),
    UsersJoinedTeamsScheduleTimeOffReasonsGetCount9789: (...args) => callOperation("users.joinedTeams.schedule.timeOffReasons.GetCount-9789", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.timeOffReasons.GetCount-9789">)),
    UsersJoinedTeamsScheduleListTimeOffRequests: (...args) => callOperation("users.joinedTeams.schedule.ListTimeOffRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListTimeOffRequests">)),
    UsersJoinedTeamsScheduleCreateTimeOffRequests: (...args) => callOperation("users.joinedTeams.schedule.CreateTimeOffRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateTimeOffRequests">)),
    UsersJoinedTeamsScheduleGetTimeOffRequests: (...args) => callOperation("users.joinedTeams.schedule.GetTimeOffRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetTimeOffRequests">)),
    UsersJoinedTeamsScheduleUpdateTimeOffRequests: (...args) => callOperation("users.joinedTeams.schedule.UpdateTimeOffRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateTimeOffRequests">)),
    UsersJoinedTeamsScheduleDeleteTimeOffRequests: (...args) => callOperation("users.joinedTeams.schedule.DeleteTimeOffRequests", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteTimeOffRequests">)),
    UsersJoinedTeamsScheduleTimeOffRequestsGetCountC179: (...args) => callOperation("users.joinedTeams.schedule.timeOffRequests.GetCount-c179", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.timeOffRequests.GetCount-c179">)),
    UsersJoinedTeamsScheduleListTimesOff: (...args) => callOperation("users.joinedTeams.schedule.ListTimesOff", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.ListTimesOff">)),
    UsersJoinedTeamsScheduleCreateTimesOff: (...args) => callOperation("users.joinedTeams.schedule.CreateTimesOff", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.CreateTimesOff">)),
    UsersJoinedTeamsScheduleGetTimesOff: (...args) => callOperation("users.joinedTeams.schedule.GetTimesOff", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.GetTimesOff">)),
    UsersJoinedTeamsScheduleUpdateTimesOff: (...args) => callOperation("users.joinedTeams.schedule.UpdateTimesOff", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.UpdateTimesOff">)),
    UsersJoinedTeamsScheduleDeleteTimesOff: (...args) => callOperation("users.joinedTeams.schedule.DeleteTimesOff", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.DeleteTimesOff">)),
    UsersJoinedTeamsScheduleTimesOffGetCount1ead: (...args) => callOperation("users.joinedTeams.schedule.timesOff.GetCount-1ead", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.schedule.timesOff.GetCount-1ead">)),
    UsersJoinedTeamsListTags: (...args) => callOperation("users.joinedTeams.ListTags", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.ListTags">)),
    UsersJoinedTeamsCreateTags: (...args) => callOperation("users.joinedTeams.CreateTags", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.CreateTags">)),
    UsersJoinedTeamsGetTags: (...args) => callOperation("users.joinedTeams.GetTags", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetTags">)),
  };
}
