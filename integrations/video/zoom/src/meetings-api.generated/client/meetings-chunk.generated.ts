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
export const ZoomMeetingsApiMeetingsOperationKeys = [
  "PATCH /live_meetings/{meetingId}/rtms_app/status",
  "GET /meetings/{meetingId}",
  "DELETE /meetings/{meetingId}",
  "PATCH /meetings/{meetingId}",
  "POST /meetings/{meetingId}/sip_dialing",
  "PUT /meetings/{meetingId}/status",
  "GET /past_meetings/{meetingId}",
  "GET /past_meetings/{meetingId}/instances",
  "GET /past_meetings/{meetingId}/participants",
  "GET /past_meetings/{meetingId}/qa",
  "GET /users/{userId}/meetings",
  "POST /users/{userId}/meetings",
  "GET /users/{userId}/upcoming_meetings"
] as const;
export type ZoomMeetingsApiMeetingsOperationKey = typeof ZoomMeetingsApiMeetingsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiMeetingsOperationPathParamMap {
  "PATCH /live_meetings/{meetingId}/rtms_app/status": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}": { "meetingId": ZoomMeetingsApiPathParamValue };
  "DELETE /meetings/{meetingId}": { "meetingId": ZoomMeetingsApiPathParamValue };
  "PATCH /meetings/{meetingId}": { "meetingId": ZoomMeetingsApiPathParamValue };
  "POST /meetings/{meetingId}/sip_dialing": { "meetingId": ZoomMeetingsApiPathParamValue };
  "PUT /meetings/{meetingId}/status": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /past_meetings/{meetingId}": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /past_meetings/{meetingId}/instances": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /past_meetings/{meetingId}/participants": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /past_meetings/{meetingId}/qa": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /users/{userId}/meetings": { "userId": ZoomMeetingsApiPathParamValue };
  "POST /users/{userId}/meetings": { "userId": ZoomMeetingsApiPathParamValue };
  "GET /users/{userId}/upcoming_meetings": { "userId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiMeetingsOperationRequestMap {
  "PATCH /live_meetings/{meetingId}/rtms_app/status": ZoomMeetingsApiOperationInput<"PATCH /live_meetings/{meetingId}/rtms_app/status">;
  "GET /meetings/{meetingId}": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}">;
  "DELETE /meetings/{meetingId}": ZoomMeetingsApiOperationInput<"DELETE /meetings/{meetingId}">;
  "PATCH /meetings/{meetingId}": ZoomMeetingsApiOperationInput<"PATCH /meetings/{meetingId}">;
  "POST /meetings/{meetingId}/sip_dialing": ZoomMeetingsApiOperationInput<"POST /meetings/{meetingId}/sip_dialing">;
  "PUT /meetings/{meetingId}/status": ZoomMeetingsApiOperationInput<"PUT /meetings/{meetingId}/status">;
  "GET /past_meetings/{meetingId}": ZoomMeetingsApiOperationInput<"GET /past_meetings/{meetingId}">;
  "GET /past_meetings/{meetingId}/instances": ZoomMeetingsApiOperationInput<"GET /past_meetings/{meetingId}/instances">;
  "GET /past_meetings/{meetingId}/participants": ZoomMeetingsApiOperationInput<"GET /past_meetings/{meetingId}/participants">;
  "GET /past_meetings/{meetingId}/qa": ZoomMeetingsApiOperationInput<"GET /past_meetings/{meetingId}/qa">;
  "GET /users/{userId}/meetings": ZoomMeetingsApiOperationInput<"GET /users/{userId}/meetings">;
  "POST /users/{userId}/meetings": ZoomMeetingsApiOperationInput<"POST /users/{userId}/meetings">;
  "GET /users/{userId}/upcoming_meetings": ZoomMeetingsApiOperationInput<"GET /users/{userId}/upcoming_meetings">;
}

