import type { CompiledAgent, CompiledJourney, EventRoutingMode } from "../definition.js";
import type { ConversationRecord } from "../storage.js";
import type {
  AgentModelSet,
  GuardResult,
  RuntimeSnapshot,
} from "../types.js";
import {
  emitConfirmationPrompts as emitConfirmationPromptsWithStorage,
  emitFieldConfirmationPrompts as emitFieldConfirmationPromptsWithStorage,
  emitFieldPrompts as emitFieldPromptsWithStorage,
  emitGuardDenial as emitGuardDenialWithStorage,
} from "./prompts.js";
import {
  advanceStateMachine as advanceStateMachineWithDeps,
  executeStateMachineTurn as executeStateMachineTurnWithDeps,
} from "./state-machine.js";
import {
  runStateActionRuns as runStateActionRunsWithDeps,
  runStateToolRuns as runStateToolRunsWithDeps,
} from "./state-runners.js";
import {
  processJourneyEvent as processJourneyEventWithDeps,
  processWidgetSubmission as processWidgetSubmissionWithDeps,
  validateWidgetSubmission as validateWidgetSubmissionWithDeps,
} from "./state-interactions.js";
import type {
  RuntimeEventEmitter,
  RuntimeOptions,
  StateMachineTurnResult,
} from "./types.js";
import type {
  RuntimeStateInteractionDeps,
  RuntimeStateMachineDeps,
} from "./facade-state-types.js";

export function executeRuntimeStateMachineTurn(
  deps: RuntimeStateMachineDeps,
  args: {
    journey: CompiledJourney;
    models: AgentModelSet;
    conversation: ConversationRecord;
    previousSnapshot: RuntimeSnapshot | null;
    userText: string;
    turn: unknown;
    app: unknown;
    signal?: AbortSignal;
    emit: RuntimeEventEmitter;
  },
): Promise<StateMachineTurnResult> {
  return executeStateMachineTurnWithDeps({
    ...args,
    generateTextWithTrace: deps.generateTextWithTrace,
    requireConversationRecord: deps.requireConversationRecord,
    selectTransition: deps.selectTransition,
    runStateActionRuns: deps.runStateActionRuns,
    runStateToolRuns: deps.runStateToolRuns,
    emitFieldPrompts: deps.emitFieldPrompts,
    emitFieldConfirmationPrompts: deps.emitFieldConfirmationPrompts,
    emitConfirmationPrompts: deps.emitConfirmationPrompts,
  });
}

export function advanceRuntimeStateMachine(
  deps: RuntimeStateMachineDeps,
  args: {
    journey: CompiledJourney;
    models?: AgentModelSet;
    conversation: ConversationRecord;
    stateById: Map<string, CompiledJourney["states"][number]>;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    userText?: string;
    signal?: AbortSignal;
    emit: RuntimeEventEmitter;
  },
) {
  return advanceStateMachineWithDeps({
    ...args,
    generateTextWithTrace: deps.generateTextWithTrace,
    requireConversationRecord: deps.requireConversationRecord,
    selectTransition: deps.selectTransition,
    runStateActionRuns: deps.runStateActionRuns,
    runStateToolRuns: deps.runStateToolRuns,
    emitFieldPrompts: deps.emitFieldPrompts,
    emitFieldConfirmationPrompts: deps.emitFieldConfirmationPrompts,
    emitConfirmationPrompts: deps.emitConfirmationPrompts,
  });
}

export function runRuntimeStateActionRuns(
  options: RuntimeOptions,
  args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    actionType: "entry" | "exit" | "transition";
    signal?: AbortSignal;
    emit: RuntimeEventEmitter;
  },
) {
  return runStateActionRunsWithDeps({
    ...args,
    options,
  });
}

export function runRuntimeStateToolRuns(
  deps: {
    options: RuntimeOptions;
    applyBuiltInLifecycleTool: (input: {
      toolName: string;
      input: unknown;
      conversationId: string;
      emit: RuntimeEventEmitter;
    }) => Promise<boolean>;
  },
  args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    actionType: "entry" | "exit" | "transition";
    confirmedPromptId?: string;
    signal?: AbortSignal;
    emit: RuntimeEventEmitter;
  },
): Promise<string | null> {
  return runStateToolRunsWithDeps({
    ...args,
    options: deps.options,
    applyBuiltInLifecycleTool: deps.applyBuiltInLifecycleTool,
  });
}

