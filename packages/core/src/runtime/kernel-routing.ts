import type { CompiledAgent, CompiledJourney, EventRoutingMode } from "../definition.js";
import type { ConversationRecord, RuntimeEventInput } from "../storage.js";
import type {
  AgentModelSet,
  GuardResult,
  RuntimeEvent,
  RuntimeSnapshot,
} from "../types.js";
import {
  evaluateRuntimeDelegationCompletion,
  resolveRuntimeJourneyEventRoute,
  retrieveRuntimeKnowledge,
  selectRuntimeEventTransition,
  selectRuntimeJourney,
  selectRuntimeTransition,
} from "./facade-routing.js";
import type { RuntimeCore, RuntimeConversationMessage } from "./kernel-core.js";
import type {
  HandleUserMessageInput,
  RuntimeOptions,
  StateMachineTurnResult,
} from "./types.js";

export function createRuntimeRouting(
  options: RuntimeOptions,
  core: RuntimeCore,
  getState: () => { emitGuardDenial: RuntimeEmitGuardDenial },
) {
  return {
    selectJourney<TTurn>(args: {
      agent: CompiledAgent;
      models: AgentModelSet;
      conversation: ConversationRecord;
      previousSnapshot: RuntimeSnapshot | null;
      history: RuntimeConversationMessage[];
      input: HandleUserMessageInput<TTurn>;
      userText: string;
      emit: RuntimeEmit;
    }) {
      return selectRuntimeJourney({
        options,
        generateTextWithTrace: core.generateTextWithTrace,
        emitGuardDenial: (input) => getState().emitGuardDenial(input),
      }, args);
    },
    retrieveKnowledge(args: {
      agent: CompiledAgent;
      journey: CompiledJourney | null;
      stateMachineTurn: StateMachineTurnResult | null;
      conversationId: string;
      message: string;
      signal?: AbortSignal;
      emit: RuntimeEmit;
    }) {
      return retrieveRuntimeKnowledge({ options, trace: core.trace }, args);
    },
    evaluateDelegationCompletion(args: {
      journey: CompiledJourney | null;
      models: AgentModelSet;
      conversation: ConversationRecord;
      history: RuntimeConversationMessage[];
      signal?: AbortSignal;
      emit: RuntimeEmit;
    }) {
      return evaluateRuntimeDelegationCompletion(core.generateTextWithTrace, args);
    },
    selectTransition(args: {
      journey: CompiledJourney;
      conversation: ConversationRecord;
      state: CompiledJourney["states"][number];
      context: Record<string, unknown>;
      models?: AgentModelSet;
      userText?: string;
      signal?: AbortSignal;
      emit: RuntimeEmit;
    }) {
      return selectRuntimeTransition({
        options,
        generateTextWithTrace: core.generateTextWithTrace,
        emitGuardDenial: (input) => getState().emitGuardDenial(input),
      }, args);
    },
    resolveJourneyEventRoute(args: {
      agent: CompiledAgent;
      previousSnapshot: RuntimeSnapshot | null;
      eventName: string;
      routing: EventRoutingMode;
      target?: { journeyId?: string; stateId?: string };
    }) {
      return resolveRuntimeJourneyEventRoute(args);
    },
    selectEventTransition(args: {
      journey: CompiledJourney;
      conversation: ConversationRecord;
      state: CompiledJourney["states"][number];
      eventName: string;
      context: Record<string, unknown>;
      app: unknown;
      emit: RuntimeEmit;
    }) {
      return selectRuntimeEventTransition((input) => getState().emitGuardDenial(input), args);
    },
  };
}

type RuntimeEmit = <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
type RuntimeEmitGuardDenial = (args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state?: CompiledJourney["states"][number];
  result: GuardResult;
  emit: RuntimeEmit;
}) => Promise<void>;

export type RuntimeRouting = ReturnType<typeof createRuntimeRouting>;
