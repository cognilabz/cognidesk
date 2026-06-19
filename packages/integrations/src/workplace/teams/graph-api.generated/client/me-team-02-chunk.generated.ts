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
export const TeamsGraphMeTeam02OperationKeys = [
  "me.joinedTeams.team.channels.channel.doesUserHaveAccess",
  "me.joinedTeams.team.channels.channel.provisionEmail",
  "me.joinedTeams.team.channels.channel.removeEmail",
  "me.joinedTeams.team.channels.channel.startMigration",
  "me.joinedTeams.team.channels.channel.unarchive",
  "me.joinedTeams.channels.ListSharedWithTeams",
  "me.joinedTeams.channels.CreateSharedWithTeams",
  "me.joinedTeams.channels.GetSharedWithTeams",
  "me.joinedTeams.channels.UpdateSharedWithTeams",
  "me.joinedTeams.channels.DeleteSharedWithTeams",
  "me.joinedTeams.channels.sharedWithTeams.ListAllowedMembers",
  "me.joinedTeams.channels.sharedWithTeams.GetAllowedMembers",
  "me.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-2fcd",
  "me.joinedTeams.channels.sharedWithTeams.GetTeam",
  "me.joinedTeams.channels.sharedWithTeams.GetCount-2a75",
  "me.joinedTeams.channels.ListTabs",
  "me.joinedTeams.channels.CreateTabs",
  "me.joinedTeams.channels.GetTabs",
  "me.joinedTeams.channels.UpdateTabs",
  "me.joinedTeams.channels.DeleteTabs",
  "me.joinedTeams.channels.tabs.GetTeamsApp",
  "me.joinedTeams.channels.tabs.GetCount-4693",
  "me.joinedTeams.channels.GetCount-719a",
  "me.joinedTeams.team.channels.getAllMessages",
  "me.joinedTeams.team.channels.getAllRetainedMessages",
  "me.joinedTeams.GetGroup",
  "me.joinedTeams.group.ListServiceProvisioningErrors",
  "me.joinedTeams.group.ServiceProvisioningErrors.GetCount-dad9",
  "me.joinedTeams.ListIncomingChannels",
  "me.joinedTeams.GetIncomingChannels",
  "me.joinedTeams.incomingChannels.GetCount-677e",
  "me.joinedTeams.ListInstalledApps",
  "me.joinedTeams.CreateInstalledApps",
  "me.joinedTeams.GetInstalledApps",
  "me.joinedTeams.UpdateInstalledApps",
  "me.joinedTeams.DeleteInstalledApps",
  "me.joinedTeams.team.installedApps.teamsAppInstallation.upgrade",
  "me.joinedTeams.installedApps.GetTeamsApp",
  "me.joinedTeams.installedApps.GetTeamsAppDefinition",
  "me.joinedTeams.installedApps.GetCount-37f0",
  "me.joinedTeams.ListMembers",
  "me.joinedTeams.CreateMembers",
  "me.joinedTeams.GetMembers",
  "me.joinedTeams.UpdateMembers",
  "me.joinedTeams.DeleteMembers",
  "me.joinedTeams.members.GetCount-85d7",
  "me.joinedTeams.team.members.add",
  "me.joinedTeams.team.members.remove",
  "me.joinedTeams.team.archive",
  "me.joinedTeams.team.clone",
  "me.joinedTeams.team.completeMigration",
  "me.joinedTeams.team.sendActivityNotification",
  "me.joinedTeams.team.unarchive",
  "me.joinedTeams.ListOperations",
  "me.joinedTeams.CreateOperations",
  "me.joinedTeams.GetOperations",
  "me.joinedTeams.UpdateOperations",
  "me.joinedTeams.DeleteOperations",
  "me.joinedTeams.operations.GetCount-e702",
  "me.joinedTeams.ListPermissionGrants",
  "me.joinedTeams.CreatePermissionGrants",
  "me.joinedTeams.GetPermissionGrants",
  "me.joinedTeams.UpdatePermissionGrants",
  "me.joinedTeams.DeletePermissionGrants",
  "me.joinedTeams.permissionGrants.GetCount-a196",
  "me.joinedTeams.GetPhoto",
  "me.joinedTeams.UpdatePhoto",
  "me.joinedTeams.GetPhotoContent",
  "me.joinedTeams.UpdatePhotoContent",
  "me.joinedTeams.DeletePhotoContent",
  "me.joinedTeams.GetPrimaryChannel",
  "me.joinedTeams.UpdatePrimaryChannel",
  "me.joinedTeams.DeletePrimaryChannel",
  "me.joinedTeams.primaryChannel.ListAllMembers",
  "me.joinedTeams.primaryChannel.CreateAllMembers",
  "me.joinedTeams.primaryChannel.GetAllMembers",
  "me.joinedTeams.primaryChannel.UpdateAllMembers",
  "me.joinedTeams.primaryChannel.DeleteAllMembers",
  "me.joinedTeams.primaryChannel.allMembers.GetCount-0b8e",
  "me.joinedTeams.team.primaryChannel.allMembers.add"
] as const;
export type TeamsGraphMeTeam02OperationKey = typeof TeamsGraphMeTeam02OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphMeTeam02OperationPathParamMap {
  "me.joinedTeams.team.channels.channel.doesUserHaveAccess": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.provisionEmail": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.removeEmail": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.startMigration": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.unarchive": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.ListSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.CreateSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.GetSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.UpdateSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.DeleteSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.sharedWithTeams.ListAllowedMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.sharedWithTeams.GetAllowedMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-2fcd": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.sharedWithTeams.GetTeam": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.sharedWithTeams.GetCount-2a75": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.ListTabs": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.CreateTabs": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.GetTabs": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.UpdateTabs": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.DeleteTabs": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.tabs.GetTeamsApp": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.tabs.GetCount-4693": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.GetCount-719a": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.getAllMessages": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.getAllRetainedMessages": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetGroup": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.group.ListServiceProvisioningErrors": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.group.ServiceProvisioningErrors.GetCount-dad9": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.ListIncomingChannels": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetIncomingChannels": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.incomingChannels.GetCount-677e": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.ListInstalledApps": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.CreateInstalledApps": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetInstalledApps": { "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.joinedTeams.UpdateInstalledApps": { "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.joinedTeams.DeleteInstalledApps": { "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.installedApps.teamsAppInstallation.upgrade": { "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.joinedTeams.installedApps.GetTeamsApp": { "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.joinedTeams.installedApps.GetTeamsAppDefinition": { "team-id": TeamsGraphPathParamValue; "teamsAppInstallation-id": TeamsGraphPathParamValue };
  "me.joinedTeams.installedApps.GetCount-37f0": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.ListMembers": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.CreateMembers": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.UpdateMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.DeleteMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.members.GetCount-85d7": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.members.add": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.members.remove": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.archive": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.clone": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.completeMigration": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.sendActivityNotification": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.unarchive": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.ListOperations": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.CreateOperations": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetOperations": { "team-id": TeamsGraphPathParamValue; "teamsAsyncOperation-id": TeamsGraphPathParamValue };
  "me.joinedTeams.UpdateOperations": { "team-id": TeamsGraphPathParamValue; "teamsAsyncOperation-id": TeamsGraphPathParamValue };
  "me.joinedTeams.DeleteOperations": { "team-id": TeamsGraphPathParamValue; "teamsAsyncOperation-id": TeamsGraphPathParamValue };
  "me.joinedTeams.operations.GetCount-e702": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.ListPermissionGrants": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.CreatePermissionGrants": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetPermissionGrants": { "team-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "me.joinedTeams.UpdatePermissionGrants": { "team-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "me.joinedTeams.DeletePermissionGrants": { "team-id": TeamsGraphPathParamValue; "resourceSpecificPermissionGrant-id": TeamsGraphPathParamValue };
  "me.joinedTeams.permissionGrants.GetCount-a196": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetPhoto": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.UpdatePhoto": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetPhotoContent": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.UpdatePhotoContent": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.DeletePhotoContent": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetPrimaryChannel": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.UpdatePrimaryChannel": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.DeletePrimaryChannel": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.ListAllMembers": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.CreateAllMembers": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.GetAllMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.UpdateAllMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.DeleteAllMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.primaryChannel.allMembers.GetCount-0b8e": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.primaryChannel.allMembers.add": { "team-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphMeTeam02OperationRequestMap {
  "me.joinedTeams.team.channels.channel.doesUserHaveAccess": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.doesUserHaveAccess">;
  "me.joinedTeams.team.channels.channel.provisionEmail": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.provisionEmail">;
  "me.joinedTeams.team.channels.channel.removeEmail": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.removeEmail">;
  "me.joinedTeams.team.channels.channel.startMigration": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.startMigration">;
  "me.joinedTeams.team.channels.channel.unarchive": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.unarchive">;
  "me.joinedTeams.channels.ListSharedWithTeams": TeamsGraphOperationInput<"me.joinedTeams.channels.ListSharedWithTeams">;
  "me.joinedTeams.channels.CreateSharedWithTeams": TeamsGraphOperationInput<"me.joinedTeams.channels.CreateSharedWithTeams">;
  "me.joinedTeams.channels.GetSharedWithTeams": TeamsGraphOperationInput<"me.joinedTeams.channels.GetSharedWithTeams">;
  "me.joinedTeams.channels.UpdateSharedWithTeams": TeamsGraphOperationInput<"me.joinedTeams.channels.UpdateSharedWithTeams">;
  "me.joinedTeams.channels.DeleteSharedWithTeams": TeamsGraphOperationInput<"me.joinedTeams.channels.DeleteSharedWithTeams">;
  "me.joinedTeams.channels.sharedWithTeams.ListAllowedMembers": TeamsGraphOperationInput<"me.joinedTeams.channels.sharedWithTeams.ListAllowedMembers">;
  "me.joinedTeams.channels.sharedWithTeams.GetAllowedMembers": TeamsGraphOperationInput<"me.joinedTeams.channels.sharedWithTeams.GetAllowedMembers">;
  "me.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-2fcd": TeamsGraphOperationInput<"me.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-2fcd">;
  "me.joinedTeams.channels.sharedWithTeams.GetTeam": TeamsGraphOperationInput<"me.joinedTeams.channels.sharedWithTeams.GetTeam">;
  "me.joinedTeams.channels.sharedWithTeams.GetCount-2a75": TeamsGraphOperationInput<"me.joinedTeams.channels.sharedWithTeams.GetCount-2a75">;
  "me.joinedTeams.channels.ListTabs": TeamsGraphOperationInput<"me.joinedTeams.channels.ListTabs">;
  "me.joinedTeams.channels.CreateTabs": TeamsGraphOperationInput<"me.joinedTeams.channels.CreateTabs">;
  "me.joinedTeams.channels.GetTabs": TeamsGraphOperationInput<"me.joinedTeams.channels.GetTabs">;
  "me.joinedTeams.channels.UpdateTabs": TeamsGraphOperationInput<"me.joinedTeams.channels.UpdateTabs">;
  "me.joinedTeams.channels.DeleteTabs": TeamsGraphOperationInput<"me.joinedTeams.channels.DeleteTabs">;
  "me.joinedTeams.channels.tabs.GetTeamsApp": TeamsGraphOperationInput<"me.joinedTeams.channels.tabs.GetTeamsApp">;
  "me.joinedTeams.channels.tabs.GetCount-4693": TeamsGraphOperationInput<"me.joinedTeams.channels.tabs.GetCount-4693">;
  "me.joinedTeams.channels.GetCount-719a": TeamsGraphOperationInput<"me.joinedTeams.channels.GetCount-719a">;
  "me.joinedTeams.team.channels.getAllMessages": TeamsGraphOperationInput<"me.joinedTeams.team.channels.getAllMessages">;
  "me.joinedTeams.team.channels.getAllRetainedMessages": TeamsGraphOperationInput<"me.joinedTeams.team.channels.getAllRetainedMessages">;
  "me.joinedTeams.GetGroup": TeamsGraphOperationInput<"me.joinedTeams.GetGroup">;
  "me.joinedTeams.group.ListServiceProvisioningErrors": TeamsGraphOperationInput<"me.joinedTeams.group.ListServiceProvisioningErrors">;
  "me.joinedTeams.group.ServiceProvisioningErrors.GetCount-dad9": TeamsGraphOperationInput<"me.joinedTeams.group.ServiceProvisioningErrors.GetCount-dad9">;
  "me.joinedTeams.ListIncomingChannels": TeamsGraphOperationInput<"me.joinedTeams.ListIncomingChannels">;
  "me.joinedTeams.GetIncomingChannels": TeamsGraphOperationInput<"me.joinedTeams.GetIncomingChannels">;
  "me.joinedTeams.incomingChannels.GetCount-677e": TeamsGraphOperationInput<"me.joinedTeams.incomingChannels.GetCount-677e">;
  "me.joinedTeams.ListInstalledApps": TeamsGraphOperationInput<"me.joinedTeams.ListInstalledApps">;
  "me.joinedTeams.CreateInstalledApps": TeamsGraphOperationInput<"me.joinedTeams.CreateInstalledApps">;
  "me.joinedTeams.GetInstalledApps": TeamsGraphOperationInput<"me.joinedTeams.GetInstalledApps">;
  "me.joinedTeams.UpdateInstalledApps": TeamsGraphOperationInput<"me.joinedTeams.UpdateInstalledApps">;
  "me.joinedTeams.DeleteInstalledApps": TeamsGraphOperationInput<"me.joinedTeams.DeleteInstalledApps">;
  "me.joinedTeams.team.installedApps.teamsAppInstallation.upgrade": TeamsGraphOperationInput<"me.joinedTeams.team.installedApps.teamsAppInstallation.upgrade">;
  "me.joinedTeams.installedApps.GetTeamsApp": TeamsGraphOperationInput<"me.joinedTeams.installedApps.GetTeamsApp">;
  "me.joinedTeams.installedApps.GetTeamsAppDefinition": TeamsGraphOperationInput<"me.joinedTeams.installedApps.GetTeamsAppDefinition">;
  "me.joinedTeams.installedApps.GetCount-37f0": TeamsGraphOperationInput<"me.joinedTeams.installedApps.GetCount-37f0">;
  "me.joinedTeams.ListMembers": TeamsGraphOperationInput<"me.joinedTeams.ListMembers">;
  "me.joinedTeams.CreateMembers": TeamsGraphOperationInput<"me.joinedTeams.CreateMembers">;
  "me.joinedTeams.GetMembers": TeamsGraphOperationInput<"me.joinedTeams.GetMembers">;
  "me.joinedTeams.UpdateMembers": TeamsGraphOperationInput<"me.joinedTeams.UpdateMembers">;
  "me.joinedTeams.DeleteMembers": TeamsGraphOperationInput<"me.joinedTeams.DeleteMembers">;
  "me.joinedTeams.members.GetCount-85d7": TeamsGraphOperationInput<"me.joinedTeams.members.GetCount-85d7">;
  "me.joinedTeams.team.members.add": TeamsGraphOperationInput<"me.joinedTeams.team.members.add">;
  "me.joinedTeams.team.members.remove": TeamsGraphOperationInput<"me.joinedTeams.team.members.remove">;
  "me.joinedTeams.team.archive": TeamsGraphOperationInput<"me.joinedTeams.team.archive">;
  "me.joinedTeams.team.clone": TeamsGraphOperationInput<"me.joinedTeams.team.clone">;
  "me.joinedTeams.team.completeMigration": TeamsGraphOperationInput<"me.joinedTeams.team.completeMigration">;
  "me.joinedTeams.team.sendActivityNotification": TeamsGraphOperationInput<"me.joinedTeams.team.sendActivityNotification">;
  "me.joinedTeams.team.unarchive": TeamsGraphOperationInput<"me.joinedTeams.team.unarchive">;
  "me.joinedTeams.ListOperations": TeamsGraphOperationInput<"me.joinedTeams.ListOperations">;
  "me.joinedTeams.CreateOperations": TeamsGraphOperationInput<"me.joinedTeams.CreateOperations">;
  "me.joinedTeams.GetOperations": TeamsGraphOperationInput<"me.joinedTeams.GetOperations">;
  "me.joinedTeams.UpdateOperations": TeamsGraphOperationInput<"me.joinedTeams.UpdateOperations">;
  "me.joinedTeams.DeleteOperations": TeamsGraphOperationInput<"me.joinedTeams.DeleteOperations">;
  "me.joinedTeams.operations.GetCount-e702": TeamsGraphOperationInput<"me.joinedTeams.operations.GetCount-e702">;
  "me.joinedTeams.ListPermissionGrants": TeamsGraphOperationInput<"me.joinedTeams.ListPermissionGrants">;
  "me.joinedTeams.CreatePermissionGrants": TeamsGraphOperationInput<"me.joinedTeams.CreatePermissionGrants">;
  "me.joinedTeams.GetPermissionGrants": TeamsGraphOperationInput<"me.joinedTeams.GetPermissionGrants">;
  "me.joinedTeams.UpdatePermissionGrants": TeamsGraphOperationInput<"me.joinedTeams.UpdatePermissionGrants">;
  "me.joinedTeams.DeletePermissionGrants": TeamsGraphOperationInput<"me.joinedTeams.DeletePermissionGrants">;
  "me.joinedTeams.permissionGrants.GetCount-a196": TeamsGraphOperationInput<"me.joinedTeams.permissionGrants.GetCount-a196">;
  "me.joinedTeams.GetPhoto": TeamsGraphOperationInput<"me.joinedTeams.GetPhoto">;
  "me.joinedTeams.UpdatePhoto": TeamsGraphOperationInput<"me.joinedTeams.UpdatePhoto">;
  "me.joinedTeams.GetPhotoContent": TeamsGraphOperationInput<"me.joinedTeams.GetPhotoContent">;
  "me.joinedTeams.UpdatePhotoContent": TeamsGraphOperationInput<"me.joinedTeams.UpdatePhotoContent">;
  "me.joinedTeams.DeletePhotoContent": TeamsGraphOperationInput<"me.joinedTeams.DeletePhotoContent">;
  "me.joinedTeams.GetPrimaryChannel": TeamsGraphOperationInput<"me.joinedTeams.GetPrimaryChannel">;
  "me.joinedTeams.UpdatePrimaryChannel": TeamsGraphOperationInput<"me.joinedTeams.UpdatePrimaryChannel">;
  "me.joinedTeams.DeletePrimaryChannel": TeamsGraphOperationInput<"me.joinedTeams.DeletePrimaryChannel">;
  "me.joinedTeams.primaryChannel.ListAllMembers": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.ListAllMembers">;
  "me.joinedTeams.primaryChannel.CreateAllMembers": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.CreateAllMembers">;
  "me.joinedTeams.primaryChannel.GetAllMembers": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.GetAllMembers">;
  "me.joinedTeams.primaryChannel.UpdateAllMembers": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.UpdateAllMembers">;
  "me.joinedTeams.primaryChannel.DeleteAllMembers": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.DeleteAllMembers">;
  "me.joinedTeams.primaryChannel.allMembers.GetCount-0b8e": TeamsGraphOperationInput<"me.joinedTeams.primaryChannel.allMembers.GetCount-0b8e">;
  "me.joinedTeams.team.primaryChannel.allMembers.add": TeamsGraphOperationInput<"me.joinedTeams.team.primaryChannel.allMembers.add">;
}

export interface TeamsGraphMeTeam02GeneratedClient {
  MeJoinedTeamsTeamChannelsChannelDoesUserHaveAccess(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.doesUserHaveAccess">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.doesUserHaveAccess"]>;
  MeJoinedTeamsTeamChannelsChannelProvisionEmail(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.provisionEmail">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.provisionEmail"]>;
  MeJoinedTeamsTeamChannelsChannelRemoveEmail(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.removeEmail">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.removeEmail"]>;
  MeJoinedTeamsTeamChannelsChannelStartMigration(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.startMigration">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.startMigration"]>;
  MeJoinedTeamsTeamChannelsChannelUnarchive(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.unarchive">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.unarchive"]>;
  MeJoinedTeamsChannelsListSharedWithTeams(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.ListSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.ListSharedWithTeams"]>;
  MeJoinedTeamsChannelsCreateSharedWithTeams(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.CreateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.CreateSharedWithTeams"]>;
  MeJoinedTeamsChannelsGetSharedWithTeams(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.GetSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.GetSharedWithTeams"]>;
  MeJoinedTeamsChannelsUpdateSharedWithTeams(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.UpdateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.UpdateSharedWithTeams"]>;
  MeJoinedTeamsChannelsDeleteSharedWithTeams(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.DeleteSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.DeleteSharedWithTeams"]>;
  MeJoinedTeamsChannelsSharedWithTeamsListAllowedMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.sharedWithTeams.ListAllowedMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.sharedWithTeams.ListAllowedMembers"]>;
  MeJoinedTeamsChannelsSharedWithTeamsGetAllowedMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.sharedWithTeams.GetAllowedMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.sharedWithTeams.GetAllowedMembers"]>;
  MeJoinedTeamsChannelsSharedWithTeamsAllowedMembersGetCount2fcd(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-2fcd">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-2fcd"]>;
  MeJoinedTeamsChannelsSharedWithTeamsGetTeam(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.sharedWithTeams.GetTeam">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.sharedWithTeams.GetTeam"]>;
  MeJoinedTeamsChannelsSharedWithTeamsGetCount2a75(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.sharedWithTeams.GetCount-2a75">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.sharedWithTeams.GetCount-2a75"]>;
  MeJoinedTeamsChannelsListTabs(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.ListTabs">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.ListTabs"]>;
  MeJoinedTeamsChannelsCreateTabs(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.CreateTabs">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.CreateTabs"]>;
  MeJoinedTeamsChannelsGetTabs(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.GetTabs">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.GetTabs"]>;
  MeJoinedTeamsChannelsUpdateTabs(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.UpdateTabs">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.UpdateTabs"]>;
  MeJoinedTeamsChannelsDeleteTabs(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.DeleteTabs">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.DeleteTabs"]>;
  MeJoinedTeamsChannelsTabsGetTeamsApp(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.tabs.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.tabs.GetTeamsApp"]>;
  MeJoinedTeamsChannelsTabsGetCount4693(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.tabs.GetCount-4693">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.tabs.GetCount-4693"]>;
  MeJoinedTeamsChannelsGetCount719a(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.GetCount-719a">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.GetCount-719a"]>;
  MeJoinedTeamsTeamChannelsGetAllMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.getAllMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.getAllMessages"]>;
  MeJoinedTeamsTeamChannelsGetAllRetainedMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.getAllRetainedMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.getAllRetainedMessages"]>;
  MeJoinedTeamsGetGroup(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetGroup">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetGroup"]>;
  MeJoinedTeamsGroupListServiceProvisioningErrors(...args: TeamsGraphOperationArgs<"me.joinedTeams.group.ListServiceProvisioningErrors">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.group.ListServiceProvisioningErrors"]>;
  MeJoinedTeamsGroupServiceProvisioningErrorsGetCountDad9(...args: TeamsGraphOperationArgs<"me.joinedTeams.group.ServiceProvisioningErrors.GetCount-dad9">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.group.ServiceProvisioningErrors.GetCount-dad9"]>;
  MeJoinedTeamsListIncomingChannels(...args: TeamsGraphOperationArgs<"me.joinedTeams.ListIncomingChannels">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.ListIncomingChannels"]>;
  MeJoinedTeamsGetIncomingChannels(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetIncomingChannels">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetIncomingChannels"]>;
  MeJoinedTeamsIncomingChannelsGetCount677e(...args: TeamsGraphOperationArgs<"me.joinedTeams.incomingChannels.GetCount-677e">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.incomingChannels.GetCount-677e"]>;
  MeJoinedTeamsListInstalledApps(...args: TeamsGraphOperationArgs<"me.joinedTeams.ListInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.ListInstalledApps"]>;
  MeJoinedTeamsCreateInstalledApps(...args: TeamsGraphOperationArgs<"me.joinedTeams.CreateInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.CreateInstalledApps"]>;
  MeJoinedTeamsGetInstalledApps(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetInstalledApps"]>;
  MeJoinedTeamsUpdateInstalledApps(...args: TeamsGraphOperationArgs<"me.joinedTeams.UpdateInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.UpdateInstalledApps"]>;
  MeJoinedTeamsDeleteInstalledApps(...args: TeamsGraphOperationArgs<"me.joinedTeams.DeleteInstalledApps">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.DeleteInstalledApps"]>;
  MeJoinedTeamsTeamInstalledAppsTeamsAppInstallationUpgrade(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.installedApps.teamsAppInstallation.upgrade">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.installedApps.teamsAppInstallation.upgrade"]>;
  MeJoinedTeamsInstalledAppsGetTeamsApp(...args: TeamsGraphOperationArgs<"me.joinedTeams.installedApps.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.installedApps.GetTeamsApp"]>;
  MeJoinedTeamsInstalledAppsGetTeamsAppDefinition(...args: TeamsGraphOperationArgs<"me.joinedTeams.installedApps.GetTeamsAppDefinition">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.installedApps.GetTeamsAppDefinition"]>;
  MeJoinedTeamsInstalledAppsGetCount37f0(...args: TeamsGraphOperationArgs<"me.joinedTeams.installedApps.GetCount-37f0">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.installedApps.GetCount-37f0"]>;
  MeJoinedTeamsListMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.ListMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.ListMembers"]>;
  MeJoinedTeamsCreateMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.CreateMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.CreateMembers"]>;
  MeJoinedTeamsGetMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetMembers"]>;
  MeJoinedTeamsUpdateMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.UpdateMembers"]>;
  MeJoinedTeamsDeleteMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.DeleteMembers"]>;
  MeJoinedTeamsMembersGetCount85d7(...args: TeamsGraphOperationArgs<"me.joinedTeams.members.GetCount-85d7">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.members.GetCount-85d7"]>;
  MeJoinedTeamsTeamMembersAdd(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.members.add">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.members.add"]>;
  MeJoinedTeamsTeamMembersRemove(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.members.remove">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.members.remove"]>;
  MeJoinedTeamsTeamArchive(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.archive">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.archive"]>;
  MeJoinedTeamsTeamClone(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.clone">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.clone"]>;
  MeJoinedTeamsTeamCompleteMigration(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.completeMigration">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.completeMigration"]>;
  MeJoinedTeamsTeamSendActivityNotification(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.sendActivityNotification">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.sendActivityNotification"]>;
  MeJoinedTeamsTeamUnarchive(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.unarchive">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.unarchive"]>;
  MeJoinedTeamsListOperations(...args: TeamsGraphOperationArgs<"me.joinedTeams.ListOperations">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.ListOperations"]>;
  MeJoinedTeamsCreateOperations(...args: TeamsGraphOperationArgs<"me.joinedTeams.CreateOperations">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.CreateOperations"]>;
  MeJoinedTeamsGetOperations(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetOperations">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetOperations"]>;
  MeJoinedTeamsUpdateOperations(...args: TeamsGraphOperationArgs<"me.joinedTeams.UpdateOperations">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.UpdateOperations"]>;
  MeJoinedTeamsDeleteOperations(...args: TeamsGraphOperationArgs<"me.joinedTeams.DeleteOperations">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.DeleteOperations"]>;
  MeJoinedTeamsOperationsGetCountE702(...args: TeamsGraphOperationArgs<"me.joinedTeams.operations.GetCount-e702">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.operations.GetCount-e702"]>;
  MeJoinedTeamsListPermissionGrants(...args: TeamsGraphOperationArgs<"me.joinedTeams.ListPermissionGrants">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.ListPermissionGrants"]>;
  MeJoinedTeamsCreatePermissionGrants(...args: TeamsGraphOperationArgs<"me.joinedTeams.CreatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.CreatePermissionGrants"]>;
  MeJoinedTeamsGetPermissionGrants(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetPermissionGrants">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetPermissionGrants"]>;
  MeJoinedTeamsUpdatePermissionGrants(...args: TeamsGraphOperationArgs<"me.joinedTeams.UpdatePermissionGrants">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.UpdatePermissionGrants"]>;
  MeJoinedTeamsDeletePermissionGrants(...args: TeamsGraphOperationArgs<"me.joinedTeams.DeletePermissionGrants">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.DeletePermissionGrants"]>;
  MeJoinedTeamsPermissionGrantsGetCountA196(...args: TeamsGraphOperationArgs<"me.joinedTeams.permissionGrants.GetCount-a196">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.permissionGrants.GetCount-a196"]>;
  MeJoinedTeamsGetPhoto(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetPhoto">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetPhoto"]>;
  MeJoinedTeamsUpdatePhoto(...args: TeamsGraphOperationArgs<"me.joinedTeams.UpdatePhoto">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.UpdatePhoto"]>;
  MeJoinedTeamsGetPhotoContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetPhotoContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetPhotoContent"]>;
  MeJoinedTeamsUpdatePhotoContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.UpdatePhotoContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.UpdatePhotoContent"]>;
  MeJoinedTeamsDeletePhotoContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.DeletePhotoContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.DeletePhotoContent"]>;
  MeJoinedTeamsGetPrimaryChannel(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetPrimaryChannel">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetPrimaryChannel"]>;
  MeJoinedTeamsUpdatePrimaryChannel(...args: TeamsGraphOperationArgs<"me.joinedTeams.UpdatePrimaryChannel">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.UpdatePrimaryChannel"]>;
  MeJoinedTeamsDeletePrimaryChannel(...args: TeamsGraphOperationArgs<"me.joinedTeams.DeletePrimaryChannel">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.DeletePrimaryChannel"]>;
  MeJoinedTeamsPrimaryChannelListAllMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.ListAllMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.ListAllMembers"]>;
  MeJoinedTeamsPrimaryChannelCreateAllMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.CreateAllMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.CreateAllMembers"]>;
  MeJoinedTeamsPrimaryChannelGetAllMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetAllMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.GetAllMembers"]>;
  MeJoinedTeamsPrimaryChannelUpdateAllMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.UpdateAllMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.UpdateAllMembers"]>;
  MeJoinedTeamsPrimaryChannelDeleteAllMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.DeleteAllMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.DeleteAllMembers"]>;
  MeJoinedTeamsPrimaryChannelAllMembersGetCount0b8e(...args: TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.allMembers.GetCount-0b8e">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.primaryChannel.allMembers.GetCount-0b8e"]>;
  MeJoinedTeamsTeamPrimaryChannelAllMembersAdd(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.allMembers.add">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.primaryChannel.allMembers.add"]>;
}

export const TeamsGraphMeTeam02GeneratedFunctionNames = [
  "MeJoinedTeamsTeamChannelsChannelDoesUserHaveAccess",
  "MeJoinedTeamsTeamChannelsChannelProvisionEmail",
  "MeJoinedTeamsTeamChannelsChannelRemoveEmail",
  "MeJoinedTeamsTeamChannelsChannelStartMigration",
  "MeJoinedTeamsTeamChannelsChannelUnarchive",
  "MeJoinedTeamsChannelsListSharedWithTeams",
  "MeJoinedTeamsChannelsCreateSharedWithTeams",
  "MeJoinedTeamsChannelsGetSharedWithTeams",
  "MeJoinedTeamsChannelsUpdateSharedWithTeams",
  "MeJoinedTeamsChannelsDeleteSharedWithTeams",
  "MeJoinedTeamsChannelsSharedWithTeamsListAllowedMembers",
  "MeJoinedTeamsChannelsSharedWithTeamsGetAllowedMembers",
  "MeJoinedTeamsChannelsSharedWithTeamsAllowedMembersGetCount2fcd",
  "MeJoinedTeamsChannelsSharedWithTeamsGetTeam",
  "MeJoinedTeamsChannelsSharedWithTeamsGetCount2a75",
  "MeJoinedTeamsChannelsListTabs",
  "MeJoinedTeamsChannelsCreateTabs",
  "MeJoinedTeamsChannelsGetTabs",
  "MeJoinedTeamsChannelsUpdateTabs",
  "MeJoinedTeamsChannelsDeleteTabs",
  "MeJoinedTeamsChannelsTabsGetTeamsApp",
  "MeJoinedTeamsChannelsTabsGetCount4693",
  "MeJoinedTeamsChannelsGetCount719a",
  "MeJoinedTeamsTeamChannelsGetAllMessages",
  "MeJoinedTeamsTeamChannelsGetAllRetainedMessages",
  "MeJoinedTeamsGetGroup",
  "MeJoinedTeamsGroupListServiceProvisioningErrors",
  "MeJoinedTeamsGroupServiceProvisioningErrorsGetCountDad9",
  "MeJoinedTeamsListIncomingChannels",
  "MeJoinedTeamsGetIncomingChannels",
  "MeJoinedTeamsIncomingChannelsGetCount677e",
  "MeJoinedTeamsListInstalledApps",
  "MeJoinedTeamsCreateInstalledApps",
  "MeJoinedTeamsGetInstalledApps",
  "MeJoinedTeamsUpdateInstalledApps",
  "MeJoinedTeamsDeleteInstalledApps",
  "MeJoinedTeamsTeamInstalledAppsTeamsAppInstallationUpgrade",
  "MeJoinedTeamsInstalledAppsGetTeamsApp",
  "MeJoinedTeamsInstalledAppsGetTeamsAppDefinition",
  "MeJoinedTeamsInstalledAppsGetCount37f0",
  "MeJoinedTeamsListMembers",
  "MeJoinedTeamsCreateMembers",
  "MeJoinedTeamsGetMembers",
  "MeJoinedTeamsUpdateMembers",
  "MeJoinedTeamsDeleteMembers",
  "MeJoinedTeamsMembersGetCount85d7",
  "MeJoinedTeamsTeamMembersAdd",
  "MeJoinedTeamsTeamMembersRemove",
  "MeJoinedTeamsTeamArchive",
  "MeJoinedTeamsTeamClone",
  "MeJoinedTeamsTeamCompleteMigration",
  "MeJoinedTeamsTeamSendActivityNotification",
  "MeJoinedTeamsTeamUnarchive",
  "MeJoinedTeamsListOperations",
  "MeJoinedTeamsCreateOperations",
  "MeJoinedTeamsGetOperations",
  "MeJoinedTeamsUpdateOperations",
  "MeJoinedTeamsDeleteOperations",
  "MeJoinedTeamsOperationsGetCountE702",
  "MeJoinedTeamsListPermissionGrants",
  "MeJoinedTeamsCreatePermissionGrants",
  "MeJoinedTeamsGetPermissionGrants",
  "MeJoinedTeamsUpdatePermissionGrants",
  "MeJoinedTeamsDeletePermissionGrants",
  "MeJoinedTeamsPermissionGrantsGetCountA196",
  "MeJoinedTeamsGetPhoto",
  "MeJoinedTeamsUpdatePhoto",
  "MeJoinedTeamsGetPhotoContent",
  "MeJoinedTeamsUpdatePhotoContent",
  "MeJoinedTeamsDeletePhotoContent",
  "MeJoinedTeamsGetPrimaryChannel",
  "MeJoinedTeamsUpdatePrimaryChannel",
  "MeJoinedTeamsDeletePrimaryChannel",
  "MeJoinedTeamsPrimaryChannelListAllMembers",
  "MeJoinedTeamsPrimaryChannelCreateAllMembers",
  "MeJoinedTeamsPrimaryChannelGetAllMembers",
  "MeJoinedTeamsPrimaryChannelUpdateAllMembers",
  "MeJoinedTeamsPrimaryChannelDeleteAllMembers",
  "MeJoinedTeamsPrimaryChannelAllMembersGetCount0b8e",
  "MeJoinedTeamsTeamPrimaryChannelAllMembersAdd"
] as const satisfies readonly (keyof TeamsGraphMeTeam02GeneratedClient)[];

export function createTeamsGraphMeTeam02GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphMeTeam02GeneratedClient {
  return {
    MeJoinedTeamsTeamChannelsChannelDoesUserHaveAccess: (...args) => callOperation("me.joinedTeams.team.channels.channel.doesUserHaveAccess", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.doesUserHaveAccess">)),
    MeJoinedTeamsTeamChannelsChannelProvisionEmail: (...args) => callOperation("me.joinedTeams.team.channels.channel.provisionEmail", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.provisionEmail">)),
    MeJoinedTeamsTeamChannelsChannelRemoveEmail: (...args) => callOperation("me.joinedTeams.team.channels.channel.removeEmail", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.removeEmail">)),
    MeJoinedTeamsTeamChannelsChannelStartMigration: (...args) => callOperation("me.joinedTeams.team.channels.channel.startMigration", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.startMigration">)),
    MeJoinedTeamsTeamChannelsChannelUnarchive: (...args) => callOperation("me.joinedTeams.team.channels.channel.unarchive", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.unarchive">)),
    MeJoinedTeamsChannelsListSharedWithTeams: (...args) => callOperation("me.joinedTeams.channels.ListSharedWithTeams", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.ListSharedWithTeams">)),
    MeJoinedTeamsChannelsCreateSharedWithTeams: (...args) => callOperation("me.joinedTeams.channels.CreateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.CreateSharedWithTeams">)),
    MeJoinedTeamsChannelsGetSharedWithTeams: (...args) => callOperation("me.joinedTeams.channels.GetSharedWithTeams", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.GetSharedWithTeams">)),
    MeJoinedTeamsChannelsUpdateSharedWithTeams: (...args) => callOperation("me.joinedTeams.channels.UpdateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.UpdateSharedWithTeams">)),
    MeJoinedTeamsChannelsDeleteSharedWithTeams: (...args) => callOperation("me.joinedTeams.channels.DeleteSharedWithTeams", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.DeleteSharedWithTeams">)),
    MeJoinedTeamsChannelsSharedWithTeamsListAllowedMembers: (...args) => callOperation("me.joinedTeams.channels.sharedWithTeams.ListAllowedMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.sharedWithTeams.ListAllowedMembers">)),
    MeJoinedTeamsChannelsSharedWithTeamsGetAllowedMembers: (...args) => callOperation("me.joinedTeams.channels.sharedWithTeams.GetAllowedMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.sharedWithTeams.GetAllowedMembers">)),
    MeJoinedTeamsChannelsSharedWithTeamsAllowedMembersGetCount2fcd: (...args) => callOperation("me.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-2fcd", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.sharedWithTeams.allowedMembers.GetCount-2fcd">)),
    MeJoinedTeamsChannelsSharedWithTeamsGetTeam: (...args) => callOperation("me.joinedTeams.channels.sharedWithTeams.GetTeam", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.sharedWithTeams.GetTeam">)),
    MeJoinedTeamsChannelsSharedWithTeamsGetCount2a75: (...args) => callOperation("me.joinedTeams.channels.sharedWithTeams.GetCount-2a75", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.sharedWithTeams.GetCount-2a75">)),
    MeJoinedTeamsChannelsListTabs: (...args) => callOperation("me.joinedTeams.channels.ListTabs", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.ListTabs">)),
    MeJoinedTeamsChannelsCreateTabs: (...args) => callOperation("me.joinedTeams.channels.CreateTabs", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.CreateTabs">)),
    MeJoinedTeamsChannelsGetTabs: (...args) => callOperation("me.joinedTeams.channels.GetTabs", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.GetTabs">)),
    MeJoinedTeamsChannelsUpdateTabs: (...args) => callOperation("me.joinedTeams.channels.UpdateTabs", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.UpdateTabs">)),
    MeJoinedTeamsChannelsDeleteTabs: (...args) => callOperation("me.joinedTeams.channels.DeleteTabs", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.DeleteTabs">)),
    MeJoinedTeamsChannelsTabsGetTeamsApp: (...args) => callOperation("me.joinedTeams.channels.tabs.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.tabs.GetTeamsApp">)),
    MeJoinedTeamsChannelsTabsGetCount4693: (...args) => callOperation("me.joinedTeams.channels.tabs.GetCount-4693", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.tabs.GetCount-4693">)),
    MeJoinedTeamsChannelsGetCount719a: (...args) => callOperation("me.joinedTeams.channels.GetCount-719a", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.GetCount-719a">)),
    MeJoinedTeamsTeamChannelsGetAllMessages: (...args) => callOperation("me.joinedTeams.team.channels.getAllMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.getAllMessages">)),
    MeJoinedTeamsTeamChannelsGetAllRetainedMessages: (...args) => callOperation("me.joinedTeams.team.channels.getAllRetainedMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.getAllRetainedMessages">)),
    MeJoinedTeamsGetGroup: (...args) => callOperation("me.joinedTeams.GetGroup", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetGroup">)),
    MeJoinedTeamsGroupListServiceProvisioningErrors: (...args) => callOperation("me.joinedTeams.group.ListServiceProvisioningErrors", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.group.ListServiceProvisioningErrors">)),
    MeJoinedTeamsGroupServiceProvisioningErrorsGetCountDad9: (...args) => callOperation("me.joinedTeams.group.ServiceProvisioningErrors.GetCount-dad9", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.group.ServiceProvisioningErrors.GetCount-dad9">)),
    MeJoinedTeamsListIncomingChannels: (...args) => callOperation("me.joinedTeams.ListIncomingChannels", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.ListIncomingChannels">)),
    MeJoinedTeamsGetIncomingChannels: (...args) => callOperation("me.joinedTeams.GetIncomingChannels", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetIncomingChannels">)),
    MeJoinedTeamsIncomingChannelsGetCount677e: (...args) => callOperation("me.joinedTeams.incomingChannels.GetCount-677e", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.incomingChannels.GetCount-677e">)),
    MeJoinedTeamsListInstalledApps: (...args) => callOperation("me.joinedTeams.ListInstalledApps", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.ListInstalledApps">)),
    MeJoinedTeamsCreateInstalledApps: (...args) => callOperation("me.joinedTeams.CreateInstalledApps", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.CreateInstalledApps">)),
    MeJoinedTeamsGetInstalledApps: (...args) => callOperation("me.joinedTeams.GetInstalledApps", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetInstalledApps">)),
    MeJoinedTeamsUpdateInstalledApps: (...args) => callOperation("me.joinedTeams.UpdateInstalledApps", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.UpdateInstalledApps">)),
    MeJoinedTeamsDeleteInstalledApps: (...args) => callOperation("me.joinedTeams.DeleteInstalledApps", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.DeleteInstalledApps">)),
    MeJoinedTeamsTeamInstalledAppsTeamsAppInstallationUpgrade: (...args) => callOperation("me.joinedTeams.team.installedApps.teamsAppInstallation.upgrade", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.installedApps.teamsAppInstallation.upgrade">)),
    MeJoinedTeamsInstalledAppsGetTeamsApp: (...args) => callOperation("me.joinedTeams.installedApps.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.installedApps.GetTeamsApp">)),
    MeJoinedTeamsInstalledAppsGetTeamsAppDefinition: (...args) => callOperation("me.joinedTeams.installedApps.GetTeamsAppDefinition", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.installedApps.GetTeamsAppDefinition">)),
    MeJoinedTeamsInstalledAppsGetCount37f0: (...args) => callOperation("me.joinedTeams.installedApps.GetCount-37f0", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.installedApps.GetCount-37f0">)),
    MeJoinedTeamsListMembers: (...args) => callOperation("me.joinedTeams.ListMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.ListMembers">)),
    MeJoinedTeamsCreateMembers: (...args) => callOperation("me.joinedTeams.CreateMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.CreateMembers">)),
    MeJoinedTeamsGetMembers: (...args) => callOperation("me.joinedTeams.GetMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetMembers">)),
    MeJoinedTeamsUpdateMembers: (...args) => callOperation("me.joinedTeams.UpdateMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.UpdateMembers">)),
    MeJoinedTeamsDeleteMembers: (...args) => callOperation("me.joinedTeams.DeleteMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.DeleteMembers">)),
    MeJoinedTeamsMembersGetCount85d7: (...args) => callOperation("me.joinedTeams.members.GetCount-85d7", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.members.GetCount-85d7">)),
    MeJoinedTeamsTeamMembersAdd: (...args) => callOperation("me.joinedTeams.team.members.add", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.members.add">)),
    MeJoinedTeamsTeamMembersRemove: (...args) => callOperation("me.joinedTeams.team.members.remove", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.members.remove">)),
    MeJoinedTeamsTeamArchive: (...args) => callOperation("me.joinedTeams.team.archive", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.archive">)),
    MeJoinedTeamsTeamClone: (...args) => callOperation("me.joinedTeams.team.clone", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.clone">)),
    MeJoinedTeamsTeamCompleteMigration: (...args) => callOperation("me.joinedTeams.team.completeMigration", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.completeMigration">)),
    MeJoinedTeamsTeamSendActivityNotification: (...args) => callOperation("me.joinedTeams.team.sendActivityNotification", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.sendActivityNotification">)),
    MeJoinedTeamsTeamUnarchive: (...args) => callOperation("me.joinedTeams.team.unarchive", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.unarchive">)),
    MeJoinedTeamsListOperations: (...args) => callOperation("me.joinedTeams.ListOperations", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.ListOperations">)),
    MeJoinedTeamsCreateOperations: (...args) => callOperation("me.joinedTeams.CreateOperations", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.CreateOperations">)),
    MeJoinedTeamsGetOperations: (...args) => callOperation("me.joinedTeams.GetOperations", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetOperations">)),
    MeJoinedTeamsUpdateOperations: (...args) => callOperation("me.joinedTeams.UpdateOperations", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.UpdateOperations">)),
    MeJoinedTeamsDeleteOperations: (...args) => callOperation("me.joinedTeams.DeleteOperations", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.DeleteOperations">)),
    MeJoinedTeamsOperationsGetCountE702: (...args) => callOperation("me.joinedTeams.operations.GetCount-e702", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.operations.GetCount-e702">)),
    MeJoinedTeamsListPermissionGrants: (...args) => callOperation("me.joinedTeams.ListPermissionGrants", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.ListPermissionGrants">)),
    MeJoinedTeamsCreatePermissionGrants: (...args) => callOperation("me.joinedTeams.CreatePermissionGrants", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.CreatePermissionGrants">)),
    MeJoinedTeamsGetPermissionGrants: (...args) => callOperation("me.joinedTeams.GetPermissionGrants", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetPermissionGrants">)),
    MeJoinedTeamsUpdatePermissionGrants: (...args) => callOperation("me.joinedTeams.UpdatePermissionGrants", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.UpdatePermissionGrants">)),
    MeJoinedTeamsDeletePermissionGrants: (...args) => callOperation("me.joinedTeams.DeletePermissionGrants", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.DeletePermissionGrants">)),
    MeJoinedTeamsPermissionGrantsGetCountA196: (...args) => callOperation("me.joinedTeams.permissionGrants.GetCount-a196", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.permissionGrants.GetCount-a196">)),
    MeJoinedTeamsGetPhoto: (...args) => callOperation("me.joinedTeams.GetPhoto", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetPhoto">)),
    MeJoinedTeamsUpdatePhoto: (...args) => callOperation("me.joinedTeams.UpdatePhoto", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.UpdatePhoto">)),
    MeJoinedTeamsGetPhotoContent: (...args) => callOperation("me.joinedTeams.GetPhotoContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetPhotoContent">)),
    MeJoinedTeamsUpdatePhotoContent: (...args) => callOperation("me.joinedTeams.UpdatePhotoContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.UpdatePhotoContent">)),
    MeJoinedTeamsDeletePhotoContent: (...args) => callOperation("me.joinedTeams.DeletePhotoContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.DeletePhotoContent">)),
    MeJoinedTeamsGetPrimaryChannel: (...args) => callOperation("me.joinedTeams.GetPrimaryChannel", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetPrimaryChannel">)),
    MeJoinedTeamsUpdatePrimaryChannel: (...args) => callOperation("me.joinedTeams.UpdatePrimaryChannel", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.UpdatePrimaryChannel">)),
    MeJoinedTeamsDeletePrimaryChannel: (...args) => callOperation("me.joinedTeams.DeletePrimaryChannel", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.DeletePrimaryChannel">)),
    MeJoinedTeamsPrimaryChannelListAllMembers: (...args) => callOperation("me.joinedTeams.primaryChannel.ListAllMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.ListAllMembers">)),
    MeJoinedTeamsPrimaryChannelCreateAllMembers: (...args) => callOperation("me.joinedTeams.primaryChannel.CreateAllMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.CreateAllMembers">)),
    MeJoinedTeamsPrimaryChannelGetAllMembers: (...args) => callOperation("me.joinedTeams.primaryChannel.GetAllMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.GetAllMembers">)),
    MeJoinedTeamsPrimaryChannelUpdateAllMembers: (...args) => callOperation("me.joinedTeams.primaryChannel.UpdateAllMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.UpdateAllMembers">)),
    MeJoinedTeamsPrimaryChannelDeleteAllMembers: (...args) => callOperation("me.joinedTeams.primaryChannel.DeleteAllMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.DeleteAllMembers">)),
    MeJoinedTeamsPrimaryChannelAllMembersGetCount0b8e: (...args) => callOperation("me.joinedTeams.primaryChannel.allMembers.GetCount-0b8e", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.primaryChannel.allMembers.GetCount-0b8e">)),
    MeJoinedTeamsTeamPrimaryChannelAllMembersAdd: (...args) => callOperation("me.joinedTeams.team.primaryChannel.allMembers.add", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.primaryChannel.allMembers.add">)),
  };
}
