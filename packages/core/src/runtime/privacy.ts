import type {
  ConversationRecord,
  CreateConversationInput,
  RuntimeEventInput,
  StorageAdapter,
} from "../storage.js";
import type {
  ModelMessage,
  RuntimeSnapshot,
  TextGenerationInput,
} from "../types.js";
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

export function createPrivacyStorageAdapter(
  storage: StorageAdapter,
  privacy: RuntimeOptions["privacy"],
): StorageAdapter {
  if (!privacy?.redactConversationContext
    && !privacy?.redactRuntimeEvent
    && !privacy?.redactRuntimeSnapshot
  ) {
    return storage;
  }

  return {
    initialize() {
      return storage.initialize?.();
    },
    async createConversation<TConversationContext = unknown>(
      input: CreateConversationInput<TConversationContext>,
    ) {
      const context = privacy.redactConversationContext
        ? await privacy.redactConversationContext({
          conversationId: input.id ?? "",
          agentId: input.agentId,
          context: input.context,
        })
        : input.context;
      return storage.createConversation<TConversationContext>({
        ...input,
        context: context as TConversationContext,
      });
    },
    getConversation<TConversationContext = unknown>(conversationId: string) {
      return storage.getConversation<TConversationContext>(conversationId);
    },
    updateConversationLifecycle(conversationId, lifecycle) {
      return storage.updateConversationLifecycle(conversationId, lifecycle);
    },
    async appendEvent<TEvent extends RuntimeEventInput>(event: TEvent) {
      if (!privacy.redactRuntimeEvent) return storage.appendEvent(event);
      const redacted = await privacy.redactRuntimeEvent({
        ...await privacyContextForStorage(storage, event.conversationId),
        event,
      });
      return storage.appendEvent(redacted as TEvent);
    },
    listEvents(options) {
      return storage.listEvents(options);
    },
    async saveSnapshot(snapshot: RuntimeSnapshot) {
      if (!privacy.redactRuntimeSnapshot) return storage.saveSnapshot(snapshot);
      const redacted = await privacy.redactRuntimeSnapshot({
        ...await privacyContextForStorage(storage, snapshot.conversationId),
        snapshot,
      });
      return storage.saveSnapshot(redacted);
    },
    getSnapshot(conversationId: string) {
      return storage.getSnapshot(conversationId);
    },
  };
}

export async function redactModelInput(
  options: RuntimeOptions,
  conversationId: string,
  input: TextGenerationInput,
) {
  const hook = options.privacy?.redactModelInput;
  if (!hook) return input;
  return hook({
    ...await privacyContext(options, conversationId),
    input,
  });
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

async function privacyContext(
  options: RuntimeOptions,
  conversationId: string,
) {
  return privacyContextForStorage(options.storage, conversationId);
}

async function privacyContextForStorage(
  storage: StorageAdapter,
  conversationId: string,
) {
  const conversation = await storage.getConversation(conversationId).catch(() => null);
  return {
    conversationId,
    agentId: conversation?.agentId ?? "",
  };
}
