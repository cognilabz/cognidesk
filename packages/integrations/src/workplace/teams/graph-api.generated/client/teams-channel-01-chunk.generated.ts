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
export const TeamsGraphTeamsChannel01OperationKeys = [
  "teams.ListAllChannels",
  "teams.GetAllChannels",
  "teams.allChannels.GetCount-f86a",
  "teams.ListChannels",
  "teams.CreateChannels",
  "teams.GetChannels",
  "teams.UpdateChannels",
  "teams.DeleteChannels",
  "teams.channels.ListAllMembers",
  "teams.channels.CreateAllMembers",
  "teams.channels.GetAllMembers",
  "teams.channels.UpdateAllMembers",
  "teams.channels.DeleteAllMembers",
  "teams.channels.allMembers.GetCount-ea4d",
  "teams.team.channels.channel.allMembers.add",
  "teams.team.channels.channel.allMembers.remove",
  "teams.channels.ListEnabledApps",
  "teams.channels.GetEnabledApps",
  "teams.channels.enabledApps.GetCount-6262",
  "teams.channels.GetFilesFolder",
  "teams.channels.GetFilesFolderContent",
  "teams.channels.UpdateFilesFolderContent",
  "teams.channels.DeleteFilesFolderContent",
  "teams.channels.ListMembers",
  "teams.channels.CreateMembers",
  "teams.channels.GetMembers",
  "teams.channels.UpdateMembers",
  "teams.channels.DeleteMembers",
  "teams.channels.members.GetCount-8e98",
  "teams.team.channels.channel.members.add",
  "teams.team.channels.channel.members.remove",
  "teams.channels.ListMessages",
  "teams.channels.CreateMessages",
  "teams.channels.GetMessages",
  "teams.channels.UpdateMessages",
  "teams.channels.DeleteMessages",
  "teams.channels.messages.ListHostedContents",
  "teams.channels.messages.CreateHostedContents",
  "teams.channels.messages.GetHostedContents",
  "teams.channels.messages.UpdateHostedContents",
  "teams.channels.messages.DeleteHostedContents",
  "teams.channels.messages.GetHostedContentsContent",
  "teams.channels.messages.UpdateHostedContentsContent",
  "teams.channels.messages.DeleteHostedContentsContent",
  "teams.channels.messages.hostedContents.GetCount-80f2",
  "teams.team.channels.channel.messages.chatMessage.setReaction",
  "teams.team.channels.channel.messages.chatMessage.softDelete",
  "teams.team.channels.channel.messages.chatMessage.undoSoftDelete",
  "teams.team.channels.channel.messages.chatMessage.unsetReaction",
  "teams.channels.messages.ListReplies",
  "teams.channels.messages.CreateReplies",
  "teams.channels.messages.GetReplies",
  "teams.channels.messages.UpdateReplies",
  "teams.channels.messages.DeleteReplies",
  "teams.channels.messages.replies.ListHostedContents",
  "teams.channels.messages.replies.CreateHostedContents",
  "teams.channels.messages.replies.GetHostedContents",
  "teams.channels.messages.replies.UpdateHostedContents",
  "teams.channels.messages.replies.DeleteHostedContents",
  "teams.channels.messages.replies.GetHostedContentsContent",
  "teams.channels.messages.replies.UpdateHostedContentsContent",
  "teams.channels.messages.replies.DeleteHostedContentsContent",
  "teams.channels.messages.replies.hostedContents.GetCount-3bb6",
  "teams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction",
  "teams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete",
  "teams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete",
  "teams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction",
  "teams.channels.messages.replies.GetCount-bdfc",
  "teams.team.channels.channel.messages.chatMessage.replies.delta",
  "teams.team.channels.channel.messages.chatMessage.replies.replyWithQuote",
  "teams.channels.messages.GetCount-6767",
  "teams.team.channels.channel.messages.delta",
  "teams.team.channels.channel.messages.replyWithQuote",
  "teams.team.channels.channel.archive",
  "teams.team.channels.channel.completeMigration",
  "teams.team.channels.channel.doesUserHaveAccess",
  "teams.team.channels.channel.provisionEmail",
  "teams.team.channels.channel.removeEmail",
  "teams.team.channels.channel.startMigration",
  "teams.team.channels.channel.unarchive"
] as const;
export type TeamsGraphTeamsChannel01OperationKey = typeof TeamsGraphTeamsChannel01OperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphTeamsChannel01OperationPathParamMap {
  "teams.ListAllChannels": { "team-id": TeamsGraphPathParamValue };
  "teams.GetAllChannels": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.allChannels.GetCount-f86a": { "team-id": TeamsGraphPathParamValue };
  "teams.ListChannels": { "team-id": TeamsGraphPathParamValue };
  "teams.CreateChannels": { "team-id": TeamsGraphPathParamValue };
  "teams.GetChannels": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.UpdateChannels": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.DeleteChannels": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.ListAllMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.CreateAllMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.GetAllMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.channels.UpdateAllMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.channels.DeleteAllMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.channels.allMembers.GetCount-ea4d": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.allMembers.add": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.allMembers.remove": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.ListEnabledApps": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.GetEnabledApps": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "teamsApp-id": TeamsGraphPathParamValue };
  "teams.channels.enabledApps.GetCount-6262": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.GetFilesFolder": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.GetFilesFolderContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.UpdateFilesFolderContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.DeleteFilesFolderContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.ListMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.CreateMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.GetMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.channels.UpdateMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.channels.DeleteMembers": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "conversationMember-id": TeamsGraphPathParamValue };
  "teams.channels.members.GetCount-8e98": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.members.add": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.members.remove": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.ListMessages": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.CreateMessages": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.channels.GetMessages": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.channels.UpdateMessages": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.channels.DeleteMessages": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.channels.messages.ListHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.channels.messages.CreateHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.channels.messages.GetHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.channels.messages.UpdateHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.channels.messages.DeleteHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.channels.messages.GetHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.channels.messages.UpdateHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.channels.messages.DeleteHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.channels.messages.hostedContents.GetCount-80f2": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.messages.chatMessage.setReaction": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.messages.chatMessage.softDelete": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.messages.chatMessage.undoSoftDelete": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.messages.chatMessage.unsetReaction": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.channels.messages.ListReplies": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.channels.messages.CreateReplies": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.channels.messages.GetReplies": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.channels.messages.UpdateReplies": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.channels.messages.DeleteReplies": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.channels.messages.replies.ListHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.channels.messages.replies.CreateHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.channels.messages.replies.GetHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.channels.messages.replies.UpdateHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.channels.messages.replies.DeleteHostedContents": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.channels.messages.replies.GetHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.channels.messages.replies.UpdateHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.channels.messages.replies.DeleteHostedContentsContent": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue; "chatMessageHostedContent-id": TeamsGraphPathParamValue };
  "teams.channels.messages.replies.hostedContents.GetCount-3bb6": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue; "chatMessage-id1": TeamsGraphPathParamValue };
  "teams.channels.messages.replies.GetCount-bdfc": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.messages.chatMessage.replies.delta": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.messages.chatMessage.replies.replyWithQuote": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue; "chatMessage-id": TeamsGraphPathParamValue };
  "teams.channels.messages.GetCount-6767": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.messages.delta": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.messages.replyWithQuote": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.archive": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.completeMigration": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.doesUserHaveAccess": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.provisionEmail": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.removeEmail": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.startMigration": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
  "teams.team.channels.channel.unarchive": { "team-id": TeamsGraphPathParamValue; "channel-id": TeamsGraphPathParamValue };
}

