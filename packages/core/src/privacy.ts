import type { RuntimeEventInput } from "./storage.js";
import type {
  ChannelContext,
  ModelMessage,
  RuntimeSnapshot,
  TextGenerationInput,
} from "./types.js";

type MaybePromise<T> = Promise<T> | T;

export interface PrivacyHookContext {
  conversationId: string;
  agentId: string;
}

export interface PrivacyHooks {
  redactUserMessage?(input: PrivacyHookContext & { text: string }): MaybePromise<string>;
  redactModelMessages?(input: PrivacyHookContext & { messages: ModelMessage[] }): MaybePromise<ModelMessage[]>;
  redactAssistantMessage?(input: PrivacyHookContext & { text: string }): MaybePromise<string>;
  redactConversationContext?(input: PrivacyHookContext & { context: unknown }): MaybePromise<unknown>;
  redactInboundChannelEvent?(input: PrivacyHookContext & { event: RuntimeEventInput<"channel.received">; channel: ChannelContext }): MaybePromise<RuntimeEventInput<"channel.received">>;
  redactOutboundChannelMessage?(input: PrivacyHookContext & { event: RuntimeEventInput<"channel.sent">; channel: ChannelContext }): MaybePromise<RuntimeEventInput<"channel.sent">>;
  redactRuntimeEvent?(input: PrivacyHookContext & { event: RuntimeEventInput }): MaybePromise<RuntimeEventInput>;
  redactRuntimeSnapshot?(input: PrivacyHookContext & { snapshot: RuntimeSnapshot }): MaybePromise<RuntimeSnapshot>;
  redactModelInput?(input: PrivacyHookContext & { input: TextGenerationInput }): MaybePromise<TextGenerationInput>;
}
