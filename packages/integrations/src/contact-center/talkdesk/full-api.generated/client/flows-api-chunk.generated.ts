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
export const TalkdeskFullApiFlowsAPIOperationKeys = [
  "flows-flow-id-interactions-post"
] as const;
export type TalkdeskFullApiFlowsAPIOperationKey = typeof TalkdeskFullApiFlowsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiFlowsAPIOperationPathParamMap {
  "flows-flow-id-interactions-post": { "flow_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiFlowsAPIOperationRequestMap {
  "flows-flow-id-interactions-post": TalkdeskFullApiOperationInput<"flows-flow-id-interactions-post">;
}

export interface TalkdeskFullApiFlowsAPIGeneratedClient {
  FlowsFlowIdInteractionsPost(...args: TalkdeskFullApiOperationArgs<"flows-flow-id-interactions-post">): Promise<TalkdeskFullApiOperationResponseMap["flows-flow-id-interactions-post"]>;
}

export const TalkdeskFullApiFlowsAPIGeneratedFunctionNames = [
  "FlowsFlowIdInteractionsPost"
] as const satisfies readonly (keyof TalkdeskFullApiFlowsAPIGeneratedClient)[];

export function createTalkdeskFullApiFlowsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiFlowsAPIGeneratedClient {
  return {
    FlowsFlowIdInteractionsPost: (...args) => callOperation("flows-flow-id-interactions-post", ...(args as TalkdeskFullApiOperationArgs<"flows-flow-id-interactions-post">)),
  };
}