export interface TeamsGraphTeamsChannel01OperationRequestMap {
  "teams.ListAllChannels": TeamsGraphOperationInput<"teams.ListAllChannels">;
  "teams.GetAllChannels": TeamsGraphOperationInput<"teams.GetAllChannels">;
  "teams.allChannels.GetCount-f86a": TeamsGraphOperationInput<"teams.allChannels.GetCount-f86a">;
  "teams.ListChannels": TeamsGraphOperationInput<"teams.ListChannels">;
  "teams.CreateChannels": TeamsGraphOperationInput<"teams.CreateChannels">;
  "teams.GetChannels": TeamsGraphOperationInput<"teams.GetChannels">;
  "teams.UpdateChannels": TeamsGraphOperationInput<"teams.UpdateChannels">;
  "teams.DeleteChannels": TeamsGraphOperationInput<"teams.DeleteChannels">;
  "teams.channels.ListAllMembers": TeamsGraphOperationInput<"teams.channels.ListAllMembers">;
  "teams.channels.CreateAllMembers": TeamsGraphOperationInput<"teams.channels.CreateAllMembers">;
  "teams.channels.GetAllMembers": TeamsGraphOperationInput<"teams.channels.GetAllMembers">;
  "teams.channels.UpdateAllMembers": TeamsGraphOperationInput<"teams.channels.UpdateAllMembers">;
  "teams.channels.DeleteAllMembers": TeamsGraphOperationInput<"teams.channels.DeleteAllMembers">;
  "teams.channels.allMembers.GetCount-ea4d": TeamsGraphOperationInput<"teams.channels.allMembers.GetCount-ea4d">;
  "teams.team.channels.channel.allMembers.add": TeamsGraphOperationInput<"teams.team.channels.channel.allMembers.add">;
  "teams.team.channels.channel.allMembers.remove": TeamsGraphOperationInput<"teams.team.channels.channel.allMembers.remove">;
  "teams.channels.ListEnabledApps": TeamsGraphOperationInput<"teams.channels.ListEnabledApps">;
  "teams.channels.GetEnabledApps": TeamsGraphOperationInput<"teams.channels.GetEnabledApps">;
  "teams.channels.enabledApps.GetCount-6262": TeamsGraphOperationInput<"teams.channels.enabledApps.GetCount-6262">;
  "teams.channels.GetFilesFolder": TeamsGraphOperationInput<"teams.channels.GetFilesFolder">;
  "teams.channels.GetFilesFolderContent": TeamsGraphOperationInput<"teams.channels.GetFilesFolderContent">;
  "teams.channels.UpdateFilesFolderContent": TeamsGraphOperationInput<"teams.channels.UpdateFilesFolderContent">;
  "teams.channels.DeleteFilesFolderContent": TeamsGraphOperationInput<"teams.channels.DeleteFilesFolderContent">;
  "teams.channels.ListMembers": TeamsGraphOperationInput<"teams.channels.ListMembers">;
  "teams.channels.CreateMembers": TeamsGraphOperationInput<"teams.channels.CreateMembers">;
  "teams.channels.GetMembers": TeamsGraphOperationInput<"teams.channels.GetMembers">;
  "teams.channels.UpdateMembers": TeamsGraphOperationInput<"teams.channels.UpdateMembers">;
  "teams.channels.DeleteMembers": TeamsGraphOperationInput<"teams.channels.DeleteMembers">;
  "teams.channels.members.GetCount-8e98": TeamsGraphOperationInput<"teams.channels.members.GetCount-8e98">;
  "teams.team.channels.channel.members.add": TeamsGraphOperationInput<"teams.team.channels.channel.members.add">;
  "teams.team.channels.channel.members.remove": TeamsGraphOperationInput<"teams.team.channels.channel.members.remove">;
  "teams.channels.ListMessages": TeamsGraphOperationInput<"teams.channels.ListMessages">;
  "teams.channels.CreateMessages": TeamsGraphOperationInput<"teams.channels.CreateMessages">;
  "teams.channels.GetMessages": TeamsGraphOperationInput<"teams.channels.GetMessages">;
  "teams.channels.UpdateMessages": TeamsGraphOperationInput<"teams.channels.UpdateMessages">;
  "teams.channels.DeleteMessages": TeamsGraphOperationInput<"teams.channels.DeleteMessages">;
  "teams.channels.messages.ListHostedContents": TeamsGraphOperationInput<"teams.channels.messages.ListHostedContents">;
  "teams.channels.messages.CreateHostedContents": TeamsGraphOperationInput<"teams.channels.messages.CreateHostedContents">;
  "teams.channels.messages.GetHostedContents": TeamsGraphOperationInput<"teams.channels.messages.GetHostedContents">;
  "teams.channels.messages.UpdateHostedContents": TeamsGraphOperationInput<"teams.channels.messages.UpdateHostedContents">;
  "teams.channels.messages.DeleteHostedContents": TeamsGraphOperationInput<"teams.channels.messages.DeleteHostedContents">;
  "teams.channels.messages.GetHostedContentsContent": TeamsGraphOperationInput<"teams.channels.messages.GetHostedContentsContent">;
  "teams.channels.messages.UpdateHostedContentsContent": TeamsGraphOperationInput<"teams.channels.messages.UpdateHostedContentsContent">;
  "teams.channels.messages.DeleteHostedContentsContent": TeamsGraphOperationInput<"teams.channels.messages.DeleteHostedContentsContent">;
  "teams.channels.messages.hostedContents.GetCount-80f2": TeamsGraphOperationInput<"teams.channels.messages.hostedContents.GetCount-80f2">;
  "teams.team.channels.channel.messages.chatMessage.setReaction": TeamsGraphOperationInput<"teams.team.channels.channel.messages.chatMessage.setReaction">;
  "teams.team.channels.channel.messages.chatMessage.softDelete": TeamsGraphOperationInput<"teams.team.channels.channel.messages.chatMessage.softDelete">;
  "teams.team.channels.channel.messages.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"teams.team.channels.channel.messages.chatMessage.undoSoftDelete">;
  "teams.team.channels.channel.messages.chatMessage.unsetReaction": TeamsGraphOperationInput<"teams.team.channels.channel.messages.chatMessage.unsetReaction">;
  "teams.channels.messages.ListReplies": TeamsGraphOperationInput<"teams.channels.messages.ListReplies">;
  "teams.channels.messages.CreateReplies": TeamsGraphOperationInput<"teams.channels.messages.CreateReplies">;
  "teams.channels.messages.GetReplies": TeamsGraphOperationInput<"teams.channels.messages.GetReplies">;
  "teams.channels.messages.UpdateReplies": TeamsGraphOperationInput<"teams.channels.messages.UpdateReplies">;
  "teams.channels.messages.DeleteReplies": TeamsGraphOperationInput<"teams.channels.messages.DeleteReplies">;
  "teams.channels.messages.replies.ListHostedContents": TeamsGraphOperationInput<"teams.channels.messages.replies.ListHostedContents">;
  "teams.channels.messages.replies.CreateHostedContents": TeamsGraphOperationInput<"teams.channels.messages.replies.CreateHostedContents">;
  "teams.channels.messages.replies.GetHostedContents": TeamsGraphOperationInput<"teams.channels.messages.replies.GetHostedContents">;
  "teams.channels.messages.replies.UpdateHostedContents": TeamsGraphOperationInput<"teams.channels.messages.replies.UpdateHostedContents">;
  "teams.channels.messages.replies.DeleteHostedContents": TeamsGraphOperationInput<"teams.channels.messages.replies.DeleteHostedContents">;
  "teams.channels.messages.replies.GetHostedContentsContent": TeamsGraphOperationInput<"teams.channels.messages.replies.GetHostedContentsContent">;
  "teams.channels.messages.replies.UpdateHostedContentsContent": TeamsGraphOperationInput<"teams.channels.messages.replies.UpdateHostedContentsContent">;
  "teams.channels.messages.replies.DeleteHostedContentsContent": TeamsGraphOperationInput<"teams.channels.messages.replies.DeleteHostedContentsContent">;
  "teams.channels.messages.replies.hostedContents.GetCount-3bb6": TeamsGraphOperationInput<"teams.channels.messages.replies.hostedContents.GetCount-3bb6">;
  "teams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction": TeamsGraphOperationInput<"teams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">;
  "teams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete": TeamsGraphOperationInput<"teams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">;
  "teams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete": TeamsGraphOperationInput<"teams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">;
  "teams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction": TeamsGraphOperationInput<"teams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">;
  "teams.channels.messages.replies.GetCount-bdfc": TeamsGraphOperationInput<"teams.channels.messages.replies.GetCount-bdfc">;
  "teams.team.channels.channel.messages.chatMessage.replies.delta": TeamsGraphOperationInput<"teams.team.channels.channel.messages.chatMessage.replies.delta">;
  "teams.team.channels.channel.messages.chatMessage.replies.replyWithQuote": TeamsGraphOperationInput<"teams.team.channels.channel.messages.chatMessage.replies.replyWithQuote">;
  "teams.channels.messages.GetCount-6767": TeamsGraphOperationInput<"teams.channels.messages.GetCount-6767">;
  "teams.team.channels.channel.messages.delta": TeamsGraphOperationInput<"teams.team.channels.channel.messages.delta">;
  "teams.team.channels.channel.messages.replyWithQuote": TeamsGraphOperationInput<"teams.team.channels.channel.messages.replyWithQuote">;
  "teams.team.channels.channel.archive": TeamsGraphOperationInput<"teams.team.channels.channel.archive">;
  "teams.team.channels.channel.completeMigration": TeamsGraphOperationInput<"teams.team.channels.channel.completeMigration">;
  "teams.team.channels.channel.doesUserHaveAccess": TeamsGraphOperationInput<"teams.team.channels.channel.doesUserHaveAccess">;
  "teams.team.channels.channel.provisionEmail": TeamsGraphOperationInput<"teams.team.channels.channel.provisionEmail">;
  "teams.team.channels.channel.removeEmail": TeamsGraphOperationInput<"teams.team.channels.channel.removeEmail">;
  "teams.team.channels.channel.startMigration": TeamsGraphOperationInput<"teams.team.channels.channel.startMigration">;
  "teams.team.channels.channel.unarchive": TeamsGraphOperationInput<"teams.team.channels.channel.unarchive">;
}

