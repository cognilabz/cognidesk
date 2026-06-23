// Generated from the Whereby REST OpenAPI spec (https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json).
// Do not edit by hand; regenerate from the Whereby REST OpenAPI source after checking upstream docs.

import type { WherebyOperationRequestInput } from "./index.js";
import type {
  WherebyFullApiOperationQueryMap,
  WherebyFullApiOperationQueryRequiredMap,
  WherebyFullApiOperationRequestBodyMap,
  WherebyFullApiOperationRequestBodyRequiredMap,
  WherebyFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";

export type WherebyFullApiPathParamValue = string | number;
export interface WherebyFullApiOperationPathParamMap {
  "POST /meetings": {};
  "GET /meetings": {};
  "DELETE /meetings/{meetingId}": { meetingId: WherebyFullApiPathParamValue };
  "GET /meetings/{meetingId}": { meetingId: WherebyFullApiPathParamValue };
  "GET /recordings": {};
  "DELETE /recordings/{recordingId}": { recordingId: WherebyFullApiPathParamValue };
  "GET /recordings/{recordingId}": { recordingId: WherebyFullApiPathParamValue };
  "GET /recordings/{recordingId}/access-link": { recordingId: WherebyFullApiPathParamValue };
  "POST /recordings/bulk-delete": {};
  "POST /transcriptions": {};
  "GET /transcriptions": {};
  "DELETE /transcriptions/{transcriptionId}": { transcriptionId: WherebyFullApiPathParamValue };
  "GET /transcriptions/{transcriptionId}": { transcriptionId: WherebyFullApiPathParamValue };
  "GET /transcriptions/{transcriptionId}/access-link": { transcriptionId: WherebyFullApiPathParamValue };
  "POST /transcriptions/bulk-delete": {};
  "POST /summaries": {};
  "GET /summaries": {};
  "DELETE /summaries/{summaryId}": { summaryId: WherebyFullApiPathParamValue };
  "GET /summaries/{summaryId}": { summaryId: WherebyFullApiPathParamValue };
  "PUT /rooms/{roomName}/theme/tokens": { roomName: WherebyFullApiPathParamValue };
  "PUT /rooms/{roomName}/theme/logo": { roomName: WherebyFullApiPathParamValue };
  "PUT /rooms/{roomName}/theme/room-background": { roomName: WherebyFullApiPathParamValue };
  "PUT /rooms/{roomName}/theme/room-knock-page-background": { roomName: WherebyFullApiPathParamValue };
  "GET /insights/rooms": {};
  "GET /insights/room-sessions": {};
  "GET /insights/participants": {};
  "GET /insights/participant": {};
}

export type WherebyFullApiOperationKey = keyof WherebyFullApiOperationPathParamMap & string;

export type WherebyFullApiOperationQueryInput<OperationKey extends WherebyFullApiOperationKey> =
  WherebyFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: WherebyFullApiOperationQueryMap[OperationKey] }
    : { query?: WherebyFullApiOperationQueryMap[OperationKey] };

export type WherebyFullApiOperationBodyInput<OperationKey extends WherebyFullApiOperationKey> =
  [WherebyFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : WherebyFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: WherebyFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: WherebyFullApiOperationRequestBodyMap[OperationKey] };

export type WherebyFullApiOperationInput<OperationKey extends WherebyFullApiOperationKey> = Omit<WherebyOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends WherebyFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: WherebyFullApiOperationPathParamMap[OperationKey] }
) & WherebyFullApiOperationQueryInput<OperationKey> & WherebyFullApiOperationBodyInput<OperationKey>;

