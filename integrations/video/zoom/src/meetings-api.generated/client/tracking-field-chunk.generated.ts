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
export const ZoomMeetingsApiTrackingFieldOperationKeys = [
  "GET /tracking_fields",
  "POST /tracking_fields",
  "GET /tracking_fields/{fieldId}",
  "DELETE /tracking_fields/{fieldId}",
  "PATCH /tracking_fields/{fieldId}"
] as const;
export type ZoomMeetingsApiTrackingFieldOperationKey = typeof ZoomMeetingsApiTrackingFieldOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiTrackingFieldOperationPathParamMap {
  "GET /tracking_fields": {};
  "POST /tracking_fields": {};
  "GET /tracking_fields/{fieldId}": { "fieldId": ZoomMeetingsApiPathParamValue };
  "DELETE /tracking_fields/{fieldId}": { "fieldId": ZoomMeetingsApiPathParamValue };
  "PATCH /tracking_fields/{fieldId}": { "fieldId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiTrackingFieldOperationRequestMap {
  "GET /tracking_fields": ZoomMeetingsApiOperationInput<"GET /tracking_fields">;
  "POST /tracking_fields": ZoomMeetingsApiOperationInput<"POST /tracking_fields">;
  "GET /tracking_fields/{fieldId}": ZoomMeetingsApiOperationInput<"GET /tracking_fields/{fieldId}">;
  "DELETE /tracking_fields/{fieldId}": ZoomMeetingsApiOperationInput<"DELETE /tracking_fields/{fieldId}">;
  "PATCH /tracking_fields/{fieldId}": ZoomMeetingsApiOperationInput<"PATCH /tracking_fields/{fieldId}">;
}

export interface ZoomMeetingsApiTrackingFieldGeneratedClient {
  TrackingfieldList(...args: ZoomMeetingsApiOperationArgs<"GET /tracking_fields">): Promise<ZoomMeetingsApiOperationResponseMap["GET /tracking_fields"]>;
  TrackingfieldCreate(...args: ZoomMeetingsApiOperationArgs<"POST /tracking_fields">): Promise<ZoomMeetingsApiOperationResponseMap["POST /tracking_fields"]>;
  TrackingfieldGet(...args: ZoomMeetingsApiOperationArgs<"GET /tracking_fields/{fieldId}">): Promise<ZoomMeetingsApiOperationResponseMap["GET /tracking_fields/{fieldId}"]>;
  TrackingfieldDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /tracking_fields/{fieldId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /tracking_fields/{fieldId}"]>;
  TrackingfieldUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /tracking_fields/{fieldId}">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /tracking_fields/{fieldId}"]>;
}

export const ZoomMeetingsApiTrackingFieldGeneratedFunctionNames = [
  "TrackingfieldList",
  "TrackingfieldCreate",
  "TrackingfieldGet",
  "TrackingfieldDelete",
  "TrackingfieldUpdate"
] as const satisfies readonly (keyof ZoomMeetingsApiTrackingFieldGeneratedClient)[];

export function createZoomMeetingsApiTrackingFieldGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiTrackingFieldGeneratedClient {
  return {
    TrackingfieldList: (...args) => callOperation("GET /tracking_fields", ...(args as ZoomMeetingsApiOperationArgs<"GET /tracking_fields">)),
    TrackingfieldCreate: (...args) => callOperation("POST /tracking_fields", ...(args as ZoomMeetingsApiOperationArgs<"POST /tracking_fields">)),
    TrackingfieldGet: (...args) => callOperation("GET /tracking_fields/{fieldId}", ...(args as ZoomMeetingsApiOperationArgs<"GET /tracking_fields/{fieldId}">)),
    TrackingfieldDelete: (...args) => callOperation("DELETE /tracking_fields/{fieldId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /tracking_fields/{fieldId}">)),
    TrackingfieldUpdate: (...args) => callOperation("PATCH /tracking_fields/{fieldId}", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /tracking_fields/{fieldId}">)),
  };
}
