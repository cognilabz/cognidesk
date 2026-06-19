// Generated from the Whereby REST OpenAPI spec (https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json).
// Do not edit by hand; run scripts/generate-whereby-full-api.mjs after checking upstream docs.

export const WHEREBY_FULL_API_GENERATED_AT = "2026-06-18";
export const WHEREBY_FULL_API_SPEC_SOURCE = "https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json";
export const WHEREBY_FULL_API_DOCS_SOURCE = "https://docs.whereby.com/reference/whereby-rest-api-reference/meetings";
export const WHEREBY_FULL_API_SPEC_VERSION = "v1";
export const WHEREBY_FULL_API_OPENAPI_VERSION = "3.0.0";
export const WHEREBY_FULL_API_PATH_COUNT = 20;
export const WHEREBY_FULL_API_OPERATION_COUNT = 27;

export interface WherebyFullApiOperation {
  uid: string;
  operationId: string;
  functionName: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  summary: string;
  tags: readonly string[];
}

export const WHEREBY_FULL_API_OPERATIONS = JSON.parse("[{\"uid\":\"POST /meetings\",\"operationId\":\"createMeeting\",\"functionName\":\"CreateMeeting\",\"method\":\"POST\",\"path\":\"/meetings\",\"summary\":\"Create meeting\",\"tags\":[]},{\"uid\":\"GET /meetings\",\"operationId\":\"getMeetings\",\"functionName\":\"GetMeetings\",\"method\":\"GET\",\"path\":\"/meetings\",\"summary\":\"Get meetings\",\"tags\":[]},{\"uid\":\"DELETE /meetings/{meetingId}\",\"operationId\":\"deleteMeeting\",\"functionName\":\"DeleteMeeting\",\"method\":\"DELETE\",\"path\":\"/meetings/{meetingId}\",\"summary\":\"Delete meeting\",\"tags\":[]},{\"uid\":\"GET /meetings/{meetingId}\",\"operationId\":\"getMeeting\",\"functionName\":\"GetMeeting\",\"method\":\"GET\",\"path\":\"/meetings/{meetingId}\",\"summary\":\"Get meeting\",\"tags\":[]},{\"uid\":\"GET /recordings\",\"operationId\":\"getRecordings\",\"functionName\":\"GetRecordings\",\"method\":\"GET\",\"path\":\"/recordings\",\"summary\":\"Get recordings\",\"tags\":[]},{\"uid\":\"DELETE /recordings/{recordingId}\",\"operationId\":\"deleteRecording\",\"functionName\":\"DeleteRecording\",\"method\":\"DELETE\",\"path\":\"/recordings/{recordingId}\",\"summary\":\"Delete recording\",\"tags\":[]},{\"uid\":\"GET /recordings/{recordingId}\",\"operationId\":\"getRecording\",\"functionName\":\"GetRecording\",\"method\":\"GET\",\"path\":\"/recordings/{recordingId}\",\"summary\":\"Get recording\",\"tags\":[]},{\"uid\":\"GET /recordings/{recordingId}/access-link\",\"operationId\":\"getRecordingAccessLink\",\"functionName\":\"GetRecordingAccessLink\",\"method\":\"GET\",\"path\":\"/recordings/{recordingId}/access-link\",\"summary\":\"Get recording access link\",\"tags\":[]},{\"uid\":\"POST /recordings/bulk-delete\",\"operationId\":\"bulkDeleteRecordings\",\"functionName\":\"BulkDeleteRecordings\",\"method\":\"POST\",\"path\":\"/recordings/bulk-delete\",\"summary\":\"Bulk delete recordings\",\"tags\":[]},{\"uid\":\"POST /transcriptions\",\"operationId\":\"createTranscription\",\"functionName\":\"CreateTranscription\",\"method\":\"POST\",\"path\":\"/transcriptions\",\"summary\":\"Create transcription\",\"tags\":[]},{\"uid\":\"GET /transcriptions\",\"operationId\":\"getTranscriptions\",\"functionName\":\"GetTranscriptions\",\"method\":\"GET\",\"path\":\"/transcriptions\",\"summary\":\"Get transcriptions\",\"tags\":[]},{\"uid\":\"DELETE /transcriptions/{transcriptionId}\",\"operationId\":\"deleteTranscription\",\"functionName\":\"DeleteTranscription\",\"method\":\"DELETE\",\"path\":\"/transcriptions/{transcriptionId}\",\"summary\":\"Delete transcription\",\"tags\":[]},{\"uid\":\"GET /transcriptions/{transcriptionId}\",\"operationId\":\"getTranscription\",\"functionName\":\"GetTranscription\",\"method\":\"GET\",\"path\":\"/transcriptions/{transcriptionId}\",\"summary\":\"Get transcription\",\"tags\":[]},{\"uid\":\"GET /transcriptions/{transcriptionId}/access-link\",\"operationId\":\"getTranscriptionAccessLink\",\"functionName\":\"GetTranscriptionAccessLink\",\"method\":\"GET\",\"path\":\"/transcriptions/{transcriptionId}/access-link\",\"summary\":\"Get transcription access link\",\"tags\":[]},{\"uid\":\"POST /transcriptions/bulk-delete\",\"operationId\":\"bulkDeleteTranscriptions\",\"functionName\":\"BulkDeleteTranscriptions\",\"method\":\"POST\",\"path\":\"/transcriptions/bulk-delete\",\"summary\":\"Bulk delete transcriptions\",\"tags\":[]},{\"uid\":\"POST /summaries\",\"operationId\":\"createSummary\",\"functionName\":\"CreateSummary\",\"method\":\"POST\",\"path\":\"/summaries\",\"summary\":\"Create summary\",\"tags\":[]},{\"uid\":\"GET /summaries\",\"operationId\":\"getSummaries\",\"functionName\":\"GetSummaries\",\"method\":\"GET\",\"path\":\"/summaries\",\"summary\":\"Get summaries\",\"tags\":[]},{\"uid\":\"DELETE /summaries/{summaryId}\",\"operationId\":\"deleteSummary\",\"functionName\":\"DeleteSummary\",\"method\":\"DELETE\",\"path\":\"/summaries/{summaryId}\",\"summary\":\"Delete summary\",\"tags\":[]},{\"uid\":\"GET /summaries/{summaryId}\",\"operationId\":\"getSummary\",\"functionName\":\"GetSummary\",\"method\":\"GET\",\"path\":\"/summaries/{summaryId}\",\"summary\":\"Get summary\",\"tags\":[]},{\"uid\":\"PUT /rooms/{roomName}/theme/tokens\",\"operationId\":\"setRoomColors\",\"functionName\":\"SetRoomColors\",\"method\":\"PUT\",\"path\":\"/rooms/{roomName}/theme/tokens\",\"summary\":\"Set room colors\",\"tags\":[]},{\"uid\":\"PUT /rooms/{roomName}/theme/logo\",\"operationId\":\"setRoomLogo\",\"functionName\":\"SetRoomLogo\",\"method\":\"PUT\",\"path\":\"/rooms/{roomName}/theme/logo\",\"summary\":\"Set room logo\",\"tags\":[]},{\"uid\":\"PUT /rooms/{roomName}/theme/room-background\",\"operationId\":\"setRoomBackground\",\"functionName\":\"SetRoomBackground\",\"method\":\"PUT\",\"path\":\"/rooms/{roomName}/theme/room-background\",\"summary\":\"Set room background\",\"tags\":[]},{\"uid\":\"PUT /rooms/{roomName}/theme/room-knock-page-background\",\"operationId\":\"setRoomKnockPageBackground\",\"functionName\":\"SetRoomKnockPageBackground\",\"method\":\"PUT\",\"path\":\"/rooms/{roomName}/theme/room-knock-page-background\",\"summary\":\"Set room knock page background\",\"tags\":[]},{\"uid\":\"GET /insights/rooms\",\"operationId\":\"getRoomInsights\",\"functionName\":\"GetRoomInsights\",\"method\":\"GET\",\"path\":\"/insights/rooms\",\"summary\":\"Get room insights\",\"tags\":[]},{\"uid\":\"GET /insights/room-sessions\",\"operationId\":\"getRoomSessionInsights\",\"functionName\":\"GetRoomSessionInsights\",\"method\":\"GET\",\"path\":\"/insights/room-sessions\",\"summary\":\"Get room session insights\",\"tags\":[]},{\"uid\":\"GET /insights/participants\",\"operationId\":\"getParticipants\",\"functionName\":\"GetParticipants\",\"method\":\"GET\",\"path\":\"/insights/participants\",\"summary\":\"Get participants\",\"tags\":[]},{\"uid\":\"GET /insights/participant\",\"operationId\":\"getDetailsForAParticipantInASession\",\"functionName\":\"GetDetailsForAParticipantInASession\",\"method\":\"GET\",\"path\":\"/insights/participant\",\"summary\":\"Get details for a participant in a session\",\"tags\":[]}]") as readonly WherebyFullApiOperation[];
export const WHEREBY_FULL_API_OPERATION_BY_UID = new Map(WHEREBY_FULL_API_OPERATIONS.map((operation) => [operation.uid, operation]));
export const WHEREBY_FULL_API_OPERATION_BY_ID = new Map(WHEREBY_FULL_API_OPERATIONS.map((operation) => [operation.operationId, operation]));

