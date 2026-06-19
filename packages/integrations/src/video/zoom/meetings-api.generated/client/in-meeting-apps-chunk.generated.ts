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
export const ZoomMeetingsApiInMeetingAppsOperationKeys = [
  "POST /meetings/{meetingId}/open_apps",
  "DELETE /meetings/{meetingId}/open_apps"
] as const;
export type ZoomMeetingsApiInMeetingAppsOperationKey = typeof ZoomMeetingsApiInMeetingAppsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiInMeetingAppsOperationPathParamMap {
  "POST /meetings/{meetingId}/open_apps": { "meetingId": ZoomMeetingsApiPathParamValue };
  "DELETE /meetings/{meetingId}/open_apps": { "meetingId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiInMeetingAppsOperationRequestMap {
  "POST /meetings/{meetingId}/open_apps": ZoomMeetingsApiOperationInput<"POST /meetings/{meetingId}/open_apps">;
  "DELETE /meetings/{meetingId}/open_apps": ZoomMeetingsApiOperationInput<"DELETE /meetings/{meetingId}/open_apps">;
}

export interface ZoomMeetingsApiInMeetingAppsGeneratedClient {
  MeetingAppAdd(...args: ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/open_apps">): Promise<ZoomMeetingsApiOperationResponseMap["POST /meetings/{meetingId}/open_apps"]>;
  MeetingAppDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/open_apps">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /meetings/{meetingId}/open_apps"]>;
}

export const ZoomMeetingsApiInMeetingAppsGeneratedFunctionNames = [
  "MeetingAppAdd",
  "MeetingAppDelete"
] as const satisfies readonly (keyof ZoomMeetingsApiInMeetingAppsGeneratedClient)[];

export function createZoomMeetingsApiInMeetingAppsGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiInMeetingAppsGeneratedClient {
  return {
    MeetingAppAdd: (...args) => callOperation("POST /meetings/{meetingId}/open_apps", ...(args as ZoomMeetingsApiOperationArgs<"POST /meetings/{meetingId}/open_apps">)),
    MeetingAppDelete: (...args) => callOperation("DELETE /meetings/{meetingId}/open_apps", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /meetings/{meetingId}/open_apps">)),
  };
}
