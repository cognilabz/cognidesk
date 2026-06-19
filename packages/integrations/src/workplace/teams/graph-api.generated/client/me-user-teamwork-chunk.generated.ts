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
export const TeamsGraphMeUserTeamworkOperationKeys = [
  "me.GetTeamwork",
  "me.UpdateTeamwork",
  "me.DeleteTeamwork",
  "me.teamwork.ListAssociatedTeams",
  "me.teamwork.CreateAssociatedTeams",
  "me.teamwork.GetAssociatedTeams",
  "me.teamwork.UpdateAssociatedTeams",
  "me.teamwork.DeleteAssociatedTeams",
  "me.teamwork.associatedTeams.GetTeam",
  "me.teamwork.associatedTeams.GetCount-9609",
  "me.teamwork.ListInstalledApps",
  "me.teamwork.CreateInstalledApps",
  "me.teamwork.GetInstalledApps",
  "me.teamwork.UpdateInstalledApps",
  "me.teamwork.DeleteInstalledApps",
  "me.teamwork.installedApps.GetChat",
  "me.teamwork.installedApps.GetTeamsApp",
  "me.teamwork.installedApps.GetTeamsAppDefinition",
  "me.teamwork.installedApps.GetCount-2917",
  "me.teamwork.deleteTargetedMessage",
  "me.teamwork.getAllRetainedTargetedMessages",
  "me.teamwork.getAllTargetedMessages",
  "me.teamwork.sendActivityNotification"
] as const;
export type TeamsGraphMeUserTeamworkOperationKey = typeof TeamsGraphMeUserTeamworkOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphMeUserTeamworkOperationPathParamMap {
  "me.GetTeamwork": {};
  "me.UpdateTeamwork": {};
  "me.DeleteTeamwork": {};
  "me.teamwork.ListAssociatedTeams": {};
  "me.teamwork.CreateAssociatedTeams": {};
  "me.teamwork.GetAssociatedTeams": { "associatedTeamInfo-id": TeamsGraphPathParamValue };
  "me.teamwork.UpdateAssociatedTeams": { "associatedTeamInfo-id": TeamsGraphPathParamValue };
  "me.teamwork.DeleteAssociatedTeams": { "associatedTeamInfo-id": TeamsGraphPathParamValue };
  "me.teamwork.associatedTeams.GetTeam": { "associatedTeamInfo-id": TeamsGraphPathParamValue };
  "me.teamwork.associatedTeams.GetCount-9609": {};
  "me.teamwork.ListInstalledApps": {};
  "me.teamwork.CreateInstalledApps": {};
  "me.teamwork.GetInstalledApps": { "userScopeTeamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.teamwork.UpdateInstalledApps": { "userScopeTeamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.teamwork.DeleteInstalledApps": { "userScopeTeamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.teamwork.installedApps.GetChat": { "userScopeTeamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.teamwork.installedApps.GetTeamsApp": { "userScopeTeamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.teamwork.installedApps.GetTeamsAppDefinition": { "userScopeTeamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.teamwork.installedApps.GetCount-2917": {};
  "me.teamwork.deleteTargetedMessage": {};
  "me.teamwork.getAllRetainedTargetedMessages": {};
  "me.teamwork.getAllTargetedMessages": {};
  "me.teamwork.sendActivityNotification": {};
}

export interface TeamsGraphMeUserTeamworkOperationRequestMap {
  "me.GetTeamwork": TeamsGraphOperationInput<"me.GetTeamwork">;
  "me.UpdateTeamwork": TeamsGraphOperationInput<"me.UpdateTeamwork">;
  "me.DeleteTeamwork": TeamsGraphOperationInput<"me.DeleteTeamwork">;
  "me.teamwork.ListAssociatedTeams": TeamsGraphOperationInput<"me.teamwork.ListAssociatedTeams">;
  "me.teamwork.CreateAssociatedTeams": TeamsGraphOperationInput<"me.teamwork.CreateAssociatedTeams">;
  "me.teamwork.GetAssociatedTeams": TeamsGraphOperationInput<"me.teamwork.GetAssociatedTeams">;
  "me.teamwork.UpdateAssociatedTeams": TeamsGraphOperationInput<"me.teamwork.UpdateAssociatedTeams">;
  "me.teamwork.DeleteAssociatedTeams": TeamsGraphOperationInput<"me.teamwork.DeleteAssociatedTeams">;
  "me.teamwork.associatedTeams.GetTeam": TeamsGraphOperationInput<"me.teamwork.associatedTeams.GetTeam">;
  "me.teamwork.associatedTeams.GetCount-9609": TeamsGraphOperationInput<"me.teamwork.associatedTeams.GetCount-9609">;
  "me.teamwork.ListInstalledApps": TeamsGraphOperationInput<"me.teamwork.ListInstalledApps">;
  "me.teamwork.CreateInstalledApps": TeamsGraphOperationInput<"me.teamwork.CreateInstalledApps">;
  "me.teamwork.GetInstalledApps": TeamsGraphOperationInput<"me.teamwork.GetInstalledApps">;
  "me.teamwork.UpdateInstalledApps": TeamsGraphOperationInput<"me.teamwork.UpdateInstalledApps">;
  "me.teamwork.DeleteInstalledApps": TeamsGraphOperationInput<"me.teamwork.DeleteInstalledApps">;
  "me.teamwork.installedApps.GetChat": TeamsGraphOperationInput<"me.teamwork.installedApps.GetChat">;
  "me.teamwork.installedApps.GetTeamsApp": TeamsGraphOperationInput<"me.teamwork.installedApps.GetTeamsApp">;
  "me.teamwork.installedApps.GetTeamsAppDefinition": TeamsGraphOperationInput<"me.teamwork.installedApps.GetTeamsAppDefinition">;
  "me.teamwork.installedApps.GetCount-2917": TeamsGraphOperationInput<"me.teamwork.installedApps.GetCount-2917">;
  "me.teamwork.deleteTargetedMessage": TeamsGraphOperationInput<"me.teamwork.deleteTargetedMessage">;
  "me.teamwork.getAllRetainedTargetedMessages": TeamsGraphOperationInput<"me.teamwork.getAllRetainedTargetedMessages">;
  "me.teamwork.getAllTargetedMessages": TeamsGraphOperationInput<"me.teamwork.getAllTargetedMessages">;
  "me.teamwork.sendActivityNotification": TeamsGraphOperationInput<"me.teamwork.sendActivityNotification">;
}

export interface TeamsGraphMeUserTeamworkGeneratedClient {
  MeGetTeamwork(...args: TeamsGraphOperationArgs<"me.GetTeamwork">): Promise<TeamsGraphOperationResponseMap["me.GetTeamwork"]>;
  MeUpdateTeamwork(...args: TeamsGraphOperationArgs<"me.UpdateTeamwork">): Promise<TeamsGraphOperationResponseMap["me.UpdateTeamwork"]>;
  MeDeleteTeamwork(...args: TeamsGraphOperationArgs<"me.DeleteTeamwork">): Promise<TeamsGraphOperationResponseMap["me.DeleteTeamwork"]>;
  MeTeamworkListAssociatedTeams(...args: TeamsGraphOperationArgs<"me.teamwork.ListAssociatedTeams">): Promise<TeamsGraphOperationResponseMap["me.teamwork.ListAssociatedTeams"]>;
  MeTeamworkCreateAssociatedTeams(...args: TeamsGraphOperationArgs<"me.teamwork.CreateAssociatedTeams">): Promise<TeamsGraphOperationResponseMap["me.teamwork.CreateAssociatedTeams"]>;
  MeTeamworkGetAssociatedTeams(...args: TeamsGraphOperationArgs<"me.teamwork.GetAssociatedTeams">): Promise<TeamsGraphOperationResponseMap["me.teamwork.GetAssociatedTeams"]>;
  MeTeamworkUpdateAssociatedTeams(...args: TeamsGraphOperationArgs<"me.teamwork.UpdateAssociatedTeams">): Promise<TeamsGraphOperationResponseMap["me.teamwork.UpdateAssociatedTeams"]>;
  MeTeamworkDeleteAssociatedTeams(...args: TeamsGraphOperationArgs<"me.teamwork.DeleteAssociatedTeams">): Promise<TeamsGraphOperationResponseMap["me.teamwork.DeleteAssociatedTeams"]>;
  MeTeamworkAssociatedTeamsGetTeam(...args: TeamsGraphOperationArgs<"me.teamwork.associatedTeams.GetTeam">): Promise<TeamsGraphOperationResponseMap["me.teamwork.associatedTeams.GetTeam"]>;
  MeTeamworkAssociatedTeamsGetCount9609(...args: TeamsGraphOperationArgs<"me.teamwork.associatedTeams.GetCount-9609">): Promise<TeamsGraphOperationResponseMap["me.teamwork.associatedTeams.GetCount-9609"]>;
  MeTeamworkListInstalledApps(...args: TeamsGraphOperationArgs<"me.teamwork.ListInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.teamwork.ListInstalledApps"]>;
  MeTeamworkCreateInstalledApps(...args: TeamsGraphOperationArgs<"me.teamwork.CreateInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.teamwork.CreateInstalledApps"]>;
  MeTeamworkGetInstalledApps(...args: TeamsGraphOperationArgs<"me.teamwork.GetInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.teamwork.GetInstalledApps"]>;
  MeTeamworkUpdateInstalledApps(...args: TeamsGraphOperationArgs<"me.teamwork.UpdateInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.teamwork.UpdateInstalledApps"]>;
  MeTeamworkDeleteInstalledApps(...args: TeamsGraphOperationArgs<"me.teamwork.DeleteInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.teamwork.DeleteInstalledApps"]>;
  MeTeamworkInstalledAppsGetChat(...args: TeamsGraphOperationArgs<"me.teamwork.installedApps.GetChat">): Promise<TeamsGraphOperationResponseMap["me.teamwork.installedApps.GetChat"]>;
  MeTeamworkInstalledAppsGetTeamsApp(...args: TeamsGraphOperationArgs<"me.teamwork.installedApps.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["me.teamwork.installedApps.GetTeamsApp"]>;
  MeTeamworkInstalledAppsGetTeamsAppDefinition(...args: TeamsGraphOperationArgs<"me.teamwork.installedApps.GetTeamsAppDefinition">): Promise<TeamsGraphOperationResponseMap["me.teamwork.installedApps.GetTeamsAppDefinition"]>;
  MeTeamworkInstalledAppsGetCount2917(...args: TeamsGraphOperationArgs<"me.teamwork.installedApps.GetCount-2917">): Promise<TeamsGraphOperationResponseMap["me.teamwork.installedApps.GetCount-2917"]>;
  MeTeamworkDeleteTargetedMessage(...args: TeamsGraphOperationArgs<"me.teamwork.deleteTargetedMessage">): Promise<TeamsGraphOperationResponseMap["me.teamwork.deleteTargetedMessage"]>;
  MeTeamworkGetAllRetainedTargetedMessages(...args: TeamsGraphOperationArgs<"me.teamwork.getAllRetainedTargetedMessages">): Promise<TeamsGraphOperationResponseMap["me.teamwork.getAllRetainedTargetedMessages"]>;
  MeTeamworkGetAllTargetedMessages(...args: TeamsGraphOperationArgs<"me.teamwork.getAllTargetedMessages">): Promise<TeamsGraphOperationResponseMap["me.teamwork.getAllTargetedMessages"]>;
  MeTeamworkSendActivityNotification(...args: TeamsGraphOperationArgs<"me.teamwork.sendActivityNotification">): Promise<TeamsGraphOperationResponseMap["me.teamwork.sendActivityNotification"]>;
}

export const TeamsGraphMeUserTeamworkGeneratedFunctionNames = [
  "MeGetTeamwork",
  "MeUpdateTeamwork",
  "MeDeleteTeamwork",
  "MeTeamworkListAssociatedTeams",
  "MeTeamworkCreateAssociatedTeams",
  "MeTeamworkGetAssociatedTeams",
  "MeTeamworkUpdateAssociatedTeams",
  "MeTeamworkDeleteAssociatedTeams",
  "MeTeamworkAssociatedTeamsGetTeam",
  "MeTeamworkAssociatedTeamsGetCount9609",
  "MeTeamworkListInstalledApps",
  "MeTeamworkCreateInstalledApps",
  "MeTeamworkGetInstalledApps",
  "MeTeamworkUpdateInstalledApps",
  "MeTeamworkDeleteInstalledApps",
  "MeTeamworkInstalledAppsGetChat",
  "MeTeamworkInstalledAppsGetTeamsApp",
  "MeTeamworkInstalledAppsGetTeamsAppDefinition",
  "MeTeamworkInstalledAppsGetCount2917",
  "MeTeamworkDeleteTargetedMessage",
  "MeTeamworkGetAllRetainedTargetedMessages",
  "MeTeamworkGetAllTargetedMessages",
  "MeTeamworkSendActivityNotification"
] as const satisfies readonly (keyof TeamsGraphMeUserTeamworkGeneratedClient)[];

export function createTeamsGraphMeUserTeamworkGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphMeUserTeamworkGeneratedClient {
  return {
    MeGetTeamwork: (...args) => callOperation("me.GetTeamwork", ...(args as TeamsGraphOperationArgs<"me.GetTeamwork">)),
    MeUpdateTeamwork: (...args) => callOperation("me.UpdateTeamwork", ...(args as TeamsGraphOperationArgs<"me.UpdateTeamwork">)),
    MeDeleteTeamwork: (...args) => callOperation("me.DeleteTeamwork", ...(args as TeamsGraphOperationArgs<"me.DeleteTeamwork">)),
    MeTeamworkListAssociatedTeams: (...args) => callOperation("me.teamwork.ListAssociatedTeams", ...(args as TeamsGraphOperationArgs<"me.teamwork.ListAssociatedTeams">)),
    MeTeamworkCreateAssociatedTeams: (...args) => callOperation("me.teamwork.CreateAssociatedTeams", ...(args as TeamsGraphOperationArgs<"me.teamwork.CreateAssociatedTeams">)),
    MeTeamworkGetAssociatedTeams: (...args) => callOperation("me.teamwork.GetAssociatedTeams", ...(args as TeamsGraphOperationArgs<"me.teamwork.GetAssociatedTeams">)),
    MeTeamworkUpdateAssociatedTeams: (...args) => callOperation("me.teamwork.UpdateAssociatedTeams", ...(args as TeamsGraphOperationArgs<"me.teamwork.UpdateAssociatedTeams">)),
    MeTeamworkDeleteAssociatedTeams: (...args) => callOperation("me.teamwork.DeleteAssociatedTeams", ...(args as TeamsGraphOperationArgs<"me.teamwork.DeleteAssociatedTeams">)),
    MeTeamworkAssociatedTeamsGetTeam: (...args) => callOperation("me.teamwork.associatedTeams.GetTeam", ...(args as TeamsGraphOperationArgs<"me.teamwork.associatedTeams.GetTeam">)),
    MeTeamworkAssociatedTeamsGetCount9609: (...args) => callOperation("me.teamwork.associatedTeams.GetCount-9609", ...(args as TeamsGraphOperationArgs<"me.teamwork.associatedTeams.GetCount-9609">)),
    MeTeamworkListInstalledApps: (...args) => callOperation("me.teamwork.ListInstalledApps", ...(args as TeamsGraphOperationArgs<"me.teamwork.ListInstalledApps">)),
    MeTeamworkCreateInstalledApps: (...args) => callOperation("me.teamwork.CreateInstalledApps", ...(args as TeamsGraphOperationArgs<"me.teamwork.CreateInstalledApps">)),
    MeTeamworkGetInstalledApps: (...args) => callOperation("me.teamwork.GetInstalledApps", ...(args as TeamsGraphOperationArgs<"me.teamwork.GetInstalledApps">)),
    MeTeamworkUpdateInstalledApps: (...args) => callOperation("me.teamwork.UpdateInstalledApps", ...(args as TeamsGraphOperationArgs<"me.teamwork.UpdateInstalledApps">)),
    MeTeamworkDeleteInstalledApps: (...args) => callOperation("me.teamwork.DeleteInstalledApps", ...(args as TeamsGraphOperationArgs<"me.teamwork.DeleteInstalledApps">)),
    MeTeamworkInstalledAppsGetChat: (...args) => callOperation("me.teamwork.installedApps.GetChat", ...(args as TeamsGraphOperationArgs<"me.teamwork.installedApps.GetChat">)),
    MeTeamworkInstalledAppsGetTeamsApp: (...args) => callOperation("me.teamwork.installedApps.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"me.teamwork.installedApps.GetTeamsApp">)),
    MeTeamworkInstalledAppsGetTeamsAppDefinition: (...args) => callOperation("me.teamwork.installedApps.GetTeamsAppDefinition", ...(args as TeamsGraphOperationArgs<"me.teamwork.installedApps.GetTeamsAppDefinition">)),
    MeTeamworkInstalledAppsGetCount2917: (...args) => callOperation("me.teamwork.installedApps.GetCount-2917", ...(args as TeamsGraphOperationArgs<"me.teamwork.installedApps.GetCount-2917">)),
    MeTeamworkDeleteTargetedMessage: (...args) => callOperation("me.teamwork.deleteTargetedMessage", ...(args as TeamsGraphOperationArgs<"me.teamwork.deleteTargetedMessage">)),
    MeTeamworkGetAllRetainedTargetedMessages: (...args) => callOperation("me.teamwork.getAllRetainedTargetedMessages", ...(args as TeamsGraphOperationArgs<"me.teamwork.getAllRetainedTargetedMessages">)),
    MeTeamworkGetAllTargetedMessages: (...args) => callOperation("me.teamwork.getAllTargetedMessages", ...(args as TeamsGraphOperationArgs<"me.teamwork.getAllTargetedMessages">)),
    MeTeamworkSendActivityNotification: (...args) => callOperation("me.teamwork.sendActivityNotification", ...(args as TeamsGraphOperationArgs<"me.teamwork.sendActivityNotification">)),
  };
}
