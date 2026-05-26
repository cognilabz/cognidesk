import type { CompiledJourney } from "../definition.js";
import type { ConversationRecord } from "../storage.js";
import type {
  AgentModelSet,
  RuntimeSnapshot,
} from "../types.js";
import { createJourneyCompletion } from "./journey-state.js";
import type { StateMachineTurnResult } from "./types.js";
import {
  resolveInitialJourneyContext,
  resolveJourneyEntryState,
} from "./state-machine/context.js";
import { enterStateTree, stateRequirementsSatisfied } from "./state-machine/entry.js";
import { applyStateExtraction } from "./state-machine/extraction.js";
import type {
  RuntimeEmit,
  StateMachineDeps,
} from "./state-machine/types.js";

export async function executeStateMachineTurn(args: StateMachineDeps & {
  journey: CompiledJourney;
  models: AgentModelSet;
  conversation: ConversationRecord;
  previousSnapshot: RuntimeSnapshot | null;
  userText: string;
  turn: unknown;
  app: unknown;
  signal?: AbortSignal;
  emit: RuntimeEmit;
}): Promise<StateMachineTurnResult> {
  const stateById = new Map(args.journey.states.map((state) => [state.id, state]));
  const sameJourney = args.previousSnapshot?.activeJourneyId === args.journey.id;
  const context = await resolveInitialJourneyContext(args);
  const activeStates = sameJourney
    ? (args.previousSnapshot?.activeStateIds ?? [])
      .map((stateId) => stateById.get(stateId))
      .filter((state): state is CompiledJourney["states"][number] => Boolean(state))
    : args.journey.initialStateId
      ? await enterStateTree({
          ...args,
          stateById,
          state: await resolveJourneyEntryState({
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
    const activeState = await applyStateExtraction({
      ...args,
      state,
      context,
    });
    nextActiveStates.push(...await advanceStateMachine({
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

export async function advanceStateMachine(args: StateMachineDeps & {
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
  let state = args.state;
  const visited = new Set<string>();
  while (!visited.has(state.id)) {
    visited.add(state.id);
    const lifecycle = await args.requireConversationRecord(args.conversation.id);
    if (lifecycle.lifecycle !== "active") return [state];
    if (!stateRequirementsSatisfied(state, args.context)) {
      await args.emitFieldPrompts({ ...args, state });
      return [state];
    }
    const fieldConfirmationCount = await args.emitFieldConfirmationPrompts({ ...args, state });
    if (fieldConfirmationCount > 0) return [state];
    if (state.requiresVisit) {
      const promptCount = await args.emitConfirmationPrompts({ ...args, state });
      if (promptCount > 0) return [state];
    }

    await args.runStateActionRuns({ ...args, state, actionType: "transition" });
    const toolTargetId = await args.runStateToolRuns({ ...args, state, actionType: "transition" });
    const latestConversation = await args.requireConversationRecord(args.conversation.id);
    if (latestConversation.lifecycle !== "active") return [state];
    const transition = toolTargetId
      ? { targetId: toolTargetId }
      : await args.selectTransition({
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
    await args.runStateActionRuns({ ...args, state, actionType: "exit" });
    await args.runStateToolRuns({ ...args, state, actionType: "exit" });
    const lifecycleAfterExit = await args.requireConversationRecord(args.conversation.id);
    if (lifecycleAfterExit.lifecycle !== "active") return [state];
    const enteredStates = await enterStateTree({
      ...args,
      state: nextState,
      emitSelf: true,
    });
    if (enteredStates.length !== 1) return enteredStates;
    state = enteredStates[0] ?? nextState;
  }
  return [state];
}
