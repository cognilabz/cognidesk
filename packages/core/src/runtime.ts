import { randomUUID } from "node:crypto";
import { z } from "zod";
import type { CompiledAgent, CompiledJourney, EventRoutingMode, JourneyEventDefinition } from "./definition.js";
import {
  selectJourneyCandidates,
  type JourneyCandidate,
  type JourneyIndex,
} from "./journey-index.js";
import type { ObservabilityHooks, TraceEvent } from "./observability.js";
import type { PrivacyHooks } from "./privacy.js";
import type { ConversationRecord, CreateConversationInput, RuntimeEventInput, StorageAdapter } from "./storage.js";
import type {
  AgentModelSet,
  CustomRuntimeEventDefinition,
  KnowledgeItem,
  KnowledgeSource,
  MessageSegment,
  ModelAdapter,
  ModelMessage,
  RuntimeEvent,
  RuntimeSnapshot,
  TextGenerationInput,
  TextGenerationOutput,
} from "./types.js";

export interface RuntimeOptions {
  storage: StorageAdapter;
  agent?: CompiledAgent;
  models?: AgentModelSet;
  journeyIndex?: JourneyIndex;
  topKJourneys?: number;
  app?: unknown;
  knowledgeLimit?: number;
  privacy?: PrivacyHooks;
  observability?: ObservabilityHooks;
  compaction?: {
    afterTurn?: boolean;
    minEvents?: number;
    schemaVersion?: string;
  };
  postProcessing?: {
    citations?: boolean;
  };
}

export interface CreateRuntimeConversationInput<TConversationContext = unknown>
  extends CreateConversationInput<TConversationContext> {}

export interface HandleUserMessageInput<TTurn = unknown> {
  conversationId: string;
  text: string;
  turn?: TTurn;
  app?: unknown;
  signal?: AbortSignal;
}

export interface HandleUserMessageResult {
  conversation: ConversationRecord;
  snapshot: RuntimeSnapshot;
  events: RuntimeEvent[];
  text: string;
  activeJourneyId?: string;
}

export interface CompactConversationInput {
  conversationId: string;
  fromOffset?: number;
  toOffset?: number;
  schemaVersion?: string;
  signal?: AbortSignal;
}

export interface SubmitWidgetInput {
  conversationId: string;
  promptId: string;
  widgetKind: string;
  output: unknown;
}

export interface EmitIntermediateMessageInput {
  conversationId: string;
  text: string;
  traceId?: string;
}

export interface EmitCustomEventInput<TEvent extends CustomRuntimeEventDefinition = CustomRuntimeEventDefinition> {
  conversationId: string;
  event: TEvent;
  payload: z.infer<TEvent["payload"]>;
  traceId?: string;
}

export interface EmitJourneyEventInput<TEvent extends JourneyEventDefinition = JourneyEventDefinition> {
  conversationId: string;
  event: TEvent;
  payload: z.infer<TEvent["payload"]>;
  routing?: EventRoutingMode;
  target?: {
    journeyId?: string;
    stateId?: string;
  };
  app?: unknown;
  traceId?: string;
  signal?: AbortSignal;
}

export interface EmitJourneyEventResult {
  event: RuntimeEvent;
  snapshot: RuntimeSnapshot | null;
  events: RuntimeEvent[];
}

export interface RequestHandoffInput {
  conversationId: string;
  reason: string;
  summary?: string;
  payload?: unknown;
}

export interface ResumeConversationInput {
  conversationId: string;
  reason?: string;
  payload?: unknown;
}

export interface CompactConversationResult {
  summary: ConversationCompactionSummary;
  snapshot: RuntimeSnapshot;
  events: RuntimeEvent[];
}

export const conversationCompactionSummarySchema = z.object({
  summary: z.string(),
  stableFacts: z.array(z.string()).default([]),
  openQuestions: z.array(z.string()).default([]),
  activeCommitments: z.array(z.string()).default([]),
});

export type ConversationCompactionSummary = z.infer<typeof conversationCompactionSummarySchema>;

const citationPostProcessingSchema = z.object({
  segments: z.array(z.object({
    text: z.string(),
    knowledgeIds: z.array(z.string()).default([]),
  })),
});

const stateExtractionSchema = z.object({
  values: z.record(z.string(), z.unknown()).default({}),
});

interface StateMachineTurnResult {
  activeStateIds: string[];
  journeyContext: Record<string, unknown>;
}

interface VisibleCustomEventContext {
  type: string;
  offset: number;
  data: unknown;
}

export class CognideskRuntime {
  constructor(private readonly options: RuntimeOptions) {}

  async initialize() {
    await this.options.storage.initialize?.();
  }

  async createConversation<TConversationContext = unknown>(
    input: CreateRuntimeConversationInput<TConversationContext>,
  ): Promise<ConversationRecord<TConversationContext>> {
    const conversation = await this.options.storage.createConversation(input);
    await this.options.storage.saveSnapshot({
      conversationId: conversation.id,
      lifecycle: conversation.lifecycle,
      activeStateIds: [],
      updatedAt: conversation.updatedAt,
    });
    await this.emit({
      conversationId: conversation.id,
      type: "custom.conversation.created",
      data: {
        agentId: conversation.agentId,
      },
    });
    return conversation;
  }

  async emit<TEvent extends RuntimeEventInput>(event: TEvent): Promise<RuntimeEvent> {
    const stored = await this.options.storage.appendEvent({
      ...event,
      id: event.id ?? randomUUID(),
      createdAt: event.createdAt ?? new Date().toISOString(),
    });
    await this.trace({
      type: "runtime.event",
      conversationId: stored.conversationId,
      event: stored,
    });
    return stored;
  }

  async emitIntermediateMessage(input: EmitIntermediateMessageInput): Promise<{ events: RuntimeEvent[] }> {
    await this.requireConversation(input.conversationId);
    const events: RuntimeEvent[] = [];
    const started = await this.emit({
      conversationId: input.conversationId,
      type: "message.started",
      data: { role: "assistant" },
      ...(input.traceId ? { traceId: input.traceId } : {}),
    });
    events.push(started);
    const completed = await this.emit({
      conversationId: input.conversationId,
      type: "message.completed",
      data: {
        text: input.text,
        intermediate: true,
      },
      ...(input.traceId ? { traceId: input.traceId } : {}),
    });
    events.push(completed);
    return { events };
  }

  async emitCustomEvent<TEvent extends CustomRuntimeEventDefinition>(
    input: EmitCustomEventInput<TEvent>,
  ): Promise<RuntimeEvent> {
    await this.requireConversationRecord(input.conversationId);
    const definition = this.resolveCustomRuntimeEvent(input.event);
    const payload = definition.payload.parse(input.payload);
    return this.emit({
      conversationId: input.conversationId,
      type: `custom.${definition.name}`,
      data: payload,
      ...(input.traceId ? { traceId: input.traceId } : {}),
    });
  }

