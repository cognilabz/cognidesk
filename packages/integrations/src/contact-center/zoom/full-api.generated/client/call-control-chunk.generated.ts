// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiCallControlOperationKeys = [
  "PUT /contact_center/engagements/{engagementId}/recording/{command}",
  "POST /contact_center/users/{userId}/commands",
  "GET /contact_center/users/{userId}/devices"
] as const;
export type ZoomContactCenterFullApiCallControlOperationKey = typeof ZoomContactCenterFullApiCallControlOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiCallControlOperationPathParamMap {
  "PUT /contact_center/engagements/{engagementId}/recording/{command}": { "engagementId": ZoomContactCenterFullApiPathParamValue; "command": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/users/{userId}/commands": { "userId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/users/{userId}/devices": { "userId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiCallControlOperationRequestMap {
  "PUT /contact_center/engagements/{engagementId}/recording/{command}": ZoomContactCenterFullApiOperationInput<"PUT /contact_center/engagements/{engagementId}/recording/{command}">;
  "POST /contact_center/users/{userId}/commands": ZoomContactCenterFullApiOperationInput<"POST /contact_center/users/{userId}/commands">;
  "GET /contact_center/users/{userId}/devices": ZoomContactCenterFullApiOperationInput<"GET /contact_center/users/{userId}/devices">;
}

export interface ZoomContactCenterFullApiCallControlGeneratedClient {
  EngagementRecordingControl(...args: ZoomContactCenterFullApiOperationArgs<"PUT /contact_center/engagements/{engagementId}/recording/{command}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PUT /contact_center/engagements/{engagementId}/recording/{command}"]>;
  UserControl(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/users/{userId}/commands">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/users/{userId}/commands"]>;
  Listuserdevices(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/{userId}/devices">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/users/{userId}/devices"]>;
}

export const ZoomContactCenterFullApiCallControlGeneratedFunctionNames = [
  "EngagementRecordingControl",
  "UserControl",
  "Listuserdevices"
] as const satisfies readonly (keyof ZoomContactCenterFullApiCallControlGeneratedClient)[];

export function createZoomContactCenterFullApiCallControlGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiCallControlGeneratedClient {
  return {
    EngagementRecordingControl: (...args) => callOperation("PUT /contact_center/engagements/{engagementId}/recording/{command}", ...(args as ZoomContactCenterFullApiOperationArgs<"PUT /contact_center/engagements/{engagementId}/recording/{command}">)),
    UserControl: (...args) => callOperation("POST /contact_center/users/{userId}/commands", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/users/{userId}/commands">)),
    Listuserdevices: (...args) => callOperation("GET /contact_center/users/{userId}/devices", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/users/{userId}/devices">)),
  };
}
