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
export const TwilioSmsFullApiConversationsV2OperationKeys = [
  "conversations_v2:CreateCommunicationInConversation",
  "conversations_v2:CreateConfiguration",
  "conversations_v2:CreateConversationAction",
  "conversations_v2:CreateConversationWithConfig",
  "conversations_v2:CreateParticipantInConversation",
  "conversations_v2:DeleteConfiguration",
  "conversations_v2:DeleteConversationAsync",
  "conversations_v2:FetchCommunication",
  "conversations_v2:FetchConfiguration",
  "conversations_v2:FetchConversation",
  "conversations_v2:FetchConversationAction",
  "conversations_v2:FetchOperationStatus",
  "conversations_v2:FetchParticipant",
  "conversations_v2:ListCommunicationByConversation",
  "conversations_v2:ListConfiguration",
  "conversations_v2:ListConversationByAccount",
  "conversations_v2:ListParticipantByConversation",
  "conversations_v2:PatchConversationById",
  "conversations_v2:UpdateConfiguration",
  "conversations_v2:UpdateConversationById",
  "conversations_v2:UpdateParticipantInConversation"
] as const;
export type TwilioSmsFullApiConversationsV2OperationKey = typeof TwilioSmsFullApiConversationsV2OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioSmsFullApiConversationsV2OperationPathParamMap {
  "conversations_v2:CreateCommunicationInConversation": { "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:CreateConfiguration": {};
  "conversations_v2:CreateConversationAction": { "ConversationId": TwilioSmsFullApiPathParamValue };
  "conversations_v2:CreateConversationWithConfig": {};
  "conversations_v2:CreateParticipantInConversation": { "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:DeleteConfiguration": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:DeleteConversationAsync": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:FetchCommunication": { "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:FetchConfiguration": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:FetchConversation": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:FetchConversationAction": { "ConversationId": TwilioSmsFullApiPathParamValue; "ActionId": TwilioSmsFullApiPathParamValue };
  "conversations_v2:FetchOperationStatus": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:FetchParticipant": { "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:ListCommunicationByConversation": { "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:ListConfiguration": {};
  "conversations_v2:ListConversationByAccount": {};
  "conversations_v2:ListParticipantByConversation": { "ConversationSid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:PatchConversationById": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:UpdateConfiguration": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:UpdateConversationById": { "Sid": TwilioSmsFullApiPathParamValue };
  "conversations_v2:UpdateParticipantInConversation": { "ConversationSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
}

export interface TwilioSmsFullApiConversationsV2OperationRequestMap {
  "conversations_v2:CreateCommunicationInConversation": TwilioSmsFullApiOperationInput<"conversations_v2:CreateCommunicationInConversation">;
  "conversations_v2:CreateConfiguration": TwilioSmsFullApiOperationInput<"conversations_v2:CreateConfiguration">;
  "conversations_v2:CreateConversationAction": TwilioSmsFullApiOperationInput<"conversations_v2:CreateConversationAction">;
  "conversations_v2:CreateConversationWithConfig": TwilioSmsFullApiOperationInput<"conversations_v2:CreateConversationWithConfig">;
  "conversations_v2:CreateParticipantInConversation": TwilioSmsFullApiOperationInput<"conversations_v2:CreateParticipantInConversation">;
  "conversations_v2:DeleteConfiguration": TwilioSmsFullApiOperationInput<"conversations_v2:DeleteConfiguration">;
  "conversations_v2:DeleteConversationAsync": TwilioSmsFullApiOperationInput<"conversations_v2:DeleteConversationAsync">;
  "conversations_v2:FetchCommunication": TwilioSmsFullApiOperationInput<"conversations_v2:FetchCommunication">;
  "conversations_v2:FetchConfiguration": TwilioSmsFullApiOperationInput<"conversations_v2:FetchConfiguration">;
  "conversations_v2:FetchConversation": TwilioSmsFullApiOperationInput<"conversations_v2:FetchConversation">;
  "conversations_v2:FetchConversationAction": TwilioSmsFullApiOperationInput<"conversations_v2:FetchConversationAction">;
  "conversations_v2:FetchOperationStatus": TwilioSmsFullApiOperationInput<"conversations_v2:FetchOperationStatus">;
  "conversations_v2:FetchParticipant": TwilioSmsFullApiOperationInput<"conversations_v2:FetchParticipant">;
  "conversations_v2:ListCommunicationByConversation": TwilioSmsFullApiOperationInput<"conversations_v2:ListCommunicationByConversation">;
  "conversations_v2:ListConfiguration": TwilioSmsFullApiOperationInput<"conversations_v2:ListConfiguration">;
  "conversations_v2:ListConversationByAccount": TwilioSmsFullApiOperationInput<"conversations_v2:ListConversationByAccount">;
  "conversations_v2:ListParticipantByConversation": TwilioSmsFullApiOperationInput<"conversations_v2:ListParticipantByConversation">;
  "conversations_v2:PatchConversationById": TwilioSmsFullApiOperationInput<"conversations_v2:PatchConversationById">;
  "conversations_v2:UpdateConfiguration": TwilioSmsFullApiOperationInput<"conversations_v2:UpdateConfiguration">;
  "conversations_v2:UpdateConversationById": TwilioSmsFullApiOperationInput<"conversations_v2:UpdateConversationById">;
  "conversations_v2:UpdateParticipantInConversation": TwilioSmsFullApiOperationInput<"conversations_v2:UpdateParticipantInConversation">;
}

export interface TwilioSmsFullApiConversationsV2GeneratedClient {
  ConversationsV2CreateCommunicationInConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:CreateCommunicationInConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:CreateCommunicationInConversation"]>;
  ConversationsV2CreateConfiguration(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:CreateConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:CreateConfiguration"]>;
  ConversationsV2CreateConversationAction(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:CreateConversationAction">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:CreateConversationAction"]>;
  ConversationsV2CreateConversationWithConfig(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:CreateConversationWithConfig">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:CreateConversationWithConfig"]>;
  ConversationsV2CreateParticipantInConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:CreateParticipantInConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:CreateParticipantInConversation"]>;
  ConversationsV2DeleteConfiguration(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:DeleteConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:DeleteConfiguration"]>;
  ConversationsV2DeleteConversationAsync(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:DeleteConversationAsync">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:DeleteConversationAsync"]>;
  ConversationsV2FetchCommunication(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:FetchCommunication">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:FetchCommunication"]>;
  ConversationsV2FetchConfiguration(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:FetchConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:FetchConfiguration"]>;
  ConversationsV2FetchConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:FetchConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:FetchConversation"]>;
  ConversationsV2FetchConversationAction(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:FetchConversationAction">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:FetchConversationAction"]>;
  ConversationsV2FetchOperationStatus(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:FetchOperationStatus">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:FetchOperationStatus"]>;
  ConversationsV2FetchParticipant(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:FetchParticipant">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:FetchParticipant"]>;
  ConversationsV2ListCommunicationByConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:ListCommunicationByConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:ListCommunicationByConversation"]>;
  ConversationsV2ListConfiguration(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:ListConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:ListConfiguration"]>;
  ConversationsV2ListConversationByAccount(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:ListConversationByAccount">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:ListConversationByAccount"]>;
  ConversationsV2ListParticipantByConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:ListParticipantByConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:ListParticipantByConversation"]>;
  ConversationsV2PatchConversationById(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:PatchConversationById">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:PatchConversationById"]>;
  ConversationsV2UpdateConfiguration(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:UpdateConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:UpdateConfiguration"]>;
  ConversationsV2UpdateConversationById(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:UpdateConversationById">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:UpdateConversationById"]>;
  ConversationsV2UpdateParticipantInConversation(...args: TwilioSmsFullApiOperationArgs<"conversations_v2:UpdateParticipantInConversation">): Promise<TwilioSmsFullApiOperationResponseMap["conversations_v2:UpdateParticipantInConversation"]>;
}

export const TwilioSmsFullApiConversationsV2GeneratedFunctionNames = [
  "ConversationsV2CreateCommunicationInConversation",
  "ConversationsV2CreateConfiguration",
  "ConversationsV2CreateConversationAction",
  "ConversationsV2CreateConversationWithConfig",
  "ConversationsV2CreateParticipantInConversation",
  "ConversationsV2DeleteConfiguration",
  "ConversationsV2DeleteConversationAsync",
  "ConversationsV2FetchCommunication",
  "ConversationsV2FetchConfiguration",
  "ConversationsV2FetchConversation",
  "ConversationsV2FetchConversationAction",
  "ConversationsV2FetchOperationStatus",
  "ConversationsV2FetchParticipant",
  "ConversationsV2ListCommunicationByConversation",
  "ConversationsV2ListConfiguration",
  "ConversationsV2ListConversationByAccount",
  "ConversationsV2ListParticipantByConversation",
  "ConversationsV2PatchConversationById",
  "ConversationsV2UpdateConfiguration",
  "ConversationsV2UpdateConversationById",
  "ConversationsV2UpdateParticipantInConversation"
] as const satisfies readonly (keyof TwilioSmsFullApiConversationsV2GeneratedClient)[];

export function createTwilioSmsFullApiConversationsV2GeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiConversationsV2GeneratedClient {
  return {
    ConversationsV2CreateCommunicationInConversation: (...args) => callOperation("conversations_v2:CreateCommunicationInConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:CreateCommunicationInConversation">)),
    ConversationsV2CreateConfiguration: (...args) => callOperation("conversations_v2:CreateConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:CreateConfiguration">)),
    ConversationsV2CreateConversationAction: (...args) => callOperation("conversations_v2:CreateConversationAction", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:CreateConversationAction">)),
    ConversationsV2CreateConversationWithConfig: (...args) => callOperation("conversations_v2:CreateConversationWithConfig", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:CreateConversationWithConfig">)),
    ConversationsV2CreateParticipantInConversation: (...args) => callOperation("conversations_v2:CreateParticipantInConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:CreateParticipantInConversation">)),
    ConversationsV2DeleteConfiguration: (...args) => callOperation("conversations_v2:DeleteConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:DeleteConfiguration">)),
    ConversationsV2DeleteConversationAsync: (...args) => callOperation("conversations_v2:DeleteConversationAsync", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:DeleteConversationAsync">)),
    ConversationsV2FetchCommunication: (...args) => callOperation("conversations_v2:FetchCommunication", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:FetchCommunication">)),
    ConversationsV2FetchConfiguration: (...args) => callOperation("conversations_v2:FetchConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:FetchConfiguration">)),
    ConversationsV2FetchConversation: (...args) => callOperation("conversations_v2:FetchConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:FetchConversation">)),
    ConversationsV2FetchConversationAction: (...args) => callOperation("conversations_v2:FetchConversationAction", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:FetchConversationAction">)),
    ConversationsV2FetchOperationStatus: (...args) => callOperation("conversations_v2:FetchOperationStatus", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:FetchOperationStatus">)),
    ConversationsV2FetchParticipant: (...args) => callOperation("conversations_v2:FetchParticipant", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:FetchParticipant">)),
    ConversationsV2ListCommunicationByConversation: (...args) => callOperation("conversations_v2:ListCommunicationByConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:ListCommunicationByConversation">)),
    ConversationsV2ListConfiguration: (...args) => callOperation("conversations_v2:ListConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:ListConfiguration">)),
    ConversationsV2ListConversationByAccount: (...args) => callOperation("conversations_v2:ListConversationByAccount", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:ListConversationByAccount">)),
    ConversationsV2ListParticipantByConversation: (...args) => callOperation("conversations_v2:ListParticipantByConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:ListParticipantByConversation">)),
    ConversationsV2PatchConversationById: (...args) => callOperation("conversations_v2:PatchConversationById", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:PatchConversationById">)),
    ConversationsV2UpdateConfiguration: (...args) => callOperation("conversations_v2:UpdateConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:UpdateConfiguration">)),
    ConversationsV2UpdateConversationById: (...args) => callOperation("conversations_v2:UpdateConversationById", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:UpdateConversationById">)),
    ConversationsV2UpdateParticipantInConversation: (...args) => callOperation("conversations_v2:UpdateParticipantInConversation", ...(args as TwilioSmsFullApiOperationArgs<"conversations_v2:UpdateParticipantInConversation">)),
  };
}
