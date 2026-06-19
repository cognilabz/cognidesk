// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiChatRequestsOperationKeys = [
  "chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat",
  "chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text",
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept",
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject",
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end",
  "chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat",
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text",
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent",
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill",
  "chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing",
  "patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats",
  "patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}",
  "patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}",
  "patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text",
  "patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing",
  "patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview",
  "patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email",
  "patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile"
] as const;
export type NiceCxoneFullApiChatRequestsOperationKey = typeof NiceCxoneFullApiChatRequestsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiChatRequestsOperationPathParamMap {
  "chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat": { "sessionId": NiceCxoneFullApiPathParamValue };
  "chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text": { "sessionId": NiceCxoneFullApiPathParamValue };
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing": { "sessionId": NiceCxoneFullApiPathParamValue; "contactId": NiceCxoneFullApiPathParamValue };
  "patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats": {};
  "patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}": { "chatSession": NiceCxoneFullApiPathParamValue };
  "patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}": { "chatSession": NiceCxoneFullApiPathParamValue };
  "patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text": { "chatSession": NiceCxoneFullApiPathParamValue };
  "patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing": { "chatSession": NiceCxoneFullApiPathParamValue };
  "patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview": { "chatSession": NiceCxoneFullApiPathParamValue };
  "patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email": {};
  "patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile": { "pointsOfContactId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiChatRequestsOperationRequestMap {
  "chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat": NiceCxoneFullApiOperationInput<"chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat">;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text": NiceCxoneFullApiOperationInput<"chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text">;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept": NiceCxoneFullApiOperationInput<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept">;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject": NiceCxoneFullApiOperationInput<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject">;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end": NiceCxoneFullApiOperationInput<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">;
  "chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat": NiceCxoneFullApiOperationInput<"chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat">;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text": NiceCxoneFullApiOperationInput<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text">;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent": NiceCxoneFullApiOperationInput<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent">;
  "chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill": NiceCxoneFullApiOperationInput<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill">;
  "chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing": NiceCxoneFullApiOperationInput<"chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing">;
  "patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats": NiceCxoneFullApiOperationInput<"patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats">;
  "patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}": NiceCxoneFullApiOperationInput<"patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}">;
  "patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}": NiceCxoneFullApiOperationInput<"patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}">;
  "patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text": NiceCxoneFullApiOperationInput<"patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text">;
  "patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing": NiceCxoneFullApiOperationInput<"patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing">;
  "patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview": NiceCxoneFullApiOperationInput<"patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview">;
  "patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email": NiceCxoneFullApiOperationInput<"patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email">;
  "patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile": NiceCxoneFullApiOperationInput<"patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile">;
}

export interface NiceCxoneFullApiChatRequestsGeneratedClient {
  ChatrequestsApiDocsAddChatContact(...args: NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat">): Promise<NiceCxoneFullApiOperationResponseMap["chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat"]>;
  ChatrequestsApiDocsPostAgentSessionsIdInteractionsAddText(...args: NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text">): Promise<NiceCxoneFullApiOperationResponseMap["chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text"]>;
  ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdAccept(...args: NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept">): Promise<NiceCxoneFullApiOperationResponseMap["chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept"]>;
  ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdReject(...args: NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject">): Promise<NiceCxoneFullApiOperationResponseMap["chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject"]>;
  ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdEnd(...args: NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">): Promise<NiceCxoneFullApiOperationResponseMap["chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end"]>;
  ChatrequestsApiDocsActivateChatContact(...args: NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat">): Promise<NiceCxoneFullApiOperationResponseMap["chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat"]>;
  ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdSendChatText(...args: NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text">): Promise<NiceCxoneFullApiOperationResponseMap["chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text"]>;
  ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdTransferChatToAgent(...args: NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent">): Promise<NiceCxoneFullApiOperationResponseMap["chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent"]>;
  ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdTransferChatToSkill(...args: NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill">): Promise<NiceCxoneFullApiOperationResponseMap["chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill"]>;
  ChatrequestsApiDocsAgentTyping(...args: NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing">): Promise<NiceCxoneFullApiOperationResponseMap["chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing"]>;
  PatronChatrequestsApiDocsPostContactsChats(...args: NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats">): Promise<NiceCxoneFullApiOperationResponseMap["patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats"]>;
  PatronChatrequestsApiDocsGetChatText(...args: NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}">): Promise<NiceCxoneFullApiOperationResponseMap["patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}"]>;
  PatronChatrequestsApiDocsEndChat(...args: NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}">): Promise<NiceCxoneFullApiOperationResponseMap["patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}"]>;
  PatronChatrequestsApiDocsPostContactsChatsIdSendText(...args: NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text">): Promise<NiceCxoneFullApiOperationResponseMap["patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text"]>;
  PatronChatrequestsApiDocsPatronTyping(...args: NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing">): Promise<NiceCxoneFullApiOperationResponseMap["patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing"]>;
  PatronChatrequestsApiDocsPatronTypingPreview(...args: NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview">): Promise<NiceCxoneFullApiOperationResponseMap["patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview"]>;
  PatronChatrequestsApiDocsPostContactsChatsSendEmail(...args: NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email">): Promise<NiceCxoneFullApiOperationResponseMap["patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email"]>;
  PatronChatrequestsApiDocsGetPointChatProfile(...args: NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile">): Promise<NiceCxoneFullApiOperationResponseMap["patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile"]>;
}

export const NiceCxoneFullApiChatRequestsGeneratedFunctionNames = [
  "ChatrequestsApiDocsAddChatContact",
  "ChatrequestsApiDocsPostAgentSessionsIdInteractionsAddText",
  "ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdAccept",
  "ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdReject",
  "ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdEnd",
  "ChatrequestsApiDocsActivateChatContact",
  "ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdSendChatText",
  "ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdTransferChatToAgent",
  "ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdTransferChatToSkill",
  "ChatrequestsApiDocsAgentTyping",
  "PatronChatrequestsApiDocsPostContactsChats",
  "PatronChatrequestsApiDocsGetChatText",
  "PatronChatrequestsApiDocsEndChat",
  "PatronChatrequestsApiDocsPostContactsChatsIdSendText",
  "PatronChatrequestsApiDocsPatronTyping",
  "PatronChatrequestsApiDocsPatronTypingPreview",
  "PatronChatrequestsApiDocsPostContactsChatsSendEmail",
  "PatronChatrequestsApiDocsGetPointChatProfile"
] as const satisfies readonly (keyof NiceCxoneFullApiChatRequestsGeneratedClient)[];

export function createNiceCxoneFullApiChatRequestsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiChatRequestsGeneratedClient {
  return {
    ChatrequestsApiDocsAddChatContact: (...args) => callOperation("chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat", ...(args as NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:addChatContact:POST:/agent-sessions/{sessionId}/interactions/add-chat">)),
    ChatrequestsApiDocsPostAgentSessionsIdInteractionsAddText: (...args) => callOperation("chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text", ...(args as NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-add-text:POST:/agent-sessions/{sessionId}/interactions/add-text">)),
    ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdAccept: (...args) => callOperation("chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept", ...(args as NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-accept:POST:/agent-sessions/{sessionId}/interactions/{contactId}/accept">)),
    ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdReject: (...args) => callOperation("chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject", ...(args as NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-reject:POST:/agent-sessions/{sessionId}/interactions/{contactId}/reject">)),
    ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdEnd: (...args) => callOperation("chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end", ...(args as NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-end:POST:/agent-sessions/{sessionId}/interactions/{contactId}/end">)),
    ChatrequestsApiDocsActivateChatContact: (...args) => callOperation("chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat", ...(args as NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:activateChatContact:POST:/agent-sessions/{sessionId}/interactions/{contactId}/activate-chat">)),
    ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdSendChatText: (...args) => callOperation("chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text", ...(args as NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-send-chat-text:POST:/agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text">)),
    ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdTransferChatToAgent: (...args) => callOperation("chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent", ...(args as NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-agent:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent">)),
    ChatrequestsApiDocsPostAgentSessionsIdInteractionsIdTransferChatToSkill: (...args) => callOperation("chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill", ...(args as NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:post-agent-sessions-id-interactions-id-transfer-chat-to-skill:POST:/agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill">)),
    ChatrequestsApiDocsAgentTyping: (...args) => callOperation("chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing", ...(args as NiceCxoneFullApiOperationArgs<"chatrequests-api-docs:AgentTyping:POST:/agent-sessions/{sessionId}/interactions/{contactId}/typing">)),
    PatronChatrequestsApiDocsPostContactsChats: (...args) => callOperation("patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats", ...(args as NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:post-contacts-chats:POST:/contacts/chats">)),
    PatronChatrequestsApiDocsGetChatText: (...args) => callOperation("patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}", ...(args as NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:getChatText:GET:/contacts/chats/{chatSession}">)),
    PatronChatrequestsApiDocsEndChat: (...args) => callOperation("patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}", ...(args as NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:endChat:DELETE:/contacts/chats/{chatSession}">)),
    PatronChatrequestsApiDocsPostContactsChatsIdSendText: (...args) => callOperation("patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text", ...(args as NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:post-contacts-chats-id-send-text:POST:/contacts/chats/{chatSession}/send-text">)),
    PatronChatrequestsApiDocsPatronTyping: (...args) => callOperation("patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing", ...(args as NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:PatronTyping:POST:/contacts/chats/{chatSession}/typing">)),
    PatronChatrequestsApiDocsPatronTypingPreview: (...args) => callOperation("patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview", ...(args as NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:PatronTypingPreview:POST:/contacts/chats/{chatSession}/typing-preview">)),
    PatronChatrequestsApiDocsPostContactsChatsSendEmail: (...args) => callOperation("patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email", ...(args as NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:post-contacts-chats-send-email:POST:/contacts/chats/send-email">)),
    PatronChatrequestsApiDocsGetPointChatProfile: (...args) => callOperation("patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile", ...(args as NiceCxoneFullApiOperationArgs<"patron-chatrequests-api-docs:getPointChatProfile:GET:/points-of-contact/{pointsOfContactId}/chat-profile">)),
  };
}
