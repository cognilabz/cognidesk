import type { CompiledAgent, CompiledJourney, EventRoutingMode } from "../definition.js";
import type { ConversationRecord, RuntimeEventInput } from "../storage.js";
import type {
  AgentModelSet,
  GuardResult,
  RuntimeEvent,
  RuntimeSnapshot,
} from "../types.js";
import {
  advanceRuntimeStateMachine,
  emitRuntimeConfirmationPrompts,
  emitRuntimeFieldConfirmationPrompts,
  emitRuntimeFieldPrompts,
  emitRuntimeGuardDenial,
  executeRuntimeStateMachineTurn,
  processRuntimeJourneyEvent,
  processRuntimeWidgetSubmission,
  runRuntimeStateActionRuns,
  runRuntimeStateToolRuns,
  validateRuntimeWidgetSubmission,
} from "./facade-state.js";
import type { RuntimeCore } from "./kernel-core.js";
import type { RuntimeRouting } from "./kernel-routing.js";

export function createRuntimeState(
  options: { storage: import("../storage.js").StorageAdapter; agent?: CompiledAgent },
  core: RuntimeCore,
  routing: RuntimeRouting,
) {
  const state = {
    executeStateMachineTurn(args: {
      journey: CompiledJourney;
      models: AgentModelSet;
      conversation: ConversationRecord;
      previousSnapshot: RuntimeSnapshot | null;
      userText: string;
      turn: unknown;
      app: unknown;
      signal?: AbortSignal;
      emit: RuntimeEmit;
    }) {
      return executeRuntimeStateMachineTurn(state.stateMachineDeps(), args);
    },
    advanceStateMachine(args: {
      journey: CompiledJourney;
      models?: AgentModelSet;
      conversation: ConversationRecord;
      stateById: Map<string, CompiledJourney["states"][number]>;
      state: CompiledJourney["states"][number];
      context: Record<string, unknown>;
      userText?: string;
      signal?: AbortSignal;
      emit: RuntimeEmit;
    }) {
      return advanceRuntimeStateMachine(state.stateMachineDeps(), args);
    },
    selectTransition: routing.selectTransition,
    selectEventTransition: routing.selectEventTransition,
    resolveJourneyEventRoute: routing.resolveJourneyEventRoute,
    runStateActionRuns(args: StateRunArgs) {
      return runRuntimeStateActionRuns(options, args);
    },
    runStateToolRuns(args: StateRunArgs & { confirmedPromptId?: string }): Promise<string | null> {
      return runRuntimeStateToolRuns({
        options,
        applyBuiltInLifecycleTool: core.applyBuiltInLifecycleTool,
      }, args);
    },
    emitGuardDenial(args: StateGuardDenialArgs) {
      return emitRuntimeGuardDenial(options, args);
    },
    emitFieldPrompts(args: StatePromptArgs) {
      return emitRuntimeFieldPrompts(options, args);
    },
    emitFieldConfirmationPrompts(args: StatePromptArgs) {
      return emitRuntimeFieldConfirmationPrompts(options, args);
    },
    emitConfirmationPrompts(args: StatePromptArgs) {
      return emitRuntimeConfirmationPrompts(options, args);
    },
    processWidgetSubmission(args: {
      conversation: ConversationRecord;
      promptId: string;
      output: unknown;
    }) {
      return processRuntimeWidgetSubmission(state.stateInteractionDeps(), args);
    },
    validateWidgetSubmission(args: {
      conversation: ConversationRecord;
      promptId: string;
      widgetKind: string;
      output: unknown;
    }) {
      return validateRuntimeWidgetSubmission(state.stateInteractionDeps(), args);
    },
    processJourneyEvent(args: {
      conversation: ConversationRecord;
      eventName: string;
      routing: EventRoutingMode;
      target?: { journeyId?: string; stateId?: string };
      app: unknown;
      signal?: AbortSignal;
      emit: RuntimeEmit;
    }): Promise<RuntimeSnapshot | null> {
      return processRuntimeJourneyEvent(state.stateInteractionDeps(), args);
    },
    stateMachineDeps() {
      return {
        generateTextWithTrace: core.generateTextWithTrace,
        requireConversationRecord: core.requireConversationRecord,
        selectTransition: state.selectTransition,
        runStateActionRuns: state.runStateActionRuns,
        runStateToolRuns: state.runStateToolRuns,
        emitFieldPrompts: state.emitFieldPrompts,
        emitFieldConfirmationPrompts: state.emitFieldConfirmationPrompts,
        emitConfirmationPrompts: state.emitConfirmationPrompts,
      };
    },
    stateInteractionDeps() {
      return {
        ...state.stateMachineDeps(),
        options,
        emit: core.emit,
        selectEventTransition: state.selectEventTransition,
        resolveJourneyEventRoute: state.resolveJourneyEventRoute,
        advanceStateMachine: state.advanceStateMachine,
      };
    },
  };
  return state;
}

type RuntimeEmit = <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;
type StateRunArgs = {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  actionType: "entry" | "exit" | "transition";
  signal?: AbortSignal;
  emit: RuntimeEmit;
};
type StatePromptArgs = {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  emit: RuntimeEmit;
};
type StateGuardDenialArgs = {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state?: CompiledJourney["states"][number];
  result: GuardResult;
  emit: RuntimeEmit;
};

export type RuntimeState = ReturnType<typeof createRuntimeState>;
