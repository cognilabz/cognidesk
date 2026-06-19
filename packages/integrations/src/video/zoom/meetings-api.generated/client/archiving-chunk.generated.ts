// Generated endpoint chunk for ZoomMeetingsApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomMeetingsGeneratedOperationCaller,
  ZoomMeetingsApiOperationArgs,
  ZoomMeetingsApiOperationInput,
  ZoomMeetingsApiPathParamValue,
} from "../../meetings-api-client.generated.js";
import type { ZoomMeetingsApiOperationResponseMap } from "../../meetings-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomMeetingsApiArchivingOperationKeys = [
  "GET /archive_files",
  "GET /archive_files/statistics",
  "PATCH /archive_files/{fileId}",
  "GET /meetings/{meetingId}/jointoken/local_archiving",
  "GET /past_meetings/{meetingUUID}/archive_files",
  "DELETE /past_meetings/{meetingUUID}/archive_files"
] as const;
export type ZoomMeetingsApiArchivingOperationKey = typeof ZoomMeetingsApiArchivingOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiArchivingOperationPathParamMap {
  "GET /archive_files": {};
  "GET /archive_files/statistics": {};
  "PATCH /archive_files/{fileId}": { "fileId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/jointoken/local_archiving": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /past_meetings/{meetingUUID}/archive_files": { "meetingUUID": ZoomMeetingsApiPathParamValue };
  "DELETE /past_meetings/{meetingUUID}/archive_files": { "meetingUUID": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiArchivingOperationRequestMap {
  "GET /archive_files": ZoomMeetingsApiOperationInput<"GET /archive_files">;
  "GET /archive_files/statistics": ZoomMeetingsApiOperationInput<"GET /archive_files/statistics">;
  "PATCH /archive_files/{fileId}": ZoomMeetingsApiOperationInput<"PATCH /archive_files/{fileId}">;
  "GET /meetings/{meetingId}/jointoken/local_archiving": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/jointoken/local_archiving">;
  "GET /past_meetings/{meetingUUID}/archive_files": ZoomMeetingsApiOperationInput<"GET /past_meetings/{meetingUUID}/archive_files">;
  "DELETE /past_meetings/{meetingUUID}/archive_files": ZoomMeetingsApiOperationInput<"DELETE /past_meetings/{meetingUUID}/archive_files">;
}

export interface ZoomMeetingsApiArchivingGeneratedClient {
  ListArchivedFiles(...args: ZoomMeetingsApiOperationArgs<"GET /archive_files">): Promise<ZoomMeetingsApiOperationResponseMap["GET /archive_files"]>;
  GetArchivedFileStatistics(...args: ZoomMeetingsApiOperationArgs<"GET /archive_files/statistics">): Promise<ZoomMeetingsApiOperationResponseMap["GET /archive_files/statistics"]>;
  UpdateArchivedFile(...args: ZoomMeetingsApiOperationArgs<"PATCH /archive_files/{fileId}">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /archive_files/{fileId}"]>;
  MeetingLocalArchivingArchiveToken(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/jointoken/local_archiving">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/jointoken/local_archiving"]>;
  GetArchivedFiles(...args: ZoomMeetingsApiOperationArgs<"GET /past_meetings/{meetingUUID}/archive_files">): Promise<ZoomMeetingsApiOperationResponseMap["GET /past_meetings/{meetingUUID}/archive_files"]>;
  DeleteArchivedFiles(...args: ZoomMeetingsApiOperationArgs<"DELETE /past_meetings/{meetingUUID}/archive_files">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /past_meetings/{meetingUUID}/archive_files"]>;
}

export const ZoomMeetingsApiArchivingGeneratedFunctionNames = [
  "ListArchivedFiles",
  "GetArchivedFileStatistics",
  "UpdateArchivedFile",
  "MeetingLocalArchivingArchiveToken",
  "GetArchivedFiles",
  "DeleteArchivedFiles"
] as const satisfies readonly (keyof ZoomMeetingsApiArchivingGeneratedClient)[];

export function createZoomMeetingsApiArchivingGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiArchivingGeneratedClient {
  return {
    ListArchivedFiles: (...args) => callOperation("GET /archive_files", ...(args as ZoomMeetingsApiOperationArgs<"GET /archive_files">)),
    GetArchivedFileStatistics: (...args) => callOperation("GET /archive_files/statistics", ...(args as ZoomMeetingsApiOperationArgs<"GET /archive_files/statistics">)),
    UpdateArchivedFile: (...args) => callOperation("PATCH /archive_files/{fileId}", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /archive_files/{fileId}">)),
    MeetingLocalArchivingArchiveToken: (...args) => callOperation("GET /meetings/{meetingId}/jointoken/local_archiving", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/jointoken/local_archiving">)),
    GetArchivedFiles: (...args) => callOperation("GET /past_meetings/{meetingUUID}/archive_files", ...(args as ZoomMeetingsApiOperationArgs<"GET /past_meetings/{meetingUUID}/archive_files">)),
    DeleteArchivedFiles: (...args) => callOperation("DELETE /past_meetings/{meetingUUID}/archive_files", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /past_meetings/{meetingUUID}/archive_files">)),
  };
}