export interface WherebyFullApiOperationRequestMap {
  "POST /meetings": WherebyFullApiOperationInput<"POST /meetings">;
  "GET /meetings": WherebyFullApiOperationInput<"GET /meetings">;
  "DELETE /meetings/{meetingId}": WherebyFullApiOperationInput<"DELETE /meetings/{meetingId}">;
  "GET /meetings/{meetingId}": WherebyFullApiOperationInput<"GET /meetings/{meetingId}">;
  "GET /recordings": WherebyFullApiOperationInput<"GET /recordings">;
  "DELETE /recordings/{recordingId}": WherebyFullApiOperationInput<"DELETE /recordings/{recordingId}">;
  "GET /recordings/{recordingId}": WherebyFullApiOperationInput<"GET /recordings/{recordingId}">;
  "GET /recordings/{recordingId}/access-link": WherebyFullApiOperationInput<"GET /recordings/{recordingId}/access-link">;
  "POST /recordings/bulk-delete": WherebyFullApiOperationInput<"POST /recordings/bulk-delete">;
  "POST /transcriptions": WherebyFullApiOperationInput<"POST /transcriptions">;
  "GET /transcriptions": WherebyFullApiOperationInput<"GET /transcriptions">;
  "DELETE /transcriptions/{transcriptionId}": WherebyFullApiOperationInput<"DELETE /transcriptions/{transcriptionId}">;
  "GET /transcriptions/{transcriptionId}": WherebyFullApiOperationInput<"GET /transcriptions/{transcriptionId}">;
  "GET /transcriptions/{transcriptionId}/access-link": WherebyFullApiOperationInput<"GET /transcriptions/{transcriptionId}/access-link">;
  "POST /transcriptions/bulk-delete": WherebyFullApiOperationInput<"POST /transcriptions/bulk-delete">;
  "POST /summaries": WherebyFullApiOperationInput<"POST /summaries">;
  "GET /summaries": WherebyFullApiOperationInput<"GET /summaries">;
  "DELETE /summaries/{summaryId}": WherebyFullApiOperationInput<"DELETE /summaries/{summaryId}">;
  "GET /summaries/{summaryId}": WherebyFullApiOperationInput<"GET /summaries/{summaryId}">;
  "PUT /rooms/{roomName}/theme/tokens": WherebyFullApiOperationInput<"PUT /rooms/{roomName}/theme/tokens">;
  "PUT /rooms/{roomName}/theme/logo": WherebyFullApiOperationInput<"PUT /rooms/{roomName}/theme/logo">;
  "PUT /rooms/{roomName}/theme/room-background": WherebyFullApiOperationInput<"PUT /rooms/{roomName}/theme/room-background">;
  "PUT /rooms/{roomName}/theme/room-knock-page-background": WherebyFullApiOperationInput<"PUT /rooms/{roomName}/theme/room-knock-page-background">;
  "GET /insights/rooms": WherebyFullApiOperationInput<"GET /insights/rooms">;
  "GET /insights/room-sessions": WherebyFullApiOperationInput<"GET /insights/room-sessions">;
  "GET /insights/participants": WherebyFullApiOperationInput<"GET /insights/participants">;
  "GET /insights/participant": WherebyFullApiOperationInput<"GET /insights/participant">;
}

export type WherebyFullApiOperationArgs<OperationKey extends WherebyFullApiOperationKey> = {} extends WherebyFullApiOperationPathParamMap[OperationKey]
  ? [input?: WherebyFullApiOperationRequestMap[OperationKey]]
  : [input: WherebyFullApiOperationRequestMap[OperationKey]];

export type WherebyGeneratedOperationCaller = <OperationKey extends WherebyFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: WherebyFullApiOperationArgs<OperationKey>
) => Promise<WherebyFullApiOperationResponseMap[OperationKey]>;

