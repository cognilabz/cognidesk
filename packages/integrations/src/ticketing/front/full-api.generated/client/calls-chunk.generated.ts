// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiCallsOperationKeys = [
  "create-call",
  "update-call",
  "add-call-recording",
  "add-call-summary",
  "add-call-transcript"
] as const;
export type FrontFullApiCallsOperationKey = typeof FrontFullApiCallsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiCallsOperationPathParamMap {
  "create-call": { "channel_id": FrontFullApiPathParamValue };
  "update-call": { "channel_id": FrontFullApiPathParamValue; "external_call_id": FrontFullApiPathParamValue };
  "add-call-recording": { "channel_id": FrontFullApiPathParamValue; "external_call_id": FrontFullApiPathParamValue };
  "add-call-summary": { "channel_id": FrontFullApiPathParamValue; "external_call_id": FrontFullApiPathParamValue };
  "add-call-transcript": { "channel_id": FrontFullApiPathParamValue; "external_call_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiCallsOperationRequestMap {
  "create-call": FrontFullApiOperationInput<"create-call">;
  "update-call": FrontFullApiOperationInput<"update-call">;
  "add-call-recording": FrontFullApiOperationInput<"add-call-recording">;
  "add-call-summary": FrontFullApiOperationInput<"add-call-summary">;
  "add-call-transcript": FrontFullApiOperationInput<"add-call-transcript">;
}

export interface FrontFullApiCallsGeneratedClient {
  frontCreateCall(...args: FrontFullApiOperationArgs<"create-call">): Promise<FrontFullApiOperationResponseMap["create-call"]>;
  frontUpdateCall(...args: FrontFullApiOperationArgs<"update-call">): Promise<FrontFullApiOperationResponseMap["update-call"]>;
  frontAddCallRecording(...args: FrontFullApiOperationArgs<"add-call-recording">): Promise<FrontFullApiOperationResponseMap["add-call-recording"]>;
  frontAddCallSummary(...args: FrontFullApiOperationArgs<"add-call-summary">): Promise<FrontFullApiOperationResponseMap["add-call-summary"]>;
  frontAddCallTranscript(...args: FrontFullApiOperationArgs<"add-call-transcript">): Promise<FrontFullApiOperationResponseMap["add-call-transcript"]>;
}

export const FrontFullApiCallsGeneratedFunctionNames = [
  "frontCreateCall",
  "frontUpdateCall",
  "frontAddCallRecording",
  "frontAddCallSummary",
  "frontAddCallTranscript"
] as const satisfies readonly (keyof FrontFullApiCallsGeneratedClient)[];

export function createFrontFullApiCallsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiCallsGeneratedClient {
  return {
    frontCreateCall: (...args) => callOperation("create-call", ...(args as FrontFullApiOperationArgs<"create-call">)),
    frontUpdateCall: (...args) => callOperation("update-call", ...(args as FrontFullApiOperationArgs<"update-call">)),
    frontAddCallRecording: (...args) => callOperation("add-call-recording", ...(args as FrontFullApiOperationArgs<"add-call-recording">)),
    frontAddCallSummary: (...args) => callOperation("add-call-summary", ...(args as FrontFullApiOperationArgs<"add-call-summary">)),
    frontAddCallTranscript: (...args) => callOperation("add-call-transcript", ...(args as FrontFullApiOperationArgs<"add-call-transcript">)),
  };
}
