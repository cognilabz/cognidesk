import type { CompiledJourney } from "../definition.js";
import type { ConversationRecord } from "../storage.js";
import type { RuntimeSnapshot } from "../types.js";
import {
  appendJourneyContext,
  appendJourneySummary,
  createJourneyContextRecord,
  createJourneySummary,
} from "./journey-state.js";
import type { StateMachineTurnResult } from "./types.js";

export function createLifecycleSnapshot(args: {
  conversationId: string;
  lifecycle: RuntimeSnapshot["lifecycle"];
  updatedAt: string;
  currentSnapshot: RuntimeSnapshot | null;
}): RuntimeSnapshot {
  return {
    conversationId: args.conversationId,
    lifecycle: args.lifecycle,
    activeStateIds: args.currentSnapshot?.activeStateIds ?? [],
    updatedAt: args.updatedAt,
    ...(args.currentSnapshot?.activeJourneyId ? { activeJourneyId: args.currentSnapshot.activeJourneyId } : {}),
    ...(args.currentSnapshot?.journeyContext !== undefined ? { journeyContext: args.currentSnapshot.journeyContext } : {}),
    ...(args.currentSnapshot?.journeyContexts ? { journeyContexts: args.currentSnapshot.journeyContexts } : {}),
    ...(args.currentSnapshot?.journeySummaries ? { journeySummaries: args.currentSnapshot.journeySummaries } : {}),
    ...(args.currentSnapshot?.compactionSummary !== undefined ? { compactionSummary: args.currentSnapshot.compactionSummary } : {}),
    ...(args.currentSnapshot?.definitionHash ? { definitionHash: args.currentSnapshot.definitionHash } : {}),
  };
}

export function createNextSnapshot(args: {
  conversationId: string;
  previousSnapshot: RuntimeSnapshot | null;
  selectedJourney: CompiledJourney | null;
  stateMachineTurn: StateMachineTurnResult | null;
  delegationCompletion: { journeyId: string; reason?: string } | null;
  definitionHash?: string;
}): RuntimeSnapshot {
  const journeyCompleted = Boolean(args.stateMachineTurn?.completed)
    || Boolean(args.delegationCompletion);
  const journeySummaries = appendJourneySummary(
    args.previousSnapshot?.journeySummaries ?? [],
    args.selectedJourney && journeyCompleted
      ? createJourneySummary({
          journey: args.selectedJourney,
          completedAt: new Date().toISOString(),
          stateMachineTurn: args.stateMachineTurn,
          delegationCompletion: args.delegationCompletion,
        })
      : null,
  );
  const journeyContexts = appendJourneyContext(
    args.previousSnapshot?.journeyContexts ?? [],
    args.selectedJourney && args.stateMachineTurn?.completed
      ? createJourneyContextRecord({
          journeyId: args.selectedJourney.id,
          completed: args.stateMachineTurn.completed,
          context: args.stateMachineTurn.journeyContext,
          updatedAt: new Date().toISOString(),
        })
      : null,
  );
  return {
    conversationId: args.conversationId,
    lifecycle: "active",
    activeStateIds: journeyCompleted ? [] : args.stateMachineTurn?.activeStateIds
      ?? (args.selectedJourney?.initialStateId ? [args.selectedJourney.initialStateId] : []),
    updatedAt: new Date().toISOString(),
    ...(!journeyCompleted && args.selectedJourney ? { activeJourneyId: args.selectedJourney.id } : {}),
    ...(!journeyCompleted && args.stateMachineTurn
      ? { journeyContext: args.stateMachineTurn.journeyContext }
      : !journeyCompleted && args.previousSnapshot?.journeyContext !== undefined ? { journeyContext: args.previousSnapshot.journeyContext } : {}),
    ...(journeyContexts.length > 0 ? { journeyContexts } : {}),
    ...(journeySummaries.length > 0 ? { journeySummaries } : {}),
    ...(args.previousSnapshot?.compactionSummary !== undefined ? { compactionSummary: args.previousSnapshot.compactionSummary } : {}),
    ...(args.definitionHash ? { definitionHash: args.definitionHash } : {}),
  };
}

export function createStateMachineSnapshot(args: {
  conversation: ConversationRecord;
  previousSnapshot: RuntimeSnapshot | null;
  journey: CompiledJourney;
  activeStates: CompiledJourney["states"];
  context: Record<string, unknown>;
  completed: NonNullable<StateMachineTurnResult["completed"]> | undefined;
  updatedAt: string;
}): RuntimeSnapshot {
  const journeySummaries = appendJourneySummary(
    args.previousSnapshot?.journeySummaries ?? [],
    args.completed ? createJourneySummary({
      journey: args.journey,
      completedAt: args.updatedAt,
      stateMachineTurn: { activeStateIds: [], journeyContext: args.context, completed: args.completed },
      delegationCompletion: null,
    }) : null,
  );
  const journeyContexts = appendJourneyContext(
    args.previousSnapshot?.journeyContexts ?? [],
    args.completed ? createJourneyContextRecord({
      journeyId: args.journey.id,
      completed: args.completed,
      context: args.context,
      updatedAt: args.updatedAt,
    }) : null,
  );
  return {
    conversationId: args.conversation.id,
    lifecycle: args.conversation.lifecycle,
    activeStateIds: args.completed ? [] : args.activeStates.map((activeState) => activeState.id),
    updatedAt: args.updatedAt,
    ...(args.completed ? {} : { activeJourneyId: args.journey.id, journeyContext: args.context }),
    ...(journeyContexts.length > 0 ? { journeyContexts } : {}),
    ...(journeySummaries.length > 0 ? { journeySummaries } : {}),
    ...(args.previousSnapshot?.compactionSummary !== undefined ? { compactionSummary: args.previousSnapshot.compactionSummary } : {}),
    ...(args.previousSnapshot?.definitionHash ? { definitionHash: args.previousSnapshot.definitionHash } : {}),
  };
}
