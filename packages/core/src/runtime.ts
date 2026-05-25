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
  AnyTool,
  CustomRuntimeEventDefinition,
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

const stateExtractionSchema = z.object({
  values: z.record(z.string(), z.unknown()).default({}),
});

interface StateMachineTurnResult {
  activeStateIds: string[];
  journeyContext: Record<string, unknown>;
  completed?: {
    journeyId: string;
    stateId: string;
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

      const previousSnapshot = await this.options.storage.getSnapshot(conversation.id);
      const selectedJourney = await this.selectJourney({
        agent,
        models,
        conversation,
        previousSnapshot,
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
        conversationId: conversation.id,
        message: userText,
        emit,
        signal: turn.controller.signal,
      });
      this.throwIfTurnInterrupted(turn);
      const visibleCustomEvents = await this.listVisibleCustomEventContext(agent, conversation.id);
      const history = await this.listConversationMessages(conversation.id);
      const modelMessages = await this.redactModelMessages(conversation, this.createResponseMessages({
        agent,
        journey: selectedJourney,
        stateMachineTurn,
        userText,
        history,
        knowledge,
        visibleCustomEvents,
        compactionSummary: previousSnapshot?.compactionSummary,
      }));
      const availableTools = this.resolveAvailableModelTools(agent, selectedJourney);
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

  private resolveAvailableModelTools(agent: CompiledAgent, journey: CompiledJourney | null) {
    const scoped = journey?.kind === "delegation"
      ? journey.delegation?.tools ?? []
      : journey?.tools ?? [];
    return uniqueTools([...agent.tools, ...scoped]);
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
          return createJourneyContextView(args.input, args.journeyContext);
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
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }) {
    const text = this.options.toolRetry?.notice ?? `I hit a temporary issue while running ${args.toolName}; retrying now.`;
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
    const rankedCandidates = await this.rankJourneyCandidates({
      candidates,
      models: args.models,
      conversation: args.conversation,
      userText: args.userText,
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

    const selected = rankedCandidates[0]?.journey ?? null;
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

  private async rankJourneyCandidates(args: {
    candidates: JourneyCandidate[];
    models: AgentModelSet;
    conversation: ConversationRecord;
    userText: string;
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
    const completed = finalState.type === "final"
      ? { journeyId: args.journey.id, stateId: finalState.id }
      : undefined;
    if (completed) {
      await args.emit({
        conversationId: args.conversation.id,
        type: "journey.completed",
        data: completed,
      });
    }

    return {
      activeStateIds: completed ? [] : [finalState.id],
      journeyContext: context,
      ...(completed ? { completed } : {}),
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
      if (!this.stateRequirementsSatisfied(state, args.context)) {
        await this.emitFieldPrompts({ ...args, state });
        return state;
      }
      if (state.requiresVisit) {
        const promptCount = await this.emitConfirmationPrompts({ ...args, state });
        if (promptCount > 0) return state;
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
      .filter((field) => isFieldRequired(field, context))
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
    const stateId = snapshot?.activeStateIds[0];
    const state = stateId ? stateById.get(stateId) : undefined;
    if (!state) return;
    const context = isRecord(snapshot?.journeyContext) ? structuredClone(snapshot.journeyContext) : {};
    const fieldPrompt = parseFieldPromptId(args.promptId);
    if (fieldPrompt && fieldPrompt.journeyId === journey.id && fieldPrompt.stateId === state.id) {
      const field = state.collected.find((candidate) => candidate.path === fieldPrompt.path);
      if (!field) return;
      setPathValue(context, field.path, extractWidgetFieldValue(args.output));
      const finalState = await this.advanceStateMachine({
        journey,
        conversation: args.conversation,
        stateById,
        state,
        context,
        emit: (event) => this.emit(event),
      });
      const completed = finalState.type === "final"
        ? { journeyId: journey.id, stateId: finalState.id }
        : undefined;
      if (completed) {
        await this.emit({
          conversationId: args.conversation.id,
          type: "journey.completed",
          data: completed,
        });
      }
      await this.options.storage.saveSnapshot({
        conversationId: args.conversation.id,
        lifecycle: args.conversation.lifecycle,
        activeStateIds: completed ? [] : [finalState.id],
        updatedAt: new Date().toISOString(),
        ...(completed ? {} : { activeJourneyId: journey.id, journeyContext: context }),
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
      : await this.selectTransition({ journey, state, context });
    const nextState = next ? stateById.get(next.targetId) : null;
    const completed = nextState?.type === "final"
      ? { journeyId: journey.id, stateId: nextState.id }
      : undefined;
    const activeStateIds = completed ? [] : nextState ? [nextState.id] : [state.id];
    if (nextState) {
      await this.emit({
        conversationId: args.conversation.id,
        type: "journey.state.entered",
        data: { journeyId: journey.id, stateId: nextState.id },
      });
    }
    if (completed) {
      await this.emit({
        conversationId: args.conversation.id,
        type: "journey.completed",
        data: completed,
      });
    }
    await this.options.storage.saveSnapshot({
      conversationId: args.conversation.id,
      lifecycle: args.conversation.lifecycle,
      activeStateIds,
      updatedAt: new Date().toISOString(),
      ...(completed ? {} : { activeJourneyId: journey.id, journeyContext: context }),
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
    const completed = finalState.type === "final"
      ? { journeyId: route.journey.id, stateId: finalState.id }
      : undefined;
    if (completed) {
      await args.emit({
        conversationId: args.conversation.id,
        type: "journey.completed",
        data: completed,
      });
    }
    const snapshot: RuntimeSnapshot = {
      conversationId: args.conversation.id,
      lifecycle: args.conversation.lifecycle,
      activeStateIds: completed ? [] : [finalState.id],
      updatedAt: new Date().toISOString(),
      ...(completed ? {} : { activeJourneyId: route.journey.id, journeyContext: context }),
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
    knowledge: Array<KnowledgeItem>;
    visibleCustomEvents: VisibleCustomEventContext[];
    compactionSummary?: unknown;
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
    knowledge: Array<KnowledgeItem>;
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
      return structured.segments.map((segment, index) => ({
        id: `segment_${index + 1}`,
        text: segment.text,
        references: segment.knowledgeIds.map((id) => ({ type: "knowledge" as const, id })),
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

function createFieldPromptId(journeyId: string, stateId: string, path: string) {
  return `field:${journeyId}:${stateId}:${encodeURIComponent(path)}`;
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
