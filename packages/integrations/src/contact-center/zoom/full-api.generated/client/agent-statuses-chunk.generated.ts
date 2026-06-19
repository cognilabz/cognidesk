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
export const ZoomContactCenterFullApiAgentStatusesOperationKeys = [
  "GET /contact_center/system_statuses",
  "POST /contact_center/system_statuses",
  "GET /contact_center/system_statuses/{statusId}",
  "DELETE /contact_center/system_statuses/{statusId}",
  "PATCH /contact_center/system_statuses/{statusId}"
] as const;
export type ZoomContactCenterFullApiAgentStatusesOperationKey = typeof ZoomContactCenterFullApiAgentStatusesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiAgentStatusesOperationPathParamMap {
  "GET /contact_center/system_statuses": {};
  "POST /contact_center/system_statuses": {};
  "GET /contact_center/system_statuses/{statusId}": { "statusId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/system_statuses/{statusId}": { "statusId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/system_statuses/{statusId}": { "statusId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiAgentStatusesOperationRequestMap {
  "GET /contact_center/system_statuses": ZoomContactCenterFullApiOperationInput<"GET /contact_center/system_statuses">;
  "POST /contact_center/system_statuses": ZoomContactCenterFullApiOperationInput<"POST /contact_center/system_statuses">;
  "GET /contact_center/system_statuses/{statusId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/system_statuses/{statusId}">;
  "DELETE /contact_center/system_statuses/{statusId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/system_statuses/{statusId}">;
  "PATCH /contact_center/system_statuses/{statusId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/system_statuses/{statusId}">;
}

export interface ZoomContactCenterFullApiAgentStatusesGeneratedClient {
  ListSystemStatus(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/system_statuses">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/system_statuses"]>;
  CreateSystemStatus(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/system_statuses">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/system_statuses"]>;
  GetAStatus(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/system_statuses/{statusId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/system_statuses/{statusId}"]>;
  DeleteSystemStatus(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/system_statuses/{statusId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/system_statuses/{statusId}"]>;
  UpdateSystemStatus(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/system_statuses/{statusId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/system_statuses/{statusId}"]>;
}

export const ZoomContactCenterFullApiAgentStatusesGeneratedFunctionNames = [
  "ListSystemStatus",
  "CreateSystemStatus",
  "GetAStatus",
  "DeleteSystemStatus",
  "UpdateSystemStatus"
] as const satisfies readonly (keyof ZoomContactCenterFullApiAgentStatusesGeneratedClient)[];

export function createZoomContactCenterFullApiAgentStatusesGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiAgentStatusesGeneratedClient {
  return {
    ListSystemStatus: (...args) => callOperation("GET /contact_center/system_statuses", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/system_statuses">)),
    CreateSystemStatus: (...args) => callOperation("POST /contact_center/system_statuses", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/system_statuses">)),
    GetAStatus: (...args) => callOperation("GET /contact_center/system_statuses/{statusId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/system_statuses/{statusId}">)),
    DeleteSystemStatus: (...args) => callOperation("DELETE /contact_center/system_statuses/{statusId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/system_statuses/{statusId}">)),
    UpdateSystemStatus: (...args) => callOperation("PATCH /contact_center/system_statuses/{statusId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/system_statuses/{statusId}">)),
  };
}
