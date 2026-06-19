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
export const TalkdeskFullApiMessagesOperationKeys = [
  "messages-post"
] as const;
export type TalkdeskFullApiMessagesOperationKey = typeof TalkdeskFullApiMessagesOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiMessagesOperationPathParamMap {
  "messages-post": {};
}

export interface TalkdeskFullApiMessagesOperationRequestMap {
  "messages-post": TalkdeskFullApiOperationInput<"messages-post">;
}

export interface TalkdeskFullApiMessagesGeneratedClient {
  MessagesPost(...args: TalkdeskFullApiOperationArgs<"messages-post">): Promise<TalkdeskFullApiOperationResponseMap["messages-post"]>;
}

export const TalkdeskFullApiMessagesGeneratedFunctionNames = [
  "MessagesPost"
] as const satisfies readonly (keyof TalkdeskFullApiMessagesGeneratedClient)[];

export function createTalkdeskFullApiMessagesGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiMessagesGeneratedClient {
  return {
    MessagesPost: (...args) => callOperation("messages-post", ...(args as TalkdeskFullApiOperationArgs<"messages-post">)),
  };
}
