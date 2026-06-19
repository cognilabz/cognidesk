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
export const TeamsGraphMeTeam01OperationKeys = [
  "me.ListJoinedTeams",
  "me.CreateJoinedTeams",
  "me.GetJoinedTeams",
  "me.UpdateJoinedTeams",
  "me.DeleteJoinedTeams",
  "me.joinedTeams.ListAllChannels",
  "me.joinedTeams.GetAllChannels",
  "me.joinedTeams.allChannels.GetCount-382e",
  "me.joinedTeams.ListChannels",
  "me.joinedTeams.CreateChannels",
  "me.joinedTeams.GetChannels",
  "me.joinedTeams.UpdateChannels",
  "me.joinedTeams.DeleteChannels",
  "me.joinedTeams.channels.ListAllMembers",
  "me.joinedTeams.channels.CreateAllMembers",
  "me.joinedTeams.channels.GetAllMembers",
  "me.joinedTeams.channels.UpdateAllMembers",
  "me.joinedTeams.channels.DeleteAllMembers",
  "me.joinedTeams.channels.allMembers.GetCount-4afb",
  "me.joinedTeams.team.channels.channel.allMembers.add",
  "me.joinedTeams.team.channels.channel.allMembers.remove",
  "me.joinedTeams.channels.ListEnabledApps",
  "me.joinedTeams.channels.GetEnabledApps",
  "me.joinedTeams.channels.enabledApps.GetCount-b537",
  "me.joinedTeams.channels.GetFilesFolder",
  "me.joinedTeams.channels.GetFilesFolderContent",
  "me.joinedTeams.channels.UpdateFilesFolderContent",
  "me.joinedTeams.channels.DeleteFilesFolderContent",
  "me.joinedTeams.channels.ListMembers",
  "me.joinedTeams.channels.CreateMembers",
  "me.joinedTeams.channels.GetMembers",
  "me.joinedTeams.channels.UpdateMembers",
  "me.joinedTeams.channels.DeleteMembers",
  "me.joinedTeams.channels.members.GetCount-f9b9",
  "me.joinedTeams.team.channels.channel.members.add",
  "me.joinedTeams.team.channels.channel.members.remove",
  "me.joinedTeams.channels.ListMessages",
  "me.joinedTeams.channels.CreateMessages",
  "me.joinedTeams.channels.GetMessages",
  "me.joinedTeams.channels.UpdateMessages",
  "me.joinedTeams.channels.DeleteMessages",
  "me.joinedTeams.channels.messages.ListHostedContents",
  "me.joinedTeams.channels.messages.CreateHostedContents",
  "me.joinedTeams.channels.messages.GetHostedContents",
  "me.joinedTeams.channels.messages.UpdateHostedContents",
  "me.joinedTeams.channels.messages.DeleteHostedContents",
  "me.joinedTeams.channels.messages.GetHostedContentsContent",
  "me.joinedTeams.channels.messages.UpdateHostedContentsContent",
  "me.joinedTeams.channels.messages.DeleteHostedContentsContent",
  "me.joinedTeams.channels.messages.hostedContents.GetCount-0878",
  "me.joinedTeams.team.channels.channel.messages.chatMessage.setReaction",
  "me.joinedTeams.team.channels.channel.messages.chatMessage.softDelete",
  "me.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete",
  "me.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction",
  "me.joinedTeams.channels.messages.ListReplies",
  "me.joinedTeams.channels.messages.CreateReplies",
  "me.joinedTeams.channels.messages.GetReplies",
  "me.joinedTeams.channels.messages.UpdateReplies",
  "me.joinedTeams.channels.messages.DeleteReplies",
  "me.joinedTeams.channels.messages.replies.ListHostedContents",
  "me.joinedTeams.channels.messages.replies.CreateHostedContents",
  "me.joinedTeams.channels.messages.replies.GetHostedContents",
  "me.joinedTeams.channels.messages.replies.UpdateHostedContents",
  "me.joinedTeams.channels.messages.replies.DeleteHostedContents",
  "me.joinedTeams.channels.messages.replies.GetHostedContentsContent",
  "me.joinedTeams.channels.messages.replies.UpdateHostedContentsContent",
  "me.joinedTeams.channels.messages.replies.DeleteHostedContentsContent",
  "me.joinedTeams.channels.messages.replies.hostedContents.GetCount-ff44",
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction",
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete",
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete",
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction",
  "me.joinedTeams.channels.messages.replies.GetCount-2855",
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta",
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote",
  "me.joinedTeams.channels.messages.GetCount-31de",
  "me.joinedTeams.team.channels.channel.messages.delta",
  "me.joinedTeams.team.channels.channel.messages.replyWithQuote",
  "me.joinedTeams.team.channels.channel.archive",
  "me.joinedTeams.team.channels.channel.completeMigration"
] as const;
export type TeamsGraphMeTeam01OperationKey = typeof TeamsGraphMeTeam01OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphMeTeam01OperationPathParamMap {
  "me.ListJoinedTeams": {};
  "me.CreateJoinedTeams": {};
  "me.GetJoinedTeams": { "team-id": TeamsGraphPathParamValue };
  "me.UpdateJoinedTeams": { "team-id": TeamsGraphPathParamValue };
  "me.DeleteJoinedTeams": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.ListAllChannels": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetAllChannels": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.allChannels.GetCount-382e": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.ListChannels": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.CreateChannels": { "team-id": TeamsGraphPathParamValue };
  "me.joinedTeams.GetChannels": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.UpdateChannels": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.DeleteChannels": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.ListAllMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.CreateAllMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.GetAllMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.UpdateAllMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.DeleteAllMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.allMembers.GetCount-4afb": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.allMembers.add": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.allMembers.remove": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.ListEnabledApps": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.GetEnabledApps": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsApp-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.enabledApps.GetCount-b537": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.GetFilesFolder": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.GetFilesFolderContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.UpdateFilesFolderContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.DeleteFilesFolderContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.ListMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.CreateMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.GetMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.UpdateMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.DeleteMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.members.GetCount-f9b9": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.members.add": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.members.remove": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.ListMessages": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.CreateMessages": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.GetMessages": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.UpdateMessages": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.DeleteMessages": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.ListHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.CreateHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.GetHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.UpdateHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.DeleteHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.GetHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.UpdateHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.DeleteHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.hostedContents.GetCount-0878": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.messages.chatMessage.setReaction": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.messages.chatMessage.softDelete": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.ListReplies": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.CreateReplies": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.GetReplies": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.UpdateReplies": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.DeleteReplies": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.replies.ListHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.replies.CreateHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.replies.GetHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.replies.UpdateHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.replies.DeleteHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.replies.GetHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.replies.UpdateHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.replies.DeleteHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.replies.hostedContents.GetCount-ff44": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.replies.GetCount-2855": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "me.joinedTeams.channels.messages.GetCount-31de": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.messages.delta": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.messages.replyWithQuote": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.archive": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "me.joinedTeams.team.channels.channel.completeMigration": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphMeTeam01OperationRequestMap {
  "me.ListJoinedTeams": TeamsGraphOperationInput<"me.ListJoinedTeams">;
  "me.CreateJoinedTeams": TeamsGraphOperationInput<"me.CreateJoinedTeams">;
  "me.GetJoinedTeams": TeamsGraphOperationInput<"me.GetJoinedTeams">;
  "me.UpdateJoinedTeams": TeamsGraphOperationInput<"me.UpdateJoinedTeams">;
  "me.DeleteJoinedTeams": TeamsGraphOperationInput<"me.DeleteJoinedTeams">;
  "me.joinedTeams.ListAllChannels": TeamsGraphOperationInput<"me.joinedTeams.ListAllChannels">;
  "me.joinedTeams.GetAllChannels": TeamsGraphOperationInput<"me.joinedTeams.GetAllChannels">;
  "me.joinedTeams.allChannels.GetCount-382e": TeamsGraphOperationInput<"me.joinedTeams.allChannels.GetCount-382e">;
  "me.joinedTeams.ListChannels": TeamsGraphOperationInput<"me.joinedTeams.ListChannels">;
  "me.joinedTeams.CreateChannels": TeamsGraphOperationInput<"me.joinedTeams.CreateChannels">;
  "me.joinedTeams.GetChannels": TeamsGraphOperationInput<"me.joinedTeams.GetChannels">;
  "me.joinedTeams.UpdateChannels": TeamsGraphOperationInput<"me.joinedTeams.UpdateChannels">;
  "me.joinedTeams.DeleteChannels": TeamsGraphOperationInput<"me.joinedTeams.DeleteChannels">;
  "me.joinedTeams.channels.ListAllMembers": TeamsGraphOperationInput<"me.joinedTeams.channels.ListAllMembers">;
  "me.joinedTeams.channels.CreateAllMembers": TeamsGraphOperationInput<"me.joinedTeams.channels.CreateAllMembers">;
  "me.joinedTeams.channels.GetAllMembers": TeamsGraphOperationInput<"me.joinedTeams.channels.GetAllMembers">;
  "me.joinedTeams.channels.UpdateAllMembers": TeamsGraphOperationInput<"me.joinedTeams.channels.UpdateAllMembers">;
  "me.joinedTeams.channels.DeleteAllMembers": TeamsGraphOperationInput<"me.joinedTeams.channels.DeleteAllMembers">;
  "me.joinedTeams.channels.allMembers.GetCount-4afb": TeamsGraphOperationInput<"me.joinedTeams.channels.allMembers.GetCount-4afb">;
  "me.joinedTeams.team.channels.channel.allMembers.add": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.allMembers.add">;
  "me.joinedTeams.team.channels.channel.allMembers.remove": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.allMembers.remove">;
  "me.joinedTeams.channels.ListEnabledApps": TeamsGraphOperationInput<"me.joinedTeams.channels.ListEnabledApps">;
  "me.joinedTeams.channels.GetEnabledApps": TeamsGraphOperationInput<"me.joinedTeams.channels.GetEnabledApps">;
  "me.joinedTeams.channels.enabledApps.GetCount-b537": TeamsGraphOperationInput<"me.joinedTeams.channels.enabledApps.GetCount-b537">;
  "me.joinedTeams.channels.GetFilesFolder": TeamsGraphOperationInput<"me.joinedTeams.channels.GetFilesFolder">;
  "me.joinedTeams.channels.GetFilesFolderContent": TeamsGraphOperationInput<"me.joinedTeams.channels.GetFilesFolderContent">;
  "me.joinedTeams.channels.UpdateFilesFolderContent": TeamsGraphOperationInput<"me.joinedTeams.channels.UpdateFilesFolderContent">;
  "me.joinedTeams.channels.DeleteFilesFolderContent": TeamsGraphOperationInput<"me.joinedTeams.channels.DeleteFilesFolderContent">;
  "me.joinedTeams.channels.ListMembers": TeamsGraphOperationInput<"me.joinedTeams.channels.ListMembers">;
  "me.joinedTeams.channels.CreateMembers": TeamsGraphOperationInput<"me.joinedTeams.channels.CreateMembers">;
  "me.joinedTeams.channels.GetMembers": TeamsGraphOperationInput<"me.joinedTeams.channels.GetMembers">;
  "me.joinedTeams.channels.UpdateMembers": TeamsGraphOperationInput<"me.joinedTeams.channels.UpdateMembers">;
  "me.joinedTeams.channels.DeleteMembers": TeamsGraphOperationInput<"me.joinedTeams.channels.DeleteMembers">;
  "me.joinedTeams.channels.members.GetCount-f9b9": TeamsGraphOperationInput<"me.joinedTeams.channels.members.GetCount-f9b9">;
  "me.joinedTeams.team.channels.channel.members.add": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.members.add">;
  "me.joinedTeams.team.channels.channel.members.remove": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.members.remove">;
  "me.joinedTeams.channels.ListMessages": TeamsGraphOperationInput<"me.joinedTeams.channels.ListMessages">;
  "me.joinedTeams.channels.CreateMessages": TeamsGraphOperationInput<"me.joinedTeams.channels.CreateMessages">;
  "me.joinedTeams.channels.GetMessages": TeamsGraphOperationInput<"me.joinedTeams.channels.GetMessages">;
  "me.joinedTeams.channels.UpdateMessages": TeamsGraphOperationInput<"me.joinedTeams.channels.UpdateMessages">;
  "me.joinedTeams.channels.DeleteMessages": TeamsGraphOperationInput<"me.joinedTeams.channels.DeleteMessages">;
  "me.joinedTeams.channels.messages.ListHostedContents": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.ListHostedContents">;
  "me.joinedTeams.channels.messages.CreateHostedContents": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.CreateHostedContents">;
  "me.joinedTeams.channels.messages.GetHostedContents": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.GetHostedContents">;
  "me.joinedTeams.channels.messages.UpdateHostedContents": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.UpdateHostedContents">;
  "me.joinedTeams.channels.messages.DeleteHostedContents": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.DeleteHostedContents">;
  "me.joinedTeams.channels.messages.GetHostedContentsContent": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.GetHostedContentsContent">;
  "me.joinedTeams.channels.messages.UpdateHostedContentsContent": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.UpdateHostedContentsContent">;
  "me.joinedTeams.channels.messages.DeleteHostedContentsContent": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.DeleteHostedContentsContent">;
  "me.joinedTeams.channels.messages.hostedContents.GetCount-0878": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.hostedContents.GetCount-0878">;
  "me.joinedTeams.team.channels.channel.messages.chatMessage.setReaction": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.messages.chatMessage.setReaction">;
  "me.joinedTeams.team.channels.channel.messages.chatMessage.softDelete": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.messages.chatMessage.softDelete">;
  "me.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete">;
  "me.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction">;
  "me.joinedTeams.channels.messages.ListReplies": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.ListReplies">;
  "me.joinedTeams.channels.messages.CreateReplies": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.CreateReplies">;
  "me.joinedTeams.channels.messages.GetReplies": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.GetReplies">;
  "me.joinedTeams.channels.messages.UpdateReplies": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.UpdateReplies">;
  "me.joinedTeams.channels.messages.DeleteReplies": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.DeleteReplies">;
  "me.joinedTeams.channels.messages.replies.ListHostedContents": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.replies.ListHostedContents">;
  "me.joinedTeams.channels.messages.replies.CreateHostedContents": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.replies.CreateHostedContents">;
  "me.joinedTeams.channels.messages.replies.GetHostedContents": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.replies.GetHostedContents">;
  "me.joinedTeams.channels.messages.replies.UpdateHostedContents": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.replies.UpdateHostedContents">;
  "me.joinedTeams.channels.messages.replies.DeleteHostedContents": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.replies.DeleteHostedContents">;
  "me.joinedTeams.channels.messages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.replies.GetHostedContentsContent">;
  "me.joinedTeams.channels.messages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.replies.UpdateHostedContentsContent">;
  "me.joinedTeams.channels.messages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.replies.DeleteHostedContentsContent">;
  "me.joinedTeams.channels.messages.replies.hostedContents.GetCount-ff44": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.replies.hostedContents.GetCount-ff44">;
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">;
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">;
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">;
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">;
  "me.joinedTeams.channels.messages.replies.GetCount-2855": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.replies.GetCount-2855">;
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta">;
  "me.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote">;
  "me.joinedTeams.channels.messages.GetCount-31de": TeamsGraphOperationInput<"me.joinedTeams.channels.messages.GetCount-31de">;
  "me.joinedTeams.team.channels.channel.messages.delta": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.messages.delta">;
  "me.joinedTeams.team.channels.channel.messages.replyWithQuote": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.messages.replyWithQuote">;
  "me.joinedTeams.team.channels.channel.archive": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.archive">;
  "me.joinedTeams.team.channels.channel.completeMigration": TeamsGraphOperationInput<"me.joinedTeams.team.channels.channel.completeMigration">;
}

export interface TeamsGraphMeTeam01GeneratedClient {
  MeListJoinedTeams(...args: TeamsGraphOperationArgs<"me.ListJoinedTeams">): Promise<TeamsGraphOperationResponseMap["me.ListJoinedTeams"]>;
  MeCreateJoinedTeams(...args: TeamsGraphOperationArgs<"me.CreateJoinedTeams">): Promise<TeamsGraphOperationResponseMap["me.CreateJoinedTeams"]>;
  MeGetJoinedTeams(...args: TeamsGraphOperationArgs<"me.GetJoinedTeams">): Promise<TeamsGraphOperationResponseMap["me.GetJoinedTeams"]>;
  MeUpdateJoinedTeams(...args: TeamsGraphOperationArgs<"me.UpdateJoinedTeams">): Promise<TeamsGraphOperationResponseMap["me.UpdateJoinedTeams"]>;
  MeDeleteJoinedTeams(...args: TeamsGraphOperationArgs<"me.DeleteJoinedTeams">): Promise<TeamsGraphOperationResponseMap["me.DeleteJoinedTeams"]>;
  MeJoinedTeamsListAllChannels(...args: TeamsGraphOperationArgs<"me.joinedTeams.ListAllChannels">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.ListAllChannels"]>;
  MeJoinedTeamsGetAllChannels(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetAllChannels">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetAllChannels"]>;
  MeJoinedTeamsAllChannelsGetCount382e(...args: TeamsGraphOperationArgs<"me.joinedTeams.allChannels.GetCount-382e">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.allChannels.GetCount-382e"]>;
  MeJoinedTeamsListChannels(...args: TeamsGraphOperationArgs<"me.joinedTeams.ListChannels">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.ListChannels"]>;
  MeJoinedTeamsCreateChannels(...args: TeamsGraphOperationArgs<"me.joinedTeams.CreateChannels">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.CreateChannels"]>;
  MeJoinedTeamsGetChannels(...args: TeamsGraphOperationArgs<"me.joinedTeams.GetChannels">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.GetChannels"]>;
  MeJoinedTeamsUpdateChannels(...args: TeamsGraphOperationArgs<"me.joinedTeams.UpdateChannels">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.UpdateChannels"]>;
  MeJoinedTeamsDeleteChannels(...args: TeamsGraphOperationArgs<"me.joinedTeams.DeleteChannels">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.DeleteChannels"]>;
  MeJoinedTeamsChannelsListAllMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.ListAllMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.ListAllMembers"]>;
  MeJoinedTeamsChannelsCreateAllMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.CreateAllMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.CreateAllMembers"]>;
  MeJoinedTeamsChannelsGetAllMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.GetAllMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.GetAllMembers"]>;
  MeJoinedTeamsChannelsUpdateAllMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.UpdateAllMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.UpdateAllMembers"]>;
  MeJoinedTeamsChannelsDeleteAllMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.DeleteAllMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.DeleteAllMembers"]>;
  MeJoinedTeamsChannelsAllMembersGetCount4afb(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.allMembers.GetCount-4afb">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.allMembers.GetCount-4afb"]>;
  MeJoinedTeamsTeamChannelsChannelAllMembersAdd(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.allMembers.add">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.allMembers.add"]>;
  MeJoinedTeamsTeamChannelsChannelAllMembersRemove(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.allMembers.remove">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.allMembers.remove"]>;
  MeJoinedTeamsChannelsListEnabledApps(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.ListEnabledApps">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.ListEnabledApps"]>;
  MeJoinedTeamsChannelsGetEnabledApps(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.GetEnabledApps">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.GetEnabledApps"]>;
  MeJoinedTeamsChannelsEnabledAppsGetCountB537(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.enabledApps.GetCount-b537">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.enabledApps.GetCount-b537"]>;
  MeJoinedTeamsChannelsGetFilesFolder(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.GetFilesFolder">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.GetFilesFolder"]>;
  MeJoinedTeamsChannelsGetFilesFolderContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.GetFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.GetFilesFolderContent"]>;
  MeJoinedTeamsChannelsUpdateFilesFolderContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.UpdateFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.UpdateFilesFolderContent"]>;
  MeJoinedTeamsChannelsDeleteFilesFolderContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.DeleteFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.DeleteFilesFolderContent"]>;
  MeJoinedTeamsChannelsListMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.ListMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.ListMembers"]>;
  MeJoinedTeamsChannelsCreateMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.CreateMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.CreateMembers"]>;
  MeJoinedTeamsChannelsGetMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.GetMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.GetMembers"]>;
  MeJoinedTeamsChannelsUpdateMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.UpdateMembers"]>;
  MeJoinedTeamsChannelsDeleteMembers(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.DeleteMembers"]>;
  MeJoinedTeamsChannelsMembersGetCountF9b9(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.members.GetCount-f9b9">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.members.GetCount-f9b9"]>;
  MeJoinedTeamsTeamChannelsChannelMembersAdd(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.members.add">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.members.add"]>;
  MeJoinedTeamsTeamChannelsChannelMembersRemove(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.members.remove">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.members.remove"]>;
  MeJoinedTeamsChannelsListMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.ListMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.ListMessages"]>;
  MeJoinedTeamsChannelsCreateMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.CreateMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.CreateMessages"]>;
  MeJoinedTeamsChannelsGetMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.GetMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.GetMessages"]>;
  MeJoinedTeamsChannelsUpdateMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.UpdateMessages"]>;
  MeJoinedTeamsChannelsDeleteMessages(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.DeleteMessages"]>;
  MeJoinedTeamsChannelsMessagesListHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.ListHostedContents"]>;
  MeJoinedTeamsChannelsMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.CreateHostedContents"]>;
  MeJoinedTeamsChannelsMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.GetHostedContents"]>;
  MeJoinedTeamsChannelsMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.UpdateHostedContents"]>;
  MeJoinedTeamsChannelsMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.DeleteHostedContents"]>;
  MeJoinedTeamsChannelsMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.GetHostedContentsContent"]>;
  MeJoinedTeamsChannelsMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.UpdateHostedContentsContent"]>;
  MeJoinedTeamsChannelsMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.DeleteHostedContentsContent"]>;
  MeJoinedTeamsChannelsMessagesHostedContentsGetCount0878(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.hostedContents.GetCount-0878">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.hostedContents.GetCount-0878"]>;
  MeJoinedTeamsTeamChannelsChannelMessagesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.messages.chatMessage.setReaction"]>;
  MeJoinedTeamsTeamChannelsChannelMessagesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.messages.chatMessage.softDelete"]>;
  MeJoinedTeamsTeamChannelsChannelMessagesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete"]>;
  MeJoinedTeamsTeamChannelsChannelMessagesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction"]>;
  MeJoinedTeamsChannelsMessagesListReplies(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.ListReplies"]>;
  MeJoinedTeamsChannelsMessagesCreateReplies(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.CreateReplies"]>;
  MeJoinedTeamsChannelsMessagesGetReplies(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.GetReplies"]>;
  MeJoinedTeamsChannelsMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.UpdateReplies"]>;
  MeJoinedTeamsChannelsMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.DeleteReplies"]>;
  MeJoinedTeamsChannelsMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.replies.ListHostedContents"]>;
  MeJoinedTeamsChannelsMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.replies.CreateHostedContents"]>;
  MeJoinedTeamsChannelsMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.replies.GetHostedContents"]>;
  MeJoinedTeamsChannelsMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.replies.UpdateHostedContents"]>;
  MeJoinedTeamsChannelsMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.replies.DeleteHostedContents"]>;
  MeJoinedTeamsChannelsMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.replies.GetHostedContentsContent"]>;
  MeJoinedTeamsChannelsMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.replies.UpdateHostedContentsContent"]>;
  MeJoinedTeamsChannelsMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.replies.DeleteHostedContentsContent"]>;
  MeJoinedTeamsChannelsMessagesRepliesHostedContentsGetCountFf44(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.hostedContents.GetCount-ff44">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.replies.hostedContents.GetCount-ff44"]>;
  MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction"]>;
  MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete"]>;
  MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete"]>;
  MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction"]>;
  MeJoinedTeamsChannelsMessagesRepliesGetCount2855(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.GetCount-2855">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.replies.GetCount-2855"]>;
  MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta"]>;
  MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote"]>;
  MeJoinedTeamsChannelsMessagesGetCount31de(...args: TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.GetCount-31de">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.channels.messages.GetCount-31de"]>;
  MeJoinedTeamsTeamChannelsChannelMessagesDelta(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.delta">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.messages.delta"]>;
  MeJoinedTeamsTeamChannelsChannelMessagesReplyWithQuote(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.messages.replyWithQuote"]>;
  MeJoinedTeamsTeamChannelsChannelArchive(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.archive">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.archive"]>;
  MeJoinedTeamsTeamChannelsChannelCompleteMigration(...args: TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.completeMigration">): Promise<TeamsGraphOperationResponseMap["me.joinedTeams.team.channels.channel.completeMigration"]>;
}

export const TeamsGraphMeTeam01GeneratedFunctionNames = [
  "MeListJoinedTeams",
  "MeCreateJoinedTeams",
  "MeGetJoinedTeams",
  "MeUpdateJoinedTeams",
  "MeDeleteJoinedTeams",
  "MeJoinedTeamsListAllChannels",
  "MeJoinedTeamsGetAllChannels",
  "MeJoinedTeamsAllChannelsGetCount382e",
  "MeJoinedTeamsListChannels",
  "MeJoinedTeamsCreateChannels",
  "MeJoinedTeamsGetChannels",
  "MeJoinedTeamsUpdateChannels",
  "MeJoinedTeamsDeleteChannels",
  "MeJoinedTeamsChannelsListAllMembers",
  "MeJoinedTeamsChannelsCreateAllMembers",
  "MeJoinedTeamsChannelsGetAllMembers",
  "MeJoinedTeamsChannelsUpdateAllMembers",
  "MeJoinedTeamsChannelsDeleteAllMembers",
  "MeJoinedTeamsChannelsAllMembersGetCount4afb",
  "MeJoinedTeamsTeamChannelsChannelAllMembersAdd",
  "MeJoinedTeamsTeamChannelsChannelAllMembersRemove",
  "MeJoinedTeamsChannelsListEnabledApps",
  "MeJoinedTeamsChannelsGetEnabledApps",
  "MeJoinedTeamsChannelsEnabledAppsGetCountB537",
  "MeJoinedTeamsChannelsGetFilesFolder",
  "MeJoinedTeamsChannelsGetFilesFolderContent",
  "MeJoinedTeamsChannelsUpdateFilesFolderContent",
  "MeJoinedTeamsChannelsDeleteFilesFolderContent",
  "MeJoinedTeamsChannelsListMembers",
  "MeJoinedTeamsChannelsCreateMembers",
  "MeJoinedTeamsChannelsGetMembers",
  "MeJoinedTeamsChannelsUpdateMembers",
  "MeJoinedTeamsChannelsDeleteMembers",
  "MeJoinedTeamsChannelsMembersGetCountF9b9",
  "MeJoinedTeamsTeamChannelsChannelMembersAdd",
  "MeJoinedTeamsTeamChannelsChannelMembersRemove",
  "MeJoinedTeamsChannelsListMessages",
  "MeJoinedTeamsChannelsCreateMessages",
  "MeJoinedTeamsChannelsGetMessages",
  "MeJoinedTeamsChannelsUpdateMessages",
  "MeJoinedTeamsChannelsDeleteMessages",
  "MeJoinedTeamsChannelsMessagesListHostedContents",
  "MeJoinedTeamsChannelsMessagesCreateHostedContents",
  "MeJoinedTeamsChannelsMessagesGetHostedContents",
  "MeJoinedTeamsChannelsMessagesUpdateHostedContents",
  "MeJoinedTeamsChannelsMessagesDeleteHostedContents",
  "MeJoinedTeamsChannelsMessagesGetHostedContentsContent",
  "MeJoinedTeamsChannelsMessagesUpdateHostedContentsContent",
  "MeJoinedTeamsChannelsMessagesDeleteHostedContentsContent",
  "MeJoinedTeamsChannelsMessagesHostedContentsGetCount0878",
  "MeJoinedTeamsTeamChannelsChannelMessagesChatMessageSetReaction",
  "MeJoinedTeamsTeamChannelsChannelMessagesChatMessageSoftDelete",
  "MeJoinedTeamsTeamChannelsChannelMessagesChatMessageUndoSoftDelete",
  "MeJoinedTeamsTeamChannelsChannelMessagesChatMessageUnsetReaction",
  "MeJoinedTeamsChannelsMessagesListReplies",
  "MeJoinedTeamsChannelsMessagesCreateReplies",
  "MeJoinedTeamsChannelsMessagesGetReplies",
  "MeJoinedTeamsChannelsMessagesUpdateReplies",
  "MeJoinedTeamsChannelsMessagesDeleteReplies",
  "MeJoinedTeamsChannelsMessagesRepliesListHostedContents",
  "MeJoinedTeamsChannelsMessagesRepliesCreateHostedContents",
  "MeJoinedTeamsChannelsMessagesRepliesGetHostedContents",
  "MeJoinedTeamsChannelsMessagesRepliesUpdateHostedContents",
  "MeJoinedTeamsChannelsMessagesRepliesDeleteHostedContents",
  "MeJoinedTeamsChannelsMessagesRepliesGetHostedContentsContent",
  "MeJoinedTeamsChannelsMessagesRepliesUpdateHostedContentsContent",
  "MeJoinedTeamsChannelsMessagesRepliesDeleteHostedContentsContent",
  "MeJoinedTeamsChannelsMessagesRepliesHostedContentsGetCountFf44",
  "MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction",
  "MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete",
  "MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete",
  "MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction",
  "MeJoinedTeamsChannelsMessagesRepliesGetCount2855",
  "MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesDelta",
  "MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote",
  "MeJoinedTeamsChannelsMessagesGetCount31de",
  "MeJoinedTeamsTeamChannelsChannelMessagesDelta",
  "MeJoinedTeamsTeamChannelsChannelMessagesReplyWithQuote",
  "MeJoinedTeamsTeamChannelsChannelArchive",
  "MeJoinedTeamsTeamChannelsChannelCompleteMigration"
] as const satisfies readonly (keyof TeamsGraphMeTeam01GeneratedClient)[];

export function createTeamsGraphMeTeam01GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphMeTeam01GeneratedClient {
  return {
    MeListJoinedTeams: (...args) => callOperation("me.ListJoinedTeams", ...(args as TeamsGraphOperationArgs<"me.ListJoinedTeams">)),
    MeCreateJoinedTeams: (...args) => callOperation("me.CreateJoinedTeams", ...(args as TeamsGraphOperationArgs<"me.CreateJoinedTeams">)),
    MeGetJoinedTeams: (...args) => callOperation("me.GetJoinedTeams", ...(args as TeamsGraphOperationArgs<"me.GetJoinedTeams">)),
    MeUpdateJoinedTeams: (...args) => callOperation("me.UpdateJoinedTeams", ...(args as TeamsGraphOperationArgs<"me.UpdateJoinedTeams">)),
    MeDeleteJoinedTeams: (...args) => callOperation("me.DeleteJoinedTeams", ...(args as TeamsGraphOperationArgs<"me.DeleteJoinedTeams">)),
    MeJoinedTeamsListAllChannels: (...args) => callOperation("me.joinedTeams.ListAllChannels", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.ListAllChannels">)),
    MeJoinedTeamsGetAllChannels: (...args) => callOperation("me.joinedTeams.GetAllChannels", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetAllChannels">)),
    MeJoinedTeamsAllChannelsGetCount382e: (...args) => callOperation("me.joinedTeams.allChannels.GetCount-382e", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.allChannels.GetCount-382e">)),
    MeJoinedTeamsListChannels: (...args) => callOperation("me.joinedTeams.ListChannels", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.ListChannels">)),
    MeJoinedTeamsCreateChannels: (...args) => callOperation("me.joinedTeams.CreateChannels", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.CreateChannels">)),
    MeJoinedTeamsGetChannels: (...args) => callOperation("me.joinedTeams.GetChannels", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.GetChannels">)),
    MeJoinedTeamsUpdateChannels: (...args) => callOperation("me.joinedTeams.UpdateChannels", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.UpdateChannels">)),
    MeJoinedTeamsDeleteChannels: (...args) => callOperation("me.joinedTeams.DeleteChannels", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.DeleteChannels">)),
    MeJoinedTeamsChannelsListAllMembers: (...args) => callOperation("me.joinedTeams.channels.ListAllMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.ListAllMembers">)),
    MeJoinedTeamsChannelsCreateAllMembers: (...args) => callOperation("me.joinedTeams.channels.CreateAllMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.CreateAllMembers">)),
    MeJoinedTeamsChannelsGetAllMembers: (...args) => callOperation("me.joinedTeams.channels.GetAllMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.GetAllMembers">)),
    MeJoinedTeamsChannelsUpdateAllMembers: (...args) => callOperation("me.joinedTeams.channels.UpdateAllMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.UpdateAllMembers">)),
    MeJoinedTeamsChannelsDeleteAllMembers: (...args) => callOperation("me.joinedTeams.channels.DeleteAllMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.DeleteAllMembers">)),
    MeJoinedTeamsChannelsAllMembersGetCount4afb: (...args) => callOperation("me.joinedTeams.channels.allMembers.GetCount-4afb", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.allMembers.GetCount-4afb">)),
    MeJoinedTeamsTeamChannelsChannelAllMembersAdd: (...args) => callOperation("me.joinedTeams.team.channels.channel.allMembers.add", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.allMembers.add">)),
    MeJoinedTeamsTeamChannelsChannelAllMembersRemove: (...args) => callOperation("me.joinedTeams.team.channels.channel.allMembers.remove", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.allMembers.remove">)),
    MeJoinedTeamsChannelsListEnabledApps: (...args) => callOperation("me.joinedTeams.channels.ListEnabledApps", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.ListEnabledApps">)),
    MeJoinedTeamsChannelsGetEnabledApps: (...args) => callOperation("me.joinedTeams.channels.GetEnabledApps", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.GetEnabledApps">)),
    MeJoinedTeamsChannelsEnabledAppsGetCountB537: (...args) => callOperation("me.joinedTeams.channels.enabledApps.GetCount-b537", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.enabledApps.GetCount-b537">)),
    MeJoinedTeamsChannelsGetFilesFolder: (...args) => callOperation("me.joinedTeams.channels.GetFilesFolder", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.GetFilesFolder">)),
    MeJoinedTeamsChannelsGetFilesFolderContent: (...args) => callOperation("me.joinedTeams.channels.GetFilesFolderContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.GetFilesFolderContent">)),
    MeJoinedTeamsChannelsUpdateFilesFolderContent: (...args) => callOperation("me.joinedTeams.channels.UpdateFilesFolderContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.UpdateFilesFolderContent">)),
    MeJoinedTeamsChannelsDeleteFilesFolderContent: (...args) => callOperation("me.joinedTeams.channels.DeleteFilesFolderContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.DeleteFilesFolderContent">)),
    MeJoinedTeamsChannelsListMembers: (...args) => callOperation("me.joinedTeams.channels.ListMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.ListMembers">)),
    MeJoinedTeamsChannelsCreateMembers: (...args) => callOperation("me.joinedTeams.channels.CreateMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.CreateMembers">)),
    MeJoinedTeamsChannelsGetMembers: (...args) => callOperation("me.joinedTeams.channels.GetMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.GetMembers">)),
    MeJoinedTeamsChannelsUpdateMembers: (...args) => callOperation("me.joinedTeams.channels.UpdateMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.UpdateMembers">)),
    MeJoinedTeamsChannelsDeleteMembers: (...args) => callOperation("me.joinedTeams.channels.DeleteMembers", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.DeleteMembers">)),
    MeJoinedTeamsChannelsMembersGetCountF9b9: (...args) => callOperation("me.joinedTeams.channels.members.GetCount-f9b9", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.members.GetCount-f9b9">)),
    MeJoinedTeamsTeamChannelsChannelMembersAdd: (...args) => callOperation("me.joinedTeams.team.channels.channel.members.add", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.members.add">)),
    MeJoinedTeamsTeamChannelsChannelMembersRemove: (...args) => callOperation("me.joinedTeams.team.channels.channel.members.remove", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.members.remove">)),
    MeJoinedTeamsChannelsListMessages: (...args) => callOperation("me.joinedTeams.channels.ListMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.ListMessages">)),
    MeJoinedTeamsChannelsCreateMessages: (...args) => callOperation("me.joinedTeams.channels.CreateMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.CreateMessages">)),
    MeJoinedTeamsChannelsGetMessages: (...args) => callOperation("me.joinedTeams.channels.GetMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.GetMessages">)),
    MeJoinedTeamsChannelsUpdateMessages: (...args) => callOperation("me.joinedTeams.channels.UpdateMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.UpdateMessages">)),
    MeJoinedTeamsChannelsDeleteMessages: (...args) => callOperation("me.joinedTeams.channels.DeleteMessages", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.DeleteMessages">)),
    MeJoinedTeamsChannelsMessagesListHostedContents: (...args) => callOperation("me.joinedTeams.channels.messages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.ListHostedContents">)),
    MeJoinedTeamsChannelsMessagesCreateHostedContents: (...args) => callOperation("me.joinedTeams.channels.messages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.CreateHostedContents">)),
    MeJoinedTeamsChannelsMessagesGetHostedContents: (...args) => callOperation("me.joinedTeams.channels.messages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.GetHostedContents">)),
    MeJoinedTeamsChannelsMessagesUpdateHostedContents: (...args) => callOperation("me.joinedTeams.channels.messages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.UpdateHostedContents">)),
    MeJoinedTeamsChannelsMessagesDeleteHostedContents: (...args) => callOperation("me.joinedTeams.channels.messages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.DeleteHostedContents">)),
    MeJoinedTeamsChannelsMessagesGetHostedContentsContent: (...args) => callOperation("me.joinedTeams.channels.messages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.GetHostedContentsContent">)),
    MeJoinedTeamsChannelsMessagesUpdateHostedContentsContent: (...args) => callOperation("me.joinedTeams.channels.messages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.UpdateHostedContentsContent">)),
    MeJoinedTeamsChannelsMessagesDeleteHostedContentsContent: (...args) => callOperation("me.joinedTeams.channels.messages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.DeleteHostedContentsContent">)),
    MeJoinedTeamsChannelsMessagesHostedContentsGetCount0878: (...args) => callOperation("me.joinedTeams.channels.messages.hostedContents.GetCount-0878", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.hostedContents.GetCount-0878">)),
    MeJoinedTeamsTeamChannelsChannelMessagesChatMessageSetReaction: (...args) => callOperation("me.joinedTeams.team.channels.channel.messages.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.setReaction">)),
    MeJoinedTeamsTeamChannelsChannelMessagesChatMessageSoftDelete: (...args) => callOperation("me.joinedTeams.team.channels.channel.messages.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.softDelete">)),
    MeJoinedTeamsTeamChannelsChannelMessagesChatMessageUndoSoftDelete: (...args) => callOperation("me.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.undoSoftDelete">)),
    MeJoinedTeamsTeamChannelsChannelMessagesChatMessageUnsetReaction: (...args) => callOperation("me.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.unsetReaction">)),
    MeJoinedTeamsChannelsMessagesListReplies: (...args) => callOperation("me.joinedTeams.channels.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.ListReplies">)),
    MeJoinedTeamsChannelsMessagesCreateReplies: (...args) => callOperation("me.joinedTeams.channels.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.CreateReplies">)),
    MeJoinedTeamsChannelsMessagesGetReplies: (...args) => callOperation("me.joinedTeams.channels.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.GetReplies">)),
    MeJoinedTeamsChannelsMessagesUpdateReplies: (...args) => callOperation("me.joinedTeams.channels.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.UpdateReplies">)),
    MeJoinedTeamsChannelsMessagesDeleteReplies: (...args) => callOperation("me.joinedTeams.channels.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.DeleteReplies">)),
    MeJoinedTeamsChannelsMessagesRepliesListHostedContents: (...args) => callOperation("me.joinedTeams.channels.messages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.ListHostedContents">)),
    MeJoinedTeamsChannelsMessagesRepliesCreateHostedContents: (...args) => callOperation("me.joinedTeams.channels.messages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.CreateHostedContents">)),
    MeJoinedTeamsChannelsMessagesRepliesGetHostedContents: (...args) => callOperation("me.joinedTeams.channels.messages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.GetHostedContents">)),
    MeJoinedTeamsChannelsMessagesRepliesUpdateHostedContents: (...args) => callOperation("me.joinedTeams.channels.messages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.UpdateHostedContents">)),
    MeJoinedTeamsChannelsMessagesRepliesDeleteHostedContents: (...args) => callOperation("me.joinedTeams.channels.messages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.DeleteHostedContents">)),
    MeJoinedTeamsChannelsMessagesRepliesGetHostedContentsContent: (...args) => callOperation("me.joinedTeams.channels.messages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.GetHostedContentsContent">)),
    MeJoinedTeamsChannelsMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("me.joinedTeams.channels.messages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.UpdateHostedContentsContent">)),
    MeJoinedTeamsChannelsMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("me.joinedTeams.channels.messages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.DeleteHostedContentsContent">)),
    MeJoinedTeamsChannelsMessagesRepliesHostedContentsGetCountFf44: (...args) => callOperation("me.joinedTeams.channels.messages.replies.hostedContents.GetCount-ff44", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.hostedContents.GetCount-ff44">)),
    MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">)),
    MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">)),
    MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">)),
    MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">)),
    MeJoinedTeamsChannelsMessagesRepliesGetCount2855: (...args) => callOperation("me.joinedTeams.channels.messages.replies.GetCount-2855", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.replies.GetCount-2855">)),
    MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesDelta: (...args) => callOperation("me.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.delta">)),
    MeJoinedTeamsTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote: (...args) => callOperation("me.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.chatMessage.replies.replyWithQuote">)),
    MeJoinedTeamsChannelsMessagesGetCount31de: (...args) => callOperation("me.joinedTeams.channels.messages.GetCount-31de", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.channels.messages.GetCount-31de">)),
    MeJoinedTeamsTeamChannelsChannelMessagesDelta: (...args) => callOperation("me.joinedTeams.team.channels.channel.messages.delta", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.delta">)),
    MeJoinedTeamsTeamChannelsChannelMessagesReplyWithQuote: (...args) => callOperation("me.joinedTeams.team.channels.channel.messages.replyWithQuote", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.messages.replyWithQuote">)),
    MeJoinedTeamsTeamChannelsChannelArchive: (...args) => callOperation("me.joinedTeams.team.channels.channel.archive", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.archive">)),
    MeJoinedTeamsTeamChannelsChannelCompleteMigration: (...args) => callOperation("me.joinedTeams.team.channels.channel.completeMigration", ...(args as TeamsGraphOperationArgs<"me.joinedTeams.team.channels.channel.completeMigration">)),
  };
}
