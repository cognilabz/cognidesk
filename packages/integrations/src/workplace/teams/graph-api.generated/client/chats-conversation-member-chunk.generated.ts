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
export const TeamsGraphChatsConversationMemberOperationKeys = [
  "chats.ListMembers",
  "chats.CreateMembers",
  "chats.GetMembers",
  "chats.UpdateMembers",
  "chats.DeleteMembers",
  "chats.members.GetCount-9627",
  "chats.chat.members.add",
  "chats.chat.members.remove"
] as const;
export type TeamsGraphChatsConversationMemberOperationKey = typeof TeamsGraphChatsConversationMemberOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphChatsConversationMemberOperationPathParamMap {
  "chats.ListMembers": { "chat-id": TeamsGraphPathParamValue };
  "chats.CreateMembers": { "chat-id": TeamsGraphPathParamValue };
  "chats.GetMembers": { "chat-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "chats.UpdateMembers": { "chat-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "chats.DeleteMembers": { "chat-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "chats.members.GetCount-9627": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.members.add": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.members.remove": { "chat-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphChatsConversationMemberOperationRequestMap {
  "chats.ListMembers": TeamsGraphOperationInput<"chats.ListMembers">;
  "chats.CreateMembers": TeamsGraphOperationInput<"chats.CreateMembers">;
  "chats.GetMembers": TeamsGraphOperationInput<"chats.GetMembers">;
  "chats.UpdateMembers": TeamsGraphOperationInput<"chats.UpdateMembers">;
  "chats.DeleteMembers": TeamsGraphOperationInput<"chats.DeleteMembers">;
  "chats.members.GetCount-9627": TeamsGraphOperationInput<"chats.members.GetCount-9627">;
  "chats.chat.members.add": TeamsGraphOperationInput<"chats.chat.members.add">;
  "chats.chat.members.remove": TeamsGraphOperationInput<"chats.chat.members.remove">;
}

export interface TeamsGraphChatsConversationMemberGeneratedClient {
  ChatsListMembers(...args: TeamsGraphOperationArgs<"chats.ListMembers">): Promise<TeamsGraphOperationResponseMap["chats.ListMembers"]>;
  ChatsCreateMembers(...args: TeamsGraphOperationArgs<"chats.CreateMembers">): Promise<TeamsGraphOperationResponseMap["chats.CreateMembers"]>;
  ChatsGetMembers(...args: TeamsGraphOperationArgs<"chats.GetMembers">): Promise<TeamsGraphOperationResponseMap["chats.GetMembers"]>;
  ChatsUpdateMembers(...args: TeamsGraphOperationArgs<"chats.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["chats.UpdateMembers"]>;
  ChatsDeleteMembers(...args: TeamsGraphOperationArgs<"chats.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["chats.DeleteMembers"]>;
  ChatsMembersGetCount9627(...args: TeamsGraphOperationArgs<"chats.members.GetCount-9627">): Promise<TeamsGraphOperationResponseMap["chats.members.GetCount-9627"]>;
  ChatsChatMembersAdd(...args: TeamsGraphOperationArgs<"chats.chat.members.add">): Promise<TeamsGraphOperationResponseMap["chats.chat.members.add"]>;
  ChatsChatMembersRemove(...args: TeamsGraphOperationArgs<"chats.chat.members.remove">): Promise<TeamsGraphOperationResponseMap["chats.chat.members.remove"]>;
}

export const TeamsGraphChatsConversationMemberGeneratedFunctionNames = [
  "ChatsListMembers",
  "ChatsCreateMembers",
  "ChatsGetMembers",
  "ChatsUpdateMembers",
  "ChatsDeleteMembers",
  "ChatsMembersGetCount9627",
  "ChatsChatMembersAdd",
  "ChatsChatMembersRemove"
] as const satisfies readonly (keyof TeamsGraphChatsConversationMemberGeneratedClient)[];

export function createTeamsGraphChatsConversationMemberGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphChatsConversationMemberGeneratedClient {
  return {
    ChatsListMembers: (...args) => callOperation("chats.ListMembers", ...(args as TeamsGraphOperationArgs<"chats.ListMembers">)),
    ChatsCreateMembers: (...args) => callOperation("chats.CreateMembers", ...(args as TeamsGraphOperationArgs<"chats.CreateMembers">)),
    ChatsGetMembers: (...args) => callOperation("chats.GetMembers", ...(args as TeamsGraphOperationArgs<"chats.GetMembers">)),
    ChatsUpdateMembers: (...args) => callOperation("chats.UpdateMembers", ...(args as TeamsGraphOperationArgs<"chats.UpdateMembers">)),
    ChatsDeleteMembers: (...args) => callOperation("chats.DeleteMembers", ...(args as TeamsGraphOperationArgs<"chats.DeleteMembers">)),
    ChatsMembersGetCount9627: (...args) => callOperation("chats.members.GetCount-9627", ...(args as TeamsGraphOperationArgs<"chats.members.GetCount-9627">)),
    ChatsChatMembersAdd: (...args) => callOperation("chats.chat.members.add", ...(args as TeamsGraphOperationArgs<"chats.chat.members.add">)),
    ChatsChatMembersRemove: (...args) => callOperation("chats.chat.members.remove", ...(args as TeamsGraphOperationArgs<"chats.chat.members.remove">)),
  };
}
