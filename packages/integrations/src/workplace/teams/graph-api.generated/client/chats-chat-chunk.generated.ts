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
export const TeamsGraphChatsChatOperationKeys = [
  "chats.chat.ListChat",
  "chats.chat.CreateChat",
  "chats.chat.GetChat",
  "chats.chat.UpdateChat",
  "chats.chat.DeleteChat",
  "chats.GetCount-61c7"
] as const;
export type TeamsGraphChatsChatOperationKey = typeof TeamsGraphChatsChatOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphChatsChatOperationPathParamMap {
  "chats.chat.ListChat": {};
  "chats.chat.CreateChat": {};
  "chats.chat.GetChat": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.UpdateChat": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.DeleteChat": { "chat-id": TeamsGraphPathParamValue };
  "chats.GetCount-61c7": {};
}

export interface TeamsGraphChatsChatOperationRequestMap {
  "chats.chat.ListChat": TeamsGraphOperationInput<"chats.chat.ListChat">;
  "chats.chat.CreateChat": TeamsGraphOperationInput<"chats.chat.CreateChat">;
  "chats.chat.GetChat": TeamsGraphOperationInput<"chats.chat.GetChat">;
  "chats.chat.UpdateChat": TeamsGraphOperationInput<"chats.chat.UpdateChat">;
  "chats.chat.DeleteChat": TeamsGraphOperationInput<"chats.chat.DeleteChat">;
  "chats.GetCount-61c7": TeamsGraphOperationInput<"chats.GetCount-61c7">;
}

export interface TeamsGraphChatsChatGeneratedClient {
  ChatsChatListChat(...args: TeamsGraphOperationArgs<"chats.chat.ListChat">): Promise<TeamsGraphOperationResponseMap["chats.chat.ListChat"]>;
  ChatsChatCreateChat(...args: TeamsGraphOperationArgs<"chats.chat.CreateChat">): Promise<TeamsGraphOperationResponseMap["chats.chat.CreateChat"]>;
  ChatsChatGetChat(...args: TeamsGraphOperationArgs<"chats.chat.GetChat">): Promise<TeamsGraphOperationResponseMap["chats.chat.GetChat"]>;
  ChatsChatUpdateChat(...args: TeamsGraphOperationArgs<"chats.chat.UpdateChat">): Promise<TeamsGraphOperationResponseMap["chats.chat.UpdateChat"]>;
  ChatsChatDeleteChat(...args: TeamsGraphOperationArgs<"chats.chat.DeleteChat">): Promise<TeamsGraphOperationResponseMap["chats.chat.DeleteChat"]>;
  ChatsGetCount61c7(...args: TeamsGraphOperationArgs<"chats.GetCount-61c7">): Promise<TeamsGraphOperationResponseMap["chats.GetCount-61c7"]>;
}

export const TeamsGraphChatsChatGeneratedFunctionNames = [
  "ChatsChatListChat",
  "ChatsChatCreateChat",
  "ChatsChatGetChat",
  "ChatsChatUpdateChat",
  "ChatsChatDeleteChat",
  "ChatsGetCount61c7"
] as const satisfies readonly (keyof TeamsGraphChatsChatGeneratedClient)[];

export function createTeamsGraphChatsChatGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphChatsChatGeneratedClient {
  return {
    ChatsChatListChat: (...args) => callOperation("chats.chat.ListChat", ...(args as TeamsGraphOperationArgs<"chats.chat.ListChat">)),
    ChatsChatCreateChat: (...args) => callOperation("chats.chat.CreateChat", ...(args as TeamsGraphOperationArgs<"chats.chat.CreateChat">)),
    ChatsChatGetChat: (...args) => callOperation("chats.chat.GetChat", ...(args as TeamsGraphOperationArgs<"chats.chat.GetChat">)),
    ChatsChatUpdateChat: (...args) => callOperation("chats.chat.UpdateChat", ...(args as TeamsGraphOperationArgs<"chats.chat.UpdateChat">)),
    ChatsChatDeleteChat: (...args) => callOperation("chats.chat.DeleteChat", ...(args as TeamsGraphOperationArgs<"chats.chat.DeleteChat">)),
    ChatsGetCount61c7: (...args) => callOperation("chats.GetCount-61c7", ...(args as TeamsGraphOperationArgs<"chats.GetCount-61c7">)),
  };
}
