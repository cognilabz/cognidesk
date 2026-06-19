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
export const ZoomMeetingsApiSurveysOperationKeys = [
  "GET /meetings/{meetingId}/survey",
  "DELETE /meetings/{meetingId}/survey",
  "PATCH /meetings/{meetingId}/survey"
] as const;
export type ZoomMeetingsApiSurveysOperationKey = typeof ZoomMeetingsApiSurveysOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiSurveysOperationPathParamMap {
  "GET /meetings/{meetingId}/survey": { "meetingId": ZoomMeetingsApiPathParamValue };
  "DELETE /meetings/{meetingId}/survey": { "meetingId": ZoomMeetingsApiPathParamValue };
  "PATCH /meetings/{meetingId}/survey": { "meetingId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiSurveysOperationRequestMap {
  "GET /meetings/{meetingId}/survey": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/survey">;
  "DELETE /meetings/{meetingId}/survey": ZoomMeetingsApiOperationInput<"DELETE /meetings/{meetingId}/survey">;
  "PATCH /meetings/{meetingId}/survey": ZoomMeetingsApiOperationInput<"PATCH /meetings/{meetingId}/survey">;
}

export interface ZoomMeetingsApiSurveysGeneratedClient {
  MeetingSurveyGet(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/survey">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/survey"]>;
  MeetingSurveyDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/survey">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /meetings/{meetingId}/survey"]>;
  MeetingSurveyUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}/survey">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /meetings/{meetingId}/survey"]>;
}

export const ZoomMeetingsApiSurveysGeneratedFunctionNames = [
  "MeetingSurveyGet",
  "MeetingSurveyDelete",
  "MeetingSurveyUpdate"
] as const satisfies readonly (keyof ZoomMeetingsApiSurveysGeneratedClient)[];

export function createZoomMeetingsApiSurveysGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiSurveysGeneratedClient {
  return {
    MeetingSurveyGet: (...args) => callOperation("GET /meetings/{meetingId}/survey", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/survey">)),
    MeetingSurveyDelete: (...args) => callOperation("DELETE /meetings/{meetingId}/survey", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/survey">)),
    MeetingSurveyUpdate: (...args) => callOperation("PATCH /meetings/{meetingId}/survey", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /meetings/{meetingId}/survey">)),
  };
}
