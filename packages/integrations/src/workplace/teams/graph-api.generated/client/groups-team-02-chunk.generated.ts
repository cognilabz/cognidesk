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
export const TeamsGraphGroupsTeam02OperationKeys = [
  "groups.group.team.channels.channel.removeEmail",
  "groups.group.team.channels.channel.startMigration",
  "groups.group.team.channels.channel.unarchive",
  "groups.team.channels.ListSharedWithTeams",
  "groups.team.channels.CreateSharedWithTeams",
  "groups.team.channels.GetSharedWithTeams",
  "groups.team.channels.UpdateSharedWithTeams",
  "groups.team.channels.DeleteSharedWithTeams",
  "groups.team.channels.sharedWithTeams.ListAllowedMembers",
  "groups.team.channels.sharedWithTeams.GetAllowedMembers",
  "groups.team.channels.sharedWithTeams.allowedMembers.GetCount-d551",
  "groups.team.channels.sharedWithTeams.GetTeam",
  "groups.team.channels.sharedWithTeams.GetCount-3479",
  "groups.team.channels.ListTabs",
  "groups.team.channels.CreateTabs",
  "groups.team.channels.GetTabs",
  "groups.team.channels.UpdateTabs",
  "groups.team.channels.DeleteTabs",
  "groups.team.channels.tabs.GetTeamsApp",
  "groups.team.channels.tabs.GetCount-5a2c",
  "groups.team.channels.GetCount-dcc7",
  "groups.group.team.channels.getAllMessages",
  "groups.group.team.channels.getAllRetainedMessages",
  "groups.team.GetGroup",
  "groups.team.group.ListServiceProvisioningErrors",
  "groups.team.group.ServiceProvisioningErrors.GetCount-2547",
  "groups.team.ListIncomingChannels",
  "groups.team.GetIncomingChannels",
  "groups.team.incomingChannels.GetCount-d4b9",
  "groups.team.ListInstalledApps",
  "groups.team.CreateInstalledApps",
  "groups.team.GetInstalledApps",
  "groups.team.UpdateInstalledApps",
  "groups.team.DeleteInstalledApps",
  "groups.group.team.installedApps.teamsAppInstallation.upgrade",
  "groups.team.installedApps.GetTeamsApp",
  "groups.team.installedApps.GetTeamsAppDefinition",
  "groups.team.installedApps.GetCount-83d4",
  "groups.team.ListMembers",
  "groups.team.CreateMembers",
  "groups.team.GetMembers",
  "groups.team.UpdateMembers",
  "groups.team.DeleteMembers",
  "groups.team.members.GetCount-a0b1",
  "groups.group.team.members.add",
  "groups.group.team.members.remove",
  "groups.group.team.archive",
  "groups.group.team.clone",
  "groups.group.team.completeMigration",
  "groups.group.team.sendActivityNotification",
  "groups.group.team.unarchive",
  "groups.team.ListOperations",
  "groups.team.CreateOperations",
  "groups.team.GetOperations",
  "groups.team.UpdateOperations",
  "groups.team.DeleteOperations",
  "groups.team.operations.GetCount-6921",
  "groups.team.ListPermissionGrants",
  "groups.team.CreatePermissionGrants",
  "groups.team.GetPermissionGrants",
  "groups.team.UpdatePermissionGrants",
  "groups.team.DeletePermissionGrants",
  "groups.team.permissionGrants.GetCount-5668",
  "groups.team.GetPhoto",
  "groups.team.UpdatePhoto",
  "groups.team.GetPhotoContent",
  "groups.team.UpdatePhotoContent",
  "groups.team.DeletePhotoContent",
  "groups.team.GetPrimaryChannel",
  "groups.team.UpdatePrimaryChannel",
  "groups.team.DeletePrimaryChannel",
  "groups.team.primaryChannel.ListAllMembers",
  "groups.team.primaryChannel.CreateAllMembers",
  "groups.team.primaryChannel.GetAllMembers",
  "groups.team.primaryChannel.UpdateAllMembers",
  "groups.team.primaryChannel.DeleteAllMembers",
  "groups.team.primaryChannel.allMembers.GetCount-1592",
  "groups.group.team.primaryChannel.allMembers.add",
  "groups.group.team.primaryChannel.allMembers.remove",
  "groups.team.primaryChannel.ListEnabledApps"
] as const;
export type TeamsGraphGroupsTeam02OperationKey = typeof TeamsGraphGroupsTeam02OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphGroupsTeam02OperationPathParamMap {
  "groups.group.team.channels.channel.removeEmail": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.startMigration": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.unarchive": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.ListSharedWithTeams": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.CreateSharedWithTeams": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.GetSharedWithTeams": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "groups.team.channels.UpdateSharedWithTeams": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "groups.team.channels.DeleteSharedWithTeams": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "groups.team.channels.sharedWithTeams.ListAllowedMembers": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "groups.team.channels.sharedWithTeams.GetAllowedMembers": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.channels.sharedWithTeams.allowedMembers.GetCount-d551": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "groups.team.channels.sharedWithTeams.GetTeam": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "groups.team.channels.sharedWithTeams.GetCount-3479": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.ListTabs": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.CreateTabs": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.GetTabs": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "groups.team.channels.UpdateTabs": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "groups.team.channels.DeleteTabs": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "groups.team.channels.tabs.GetTeamsApp": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "groups.team.channels.tabs.GetCount-5a2c": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.GetCount-dcc7": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.getAllMessages": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.getAllRetainedMessages": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetGroup": { "group-id": TeamsGraphPathParamValue };
  "groups.team.group.ListServiceProvisioningErrors": { "group-id": TeamsGraphPathParamValue };
  "groups.team.group.ServiceProvisioningErrors.GetCount-2547": { "group-id": TeamsGraphPathParamValue };
  "groups.team.ListIncomingChannels": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetIncomingChannels": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.incomingChannels.GetCount-d4b9": { "group-id": TeamsGraphPathParamValue };
  "groups.team.ListInstalledApps": { "group-id": TeamsGraphPathParamValue };
  "groups.team.CreateInstalledApps": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetInstalledApps": { "group-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "groups.team.UpdateInstalledApps": { "group-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "groups.team.DeleteInstalledApps": { "group-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "groups.group.team.installedApps.teamsAppInstallation.upgrade": { "group-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "groups.team.installedApps.GetTeamsApp": { "group-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "groups.team.installedApps.GetTeamsAppDefinition": { "group-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "groups.team.installedApps.GetCount-83d4": { "group-id": TeamsGraphPathParamValue };
  "groups.team.ListMembers": { "group-id": TeamsGraphPathParamValue };
  "groups.team.CreateMembers": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetMembers": { "group-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.UpdateMembers": { "group-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.DeleteMembers": { "group-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.members.GetCount-a0b1": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.members.add": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.members.remove": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.archive": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.clone": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.completeMigration": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.sendActivityNotification": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.unarchive": { "group-id": TeamsGraphPathParamValue };
  "groups.team.ListOperations": { "group-id": TeamsGraphPathParamValue };
  "groups.team.CreateOperations": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetOperations": { "group-id": TeamsGraphPathParamValue; "teamsAsyncOperation-id": TeamsGraphPathParamValue };
  "groups.team.UpdateOperations": { "group-id": TeamsGraphPathParamValue; "teamsAsyncOperation-id": TeamsGraphPathParamValue };
  "groups.team.DeleteOperations": { "group-id": TeamsGraphPathParamValue; "teamsAsyncOperation-id": TeamsGraphPathParamValue };
  "groups.team.operations.GetCount-6921": { "group-id": TeamsGraphPathParamValue };
  "groups.team.ListPermissionGrants": { "group-id": TeamsGraphPathParamValue };
  "groups.team.CreatePermissionGrants": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetPermissionGrants": { "group-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "groups.team.UpdatePermissionGrants": { "group-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "groups.team.DeletePermissionGrants": { "group-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "groups.team.permissionGrants.GetCount-5668": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetPhoto": { "group-id": TeamsGraphPathParamValue };
  "groups.team.UpdatePhoto": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetPhotoContent": { "group-id": TeamsGraphPathParamValue };
  "groups.team.UpdatePhotoContent": { "group-id": TeamsGraphPathParamValue };
  "groups.team.DeletePhotoContent": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetPrimaryChannel": { "group-id": TeamsGraphPathParamValue };
  "groups.team.UpdatePrimaryChannel": { "group-id": TeamsGraphPathParamValue };
  "groups.team.DeletePrimaryChannel": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.ListAllMembers": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.CreateAllMembers": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.GetAllMembers": { "group-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.UpdateAllMembers": { "group-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.DeleteAllMembers": { "group-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.allMembers.GetCount-1592": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.allMembers.add": { "group-id": TeamsGraphPathParamValue };
  "groups.group.team.primaryChannel.allMembers.remove": { "group-id": TeamsGraphPathParamValue };
  "groups.team.primaryChannel.ListEnabledApps": { "group-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphGroupsTeam02OperationRequestMap {
  "groups.group.team.channels.channel.removeEmail": TeamsGraphOperationInput<"groups.group.team.channels.channel.removeEmail">;
  "groups.group.team.channels.channel.startMigration": TeamsGraphOperationInput<"groups.group.team.channels.channel.startMigration">;
  "groups.group.team.channels.channel.unarchive": TeamsGraphOperationInput<"groups.group.team.channels.channel.unarchive">;
  "groups.team.channels.ListSharedWithTeams": TeamsGraphOperationInput<"groups.team.channels.ListSharedWithTeams">;
  "groups.team.channels.CreateSharedWithTeams": TeamsGraphOperationInput<"groups.team.channels.CreateSharedWithTeams">;
  "groups.team.channels.GetSharedWithTeams": TeamsGraphOperationInput<"groups.team.channels.GetSharedWithTeams">;
  "groups.team.channels.UpdateSharedWithTeams": TeamsGraphOperationInput<"groups.team.channels.UpdateSharedWithTeams">;
  "groups.team.channels.DeleteSharedWithTeams": TeamsGraphOperationInput<"groups.team.channels.DeleteSharedWithTeams">;
  "groups.team.channels.sharedWithTeams.ListAllowedMembers": TeamsGraphOperationInput<"groups.team.channels.sharedWithTeams.ListAllowedMembers">;
  "groups.team.channels.sharedWithTeams.GetAllowedMembers": TeamsGraphOperationInput<"groups.team.channels.sharedWithTeams.GetAllowedMembers">;
  "groups.team.channels.sharedWithTeams.allowedMembers.GetCount-d551": TeamsGraphOperationInput<"groups.team.channels.sharedWithTeams.allowedMembers.GetCount-d551">;
  "groups.team.channels.sharedWithTeams.GetTeam": TeamsGraphOperationInput<"groups.team.channels.sharedWithTeams.GetTeam">;
  "groups.team.channels.sharedWithTeams.GetCount-3479": TeamsGraphOperationInput<"groups.team.channels.sharedWithTeams.GetCount-3479">;
  "groups.team.channels.ListTabs": TeamsGraphOperationInput<"groups.team.channels.ListTabs">;
  "groups.team.channels.CreateTabs": TeamsGraphOperationInput<"groups.team.channels.CreateTabs">;
  "groups.team.channels.GetTabs": TeamsGraphOperationInput<"groups.team.channels.GetTabs">;
  "groups.team.channels.UpdateTabs": TeamsGraphOperationInput<"groups.team.channels.UpdateTabs">;
  "groups.team.channels.DeleteTabs": TeamsGraphOperationInput<"groups.team.channels.DeleteTabs">;
  "groups.team.channels.tabs.GetTeamsApp": TeamsGraphOperationInput<"groups.team.channels.tabs.GetTeamsApp">;
  "groups.team.channels.tabs.GetCount-5a2c": TeamsGraphOperationInput<"groups.team.channels.tabs.GetCount-5a2c">;
  "groups.team.channels.GetCount-dcc7": TeamsGraphOperationInput<"groups.team.channels.GetCount-dcc7">;
  "groups.group.team.channels.getAllMessages": TeamsGraphOperationInput<"groups.group.team.channels.getAllMessages">;
  "groups.group.team.channels.getAllRetainedMessages": TeamsGraphOperationInput<"groups.group.team.channels.getAllRetainedMessages">;
  "groups.team.GetGroup": TeamsGraphOperationInput<"groups.team.GetGroup">;
  "groups.team.group.ListServiceProvisioningErrors": TeamsGraphOperationInput<"groups.team.group.ListServiceProvisioningErrors">;
  "groups.team.group.ServiceProvisioningErrors.GetCount-2547": TeamsGraphOperationInput<"groups.team.group.ServiceProvisioningErrors.GetCount-2547">;
  "groups.team.ListIncomingChannels": TeamsGraphOperationInput<"groups.team.ListIncomingChannels">;
  "groups.team.GetIncomingChannels": TeamsGraphOperationInput<"groups.team.GetIncomingChannels">;
  "groups.team.incomingChannels.GetCount-d4b9": TeamsGraphOperationInput<"groups.team.incomingChannels.GetCount-d4b9">;
  "groups.team.ListInstalledApps": TeamsGraphOperationInput<"groups.team.ListInstalledApps">;
  "groups.team.CreateInstalledApps": TeamsGraphOperationInput<"groups.team.CreateInstalledApps">;
  "groups.team.GetInstalledApps": TeamsGraphOperationInput<"groups.team.GetInstalledApps">;
  "groups.team.UpdateInstalledApps": TeamsGraphOperationInput<"groups.team.UpdateInstalledApps">;
  "groups.team.DeleteInstalledApps": TeamsGraphOperationInput<"groups.team.DeleteInstalledApps">;
  "groups.group.team.installedApps.teamsAppInstallation.upgrade": TeamsGraphOperationInput<"groups.group.team.installedApps.teamsAppInstallation.upgrade">;
  "groups.team.installedApps.GetTeamsApp": TeamsGraphOperationInput<"groups.team.installedApps.GetTeamsApp">;
  "groups.team.installedApps.GetTeamsAppDefinition": TeamsGraphOperationInput<"groups.team.installedApps.GetTeamsAppDefinition">;
  "groups.team.installedApps.GetCount-83d4": TeamsGraphOperationInput<"groups.team.installedApps.GetCount-83d4">;
  "groups.team.ListMembers": TeamsGraphOperationInput<"groups.team.ListMembers">;
  "groups.team.CreateMembers": TeamsGraphOperationInput<"groups.team.CreateMembers">;
  "groups.team.GetMembers": TeamsGraphOperationInput<"groups.team.GetMembers">;
  "groups.team.UpdateMembers": TeamsGraphOperationInput<"groups.team.UpdateMembers">;
  "groups.team.DeleteMembers": TeamsGraphOperationInput<"groups.team.DeleteMembers">;
  "groups.team.members.GetCount-a0b1": TeamsGraphOperationInput<"groups.team.members.GetCount-a0b1">;
  "groups.group.team.members.add": TeamsGraphOperationInput<"groups.group.team.members.add">;
  "groups.group.team.members.remove": TeamsGraphOperationInput<"groups.group.team.members.remove">;
  "groups.group.team.archive": TeamsGraphOperationInput<"groups.group.team.archive">;
  "groups.group.team.clone": TeamsGraphOperationInput<"groups.group.team.clone">;
  "groups.group.team.completeMigration": TeamsGraphOperationInput<"groups.group.team.completeMigration">;
  "groups.group.team.sendActivityNotification": TeamsGraphOperationInput<"groups.group.team.sendActivityNotification">;
  "groups.group.team.unarchive": TeamsGraphOperationInput<"groups.group.team.unarchive">;
  "groups.team.ListOperations": TeamsGraphOperationInput<"groups.team.ListOperations">;
  "groups.team.CreateOperations": TeamsGraphOperationInput<"groups.team.CreateOperations">;
  "groups.team.GetOperations": TeamsGraphOperationInput<"groups.team.GetOperations">;
  "groups.team.UpdateOperations": TeamsGraphOperationInput<"groups.team.UpdateOperations">;
  "groups.team.DeleteOperations": TeamsGraphOperationInput<"groups.team.DeleteOperations">;
  "groups.team.operations.GetCount-6921": TeamsGraphOperationInput<"groups.team.operations.GetCount-6921">;
  "groups.team.ListPermissionGrants": TeamsGraphOperationInput<"groups.team.ListPermissionGrants">;
  "groups.team.CreatePermissionGrants": TeamsGraphOperationInput<"groups.team.CreatePermissionGrants">;
  "groups.team.GetPermissionGrants": TeamsGraphOperationInput<"groups.team.GetPermissionGrants">;
  "groups.team.UpdatePermissionGrants": TeamsGraphOperationInput<"groups.team.UpdatePermissionGrants">;
  "groups.team.DeletePermissionGrants": TeamsGraphOperationInput<"groups.team.DeletePermissionGrants">;
  "groups.team.permissionGrants.GetCount-5668": TeamsGraphOperationInput<"groups.team.permissionGrants.GetCount-5668">;
  "groups.team.GetPhoto": TeamsGraphOperationInput<"groups.team.GetPhoto">;
  "groups.team.UpdatePhoto": TeamsGraphOperationInput<"groups.team.UpdatePhoto">;
  "groups.team.GetPhotoContent": TeamsGraphOperationInput<"groups.team.GetPhotoContent">;
  "groups.team.UpdatePhotoContent": TeamsGraphOperationInput<"groups.team.UpdatePhotoContent">;
  "groups.team.DeletePhotoContent": TeamsGraphOperationInput<"groups.team.DeletePhotoContent">;
  "groups.team.GetPrimaryChannel": TeamsGraphOperationInput<"groups.team.GetPrimaryChannel">;
  "groups.team.UpdatePrimaryChannel": TeamsGraphOperationInput<"groups.team.UpdatePrimaryChannel">;
  "groups.team.DeletePrimaryChannel": TeamsGraphOperationInput<"groups.team.DeletePrimaryChannel">;
  "groups.team.primaryChannel.ListAllMembers": TeamsGraphOperationInput<"groups.team.primaryChannel.ListAllMembers">;
  "groups.team.primaryChannel.CreateAllMembers": TeamsGraphOperationInput<"groups.team.primaryChannel.CreateAllMembers">;
  "groups.team.primaryChannel.GetAllMembers": TeamsGraphOperationInput<"groups.team.primaryChannel.GetAllMembers">;
  "groups.team.primaryChannel.UpdateAllMembers": TeamsGraphOperationInput<"groups.team.primaryChannel.UpdateAllMembers">;
  "groups.team.primaryChannel.DeleteAllMembers": TeamsGraphOperationInput<"groups.team.primaryChannel.DeleteAllMembers">;
  "groups.team.primaryChannel.allMembers.GetCount-1592": TeamsGraphOperationInput<"groups.team.primaryChannel.allMembers.GetCount-1592">;
  "groups.group.team.primaryChannel.allMembers.add": TeamsGraphOperationInput<"groups.group.team.primaryChannel.allMembers.add">;
  "groups.group.team.primaryChannel.allMembers.remove": TeamsGraphOperationInput<"groups.group.team.primaryChannel.allMembers.remove">;
  "groups.team.primaryChannel.ListEnabledApps": TeamsGraphOperationInput<"groups.team.primaryChannel.ListEnabledApps">;
}

export interface TeamsGraphGroupsTeam02GeneratedClient {
  GroupsGroupTeamChannelsChannelRemoveEmail(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.removeEmail">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.removeEmail"]>;
  GroupsGroupTeamChannelsChannelStartMigration(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.startMigration">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.startMigration"]>;
  GroupsGroupTeamChannelsChannelUnarchive(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.unarchive">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.unarchive"]>;
  GroupsTeamChannelsListSharedWithTeams(...args: TeamsGraphOperationArgs<"groups.team.channels.ListSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.ListSharedWithTeams"]>;
  GroupsTeamChannelsCreateSharedWithTeams(...args: TeamsGraphOperationArgs<"groups.team.channels.CreateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.CreateSharedWithTeams"]>;
  GroupsTeamChannelsGetSharedWithTeams(...args: TeamsGraphOperationArgs<"groups.team.channels.GetSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.GetSharedWithTeams"]>;
  GroupsTeamChannelsUpdateSharedWithTeams(...args: TeamsGraphOperationArgs<"groups.team.channels.UpdateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.UpdateSharedWithTeams"]>;
  GroupsTeamChannelsDeleteSharedWithTeams(...args: TeamsGraphOperationArgs<"groups.team.channels.DeleteSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.DeleteSharedWithTeams"]>;
  GroupsTeamChannelsSharedWithTeamsListAllowedMembers(...args: TeamsGraphOperationArgs<"groups.team.channels.sharedWithTeams.ListAllowedMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.sharedWithTeams.ListAllowedMembers"]>;
  GroupsTeamChannelsSharedWithTeamsGetAllowedMembers(...args: TeamsGraphOperationArgs<"groups.team.channels.sharedWithTeams.GetAllowedMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.sharedWithTeams.GetAllowedMembers"]>;
  GroupsTeamChannelsSharedWithTeamsAllowedMembersGetCountD551(...args: TeamsGraphOperationArgs<"groups.team.channels.sharedWithTeams.allowedMembers.GetCount-d551">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.sharedWithTeams.allowedMembers.GetCount-d551"]>;
  GroupsTeamChannelsSharedWithTeamsGetTeam(...args: TeamsGraphOperationArgs<"groups.team.channels.sharedWithTeams.GetTeam">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.sharedWithTeams.GetTeam"]>;
  GroupsTeamChannelsSharedWithTeamsGetCount3479(...args: TeamsGraphOperationArgs<"groups.team.channels.sharedWithTeams.GetCount-3479">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.sharedWithTeams.GetCount-3479"]>;
  GroupsTeamChannelsListTabs(...args: TeamsGraphOperationArgs<"groups.team.channels.ListTabs">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.ListTabs"]>;
  GroupsTeamChannelsCreateTabs(...args: TeamsGraphOperationArgs<"groups.team.channels.CreateTabs">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.CreateTabs"]>;
  GroupsTeamChannelsGetTabs(...args: TeamsGraphOperationArgs<"groups.team.channels.GetTabs">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.GetTabs"]>;
  GroupsTeamChannelsUpdateTabs(...args: TeamsGraphOperationArgs<"groups.team.channels.UpdateTabs">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.UpdateTabs"]>;
  GroupsTeamChannelsDeleteTabs(...args: TeamsGraphOperationArgs<"groups.team.channels.DeleteTabs">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.DeleteTabs"]>;
  GroupsTeamChannelsTabsGetTeamsApp(...args: TeamsGraphOperationArgs<"groups.team.channels.tabs.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.tabs.GetTeamsApp"]>;
  GroupsTeamChannelsTabsGetCount5a2c(...args: TeamsGraphOperationArgs<"groups.team.channels.tabs.GetCount-5a2c">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.tabs.GetCount-5a2c"]>;
  GroupsTeamChannelsGetCountDcc7(...args: TeamsGraphOperationArgs<"groups.team.channels.GetCount-dcc7">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.GetCount-dcc7"]>;
  GroupsGroupTeamChannelsGetAllMessages(...args: TeamsGraphOperationArgs<"groups.group.team.channels.getAllMessages">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.getAllMessages"]>;
  GroupsGroupTeamChannelsGetAllRetainedMessages(...args: TeamsGraphOperationArgs<"groups.group.team.channels.getAllRetainedMessages">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.getAllRetainedMessages"]>;
  GroupsTeamGetGroup(...args: TeamsGraphOperationArgs<"groups.team.GetGroup">): Promise<TeamsGraphOperationResponseMap["groups.team.GetGroup"]>;
  GroupsTeamGroupListServiceProvisioningErrors(...args: TeamsGraphOperationArgs<"groups.team.group.ListServiceProvisioningErrors">): Promise<TeamsGraphOperationResponseMap["groups.team.group.ListServiceProvisioningErrors"]>;
  GroupsTeamGroupServiceProvisioningErrorsGetCount2547(...args: TeamsGraphOperationArgs<"groups.team.group.ServiceProvisioningErrors.GetCount-2547">): Promise<TeamsGraphOperationResponseMap["groups.team.group.ServiceProvisioningErrors.GetCount-2547"]>;
  GroupsTeamListIncomingChannels(...args: TeamsGraphOperationArgs<"groups.team.ListIncomingChannels">): Promise<TeamsGraphOperationResponseMap["groups.team.ListIncomingChannels"]>;
  GroupsTeamGetIncomingChannels(...args: TeamsGraphOperationArgs<"groups.team.GetIncomingChannels">): Promise<TeamsGraphOperationResponseMap["groups.team.GetIncomingChannels"]>;
  GroupsTeamIncomingChannelsGetCountD4b9(...args: TeamsGraphOperationArgs<"groups.team.incomingChannels.GetCount-d4b9">): Promise<TeamsGraphOperationResponseMap["groups.team.incomingChannels.GetCount-d4b9"]>;
  GroupsTeamListInstalledApps(...args: TeamsGraphOperationArgs<"groups.team.ListInstalledApps">): Promise<TeamsGraphOperationResponseMap["groups.team.ListInstalledApps"]>;
  GroupsTeamCreateInstalledApps(...args: TeamsGraphOperationArgs<"groups.team.CreateInstalledApps">): Promise<TeamsGraphOperationResponseMap["groups.team.CreateInstalledApps"]>;
  GroupsTeamGetInstalledApps(...args: TeamsGraphOperationArgs<"groups.team.GetInstalledApps">): Promise<TeamsGraphOperationResponseMap["groups.team.GetInstalledApps"]>;
  GroupsTeamUpdateInstalledApps(...args: TeamsGraphOperationArgs<"groups.team.UpdateInstalledApps">): Promise<TeamsGraphOperationResponseMap["groups.team.UpdateInstalledApps"]>;
  GroupsTeamDeleteInstalledApps(...args: TeamsGraphOperationArgs<"groups.team.DeleteInstalledApps">): Promise<TeamsGraphOperationResponseMap["groups.team.DeleteInstalledApps"]>;
  GroupsGroupTeamInstalledAppsTeamsAppInstallationUpgrade(...args: TeamsGraphOperationArgs<"groups.group.team.installedApps.teamsAppInstallation.upgrade">): Promise<TeamsGraphOperationResponseMap["groups.group.team.installedApps.teamsAppInstallation.upgrade"]>;
  GroupsTeamInstalledAppsGetTeamsApp(...args: TeamsGraphOperationArgs<"groups.team.installedApps.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["groups.team.installedApps.GetTeamsApp"]>;
  GroupsTeamInstalledAppsGetTeamsAppDefinition(...args: TeamsGraphOperationArgs<"groups.team.installedApps.GetTeamsAppDefinition">): Promise<TeamsGraphOperationResponseMap["groups.team.installedApps.GetTeamsAppDefinition"]>;
  GroupsTeamInstalledAppsGetCount83d4(...args: TeamsGraphOperationArgs<"groups.team.installedApps.GetCount-83d4">): Promise<TeamsGraphOperationResponseMap["groups.team.installedApps.GetCount-83d4"]>;
  GroupsTeamListMembers(...args: TeamsGraphOperationArgs<"groups.team.ListMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.ListMembers"]>;
  GroupsTeamCreateMembers(...args: TeamsGraphOperationArgs<"groups.team.CreateMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.CreateMembers"]>;
  GroupsTeamGetMembers(...args: TeamsGraphOperationArgs<"groups.team.GetMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.GetMembers"]>;
  GroupsTeamUpdateMembers(...args: TeamsGraphOperationArgs<"groups.team.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.UpdateMembers"]>;
  GroupsTeamDeleteMembers(...args: TeamsGraphOperationArgs<"groups.team.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.DeleteMembers"]>;
  GroupsTeamMembersGetCountA0b1(...args: TeamsGraphOperationArgs<"groups.team.members.GetCount-a0b1">): Promise<TeamsGraphOperationResponseMap["groups.team.members.GetCount-a0b1"]>;
  GroupsGroupTeamMembersAdd(...args: TeamsGraphOperationArgs<"groups.group.team.members.add">): Promise<TeamsGraphOperationResponseMap["groups.group.team.members.add"]>;
  GroupsGroupTeamMembersRemove(...args: TeamsGraphOperationArgs<"groups.group.team.members.remove">): Promise<TeamsGraphOperationResponseMap["groups.group.team.members.remove"]>;
  GroupsGroupTeamArchive(...args: TeamsGraphOperationArgs<"groups.group.team.archive">): Promise<TeamsGraphOperationResponseMap["groups.group.team.archive"]>;
  GroupsGroupTeamClone(...args: TeamsGraphOperationArgs<"groups.group.team.clone">): Promise<TeamsGraphOperationResponseMap["groups.group.team.clone"]>;
  GroupsGroupTeamCompleteMigration(...args: TeamsGraphOperationArgs<"groups.group.team.completeMigration">): Promise<TeamsGraphOperationResponseMap["groups.group.team.completeMigration"]>;
  GroupsGroupTeamSendActivityNotification(...args: TeamsGraphOperationArgs<"groups.group.team.sendActivityNotification">): Promise<TeamsGraphOperationResponseMap["groups.group.team.sendActivityNotification"]>;
  GroupsGroupTeamUnarchive(...args: TeamsGraphOperationArgs<"groups.group.team.unarchive">): Promise<TeamsGraphOperationResponseMap["groups.group.team.unarchive"]>;
  GroupsTeamListOperations(...args: TeamsGraphOperationArgs<"groups.team.ListOperations">): Promise<TeamsGraphOperationResponseMap["groups.team.ListOperations"]>;
  GroupsTeamCreateOperations(...args: TeamsGraphOperationArgs<"groups.team.CreateOperations">): Promise<TeamsGraphOperationResponseMap["groups.team.CreateOperations"]>;
  GroupsTeamGetOperations(...args: TeamsGraphOperationArgs<"groups.team.GetOperations">): Promise<TeamsGraphOperationResponseMap["groups.team.GetOperations"]>;
  GroupsTeamUpdateOperations(...args: TeamsGraphOperationArgs<"groups.team.UpdateOperations">): Promise<TeamsGraphOperationResponseMap["groups.team.UpdateOperations"]>;
  GroupsTeamDeleteOperations(...args: TeamsGraphOperationArgs<"groups.team.DeleteOperations">): Promise<TeamsGraphOperationResponseMap["groups.team.DeleteOperations"]>;
  GroupsTeamOperationsGetCount6921(...args: TeamsGraphOperationArgs<"groups.team.operations.GetCount-6921">): Promise<TeamsGraphOperationResponseMap["groups.team.operations.GetCount-6921"]>;
  GroupsTeamListPermissionGrants(...args: TeamsGraphOperationArgs<"groups.team.ListPermissionGrants">): Promise<TeamsGraphOperationResponseMap["groups.team.ListPermissionGrants"]>;
  GroupsTeamCreatePermissionGrants(...args: TeamsGraphOperationArgs<"groups.team.CreatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["groups.team.CreatePermissionGrants"]>;
  GroupsTeamGetPermissionGrants(...args: TeamsGraphOperationArgs<"groups.team.GetPermissionGrants">): Promise<TeamsGraphOperationResponseMap["groups.team.GetPermissionGrants"]>;
  GroupsTeamUpdatePermissionGrants(...args: TeamsGraphOperationArgs<"groups.team.UpdatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["groups.team.UpdatePermissionGrants"]>;
  GroupsTeamDeletePermissionGrants(...args: TeamsGraphOperationArgs<"groups.team.DeletePermissionGrants">): Promise<TeamsGraphOperationResponseMap["groups.team.DeletePermissionGrants"]>;
  GroupsTeamPermissionGrantsGetCount5668(...args: TeamsGraphOperationArgs<"groups.team.permissionGrants.GetCount-5668">): Promise<TeamsGraphOperationResponseMap["groups.team.permissionGrants.GetCount-5668"]>;
  GroupsTeamGetPhoto(...args: TeamsGraphOperationArgs<"groups.team.GetPhoto">): Promise<TeamsGraphOperationResponseMap["groups.team.GetPhoto"]>;
  GroupsTeamUpdatePhoto(...args: TeamsGraphOperationArgs<"groups.team.UpdatePhoto">): Promise<TeamsGraphOperationResponseMap["groups.team.UpdatePhoto"]>;
  GroupsTeamGetPhotoContent(...args: TeamsGraphOperationArgs<"groups.team.GetPhotoContent">): Promise<TeamsGraphOperationResponseMap["groups.team.GetPhotoContent"]>;
  GroupsTeamUpdatePhotoContent(...args: TeamsGraphOperationArgs<"groups.team.UpdatePhotoContent">): Promise<TeamsGraphOperationResponseMap["groups.team.UpdatePhotoContent"]>;
  GroupsTeamDeletePhotoContent(...args: TeamsGraphOperationArgs<"groups.team.DeletePhotoContent">): Promise<TeamsGraphOperationResponseMap["groups.team.DeletePhotoContent"]>;
  GroupsTeamGetPrimaryChannel(...args: TeamsGraphOperationArgs<"groups.team.GetPrimaryChannel">): Promise<TeamsGraphOperationResponseMap["groups.team.GetPrimaryChannel"]>;
  GroupsTeamUpdatePrimaryChannel(...args: TeamsGraphOperationArgs<"groups.team.UpdatePrimaryChannel">): Promise<TeamsGraphOperationResponseMap["groups.team.UpdatePrimaryChannel"]>;
  GroupsTeamDeletePrimaryChannel(...args: TeamsGraphOperationArgs<"groups.team.DeletePrimaryChannel">): Promise<TeamsGraphOperationResponseMap["groups.team.DeletePrimaryChannel"]>;
  GroupsTeamPrimaryChannelListAllMembers(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.ListAllMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.ListAllMembers"]>;
  GroupsTeamPrimaryChannelCreateAllMembers(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.CreateAllMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.CreateAllMembers"]>;
  GroupsTeamPrimaryChannelGetAllMembers(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.GetAllMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.GetAllMembers"]>;
  GroupsTeamPrimaryChannelUpdateAllMembers(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.UpdateAllMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.UpdateAllMembers"]>;
  GroupsTeamPrimaryChannelDeleteAllMembers(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.DeleteAllMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.DeleteAllMembers"]>;
  GroupsTeamPrimaryChannelAllMembersGetCount1592(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.allMembers.GetCount-1592">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.allMembers.GetCount-1592"]>;
  GroupsGroupTeamPrimaryChannelAllMembersAdd(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.allMembers.add">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.allMembers.add"]>;
  GroupsGroupTeamPrimaryChannelAllMembersRemove(...args: TeamsGraphOperationArgs<"groups.group.team.primaryChannel.allMembers.remove">): Promise<TeamsGraphOperationResponseMap["groups.group.team.primaryChannel.allMembers.remove"]>;
  GroupsTeamPrimaryChannelListEnabledApps(...args: TeamsGraphOperationArgs<"groups.team.primaryChannel.ListEnabledApps">): Promise<TeamsGraphOperationResponseMap["groups.team.primaryChannel.ListEnabledApps"]>;
}

export const TeamsGraphGroupsTeam02GeneratedFunctionNames = [
  "GroupsGroupTeamChannelsChannelRemoveEmail",
  "GroupsGroupTeamChannelsChannelStartMigration",
  "GroupsGroupTeamChannelsChannelUnarchive",
  "GroupsTeamChannelsListSharedWithTeams",
  "GroupsTeamChannelsCreateSharedWithTeams",
  "GroupsTeamChannelsGetSharedWithTeams",
  "GroupsTeamChannelsUpdateSharedWithTeams",
  "GroupsTeamChannelsDeleteSharedWithTeams",
  "GroupsTeamChannelsSharedWithTeamsListAllowedMembers",
  "GroupsTeamChannelsSharedWithTeamsGetAllowedMembers",
  "GroupsTeamChannelsSharedWithTeamsAllowedMembersGetCountD551",
  "GroupsTeamChannelsSharedWithTeamsGetTeam",
  "GroupsTeamChannelsSharedWithTeamsGetCount3479",
  "GroupsTeamChannelsListTabs",
  "GroupsTeamChannelsCreateTabs",
  "GroupsTeamChannelsGetTabs",
  "GroupsTeamChannelsUpdateTabs",
  "GroupsTeamChannelsDeleteTabs",
  "GroupsTeamChannelsTabsGetTeamsApp",
  "GroupsTeamChannelsTabsGetCount5a2c",
  "GroupsTeamChannelsGetCountDcc7",
  "GroupsGroupTeamChannelsGetAllMessages",
  "GroupsGroupTeamChannelsGetAllRetainedMessages",
  "GroupsTeamGetGroup",
  "GroupsTeamGroupListServiceProvisioningErrors",
  "GroupsTeamGroupServiceProvisioningErrorsGetCount2547",
  "GroupsTeamListIncomingChannels",
  "GroupsTeamGetIncomingChannels",
  "GroupsTeamIncomingChannelsGetCountD4b9",
  "GroupsTeamListInstalledApps",
  "GroupsTeamCreateInstalledApps",
  "GroupsTeamGetInstalledApps",
  "GroupsTeamUpdateInstalledApps",
  "GroupsTeamDeleteInstalledApps",
  "GroupsGroupTeamInstalledAppsTeamsAppInstallationUpgrade",
  "GroupsTeamInstalledAppsGetTeamsApp",
  "GroupsTeamInstalledAppsGetTeamsAppDefinition",
  "GroupsTeamInstalledAppsGetCount83d4",
  "GroupsTeamListMembers",
  "GroupsTeamCreateMembers",
  "GroupsTeamGetMembers",
  "GroupsTeamUpdateMembers",
  "GroupsTeamDeleteMembers",
  "GroupsTeamMembersGetCountA0b1",
  "GroupsGroupTeamMembersAdd",
  "GroupsGroupTeamMembersRemove",
  "GroupsGroupTeamArchive",
  "GroupsGroupTeamClone",
  "GroupsGroupTeamCompleteMigration",
  "GroupsGroupTeamSendActivityNotification",
  "GroupsGroupTeamUnarchive",
  "GroupsTeamListOperations",
  "GroupsTeamCreateOperations",
  "GroupsTeamGetOperations",
  "GroupsTeamUpdateOperations",
  "GroupsTeamDeleteOperations",
  "GroupsTeamOperationsGetCount6921",
  "GroupsTeamListPermissionGrants",
  "GroupsTeamCreatePermissionGrants",
  "GroupsTeamGetPermissionGrants",
  "GroupsTeamUpdatePermissionGrants",
  "GroupsTeamDeletePermissionGrants",
  "GroupsTeamPermissionGrantsGetCount5668",
  "GroupsTeamGetPhoto",
  "GroupsTeamUpdatePhoto",
  "GroupsTeamGetPhotoContent",
  "GroupsTeamUpdatePhotoContent",
  "GroupsTeamDeletePhotoContent",
  "GroupsTeamGetPrimaryChannel",
  "GroupsTeamUpdatePrimaryChannel",
  "GroupsTeamDeletePrimaryChannel",
  "GroupsTeamPrimaryChannelListAllMembers",
  "GroupsTeamPrimaryChannelCreateAllMembers",
  "GroupsTeamPrimaryChannelGetAllMembers",
  "GroupsTeamPrimaryChannelUpdateAllMembers",
  "GroupsTeamPrimaryChannelDeleteAllMembers",
  "GroupsTeamPrimaryChannelAllMembersGetCount1592",
  "GroupsGroupTeamPrimaryChannelAllMembersAdd",
  "GroupsGroupTeamPrimaryChannelAllMembersRemove",
  "GroupsTeamPrimaryChannelListEnabledApps"
] as const satisfies readonly (keyof TeamsGraphGroupsTeam02GeneratedClient)[];

export function createTeamsGraphGroupsTeam02GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphGroupsTeam02GeneratedClient {
  return {
    GroupsGroupTeamChannelsChannelRemoveEmail: (...args) => callOperation("groups.group.team.channels.channel.removeEmail", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.removeEmail">)),
    GroupsGroupTeamChannelsChannelStartMigration: (...args) => callOperation("groups.group.team.channels.channel.startMigration", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.startMigration">)),
    GroupsGroupTeamChannelsChannelUnarchive: (...args) => callOperation("groups.group.team.channels.channel.unarchive", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.unarchive">)),
    GroupsTeamChannelsListSharedWithTeams: (...args) => callOperation("groups.team.channels.ListSharedWithTeams", ...(args as TeamsGraphOperationArgs<"groups.team.channels.ListSharedWithTeams">)),
    GroupsTeamChannelsCreateSharedWithTeams: (...args) => callOperation("groups.team.channels.CreateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"groups.team.channels.CreateSharedWithTeams">)),
    GroupsTeamChannelsGetSharedWithTeams: (...args) => callOperation("groups.team.channels.GetSharedWithTeams", ...(args as TeamsGraphOperationArgs<"groups.team.channels.GetSharedWithTeams">)),
    GroupsTeamChannelsUpdateSharedWithTeams: (...args) => callOperation("groups.team.channels.UpdateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"groups.team.channels.UpdateSharedWithTeams">)),
    GroupsTeamChannelsDeleteSharedWithTeams: (...args) => callOperation("groups.team.channels.DeleteSharedWithTeams", ...(args as TeamsGraphOperationArgs<"groups.team.channels.DeleteSharedWithTeams">)),
    GroupsTeamChannelsSharedWithTeamsListAllowedMembers: (...args) => callOperation("groups.team.channels.sharedWithTeams.ListAllowedMembers", ...(args as TeamsGraphOperationArgs<"groups.team.channels.sharedWithTeams.ListAllowedMembers">)),
    GroupsTeamChannelsSharedWithTeamsGetAllowedMembers: (...args) => callOperation("groups.team.channels.sharedWithTeams.GetAllowedMembers", ...(args as TeamsGraphOperationArgs<"groups.team.channels.sharedWithTeams.GetAllowedMembers">)),
    GroupsTeamChannelsSharedWithTeamsAllowedMembersGetCountD551: (...args) => callOperation("groups.team.channels.sharedWithTeams.allowedMembers.GetCount-d551", ...(args as TeamsGraphOperationArgs<"groups.team.channels.sharedWithTeams.allowedMembers.GetCount-d551">)),
    GroupsTeamChannelsSharedWithTeamsGetTeam: (...args) => callOperation("groups.team.channels.sharedWithTeams.GetTeam", ...(args as TeamsGraphOperationArgs<"groups.team.channels.sharedWithTeams.GetTeam">)),
    GroupsTeamChannelsSharedWithTeamsGetCount3479: (...args) => callOperation("groups.team.channels.sharedWithTeams.GetCount-3479", ...(args as TeamsGraphOperationArgs<"groups.team.channels.sharedWithTeams.GetCount-3479">)),
    GroupsTeamChannelsListTabs: (...args) => callOperation("groups.team.channels.ListTabs", ...(args as TeamsGraphOperationArgs<"groups.team.channels.ListTabs">)),
    GroupsTeamChannelsCreateTabs: (...args) => callOperation("groups.team.channels.CreateTabs", ...(args as TeamsGraphOperationArgs<"groups.team.channels.CreateTabs">)),
    GroupsTeamChannelsGetTabs: (...args) => callOperation("groups.team.channels.GetTabs", ...(args as TeamsGraphOperationArgs<"groups.team.channels.GetTabs">)),
    GroupsTeamChannelsUpdateTabs: (...args) => callOperation("groups.team.channels.UpdateTabs", ...(args as TeamsGraphOperationArgs<"groups.team.channels.UpdateTabs">)),
    GroupsTeamChannelsDeleteTabs: (...args) => callOperation("groups.team.channels.DeleteTabs", ...(args as TeamsGraphOperationArgs<"groups.team.channels.DeleteTabs">)),
    GroupsTeamChannelsTabsGetTeamsApp: (...args) => callOperation("groups.team.channels.tabs.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"groups.team.channels.tabs.GetTeamsApp">)),
    GroupsTeamChannelsTabsGetCount5a2c: (...args) => callOperation("groups.team.channels.tabs.GetCount-5a2c", ...(args as TeamsGraphOperationArgs<"groups.team.channels.tabs.GetCount-5a2c">)),
    GroupsTeamChannelsGetCountDcc7: (...args) => callOperation("groups.team.channels.GetCount-dcc7", ...(args as TeamsGraphOperationArgs<"groups.team.channels.GetCount-dcc7">)),
    GroupsGroupTeamChannelsGetAllMessages: (...args) => callOperation("groups.group.team.channels.getAllMessages", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.getAllMessages">)),
    GroupsGroupTeamChannelsGetAllRetainedMessages: (...args) => callOperation("groups.group.team.channels.getAllRetainedMessages", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.getAllRetainedMessages">)),
    GroupsTeamGetGroup: (...args) => callOperation("groups.team.GetGroup", ...(args as TeamsGraphOperationArgs<"groups.team.GetGroup">)),
    GroupsTeamGroupListServiceProvisioningErrors: (...args) => callOperation("groups.team.group.ListServiceProvisioningErrors", ...(args as TeamsGraphOperationArgs<"groups.team.group.ListServiceProvisioningErrors">)),
    GroupsTeamGroupServiceProvisioningErrorsGetCount2547: (...args) => callOperation("groups.team.group.ServiceProvisioningErrors.GetCount-2547", ...(args as TeamsGraphOperationArgs<"groups.team.group.ServiceProvisioningErrors.GetCount-2547">)),
    GroupsTeamListIncomingChannels: (...args) => callOperation("groups.team.ListIncomingChannels", ...(args as TeamsGraphOperationArgs<"groups.team.ListIncomingChannels">)),
    GroupsTeamGetIncomingChannels: (...args) => callOperation("groups.team.GetIncomingChannels", ...(args as TeamsGraphOperationArgs<"groups.team.GetIncomingChannels">)),
    GroupsTeamIncomingChannelsGetCountD4b9: (...args) => callOperation("groups.team.incomingChannels.GetCount-d4b9", ...(args as TeamsGraphOperationArgs<"groups.team.incomingChannels.GetCount-d4b9">)),
    GroupsTeamListInstalledApps: (...args) => callOperation("groups.team.ListInstalledApps", ...(args as TeamsGraphOperationArgs<"groups.team.ListInstalledApps">)),
    GroupsTeamCreateInstalledApps: (...args) => callOperation("groups.team.CreateInstalledApps", ...(args as TeamsGraphOperationArgs<"groups.team.CreateInstalledApps">)),
    GroupsTeamGetInstalledApps: (...args) => callOperation("groups.team.GetInstalledApps", ...(args as TeamsGraphOperationArgs<"groups.team.GetInstalledApps">)),
    GroupsTeamUpdateInstalledApps: (...args) => callOperation("groups.team.UpdateInstalledApps", ...(args as TeamsGraphOperationArgs<"groups.team.UpdateInstalledApps">)),
    GroupsTeamDeleteInstalledApps: (...args) => callOperation("groups.team.DeleteInstalledApps", ...(args as TeamsGraphOperationArgs<"groups.team.DeleteInstalledApps">)),
    GroupsGroupTeamInstalledAppsTeamsAppInstallationUpgrade: (...args) => callOperation("groups.group.team.installedApps.teamsAppInstallation.upgrade", ...(args as TeamsGraphOperationArgs<"groups.group.team.installedApps.teamsAppInstallation.upgrade">)),
    GroupsTeamInstalledAppsGetTeamsApp: (...args) => callOperation("groups.team.installedApps.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"groups.team.installedApps.GetTeamsApp">)),
    GroupsTeamInstalledAppsGetTeamsAppDefinition: (...args) => callOperation("groups.team.installedApps.GetTeamsAppDefinition", ...(args as TeamsGraphOperationArgs<"groups.team.installedApps.GetTeamsAppDefinition">)),
    GroupsTeamInstalledAppsGetCount83d4: (...args) => callOperation("groups.team.installedApps.GetCount-83d4", ...(args as TeamsGraphOperationArgs<"groups.team.installedApps.GetCount-83d4">)),
    GroupsTeamListMembers: (...args) => callOperation("groups.team.ListMembers", ...(args as TeamsGraphOperationArgs<"groups.team.ListMembers">)),
    GroupsTeamCreateMembers: (...args) => callOperation("groups.team.CreateMembers", ...(args as TeamsGraphOperationArgs<"groups.team.CreateMembers">)),
    GroupsTeamGetMembers: (...args) => callOperation("groups.team.GetMembers", ...(args as TeamsGraphOperationArgs<"groups.team.GetMembers">)),
    GroupsTeamUpdateMembers: (...args) => callOperation("groups.team.UpdateMembers", ...(args as TeamsGraphOperationArgs<"groups.team.UpdateMembers">)),
    GroupsTeamDeleteMembers: (...args) => callOperation("groups.team.DeleteMembers", ...(args as TeamsGraphOperationArgs<"groups.team.DeleteMembers">)),
    GroupsTeamMembersGetCountA0b1: (...args) => callOperation("groups.team.members.GetCount-a0b1", ...(args as TeamsGraphOperationArgs<"groups.team.members.GetCount-a0b1">)),
    GroupsGroupTeamMembersAdd: (...args) => callOperation("groups.group.team.members.add", ...(args as TeamsGraphOperationArgs<"groups.group.team.members.add">)),
    GroupsGroupTeamMembersRemove: (...args) => callOperation("groups.group.team.members.remove", ...(args as TeamsGraphOperationArgs<"groups.group.team.members.remove">)),
    GroupsGroupTeamArchive: (...args) => callOperation("groups.group.team.archive", ...(args as TeamsGraphOperationArgs<"groups.group.team.archive">)),
    GroupsGroupTeamClone: (...args) => callOperation("groups.group.team.clone", ...(args as TeamsGraphOperationArgs<"groups.group.team.clone">)),
    GroupsGroupTeamCompleteMigration: (...args) => callOperation("groups.group.team.completeMigration", ...(args as TeamsGraphOperationArgs<"groups.group.team.completeMigration">)),
    GroupsGroupTeamSendActivityNotification: (...args) => callOperation("groups.group.team.sendActivityNotification", ...(args as TeamsGraphOperationArgs<"groups.group.team.sendActivityNotification">)),
    GroupsGroupTeamUnarchive: (...args) => callOperation("groups.group.team.unarchive", ...(args as TeamsGraphOperationArgs<"groups.group.team.unarchive">)),
    GroupsTeamListOperations: (...args) => callOperation("groups.team.ListOperations", ...(args as TeamsGraphOperationArgs<"groups.team.ListOperations">)),
    GroupsTeamCreateOperations: (...args) => callOperation("groups.team.CreateOperations", ...(args as TeamsGraphOperationArgs<"groups.team.CreateOperations">)),
    GroupsTeamGetOperations: (...args) => callOperation("groups.team.GetOperations", ...(args as TeamsGraphOperationArgs<"groups.team.GetOperations">)),
    GroupsTeamUpdateOperations: (...args) => callOperation("groups.team.UpdateOperations", ...(args as TeamsGraphOperationArgs<"groups.team.UpdateOperations">)),
    GroupsTeamDeleteOperations: (...args) => callOperation("groups.team.DeleteOperations", ...(args as TeamsGraphOperationArgs<"groups.team.DeleteOperations">)),
    GroupsTeamOperationsGetCount6921: (...args) => callOperation("groups.team.operations.GetCount-6921", ...(args as TeamsGraphOperationArgs<"groups.team.operations.GetCount-6921">)),
    GroupsTeamListPermissionGrants: (...args) => callOperation("groups.team.ListPermissionGrants", ...(args as TeamsGraphOperationArgs<"groups.team.ListPermissionGrants">)),
    GroupsTeamCreatePermissionGrants: (...args) => callOperation("groups.team.CreatePermissionGrants", ...(args as TeamsGraphOperationArgs<"groups.team.CreatePermissionGrants">)),
    GroupsTeamGetPermissionGrants: (...args) => callOperation("groups.team.GetPermissionGrants", ...(args as TeamsGraphOperationArgs<"groups.team.GetPermissionGrants">)),
    GroupsTeamUpdatePermissionGrants: (...args) => callOperation("groups.team.UpdatePermissionGrants", ...(args as TeamsGraphOperationArgs<"groups.team.UpdatePermissionGrants">)),
    GroupsTeamDeletePermissionGrants: (...args) => callOperation("groups.team.DeletePermissionGrants", ...(args as TeamsGraphOperationArgs<"groups.team.DeletePermissionGrants">)),
    GroupsTeamPermissionGrantsGetCount5668: (...args) => callOperation("groups.team.permissionGrants.GetCount-5668", ...(args as TeamsGraphOperationArgs<"groups.team.permissionGrants.GetCount-5668">)),
    GroupsTeamGetPhoto: (...args) => callOperation("groups.team.GetPhoto", ...(args as TeamsGraphOperationArgs<"groups.team.GetPhoto">)),
    GroupsTeamUpdatePhoto: (...args) => callOperation("groups.team.UpdatePhoto", ...(args as TeamsGraphOperationArgs<"groups.team.UpdatePhoto">)),
    GroupsTeamGetPhotoContent: (...args) => callOperation("groups.team.GetPhotoContent", ...(args as TeamsGraphOperationArgs<"groups.team.GetPhotoContent">)),
    GroupsTeamUpdatePhotoContent: (...args) => callOperation("groups.team.UpdatePhotoContent", ...(args as TeamsGraphOperationArgs<"groups.team.UpdatePhotoContent">)),
    GroupsTeamDeletePhotoContent: (...args) => callOperation("groups.team.DeletePhotoContent", ...(args as TeamsGraphOperationArgs<"groups.team.DeletePhotoContent">)),
    GroupsTeamGetPrimaryChannel: (...args) => callOperation("groups.team.GetPrimaryChannel", ...(args as TeamsGraphOperationArgs<"groups.team.GetPrimaryChannel">)),
    GroupsTeamUpdatePrimaryChannel: (...args) => callOperation("groups.team.UpdatePrimaryChannel", ...(args as TeamsGraphOperationArgs<"groups.team.UpdatePrimaryChannel">)),
    GroupsTeamDeletePrimaryChannel: (...args) => callOperation("groups.team.DeletePrimaryChannel", ...(args as TeamsGraphOperationArgs<"groups.team.DeletePrimaryChannel">)),
    GroupsTeamPrimaryChannelListAllMembers: (...args) => callOperation("groups.team.primaryChannel.ListAllMembers", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.ListAllMembers">)),
    GroupsTeamPrimaryChannelCreateAllMembers: (...args) => callOperation("groups.team.primaryChannel.CreateAllMembers", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.CreateAllMembers">)),
    GroupsTeamPrimaryChannelGetAllMembers: (...args) => callOperation("groups.team.primaryChannel.GetAllMembers", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.GetAllMembers">)),
    GroupsTeamPrimaryChannelUpdateAllMembers: (...args) => callOperation("groups.team.primaryChannel.UpdateAllMembers", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.UpdateAllMembers">)),
    GroupsTeamPrimaryChannelDeleteAllMembers: (...args) => callOperation("groups.team.primaryChannel.DeleteAllMembers", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.DeleteAllMembers">)),
    GroupsTeamPrimaryChannelAllMembersGetCount1592: (...args) => callOperation("groups.team.primaryChannel.allMembers.GetCount-1592", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.allMembers.GetCount-1592">)),
    GroupsGroupTeamPrimaryChannelAllMembersAdd: (...args) => callOperation("groups.group.team.primaryChannel.allMembers.add", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.allMembers.add">)),
    GroupsGroupTeamPrimaryChannelAllMembersRemove: (...args) => callOperation("groups.group.team.primaryChannel.allMembers.remove", ...(args as TeamsGraphOperationArgs<"groups.group.team.primaryChannel.allMembers.remove">)),
    GroupsTeamPrimaryChannelListEnabledApps: (...args) => callOperation("groups.team.primaryChannel.ListEnabledApps", ...(args as TeamsGraphOperationArgs<"groups.team.primaryChannel.ListEnabledApps">)),
  };
}