export interface ZoomMeetingsApiMeetingsGeneratedClient {
  MeetingRTMSStatusUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /live_meetings/{meetingId}/rtms_app/status">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /live_meetings/{meetingId}/rtms_app/status"]>;
  Meeting(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}"]>;
  MeetingDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /meetings/{meetingId}"]>;
  MeetingUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /meetings/{meetingId}"]>;
  GetSipDialingWithPasscode(...args: ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/sip_dialing">): Promise<ZoomMeetingsApiOperationResponseMap["POST /meetings/{meetingId}/sip_dialing"]>;
  MeetingStatus(...args: ZoomMeetingsApiOperationArgs<"PUT /meetings/{meetingId}/status">): Promise<ZoomMeetingsApiOperationResponseMap["PUT /meetings/{meetingId}/status"]>;
  PastMeetingDetails(...args: ZoomMeetingsApiOperationArgs<"GET /past_meetings/{meetingId}">): Promise<ZoomMeetingsApiOperationResponseMap["GET /past_meetings/{meetingId}"]>;
  PastMeetings(...args: ZoomMeetingsApiOperationArgs<"GET /past_meetings/{meetingId}/instances">): Promise<ZoomMeetingsApiOperationResponseMap["GET /past_meetings/{meetingId}/instances"]>;
  PastMeetingParticipants(...args: ZoomMeetingsApiOperationArgs<"GET /past_meetings/{meetingId}/participants">): Promise<ZoomMeetingsApiOperationResponseMap["GET /past_meetings/{meetingId}/participants"]>;
  ListPastMeetingQA(...args: ZoomMeetingsApiOperationArgs<"GET /past_meetings/{meetingId}/qa">): Promise<ZoomMeetingsApiOperationResponseMap["GET /past_meetings/{meetingId}/qa"]>;
  Meetings(...args: ZoomMeetingsApiOperationArgs<"GET /users/{userId}/meetings">): Promise<ZoomMeetingsApiOperationResponseMap["GET /users/{userId}/meetings"]>;
  MeetingCreate(...args: ZoomMeetingsApiOperationArgs<"POST /users/{userId}/meetings">): Promise<ZoomMeetingsApiOperationResponseMap["POST /users/{userId}/meetings"]>;
  ListUpcomingMeeting(...args: ZoomMeetingsApiOperationArgs<"GET /users/{userId}/upcoming_meetings">): Promise<ZoomMeetingsApiOperationResponseMap["GET /users/{userId}/upcoming_meetings"]>;
}

export const ZoomMeetingsApiMeetingsGeneratedFunctionNames = [
  "MeetingRTMSStatusUpdate",
  "Meeting",
  "MeetingDelete",
  "MeetingUpdate",
  "GetSipDialingWithPasscode",
  "MeetingStatus",
  "PastMeetingDetails",
  "PastMeetings",
  "PastMeetingParticipants",
  "ListPastMeetingQA",
  "Meetings",
  "MeetingCreate",
  "ListUpcomingMeeting"
] as const satisfies readonly (keyof ZoomMeetingsApiMeetingsGeneratedClient)[];

export function createZoomMeetingsApiMeetingsGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiMeetingsGeneratedClient {
  return {
    MeetingRTMSStatusUpdate: (...args) => callOperation("PATCH /live_meetings/{meetingId}/rtms_app/status", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /live_meetings/{meetingId}/rtms_app/status">)),
    Meeting: (...args) => callOperation("GET /meetings/{meetingId}", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}">)),
    MeetingDelete: (...args) => callOperation("DELETE /meetings/{meetingId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}">)),
    MeetingUpdate: (...args) => callOperation("PATCH /meetings/{meetingId}", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}">)),
    GetSipDialingWithPasscode: (...args) => callOperation("POST /meetings/{meetingId}/sip_dialing", ...(args as ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/sip_dialing">)),
    MeetingStatus: (...args) => callOperation("PUT /meetings/{meetingId}/status", ...(args as ZoomMeetingsApiOperationArgs<"PUT /meetings/{meetingId}/status">)),
    PastMeetingDetails: (...args) => callOperation("GET /past_meetings/{meetingId}", ...(args as ZoomMeetingsApiOperationArgs<"GET /past_meetings/{meetingId}">)),
    PastMeetings: (...args) => callOperation("GET /past_meetings/{meetingId}/instances", ...(args as ZoomMeetingsApiOperationArgs<"GET /past_meetings/{meetingId}/instances">)),
    PastMeetingParticipants: (...args) => callOperation("GET /past_meetings/{meetingId}/participants", ...(args as ZoomMeetingsApiOperationArgs<"GET /past_meetings/{meetingId}/participants">)),
    ListPastMeetingQA: (...args) => callOperation("GET /past_meetings/{meetingId}/qa", ...(args as ZoomMeetingsApiOperationArgs<"GET /past_meetings/{meetingId}/qa">)),
    Meetings: (...args) => callOperation("GET /users/{userId}/meetings", ...(args as ZoomMeetingsApiOperationArgs<"GET /users/{userId}/meetings">)),
    MeetingCreate: (...args) => callOperation("POST /users/{userId}/meetings", ...(args as ZoomMeetingsApiOperationArgs<"POST /users/{userId}/meetings">)),
    ListUpcomingMeeting: (...args) => callOperation("GET /users/{userId}/upcoming_meetings", ...(args as ZoomMeetingsApiOperationArgs<"GET /users/{userId}/upcoming_meetings">)),
  };
}