  async emitJourneyEvent<TEvent extends JourneyEventDefinition>(
    input: EmitJourneyEventInput<TEvent>,
  ): Promise<EmitJourneyEventResult> {
    const conversation = await this.requireConversation(input.conversationId);
    const routing = input.routing ?? input.event.routing ?? "activeJourneyOnly";
    const payload = input.event.payload.parse(input.payload);
    const emitted: RuntimeEvent[] = [];
    const emit = async <TRuntimeEvent extends RuntimeEventInput>(event: TRuntimeEvent) => {
      const stored = await this.emit(event);
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
      ...(input.traceId ? { traceId: input.traceId } : {}),
    });
    if (routing === "none") {
      return {
        event,
        snapshot: await this.options.storage.getSnapshot(input.conversationId),
        events: emitted,
      };
    }
    const snapshot = await this.processJourneyEvent({
      conversation,
      eventName: input.event.name,
      routing,
      app: input.app ?? this.options.app ?? {},
      emit,
      ...(input.target ? { target: input.target } : {}),
      ...(input.signal ? { signal: input.signal } : {}),
    });
    return { event, snapshot, events: emitted };
  }

  async listEvents(conversationId: string, afterOffset?: number) {
    return this.options.storage.listEvents({
      conversationId,
      ...(afterOffset !== undefined ? { afterOffset } : {}),
    });
  }

  async submitWidget(input: SubmitWidgetInput): Promise<RuntimeEvent> {
    const conversation = await this.requireConversation(input.conversationId);
    const submitted = await this.emit({
      conversationId: input.conversationId,
      type: "ui.submitted",
      data: {
        promptId: input.promptId,
        widgetKind: input.widgetKind,
        output: input.output,
      },
    });
    await this.processWidgetSubmission({
      conversation,
      promptId: input.promptId,
      output: input.output,
    });
    return submitted;
  }

  async getSnapshot(conversationId: string): Promise<RuntimeSnapshot | null> {
    return this.options.storage.getSnapshot(conversationId);
  }

  async handleUserMessage<TTurn = unknown>(
    input: HandleUserMessageInput<TTurn>,
  ): Promise<HandleUserMessageResult> {
    const agent = this.requireAgent();
    const models = this.requireModels();
    const conversation = await this.requireConversation(input.conversationId);
    const userText = await this.redactUserMessage(conversation, input.text);
    const emitted: RuntimeEvent[] = [];
    const emit = async <TEvent extends RuntimeEventInput>(event: TEvent) => {
      const stored = await this.emit(event);
      emitted.push(stored);
      return stored;
    };

    await emit({
      conversationId: conversation.id,
      type: "message.started",
      data: { role: "user" },
    });
    await emit({
      conversationId: conversation.id,
      type: "message.completed",
      data: { text: userText },
    });

    const previousSnapshot = await this.options.storage.getSnapshot(conversation.id);
    const selectedJourney = await this.selectJourney({
      agent,
      models,
      conversation,
      previousSnapshot,
      input,
      userText,
      emit,
    });
    const stateMachineTurn = selectedJourney?.kind === "stateMachine"
      ? await this.executeStateMachineTurn({
          journey: selectedJourney,
          models,
          conversation,
          previousSnapshot,
          userText,
          emit,
          ...(input.signal ? { signal: input.signal } : {}),
        })
      : null;
    const interruptedByLifecycle = await this.createLifecycleInterruptionResult({
      conversationId: conversation.id,
      events: emitted,
    });
    if (interruptedByLifecycle) return interruptedByLifecycle;

    const knowledge = await this.retrieveKnowledge({
      agent,
      journey: selectedJourney,
      conversationId: conversation.id,
      message: userText,
      emit,
      ...(input.signal ? { signal: input.signal } : {}),
    });
    const visibleCustomEvents = await this.listVisibleCustomEventContext(agent, conversation.id);
    const modelMessages = await this.redactModelMessages(conversation, this.createResponseMessages({
      agent,
      journey: selectedJourney,
      stateMachineTurn,
      userText,
      knowledge,
      visibleCustomEvents,
    }));
    const response = await this.generateTextWithTrace({
      conversationId: conversation.id,
      model: models.response,
      input: {
        role: "response",
        messages: modelMessages,
        ...(input.signal ? { signal: input.signal } : {}),
      },
    });
    const assistantText = await this.redactAssistantMessage(conversation, response.text);
    const segments = await this.createCitationSegments({
      conversation,
      text: assistantText,
      knowledge,
      ...(input.signal ? { signal: input.signal } : {}),
    });

    await emit({
      conversationId: conversation.id,
      type: "message.started",
      data: { role: "assistant" },
    });
    await emit({
      conversationId: conversation.id,
      type: "message.completed",
      data: {
        text: assistantText,
        ...(segments ? { segments } : {}),
        ...(response.usage ? { usage: response.usage } : {}),
      },
    });

    const snapshot = this.nextSnapshot({
      conversationId: conversation.id,
      previousSnapshot,
      selectedJourney,
      stateMachineTurn,
    });
    await this.options.storage.saveSnapshot(snapshot);

    if (this.options.compaction?.afterTurn) {
      const allEvents = await this.options.storage.listEvents({ conversationId: conversation.id });
      if (allEvents.length >= (this.options.compaction.minEvents ?? 50)) {
        const compaction = await this.compactConversation({
          conversationId: conversation.id,
          ...(this.options.compaction.schemaVersion ? { schemaVersion: this.options.compaction.schemaVersion } : {}),
          ...(input.signal ? { signal: input.signal } : {}),
        });
        emitted.push(...compaction.events);
      }
    }

    return {
      conversation,
      snapshot,
      events: emitted,
      text: assistantText,
      ...(selectedJourney ? { activeJourneyId: selectedJourney.id } : {}),
    };
  }

  async closeConversation(conversationId: string, reason?: string) {
    const result = await this.applyConversationClosure({
      conversationId,
      ...(reason ? { reason } : {}),
      emit: (event) => this.emit(event),
    });
    return result.conversation;
  }

  async requestHandoff(input: RequestHandoffInput) {
    return this.applyHandoffRequest({
      ...input,
      emit: (event) => this.emit(event),
    });
  }

  async resumeConversation(input: ResumeConversationInput) {
    return this.applyConversationResume({
      ...input,
      emit: (event) => this.emit(event),
    });
  }

  async compactConversation(input: CompactConversationInput): Promise<CompactConversationResult> {
    const models = this.requireModels();
    const conversation = await this.requireConversationRecord(input.conversationId);
    const fromOffset = input.fromOffset ?? 1;
    const allEvents = await this.options.storage.listEvents({ conversationId: input.conversationId });
    const selectedEvents = allEvents.filter((event) => (
      event.offset >= fromOffset && (input.toOffset === undefined || event.offset <= input.toOffset)
    ));
    if (selectedEvents.length === 0) {
      throw new Error(`No events found to compact for conversation '${input.conversationId}'.`);
    }
    const toOffset = input.toOffset ?? selectedEvents[selectedEvents.length - 1]?.offset ?? fromOffset;
    const emitted: RuntimeEvent[] = [];
    const started = await this.emit({
      conversationId: input.conversationId,
      type: "conversation.compaction.started",
      data: { fromOffset, toOffset },
    });
    emitted.push(started);

    const output = await this.generateTextWithTrace({
      conversationId: input.conversationId,
      model: models.compaction,
      input: {
        role: "compaction",
        messages: [
          {
            role: "system",
            content: "Compact the conversation events into a concise structured memory. Preserve stable facts, open questions, and active commitments.",
          },
          {
            role: "user",
            content: renderEventsForCompaction(selectedEvents),
          },
        ],
        responseFormat: conversationCompactionSummarySchema,
        ...(input.signal ? { signal: input.signal } : {}),
      },
    });
    const summary = conversationCompactionSummarySchema.parse(output.structured ?? JSON.parse(output.text));
    const currentSnapshot = await this.options.storage.getSnapshot(input.conversationId);
    const snapshot: RuntimeSnapshot = {
      conversationId: input.conversationId,
      lifecycle: conversation.lifecycle,
      activeStateIds: currentSnapshot?.activeStateIds ?? [],
      updatedAt: new Date().toISOString(),
      compactionSummary: summary,
      ...(currentSnapshot?.activeJourneyId ? { activeJourneyId: currentSnapshot.activeJourneyId } : {}),
      ...(currentSnapshot?.journeyContext !== undefined ? { journeyContext: currentSnapshot.journeyContext } : {}),
      ...(currentSnapshot?.definitionHash ? { definitionHash: currentSnapshot.definitionHash } : {}),
    };
    await this.options.storage.saveSnapshot(snapshot);
    const completed = await this.emit({
      conversationId: input.conversationId,
      type: "conversation.compaction.completed",
      data: {
        fromOffset,
        toOffset,
        schemaVersion: input.schemaVersion ?? this.options.compaction?.schemaVersion ?? "cognidesk.compaction.v1",
      },
    });
    emitted.push(completed);
    return { summary, snapshot, events: emitted };
  }

  private requireAgent() {
    if (!this.options.agent) throw new Error("Runtime requires an agent to handle messages.");
    return this.options.agent;
  }

  private requireModels() {
    if (!this.options.models) throw new Error("Runtime requires models to handle messages.");
    return this.options.models;
  }

  private async generateTextWithTrace(input: {
    conversationId: string;
    model: ModelAdapter;
    input: TextGenerationInput;
  }): Promise<TextGenerationOutput> {
    await this.trace({
      type: "model.started",
      conversationId: input.conversationId,
      role: input.input.role,
      provider: input.model.provider,
      model: input.model.model,
    });
    try {
      const output = await input.model.generateText(input.input);
      await this.trace({
        type: "model.completed",
        conversationId: input.conversationId,
        role: input.input.role,
        provider: input.model.provider,
        model: input.model.model,
        ...(output.usage ? { usage: output.usage } : {}),
      });
      return output;
    } catch (error) {
      await this.trace({
        type: "model.failed",
        conversationId: input.conversationId,
        role: input.input.role,
        provider: input.model.provider,
        model: input.model.model,
        error: error instanceof Error ? error.message : "Model call failed.",
      });
      throw error;
    }
  }

  private async trace(event: TraceEvent) {
    try {
      await this.options.observability?.onTraceEvent?.(event);
    } catch {
      // Observability hooks must not affect conversation execution.
    }
  }

  private resolveCustomRuntimeEvent<TEvent extends CustomRuntimeEventDefinition>(event: TEvent) {
    const agent = this.options.agent;
    if (!agent) return event;
    const registered = agent.customEvents.find((candidate) => candidate.name === event.name);
    if (!registered) {
      throw new Error(`Custom runtime event '${event.name}' is not registered on agent '${agent.id}'.`);
    }
    return registered;
  }

  private async requireConversation(conversationId: string) {
    const conversation = await this.requireConversationRecord(conversationId);
    if (conversation.lifecycle !== "active") {
      throw new Error(`Conversation '${conversationId}' is '${conversation.lifecycle}' and cannot receive user messages.`);
    }
    return conversation;
  }

  private async requireConversationRecord(conversationId: string) {
    const conversation = await this.options.storage.getConversation(conversationId);
    if (!conversation) throw new Error(`Conversation '${conversationId}' does not exist.`);
    return conversation;
  }

  private async createLifecycleInterruptionResult(args: {
    conversationId: string;
    events: RuntimeEvent[];
  }): Promise<HandleUserMessageResult | null> {
    const conversation = await this.requireConversationRecord(args.conversationId);
    if (conversation.lifecycle === "active") return null;
    const snapshot = await this.options.storage.getSnapshot(args.conversationId) ?? {
      conversationId: args.conversationId,
      lifecycle: conversation.lifecycle,
      activeStateIds: [],
      updatedAt: conversation.updatedAt,
    };
    return {
      conversation,
      snapshot,
      events: args.events,
      text: "",
      ...(snapshot.activeJourneyId ? { activeJourneyId: snapshot.activeJourneyId } : {}),
    };
  }

  private async applyConversationClosure(args: {
    conversationId: string;
    reason?: string;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const conversation = await this.options.storage.updateConversationLifecycle(args.conversationId, "closed");
    if (!conversation) throw new Error(`Conversation '${args.conversationId}' does not exist.`);
    await this.saveLifecycleSnapshot(args.conversationId, "closed", conversation.updatedAt);
    const event = await args.emit({
      conversationId: args.conversationId,
      type: "conversation.closed",
      data: args.reason ? { reason: args.reason } : {},
    });
    return { conversation, event };
  }

  private async applyHandoffRequest(args: RequestHandoffInput & {
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const conversation = await this.options.storage.updateConversationLifecycle(args.conversationId, "handoff");
    if (!conversation) throw new Error(`Conversation '${args.conversationId}' does not exist.`);
    await this.saveLifecycleSnapshot(args.conversationId, "handoff", conversation.updatedAt);
    const event = await args.emit({
      conversationId: args.conversationId,
      type: "handoff.requested",
      data: {
        reason: args.reason,
        ...(args.summary ? { summary: args.summary } : {}),
        ...(args.payload !== undefined ? { payload: args.payload } : {}),
      },
    });
    return { conversation, event };
  }

  private async applyConversationResume(args: ResumeConversationInput & {
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const current = await this.requireConversationRecord(args.conversationId);
    if (current.lifecycle === "closed") {
      throw new Error(`Conversation '${args.conversationId}' is closed and cannot be resumed.`);
    }
    const conversation = current.lifecycle === "active"
      ? current
      : await this.options.storage.updateConversationLifecycle(args.conversationId, "active");
    if (!conversation) throw new Error(`Conversation '${args.conversationId}' does not exist.`);
    await this.saveLifecycleSnapshot(args.conversationId, "active", conversation.updatedAt);
    const event = await args.emit({
      conversationId: args.conversationId,
      type: "handoff.resumed",
      data: {
        ...(args.reason ? { reason: args.reason } : {}),
        ...(args.payload !== undefined ? { payload: args.payload } : {}),
      },
    });
    return { conversation, event };
  }

  private async saveLifecycleSnapshot(
    conversationId: string,
    lifecycle: RuntimeSnapshot["lifecycle"],
    updatedAt: string,
  ) {
    const currentSnapshot = await this.options.storage.getSnapshot(conversationId);
    await this.options.storage.saveSnapshot({
      conversationId,
      lifecycle,
      activeStateIds: currentSnapshot?.activeStateIds ?? [],
      updatedAt,
      ...(currentSnapshot?.activeJourneyId ? { activeJourneyId: currentSnapshot.activeJourneyId } : {}),
      ...(currentSnapshot?.journeyContext !== undefined ? { journeyContext: currentSnapshot.journeyContext } : {}),
      ...(currentSnapshot?.compactionSummary !== undefined ? { compactionSummary: currentSnapshot.compactionSummary } : {}),
      ...(currentSnapshot?.definitionHash ? { definitionHash: currentSnapshot.definitionHash } : {}),
    });
  }

  private async applyBuiltInLifecycleTool(args: {
    toolName: string;
    input: unknown;
    conversationId: string;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    if (args.toolName === "cognidesk.handoff") {
      const input = args.input as { reason: string; summary?: string; payload?: unknown };
      await this.applyHandoffRequest({
        conversationId: args.conversationId,
        reason: input.reason,
        ...(input.summary ? { summary: input.summary } : {}),
        ...(input.payload !== undefined ? { payload: input.payload } : {}),
        emit: args.emit,
      });
      return true;
    }
    if (args.toolName === "cognidesk.endConversation") {
      const input = args.input as { reason?: string };
      await this.applyConversationClosure({
        conversationId: args.conversationId,
        ...(input.reason ? { reason: input.reason } : {}),
        emit: args.emit,
      });
      return true;
    }
    return false;
  }

  private async selectJourney<TTurn>(args: {
    agent: CompiledAgent;
    models: AgentModelSet;
    conversation: ConversationRecord;
    previousSnapshot: RuntimeSnapshot | null;
    input: HandleUserMessageInput<TTurn>;
    userText: string;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    if (!this.options.journeyIndex) {
      return args.previousSnapshot?.activeJourneyId
        ? args.agent.journeys.find((journey) => journey.id === args.previousSnapshot?.activeJourneyId) ?? null
        : null;
    }

    const candidates = await selectJourneyCandidates({
      agent: args.agent,
      index: this.options.journeyIndex,
      embeddingModel: args.models.journeyEmbedding,
      message: args.userText,
      app: args.input.app ?? this.options.app ?? {},
      conversation: args.conversation,
      turn: args.input.turn ?? {},
      ...(args.previousSnapshot?.activeJourneyId ? { activeJourneyId: args.previousSnapshot.activeJourneyId } : {}),
      topK: this.options.topKJourneys ?? 5,
      ...(args.input.signal ? { signal: args.input.signal } : {}),
    });
    await args.emit({
      conversationId: args.conversation.id,
      type: "journey.candidates.retrieved",
      data: { journeyIds: candidates.map((candidate) => candidate.journeyId) },
    });
    await args.emit({
      conversationId: args.conversation.id,
      type: "journey.matched",
      data: {
        candidates: candidates.map((candidate) => ({
          journeyId: candidate.journeyId,
          confidence: normalizeConfidence(candidate),
          reason: candidate.reason,
        })),
      },
    });

    const selected = candidates[0]?.journey ?? null;
    if (selected && selected.id !== args.previousSnapshot?.activeJourneyId) {
      await args.emit({
        conversationId: args.conversation.id,
        type: "journey.activated",
        data: {
          journeyId: selected.id,
          ...(args.previousSnapshot?.activeJourneyId ? { previousJourneyId: args.previousSnapshot.activeJourneyId } : {}),
        },
      });
      if (selected.initialStateId) {
        await args.emit({
          conversationId: args.conversation.id,
          type: "journey.state.entered",
          data: { journeyId: selected.id, stateId: selected.initialStateId },
        });
      }
    }
    return selected;
  }

  private async retrieveKnowledge(args: {
    agent: CompiledAgent;
    journey: CompiledJourney | null;
    conversationId: string;
    message: string;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const sources = uniqueKnowledgeSources([
      ...args.agent.knowledge,
      ...(args.journey?.knowledge ?? []),
    ]);
    const items: Array<KnowledgeItem> = [];
    for (const source of sources) {
      const query = parseKnowledgeQuery(source, args.message);
      if (query === null) continue;
      const result = await source.retrieve({
        query,
        ...(args.signal ? { signal: args.signal } : {}),
      });
      const limited = result.items.slice(0, this.options.knowledgeLimit ?? 5);
      items.push(...limited);
      await this.trace({
        type: "knowledge.retrieved",
        conversationId: args.conversationId,
        sourceName: source.name,
        itemIds: limited.map((item) => item.id),
      });
      await args.emit({
        conversationId: args.conversationId,
        type: "knowledge.retrieved",
        data: {
          sourceName: source.name,
          itemIds: limited.map((item) => item.id),
        },
      });
    }
    return items;
  }

  private async executeStateMachineTurn(args: {
    journey: CompiledJourney;
    models: AgentModelSet;
    conversation: ConversationRecord;
    previousSnapshot: RuntimeSnapshot | null;
    userText: string;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }): Promise<StateMachineTurnResult> {
    const stateById = new Map(args.journey.states.map((state) => [state.id, state]));
    const sameJourney = args.previousSnapshot?.activeJourneyId === args.journey.id;
    const firstStateId = sameJourney
      ? args.previousSnapshot?.activeStateIds[0] ?? args.journey.initialStateId
      : args.journey.initialStateId;
    const initialState = firstStateId ? stateById.get(firstStateId) : undefined;
    const context = sameJourney && isRecord(args.previousSnapshot?.journeyContext)
      ? structuredClone(args.previousSnapshot.journeyContext)
      : {};
    if (!initialState) return { activeStateIds: [], journeyContext: context };

    const activeState = await this.applyStateExtraction({
      ...args,
      state: initialState,
      context,
    });
    const finalState = await this.advanceStateMachine({
      ...args,
      stateById,
      state: activeState,
      context,
    });

    return {
      activeStateIds: [finalState.id],
      journeyContext: context,
    };
  }

  private async applyStateExtraction(args: {
    journey: CompiledJourney;
    models: AgentModelSet;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    userText: string;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const fields = args.state.collected.filter((field) => field.extract);
    if (fields.length === 0) return args.state;
    try {
      const output = await this.generateTextWithTrace({
        conversationId: args.conversation.id,
        model: args.models.extraction,
        input: {
          role: "extraction",
          messages: [
            {
              role: "system",
              content: [
                "Extract state-machine context fields from the latest user message.",
                "Return only fields that are explicitly supported by the message.",
                `State: ${args.state.id}`,
                args.state.instructions ? `State instructions: ${args.state.instructions}` : "",
                `Fields: ${fields.map((field) => field.path).join(", ")}`,
                `Current context: ${JSON.stringify(args.context)}`,
              ].filter(Boolean).join("\n"),
            },
            { role: "user", content: args.userText },
          ],
          responseFormat: stateExtractionSchema,
          ...(args.signal ? { signal: args.signal } : {}),
        },
      });
      const extracted = stateExtractionSchema.parse(output.structured ?? JSON.parse(output.text));
      const allowedPaths = new Set(fields.map((field) => field.path));
      const acceptedFields = Object.entries(extracted.values)
        .filter(([path, value]) => allowedPaths.has(path) && hasUsableValue(value));
      if (acceptedFields.length === 0) return args.state;

      await args.emit({
        conversationId: args.conversation.id,
        type: "journey.extraction.proposed",
        data: {
          journeyId: args.journey.id,
          stateId: args.state.id,
          fields: acceptedFields.map(([path]) => path),
        },
      });
      for (const [path, value] of acceptedFields) setPathValue(args.context, path, value);
      await args.emit({
        conversationId: args.conversation.id,
        type: "journey.extraction.accepted",
        data: {
          journeyId: args.journey.id,
          stateId: args.state.id,
          fields: acceptedFields.map(([path]) => path),
        },
      });
    } catch (error) {
      await args.emit({
        conversationId: args.conversation.id,
        type: "error",
        data: {
          code: "journey_extraction_failed",
          message: error instanceof Error ? error.message : "Journey extraction failed.",
        },
      });
    }
    return args.state;
  }

  private async advanceStateMachine(args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    stateById: Map<string, CompiledJourney["states"][number]>;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    let state = args.state;
    const visited = new Set<string>();
    while (!visited.has(state.id)) {
      visited.add(state.id);
      const lifecycle = await this.requireConversationRecord(args.conversation.id);
      if (lifecycle.lifecycle !== "active") return state;
      if (!this.stateRequirementsSatisfied(state, args.context)) return state;
      if (state.requiresVisit) {
        await this.emitConfirmationPrompts({ ...args, state });
        return state;
      }

      const toolTargetId = await this.runStateToolRuns({
        ...args,
        state,
        actionType: "transition",
      });
      const latestConversation = await this.requireConversationRecord(args.conversation.id);
      if (latestConversation.lifecycle !== "active") return state;
      const transition = toolTargetId
        ? { targetId: toolTargetId }
        : await this.selectTransition({
            journey: args.journey,
            state,
            context: args.context,
          });
      if (!transition) return state;

      const nextState = args.stateById.get(transition.targetId);
      if (!nextState) return state;
      state = nextState;
      await args.emit({
        conversationId: args.conversation.id,
        type: "journey.state.entered",
        data: { journeyId: args.journey.id, stateId: state.id },
      });
      await this.runStateToolRuns({
        ...args,
        state,
        actionType: "entry",
      });
    }
    return state;
  }

  private stateRequirementsSatisfied(state: CompiledJourney["states"][number], context: Record<string, unknown>) {
    return state.collected
      .filter((field) => field.required)
      .every((field) => hasUsableValue(getPathValue(context, field.path)));
  }

  private async selectTransition(args: {
    journey: CompiledJourney;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
  }) {
    const transitions = [...args.state.transitions]
      .filter((transition) => transition.kind === "conversational")
      .sort((left, right) => (right.priority ?? 0) - (left.priority ?? 0));
    for (const transition of transitions) {
      if (!transition.guard) return transition;
      const result = await transition.guard({
        app: this.options.app ?? {},
        context: args.context,
      });
      if (guardAllows(result)) return transition;
    }
    return null;
  }

  private async resolveJourneyEventRoute(args: {
    agent: CompiledAgent;
    previousSnapshot: RuntimeSnapshot | null;
    eventName: string;
    routing: EventRoutingMode;
    target?: { journeyId?: string; stateId?: string };
  }) {
    const stateMachineJourneys = args.agent.journeys.filter((journey) => journey.kind === "stateMachine");
    const journeyById = new Map(stateMachineJourneys.map((journey) => [journey.id, journey]));
    const activeJourney = args.previousSnapshot?.activeJourneyId
      ? journeyById.get(args.previousSnapshot.activeJourneyId)
      : undefined;
    const activeState = activeJourney
      ? findJourneyState(activeJourney, args.previousSnapshot?.activeStateIds[0] ?? activeJourney.initialStateId)
      : undefined;

    if (args.routing === "activeJourneyOnly") {
      return activeJourney && activeState ? { journey: activeJourney, state: activeState } : null;
    }

    if (args.routing === "targeted") {
      const journey = args.target?.journeyId
        ? journeyById.get(args.target.journeyId)
        : activeJourney;
      if (!journey) return null;
      const state = findJourneyState(
        journey,
        args.target?.stateId
          ?? (journey.id === args.previousSnapshot?.activeJourneyId ? args.previousSnapshot?.activeStateIds[0] : undefined)
          ?? journey.initialStateId,
      );
      return state ? { journey, state } : null;
    }

    if (args.routing === "full") {
      if (activeJourney && activeState && hasEventTransition(activeState, args.eventName)) {
        return { journey: activeJourney, state: activeState };
      }
      for (const journey of stateMachineJourneys) {
        const state = journey.states.find((candidate) => hasEventTransition(candidate, args.eventName));
        if (state) return { journey, state };
      }
    }

    return null;
  }

  private async selectEventTransition(args: {
    state: CompiledJourney["states"][number];
    eventName: string;
    context: Record<string, unknown>;
    app: unknown;
  }) {
    const transitions = [...args.state.transitions]
      .filter((transition) => transition.kind === "event" && (transition.eventName ?? transition.description) === args.eventName)
      .sort((left, right) => (right.priority ?? 0) - (left.priority ?? 0));
    for (const transition of transitions) {
      if (!transition.guard) return transition;
      const result = await transition.guard({
        app: args.app,
        context: args.context,
      });
      if (guardAllows(result)) return transition;
    }
    return null;
  }

  private async runStateToolRuns(args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    actionType: "entry" | "exit" | "transition";
    confirmedPromptId?: string;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }): Promise<string | null> {
    const toolRuns = args.state.toolRuns.filter((toolRun) => {
      if (toolRun.actionType !== args.actionType) return false;
      if (args.confirmedPromptId) {
        return Boolean(toolRun.confirm)
          && args.confirmedPromptId === createToolConfirmationPromptId(args.journey.id, args.state.id, toolRun.tool.name);
      }
      if (!toolRun.confirm) return true;
      return false;
    });
    for (const toolRun of toolRuns) {
      const rawInput = toolRun.input ? toolRun.input({ context: args.context }) : {};
      const parsedInput = toolRun.tool.input.safeParse(rawInput);
      if (!parsedInput.success) {
        await args.emit({
          conversationId: args.conversation.id,
          type: "tool.completed",
          data: {
            toolName: toolRun.tool.name,
            success: false,
            journeyId: args.journey.id,
            stateId: args.state.id,
            error: parsedInput.error.message,
          },
        });
        return toolRun.onValidationErrorId ?? null;
      }

      await args.emit({
        conversationId: args.conversation.id,
        type: "tool.started",
        data: {
          toolName: toolRun.tool.name,
          journeyId: args.journey.id,
          stateId: args.state.id,
        },
      });
      await this.trace({
        type: "tool.started",
        conversationId: args.conversation.id,
        toolName: toolRun.tool.name,
        journeyId: args.journey.id,
        stateId: args.state.id,
      });
      try {
        const idempotencyKey = toolRun.tool.idempotencyKey?.({
          input: parsedInput.data,
          conversationId: args.conversation.id,
        });
        const output = toolRun.tool.name === "cognidesk.viewJourneyContext"
          ? createJourneyContextView(parsedInput.data, args.context)
          : await toolRun.tool.execute({
              input: parsedInput.data,
              app: this.options.app ?? {},
              conversationId: args.conversation.id,
              ...(idempotencyKey ? { idempotencyKey } : {}),
              ...(args.signal ? { signal: args.signal } : {}),
            });
        const parsedOutput = toolRun.tool.output.parse(output);
        for (const assignment of toolRun.assign) {
          setPathValue(args.context, assignment.path, assignment.value({
            output: parsedOutput,
            context: args.context,
          }));
        }
        await args.emit({
          conversationId: args.conversation.id,
          type: "tool.completed",
          data: {
            toolName: toolRun.tool.name,
            success: true,
            journeyId: args.journey.id,
            stateId: args.state.id,
            result: parsedOutput,
          },
        });
        await this.trace({
          type: "tool.completed",
          conversationId: args.conversation.id,
          toolName: toolRun.tool.name,
          success: true,
          journeyId: args.journey.id,
          stateId: args.state.id,
        });
        const lifecycleApplied = await this.applyBuiltInLifecycleTool({
          toolName: toolRun.tool.name,
          input: parsedInput.data,
          conversationId: args.conversation.id,
          emit: args.emit,
        });
        if (lifecycleApplied) return null;
        if (toolRun.onSuccessId) return toolRun.onSuccessId;
      } catch (error) {
        const message = error instanceof Error ? error.message : "Tool execution failed.";
        await args.emit({
          conversationId: args.conversation.id,
          type: "tool.completed",
          data: {
            toolName: toolRun.tool.name,
            success: false,
            journeyId: args.journey.id,
            stateId: args.state.id,
            error: message,
          },
        });
        await this.trace({
          type: "tool.completed",
          conversationId: args.conversation.id,
          toolName: toolRun.tool.name,
          success: false,
          journeyId: args.journey.id,
          stateId: args.state.id,
          error: message,
        });
        return toolRun.onFailureId ?? null;
      }
    }
    return null;
  }

  private async emitConfirmationPrompts(args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const confirmableToolRuns = args.state.toolRuns.filter((toolRun) => (
      toolRun.actionType === "transition" && toolRun.confirm
    ));
    if (confirmableToolRuns.length === 0) return;
    const existing = await this.options.storage.listEvents({ conversationId: args.conversation.id });
    for (const toolRun of confirmableToolRuns) {
      const promptId = createToolConfirmationPromptId(args.journey.id, args.state.id, toolRun.tool.name);
      const hasOpenPrompt = existing.some((event) => (
        event.type === "ui.prompted" && event.data.promptId === promptId
      )) && !existing.some((event) => (
        event.type === "ui.submitted" && event.data.promptId === promptId
      ));
      if (hasOpenPrompt) continue;
      await args.emit({
        conversationId: args.conversation.id,
        type: "ui.prompted",
        data: {
          promptId,
          widgetKind: toolRun.confirm?.widget?.kind ?? "confirmation",
          input: {
            title: toolRun.confirm?.message ?? `Confirm ${toolRun.tool.name}`,
            message: toolRun.confirm?.reason ?? toolRun.confirm?.message ?? `Confirm ${toolRun.tool.name}.`,
            confirmLabel: "Confirm",
            cancelLabel: "Cancel",
          },
        },
      });
    }
  }

  private async processWidgetSubmission(args: {
    conversation: ConversationRecord;
    promptId: string;
    output: unknown;
  }) {
    const confirmed = z.object({ confirmed: z.boolean() }).safeParse(args.output);
    if (!confirmed.success || !confirmed.data.confirmed) return;
    const agent = this.options.agent;
    if (!agent) return;
    const snapshot = await this.options.storage.getSnapshot(args.conversation.id);
    const journey = snapshot?.activeJourneyId
      ? agent.journeys.find((candidate) => candidate.id === snapshot.activeJourneyId)
      : undefined;
    if (!journey || journey.kind !== "stateMachine") return;
    const stateById = new Map(journey.states.map((state) => [state.id, state]));
    const stateId = snapshot?.activeStateIds[0];
    const state = stateId ? stateById.get(stateId) : undefined;
    if (!state) return;
    const context = isRecord(snapshot?.journeyContext) ? structuredClone(snapshot.journeyContext) : {};
    const toolTargetId = await this.runStateToolRuns({
      journey,
      conversation: args.conversation,
      state,
      context,
      actionType: "transition",
      confirmedPromptId: args.promptId,
      emit: (event) => this.emit(event),
    });
    const latestConversation = await this.requireConversationRecord(args.conversation.id);
    if (latestConversation.lifecycle !== "active") return;
    const next = toolTargetId
      ? { targetId: toolTargetId }
      : await this.selectTransition({ journey, state, context });
    const nextState = next ? stateById.get(next.targetId) : null;
    const activeStateIds = nextState ? [nextState.id] : [state.id];
    if (nextState) {
      await this.emit({
        conversationId: args.conversation.id,
        type: "journey.state.entered",
        data: { journeyId: journey.id, stateId: nextState.id },
      });
    }
    await this.options.storage.saveSnapshot({
      conversationId: args.conversation.id,
      lifecycle: args.conversation.lifecycle,
      activeJourneyId: journey.id,
      activeStateIds,
      journeyContext: context,
      updatedAt: new Date().toISOString(),
      ...(snapshot?.compactionSummary !== undefined ? { compactionSummary: snapshot.compactionSummary } : {}),
      ...(snapshot?.definitionHash ? { definitionHash: snapshot.definitionHash } : {}),
    });
  }

  private async processJourneyEvent(args: {
    conversation: ConversationRecord;
    eventName: string;
    routing: EventRoutingMode;
    target?: { journeyId?: string; stateId?: string };
    app: unknown;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }): Promise<RuntimeSnapshot | null> {
    const agent = this.options.agent;
    const previousSnapshot = await this.options.storage.getSnapshot(args.conversation.id);
    if (!agent) return previousSnapshot;
    const route = await this.resolveJourneyEventRoute({
      agent,
      previousSnapshot,
      eventName: args.eventName,
      routing: args.routing,
      ...(args.target ? { target: args.target } : {}),
    });
    if (!route) return previousSnapshot;

    const sameJourney = previousSnapshot?.activeJourneyId === route.journey.id;
    const stateById = new Map(route.journey.states.map((state) => [state.id, state]));
    const context = sameJourney && isRecord(previousSnapshot?.journeyContext)
      ? structuredClone(previousSnapshot.journeyContext)
      : {};
    const transition = await this.selectEventTransition({
      state: route.state,
      eventName: args.eventName,
      context,
      app: args.app,
    });
    if (!transition) return previousSnapshot;

    const nextState = stateById.get(transition.targetId);
    if (!nextState) return previousSnapshot;
    if (route.journey.id !== previousSnapshot?.activeJourneyId) {
      await args.emit({
        conversationId: args.conversation.id,
        type: "journey.activated",
        data: {
          journeyId: route.journey.id,
          ...(previousSnapshot?.activeJourneyId ? { previousJourneyId: previousSnapshot.activeJourneyId } : {}),
        },
      });
    }
    await args.emit({
      conversationId: args.conversation.id,
      type: "journey.state.entered",
      data: { journeyId: route.journey.id, stateId: nextState.id },
    });
    await this.runStateToolRuns({
      journey: route.journey,
      conversation: args.conversation,
      state: nextState,
      context,
      actionType: "entry",
      emit: args.emit,
      ...(args.signal ? { signal: args.signal } : {}),
    });
    const finalState = await this.advanceStateMachine({
      journey: route.journey,
      conversation: args.conversation,
      stateById,
      state: nextState,
      context,
      emit: args.emit,
      ...(args.signal ? { signal: args.signal } : {}),
    });
    const snapshot: RuntimeSnapshot = {
      conversationId: args.conversation.id,
      lifecycle: args.conversation.lifecycle,
      activeJourneyId: route.journey.id,
      activeStateIds: [finalState.id],
      journeyContext: context,
      updatedAt: new Date().toISOString(),
      ...(previousSnapshot?.compactionSummary !== undefined ? { compactionSummary: previousSnapshot.compactionSummary } : {}),
      ...(previousSnapshot?.definitionHash ? { definitionHash: previousSnapshot.definitionHash } : {}),
    };
    await this.options.storage.saveSnapshot(snapshot);
    return snapshot;
  }

  private async listVisibleCustomEventContext(agent: CompiledAgent, conversationId: string): Promise<VisibleCustomEventContext[]> {
    const visibleTypes = new Set(
      agent.customEvents
        .filter((event) => event.visibleToModel)
        .map((event) => `custom.${event.name}`),
    );
    if (visibleTypes.size === 0) return [];
    const events = await this.options.storage.listEvents({ conversationId });
    return events
      .filter((event) => visibleTypes.has(event.type))
      .map((event) => ({
        type: event.type,
        offset: event.offset,
        data: event.data,
      }));
  }

  private createResponseMessages(args: {
    agent: CompiledAgent;
    journey: CompiledJourney | null;
    stateMachineTurn: StateMachineTurnResult | null;
    userText: string;
    knowledge: Array<KnowledgeItem>;
    visibleCustomEvents: VisibleCustomEventContext[];
  }): ModelMessage[] {
    const journeyContext = args.journey
      ? renderJourneyRuntimeContext(args.journey, args.stateMachineTurn)
      : "No active journey.";
    const knowledgeContext = args.knowledge.length > 0
      ? args.knowledge.map((item, index) => {
          const title = item.title ? ` (${item.title})` : "";
          return `[K${index + 1}:${item.id}${title}]\n${item.content}`;
        }).join("\n\n")
      : "No retrieved knowledge.";
    const customEventContext = args.visibleCustomEvents.length > 0
      ? args.visibleCustomEvents
          .map((event) => `[${event.offset}:${event.type}]\n${JSON.stringify(event.data)}`)
          .join("\n\n")
      : "No visible custom events.";

    return [
      {
        role: "system",
        content: [
          args.agent.instructions,
          "",
          journeyContext,
          "",
          "Use retrieved knowledge when relevant. If knowledge is used, make the supporting text cite the source id in prose.",
          "",
          knowledgeContext,
          "",
          "Visible custom events:",
          customEventContext,
        ].join("\n"),
      },
      { role: "user", content: args.userText },
    ];
  }

  private async createCitationSegments(args: {
    conversation: ConversationRecord;
    text: string;
    knowledge: Array<KnowledgeItem>;
    signal?: AbortSignal;
  }): Promise<MessageSegment[] | null> {
    if (args.knowledge.length === 0) return null;
    if (this.options.postProcessing?.citations === false) return null;
    const models = this.requireModels();
    try {
      const output = await this.generateTextWithTrace({
        conversationId: args.conversation.id,
        model: models.citationPostProcessing,
        input: {
          role: "citationPostProcessing",
          messages: [
            {
              role: "system",
              content: "Split the assistant answer into citation segments. Attach knowledgeIds only where the segment uses that source.",
            },
            {
              role: "user",
              content: [
                "Knowledge:",
                ...args.knowledge.map((item) => `[${item.id}] ${item.content}`),
                "",
                "Assistant answer:",
                args.text,
              ].join("\n"),
            },
          ],
          responseFormat: citationPostProcessingSchema,
          ...(args.signal ? { signal: args.signal } : {}),
        },
      });
      const structured = citationPostProcessingSchema.parse(output.structured ?? JSON.parse(output.text));
      return structured.segments.map((segment, index) => ({
        id: `segment_${index + 1}`,
        text: segment.text,
        references: segment.knowledgeIds.map((id) => ({ type: "knowledge" as const, id })),
      }));
    } catch (error) {
      await this.emit({
        conversationId: args.conversation.id,
        type: "error",
        data: {
          code: "citation_post_processing_failed",
          message: error instanceof Error ? error.message : "Citation post-processing failed.",
        },
      });
      return null;
    }
  }

  private nextSnapshot(args: {
    conversationId: string;
    previousSnapshot: RuntimeSnapshot | null;
    selectedJourney: CompiledJourney | null;
    stateMachineTurn: StateMachineTurnResult | null;
  }): RuntimeSnapshot {
    return {
      conversationId: args.conversationId,
      lifecycle: "active",
      activeStateIds: args.stateMachineTurn?.activeStateIds
        ?? (args.selectedJourney?.initialStateId ? [args.selectedJourney.initialStateId] : []),
      updatedAt: new Date().toISOString(),
      ...(args.selectedJourney ? { activeJourneyId: args.selectedJourney.id } : {}),
      ...(args.stateMachineTurn
        ? { journeyContext: args.stateMachineTurn.journeyContext }
        : args.previousSnapshot?.journeyContext !== undefined ? { journeyContext: args.previousSnapshot.journeyContext } : {}),
      ...(args.previousSnapshot?.compactionSummary !== undefined ? { compactionSummary: args.previousSnapshot.compactionSummary } : {}),
      ...(this.options.journeyIndex ? { definitionHash: this.options.journeyIndex.definitionHash } : {}),
    };
  }

  private async redactUserMessage(conversation: ConversationRecord, text: string) {
    return await this.options.privacy?.redactUserMessage?.({
      conversationId: conversation.id,
      agentId: conversation.agentId,
      text,
    }) ?? text;
  }

  private async redactModelMessages(conversation: ConversationRecord, messages: ModelMessage[]) {
    return await this.options.privacy?.redactModelMessages?.({
      conversationId: conversation.id,
      agentId: conversation.agentId,
      messages,
    }) ?? messages;
  }

  private async redactAssistantMessage(conversation: ConversationRecord, text: string) {
    return await this.options.privacy?.redactAssistantMessage?.({
      conversationId: conversation.id,
      agentId: conversation.agentId,
      text,
    }) ?? text;
  }
}

export function createRuntime(options: RuntimeOptions) {
  return new CognideskRuntime(options);
}

function normalizeConfidence(candidate: JourneyCandidate) {
  if (candidate.reason === "always") return 1;
  if (candidate.reason === "matcher") return 0.99;
  return Math.max(0, Math.min(1, (candidate.similarity + 1) / 2));
}

function uniqueKnowledgeSources(sources: KnowledgeSource[]) {
  const byName = new Map<string, KnowledgeSource>();
  for (const source of sources) byName.set(source.name, source);
  return [...byName.values()];
}

function findJourneyState(journey: CompiledJourney, stateId: string | undefined) {
  if (!stateId) return undefined;
  return journey.states.find((state) => state.id === stateId);
}

function hasEventTransition(state: CompiledJourney["states"][number], eventName: string) {
  return state.transitions.some((transition) => (
    transition.kind === "event" && (transition.eventName ?? transition.description) === eventName
  ));
}

function renderJourneyRuntimeContext(journey: CompiledJourney, stateMachineTurn: StateMachineTurnResult | null) {
  const lines = [
    `Active journey: ${journey.id}`,
    `Journey kind: ${journey.kind}`,
    `Journey condition: ${journey.condition}`,
  ];
  if (journey.kind === "delegation" && journey.delegation) {
    lines.push(`Delegation goal: ${journey.delegation.goal}`);
    if (journey.delegation.instructions) lines.push(`Delegation instructions: ${journey.delegation.instructions}`);
    if (journey.delegation.completeWhen.length > 0) {
      lines.push(`Delegation completion criteria: ${journey.delegation.completeWhen.join("; ")}`);
    }
    if (journey.delegation.tools.length > 0) {
      lines.push(`Delegation tools: ${journey.delegation.tools.map((toolDefinition) => toolDefinition.name).join(", ")}`);
    }
  } else {
    lines.push(
      stateMachineTurn?.activeStateIds.length
        ? `Active state: ${stateMachineTurn.activeStateIds.join(", ")}`
        : journey.initialStateId ? `Initial state: ${journey.initialStateId}` : "",
    );
    if (stateMachineTurn) lines.push(`Journey context: ${JSON.stringify(stateMachineTurn.journeyContext)}`);
  }
  return lines.filter(Boolean).join("\n");
}

function parseKnowledgeQuery(source: KnowledgeSource, message: string): z.infer<KnowledgeSource["query"]> | null {
  const candidates = [
    { query: message },
    { text: message },
    message,
  ];
  for (const candidate of candidates) {
    const parsed = source.query.safeParse(candidate);
    if (parsed.success) return parsed.data;
  }
  return null;
}

function renderEventsForCompaction(events: RuntimeEvent[]) {
  return events.map((event) => JSON.stringify({
    offset: event.offset,
    type: event.type,
    data: event.data,
    createdAt: event.createdAt,
  })).join("\n");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getPathValue(context: Record<string, unknown>, path: string) {
  let current: unknown = context;
  for (const part of path.split(".")) {
    if (!isRecord(current)) return undefined;
    current = current[part];
  }
  return current;
}

function setPathValue(context: Record<string, unknown>, path: string, value: unknown) {
  const parts = path.split(".");
  let current = context;
  for (const part of parts.slice(0, -1)) {
    const next = current[part];
    if (!isRecord(next)) current[part] = {};
    current = current[part] as Record<string, unknown>;
  }
  const last = parts.at(-1);
  if (last) current[last] = value;
}

function hasUsableValue(value: unknown) {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

function guardAllows(result: Awaited<ReturnType<NonNullable<CompiledJourney["states"][number]["transitions"][number]["guard"]>>>) {
  if (typeof result === "boolean") return result;
  return result.allow;
}

function createJourneyContextView(input: unknown, context: Record<string, unknown>) {
  const parsed = z.object({
    journeyId: z.string(),
    fields: z.array(z.string()).optional(),
  }).parse(input);
  if (!parsed.fields?.length) {
    return {
      journeyId: parsed.journeyId,
      context: structuredClone(context),
    };
  }
  const selected: Record<string, unknown> = {};
  for (const field of parsed.fields) {
    const value = getPathValue(context, field);
    if (value !== undefined) setPathValue(selected, field, structuredClone(value));
  }
  return {
    journeyId: parsed.journeyId,
    context: selected,
  };
}

function createToolConfirmationPromptId(journeyId: string, stateId: string, toolName: string) {
  return `confirm:${journeyId}:${stateId}:${toolName}`;
}
