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
export const TeamsGraphChatsTeamsAppInstallationOperationKeys = [
  "chats.ListInstalledApps",
  "chats.CreateInstalledApps",
  "chats.GetInstalledApps",
  "chats.UpdateInstalledApps",
  "chats.DeleteInstalledApps",
  "chats.chat.installedApps.teamsAppInstallation.upgrade",
  "chats.installedApps.GetTeamsApp",
  "chats.installedApps.GetTeamsAppDefinition",
  "chats.installedApps.GetCount-3987"
] as const;
export type TeamsGraphChatsTeamsAppInstallationOperationKey = typeof TeamsGraphChatsTeamsAppInstallationOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphChatsTeamsAppInstallationOperationPathParamMap {
  "chats.ListInstalledApps": { "chat-id": TeamsGraphPathParamValue };
  "chats.CreateInstalledApps": { "chat-id": TeamsGraphPathParamValue };
  "chats.GetInstalledApps": { "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "chats.UpdateInstalledApps": { "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "chats.DeleteInstalledApps": { "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "chats.chat.installedApps.teamsAppInstallation.upgrade": { "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "chats.installedApps.GetTeamsApp": { "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "chats.installedApps.GetTeamsAppDefinition": { "chat-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "chats.installedApps.GetCount-3987": { "chat-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphChatsTeamsAppInstallationOperationRequestMap {
  "chats.ListInstalledApps": TeamsGraphOperationInput<"chats.ListInstalledApps">;
  "chats.CreateInstalledApps": TeamsGraphOperationInput<"chats.CreateInstalledApps">;
  "chats.GetInstalledApps": TeamsGraphOperationInput<"chats.GetInstalledApps">;
  "chats.UpdateInstalledApps": TeamsGraphOperationInput<"chats.UpdateInstalledApps">;
  "chats.DeleteInstalledApps": TeamsGraphOperationInput<"chats.DeleteInstalledApps">;
  "chats.chat.installedApps.teamsAppInstallation.upgrade": TeamsGraphOperationInput<"chats.chat.installedApps.teamsAppInstallation.upgrade">;
  "chats.installedApps.GetTeamsApp": TeamsGraphOperationInput<"chats.installedApps.GetTeamsApp">;
  "chats.installedApps.GetTeamsAppDefinition": TeamsGraphOperationInput<"chats.installedApps.GetTeamsAppDefinition">;
  "chats.installedApps.GetCount-3987": TeamsGraphOperationInput<"chats.installedApps.GetCount-3987">;
}

export interface TeamsGraphChatsTeamsAppInstallationGeneratedClient {
  ChatsListInstalledApps(...args: TeamsGraphOperationArgs<"chats.ListInstalledApps">): Promise<TeamsGraphOperationResponseMap["chats.ListInstalledApps"]>;
  ChatsCreateInstalledApps(...args: TeamsGraphOperationArgs<"chats.CreateInstalledApps">): Promise<TeamsGraphOperationResponseMap["chats.CreateInstalledApps"]>;
  ChatsGetInstalledApps(...args: TeamsGraphOperationArgs<"chats.GetInstalledApps">): Promise<TeamsGraphOperationResponseMap["chats.GetInstalledApps"]>;
  ChatsUpdateInstalledApps(...args: TeamsGraphOperationArgs<"chats.UpdateInstalledApps">): Promise<TeamsGraphOperationResponseMap["chats.UpdateInstalledApps"]>;
  ChatsDeleteInstalledApps(...args: TeamsGraphOperationArgs<"chats.DeleteInstalledApps">): Promise<TeamsGraphOperationResponseMap["chats.DeleteInstalledApps"]>;
  ChatsChatInstalledAppsTeamsAppInstallationUpgrade(...args: TeamsGraphOperationArgs<"chats.chat.installedApps.teamsAppInstallation.upgrade">): Promise<TeamsGraphOperationResponseMap["chats.chat.installedApps.teamsAppInstallation.upgrade"]>;
  ChatsInstalledAppsGetTeamsApp(...args: TeamsGraphOperationArgs<"chats.installedApps.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["chats.installedApps.GetTeamsApp"]>;
  ChatsInstalledAppsGetTeamsAppDefinition(...args: TeamsGraphOperationArgs<"chats.installedApps.GetTeamsAppDefinition">): Promise<TeamsGraphOperationResponseMap["chats.installedApps.GetTeamsAppDefinition"]>;
  ChatsInstalledAppsGetCount3987(...args: TeamsGraphOperationArgs<"chats.installedApps.GetCount-3987">): Promise<TeamsGraphOperationResponseMap["chats.installedApps.GetCount-3987"]>;
}

export const TeamsGraphChatsTeamsAppInstallationGeneratedFunctionNames = [
  "ChatsListInstalledApps",
  "ChatsCreateInstalledApps",
  "ChatsGetInstalledApps",
  "ChatsUpdateInstalledApps",
  "ChatsDeleteInstalledApps",
  "ChatsChatInstalledAppsTeamsAppInstallationUpgrade",
  "ChatsInstalledAppsGetTeamsApp",
  "ChatsInstalledAppsGetTeamsAppDefinition",
  "ChatsInstalledAppsGetCount3987"
] as const satisfies readonly (keyof TeamsGraphChatsTeamsAppInstallationGeneratedClient)[];

export function createTeamsGraphChatsTeamsAppInstallationGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphChatsTeamsAppInstallationGeneratedClient {
  return {
    ChatsListInstalledApps: (...args) => callOperation("chats.ListInstalledApps", ...(args as TeamsGraphOperationArgs<"chats.ListInstalledApps">)),
    ChatsCreateInstalledApps: (...args) => callOperation("chats.CreateInstalledApps", ...(args as TeamsGraphOperationArgs<"chats.CreateInstalledApps">)),
    ChatsGetInstalledApps: (...args) => callOperation("chats.GetInstalledApps", ...(args as TeamsGraphOperationArgs<"chats.GetInstalledApps">)),
    ChatsUpdateInstalledApps: (...args) => callOperation("chats.UpdateInstalledApps", ...(args as TeamsGraphOperationArgs<"chats.UpdateInstalledApps">)),
    ChatsDeleteInstalledApps: (...args) => callOperation("chats.DeleteInstalledApps", ...(args as TeamsGraphOperationArgs<"chats.DeleteInstalledApps">)),
    ChatsChatInstalledAppsTeamsAppInstallationUpgrade: (...args) => callOperation("chats.chat.installedApps.teamsAppInstallation.upgrade", ...(args as TeamsGraphOperationArgs<"chats.chat.installedApps.teamsAppInstallation.upgrade">)),
    ChatsInstalledAppsGetTeamsApp: (...args) => callOperation("chats.installedApps.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"chats.installedApps.GetTeamsApp">)),
    ChatsInstalledAppsGetTeamsAppDefinition: (...args) => callOperation("chats.installedApps.GetTeamsAppDefinition", ...(args as TeamsGraphOperationArgs<"chats.installedApps.GetTeamsAppDefinition">)),
    ChatsInstalledAppsGetCount3987: (...args) => callOperation("chats.installedApps.GetCount-3987", ...(args as TeamsGraphOperationArgs<"chats.installedApps.GetCount-3987">)),
  };
}
