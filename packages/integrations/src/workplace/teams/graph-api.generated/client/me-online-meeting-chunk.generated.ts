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
export const TeamsGraphMeOnlineMeetingOperationKeys = [
  "me.ListOnlineMeetings",
  "me.CreateOnlineMeetings",
  "me.GetOnlineMeetings",
  "me.UpdateOnlineMeetings",
  "me.DeleteOnlineMeetings",
  "me.onlineMeetings.ListAttendanceReports",
  "me.onlineMeetings.CreateAttendanceReports",
  "me.onlineMeetings.GetAttendanceReports",
  "me.onlineMeetings.UpdateAttendanceReports",
  "me.onlineMeetings.DeleteAttendanceReports",
  "me.onlineMeetings.attendanceReports.ListAttendanceRecords",
  "me.onlineMeetings.attendanceReports.CreateAttendanceRecords",
  "me.onlineMeetings.attendanceReports.GetAttendanceRecords",
  "me.onlineMeetings.attendanceReports.UpdateAttendanceRecords",
  "me.onlineMeetings.attendanceReports.DeleteAttendanceRecords",
  "me.onlineMeetings.attendanceReports.attendanceRecords.GetCount-e1fe",
  "me.onlineMeetings.attendanceReports.GetCount-2378",
  "me.GetOnlineMeetingsAttendeeReport",
  "me.UpdateOnlineMeetingsAttendeeReport",
  "me.DeleteOnlineMeetingsAttendeeReport",
  "me.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl",
  "me.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms",
  "me.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms",
  "me.onlineMeetings.ListRecordings",
  "me.onlineMeetings.CreateRecordings",
  "me.onlineMeetings.GetRecordings",
  "me.onlineMeetings.UpdateRecordings",
  "me.onlineMeetings.DeleteRecordings",
  "me.onlineMeetings.GetRecordingsContent",
  "me.onlineMeetings.UpdateRecordingsContent",
  "me.onlineMeetings.DeleteRecordingsContent",
  "me.onlineMeetings.recordings.GetCount-b97c",
  "me.onlineMeetings.onlineMeeting.recordings.delta",
  "me.onlineMeetings.ListTranscripts",
  "me.onlineMeetings.CreateTranscripts",
  "me.onlineMeetings.GetTranscripts",
  "me.onlineMeetings.UpdateTranscripts",
  "me.onlineMeetings.DeleteTranscripts",
  "me.onlineMeetings.GetTranscriptsContent",
  "me.onlineMeetings.UpdateTranscriptsContent",
  "me.onlineMeetings.DeleteTranscriptsContent",
  "me.onlineMeetings.GetTranscriptsMetadataContent",
  "me.onlineMeetings.UpdateTranscriptsMetadataContent",
  "me.onlineMeetings.DeleteTranscriptsMetadataContent",
  "me.onlineMeetings.transcripts.GetCount-52e4",
  "me.onlineMeetings.onlineMeeting.transcripts.delta",
  "me.onlineMeetings.GetCount-1421",
  "me.onlineMeetings.createOrGet",
  "me.onlineMeetings.getAllRecordings",
  "me.onlineMeetings.getAllTranscripts"
] as const;
export type TeamsGraphMeOnlineMeetingOperationKey = typeof TeamsGraphMeOnlineMeetingOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphMeOnlineMeetingOperationPathParamMap {
  "me.ListOnlineMeetings": {};
  "me.CreateOnlineMeetings": {};
  "me.GetOnlineMeetings": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.UpdateOnlineMeetings": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.DeleteOnlineMeetings": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.ListAttendanceReports": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.CreateAttendanceReports": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.GetAttendanceReports": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.UpdateAttendanceReports": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.DeleteAttendanceReports": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.attendanceReports.ListAttendanceRecords": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.attendanceReports.CreateAttendanceRecords": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.attendanceReports.GetAttendanceRecords": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue; "attendanceRecord-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.attendanceReports.UpdateAttendanceRecords": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue; "attendanceRecord-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.attendanceReports.DeleteAttendanceRecords": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue; "attendanceRecord-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.attendanceReports.attendanceRecords.GetCount-e1fe": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.attendanceReports.GetCount-2378": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.GetOnlineMeetingsAttendeeReport": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.UpdateOnlineMeetingsAttendeeReport": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.DeleteOnlineMeetingsAttendeeReport": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.ListRecordings": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.CreateRecordings": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.GetRecordings": { "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.UpdateRecordings": { "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.DeleteRecordings": { "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.GetRecordingsContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.UpdateRecordingsContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.DeleteRecordingsContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.recordings.GetCount-b97c": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.onlineMeeting.recordings.delta": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.ListTranscripts": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.CreateTranscripts": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.GetTranscripts": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.UpdateTranscripts": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.DeleteTranscripts": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.GetTranscriptsContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.UpdateTranscriptsContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.DeleteTranscriptsContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.GetTranscriptsMetadataContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.UpdateTranscriptsMetadataContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.DeleteTranscriptsMetadataContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.transcripts.GetCount-52e4": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.onlineMeeting.transcripts.delta": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "me.onlineMeetings.GetCount-1421": {};
  "me.onlineMeetings.createOrGet": {};
  "me.onlineMeetings.getAllRecordings": {};
  "me.onlineMeetings.getAllTranscripts": {};
}

