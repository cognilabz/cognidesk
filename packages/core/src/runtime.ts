import { randomUUID } from "node:crypto";
import { z } from "zod";
import type { CompiledAgent, CompiledJourney } from "./definition.js";
import {
  selectJourneyCandidates,
  type JourneyCandidate,
  type JourneyIndex,
} from "./journey-index.js";
import type { PrivacyHooks } from "./privacy.js";
import type { ConversationRecord, CreateConversationInput, RuntimeEventInput, StorageAdapter } from "./storage.js";
import type {
  AgentModelSet,
  KnowledgeItem,
  KnowledgeSource,
  MessageSegment,
  ModelMessage,
  RuntimeEvent,
  RuntimeSnapshot,
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

export interface RequestHandoffInput {
  conversationId: string;
  reason: string;
  summary?: string;
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
    return this.options.storage.appendEvent({
      ...event,
      id: event.id ?? randomUUID(),
      createdAt: event.createdAt ?? new Date().toISOString(),
    });
  }

  async listEvents(conversationId: string, afterOffset?: number) {
    return this.options.storage.listEvents({
      conversationId,
      ...(afterOffset !== undefined ? { afterOffset } : {}),
    });
  }

  async submitWidget(input: SubmitWidgetInput): Promise<RuntimeEvent> {
    await this.requireConversation(input.conversationId);
    return await this.emit({
      conversationId: input.conversationId,
      type: "ui.submitted",
      data: {
        promptId: input.promptId,
        widgetKind: input.widgetKind,
        output: input.output,
      },
    });
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
    const knowledge = await this.retrieveKnowledge({
      agent,
      journey: selectedJourney,
      conversationId: conversation.id,
      message: userText,
      emit,
      ...(input.signal ? { signal: input.signal } : {}),
    });
    const modelMessages = await this.redactModelMessages(conversation, this.createResponseMessages({
      agent,
      journey: selectedJourney,
      stateMachineTurn,
      userText,
      knowledge,
    }));
    const response = await models.response.generateText({
      role: "response",
      messages: modelMessages,
      ...(input.signal ? { signal: input.signal } : {}),
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
    const conversation = await this.options.storage.updateConversationLifecycle(conversationId, "closed");
    const currentSnapshot = await this.options.storage.getSnapshot(conversationId);
    await this.options.storage.saveSnapshot({
      conversationId,
      lifecycle: "closed",
      activeStateIds: currentSnapshot?.activeStateIds ?? [],
      updatedAt: new Date().toISOString(),
      ...(currentSnapshot?.activeJourneyId ? { activeJourneyId: currentSnapshot.activeJourneyId } : {}),
      ...(currentSnapshot?.journeyContext !== undefined ? { journeyContext: currentSnapshot.journeyContext } : {}),
      ...(currentSnapshot?.compactionSummary !== undefined ? { compactionSummary: currentSnapshot.compactionSummary } : {}),
      ...(currentSnapshot?.definitionHash ? { definitionHash: currentSnapshot.definitionHash } : {}),
    });
    await this.emit({
      conversationId,
      type: "conversation.closed",
      data: reason ? { reason } : {},
    });
    return conversation;
  }

  async requestHandoff(input: RequestHandoffInput) {
    const conversation = await this.options.storage.updateConversationLifecycle(input.conversationId, "handoff");
    if (!conversation) throw new Error(`Conversation '${input.conversationId}' does not exist.`);
    const currentSnapshot = await this.options.storage.getSnapshot(input.conversationId);
    await this.options.storage.saveSnapshot({
      conversationId: input.conversationId,
      lifecycle: "handoff",
      activeStateIds: currentSnapshot?.activeStateIds ?? [],
      updatedAt: new Date().toISOString(),
      ...(currentSnapshot?.activeJourneyId ? { activeJourneyId: currentSnapshot.activeJourneyId } : {}),
      ...(currentSnapshot?.journeyContext !== undefined ? { journeyContext: currentSnapshot.journeyContext } : {}),
      ...(currentSnapshot?.compactionSummary !== undefined ? { compactionSummary: currentSnapshot.compactionSummary } : {}),
      ...(currentSnapshot?.definitionHash ? { definitionHash: currentSnapshot.definitionHash } : {}),
    });
    const event = await this.emit({
      conversationId: input.conversationId,
      type: "handoff.requested",
      data: {
        reason: input.reason,
        ...(input.summary ? { summary: input.summary } : {}),
        ...(input.payload !== undefined ? { payload: input.payload } : {}),
      },
    });
    return { conversation, event };
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

    const output = await models.compaction.generateText({
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
      const output = await args.models.extraction.generateText({
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
      if (!this.stateRequirementsSatisfied(state, args.context)) return state;
      if (state.requiresVisit) return state;

      const toolTargetId = await this.runStateToolRuns({
        ...args,
        state,
        actionType: "transition",
      });
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

  private async runStateToolRuns(args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    actionType: "entry" | "exit" | "transition";
    signal?: AbortSignal;
    emit: <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
  }): Promise<string | null> {
    const toolRuns = args.state.toolRuns.filter((toolRun) => toolRun.actionType === args.actionType && !toolRun.confirm);
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
      try {
        const idempotencyKey = toolRun.tool.idempotencyKey?.({
          input: parsedInput.data,
          conversationId: args.conversation.id,
        });
        const output = await toolRun.tool.execute({
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
        if (toolRun.onSuccessId) return toolRun.onSuccessId;
      } catch (error) {
        await args.emit({
          conversationId: args.conversation.id,
          type: "tool.completed",
          data: {
            toolName: toolRun.tool.name,
            success: false,
            journeyId: args.journey.id,
            stateId: args.state.id,
            error: error instanceof Error ? error.message : "Tool execution failed.",
          },
        });
        return toolRun.onFailureId ?? null;
      }
    }
    return null;
  }

  private createResponseMessages(args: {
    agent: CompiledAgent;
    journey: CompiledJourney | null;
    stateMachineTurn: StateMachineTurnResult | null;
    userText: string;
    knowledge: Array<KnowledgeItem>;
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
      const output = await models.citationPostProcessing.generateText({
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
