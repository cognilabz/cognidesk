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
export const TeamsGraphMeTeam04OperationKeys = [
  "me.joinedTeams.primaryChannel.tabs.GetTeamsApp",
  "me.joinedTeams.primaryChannel.tabs.GetCount-f9aa",
  "me.joinedTeams.GetSchedule",
  "me.joinedTeams.SetSchedule",
  "me.joinedTeams.DeleteSchedule",
  "me.joinedTeams.schedule.ListDayNotes",
  "me.joinedTeams.schedule.CreateDayNotes",
  "me.joinedTeams.schedule.GetDayNotes",
  "me.joinedTeams.schedule.UpdateDayNotes",
  "me.joinedTeams.schedule.DeleteDayNotes",
  "me.joinedTeams.schedule.dayNotes.GetCount-b5ac",
  "me.joinedTeams.team.schedule.share",
  "me.joinedTeams.schedule.ListOfferShiftRequests",
  "me.joinedTeams.schedule.CreateOfferShiftRequests",
  "me.joinedTeams.schedule.GetOfferShiftRequests",
  "me.joinedTeams.schedule.UpdateOfferShiftRequests",
  "me.joinedTeams.schedule.DeleteOfferShiftRequests",
  "me.joinedTeams.schedule.offerShiftRequests.GetCount-7729",
  "me.joinedTeams.schedule.ListOpenShiftChangeRequests",
  "me.joinedTeams.schedule.CreateOpenShiftChangeRequests",
  "me.joinedTeams.schedule.GetOpenShiftChangeRequests",
  "me.joinedTeams.schedule.UpdateOpenShiftChangeRequests",
  "me.joinedTeams.schedule.DeleteOpenShiftChangeRequests",
  "me.joinedTeams.schedule.openShiftChangeRequests.GetCount-f641",
  "me.joinedTeams.schedule.ListOpenShifts",
  "me.joinedTeams.schedule.CreateOpenShifts",
  "me.joinedTeams.schedule.GetOpenShifts",
  "me.joinedTeams.schedule.UpdateOpenShifts",
  "me.joinedTeams.schedule.DeleteOpenShifts",
  "me.joinedTeams.schedule.openShifts.GetCount-9bbb",
  "me.joinedTeams.schedule.ListSchedulingGroups",
  "me.joinedTeams.schedule.CreateSchedulingGroups",
  "me.joinedTeams.schedule.GetSchedulingGroups",
  "me.joinedTeams.schedule.UpdateSchedulingGroups",
  "me.joinedTeams.schedule.DeleteSchedulingGroups",
  "me.joinedTeams.schedule.schedulingGroups.GetCount-2ecb",
  "me.joinedTeams.schedule.ListShifts",
  "me.joinedTeams.schedule.CreateShifts",
  "me.joinedTeams.schedule.GetShifts",
  "me.joinedTeams.schedule.UpdateShifts",
  "me.joinedTeams.schedule.DeleteShifts",
  "me.joinedTeams.schedule.shifts.GetCount-bd71",
  "me.joinedTeams.schedule.ListSwapShiftsChangeRequests",
  "me.joinedTeams.schedule.CreateSwapShiftsChangeRequests",
  "me.joinedTeams.schedule.GetSwapShiftsChangeRequests",
  "me.joinedTeams.schedule.UpdateSwapShiftsChangeRequests",
  "me.joinedTeams.schedule.DeleteSwapShiftsChangeRequests",
  "me.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-deaa",
  "me.joinedTeams.schedule.ListTimeCards",
  "me.joinedTeams.schedule.CreateTimeCards",
  "me.joinedTeams.schedule.GetTimeCards",
  "me.joinedTeams.schedule.UpdateTimeCards",
  "me.joinedTeams.schedule.DeleteTimeCards",
  "me.joinedTeams.team.schedule.timeCards.timeCard.clockOut",
  "me.joinedTeams.team.schedule.timeCards.timeCard.confirm",
  "me.joinedTeams.team.schedule.timeCards.timeCard.endBreak",
  "me.joinedTeams.team.schedule.timeCards.timeCard.startBreak",
  "me.joinedTeams.schedule.timeCards.GetCount-5c99",
  "me.joinedTeams.team.schedule.timeCards.clockIn",
  "me.joinedTeams.schedule.ListTimeOffReasons",
  "me.joinedTeams.schedule.CreateTimeOffReasons",
  "me.joinedTeams.schedule.GetTimeOffReasons",
  "me.joinedTeams.schedule.UpdateTimeOffReasons",
  "me.joinedTeams.schedule.DeleteTimeOffReasons",
  "me.joinedTeams.schedule.timeOffReasons.GetCount-632a",
  "me.joinedTeams.schedule.ListTimeOffRequests",
  "me.joinedTeams.schedule.CreateTimeOffRequests",
  "me.joinedTeams.schedule.GetTimeOffRequests",
  "me.joinedTeams.schedule.UpdateTimeOffRequests",
  "me.joinedTeams.schedule.DeleteTimeOffRequests",
  "me.joinedTeams.schedule.timeOffRequests.GetCount-9693",
  "me.joinedTeams.schedule.ListTimesOff",
  "me.joinedTeams.schedule.CreateTimesOff",
  "me.joinedTeams.schedule.GetTimesOff",
  "me.joinedTeams.schedule.UpdateTimesOff",
  "me.joinedTeams.schedule.DeleteTimesOff",
  "me.joinedTeams.schedule.timesOff.GetCount-8199",
  "me.joinedTeams.ListTags",
  "me.joinedTeams.CreateTags",
  "me.joinedTeams.GetTags"
] as const;
export type TeamsGraphMeTeam04OperationKey = typeof TeamsGraphMeTeam04OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphMeTeam04OperationPathParamMap {
  "me.joinedTeams.primaryChannel.tabs.GetTeamsApp": { "team-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.tabs.GetCount-f9aa": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetSchedule": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.SetSchedule": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.DeleteSchedule": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.ListDayNotes": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.CreateDayNotes": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.GetDayNotes": { "team-id": TeamsGraphPathParamValue; "dayNote-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.UpdateDayNotes": { "team-id": TeamsGraphPathParamValue; "dayNote-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.DeleteDayNotes": { "team-id": TeamsGraphPathParamValue; "dayNote-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.dayNotes.GetCount-b5ac": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.schedule.share": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.ListOfferShiftRequests": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.CreateOfferShiftRequests": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.GetOfferShiftRequests": { "team-id": TeamsGraphPathParamValue; "offerShiftRequest-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.UpdateOfferShiftRequests": { "team-id": TeamsGraphPathParamValue; "offerShiftRequest-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.DeleteOfferShiftRequests": { "team-id": TeamsGraphPathParamValue; "offerShiftRequest-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.offerShiftRequests.GetCount-7729": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.ListOpenShiftChangeRequests": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.CreateOpenShiftChangeRequests": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.GetOpenShiftChangeRequests": { "team-id": TeamsGraphPathParamValue; "openShiftChangeRequest-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.UpdateOpenShiftChangeRequests": { "team-id": TeamsGraphPathParamValue; "openShiftChangeRequest-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.DeleteOpenShiftChangeRequests": { "team-id": TeamsGraphPathParamValue; "openShiftChangeRequest-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.openShiftChangeRequests.GetCount-f641": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.ListOpenShifts": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.CreateOpenShifts": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.GetOpenShifts": { "team-id": TeamsGraphPathParamValue; "openShift-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.UpdateOpenShifts": { "team-id": TeamsGraphPathParamValue; "openShift-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.DeleteOpenShifts": { "team-id": TeamsGraphPathParamValue; "openShift-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.openShifts.GetCount-9bbb": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.ListSchedulingGroups": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.CreateSchedulingGroups": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.GetSchedulingGroups": { "team-id": TeamsGraphPathParamValue; "schedulingGroup-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.UpdateSchedulingGroups": { "team-id": TeamsGraphPathParamValue; "schedulingGroup-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.DeleteSchedulingGroups": { "team-id": TeamsGraphPathParamValue; "schedulingGroup-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.schedulingGroups.GetCount-2ecb": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.ListShifts": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.CreateShifts": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.GetShifts": { "team-id": TeamsGraphPathParamValue; "shift-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.UpdateShifts": { "team-id": TeamsGraphPathParamValue; "shift-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.DeleteShifts": { "team-id": TeamsGraphPathParamValue; "shift-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.shifts.GetCount-bd71": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.ListSwapShiftsChangeRequests": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.CreateSwapShiftsChangeRequests": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.GetSwapShiftsChangeRequests": { "team-id": TeamsGraphPathParamValue; "swapShiftsChangeRequest-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.UpdateSwapShiftsChangeRequests": { "team-id": TeamsGraphPathParamValue; "swapShiftsChangeRequest-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.DeleteSwapShiftsChangeRequests": { "team-id": TeamsGraphPathParamValue; "swapShiftsChangeRequest-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-deaa": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.ListTimeCards": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.CreateTimeCards": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.GetTimeCards": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.UpdateTimeCards": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.DeleteTimeCards": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.schedule.timeCards.timeCard.clockOut": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.schedule.timeCards.timeCard.confirm": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.schedule.timeCards.timeCard.endBreak": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.schedule.timeCards.timeCard.startBreak": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.timeCards.GetCount-5c99": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.schedule.timeCards.clockIn": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.ListTimeOffReasons": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.CreateTimeOffReasons": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.GetTimeOffReasons": { "team-id": TeamsGraphPathParamValue; "timeOffReason-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.UpdateTimeOffReasons": { "team-id": TeamsGraphPathParamValue; "timeOffReason-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.DeleteTimeOffReasons": { "team-id": TeamsGraphPathParamValue; "timeOffReason-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.timeOffReasons.GetCount-632a": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.ListTimeOffRequests": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.CreateTimeOffRequests": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.GetTimeOffRequests": { "team-id": TeamsGraphPathParamValue; "timeOffRequest-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.UpdateTimeOffRequests": { "team-id": TeamsGraphPathParamValue; "timeOffRequest-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.DeleteTimeOffRequests": { "team-id": TeamsGraphPathParamValue; "timeOffRequest-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.timeOffRequests.GetCount-9693": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.ListTimesOff": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.CreateTimesOff": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.GetTimesOff": { "team-id": TeamsGraphPathParamValue; "timeOff-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.UpdateTimesOff": { "team-id": TeamsGraphPathParamValue; "timeOff-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.DeleteTimesOff": { "team-id": TeamsGraphPathParamValue; "timeOff-id": TeamsGraphPathParamValue };
  "me.joinedTeams.schedule.timesOff.GetCount-8199": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.ListTags": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.CreateTags": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetTags": { "team-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphMeTeam04OperationRequestMap {
  "me.joinedTeams.primaryChannel.tabs.GetTeamsApp": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.tabs.GetTeamsApp">;
  "me.joinedTeams.primaryChannel.tabs.GetCount-f9aa": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.tabs.GetCount-f9aa">;
  "me.joinedTeams.GetSchedule": TeamsGraphOperationInput<"me.joinedTeams.GetSchedule">;
  "me.joinedTeams.SetSchedule": TeamsGraphOperationInput<"me.joinedTeams.SetSchedule">;
  "me.joinedTeams.DeleteSchedule": TeamsGraphOperationInput<"me.joinedTeams.DeleteSchedule">;
  "me.joinedTeams.schedule.ListDayNotes": TeamsGraphOperationInput<"me.joinedTeams.schedule.ListDayNotes">;
  "me.joinedTeams.schedule.CreateDayNotes": TeamsGraphOperationInput<"me.joinedTeams.schedule.CreateDayNotes">;
  "me.joinedTeams.schedule.GetDayNotes": TeamsGraphOperationInput<"me.joinedTeams.schedule.GetDayNotes">;
  "me.joinedTeams.schedule.UpdateDayNotes": TeamsGraphOperationInput<"me.joinedTeams.schedule.UpdateDayNotes">;
  "me.joinedTeams.schedule.DeleteDayNotes": TeamsGraphOperationInput<"me.joinedTeams.schedule.DeleteDayNotes">;
  "me.joinedTeams.schedule.dayNotes.GetCount-b5ac": TeamsGraphOperationInput<"me.joinedTeams.schedule.dayNotes.GetCount-b5ac">;
  "me.joinedTeams.team.schedule.share": TeamsGraphOperationInput<"me.joinedTeams.team.schedule.share">;
  "me.joinedTeams.schedule.ListOfferShiftRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.ListOfferShiftRequests">;
  "me.joinedTeams.schedule.CreateOfferShiftRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.CreateOfferShiftRequests">;
  "me.joinedTeams.schedule.GetOfferShiftRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.GetOfferShiftRequests">;
  "me.joinedTeams.schedule.UpdateOfferShiftRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.UpdateOfferShiftRequests">;
  "me.joinedTeams.schedule.DeleteOfferShiftRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.DeleteOfferShiftRequests">;
  "me.joinedTeams.schedule.offerShiftRequests.GetCount-7729": TeamsGraphOperationInput<"me.joinedTeams.schedule.offerShiftRequests.GetCount-7729">;
  "me.joinedTeams.schedule.ListOpenShiftChangeRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.ListOpenShiftChangeRequests">;
  "me.joinedTeams.schedule.CreateOpenShiftChangeRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.CreateOpenShiftChangeRequests">;
  "me.joinedTeams.schedule.GetOpenShiftChangeRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.GetOpenShiftChangeRequests">;
  "me.joinedTeams.schedule.UpdateOpenShiftChangeRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.UpdateOpenShiftChangeRequests">;
  "me.joinedTeams.schedule.DeleteOpenShiftChangeRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.DeleteOpenShiftChangeRequests">;
  "me.joinedTeams.schedule.openShiftChangeRequests.GetCount-f641": TeamsGraphOperationInput<"me.joinedTeams.schedule.openShiftChangeRequests.GetCount-f641">;
  "me.joinedTeams.schedule.ListOpenShifts": TeamsGraphOperationInput<"me.joinedTeams.schedule.ListOpenShifts">;
  "me.joinedTeams.schedule.CreateOpenShifts": TeamsGraphOperationInput<"me.joinedTeams.schedule.CreateOpenShifts">;
  "me.joinedTeams.schedule.GetOpenShifts": TeamsGraphOperationInput<"me.joinedTeams.schedule.GetOpenShifts">;
  "me.joinedTeams.schedule.UpdateOpenShifts": TeamsGraphOperationInput<"me.joinedTeams.schedule.UpdateOpenShifts">;
  "me.joinedTeams.schedule.DeleteOpenShifts": TeamsGraphOperationInput<"me.joinedTeams.schedule.DeleteOpenShifts">;
  "me.joinedTeams.schedule.openShifts.GetCount-9bbb": TeamsGraphOperationInput<"me.joinedTeams.schedule.openShifts.GetCount-9bbb">;
  "me.joinedTeams.schedule.ListSchedulingGroups": TeamsGraphOperationInput<"me.joinedTeams.schedule.ListSchedulingGroups">;
  "me.joinedTeams.schedule.CreateSchedulingGroups": TeamsGraphOperationInput<"me.joinedTeams.schedule.CreateSchedulingGroups">;
  "me.joinedTeams.schedule.GetSchedulingGroups": TeamsGraphOperationInput<"me.joinedTeams.schedule.GetSchedulingGroups">;
  "me.joinedTeams.schedule.UpdateSchedulingGroups": TeamsGraphOperationInput<"me.joinedTeams.schedule.UpdateSchedulingGroups">;
  "me.joinedTeams.schedule.DeleteSchedulingGroups": TeamsGraphOperationInput<"me.joinedTeams.schedule.DeleteSchedulingGroups">;
  "me.joinedTeams.schedule.schedulingGroups.GetCount-2ecb": TeamsGraphOperationInput<"me.joinedTeams.schedule.schedulingGroups.GetCount-2ecb">;
  "me.joinedTeams.schedule.ListShifts": TeamsGraphOperationInput<"me.joinedTeams.schedule.ListShifts">;
  "me.joinedTeams.schedule.CreateShifts": TeamsGraphOperationInput<"me.joinedTeams.schedule.CreateShifts">;
  "me.joinedTeams.schedule.GetShifts": TeamsGraphOperationInput<"me.joinedTeams.schedule.GetShifts">;
  "me.joinedTeams.schedule.UpdateShifts": TeamsGraphOperationInput<"me.joinedTeams.schedule.UpdateShifts">;
  "me.joinedTeams.schedule.DeleteShifts": TeamsGraphOperationInput<"me.joinedTeams.schedule.DeleteShifts">;
  "me.joinedTeams.schedule.shifts.GetCount-bd71": TeamsGraphOperationInput<"me.joinedTeams.schedule.shifts.GetCount-bd71">;
  "me.joinedTeams.schedule.ListSwapShiftsChangeRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.ListSwapShiftsChangeRequests">;
  "me.joinedTeams.schedule.CreateSwapShiftsChangeRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.CreateSwapShiftsChangeRequests">;
  "me.joinedTeams.schedule.GetSwapShiftsChangeRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.GetSwapShiftsChangeRequests">;
  "me.joinedTeams.schedule.UpdateSwapShiftsChangeRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.UpdateSwapShiftsChangeRequests">;
  "me.joinedTeams.schedule.DeleteSwapShiftsChangeRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.DeleteSwapShiftsChangeRequests">;
  "me.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-deaa": TeamsGraphOperationInput<"me.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-deaa">;
  "me.joinedTeams.schedule.ListTimeCards": TeamsGraphOperationInput<"me.joinedTeams.schedule.ListTimeCards">;
  "me.joinedTeams.schedule.CreateTimeCards": TeamsGraphOperationInput<"me.joinedTeams.schedule.CreateTimeCards">;
  "me.joinedTeams.schedule.GetTimeCards": TeamsGraphOperationInput<"me.joinedTeams.schedule.GetTimeCards">;
  "me.joinedTeams.schedule.UpdateTimeCards": TeamsGraphOperationInput<"me.joinedTeams.schedule.UpdateTimeCards">;
  "me.joinedTeams.schedule.DeleteTimeCards": TeamsGraphOperationInput<"me.joinedTeams.schedule.DeleteTimeCards">;
  "me.joinedTeams.team.schedule.timeCards.timeCard.clockOut": TeamsGraphOperationInput<"me.joinedTeams.team.schedule.timeCards.timeCard.clockOut">;
  "me.joinedTeams.team.schedule.timeCards.timeCard.confirm": TeamsGraphOperationInput<"me.joinedTeams.team.schedule.timeCards.timeCard.confirm">;
  "me.joinedTeams.team.schedule.timeCards.timeCard.endBreak": TeamsGraphOperationInput<"me.joinedTeams.team.schedule.timeCards.timeCard.endBreak">;
  "me.joinedTeams.team.schedule.timeCards.timeCard.startBreak": TeamsGraphOperationInput<"me.joinedTeams.team.schedule.timeCards.timeCard.startBreak">;
  "me.joinedTeams.schedule.timeCards.GetCount-5c99": TeamsGraphOperationInput<"me.joinedTeams.schedule.timeCards.GetCount-5c99">;
  "me.joinedTeams.team.schedule.timeCards.clockIn": TeamsGraphOperationInput<"me.joinedTeams.team.schedule.timeCards.clockIn">;
  "me.joinedTeams.schedule.ListTimeOffReasons": TeamsGraphOperationInput<"me.joinedTeams.schedule.ListTimeOffReasons">;
  "me.joinedTeams.schedule.CreateTimeOffReasons": TeamsGraphOperationInput<"me.joinedTeams.schedule.CreateTimeOffReasons">;
  "me.joinedTeams.schedule.GetTimeOffReasons": TeamsGraphOperationInput<"me.joinedTeams.schedule.GetTimeOffReasons">;
  "me.joinedTeams.schedule.UpdateTimeOffReasons": TeamsGraphOperationInput<"me.joinedTeams.schedule.UpdateTimeOffReasons">;
  "me.joinedTeams.schedule.DeleteTimeOffReasons": TeamsGraphOperationInput<"me.joinedTeams.schedule.DeleteTimeOffReasons">;
  "me.joinedTeams.schedule.timeOffReasons.GetCount-632a": TeamsGraphOperationInput<"me.joinedTeams.schedule.timeOffReasons.GetCount-632a">;
  "me.joinedTeams.schedule.ListTimeOffRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.ListTimeOffRequests">;
  "me.joinedTeams.schedule.CreateTimeOffRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.CreateTimeOffRequests">;
  "me.joinedTeams.schedule.GetTimeOffRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.GetTimeOffRequests">;
  "me.joinedTeams.schedule.UpdateTimeOffRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.UpdateTimeOffRequests">;
  "me.joinedTeams.schedule.DeleteTimeOffRequests": TeamsGraphOperationInput<"me.joinedTeams.schedule.DeleteTimeOffRequests">;
  "me.joinedTeams.schedule.timeOffRequests.GetCount-9693": TeamsGraphOperationInput<"me.joinedTeams.schedule.timeOffRequests.GetCount-9693">;
  "me.joinedTeams.schedule.ListTimesOff": TeamsGraphOperationInput<"me.joinedTeams.schedule.ListTimesOff">;
  "me.joinedTeams.schedule.CreateTimesOff": TeamsGraphOperationInput<"me.joinedTeams.schedule.CreateTimesOff">;
  "me.joinedTeams.schedule.GetTimesOff": TeamsGraphOperationInput<"me.joinedTeams.schedule.GetTimesOff">;
  "me.joinedTeams.schedule.UpdateTimesOff": TeamsGraphOperationInput<"me.joinedTeams.schedule.UpdateTimesOff">;
  "me.joinedTeams.schedule.DeleteTimesOff": TeamsGraphOperationInput<"me.joinedTeams.schedule.DeleteTimesOff">;
  "me.joinedTeams.schedule.timesOff.GetCount-8199": TeamsGraphOperationInput<"me.joinedTeams.schedule.timesOff.GetCount-8199">;
  "me.joinedTeams.ListTags": TeamsGraphOperationInput<"me.joinedTeams.ListTags">;
  "me.joinedTeams.CreateTags": TeamsGraphOperationInput<"me.joinedTeams.CreateTags">;
  "me.joinedTeams.GetTags": TeamsGraphOperationInput<"me.joinedTeams.GetTags">;
}

export interface TeamsGraphMeTeam04GeneratedClient {
  MeJoinedTeamsPrimaryChannelTabsGetTeamsApp(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.tabs.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.tabs.GetTeamsApp"]>;
  MeJoinedTeamsPrimaryChannelTabsGetCountF9aa(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.tabs.GetCount-f9aa">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.tabs.GetCount-f9aa"]>;
  MeJoinedTeamsGetSchedule(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetSchedule">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetSchedule"]>;
  MeJoinedTeamsSetSchedule(...args: TeamsGraphOperationArgs<"me.joinedTeams.SetSchedule">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.SetSchedule"]>;
  MeJoinedTeamsDeleteSchedule(...args: TeamsGraphOperationArgs<"me.joinedTeams.DeleteSchedule">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.DeleteSchedule"]>;
  MeJoinedTeamsScheduleListDayNotes(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListDayNotes">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.ListDayNotes"]>;
  MeJoinedTeamsScheduleCreateDayNotes(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateDayNotes">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.CreateDayNotes"]>;
  MeJoinedTeamsScheduleGetDayNotes(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetDayNotes">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.GetDayNotes"]>;
  MeJoinedTeamsScheduleUpdateDayNotes(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateDayNotes">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.UpdateDayNotes"]>;
  MeJoinedTeamsScheduleDeleteDayNotes(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteDayNotes">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.DeleteDayNotes"]>;
  MeJoinedTeamsScheduleDayNotesGetCountB5ac(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.dayNotes.GetCount-b5ac">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.dayNotes.GetCount-b5ac"]>;
  MeJoinedTeamsTeamScheduleShare(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.schedule.share">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.schedule.share"]>;
  MeJoinedTeamsScheduleListOfferShiftRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.ListOfferShiftRequests"]>;
  MeJoinedTeamsScheduleCreateOfferShiftRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.CreateOfferShiftRequests"]>;
  MeJoinedTeamsScheduleGetOfferShiftRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.GetOfferShiftRequests"]>;
  MeJoinedTeamsScheduleUpdateOfferShiftRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.UpdateOfferShiftRequests"]>;
  MeJoinedTeamsScheduleDeleteOfferShiftRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.DeleteOfferShiftRequests"]>;
  MeJoinedTeamsScheduleOfferShiftRequestsGetCount7729(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.offerShiftRequests.GetCount-7729">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.offerShiftRequests.GetCount-7729"]>;
  MeJoinedTeamsScheduleListOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.ListOpenShiftChangeRequests"]>;
  MeJoinedTeamsScheduleCreateOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.CreateOpenShiftChangeRequests"]>;
  MeJoinedTeamsScheduleGetOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.GetOpenShiftChangeRequests"]>;
  MeJoinedTeamsScheduleUpdateOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.UpdateOpenShiftChangeRequests"]>;
  MeJoinedTeamsScheduleDeleteOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.DeleteOpenShiftChangeRequests"]>;
  MeJoinedTeamsScheduleOpenShiftChangeRequestsGetCountF641(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.openShiftChangeRequests.GetCount-f641">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.openShiftChangeRequests.GetCount-f641"]>;
  MeJoinedTeamsScheduleListOpenShifts(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListOpenShifts">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.ListOpenShifts"]>;
  MeJoinedTeamsScheduleCreateOpenShifts(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateOpenShifts">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.CreateOpenShifts"]>;
  MeJoinedTeamsScheduleGetOpenShifts(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetOpenShifts">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.GetOpenShifts"]>;
  MeJoinedTeamsScheduleUpdateOpenShifts(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateOpenShifts">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.UpdateOpenShifts"]>;
  MeJoinedTeamsScheduleDeleteOpenShifts(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteOpenShifts">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.DeleteOpenShifts"]>;
  MeJoinedTeamsScheduleOpenShiftsGetCount9bbb(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.openShifts.GetCount-9bbb">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.openShifts.GetCount-9bbb"]>;
  MeJoinedTeamsScheduleListSchedulingGroups(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.ListSchedulingGroups"]>;
  MeJoinedTeamsScheduleCreateSchedulingGroups(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.CreateSchedulingGroups"]>;
  MeJoinedTeamsScheduleGetSchedulingGroups(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.GetSchedulingGroups"]>;
  MeJoinedTeamsScheduleUpdateSchedulingGroups(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.UpdateSchedulingGroups"]>;
  MeJoinedTeamsScheduleDeleteSchedulingGroups(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.DeleteSchedulingGroups"]>;
  MeJoinedTeamsScheduleSchedulingGroupsGetCount2ecb(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.schedulingGroups.GetCount-2ecb">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.schedulingGroups.GetCount-2ecb"]>;
  MeJoinedTeamsScheduleListShifts(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListShifts">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.ListShifts"]>;
  MeJoinedTeamsScheduleCreateShifts(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateShifts">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.CreateShifts"]>;
  MeJoinedTeamsScheduleGetShifts(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetShifts">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.GetShifts"]>;
  MeJoinedTeamsScheduleUpdateShifts(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateShifts">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.UpdateShifts"]>;
  MeJoinedTeamsScheduleDeleteShifts(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteShifts">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.DeleteShifts"]>;
  MeJoinedTeamsScheduleShiftsGetCountBd71(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.shifts.GetCount-bd71">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.shifts.GetCount-bd71"]>;
  MeJoinedTeamsScheduleListSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.ListSwapShiftsChangeRequests"]>;
  MeJoinedTeamsScheduleCreateSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.CreateSwapShiftsChangeRequests"]>;
  MeJoinedTeamsScheduleGetSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.GetSwapShiftsChangeRequests"]>;
  MeJoinedTeamsScheduleUpdateSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.UpdateSwapShiftsChangeRequests"]>;
  MeJoinedTeamsScheduleDeleteSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.DeleteSwapShiftsChangeRequests"]>;
  MeJoinedTeamsScheduleSwapShiftsChangeRequestsGetCountDeaa(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-deaa">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-deaa"]>;
  MeJoinedTeamsScheduleListTimeCards(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListTimeCards">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.ListTimeCards"]>;
  MeJoinedTeamsScheduleCreateTimeCards(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateTimeCards">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.CreateTimeCards"]>;
  MeJoinedTeamsScheduleGetTimeCards(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetTimeCards">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.GetTimeCards"]>;
  MeJoinedTeamsScheduleUpdateTimeCards(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateTimeCards">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.UpdateTimeCards"]>;
  MeJoinedTeamsScheduleDeleteTimeCards(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteTimeCards">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.DeleteTimeCards"]>;
  MeJoinedTeamsTeamScheduleTimeCardsTimeCardClockOut(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.schedule.timeCards.timeCard.clockOut">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.schedule.timeCards.timeCard.clockOut"]>;
  MeJoinedTeamsTeamScheduleTimeCardsTimeCardConfirm(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.schedule.timeCards.timeCard.confirm">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.schedule.timeCards.timeCard.confirm"]>;
  MeJoinedTeamsTeamScheduleTimeCardsTimeCardEndBreak(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.schedule.timeCards.timeCard.endBreak">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.schedule.timeCards.timeCard.endBreak"]>;
  MeJoinedTeamsTeamScheduleTimeCardsTimeCardStartBreak(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.schedule.timeCards.timeCard.startBreak">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.schedule.timeCards.timeCard.startBreak"]>;
  MeJoinedTeamsScheduleTimeCardsGetCount5c99(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.timeCards.GetCount-5c99">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.timeCards.GetCount-5c99"]>;
  MeJoinedTeamsTeamScheduleTimeCardsClockIn(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.schedule.timeCards.clockIn">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.schedule.timeCards.clockIn"]>;
  MeJoinedTeamsScheduleListTimeOffReasons(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.ListTimeOffReasons"]>;
  MeJoinedTeamsScheduleCreateTimeOffReasons(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.CreateTimeOffReasons"]>;
  MeJoinedTeamsScheduleGetTimeOffReasons(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.GetTimeOffReasons"]>;
  MeJoinedTeamsScheduleUpdateTimeOffReasons(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.UpdateTimeOffReasons"]>;
  MeJoinedTeamsScheduleDeleteTimeOffReasons(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.DeleteTimeOffReasons"]>;
  MeJoinedTeamsScheduleTimeOffReasonsGetCount632a(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.timeOffReasons.GetCount-632a">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.timeOffReasons.GetCount-632a"]>;
  MeJoinedTeamsScheduleListTimeOffRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.ListTimeOffRequests"]>;
  MeJoinedTeamsScheduleCreateTimeOffRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.CreateTimeOffRequests"]>;
  MeJoinedTeamsScheduleGetTimeOffRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.GetTimeOffRequests"]>;
  MeJoinedTeamsScheduleUpdateTimeOffRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.UpdateTimeOffRequests"]>;
  MeJoinedTeamsScheduleDeleteTimeOffRequests(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.DeleteTimeOffRequests"]>;
  MeJoinedTeamsScheduleTimeOffRequestsGetCount9693(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.timeOffRequests.GetCount-9693">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.timeOffRequests.GetCount-9693"]>;
  MeJoinedTeamsScheduleListTimesOff(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListTimesOff">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.ListTimesOff"]>;
  MeJoinedTeamsScheduleCreateTimesOff(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateTimesOff">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.CreateTimesOff"]>;
  MeJoinedTeamsScheduleGetTimesOff(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetTimesOff">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.GetTimesOff"]>;
  MeJoinedTeamsScheduleUpdateTimesOff(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateTimesOff">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.UpdateTimesOff"]>;
  MeJoinedTeamsScheduleDeleteTimesOff(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteTimesOff">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.DeleteTimesOff"]>;
  MeJoinedTeamsScheduleTimesOffGetCount8199(...args: TeamsGraphOperationArgs<"me.joinedTeams.schedule.timesOff.GetCount-8199">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.schedule.timesOff.GetCount-8199"]>;
  MeJoinedTeamsListTags(...args: TeamsGraphOperationArgs<"me.joinedTeams.ListTags">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.ListTags"]>;
  MeJoinedTeamsCreateTags(...args: TeamsGraphOperationArgs<"me.joinedTeams.CreateTags">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.CreateTags"]>;
  MeJoinedTeamsGetTags(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetTags">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetTags"]>;
}

export const TeamsGraphMeTeam04GeneratedFunctionNames = [
  "MeJoinedTeamsPrimaryChannelTabsGetTeamsApp",
  "MeJoinedTeamsPrimaryChannelTabsGetCountF9aa",
  "MeJoinedTeamsGetSchedule",
  "MeJoinedTeamsSetSchedule",
  "MeJoinedTeamsDeleteSchedule",
  "MeJoinedTeamsScheduleListDayNotes",
  "MeJoinedTeamsScheduleCreateDayNotes",
  "MeJoinedTeamsScheduleGetDayNotes",
  "MeJoinedTeamsScheduleUpdateDayNotes",
  "MeJoinedTeamsScheduleDeleteDayNotes",
  "MeJoinedTeamsScheduleDayNotesGetCountB5ac",
  "MeJoinedTeamsTeamScheduleShare",
  "MeJoinedTeamsScheduleListOfferShiftRequests",
  "MeJoinedTeamsScheduleCreateOfferShiftRequests",
  "MeJoinedTeamsScheduleGetOfferShiftRequests",
  "MeJoinedTeamsScheduleUpdateOfferShiftRequests",
  "MeJoinedTeamsScheduleDeleteOfferShiftRequests",
  "MeJoinedTeamsScheduleOfferShiftRequestsGetCount7729",
  "MeJoinedTeamsScheduleListOpenShiftChangeRequests",
  "MeJoinedTeamsScheduleCreateOpenShiftChangeRequests",
  "MeJoinedTeamsScheduleGetOpenShiftChangeRequests",
  "MeJoinedTeamsScheduleUpdateOpenShiftChangeRequests",
  "MeJoinedTeamsScheduleDeleteOpenShiftChangeRequests",
  "MeJoinedTeamsScheduleOpenShiftChangeRequestsGetCountF641",
  "MeJoinedTeamsScheduleListOpenShifts",
  "MeJoinedTeamsScheduleCreateOpenShifts",
  "MeJoinedTeamsScheduleGetOpenShifts",
  "MeJoinedTeamsScheduleUpdateOpenShifts",
  "MeJoinedTeamsScheduleDeleteOpenShifts",
  "MeJoinedTeamsScheduleOpenShiftsGetCount9bbb",
  "MeJoinedTeamsScheduleListSchedulingGroups",
  "MeJoinedTeamsScheduleCreateSchedulingGroups",
  "MeJoinedTeamsScheduleGetSchedulingGroups",
  "MeJoinedTeamsScheduleUpdateSchedulingGroups",
  "MeJoinedTeamsScheduleDeleteSchedulingGroups",
  "MeJoinedTeamsScheduleSchedulingGroupsGetCount2ecb",
  "MeJoinedTeamsScheduleListShifts",
  "MeJoinedTeamsScheduleCreateShifts",
  "MeJoinedTeamsScheduleGetShifts",
  "MeJoinedTeamsScheduleUpdateShifts",
  "MeJoinedTeamsScheduleDeleteShifts",
  "MeJoinedTeamsScheduleShiftsGetCountBd71",
  "MeJoinedTeamsScheduleListSwapShiftsChangeRequests",
  "MeJoinedTeamsScheduleCreateSwapShiftsChangeRequests",
  "MeJoinedTeamsScheduleGetSwapShiftsChangeRequests",
  "MeJoinedTeamsScheduleUpdateSwapShiftsChangeRequests",
  "MeJoinedTeamsScheduleDeleteSwapShiftsChangeRequests",
  "MeJoinedTeamsScheduleSwapShiftsChangeRequestsGetCountDeaa",
  "MeJoinedTeamsScheduleListTimeCards",
  "MeJoinedTeamsScheduleCreateTimeCards",
  "MeJoinedTeamsScheduleGetTimeCards",
  "MeJoinedTeamsScheduleUpdateTimeCards",
  "MeJoinedTeamsScheduleDeleteTimeCards",
  "MeJoinedTeamsTeamScheduleTimeCardsTimeCardClockOut",
  "MeJoinedTeamsTeamScheduleTimeCardsTimeCardConfirm",
  "MeJoinedTeamsTeamScheduleTimeCardsTimeCardEndBreak",
  "MeJoinedTeamsTeamScheduleTimeCardsTimeCardStartBreak",
  "MeJoinedTeamsScheduleTimeCardsGetCount5c99",
  "MeJoinedTeamsTeamScheduleTimeCardsClockIn",
  "MeJoinedTeamsScheduleListTimeOffReasons",
  "MeJoinedTeamsScheduleCreateTimeOffReasons",
  "MeJoinedTeamsScheduleGetTimeOffReasons",
  "MeJoinedTeamsScheduleUpdateTimeOffReasons",
  "MeJoinedTeamsScheduleDeleteTimeOffReasons",
  "MeJoinedTeamsScheduleTimeOffReasonsGetCount632a",
  "MeJoinedTeamsScheduleListTimeOffRequests",
  "MeJoinedTeamsScheduleCreateTimeOffRequests",
  "MeJoinedTeamsScheduleGetTimeOffRequests",
  "MeJoinedTeamsScheduleUpdateTimeOffRequests",
  "MeJoinedTeamsScheduleDeleteTimeOffRequests",
  "MeJoinedTeamsScheduleTimeOffRequestsGetCount9693",
  "MeJoinedTeamsScheduleListTimesOff",
  "MeJoinedTeamsScheduleCreateTimesOff",
  "MeJoinedTeamsScheduleGetTimesOff",
  "MeJoinedTeamsScheduleUpdateTimesOff",
  "MeJoinedTeamsScheduleDeleteTimesOff",
  "MeJoinedTeamsScheduleTimesOffGetCount8199",
  "MeJoinedTeamsListTags",
  "MeJoinedTeamsCreateTags",
  "MeJoinedTeamsGetTags"
] as const satisfies readonly (keyof TeamsGraphMeTeam04GeneratedClient)[];

export function createTeamsGraphMeTeam04GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphMeTeam04GeneratedClient {
  return {
    MeJoinedTeamsPrimaryChannelTabsGetTeamsApp: (...args) => callOperation("me.joinedTeams.primaryChannel.tabs.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.tabs.GetTeamsApp">)),
    MeJoinedTeamsPrimaryChannelTabsGetCountF9aa: (...args) => callOperation("me.joinedTeams.primaryChannel.tabs.GetCount-f9aa", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.tabs.GetCount-f9aa">)),
    MeJoinedTeamsGetSchedule: (...args) => callOperation("me.joinedTeams.GetSchedule", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetSchedule">)),
    MeJoinedTeamsSetSchedule: (...args) => callOperation("me.joinedTeams.SetSchedule", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.SetSchedule">)),
    MeJoinedTeamsDeleteSchedule: (...args) => callOperation("me.joinedTeams.DeleteSchedule", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.DeleteSchedule">)),
    MeJoinedTeamsScheduleListDayNotes: (...args) => callOperation("me.joinedTeams.schedule.ListDayNotes", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListDayNotes">)),
    MeJoinedTeamsScheduleCreateDayNotes: (...args) => callOperation("me.joinedTeams.schedule.CreateDayNotes", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateDayNotes">)),
    MeJoinedTeamsScheduleGetDayNotes: (...args) => callOperation("me.joinedTeams.schedule.GetDayNotes", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetDayNotes">)),
    MeJoinedTeamsScheduleUpdateDayNotes: (...args) => callOperation("me.joinedTeams.schedule.UpdateDayNotes", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateDayNotes">)),
    MeJoinedTeamsScheduleDeleteDayNotes: (...args) => callOperation("me.joinedTeams.schedule.DeleteDayNotes", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteDayNotes">)),
    MeJoinedTeamsScheduleDayNotesGetCountB5ac: (...args) => callOperation("me.joinedTeams.schedule.dayNotes.GetCount-b5ac", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.dayNotes.GetCount-b5ac">)),
    MeJoinedTeamsTeamScheduleShare: (...args) => callOperation("me.joinedTeams.team.schedule.share", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.schedule.share">)),
    MeJoinedTeamsScheduleListOfferShiftRequests: (...args) => callOperation("me.joinedTeams.schedule.ListOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListOfferShiftRequests">)),
    MeJoinedTeamsScheduleCreateOfferShiftRequests: (...args) => callOperation("me.joinedTeams.schedule.CreateOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateOfferShiftRequests">)),
    MeJoinedTeamsScheduleGetOfferShiftRequests: (...args) => callOperation("me.joinedTeams.schedule.GetOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetOfferShiftRequests">)),
    MeJoinedTeamsScheduleUpdateOfferShiftRequests: (...args) => callOperation("me.joinedTeams.schedule.UpdateOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateOfferShiftRequests">)),
    MeJoinedTeamsScheduleDeleteOfferShiftRequests: (...args) => callOperation("me.joinedTeams.schedule.DeleteOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteOfferShiftRequests">)),
    MeJoinedTeamsScheduleOfferShiftRequestsGetCount7729: (...args) => callOperation("me.joinedTeams.schedule.offerShiftRequests.GetCount-7729", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.offerShiftRequests.GetCount-7729">)),
    MeJoinedTeamsScheduleListOpenShiftChangeRequests: (...args) => callOperation("me.joinedTeams.schedule.ListOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListOpenShiftChangeRequests">)),
    MeJoinedTeamsScheduleCreateOpenShiftChangeRequests: (...args) => callOperation("me.joinedTeams.schedule.CreateOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateOpenShiftChangeRequests">)),
    MeJoinedTeamsScheduleGetOpenShiftChangeRequests: (...args) => callOperation("me.joinedTeams.schedule.GetOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetOpenShiftChangeRequests">)),
    MeJoinedTeamsScheduleUpdateOpenShiftChangeRequests: (...args) => callOperation("me.joinedTeams.schedule.UpdateOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateOpenShiftChangeRequests">)),
    MeJoinedTeamsScheduleDeleteOpenShiftChangeRequests: (...args) => callOperation("me.joinedTeams.schedule.DeleteOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteOpenShiftChangeRequests">)),
    MeJoinedTeamsScheduleOpenShiftChangeRequestsGetCountF641: (...args) => callOperation("me.joinedTeams.schedule.openShiftChangeRequests.GetCount-f641", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.openShiftChangeRequests.GetCount-f641">)),
    MeJoinedTeamsScheduleListOpenShifts: (...args) => callOperation("me.joinedTeams.schedule.ListOpenShifts", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListOpenShifts">)),
    MeJoinedTeamsScheduleCreateOpenShifts: (...args) => callOperation("me.joinedTeams.schedule.CreateOpenShifts", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateOpenShifts">)),
    MeJoinedTeamsScheduleGetOpenShifts: (...args) => callOperation("me.joinedTeams.schedule.GetOpenShifts", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetOpenShifts">)),
    MeJoinedTeamsScheduleUpdateOpenShifts: (...args) => callOperation("me.joinedTeams.schedule.UpdateOpenShifts", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateOpenShifts">)),
    MeJoinedTeamsScheduleDeleteOpenShifts: (...args) => callOperation("me.joinedTeams.schedule.DeleteOpenShifts", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteOpenShifts">)),
    MeJoinedTeamsScheduleOpenShiftsGetCount9bbb: (...args) => callOperation("me.joinedTeams.schedule.openShifts.GetCount-9bbb", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.openShifts.GetCount-9bbb">)),
    MeJoinedTeamsScheduleListSchedulingGroups: (...args) => callOperation("me.joinedTeams.schedule.ListSchedulingGroups", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListSchedulingGroups">)),
    MeJoinedTeamsScheduleCreateSchedulingGroups: (...args) => callOperation("me.joinedTeams.schedule.CreateSchedulingGroups", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateSchedulingGroups">)),
    MeJoinedTeamsScheduleGetSchedulingGroups: (...args) => callOperation("me.joinedTeams.schedule.GetSchedulingGroups", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetSchedulingGroups">)),
    MeJoinedTeamsScheduleUpdateSchedulingGroups: (...args) => callOperation("me.joinedTeams.schedule.UpdateSchedulingGroups", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateSchedulingGroups">)),
    MeJoinedTeamsScheduleDeleteSchedulingGroups: (...args) => callOperation("me.joinedTeams.schedule.DeleteSchedulingGroups", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteSchedulingGroups">)),
    MeJoinedTeamsScheduleSchedulingGroupsGetCount2ecb: (...args) => callOperation("me.joinedTeams.schedule.schedulingGroups.GetCount-2ecb", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.schedulingGroups.GetCount-2ecb">)),
    MeJoinedTeamsScheduleListShifts: (...args) => callOperation("me.joinedTeams.schedule.ListShifts", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListShifts">)),
    MeJoinedTeamsScheduleCreateShifts: (...args) => callOperation("me.joinedTeams.schedule.CreateShifts", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateShifts">)),
    MeJoinedTeamsScheduleGetShifts: (...args) => callOperation("me.joinedTeams.schedule.GetShifts", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetShifts">)),
    MeJoinedTeamsScheduleUpdateShifts: (...args) => callOperation("me.joinedTeams.schedule.UpdateShifts", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateShifts">)),
    MeJoinedTeamsScheduleDeleteShifts: (...args) => callOperation("me.joinedTeams.schedule.DeleteShifts", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteShifts">)),
    MeJoinedTeamsScheduleShiftsGetCountBd71: (...args) => callOperation("me.joinedTeams.schedule.shifts.GetCount-bd71", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.shifts.GetCount-bd71">)),
    MeJoinedTeamsScheduleListSwapShiftsChangeRequests: (...args) => callOperation("me.joinedTeams.schedule.ListSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListSwapShiftsChangeRequests">)),
    MeJoinedTeamsScheduleCreateSwapShiftsChangeRequests: (...args) => callOperation("me.joinedTeams.schedule.CreateSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateSwapShiftsChangeRequests">)),
    MeJoinedTeamsScheduleGetSwapShiftsChangeRequests: (...args) => callOperation("me.joinedTeams.schedule.GetSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetSwapShiftsChangeRequests">)),
    MeJoinedTeamsScheduleUpdateSwapShiftsChangeRequests: (...args) => callOperation("me.joinedTeams.schedule.UpdateSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateSwapShiftsChangeRequests">)),
    MeJoinedTeamsScheduleDeleteSwapShiftsChangeRequests: (...args) => callOperation("me.joinedTeams.schedule.DeleteSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteSwapShiftsChangeRequests">)),
    MeJoinedTeamsScheduleSwapShiftsChangeRequestsGetCountDeaa: (...args) => callOperation("me.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-deaa", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.swapShiftsChangeRequests.GetCount-deaa">)),
    MeJoinedTeamsScheduleListTimeCards: (...args) => callOperation("me.joinedTeams.schedule.ListTimeCards", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListTimeCards">)),
    MeJoinedTeamsScheduleCreateTimeCards: (...args) => callOperation("me.joinedTeams.schedule.CreateTimeCards", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateTimeCards">)),
    MeJoinedTeamsScheduleGetTimeCards: (...args) => callOperation("me.joinedTeams.schedule.GetTimeCards", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetTimeCards">)),
    MeJoinedTeamsScheduleUpdateTimeCards: (...args) => callOperation("me.joinedTeams.schedule.UpdateTimeCards", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateTimeCards">)),
    MeJoinedTeamsScheduleDeleteTimeCards: (...args) => callOperation("me.joinedTeams.schedule.DeleteTimeCards", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteTimeCards">)),
    MeJoinedTeamsTeamScheduleTimeCardsTimeCardClockOut: (...args) => callOperation("me.joinedTeams.team.schedule.timeCards.timeCard.clockOut", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.schedule.timeCards.timeCard.clockOut">)),
    MeJoinedTeamsTeamScheduleTimeCardsTimeCardConfirm: (...args) => callOperation("me.joinedTeams.team.schedule.timeCards.timeCard.confirm", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.schedule.timeCards.timeCard.confirm">)),
    MeJoinedTeamsTeamScheduleTimeCardsTimeCardEndBreak: (...args) => callOperation("me.joinedTeams.team.schedule.timeCards.timeCard.endBreak", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.schedule.timeCards.timeCard.endBreak">)),
    MeJoinedTeamsTeamScheduleTimeCardsTimeCardStartBreak: (...args) => callOperation("me.joinedTeams.team.schedule.timeCards.timeCard.startBreak", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.schedule.timeCards.timeCard.startBreak">)),
    MeJoinedTeamsScheduleTimeCardsGetCount5c99: (...args) => callOperation("me.joinedTeams.schedule.timeCards.GetCount-5c99", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.timeCards.GetCount-5c99">)),
    MeJoinedTeamsTeamScheduleTimeCardsClockIn: (...args) => callOperation("me.joinedTeams.team.schedule.timeCards.clockIn", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.schedule.timeCards.clockIn">)),
    MeJoinedTeamsScheduleListTimeOffReasons: (...args) => callOperation("me.joinedTeams.schedule.ListTimeOffReasons", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListTimeOffReasons">)),
    MeJoinedTeamsScheduleCreateTimeOffReasons: (...args) => callOperation("me.joinedTeams.schedule.CreateTimeOffReasons", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateTimeOffReasons">)),
    MeJoinedTeamsScheduleGetTimeOffReasons: (...args) => callOperation("me.joinedTeams.schedule.GetTimeOffReasons", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetTimeOffReasons">)),
    MeJoinedTeamsScheduleUpdateTimeOffReasons: (...args) => callOperation("me.joinedTeams.schedule.UpdateTimeOffReasons", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateTimeOffReasons">)),
    MeJoinedTeamsScheduleDeleteTimeOffReasons: (...args) => callOperation("me.joinedTeams.schedule.DeleteTimeOffReasons", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteTimeOffReasons">)),
    MeJoinedTeamsScheduleTimeOffReasonsGetCount632a: (...args) => callOperation("me.joinedTeams.schedule.timeOffReasons.GetCount-632a", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.timeOffReasons.GetCount-632a">)),
    MeJoinedTeamsScheduleListTimeOffRequests: (...args) => callOperation("me.joinedTeams.schedule.ListTimeOffRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListTimeOffRequests">)),
    MeJoinedTeamsScheduleCreateTimeOffRequests: (...args) => callOperation("me.joinedTeams.schedule.CreateTimeOffRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateTimeOffRequests">)),
    MeJoinedTeamsScheduleGetTimeOffRequests: (...args) => callOperation("me.joinedTeams.schedule.GetTimeOffRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetTimeOffRequests">)),
    MeJoinedTeamsScheduleUpdateTimeOffRequests: (...args) => callOperation("me.joinedTeams.schedule.UpdateTimeOffRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateTimeOffRequests">)),
    MeJoinedTeamsScheduleDeleteTimeOffRequests: (...args) => callOperation("me.joinedTeams.schedule.DeleteTimeOffRequests", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteTimeOffRequests">)),
    MeJoinedTeamsScheduleTimeOffRequestsGetCount9693: (...args) => callOperation("me.joinedTeams.schedule.timeOffRequests.GetCount-9693", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.timeOffRequests.GetCount-9693">)),
    MeJoinedTeamsScheduleListTimesOff: (...args) => callOperation("me.joinedTeams.schedule.ListTimesOff", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.ListTimesOff">)),
    MeJoinedTeamsScheduleCreateTimesOff: (...args) => callOperation("me.joinedTeams.schedule.CreateTimesOff", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.CreateTimesOff">)),
    MeJoinedTeamsScheduleGetTimesOff: (...args) => callOperation("me.joinedTeams.schedule.GetTimesOff", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.GetTimesOff">)),
    MeJoinedTeamsScheduleUpdateTimesOff: (...args) => callOperation("me.joinedTeams.schedule.UpdateTimesOff", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.UpdateTimesOff">)),
    MeJoinedTeamsScheduleDeleteTimesOff: (...args) => callOperation("me.joinedTeams.schedule.DeleteTimesOff", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.DeleteTimesOff">)),
    MeJoinedTeamsScheduleTimesOffGetCount8199: (...args) => callOperation("me.joinedTeams.schedule.timesOff.GetCount-8199", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.schedule.timesOff.GetCount-8199">)),
    MeJoinedTeamsListTags: (...args) => callOperation("me.joinedTeams.ListTags", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.ListTags">)),
    MeJoinedTeamsCreateTags: (...args) => callOperation("me.joinedTeams.CreateTags", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.CreateTags">)),
    MeJoinedTeamsGetTags: (...args) => callOperation("me.joinedTeams.GetTags", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetTags">)),
  };
}
