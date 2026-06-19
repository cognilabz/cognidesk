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
export const GenesysCloudFullApiConversations04OperationKeys = [
  "postConversationsMessageCommunicationMessagesMediaUploads",
  "postConversationsMessageCommunicationSocialmediaMessages",
  "postConversationsMessageCommunicationTyping",
  "postConversationsMessageInboundOpenEvent",
  "postConversationsMessageInboundOpenMessage",
  "postConversationsMessageInboundOpenReceipt",
  "postConversationsMessageInboundOpenStructuredResponse",
  "postConversationsMessageMessagesBulk",
  "postConversationsMessageParticipantCommunicationWrapup",
  "postConversationsMessageParticipantMonitor",
  "postConversationsMessageParticipantReplace",
  "postConversationsMessages",
  "postConversationsMessagesAgentless",
  "postConversationsMessagesInboundOpen",
  "postConversationsMessagingIntegrationsApple",
  "postConversationsMessagingIntegrationsFacebook",
  "postConversationsMessagingIntegrationsInstagram",
  "postConversationsMessagingIntegrationsOpen",
  "postConversationsMessagingIntegrationsTwitter",
  "postConversationsMessagingIntegrationsWhatsapp",
  "postConversationsMessagingIntegrationsWhatsappEmbeddedsignup",
  "postConversationsMessagingSettings",
  "postConversationsMessagingSupportedcontent",
  "postConversationsParticipantsAttributesSearch",
  "postConversationsScreenshareParticipantCommunicationWrapup",
  "postConversationsSocialParticipantCommunicationWrapup",
  "postConversationSuggestionEngagement",
  "postConversationSuggestionsFeedback",
  "postConversationSummaryFeedback",
  "postConversationsVideoParticipantCommunicationWrapup",
  "postConversationsVideosMeetings",
  "putConversationCustomattributes",
  "putConversationCustomattributesBulk",
  "putConversationParticipantFlaggedreason",
  "putConversationsCallbackRecordingstate",
  "putConversationsCallParticipantCommunicationUuidata",
  "putConversationsCallRecordingstate",
  "putConversationsChatRecordingstate",
  "putConversationsCobrowsesessionRecordingstate",
  "putConversationsCustomattributesSchema",
  "putConversationSecureattributes",
  "putConversationsEmailMessagesDraft",
  "putConversationsEmailRecordingstate",
  "putConversationsKeyconfiguration",
  "putConversationsMessageRecordingstate",
  "putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId",
  "putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId",
  "putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId",
  "putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId",
  "putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId",
  "putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId",
  "putConversationsMessagingSettingsDefault",
  "putConversationsMessagingSupportedcontentDefault",
  "putConversationsMessagingThreadingtimeline",
  "putConversationsScreenshareRecordingstate",
  "putConversationsSocialRecordingstate",
  "putConversationsVideoRecordingstate",
  "putConversationTags"
] as const;
export type GenesysCloudFullApiConversations04OperationKey = typeof GenesysCloudFullApiConversations04OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiConversations04OperationPathParamMap {
  "postConversationsMessageCommunicationMessagesMediaUploads": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsMessageCommunicationSocialmediaMessages": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsMessageCommunicationTyping": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsMessageInboundOpenEvent": { "integrationId": GenesysCloudFullApiPathParamValue };
  "postConversationsMessageInboundOpenMessage": { "integrationId": GenesysCloudFullApiPathParamValue };
  "postConversationsMessageInboundOpenReceipt": { "integrationId": GenesysCloudFullApiPathParamValue };
  "postConversationsMessageInboundOpenStructuredResponse": { "integrationId": GenesysCloudFullApiPathParamValue };
  "postConversationsMessageMessagesBulk": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationsMessageParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsMessageParticipantMonitor": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsMessageParticipantReplace": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "postConversationsMessages": {};
  "postConversationsMessagesAgentless": {};
  "postConversationsMessagesInboundOpen": {};
  "postConversationsMessagingIntegrationsApple": {};
  "postConversationsMessagingIntegrationsFacebook": {};
  "postConversationsMessagingIntegrationsInstagram": {};
  "postConversationsMessagingIntegrationsOpen": {};
  "postConversationsMessagingIntegrationsTwitter": {};
  "postConversationsMessagingIntegrationsWhatsapp": {};
  "postConversationsMessagingIntegrationsWhatsappEmbeddedsignup": {};
  "postConversationsMessagingSettings": {};
  "postConversationsMessagingSupportedcontent": {};
  "postConversationsParticipantsAttributesSearch": {};
  "postConversationsScreenshareParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsSocialParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationSuggestionEngagement": { "conversationId": GenesysCloudFullApiPathParamValue; "suggestionId": GenesysCloudFullApiPathParamValue };
  "postConversationSuggestionsFeedback": { "conversationId": GenesysCloudFullApiPathParamValue };
  "postConversationSummaryFeedback": { "conversationId": GenesysCloudFullApiPathParamValue; "summaryId": GenesysCloudFullApiPathParamValue };
  "postConversationsVideoParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "postConversationsVideosMeetings": {};
  "putConversationCustomattributes": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationCustomattributesBulk": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationParticipantFlaggedreason": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "putConversationsCallbackRecordingstate": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationsCallParticipantCommunicationUuidata": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "putConversationsCallRecordingstate": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationsChatRecordingstate": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationsCobrowsesessionRecordingstate": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationsCustomattributesSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "putConversationSecureattributes": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationsEmailMessagesDraft": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationsEmailRecordingstate": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationsKeyconfiguration": { "keyconfigurationsId": GenesysCloudFullApiPathParamValue };
  "putConversationsMessageRecordingstate": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "putConversationsMessagingSettingsDefault": {};
  "putConversationsMessagingSupportedcontentDefault": {};
  "putConversationsMessagingThreadingtimeline": {};
  "putConversationsScreenshareRecordingstate": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationsSocialRecordingstate": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationsVideoRecordingstate": { "conversationId": GenesysCloudFullApiPathParamValue };
  "putConversationTags": { "conversationId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiConversations04OperationRequestMap {
  "postConversationsMessageCommunicationMessagesMediaUploads": GenesysCloudFullApiOperationInput<"postConversationsMessageCommunicationMessagesMediaUploads">;
  "postConversationsMessageCommunicationSocialmediaMessages": GenesysCloudFullApiOperationInput<"postConversationsMessageCommunicationSocialmediaMessages">;
  "postConversationsMessageCommunicationTyping": GenesysCloudFullApiOperationInput<"postConversationsMessageCommunicationTyping">;
  "postConversationsMessageInboundOpenEvent": GenesysCloudFullApiOperationInput<"postConversationsMessageInboundOpenEvent">;
  "postConversationsMessageInboundOpenMessage": GenesysCloudFullApiOperationInput<"postConversationsMessageInboundOpenMessage">;
  "postConversationsMessageInboundOpenReceipt": GenesysCloudFullApiOperationInput<"postConversationsMessageInboundOpenReceipt">;
  "postConversationsMessageInboundOpenStructuredResponse": GenesysCloudFullApiOperationInput<"postConversationsMessageInboundOpenStructuredResponse">;
  "postConversationsMessageMessagesBulk": GenesysCloudFullApiOperationInput<"postConversationsMessageMessagesBulk">;
  "postConversationsMessageParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"postConversationsMessageParticipantCommunicationWrapup">;
  "postConversationsMessageParticipantMonitor": GenesysCloudFullApiOperationInput<"postConversationsMessageParticipantMonitor">;
  "postConversationsMessageParticipantReplace": GenesysCloudFullApiOperationInput<"postConversationsMessageParticipantReplace">;
  "postConversationsMessages": GenesysCloudFullApiOperationInput<"postConversationsMessages">;
  "postConversationsMessagesAgentless": GenesysCloudFullApiOperationInput<"postConversationsMessagesAgentless">;
  "postConversationsMessagesInboundOpen": GenesysCloudFullApiOperationInput<"postConversationsMessagesInboundOpen">;
  "postConversationsMessagingIntegrationsApple": GenesysCloudFullApiOperationInput<"postConversationsMessagingIntegrationsApple">;
  "postConversationsMessagingIntegrationsFacebook": GenesysCloudFullApiOperationInput<"postConversationsMessagingIntegrationsFacebook">;
  "postConversationsMessagingIntegrationsInstagram": GenesysCloudFullApiOperationInput<"postConversationsMessagingIntegrationsInstagram">;
  "postConversationsMessagingIntegrationsOpen": GenesysCloudFullApiOperationInput<"postConversationsMessagingIntegrationsOpen">;
  "postConversationsMessagingIntegrationsTwitter": GenesysCloudFullApiOperationInput<"postConversationsMessagingIntegrationsTwitter">;
  "postConversationsMessagingIntegrationsWhatsapp": GenesysCloudFullApiOperationInput<"postConversationsMessagingIntegrationsWhatsapp">;
  "postConversationsMessagingIntegrationsWhatsappEmbeddedsignup": GenesysCloudFullApiOperationInput<"postConversationsMessagingIntegrationsWhatsappEmbeddedsignup">;
  "postConversationsMessagingSettings": GenesysCloudFullApiOperationInput<"postConversationsMessagingSettings">;
  "postConversationsMessagingSupportedcontent": GenesysCloudFullApiOperationInput<"postConversationsMessagingSupportedcontent">;
  "postConversationsParticipantsAttributesSearch": GenesysCloudFullApiOperationInput<"postConversationsParticipantsAttributesSearch">;
  "postConversationsScreenshareParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"postConversationsScreenshareParticipantCommunicationWrapup">;
  "postConversationsSocialParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"postConversationsSocialParticipantCommunicationWrapup">;
  "postConversationSuggestionEngagement": GenesysCloudFullApiOperationInput<"postConversationSuggestionEngagement">;
  "postConversationSuggestionsFeedback": GenesysCloudFullApiOperationInput<"postConversationSuggestionsFeedback">;
  "postConversationSummaryFeedback": GenesysCloudFullApiOperationInput<"postConversationSummaryFeedback">;
  "postConversationsVideoParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"postConversationsVideoParticipantCommunicationWrapup">;
  "postConversationsVideosMeetings": GenesysCloudFullApiOperationInput<"postConversationsVideosMeetings">;
  "putConversationCustomattributes": GenesysCloudFullApiOperationInput<"putConversationCustomattributes">;
  "putConversationCustomattributesBulk": GenesysCloudFullApiOperationInput<"putConversationCustomattributesBulk">;
  "putConversationParticipantFlaggedreason": GenesysCloudFullApiOperationInput<"putConversationParticipantFlaggedreason">;
  "putConversationsCallbackRecordingstate": GenesysCloudFullApiOperationInput<"putConversationsCallbackRecordingstate">;
  "putConversationsCallParticipantCommunicationUuidata": GenesysCloudFullApiOperationInput<"putConversationsCallParticipantCommunicationUuidata">;
  "putConversationsCallRecordingstate": GenesysCloudFullApiOperationInput<"putConversationsCallRecordingstate">;
  "putConversationsChatRecordingstate": GenesysCloudFullApiOperationInput<"putConversationsChatRecordingstate">;
  "putConversationsCobrowsesessionRecordingstate": GenesysCloudFullApiOperationInput<"putConversationsCobrowsesessionRecordingstate">;
  "putConversationsCustomattributesSchema": GenesysCloudFullApiOperationInput<"putConversationsCustomattributesSchema">;
  "putConversationSecureattributes": GenesysCloudFullApiOperationInput<"putConversationSecureattributes">;
  "putConversationsEmailMessagesDraft": GenesysCloudFullApiOperationInput<"putConversationsEmailMessagesDraft">;
  "putConversationsEmailRecordingstate": GenesysCloudFullApiOperationInput<"putConversationsEmailRecordingstate">;
  "putConversationsKeyconfiguration": GenesysCloudFullApiOperationInput<"putConversationsKeyconfiguration">;
  "putConversationsMessageRecordingstate": GenesysCloudFullApiOperationInput<"putConversationsMessageRecordingstate">;
  "putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId": GenesysCloudFullApiOperationInput<"putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId">;
  "putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId": GenesysCloudFullApiOperationInput<"putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId">;
  "putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId": GenesysCloudFullApiOperationInput<"putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId">;
  "putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId": GenesysCloudFullApiOperationInput<"putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId">;
  "putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId": GenesysCloudFullApiOperationInput<"putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId">;
  "putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId": GenesysCloudFullApiOperationInput<"putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId">;
  "putConversationsMessagingSettingsDefault": GenesysCloudFullApiOperationInput<"putConversationsMessagingSettingsDefault">;
  "putConversationsMessagingSupportedcontentDefault": GenesysCloudFullApiOperationInput<"putConversationsMessagingSupportedcontentDefault">;
  "putConversationsMessagingThreadingtimeline": GenesysCloudFullApiOperationInput<"putConversationsMessagingThreadingtimeline">;
  "putConversationsScreenshareRecordingstate": GenesysCloudFullApiOperationInput<"putConversationsScreenshareRecordingstate">;
  "putConversationsSocialRecordingstate": GenesysCloudFullApiOperationInput<"putConversationsSocialRecordingstate">;
  "putConversationsVideoRecordingstate": GenesysCloudFullApiOperationInput<"putConversationsVideoRecordingstate">;
  "putConversationTags": GenesysCloudFullApiOperationInput<"putConversationTags">;
}

export interface GenesysCloudFullApiConversations04GeneratedClient {
  PostConversationsMessageCommunicationMessagesMediaUploads(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageCommunicationMessagesMediaUploads">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageCommunicationMessagesMediaUploads"]>;
  PostConversationsMessageCommunicationSocialmediaMessages(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageCommunicationSocialmediaMessages">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageCommunicationSocialmediaMessages"]>;
  PostConversationsMessageCommunicationTyping(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageCommunicationTyping">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageCommunicationTyping"]>;
  PostConversationsMessageInboundOpenEvent(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageInboundOpenEvent">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageInboundOpenEvent"]>;
  PostConversationsMessageInboundOpenMessage(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageInboundOpenMessage">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageInboundOpenMessage"]>;
  PostConversationsMessageInboundOpenReceipt(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageInboundOpenReceipt">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageInboundOpenReceipt"]>;
  PostConversationsMessageInboundOpenStructuredResponse(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageInboundOpenStructuredResponse">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageInboundOpenStructuredResponse"]>;
  PostConversationsMessageMessagesBulk(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageMessagesBulk">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageMessagesBulk"]>;
  PostConversationsMessageParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageParticipantCommunicationWrapup"]>;
  PostConversationsMessageParticipantMonitor(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageParticipantMonitor">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageParticipantMonitor"]>;
  PostConversationsMessageParticipantReplace(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessageParticipantReplace">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessageParticipantReplace"]>;
  PostConversationsMessages(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessages">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessages"]>;
  PostConversationsMessagesAgentless(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessagesAgentless">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessagesAgentless"]>;
  PostConversationsMessagesInboundOpen(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessagesInboundOpen">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessagesInboundOpen"]>;
  PostConversationsMessagingIntegrationsApple(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsApple">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessagingIntegrationsApple"]>;
  PostConversationsMessagingIntegrationsFacebook(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsFacebook">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessagingIntegrationsFacebook"]>;
  PostConversationsMessagingIntegrationsInstagram(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsInstagram">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessagingIntegrationsInstagram"]>;
  PostConversationsMessagingIntegrationsOpen(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsOpen">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessagingIntegrationsOpen"]>;
  PostConversationsMessagingIntegrationsTwitter(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsTwitter">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessagingIntegrationsTwitter"]>;
  PostConversationsMessagingIntegrationsWhatsapp(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsWhatsapp">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessagingIntegrationsWhatsapp"]>;
  PostConversationsMessagingIntegrationsWhatsappEmbeddedsignup(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsWhatsappEmbeddedsignup">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessagingIntegrationsWhatsappEmbeddedsignup"]>;
  PostConversationsMessagingSettings(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessagingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessagingSettings"]>;
  PostConversationsMessagingSupportedcontent(...args: GenesysCloudFullApiOperationArgs<"postConversationsMessagingSupportedcontent">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsMessagingSupportedcontent"]>;
  PostConversationsParticipantsAttributesSearch(...args: GenesysCloudFullApiOperationArgs<"postConversationsParticipantsAttributesSearch">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsParticipantsAttributesSearch"]>;
  PostConversationsScreenshareParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"postConversationsScreenshareParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsScreenshareParticipantCommunicationWrapup"]>;
  PostConversationsSocialParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"postConversationsSocialParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsSocialParticipantCommunicationWrapup"]>;
  PostConversationSuggestionEngagement(...args: GenesysCloudFullApiOperationArgs<"postConversationSuggestionEngagement">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationSuggestionEngagement"]>;
  PostConversationSuggestionsFeedback(...args: GenesysCloudFullApiOperationArgs<"postConversationSuggestionsFeedback">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationSuggestionsFeedback"]>;
  PostConversationSummaryFeedback(...args: GenesysCloudFullApiOperationArgs<"postConversationSummaryFeedback">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationSummaryFeedback"]>;
  PostConversationsVideoParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"postConversationsVideoParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsVideoParticipantCommunicationWrapup"]>;
  PostConversationsVideosMeetings(...args: GenesysCloudFullApiOperationArgs<"postConversationsVideosMeetings">): Promise<GenesysCloudFullApiOperationResponseMap["postConversationsVideosMeetings"]>;
  PutConversationCustomattributes(...args: GenesysCloudFullApiOperationArgs<"putConversationCustomattributes">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationCustomattributes"]>;
  PutConversationCustomattributesBulk(...args: GenesysCloudFullApiOperationArgs<"putConversationCustomattributesBulk">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationCustomattributesBulk"]>;
  PutConversationParticipantFlaggedreason(...args: GenesysCloudFullApiOperationArgs<"putConversationParticipantFlaggedreason">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationParticipantFlaggedreason"]>;
  PutConversationsCallbackRecordingstate(...args: GenesysCloudFullApiOperationArgs<"putConversationsCallbackRecordingstate">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsCallbackRecordingstate"]>;
  PutConversationsCallParticipantCommunicationUuidata(...args: GenesysCloudFullApiOperationArgs<"putConversationsCallParticipantCommunicationUuidata">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsCallParticipantCommunicationUuidata"]>;
  PutConversationsCallRecordingstate(...args: GenesysCloudFullApiOperationArgs<"putConversationsCallRecordingstate">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsCallRecordingstate"]>;
  PutConversationsChatRecordingstate(...args: GenesysCloudFullApiOperationArgs<"putConversationsChatRecordingstate">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsChatRecordingstate"]>;
  PutConversationsCobrowsesessionRecordingstate(...args: GenesysCloudFullApiOperationArgs<"putConversationsCobrowsesessionRecordingstate">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsCobrowsesessionRecordingstate"]>;
  PutConversationsCustomattributesSchema(...args: GenesysCloudFullApiOperationArgs<"putConversationsCustomattributesSchema">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsCustomattributesSchema"]>;
  PutConversationSecureattributes(...args: GenesysCloudFullApiOperationArgs<"putConversationSecureattributes">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationSecureattributes"]>;
  PutConversationsEmailMessagesDraft(...args: GenesysCloudFullApiOperationArgs<"putConversationsEmailMessagesDraft">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsEmailMessagesDraft"]>;
  PutConversationsEmailRecordingstate(...args: GenesysCloudFullApiOperationArgs<"putConversationsEmailRecordingstate">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsEmailRecordingstate"]>;
  PutConversationsKeyconfiguration(...args: GenesysCloudFullApiOperationArgs<"putConversationsKeyconfiguration">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsKeyconfiguration"]>;
  PutConversationsMessageRecordingstate(...args: GenesysCloudFullApiOperationArgs<"putConversationsMessageRecordingstate">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsMessageRecordingstate"]>;
  PutConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId(...args: GenesysCloudFullApiOperationArgs<"putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId"]>;
  PutConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId(...args: GenesysCloudFullApiOperationArgs<"putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId"]>;
  PutConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId(...args: GenesysCloudFullApiOperationArgs<"putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId"]>;
  PutConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId(...args: GenesysCloudFullApiOperationArgs<"putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId"]>;
  PutConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId(...args: GenesysCloudFullApiOperationArgs<"putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId"]>;
  PutConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId(...args: GenesysCloudFullApiOperationArgs<"putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId"]>;
  PutConversationsMessagingSettingsDefault(...args: GenesysCloudFullApiOperationArgs<"putConversationsMessagingSettingsDefault">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsMessagingSettingsDefault"]>;
  PutConversationsMessagingSupportedcontentDefault(...args: GenesysCloudFullApiOperationArgs<"putConversationsMessagingSupportedcontentDefault">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsMessagingSupportedcontentDefault"]>;
  PutConversationsMessagingThreadingtimeline(...args: GenesysCloudFullApiOperationArgs<"putConversationsMessagingThreadingtimeline">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsMessagingThreadingtimeline"]>;
  PutConversationsScreenshareRecordingstate(...args: GenesysCloudFullApiOperationArgs<"putConversationsScreenshareRecordingstate">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsScreenshareRecordingstate"]>;
  PutConversationsSocialRecordingstate(...args: GenesysCloudFullApiOperationArgs<"putConversationsSocialRecordingstate">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsSocialRecordingstate"]>;
  PutConversationsVideoRecordingstate(...args: GenesysCloudFullApiOperationArgs<"putConversationsVideoRecordingstate">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationsVideoRecordingstate"]>;
  PutConversationTags(...args: GenesysCloudFullApiOperationArgs<"putConversationTags">): Promise<GenesysCloudFullApiOperationResponseMap["putConversationTags"]>;
}

export const GenesysCloudFullApiConversations04GeneratedFunctionNames = [
  "PostConversationsMessageCommunicationMessagesMediaUploads",
  "PostConversationsMessageCommunicationSocialmediaMessages",
  "PostConversationsMessageCommunicationTyping",
  "PostConversationsMessageInboundOpenEvent",
  "PostConversationsMessageInboundOpenMessage",
  "PostConversationsMessageInboundOpenReceipt",
  "PostConversationsMessageInboundOpenStructuredResponse",
  "PostConversationsMessageMessagesBulk",
  "PostConversationsMessageParticipantCommunicationWrapup",
  "PostConversationsMessageParticipantMonitor",
  "PostConversationsMessageParticipantReplace",
  "PostConversationsMessages",
  "PostConversationsMessagesAgentless",
  "PostConversationsMessagesInboundOpen",
  "PostConversationsMessagingIntegrationsApple",
  "PostConversationsMessagingIntegrationsFacebook",
  "PostConversationsMessagingIntegrationsInstagram",
  "PostConversationsMessagingIntegrationsOpen",
  "PostConversationsMessagingIntegrationsTwitter",
  "PostConversationsMessagingIntegrationsWhatsapp",
  "PostConversationsMessagingIntegrationsWhatsappEmbeddedsignup",
  "PostConversationsMessagingSettings",
  "PostConversationsMessagingSupportedcontent",
  "PostConversationsParticipantsAttributesSearch",
  "PostConversationsScreenshareParticipantCommunicationWrapup",
  "PostConversationsSocialParticipantCommunicationWrapup",
  "PostConversationSuggestionEngagement",
  "PostConversationSuggestionsFeedback",
  "PostConversationSummaryFeedback",
  "PostConversationsVideoParticipantCommunicationWrapup",
  "PostConversationsVideosMeetings",
  "PutConversationCustomattributes",
  "PutConversationCustomattributesBulk",
  "PutConversationParticipantFlaggedreason",
  "PutConversationsCallbackRecordingstate",
  "PutConversationsCallParticipantCommunicationUuidata",
  "PutConversationsCallRecordingstate",
  "PutConversationsChatRecordingstate",
  "PutConversationsCobrowsesessionRecordingstate",
  "PutConversationsCustomattributesSchema",
  "PutConversationSecureattributes",
  "PutConversationsEmailMessagesDraft",
  "PutConversationsEmailRecordingstate",
  "PutConversationsKeyconfiguration",
  "PutConversationsMessageRecordingstate",
  "PutConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId",
  "PutConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId",
  "PutConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId",
  "PutConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId",
  "PutConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId",
  "PutConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId",
  "PutConversationsMessagingSettingsDefault",
  "PutConversationsMessagingSupportedcontentDefault",
  "PutConversationsMessagingThreadingtimeline",
  "PutConversationsScreenshareRecordingstate",
  "PutConversationsSocialRecordingstate",
  "PutConversationsVideoRecordingstate",
  "PutConversationTags"
] as const satisfies readonly (keyof GenesysCloudFullApiConversations04GeneratedClient)[];

export function createGenesysCloudFullApiConversations04GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiConversations04GeneratedClient {
  return {
    PostConversationsMessageCommunicationMessagesMediaUploads: (...args) => callOperation("postConversationsMessageCommunicationMessagesMediaUploads", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageCommunicationMessagesMediaUploads">)),
    PostConversationsMessageCommunicationSocialmediaMessages: (...args) => callOperation("postConversationsMessageCommunicationSocialmediaMessages", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageCommunicationSocialmediaMessages">)),
    PostConversationsMessageCommunicationTyping: (...args) => callOperation("postConversationsMessageCommunicationTyping", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageCommunicationTyping">)),
    PostConversationsMessageInboundOpenEvent: (...args) => callOperation("postConversationsMessageInboundOpenEvent", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageInboundOpenEvent">)),
    PostConversationsMessageInboundOpenMessage: (...args) => callOperation("postConversationsMessageInboundOpenMessage", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageInboundOpenMessage">)),
    PostConversationsMessageInboundOpenReceipt: (...args) => callOperation("postConversationsMessageInboundOpenReceipt", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageInboundOpenReceipt">)),
    PostConversationsMessageInboundOpenStructuredResponse: (...args) => callOperation("postConversationsMessageInboundOpenStructuredResponse", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageInboundOpenStructuredResponse">)),
    PostConversationsMessageMessagesBulk: (...args) => callOperation("postConversationsMessageMessagesBulk", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageMessagesBulk">)),
    PostConversationsMessageParticipantCommunicationWrapup: (...args) => callOperation("postConversationsMessageParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageParticipantCommunicationWrapup">)),
    PostConversationsMessageParticipantMonitor: (...args) => callOperation("postConversationsMessageParticipantMonitor", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageParticipantMonitor">)),
    PostConversationsMessageParticipantReplace: (...args) => callOperation("postConversationsMessageParticipantReplace", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessageParticipantReplace">)),
    PostConversationsMessages: (...args) => callOperation("postConversationsMessages", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessages">)),
    PostConversationsMessagesAgentless: (...args) => callOperation("postConversationsMessagesAgentless", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessagesAgentless">)),
    PostConversationsMessagesInboundOpen: (...args) => callOperation("postConversationsMessagesInboundOpen", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessagesInboundOpen">)),
    PostConversationsMessagingIntegrationsApple: (...args) => callOperation("postConversationsMessagingIntegrationsApple", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsApple">)),
    PostConversationsMessagingIntegrationsFacebook: (...args) => callOperation("postConversationsMessagingIntegrationsFacebook", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsFacebook">)),
    PostConversationsMessagingIntegrationsInstagram: (...args) => callOperation("postConversationsMessagingIntegrationsInstagram", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsInstagram">)),
    PostConversationsMessagingIntegrationsOpen: (...args) => callOperation("postConversationsMessagingIntegrationsOpen", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsOpen">)),
    PostConversationsMessagingIntegrationsTwitter: (...args) => callOperation("postConversationsMessagingIntegrationsTwitter", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsTwitter">)),
    PostConversationsMessagingIntegrationsWhatsapp: (...args) => callOperation("postConversationsMessagingIntegrationsWhatsapp", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsWhatsapp">)),
    PostConversationsMessagingIntegrationsWhatsappEmbeddedsignup: (...args) => callOperation("postConversationsMessagingIntegrationsWhatsappEmbeddedsignup", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessagingIntegrationsWhatsappEmbeddedsignup">)),
    PostConversationsMessagingSettings: (...args) => callOperation("postConversationsMessagingSettings", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessagingSettings">)),
    PostConversationsMessagingSupportedcontent: (...args) => callOperation("postConversationsMessagingSupportedcontent", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsMessagingSupportedcontent">)),
    PostConversationsParticipantsAttributesSearch: (...args) => callOperation("postConversationsParticipantsAttributesSearch", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsParticipantsAttributesSearch">)),
    PostConversationsScreenshareParticipantCommunicationWrapup: (...args) => callOperation("postConversationsScreenshareParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsScreenshareParticipantCommunicationWrapup">)),
    PostConversationsSocialParticipantCommunicationWrapup: (...args) => callOperation("postConversationsSocialParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsSocialParticipantCommunicationWrapup">)),
    PostConversationSuggestionEngagement: (...args) => callOperation("postConversationSuggestionEngagement", ...(args as GenesysCloudFullApiOperationArgs<"postConversationSuggestionEngagement">)),
    PostConversationSuggestionsFeedback: (...args) => callOperation("postConversationSuggestionsFeedback", ...(args as GenesysCloudFullApiOperationArgs<"postConversationSuggestionsFeedback">)),
    PostConversationSummaryFeedback: (...args) => callOperation("postConversationSummaryFeedback", ...(args as GenesysCloudFullApiOperationArgs<"postConversationSummaryFeedback">)),
    PostConversationsVideoParticipantCommunicationWrapup: (...args) => callOperation("postConversationsVideoParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsVideoParticipantCommunicationWrapup">)),
    PostConversationsVideosMeetings: (...args) => callOperation("postConversationsVideosMeetings", ...(args as GenesysCloudFullApiOperationArgs<"postConversationsVideosMeetings">)),
    PutConversationCustomattributes: (...args) => callOperation("putConversationCustomattributes", ...(args as GenesysCloudFullApiOperationArgs<"putConversationCustomattributes">)),
    PutConversationCustomattributesBulk: (...args) => callOperation("putConversationCustomattributesBulk", ...(args as GenesysCloudFullApiOperationArgs<"putConversationCustomattributesBulk">)),
    PutConversationParticipantFlaggedreason: (...args) => callOperation("putConversationParticipantFlaggedreason", ...(args as GenesysCloudFullApiOperationArgs<"putConversationParticipantFlaggedreason">)),
    PutConversationsCallbackRecordingstate: (...args) => callOperation("putConversationsCallbackRecordingstate", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsCallbackRecordingstate">)),
    PutConversationsCallParticipantCommunicationUuidata: (...args) => callOperation("putConversationsCallParticipantCommunicationUuidata", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsCallParticipantCommunicationUuidata">)),
    PutConversationsCallRecordingstate: (...args) => callOperation("putConversationsCallRecordingstate", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsCallRecordingstate">)),
    PutConversationsChatRecordingstate: (...args) => callOperation("putConversationsChatRecordingstate", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsChatRecordingstate">)),
    PutConversationsCobrowsesessionRecordingstate: (...args) => callOperation("putConversationsCobrowsesessionRecordingstate", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsCobrowsesessionRecordingstate">)),
    PutConversationsCustomattributesSchema: (...args) => callOperation("putConversationsCustomattributesSchema", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsCustomattributesSchema">)),
    PutConversationSecureattributes: (...args) => callOperation("putConversationSecureattributes", ...(args as GenesysCloudFullApiOperationArgs<"putConversationSecureattributes">)),
    PutConversationsEmailMessagesDraft: (...args) => callOperation("putConversationsEmailMessagesDraft", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsEmailMessagesDraft">)),
    PutConversationsEmailRecordingstate: (...args) => callOperation("putConversationsEmailRecordingstate", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsEmailRecordingstate">)),
    PutConversationsKeyconfiguration: (...args) => callOperation("putConversationsKeyconfiguration", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsKeyconfiguration">)),
    PutConversationsMessageRecordingstate: (...args) => callOperation("putConversationsMessageRecordingstate", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsMessageRecordingstate">)),
    PutConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId: (...args) => callOperation("putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId">)),
    PutConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId: (...args) => callOperation("putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId">)),
    PutConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId: (...args) => callOperation("putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId">)),
    PutConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId: (...args) => callOperation("putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId">)),
    PutConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId: (...args) => callOperation("putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId">)),
    PutConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId: (...args) => callOperation("putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId">)),
    PutConversationsMessagingSettingsDefault: (...args) => callOperation("putConversationsMessagingSettingsDefault", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsMessagingSettingsDefault">)),
    PutConversationsMessagingSupportedcontentDefault: (...args) => callOperation("putConversationsMessagingSupportedcontentDefault", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsMessagingSupportedcontentDefault">)),
    PutConversationsMessagingThreadingtimeline: (...args) => callOperation("putConversationsMessagingThreadingtimeline", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsMessagingThreadingtimeline">)),
    PutConversationsScreenshareRecordingstate: (...args) => callOperation("putConversationsScreenshareRecordingstate", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsScreenshareRecordingstate">)),
    PutConversationsSocialRecordingstate: (...args) => callOperation("putConversationsSocialRecordingstate", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsSocialRecordingstate">)),
    PutConversationsVideoRecordingstate: (...args) => callOperation("putConversationsVideoRecordingstate", ...(args as GenesysCloudFullApiOperationArgs<"putConversationsVideoRecordingstate">)),
    PutConversationTags: (...args) => callOperation("putConversationTags", ...(args as GenesysCloudFullApiOperationArgs<"putConversationTags">)),
  };
}
