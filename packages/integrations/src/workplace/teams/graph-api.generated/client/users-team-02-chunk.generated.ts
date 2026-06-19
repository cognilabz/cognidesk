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
export const TeamsGraphUsersTeam02OperationKeys = [
  "users.user.joinedTeams.team.channels.channel.doesUserHaveAccess",
  "users.user.joinedTeams.team.channels.channel.provisionEmail",
  "users.user.joinedTeams.team.channels.channel.removeEmail",
  "users.user.joinedTeams.team.channels.channel.startMigration",
  "users.user.joinedTeams.team.channels.channel.unarchive",
  "users.joinedTeams.channels.ListSharedWithTeams",
  "users.joinedTeams.channels.CreateSharedWithTeams",
  "users.joinedTeams.channels.GetSharedWithTeams",
  "users.joinedTeams.channels.UpdateSharedWithTeams",
  "users.joinedTeams.channels.DeleteSharedWithTeams",
  "users.joinedTeams.channels.sharedWithTeams.ListAllowedMembers",
  "users.joinedTeams.channels.sharedWithTeams.GetAllowedMembers",
  "users.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-8dec",
  "users.joinedTeams.channels.sharedWithTeams.GetTeam",
  "users.joinedTeams.channels.sharedWithTeams.GetCount-3df3",
  "users.joinedTeams.channels.ListTabs",
  "users.joinedTeams.channels.CreateTabs",
  "users.joinedTeams.channels.GetTabs",
  "users.joinedTeams.channels.UpdateTabs",
  "users.joinedTeams.channels.DeleteTabs",
  "users.joinedTeams.channels.tabs.GetTeamsApp",
  "users.joinedTeams.channels.tabs.GetCount-6808",
  "users.joinedTeams.channels.GetCount-e058",
  "users.user.joinedTeams.team.channels.getAllMessages",
  "users.user.joinedTeams.team.channels.getAllRetainedMessages",
  "users.joinedTeams.GetGroup",
  "users.joinedTeams.group.ListServiceProvisioningErrors",
  "users.joinedTeams.group.ServiceProvisioningErrors.GetCount-989c",
  "users.joinedTeams.ListIncomingChannels",
  "users.joinedTeams.GetIncomingChannels",
  "users.joinedTeams.incomingChannels.GetCount-bf05",
  "users.joinedTeams.ListInstalledApps",
  "users.joinedTeams.CreateInstalledApps",
  "users.joinedTeams.GetInstalledApps",
  "users.joinedTeams.UpdateInstalledApps",
  "users.joinedTeams.DeleteInstalledApps",
  "users.user.joinedTeams.team.installedApps.teamsAppInstallation.upgrade",
  "users.joinedTeams.installedApps.GetTeamsApp",
  "users.joinedTeams.installedApps.GetTeamsAppDefinition",
  "users.joinedTeams.installedApps.GetCount-1148",
  "users.joinedTeams.ListMembers",
  "users.joinedTeams.CreateMembers",
  "users.joinedTeams.GetMembers",
  "users.joinedTeams.UpdateMembers",
  "users.joinedTeams.DeleteMembers",
  "users.joinedTeams.members.GetCount-5648",
  "users.user.joinedTeams.team.members.add",
  "users.user.joinedTeams.team.members.remove",
  "users.user.joinedTeams.team.archive",
  "users.user.joinedTeams.team.clone",
  "users.user.joinedTeams.team.completeMigration",
  "users.user.joinedTeams.team.sendActivityNotification",
  "users.user.joinedTeams.team.unarchive",
  "users.joinedTeams.ListOperations",
  "users.joinedTeams.CreateOperations",
  "users.joinedTeams.GetOperations",
  "users.joinedTeams.UpdateOperations",
  "users.joinedTeams.DeleteOperations",
  "users.joinedTeams.operations.GetCount-5268",
  "users.joinedTeams.ListPermissionGrants",
  "users.joinedTeams.CreatePermissionGrants",
  "users.joinedTeams.GetPermissionGrants",
  "users.joinedTeams.UpdatePermissionGrants",
  "users.joinedTeams.DeletePermissionGrants",
  "users.joinedTeams.permissionGrants.GetCount-70b8",
  "users.joinedTeams.GetPhoto",
  "users.joinedTeams.UpdatePhoto",
  "users.joinedTeams.GetPhotoContent",
  "users.joinedTeams.UpdatePhotoContent",
  "users.joinedTeams.DeletePhotoContent",
  "users.joinedTeams.GetPrimaryChannel",
  "users.joinedTeams.UpdatePrimaryChannel",
  "users.joinedTeams.DeletePrimaryChannel",
  "users.joinedTeams.primaryChannel.ListAllMembers",
  "users.joinedTeams.primaryChannel.CreateAllMembers",
  "users.joinedTeams.primaryChannel.GetAllMembers",
  "users.joinedTeams.primaryChannel.UpdateAllMembers",
  "users.joinedTeams.primaryChannel.DeleteAllMembers",
  "users.joinedTeams.primaryChannel.allMembers.GetCount-6630",
  "users.user.joinedTeams.team.primaryChannel.allMembers.add"
] as const;
export type TeamsGraphUsersTeam02OperationKey = typeof TeamsGraphUsersTeam02OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphUsersTeam02OperationPathParamMap {
  "users.user.joinedTeams.team.channels.channel.doesUserHaveAccess": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.provisionEmail": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.removeEmail": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.startMigration": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.unarchive": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.ListSharedWithTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.CreateSharedWithTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.GetSharedWithTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.UpdateSharedWithTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.DeleteSharedWithTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.sharedWithTeams.ListAllowedMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.sharedWithTeams.GetAllowedMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-8dec": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.sharedWithTeams.GetTeam": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.sharedWithTeams.GetCount-3df3": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.ListTabs": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.CreateTabs": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.GetTabs": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.UpdateTabs": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.DeleteTabs": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.tabs.GetTeamsApp": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.tabs.GetCount-6808": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.GetCount-e058": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.getAllMessages": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.getAllRetainedMessages": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetGroup": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.group.ListServiceProvisioningErrors": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.group.ServiceProvisioningErrors.GetCount-989c": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.ListIncomingChannels": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetIncomingChannels": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.incomingChannels.GetCount-bf05": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.ListInstalledApps": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.CreateInstalledApps": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetInstalledApps": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.joinedTeams.UpdateInstalledApps": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.joinedTeams.DeleteInstalledApps": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.installedApps.teamsAppInstallation.upgrade": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.joinedTeams.installedApps.GetTeamsApp": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.joinedTeams.installedApps.GetTeamsAppDefinition": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "users.joinedTeams.installedApps.GetCount-1148": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.ListMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.CreateMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.UpdateMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.DeleteMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.members.GetCount-5648": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.members.add": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.members.remove": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.archive": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.clone": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.completeMigration": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.sendActivityNotification": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.unarchive": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.ListOperations": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.CreateOperations": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetOperations": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsAsyncOperation-id": TeamsGraphPathParamValue };
  "users.joinedTeams.UpdateOperations": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsAsyncOperation-id": TeamsGraphPathParamValue };
  "users.joinedTeams.DeleteOperations": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "teamsAsyncOperation-id": TeamsGraphPathParamValue };
  "users.joinedTeams.operations.GetCount-5268": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.ListPermissionGrants": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.CreatePermissionGrants": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetPermissionGrants": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "users.joinedTeams.UpdatePermissionGrants": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "users.joinedTeams.DeletePermissionGrants": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "users.joinedTeams.permissionGrants.GetCount-70b8": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetPhoto": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.UpdatePhoto": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetPhotoContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.UpdatePhotoContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.DeletePhotoContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetPrimaryChannel": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.UpdatePrimaryChannel": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.DeletePrimaryChannel": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.ListAllMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.CreateAllMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.GetAllMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.UpdateAllMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.DeleteAllMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.primaryChannel.allMembers.GetCount-6630": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.primaryChannel.allMembers.add": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphUsersTeam02OperationRequestMap {
  "users.user.joinedTeams.team.channels.channel.doesUserHaveAccess": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.doesUserHaveAccess">;
  "users.user.joinedTeams.team.channels.channel.provisionEmail": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.provisionEmail">;
  "users.user.joinedTeams.team.channels.channel.removeEmail": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.removeEmail">;
  "users.user.joinedTeams.team.channels.channel.startMigration": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.startMigration">;
  "users.user.joinedTeams.team.channels.channel.unarchive": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.unarchive">;
  "users.joinedTeams.channels.ListSharedWithTeams": TeamsGraphOperationInput<"users.joinedTeams.channels.ListSharedWithTeams">;
  "users.joinedTeams.channels.CreateSharedWithTeams": TeamsGraphOperationInput<"users.joinedTeams.channels.CreateSharedWithTeams">;
  "users.joinedTeams.channels.GetSharedWithTeams": TeamsGraphOperationInput<"users.joinedTeams.channels.GetSharedWithTeams">;
  "users.joinedTeams.channels.UpdateSharedWithTeams": TeamsGraphOperationInput<"users.joinedTeams.channels.UpdateSharedWithTeams">;
  "users.joinedTeams.channels.DeleteSharedWithTeams": TeamsGraphOperationInput<"users.joinedTeams.channels.DeleteSharedWithTeams">;
  "users.joinedTeams.channels.sharedWithTeams.ListAllowedMembers": TeamsGraphOperationInput<"users.joinedTeams.channels.sharedWithTeams.ListAllowedMembers">;
  "users.joinedTeams.channels.sharedWithTeams.GetAllowedMembers": TeamsGraphOperationInput<"users.joinedTeams.channels.sharedWithTeams.GetAllowedMembers">;
  "users.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-8dec": TeamsGraphOperationInput<"users.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-8dec">;
  "users.joinedTeams.channels.sharedWithTeams.GetTeam": TeamsGraphOperationInput<"users.joinedTeams.channels.sharedWithTeams.GetTeam">;
  "users.joinedTeams.channels.sharedWithTeams.GetCount-3df3": TeamsGraphOperationInput<"users.joinedTeams.channels.sharedWithTeams.GetCount-3df3">;
  "users.joinedTeams.channels.ListTabs": TeamsGraphOperationInput<"users.joinedTeams.channels.ListTabs">;
  "users.joinedTeams.channels.CreateTabs": TeamsGraphOperationInput<"users.joinedTeams.channels.CreateTabs">;
  "users.joinedTeams.channels.GetTabs": TeamsGraphOperationInput<"users.joinedTeams.channels.GetTabs">;
  "users.joinedTeams.channels.UpdateTabs": TeamsGraphOperationInput<"users.joinedTeams.channels.UpdateTabs">;
  "users.joinedTeams.channels.DeleteTabs": TeamsGraphOperationInput<"users.joinedTeams.channels.DeleteTabs">;
  "users.joinedTeams.channels.tabs.GetTeamsApp": TeamsGraphOperationInput<"users.joinedTeams.channels.tabs.GetTeamsApp">;
  "users.joinedTeams.channels.tabs.GetCount-6808": TeamsGraphOperationInput<"users.joinedTeams.channels.tabs.GetCount-6808">;
  "users.joinedTeams.channels.GetCount-e058": TeamsGraphOperationInput<"users.joinedTeams.channels.GetCount-e058">;
  "users.user.joinedTeams.team.channels.getAllMessages": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.getAllMessages">;
  "users.user.joinedTeams.team.channels.getAllRetainedMessages": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.getAllRetainedMessages">;
  "users.joinedTeams.GetGroup": TeamsGraphOperationInput<"users.joinedTeams.GetGroup">;
  "users.joinedTeams.group.ListServiceProvisioningErrors": TeamsGraphOperationInput<"users.joinedTeams.group.ListServiceProvisioningErrors">;
  "users.joinedTeams.group.ServiceProvisioningErrors.GetCount-989c": TeamsGraphOperationInput<"users.joinedTeams.group.ServiceProvisioningErrors.GetCount-989c">;
  "users.joinedTeams.ListIncomingChannels": TeamsGraphOperationInput<"users.joinedTeams.ListIncomingChannels">;
  "users.joinedTeams.GetIncomingChannels": TeamsGraphOperationInput<"users.joinedTeams.GetIncomingChannels">;
  "users.joinedTeams.incomingChannels.GetCount-bf05": TeamsGraphOperationInput<"users.joinedTeams.incomingChannels.GetCount-bf05">;
  "users.joinedTeams.ListInstalledApps": TeamsGraphOperationInput<"users.joinedTeams.ListInstalledApps">;
  "users.joinedTeams.CreateInstalledApps": TeamsGraphOperationInput<"users.joinedTeams.CreateInstalledApps">;
  "users.joinedTeams.GetInstalledApps": TeamsGraphOperationInput<"users.joinedTeams.GetInstalledApps">;
  "users.joinedTeams.UpdateInstalledApps": TeamsGraphOperationInput<"users.joinedTeams.UpdateInstalledApps">;
  "users.joinedTeams.DeleteInstalledApps": TeamsGraphOperationInput<"users.joinedTeams.DeleteInstalledApps">;
  "users.user.joinedTeams.team.installedApps.teamsAppInstallation.upgrade": TeamsGraphOperationInput<"users.user.joinedTeams.team.installedApps.teamsAppInstallation.upgrade">;
  "users.joinedTeams.installedApps.GetTeamsApp": TeamsGraphOperationInput<"users.joinedTeams.installedApps.GetTeamsApp">;
  "users.joinedTeams.installedApps.GetTeamsAppDefinition": TeamsGraphOperationInput<"users.joinedTeams.installedApps.GetTeamsAppDefinition">;
  "users.joinedTeams.installedApps.GetCount-1148": TeamsGraphOperationInput<"users.joinedTeams.installedApps.GetCount-1148">;
  "users.joinedTeams.ListMembers": TeamsGraphOperationInput<"users.joinedTeams.ListMembers">;
  "users.joinedTeams.CreateMembers": TeamsGraphOperationInput<"users.joinedTeams.CreateMembers">;
  "users.joinedTeams.GetMembers": TeamsGraphOperationInput<"users.joinedTeams.GetMembers">;
  "users.joinedTeams.UpdateMembers": TeamsGraphOperationInput<"users.joinedTeams.UpdateMembers">;
  "users.joinedTeams.DeleteMembers": TeamsGraphOperationInput<"users.joinedTeams.DeleteMembers">;
  "users.joinedTeams.members.GetCount-5648": TeamsGraphOperationInput<"users.joinedTeams.members.GetCount-5648">;
  "users.user.joinedTeams.team.members.add": TeamsGraphOperationInput<"users.user.joinedTeams.team.members.add">;
  "users.user.joinedTeams.team.members.remove": TeamsGraphOperationInput<"users.user.joinedTeams.team.members.remove">;
  "users.user.joinedTeams.team.archive": TeamsGraphOperationInput<"users.user.joinedTeams.team.archive">;
  "users.user.joinedTeams.team.clone": TeamsGraphOperationInput<"users.user.joinedTeams.team.clone">;
  "users.user.joinedTeams.team.completeMigration": TeamsGraphOperationInput<"users.user.joinedTeams.team.completeMigration">;
  "users.user.joinedTeams.team.sendActivityNotification": TeamsGraphOperationInput<"users.user.joinedTeams.team.sendActivityNotification">;
  "users.user.joinedTeams.team.unarchive": TeamsGraphOperationInput<"users.user.joinedTeams.team.unarchive">;
  "users.joinedTeams.ListOperations": TeamsGraphOperationInput<"users.joinedTeams.ListOperations">;
  "users.joinedTeams.CreateOperations": TeamsGraphOperationInput<"users.joinedTeams.CreateOperations">;
  "users.joinedTeams.GetOperations": TeamsGraphOperationInput<"users.joinedTeams.GetOperations">;
  "users.joinedTeams.UpdateOperations": TeamsGraphOperationInput<"users.joinedTeams.UpdateOperations">;
  "users.joinedTeams.DeleteOperations": TeamsGraphOperationInput<"users.joinedTeams.DeleteOperations">;
  "users.joinedTeams.operations.GetCount-5268": TeamsGraphOperationInput<"users.joinedTeams.operations.GetCount-5268">;
  "users.joinedTeams.ListPermissionGrants": TeamsGraphOperationInput<"users.joinedTeams.ListPermissionGrants">;
  "users.joinedTeams.CreatePermissionGrants": TeamsGraphOperationInput<"users.joinedTeams.CreatePermissionGrants">;
  "users.joinedTeams.GetPermissionGrants": TeamsGraphOperationInput<"users.joinedTeams.GetPermissionGrants">;
  "users.joinedTeams.UpdatePermissionGrants": TeamsGraphOperationInput<"users.joinedTeams.UpdatePermissionGrants">;
  "users.joinedTeams.DeletePermissionGrants": TeamsGraphOperationInput<"users.joinedTeams.DeletePermissionGrants">;
  "users.joinedTeams.permissionGrants.GetCount-70b8": TeamsGraphOperationInput<"users.joinedTeams.permissionGrants.GetCount-70b8">;
  "users.joinedTeams.GetPhoto": TeamsGraphOperationInput<"users.joinedTeams.GetPhoto">;
  "users.joinedTeams.UpdatePhoto": TeamsGraphOperationInput<"users.joinedTeams.UpdatePhoto">;
  "users.joinedTeams.GetPhotoContent": TeamsGraphOperationInput<"users.joinedTeams.GetPhotoContent">;
  "users.joinedTeams.UpdatePhotoContent": TeamsGraphOperationInput<"users.joinedTeams.UpdatePhotoContent">;
  "users.joinedTeams.DeletePhotoContent": TeamsGraphOperationInput<"users.joinedTeams.DeletePhotoContent">;
  "users.joinedTeams.GetPrimaryChannel": TeamsGraphOperationInput<"users.joinedTeams.GetPrimaryChannel">;
  "users.joinedTeams.UpdatePrimaryChannel": TeamsGraphOperationInput<"users.joinedTeams.UpdatePrimaryChannel">;
  "users.joinedTeams.DeletePrimaryChannel": TeamsGraphOperationInput<"users.joinedTeams.DeletePrimaryChannel">;
  "users.joinedTeams.primaryChannel.ListAllMembers": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.ListAllMembers">;
  "users.joinedTeams.primaryChannel.CreateAllMembers": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.CreateAllMembers">;
  "users.joinedTeams.primaryChannel.GetAllMembers": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.GetAllMembers">;
  "users.joinedTeams.primaryChannel.UpdateAllMembers": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.UpdateAllMembers">;
  "users.joinedTeams.primaryChannel.DeleteAllMembers": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.DeleteAllMembers">;
  "users.joinedTeams.primaryChannel.allMembers.GetCount-6630": TeamsGraphOperationInput<"users.joinedTeams.primaryChannel.allMembers.GetCount-6630">;
  "users.user.joinedTeams.team.primaryChannel.allMembers.add": TeamsGraphOperationInput<"users.user.joinedTeams.team.primaryChannel.allMembers.add">;
}

