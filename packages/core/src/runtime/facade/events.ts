import { randomUUID } from "node:crypto";
import type { CompiledAgent, EventRoutingMode, JourneyEventDefinition } from "../../definition.js";
import type { ConversationRecord, RuntimeEventInput } from "../../storage.js";
import {
  activeRuntimeEventTelemetry,
  recordRuntimeEventMetric,
  telemetryEventNames,
  addTelemetryContentEvent,
} from "../../telemetry.js";
import type {
  AgentModelSet,
  CustomRuntimeEventDefinition,
  ModelAdapter,
  ModelMessage,
  RuntimeEvent,
  RuntimeSnapshot,
  TextGenerationInput,
  TextGenerationOutput,
} from "../../types.js";
import { listConversationMessages } from "../history.js";
import {
  createGeneratedPreambleMessages,
  normalizeGeneratedPreamble,
} from "../rendering.js";
import { redactTelemetryAttributes } from "../privacy.js";
import type {
  EmitCustomEventInput,
  EmitGeneratedPreambleInput,
  EmitGeneratedPreambleResult,
  EmitIntermediateMessageInput,
  EmitJourneyEventInput,
  EmitJourneyEventResult,
  RuntimeEventEmitter,
  RuntimeOptions,
} from "../types.js";

export async function emitRuntimeEvent<TEvent extends RuntimeEventInput>(
  options: RuntimeOptions,
  event: TEvent,
): Promise<RuntimeEvent> {
  const stored = await options.storage.appendEvent({
    ...event,
    id: event.id ?? randomUUID(),
    createdAt: event.createdAt ?? new Date().toISOString(),
    telemetry: activeRuntimeEventTelemetry(options),
  });
  recordRuntimeEventMetric(options, {
    "cognidesk.runtime.event.type": stored.type,
  });
  const telemetry = await redactTelemetryAttributes(options, stored.conversationId, telemetryEventNames.runtimeEvent, {
    "cognidesk.runtime.event.type": stored.type,
    "cognidesk.runtime.event.offset": stored.offset,
    "cognidesk.runtime.event.data": stored.data,
  });
  if (telemetry) addTelemetryContentEvent(options, telemetryEventNames.runtimeEvent, telemetry);
  return stored;
}

export async function emitRuntimeIntermediateMessage(
  options: RuntimeOptions,
  requireConversation: (conversationId: string) => Promise<ConversationRecord>,
  emit: RuntimeEventEmitter,
  input: EmitIntermediateMessageInput,
): Promise<{ events: RuntimeEvent[] }> {
  await requireConversation(input.conversationId);
  const events: RuntimeEvent[] = [];
  const started = await emit({
    conversationId: input.conversationId,
    type: "message.started",
    data: { role: "assistant" },
  });
  events.push(started);
  if (options.streaming?.syntheticDeltas && input.text.length > 0) {
    const delta = await emit({
      conversationId: input.conversationId,
      type: "message.delta",
      data: { textDelta: input.text },
    });
    events.push(delta);
  }
  const completed = await emit({
    conversationId: input.conversationId,
    type: "message.completed",
    data: {
      text: input.text,
      intermediate: true,
      ...(input.visibleToModel ? { visibleToModel: true } : {}),
    },
  });
  events.push(completed);
  return { events };
}

