import { randomUUID } from "node:crypto";
import { z } from "zod";
import type { CompiledAgent, CompiledJourney, EventRoutingMode, JourneyEventDefinition } from "./definition.js";
import {
  selectJourneyCandidates,
  type JourneyCandidate,
} from "./journey-index.js";
import type { TraceEvent } from "./observability.js";
import { applyModelPromptProfiles } from "./runtime/prompt-profiles.js";
import { replayRuntimeEvents } from "./runtime/replay.js";
import type {
  ActiveTurn,
  CompactConversationInput,
  CompactConversationResult,
  ConversationMessage,
  CreateRuntimeConversationInput,
  EmitCustomEventInput,
  EmitGeneratedPreambleInput,
  EmitGeneratedPreambleResult,
  EmitIntermediateMessageInput,
  EmitJourneyEventInput,
  EmitJourneyEventResult,
  HandleUserMessageInput,
  HandleUserMessageResult,
  RankedJourneyCandidate,
  ReplayConversationInput,
  ReplayConversationResult,
  RequestHandoffInput,
  ResumeConversationInput,
  RetrievedKnowledgeItem,
  RuntimeOptions,
  StateMachineTurnResult,
  SubmitWidgetInput,
} from "./runtime/types.js";
import {
  citationPostProcessingSchema,
  conversationCompactionSummarySchema,
  delegationCompletionSchema,
  journeyMatchSchema,
  stateExtractionSchema,
  transitionMatchSchema,
  type ConversationCompactionSummary,
} from "./runtime/schemas.js";
import {
  createFieldConfirmationPromptId,
  createFieldPromptId,
  createGuardPromptId,
  createJourneyCompletion,
  createToolConfirmationPromptId,
  extractWidgetFieldValue,
  findJourneyState,
  findJourneyStates,
  hasEventTransition,
  isFieldRequired,
  mergeActiveStates,
  parseFieldConfirmationPromptId,
  parseFieldPromptId,
  parseToolConfirmationPromptId,
  resolveActiveStates,
  resolveWidgetPromptState,
} from "./runtime/journey-state.js";
import {
  clampConfidence,
  createGeneratedPreambleMessages,
  normalizeConfidence,
  normalizeGeneratedPreamble,
  renderConversationTranscript,
  renderEventsForCompaction,
  renderJourneyCandidateForMatcher,
  renderStateInstructionStack,
} from "./runtime/rendering.js";
import { listConversationMessages, listVisibleCustomEventContext } from "./runtime/history.js";
import { createResponseMessages } from "./runtime/response-messages.js";
import { createLifecycleSnapshot, createNextSnapshot, createStateMachineSnapshot } from "./runtime/snapshots.js";
import {
  executeToolWithRetry,
  runStateActionRuns as runStateActionRunsWithDeps,
  runStateToolRuns as runStateToolRunsWithDeps,
} from "./runtime/state-runners.js";
import {
  getPathValue,
  guardAllows,
  hasUsableValue,
  isRecord,
  isStructuredGuardDenial,
  selectContextFields,
  setPathValue,
} from "./runtime/context.js";
import {
  createToolResultMessage,
  parseKnowledgeQuery,
  toModelToolDefinition,
  uniqueKnowledgeSources,
  uniqueTools,
} from "./runtime/tools.js";
import { AbortError, isAbortLikeError } from "./runtime/errors.js";
import type { ConversationRecord, RuntimeEventInput } from "./storage.js";
import type {
  AgentModelSet,
  AnyTool,
  CustomRuntimeEventDefinition,
  GuardResult,
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

export { conversationCompactionSummarySchema } from "./runtime/schemas.js";
export type { ConversationCompactionSummary } from "./runtime/schemas.js";
export type {
  CompactConversationInput,
  CompactConversationResult,
  CreateRuntimeConversationInput,
  EmitCustomEventInput,
  EmitGeneratedPreambleInput,
  EmitGeneratedPreambleResult,
  EmitIntermediateMessageInput,
  EmitJourneyEventInput,
  EmitJourneyEventResult,
  HandleUserMessageInput,
  HandleUserMessageResult,
  ReplayConversationInput,
  ReplayConversationResult,
  RequestHandoffInput,
  ResumeConversationInput,
  RuntimeOptions,
  SubmitWidgetInput,
  ReplayedMessage,
  ReplayedPrompt,
} from "./runtime/types.js";

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
    if (this.options.streaming?.syntheticDeltas && input.text.length > 0) {
      const delta = await this.emit({
        conversationId: input.conversationId,
        type: "message.delta",
        data: { textDelta: input.text },
        ...(input.traceId ? { traceId: input.traceId } : {}),
      });
      events.push(delta);
    }
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
    const history = await listConversationMessages(this.options.storage, conversation.id);
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
        promptProfileRole: "generatedPreamble",
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

      const history = await listConversationMessages(this.options.storage, conversation.id);
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
      const visibleCustomEvents = await listVisibleCustomEventContext(this.options.storage, agent, conversation.id);
      const modelMessages = await this.redactModelMessages(conversation, createResponseMessages({
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
      if (this.options.streaming?.syntheticDeltas && assistantText.length > 0) {
        await emit({
          conversationId: conversation.id,
          type: "message.delta",
          data: { textDelta: assistantText },
        });
      }
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

      const snapshot = createNextSnapshot({
        conversationId: conversation.id,
        previousSnapshot,
        selectedJourney,
        stateMachineTurn,
        delegationCompletion,
        ...(this.options.journeyIndex ? { definitionHash: this.options.journeyIndex.definitionHash } : {}),
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
      const output = await input.model.generateText({
        ...input.input,
        messages: await applyModelPromptProfiles({
          model: input.model,
          ...(this.options.models ? { models: this.options.models } : {}),
          ...(this.options.promptProfile ? { runtimeProfile: this.options.promptProfile } : {}),
          role: input.input.promptProfileRole ?? input.input.role,
          messages: input.input.messages,
        }),
      });
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
        const output = await executeToolWithRetry({
          options: this.options,
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
    await this.options.storage.saveSnapshot(createLifecycleSnapshot({
      conversationId,
      lifecycle,
      updatedAt,
      currentSnapshot,
    }));
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
            state: await this.resolveJourneyEntryState({
              ...args,
              stateById,
              context,
            }),
            context,
            emitSelf: true,
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

  private async resolveJourneyEntryState(args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    previousSnapshot: RuntimeSnapshot | null;
    stateById: Map<string, CompiledJourney["states"][number]>;
    context: Record<string, unknown>;
    turn: unknown;
    app: unknown;
  }) {
    const entries = [...args.journey.alternateEntries]
      .sort((left, right) => (right.priority ?? 0) - (left.priority ?? 0));
    for (const entry of entries) {
      const state = args.stateById.get(entry.stateId);
      if (!state || !this.stateRequirementsSatisfied(state, args.context)) continue;
      const matches = await entry.when({
        app: args.app,
        conversation: args.conversation,
        turn: args.turn,
        context: args.context,
        journeyId: args.journey.id,
        ...(args.previousSnapshot?.activeJourneyId ? { activeJourneyId: args.previousSnapshot.activeJourneyId } : {}),
      });
      if (matches) return state;
    }
    return args.journey.initialStateId ? args.stateById.get(args.journey.initialStateId) : undefined;
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
    return runStateActionRunsWithDeps({
      ...args,
      options: this.options,
      trace: (event) => this.trace(event),
    });
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
    return runStateToolRunsWithDeps({
      ...args,
      options: this.options,
      trace: (event) => this.trace(event),
      applyBuiltInLifecycleTool: (input) => this.applyBuiltInLifecycleTool(input),
    });
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
      await this.options.storage.saveSnapshot(createStateMachineSnapshot({
        conversation: args.conversation,
        previousSnapshot: snapshot,
        journey,
        activeStates,
        context,
        completed,
        updatedAt: new Date().toISOString(),
      }));
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
    await this.options.storage.saveSnapshot(createStateMachineSnapshot({
      conversation: args.conversation,
      previousSnapshot: snapshot,
      journey,
      activeStates,
      context,
      completed,
      updatedAt: new Date().toISOString(),
    }));
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
    const snapshot = createStateMachineSnapshot({
      conversation: args.conversation,
      previousSnapshot,
      journey: route.journey,
      activeStates,
      context,
      completed,
      updatedAt: new Date().toISOString(),
    });
    await this.options.storage.saveSnapshot(snapshot);
    return snapshot;
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
