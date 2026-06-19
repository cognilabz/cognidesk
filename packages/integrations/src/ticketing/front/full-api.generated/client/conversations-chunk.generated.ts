// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiConversationsOperationKeys = [
  "list-conversations",
  "create-conversation",
  "delete-conversation",
  "get-conversation-by-id",
  "update-conversation",
  "update-conversation-assignee",
  "list-conversation-events",
  "delete-conversation-followers",
  "list-conversation-followers",
  "add-conversation-followers",
  "list-conversation-inboxes",
  "remove-conversation-links",
  "add-conversation-link",
  "list-conversation-messages",
  "update-conversation-reminders",
  "remove-conversation-tag",
  "add-conversation-tag",
  "search-conversations"
] as const;
export type FrontFullApiConversationsOperationKey = typeof FrontFullApiConversationsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiConversationsOperationPathParamMap {
  "list-conversations": {};
  "create-conversation": {};
  "delete-conversation": { "conversation_id": FrontFullApiPathParamValue };
  "get-conversation-by-id": { "conversation_id": FrontFullApiPathParamValue };
  "update-conversation": { "conversation_id": FrontFullApiPathParamValue };
  "update-conversation-assignee": { "conversation_id": FrontFullApiPathParamValue };
  "list-conversation-events": { "conversation_id": FrontFullApiPathParamValue };
  "delete-conversation-followers": { "conversation_id": FrontFullApiPathParamValue };
  "list-conversation-followers": { "conversation_id": FrontFullApiPathParamValue };
  "add-conversation-followers": { "conversation_id": FrontFullApiPathParamValue };
  "list-conversation-inboxes": { "conversation_id": FrontFullApiPathParamValue };
  "remove-conversation-links": { "conversation_id": FrontFullApiPathParamValue };
  "add-conversation-link": { "conversation_id": FrontFullApiPathParamValue };
  "list-conversation-messages": { "conversation_id": FrontFullApiPathParamValue };
  "update-conversation-reminders": { "conversation_id": FrontFullApiPathParamValue };
  "remove-conversation-tag": { "conversation_id": FrontFullApiPathParamValue };
  "add-conversation-tag": { "conversation_id": FrontFullApiPathParamValue };
  "search-conversations": { "query": FrontFullApiPathParamValue };
}

export interface FrontFullApiConversationsOperationRequestMap {
  "list-conversations": FrontFullApiOperationInput<"list-conversations">;
  "create-conversation": FrontFullApiOperationInput<"create-conversation">;
  "delete-conversation": FrontFullApiOperationInput<"delete-conversation">;
  "get-conversation-by-id": FrontFullApiOperationInput<"get-conversation-by-id">;
  "update-conversation": FrontFullApiOperationInput<"update-conversation">;
  "update-conversation-assignee": FrontFullApiOperationInput<"update-conversation-assignee">;
  "list-conversation-events": FrontFullApiOperationInput<"list-conversation-events">;
  "delete-conversation-followers": FrontFullApiOperationInput<"delete-conversation-followers">;
  "list-conversation-followers": FrontFullApiOperationInput<"list-conversation-followers">;
  "add-conversation-followers": FrontFullApiOperationInput<"add-conversation-followers">;
  "list-conversation-inboxes": FrontFullApiOperationInput<"list-conversation-inboxes">;
  "remove-conversation-links": FrontFullApiOperationInput<"remove-conversation-links">;
  "add-conversation-link": FrontFullApiOperationInput<"add-conversation-link">;
  "list-conversation-messages": FrontFullApiOperationInput<"list-conversation-messages">;
  "update-conversation-reminders": FrontFullApiOperationInput<"update-conversation-reminders">;
  "remove-conversation-tag": FrontFullApiOperationInput<"remove-conversation-tag">;
  "add-conversation-tag": FrontFullApiOperationInput<"add-conversation-tag">;
  "search-conversations": FrontFullApiOperationInput<"search-conversations">;
}

