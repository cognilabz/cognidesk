import type { TraceEvent } from "./observability.js";
import type { RuntimeEventInput } from "./storage.js";
import type {
  ModelMessage,
  RuntimeSnapshot,
  TextGenerationInput,
} from "./types.js";

type MaybePromise<T> = Promise<T> | T;

export interface PrivacyHookContext {
  conversationId: string;
  agentId: string;
  traceId?: string;
}

export interface PrivacyHooks {
  redactUserMessage?(input: PrivacyHookContext & { text: string }): MaybePromise<string>;
  redactModelMessages?(input: PrivacyHookContext & { messages: ModelMessage[] }): MaybePromise<ModelMessage[]>;
  redactAssistantMessage?(input: PrivacyHookContext & { text: string }): MaybePromise<string>;
  redactConversationContext?(input: PrivacyHookContext & { context: unknown }): MaybePromise<unknown>;
  redactRuntimeEvent?(input: PrivacyHookContext & { event: RuntimeEventInput }): MaybePromise<RuntimeEventInput>;
  redactRuntimeSnapshot?(input: PrivacyHookContext & { snapshot: RuntimeSnapshot }): MaybePromise<RuntimeSnapshot>;
  redactModelInput?(input: PrivacyHookContext & { input: TextGenerationInput }): MaybePromise<TextGenerationInput>;
  redactTraceEvent?(input: PrivacyHookContext & { event: TraceEvent }): MaybePromise<TraceEvent | null>;
}
