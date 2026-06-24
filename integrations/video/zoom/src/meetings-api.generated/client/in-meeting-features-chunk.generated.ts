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
export const ZoomMeetingsApiInMeetingFeaturesOperationKeys = [
  "DELETE /live_meetings/{meetingId}/chat/messages/{messageId}",
  "PATCH /live_meetings/{meetingId}/chat/messages/{messageId}",
  "PATCH /live_meetings/{meetingId}/events",
  "GET /meetings/{meetingId}/jointoken/local_recording",
  "GET /meetings/{meetingId}/token"
] as const;
export type ZoomMeetingsApiInMeetingFeaturesOperationKey = typeof ZoomMeetingsApiInMeetingFeaturesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiInMeetingFeaturesOperationPathParamMap {
  "DELETE /live_meetings/{meetingId}/chat/messages/{messageId}": { "meetingId": ZoomMeetingsApiPathParamValue; "messageId": ZoomMeetingsApiPathParamValue };
  "PATCH /live_meetings/{meetingId}/chat/messages/{messageId}": { "meetingId": ZoomMeetingsApiPathParamValue; "messageId": ZoomMeetingsApiPathParamValue };
  "PATCH /live_meetings/{meetingId}/events": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/jointoken/local_recording": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/token": { "meetingId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiInMeetingFeaturesOperationRequestMap {
  "DELETE /live_meetings/{meetingId}/chat/messages/{messageId}": ZoomMeetingsApiOperationInput<"DELETE /live_meetings/{meetingId}/chat/messages/{messageId}">;
  "PATCH /live_meetings/{meetingId}/chat/messages/{messageId}": ZoomMeetingsApiOperationInput<"PATCH /live_meetings/{meetingId}/chat/messages/{messageId}">;
  "PATCH /live_meetings/{meetingId}/events": ZoomMeetingsApiOperationInput<"PATCH /live_meetings/{meetingId}/events">;
  "GET /meetings/{meetingId}/jointoken/local_recording": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/jointoken/local_recording">;
  "GET /meetings/{meetingId}/token": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/token">;
}

export interface ZoomMeetingsApiInMeetingFeaturesGeneratedClient {
  DeleteMeetingChatMessageById(...args: ZoomMeetingsApiOperationArgs<"DELETE /live_meetings/{meetingId}/chat/messages/{messageId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /live_meetings/{meetingId}/chat/messages/{messageId}"]>;
  UpdateMeetingChatMessageById(...args: ZoomMeetingsApiOperationArgs<"PATCH /live_meetings/{meetingId}/chat/messages/{messageId}">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /live_meetings/{meetingId}/chat/messages/{messageId}"]>;
  InMeetingControl(...args: ZoomMeetingsApiOperationArgs<"PATCH /live_meetings/{meetingId}/events">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /live_meetings/{meetingId}/events"]>;
  MeetingLocalRecordingJoinToken(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/jointoken/local_recording">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/jointoken/local_recording"]>;
  MeetingToken(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/token">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/token"]>;
}

export const ZoomMeetingsApiInMeetingFeaturesGeneratedFunctionNames = [
  "DeleteMeetingChatMessageById",
  "UpdateMeetingChatMessageById",
  "InMeetingControl",
  "MeetingLocalRecordingJoinToken",
  "MeetingToken"
] as const satisfies readonly (keyof ZoomMeetingsApiInMeetingFeaturesGeneratedClient)[];

export function createZoomMeetingsApiInMeetingFeaturesGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiInMeetingFeaturesGeneratedClient {
  return {
    DeleteMeetingChatMessageById: (...args) => callOperation("DELETE /live_meetings/{meetingId}/chat/messages/{messageId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /live_meetings/{meetingId}/chat/messages/{messageId}">)),
    UpdateMeetingChatMessageById: (...args) => callOperation("PATCH /live_meetings/{meetingId}/chat/messages/{messageId}", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /live_meetings/{meetingId}/chat/messages/{messageId}">)),
    InMeetingControl: (...args) => callOperation("PATCH /live_meetings/{meetingId}/events", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /live_meetings/{meetingId}/events">)),
    MeetingLocalRecordingJoinToken: (...args) => callOperation("GET /meetings/{meetingId}/jointoken/local_recording", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/jointoken/local_recording">)),
    MeetingToken: (...args) => callOperation("GET /meetings/{meetingId}/token", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/token">)),
  };
}
