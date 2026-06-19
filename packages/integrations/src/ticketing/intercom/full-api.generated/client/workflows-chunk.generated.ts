// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiWorkflowsOperationKeys = [
  "exportWorkflow"
] as const;
export type IntercomFullApiWorkflowsOperationKey = typeof IntercomFullApiWorkflowsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiWorkflowsOperationPathParamMap {
  "exportWorkflow": { "id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiWorkflowsOperationRequestMap {
  "exportWorkflow": IntercomFullApiOperationInput<"exportWorkflow">;
}

export interface IntercomFullApiWorkflowsGeneratedClient {
  intercomExportWorkflow(...args: IntercomFullApiOperationArgs<"exportWorkflow">): Promise<IntercomFullApiOperationResponseMap["exportWorkflow"]>;
}

export const IntercomFullApiWorkflowsGeneratedFunctionNames = [
  "intercomExportWorkflow"
] as const satisfies readonly (keyof IntercomFullApiWorkflowsGeneratedClient)[];

export function createIntercomFullApiWorkflowsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiWorkflowsGeneratedClient {
  return {
    intercomExportWorkflow: (...args) => callOperation("exportWorkflow", ...(args as IntercomFullApiOperationArgs<"exportWorkflow">)),
  };
}
