// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiConversations03OperationKeys = [
  "patchConversationsMessageParticipant",
  "patchConversationsMessageParticipantAttributes",
  "patchConversationsMessageParticipantCommunication",
  "patchConversationsMessageParticipantParkingstate",
  "patchConversationsMessagingIntegrationsAppleIntegrationId",
  "patchConversationsMessagingIntegrationsFacebookIntegrationId",
  "patchConversationsMessagingIntegrationsInstagramIntegrationId",
  "patchConversationsMessagingIntegrationsOpenIntegrationId",
  "patchConversationsMessagingIntegrationsTwitterIntegrationId",
  "patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId",
  "patchConversationsMessagingIntegrationsWhatsappIntegrationId",
  "patchConversationsMessagingSetting",
  "patchConversationsMessagingSupportedcontentSupportedContentId",
  "patchConversationsSettings",
  "patchConversationSummaryEngagements",
  "patchConversationSummaryFeedback",
  "patchConversationUtilizationlabel",
  "postConversationAssign",
  "postConversationBarge",
  "postConversationCobrowse",
  "postConversationCommunicationAgentchecklist",
  "postConversationCommunicationAgentchecklistAgentaction",
  "postConversationCommunicationAgentchecklistJobs",
  "postConversationCommunicationAgentchecklistsFinalize",
  "postConversationCommunicationInternalmessages",
  "postConversationDisconnect",
  "postConversationParticipantCallbacks",
  "postConversationParticipantDigits",
  "postConversationParticipantInternalmessagesUsersCommunications",
  "postConversationParticipantReplace",
  "postConversationParticipantReplaceAgent",
  "postConversationParticipantReplaceContactExternal",
  "postConversationParticipantReplaceExternal",
  "postConversationParticipantReplaceQueue",
  "postConversationParticipantSecureivrsessions",
  "postConversationParticipantTransfer",
  "postConversationsCall",
  "postConversationsCallbackParticipantCommunicationWrapup",
  "postConversationsCallbackParticipantReplace",
  "postConversationsCallbacks",
  "postConversationsCallbacksBulkDisconnect",
  "postConversationsCallbacksBulkUpdate",
  "postConversationsCallParticipantBarge",
  "postConversationsCallParticipantCoach",
  "postConversationsCallParticipantCommunicationWrapup",
  "postConversationsCallParticipantConsult",
  "postConversationsCallParticipantConsultAgent",
  "postConversationsCallParticipantConsultContactExternal",
  "postConversationsCallParticipantConsultExternal",
  "postConversationsCallParticipantConsultQueue",
  "postConversationsCallParticipantMonitor",
  "postConversationsCallParticipantReplace",
  "postConversationsCallParticipants",
  "postConversationsCallParticipantSnippetRecord",
  "postConversationsCallParticipantsUserUserId",
  "postConversationsCallParticipantVoiceConsult",
  "postConversationsCalls",
  "postConversationsCallsUserUserId",
  "postConversationsChatCommunicationMessages",
  "postConversationsChatCommunicationTyping",
  "postConversationsChatParticipantCommunicationWrapup",
  "postConversationsChatParticipantReplace",
  "postConversationsChats",
  "postConversationsCobrowsesessionParticipantCommunicationWrapup",
  "postConversationsCobrowsesessionParticipantReplace",
  "postConversationsCustomattributesSchemas",
  "postConversationsCustomattributesSearch",
  "postConversationsEmailInboundmessages",
  "postConversationsEmailMessages",
  "postConversationsEmailMessagesDraftAttachmentsCopy",
  "postConversationsEmailParticipantCommunicationWrapup",
  "postConversationsEmailParticipantReplace",
  "postConversationsEmailReconnect",
  "postConversationsEmails",
  "postConversationsEmailsAgentless",
  "postConversationsFaxes",
  "postConversationsKeyconfigurations",
  "postConversationsKeyconfigurationsValidate",
  "postConversationsMessageCommunicationMessages",
  "postConversationsMessageCommunicationMessagesMedia"
] as const;
export type GenesysCloudFullApiConversations03OperationKey = typeof GenesysCloudFullApiConversations03OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiConversations03OperationPathParamMap {
  "patchConversationsMessageParticipant": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessageParticipantAttributes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessageParticipantCommunication": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessageParticipantParkingstate": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessagingIntegrationsAppleIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessagingIntegrationsFacebookIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessagingIntegrationsInstagramIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessagingIntegrationsOpenIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessagingIntegrationsTwitterIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessagingIntegrationsWhatsappIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessagingSetting": { "messageSettingId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessagingSupportedcontentSupportedContentId": { "supportedContentId": GenesysCloudFullApiPathParamValue };
  "patchConversationsSettings": {};
  "patchConversationSummaryEngagements": { "conversationId": GenesysCloudFullApiPathParamValue; "summaryId": GenesysCloudFullApiPathParamValue };
  "patchConversationSummaryFeedback": { "conversationId": GenesysCloudFullApiPathParamValue; "summaryId": GenesysCloudFullApiPathParamValue };
  "patchConversationUtilizationlabel": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationAssign": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationBarge": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationCobrowse": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationCommunicationAgentchecklist": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue; "agentChecklistId": GenesysCloudFullApiPathParamValue };
  "postConversationCommunicationAgentchecklistAgentaction": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue; "agentChecklistId": GenesysCloudFullApiPathParamValue };
  "postConversationCommunicationAgentchecklistJobs": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue; "agentChecklistId": GenesysCloudFullApiPathParamValue };
  "postConversationCommunicationAgentchecklistsFinalize": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationCommunicationInternalmessages": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationDisconnect": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationParticipantCallbacks": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationParticipantDigits": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationParticipantInternalmessagesUsersCommunications": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationParticipantReplace": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationParticipantReplaceAgent": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationParticipantReplaceContactExternal": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationParticipantReplaceExternal": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationParticipantReplaceQueue": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationParticipantSecureivrsessions": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationParticipantTransfer": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCall": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallbackParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallbackParticipantReplace": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallbacks": {};
  "postConversationsCallbacksBulkDisconnect": {};
  "postConversationsCallbacksBulkUpdate": {};
  "postConversationsCallParticipantBarge": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipantCoach": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipantConsult": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipantConsultAgent": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipantConsultContactExternal": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipantConsultExternal": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipantConsultQueue": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipantMonitor": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipantReplace": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipants": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipantSnippetRecord": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipantsUserUserId": { "conversationId": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue };
  "postConversationsCallParticipantVoiceConsult": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCalls": {};
  "postConversationsCallsUserUserId": { "userId": GenesysCloudFullApiPathParamValue };
  "postConversationsChatCommunicationMessages": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsChatCommunicationTyping": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsChatParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsChatParticipantReplace": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsChats": {};
  "postConversationsCobrowsesessionParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsCobrowsesessionParticipantReplace": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsCustomattributesSchemas": {};
  "postConversationsCustomattributesSearch": {};
  "postConversationsEmailInboundmessages": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationsEmailMessages": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationsEmailMessagesDraftAttachmentsCopy": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationsEmailParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsEmailParticipantReplace": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsEmailReconnect": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationsEmails": {};
  "postConversationsEmailsAgentless": {};
  "postConversationsFaxes": {};
  "postConversationsKeyconfigurations": {};
  "postConversationsKeyconfigurationsValidate": {};
  "postConversationsMessageCommunicationMessages": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsMessageCommunicationMessagesMedia": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiConversations03OperationRequestMap {
  "patchConversationsMessageParticipant": GenesysCloudFullApiOperationInput<"patchConversationsMessageParticipant">;
  "patchConversationsMessageParticipantAttributes": GenesysCloudFullApiOperationInput<"patchConversationsMessageParticipantAttributes">;
  "patchConversationsMessageParticipantCommunication": GenesysCloudFullApiOperationInput<"patchConversationsMessageParticipantCommunication">;
  "patchConversationsMessageParticipantParkingstate": GenesysCloudFullApiOperationInput<"patchConversationsMessageParticipantParkingstate">;
  "patchConversationsMessagingIntegrationsAppleIntegrationId": GenesysCloudFullApiOperationInput<"patchConversationsMessagingIntegrationsAppleIntegrationId">;
  "patchConversationsMessagingIntegrationsFacebookIntegrationId": GenesysCloudFullApiOperationInput<"patchConversationsMessagingIntegrationsFacebookIntegrationId">;
  "patchConversationsMessagingIntegrationsInstagramIntegrationId": GenesysCloudFullApiOperationInput<"patchConversationsMessagingIntegrationsInstagramIntegrationId">;
  "patchConversationsMessagingIntegrationsOpenIntegrationId": GenesysCloudFullApiOperationInput<"patchConversationsMessagingIntegrationsOpenIntegrationId">;
  "patchConversationsMessagingIntegrationsTwitterIntegrationId": GenesysCloudFullApiOperationInput<"patchConversationsMessagingIntegrationsTwitterIntegrationId">;
  "patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId": GenesysCloudFullApiOperationInput<"patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId">;
  "patchConversationsMessagingIntegrationsWhatsappIntegrationId": GenesysCloudFullApiOperationInput<"patchConversationsMessagingIntegrationsWhatsappIntegrationId">;
  "patchConversationsMessagingSetting": GenesysCloudFullApiOperationInput<"patchConversationsMessagingSetting">;
  "patchConversationsMessagingSupportedcontentSupportedContentId": GenesysCloudFullApiOperationInput<"patchConversationsMessagingSupportedcontentSupportedContentId">;
  "patchConversationsSettings": GenesysCloudFullApiOperationInput<"patchConversationsSettings">;
  "patchConversationSummaryEngagements": GenesysCloudFullApiOperationInput<"patchConversationSummaryEngagements">;
  "patchConversationSummaryFeedback": GenesysCloudFullApiOperationInput<"patchConversationSummaryFeedback">;
  "patchConversationUtilizationlabel": GenesysCloudFullApiOperationInput<"patchConversationUtilizationlabel">;
  "postConversationAssign": GenesysCloudFullApiOperationInput<"postConversationAssign">;
  "postConversationBarge": GenesysCloudFullApiOperationInput<"postConversationBarge">;
  "postConversationCobrowse": GenesysCloudFullApiOperationInput<"postConversationCobrowse">;
  "postConversationCommunicationAgentchecklist": GenesysCloudFullApiOperationInput<"postConversationCommunicationAgentchecklist">;
  "postConversationCommunicationAgentchecklistAgentaction": GenesysCloudFullApiOperationInput<"postConversationCommunicationAgentchecklistAgentaction">;
  "postConversationCommunicationAgentchecklistJobs": GenesysCloudFullApiOperationInput<"postConversationCommunicationAgentchecklistJobs">;
  "postConversationCommunicationAgentchecklistsFinalize": GenesysCloudFullApiOperationInput<"postConversationCommunicationAgentchecklistsFinalize">;
  "postConversationCommunicationInternalmessages": GenesysCloudFullApiOperationInput<"postConversationCommunicationInternalmessages">;
  "postConversationDisconnect": GenesysCloudFullApiOperationInput<"postConversationDisconnect">;
  "postConversationParticipantCallbacks": GenesysCloudFullApiOperationInput<"postConversationParticipantCallbacks">;
  "postConversationParticipantDigits": GenesysCloudFullApiOperationInput<"postConversationParticipantDigits">;
  "postConversationParticipantInternalmessagesUsersCommunications": GenesysCloudFullApiOperationInput<"postConversationParticipantInternalmessagesUsersCommunications">;
  "postConversationParticipantReplace": GenesysCloudFullApiOperationInput<"postConversationParticipantReplace">;
  "postConversationParticipantReplaceAgent": GenesysCloudFullApiOperationInput<"postConversationParticipantReplaceAgent">;
  "postConversationParticipantReplaceContactExternal": GenesysCloudFullApiOperationInput<"postConversationParticipantReplaceContactExternal">;
  "postConversationParticipantReplaceExternal": GenesysCloudFullApiOperationInput<"postConversationParticipantReplaceExternal">;
  "postConversationParticipantReplaceQueue": GenesysCloudFullApiOperationInput<"postConversationParticipantReplaceQueue">;
  "postConversationParticipantSecureivrsessions": GenesysCloudFullApiOperationInput<"postConversationParticipantSecureivrsessions">;
  "postConversationParticipantTransfer": GenesysCloudFullApiOperationInput<"postConversationParticipantTransfer">;
  "postConversationsCall": GenesysCloudFullApiOperationInput<"postConversationsCall">;
  "postConversationsCallbackParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"postConversationsCallbackParticipantCommunicationWrapup">;
  "postConversationsCallbackParticipantReplace": GenesysCloudFullApiOperationInput<"postConversationsCallbackParticipantReplace">;
  "postConversationsCallbacks": GenesysCloudFullApiOperationInput<"postConversationsCallbacks">;
  "postConversationsCallbacksBulkDisconnect": GenesysCloudFullApiOperationInput<"postConversationsCallbacksBulkDisconnect">;
  "postConversationsCallbacksBulkUpdate": GenesysCloudFullApiOperationInput<"postConversationsCallbacksBulkUpdate">;
  "postConversationsCallParticipantBarge": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantBarge">;
  "postConversationsCallParticipantCoach": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantCoach">;
  "postConversationsCallParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantCommunicationWrapup">;
  "postConversationsCallParticipantConsult": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantConsult">;
  "postConversationsCallParticipantConsultAgent": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantConsultAgent">;
  "postConversationsCallParticipantConsultContactExternal": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantConsultContactExternal">;
  "postConversationsCallParticipantConsultExternal": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantConsultExternal">;
  "postConversationsCallParticipantConsultQueue": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantConsultQueue">;
  "postConversationsCallParticipantMonitor": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantMonitor">;
  "postConversationsCallParticipantReplace": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantReplace">;
  "postConversationsCallParticipants": GenesysCloudFullApiOperationInput<"postConversationsCallParticipants">;
  "postConversationsCallParticipantSnippetRecord": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantSnippetRecord">;
  "postConversationsCallParticipantsUserUserId": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantsUserUserId">;
  "postConversationsCallParticipantVoiceConsult": GenesysCloudFullApiOperationInput<"postConversationsCallParticipantVoiceConsult">;
  "postConversationsCalls": GenesysCloudFullApiOperationInput<"postConversationsCalls">;
  "postConversationsCallsUserUserId": GenesysCloudFullApiOperationInput<"postConversationsCallsUserUserId">;
  "postConversationsChatCommunicationMessages": GenesysCloudFullApiOperationInput<"postConversationsChatCommunicationMessages">;
  "postConversationsChatCommunicationTyping": GenesysCloudFullApiOperationInput<"postConversationsChatCommunicationTyping">;
  "postConversationsChatParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"postConversationsChatParticipantCommunicationWrapup">;
  "postConversationsChatParticipantReplace": GenesysCloudFullApiOperationInput<"postConversationsChatParticipantReplace">;
  "postConversationsChats": GenesysCloudFullApiOperationInput<"postConversationsChats">;
  "postConversationsCobrowsesessionParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"postConversationsCobrowsesessionParticipantCommunicationWrapup">;
  "postConversationsCobrowsesessionParticipantReplace": GenesysCloudFullApiOperationInput<"postConversationsCobrowsesessionParticipantReplace">;
  "postConversationsCustomattributesSchemas": GenesysCloudFullApiOperationInput<"postConversationsCustomattributesSchemas">;
  "postConversationsCustomattributesSearch": GenesysCloudFullApiOperationInput<"postConversationsCustomattributesSearch">;
  "postConversationsEmailInboundmessages": GenesysCloudFullApiOperationInput<"postConversationsEmailInboundmessages">;
  "postConversationsEmailMessages": GenesysCloudFullApiOperationInput<"postConversationsEmailMessages">;
  "postConversationsEmailMessagesDraftAttachmentsCopy": GenesysCloudFullApiOperationInput<"postConversationsEmailMessagesDraftAttachmentsCopy">;
  "postConversationsEmailParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"postConversationsEmailParticipantCommunicationWrapup">;
  "postConversationsEmailParticipantReplace": GenesysCloudFullApiOperationInput<"postConversationsEmailParticipantReplace">;
  "postConversationsEmailReconnect": GenesysCloudFullApiOperationInput<"postConversationsEmailReconnect">;
  "postConversationsEmails": GenesysCloudFullApiOperationInput<"postConversationsEmails">;
  "postConversationsEmailsAgentless": GenesysCloudFullApiOperationInput<"postConversationsEmailsAgentless">;
  "postConversationsFaxes": GenesysCloudFullApiOperationInput<"postConversationsFaxes">;
  "postConversationsKeyconfigurations": GenesysCloudFullApiOperationInput<"postConversationsKeyconfigurations">;
  "postConversationsKeyconfigurationsValidate": GenesysCloudFullApiOperationInput<"postConversationsKeyconfigurationsValidate">;
  "postConversationsMessageCommunicationMessages": GenesysCloudFullApiOperationInput<"postConversationsMessageCommunicationMessages">;
  "postConversationsMessageCommunicationMessagesMedia": GenesysCloudFullApiOperationInput<"postConversationsMessageCommunicationMessagesMedia">;
}

