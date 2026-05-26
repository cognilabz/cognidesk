import type { CompiledAgent, CompiledJourney, EventRoutingMode } from "../definition.js";
import type { ConversationRecord } from "../storage.js";
import type {
  AgentModelSet,
  GuardResult,
  ModelAdapter,
  RuntimeSnapshot,
  TextGenerationInput,
  TextGenerationOutput,
} from "../types.js";
import { guardAllows } from "./context.js";
import { isAbortLikeError } from "./errors.js";
import { findJourneyState, findJourneyStates, hasEventTransition } from "./journey-state.js";
import { transitionMatchSchema } from "./schemas.js";
import type { RuntimeEventEmitter, RuntimeOptions } from "./types.js";

type GenerateTextWithTrace = (input: {
  conversationId: string;
  model: ModelAdapter;
  input: TextGenerationInput;
}) => Promise<TextGenerationOutput>;

type EmitGuardDenial = (args: {
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state?: CompiledJourney["states"][number];
  result: GuardResult;
  emit: RuntimeEventEmitter;
}) => Promise<void>;

export async function selectTransition(args: {
  options: RuntimeOptions;
  generateTextWithTrace: GenerateTextWithTrace;
  emitGuardDenial: EmitGuardDenial;
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  context: Record<string, unknown>;
  models?: AgentModelSet;
  userText?: string;
  signal?: AbortSignal;
  emit: RuntimeEventEmitter;
}) {
  const transitions = [...args.state.transitions]
    .filter((transition) => transition.kind === "conversational")
    .sort((left, right) => (right.priority ?? 0) - (left.priority ?? 0));
  const rankedTransitions = await rankConversationalTransitions(args, transitions);
  for (const transition of rankedTransitions) {
    if (!transition.guard) return transition;
    const result = await transition.guard({
      app: args.options.app ?? {},
      context: args.context,
    });
    if (guardAllows(result)) return transition;
    await args.emitGuardDenial({ ...args, result });
  }
  return null;
}

async function rankConversationalTransitions(
  args: {
    generateTextWithTrace: GenerateTextWithTrace;
    journey: CompiledJourney;
    conversation: ConversationRecord;
    state: CompiledJourney["states"][number];
    context: Record<string, unknown>;
    models?: AgentModelSet;
    userText?: string;
    signal?: AbortSignal;
    emit: RuntimeEventEmitter;
  },
  transitions: CompiledJourney["states"][number]["transitions"],
) {
  if (transitions.length <= 1) return transitions;
  if (!args.models || !args.userText) return transitions;

  const candidates = transitions.map((transition, index) => ({
    id: `transition_${index + 1}`,
    transition,
  }));
  try {
    const output = await args.generateTextWithTrace({
      conversationId: args.conversation.id,
      model: args.models.matcher,
      input: {
        role: "matcher",
        promptTask: "transition-matcher",
        promptPayload: {
          journey: {
            id: args.journey.id,
            kind: args.journey.kind,
            condition: args.journey.condition,
          },
          state: {
            id: args.state.id,
            instructions: args.state.instructions ?? null,
            summary: args.state.summary ?? null,
          },
          latestUserMessage: args.userText,
          currentContext: args.context,
          candidates: candidates.map(({ id, transition }) => ({
            id,
            targetId: transition.targetId,
            description: transition.description ?? null,
            priority: transition.priority ?? 0,
          })),
        },
        messages: [
          {
            role: "system",
            content: [
              "Rank only the provided state transition candidates for the latest user message.",
              "Return candidates that should fire now, ordered from best to worst.",
              "Return an empty candidates array when no transition should fire.",
              "Prefer higher priority only when the latest message fits multiple transitions equally.",
            ].join("\n"),
          },
          {
            role: "user",
            content: [
              `Journey: ${args.journey.id}`,
              `State: ${args.state.id}`,
              `Latest user message: ${args.userText}`,
              `Current context: ${JSON.stringify(args.context)}`,
              "Candidates:",
              ...candidates.map(({ id, transition }) => [
                `id: ${id}`,
                `targetId: ${transition.targetId}`,
                transition.description
                  ? `description: ${transition.description}`
                  : "description: transition is allowed when current state requirements are satisfied",
                `priority: ${transition.priority ?? 0}`,
              ].join("\n")),
            ].join("\n\n"),
          },
        ],
        responseFormat: transitionMatchSchema,
        ...(args.signal ? { signal: args.signal } : {}),
      },
    });
    const structured = transitionMatchSchema.parse(output.structured ?? JSON.parse(output.text));
    const byId = new Map(candidates.map((candidate) => [candidate.id, candidate.transition]));
    const seen = new Set<string>();
    const ranked = structured.candidates
      .map((candidate) => {
        const transition = byId.get(candidate.id);
        if (!transition || seen.has(candidate.id)) return null;
        seen.add(candidate.id);
        return transition;
      })
      .filter((transition): transition is CompiledJourney["states"][number]["transitions"][number] => Boolean(transition));
    return ranked;
  } catch (error) {
    if (isAbortLikeError(error) && args.signal?.aborted) throw error;
    await args.emit({
      conversationId: args.conversation.id,
      type: "error",
      data: {
        code: "transition_matching_failed",
        message: error instanceof Error ? error.message : "Transition matching failed.",
      },
    });
    return transitions;
  }
}

