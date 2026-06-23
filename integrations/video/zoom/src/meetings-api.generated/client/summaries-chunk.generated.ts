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
export const ZoomMeetingsApiSummariesOperationKeys = [
  "GET /meetings/meeting_summaries",
  "GET /meetings/{meetingId}/meeting_summary",
  "DELETE /meetings/{meetingId}/meeting_summary"
] as const;
export type ZoomMeetingsApiSummariesOperationKey = typeof ZoomMeetingsApiSummariesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiSummariesOperationPathParamMap {
  "GET /meetings/meeting_summaries": {};
  "GET /meetings/{meetingId}/meeting_summary": { "meetingId": ZoomMeetingsApiPathParamValue };
  "DELETE /meetings/{meetingId}/meeting_summary": { "meetingId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiSummariesOperationRequestMap {
  "GET /meetings/meeting_summaries": ZoomMeetingsApiOperationInput<"GET /meetings/meeting_summaries">;
  "GET /meetings/{meetingId}/meeting_summary": ZoomMeetingsApiOperationInput<"GET /meetings/{meetingId}/meeting_summary">;
  "DELETE /meetings/{meetingId}/meeting_summary": ZoomMeetingsApiOperationInput<"DELETE /meetings/{meetingId}/meeting_summary">;
}

export interface ZoomMeetingsApiSummariesGeneratedClient {
  Listmeetingsummaries(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/meeting_summaries">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/meeting_summaries"]>;
  Getameetingsummary(...args: ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/meeting_summary">): Promise<ZoomMeetingsApiOperationResponseMap["GET /meetings/{meetingId}/meeting_summary"]>;
  Deletemeetingorwebinarsummary(...args: ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/meeting_summary">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /meetings/{meetingId}/meeting_summary"]>;
}

export const ZoomMeetingsApiSummariesGeneratedFunctionNames = [
  "Listmeetingsummaries",
  "Getameetingsummary",
  "Deletemeetingorwebinarsummary"
] as const satisfies readonly (keyof ZoomMeetingsApiSummariesGeneratedClient)[];

export function createZoomMeetingsApiSummariesGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiSummariesGeneratedClient {
  return {
    Listmeetingsummaries: (...args) => callOperation("GET /meetings/meeting_summaries", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/meeting_summaries">)),
    Getameetingsummary: (...args) => callOperation("GET /meetings/{meetingId}/meeting_summary", ...(args as ZoomMeetingsApiOperationArgs<"GET /meetings/{meetingId}/meeting_summary">)),
    Deletemeetingorwebinarsummary: (...args) => callOperation("DELETE /meetings/{meetingId}/meeting_summary", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/meeting_summary">)),
  };
}
