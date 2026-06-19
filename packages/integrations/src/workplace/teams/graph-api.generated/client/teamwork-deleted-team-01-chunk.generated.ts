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
export const TeamsGraphTeamworkDeletedTeam01OperationKeys = [
  "teamwork.ListDeletedTeams",
  "teamwork.CreateDeletedTeams",
  "teamwork.GetDeletedTeams",
  "teamwork.UpdateDeletedTeams",
  "teamwork.DeleteDeletedTeams",
  "teamwork.deletedTeams.ListChannels",
  "teamwork.deletedTeams.CreateChannels",
  "teamwork.deletedTeams.GetChannels",
  "teamwork.deletedTeams.UpdateChannels",
  "teamwork.deletedTeams.DeleteChannels",
  "teamwork.deletedTeams.channels.ListAllMembers",
  "teamwork.deletedTeams.channels.CreateAllMembers",
  "teamwork.deletedTeams.channels.GetAllMembers",
  "teamwork.deletedTeams.channels.UpdateAllMembers",
  "teamwork.deletedTeams.channels.DeleteAllMembers",
  "teamwork.deletedTeams.channels.allMembers.GetCount-c12c",
  "teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.add",
  "teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.remove",
  "teamwork.deletedTeams.channels.ListEnabledApps",
  "teamwork.deletedTeams.channels.GetEnabledApps",
  "teamwork.deletedTeams.channels.enabledApps.GetCount-bbef",
  "teamwork.deletedTeams.channels.GetFilesFolder",
  "teamwork.deletedTeams.channels.GetFilesFolderContent",
  "teamwork.deletedTeams.channels.UpdateFilesFolderContent",
  "teamwork.deletedTeams.channels.DeleteFilesFolderContent",
  "teamwork.deletedTeams.channels.ListMembers",
  "teamwork.deletedTeams.channels.CreateMembers",
  "teamwork.deletedTeams.channels.GetMembers",
  "teamwork.deletedTeams.channels.UpdateMembers",
  "teamwork.deletedTeams.channels.DeleteMembers",
  "teamwork.deletedTeams.channels.members.GetCount-f8e9",
  "teamwork.deletedTeams.deletedTeam.channels.channel.members.add",
  "teamwork.deletedTeams.deletedTeam.channels.channel.members.remove",
  "teamwork.deletedTeams.channels.ListMessages",
  "teamwork.deletedTeams.channels.CreateMessages",
  "teamwork.deletedTeams.channels.GetMessages",
  "teamwork.deletedTeams.channels.UpdateMessages",
  "teamwork.deletedTeams.channels.DeleteMessages",
  "teamwork.deletedTeams.channels.messages.ListHostedContents",
  "teamwork.deletedTeams.channels.messages.CreateHostedContents",
  "teamwork.deletedTeams.channels.messages.GetHostedContents",
  "teamwork.deletedTeams.channels.messages.UpdateHostedContents",
  "teamwork.deletedTeams.channels.messages.DeleteHostedContents",
  "teamwork.deletedTeams.channels.messages.GetHostedContentsContent",
  "teamwork.deletedTeams.channels.messages.UpdateHostedContentsContent",
  "teamwork.deletedTeams.channels.messages.DeleteHostedContentsContent",
  "teamwork.deletedTeams.channels.messages.hostedContents.GetCount-bbdc",
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.setReaction",
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.softDelete",
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.undoSoftDelete",
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.unsetReaction",
  "teamwork.deletedTeams.channels.messages.ListReplies",
  "teamwork.deletedTeams.channels.messages.CreateReplies",
  "teamwork.deletedTeams.channels.messages.GetReplies",
  "teamwork.deletedTeams.channels.messages.UpdateReplies",
  "teamwork.deletedTeams.channels.messages.DeleteReplies",
  "teamwork.deletedTeams.channels.messages.replies.ListHostedContents",
  "teamwork.deletedTeams.channels.messages.replies.CreateHostedContents",
  "teamwork.deletedTeams.channels.messages.replies.GetHostedContents",
  "teamwork.deletedTeams.channels.messages.replies.UpdateHostedContents",
  "teamwork.deletedTeams.channels.messages.replies.DeleteHostedContents",
  "teamwork.deletedTeams.channels.messages.replies.GetHostedContentsContent",
  "teamwork.deletedTeams.channels.messages.replies.UpdateHostedContentsContent",
  "teamwork.deletedTeams.channels.messages.replies.DeleteHostedContentsContent",
  "teamwork.deletedTeams.channels.messages.replies.hostedContents.GetCount-a9d7",
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.setReaction",
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.softDelete",
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete",
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction",
  "teamwork.deletedTeams.channels.messages.replies.GetCount-32b1",
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.delta",
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.replyWithQuote",
  "teamwork.deletedTeams.channels.messages.GetCount-d80c",
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.delta",
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.replyWithQuote",
  "teamwork.deletedTeams.deletedTeam.channels.channel.archive",
  "teamwork.deletedTeams.deletedTeam.channels.channel.completeMigration",
  "teamwork.deletedTeams.deletedTeam.channels.channel.doesUserHaveAccess",
  "teamwork.deletedTeams.deletedTeam.channels.channel.provisionEmail",
  "teamwork.deletedTeams.deletedTeam.channels.channel.removeEmail"
] as const;
export type TeamsGraphTeamworkDeletedTeam01OperationKey = typeof TeamsGraphTeamworkDeletedTeam01OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamworkDeletedTeam01OperationPathParamMap {
  "teamwork.ListDeletedTeams": {};
  "teamwork.CreateDeletedTeams": {};
  "teamwork.GetDeletedTeams": { "deletedTeam-id": TeamsGraphPathParamValue };
  "teamwork.UpdateDeletedTeams": { "deletedTeam-id": TeamsGraphPathParamValue };
  "teamwork.DeleteDeletedTeams": { "deletedTeam-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.ListChannels": { "deletedTeam-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.CreateChannels": { "deletedTeam-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.GetChannels": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.UpdateChannels": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.DeleteChannels": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.ListAllMembers": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.CreateAllMembers": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.GetAllMembers": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.UpdateAllMembers": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.DeleteAllMembers": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.allMembers.GetCount-c12c": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.add": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.remove": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.ListEnabledApps": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.GetEnabledApps": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsApp-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.enabledApps.GetCount-bbef": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.GetFilesFolder": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.GetFilesFolderContent": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.UpdateFilesFolderContent": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.DeleteFilesFolderContent": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.ListMembers": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.CreateMembers": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.GetMembers": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.UpdateMembers": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.DeleteMembers": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.members.GetCount-f8e9": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.members.add": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.members.remove": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.ListMessages": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.CreateMessages": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.GetMessages": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.UpdateMessages": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.DeleteMessages": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.ListHostedContents": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.CreateHostedContents": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.GetHostedContents": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.UpdateHostedContents": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.DeleteHostedContents": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.GetHostedContentsContent": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.UpdateHostedContentsContent": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.DeleteHostedContentsContent": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.hostedContents.GetCount-bbdc": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.setReaction": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.softDelete": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.undoSoftDelete": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.unsetReaction": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.ListReplies": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.CreateReplies": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.GetReplies": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.UpdateReplies": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.DeleteReplies": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.replies.ListHostedContents": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.replies.CreateHostedContents": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.replies.GetHostedContents": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.replies.UpdateHostedContents": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.replies.DeleteHostedContents": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.replies.GetHostedContentsContent": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.replies.UpdateHostedContentsContent": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.replies.DeleteHostedContentsContent": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.replies.hostedContents.GetCount-a9d7": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.setReaction": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.softDelete": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.replies.GetCount-32b1": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.delta": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.replyWithQuote": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.channels.messages.GetCount-d80c": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.delta": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.replyWithQuote": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.archive": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.completeMigration": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.doesUserHaveAccess": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.provisionEmail": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teamwork.deletedTeams.deletedTeam.channels.channel.removeEmail": { "deletedTeam-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamworkDeletedTeam01OperationRequestMap {
  "teamwork.ListDeletedTeams": TeamsGraphOperationInput<"teamwork.ListDeletedTeams">;
  "teamwork.CreateDeletedTeams": TeamsGraphOperationInput<"teamwork.CreateDeletedTeams">;
  "teamwork.GetDeletedTeams": TeamsGraphOperationInput<"teamwork.GetDeletedTeams">;
  "teamwork.UpdateDeletedTeams": TeamsGraphOperationInput<"teamwork.UpdateDeletedTeams">;
  "teamwork.DeleteDeletedTeams": TeamsGraphOperationInput<"teamwork.DeleteDeletedTeams">;
  "teamwork.deletedTeams.ListChannels": TeamsGraphOperationInput<"teamwork.deletedTeams.ListChannels">;
  "teamwork.deletedTeams.CreateChannels": TeamsGraphOperationInput<"teamwork.deletedTeams.CreateChannels">;
  "teamwork.deletedTeams.GetChannels": TeamsGraphOperationInput<"teamwork.deletedTeams.GetChannels">;
  "teamwork.deletedTeams.UpdateChannels": TeamsGraphOperationInput<"teamwork.deletedTeams.UpdateChannels">;
  "teamwork.deletedTeams.DeleteChannels": TeamsGraphOperationInput<"teamwork.deletedTeams.DeleteChannels">;
  "teamwork.deletedTeams.channels.ListAllMembers": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.ListAllMembers">;
  "teamwork.deletedTeams.channels.CreateAllMembers": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.CreateAllMembers">;
  "teamwork.deletedTeams.channels.GetAllMembers": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.GetAllMembers">;
  "teamwork.deletedTeams.channels.UpdateAllMembers": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.UpdateAllMembers">;
  "teamwork.deletedTeams.channels.DeleteAllMembers": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.DeleteAllMembers">;
  "teamwork.deletedTeams.channels.allMembers.GetCount-c12c": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.allMembers.GetCount-c12c">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.add": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.add">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.remove": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.remove">;
  "teamwork.deletedTeams.channels.ListEnabledApps": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.ListEnabledApps">;
  "teamwork.deletedTeams.channels.GetEnabledApps": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.GetEnabledApps">;
  "teamwork.deletedTeams.channels.enabledApps.GetCount-bbef": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.enabledApps.GetCount-bbef">;
  "teamwork.deletedTeams.channels.GetFilesFolder": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.GetFilesFolder">;
  "teamwork.deletedTeams.channels.GetFilesFolderContent": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.GetFilesFolderContent">;
  "teamwork.deletedTeams.channels.UpdateFilesFolderContent": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.UpdateFilesFolderContent">;
  "teamwork.deletedTeams.channels.DeleteFilesFolderContent": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.DeleteFilesFolderContent">;
  "teamwork.deletedTeams.channels.ListMembers": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.ListMembers">;
  "teamwork.deletedTeams.channels.CreateMembers": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.CreateMembers">;
  "teamwork.deletedTeams.channels.GetMembers": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.GetMembers">;
  "teamwork.deletedTeams.channels.UpdateMembers": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.UpdateMembers">;
  "teamwork.deletedTeams.channels.DeleteMembers": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.DeleteMembers">;
  "teamwork.deletedTeams.channels.members.GetCount-f8e9": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.members.GetCount-f8e9">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.members.add": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.members.add">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.members.remove": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.members.remove">;
  "teamwork.deletedTeams.channels.ListMessages": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.ListMessages">;
  "teamwork.deletedTeams.channels.CreateMessages": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.CreateMessages">;
  "teamwork.deletedTeams.channels.GetMessages": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.GetMessages">;
  "teamwork.deletedTeams.channels.UpdateMessages": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.UpdateMessages">;
  "teamwork.deletedTeams.channels.DeleteMessages": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.DeleteMessages">;
  "teamwork.deletedTeams.channels.messages.ListHostedContents": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.ListHostedContents">;
  "teamwork.deletedTeams.channels.messages.CreateHostedContents": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.CreateHostedContents">;
  "teamwork.deletedTeams.channels.messages.GetHostedContents": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.GetHostedContents">;
  "teamwork.deletedTeams.channels.messages.UpdateHostedContents": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.UpdateHostedContents">;
  "teamwork.deletedTeams.channels.messages.DeleteHostedContents": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.DeleteHostedContents">;
  "teamwork.deletedTeams.channels.messages.GetHostedContentsContent": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.GetHostedContentsContent">;
  "teamwork.deletedTeams.channels.messages.UpdateHostedContentsContent": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.UpdateHostedContentsContent">;
  "teamwork.deletedTeams.channels.messages.DeleteHostedContentsContent": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.DeleteHostedContentsContent">;
  "teamwork.deletedTeams.channels.messages.hostedContents.GetCount-bbdc": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.hostedContents.GetCount-bbdc">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.setReaction": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.setReaction">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.softDelete": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.softDelete">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.undoSoftDelete">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.unsetReaction": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.unsetReaction">;
  "teamwork.deletedTeams.channels.messages.ListReplies": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.ListReplies">;
  "teamwork.deletedTeams.channels.messages.CreateReplies": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.CreateReplies">;
  "teamwork.deletedTeams.channels.messages.GetReplies": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.GetReplies">;
  "teamwork.deletedTeams.channels.messages.UpdateReplies": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.UpdateReplies">;
  "teamwork.deletedTeams.channels.messages.DeleteReplies": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.DeleteReplies">;
  "teamwork.deletedTeams.channels.messages.replies.ListHostedContents": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.replies.ListHostedContents">;
  "teamwork.deletedTeams.channels.messages.replies.CreateHostedContents": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.replies.CreateHostedContents">;
  "teamwork.deletedTeams.channels.messages.replies.GetHostedContents": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.replies.GetHostedContents">;
  "teamwork.deletedTeams.channels.messages.replies.UpdateHostedContents": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.replies.UpdateHostedContents">;
  "teamwork.deletedTeams.channels.messages.replies.DeleteHostedContents": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.replies.DeleteHostedContents">;
  "teamwork.deletedTeams.channels.messages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.replies.GetHostedContentsContent">;
  "teamwork.deletedTeams.channels.messages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.replies.UpdateHostedContentsContent">;
  "teamwork.deletedTeams.channels.messages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.replies.DeleteHostedContentsContent">;
  "teamwork.deletedTeams.channels.messages.replies.hostedContents.GetCount-a9d7": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.replies.hostedContents.GetCount-a9d7">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">;
  "teamwork.deletedTeams.channels.messages.replies.GetCount-32b1": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.replies.GetCount-32b1">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.delta": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.delta">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.replyWithQuote">;
  "teamwork.deletedTeams.channels.messages.GetCount-d80c": TeamsGraphOperationInput<"teamwork.deletedTeams.channels.messages.GetCount-d80c">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.delta": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.delta">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.messages.replyWithQuote": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.replyWithQuote">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.archive": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.archive">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.completeMigration": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.completeMigration">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.doesUserHaveAccess": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.doesUserHaveAccess">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.provisionEmail": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.provisionEmail">;
  "teamwork.deletedTeams.deletedTeam.channels.channel.removeEmail": TeamsGraphOperationInput<"teamwork.deletedTeams.deletedTeam.channels.channel.removeEmail">;
}

export interface TeamsGraphTeamworkDeletedTeam01GeneratedClient {
  TeamworkListDeletedTeams(...args: TeamsGraphOperationArgs<"teamwork.ListDeletedTeams">): Promise<TeamsGraphOperationResponseMap["teamwork.ListDeletedTeams"]>;
  TeamworkCreateDeletedTeams(...args: TeamsGraphOperationArgs<"teamwork.CreateDeletedTeams">): Promise<TeamsGraphOperationResponseMap["teamwork.CreateDeletedTeams"]>;
  TeamworkGetDeletedTeams(...args: TeamsGraphOperationArgs<"teamwork.GetDeletedTeams">): Promise<TeamsGraphOperationResponseMap["teamwork.GetDeletedTeams"]>;
  TeamworkUpdateDeletedTeams(...args: TeamsGraphOperationArgs<"teamwork.UpdateDeletedTeams">): Promise<TeamsGraphOperationResponseMap["teamwork.UpdateDeletedTeams"]>;
  TeamworkDeleteDeletedTeams(...args: TeamsGraphOperationArgs<"teamwork.DeleteDeletedTeams">): Promise<TeamsGraphOperationResponseMap["teamwork.DeleteDeletedTeams"]>;
  TeamworkDeletedTeamsListChannels(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.ListChannels">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.ListChannels"]>;
  TeamworkDeletedTeamsCreateChannels(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.CreateChannels">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.CreateChannels"]>;
  TeamworkDeletedTeamsGetChannels(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.GetChannels">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.GetChannels"]>;
  TeamworkDeletedTeamsUpdateChannels(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.UpdateChannels">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.UpdateChannels"]>;
  TeamworkDeletedTeamsDeleteChannels(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.DeleteChannels">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.DeleteChannels"]>;
  TeamworkDeletedTeamsChannelsListAllMembers(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.ListAllMembers">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.ListAllMembers"]>;
  TeamworkDeletedTeamsChannelsCreateAllMembers(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.CreateAllMembers">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.CreateAllMembers"]>;
  TeamworkDeletedTeamsChannelsGetAllMembers(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetAllMembers">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.GetAllMembers"]>;
  TeamworkDeletedTeamsChannelsUpdateAllMembers(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.UpdateAllMembers">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.UpdateAllMembers"]>;
  TeamworkDeletedTeamsChannelsDeleteAllMembers(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.DeleteAllMembers">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.DeleteAllMembers"]>;
  TeamworkDeletedTeamsChannelsAllMembersGetCountC12c(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.allMembers.GetCount-c12c">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.allMembers.GetCount-c12c"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelAllMembersAdd(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.add">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.add"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelAllMembersRemove(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.remove">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.remove"]>;
  TeamworkDeletedTeamsChannelsListEnabledApps(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.ListEnabledApps">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.ListEnabledApps"]>;
  TeamworkDeletedTeamsChannelsGetEnabledApps(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetEnabledApps">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.GetEnabledApps"]>;
  TeamworkDeletedTeamsChannelsEnabledAppsGetCountBbef(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.enabledApps.GetCount-bbef">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.enabledApps.GetCount-bbef"]>;
  TeamworkDeletedTeamsChannelsGetFilesFolder(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetFilesFolder">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.GetFilesFolder"]>;
  TeamworkDeletedTeamsChannelsGetFilesFolderContent(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.GetFilesFolderContent"]>;
  TeamworkDeletedTeamsChannelsUpdateFilesFolderContent(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.UpdateFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.UpdateFilesFolderContent"]>;
  TeamworkDeletedTeamsChannelsDeleteFilesFolderContent(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.DeleteFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.DeleteFilesFolderContent"]>;
  TeamworkDeletedTeamsChannelsListMembers(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.ListMembers">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.ListMembers"]>;
  TeamworkDeletedTeamsChannelsCreateMembers(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.CreateMembers">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.CreateMembers"]>;
  TeamworkDeletedTeamsChannelsGetMembers(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetMembers">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.GetMembers"]>;
  TeamworkDeletedTeamsChannelsUpdateMembers(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.UpdateMembers"]>;
  TeamworkDeletedTeamsChannelsDeleteMembers(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.DeleteMembers"]>;
  TeamworkDeletedTeamsChannelsMembersGetCountF8e9(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.members.GetCount-f8e9">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.members.GetCount-f8e9"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMembersAdd(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.members.add">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.members.add"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMembersRemove(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.members.remove">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.members.remove"]>;
  TeamworkDeletedTeamsChannelsListMessages(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.ListMessages">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.ListMessages"]>;
  TeamworkDeletedTeamsChannelsCreateMessages(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.CreateMessages">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.CreateMessages"]>;
  TeamworkDeletedTeamsChannelsGetMessages(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetMessages">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.GetMessages"]>;
  TeamworkDeletedTeamsChannelsUpdateMessages(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.UpdateMessages"]>;
  TeamworkDeletedTeamsChannelsDeleteMessages(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.DeleteMessages"]>;
  TeamworkDeletedTeamsChannelsMessagesListHostedContents(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.ListHostedContents"]>;
  TeamworkDeletedTeamsChannelsMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.CreateHostedContents"]>;
  TeamworkDeletedTeamsChannelsMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.GetHostedContents"]>;
  TeamworkDeletedTeamsChannelsMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.UpdateHostedContents"]>;
  TeamworkDeletedTeamsChannelsMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.DeleteHostedContents"]>;
  TeamworkDeletedTeamsChannelsMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.GetHostedContentsContent"]>;
  TeamworkDeletedTeamsChannelsMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.UpdateHostedContentsContent"]>;
  TeamworkDeletedTeamsChannelsMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.DeleteHostedContentsContent"]>;
  TeamworkDeletedTeamsChannelsMessagesHostedContentsGetCountBbdc(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.hostedContents.GetCount-bbdc">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.hostedContents.GetCount-bbdc"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.setReaction"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.softDelete"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.undoSoftDelete"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.unsetReaction"]>;
  TeamworkDeletedTeamsChannelsMessagesListReplies(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.ListReplies"]>;
  TeamworkDeletedTeamsChannelsMessagesCreateReplies(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.CreateReplies"]>;
  TeamworkDeletedTeamsChannelsMessagesGetReplies(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.GetReplies"]>;
  TeamworkDeletedTeamsChannelsMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.UpdateReplies"]>;
  TeamworkDeletedTeamsChannelsMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.DeleteReplies"]>;
  TeamworkDeletedTeamsChannelsMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.replies.ListHostedContents"]>;
  TeamworkDeletedTeamsChannelsMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.replies.CreateHostedContents"]>;
  TeamworkDeletedTeamsChannelsMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.replies.GetHostedContents"]>;
  TeamworkDeletedTeamsChannelsMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.replies.UpdateHostedContents"]>;
  TeamworkDeletedTeamsChannelsMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.replies.DeleteHostedContents"]>;
  TeamworkDeletedTeamsChannelsMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.replies.GetHostedContentsContent"]>;
  TeamworkDeletedTeamsChannelsMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.replies.UpdateHostedContentsContent"]>;
  TeamworkDeletedTeamsChannelsMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.replies.DeleteHostedContentsContent"]>;
  TeamworkDeletedTeamsChannelsMessagesRepliesHostedContentsGetCountA9d7(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.hostedContents.GetCount-a9d7">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.replies.hostedContents.GetCount-a9d7"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.setReaction"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.softDelete"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction"]>;
  TeamworkDeletedTeamsChannelsMessagesRepliesGetCount32b1(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.GetCount-32b1">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.replies.GetCount-32b1"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.delta"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.replyWithQuote"]>;
  TeamworkDeletedTeamsChannelsMessagesGetCountD80c(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.GetCount-d80c">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.channels.messages.GetCount-d80c"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesDelta(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.delta">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.messages.delta"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesReplyWithQuote(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.messages.replyWithQuote"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelArchive(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.archive">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.archive"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelCompleteMigration(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.completeMigration">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.completeMigration"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelDoesUserHaveAccess(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.doesUserHaveAccess">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.doesUserHaveAccess"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelProvisionEmail(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.provisionEmail">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.provisionEmail"]>;
  TeamworkDeletedTeamsDeletedTeamChannelsChannelRemoveEmail(...args: TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.removeEmail">): Promise<TeamsGraphOperationResponseMap["teamwork.deletedTeams.deletedTeam.channels.channel.removeEmail"]>;
}

export const TeamsGraphTeamworkDeletedTeam01GeneratedFunctionNames = [
  "TeamworkListDeletedTeams",
  "TeamworkCreateDeletedTeams",
  "TeamworkGetDeletedTeams",
  "TeamworkUpdateDeletedTeams",
  "TeamworkDeleteDeletedTeams",
  "TeamworkDeletedTeamsListChannels",
  "TeamworkDeletedTeamsCreateChannels",
  "TeamworkDeletedTeamsGetChannels",
  "TeamworkDeletedTeamsUpdateChannels",
  "TeamworkDeletedTeamsDeleteChannels",
  "TeamworkDeletedTeamsChannelsListAllMembers",
  "TeamworkDeletedTeamsChannelsCreateAllMembers",
  "TeamworkDeletedTeamsChannelsGetAllMembers",
  "TeamworkDeletedTeamsChannelsUpdateAllMembers",
  "TeamworkDeletedTeamsChannelsDeleteAllMembers",
  "TeamworkDeletedTeamsChannelsAllMembersGetCountC12c",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelAllMembersAdd",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelAllMembersRemove",
  "TeamworkDeletedTeamsChannelsListEnabledApps",
  "TeamworkDeletedTeamsChannelsGetEnabledApps",
  "TeamworkDeletedTeamsChannelsEnabledAppsGetCountBbef",
  "TeamworkDeletedTeamsChannelsGetFilesFolder",
  "TeamworkDeletedTeamsChannelsGetFilesFolderContent",
  "TeamworkDeletedTeamsChannelsUpdateFilesFolderContent",
  "TeamworkDeletedTeamsChannelsDeleteFilesFolderContent",
  "TeamworkDeletedTeamsChannelsListMembers",
  "TeamworkDeletedTeamsChannelsCreateMembers",
  "TeamworkDeletedTeamsChannelsGetMembers",
  "TeamworkDeletedTeamsChannelsUpdateMembers",
  "TeamworkDeletedTeamsChannelsDeleteMembers",
  "TeamworkDeletedTeamsChannelsMembersGetCountF8e9",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMembersAdd",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMembersRemove",
  "TeamworkDeletedTeamsChannelsListMessages",
  "TeamworkDeletedTeamsChannelsCreateMessages",
  "TeamworkDeletedTeamsChannelsGetMessages",
  "TeamworkDeletedTeamsChannelsUpdateMessages",
  "TeamworkDeletedTeamsChannelsDeleteMessages",
  "TeamworkDeletedTeamsChannelsMessagesListHostedContents",
  "TeamworkDeletedTeamsChannelsMessagesCreateHostedContents",
  "TeamworkDeletedTeamsChannelsMessagesGetHostedContents",
  "TeamworkDeletedTeamsChannelsMessagesUpdateHostedContents",
  "TeamworkDeletedTeamsChannelsMessagesDeleteHostedContents",
  "TeamworkDeletedTeamsChannelsMessagesGetHostedContentsContent",
  "TeamworkDeletedTeamsChannelsMessagesUpdateHostedContentsContent",
  "TeamworkDeletedTeamsChannelsMessagesDeleteHostedContentsContent",
  "TeamworkDeletedTeamsChannelsMessagesHostedContentsGetCountBbdc",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageSetReaction",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageSoftDelete",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageUndoSoftDelete",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageUnsetReaction",
  "TeamworkDeletedTeamsChannelsMessagesListReplies",
  "TeamworkDeletedTeamsChannelsMessagesCreateReplies",
  "TeamworkDeletedTeamsChannelsMessagesGetReplies",
  "TeamworkDeletedTeamsChannelsMessagesUpdateReplies",
  "TeamworkDeletedTeamsChannelsMessagesDeleteReplies",
  "TeamworkDeletedTeamsChannelsMessagesRepliesListHostedContents",
  "TeamworkDeletedTeamsChannelsMessagesRepliesCreateHostedContents",
  "TeamworkDeletedTeamsChannelsMessagesRepliesGetHostedContents",
  "TeamworkDeletedTeamsChannelsMessagesRepliesUpdateHostedContents",
  "TeamworkDeletedTeamsChannelsMessagesRepliesDeleteHostedContents",
  "TeamworkDeletedTeamsChannelsMessagesRepliesGetHostedContentsContent",
  "TeamworkDeletedTeamsChannelsMessagesRepliesUpdateHostedContentsContent",
  "TeamworkDeletedTeamsChannelsMessagesRepliesDeleteHostedContentsContent",
  "TeamworkDeletedTeamsChannelsMessagesRepliesHostedContentsGetCountA9d7",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction",
  "TeamworkDeletedTeamsChannelsMessagesRepliesGetCount32b1",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesDelta",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote",
  "TeamworkDeletedTeamsChannelsMessagesGetCountD80c",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesDelta",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesReplyWithQuote",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelArchive",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelCompleteMigration",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelDoesUserHaveAccess",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelProvisionEmail",
  "TeamworkDeletedTeamsDeletedTeamChannelsChannelRemoveEmail"
] as const satisfies readonly (keyof TeamsGraphTeamworkDeletedTeam01GeneratedClient)[];

export function createTeamsGraphTeamworkDeletedTeam01GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamworkDeletedTeam01GeneratedClient {
  return {
    TeamworkListDeletedTeams: (...args) => callOperation("teamwork.ListDeletedTeams", ...(args as TeamsGraphOperationArgs<"teamwork.ListDeletedTeams">)),
    TeamworkCreateDeletedTeams: (...args) => callOperation("teamwork.CreateDeletedTeams", ...(args as TeamsGraphOperationArgs<"teamwork.CreateDeletedTeams">)),
    TeamworkGetDeletedTeams: (...args) => callOperation("teamwork.GetDeletedTeams", ...(args as TeamsGraphOperationArgs<"teamwork.GetDeletedTeams">)),
    TeamworkUpdateDeletedTeams: (...args) => callOperation("teamwork.UpdateDeletedTeams", ...(args as TeamsGraphOperationArgs<"teamwork.UpdateDeletedTeams">)),
    TeamworkDeleteDeletedTeams: (...args) => callOperation("teamwork.DeleteDeletedTeams", ...(args as TeamsGraphOperationArgs<"teamwork.DeleteDeletedTeams">)),
    TeamworkDeletedTeamsListChannels: (...args) => callOperation("teamwork.deletedTeams.ListChannels", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.ListChannels">)),
    TeamworkDeletedTeamsCreateChannels: (...args) => callOperation("teamwork.deletedTeams.CreateChannels", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.CreateChannels">)),
    TeamworkDeletedTeamsGetChannels: (...args) => callOperation("teamwork.deletedTeams.GetChannels", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.GetChannels">)),
    TeamworkDeletedTeamsUpdateChannels: (...args) => callOperation("teamwork.deletedTeams.UpdateChannels", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.UpdateChannels">)),
    TeamworkDeletedTeamsDeleteChannels: (...args) => callOperation("teamwork.deletedTeams.DeleteChannels", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.DeleteChannels">)),
    TeamworkDeletedTeamsChannelsListAllMembers: (...args) => callOperation("teamwork.deletedTeams.channels.ListAllMembers", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.ListAllMembers">)),
    TeamworkDeletedTeamsChannelsCreateAllMembers: (...args) => callOperation("teamwork.deletedTeams.channels.CreateAllMembers", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.CreateAllMembers">)),
    TeamworkDeletedTeamsChannelsGetAllMembers: (...args) => callOperation("teamwork.deletedTeams.channels.GetAllMembers", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetAllMembers">)),
    TeamworkDeletedTeamsChannelsUpdateAllMembers: (...args) => callOperation("teamwork.deletedTeams.channels.UpdateAllMembers", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.UpdateAllMembers">)),
    TeamworkDeletedTeamsChannelsDeleteAllMembers: (...args) => callOperation("teamwork.deletedTeams.channels.DeleteAllMembers", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.DeleteAllMembers">)),
    TeamworkDeletedTeamsChannelsAllMembersGetCountC12c: (...args) => callOperation("teamwork.deletedTeams.channels.allMembers.GetCount-c12c", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.allMembers.GetCount-c12c">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelAllMembersAdd: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.add", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.add">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelAllMembersRemove: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.remove", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.allMembers.remove">)),
    TeamworkDeletedTeamsChannelsListEnabledApps: (...args) => callOperation("teamwork.deletedTeams.channels.ListEnabledApps", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.ListEnabledApps">)),
    TeamworkDeletedTeamsChannelsGetEnabledApps: (...args) => callOperation("teamwork.deletedTeams.channels.GetEnabledApps", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetEnabledApps">)),
    TeamworkDeletedTeamsChannelsEnabledAppsGetCountBbef: (...args) => callOperation("teamwork.deletedTeams.channels.enabledApps.GetCount-bbef", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.enabledApps.GetCount-bbef">)),
    TeamworkDeletedTeamsChannelsGetFilesFolder: (...args) => callOperation("teamwork.deletedTeams.channels.GetFilesFolder", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetFilesFolder">)),
    TeamworkDeletedTeamsChannelsGetFilesFolderContent: (...args) => callOperation("teamwork.deletedTeams.channels.GetFilesFolderContent", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetFilesFolderContent">)),
    TeamworkDeletedTeamsChannelsUpdateFilesFolderContent: (...args) => callOperation("teamwork.deletedTeams.channels.UpdateFilesFolderContent", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.UpdateFilesFolderContent">)),
    TeamworkDeletedTeamsChannelsDeleteFilesFolderContent: (...args) => callOperation("teamwork.deletedTeams.channels.DeleteFilesFolderContent", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.DeleteFilesFolderContent">)),
    TeamworkDeletedTeamsChannelsListMembers: (...args) => callOperation("teamwork.deletedTeams.channels.ListMembers", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.ListMembers">)),
    TeamworkDeletedTeamsChannelsCreateMembers: (...args) => callOperation("teamwork.deletedTeams.channels.CreateMembers", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.CreateMembers">)),
    TeamworkDeletedTeamsChannelsGetMembers: (...args) => callOperation("teamwork.deletedTeams.channels.GetMembers", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetMembers">)),
    TeamworkDeletedTeamsChannelsUpdateMembers: (...args) => callOperation("teamwork.deletedTeams.channels.UpdateMembers", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.UpdateMembers">)),
    TeamworkDeletedTeamsChannelsDeleteMembers: (...args) => callOperation("teamwork.deletedTeams.channels.DeleteMembers", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.DeleteMembers">)),
    TeamworkDeletedTeamsChannelsMembersGetCountF8e9: (...args) => callOperation("teamwork.deletedTeams.channels.members.GetCount-f8e9", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.members.GetCount-f8e9">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMembersAdd: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.members.add", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.members.add">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMembersRemove: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.members.remove", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.members.remove">)),
    TeamworkDeletedTeamsChannelsListMessages: (...args) => callOperation("teamwork.deletedTeams.channels.ListMessages", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.ListMessages">)),
    TeamworkDeletedTeamsChannelsCreateMessages: (...args) => callOperation("teamwork.deletedTeams.channels.CreateMessages", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.CreateMessages">)),
    TeamworkDeletedTeamsChannelsGetMessages: (...args) => callOperation("teamwork.deletedTeams.channels.GetMessages", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.GetMessages">)),
    TeamworkDeletedTeamsChannelsUpdateMessages: (...args) => callOperation("teamwork.deletedTeams.channels.UpdateMessages", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.UpdateMessages">)),
    TeamworkDeletedTeamsChannelsDeleteMessages: (...args) => callOperation("teamwork.deletedTeams.channels.DeleteMessages", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.DeleteMessages">)),
    TeamworkDeletedTeamsChannelsMessagesListHostedContents: (...args) => callOperation("teamwork.deletedTeams.channels.messages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.ListHostedContents">)),
    TeamworkDeletedTeamsChannelsMessagesCreateHostedContents: (...args) => callOperation("teamwork.deletedTeams.channels.messages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.CreateHostedContents">)),
    TeamworkDeletedTeamsChannelsMessagesGetHostedContents: (...args) => callOperation("teamwork.deletedTeams.channels.messages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.GetHostedContents">)),
    TeamworkDeletedTeamsChannelsMessagesUpdateHostedContents: (...args) => callOperation("teamwork.deletedTeams.channels.messages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.UpdateHostedContents">)),
    TeamworkDeletedTeamsChannelsMessagesDeleteHostedContents: (...args) => callOperation("teamwork.deletedTeams.channels.messages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.DeleteHostedContents">)),
    TeamworkDeletedTeamsChannelsMessagesGetHostedContentsContent: (...args) => callOperation("teamwork.deletedTeams.channels.messages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.GetHostedContentsContent">)),
    TeamworkDeletedTeamsChannelsMessagesUpdateHostedContentsContent: (...args) => callOperation("teamwork.deletedTeams.channels.messages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.UpdateHostedContentsContent">)),
    TeamworkDeletedTeamsChannelsMessagesDeleteHostedContentsContent: (...args) => callOperation("teamwork.deletedTeams.channels.messages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.DeleteHostedContentsContent">)),
    TeamworkDeletedTeamsChannelsMessagesHostedContentsGetCountBbdc: (...args) => callOperation("teamwork.deletedTeams.channels.messages.hostedContents.GetCount-bbdc", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.hostedContents.GetCount-bbdc">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageSetReaction: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.setReaction">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageSoftDelete: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.softDelete">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageUndoSoftDelete: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.undoSoftDelete">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageUnsetReaction: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.unsetReaction">)),
    TeamworkDeletedTeamsChannelsMessagesListReplies: (...args) => callOperation("teamwork.deletedTeams.channels.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.ListReplies">)),
    TeamworkDeletedTeamsChannelsMessagesCreateReplies: (...args) => callOperation("teamwork.deletedTeams.channels.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.CreateReplies">)),
    TeamworkDeletedTeamsChannelsMessagesGetReplies: (...args) => callOperation("teamwork.deletedTeams.channels.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.GetReplies">)),
    TeamworkDeletedTeamsChannelsMessagesUpdateReplies: (...args) => callOperation("teamwork.deletedTeams.channels.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.UpdateReplies">)),
    TeamworkDeletedTeamsChannelsMessagesDeleteReplies: (...args) => callOperation("teamwork.deletedTeams.channels.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.DeleteReplies">)),
    TeamworkDeletedTeamsChannelsMessagesRepliesListHostedContents: (...args) => callOperation("teamwork.deletedTeams.channels.messages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.ListHostedContents">)),
    TeamworkDeletedTeamsChannelsMessagesRepliesCreateHostedContents: (...args) => callOperation("teamwork.deletedTeams.channels.messages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.CreateHostedContents">)),
    TeamworkDeletedTeamsChannelsMessagesRepliesGetHostedContents: (...args) => callOperation("teamwork.deletedTeams.channels.messages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.GetHostedContents">)),
    TeamworkDeletedTeamsChannelsMessagesRepliesUpdateHostedContents: (...args) => callOperation("teamwork.deletedTeams.channels.messages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.UpdateHostedContents">)),
    TeamworkDeletedTeamsChannelsMessagesRepliesDeleteHostedContents: (...args) => callOperation("teamwork.deletedTeams.channels.messages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.DeleteHostedContents">)),
    TeamworkDeletedTeamsChannelsMessagesRepliesGetHostedContentsContent: (...args) => callOperation("teamwork.deletedTeams.channels.messages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.GetHostedContentsContent">)),
    TeamworkDeletedTeamsChannelsMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("teamwork.deletedTeams.channels.messages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.UpdateHostedContentsContent">)),
    TeamworkDeletedTeamsChannelsMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("teamwork.deletedTeams.channels.messages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.DeleteHostedContentsContent">)),
    TeamworkDeletedTeamsChannelsMessagesRepliesHostedContentsGetCountA9d7: (...args) => callOperation("teamwork.deletedTeams.channels.messages.replies.hostedContents.GetCount-a9d7", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.hostedContents.GetCount-a9d7">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">)),
    TeamworkDeletedTeamsChannelsMessagesRepliesGetCount32b1: (...args) => callOperation("teamwork.deletedTeams.channels.messages.replies.GetCount-32b1", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.replies.GetCount-32b1">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesDelta: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.delta">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.chatMessage.replies.replyWithQuote">)),
    TeamworkDeletedTeamsChannelsMessagesGetCountD80c: (...args) => callOperation("teamwork.deletedTeams.channels.messages.GetCount-d80c", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.channels.messages.GetCount-d80c">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesDelta: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.messages.delta", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.delta">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelMessagesReplyWithQuote: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.messages.replyWithQuote", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.messages.replyWithQuote">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelArchive: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.archive", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.archive">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelCompleteMigration: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.completeMigration", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.completeMigration">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelDoesUserHaveAccess: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.doesUserHaveAccess", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.doesUserHaveAccess">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelProvisionEmail: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.provisionEmail", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.provisionEmail">)),
    TeamworkDeletedTeamsDeletedTeamChannelsChannelRemoveEmail: (...args) => callOperation("teamwork.deletedTeams.deletedTeam.channels.channel.removeEmail", ...(args as TeamsGraphOperationArgs<"teamwork.deletedTeams.deletedTeam.channels.channel.removeEmail">)),
  };
}
