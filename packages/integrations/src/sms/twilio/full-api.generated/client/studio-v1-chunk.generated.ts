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
export const TwilioSmsFullApiStudioV1OperationKeys = [
  "studio_v1:CreateEngagement",
  "studio_v1:CreateExecution",
  "studio_v1:DeleteEngagement",
  "studio_v1:DeleteExecution",
  "studio_v1:DeleteFlow",
  "studio_v1:FetchEngagement",
  "studio_v1:FetchEngagementContext",
  "studio_v1:FetchExecution",
  "studio_v1:FetchExecutionContext",
  "studio_v1:FetchExecutionStep",
  "studio_v1:FetchExecutionStepContext",
  "studio_v1:FetchFlow",
  "studio_v1:FetchStep",
  "studio_v1:FetchStepContext",
  "studio_v1:ListEngagement",
  "studio_v1:ListExecution",
  "studio_v1:ListExecutionStep",
  "studio_v1:ListFlow",
  "studio_v1:ListStep",
  "studio_v1:UpdateExecution"
] as const;
export type TwilioSmsFullApiStudioV1OperationKey = typeof TwilioSmsFullApiStudioV1OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioSmsFullApiStudioV1OperationPathParamMap {
  "studio_v1:CreateEngagement": { "FlowSid": TwilioSmsFullApiPathParamValue };
  "studio_v1:CreateExecution": { "FlowSid": TwilioSmsFullApiPathParamValue };
  "studio_v1:DeleteEngagement": { "FlowSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v1:DeleteExecution": { "FlowSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v1:DeleteFlow": { "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v1:FetchEngagement": { "FlowSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v1:FetchEngagementContext": { "FlowSid": TwilioSmsFullApiPathParamValue; "EngagementSid": TwilioSmsFullApiPathParamValue };
  "studio_v1:FetchExecution": { "FlowSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v1:FetchExecutionContext": { "FlowSid": TwilioSmsFullApiPathParamValue; "ExecutionSid": TwilioSmsFullApiPathParamValue };
  "studio_v1:FetchExecutionStep": { "FlowSid": TwilioSmsFullApiPathParamValue; "ExecutionSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v1:FetchExecutionStepContext": { "FlowSid": TwilioSmsFullApiPathParamValue; "ExecutionSid": TwilioSmsFullApiPathParamValue; "StepSid": TwilioSmsFullApiPathParamValue };
  "studio_v1:FetchFlow": { "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v1:FetchStep": { "FlowSid": TwilioSmsFullApiPathParamValue; "EngagementSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "studio_v1:FetchStepContext": { "FlowSid": TwilioSmsFullApiPathParamValue; "EngagementSid": TwilioSmsFullApiPathParamValue; "StepSid": TwilioSmsFullApiPathParamValue };
  "studio_v1:ListEngagement": { "FlowSid": TwilioSmsFullApiPathParamValue };
  "studio_v1:ListExecution": { "FlowSid": TwilioSmsFullApiPathParamValue };
  "studio_v1:ListExecutionStep": { "FlowSid": TwilioSmsFullApiPathParamValue; "ExecutionSid": TwilioSmsFullApiPathParamValue };
  "studio_v1:ListFlow": {};
  "studio_v1:ListStep": { "FlowSid": TwilioSmsFullApiPathParamValue; "EngagementSid": TwilioSmsFullApiPathParamValue };
  "studio_v1:UpdateExecution": { "FlowSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
}

export interface TwilioSmsFullApiStudioV1OperationRequestMap {
  "studio_v1:CreateEngagement": TwilioSmsFullApiOperationInput<"studio_v1:CreateEngagement">;
  "studio_v1:CreateExecution": TwilioSmsFullApiOperationInput<"studio_v1:CreateExecution">;
  "studio_v1:DeleteEngagement": TwilioSmsFullApiOperationInput<"studio_v1:DeleteEngagement">;
  "studio_v1:DeleteExecution": TwilioSmsFullApiOperationInput<"studio_v1:DeleteExecution">;
  "studio_v1:DeleteFlow": TwilioSmsFullApiOperationInput<"studio_v1:DeleteFlow">;
  "studio_v1:FetchEngagement": TwilioSmsFullApiOperationInput<"studio_v1:FetchEngagement">;
  "studio_v1:FetchEngagementContext": TwilioSmsFullApiOperationInput<"studio_v1:FetchEngagementContext">;
  "studio_v1:FetchExecution": TwilioSmsFullApiOperationInput<"studio_v1:FetchExecution">;
  "studio_v1:FetchExecutionContext": TwilioSmsFullApiOperationInput<"studio_v1:FetchExecutionContext">;
  "studio_v1:FetchExecutionStep": TwilioSmsFullApiOperationInput<"studio_v1:FetchExecutionStep">;
  "studio_v1:FetchExecutionStepContext": TwilioSmsFullApiOperationInput<"studio_v1:FetchExecutionStepContext">;
  "studio_v1:FetchFlow": TwilioSmsFullApiOperationInput<"studio_v1:FetchFlow">;
  "studio_v1:FetchStep": TwilioSmsFullApiOperationInput<"studio_v1:FetchStep">;
  "studio_v1:FetchStepContext": TwilioSmsFullApiOperationInput<"studio_v1:FetchStepContext">;
  "studio_v1:ListEngagement": TwilioSmsFullApiOperationInput<"studio_v1:ListEngagement">;
  "studio_v1:ListExecution": TwilioSmsFullApiOperationInput<"studio_v1:ListExecution">;
  "studio_v1:ListExecutionStep": TwilioSmsFullApiOperationInput<"studio_v1:ListExecutionStep">;
  "studio_v1:ListFlow": TwilioSmsFullApiOperationInput<"studio_v1:ListFlow">;
  "studio_v1:ListStep": TwilioSmsFullApiOperationInput<"studio_v1:ListStep">;
  "studio_v1:UpdateExecution": TwilioSmsFullApiOperationInput<"studio_v1:UpdateExecution">;
}

export interface TwilioSmsFullApiStudioV1GeneratedClient {
  StudioV1CreateEngagement(...args: TwilioSmsFullApiOperationArgs<"studio_v1:CreateEngagement">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:CreateEngagement"]>;
  StudioV1CreateExecution(...args: TwilioSmsFullApiOperationArgs<"studio_v1:CreateExecution">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:CreateExecution"]>;
  StudioV1DeleteEngagement(...args: TwilioSmsFullApiOperationArgs<"studio_v1:DeleteEngagement">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:DeleteEngagement"]>;
  StudioV1DeleteExecution(...args: TwilioSmsFullApiOperationArgs<"studio_v1:DeleteExecution">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:DeleteExecution"]>;
  StudioV1DeleteFlow(...args: TwilioSmsFullApiOperationArgs<"studio_v1:DeleteFlow">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:DeleteFlow"]>;
  StudioV1FetchEngagement(...args: TwilioSmsFullApiOperationArgs<"studio_v1:FetchEngagement">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:FetchEngagement"]>;
  StudioV1FetchEngagementContext(...args: TwilioSmsFullApiOperationArgs<"studio_v1:FetchEngagementContext">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:FetchEngagementContext"]>;
  StudioV1FetchExecution(...args: TwilioSmsFullApiOperationArgs<"studio_v1:FetchExecution">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:FetchExecution"]>;
  StudioV1FetchExecutionContext(...args: TwilioSmsFullApiOperationArgs<"studio_v1:FetchExecutionContext">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:FetchExecutionContext"]>;
  StudioV1FetchExecutionStep(...args: TwilioSmsFullApiOperationArgs<"studio_v1:FetchExecutionStep">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:FetchExecutionStep"]>;
  StudioV1FetchExecutionStepContext(...args: TwilioSmsFullApiOperationArgs<"studio_v1:FetchExecutionStepContext">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:FetchExecutionStepContext"]>;
  StudioV1FetchFlow(...args: TwilioSmsFullApiOperationArgs<"studio_v1:FetchFlow">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:FetchFlow"]>;
  StudioV1FetchStep(...args: TwilioSmsFullApiOperationArgs<"studio_v1:FetchStep">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:FetchStep"]>;
  StudioV1FetchStepContext(...args: TwilioSmsFullApiOperationArgs<"studio_v1:FetchStepContext">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:FetchStepContext"]>;
  StudioV1ListEngagement(...args: TwilioSmsFullApiOperationArgs<"studio_v1:ListEngagement">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:ListEngagement"]>;
  StudioV1ListExecution(...args: TwilioSmsFullApiOperationArgs<"studio_v1:ListExecution">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:ListExecution"]>;
  StudioV1ListExecutionStep(...args: TwilioSmsFullApiOperationArgs<"studio_v1:ListExecutionStep">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:ListExecutionStep"]>;
  StudioV1ListFlow(...args: TwilioSmsFullApiOperationArgs<"studio_v1:ListFlow">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:ListFlow"]>;
  StudioV1ListStep(...args: TwilioSmsFullApiOperationArgs<"studio_v1:ListStep">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:ListStep"]>;
  StudioV1UpdateExecution(...args: TwilioSmsFullApiOperationArgs<"studio_v1:UpdateExecution">): Promise<TwilioSmsFullApiOperationResponseMap["studio_v1:UpdateExecution"]>;
}

export const TwilioSmsFullApiStudioV1GeneratedFunctionNames = [
  "StudioV1CreateEngagement",
  "StudioV1CreateExecution",
  "StudioV1DeleteEngagement",
  "StudioV1DeleteExecution",
  "StudioV1DeleteFlow",
  "StudioV1FetchEngagement",
  "StudioV1FetchEngagementContext",
  "StudioV1FetchExecution",
  "StudioV1FetchExecutionContext",
  "StudioV1FetchExecutionStep",
  "StudioV1FetchExecutionStepContext",
  "StudioV1FetchFlow",
  "StudioV1FetchStep",
  "StudioV1FetchStepContext",
  "StudioV1ListEngagement",
  "StudioV1ListExecution",
  "StudioV1ListExecutionStep",
  "StudioV1ListFlow",
  "StudioV1ListStep",
  "StudioV1UpdateExecution"
] as const satisfies readonly (keyof TwilioSmsFullApiStudioV1GeneratedClient)[];

export function createTwilioSmsFullApiStudioV1GeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiStudioV1GeneratedClient {
  return {
    StudioV1CreateEngagement: (...args) => callOperation("studio_v1:CreateEngagement", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:CreateEngagement">)),
    StudioV1CreateExecution: (...args) => callOperation("studio_v1:CreateExecution", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:CreateExecution">)),
    StudioV1DeleteEngagement: (...args) => callOperation("studio_v1:DeleteEngagement", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:DeleteEngagement">)),
    StudioV1DeleteExecution: (...args) => callOperation("studio_v1:DeleteExecution", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:DeleteExecution">)),
    StudioV1DeleteFlow: (...args) => callOperation("studio_v1:DeleteFlow", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:DeleteFlow">)),
    StudioV1FetchEngagement: (...args) => callOperation("studio_v1:FetchEngagement", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:FetchEngagement">)),
    StudioV1FetchEngagementContext: (...args) => callOperation("studio_v1:FetchEngagementContext", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:FetchEngagementContext">)),
    StudioV1FetchExecution: (...args) => callOperation("studio_v1:FetchExecution", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:FetchExecution">)),
    StudioV1FetchExecutionContext: (...args) => callOperation("studio_v1:FetchExecutionContext", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:FetchExecutionContext">)),
    StudioV1FetchExecutionStep: (...args) => callOperation("studio_v1:FetchExecutionStep", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:FetchExecutionStep">)),
    StudioV1FetchExecutionStepContext: (...args) => callOperation("studio_v1:FetchExecutionStepContext", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:FetchExecutionStepContext">)),
    StudioV1FetchFlow: (...args) => callOperation("studio_v1:FetchFlow", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:FetchFlow">)),
    StudioV1FetchStep: (...args) => callOperation("studio_v1:FetchStep", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:FetchStep">)),
    StudioV1FetchStepContext: (...args) => callOperation("studio_v1:FetchStepContext", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:FetchStepContext">)),
    StudioV1ListEngagement: (...args) => callOperation("studio_v1:ListEngagement", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:ListEngagement">)),
    StudioV1ListExecution: (...args) => callOperation("studio_v1:ListExecution", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:ListExecution">)),
    StudioV1ListExecutionStep: (...args) => callOperation("studio_v1:ListExecutionStep", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:ListExecutionStep">)),
    StudioV1ListFlow: (...args) => callOperation("studio_v1:ListFlow", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:ListFlow">)),
    StudioV1ListStep: (...args) => callOperation("studio_v1:ListStep", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:ListStep">)),
    StudioV1UpdateExecution: (...args) => callOperation("studio_v1:UpdateExecution", ...(args as TwilioSmsFullApiOperationArgs<"studio_v1:UpdateExecution">)),
  };
}
