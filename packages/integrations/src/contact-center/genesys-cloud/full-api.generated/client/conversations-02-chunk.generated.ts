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
export const GenesysCloudFullApiConversations02OperationKeys = [
  "getConversationsMessageParticipantCommunicationWrapup",
  "getConversationsMessageParticipantWrapup",
  "getConversationsMessageParticipantWrapupcodes",
  "getConversationsMessages",
  "getConversationsMessagesCachedmedia",
  "getConversationsMessagesCachedmediaCachedMediaItemId",
  "getConversationsMessagingFacebookApp",
  "getConversationsMessagingFacebookPermissions",
  "getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId",
  "getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId",
  "getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId",
  "getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId",
  "getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId",
  "getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId",
  "getConversationsMessagingIntegrations",
  "getConversationsMessagingIntegrationsApple",
  "getConversationsMessagingIntegrationsAppleIntegrationId",
  "getConversationsMessagingIntegrationsFacebook",
  "getConversationsMessagingIntegrationsFacebookIntegrationId",
  "getConversationsMessagingIntegrationsInstagram",
  "getConversationsMessagingIntegrationsInstagramIntegrationId",
  "getConversationsMessagingIntegrationsOpen",
  "getConversationsMessagingIntegrationsOpenIntegrationId",
  "getConversationsMessagingIntegrationsTwitter",
  "getConversationsMessagingIntegrationsTwitterIntegrationId",
  "getConversationsMessagingIntegrationsTwitterOauthSettings",
  "getConversationsMessagingIntegrationsWhatsapp",
  "getConversationsMessagingIntegrationsWhatsappIntegrationId",
  "getConversationsMessagingIntegrationTwitterOauthSettings",
  "getConversationsMessagingOauthAppleCallback",
  "getConversationsMessagingSetting",
  "getConversationsMessagingSettings",
  "getConversationsMessagingSettingsDefault",
  "getConversationsMessagingSupportedcontent",
  "getConversationsMessagingSupportedcontentDefault",
  "getConversationsMessagingSupportedcontentSupportedContentId",
  "getConversationsMessagingThreadingtimeline",
  "getConversationsScreenshareParticipantCommunicationWrapup",
  "getConversationsSettings",
  "getConversationsSocialParticipantCommunicationWrapup",
  "getConversationSuggestion",
  "getConversationSuggestions",
  "getConversationSummaries",
  "getConversationsVideoParticipantCommunicationWrapup",
  "getConversationsVideosMeeting",
  "patchConversationCustomattributes",
  "patchConversationCustomattributesBulk",
  "patchConversationParticipant",
  "patchConversationParticipantAttributes",
  "patchConversationRecordingstate",
  "patchConversationsAftercallworkConversationIdParticipantCommunication",
  "patchConversationsCall",
  "patchConversationsCallback",
  "patchConversationsCallbackParticipant",
  "patchConversationsCallbackParticipantAttributes",
  "patchConversationsCallbackParticipantCommunication",
  "patchConversationsCallbacks",
  "patchConversationsCallConference",
  "patchConversationsCallParticipant",
  "patchConversationsCallParticipantAttributes",
  "patchConversationsCallParticipantCommunication",
  "patchConversationsCallParticipantCommunicationPostflowaction",
  "patchConversationsCallParticipantConsult",
  "patchConversationsCallParticipantUserUserId",
  "patchConversationsChat",
  "patchConversationsChatParticipant",
  "patchConversationsChatParticipantAttributes",
  "patchConversationsChatParticipantCommunication",
  "patchConversationsCobrowsesession",
  "patchConversationsCobrowsesessionParticipant",
  "patchConversationsCobrowsesessionParticipantAttributes",
  "patchConversationsCobrowsesessionParticipantCommunication",
  "patchConversationSecureattributes",
  "patchConversationsEmail",
  "patchConversationsEmailMessagesDraft",
  "patchConversationsEmailParticipant",
  "patchConversationsEmailParticipantAttributes",
  "patchConversationsEmailParticipantCommunication",
  "patchConversationsEmailParticipantParkingstate",
  "patchConversationsMessage"
] as const;
export type GenesysCloudFullApiConversations02OperationKey = typeof GenesysCloudFullApiConversations02OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiConversations02OperationPathParamMap {
  "getConversationsMessageParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessageParticipantWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessageParticipantWrapupcodes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessages": {};
  "getConversationsMessagesCachedmedia": {};
  "getConversationsMessagesCachedmediaCachedMediaItemId": { "cachedMediaItemId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingFacebookApp": {};
  "getConversationsMessagingFacebookPermissions": {};
  "getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingIntegrations": {};
  "getConversationsMessagingIntegrationsApple": {};
  "getConversationsMessagingIntegrationsAppleIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingIntegrationsFacebook": {};
  "getConversationsMessagingIntegrationsFacebookIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingIntegrationsInstagram": {};
  "getConversationsMessagingIntegrationsInstagramIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingIntegrationsOpen": {};
  "getConversationsMessagingIntegrationsOpenIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingIntegrationsTwitter": {};
  "getConversationsMessagingIntegrationsTwitterIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingIntegrationsTwitterOauthSettings": {};
  "getConversationsMessagingIntegrationsWhatsapp": {};
  "getConversationsMessagingIntegrationsWhatsappIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingIntegrationTwitterOauthSettings": { "integrationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingOauthAppleCallback": {};
  "getConversationsMessagingSetting": { "messageSettingId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingSettings": {};
  "getConversationsMessagingSettingsDefault": {};
  "getConversationsMessagingSupportedcontent": {};
  "getConversationsMessagingSupportedcontentDefault": {};
  "getConversationsMessagingSupportedcontentSupportedContentId": { "supportedContentId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessagingThreadingtimeline": {};
  "getConversationsScreenshareParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getConversationsSettings": {};
  "getConversationsSocialParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getConversationSuggestion": { "conversationId": GenesysCloudFullApiPathParamValue; "suggestionId": GenesysCloudFullApiPathParamValue };
  "getConversationSuggestions": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationSummaries": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsVideoParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getConversationsVideosMeeting": { "meetingId": GenesysCloudFullApiPathParamValue };
  "patchConversationCustomattributes": { "conversationId": GenesysCloudFullApiPathParamValue };
  "patchConversationCustomattributesBulk": { "conversationId": GenesysCloudFullApiPathParamValue };
  "patchConversationParticipant": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationParticipantAttributes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationRecordingstate": { "conversationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsAftercallworkConversationIdParticipantCommunication": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCall": { "conversationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCallback": { "conversationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCallbackParticipant": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCallbackParticipantAttributes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCallbackParticipantCommunication": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCallbacks": {};
  "patchConversationsCallConference": { "conversationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCallParticipant": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCallParticipantAttributes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCallParticipantCommunication": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCallParticipantCommunicationPostflowaction": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCallParticipantConsult": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCallParticipantUserUserId": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "userId": GenesysCloudFullApiPathParamValue };
  "patchConversationsChat": { "conversationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsChatParticipant": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsChatParticipantAttributes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsChatParticipantCommunication": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCobrowsesession": { "conversationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCobrowsesessionParticipant": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCobrowsesessionParticipantAttributes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsCobrowsesessionParticipantCommunication": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "patchConversationSecureattributes": { "conversationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsEmail": { "conversationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsEmailMessagesDraft": { "conversationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsEmailParticipant": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsEmailParticipantAttributes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsEmailParticipantCommunication": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "patchConversationsEmailParticipantParkingstate": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "patchConversationsMessage": { "conversationId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiConversations02OperationRequestMap {
  "getConversationsMessageParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"getConversationsMessageParticipantCommunicationWrapup">;
  "getConversationsMessageParticipantWrapup": GenesysCloudFullApiOperationInput<"getConversationsMessageParticipantWrapup">;
  "getConversationsMessageParticipantWrapupcodes": GenesysCloudFullApiOperationInput<"getConversationsMessageParticipantWrapupcodes">;
  "getConversationsMessages": GenesysCloudFullApiOperationInput<"getConversationsMessages">;
  "getConversationsMessagesCachedmedia": GenesysCloudFullApiOperationInput<"getConversationsMessagesCachedmedia">;
  "getConversationsMessagesCachedmediaCachedMediaItemId": GenesysCloudFullApiOperationInput<"getConversationsMessagesCachedmediaCachedMediaItemId">;
  "getConversationsMessagingFacebookApp": GenesysCloudFullApiOperationInput<"getConversationsMessagingFacebookApp">;
  "getConversationsMessagingFacebookPermissions": GenesysCloudFullApiOperationInput<"getConversationsMessagingFacebookPermissions">;
  "getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId": GenesysCloudFullApiOperationInput<"getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId">;
  "getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId": GenesysCloudFullApiOperationInput<"getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId">;
  "getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId": GenesysCloudFullApiOperationInput<"getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId">;
  "getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId": GenesysCloudFullApiOperationInput<"getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId">;
  "getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId": GenesysCloudFullApiOperationInput<"getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId">;
  "getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId": GenesysCloudFullApiOperationInput<"getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId">;
  "getConversationsMessagingIntegrations": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrations">;
  "getConversationsMessagingIntegrationsApple": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsApple">;
  "getConversationsMessagingIntegrationsAppleIntegrationId": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsAppleIntegrationId">;
  "getConversationsMessagingIntegrationsFacebook": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsFacebook">;
  "getConversationsMessagingIntegrationsFacebookIntegrationId": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsFacebookIntegrationId">;
  "getConversationsMessagingIntegrationsInstagram": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsInstagram">;
  "getConversationsMessagingIntegrationsInstagramIntegrationId": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsInstagramIntegrationId">;
  "getConversationsMessagingIntegrationsOpen": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsOpen">;
  "getConversationsMessagingIntegrationsOpenIntegrationId": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsOpenIntegrationId">;
  "getConversationsMessagingIntegrationsTwitter": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsTwitter">;
  "getConversationsMessagingIntegrationsTwitterIntegrationId": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsTwitterIntegrationId">;
  "getConversationsMessagingIntegrationsTwitterOauthSettings": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsTwitterOauthSettings">;
  "getConversationsMessagingIntegrationsWhatsapp": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsWhatsapp">;
  "getConversationsMessagingIntegrationsWhatsappIntegrationId": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationsWhatsappIntegrationId">;
  "getConversationsMessagingIntegrationTwitterOauthSettings": GenesysCloudFullApiOperationInput<"getConversationsMessagingIntegrationTwitterOauthSettings">;
  "getConversationsMessagingOauthAppleCallback": GenesysCloudFullApiOperationInput<"getConversationsMessagingOauthAppleCallback">;
  "getConversationsMessagingSetting": GenesysCloudFullApiOperationInput<"getConversationsMessagingSetting">;
  "getConversationsMessagingSettings": GenesysCloudFullApiOperationInput<"getConversationsMessagingSettings">;
  "getConversationsMessagingSettingsDefault": GenesysCloudFullApiOperationInput<"getConversationsMessagingSettingsDefault">;
  "getConversationsMessagingSupportedcontent": GenesysCloudFullApiOperationInput<"getConversationsMessagingSupportedcontent">;
  "getConversationsMessagingSupportedcontentDefault": GenesysCloudFullApiOperationInput<"getConversationsMessagingSupportedcontentDefault">;
  "getConversationsMessagingSupportedcontentSupportedContentId": GenesysCloudFullApiOperationInput<"getConversationsMessagingSupportedcontentSupportedContentId">;
  "getConversationsMessagingThreadingtimeline": GenesysCloudFullApiOperationInput<"getConversationsMessagingThreadingtimeline">;
  "getConversationsScreenshareParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"getConversationsScreenshareParticipantCommunicationWrapup">;
  "getConversationsSettings": GenesysCloudFullApiOperationInput<"getConversationsSettings">;
  "getConversationsSocialParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"getConversationsSocialParticipantCommunicationWrapup">;
  "getConversationSuggestion": GenesysCloudFullApiOperationInput<"getConversationSuggestion">;
  "getConversationSuggestions": GenesysCloudFullApiOperationInput<"getConversationSuggestions">;
  "getConversationSummaries": GenesysCloudFullApiOperationInput<"getConversationSummaries">;
  "getConversationsVideoParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"getConversationsVideoParticipantCommunicationWrapup">;
  "getConversationsVideosMeeting": GenesysCloudFullApiOperationInput<"getConversationsVideosMeeting">;
  "patchConversationCustomattributes": GenesysCloudFullApiOperationInput<"patchConversationCustomattributes">;
  "patchConversationCustomattributesBulk": GenesysCloudFullApiOperationInput<"patchConversationCustomattributesBulk">;
  "patchConversationParticipant": GenesysCloudFullApiOperationInput<"patchConversationParticipant">;
  "patchConversationParticipantAttributes": GenesysCloudFullApiOperationInput<"patchConversationParticipantAttributes">;
  "patchConversationRecordingstate": GenesysCloudFullApiOperationInput<"patchConversationRecordingstate">;
  "patchConversationsAftercallworkConversationIdParticipantCommunication": GenesysCloudFullApiOperationInput<"patchConversationsAftercallworkConversationIdParticipantCommunication">;
  "patchConversationsCall": GenesysCloudFullApiOperationInput<"patchConversationsCall">;
  "patchConversationsCallback": GenesysCloudFullApiOperationInput<"patchConversationsCallback">;
  "patchConversationsCallbackParticipant": GenesysCloudFullApiOperationInput<"patchConversationsCallbackParticipant">;
  "patchConversationsCallbackParticipantAttributes": GenesysCloudFullApiOperationInput<"patchConversationsCallbackParticipantAttributes">;
  "patchConversationsCallbackParticipantCommunication": GenesysCloudFullApiOperationInput<"patchConversationsCallbackParticipantCommunication">;
  "patchConversationsCallbacks": GenesysCloudFullApiOperationInput<"patchConversationsCallbacks">;
  "patchConversationsCallConference": GenesysCloudFullApiOperationInput<"patchConversationsCallConference">;
  "patchConversationsCallParticipant": GenesysCloudFullApiOperationInput<"patchConversationsCallParticipant">;
  "patchConversationsCallParticipantAttributes": GenesysCloudFullApiOperationInput<"patchConversationsCallParticipantAttributes">;
  "patchConversationsCallParticipantCommunication": GenesysCloudFullApiOperationInput<"patchConversationsCallParticipantCommunication">;
  "patchConversationsCallParticipantCommunicationPostflowaction": GenesysCloudFullApiOperationInput<"patchConversationsCallParticipantCommunicationPostflowaction">;
  "patchConversationsCallParticipantConsult": GenesysCloudFullApiOperationInput<"patchConversationsCallParticipantConsult">;
  "patchConversationsCallParticipantUserUserId": GenesysCloudFullApiOperationInput<"patchConversationsCallParticipantUserUserId">;
  "patchConversationsChat": GenesysCloudFullApiOperationInput<"patchConversationsChat">;
  "patchConversationsChatParticipant": GenesysCloudFullApiOperationInput<"patchConversationsChatParticipant">;
  "patchConversationsChatParticipantAttributes": GenesysCloudFullApiOperationInput<"patchConversationsChatParticipantAttributes">;
  "patchConversationsChatParticipantCommunication": GenesysCloudFullApiOperationInput<"patchConversationsChatParticipantCommunication">;
  "patchConversationsCobrowsesession": GenesysCloudFullApiOperationInput<"patchConversationsCobrowsesession">;
  "patchConversationsCobrowsesessionParticipant": GenesysCloudFullApiOperationInput<"patchConversationsCobrowsesessionParticipant">;
  "patchConversationsCobrowsesessionParticipantAttributes": GenesysCloudFullApiOperationInput<"patchConversationsCobrowsesessionParticipantAttributes">;
  "patchConversationsCobrowsesessionParticipantCommunication": GenesysCloudFullApiOperationInput<"patchConversationsCobrowsesessionParticipantCommunication">;
  "patchConversationSecureattributes": GenesysCloudFullApiOperationInput<"patchConversationSecureattributes">;
  "patchConversationsEmail": GenesysCloudFullApiOperationInput<"patchConversationsEmail">;
  "patchConversationsEmailMessagesDraft": GenesysCloudFullApiOperationInput<"patchConversationsEmailMessagesDraft">;
  "patchConversationsEmailParticipant": GenesysCloudFullApiOperationInput<"patchConversationsEmailParticipant">;
  "patchConversationsEmailParticipantAttributes": GenesysCloudFullApiOperationInput<"patchConversationsEmailParticipantAttributes">;
  "patchConversationsEmailParticipantCommunication": GenesysCloudFullApiOperationInput<"patchConversationsEmailParticipantCommunication">;
  "patchConversationsEmailParticipantParkingstate": GenesysCloudFullApiOperationInput<"patchConversationsEmailParticipantParkingstate">;
  "patchConversationsMessage": GenesysCloudFullApiOperationInput<"patchConversationsMessage">;
}

export interface GenesysCloudFullApiConversations02GeneratedClient {
  GetConversationsMessageParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessageParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessageParticipantCommunicationWrapup"]>;
  GetConversationsMessageParticipantWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessageParticipantWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessageParticipantWrapup"]>;
  GetConversationsMessageParticipantWrapupcodes(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessageParticipantWrapupcodes">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessageParticipantWrapupcodes"]>;
  GetConversationsMessages(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessages"]>;
  GetConversationsMessagesCachedmedia(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagesCachedmedia">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagesCachedmedia"]>;
  GetConversationsMessagesCachedmediaCachedMediaItemId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagesCachedmediaCachedMediaItemId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagesCachedmediaCachedMediaItemId"]>;
  GetConversationsMessagingFacebookApp(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingFacebookApp">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingFacebookApp"]>;
  GetConversationsMessagingFacebookPermissions(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingFacebookPermissions">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingFacebookPermissions"]>;
  GetConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId"]>;
  GetConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId"]>;
  GetConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId"]>;
  GetConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId"]>;
  GetConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId"]>;
  GetConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId"]>;
  GetConversationsMessagingIntegrations(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrations">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrations"]>;
  GetConversationsMessagingIntegrationsApple(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsApple">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsApple"]>;
  GetConversationsMessagingIntegrationsAppleIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsAppleIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsAppleIntegrationId"]>;
  GetConversationsMessagingIntegrationsFacebook(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsFacebook">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsFacebook"]>;
  GetConversationsMessagingIntegrationsFacebookIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsFacebookIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsFacebookIntegrationId"]>;
  GetConversationsMessagingIntegrationsInstagram(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsInstagram">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsInstagram"]>;
  GetConversationsMessagingIntegrationsInstagramIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsInstagramIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsInstagramIntegrationId"]>;
  GetConversationsMessagingIntegrationsOpen(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsOpen">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsOpen"]>;
  GetConversationsMessagingIntegrationsOpenIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsOpenIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsOpenIntegrationId"]>;
  GetConversationsMessagingIntegrationsTwitter(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsTwitter">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsTwitter"]>;
  GetConversationsMessagingIntegrationsTwitterIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsTwitterIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsTwitterIntegrationId"]>;
  GetConversationsMessagingIntegrationsTwitterOauthSettings(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsTwitterOauthSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsTwitterOauthSettings"]>;
  GetConversationsMessagingIntegrationsWhatsapp(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsWhatsapp">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsWhatsapp"]>;
  GetConversationsMessagingIntegrationsWhatsappIntegrationId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsWhatsappIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationsWhatsappIntegrationId"]>;
  GetConversationsMessagingIntegrationTwitterOauthSettings(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationTwitterOauthSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingIntegrationTwitterOauthSettings"]>;
  GetConversationsMessagingOauthAppleCallback(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingOauthAppleCallback">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingOauthAppleCallback"]>;
  GetConversationsMessagingSetting(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingSetting">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingSetting"]>;
  GetConversationsMessagingSettings(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingSettings"]>;
  GetConversationsMessagingSettingsDefault(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingSettingsDefault">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingSettingsDefault"]>;
  GetConversationsMessagingSupportedcontent(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingSupportedcontent">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingSupportedcontent"]>;
  GetConversationsMessagingSupportedcontentDefault(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingSupportedcontentDefault">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingSupportedcontentDefault"]>;
  GetConversationsMessagingSupportedcontentSupportedContentId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingSupportedcontentSupportedContentId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingSupportedcontentSupportedContentId"]>;
  GetConversationsMessagingThreadingtimeline(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessagingThreadingtimeline">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessagingThreadingtimeline"]>;
  GetConversationsScreenshareParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsScreenshareParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsScreenshareParticipantCommunicationWrapup"]>;
  GetConversationsSettings(...args: GenesysCloudFullApiOperationArgs<"getConversationsSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsSettings"]>;
  GetConversationsSocialParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsSocialParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsSocialParticipantCommunicationWrapup"]>;
  GetConversationSuggestion(...args: GenesysCloudFullApiOperationArgs<"getConversationSuggestion">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationSuggestion"]>;
  GetConversationSuggestions(...args: GenesysCloudFullApiOperationArgs<"getConversationSuggestions">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationSuggestions"]>;
  GetConversationSummaries(...args: GenesysCloudFullApiOperationArgs<"getConversationSummaries">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationSummaries"]>;
  GetConversationsVideoParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsVideoParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsVideoParticipantCommunicationWrapup"]>;
  GetConversationsVideosMeeting(...args: GenesysCloudFullApiOperationArgs<"getConversationsVideosMeeting">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsVideosMeeting"]>;
  PatchConversationCustomattributes(...args: GenesysCloudFullApiOperationArgs<"patchConversationCustomattributes">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationCustomattributes"]>;
  PatchConversationCustomattributesBulk(...args: GenesysCloudFullApiOperationArgs<"patchConversationCustomattributesBulk">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationCustomattributesBulk"]>;
  PatchConversationParticipant(...args: GenesysCloudFullApiOperationArgs<"patchConversationParticipant">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationParticipant"]>;
  PatchConversationParticipantAttributes(...args: GenesysCloudFullApiOperationArgs<"patchConversationParticipantAttributes">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationParticipantAttributes"]>;
  PatchConversationRecordingstate(...args: GenesysCloudFullApiOperationArgs<"patchConversationRecordingstate">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationRecordingstate"]>;
  PatchConversationsAftercallworkConversationIdParticipantCommunication(...args: GenesysCloudFullApiOperationArgs<"patchConversationsAftercallworkConversationIdParticipantCommunication">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsAftercallworkConversationIdParticipantCommunication"]>;
  PatchConversationsCall(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCall">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCall"]>;
  PatchConversationsCallback(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCallback">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCallback"]>;
  PatchConversationsCallbackParticipant(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCallbackParticipant">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCallbackParticipant"]>;
  PatchConversationsCallbackParticipantAttributes(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCallbackParticipantAttributes">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCallbackParticipantAttributes"]>;
  PatchConversationsCallbackParticipantCommunication(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCallbackParticipantCommunication">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCallbackParticipantCommunication"]>;
  PatchConversationsCallbacks(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCallbacks">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCallbacks"]>;
  PatchConversationsCallConference(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCallConference">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCallConference"]>;
  PatchConversationsCallParticipant(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCallParticipant">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCallParticipant"]>;
  PatchConversationsCallParticipantAttributes(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCallParticipantAttributes">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCallParticipantAttributes"]>;
  PatchConversationsCallParticipantCommunication(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCallParticipantCommunication">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCallParticipantCommunication"]>;
  PatchConversationsCallParticipantCommunicationPostflowaction(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCallParticipantCommunicationPostflowaction">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCallParticipantCommunicationPostflowaction"]>;
  PatchConversationsCallParticipantConsult(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCallParticipantConsult">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCallParticipantConsult"]>;
  PatchConversationsCallParticipantUserUserId(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCallParticipantUserUserId">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCallParticipantUserUserId"]>;
  PatchConversationsChat(...args: GenesysCloudFullApiOperationArgs<"patchConversationsChat">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsChat"]>;
  PatchConversationsChatParticipant(...args: GenesysCloudFullApiOperationArgs<"patchConversationsChatParticipant">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsChatParticipant"]>;
  PatchConversationsChatParticipantAttributes(...args: GenesysCloudFullApiOperationArgs<"patchConversationsChatParticipantAttributes">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsChatParticipantAttributes"]>;
  PatchConversationsChatParticipantCommunication(...args: GenesysCloudFullApiOperationArgs<"patchConversationsChatParticipantCommunication">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsChatParticipantCommunication"]>;
  PatchConversationsCobrowsesession(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCobrowsesession">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCobrowsesession"]>;
  PatchConversationsCobrowsesessionParticipant(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCobrowsesessionParticipant">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCobrowsesessionParticipant"]>;
  PatchConversationsCobrowsesessionParticipantAttributes(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCobrowsesessionParticipantAttributes">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCobrowsesessionParticipantAttributes"]>;
  PatchConversationsCobrowsesessionParticipantCommunication(...args: GenesysCloudFullApiOperationArgs<"patchConversationsCobrowsesessionParticipantCommunication">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsCobrowsesessionParticipantCommunication"]>;
  PatchConversationSecureattributes(...args: GenesysCloudFullApiOperationArgs<"patchConversationSecureattributes">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationSecureattributes"]>;
  PatchConversationsEmail(...args: GenesysCloudFullApiOperationArgs<"patchConversationsEmail">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsEmail"]>;
  PatchConversationsEmailMessagesDraft(...args: GenesysCloudFullApiOperationArgs<"patchConversationsEmailMessagesDraft">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsEmailMessagesDraft"]>;
  PatchConversationsEmailParticipant(...args: GenesysCloudFullApiOperationArgs<"patchConversationsEmailParticipant">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsEmailParticipant"]>;
  PatchConversationsEmailParticipantAttributes(...args: GenesysCloudFullApiOperationArgs<"patchConversationsEmailParticipantAttributes">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsEmailParticipantAttributes"]>;
  PatchConversationsEmailParticipantCommunication(...args: GenesysCloudFullApiOperationArgs<"patchConversationsEmailParticipantCommunication">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsEmailParticipantCommunication"]>;
  PatchConversationsEmailParticipantParkingstate(...args: GenesysCloudFullApiOperationArgs<"patchConversationsEmailParticipantParkingstate">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsEmailParticipantParkingstate"]>;
  PatchConversationsMessage(...args: GenesysCloudFullApiOperationArgs<"patchConversationsMessage">): Promise<GenesysCloudFullApiOperationResponseMap["patchConversationsMessage"]>;
}

export const GenesysCloudFullApiConversations02GeneratedFunctionNames = [
  "GetConversationsMessageParticipantCommunicationWrapup",
  "GetConversationsMessageParticipantWrapup",
  "GetConversationsMessageParticipantWrapupcodes",
  "GetConversationsMessages",
  "GetConversationsMessagesCachedmedia",
  "GetConversationsMessagesCachedmediaCachedMediaItemId",
  "GetConversationsMessagingFacebookApp",
  "GetConversationsMessagingFacebookPermissions",
  "GetConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId",
  "GetConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId",
  "GetConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId",
  "GetConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId",
  "GetConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId",
  "GetConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId",
  "GetConversationsMessagingIntegrations",
  "GetConversationsMessagingIntegrationsApple",
  "GetConversationsMessagingIntegrationsAppleIntegrationId",
  "GetConversationsMessagingIntegrationsFacebook",
  "GetConversationsMessagingIntegrationsFacebookIntegrationId",
  "GetConversationsMessagingIntegrationsInstagram",
  "GetConversationsMessagingIntegrationsInstagramIntegrationId",
  "GetConversationsMessagingIntegrationsOpen",
  "GetConversationsMessagingIntegrationsOpenIntegrationId",
  "GetConversationsMessagingIntegrationsTwitter",
  "GetConversationsMessagingIntegrationsTwitterIntegrationId",
  "GetConversationsMessagingIntegrationsTwitterOauthSettings",
  "GetConversationsMessagingIntegrationsWhatsapp",
  "GetConversationsMessagingIntegrationsWhatsappIntegrationId",
  "GetConversationsMessagingIntegrationTwitterOauthSettings",
  "GetConversationsMessagingOauthAppleCallback",
  "GetConversationsMessagingSetting",
  "GetConversationsMessagingSettings",
  "GetConversationsMessagingSettingsDefault",
  "GetConversationsMessagingSupportedcontent",
  "GetConversationsMessagingSupportedcontentDefault",
  "GetConversationsMessagingSupportedcontentSupportedContentId",
  "GetConversationsMessagingThreadingtimeline",
  "GetConversationsScreenshareParticipantCommunicationWrapup",
  "GetConversationsSettings",
  "GetConversationsSocialParticipantCommunicationWrapup",
  "GetConversationSuggestion",
  "GetConversationSuggestions",
  "GetConversationSummaries",
  "GetConversationsVideoParticipantCommunicationWrapup",
  "GetConversationsVideosMeeting",
  "PatchConversationCustomattributes",
  "PatchConversationCustomattributesBulk",
  "PatchConversationParticipant",
  "PatchConversationParticipantAttributes",
  "PatchConversationRecordingstate",
  "PatchConversationsAftercallworkConversationIdParticipantCommunication",
  "PatchConversationsCall",
  "PatchConversationsCallback",
  "PatchConversationsCallbackParticipant",
  "PatchConversationsCallbackParticipantAttributes",
  "PatchConversationsCallbackParticipantCommunication",
  "PatchConversationsCallbacks",
  "PatchConversationsCallConference",
  "PatchConversationsCallParticipant",
  "PatchConversationsCallParticipantAttributes",
  "PatchConversationsCallParticipantCommunication",
  "PatchConversationsCallParticipantCommunicationPostflowaction",
  "PatchConversationsCallParticipantConsult",
  "PatchConversationsCallParticipantUserUserId",
  "PatchConversationsChat",
  "PatchConversationsChatParticipant",
  "PatchConversationsChatParticipantAttributes",
  "PatchConversationsChatParticipantCommunication",
  "PatchConversationsCobrowsesession",
  "PatchConversationsCobrowsesessionParticipant",
  "PatchConversationsCobrowsesessionParticipantAttributes",
  "PatchConversationsCobrowsesessionParticipantCommunication",
  "PatchConversationSecureattributes",
  "PatchConversationsEmail",
  "PatchConversationsEmailMessagesDraft",
  "PatchConversationsEmailParticipant",
  "PatchConversationsEmailParticipantAttributes",
  "PatchConversationsEmailParticipantCommunication",
  "PatchConversationsEmailParticipantParkingstate",
  "PatchConversationsMessage"
] as const satisfies readonly (keyof GenesysCloudFullApiConversations02GeneratedClient)[];

export function createGenesysCloudFullApiConversations02GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiConversations02GeneratedClient {
  return {
    GetConversationsMessageParticipantCommunicationWrapup: (...args) => callOperation("getConversationsMessageParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessageParticipantCommunicationWrapup">)),
    GetConversationsMessageParticipantWrapup: (...args) => callOperation("getConversationsMessageParticipantWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessageParticipantWrapup">)),
    GetConversationsMessageParticipantWrapupcodes: (...args) => callOperation("getConversationsMessageParticipantWrapupcodes", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessageParticipantWrapupcodes">)),
    GetConversationsMessages: (...args) => callOperation("getConversationsMessages", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessages">)),
    GetConversationsMessagesCachedmedia: (...args) => callOperation("getConversationsMessagesCachedmedia", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagesCachedmedia">)),
    GetConversationsMessagesCachedmediaCachedMediaItemId: (...args) => callOperation("getConversationsMessagesCachedmediaCachedMediaItemId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagesCachedmediaCachedMediaItemId">)),
    GetConversationsMessagingFacebookApp: (...args) => callOperation("getConversationsMessagingFacebookApp", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingFacebookApp">)),
    GetConversationsMessagingFacebookPermissions: (...args) => callOperation("getConversationsMessagingFacebookPermissions", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingFacebookPermissions">)),
    GetConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId: (...args) => callOperation("getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIdentityresolutionIntegrationsAppleIntegrationId">)),
    GetConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId: (...args) => callOperation("getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIdentityresolutionIntegrationsFacebookIntegrationId">)),
    GetConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId: (...args) => callOperation("getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIdentityresolutionIntegrationsInstagramIntegrationId">)),
    GetConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId: (...args) => callOperation("getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIdentityresolutionIntegrationsOpenIntegrationId">)),
    GetConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId: (...args) => callOperation("getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIdentityresolutionIntegrationsTwitterIntegrationId">)),
    GetConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId: (...args) => callOperation("getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIdentityresolutionIntegrationsWhatsappIntegrationId">)),
    GetConversationsMessagingIntegrations: (...args) => callOperation("getConversationsMessagingIntegrations", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrations">)),
    GetConversationsMessagingIntegrationsApple: (...args) => callOperation("getConversationsMessagingIntegrationsApple", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsApple">)),
    GetConversationsMessagingIntegrationsAppleIntegrationId: (...args) => callOperation("getConversationsMessagingIntegrationsAppleIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsAppleIntegrationId">)),
    GetConversationsMessagingIntegrationsFacebook: (...args) => callOperation("getConversationsMessagingIntegrationsFacebook", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsFacebook">)),
    GetConversationsMessagingIntegrationsFacebookIntegrationId: (...args) => callOperation("getConversationsMessagingIntegrationsFacebookIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsFacebookIntegrationId">)),
    GetConversationsMessagingIntegrationsInstagram: (...args) => callOperation("getConversationsMessagingIntegrationsInstagram", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsInstagram">)),
    GetConversationsMessagingIntegrationsInstagramIntegrationId: (...args) => callOperation("getConversationsMessagingIntegrationsInstagramIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsInstagramIntegrationId">)),
    GetConversationsMessagingIntegrationsOpen: (...args) => callOperation("getConversationsMessagingIntegrationsOpen", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsOpen">)),
    GetConversationsMessagingIntegrationsOpenIntegrationId: (...args) => callOperation("getConversationsMessagingIntegrationsOpenIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsOpenIntegrationId">)),
    GetConversationsMessagingIntegrationsTwitter: (...args) => callOperation("getConversationsMessagingIntegrationsTwitter", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsTwitter">)),
    GetConversationsMessagingIntegrationsTwitterIntegrationId: (...args) => callOperation("getConversationsMessagingIntegrationsTwitterIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsTwitterIntegrationId">)),
    GetConversationsMessagingIntegrationsTwitterOauthSettings: (...args) => callOperation("getConversationsMessagingIntegrationsTwitterOauthSettings", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsTwitterOauthSettings">)),
    GetConversationsMessagingIntegrationsWhatsapp: (...args) => callOperation("getConversationsMessagingIntegrationsWhatsapp", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsWhatsapp">)),
    GetConversationsMessagingIntegrationsWhatsappIntegrationId: (...args) => callOperation("getConversationsMessagingIntegrationsWhatsappIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationsWhatsappIntegrationId">)),
    GetConversationsMessagingIntegrationTwitterOauthSettings: (...args) => callOperation("getConversationsMessagingIntegrationTwitterOauthSettings", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingIntegrationTwitterOauthSettings">)),
    GetConversationsMessagingOauthAppleCallback: (...args) => callOperation("getConversationsMessagingOauthAppleCallback", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingOauthAppleCallback">)),
    GetConversationsMessagingSetting: (...args) => callOperation("getConversationsMessagingSetting", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingSetting">)),
    GetConversationsMessagingSettings: (...args) => callOperation("getConversationsMessagingSettings", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingSettings">)),
    GetConversationsMessagingSettingsDefault: (...args) => callOperation("getConversationsMessagingSettingsDefault", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingSettingsDefault">)),
    GetConversationsMessagingSupportedcontent: (...args) => callOperation("getConversationsMessagingSupportedcontent", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingSupportedcontent">)),
    GetConversationsMessagingSupportedcontentDefault: (...args) => callOperation("getConversationsMessagingSupportedcontentDefault", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingSupportedcontentDefault">)),
    GetConversationsMessagingSupportedcontentSupportedContentId: (...args) => callOperation("getConversationsMessagingSupportedcontentSupportedContentId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingSupportedcontentSupportedContentId">)),
    GetConversationsMessagingThreadingtimeline: (...args) => callOperation("getConversationsMessagingThreadingtimeline", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessagingThreadingtimeline">)),
    GetConversationsScreenshareParticipantCommunicationWrapup: (...args) => callOperation("getConversationsScreenshareParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsScreenshareParticipantCommunicationWrapup">)),
    GetConversationsSettings: (...args) => callOperation("getConversationsSettings", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsSettings">)),
    GetConversationsSocialParticipantCommunicationWrapup: (...args) => callOperation("getConversationsSocialParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsSocialParticipantCommunicationWrapup">)),
    GetConversationSuggestion: (...args) => callOperation("getConversationSuggestion", ...(args as GenesysCloudFullApiOperationArgs<"getConversationSuggestion">)),
    GetConversationSuggestions: (...args) => callOperation("getConversationSuggestions", ...(args as GenesysCloudFullApiOperationArgs<"getConversationSuggestions">)),
    GetConversationSummaries: (...args) => callOperation("getConversationSummaries", ...(args as GenesysCloudFullApiOperationArgs<"getConversationSummaries">)),
    GetConversationsVideoParticipantCommunicationWrapup: (...args) => callOperation("getConversationsVideoParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsVideoParticipantCommunicationWrapup">)),
    GetConversationsVideosMeeting: (...args) => callOperation("getConversationsVideosMeeting", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsVideosMeeting">)),
    PatchConversationCustomattributes: (...args) => callOperation("patchConversationCustomattributes", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationCustomattributes">)),
    PatchConversationCustomattributesBulk: (...args) => callOperation("patchConversationCustomattributesBulk", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationCustomattributesBulk">)),
    PatchConversationParticipant: (...args) => callOperation("patchConversationParticipant", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationParticipant">)),
    PatchConversationParticipantAttributes: (...args) => callOperation("patchConversationParticipantAttributes", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationParticipantAttributes">)),
    PatchConversationRecordingstate: (...args) => callOperation("patchConversationRecordingstate", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationRecordingstate">)),
    PatchConversationsAftercallworkConversationIdParticipantCommunication: (...args) => callOperation("patchConversationsAftercallworkConversationIdParticipantCommunication", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsAftercallworkConversationIdParticipantCommunication">)),
    PatchConversationsCall: (...args) => callOperation("patchConversationsCall", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCall">)),
    PatchConversationsCallback: (...args) => callOperation("patchConversationsCallback", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCallback">)),
    PatchConversationsCallbackParticipant: (...args) => callOperation("patchConversationsCallbackParticipant", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCallbackParticipant">)),
    PatchConversationsCallbackParticipantAttributes: (...args) => callOperation("patchConversationsCallbackParticipantAttributes", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCallbackParticipantAttributes">)),
    PatchConversationsCallbackParticipantCommunication: (...args) => callOperation("patchConversationsCallbackParticipantCommunication", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCallbackParticipantCommunication">)),
    PatchConversationsCallbacks: (...args) => callOperation("patchConversationsCallbacks", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCallbacks">)),
    PatchConversationsCallConference: (...args) => callOperation("patchConversationsCallConference", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCallConference">)),
    PatchConversationsCallParticipant: (...args) => callOperation("patchConversationsCallParticipant", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCallParticipant">)),
    PatchConversationsCallParticipantAttributes: (...args) => callOperation("patchConversationsCallParticipantAttributes", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCallParticipantAttributes">)),
    PatchConversationsCallParticipantCommunication: (...args) => callOperation("patchConversationsCallParticipantCommunication", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCallParticipantCommunication">)),
    PatchConversationsCallParticipantCommunicationPostflowaction: (...args) => callOperation("patchConversationsCallParticipantCommunicationPostflowaction", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCallParticipantCommunicationPostflowaction">)),
    PatchConversationsCallParticipantConsult: (...args) => callOperation("patchConversationsCallParticipantConsult", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCallParticipantConsult">)),
    PatchConversationsCallParticipantUserUserId: (...args) => callOperation("patchConversationsCallParticipantUserUserId", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCallParticipantUserUserId">)),
    PatchConversationsChat: (...args) => callOperation("patchConversationsChat", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsChat">)),
    PatchConversationsChatParticipant: (...args) => callOperation("patchConversationsChatParticipant", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsChatParticipant">)),
    PatchConversationsChatParticipantAttributes: (...args) => callOperation("patchConversationsChatParticipantAttributes", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsChatParticipantAttributes">)),
    PatchConversationsChatParticipantCommunication: (...args) => callOperation("patchConversationsChatParticipantCommunication", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsChatParticipantCommunication">)),
    PatchConversationsCobrowsesession: (...args) => callOperation("patchConversationsCobrowsesession", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCobrowsesession">)),
    PatchConversationsCobrowsesessionParticipant: (...args) => callOperation("patchConversationsCobrowsesessionParticipant", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCobrowsesessionParticipant">)),
    PatchConversationsCobrowsesessionParticipantAttributes: (...args) => callOperation("patchConversationsCobrowsesessionParticipantAttributes", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCobrowsesessionParticipantAttributes">)),
    PatchConversationsCobrowsesessionParticipantCommunication: (...args) => callOperation("patchConversationsCobrowsesessionParticipantCommunication", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsCobrowsesessionParticipantCommunication">)),
    PatchConversationSecureattributes: (...args) => callOperation("patchConversationSecureattributes", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationSecureattributes">)),
    PatchConversationsEmail: (...args) => callOperation("patchConversationsEmail", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsEmail">)),
    PatchConversationsEmailMessagesDraft: (...args) => callOperation("patchConversationsEmailMessagesDraft", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsEmailMessagesDraft">)),
    PatchConversationsEmailParticipant: (...args) => callOperation("patchConversationsEmailParticipant", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsEmailParticipant">)),
    PatchConversationsEmailParticipantAttributes: (...args) => callOperation("patchConversationsEmailParticipantAttributes", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsEmailParticipantAttributes">)),
    PatchConversationsEmailParticipantCommunication: (...args) => callOperation("patchConversationsEmailParticipantCommunication", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsEmailParticipantCommunication">)),
    PatchConversationsEmailParticipantParkingstate: (...args) => callOperation("patchConversationsEmailParticipantParkingstate", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsEmailParticipantParkingstate">)),
    PatchConversationsMessage: (...args) => callOperation("patchConversationsMessage", ...(args as GenesysCloudFullApiOperationArgs<"patchConversationsMessage">)),
  };
}
