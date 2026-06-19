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
export const ZoomMeetingsApiH323DevicesOperationKeys = [
  "GET /h323/devices",
  "POST /h323/devices",
  "DELETE /h323/devices/{deviceId}",
  "PATCH /h323/devices/{deviceId}"
] as const;
export type ZoomMeetingsApiH323DevicesOperationKey = typeof ZoomMeetingsApiH323DevicesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomMeetingsApiH323DevicesOperationPathParamMap {
  "GET /h323/devices": {};
  "POST /h323/devices": {};
  "DELETE /h323/devices/{deviceId}": { "deviceId": ZoomMeetingsApiPathParamValue };
  "PATCH /h323/devices/{deviceId}": { "deviceId": ZoomMeetingsApiPathParamValue };
}

export interface ZoomMeetingsApiH323DevicesOperationRequestMap {
  "GET /h323/devices": ZoomMeetingsApiOperationInput<"GET /h323/devices">;
  "POST /h323/devices": ZoomMeetingsApiOperationInput<"POST /h323/devices">;
  "DELETE /h323/devices/{deviceId}": ZoomMeetingsApiOperationInput<"DELETE /h323/devices/{deviceId}">;
  "PATCH /h323/devices/{deviceId}": ZoomMeetingsApiOperationInput<"PATCH /h323/devices/{deviceId}">;
}

export interface ZoomMeetingsApiH323DevicesGeneratedClient {
  DeviceList(...args: ZoomMeetingsApiOperationArgs<"GET /h323/devices">): Promise<ZoomMeetingsApiOperationResponseMap["GET /h323/devices"]>;
  DeviceCreate(...args: ZoomMeetingsApiOperationArgs<"POST /h323/devices">): Promise<ZoomMeetingsApiOperationResponseMap["POST /h323/devices"]>;
  DeviceDelete(...args: ZoomMeetingsApiOperationArgs<"DELETE /h323/devices/{deviceId}">): Promise<ZoomMeetingsApiOperationResponseMap["DELETE /h323/devices/{deviceId}"]>;
  DeviceUpdate(...args: ZoomMeetingsApiOperationArgs<"PATCH /h323/devices/{deviceId}">): Promise<ZoomMeetingsApiOperationResponseMap["PATCH /h323/devices/{deviceId}"]>;
}

export const ZoomMeetingsApiH323DevicesGeneratedFunctionNames = [
  "DeviceList",
  "DeviceCreate",
  "DeviceDelete",
  "DeviceUpdate"
] as const satisfies readonly (keyof ZoomMeetingsApiH323DevicesGeneratedClient)[];

export function createZoomMeetingsApiH323DevicesGeneratedClient(
  callOperation: ZoomMeetingsGeneratedOperationCaller,
): ZoomMeetingsApiH323DevicesGeneratedClient {
  return {
    DeviceList: (...args) => callOperation("GET /h323/devices", ...(args as ZoomMeetingsApiOperationArgs<"GET /h323/devices">)),
    DeviceCreate: (...args) => callOperation("POST /h323/devices", ...(args as ZoomMeetingsApiOperationArgs<"POST /h323/devices">)),
    DeviceDelete: (...args) => callOperation("DELETE /h323/devices/{deviceId}", ...(args as ZoomMeetingsApiOperationArgs<"DELETE /h323/devices/{deviceId}">)),
    DeviceUpdate: (...args) => callOperation("PATCH /h323/devices/{deviceId}", ...(args as ZoomMeetingsApiOperationArgs<"PATCH /h323/devices/{deviceId}">)),
  };
}
