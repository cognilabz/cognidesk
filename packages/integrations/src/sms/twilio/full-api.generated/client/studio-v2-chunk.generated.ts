// Generated endpoint chunk for TwilioSmsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TwilioSmsGeneratedOperationCaller,
  TwilioSmsFullApiOperationArgs,
  TwilioSmsFullApiOperationInput,
  TwilioSmsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TwilioSmsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TwilioSmsFullApiStudioV2OperationKeys = [
  "studio_v2:CreateExecution",
  "studio_v2:CreateFlow",
  "studio_v2:DeleteExecution",
  "studio_v2:DeleteFlow",
  "studio_v2:FetchExecution",
  "studio_v2:FetchExecutionContext",
  "studio_v2:FetchExecutionStep",
  "studio_v2:FetchExecutionStepContext",
  "studio_v2:FetchFlow",
  "studio_v2:FetchFlowRevision",
  "studio_v2:FetchTestUser",
  "studio_v2:ListExecution",
  "studio_v2:ListExecutionStep",
  "studio_v2:ListFlow",
  "studio_v2:ListFlowRevision",
  "studio_v2:UpdateExecution",
  "studio_v2:UpdateFlow",
  "studio_v2:UpdateFlowValidate",
  "studio_v2:UpdateTestUser"
] as const;
export type TwilioSmsFullApiStudioV2OperationKey = typeof TwilioSmsFullApiStudioV2OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioSmsFullApiStudioV2OperationPathParamMap {
  "studio_v2:CreateExecution": { "FlowSid": TwilioSmsFullApiPathParamValue };
  "studio_v2:CreateFlow": {};
  "studio_v2:DeleteExecution": { "FlowSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v2:DeleteFlow": { "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v2:FetchExecution": { "FlowSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v2:FetchExecutionContext": { "FlowSid": TwilioSmsFullApiPathParamValue; "ExecutionSid": TwilioSmsFullApiPathParamValue };
  "studio_v2:FetchExecutionStep": { "FlowSid": TwilioSmsFullApiPathParamValue; "ExecutionSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v2:FetchExecutionStepContext": { "FlowSid": TwilioSmsFullApiPathParamValue; "ExecutionSid": TwilioSmsFullApiPathParamValue; "StepSid": TwilioSmsFullApiPathParamValue };
  "studio_v2:FetchFlow": { "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v2:FetchFlowRevision": { "Sid": TwilioSmsFullApiPathParamValue; "Revision": TwilioSmsFullApiPathParamValue };
  "studio_v2:FetchTestUser": { "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v2:ListExecution": { "FlowSid": TwilioSmsFullApiPathParamValue };
  "studio_v2:ListExecutionStep": { "FlowSid": TwilioSmsFullApiPathParamValue; "ExecutionSid": TwilioSmsFullApiPathParamValue };
  "studio_v2:ListFlow": {};
  "studio_v2:ListFlowRevision": { "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v2:UpdateExecution": { "FlowSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v2:UpdateFlow": { "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v2:UpdateFlowValidate": {};
  "studio_v2:UpdateTestUser": { "Sid": TwilioSmsFullApiPathParamValue };
}

export interface TwilioSmsFullApiStudioV2OperationRequestMap {
  "studio_v2:CreateExecution": TwilioSmsFullApiOperationInput<"studio_v2:CreateExecution">;
  "studio_v2:CreateFlow": TwilioSmsFullApiOperationInput<"studio_v2:CreateFlow">;
  "studio_v2:DeleteExecution": TwilioSmsFullApiOperationInput<"studio_v2:DeleteExecution">;
  "studio_v2:DeleteFlow": TwilioSmsFullApiOperationInput<"studio_v2:DeleteFlow">;
  "studio_v2:FetchExecution": TwilioSmsFullApiOperationInput<"studio_v2:FetchExecution">;
  "studio_v2:FetchExecutionContext": TwilioSmsFullApiOperationInput<"studio_v2:FetchExecutionContext">;
  "studio_v2:FetchExecutionStep": TwilioSmsFullApiOperationInput<"studio_v2:FetchExecutionStep">;
  "studio_v2:FetchExecutionStepContext": TwilioSmsFullApiOperationInput<"studio_v2:FetchExecutionStepContext">;
  "studio_v2:FetchFlow": TwilioSmsFullApiOperationInput<"studio_v2:FetchFlow">;
  "studio_v2:FetchFlowRevision": TwilioSmsFullApiOperationInput<"studio_v2:FetchFlowRevision">;
  "studio_v2:FetchTestUser": TwilioSmsFullApiOperationInput<"studio_v2:FetchTestUser">;
  "studio_v2:ListExecution": TwilioSmsFullApiOperationInput<"studio_v2:ListExecution">;
  "studio_v2:ListExecutionStep": TwilioSmsFullApiOperationInput<"studio_v2:ListExecutionStep">;
  "studio_v2:ListFlow": TwilioSmsFullApiOperationInput<"studio_v2:ListFlow">;
  "studio_v2:ListFlowRevision": TwilioSmsFullApiOperationInput<"studio_v2:ListFlowRevision">;
  "studio_v2:UpdateExecution": TwilioSmsFullApiOperationInput<"studio_v2:UpdateExecution">;
  "studio_v2:UpdateFlow": TwilioSmsFullApiOperationInput<"studio_v2:UpdateFlow">;
  "studio_v2:UpdateFlowValidate": TwilioSmsFullApiOperationInput<"studio_v2:UpdateFlowValidate">;
  "studio_v2:UpdateTestUser": TwilioSmsFullApiOperationInput<"studio_v2:UpdateTestUser">;
}

export interface TwilioSmsFullApiStudioV2GeneratedClient {
  StudioV2CreateExecution(...args: TwilioSmsFullApiOperationArgs<"studio_v2:CreateExecution">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:CreateExecution"]>;
  StudioV2CreateFlow(...args: TwilioSmsFullApiOperationArgs<"studio_v2:CreateFlow">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:CreateFlow"]>;
  StudioV2DeleteExecution(...args: TwilioSmsFullApiOperationArgs<"studio_v2:DeleteExecution">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:DeleteExecution"]>;
  StudioV2DeleteFlow(...args: TwilioSmsFullApiOperationArgs<"studio_v2:DeleteFlow">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:DeleteFlow"]>;
  StudioV2FetchExecution(...args: TwilioSmsFullApiOperationArgs<"studio_v2:FetchExecution">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:FetchExecution"]>;
  StudioV2FetchExecutionContext(...args: TwilioSmsFullApiOperationArgs<"studio_v2:FetchExecutionContext">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:FetchExecutionContext"]>;
  StudioV2FetchExecutionStep(...args: TwilioSmsFullApiOperationArgs<"studio_v2:FetchExecutionStep">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:FetchExecutionStep"]>;
  StudioV2FetchExecutionStepContext(...args: TwilioSmsFullApiOperationArgs<"studio_v2:FetchExecutionStepContext">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:FetchExecutionStepContext"]>;
  StudioV2FetchFlow(...args: TwilioSmsFullApiOperationArgs<"studio_v2:FetchFlow">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:FetchFlow"]>;
  StudioV2FetchFlowRevision(...args: TwilioSmsFullApiOperationArgs<"studio_v2:FetchFlowRevision">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:FetchFlowRevision"]>;
  StudioV2FetchTestUser(...args: TwilioSmsFullApiOperationArgs<"studio_v2:FetchTestUser">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:FetchTestUser"]>;
  StudioV2ListExecution(...args: TwilioSmsFullApiOperationArgs<"studio_v2:ListExecution">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:ListExecution"]>;
  StudioV2ListExecutionStep(...args: TwilioSmsFullApiOperationArgs<"studio_v2:ListExecutionStep">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:ListExecutionStep"]>;
  StudioV2ListFlow(...args: TwilioSmsFullApiOperationArgs<"studio_v2:ListFlow">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:ListFlow"]>;
  StudioV2ListFlowRevision(...args: TwilioSmsFullApiOperationArgs<"studio_v2:ListFlowRevision">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:ListFlowRevision"]>;
  StudioV2UpdateExecution(...args: TwilioSmsFullApiOperationArgs<"studio_v2:UpdateExecution">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:UpdateExecution"]>;
  StudioV2UpdateFlow(...args: TwilioSmsFullApiOperationArgs<"studio_v2:UpdateFlow">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:UpdateFlow"]>;
  StudioV2UpdateFlowValidate(...args: TwilioSmsFullApiOperationArgs<"studio_v2:UpdateFlowValidate">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:UpdateFlowValidate"]>;
  StudioV2UpdateTestUser(...args: TwilioSmsFullApiOperationArgs<"studio_v2:UpdateTestUser">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v2:UpdateTestUser"]>;
}

export const TwilioSmsFullApiStudioV2GeneratedFunctionNames = [
  "StudioV2CreateExecution",
  "StudioV2CreateFlow",
  "StudioV2DeleteExecution",
  "StudioV2DeleteFlow",
  "StudioV2FetchExecution",
  "StudioV2FetchExecutionContext",
  "StudioV2FetchExecutionStep",
  "StudioV2FetchExecutionStepContext",
  "StudioV2FetchFlow",
  "StudioV2FetchFlowRevision",
  "StudioV2FetchTestUser",
  "StudioV2ListExecution",
  "StudioV2ListExecutionStep",
  "StudioV2ListFlow",
  "StudioV2ListFlowRevision",
  "StudioV2UpdateExecution",
  "StudioV2UpdateFlow",
  "StudioV2UpdateFlowValidate",
  "StudioV2UpdateTestUser"
] as const satisfies readonly (keyof TwilioSmsFullApiStudioV2GeneratedClient)[];

export function createTwilioSmsFullApiStudioV2GeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiStudioV2GeneratedClient {
  return {
    StudioV2CreateExecution: (...args) => callOperation("studio_v2:CreateExecution", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:CreateExecution">)),
    StudioV2CreateFlow: (...args) => callOperation("studio_v2:CreateFlow", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:CreateFlow">)),
    StudioV2DeleteExecution: (...args) => callOperation("studio_v2:DeleteExecution", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:DeleteExecution">)),
    StudioV2DeleteFlow: (...args) => callOperation("studio_v2:DeleteFlow", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:DeleteFlow">)),
    StudioV2FetchExecution: (...args) => callOperation("studio_v2:FetchExecution", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:FetchExecution">)),
    StudioV2FetchExecutionContext: (...args) => callOperation("studio_v2:FetchExecutionContext", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:FetchExecutionContext">)),
    StudioV2FetchExecutionStep: (...args) => callOperation("studio_v2:FetchExecutionStep", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:FetchExecutionStep">)),
    StudioV2FetchExecutionStepContext: (...args) => callOperation("studio_v2:FetchExecutionStepContext", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:FetchExecutionStepContext">)),
    StudioV2FetchFlow: (...args) => callOperation("studio_v2:FetchFlow", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:FetchFlow">)),
    StudioV2FetchFlowRevision: (...args) => callOperation("studio_v2:FetchFlowRevision", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:FetchFlowRevision">)),
    StudioV2FetchTestUser: (...args) => callOperation("studio_v2:FetchTestUser", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:FetchTestUser">)),
    StudioV2ListExecution: (...args) => callOperation("studio_v2:ListExecution", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:ListExecution">)),
    StudioV2ListExecutionStep: (...args) => callOperation("studio_v2:ListExecutionStep", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:ListExecutionStep">)),
    StudioV2ListFlow: (...args) => callOperation("studio_v2:ListFlow", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:ListFlow">)),
    StudioV2ListFlowRevision: (...args) => callOperation("studio_v2:ListFlowRevision", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:ListFlowRevision">)),
    StudioV2UpdateExecution: (...args) => callOperation("studio_v2:UpdateExecution", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:UpdateExecution">)),
    StudioV2UpdateFlow: (...args) => callOperation("studio_v2:UpdateFlow", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:UpdateFlow">)),
    StudioV2UpdateFlowValidate: (...args) => callOperation("studio_v2:UpdateFlowValidate", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:UpdateFlowValidate">)),
    StudioV2UpdateTestUser: (...args) => callOperation("studio_v2:UpdateTestUser", ...(args as TwilioSmsFullApiOperationArgs<"studio_v2:UpdateTestUser">)),
  };
}