export interface WherebyFullApiGeneratedClient {
  CreateMeeting(...args: WherebyFullApiOperationArgs<"POST /meetings">): Promise<WherebyFullApiOperationResponseMap["POST /meetings"]>;
  GetMeetings(...args: WherebyFullApiOperationArgs<"GET /meetings">): Promise<WherebyFullApiOperationResponseMap["GET /meetings"]>;
  DeleteMeeting(...args: WherebyFullApiOperationArgs<"DELETE /meetings/{meetingId}">): Promise<WherebyFullApiOperationResponseMap["DELETE /meetings/{meetingId}"]>;
  GetMeeting(...args: WherebyFullApiOperationArgs<"GET /meetings/{meetingId}">): Promise<WherebyFullApiOperationResponseMap["GET /meetings/{meetingId}"]>;
  GetRecordings(...args: WherebyFullApiOperationArgs<"GET /recordings">): Promise<WherebyFullApiOperationResponseMap["GET /recordings"]>;
  DeleteRecording(...args: WherebyFullApiOperationArgs<"DELETE /recordings/{recordingId}">): Promise<WherebyFullApiOperationResponseMap["DELETE /recordings/{recordingId}"]>;
  GetRecording(...args: WherebyFullApiOperationArgs<"GET /recordings/{recordingId}">): Promise<WherebyFullApiOperationResponseMap["GET /recordings/{recordingId}"]>;
  GetRecordingAccessLink(...args: WherebyFullApiOperationArgs<"GET /recordings/{recordingId}/access-link">): Promise<WherebyFullApiOperationResponseMap["GET /recordings/{recordingId}/access-link"]>;
  BulkDeleteRecordings(...args: WherebyFullApiOperationArgs<"POST /recordings/bulk-delete">): Promise<WherebyFullApiOperationResponseMap["POST /recordings/bulk-delete"]>;
  CreateTranscription(...args: WherebyFullApiOperationArgs<"POST /transcriptions">): Promise<WherebyFullApiOperationResponseMap["POST /transcriptions"]>;
  GetTranscriptions(...args: WherebyFullApiOperationArgs<"GET /transcriptions">): Promise<WherebyFullApiOperationResponseMap["GET /transcriptions"]>;
  DeleteTranscription(...args: WherebyFullApiOperationArgs<"DELETE /transcriptions/{transcriptionId}">): Promise<WherebyFullApiOperationResponseMap["DELETE /transcriptions/{transcriptionId}"]>;
  GetTranscription(...args: WherebyFullApiOperationArgs<"GET /transcriptions/{transcriptionId}">): Promise<WherebyFullApiOperationResponseMap["GET /transcriptions/{transcriptionId}"]>;
  GetTranscriptionAccessLink(...args: WherebyFullApiOperationArgs<"GET /transcriptions/{transcriptionId}/access-link">): Promise<WherebyFullApiOperationResponseMap["GET /transcriptions/{transcriptionId}/access-link"]>;
  BulkDeleteTranscriptions(...args: WherebyFullApiOperationArgs<"POST /transcriptions/bulk-delete">): Promise<WherebyFullApiOperationResponseMap["POST /transcriptions/bulk-delete"]>;
  CreateSummary(...args: WherebyFullApiOperationArgs<"POST /summaries">): Promise<WherebyFullApiOperationResponseMap["POST /summaries"]>;
  GetSummaries(...args: WherebyFullApiOperationArgs<"GET /summaries">): Promise<WherebyFullApiOperationResponseMap["GET /summaries"]>;
  DeleteSummary(...args: WherebyFullApiOperationArgs<"DELETE /summaries/{summaryId}">): Promise<WherebyFullApiOperationResponseMap["DELETE /summaries/{summaryId}"]>;
  GetSummary(...args: WherebyFullApiOperationArgs<"GET /summaries/{summaryId}">): Promise<WherebyFullApiOperationResponseMap["GET /summaries/{summaryId}"]>;
  SetRoomColors(...args: WherebyFullApiOperationArgs<"PUT /rooms/{roomName}/theme/tokens">): Promise<WherebyFullApiOperationResponseMap["PUT /rooms/{roomName}/theme/tokens"]>;
  SetRoomLogo(...args: WherebyFullApiOperationArgs<"PUT /rooms/{roomName}/theme/logo">): Promise<WherebyFullApiOperationResponseMap["PUT /rooms/{roomName}/theme/logo"]>;
  SetRoomBackground(...args: WherebyFullApiOperationArgs<"PUT /rooms/{roomName}/theme/room-background">): Promise<WherebyFullApiOperationResponseMap["PUT /rooms/{roomName}/theme/room-background"]>;
  SetRoomKnockPageBackground(...args: WherebyFullApiOperationArgs<"PUT /rooms/{roomName}/theme/room-knock-page-background">): Promise<WherebyFullApiOperationResponseMap["PUT /rooms/{roomName}/theme/room-knock-page-background"]>;
  GetRoomInsights(...args: WherebyFullApiOperationArgs<"GET /insights/rooms">): Promise<WherebyFullApiOperationResponseMap["GET /insights/rooms"]>;
  GetRoomSessionInsights(...args: WherebyFullApiOperationArgs<"GET /insights/room-sessions">): Promise<WherebyFullApiOperationResponseMap["GET /insights/room-sessions"]>;
  GetParticipants(...args: WherebyFullApiOperationArgs<"GET /insights/participants">): Promise<WherebyFullApiOperationResponseMap["GET /insights/participants"]>;
  GetDetailsForAParticipantInASession(...args: WherebyFullApiOperationArgs<"GET /insights/participant">): Promise<WherebyFullApiOperationResponseMap["GET /insights/participant"]>;
}

export const WHEREBY_FULL_API_GENERATED_FUNCTION_COUNT = 27 as const;
export const WHEREBY_FULL_API_GENERATED_FUNCTION_NAMES = [
  "CreateMeeting",
  "GetMeetings",
  "DeleteMeeting",
  "GetMeeting",
  "GetRecordings",
  "DeleteRecording",
  "GetRecording",
  "GetRecordingAccessLink",
  "BulkDeleteRecordings",
  "CreateTranscription",
  "GetTranscriptions",
  "DeleteTranscription",
  "GetTranscription",
  "GetTranscriptionAccessLink",
  "BulkDeleteTranscriptions",
  "CreateSummary",
  "GetSummaries",
  "DeleteSummary",
  "GetSummary",
  "SetRoomColors",
  "SetRoomLogo",
  "SetRoomBackground",
  "SetRoomKnockPageBackground",
  "GetRoomInsights",
  "GetRoomSessionInsights",
  "GetParticipants",
  "GetDetailsForAParticipantInASession"
] as const satisfies readonly (keyof WherebyFullApiGeneratedClient)[];

