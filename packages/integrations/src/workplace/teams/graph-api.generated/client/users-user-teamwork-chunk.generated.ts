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
export const TeamsGraphUsersUserTeamworkOperationKeys = [
  "users.GetTeamwork",
  "users.UpdateTeamwork",
  "users.DeleteTeamwork",
  "users.teamwork.ListAssociatedTeams",
  "users.teamwork.CreateAssociatedTeams",
  "users.teamwork.GetAssociatedTeams",
  "users.teamwork.UpdateAssociatedTeams",
  "users.teamwork.DeleteAssociatedTeams",
  "users.teamwork.associatedTeams.GetTeam",
  "users.teamwork.associatedTeams.GetCount-97ef",
  "users.teamwork.ListInstalledApps",
  "users.teamwork.CreateInstalledApps",
  "users.teamwork.GetInstalledApps",
  "users.teamwork.UpdateInstalledApps",
  "users.teamwork.DeleteInstalledApps",
  "users.teamwork.installedApps.GetChat",
  "users.teamwork.installedApps.GetTeamsApp",
  "users.teamwork.installedApps.GetTeamsAppDefinition",
  "users.teamwork.installedApps.GetCount-0292",
  "users.user.teamwork.deleteTargetedMessage",
  "users.user.teamwork.getAllRetainedTargetedMessages",
  "users.user.teamwork.getAllTargetedMessages",
  "users.user.teamwork.sendActivityNotification"
] as const;
export type TeamsGraphUsersUserTeamworkOperationKey = typeof TeamsGraphUsersUserTeamworkOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphUsersUserTeamworkOperationPathParamMap {
  "users.GetTeamwork": { "user-id": TeamsGraphPathParamValue };
  "users.UpdateTeamwork": { "user-id": TeamsGraphPathParamValue };
  "users.DeleteTeamwork": { "user-id": TeamsGraphPathParamValue };
  "users.teamwork.ListAssociatedTeams": { "user-id": TeamsGraphPathParamValue };
  "users.teamwork.CreateAssociatedTeams": { "user-id": TeamsGraphPathParamValue };
  "users.teamwork.GetAssociatedTeams": { "user-id": TeamsGraphPathParamValue; "associatedTeamInfo-id": TeamsGraphPathParamValue };
  "users.teamwork.UpdateAssociatedTeams": { "user-id": TeamsGraphPathParamValue; "associatedTeamInfo-id": TeamsGraphPathParamValue };
  "users.teamwork.DeleteAssociatedTeams": { "user-id": TeamsGraphPathParamValue; "associatedTeamInfo-id": TeamsGraphPathParamValue };
  "users.teamwork.associatedTeams.GetTeam": { "user-id": TeamsGraphPathParamValue; "associatedTeamInfo-id": TeamsGraphPathParamValue };
  "users.teamwork.associatedTeams.GetCount-97ef": { "user-id": TeamsGraphPathParamValue };
  "users.teamwork.ListInstalledApps": { "user-id": TeamsGraphPathParamValue };
  "users.teamwork.CreateInstalledApps": { "user-id": TeamsGraphPathParamValue };
  "users.teamwork.GetInstalledApps": { "user-id": TeamsGraphPathParamValue; "userScopeTeamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.teamwork.UpdateInstalledApps": { "user-id": TeamsGraphPathParamValue; "userScopeTeamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.teamwork.DeleteInstalledApps": { "user-id": TeamsGraphPathParamValue; "userScopeTeamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.teamwork.installedApps.GetChat": { "user-id": TeamsGraphPathParamValue; "userScopeTeamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.teamwork.installedApps.GetTeamsApp": { "user-id": TeamsGraphPathParamValue; "userScopeTeamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.teamwork.installedApps.GetTeamsAppDefinition": { "user-id": TeamsGraphPathParamValue; "userScopeTeamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.teamwork.installedApps.GetCount-0292": { "user-id": TeamsGraphPathParamValue };
  "users.user.teamwork.deleteTargetedMessage": { "user-id": TeamsGraphPathParamValue };
  "users.user.teamwork.getAllRetainedTargetedMessages": { "user-id": TeamsGraphPathParamValue };
  "users.user.teamwork.getAllTargetedMessages": { "user-id": TeamsGraphPathParamValue };
  "users.user.teamwork.sendActivityNotification": { "user-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphUsersUserTeamworkOperationRequestMap {
  "users.GetTeamwork": TeamsGraphOperationInput<"users.GetTeamwork">;
  "users.UpdateTeamwork": TeamsGraphOperationInput<"users.UpdateTeamwork">;
  "users.DeleteTeamwork": TeamsGraphOperationInput<"users.DeleteTeamwork">;
  "users.teamwork.ListAssociatedTeams": TeamsGraphOperationInput<"users.teamwork.ListAssociatedTeams">;
  "users.teamwork.CreateAssociatedTeams": TeamsGraphOperationInput<"users.teamwork.CreateAssociatedTeams">;
  "users.teamwork.GetAssociatedTeams": TeamsGraphOperationInput<"users.teamwork.GetAssociatedTeams">;
  "users.teamwork.UpdateAssociatedTeams": TeamsGraphOperationInput<"users.teamwork.UpdateAssociatedTeams">;
  "users.teamwork.DeleteAssociatedTeams": TeamsGraphOperationInput<"users.teamwork.DeleteAssociatedTeams">;
  "users.teamwork.associatedTeams.GetTeam": TeamsGraphOperationInput<"users.teamwork.associatedTeams.GetTeam">;
  "users.teamwork.associatedTeams.GetCount-97ef": TeamsGraphOperationInput<"users.teamwork.associatedTeams.GetCount-97ef">;
  "users.teamwork.ListInstalledApps": TeamsGraphOperationInput<"users.teamwork.ListInstalledApps">;
  "users.teamwork.CreateInstalledApps": TeamsGraphOperationInput<"users.teamwork.CreateInstalledApps">;
  "users.teamwork.GetInstalledApps": TeamsGraphOperationInput<"users.teamwork.GetInstalledApps">;
  "users.teamwork.UpdateInstalledApps": TeamsGraphOperationInput<"users.teamwork.UpdateInstalledApps">;
  "users.teamwork.DeleteInstalledApps": TeamsGraphOperationInput<"users.teamwork.DeleteInstalledApps">;
  "users.teamwork.installedApps.GetChat": TeamsGraphOperationInput<"users.teamwork.installedApps.GetChat">;
  "users.teamwork.installedApps.GetTeamsApp": TeamsGraphOperationInput<"users.teamwork.installedApps.GetTeamsApp">;
  "users.teamwork.installedApps.GetTeamsAppDefinition": TeamsGraphOperationInput<"users.teamwork.installedApps.GetTeamsAppDefinition">;
  "users.teamwork.installedApps.GetCount-0292": TeamsGraphOperationInput<"users.teamwork.installedApps.GetCount-0292">;
  "users.user.teamwork.deleteTargetedMessage": TeamsGraphOperationInput<"users.user.teamwork.deleteTargetedMessage">;
  "users.user.teamwork.getAllRetainedTargetedMessages": TeamsGraphOperationInput<"users.user.teamwork.getAllRetainedTargetedMessages">;
  "users.user.teamwork.getAllTargetedMessages": TeamsGraphOperationInput<"users.user.teamwork.getAllTargetedMessages">;
  "users.user.teamwork.sendActivityNotification": TeamsGraphOperationInput<"users.user.teamwork.sendActivityNotification">;
}

export interface TeamsGraphUsersUserTeamworkGeneratedClient {
  UsersGetTeamwork(...args: TeamsGraphOperationArgs<"users.GetTeamwork">): Promise<TeamsGraphOperationResponseMap["users.GetTeamwork"]>;
  UsersUpdateTeamwork(...args: TeamsGraphOperationArgs<"users.UpdateTeamwork">): Promise<TeamsGraphOperationResponseMap["users.UpdateTeamwork"]>;
  UsersDeleteTeamwork(...args: TeamsGraphOperationArgs<"users.DeleteTeamwork">): Promise<TeamsGraphOperationResponseMap["users.DeleteTeamwork"]>;
  UsersTeamworkListAssociatedTeams(...args: TeamsGraphOperationArgs<"users.teamwork.ListAssociatedTeams">): Promise<TeamsGraphOperationResponseMap["users.teamwork.ListAssociatedTeams"]>;
  UsersTeamworkCreateAssociatedTeams(...args: TeamsGraphOperationArgs<"users.teamwork.CreateAssociatedTeams">): Promise<TeamsGraphOperationResponseMap["users.teamwork.CreateAssociatedTeams"]>;
  UsersTeamworkGetAssociatedTeams(...args: TeamsGraphOperationArgs<"users.teamwork.GetAssociatedTeams">): Promise<TeamsGraphOperationResponseMap["users.teamwork.GetAssociatedTeams"]>;
  UsersTeamworkUpdateAssociatedTeams(...args: TeamsGraphOperationArgs<"users.teamwork.UpdateAssociatedTeams">): Promise<TeamsGraphOperationResponseMap["users.teamwork.UpdateAssociatedTeams"]>;
  UsersTeamworkDeleteAssociatedTeams(...args: TeamsGraphOperationArgs<"users.teamwork.DeleteAssociatedTeams">): Promise<TeamsGraphOperationResponseMap["users.teamwork.DeleteAssociatedTeams"]>;
  UsersTeamworkAssociatedTeamsGetTeam(...args: TeamsGraphOperationArgs<"users.teamwork.associatedTeams.GetTeam">): Promise<TeamsGraphOperationResponseMap["users.teamwork.associatedTeams.GetTeam"]>;
  UsersTeamworkAssociatedTeamsGetCount97ef(...args: TeamsGraphOperationArgs<"users.teamwork.associatedTeams.GetCount-97ef">): Promise<TeamsGraphOperationResponseMap["users.teamwork.associatedTeams.GetCount-97ef"]>;
  UsersTeamworkListInstalledApps(...args: TeamsGraphOperationArgs<"users.teamwork.ListInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.teamwork.ListInstalledApps"]>;
  UsersTeamworkCreateInstalledApps(...args: TeamsGraphOperationArgs<"users.teamwork.CreateInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.teamwork.CreateInstalledApps"]>;
  UsersTeamworkGetInstalledApps(...args: TeamsGraphOperationArgs<"users.teamwork.GetInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.teamwork.GetInstalledApps"]>;
  UsersTeamworkUpdateInstalledApps(...args: TeamsGraphOperationArgs<"users.teamwork.UpdateInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.teamwork.UpdateInstalledApps"]>;
  UsersTeamworkDeleteInstalledApps(...args: TeamsGraphOperationArgs<"users.teamwork.DeleteInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.teamwork.DeleteInstalledApps"]>;
  UsersTeamworkInstalledAppsGetChat(...args: TeamsGraphOperationArgs<"users.teamwork.installedApps.GetChat">): Promise<TeamsGraphOperationResponseMap["users.teamwork.installedApps.GetChat"]>;
  UsersTeamworkInstalledAppsGetTeamsApp(...args: TeamsGraphOperationArgs<"users.teamwork.installedApps.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["users.teamwork.installedApps.GetTeamsApp"]>;
  UsersTeamworkInstalledAppsGetTeamsAppDefinition(...args: TeamsGraphOperationArgs<"users.teamwork.installedApps.GetTeamsAppDefinition">): Promise<TeamsGraphOperationResponseMap["users.teamwork.installedApps.GetTeamsAppDefinition"]>;
  UsersTeamworkInstalledAppsGetCount0292(...args: TeamsGraphOperationArgs<"users.teamwork.installedApps.GetCount-0292">): Promise<TeamsGraphOperationResponseMap["users.teamwork.installedApps.GetCount-0292"]>;
  UsersUserTeamworkDeleteTargetedMessage(...args: TeamsGraphOperationArgs<"users.user.teamwork.deleteTargetedMessage">): Promise<TeamsGraphOperationResponseMap["users.user.teamwork.deleteTargetedMessage"]>;
  UsersUserTeamworkGetAllRetainedTargetedMessages(...args: TeamsGraphOperationArgs<"users.user.teamwork.getAllRetainedTargetedMessages">): Promise<TeamsGraphOperationResponseMap["users.user.teamwork.getAllRetainedTargetedMessages"]>;
  UsersUserTeamworkGetAllTargetedMessages(...args: TeamsGraphOperationArgs<"users.user.teamwork.getAllTargetedMessages">): Promise<TeamsGraphOperationResponseMap["users.user.teamwork.getAllTargetedMessages"]>;
  UsersUserTeamworkSendActivityNotification(...args: TeamsGraphOperationArgs<"users.user.teamwork.sendActivityNotification">): Promise<TeamsGraphOperationResponseMap["users.user.teamwork.sendActivityNotification"]>;
}

export const TeamsGraphUsersUserTeamworkGeneratedFunctionNames = [
  "UsersGetTeamwork",
  "UsersUpdateTeamwork",
  "UsersDeleteTeamwork",
  "UsersTeamworkListAssociatedTeams",
  "UsersTeamworkCreateAssociatedTeams",
  "UsersTeamworkGetAssociatedTeams",
  "UsersTeamworkUpdateAssociatedTeams",
  "UsersTeamworkDeleteAssociatedTeams",
  "UsersTeamworkAssociatedTeamsGetTeam",
  "UsersTeamworkAssociatedTeamsGetCount97ef",
  "UsersTeamworkListInstalledApps",
  "UsersTeamworkCreateInstalledApps",
  "UsersTeamworkGetInstalledApps",
  "UsersTeamworkUpdateInstalledApps",
  "UsersTeamworkDeleteInstalledApps",
  "UsersTeamworkInstalledAppsGetChat",
  "UsersTeamworkInstalledAppsGetTeamsApp",
  "UsersTeamworkInstalledAppsGetTeamsAppDefinition",
  "UsersTeamworkInstalledAppsGetCount0292",
  "UsersUserTeamworkDeleteTargetedMessage",
  "UsersUserTeamworkGetAllRetainedTargetedMessages",
  "UsersUserTeamworkGetAllTargetedMessages",
  "UsersUserTeamworkSendActivityNotification"
] as const satisfies readonly (keyof TeamsGraphUsersUserTeamworkGeneratedClient)[];

export function createTeamsGraphUsersUserTeamworkGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphUsersUserTeamworkGeneratedClient {
  return {
    UsersGetTeamwork: (...args) => callOperation("users.GetTeamwork", ...(args as TeamsGraphOperationArgs<"users.GetTeamwork">)),
    UsersUpdateTeamwork: (...args) => callOperation("users.UpdateTeamwork", ...(args as TeamsGraphOperationArgs<"users.UpdateTeamwork">)),
    UsersDeleteTeamwork: (...args) => callOperation("users.DeleteTeamwork", ...(args as TeamsGraphOperationArgs<"users.DeleteTeamwork">)),
    UsersTeamworkListAssociatedTeams: (...args) => callOperation("users.teamwork.ListAssociatedTeams", ...(args as TeamsGraphOperationArgs<"users.teamwork.ListAssociatedTeams">)),
    UsersTeamworkCreateAssociatedTeams: (...args) => callOperation("users.teamwork.CreateAssociatedTeams", ...(args as TeamsGraphOperationArgs<"users.teamwork.CreateAssociatedTeams">)),
    UsersTeamworkGetAssociatedTeams: (...args) => callOperation("users.teamwork.GetAssociatedTeams", ...(args as TeamsGraphOperationArgs<"users.teamwork.GetAssociatedTeams">)),
    UsersTeamworkUpdateAssociatedTeams: (...args) => callOperation("users.teamwork.UpdateAssociatedTeams", ...(args as TeamsGraphOperationArgs<"users.teamwork.UpdateAssociatedTeams">)),
    UsersTeamworkDeleteAssociatedTeams: (...args) => callOperation("users.teamwork.DeleteAssociatedTeams", ...(args as TeamsGraphOperationArgs<"users.teamwork.DeleteAssociatedTeams">)),
    UsersTeamworkAssociatedTeamsGetTeam: (...args) => callOperation("users.teamwork.associatedTeams.GetTeam", ...(args as TeamsGraphOperationArgs<"users.teamwork.associatedTeams.GetTeam">)),
    UsersTeamworkAssociatedTeamsGetCount97ef: (...args) => callOperation("users.teamwork.associatedTeams.GetCount-97ef", ...(args as TeamsGraphOperationArgs<"users.teamwork.associatedTeams.GetCount-97ef">)),
    UsersTeamworkListInstalledApps: (...args) => callOperation("users.teamwork.ListInstalledApps", ...(args as TeamsGraphOperationArgs<"users.teamwork.ListInstalledApps">)),
    UsersTeamworkCreateInstalledApps: (...args) => callOperation("users.teamwork.CreateInstalledApps", ...(args as TeamsGraphOperationArgs<"users.teamwork.CreateInstalledApps">)),
    UsersTeamworkGetInstalledApps: (...args) => callOperation("users.teamwork.GetInstalledApps", ...(args as TeamsGraphOperationArgs<"users.teamwork.GetInstalledApps">)),
    UsersTeamworkUpdateInstalledApps: (...args) => callOperation("users.teamwork.UpdateInstalledApps", ...(args as TeamsGraphOperationArgs<"users.teamwork.UpdateInstalledApps">)),
    UsersTeamworkDeleteInstalledApps: (...args) => callOperation("users.teamwork.DeleteInstalledApps", ...(args as TeamsGraphOperationArgs<"users.teamwork.DeleteInstalledApps">)),
    UsersTeamworkInstalledAppsGetChat: (...args) => callOperation("users.teamwork.installedApps.GetChat", ...(args as TeamsGraphOperationArgs<"users.teamwork.installedApps.GetChat">)),
    UsersTeamworkInstalledAppsGetTeamsApp: (...args) => callOperation("users.teamwork.installedApps.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"users.teamwork.installedApps.GetTeamsApp">)),
    UsersTeamworkInstalledAppsGetTeamsAppDefinition: (...args) => callOperation("users.teamwork.installedApps.GetTeamsAppDefinition", ...(args as TeamsGraphOperationArgs<"users.teamwork.installedApps.GetTeamsAppDefinition">)),
    UsersTeamworkInstalledAppsGetCount0292: (...args) => callOperation("users.teamwork.installedApps.GetCount-0292", ...(args as TeamsGraphOperationArgs<"users.teamwork.installedApps.GetCount-0292">)),
    UsersUserTeamworkDeleteTargetedMessage: (...args) => callOperation("users.user.teamwork.deleteTargetedMessage", ...(args as TeamsGraphOperationArgs<"users.user.teamwork.deleteTargetedMessage">)),
    UsersUserTeamworkGetAllRetainedTargetedMessages: (...args) => callOperation("users.user.teamwork.getAllRetainedTargetedMessages", ...(args as TeamsGraphOperationArgs<"users.user.teamwork.getAllRetainedTargetedMessages">)),
    UsersUserTeamworkGetAllTargetedMessages: (...args) => callOperation("users.user.teamwork.getAllTargetedMessages", ...(args as TeamsGraphOperationArgs<"users.user.teamwork.getAllTargetedMessages">)),
    UsersUserTeamworkSendActivityNotification: (...args) => callOperation("users.user.teamwork.sendActivityNotification", ...(args as TeamsGraphOperationArgs<"users.user.teamwork.sendActivityNotification">)),
  };
}