export interface FrontFullApiConversationsGeneratedClient {
  frontListConversations(...args: FrontFullApiOperationArgs<"list-conversations">): Promise<FrontFullApiOperationResponseMap["list-conversations"]>;
  frontCreateConversation(...args: FrontFullApiOperationArgs<"create-conversation">): Promise<FrontFullApiOperationResponseMap["create-conversation"]>;
  frontDeleteConversation(...args: FrontFullApiOperationArgs<"delete-conversation">): Promise<FrontFullApiOperationResponseMap["delete-conversation"]>;
  frontGetConversationById(...args: FrontFullApiOperationArgs<"get-conversation-by-id">): Promise<FrontFullApiOperationResponseMap["get-conversation-by-id"]>;
  frontUpdateConversation(...args: FrontFullApiOperationArgs<"update-conversation">): Promise<FrontFullApiOperationResponseMap["update-conversation"]>;
  frontUpdateConversationAssignee(...args: FrontFullApiOperationArgs<"update-conversation-assignee">): Promise<FrontFullApiOperationResponseMap["update-conversation-assignee"]>;
  frontListConversationEvents(...args: FrontFullApiOperationArgs<"list-conversation-events">): Promise<FrontFullApiOperationResponseMap["list-conversation-events"]>;
  frontDeleteConversationFollowers(...args: FrontFullApiOperationArgs<"delete-conversation-followers">): Promise<FrontFullApiOperationResponseMap["delete-conversation-followers"]>;
  frontListConversationFollowers(...args: FrontFullApiOperationArgs<"list-conversation-followers">): Promise<FrontFullApiOperationResponseMap["list-conversation-followers"]>;
  frontAddConversationFollowers(...args: FrontFullApiOperationArgs<"add-conversation-followers">): Promise<FrontFullApiOperationResponseMap["add-conversation-followers"]>;
  frontListConversationInboxes(...args: FrontFullApiOperationArgs<"list-conversation-inboxes">): Promise<FrontFullApiOperationResponseMap["list-conversation-inboxes"]>;
  frontRemoveConversationLinks(...args: FrontFullApiOperationArgs<"remove-conversation-links">): Promise<FrontFullApiOperationResponseMap["remove-conversation-links"]>;
  frontAddConversationLink(...args: FrontFullApiOperationArgs<"add-conversation-link">): Promise<FrontFullApiOperationResponseMap["add-conversation-link"]>;
  frontListConversationMessages(...args: FrontFullApiOperationArgs<"list-conversation-messages">): Promise<FrontFullApiOperationResponseMap["list-conversation-messages"]>;
  frontUpdateConversationReminders(...args: FrontFullApiOperationArgs<"update-conversation-reminders">): Promise<FrontFullApiOperationResponseMap["update-conversation-reminders"]>;
  frontRemoveConversationTag(...args: FrontFullApiOperationArgs<"remove-conversation-tag">): Promise<FrontFullApiOperationResponseMap["remove-conversation-tag"]>;
  frontAddConversationTag(...args: FrontFullApiOperationArgs<"add-conversation-tag">): Promise<FrontFullApiOperationResponseMap["add-conversation-tag"]>;
  frontSearchConversations(...args: FrontFullApiOperationArgs<"search-conversations">): Promise<FrontFullApiOperationResponseMap["search-conversations"]>;
}

export const FrontFullApiConversationsGeneratedFunctionNames = [
  "frontListConversations",
  "frontCreateConversation",
  "frontDeleteConversation",
  "frontGetConversationById",
  "frontUpdateConversation",
  "frontUpdateConversationAssignee",
  "frontListConversationEvents",
  "frontDeleteConversationFollowers",
  "frontListConversationFollowers",
  "frontAddConversationFollowers",
  "frontListConversationInboxes",
  "frontRemoveConversationLinks",
  "frontAddConversationLink",
  "frontListConversationMessages",
  "frontUpdateConversationReminders",
  "frontRemoveConversationTag",
  "frontAddConversationTag",
  "frontSearchConversations"
] as const satisfies readonly (keyof FrontFullApiConversationsGeneratedClient)[];

export function createFrontFullApiConversationsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiConversationsGeneratedClient {
  return {
    frontListConversations: (...args) => callOperation("list-conversations", ...(args as FrontFullApiOperationArgs<"list-conversations">)),
    frontCreateConversation: (...args) => callOperation("create-conversation", ...(args as FrontFullApiOperationArgs<"create-conversation">)),
    frontDeleteConversation: (...args) => callOperation("delete-conversation", ...(args as FrontFullApiOperationArgs<"delete-conversation">)),
    frontGetConversationById: (...args) => callOperation("get-conversation-by-id", ...(args as FrontFullApiOperationArgs<"get-conversation-by-id">)),
    frontUpdateConversation: (...args) => callOperation("update-conversation", ...(args as FrontFullApiOperationArgs<"update-conversation">)),
    frontUpdateConversationAssignee: (...args) => callOperation("update-conversation-assignee", ...(args as FrontFullApiOperationArgs<"update-conversation-assignee">)),
    frontListConversationEvents: (...args) => callOperation("list-conversation-events", ...(args as FrontFullApiOperationArgs<"list-conversation-events">)),
    frontDeleteConversationFollowers: (...args) => callOperation("delete-conversation-followers", ...(args as FrontFullApiOperationArgs<"delete-conversation-followers">)),
    frontListConversationFollowers: (...args) => callOperation("list-conversation-followers", ...(args as FrontFullApiOperationArgs<"list-conversation-followers">)),
    frontAddConversationFollowers: (...args) => callOperation("add-conversation-followers", ...(args as FrontFullApiOperationArgs<"add-conversation-followers">)),
    frontListConversationInboxes: (...args) => callOperation("list-conversation-inboxes", ...(args as FrontFullApiOperationArgs<"list-conversation-inboxes">)),
    frontRemoveConversationLinks: (...args) => callOperation("remove-conversation-links", ...(args as FrontFullApiOperationArgs<"remove-conversation-links">)),
    frontAddConversationLink: (...args) => callOperation("add-conversation-link", ...(args as FrontFullApiOperationArgs<"add-conversation-link">)),
    frontListConversationMessages: (...args) => callOperation("list-conversation-messages", ...(args as FrontFullApiOperationArgs<"list-conversation-messages">)),
    frontUpdateConversationReminders: (...args) => callOperation("update-conversation-reminders", ...(args as FrontFullApiOperationArgs<"update-conversation-reminders">)),
    frontRemoveConversationTag: (...args) => callOperation("remove-conversation-tag", ...(args as FrontFullApiOperationArgs<"remove-conversation-tag">)),
    frontAddConversationTag: (...args) => callOperation("add-conversation-tag", ...(args as FrontFullApiOperationArgs<"add-conversation-tag">)),
    frontSearchConversations: (...args) => callOperation("search-conversations", ...(args as FrontFullApiOperationArgs<"search-conversations">)),
  };
}
