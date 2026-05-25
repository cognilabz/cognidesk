import { randomUUID } from "node:crypto";
import { z } from "zod";
import type { ActionDefinition, CompiledAgent, CompiledJourney, EventRoutingMode, JourneyEventDefinition } from "./definition.js";
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
  AnyTool,
  CustomRuntimeEventDefinition,
  GuardResult,
  JourneyContextRecord,
  JourneySummary,
  KnowledgeItem,
  KnowledgeSource,
  MessageSegment,
  ModelAdapter,
  ModelMessage,
  ModelToolCall,
  ModelToolDefinition,
  RuntimeEvent,
  RuntimeSnapshot,
  TextGenerationInput,
  TextGenerationOutput,
} from "./types.js";

type RetrievedKnowledgeItem = KnowledgeItem & {
  sourceName: string;
};

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
    beforeTurn?: boolean;
    afterTurn?: boolean;
    minEvents?: number;
    schemaVersion?: string;
    instructions?: string;
    summarySchema?: z.ZodType;
  };
  postProcessing?: {
    citations?: boolean;
  };
  toolRetry?: {
    maxAttempts?: number;
    notice?: string;
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

export interface ReplayConversationInput {
  conversationId: string;
  afterOffset?: number;
}

export interface ReplayedMessage {
  id: string;
  offset: number;
  role: "user" | "assistant";
  text: string;
  intermediate: boolean;
  aborted: boolean;
  reason?: string;
  segments?: MessageSegment[];
}

export interface ReplayedPrompt {
  promptId: string;
  offset: number;
  widgetKind: string;
  input: unknown;
}

export interface ReplayConversationResult {
  conversation: ConversationRecord;
  snapshot: RuntimeSnapshot | null;
  events: RuntimeEvent[];
  messages: ReplayedMessage[];
  openPrompts: ReplayedPrompt[];
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

export interface EmitGeneratedPreambleInput {
  conversationId: string;
  purpose?: string;
  maxWords?: number;
  traceId?: string;
  signal?: AbortSignal;
}

export interface EmitGeneratedPreambleResult {
  text: string;
  events: RuntimeEvent[];
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

export interface CompactConversationResult<TSummary = ConversationCompactionSummary> {
  summary: TSummary;
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

const delegationCompletionSchema = z.object({
  complete: z.boolean(),
  reason: z.string().optional(),
});

const journeyMatchSchema = z.object({
  candidates: z.array(z.object({
    journeyId: z.string(),
    confidence: z.number().optional(),
    reason: z.string().optional(),
  })).default([]),
});

const transitionMatchSchema = z.object({
  candidates: z.array(z.object({
    id: z.string(),
    confidence: z.number().optional(),
    reason: z.string().optional(),
  })).default([]),
});

const stateExtractionSchema = z.object({
  values: z.record(z.string(), z.unknown()).default({}),
});

interface StateMachineTurnResult {
  activeStateIds: string[];
  journeyContext: Record<string, unknown>;
  completed?: {
    journeyId: string;
    stateId?: string;
  };
}

interface VisibleCustomEventContext {
  type: string;
  offset: number;
  data: unknown;
}

interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
}

type RankedJourneyCandidate = JourneyCandidate & {
  matchConfidence?: number;
  matchReason?: string;
};

interface ActiveTurn {
  id: string;
  conversationId: string;
  controller: AbortController;
  interruptedByNewMessage: boolean;
  abortEvent?: Promise<RuntimeEvent>;
  interruptedEvent?: RuntimeEvent;
  cleanup(): void;
}

export class CognideskRuntime {
  private readonly activeTurns = new Map<string, ActiveTurn>();

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

  async emitGeneratedPreamble(input: EmitGeneratedPreambleInput): Promise<EmitGeneratedPreambleResult> {
    const agent = this.requireAgent();
    const models = this.requireModels();
    const conversation = await this.requireConversation(input.conversationId);
    const history = await this.listConversationMessages(conversation.id);
    const messages = await this.redactModelMessages(conversation, createGeneratedPreambleMessages({
      agent,
      history,
      maxWords: input.maxWords ?? 24,
      ...(input.purpose ? { purpose: input.purpose } : {}),
    }));
    const output = await this.generateTextWithTrace({
      conversationId: conversation.id,
      model: models.response,
      input: {
        role: "response",
        messages,
        ...(input.signal ? { signal: input.signal } : {}),
      },
    });
    const text = await this.redactAssistantMessage(
      conversation,
      normalizeGeneratedPreamble(output.text, input.maxWords ?? 24),
    );
    const emitted = await this.emitIntermediateMessage({
      conversationId: conversation.id,
      text,
      ...(input.traceId ? { traceId: input.traceId } : {}),
    });
    return { text, events: emitted.events };
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

  async replayConversation(input: ReplayConversationInput): Promise<ReplayConversationResult> {
    const conversation = await this.requireConversationRecord(input.conversationId);
    const events = await this.listAllEvents({
      conversationId: input.conversationId,
      ...(input.afterOffset !== undefined ? { afterOffset: input.afterOffset } : {}),
    });
    const snapshot = await this.options.storage.getSnapshot(input.conversationId);
    const replayed = replayRuntimeEvents(events);
    return {
      conversation,
      snapshot,
      events,
      messages: replayed.messages,
      openPrompts: replayed.openPrompts,
    };
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
    const turn = await this.beginUserTurn({
      conversationId: conversation.id,
      agent,
      ...(input.signal ? { signal: input.signal } : {}),
    });
    const userText = await this.redactUserMessage(conversation, input.text);
    const emitted: RuntimeEvent[] = [];
    if (turn.interruptedEvent) emitted.push(turn.interruptedEvent);
    const emit = async <TEvent extends RuntimeEventInput>(event: TEvent) => {
      const stored = await this.emit(event);
      emitted.push(stored);
      return stored;
    };

    try {
      if (this.options.compaction?.beforeTurn) {
        const compaction = await this.compactIfNeeded({
          conversationId: conversation.id,
          ...(this.options.compaction.schemaVersion ? { schemaVersion: this.options.compaction.schemaVersion } : {}),
          signal: turn.controller.signal,
        });
        this.throwIfTurnInterrupted(turn);
        if (compaction) emitted.push(...compaction.events);
      }

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

      const history = await this.listConversationMessages(conversation.id);
      const previousSnapshot = await this.options.storage.getSnapshot(conversation.id);
      const selectedJourney = await this.selectJourney({
        agent,
        models,
        conversation,
        previousSnapshot,
        history,
        input: {
          ...input,
          signal: turn.controller.signal,
        },
        userText,
        emit,
      });
      this.throwIfTurnInterrupted(turn);
      const stateMachineTurn = selectedJourney?.kind === "stateMachine"
        ? await this.executeStateMachineTurn({
            journey: selectedJourney,
            models,
            conversation,
            previousSnapshot,
            userText,
            turn: input.turn ?? {},
            app: input.app ?? this.options.app ?? {},
            emit,
            signal: turn.controller.signal,
          })
        : null;
      this.throwIfTurnInterrupted(turn);
      const interruptedByLifecycle = await this.createLifecycleInterruptionResult({
        conversationId: conversation.id,
        events: emitted,
      });
      if (interruptedByLifecycle) return interruptedByLifecycle;

      const knowledge = await this.retrieveKnowledge({
        agent,
        journey: selectedJourney,
        stateMachineTurn,
        conversationId: conversation.id,
        message: userText,
        emit,
        signal: turn.controller.signal,
      });
      this.throwIfTurnInterrupted(turn);
      const visibleCustomEvents = await this.listVisibleCustomEventContext(agent, conversation.id);
      const modelMessages = await this.redactModelMessages(conversation, this.createResponseMessages({
        agent,
        journey: selectedJourney,
        stateMachineTurn,
        userText,
        history,
        knowledge,
        visibleCustomEvents,
        compactionSummary: previousSnapshot?.compactionSummary,
        journeySummaries: previousSnapshot?.journeySummaries ?? [],
      }));
      const availableTools = this.resolveAvailableModelTools(agent, selectedJourney, stateMachineTurn);
      const modelTools = availableTools.map(toModelToolDefinition);
      this.throwIfTurnInterrupted(turn);
      const response = await this.generateResponseWithTools({
        conversation,
        model: models.response,
        messages: modelMessages,
        tools: availableTools,
        modelTools,
        selectedJourney,
        stateMachineTurn,
        emit,
        signal: turn.controller.signal,
      });
      this.throwIfTurnInterrupted(turn);
      if (response.providerMetadata?.interruptedByLifecycle) {
        const interrupted = await this.createLifecycleInterruptionResult({
          conversationId: conversation.id,
          events: emitted,
        });
        if (interrupted) return interrupted;
      }
      const assistantText = await this.redactAssistantMessage(conversation, response.text);
      this.throwIfTurnInterrupted(turn);
      const segments = await this.createCitationSegments({
        agent,
        conversation,
        text: assistantText,
        knowledge,
        signal: turn.controller.signal,
      });
      this.throwIfTurnInterrupted(turn);

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

      const delegationCompletion = await this.evaluateDelegationCompletion({
        journey: selectedJourney,
        models,
        conversation,
        history: [...history, { role: "assistant", content: assistantText }],
        emit,
        signal: turn.controller.signal,
      });
      this.throwIfTurnInterrupted(turn);

      const snapshot = this.nextSnapshot({
        conversationId: conversation.id,
        previousSnapshot,
        selectedJourney,
        stateMachineTurn,
        delegationCompletion,
      });
      await this.options.storage.saveSnapshot(snapshot);

      if (this.options.compaction?.afterTurn) {
        const compaction = await this.compactIfNeeded({
          conversationId: conversation.id,
          ...(this.options.compaction.schemaVersion ? { schemaVersion: this.options.compaction.schemaVersion } : {}),
          signal: turn.controller.signal,
        });
        this.throwIfTurnInterrupted(turn);
        if (compaction) emitted.push(...compaction.events);
      }

      return {
        conversation,
        snapshot,
        events: emitted,
        text: assistantText,
        ...(snapshot.activeJourneyId ? { activeJourneyId: snapshot.activeJourneyId } : {}),
      };
    } catch (error) {
      if (turn.interruptedByNewMessage && isAbortLikeError(error)) {
        return this.createAbortedTurnResult({
          conversation,
          turn,
          events: emitted,
        });
      }
      throw error;
    } finally {
      this.finishUserTurn(turn);
    }
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

  async compactConversation<TSummary = ConversationCompactionSummary>(
    input: CompactConversationInput,
  ): Promise<CompactConversationResult<TSummary>> {
    const models = this.requireModels();
    const conversation = await this.requireConversationRecord(input.conversationId);
    const summarySchema = this.options.compaction?.summarySchema ?? conversationCompactionSummarySchema;
    const instructions = this.options.compaction?.instructions
      ?? "Compact the conversation events into a concise structured memory. Preserve stable facts, open questions, and active commitments.";
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
            content: instructions,
          },
          {
            role: "user",
            content: renderEventsForCompaction(selectedEvents),
          },
        ],
        responseFormat: summarySchema,
        ...(input.signal ? { signal: input.signal } : {}),
      },
    });
    const summary = summarySchema.parse(output.structured ?? JSON.parse(output.text)) as TSummary;
    const currentSnapshot = await this.options.storage.getSnapshot(input.conversationId);
    const snapshot: RuntimeSnapshot = {
      conversationId: input.conversationId,
      lifecycle: conversation.lifecycle,
      activeStateIds: currentSnapshot?.activeStateIds ?? [],
      updatedAt: new Date().toISOString(),
      compactionSummary: summary,
      ...(currentSnapshot?.activeJourneyId ? { activeJourneyId: currentSnapshot.activeJourneyId } : {}),
      ...(currentSnapshot?.journeyContext !== undefined ? { journeyContext: currentSnapshot.journeyContext } : {}),
      ...(currentSnapshot?.journeyContexts ? { journeyContexts: currentSnapshot.journeyContexts } : {}),
      ...(currentSnapshot?.journeySummaries ? { journeySummaries: currentSnapshot.journeySummaries } : {}),
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

  private async compactIfNeeded(input: {
    conversationId: string;
    schemaVersion?: string;
    signal?: AbortSignal;
  }) {
    const allEvents = await this.options.storage.listEvents({ conversationId: input.conversationId });
    if (allEvents.length < (this.options.compaction?.minEvents ?? 50)) return null;
    return this.compactConversation({
      conversationId: input.conversationId,
      ...(input.schemaVersion ? { schemaVersion: input.schemaVersion } : {}),
      ...(input.signal ? { signal: input.signal } : {}),
    });
  }

  private async listAllEvents(input: {
    conversationId: string;
    afterOffset?: number;
  }) {
    const events: RuntimeEvent[] = [];
    let afterOffset = input.afterOffset ?? 0;
    const pageSize = 500;
    while (true) {
      const page = await this.options.storage.listEvents({
        conversationId: input.conversationId,
        afterOffset,
        limit: pageSize,
      });
      events.push(...page);
      if (page.length < pageSize) return events;
      afterOffset = page[page.length - 1]?.offset ?? afterOffset;
    }
  }

  private async beginUserTurn(args: {
    conversationId: string;
    agent: CompiledAgent;
    signal?: AbortSignal;
  }): Promise<ActiveTurn> {
    const previous = this.activeTurns.get(args.conversationId);
    const shouldInterrupt = args.agent.behavior?.interruptOnNewMessage !== false;
    let interruptedEvent: RuntimeEvent | undefined;
    if (previous && shouldInterrupt) {
      previous.interruptedByNewMessage = true;
      previous.controller.abort(new Error("interrupted_by_new_message"));
      previous.abortEvent ??= this.emit({
        conversationId: args.conversationId,
        type: "message.aborted",
        data: { reason: "interrupted_by_new_message" },
      });
      interruptedEvent = await previous.abortEvent;
    }

    const controller = new AbortController();
    const abortFromParent = () => controller.abort(args.signal?.reason ?? new Error("aborted"));
    if (args.signal?.aborted) abortFromParent();
    else args.signal?.addEventListener("abort", abortFromParent, { once: true });

    const turn: ActiveTurn = {
      id: randomUUID(),
      conversationId: args.conversationId,
      controller,
      interruptedByNewMessage: false,
      ...(interruptedEvent ? { interruptedEvent } : {}),
      cleanup: () => args.signal?.removeEventListener("abort", abortFromParent),
    };
    this.activeTurns.set(args.conversationId, turn);
    return turn;
  }

  private finishUserTurn(turn: ActiveTurn) {
    turn.cleanup();
    if (this.activeTurns.get(turn.conversationId)?.id === turn.id) {
      this.activeTurns.delete(turn.conversationId);
    }
  }

  private throwIfTurnInterrupted(turn: ActiveTurn) {
    if (turn.interruptedByNewMessage) throw new AbortError("interrupted_by_new_message");
  }

  private async createAbortedTurnResult(args: {
    conversation: ConversationRecord;
    turn: ActiveTurn;
    events: RuntimeEvent[];
  }): Promise<HandleUserMessageResult> {
    const abortEvent = await args.turn.abortEvent;
    if (abortEvent && !args.events.some((event) => event.id === abortEvent.id)) {
      args.events.push(abortEvent);
    }
    const snapshot = await this.options.storage.getSnapshot(args.conversation.id) ?? {
      conversationId: args.conversation.id,
      lifecycle: args.conversation.lifecycle,
      activeStateIds: [],
      updatedAt: new Date().toISOString(),
    };
    return {
      conversation: args.conversation,
      snapshot,
      events: args.events,
      text: "",
      ...(snapshot.activeJourneyId ? { activeJourneyId: snapshot.activeJourneyId } : {}),
    };
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

  private async generateResponseWithTools(args: {
    conversation: ConversationRecord;
    model: ModelAdapter;
    messages: ModelMessage[];
    tools: AnyTool[];
    modelTools: ModelToolDefinition[];
    selectedJourney: CompiledJourney | null;
    stateMachineTurn: StateMachineTurnResult | null;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }): Promise<TextGenerationOutput> {
    const messages = [...args.messages];
    const maxToolRounds = 4;
    for (let round = 0; round <= maxToolRounds; round += 1) {
      const response = await this.generateTextWithTrace({
        conversationId: args.conversation.id,
        model: args.model,
        input: {
          role: "response",
          messages,
          ...(args.modelTools.length > 0 ? { tools: args.modelTools, toolChoice: "auto" as const } : {}),
          ...(args.signal ? { signal: args.signal } : {}),
        },
      });
      if (!response.toolCalls?.length) return response;
      if (round === maxToolRounds) {
        await args.emit({
          conversationId: args.conversation.id,
          type: "error",
          data: {
            code: "tool_round_limit_exceeded",
            message: `Model requested tools after ${maxToolRounds} tool rounds.`,
          },
        });
        return { ...response, toolCalls: [] };
      }

      messages.push({
        role: "assistant",
        content: response.text,
        toolCalls: response.toolCalls,
      });
      const results = await this.executeModelToolCalls({
        conversation: args.conversation,
        calls: response.toolCalls,
        tools: args.tools,
        selectedJourney: args.selectedJourney,
        stateMachineTurn: args.stateMachineTurn,
        emit: args.emit,
        ...(args.signal ? { signal: args.signal } : {}),
      });
      messages.push(...results);
      const lifecycle = await this.requireConversationRecord(args.conversation.id);
      if (lifecycle.lifecycle !== "active") {
        return { text: "", providerMetadata: { interruptedByLifecycle: true } };
      }
    }
    return { text: "" };
  }

  private async executeModelToolCalls(args: {
    conversation: ConversationRecord;
    calls: ModelToolCall[];
    tools: AnyTool[];
    selectedJourney: CompiledJourney | null;
    stateMachineTurn: StateMachineTurnResult | null;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }): Promise<ModelMessage[]> {
    const byName = new Map(args.tools.map((toolDefinition) => [toolDefinition.name, toolDefinition]));
    const messages: ModelMessage[] = [];
    for (const call of args.calls) {
      const toolDefinition = byName.get(call.name);
      if (!toolDefinition) {
        const error = `Tool '${call.name}' is not available in the active tool scope.`;
        await args.emit({
          conversationId: args.conversation.id,
          type: "tool.completed",
          data: { toolName: call.name, success: false, error },
        });
        messages.push(createToolResultMessage(call, { error }));
        continue;
      }

      const parsedInput = toolDefinition.input.safeParse(call.input);
      if (!parsedInput.success) {
        const error = parsedInput.error.message;
        await args.emit({
          conversationId: args.conversation.id,
          type: "tool.completed",
          data: { toolName: toolDefinition.name, success: false, error },
        });
        messages.push(createToolResultMessage(call, { error }));
        continue;
      }

      await args.emit({
        conversationId: args.conversation.id,
        type: "tool.started",
        data: {
          toolName: toolDefinition.name,
          ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
        },
      });
      await this.trace({
        type: "tool.started",
        conversationId: args.conversation.id,
        toolName: toolDefinition.name,
        ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
      });
      try {
        const idempotencyKey = toolDefinition.idempotencyKey?.({
          input: parsedInput.data,
          conversationId: args.conversation.id,
        });
        const output = await this.executeToolWithRetry({
          tool: toolDefinition,
          input: parsedInput.data,
          conversationId: args.conversation.id,
          journeyContext: args.stateMachineTurn?.journeyContext ?? {},
          emit: args.emit,
          ...(idempotencyKey ? { idempotencyKey } : {}),
          ...(args.signal ? { signal: args.signal } : {}),
        });
        const parsedOutput = toolDefinition.output.parse(output);
        await args.emit({
          conversationId: args.conversation.id,
          type: "tool.completed",
          data: {
            toolName: toolDefinition.name,
            success: true,
            ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
            result: parsedOutput,
          },
        });
        await this.trace({
          type: "tool.completed",
          conversationId: args.conversation.id,
          toolName: toolDefinition.name,
          success: true,
          ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
        });
        await this.applyBuiltInLifecycleTool({
          toolName: toolDefinition.name,
          input: parsedInput.data,
          conversationId: args.conversation.id,
          emit: args.emit,
        });
        messages.push(createToolResultMessage(call, parsedOutput));
      } catch (error) {
        if (isAbortLikeError(error) && args.signal?.aborted) throw error;
        const message = error instanceof Error ? error.message : "Tool execution failed.";
        await args.emit({
          conversationId: args.conversation.id,
          type: "tool.completed",
          data: {
            toolName: toolDefinition.name,
            success: false,
            ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
            error: message,
          },
        });
        await this.trace({
          type: "tool.completed",
          conversationId: args.conversation.id,
          toolName: toolDefinition.name,
          success: false,
          ...(args.selectedJourney ? { journeyId: args.selectedJourney.id } : {}),
          error: message,
        });
        messages.push(createToolResultMessage(call, { error: message }));
      }
    }
    return messages;
  }

  private resolveAvailableModelTools(
    agent: CompiledAgent,
    journey: CompiledJourney | null,
    stateMachineTurn: StateMachineTurnResult | null,
  ) {
    const scoped = journey?.kind === "delegation"
      ? journey.delegation?.tools ?? []
      : journey?.tools ?? [];
    const stateTools = resolveActiveStates(journey, stateMachineTurn).flatMap((state) => state.tools);
    return uniqueTools([...agent.tools, ...scoped, ...stateTools]);
  }

  private async executeToolWithRetry(args: {
    tool: AnyTool;
    input: unknown;
    conversationId: string;
    idempotencyKey?: string;
    journeyContext: Record<string, unknown>;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const maxAttempts = this.toolExecutionMaxAttempts(args.tool, args.idempotencyKey);
    let lastError: unknown;
    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      try {
        if (args.tool.name === "cognidesk.viewJourneyContext") {
          const snapshot = await this.options.storage.getSnapshot(args.conversationId);
          return createJourneyContextView(args.input, args.journeyContext, snapshot?.journeyContexts ?? []);
        }
        return await args.tool.execute({
          input: args.input,
          app: this.options.app ?? {},
          conversationId: args.conversationId,
          ...(args.idempotencyKey ? { idempotencyKey: args.idempotencyKey } : {}),
          ...(args.signal ? { signal: args.signal } : {}),
        });
      } catch (error) {
        if (isAbortLikeError(error) && args.signal?.aborted) throw error;
        lastError = error;
        if (attempt >= maxAttempts) break;
        await this.emitRetryNotice({
          conversationId: args.conversationId,
          toolName: args.tool.name,
          emit: args.emit,
        });
      }
    }
    throw lastError instanceof Error ? lastError : new Error("Tool execution failed.");
  }

  private toolExecutionMaxAttempts(toolDefinition: AnyTool, idempotencyKey: string | undefined) {
    if (toolDefinition.sideEffect && !idempotencyKey) return 1;
    return Math.max(1, this.options.toolRetry?.maxAttempts ?? 2);
  }

  private async emitRetryNotice(args: {
    conversationId: string;
    toolName: string;
    notice?: string;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const text = args.notice ?? this.options.toolRetry?.notice ?? `I hit a temporary issue while running ${args.toolName}; retrying now.`;
    await args.emit({
      conversationId: args.conversationId,
      type: "message.started",
      data: { role: "assistant" },
    });
    await args.emit({
      conversationId: args.conversationId,
      type: "message.completed",
      data: {
        text,
        intermediate: true,
      },
    });
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
      ...(currentSnapshot?.journeyContexts ? { journeyContexts: currentSnapshot.journeyContexts } : {}),
      ...(currentSnapshot?.journeySummaries ? { journeySummaries: currentSnapshot.journeySummaries } : {}),
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
    history: ConversationMessage[];
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
    const rankedCandidates = await this.rankJourneyCandidates({
      candidates,
      models: args.models,
      conversation: args.conversation,
      userText: args.userText,
      history: args.history,
      ...(args.previousSnapshot?.activeJourneyId ? { activeJourneyId: args.previousSnapshot.activeJourneyId } : {}),
      ...(args.input.signal ? { signal: args.input.signal } : {}),
    });
    await args.emit({
      conversationId: args.conversation.id,
      type: "journey.matched",
      data: {
        candidates: rankedCandidates.map((candidate) => ({
          journeyId: candidate.journeyId,
          confidence: normalizeConfidence(candidate),
          reason: candidate.matchReason ?? candidate.reason,
        })),
      },
    });

    const selected = await this.selectAllowedJourney({
      candidates: rankedCandidates,
      conversation: args.conversation,
      turn: args.input.turn ?? {},
      app: args.input.app ?? this.options.app ?? {},
      ...(args.previousSnapshot?.activeJourneyId ? { activeJourneyId: args.previousSnapshot.activeJourneyId } : {}),
      emit: args.emit,
    });
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

  private async selectAllowedJourney(args: {
    candidates: RankedJourneyCandidate[];
    conversation: ConversationRecord;
    turn: unknown;
    app: unknown;
    activeJourneyId?: string;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    for (const candidate of args.candidates) {
      const guard = candidate.journey.guard;
      if (!guard) return candidate.journey;
      const result = await guard({
        app: args.app,
        conversation: args.conversation,
        turn: args.turn,
        journeyId: candidate.journey.id,
        ...(args.activeJourneyId ? { activeJourneyId: args.activeJourneyId } : {}),
      });
      if (guardAllows(result)) return candidate.journey;
      await this.emitGuardDenial({
        journey: candidate.journey,
        conversation: args.conversation,
        result,
        emit: args.emit,
      });
    }
    return null;
  }

  private async rankJourneyCandidates(args: {
    candidates: JourneyCandidate[];
    models: AgentModelSet;
    conversation: ConversationRecord;
    userText: string;
    history: ConversationMessage[];
    activeJourneyId?: string;
    signal?: AbortSignal;
  }): Promise<RankedJourneyCandidate[]> {
    if (args.candidates.length === 0) return [];
    try {
      const output = await this.generateTextWithTrace({
        conversationId: args.conversation.id,
        model: args.models.matcher,
        input: {
          role: "matcher",
          messages: [
            {
              role: "system",
              content: [
                "Rank only the provided candidate journeys for the latest user message.",
                "Return candidates that should be active now, ordered from best to worst.",
                "Return an empty candidates array when the base agent should stay active without a journey.",
                "Prefer keeping the active journey for vague follow-up messages when it still fits.",
              ].join("\n"),
            },
            {
              role: "user",
              content: [
                `Latest user message: ${args.userText}`,
                `Active journey: ${args.activeJourneyId ?? "none"}`,
                "Conversation transcript:",
                renderConversationTranscript(args.history),
                "Candidates:",
                ...args.candidates.map((candidate) => renderJourneyCandidateForMatcher(candidate)),
              ].join("\n\n"),
            },
          ],
          responseFormat: journeyMatchSchema,
          ...(args.signal ? { signal: args.signal } : {}),
        },
      });
      const structured = journeyMatchSchema.parse(output.structured ?? JSON.parse(output.text));
      const byId = new Map(args.candidates.map((candidate) => [candidate.journeyId, candidate]));
      const seen = new Set<string>();
      const ranked: RankedJourneyCandidate[] = [];
      for (const item of structured.candidates) {
        const candidate = byId.get(item.journeyId);
        if (!candidate || seen.has(item.journeyId)) continue;
        seen.add(item.journeyId);
        ranked.push({
          ...candidate,
          ...(item.confidence !== undefined ? { matchConfidence: clampConfidence(item.confidence) } : {}),
          ...(item.reason ? { matchReason: item.reason } : {}),
        });
      }
      return ranked;
    } catch (error) {
      if (isAbortLikeError(error) && args.signal?.aborted) throw error;
      return args.candidates;
    }
  }

  private async retrieveKnowledge(args: {
    agent: CompiledAgent;
    journey: CompiledJourney | null;
    stateMachineTurn: StateMachineTurnResult | null;
    conversationId: string;
    message: string;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const activeStates = resolveActiveStates(args.journey, args.stateMachineTurn);
    const sources = uniqueKnowledgeSources([
      ...args.agent.knowledge,
      ...(args.journey?.knowledge ?? []),
      ...activeStates.flatMap((state) => state.knowledge),
    ]);
    const items: RetrievedKnowledgeItem[] = [];
    for (const source of sources) {
      const query = parseKnowledgeQuery(source, args.message);
      if (query === null) continue;
      const result = await source.retrieve({
        query,
        ...(args.signal ? { signal: args.signal } : {}),
      });
      const limited = result.items
        .slice(0, this.options.knowledgeLimit ?? 5)
        .map((item) => ({ ...item, sourceName: source.name }));
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

  private async evaluateDelegationCompletion(args: {
    journey: CompiledJourney | null;
    models: AgentModelSet;
    conversation: ConversationRecord;
    history: ConversationMessage[];
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }): Promise<{ journeyId: string; reason?: string } | null> {
    if (args.journey?.kind !== "delegation" || !args.journey.delegation) return null;
    if (args.journey.delegation.completeWhen.length === 0) return null;

    try {
      const output = await this.generateTextWithTrace({
        conversationId: args.conversation.id,
        model: args.models.matcher,
        input: {
          role: "matcher",
          messages: [
            {
              role: "system",
              content: [
                "Decide whether the active delegation journey is complete.",
                "Return complete only when all completion criteria are satisfied by the conversation.",
                `Delegation goal: ${args.journey.delegation.goal}`,
                `Completion criteria: ${args.journey.delegation.completeWhen.join("; ")}`,
              ].join("\n"),
            },
            {
              role: "user",
              content: args.history
                .map((message) => `${message.role}: ${message.content}`)
                .join("\n"),
            },
          ],
          responseFormat: delegationCompletionSchema,
          ...(args.signal ? { signal: args.signal } : {}),
        },
      });
      const structured = delegationCompletionSchema.parse(output.structured ?? JSON.parse(output.text));
      if (!structured.complete) return null;
      const completed = {
        journeyId: args.journey.id,
        ...(structured.reason ? { reason: structured.reason } : {}),
      };
      await args.emit({
        conversationId: args.conversation.id,
        type: "journey.completed",
        data: completed,
      });
      return completed;
    } catch (error) {
      if (isAbortLikeError(error) && args.signal?.aborted) throw error;
      await args.emit({
        conversationId: args.conversation.id,
        type: "error",
        data: {
          code: "delegation_completion_failed",
          message: error instanceof Error ? error.message : "Delegation completion evaluation failed.",
        },
      });
      return null;
    }
  }

  private async executeStateMachineTurn(args: {
    journey: CompiledJourney;
    models: AgentModelSet;
    conversation: ConversationRecord;
    previousSnapshot: RuntimeSnapshot | null;
    userText: string;
    turn: unknown;
    app: unknown;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }): Promise<StateMachineTurnResult> {
    const stateById = new Map(args.journey.states.map((state) => [state.id, state]));
    const sameJourney = args.previousSnapshot?.activeJourneyId === args.journey.id;
    const context = await this.resolveInitialJourneyContext(args);
    const activeStates = sameJourney
      ? (args.previousSnapshot?.activeStateIds ?? [])
        .map((stateId) => stateById.get(stateId))
        .filter((state): state is CompiledJourney["states"][number] => Boolean(state))
      : args.journey.initialStateId
        ? await this.enterStateTree({
            ...args,
            stateById,
            state: stateById.get(args.journey.initialStateId),
            context,
            emitSelf: false,
          })
        : [];
    if (activeStates.length === 0) return { activeStateIds: [], journeyContext: context };

    const nextActiveStates: CompiledJourney["states"] = [];
    for (const state of activeStates) {
      const activeState = await this.applyStateExtraction({
        ...args,
        state,
        context,
      });
      nextActiveStates.push(...await this.advanceStateMachine({
        ...args,
        stateById,
        state: activeState,
        context,
      }));
    }

    const completed = createJourneyCompletion(args.journey.id, nextActiveStates);
    if (completed) {
      await args.emit({
        conversationId: args.conversation.id,
        type: "journey.completed",
        data: completed,
      });
    }

    return {
      activeStateIds: completed ? [] : nextActiveStates.map((state) => state.id),
      journeyContext: context,
      ...(completed ? { completed } : {}),
    };
  }

  private async resolveInitialJourneyContext(args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    previousSnapshot: RuntimeSnapshot | null;
    turn: unknown;
    app: unknown;
  }): Promise<Record<string, unknown>> {
    if (args.previousSnapshot?.activeJourneyId === args.journey.id && isRecord(args.previousSnapshot.journeyContext)) {
      return structuredClone(args.previousSnapshot.journeyContext);
    }

    const policy = args.journey.contextReuse;
    if (!policy) return {};
    const stored = args.previousSnapshot?.journeyContexts?.find((record) => record.journeyId === args.journey.id);
    if (!isRecord(stored?.context)) return {};
    const previousContext = structuredClone(stored.context);
    const allowed = await policy.when({
      app: args.app,
      conversation: args.conversation,
      turn: args.turn,
      journeyId: args.journey.id,
      previousContext,
      ...(args.previousSnapshot?.activeJourneyId ? { activeJourneyId: args.previousSnapshot.activeJourneyId } : {}),
    });
    if (!allowed) return {};
    return policy.fields?.length
      ? selectContextFields(previousContext, policy.fields)
      : previousContext;
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
                renderStateInstructionStack(args.journey, args.state),
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
      if (isAbortLikeError(error) && args.signal?.aborted) throw error;
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
    models?: AgentModelSet;
    conversation: ConversationRecord;
    stateById: Map<string, CompiledJourney["states"][number]>;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    userText?: string;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    let state = args.state;
    const visited = new Set<string>();
    while (!visited.has(state.id)) {
      visited.add(state.id);
      const lifecycle = await this.requireConversationRecord(args.conversation.id);
      if (lifecycle.lifecycle !== "active") return [state];
      if (!this.stateRequirementsSatisfied(state, args.context)) {
        await this.emitFieldPrompts({ ...args, state });
        return [state];
      }
      const fieldConfirmationCount = await this.emitFieldConfirmationPrompts({ ...args, state });
      if (fieldConfirmationCount > 0) return [state];
      if (state.requiresVisit) {
        const promptCount = await this.emitConfirmationPrompts({ ...args, state });
        if (promptCount > 0) return [state];
      }

      await this.runStateActionRuns({
        ...args,
        state,
        actionType: "transition",
      });
      const toolTargetId = await this.runStateToolRuns({
        ...args,
        state,
        actionType: "transition",
      });
      const latestConversation = await this.requireConversationRecord(args.conversation.id);
      if (latestConversation.lifecycle !== "active") return [state];
      const transition = toolTargetId
        ? { targetId: toolTargetId }
        : await this.selectTransition({
            journey: args.journey,
            conversation: args.conversation,
            state,
            context: args.context,
            ...(args.models ? { models: args.models } : {}),
            ...(args.userText ? { userText: args.userText } : {}),
            ...(args.signal ? { signal: args.signal } : {}),
            emit: args.emit,
          });
      if (!transition) return [state];

      const nextState = args.stateById.get(transition.targetId);
      if (!nextState) return [state];
      await this.runStateActionRuns({
        ...args,
        state,
        actionType: "exit",
      });
      await this.runStateToolRuns({
        ...args,
        state,
        actionType: "exit",
      });
      const lifecycleAfterExit = await this.requireConversationRecord(args.conversation.id);
      if (lifecycleAfterExit.lifecycle !== "active") return [state];
      const enteredStates = await this.enterStateTree({
        ...args,
        state: nextState,
        emitSelf: true,
      });
      if (enteredStates.length !== 1) return enteredStates;
      state = enteredStates[0] ?? nextState;
    }
    return [state];
  }

  private async enterStateTree(args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    stateById: Map<string, CompiledJourney["states"][number]>;
    state: CompiledJourney["states"][number] | undefined;
    context: Record<string, unknown>;
    emitSelf: boolean;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }): Promise<CompiledJourney["states"]> {
    if (!args.state) return [];
    if (args.emitSelf) {
      await args.emit({
        conversationId: args.conversation.id,
        type: "journey.state.entered",
        data: { journeyId: args.journey.id, stateId: args.state.id },
      });
    }
    await this.runStateActionRuns({
      ...args,
      state: args.state,
      actionType: "entry",
    });
    await this.runStateToolRuns({
      ...args,
      state: args.state,
      actionType: "entry",
    });
    const lifecycle = await this.requireConversationRecord(args.conversation.id);
    if (lifecycle.lifecycle !== "active") return [args.state];

    const children = args.journey.states.filter((state) => state.parentId === args.state?.id);
    if (children.length === 0) return [args.state];
    const childEntryStates = args.state.type === "parallel"
      ? children
      : args.state.initialStateId
        ? [args.stateById.get(args.state.initialStateId)].filter((state): state is CompiledJourney["states"][number] => Boolean(state))
        : [];
    const activeStates: CompiledJourney["states"] = [];
    for (const child of childEntryStates) {
      activeStates.push(...await this.enterStateTree({
        ...args,
        state: child,
        emitSelf: true,
      }));
    }
    return activeStates.length > 0 ? activeStates : [args.state];
  }

  private stateRequirementsSatisfied(state: CompiledJourney["states"][number], context: Record<string, unknown>) {
    return state.collected
      .filter((field) => isFieldRequired(field, context))
      .every((field) => hasUsableValue(getPathValue(context, field.path)));
  }

  private async selectTransition(args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    models?: AgentModelSet;
    userText?: string;
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const transitions = [...args.state.transitions]
      .filter((transition) => transition.kind === "conversational")
      .sort((left, right) => (right.priority ?? 0) - (left.priority ?? 0));
    const rankedTransitions = await this.rankConversationalTransitions(args, transitions);
    for (const transition of rankedTransitions) {
      if (!transition.guard) return transition;
      const result = await transition.guard({
        app: this.options.app ?? {},
        context: args.context,
      });
      if (guardAllows(result)) return transition;
      await this.emitGuardDenial({ ...args, result });
    }
    return null;
  }

  private async rankConversationalTransitions(
    args: {
      journey: CompiledJourney;
      conversation: ConversationRecord;
      state: CompiledJourney["states"][number];
      context: Record<string, unknown>;
      models?: AgentModelSet;
      userText?: string;
      signal?: AbortSignal;
      emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
    },
    transitions: CompiledJourney["states"][number]["transitions"],
  ) {
    if (transitions.length <= 1) return transitions;
    if (!args.models || !args.userText) return transitions;

    const candidates = transitions.map((transition, index) => ({
      id: `transition_${index + 1}`,
      transition,
    }));
    try {
      const output = await this.generateTextWithTrace({
        conversationId: args.conversation.id,
        model: args.models.matcher,
        input: {
          role: "matcher",
          messages: [
            {
              role: "system",
              content: [
                "Rank only the provided state transition candidates for the latest user message.",
                "Return candidates that should fire now, ordered from best to worst.",
                "Return an empty candidates array when no transition should fire.",
                "Prefer higher priority only when the latest message fits multiple transitions equally.",
              ].join("\n"),
            },
            {
              role: "user",
              content: [
                `Journey: ${args.journey.id}`,
                `State: ${args.state.id}`,
                `Latest user message: ${args.userText}`,
                `Current context: ${JSON.stringify(args.context)}`,
                "Candidates:",
                ...candidates.map(({ id, transition }) => [
                  `id: ${id}`,
                  `targetId: ${transition.targetId}`,
                  transition.description ? `description: ${transition.description}` : "description: transition is allowed when current state requirements are satisfied",
                  `priority: ${transition.priority ?? 0}`,
                ].join("\n")),
              ].join("\n\n"),
            },
          ],
          responseFormat: transitionMatchSchema,
          ...(args.signal ? { signal: args.signal } : {}),
        },
      });
      const structured = transitionMatchSchema.parse(output.structured ?? JSON.parse(output.text));
      const byId = new Map(candidates.map((candidate) => [candidate.id, candidate.transition]));
      const seen = new Set<string>();
      const ranked = structured.candidates
        .map((candidate) => {
          const transition = byId.get(candidate.id);
          if (!transition || seen.has(candidate.id)) return null;
          seen.add(candidate.id);
          return transition;
        })
        .filter((transition): transition is CompiledJourney["states"][number]["transitions"][number] => Boolean(transition));
      return ranked;
    } catch (error) {
      if (isAbortLikeError(error) && args.signal?.aborted) throw error;
      await args.emit({
        conversationId: args.conversation.id,
        type: "error",
        data: {
          code: "transition_matching_failed",
          message: error instanceof Error ? error.message : "Transition matching failed.",
        },
      });
      return transitions;
    }
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
    const activeStates = activeJourney
      ? findJourneyStates(activeJourney, args.previousSnapshot?.activeStateIds.length
        ? args.previousSnapshot.activeStateIds
        : activeJourney.initialStateId ? [activeJourney.initialStateId] : [])
      : [];

    if (args.routing === "activeJourneyOnly") {
      const state = activeStates.find((candidate) => hasEventTransition(candidate, args.eventName)) ?? activeStates[0];
      return activeJourney && state ? { journey: activeJourney, state } : null;
    }

    if (args.routing === "targeted") {
      const journey = args.target?.journeyId
        ? journeyById.get(args.target.journeyId)
        : activeJourney;
      if (!journey) return null;
      const state = findJourneyState(
        journey,
        args.target?.stateId
          ?? (journey.id === args.previousSnapshot?.activeJourneyId ? activeStates[0]?.id : undefined)
          ?? journey.initialStateId,
      );
      return state ? { journey, state } : null;
    }

    if (args.routing === "full") {
      const activeState = activeStates.find((candidate) => hasEventTransition(candidate, args.eventName));
      if (activeJourney && activeState) {
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
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    eventName: string;
    context: Record<string, unknown>;
    app: unknown;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
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
      await this.emitGuardDenial({ ...args, result });
    }
    return null;
  }

  private async runStateActionRuns(args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    actionType: "entry" | "exit" | "transition";
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const actionRuns = args.state.actionRuns.filter((actionRun) => actionRun.actionType === args.actionType);
    for (const actionRun of actionRuns) {
      const rawInput = actionRun.input ? actionRun.input({ context: args.context }) : {};
      const parsedInput = actionRun.action.input.safeParse(rawInput);
      if (!parsedInput.success) {
        const error = parsedInput.error.message;
        await args.emit({
          conversationId: args.conversation.id,
          type: "action.completed",
          data: {
            actionName: actionRun.action.name,
            success: false,
            journeyId: args.journey.id,
            stateId: args.state.id,
            error,
          },
        });
        await args.emit({
          conversationId: args.conversation.id,
          type: "error",
          data: {
            code: "state_action_validation_failed",
            message: error,
          },
        });
        continue;
      }

      await args.emit({
        conversationId: args.conversation.id,
        type: "action.started",
        data: {
          actionName: actionRun.action.name,
          journeyId: args.journey.id,
          stateId: args.state.id,
        },
      });
      await this.trace({
        type: "action.started",
        conversationId: args.conversation.id,
        actionName: actionRun.action.name,
        journeyId: args.journey.id,
        stateId: args.state.id,
      });
      const maxAttempts = this.actionExecutionMaxAttempts(actionRun.action);
      let lastError: unknown = null;
      try {
        for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
          try {
            if (args.signal?.aborted) throw args.signal.reason ?? new AbortError("aborted");
            await actionRun.action.run({ input: parsedInput.data });
            lastError = null;
            break;
          } catch (error) {
            if (isAbortLikeError(error) && args.signal?.aborted) throw error;
            lastError = error;
            if (attempt >= maxAttempts) break;
            const retryNotice = actionRun.action.retry && typeof actionRun.action.retry === "object"
              ? actionRun.action.retry.notice
              : undefined;
            await this.emitRetryNotice({
              conversationId: args.conversation.id,
              toolName: actionRun.action.name,
              ...(retryNotice ? { notice: retryNotice } : {}),
              emit: args.emit,
            });
          }
        }
        if (lastError) throw lastError;
        await args.emit({
          conversationId: args.conversation.id,
          type: "action.completed",
          data: {
            actionName: actionRun.action.name,
            success: true,
            journeyId: args.journey.id,
            stateId: args.state.id,
          },
        });
        await this.trace({
          type: "action.completed",
          conversationId: args.conversation.id,
          actionName: actionRun.action.name,
          success: true,
          journeyId: args.journey.id,
          stateId: args.state.id,
        });
      } catch (error) {
        if (isAbortLikeError(error) && args.signal?.aborted) throw error;
        const message = error instanceof Error ? error.message : "State action failed.";
        await args.emit({
          conversationId: args.conversation.id,
          type: "action.completed",
          data: {
            actionName: actionRun.action.name,
            success: false,
            journeyId: args.journey.id,
            stateId: args.state.id,
            error: message,
          },
        });
        await this.trace({
          type: "action.completed",
          conversationId: args.conversation.id,
          actionName: actionRun.action.name,
          success: false,
          journeyId: args.journey.id,
          stateId: args.state.id,
          error: message,
        });
        await args.emit({
          conversationId: args.conversation.id,
          type: "error",
          data: {
            code: "state_action_failed",
            message,
          },
        });
      }
    }
  }

  private actionExecutionMaxAttempts(actionDefinition: ActionDefinition) {
    if (actionDefinition.retry === false) return 1;
    if (actionDefinition.retry && typeof actionDefinition.retry === "object" && actionDefinition.retry.maxAttempts !== undefined) {
      return Math.max(1, actionDefinition.retry.maxAttempts);
    }
    return Math.max(1, this.options.toolRetry?.maxAttempts ?? 2);
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
        const output = await this.executeToolWithRetry({
          tool: toolRun.tool,
          input: parsedInput.data,
          conversationId: args.conversation.id,
          journeyContext: args.context,
          emit: args.emit,
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
        if (isAbortLikeError(error) && args.signal?.aborted) throw error;
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

  private async emitGuardDenial(args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state?: CompiledJourney["states"][number];
    result: GuardResult;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    if (!isStructuredGuardDenial(args.result)) return;

    await args.emit({
      conversationId: args.conversation.id,
      type: "journey.guard.denied",
      data: {
        journeyId: args.journey.id,
        ...(args.state ? { stateId: args.state.id } : {}),
        code: args.result.code,
        ...(args.result.message ? { message: args.result.message } : {}),
        ...(args.result.metadata ? { metadata: args.result.metadata } : {}),
      },
    });

    if (!args.result.prompt) return;
    const promptId = createGuardPromptId(args.journey.id, args.state?.id, args.result.code);
    const existing = await this.options.storage.listEvents({ conversationId: args.conversation.id });
    const hasOpenPrompt = existing.some((event) => (
      event.type === "ui.prompted" && event.data.promptId === promptId
    )) && !existing.some((event) => (
      event.type === "ui.submitted" && event.data.promptId === promptId
    ));
    if (hasOpenPrompt) return;

    await args.emit({
      conversationId: args.conversation.id,
      type: "ui.prompted",
      data: {
        promptId,
        widgetKind: args.result.prompt.widget.kind,
        input: args.result.prompt.input,
      },
    });
  }

  private async emitFieldPrompts(args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const missingFields = args.state.collected.filter((field) => (
      isFieldRequired(field, args.context) && !hasUsableValue(getPathValue(args.context, field.path))
    ));
    if (missingFields.length === 0) return 0;
    const existing = await this.options.storage.listEvents({ conversationId: args.conversation.id });
    let prompted = 0;
    for (const field of missingFields) {
      const promptId = createFieldPromptId(args.journey.id, args.state.id, field.path);
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
          widgetKind: field.widget?.kind ?? "text-input",
          input: field.widgetInput ?? {
            label: field.prompt ?? field.path,
          },
        },
      });
      prompted += 1;
    }
    return prompted;
  }

  private async emitFieldConfirmationPrompts(args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const confirmableFields = args.state.collected.filter((field) => (
      field.confirm && hasUsableValue(getPathValue(args.context, field.path))
    ));
    if (confirmableFields.length === 0) return 0;
    const existing = await this.options.storage.listEvents({ conversationId: args.conversation.id });
    let prompted = 0;
    for (const field of confirmableFields) {
      const promptId = createFieldConfirmationPromptId(args.journey.id, args.state.id, field.path);
      const hasSubmission = existing.some((event) => (
        event.type === "ui.submitted" && event.data.promptId === promptId
      ));
      if (hasSubmission) continue;
      const hasOpenPrompt = existing.some((event) => (
        event.type === "ui.prompted" && event.data.promptId === promptId
      ));
      if (hasOpenPrompt) continue;
      const policy = typeof field.confirm === "object" ? field.confirm : {};
      const value = getPathValue(args.context, field.path);
      await args.emit({
        conversationId: args.conversation.id,
        type: "ui.prompted",
        data: {
          promptId,
          widgetKind: policy.widget?.kind ?? "confirmation",
          input: {
            title: policy.message ?? `Confirm ${field.path}`,
            message: policy.reason ?? policy.message ?? `Please confirm ${field.path}: ${String(value)}.`,
            confirmLabel: "Confirm",
            cancelLabel: "Edit",
          },
        },
      });
      prompted += 1;
    }
    return prompted;
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
    if (confirmableToolRuns.length === 0) return 0;
    const existing = await this.options.storage.listEvents({ conversationId: args.conversation.id });
    let prompted = 0;
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
      prompted += 1;
    }
    return prompted;
  }

  private async processWidgetSubmission(args: {
    conversation: ConversationRecord;
    promptId: string;
    output: unknown;
  }) {
    const agent = this.options.agent;
    if (!agent) return;
    const snapshot = await this.options.storage.getSnapshot(args.conversation.id);
    const journey = snapshot?.activeJourneyId
      ? agent.journeys.find((candidate) => candidate.id === snapshot.activeJourneyId)
      : undefined;
    if (!journey || journey.kind !== "stateMachine") return;
    const stateById = new Map(journey.states.map((state) => [state.id, state]));
    const state = resolveWidgetPromptState(journey, snapshot, args.promptId);
    if (!state) return;
    const context = isRecord(snapshot?.journeyContext) ? structuredClone(snapshot.journeyContext) : {};
    const siblingActiveStates = findJourneyStates(
      journey,
      (snapshot?.activeStateIds ?? []).filter((stateId) => stateId !== state.id),
    );
    const fieldPrompt = parseFieldPromptId(args.promptId);
    const fieldConfirmationPrompt = parseFieldConfirmationPromptId(args.promptId);
    const fieldPromptTarget = fieldPrompt && fieldPrompt.journeyId === journey.id && fieldPrompt.stateId === state.id
      ? fieldPrompt
      : null;
    const fieldConfirmationTarget = fieldConfirmationPrompt
      && fieldConfirmationPrompt.journeyId === journey.id
      && fieldConfirmationPrompt.stateId === state.id
      ? fieldConfirmationPrompt
      : null;
    if (fieldPromptTarget || fieldConfirmationTarget) {
      const target = fieldPromptTarget ?? fieldConfirmationTarget;
      if (!target) return;
      const field = state.collected.find((candidate) => candidate.path === target.path);
      if (!field) return;
      if (fieldPromptTarget) {
        setPathValue(context, field.path, extractWidgetFieldValue(args.output));
      } else {
        const confirmed = z.object({ confirmed: z.boolean() }).safeParse(args.output);
        if (!confirmed.success || !confirmed.data.confirmed) return;
      }
      const branchStates = await this.advanceStateMachine({
        journey,
        conversation: args.conversation,
        stateById,
        state,
        context,
        emit: (event) => this.emit(event),
      });
      const activeStates = mergeActiveStates(siblingActiveStates, branchStates);
      const completed = createJourneyCompletion(journey.id, activeStates);
      if (completed) {
        await this.emit({
          conversationId: args.conversation.id,
          type: "journey.completed",
          data: completed,
        });
      }
      const journeySummaries = appendJourneySummary(
        snapshot?.journeySummaries ?? [],
        completed ? createJourneySummary({
          journey,
          completedAt: new Date().toISOString(),
          stateMachineTurn: { activeStateIds: [], journeyContext: context, completed },
          delegationCompletion: null,
        }) : null,
      );
      const journeyContexts = appendJourneyContext(
        snapshot?.journeyContexts ?? [],
        completed ? createJourneyContextRecord({
          journeyId: journey.id,
          completed,
          context,
          updatedAt: new Date().toISOString(),
        }) : null,
      );
      await this.options.storage.saveSnapshot({
        conversationId: args.conversation.id,
        lifecycle: args.conversation.lifecycle,
        activeStateIds: completed ? [] : activeStates.map((activeState) => activeState.id),
        updatedAt: new Date().toISOString(),
        ...(completed ? {} : { activeJourneyId: journey.id, journeyContext: context }),
        ...(journeyContexts.length > 0 ? { journeyContexts } : {}),
        ...(journeySummaries.length > 0 ? { journeySummaries } : {}),
        ...(snapshot?.compactionSummary !== undefined ? { compactionSummary: snapshot.compactionSummary } : {}),
        ...(snapshot?.definitionHash ? { definitionHash: snapshot.definitionHash } : {}),
      });
      return;
    }

    const confirmed = z.object({ confirmed: z.boolean() }).safeParse(args.output);
    if (!confirmed.success || !confirmed.data.confirmed) return;
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
      : await this.selectTransition({
          journey,
          conversation: args.conversation,
          state,
          context,
          emit: (event) => this.emit(event),
        });
    const nextState = next ? stateById.get(next.targetId) : null;
    const branchStates = nextState ? [nextState] : [state];
    const activeStates = mergeActiveStates(siblingActiveStates, branchStates);
    const completed = createJourneyCompletion(journey.id, activeStates);
    const activeStateIds = completed ? [] : activeStates.map((activeState) => activeState.id);
    if (nextState) {
      await this.runStateActionRuns({
        journey,
        conversation: args.conversation,
        state,
        context,
        actionType: "exit",
        emit: (event) => this.emit(event),
      });
      await this.runStateToolRuns({
        journey,
        conversation: args.conversation,
        state,
        context,
        actionType: "exit",
        emit: (event) => this.emit(event),
      });
      const lifecycleAfterExit = await this.requireConversationRecord(args.conversation.id);
      if (lifecycleAfterExit.lifecycle !== "active") return;
      await this.emit({
        conversationId: args.conversation.id,
        type: "journey.state.entered",
        data: { journeyId: journey.id, stateId: nextState.id },
      });
      await this.runStateActionRuns({
        journey,
        conversation: args.conversation,
        state: nextState,
        context,
        actionType: "entry",
        emit: (event) => this.emit(event),
      });
      await this.runStateToolRuns({
        journey,
        conversation: args.conversation,
        state: nextState,
        context,
        actionType: "entry",
        emit: (event) => this.emit(event),
      });
    }
    if (completed) {
      await this.emit({
        conversationId: args.conversation.id,
        type: "journey.completed",
        data: completed,
      });
    }
    const journeySummaries = appendJourneySummary(
      snapshot?.journeySummaries ?? [],
      completed ? createJourneySummary({
        journey,
        completedAt: new Date().toISOString(),
        stateMachineTurn: { activeStateIds: [], journeyContext: context, completed },
        delegationCompletion: null,
      }) : null,
    );
    const journeyContexts = appendJourneyContext(
      snapshot?.journeyContexts ?? [],
      completed ? createJourneyContextRecord({
        journeyId: journey.id,
        completed,
        context,
        updatedAt: new Date().toISOString(),
      }) : null,
    );
    await this.options.storage.saveSnapshot({
      conversationId: args.conversation.id,
      lifecycle: args.conversation.lifecycle,
      activeStateIds,
      updatedAt: new Date().toISOString(),
      ...(completed ? {} : { activeJourneyId: journey.id, journeyContext: context }),
      ...(journeyContexts.length > 0 ? { journeyContexts } : {}),
      ...(journeySummaries.length > 0 ? { journeySummaries } : {}),
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
    const siblingActiveStates = sameJourney
      ? findJourneyStates(
          route.journey,
          (previousSnapshot?.activeStateIds ?? []).filter((stateId) => stateId !== route.state.id),
        )
      : [];
    const transition = await this.selectEventTransition({
      journey: route.journey,
      conversation: args.conversation,
      state: route.state,
      eventName: args.eventName,
      context,
      app: args.app,
      emit: args.emit,
    });
    if (!transition) return previousSnapshot;

    const nextState = stateById.get(transition.targetId);
    if (!nextState) return previousSnapshot;
    await this.runStateActionRuns({
      journey: route.journey,
      conversation: args.conversation,
      state: route.state,
      context,
      actionType: "exit",
      emit: args.emit,
      ...(args.signal ? { signal: args.signal } : {}),
    });
    await this.runStateToolRuns({
      journey: route.journey,
      conversation: args.conversation,
      state: route.state,
      context,
      actionType: "exit",
      emit: args.emit,
      ...(args.signal ? { signal: args.signal } : {}),
    });
    const lifecycleAfterExit = await this.requireConversationRecord(args.conversation.id);
    if (lifecycleAfterExit.lifecycle !== "active") return previousSnapshot;
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
    await this.runStateActionRuns({
      journey: route.journey,
      conversation: args.conversation,
      state: nextState,
      context,
      actionType: "entry",
      emit: args.emit,
      ...(args.signal ? { signal: args.signal } : {}),
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
    const finalStates = await this.advanceStateMachine({
      journey: route.journey,
      conversation: args.conversation,
      stateById,
      state: nextState,
      context,
      emit: args.emit,
      ...(args.signal ? { signal: args.signal } : {}),
    });
    const activeStates = mergeActiveStates(siblingActiveStates, finalStates);
    const completed = createJourneyCompletion(route.journey.id, activeStates);
    if (completed) {
      await args.emit({
        conversationId: args.conversation.id,
        type: "journey.completed",
        data: completed,
      });
    }
    const journeySummaries = appendJourneySummary(
      previousSnapshot?.journeySummaries ?? [],
      completed ? createJourneySummary({
        journey: route.journey,
        completedAt: new Date().toISOString(),
        stateMachineTurn: { activeStateIds: [], journeyContext: context, completed },
        delegationCompletion: null,
      }) : null,
    );
    const journeyContexts = appendJourneyContext(
      previousSnapshot?.journeyContexts ?? [],
      completed ? createJourneyContextRecord({
        journeyId: route.journey.id,
        completed,
        context,
        updatedAt: new Date().toISOString(),
      }) : null,
    );
    const snapshot: RuntimeSnapshot = {
      conversationId: args.conversation.id,
      lifecycle: args.conversation.lifecycle,
      activeStateIds: completed ? [] : activeStates.map((activeState) => activeState.id),
      updatedAt: new Date().toISOString(),
      ...(completed ? {} : { activeJourneyId: route.journey.id, journeyContext: context }),
      ...(journeyContexts.length > 0 ? { journeyContexts } : {}),
      ...(journeySummaries.length > 0 ? { journeySummaries } : {}),
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

  private async listConversationMessages(conversationId: string): Promise<ConversationMessage[]> {
    const events = await this.options.storage.listEvents({ conversationId });
    const messages: ConversationMessage[] = [];
    let pendingRole: ConversationMessage["role"] | null = null;
    for (const event of events) {
      if (event.type === "message.started") {
        pendingRole = event.data.role;
        continue;
      }
      if (event.type === "message.aborted") {
        pendingRole = null;
        continue;
      }
      if (event.type !== "message.completed") continue;
      if (event.data.intermediate) {
        pendingRole = null;
        continue;
      }
      if (!pendingRole) continue;
      messages.push({
        role: pendingRole,
        content: event.data.text,
      });
      pendingRole = null;
    }
    return messages;
  }

  private createResponseMessages(args: {
    agent: CompiledAgent;
    journey: CompiledJourney | null;
    stateMachineTurn: StateMachineTurnResult | null;
    userText: string;
    history: ConversationMessage[];
    knowledge: RetrievedKnowledgeItem[];
    visibleCustomEvents: VisibleCustomEventContext[];
    compactionSummary?: unknown;
    journeySummaries: JourneySummary[];
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
    const memoryContext = args.compactionSummary !== undefined
      ? JSON.stringify(args.compactionSummary)
      : "No compacted conversation memory.";
    const journeySummaryContext = args.journeySummaries.length > 0
      ? args.journeySummaries
          .map((summary) => [
            `journey:${summary.journeyId}`,
            `kind:${summary.kind}`,
            summary.stateId ? `state:${summary.stateId}` : "",
            summary.reason ? `reason:${summary.reason}` : "",
            `summary:${summary.summary}`,
          ].filter(Boolean).join(" "))
          .join("\n")
      : "No completed journey summaries.";
    const history = args.history.length > 0
      ? args.history
      : [{ role: "user" as const, content: args.userText }];

    return [
      {
        role: "system",
        content: [
          args.agent.instructions,
          "",
          "Conversation memory:",
          memoryContext,
          "",
          "Completed journey summaries:",
          journeySummaryContext,
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
      ...history.map((message): ModelMessage => ({
        role: message.role,
        content: message.content,
      })),
    ];
  }

  private async createCitationSegments(args: {
    agent: CompiledAgent;
    conversation: ConversationRecord;
    text: string;
    knowledge: RetrievedKnowledgeItem[];
    signal?: AbortSignal;
  }): Promise<MessageSegment[] | null> {
    if (args.knowledge.length === 0) return null;
    if (args.agent.postProcessing?.citations === false) return null;
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
      const knowledgeById = new Map(args.knowledge.map((item) => [item.id, item]));
      return structured.segments.map((segment, index) => ({
        id: `segment_${index + 1}`,
        text: segment.text,
        references: segment.knowledgeIds.map((id) => {
          const item = knowledgeById.get(id);
          return {
            type: "knowledge" as const,
            id,
            ...(item?.sourceName ? { sourceName: item.sourceName } : {}),
            ...(item?.title ? { title: item.title } : {}),
            ...(item?.metadata !== undefined ? { metadata: item.metadata } : {}),
          };
        }),
      }));
    } catch (error) {
      if (isAbortLikeError(error) && args.signal?.aborted) throw error;
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
    delegationCompletion: { journeyId: string; reason?: string } | null;
  }): RuntimeSnapshot {
    const journeyCompleted = Boolean(args.stateMachineTurn?.completed)
      || Boolean(args.delegationCompletion);
    const journeySummaries = appendJourneySummary(
      args.previousSnapshot?.journeySummaries ?? [],
      args.selectedJourney && journeyCompleted
        ? createJourneySummary({
            journey: args.selectedJourney,
            completedAt: new Date().toISOString(),
            stateMachineTurn: args.stateMachineTurn,
            delegationCompletion: args.delegationCompletion,
          })
        : null,
    );
    const journeyContexts = appendJourneyContext(
      args.previousSnapshot?.journeyContexts ?? [],
      args.selectedJourney && args.stateMachineTurn?.completed
        ? createJourneyContextRecord({
            journeyId: args.selectedJourney.id,
            completed: args.stateMachineTurn.completed,
            context: args.stateMachineTurn.journeyContext,
            updatedAt: new Date().toISOString(),
          })
        : null,
    );
    return {
      conversationId: args.conversationId,
      lifecycle: "active",
      activeStateIds: journeyCompleted ? [] : args.stateMachineTurn?.activeStateIds
        ?? (args.selectedJourney?.initialStateId ? [args.selectedJourney.initialStateId] : []),
      updatedAt: new Date().toISOString(),
      ...(!journeyCompleted && args.selectedJourney ? { activeJourneyId: args.selectedJourney.id } : {}),
      ...(!journeyCompleted && args.stateMachineTurn
        ? { journeyContext: args.stateMachineTurn.journeyContext }
        : !journeyCompleted && args.previousSnapshot?.journeyContext !== undefined ? { journeyContext: args.previousSnapshot.journeyContext } : {}),
      ...(journeyContexts.length > 0 ? { journeyContexts } : {}),
      ...(journeySummaries.length > 0 ? { journeySummaries } : {}),
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

function normalizeConfidence(candidate: RankedJourneyCandidate) {
  if (candidate.matchConfidence !== undefined) return candidate.matchConfidence;
  if (candidate.reason === "always") return 1;
  if (candidate.reason === "matcher") return 0.99;
  return Math.max(0, Math.min(1, (candidate.similarity + 1) / 2));
}

function clampConfidence(value: number) {
  return Math.max(0, Math.min(1, value));
}

function renderJourneyCandidateForMatcher(candidate: JourneyCandidate) {
  const journey = candidate.journey;
  return [
    `- journeyId: ${journey.id}`,
    `  kind: ${journey.kind}`,
    `  condition: ${journey.condition}`,
    `  indexReason: ${candidate.reason}`,
    `  indexScore: ${candidate.score.toFixed(4)}`,
    `  stickiness: ${journey.stickiness}`,
    journey.tags.length > 0 ? `  tags: ${journey.tags.join(", ")}` : "",
    journey.examples.length > 0 ? `  examples: ${journey.examples.join(" | ")}` : "",
  ].filter(Boolean).join("\n");
}

function renderConversationTranscript(history: ConversationMessage[]) {
  if (history.length === 0) return "No prior conversation messages.";
  return history.map((message) => `${message.role}: ${message.content}`).join("\n");
}

function uniqueKnowledgeSources(sources: KnowledgeSource[]) {
  const byName = new Map<string, KnowledgeSource>();
  for (const source of sources) byName.set(source.name, source);
  return [...byName.values()];
}

function uniqueTools(tools: AnyTool[]) {
  const byName = new Map<string, AnyTool>();
  for (const toolDefinition of tools) byName.set(toolDefinition.name, toolDefinition);
  return [...byName.values()];
}

function toModelToolDefinition(toolDefinition: AnyTool): ModelToolDefinition {
  return {
    name: toolDefinition.name,
    input: toolDefinition.input,
    ...(toolDefinition.description ? { description: toolDefinition.description } : {}),
  };
}

function createToolResultMessage(call: ModelToolCall, output: unknown): ModelMessage {
  return {
    role: "tool",
    name: call.name,
    toolCallId: call.id,
    content: JSON.stringify(output),
  };
}

function findJourneyState(journey: CompiledJourney, stateId: string | undefined) {
  if (!stateId) return undefined;
  return journey.states.find((state) => state.id === stateId);
}

function findJourneyStates(journey: CompiledJourney, stateIds: string[]) {
  const stateById = new Map(journey.states.map((state) => [state.id, state]));
  return stateIds
    .map((stateId) => stateById.get(stateId))
    .filter((state): state is CompiledJourney["states"][number] => Boolean(state));
}

function mergeActiveStates(...stateGroups: CompiledJourney["states"][]) {
  const byId = new Map<string, CompiledJourney["states"][number]>();
  for (const state of stateGroups.flat()) byId.set(state.id, state);
  return [...byId.values()];
}

function resolveWidgetPromptState(
  journey: CompiledJourney,
  snapshot: RuntimeSnapshot | null,
  promptId: string,
) {
  const activeStateIds = new Set(snapshot?.activeStateIds ?? []);
  const fieldPrompt = parseFieldPromptId(promptId);
  if (fieldPrompt && fieldPrompt.journeyId === journey.id && activeStateIds.has(fieldPrompt.stateId)) {
    return findJourneyState(journey, fieldPrompt.stateId);
  }
  const fieldConfirmationPrompt = parseFieldConfirmationPromptId(promptId);
  if (
    fieldConfirmationPrompt
    && fieldConfirmationPrompt.journeyId === journey.id
    && activeStateIds.has(fieldConfirmationPrompt.stateId)
  ) {
    return findJourneyState(journey, fieldConfirmationPrompt.stateId);
  }
  const confirmationPrompt = parseToolConfirmationPromptId(promptId);
  if (confirmationPrompt && confirmationPrompt.journeyId === journey.id && activeStateIds.has(confirmationPrompt.stateId)) {
    return findJourneyState(journey, confirmationPrompt.stateId);
  }
  return findJourneyState(journey, snapshot?.activeStateIds[0]);
}

function createJourneyCompletion(journeyId: string, activeStates: CompiledJourney["states"]): StateMachineTurnResult["completed"] | undefined {
  if (activeStates.length === 0 || activeStates.some((state) => state.type !== "final")) return undefined;
  const onlyState = activeStates.length === 1 ? activeStates[0] : undefined;
  return {
    journeyId,
    ...(onlyState ? { stateId: onlyState.id } : {}),
  };
}

function appendJourneySummary(existing: JourneySummary[], next: JourneySummary | null) {
  if (!next) return existing;
  return [
    ...existing.filter((summary) => summary.journeyId !== next.journeyId),
    next,
  ];
}

function appendJourneyContext(existing: JourneyContextRecord[], next: JourneyContextRecord | null) {
  if (!next) return existing;
  return [
    ...existing.filter((record) => record.journeyId !== next.journeyId),
    next,
  ];
}

function createJourneyContextRecord(args: {
  journeyId: string;
  completed: NonNullable<StateMachineTurnResult["completed"]>;
  context: Record<string, unknown>;
  updatedAt: string;
}): JourneyContextRecord {
  return {
    journeyId: args.journeyId,
    context: structuredClone(args.context),
    updatedAt: args.updatedAt,
    ...(args.completed.stateId ? { stateId: args.completed.stateId } : {}),
  };
}

function createJourneySummary(args: {
  journey: CompiledJourney;
  completedAt: string;
  stateMachineTurn: StateMachineTurnResult | null;
  delegationCompletion: { journeyId: string; reason?: string } | null;
}): JourneySummary {
  const completed = args.stateMachineTurn?.completed;
  const context = args.stateMachineTurn?.journeyContext;
  const contextSummary = context && Object.keys(context).length > 0
    ? ` Context: ${JSON.stringify(context)}`
    : "";
  const reason = args.delegationCompletion?.reason;
  return {
    journeyId: args.journey.id,
    kind: args.journey.kind,
    completedAt: args.completedAt,
    summary: reason
      ?? `${args.journey.condition}${completed?.stateId ? ` Completed at state '${completed.stateId}'.` : ""}${contextSummary}`,
    ...(completed?.stateId ? { stateId: completed.stateId } : {}),
    ...(reason ? { reason } : {}),
  };
}

function resolveActiveStates(journey: CompiledJourney | null, stateMachineTurn: StateMachineTurnResult | null) {
  if (!journey || journey.kind !== "stateMachine" || !stateMachineTurn) return [];
  const activeStateIds = new Set(stateMachineTurn.activeStateIds);
  return journey.states.filter((state) => activeStateIds.has(state.id));
}

function isFieldRequired(
  field: CompiledJourney["states"][number]["collected"][number],
  context: Record<string, unknown>,
) {
  if (field.requiredWhen) return field.requiredWhen({ context });
  return field.required;
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
    const activeStates = resolveActiveStates(journey, stateMachineTurn);
    lines.push(
      stateMachineTurn?.activeStateIds.length
        ? `Active state: ${stateMachineTurn.activeStateIds.join(", ")}`
        : journey.initialStateId ? `Initial state: ${journey.initialStateId}` : "",
    );
    const renderedInstructions = new Set<string>();
    for (const state of activeStates) {
      for (const line of renderStateInstructionStack(journey, state).split("\n").filter(Boolean)) {
        if (renderedInstructions.has(line)) continue;
        renderedInstructions.add(line);
        lines.push(line);
      }
    }
    if (stateMachineTurn) lines.push(`Journey context: ${JSON.stringify(stateMachineTurn.journeyContext)}`);
  }
  return lines.filter(Boolean).join("\n");
}

function renderStateInstructionStack(journey: CompiledJourney, state: CompiledJourney["states"][number]) {
  const stateById = new Map(journey.states.map((candidate) => [candidate.id, candidate]));
  const stack: string[] = [];
  let current: CompiledJourney["states"][number] | undefined = state;
  while (current) {
    if (current.instructions) stack.unshift(`State ${current.id} instructions: ${current.instructions}`);
    current = current.parentId ? stateById.get(current.parentId) : undefined;
  }
  return stack.join("\n");
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

function replayRuntimeEvents(events: RuntimeEvent[]) {
  const messages: ReplayedMessage[] = [];
  const openPrompts = new Map<string, ReplayedPrompt>();
  let pendingRole: ReplayedMessage["role"] | null = null;
  let pendingStarted: RuntimeEvent | null = null;

  for (const event of events) {
    if (event.type === "message.started") {
      pendingRole = event.data.role;
      pendingStarted = event;
      continue;
    }
    if (event.type === "message.completed") {
      if (!pendingRole) continue;
      messages.push({
        id: event.id,
        offset: event.offset,
        role: pendingRole,
        text: event.data.text,
        intermediate: event.data.intermediate ?? false,
        aborted: false,
        ...(event.data.segments ? { segments: event.data.segments } : {}),
      });
      pendingRole = null;
      pendingStarted = null;
      continue;
    }
    if (event.type === "message.aborted") {
      messages.push({
        id: event.id,
        offset: event.offset,
        role: pendingRole ?? "assistant",
        text: event.data.partialText ?? "",
        intermediate: false,
        aborted: true,
        reason: event.data.reason,
      });
      pendingRole = null;
      pendingStarted = null;
      continue;
    }
    if (event.type === "ui.prompted") {
      openPrompts.set(event.data.promptId, {
        promptId: event.data.promptId,
        offset: event.offset,
        widgetKind: event.data.widgetKind,
        input: event.data.input,
      });
      continue;
    }
    if (event.type === "ui.submitted") {
      openPrompts.delete(event.data.promptId);
    }
  }

  if (pendingStarted && pendingRole) {
    messages.push({
      id: pendingStarted.id,
      offset: pendingStarted.offset,
      role: pendingRole,
      text: "",
      intermediate: false,
      aborted: true,
      reason: "missing_message_completion",
    });
  }

  return { messages, openPrompts: [...openPrompts.values()] };
}

function createGeneratedPreambleMessages(args: {
  agent: CompiledAgent;
  history: ConversationMessage[];
  purpose?: string;
  maxWords: number;
}): ModelMessage[] {
  return [
    {
      role: "system",
      content: [
        args.agent.instructions,
        `Write one brief wait-time preamble for the customer in ${args.maxWords} words or fewer.`,
        "Acknowledge that work is continuing, but do not claim a result, policy, tool output, queue status, or completion.",
        "Return only the customer-facing sentence.",
        args.purpose ? `Current work: ${args.purpose}` : "",
      ].filter(Boolean).join("\n"),
    },
    {
      role: "user",
      content: args.history.length > 0
        ? args.history.map((message) => `${message.role}: ${message.content}`).join("\n")
        : "No prior customer-visible conversation messages.",
    },
  ];
}

function normalizeGeneratedPreamble(text: string, maxWords: number) {
  const singleLine = text.replace(/\s+/g, " ").trim();
  if (!singleLine) return "I am still checking that for you.";
  const words = singleLine.split(" ");
  const clipped = words.length > maxWords ? words.slice(0, maxWords).join(" ") : singleLine;
  return clipped.replace(/["']$/g, "");
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

function selectContextFields(context: Record<string, unknown>, fields: string[]) {
  const selected: Record<string, unknown> = {};
  for (const field of fields) {
    const value = getPathValue(context, field);
    if (value !== undefined) setPathValue(selected, field, structuredClone(value));
  }
  return selected;
}

function hasUsableValue(value: unknown) {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}

function guardAllows(result: GuardResult) {
  if (typeof result === "boolean") return result;
  return result.allow;
}

function isStructuredGuardDenial(result: GuardResult): result is Extract<GuardResult, { allow: false }> {
  return typeof result === "object" && result !== null && result.allow === false;
}

function createJourneyContextView(
  input: unknown,
  activeContext: Record<string, unknown>,
  storedContexts: JourneyContextRecord[],
) {
  const parsed = z.object({
    journeyId: z.string(),
    fields: z.array(z.string()).optional(),
  }).parse(input);
  const stored = storedContexts.find((record) => record.journeyId === parsed.journeyId);
  const context = isRecord(stored?.context) ? stored.context : activeContext;
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

function createGuardPromptId(journeyId: string, stateId: string | undefined, code: string) {
  return `guard:${journeyId}:${stateId ?? "journey"}:${encodeURIComponent(code)}`;
}

function createFieldPromptId(journeyId: string, stateId: string, path: string) {
  return `field:${journeyId}:${stateId}:${encodeURIComponent(path)}`;
}

function createFieldConfirmationPromptId(journeyId: string, stateId: string, path: string) {
  return `confirm-field:${journeyId}:${stateId}:${encodeURIComponent(path)}`;
}

function parseFieldPromptId(promptId: string) {
  const [kind, journeyId, stateId, encodedPath] = promptId.split(":");
  if (kind !== "field" || !journeyId || !stateId || !encodedPath) return null;
  return {
    journeyId,
    stateId,
    path: decodeURIComponent(encodedPath),
  };
}

function parseFieldConfirmationPromptId(promptId: string) {
  const [kind, journeyId, stateId, encodedPath] = promptId.split(":");
  if (kind !== "confirm-field" || !journeyId || !stateId || !encodedPath) return null;
  return {
    journeyId,
    stateId,
    path: decodeURIComponent(encodedPath),
  };
}

function parseToolConfirmationPromptId(promptId: string) {
  const [kind, journeyId, stateId, ...toolNameParts] = promptId.split(":");
  const toolName = toolNameParts.join(":");
  if (kind !== "confirm" || !journeyId || !stateId || !toolName) return null;
  return {
    journeyId,
    stateId,
    toolName,
  };
}

function extractWidgetFieldValue(output: unknown) {
  if (isRecord(output) && "value" in output) return output.value;
  return output;
}

class AbortError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AbortError";
  }
}

function isAbortLikeError(error: unknown) {
  if (error instanceof Error) {
    return error.name === "AbortError" || error.message === "interrupted_by_new_message";
  }
  return false;
}
