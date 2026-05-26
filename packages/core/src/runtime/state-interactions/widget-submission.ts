import { z } from "zod";
import type { ConversationRecord } from "../../storage.js";
import { isRecord, setPathValue } from "../context.js";
import {
  extractWidgetFieldValue,
  findJourneyStates,
  mergeActiveStates,
  parseFieldConfirmationPromptId,
  parseFieldPromptId,
  resolveWidgetPromptState,
} from "../journey-state.js";
import {
  enterState,
  exitState,
  saveStateMachineProgress,
} from "./state-lifecycle.js";
import type { StateInteractionDeps } from "./types.js";

export async function processWidgetSubmission(args: StateInteractionDeps & {
  conversation: ConversationRecord;
  promptId: string;
  output: unknown;
}) {
  if (!args.agent) return;
  const snapshot = await args.storage.getSnapshot(args.conversation.id);
  const journey = snapshot?.activeJourneyId
    ? args.agent.journeys.find((candidate) => candidate.id === snapshot.activeJourneyId)
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
    const branchStates = await args.advanceStateMachine({
      journey,
      conversation: args.conversation,
      stateById,
      state,
      context,
      emit: args.emit,
    });
    await saveStateMachineProgress({
      ...args,
      previousSnapshot: snapshot,
      journey,
      activeStates: mergeActiveStates(siblingActiveStates, branchStates),
      context,
    });
    return;
  }

  const confirmed = z.object({ confirmed: z.boolean() }).safeParse(args.output);
  if (!confirmed.success || !confirmed.data.confirmed) return;
  const toolTargetId = await args.runStateToolRuns({
    journey,
    conversation: args.conversation,
    state,
    context,
    actionType: "transition",
    confirmedPromptId: args.promptId,
    emit: args.emit,
  });
  const latestConversation = await args.requireConversationRecord(args.conversation.id);
  if (latestConversation.lifecycle !== "active") return;
  const next = toolTargetId
    ? { targetId: toolTargetId }
    : await args.selectTransition({
        journey,
        conversation: args.conversation,
        state,
        context,
        emit: args.emit,
      });
  const nextState = next ? stateById.get(next.targetId) : null;
  const branchStates = nextState ? [nextState] : [state];
  const activeStates = mergeActiveStates(siblingActiveStates, branchStates);
  if (nextState) {
    await exitState({ ...args, journey, state, context });
    const lifecycleAfterExit = await args.requireConversationRecord(args.conversation.id);
    if (lifecycleAfterExit.lifecycle !== "active") return;
    await enterState({ ...args, journey, state: nextState, context });
  }
  await saveStateMachineProgress({
    ...args,
    previousSnapshot: snapshot,
    journey,
    activeStates,
    context,
  });
}
