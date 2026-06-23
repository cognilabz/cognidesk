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
export const ZoomMeetingsApiLiveStreamingOperationKeys = [
  "GET /meetings/{meetingId}/jointoken/live_streaming",
  "GET /meetings/{meetingId}/livestream",
  "PATCH /meetings/{meetingId}/livestream",
  "PATCH /meetings/{meetingId}/livestream/status"
] as const;
export type ZoomMeetingsApiLiveStreamingOperationKey = typeof ZoomMeetingsApiLiveStreamingOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiLiveStreamingOperationPathParamMap {
  "GET /meetings/{meetingId}/jointoken/live_streaming": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/livestream": { "meetingId": ZoomMeetingsApiPathParamValue };
  "PATCH /meetings/{meetingId}/livestream": { "meetingId": ZoomMeetingsApiPathParamValue };
  "PATCH /meetings/{meetingId}/livestream/status": { "meetingId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiLiveStreamingOperationRequestMap {
  "GET /meetings/{meetingId}/jointoken/live_streaming": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/jointoken/live_streaming">;
  "GET /meetings/{meetingId}/livestream": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/livestream">;
  "PATCH /meetings/{meetingId}/livestream": ZoomMeetingsApiOperationInput<"PATCH /meetings/{meetingId}/livestream">;
  "PATCH /meetings/{meetingId}/livestream/status": ZoomMeetingsApiOperationInput<"PATCH /meetings/{meetingId}/livestream/status">;
}

export interface ZoomMeetingsApiLiveStreamingGeneratedClient {
  MeetingLiveStreamingJoinToken(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/jointoken/live_streaming">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/jointoken/live_streaming"]>;
  GetMeetingLiveStreamDetails(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/livestream">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/livestream"]>;
  MeetingLiveStreamUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}/livestream">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /meetings/{meetingId}/livestream"]>;
  MeetingLiveStreamStatusUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}/livestream/status">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /meetings/{meetingId}/livestream/status"]>;
}

export const ZoomMeetingsApiLiveStreamingGeneratedFunctionNames = [
  "MeetingLiveStreamingJoinToken",
  "GetMeetingLiveStreamDetails",
  "MeetingLiveStreamUpdate",
  "MeetingLiveStreamStatusUpdate"
] as const satisfies readonly (keyof ZoomMeetingsApiLiveStreamingGeneratedClient)[];

export function createZoomMeetingsApiLiveStreamingGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiLiveStreamingGeneratedClient {
  return {
    MeetingLiveStreamingJoinToken: (...args) => callOperation("GET /meetings/{meetingId}/jointoken/live_streaming", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/jointoken/live_streaming">)),
    GetMeetingLiveStreamDetails: (...args) => callOperation("GET /meetings/{meetingId}/livestream", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/livestream">)),
    MeetingLiveStreamUpdate: (...args) => callOperation("PATCH /meetings/{meetingId}/livestream", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}/livestream">)),
    MeetingLiveStreamStatusUpdate: (...args) => callOperation("PATCH /meetings/{meetingId}/livestream/status", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}/livestream/status">)),
  };
}