export function createWherebyFullApiGeneratedClient(
  callOperation: WherebyGeneratedOperationCaller,
): WherebyFullApiGeneratedClient {
  return {
    CreateMeeting: (...args) => callOperation("POST /meetings", ...(args as WherebyFullApiOperationArgs<"POST /meetings">)),
    GetMeetings: (...args) => callOperation("GET /meetings", ...(args as WherebyFullApiOperationArgs<"GET /meetings">)),
    DeleteMeeting: (...args) => callOperation("DELETE /meetings/{meetingId}", ...(args as WherebyFullApiOperationArgs<"DELETE /meetings/{meetingId}">)),
    GetMeeting: (...args) => callOperation("GET /meetings/{meetingId}", ...(args as WherebyFullApiOperationArgs<"GET /meetings/{meetingId}">)),
    GetRecordings: (...args) => callOperation("GET /recordings", ...(args as WherebyFullApiOperationArgs<"GET /recordings">)),
    DeleteRecording: (...args) => callOperation("DELETE /recordings/{recordingId}", ...(args as WherebyFullApiOperationArgs<"DELETE /recordings/{recordingId}">)),
    GetRecording: (...args) => callOperation("GET /recordings/{recordingId}", ...(args as WherebyFullApiOperationArgs<"GET /recordings/{recordingId}">)),
    GetRecordingAccessLink: (...args) => callOperation("GET /recordings/{recordingId}/access-link", ...(args as WherebyFullApiOperationArgs<"GET /recordings/{recordingId}/access-link">)),
    BulkDeleteRecordings: (...args) => callOperation("POST /recordings/bulk-delete", ...(args as WherebyFullApiOperationArgs<"POST /recordings/bulk-delete">)),
    CreateTranscription: (...args) => callOperation("POST /transcriptions", ...(args as WherebyFullApiOperationArgs<"POST /transcriptions">)),
    GetTranscriptions: (...args) => callOperation("GET /transcriptions", ...(args as WherebyFullApiOperationArgs<"GET /transcriptions">)),
    DeleteTranscription: (...args) => callOperation("DELETE /transcriptions/{transcriptionId}", ...(args as WherebyFullApiOperationArgs<"DELETE /transcriptions/{transcriptionId}">)),
    GetTranscription: (...args) => callOperation("GET /transcriptions/{transcriptionId}", ...(args as WherebyFullApiOperationArgs<"GET /transcriptions/{transcriptionId}">)),
    GetTranscriptionAccessLink: (...args) => callOperation("GET /transcriptions/{transcriptionId}/access-link", ...(args as WherebyFullApiOperationArgs<"GET /transcriptions/{transcriptionId}/access-link">)),
    BulkDeleteTranscriptions: (...args) => callOperation("POST /transcriptions/bulk-delete", ...(args as WherebyFullApiOperationArgs<"POST /transcriptions/bulk-delete">)),
    CreateSummary: (...args) => callOperation("POST /summaries", ...(args as WherebyFullApiOperationArgs<"POST /summaries">)),
    GetSummaries: (...args) => callOperation("GET /summaries", ...(args as WherebyFullApiOperationArgs<"GET /summaries">)),
    DeleteSummary: (...args) => callOperation("DELETE /summaries/{summaryId}", ...(args as WherebyFullApiOperationArgs<"DELETE /summaries/{summaryId}">)),
    GetSummary: (...args) => callOperation("GET /summaries/{summaryId}", ...(args as WherebyFullApiOperationArgs<"GET /summaries/{summaryId}">)),
    SetRoomColors: (...args) => callOperation("PUT /rooms/{roomName}/theme/tokens", ...(args as WherebyFullApiOperationArgs<"PUT /rooms/{roomName}/theme/tokens">)),
    SetRoomLogo: (...args) => callOperation("PUT /rooms/{roomName}/theme/logo", ...(args as WherebyFullApiOperationArgs<"PUT /rooms/{roomName}/theme/logo">)),
    SetRoomBackground: (...args) => callOperation("PUT /rooms/{roomName}/theme/room-background", ...(args as WherebyFullApiOperationArgs<"PUT /rooms/{roomName}/theme/room-background">)),
    SetRoomKnockPageBackground: (...args) => callOperation("PUT /rooms/{roomName}/theme/room-knock-page-background", ...(args as WherebyFullApiOperationArgs<"PUT /rooms/{roomName}/theme/room-knock-page-background">)),
    GetRoomInsights: (...args) => callOperation("GET /insights/rooms", ...(args as WherebyFullApiOperationArgs<"GET /insights/rooms">)),
    GetRoomSessionInsights: (...args) => callOperation("GET /insights/room-sessions", ...(args as WherebyFullApiOperationArgs<"GET /insights/room-sessions">)),
    GetParticipants: (...args) => callOperation("GET /insights/participants", ...(args as WherebyFullApiOperationArgs<"GET /insights/participants">)),
    GetDetailsForAParticipantInASession: (...args) => callOperation("GET /insights/participant", ...(args as WherebyFullApiOperationArgs<"GET /insights/participant">)),
  };
}
