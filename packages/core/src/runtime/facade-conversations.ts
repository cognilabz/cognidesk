import { replayRuntimeEvents } from "./replay.js";
import type {
  CreateRuntimeConversationInput,
  ReplayConversationInput,
  ReplayConversationResult,
  RuntimeEventEmitter,
  RuntimeOptions,
  SubmitWidgetInput,
} from "./types.js";
import type { ConversationRecord, RuntimeEventInput } from "../storage.js";
import type { RuntimeEvent } from "../types.js";

export async function createRuntimeConversation<TConversationContext = unknown>(
  options: RuntimeOptions,
  emit: RuntimeEventEmitter,
  input: CreateRuntimeConversationInput<TConversationContext>,
): Promise<ConversationRecord<TConversationContext>> {
  const conversation = await options.storage.createConversation(input);
  await options.storage.saveSnapshot({
    conversationId: conversation.id,
    lifecycle: conversation.lifecycle,
    activeStateIds: [],
    updatedAt: conversation.updatedAt,
  });
  await emit({
    conversationId: conversation.id,
    type: "custom.conversation.created",
    data: {
      agentId: conversation.agentId,
    },
  });
  return conversation;
}

export function listRuntimeEvents(
  options: RuntimeOptions,
  conversationId: string,
  afterOffset?: number,
) {
  return options.storage.listEvents({
    conversationId,
    ...(afterOffset !== undefined ? { afterOffset } : {}),
  });
}

export async function listAllRuntimeEvents(
  options: RuntimeOptions,
  input: {
    conversationId: string;
    afterOffset?: number;
  },
) {
  const events: RuntimeEvent[] = [];
  let afterOffset = input.afterOffset ?? 0;
  const pageSize = 500;
  while (true) {
    const page = await options.storage.listEvents({
      conversationId: input.conversationId,
      afterOffset,
      limit: pageSize,
    });
    events.push(...page);
    if (page.length < pageSize) return events;
    afterOffset = page[page.length - 1]?.offset ?? afterOffset;
  }
}

export async function replayRuntimeConversation(
  options: RuntimeOptions,
  requireConversationRecord: (conversationId: string) => Promise<ConversationRecord>,
  input: ReplayConversationInput,
): Promise<ReplayConversationResult> {
  const conversation = await requireConversationRecord(input.conversationId);
  const events = await listAllRuntimeEvents(options, {
    conversationId: input.conversationId,
    ...(input.afterOffset !== undefined ? { afterOffset: input.afterOffset } : {}),
  });
  const snapshot = await options.storage.getSnapshot(input.conversationId);
  const replayed = replayRuntimeEvents(events);
  return {
    conversation,
    snapshot,
    events,
    messages: replayed.messages,
    openPrompts: replayed.openPrompts,
  };
}

export async function submitRuntimeWidget(
  requireConversation: (conversationId: string) => Promise<ConversationRecord>,
  emit: RuntimeEventEmitter,
  processWidgetSubmission: (args: {
    conversation: ConversationRecord;
    promptId: string;
    output: unknown;
  }) => Promise<unknown>,
  input: SubmitWidgetInput,
): Promise<RuntimeEvent> {
  const conversation = await requireConversation(input.conversationId);
  const submitted = await emit({
    conversationId: input.conversationId,
    type: "ui.submitted",
    data: {
      promptId: input.promptId,
      widgetKind: input.widgetKind,
      output: input.output,
    },
  });
  await processWidgetSubmission({
    conversation,
    promptId: input.promptId,
    output: input.output,
  });
  return submitted;
}

export type RuntimeEventInputForFacade = RuntimeEventInput;