// Hardened literal operation keys for generated SDK typing.
export const WHEREBY_FULL_API_OPERATION_IDS = [
  "createMeeting",
  "getMeetings",
  "deleteMeeting",
  "getMeeting",
  "getRecordings",
  "deleteRecording",
  "getRecording",
  "getRecordingAccessLink",
  "bulkDeleteRecordings",
  "createTranscription",
  "getTranscriptions",
  "deleteTranscription",
  "getTranscription",
  "getTranscriptionAccessLink",
  "bulkDeleteTranscriptions",
  "createSummary",
  "getSummaries",
  "deleteSummary",
  "getSummary",
  "setRoomColors",
  "setRoomLogo",
  "setRoomBackground",
  "setRoomKnockPageBackground",
  "getRoomInsights",
  "getRoomSessionInsights",
  "getParticipants",
  "getDetailsForAParticipantInASession"
] as const;
export const WHEREBY_FULL_API_OPERATION_OPERATION_IDS = [
  "createMeeting",
  "getMeetings",
  "deleteMeeting",
  "getMeeting",
  "getRecordings",
  "deleteRecording",
  "getRecording",
  "getRecordingAccessLink",
  "bulkDeleteRecordings",
  "createTranscription",
  "getTranscriptions",
  "deleteTranscription",
  "getTranscription",
  "getTranscriptionAccessLink",
  "bulkDeleteTranscriptions",
  "createSummary",
  "getSummaries",
  "deleteSummary",
  "getSummary",
  "setRoomColors",
  "setRoomLogo",
  "setRoomBackground",
  "setRoomKnockPageBackground",
  "getRoomInsights",
  "getRoomSessionInsights",
  "getParticipants",
  "getDetailsForAParticipantInASession"
] as const;
export const WHEREBY_FULL_API_OPERATION_UIDS = [
  "POST /meetings",
  "GET /meetings",
  "DELETE /meetings/{meetingId}",
  "GET /meetings/{meetingId}",
  "GET /recordings",
  "DELETE /recordings/{recordingId}",
  "GET /recordings/{recordingId}",
  "GET /recordings/{recordingId}/access-link",
  "POST /recordings/bulk-delete",
  "POST /transcriptions",
  "GET /transcriptions",
  "DELETE /transcriptions/{transcriptionId}",
  "GET /transcriptions/{transcriptionId}",
  "GET /transcriptions/{transcriptionId}/access-link",
  "POST /transcriptions/bulk-delete",
  "POST /summaries",
  "GET /summaries",
  "DELETE /summaries/{summaryId}",
  "GET /summaries/{summaryId}",
  "PUT /rooms/{roomName}/theme/tokens",
  "PUT /rooms/{roomName}/theme/logo",
  "PUT /rooms/{roomName}/theme/room-background",
  "PUT /rooms/{roomName}/theme/room-knock-page-background",
  "GET /insights/rooms",
  "GET /insights/room-sessions",
  "GET /insights/participants",
  "GET /insights/participant"
] as const;
// End hardened literal operation keys.

export type WherebyFullApiOperationUid = typeof WHEREBY_FULL_API_OPERATION_UIDS[number];
