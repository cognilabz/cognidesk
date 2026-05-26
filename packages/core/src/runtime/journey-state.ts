import type { CompiledJourney } from "../definition.js";
import type { JourneyContextRecord, JourneySummary, RuntimeSnapshot } from "../types.js";
import { getPathValue, hasUsableValue, isRecord, setPathValue } from "./context.js";
import type { StateMachineTurnResult } from "./types.js";

export function findJourneyState(journey: CompiledJourney, stateId: string | undefined) {
  if (!stateId) return undefined;
  return journey.states.find((state) => state.id === stateId);
}

export function findJourneyStates(journey: CompiledJourney, stateIds: string[]) {
  const stateById = new Map(journey.states.map((state) => [state.id, state]));
  return stateIds
    .map((stateId) => stateById.get(stateId))
    .filter((state): state is CompiledJourney["states"][number] => Boolean(state));
}

export function mergeActiveStates(...stateGroups: CompiledJourney["states"][]) {
  const byId = new Map<string, CompiledJourney["states"][number]>();
  for (const state of stateGroups.flat()) byId.set(state.id, state);
  return [...byId.values()];
}

export function resolveWidgetPromptState(
  journey: CompiledJourney,
  snapshot: RuntimeSnapshot | null,
  promptId: string,
) {
  const activeStateIds = new Set(snapshot?.activeStateIds ?? []);
  const fieldPrompt = parseFieldPromptId(promptId);
  if (fieldPrompt && fieldPrompt.journeyId === journey.id && activeStateIds.has(fieldPrompt.stateId)) {
    return findJourneyState(journey, fieldPrompt.stateId);
  }
  const fieldConfirmationPrompt = parseFieldConfirmationPromptId(promptId);
  if (
    fieldConfirmationPrompt
    && fieldConfirmationPrompt.journeyId === journey.id
    && activeStateIds.has(fieldConfirmationPrompt.stateId)
  ) {
    return findJourneyState(journey, fieldConfirmationPrompt.stateId);
  }
  const confirmationPrompt = parseToolConfirmationPromptId(promptId);
  if (confirmationPrompt && confirmationPrompt.journeyId === journey.id && activeStateIds.has(confirmationPrompt.stateId)) {
    return findJourneyState(journey, confirmationPrompt.stateId);
  }
  return findJourneyState(journey, snapshot?.activeStateIds[0]);
}

export function createJourneyCompletion(journeyId: string, activeStates: CompiledJourney["states"]): StateMachineTurnResult["completed"] | undefined {
  if (activeStates.length === 0 || activeStates.some((state) => state.type !== "final")) return undefined;
  const onlyState = activeStates.length === 1 ? activeStates[0] : undefined;
  return {
    journeyId,
    ...(onlyState ? { stateId: onlyState.id } : {}),
  };
}

export function appendJourneySummary(existing: JourneySummary[], next: JourneySummary | null) {
  if (!next) return existing;
  return [
    ...existing.filter((summary) => summary.journeyId !== next.journeyId),
    next,
  ];
}

export function appendJourneyContext(existing: JourneyContextRecord[], next: JourneyContextRecord | null) {
  if (!next) return existing;
  return [
    ...existing.filter((record) => record.journeyId !== next.journeyId),
    next,
  ];
}

export function createJourneyContextRecord(args: {
  journeyId: string;
  completed: NonNullable<StateMachineTurnResult["completed"]>;
  context: Record<string, unknown>;
  updatedAt: string;
}): JourneyContextRecord {
  return {
    journeyId: args.journeyId,
    context: structuredClone(args.context),
    updatedAt: args.updatedAt,
    ...(args.completed.stateId ? { stateId: args.completed.stateId } : {}),
  };
}

export function createJourneySummary(args: {
  journey: CompiledJourney;
  completedAt: string;
  stateMachineTurn: StateMachineTurnResult | null;
  delegationCompletion: { journeyId: string; reason?: string } | null;
}): JourneySummary {
  const completed = args.stateMachineTurn?.completed;
  const context = args.stateMachineTurn?.journeyContext;
  const contextSummary = context && Object.keys(context).length > 0
    ? ` Context: ${JSON.stringify(context)}`
    : "";
  const reason = args.delegationCompletion?.reason;
  return {
    journeyId: args.journey.id,
    kind: args.journey.kind,
    completedAt: args.completedAt,
    summary: reason
      ?? `${args.journey.condition}${completed?.stateId ? ` Completed at state '${completed.stateId}'.` : ""}${contextSummary}`,
    ...(completed?.stateId ? { stateId: completed.stateId } : {}),
    ...(reason ? { reason } : {}),
  };
}

export function resolveActiveStates(journey: CompiledJourney | null, stateMachineTurn: StateMachineTurnResult | null) {
  if (!journey || journey.kind !== "stateMachine" || !stateMachineTurn) return [];
  const activeStateIds = new Set(stateMachineTurn.activeStateIds);
  return journey.states.filter((state) => activeStateIds.has(state.id));
}

export function isFieldRequired(
  field: CompiledJourney["states"][number]["collected"][number],
  context: Record<string, unknown>,
) {
  if (field.requiredWhen) return field.requiredWhen({ context });
  return field.required;
}

export function hasEventTransition(state: CompiledJourney["states"][number], eventName: string) {
  return state.transitions.some((transition) => (
    transition.kind === "event" && (transition.eventName ?? transition.description) === eventName
  ));
}

export function createToolConfirmationPromptId(journeyId: string, stateId: string, toolName: string) {
  return `confirm:${journeyId}:${stateId}:${toolName}`;
}

export function createGuardPromptId(journeyId: string, stateId: string | undefined, code: string) {
  return `guard:${journeyId}:${stateId ?? "journey"}:${encodeURIComponent(code)}`;
}

export function createFieldPromptId(journeyId: string, stateId: string, path: string) {
  return `field:${journeyId}:${stateId}:${encodeURIComponent(path)}`;
}

export function createFieldConfirmationPromptId(journeyId: string, stateId: string, path: string) {
  return `confirm-field:${journeyId}:${stateId}:${encodeURIComponent(path)}`;
}

export function parseFieldPromptId(promptId: string) {
  const [kind, journeyId, stateId, encodedPath] = promptId.split(":");
  if (kind !== "field" || !journeyId || !stateId || !encodedPath) return null;
  return {
    journeyId,
    stateId,
    path: decodeURIComponent(encodedPath),
  };
}

export function parseFieldConfirmationPromptId(promptId: string) {
  const [kind, journeyId, stateId, encodedPath] = promptId.split(":");
  if (kind !== "confirm-field" || !journeyId || !stateId || !encodedPath) return null;
  return {
    journeyId,
    stateId,
    path: decodeURIComponent(encodedPath),
  };
}

export function parseToolConfirmationPromptId(promptId: string) {
  const [kind, journeyId, stateId, ...toolNameParts] = promptId.split(":");
  const toolName = toolNameParts.join(":");
  if (kind !== "confirm" || !journeyId || !stateId || !toolName) return null;
  return {
    journeyId,
    stateId,
    toolName,
  };
}

export function extractWidgetFieldValue(output: unknown) {
  if (isRecord(output) && "value" in output) return output.value;
  if (isRecord(output) && "selectedId" in output) return output.selectedId;
  if (isRecord(output) && "values" in output) return output.values;
  return output;
}

export { getPathValue, hasUsableValue, setPathValue };
