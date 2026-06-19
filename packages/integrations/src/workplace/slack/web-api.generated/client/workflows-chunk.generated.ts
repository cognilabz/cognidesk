// Generated endpoint chunk for SlackWebApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  SlackWebApiGeneratedOperationCaller,
  SlackWebApiOperationArgs,
  SlackWebApiOperationInput,
  SlackWebApiPathParamValue,
} from "../../web-api-client.generated.js";
import type { SlackWebApiOperationResponseMap } from "../../web-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const SlackWebApiWorkflowsOperationKeys = [
  "GET /workflows.stepCompleted",
  "GET /workflows.stepFailed",
  "GET /workflows.updateStep"
] as const;
export type SlackWebApiWorkflowsOperationKey = typeof SlackWebApiWorkflowsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiWorkflowsOperationPathParamMap {
  "GET /workflows.stepCompleted": {};
  "GET /workflows.stepFailed": {};
  "GET /workflows.updateStep": {};
}

export interface SlackWebApiWorkflowsOperationRequestMap {
  "GET /workflows.stepCompleted": SlackWebApiOperationInput<"GET /workflows.stepCompleted">;
  "GET /workflows.stepFailed": SlackWebApiOperationInput<"GET /workflows.stepFailed">;
  "GET /workflows.updateStep": SlackWebApiOperationInput<"GET /workflows.updateStep">;
}

export interface SlackWebApiWorkflowsGeneratedClient {
  WorkflowsStepCompleted(...args: SlackWebApiOperationArgs<"GET /workflows.stepCompleted">): Promise<SlackWebApiOperationResponseMap["GET /workflows.stepCompleted"]>;
  WorkflowsStepFailed(...args: SlackWebApiOperationArgs<"GET /workflows.stepFailed">): Promise<SlackWebApiOperationResponseMap["GET /workflows.stepFailed"]>;
  WorkflowsUpdateStep(...args: SlackWebApiOperationArgs<"GET /workflows.updateStep">): Promise<SlackWebApiOperationResponseMap["GET /workflows.updateStep"]>;
}

export const SlackWebApiWorkflowsGeneratedFunctionNames = [
  "WorkflowsStepCompleted",
  "WorkflowsStepFailed",
  "WorkflowsUpdateStep"
] as const satisfies readonly (keyof SlackWebApiWorkflowsGeneratedClient)[];

export function createSlackWebApiWorkflowsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiWorkflowsGeneratedClient {
  return {
    WorkflowsStepCompleted: (...args) => callOperation("GET /workflows.stepCompleted", ...(args as SlackWebApiOperationArgs<"GET /workflows.stepCompleted">)),
    WorkflowsStepFailed: (...args) => callOperation("GET /workflows.stepFailed", ...(args as SlackWebApiOperationArgs<"GET /workflows.stepFailed">)),
    WorkflowsUpdateStep: (...args) => callOperation("GET /workflows.updateStep", ...(args as SlackWebApiOperationArgs<"GET /workflows.updateStep">)),
  };
}
