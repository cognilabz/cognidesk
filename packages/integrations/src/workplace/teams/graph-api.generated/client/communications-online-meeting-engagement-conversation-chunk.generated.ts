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
export const TeamsGraphCommunicationsOnlineMeetingEngagementConversationOperationKeys = [
  "communications.ListOnlineMeetingConversations",
  "communications.CreateOnlineMeetingConversations",
  "communications.GetOnlineMeetingConversations",
  "communications.UpdateOnlineMeetingConversations",
  "communications.DeleteOnlineMeetingConversations",
  "communications.onlineMeetingConversations.ListMessages",
  "communications.onlineMeetingConversations.CreateMessages",
  "communications.onlineMeetingConversations.GetMessages",
  "communications.onlineMeetingConversations.UpdateMessages",
  "communications.onlineMeetingConversations.DeleteMessages",
  "communications.onlineMeetingConversations.messages.GetConversation",
  "communications.onlineMeetingConversations.messages.ListReactions",
  "communications.onlineMeetingConversations.messages.CreateReactions",
  "communications.onlineMeetingConversations.messages.GetReactions",
  "communications.onlineMeetingConversations.messages.UpdateReactions",
  "communications.onlineMeetingConversations.messages.DeleteReactions",
  "communications.onlineMeetingConversations.messages.reactions.GetCount-89b7",
  "communications.onlineMeetingConversations.messages.ListReplies",
  "communications.onlineMeetingConversations.messages.CreateReplies",
  "communications.onlineMeetingConversations.messages.GetReplies",
  "communications.onlineMeetingConversations.messages.UpdateReplies",
  "communications.onlineMeetingConversations.messages.DeleteReplies",
  "communications.onlineMeetingConversations.messages.replies.GetConversation",
  "communications.onlineMeetingConversations.messages.replies.ListReactions",
  "communications.onlineMeetingConversations.messages.replies.CreateReactions",
  "communications.onlineMeetingConversations.messages.replies.GetReactions",
  "communications.onlineMeetingConversations.messages.replies.UpdateReactions",
  "communications.onlineMeetingConversations.messages.replies.DeleteReactions",
  "communications.onlineMeetingConversations.messages.replies.reactions.GetCount-e8c6",
  "communications.onlineMeetingConversations.messages.replies.GetReplyTo",
  "communications.onlineMeetingConversations.messages.replies.GetCount-6213",
  "communications.onlineMeetingConversations.messages.GetReplyTo",
  "communications.onlineMeetingConversations.messages.GetCount-6781",
  "communications.onlineMeetingConversations.GetOnlineMeeting",
  "communications.onlineMeetingConversations.GetOnlineMeetingAttendeeReport",
  "communications.onlineMeetingConversations.UpdateOnlineMeetingAttendeeReport",
  "communications.onlineMeetingConversations.DeleteOnlineMeetingAttendeeReport",
  "communications.onlineMeetingConversations.GetStarter",
  "communications.onlineMeetingConversations.UpdateStarter",
  "communications.onlineMeetingConversations.DeleteStarter",
  "communications.onlineMeetingConversations.starter.GetConversation",
  "communications.onlineMeetingConversations.starter.ListReactions",
  "communications.onlineMeetingConversations.starter.CreateReactions",
  "communications.onlineMeetingConversations.starter.GetReactions",
  "communications.onlineMeetingConversations.starter.UpdateReactions",
  "communications.onlineMeetingConversations.starter.DeleteReactions",
  "communications.onlineMeetingConversations.starter.reactions.GetCount-690a",
  "communications.onlineMeetingConversations.starter.ListReplies",
  "communications.onlineMeetingConversations.starter.CreateReplies",
  "communications.onlineMeetingConversations.starter.GetReplies",
  "communications.onlineMeetingConversations.starter.UpdateReplies",
  "communications.onlineMeetingConversations.starter.DeleteReplies",
  "communications.onlineMeetingConversations.starter.replies.GetConversation",
  "communications.onlineMeetingConversations.starter.replies.ListReactions",
  "communications.onlineMeetingConversations.starter.replies.CreateReactions",
  "communications.onlineMeetingConversations.starter.replies.GetReactions",
  "communications.onlineMeetingConversations.starter.replies.UpdateReactions",
  "communications.onlineMeetingConversations.starter.replies.DeleteReactions",
  "communications.onlineMeetingConversations.starter.replies.reactions.GetCount-ede3",
  "communications.onlineMeetingConversations.starter.replies.GetReplyTo",
  "communications.onlineMeetingConversations.starter.replies.GetCount-8c87",
  "communications.onlineMeetingConversations.starter.GetReplyTo",
  "communications.onlineMeetingConversations.GetCount-42c0"
] as const;
export type TeamsGraphCommunicationsOnlineMeetingEngagementConversationOperationKey = typeof TeamsGraphCommunicationsOnlineMeetingEngagementConversationOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphCommunicationsOnlineMeetingEngagementConversationOperationPathParamMap {
  "communications.ListOnlineMeetingConversations": {};
  "communications.CreateOnlineMeetingConversations": {};
  "communications.GetOnlineMeetingConversations": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.UpdateOnlineMeetingConversations": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.DeleteOnlineMeetingConversations": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.ListMessages": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.CreateMessages": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.GetMessages": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.UpdateMessages": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.DeleteMessages": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.GetConversation": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.ListReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.CreateReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.GetReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessageReaction-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.UpdateReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessageReaction-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.DeleteReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessageReaction-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.reactions.GetCount-89b7": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.ListReplies": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.CreateReplies": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.GetReplies": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessage-id1": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.UpdateReplies": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessage-id1": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.DeleteReplies": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessage-id1": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.replies.GetConversation": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessage-id1": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.replies.ListReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessage-id1": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.replies.CreateReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessage-id1": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.replies.GetReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessage-id1": TeamsGraphPathParamValue; "engagementConversationMessageReaction-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.replies.UpdateReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessage-id1": TeamsGraphPathParamValue; "engagementConversationMessageReaction-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.replies.DeleteReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessage-id1": TeamsGraphPathParamValue; "engagementConversationMessageReaction-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.replies.reactions.GetCount-e8c6": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessage-id1": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.replies.GetReplyTo": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessage-id1": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.replies.GetCount-6213": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.GetReplyTo": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.messages.GetCount-6781": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.GetOnlineMeeting": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.GetOnlineMeetingAttendeeReport": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.UpdateOnlineMeetingAttendeeReport": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.DeleteOnlineMeetingAttendeeReport": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.GetStarter": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.UpdateStarter": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.DeleteStarter": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.GetConversation": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.ListReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.CreateReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.GetReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessageReaction-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.UpdateReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessageReaction-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.DeleteReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessageReaction-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.reactions.GetCount-690a": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.ListReplies": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.CreateReplies": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.GetReplies": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.UpdateReplies": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.DeleteReplies": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.replies.GetConversation": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.replies.ListReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.replies.CreateReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.replies.GetReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessageReaction-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.replies.UpdateReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessageReaction-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.replies.DeleteReactions": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue; "engagementConversationMessageReaction-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.replies.reactions.GetCount-ede3": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.replies.GetReplyTo": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue; "engagementConversationMessage-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.replies.GetCount-8c87": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.starter.GetReplyTo": { "onlineMeetingEngagementConversation-id": TeamsGraphPathParamValue };
  "communications.onlineMeetingConversations.GetCount-42c0": {};
}

