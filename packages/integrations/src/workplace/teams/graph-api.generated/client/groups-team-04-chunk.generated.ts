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
export const TeamsGraphGroupsTeam04OperationKeys = [
  "groups.team.GetSchedule",
  "groups.team.SetSchedule",
  "groups.team.DeleteSchedule",
  "groups.team.schedule.ListDayNotes",
  "groups.team.schedule.CreateDayNotes",
  "groups.team.schedule.GetDayNotes",
  "groups.team.schedule.UpdateDayNotes",
  "groups.team.schedule.DeleteDayNotes",
  "groups.team.schedule.dayNotes.GetCount-46ba",
  "groups.group.team.schedule.share",
  "groups.team.schedule.ListOfferShiftRequests",
  "groups.team.schedule.CreateOfferShiftRequests",
  "groups.team.schedule.GetOfferShiftRequests",
  "groups.team.schedule.UpdateOfferShiftRequests",
  "groups.team.schedule.DeleteOfferShiftRequests",
  "groups.team.schedule.offerShiftRequests.GetCount-a576",
  "groups.team.schedule.ListOpenShiftChangeRequests",
  "groups.team.schedule.CreateOpenShiftChangeRequests",
  "groups.team.schedule.GetOpenShiftChangeRequests",
  "groups.team.schedule.UpdateOpenShiftChangeRequests",
  "groups.team.schedule.DeleteOpenShiftChangeRequests",
  "groups.team.schedule.openShiftChangeRequests.GetCount-a139",
  "groups.team.schedule.ListOpenShifts",
  "groups.team.schedule.CreateOpenShifts",
  "groups.team.schedule.GetOpenShifts",
  "groups.team.schedule.UpdateOpenShifts",
  "groups.team.schedule.DeleteOpenShifts",
  "groups.team.schedule.openShifts.GetCount-bc49",
  "groups.team.schedule.ListSchedulingGroups",
  "groups.team.schedule.CreateSchedulingGroups",
  "groups.team.schedule.GetSchedulingGroups",
  "groups.team.schedule.UpdateSchedulingGroups",
  "groups.team.schedule.DeleteSchedulingGroups",
  "groups.team.schedule.schedulingGroups.GetCount-dd9d",
  "groups.team.schedule.ListShifts",
  "groups.team.schedule.CreateShifts",
  "groups.team.schedule.GetShifts",
  "groups.team.schedule.UpdateShifts",
  "groups.team.schedule.DeleteShifts",
  "groups.team.schedule.shifts.GetCount-b3cf",
  "groups.team.schedule.ListSwapShiftsChangeRequests",
  "groups.team.schedule.CreateSwapShiftsChangeRequests",
  "groups.team.schedule.GetSwapShiftsChangeRequests",
  "groups.team.schedule.UpdateSwapShiftsChangeRequests",
  "groups.team.schedule.DeleteSwapShiftsChangeRequests",
  "groups.team.schedule.swapShiftsChangeRequests.GetCount-61ae",
  "groups.team.schedule.ListTimeCards",
  "groups.team.schedule.CreateTimeCards",
  "groups.team.schedule.GetTimeCards",
  "groups.team.schedule.UpdateTimeCards",
  "groups.team.schedule.DeleteTimeCards",
  "groups.group.team.schedule.timeCards.timeCard.clockOut",
  "groups.group.team.schedule.timeCards.timeCard.confirm",
  "groups.group.team.schedule.timeCards.timeCard.endBreak",
  "groups.group.team.schedule.timeCards.timeCard.startBreak",
  "groups.team.schedule.timeCards.GetCount-67e7",
  "groups.group.team.schedule.timeCards.clockIn",
  "groups.team.schedule.ListTimeOffReasons",
  "groups.team.schedule.CreateTimeOffReasons",
  "groups.team.schedule.GetTimeOffReasons",
  "groups.team.schedule.UpdateTimeOffReasons",
  "groups.team.schedule.DeleteTimeOffReasons",
  "groups.team.schedule.timeOffReasons.GetCount-bf68",
  "groups.team.schedule.ListTimeOffRequests",
  "groups.team.schedule.CreateTimeOffRequests",
  "groups.team.schedule.GetTimeOffRequests",
  "groups.team.schedule.UpdateTimeOffRequests",
  "groups.team.schedule.DeleteTimeOffRequests",
  "groups.team.schedule.timeOffRequests.GetCount-082b",
  "groups.team.schedule.ListTimesOff",
  "groups.team.schedule.CreateTimesOff",
  "groups.team.schedule.GetTimesOff",
  "groups.team.schedule.UpdateTimesOff",
  "groups.team.schedule.DeleteTimesOff",
  "groups.team.schedule.timesOff.GetCount-e64b",
  "groups.team.ListTags",
  "groups.team.CreateTags",
  "groups.team.GetTags",
  "groups.team.UpdateTags",
  "groups.team.DeleteTags"
] as const;
export type TeamsGraphGroupsTeam04OperationKey = typeof TeamsGraphGroupsTeam04OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphGroupsTeam04OperationPathParamMap {
  "groups.team.GetSchedule": { "group-id": TeamsGraphPathParamValue };
  "groups.team.SetSchedule": { "group-id": TeamsGraphPathParamValue };
  "groups.team.DeleteSchedule": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.ListDayNotes": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.CreateDayNotes": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.GetDayNotes": { "group-id": TeamsGraphPathParamValue; "dayNote-id": TeamsGraphPathParamValue };
  "groups.team.schedule.UpdateDayNotes": { "group-id": TeamsGraphPathParamValue; "dayNote-id": TeamsGraphPathParamValue };
  "groups.team.schedule.DeleteDayNotes": { "group-id": TeamsGraphPathParamValue; "dayNote-id": TeamsGraphPathParamValue };
  "groups.team.schedule.dayNotes.GetCount-46ba": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.schedule.share": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.ListOfferShiftRequests": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.CreateOfferShiftRequests": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.GetOfferShiftRequests": { "group-id": TeamsGraphPathParamValue; "offerShiftRequest-id": TeamsGraphPathParamValue };
  "groups.team.schedule.UpdateOfferShiftRequests": { "group-id": TeamsGraphPathParamValue; "offerShiftRequest-id": TeamsGraphPathParamValue };
  "groups.team.schedule.DeleteOfferShiftRequests": { "group-id": TeamsGraphPathParamValue; "offerShiftRequest-id": TeamsGraphPathParamValue };
  "groups.team.schedule.offerShiftRequests.GetCount-a576": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.ListOpenShiftChangeRequests": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.CreateOpenShiftChangeRequests": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.GetOpenShiftChangeRequests": { "group-id": TeamsGraphPathParamValue; "openShiftChangeRequest-id": TeamsGraphPathParamValue };
  "groups.team.schedule.UpdateOpenShiftChangeRequests": { "group-id": TeamsGraphPathParamValue; "openShiftChangeRequest-id": TeamsGraphPathParamValue };
  "groups.team.schedule.DeleteOpenShiftChangeRequests": { "group-id": TeamsGraphPathParamValue; "openShiftChangeRequest-id": TeamsGraphPathParamValue };
  "groups.team.schedule.openShiftChangeRequests.GetCount-a139": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.ListOpenShifts": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.CreateOpenShifts": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.GetOpenShifts": { "group-id": TeamsGraphPathParamValue; "openShift-id": TeamsGraphPathParamValue };
  "groups.team.schedule.UpdateOpenShifts": { "group-id": TeamsGraphPathParamValue; "openShift-id": TeamsGraphPathParamValue };
  "groups.team.schedule.DeleteOpenShifts": { "group-id": TeamsGraphPathParamValue; "openShift-id": TeamsGraphPathParamValue };
  "groups.team.schedule.openShifts.GetCount-bc49": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.ListSchedulingGroups": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.CreateSchedulingGroups": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.GetSchedulingGroups": { "group-id": TeamsGraphPathParamValue; "schedulingGroup-id": TeamsGraphPathParamValue };
  "groups.team.schedule.UpdateSchedulingGroups": { "group-id": TeamsGraphPathParamValue; "schedulingGroup-id": TeamsGraphPathParamValue };
  "groups.team.schedule.DeleteSchedulingGroups": { "group-id": TeamsGraphPathParamValue; "schedulingGroup-id": TeamsGraphPathParamValue };
  "groups.team.schedule.schedulingGroups.GetCount-dd9d": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.ListShifts": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.CreateShifts": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.GetShifts": { "group-id": TeamsGraphPathParamValue; "shift-id": TeamsGraphPathParamValue };
  "groups.team.schedule.UpdateShifts": { "group-id": TeamsGraphPathParamValue; "shift-id": TeamsGraphPathParamValue };
  "groups.team.schedule.DeleteShifts": { "group-id": TeamsGraphPathParamValue; "shift-id": TeamsGraphPathParamValue };
  "groups.team.schedule.shifts.GetCount-b3cf": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.ListSwapShiftsChangeRequests": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.CreateSwapShiftsChangeRequests": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.GetSwapShiftsChangeRequests": { "group-id": TeamsGraphPathParamValue; "swapShiftsChangeRequest-id": TeamsGraphPathParamValue };
  "groups.team.schedule.UpdateSwapShiftsChangeRequests": { "group-id": TeamsGraphPathParamValue; "swapShiftsChangeRequest-id": TeamsGraphPathParamValue };
  "groups.team.schedule.DeleteSwapShiftsChangeRequests": { "group-id": TeamsGraphPathParamValue; "swapShiftsChangeRequest-id": TeamsGraphPathParamValue };
  "groups.team.schedule.swapShiftsChangeRequests.GetCount-61ae": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.ListTimeCards": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.CreateTimeCards": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.GetTimeCards": { "group-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "groups.team.schedule.UpdateTimeCards": { "group-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "groups.team.schedule.DeleteTimeCards": { "group-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "groups.group.team.schedule.timeCards.timeCard.clockOut": { "group-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "groups.group.team.schedule.timeCards.timeCard.confirm": { "group-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "groups.group.team.schedule.timeCards.timeCard.endBreak": { "group-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "groups.group.team.schedule.timeCards.timeCard.startBreak": { "group-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "groups.team.schedule.timeCards.GetCount-67e7": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.schedule.timeCards.clockIn": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.ListTimeOffReasons": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.CreateTimeOffReasons": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.GetTimeOffReasons": { "group-id": TeamsGraphPathParamValue; "timeOffReason-id": TeamsGraphPathParamValue };
  "groups.team.schedule.UpdateTimeOffReasons": { "group-id": TeamsGraphPathParamValue; "timeOffReason-id": TeamsGraphPathParamValue };
  "groups.team.schedule.DeleteTimeOffReasons": { "group-id": TeamsGraphPathParamValue; "timeOffReason-id": TeamsGraphPathParamValue };
  "groups.team.schedule.timeOffReasons.GetCount-bf68": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.ListTimeOffRequests": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.CreateTimeOffRequests": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.GetTimeOffRequests": { "group-id": TeamsGraphPathParamValue; "timeOffRequest-id": TeamsGraphPathParamValue };
  "groups.team.schedule.UpdateTimeOffRequests": { "group-id": TeamsGraphPathParamValue; "timeOffRequest-id": TeamsGraphPathParamValue };
  "groups.team.schedule.DeleteTimeOffRequests": { "group-id": TeamsGraphPathParamValue; "timeOffRequest-id": TeamsGraphPathParamValue };
  "groups.team.schedule.timeOffRequests.GetCount-082b": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.ListTimesOff": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.CreateTimesOff": { "group-id": TeamsGraphPathParamValue };
  "groups.team.schedule.GetTimesOff": { "group-id": TeamsGraphPathParamValue; "timeOff-id": TeamsGraphPathParamValue };
  "groups.team.schedule.UpdateTimesOff": { "group-id": TeamsGraphPathParamValue; "timeOff-id": TeamsGraphPathParamValue };
  "groups.team.schedule.DeleteTimesOff": { "group-id": TeamsGraphPathParamValue; "timeOff-id": TeamsGraphPathParamValue };
  "groups.team.schedule.timesOff.GetCount-e64b": { "group-id": TeamsGraphPathParamValue };
  "groups.team.ListTags": { "group-id": TeamsGraphPathParamValue };
  "groups.team.CreateTags": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetTags": { "group-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "groups.team.UpdateTags": { "group-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
  "groups.team.DeleteTags": { "group-id": TeamsGraphPathParamValue; "teamworkTag-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphGroupsTeam04OperationRequestMap {
  "groups.team.GetSchedule": TeamsGraphOperationInput<"groups.team.GetSchedule">;
  "groups.team.SetSchedule": TeamsGraphOperationInput<"groups.team.SetSchedule">;
  "groups.team.DeleteSchedule": TeamsGraphOperationInput<"groups.team.DeleteSchedule">;
  "groups.team.schedule.ListDayNotes": TeamsGraphOperationInput<"groups.team.schedule.ListDayNotes">;
  "groups.team.schedule.CreateDayNotes": TeamsGraphOperationInput<"groups.team.schedule.CreateDayNotes">;
  "groups.team.schedule.GetDayNotes": TeamsGraphOperationInput<"groups.team.schedule.GetDayNotes">;
  "groups.team.schedule.UpdateDayNotes": TeamsGraphOperationInput<"groups.team.schedule.UpdateDayNotes">;
  "groups.team.schedule.DeleteDayNotes": TeamsGraphOperationInput<"groups.team.schedule.DeleteDayNotes">;
  "groups.team.schedule.dayNotes.GetCount-46ba": TeamsGraphOperationInput<"groups.team.schedule.dayNotes.GetCount-46ba">;
  "groups.group.team.schedule.share": TeamsGraphOperationInput<"groups.group.team.schedule.share">;
  "groups.team.schedule.ListOfferShiftRequests": TeamsGraphOperationInput<"groups.team.schedule.ListOfferShiftRequests">;
  "groups.team.schedule.CreateOfferShiftRequests": TeamsGraphOperationInput<"groups.team.schedule.CreateOfferShiftRequests">;
  "groups.team.schedule.GetOfferShiftRequests": TeamsGraphOperationInput<"groups.team.schedule.GetOfferShiftRequests">;
  "groups.team.schedule.UpdateOfferShiftRequests": TeamsGraphOperationInput<"groups.team.schedule.UpdateOfferShiftRequests">;
  "groups.team.schedule.DeleteOfferShiftRequests": TeamsGraphOperationInput<"groups.team.schedule.DeleteOfferShiftRequests">;
  "groups.team.schedule.offerShiftRequests.GetCount-a576": TeamsGraphOperationInput<"groups.team.schedule.offerShiftRequests.GetCount-a576">;
  "groups.team.schedule.ListOpenShiftChangeRequests": TeamsGraphOperationInput<"groups.team.schedule.ListOpenShiftChangeRequests">;
  "groups.team.schedule.CreateOpenShiftChangeRequests": TeamsGraphOperationInput<"groups.team.schedule.CreateOpenShiftChangeRequests">;
  "groups.team.schedule.GetOpenShiftChangeRequests": TeamsGraphOperationInput<"groups.team.schedule.GetOpenShiftChangeRequests">;
  "groups.team.schedule.UpdateOpenShiftChangeRequests": TeamsGraphOperationInput<"groups.team.schedule.UpdateOpenShiftChangeRequests">;
  "groups.team.schedule.DeleteOpenShiftChangeRequests": TeamsGraphOperationInput<"groups.team.schedule.DeleteOpenShiftChangeRequests">;
  "groups.team.schedule.openShiftChangeRequests.GetCount-a139": TeamsGraphOperationInput<"groups.team.schedule.openShiftChangeRequests.GetCount-a139">;
  "groups.team.schedule.ListOpenShifts": TeamsGraphOperationInput<"groups.team.schedule.ListOpenShifts">;
  "groups.team.schedule.CreateOpenShifts": TeamsGraphOperationInput<"groups.team.schedule.CreateOpenShifts">;
  "groups.team.schedule.GetOpenShifts": TeamsGraphOperationInput<"groups.team.schedule.GetOpenShifts">;
  "groups.team.schedule.UpdateOpenShifts": TeamsGraphOperationInput<"groups.team.schedule.UpdateOpenShifts">;
  "groups.team.schedule.DeleteOpenShifts": TeamsGraphOperationInput<"groups.team.schedule.DeleteOpenShifts">;
  "groups.team.schedule.openShifts.GetCount-bc49": TeamsGraphOperationInput<"groups.team.schedule.openShifts.GetCount-bc49">;
  "groups.team.schedule.ListSchedulingGroups": TeamsGraphOperationInput<"groups.team.schedule.ListSchedulingGroups">;
  "groups.team.schedule.CreateSchedulingGroups": TeamsGraphOperationInput<"groups.team.schedule.CreateSchedulingGroups">;
  "groups.team.schedule.GetSchedulingGroups": TeamsGraphOperationInput<"groups.team.schedule.GetSchedulingGroups">;
  "groups.team.schedule.UpdateSchedulingGroups": TeamsGraphOperationInput<"groups.team.schedule.UpdateSchedulingGroups">;
  "groups.team.schedule.DeleteSchedulingGroups": TeamsGraphOperationInput<"groups.team.schedule.DeleteSchedulingGroups">;
  "groups.team.schedule.schedulingGroups.GetCount-dd9d": TeamsGraphOperationInput<"groups.team.schedule.schedulingGroups.GetCount-dd9d">;
  "groups.team.schedule.ListShifts": TeamsGraphOperationInput<"groups.team.schedule.ListShifts">;
  "groups.team.schedule.CreateShifts": TeamsGraphOperationInput<"groups.team.schedule.CreateShifts">;
  "groups.team.schedule.GetShifts": TeamsGraphOperationInput<"groups.team.schedule.GetShifts">;
  "groups.team.schedule.UpdateShifts": TeamsGraphOperationInput<"groups.team.schedule.UpdateShifts">;
  "groups.team.schedule.DeleteShifts": TeamsGraphOperationInput<"groups.team.schedule.DeleteShifts">;
  "groups.team.schedule.shifts.GetCount-b3cf": TeamsGraphOperationInput<"groups.team.schedule.shifts.GetCount-b3cf">;
  "groups.team.schedule.ListSwapShiftsChangeRequests": TeamsGraphOperationInput<"groups.team.schedule.ListSwapShiftsChangeRequests">;
  "groups.team.schedule.CreateSwapShiftsChangeRequests": TeamsGraphOperationInput<"groups.team.schedule.CreateSwapShiftsChangeRequests">;
  "groups.team.schedule.GetSwapShiftsChangeRequests": TeamsGraphOperationInput<"groups.team.schedule.GetSwapShiftsChangeRequests">;
  "groups.team.schedule.UpdateSwapShiftsChangeRequests": TeamsGraphOperationInput<"groups.team.schedule.UpdateSwapShiftsChangeRequests">;
  "groups.team.schedule.DeleteSwapShiftsChangeRequests": TeamsGraphOperationInput<"groups.team.schedule.DeleteSwapShiftsChangeRequests">;
  "groups.team.schedule.swapShiftsChangeRequests.GetCount-61ae": TeamsGraphOperationInput<"groups.team.schedule.swapShiftsChangeRequests.GetCount-61ae">;
  "groups.team.schedule.ListTimeCards": TeamsGraphOperationInput<"groups.team.schedule.ListTimeCards">;
  "groups.team.schedule.CreateTimeCards": TeamsGraphOperationInput<"groups.team.schedule.CreateTimeCards">;
  "groups.team.schedule.GetTimeCards": TeamsGraphOperationInput<"groups.team.schedule.GetTimeCards">;
  "groups.team.schedule.UpdateTimeCards": TeamsGraphOperationInput<"groups.team.schedule.UpdateTimeCards">;
  "groups.team.schedule.DeleteTimeCards": TeamsGraphOperationInput<"groups.team.schedule.DeleteTimeCards">;
  "groups.group.team.schedule.timeCards.timeCard.clockOut": TeamsGraphOperationInput<"groups.group.team.schedule.timeCards.timeCard.clockOut">;
  "groups.group.team.schedule.timeCards.timeCard.confirm": TeamsGraphOperationInput<"groups.group.team.schedule.timeCards.timeCard.confirm">;
  "groups.group.team.schedule.timeCards.timeCard.endBreak": TeamsGraphOperationInput<"groups.group.team.schedule.timeCards.timeCard.endBreak">;
  "groups.group.team.schedule.timeCards.timeCard.startBreak": TeamsGraphOperationInput<"groups.group.team.schedule.timeCards.timeCard.startBreak">;
  "groups.team.schedule.timeCards.GetCount-67e7": TeamsGraphOperationInput<"groups.team.schedule.timeCards.GetCount-67e7">;
  "groups.group.team.schedule.timeCards.clockIn": TeamsGraphOperationInput<"groups.group.team.schedule.timeCards.clockIn">;
  "groups.team.schedule.ListTimeOffReasons": TeamsGraphOperationInput<"groups.team.schedule.ListTimeOffReasons">;
  "groups.team.schedule.CreateTimeOffReasons": TeamsGraphOperationInput<"groups.team.schedule.CreateTimeOffReasons">;
  "groups.team.schedule.GetTimeOffReasons": TeamsGraphOperationInput<"groups.team.schedule.GetTimeOffReasons">;
  "groups.team.schedule.UpdateTimeOffReasons": TeamsGraphOperationInput<"groups.team.schedule.UpdateTimeOffReasons">;
  "groups.team.schedule.DeleteTimeOffReasons": TeamsGraphOperationInput<"groups.team.schedule.DeleteTimeOffReasons">;
  "groups.team.schedule.timeOffReasons.GetCount-bf68": TeamsGraphOperationInput<"groups.team.schedule.timeOffReasons.GetCount-bf68">;
  "groups.team.schedule.ListTimeOffRequests": TeamsGraphOperationInput<"groups.team.schedule.ListTimeOffRequests">;
  "groups.team.schedule.CreateTimeOffRequests": TeamsGraphOperationInput<"groups.team.schedule.CreateTimeOffRequests">;
  "groups.team.schedule.GetTimeOffRequests": TeamsGraphOperationInput<"groups.team.schedule.GetTimeOffRequests">;
  "groups.team.schedule.UpdateTimeOffRequests": TeamsGraphOperationInput<"groups.team.schedule.UpdateTimeOffRequests">;
  "groups.team.schedule.DeleteTimeOffRequests": TeamsGraphOperationInput<"groups.team.schedule.DeleteTimeOffRequests">;
  "groups.team.schedule.timeOffRequests.GetCount-082b": TeamsGraphOperationInput<"groups.team.schedule.timeOffRequests.GetCount-082b">;
  "groups.team.schedule.ListTimesOff": TeamsGraphOperationInput<"groups.team.schedule.ListTimesOff">;
  "groups.team.schedule.CreateTimesOff": TeamsGraphOperationInput<"groups.team.schedule.CreateTimesOff">;
  "groups.team.schedule.GetTimesOff": TeamsGraphOperationInput<"groups.team.schedule.GetTimesOff">;
  "groups.team.schedule.UpdateTimesOff": TeamsGraphOperationInput<"groups.team.schedule.UpdateTimesOff">;
  "groups.team.schedule.DeleteTimesOff": TeamsGraphOperationInput<"groups.team.schedule.DeleteTimesOff">;
  "groups.team.schedule.timesOff.GetCount-e64b": TeamsGraphOperationInput<"groups.team.schedule.timesOff.GetCount-e64b">;
  "groups.team.ListTags": TeamsGraphOperationInput<"groups.team.ListTags">;
  "groups.team.CreateTags": TeamsGraphOperationInput<"groups.team.CreateTags">;
  "groups.team.GetTags": TeamsGraphOperationInput<"groups.team.GetTags">;
  "groups.team.UpdateTags": TeamsGraphOperationInput<"groups.team.UpdateTags">;
  "groups.team.DeleteTags": TeamsGraphOperationInput<"groups.team.DeleteTags">;
}

export interface TeamsGraphGroupsTeam04GeneratedClient {
  GroupsTeamGetSchedule(...args: TeamsGraphOperationArgs<"groups.team.GetSchedule">): Promise<TeamsGraphOperationResponseMap["groups.team.GetSchedule"]>;
  GroupsTeamSetSchedule(...args: TeamsGraphOperationArgs<"groups.team.SetSchedule">): Promise<TeamsGraphOperationResponseMap["groups.team.SetSchedule"]>;
  GroupsTeamDeleteSchedule(...args: TeamsGraphOperationArgs<"groups.team.DeleteSchedule">): Promise<TeamsGraphOperationResponseMap["groups.team.DeleteSchedule"]>;
  GroupsTeamScheduleListDayNotes(...args: TeamsGraphOperationArgs<"groups.team.schedule.ListDayNotes">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.ListDayNotes"]>;
  GroupsTeamScheduleCreateDayNotes(...args: TeamsGraphOperationArgs<"groups.team.schedule.CreateDayNotes">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.CreateDayNotes"]>;
  GroupsTeamScheduleGetDayNotes(...args: TeamsGraphOperationArgs<"groups.team.schedule.GetDayNotes">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.GetDayNotes"]>;
  GroupsTeamScheduleUpdateDayNotes(...args: TeamsGraphOperationArgs<"groups.team.schedule.UpdateDayNotes">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.UpdateDayNotes"]>;
  GroupsTeamScheduleDeleteDayNotes(...args: TeamsGraphOperationArgs<"groups.team.schedule.DeleteDayNotes">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.DeleteDayNotes"]>;
  GroupsTeamScheduleDayNotesGetCount46ba(...args: TeamsGraphOperationArgs<"groups.team.schedule.dayNotes.GetCount-46ba">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.dayNotes.GetCount-46ba"]>;
  GroupsGroupTeamScheduleShare(...args: TeamsGraphOperationArgs<"groups.group.team.schedule.share">): Promise<TeamsGraphOperationResponseMap["groups.group.team.schedule.share"]>;
  GroupsTeamScheduleListOfferShiftRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.ListOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.ListOfferShiftRequests"]>;
  GroupsTeamScheduleCreateOfferShiftRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.CreateOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.CreateOfferShiftRequests"]>;
  GroupsTeamScheduleGetOfferShiftRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.GetOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.GetOfferShiftRequests"]>;
  GroupsTeamScheduleUpdateOfferShiftRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.UpdateOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.UpdateOfferShiftRequests"]>;
  GroupsTeamScheduleDeleteOfferShiftRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.DeleteOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.DeleteOfferShiftRequests"]>;
  GroupsTeamScheduleOfferShiftRequestsGetCountA576(...args: TeamsGraphOperationArgs<"groups.team.schedule.offerShiftRequests.GetCount-a576">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.offerShiftRequests.GetCount-a576"]>;
  GroupsTeamScheduleListOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.ListOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.ListOpenShiftChangeRequests"]>;
  GroupsTeamScheduleCreateOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.CreateOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.CreateOpenShiftChangeRequests"]>;
  GroupsTeamScheduleGetOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.GetOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.GetOpenShiftChangeRequests"]>;
  GroupsTeamScheduleUpdateOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.UpdateOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.UpdateOpenShiftChangeRequests"]>;
  GroupsTeamScheduleDeleteOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.DeleteOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.DeleteOpenShiftChangeRequests"]>;
  GroupsTeamScheduleOpenShiftChangeRequestsGetCountA139(...args: TeamsGraphOperationArgs<"groups.team.schedule.openShiftChangeRequests.GetCount-a139">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.openShiftChangeRequests.GetCount-a139"]>;
  GroupsTeamScheduleListOpenShifts(...args: TeamsGraphOperationArgs<"groups.team.schedule.ListOpenShifts">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.ListOpenShifts"]>;
  GroupsTeamScheduleCreateOpenShifts(...args: TeamsGraphOperationArgs<"groups.team.schedule.CreateOpenShifts">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.CreateOpenShifts"]>;
  GroupsTeamScheduleGetOpenShifts(...args: TeamsGraphOperationArgs<"groups.team.schedule.GetOpenShifts">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.GetOpenShifts"]>;
  GroupsTeamScheduleUpdateOpenShifts(...args: TeamsGraphOperationArgs<"groups.team.schedule.UpdateOpenShifts">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.UpdateOpenShifts"]>;
  GroupsTeamScheduleDeleteOpenShifts(...args: TeamsGraphOperationArgs<"groups.team.schedule.DeleteOpenShifts">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.DeleteOpenShifts"]>;
  GroupsTeamScheduleOpenShiftsGetCountBc49(...args: TeamsGraphOperationArgs<"groups.team.schedule.openShifts.GetCount-bc49">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.openShifts.GetCount-bc49"]>;
  GroupsTeamScheduleListSchedulingGroups(...args: TeamsGraphOperationArgs<"groups.team.schedule.ListSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.ListSchedulingGroups"]>;
  GroupsTeamScheduleCreateSchedulingGroups(...args: TeamsGraphOperationArgs<"groups.team.schedule.CreateSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.CreateSchedulingGroups"]>;
  GroupsTeamScheduleGetSchedulingGroups(...args: TeamsGraphOperationArgs<"groups.team.schedule.GetSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.GetSchedulingGroups"]>;
  GroupsTeamScheduleUpdateSchedulingGroups(...args: TeamsGraphOperationArgs<"groups.team.schedule.UpdateSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.UpdateSchedulingGroups"]>;
  GroupsTeamScheduleDeleteSchedulingGroups(...args: TeamsGraphOperationArgs<"groups.team.schedule.DeleteSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.DeleteSchedulingGroups"]>;
  GroupsTeamScheduleSchedulingGroupsGetCountDd9d(...args: TeamsGraphOperationArgs<"groups.team.schedule.schedulingGroups.GetCount-dd9d">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.schedulingGroups.GetCount-dd9d"]>;
  GroupsTeamScheduleListShifts(...args: TeamsGraphOperationArgs<"groups.team.schedule.ListShifts">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.ListShifts"]>;
  GroupsTeamScheduleCreateShifts(...args: TeamsGraphOperationArgs<"groups.team.schedule.CreateShifts">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.CreateShifts"]>;
  GroupsTeamScheduleGetShifts(...args: TeamsGraphOperationArgs<"groups.team.schedule.GetShifts">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.GetShifts"]>;
  GroupsTeamScheduleUpdateShifts(...args: TeamsGraphOperationArgs<"groups.team.schedule.UpdateShifts">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.UpdateShifts"]>;
  GroupsTeamScheduleDeleteShifts(...args: TeamsGraphOperationArgs<"groups.team.schedule.DeleteShifts">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.DeleteShifts"]>;
  GroupsTeamScheduleShiftsGetCountB3cf(...args: TeamsGraphOperationArgs<"groups.team.schedule.shifts.GetCount-b3cf">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.shifts.GetCount-b3cf"]>;
  GroupsTeamScheduleListSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.ListSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.ListSwapShiftsChangeRequests"]>;
  GroupsTeamScheduleCreateSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.CreateSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.CreateSwapShiftsChangeRequests"]>;
  GroupsTeamScheduleGetSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.GetSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.GetSwapShiftsChangeRequests"]>;
  GroupsTeamScheduleUpdateSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.UpdateSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.UpdateSwapShiftsChangeRequests"]>;
  GroupsTeamScheduleDeleteSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.DeleteSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.DeleteSwapShiftsChangeRequests"]>;
  GroupsTeamScheduleSwapShiftsChangeRequestsGetCount61ae(...args: TeamsGraphOperationArgs<"groups.team.schedule.swapShiftsChangeRequests.GetCount-61ae">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.swapShiftsChangeRequests.GetCount-61ae"]>;
  GroupsTeamScheduleListTimeCards(...args: TeamsGraphOperationArgs<"groups.team.schedule.ListTimeCards">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.ListTimeCards"]>;
  GroupsTeamScheduleCreateTimeCards(...args: TeamsGraphOperationArgs<"groups.team.schedule.CreateTimeCards">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.CreateTimeCards"]>;
  GroupsTeamScheduleGetTimeCards(...args: TeamsGraphOperationArgs<"groups.team.schedule.GetTimeCards">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.GetTimeCards"]>;
  GroupsTeamScheduleUpdateTimeCards(...args: TeamsGraphOperationArgs<"groups.team.schedule.UpdateTimeCards">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.UpdateTimeCards"]>;
  GroupsTeamScheduleDeleteTimeCards(...args: TeamsGraphOperationArgs<"groups.team.schedule.DeleteTimeCards">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.DeleteTimeCards"]>;
  GroupsGroupTeamScheduleTimeCardsTimeCardClockOut(...args: TeamsGraphOperationArgs<"groups.group.team.schedule.timeCards.timeCard.clockOut">): Promise<TeamsGraphOperationResponseMap["groups.group.team.schedule.timeCards.timeCard.clockOut"]>;
  GroupsGroupTeamScheduleTimeCardsTimeCardConfirm(...args: TeamsGraphOperationArgs<"groups.group.team.schedule.timeCards.timeCard.confirm">): Promise<TeamsGraphOperationResponseMap["groups.group.team.schedule.timeCards.timeCard.confirm"]>;
  GroupsGroupTeamScheduleTimeCardsTimeCardEndBreak(...args: TeamsGraphOperationArgs<"groups.group.team.schedule.timeCards.timeCard.endBreak">): Promise<TeamsGraphOperationResponseMap["groups.group.team.schedule.timeCards.timeCard.endBreak"]>;
  GroupsGroupTeamScheduleTimeCardsTimeCardStartBreak(...args: TeamsGraphOperationArgs<"groups.group.team.schedule.timeCards.timeCard.startBreak">): Promise<TeamsGraphOperationResponseMap["groups.group.team.schedule.timeCards.timeCard.startBreak"]>;
  GroupsTeamScheduleTimeCardsGetCount67e7(...args: TeamsGraphOperationArgs<"groups.team.schedule.timeCards.GetCount-67e7">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.timeCards.GetCount-67e7"]>;
  GroupsGroupTeamScheduleTimeCardsClockIn(...args: TeamsGraphOperationArgs<"groups.group.team.schedule.timeCards.clockIn">): Promise<TeamsGraphOperationResponseMap["groups.group.team.schedule.timeCards.clockIn"]>;
  GroupsTeamScheduleListTimeOffReasons(...args: TeamsGraphOperationArgs<"groups.team.schedule.ListTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.ListTimeOffReasons"]>;
  GroupsTeamScheduleCreateTimeOffReasons(...args: TeamsGraphOperationArgs<"groups.team.schedule.CreateTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.CreateTimeOffReasons"]>;
  GroupsTeamScheduleGetTimeOffReasons(...args: TeamsGraphOperationArgs<"groups.team.schedule.GetTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.GetTimeOffReasons"]>;
  GroupsTeamScheduleUpdateTimeOffReasons(...args: TeamsGraphOperationArgs<"groups.team.schedule.UpdateTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.UpdateTimeOffReasons"]>;
  GroupsTeamScheduleDeleteTimeOffReasons(...args: TeamsGraphOperationArgs<"groups.team.schedule.DeleteTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.DeleteTimeOffReasons"]>;
  GroupsTeamScheduleTimeOffReasonsGetCountBf68(...args: TeamsGraphOperationArgs<"groups.team.schedule.timeOffReasons.GetCount-bf68">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.timeOffReasons.GetCount-bf68"]>;
  GroupsTeamScheduleListTimeOffRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.ListTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.ListTimeOffRequests"]>;
  GroupsTeamScheduleCreateTimeOffRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.CreateTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.CreateTimeOffRequests"]>;
  GroupsTeamScheduleGetTimeOffRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.GetTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.GetTimeOffRequests"]>;
  GroupsTeamScheduleUpdateTimeOffRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.UpdateTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.UpdateTimeOffRequests"]>;
  GroupsTeamScheduleDeleteTimeOffRequests(...args: TeamsGraphOperationArgs<"groups.team.schedule.DeleteTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.DeleteTimeOffRequests"]>;
  GroupsTeamScheduleTimeOffRequestsGetCount082b(...args: TeamsGraphOperationArgs<"groups.team.schedule.timeOffRequests.GetCount-082b">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.timeOffRequests.GetCount-082b"]>;
  GroupsTeamScheduleListTimesOff(...args: TeamsGraphOperationArgs<"groups.team.schedule.ListTimesOff">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.ListTimesOff"]>;
  GroupsTeamScheduleCreateTimesOff(...args: TeamsGraphOperationArgs<"groups.team.schedule.CreateTimesOff">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.CreateTimesOff"]>;
  GroupsTeamScheduleGetTimesOff(...args: TeamsGraphOperationArgs<"groups.team.schedule.GetTimesOff">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.GetTimesOff"]>;
  GroupsTeamScheduleUpdateTimesOff(...args: TeamsGraphOperationArgs<"groups.team.schedule.UpdateTimesOff">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.UpdateTimesOff"]>;
  GroupsTeamScheduleDeleteTimesOff(...args: TeamsGraphOperationArgs<"groups.team.schedule.DeleteTimesOff">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.DeleteTimesOff"]>;
  GroupsTeamScheduleTimesOffGetCountE64b(...args: TeamsGraphOperationArgs<"groups.team.schedule.timesOff.GetCount-e64b">): Promise<TeamsGraphOperationResponseMap["groups.team.schedule.timesOff.GetCount-e64b"]>;
  GroupsTeamListTags(...args: TeamsGraphOperationArgs<"groups.team.ListTags">): Promise<TeamsGraphOperationResponseMap["groups.team.ListTags"]>;
  GroupsTeamCreateTags(...args: TeamsGraphOperationArgs<"groups.team.CreateTags">): Promise<TeamsGraphOperationResponseMap["groups.team.CreateTags"]>;
  GroupsTeamGetTags(...args: TeamsGraphOperationArgs<"groups.team.GetTags">): Promise<TeamsGraphOperationResponseMap["groups.team.GetTags"]>;
  GroupsTeamUpdateTags(...args: TeamsGraphOperationArgs<"groups.team.UpdateTags">): Promise<TeamsGraphOperationResponseMap["groups.team.UpdateTags"]>;
  GroupsTeamDeleteTags(...args: TeamsGraphOperationArgs<"groups.team.DeleteTags">): Promise<TeamsGraphOperationResponseMap["groups.team.DeleteTags"]>;
}

export const TeamsGraphGroupsTeam04GeneratedFunctionNames = [
  "GroupsTeamGetSchedule",
  "GroupsTeamSetSchedule",
  "GroupsTeamDeleteSchedule",
  "GroupsTeamScheduleListDayNotes",
  "GroupsTeamScheduleCreateDayNotes",
  "GroupsTeamScheduleGetDayNotes",
  "GroupsTeamScheduleUpdateDayNotes",
  "GroupsTeamScheduleDeleteDayNotes",
  "GroupsTeamScheduleDayNotesGetCount46ba",
  "GroupsGroupTeamScheduleShare",
  "GroupsTeamScheduleListOfferShiftRequests",
  "GroupsTeamScheduleCreateOfferShiftRequests",
  "GroupsTeamScheduleGetOfferShiftRequests",
  "GroupsTeamScheduleUpdateOfferShiftRequests",
  "GroupsTeamScheduleDeleteOfferShiftRequests",
  "GroupsTeamScheduleOfferShiftRequestsGetCountA576",
  "GroupsTeamScheduleListOpenShiftChangeRequests",
  "GroupsTeamScheduleCreateOpenShiftChangeRequests",
  "GroupsTeamScheduleGetOpenShiftChangeRequests",
  "GroupsTeamScheduleUpdateOpenShiftChangeRequests",
  "GroupsTeamScheduleDeleteOpenShiftChangeRequests",
  "GroupsTeamScheduleOpenShiftChangeRequestsGetCountA139",
  "GroupsTeamScheduleListOpenShifts",
  "GroupsTeamScheduleCreateOpenShifts",
  "GroupsTeamScheduleGetOpenShifts",
  "GroupsTeamScheduleUpdateOpenShifts",
  "GroupsTeamScheduleDeleteOpenShifts",
  "GroupsTeamScheduleOpenShiftsGetCountBc49",
  "GroupsTeamScheduleListSchedulingGroups",
  "GroupsTeamScheduleCreateSchedulingGroups",
  "GroupsTeamScheduleGetSchedulingGroups",
  "GroupsTeamScheduleUpdateSchedulingGroups",
  "GroupsTeamScheduleDeleteSchedulingGroups",
  "GroupsTeamScheduleSchedulingGroupsGetCountDd9d",
  "GroupsTeamScheduleListShifts",
  "GroupsTeamScheduleCreateShifts",
  "GroupsTeamScheduleGetShifts",
  "GroupsTeamScheduleUpdateShifts",
  "GroupsTeamScheduleDeleteShifts",
  "GroupsTeamScheduleShiftsGetCountB3cf",
  "GroupsTeamScheduleListSwapShiftsChangeRequests",
  "GroupsTeamScheduleCreateSwapShiftsChangeRequests",
  "GroupsTeamScheduleGetSwapShiftsChangeRequests",
  "GroupsTeamScheduleUpdateSwapShiftsChangeRequests",
  "GroupsTeamScheduleDeleteSwapShiftsChangeRequests",
  "GroupsTeamScheduleSwapShiftsChangeRequestsGetCount61ae",
  "GroupsTeamScheduleListTimeCards",
  "GroupsTeamScheduleCreateTimeCards",
  "GroupsTeamScheduleGetTimeCards",
  "GroupsTeamScheduleUpdateTimeCards",
  "GroupsTeamScheduleDeleteTimeCards",
  "GroupsGroupTeamScheduleTimeCardsTimeCardClockOut",
  "GroupsGroupTeamScheduleTimeCardsTimeCardConfirm",
  "GroupsGroupTeamScheduleTimeCardsTimeCardEndBreak",
  "GroupsGroupTeamScheduleTimeCardsTimeCardStartBreak",
  "GroupsTeamScheduleTimeCardsGetCount67e7",
  "GroupsGroupTeamScheduleTimeCardsClockIn",
  "GroupsTeamScheduleListTimeOffReasons",
  "GroupsTeamScheduleCreateTimeOffReasons",
  "GroupsTeamScheduleGetTimeOffReasons",
  "GroupsTeamScheduleUpdateTimeOffReasons",
  "GroupsTeamScheduleDeleteTimeOffReasons",
  "GroupsTeamScheduleTimeOffReasonsGetCountBf68",
  "GroupsTeamScheduleListTimeOffRequests",
  "GroupsTeamScheduleCreateTimeOffRequests",
  "GroupsTeamScheduleGetTimeOffRequests",
  "GroupsTeamScheduleUpdateTimeOffRequests",
  "GroupsTeamScheduleDeleteTimeOffRequests",
  "GroupsTeamScheduleTimeOffRequestsGetCount082b",
  "GroupsTeamScheduleListTimesOff",
  "GroupsTeamScheduleCreateTimesOff",
  "GroupsTeamScheduleGetTimesOff",
  "GroupsTeamScheduleUpdateTimesOff",
  "GroupsTeamScheduleDeleteTimesOff",
  "GroupsTeamScheduleTimesOffGetCountE64b",
  "GroupsTeamListTags",
  "GroupsTeamCreateTags",
  "GroupsTeamGetTags",
  "GroupsTeamUpdateTags",
  "GroupsTeamDeleteTags"
] as const satisfies readonly (keyof TeamsGraphGroupsTeam04GeneratedClient)[];

export function createTeamsGraphGroupsTeam04GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphGroupsTeam04GeneratedClient {
  return {
    GroupsTeamGetSchedule: (...args) => callOperation("groups.team.GetSchedule", ...(args as TeamsGraphOperationArgs<"groups.team.GetSchedule">)),
    GroupsTeamSetSchedule: (...args) => callOperation("groups.team.SetSchedule", ...(args as TeamsGraphOperationArgs<"groups.team.SetSchedule">)),
    GroupsTeamDeleteSchedule: (...args) => callOperation("groups.team.DeleteSchedule", ...(args as TeamsGraphOperationArgs<"groups.team.DeleteSchedule">)),
    GroupsTeamScheduleListDayNotes: (...args) => callOperation("groups.team.schedule.ListDayNotes", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.ListDayNotes">)),
    GroupsTeamScheduleCreateDayNotes: (...args) => callOperation("groups.team.schedule.CreateDayNotes", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.CreateDayNotes">)),
    GroupsTeamScheduleGetDayNotes: (...args) => callOperation("groups.team.schedule.GetDayNotes", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.GetDayNotes">)),
    GroupsTeamScheduleUpdateDayNotes: (...args) => callOperation("groups.team.schedule.UpdateDayNotes", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.UpdateDayNotes">)),
    GroupsTeamScheduleDeleteDayNotes: (...args) => callOperation("groups.team.schedule.DeleteDayNotes", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.DeleteDayNotes">)),
    GroupsTeamScheduleDayNotesGetCount46ba: (...args) => callOperation("groups.team.schedule.dayNotes.GetCount-46ba", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.dayNotes.GetCount-46ba">)),
    GroupsGroupTeamScheduleShare: (...args) => callOperation("groups.group.team.schedule.share", ...(args as TeamsGraphOperationArgs<"groups.group.team.schedule.share">)),
    GroupsTeamScheduleListOfferShiftRequests: (...args) => callOperation("groups.team.schedule.ListOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.ListOfferShiftRequests">)),
    GroupsTeamScheduleCreateOfferShiftRequests: (...args) => callOperation("groups.team.schedule.CreateOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.CreateOfferShiftRequests">)),
    GroupsTeamScheduleGetOfferShiftRequests: (...args) => callOperation("groups.team.schedule.GetOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.GetOfferShiftRequests">)),
    GroupsTeamScheduleUpdateOfferShiftRequests: (...args) => callOperation("groups.team.schedule.UpdateOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.UpdateOfferShiftRequests">)),
    GroupsTeamScheduleDeleteOfferShiftRequests: (...args) => callOperation("groups.team.schedule.DeleteOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.DeleteOfferShiftRequests">)),
    GroupsTeamScheduleOfferShiftRequestsGetCountA576: (...args) => callOperation("groups.team.schedule.offerShiftRequests.GetCount-a576", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.offerShiftRequests.GetCount-a576">)),
    GroupsTeamScheduleListOpenShiftChangeRequests: (...args) => callOperation("groups.team.schedule.ListOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.ListOpenShiftChangeRequests">)),
    GroupsTeamScheduleCreateOpenShiftChangeRequests: (...args) => callOperation("groups.team.schedule.CreateOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.CreateOpenShiftChangeRequests">)),
    GroupsTeamScheduleGetOpenShiftChangeRequests: (...args) => callOperation("groups.team.schedule.GetOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.GetOpenShiftChangeRequests">)),
    GroupsTeamScheduleUpdateOpenShiftChangeRequests: (...args) => callOperation("groups.team.schedule.UpdateOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.UpdateOpenShiftChangeRequests">)),
    GroupsTeamScheduleDeleteOpenShiftChangeRequests: (...args) => callOperation("groups.team.schedule.DeleteOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.DeleteOpenShiftChangeRequests">)),
    GroupsTeamScheduleOpenShiftChangeRequestsGetCountA139: (...args) => callOperation("groups.team.schedule.openShiftChangeRequests.GetCount-a139", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.openShiftChangeRequests.GetCount-a139">)),
    GroupsTeamScheduleListOpenShifts: (...args) => callOperation("groups.team.schedule.ListOpenShifts", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.ListOpenShifts">)),
    GroupsTeamScheduleCreateOpenShifts: (...args) => callOperation("groups.team.schedule.CreateOpenShifts", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.CreateOpenShifts">)),
    GroupsTeamScheduleGetOpenShifts: (...args) => callOperation("groups.team.schedule.GetOpenShifts", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.GetOpenShifts">)),
    GroupsTeamScheduleUpdateOpenShifts: (...args) => callOperation("groups.team.schedule.UpdateOpenShifts", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.UpdateOpenShifts">)),
    GroupsTeamScheduleDeleteOpenShifts: (...args) => callOperation("groups.team.schedule.DeleteOpenShifts", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.DeleteOpenShifts">)),
    GroupsTeamScheduleOpenShiftsGetCountBc49: (...args) => callOperation("groups.team.schedule.openShifts.GetCount-bc49", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.openShifts.GetCount-bc49">)),
    GroupsTeamScheduleListSchedulingGroups: (...args) => callOperation("groups.team.schedule.ListSchedulingGroups", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.ListSchedulingGroups">)),
    GroupsTeamScheduleCreateSchedulingGroups: (...args) => callOperation("groups.team.schedule.CreateSchedulingGroups", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.CreateSchedulingGroups">)),
    GroupsTeamScheduleGetSchedulingGroups: (...args) => callOperation("groups.team.schedule.GetSchedulingGroups", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.GetSchedulingGroups">)),
    GroupsTeamScheduleUpdateSchedulingGroups: (...args) => callOperation("groups.team.schedule.UpdateSchedulingGroups", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.UpdateSchedulingGroups">)),
    GroupsTeamScheduleDeleteSchedulingGroups: (...args) => callOperation("groups.team.schedule.DeleteSchedulingGroups", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.DeleteSchedulingGroups">)),
    GroupsTeamScheduleSchedulingGroupsGetCountDd9d: (...args) => callOperation("groups.team.schedule.schedulingGroups.GetCount-dd9d", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.schedulingGroups.GetCount-dd9d">)),
    GroupsTeamScheduleListShifts: (...args) => callOperation("groups.team.schedule.ListShifts", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.ListShifts">)),
    GroupsTeamScheduleCreateShifts: (...args) => callOperation("groups.team.schedule.CreateShifts", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.CreateShifts">)),
    GroupsTeamScheduleGetShifts: (...args) => callOperation("groups.team.schedule.GetShifts", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.GetShifts">)),
    GroupsTeamScheduleUpdateShifts: (...args) => callOperation("groups.team.schedule.UpdateShifts", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.UpdateShifts">)),
    GroupsTeamScheduleDeleteShifts: (...args) => callOperation("groups.team.schedule.DeleteShifts", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.DeleteShifts">)),
    GroupsTeamScheduleShiftsGetCountB3cf: (...args) => callOperation("groups.team.schedule.shifts.GetCount-b3cf", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.shifts.GetCount-b3cf">)),
    GroupsTeamScheduleListSwapShiftsChangeRequests: (...args) => callOperation("groups.team.schedule.ListSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.ListSwapShiftsChangeRequests">)),
    GroupsTeamScheduleCreateSwapShiftsChangeRequests: (...args) => callOperation("groups.team.schedule.CreateSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.CreateSwapShiftsChangeRequests">)),
    GroupsTeamScheduleGetSwapShiftsChangeRequests: (...args) => callOperation("groups.team.schedule.GetSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.GetSwapShiftsChangeRequests">)),
    GroupsTeamScheduleUpdateSwapShiftsChangeRequests: (...args) => callOperation("groups.team.schedule.UpdateSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.UpdateSwapShiftsChangeRequests">)),
    GroupsTeamScheduleDeleteSwapShiftsChangeRequests: (...args) => callOperation("groups.team.schedule.DeleteSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.DeleteSwapShiftsChangeRequests">)),
    GroupsTeamScheduleSwapShiftsChangeRequestsGetCount61ae: (...args) => callOperation("groups.team.schedule.swapShiftsChangeRequests.GetCount-61ae", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.swapShiftsChangeRequests.GetCount-61ae">)),
    GroupsTeamScheduleListTimeCards: (...args) => callOperation("groups.team.schedule.ListTimeCards", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.ListTimeCards">)),
    GroupsTeamScheduleCreateTimeCards: (...args) => callOperation("groups.team.schedule.CreateTimeCards", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.CreateTimeCards">)),
    GroupsTeamScheduleGetTimeCards: (...args) => callOperation("groups.team.schedule.GetTimeCards", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.GetTimeCards">)),
    GroupsTeamScheduleUpdateTimeCards: (...args) => callOperation("groups.team.schedule.UpdateTimeCards", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.UpdateTimeCards">)),
    GroupsTeamScheduleDeleteTimeCards: (...args) => callOperation("groups.team.schedule.DeleteTimeCards", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.DeleteTimeCards">)),
    GroupsGroupTeamScheduleTimeCardsTimeCardClockOut: (...args) => callOperation("groups.group.team.schedule.timeCards.timeCard.clockOut", ...(args as TeamsGraphOperationArgs<"groups.group.team.schedule.timeCards.timeCard.clockOut">)),
    GroupsGroupTeamScheduleTimeCardsTimeCardConfirm: (...args) => callOperation("groups.group.team.schedule.timeCards.timeCard.confirm", ...(args as TeamsGraphOperationArgs<"groups.group.team.schedule.timeCards.timeCard.confirm">)),
    GroupsGroupTeamScheduleTimeCardsTimeCardEndBreak: (...args) => callOperation("groups.group.team.schedule.timeCards.timeCard.endBreak", ...(args as TeamsGraphOperationArgs<"groups.group.team.schedule.timeCards.timeCard.endBreak">)),
    GroupsGroupTeamScheduleTimeCardsTimeCardStartBreak: (...args) => callOperation("groups.group.team.schedule.timeCards.timeCard.startBreak", ...(args as TeamsGraphOperationArgs<"groups.group.team.schedule.timeCards.timeCard.startBreak">)),
    GroupsTeamScheduleTimeCardsGetCount67e7: (...args) => callOperation("groups.team.schedule.timeCards.GetCount-67e7", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.timeCards.GetCount-67e7">)),
    GroupsGroupTeamScheduleTimeCardsClockIn: (...args) => callOperation("groups.group.team.schedule.timeCards.clockIn", ...(args as TeamsGraphOperationArgs<"groups.group.team.schedule.timeCards.clockIn">)),
    GroupsTeamScheduleListTimeOffReasons: (...args) => callOperation("groups.team.schedule.ListTimeOffReasons", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.ListTimeOffReasons">)),
    GroupsTeamScheduleCreateTimeOffReasons: (...args) => callOperation("groups.team.schedule.CreateTimeOffReasons", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.CreateTimeOffReasons">)),
    GroupsTeamScheduleGetTimeOffReasons: (...args) => callOperation("groups.team.schedule.GetTimeOffReasons", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.GetTimeOffReasons">)),
    GroupsTeamScheduleUpdateTimeOffReasons: (...args) => callOperation("groups.team.schedule.UpdateTimeOffReasons", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.UpdateTimeOffReasons">)),
    GroupsTeamScheduleDeleteTimeOffReasons: (...args) => callOperation("groups.team.schedule.DeleteTimeOffReasons", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.DeleteTimeOffReasons">)),
    GroupsTeamScheduleTimeOffReasonsGetCountBf68: (...args) => callOperation("groups.team.schedule.timeOffReasons.GetCount-bf68", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.timeOffReasons.GetCount-bf68">)),
    GroupsTeamScheduleListTimeOffRequests: (...args) => callOperation("groups.team.schedule.ListTimeOffRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.ListTimeOffRequests">)),
    GroupsTeamScheduleCreateTimeOffRequests: (...args) => callOperation("groups.team.schedule.CreateTimeOffRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.CreateTimeOffRequests">)),
    GroupsTeamScheduleGetTimeOffRequests: (...args) => callOperation("groups.team.schedule.GetTimeOffRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.GetTimeOffRequests">)),
    GroupsTeamScheduleUpdateTimeOffRequests: (...args) => callOperation("groups.team.schedule.UpdateTimeOffRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.UpdateTimeOffRequests">)),
    GroupsTeamScheduleDeleteTimeOffRequests: (...args) => callOperation("groups.team.schedule.DeleteTimeOffRequests", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.DeleteTimeOffRequests">)),
    GroupsTeamScheduleTimeOffRequestsGetCount082b: (...args) => callOperation("groups.team.schedule.timeOffRequests.GetCount-082b", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.timeOffRequests.GetCount-082b">)),
    GroupsTeamScheduleListTimesOff: (...args) => callOperation("groups.team.schedule.ListTimesOff", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.ListTimesOff">)),
    GroupsTeamScheduleCreateTimesOff: (...args) => callOperation("groups.team.schedule.CreateTimesOff", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.CreateTimesOff">)),
    GroupsTeamScheduleGetTimesOff: (...args) => callOperation("groups.team.schedule.GetTimesOff", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.GetTimesOff">)),
    GroupsTeamScheduleUpdateTimesOff: (...args) => callOperation("groups.team.schedule.UpdateTimesOff", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.UpdateTimesOff">)),
    GroupsTeamScheduleDeleteTimesOff: (...args) => callOperation("groups.team.schedule.DeleteTimesOff", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.DeleteTimesOff">)),
    GroupsTeamScheduleTimesOffGetCountE64b: (...args) => callOperation("groups.team.schedule.timesOff.GetCount-e64b", ...(args as TeamsGraphOperationArgs<"groups.team.schedule.timesOff.GetCount-e64b">)),
    GroupsTeamListTags: (...args) => callOperation("groups.team.ListTags", ...(args as TeamsGraphOperationArgs<"groups.team.ListTags">)),
    GroupsTeamCreateTags: (...args) => callOperation("groups.team.CreateTags", ...(args as TeamsGraphOperationArgs<"groups.team.CreateTags">)),
    GroupsTeamGetTags: (...args) => callOperation("groups.team.GetTags", ...(args as TeamsGraphOperationArgs<"groups.team.GetTags">)),
    GroupsTeamUpdateTags: (...args) => callOperation("groups.team.UpdateTags", ...(args as TeamsGraphOperationArgs<"groups.team.UpdateTags">)),
    GroupsTeamDeleteTags: (...args) => callOperation("groups.team.DeleteTags", ...(args as TeamsGraphOperationArgs<"groups.team.DeleteTags">)),
  };
}
