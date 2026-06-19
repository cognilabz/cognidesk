// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiFlowsPlatformOperationKeys = [
  "flows-platform-flows-flow-id-trigger-post"
] as const;
export type TalkdeskFullApiFlowsPlatformOperationKey = typeof TalkdeskFullApiFlowsPlatformOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiFlowsPlatformOperationPathParamMap {
  "flows-platform-flows-flow-id-trigger-post": { "flow_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiFlowsPlatformOperationRequestMap {
  "flows-platform-flows-flow-id-trigger-post": TalkdeskFullApiOperationInput<"flows-platform-flows-flow-id-trigger-post">;
}

export interface TalkdeskFullApiFlowsPlatformGeneratedClient {
  FlowsPlatformFlowsFlowIdTriggerPost(...args: TalkdeskFullApiOperationArgs<"flows-platform-flows-flow-id-trigger-post">): Promise<TalkdeskFullApiOperationResponseMap["flows-platform-flows-flow-id-trigger-post"]>;
}

export const TalkdeskFullApiFlowsPlatformGeneratedFunctionNames = [
  "FlowsPlatformFlowsFlowIdTriggerPost"
] as const satisfies readonly (keyof TalkdeskFullApiFlowsPlatformGeneratedClient)[];

export function createTalkdeskFullApiFlowsPlatformGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiFlowsPlatformGeneratedClient {
  return {
    FlowsPlatformFlowsFlowIdTriggerPost: (...args) => callOperation("flows-platform-flows-flow-id-trigger-post", ...(args as TalkdeskFullApiOperationArgs<"flows-platform-flows-flow-id-trigger-post">)),
  };
}
