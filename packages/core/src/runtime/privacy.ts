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
import {
  applyRuntimePrivacyToEvent,
  applyRuntimePrivacyToSnapshot,
  applyRuntimePrivacyToText,
  applyRuntimePrivacyToTelemetryAttributes,
  applyRuntimePrivacyToValue,
  runtimePrivacySettingsForContext,
  type RuntimePrivacySettings,
} from "../privacy.js";

export async function redactUserMessage(
  options: RuntimeOptions,
  conversation: ConversationRecord,
  text: string,
) {
  const context = privacyContextForConversation(options.privacy, conversation);
  const policyRedacted = applyRuntimePrivacyToText(text, context.privacy);
  const hookRedacted = await options.privacy?.redactUserMessage?.({
    ...context,
    text: policyRedacted,
  }) ?? policyRedacted;
  return applyRuntimePrivacyToText(hookRedacted, context.privacy);
}

export async function redactModelMessages(
  options: RuntimeOptions,
  conversation: ConversationRecord,
  messages: ModelMessage[],
) {
  const context = privacyContextForConversation(options.privacy, conversation);
  const policyRedacted = applyRuntimePrivacyToValue(messages, context.privacy);
  const hookRedacted = await options.privacy?.redactModelMessages?.({
    ...context,
    messages: policyRedacted,
  }) ?? policyRedacted;
  return applyRuntimePrivacyToValue(hookRedacted, context.privacy);
}

export async function redactAssistantMessage(
  options: RuntimeOptions,
  conversation: ConversationRecord,
  text: string,
) {
  const context = privacyContextForConversation(options.privacy, conversation);
  const policyRedacted = applyRuntimePrivacyToText(text, context.privacy);
  const hookRedacted = await options.privacy?.redactAssistantMessage?.({
    ...context,
    text: policyRedacted,
  }) ?? policyRedacted;
  return applyRuntimePrivacyToText(hookRedacted, context.privacy);
}

export async function redactTelemetryAttributes(
  options: RuntimeOptions,
  conversationId: string,
  name: string,
  attributes: Record<string, unknown>,
) {
  const context = await privacyContext(options, conversationId);
  const policyRedacted = applyRuntimePrivacyToTelemetryAttributes(attributes, context.privacy);
  if (!policyRedacted) return null;
  const hookRedacted = await options.privacy?.redactTelemetryAttributes?.({
    ...context,
    name,
    attributes: policyRedacted,
  }) ?? policyRedacted;
  return applyRuntimePrivacyToTelemetryAttributes(hookRedacted, context.privacy);
}

export async function redactModelInput(
  options: RuntimeOptions,
  conversationId: string,
  input: TextGenerationInput,
) {
  const context = await privacyContext(options, conversationId);
  const policyRedacted = applyRuntimePrivacyToValue(input, context.privacy);
  const hook = options.privacy?.redactModelInput;
  if (!hook) return policyRedacted;
  const hookRedacted = await hook({
    ...context,
    input: policyRedacted,
  });
  return applyRuntimePrivacyToValue(hookRedacted, context.privacy);
}

