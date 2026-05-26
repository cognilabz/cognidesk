import type { ConversationRecord } from "../storage.js";
import type { ModelMessage } from "../types.js";
import type { RuntimeOptions } from "./types.js";

export async function redactUserMessage(
  options: RuntimeOptions,
  conversation: ConversationRecord,
  text: string,
) {
  return await options.privacy?.redactUserMessage?.({
    conversationId: conversation.id,
    agentId: conversation.agentId,
    text,
  }) ?? text;
}

export async function redactModelMessages(
  options: RuntimeOptions,
  conversation: ConversationRecord,
  messages: ModelMessage[],
) {
  return await options.privacy?.redactModelMessages?.({
    conversationId: conversation.id,
    agentId: conversation.agentId,
    messages,
  }) ?? messages;
}

export async function redactAssistantMessage(
  options: RuntimeOptions,
  conversation: ConversationRecord,
  text: string,
) {
  return await options.privacy?.redactAssistantMessage?.({
    conversationId: conversation.id,
    agentId: conversation.agentId,
    text,
  }) ?? text;
}