export interface TeamsGraphCommunicationsOnlineMeetingEngagementConversationOperationRequestMap {
  "communications.ListOnlineMeetingConversations": TeamsGraphOperationInput<"communications.ListOnlineMeetingConversations">;
  "communications.CreateOnlineMeetingConversations": TeamsGraphOperationInput<"communications.CreateOnlineMeetingConversations">;
  "communications.GetOnlineMeetingConversations": TeamsGraphOperationInput<"communications.GetOnlineMeetingConversations">;
  "communications.UpdateOnlineMeetingConversations": TeamsGraphOperationInput<"communications.UpdateOnlineMeetingConversations">;
  "communications.DeleteOnlineMeetingConversations": TeamsGraphOperationInput<"communications.DeleteOnlineMeetingConversations">;
  "communications.onlineMeetingConversations.ListMessages": TeamsGraphOperationInput<"communications.onlineMeetingConversations.ListMessages">;
  "communications.onlineMeetingConversations.CreateMessages": TeamsGraphOperationInput<"communications.onlineMeetingConversations.CreateMessages">;
  "communications.onlineMeetingConversations.GetMessages": TeamsGraphOperationInput<"communications.onlineMeetingConversations.GetMessages">;
  "communications.onlineMeetingConversations.UpdateMessages": TeamsGraphOperationInput<"communications.onlineMeetingConversations.UpdateMessages">;
  "communications.onlineMeetingConversations.DeleteMessages": TeamsGraphOperationInput<"communications.onlineMeetingConversations.DeleteMessages">;
  "communications.onlineMeetingConversations.messages.GetConversation": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.GetConversation">;
  "communications.onlineMeetingConversations.messages.ListReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.ListReactions">;
  "communications.onlineMeetingConversations.messages.CreateReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.CreateReactions">;
  "communications.onlineMeetingConversations.messages.GetReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.GetReactions">;
  "communications.onlineMeetingConversations.messages.UpdateReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.UpdateReactions">;
  "communications.onlineMeetingConversations.messages.DeleteReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.DeleteReactions">;
  "communications.onlineMeetingConversations.messages.reactions.GetCount-89b7": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.reactions.GetCount-89b7">;
  "communications.onlineMeetingConversations.messages.ListReplies": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.ListReplies">;
  "communications.onlineMeetingConversations.messages.CreateReplies": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.CreateReplies">;
  "communications.onlineMeetingConversations.messages.GetReplies": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.GetReplies">;
  "communications.onlineMeetingConversations.messages.UpdateReplies": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.UpdateReplies">;
  "communications.onlineMeetingConversations.messages.DeleteReplies": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.DeleteReplies">;
  "communications.onlineMeetingConversations.messages.replies.GetConversation": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.replies.GetConversation">;
  "communications.onlineMeetingConversations.messages.replies.ListReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.replies.ListReactions">;
  "communications.onlineMeetingConversations.messages.replies.CreateReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.replies.CreateReactions">;
  "communications.onlineMeetingConversations.messages.replies.GetReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.replies.GetReactions">;
  "communications.onlineMeetingConversations.messages.replies.UpdateReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.replies.UpdateReactions">;
  "communications.onlineMeetingConversations.messages.replies.DeleteReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.replies.DeleteReactions">;
  "communications.onlineMeetingConversations.messages.replies.reactions.GetCount-e8c6": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.replies.reactions.GetCount-e8c6">;
  "communications.onlineMeetingConversations.messages.replies.GetReplyTo": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.replies.GetReplyTo">;
  "communications.onlineMeetingConversations.messages.replies.GetCount-6213": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.replies.GetCount-6213">;
  "communications.onlineMeetingConversations.messages.GetReplyTo": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.GetReplyTo">;
  "communications.onlineMeetingConversations.messages.GetCount-6781": TeamsGraphOperationInput<"communications.onlineMeetingConversations.messages.GetCount-6781">;
  "communications.onlineMeetingConversations.GetOnlineMeeting": TeamsGraphOperationInput<"communications.onlineMeetingConversations.GetOnlineMeeting">;
  "communications.onlineMeetingConversations.GetOnlineMeetingAttendeeReport": TeamsGraphOperationInput<"communications.onlineMeetingConversations.GetOnlineMeetingAttendeeReport">;
  "communications.onlineMeetingConversations.UpdateOnlineMeetingAttendeeReport": TeamsGraphOperationInput<"communications.onlineMeetingConversations.UpdateOnlineMeetingAttendeeReport">;
  "communications.onlineMeetingConversations.DeleteOnlineMeetingAttendeeReport": TeamsGraphOperationInput<"communications.onlineMeetingConversations.DeleteOnlineMeetingAttendeeReport">;
  "communications.onlineMeetingConversations.GetStarter": TeamsGraphOperationInput<"communications.onlineMeetingConversations.GetStarter">;
  "communications.onlineMeetingConversations.UpdateStarter": TeamsGraphOperationInput<"communications.onlineMeetingConversations.UpdateStarter">;
  "communications.onlineMeetingConversations.DeleteStarter": TeamsGraphOperationInput<"communications.onlineMeetingConversations.DeleteStarter">;
  "communications.onlineMeetingConversations.starter.GetConversation": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.GetConversation">;
  "communications.onlineMeetingConversations.starter.ListReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.ListReactions">;
  "communications.onlineMeetingConversations.starter.CreateReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.CreateReactions">;
  "communications.onlineMeetingConversations.starter.GetReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.GetReactions">;
  "communications.onlineMeetingConversations.starter.UpdateReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.UpdateReactions">;
  "communications.onlineMeetingConversations.starter.DeleteReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.DeleteReactions">;
  "communications.onlineMeetingConversations.starter.reactions.GetCount-690a": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.reactions.GetCount-690a">;
  "communications.onlineMeetingConversations.starter.ListReplies": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.ListReplies">;
  "communications.onlineMeetingConversations.starter.CreateReplies": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.CreateReplies">;
  "communications.onlineMeetingConversations.starter.GetReplies": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.GetReplies">;
  "communications.onlineMeetingConversations.starter.UpdateReplies": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.UpdateReplies">;
  "communications.onlineMeetingConversations.starter.DeleteReplies": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.DeleteReplies">;
  "communications.onlineMeetingConversations.starter.replies.GetConversation": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.replies.GetConversation">;
  "communications.onlineMeetingConversations.starter.replies.ListReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.replies.ListReactions">;
  "communications.onlineMeetingConversations.starter.replies.CreateReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.replies.CreateReactions">;
  "communications.onlineMeetingConversations.starter.replies.GetReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.replies.GetReactions">;
  "communications.onlineMeetingConversations.starter.replies.UpdateReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.replies.UpdateReactions">;
  "communications.onlineMeetingConversations.starter.replies.DeleteReactions": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.replies.DeleteReactions">;
  "communications.onlineMeetingConversations.starter.replies.reactions.GetCount-ede3": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.replies.reactions.GetCount-ede3">;
  "communications.onlineMeetingConversations.starter.replies.GetReplyTo": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.replies.GetReplyTo">;
  "communications.onlineMeetingConversations.starter.replies.GetCount-8c87": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.replies.GetCount-8c87">;
  "communications.onlineMeetingConversations.starter.GetReplyTo": TeamsGraphOperationInput<"communications.onlineMeetingConversations.starter.GetReplyTo">;
  "communications.onlineMeetingConversations.GetCount-42c0": TeamsGraphOperationInput<"communications.onlineMeetingConversations.GetCount-42c0">;
}

