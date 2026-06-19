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
export const TeamsGraphChatsChatActionsOperationKeys = [
  "chats.chat.completeMigration",
  "chats.chat.hideForUser",
  "chats.chat.markChatReadForUser",
  "chats.chat.markChatUnreadForUser",
  "chats.chat.removeAllAccessForUser",
  "chats.chat.sendActivityNotification",
  "chats.chat.startMigration",
  "chats.chat.unhideForUser"
] as const;
export type TeamsGraphChatsChatActionsOperationKey = typeof TeamsGraphChatsChatActionsOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphChatsChatActionsOperationPathParamMap {
  "chats.chat.completeMigration": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.hideForUser": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.markChatReadForUser": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.markChatUnreadForUser": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.removeAllAccessForUser": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.sendActivityNotification": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.startMigration": { "chat-id": TeamsGraphPathParamValue };
  "chats.chat.unhideForUser": { "chat-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphChatsChatActionsOperationRequestMap {
  "chats.chat.completeMigration": TeamsGraphOperationInput<"chats.chat.completeMigration">;
  "chats.chat.hideForUser": TeamsGraphOperationInput<"chats.chat.hideForUser">;
  "chats.chat.markChatReadForUser": TeamsGraphOperationInput<"chats.chat.markChatReadForUser">;
  "chats.chat.markChatUnreadForUser": TeamsGraphOperationInput<"chats.chat.markChatUnreadForUser">;
  "chats.chat.removeAllAccessForUser": TeamsGraphOperationInput<"chats.chat.removeAllAccessForUser">;
  "chats.chat.sendActivityNotification": TeamsGraphOperationInput<"chats.chat.sendActivityNotification">;
  "chats.chat.startMigration": TeamsGraphOperationInput<"chats.chat.startMigration">;
  "chats.chat.unhideForUser": TeamsGraphOperationInput<"chats.chat.unhideForUser">;
}

export interface TeamsGraphChatsChatActionsGeneratedClient {
  ChatsChatCompleteMigration(...args: TeamsGraphOperationArgs<"chats.chat.completeMigration">): Promise<TeamsGraphOperationResponseMap["chats.chat.completeMigration"]>;
  ChatsChatHideForUser(...args: TeamsGraphOperationArgs<"chats.chat.hideForUser">): Promise<TeamsGraphOperationResponseMap["chats.chat.hideForUser"]>;
  ChatsChatMarkChatReadForUser(...args: TeamsGraphOperationArgs<"chats.chat.markChatReadForUser">): Promise<TeamsGraphOperationResponseMap["chats.chat.markChatReadForUser"]>;
  ChatsChatMarkChatUnreadForUser(...args: TeamsGraphOperationArgs<"chats.chat.markChatUnreadForUser">): Promise<TeamsGraphOperationResponseMap["chats.chat.markChatUnreadForUser"]>;
  ChatsChatRemoveAllAccessForUser(...args: TeamsGraphOperationArgs<"chats.chat.removeAllAccessForUser">): Promise<TeamsGraphOperationResponseMap["chats.chat.removeAllAccessForUser"]>;
  ChatsChatSendActivityNotification(...args: TeamsGraphOperationArgs<"chats.chat.sendActivityNotification">): Promise<TeamsGraphOperationResponseMap["chats.chat.sendActivityNotification"]>;
  ChatsChatStartMigration(...args: TeamsGraphOperationArgs<"chats.chat.startMigration">): Promise<TeamsGraphOperationResponseMap["chats.chat.startMigration"]>;
  ChatsChatUnhideForUser(...args: TeamsGraphOperationArgs<"chats.chat.unhideForUser">): Promise<TeamsGraphOperationResponseMap["chats.chat.unhideForUser"]>;
}

export const TeamsGraphChatsChatActionsGeneratedFunctionNames = [
  "ChatsChatCompleteMigration",
  "ChatsChatHideForUser",
  "ChatsChatMarkChatReadForUser",
  "ChatsChatMarkChatUnreadForUser",
  "ChatsChatRemoveAllAccessForUser",
  "ChatsChatSendActivityNotification",
  "ChatsChatStartMigration",
  "ChatsChatUnhideForUser"
] as const satisfies readonly (keyof TeamsGraphChatsChatActionsGeneratedClient)[];

export function createTeamsGraphChatsChatActionsGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphChatsChatActionsGeneratedClient {
  return {
    ChatsChatCompleteMigration: (...args) => callOperation("chats.chat.completeMigration", ...(args as TeamsGraphOperationArgs<"chats.chat.completeMigration">)),
    ChatsChatHideForUser: (...args) => callOperation("chats.chat.hideForUser", ...(args as TeamsGraphOperationArgs<"chats.chat.hideForUser">)),
    ChatsChatMarkChatReadForUser: (...args) => callOperation("chats.chat.markChatReadForUser", ...(args as TeamsGraphOperationArgs<"chats.chat.markChatReadForUser">)),
    ChatsChatMarkChatUnreadForUser: (...args) => callOperation("chats.chat.markChatUnreadForUser", ...(args as TeamsGraphOperationArgs<"chats.chat.markChatUnreadForUser">)),
    ChatsChatRemoveAllAccessForUser: (...args) => callOperation("chats.chat.removeAllAccessForUser", ...(args as TeamsGraphOperationArgs<"chats.chat.removeAllAccessForUser">)),
    ChatsChatSendActivityNotification: (...args) => callOperation("chats.chat.sendActivityNotification", ...(args as TeamsGraphOperationArgs<"chats.chat.sendActivityNotification">)),
    ChatsChatStartMigration: (...args) => callOperation("chats.chat.startMigration", ...(args as TeamsGraphOperationArgs<"chats.chat.startMigration">)),
    ChatsChatUnhideForUser: (...args) => callOperation("chats.chat.unhideForUser", ...(args as TeamsGraphOperationArgs<"chats.chat.unhideForUser">)),
  };
}
