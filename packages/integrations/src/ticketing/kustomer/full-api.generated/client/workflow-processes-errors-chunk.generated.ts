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
export const KustomerFullApiWorkflowProcessesErrorsOperationKeys = [
  "GetProcessesbyWorkflow"
] as const;
export type KustomerFullApiWorkflowProcessesErrorsOperationKey = typeof KustomerFullApiWorkflowProcessesErrorsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiWorkflowProcessesErrorsOperationPathParamMap {
  "GetProcessesbyWorkflow": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiWorkflowProcessesErrorsOperationRequestMap {
  "GetProcessesbyWorkflow": KustomerFullApiOperationInput<"GetProcessesbyWorkflow">;
}

export interface KustomerFullApiWorkflowProcessesErrorsGeneratedClient {
  kustomerGetProcessesbyWorkflow(...args: KustomerFullApiOperationArgs<"GetProcessesbyWorkflow">): Promise<KustomerFullApiOperationResponseMap["GetProcessesbyWorkflow"]>;
}

export const KustomerFullApiWorkflowProcessesErrorsGeneratedFunctionNames = [
  "kustomerGetProcessesbyWorkflow"
] as const satisfies readonly (keyof KustomerFullApiWorkflowProcessesErrorsGeneratedClient)[];

export function createKustomerFullApiWorkflowProcessesErrorsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiWorkflowProcessesErrorsGeneratedClient {
  return {
    kustomerGetProcessesbyWorkflow: (...args) => callOperation("GetProcessesbyWorkflow", ...(args as KustomerFullApiOperationArgs<"GetProcessesbyWorkflow">)),
  };
}