export interface TeamsGraphCommunicationsOnlineMeetingEngagementConversationGeneratedClient {
  CommunicationsListOnlineMeetingConversations(...args: TeamsGraphOperationArgs<"communications.ListOnlineMeetingConversations">): Promise<TeamsGraphOperationResponseMap["communications.ListOnlineMeetingConversations"]>;
  CommunicationsCreateOnlineMeetingConversations(...args: TeamsGraphOperationArgs<"communications.CreateOnlineMeetingConversations">): Promise<TeamsGraphOperationResponseMap["communications.CreateOnlineMeetingConversations"]>;
  CommunicationsGetOnlineMeetingConversations(...args: TeamsGraphOperationArgs<"communications.GetOnlineMeetingConversations">): Promise<TeamsGraphOperationResponseMap["communications.GetOnlineMeetingConversations"]>;
  CommunicationsUpdateOnlineMeetingConversations(...args: TeamsGraphOperationArgs<"communications.UpdateOnlineMeetingConversations">): Promise<TeamsGraphOperationResponseMap["communications.UpdateOnlineMeetingConversations"]>;
  CommunicationsDeleteOnlineMeetingConversations(...args: TeamsGraphOperationArgs<"communications.DeleteOnlineMeetingConversations">): Promise<TeamsGraphOperationResponseMap["communications.DeleteOnlineMeetingConversations"]>;
  CommunicationsOnlineMeetingConversationsListMessages(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.ListMessages">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.ListMessages"]>;
  CommunicationsOnlineMeetingConversationsCreateMessages(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.CreateMessages">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.CreateMessages"]>;
  CommunicationsOnlineMeetingConversationsGetMessages(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.GetMessages">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.GetMessages"]>;
  CommunicationsOnlineMeetingConversationsUpdateMessages(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.UpdateMessages">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.UpdateMessages"]>;
  CommunicationsOnlineMeetingConversationsDeleteMessages(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.DeleteMessages">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.DeleteMessages"]>;
  CommunicationsOnlineMeetingConversationsMessagesGetConversation(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.GetConversation">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.GetConversation"]>;
  CommunicationsOnlineMeetingConversationsMessagesListReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.ListReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.ListReactions"]>;
  CommunicationsOnlineMeetingConversationsMessagesCreateReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.CreateReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.CreateReactions"]>;
  CommunicationsOnlineMeetingConversationsMessagesGetReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.GetReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.GetReactions"]>;
  CommunicationsOnlineMeetingConversationsMessagesUpdateReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.UpdateReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.UpdateReactions"]>;
  CommunicationsOnlineMeetingConversationsMessagesDeleteReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.DeleteReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.DeleteReactions"]>;
  CommunicationsOnlineMeetingConversationsMessagesReactionsGetCount89b7(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.reactions.GetCount-89b7">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.reactions.GetCount-89b7"]>;
  CommunicationsOnlineMeetingConversationsMessagesListReplies(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.ListReplies">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.ListReplies"]>;
  CommunicationsOnlineMeetingConversationsMessagesCreateReplies(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.CreateReplies">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.CreateReplies"]>;
  CommunicationsOnlineMeetingConversationsMessagesGetReplies(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.GetReplies">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.GetReplies"]>;
  CommunicationsOnlineMeetingConversationsMessagesUpdateReplies(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.UpdateReplies"]>;
  CommunicationsOnlineMeetingConversationsMessagesDeleteReplies(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.DeleteReplies"]>;
  CommunicationsOnlineMeetingConversationsMessagesRepliesGetConversation(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.GetConversation">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.replies.GetConversation"]>;
  CommunicationsOnlineMeetingConversationsMessagesRepliesListReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.ListReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.replies.ListReactions"]>;
  CommunicationsOnlineMeetingConversationsMessagesRepliesCreateReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.CreateReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.replies.CreateReactions"]>;
  CommunicationsOnlineMeetingConversationsMessagesRepliesGetReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.GetReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.replies.GetReactions"]>;
  CommunicationsOnlineMeetingConversationsMessagesRepliesUpdateReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.UpdateReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.replies.UpdateReactions"]>;
  CommunicationsOnlineMeetingConversationsMessagesRepliesDeleteReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.DeleteReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.replies.DeleteReactions"]>;
  CommunicationsOnlineMeetingConversationsMessagesRepliesReactionsGetCountE8c6(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.reactions.GetCount-e8c6">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.replies.reactions.GetCount-e8c6"]>;
  CommunicationsOnlineMeetingConversationsMessagesRepliesGetReplyTo(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.GetReplyTo">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.replies.GetReplyTo"]>;
  CommunicationsOnlineMeetingConversationsMessagesRepliesGetCount6213(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.GetCount-6213">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.replies.GetCount-6213"]>;
  CommunicationsOnlineMeetingConversationsMessagesGetReplyTo(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.GetReplyTo">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.GetReplyTo"]>;
  CommunicationsOnlineMeetingConversationsMessagesGetCount6781(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.GetCount-6781">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.messages.GetCount-6781"]>;
  CommunicationsOnlineMeetingConversationsGetOnlineMeeting(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.GetOnlineMeeting">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.GetOnlineMeeting"]>;
  CommunicationsOnlineMeetingConversationsGetOnlineMeetingAttendeeReport(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.GetOnlineMeetingAttendeeReport">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.GetOnlineMeetingAttendeeReport"]>;
  CommunicationsOnlineMeetingConversationsUpdateOnlineMeetingAttendeeReport(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.UpdateOnlineMeetingAttendeeReport">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.UpdateOnlineMeetingAttendeeReport"]>;
  CommunicationsOnlineMeetingConversationsDeleteOnlineMeetingAttendeeReport(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.DeleteOnlineMeetingAttendeeReport">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.DeleteOnlineMeetingAttendeeReport"]>;
  CommunicationsOnlineMeetingConversationsGetStarter(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.GetStarter">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.GetStarter"]>;
  CommunicationsOnlineMeetingConversationsUpdateStarter(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.UpdateStarter">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.UpdateStarter"]>;
  CommunicationsOnlineMeetingConversationsDeleteStarter(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.DeleteStarter">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.DeleteStarter"]>;
  CommunicationsOnlineMeetingConversationsStarterGetConversation(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.GetConversation">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.GetConversation"]>;
  CommunicationsOnlineMeetingConversationsStarterListReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.ListReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.ListReactions"]>;
  CommunicationsOnlineMeetingConversationsStarterCreateReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.CreateReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.CreateReactions"]>;
  CommunicationsOnlineMeetingConversationsStarterGetReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.GetReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.GetReactions"]>;
  CommunicationsOnlineMeetingConversationsStarterUpdateReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.UpdateReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.UpdateReactions"]>;
  CommunicationsOnlineMeetingConversationsStarterDeleteReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.DeleteReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.DeleteReactions"]>;
  CommunicationsOnlineMeetingConversationsStarterReactionsGetCount690a(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.reactions.GetCount-690a">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.reactions.GetCount-690a"]>;
  CommunicationsOnlineMeetingConversationsStarterListReplies(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.ListReplies">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.ListReplies"]>;
  CommunicationsOnlineMeetingConversationsStarterCreateReplies(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.CreateReplies">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.CreateReplies"]>;
  CommunicationsOnlineMeetingConversationsStarterGetReplies(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.GetReplies">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.GetReplies"]>;
  CommunicationsOnlineMeetingConversationsStarterUpdateReplies(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.UpdateReplies">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.UpdateReplies"]>;
  CommunicationsOnlineMeetingConversationsStarterDeleteReplies(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.DeleteReplies">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.DeleteReplies"]>;
  CommunicationsOnlineMeetingConversationsStarterRepliesGetConversation(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.GetConversation">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.replies.GetConversation"]>;
  CommunicationsOnlineMeetingConversationsStarterRepliesListReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.ListReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.replies.ListReactions"]>;
  CommunicationsOnlineMeetingConversationsStarterRepliesCreateReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.CreateReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.replies.CreateReactions"]>;
  CommunicationsOnlineMeetingConversationsStarterRepliesGetReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.GetReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.replies.GetReactions"]>;
  CommunicationsOnlineMeetingConversationsStarterRepliesUpdateReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.UpdateReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.replies.UpdateReactions"]>;
  CommunicationsOnlineMeetingConversationsStarterRepliesDeleteReactions(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.DeleteReactions">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.replies.DeleteReactions"]>;
  CommunicationsOnlineMeetingConversationsStarterRepliesReactionsGetCountEde3(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.reactions.GetCount-ede3">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.replies.reactions.GetCount-ede3"]>;
  CommunicationsOnlineMeetingConversationsStarterRepliesGetReplyTo(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.GetReplyTo">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.replies.GetReplyTo"]>;
  CommunicationsOnlineMeetingConversationsStarterRepliesGetCount8c87(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.GetCount-8c87">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.replies.GetCount-8c87"]>;
  CommunicationsOnlineMeetingConversationsStarterGetReplyTo(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.GetReplyTo">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.starter.GetReplyTo"]>;
  CommunicationsOnlineMeetingConversationsGetCount42c0(...args: TeamsGraphOperationArgs<"communications.onlineMeetingConversations.GetCount-42c0">): Promise<TeamsGraphOperationResponseMap["communications.onlineMeetingConversations.GetCount-42c0"]>;
}

export const TeamsGraphCommunicationsOnlineMeetingEngagementConversationGeneratedFunctionNames = [
  "CommunicationsListOnlineMeetingConversations",
  "CommunicationsCreateOnlineMeetingConversations",
  "CommunicationsGetOnlineMeetingConversations",
  "CommunicationsUpdateOnlineMeetingConversations",
  "CommunicationsDeleteOnlineMeetingConversations",
  "CommunicationsOnlineMeetingConversationsListMessages",
  "CommunicationsOnlineMeetingConversationsCreateMessages",
  "CommunicationsOnlineMeetingConversationsGetMessages",
  "CommunicationsOnlineMeetingConversationsUpdateMessages",
  "CommunicationsOnlineMeetingConversationsDeleteMessages",
  "CommunicationsOnlineMeetingConversationsMessagesGetConversation",
  "CommunicationsOnlineMeetingConversationsMessagesListReactions",
  "CommunicationsOnlineMeetingConversationsMessagesCreateReactions",
  "CommunicationsOnlineMeetingConversationsMessagesGetReactions",
  "CommunicationsOnlineMeetingConversationsMessagesUpdateReactions",
  "CommunicationsOnlineMeetingConversationsMessagesDeleteReactions",
  "CommunicationsOnlineMeetingConversationsMessagesReactionsGetCount89b7",
  "CommunicationsOnlineMeetingConversationsMessagesListReplies",
  "CommunicationsOnlineMeetingConversationsMessagesCreateReplies",
  "CommunicationsOnlineMeetingConversationsMessagesGetReplies",
  "CommunicationsOnlineMeetingConversationsMessagesUpdateReplies",
  "CommunicationsOnlineMeetingConversationsMessagesDeleteReplies",
  "CommunicationsOnlineMeetingConversationsMessagesRepliesGetConversation",
  "CommunicationsOnlineMeetingConversationsMessagesRepliesListReactions",
  "CommunicationsOnlineMeetingConversationsMessagesRepliesCreateReactions",
  "CommunicationsOnlineMeetingConversationsMessagesRepliesGetReactions",
  "CommunicationsOnlineMeetingConversationsMessagesRepliesUpdateReactions",
  "CommunicationsOnlineMeetingConversationsMessagesRepliesDeleteReactions",
  "CommunicationsOnlineMeetingConversationsMessagesRepliesReactionsGetCountE8c6",
  "CommunicationsOnlineMeetingConversationsMessagesRepliesGetReplyTo",
  "CommunicationsOnlineMeetingConversationsMessagesRepliesGetCount6213",
  "CommunicationsOnlineMeetingConversationsMessagesGetReplyTo",
  "CommunicationsOnlineMeetingConversationsMessagesGetCount6781",
  "CommunicationsOnlineMeetingConversationsGetOnlineMeeting",
  "CommunicationsOnlineMeetingConversationsGetOnlineMeetingAttendeeReport",
  "CommunicationsOnlineMeetingConversationsUpdateOnlineMeetingAttendeeReport",
  "CommunicationsOnlineMeetingConversationsDeleteOnlineMeetingAttendeeReport",
  "CommunicationsOnlineMeetingConversationsGetStarter",
  "CommunicationsOnlineMeetingConversationsUpdateStarter",
  "CommunicationsOnlineMeetingConversationsDeleteStarter",
  "CommunicationsOnlineMeetingConversationsStarterGetConversation",
  "CommunicationsOnlineMeetingConversationsStarterListReactions",
  "CommunicationsOnlineMeetingConversationsStarterCreateReactions",
  "CommunicationsOnlineMeetingConversationsStarterGetReactions",
  "CommunicationsOnlineMeetingConversationsStarterUpdateReactions",
  "CommunicationsOnlineMeetingConversationsStarterDeleteReactions",
  "CommunicationsOnlineMeetingConversationsStarterReactionsGetCount690a",
  "CommunicationsOnlineMeetingConversationsStarterListReplies",
  "CommunicationsOnlineMeetingConversationsStarterCreateReplies",
  "CommunicationsOnlineMeetingConversationsStarterGetReplies",
  "CommunicationsOnlineMeetingConversationsStarterUpdateReplies",
  "CommunicationsOnlineMeetingConversationsStarterDeleteReplies",
  "CommunicationsOnlineMeetingConversationsStarterRepliesGetConversation",
  "CommunicationsOnlineMeetingConversationsStarterRepliesListReactions",
  "CommunicationsOnlineMeetingConversationsStarterRepliesCreateReactions",
  "CommunicationsOnlineMeetingConversationsStarterRepliesGetReactions",
  "CommunicationsOnlineMeetingConversationsStarterRepliesUpdateReactions",
  "CommunicationsOnlineMeetingConversationsStarterRepliesDeleteReactions",
  "CommunicationsOnlineMeetingConversationsStarterRepliesReactionsGetCountEde3",
  "CommunicationsOnlineMeetingConversationsStarterRepliesGetReplyTo",
  "CommunicationsOnlineMeetingConversationsStarterRepliesGetCount8c87",
  "CommunicationsOnlineMeetingConversationsStarterGetReplyTo",
  "CommunicationsOnlineMeetingConversationsGetCount42c0"
] as const satisfies readonly (keyof TeamsGraphCommunicationsOnlineMeetingEngagementConversationGeneratedClient)[];

export function createTeamsGraphCommunicationsOnlineMeetingEngagementConversationGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphCommunicationsOnlineMeetingEngagementConversationGeneratedClient {
  return {
    CommunicationsListOnlineMeetingConversations: (...args) => callOperation("communications.ListOnlineMeetingConversations", ...(args as TeamsGraphOperationArgs<"communications.ListOnlineMeetingConversations">)),
    CommunicationsCreateOnlineMeetingConversations: (...args) => callOperation("communications.CreateOnlineMeetingConversations", ...(args as TeamsGraphOperationArgs<"communications.CreateOnlineMeetingConversations">)),
    CommunicationsGetOnlineMeetingConversations: (...args) => callOperation("communications.GetOnlineMeetingConversations", ...(args as TeamsGraphOperationArgs<"communications.GetOnlineMeetingConversations">)),
    CommunicationsUpdateOnlineMeetingConversations: (...args) => callOperation("communications.UpdateOnlineMeetingConversations", ...(args as TeamsGraphOperationArgs<"communications.UpdateOnlineMeetingConversations">)),
    CommunicationsDeleteOnlineMeetingConversations: (...args) => callOperation("communications.DeleteOnlineMeetingConversations", ...(args as TeamsGraphOperationArgs<"communications.DeleteOnlineMeetingConversations">)),
    CommunicationsOnlineMeetingConversationsListMessages: (...args) => callOperation("communications.onlineMeetingConversations.ListMessages", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.ListMessages">)),
    CommunicationsOnlineMeetingConversationsCreateMessages: (...args) => callOperation("communications.onlineMeetingConversations.CreateMessages", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.CreateMessages">)),
    CommunicationsOnlineMeetingConversationsGetMessages: (...args) => callOperation("communications.onlineMeetingConversations.GetMessages", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.GetMessages">)),
    CommunicationsOnlineMeetingConversationsUpdateMessages: (...args) => callOperation("communications.onlineMeetingConversations.UpdateMessages", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.UpdateMessages">)),
    CommunicationsOnlineMeetingConversationsDeleteMessages: (...args) => callOperation("communications.onlineMeetingConversations.DeleteMessages", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.DeleteMessages">)),
    CommunicationsOnlineMeetingConversationsMessagesGetConversation: (...args) => callOperation("communications.onlineMeetingConversations.messages.GetConversation", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.GetConversation">)),
    CommunicationsOnlineMeetingConversationsMessagesListReactions: (...args) => callOperation("communications.onlineMeetingConversations.messages.ListReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.ListReactions">)),
    CommunicationsOnlineMeetingConversationsMessagesCreateReactions: (...args) => callOperation("communications.onlineMeetingConversations.messages.CreateReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.CreateReactions">)),
    CommunicationsOnlineMeetingConversationsMessagesGetReactions: (...args) => callOperation("communications.onlineMeetingConversations.messages.GetReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.GetReactions">)),
    CommunicationsOnlineMeetingConversationsMessagesUpdateReactions: (...args) => callOperation("communications.onlineMeetingConversations.messages.UpdateReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.UpdateReactions">)),
    CommunicationsOnlineMeetingConversationsMessagesDeleteReactions: (...args) => callOperation("communications.onlineMeetingConversations.messages.DeleteReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.DeleteReactions">)),
    CommunicationsOnlineMeetingConversationsMessagesReactionsGetCount89b7: (...args) => callOperation("communications.onlineMeetingConversations.messages.reactions.GetCount-89b7", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.reactions.GetCount-89b7">)),
    CommunicationsOnlineMeetingConversationsMessagesListReplies: (...args) => callOperation("communications.onlineMeetingConversations.messages.ListReplies", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.ListReplies">)),
    CommunicationsOnlineMeetingConversationsMessagesCreateReplies: (...args) => callOperation("communications.onlineMeetingConversations.messages.CreateReplies", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.CreateReplies">)),
    CommunicationsOnlineMeetingConversationsMessagesGetReplies: (...args) => callOperation("communications.onlineMeetingConversations.messages.GetReplies", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.GetReplies">)),
    CommunicationsOnlineMeetingConversationsMessagesUpdateReplies: (...args) => callOperation("communications.onlineMeetingConversations.messages.UpdateReplies", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.UpdateReplies">)),
    CommunicationsOnlineMeetingConversationsMessagesDeleteReplies: (...args) => callOperation("communications.onlineMeetingConversations.messages.DeleteReplies", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.DeleteReplies">)),
    CommunicationsOnlineMeetingConversationsMessagesRepliesGetConversation: (...args) => callOperation("communications.onlineMeetingConversations.messages.replies.GetConversation", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.GetConversation">)),
    CommunicationsOnlineMeetingConversationsMessagesRepliesListReactions: (...args) => callOperation("communications.onlineMeetingConversations.messages.replies.ListReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.ListReactions">)),
    CommunicationsOnlineMeetingConversationsMessagesRepliesCreateReactions: (...args) => callOperation("communications.onlineMeetingConversations.messages.replies.CreateReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.CreateReactions">)),
    CommunicationsOnlineMeetingConversationsMessagesRepliesGetReactions: (...args) => callOperation("communications.onlineMeetingConversations.messages.replies.GetReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.GetReactions">)),
    CommunicationsOnlineMeetingConversationsMessagesRepliesUpdateReactions: (...args) => callOperation("communications.onlineMeetingConversations.messages.replies.UpdateReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.UpdateReactions">)),
    CommunicationsOnlineMeetingConversationsMessagesRepliesDeleteReactions: (...args) => callOperation("communications.onlineMeetingConversations.messages.replies.DeleteReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.DeleteReactions">)),
    CommunicationsOnlineMeetingConversationsMessagesRepliesReactionsGetCountE8c6: (...args) => callOperation("communications.onlineMeetingConversations.messages.replies.reactions.GetCount-e8c6", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.reactions.GetCount-e8c6">)),
    CommunicationsOnlineMeetingConversationsMessagesRepliesGetReplyTo: (...args) => callOperation("communications.onlineMeetingConversations.messages.replies.GetReplyTo", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.GetReplyTo">)),
    CommunicationsOnlineMeetingConversationsMessagesRepliesGetCount6213: (...args) => callOperation("communications.onlineMeetingConversations.messages.replies.GetCount-6213", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.replies.GetCount-6213">)),
    CommunicationsOnlineMeetingConversationsMessagesGetReplyTo: (...args) => callOperation("communications.onlineMeetingConversations.messages.GetReplyTo", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.GetReplyTo">)),
    CommunicationsOnlineMeetingConversationsMessagesGetCount6781: (...args) => callOperation("communications.onlineMeetingConversations.messages.GetCount-6781", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.messages.GetCount-6781">)),
    CommunicationsOnlineMeetingConversationsGetOnlineMeeting: (...args) => callOperation("communications.onlineMeetingConversations.GetOnlineMeeting", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.GetOnlineMeeting">)),
    CommunicationsOnlineMeetingConversationsGetOnlineMeetingAttendeeReport: (...args) => callOperation("communications.onlineMeetingConversations.GetOnlineMeetingAttendeeReport", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.GetOnlineMeetingAttendeeReport">)),
    CommunicationsOnlineMeetingConversationsUpdateOnlineMeetingAttendeeReport: (...args) => callOperation("communications.onlineMeetingConversations.UpdateOnlineMeetingAttendeeReport", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.UpdateOnlineMeetingAttendeeReport">)),
    CommunicationsOnlineMeetingConversationsDeleteOnlineMeetingAttendeeReport: (...args) => callOperation("communications.onlineMeetingConversations.DeleteOnlineMeetingAttendeeReport", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.DeleteOnlineMeetingAttendeeReport">)),
    CommunicationsOnlineMeetingConversationsGetStarter: (...args) => callOperation("communications.onlineMeetingConversations.GetStarter", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.GetStarter">)),
    CommunicationsOnlineMeetingConversationsUpdateStarter: (...args) => callOperation("communications.onlineMeetingConversations.UpdateStarter", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.UpdateStarter">)),
    CommunicationsOnlineMeetingConversationsDeleteStarter: (...args) => callOperation("communications.onlineMeetingConversations.DeleteStarter", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.DeleteStarter">)),
    CommunicationsOnlineMeetingConversationsStarterGetConversation: (...args) => callOperation("communications.onlineMeetingConversations.starter.GetConversation", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.GetConversation">)),
    CommunicationsOnlineMeetingConversationsStarterListReactions: (...args) => callOperation("communications.onlineMeetingConversations.starter.ListReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.ListReactions">)),
    CommunicationsOnlineMeetingConversationsStarterCreateReactions: (...args) => callOperation("communications.onlineMeetingConversations.starter.CreateReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.CreateReactions">)),
    CommunicationsOnlineMeetingConversationsStarterGetReactions: (...args) => callOperation("communications.onlineMeetingConversations.starter.GetReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.GetReactions">)),
    CommunicationsOnlineMeetingConversationsStarterUpdateReactions: (...args) => callOperation("communications.onlineMeetingConversations.starter.UpdateReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.UpdateReactions">)),
    CommunicationsOnlineMeetingConversationsStarterDeleteReactions: (...args) => callOperation("communications.onlineMeetingConversations.starter.DeleteReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.DeleteReactions">)),
    CommunicationsOnlineMeetingConversationsStarterReactionsGetCount690a: (...args) => callOperation("communications.onlineMeetingConversations.starter.reactions.GetCount-690a", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.reactions.GetCount-690a">)),
    CommunicationsOnlineMeetingConversationsStarterListReplies: (...args) => callOperation("communications.onlineMeetingConversations.starter.ListReplies", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.ListReplies">)),
    CommunicationsOnlineMeetingConversationsStarterCreateReplies: (...args) => callOperation("communications.onlineMeetingConversations.starter.CreateReplies", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.CreateReplies">)),
    CommunicationsOnlineMeetingConversationsStarterGetReplies: (...args) => callOperation("communications.onlineMeetingConversations.starter.GetReplies", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.GetReplies">)),
    CommunicationsOnlineMeetingConversationsStarterUpdateReplies: (...args) => callOperation("communications.onlineMeetingConversations.starter.UpdateReplies", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.UpdateReplies">)),
    CommunicationsOnlineMeetingConversationsStarterDeleteReplies: (...args) => callOperation("communications.onlineMeetingConversations.starter.DeleteReplies", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.DeleteReplies">)),
    CommunicationsOnlineMeetingConversationsStarterRepliesGetConversation: (...args) => callOperation("communications.onlineMeetingConversations.starter.replies.GetConversation", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.GetConversation">)),
    CommunicationsOnlineMeetingConversationsStarterRepliesListReactions: (...args) => callOperation("communications.onlineMeetingConversations.starter.replies.ListReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.ListReactions">)),
    CommunicationsOnlineMeetingConversationsStarterRepliesCreateReactions: (...args) => callOperation("communications.onlineMeetingConversations.starter.replies.CreateReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.CreateReactions">)),
    CommunicationsOnlineMeetingConversationsStarterRepliesGetReactions: (...args) => callOperation("communications.onlineMeetingConversations.starter.replies.GetReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.GetReactions">)),
    CommunicationsOnlineMeetingConversationsStarterRepliesUpdateReactions: (...args) => callOperation("communications.onlineMeetingConversations.starter.replies.UpdateReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.UpdateReactions">)),
    CommunicationsOnlineMeetingConversationsStarterRepliesDeleteReactions: (...args) => callOperation("communications.onlineMeetingConversations.starter.replies.DeleteReactions", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.DeleteReactions">)),
    CommunicationsOnlineMeetingConversationsStarterRepliesReactionsGetCountEde3: (...args) => callOperation("communications.onlineMeetingConversations.starter.replies.reactions.GetCount-ede3", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.reactions.GetCount-ede3">)),
    CommunicationsOnlineMeetingConversationsStarterRepliesGetReplyTo: (...args) => callOperation("communications.onlineMeetingConversations.starter.replies.GetReplyTo", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.GetReplyTo">)),
    CommunicationsOnlineMeetingConversationsStarterRepliesGetCount8c87: (...args) => callOperation("communications.onlineMeetingConversations.starter.replies.GetCount-8c87", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.replies.GetCount-8c87">)),
    CommunicationsOnlineMeetingConversationsStarterGetReplyTo: (...args) => callOperation("communications.onlineMeetingConversations.starter.GetReplyTo", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.starter.GetReplyTo">)),
    CommunicationsOnlineMeetingConversationsGetCount42c0: (...args) => callOperation("communications.onlineMeetingConversations.GetCount-42c0", ...(args as TeamsGraphOperationArgs<"communications.onlineMeetingConversations.GetCount-42c0">)),
  };
}
