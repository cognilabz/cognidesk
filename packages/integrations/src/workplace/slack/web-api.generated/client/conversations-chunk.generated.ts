// Generated endpoint chunk for SlackWebApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  SlackWebApiGeneratedOperationCaller,
  SlackWebApiOperationArgs,
  SlackWebApiOperationInput,
  SlackWebApiPathParamValue,
} from "../../web-api-client.generated.js";
import type { SlackWebApiOperationResponseMap } from "../../web-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const SlackWebApiConversationsOperationKeys = [
  "POST /conversations.archive",
  "POST /conversations.close",
  "POST /conversations.create",
  "GET /conversations.history",
  "GET /conversations.info",
  "POST /conversations.invite",
  "POST /conversations.join",
  "POST /conversations.kick",
  "POST /conversations.leave",
  "GET /conversations.list",
  "POST /conversations.mark",
  "GET /conversations.members",
  "POST /conversations.open",
  "POST /conversations.rename",
  "GET /conversations.replies",
  "POST /conversations.setPurpose",
  "POST /conversations.setTopic",
  "POST /conversations.unarchive"
] as const;
export type SlackWebApiConversationsOperationKey = typeof SlackWebApiConversationsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiConversationsOperationPathParamMap {
  "POST /conversations.archive": {};
  "POST /conversations.close": {};
  "POST /conversations.create": {};
  "GET /conversations.history": {};
  "GET /conversations.info": {};
  "POST /conversations.invite": {};
  "POST /conversations.join": {};
  "POST /conversations.kick": {};
  "POST /conversations.leave": {};
  "GET /conversations.list": {};
  "POST /conversations.mark": {};
  "GET /conversations.members": {};
  "POST /conversations.open": {};
  "POST /conversations.rename": {};
  "GET /conversations.replies": {};
  "POST /conversations.setPurpose": {};
  "POST /conversations.setTopic": {};
  "POST /conversations.unarchive": {};
}

export interface SlackWebApiConversationsOperationRequestMap {
  "POST /conversations.archive": SlackWebApiOperationInput<"POST /conversations.archive">;
  "POST /conversations.close": SlackWebApiOperationInput<"POST /conversations.close">;
  "POST /conversations.create": SlackWebApiOperationInput<"POST /conversations.create">;
  "GET /conversations.history": SlackWebApiOperationInput<"GET /conversations.history">;
  "GET /conversations.info": SlackWebApiOperationInput<"GET /conversations.info">;
  "POST /conversations.invite": SlackWebApiOperationInput<"POST /conversations.invite">;
  "POST /conversations.join": SlackWebApiOperationInput<"POST /conversations.join">;
  "POST /conversations.kick": SlackWebApiOperationInput<"POST /conversations.kick">;
  "POST /conversations.leave": SlackWebApiOperationInput<"POST /conversations.leave">;
  "GET /conversations.list": SlackWebApiOperationInput<"GET /conversations.list">;
  "POST /conversations.mark": SlackWebApiOperationInput<"POST /conversations.mark">;
  "GET /conversations.members": SlackWebApiOperationInput<"GET /conversations.members">;
  "POST /conversations.open": SlackWebApiOperationInput<"POST /conversations.open">;
  "POST /conversations.rename": SlackWebApiOperationInput<"POST /conversations.rename">;
  "GET /conversations.replies": SlackWebApiOperationInput<"GET /conversations.replies">;
  "POST /conversations.setPurpose": SlackWebApiOperationInput<"POST /conversations.setPurpose">;
  "POST /conversations.setTopic": SlackWebApiOperationInput<"POST /conversations.setTopic">;
  "POST /conversations.unarchive": SlackWebApiOperationInput<"POST /conversations.unarchive">;
}

