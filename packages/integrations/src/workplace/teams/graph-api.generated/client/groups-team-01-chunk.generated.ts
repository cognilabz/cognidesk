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
export const TeamsGraphGroupsTeam01OperationKeys = [
  "groups.GetTeam",
  "groups.SetTeam",
  "groups.DeleteTeam",
  "groups.team.ListAllChannels",
  "groups.team.GetAllChannels",
  "groups.team.allChannels.GetCount-4fa6",
  "groups.team.ListChannels",
  "groups.team.CreateChannels",
  "groups.team.GetChannels",
  "groups.team.UpdateChannels",
  "groups.team.DeleteChannels",
  "groups.team.channels.ListAllMembers",
  "groups.team.channels.CreateAllMembers",
  "groups.team.channels.GetAllMembers",
  "groups.team.channels.UpdateAllMembers",
  "groups.team.channels.DeleteAllMembers",
  "groups.team.channels.allMembers.GetCount-767d",
  "groups.group.team.channels.channel.allMembers.add",
  "groups.group.team.channels.channel.allMembers.remove",
  "groups.team.channels.ListEnabledApps",
  "groups.team.channels.GetEnabledApps",
  "groups.team.channels.enabledApps.GetCount-b387",
  "groups.team.channels.GetFilesFolder",
  "groups.team.channels.GetFilesFolderContent",
  "groups.team.channels.UpdateFilesFolderContent",
  "groups.team.channels.DeleteFilesFolderContent",
  "groups.team.channels.ListMembers",
  "groups.team.channels.CreateMembers",
  "groups.team.channels.GetMembers",
  "groups.team.channels.UpdateMembers",
  "groups.team.channels.DeleteMembers",
  "groups.team.channels.members.GetCount-fa97",
  "groups.group.team.channels.channel.members.add",
  "groups.group.team.channels.channel.members.remove",
  "groups.team.channels.ListMessages",
  "groups.team.channels.CreateMessages",
  "groups.team.channels.GetMessages",
  "groups.team.channels.UpdateMessages",
  "groups.team.channels.DeleteMessages",
  "groups.team.channels.messages.ListHostedContents",
  "groups.team.channels.messages.CreateHostedContents",
  "groups.team.channels.messages.GetHostedContents",
  "groups.team.channels.messages.UpdateHostedContents",
  "groups.team.channels.messages.DeleteHostedContents",
  "groups.team.channels.messages.GetHostedContentsContent",
  "groups.team.channels.messages.UpdateHostedContentsContent",
  "groups.team.channels.messages.DeleteHostedContentsContent",
  "groups.team.channels.messages.hostedContents.GetCount-7beb",
  "groups.group.team.channels.channel.messages.chatMessage.setReaction",
  "groups.group.team.channels.channel.messages.chatMessage.softDelete",
  "groups.group.team.channels.channel.messages.chatMessage.undoSoftDelete",
  "groups.group.team.channels.channel.messages.chatMessage.unsetReaction",
  "groups.team.channels.messages.ListReplies",
  "groups.team.channels.messages.CreateReplies",
  "groups.team.channels.messages.GetReplies",
  "groups.team.channels.messages.UpdateReplies",
  "groups.team.channels.messages.DeleteReplies",
  "groups.team.channels.messages.replies.ListHostedContents",
  "groups.team.channels.messages.replies.CreateHostedContents",
  "groups.team.channels.messages.replies.GetHostedContents",
  "groups.team.channels.messages.replies.UpdateHostedContents",
  "groups.team.channels.messages.replies.DeleteHostedContents",
  "groups.team.channels.messages.replies.GetHostedContentsContent",
  "groups.team.channels.messages.replies.UpdateHostedContentsContent",
  "groups.team.channels.messages.replies.DeleteHostedContentsContent",
  "groups.team.channels.messages.replies.hostedContents.GetCount-2a4d",
  "groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction",
  "groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete",
  "groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete",
  "groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction",
  "groups.team.channels.messages.replies.GetCount-d2f1",
  "groups.group.team.channels.channel.messages.chatMessage.replies.delta",
  "groups.group.team.channels.channel.messages.chatMessage.replies.replyWithQuote",
  "groups.team.channels.messages.GetCount-f67e",
  "groups.group.team.channels.channel.messages.delta",
  "groups.group.team.channels.channel.messages.replyWithQuote",
  "groups.group.team.channels.channel.archive",
  "groups.group.team.channels.channel.completeMigration",
  "groups.group.team.channels.channel.doesUserHaveAccess",
  "groups.group.team.channels.channel.provisionEmail"
] as const;
export type TeamsGraphGroupsTeam01OperationKey = typeof TeamsGraphGroupsTeam01OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphGroupsTeam01OperationPathParamMap {
  "groups.GetTeam": { "group-id": TeamsGraphPathParamValue };
  "groups.SetTeam": { "group-id": TeamsGraphPathParamValue };
  "groups.DeleteTeam": { "group-id": TeamsGraphPathParamValue };
  "groups.team.ListAllChannels": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetAllChannels": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.allChannels.GetCount-4fa6": { "group-id": TeamsGraphPathParamValue };
  "groups.team.ListChannels": { "group-id": TeamsGraphPathParamValue };
  "groups.team.CreateChannels": { "group-id": TeamsGraphPathParamValue };
  "groups.team.GetChannels": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.UpdateChannels": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.DeleteChannels": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.ListAllMembers": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.CreateAllMembers": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.GetAllMembers": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.channels.UpdateAllMembers": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.channels.DeleteAllMembers": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.channels.allMembers.GetCount-767d": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.allMembers.add": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.allMembers.remove": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.ListEnabledApps": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.GetEnabledApps": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsApp-id": TeamsGraphPathParamValue };
  "groups.team.channels.enabledApps.GetCount-b387": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.GetFilesFolder": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.GetFilesFolderContent": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.UpdateFilesFolderContent": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.DeleteFilesFolderContent": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.ListMembers": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.CreateMembers": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.GetMembers": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.channels.UpdateMembers": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.channels.DeleteMembers": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "groups.team.channels.members.GetCount-fa97": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.members.add": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.members.remove": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.ListMessages": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.CreateMessages": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.team.channels.GetMessages": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.channels.UpdateMessages": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.channels.DeleteMessages": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.ListHostedContents": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.CreateHostedContents": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.GetHostedContents": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.UpdateHostedContents": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.DeleteHostedContents": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.GetHostedContentsContent": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.UpdateHostedContentsContent": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.DeleteHostedContentsContent": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.hostedContents.GetCount-7beb": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.messages.chatMessage.setReaction": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.messages.chatMessage.softDelete": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.messages.chatMessage.undoSoftDelete": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.messages.chatMessage.unsetReaction": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.ListReplies": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.CreateReplies": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.GetReplies": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.team.channels.messages.UpdateReplies": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.team.channels.messages.DeleteReplies": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.team.channels.messages.replies.ListHostedContents": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.team.channels.messages.replies.CreateHostedContents": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.team.channels.messages.replies.GetHostedContents": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.replies.UpdateHostedContents": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.replies.DeleteHostedContents": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.replies.GetHostedContentsContent": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.replies.UpdateHostedContentsContent": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.replies.DeleteHostedContentsContent": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.replies.hostedContents.GetCount-2a4d": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "groups.team.channels.messages.replies.GetCount-d2f1": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.messages.chatMessage.replies.delta": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.messages.chatMessage.replies.replyWithQuote": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "groups.team.channels.messages.GetCount-f67e": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.messages.delta": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.messages.replyWithQuote": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.archive": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.completeMigration": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.doesUserHaveAccess": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "groups.group.team.channels.channel.provisionEmail": { "group-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphGroupsTeam01OperationRequestMap {
  "groups.GetTeam": TeamsGraphOperationInput<"groups.GetTeam">;
  "groups.SetTeam": TeamsGraphOperationInput<"groups.SetTeam">;
  "groups.DeleteTeam": TeamsGraphOperationInput<"groups.DeleteTeam">;
  "groups.team.ListAllChannels": TeamsGraphOperationInput<"groups.team.ListAllChannels">;
  "groups.team.GetAllChannels": TeamsGraphOperationInput<"groups.team.GetAllChannels">;
  "groups.team.allChannels.GetCount-4fa6": TeamsGraphOperationInput<"groups.team.allChannels.GetCount-4fa6">;
  "groups.team.ListChannels": TeamsGraphOperationInput<"groups.team.ListChannels">;
  "groups.team.CreateChannels": TeamsGraphOperationInput<"groups.team.CreateChannels">;
  "groups.team.GetChannels": TeamsGraphOperationInput<"groups.team.GetChannels">;
  "groups.team.UpdateChannels": TeamsGraphOperationInput<"groups.team.UpdateChannels">;
  "groups.team.DeleteChannels": TeamsGraphOperationInput<"groups.team.DeleteChannels">;
  "groups.team.channels.ListAllMembers": TeamsGraphOperationInput<"groups.team.channels.ListAllMembers">;
  "groups.team.channels.CreateAllMembers": TeamsGraphOperationInput<"groups.team.channels.CreateAllMembers">;
  "groups.team.channels.GetAllMembers": TeamsGraphOperationInput<"groups.team.channels.GetAllMembers">;
  "groups.team.channels.UpdateAllMembers": TeamsGraphOperationInput<"groups.team.channels.UpdateAllMembers">;
  "groups.team.channels.DeleteAllMembers": TeamsGraphOperationInput<"groups.team.channels.DeleteAllMembers">;
  "groups.team.channels.allMembers.GetCount-767d": TeamsGraphOperationInput<"groups.team.channels.allMembers.GetCount-767d">;
  "groups.group.team.channels.channel.allMembers.add": TeamsGraphOperationInput<"groups.group.team.channels.channel.allMembers.add">;
  "groups.group.team.channels.channel.allMembers.remove": TeamsGraphOperationInput<"groups.group.team.channels.channel.allMembers.remove">;
  "groups.team.channels.ListEnabledApps": TeamsGraphOperationInput<"groups.team.channels.ListEnabledApps">;
  "groups.team.channels.GetEnabledApps": TeamsGraphOperationInput<"groups.team.channels.GetEnabledApps">;
  "groups.team.channels.enabledApps.GetCount-b387": TeamsGraphOperationInput<"groups.team.channels.enabledApps.GetCount-b387">;
  "groups.team.channels.GetFilesFolder": TeamsGraphOperationInput<"groups.team.channels.GetFilesFolder">;
  "groups.team.channels.GetFilesFolderContent": TeamsGraphOperationInput<"groups.team.channels.GetFilesFolderContent">;
  "groups.team.channels.UpdateFilesFolderContent": TeamsGraphOperationInput<"groups.team.channels.UpdateFilesFolderContent">;
  "groups.team.channels.DeleteFilesFolderContent": TeamsGraphOperationInput<"groups.team.channels.DeleteFilesFolderContent">;
  "groups.team.channels.ListMembers": TeamsGraphOperationInput<"groups.team.channels.ListMembers">;
  "groups.team.channels.CreateMembers": TeamsGraphOperationInput<"groups.team.channels.CreateMembers">;
  "groups.team.channels.GetMembers": TeamsGraphOperationInput<"groups.team.channels.GetMembers">;
  "groups.team.channels.UpdateMembers": TeamsGraphOperationInput<"groups.team.channels.UpdateMembers">;
  "groups.team.channels.DeleteMembers": TeamsGraphOperationInput<"groups.team.channels.DeleteMembers">;
  "groups.team.channels.members.GetCount-fa97": TeamsGraphOperationInput<"groups.team.channels.members.GetCount-fa97">;
  "groups.group.team.channels.channel.members.add": TeamsGraphOperationInput<"groups.group.team.channels.channel.members.add">;
  "groups.group.team.channels.channel.members.remove": TeamsGraphOperationInput<"groups.group.team.channels.channel.members.remove">;
  "groups.team.channels.ListMessages": TeamsGraphOperationInput<"groups.team.channels.ListMessages">;
  "groups.team.channels.CreateMessages": TeamsGraphOperationInput<"groups.team.channels.CreateMessages">;
  "groups.team.channels.GetMessages": TeamsGraphOperationInput<"groups.team.channels.GetMessages">;
  "groups.team.channels.UpdateMessages": TeamsGraphOperationInput<"groups.team.channels.UpdateMessages">;
  "groups.team.channels.DeleteMessages": TeamsGraphOperationInput<"groups.team.channels.DeleteMessages">;
  "groups.team.channels.messages.ListHostedContents": TeamsGraphOperationInput<"groups.team.channels.messages.ListHostedContents">;
  "groups.team.channels.messages.CreateHostedContents": TeamsGraphOperationInput<"groups.team.channels.messages.CreateHostedContents">;
  "groups.team.channels.messages.GetHostedContents": TeamsGraphOperationInput<"groups.team.channels.messages.GetHostedContents">;
  "groups.team.channels.messages.UpdateHostedContents": TeamsGraphOperationInput<"groups.team.channels.messages.UpdateHostedContents">;
  "groups.team.channels.messages.DeleteHostedContents": TeamsGraphOperationInput<"groups.team.channels.messages.DeleteHostedContents">;
  "groups.team.channels.messages.GetHostedContentsContent": TeamsGraphOperationInput<"groups.team.channels.messages.GetHostedContentsContent">;
  "groups.team.channels.messages.UpdateHostedContentsContent": TeamsGraphOperationInput<"groups.team.channels.messages.UpdateHostedContentsContent">;
  "groups.team.channels.messages.DeleteHostedContentsContent": TeamsGraphOperationInput<"groups.team.channels.messages.DeleteHostedContentsContent">;
  "groups.team.channels.messages.hostedContents.GetCount-7beb": TeamsGraphOperationInput<"groups.team.channels.messages.hostedContents.GetCount-7beb">;
  "groups.group.team.channels.channel.messages.chatMessage.setReaction": TeamsGraphOperationInput<"groups.group.team.channels.channel.messages.chatMessage.setReaction">;
  "groups.group.team.channels.channel.messages.chatMessage.softDelete": TeamsGraphOperationInput<"groups.group.team.channels.channel.messages.chatMessage.softDelete">;
  "groups.group.team.channels.channel.messages.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"groups.group.team.channels.channel.messages.chatMessage.undoSoftDelete">;
  "groups.group.team.channels.channel.messages.chatMessage.unsetReaction": TeamsGraphOperationInput<"groups.group.team.channels.channel.messages.chatMessage.unsetReaction">;
  "groups.team.channels.messages.ListReplies": TeamsGraphOperationInput<"groups.team.channels.messages.ListReplies">;
  "groups.team.channels.messages.CreateReplies": TeamsGraphOperationInput<"groups.team.channels.messages.CreateReplies">;
  "groups.team.channels.messages.GetReplies": TeamsGraphOperationInput<"groups.team.channels.messages.GetReplies">;
  "groups.team.channels.messages.UpdateReplies": TeamsGraphOperationInput<"groups.team.channels.messages.UpdateReplies">;
  "groups.team.channels.messages.DeleteReplies": TeamsGraphOperationInput<"groups.team.channels.messages.DeleteReplies">;
  "groups.team.channels.messages.replies.ListHostedContents": TeamsGraphOperationInput<"groups.team.channels.messages.replies.ListHostedContents">;
  "groups.team.channels.messages.replies.CreateHostedContents": TeamsGraphOperationInput<"groups.team.channels.messages.replies.CreateHostedContents">;
  "groups.team.channels.messages.replies.GetHostedContents": TeamsGraphOperationInput<"groups.team.channels.messages.replies.GetHostedContents">;
  "groups.team.channels.messages.replies.UpdateHostedContents": TeamsGraphOperationInput<"groups.team.channels.messages.replies.UpdateHostedContents">;
  "groups.team.channels.messages.replies.DeleteHostedContents": TeamsGraphOperationInput<"groups.team.channels.messages.replies.DeleteHostedContents">;
  "groups.team.channels.messages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"groups.team.channels.messages.replies.GetHostedContentsContent">;
  "groups.team.channels.messages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"groups.team.channels.messages.replies.UpdateHostedContentsContent">;
  "groups.team.channels.messages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"groups.team.channels.messages.replies.DeleteHostedContentsContent">;
  "groups.team.channels.messages.replies.hostedContents.GetCount-2a4d": TeamsGraphOperationInput<"groups.team.channels.messages.replies.hostedContents.GetCount-2a4d">;
  "groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">;
  "groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">;
  "groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">;
  "groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">;
  "groups.team.channels.messages.replies.GetCount-d2f1": TeamsGraphOperationInput<"groups.team.channels.messages.replies.GetCount-d2f1">;
  "groups.group.team.channels.channel.messages.chatMessage.replies.delta": TeamsGraphOperationInput<"groups.group.team.channels.channel.messages.chatMessage.replies.delta">;
  "groups.group.team.channels.channel.messages.chatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"groups.group.team.channels.channel.messages.chatMessage.replies.replyWithQuote">;
  "groups.team.channels.messages.GetCount-f67e": TeamsGraphOperationInput<"groups.team.channels.messages.GetCount-f67e">;
  "groups.group.team.channels.channel.messages.delta": TeamsGraphOperationInput<"groups.group.team.channels.channel.messages.delta">;
  "groups.group.team.channels.channel.messages.replyWithQuote": TeamsGraphOperationInput<"groups.group.team.channels.channel.messages.replyWithQuote">;
  "groups.group.team.channels.channel.archive": TeamsGraphOperationInput<"groups.group.team.channels.channel.archive">;
  "groups.group.team.channels.channel.completeMigration": TeamsGraphOperationInput<"groups.group.team.channels.channel.completeMigration">;
  "groups.group.team.channels.channel.doesUserHaveAccess": TeamsGraphOperationInput<"groups.group.team.channels.channel.doesUserHaveAccess">;
  "groups.group.team.channels.channel.provisionEmail": TeamsGraphOperationInput<"groups.group.team.channels.channel.provisionEmail">;
}

export interface TeamsGraphGroupsTeam01GeneratedClient {
  GroupsGetTeam(...args: TeamsGraphOperationArgs<"groups.GetTeam">): Promise<TeamsGraphOperationResponseMap["groups.GetTeam"]>;
  GroupsSetTeam(...args: TeamsGraphOperationArgs<"groups.SetTeam">): Promise<TeamsGraphOperationResponseMap["groups.SetTeam"]>;
  GroupsDeleteTeam(...args: TeamsGraphOperationArgs<"groups.DeleteTeam">): Promise<TeamsGraphOperationResponseMap["groups.DeleteTeam"]>;
  GroupsTeamListAllChannels(...args: TeamsGraphOperationArgs<"groups.team.ListAllChannels">): Promise<TeamsGraphOperationResponseMap["groups.team.ListAllChannels"]>;
  GroupsTeamGetAllChannels(...args: TeamsGraphOperationArgs<"groups.team.GetAllChannels">): Promise<TeamsGraphOperationResponseMap["groups.team.GetAllChannels"]>;
  GroupsTeamAllChannelsGetCount4fa6(...args: TeamsGraphOperationArgs<"groups.team.allChannels.GetCount-4fa6">): Promise<TeamsGraphOperationResponseMap["groups.team.allChannels.GetCount-4fa6"]>;
  GroupsTeamListChannels(...args: TeamsGraphOperationArgs<"groups.team.ListChannels">): Promise<TeamsGraphOperationResponseMap["groups.team.ListChannels"]>;
  GroupsTeamCreateChannels(...args: TeamsGraphOperationArgs<"groups.team.CreateChannels">): Promise<TeamsGraphOperationResponseMap["groups.team.CreateChannels"]>;
  GroupsTeamGetChannels(...args: TeamsGraphOperationArgs<"groups.team.GetChannels">): Promise<TeamsGraphOperationResponseMap["groups.team.GetChannels"]>;
  GroupsTeamUpdateChannels(...args: TeamsGraphOperationArgs<"groups.team.UpdateChannels">): Promise<TeamsGraphOperationResponseMap["groups.team.UpdateChannels"]>;
  GroupsTeamDeleteChannels(...args: TeamsGraphOperationArgs<"groups.team.DeleteChannels">): Promise<TeamsGraphOperationResponseMap["groups.team.DeleteChannels"]>;
  GroupsTeamChannelsListAllMembers(...args: TeamsGraphOperationArgs<"groups.team.channels.ListAllMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.ListAllMembers"]>;
  GroupsTeamChannelsCreateAllMembers(...args: TeamsGraphOperationArgs<"groups.team.channels.CreateAllMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.CreateAllMembers"]>;
  GroupsTeamChannelsGetAllMembers(...args: TeamsGraphOperationArgs<"groups.team.channels.GetAllMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.GetAllMembers"]>;
  GroupsTeamChannelsUpdateAllMembers(...args: TeamsGraphOperationArgs<"groups.team.channels.UpdateAllMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.UpdateAllMembers"]>;
  GroupsTeamChannelsDeleteAllMembers(...args: TeamsGraphOperationArgs<"groups.team.channels.DeleteAllMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.DeleteAllMembers"]>;
  GroupsTeamChannelsAllMembersGetCount767d(...args: TeamsGraphOperationArgs<"groups.team.channels.allMembers.GetCount-767d">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.allMembers.GetCount-767d"]>;
  GroupsGroupTeamChannelsChannelAllMembersAdd(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.allMembers.add">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.allMembers.add"]>;
  GroupsGroupTeamChannelsChannelAllMembersRemove(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.allMembers.remove">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.allMembers.remove"]>;
  GroupsTeamChannelsListEnabledApps(...args: TeamsGraphOperationArgs<"groups.team.channels.ListEnabledApps">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.ListEnabledApps"]>;
  GroupsTeamChannelsGetEnabledApps(...args: TeamsGraphOperationArgs<"groups.team.channels.GetEnabledApps">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.GetEnabledApps"]>;
  GroupsTeamChannelsEnabledAppsGetCountB387(...args: TeamsGraphOperationArgs<"groups.team.channels.enabledApps.GetCount-b387">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.enabledApps.GetCount-b387"]>;
  GroupsTeamChannelsGetFilesFolder(...args: TeamsGraphOperationArgs<"groups.team.channels.GetFilesFolder">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.GetFilesFolder"]>;
  GroupsTeamChannelsGetFilesFolderContent(...args: TeamsGraphOperationArgs<"groups.team.channels.GetFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.GetFilesFolderContent"]>;
  GroupsTeamChannelsUpdateFilesFolderContent(...args: TeamsGraphOperationArgs<"groups.team.channels.UpdateFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.UpdateFilesFolderContent"]>;
  GroupsTeamChannelsDeleteFilesFolderContent(...args: TeamsGraphOperationArgs<"groups.team.channels.DeleteFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.DeleteFilesFolderContent"]>;
  GroupsTeamChannelsListMembers(...args: TeamsGraphOperationArgs<"groups.team.channels.ListMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.ListMembers"]>;
  GroupsTeamChannelsCreateMembers(...args: TeamsGraphOperationArgs<"groups.team.channels.CreateMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.CreateMembers"]>;
  GroupsTeamChannelsGetMembers(...args: TeamsGraphOperationArgs<"groups.team.channels.GetMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.GetMembers"]>;
  GroupsTeamChannelsUpdateMembers(...args: TeamsGraphOperationArgs<"groups.team.channels.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.UpdateMembers"]>;
  GroupsTeamChannelsDeleteMembers(...args: TeamsGraphOperationArgs<"groups.team.channels.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.DeleteMembers"]>;
  GroupsTeamChannelsMembersGetCountFa97(...args: TeamsGraphOperationArgs<"groups.team.channels.members.GetCount-fa97">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.members.GetCount-fa97"]>;
  GroupsGroupTeamChannelsChannelMembersAdd(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.members.add">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.members.add"]>;
  GroupsGroupTeamChannelsChannelMembersRemove(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.members.remove">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.members.remove"]>;
  GroupsTeamChannelsListMessages(...args: TeamsGraphOperationArgs<"groups.team.channels.ListMessages">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.ListMessages"]>;
  GroupsTeamChannelsCreateMessages(...args: TeamsGraphOperationArgs<"groups.team.channels.CreateMessages">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.CreateMessages"]>;
  GroupsTeamChannelsGetMessages(...args: TeamsGraphOperationArgs<"groups.team.channels.GetMessages">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.GetMessages"]>;
  GroupsTeamChannelsUpdateMessages(...args: TeamsGraphOperationArgs<"groups.team.channels.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.UpdateMessages"]>;
  GroupsTeamChannelsDeleteMessages(...args: TeamsGraphOperationArgs<"groups.team.channels.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.DeleteMessages"]>;
  GroupsTeamChannelsMessagesListHostedContents(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.ListHostedContents"]>;
  GroupsTeamChannelsMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.CreateHostedContents"]>;
  GroupsTeamChannelsMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.GetHostedContents"]>;
  GroupsTeamChannelsMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.UpdateHostedContents"]>;
  GroupsTeamChannelsMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.DeleteHostedContents"]>;
  GroupsTeamChannelsMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.GetHostedContentsContent"]>;
  GroupsTeamChannelsMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.UpdateHostedContentsContent"]>;
  GroupsTeamChannelsMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.DeleteHostedContentsContent"]>;
  GroupsTeamChannelsMessagesHostedContentsGetCount7beb(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.hostedContents.GetCount-7beb">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.hostedContents.GetCount-7beb"]>;
  GroupsGroupTeamChannelsChannelMessagesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.messages.chatMessage.setReaction"]>;
  GroupsGroupTeamChannelsChannelMessagesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.messages.chatMessage.softDelete"]>;
  GroupsGroupTeamChannelsChannelMessagesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.messages.chatMessage.undoSoftDelete"]>;
  GroupsGroupTeamChannelsChannelMessagesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.messages.chatMessage.unsetReaction"]>;
  GroupsTeamChannelsMessagesListReplies(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.ListReplies"]>;
  GroupsTeamChannelsMessagesCreateReplies(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.CreateReplies"]>;
  GroupsTeamChannelsMessagesGetReplies(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.GetReplies"]>;
  GroupsTeamChannelsMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.UpdateReplies"]>;
  GroupsTeamChannelsMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.DeleteReplies"]>;
  GroupsTeamChannelsMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.replies.ListHostedContents"]>;
  GroupsTeamChannelsMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.replies.CreateHostedContents"]>;
  GroupsTeamChannelsMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.replies.GetHostedContents"]>;
  GroupsTeamChannelsMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.replies.UpdateHostedContents"]>;
  GroupsTeamChannelsMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.replies.DeleteHostedContents"]>;
  GroupsTeamChannelsMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.replies.GetHostedContentsContent"]>;
  GroupsTeamChannelsMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.replies.UpdateHostedContentsContent"]>;
  GroupsTeamChannelsMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.replies.DeleteHostedContentsContent"]>;
  GroupsTeamChannelsMessagesRepliesHostedContentsGetCount2a4d(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.replies.hostedContents.GetCount-2a4d">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.replies.hostedContents.GetCount-2a4d"]>;
  GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction"]>;
  GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete"]>;
  GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete"]>;
  GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction"]>;
  GroupsTeamChannelsMessagesRepliesGetCountD2f1(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.replies.GetCount-d2f1">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.replies.GetCount-d2f1"]>;
  GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.messages.chatMessage.replies.delta"]>;
  GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.messages.chatMessage.replies.replyWithQuote"]>;
  GroupsTeamChannelsMessagesGetCountF67e(...args: TeamsGraphOperationArgs<"groups.team.channels.messages.GetCount-f67e">): Promise<TeamsGraphOperationResponseMap["groups.team.channels.messages.GetCount-f67e"]>;
  GroupsGroupTeamChannelsChannelMessagesDelta(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.delta">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.messages.delta"]>;
  GroupsGroupTeamChannelsChannelMessagesReplyWithQuote(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.messages.replyWithQuote"]>;
  GroupsGroupTeamChannelsChannelArchive(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.archive">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.archive"]>;
  GroupsGroupTeamChannelsChannelCompleteMigration(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.completeMigration">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.completeMigration"]>;
  GroupsGroupTeamChannelsChannelDoesUserHaveAccess(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.doesUserHaveAccess">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.doesUserHaveAccess"]>;
  GroupsGroupTeamChannelsChannelProvisionEmail(...args: TeamsGraphOperationArgs<"groups.group.team.channels.channel.provisionEmail">): Promise<TeamsGraphOperationResponseMap["groups.group.team.channels.channel.provisionEmail"]>;
}

export const TeamsGraphGroupsTeam01GeneratedFunctionNames = [
  "GroupsGetTeam",
  "GroupsSetTeam",
  "GroupsDeleteTeam",
  "GroupsTeamListAllChannels",
  "GroupsTeamGetAllChannels",
  "GroupsTeamAllChannelsGetCount4fa6",
  "GroupsTeamListChannels",
  "GroupsTeamCreateChannels",
  "GroupsTeamGetChannels",
  "GroupsTeamUpdateChannels",
  "GroupsTeamDeleteChannels",
  "GroupsTeamChannelsListAllMembers",
  "GroupsTeamChannelsCreateAllMembers",
  "GroupsTeamChannelsGetAllMembers",
  "GroupsTeamChannelsUpdateAllMembers",
  "GroupsTeamChannelsDeleteAllMembers",
  "GroupsTeamChannelsAllMembersGetCount767d",
  "GroupsGroupTeamChannelsChannelAllMembersAdd",
  "GroupsGroupTeamChannelsChannelAllMembersRemove",
  "GroupsTeamChannelsListEnabledApps",
  "GroupsTeamChannelsGetEnabledApps",
  "GroupsTeamChannelsEnabledAppsGetCountB387",
  "GroupsTeamChannelsGetFilesFolder",
  "GroupsTeamChannelsGetFilesFolderContent",
  "GroupsTeamChannelsUpdateFilesFolderContent",
  "GroupsTeamChannelsDeleteFilesFolderContent",
  "GroupsTeamChannelsListMembers",
  "GroupsTeamChannelsCreateMembers",
  "GroupsTeamChannelsGetMembers",
  "GroupsTeamChannelsUpdateMembers",
  "GroupsTeamChannelsDeleteMembers",
  "GroupsTeamChannelsMembersGetCountFa97",
  "GroupsGroupTeamChannelsChannelMembersAdd",
  "GroupsGroupTeamChannelsChannelMembersRemove",
  "GroupsTeamChannelsListMessages",
  "GroupsTeamChannelsCreateMessages",
  "GroupsTeamChannelsGetMessages",
  "GroupsTeamChannelsUpdateMessages",
  "GroupsTeamChannelsDeleteMessages",
  "GroupsTeamChannelsMessagesListHostedContents",
  "GroupsTeamChannelsMessagesCreateHostedContents",
  "GroupsTeamChannelsMessagesGetHostedContents",
  "GroupsTeamChannelsMessagesUpdateHostedContents",
  "GroupsTeamChannelsMessagesDeleteHostedContents",
  "GroupsTeamChannelsMessagesGetHostedContentsContent",
  "GroupsTeamChannelsMessagesUpdateHostedContentsContent",
  "GroupsTeamChannelsMessagesDeleteHostedContentsContent",
  "GroupsTeamChannelsMessagesHostedContentsGetCount7beb",
  "GroupsGroupTeamChannelsChannelMessagesChatMessageSetReaction",
  "GroupsGroupTeamChannelsChannelMessagesChatMessageSoftDelete",
  "GroupsGroupTeamChannelsChannelMessagesChatMessageUndoSoftDelete",
  "GroupsGroupTeamChannelsChannelMessagesChatMessageUnsetReaction",
  "GroupsTeamChannelsMessagesListReplies",
  "GroupsTeamChannelsMessagesCreateReplies",
  "GroupsTeamChannelsMessagesGetReplies",
  "GroupsTeamChannelsMessagesUpdateReplies",
  "GroupsTeamChannelsMessagesDeleteReplies",
  "GroupsTeamChannelsMessagesRepliesListHostedContents",
  "GroupsTeamChannelsMessagesRepliesCreateHostedContents",
  "GroupsTeamChannelsMessagesRepliesGetHostedContents",
  "GroupsTeamChannelsMessagesRepliesUpdateHostedContents",
  "GroupsTeamChannelsMessagesRepliesDeleteHostedContents",
  "GroupsTeamChannelsMessagesRepliesGetHostedContentsContent",
  "GroupsTeamChannelsMessagesRepliesUpdateHostedContentsContent",
  "GroupsTeamChannelsMessagesRepliesDeleteHostedContentsContent",
  "GroupsTeamChannelsMessagesRepliesHostedContentsGetCount2a4d",
  "GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction",
  "GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete",
  "GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete",
  "GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction",
  "GroupsTeamChannelsMessagesRepliesGetCountD2f1",
  "GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesDelta",
  "GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote",
  "GroupsTeamChannelsMessagesGetCountF67e",
  "GroupsGroupTeamChannelsChannelMessagesDelta",
  "GroupsGroupTeamChannelsChannelMessagesReplyWithQuote",
  "GroupsGroupTeamChannelsChannelArchive",
  "GroupsGroupTeamChannelsChannelCompleteMigration",
  "GroupsGroupTeamChannelsChannelDoesUserHaveAccess",
  "GroupsGroupTeamChannelsChannelProvisionEmail"
] as const satisfies readonly (keyof TeamsGraphGroupsTeam01GeneratedClient)[];

export function createTeamsGraphGroupsTeam01GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphGroupsTeam01GeneratedClient {
  return {
    GroupsGetTeam: (...args) => callOperation("groups.GetTeam", ...(args as TeamsGraphOperationArgs<"groups.GetTeam">)),
    GroupsSetTeam: (...args) => callOperation("groups.SetTeam", ...(args as TeamsGraphOperationArgs<"groups.SetTeam">)),
    GroupsDeleteTeam: (...args) => callOperation("groups.DeleteTeam", ...(args as TeamsGraphOperationArgs<"groups.DeleteTeam">)),
    GroupsTeamListAllChannels: (...args) => callOperation("groups.team.ListAllChannels", ...(args as TeamsGraphOperationArgs<"groups.team.ListAllChannels">)),
    GroupsTeamGetAllChannels: (...args) => callOperation("groups.team.GetAllChannels", ...(args as TeamsGraphOperationArgs<"groups.team.GetAllChannels">)),
    GroupsTeamAllChannelsGetCount4fa6: (...args) => callOperation("groups.team.allChannels.GetCount-4fa6", ...(args as TeamsGraphOperationArgs<"groups.team.allChannels.GetCount-4fa6">)),
    GroupsTeamListChannels: (...args) => callOperation("groups.team.ListChannels", ...(args as TeamsGraphOperationArgs<"groups.team.ListChannels">)),
    GroupsTeamCreateChannels: (...args) => callOperation("groups.team.CreateChannels", ...(args as TeamsGraphOperationArgs<"groups.team.CreateChannels">)),
    GroupsTeamGetChannels: (...args) => callOperation("groups.team.GetChannels", ...(args as TeamsGraphOperationArgs<"groups.team.GetChannels">)),
    GroupsTeamUpdateChannels: (...args) => callOperation("groups.team.UpdateChannels", ...(args as TeamsGraphOperationArgs<"groups.team.UpdateChannels">)),
    GroupsTeamDeleteChannels: (...args) => callOperation("groups.team.DeleteChannels", ...(args as TeamsGraphOperationArgs<"groups.team.DeleteChannels">)),
    GroupsTeamChannelsListAllMembers: (...args) => callOperation("groups.team.channels.ListAllMembers", ...(args as TeamsGraphOperationArgs<"groups.team.channels.ListAllMembers">)),
    GroupsTeamChannelsCreateAllMembers: (...args) => callOperation("groups.team.channels.CreateAllMembers", ...(args as TeamsGraphOperationArgs<"groups.team.channels.CreateAllMembers">)),
    GroupsTeamChannelsGetAllMembers: (...args) => callOperation("groups.team.channels.GetAllMembers", ...(args as TeamsGraphOperationArgs<"groups.team.channels.GetAllMembers">)),
    GroupsTeamChannelsUpdateAllMembers: (...args) => callOperation("groups.team.channels.UpdateAllMembers", ...(args as TeamsGraphOperationArgs<"groups.team.channels.UpdateAllMembers">)),
    GroupsTeamChannelsDeleteAllMembers: (...args) => callOperation("groups.team.channels.DeleteAllMembers", ...(args as TeamsGraphOperationArgs<"groups.team.channels.DeleteAllMembers">)),
    GroupsTeamChannelsAllMembersGetCount767d: (...args) => callOperation("groups.team.channels.allMembers.GetCount-767d", ...(args as TeamsGraphOperationArgs<"groups.team.channels.allMembers.GetCount-767d">)),
    GroupsGroupTeamChannelsChannelAllMembersAdd: (...args) => callOperation("groups.group.team.channels.channel.allMembers.add", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.allMembers.add">)),
    GroupsGroupTeamChannelsChannelAllMembersRemove: (...args) => callOperation("groups.group.team.channels.channel.allMembers.remove", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.allMembers.remove">)),
    GroupsTeamChannelsListEnabledApps: (...args) => callOperation("groups.team.channels.ListEnabledApps", ...(args as TeamsGraphOperationArgs<"groups.team.channels.ListEnabledApps">)),
    GroupsTeamChannelsGetEnabledApps: (...args) => callOperation("groups.team.channels.GetEnabledApps", ...(args as TeamsGraphOperationArgs<"groups.team.channels.GetEnabledApps">)),
    GroupsTeamChannelsEnabledAppsGetCountB387: (...args) => callOperation("groups.team.channels.enabledApps.GetCount-b387", ...(args as TeamsGraphOperationArgs<"groups.team.channels.enabledApps.GetCount-b387">)),
    GroupsTeamChannelsGetFilesFolder: (...args) => callOperation("groups.team.channels.GetFilesFolder", ...(args as TeamsGraphOperationArgs<"groups.team.channels.GetFilesFolder">)),
    GroupsTeamChannelsGetFilesFolderContent: (...args) => callOperation("groups.team.channels.GetFilesFolderContent", ...(args as TeamsGraphOperationArgs<"groups.team.channels.GetFilesFolderContent">)),
    GroupsTeamChannelsUpdateFilesFolderContent: (...args) => callOperation("groups.team.channels.UpdateFilesFolderContent", ...(args as TeamsGraphOperationArgs<"groups.team.channels.UpdateFilesFolderContent">)),
    GroupsTeamChannelsDeleteFilesFolderContent: (...args) => callOperation("groups.team.channels.DeleteFilesFolderContent", ...(args as TeamsGraphOperationArgs<"groups.team.channels.DeleteFilesFolderContent">)),
    GroupsTeamChannelsListMembers: (...args) => callOperation("groups.team.channels.ListMembers", ...(args as TeamsGraphOperationArgs<"groups.team.channels.ListMembers">)),
    GroupsTeamChannelsCreateMembers: (...args) => callOperation("groups.team.channels.CreateMembers", ...(args as TeamsGraphOperationArgs<"groups.team.channels.CreateMembers">)),
    GroupsTeamChannelsGetMembers: (...args) => callOperation("groups.team.channels.GetMembers", ...(args as TeamsGraphOperationArgs<"groups.team.channels.GetMembers">)),
    GroupsTeamChannelsUpdateMembers: (...args) => callOperation("groups.team.channels.UpdateMembers", ...(args as TeamsGraphOperationArgs<"groups.team.channels.UpdateMembers">)),
    GroupsTeamChannelsDeleteMembers: (...args) => callOperation("groups.team.channels.DeleteMembers", ...(args as TeamsGraphOperationArgs<"groups.team.channels.DeleteMembers">)),
    GroupsTeamChannelsMembersGetCountFa97: (...args) => callOperation("groups.team.channels.members.GetCount-fa97", ...(args as TeamsGraphOperationArgs<"groups.team.channels.members.GetCount-fa97">)),
    GroupsGroupTeamChannelsChannelMembersAdd: (...args) => callOperation("groups.group.team.channels.channel.members.add", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.members.add">)),
    GroupsGroupTeamChannelsChannelMembersRemove: (...args) => callOperation("groups.group.team.channels.channel.members.remove", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.members.remove">)),
    GroupsTeamChannelsListMessages: (...args) => callOperation("groups.team.channels.ListMessages", ...(args as TeamsGraphOperationArgs<"groups.team.channels.ListMessages">)),
    GroupsTeamChannelsCreateMessages: (...args) => callOperation("groups.team.channels.CreateMessages", ...(args as TeamsGraphOperationArgs<"groups.team.channels.CreateMessages">)),
    GroupsTeamChannelsGetMessages: (...args) => callOperation("groups.team.channels.GetMessages", ...(args as TeamsGraphOperationArgs<"groups.team.channels.GetMessages">)),
    GroupsTeamChannelsUpdateMessages: (...args) => callOperation("groups.team.channels.UpdateMessages", ...(args as TeamsGraphOperationArgs<"groups.team.channels.UpdateMessages">)),
    GroupsTeamChannelsDeleteMessages: (...args) => callOperation("groups.team.channels.DeleteMessages", ...(args as TeamsGraphOperationArgs<"groups.team.channels.DeleteMessages">)),
    GroupsTeamChannelsMessagesListHostedContents: (...args) => callOperation("groups.team.channels.messages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.ListHostedContents">)),
    GroupsTeamChannelsMessagesCreateHostedContents: (...args) => callOperation("groups.team.channels.messages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.CreateHostedContents">)),
    GroupsTeamChannelsMessagesGetHostedContents: (...args) => callOperation("groups.team.channels.messages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.GetHostedContents">)),
    GroupsTeamChannelsMessagesUpdateHostedContents: (...args) => callOperation("groups.team.channels.messages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.UpdateHostedContents">)),
    GroupsTeamChannelsMessagesDeleteHostedContents: (...args) => callOperation("groups.team.channels.messages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.DeleteHostedContents">)),
    GroupsTeamChannelsMessagesGetHostedContentsContent: (...args) => callOperation("groups.team.channels.messages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.GetHostedContentsContent">)),
    GroupsTeamChannelsMessagesUpdateHostedContentsContent: (...args) => callOperation("groups.team.channels.messages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.UpdateHostedContentsContent">)),
    GroupsTeamChannelsMessagesDeleteHostedContentsContent: (...args) => callOperation("groups.team.channels.messages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.DeleteHostedContentsContent">)),
    GroupsTeamChannelsMessagesHostedContentsGetCount7beb: (...args) => callOperation("groups.team.channels.messages.hostedContents.GetCount-7beb", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.hostedContents.GetCount-7beb">)),
    GroupsGroupTeamChannelsChannelMessagesChatMessageSetReaction: (...args) => callOperation("groups.group.team.channels.channel.messages.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.setReaction">)),
    GroupsGroupTeamChannelsChannelMessagesChatMessageSoftDelete: (...args) => callOperation("groups.group.team.channels.channel.messages.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.softDelete">)),
    GroupsGroupTeamChannelsChannelMessagesChatMessageUndoSoftDelete: (...args) => callOperation("groups.group.team.channels.channel.messages.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.undoSoftDelete">)),
    GroupsGroupTeamChannelsChannelMessagesChatMessageUnsetReaction: (...args) => callOperation("groups.group.team.channels.channel.messages.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.unsetReaction">)),
    GroupsTeamChannelsMessagesListReplies: (...args) => callOperation("groups.team.channels.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.ListReplies">)),
    GroupsTeamChannelsMessagesCreateReplies: (...args) => callOperation("groups.team.channels.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.CreateReplies">)),
    GroupsTeamChannelsMessagesGetReplies: (...args) => callOperation("groups.team.channels.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.GetReplies">)),
    GroupsTeamChannelsMessagesUpdateReplies: (...args) => callOperation("groups.team.channels.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.UpdateReplies">)),
    GroupsTeamChannelsMessagesDeleteReplies: (...args) => callOperation("groups.team.channels.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.DeleteReplies">)),
    GroupsTeamChannelsMessagesRepliesListHostedContents: (...args) => callOperation("groups.team.channels.messages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.replies.ListHostedContents">)),
    GroupsTeamChannelsMessagesRepliesCreateHostedContents: (...args) => callOperation("groups.team.channels.messages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.replies.CreateHostedContents">)),
    GroupsTeamChannelsMessagesRepliesGetHostedContents: (...args) => callOperation("groups.team.channels.messages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.replies.GetHostedContents">)),
    GroupsTeamChannelsMessagesRepliesUpdateHostedContents: (...args) => callOperation("groups.team.channels.messages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.replies.UpdateHostedContents">)),
    GroupsTeamChannelsMessagesRepliesDeleteHostedContents: (...args) => callOperation("groups.team.channels.messages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.replies.DeleteHostedContents">)),
    GroupsTeamChannelsMessagesRepliesGetHostedContentsContent: (...args) => callOperation("groups.team.channels.messages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.replies.GetHostedContentsContent">)),
    GroupsTeamChannelsMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("groups.team.channels.messages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.replies.UpdateHostedContentsContent">)),
    GroupsTeamChannelsMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("groups.team.channels.messages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.replies.DeleteHostedContentsContent">)),
    GroupsTeamChannelsMessagesRepliesHostedContentsGetCount2a4d: (...args) => callOperation("groups.team.channels.messages.replies.hostedContents.GetCount-2a4d", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.replies.hostedContents.GetCount-2a4d">)),
    GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">)),
    GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">)),
    GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">)),
    GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">)),
    GroupsTeamChannelsMessagesRepliesGetCountD2f1: (...args) => callOperation("groups.team.channels.messages.replies.GetCount-d2f1", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.replies.GetCount-d2f1">)),
    GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesDelta: (...args) => callOperation("groups.group.team.channels.channel.messages.chatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.replies.delta">)),
    GroupsGroupTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote: (...args) => callOperation("groups.group.team.channels.channel.messages.chatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.chatMessage.replies.replyWithQuote">)),
    GroupsTeamChannelsMessagesGetCountF67e: (...args) => callOperation("groups.team.channels.messages.GetCount-f67e", ...(args as TeamsGraphOperationArgs<"groups.team.channels.messages.GetCount-f67e">)),
    GroupsGroupTeamChannelsChannelMessagesDelta: (...args) => callOperation("groups.group.team.channels.channel.messages.delta", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.delta">)),
    GroupsGroupTeamChannelsChannelMessagesReplyWithQuote: (...args) => callOperation("groups.group.team.channels.channel.messages.replyWithQuote", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.messages.replyWithQuote">)),
    GroupsGroupTeamChannelsChannelArchive: (...args) => callOperation("groups.group.team.channels.channel.archive", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.archive">)),
    GroupsGroupTeamChannelsChannelCompleteMigration: (...args) => callOperation("groups.group.team.channels.channel.completeMigration", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.completeMigration">)),
    GroupsGroupTeamChannelsChannelDoesUserHaveAccess: (...args) => callOperation("groups.group.team.channels.channel.doesUserHaveAccess", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.doesUserHaveAccess">)),
    GroupsGroupTeamChannelsChannelProvisionEmail: (...args) => callOperation("groups.group.team.channels.channel.provisionEmail", ...(args as TeamsGraphOperationArgs<"groups.group.team.channels.channel.provisionEmail">)),
  };
}
