import { randomUUID } from "node:crypto";
import type { z } from "zod";
import type { CompiledAgent, CompiledJourney } from "./definition.js";
import {
  selectJourneyCandidates,
  type JourneyCandidate,
  type JourneyIndex,
} from "./journey-index.js";
import type { ConversationRecord, CreateConversationInput, RuntimeEventInput, StorageAdapter } from "./storage.js";
import type {
  AgentModelSet,
  KnowledgeItem,
  KnowledgeSource,
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

  async getSnapshot(conversationId: string): Promise<RuntimeSnapshot | null> {
    return this.options.storage.getSnapshot(conversationId);
  }

  async handleUserMessage<TTurn = unknown>(
    input: HandleUserMessageInput<TTurn>,
  ): Promise<HandleUserMessageResult> {
    const agent = this.requireAgent();
    const models = this.requireModels();
    const conversation = await this.requireConversation(input.conversationId);
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
      data: { text: input.text },
    });

    const previousSnapshot = await this.options.storage.getSnapshot(conversation.id);
    const selectedJourney = await this.selectJourney({
      agent,
      models,
      conversation,
      previousSnapshot,
      input,
      emit,
    });
    const knowledge = await this.retrieveKnowledge({
      agent,
      journey: selectedJourney,
      conversationId: conversation.id,
      message: input.text,
      emit,
      ...(input.signal ? { signal: input.signal } : {}),
    });
    const response = await models.response.generateText({
      role: "response",
      messages: this.createResponseMessages({
        agent,
        journey: selectedJourney,
        userText: input.text,
        knowledge,
      }),
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
        text: response.text,
        ...(response.usage ? { usage: response.usage } : {}),
      },
    });

    const snapshot = this.nextSnapshot({
      conversationId: conversation.id,
      previousSnapshot,
      selectedJourney,
    });
    await this.options.storage.saveSnapshot(snapshot);

    return {
      conversation,
      snapshot,
      events: emitted,
      text: response.text,
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

  private requireAgent() {
    if (!this.options.agent) throw new Error("Runtime requires an agent to handle messages.");
    return this.options.agent;
  }

  private requireModels() {
    if (!this.options.models) throw new Error("Runtime requires models to handle messages.");
    return this.options.models;
  }

  private async requireConversation(conversationId: string) {
    const conversation = await this.options.storage.getConversation(conversationId);
    if (!conversation) throw new Error(`Conversation '${conversationId}' does not exist.`);
    if (conversation.lifecycle !== "active") {
      throw new Error(`Conversation '${conversationId}' is '${conversation.lifecycle}' and cannot receive user messages.`);
    }
    return conversation;
  }

  private async selectJourney<TTurn>(args: {
    agent: CompiledAgent;
    models: AgentModelSet;
    conversation: ConversationRecord;
    previousSnapshot: RuntimeSnapshot | null;
    input: HandleUserMessageInput<TTurn>;
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
      message: args.input.text,
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

  private createResponseMessages(args: {
    agent: CompiledAgent;
    journey: CompiledJourney | null;
    userText: string;
    knowledge: Array<KnowledgeItem>;
  }): ModelMessage[] {
    const journeyContext = args.journey
      ? [
          `Active journey: ${args.journey.id}`,
          `Journey condition: ${args.journey.condition}`,
          args.journey.initialStateId ? `Initial state: ${args.journey.initialStateId}` : "",
        ].filter(Boolean).join("\n")
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

  private nextSnapshot(args: {
    conversationId: string;
    previousSnapshot: RuntimeSnapshot | null;
    selectedJourney: CompiledJourney | null;
  }): RuntimeSnapshot {
    return {
      conversationId: args.conversationId,
      lifecycle: "active",
      activeStateIds: args.selectedJourney?.initialStateId ? [args.selectedJourney.initialStateId] : [],
      updatedAt: new Date().toISOString(),
      ...(args.selectedJourney ? { activeJourneyId: args.selectedJourney.id } : {}),
      ...(args.previousSnapshot?.journeyContext !== undefined ? { journeyContext: args.previousSnapshot.journeyContext } : {}),
      ...(args.previousSnapshot?.compactionSummary !== undefined ? { compactionSummary: args.previousSnapshot.compactionSummary } : {}),
      ...(this.options.journeyIndex ? { definitionHash: this.options.journeyIndex.definitionHash } : {}),
    };
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