export async function emitRuntimeGeneratedPreamble(
  deps: {
    options: RuntimeOptions;
    requireAgent: () => CompiledAgent;
    requireModels: () => AgentModelSet;
    requireConversation: (conversationId: string) => Promise<ConversationRecord>;
    generateTextWithTrace: (input: {
      conversationId: string;
      model: ModelAdapter;
      input: TextGenerationInput;
    }) => Promise<TextGenerationOutput>;
    redactModelMessages: (
      conversation: ConversationRecord,
      messages: ModelMessage[],
    ) => Promise<ModelMessage[]>;
    redactAssistantMessage: (conversation: ConversationRecord, text: string) => Promise<string>;
    emitIntermediateMessage: (input: EmitIntermediateMessageInput) => Promise<{ events: RuntimeEvent[] }>;
  },
  input: EmitGeneratedPreambleInput,
): Promise<EmitGeneratedPreambleResult> {
  const agent = deps.requireAgent();
  const models = deps.requireModels();
  const conversation = await deps.requireConversation(input.conversationId);
  const history = await listConversationMessages(deps.options.storage, conversation.id);
  const messages = await deps.redactModelMessages(conversation, createGeneratedPreambleMessages({
    agent,
    history,
    maxWords: input.maxWords ?? 24,
    ...(input.purpose ? { purpose: input.purpose } : {}),
  }));
  const output = await deps.generateTextWithTrace({
    conversationId: conversation.id,
    model: models.response,
    input: {
      role: "response",
      promptTask: "generated-preamble",
      promptPayload: {
        agent: {
          id: agent.id,
          instructions: agent.instructions,
        },
        history,
        purpose: input.purpose ?? null,
        maxWords: input.maxWords ?? 24,
      },
      messages,
      ...(input.signal ? { signal: input.signal } : {}),
    },
  });
  const text = await deps.redactAssistantMessage(
    conversation,
    normalizeGeneratedPreamble(output.text, input.maxWords ?? 24),
  );
  const emitted = await deps.emitIntermediateMessage({
    conversationId: conversation.id,
    text,
  });
  return { text, events: emitted.events };
}

export async function emitRuntimeCustomEvent<TEvent extends CustomRuntimeEventDefinition>(
  requireConversationRecord: (conversationId: string) => Promise<ConversationRecord>,
  resolveCustomRuntimeEvent: (event: TEvent) => TEvent,
  emit: RuntimeEventEmitter,
  input: EmitCustomEventInput<TEvent>,
): Promise<RuntimeEvent> {
  await requireConversationRecord(input.conversationId);
  const definition = resolveCustomRuntimeEvent(input.event);
  const payload = definition.payload.parse(input.payload);
  return emit({
    conversationId: input.conversationId,
    type: `custom.${definition.name}`,
    data: payload,
  });
}

export async function emitRuntimeJourneyEvent<TEvent extends JourneyEventDefinition>(
  deps: {
    options: RuntimeOptions;
    requireConversation: (conversationId: string) => Promise<ConversationRecord>;
    emit: RuntimeEventEmitter;
    processJourneyEvent: (args: {
      conversation: ConversationRecord;
      eventName: string;
      routing: EventRoutingMode;
      target?: { journeyId?: string; stateId?: string };
      app: unknown;
      signal?: AbortSignal;
      emit: RuntimeEventEmitter;
    }) => Promise<RuntimeSnapshot | null>;
  },
  input: EmitJourneyEventInput<TEvent>,
): Promise<EmitJourneyEventResult> {
  const conversation = await deps.requireConversation(input.conversationId);
  const routing = input.routing ?? input.event.routing ?? "activeJourneyOnly";
  const payload = input.event.payload.parse(input.payload);
  const emitted: RuntimeEvent[] = [];
  const emit = async <TRuntimeEvent extends RuntimeEventInput>(event: TRuntimeEvent) => {
    const stored = await deps.emit(event);
    emitted.push(stored);
    return stored;
  };
  const event = await emit({
    conversationId: input.conversationId,
    type: "journey.event.emitted",
    data: {
      name: input.event.name,
      payload,
      routing,
      ...(input.target ? { target: input.target } : {}),
    },
  });
  if (routing === "none") {
    return {
      event,
      snapshot: await deps.options.storage.getSnapshot(input.conversationId),
      events: emitted,
    };
  }
  const snapshot = await deps.processJourneyEvent({
    conversation,
    eventName: input.event.name,
    routing,
    app: input.app ?? deps.options.app ?? {},
    emit,
    ...(input.target ? { target: input.target } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
  });
  return { event, snapshot, events: emitted };
}

export function resolveRuntimeCustomEvent<TEvent extends CustomRuntimeEventDefinition>(
  agent: CompiledAgent | undefined,
  event: TEvent,
) {
  if (!agent) return event;
  const registered = agent.customEvents.find((candidate) => candidate.name === event.name);
  if (!registered) {
    throw new Error(`Custom runtime event '${event.name}' is not registered on agent '${agent.id}'.`);
  }
  return registered as TEvent;
}
