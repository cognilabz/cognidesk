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
export const TeamsGraphTeamsScheduleOperationKeys = [
  "teams.GetSchedule",
  "teams.SetSchedule",
  "teams.DeleteSchedule",
  "teams.schedule.ListDayNotes",
  "teams.schedule.CreateDayNotes",
  "teams.schedule.GetDayNotes",
  "teams.schedule.UpdateDayNotes",
  "teams.schedule.DeleteDayNotes",
  "teams.schedule.dayNotes.GetCount-2cfa",
  "teams.team.schedule.share",
  "teams.schedule.ListOfferShiftRequests",
  "teams.schedule.CreateOfferShiftRequests",
  "teams.schedule.GetOfferShiftRequests",
  "teams.schedule.UpdateOfferShiftRequests",
  "teams.schedule.DeleteOfferShiftRequests",
  "teams.schedule.offerShiftRequests.GetCount-9c52",
  "teams.schedule.ListOpenShiftChangeRequests",
  "teams.schedule.CreateOpenShiftChangeRequests",
  "teams.schedule.GetOpenShiftChangeRequests",
  "teams.schedule.UpdateOpenShiftChangeRequests",
  "teams.schedule.DeleteOpenShiftChangeRequests",
  "teams.schedule.openShiftChangeRequests.GetCount-179b",
  "teams.schedule.ListOpenShifts",
  "teams.schedule.CreateOpenShifts",
  "teams.schedule.GetOpenShifts",
  "teams.schedule.UpdateOpenShifts",
  "teams.schedule.DeleteOpenShifts",
  "teams.schedule.openShifts.GetCount-bdbd",
  "teams.schedule.ListSchedulingGroups",
  "teams.schedule.CreateSchedulingGroups",
  "teams.schedule.GetSchedulingGroups",
  "teams.schedule.UpdateSchedulingGroups",
  "teams.schedule.DeleteSchedulingGroups",
  "teams.schedule.schedulingGroups.GetCount-256b",
  "teams.schedule.ListShifts",
  "teams.schedule.CreateShifts",
  "teams.schedule.GetShifts",
  "teams.schedule.UpdateShifts",
  "teams.schedule.DeleteShifts",
  "teams.schedule.shifts.GetCount-97aa",
  "teams.schedule.ListSwapShiftsChangeRequests",
  "teams.schedule.CreateSwapShiftsChangeRequests",
  "teams.schedule.GetSwapShiftsChangeRequests",
  "teams.schedule.UpdateSwapShiftsChangeRequests",
  "teams.schedule.DeleteSwapShiftsChangeRequests",
  "teams.schedule.swapShiftsChangeRequests.GetCount-9390",
  "teams.schedule.ListTimeCards",
  "teams.schedule.CreateTimeCards",
  "teams.schedule.GetTimeCards",
  "teams.schedule.UpdateTimeCards",
  "teams.schedule.DeleteTimeCards",
  "teams.team.schedule.timeCards.timeCard.clockOut",
  "teams.team.schedule.timeCards.timeCard.confirm",
  "teams.team.schedule.timeCards.timeCard.endBreak",
  "teams.team.schedule.timeCards.timeCard.startBreak",
  "teams.schedule.timeCards.GetCount-2ea4",
  "teams.team.schedule.timeCards.clockIn",
  "teams.schedule.ListTimeOffReasons",
  "teams.schedule.CreateTimeOffReasons",
  "teams.schedule.GetTimeOffReasons",
  "teams.schedule.UpdateTimeOffReasons",
  "teams.schedule.DeleteTimeOffReasons",
  "teams.schedule.timeOffReasons.GetCount-4024",
  "teams.schedule.ListTimeOffRequests",
  "teams.schedule.CreateTimeOffRequests",
  "teams.schedule.GetTimeOffRequests",
  "teams.schedule.UpdateTimeOffRequests",
  "teams.schedule.DeleteTimeOffRequests",
  "teams.schedule.timeOffRequests.GetCount-9411",
  "teams.schedule.ListTimesOff",
  "teams.schedule.CreateTimesOff",
  "teams.schedule.GetTimesOff",
  "teams.schedule.UpdateTimesOff",
  "teams.schedule.DeleteTimesOff",
  "teams.schedule.timesOff.GetCount-16b4"
] as const;
export type TeamsGraphTeamsScheduleOperationKey = typeof TeamsGraphTeamsScheduleOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsScheduleOperationPathParamMap {
  "teams.GetSchedule": { "team-id": TeamsGraphPathParamValue };
  "teams.SetSchedule": { "team-id": TeamsGraphPathParamValue };
  "teams.DeleteSchedule": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.ListDayNotes": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.CreateDayNotes": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.GetDayNotes": { "team-id": TeamsGraphPathParamValue; "dayNote-id": TeamsGraphPathParamValue };
  "teams.schedule.UpdateDayNotes": { "team-id": TeamsGraphPathParamValue; "dayNote-id": TeamsGraphPathParamValue };
  "teams.schedule.DeleteDayNotes": { "team-id": TeamsGraphPathParamValue; "dayNote-id": TeamsGraphPathParamValue };
  "teams.schedule.dayNotes.GetCount-2cfa": { "team-id": TeamsGraphPathParamValue };
  "teams.team.schedule.share": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.ListOfferShiftRequests": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.CreateOfferShiftRequests": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.GetOfferShiftRequests": { "team-id": TeamsGraphPathParamValue; "offerShiftRequest-id": TeamsGraphPathParamValue };
  "teams.schedule.UpdateOfferShiftRequests": { "team-id": TeamsGraphPathParamValue; "offerShiftRequest-id": TeamsGraphPathParamValue };
  "teams.schedule.DeleteOfferShiftRequests": { "team-id": TeamsGraphPathParamValue; "offerShiftRequest-id": TeamsGraphPathParamValue };
  "teams.schedule.offerShiftRequests.GetCount-9c52": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.ListOpenShiftChangeRequests": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.CreateOpenShiftChangeRequests": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.GetOpenShiftChangeRequests": { "team-id": TeamsGraphPathParamValue; "openShiftChangeRequest-id": TeamsGraphPathParamValue };
  "teams.schedule.UpdateOpenShiftChangeRequests": { "team-id": TeamsGraphPathParamValue; "openShiftChangeRequest-id": TeamsGraphPathParamValue };
  "teams.schedule.DeleteOpenShiftChangeRequests": { "team-id": TeamsGraphPathParamValue; "openShiftChangeRequest-id": TeamsGraphPathParamValue };
  "teams.schedule.openShiftChangeRequests.GetCount-179b": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.ListOpenShifts": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.CreateOpenShifts": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.GetOpenShifts": { "team-id": TeamsGraphPathParamValue; "openShift-id": TeamsGraphPathParamValue };
  "teams.schedule.UpdateOpenShifts": { "team-id": TeamsGraphPathParamValue; "openShift-id": TeamsGraphPathParamValue };
  "teams.schedule.DeleteOpenShifts": { "team-id": TeamsGraphPathParamValue; "openShift-id": TeamsGraphPathParamValue };
  "teams.schedule.openShifts.GetCount-bdbd": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.ListSchedulingGroups": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.CreateSchedulingGroups": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.GetSchedulingGroups": { "team-id": TeamsGraphPathParamValue; "schedulingGroup-id": TeamsGraphPathParamValue };
  "teams.schedule.UpdateSchedulingGroups": { "team-id": TeamsGraphPathParamValue; "schedulingGroup-id": TeamsGraphPathParamValue };
  "teams.schedule.DeleteSchedulingGroups": { "team-id": TeamsGraphPathParamValue; "schedulingGroup-id": TeamsGraphPathParamValue };
  "teams.schedule.schedulingGroups.GetCount-256b": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.ListShifts": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.CreateShifts": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.GetShifts": { "team-id": TeamsGraphPathParamValue; "shift-id": TeamsGraphPathParamValue };
  "teams.schedule.UpdateShifts": { "team-id": TeamsGraphPathParamValue; "shift-id": TeamsGraphPathParamValue };
  "teams.schedule.DeleteShifts": { "team-id": TeamsGraphPathParamValue; "shift-id": TeamsGraphPathParamValue };
  "teams.schedule.shifts.GetCount-97aa": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.ListSwapShiftsChangeRequests": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.CreateSwapShiftsChangeRequests": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.GetSwapShiftsChangeRequests": { "team-id": TeamsGraphPathParamValue; "swapShiftsChangeRequest-id": TeamsGraphPathParamValue };
  "teams.schedule.UpdateSwapShiftsChangeRequests": { "team-id": TeamsGraphPathParamValue; "swapShiftsChangeRequest-id": TeamsGraphPathParamValue };
  "teams.schedule.DeleteSwapShiftsChangeRequests": { "team-id": TeamsGraphPathParamValue; "swapShiftsChangeRequest-id": TeamsGraphPathParamValue };
  "teams.schedule.swapShiftsChangeRequests.GetCount-9390": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.ListTimeCards": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.CreateTimeCards": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.GetTimeCards": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "teams.schedule.UpdateTimeCards": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "teams.schedule.DeleteTimeCards": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "teams.team.schedule.timeCards.timeCard.clockOut": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "teams.team.schedule.timeCards.timeCard.confirm": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "teams.team.schedule.timeCards.timeCard.endBreak": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "teams.team.schedule.timeCards.timeCard.startBreak": { "team-id": TeamsGraphPathParamValue; "timeCard-id": TeamsGraphPathParamValue };
  "teams.schedule.timeCards.GetCount-2ea4": { "team-id": TeamsGraphPathParamValue };
  "teams.team.schedule.timeCards.clockIn": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.ListTimeOffReasons": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.CreateTimeOffReasons": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.GetTimeOffReasons": { "team-id": TeamsGraphPathParamValue; "timeOffReason-id": TeamsGraphPathParamValue };
  "teams.schedule.UpdateTimeOffReasons": { "team-id": TeamsGraphPathParamValue; "timeOffReason-id": TeamsGraphPathParamValue };
  "teams.schedule.DeleteTimeOffReasons": { "team-id": TeamsGraphPathParamValue; "timeOffReason-id": TeamsGraphPathParamValue };
  "teams.schedule.timeOffReasons.GetCount-4024": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.ListTimeOffRequests": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.CreateTimeOffRequests": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.GetTimeOffRequests": { "team-id": TeamsGraphPathParamValue; "timeOffRequest-id": TeamsGraphPathParamValue };
  "teams.schedule.UpdateTimeOffRequests": { "team-id": TeamsGraphPathParamValue; "timeOffRequest-id": TeamsGraphPathParamValue };
  "teams.schedule.DeleteTimeOffRequests": { "team-id": TeamsGraphPathParamValue; "timeOffRequest-id": TeamsGraphPathParamValue };
  "teams.schedule.timeOffRequests.GetCount-9411": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.ListTimesOff": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.CreateTimesOff": { "team-id": TeamsGraphPathParamValue };
  "teams.schedule.GetTimesOff": { "team-id": TeamsGraphPathParamValue; "timeOff-id": TeamsGraphPathParamValue };
  "teams.schedule.UpdateTimesOff": { "team-id": TeamsGraphPathParamValue; "timeOff-id": TeamsGraphPathParamValue };
  "teams.schedule.DeleteTimesOff": { "team-id": TeamsGraphPathParamValue; "timeOff-id": TeamsGraphPathParamValue };
  "teams.schedule.timesOff.GetCount-16b4": { "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsScheduleOperationRequestMap {
  "teams.GetSchedule": TeamsGraphOperationInput<"teams.GetSchedule">;
  "teams.SetSchedule": TeamsGraphOperationInput<"teams.SetSchedule">;
  "teams.DeleteSchedule": TeamsGraphOperationInput<"teams.DeleteSchedule">;
  "teams.schedule.ListDayNotes": TeamsGraphOperationInput<"teams.schedule.ListDayNotes">;
  "teams.schedule.CreateDayNotes": TeamsGraphOperationInput<"teams.schedule.CreateDayNotes">;
  "teams.schedule.GetDayNotes": TeamsGraphOperationInput<"teams.schedule.GetDayNotes">;
  "teams.schedule.UpdateDayNotes": TeamsGraphOperationInput<"teams.schedule.UpdateDayNotes">;
  "teams.schedule.DeleteDayNotes": TeamsGraphOperationInput<"teams.schedule.DeleteDayNotes">;
  "teams.schedule.dayNotes.GetCount-2cfa": TeamsGraphOperationInput<"teams.schedule.dayNotes.GetCount-2cfa">;
  "teams.team.schedule.share": TeamsGraphOperationInput<"teams.team.schedule.share">;
  "teams.schedule.ListOfferShiftRequests": TeamsGraphOperationInput<"teams.schedule.ListOfferShiftRequests">;
  "teams.schedule.CreateOfferShiftRequests": TeamsGraphOperationInput<"teams.schedule.CreateOfferShiftRequests">;
  "teams.schedule.GetOfferShiftRequests": TeamsGraphOperationInput<"teams.schedule.GetOfferShiftRequests">;
  "teams.schedule.UpdateOfferShiftRequests": TeamsGraphOperationInput<"teams.schedule.UpdateOfferShiftRequests">;
  "teams.schedule.DeleteOfferShiftRequests": TeamsGraphOperationInput<"teams.schedule.DeleteOfferShiftRequests">;
  "teams.schedule.offerShiftRequests.GetCount-9c52": TeamsGraphOperationInput<"teams.schedule.offerShiftRequests.GetCount-9c52">;
  "teams.schedule.ListOpenShiftChangeRequests": TeamsGraphOperationInput<"teams.schedule.ListOpenShiftChangeRequests">;
  "teams.schedule.CreateOpenShiftChangeRequests": TeamsGraphOperationInput<"teams.schedule.CreateOpenShiftChangeRequests">;
  "teams.schedule.GetOpenShiftChangeRequests": TeamsGraphOperationInput<"teams.schedule.GetOpenShiftChangeRequests">;
  "teams.schedule.UpdateOpenShiftChangeRequests": TeamsGraphOperationInput<"teams.schedule.UpdateOpenShiftChangeRequests">;
  "teams.schedule.DeleteOpenShiftChangeRequests": TeamsGraphOperationInput<"teams.schedule.DeleteOpenShiftChangeRequests">;
  "teams.schedule.openShiftChangeRequests.GetCount-179b": TeamsGraphOperationInput<"teams.schedule.openShiftChangeRequests.GetCount-179b">;
  "teams.schedule.ListOpenShifts": TeamsGraphOperationInput<"teams.schedule.ListOpenShifts">;
  "teams.schedule.CreateOpenShifts": TeamsGraphOperationInput<"teams.schedule.CreateOpenShifts">;
  "teams.schedule.GetOpenShifts": TeamsGraphOperationInput<"teams.schedule.GetOpenShifts">;
  "teams.schedule.UpdateOpenShifts": TeamsGraphOperationInput<"teams.schedule.UpdateOpenShifts">;
  "teams.schedule.DeleteOpenShifts": TeamsGraphOperationInput<"teams.schedule.DeleteOpenShifts">;
  "teams.schedule.openShifts.GetCount-bdbd": TeamsGraphOperationInput<"teams.schedule.openShifts.GetCount-bdbd">;
  "teams.schedule.ListSchedulingGroups": TeamsGraphOperationInput<"teams.schedule.ListSchedulingGroups">;
  "teams.schedule.CreateSchedulingGroups": TeamsGraphOperationInput<"teams.schedule.CreateSchedulingGroups">;
  "teams.schedule.GetSchedulingGroups": TeamsGraphOperationInput<"teams.schedule.GetSchedulingGroups">;
  "teams.schedule.UpdateSchedulingGroups": TeamsGraphOperationInput<"teams.schedule.UpdateSchedulingGroups">;
  "teams.schedule.DeleteSchedulingGroups": TeamsGraphOperationInput<"teams.schedule.DeleteSchedulingGroups">;
  "teams.schedule.schedulingGroups.GetCount-256b": TeamsGraphOperationInput<"teams.schedule.schedulingGroups.GetCount-256b">;
  "teams.schedule.ListShifts": TeamsGraphOperationInput<"teams.schedule.ListShifts">;
  "teams.schedule.CreateShifts": TeamsGraphOperationInput<"teams.schedule.CreateShifts">;
  "teams.schedule.GetShifts": TeamsGraphOperationInput<"teams.schedule.GetShifts">;
  "teams.schedule.UpdateShifts": TeamsGraphOperationInput<"teams.schedule.UpdateShifts">;
  "teams.schedule.DeleteShifts": TeamsGraphOperationInput<"teams.schedule.DeleteShifts">;
  "teams.schedule.shifts.GetCount-97aa": TeamsGraphOperationInput<"teams.schedule.shifts.GetCount-97aa">;
  "teams.schedule.ListSwapShiftsChangeRequests": TeamsGraphOperationInput<"teams.schedule.ListSwapShiftsChangeRequests">;
  "teams.schedule.CreateSwapShiftsChangeRequests": TeamsGraphOperationInput<"teams.schedule.CreateSwapShiftsChangeRequests">;
  "teams.schedule.GetSwapShiftsChangeRequests": TeamsGraphOperationInput<"teams.schedule.GetSwapShiftsChangeRequests">;
  "teams.schedule.UpdateSwapShiftsChangeRequests": TeamsGraphOperationInput<"teams.schedule.UpdateSwapShiftsChangeRequests">;
  "teams.schedule.DeleteSwapShiftsChangeRequests": TeamsGraphOperationInput<"teams.schedule.DeleteSwapShiftsChangeRequests">;
  "teams.schedule.swapShiftsChangeRequests.GetCount-9390": TeamsGraphOperationInput<"teams.schedule.swapShiftsChangeRequests.GetCount-9390">;
  "teams.schedule.ListTimeCards": TeamsGraphOperationInput<"teams.schedule.ListTimeCards">;
  "teams.schedule.CreateTimeCards": TeamsGraphOperationInput<"teams.schedule.CreateTimeCards">;
  "teams.schedule.GetTimeCards": TeamsGraphOperationInput<"teams.schedule.GetTimeCards">;
  "teams.schedule.UpdateTimeCards": TeamsGraphOperationInput<"teams.schedule.UpdateTimeCards">;
  "teams.schedule.DeleteTimeCards": TeamsGraphOperationInput<"teams.schedule.DeleteTimeCards">;
  "teams.team.schedule.timeCards.timeCard.clockOut": TeamsGraphOperationInput<"teams.team.schedule.timeCards.timeCard.clockOut">;
  "teams.team.schedule.timeCards.timeCard.confirm": TeamsGraphOperationInput<"teams.team.schedule.timeCards.timeCard.confirm">;
  "teams.team.schedule.timeCards.timeCard.endBreak": TeamsGraphOperationInput<"teams.team.schedule.timeCards.timeCard.endBreak">;
  "teams.team.schedule.timeCards.timeCard.startBreak": TeamsGraphOperationInput<"teams.team.schedule.timeCards.timeCard.startBreak">;
  "teams.schedule.timeCards.GetCount-2ea4": TeamsGraphOperationInput<"teams.schedule.timeCards.GetCount-2ea4">;
  "teams.team.schedule.timeCards.clockIn": TeamsGraphOperationInput<"teams.team.schedule.timeCards.clockIn">;
  "teams.schedule.ListTimeOffReasons": TeamsGraphOperationInput<"teams.schedule.ListTimeOffReasons">;
  "teams.schedule.CreateTimeOffReasons": TeamsGraphOperationInput<"teams.schedule.CreateTimeOffReasons">;
  "teams.schedule.GetTimeOffReasons": TeamsGraphOperationInput<"teams.schedule.GetTimeOffReasons">;
  "teams.schedule.UpdateTimeOffReasons": TeamsGraphOperationInput<"teams.schedule.UpdateTimeOffReasons">;
  "teams.schedule.DeleteTimeOffReasons": TeamsGraphOperationInput<"teams.schedule.DeleteTimeOffReasons">;
  "teams.schedule.timeOffReasons.GetCount-4024": TeamsGraphOperationInput<"teams.schedule.timeOffReasons.GetCount-4024">;
  "teams.schedule.ListTimeOffRequests": TeamsGraphOperationInput<"teams.schedule.ListTimeOffRequests">;
  "teams.schedule.CreateTimeOffRequests": TeamsGraphOperationInput<"teams.schedule.CreateTimeOffRequests">;
  "teams.schedule.GetTimeOffRequests": TeamsGraphOperationInput<"teams.schedule.GetTimeOffRequests">;
  "teams.schedule.UpdateTimeOffRequests": TeamsGraphOperationInput<"teams.schedule.UpdateTimeOffRequests">;
  "teams.schedule.DeleteTimeOffRequests": TeamsGraphOperationInput<"teams.schedule.DeleteTimeOffRequests">;
  "teams.schedule.timeOffRequests.GetCount-9411": TeamsGraphOperationInput<"teams.schedule.timeOffRequests.GetCount-9411">;
  "teams.schedule.ListTimesOff": TeamsGraphOperationInput<"teams.schedule.ListTimesOff">;
  "teams.schedule.CreateTimesOff": TeamsGraphOperationInput<"teams.schedule.CreateTimesOff">;
  "teams.schedule.GetTimesOff": TeamsGraphOperationInput<"teams.schedule.GetTimesOff">;
  "teams.schedule.UpdateTimesOff": TeamsGraphOperationInput<"teams.schedule.UpdateTimesOff">;
  "teams.schedule.DeleteTimesOff": TeamsGraphOperationInput<"teams.schedule.DeleteTimesOff">;
  "teams.schedule.timesOff.GetCount-16b4": TeamsGraphOperationInput<"teams.schedule.timesOff.GetCount-16b4">;
}

export interface TeamsGraphTeamsScheduleGeneratedClient {
  TeamsGetSchedule(...args: TeamsGraphOperationArgs<"teams.GetSchedule">): Promise<TeamsGraphOperationResponseMap["teams.GetSchedule"]>;
  TeamsSetSchedule(...args: TeamsGraphOperationArgs<"teams.SetSchedule">): Promise<TeamsGraphOperationResponseMap["teams.SetSchedule"]>;
  TeamsDeleteSchedule(...args: TeamsGraphOperationArgs<"teams.DeleteSchedule">): Promise<TeamsGraphOperationResponseMap["teams.DeleteSchedule"]>;
  TeamsScheduleListDayNotes(...args: TeamsGraphOperationArgs<"teams.schedule.ListDayNotes">): Promise<TeamsGraphOperationResponseMap["teams.schedule.ListDayNotes"]>;
  TeamsScheduleCreateDayNotes(...args: TeamsGraphOperationArgs<"teams.schedule.CreateDayNotes">): Promise<TeamsGraphOperationResponseMap["teams.schedule.CreateDayNotes"]>;
  TeamsScheduleGetDayNotes(...args: TeamsGraphOperationArgs<"teams.schedule.GetDayNotes">): Promise<TeamsGraphOperationResponseMap["teams.schedule.GetDayNotes"]>;
  TeamsScheduleUpdateDayNotes(...args: TeamsGraphOperationArgs<"teams.schedule.UpdateDayNotes">): Promise<TeamsGraphOperationResponseMap["teams.schedule.UpdateDayNotes"]>;
  TeamsScheduleDeleteDayNotes(...args: TeamsGraphOperationArgs<"teams.schedule.DeleteDayNotes">): Promise<TeamsGraphOperationResponseMap["teams.schedule.DeleteDayNotes"]>;
  TeamsScheduleDayNotesGetCount2cfa(...args: TeamsGraphOperationArgs<"teams.schedule.dayNotes.GetCount-2cfa">): Promise<TeamsGraphOperationResponseMap["teams.schedule.dayNotes.GetCount-2cfa"]>;
  TeamsTeamScheduleShare(...args: TeamsGraphOperationArgs<"teams.team.schedule.share">): Promise<TeamsGraphOperationResponseMap["teams.team.schedule.share"]>;
  TeamsScheduleListOfferShiftRequests(...args: TeamsGraphOperationArgs<"teams.schedule.ListOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.ListOfferShiftRequests"]>;
  TeamsScheduleCreateOfferShiftRequests(...args: TeamsGraphOperationArgs<"teams.schedule.CreateOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.CreateOfferShiftRequests"]>;
  TeamsScheduleGetOfferShiftRequests(...args: TeamsGraphOperationArgs<"teams.schedule.GetOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.GetOfferShiftRequests"]>;
  TeamsScheduleUpdateOfferShiftRequests(...args: TeamsGraphOperationArgs<"teams.schedule.UpdateOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.UpdateOfferShiftRequests"]>;
  TeamsScheduleDeleteOfferShiftRequests(...args: TeamsGraphOperationArgs<"teams.schedule.DeleteOfferShiftRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.DeleteOfferShiftRequests"]>;
  TeamsScheduleOfferShiftRequestsGetCount9c52(...args: TeamsGraphOperationArgs<"teams.schedule.offerShiftRequests.GetCount-9c52">): Promise<TeamsGraphOperationResponseMap["teams.schedule.offerShiftRequests.GetCount-9c52"]>;
  TeamsScheduleListOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"teams.schedule.ListOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.ListOpenShiftChangeRequests"]>;
  TeamsScheduleCreateOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"teams.schedule.CreateOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.CreateOpenShiftChangeRequests"]>;
  TeamsScheduleGetOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"teams.schedule.GetOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.GetOpenShiftChangeRequests"]>;
  TeamsScheduleUpdateOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"teams.schedule.UpdateOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.UpdateOpenShiftChangeRequests"]>;
  TeamsScheduleDeleteOpenShiftChangeRequests(...args: TeamsGraphOperationArgs<"teams.schedule.DeleteOpenShiftChangeRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.DeleteOpenShiftChangeRequests"]>;
  TeamsScheduleOpenShiftChangeRequestsGetCount179b(...args: TeamsGraphOperationArgs<"teams.schedule.openShiftChangeRequests.GetCount-179b">): Promise<TeamsGraphOperationResponseMap["teams.schedule.openShiftChangeRequests.GetCount-179b"]>;
  TeamsScheduleListOpenShifts(...args: TeamsGraphOperationArgs<"teams.schedule.ListOpenShifts">): Promise<TeamsGraphOperationResponseMap["teams.schedule.ListOpenShifts"]>;
  TeamsScheduleCreateOpenShifts(...args: TeamsGraphOperationArgs<"teams.schedule.CreateOpenShifts">): Promise<TeamsGraphOperationResponseMap["teams.schedule.CreateOpenShifts"]>;
  TeamsScheduleGetOpenShifts(...args: TeamsGraphOperationArgs<"teams.schedule.GetOpenShifts">): Promise<TeamsGraphOperationResponseMap["teams.schedule.GetOpenShifts"]>;
  TeamsScheduleUpdateOpenShifts(...args: TeamsGraphOperationArgs<"teams.schedule.UpdateOpenShifts">): Promise<TeamsGraphOperationResponseMap["teams.schedule.UpdateOpenShifts"]>;
  TeamsScheduleDeleteOpenShifts(...args: TeamsGraphOperationArgs<"teams.schedule.DeleteOpenShifts">): Promise<TeamsGraphOperationResponseMap["teams.schedule.DeleteOpenShifts"]>;
  TeamsScheduleOpenShiftsGetCountBdbd(...args: TeamsGraphOperationArgs<"teams.schedule.openShifts.GetCount-bdbd">): Promise<TeamsGraphOperationResponseMap["teams.schedule.openShifts.GetCount-bdbd"]>;
  TeamsScheduleListSchedulingGroups(...args: TeamsGraphOperationArgs<"teams.schedule.ListSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["teams.schedule.ListSchedulingGroups"]>;
  TeamsScheduleCreateSchedulingGroups(...args: TeamsGraphOperationArgs<"teams.schedule.CreateSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["teams.schedule.CreateSchedulingGroups"]>;
  TeamsScheduleGetSchedulingGroups(...args: TeamsGraphOperationArgs<"teams.schedule.GetSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["teams.schedule.GetSchedulingGroups"]>;
  TeamsScheduleUpdateSchedulingGroups(...args: TeamsGraphOperationArgs<"teams.schedule.UpdateSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["teams.schedule.UpdateSchedulingGroups"]>;
  TeamsScheduleDeleteSchedulingGroups(...args: TeamsGraphOperationArgs<"teams.schedule.DeleteSchedulingGroups">): Promise<TeamsGraphOperationResponseMap["teams.schedule.DeleteSchedulingGroups"]>;
  TeamsScheduleSchedulingGroupsGetCount256b(...args: TeamsGraphOperationArgs<"teams.schedule.schedulingGroups.GetCount-256b">): Promise<TeamsGraphOperationResponseMap["teams.schedule.schedulingGroups.GetCount-256b"]>;
  TeamsScheduleListShifts(...args: TeamsGraphOperationArgs<"teams.schedule.ListShifts">): Promise<TeamsGraphOperationResponseMap["teams.schedule.ListShifts"]>;
  TeamsScheduleCreateShifts(...args: TeamsGraphOperationArgs<"teams.schedule.CreateShifts">): Promise<TeamsGraphOperationResponseMap["teams.schedule.CreateShifts"]>;
  TeamsScheduleGetShifts(...args: TeamsGraphOperationArgs<"teams.schedule.GetShifts">): Promise<TeamsGraphOperationResponseMap["teams.schedule.GetShifts"]>;
  TeamsScheduleUpdateShifts(...args: TeamsGraphOperationArgs<"teams.schedule.UpdateShifts">): Promise<TeamsGraphOperationResponseMap["teams.schedule.UpdateShifts"]>;
  TeamsScheduleDeleteShifts(...args: TeamsGraphOperationArgs<"teams.schedule.DeleteShifts">): Promise<TeamsGraphOperationResponseMap["teams.schedule.DeleteShifts"]>;
  TeamsScheduleShiftsGetCount97aa(...args: TeamsGraphOperationArgs<"teams.schedule.shifts.GetCount-97aa">): Promise<TeamsGraphOperationResponseMap["teams.schedule.shifts.GetCount-97aa"]>;
  TeamsScheduleListSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"teams.schedule.ListSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.ListSwapShiftsChangeRequests"]>;
  TeamsScheduleCreateSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"teams.schedule.CreateSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.CreateSwapShiftsChangeRequests"]>;
  TeamsScheduleGetSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"teams.schedule.GetSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.GetSwapShiftsChangeRequests"]>;
  TeamsScheduleUpdateSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"teams.schedule.UpdateSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.UpdateSwapShiftsChangeRequests"]>;
  TeamsScheduleDeleteSwapShiftsChangeRequests(...args: TeamsGraphOperationArgs<"teams.schedule.DeleteSwapShiftsChangeRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.DeleteSwapShiftsChangeRequests"]>;
  TeamsScheduleSwapShiftsChangeRequestsGetCount9390(...args: TeamsGraphOperationArgs<"teams.schedule.swapShiftsChangeRequests.GetCount-9390">): Promise<TeamsGraphOperationResponseMap["teams.schedule.swapShiftsChangeRequests.GetCount-9390"]>;
  TeamsScheduleListTimeCards(...args: TeamsGraphOperationArgs<"teams.schedule.ListTimeCards">): Promise<TeamsGraphOperationResponseMap["teams.schedule.ListTimeCards"]>;
  TeamsScheduleCreateTimeCards(...args: TeamsGraphOperationArgs<"teams.schedule.CreateTimeCards">): Promise<TeamsGraphOperationResponseMap["teams.schedule.CreateTimeCards"]>;
  TeamsScheduleGetTimeCards(...args: TeamsGraphOperationArgs<"teams.schedule.GetTimeCards">): Promise<TeamsGraphOperationResponseMap["teams.schedule.GetTimeCards"]>;
  TeamsScheduleUpdateTimeCards(...args: TeamsGraphOperationArgs<"teams.schedule.UpdateTimeCards">): Promise<TeamsGraphOperationResponseMap["teams.schedule.UpdateTimeCards"]>;
  TeamsScheduleDeleteTimeCards(...args: TeamsGraphOperationArgs<"teams.schedule.DeleteTimeCards">): Promise<TeamsGraphOperationResponseMap["teams.schedule.DeleteTimeCards"]>;
  TeamsTeamScheduleTimeCardsTimeCardClockOut(...args: TeamsGraphOperationArgs<"teams.team.schedule.timeCards.timeCard.clockOut">): Promise<TeamsGraphOperationResponseMap["teams.team.schedule.timeCards.timeCard.clockOut"]>;
  TeamsTeamScheduleTimeCardsTimeCardConfirm(...args: TeamsGraphOperationArgs<"teams.team.schedule.timeCards.timeCard.confirm">): Promise<TeamsGraphOperationResponseMap["teams.team.schedule.timeCards.timeCard.confirm"]>;
  TeamsTeamScheduleTimeCardsTimeCardEndBreak(...args: TeamsGraphOperationArgs<"teams.team.schedule.timeCards.timeCard.endBreak">): Promise<TeamsGraphOperationResponseMap["teams.team.schedule.timeCards.timeCard.endBreak"]>;
  TeamsTeamScheduleTimeCardsTimeCardStartBreak(...args: TeamsGraphOperationArgs<"teams.team.schedule.timeCards.timeCard.startBreak">): Promise<TeamsGraphOperationResponseMap["teams.team.schedule.timeCards.timeCard.startBreak"]>;
  TeamsScheduleTimeCardsGetCount2ea4(...args: TeamsGraphOperationArgs<"teams.schedule.timeCards.GetCount-2ea4">): Promise<TeamsGraphOperationResponseMap["teams.schedule.timeCards.GetCount-2ea4"]>;
  TeamsTeamScheduleTimeCardsClockIn(...args: TeamsGraphOperationArgs<"teams.team.schedule.timeCards.clockIn">): Promise<TeamsGraphOperationResponseMap["teams.team.schedule.timeCards.clockIn"]>;
  TeamsScheduleListTimeOffReasons(...args: TeamsGraphOperationArgs<"teams.schedule.ListTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["teams.schedule.ListTimeOffReasons"]>;
  TeamsScheduleCreateTimeOffReasons(...args: TeamsGraphOperationArgs<"teams.schedule.CreateTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["teams.schedule.CreateTimeOffReasons"]>;
  TeamsScheduleGetTimeOffReasons(...args: TeamsGraphOperationArgs<"teams.schedule.GetTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["teams.schedule.GetTimeOffReasons"]>;
  TeamsScheduleUpdateTimeOffReasons(...args: TeamsGraphOperationArgs<"teams.schedule.UpdateTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["teams.schedule.UpdateTimeOffReasons"]>;
  TeamsScheduleDeleteTimeOffReasons(...args: TeamsGraphOperationArgs<"teams.schedule.DeleteTimeOffReasons">): Promise<TeamsGraphOperationResponseMap["teams.schedule.DeleteTimeOffReasons"]>;
  TeamsScheduleTimeOffReasonsGetCount4024(...args: TeamsGraphOperationArgs<"teams.schedule.timeOffReasons.GetCount-4024">): Promise<TeamsGraphOperationResponseMap["teams.schedule.timeOffReasons.GetCount-4024"]>;
  TeamsScheduleListTimeOffRequests(...args: TeamsGraphOperationArgs<"teams.schedule.ListTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.ListTimeOffRequests"]>;
  TeamsScheduleCreateTimeOffRequests(...args: TeamsGraphOperationArgs<"teams.schedule.CreateTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.CreateTimeOffRequests"]>;
  TeamsScheduleGetTimeOffRequests(...args: TeamsGraphOperationArgs<"teams.schedule.GetTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.GetTimeOffRequests"]>;
  TeamsScheduleUpdateTimeOffRequests(...args: TeamsGraphOperationArgs<"teams.schedule.UpdateTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.UpdateTimeOffRequests"]>;
  TeamsScheduleDeleteTimeOffRequests(...args: TeamsGraphOperationArgs<"teams.schedule.DeleteTimeOffRequests">): Promise<TeamsGraphOperationResponseMap["teams.schedule.DeleteTimeOffRequests"]>;
  TeamsScheduleTimeOffRequestsGetCount9411(...args: TeamsGraphOperationArgs<"teams.schedule.timeOffRequests.GetCount-9411">): Promise<TeamsGraphOperationResponseMap["teams.schedule.timeOffRequests.GetCount-9411"]>;
  TeamsScheduleListTimesOff(...args: TeamsGraphOperationArgs<"teams.schedule.ListTimesOff">): Promise<TeamsGraphOperationResponseMap["teams.schedule.ListTimesOff"]>;
  TeamsScheduleCreateTimesOff(...args: TeamsGraphOperationArgs<"teams.schedule.CreateTimesOff">): Promise<TeamsGraphOperationResponseMap["teams.schedule.CreateTimesOff"]>;
  TeamsScheduleGetTimesOff(...args: TeamsGraphOperationArgs<"teams.schedule.GetTimesOff">): Promise<TeamsGraphOperationResponseMap["teams.schedule.GetTimesOff"]>;
  TeamsScheduleUpdateTimesOff(...args: TeamsGraphOperationArgs<"teams.schedule.UpdateTimesOff">): Promise<TeamsGraphOperationResponseMap["teams.schedule.UpdateTimesOff"]>;
  TeamsScheduleDeleteTimesOff(...args: TeamsGraphOperationArgs<"teams.schedule.DeleteTimesOff">): Promise<TeamsGraphOperationResponseMap["teams.schedule.DeleteTimesOff"]>;
  TeamsScheduleTimesOffGetCount16b4(...args: TeamsGraphOperationArgs<"teams.schedule.timesOff.GetCount-16b4">): Promise<TeamsGraphOperationResponseMap["teams.schedule.timesOff.GetCount-16b4"]>;
}

export const TeamsGraphTeamsScheduleGeneratedFunctionNames = [
  "TeamsGetSchedule",
  "TeamsSetSchedule",
  "TeamsDeleteSchedule",
  "TeamsScheduleListDayNotes",
  "TeamsScheduleCreateDayNotes",
  "TeamsScheduleGetDayNotes",
  "TeamsScheduleUpdateDayNotes",
  "TeamsScheduleDeleteDayNotes",
  "TeamsScheduleDayNotesGetCount2cfa",
  "TeamsTeamScheduleShare",
  "TeamsScheduleListOfferShiftRequests",
  "TeamsScheduleCreateOfferShiftRequests",
  "TeamsScheduleGetOfferShiftRequests",
  "TeamsScheduleUpdateOfferShiftRequests",
  "TeamsScheduleDeleteOfferShiftRequests",
  "TeamsScheduleOfferShiftRequestsGetCount9c52",
  "TeamsScheduleListOpenShiftChangeRequests",
  "TeamsScheduleCreateOpenShiftChangeRequests",
  "TeamsScheduleGetOpenShiftChangeRequests",
  "TeamsScheduleUpdateOpenShiftChangeRequests",
  "TeamsScheduleDeleteOpenShiftChangeRequests",
  "TeamsScheduleOpenShiftChangeRequestsGetCount179b",
  "TeamsScheduleListOpenShifts",
  "TeamsScheduleCreateOpenShifts",
  "TeamsScheduleGetOpenShifts",
  "TeamsScheduleUpdateOpenShifts",
  "TeamsScheduleDeleteOpenShifts",
  "TeamsScheduleOpenShiftsGetCountBdbd",
  "TeamsScheduleListSchedulingGroups",
  "TeamsScheduleCreateSchedulingGroups",
  "TeamsScheduleGetSchedulingGroups",
  "TeamsScheduleUpdateSchedulingGroups",
  "TeamsScheduleDeleteSchedulingGroups",
  "TeamsScheduleSchedulingGroupsGetCount256b",
  "TeamsScheduleListShifts",
  "TeamsScheduleCreateShifts",
  "TeamsScheduleGetShifts",
  "TeamsScheduleUpdateShifts",
  "TeamsScheduleDeleteShifts",
  "TeamsScheduleShiftsGetCount97aa",
  "TeamsScheduleListSwapShiftsChangeRequests",
  "TeamsScheduleCreateSwapShiftsChangeRequests",
  "TeamsScheduleGetSwapShiftsChangeRequests",
  "TeamsScheduleUpdateSwapShiftsChangeRequests",
  "TeamsScheduleDeleteSwapShiftsChangeRequests",
  "TeamsScheduleSwapShiftsChangeRequestsGetCount9390",
  "TeamsScheduleListTimeCards",
  "TeamsScheduleCreateTimeCards",
  "TeamsScheduleGetTimeCards",
  "TeamsScheduleUpdateTimeCards",
  "TeamsScheduleDeleteTimeCards",
  "TeamsTeamScheduleTimeCardsTimeCardClockOut",
  "TeamsTeamScheduleTimeCardsTimeCardConfirm",
  "TeamsTeamScheduleTimeCardsTimeCardEndBreak",
  "TeamsTeamScheduleTimeCardsTimeCardStartBreak",
  "TeamsScheduleTimeCardsGetCount2ea4",
  "TeamsTeamScheduleTimeCardsClockIn",
  "TeamsScheduleListTimeOffReasons",
  "TeamsScheduleCreateTimeOffReasons",
  "TeamsScheduleGetTimeOffReasons",
  "TeamsScheduleUpdateTimeOffReasons",
  "TeamsScheduleDeleteTimeOffReasons",
  "TeamsScheduleTimeOffReasonsGetCount4024",
  "TeamsScheduleListTimeOffRequests",
  "TeamsScheduleCreateTimeOffRequests",
  "TeamsScheduleGetTimeOffRequests",
  "TeamsScheduleUpdateTimeOffRequests",
  "TeamsScheduleDeleteTimeOffRequests",
  "TeamsScheduleTimeOffRequestsGetCount9411",
  "TeamsScheduleListTimesOff",
  "TeamsScheduleCreateTimesOff",
  "TeamsScheduleGetTimesOff",
  "TeamsScheduleUpdateTimesOff",
  "TeamsScheduleDeleteTimesOff",
  "TeamsScheduleTimesOffGetCount16b4"
] as const satisfies readonly (keyof TeamsGraphTeamsScheduleGeneratedClient)[];

export function createTeamsGraphTeamsScheduleGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsScheduleGeneratedClient {
  return {
    TeamsGetSchedule: (...args) => callOperation("teams.GetSchedule", ...(args as TeamsGraphOperationArgs<"teams.GetSchedule">)),
    TeamsSetSchedule: (...args) => callOperation("teams.SetSchedule", ...(args as TeamsGraphOperationArgs<"teams.SetSchedule">)),
    TeamsDeleteSchedule: (...args) => callOperation("teams.DeleteSchedule", ...(args as TeamsGraphOperationArgs<"teams.DeleteSchedule">)),
    TeamsScheduleListDayNotes: (...args) => callOperation("teams.schedule.ListDayNotes", ...(args as TeamsGraphOperationArgs<"teams.schedule.ListDayNotes">)),
    TeamsScheduleCreateDayNotes: (...args) => callOperation("teams.schedule.CreateDayNotes", ...(args as TeamsGraphOperationArgs<"teams.schedule.CreateDayNotes">)),
    TeamsScheduleGetDayNotes: (...args) => callOperation("teams.schedule.GetDayNotes", ...(args as TeamsGraphOperationArgs<"teams.schedule.GetDayNotes">)),
    TeamsScheduleUpdateDayNotes: (...args) => callOperation("teams.schedule.UpdateDayNotes", ...(args as TeamsGraphOperationArgs<"teams.schedule.UpdateDayNotes">)),
    TeamsScheduleDeleteDayNotes: (...args) => callOperation("teams.schedule.DeleteDayNotes", ...(args as TeamsGraphOperationArgs<"teams.schedule.DeleteDayNotes">)),
    TeamsScheduleDayNotesGetCount2cfa: (...args) => callOperation("teams.schedule.dayNotes.GetCount-2cfa", ...(args as TeamsGraphOperationArgs<"teams.schedule.dayNotes.GetCount-2cfa">)),
    TeamsTeamScheduleShare: (...args) => callOperation("teams.team.schedule.share", ...(args as TeamsGraphOperationArgs<"teams.team.schedule.share">)),
    TeamsScheduleListOfferShiftRequests: (...args) => callOperation("teams.schedule.ListOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.ListOfferShiftRequests">)),
    TeamsScheduleCreateOfferShiftRequests: (...args) => callOperation("teams.schedule.CreateOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.CreateOfferShiftRequests">)),
    TeamsScheduleGetOfferShiftRequests: (...args) => callOperation("teams.schedule.GetOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.GetOfferShiftRequests">)),
    TeamsScheduleUpdateOfferShiftRequests: (...args) => callOperation("teams.schedule.UpdateOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.UpdateOfferShiftRequests">)),
    TeamsScheduleDeleteOfferShiftRequests: (...args) => callOperation("teams.schedule.DeleteOfferShiftRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.DeleteOfferShiftRequests">)),
    TeamsScheduleOfferShiftRequestsGetCount9c52: (...args) => callOperation("teams.schedule.offerShiftRequests.GetCount-9c52", ...(args as TeamsGraphOperationArgs<"teams.schedule.offerShiftRequests.GetCount-9c52">)),
    TeamsScheduleListOpenShiftChangeRequests: (...args) => callOperation("teams.schedule.ListOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.ListOpenShiftChangeRequests">)),
    TeamsScheduleCreateOpenShiftChangeRequests: (...args) => callOperation("teams.schedule.CreateOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.CreateOpenShiftChangeRequests">)),
    TeamsScheduleGetOpenShiftChangeRequests: (...args) => callOperation("teams.schedule.GetOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.GetOpenShiftChangeRequests">)),
    TeamsScheduleUpdateOpenShiftChangeRequests: (...args) => callOperation("teams.schedule.UpdateOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.UpdateOpenShiftChangeRequests">)),
    TeamsScheduleDeleteOpenShiftChangeRequests: (...args) => callOperation("teams.schedule.DeleteOpenShiftChangeRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.DeleteOpenShiftChangeRequests">)),
    TeamsScheduleOpenShiftChangeRequestsGetCount179b: (...args) => callOperation("teams.schedule.openShiftChangeRequests.GetCount-179b", ...(args as TeamsGraphOperationArgs<"teams.schedule.openShiftChangeRequests.GetCount-179b">)),
    TeamsScheduleListOpenShifts: (...args) => callOperation("teams.schedule.ListOpenShifts", ...(args as TeamsGraphOperationArgs<"teams.schedule.ListOpenShifts">)),
    TeamsScheduleCreateOpenShifts: (...args) => callOperation("teams.schedule.CreateOpenShifts", ...(args as TeamsGraphOperationArgs<"teams.schedule.CreateOpenShifts">)),
    TeamsScheduleGetOpenShifts: (...args) => callOperation("teams.schedule.GetOpenShifts", ...(args as TeamsGraphOperationArgs<"teams.schedule.GetOpenShifts">)),
    TeamsScheduleUpdateOpenShifts: (...args) => callOperation("teams.schedule.UpdateOpenShifts", ...(args as TeamsGraphOperationArgs<"teams.schedule.UpdateOpenShifts">)),
    TeamsScheduleDeleteOpenShifts: (...args) => callOperation("teams.schedule.DeleteOpenShifts", ...(args as TeamsGraphOperationArgs<"teams.schedule.DeleteOpenShifts">)),
    TeamsScheduleOpenShiftsGetCountBdbd: (...args) => callOperation("teams.schedule.openShifts.GetCount-bdbd", ...(args as TeamsGraphOperationArgs<"teams.schedule.openShifts.GetCount-bdbd">)),
    TeamsScheduleListSchedulingGroups: (...args) => callOperation("teams.schedule.ListSchedulingGroups", ...(args as TeamsGraphOperationArgs<"teams.schedule.ListSchedulingGroups">)),
    TeamsScheduleCreateSchedulingGroups: (...args) => callOperation("teams.schedule.CreateSchedulingGroups", ...(args as TeamsGraphOperationArgs<"teams.schedule.CreateSchedulingGroups">)),
    TeamsScheduleGetSchedulingGroups: (...args) => callOperation("teams.schedule.GetSchedulingGroups", ...(args as TeamsGraphOperationArgs<"teams.schedule.GetSchedulingGroups">)),
    TeamsScheduleUpdateSchedulingGroups: (...args) => callOperation("teams.schedule.UpdateSchedulingGroups", ...(args as TeamsGraphOperationArgs<"teams.schedule.UpdateSchedulingGroups">)),
    TeamsScheduleDeleteSchedulingGroups: (...args) => callOperation("teams.schedule.DeleteSchedulingGroups", ...(args as TeamsGraphOperationArgs<"teams.schedule.DeleteSchedulingGroups">)),
    TeamsScheduleSchedulingGroupsGetCount256b: (...args) => callOperation("teams.schedule.schedulingGroups.GetCount-256b", ...(args as TeamsGraphOperationArgs<"teams.schedule.schedulingGroups.GetCount-256b">)),
    TeamsScheduleListShifts: (...args) => callOperation("teams.schedule.ListShifts", ...(args as TeamsGraphOperationArgs<"teams.schedule.ListShifts">)),
    TeamsScheduleCreateShifts: (...args) => callOperation("teams.schedule.CreateShifts", ...(args as TeamsGraphOperationArgs<"teams.schedule.CreateShifts">)),
    TeamsScheduleGetShifts: (...args) => callOperation("teams.schedule.GetShifts", ...(args as TeamsGraphOperationArgs<"teams.schedule.GetShifts">)),
    TeamsScheduleUpdateShifts: (...args) => callOperation("teams.schedule.UpdateShifts", ...(args as TeamsGraphOperationArgs<"teams.schedule.UpdateShifts">)),
    TeamsScheduleDeleteShifts: (...args) => callOperation("teams.schedule.DeleteShifts", ...(args as TeamsGraphOperationArgs<"teams.schedule.DeleteShifts">)),
    TeamsScheduleShiftsGetCount97aa: (...args) => callOperation("teams.schedule.shifts.GetCount-97aa", ...(args as TeamsGraphOperationArgs<"teams.schedule.shifts.GetCount-97aa">)),
    TeamsScheduleListSwapShiftsChangeRequests: (...args) => callOperation("teams.schedule.ListSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.ListSwapShiftsChangeRequests">)),
    TeamsScheduleCreateSwapShiftsChangeRequests: (...args) => callOperation("teams.schedule.CreateSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.CreateSwapShiftsChangeRequests">)),
    TeamsScheduleGetSwapShiftsChangeRequests: (...args) => callOperation("teams.schedule.GetSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.GetSwapShiftsChangeRequests">)),
    TeamsScheduleUpdateSwapShiftsChangeRequests: (...args) => callOperation("teams.schedule.UpdateSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.UpdateSwapShiftsChangeRequests">)),
    TeamsScheduleDeleteSwapShiftsChangeRequests: (...args) => callOperation("teams.schedule.DeleteSwapShiftsChangeRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.DeleteSwapShiftsChangeRequests">)),
    TeamsScheduleSwapShiftsChangeRequestsGetCount9390: (...args) => callOperation("teams.schedule.swapShiftsChangeRequests.GetCount-9390", ...(args as TeamsGraphOperationArgs<"teams.schedule.swapShiftsChangeRequests.GetCount-9390">)),
    TeamsScheduleListTimeCards: (...args) => callOperation("teams.schedule.ListTimeCards", ...(args as TeamsGraphOperationArgs<"teams.schedule.ListTimeCards">)),
    TeamsScheduleCreateTimeCards: (...args) => callOperation("teams.schedule.CreateTimeCards", ...(args as TeamsGraphOperationArgs<"teams.schedule.CreateTimeCards">)),
    TeamsScheduleGetTimeCards: (...args) => callOperation("teams.schedule.GetTimeCards", ...(args as TeamsGraphOperationArgs<"teams.schedule.GetTimeCards">)),
    TeamsScheduleUpdateTimeCards: (...args) => callOperation("teams.schedule.UpdateTimeCards", ...(args as TeamsGraphOperationArgs<"teams.schedule.UpdateTimeCards">)),
    TeamsScheduleDeleteTimeCards: (...args) => callOperation("teams.schedule.DeleteTimeCards", ...(args as TeamsGraphOperationArgs<"teams.schedule.DeleteTimeCards">)),
    TeamsTeamScheduleTimeCardsTimeCardClockOut: (...args) => callOperation("teams.team.schedule.timeCards.timeCard.clockOut", ...(args as TeamsGraphOperationArgs<"teams.team.schedule.timeCards.timeCard.clockOut">)),
    TeamsTeamScheduleTimeCardsTimeCardConfirm: (...args) => callOperation("teams.team.schedule.timeCards.timeCard.confirm", ...(args as TeamsGraphOperationArgs<"teams.team.schedule.timeCards.timeCard.confirm">)),
    TeamsTeamScheduleTimeCardsTimeCardEndBreak: (...args) => callOperation("teams.team.schedule.timeCards.timeCard.endBreak", ...(args as TeamsGraphOperationArgs<"teams.team.schedule.timeCards.timeCard.endBreak">)),
    TeamsTeamScheduleTimeCardsTimeCardStartBreak: (...args) => callOperation("teams.team.schedule.timeCards.timeCard.startBreak", ...(args as TeamsGraphOperationArgs<"teams.team.schedule.timeCards.timeCard.startBreak">)),
    TeamsScheduleTimeCardsGetCount2ea4: (...args) => callOperation("teams.schedule.timeCards.GetCount-2ea4", ...(args as TeamsGraphOperationArgs<"teams.schedule.timeCards.GetCount-2ea4">)),
    TeamsTeamScheduleTimeCardsClockIn: (...args) => callOperation("teams.team.schedule.timeCards.clockIn", ...(args as TeamsGraphOperationArgs<"teams.team.schedule.timeCards.clockIn">)),
    TeamsScheduleListTimeOffReasons: (...args) => callOperation("teams.schedule.ListTimeOffReasons", ...(args as TeamsGraphOperationArgs<"teams.schedule.ListTimeOffReasons">)),
    TeamsScheduleCreateTimeOffReasons: (...args) => callOperation("teams.schedule.CreateTimeOffReasons", ...(args as TeamsGraphOperationArgs<"teams.schedule.CreateTimeOffReasons">)),
    TeamsScheduleGetTimeOffReasons: (...args) => callOperation("teams.schedule.GetTimeOffReasons", ...(args as TeamsGraphOperationArgs<"teams.schedule.GetTimeOffReasons">)),
    TeamsScheduleUpdateTimeOffReasons: (...args) => callOperation("teams.schedule.UpdateTimeOffReasons", ...(args as TeamsGraphOperationArgs<"teams.schedule.UpdateTimeOffReasons">)),
    TeamsScheduleDeleteTimeOffReasons: (...args) => callOperation("teams.schedule.DeleteTimeOffReasons", ...(args as TeamsGraphOperationArgs<"teams.schedule.DeleteTimeOffReasons">)),
    TeamsScheduleTimeOffReasonsGetCount4024: (...args) => callOperation("teams.schedule.timeOffReasons.GetCount-4024", ...(args as TeamsGraphOperationArgs<"teams.schedule.timeOffReasons.GetCount-4024">)),
    TeamsScheduleListTimeOffRequests: (...args) => callOperation("teams.schedule.ListTimeOffRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.ListTimeOffRequests">)),
    TeamsScheduleCreateTimeOffRequests: (...args) => callOperation("teams.schedule.CreateTimeOffRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.CreateTimeOffRequests">)),
    TeamsScheduleGetTimeOffRequests: (...args) => callOperation("teams.schedule.GetTimeOffRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.GetTimeOffRequests">)),
    TeamsScheduleUpdateTimeOffRequests: (...args) => callOperation("teams.schedule.UpdateTimeOffRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.UpdateTimeOffRequests">)),
    TeamsScheduleDeleteTimeOffRequests: (...args) => callOperation("teams.schedule.DeleteTimeOffRequests", ...(args as TeamsGraphOperationArgs<"teams.schedule.DeleteTimeOffRequests">)),
    TeamsScheduleTimeOffRequestsGetCount9411: (...args) => callOperation("teams.schedule.timeOffRequests.GetCount-9411", ...(args as TeamsGraphOperationArgs<"teams.schedule.timeOffRequests.GetCount-9411">)),
    TeamsScheduleListTimesOff: (...args) => callOperation("teams.schedule.ListTimesOff", ...(args as TeamsGraphOperationArgs<"teams.schedule.ListTimesOff">)),
    TeamsScheduleCreateTimesOff: (...args) => callOperation("teams.schedule.CreateTimesOff", ...(args as TeamsGraphOperationArgs<"teams.schedule.CreateTimesOff">)),
    TeamsScheduleGetTimesOff: (...args) => callOperation("teams.schedule.GetTimesOff", ...(args as TeamsGraphOperationArgs<"teams.schedule.GetTimesOff">)),
    TeamsScheduleUpdateTimesOff: (...args) => callOperation("teams.schedule.UpdateTimesOff", ...(args as TeamsGraphOperationArgs<"teams.schedule.UpdateTimesOff">)),
    TeamsScheduleDeleteTimesOff: (...args) => callOperation("teams.schedule.DeleteTimesOff", ...(args as TeamsGraphOperationArgs<"teams.schedule.DeleteTimesOff">)),
    TeamsScheduleTimesOffGetCount16b4: (...args) => callOperation("teams.schedule.timesOff.GetCount-16b4", ...(args as TeamsGraphOperationArgs<"teams.schedule.timesOff.GetCount-16b4">)),
  };
}
