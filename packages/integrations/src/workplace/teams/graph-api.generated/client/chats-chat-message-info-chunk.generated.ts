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
export const TeamsGraphChatsChatMessageInfoOperationKeys = [
  "chats.GetLastMessagePreview",
  "chats.UpdateLastMessagePreview",
  "chats.DeleteLastMessagePreview"
] as const;
export type TeamsGraphChatsChatMessageInfoOperationKey = typeof TeamsGraphChatsChatMessageInfoOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphChatsChatMessageInfoOperationPathParamMap {
  "chats.GetLastMessagePreview": { "chat-id": TeamsGraphPathParamValue };
  "chats.UpdateLastMessagePreview": { "chat-id": TeamsGraphPathParamValue };
  "chats.DeleteLastMessagePreview": { "chat-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphChatsChatMessageInfoOperationRequestMap {
  "chats.GetLastMessagePreview": TeamsGraphOperationInput<"chats.GetLastMessagePreview">;
  "chats.UpdateLastMessagePreview": TeamsGraphOperationInput<"chats.UpdateLastMessagePreview">;
  "chats.DeleteLastMessagePreview": TeamsGraphOperationInput<"chats.DeleteLastMessagePreview">;
}

export interface TeamsGraphChatsChatMessageInfoGeneratedClient {
  ChatsGetLastMessagePreview(...args: TeamsGraphOperationArgs<"chats.GetLastMessagePreview">): Promise<TeamsGraphOperationResponseMap["chats.GetLastMessagePreview"]>;
  ChatsUpdateLastMessagePreview(...args: TeamsGraphOperationArgs<"chats.UpdateLastMessagePreview">): Promise<TeamsGraphOperationResponseMap["chats.UpdateLastMessagePreview"]>;
  ChatsDeleteLastMessagePreview(...args: TeamsGraphOperationArgs<"chats.DeleteLastMessagePreview">): Promise<TeamsGraphOperationResponseMap["chats.DeleteLastMessagePreview"]>;
}

export const TeamsGraphChatsChatMessageInfoGeneratedFunctionNames = [
  "ChatsGetLastMessagePreview",
  "ChatsUpdateLastMessagePreview",
  "ChatsDeleteLastMessagePreview"
] as const satisfies readonly (keyof TeamsGraphChatsChatMessageInfoGeneratedClient)[];

export function createTeamsGraphChatsChatMessageInfoGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphChatsChatMessageInfoGeneratedClient {
  return {
    ChatsGetLastMessagePreview: (...args) => callOperation("chats.GetLastMessagePreview", ...(args as TeamsGraphOperationArgs<"chats.GetLastMessagePreview">)),
    ChatsUpdateLastMessagePreview: (...args) => callOperation("chats.UpdateLastMessagePreview", ...(args as TeamsGraphOperationArgs<"chats.UpdateLastMessagePreview">)),
    ChatsDeleteLastMessagePreview: (...args) => callOperation("chats.DeleteLastMessagePreview", ...(args as TeamsGraphOperationArgs<"chats.DeleteLastMessagePreview">)),
  };
}
