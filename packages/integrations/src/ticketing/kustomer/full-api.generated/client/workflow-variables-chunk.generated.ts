// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiWorkflowVariablesOperationKeys = [
  "DeleteWorkflowVariable",
  "GetWorkflowVariable",
  "UpdateWorkflowVariable",
  "GetAllVariablesforSpecificWorkflowID",
  "CreateWorkflowVariableforSpecificWorkflowID"
] as const;
export type KustomerFullApiWorkflowVariablesOperationKey = typeof KustomerFullApiWorkflowVariablesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiWorkflowVariablesOperationPathParamMap {
  "DeleteWorkflowVariable": { "id": KustomerFullApiPathParamValue };
  "GetWorkflowVariable": { "id": KustomerFullApiPathParamValue };
  "UpdateWorkflowVariable": { "id": KustomerFullApiPathParamValue };
  "GetAllVariablesforSpecificWorkflowID": { "id": KustomerFullApiPathParamValue };
  "CreateWorkflowVariableforSpecificWorkflowID": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiWorkflowVariablesOperationRequestMap {
  "DeleteWorkflowVariable": KustomerFullApiOperationInput<"DeleteWorkflowVariable">;
  "GetWorkflowVariable": KustomerFullApiOperationInput<"GetWorkflowVariable">;
  "UpdateWorkflowVariable": KustomerFullApiOperationInput<"UpdateWorkflowVariable">;
  "GetAllVariablesforSpecificWorkflowID": KustomerFullApiOperationInput<"GetAllVariablesforSpecificWorkflowID">;
  "CreateWorkflowVariableforSpecificWorkflowID": KustomerFullApiOperationInput<"CreateWorkflowVariableforSpecificWorkflowID">;
}

export interface KustomerFullApiWorkflowVariablesGeneratedClient {
  kustomerDeleteWorkflowVariable(...args: KustomerFullApiOperationArgs<"DeleteWorkflowVariable">): Promise<KustomerFullApiOperationResponseMap["DeleteWorkflowVariable"]>;
  kustomerGetWorkflowVariable(...args: KustomerFullApiOperationArgs<"GetWorkflowVariable">): Promise<KustomerFullApiOperationResponseMap["GetWorkflowVariable"]>;
  kustomerUpdateWorkflowVariable(...args: KustomerFullApiOperationArgs<"UpdateWorkflowVariable">): Promise<KustomerFullApiOperationResponseMap["UpdateWorkflowVariable"]>;
  kustomerGetAllVariablesforSpecificWorkflowID(...args: KustomerFullApiOperationArgs<"GetAllVariablesforSpecificWorkflowID">): Promise<KustomerFullApiOperationResponseMap["GetAllVariablesforSpecificWorkflowID"]>;
  kustomerCreateWorkflowVariableforSpecificWorkflowID(...args: KustomerFullApiOperationArgs<"CreateWorkflowVariableforSpecificWorkflowID">): Promise<KustomerFullApiOperationResponseMap["CreateWorkflowVariableforSpecificWorkflowID"]>;
}

export const KustomerFullApiWorkflowVariablesGeneratedFunctionNames = [
  "kustomerDeleteWorkflowVariable",
  "kustomerGetWorkflowVariable",
  "kustomerUpdateWorkflowVariable",
  "kustomerGetAllVariablesforSpecificWorkflowID",
  "kustomerCreateWorkflowVariableforSpecificWorkflowID"
] as const satisfies readonly (keyof KustomerFullApiWorkflowVariablesGeneratedClient)[];

export function createKustomerFullApiWorkflowVariablesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiWorkflowVariablesGeneratedClient {
  return {
    kustomerDeleteWorkflowVariable: (...args) => callOperation("DeleteWorkflowVariable", ...(args as KustomerFullApiOperationArgs<"DeleteWorkflowVariable">)),
    kustomerGetWorkflowVariable: (...args) => callOperation("GetWorkflowVariable", ...(args as KustomerFullApiOperationArgs<"GetWorkflowVariable">)),
    kustomerUpdateWorkflowVariable: (...args) => callOperation("UpdateWorkflowVariable", ...(args as KustomerFullApiOperationArgs<"UpdateWorkflowVariable">)),
    kustomerGetAllVariablesforSpecificWorkflowID: (...args) => callOperation("GetAllVariablesforSpecificWorkflowID", ...(args as KustomerFullApiOperationArgs<"GetAllVariablesforSpecificWorkflowID">)),
    kustomerCreateWorkflowVariableforSpecificWorkflowID: (...args) => callOperation("CreateWorkflowVariableforSpecificWorkflowID", ...(args as KustomerFullApiOperationArgs<"CreateWorkflowVariableforSpecificWorkflowID">)),
  };
}
