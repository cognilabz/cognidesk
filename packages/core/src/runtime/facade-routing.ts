import type { CompiledAgent, CompiledJourney, EventRoutingMode } from "../definition.js";
import type { TraceEvent } from "../observability.js";
import type { ConversationRecord } from "../storage.js";
import type {
  AgentModelSet,
  GuardResult,
  ModelAdapter,
  RuntimeSnapshot,
  TextGenerationInput,
  TextGenerationOutput,
} from "../types.js";
import {
  evaluateDelegationCompletion as evaluateDelegationCompletionWithDeps,
  retrieveKnowledge as retrieveKnowledgeWithDeps,
  selectJourney as selectJourneyWithDeps,
} from "./journey-selection.js";
import {
  resolveJourneyEventRoute as resolveJourneyEventRouteWithDeps,
  selectEventTransition as selectEventTransitionWithDeps,
  selectTransition as selectTransitionWithDeps,
} from "./transitions.js";
import type {
  ConversationMessage,
  HandleUserMessageInput,
  RetrievedKnowledgeItem,
  RuntimeEventEmitter,
  RuntimeOptions,
  StateMachineTurnResult,
} from "./types.js";

export function selectRuntimeJourney<TTurn>(
  deps: {
    options: RuntimeOptions;
    generateTextWithTrace: (input: {
      conversationId: string;
      model: ModelAdapter;
      input: TextGenerationInput;
    }) => Promise<TextGenerationOutput>;
    emitGuardDenial: (input: {
      journey: CompiledJourney;
      conversation: ConversationRecord;
      state?: CompiledJourney["states"][number];
      result: GuardResult;
      emit: RuntimeEventEmitter;
    }) => Promise<void>;
  },
  args: {
    agent: CompiledAgent;
    models: AgentModelSet;
    conversation: ConversationRecord;
    previousSnapshot: RuntimeSnapshot | null;
    history: ConversationMessage[];
    input: HandleUserMessageInput<TTurn>;
    userText: string;
    emit: RuntimeEventEmitter;
  },
) {
  return selectJourneyWithDeps({
    ...args,
    options: deps.options,
    generateTextWithTrace: deps.generateTextWithTrace,
    emitGuardDenial: deps.emitGuardDenial,
  });
}

export function retrieveRuntimeKnowledge(
  deps: {
    options: RuntimeOptions;
    trace: (event: TraceEvent) => Promise<void>;
  },
  args: {
    agent: CompiledAgent;
    journey: CompiledJourney | null;
    stateMachineTurn: StateMachineTurnResult | null;
    conversationId: string;
    message: string;
    signal?: AbortSignal;
    emit: RuntimeEventEmitter;
  },
): Promise<RetrievedKnowledgeItem[]> {
  return retrieveKnowledgeWithDeps({
    ...args,
    options: deps.options,
    trace: deps.trace,
  });
}

export function evaluateRuntimeDelegationCompletion(
    generateTextWithTrace: (input: {
      conversationId: string;
      model: ModelAdapter;
      input: TextGenerationInput;
    }) => Promise<TextGenerationOutput>,
  args: {
    journey: CompiledJourney | null;
    models: AgentModelSet;
    conversation: ConversationRecord;
    history: ConversationMessage[];
    signal?: AbortSignal;
    emit: RuntimeEventEmitter;
  },
): Promise<{ journeyId: string; reason?: string } | null> {
  return evaluateDelegationCompletionWithDeps({
    ...args,
    generateTextWithTrace,
  });
}

export function selectRuntimeTransition(
  deps: {
    options: RuntimeOptions;
    generateTextWithTrace: (input: {
      conversationId: string;
      model: ModelAdapter;
      input: TextGenerationInput;
    }) => Promise<TextGenerationOutput>;
    emitGuardDenial: (input: {
      journey: CompiledJourney;
      conversation: ConversationRecord;
      state?: CompiledJourney["states"][number];
      result: GuardResult;
      emit: RuntimeEventEmitter;
    }) => Promise<void>;
  },
  args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    models?: AgentModelSet;
    userText?: string;
    signal?: AbortSignal;
    emit: RuntimeEventEmitter;
  },
) {
  return selectTransitionWithDeps({
    ...args,
    options: deps.options,
    generateTextWithTrace: deps.generateTextWithTrace,
    emitGuardDenial: deps.emitGuardDenial,
  });
}

export function resolveRuntimeJourneyEventRoute(args: {
  agent: CompiledAgent;
  previousSnapshot: RuntimeSnapshot | null;
  eventName: string;
  routing: EventRoutingMode;
  target?: { journeyId?: string; stateId?: string };
}) {
  return resolveJourneyEventRouteWithDeps(args);
}

export function selectRuntimeEventTransition(
  emitGuardDenial: (input: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state?: CompiledJourney["states"][number];
    result: GuardResult;
    emit: RuntimeEventEmitter;
  }) => Promise<void>,
  args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    eventName: string;
    context: Record<string, unknown>;
    app: unknown;
    emit: RuntimeEventEmitter;
  },
) {
  return selectEventTransitionWithDeps({
    ...args,
    emitGuardDenial,
  });
}