export interface SlackWebApiConversationsGeneratedClient {
  ConversationsArchive(...args: SlackWebApiOperationArgs<"POST /conversations.archive">): Promise<SlackWebApiOperationResponseMap["POST /conversations.archive"]>;
  ConversationsClose(...args: SlackWebApiOperationArgs<"POST /conversations.close">): Promise<SlackWebApiOperationResponseMap["POST /conversations.close"]>;
  ConversationsCreate(...args: SlackWebApiOperationArgs<"POST /conversations.create">): Promise<SlackWebApiOperationResponseMap["POST /conversations.create"]>;
  ConversationsHistory(...args: SlackWebApiOperationArgs<"GET /conversations.history">): Promise<SlackWebApiOperationResponseMap["GET /conversations.history"]>;
  ConversationsInfo(...args: SlackWebApiOperationArgs<"GET /conversations.info">): Promise<SlackWebApiOperationResponseMap["GET /conversations.info"]>;
  ConversationsInvite(...args: SlackWebApiOperationArgs<"POST /conversations.invite">): Promise<SlackWebApiOperationResponseMap["POST /conversations.invite"]>;
  ConversationsJoin(...args: SlackWebApiOperationArgs<"POST /conversations.join">): Promise<SlackWebApiOperationResponseMap["POST /conversations.join"]>;
  ConversationsKick(...args: SlackWebApiOperationArgs<"POST /conversations.kick">): Promise<SlackWebApiOperationResponseMap["POST /conversations.kick"]>;
  ConversationsLeave(...args: SlackWebApiOperationArgs<"POST /conversations.leave">): Promise<SlackWebApiOperationResponseMap["POST /conversations.leave"]>;
  ConversationsList(...args: SlackWebApiOperationArgs<"GET /conversations.list">): Promise<SlackWebApiOperationResponseMap["GET /conversations.list"]>;
  ConversationsMark(...args: SlackWebApiOperationArgs<"POST /conversations.mark">): Promise<SlackWebApiOperationResponseMap["POST /conversations.mark"]>;
  ConversationsMembers(...args: SlackWebApiOperationArgs<"GET /conversations.members">): Promise<SlackWebApiOperationResponseMap["GET /conversations.members"]>;
  ConversationsOpen(...args: SlackWebApiOperationArgs<"POST /conversations.open">): Promise<SlackWebApiOperationResponseMap["POST /conversations.open"]>;
  ConversationsRename(...args: SlackWebApiOperationArgs<"POST /conversations.rename">): Promise<SlackWebApiOperationResponseMap["POST /conversations.rename"]>;
  ConversationsReplies(...args: SlackWebApiOperationArgs<"GET /conversations.replies">): Promise<SlackWebApiOperationResponseMap["GET /conversations.replies"]>;
  ConversationsSetPurpose(...args: SlackWebApiOperationArgs<"POST /conversations.setPurpose">): Promise<SlackWebApiOperationResponseMap["POST /conversations.setPurpose"]>;
  ConversationsSetTopic(...args: SlackWebApiOperationArgs<"POST /conversations.setTopic">): Promise<SlackWebApiOperationResponseMap["POST /conversations.setTopic"]>;
  ConversationsUnarchive(...args: SlackWebApiOperationArgs<"POST /conversations.unarchive">): Promise<SlackWebApiOperationResponseMap["POST /conversations.unarchive"]>;
}

export const SlackWebApiConversationsGeneratedFunctionNames = [
  "ConversationsArchive",
  "ConversationsClose",
  "ConversationsCreate",
  "ConversationsHistory",
  "ConversationsInfo",
  "ConversationsInvite",
  "ConversationsJoin",
  "ConversationsKick",
  "ConversationsLeave",
  "ConversationsList",
  "ConversationsMark",
  "ConversationsMembers",
  "ConversationsOpen",
  "ConversationsRename",
  "ConversationsReplies",
  "ConversationsSetPurpose",
  "ConversationsSetTopic",
  "ConversationsUnarchive"
] as const satisfies readonly (keyof SlackWebApiConversationsGeneratedClient)[];

export function createSlackWebApiConversationsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiConversationsGeneratedClient {
  return {
    ConversationsArchive: (...args) => callOperation("POST /conversations.archive", ...(args as SlackWebApiOperationArgs<"POST /conversations.archive">)),
    ConversationsClose: (...args) => callOperation("POST /conversations.close", ...(args as SlackWebApiOperationArgs<"POST /conversations.close">)),
    ConversationsCreate: (...args) => callOperation("POST /conversations.create", ...(args as SlackWebApiOperationArgs<"POST /conversations.create">)),
    ConversationsHistory: (...args) => callOperation("GET /conversations.history", ...(args as SlackWebApiOperationArgs<"GET /conversations.history">)),
    ConversationsInfo: (...args) => callOperation("GET /conversations.info", ...(args as SlackWebApiOperationArgs<"GET /conversations.info">)),
    ConversationsInvite: (...args) => callOperation("POST /conversations.invite", ...(args as SlackWebApiOperationArgs<"POST /conversations.invite">)),
    ConversationsJoin: (...args) => callOperation("POST /conversations.join", ...(args as SlackWebApiOperationArgs<"POST /conversations.join">)),
    ConversationsKick: (...args) => callOperation("POST /conversations.kick", ...(args as SlackWebApiOperationArgs<"POST /conversations.kick">)),
    ConversationsLeave: (...args) => callOperation("POST /conversations.leave", ...(args as SlackWebApiOperationArgs<"POST /conversations.leave">)),
    ConversationsList: (...args) => callOperation("GET /conversations.list", ...(args as SlackWebApiOperationArgs<"GET /conversations.list">)),
    ConversationsMark: (...args) => callOperation("POST /conversations.mark", ...(args as SlackWebApiOperationArgs<"POST /conversations.mark">)),
    ConversationsMembers: (...args) => callOperation("GET /conversations.members", ...(args as SlackWebApiOperationArgs<"GET /conversations.members">)),
    ConversationsOpen: (...args) => callOperation("POST /conversations.open", ...(args as SlackWebApiOperationArgs<"POST /conversations.open">)),
    ConversationsRename: (...args) => callOperation("POST /conversations.rename", ...(args as SlackWebApiOperationArgs<"POST /conversations.rename">)),
    ConversationsReplies: (...args) => callOperation("GET /conversations.replies", ...(args as SlackWebApiOperationArgs<"GET /conversations.replies">)),
    ConversationsSetPurpose: (...args) => callOperation("POST /conversations.setPurpose", ...(args as SlackWebApiOperationArgs<"POST /conversations.setPurpose">)),
    ConversationsSetTopic: (...args) => callOperation("POST /conversations.setTopic", ...(args as SlackWebApiOperationArgs<"POST /conversations.setTopic">)),
    ConversationsUnarchive: (...args) => callOperation("POST /conversations.unarchive", ...(args as SlackWebApiOperationArgs<"POST /conversations.unarchive">)),
  };
}
