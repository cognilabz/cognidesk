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
export const TeamsGraphTeamsChannel02OperationKeys = [
  "teams.channels.ListSharedWithTeams",
  "teams.channels.CreateSharedWithTeams",
  "teams.channels.GetSharedWithTeams",
  "teams.channels.UpdateSharedWithTeams",
  "teams.channels.DeleteSharedWithTeams",
  "teams.channels.sharedWithTeams.ListAllowedMembers",
  "teams.channels.sharedWithTeams.GetAllowedMembers",
  "teams.channels.sharedWithTeams.allowedMembers.GetCount-5a86",
  "teams.channels.sharedWithTeams.GetTeam",
  "teams.channels.sharedWithTeams.GetCount-11a3",
  "teams.channels.ListTabs",
  "teams.channels.CreateTabs",
  "teams.channels.GetTabs",
  "teams.channels.UpdateTabs",
  "teams.channels.DeleteTabs",
  "teams.channels.tabs.GetTeamsApp",
  "teams.channels.tabs.GetCount-f94d",
  "teams.channels.GetCount-1a82",
  "teams.team.channels.getAllMessages",
  "teams.team.channels.getAllRetainedMessages",
  "teams.ListIncomingChannels",
  "teams.GetIncomingChannels",
  "teams.incomingChannels.GetCount-728b",
  "teams.GetPrimaryChannel",
  "teams.UpdatePrimaryChannel",
  "teams.DeletePrimaryChannel",
  "teams.primaryChannel.ListAllMembers",
  "teams.primaryChannel.CreateAllMembers",
  "teams.primaryChannel.GetAllMembers",
  "teams.primaryChannel.UpdateAllMembers",
  "teams.primaryChannel.DeleteAllMembers",
  "teams.primaryChannel.allMembers.GetCount-4cdd",
  "teams.team.primaryChannel.allMembers.add",
  "teams.team.primaryChannel.allMembers.remove",
  "teams.primaryChannel.ListEnabledApps",
  "teams.primaryChannel.GetEnabledApps",
  "teams.primaryChannel.enabledApps.GetCount-412b",
  "teams.primaryChannel.GetFilesFolder",
  "teams.primaryChannel.GetFilesFolderContent",
  "teams.primaryChannel.UpdateFilesFolderContent",
  "teams.primaryChannel.DeleteFilesFolderContent",
  "teams.primaryChannel.ListMembers",
  "teams.primaryChannel.CreateMembers",
  "teams.primaryChannel.GetMembers",
  "teams.primaryChannel.UpdateMembers",
  "teams.primaryChannel.DeleteMembers",
  "teams.primaryChannel.members.GetCount-8411",
  "teams.team.primaryChannel.members.add",
  "teams.team.primaryChannel.members.remove",
  "teams.primaryChannel.ListMessages",
  "teams.primaryChannel.CreateMessages",
  "teams.primaryChannel.GetMessages",
  "teams.primaryChannel.UpdateMessages",
  "teams.primaryChannel.DeleteMessages",
  "teams.primaryChannel.messages.ListHostedContents",
  "teams.primaryChannel.messages.CreateHostedContents",
  "teams.primaryChannel.messages.GetHostedContents",
  "teams.primaryChannel.messages.UpdateHostedContents",
  "teams.primaryChannel.messages.DeleteHostedContents",
  "teams.primaryChannel.messages.GetHostedContentsContent",
  "teams.primaryChannel.messages.UpdateHostedContentsContent",
  "teams.primaryChannel.messages.DeleteHostedContentsContent",
  "teams.primaryChannel.messages.hostedContents.GetCount-ed0a",
  "teams.team.primaryChannel.messages.chatMessage.setReaction",
  "teams.team.primaryChannel.messages.chatMessage.softDelete",
  "teams.team.primaryChannel.messages.chatMessage.undoSoftDelete",
  "teams.team.primaryChannel.messages.chatMessage.unsetReaction",
  "teams.primaryChannel.messages.ListReplies",
  "teams.primaryChannel.messages.CreateReplies",
  "teams.primaryChannel.messages.GetReplies",
  "teams.primaryChannel.messages.UpdateReplies",
  "teams.primaryChannel.messages.DeleteReplies",
  "teams.primaryChannel.messages.replies.ListHostedContents",
  "teams.primaryChannel.messages.replies.CreateHostedContents",
  "teams.primaryChannel.messages.replies.GetHostedContents",
  "teams.primaryChannel.messages.replies.UpdateHostedContents",
  "teams.primaryChannel.messages.replies.DeleteHostedContents",
  "teams.primaryChannel.messages.replies.GetHostedContentsContent",
  "teams.primaryChannel.messages.replies.UpdateHostedContentsContent",
  "teams.primaryChannel.messages.replies.DeleteHostedContentsContent"
] as const;
export type TeamsGraphTeamsChannel02OperationKey = typeof TeamsGraphTeamsChannel02OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsChannel02OperationPathParamMap {
  "teams.channels.ListSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.CreateSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.GetSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teams.channels.UpdateSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teams.channels.DeleteSharedWithTeams": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teams.channels.sharedWithTeams.ListAllowedMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teams.channels.sharedWithTeams.GetAllowedMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.channels.sharedWithTeams.allowedMembers.GetCount-5a86": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teams.channels.sharedWithTeams.GetTeam": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "sharedWithChannelTeamInfo-id": TeamsGraphPathParamValue };
  "teams.channels.sharedWithTeams.GetCount-11a3": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.ListTabs": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.CreateTabs": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.GetTabs": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "teams.channels.UpdateTabs": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "teams.channels.DeleteTabs": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "teams.channels.tabs.GetTeamsApp": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsTab-id": TeamsGraphPathParamValue };
  "teams.channels.tabs.GetCount-f94d": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.GetCount-1a82": { "team-id": TeamsGraphPathParamValue };
  "teams.team.channels.getAllMessages": { "team-id": TeamsGraphPathParamValue };
  "teams.team.channels.getAllRetainedMessages": { "team-id": TeamsGraphPathParamValue };
  "teams.ListIncomingChannels": { "team-id": TeamsGraphPathParamValue };
  "teams.GetIncomingChannels": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.incomingChannels.GetCount-728b": { "team-id": TeamsGraphPathParamValue };
  "teams.GetPrimaryChannel": { "team-id": TeamsGraphPathParamValue };
  "teams.UpdatePrimaryChannel": { "team-id": TeamsGraphPathParamValue };
  "teams.DeletePrimaryChannel": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.ListAllMembers": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.CreateAllMembers": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.GetAllMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.UpdateAllMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.DeleteAllMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.allMembers.GetCount-4cdd": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.allMembers.add": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.allMembers.remove": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.ListEnabledApps": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.GetEnabledApps": { "team-id": TeamsGraphPathParamValue; "teamsApp-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.enabledApps.GetCount-412b": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.GetFilesFolder": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.GetFilesFolderContent": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.UpdateFilesFolderContent": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.DeleteFilesFolderContent": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.ListMembers": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.CreateMembers": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.GetMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.UpdateMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.DeleteMembers": { "team-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.members.GetCount-8411": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.members.add": { "team-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.members.remove": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.ListMessages": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.CreateMessages": { "team-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.GetMessages": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.UpdateMessages": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.DeleteMessages": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.ListHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.CreateHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.GetHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.UpdateHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.DeleteHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.GetHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.UpdateHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.DeleteHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.hostedContents.GetCount-ed0a": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.messages.chatMessage.setReaction": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.messages.chatMessage.softDelete": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.messages.chatMessage.undoSoftDelete": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.team.primaryChannel.messages.chatMessage.unsetReaction": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.ListReplies": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.CreateReplies": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.GetReplies": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.UpdateReplies": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.DeleteReplies": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.replies.ListHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.replies.CreateHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.replies.GetHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.replies.UpdateHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.replies.DeleteHostedContents": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.replies.GetHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.replies.UpdateHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.primaryChannel.messages.replies.DeleteHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsChannel02OperationRequestMap {
  "teams.channels.ListSharedWithTeams": TeamsGraphOperationInput<"teams.channels.ListSharedWithTeams">;
  "teams.channels.CreateSharedWithTeams": TeamsGraphOperationInput<"teams.channels.CreateSharedWithTeams">;
  "teams.channels.GetSharedWithTeams": TeamsGraphOperationInput<"teams.channels.GetSharedWithTeams">;
  "teams.channels.UpdateSharedWithTeams": TeamsGraphOperationInput<"teams.channels.UpdateSharedWithTeams">;
  "teams.channels.DeleteSharedWithTeams": TeamsGraphOperationInput<"teams.channels.DeleteSharedWithTeams">;
  "teams.channels.sharedWithTeams.ListAllowedMembers": TeamsGraphOperationInput<"teams.channels.sharedWithTeams.ListAllowedMembers">;
  "teams.channels.sharedWithTeams.GetAllowedMembers": TeamsGraphOperationInput<"teams.channels.sharedWithTeams.GetAllowedMembers">;
  "teams.channels.sharedWithTeams.allowedMembers.GetCount-5a86": TeamsGraphOperationInput<"teams.channels.sharedWithTeams.allowedMembers.GetCount-5a86">;
  "teams.channels.sharedWithTeams.GetTeam": TeamsGraphOperationInput<"teams.channels.sharedWithTeams.GetTeam">;
  "teams.channels.sharedWithTeams.GetCount-11a3": TeamsGraphOperationInput<"teams.channels.sharedWithTeams.GetCount-11a3">;
  "teams.channels.ListTabs": TeamsGraphOperationInput<"teams.channels.ListTabs">;
  "teams.channels.CreateTabs": TeamsGraphOperationInput<"teams.channels.CreateTabs">;
  "teams.channels.GetTabs": TeamsGraphOperationInput<"teams.channels.GetTabs">;
  "teams.channels.UpdateTabs": TeamsGraphOperationInput<"teams.channels.UpdateTabs">;
  "teams.channels.DeleteTabs": TeamsGraphOperationInput<"teams.channels.DeleteTabs">;
  "teams.channels.tabs.GetTeamsApp": TeamsGraphOperationInput<"teams.channels.tabs.GetTeamsApp">;
  "teams.channels.tabs.GetCount-f94d": TeamsGraphOperationInput<"teams.channels.tabs.GetCount-f94d">;
  "teams.channels.GetCount-1a82": TeamsGraphOperationInput<"teams.channels.GetCount-1a82">;
  "teams.team.channels.getAllMessages": TeamsGraphOperationInput<"teams.team.channels.getAllMessages">;
  "teams.team.channels.getAllRetainedMessages": TeamsGraphOperationInput<"teams.team.channels.getAllRetainedMessages">;
  "teams.ListIncomingChannels": TeamsGraphOperationInput<"teams.ListIncomingChannels">;
  "teams.GetIncomingChannels": TeamsGraphOperationInput<"teams.GetIncomingChannels">;
  "teams.incomingChannels.GetCount-728b": TeamsGraphOperationInput<"teams.incomingChannels.GetCount-728b">;
  "teams.GetPrimaryChannel": TeamsGraphOperationInput<"teams.GetPrimaryChannel">;
  "teams.UpdatePrimaryChannel": TeamsGraphOperationInput<"teams.UpdatePrimaryChannel">;
  "teams.DeletePrimaryChannel": TeamsGraphOperationInput<"teams.DeletePrimaryChannel">;
  "teams.primaryChannel.ListAllMembers": TeamsGraphOperationInput<"teams.primaryChannel.ListAllMembers">;
  "teams.primaryChannel.CreateAllMembers": TeamsGraphOperationInput<"teams.primaryChannel.CreateAllMembers">;
  "teams.primaryChannel.GetAllMembers": TeamsGraphOperationInput<"teams.primaryChannel.GetAllMembers">;
  "teams.primaryChannel.UpdateAllMembers": TeamsGraphOperationInput<"teams.primaryChannel.UpdateAllMembers">;
  "teams.primaryChannel.DeleteAllMembers": TeamsGraphOperationInput<"teams.primaryChannel.DeleteAllMembers">;
  "teams.primaryChannel.allMembers.GetCount-4cdd": TeamsGraphOperationInput<"teams.primaryChannel.allMembers.GetCount-4cdd">;
  "teams.team.primaryChannel.allMembers.add": TeamsGraphOperationInput<"teams.team.primaryChannel.allMembers.add">;
  "teams.team.primaryChannel.allMembers.remove": TeamsGraphOperationInput<"teams.team.primaryChannel.allMembers.remove">;
  "teams.primaryChannel.ListEnabledApps": TeamsGraphOperationInput<"teams.primaryChannel.ListEnabledApps">;
  "teams.primaryChannel.GetEnabledApps": TeamsGraphOperationInput<"teams.primaryChannel.GetEnabledApps">;
  "teams.primaryChannel.enabledApps.GetCount-412b": TeamsGraphOperationInput<"teams.primaryChannel.enabledApps.GetCount-412b">;
  "teams.primaryChannel.GetFilesFolder": TeamsGraphOperationInput<"teams.primaryChannel.GetFilesFolder">;
  "teams.primaryChannel.GetFilesFolderContent": TeamsGraphOperationInput<"teams.primaryChannel.GetFilesFolderContent">;
  "teams.primaryChannel.UpdateFilesFolderContent": TeamsGraphOperationInput<"teams.primaryChannel.UpdateFilesFolderContent">;
  "teams.primaryChannel.DeleteFilesFolderContent": TeamsGraphOperationInput<"teams.primaryChannel.DeleteFilesFolderContent">;
  "teams.primaryChannel.ListMembers": TeamsGraphOperationInput<"teams.primaryChannel.ListMembers">;
  "teams.primaryChannel.CreateMembers": TeamsGraphOperationInput<"teams.primaryChannel.CreateMembers">;
  "teams.primaryChannel.GetMembers": TeamsGraphOperationInput<"teams.primaryChannel.GetMembers">;
  "teams.primaryChannel.UpdateMembers": TeamsGraphOperationInput<"teams.primaryChannel.UpdateMembers">;
  "teams.primaryChannel.DeleteMembers": TeamsGraphOperationInput<"teams.primaryChannel.DeleteMembers">;
  "teams.primaryChannel.members.GetCount-8411": TeamsGraphOperationInput<"teams.primaryChannel.members.GetCount-8411">;
  "teams.team.primaryChannel.members.add": TeamsGraphOperationInput<"teams.team.primaryChannel.members.add">;
  "teams.team.primaryChannel.members.remove": TeamsGraphOperationInput<"teams.team.primaryChannel.members.remove">;
  "teams.primaryChannel.ListMessages": TeamsGraphOperationInput<"teams.primaryChannel.ListMessages">;
  "teams.primaryChannel.CreateMessages": TeamsGraphOperationInput<"teams.primaryChannel.CreateMessages">;
  "teams.primaryChannel.GetMessages": TeamsGraphOperationInput<"teams.primaryChannel.GetMessages">;
  "teams.primaryChannel.UpdateMessages": TeamsGraphOperationInput<"teams.primaryChannel.UpdateMessages">;
  "teams.primaryChannel.DeleteMessages": TeamsGraphOperationInput<"teams.primaryChannel.DeleteMessages">;
  "teams.primaryChannel.messages.ListHostedContents": TeamsGraphOperationInput<"teams.primaryChannel.messages.ListHostedContents">;
  "teams.primaryChannel.messages.CreateHostedContents": TeamsGraphOperationInput<"teams.primaryChannel.messages.CreateHostedContents">;
  "teams.primaryChannel.messages.GetHostedContents": TeamsGraphOperationInput<"teams.primaryChannel.messages.GetHostedContents">;
  "teams.primaryChannel.messages.UpdateHostedContents": TeamsGraphOperationInput<"teams.primaryChannel.messages.UpdateHostedContents">;
  "teams.primaryChannel.messages.DeleteHostedContents": TeamsGraphOperationInput<"teams.primaryChannel.messages.DeleteHostedContents">;
  "teams.primaryChannel.messages.GetHostedContentsContent": TeamsGraphOperationInput<"teams.primaryChannel.messages.GetHostedContentsContent">;
  "teams.primaryChannel.messages.UpdateHostedContentsContent": TeamsGraphOperationInput<"teams.primaryChannel.messages.UpdateHostedContentsContent">;
  "teams.primaryChannel.messages.DeleteHostedContentsContent": TeamsGraphOperationInput<"teams.primaryChannel.messages.DeleteHostedContentsContent">;
  "teams.primaryChannel.messages.hostedContents.GetCount-ed0a": TeamsGraphOperationInput<"teams.primaryChannel.messages.hostedContents.GetCount-ed0a">;
  "teams.team.primaryChannel.messages.chatMessage.setReaction": TeamsGraphOperationInput<"teams.team.primaryChannel.messages.chatMessage.setReaction">;
  "teams.team.primaryChannel.messages.chatMessage.softDelete": TeamsGraphOperationInput<"teams.team.primaryChannel.messages.chatMessage.softDelete">;
  "teams.team.primaryChannel.messages.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"teams.team.primaryChannel.messages.chatMessage.undoSoftDelete">;
  "teams.team.primaryChannel.messages.chatMessage.unsetReaction": TeamsGraphOperationInput<"teams.team.primaryChannel.messages.chatMessage.unsetReaction">;
  "teams.primaryChannel.messages.ListReplies": TeamsGraphOperationInput<"teams.primaryChannel.messages.ListReplies">;
  "teams.primaryChannel.messages.CreateReplies": TeamsGraphOperationInput<"teams.primaryChannel.messages.CreateReplies">;
  "teams.primaryChannel.messages.GetReplies": TeamsGraphOperationInput<"teams.primaryChannel.messages.GetReplies">;
  "teams.primaryChannel.messages.UpdateReplies": TeamsGraphOperationInput<"teams.primaryChannel.messages.UpdateReplies">;
  "teams.primaryChannel.messages.DeleteReplies": TeamsGraphOperationInput<"teams.primaryChannel.messages.DeleteReplies">;
  "teams.primaryChannel.messages.replies.ListHostedContents": TeamsGraphOperationInput<"teams.primaryChannel.messages.replies.ListHostedContents">;
  "teams.primaryChannel.messages.replies.CreateHostedContents": TeamsGraphOperationInput<"teams.primaryChannel.messages.replies.CreateHostedContents">;
  "teams.primaryChannel.messages.replies.GetHostedContents": TeamsGraphOperationInput<"teams.primaryChannel.messages.replies.GetHostedContents">;
  "teams.primaryChannel.messages.replies.UpdateHostedContents": TeamsGraphOperationInput<"teams.primaryChannel.messages.replies.UpdateHostedContents">;
  "teams.primaryChannel.messages.replies.DeleteHostedContents": TeamsGraphOperationInput<"teams.primaryChannel.messages.replies.DeleteHostedContents">;
  "teams.primaryChannel.messages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"teams.primaryChannel.messages.replies.GetHostedContentsContent">;
  "teams.primaryChannel.messages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"teams.primaryChannel.messages.replies.UpdateHostedContentsContent">;
  "teams.primaryChannel.messages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"teams.primaryChannel.messages.replies.DeleteHostedContentsContent">;
}

export interface TeamsGraphTeamsChannel02GeneratedClient {
  TeamsChannelsListSharedWithTeams(...args: TeamsGraphOperationArgs<"teams.channels.ListSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teams.channels.ListSharedWithTeams"]>;
  TeamsChannelsCreateSharedWithTeams(...args: TeamsGraphOperationArgs<"teams.channels.CreateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teams.channels.CreateSharedWithTeams"]>;
  TeamsChannelsGetSharedWithTeams(...args: TeamsGraphOperationArgs<"teams.channels.GetSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teams.channels.GetSharedWithTeams"]>;
  TeamsChannelsUpdateSharedWithTeams(...args: TeamsGraphOperationArgs<"teams.channels.UpdateSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teams.channels.UpdateSharedWithTeams"]>;
  TeamsChannelsDeleteSharedWithTeams(...args: TeamsGraphOperationArgs<"teams.channels.DeleteSharedWithTeams">): Promise<TeamsGraphOperationResponseMap["teams.channels.DeleteSharedWithTeams"]>;
  TeamsChannelsSharedWithTeamsListAllowedMembers(...args: TeamsGraphOperationArgs<"teams.channels.sharedWithTeams.ListAllowedMembers">): Promise<TeamsGraphOperationResponseMap["teams.channels.sharedWithTeams.ListAllowedMembers"]>;
  TeamsChannelsSharedWithTeamsGetAllowedMembers(...args: TeamsGraphOperationArgs<"teams.channels.sharedWithTeams.GetAllowedMembers">): Promise<TeamsGraphOperationResponseMap["teams.channels.sharedWithTeams.GetAllowedMembers"]>;
  TeamsChannelsSharedWithTeamsAllowedMembersGetCount5a86(...args: TeamsGraphOperationArgs<"teams.channels.sharedWithTeams.allowedMembers.GetCount-5a86">): Promise<TeamsGraphOperationResponseMap["teams.channels.sharedWithTeams.allowedMembers.GetCount-5a86"]>;
  TeamsChannelsSharedWithTeamsGetTeam(...args: TeamsGraphOperationArgs<"teams.channels.sharedWithTeams.GetTeam">): Promise<TeamsGraphOperationResponseMap["teams.channels.sharedWithTeams.GetTeam"]>;
  TeamsChannelsSharedWithTeamsGetCount11a3(...args: TeamsGraphOperationArgs<"teams.channels.sharedWithTeams.GetCount-11a3">): Promise<TeamsGraphOperationResponseMap["teams.channels.sharedWithTeams.GetCount-11a3"]>;
  TeamsChannelsListTabs(...args: TeamsGraphOperationArgs<"teams.channels.ListTabs">): Promise<TeamsGraphOperationResponseMap["teams.channels.ListTabs"]>;
  TeamsChannelsCreateTabs(...args: TeamsGraphOperationArgs<"teams.channels.CreateTabs">): Promise<TeamsGraphOperationResponseMap["teams.channels.CreateTabs"]>;
  TeamsChannelsGetTabs(...args: TeamsGraphOperationArgs<"teams.channels.GetTabs">): Promise<TeamsGraphOperationResponseMap["teams.channels.GetTabs"]>;
  TeamsChannelsUpdateTabs(...args: TeamsGraphOperationArgs<"teams.channels.UpdateTabs">): Promise<TeamsGraphOperationResponseMap["teams.channels.UpdateTabs"]>;
  TeamsChannelsDeleteTabs(...args: TeamsGraphOperationArgs<"teams.channels.DeleteTabs">): Promise<TeamsGraphOperationResponseMap["teams.channels.DeleteTabs"]>;
  TeamsChannelsTabsGetTeamsApp(...args: TeamsGraphOperationArgs<"teams.channels.tabs.GetTeamsApp">): Promise<TeamsGraphOperationResponseMap["teams.channels.tabs.GetTeamsApp"]>;
  TeamsChannelsTabsGetCountF94d(...args: TeamsGraphOperationArgs<"teams.channels.tabs.GetCount-f94d">): Promise<TeamsGraphOperationResponseMap["teams.channels.tabs.GetCount-f94d"]>;
  TeamsChannelsGetCount1a82(...args: TeamsGraphOperationArgs<"teams.channels.GetCount-1a82">): Promise<TeamsGraphOperationResponseMap["teams.channels.GetCount-1a82"]>;
  TeamsTeamChannelsGetAllMessages(...args: TeamsGraphOperationArgs<"teams.team.channels.getAllMessages">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.getAllMessages"]>;
  TeamsTeamChannelsGetAllRetainedMessages(...args: TeamsGraphOperationArgs<"teams.team.channels.getAllRetainedMessages">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.getAllRetainedMessages"]>;
  TeamsListIncomingChannels(...args: TeamsGraphOperationArgs<"teams.ListIncomingChannels">): Promise<TeamsGraphOperationResponseMap["teams.ListIncomingChannels"]>;
  TeamsGetIncomingChannels(...args: TeamsGraphOperationArgs<"teams.GetIncomingChannels">): Promise<TeamsGraphOperationResponseMap["teams.GetIncomingChannels"]>;
  TeamsIncomingChannelsGetCount728b(...args: TeamsGraphOperationArgs<"teams.incomingChannels.GetCount-728b">): Promise<TeamsGraphOperationResponseMap["teams.incomingChannels.GetCount-728b"]>;
  TeamsGetPrimaryChannel(...args: TeamsGraphOperationArgs<"teams.GetPrimaryChannel">): Promise<TeamsGraphOperationResponseMap["teams.GetPrimaryChannel"]>;
  TeamsUpdatePrimaryChannel(...args: TeamsGraphOperationArgs<"teams.UpdatePrimaryChannel">): Promise<TeamsGraphOperationResponseMap["teams.UpdatePrimaryChannel"]>;
  TeamsDeletePrimaryChannel(...args: TeamsGraphOperationArgs<"teams.DeletePrimaryChannel">): Promise<TeamsGraphOperationResponseMap["teams.DeletePrimaryChannel"]>;
  TeamsPrimaryChannelListAllMembers(...args: TeamsGraphOperationArgs<"teams.primaryChannel.ListAllMembers">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.ListAllMembers"]>;
  TeamsPrimaryChannelCreateAllMembers(...args: TeamsGraphOperationArgs<"teams.primaryChannel.CreateAllMembers">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.CreateAllMembers"]>;
  TeamsPrimaryChannelGetAllMembers(...args: TeamsGraphOperationArgs<"teams.primaryChannel.GetAllMembers">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.GetAllMembers"]>;
  TeamsPrimaryChannelUpdateAllMembers(...args: TeamsGraphOperationArgs<"teams.primaryChannel.UpdateAllMembers">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.UpdateAllMembers"]>;
  TeamsPrimaryChannelDeleteAllMembers(...args: TeamsGraphOperationArgs<"teams.primaryChannel.DeleteAllMembers">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.DeleteAllMembers"]>;
  TeamsPrimaryChannelAllMembersGetCount4cdd(...args: TeamsGraphOperationArgs<"teams.primaryChannel.allMembers.GetCount-4cdd">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.allMembers.GetCount-4cdd"]>;
  TeamsTeamPrimaryChannelAllMembersAdd(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.allMembers.add">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.allMembers.add"]>;
  TeamsTeamPrimaryChannelAllMembersRemove(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.allMembers.remove">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.allMembers.remove"]>;
  TeamsPrimaryChannelListEnabledApps(...args: TeamsGraphOperationArgs<"teams.primaryChannel.ListEnabledApps">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.ListEnabledApps"]>;
  TeamsPrimaryChannelGetEnabledApps(...args: TeamsGraphOperationArgs<"teams.primaryChannel.GetEnabledApps">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.GetEnabledApps"]>;
  TeamsPrimaryChannelEnabledAppsGetCount412b(...args: TeamsGraphOperationArgs<"teams.primaryChannel.enabledApps.GetCount-412b">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.enabledApps.GetCount-412b"]>;
  TeamsPrimaryChannelGetFilesFolder(...args: TeamsGraphOperationArgs<"teams.primaryChannel.GetFilesFolder">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.GetFilesFolder"]>;
  TeamsPrimaryChannelGetFilesFolderContent(...args: TeamsGraphOperationArgs<"teams.primaryChannel.GetFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.GetFilesFolderContent"]>;
  TeamsPrimaryChannelUpdateFilesFolderContent(...args: TeamsGraphOperationArgs<"teams.primaryChannel.UpdateFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.UpdateFilesFolderContent"]>;
  TeamsPrimaryChannelDeleteFilesFolderContent(...args: TeamsGraphOperationArgs<"teams.primaryChannel.DeleteFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.DeleteFilesFolderContent"]>;
  TeamsPrimaryChannelListMembers(...args: TeamsGraphOperationArgs<"teams.primaryChannel.ListMembers">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.ListMembers"]>;
  TeamsPrimaryChannelCreateMembers(...args: TeamsGraphOperationArgs<"teams.primaryChannel.CreateMembers">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.CreateMembers"]>;
  TeamsPrimaryChannelGetMembers(...args: TeamsGraphOperationArgs<"teams.primaryChannel.GetMembers">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.GetMembers"]>;
  TeamsPrimaryChannelUpdateMembers(...args: TeamsGraphOperationArgs<"teams.primaryChannel.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.UpdateMembers"]>;
  TeamsPrimaryChannelDeleteMembers(...args: TeamsGraphOperationArgs<"teams.primaryChannel.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.DeleteMembers"]>;
  TeamsPrimaryChannelMembersGetCount8411(...args: TeamsGraphOperationArgs<"teams.primaryChannel.members.GetCount-8411">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.members.GetCount-8411"]>;
  TeamsTeamPrimaryChannelMembersAdd(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.members.add">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.members.add"]>;
  TeamsTeamPrimaryChannelMembersRemove(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.members.remove">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.members.remove"]>;
  TeamsPrimaryChannelListMessages(...args: TeamsGraphOperationArgs<"teams.primaryChannel.ListMessages">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.ListMessages"]>;
  TeamsPrimaryChannelCreateMessages(...args: TeamsGraphOperationArgs<"teams.primaryChannel.CreateMessages">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.CreateMessages"]>;
  TeamsPrimaryChannelGetMessages(...args: TeamsGraphOperationArgs<"teams.primaryChannel.GetMessages">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.GetMessages"]>;
  TeamsPrimaryChannelUpdateMessages(...args: TeamsGraphOperationArgs<"teams.primaryChannel.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.UpdateMessages"]>;
  TeamsPrimaryChannelDeleteMessages(...args: TeamsGraphOperationArgs<"teams.primaryChannel.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.DeleteMessages"]>;
  TeamsPrimaryChannelMessagesListHostedContents(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.ListHostedContents"]>;
  TeamsPrimaryChannelMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.CreateHostedContents"]>;
  TeamsPrimaryChannelMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.GetHostedContents"]>;
  TeamsPrimaryChannelMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.UpdateHostedContents"]>;
  TeamsPrimaryChannelMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.DeleteHostedContents"]>;
  TeamsPrimaryChannelMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.GetHostedContentsContent"]>;
  TeamsPrimaryChannelMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.UpdateHostedContentsContent"]>;
  TeamsPrimaryChannelMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.DeleteHostedContentsContent"]>;
  TeamsPrimaryChannelMessagesHostedContentsGetCountEd0a(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.hostedContents.GetCount-ed0a">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.hostedContents.GetCount-ed0a"]>;
  TeamsTeamPrimaryChannelMessagesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.messages.chatMessage.setReaction"]>;
  TeamsTeamPrimaryChannelMessagesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.messages.chatMessage.softDelete"]>;
  TeamsTeamPrimaryChannelMessagesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.messages.chatMessage.undoSoftDelete"]>;
  TeamsTeamPrimaryChannelMessagesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["teams.team.primaryChannel.messages.chatMessage.unsetReaction"]>;
  TeamsPrimaryChannelMessagesListReplies(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.ListReplies"]>;
  TeamsPrimaryChannelMessagesCreateReplies(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.CreateReplies"]>;
  TeamsPrimaryChannelMessagesGetReplies(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.GetReplies"]>;
  TeamsPrimaryChannelMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.UpdateReplies"]>;
  TeamsPrimaryChannelMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.DeleteReplies"]>;
  TeamsPrimaryChannelMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.replies.ListHostedContents"]>;
  TeamsPrimaryChannelMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.replies.CreateHostedContents"]>;
  TeamsPrimaryChannelMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.replies.GetHostedContents"]>;
  TeamsPrimaryChannelMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.replies.UpdateHostedContents"]>;
  TeamsPrimaryChannelMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.replies.DeleteHostedContents"]>;
  TeamsPrimaryChannelMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.replies.GetHostedContentsContent"]>;
  TeamsPrimaryChannelMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.replies.UpdateHostedContentsContent"]>;
  TeamsPrimaryChannelMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teams.primaryChannel.messages.replies.DeleteHostedContentsContent"]>;
}

export const TeamsGraphTeamsChannel02GeneratedFunctionNames = [
  "TeamsChannelsListSharedWithTeams",
  "TeamsChannelsCreateSharedWithTeams",
  "TeamsChannelsGetSharedWithTeams",
  "TeamsChannelsUpdateSharedWithTeams",
  "TeamsChannelsDeleteSharedWithTeams",
  "TeamsChannelsSharedWithTeamsListAllowedMembers",
  "TeamsChannelsSharedWithTeamsGetAllowedMembers",
  "TeamsChannelsSharedWithTeamsAllowedMembersGetCount5a86",
  "TeamsChannelsSharedWithTeamsGetTeam",
  "TeamsChannelsSharedWithTeamsGetCount11a3",
  "TeamsChannelsListTabs",
  "TeamsChannelsCreateTabs",
  "TeamsChannelsGetTabs",
  "TeamsChannelsUpdateTabs",
  "TeamsChannelsDeleteTabs",
  "TeamsChannelsTabsGetTeamsApp",
  "TeamsChannelsTabsGetCountF94d",
  "TeamsChannelsGetCount1a82",
  "TeamsTeamChannelsGetAllMessages",
  "TeamsTeamChannelsGetAllRetainedMessages",
  "TeamsListIncomingChannels",
  "TeamsGetIncomingChannels",
  "TeamsIncomingChannelsGetCount728b",
  "TeamsGetPrimaryChannel",
  "TeamsUpdatePrimaryChannel",
  "TeamsDeletePrimaryChannel",
  "TeamsPrimaryChannelListAllMembers",
  "TeamsPrimaryChannelCreateAllMembers",
  "TeamsPrimaryChannelGetAllMembers",
  "TeamsPrimaryChannelUpdateAllMembers",
  "TeamsPrimaryChannelDeleteAllMembers",
  "TeamsPrimaryChannelAllMembersGetCount4cdd",
  "TeamsTeamPrimaryChannelAllMembersAdd",
  "TeamsTeamPrimaryChannelAllMembersRemove",
  "TeamsPrimaryChannelListEnabledApps",
  "TeamsPrimaryChannelGetEnabledApps",
  "TeamsPrimaryChannelEnabledAppsGetCount412b",
  "TeamsPrimaryChannelGetFilesFolder",
  "TeamsPrimaryChannelGetFilesFolderContent",
  "TeamsPrimaryChannelUpdateFilesFolderContent",
  "TeamsPrimaryChannelDeleteFilesFolderContent",
  "TeamsPrimaryChannelListMembers",
  "TeamsPrimaryChannelCreateMembers",
  "TeamsPrimaryChannelGetMembers",
  "TeamsPrimaryChannelUpdateMembers",
  "TeamsPrimaryChannelDeleteMembers",
  "TeamsPrimaryChannelMembersGetCount8411",
  "TeamsTeamPrimaryChannelMembersAdd",
  "TeamsTeamPrimaryChannelMembersRemove",
  "TeamsPrimaryChannelListMessages",
  "TeamsPrimaryChannelCreateMessages",
  "TeamsPrimaryChannelGetMessages",
  "TeamsPrimaryChannelUpdateMessages",
  "TeamsPrimaryChannelDeleteMessages",
  "TeamsPrimaryChannelMessagesListHostedContents",
  "TeamsPrimaryChannelMessagesCreateHostedContents",
  "TeamsPrimaryChannelMessagesGetHostedContents",
  "TeamsPrimaryChannelMessagesUpdateHostedContents",
  "TeamsPrimaryChannelMessagesDeleteHostedContents",
  "TeamsPrimaryChannelMessagesGetHostedContentsContent",
  "TeamsPrimaryChannelMessagesUpdateHostedContentsContent",
  "TeamsPrimaryChannelMessagesDeleteHostedContentsContent",
  "TeamsPrimaryChannelMessagesHostedContentsGetCountEd0a",
  "TeamsTeamPrimaryChannelMessagesChatMessageSetReaction",
  "TeamsTeamPrimaryChannelMessagesChatMessageSoftDelete",
  "TeamsTeamPrimaryChannelMessagesChatMessageUndoSoftDelete",
  "TeamsTeamPrimaryChannelMessagesChatMessageUnsetReaction",
  "TeamsPrimaryChannelMessagesListReplies",
  "TeamsPrimaryChannelMessagesCreateReplies",
  "TeamsPrimaryChannelMessagesGetReplies",
  "TeamsPrimaryChannelMessagesUpdateReplies",
  "TeamsPrimaryChannelMessagesDeleteReplies",
  "TeamsPrimaryChannelMessagesRepliesListHostedContents",
  "TeamsPrimaryChannelMessagesRepliesCreateHostedContents",
  "TeamsPrimaryChannelMessagesRepliesGetHostedContents",
  "TeamsPrimaryChannelMessagesRepliesUpdateHostedContents",
  "TeamsPrimaryChannelMessagesRepliesDeleteHostedContents",
  "TeamsPrimaryChannelMessagesRepliesGetHostedContentsContent",
  "TeamsPrimaryChannelMessagesRepliesUpdateHostedContentsContent",
  "TeamsPrimaryChannelMessagesRepliesDeleteHostedContentsContent"
] as const satisfies readonly (keyof TeamsGraphTeamsChannel02GeneratedClient)[];

export function createTeamsGraphTeamsChannel02GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsChannel02GeneratedClient {
  return {
    TeamsChannelsListSharedWithTeams: (...args) => callOperation("teams.channels.ListSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teams.channels.ListSharedWithTeams">)),
    TeamsChannelsCreateSharedWithTeams: (...args) => callOperation("teams.channels.CreateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teams.channels.CreateSharedWithTeams">)),
    TeamsChannelsGetSharedWithTeams: (...args) => callOperation("teams.channels.GetSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teams.channels.GetSharedWithTeams">)),
    TeamsChannelsUpdateSharedWithTeams: (...args) => callOperation("teams.channels.UpdateSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teams.channels.UpdateSharedWithTeams">)),
    TeamsChannelsDeleteSharedWithTeams: (...args) => callOperation("teams.channels.DeleteSharedWithTeams", ...(args as TeamsGraphOperationArgs<"teams.channels.DeleteSharedWithTeams">)),
    TeamsChannelsSharedWithTeamsListAllowedMembers: (...args) => callOperation("teams.channels.sharedWithTeams.ListAllowedMembers", ...(args as TeamsGraphOperationArgs<"teams.channels.sharedWithTeams.ListAllowedMembers">)),
    TeamsChannelsSharedWithTeamsGetAllowedMembers: (...args) => callOperation("teams.channels.sharedWithTeams.GetAllowedMembers", ...(args as TeamsGraphOperationArgs<"teams.channels.sharedWithTeams.GetAllowedMembers">)),
    TeamsChannelsSharedWithTeamsAllowedMembersGetCount5a86: (...args) => callOperation("teams.channels.sharedWithTeams.allowedMembers.GetCount-5a86", ...(args as TeamsGraphOperationArgs<"teams.channels.sharedWithTeams.allowedMembers.GetCount-5a86">)),
    TeamsChannelsSharedWithTeamsGetTeam: (...args) => callOperation("teams.channels.sharedWithTeams.GetTeam", ...(args as TeamsGraphOperationArgs<"teams.channels.sharedWithTeams.GetTeam">)),
    TeamsChannelsSharedWithTeamsGetCount11a3: (...args) => callOperation("teams.channels.sharedWithTeams.GetCount-11a3", ...(args as TeamsGraphOperationArgs<"teams.channels.sharedWithTeams.GetCount-11a3">)),
    TeamsChannelsListTabs: (...args) => callOperation("teams.channels.ListTabs", ...(args as TeamsGraphOperationArgs<"teams.channels.ListTabs">)),
    TeamsChannelsCreateTabs: (...args) => callOperation("teams.channels.CreateTabs", ...(args as TeamsGraphOperationArgs<"teams.channels.CreateTabs">)),
    TeamsChannelsGetTabs: (...args) => callOperation("teams.channels.GetTabs", ...(args as TeamsGraphOperationArgs<"teams.channels.GetTabs">)),
    TeamsChannelsUpdateTabs: (...args) => callOperation("teams.channels.UpdateTabs", ...(args as TeamsGraphOperationArgs<"teams.channels.UpdateTabs">)),
    TeamsChannelsDeleteTabs: (...args) => callOperation("teams.channels.DeleteTabs", ...(args as TeamsGraphOperationArgs<"teams.channels.DeleteTabs">)),
    TeamsChannelsTabsGetTeamsApp: (...args) => callOperation("teams.channels.tabs.GetTeamsApp", ...(args as TeamsGraphOperationArgs<"teams.channels.tabs.GetTeamsApp">)),
    TeamsChannelsTabsGetCountF94d: (...args) => callOperation("teams.channels.tabs.GetCount-f94d", ...(args as TeamsGraphOperationArgs<"teams.channels.tabs.GetCount-f94d">)),
    TeamsChannelsGetCount1a82: (...args) => callOperation("teams.channels.GetCount-1a82", ...(args as TeamsGraphOperationArgs<"teams.channels.GetCount-1a82">)),
    TeamsTeamChannelsGetAllMessages: (...args) => callOperation("teams.team.channels.getAllMessages", ...(args as TeamsGraphOperationArgs<"teams.team.channels.getAllMessages">)),
    TeamsTeamChannelsGetAllRetainedMessages: (...args) => callOperation("teams.team.channels.getAllRetainedMessages", ...(args as TeamsGraphOperationArgs<"teams.team.channels.getAllRetainedMessages">)),
    TeamsListIncomingChannels: (...args) => callOperation("teams.ListIncomingChannels", ...(args as TeamsGraphOperationArgs<"teams.ListIncomingChannels">)),
    TeamsGetIncomingChannels: (...args) => callOperation("teams.GetIncomingChannels", ...(args as TeamsGraphOperationArgs<"teams.GetIncomingChannels">)),
    TeamsIncomingChannelsGetCount728b: (...args) => callOperation("teams.incomingChannels.GetCount-728b", ...(args as TeamsGraphOperationArgs<"teams.incomingChannels.GetCount-728b">)),
    TeamsGetPrimaryChannel: (...args) => callOperation("teams.GetPrimaryChannel", ...(args as TeamsGraphOperationArgs<"teams.GetPrimaryChannel">)),
    TeamsUpdatePrimaryChannel: (...args) => callOperation("teams.UpdatePrimaryChannel", ...(args as TeamsGraphOperationArgs<"teams.UpdatePrimaryChannel">)),
    TeamsDeletePrimaryChannel: (...args) => callOperation("teams.DeletePrimaryChannel", ...(args as TeamsGraphOperationArgs<"teams.DeletePrimaryChannel">)),
    TeamsPrimaryChannelListAllMembers: (...args) => callOperation("teams.primaryChannel.ListAllMembers", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.ListAllMembers">)),
    TeamsPrimaryChannelCreateAllMembers: (...args) => callOperation("teams.primaryChannel.CreateAllMembers", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.CreateAllMembers">)),
    TeamsPrimaryChannelGetAllMembers: (...args) => callOperation("teams.primaryChannel.GetAllMembers", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.GetAllMembers">)),
    TeamsPrimaryChannelUpdateAllMembers: (...args) => callOperation("teams.primaryChannel.UpdateAllMembers", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.UpdateAllMembers">)),
    TeamsPrimaryChannelDeleteAllMembers: (...args) => callOperation("teams.primaryChannel.DeleteAllMembers", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.DeleteAllMembers">)),
    TeamsPrimaryChannelAllMembersGetCount4cdd: (...args) => callOperation("teams.primaryChannel.allMembers.GetCount-4cdd", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.allMembers.GetCount-4cdd">)),
    TeamsTeamPrimaryChannelAllMembersAdd: (...args) => callOperation("teams.team.primaryChannel.allMembers.add", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.allMembers.add">)),
    TeamsTeamPrimaryChannelAllMembersRemove: (...args) => callOperation("teams.team.primaryChannel.allMembers.remove", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.allMembers.remove">)),
    TeamsPrimaryChannelListEnabledApps: (...args) => callOperation("teams.primaryChannel.ListEnabledApps", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.ListEnabledApps">)),
    TeamsPrimaryChannelGetEnabledApps: (...args) => callOperation("teams.primaryChannel.GetEnabledApps", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.GetEnabledApps">)),
    TeamsPrimaryChannelEnabledAppsGetCount412b: (...args) => callOperation("teams.primaryChannel.enabledApps.GetCount-412b", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.enabledApps.GetCount-412b">)),
    TeamsPrimaryChannelGetFilesFolder: (...args) => callOperation("teams.primaryChannel.GetFilesFolder", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.GetFilesFolder">)),
    TeamsPrimaryChannelGetFilesFolderContent: (...args) => callOperation("teams.primaryChannel.GetFilesFolderContent", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.GetFilesFolderContent">)),
    TeamsPrimaryChannelUpdateFilesFolderContent: (...args) => callOperation("teams.primaryChannel.UpdateFilesFolderContent", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.UpdateFilesFolderContent">)),
    TeamsPrimaryChannelDeleteFilesFolderContent: (...args) => callOperation("teams.primaryChannel.DeleteFilesFolderContent", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.DeleteFilesFolderContent">)),
    TeamsPrimaryChannelListMembers: (...args) => callOperation("teams.primaryChannel.ListMembers", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.ListMembers">)),
    TeamsPrimaryChannelCreateMembers: (...args) => callOperation("teams.primaryChannel.CreateMembers", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.CreateMembers">)),
    TeamsPrimaryChannelGetMembers: (...args) => callOperation("teams.primaryChannel.GetMembers", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.GetMembers">)),
    TeamsPrimaryChannelUpdateMembers: (...args) => callOperation("teams.primaryChannel.UpdateMembers", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.UpdateMembers">)),
    TeamsPrimaryChannelDeleteMembers: (...args) => callOperation("teams.primaryChannel.DeleteMembers", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.DeleteMembers">)),
    TeamsPrimaryChannelMembersGetCount8411: (...args) => callOperation("teams.primaryChannel.members.GetCount-8411", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.members.GetCount-8411">)),
    TeamsTeamPrimaryChannelMembersAdd: (...args) => callOperation("teams.team.primaryChannel.members.add", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.members.add">)),
    TeamsTeamPrimaryChannelMembersRemove: (...args) => callOperation("teams.team.primaryChannel.members.remove", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.members.remove">)),
    TeamsPrimaryChannelListMessages: (...args) => callOperation("teams.primaryChannel.ListMessages", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.ListMessages">)),
    TeamsPrimaryChannelCreateMessages: (...args) => callOperation("teams.primaryChannel.CreateMessages", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.CreateMessages">)),
    TeamsPrimaryChannelGetMessages: (...args) => callOperation("teams.primaryChannel.GetMessages", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.GetMessages">)),
    TeamsPrimaryChannelUpdateMessages: (...args) => callOperation("teams.primaryChannel.UpdateMessages", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.UpdateMessages">)),
    TeamsPrimaryChannelDeleteMessages: (...args) => callOperation("teams.primaryChannel.DeleteMessages", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.DeleteMessages">)),
    TeamsPrimaryChannelMessagesListHostedContents: (...args) => callOperation("teams.primaryChannel.messages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.ListHostedContents">)),
    TeamsPrimaryChannelMessagesCreateHostedContents: (...args) => callOperation("teams.primaryChannel.messages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.CreateHostedContents">)),
    TeamsPrimaryChannelMessagesGetHostedContents: (...args) => callOperation("teams.primaryChannel.messages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.GetHostedContents">)),
    TeamsPrimaryChannelMessagesUpdateHostedContents: (...args) => callOperation("teams.primaryChannel.messages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.UpdateHostedContents">)),
    TeamsPrimaryChannelMessagesDeleteHostedContents: (...args) => callOperation("teams.primaryChannel.messages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.DeleteHostedContents">)),
    TeamsPrimaryChannelMessagesGetHostedContentsContent: (...args) => callOperation("teams.primaryChannel.messages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.GetHostedContentsContent">)),
    TeamsPrimaryChannelMessagesUpdateHostedContentsContent: (...args) => callOperation("teams.primaryChannel.messages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.UpdateHostedContentsContent">)),
    TeamsPrimaryChannelMessagesDeleteHostedContentsContent: (...args) => callOperation("teams.primaryChannel.messages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.DeleteHostedContentsContent">)),
    TeamsPrimaryChannelMessagesHostedContentsGetCountEd0a: (...args) => callOperation("teams.primaryChannel.messages.hostedContents.GetCount-ed0a", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.hostedContents.GetCount-ed0a">)),
    TeamsTeamPrimaryChannelMessagesChatMessageSetReaction: (...args) => callOperation("teams.team.primaryChannel.messages.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.setReaction">)),
    TeamsTeamPrimaryChannelMessagesChatMessageSoftDelete: (...args) => callOperation("teams.team.primaryChannel.messages.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.softDelete">)),
    TeamsTeamPrimaryChannelMessagesChatMessageUndoSoftDelete: (...args) => callOperation("teams.team.primaryChannel.messages.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.undoSoftDelete">)),
    TeamsTeamPrimaryChannelMessagesChatMessageUnsetReaction: (...args) => callOperation("teams.team.primaryChannel.messages.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"teams.team.primaryChannel.messages.chatMessage.unsetReaction">)),
    TeamsPrimaryChannelMessagesListReplies: (...args) => callOperation("teams.primaryChannel.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.ListReplies">)),
    TeamsPrimaryChannelMessagesCreateReplies: (...args) => callOperation("teams.primaryChannel.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.CreateReplies">)),
    TeamsPrimaryChannelMessagesGetReplies: (...args) => callOperation("teams.primaryChannel.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.GetReplies">)),
    TeamsPrimaryChannelMessagesUpdateReplies: (...args) => callOperation("teams.primaryChannel.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.UpdateReplies">)),
    TeamsPrimaryChannelMessagesDeleteReplies: (...args) => callOperation("teams.primaryChannel.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.DeleteReplies">)),
    TeamsPrimaryChannelMessagesRepliesListHostedContents: (...args) => callOperation("teams.primaryChannel.messages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.ListHostedContents">)),
    TeamsPrimaryChannelMessagesRepliesCreateHostedContents: (...args) => callOperation("teams.primaryChannel.messages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.CreateHostedContents">)),
    TeamsPrimaryChannelMessagesRepliesGetHostedContents: (...args) => callOperation("teams.primaryChannel.messages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.GetHostedContents">)),
    TeamsPrimaryChannelMessagesRepliesUpdateHostedContents: (...args) => callOperation("teams.primaryChannel.messages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.UpdateHostedContents">)),
    TeamsPrimaryChannelMessagesRepliesDeleteHostedContents: (...args) => callOperation("teams.primaryChannel.messages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.DeleteHostedContents">)),
    TeamsPrimaryChannelMessagesRepliesGetHostedContentsContent: (...args) => callOperation("teams.primaryChannel.messages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.GetHostedContentsContent">)),
    TeamsPrimaryChannelMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("teams.primaryChannel.messages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.UpdateHostedContentsContent">)),
    TeamsPrimaryChannelMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("teams.primaryChannel.messages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teams.primaryChannel.messages.replies.DeleteHostedContentsContent">)),
  };
}
