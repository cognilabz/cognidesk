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
export const TalkdeskFullApiStudioCallbackOperationKeys = [
  "studio-callbacks-get"
] as const;
export type TalkdeskFullApiStudioCallbackOperationKey = typeof TalkdeskFullApiStudioCallbackOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiStudioCallbackOperationPathParamMap {
  "studio-callbacks-get": {};
}

export interface TalkdeskFullApiStudioCallbackOperationRequestMap {
  "studio-callbacks-get": TalkdeskFullApiOperationInput<"studio-callbacks-get">;
}

export interface TalkdeskFullApiStudioCallbackGeneratedClient {
  StudioCallbacksGet(...args: TalkdeskFullApiOperationArgs<"studio-callbacks-get">): Promise<TalkdeskFullApiOperationResponseMap["studio-callbacks-get"]>;
}

export const TalkdeskFullApiStudioCallbackGeneratedFunctionNames = [
  "StudioCallbacksGet"
] as const satisfies readonly (keyof TalkdeskFullApiStudioCallbackGeneratedClient)[];

export function createTalkdeskFullApiStudioCallbackGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiStudioCallbackGeneratedClient {
  return {
    StudioCallbacksGet: (...args) => callOperation("studio-callbacks-get", ...(args as TalkdeskFullApiOperationArgs<"studio-callbacks-get">)),
  };
}
