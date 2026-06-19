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
export const TalkdeskFullApiFeedbackAPIOperationKeys = [
  "CollectFeedbackData"
] as const;
export type TalkdeskFullApiFeedbackAPIOperationKey = typeof TalkdeskFullApiFeedbackAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiFeedbackAPIOperationPathParamMap {
  "CollectFeedbackData": {};
}

export interface TalkdeskFullApiFeedbackAPIOperationRequestMap {
  "CollectFeedbackData": TalkdeskFullApiOperationInput<"CollectFeedbackData">;
}

export interface TalkdeskFullApiFeedbackAPIGeneratedClient {
  CollectFeedbackData(...args: TalkdeskFullApiOperationArgs<"CollectFeedbackData">): Promise<TalkdeskFullApiOperationResponseMap["CollectFeedbackData"]>;
}

export const TalkdeskFullApiFeedbackAPIGeneratedFunctionNames = [
  "CollectFeedbackData"
] as const satisfies readonly (keyof TalkdeskFullApiFeedbackAPIGeneratedClient)[];

export function createTalkdeskFullApiFeedbackAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiFeedbackAPIGeneratedClient {
  return {
    CollectFeedbackData: (...args) => callOperation("CollectFeedbackData", ...(args as TalkdeskFullApiOperationArgs<"CollectFeedbackData">)),
  };
}
