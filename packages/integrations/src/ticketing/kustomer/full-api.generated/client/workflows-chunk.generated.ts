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
export const KustomerFullApiWorkflowsOperationKeys = [
  "GetWorkflows",
  "CreateWorkflow",
  "GetWorkflow",
  "UpdateWorkflow"
] as const;
export type KustomerFullApiWorkflowsOperationKey = typeof KustomerFullApiWorkflowsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiWorkflowsOperationPathParamMap {
  "GetWorkflows": {};
  "CreateWorkflow": {};
  "GetWorkflow": { "id": KustomerFullApiPathParamValue };
  "UpdateWorkflow": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiWorkflowsOperationRequestMap {
  "GetWorkflows": KustomerFullApiOperationInput<"GetWorkflows">;
  "CreateWorkflow": KustomerFullApiOperationInput<"CreateWorkflow">;
  "GetWorkflow": KustomerFullApiOperationInput<"GetWorkflow">;
  "UpdateWorkflow": KustomerFullApiOperationInput<"UpdateWorkflow">;
}

export interface KustomerFullApiWorkflowsGeneratedClient {
  kustomerGetWorkflows(...args: KustomerFullApiOperationArgs<"GetWorkflows">): Promise<KustomerFullApiOperationResponseMap["GetWorkflows"]>;
  kustomerCreateWorkflow(...args: KustomerFullApiOperationArgs<"CreateWorkflow">): Promise<KustomerFullApiOperationResponseMap["CreateWorkflow"]>;
  kustomerGetWorkflow(...args: KustomerFullApiOperationArgs<"GetWorkflow">): Promise<KustomerFullApiOperationResponseMap["GetWorkflow"]>;
  kustomerUpdateWorkflow(...args: KustomerFullApiOperationArgs<"UpdateWorkflow">): Promise<KustomerFullApiOperationResponseMap["UpdateWorkflow"]>;
}

export const KustomerFullApiWorkflowsGeneratedFunctionNames = [
  "kustomerGetWorkflows",
  "kustomerCreateWorkflow",
  "kustomerGetWorkflow",
  "kustomerUpdateWorkflow"
] as const satisfies readonly (keyof KustomerFullApiWorkflowsGeneratedClient)[];

export function createKustomerFullApiWorkflowsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiWorkflowsGeneratedClient {
  return {
    kustomerGetWorkflows: (...args) => callOperation("GetWorkflows", ...(args as KustomerFullApiOperationArgs<"GetWorkflows">)),
    kustomerCreateWorkflow: (...args) => callOperation("CreateWorkflow", ...(args as KustomerFullApiOperationArgs<"CreateWorkflow">)),
    kustomerGetWorkflow: (...args) => callOperation("GetWorkflow", ...(args as KustomerFullApiOperationArgs<"GetWorkflow">)),
    kustomerUpdateWorkflow: (...args) => callOperation("UpdateWorkflow", ...(args as KustomerFullApiOperationArgs<"UpdateWorkflow">)),
  };
}
