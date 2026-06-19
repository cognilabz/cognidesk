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
export const TalkdeskFullApiCallbackAPIOperationKeys = [
  "calls-callback-post"
] as const;
export type TalkdeskFullApiCallbackAPIOperationKey = typeof TalkdeskFullApiCallbackAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiCallbackAPIOperationPathParamMap {
  "calls-callback-post": {};
}

export interface TalkdeskFullApiCallbackAPIOperationRequestMap {
  "calls-callback-post": TalkdeskFullApiOperationInput<"calls-callback-post">;
}

export interface TalkdeskFullApiCallbackAPIGeneratedClient {
  CallsCallbackPost(...args: TalkdeskFullApiOperationArgs<"calls-callback-post">): Promise<TalkdeskFullApiOperationResponseMap["calls-callback-post"]>;
}

export const TalkdeskFullApiCallbackAPIGeneratedFunctionNames = [
  "CallsCallbackPost"
] as const satisfies readonly (keyof TalkdeskFullApiCallbackAPIGeneratedClient)[];

export function createTalkdeskFullApiCallbackAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiCallbackAPIGeneratedClient {
  return {
    CallsCallbackPost: (...args) => callOperation("calls-callback-post", ...(args as TalkdeskFullApiOperationArgs<"calls-callback-post">)),
  };
}