export function emitRuntimeGuardDenial(
  options: RuntimeOptions,
  args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state?: CompiledJourney["states"][number];
    result: GuardResult;
    emit: RuntimeEventEmitter;
  },
) {
  return emitGuardDenialWithStorage({
    ...args,
    storage: options.storage,
  });
}

export function emitRuntimeFieldPrompts(
  options: RuntimeOptions,
  args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    emit: RuntimeEventEmitter;
  },
) {
  return emitFieldPromptsWithStorage({
    ...args,
    storage: options.storage,
  });
}

export function emitRuntimeFieldConfirmationPrompts(
  options: RuntimeOptions,
  args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    emit: RuntimeEventEmitter;
  },
) {
  return emitFieldConfirmationPromptsWithStorage({
    ...args,
    storage: options.storage,
  });
}

export function emitRuntimeConfirmationPrompts(
  options: RuntimeOptions,
  args: {
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    emit: RuntimeEventEmitter;
  },
) {
  return emitConfirmationPromptsWithStorage({
    ...args,
    storage: options.storage,
  });
}

export function processRuntimeWidgetSubmission(
  deps: RuntimeStateInteractionDeps,
  args: {
    conversation: ConversationRecord;
    promptId: string;
    output: unknown;
  },
) {
  return processWidgetSubmissionWithDeps({
    ...args,
    storage: deps.options.storage,
    ...(deps.options.agent ? { agent: deps.options.agent } : {}),
    requireConversationRecord: deps.requireConversationRecord,
    runStateActionRuns: deps.runStateActionRuns,
    runStateToolRuns: deps.runStateToolRuns,
    selectTransition: deps.selectTransition,
    selectEventTransition: deps.selectEventTransition,
    resolveJourneyEventRoute: deps.resolveJourneyEventRoute,
    advanceStateMachine: deps.advanceStateMachine,
    emit: deps.emit,
  });
}

export function validateRuntimeWidgetSubmission(
  deps: RuntimeStateInteractionDeps,
  args: {
    conversation: ConversationRecord;
    promptId: string;
    widgetKind: string;
    output: unknown;
  },
) {
  return validateWidgetSubmissionWithDeps({
    ...args,
    storage: deps.options.storage,
    ...(deps.options.agent ? { agent: deps.options.agent } : {}),
    requireConversationRecord: deps.requireConversationRecord,
    runStateActionRuns: deps.runStateActionRuns,
    runStateToolRuns: deps.runStateToolRuns,
    selectTransition: deps.selectTransition,
    selectEventTransition: deps.selectEventTransition,
    resolveJourneyEventRoute: deps.resolveJourneyEventRoute,
    advanceStateMachine: deps.advanceStateMachine,
    emit: deps.emit,
  });
}

export function processRuntimeJourneyEvent(
  deps: RuntimeStateInteractionDeps,
  args: {
    conversation: ConversationRecord;
    eventName: string;
    routing: EventRoutingMode;
    target?: { journeyId?: string; stateId?: string };
    app: unknown;
    signal?: AbortSignal;
    emit: RuntimeEventEmitter;
  },
): Promise<RuntimeSnapshot | null> {
  return processJourneyEventWithDeps({
    ...args,
    storage: deps.options.storage,
    ...(deps.options.agent ? { agent: deps.options.agent } : {}),
    requireConversationRecord: deps.requireConversationRecord,
    runStateActionRuns: deps.runStateActionRuns,
    runStateToolRuns: deps.runStateToolRuns,
    selectTransition: deps.selectTransition,
    selectEventTransition: deps.selectEventTransition,
    resolveJourneyEventRoute: deps.resolveJourneyEventRoute,
    advanceStateMachine: deps.advanceStateMachine,
    emit: args.emit,
  });
}
