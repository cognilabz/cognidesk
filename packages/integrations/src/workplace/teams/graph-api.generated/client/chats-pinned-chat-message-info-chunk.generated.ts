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
export const TeamsGraphChatsPinnedChatMessageInfoOperationKeys = [
  "chats.ListPinnedMessages",
  "chats.CreatePinnedMessages",
  "chats.GetPinnedMessages",
  "chats.UpdatePinnedMessages",
  "chats.DeletePinnedMessages",
  "chats.pinnedMessages.GetMessage",
  "chats.pinnedMessages.GetCount-ad15"
] as const;
export type TeamsGraphChatsPinnedChatMessageInfoOperationKey = typeof TeamsGraphChatsPinnedChatMessageInfoOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphChatsPinnedChatMessageInfoOperationPathParamMap {
  "chats.ListPinnedMessages": { "chat-id": TeamsGraphPathParamValue };
  "chats.CreatePinnedMessages": { "chat-id": TeamsGraphPathParamValue };
  "chats.GetPinnedMessages": { "chat-id": TeamsGraphPathParamValue; "pinnedChatMessageInfo-id": TeamsGraphPathParamValue };
  "chats.UpdatePinnedMessages": { "chat-id": TeamsGraphPathParamValue; "pinnedChatMessageInfo-id": TeamsGraphPathParamValue };
  "chats.DeletePinnedMessages": { "chat-id": TeamsGraphPathParamValue; "pinnedChatMessageInfo-id": TeamsGraphPathParamValue };
  "chats.pinnedMessages.GetMessage": { "chat-id": TeamsGraphPathParamValue; "pinnedChatMessageInfo-id": TeamsGraphPathParamValue };
  "chats.pinnedMessages.GetCount-ad15": { "chat-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphChatsPinnedChatMessageInfoOperationRequestMap {
  "chats.ListPinnedMessages": TeamsGraphOperationInput<"chats.ListPinnedMessages">;
  "chats.CreatePinnedMessages": TeamsGraphOperationInput<"chats.CreatePinnedMessages">;
  "chats.GetPinnedMessages": TeamsGraphOperationInput<"chats.GetPinnedMessages">;
  "chats.UpdatePinnedMessages": TeamsGraphOperationInput<"chats.UpdatePinnedMessages">;
  "chats.DeletePinnedMessages": TeamsGraphOperationInput<"chats.DeletePinnedMessages">;
  "chats.pinnedMessages.GetMessage": TeamsGraphOperationInput<"chats.pinnedMessages.GetMessage">;
  "chats.pinnedMessages.GetCount-ad15": TeamsGraphOperationInput<"chats.pinnedMessages.GetCount-ad15">;
}

export interface TeamsGraphChatsPinnedChatMessageInfoGeneratedClient {
  ChatsListPinnedMessages(...args: TeamsGraphOperationArgs<"chats.ListPinnedMessages">): Promise<TeamsGraphOperationResponseMap["chats.ListPinnedMessages"]>;
  ChatsCreatePinnedMessages(...args: TeamsGraphOperationArgs<"chats.CreatePinnedMessages">): Promise<TeamsGraphOperationResponseMap["chats.CreatePinnedMessages"]>;
  ChatsGetPinnedMessages(...args: TeamsGraphOperationArgs<"chats.GetPinnedMessages">): Promise<TeamsGraphOperationResponseMap["chats.GetPinnedMessages"]>;
  ChatsUpdatePinnedMessages(...args: TeamsGraphOperationArgs<"chats.UpdatePinnedMessages">): Promise<TeamsGraphOperationResponseMap["chats.UpdatePinnedMessages"]>;
  ChatsDeletePinnedMessages(...args: TeamsGraphOperationArgs<"chats.DeletePinnedMessages">): Promise<TeamsGraphOperationResponseMap["chats.DeletePinnedMessages"]>;
  ChatsPinnedMessagesGetMessage(...args: TeamsGraphOperationArgs<"chats.pinnedMessages.GetMessage">): Promise<TeamsGraphOperationResponseMap["chats.pinnedMessages.GetMessage"]>;
  ChatsPinnedMessagesGetCountAd15(...args: TeamsGraphOperationArgs<"chats.pinnedMessages.GetCount-ad15">): Promise<TeamsGraphOperationResponseMap["chats.pinnedMessages.GetCount-ad15"]>;
}

export const TeamsGraphChatsPinnedChatMessageInfoGeneratedFunctionNames = [
  "ChatsListPinnedMessages",
  "ChatsCreatePinnedMessages",
  "ChatsGetPinnedMessages",
  "ChatsUpdatePinnedMessages",
  "ChatsDeletePinnedMessages",
  "ChatsPinnedMessagesGetMessage",
  "ChatsPinnedMessagesGetCountAd15"
] as const satisfies readonly (keyof TeamsGraphChatsPinnedChatMessageInfoGeneratedClient)[];

export function createTeamsGraphChatsPinnedChatMessageInfoGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphChatsPinnedChatMessageInfoGeneratedClient {
  return {
    ChatsListPinnedMessages: (...args) => callOperation("chats.ListPinnedMessages", ...(args as TeamsGraphOperationArgs<"chats.ListPinnedMessages">)),
    ChatsCreatePinnedMessages: (...args) => callOperation("chats.CreatePinnedMessages", ...(args as TeamsGraphOperationArgs<"chats.CreatePinnedMessages">)),
    ChatsGetPinnedMessages: (...args) => callOperation("chats.GetPinnedMessages", ...(args as TeamsGraphOperationArgs<"chats.GetPinnedMessages">)),
    ChatsUpdatePinnedMessages: (...args) => callOperation("chats.UpdatePinnedMessages", ...(args as TeamsGraphOperationArgs<"chats.UpdatePinnedMessages">)),
    ChatsDeletePinnedMessages: (...args) => callOperation("chats.DeletePinnedMessages", ...(args as TeamsGraphOperationArgs<"chats.DeletePinnedMessages">)),
    ChatsPinnedMessagesGetMessage: (...args) => callOperation("chats.pinnedMessages.GetMessage", ...(args as TeamsGraphOperationArgs<"chats.pinnedMessages.GetMessage">)),
    ChatsPinnedMessagesGetCountAd15: (...args) => callOperation("chats.pinnedMessages.GetCount-ad15", ...(args as TeamsGraphOperationArgs<"chats.pinnedMessages.GetCount-ad15">)),
  };
}
