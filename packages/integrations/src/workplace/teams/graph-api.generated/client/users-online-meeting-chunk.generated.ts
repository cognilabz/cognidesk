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
export const TeamsGraphUsersOnlineMeetingOperationKeys = [
  "users.ListOnlineMeetings",
  "users.CreateOnlineMeetings",
  "users.GetOnlineMeetings",
  "users.UpdateOnlineMeetings",
  "users.DeleteOnlineMeetings",
  "users.onlineMeetings.ListAttendanceReports",
  "users.onlineMeetings.CreateAttendanceReports",
  "users.onlineMeetings.GetAttendanceReports",
  "users.onlineMeetings.UpdateAttendanceReports",
  "users.onlineMeetings.DeleteAttendanceReports",
  "users.onlineMeetings.attendanceReports.ListAttendanceRecords",
  "users.onlineMeetings.attendanceReports.CreateAttendanceRecords",
  "users.onlineMeetings.attendanceReports.GetAttendanceRecords",
  "users.onlineMeetings.attendanceReports.UpdateAttendanceRecords",
  "users.onlineMeetings.attendanceReports.DeleteAttendanceRecords",
  "users.onlineMeetings.attendanceReports.attendanceRecords.GetCount-3340",
  "users.onlineMeetings.attendanceReports.GetCount-e849",
  "users.GetOnlineMeetingsAttendeeReport",
  "users.UpdateOnlineMeetingsAttendeeReport",
  "users.DeleteOnlineMeetingsAttendeeReport",
  "users.user.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl",
  "users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms",
  "users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms",
  "users.onlineMeetings.ListRecordings",
  "users.onlineMeetings.CreateRecordings",
  "users.onlineMeetings.GetRecordings",
  "users.onlineMeetings.UpdateRecordings",
  "users.onlineMeetings.DeleteRecordings",
  "users.onlineMeetings.GetRecordingsContent",
  "users.onlineMeetings.UpdateRecordingsContent",
  "users.onlineMeetings.DeleteRecordingsContent",
  "users.onlineMeetings.recordings.GetCount-6c9a",
  "users.user.onlineMeetings.onlineMeeting.recordings.delta",
  "users.onlineMeetings.ListTranscripts",
  "users.onlineMeetings.CreateTranscripts",
  "users.onlineMeetings.GetTranscripts",
  "users.onlineMeetings.UpdateTranscripts",
  "users.onlineMeetings.DeleteTranscripts",
  "users.onlineMeetings.GetTranscriptsContent",
  "users.onlineMeetings.UpdateTranscriptsContent",
  "users.onlineMeetings.DeleteTranscriptsContent",
  "users.onlineMeetings.GetTranscriptsMetadataContent",
  "users.onlineMeetings.UpdateTranscriptsMetadataContent",
  "users.onlineMeetings.DeleteTranscriptsMetadataContent",
  "users.onlineMeetings.transcripts.GetCount-3b6f",
  "users.user.onlineMeetings.onlineMeeting.transcripts.delta",
  "users.onlineMeetings.GetCount-1fc7",
  "users.user.onlineMeetings.createOrGet",
  "users.user.onlineMeetings.getAllRecordings",
  "users.user.onlineMeetings.getAllTranscripts"
] as const;
export type TeamsGraphUsersOnlineMeetingOperationKey = typeof TeamsGraphUsersOnlineMeetingOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphUsersOnlineMeetingOperationPathParamMap {
  "users.ListOnlineMeetings": { "user-id": TeamsGraphPathParamValue };
  "users.CreateOnlineMeetings": { "user-id": TeamsGraphPathParamValue };
  "users.GetOnlineMeetings": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.UpdateOnlineMeetings": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.DeleteOnlineMeetings": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.ListAttendanceReports": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.CreateAttendanceReports": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.GetAttendanceReports": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.UpdateAttendanceReports": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.DeleteAttendanceReports": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.attendanceReports.ListAttendanceRecords": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.attendanceReports.CreateAttendanceRecords": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.attendanceReports.GetAttendanceRecords": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue; "attendanceRecord-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.attendanceReports.UpdateAttendanceRecords": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue; "attendanceRecord-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.attendanceReports.DeleteAttendanceRecords": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue; "attendanceRecord-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.attendanceReports.attendanceRecords.GetCount-3340": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.attendanceReports.GetCount-e849": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.GetOnlineMeetingsAttendeeReport": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.UpdateOnlineMeetingsAttendeeReport": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.DeleteOnlineMeetingsAttendeeReport": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.user.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.ListRecordings": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.CreateRecordings": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.GetRecordings": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.UpdateRecordings": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.DeleteRecordings": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.GetRecordingsContent": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.UpdateRecordingsContent": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.DeleteRecordingsContent": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.recordings.GetCount-6c9a": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.user.onlineMeetings.onlineMeeting.recordings.delta": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.ListTranscripts": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.CreateTranscripts": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.GetTranscripts": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.UpdateTranscripts": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.DeleteTranscripts": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.GetTranscriptsContent": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.UpdateTranscriptsContent": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.DeleteTranscriptsContent": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.GetTranscriptsMetadataContent": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.UpdateTranscriptsMetadataContent": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.DeleteTranscriptsMetadataContent": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.transcripts.GetCount-3b6f": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.user.onlineMeetings.onlineMeeting.transcripts.delta": { "user-id": TeamsGraphPathParamValue; "onlineMeeting-id": TeamsGraphPathParamValue };
  "users.onlineMeetings.GetCount-1fc7": { "user-id": TeamsGraphPathParamValue };
  "users.user.onlineMeetings.createOrGet": { "user-id": TeamsGraphPathParamValue };
  "users.user.onlineMeetings.getAllRecordings": { "user-id": TeamsGraphPathParamValue };
  "users.user.onlineMeetings.getAllTranscripts": { "user-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphUsersOnlineMeetingOperationRequestMap {
  "users.ListOnlineMeetings": TeamsGraphOperationInput<"users.ListOnlineMeetings">;
  "users.CreateOnlineMeetings": TeamsGraphOperationInput<"users.CreateOnlineMeetings">;
  "users.GetOnlineMeetings": TeamsGraphOperationInput<"users.GetOnlineMeetings">;
  "users.UpdateOnlineMeetings": TeamsGraphOperationInput<"users.UpdateOnlineMeetings">;
  "users.DeleteOnlineMeetings": TeamsGraphOperationInput<"users.DeleteOnlineMeetings">;
  "users.onlineMeetings.ListAttendanceReports": TeamsGraphOperationInput<"users.onlineMeetings.ListAttendanceReports">;
  "users.onlineMeetings.CreateAttendanceReports": TeamsGraphOperationInput<"users.onlineMeetings.CreateAttendanceReports">;
  "users.onlineMeetings.GetAttendanceReports": TeamsGraphOperationInput<"users.onlineMeetings.GetAttendanceReports">;
  "users.onlineMeetings.UpdateAttendanceReports": TeamsGraphOperationInput<"users.onlineMeetings.UpdateAttendanceReports">;
  "users.onlineMeetings.DeleteAttendanceReports": TeamsGraphOperationInput<"users.onlineMeetings.DeleteAttendanceReports">;
  "users.onlineMeetings.attendanceReports.ListAttendanceRecords": TeamsGraphOperationInput<"users.onlineMeetings.attendanceReports.ListAttendanceRecords">;
  "users.onlineMeetings.attendanceReports.CreateAttendanceRecords": TeamsGraphOperationInput<"users.onlineMeetings.attendanceReports.CreateAttendanceRecords">;
  "users.onlineMeetings.attendanceReports.GetAttendanceRecords": TeamsGraphOperationInput<"users.onlineMeetings.attendanceReports.GetAttendanceRecords">;
  "users.onlineMeetings.attendanceReports.UpdateAttendanceRecords": TeamsGraphOperationInput<"users.onlineMeetings.attendanceReports.UpdateAttendanceRecords">;
  "users.onlineMeetings.attendanceReports.DeleteAttendanceRecords": TeamsGraphOperationInput<"users.onlineMeetings.attendanceReports.DeleteAttendanceRecords">;
  "users.onlineMeetings.attendanceReports.attendanceRecords.GetCount-3340": TeamsGraphOperationInput<"users.onlineMeetings.attendanceReports.attendanceRecords.GetCount-3340">;
  "users.onlineMeetings.attendanceReports.GetCount-e849": TeamsGraphOperationInput<"users.onlineMeetings.attendanceReports.GetCount-e849">;
  "users.GetOnlineMeetingsAttendeeReport": TeamsGraphOperationInput<"users.GetOnlineMeetingsAttendeeReport">;
  "users.UpdateOnlineMeetingsAttendeeReport": TeamsGraphOperationInput<"users.UpdateOnlineMeetingsAttendeeReport">;
  "users.DeleteOnlineMeetingsAttendeeReport": TeamsGraphOperationInput<"users.DeleteOnlineMeetingsAttendeeReport">;
  "users.user.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl": TeamsGraphOperationInput<"users.user.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl">;
  "users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms": TeamsGraphOperationInput<"users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms">;
  "users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms": TeamsGraphOperationInput<"users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms">;
  "users.onlineMeetings.ListRecordings": TeamsGraphOperationInput<"users.onlineMeetings.ListRecordings">;
  "users.onlineMeetings.CreateRecordings": TeamsGraphOperationInput<"users.onlineMeetings.CreateRecordings">;
  "users.onlineMeetings.GetRecordings": TeamsGraphOperationInput<"users.onlineMeetings.GetRecordings">;
  "users.onlineMeetings.UpdateRecordings": TeamsGraphOperationInput<"users.onlineMeetings.UpdateRecordings">;
  "users.onlineMeetings.DeleteRecordings": TeamsGraphOperationInput<"users.onlineMeetings.DeleteRecordings">;
  "users.onlineMeetings.GetRecordingsContent": TeamsGraphOperationInput<"users.onlineMeetings.GetRecordingsContent">;
  "users.onlineMeetings.UpdateRecordingsContent": TeamsGraphOperationInput<"users.onlineMeetings.UpdateRecordingsContent">;
  "users.onlineMeetings.DeleteRecordingsContent": TeamsGraphOperationInput<"users.onlineMeetings.DeleteRecordingsContent">;
  "users.onlineMeetings.recordings.GetCount-6c9a": TeamsGraphOperationInput<"users.onlineMeetings.recordings.GetCount-6c9a">;
  "users.user.onlineMeetings.onlineMeeting.recordings.delta": TeamsGraphOperationInput<"users.user.onlineMeetings.onlineMeeting.recordings.delta">;
  "users.onlineMeetings.ListTranscripts": TeamsGraphOperationInput<"users.onlineMeetings.ListTranscripts">;
  "users.onlineMeetings.CreateTranscripts": TeamsGraphOperationInput<"users.onlineMeetings.CreateTranscripts">;
  "users.onlineMeetings.GetTranscripts": TeamsGraphOperationInput<"users.onlineMeetings.GetTranscripts">;
  "users.onlineMeetings.UpdateTranscripts": TeamsGraphOperationInput<"users.onlineMeetings.UpdateTranscripts">;
  "users.onlineMeetings.DeleteTranscripts": TeamsGraphOperationInput<"users.onlineMeetings.DeleteTranscripts">;
  "users.onlineMeetings.GetTranscriptsContent": TeamsGraphOperationInput<"users.onlineMeetings.GetTranscriptsContent">;
  "users.onlineMeetings.UpdateTranscriptsContent": TeamsGraphOperationInput<"users.onlineMeetings.UpdateTranscriptsContent">;
  "users.onlineMeetings.DeleteTranscriptsContent": TeamsGraphOperationInput<"users.onlineMeetings.DeleteTranscriptsContent">;
  "users.onlineMeetings.GetTranscriptsMetadataContent": TeamsGraphOperationInput<"users.onlineMeetings.GetTranscriptsMetadataContent">;
  "users.onlineMeetings.UpdateTranscriptsMetadataContent": TeamsGraphOperationInput<"users.onlineMeetings.UpdateTranscriptsMetadataContent">;
  "users.onlineMeetings.DeleteTranscriptsMetadataContent": TeamsGraphOperationInput<"users.onlineMeetings.DeleteTranscriptsMetadataContent">;
  "users.onlineMeetings.transcripts.GetCount-3b6f": TeamsGraphOperationInput<"users.onlineMeetings.transcripts.GetCount-3b6f">;
  "users.user.onlineMeetings.onlineMeeting.transcripts.delta": TeamsGraphOperationInput<"users.user.onlineMeetings.onlineMeeting.transcripts.delta">;
  "users.onlineMeetings.GetCount-1fc7": TeamsGraphOperationInput<"users.onlineMeetings.GetCount-1fc7">;
  "users.user.onlineMeetings.createOrGet": TeamsGraphOperationInput<"users.user.onlineMeetings.createOrGet">;
  "users.user.onlineMeetings.getAllRecordings": TeamsGraphOperationInput<"users.user.onlineMeetings.getAllRecordings">;
  "users.user.onlineMeetings.getAllTranscripts": TeamsGraphOperationInput<"users.user.onlineMeetings.getAllTranscripts">;
}

export interface TeamsGraphUsersOnlineMeetingGeneratedClient {
  UsersListOnlineMeetings(...args: TeamsGraphOperationArgs<"users.ListOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["users.ListOnlineMeetings"]>;
  UsersCreateOnlineMeetings(...args: TeamsGraphOperationArgs<"users.CreateOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["users.CreateOnlineMeetings"]>;
  UsersGetOnlineMeetings(...args: TeamsGraphOperationArgs<"users.GetOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["users.GetOnlineMeetings"]>;
  UsersUpdateOnlineMeetings(...args: TeamsGraphOperationArgs<"users.UpdateOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["users.UpdateOnlineMeetings"]>;
  UsersDeleteOnlineMeetings(...args: TeamsGraphOperationArgs<"users.DeleteOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["users.DeleteOnlineMeetings"]>;
  UsersOnlineMeetingsListAttendanceReports(...args: TeamsGraphOperationArgs<"users.onlineMeetings.ListAttendanceReports">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.ListAttendanceReports"]>;
  UsersOnlineMeetingsCreateAttendanceReports(...args: TeamsGraphOperationArgs<"users.onlineMeetings.CreateAttendanceReports">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.CreateAttendanceReports"]>;
  UsersOnlineMeetingsGetAttendanceReports(...args: TeamsGraphOperationArgs<"users.onlineMeetings.GetAttendanceReports">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.GetAttendanceReports"]>;
  UsersOnlineMeetingsUpdateAttendanceReports(...args: TeamsGraphOperationArgs<"users.onlineMeetings.UpdateAttendanceReports">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.UpdateAttendanceReports"]>;
  UsersOnlineMeetingsDeleteAttendanceReports(...args: TeamsGraphOperationArgs<"users.onlineMeetings.DeleteAttendanceReports">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.DeleteAttendanceReports"]>;
  UsersOnlineMeetingsAttendanceReportsListAttendanceRecords(...args: TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.ListAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.attendanceReports.ListAttendanceRecords"]>;
  UsersOnlineMeetingsAttendanceReportsCreateAttendanceRecords(...args: TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.CreateAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.attendanceReports.CreateAttendanceRecords"]>;
  UsersOnlineMeetingsAttendanceReportsGetAttendanceRecords(...args: TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.GetAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.attendanceReports.GetAttendanceRecords"]>;
  UsersOnlineMeetingsAttendanceReportsUpdateAttendanceRecords(...args: TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.UpdateAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.attendanceReports.UpdateAttendanceRecords"]>;
  UsersOnlineMeetingsAttendanceReportsDeleteAttendanceRecords(...args: TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.DeleteAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.attendanceReports.DeleteAttendanceRecords"]>;
  UsersOnlineMeetingsAttendanceReportsAttendanceRecordsGetCount3340(...args: TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.attendanceRecords.GetCount-3340">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.attendanceReports.attendanceRecords.GetCount-3340"]>;
  UsersOnlineMeetingsAttendanceReportsGetCountE849(...args: TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.GetCount-e849">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.attendanceReports.GetCount-e849"]>;
  UsersGetOnlineMeetingsAttendeeReport(...args: TeamsGraphOperationArgs<"users.GetOnlineMeetingsAttendeeReport">): Promise<TeamsGraphOperationResponseMap["users.GetOnlineMeetingsAttendeeReport"]>;
  UsersUpdateOnlineMeetingsAttendeeReport(...args: TeamsGraphOperationArgs<"users.UpdateOnlineMeetingsAttendeeReport">): Promise<TeamsGraphOperationResponseMap["users.UpdateOnlineMeetingsAttendeeReport"]>;
  UsersDeleteOnlineMeetingsAttendeeReport(...args: TeamsGraphOperationArgs<"users.DeleteOnlineMeetingsAttendeeReport">): Promise<TeamsGraphOperationResponseMap["users.DeleteOnlineMeetingsAttendeeReport"]>;
  UsersUserOnlineMeetingsOnlineMeetingGetVirtualAppointmentJoinWebUrl(...args: TeamsGraphOperationArgs<"users.user.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl">): Promise<TeamsGraphOperationResponseMap["users.user.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl"]>;
  UsersUserOnlineMeetingsOnlineMeetingSendVirtualAppointmentReminderSms(...args: TeamsGraphOperationArgs<"users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms">): Promise<TeamsGraphOperationResponseMap["users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms"]>;
  UsersUserOnlineMeetingsOnlineMeetingSendVirtualAppointmentSms(...args: TeamsGraphOperationArgs<"users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms">): Promise<TeamsGraphOperationResponseMap["users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms"]>;
  UsersOnlineMeetingsListRecordings(...args: TeamsGraphOperationArgs<"users.onlineMeetings.ListRecordings">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.ListRecordings"]>;
  UsersOnlineMeetingsCreateRecordings(...args: TeamsGraphOperationArgs<"users.onlineMeetings.CreateRecordings">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.CreateRecordings"]>;
  UsersOnlineMeetingsGetRecordings(...args: TeamsGraphOperationArgs<"users.onlineMeetings.GetRecordings">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.GetRecordings"]>;
  UsersOnlineMeetingsUpdateRecordings(...args: TeamsGraphOperationArgs<"users.onlineMeetings.UpdateRecordings">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.UpdateRecordings"]>;
  UsersOnlineMeetingsDeleteRecordings(...args: TeamsGraphOperationArgs<"users.onlineMeetings.DeleteRecordings">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.DeleteRecordings"]>;
  UsersOnlineMeetingsGetRecordingsContent(...args: TeamsGraphOperationArgs<"users.onlineMeetings.GetRecordingsContent">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.GetRecordingsContent"]>;
  UsersOnlineMeetingsUpdateRecordingsContent(...args: TeamsGraphOperationArgs<"users.onlineMeetings.UpdateRecordingsContent">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.UpdateRecordingsContent"]>;
  UsersOnlineMeetingsDeleteRecordingsContent(...args: TeamsGraphOperationArgs<"users.onlineMeetings.DeleteRecordingsContent">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.DeleteRecordingsContent"]>;
  UsersOnlineMeetingsRecordingsGetCount6c9a(...args: TeamsGraphOperationArgs<"users.onlineMeetings.recordings.GetCount-6c9a">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.recordings.GetCount-6c9a"]>;
  UsersUserOnlineMeetingsOnlineMeetingRecordingsDelta(...args: TeamsGraphOperationArgs<"users.user.onlineMeetings.onlineMeeting.recordings.delta">): Promise<TeamsGraphOperationResponseMap["users.user.onlineMeetings.onlineMeeting.recordings.delta"]>;
  UsersOnlineMeetingsListTranscripts(...args: TeamsGraphOperationArgs<"users.onlineMeetings.ListTranscripts">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.ListTranscripts"]>;
  UsersOnlineMeetingsCreateTranscripts(...args: TeamsGraphOperationArgs<"users.onlineMeetings.CreateTranscripts">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.CreateTranscripts"]>;
  UsersOnlineMeetingsGetTranscripts(...args: TeamsGraphOperationArgs<"users.onlineMeetings.GetTranscripts">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.GetTranscripts"]>;
  UsersOnlineMeetingsUpdateTranscripts(...args: TeamsGraphOperationArgs<"users.onlineMeetings.UpdateTranscripts">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.UpdateTranscripts"]>;
  UsersOnlineMeetingsDeleteTranscripts(...args: TeamsGraphOperationArgs<"users.onlineMeetings.DeleteTranscripts">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.DeleteTranscripts"]>;
  UsersOnlineMeetingsGetTranscriptsContent(...args: TeamsGraphOperationArgs<"users.onlineMeetings.GetTranscriptsContent">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.GetTranscriptsContent"]>;
  UsersOnlineMeetingsUpdateTranscriptsContent(...args: TeamsGraphOperationArgs<"users.onlineMeetings.UpdateTranscriptsContent">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.UpdateTranscriptsContent"]>;
  UsersOnlineMeetingsDeleteTranscriptsContent(...args: TeamsGraphOperationArgs<"users.onlineMeetings.DeleteTranscriptsContent">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.DeleteTranscriptsContent"]>;
  UsersOnlineMeetingsGetTranscriptsMetadataContent(...args: TeamsGraphOperationArgs<"users.onlineMeetings.GetTranscriptsMetadataContent">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.GetTranscriptsMetadataContent"]>;
  UsersOnlineMeetingsUpdateTranscriptsMetadataContent(...args: TeamsGraphOperationArgs<"users.onlineMeetings.UpdateTranscriptsMetadataContent">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.UpdateTranscriptsMetadataContent"]>;
  UsersOnlineMeetingsDeleteTranscriptsMetadataContent(...args: TeamsGraphOperationArgs<"users.onlineMeetings.DeleteTranscriptsMetadataContent">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.DeleteTranscriptsMetadataContent"]>;
  UsersOnlineMeetingsTranscriptsGetCount3b6f(...args: TeamsGraphOperationArgs<"users.onlineMeetings.transcripts.GetCount-3b6f">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.transcripts.GetCount-3b6f"]>;
  UsersUserOnlineMeetingsOnlineMeetingTranscriptsDelta(...args: TeamsGraphOperationArgs<"users.user.onlineMeetings.onlineMeeting.transcripts.delta">): Promise<TeamsGraphOperationResponseMap["users.user.onlineMeetings.onlineMeeting.transcripts.delta"]>;
  UsersOnlineMeetingsGetCount1fc7(...args: TeamsGraphOperationArgs<"users.onlineMeetings.GetCount-1fc7">): Promise<TeamsGraphOperationResponseMap["users.onlineMeetings.GetCount-1fc7"]>;
  UsersUserOnlineMeetingsCreateOrGet(...args: TeamsGraphOperationArgs<"users.user.onlineMeetings.createOrGet">): Promise<TeamsGraphOperationResponseMap["users.user.onlineMeetings.createOrGet"]>;
  UsersUserOnlineMeetingsGetAllRecordings(...args: TeamsGraphOperationArgs<"users.user.onlineMeetings.getAllRecordings">): Promise<TeamsGraphOperationResponseMap["users.user.onlineMeetings.getAllRecordings"]>;
  UsersUserOnlineMeetingsGetAllTranscripts(...args: TeamsGraphOperationArgs<"users.user.onlineMeetings.getAllTranscripts">): Promise<TeamsGraphOperationResponseMap["users.user.onlineMeetings.getAllTranscripts"]>;
}

export const TeamsGraphUsersOnlineMeetingGeneratedFunctionNames = [
  "UsersListOnlineMeetings",
  "UsersCreateOnlineMeetings",
  "UsersGetOnlineMeetings",
  "UsersUpdateOnlineMeetings",
  "UsersDeleteOnlineMeetings",
  "UsersOnlineMeetingsListAttendanceReports",
  "UsersOnlineMeetingsCreateAttendanceReports",
  "UsersOnlineMeetingsGetAttendanceReports",
  "UsersOnlineMeetingsUpdateAttendanceReports",
  "UsersOnlineMeetingsDeleteAttendanceReports",
  "UsersOnlineMeetingsAttendanceReportsListAttendanceRecords",
  "UsersOnlineMeetingsAttendanceReportsCreateAttendanceRecords",
  "UsersOnlineMeetingsAttendanceReportsGetAttendanceRecords",
  "UsersOnlineMeetingsAttendanceReportsUpdateAttendanceRecords",
  "UsersOnlineMeetingsAttendanceReportsDeleteAttendanceRecords",
  "UsersOnlineMeetingsAttendanceReportsAttendanceRecordsGetCount3340",
  "UsersOnlineMeetingsAttendanceReportsGetCountE849",
  "UsersGetOnlineMeetingsAttendeeReport",
  "UsersUpdateOnlineMeetingsAttendeeReport",
  "UsersDeleteOnlineMeetingsAttendeeReport",
  "UsersUserOnlineMeetingsOnlineMeetingGetVirtualAppointmentJoinWebUrl",
  "UsersUserOnlineMeetingsOnlineMeetingSendVirtualAppointmentReminderSms",
  "UsersUserOnlineMeetingsOnlineMeetingSendVirtualAppointmentSms",
  "UsersOnlineMeetingsListRecordings",
  "UsersOnlineMeetingsCreateRecordings",
  "UsersOnlineMeetingsGetRecordings",
  "UsersOnlineMeetingsUpdateRecordings",
  "UsersOnlineMeetingsDeleteRecordings",
  "UsersOnlineMeetingsGetRecordingsContent",
  "UsersOnlineMeetingsUpdateRecordingsContent",
  "UsersOnlineMeetingsDeleteRecordingsContent",
  "UsersOnlineMeetingsRecordingsGetCount6c9a",
  "UsersUserOnlineMeetingsOnlineMeetingRecordingsDelta",
  "UsersOnlineMeetingsListTranscripts",
  "UsersOnlineMeetingsCreateTranscripts",
  "UsersOnlineMeetingsGetTranscripts",
  "UsersOnlineMeetingsUpdateTranscripts",
  "UsersOnlineMeetingsDeleteTranscripts",
  "UsersOnlineMeetingsGetTranscriptsContent",
  "UsersOnlineMeetingsUpdateTranscriptsContent",
  "UsersOnlineMeetingsDeleteTranscriptsContent",
  "UsersOnlineMeetingsGetTranscriptsMetadataContent",
  "UsersOnlineMeetingsUpdateTranscriptsMetadataContent",
  "UsersOnlineMeetingsDeleteTranscriptsMetadataContent",
  "UsersOnlineMeetingsTranscriptsGetCount3b6f",
  "UsersUserOnlineMeetingsOnlineMeetingTranscriptsDelta",
  "UsersOnlineMeetingsGetCount1fc7",
  "UsersUserOnlineMeetingsCreateOrGet",
  "UsersUserOnlineMeetingsGetAllRecordings",
  "UsersUserOnlineMeetingsGetAllTranscripts"
] as const satisfies readonly (keyof TeamsGraphUsersOnlineMeetingGeneratedClient)[];

export function createTeamsGraphUsersOnlineMeetingGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphUsersOnlineMeetingGeneratedClient {
  return {
    UsersListOnlineMeetings: (...args) => callOperation("users.ListOnlineMeetings", ...(args as TeamsGraphOperationArgs<"users.ListOnlineMeetings">)),
    UsersCreateOnlineMeetings: (...args) => callOperation("users.CreateOnlineMeetings", ...(args as TeamsGraphOperationArgs<"users.CreateOnlineMeetings">)),
    UsersGetOnlineMeetings: (...args) => callOperation("users.GetOnlineMeetings", ...(args as TeamsGraphOperationArgs<"users.GetOnlineMeetings">)),
    UsersUpdateOnlineMeetings: (...args) => callOperation("users.UpdateOnlineMeetings", ...(args as TeamsGraphOperationArgs<"users.UpdateOnlineMeetings">)),
    UsersDeleteOnlineMeetings: (...args) => callOperation("users.DeleteOnlineMeetings", ...(args as TeamsGraphOperationArgs<"users.DeleteOnlineMeetings">)),
    UsersOnlineMeetingsListAttendanceReports: (...args) => callOperation("users.onlineMeetings.ListAttendanceReports", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.ListAttendanceReports">)),
    UsersOnlineMeetingsCreateAttendanceReports: (...args) => callOperation("users.onlineMeetings.CreateAttendanceReports", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.CreateAttendanceReports">)),
    UsersOnlineMeetingsGetAttendanceReports: (...args) => callOperation("users.onlineMeetings.GetAttendanceReports", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.GetAttendanceReports">)),
    UsersOnlineMeetingsUpdateAttendanceReports: (...args) => callOperation("users.onlineMeetings.UpdateAttendanceReports", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.UpdateAttendanceReports">)),
    UsersOnlineMeetingsDeleteAttendanceReports: (...args) => callOperation("users.onlineMeetings.DeleteAttendanceReports", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.DeleteAttendanceReports">)),
    UsersOnlineMeetingsAttendanceReportsListAttendanceRecords: (...args) => callOperation("users.onlineMeetings.attendanceReports.ListAttendanceRecords", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.ListAttendanceRecords">)),
    UsersOnlineMeetingsAttendanceReportsCreateAttendanceRecords: (...args) => callOperation("users.onlineMeetings.attendanceReports.CreateAttendanceRecords", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.CreateAttendanceRecords">)),
    UsersOnlineMeetingsAttendanceReportsGetAttendanceRecords: (...args) => callOperation("users.onlineMeetings.attendanceReports.GetAttendanceRecords", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.GetAttendanceRecords">)),
    UsersOnlineMeetingsAttendanceReportsUpdateAttendanceRecords: (...args) => callOperation("users.onlineMeetings.attendanceReports.UpdateAttendanceRecords", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.UpdateAttendanceRecords">)),
    UsersOnlineMeetingsAttendanceReportsDeleteAttendanceRecords: (...args) => callOperation("users.onlineMeetings.attendanceReports.DeleteAttendanceRecords", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.DeleteAttendanceRecords">)),
    UsersOnlineMeetingsAttendanceReportsAttendanceRecordsGetCount3340: (...args) => callOperation("users.onlineMeetings.attendanceReports.attendanceRecords.GetCount-3340", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.attendanceRecords.GetCount-3340">)),
    UsersOnlineMeetingsAttendanceReportsGetCountE849: (...args) => callOperation("users.onlineMeetings.attendanceReports.GetCount-e849", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.attendanceReports.GetCount-e849">)),
    UsersGetOnlineMeetingsAttendeeReport: (...args) => callOperation("users.GetOnlineMeetingsAttendeeReport", ...(args as TeamsGraphOperationArgs<"users.GetOnlineMeetingsAttendeeReport">)),
    UsersUpdateOnlineMeetingsAttendeeReport: (...args) => callOperation("users.UpdateOnlineMeetingsAttendeeReport", ...(args as TeamsGraphOperationArgs<"users.UpdateOnlineMeetingsAttendeeReport">)),
    UsersDeleteOnlineMeetingsAttendeeReport: (...args) => callOperation("users.DeleteOnlineMeetingsAttendeeReport", ...(args as TeamsGraphOperationArgs<"users.DeleteOnlineMeetingsAttendeeReport">)),
    UsersUserOnlineMeetingsOnlineMeetingGetVirtualAppointmentJoinWebUrl: (...args) => callOperation("users.user.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl", ...(args as TeamsGraphOperationArgs<"users.user.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl">)),
    UsersUserOnlineMeetingsOnlineMeetingSendVirtualAppointmentReminderSms: (...args) => callOperation("users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms", ...(args as TeamsGraphOperationArgs<"users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms">)),
    UsersUserOnlineMeetingsOnlineMeetingSendVirtualAppointmentSms: (...args) => callOperation("users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms", ...(args as TeamsGraphOperationArgs<"users.user.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms">)),
    UsersOnlineMeetingsListRecordings: (...args) => callOperation("users.onlineMeetings.ListRecordings", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.ListRecordings">)),
    UsersOnlineMeetingsCreateRecordings: (...args) => callOperation("users.onlineMeetings.CreateRecordings", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.CreateRecordings">)),
    UsersOnlineMeetingsGetRecordings: (...args) => callOperation("users.onlineMeetings.GetRecordings", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.GetRecordings">)),
    UsersOnlineMeetingsUpdateRecordings: (...args) => callOperation("users.onlineMeetings.UpdateRecordings", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.UpdateRecordings">)),
    UsersOnlineMeetingsDeleteRecordings: (...args) => callOperation("users.onlineMeetings.DeleteRecordings", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.DeleteRecordings">)),
    UsersOnlineMeetingsGetRecordingsContent: (...args) => callOperation("users.onlineMeetings.GetRecordingsContent", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.GetRecordingsContent">)),
    UsersOnlineMeetingsUpdateRecordingsContent: (...args) => callOperation("users.onlineMeetings.UpdateRecordingsContent", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.UpdateRecordingsContent">)),
    UsersOnlineMeetingsDeleteRecordingsContent: (...args) => callOperation("users.onlineMeetings.DeleteRecordingsContent", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.DeleteRecordingsContent">)),
    UsersOnlineMeetingsRecordingsGetCount6c9a: (...args) => callOperation("users.onlineMeetings.recordings.GetCount-6c9a", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.recordings.GetCount-6c9a">)),
    UsersUserOnlineMeetingsOnlineMeetingRecordingsDelta: (...args) => callOperation("users.user.onlineMeetings.onlineMeeting.recordings.delta", ...(args as TeamsGraphOperationArgs<"users.user.onlineMeetings.onlineMeeting.recordings.delta">)),
    UsersOnlineMeetingsListTranscripts: (...args) => callOperation("users.onlineMeetings.ListTranscripts", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.ListTranscripts">)),
    UsersOnlineMeetingsCreateTranscripts: (...args) => callOperation("users.onlineMeetings.CreateTranscripts", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.CreateTranscripts">)),
    UsersOnlineMeetingsGetTranscripts: (...args) => callOperation("users.onlineMeetings.GetTranscripts", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.GetTranscripts">)),
    UsersOnlineMeetingsUpdateTranscripts: (...args) => callOperation("users.onlineMeetings.UpdateTranscripts", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.UpdateTranscripts">)),
    UsersOnlineMeetingsDeleteTranscripts: (...args) => callOperation("users.onlineMeetings.DeleteTranscripts", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.DeleteTranscripts">)),
    UsersOnlineMeetingsGetTranscriptsContent: (...args) => callOperation("users.onlineMeetings.GetTranscriptsContent", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.GetTranscriptsContent">)),
    UsersOnlineMeetingsUpdateTranscriptsContent: (...args) => callOperation("users.onlineMeetings.UpdateTranscriptsContent", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.UpdateTranscriptsContent">)),
    UsersOnlineMeetingsDeleteTranscriptsContent: (...args) => callOperation("users.onlineMeetings.DeleteTranscriptsContent", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.DeleteTranscriptsContent">)),
    UsersOnlineMeetingsGetTranscriptsMetadataContent: (...args) => callOperation("users.onlineMeetings.GetTranscriptsMetadataContent", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.GetTranscriptsMetadataContent">)),
    UsersOnlineMeetingsUpdateTranscriptsMetadataContent: (...args) => callOperation("users.onlineMeetings.UpdateTranscriptsMetadataContent", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.UpdateTranscriptsMetadataContent">)),
    UsersOnlineMeetingsDeleteTranscriptsMetadataContent: (...args) => callOperation("users.onlineMeetings.DeleteTranscriptsMetadataContent", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.DeleteTranscriptsMetadataContent">)),
    UsersOnlineMeetingsTranscriptsGetCount3b6f: (...args) => callOperation("users.onlineMeetings.transcripts.GetCount-3b6f", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.transcripts.GetCount-3b6f">)),
    UsersUserOnlineMeetingsOnlineMeetingTranscriptsDelta: (...args) => callOperation("users.user.onlineMeetings.onlineMeeting.transcripts.delta", ...(args as TeamsGraphOperationArgs<"users.user.onlineMeetings.onlineMeeting.transcripts.delta">)),
    UsersOnlineMeetingsGetCount1fc7: (...args) => callOperation("users.onlineMeetings.GetCount-1fc7", ...(args as TeamsGraphOperationArgs<"users.onlineMeetings.GetCount-1fc7">)),
    UsersUserOnlineMeetingsCreateOrGet: (...args) => callOperation("users.user.onlineMeetings.createOrGet", ...(args as TeamsGraphOperationArgs<"users.user.onlineMeetings.createOrGet">)),
    UsersUserOnlineMeetingsGetAllRecordings: (...args) => callOperation("users.user.onlineMeetings.getAllRecordings", ...(args as TeamsGraphOperationArgs<"users.user.onlineMeetings.getAllRecordings">)),
    UsersUserOnlineMeetingsGetAllTranscripts: (...args) => callOperation("users.user.onlineMeetings.getAllTranscripts", ...(args as TeamsGraphOperationArgs<"users.user.onlineMeetings.getAllTranscripts">)),
  };
}
