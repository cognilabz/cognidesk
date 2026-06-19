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
export const TeamsGraphCommunicationsOnlineMeetingOperationKeys = [
  "communications.ListOnlineMeetings",
  "communications.CreateOnlineMeetings",
  "communications.GetOnlineMeetings",
  "communications.UpdateOnlineMeetings",
  "communications.DeleteOnlineMeetings",
  "communications.onlineMeetings.ListAttendanceReports",
  "communications.onlineMeetings.CreateAttendanceReports",
  "communications.onlineMeetings.GetAttendanceReports",
  "communications.onlineMeetings.UpdateAttendanceReports",
  "communications.onlineMeetings.DeleteAttendanceReports",
  "communications.onlineMeetings.attendanceReports.ListAttendanceRecords",
  "communications.onlineMeetings.attendanceReports.CreateAttendanceRecords",
  "communications.onlineMeetings.attendanceReports.GetAttendanceRecords",
  "communications.onlineMeetings.attendanceReports.UpdateAttendanceRecords",
  "communications.onlineMeetings.attendanceReports.DeleteAttendanceRecords",
  "communications.onlineMeetings.attendanceReports.attendanceRecords.GetCount-73e4",
  "communications.onlineMeetings.attendanceReports.GetCount-c621",
  "communications.GetOnlineMeetingsAttendeeReport",
  "communications.UpdateOnlineMeetingsAttendeeReport",
  "communications.DeleteOnlineMeetingsAttendeeReport",
  "communications.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl",
  "communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms",
  "communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms",
  "communications.onlineMeetings.ListRecordings",
  "communications.onlineMeetings.CreateRecordings",
  "communications.onlineMeetings.GetRecordings",
  "communications.onlineMeetings.UpdateRecordings",
  "communications.onlineMeetings.DeleteRecordings",
  "communications.onlineMeetings.GetRecordingsContent",
  "communications.onlineMeetings.UpdateRecordingsContent",
  "communications.onlineMeetings.DeleteRecordingsContent",
  "communications.onlineMeetings.recordings.GetCount-0fd0",
  "communications.onlineMeetings.onlineMeeting.recordings.delta",
  "communications.onlineMeetings.ListTranscripts",
  "communications.onlineMeetings.CreateTranscripts",
  "communications.onlineMeetings.GetTranscripts",
  "communications.onlineMeetings.UpdateTranscripts",
  "communications.onlineMeetings.DeleteTranscripts",
  "communications.onlineMeetings.GetTranscriptsContent",
  "communications.onlineMeetings.UpdateTranscriptsContent",
  "communications.onlineMeetings.DeleteTranscriptsContent",
  "communications.onlineMeetings.GetTranscriptsMetadataContent",
  "communications.onlineMeetings.UpdateTranscriptsMetadataContent",
  "communications.onlineMeetings.DeleteTranscriptsMetadataContent",
  "communications.onlineMeetings.transcripts.GetCount-7670",
  "communications.onlineMeetings.onlineMeeting.transcripts.delta",
  "communications.onlineMeetings.GetCount-91a5",
  "communications.onlineMeetings.createOrGet",
  "communications.onlineMeetings.getAllRecordings",
  "communications.onlineMeetings.getAllTranscripts"
] as const;
export type TeamsGraphCommunicationsOnlineMeetingOperationKey = typeof TeamsGraphCommunicationsOnlineMeetingOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphCommunicationsOnlineMeetingOperationPathParamMap {
  "communications.ListOnlineMeetings": {};
  "communications.CreateOnlineMeetings": {};
  "communications.GetOnlineMeetings": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.UpdateOnlineMeetings": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.DeleteOnlineMeetings": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.ListAttendanceReports": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.CreateAttendanceReports": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.GetAttendanceReports": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.UpdateAttendanceReports": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.DeleteAttendanceReports": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.attendanceReports.ListAttendanceRecords": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.attendanceReports.CreateAttendanceRecords": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.attendanceReports.GetAttendanceRecords": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue; "attendanceRecord-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.attendanceReports.UpdateAttendanceRecords": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue; "attendanceRecord-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.attendanceReports.DeleteAttendanceRecords": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue; "attendanceRecord-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.attendanceReports.attendanceRecords.GetCount-73e4": { "onlineMeeting-id": TeamsGraphPathParamValue; "meetingAttendanceReport-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.attendanceReports.GetCount-c621": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.GetOnlineMeetingsAttendeeReport": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.UpdateOnlineMeetingsAttendeeReport": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.DeleteOnlineMeetingsAttendeeReport": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.ListRecordings": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.CreateRecordings": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.GetRecordings": { "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.UpdateRecordings": { "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.DeleteRecordings": { "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.GetRecordingsContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.UpdateRecordingsContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.DeleteRecordingsContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.recordings.GetCount-0fd0": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.onlineMeeting.recordings.delta": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.ListTranscripts": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.CreateTranscripts": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.GetTranscripts": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.UpdateTranscripts": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.DeleteTranscripts": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.GetTranscriptsContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.UpdateTranscriptsContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.DeleteTranscriptsContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.GetTranscriptsMetadataContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.UpdateTranscriptsMetadataContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.DeleteTranscriptsMetadataContent": { "onlineMeeting-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.transcripts.GetCount-7670": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.onlineMeeting.transcripts.delta": { "onlineMeeting-id": TeamsGraphPathParamValue };
  "communications.onlineMeetings.GetCount-91a5": {};
  "communications.onlineMeetings.createOrGet": {};
  "communications.onlineMeetings.getAllRecordings": {};
  "communications.onlineMeetings.getAllTranscripts": {};
}

export interface TeamsGraphCommunicationsOnlineMeetingOperationRequestMap {
  "communications.ListOnlineMeetings": TeamsGraphOperationInput<"communications.ListOnlineMeetings">;
  "communications.CreateOnlineMeetings": TeamsGraphOperationInput<"communications.CreateOnlineMeetings">;
  "communications.GetOnlineMeetings": TeamsGraphOperationInput<"communications.GetOnlineMeetings">;
  "communications.UpdateOnlineMeetings": TeamsGraphOperationInput<"communications.UpdateOnlineMeetings">;
  "communications.DeleteOnlineMeetings": TeamsGraphOperationInput<"communications.DeleteOnlineMeetings">;
  "communications.onlineMeetings.ListAttendanceReports": TeamsGraphOperationInput<"communications.onlineMeetings.ListAttendanceReports">;
  "communications.onlineMeetings.CreateAttendanceReports": TeamsGraphOperationInput<"communications.onlineMeetings.CreateAttendanceReports">;
  "communications.onlineMeetings.GetAttendanceReports": TeamsGraphOperationInput<"communications.onlineMeetings.GetAttendanceReports">;
  "communications.onlineMeetings.UpdateAttendanceReports": TeamsGraphOperationInput<"communications.onlineMeetings.UpdateAttendanceReports">;
  "communications.onlineMeetings.DeleteAttendanceReports": TeamsGraphOperationInput<"communications.onlineMeetings.DeleteAttendanceReports">;
  "communications.onlineMeetings.attendanceReports.ListAttendanceRecords": TeamsGraphOperationInput<"communications.onlineMeetings.attendanceReports.ListAttendanceRecords">;
  "communications.onlineMeetings.attendanceReports.CreateAttendanceRecords": TeamsGraphOperationInput<"communications.onlineMeetings.attendanceReports.CreateAttendanceRecords">;
  "communications.onlineMeetings.attendanceReports.GetAttendanceRecords": TeamsGraphOperationInput<"communications.onlineMeetings.attendanceReports.GetAttendanceRecords">;
  "communications.onlineMeetings.attendanceReports.UpdateAttendanceRecords": TeamsGraphOperationInput<"communications.onlineMeetings.attendanceReports.UpdateAttendanceRecords">;
  "communications.onlineMeetings.attendanceReports.DeleteAttendanceRecords": TeamsGraphOperationInput<"communications.onlineMeetings.attendanceReports.DeleteAttendanceRecords">;
  "communications.onlineMeetings.attendanceReports.attendanceRecords.GetCount-73e4": TeamsGraphOperationInput<"communications.onlineMeetings.attendanceReports.attendanceRecords.GetCount-73e4">;
  "communications.onlineMeetings.attendanceReports.GetCount-c621": TeamsGraphOperationInput<"communications.onlineMeetings.attendanceReports.GetCount-c621">;
  "communications.GetOnlineMeetingsAttendeeReport": TeamsGraphOperationInput<"communications.GetOnlineMeetingsAttendeeReport">;
  "communications.UpdateOnlineMeetingsAttendeeReport": TeamsGraphOperationInput<"communications.UpdateOnlineMeetingsAttendeeReport">;
  "communications.DeleteOnlineMeetingsAttendeeReport": TeamsGraphOperationInput<"communications.DeleteOnlineMeetingsAttendeeReport">;
  "communications.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl": TeamsGraphOperationInput<"communications.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl">;
  "communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms": TeamsGraphOperationInput<"communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms">;
  "communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms": TeamsGraphOperationInput<"communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms">;
  "communications.onlineMeetings.ListRecordings": TeamsGraphOperationInput<"communications.onlineMeetings.ListRecordings">;
  "communications.onlineMeetings.CreateRecordings": TeamsGraphOperationInput<"communications.onlineMeetings.CreateRecordings">;
  "communications.onlineMeetings.GetRecordings": TeamsGraphOperationInput<"communications.onlineMeetings.GetRecordings">;
  "communications.onlineMeetings.UpdateRecordings": TeamsGraphOperationInput<"communications.onlineMeetings.UpdateRecordings">;
  "communications.onlineMeetings.DeleteRecordings": TeamsGraphOperationInput<"communications.onlineMeetings.DeleteRecordings">;
  "communications.onlineMeetings.GetRecordingsContent": TeamsGraphOperationInput<"communications.onlineMeetings.GetRecordingsContent">;
  "communications.onlineMeetings.UpdateRecordingsContent": TeamsGraphOperationInput<"communications.onlineMeetings.UpdateRecordingsContent">;
  "communications.onlineMeetings.DeleteRecordingsContent": TeamsGraphOperationInput<"communications.onlineMeetings.DeleteRecordingsContent">;
  "communications.onlineMeetings.recordings.GetCount-0fd0": TeamsGraphOperationInput<"communications.onlineMeetings.recordings.GetCount-0fd0">;
  "communications.onlineMeetings.onlineMeeting.recordings.delta": TeamsGraphOperationInput<"communications.onlineMeetings.onlineMeeting.recordings.delta">;
  "communications.onlineMeetings.ListTranscripts": TeamsGraphOperationInput<"communications.onlineMeetings.ListTranscripts">;
  "communications.onlineMeetings.CreateTranscripts": TeamsGraphOperationInput<"communications.onlineMeetings.CreateTranscripts">;
  "communications.onlineMeetings.GetTranscripts": TeamsGraphOperationInput<"communications.onlineMeetings.GetTranscripts">;
  "communications.onlineMeetings.UpdateTranscripts": TeamsGraphOperationInput<"communications.onlineMeetings.UpdateTranscripts">;
  "communications.onlineMeetings.DeleteTranscripts": TeamsGraphOperationInput<"communications.onlineMeetings.DeleteTranscripts">;
  "communications.onlineMeetings.GetTranscriptsContent": TeamsGraphOperationInput<"communications.onlineMeetings.GetTranscriptsContent">;
  "communications.onlineMeetings.UpdateTranscriptsContent": TeamsGraphOperationInput<"communications.onlineMeetings.UpdateTranscriptsContent">;
  "communications.onlineMeetings.DeleteTranscriptsContent": TeamsGraphOperationInput<"communications.onlineMeetings.DeleteTranscriptsContent">;
  "communications.onlineMeetings.GetTranscriptsMetadataContent": TeamsGraphOperationInput<"communications.onlineMeetings.GetTranscriptsMetadataContent">;
  "communications.onlineMeetings.UpdateTranscriptsMetadataContent": TeamsGraphOperationInput<"communications.onlineMeetings.UpdateTranscriptsMetadataContent">;
  "communications.onlineMeetings.DeleteTranscriptsMetadataContent": TeamsGraphOperationInput<"communications.onlineMeetings.DeleteTranscriptsMetadataContent">;
  "communications.onlineMeetings.transcripts.GetCount-7670": TeamsGraphOperationInput<"communications.onlineMeetings.transcripts.GetCount-7670">;
  "communications.onlineMeetings.onlineMeeting.transcripts.delta": TeamsGraphOperationInput<"communications.onlineMeetings.onlineMeeting.transcripts.delta">;
  "communications.onlineMeetings.GetCount-91a5": TeamsGraphOperationInput<"communications.onlineMeetings.GetCount-91a5">;
  "communications.onlineMeetings.createOrGet": TeamsGraphOperationInput<"communications.onlineMeetings.createOrGet">;
  "communications.onlineMeetings.getAllRecordings": TeamsGraphOperationInput<"communications.onlineMeetings.getAllRecordings">;
  "communications.onlineMeetings.getAllTranscripts": TeamsGraphOperationInput<"communications.onlineMeetings.getAllTranscripts">;
}

export interface TeamsGraphCommunicationsOnlineMeetingGeneratedClient {
  CommunicationsListOnlineMeetings(...args: TeamsGraphOperationArgs<"communications.ListOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["communications.ListOnlineMeetings"]>;
  CommunicationsCreateOnlineMeetings(...args: TeamsGraphOperationArgs<"communications.CreateOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["communications.CreateOnlineMeetings"]>;
  CommunicationsGetOnlineMeetings(...args: TeamsGraphOperationArgs<"communications.GetOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["communications.GetOnlineMeetings"]>;
  CommunicationsUpdateOnlineMeetings(...args: TeamsGraphOperationArgs<"communications.UpdateOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["communications.UpdateOnlineMeetings"]>;
  CommunicationsDeleteOnlineMeetings(...args: TeamsGraphOperationArgs<"communications.DeleteOnlineMeetings">): Promise<TeamsGraphOperationResponseMap["communications.DeleteOnlineMeetings"]>;
  CommunicationsOnlineMeetingsListAttendanceReports(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.ListAttendanceReports">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.ListAttendanceReports"]>;
  CommunicationsOnlineMeetingsCreateAttendanceReports(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.CreateAttendanceReports">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.CreateAttendanceReports"]>;
  CommunicationsOnlineMeetingsGetAttendanceReports(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.GetAttendanceReports">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.GetAttendanceReports"]>;
  CommunicationsOnlineMeetingsUpdateAttendanceReports(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.UpdateAttendanceReports">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.UpdateAttendanceReports"]>;
  CommunicationsOnlineMeetingsDeleteAttendanceReports(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.DeleteAttendanceReports">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.DeleteAttendanceReports"]>;
  CommunicationsOnlineMeetingsAttendanceReportsListAttendanceRecords(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.ListAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.attendanceReports.ListAttendanceRecords"]>;
  CommunicationsOnlineMeetingsAttendanceReportsCreateAttendanceRecords(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.CreateAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.attendanceReports.CreateAttendanceRecords"]>;
  CommunicationsOnlineMeetingsAttendanceReportsGetAttendanceRecords(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.GetAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.attendanceReports.GetAttendanceRecords"]>;
  CommunicationsOnlineMeetingsAttendanceReportsUpdateAttendanceRecords(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.UpdateAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.attendanceReports.UpdateAttendanceRecords"]>;
  CommunicationsOnlineMeetingsAttendanceReportsDeleteAttendanceRecords(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.DeleteAttendanceRecords">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.attendanceReports.DeleteAttendanceRecords"]>;
  CommunicationsOnlineMeetingsAttendanceReportsAttendanceRecordsGetCount73e4(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.attendanceRecords.GetCount-73e4">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.attendanceReports.attendanceRecords.GetCount-73e4"]>;
  CommunicationsOnlineMeetingsAttendanceReportsGetCountC621(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.GetCount-c621">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.attendanceReports.GetCount-c621"]>;
  CommunicationsGetOnlineMeetingsAttendeeReport(...args: TeamsGraphOperationArgs<"communications.GetOnlineMeetingsAttendeeReport">): Promise<TeamsGraphOperationResponseMap["communications.GetOnlineMeetingsAttendeeReport"]>;
  CommunicationsUpdateOnlineMeetingsAttendeeReport(...args: TeamsGraphOperationArgs<"communications.UpdateOnlineMeetingsAttendeeReport">): Promise<TeamsGraphOperationResponseMap["communications.UpdateOnlineMeetingsAttendeeReport"]>;
  CommunicationsDeleteOnlineMeetingsAttendeeReport(...args: TeamsGraphOperationArgs<"communications.DeleteOnlineMeetingsAttendeeReport">): Promise<TeamsGraphOperationResponseMap["communications.DeleteOnlineMeetingsAttendeeReport"]>;
  CommunicationsOnlineMeetingsOnlineMeetingGetVirtualAppointmentJoinWebUrl(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl"]>;
  CommunicationsOnlineMeetingsOnlineMeetingSendVirtualAppointmentReminderSms(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms"]>;
  CommunicationsOnlineMeetingsOnlineMeetingSendVirtualAppointmentSms(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms"]>;
  CommunicationsOnlineMeetingsListRecordings(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.ListRecordings">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.ListRecordings"]>;
  CommunicationsOnlineMeetingsCreateRecordings(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.CreateRecordings">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.CreateRecordings"]>;
  CommunicationsOnlineMeetingsGetRecordings(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.GetRecordings">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.GetRecordings"]>;
  CommunicationsOnlineMeetingsUpdateRecordings(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.UpdateRecordings">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.UpdateRecordings"]>;
  CommunicationsOnlineMeetingsDeleteRecordings(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.DeleteRecordings">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.DeleteRecordings"]>;
  CommunicationsOnlineMeetingsGetRecordingsContent(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.GetRecordingsContent">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.GetRecordingsContent"]>;
  CommunicationsOnlineMeetingsUpdateRecordingsContent(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.UpdateRecordingsContent">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.UpdateRecordingsContent"]>;
  CommunicationsOnlineMeetingsDeleteRecordingsContent(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.DeleteRecordingsContent">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.DeleteRecordingsContent"]>;
  CommunicationsOnlineMeetingsRecordingsGetCount0fd0(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.recordings.GetCount-0fd0">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.recordings.GetCount-0fd0"]>;
  CommunicationsOnlineMeetingsOnlineMeetingRecordingsDelta(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.onlineMeeting.recordings.delta">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.onlineMeeting.recordings.delta"]>;
  CommunicationsOnlineMeetingsListTranscripts(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.ListTranscripts">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.ListTranscripts"]>;
  CommunicationsOnlineMeetingsCreateTranscripts(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.CreateTranscripts">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.CreateTranscripts"]>;
  CommunicationsOnlineMeetingsGetTranscripts(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.GetTranscripts">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.GetTranscripts"]>;
  CommunicationsOnlineMeetingsUpdateTranscripts(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.UpdateTranscripts">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.UpdateTranscripts"]>;
  CommunicationsOnlineMeetingsDeleteTranscripts(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.DeleteTranscripts">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.DeleteTranscripts"]>;
  CommunicationsOnlineMeetingsGetTranscriptsContent(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.GetTranscriptsContent">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.GetTranscriptsContent"]>;
  CommunicationsOnlineMeetingsUpdateTranscriptsContent(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.UpdateTranscriptsContent">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.UpdateTranscriptsContent"]>;
  CommunicationsOnlineMeetingsDeleteTranscriptsContent(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.DeleteTranscriptsContent">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.DeleteTranscriptsContent"]>;
  CommunicationsOnlineMeetingsGetTranscriptsMetadataContent(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.GetTranscriptsMetadataContent">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.GetTranscriptsMetadataContent"]>;
  CommunicationsOnlineMeetingsUpdateTranscriptsMetadataContent(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.UpdateTranscriptsMetadataContent">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.UpdateTranscriptsMetadataContent"]>;
  CommunicationsOnlineMeetingsDeleteTranscriptsMetadataContent(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.DeleteTranscriptsMetadataContent">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.DeleteTranscriptsMetadataContent"]>;
  CommunicationsOnlineMeetingsTranscriptsGetCount7670(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.transcripts.GetCount-7670">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.transcripts.GetCount-7670"]>;
  CommunicationsOnlineMeetingsOnlineMeetingTranscriptsDelta(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.onlineMeeting.transcripts.delta">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.onlineMeeting.transcripts.delta"]>;
  CommunicationsOnlineMeetingsGetCount91a5(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.GetCount-91a5">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.GetCount-91a5"]>;
  CommunicationsOnlineMeetingsCreateOrGet(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.createOrGet">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.createOrGet"]>;
  CommunicationsOnlineMeetingsGetAllRecordings(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.getAllRecordings">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.getAllRecordings"]>;
  CommunicationsOnlineMeetingsGetAllTranscripts(...args: TeamsGraphOperationArgs<"communications.onlineMeetings.getAllTranscripts">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetings.getAllTranscripts"]>;
}

export const TeamsGraphCommunicationsOnlineMeetingGeneratedFunctionNames = [
  "CommunicationsListOnlineMeetings",
  "CommunicationsCreateOnlineMeetings",
  "CommunicationsGetOnlineMeetings",
  "CommunicationsUpdateOnlineMeetings",
  "CommunicationsDeleteOnlineMeetings",
  "CommunicationsOnlineMeetingsListAttendanceReports",
  "CommunicationsOnlineMeetingsCreateAttendanceReports",
  "CommunicationsOnlineMeetingsGetAttendanceReports",
  "CommunicationsOnlineMeetingsUpdateAttendanceReports",
  "CommunicationsOnlineMeetingsDeleteAttendanceReports",
  "CommunicationsOnlineMeetingsAttendanceReportsListAttendanceRecords",
  "CommunicationsOnlineMeetingsAttendanceReportsCreateAttendanceRecords",
  "CommunicationsOnlineMeetingsAttendanceReportsGetAttendanceRecords",
  "CommunicationsOnlineMeetingsAttendanceReportsUpdateAttendanceRecords",
  "CommunicationsOnlineMeetingsAttendanceReportsDeleteAttendanceRecords",
  "CommunicationsOnlineMeetingsAttendanceReportsAttendanceRecordsGetCount73e4",
  "CommunicationsOnlineMeetingsAttendanceReportsGetCountC621",
  "CommunicationsGetOnlineMeetingsAttendeeReport",
  "CommunicationsUpdateOnlineMeetingsAttendeeReport",
  "CommunicationsDeleteOnlineMeetingsAttendeeReport",
  "CommunicationsOnlineMeetingsOnlineMeetingGetVirtualAppointmentJoinWebUrl",
  "CommunicationsOnlineMeetingsOnlineMeetingSendVirtualAppointmentReminderSms",
  "CommunicationsOnlineMeetingsOnlineMeetingSendVirtualAppointmentSms",
  "CommunicationsOnlineMeetingsListRecordings",
  "CommunicationsOnlineMeetingsCreateRecordings",
  "CommunicationsOnlineMeetingsGetRecordings",
  "CommunicationsOnlineMeetingsUpdateRecordings",
  "CommunicationsOnlineMeetingsDeleteRecordings",
  "CommunicationsOnlineMeetingsGetRecordingsContent",
  "CommunicationsOnlineMeetingsUpdateRecordingsContent",
  "CommunicationsOnlineMeetingsDeleteRecordingsContent",
  "CommunicationsOnlineMeetingsRecordingsGetCount0fd0",
  "CommunicationsOnlineMeetingsOnlineMeetingRecordingsDelta",
  "CommunicationsOnlineMeetingsListTranscripts",
  "CommunicationsOnlineMeetingsCreateTranscripts",
  "CommunicationsOnlineMeetingsGetTranscripts",
  "CommunicationsOnlineMeetingsUpdateTranscripts",
  "CommunicationsOnlineMeetingsDeleteTranscripts",
  "CommunicationsOnlineMeetingsGetTranscriptsContent",
  "CommunicationsOnlineMeetingsUpdateTranscriptsContent",
  "CommunicationsOnlineMeetingsDeleteTranscriptsContent",
  "CommunicationsOnlineMeetingsGetTranscriptsMetadataContent",
  "CommunicationsOnlineMeetingsUpdateTranscriptsMetadataContent",
  "CommunicationsOnlineMeetingsDeleteTranscriptsMetadataContent",
  "CommunicationsOnlineMeetingsTranscriptsGetCount7670",
  "CommunicationsOnlineMeetingsOnlineMeetingTranscriptsDelta",
  "CommunicationsOnlineMeetingsGetCount91a5",
  "CommunicationsOnlineMeetingsCreateOrGet",
  "CommunicationsOnlineMeetingsGetAllRecordings",
  "CommunicationsOnlineMeetingsGetAllTranscripts"
] as const satisfies readonly (keyof TeamsGraphCommunicationsOnlineMeetingGeneratedClient)[];

export function createTeamsGraphCommunicationsOnlineMeetingGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphCommunicationsOnlineMeetingGeneratedClient {
  return {
    CommunicationsListOnlineMeetings: (...args) => callOperation("communications.ListOnlineMeetings", ...(args as TeamsGraphOperationArgs<"communications.ListOnlineMeetings">)),
    CommunicationsCreateOnlineMeetings: (...args) => callOperation("communications.CreateOnlineMeetings", ...(args as TeamsGraphOperationArgs<"communications.CreateOnlineMeetings">)),
    CommunicationsGetOnlineMeetings: (...args) => callOperation("communications.GetOnlineMeetings", ...(args as TeamsGraphOperationArgs<"communications.GetOnlineMeetings">)),
    CommunicationsUpdateOnlineMeetings: (...args) => callOperation("communications.UpdateOnlineMeetings", ...(args as TeamsGraphOperationArgs<"communications.UpdateOnlineMeetings">)),
    CommunicationsDeleteOnlineMeetings: (...args) => callOperation("communications.DeleteOnlineMeetings", ...(args as TeamsGraphOperationArgs<"communications.DeleteOnlineMeetings">)),
    CommunicationsOnlineMeetingsListAttendanceReports: (...args) => callOperation("communications.onlineMeetings.ListAttendanceReports", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.ListAttendanceReports">)),
    CommunicationsOnlineMeetingsCreateAttendanceReports: (...args) => callOperation("communications.onlineMeetings.CreateAttendanceReports", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.CreateAttendanceReports">)),
    CommunicationsOnlineMeetingsGetAttendanceReports: (...args) => callOperation("communications.onlineMeetings.GetAttendanceReports", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.GetAttendanceReports">)),
    CommunicationsOnlineMeetingsUpdateAttendanceReports: (...args) => callOperation("communications.onlineMeetings.UpdateAttendanceReports", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.UpdateAttendanceReports">)),
    CommunicationsOnlineMeetingsDeleteAttendanceReports: (...args) => callOperation("communications.onlineMeetings.DeleteAttendanceReports", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.DeleteAttendanceReports">)),
    CommunicationsOnlineMeetingsAttendanceReportsListAttendanceRecords: (...args) => callOperation("communications.onlineMeetings.attendanceReports.ListAttendanceRecords", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.ListAttendanceRecords">)),
    CommunicationsOnlineMeetingsAttendanceReportsCreateAttendanceRecords: (...args) => callOperation("communications.onlineMeetings.attendanceReports.CreateAttendanceRecords", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.CreateAttendanceRecords">)),
    CommunicationsOnlineMeetingsAttendanceReportsGetAttendanceRecords: (...args) => callOperation("communications.onlineMeetings.attendanceReports.GetAttendanceRecords", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.GetAttendanceRecords">)),
    CommunicationsOnlineMeetingsAttendanceReportsUpdateAttendanceRecords: (...args) => callOperation("communications.onlineMeetings.attendanceReports.UpdateAttendanceRecords", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.UpdateAttendanceRecords">)),
    CommunicationsOnlineMeetingsAttendanceReportsDeleteAttendanceRecords: (...args) => callOperation("communications.onlineMeetings.attendanceReports.DeleteAttendanceRecords", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.DeleteAttendanceRecords">)),
    CommunicationsOnlineMeetingsAttendanceReportsAttendanceRecordsGetCount73e4: (...args) => callOperation("communications.onlineMeetings.attendanceReports.attendanceRecords.GetCount-73e4", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.attendanceRecords.GetCount-73e4">)),
    CommunicationsOnlineMeetingsAttendanceReportsGetCountC621: (...args) => callOperation("communications.onlineMeetings.attendanceReports.GetCount-c621", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.attendanceReports.GetCount-c621">)),
    CommunicationsGetOnlineMeetingsAttendeeReport: (...args) => callOperation("communications.GetOnlineMeetingsAttendeeReport", ...(args as TeamsGraphOperationArgs<"communications.GetOnlineMeetingsAttendeeReport">)),
    CommunicationsUpdateOnlineMeetingsAttendeeReport: (...args) => callOperation("communications.UpdateOnlineMeetingsAttendeeReport", ...(args as TeamsGraphOperationArgs<"communications.UpdateOnlineMeetingsAttendeeReport">)),
    CommunicationsDeleteOnlineMeetingsAttendeeReport: (...args) => callOperation("communications.DeleteOnlineMeetingsAttendeeReport", ...(args as TeamsGraphOperationArgs<"communications.DeleteOnlineMeetingsAttendeeReport">)),
    CommunicationsOnlineMeetingsOnlineMeetingGetVirtualAppointmentJoinWebUrl: (...args) => callOperation("communications.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.onlineMeeting.getVirtualAppointmentJoinWebUrl">)),
    CommunicationsOnlineMeetingsOnlineMeetingSendVirtualAppointmentReminderSms: (...args) => callOperation("communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentReminderSms">)),
    CommunicationsOnlineMeetingsOnlineMeetingSendVirtualAppointmentSms: (...args) => callOperation("communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.onlineMeeting.sendVirtualAppointmentSms">)),
    CommunicationsOnlineMeetingsListRecordings: (...args) => callOperation("communications.onlineMeetings.ListRecordings", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.ListRecordings">)),
    CommunicationsOnlineMeetingsCreateRecordings: (...args) => callOperation("communications.onlineMeetings.CreateRecordings", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.CreateRecordings">)),
    CommunicationsOnlineMeetingsGetRecordings: (...args) => callOperation("communications.onlineMeetings.GetRecordings", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.GetRecordings">)),
    CommunicationsOnlineMeetingsUpdateRecordings: (...args) => callOperation("communications.onlineMeetings.UpdateRecordings", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.UpdateRecordings">)),
    CommunicationsOnlineMeetingsDeleteRecordings: (...args) => callOperation("communications.onlineMeetings.DeleteRecordings", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.DeleteRecordings">)),
    CommunicationsOnlineMeetingsGetRecordingsContent: (...args) => callOperation("communications.onlineMeetings.GetRecordingsContent", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.GetRecordingsContent">)),
    CommunicationsOnlineMeetingsUpdateRecordingsContent: (...args) => callOperation("communications.onlineMeetings.UpdateRecordingsContent", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.UpdateRecordingsContent">)),
    CommunicationsOnlineMeetingsDeleteRecordingsContent: (...args) => callOperation("communications.onlineMeetings.DeleteRecordingsContent", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.DeleteRecordingsContent">)),
    CommunicationsOnlineMeetingsRecordingsGetCount0fd0: (...args) => callOperation("communications.onlineMeetings.recordings.GetCount-0fd0", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.recordings.GetCount-0fd0">)),
    CommunicationsOnlineMeetingsOnlineMeetingRecordingsDelta: (...args) => callOperation("communications.onlineMeetings.onlineMeeting.recordings.delta", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.onlineMeeting.recordings.delta">)),
    CommunicationsOnlineMeetingsListTranscripts: (...args) => callOperation("communications.onlineMeetings.ListTranscripts", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.ListTranscripts">)),
    CommunicationsOnlineMeetingsCreateTranscripts: (...args) => callOperation("communications.onlineMeetings.CreateTranscripts", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.CreateTranscripts">)),
    CommunicationsOnlineMeetingsGetTranscripts: (...args) => callOperation("communications.onlineMeetings.GetTranscripts", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.GetTranscripts">)),
    CommunicationsOnlineMeetingsUpdateTranscripts: (...args) => callOperation("communications.onlineMeetings.UpdateTranscripts", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.UpdateTranscripts">)),
    CommunicationsOnlineMeetingsDeleteTranscripts: (...args) => callOperation("communications.onlineMeetings.DeleteTranscripts", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.DeleteTranscripts">)),
    CommunicationsOnlineMeetingsGetTranscriptsContent: (...args) => callOperation("communications.onlineMeetings.GetTranscriptsContent", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.GetTranscriptsContent">)),
    CommunicationsOnlineMeetingsUpdateTranscriptsContent: (...args) => callOperation("communications.onlineMeetings.UpdateTranscriptsContent", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.UpdateTranscriptsContent">)),
    CommunicationsOnlineMeetingsDeleteTranscriptsContent: (...args) => callOperation("communications.onlineMeetings.DeleteTranscriptsContent", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.DeleteTranscriptsContent">)),
    CommunicationsOnlineMeetingsGetTranscriptsMetadataContent: (...args) => callOperation("communications.onlineMeetings.GetTranscriptsMetadataContent", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.GetTranscriptsMetadataContent">)),
    CommunicationsOnlineMeetingsUpdateTranscriptsMetadataContent: (...args) => callOperation("communications.onlineMeetings.UpdateTranscriptsMetadataContent", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.UpdateTranscriptsMetadataContent">)),
    CommunicationsOnlineMeetingsDeleteTranscriptsMetadataContent: (...args) => callOperation("communications.onlineMeetings.DeleteTranscriptsMetadataContent", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.DeleteTranscriptsMetadataContent">)),
    CommunicationsOnlineMeetingsTranscriptsGetCount7670: (...args) => callOperation("communications.onlineMeetings.transcripts.GetCount-7670", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.transcripts.GetCount-7670">)),
    CommunicationsOnlineMeetingsOnlineMeetingTranscriptsDelta: (...args) => callOperation("communications.onlineMeetings.onlineMeeting.transcripts.delta", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.onlineMeeting.transcripts.delta">)),
    CommunicationsOnlineMeetingsGetCount91a5: (...args) => callOperation("communications.onlineMeetings.GetCount-91a5", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.GetCount-91a5">)),
    CommunicationsOnlineMeetingsCreateOrGet: (...args) => callOperation("communications.onlineMeetings.createOrGet", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.createOrGet">)),
    CommunicationsOnlineMeetingsGetAllRecordings: (...args) => callOperation("communications.onlineMeetings.getAllRecordings", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.getAllRecordings">)),
    CommunicationsOnlineMeetingsGetAllTranscripts: (...args) => callOperation("communications.onlineMeetings.getAllTranscripts", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetings.getAllTranscripts">)),
  };
}
