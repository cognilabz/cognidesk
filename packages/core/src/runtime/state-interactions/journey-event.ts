import type { EventRoutingMode } from "../../definition.js";
import type { ConversationRecord } from "../../storage.js";
import type { RuntimeSnapshot } from "../../types.js";
import { isRecord } from "../context.js";
import {
  findJourneyStates,
  mergeActiveStates,
} from "../journey-state.js";
import {
  enterState,
  exitState,
  saveStateMachineProgress,
} from "./state-lifecycle.js";
import type { StateInteractionDeps } from "./types.js";

export async function processJourneyEvent(args: StateInteractionDeps & {
  conversation: ConversationRecord;
  eventName: string;
  routing: EventRoutingMode;
  target?: { journeyId?: string; stateId?: string };
  app: unknown;
  signal?: AbortSignal;
}): Promise<RuntimeSnapshot | null> {
  const previousSnapshot = await args.storage.getSnapshot(args.conversation.id);
  if (!args.agent) return previousSnapshot;
  const route = args.resolveJourneyEventRoute({
    agent: args.agent,
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
  const transition = await args.selectEventTransition({
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
  await exitState({
    ...args,
    journey: route.journey,
    state: route.state,
    context,
    ...(args.signal ? { signal: args.signal } : {}),
  });
  const lifecycleAfterExit = await args.requireConversationRecord(args.conversation.id);
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
  await enterState({
    ...args,
    journey: route.journey,
    state: nextState,
    context,
    ...(args.signal ? { signal: args.signal } : {}),
  });
  const finalStates = await args.advanceStateMachine({
    journey: route.journey,
    conversation: args.conversation,
    stateById,
    state: nextState,
    context,
    emit: args.emit,
    ...(args.signal ? { signal: args.signal } : {}),
  });
  return saveStateMachineProgress({
    ...args,
    previousSnapshot,
    journey: route.journey,
    activeStates: mergeActiveStates(siblingActiveStates, finalStates),
    context,
  });
}