export interface GenesysCloudFullApiConversations03GeneratedClient {
  PatchConversationsMessageParticipant(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessageParticipant">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessageParticipant"]>;
  PatchConversationsMessageParticipantAttributes(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessageParticipantAttributes">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessageParticipantAttributes"]>;
  PatchConversationsMessageParticipantCommunication(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessageParticipantCommunication">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessageParticipantCommunication"]>;
  PatchConversationsMessageParticipantParkingstate(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessageParticipantParkingstate">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessageParticipantParkingstate"]>;
  PatchConversationsMessagingIntegrationsAppleIntegrationId(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsAppleIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessagingIntegrationsAppleIntegrationId"]>;
  PatchConversationsMessagingIntegrationsFacebookIntegrationId(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsFacebookIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessagingIntegrationsFacebookIntegrationId"]>;
  PatchConversationsMessagingIntegrationsInstagramIntegrationId(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsInstagramIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessagingIntegrationsInstagramIntegrationId"]>;
  PatchConversationsMessagingIntegrationsOpenIntegrationId(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsOpenIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessagingIntegrationsOpenIntegrationId"]>;
  PatchConversationsMessagingIntegrationsTwitterIntegrationId(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsTwitterIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessagingIntegrationsTwitterIntegrationId"]>;
  PatchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId"]>;
  PatchConversationsMessagingIntegrationsWhatsappIntegrationId(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsWhatsappIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessagingIntegrationsWhatsappIntegrationId"]>;
  PatchConversationsMessagingSetting(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessagingSetting">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessagingSetting"]>;
  PatchConversationsMessagingSupportedcontentSupportedContentId(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessagingSupportedcontentSupportedContentId">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessagingSupportedcontentSupportedContentId"]>;
  PatchConversationsSettings(...args: GenesysCloudFullApiOperationArgs<"patchConversationsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsSettings"]>;
  PatchConversationSummaryEngagements(...args: GenesysCloudFullApiOperationArgs<"patchConversationSummaryEngagements">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationSummaryEngagements"]>;
  PatchConversationSummaryFeedback(...args: GenesysCloudFullApiOperationArgs<"patchConversationSummaryFeedback">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationSummaryFeedback"]>;
  PatchConversationUtilizationlabel(...args: GenesysCloudFullApiOperationArgs<"patchConversationUtilizationlabel">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationUtilizationlabel"]>;
  PostConversationAssign(...args: GenesysCloudFullApiOperationArgs<"postConversationAssign">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationAssign"]>;
  PostConversationBarge(...args: GenesysCloudFullApiOperationArgs<"postConversationBarge">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationBarge"]>;
  PostConversationCobrowse(...args: GenesysCloudFullApiOperationArgs<"postConversationCobrowse">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationCobrowse"]>;
  PostConversationCommunicationAgentchecklist(...args: GenesysCloudFullApiOperationArgs<"postConversationCommunicationAgentchecklist">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationCommunicationAgentchecklist"]>;
  PostConversationCommunicationAgentchecklistAgentaction(...args: GenesysCloudFullApiOperationArgs<"postConversationCommunicationAgentchecklistAgentaction">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationCommunicationAgentchecklistAgentaction"]>;
  PostConversationCommunicationAgentchecklistJobs(...args: GenesysCloudFullApiOperationArgs<"postConversationCommunicationAgentchecklistJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationCommunicationAgentchecklistJobs"]>;
  PostConversationCommunicationAgentchecklistsFinalize(...args: GenesysCloudFullApiOperationArgs<"postConversationCommunicationAgentchecklistsFinalize">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationCommunicationAgentchecklistsFinalize"]>;
  PostConversationCommunicationInternalmessages(...args: GenesysCloudFullApiOperationArgs<"postConversationCommunicationInternalmessages">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationCommunicationInternalmessages"]>;
  PostConversationDisconnect(...args: GenesysCloudFullApiOperationArgs<"postConversationDisconnect">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationDisconnect"]>;
  PostConversationParticipantCallbacks(...args: GenesysCloudFullApiOperationArgs<"postConversationParticipantCallbacks">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationParticipantCallbacks"]>;
  PostConversationParticipantDigits(...args: GenesysCloudFullApiOperationArgs<"postConversationParticipantDigits">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationParticipantDigits"]>;
  PostConversationParticipantInternalmessagesUsersCommunications(...args: GenesysCloudFullApiOperationArgs<"postConversationParticipantInternalmessagesUsersCommunications">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationParticipantInternalmessagesUsersCommunications"]>;
  PostConversationParticipantReplace(...args: GenesysCloudFullApiOperationArgs<"postConversationParticipantReplace">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationParticipantReplace"]>;
  PostConversationParticipantReplaceAgent(...args: GenesysCloudFullApiOperationArgs<"postConversationParticipantReplaceAgent">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationParticipantReplaceAgent"]>;
  PostConversationParticipantReplaceContactExternal(...args: GenesysCloudFullApiOperationArgs<"postConversationParticipantReplaceContactExternal">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationParticipantReplaceContactExternal"]>;
  PostConversationParticipantReplaceExternal(...args: GenesysCloudFullApiOperationArgs<"postConversationParticipantReplaceExternal">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationParticipantReplaceExternal"]>;
  PostConversationParticipantReplaceQueue(...args: GenesysCloudFullApiOperationArgs<"postConversationParticipantReplaceQueue">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationParticipantReplaceQueue"]>;
  PostConversationParticipantSecureivrsessions(...args: GenesysCloudFullApiOperationArgs<"postConversationParticipantSecureivrsessions">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationParticipantSecureivrsessions"]>;
  PostConversationParticipantTransfer(...args: GenesysCloudFullApiOperationArgs<"postConversationParticipantTransfer">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationParticipantTransfer"]>;
  PostConversationsCall(...args: GenesysCloudFullApiOperationArgs<"postConversationsCall">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCall"]>;
  PostConversationsCallbackParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallbackParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallbackParticipantCommunicationWrapup"]>;
  PostConversationsCallbackParticipantReplace(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallbackParticipantReplace">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallbackParticipantReplace"]>;
  PostConversationsCallbacks(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallbacks">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallbacks"]>;
  PostConversationsCallbacksBulkDisconnect(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallbacksBulkDisconnect">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallbacksBulkDisconnect"]>;
  PostConversationsCallbacksBulkUpdate(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallbacksBulkUpdate">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallbacksBulkUpdate"]>;
  PostConversationsCallParticipantBarge(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantBarge">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantBarge"]>;
  PostConversationsCallParticipantCoach(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantCoach">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantCoach"]>;
  PostConversationsCallParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantCommunicationWrapup"]>;
  PostConversationsCallParticipantConsult(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantConsult">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantConsult"]>;
  PostConversationsCallParticipantConsultAgent(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantConsultAgent">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantConsultAgent"]>;
  PostConversationsCallParticipantConsultContactExternal(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantConsultContactExternal">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantConsultContactExternal"]>;
  PostConversationsCallParticipantConsultExternal(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantConsultExternal">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantConsultExternal"]>;
  PostConversationsCallParticipantConsultQueue(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantConsultQueue">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantConsultQueue"]>;
  PostConversationsCallParticipantMonitor(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantMonitor">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantMonitor"]>;
  PostConversationsCallParticipantReplace(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantReplace">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantReplace"]>;
  PostConversationsCallParticipants(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipants">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipants"]>;
  PostConversationsCallParticipantSnippetRecord(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantSnippetRecord">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantSnippetRecord"]>;
  PostConversationsCallParticipantsUserUserId(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantsUserUserId">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantsUserUserId"]>;
  PostConversationsCallParticipantVoiceConsult(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantVoiceConsult">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallParticipantVoiceConsult"]>;
  PostConversationsCalls(...args: GenesysCloudFullApiOperationArgs<"postConversationsCalls">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCalls"]>;
  PostConversationsCallsUserUserId(...args: GenesysCloudFullApiOperationArgs<"postConversationsCallsUserUserId">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCallsUserUserId"]>;
  PostConversationsChatCommunicationMessages(...args: GenesysCloudFullApiOperationArgs<"postConversationsChatCommunicationMessages">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsChatCommunicationMessages"]>;
  PostConversationsChatCommunicationTyping(...args: GenesysCloudFullApiOperationArgs<"postConversationsChatCommunicationTyping">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsChatCommunicationTyping"]>;
  PostConversationsChatParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"postConversationsChatParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsChatParticipantCommunicationWrapup"]>;
  PostConversationsChatParticipantReplace(...args: GenesysCloudFullApiOperationArgs<"postConversationsChatParticipantReplace">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsChatParticipantReplace"]>;
  PostConversationsChats(...args: GenesysCloudFullApiOperationArgs<"postConversationsChats">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsChats"]>;
  PostConversationsCobrowsesessionParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"postConversationsCobrowsesessionParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCobrowsesessionParticipantCommunicationWrapup"]>;
  PostConversationsCobrowsesessionParticipantReplace(...args: GenesysCloudFullApiOperationArgs<"postConversationsCobrowsesessionParticipantReplace">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCobrowsesessionParticipantReplace"]>;
  PostConversationsCustomattributesSchemas(...args: GenesysCloudFullApiOperationArgs<"postConversationsCustomattributesSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCustomattributesSchemas"]>;
  PostConversationsCustomattributesSearch(...args: GenesysCloudFullApiOperationArgs<"postConversationsCustomattributesSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsCustomattributesSearch"]>;
  PostConversationsEmailInboundmessages(...args: GenesysCloudFullApiOperationArgs<"postConversationsEmailInboundmessages">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsEmailInboundmessages"]>;
  PostConversationsEmailMessages(...args: GenesysCloudFullApiOperationArgs<"postConversationsEmailMessages">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsEmailMessages"]>;
  PostConversationsEmailMessagesDraftAttachmentsCopy(...args: GenesysCloudFullApiOperationArgs<"postConversationsEmailMessagesDraftAttachmentsCopy">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsEmailMessagesDraftAttachmentsCopy"]>;
  PostConversationsEmailParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"postConversationsEmailParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsEmailParticipantCommunicationWrapup"]>;
  PostConversationsEmailParticipantReplace(...args: GenesysCloudFullApiOperationArgs<"postConversationsEmailParticipantReplace">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsEmailParticipantReplace"]>;
  PostConversationsEmailReconnect(...args: GenesysCloudFullApiOperationArgs<"postConversationsEmailReconnect">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsEmailReconnect"]>;
  PostConversationsEmails(...args: GenesysCloudFullApiOperationArgs<"postConversationsEmails">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsEmails"]>;
  PostConversationsEmailsAgentless(...args: GenesysCloudFullApiOperationArgs<"postConversationsEmailsAgentless">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsEmailsAgentless"]>;
  PostConversationsFaxes(...args: GenesysCloudFullApiOperationArgs<"postConversationsFaxes">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsFaxes"]>;
  PostConversationsKeyconfigurations(...args: GenesysCloudFullApiOperationArgs<"postConversationsKeyconfigurations">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsKeyconfigurations"]>;
  PostConversationsKeyconfigurationsValidate(...args: GenesysCloudFullApiOperationArgs<"postConversationsKeyconfigurationsValidate">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsKeyconfigurationsValidate"]>;
  PostConversationsMessageCommunicationMessages(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageCommunicationMessages">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageCommunicationMessages"]>;
  PostConversationsMessageCommunicationMessagesMedia(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageCommunicationMessagesMedia">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageCommunicationMessagesMedia"]>;
}

export const GenesysCloudFullApiConversations03GeneratedFunctionNames = [
  "PatchConversationsMessageParticipant",
  "PatchConversationsMessageParticipantAttributes",
  "PatchConversationsMessageParticipantCommunication",
  "PatchConversationsMessageParticipantParkingstate",
  "PatchConversationsMessagingIntegrationsAppleIntegrationId",
  "PatchConversationsMessagingIntegrationsFacebookIntegrationId",
  "PatchConversationsMessagingIntegrationsInstagramIntegrationId",
  "PatchConversationsMessagingIntegrationsOpenIntegrationId",
  "PatchConversationsMessagingIntegrationsTwitterIntegrationId",
  "PatchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId",
  "PatchConversationsMessagingIntegrationsWhatsappIntegrationId",
  "PatchConversationsMessagingSetting",
  "PatchConversationsMessagingSupportedcontentSupportedContentId",
  "PatchConversationsSettings",
  "PatchConversationSummaryEngagements",
  "PatchConversationSummaryFeedback",
  "PatchConversationUtilizationlabel",
  "PostConversationAssign",
  "PostConversationBarge",
  "PostConversationCobrowse",
  "PostConversationCommunicationAgentchecklist",
  "PostConversationCommunicationAgentchecklistAgentaction",
  "PostConversationCommunicationAgentchecklistJobs",
  "PostConversationCommunicationAgentchecklistsFinalize",
  "PostConversationCommunicationInternalmessages",
  "PostConversationDisconnect",
  "PostConversationParticipantCallbacks",
  "PostConversationParticipantDigits",
  "PostConversationParticipantInternalmessagesUsersCommunications",
  "PostConversationParticipantReplace",
  "PostConversationParticipantReplaceAgent",
  "PostConversationParticipantReplaceContactExternal",
  "PostConversationParticipantReplaceExternal",
  "PostConversationParticipantReplaceQueue",
  "PostConversationParticipantSecureivrsessions",
  "PostConversationParticipantTransfer",
  "PostConversationsCall",
  "PostConversationsCallbackParticipantCommunicationWrapup",
  "PostConversationsCallbackParticipantReplace",
  "PostConversationsCallbacks",
  "PostConversationsCallbacksBulkDisconnect",
  "PostConversationsCallbacksBulkUpdate",
  "PostConversationsCallParticipantBarge",
  "PostConversationsCallParticipantCoach",
  "PostConversationsCallParticipantCommunicationWrapup",
  "PostConversationsCallParticipantConsult",
  "PostConversationsCallParticipantConsultAgent",
  "PostConversationsCallParticipantConsultContactExternal",
  "PostConversationsCallParticipantConsultExternal",
  "PostConversationsCallParticipantConsultQueue",
  "PostConversationsCallParticipantMonitor",
  "PostConversationsCallParticipantReplace",
  "PostConversationsCallParticipants",
  "PostConversationsCallParticipantSnippetRecord",
  "PostConversationsCallParticipantsUserUserId",
  "PostConversationsCallParticipantVoiceConsult",
  "PostConversationsCalls",
  "PostConversationsCallsUserUserId",
  "PostConversationsChatCommunicationMessages",
  "PostConversationsChatCommunicationTyping",
  "PostConversationsChatParticipantCommunicationWrapup",
  "PostConversationsChatParticipantReplace",
  "PostConversationsChats",
  "PostConversationsCobrowsesessionParticipantCommunicationWrapup",
  "PostConversationsCobrowsesessionParticipantReplace",
  "PostConversationsCustomattributesSchemas",
  "PostConversationsCustomattributesSearch",
  "PostConversationsEmailInboundmessages",
  "PostConversationsEmailMessages",
  "PostConversationsEmailMessagesDraftAttachmentsCopy",
  "PostConversationsEmailParticipantCommunicationWrapup",
  "PostConversationsEmailParticipantReplace",
  "PostConversationsEmailReconnect",
  "PostConversationsEmails",
  "PostConversationsEmailsAgentless",
  "PostConversationsFaxes",
  "PostConversationsKeyconfigurations",
  "PostConversationsKeyconfigurationsValidate",
  "PostConversationsMessageCommunicationMessages",
  "PostConversationsMessageCommunicationMessagesMedia"
] as const satisfies readonly (keyof GenesysCloudFullApiConversations03GeneratedClient)[];

export function createGenesysCloudFullApiConversations03GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiConversations03GeneratedClient {
  return {
    PatchConversationsMessageParticipant: (...args) => callOperation("patchConversationsMessageParticipant", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessageParticipant">)),
    PatchConversationsMessageParticipantAttributes: (...args) => callOperation("patchConversationsMessageParticipantAttributes", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessageParticipantAttributes">)),
    PatchConversationsMessageParticipantCommunication: (...args) => callOperation("patchConversationsMessageParticipantCommunication", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessageParticipantCommunication">)),
    PatchConversationsMessageParticipantParkingstate: (...args) => callOperation("patchConversationsMessageParticipantParkingstate", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessageParticipantParkingstate">)),
    PatchConversationsMessagingIntegrationsAppleIntegrationId: (...args) => callOperation("patchConversationsMessagingIntegrationsAppleIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsAppleIntegrationId">)),
    PatchConversationsMessagingIntegrationsFacebookIntegrationId: (...args) => callOperation("patchConversationsMessagingIntegrationsFacebookIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsFacebookIntegrationId">)),
    PatchConversationsMessagingIntegrationsInstagramIntegrationId: (...args) => callOperation("patchConversationsMessagingIntegrationsInstagramIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsInstagramIntegrationId">)),
    PatchConversationsMessagingIntegrationsOpenIntegrationId: (...args) => callOperation("patchConversationsMessagingIntegrationsOpenIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsOpenIntegrationId">)),
    PatchConversationsMessagingIntegrationsTwitterIntegrationId: (...args) => callOperation("patchConversationsMessagingIntegrationsTwitterIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsTwitterIntegrationId">)),
    PatchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId: (...args) => callOperation("patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsWhatsappEmbeddedsignupIntegrationId">)),
    PatchConversationsMessagingIntegrationsWhatsappIntegrationId: (...args) => callOperation("patchConversationsMessagingIntegrationsWhatsappIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessagingIntegrationsWhatsappIntegrationId">)),
    PatchConversationsMessagingSetting: (...args) => callOperation("patchConversationsMessagingSetting", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessagingSetting">)),
    PatchConversationsMessagingSupportedcontentSupportedContentId: (...args) => callOperation("patchConversationsMessagingSupportedcontentSupportedContentId", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessagingSupportedcontentSupportedContentId">)),
    PatchConversationsSettings: (...args) => callOperation("patchConversationsSettings", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsSettings">)),
    PatchConversationSummaryEngagements: (...args) => callOperation("patchConversationSummaryEngagements", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationSummaryEngagements">)),
    PatchConversationSummaryFeedback: (...args) => callOperation("patchConversationSummaryFeedback", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationSummaryFeedback">)),
    PatchConversationUtilizationlabel: (...args) => callOperation("patchConversationUtilizationlabel", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationUtilizationlabel">)),
    PostConversationAssign: (...args) => callOperation("postConversationAssign", ...(args as GenesysCloudFullApiOperationArgs<"postConversationAssign">)),
    PostConversationBarge: (...args) => callOperation("postConversationBarge", ...(args as GenesysCloudFullApiOperationArgs<"postConversationBarge">)),
    PostConversationCobrowse: (...args) => callOperation("postConversationCobrowse", ...(args as GenesysCloudFullApiOperationArgs<"postConversationCobrowse">)),
    PostConversationCommunicationAgentchecklist: (...args) => callOperation("postConversationCommunicationAgentchecklist", ...(args as GenesysCloudFullApiOperationArgs<"postConversationCommunicationAgentchecklist">)),
    PostConversationCommunicationAgentchecklistAgentaction: (...args) => callOperation("postConversationCommunicationAgentchecklistAgentaction", ...(args as GenesysCloudFullApiOperationArgs<"postConversationCommunicationAgentchecklistAgentaction">)),
    PostConversationCommunicationAgentchecklistJobs: (...args) => callOperation("postConversationCommunicationAgentchecklistJobs", ...(args as GenesysCloudFullApiOperationArgs<"postConversationCommunicationAgentchecklistJobs">)),
    PostConversationCommunicationAgentchecklistsFinalize: (...args) => callOperation("postConversationCommunicationAgentchecklistsFinalize", ...(args as GenesysCloudFullApiOperationArgs<"postConversationCommunicationAgentchecklistsFinalize">)),
    PostConversationCommunicationInternalmessages: (...args) => callOperation("postConversationCommunicationInternalmessages", ...(args as GenesysCloudFullApiOperationArgs<"postConversationCommunicationInternalmessages">)),
    PostConversationDisconnect: (...args) => callOperation("postConversationDisconnect", ...(args as GenesysCloudFullApiOperationArgs<"postConversationDisconnect">)),
    PostConversationParticipantCallbacks: (...args) => callOperation("postConversationParticipantCallbacks", ...(args as GenesysCloudFullApiOperationArgs<"postConversationParticipantCallbacks">)),
    PostConversationParticipantDigits: (...args) => callOperation("postConversationParticipantDigits", ...(args as GenesysCloudFullApiOperationArgs<"postConversationParticipantDigits">)),
    PostConversationParticipantInternalmessagesUsersCommunications: (...args) => callOperation("postConversationParticipantInternalmessagesUsersCommunications", ...(args as GenesysCloudFullApiOperationArgs<"postConversationParticipantInternalmessagesUsersCommunications">)),
    PostConversationParticipantReplace: (...args) => callOperation("postConversationParticipantReplace", ...(args as GenesysCloudFullApiOperationArgs<"postConversationParticipantReplace">)),
    PostConversationParticipantReplaceAgent: (...args) => callOperation("postConversationParticipantReplaceAgent", ...(args as GenesysCloudFullApiOperationArgs<"postConversationParticipantReplaceAgent">)),
    PostConversationParticipantReplaceContactExternal: (...args) => callOperation("postConversationParticipantReplaceContactExternal", ...(args as GenesysCloudFullApiOperationArgs<"postConversationParticipantReplaceContactExternal">)),
    PostConversationParticipantReplaceExternal: (...args) => callOperation("postConversationParticipantReplaceExternal", ...(args as GenesysCloudFullApiOperationArgs<"postConversationParticipantReplaceExternal">)),
    PostConversationParticipantReplaceQueue: (...args) => callOperation("postConversationParticipantReplaceQueue", ...(args as GenesysCloudFullApiOperationArgs<"postConversationParticipantReplaceQueue">)),
    PostConversationParticipantSecureivrsessions: (...args) => callOperation("postConversationParticipantSecureivrsessions", ...(args as GenesysCloudFullApiOperationArgs<"postConversationParticipantSecureivrsessions">)),
    PostConversationParticipantTransfer: (...args) => callOperation("postConversationParticipantTransfer", ...(args as GenesysCloudFullApiOperationArgs<"postConversationParticipantTransfer">)),
    PostConversationsCall: (...args) => callOperation("postConversationsCall", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCall">)),
    PostConversationsCallbackParticipantCommunicationWrapup: (...args) => callOperation("postConversationsCallbackParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallbackParticipantCommunicationWrapup">)),
    PostConversationsCallbackParticipantReplace: (...args) => callOperation("postConversationsCallbackParticipantReplace", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallbackParticipantReplace">)),
    PostConversationsCallbacks: (...args) => callOperation("postConversationsCallbacks", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallbacks">)),
    PostConversationsCallbacksBulkDisconnect: (...args) => callOperation("postConversationsCallbacksBulkDisconnect", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallbacksBulkDisconnect">)),
    PostConversationsCallbacksBulkUpdate: (...args) => callOperation("postConversationsCallbacksBulkUpdate", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallbacksBulkUpdate">)),
    PostConversationsCallParticipantBarge: (...args) => callOperation("postConversationsCallParticipantBarge", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantBarge">)),
    PostConversationsCallParticipantCoach: (...args) => callOperation("postConversationsCallParticipantCoach", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantCoach">)),
    PostConversationsCallParticipantCommunicationWrapup: (...args) => callOperation("postConversationsCallParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantCommunicationWrapup">)),
    PostConversationsCallParticipantConsult: (...args) => callOperation("postConversationsCallParticipantConsult", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantConsult">)),
    PostConversationsCallParticipantConsultAgent: (...args) => callOperation("postConversationsCallParticipantConsultAgent", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantConsultAgent">)),
    PostConversationsCallParticipantConsultContactExternal: (...args) => callOperation("postConversationsCallParticipantConsultContactExternal", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantConsultContactExternal">)),
    PostConversationsCallParticipantConsultExternal: (...args) => callOperation("postConversationsCallParticipantConsultExternal", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantConsultExternal">)),
    PostConversationsCallParticipantConsultQueue: (...args) => callOperation("postConversationsCallParticipantConsultQueue", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantConsultQueue">)),
    PostConversationsCallParticipantMonitor: (...args) => callOperation("postConversationsCallParticipantMonitor", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantMonitor">)),
    PostConversationsCallParticipantReplace: (...args) => callOperation("postConversationsCallParticipantReplace", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantReplace">)),
    PostConversationsCallParticipants: (...args) => callOperation("postConversationsCallParticipants", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipants">)),
    PostConversationsCallParticipantSnippetRecord: (...args) => callOperation("postConversationsCallParticipantSnippetRecord", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantSnippetRecord">)),
    PostConversationsCallParticipantsUserUserId: (...args) => callOperation("postConversationsCallParticipantsUserUserId", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantsUserUserId">)),
    PostConversationsCallParticipantVoiceConsult: (...args) => callOperation("postConversationsCallParticipantVoiceConsult", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallParticipantVoiceConsult">)),
    PostConversationsCalls: (...args) => callOperation("postConversationsCalls", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCalls">)),
    PostConversationsCallsUserUserId: (...args) => callOperation("postConversationsCallsUserUserId", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCallsUserUserId">)),
    PostConversationsChatCommunicationMessages: (...args) => callOperation("postConversationsChatCommunicationMessages", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsChatCommunicationMessages">)),
    PostConversationsChatCommunicationTyping: (...args) => callOperation("postConversationsChatCommunicationTyping", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsChatCommunicationTyping">)),
    PostConversationsChatParticipantCommunicationWrapup: (...args) => callOperation("postConversationsChatParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsChatParticipantCommunicationWrapup">)),
    PostConversationsChatParticipantReplace: (...args) => callOperation("postConversationsChatParticipantReplace", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsChatParticipantReplace">)),
    PostConversationsChats: (...args) => callOperation("postConversationsChats", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsChats">)),
    PostConversationsCobrowsesessionParticipantCommunicationWrapup: (...args) => callOperation("postConversationsCobrowsesessionParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCobrowsesessionParticipantCommunicationWrapup">)),
    PostConversationsCobrowsesessionParticipantReplace: (...args) => callOperation("postConversationsCobrowsesessionParticipantReplace", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCobrowsesessionParticipantReplace">)),
    PostConversationsCustomattributesSchemas: (...args) => callOperation("postConversationsCustomattributesSchemas", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCustomattributesSchemas">)),
    PostConversationsCustomattributesSearch: (...args) => callOperation("postConversationsCustomattributesSearch", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsCustomattributesSearch">)),
    PostConversationsEmailInboundmessages: (...args) => callOperation("postConversationsEmailInboundmessages", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsEmailInboundmessages">)),
    PostConversationsEmailMessages: (...args) => callOperation("postConversationsEmailMessages", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsEmailMessages">)),
    PostConversationsEmailMessagesDraftAttachmentsCopy: (...args) => callOperation("postConversationsEmailMessagesDraftAttachmentsCopy", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsEmailMessagesDraftAttachmentsCopy">)),
    PostConversationsEmailParticipantCommunicationWrapup: (...args) => callOperation("postConversationsEmailParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsEmailParticipantCommunicationWrapup">)),
    PostConversationsEmailParticipantReplace: (...args) => callOperation("postConversationsEmailParticipantReplace", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsEmailParticipantReplace">)),
    PostConversationsEmailReconnect: (...args) => callOperation("postConversationsEmailReconnect", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsEmailReconnect">)),
    PostConversationsEmails: (...args) => callOperation("postConversationsEmails", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsEmails">)),
    PostConversationsEmailsAgentless: (...args) => callOperation("postConversationsEmailsAgentless", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsEmailsAgentless">)),
    PostConversationsFaxes: (...args) => callOperation("postConversationsFaxes", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsFaxes">)),
    PostConversationsKeyconfigurations: (...args) => callOperation("postConversationsKeyconfigurations", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsKeyconfigurations">)),
    PostConversationsKeyconfigurationsValidate: (...args) => callOperation("postConversationsKeyconfigurationsValidate", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsKeyconfigurationsValidate">)),
    PostConversationsMessageCommunicationMessages: (...args) => callOperation("postConversationsMessageCommunicationMessages", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageCommunicationMessages">)),
    PostConversationsMessageCommunicationMessagesMedia: (...args) => callOperation("postConversationsMessageCommunicationMessagesMedia", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageCommunicationMessagesMedia">)),
  };
}
