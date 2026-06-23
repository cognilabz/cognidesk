// Generated endpoint chunk for ZoomMeetingsApi.
// Do not edit by hand; refresh this generated provider package after updating provider specs.

import type {
  ZoomMeetingsGeneratedOperationCaller,
  ZoomMeetingsApiOperationArgs,
  ZoomMeetingsApiOperationInput,
  ZoomMeetingsApiPathParamValue,
} from "../../meetings-api-client.generated.js";
import type { ZoomMeetingsApiOperationResponseMap } from "../../meetings-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomMeetingsApiCloudRecordingOperationKeys = [
  "GET /meetings/{meetingId}/recordings",
  "DELETE /meetings/{meetingId}/recordings",
  "GET /meetings/{meetingId}/recordings/analytics_details",
  "GET /meetings/{meetingId}/recordings/analytics_summary",
  "GET /meetings/{meetingId}/recordings/registrants",
  "POST /meetings/{meetingId}/recordings/registrants",
  "GET /meetings/{meetingId}/recordings/registrants/questions",
  "PATCH /meetings/{meetingId}/recordings/registrants/questions",
  "PUT /meetings/{meetingId}/recordings/registrants/status",
  "GET /meetings/{meetingId}/recordings/settings",
  "PATCH /meetings/{meetingId}/recordings/settings",
  "DELETE /meetings/{meetingId}/recordings/{recordingId}",
  "PUT /meetings/{meetingId}/recordings/{recordingId}/status",
  "GET /meetings/{meetingId}/transcript",
  "DELETE /meetings/{meetingId}/transcript",
  "PUT /meetings/{meetingUUID}/recordings/status",
  "GET /users/{userId}/recordings"
] as const;
export type ZoomMeetingsApiCloudRecordingOperationKey = typeof ZoomMeetingsApiCloudRecordingOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiCloudRecordingOperationPathParamMap {
  "GET /meetings/{meetingId}/recordings": { "meetingId": ZoomMeetingsApiPathParamValue };
  "DELETE /meetings/{meetingId}/recordings": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/recordings/analytics_details": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/recordings/analytics_summary": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/recordings/registrants": { "meetingId": ZoomMeetingsApiPathParamValue };
  "POST /meetings/{meetingId}/recordings/registrants": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/recordings/registrants/questions": { "meetingId": ZoomMeetingsApiPathParamValue };
  "PATCH /meetings/{meetingId}/recordings/registrants/questions": { "meetingId": ZoomMeetingsApiPathParamValue };
  "PUT /meetings/{meetingId}/recordings/registrants/status": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/recordings/settings": { "meetingId": ZoomMeetingsApiPathParamValue };
  "PATCH /meetings/{meetingId}/recordings/settings": { "meetingId": ZoomMeetingsApiPathParamValue };
  "DELETE /meetings/{meetingId}/recordings/{recordingId}": { "meetingId": ZoomMeetingsApiPathParamValue; "recordingId": ZoomMeetingsApiPathParamValue };
  "PUT /meetings/{meetingId}/recordings/{recordingId}/status": { "meetingId": ZoomMeetingsApiPathParamValue; "recordingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/transcript": { "meetingId": ZoomMeetingsApiPathParamValue };
  "DELETE /meetings/{meetingId}/transcript": { "meetingId": ZoomMeetingsApiPathParamValue };
  "PUT /meetings/{meetingUUID}/recordings/status": { "meetingUUID": ZoomMeetingsApiPathParamValue };
  "GET /users/{userId}/recordings": { "userId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiCloudRecordingOperationRequestMap {
  "GET /meetings/{meetingId}/recordings": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/recordings">;
  "DELETE /meetings/{meetingId}/recordings": ZoomMeetingsApiOperationInput<"DELETE /meetings/{meetingId}/recordings">;
  "GET /meetings/{meetingId}/recordings/analytics_details": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/recordings/analytics_details">;
  "GET /meetings/{meetingId}/recordings/analytics_summary": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/recordings/analytics_summary">;
  "GET /meetings/{meetingId}/recordings/registrants": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/recordings/registrants">;
  "POST /meetings/{meetingId}/recordings/registrants": ZoomMeetingsApiOperationInput<"POST /meetings/{meetingId}/recordings/registrants">;
  "GET /meetings/{meetingId}/recordings/registrants/questions": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/recordings/registrants/questions">;
  "PATCH /meetings/{meetingId}/recordings/registrants/questions": ZoomMeetingsApiOperationInput<"PATCH /meetings/{meetingId}/recordings/registrants/questions">;
  "PUT /meetings/{meetingId}/recordings/registrants/status": ZoomMeetingsApiOperationInput<"PUT /meetings/{meetingId}/recordings/registrants/status">;
  "GET /meetings/{meetingId}/recordings/settings": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/recordings/settings">;
  "PATCH /meetings/{meetingId}/recordings/settings": ZoomMeetingsApiOperationInput<"PATCH /meetings/{meetingId}/recordings/settings">;
  "DELETE /meetings/{meetingId}/recordings/{recordingId}": ZoomMeetingsApiOperationInput<"DELETE /meetings/{meetingId}/recordings/{recordingId}">;
  "PUT /meetings/{meetingId}/recordings/{recordingId}/status": ZoomMeetingsApiOperationInput<"PUT /meetings/{meetingId}/recordings/{recordingId}/status">;
  "GET /meetings/{meetingId}/transcript": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/transcript">;
  "DELETE /meetings/{meetingId}/transcript": ZoomMeetingsApiOperationInput<"DELETE /meetings/{meetingId}/transcript">;
  "PUT /meetings/{meetingUUID}/recordings/status": ZoomMeetingsApiOperationInput<"PUT /meetings/{meetingUUID}/recordings/status">;
  "GET /users/{userId}/recordings": ZoomMeetingsApiOperationInput<"GET /users/{userId}/recordings">;
}

export interface ZoomMeetingsApiCloudRecordingGeneratedClient {
  RecordingGet(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/recordings">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/recordings"]>;
  RecordingDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/recordings">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /meetings/{meetingId}/recordings"]>;
  AnalyticsDetails(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/recordings/analytics_details">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/recordings/analytics_details"]>;
  AnalyticsSummary(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/recordings/analytics_summary">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/recordings/analytics_summary"]>;
  MeetingRecordingRegistrants(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/recordings/registrants">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/recordings/registrants"]>;
  MeetingRecordingRegistrantCreate(...args: ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/recordings/registrants">): Promise<ZoomMeetingsApiOperationResponseMap["POST /meetings/{meetingId}/recordings/registrants"]>;
  RecordingRegistrantsQuestionsGet(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/recordings/registrants/questions">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/recordings/registrants/questions"]>;
  RecordingRegistrantQuestionUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}/recordings/registrants/questions">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /meetings/{meetingId}/recordings/registrants/questions"]>;
  MeetingRecordingRegistrantStatus(...args: ZoomMeetingsApiOperationArgs<"PUT /meetings/{meetingId}/recordings/registrants/status">): Promise<ZoomMeetingsApiOperationResponseMap["PUT /meetings/{meetingId}/recordings/registrants/status"]>;
  RecordingSettingUpdate(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/recordings/settings">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/recordings/settings"]>;
  RecordingSettingsUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}/recordings/settings">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /meetings/{meetingId}/recordings/settings"]>;
  RecordingDeleteOne(...args: ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/recordings/{recordingId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /meetings/{meetingId}/recordings/{recordingId}"]>;
  RecordingStatusUpdateOne(...args: ZoomMeetingsApiOperationArgs<"PUT /meetings/{meetingId}/recordings/{recordingId}/status">): Promise<ZoomMeetingsApiOperationResponseMap["PUT /meetings/{meetingId}/recordings/{recordingId}/status"]>;
  GetMeetingTranscript(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/transcript">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/transcript"]>;
  DeleteMeetingTranscript(...args: ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/transcript">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /meetings/{meetingId}/transcript"]>;
  RecordingStatusUpdate(...args: ZoomMeetingsApiOperationArgs<"PUT /meetings/{meetingUUID}/recordings/status">): Promise<ZoomMeetingsApiOperationResponseMap["PUT /meetings/{meetingUUID}/recordings/status"]>;
  RecordingsList(...args: ZoomMeetingsApiOperationArgs<"GET /users/{userId}/recordings">): Promise<ZoomMeetingsApiOperationResponseMap["GET /users/{userId}/recordings"]>;
}

export const ZoomMeetingsApiCloudRecordingGeneratedFunctionNames = [
  "RecordingGet",
  "RecordingDelete",
  "AnalyticsDetails",
  "AnalyticsSummary",
  "MeetingRecordingRegistrants",
  "MeetingRecordingRegistrantCreate",
  "RecordingRegistrantsQuestionsGet",
  "RecordingRegistrantQuestionUpdate",
  "MeetingRecordingRegistrantStatus",
  "RecordingSettingUpdate",
  "RecordingSettingsUpdate",
  "RecordingDeleteOne",
  "RecordingStatusUpdateOne",
  "GetMeetingTranscript",
  "DeleteMeetingTranscript",
  "RecordingStatusUpdate",
  "RecordingsList"
] as const satisfies readonly (keyof ZoomMeetingsApiCloudRecordingGeneratedClient)[];

export function createZoomMeetingsApiCloudRecordingGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiCloudRecordingGeneratedClient {
  return {
    RecordingGet: (...args) => callOperation("GET /meetings/{meetingId}/recordings", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/recordings">)),
    RecordingDelete: (...args) => callOperation("DELETE /meetings/{meetingId}/recordings", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/recordings">)),
    AnalyticsDetails: (...args) => callOperation("GET /meetings/{meetingId}/recordings/analytics_details", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/recordings/analytics_details">)),
    AnalyticsSummary: (...args) => callOperation("GET /meetings/{meetingId}/recordings/analytics_summary", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/recordings/analytics_summary">)),
    MeetingRecordingRegistrants: (...args) => callOperation("GET /meetings/{meetingId}/recordings/registrants", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/recordings/registrants">)),
    MeetingRecordingRegistrantCreate: (...args) => callOperation("POST /meetings/{meetingId}/recordings/registrants", ...(args as ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/recordings/registrants">)),
    RecordingRegistrantsQuestionsGet: (...args) => callOperation("GET /meetings/{meetingId}/recordings/registrants/questions", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/recordings/registrants/questions">)),
    RecordingRegistrantQuestionUpdate: (...args) => callOperation("PATCH /meetings/{meetingId}/recordings/registrants/questions", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}/recordings/registrants/questions">)),
    MeetingRecordingRegistrantStatus: (...args) => callOperation("PUT /meetings/{meetingId}/recordings/registrants/status", ...(args as ZoomMeetingsApiOperationArgs<"PUT /meetings/{meetingId}/recordings/registrants/status">)),
    RecordingSettingUpdate: (...args) => callOperation("GET /meetings/{meetingId}/recordings/settings", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/recordings/settings">)),
    RecordingSettingsUpdate: (...args) => callOperation("PATCH /meetings/{meetingId}/recordings/settings", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}/recordings/settings">)),
    RecordingDeleteOne: (...args) => callOperation("DELETE /meetings/{meetingId}/recordings/{recordingId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/recordings/{recordingId}">)),
    RecordingStatusUpdateOne: (...args) => callOperation("PUT /meetings/{meetingId}/recordings/{recordingId}/status", ...(args as ZoomMeetingsApiOperationArgs<"PUT /meetings/{meetingId}/recordings/{recordingId}/status">)),
    GetMeetingTranscript: (...args) => callOperation("GET /meetings/{meetingId}/transcript", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/transcript">)),
    DeleteMeetingTranscript: (...args) => callOperation("DELETE /meetings/{meetingId}/transcript", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/transcript">)),
    RecordingStatusUpdate: (...args) => callOperation("PUT /meetings/{meetingUUID}/recordings/status", ...(args as ZoomMeetingsApiOperationArgs<"PUT /meetings/{meetingUUID}/recordings/status">)),
    RecordingsList: (...args) => callOperation("GET /users/{userId}/recordings", ...(args as ZoomMeetingsApiOperationArgs<"GET /users/{userId}/recordings">)),
  };
}
