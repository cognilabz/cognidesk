import type { CompiledJourney } from "../../definition.js";
import type { ConversationRecord } from "../../storage.js";
import type { RuntimeSnapshot } from "../../types.js";
import { createJourneyCompletion } from "../journey-state.js";
import { createStateMachineSnapshot } from "../snapshots.js";
import type { StateInteractionDeps } from "./types.js";

export async function exitState(args: StateInteractionDeps & {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  signal?: AbortSignal;
}) {
  await args.runStateActionRuns({
    journey: args.journey,
    conversation: args.conversation,
    state: args.state,
    context: args.context,
    actionType: "exit",
    emit: args.emit,
    ...(args.signal ? { signal: args.signal } : {}),
  });
  await args.runStateToolRuns({
    journey: args.journey,
    conversation: args.conversation,
    state: args.state,
    context: args.context,
    actionType: "exit",
    emit: args.emit,
    ...(args.signal ? { signal: args.signal } : {}),
  });
}

export async function enterState(args: StateInteractionDeps & {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  signal?: AbortSignal;
}) {
  await args.emit({
    conversationId: args.conversation.id,
    type: "journey.state.entered",
    data: { journeyId: args.journey.id, stateId: args.state.id },
  });
  await args.runStateActionRuns({
    journey: args.journey,
    conversation: args.conversation,
    state: args.state,
    context: args.context,
    actionType: "entry",
    emit: args.emit,
    ...(args.signal ? { signal: args.signal } : {}),
  });
  await args.runStateToolRuns({
    journey: args.journey,
    conversation: args.conversation,
    state: args.state,
    context: args.context,
    actionType: "entry",
    emit: args.emit,
    ...(args.signal ? { signal: args.signal } : {}),
  });
}

export async function saveStateMachineProgress(args: StateInteractionDeps & {
  conversation: ConversationRecord;
  previousSnapshot: RuntimeSnapshot | null;
  journey: CompiledJourney;
  activeStates: CompiledJourney["states"];
  context: Record<string, unknown>;
}) {
  const completed = createJourneyCompletion(args.journey.id, args.activeStates);
  if (completed) {
    await args.emit({
      conversationId: args.conversation.id,
      type: "journey.completed",
      data: completed,
    });
  }
  const snapshot = createStateMachineSnapshot({
    conversation: args.conversation,
    previousSnapshot: args.previousSnapshot,
    journey: args.journey,
    activeStates: args.activeStates,
    context: args.context,
    completed,
    updatedAt: new Date().toISOString(),
  });
  await args.storage.saveSnapshot(snapshot);
  return snapshot;
}