export interface TeamsGraphMeOnlineMeetingOperationRequestMap {
  "me.ListOnlineMeetings": TeamsGraphOperationInput<"me.ListOnlineMeetings">;
  "me.CreateOnlineMeetings": TeamsGraphOperationInput<"me.CreateOnlineMeetings">;
  "me.GetOnlineMeetings": TeamsGraphOperationInput<"me.GetOnlineMeetings">;
  "me.UpdateOnlineMeetings": TeamsGraphOperationInput<"me.UpdateOnlineMeetings">;
  "me.DeleteOnlineMeetings": TeamsGraphOperationInput<"me.DeleteOnlineMeetings">;
  "me.onlineMeetings.ListAttendanceReports": TeamsGraphOperationInput<"me.onlineMeetings.ListAttendanceReports">;
  "me.onlineMeetings.CreateAttendanceReports": TeamsGraphOperationInput<"me.onlineMeetings.CreateAttendanceReports">;
  "me.onlineMeetings.GetAttendanceReports": TeamsGraphOperationInput<"me.onlineMeetings.GetAttendanceReports">;
  "me.onlineMeetings.UpdateAttendanceReports": TeamsGraphOperationInput<"me.onlineMeetings.UpdateAttendanceReports">;
  "me.onlineMeetings.DeleteAttendanceReports": TeamsGraphOperationInput<"me.onlineMeetings.DeleteAttendanceReports">;
  "me.onlineMeetings.attendanceReports.ListAttendanceRecords": TeamsGraphOperationInput<"me.onlineMeetings.attendanceReports.ListAttendanceRecords">;
  "me.onlineMeetings.attendanceReports.CreateAttendanceRecords": TeamsGraphOperationInput<"me.onlineMeetings.attendanceReports.CreateAttendanceRecords">;
  "me.onlineMeetings.attendanceReports.GetAttendanceRecords": TeamsGraphOperationInput<"me.onlineMeetings.attendanceReports.GetAttendanceRecords">;
  "me.onlineMeetings.attendanceReports.UpdateAttendanceRecords": TeamsGraphOperationInput<"me.onlineMeetings.attendanceReports.UpdateAttendanceRecords">;
  "me.onlineMeetings.attendanceReports.DeleteAttendanceRecords": TeamsGraphOperationInput<"me.onlineMeetings.attendanceReports.DeleteAttendanceRecords">;
  "me.onlineMeetings.attendanceReports.attendanceRecords.GetCount-e1fe": TeamsGraphOperationInput<"me.onlineMeetings.attendanceReports.attendanceRecords.GetCount-e1fe">;
  "me.onlineMeetings.attendanceReports.GetCount-2378": TeamsGraphOperationInput<"me.onlineMeetings.attendanceReports.GetCount-2378">;
  "me.GetOnlineMeetingsAttendeeReport": TeamsGraphOperationInput<"me.GetOnlineMeetingsAttendeeReport">;
  "me.UpdateOnlineMeetingsAttendeeReport": TeamsGraphOperationInput<"me.UpdateOnlineMeetingsAttendeeReport">;
  "me.DeleteOnlineMeetingsAttendeeReport": TeamsGraphOperationInput<"me.DeleteOnlineMeetingsAttendeeReport">;
  "me.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl": TeamsGraphOperationInput<"me.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl">;
  "me.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms": TeamsGraphOperationInput<"me.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms">;
  "me.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms": TeamsGraphOperationInput<"me.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms">;
  "me.onlineMeetings.ListRecordings": TeamsGraphOperationInput<"me.onlineMeetings.ListRecordings">;
  "me.onlineMeetings.CreateRecordings": TeamsGraphOperationInput<"me.onlineMeetings.CreateRecordings">;
  "me.onlineMeetings.GetRecordings": TeamsGraphOperationInput<"me.onlineMeetings.GetRecordings">;
  "me.onlineMeetings.UpdateRecordings": TeamsGraphOperationInput<"me.onlineMeetings.UpdateRecordings">;
  "me.onlineMeetings.DeleteRecordings": TeamsGraphOperationInput<"me.onlineMeetings.DeleteRecordings">;
  "me.onlineMeetings.GetRecordingsContent": TeamsGraphOperationInput<"me.onlineMeetings.GetRecordingsContent">;
  "me.onlineMeetings.UpdateRecordingsContent": TeamsGraphOperationInput<"me.onlineMeetings.UpdateRecordingsContent">;
  "me.onlineMeetings.DeleteRecordingsContent": TeamsGraphOperationInput<"me.onlineMeetings.DeleteRecordingsContent">;
  "me.onlineMeetings.recordings.GetCount-b97c": TeamsGraphOperationInput<"me.onlineMeetings.recordings.GetCount-b97c">;
  "me.onlineMeetings.onlineMeeting.recordings.delta": TeamsGraphOperationInput<"me.onlineMeetings.onlineMeeting.recordings.delta">;
  "me.onlineMeetings.ListTranscripts": TeamsGraphOperationInput<"me.onlineMeetings.ListTranscripts">;
  "me.onlineMeetings.CreateTranscripts": TeamsGraphOperationInput<"me.onlineMeetings.CreateTranscripts">;
  "me.onlineMeetings.GetTranscripts": TeamsGraphOperationInput<"me.onlineMeetings.GetTranscripts">;
  "me.onlineMeetings.UpdateTranscripts": TeamsGraphOperationInput<"me.onlineMeetings.UpdateTranscripts">;
  "me.onlineMeetings.DeleteTranscripts": TeamsGraphOperationInput<"me.onlineMeetings.DeleteTranscripts">;
  "me.onlineMeetings.GetTranscriptsContent": TeamsGraphOperationInput<"me.onlineMeetings.GetTranscriptsContent">;
  "me.onlineMeetings.UpdateTranscriptsContent": TeamsGraphOperationInput<"me.onlineMeetings.UpdateTranscriptsContent">;
  "me.onlineMeetings.DeleteTranscriptsContent": TeamsGraphOperationInput<"me.onlineMeetings.DeleteTranscriptsContent">;
  "me.onlineMeetings.GetTranscriptsMetadataContent": TeamsGraphOperationInput<"me.onlineMeetings.GetTranscriptsMetadataContent">;
  "me.onlineMeetings.UpdateTranscriptsMetadataContent": TeamsGraphOperationInput<"me.onlineMeetings.UpdateTranscriptsMetadataContent">;
  "me.onlineMeetings.DeleteTranscriptsMetadataContent": TeamsGraphOperationInput<"me.onlineMeetings.DeleteTranscriptsMetadataContent">;
  "me.onlineMeetings.transcripts.GetCount-52e4": TeamsGraphOperationInput<"me.onlineMeetings.transcripts.GetCount-52e4">;
  "me.onlineMeetings.onlineMeeting.transcripts.delta": TeamsGraphOperationInput<"me.onlineMeetings.onlineMeeting.transcripts.delta">;
  "me.onlineMeetings.GetCount-1421": TeamsGraphOperationInput<"me.onlineMeetings.GetCount-1421">;
  "me.onlineMeetings.createOrGet": TeamsGraphOperationInput<"me.onlineMeetings.createOrGet">;
  "me.onlineMeetings.getAllRecordings": TeamsGraphOperationInput<"me.onlineMeetings.getAllRecordings">;
  "me.onlineMeetings.getAllTranscripts": TeamsGraphOperationInput<"me.onlineMeetings.getAllTranscripts">;
}

