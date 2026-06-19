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
export const GenesysCloudFullApiConversations01OperationKeys = [
  "deleteConversation",
  "deleteConversationCustomattribute",
  "deleteConversationParticipantCode",
  "deleteConversationParticipantFlaggedreason",
  "deleteConversationsCallParticipantCommunicationPostflowaction",
  "deleteConversationsCallParticipantConsult",
  "deleteConversationsEmailMessagesDraftAttachment",
  "deleteConversationsMessagesCachedmediaCachedMediaItemId",
  "deleteConversationsMessagingIntegrationsAppleIntegrationId",
  "deleteConversationsMessagingIntegrationsFacebookIntegrationId",
  "deleteConversationsMessagingIntegrationsInstagramIntegrationId",
  "deleteConversationsMessagingIntegrationsOpenIntegrationId",
  "deleteConversationsMessagingIntegrationsTwitterIntegrationId",
  "deleteConversationsMessagingIntegrationsWhatsappIntegrationId",
  "deleteConversationsMessagingSetting",
  "deleteConversationsMessagingSettingsDefault",
  "deleteConversationsMessagingSupportedcontentSupportedContentId",
  "getConversation",
  "getConversationCommunicationAgentchecklist",
  "getConversationCommunicationAgentchecklistJob",
  "getConversationCommunicationAgentchecklists",
  "getConversationCommunicationInternalmessage",
  "getConversationCommunicationInternalmessages",
  "getConversationCustomattribute",
  "getConversationCustomattributes",
  "getConversationParticipantSecureivrsession",
  "getConversationParticipantSecureivrsessions",
  "getConversationParticipantWrapup",
  "getConversationParticipantWrapupcodes",
  "getConversations",
  "getConversationsCall",
  "getConversationsCallback",
  "getConversationsCallbackParticipantCommunicationWrapup",
  "getConversationsCallbackParticipantWrapup",
  "getConversationsCallbackParticipantWrapupcodes",
  "getConversationsCallbacks",
  "getConversationsCallParticipantCommunicationWrapup",
  "getConversationsCallParticipantWrapup",
  "getConversationsCallParticipantWrapupcodes",
  "getConversationsCalls",
  "getConversationsCallsHistory",
  "getConversationsCallsMaximumconferenceparties",
  "getConversationsChat",
  "getConversationsChatMessage",
  "getConversationsChatMessages",
  "getConversationsChatParticipantCommunicationWrapup",
  "getConversationsChatParticipantWrapup",
  "getConversationsChatParticipantWrapupcodes",
  "getConversationsChats",
  "getConversationsCobrowsesession",
  "getConversationsCobrowsesessionParticipantCommunicationWrapup",
  "getConversationsCobrowsesessionParticipantWrapup",
  "getConversationsCobrowsesessionParticipantWrapupcodes",
  "getConversationsCobrowsesessions",
  "getConversationsCustomattributesSchema",
  "getConversationsCustomattributesSchemas",
  "getConversationsCustomattributesSchemasCoretype",
  "getConversationsCustomattributesSchemasCoretypes",
  "getConversationsCustomattributesSchemasLimits",
  "getConversationsCustomattributesSchemaVersion",
  "getConversationsCustomattributesSchemaVersions",
  "getConversationSecureattributes",
  "getConversationsEmail",
  "getConversationsEmailMessage",
  "getConversationsEmailMessages",
  "getConversationsEmailMessagesDraft",
  "getConversationsEmailParticipantCommunicationWrapup",
  "getConversationsEmailParticipantWrapup",
  "getConversationsEmailParticipantWrapupcodes",
  "getConversationsEmails",
  "getConversationsEmailSettings",
  "getConversationsInternalmessage",
  "getConversationsInternalmessages",
  "getConversationsKeyconfiguration",
  "getConversationsKeyconfigurations",
  "getConversationsMessage",
  "getConversationsMessageCommunicationMessagesMedia",
  "getConversationsMessageCommunicationMessagesMediaMediaId",
  "getConversationsMessageDetails",
  "getConversationsMessageMessage"
] as const;
export type GenesysCloudFullApiConversations01OperationKey = typeof GenesysCloudFullApiConversations01OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiConversations01OperationPathParamMap {
  "deleteConversation": { "conversationId": GenesysCloudFullApiPathParamValue };
  "deleteConversationCustomattribute": { "conversationId": GenesysCloudFullApiPathParamValue; "attributesId": GenesysCloudFullApiPathParamValue };
  "deleteConversationParticipantCode": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "addCommunicationCode": GenesysCloudFullApiPathParamValue };
  "deleteConversationParticipantFlaggedreason": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "deleteConversationsCallParticipantCommunicationPostflowaction": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "deleteConversationsCallParticipantConsult": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "deleteConversationsEmailMessagesDraftAttachment": { "conversationId": GenesysCloudFullApiPathParamValue; "attachmentId": GenesysCloudFullApiPathParamValue };
  "deleteConversationsMessagesCachedmediaCachedMediaItemId": { "cachedMediaItemId": GenesysCloudFullApiPathParamValue };
  "deleteConversationsMessagingIntegrationsAppleIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "deleteConversationsMessagingIntegrationsFacebookIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "deleteConversationsMessagingIntegrationsInstagramIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "deleteConversationsMessagingIntegrationsOpenIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "deleteConversationsMessagingIntegrationsTwitterIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "deleteConversationsMessagingIntegrationsWhatsappIntegrationId": { "integrationId": GenesysCloudFullApiPathParamValue };
  "deleteConversationsMessagingSetting": { "messageSettingId": GenesysCloudFullApiPathParamValue };
  "deleteConversationsMessagingSettingsDefault": {};
  "deleteConversationsMessagingSupportedcontentSupportedContentId": { "supportedContentId": GenesysCloudFullApiPathParamValue };
  "getConversation": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationCommunicationAgentchecklist": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue; "agentChecklistId": GenesysCloudFullApiPathParamValue };
  "getConversationCommunicationAgentchecklistJob": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue; "agentChecklistId": GenesysCloudFullApiPathParamValue; "jobId": GenesysCloudFullApiPathParamValue };
  "getConversationCommunicationAgentchecklists": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getConversationCommunicationInternalmessage": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue; "messageId": GenesysCloudFullApiPathParamValue };
  "getConversationCommunicationInternalmessages": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getConversationCustomattribute": { "conversationId": GenesysCloudFullApiPathParamValue; "attributesId": GenesysCloudFullApiPathParamValue };
  "getConversationCustomattributes": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationParticipantSecureivrsession": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "secureSessionId": GenesysCloudFullApiPathParamValue };
  "getConversationParticipantSecureivrsessions": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationParticipantWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationParticipantWrapupcodes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversations": {};
  "getConversationsCall": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsCallback": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsCallbackParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getConversationsCallbackParticipantWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationsCallbackParticipantWrapupcodes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationsCallbacks": {};
  "getConversationsCallParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getConversationsCallParticipantWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationsCallParticipantWrapupcodes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationsCalls": {};
  "getConversationsCallsHistory": {};
  "getConversationsCallsMaximumconferenceparties": {};
  "getConversationsChat": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsChatMessage": { "conversationId": GenesysCloudFullApiPathParamValue; "messageId": GenesysCloudFullApiPathParamValue };
  "getConversationsChatMessages": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsChatParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getConversationsChatParticipantWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationsChatParticipantWrapupcodes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationsChats": {};
  "getConversationsCobrowsesession": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsCobrowsesessionParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getConversationsCobrowsesessionParticipantWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationsCobrowsesessionParticipantWrapupcodes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationsCobrowsesessions": {};
  "getConversationsCustomattributesSchema": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getConversationsCustomattributesSchemas": {};
  "getConversationsCustomattributesSchemasCoretype": { "coreTypeName": GenesysCloudFullApiPathParamValue };
  "getConversationsCustomattributesSchemasCoretypes": {};
  "getConversationsCustomattributesSchemasLimits": {};
  "getConversationsCustomattributesSchemaVersion": { "schemaId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
  "getConversationsCustomattributesSchemaVersions": { "schemaId": GenesysCloudFullApiPathParamValue };
  "getConversationSecureattributes": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsEmail": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsEmailMessage": { "conversationId": GenesysCloudFullApiPathParamValue; "messageId": GenesysCloudFullApiPathParamValue };
  "getConversationsEmailMessages": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsEmailMessagesDraft": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsEmailParticipantCommunicationWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getConversationsEmailParticipantWrapup": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationsEmailParticipantWrapupcodes": { "conversationId": GenesysCloudFullApiPathParamValue; "participantId": GenesysCloudFullApiPathParamValue };
  "getConversationsEmails": {};
  "getConversationsEmailSettings": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsInternalmessage": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsInternalmessages": {};
  "getConversationsKeyconfiguration": { "keyconfigurationsId": GenesysCloudFullApiPathParamValue };
  "getConversationsKeyconfigurations": {};
  "getConversationsMessage": { "conversationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessageCommunicationMessagesMedia": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessageCommunicationMessagesMediaMediaId": { "conversationId": GenesysCloudFullApiPathParamValue; "communicationId": GenesysCloudFullApiPathParamValue; "mediaId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessageDetails": { "messageId": GenesysCloudFullApiPathParamValue };
  "getConversationsMessageMessage": { "conversationId": GenesysCloudFullApiPathParamValue; "messageId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiConversations01OperationRequestMap {
  "deleteConversation": GenesysCloudFullApiOperationInput<"deleteConversation">;
  "deleteConversationCustomattribute": GenesysCloudFullApiOperationInput<"deleteConversationCustomattribute">;
  "deleteConversationParticipantCode": GenesysCloudFullApiOperationInput<"deleteConversationParticipantCode">;
  "deleteConversationParticipantFlaggedreason": GenesysCloudFullApiOperationInput<"deleteConversationParticipantFlaggedreason">;
  "deleteConversationsCallParticipantCommunicationPostflowaction": GenesysCloudFullApiOperationInput<"deleteConversationsCallParticipantCommunicationPostflowaction">;
  "deleteConversationsCallParticipantConsult": GenesysCloudFullApiOperationInput<"deleteConversationsCallParticipantConsult">;
  "deleteConversationsEmailMessagesDraftAttachment": GenesysCloudFullApiOperationInput<"deleteConversationsEmailMessagesDraftAttachment">;
  "deleteConversationsMessagesCachedmediaCachedMediaItemId": GenesysCloudFullApiOperationInput<"deleteConversationsMessagesCachedmediaCachedMediaItemId">;
  "deleteConversationsMessagingIntegrationsAppleIntegrationId": GenesysCloudFullApiOperationInput<"deleteConversationsMessagingIntegrationsAppleIntegrationId">;
  "deleteConversationsMessagingIntegrationsFacebookIntegrationId": GenesysCloudFullApiOperationInput<"deleteConversationsMessagingIntegrationsFacebookIntegrationId">;
  "deleteConversationsMessagingIntegrationsInstagramIntegrationId": GenesysCloudFullApiOperationInput<"deleteConversationsMessagingIntegrationsInstagramIntegrationId">;
  "deleteConversationsMessagingIntegrationsOpenIntegrationId": GenesysCloudFullApiOperationInput<"deleteConversationsMessagingIntegrationsOpenIntegrationId">;
  "deleteConversationsMessagingIntegrationsTwitterIntegrationId": GenesysCloudFullApiOperationInput<"deleteConversationsMessagingIntegrationsTwitterIntegrationId">;
  "deleteConversationsMessagingIntegrationsWhatsappIntegrationId": GenesysCloudFullApiOperationInput<"deleteConversationsMessagingIntegrationsWhatsappIntegrationId">;
  "deleteConversationsMessagingSetting": GenesysCloudFullApiOperationInput<"deleteConversationsMessagingSetting">;
  "deleteConversationsMessagingSettingsDefault": GenesysCloudFullApiOperationInput<"deleteConversationsMessagingSettingsDefault">;
  "deleteConversationsMessagingSupportedcontentSupportedContentId": GenesysCloudFullApiOperationInput<"deleteConversationsMessagingSupportedcontentSupportedContentId">;
  "getConversation": GenesysCloudFullApiOperationInput<"getConversation">;
  "getConversationCommunicationAgentchecklist": GenesysCloudFullApiOperationInput<"getConversationCommunicationAgentchecklist">;
  "getConversationCommunicationAgentchecklistJob": GenesysCloudFullApiOperationInput<"getConversationCommunicationAgentchecklistJob">;
  "getConversationCommunicationAgentchecklists": GenesysCloudFullApiOperationInput<"getConversationCommunicationAgentchecklists">;
  "getConversationCommunicationInternalmessage": GenesysCloudFullApiOperationInput<"getConversationCommunicationInternalmessage">;
  "getConversationCommunicationInternalmessages": GenesysCloudFullApiOperationInput<"getConversationCommunicationInternalmessages">;
  "getConversationCustomattribute": GenesysCloudFullApiOperationInput<"getConversationCustomattribute">;
  "getConversationCustomattributes": GenesysCloudFullApiOperationInput<"getConversationCustomattributes">;
  "getConversationParticipantSecureivrsession": GenesysCloudFullApiOperationInput<"getConversationParticipantSecureivrsession">;
  "getConversationParticipantSecureivrsessions": GenesysCloudFullApiOperationInput<"getConversationParticipantSecureivrsessions">;
  "getConversationParticipantWrapup": GenesysCloudFullApiOperationInput<"getConversationParticipantWrapup">;
  "getConversationParticipantWrapupcodes": GenesysCloudFullApiOperationInput<"getConversationParticipantWrapupcodes">;
  "getConversations": GenesysCloudFullApiOperationInput<"getConversations">;
  "getConversationsCall": GenesysCloudFullApiOperationInput<"getConversationsCall">;
  "getConversationsCallback": GenesysCloudFullApiOperationInput<"getConversationsCallback">;
  "getConversationsCallbackParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"getConversationsCallbackParticipantCommunicationWrapup">;
  "getConversationsCallbackParticipantWrapup": GenesysCloudFullApiOperationInput<"getConversationsCallbackParticipantWrapup">;
  "getConversationsCallbackParticipantWrapupcodes": GenesysCloudFullApiOperationInput<"getConversationsCallbackParticipantWrapupcodes">;
  "getConversationsCallbacks": GenesysCloudFullApiOperationInput<"getConversationsCallbacks">;
  "getConversationsCallParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"getConversationsCallParticipantCommunicationWrapup">;
  "getConversationsCallParticipantWrapup": GenesysCloudFullApiOperationInput<"getConversationsCallParticipantWrapup">;
  "getConversationsCallParticipantWrapupcodes": GenesysCloudFullApiOperationInput<"getConversationsCallParticipantWrapupcodes">;
  "getConversationsCalls": GenesysCloudFullApiOperationInput<"getConversationsCalls">;
  "getConversationsCallsHistory": GenesysCloudFullApiOperationInput<"getConversationsCallsHistory">;
  "getConversationsCallsMaximumconferenceparties": GenesysCloudFullApiOperationInput<"getConversationsCallsMaximumconferenceparties">;
  "getConversationsChat": GenesysCloudFullApiOperationInput<"getConversationsChat">;
  "getConversationsChatMessage": GenesysCloudFullApiOperationInput<"getConversationsChatMessage">;
  "getConversationsChatMessages": GenesysCloudFullApiOperationInput<"getConversationsChatMessages">;
  "getConversationsChatParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"getConversationsChatParticipantCommunicationWrapup">;
  "getConversationsChatParticipantWrapup": GenesysCloudFullApiOperationInput<"getConversationsChatParticipantWrapup">;
  "getConversationsChatParticipantWrapupcodes": GenesysCloudFullApiOperationInput<"getConversationsChatParticipantWrapupcodes">;
  "getConversationsChats": GenesysCloudFullApiOperationInput<"getConversationsChats">;
  "getConversationsCobrowsesession": GenesysCloudFullApiOperationInput<"getConversationsCobrowsesession">;
  "getConversationsCobrowsesessionParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"getConversationsCobrowsesessionParticipantCommunicationWrapup">;
  "getConversationsCobrowsesessionParticipantWrapup": GenesysCloudFullApiOperationInput<"getConversationsCobrowsesessionParticipantWrapup">;
  "getConversationsCobrowsesessionParticipantWrapupcodes": GenesysCloudFullApiOperationInput<"getConversationsCobrowsesessionParticipantWrapupcodes">;
  "getConversationsCobrowsesessions": GenesysCloudFullApiOperationInput<"getConversationsCobrowsesessions">;
  "getConversationsCustomattributesSchema": GenesysCloudFullApiOperationInput<"getConversationsCustomattributesSchema">;
  "getConversationsCustomattributesSchemas": GenesysCloudFullApiOperationInput<"getConversationsCustomattributesSchemas">;
  "getConversationsCustomattributesSchemasCoretype": GenesysCloudFullApiOperationInput<"getConversationsCustomattributesSchemasCoretype">;
  "getConversationsCustomattributesSchemasCoretypes": GenesysCloudFullApiOperationInput<"getConversationsCustomattributesSchemasCoretypes">;
  "getConversationsCustomattributesSchemasLimits": GenesysCloudFullApiOperationInput<"getConversationsCustomattributesSchemasLimits">;
  "getConversationsCustomattributesSchemaVersion": GenesysCloudFullApiOperationInput<"getConversationsCustomattributesSchemaVersion">;
  "getConversationsCustomattributesSchemaVersions": GenesysCloudFullApiOperationInput<"getConversationsCustomattributesSchemaVersions">;
  "getConversationSecureattributes": GenesysCloudFullApiOperationInput<"getConversationSecureattributes">;
  "getConversationsEmail": GenesysCloudFullApiOperationInput<"getConversationsEmail">;
  "getConversationsEmailMessage": GenesysCloudFullApiOperationInput<"getConversationsEmailMessage">;
  "getConversationsEmailMessages": GenesysCloudFullApiOperationInput<"getConversationsEmailMessages">;
  "getConversationsEmailMessagesDraft": GenesysCloudFullApiOperationInput<"getConversationsEmailMessagesDraft">;
  "getConversationsEmailParticipantCommunicationWrapup": GenesysCloudFullApiOperationInput<"getConversationsEmailParticipantCommunicationWrapup">;
  "getConversationsEmailParticipantWrapup": GenesysCloudFullApiOperationInput<"getConversationsEmailParticipantWrapup">;
  "getConversationsEmailParticipantWrapupcodes": GenesysCloudFullApiOperationInput<"getConversationsEmailParticipantWrapupcodes">;
  "getConversationsEmails": GenesysCloudFullApiOperationInput<"getConversationsEmails">;
  "getConversationsEmailSettings": GenesysCloudFullApiOperationInput<"getConversationsEmailSettings">;
  "getConversationsInternalmessage": GenesysCloudFullApiOperationInput<"getConversationsInternalmessage">;
  "getConversationsInternalmessages": GenesysCloudFullApiOperationInput<"getConversationsInternalmessages">;
  "getConversationsKeyconfiguration": GenesysCloudFullApiOperationInput<"getConversationsKeyconfiguration">;
  "getConversationsKeyconfigurations": GenesysCloudFullApiOperationInput<"getConversationsKeyconfigurations">;
  "getConversationsMessage": GenesysCloudFullApiOperationInput<"getConversationsMessage">;
  "getConversationsMessageCommunicationMessagesMedia": GenesysCloudFullApiOperationInput<"getConversationsMessageCommunicationMessagesMedia">;
  "getConversationsMessageCommunicationMessagesMediaMediaId": GenesysCloudFullApiOperationInput<"getConversationsMessageCommunicationMessagesMediaMediaId">;
  "getConversationsMessageDetails": GenesysCloudFullApiOperationInput<"getConversationsMessageDetails">;
  "getConversationsMessageMessage": GenesysCloudFullApiOperationInput<"getConversationsMessageMessage">;
}

export interface GenesysCloudFullApiConversations01GeneratedClient {
  DeleteConversation(...args: GenesysCloudFullApiOperationArgs<"deleteConversation">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversation"]>;
  DeleteConversationCustomattribute(...args: GenesysCloudFullApiOperationArgs<"deleteConversationCustomattribute">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationCustomattribute"]>;
  DeleteConversationParticipantCode(...args: GenesysCloudFullApiOperationArgs<"deleteConversationParticipantCode">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationParticipantCode"]>;
  DeleteConversationParticipantFlaggedreason(...args: GenesysCloudFullApiOperationArgs<"deleteConversationParticipantFlaggedreason">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationParticipantFlaggedreason"]>;
  DeleteConversationsCallParticipantCommunicationPostflowaction(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsCallParticipantCommunicationPostflowaction">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsCallParticipantCommunicationPostflowaction"]>;
  DeleteConversationsCallParticipantConsult(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsCallParticipantConsult">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsCallParticipantConsult"]>;
  DeleteConversationsEmailMessagesDraftAttachment(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsEmailMessagesDraftAttachment">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsEmailMessagesDraftAttachment"]>;
  DeleteConversationsMessagesCachedmediaCachedMediaItemId(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsMessagesCachedmediaCachedMediaItemId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsMessagesCachedmediaCachedMediaItemId"]>;
  DeleteConversationsMessagingIntegrationsAppleIntegrationId(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingIntegrationsAppleIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsMessagingIntegrationsAppleIntegrationId"]>;
  DeleteConversationsMessagingIntegrationsFacebookIntegrationId(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingIntegrationsFacebookIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsMessagingIntegrationsFacebookIntegrationId"]>;
  DeleteConversationsMessagingIntegrationsInstagramIntegrationId(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingIntegrationsInstagramIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsMessagingIntegrationsInstagramIntegrationId"]>;
  DeleteConversationsMessagingIntegrationsOpenIntegrationId(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingIntegrationsOpenIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsMessagingIntegrationsOpenIntegrationId"]>;
  DeleteConversationsMessagingIntegrationsTwitterIntegrationId(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingIntegrationsTwitterIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsMessagingIntegrationsTwitterIntegrationId"]>;
  DeleteConversationsMessagingIntegrationsWhatsappIntegrationId(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingIntegrationsWhatsappIntegrationId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsMessagingIntegrationsWhatsappIntegrationId"]>;
  DeleteConversationsMessagingSetting(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingSetting">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsMessagingSetting"]>;
  DeleteConversationsMessagingSettingsDefault(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingSettingsDefault">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsMessagingSettingsDefault"]>;
  DeleteConversationsMessagingSupportedcontentSupportedContentId(...args: GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingSupportedcontentSupportedContentId">): Promise<GenesysCloudFullApiOperationResponseMap["deleteConversationsMessagingSupportedcontentSupportedContentId"]>;
  GetConversation(...args: GenesysCloudFullApiOperationArgs<"getConversation">): Promise<GenesysCloudFullApiOperationResponseMap["getConversation"]>;
  GetConversationCommunicationAgentchecklist(...args: GenesysCloudFullApiOperationArgs<"getConversationCommunicationAgentchecklist">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationCommunicationAgentchecklist"]>;
  GetConversationCommunicationAgentchecklistJob(...args: GenesysCloudFullApiOperationArgs<"getConversationCommunicationAgentchecklistJob">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationCommunicationAgentchecklistJob"]>;
  GetConversationCommunicationAgentchecklists(...args: GenesysCloudFullApiOperationArgs<"getConversationCommunicationAgentchecklists">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationCommunicationAgentchecklists"]>;
  GetConversationCommunicationInternalmessage(...args: GenesysCloudFullApiOperationArgs<"getConversationCommunicationInternalmessage">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationCommunicationInternalmessage"]>;
  GetConversationCommunicationInternalmessages(...args: GenesysCloudFullApiOperationArgs<"getConversationCommunicationInternalmessages">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationCommunicationInternalmessages"]>;
  GetConversationCustomattribute(...args: GenesysCloudFullApiOperationArgs<"getConversationCustomattribute">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationCustomattribute"]>;
  GetConversationCustomattributes(...args: GenesysCloudFullApiOperationArgs<"getConversationCustomattributes">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationCustomattributes"]>;
  GetConversationParticipantSecureivrsession(...args: GenesysCloudFullApiOperationArgs<"getConversationParticipantSecureivrsession">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationParticipantSecureivrsession"]>;
  GetConversationParticipantSecureivrsessions(...args: GenesysCloudFullApiOperationArgs<"getConversationParticipantSecureivrsessions">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationParticipantSecureivrsessions"]>;
  GetConversationParticipantWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationParticipantWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationParticipantWrapup"]>;
  GetConversationParticipantWrapupcodes(...args: GenesysCloudFullApiOperationArgs<"getConversationParticipantWrapupcodes">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationParticipantWrapupcodes"]>;
  GetConversations(...args: GenesysCloudFullApiOperationArgs<"getConversations">): Promise<GenesysCloudFullApiOperationResponseMap["getConversations"]>;
  GetConversationsCall(...args: GenesysCloudFullApiOperationArgs<"getConversationsCall">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCall"]>;
  GetConversationsCallback(...args: GenesysCloudFullApiOperationArgs<"getConversationsCallback">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCallback"]>;
  GetConversationsCallbackParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsCallbackParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCallbackParticipantCommunicationWrapup"]>;
  GetConversationsCallbackParticipantWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsCallbackParticipantWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCallbackParticipantWrapup"]>;
  GetConversationsCallbackParticipantWrapupcodes(...args: GenesysCloudFullApiOperationArgs<"getConversationsCallbackParticipantWrapupcodes">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCallbackParticipantWrapupcodes"]>;
  GetConversationsCallbacks(...args: GenesysCloudFullApiOperationArgs<"getConversationsCallbacks">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCallbacks"]>;
  GetConversationsCallParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsCallParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCallParticipantCommunicationWrapup"]>;
  GetConversationsCallParticipantWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsCallParticipantWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCallParticipantWrapup"]>;
  GetConversationsCallParticipantWrapupcodes(...args: GenesysCloudFullApiOperationArgs<"getConversationsCallParticipantWrapupcodes">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCallParticipantWrapupcodes"]>;
  GetConversationsCalls(...args: GenesysCloudFullApiOperationArgs<"getConversationsCalls">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCalls"]>;
  GetConversationsCallsHistory(...args: GenesysCloudFullApiOperationArgs<"getConversationsCallsHistory">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCallsHistory"]>;
  GetConversationsCallsMaximumconferenceparties(...args: GenesysCloudFullApiOperationArgs<"getConversationsCallsMaximumconferenceparties">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCallsMaximumconferenceparties"]>;
  GetConversationsChat(...args: GenesysCloudFullApiOperationArgs<"getConversationsChat">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsChat"]>;
  GetConversationsChatMessage(...args: GenesysCloudFullApiOperationArgs<"getConversationsChatMessage">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsChatMessage"]>;
  GetConversationsChatMessages(...args: GenesysCloudFullApiOperationArgs<"getConversationsChatMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsChatMessages"]>;
  GetConversationsChatParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsChatParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsChatParticipantCommunicationWrapup"]>;
  GetConversationsChatParticipantWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsChatParticipantWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsChatParticipantWrapup"]>;
  GetConversationsChatParticipantWrapupcodes(...args: GenesysCloudFullApiOperationArgs<"getConversationsChatParticipantWrapupcodes">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsChatParticipantWrapupcodes"]>;
  GetConversationsChats(...args: GenesysCloudFullApiOperationArgs<"getConversationsChats">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsChats"]>;
  GetConversationsCobrowsesession(...args: GenesysCloudFullApiOperationArgs<"getConversationsCobrowsesession">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCobrowsesession"]>;
  GetConversationsCobrowsesessionParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsCobrowsesessionParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCobrowsesessionParticipantCommunicationWrapup"]>;
  GetConversationsCobrowsesessionParticipantWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsCobrowsesessionParticipantWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCobrowsesessionParticipantWrapup"]>;
  GetConversationsCobrowsesessionParticipantWrapupcodes(...args: GenesysCloudFullApiOperationArgs<"getConversationsCobrowsesessionParticipantWrapupcodes">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCobrowsesessionParticipantWrapupcodes"]>;
  GetConversationsCobrowsesessions(...args: GenesysCloudFullApiOperationArgs<"getConversationsCobrowsesessions">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCobrowsesessions"]>;
  GetConversationsCustomattributesSchema(...args: GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchema">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCustomattributesSchema"]>;
  GetConversationsCustomattributesSchemas(...args: GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchemas">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCustomattributesSchemas"]>;
  GetConversationsCustomattributesSchemasCoretype(...args: GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchemasCoretype">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCustomattributesSchemasCoretype"]>;
  GetConversationsCustomattributesSchemasCoretypes(...args: GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchemasCoretypes">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCustomattributesSchemasCoretypes"]>;
  GetConversationsCustomattributesSchemasLimits(...args: GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchemasLimits">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCustomattributesSchemasLimits"]>;
  GetConversationsCustomattributesSchemaVersion(...args: GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchemaVersion">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCustomattributesSchemaVersion"]>;
  GetConversationsCustomattributesSchemaVersions(...args: GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchemaVersions">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsCustomattributesSchemaVersions"]>;
  GetConversationSecureattributes(...args: GenesysCloudFullApiOperationArgs<"getConversationSecureattributes">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationSecureattributes"]>;
  GetConversationsEmail(...args: GenesysCloudFullApiOperationArgs<"getConversationsEmail">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsEmail"]>;
  GetConversationsEmailMessage(...args: GenesysCloudFullApiOperationArgs<"getConversationsEmailMessage">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsEmailMessage"]>;
  GetConversationsEmailMessages(...args: GenesysCloudFullApiOperationArgs<"getConversationsEmailMessages">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsEmailMessages"]>;
  GetConversationsEmailMessagesDraft(...args: GenesysCloudFullApiOperationArgs<"getConversationsEmailMessagesDraft">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsEmailMessagesDraft"]>;
  GetConversationsEmailParticipantCommunicationWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsEmailParticipantCommunicationWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsEmailParticipantCommunicationWrapup"]>;
  GetConversationsEmailParticipantWrapup(...args: GenesysCloudFullApiOperationArgs<"getConversationsEmailParticipantWrapup">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsEmailParticipantWrapup"]>;
  GetConversationsEmailParticipantWrapupcodes(...args: GenesysCloudFullApiOperationArgs<"getConversationsEmailParticipantWrapupcodes">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsEmailParticipantWrapupcodes"]>;
  GetConversationsEmails(...args: GenesysCloudFullApiOperationArgs<"getConversationsEmails">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsEmails"]>;
  GetConversationsEmailSettings(...args: GenesysCloudFullApiOperationArgs<"getConversationsEmailSettings">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsEmailSettings"]>;
  GetConversationsInternalmessage(...args: GenesysCloudFullApiOperationArgs<"getConversationsInternalmessage">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsInternalmessage"]>;
  GetConversationsInternalmessages(...args: GenesysCloudFullApiOperationArgs<"getConversationsInternalmessages">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsInternalmessages"]>;
  GetConversationsKeyconfiguration(...args: GenesysCloudFullApiOperationArgs<"getConversationsKeyconfiguration">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsKeyconfiguration"]>;
  GetConversationsKeyconfigurations(...args: GenesysCloudFullApiOperationArgs<"getConversationsKeyconfigurations">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsKeyconfigurations"]>;
  GetConversationsMessage(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessage">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessage"]>;
  GetConversationsMessageCommunicationMessagesMedia(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessageCommunicationMessagesMedia">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessageCommunicationMessagesMedia"]>;
  GetConversationsMessageCommunicationMessagesMediaMediaId(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessageCommunicationMessagesMediaMediaId">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessageCommunicationMessagesMediaMediaId"]>;
  GetConversationsMessageDetails(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessageDetails">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessageDetails"]>;
  GetConversationsMessageMessage(...args: GenesysCloudFullApiOperationArgs<"getConversationsMessageMessage">): Promise<GenesysCloudFullApiOperationResponseMap["getConversationsMessageMessage"]>;
}

export const GenesysCloudFullApiConversations01GeneratedFunctionNames = [
  "DeleteConversation",
  "DeleteConversationCustomattribute",
  "DeleteConversationParticipantCode",
  "DeleteConversationParticipantFlaggedreason",
  "DeleteConversationsCallParticipantCommunicationPostflowaction",
  "DeleteConversationsCallParticipantConsult",
  "DeleteConversationsEmailMessagesDraftAttachment",
  "DeleteConversationsMessagesCachedmediaCachedMediaItemId",
  "DeleteConversationsMessagingIntegrationsAppleIntegrationId",
  "DeleteConversationsMessagingIntegrationsFacebookIntegrationId",
  "DeleteConversationsMessagingIntegrationsInstagramIntegrationId",
  "DeleteConversationsMessagingIntegrationsOpenIntegrationId",
  "DeleteConversationsMessagingIntegrationsTwitterIntegrationId",
  "DeleteConversationsMessagingIntegrationsWhatsappIntegrationId",
  "DeleteConversationsMessagingSetting",
  "DeleteConversationsMessagingSettingsDefault",
  "DeleteConversationsMessagingSupportedcontentSupportedContentId",
  "GetConversation",
  "GetConversationCommunicationAgentchecklist",
  "GetConversationCommunicationAgentchecklistJob",
  "GetConversationCommunicationAgentchecklists",
  "GetConversationCommunicationInternalmessage",
  "GetConversationCommunicationInternalmessages",
  "GetConversationCustomattribute",
  "GetConversationCustomattributes",
  "GetConversationParticipantSecureivrsession",
  "GetConversationParticipantSecureivrsessions",
  "GetConversationParticipantWrapup",
  "GetConversationParticipantWrapupcodes",
  "GetConversations",
  "GetConversationsCall",
  "GetConversationsCallback",
  "GetConversationsCallbackParticipantCommunicationWrapup",
  "GetConversationsCallbackParticipantWrapup",
  "GetConversationsCallbackParticipantWrapupcodes",
  "GetConversationsCallbacks",
  "GetConversationsCallParticipantCommunicationWrapup",
  "GetConversationsCallParticipantWrapup",
  "GetConversationsCallParticipantWrapupcodes",
  "GetConversationsCalls",
  "GetConversationsCallsHistory",
  "GetConversationsCallsMaximumconferenceparties",
  "GetConversationsChat",
  "GetConversationsChatMessage",
  "GetConversationsChatMessages",
  "GetConversationsChatParticipantCommunicationWrapup",
  "GetConversationsChatParticipantWrapup",
  "GetConversationsChatParticipantWrapupcodes",
  "GetConversationsChats",
  "GetConversationsCobrowsesession",
  "GetConversationsCobrowsesessionParticipantCommunicationWrapup",
  "GetConversationsCobrowsesessionParticipantWrapup",
  "GetConversationsCobrowsesessionParticipantWrapupcodes",
  "GetConversationsCobrowsesessions",
  "GetConversationsCustomattributesSchema",
  "GetConversationsCustomattributesSchemas",
  "GetConversationsCustomattributesSchemasCoretype",
  "GetConversationsCustomattributesSchemasCoretypes",
  "GetConversationsCustomattributesSchemasLimits",
  "GetConversationsCustomattributesSchemaVersion",
  "GetConversationsCustomattributesSchemaVersions",
  "GetConversationSecureattributes",
  "GetConversationsEmail",
  "GetConversationsEmailMessage",
  "GetConversationsEmailMessages",
  "GetConversationsEmailMessagesDraft",
  "GetConversationsEmailParticipantCommunicationWrapup",
  "GetConversationsEmailParticipantWrapup",
  "GetConversationsEmailParticipantWrapupcodes",
  "GetConversationsEmails",
  "GetConversationsEmailSettings",
  "GetConversationsInternalmessage",
  "GetConversationsInternalmessages",
  "GetConversationsKeyconfiguration",
  "GetConversationsKeyconfigurations",
  "GetConversationsMessage",
  "GetConversationsMessageCommunicationMessagesMedia",
  "GetConversationsMessageCommunicationMessagesMediaMediaId",
  "GetConversationsMessageDetails",
  "GetConversationsMessageMessage"
] as const satisfies readonly (keyof GenesysCloudFullApiConversations01GeneratedClient)[];

export function createGenesysCloudFullApiConversations01GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiConversations01GeneratedClient {
  return {
    DeleteConversation: (...args) => callOperation("deleteConversation", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversation">)),
    DeleteConversationCustomattribute: (...args) => callOperation("deleteConversationCustomattribute", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationCustomattribute">)),
    DeleteConversationParticipantCode: (...args) => callOperation("deleteConversationParticipantCode", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationParticipantCode">)),
    DeleteConversationParticipantFlaggedreason: (...args) => callOperation("deleteConversationParticipantFlaggedreason", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationParticipantFlaggedreason">)),
    DeleteConversationsCallParticipantCommunicationPostflowaction: (...args) => callOperation("deleteConversationsCallParticipantCommunicationPostflowaction", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsCallParticipantCommunicationPostflowaction">)),
    DeleteConversationsCallParticipantConsult: (...args) => callOperation("deleteConversationsCallParticipantConsult", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsCallParticipantConsult">)),
    DeleteConversationsEmailMessagesDraftAttachment: (...args) => callOperation("deleteConversationsEmailMessagesDraftAttachment", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsEmailMessagesDraftAttachment">)),
    DeleteConversationsMessagesCachedmediaCachedMediaItemId: (...args) => callOperation("deleteConversationsMessagesCachedmediaCachedMediaItemId", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsMessagesCachedmediaCachedMediaItemId">)),
    DeleteConversationsMessagingIntegrationsAppleIntegrationId: (...args) => callOperation("deleteConversationsMessagingIntegrationsAppleIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingIntegrationsAppleIntegrationId">)),
    DeleteConversationsMessagingIntegrationsFacebookIntegrationId: (...args) => callOperation("deleteConversationsMessagingIntegrationsFacebookIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingIntegrationsFacebookIntegrationId">)),
    DeleteConversationsMessagingIntegrationsInstagramIntegrationId: (...args) => callOperation("deleteConversationsMessagingIntegrationsInstagramIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingIntegrationsInstagramIntegrationId">)),
    DeleteConversationsMessagingIntegrationsOpenIntegrationId: (...args) => callOperation("deleteConversationsMessagingIntegrationsOpenIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingIntegrationsOpenIntegrationId">)),
    DeleteConversationsMessagingIntegrationsTwitterIntegrationId: (...args) => callOperation("deleteConversationsMessagingIntegrationsTwitterIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingIntegrationsTwitterIntegrationId">)),
    DeleteConversationsMessagingIntegrationsWhatsappIntegrationId: (...args) => callOperation("deleteConversationsMessagingIntegrationsWhatsappIntegrationId", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingIntegrationsWhatsappIntegrationId">)),
    DeleteConversationsMessagingSetting: (...args) => callOperation("deleteConversationsMessagingSetting", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingSetting">)),
    DeleteConversationsMessagingSettingsDefault: (...args) => callOperation("deleteConversationsMessagingSettingsDefault", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingSettingsDefault">)),
    DeleteConversationsMessagingSupportedcontentSupportedContentId: (...args) => callOperation("deleteConversationsMessagingSupportedcontentSupportedContentId", ...(args as GenesysCloudFullApiOperationArgs<"deleteConversationsMessagingSupportedcontentSupportedContentId">)),
    GetConversation: (...args) => callOperation("getConversation", ...(args as GenesysCloudFullApiOperationArgs<"getConversation">)),
    GetConversationCommunicationAgentchecklist: (...args) => callOperation("getConversationCommunicationAgentchecklist", ...(args as GenesysCloudFullApiOperationArgs<"getConversationCommunicationAgentchecklist">)),
    GetConversationCommunicationAgentchecklistJob: (...args) => callOperation("getConversationCommunicationAgentchecklistJob", ...(args as GenesysCloudFullApiOperationArgs<"getConversationCommunicationAgentchecklistJob">)),
    GetConversationCommunicationAgentchecklists: (...args) => callOperation("getConversationCommunicationAgentchecklists", ...(args as GenesysCloudFullApiOperationArgs<"getConversationCommunicationAgentchecklists">)),
    GetConversationCommunicationInternalmessage: (...args) => callOperation("getConversationCommunicationInternalmessage", ...(args as GenesysCloudFullApiOperationArgs<"getConversationCommunicationInternalmessage">)),
    GetConversationCommunicationInternalmessages: (...args) => callOperation("getConversationCommunicationInternalmessages", ...(args as GenesysCloudFullApiOperationArgs<"getConversationCommunicationInternalmessages">)),
    GetConversationCustomattribute: (...args) => callOperation("getConversationCustomattribute", ...(args as GenesysCloudFullApiOperationArgs<"getConversationCustomattribute">)),
    GetConversationCustomattributes: (...args) => callOperation("getConversationCustomattributes", ...(args as GenesysCloudFullApiOperationArgs<"getConversationCustomattributes">)),
    GetConversationParticipantSecureivrsession: (...args) => callOperation("getConversationParticipantSecureivrsession", ...(args as GenesysCloudFullApiOperationArgs<"getConversationParticipantSecureivrsession">)),
    GetConversationParticipantSecureivrsessions: (...args) => callOperation("getConversationParticipantSecureivrsessions", ...(args as GenesysCloudFullApiOperationArgs<"getConversationParticipantSecureivrsessions">)),
    GetConversationParticipantWrapup: (...args) => callOperation("getConversationParticipantWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationParticipantWrapup">)),
    GetConversationParticipantWrapupcodes: (...args) => callOperation("getConversationParticipantWrapupcodes", ...(args as GenesysCloudFullApiOperationArgs<"getConversationParticipantWrapupcodes">)),
    GetConversations: (...args) => callOperation("getConversations", ...(args as GenesysCloudFullApiOperationArgs<"getConversations">)),
    GetConversationsCall: (...args) => callOperation("getConversationsCall", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCall">)),
    GetConversationsCallback: (...args) => callOperation("getConversationsCallback", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCallback">)),
    GetConversationsCallbackParticipantCommunicationWrapup: (...args) => callOperation("getConversationsCallbackParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCallbackParticipantCommunicationWrapup">)),
    GetConversationsCallbackParticipantWrapup: (...args) => callOperation("getConversationsCallbackParticipantWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCallbackParticipantWrapup">)),
    GetConversationsCallbackParticipantWrapupcodes: (...args) => callOperation("getConversationsCallbackParticipantWrapupcodes", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCallbackParticipantWrapupcodes">)),
    GetConversationsCallbacks: (...args) => callOperation("getConversationsCallbacks", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCallbacks">)),
    GetConversationsCallParticipantCommunicationWrapup: (...args) => callOperation("getConversationsCallParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCallParticipantCommunicationWrapup">)),
    GetConversationsCallParticipantWrapup: (...args) => callOperation("getConversationsCallParticipantWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCallParticipantWrapup">)),
    GetConversationsCallParticipantWrapupcodes: (...args) => callOperation("getConversationsCallParticipantWrapupcodes", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCallParticipantWrapupcodes">)),
    GetConversationsCalls: (...args) => callOperation("getConversationsCalls", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCalls">)),
    GetConversationsCallsHistory: (...args) => callOperation("getConversationsCallsHistory", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCallsHistory">)),
    GetConversationsCallsMaximumconferenceparties: (...args) => callOperation("getConversationsCallsMaximumconferenceparties", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCallsMaximumconferenceparties">)),
    GetConversationsChat: (...args) => callOperation("getConversationsChat", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsChat">)),
    GetConversationsChatMessage: (...args) => callOperation("getConversationsChatMessage", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsChatMessage">)),
    GetConversationsChatMessages: (...args) => callOperation("getConversationsChatMessages", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsChatMessages">)),
    GetConversationsChatParticipantCommunicationWrapup: (...args) => callOperation("getConversationsChatParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsChatParticipantCommunicationWrapup">)),
    GetConversationsChatParticipantWrapup: (...args) => callOperation("getConversationsChatParticipantWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsChatParticipantWrapup">)),
    GetConversationsChatParticipantWrapupcodes: (...args) => callOperation("getConversationsChatParticipantWrapupcodes", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsChatParticipantWrapupcodes">)),
    GetConversationsChats: (...args) => callOperation("getConversationsChats", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsChats">)),
    GetConversationsCobrowsesession: (...args) => callOperation("getConversationsCobrowsesession", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCobrowsesession">)),
    GetConversationsCobrowsesessionParticipantCommunicationWrapup: (...args) => callOperation("getConversationsCobrowsesessionParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCobrowsesessionParticipantCommunicationWrapup">)),
    GetConversationsCobrowsesessionParticipantWrapup: (...args) => callOperation("getConversationsCobrowsesessionParticipantWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCobrowsesessionParticipantWrapup">)),
    GetConversationsCobrowsesessionParticipantWrapupcodes: (...args) => callOperation("getConversationsCobrowsesessionParticipantWrapupcodes", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCobrowsesessionParticipantWrapupcodes">)),
    GetConversationsCobrowsesessions: (...args) => callOperation("getConversationsCobrowsesessions", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCobrowsesessions">)),
    GetConversationsCustomattributesSchema: (...args) => callOperation("getConversationsCustomattributesSchema", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchema">)),
    GetConversationsCustomattributesSchemas: (...args) => callOperation("getConversationsCustomattributesSchemas", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchemas">)),
    GetConversationsCustomattributesSchemasCoretype: (...args) => callOperation("getConversationsCustomattributesSchemasCoretype", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchemasCoretype">)),
    GetConversationsCustomattributesSchemasCoretypes: (...args) => callOperation("getConversationsCustomattributesSchemasCoretypes", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchemasCoretypes">)),
    GetConversationsCustomattributesSchemasLimits: (...args) => callOperation("getConversationsCustomattributesSchemasLimits", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchemasLimits">)),
    GetConversationsCustomattributesSchemaVersion: (...args) => callOperation("getConversationsCustomattributesSchemaVersion", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchemaVersion">)),
    GetConversationsCustomattributesSchemaVersions: (...args) => callOperation("getConversationsCustomattributesSchemaVersions", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsCustomattributesSchemaVersions">)),
    GetConversationSecureattributes: (...args) => callOperation("getConversationSecureattributes", ...(args as GenesysCloudFullApiOperationArgs<"getConversationSecureattributes">)),
    GetConversationsEmail: (...args) => callOperation("getConversationsEmail", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsEmail">)),
    GetConversationsEmailMessage: (...args) => callOperation("getConversationsEmailMessage", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsEmailMessage">)),
    GetConversationsEmailMessages: (...args) => callOperation("getConversationsEmailMessages", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsEmailMessages">)),
    GetConversationsEmailMessagesDraft: (...args) => callOperation("getConversationsEmailMessagesDraft", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsEmailMessagesDraft">)),
    GetConversationsEmailParticipantCommunicationWrapup: (...args) => callOperation("getConversationsEmailParticipantCommunicationWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsEmailParticipantCommunicationWrapup">)),
    GetConversationsEmailParticipantWrapup: (...args) => callOperation("getConversationsEmailParticipantWrapup", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsEmailParticipantWrapup">)),
    GetConversationsEmailParticipantWrapupcodes: (...args) => callOperation("getConversationsEmailParticipantWrapupcodes", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsEmailParticipantWrapupcodes">)),
    GetConversationsEmails: (...args) => callOperation("getConversationsEmails", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsEmails">)),
    GetConversationsEmailSettings: (...args) => callOperation("getConversationsEmailSettings", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsEmailSettings">)),
    GetConversationsInternalmessage: (...args) => callOperation("getConversationsInternalmessage", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsInternalmessage">)),
    GetConversationsInternalmessages: (...args) => callOperation("getConversationsInternalmessages", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsInternalmessages">)),
    GetConversationsKeyconfiguration: (...args) => callOperation("getConversationsKeyconfiguration", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsKeyconfiguration">)),
    GetConversationsKeyconfigurations: (...args) => callOperation("getConversationsKeyconfigurations", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsKeyconfigurations">)),
    GetConversationsMessage: (...args) => callOperation("getConversationsMessage", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessage">)),
    GetConversationsMessageCommunicationMessagesMedia: (...args) => callOperation("getConversationsMessageCommunicationMessagesMedia", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessageCommunicationMessagesMedia">)),
    GetConversationsMessageCommunicationMessagesMediaMediaId: (...args) => callOperation("getConversationsMessageCommunicationMessagesMediaMediaId", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessageCommunicationMessagesMediaMediaId">)),
    GetConversationsMessageDetails: (...args) => callOperation("getConversationsMessageDetails", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessageDetails">)),
    GetConversationsMessageMessage: (...args) => callOperation("getConversationsMessageMessage", ...(args as GenesysCloudFullApiOperationArgs<"getConversationsMessageMessage">)),
  };
}
