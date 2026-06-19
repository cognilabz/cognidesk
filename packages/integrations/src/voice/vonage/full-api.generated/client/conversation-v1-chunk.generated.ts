// Generated endpoint chunk for VonageVoiceFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  VonageGeneratedOperationCaller,
  VonageVoiceFullApiOperationArgs,
  VonageVoiceFullApiOperationInput,
  VonageVoiceFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { VonageVoiceFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const VonageVoiceFullApiConversationV1OperationKeys = [
  "conversation_v1:listConversations",
  "conversation_v1:createConversation",
  "conversation_v1:retrieveConversation",
  "conversation_v1:replaceConversation",
  "conversation_v1:deleteConversation",
  "conversation_v1:getMembers",
  "conversation_v1:createMember",
  "conversation_v1:getMe",
  "conversation_v1:getMember",
  "conversation_v1:updateMember",
  "conversation_v1:createEvent",
  "conversation_v1:getEvents",
  "conversation_v1:getEvent",
  "conversation_v1:deleteEvent",
  "conversation_v1:getuserConversations",
  "conversation_v1:talk",
  "conversation_v1:stopTalk",
  "conversation_v1:startStream",
  "conversation_v1:stopStream",
  "conversation_v1:recordConversation"
] as const;
export type VonageVoiceFullApiConversationV1OperationKey = typeof VonageVoiceFullApiConversationV1OperationKeys[number];
// End hardened literal operation keys.

export interface VonageVoiceFullApiConversationV1OperationPathParamMap {
  "conversation_v1:listConversations": {};
  "conversation_v1:createConversation": {};
  "conversation_v1:retrieveConversation": { "conversation_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:replaceConversation": { "conversation_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:deleteConversation": { "conversation_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:getMembers": { "conversation_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:createMember": { "conversation_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:getMe": { "conversation_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:getMember": { "conversation_id": VonageVoiceFullApiPathParamValue; "member_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:updateMember": { "conversation_id": VonageVoiceFullApiPathParamValue; "member_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:createEvent": { "conversation_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:getEvents": { "conversation_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:getEvent": { "conversation_id": VonageVoiceFullApiPathParamValue; "event_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:deleteEvent": { "conversation_id": VonageVoiceFullApiPathParamValue; "event_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:getuserConversations": { "user_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:talk": { "conversation_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:stopTalk": { "conversation_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:startStream": { "conversation_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:stopStream": { "conversation_id": VonageVoiceFullApiPathParamValue };
  "conversation_v1:recordConversation": { "conversation_id": VonageVoiceFullApiPathParamValue };
}

export interface VonageVoiceFullApiConversationV1OperationRequestMap {
  "conversation_v1:listConversations": VonageVoiceFullApiOperationInput<"conversation_v1:listConversations">;
  "conversation_v1:createConversation": VonageVoiceFullApiOperationInput<"conversation_v1:createConversation">;
  "conversation_v1:retrieveConversation": VonageVoiceFullApiOperationInput<"conversation_v1:retrieveConversation">;
  "conversation_v1:replaceConversation": VonageVoiceFullApiOperationInput<"conversation_v1:replaceConversation">;
  "conversation_v1:deleteConversation": VonageVoiceFullApiOperationInput<"conversation_v1:deleteConversation">;
  "conversation_v1:getMembers": VonageVoiceFullApiOperationInput<"conversation_v1:getMembers">;
  "conversation_v1:createMember": VonageVoiceFullApiOperationInput<"conversation_v1:createMember">;
  "conversation_v1:getMe": VonageVoiceFullApiOperationInput<"conversation_v1:getMe">;
  "conversation_v1:getMember": VonageVoiceFullApiOperationInput<"conversation_v1:getMember">;
  "conversation_v1:updateMember": VonageVoiceFullApiOperationInput<"conversation_v1:updateMember">;
  "conversation_v1:createEvent": VonageVoiceFullApiOperationInput<"conversation_v1:createEvent">;
  "conversation_v1:getEvents": VonageVoiceFullApiOperationInput<"conversation_v1:getEvents">;
  "conversation_v1:getEvent": VonageVoiceFullApiOperationInput<"conversation_v1:getEvent">;
  "conversation_v1:deleteEvent": VonageVoiceFullApiOperationInput<"conversation_v1:deleteEvent">;
  "conversation_v1:getuserConversations": VonageVoiceFullApiOperationInput<"conversation_v1:getuserConversations">;
  "conversation_v1:talk": VonageVoiceFullApiOperationInput<"conversation_v1:talk">;
  "conversation_v1:stopTalk": VonageVoiceFullApiOperationInput<"conversation_v1:stopTalk">;
  "conversation_v1:startStream": VonageVoiceFullApiOperationInput<"conversation_v1:startStream">;
  "conversation_v1:stopStream": VonageVoiceFullApiOperationInput<"conversation_v1:stopStream">;
  "conversation_v1:recordConversation": VonageVoiceFullApiOperationInput<"conversation_v1:recordConversation">;
}

export interface VonageVoiceFullApiConversationV1GeneratedClient {
  ConversationV1ListConversations(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:listConversations">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:listConversations"]>;
  ConversationV1CreateConversation(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:createConversation">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:createConversation"]>;
  ConversationV1RetrieveConversation(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:retrieveConversation">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:retrieveConversation"]>;
  ConversationV1ReplaceConversation(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:replaceConversation">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:replaceConversation"]>;
  ConversationV1DeleteConversation(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:deleteConversation">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:deleteConversation"]>;
  ConversationV1GetMembers(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:getMembers">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:getMembers"]>;
  ConversationV1CreateMember(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:createMember">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:createMember"]>;
  ConversationV1GetMe(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:getMe">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:getMe"]>;
  ConversationV1GetMember(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:getMember">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:getMember"]>;
  ConversationV1UpdateMember(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:updateMember">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:updateMember"]>;
  ConversationV1CreateEvent(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:createEvent">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:createEvent"]>;
  ConversationV1GetEvents(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:getEvents">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:getEvents"]>;
  ConversationV1GetEvent(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:getEvent">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:getEvent"]>;
  ConversationV1DeleteEvent(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:deleteEvent">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:deleteEvent"]>;
  ConversationV1GetuserConversations(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:getuserConversations">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:getuserConversations"]>;
  ConversationV1Talk(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:talk">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:talk"]>;
  ConversationV1StopTalk(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:stopTalk">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:stopTalk"]>;
  ConversationV1StartStream(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:startStream">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:startStream"]>;
  ConversationV1StopStream(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:stopStream">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:stopStream"]>;
  ConversationV1RecordConversation(...args: VonageVoiceFullApiOperationArgs<"conversation_v1:recordConversation">): Promise<VonageVoiceFullApiOperationResponseMap["conversation_v1:recordConversation"]>;
}

export const VonageVoiceFullApiConversationV1GeneratedFunctionNames = [
  "ConversationV1ListConversations",
  "ConversationV1CreateConversation",
  "ConversationV1RetrieveConversation",
  "ConversationV1ReplaceConversation",
  "ConversationV1DeleteConversation",
  "ConversationV1GetMembers",
  "ConversationV1CreateMember",
  "ConversationV1GetMe",
  "ConversationV1GetMember",
  "ConversationV1UpdateMember",
  "ConversationV1CreateEvent",
  "ConversationV1GetEvents",
  "ConversationV1GetEvent",
  "ConversationV1DeleteEvent",
  "ConversationV1GetuserConversations",
  "ConversationV1Talk",
  "ConversationV1StopTalk",
  "ConversationV1StartStream",
  "ConversationV1StopStream",
  "ConversationV1RecordConversation"
] as const satisfies readonly (keyof VonageVoiceFullApiConversationV1GeneratedClient)[];

export function createVonageVoiceFullApiConversationV1GeneratedClient(
  callOperation: VonageGeneratedOperationCaller,
): VonageVoiceFullApiConversationV1GeneratedClient {
  return {
    ConversationV1ListConversations: (...args) => callOperation("conversation_v1:listConversations", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:listConversations">)),
    ConversationV1CreateConversation: (...args) => callOperation("conversation_v1:createConversation", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:createConversation">)),
    ConversationV1RetrieveConversation: (...args) => callOperation("conversation_v1:retrieveConversation", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:retrieveConversation">)),
    ConversationV1ReplaceConversation: (...args) => callOperation("conversation_v1:replaceConversation", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:replaceConversation">)),
    ConversationV1DeleteConversation: (...args) => callOperation("conversation_v1:deleteConversation", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:deleteConversation">)),
    ConversationV1GetMembers: (...args) => callOperation("conversation_v1:getMembers", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:getMembers">)),
    ConversationV1CreateMember: (...args) => callOperation("conversation_v1:createMember", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:createMember">)),
    ConversationV1GetMe: (...args) => callOperation("conversation_v1:getMe", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:getMe">)),
    ConversationV1GetMember: (...args) => callOperation("conversation_v1:getMember", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:getMember">)),
    ConversationV1UpdateMember: (...args) => callOperation("conversation_v1:updateMember", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:updateMember">)),
    ConversationV1CreateEvent: (...args) => callOperation("conversation_v1:createEvent", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:createEvent">)),
    ConversationV1GetEvents: (...args) => callOperation("conversation_v1:getEvents", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:getEvents">)),
    ConversationV1GetEvent: (...args) => callOperation("conversation_v1:getEvent", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:getEvent">)),
    ConversationV1DeleteEvent: (...args) => callOperation("conversation_v1:deleteEvent", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:deleteEvent">)),
    ConversationV1GetuserConversations: (...args) => callOperation("conversation_v1:getuserConversations", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:getuserConversations">)),
    ConversationV1Talk: (...args) => callOperation("conversation_v1:talk", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:talk">)),
    ConversationV1StopTalk: (...args) => callOperation("conversation_v1:stopTalk", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:stopTalk">)),
    ConversationV1StartStream: (...args) => callOperation("conversation_v1:startStream", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:startStream">)),
    ConversationV1StopStream: (...args) => callOperation("conversation_v1:stopStream", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:stopStream">)),
    ConversationV1RecordConversation: (...args) => callOperation("conversation_v1:recordConversation", ...(args as VonageVoiceFullApiOperationArgs<"conversation_v1:recordConversation">)),
  };
}