export interface TeamsGraphMeOnlineMeetingGeneratedClient {
  MeListOnlineMeetings(...args: TeamsGraphOperationArgs<"me.ListOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["me.ListOnlineMeetings"]>;
  MeCreateOnlineMeetings(...args: TeamsGraphOperationArgs<"me.CreateOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["me.CreateOnlineMeetings"]>;
  MeGetOnlineMeetings(...args: TeamsGraphOperationArgs<"me.GetOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["me.GetOnlineMeetings"]>;
  MeUpdateOnlineMeetings(...args: TeamsGraphOperationArgs<"me.UpdateOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["me.UpdateOnlineMeetings"]>;
  MeDeleteOnlineMeetings(...args: TeamsGraphOperationArgs<"me.DeleteOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["me.DeleteOnlineMeetings"]>;
  MeOnlineMeetingsListAttendanceReports(...args: TeamsGraphOperationArgs<"me.onlineMeetings.ListAttendanceReports">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.ListAttendanceReports"]>;
  MeOnlineMeetingsCreateAttendanceReports(...args: TeamsGraphOperationArgs<"me.onlineMeetings.CreateAttendanceReports">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.CreateAttendanceReports"]>;
  MeOnlineMeetingsGetAttendanceReports(...args: TeamsGraphOperationArgs<"me.onlineMeetings.GetAttendanceReports">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.GetAttendanceReports"]>;
  MeOnlineMeetingsUpdateAttendanceReports(...args: TeamsGraphOperationArgs<"me.onlineMeetings.UpdateAttendanceReports">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.UpdateAttendanceReports"]>;
  MeOnlineMeetingsDeleteAttendanceReports(...args: TeamsGraphOperationArgs<"me.onlineMeetings.DeleteAttendanceReports">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.DeleteAttendanceReports"]>;
  MeOnlineMeetingsAttendanceReportsListAttendanceRecords(...args: TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.ListAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.attendanceReports.ListAttendanceRecords"]>;
  MeOnlineMeetingsAttendanceReportsCreateAttendanceRecords(...args: TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.CreateAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.attendanceReports.CreateAttendanceRecords"]>;
  MeOnlineMeetingsAttendanceReportsGetAttendanceRecords(...args: TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.GetAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.attendanceReports.GetAttendanceRecords"]>;
  MeOnlineMeetingsAttendanceReportsUpdateAttendanceRecords(...args: TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.UpdateAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.attendanceReports.UpdateAttendanceRecords"]>;
  MeOnlineMeetingsAttendanceReportsDeleteAttendanceRecords(...args: TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.DeleteAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.attendanceReports.DeleteAttendanceRecords"]>;
  MeOnlineMeetingsAttendanceReportsAttendanceRecordsGetCountE1fe(...args: TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.attendanceRecords.GetCount-e1fe">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.attendanceReports.attendanceRecords.GetCount-e1fe"]>;
  MeOnlineMeetingsAttendanceReportsGetCount2378(...args: TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.GetCount-2378">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.attendanceReports.GetCount-2378"]>;
  MeGetOnlineMeetingsAttendeeReport(...args: TeamsGraphOperationArgs<"me.GetOnlineMeetingsAttendeeReport">): Promise<TeamsGraphOperationResponseMap["me.GetOnlineMeetingsAttendeeReport"]>;
  MeUpdateOnlineMeetingsAttendeeReport(...args: TeamsGraphOperationArgs<"me.UpdateOnlineMeetingsAttendeeReport">): Promise<TeamsGraphOperationResponseMap["me.UpdateOnlineMeetingsAttendeeReport"]>;
  MeDeleteOnlineMeetingsAttendeeReport(...args: TeamsGraphOperationArgs<"me.DeleteOnlineMeetingsAttendeeReport">): Promise<TeamsGraphOperationResponseMap["me.DeleteOnlineMeetingsAttendeeReport"]>;
  MeOnlineMeetingsOnlineMeetingGetVirtualAppointmentJoinWebUrl(...args: TeamsGraphOperationArgs<"me.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl"]>;
  MeOnlineMeetingsOnlineMeetingSendVirtualAppointmentReminderSms(...args: TeamsGraphOperationArgs<"me.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms"]>;
  MeOnlineMeetingsOnlineMeetingSendVirtualAppointmentSms(...args: TeamsGraphOperationArgs<"me.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms"]>;
  MeOnlineMeetingsListRecordings(...args: TeamsGraphOperationArgs<"me.onlineMeetings.ListRecordings">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.ListRecordings"]>;
  MeOnlineMeetingsCreateRecordings(...args: TeamsGraphOperationArgs<"me.onlineMeetings.CreateRecordings">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.CreateRecordings"]>;
  MeOnlineMeetingsGetRecordings(...args: TeamsGraphOperationArgs<"me.onlineMeetings.GetRecordings">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.GetRecordings"]>;
  MeOnlineMeetingsUpdateRecordings(...args: TeamsGraphOperationArgs<"me.onlineMeetings.UpdateRecordings">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.UpdateRecordings"]>;
  MeOnlineMeetingsDeleteRecordings(...args: TeamsGraphOperationArgs<"me.onlineMeetings.DeleteRecordings">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.DeleteRecordings"]>;
  MeOnlineMeetingsGetRecordingsContent(...args: TeamsGraphOperationArgs<"me.onlineMeetings.GetRecordingsContent">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.GetRecordingsContent"]>;
  MeOnlineMeetingsUpdateRecordingsContent(...args: TeamsGraphOperationArgs<"me.onlineMeetings.UpdateRecordingsContent">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.UpdateRecordingsContent"]>;
  MeOnlineMeetingsDeleteRecordingsContent(...args: TeamsGraphOperationArgs<"me.onlineMeetings.DeleteRecordingsContent">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.DeleteRecordingsContent"]>;
  MeOnlineMeetingsRecordingsGetCountB97c(...args: TeamsGraphOperationArgs<"me.onlineMeetings.recordings.GetCount-b97c">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.recordings.GetCount-b97c"]>;
  MeOnlineMeetingsOnlineMeetingRecordingsDelta(...args: TeamsGraphOperationArgs<"me.onlineMeetings.onlineMeeting.recordings.delta">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.onlineMeeting.recordings.delta"]>;
  MeOnlineMeetingsListTranscripts(...args: TeamsGraphOperationArgs<"me.onlineMeetings.ListTranscripts">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.ListTranscripts"]>;
  MeOnlineMeetingsCreateTranscripts(...args: TeamsGraphOperationArgs<"me.onlineMeetings.CreateTranscripts">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.CreateTranscripts"]>;
  MeOnlineMeetingsGetTranscripts(...args: TeamsGraphOperationArgs<"me.onlineMeetings.GetTranscripts">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.GetTranscripts"]>;
  MeOnlineMeetingsUpdateTranscripts(...args: TeamsGraphOperationArgs<"me.onlineMeetings.UpdateTranscripts">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.UpdateTranscripts"]>;
  MeOnlineMeetingsDeleteTranscripts(...args: TeamsGraphOperationArgs<"me.onlineMeetings.DeleteTranscripts">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.DeleteTranscripts"]>;
  MeOnlineMeetingsGetTranscriptsContent(...args: TeamsGraphOperationArgs<"me.onlineMeetings.GetTranscriptsContent">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.GetTranscriptsContent"]>;
  MeOnlineMeetingsUpdateTranscriptsContent(...args: TeamsGraphOperationArgs<"me.onlineMeetings.UpdateTranscriptsContent">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.UpdateTranscriptsContent"]>;
  MeOnlineMeetingsDeleteTranscriptsContent(...args: TeamsGraphOperationArgs<"me.onlineMeetings.DeleteTranscriptsContent">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.DeleteTranscriptsContent"]>;
  MeOnlineMeetingsGetTranscriptsMetadataContent(...args: TeamsGraphOperationArgs<"me.onlineMeetings.GetTranscriptsMetadataContent">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.GetTranscriptsMetadataContent"]>;
  MeOnlineMeetingsUpdateTranscriptsMetadataContent(...args: TeamsGraphOperationArgs<"me.onlineMeetings.UpdateTranscriptsMetadataContent">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.UpdateTranscriptsMetadataContent"]>;
  MeOnlineMeetingsDeleteTranscriptsMetadataContent(...args: TeamsGraphOperationArgs<"me.onlineMeetings.DeleteTranscriptsMetadataContent">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.DeleteTranscriptsMetadataContent"]>;
  MeOnlineMeetingsTranscriptsGetCount52e4(...args: TeamsGraphOperationArgs<"me.onlineMeetings.transcripts.GetCount-52e4">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.transcripts.GetCount-52e4"]>;
  MeOnlineMeetingsOnlineMeetingTranscriptsDelta(...args: TeamsGraphOperationArgs<"me.onlineMeetings.onlineMeeting.transcripts.delta">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.onlineMeeting.transcripts.delta"]>;
  MeOnlineMeetingsGetCount1421(...args: TeamsGraphOperationArgs<"me.onlineMeetings.GetCount-1421">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.GetCount-1421"]>;
  MeOnlineMeetingsCreateOrGet(...args: TeamsGraphOperationArgs<"me.onlineMeetings.createOrGet">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.createOrGet"]>;
  MeOnlineMeetingsGetAllRecordings(...args: TeamsGraphOperationArgs<"me.onlineMeetings.getAllRecordings">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.getAllRecordings"]>;
  MeOnlineMeetingsGetAllTranscripts(...args: TeamsGraphOperationArgs<"me.onlineMeetings.getAllTranscripts">): Promise<TeamsGraphOperationResponseMap["me.onlineMeetings.getAllTranscripts"]>;
}

export const TeamsGraphMeOnlineMeetingGeneratedFunctionNames = [
  "MeListOnlineMeetings",
  "MeCreateOnlineMeetings",
  "MeGetOnlineMeetings",
  "MeUpdateOnlineMeetings",
  "MeDeleteOnlineMeetings",
  "MeOnlineMeetingsListAttendanceReports",
  "MeOnlineMeetingsCreateAttendanceReports",
  "MeOnlineMeetingsGetAttendanceReports",
  "MeOnlineMeetingsUpdateAttendanceReports",
  "MeOnlineMeetingsDeleteAttendanceReports",
  "MeOnlineMeetingsAttendanceReportsListAttendanceRecords",
  "MeOnlineMeetingsAttendanceReportsCreateAttendanceRecords",
  "MeOnlineMeetingsAttendanceReportsGetAttendanceRecords",
  "MeOnlineMeetingsAttendanceReportsUpdateAttendanceRecords",
  "MeOnlineMeetingsAttendanceReportsDeleteAttendanceRecords",
  "MeOnlineMeetingsAttendanceReportsAttendanceRecordsGetCountE1fe",
  "MeOnlineMeetingsAttendanceReportsGetCount2378",
  "MeGetOnlineMeetingsAttendeeReport",
  "MeUpdateOnlineMeetingsAttendeeReport",
  "MeDeleteOnlineMeetingsAttendeeReport",
  "MeOnlineMeetingsOnlineMeetingGetVirtualAppointmentJoinWebUrl",
  "MeOnlineMeetingsOnlineMeetingSendVirtualAppointmentReminderSms",
  "MeOnlineMeetingsOnlineMeetingSendVirtualAppointmentSms",
  "MeOnlineMeetingsListRecordings",
  "MeOnlineMeetingsCreateRecordings",
  "MeOnlineMeetingsGetRecordings",
  "MeOnlineMeetingsUpdateRecordings",
  "MeOnlineMeetingsDeleteRecordings",
  "MeOnlineMeetingsGetRecordingsContent",
  "MeOnlineMeetingsUpdateRecordingsContent",
  "MeOnlineMeetingsDeleteRecordingsContent",
  "MeOnlineMeetingsRecordingsGetCountB97c",
  "MeOnlineMeetingsOnlineMeetingRecordingsDelta",
  "MeOnlineMeetingsListTranscripts",
  "MeOnlineMeetingsCreateTranscripts",
  "MeOnlineMeetingsGetTranscripts",
  "MeOnlineMeetingsUpdateTranscripts",
  "MeOnlineMeetingsDeleteTranscripts",
  "MeOnlineMeetingsGetTranscriptsContent",
  "MeOnlineMeetingsUpdateTranscriptsContent",
  "MeOnlineMeetingsDeleteTranscriptsContent",
  "MeOnlineMeetingsGetTranscriptsMetadataContent",
  "MeOnlineMeetingsUpdateTranscriptsMetadataContent",
  "MeOnlineMeetingsDeleteTranscriptsMetadataContent",
  "MeOnlineMeetingsTranscriptsGetCount52e4",
  "MeOnlineMeetingsOnlineMeetingTranscriptsDelta",
  "MeOnlineMeetingsGetCount1421",
  "MeOnlineMeetingsCreateOrGet",
  "MeOnlineMeetingsGetAllRecordings",
  "MeOnlineMeetingsGetAllTranscripts"
] as const satisfies readonly (keyof TeamsGraphMeOnlineMeetingGeneratedClient)[];

export function createTeamsGraphMeOnlineMeetingGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphMeOnlineMeetingGeneratedClient {
  return {
    MeListOnlineMeetings: (...args) => callOperation("me.ListOnlineMeetings", ...(args as TeamsGraphOperationArgs<"me.ListOnlineMeetings">)),
    MeCreateOnlineMeetings: (...args) => callOperation("me.CreateOnlineMeetings", ...(args as TeamsGraphOperationArgs<"me.CreateOnlineMeetings">)),
    MeGetOnlineMeetings: (...args) => callOperation("me.GetOnlineMeetings", ...(args as TeamsGraphOperationArgs<"me.GetOnlineMeetings">)),
    MeUpdateOnlineMeetings: (...args) => callOperation("me.UpdateOnlineMeetings", ...(args as TeamsGraphOperationArgs<"me.UpdateOnlineMeetings">)),
    MeDeleteOnlineMeetings: (...args) => callOperation("me.DeleteOnlineMeetings", ...(args as TeamsGraphOperationArgs<"me.DeleteOnlineMeetings">)),
    MeOnlineMeetingsListAttendanceReports: (...args) => callOperation("me.onlineMeetings.ListAttendanceReports", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.ListAttendanceReports">)),
    MeOnlineMeetingsCreateAttendanceReports: (...args) => callOperation("me.onlineMeetings.CreateAttendanceReports", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.CreateAttendanceReports">)),
    MeOnlineMeetingsGetAttendanceReports: (...args) => callOperation("me.onlineMeetings.GetAttendanceReports", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.GetAttendanceReports">)),
    MeOnlineMeetingsUpdateAttendanceReports: (...args) => callOperation("me.onlineMeetings.UpdateAttendanceReports", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.UpdateAttendanceReports">)),
    MeOnlineMeetingsDeleteAttendanceReports: (...args) => callOperation("me.onlineMeetings.DeleteAttendanceReports", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.DeleteAttendanceReports">)),
    MeOnlineMeetingsAttendanceReportsListAttendanceRecords: (...args) => callOperation("me.onlineMeetings.attendanceReports.ListAttendanceRecords", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.ListAttendanceRecords">)),
    MeOnlineMeetingsAttendanceReportsCreateAttendanceRecords: (...args) => callOperation("me.onlineMeetings.attendanceReports.CreateAttendanceRecords", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.CreateAttendanceRecords">)),
    MeOnlineMeetingsAttendanceReportsGetAttendanceRecords: (...args) => callOperation("me.onlineMeetings.attendanceReports.GetAttendanceRecords", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.GetAttendanceRecords">)),
    MeOnlineMeetingsAttendanceReportsUpdateAttendanceRecords: (...args) => callOperation("me.onlineMeetings.attendanceReports.UpdateAttendanceRecords", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.UpdateAttendanceRecords">)),
    MeOnlineMeetingsAttendanceReportsDeleteAttendanceRecords: (...args) => callOperation("me.onlineMeetings.attendanceReports.DeleteAttendanceRecords", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.DeleteAttendanceRecords">)),
    MeOnlineMeetingsAttendanceReportsAttendanceRecordsGetCountE1fe: (...args) => callOperation("me.onlineMeetings.attendanceReports.attendanceRecords.GetCount-e1fe", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.attendanceRecords.GetCount-e1fe">)),
    MeOnlineMeetingsAttendanceReportsGetCount2378: (...args) => callOperation("me.onlineMeetings.attendanceReports.GetCount-2378", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.attendanceReports.GetCount-2378">)),
    MeGetOnlineMeetingsAttendeeReport: (...args) => callOperation("me.GetOnlineMeetingsAttendeeReport", ...(args as TeamsGraphOperationArgs<"me.GetOnlineMeetingsAttendeeReport">)),
    MeUpdateOnlineMeetingsAttendeeReport: (...args) => callOperation("me.UpdateOnlineMeetingsAttendeeReport", ...(args as TeamsGraphOperationArgs<"me.UpdateOnlineMeetingsAttendeeReport">)),
    MeDeleteOnlineMeetingsAttendeeReport: (...args) => callOperation("me.DeleteOnlineMeetingsAttendeeReport", ...(args as TeamsGraphOperationArgs<"me.DeleteOnlineMeetingsAttendeeReport">)),
    MeOnlineMeetingsOnlineMeetingGetVirtualAppointmentJoinWebUrl: (...args) => callOperation("me.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl">)),
    MeOnlineMeetingsOnlineMeetingSendVirtualAppointmentReminderSms: (...args) => callOperation("me.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms">)),
    MeOnlineMeetingsOnlineMeetingSendVirtualAppointmentSms: (...args) => callOperation("me.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms">)),
    MeOnlineMeetingsListRecordings: (...args) => callOperation("me.onlineMeetings.ListRecordings", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.ListRecordings">)),
    MeOnlineMeetingsCreateRecordings: (...args) => callOperation("me.onlineMeetings.CreateRecordings", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.CreateRecordings">)),
    MeOnlineMeetingsGetRecordings: (...args) => callOperation("me.onlineMeetings.GetRecordings", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.GetRecordings">)),
    MeOnlineMeetingsUpdateRecordings: (...args) => callOperation("me.onlineMeetings.UpdateRecordings", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.UpdateRecordings">)),
    MeOnlineMeetingsDeleteRecordings: (...args) => callOperation("me.onlineMeetings.DeleteRecordings", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.DeleteRecordings">)),
    MeOnlineMeetingsGetRecordingsContent: (...args) => callOperation("me.onlineMeetings.GetRecordingsContent", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.GetRecordingsContent">)),
    MeOnlineMeetingsUpdateRecordingsContent: (...args) => callOperation("me.onlineMeetings.UpdateRecordingsContent", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.UpdateRecordingsContent">)),
    MeOnlineMeetingsDeleteRecordingsContent: (...args) => callOperation("me.onlineMeetings.DeleteRecordingsContent", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.DeleteRecordingsContent">)),
    MeOnlineMeetingsRecordingsGetCountB97c: (...args) => callOperation("me.onlineMeetings.recordings.GetCount-b97c", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.recordings.GetCount-b97c">)),
    MeOnlineMeetingsOnlineMeetingRecordingsDelta: (...args) => callOperation("me.onlineMeetings.onlineMeeting.recordings.delta", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.onlineMeeting.recordings.delta">)),
    MeOnlineMeetingsListTranscripts: (...args) => callOperation("me.onlineMeetings.ListTranscripts", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.ListTranscripts">)),
    MeOnlineMeetingsCreateTranscripts: (...args) => callOperation("me.onlineMeetings.CreateTranscripts", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.CreateTranscripts">)),
    MeOnlineMeetingsGetTranscripts: (...args) => callOperation("me.onlineMeetings.GetTranscripts", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.GetTranscripts">)),
    MeOnlineMeetingsUpdateTranscripts: (...args) => callOperation("me.onlineMeetings.UpdateTranscripts", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.UpdateTranscripts">)),
    MeOnlineMeetingsDeleteTranscripts: (...args) => callOperation("me.onlineMeetings.DeleteTranscripts", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.DeleteTranscripts">)),
    MeOnlineMeetingsGetTranscriptsContent: (...args) => callOperation("me.onlineMeetings.GetTranscriptsContent", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.GetTranscriptsContent">)),
    MeOnlineMeetingsUpdateTranscriptsContent: (...args) => callOperation("me.onlineMeetings.UpdateTranscriptsContent", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.UpdateTranscriptsContent">)),
    MeOnlineMeetingsDeleteTranscriptsContent: (...args) => callOperation("me.onlineMeetings.DeleteTranscriptsContent", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.DeleteTranscriptsContent">)),
    MeOnlineMeetingsGetTranscriptsMetadataContent: (...args) => callOperation("me.onlineMeetings.GetTranscriptsMetadataContent", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.GetTranscriptsMetadataContent">)),
    MeOnlineMeetingsUpdateTranscriptsMetadataContent: (...args) => callOperation("me.onlineMeetings.UpdateTranscriptsMetadataContent", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.UpdateTranscriptsMetadataContent">)),
    MeOnlineMeetingsDeleteTranscriptsMetadataContent: (...args) => callOperation("me.onlineMeetings.DeleteTranscriptsMetadataContent", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.DeleteTranscriptsMetadataContent">)),
    MeOnlineMeetingsTranscriptsGetCount52e4: (...args) => callOperation("me.onlineMeetings.transcripts.GetCount-52e4", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.transcripts.GetCount-52e4">)),
    MeOnlineMeetingsOnlineMeetingTranscriptsDelta: (...args) => callOperation("me.onlineMeetings.onlineMeeting.transcripts.delta", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.onlineMeeting.transcripts.delta">)),
    MeOnlineMeetingsGetCount1421: (...args) => callOperation("me.onlineMeetings.GetCount-1421", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.GetCount-1421">)),
    MeOnlineMeetingsCreateOrGet: (...args) => callOperation("me.onlineMeetings.createOrGet", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.createOrGet">)),
    MeOnlineMeetingsGetAllRecordings: (...args) => callOperation("me.onlineMeetings.getAllRecordings", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.getAllRecordings">)),
    MeOnlineMeetingsGetAllTranscripts: (...args) => callOperation("me.onlineMeetings.getAllTranscripts", ...(args as TeamsGraphOperationArgs<"me.onlineMeetings.getAllTranscripts">)),
  };
}