export function createPrivacyStorageAdapter(
  storage: StorageAdapter,
  privacy: RuntimeOptions["privacy"],
): StorageAdapter {
  const adapter: StorageAdapter = {
    initialize() {
      return storage.initialize?.();
    },
    async createConversation<TConversationContext = unknown>(
      input: CreateConversationInput<TConversationContext>,
    ) {
      const settings = runtimePrivacySettingsForContext(privacy?.settings, input.context);
      const policyContext = applyRuntimePrivacyToValue(input.context, settings);
      const context = privacy?.redactConversationContext
        ? await privacy.redactConversationContext({
          ...privacyHookContext(input.id ?? "", input.agentId, settings),
          context: policyContext,
        })
        : policyContext;
      return storage.createConversation<TConversationContext>({
        ...input,
        context: applyRuntimePrivacyToValue(context, settings) as TConversationContext,
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
      const context = privacyContextForConversation(privacy, current);
      const policyContext = applyRuntimePrivacyToValue(input.context, context.privacy);
      const hookContext = privacy?.redactConversationContext
        ? await privacy.redactConversationContext({
          ...context,
          context: policyContext,
        })
        : policyContext;
      return storage.updateConversationContext<TConversationContext>(conversationId, {
        context: applyRuntimePrivacyToValue(hookContext, context.privacy) as TConversationContext,
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
      const context = await privacyContext(storage, privacy, snapshot.conversationId);
      const policySnapshot = applyRuntimePrivacyToSnapshot(snapshot, context.privacy);
      const hookSnapshot = privacy?.redactRuntimeSnapshot
        ? await privacy.redactRuntimeSnapshot({
          ...context,
          snapshot: policySnapshot,
        })
        : policySnapshot;
      return storage.saveSnapshot(applyRuntimePrivacyToSnapshot(hookSnapshot, context.privacy));
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
  privacy: RuntimeOptions["privacy"],
  event: TEvent,
): Promise<TEvent> {
  const context = await privacyContext(storage, privacy, event.conversationId);
  const channelRedacted = await redactChannelRuntimeEvent(privacy, context, event);
  const hookRedacted = privacy?.redactRuntimeEvent
    ? await privacy.redactRuntimeEvent({
      ...context,
      event: channelRedacted,
    })
    : channelRedacted;
  return applyRuntimePrivacyToEvent(hookRedacted as TEvent, context.privacy);
}

async function redactChannelRuntimeEvent<TEvent extends RuntimeEventInput>(
  privacy: RuntimeOptions["privacy"],
  context: PrivacyRuntimeContext,
  event: TEvent,
): Promise<RuntimeEventInput> {
  if (event.type === "channel.received" && privacy?.redactInboundChannelEvent) {
    const channelEvent = event as RuntimeEventInput<"channel.received">;
    return privacy.redactInboundChannelEvent({
      ...context,
      event: channelEvent,
      channel: channelEvent.data.channel,
    });
  }
  if (event.type === "channel.sent" && privacy?.redactOutboundChannelMessage) {
    const channelEvent = event as RuntimeEventInput<"channel.sent">;
    return privacy.redactOutboundChannelMessage({
      ...context,
      event: channelEvent,
      channel: channelEvent.data.channel,
    });
  }
  return event;
}

type PrivacyRuntimeContext = {
  conversationId: string;
  agentId: string;
  privacy?: RuntimePrivacySettings;
};

async function privacyContext(
  optionsOrStorage: RuntimeOptions | StorageAdapter,
  conversationIdOrPrivacy: string | RuntimeOptions["privacy"],
  maybeConversationId?: string,
): Promise<PrivacyRuntimeContext> {
  const storage = "storage" in optionsOrStorage ? optionsOrStorage.storage : optionsOrStorage;
  const privacy = "storage" in optionsOrStorage
    ? optionsOrStorage.privacy
    : conversationIdOrPrivacy as RuntimeOptions["privacy"];
  const conversationId = "storage" in optionsOrStorage
    ? conversationIdOrPrivacy as string
    : maybeConversationId ?? "";
  const conversation = await storage.getConversation(conversationId).catch(() => null);
  return conversation
    ? privacyContextForConversation(privacy, conversation)
    : privacyHookContext(conversationId, "", privacy?.settings);
}

function privacyContextForConversation(
  privacy: RuntimeOptions["privacy"],
  conversation: ConversationRecord,
): PrivacyRuntimeContext {
  return privacyHookContext(
    conversation.id,
    conversation.agentId,
    runtimePrivacySettingsForContext(privacy?.settings, conversation.context),
  );
}

function privacyHookContext(
  conversationId: string,
  agentId: string,
  settings: RuntimePrivacySettings | undefined,
): PrivacyRuntimeContext {
  return {
    conversationId,
    agentId,
    ...(settings ? { privacy: settings } : {}),
  };
}