export interface TeamsGraphTeamsChannel01GeneratedClient {
  TeamsListAllChannels(...args: TeamsGraphOperationArgs<"teams.ListAllChannels">): Promise<TeamsGraphOperationResponseMap["teams.ListAllChannels"]>;
  TeamsGetAllChannels(...args: TeamsGraphOperationArgs<"teams.GetAllChannels">): Promise<TeamsGraphOperationResponseMap["teams.GetAllChannels"]>;
  TeamsAllChannelsGetCountF86a(...args: TeamsGraphOperationArgs<"teams.allChannels.GetCount-f86a">): Promise<TeamsGraphOperationResponseMap["teams.allChannels.GetCount-f86a"]>;
  TeamsListChannels(...args: TeamsGraphOperationArgs<"teams.ListChannels">): Promise<TeamsGraphOperationResponseMap["teams.ListChannels"]>;
  TeamsCreateChannels(...args: TeamsGraphOperationArgs<"teams.CreateChannels">): Promise<TeamsGraphOperationResponseMap["teams.CreateChannels"]>;
  TeamsGetChannels(...args: TeamsGraphOperationArgs<"teams.GetChannels">): Promise<TeamsGraphOperationResponseMap["teams.GetChannels"]>;
  TeamsUpdateChannels(...args: TeamsGraphOperationArgs<"teams.UpdateChannels">): Promise<TeamsGraphOperationResponseMap["teams.UpdateChannels"]>;
  TeamsDeleteChannels(...args: TeamsGraphOperationArgs<"teams.DeleteChannels">): Promise<TeamsGraphOperationResponseMap["teams.DeleteChannels"]>;
  TeamsChannelsListAllMembers(...args: TeamsGraphOperationArgs<"teams.channels.ListAllMembers">): Promise<TeamsGraphOperationResponseMap["teams.channels.ListAllMembers"]>;
  TeamsChannelsCreateAllMembers(...args: TeamsGraphOperationArgs<"teams.channels.CreateAllMembers">): Promise<TeamsGraphOperationResponseMap["teams.channels.CreateAllMembers"]>;
  TeamsChannelsGetAllMembers(...args: TeamsGraphOperationArgs<"teams.channels.GetAllMembers">): Promise<TeamsGraphOperationResponseMap["teams.channels.GetAllMembers"]>;
  TeamsChannelsUpdateAllMembers(...args: TeamsGraphOperationArgs<"teams.channels.UpdateAllMembers">): Promise<TeamsGraphOperationResponseMap["teams.channels.UpdateAllMembers"]>;
  TeamsChannelsDeleteAllMembers(...args: TeamsGraphOperationArgs<"teams.channels.DeleteAllMembers">): Promise<TeamsGraphOperationResponseMap["teams.channels.DeleteAllMembers"]>;
  TeamsChannelsAllMembersGetCountEa4d(...args: TeamsGraphOperationArgs<"teams.channels.allMembers.GetCount-ea4d">): Promise<TeamsGraphOperationResponseMap["teams.channels.allMembers.GetCount-ea4d"]>;
  TeamsTeamChannelsChannelAllMembersAdd(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.allMembers.add">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.allMembers.add"]>;
  TeamsTeamChannelsChannelAllMembersRemove(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.allMembers.remove">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.allMembers.remove"]>;
  TeamsChannelsListEnabledApps(...args: TeamsGraphOperationArgs<"teams.channels.ListEnabledApps">): Promise<TeamsGraphOperationResponseMap["teams.channels.ListEnabledApps"]>;
  TeamsChannelsGetEnabledApps(...args: TeamsGraphOperationArgs<"teams.channels.GetEnabledApps">): Promise<TeamsGraphOperationResponseMap["teams.channels.GetEnabledApps"]>;
  TeamsChannelsEnabledAppsGetCount6262(...args: TeamsGraphOperationArgs<"teams.channels.enabledApps.GetCount-6262">): Promise<TeamsGraphOperationResponseMap["teams.channels.enabledApps.GetCount-6262"]>;
  TeamsChannelsGetFilesFolder(...args: TeamsGraphOperationArgs<"teams.channels.GetFilesFolder">): Promise<TeamsGraphOperationResponseMap["teams.channels.GetFilesFolder"]>;
  TeamsChannelsGetFilesFolderContent(...args: TeamsGraphOperationArgs<"teams.channels.GetFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["teams.channels.GetFilesFolderContent"]>;
  TeamsChannelsUpdateFilesFolderContent(...args: TeamsGraphOperationArgs<"teams.channels.UpdateFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["teams.channels.UpdateFilesFolderContent"]>;
  TeamsChannelsDeleteFilesFolderContent(...args: TeamsGraphOperationArgs<"teams.channels.DeleteFilesFolderContent">): Promise<TeamsGraphOperationResponseMap["teams.channels.DeleteFilesFolderContent"]>;
  TeamsChannelsListMembers(...args: TeamsGraphOperationArgs<"teams.channels.ListMembers">): Promise<TeamsGraphOperationResponseMap["teams.channels.ListMembers"]>;
  TeamsChannelsCreateMembers(...args: TeamsGraphOperationArgs<"teams.channels.CreateMembers">): Promise<TeamsGraphOperationResponseMap["teams.channels.CreateMembers"]>;
  TeamsChannelsGetMembers(...args: TeamsGraphOperationArgs<"teams.channels.GetMembers">): Promise<TeamsGraphOperationResponseMap["teams.channels.GetMembers"]>;
  TeamsChannelsUpdateMembers(...args: TeamsGraphOperationArgs<"teams.channels.UpdateMembers">): Promise<TeamsGraphOperationResponseMap["teams.channels.UpdateMembers"]>;
  TeamsChannelsDeleteMembers(...args: TeamsGraphOperationArgs<"teams.channels.DeleteMembers">): Promise<TeamsGraphOperationResponseMap["teams.channels.DeleteMembers"]>;
  TeamsChannelsMembersGetCount8e98(...args: TeamsGraphOperationArgs<"teams.channels.members.GetCount-8e98">): Promise<TeamsGraphOperationResponseMap["teams.channels.members.GetCount-8e98"]>;
  TeamsTeamChannelsChannelMembersAdd(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.members.add">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.members.add"]>;
  TeamsTeamChannelsChannelMembersRemove(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.members.remove">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.members.remove"]>;
  TeamsChannelsListMessages(...args: TeamsGraphOperationArgs<"teams.channels.ListMessages">): Promise<TeamsGraphOperationResponseMap["teams.channels.ListMessages"]>;
  TeamsChannelsCreateMessages(...args: TeamsGraphOperationArgs<"teams.channels.CreateMessages">): Promise<TeamsGraphOperationResponseMap["teams.channels.CreateMessages"]>;
  TeamsChannelsGetMessages(...args: TeamsGraphOperationArgs<"teams.channels.GetMessages">): Promise<TeamsGraphOperationResponseMap["teams.channels.GetMessages"]>;
  TeamsChannelsUpdateMessages(...args: TeamsGraphOperationArgs<"teams.channels.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["teams.channels.UpdateMessages"]>;
  TeamsChannelsDeleteMessages(...args: TeamsGraphOperationArgs<"teams.channels.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["teams.channels.DeleteMessages"]>;
  TeamsChannelsMessagesListHostedContents(...args: TeamsGraphOperationArgs<"teams.channels.messages.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.ListHostedContents"]>;
  TeamsChannelsMessagesCreateHostedContents(...args: TeamsGraphOperationArgs<"teams.channels.messages.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.CreateHostedContents"]>;
  TeamsChannelsMessagesGetHostedContents(...args: TeamsGraphOperationArgs<"teams.channels.messages.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.GetHostedContents"]>;
  TeamsChannelsMessagesUpdateHostedContents(...args: TeamsGraphOperationArgs<"teams.channels.messages.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.UpdateHostedContents"]>;
  TeamsChannelsMessagesDeleteHostedContents(...args: TeamsGraphOperationArgs<"teams.channels.messages.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.DeleteHostedContents"]>;
  TeamsChannelsMessagesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"teams.channels.messages.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.GetHostedContentsContent"]>;
  TeamsChannelsMessagesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"teams.channels.messages.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.UpdateHostedContentsContent"]>;
  TeamsChannelsMessagesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"teams.channels.messages.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.DeleteHostedContentsContent"]>;
  TeamsChannelsMessagesHostedContentsGetCount80f2(...args: TeamsGraphOperationArgs<"teams.channels.messages.hostedContents.GetCount-80f2">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.hostedContents.GetCount-80f2"]>;
  TeamsTeamChannelsChannelMessagesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.messages.chatMessage.setReaction"]>;
  TeamsTeamChannelsChannelMessagesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.messages.chatMessage.softDelete"]>;
  TeamsTeamChannelsChannelMessagesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.messages.chatMessage.undoSoftDelete"]>;
  TeamsTeamChannelsChannelMessagesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.messages.chatMessage.unsetReaction"]>;
  TeamsChannelsMessagesListReplies(...args: TeamsGraphOperationArgs<"teams.channels.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.ListReplies"]>;
  TeamsChannelsMessagesCreateReplies(...args: TeamsGraphOperationArgs<"teams.channels.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.CreateReplies"]>;
  TeamsChannelsMessagesGetReplies(...args: TeamsGraphOperationArgs<"teams.channels.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.GetReplies"]>;
  TeamsChannelsMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"teams.channels.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.UpdateReplies"]>;
  TeamsChannelsMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"teams.channels.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.DeleteReplies"]>;
  TeamsChannelsMessagesRepliesListHostedContents(...args: TeamsGraphOperationArgs<"teams.channels.messages.replies.ListHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.replies.ListHostedContents"]>;
  TeamsChannelsMessagesRepliesCreateHostedContents(...args: TeamsGraphOperationArgs<"teams.channels.messages.replies.CreateHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.replies.CreateHostedContents"]>;
  TeamsChannelsMessagesRepliesGetHostedContents(...args: TeamsGraphOperationArgs<"teams.channels.messages.replies.GetHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.replies.GetHostedContents"]>;
  TeamsChannelsMessagesRepliesUpdateHostedContents(...args: TeamsGraphOperationArgs<"teams.channels.messages.replies.UpdateHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.replies.UpdateHostedContents"]>;
  TeamsChannelsMessagesRepliesDeleteHostedContents(...args: TeamsGraphOperationArgs<"teams.channels.messages.replies.DeleteHostedContents">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.replies.DeleteHostedContents"]>;
  TeamsChannelsMessagesRepliesGetHostedContentsContent(...args: TeamsGraphOperationArgs<"teams.channels.messages.replies.GetHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.replies.GetHostedContentsContent"]>;
  TeamsChannelsMessagesRepliesUpdateHostedContentsContent(...args: TeamsGraphOperationArgs<"teams.channels.messages.replies.UpdateHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.replies.UpdateHostedContentsContent"]>;
  TeamsChannelsMessagesRepliesDeleteHostedContentsContent(...args: TeamsGraphOperationArgs<"teams.channels.messages.replies.DeleteHostedContentsContent">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.replies.DeleteHostedContentsContent"]>;
  TeamsChannelsMessagesRepliesHostedContentsGetCount3bb6(...args: TeamsGraphOperationArgs<"teams.channels.messages.replies.hostedContents.GetCount-3bb6">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.replies.hostedContents.GetCount-3bb6"]>;
  TeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction"]>;
  TeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete"]>;
  TeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete"]>;
  TeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction"]>;
  TeamsChannelsMessagesRepliesGetCountBdfc(...args: TeamsGraphOperationArgs<"teams.channels.messages.replies.GetCount-bdfc">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.replies.GetCount-bdfc"]>;
  TeamsTeamChannelsChannelMessagesChatMessageRepliesDelta(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.replies.delta">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.messages.chatMessage.replies.delta"]>;
  TeamsTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.replies.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.messages.chatMessage.replies.replyWithQuote"]>;
  TeamsChannelsMessagesGetCount6767(...args: TeamsGraphOperationArgs<"teams.channels.messages.GetCount-6767">): Promise<TeamsGraphOperationResponseMap["teams.channels.messages.GetCount-6767"]>;
  TeamsTeamChannelsChannelMessagesDelta(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.messages.delta">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.messages.delta"]>;
  TeamsTeamChannelsChannelMessagesReplyWithQuote(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.messages.replyWithQuote">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.messages.replyWithQuote"]>;
  TeamsTeamChannelsChannelArchive(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.archive">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.archive"]>;
  TeamsTeamChannelsChannelCompleteMigration(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.completeMigration">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.completeMigration"]>;
  TeamsTeamChannelsChannelDoesUserHaveAccess(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.doesUserHaveAccess">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.doesUserHaveAccess"]>;
  TeamsTeamChannelsChannelProvisionEmail(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.provisionEmail">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.provisionEmail"]>;
  TeamsTeamChannelsChannelRemoveEmail(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.removeEmail">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.removeEmail"]>;
  TeamsTeamChannelsChannelStartMigration(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.startMigration">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.startMigration"]>;
  TeamsTeamChannelsChannelUnarchive(...args: TeamsGraphOperationArgs<"teams.team.channels.channel.unarchive">): Promise<TeamsGraphOperationResponseMap["teams.team.channels.channel.unarchive"]>;
}

export const TeamsGraphTeamsChannel01GeneratedFunctionNames = [
  "TeamsListAllChannels",
  "TeamsGetAllChannels",
  "TeamsAllChannelsGetCountF86a",
  "TeamsListChannels",
  "TeamsCreateChannels",
  "TeamsGetChannels",
  "TeamsUpdateChannels",
  "TeamsDeleteChannels",
  "TeamsChannelsListAllMembers",
  "TeamsChannelsCreateAllMembers",
  "TeamsChannelsGetAllMembers",
  "TeamsChannelsUpdateAllMembers",
  "TeamsChannelsDeleteAllMembers",
  "TeamsChannelsAllMembersGetCountEa4d",
  "TeamsTeamChannelsChannelAllMembersAdd",
  "TeamsTeamChannelsChannelAllMembersRemove",
  "TeamsChannelsListEnabledApps",
  "TeamsChannelsGetEnabledApps",
  "TeamsChannelsEnabledAppsGetCount6262",
  "TeamsChannelsGetFilesFolder",
  "TeamsChannelsGetFilesFolderContent",
  "TeamsChannelsUpdateFilesFolderContent",
  "TeamsChannelsDeleteFilesFolderContent",
  "TeamsChannelsListMembers",
  "TeamsChannelsCreateMembers",
  "TeamsChannelsGetMembers",
  "TeamsChannelsUpdateMembers",
  "TeamsChannelsDeleteMembers",
  "TeamsChannelsMembersGetCount8e98",
  "TeamsTeamChannelsChannelMembersAdd",
  "TeamsTeamChannelsChannelMembersRemove",
  "TeamsChannelsListMessages",
  "TeamsChannelsCreateMessages",
  "TeamsChannelsGetMessages",
  "TeamsChannelsUpdateMessages",
  "TeamsChannelsDeleteMessages",
  "TeamsChannelsMessagesListHostedContents",
  "TeamsChannelsMessagesCreateHostedContents",
  "TeamsChannelsMessagesGetHostedContents",
  "TeamsChannelsMessagesUpdateHostedContents",
  "TeamsChannelsMessagesDeleteHostedContents",
  "TeamsChannelsMessagesGetHostedContentsContent",
  "TeamsChannelsMessagesUpdateHostedContentsContent",
  "TeamsChannelsMessagesDeleteHostedContentsContent",
  "TeamsChannelsMessagesHostedContentsGetCount80f2",
  "TeamsTeamChannelsChannelMessagesChatMessageSetReaction",
  "TeamsTeamChannelsChannelMessagesChatMessageSoftDelete",
  "TeamsTeamChannelsChannelMessagesChatMessageUndoSoftDelete",
  "TeamsTeamChannelsChannelMessagesChatMessageUnsetReaction",
  "TeamsChannelsMessagesListReplies",
  "TeamsChannelsMessagesCreateReplies",
  "TeamsChannelsMessagesGetReplies",
  "TeamsChannelsMessagesUpdateReplies",
  "TeamsChannelsMessagesDeleteReplies",
  "TeamsChannelsMessagesRepliesListHostedContents",
  "TeamsChannelsMessagesRepliesCreateHostedContents",
  "TeamsChannelsMessagesRepliesGetHostedContents",
  "TeamsChannelsMessagesRepliesUpdateHostedContents",
  "TeamsChannelsMessagesRepliesDeleteHostedContents",
  "TeamsChannelsMessagesRepliesGetHostedContentsContent",
  "TeamsChannelsMessagesRepliesUpdateHostedContentsContent",
  "TeamsChannelsMessagesRepliesDeleteHostedContentsContent",
  "TeamsChannelsMessagesRepliesHostedContentsGetCount3bb6",
  "TeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction",
  "TeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete",
  "TeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete",
  "TeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction",
  "TeamsChannelsMessagesRepliesGetCountBdfc",
  "TeamsTeamChannelsChannelMessagesChatMessageRepliesDelta",
  "TeamsTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote",
  "TeamsChannelsMessagesGetCount6767",
  "TeamsTeamChannelsChannelMessagesDelta",
  "TeamsTeamChannelsChannelMessagesReplyWithQuote",
  "TeamsTeamChannelsChannelArchive",
  "TeamsTeamChannelsChannelCompleteMigration",
  "TeamsTeamChannelsChannelDoesUserHaveAccess",
  "TeamsTeamChannelsChannelProvisionEmail",
  "TeamsTeamChannelsChannelRemoveEmail",
  "TeamsTeamChannelsChannelStartMigration",
  "TeamsTeamChannelsChannelUnarchive"
] as const satisfies readonly (keyof TeamsGraphTeamsChannel01GeneratedClient)[];

export function createTeamsGraphTeamsChannel01GeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphTeamsChannel01GeneratedClient {
  return {
    TeamsListAllChannels: (...args) => callOperation("teams.ListAllChannels", ...(args as TeamsGraphOperationArgs<"teams.ListAllChannels">)),
    TeamsGetAllChannels: (...args) => callOperation("teams.GetAllChannels", ...(args as TeamsGraphOperationArgs<"teams.GetAllChannels">)),
    TeamsAllChannelsGetCountF86a: (...args) => callOperation("teams.allChannels.GetCount-f86a", ...(args as TeamsGraphOperationArgs<"teams.allChannels.GetCount-f86a">)),
    TeamsListChannels: (...args) => callOperation("teams.ListChannels", ...(args as TeamsGraphOperationArgs<"teams.ListChannels">)),
    TeamsCreateChannels: (...args) => callOperation("teams.CreateChannels", ...(args as TeamsGraphOperationArgs<"teams.CreateChannels">)),
    TeamsGetChannels: (...args) => callOperation("teams.GetChannels", ...(args as TeamsGraphOperationArgs<"teams.GetChannels">)),
    TeamsUpdateChannels: (...args) => callOperation("teams.UpdateChannels", ...(args as TeamsGraphOperationArgs<"teams.UpdateChannels">)),
    TeamsDeleteChannels: (...args) => callOperation("teams.DeleteChannels", ...(args as TeamsGraphOperationArgs<"teams.DeleteChannels">)),
    TeamsChannelsListAllMembers: (...args) => callOperation("teams.channels.ListAllMembers", ...(args as TeamsGraphOperationArgs<"teams.channels.ListAllMembers">)),
    TeamsChannelsCreateAllMembers: (...args) => callOperation("teams.channels.CreateAllMembers", ...(args as TeamsGraphOperationArgs<"teams.channels.CreateAllMembers">)),
    TeamsChannelsGetAllMembers: (...args) => callOperation("teams.channels.GetAllMembers", ...(args as TeamsGraphOperationArgs<"teams.channels.GetAllMembers">)),
    TeamsChannelsUpdateAllMembers: (...args) => callOperation("teams.channels.UpdateAllMembers", ...(args as TeamsGraphOperationArgs<"teams.channels.UpdateAllMembers">)),
    TeamsChannelsDeleteAllMembers: (...args) => callOperation("teams.channels.DeleteAllMembers", ...(args as TeamsGraphOperationArgs<"teams.channels.DeleteAllMembers">)),
    TeamsChannelsAllMembersGetCountEa4d: (...args) => callOperation("teams.channels.allMembers.GetCount-ea4d", ...(args as TeamsGraphOperationArgs<"teams.channels.allMembers.GetCount-ea4d">)),
    TeamsTeamChannelsChannelAllMembersAdd: (...args) => callOperation("teams.team.channels.channel.allMembers.add", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.allMembers.add">)),
    TeamsTeamChannelsChannelAllMembersRemove: (...args) => callOperation("teams.team.channels.channel.allMembers.remove", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.allMembers.remove">)),
    TeamsChannelsListEnabledApps: (...args) => callOperation("teams.channels.ListEnabledApps", ...(args as TeamsGraphOperationArgs<"teams.channels.ListEnabledApps">)),
    TeamsChannelsGetEnabledApps: (...args) => callOperation("teams.channels.GetEnabledApps", ...(args as TeamsGraphOperationArgs<"teams.channels.GetEnabledApps">)),
    TeamsChannelsEnabledAppsGetCount6262: (...args) => callOperation("teams.channels.enabledApps.GetCount-6262", ...(args as TeamsGraphOperationArgs<"teams.channels.enabledApps.GetCount-6262">)),
    TeamsChannelsGetFilesFolder: (...args) => callOperation("teams.channels.GetFilesFolder", ...(args as TeamsGraphOperationArgs<"teams.channels.GetFilesFolder">)),
    TeamsChannelsGetFilesFolderContent: (...args) => callOperation("teams.channels.GetFilesFolderContent", ...(args as TeamsGraphOperationArgs<"teams.channels.GetFilesFolderContent">)),
    TeamsChannelsUpdateFilesFolderContent: (...args) => callOperation("teams.channels.UpdateFilesFolderContent", ...(args as TeamsGraphOperationArgs<"teams.channels.UpdateFilesFolderContent">)),
    TeamsChannelsDeleteFilesFolderContent: (...args) => callOperation("teams.channels.DeleteFilesFolderContent", ...(args as TeamsGraphOperationArgs<"teams.channels.DeleteFilesFolderContent">)),
    TeamsChannelsListMembers: (...args) => callOperation("teams.channels.ListMembers", ...(args as TeamsGraphOperationArgs<"teams.channels.ListMembers">)),
    TeamsChannelsCreateMembers: (...args) => callOperation("teams.channels.CreateMembers", ...(args as TeamsGraphOperationArgs<"teams.channels.CreateMembers">)),
    TeamsChannelsGetMembers: (...args) => callOperation("teams.channels.GetMembers", ...(args as TeamsGraphOperationArgs<"teams.channels.GetMembers">)),
    TeamsChannelsUpdateMembers: (...args) => callOperation("teams.channels.UpdateMembers", ...(args as TeamsGraphOperationArgs<"teams.channels.UpdateMembers">)),
    TeamsChannelsDeleteMembers: (...args) => callOperation("teams.channels.DeleteMembers", ...(args as TeamsGraphOperationArgs<"teams.channels.DeleteMembers">)),
    TeamsChannelsMembersGetCount8e98: (...args) => callOperation("teams.channels.members.GetCount-8e98", ...(args as TeamsGraphOperationArgs<"teams.channels.members.GetCount-8e98">)),
    TeamsTeamChannelsChannelMembersAdd: (...args) => callOperation("teams.team.channels.channel.members.add", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.members.add">)),
    TeamsTeamChannelsChannelMembersRemove: (...args) => callOperation("teams.team.channels.channel.members.remove", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.members.remove">)),
    TeamsChannelsListMessages: (...args) => callOperation("teams.channels.ListMessages", ...(args as TeamsGraphOperationArgs<"teams.channels.ListMessages">)),
    TeamsChannelsCreateMessages: (...args) => callOperation("teams.channels.CreateMessages", ...(args as TeamsGraphOperationArgs<"teams.channels.CreateMessages">)),
    TeamsChannelsGetMessages: (...args) => callOperation("teams.channels.GetMessages", ...(args as TeamsGraphOperationArgs<"teams.channels.GetMessages">)),
    TeamsChannelsUpdateMessages: (...args) => callOperation("teams.channels.UpdateMessages", ...(args as TeamsGraphOperationArgs<"teams.channels.UpdateMessages">)),
    TeamsChannelsDeleteMessages: (...args) => callOperation("teams.channels.DeleteMessages", ...(args as TeamsGraphOperationArgs<"teams.channels.DeleteMessages">)),
    TeamsChannelsMessagesListHostedContents: (...args) => callOperation("teams.channels.messages.ListHostedContents", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.ListHostedContents">)),
    TeamsChannelsMessagesCreateHostedContents: (...args) => callOperation("teams.channels.messages.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.CreateHostedContents">)),
    TeamsChannelsMessagesGetHostedContents: (...args) => callOperation("teams.channels.messages.GetHostedContents", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.GetHostedContents">)),
    TeamsChannelsMessagesUpdateHostedContents: (...args) => callOperation("teams.channels.messages.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.UpdateHostedContents">)),
    TeamsChannelsMessagesDeleteHostedContents: (...args) => callOperation("teams.channels.messages.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.DeleteHostedContents">)),
    TeamsChannelsMessagesGetHostedContentsContent: (...args) => callOperation("teams.channels.messages.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.GetHostedContentsContent">)),
    TeamsChannelsMessagesUpdateHostedContentsContent: (...args) => callOperation("teams.channels.messages.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.UpdateHostedContentsContent">)),
    TeamsChannelsMessagesDeleteHostedContentsContent: (...args) => callOperation("teams.channels.messages.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.DeleteHostedContentsContent">)),
    TeamsChannelsMessagesHostedContentsGetCount80f2: (...args) => callOperation("teams.channels.messages.hostedContents.GetCount-80f2", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.hostedContents.GetCount-80f2">)),
    TeamsTeamChannelsChannelMessagesChatMessageSetReaction: (...args) => callOperation("teams.team.channels.channel.messages.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.setReaction">)),
    TeamsTeamChannelsChannelMessagesChatMessageSoftDelete: (...args) => callOperation("teams.team.channels.channel.messages.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.softDelete">)),
    TeamsTeamChannelsChannelMessagesChatMessageUndoSoftDelete: (...args) => callOperation("teams.team.channels.channel.messages.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.undoSoftDelete">)),
    TeamsTeamChannelsChannelMessagesChatMessageUnsetReaction: (...args) => callOperation("teams.team.channels.channel.messages.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.unsetReaction">)),
    TeamsChannelsMessagesListReplies: (...args) => callOperation("teams.channels.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.ListReplies">)),
    TeamsChannelsMessagesCreateReplies: (...args) => callOperation("teams.channels.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.CreateReplies">)),
    TeamsChannelsMessagesGetReplies: (...args) => callOperation("teams.channels.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.GetReplies">)),
    TeamsChannelsMessagesUpdateReplies: (...args) => callOperation("teams.channels.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.UpdateReplies">)),
    TeamsChannelsMessagesDeleteReplies: (...args) => callOperation("teams.channels.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.DeleteReplies">)),
    TeamsChannelsMessagesRepliesListHostedContents: (...args) => callOperation("teams.channels.messages.replies.ListHostedContents", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.replies.ListHostedContents">)),
    TeamsChannelsMessagesRepliesCreateHostedContents: (...args) => callOperation("teams.channels.messages.replies.CreateHostedContents", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.replies.CreateHostedContents">)),
    TeamsChannelsMessagesRepliesGetHostedContents: (...args) => callOperation("teams.channels.messages.replies.GetHostedContents", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.replies.GetHostedContents">)),
    TeamsChannelsMessagesRepliesUpdateHostedContents: (...args) => callOperation("teams.channels.messages.replies.UpdateHostedContents", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.replies.UpdateHostedContents">)),
    TeamsChannelsMessagesRepliesDeleteHostedContents: (...args) => callOperation("teams.channels.messages.replies.DeleteHostedContents", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.replies.DeleteHostedContents">)),
    TeamsChannelsMessagesRepliesGetHostedContentsContent: (...args) => callOperation("teams.channels.messages.replies.GetHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.replies.GetHostedContentsContent">)),
    TeamsChannelsMessagesRepliesUpdateHostedContentsContent: (...args) => callOperation("teams.channels.messages.replies.UpdateHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.replies.UpdateHostedContentsContent">)),
    TeamsChannelsMessagesRepliesDeleteHostedContentsContent: (...args) => callOperation("teams.channels.messages.replies.DeleteHostedContentsContent", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.replies.DeleteHostedContentsContent">)),
    TeamsChannelsMessagesRepliesHostedContentsGetCount3bb6: (...args) => callOperation("teams.channels.messages.replies.hostedContents.GetCount-3bb6", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.replies.hostedContents.GetCount-3bb6">)),
    TeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSetReaction: (...args) => callOperation("teams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.replies.chatMessage.setReaction">)),
    TeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageSoftDelete: (...args) => callOperation("teams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.replies.chatMessage.softDelete">)),
    TeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUndoSoftDelete: (...args) => callOperation("teams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.replies.chatMessage.undoSoftDelete">)),
    TeamsTeamChannelsChannelMessagesChatMessageRepliesChatMessageUnsetReaction: (...args) => callOperation("teams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.replies.chatMessage.unsetReaction">)),
    TeamsChannelsMessagesRepliesGetCountBdfc: (...args) => callOperation("teams.channels.messages.replies.GetCount-bdfc", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.replies.GetCount-bdfc">)),
    TeamsTeamChannelsChannelMessagesChatMessageRepliesDelta: (...args) => callOperation("teams.team.channels.channel.messages.chatMessage.replies.delta", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.replies.delta">)),
    TeamsTeamChannelsChannelMessagesChatMessageRepliesReplyWithQuote: (...args) => callOperation("teams.team.channels.channel.messages.chatMessage.replies.replyWithQuote", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.messages.chatMessage.replies.replyWithQuote">)),
    TeamsChannelsMessagesGetCount6767: (...args) => callOperation("teams.channels.messages.GetCount-6767", ...(args as TeamsGraphOperationArgs<"teams.channels.messages.GetCount-6767">)),
    TeamsTeamChannelsChannelMessagesDelta: (...args) => callOperation("teams.team.channels.channel.messages.delta", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.messages.delta">)),
    TeamsTeamChannelsChannelMessagesReplyWithQuote: (...args) => callOperation("teams.team.channels.channel.messages.replyWithQuote", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.messages.replyWithQuote">)),
    TeamsTeamChannelsChannelArchive: (...args) => callOperation("teams.team.channels.channel.archive", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.archive">)),
    TeamsTeamChannelsChannelCompleteMigration: (...args) => callOperation("teams.team.channels.channel.completeMigration", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.completeMigration">)),
    TeamsTeamChannelsChannelDoesUserHaveAccess: (...args) => callOperation("teams.team.channels.channel.doesUserHaveAccess", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.doesUserHaveAccess">)),
    TeamsTeamChannelsChannelProvisionEmail: (...args) => callOperation("teams.team.channels.channel.provisionEmail", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.provisionEmail">)),
    TeamsTeamChannelsChannelRemoveEmail: (...args) => callOperation("teams.team.channels.channel.removeEmail", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.removeEmail">)),
    TeamsTeamChannelsChannelStartMigration: (...args) => callOperation("teams.team.channels.channel.startMigration", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.startMigration">)),
    TeamsTeamChannelsChannelUnarchive: (...args) => callOperation("teams.team.channels.channel.unarchive", ...(args as TeamsGraphOperationArgs<"teams.team.channels.channel.unarchive">)),
  };
}