export function resolveJourneyEventRoute(args: {
  agent: CompiledAgent;
  previousSnapshot: RuntimeSnapshot | null;
  eventName: string;
  routing: EventRoutingMode;
  target?: { journeyId?: string; stateId?: string };
}) {
  const stateMachineJourneys = args.agent.journeys.filter((journey) => journey.kind === "stateMachine");
  const journeyById = new Map(stateMachineJourneys.map((journey) => [journey.id, journey]));
  const activeJourney = args.previousSnapshot?.activeJourneyId
    ? journeyById.get(args.previousSnapshot.activeJourneyId)
    : undefined;
  const activeStates = activeJourney
    ? findJourneyStates(activeJourney, args.previousSnapshot?.activeStateIds.length
      ? args.previousSnapshot.activeStateIds
      : activeJourney.initialStateId ? [activeJourney.initialStateId] : [])
    : [];

  if (args.routing === "activeJourneyOnly") {
    const state = activeStates.find((candidate) => hasEventTransition(candidate, args.eventName)) ?? activeStates[0];
    return activeJourney && state ? { journey: activeJourney, state } : null;
  }

  if (args.routing === "targeted") {
    const journey = args.target?.journeyId
      ? journeyById.get(args.target.journeyId)
      : activeJourney;
    if (!journey) return null;
    const state = findJourneyState(
      journey,
      args.target?.stateId
        ?? (journey.id === args.previousSnapshot?.activeJourneyId ? activeStates[0]?.id : undefined)
        ?? journey.initialStateId,
    );
    return state ? { journey, state } : null;
  }

  if (args.routing === "full") {
    const activeState = activeStates.find((candidate) => hasEventTransition(candidate, args.eventName));
    if (activeJourney && activeState) {
      return { journey: activeJourney, state: activeState };
    }
    for (const journey of stateMachineJourneys) {
      const state = journey.states.find((candidate) => hasEventTransition(candidate, args.eventName));
      if (state) return { journey, state };
    }
  }

  return null;
}

export async function selectEventTransition(args: {
  emitGuardDenial: EmitGuardDenial;
  journey: CompiledJourney;
  conversation: ConversationRecord;
  state: CompiledJourney["states"][number];
  eventName: string;
  context: Record<string, unknown>;
  app: unknown;
  emit: RuntimeEventEmitter;
}) {
  const transitions = [...args.state.transitions]
    .filter((transition) => transition.kind === "event" && (transition.eventName ?? transition.description) === args.eventName)
    .sort((left, right) => (right.priority ?? 0) - (left.priority ?? 0));
  for (const transition of transitions) {
    if (!transition.guard) return transition;
    const result = await transition.guard({
      app: args.app,
      context: args.context,
    });
    if (guardAllows(result)) return transition;
    await args.emitGuardDenial({ ...args, result });
  }
  return null;
}
