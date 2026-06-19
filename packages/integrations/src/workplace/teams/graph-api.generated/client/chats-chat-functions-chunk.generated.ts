// Generated endpoint chunk for TeamsGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TeamsGraphGeneratedOperationCaller,
  TeamsGraphOperationArgs,
  TeamsGraphOperationInput,
  TeamsGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { TeamsGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TeamsGraphChatsChatFunctionsOperationKeys = [
  "chats.getAllMessages",
  "chats.getAllRetainedMessages"
] as const;
export type TeamsGraphChatsChatFunctionsOperationKey = typeof TeamsGraphChatsChatFunctionsOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphChatsChatFunctionsOperationPathParamMap {
  "chats.getAllMessages": {};
  "chats.getAllRetainedMessages": {};
}

export interface TeamsGraphChatsChatFunctionsOperationRequestMap {
  "chats.getAllMessages": TeamsGraphOperationInput<"chats.getAllMessages">;
  "chats.getAllRetainedMessages": TeamsGraphOperationInput<"chats.getAllRetainedMessages">;
}

export interface TeamsGraphChatsChatFunctionsGeneratedClient {
  ChatsGetAllMessages(...args: TeamsGraphOperationArgs<"chats.getAllMessages">): Promise<TeamsGraphOperationResponseMap["chats.getAllMessages"]>;
  ChatsGetAllRetainedMessages(...args: TeamsGraphOperationArgs<"chats.getAllRetainedMessages">): Promise<TeamsGraphOperationResponseMap["chats.getAllRetainedMessages"]>;
}

export const TeamsGraphChatsChatFunctionsGeneratedFunctionNames = [
  "ChatsGetAllMessages",
  "ChatsGetAllRetainedMessages"
] as const satisfies readonly (keyof TeamsGraphChatsChatFunctionsGeneratedClient)[];

export function createTeamsGraphChatsChatFunctionsGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphChatsChatFunctionsGeneratedClient {
  return {
    ChatsGetAllMessages: (...args) => callOperation("chats.getAllMessages", ...(args as TeamsGraphOperationArgs<"chats.getAllMessages">)),
    ChatsGetAllRetainedMessages: (...args) => callOperation("chats.getAllRetainedMessages", ...(args as TeamsGraphOperationArgs<"chats.getAllRetainedMessages">)),
  };
}
