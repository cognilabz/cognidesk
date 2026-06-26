import type {
  ConversationRecord,
  CreateConversationInput,
  ListConversationsOptions,
  RuntimeEventInput,
  StorageAdapter,
  UpdateConversationContextInput,
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

  const adapter: StorageAdapter = {
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
    listConversations<TConversationContext = unknown>(options?: ListConversationsOptions) {
      return storage.listConversations<TConversationContext>(options);
    },
    async updateConversationContext<TConversationContext = unknown>(
      conversationId: string,
      input: UpdateConversationContextInput<TConversationContext>,
    ) {
      const current = await storage.getConversation(conversationId);
      if (!current) return null;
      const context = privacy.redactConversationContext
        ? await privacy.redactConversationContext({
          conversationId,
          agentId: current.agentId,
          context: input.context,
        })
        : input.context;
      return storage.updateConversationContext<TConversationContext>(conversationId, {
        context: context as TConversationContext,
      });
    },
    updateConversationLifecycle(conversationId, lifecycle) {
      return storage.updateConversationLifecycle(conversationId, lifecycle);
    },
    deleteConversation(conversationId) {
      return storage.deleteConversation(conversationId);
    },
    async appendEvent<TEvent extends RuntimeEventInput>(event: TEvent) {
      return storage.appendEvent(await redactRuntimeEventForStorage(storage, privacy, event));
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

  if (storage.appendEventIfApprovalPending) {
    adapter.appendEventIfApprovalPending = async <TEvent extends RuntimeEventInput<"approval.resolved">>(
      event: TEvent,
    ) => storage.appendEventIfApprovalPending!(
      await redactRuntimeEventForStorage(storage, privacy, event),
    );
  }

  if (storage.appendEventIfNoActiveVoiceSegment) {
    adapter.appendEventIfNoActiveVoiceSegment = async <TEvent extends RuntimeEventInput<"voice.segment.started">>(
      event: TEvent,
    ) => storage.appendEventIfNoActiveVoiceSegment!(
      await redactRuntimeEventForStorage(storage, privacy, event),
    );
  }

  return adapter;
}

async function redactRuntimeEventForStorage<TEvent extends RuntimeEventInput>(
  storage: StorageAdapter,
  privacy: NonNullable<RuntimeOptions["privacy"]>,
  event: TEvent,
): Promise<TEvent> {
  const context = await privacyContextForStorage(storage, event.conversationId);
  const channelRedacted = await redactChannelRuntimeEvent(privacy, context, event);
  if (!privacy.redactRuntimeEvent) return channelRedacted as TEvent;
  const redacted = await privacy.redactRuntimeEvent({
    ...context,
    event: channelRedacted,
  });
  return redacted as TEvent;
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
