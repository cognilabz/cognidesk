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
export const ZoomContactCenterFullApiFlowsOperationKeys = [
  "GET /contact_center/flows",
  "POST /contact_center/flows",
  "GET /contact_center/flows/{flowId}",
  "DELETE /contact_center/flows/{flowId}",
  "PATCH /contact_center/flows/{flowId}",
  "GET /contact_center/flows/{flowId}/entry_points",
  "POST /contact_center/flows/{flowId}/entry_points",
  "DELETE /contact_center/flows/{flowId}/entry_points",
  "GET /contact_center/flows/{flowId}/export",
  "PUT /contact_center/flows/{flowId}/publish",
  "GET /contact_center/flows_entry_points"
] as const;
export type ZoomContactCenterFullApiFlowsOperationKey = typeof ZoomContactCenterFullApiFlowsOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiFlowsOperationPathParamMap {
  "GET /contact_center/flows": {};
  "POST /contact_center/flows": {};
  "GET /contact_center/flows/{flowId}": { "flowId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/flows/{flowId}": { "flowId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/flows/{flowId}": { "flowId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/flows/{flowId}/entry_points": { "flowId": ZoomContactCenterFullApiPathParamValue };
  "POST /contact_center/flows/{flowId}/entry_points": { "flowId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/flows/{flowId}/entry_points": { "flowId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/flows/{flowId}/export": { "flowId": ZoomContactCenterFullApiPathParamValue };
  "PUT /contact_center/flows/{flowId}/publish": { "flowId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/flows_entry_points": {};
}

export interface ZoomContactCenterFullApiFlowsOperationRequestMap {
  "GET /contact_center/flows": ZoomContactCenterFullApiOperationInput<"GET /contact_center/flows">;
  "POST /contact_center/flows": ZoomContactCenterFullApiOperationInput<"POST /contact_center/flows">;
  "GET /contact_center/flows/{flowId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/flows/{flowId}">;
  "DELETE /contact_center/flows/{flowId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/flows/{flowId}">;
  "PATCH /contact_center/flows/{flowId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/flows/{flowId}">;
  "GET /contact_center/flows/{flowId}/entry_points": ZoomContactCenterFullApiOperationInput<"GET /contact_center/flows/{flowId}/entry_points">;
  "POST /contact_center/flows/{flowId}/entry_points": ZoomContactCenterFullApiOperationInput<"POST /contact_center/flows/{flowId}/entry_points">;
  "DELETE /contact_center/flows/{flowId}/entry_points": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/flows/{flowId}/entry_points">;
  "GET /contact_center/flows/{flowId}/export": ZoomContactCenterFullApiOperationInput<"GET /contact_center/flows/{flowId}/export">;
  "PUT /contact_center/flows/{flowId}/publish": ZoomContactCenterFullApiOperationInput<"PUT /contact_center/flows/{flowId}/publish">;
  "GET /contact_center/flows_entry_points": ZoomContactCenterFullApiOperationInput<"GET /contact_center/flows_entry_points">;
}

export interface ZoomContactCenterFullApiFlowsGeneratedClient {
  ListFlows(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/flows">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/flows"]>;
  ImportFlow(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/flows">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/flows"]>;
  GetAFlow(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/flows/{flowId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/flows/{flowId}"]>;
  DeleteFlow(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/flows/{flowId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/flows/{flowId}"]>;
  EditFlow(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/flows/{flowId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/flows/{flowId}"]>;
  ListFlowEntryPoints(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/flows/{flowId}/entry_points">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/flows/{flowId}/entry_points"]>;
  AddFlowEntryPoints(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/flows/{flowId}/entry_points">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/flows/{flowId}/entry_points"]>;
  RemoveFlowEntryPoints(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/flows/{flowId}/entry_points">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/flows/{flowId}/entry_points"]>;
  ExportFlow(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/flows/{flowId}/export">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/flows/{flowId}/export"]>;
  PublishFlow(...args: ZoomContactCenterFullApiOperationArgs<"PUT /contact_center/flows/{flowId}/publish">): Promise<ZoomContactCenterFullApiOperationResponseMap["PUT /contact_center/flows/{flowId}/publish"]>;
  ListentryPoints(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/flows_entry_points">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/flows_entry_points"]>;
}

export const ZoomContactCenterFullApiFlowsGeneratedFunctionNames = [
  "ListFlows",
  "ImportFlow",
  "GetAFlow",
  "DeleteFlow",
  "EditFlow",
  "ListFlowEntryPoints",
  "AddFlowEntryPoints",
  "RemoveFlowEntryPoints",
  "ExportFlow",
  "PublishFlow",
  "ListentryPoints"
] as const satisfies readonly (keyof ZoomContactCenterFullApiFlowsGeneratedClient)[];

export function createZoomContactCenterFullApiFlowsGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiFlowsGeneratedClient {
  return {
    ListFlows: (...args) => callOperation("GET /contact_center/flows", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/flows">)),
    ImportFlow: (...args) => callOperation("POST /contact_center/flows", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/flows">)),
    GetAFlow: (...args) => callOperation("GET /contact_center/flows/{flowId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/flows/{flowId}">)),
    DeleteFlow: (...args) => callOperation("DELETE /contact_center/flows/{flowId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/flows/{flowId}">)),
    EditFlow: (...args) => callOperation("PATCH /contact_center/flows/{flowId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/flows/{flowId}">)),
    ListFlowEntryPoints: (...args) => callOperation("GET /contact_center/flows/{flowId}/entry_points", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/flows/{flowId}/entry_points">)),
    AddFlowEntryPoints: (...args) => callOperation("POST /contact_center/flows/{flowId}/entry_points", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/flows/{flowId}/entry_points">)),
    RemoveFlowEntryPoints: (...args) => callOperation("DELETE /contact_center/flows/{flowId}/entry_points", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/flows/{flowId}/entry_points">)),
    ExportFlow: (...args) => callOperation("GET /contact_center/flows/{flowId}/export", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/flows/{flowId}/export">)),
    PublishFlow: (...args) => callOperation("PUT /contact_center/flows/{flowId}/publish", ...(args as ZoomContactCenterFullApiOperationArgs<"PUT /contact_center/flows/{flowId}/publish">)),
    ListentryPoints: (...args) => callOperation("GET /contact_center/flows_entry_points", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/flows_entry_points">)),
  };
}
