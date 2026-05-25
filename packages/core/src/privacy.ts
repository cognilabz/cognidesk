import type { ModelMessage } from "./types.js";

export interface PrivacyHookContext {
  conversationId: string;
  agentId: string;
  traceId?: string;
}

export interface PrivacyHooks {
  redactUserMessage?(input: PrivacyHookContext & { text: string }): Promise<string> | string;
  redactModelMessages?(input: PrivacyHookContext & { messages: ModelMessage[] }): Promise<ModelMessage[]> | ModelMessage[];
  redactAssistantMessage?(input: PrivacyHookContext & { text: string }): Promise<string> | string;
}
