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
export const ZoomContactCenterFullApiOperatingHoursOperationKeys = [
  "GET /contact_center/business_hours",
  "POST /contact_center/business_hours",
  "GET /contact_center/business_hours/{businessHourId}",
  "DELETE /contact_center/business_hours/{businessHourId}",
  "PATCH /contact_center/business_hours/{businessHourId}",
  "GET /contact_center/business_hours/{businessHourId}/flows",
  "GET /contact_center/business_hours/{businessHourId}/queues",
  "GET /contact_center/closures",
  "POST /contact_center/closures",
  "GET /contact_center/closures/{closureSetId}",
  "DELETE /contact_center/closures/{closureSetId}",
  "PATCH /contact_center/closures/{closureSetId}",
  "GET /contact_center/closures/{closureSetId}/flows",
  "GET /contact_center/closures/{closureSetId}/queues"
] as const;
export type ZoomContactCenterFullApiOperatingHoursOperationKey = typeof ZoomContactCenterFullApiOperatingHoursOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiOperatingHoursOperationPathParamMap {
  "GET /contact_center/business_hours": {};
  "POST /contact_center/business_hours": {};
  "GET /contact_center/business_hours/{businessHourId}": { "businessHourId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/business_hours/{businessHourId}": { "businessHourId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/business_hours/{businessHourId}": { "businessHourId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/business_hours/{businessHourId}/flows": { "businessHourId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/business_hours/{businessHourId}/queues": { "businessHourId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/closures": {};
  "POST /contact_center/closures": {};
  "GET /contact_center/closures/{closureSetId}": { "closureSetId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/closures/{closureSetId}": { "closureSetId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/closures/{closureSetId}": { "closureSetId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/closures/{closureSetId}/flows": { "closureSetId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/closures/{closureSetId}/queues": { "closureSetId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiOperatingHoursOperationRequestMap {
  "GET /contact_center/business_hours": ZoomContactCenterFullApiOperationInput<"GET /contact_center/business_hours">;
  "POST /contact_center/business_hours": ZoomContactCenterFullApiOperationInput<"POST /contact_center/business_hours">;
  "GET /contact_center/business_hours/{businessHourId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/business_hours/{businessHourId}">;
  "DELETE /contact_center/business_hours/{businessHourId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/business_hours/{businessHourId}">;
  "PATCH /contact_center/business_hours/{businessHourId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/business_hours/{businessHourId}">;
  "GET /contact_center/business_hours/{businessHourId}/flows": ZoomContactCenterFullApiOperationInput<"GET /contact_center/business_hours/{businessHourId}/flows">;
  "GET /contact_center/business_hours/{businessHourId}/queues": ZoomContactCenterFullApiOperationInput<"GET /contact_center/business_hours/{businessHourId}/queues">;
  "GET /contact_center/closures": ZoomContactCenterFullApiOperationInput<"GET /contact_center/closures">;
  "POST /contact_center/closures": ZoomContactCenterFullApiOperationInput<"POST /contact_center/closures">;
  "GET /contact_center/closures/{closureSetId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/closures/{closureSetId}">;
  "DELETE /contact_center/closures/{closureSetId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/closures/{closureSetId}">;
  "PATCH /contact_center/closures/{closureSetId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/closures/{closureSetId}">;
  "GET /contact_center/closures/{closureSetId}/flows": ZoomContactCenterFullApiOperationInput<"GET /contact_center/closures/{closureSetId}/flows">;
  "GET /contact_center/closures/{closureSetId}/queues": ZoomContactCenterFullApiOperationInput<"GET /contact_center/closures/{closureSetId}/queues">;
}

export interface ZoomContactCenterFullApiOperatingHoursGeneratedClient {
  ListBusinessHours(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/business_hours">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/business_hours"]>;
  BusinessHourCreate(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/business_hours">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/business_hours"]>;
  GetABusinessHour(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/business_hours/{businessHourId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/business_hours/{businessHourId}"]>;
  BusinessHourDelete(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/business_hours/{businessHourId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/business_hours/{businessHourId}"]>;
  BusinessHourUpdate(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/business_hours/{businessHourId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/business_hours/{businessHourId}"]>;
  ListBusinessHourFlows(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/business_hours/{businessHourId}/flows">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/business_hours/{businessHourId}/flows"]>;
  ListBusinessHourQueues(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/business_hours/{businessHourId}/queues">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/business_hours/{businessHourId}/queues"]>;
  ListClosures(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/closures">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/closures"]>;
  ClosuresSetCreate(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/closures">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/closures"]>;
  GetAClosureSet(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/closures/{closureSetId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/closures/{closureSetId}"]>;
  ClosureSetDelete(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/closures/{closureSetId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/closures/{closureSetId}"]>;
  ClosureSetUpdate(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/closures/{closureSetId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/closures/{closureSetId}"]>;
  ListClosureSetFlows(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/closures/{closureSetId}/flows">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/closures/{closureSetId}/flows"]>;
  ListClosureSetQueues(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/closures/{closureSetId}/queues">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/closures/{closureSetId}/queues"]>;
}

export const ZoomContactCenterFullApiOperatingHoursGeneratedFunctionNames = [
  "ListBusinessHours",
  "BusinessHourCreate",
  "GetABusinessHour",
  "BusinessHourDelete",
  "BusinessHourUpdate",
  "ListBusinessHourFlows",
  "ListBusinessHourQueues",
  "ListClosures",
  "ClosuresSetCreate",
  "GetAClosureSet",
  "ClosureSetDelete",
  "ClosureSetUpdate",
  "ListClosureSetFlows",
  "ListClosureSetQueues"
] as const satisfies readonly (keyof ZoomContactCenterFullApiOperatingHoursGeneratedClient)[];

export function createZoomContactCenterFullApiOperatingHoursGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiOperatingHoursGeneratedClient {
  return {
    ListBusinessHours: (...args) => callOperation("GET /contact_center/business_hours", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/business_hours">)),
    BusinessHourCreate: (...args) => callOperation("POST /contact_center/business_hours", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/business_hours">)),
    GetABusinessHour: (...args) => callOperation("GET /contact_center/business_hours/{businessHourId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/business_hours/{businessHourId}">)),
    BusinessHourDelete: (...args) => callOperation("DELETE /contact_center/business_hours/{businessHourId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/business_hours/{businessHourId}">)),
    BusinessHourUpdate: (...args) => callOperation("PATCH /contact_center/business_hours/{businessHourId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/business_hours/{businessHourId}">)),
    ListBusinessHourFlows: (...args) => callOperation("GET /contact_center/business_hours/{businessHourId}/flows", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/business_hours/{businessHourId}/flows">)),
    ListBusinessHourQueues: (...args) => callOperation("GET /contact_center/business_hours/{businessHourId}/queues", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/business_hours/{businessHourId}/queues">)),
    ListClosures: (...args) => callOperation("GET /contact_center/closures", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/closures">)),
    ClosuresSetCreate: (...args) => callOperation("POST /contact_center/closures", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/closures">)),
    GetAClosureSet: (...args) => callOperation("GET /contact_center/closures/{closureSetId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/closures/{closureSetId}">)),
    ClosureSetDelete: (...args) => callOperation("DELETE /contact_center/closures/{closureSetId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/closures/{closureSetId}">)),
    ClosureSetUpdate: (...args) => callOperation("PATCH /contact_center/closures/{closureSetId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/closures/{closureSetId}">)),
    ListClosureSetFlows: (...args) => callOperation("GET /contact_center/closures/{closureSetId}/flows", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/closures/{closureSetId}/flows">)),
    ListClosureSetQueues: (...args) => callOperation("GET /contact_center/closures/{closureSetId}/queues", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/closures/{closureSetId}/queues">)),
  };
}
