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
export const ZoomMeetingsApiPollsOperationKeys = [
  "POST /meetings/{meetingId}/batch_polls",
  "GET /meetings/{meetingId}/polls",
  "POST /meetings/{meetingId}/polls",
  "GET /meetings/{meetingId}/polls/{pollId}",
  "PUT /meetings/{meetingId}/polls/{pollId}",
  "DELETE /meetings/{meetingId}/polls/{pollId}",
  "GET /past_meetings/{meetingId}/polls"
] as const;
export type ZoomMeetingsApiPollsOperationKey = typeof ZoomMeetingsApiPollsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiPollsOperationPathParamMap {
  "POST /meetings/{meetingId}/batch_polls": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/polls": { "meetingId": ZoomMeetingsApiPathParamValue };
  "POST /meetings/{meetingId}/polls": { "meetingId": ZoomMeetingsApiPathParamValue };
  "GET /meetings/{meetingId}/polls/{pollId}": { "meetingId": ZoomMeetingsApiPathParamValue; "pollId": ZoomMeetingsApiPathParamValue };
  "PUT /meetings/{meetingId}/polls/{pollId}": { "meetingId": ZoomMeetingsApiPathParamValue; "pollId": ZoomMeetingsApiPathParamValue };
  "DELETE /meetings/{meetingId}/polls/{pollId}": { "meetingId": ZoomMeetingsApiPathParamValue; "pollId": ZoomMeetingsApiPathParamValue };
  "GET /past_meetings/{meetingId}/polls": { "meetingId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiPollsOperationRequestMap {
  "POST /meetings/{meetingId}/batch_polls": ZoomMeetingsApiOperationInput<"POST /meetings/{meetingId}/batch_polls">;
  "GET /meetings/{meetingId}/polls": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/polls">;
  "POST /meetings/{meetingId}/polls": ZoomMeetingsApiOperationInput<"POST /meetings/{meetingId}/polls">;
  "GET /meetings/{meetingId}/polls/{pollId}": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/polls/{pollId}">;
  "PUT /meetings/{meetingId}/polls/{pollId}": ZoomMeetingsApiOperationInput<"PUT /meetings/{meetingId}/polls/{pollId}">;
  "DELETE /meetings/{meetingId}/polls/{pollId}": ZoomMeetingsApiOperationInput<"DELETE /meetings/{meetingId}/polls/{pollId}">;
  "GET /past_meetings/{meetingId}/polls": ZoomMeetingsApiOperationInput<"GET /past_meetings/{meetingId}/polls">;
}

export interface ZoomMeetingsApiPollsGeneratedClient {
  CreateBatchPolls(...args: ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/batch_polls">): Promise<ZoomMeetingsApiOperationResponseMap["POST /meetings/{meetingId}/batch_polls"]>;
  MeetingPolls(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/polls">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/polls"]>;
  MeetingPollCreate(...args: ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/polls">): Promise<ZoomMeetingsApiOperationResponseMap["POST /meetings/{meetingId}/polls"]>;
  MeetingPollGet(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/polls/{pollId}">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/polls/{pollId}"]>;
  MeetingPollUpdate(...args: ZoomMeetingsApiOperationArgs<"PUT /meetings/{meetingId}/polls/{pollId}">): Promise<ZoomMeetingsApiOperationResponseMap["PUT /meetings/{meetingId}/polls/{pollId}"]>;
  MeetingPollDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/polls/{pollId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /meetings/{meetingId}/polls/{pollId}"]>;
  ListPastMeetingPolls(...args: ZoomMeetingsApiOperationArgs<"GET /past_meetings/{meetingId}/polls">): Promise<ZoomMeetingsApiOperationResponseMap["GET /past_meetings/{meetingId}/polls"]>;
}

export const ZoomMeetingsApiPollsGeneratedFunctionNames = [
  "CreateBatchPolls",
  "MeetingPolls",
  "MeetingPollCreate",
  "MeetingPollGet",
  "MeetingPollUpdate",
  "MeetingPollDelete",
  "ListPastMeetingPolls"
] as const satisfies readonly (keyof ZoomMeetingsApiPollsGeneratedClient)[];

export function createZoomMeetingsApiPollsGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiPollsGeneratedClient {
  return {
    CreateBatchPolls: (...args) => callOperation("POST /meetings/{meetingId}/batch_polls", ...(args as ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/batch_polls">)),
    MeetingPolls: (...args) => callOperation("GET /meetings/{meetingId}/polls", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/polls">)),
    MeetingPollCreate: (...args) => callOperation("POST /meetings/{meetingId}/polls", ...(args as ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/polls">)),
    MeetingPollGet: (...args) => callOperation("GET /meetings/{meetingId}/polls/{pollId}", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/polls/{pollId}">)),
    MeetingPollUpdate: (...args) => callOperation("PUT /meetings/{meetingId}/polls/{pollId}", ...(args as ZoomMeetingsApiOperationArgs<"PUT /meetings/{meetingId}/polls/{pollId}">)),
    MeetingPollDelete: (...args) => callOperation("DELETE /meetings/{meetingId}/polls/{pollId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/polls/{pollId}">)),
    ListPastMeetingPolls: (...args) => callOperation("GET /past_meetings/{meetingId}/polls", ...(args as ZoomMeetingsApiOperationArgs<"GET /past_meetings/{meetingId}/polls">)),
  };
}
