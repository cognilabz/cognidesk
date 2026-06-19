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
export const ZoomContactCenterFullApiVariablesOperationKeys = [
  "GET /contact_center/variable_logs",
  "GET /contact_center/variable_logs/{variableLogId}",
  "DELETE /contact_center/variable_logs/{variableLogId}",
  "GET /contact_center/variables",
  "POST /contact_center/variables",
  "GET /contact_center/variables/groups",
  "POST /contact_center/variables/groups",
  "GET /contact_center/variables/groups/{variableGroupId}",
  "DELETE /contact_center/variables/groups/{variableGroupId}",
  "PATCH /contact_center/variables/groups/{variableGroupId}",
  "GET /contact_center/variables/{variableId}",
  "DELETE /contact_center/variables/{variableId}",
  "PATCH /contact_center/variables/{variableId}"
] as const;
export type ZoomContactCenterFullApiVariablesOperationKey = typeof ZoomContactCenterFullApiVariablesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiVariablesOperationPathParamMap {
  "GET /contact_center/variable_logs": {};
  "GET /contact_center/variable_logs/{variableLogId}": { "variableLogId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/variable_logs/{variableLogId}": { "variableLogId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/variables": {};
  "POST /contact_center/variables": {};
  "GET /contact_center/variables/groups": {};
  "POST /contact_center/variables/groups": {};
  "GET /contact_center/variables/groups/{variableGroupId}": { "variableGroupId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/variables/groups/{variableGroupId}": { "variableGroupId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/variables/groups/{variableGroupId}": { "variableGroupId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/variables/{variableId}": { "variableId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/variables/{variableId}": { "variableId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/variables/{variableId}": { "variableId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiVariablesOperationRequestMap {
  "GET /contact_center/variable_logs": ZoomContactCenterFullApiOperationInput<"GET /contact_center/variable_logs">;
  "GET /contact_center/variable_logs/{variableLogId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/variable_logs/{variableLogId}">;
  "DELETE /contact_center/variable_logs/{variableLogId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/variable_logs/{variableLogId}">;
  "GET /contact_center/variables": ZoomContactCenterFullApiOperationInput<"GET /contact_center/variables">;
  "POST /contact_center/variables": ZoomContactCenterFullApiOperationInput<"POST /contact_center/variables">;
  "GET /contact_center/variables/groups": ZoomContactCenterFullApiOperationInput<"GET /contact_center/variables/groups">;
  "POST /contact_center/variables/groups": ZoomContactCenterFullApiOperationInput<"POST /contact_center/variables/groups">;
  "GET /contact_center/variables/groups/{variableGroupId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/variables/groups/{variableGroupId}">;
  "DELETE /contact_center/variables/groups/{variableGroupId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/variables/groups/{variableGroupId}">;
  "PATCH /contact_center/variables/groups/{variableGroupId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/variables/groups/{variableGroupId}">;
  "GET /contact_center/variables/{variableId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/variables/{variableId}">;
  "DELETE /contact_center/variables/{variableId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/variables/{variableId}">;
  "PATCH /contact_center/variables/{variableId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/variables/{variableId}">;
}

export interface ZoomContactCenterFullApiVariablesGeneratedClient {
  ListVariableLogs(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/variable_logs">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/variable_logs"]>;
  GetVariableLog(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/variable_logs/{variableLogId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/variable_logs/{variableLogId}"]>;
  DeleteVariableLog(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/variable_logs/{variableLogId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/variable_logs/{variableLogId}"]>;
  Variables(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/variables">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/variables"]>;
  CreateVariable(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/variables">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/variables"]>;
  ListVariableGroups(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/variables/groups">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/variables/groups"]>;
  CreateVariableGroup(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/variables/groups">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/variables/groups"]>;
  GetAVariableGroup(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/variables/groups/{variableGroupId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/variables/groups/{variableGroupId}"]>;
  DeleteGroup(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/variables/groups/{variableGroupId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/variables/groups/{variableGroupId}"]>;
  UpdateVariableGroup(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/variables/groups/{variableGroupId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/variables/groups/{variableGroupId}"]>;
  VariableGet(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/variables/{variableId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/variables/{variableId}"]>;
  VariableDelete(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/variables/{variableId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/variables/{variableId}"]>;
  VariableUpdate(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/variables/{variableId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/variables/{variableId}"]>;
}

export const ZoomContactCenterFullApiVariablesGeneratedFunctionNames = [
  "ListVariableLogs",
  "GetVariableLog",
  "DeleteVariableLog",
  "Variables",
  "CreateVariable",
  "ListVariableGroups",
  "CreateVariableGroup",
  "GetAVariableGroup",
  "DeleteGroup",
  "UpdateVariableGroup",
  "VariableGet",
  "VariableDelete",
  "VariableUpdate"
] as const satisfies readonly (keyof ZoomContactCenterFullApiVariablesGeneratedClient)[];

export function createZoomContactCenterFullApiVariablesGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiVariablesGeneratedClient {
  return {
    ListVariableLogs: (...args) => callOperation("GET /contact_center/variable_logs", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/variable_logs">)),
    GetVariableLog: (...args) => callOperation("GET /contact_center/variable_logs/{variableLogId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/variable_logs/{variableLogId}">)),
    DeleteVariableLog: (...args) => callOperation("DELETE /contact_center/variable_logs/{variableLogId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/variable_logs/{variableLogId}">)),
    Variables: (...args) => callOperation("GET /contact_center/variables", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/variables">)),
    CreateVariable: (...args) => callOperation("POST /contact_center/variables", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/variables">)),
    ListVariableGroups: (...args) => callOperation("GET /contact_center/variables/groups", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/variables/groups">)),
    CreateVariableGroup: (...args) => callOperation("POST /contact_center/variables/groups", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/variables/groups">)),
    GetAVariableGroup: (...args) => callOperation("GET /contact_center/variables/groups/{variableGroupId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/variables/groups/{variableGroupId}">)),
    DeleteGroup: (...args) => callOperation("DELETE /contact_center/variables/groups/{variableGroupId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/variables/groups/{variableGroupId}">)),
    UpdateVariableGroup: (...args) => callOperation("PATCH /contact_center/variables/groups/{variableGroupId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/variables/groups/{variableGroupId}">)),
    VariableGet: (...args) => callOperation("GET /contact_center/variables/{variableId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/variables/{variableId}">)),
    VariableDelete: (...args) => callOperation("DELETE /contact_center/variables/{variableId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/variables/{variableId}">)),
    VariableUpdate: (...args) => callOperation("PATCH /contact_center/variables/{variableId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/variables/{variableId}">)),
  };
}
