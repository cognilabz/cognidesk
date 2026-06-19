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
    && !privacy?.redactInboundChannelEvent
    && !privacy?.redactOutboundChannelMessage
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
      const context = await privacyContextForStorage(storage, event.conversationId);
      const channelRedacted = await redactChannelRuntimeEvent(privacy, context, event);
      if (!privacy.redactRuntimeEvent) return storage.appendEvent(channelRedacted as TEvent);
      const redacted = await privacy.redactRuntimeEvent({
        ...context,
        event: channelRedacted,
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

async function redactChannelRuntimeEvent<TEvent extends RuntimeEventInput>(
  privacy: NonNullable<RuntimeOptions["privacy"]>,
  context: Awaited<ReturnType<typeof privacyContextForStorage>>,
  event: TEvent,
): Promise<RuntimeEventInput> {
  if (event.type === "channel.received" && privacy.redactInboundChannelEvent) {
    const channelEvent = event as RuntimeEventInput<"channel.received">;
    return privacy.redactInboundChannelEvent({
      ...context,
      event: channelEvent,
      channel: channelEvent.data.channel,
    });
  }
  if (event.type === "channel.sent" && privacy.redactOutboundChannelMessage) {
    const channelEvent = event as RuntimeEventInput<"channel.sent">;
    return privacy.redactOutboundChannelMessage({
      ...context,
      event: channelEvent,
      channel: channelEvent.data.channel,
    });
  }
  return event;
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
