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
export const TeamsGraphUsersTeam01OperationKeys = [
  "users.ListJoinedTeams",
  "users.CreateJoinedTeams",
  "users.GetJoinedTeams",
  "users.UpdateJoinedTeams",
  "users.DeleteJoinedTeams",
  "users.joinedTeams.ListAllChannels",
  "users.joinedTeams.GetAllChannels",
  "users.joinedTeams.allChannels.GetCount-33d5",
  "users.joinedTeams.ListChannels",
  "users.joinedTeams.CreateChannels",
  "users.joinedTeams.GetChannels",
  "users.joinedTeams.UpdateChannels",
  "users.joinedTeams.DeleteChannels",
  "users.joinedTeams.channels.ListAllMembers",
  "users.joinedTeams.channels.CreateAllMembers",
  "users.joinedTeams.channels.GetAllMembers",
  "users.joinedTeams.channels.UpdateAllMembers",
  "users.joinedTeams.channels.DeleteAllMembers",
  "users.joinedTeams.channels.allMembers.GetCount-12c2",
  "users.user.joinedTeams.team.channels.channel.allMembers.add",
  "users.user.joinedTeams.team.channels.channel.allMembers.remove",
  "users.joinedTeams.channels.ListEnabledApps",
  "users.joinedTeams.channels.GetEnabledApps",
  "users.joinedTeams.channels.enabledApps.GetCount-0dff",
  "users.joinedTeams.channels.GetFilesFolder",
  "users.joinedTeams.channels.GetFilesFolderContent",
  "users.joinedTeams.channels.UpdateFilesFolderContent",
  "users.joinedTeams.channels.DeleteFilesFolderContent",
  "users.joinedTeams.channels.ListMembers",
  "users.joinedTeams.channels.CreateMembers",
  "users.joinedTeams.channels.GetMembers",
  "users.joinedTeams.channels.UpdateMembers",
  "users.joinedTeams.channels.DeleteMembers",
  "users.joinedTeams.channels.members.GetCount-ac8d",
  "users.user.joinedTeams.team.channels.channel.members.add",
  "users.user.joinedTeams.team.channels.channel.members.remove",
  "users.joinedTeams.channels.ListMessages",
  "users.joinedTeams.channels.CreateMessages",
  "users.joinedTeams.channels.GetMessages",
  "users.joinedTeams.channels.UpdateMessages",
  "users.joinedTeams.channels.DeleteMessages",
  "users.joinedTeams.channels.messages.ListHostedContents",
  "users.joinedTeams.channels.messages.CreateHostedContents",
  "users.joinedTeams.channels.messages.GetHostedContents",
  "users.joinedTeams.channels.messages.UpdateHostedContents",
  "users.joinedTeams.channels.messages.DeleteHostedContents",
  "users.joinedTeams.channels.messages.GetHostedContentsContent",
  "users.joinedTeams.channels.messages.UpdateHostedContentsContent",
  "users.joinedTeams.channels.messages.DeleteHostedContentsContent",
  "users.joinedTeams.channels.messages.hostedContents.GetCount-a414",
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.setReaction",
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.softDelete",
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete",
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction",
  "users.joinedTeams.channels.messages.ListReplies",
  "users.joinedTeams.channels.messages.CreateReplies",
  "users.joinedTeams.channels.messages.GetReplies",
  "users.joinedTeams.channels.messages.UpdateReplies",
  "users.joinedTeams.channels.messages.DeleteReplies",
  "users.joinedTeams.channels.messages.replies.ListHostedContents",
  "users.joinedTeams.channels.messages.replies.CreateHostedContents",
  "users.joinedTeams.channels.messages.replies.GetHostedContents",
  "users.joinedTeams.channels.messages.replies.UpdateHostedContents",
  "users.joinedTeams.channels.messages.replies.DeleteHostedContents",
  "users.joinedTeams.channels.messages.replies.GetHostedContentsContent",
  "users.joinedTeams.channels.messages.replies.UpdateHostedContentsContent",
  "users.joinedTeams.channels.messages.replies.DeleteHostedContentsContent",
  "users.joinedTeams.channels.messages.replies.hostedContents.GetCount-9464",
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction",
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete",
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete",
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction",
  "users.joinedTeams.channels.messages.replies.GetCount-3de6",
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta",
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote",
  "users.joinedTeams.channels.messages.GetCount-9955",
  "users.user.joinedTeams.team.channels.channel.messages.delta",
  "users.user.joinedTeams.team.channels.channel.messages.replyWithQuote",
  "users.user.joinedTeams.team.channels.channel.archive",
  "users.user.joinedTeams.team.channels.channel.completeMigration"
] as const;
export type TeamsGraphUsersTeam01OperationKey = typeof TeamsGraphUsersTeam01OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphUsersTeam01OperationPathParamMap {
  "users.ListJoinedTeams": { "user-id": TeamsGraphPathParamValue };
  "users.CreateJoinedTeams": { "user-id": TeamsGraphPathParamValue };
  "users.GetJoinedTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.UpdateJoinedTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.DeleteJoinedTeams": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.ListAllChannels": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetAllChannels": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.allChannels.GetCount-33d5": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.ListChannels": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.CreateChannels": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue };
  "users.joinedTeams.GetChannels": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.UpdateChannels": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.DeleteChannels": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.ListAllMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.CreateAllMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.GetAllMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.UpdateAllMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.DeleteAllMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.allMembers.GetCount-12c2": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.allMembers.add": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.allMembers.remove": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.ListEnabledApps": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.GetEnabledApps": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsApp-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.enabledApps.GetCount-0dff": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.GetFilesFolder": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.GetFilesFolderContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.UpdateFilesFolderContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.DeleteFilesFolderContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.ListMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.CreateMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.GetMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.UpdateMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.DeleteMembers": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.members.GetCount-ac8d": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.members.add": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.members.remove": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.ListMessages": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.CreateMessages": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.GetMessages": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.UpdateMessages": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.DeleteMessages": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.ListHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.CreateHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.GetHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.UpdateHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.DeleteHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.GetHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.UpdateHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.DeleteHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.hostedContents.GetCount-a414": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.setReaction": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.softDelete": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.ListReplies": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.CreateReplies": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.GetReplies": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.UpdateReplies": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.DeleteReplies": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.replies.ListHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.replies.CreateHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.replies.GetHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.replies.UpdateHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.replies.DeleteHostedContents": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.replies.GetHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.replies.UpdateHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.replies.DeleteHostedContentsContent": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.replies.hostedContents.GetCount-9464": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.replies.GetCount-3de6": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "users.joinedTeams.channels.messages.GetCount-9955": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.messages.delta": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.messages.replyWithQuote": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.archive": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "users.user.joinedTeams.team.channels.channel.completeMigration": { "user-id": TeamsGraphPathParamValue; "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphUsersTeam01OperationRequestMap {
  "users.ListJoinedTeams": TeamsGraphOperationInput<"users.ListJoinedTeams">;
  "users.CreateJoinedTeams": TeamsGraphOperationInput<"users.CreateJoinedTeams">;
  "users.GetJoinedTeams": TeamsGraphOperationInput<"users.GetJoinedTeams">;
  "users.UpdateJoinedTeams": TeamsGraphOperationInput<"users.UpdateJoinedTeams">;
  "users.DeleteJoinedTeams": TeamsGraphOperationInput<"users.DeleteJoinedTeams">;
  "users.joinedTeams.ListAllChannels": TeamsGraphOperationInput<"users.joinedTeams.ListAllChannels">;
  "users.joinedTeams.GetAllChannels": TeamsGraphOperationInput<"users.joinedTeams.GetAllChannels">;
  "users.joinedTeams.allChannels.GetCount-33d5": TeamsGraphOperationInput<"users.joinedTeams.allChannels.GetCount-33d5">;
  "users.joinedTeams.ListChannels": TeamsGraphOperationInput<"users.joinedTeams.ListChannels">;
  "users.joinedTeams.CreateChannels": TeamsGraphOperationInput<"users.joinedTeams.CreateChannels">;
  "users.joinedTeams.GetChannels": TeamsGraphOperationInput<"users.joinedTeams.GetChannels">;
  "users.joinedTeams.UpdateChannels": TeamsGraphOperationInput<"users.joinedTeams.UpdateChannels">;
  "users.joinedTeams.DeleteChannels": TeamsGraphOperationInput<"users.joinedTeams.DeleteChannels">;
  "users.joinedTeams.channels.ListAllMembers": TeamsGraphOperationInput<"users.joinedTeams.channels.ListAllMembers">;
  "users.joinedTeams.channels.CreateAllMembers": TeamsGraphOperationInput<"users.joinedTeams.channels.CreateAllMembers">;
  "users.joinedTeams.channels.GetAllMembers": TeamsGraphOperationInput<"users.joinedTeams.channels.GetAllMembers">;
  "users.joinedTeams.channels.UpdateAllMembers": TeamsGraphOperationInput<"users.joinedTeams.channels.UpdateAllMembers">;
  "users.joinedTeams.channels.DeleteAllMembers": TeamsGraphOperationInput<"users.joinedTeams.channels.DeleteAllMembers">;
  "users.joinedTeams.channels.allMembers.GetCount-12c2": TeamsGraphOperationInput<"users.joinedTeams.channels.allMembers.GetCount-12c2">;
  "users.user.joinedTeams.team.channels.channel.allMembers.add": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.allMembers.add">;
  "users.user.joinedTeams.team.channels.channel.allMembers.remove": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.allMembers.remove">;
  "users.joinedTeams.channels.ListEnabledApps": TeamsGraphOperationInput<"users.joinedTeams.channels.ListEnabledApps">;
  "users.joinedTeams.channels.GetEnabledApps": TeamsGraphOperationInput<"users.joinedTeams.channels.GetEnabledApps">;
  "users.joinedTeams.channels.enabledApps.GetCount-0dff": TeamsGraphOperationInput<"users.joinedTeams.channels.enabledApps.GetCount-0dff">;
  "users.joinedTeams.channels.GetFilesFolder": TeamsGraphOperationInput<"users.joinedTeams.channels.GetFilesFolder">;
  "users.joinedTeams.channels.GetFilesFolderContent": TeamsGraphOperationInput<"users.joinedTeams.channels.GetFilesFolderContent">;
  "users.joinedTeams.channels.UpdateFilesFolderContent": TeamsGraphOperationInput<"users.joinedTeams.channels.UpdateFilesFolderContent">;
  "users.joinedTeams.channels.DeleteFilesFolderContent": TeamsGraphOperationInput<"users.joinedTeams.channels.DeleteFilesFolderContent">;
  "users.joinedTeams.channels.ListMembers": TeamsGraphOperationInput<"users.joinedTeams.channels.ListMembers">;
  "users.joinedTeams.channels.CreateMembers": TeamsGraphOperationInput<"users.joinedTeams.channels.CreateMembers">;
  "users.joinedTeams.channels.GetMembers": TeamsGraphOperationInput<"users.joinedTeams.channels.GetMembers">;
  "users.joinedTeams.channels.UpdateMembers": TeamsGraphOperationInput<"users.joinedTeams.channels.UpdateMembers">;
  "users.joinedTeams.channels.DeleteMembers": TeamsGraphOperationInput<"users.joinedTeams.channels.DeleteMembers">;
  "users.joinedTeams.channels.members.GetCount-ac8d": TeamsGraphOperationInput<"users.joinedTeams.channels.members.GetCount-ac8d">;
  "users.user.joinedTeams.team.channels.channel.members.add": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.members.add">;
  "users.user.joinedTeams.team.channels.channel.members.remove": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.members.remove">;
  "users.joinedTeams.channels.ListMessages": TeamsGraphOperationInput<"users.joinedTeams.channels.ListMessages">;
  "users.joinedTeams.channels.CreateMessages": TeamsGraphOperationInput<"users.joinedTeams.channels.CreateMessages">;
  "users.joinedTeams.channels.GetMessages": TeamsGraphOperationInput<"users.joinedTeams.channels.GetMessages">;
  "users.joinedTeams.channels.UpdateMessages": TeamsGraphOperationInput<"users.joinedTeams.channels.UpdateMessages">;
  "users.joinedTeams.channels.DeleteMessages": TeamsGraphOperationInput<"users.joinedTeams.channels.DeleteMessages">;
  "users.joinedTeams.channels.messages.ListHostedContents": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.ListHostedContents">;
  "users.joinedTeams.channels.messages.CreateHostedContents": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.CreateHostedContents">;
  "users.joinedTeams.channels.messages.GetHostedContents": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.GetHostedContents">;
  "users.joinedTeams.channels.messages.UpdateHostedContents": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.UpdateHostedContents">;
  "users.joinedTeams.channels.messages.DeleteHostedContents": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.DeleteHostedContents">;
  "users.joinedTeams.channels.messages.GetHostedContentsContent": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.GetHostedContentsContent">;
  "users.joinedTeams.channels.messages.UpdateHostedContentsContent": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.UpdateHostedContentsContent">;
  "users.joinedTeams.channels.messages.DeleteHostedContentsContent": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.DeleteHostedContentsContent">;
  "users.joinedTeams.channels.messages.hostedContents.GetCount-a414": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.hostedContents.GetCount-a414">;
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.setReaction": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.setReaction">;
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.softDelete": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.softDelete">;
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete">;
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction">;
  "users.joinedTeams.channels.messages.ListReplies": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.ListReplies">;
  "users.joinedTeams.channels.messages.CreateReplies": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.CreateReplies">;
  "users.joinedTeams.channels.messages.GetReplies": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.GetReplies">;
  "users.joinedTeams.channels.messages.UpdateReplies": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.UpdateReplies">;
  "users.joinedTeams.channels.messages.DeleteReplies": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.DeleteReplies">;
  "users.joinedTeams.channels.messages.replies.ListHostedContents": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.replies.ListHostedContents">;
  "users.joinedTeams.channels.messages.replies.CreateHostedContents": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.replies.CreateHostedContents">;
  "users.joinedTeams.channels.messages.replies.GetHostedContents": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.replies.GetHostedContents">;
  "users.joinedTeams.channels.messages.replies.UpdateHostedContents": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.replies.UpdateHostedContents">;
  "users.joinedTeams.channels.messages.replies.DeleteHostedContents": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.replies.DeleteHostedContents">;
  "users.joinedTeams.channels.messages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.replies.GetHostedContentsContent">;
  "users.joinedTeams.channels.messages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.replies.UpdateHostedContentsContent">;
  "users.joinedTeams.channels.messages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.replies.DeleteHostedContentsContent">;
  "users.joinedTeams.channels.messages.replies.hostedContents.GetCount-9464": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.replies.hostedContents.GetCount-9464">;
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">;
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">;
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">;
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">;
  "users.joinedTeams.channels.messages.replies.GetCount-3de6": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.replies.GetCount-3de6">;
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta">;
  "users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote">;
  "users.joinedTeams.channels.messages.GetCount-9955": TeamsGraphOperationInput<"users.joinedTeams.channels.messages.GetCount-9955">;
  "users.user.joinedTeams.team.channels.channel.messages.delta": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.messages.delta">;
  "users.user.joinedTeams.team.channels.channel.messages.replyWithQuote": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.messages.replyWithQuote">;
  "users.user.joinedTeams.team.channels.channel.archive": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.archive">;
  "users.user.joinedTeams.team.channels.channel.completeMigration": TeamsGraphOperationInput<"users.user.joinedTeams.team.channels.channel.completeMigration">;
}

export interface TeamsGraphUsersTeam01GeneratedClient {
  UsersListJoinedTeams(...args: TeamsGraphOperationArgs<"users.ListJoinedTeams">): Promise<TeamsGraphOperationResponseMap["users.ListJoinedTeams"]>;
  UsersCreateJoinedTeams(...args: TeamsGraphOperationArgs<"users.CreateJoinedTeams">): Promise<TeamsGraphOperationResponseMap["users.CreateJoinedTeams"]>;
  UsersGetJoinedTeams(...args: TeamsGraphOperationArgs<"users.GetJoinedTeams">): Promise<TeamsGraphOperationResponseMap["users.GetJoinedTeams"]>;
  UsersUpdateJoinedTeams(...args: TeamsGraphOperationArgs<"users.UpdateJoinedTeams">): Promise<TeamsGraphOperationResponseMap["users.UpdateJoinedTeams"]>;
  UsersDeleteJoinedTeams(...args: TeamsGraphOperationArgs<"users.DeleteJoinedTeams">): Promise<TeamsGraphOperationResponseMap["users.DeleteJoinedTeams"]>;
  UsersJoinedTeamsListAllChannels(...args: TeamsGraphOperationArgs<"users.joinedTeams.ListAllChannels">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.ListAllChannels"]>;
  UsersJoinedTeamsGetAllChannels(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetAllChannels">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetAllChannels"]>;
  UsersJoinedTeamsAllChannelsGetCount33d5(...args: TeamsGraphOperationArgs<"users.joinedTeams.allChannels.GetCount-33d5">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.allChannels.GetCount-33d5"]>;
  UsersJoinedTeamsListChannels(...args: TeamsGraphOperationArgs<"users.joinedTeams.ListChannels">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.ListChannels"]>;
  UsersJoinedTeamsCreateChannels(...args: TeamsGraphOperationArgs<"users.joinedTeams.CreateChannels">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.CreateChannels"]>;
  UsersJoinedTeamsGetChannels(...args: TeamsGraphOperationArgs<"users.joinedTeams.GetChannels">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.GetChannels"]>;
  UsersJoinedTeamsUpdateChannels(...args: TeamsGraphOperationArgs<"users.joinedTeams.UpdateChannels">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.UpdateChannels"]>;
  UsersJoinedTeamsDeleteChannels(...args: TeamsGraphOperationArgs<"users.joinedTeams.DeleteChannels">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.DeleteChannels"]>;
  UsersJoinedTeamsChannelsListAllMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.ListAllMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.ListAllMembers"]>;
  UsersJoinedTeamsChannelsCreateAllMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.CreateAllMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.CreateAllMembers"]>;
  UsersJoinedTeamsChannelsGetAllMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.GetAllMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.GetAllMembers"]>;
  UsersJoinedTeamsChannelsUpdateAllMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.UpdateAllMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.UpdateAllMembers"]>;
  UsersJoinedTeamsChannelsDeleteAllMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.DeleteAllMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.DeleteAllMembers"]>;
  UsersJoinedTeamsChannelsAllMembersGetCount12c2(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.allMembers.GetCount-12c2">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.allMembers.GetCount-12c2"]>;
  UsersUserJoinedTeamsTeamChannelsChannelAllMembersAdd(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.allMembers.add">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.allMembers.add"]>;
  UsersUserJoinedTeamsTeamChannelsChannelAllMembersRemove(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.allMembers.remove">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.allMembers.remove"]>;
  UsersJoinedTeamsChannelsListEnabledApps(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.ListEnabledApps">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.ListEnabledApps"]>;
  UsersJoinedTeamsChannelsGetEnabledApps(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.GetEnabledApps">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.GetEnabledApps"]>;
  UsersJoinedTeamsChannelsEnabledAppsGetCount0dff(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.enabledApps.GetCount-0dff">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.enabledApps.GetCount-0dff"]>;
  UsersJoinedTeamsChannelsGetFilesFolder(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.GetFilesFolder">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.GetFilesFolder"]>;
  UsersJoinedTeamsChannelsGetFilesFolderContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.GetFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.GetFilesFolderContent"]>;
  UsersJoinedTeamsChannelsUpdateFilesFolderContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.UpdateFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.UpdateFilesFolderContent"]>;
  UsersJoinedTeamsChannelsDeleteFilesFolderContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.DeleteFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.DeleteFilesFolderContent"]>;
  UsersJoinedTeamsChannelsListMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.ListMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.ListMembers"]>;
  UsersJoinedTeamsChannelsCreateMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.CreateMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.CreateMembers"]>;
  UsersJoinedTeamsChannelsGetMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.GetMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.GetMembers"]>;
  UsersJoinedTeamsChannelsUpdateMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.UpdateMembers"]>;
  UsersJoinedTeamsChannelsDeleteMembers(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.DeleteMembers"]>;
  UsersJoinedTeamsChannelsMembersGetCountAc8d(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.members.GetCount-ac8d">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.members.GetCount-ac8d"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMembersAdd(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.members.add">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.members.add"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMembersRemove(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.members.remove">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.members.remove"]>;
  UsersJoinedTeamsChannelsListMessages(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.ListMessages">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.ListMessages"]>;
  UsersJoinedTeamsChannelsCreateMessages(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.CreateMessages">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.CreateMessages"]>;
  UsersJoinedTeamsChannelsGetMessages(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.GetMessages">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.GetMessages"]>;
  UsersJoinedTeamsChannelsUpdateMessages(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.UpdateMessages"]>;
  UsersJoinedTeamsChannelsDeleteMessages(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.DeleteMessages"]>;
  UsersJoinedTeamsChannelsMessagesListHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.ListHostedContents"]>;
  UsersJoinedTeamsChannelsMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.CreateHostedContents"]>;
  UsersJoinedTeamsChannelsMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.GetHostedContents"]>;
  UsersJoinedTeamsChannelsMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.UpdateHostedContents"]>;
  UsersJoinedTeamsChannelsMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.DeleteHostedContents"]>;
  UsersJoinedTeamsChannelsMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.GetHostedContentsContent"]>;
  UsersJoinedTeamsChannelsMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.UpdateHostedContentsContent"]>;
  UsersJoinedTeamsChannelsMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.DeleteHostedContentsContent"]>;
  UsersJoinedTeamsChannelsMessagesHostedContentsGetCountA414(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.hostedContents.GetCount-a414">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.hostedContents.GetCount-a414"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.messages.chatMessage.setReaction"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.messages.chatMessage.softDelete"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction"]>;
  UsersJoinedTeamsChannelsMessagesListReplies(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.ListReplies"]>;
  UsersJoinedTeamsChannelsMessagesCreateReplies(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.CreateReplies"]>;
  UsersJoinedTeamsChannelsMessagesGetReplies(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.GetReplies"]>;
  UsersJoinedTeamsChannelsMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.UpdateReplies"]>;
  UsersJoinedTeamsChannelsMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.DeleteReplies"]>;
  UsersJoinedTeamsChannelsMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.replies.ListHostedContents"]>;
  UsersJoinedTeamsChannelsMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.replies.CreateHostedContents"]>;
  UsersJoinedTeamsChannelsMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.replies.GetHostedContents"]>;
  UsersJoinedTeamsChannelsMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.replies.UpdateHostedContents"]>;
  UsersJoinedTeamsChannelsMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.replies.DeleteHostedContents"]>;
  UsersJoinedTeamsChannelsMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.replies.GetHostedContentsContent"]>;
  UsersJoinedTeamsChannelsMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.replies.UpdateHostedContentsContent"]>;
  UsersJoinedTeamsChannelsMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.replies.DeleteHostedContentsContent"]>;
  UsersJoinedTeamsChannelsMessagesRepliesHostedContentsGetCount9464(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.hostedContents.GetCount-9464">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.replies.hostedContents.GetCount-9464"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction"]>;
  UsersJoinedTeamsChannelsMessagesRepliesGetCount3de6(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.GetCount-3de6">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.replies.GetCount-3de6"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote"]>;
  UsersJoinedTeamsChannelsMessagesGetCount9955(...args: TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.GetCount-9955">): Promise<TeamsGraphOperationResponseMap["users.joinedTeams.channels.messages.GetCount-9955"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMessagesDelta(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.delta">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.messages.delta"]>;
  UsersUserJoinedTeamsTeamChannelsChannelMessagesReplyWithQuote(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.messages.replyWithQuote"]>;
  UsersUserJoinedTeamsTeamChannelsChannelArchive(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.archive">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.archive"]>;
  UsersUserJoinedTeamsTeamChannelsChannelCompleteMigration(...args: TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.completeMigration">): Promise<TeamsGraphOperationResponseMap["users.user.joinedTeams.team.channels.channel.completeMigration"]>;
}

export const TeamsGraphUsersTeam01GeneratedFunctionNames = [
  "UsersListJoinedTeams",
  "UsersCreateJoinedTeams",
  "UsersGetJoinedTeams",
  "UsersUpdateJoinedTeams",
  "UsersDeleteJoinedTeams",
  "UsersJoinedTeamsListAllChannels",
  "UsersJoinedTeamsGetAllChannels",
  "UsersJoinedTeamsAllChannelsGetCount33d5",
  "UsersJoinedTeamsListChannels",
  "UsersJoinedTeamsCreateChannels",
  "UsersJoinedTeamsGetChannels",
  "UsersJoinedTeamsUpdateChannels",
  "UsersJoinedTeamsDeleteChannels",
  "UsersJoinedTeamsChannelsListAllMembers",
  "UsersJoinedTeamsChannelsCreateAllMembers",
  "UsersJoinedTeamsChannelsGetAllMembers",
  "UsersJoinedTeamsChannelsUpdateAllMembers",
  "UsersJoinedTeamsChannelsDeleteAllMembers",
  "UsersJoinedTeamsChannelsAllMembersGetCount12c2",
  "UsersUserJoinedTeamsTeamChannelsChannelAllMembersAdd",
  "UsersUserJoinedTeamsTeamChannelsChannelAllMembersRemove",
  "UsersJoinedTeamsChannelsListEnabledApps",
  "UsersJoinedTeamsChannelsGetEnabledApps",
  "UsersJoinedTeamsChannelsEnabledAppsGetCount0dff",
  "UsersJoinedTeamsChannelsGetFilesFolder",
  "UsersJoinedTeamsChannelsGetFilesFolderContent",
  "UsersJoinedTeamsChannelsUpdateFilesFolderContent",
  "UsersJoinedTeamsChannelsDeleteFilesFolderContent",
  "UsersJoinedTeamsChannelsListMembers",
  "UsersJoinedTeamsChannelsCreateMembers",
  "UsersJoinedTeamsChannelsGetMembers",
  "UsersJoinedTeamsChannelsUpdateMembers",
  "UsersJoinedTeamsChannelsDeleteMembers",
  "UsersJoinedTeamsChannelsMembersGetCountAc8d",
  "UsersUserJoinedTeamsTeamChannelsChannelMembersAdd",
  "UsersUserJoinedTeamsTeamChannelsChannelMembersRemove",
  "UsersJoinedTeamsChannelsListMessages",
  "UsersJoinedTeamsChannelsCreateMessages",
  "UsersJoinedTeamsChannelsGetMessages",
  "UsersJoinedTeamsChannelsUpdateMessages",
  "UsersJoinedTeamsChannelsDeleteMessages",
  "UsersJoinedTeamsChannelsMessagesListHostedContents",
  "UsersJoinedTeamsChannelsMessagesCreateHostedContents",
  "UsersJoinedTeamsChannelsMessagesGetHostedContents",
  "UsersJoinedTeamsChannelsMessagesUpdateHostedContents",
  "UsersJoinedTeamsChannelsMessagesDeleteHostedContents",
  "UsersJoinedTeamsChannelsMessagesGetHostedContentsContent",
  "UsersJoinedTeamsChannelsMessagesUpdateHostedContentsContent",
  "UsersJoinedTeamsChannelsMessagesDeleteHostedContentsContent",
  "UsersJoinedTeamsChannelsMessagesHostedContentsGetCountA414",
  "UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageSetReaction",
  "UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageSoftDelete",
  "UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageUndoSoftDelete",
  "UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageUnsetReaction",
  "UsersJoinedTeamsChannelsMessagesListReplies",
  "UsersJoinedTeamsChannelsMessagesCreateReplies",
  "UsersJoinedTeamsChannelsMessagesGetReplies",
  "UsersJoinedTeamsChannelsMessagesUpdateReplies",
  "UsersJoinedTeamsChannelsMessagesDeleteReplies",
  "UsersJoinedTeamsChannelsMessagesRepliesListHostedContents",
  "UsersJoinedTeamsChannelsMessagesRepliesCreateHostedContents",
  "UsersJoinedTeamsChannelsMessagesRepliesGetHostedContents",
  "UsersJoinedTeamsChannelsMessagesRepliesUpdateHostedContents",
  "UsersJoinedTeamsChannelsMessagesRepliesDeleteHostedContents",
  "UsersJoinedTeamsChannelsMessagesRepliesGetHostedContentsContent",
  "UsersJoinedTeamsChannelsMessagesRepliesUpdateHostedContentsContent",
  "UsersJoinedTeamsChannelsMessagesRepliesDeleteHostedContentsContent",
  "UsersJoinedTeamsChannelsMessagesRepliesHostedContentsGetCount9464",
  "UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction",
  "UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete",
  "UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete",
  "UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction",
  "UsersJoinedTeamsChannelsMessagesRepliesGetCount3de6",
  "UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesDelta",
  "UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote",
  "UsersJoinedTeamsChannelsMessagesGetCount9955",
  "UsersUserJoinedTeamsTeamChannelsChannelMessagesDelta",
  "UsersUserJoinedTeamsTeamChannelsChannelMessagesReplyWithQuote",
  "UsersUserJoinedTeamsTeamChannelsChannelArchive",
  "UsersUserJoinedTeamsTeamChannelsChannelCompleteMigration"
] as const satisfies readonly (keyof TeamsGraphUsersTeam01GeneratedClient)[];

export function createTeamsGraphUsersTeam01GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphUsersTeam01GeneratedClient {
  return {
    UsersListJoinedTeams: (...args) => callOperation("users.ListJoinedTeams", ...(args as TeamsGraphOperationArgs<"users.ListJoinedTeams">)),
    UsersCreateJoinedTeams: (...args) => callOperation("users.CreateJoinedTeams", ...(args as TeamsGraphOperationArgs<"users.CreateJoinedTeams">)),
    UsersGetJoinedTeams: (...args) => callOperation("users.GetJoinedTeams", ...(args as TeamsGraphOperationArgs<"users.GetJoinedTeams">)),
    UsersUpdateJoinedTeams: (...args) => callOperation("users.UpdateJoinedTeams", ...(args as TeamsGraphOperationArgs<"users.UpdateJoinedTeams">)),
    UsersDeleteJoinedTeams: (...args) => callOperation("users.DeleteJoinedTeams", ...(args as TeamsGraphOperationArgs<"users.DeleteJoinedTeams">)),
    UsersJoinedTeamsListAllChannels: (...args) => callOperation("users.joinedTeams.ListAllChannels", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.ListAllChannels">)),
    UsersJoinedTeamsGetAllChannels: (...args) => callOperation("users.joinedTeams.GetAllChannels", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetAllChannels">)),
    UsersJoinedTeamsAllChannelsGetCount33d5: (...args) => callOperation("users.joinedTeams.allChannels.GetCount-33d5", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.allChannels.GetCount-33d5">)),
    UsersJoinedTeamsListChannels: (...args) => callOperation("users.joinedTeams.ListChannels", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.ListChannels">)),
    UsersJoinedTeamsCreateChannels: (...args) => callOperation("users.joinedTeams.CreateChannels", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.CreateChannels">)),
    UsersJoinedTeamsGetChannels: (...args) => callOperation("users.joinedTeams.GetChannels", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.GetChannels">)),
    UsersJoinedTeamsUpdateChannels: (...args) => callOperation("users.joinedTeams.UpdateChannels", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.UpdateChannels">)),
    UsersJoinedTeamsDeleteChannels: (...args) => callOperation("users.joinedTeams.DeleteChannels", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.DeleteChannels">)),
    UsersJoinedTeamsChannelsListAllMembers: (...args) => callOperation("users.joinedTeams.channels.ListAllMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.ListAllMembers">)),
    UsersJoinedTeamsChannelsCreateAllMembers: (...args) => callOperation("users.joinedTeams.channels.CreateAllMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.CreateAllMembers">)),
    UsersJoinedTeamsChannelsGetAllMembers: (...args) => callOperation("users.joinedTeams.channels.GetAllMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.GetAllMembers">)),
    UsersJoinedTeamsChannelsUpdateAllMembers: (...args) => callOperation("users.joinedTeams.channels.UpdateAllMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.UpdateAllMembers">)),
    UsersJoinedTeamsChannelsDeleteAllMembers: (...args) => callOperation("users.joinedTeams.channels.DeleteAllMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.DeleteAllMembers">)),
    UsersJoinedTeamsChannelsAllMembersGetCount12c2: (...args) => callOperation("users.joinedTeams.channels.allMembers.GetCount-12c2", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.allMembers.GetCount-12c2">)),
    UsersUserJoinedTeamsTeamChannelsChannelAllMembersAdd: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.allMembers.add", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.allMembers.add">)),
    UsersUserJoinedTeamsTeamChannelsChannelAllMembersRemove: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.allMembers.remove", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.allMembers.remove">)),
    UsersJoinedTeamsChannelsListEnabledApps: (...args) => callOperation("users.joinedTeams.channels.ListEnabledApps", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.ListEnabledApps">)),
    UsersJoinedTeamsChannelsGetEnabledApps: (...args) => callOperation("users.joinedTeams.channels.GetEnabledApps", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.GetEnabledApps">)),
    UsersJoinedTeamsChannelsEnabledAppsGetCount0dff: (...args) => callOperation("users.joinedTeams.channels.enabledApps.GetCount-0dff", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.enabledApps.GetCount-0dff">)),
    UsersJoinedTeamsChannelsGetFilesFolder: (...args) => callOperation("users.joinedTeams.channels.GetFilesFolder", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.GetFilesFolder">)),
    UsersJoinedTeamsChannelsGetFilesFolderContent: (...args) => callOperation("users.joinedTeams.channels.GetFilesFolderContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.GetFilesFolderContent">)),
    UsersJoinedTeamsChannelsUpdateFilesFolderContent: (...args) => callOperation("users.joinedTeams.channels.UpdateFilesFolderContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.UpdateFilesFolderContent">)),
    UsersJoinedTeamsChannelsDeleteFilesFolderContent: (...args) => callOperation("users.joinedTeams.channels.DeleteFilesFolderContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.DeleteFilesFolderContent">)),
    UsersJoinedTeamsChannelsListMembers: (...args) => callOperation("users.joinedTeams.channels.ListMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.ListMembers">)),
    UsersJoinedTeamsChannelsCreateMembers: (...args) => callOperation("users.joinedTeams.channels.CreateMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.CreateMembers">)),
    UsersJoinedTeamsChannelsGetMembers: (...args) => callOperation("users.joinedTeams.channels.GetMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.GetMembers">)),
    UsersJoinedTeamsChannelsUpdateMembers: (...args) => callOperation("users.joinedTeams.channels.UpdateMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.UpdateMembers">)),
    UsersJoinedTeamsChannelsDeleteMembers: (...args) => callOperation("users.joinedTeams.channels.DeleteMembers", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.DeleteMembers">)),
    UsersJoinedTeamsChannelsMembersGetCountAc8d: (...args) => callOperation("users.joinedTeams.channels.members.GetCount-ac8d", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.members.GetCount-ac8d">)),
    UsersUserJoinedTeamsTeamChannelsChannelMembersAdd: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.members.add", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.members.add">)),
    UsersUserJoinedTeamsTeamChannelsChannelMembersRemove: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.members.remove", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.members.remove">)),
    UsersJoinedTeamsChannelsListMessages: (...args) => callOperation("users.joinedTeams.channels.ListMessages", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.ListMessages">)),
    UsersJoinedTeamsChannelsCreateMessages: (...args) => callOperation("users.joinedTeams.channels.CreateMessages", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.CreateMessages">)),
    UsersJoinedTeamsChannelsGetMessages: (...args) => callOperation("users.joinedTeams.channels.GetMessages", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.GetMessages">)),
    UsersJoinedTeamsChannelsUpdateMessages: (...args) => callOperation("users.joinedTeams.channels.UpdateMessages", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.UpdateMessages">)),
    UsersJoinedTeamsChannelsDeleteMessages: (...args) => callOperation("users.joinedTeams.channels.DeleteMessages", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.DeleteMessages">)),
    UsersJoinedTeamsChannelsMessagesListHostedContents: (...args) => callOperation("users.joinedTeams.channels.messages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.ListHostedContents">)),
    UsersJoinedTeamsChannelsMessagesCreateHostedContents: (...args) => callOperation("users.joinedTeams.channels.messages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.CreateHostedContents">)),
    UsersJoinedTeamsChannelsMessagesGetHostedContents: (...args) => callOperation("users.joinedTeams.channels.messages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.GetHostedContents">)),
    UsersJoinedTeamsChannelsMessagesUpdateHostedContents: (...args) => callOperation("users.joinedTeams.channels.messages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.UpdateHostedContents">)),
    UsersJoinedTeamsChannelsMessagesDeleteHostedContents: (...args) => callOperation("users.joinedTeams.channels.messages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.DeleteHostedContents">)),
    UsersJoinedTeamsChannelsMessagesGetHostedContentsContent: (...args) => callOperation("users.joinedTeams.channels.messages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.GetHostedContentsContent">)),
    UsersJoinedTeamsChannelsMessagesUpdateHostedContentsContent: (...args) => callOperation("users.joinedTeams.channels.messages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.UpdateHostedContentsContent">)),
    UsersJoinedTeamsChannelsMessagesDeleteHostedContentsContent: (...args) => callOperation("users.joinedTeams.channels.messages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.DeleteHostedContentsContent">)),
    UsersJoinedTeamsChannelsMessagesHostedContentsGetCountA414: (...args) => callOperation("users.joinedTeams.channels.messages.hostedContents.GetCount-a414", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.hostedContents.GetCount-a414">)),
    UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageSetReaction: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.messages.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.setReaction">)),
    UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageSoftDelete: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.messages.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.softDelete">)),
    UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageUndoSoftDelete: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete">)),
    UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageUnsetReaction: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction">)),
    UsersJoinedTeamsChannelsMessagesListReplies: (...args) => callOperation("users.joinedTeams.channels.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.ListReplies">)),
    UsersJoinedTeamsChannelsMessagesCreateReplies: (...args) => callOperation("users.joinedTeams.channels.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.CreateReplies">)),
    UsersJoinedTeamsChannelsMessagesGetReplies: (...args) => callOperation("users.joinedTeams.channels.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.GetReplies">)),
    UsersJoinedTeamsChannelsMessagesUpdateReplies: (...args) => callOperation("users.joinedTeams.channels.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.UpdateReplies">)),
    UsersJoinedTeamsChannelsMessagesDeleteReplies: (...args) => callOperation("users.joinedTeams.channels.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.DeleteReplies">)),
    UsersJoinedTeamsChannelsMessagesRepliesListHostedContents: (...args) => callOperation("users.joinedTeams.channels.messages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.ListHostedContents">)),
    UsersJoinedTeamsChannelsMessagesRepliesCreateHostedContents: (...args) => callOperation("users.joinedTeams.channels.messages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.CreateHostedContents">)),
    UsersJoinedTeamsChannelsMessagesRepliesGetHostedContents: (...args) => callOperation("users.joinedTeams.channels.messages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.GetHostedContents">)),
    UsersJoinedTeamsChannelsMessagesRepliesUpdateHostedContents: (...args) => callOperation("users.joinedTeams.channels.messages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.UpdateHostedContents">)),
    UsersJoinedTeamsChannelsMessagesRepliesDeleteHostedContents: (...args) => callOperation("users.joinedTeams.channels.messages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.DeleteHostedContents">)),
    UsersJoinedTeamsChannelsMessagesRepliesGetHostedContentsContent: (...args) => callOperation("users.joinedTeams.channels.messages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.GetHostedContentsContent">)),
    UsersJoinedTeamsChannelsMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("users.joinedTeams.channels.messages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.UpdateHostedContentsContent">)),
    UsersJoinedTeamsChannelsMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("users.joinedTeams.channels.messages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.DeleteHostedContentsContent">)),
    UsersJoinedTeamsChannelsMessagesRepliesHostedContentsGetCount9464: (...args) => callOperation("users.joinedTeams.channels.messages.replies.hostedContents.GetCount-9464", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.hostedContents.GetCount-9464">)),
    UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">)),
    UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">)),
    UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">)),
    UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">)),
    UsersJoinedTeamsChannelsMessagesRepliesGetCount3de6: (...args) => callOperation("users.joinedTeams.channels.messages.replies.GetCount-3de6", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.replies.GetCount-3de6">)),
    UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesDelta: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta">)),
    UsersUserJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote">)),
    UsersJoinedTeamsChannelsMessagesGetCount9955: (...args) => callOperation("users.joinedTeams.channels.messages.GetCount-9955", ...(args as TeamsGraphOperationArgs<"users.joinedTeams.channels.messages.GetCount-9955">)),
    UsersUserJoinedTeamsTeamChannelsChannelMessagesDelta: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.messages.delta", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.delta">)),
    UsersUserJoinedTeamsTeamChannelsChannelMessagesReplyWithQuote: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.messages.replyWithQuote", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.messages.replyWithQuote">)),
    UsersUserJoinedTeamsTeamChannelsChannelArchive: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.archive", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.archive">)),
    UsersUserJoinedTeamsTeamChannelsChannelCompleteMigration: (...args) => callOperation("users.user.joinedTeams.team.channels.channel.completeMigration", ...(args as TeamsGraphOperationArgs<"users.user.joinedTeams.team.channels.channel.completeMigration">)),
  };
}
