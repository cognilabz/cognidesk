// Generated endpoint chunk for TwilioSmsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TwilioSmsGeneratedOperationCaller,
  TwilioSmsFullApiOperationArgs,
  TwilioSmsFullApiOperationInput,
  TwilioSmsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TwilioSmsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TwilioSmsFullApiConversationsV101OperationKeys = [
  "conversations_v1:CreateConfigurationAddress",
  "conversations_v1:CreateConversation",
  "conversations_v1:CreateConversationMessage",
  "conversations_v1:CreateConversationParticipant",
  "conversations_v1:CreateConversationScopedWebhook",
  "conversations_v1:CreateConversationWithParticipants",
  "conversations_v1:CreateCredential",
  "conversations_v1:CreateRole",
  "conversations_v1:CreateService",
  "conversations_v1:CreateServiceConversation",
  "conversations_v1:CreateServiceConversationMessage",
  "conversations_v1:CreateServiceConversationParticipant",
  "conversations_v1:CreateServiceConversationScopedWebhook",
  "conversations_v1:CreateServiceConversationWithParticipants",
  "conversations_v1:CreateServiceRole",
  "conversations_v1:CreateServiceUser",
  "conversations_v1:CreateUser",
  "conversations_v1:DeleteConfigurationAddress",
  "conversations_v1:DeleteConversation",
  "conversations_v1:DeleteConversationMessage",
  "conversations_v1:DeleteConversationParticipant",
  "conversations_v1:DeleteConversationScopedWebhook",
  "conversations_v1:DeleteCredential",
  "conversations_v1:DeleteRole",
  "conversations_v1:DeleteService",
  "conversations_v1:DeleteServiceBinding",
  "conversations_v1:DeleteServiceConversation",
  "conversations_v1:DeleteServiceConversationMessage",
  "conversations_v1:DeleteServiceConversationParticipant",
  "conversations_v1:DeleteServiceConversationScopedWebhook",
  "conversations_v1:DeleteServiceRole",
  "conversations_v1:DeleteServiceUser",
  "conversations_v1:DeleteServiceUserConversation",
  "conversations_v1:DeleteUser",
  "conversations_v1:DeleteUserConversation",
  "conversations_v1:FetchConfiguration",
  "conversations_v1:FetchConfigurationAddress",
  "conversations_v1:FetchConfigurationWebhook",
  "conversations_v1:FetchConversation",
  "conversations_v1:FetchConversationMessage",
  "conversations_v1:FetchConversationMessageReceipt",
  "conversations_v1:FetchConversationParticipant",
  "conversations_v1:FetchConversationScopedWebhook",
  "conversations_v1:FetchCredential",
  "conversations_v1:FetchRole",
  "conversations_v1:FetchService",
  "conversations_v1:FetchServiceBinding",
  "conversations_v1:FetchServiceConfiguration",
  "conversations_v1:FetchServiceConversation",
  "conversations_v1:FetchServiceConversationMessage",
  "conversations_v1:FetchServiceConversationMessageReceipt",
  "conversations_v1:FetchServiceConversationParticipant",
  "conversations_v1:FetchServiceConversationScopedWebhook",
  "conversations_v1:FetchServiceNotification",
  "conversations_v1:FetchServiceRole",
  "conversations_v1:FetchServiceUser",
  "conversations_v1:FetchServiceUserConversation",
  "conversations_v1:FetchServiceWebhookConfiguration",
  "conversations_v1:FetchUser",
  "conversations_v1:FetchUserConversation",
  "conversations_v1:ListConfigurationAddress",
  "conversations_v1:ListConversation",
  "conversations_v1:ListConversationMessage",
  "conversations_v1:ListConversationMessageReceipt",
  "conversations_v1:ListConversationParticipant",
  "conversations_v1:ListConversationScopedWebhook",
  "conversations_v1:ListCredential",
  "conversations_v1:ListParticipantConversation",
  "conversations_v1:ListRole",
  "conversations_v1:ListService",
  "conversations_v1:ListServiceBinding",
  "conversations_v1:ListServiceConversation",
  "conversations_v1:ListServiceConversationMessage",
  "conversations_v1:ListServiceConversationMessageReceipt",
  "conversations_v1:ListServiceConversationParticipant",
  "conversations_v1:ListServiceConversationScopedWebhook",
  "conversations_v1:ListServiceParticipantConversation",
  "conversations_v1:ListServiceRole",
  "conversations_v1:ListServiceUser",
  "conversations_v1:ListServiceUserConversation"
] as const;
export type TwilioSmsFullApiConversationsV101OperationKey = typeof TwilioSmsFullApiConversationsV101OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioSmsFullApiConversationsV101OperationPathParamMap {
  "conversations_v1:CreateConfigurationAddress": {};
  "conversations_v1:CreateConversation": {};
  "conversations_v1:CreateConversationMessage": { "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:CreateConversationParticipant": { "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:CreateConversationScopedWebhook": { "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:CreateConversationWithParticipants": {};
  "conversations_v1:CreateCredential": {};
  "conversations_v1:CreateRole": {};
  "conversations_v1:CreateService": {};
  "conversations_v1:CreateServiceConversation": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:CreateServiceConversationMessage": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:CreateServiceConversationParticipant": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:CreateServiceConversationScopedWebhook": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:CreateServiceConversationWithParticipants": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:CreateServiceRole": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:CreateServiceUser": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:CreateUser": {};
  "conversations_v1:DeleteConfigurationAddress": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteConversation": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteConversationMessage": { "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteConversationParticipant": { "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteConversationScopedWebhook": { "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteCredential": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteRole": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteService": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteServiceBinding": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteServiceConversation": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteServiceConversationMessage": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteServiceConversationParticipant": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteServiceConversationScopedWebhook": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteServiceRole": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteServiceUser": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteServiceUserConversation": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "UserSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteUser": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:DeleteUserConversation": { "UserSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchConfiguration": {};
  "conversations_v1:FetchConfigurationAddress": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchConfigurationWebhook": {};
  "conversations_v1:FetchConversation": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchConversationMessage": { "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchConversationMessageReceipt": { "ConversationSid": TwilioSmsFullApiPathParamValue; "MessageSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchConversationParticipant": { "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchConversationScopedWebhook": { "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchCredential": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchRole": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchService": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchServiceBinding": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchServiceConfiguration": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchServiceConversation": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchServiceConversationMessage": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchServiceConversationMessageReceipt": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue; "MessageSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchServiceConversationParticipant": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchServiceConversationScopedWebhook": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchServiceNotification": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchServiceRole": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchServiceUser": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchServiceUserConversation": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "UserSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchServiceWebhookConfiguration": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchUser": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:FetchUserConversation": { "UserSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListConfigurationAddress": {};
  "conversations_v1:ListConversation": {};
  "conversations_v1:ListConversationMessage": { "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListConversationMessageReceipt": { "ConversationSid": TwilioSmsFullApiPathParamValue; "MessageSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListConversationParticipant": { "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListConversationScopedWebhook": { "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListCredential": {};
  "conversations_v1:ListParticipantConversation": {};
  "conversations_v1:ListRole": {};
  "conversations_v1:ListService": {};
  "conversations_v1:ListServiceBinding": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListServiceConversation": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListServiceConversationMessage": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListServiceConversationMessageReceipt": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue; "MessageSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListServiceConversationParticipant": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListServiceConversationScopedWebhook": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListServiceParticipantConversation": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListServiceRole": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListServiceUser": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:ListServiceUserConversation": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "UserSid": TwilioSmsFullApiPathParamValue };
}

export interface TwilioSmsFullApiConversationsV101OperationRequestMap {
  "conversations_v1:CreateConfigurationAddress": TwilioSmsFullApiOperationInput<"conversations_v1:CreateConfigurationAddress">;
  "conversations_v1:CreateConversation": TwilioSmsFullApiOperationInput<"conversations_v1:CreateConversation">;
  "conversations_v1:CreateConversationMessage": TwilioSmsFullApiOperationInput<"conversations_v1:CreateConversationMessage">;
  "conversations_v1:CreateConversationParticipant": TwilioSmsFullApiOperationInput<"conversations_v1:CreateConversationParticipant">;
  "conversations_v1:CreateConversationScopedWebhook": TwilioSmsFullApiOperationInput<"conversations_v1:CreateConversationScopedWebhook">;
  "conversations_v1:CreateConversationWithParticipants": TwilioSmsFullApiOperationInput<"conversations_v1:CreateConversationWithParticipants">;
  "conversations_v1:CreateCredential": TwilioSmsFullApiOperationInput<"conversations_v1:CreateCredential">;
  "conversations_v1:CreateRole": TwilioSmsFullApiOperationInput<"conversations_v1:CreateRole">;
  "conversations_v1:CreateService": TwilioSmsFullApiOperationInput<"conversations_v1:CreateService">;
  "conversations_v1:CreateServiceConversation": TwilioSmsFullApiOperationInput<"conversations_v1:CreateServiceConversation">;
  "conversations_v1:CreateServiceConversationMessage": TwilioSmsFullApiOperationInput<"conversations_v1:CreateServiceConversationMessage">;
  "conversations_v1:CreateServiceConversationParticipant": TwilioSmsFullApiOperationInput<"conversations_v1:CreateServiceConversationParticipant">;
  "conversations_v1:CreateServiceConversationScopedWebhook": TwilioSmsFullApiOperationInput<"conversations_v1:CreateServiceConversationScopedWebhook">;
  "conversations_v1:CreateServiceConversationWithParticipants": TwilioSmsFullApiOperationInput<"conversations_v1:CreateServiceConversationWithParticipants">;
  "conversations_v1:CreateServiceRole": TwilioSmsFullApiOperationInput<"conversations_v1:CreateServiceRole">;
  "conversations_v1:CreateServiceUser": TwilioSmsFullApiOperationInput<"conversations_v1:CreateServiceUser">;
  "conversations_v1:CreateUser": TwilioSmsFullApiOperationInput<"conversations_v1:CreateUser">;
  "conversations_v1:DeleteConfigurationAddress": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteConfigurationAddress">;
  "conversations_v1:DeleteConversation": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteConversation">;
  "conversations_v1:DeleteConversationMessage": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteConversationMessage">;
  "conversations_v1:DeleteConversationParticipant": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteConversationParticipant">;
  "conversations_v1:DeleteConversationScopedWebhook": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteConversationScopedWebhook">;
  "conversations_v1:DeleteCredential": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteCredential">;
  "conversations_v1:DeleteRole": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteRole">;
  "conversations_v1:DeleteService": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteService">;
  "conversations_v1:DeleteServiceBinding": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteServiceBinding">;
  "conversations_v1:DeleteServiceConversation": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteServiceConversation">;
  "conversations_v1:DeleteServiceConversationMessage": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteServiceConversationMessage">;
  "conversations_v1:DeleteServiceConversationParticipant": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteServiceConversationParticipant">;
  "conversations_v1:DeleteServiceConversationScopedWebhook": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteServiceConversationScopedWebhook">;
  "conversations_v1:DeleteServiceRole": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteServiceRole">;
  "conversations_v1:DeleteServiceUser": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteServiceUser">;
  "conversations_v1:DeleteServiceUserConversation": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteServiceUserConversation">;
  "conversations_v1:DeleteUser": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteUser">;
  "conversations_v1:DeleteUserConversation": TwilioSmsFullApiOperationInput<"conversations_v1:DeleteUserConversation">;
  "conversations_v1:FetchConfiguration": TwilioSmsFullApiOperationInput<"conversations_v1:FetchConfiguration">;
  "conversations_v1:FetchConfigurationAddress": TwilioSmsFullApiOperationInput<"conversations_v1:FetchConfigurationAddress">;
  "conversations_v1:FetchConfigurationWebhook": TwilioSmsFullApiOperationInput<"conversations_v1:FetchConfigurationWebhook">;
  "conversations_v1:FetchConversation": TwilioSmsFullApiOperationInput<"conversations_v1:FetchConversation">;
  "conversations_v1:FetchConversationMessage": TwilioSmsFullApiOperationInput<"conversations_v1:FetchConversationMessage">;
  "conversations_v1:FetchConversationMessageReceipt": TwilioSmsFullApiOperationInput<"conversations_v1:FetchConversationMessageReceipt">;
  "conversations_v1:FetchConversationParticipant": TwilioSmsFullApiOperationInput<"conversations_v1:FetchConversationParticipant">;
  "conversations_v1:FetchConversationScopedWebhook": TwilioSmsFullApiOperationInput<"conversations_v1:FetchConversationScopedWebhook">;
  "conversations_v1:FetchCredential": TwilioSmsFullApiOperationInput<"conversations_v1:FetchCredential">;
  "conversations_v1:FetchRole": TwilioSmsFullApiOperationInput<"conversations_v1:FetchRole">;
  "conversations_v1:FetchService": TwilioSmsFullApiOperationInput<"conversations_v1:FetchService">;
  "conversations_v1:FetchServiceBinding": TwilioSmsFullApiOperationInput<"conversations_v1:FetchServiceBinding">;
  "conversations_v1:FetchServiceConfiguration": TwilioSmsFullApiOperationInput<"conversations_v1:FetchServiceConfiguration">;
  "conversations_v1:FetchServiceConversation": TwilioSmsFullApiOperationInput<"conversations_v1:FetchServiceConversation">;
  "conversations_v1:FetchServiceConversationMessage": TwilioSmsFullApiOperationInput<"conversations_v1:FetchServiceConversationMessage">;
  "conversations_v1:FetchServiceConversationMessageReceipt": TwilioSmsFullApiOperationInput<"conversations_v1:FetchServiceConversationMessageReceipt">;
  "conversations_v1:FetchServiceConversationParticipant": TwilioSmsFullApiOperationInput<"conversations_v1:FetchServiceConversationParticipant">;
  "conversations_v1:FetchServiceConversationScopedWebhook": TwilioSmsFullApiOperationInput<"conversations_v1:FetchServiceConversationScopedWebhook">;
  "conversations_v1:FetchServiceNotification": TwilioSmsFullApiOperationInput<"conversations_v1:FetchServiceNotification">;
  "conversations_v1:FetchServiceRole": TwilioSmsFullApiOperationInput<"conversations_v1:FetchServiceRole">;
  "conversations_v1:FetchServiceUser": TwilioSmsFullApiOperationInput<"conversations_v1:FetchServiceUser">;
  "conversations_v1:FetchServiceUserConversation": TwilioSmsFullApiOperationInput<"conversations_v1:FetchServiceUserConversation">;
  "conversations_v1:FetchServiceWebhookConfiguration": TwilioSmsFullApiOperationInput<"conversations_v1:FetchServiceWebhookConfiguration">;
  "conversations_v1:FetchUser": TwilioSmsFullApiOperationInput<"conversations_v1:FetchUser">;
  "conversations_v1:FetchUserConversation": TwilioSmsFullApiOperationInput<"conversations_v1:FetchUserConversation">;
  "conversations_v1:ListConfigurationAddress": TwilioSmsFullApiOperationInput<"conversations_v1:ListConfigurationAddress">;
  "conversations_v1:ListConversation": TwilioSmsFullApiOperationInput<"conversations_v1:ListConversation">;
  "conversations_v1:ListConversationMessage": TwilioSmsFullApiOperationInput<"conversations_v1:ListConversationMessage">;
  "conversations_v1:ListConversationMessageReceipt": TwilioSmsFullApiOperationInput<"conversations_v1:ListConversationMessageReceipt">;
  "conversations_v1:ListConversationParticipant": TwilioSmsFullApiOperationInput<"conversations_v1:ListConversationParticipant">;
  "conversations_v1:ListConversationScopedWebhook": TwilioSmsFullApiOperationInput<"conversations_v1:ListConversationScopedWebhook">;
  "conversations_v1:ListCredential": TwilioSmsFullApiOperationInput<"conversations_v1:ListCredential">;
  "conversations_v1:ListParticipantConversation": TwilioSmsFullApiOperationInput<"conversations_v1:ListParticipantConversation">;
  "conversations_v1:ListRole": TwilioSmsFullApiOperationInput<"conversations_v1:ListRole">;
  "conversations_v1:ListService": TwilioSmsFullApiOperationInput<"conversations_v1:ListService">;
  "conversations_v1:ListServiceBinding": TwilioSmsFullApiOperationInput<"conversations_v1:ListServiceBinding">;
  "conversations_v1:ListServiceConversation": TwilioSmsFullApiOperationInput<"conversations_v1:ListServiceConversation">;
  "conversations_v1:ListServiceConversationMessage": TwilioSmsFullApiOperationInput<"conversations_v1:ListServiceConversationMessage">;
  "conversations_v1:ListServiceConversationMessageReceipt": TwilioSmsFullApiOperationInput<"conversations_v1:ListServiceConversationMessageReceipt">;
  "conversations_v1:ListServiceConversationParticipant": TwilioSmsFullApiOperationInput<"conversations_v1:ListServiceConversationParticipant">;
  "conversations_v1:ListServiceConversationScopedWebhook": TwilioSmsFullApiOperationInput<"conversations_v1:ListServiceConversationScopedWebhook">;
  "conversations_v1:ListServiceParticipantConversation": TwilioSmsFullApiOperationInput<"conversations_v1:ListServiceParticipantConversation">;
  "conversations_v1:ListServiceRole": TwilioSmsFullApiOperationInput<"conversations_v1:ListServiceRole">;
  "conversations_v1:ListServiceUser": TwilioSmsFullApiOperationInput<"conversations_v1:ListServiceUser">;
  "conversations_v1:ListServiceUserConversation": TwilioSmsFullApiOperationInput<"conversations_v1:ListServiceUserConversation">;
}

export interface TwilioSmsFullApiConversationsV101GeneratedClient {
  ConversationsV1CreateConfigurationAddress(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateConfigurationAddress">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateConfigurationAddress"]>;
  ConversationsV1CreateConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateConversation"]>;
  ConversationsV1CreateConversationMessage(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateConversationMessage">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateConversationMessage"]>;
  ConversationsV1CreateConversationParticipant(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateConversationParticipant">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateConversationParticipant"]>;
  ConversationsV1CreateConversationScopedWebhook(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateConversationScopedWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateConversationScopedWebhook"]>;
  ConversationsV1CreateConversationWithParticipants(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateConversationWithParticipants">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateConversationWithParticipants"]>;
  ConversationsV1CreateCredential(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateCredential">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateCredential"]>;
  ConversationsV1CreateRole(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateRole">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateRole"]>;
  ConversationsV1CreateService(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateService">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateService"]>;
  ConversationsV1CreateServiceConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateServiceConversation"]>;
  ConversationsV1CreateServiceConversationMessage(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceConversationMessage">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateServiceConversationMessage"]>;
  ConversationsV1CreateServiceConversationParticipant(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceConversationParticipant">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateServiceConversationParticipant"]>;
  ConversationsV1CreateServiceConversationScopedWebhook(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceConversationScopedWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateServiceConversationScopedWebhook"]>;
  ConversationsV1CreateServiceConversationWithParticipants(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceConversationWithParticipants">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateServiceConversationWithParticipants"]>;
  ConversationsV1CreateServiceRole(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceRole">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateServiceRole"]>;
  ConversationsV1CreateServiceUser(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceUser">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateServiceUser"]>;
  ConversationsV1CreateUser(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:CreateUser">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:CreateUser"]>;
  ConversationsV1DeleteConfigurationAddress(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteConfigurationAddress">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteConfigurationAddress"]>;
  ConversationsV1DeleteConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteConversation"]>;
  ConversationsV1DeleteConversationMessage(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteConversationMessage">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteConversationMessage"]>;
  ConversationsV1DeleteConversationParticipant(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteConversationParticipant">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteConversationParticipant"]>;
  ConversationsV1DeleteConversationScopedWebhook(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteConversationScopedWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteConversationScopedWebhook"]>;
  ConversationsV1DeleteCredential(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteCredential">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteCredential"]>;
  ConversationsV1DeleteRole(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteRole">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteRole"]>;
  ConversationsV1DeleteService(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteService">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteService"]>;
  ConversationsV1DeleteServiceBinding(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceBinding">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteServiceBinding"]>;
  ConversationsV1DeleteServiceConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteServiceConversation"]>;
  ConversationsV1DeleteServiceConversationMessage(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceConversationMessage">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteServiceConversationMessage"]>;
  ConversationsV1DeleteServiceConversationParticipant(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceConversationParticipant">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteServiceConversationParticipant"]>;
  ConversationsV1DeleteServiceConversationScopedWebhook(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceConversationScopedWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteServiceConversationScopedWebhook"]>;
  ConversationsV1DeleteServiceRole(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceRole">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteServiceRole"]>;
  ConversationsV1DeleteServiceUser(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceUser">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteServiceUser"]>;
  ConversationsV1DeleteServiceUserConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceUserConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteServiceUserConversation"]>;
  ConversationsV1DeleteUser(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteUser">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteUser"]>;
  ConversationsV1DeleteUserConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteUserConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:DeleteUserConversation"]>;
  ConversationsV1FetchConfiguration(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchConfiguration"]>;
  ConversationsV1FetchConfigurationAddress(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConfigurationAddress">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchConfigurationAddress"]>;
  ConversationsV1FetchConfigurationWebhook(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConfigurationWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchConfigurationWebhook"]>;
  ConversationsV1FetchConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchConversation"]>;
  ConversationsV1FetchConversationMessage(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConversationMessage">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchConversationMessage"]>;
  ConversationsV1FetchConversationMessageReceipt(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConversationMessageReceipt">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchConversationMessageReceipt"]>;
  ConversationsV1FetchConversationParticipant(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConversationParticipant">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchConversationParticipant"]>;
  ConversationsV1FetchConversationScopedWebhook(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConversationScopedWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchConversationScopedWebhook"]>;
  ConversationsV1FetchCredential(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchCredential">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchCredential"]>;
  ConversationsV1FetchRole(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchRole">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchRole"]>;
  ConversationsV1FetchService(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchService">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchService"]>;
  ConversationsV1FetchServiceBinding(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceBinding">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchServiceBinding"]>;
  ConversationsV1FetchServiceConfiguration(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchServiceConfiguration"]>;
  ConversationsV1FetchServiceConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchServiceConversation"]>;
  ConversationsV1FetchServiceConversationMessage(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceConversationMessage">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchServiceConversationMessage"]>;
  ConversationsV1FetchServiceConversationMessageReceipt(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceConversationMessageReceipt">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchServiceConversationMessageReceipt"]>;
  ConversationsV1FetchServiceConversationParticipant(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceConversationParticipant">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchServiceConversationParticipant"]>;
  ConversationsV1FetchServiceConversationScopedWebhook(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceConversationScopedWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchServiceConversationScopedWebhook"]>;
  ConversationsV1FetchServiceNotification(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceNotification">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchServiceNotification"]>;
  ConversationsV1FetchServiceRole(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceRole">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchServiceRole"]>;
  ConversationsV1FetchServiceUser(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceUser">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchServiceUser"]>;
  ConversationsV1FetchServiceUserConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceUserConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchServiceUserConversation"]>;
  ConversationsV1FetchServiceWebhookConfiguration(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceWebhookConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchServiceWebhookConfiguration"]>;
  ConversationsV1FetchUser(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchUser">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchUser"]>;
  ConversationsV1FetchUserConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:FetchUserConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:FetchUserConversation"]>;
  ConversationsV1ListConfigurationAddress(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListConfigurationAddress">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListConfigurationAddress"]>;
  ConversationsV1ListConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListConversation"]>;
  ConversationsV1ListConversationMessage(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListConversationMessage">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListConversationMessage"]>;
  ConversationsV1ListConversationMessageReceipt(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListConversationMessageReceipt">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListConversationMessageReceipt"]>;
  ConversationsV1ListConversationParticipant(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListConversationParticipant">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListConversationParticipant"]>;
  ConversationsV1ListConversationScopedWebhook(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListConversationScopedWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListConversationScopedWebhook"]>;
  ConversationsV1ListCredential(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListCredential">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListCredential"]>;
  ConversationsV1ListParticipantConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListParticipantConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListParticipantConversation"]>;
  ConversationsV1ListRole(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListRole">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListRole"]>;
  ConversationsV1ListService(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListService">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListService"]>;
  ConversationsV1ListServiceBinding(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceBinding">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListServiceBinding"]>;
  ConversationsV1ListServiceConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListServiceConversation"]>;
  ConversationsV1ListServiceConversationMessage(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceConversationMessage">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListServiceConversationMessage"]>;
  ConversationsV1ListServiceConversationMessageReceipt(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceConversationMessageReceipt">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListServiceConversationMessageReceipt"]>;
  ConversationsV1ListServiceConversationParticipant(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceConversationParticipant">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListServiceConversationParticipant"]>;
  ConversationsV1ListServiceConversationScopedWebhook(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceConversationScopedWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListServiceConversationScopedWebhook"]>;
  ConversationsV1ListServiceParticipantConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceParticipantConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListServiceParticipantConversation"]>;
  ConversationsV1ListServiceRole(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceRole">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListServiceRole"]>;
  ConversationsV1ListServiceUser(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceUser">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListServiceUser"]>;
  ConversationsV1ListServiceUserConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceUserConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListServiceUserConversation"]>;
}

export const TwilioSmsFullApiConversationsV101GeneratedFunctionNames = [
  "ConversationsV1CreateConfigurationAddress",
  "ConversationsV1CreateConversation",
  "ConversationsV1CreateConversationMessage",
  "ConversationsV1CreateConversationParticipant",
  "ConversationsV1CreateConversationScopedWebhook",
  "ConversationsV1CreateConversationWithParticipants",
  "ConversationsV1CreateCredential",
  "ConversationsV1CreateRole",
  "ConversationsV1CreateService",
  "ConversationsV1CreateServiceConversation",
  "ConversationsV1CreateServiceConversationMessage",
  "ConversationsV1CreateServiceConversationParticipant",
  "ConversationsV1CreateServiceConversationScopedWebhook",
  "ConversationsV1CreateServiceConversationWithParticipants",
  "ConversationsV1CreateServiceRole",
  "ConversationsV1CreateServiceUser",
  "ConversationsV1CreateUser",
  "ConversationsV1DeleteConfigurationAddress",
  "ConversationsV1DeleteConversation",
  "ConversationsV1DeleteConversationMessage",
  "ConversationsV1DeleteConversationParticipant",
  "ConversationsV1DeleteConversationScopedWebhook",
  "ConversationsV1DeleteCredential",
  "ConversationsV1DeleteRole",
  "ConversationsV1DeleteService",
  "ConversationsV1DeleteServiceBinding",
  "ConversationsV1DeleteServiceConversation",
  "ConversationsV1DeleteServiceConversationMessage",
  "ConversationsV1DeleteServiceConversationParticipant",
  "ConversationsV1DeleteServiceConversationScopedWebhook",
  "ConversationsV1DeleteServiceRole",
  "ConversationsV1DeleteServiceUser",
  "ConversationsV1DeleteServiceUserConversation",
  "ConversationsV1DeleteUser",
  "ConversationsV1DeleteUserConversation",
  "ConversationsV1FetchConfiguration",
  "ConversationsV1FetchConfigurationAddress",
  "ConversationsV1FetchConfigurationWebhook",
  "ConversationsV1FetchConversation",
  "ConversationsV1FetchConversationMessage",
  "ConversationsV1FetchConversationMessageReceipt",
  "ConversationsV1FetchConversationParticipant",
  "ConversationsV1FetchConversationScopedWebhook",
  "ConversationsV1FetchCredential",
  "ConversationsV1FetchRole",
  "ConversationsV1FetchService",
  "ConversationsV1FetchServiceBinding",
  "ConversationsV1FetchServiceConfiguration",
  "ConversationsV1FetchServiceConversation",
  "ConversationsV1FetchServiceConversationMessage",
  "ConversationsV1FetchServiceConversationMessageReceipt",
  "ConversationsV1FetchServiceConversationParticipant",
  "ConversationsV1FetchServiceConversationScopedWebhook",
  "ConversationsV1FetchServiceNotification",
  "ConversationsV1FetchServiceRole",
  "ConversationsV1FetchServiceUser",
  "ConversationsV1FetchServiceUserConversation",
  "ConversationsV1FetchServiceWebhookConfiguration",
  "ConversationsV1FetchUser",
  "ConversationsV1FetchUserConversation",
  "ConversationsV1ListConfigurationAddress",
  "ConversationsV1ListConversation",
  "ConversationsV1ListConversationMessage",
  "ConversationsV1ListConversationMessageReceipt",
  "ConversationsV1ListConversationParticipant",
  "ConversationsV1ListConversationScopedWebhook",
  "ConversationsV1ListCredential",
  "ConversationsV1ListParticipantConversation",
  "ConversationsV1ListRole",
  "ConversationsV1ListService",
  "ConversationsV1ListServiceBinding",
  "ConversationsV1ListServiceConversation",
  "ConversationsV1ListServiceConversationMessage",
  "ConversationsV1ListServiceConversationMessageReceipt",
  "ConversationsV1ListServiceConversationParticipant",
  "ConversationsV1ListServiceConversationScopedWebhook",
  "ConversationsV1ListServiceParticipantConversation",
  "ConversationsV1ListServiceRole",
  "ConversationsV1ListServiceUser",
  "ConversationsV1ListServiceUserConversation"
] as const satisfies readonly (keyof TwilioSmsFullApiConversationsV101GeneratedClient)[];

export function createTwilioSmsFullApiConversationsV101GeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiConversationsV101GeneratedClient {
  return {
    ConversationsV1CreateConfigurationAddress: (...args) => callOperation("conversations_v1:CreateConfigurationAddress", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateConfigurationAddress">)),
    ConversationsV1CreateConversation: (...args) => callOperation("conversations_v1:CreateConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateConversation">)),
    ConversationsV1CreateConversationMessage: (...args) => callOperation("conversations_v1:CreateConversationMessage", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateConversationMessage">)),
    ConversationsV1CreateConversationParticipant: (...args) => callOperation("conversations_v1:CreateConversationParticipant", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateConversationParticipant">)),
    ConversationsV1CreateConversationScopedWebhook: (...args) => callOperation("conversations_v1:CreateConversationScopedWebhook", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateConversationScopedWebhook">)),
    ConversationsV1CreateConversationWithParticipants: (...args) => callOperation("conversations_v1:CreateConversationWithParticipants", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateConversationWithParticipants">)),
    ConversationsV1CreateCredential: (...args) => callOperation("conversations_v1:CreateCredential", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateCredential">)),
    ConversationsV1CreateRole: (...args) => callOperation("conversations_v1:CreateRole", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateRole">)),
    ConversationsV1CreateService: (...args) => callOperation("conversations_v1:CreateService", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateService">)),
    ConversationsV1CreateServiceConversation: (...args) => callOperation("conversations_v1:CreateServiceConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceConversation">)),
    ConversationsV1CreateServiceConversationMessage: (...args) => callOperation("conversations_v1:CreateServiceConversationMessage", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceConversationMessage">)),
    ConversationsV1CreateServiceConversationParticipant: (...args) => callOperation("conversations_v1:CreateServiceConversationParticipant", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceConversationParticipant">)),
    ConversationsV1CreateServiceConversationScopedWebhook: (...args) => callOperation("conversations_v1:CreateServiceConversationScopedWebhook", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceConversationScopedWebhook">)),
    ConversationsV1CreateServiceConversationWithParticipants: (...args) => callOperation("conversations_v1:CreateServiceConversationWithParticipants", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceConversationWithParticipants">)),
    ConversationsV1CreateServiceRole: (...args) => callOperation("conversations_v1:CreateServiceRole", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceRole">)),
    ConversationsV1CreateServiceUser: (...args) => callOperation("conversations_v1:CreateServiceUser", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateServiceUser">)),
    ConversationsV1CreateUser: (...args) => callOperation("conversations_v1:CreateUser", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:CreateUser">)),
    ConversationsV1DeleteConfigurationAddress: (...args) => callOperation("conversations_v1:DeleteConfigurationAddress", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteConfigurationAddress">)),
    ConversationsV1DeleteConversation: (...args) => callOperation("conversations_v1:DeleteConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteConversation">)),
    ConversationsV1DeleteConversationMessage: (...args) => callOperation("conversations_v1:DeleteConversationMessage", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteConversationMessage">)),
    ConversationsV1DeleteConversationParticipant: (...args) => callOperation("conversations_v1:DeleteConversationParticipant", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteConversationParticipant">)),
    ConversationsV1DeleteConversationScopedWebhook: (...args) => callOperation("conversations_v1:DeleteConversationScopedWebhook", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteConversationScopedWebhook">)),
    ConversationsV1DeleteCredential: (...args) => callOperation("conversations_v1:DeleteCredential", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteCredential">)),
    ConversationsV1DeleteRole: (...args) => callOperation("conversations_v1:DeleteRole", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteRole">)),
    ConversationsV1DeleteService: (...args) => callOperation("conversations_v1:DeleteService", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteService">)),
    ConversationsV1DeleteServiceBinding: (...args) => callOperation("conversations_v1:DeleteServiceBinding", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceBinding">)),
    ConversationsV1DeleteServiceConversation: (...args) => callOperation("conversations_v1:DeleteServiceConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceConversation">)),
    ConversationsV1DeleteServiceConversationMessage: (...args) => callOperation("conversations_v1:DeleteServiceConversationMessage", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceConversationMessage">)),
    ConversationsV1DeleteServiceConversationParticipant: (...args) => callOperation("conversations_v1:DeleteServiceConversationParticipant", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceConversationParticipant">)),
    ConversationsV1DeleteServiceConversationScopedWebhook: (...args) => callOperation("conversations_v1:DeleteServiceConversationScopedWebhook", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceConversationScopedWebhook">)),
    ConversationsV1DeleteServiceRole: (...args) => callOperation("conversations_v1:DeleteServiceRole", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceRole">)),
    ConversationsV1DeleteServiceUser: (...args) => callOperation("conversations_v1:DeleteServiceUser", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceUser">)),
    ConversationsV1DeleteServiceUserConversation: (...args) => callOperation("conversations_v1:DeleteServiceUserConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteServiceUserConversation">)),
    ConversationsV1DeleteUser: (...args) => callOperation("conversations_v1:DeleteUser", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteUser">)),
    ConversationsV1DeleteUserConversation: (...args) => callOperation("conversations_v1:DeleteUserConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:DeleteUserConversation">)),
    ConversationsV1FetchConfiguration: (...args) => callOperation("conversations_v1:FetchConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConfiguration">)),
    ConversationsV1FetchConfigurationAddress: (...args) => callOperation("conversations_v1:FetchConfigurationAddress", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConfigurationAddress">)),
    ConversationsV1FetchConfigurationWebhook: (...args) => callOperation("conversations_v1:FetchConfigurationWebhook", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConfigurationWebhook">)),
    ConversationsV1FetchConversation: (...args) => callOperation("conversations_v1:FetchConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConversation">)),
    ConversationsV1FetchConversationMessage: (...args) => callOperation("conversations_v1:FetchConversationMessage", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConversationMessage">)),
    ConversationsV1FetchConversationMessageReceipt: (...args) => callOperation("conversations_v1:FetchConversationMessageReceipt", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConversationMessageReceipt">)),
    ConversationsV1FetchConversationParticipant: (...args) => callOperation("conversations_v1:FetchConversationParticipant", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConversationParticipant">)),
    ConversationsV1FetchConversationScopedWebhook: (...args) => callOperation("conversations_v1:FetchConversationScopedWebhook", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchConversationScopedWebhook">)),
    ConversationsV1FetchCredential: (...args) => callOperation("conversations_v1:FetchCredential", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchCredential">)),
    ConversationsV1FetchRole: (...args) => callOperation("conversations_v1:FetchRole", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchRole">)),
    ConversationsV1FetchService: (...args) => callOperation("conversations_v1:FetchService", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchService">)),
    ConversationsV1FetchServiceBinding: (...args) => callOperation("conversations_v1:FetchServiceBinding", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceBinding">)),
    ConversationsV1FetchServiceConfiguration: (...args) => callOperation("conversations_v1:FetchServiceConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceConfiguration">)),
    ConversationsV1FetchServiceConversation: (...args) => callOperation("conversations_v1:FetchServiceConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceConversation">)),
    ConversationsV1FetchServiceConversationMessage: (...args) => callOperation("conversations_v1:FetchServiceConversationMessage", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceConversationMessage">)),
    ConversationsV1FetchServiceConversationMessageReceipt: (...args) => callOperation("conversations_v1:FetchServiceConversationMessageReceipt", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceConversationMessageReceipt">)),
    ConversationsV1FetchServiceConversationParticipant: (...args) => callOperation("conversations_v1:FetchServiceConversationParticipant", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceConversationParticipant">)),
    ConversationsV1FetchServiceConversationScopedWebhook: (...args) => callOperation("conversations_v1:FetchServiceConversationScopedWebhook", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceConversationScopedWebhook">)),
    ConversationsV1FetchServiceNotification: (...args) => callOperation("conversations_v1:FetchServiceNotification", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceNotification">)),
    ConversationsV1FetchServiceRole: (...args) => callOperation("conversations_v1:FetchServiceRole", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceRole">)),
    ConversationsV1FetchServiceUser: (...args) => callOperation("conversations_v1:FetchServiceUser", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceUser">)),
    ConversationsV1FetchServiceUserConversation: (...args) => callOperation("conversations_v1:FetchServiceUserConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceUserConversation">)),
    ConversationsV1FetchServiceWebhookConfiguration: (...args) => callOperation("conversations_v1:FetchServiceWebhookConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchServiceWebhookConfiguration">)),
    ConversationsV1FetchUser: (...args) => callOperation("conversations_v1:FetchUser", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchUser">)),
    ConversationsV1FetchUserConversation: (...args) => callOperation("conversations_v1:FetchUserConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:FetchUserConversation">)),
    ConversationsV1ListConfigurationAddress: (...args) => callOperation("conversations_v1:ListConfigurationAddress", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListConfigurationAddress">)),
    ConversationsV1ListConversation: (...args) => callOperation("conversations_v1:ListConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListConversation">)),
    ConversationsV1ListConversationMessage: (...args) => callOperation("conversations_v1:ListConversationMessage", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListConversationMessage">)),
    ConversationsV1ListConversationMessageReceipt: (...args) => callOperation("conversations_v1:ListConversationMessageReceipt", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListConversationMessageReceipt">)),
    ConversationsV1ListConversationParticipant: (...args) => callOperation("conversations_v1:ListConversationParticipant", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListConversationParticipant">)),
    ConversationsV1ListConversationScopedWebhook: (...args) => callOperation("conversations_v1:ListConversationScopedWebhook", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListConversationScopedWebhook">)),
    ConversationsV1ListCredential: (...args) => callOperation("conversations_v1:ListCredential", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListCredential">)),
    ConversationsV1ListParticipantConversation: (...args) => callOperation("conversations_v1:ListParticipantConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListParticipantConversation">)),
    ConversationsV1ListRole: (...args) => callOperation("conversations_v1:ListRole", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListRole">)),
    ConversationsV1ListService: (...args) => callOperation("conversations_v1:ListService", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListService">)),
    ConversationsV1ListServiceBinding: (...args) => callOperation("conversations_v1:ListServiceBinding", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceBinding">)),
    ConversationsV1ListServiceConversation: (...args) => callOperation("conversations_v1:ListServiceConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceConversation">)),
    ConversationsV1ListServiceConversationMessage: (...args) => callOperation("conversations_v1:ListServiceConversationMessage", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceConversationMessage">)),
    ConversationsV1ListServiceConversationMessageReceipt: (...args) => callOperation("conversations_v1:ListServiceConversationMessageReceipt", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceConversationMessageReceipt">)),
    ConversationsV1ListServiceConversationParticipant: (...args) => callOperation("conversations_v1:ListServiceConversationParticipant", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceConversationParticipant">)),
    ConversationsV1ListServiceConversationScopedWebhook: (...args) => callOperation("conversations_v1:ListServiceConversationScopedWebhook", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceConversationScopedWebhook">)),
    ConversationsV1ListServiceParticipantConversation: (...args) => callOperation("conversations_v1:ListServiceParticipantConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceParticipantConversation">)),
    ConversationsV1ListServiceRole: (...args) => callOperation("conversations_v1:ListServiceRole", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceRole">)),
    ConversationsV1ListServiceUser: (...args) => callOperation("conversations_v1:ListServiceUser", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceUser">)),
    ConversationsV1ListServiceUserConversation: (...args) => callOperation("conversations_v1:ListServiceUserConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListServiceUserConversation">)),
  };
}
