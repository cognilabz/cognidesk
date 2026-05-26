import type { CompiledJourney } from "../../definition.js";
import type { ConversationRecord } from "../../storage.js";
import type { RuntimeSnapshot } from "../../types.js";
import {
  isRecord,
  selectContextFields,
} from "../context.js";
import { stateRequirementsSatisfied } from "./entry.js";

export async function resolveInitialJourneyContext(args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  previousSnapshot: RuntimeSnapshot | null;
  turn: unknown;
  app: unknown;
}): Promise<Record<string, unknown>> {
  if (args.previousSnapshot?.activeJourneyId === args.journey.id && isRecord(args.previousSnapshot.journeyContext)) {
    return structuredClone(args.previousSnapshot.journeyContext);
  }

  const policy = args.journey.contextReuse;
  if (!policy) return {};
  const stored = args.previousSnapshot?.journeyContexts?.find((record) => record.journeyId === args.journey.id);
  if (!isRecord(stored?.context)) return {};
  const previousContext = structuredClone(stored.context);
  const allowed = await policy.when({
    app: args.app,
    conversation: args.conversation,
    turn: args.turn,
    journeyId: args.journey.id,
    previousContext,
    ...(args.previousSnapshot?.activeJourneyId ? { activeJourneyId: args.previousSnapshot.activeJourneyId } : {}),
  });
  if (!allowed) return {};
  return policy.fields?.length
    ? selectContextFields(previousContext, policy.fields)
    : previousContext;
}

export async function resolveJourneyEntryState(args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  previousSnapshot: RuntimeSnapshot | null;
  stateById: Map<string, CompiledJourney["states"][number]>;
  context: Record<string, unknown>;
  turn: unknown;
  app: unknown;
}) {
  const entries = [...args.journey.alternateEntries]
    .sort((left, right) => (right.priority ?? 0) - (left.priority ?? 0));
  for (const entry of entries) {
    const state = args.stateById.get(entry.stateId);
    if (!state || !stateRequirementsSatisfied(state, args.context)) continue;
    const matches = await entry.when({
      app: args.app,
      conversation: args.conversation,
      turn: args.turn,
      context: args.context,
      journeyId: args.journey.id,
      ...(args.previousSnapshot?.activeJourneyId ? { activeJourneyId: args.previousSnapshot.activeJourneyId } : {}),
    });
    if (matches) return state;
  }
  return args.journey.initialStateId ? args.stateById.get(args.journey.initialStateId) : undefined;
}
