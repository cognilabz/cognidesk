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
export const ZoomContactCenterFullApiRTMSOperationKeys = [
  "PUT /contact_center/{engagementId}/rtms_app/status"
] as const;
export type ZoomContactCenterFullApiRTMSOperationKey = typeof ZoomContactCenterFullApiRTMSOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiRTMSOperationPathParamMap {
  "PUT /contact_center/{engagementId}/rtms_app/status": { "engagementId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiRTMSOperationRequestMap {
  "PUT /contact_center/{engagementId}/rtms_app/status": ZoomContactCenterFullApiOperationInput<"PUT /contact_center/{engagementId}/rtms_app/status">;
}

export interface ZoomContactCenterFullApiRTMSGeneratedClient {
  EngagementRTMSStatusUpdate(...args: ZoomContactCenterFullApiOperationArgs<"PUT /contact_center/{engagementId}/rtms_app/status">): Promise<ZoomContactCenterFullApiOperationResponseMap["PUT /contact_center/{engagementId}/rtms_app/status"]>;
}

export const ZoomContactCenterFullApiRTMSGeneratedFunctionNames = [
  "EngagementRTMSStatusUpdate"
] as const satisfies readonly (keyof ZoomContactCenterFullApiRTMSGeneratedClient)[];

export function createZoomContactCenterFullApiRTMSGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiRTMSGeneratedClient {
  return {
    EngagementRTMSStatusUpdate: (...args) => callOperation("PUT /contact_center/{engagementId}/rtms_app/status", ...(args as ZoomContactCenterFullApiOperationArgs<"PUT /contact_center/{engagementId}/rtms_app/status">)),
  };
}