export interface TeamsGraphUsersTeam02GeneratedClient {
  UsersUserJoinedTeamsTeamChannelsChannelDoesUserHaveAccess(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.doesUserHaveAccess">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.doesUserHaveAccess"]>;
  UsersUserJoinedTeamsTeamChannelsChannelProvisionEmail(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.provisionEmail">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.provisionEmail"]>;
  UsersUserJoinedTeamsTeamChannelsChannelRemoveEmail(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.removeEmail">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.removeEmail"]>;
  UsersUserJoinedTeamsTeamChannelsChannelStartMigration(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.startMigration">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.startMigration"]>;
  UsersUserJoinedTeamsTeamChannelsChannelUnarchive(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.unarchive">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.unarchive"]>;
  UsersJoinedTeamsChannelsListSharedWithTeams(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.ListSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.ListSharedWithTeams"]>;
  UsersJoinedTeamsChannelsCreateSharedWithTeams(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.CreateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.CreateSharedWithTeams"]>;
  UsersJoinedTeamsChannelsGetSharedWithTeams(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.GetSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.GetSharedWithTeams"]>;
  UsersJoinedTeamsChannelsUpdateSharedWithTeams(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.UpdateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.UpdateSharedWithTeams"]>;
  UsersJoinedTeamsChannelsDeleteSharedWithTeams(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.DeleteSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.DeleteSharedWithTeams"]>;
  UsersJoinedTeamsChannelsSharedWithTeamsListAllowedMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.sharedWithTeams.ListAllowedMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.sharedWithTeams.ListAllowedMembers"]>;
  UsersJoinedTeamsChannelsSharedWithTeamsGetAllowedMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.sharedWithTeams.GetAllowedMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.sharedWithTeams.GetAllowedMembers"]>;
  UsersJoinedTeamsChannelsSharedWithTeamsAllowedMembersGetCount8dec(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-8dec">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-8dec"]>;
  UsersJoinedTeamsChannelsSharedWithTeamsGetTeam(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.sharedWithTeams.GetTeam">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.sharedWithTeams.GetTeam"]>;
  UsersJoinedTeamsChannelsSharedWithTeamsGetCount3df3(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.sharedWithTeams.GetCount-3df3">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.sharedWithTeams.GetCount-3df3"]>;
  UsersJoinedTeamsChannelsListTabs(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.ListTabs">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.ListTabs"]>;
  UsersJoinedTeamsChannelsCreateTabs(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.CreateTabs">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.CreateTabs"]>;
  UsersJoinedTeamsChannelsGetTabs(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.GetTabs">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.GetTabs"]>;
  UsersJoinedTeamsChannelsUpdateTabs(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.UpdateTabs">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.UpdateTabs"]>;
  UsersJoinedTeamsChannelsDeleteTabs(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.DeleteTabs">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.DeleteTabs"]>;
  UsersJoinedTeamsChannelsTabsGetTeamsApp(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.tabs.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.tabs.GetTeamsApp"]>;
  UsersJoinedTeamsChannelsTabsGetCount6808(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.tabs.GetCount-6808">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.tabs.GetCount-6808"]>;
  UsersJoinedTeamsChannelsGetCountE058(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.GetCount-e058">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.GetCount-e058"]>;
  UsersUserJoinedTeamsTeamChannelsGetAllMessages(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.getAllMessages">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.getAllMessages"]>;
  UsersUserJoinedTeamsTeamChannelsGetAllRetainedMessages(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.getAllRetainedMessages">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.getAllRetainedMessages"]>;
  UsersJoinedTeamsGetGroup(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetGroup">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetGroup"]>;
  UsersJoinedTeamsGroupListServiceProvisioningErrors(...args: TeamsGraphOperationArgs<"users.joinedTeams.group.ListServiceProvisioningErrors">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.group.ListServiceProvisioningErrors"]>;
  UsersJoinedTeamsGroupServiceProvisioningErrorsGetCount989c(...args: TeamsGraphOperationArgs<"users.joinedTeams.group.ServiceProvisioningErrors.GetCount-989c">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.group.ServiceProvisioningErrors.GetCount-989c"]>;
  UsersJoinedTeamsListIncomingChannels(...args: TeamsGraphOperationArgs<"users.joinedTeams.ListIncomingChannels">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.ListIncomingChannels"]>;
  UsersJoinedTeamsGetIncomingChannels(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetIncomingChannels">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetIncomingChannels"]>;
  UsersJoinedTeamsIncomingChannelsGetCountBf05(...args: TeamsGraphOperationArgs<"users.joinedTeams.incomingChannels.GetCount-bf05">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.incomingChannels.GetCount-bf05"]>;
  UsersJoinedTeamsListInstalledApps(...args: TeamsGraphOperationArgs<"users.joinedTeams.ListInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.ListInstalledApps"]>;
  UsersJoinedTeamsCreateInstalledApps(...args: TeamsGraphOperationArgs<"users.joinedTeams.CreateInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.CreateInstalledApps"]>;
  UsersJoinedTeamsGetInstalledApps(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetInstalledApps"]>;
  UsersJoinedTeamsUpdateInstalledApps(...args: TeamsGraphOperationArgs<"users.joinedTeams.UpdateInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.UpdateInstalledApps"]>;
  UsersJoinedTeamsDeleteInstalledApps(...args: TeamsGraphOperationArgs<"users.joinedTeams.DeleteInstalledApps">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.DeleteInstalledApps"]>;
  UsersUserJoinedTeamsTeamInstalledAppsTeamsAppInstallationUpgrade(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.installedApps.teamsAppInstallation.upgrade">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.installedApps.teamsAppInstallation.upgrade"]>;
  UsersJoinedTeamsInstalledAppsGetTeamsApp(...args: TeamsGraphOperationArgs<"users.joinedTeams.installedApps.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.installedApps.GetTeamsApp"]>;
  UsersJoinedTeamsInstalledAppsGetTeamsAppDefinition(...args: TeamsGraphOperationArgs<"users.joinedTeams.installedApps.GetTeamsAppDefinition">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.installedApps.GetTeamsAppDefinition"]>;
  UsersJoinedTeamsInstalledAppsGetCount1148(...args: TeamsGraphOperationArgs<"users.joinedTeams.installedApps.GetCount-1148">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.installedApps.GetCount-1148"]>;
  UsersJoinedTeamsListMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.ListMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.ListMembers"]>;
  UsersJoinedTeamsCreateMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.CreateMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.CreateMembers"]>;
  UsersJoinedTeamsGetMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetMembers"]>;
  UsersJoinedTeamsUpdateMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.UpdateMembers"]>;
  UsersJoinedTeamsDeleteMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.DeleteMembers"]>;
  UsersJoinedTeamsMembersGetCount5648(...args: TeamsGraphOperationArgs<"users.joinedTeams.members.GetCount-5648">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.members.GetCount-5648"]>;
  UsersUserJoinedTeamsTeamMembersAdd(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.members.add">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.members.add"]>;
  UsersUserJoinedTeamsTeamMembersRemove(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.members.remove">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.members.remove"]>;
  UsersUserJoinedTeamsTeamArchive(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.archive">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.archive"]>;
  UsersUserJoinedTeamsTeamClone(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.clone">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.clone"]>;
  UsersUserJoinedTeamsTeamCompleteMigration(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.completeMigration">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.completeMigration"]>;
  UsersUserJoinedTeamsTeamSendActivityNotification(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.sendActivityNotification">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.sendActivityNotification"]>;
  UsersUserJoinedTeamsTeamUnarchive(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.unarchive">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.unarchive"]>;
  UsersJoinedTeamsListOperations(...args: TeamsGraphOperationArgs<"users.joinedTeams.ListOperations">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.ListOperations"]>;
  UsersJoinedTeamsCreateOperations(...args: TeamsGraphOperationArgs<"users.joinedTeams.CreateOperations">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.CreateOperations"]>;
  UsersJoinedTeamsGetOperations(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetOperations">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetOperations"]>;
  UsersJoinedTeamsUpdateOperations(...args: TeamsGraphOperationArgs<"users.joinedTeams.UpdateOperations">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.UpdateOperations"]>;
  UsersJoinedTeamsDeleteOperations(...args: TeamsGraphOperationArgs<"users.joinedTeams.DeleteOperations">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.DeleteOperations"]>;
  UsersJoinedTeamsOperationsGetCount5268(...args: TeamsGraphOperationArgs<"users.joinedTeams.operations.GetCount-5268">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.operations.GetCount-5268"]>;
  UsersJoinedTeamsListPermissionGrants(...args: TeamsGraphOperationArgs<"users.joinedTeams.ListPermissionGrants">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.ListPermissionGrants"]>;
  UsersJoinedTeamsCreatePermissionGrants(...args: TeamsGraphOperationArgs<"users.joinedTeams.CreatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.CreatePermissionGrants"]>;
  UsersJoinedTeamsGetPermissionGrants(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetPermissionGrants">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetPermissionGrants"]>;
  UsersJoinedTeamsUpdatePermissionGrants(...args: TeamsGraphOperationArgs<"users.joinedTeams.UpdatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.UpdatePermissionGrants"]>;
  UsersJoinedTeamsDeletePermissionGrants(...args: TeamsGraphOperationArgs<"users.joinedTeams.DeletePermissionGrants">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.DeletePermissionGrants"]>;
  UsersJoinedTeamsPermissionGrantsGetCount70b8(...args: TeamsGraphOperationArgs<"users.joinedTeams.permissionGrants.GetCount-70b8">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.permissionGrants.GetCount-70b8"]>;
  UsersJoinedTeamsGetPhoto(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetPhoto">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetPhoto"]>;
  UsersJoinedTeamsUpdatePhoto(...args: TeamsGraphOperationArgs<"users.joinedTeams.UpdatePhoto">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.UpdatePhoto"]>;
  UsersJoinedTeamsGetPhotoContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetPhotoContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetPhotoContent"]>;
  UsersJoinedTeamsUpdatePhotoContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.UpdatePhotoContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.UpdatePhotoContent"]>;
  UsersJoinedTeamsDeletePhotoContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.DeletePhotoContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.DeletePhotoContent"]>;
  UsersJoinedTeamsGetPrimaryChannel(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetPrimaryChannel">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetPrimaryChannel"]>;
  UsersJoinedTeamsUpdatePrimaryChannel(...args: TeamsGraphOperationArgs<"users.joinedTeams.UpdatePrimaryChannel">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.UpdatePrimaryChannel"]>;
  UsersJoinedTeamsDeletePrimaryChannel(...args: TeamsGraphOperationArgs<"users.joinedTeams.DeletePrimaryChannel">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.DeletePrimaryChannel"]>;
  UsersJoinedTeamsPrimaryChannelListAllMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.ListAllMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.ListAllMembers"]>;
  UsersJoinedTeamsPrimaryChannelCreateAllMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.CreateAllMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.CreateAllMembers"]>;
  UsersJoinedTeamsPrimaryChannelGetAllMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetAllMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.GetAllMembers"]>;
  UsersJoinedTeamsPrimaryChannelUpdateAllMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.UpdateAllMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.UpdateAllMembers"]>;
  UsersJoinedTeamsPrimaryChannelDeleteAllMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.DeleteAllMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.DeleteAllMembers"]>;
  UsersJoinedTeamsPrimaryChannelAllMembersGetCount6630(...args: TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.allMembers.GetCount-6630">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.primaryChannel.allMembers.GetCount-6630"]>;
  UsersUserJoinedTeamsTeamPrimaryChannelAllMembersAdd(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.allMembers.add">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.primaryChannel.allMembers.add"]>;
}

export const TeamsGraphUsersTeam02GeneratedFunctionNames = [
  "UsersUserJoinedTeamsTeamChannelsChannelDoesUserHaveAccess",
  "UsersUserJoinedTeamsTeamChannelsChannelProvisionEmail",
  "UsersUserJoinedTeamsTeamChannelsChannelRemoveEmail",
  "UsersUserJoinedTeamsTeamChannelsChannelStartMigration",
  "UsersUserJoinedTeamsTeamChannelsChannelUnarchive",
  "UsersJoinedTeamsChannelsListSharedWithTeams",
  "UsersJoinedTeamsChannelsCreateSharedWithTeams",
  "UsersJoinedTeamsChannelsGetSharedWithTeams",
  "UsersJoinedTeamsChannelsUpdateSharedWithTeams",
  "UsersJoinedTeamsChannelsDeleteSharedWithTeams",
  "UsersJoinedTeamsChannelsSharedWithTeamsListAllowedMembers",
  "UsersJoinedTeamsChannelsSharedWithTeamsGetAllowedMembers",
  "UsersJoinedTeamsChannelsSharedWithTeamsAllowedMembersGetCount8dec",
  "UsersJoinedTeamsChannelsSharedWithTeamsGetTeam",
  "UsersJoinedTeamsChannelsSharedWithTeamsGetCount3df3",
  "UsersJoinedTeamsChannelsListTabs",
  "UsersJoinedTeamsChannelsCreateTabs",
  "UsersJoinedTeamsChannelsGetTabs",
  "UsersJoinedTeamsChannelsUpdateTabs",
  "UsersJoinedTeamsChannelsDeleteTabs",
  "UsersJoinedTeamsChannelsTabsGetTeamsApp",
  "UsersJoinedTeamsChannelsTabsGetCount6808",
  "UsersJoinedTeamsChannelsGetCountE058",
  "UsersUserJoinedTeamsTeamChannelsGetAllMessages",
  "UsersUserJoinedTeamsTeamChannelsGetAllRetainedMessages",
  "UsersJoinedTeamsGetGroup",
  "UsersJoinedTeamsGroupListServiceProvisioningErrors",
  "UsersJoinedTeamsGroupServiceProvisioningErrorsGetCount989c",
  "UsersJoinedTeamsListIncomingChannels",
  "UsersJoinedTeamsGetIncomingChannels",
  "UsersJoinedTeamsIncomingChannelsGetCountBf05",
  "UsersJoinedTeamsListInstalledApps",
  "UsersJoinedTeamsCreateInstalledApps",
  "UsersJoinedTeamsGetInstalledApps",
  "UsersJoinedTeamsUpdateInstalledApps",
  "UsersJoinedTeamsDeleteInstalledApps",
  "UsersUserJoinedTeamsTeamInstalledAppsTeamsAppInstallationUpgrade",
  "UsersJoinedTeamsInstalledAppsGetTeamsApp",
  "UsersJoinedTeamsInstalledAppsGetTeamsAppDefinition",
  "UsersJoinedTeamsInstalledAppsGetCount1148",
  "UsersJoinedTeamsListMembers",
  "UsersJoinedTeamsCreateMembers",
  "UsersJoinedTeamsGetMembers",
  "UsersJoinedTeamsUpdateMembers",
  "UsersJoinedTeamsDeleteMembers",
  "UsersJoinedTeamsMembersGetCount5648",
  "UsersUserJoinedTeamsTeamMembersAdd",
  "UsersUserJoinedTeamsTeamMembersRemove",
  "UsersUserJoinedTeamsTeamArchive",
  "UsersUserJoinedTeamsTeamClone",
  "UsersUserJoinedTeamsTeamCompleteMigration",
  "UsersUserJoinedTeamsTeamSendActivityNotification",
  "UsersUserJoinedTeamsTeamUnarchive",
  "UsersJoinedTeamsListOperations",
  "UsersJoinedTeamsCreateOperations",
  "UsersJoinedTeamsGetOperations",
  "UsersJoinedTeamsUpdateOperations",
  "UsersJoinedTeamsDeleteOperations",
  "UsersJoinedTeamsOperationsGetCount5268",
  "UsersJoinedTeamsListPermissionGrants",
  "UsersJoinedTeamsCreatePermissionGrants",
  "UsersJoinedTeamsGetPermissionGrants",
  "UsersJoinedTeamsUpdatePermissionGrants",
  "UsersJoinedTeamsDeletePermissionGrants",
  "UsersJoinedTeamsPermissionGrantsGetCount70b8",
  "UsersJoinedTeamsGetPhoto",
  "UsersJoinedTeamsUpdatePhoto",
  "UsersJoinedTeamsGetPhotoContent",
  "UsersJoinedTeamsUpdatePhotoContent",
  "UsersJoinedTeamsDeletePhotoContent",
  "UsersJoinedTeamsGetPrimaryChannel",
  "UsersJoinedTeamsUpdatePrimaryChannel",
  "UsersJoinedTeamsDeletePrimaryChannel",
  "UsersJoinedTeamsPrimaryChannelListAllMembers",
  "UsersJoinedTeamsPrimaryChannelCreateAllMembers",
  "UsersJoinedTeamsPrimaryChannelGetAllMembers",
  "UsersJoinedTeamsPrimaryChannelUpdateAllMembers",
  "UsersJoinedTeamsPrimaryChannelDeleteAllMembers",
  "UsersJoinedTeamsPrimaryChannelAllMembersGetCount6630",
  "UsersUserJoinedTeamsTeamPrimaryChannelAllMembersAdd"
] as const satisfies readonly (keyof TeamsGraphUsersTeam02GeneratedClient)[];

export function createTeamsGraphUsersTeam02GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphUsersTeam02GeneratedClient {
  return {
    UsersUserJoinedTeamsTeamChannelsChannelDoesUserHaveAccess: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.doesUserHaveAccess", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.doesUserHaveAccess">)),
    UsersUserJoinedTeamsTeamChannelsChannelProvisionEmail: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.provisionEmail", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.provisionEmail">)),
    UsersUserJoinedTeamsTeamChannelsChannelRemoveEmail: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.removeEmail", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.removeEmail">)),
    UsersUserJoinedTeamsTeamChannelsChannelStartMigration: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.startMigration", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.startMigration">)),
    UsersUserJoinedTeamsTeamChannelsChannelUnarchive: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.unarchive", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.unarchive">)),
    UsersJoinedTeamsChannelsListSharedWithTeams: (...args) => callOperation("users.joinedTeams.channels.ListSharedWithTeams", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.ListSharedWithTeams">)),
    UsersJoinedTeamsChannelsCreateSharedWithTeams: (...args) => callOperation("users.joinedTeams.channels.CreateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.CreateSharedWithTeams">)),
    UsersJoinedTeamsChannelsGetSharedWithTeams: (...args) => callOperation("users.joinedTeams.channels.GetSharedWithTeams", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.GetSharedWithTeams">)),
    UsersJoinedTeamsChannelsUpdateSharedWithTeams: (...args) => callOperation("users.joinedTeams.channels.UpdateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.UpdateSharedWithTeams">)),
    UsersJoinedTeamsChannelsDeleteSharedWithTeams: (...args) => callOperation("users.joinedTeams.channels.DeleteSharedWithTeams", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.DeleteSharedWithTeams">)),
    UsersJoinedTeamsChannelsSharedWithTeamsListAllowedMembers: (...args) => callOperation("users.joinedTeams.channels.sharedWithTeams.ListAllowedMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.sharedWithTeams.ListAllowedMembers">)),
    UsersJoinedTeamsChannelsSharedWithTeamsGetAllowedMembers: (...args) => callOperation("users.joinedTeams.channels.sharedWithTeams.GetAllowedMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.sharedWithTeams.GetAllowedMembers">)),
    UsersJoinedTeamsChannelsSharedWithTeamsAllowedMembersGetCount8dec: (...args) => callOperation("users.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-8dec", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-8dec">)),
    UsersJoinedTeamsChannelsSharedWithTeamsGetTeam: (...args) => callOperation("users.joinedTeams.channels.sharedWithTeams.GetTeam", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.sharedWithTeams.GetTeam">)),
    UsersJoinedTeamsChannelsSharedWithTeamsGetCount3df3: (...args) => callOperation("users.joinedTeams.channels.sharedWithTeams.GetCount-3df3", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.sharedWithTeams.GetCount-3df3">)),
    UsersJoinedTeamsChannelsListTabs: (...args) => callOperation("users.joinedTeams.channels.ListTabs", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.ListTabs">)),
    UsersJoinedTeamsChannelsCreateTabs: (...args) => callOperation("users.joinedTeams.channels.CreateTabs", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.CreateTabs">)),
    UsersJoinedTeamsChannelsGetTabs: (...args) => callOperation("users.joinedTeams.channels.GetTabs", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.GetTabs">)),
    UsersJoinedTeamsChannelsUpdateTabs: (...args) => callOperation("users.joinedTeams.channels.UpdateTabs", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.UpdateTabs">)),
    UsersJoinedTeamsChannelsDeleteTabs: (...args) => callOperation("users.joinedTeams.channels.DeleteTabs", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.DeleteTabs">)),
    UsersJoinedTeamsChannelsTabsGetTeamsApp: (...args) => callOperation("users.joinedTeams.channels.tabs.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.tabs.GetTeamsApp">)),
    UsersJoinedTeamsChannelsTabsGetCount6808: (...args) => callOperation("users.joinedTeams.channels.tabs.GetCount-6808", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.tabs.GetCount-6808">)),
    UsersJoinedTeamsChannelsGetCountE058: (...args) => callOperation("users.joinedTeams.channels.GetCount-e058", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.GetCount-e058">)),
    UsersUserJoinedTeamsTeamChannelsGetAllMessages: (...args) => callOperation("users.user.joinedTeams.team.channels.getAllMessages", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.getAllMessages">)),
    UsersUserJoinedTeamsTeamChannelsGetAllRetainedMessages: (...args) => callOperation("users.user.joinedTeams.team.channels.getAllRetainedMessages", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.getAllRetainedMessages">)),
    UsersJoinedTeamsGetGroup: (...args) => callOperation("users.joinedTeams.GetGroup", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetGroup">)),
    UsersJoinedTeamsGroupListServiceProvisioningErrors: (...args) => callOperation("users.joinedTeams.group.ListServiceProvisioningErrors", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.group.ListServiceProvisioningErrors">)),
    UsersJoinedTeamsGroupServiceProvisioningErrorsGetCount989c: (...args) => callOperation("users.joinedTeams.group.ServiceProvisioningErrors.GetCount-989c", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.group.ServiceProvisioningErrors.GetCount-989c">)),
    UsersJoinedTeamsListIncomingChannels: (...args) => callOperation("users.joinedTeams.ListIncomingChannels", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.ListIncomingChannels">)),
    UsersJoinedTeamsGetIncomingChannels: (...args) => callOperation("users.joinedTeams.GetIncomingChannels", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetIncomingChannels">)),
    UsersJoinedTeamsIncomingChannelsGetCountBf05: (...args) => callOperation("users.joinedTeams.incomingChannels.GetCount-bf05", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.incomingChannels.GetCount-bf05">)),
    UsersJoinedTeamsListInstalledApps: (...args) => callOperation("users.joinedTeams.ListInstalledApps", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.ListInstalledApps">)),
    UsersJoinedTeamsCreateInstalledApps: (...args) => callOperation("users.joinedTeams.CreateInstalledApps", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.CreateInstalledApps">)),
    UsersJoinedTeamsGetInstalledApps: (...args) => callOperation("users.joinedTeams.GetInstalledApps", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetInstalledApps">)),
    UsersJoinedTeamsUpdateInstalledApps: (...args) => callOperation("users.joinedTeams.UpdateInstalledApps", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.UpdateInstalledApps">)),
    UsersJoinedTeamsDeleteInstalledApps: (...args) => callOperation("users.joinedTeams.DeleteInstalledApps", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.DeleteInstalledApps">)),
    UsersUserJoinedTeamsTeamInstalledAppsTeamsAppInstallationUpgrade: (...args) => callOperation("users.user.joinedTeams.team.installedApps.teamsAppInstallation.upgrade", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.installedApps.teamsAppInstallation.upgrade">)),
    UsersJoinedTeamsInstalledAppsGetTeamsApp: (...args) => callOperation("users.joinedTeams.installedApps.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.installedApps.GetTeamsApp">)),
    UsersJoinedTeamsInstalledAppsGetTeamsAppDefinition: (...args) => callOperation("users.joinedTeams.installedApps.GetTeamsAppDefinition", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.installedApps.GetTeamsAppDefinition">)),
    UsersJoinedTeamsInstalledAppsGetCount1148: (...args) => callOperation("users.joinedTeams.installedApps.GetCount-1148", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.installedApps.GetCount-1148">)),
    UsersJoinedTeamsListMembers: (...args) => callOperation("users.joinedTeams.ListMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.ListMembers">)),
    UsersJoinedTeamsCreateMembers: (...args) => callOperation("users.joinedTeams.CreateMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.CreateMembers">)),
    UsersJoinedTeamsGetMembers: (...args) => callOperation("users.joinedTeams.GetMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetMembers">)),
    UsersJoinedTeamsUpdateMembers: (...args) => callOperation("users.joinedTeams.UpdateMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.UpdateMembers">)),
    UsersJoinedTeamsDeleteMembers: (...args) => callOperation("users.joinedTeams.DeleteMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.DeleteMembers">)),
    UsersJoinedTeamsMembersGetCount5648: (...args) => callOperation("users.joinedTeams.members.GetCount-5648", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.members.GetCount-5648">)),
    UsersUserJoinedTeamsTeamMembersAdd: (...args) => callOperation("users.user.joinedTeams.team.members.add", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.members.add">)),
    UsersUserJoinedTeamsTeamMembersRemove: (...args) => callOperation("users.user.joinedTeams.team.members.remove", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.members.remove">)),
    UsersUserJoinedTeamsTeamArchive: (...args) => callOperation("users.user.joinedTeams.team.archive", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.archive">)),
    UsersUserJoinedTeamsTeamClone: (...args) => callOperation("users.user.joinedTeams.team.clone", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.clone">)),
    UsersUserJoinedTeamsTeamCompleteMigration: (...args) => callOperation("users.user.joinedTeams.team.completeMigration", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.completeMigration">)),
    UsersUserJoinedTeamsTeamSendActivityNotification: (...args) => callOperation("users.user.joinedTeams.team.sendActivityNotification", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.sendActivityNotification">)),
    UsersUserJoinedTeamsTeamUnarchive: (...args) => callOperation("users.user.joinedTeams.team.unarchive", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.unarchive">)),
    UsersJoinedTeamsListOperations: (...args) => callOperation("users.joinedTeams.ListOperations", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.ListOperations">)),
    UsersJoinedTeamsCreateOperations: (...args) => callOperation("users.joinedTeams.CreateOperations", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.CreateOperations">)),
    UsersJoinedTeamsGetOperations: (...args) => callOperation("users.joinedTeams.GetOperations", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetOperations">)),
    UsersJoinedTeamsUpdateOperations: (...args) => callOperation("users.joinedTeams.UpdateOperations", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.UpdateOperations">)),
    UsersJoinedTeamsDeleteOperations: (...args) => callOperation("users.joinedTeams.DeleteOperations", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.DeleteOperations">)),
    UsersJoinedTeamsOperationsGetCount5268: (...args) => callOperation("users.joinedTeams.operations.GetCount-5268", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.operations.GetCount-5268">)),
    UsersJoinedTeamsListPermissionGrants: (...args) => callOperation("users.joinedTeams.ListPermissionGrants", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.ListPermissionGrants">)),
    UsersJoinedTeamsCreatePermissionGrants: (...args) => callOperation("users.joinedTeams.CreatePermissionGrants", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.CreatePermissionGrants">)),
    UsersJoinedTeamsGetPermissionGrants: (...args) => callOperation("users.joinedTeams.GetPermissionGrants", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetPermissionGrants">)),
    UsersJoinedTeamsUpdatePermissionGrants: (...args) => callOperation("users.joinedTeams.UpdatePermissionGrants", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.UpdatePermissionGrants">)),
    UsersJoinedTeamsDeletePermissionGrants: (...args) => callOperation("users.joinedTeams.DeletePermissionGrants", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.DeletePermissionGrants">)),
    UsersJoinedTeamsPermissionGrantsGetCount70b8: (...args) => callOperation("users.joinedTeams.permissionGrants.GetCount-70b8", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.permissionGrants.GetCount-70b8">)),
    UsersJoinedTeamsGetPhoto: (...args) => callOperation("users.joinedTeams.GetPhoto", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetPhoto">)),
    UsersJoinedTeamsUpdatePhoto: (...args) => callOperation("users.joinedTeams.UpdatePhoto", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.UpdatePhoto">)),
    UsersJoinedTeamsGetPhotoContent: (...args) => callOperation("users.joinedTeams.GetPhotoContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetPhotoContent">)),
    UsersJoinedTeamsUpdatePhotoContent: (...args) => callOperation("users.joinedTeams.UpdatePhotoContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.UpdatePhotoContent">)),
    UsersJoinedTeamsDeletePhotoContent: (...args) => callOperation("users.joinedTeams.DeletePhotoContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.DeletePhotoContent">)),
    UsersJoinedTeamsGetPrimaryChannel: (...args) => callOperation("users.joinedTeams.GetPrimaryChannel", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetPrimaryChannel">)),
    UsersJoinedTeamsUpdatePrimaryChannel: (...args) => callOperation("users.joinedTeams.UpdatePrimaryChannel", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.UpdatePrimaryChannel">)),
    UsersJoinedTeamsDeletePrimaryChannel: (...args) => callOperation("users.joinedTeams.DeletePrimaryChannel", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.DeletePrimaryChannel">)),
    UsersJoinedTeamsPrimaryChannelListAllMembers: (...args) => callOperation("users.joinedTeams.primaryChannel.ListAllMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.ListAllMembers">)),
    UsersJoinedTeamsPrimaryChannelCreateAllMembers: (...args) => callOperation("users.joinedTeams.primaryChannel.CreateAllMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.CreateAllMembers">)),
    UsersJoinedTeamsPrimaryChannelGetAllMembers: (...args) => callOperation("users.joinedTeams.primaryChannel.GetAllMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.GetAllMembers">)),
    UsersJoinedTeamsPrimaryChannelUpdateAllMembers: (...args) => callOperation("users.joinedTeams.primaryChannel.UpdateAllMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.UpdateAllMembers">)),
    UsersJoinedTeamsPrimaryChannelDeleteAllMembers: (...args) => callOperation("users.joinedTeams.primaryChannel.DeleteAllMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.DeleteAllMembers">)),
    UsersJoinedTeamsPrimaryChannelAllMembersGetCount6630: (...args) => callOperation("users.joinedTeams.primaryChannel.allMembers.GetCount-6630", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.primaryChannel.allMembers.GetCount-6630">)),
    UsersUserJoinedTeamsTeamPrimaryChannelAllMembersAdd: (...args) => callOperation("users.user.joinedTeams.team.primaryChannel.allMembers.add", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.primaryChannel.allMembers.add">)),
  };
}
