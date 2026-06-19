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
export const TeamsGraphChatsTeamsTabOperationKeys = [
  "chats.ListTabs",
  "chats.CreateTabs",
  "chats.GetTabs",
  "chats.UpdateTabs",
  "chats.DeleteTabs",
  "chats.tabs.GetTeamsApp",
  "chats.tabs.GetCount-b645"
] as const;
export type TeamsGraphChatsTeamsTabOperationKey = typeof TeamsGraphChatsTeamsTabOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphChatsTeamsTabOperationPathParamMap {
  "chats.ListTabs": { "chat-id": TeamsGraphPathParamValue };
  "chats.CreateTabs": { "chat-id": TeamsGraphPathParamValue };
  "chats.GetTabs": { "chat-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "chats.UpdateTabs": { "chat-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "chats.DeleteTabs": { "chat-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "chats.tabs.GetTeamsApp": { "chat-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "chats.tabs.GetCount-b645": { "chat-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphChatsTeamsTabOperationRequestMap {
  "chats.ListTabs": TeamsGraphOperationInput<"chats.ListTabs">;
  "chats.CreateTabs": TeamsGraphOperationInput<"chats.CreateTabs">;
  "chats.GetTabs": TeamsGraphOperationInput<"chats.GetTabs">;
  "chats.UpdateTabs": TeamsGraphOperationInput<"chats.UpdateTabs">;
  "chats.DeleteTabs": TeamsGraphOperationInput<"chats.DeleteTabs">;
  "chats.tabs.GetTeamsApp": TeamsGraphOperationInput<"chats.tabs.GetTeamsApp">;
  "chats.tabs.GetCount-b645": TeamsGraphOperationInput<"chats.tabs.GetCount-b645">;
}

export interface TeamsGraphChatsTeamsTabGeneratedClient {
  ChatsListTabs(...args: TeamsGraphOperationArgs<"chats.ListTabs">): Promise<TeamsGraphOperationResponseMap["chats.ListTabs"]>;
  ChatsCreateTabs(...args: TeamsGraphOperationArgs<"chats.CreateTabs">): Promise<TeamsGraphOperationResponseMap["chats.CreateTabs"]>;
  ChatsGetTabs(...args: TeamsGraphOperationArgs<"chats.GetTabs">): Promise<TeamsGraphOperationResponseMap["chats.GetTabs"]>;
  ChatsUpdateTabs(...args: TeamsGraphOperationArgs<"chats.UpdateTabs">): Promise<TeamsGraphOperationResponseMap["chats.UpdateTabs"]>;
  ChatsDeleteTabs(...args: TeamsGraphOperationArgs<"chats.DeleteTabs">): Promise<TeamsGraphOperationResponseMap["chats.DeleteTabs"]>;
  ChatsTabsGetTeamsApp(...args: TeamsGraphOperationArgs<"chats.tabs.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["chats.tabs.GetTeamsApp"]>;
  ChatsTabsGetCountB645(...args: TeamsGraphOperationArgs<"chats.tabs.GetCount-b645">): Promise<TeamsGraphOperationResponseMap["chats.tabs.GetCount-b645"]>;
}

export const TeamsGraphChatsTeamsTabGeneratedFunctionNames = [
  "ChatsListTabs",
  "ChatsCreateTabs",
  "ChatsGetTabs",
  "ChatsUpdateTabs",
  "ChatsDeleteTabs",
  "ChatsTabsGetTeamsApp",
  "ChatsTabsGetCountB645"
] as const satisfies readonly (keyof TeamsGraphChatsTeamsTabGeneratedClient)[];

export function createTeamsGraphChatsTeamsTabGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphChatsTeamsTabGeneratedClient {
  return {
    ChatsListTabs: (...args) => callOperation("chats.ListTabs", ...(args as TeamsGraphOperationArgs<"chats.ListTabs">)),
    ChatsCreateTabs: (...args) => callOperation("chats.CreateTabs", ...(args as TeamsGraphOperationArgs<"chats.CreateTabs">)),
    ChatsGetTabs: (...args) => callOperation("chats.GetTabs", ...(args as TeamsGraphOperationArgs<"chats.GetTabs">)),
    ChatsUpdateTabs: (...args) => callOperation("chats.UpdateTabs", ...(args as TeamsGraphOperationArgs<"chats.UpdateTabs">)),
    ChatsDeleteTabs: (...args) => callOperation("chats.DeleteTabs", ...(args as TeamsGraphOperationArgs<"chats.DeleteTabs">)),
    ChatsTabsGetTeamsApp: (...args) => callOperation("chats.tabs.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"chats.tabs.GetTeamsApp">)),
    ChatsTabsGetCountB645: (...args) => callOperation("chats.tabs.GetCount-b645", ...(args as TeamsGraphOperationArgs<"chats.tabs.GetCount-b645">)),
  };
}
