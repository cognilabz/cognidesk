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
export const TwilioSmsFullApiConversationsV102OperationKeys = [
  "conversations_v1:ListUser",
  "conversations_v1:ListUserConversation",
  "conversations_v1:UpdateConfiguration",
  "conversations_v1:UpdateConfigurationAddress",
  "conversations_v1:UpdateConfigurationWebhook",
  "conversations_v1:UpdateConversation",
  "conversations_v1:UpdateConversationMessage",
  "conversations_v1:UpdateConversationParticipant",
  "conversations_v1:UpdateConversationScopedWebhook",
  "conversations_v1:UpdateCredential",
  "conversations_v1:UpdateRole",
  "conversations_v1:UpdateServiceConfiguration",
  "conversations_v1:UpdateServiceConversation",
  "conversations_v1:UpdateServiceConversationMessage",
  "conversations_v1:UpdateServiceConversationParticipant",
  "conversations_v1:UpdateServiceConversationScopedWebhook",
  "conversations_v1:UpdateServiceNotification",
  "conversations_v1:UpdateServiceRole",
  "conversations_v1:UpdateServiceUser",
  "conversations_v1:UpdateServiceUserConversation",
  "conversations_v1:UpdateServiceWebhookConfiguration",
  "conversations_v1:UpdateUser",
  "conversations_v1:UpdateUserConversation"
] as const;
export type TwilioSmsFullApiConversationsV102OperationKey = typeof TwilioSmsFullApiConversationsV102OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioSmsFullApiConversationsV102OperationPathParamMap {
  "conversations_v1:ListUser": {};
  "conversations_v1:ListUserConversation": { "UserSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateConfiguration": {};
  "conversations_v1:UpdateConfigurationAddress": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateConfigurationWebhook": {};
  "conversations_v1:UpdateConversation": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateConversationMessage": { "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateConversationParticipant": { "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateConversationScopedWebhook": { "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateCredential": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateRole": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateServiceConfiguration": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateServiceConversation": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateServiceConversationMessage": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateServiceConversationParticipant": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateServiceConversationScopedWebhook": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateServiceNotification": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateServiceRole": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateServiceUser": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateServiceUserConversation": { "ChatServiceSid": TwilioSmsFullApiPathParamValue; "UserSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateServiceWebhookConfiguration": { "ChatServiceSid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateUser": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v1:UpdateUserConversation": { "UserSid": TwilioSmsFullApiPathParamValue; "ConversationSid": TwilioSmsFullApiPathParamValue };
}

export interface TwilioSmsFullApiConversationsV102OperationRequestMap {
  "conversations_v1:ListUser": TwilioSmsFullApiOperationInput<"conversations_v1:ListUser">;
  "conversations_v1:ListUserConversation": TwilioSmsFullApiOperationInput<"conversations_v1:ListUserConversation">;
  "conversations_v1:UpdateConfiguration": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateConfiguration">;
  "conversations_v1:UpdateConfigurationAddress": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateConfigurationAddress">;
  "conversations_v1:UpdateConfigurationWebhook": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateConfigurationWebhook">;
  "conversations_v1:UpdateConversation": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateConversation">;
  "conversations_v1:UpdateConversationMessage": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateConversationMessage">;
  "conversations_v1:UpdateConversationParticipant": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateConversationParticipant">;
  "conversations_v1:UpdateConversationScopedWebhook": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateConversationScopedWebhook">;
  "conversations_v1:UpdateCredential": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateCredential">;
  "conversations_v1:UpdateRole": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateRole">;
  "conversations_v1:UpdateServiceConfiguration": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateServiceConfiguration">;
  "conversations_v1:UpdateServiceConversation": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateServiceConversation">;
  "conversations_v1:UpdateServiceConversationMessage": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateServiceConversationMessage">;
  "conversations_v1:UpdateServiceConversationParticipant": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateServiceConversationParticipant">;
  "conversations_v1:UpdateServiceConversationScopedWebhook": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateServiceConversationScopedWebhook">;
  "conversations_v1:UpdateServiceNotification": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateServiceNotification">;
  "conversations_v1:UpdateServiceRole": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateServiceRole">;
  "conversations_v1:UpdateServiceUser": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateServiceUser">;
  "conversations_v1:UpdateServiceUserConversation": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateServiceUserConversation">;
  "conversations_v1:UpdateServiceWebhookConfiguration": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateServiceWebhookConfiguration">;
  "conversations_v1:UpdateUser": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateUser">;
  "conversations_v1:UpdateUserConversation": TwilioSmsFullApiOperationInput<"conversations_v1:UpdateUserConversation">;
}

export interface TwilioSmsFullApiConversationsV102GeneratedClient {
  ConversationsV1ListUser(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListUser">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListUser"]>;
  ConversationsV1ListUserConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:ListUserConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:ListUserConversation"]>;
  ConversationsV1UpdateConfiguration(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateConfiguration"]>;
  ConversationsV1UpdateConfigurationAddress(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConfigurationAddress">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateConfigurationAddress"]>;
  ConversationsV1UpdateConfigurationWebhook(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConfigurationWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateConfigurationWebhook"]>;
  ConversationsV1UpdateConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateConversation"]>;
  ConversationsV1UpdateConversationMessage(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConversationMessage">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateConversationMessage"]>;
  ConversationsV1UpdateConversationParticipant(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConversationParticipant">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateConversationParticipant"]>;
  ConversationsV1UpdateConversationScopedWebhook(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConversationScopedWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateConversationScopedWebhook"]>;
  ConversationsV1UpdateCredential(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateCredential">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateCredential"]>;
  ConversationsV1UpdateRole(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateRole">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateRole"]>;
  ConversationsV1UpdateServiceConfiguration(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateServiceConfiguration"]>;
  ConversationsV1UpdateServiceConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateServiceConversation"]>;
  ConversationsV1UpdateServiceConversationMessage(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceConversationMessage">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateServiceConversationMessage"]>;
  ConversationsV1UpdateServiceConversationParticipant(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceConversationParticipant">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateServiceConversationParticipant"]>;
  ConversationsV1UpdateServiceConversationScopedWebhook(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceConversationScopedWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateServiceConversationScopedWebhook"]>;
  ConversationsV1UpdateServiceNotification(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceNotification">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateServiceNotification"]>;
  ConversationsV1UpdateServiceRole(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceRole">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateServiceRole"]>;
  ConversationsV1UpdateServiceUser(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceUser">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateServiceUser"]>;
  ConversationsV1UpdateServiceUserConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceUserConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateServiceUserConversation"]>;
  ConversationsV1UpdateServiceWebhookConfiguration(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceWebhookConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateServiceWebhookConfiguration"]>;
  ConversationsV1UpdateUser(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateUser">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateUser"]>;
  ConversationsV1UpdateUserConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateUserConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v1:UpdateUserConversation"]>;
}

export const TwilioSmsFullApiConversationsV102GeneratedFunctionNames = [
  "ConversationsV1ListUser",
  "ConversationsV1ListUserConversation",
  "ConversationsV1UpdateConfiguration",
  "ConversationsV1UpdateConfigurationAddress",
  "ConversationsV1UpdateConfigurationWebhook",
  "ConversationsV1UpdateConversation",
  "ConversationsV1UpdateConversationMessage",
  "ConversationsV1UpdateConversationParticipant",
  "ConversationsV1UpdateConversationScopedWebhook",
  "ConversationsV1UpdateCredential",
  "ConversationsV1UpdateRole",
  "ConversationsV1UpdateServiceConfiguration",
  "ConversationsV1UpdateServiceConversation",
  "ConversationsV1UpdateServiceConversationMessage",
  "ConversationsV1UpdateServiceConversationParticipant",
  "ConversationsV1UpdateServiceConversationScopedWebhook",
  "ConversationsV1UpdateServiceNotification",
  "ConversationsV1UpdateServiceRole",
  "ConversationsV1UpdateServiceUser",
  "ConversationsV1UpdateServiceUserConversation",
  "ConversationsV1UpdateServiceWebhookConfiguration",
  "ConversationsV1UpdateUser",
  "ConversationsV1UpdateUserConversation"
] as const satisfies readonly (keyof TwilioSmsFullApiConversationsV102GeneratedClient)[];

export function createTwilioSmsFullApiConversationsV102GeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiConversationsV102GeneratedClient {
  return {
    ConversationsV1ListUser: (...args) => callOperation("conversations_v1:ListUser", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListUser">)),
    ConversationsV1ListUserConversation: (...args) => callOperation("conversations_v1:ListUserConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:ListUserConversation">)),
    ConversationsV1UpdateConfiguration: (...args) => callOperation("conversations_v1:UpdateConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConfiguration">)),
    ConversationsV1UpdateConfigurationAddress: (...args) => callOperation("conversations_v1:UpdateConfigurationAddress", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConfigurationAddress">)),
    ConversationsV1UpdateConfigurationWebhook: (...args) => callOperation("conversations_v1:UpdateConfigurationWebhook", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConfigurationWebhook">)),
    ConversationsV1UpdateConversation: (...args) => callOperation("conversations_v1:UpdateConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConversation">)),
    ConversationsV1UpdateConversationMessage: (...args) => callOperation("conversations_v1:UpdateConversationMessage", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConversationMessage">)),
    ConversationsV1UpdateConversationParticipant: (...args) => callOperation("conversations_v1:UpdateConversationParticipant", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConversationParticipant">)),
    ConversationsV1UpdateConversationScopedWebhook: (...args) => callOperation("conversations_v1:UpdateConversationScopedWebhook", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateConversationScopedWebhook">)),
    ConversationsV1UpdateCredential: (...args) => callOperation("conversations_v1:UpdateCredential", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateCredential">)),
    ConversationsV1UpdateRole: (...args) => callOperation("conversations_v1:UpdateRole", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateRole">)),
    ConversationsV1UpdateServiceConfiguration: (...args) => callOperation("conversations_v1:UpdateServiceConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceConfiguration">)),
    ConversationsV1UpdateServiceConversation: (...args) => callOperation("conversations_v1:UpdateServiceConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceConversation">)),
    ConversationsV1UpdateServiceConversationMessage: (...args) => callOperation("conversations_v1:UpdateServiceConversationMessage", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceConversationMessage">)),
    ConversationsV1UpdateServiceConversationParticipant: (...args) => callOperation("conversations_v1:UpdateServiceConversationParticipant", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceConversationParticipant">)),
    ConversationsV1UpdateServiceConversationScopedWebhook: (...args) => callOperation("conversations_v1:UpdateServiceConversationScopedWebhook", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceConversationScopedWebhook">)),
    ConversationsV1UpdateServiceNotification: (...args) => callOperation("conversations_v1:UpdateServiceNotification", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceNotification">)),
    ConversationsV1UpdateServiceRole: (...args) => callOperation("conversations_v1:UpdateServiceRole", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceRole">)),
    ConversationsV1UpdateServiceUser: (...args) => callOperation("conversations_v1:UpdateServiceUser", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceUser">)),
    ConversationsV1UpdateServiceUserConversation: (...args) => callOperation("conversations_v1:UpdateServiceUserConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceUserConversation">)),
    ConversationsV1UpdateServiceWebhookConfiguration: (...args) => callOperation("conversations_v1:UpdateServiceWebhookConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateServiceWebhookConfiguration">)),
    ConversationsV1UpdateUser: (...args) => callOperation("conversations_v1:UpdateUser", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateUser">)),
    ConversationsV1UpdateUserConversation: (...args) => callOperation("conversations_v1:UpdateUserConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v1:UpdateUserConversation">)),
  };
}
