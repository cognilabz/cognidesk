import type { JourneyCandidate } from "../journey-index.js";
import type { CompiledAgent, CompiledJourney } from "../definition.js";
import type { ModelMessage, RuntimeEvent } from "../types.js";
import { resolveActiveStates } from "./journey-state.js";
import type { ConversationMessage, RankedJourneyCandidate, StateMachineTurnResult } from "./types.js";

export function normalizeConfidence(candidate: RankedJourneyCandidate) {
  if (candidate.matchConfidence !== undefined) return candidate.matchConfidence;
  if (candidate.reason === "always") return 1;
  if (candidate.reason === "matcher") return 0.99;
  return Math.max(0, Math.min(1, (candidate.similarity + 1) / 2));
}

export function clampConfidence(value: number) {
  return Math.max(0, Math.min(1, value));
}

export function renderJourneyCandidateForMatcher(candidate: JourneyCandidate) {
  const journey = candidate.journey;
  return [
    `- journeyId: ${journey.id}`,
    `  kind: ${journey.kind}`,
    `  condition: ${journey.condition}`,
    `  indexReason: ${candidate.reason}`,
    `  indexScore: ${candidate.score.toFixed(4)}`,
    `  stickiness: ${journey.stickiness}`,
    journey.tags.length > 0 ? `  tags: ${journey.tags.join(", ")}` : "",
    journey.examples.length > 0 ? `  examples: ${journey.examples.join(" | ")}` : "",
  ].filter(Boolean).join("\n");
}

export function renderConversationTranscript(history: ConversationMessage[]) {
  if (history.length === 0) return "No prior conversation messages.";
  return history.map((message) => `${message.role}: ${message.content}`).join("\n");
}

export function renderJourneyRuntimeContext(journey: CompiledJourney, stateMachineTurn: StateMachineTurnResult | null) {
  const lines = [
    `Active journey: ${journey.id}`,
    `Journey kind: ${journey.kind}`,
    `Journey condition: ${journey.condition}`,
  ];
  if (journey.kind === "delegation" && journey.delegation) {
    lines.push(`Delegation goal: ${journey.delegation.goal}`);
    if (journey.delegation.instructions) lines.push(`Delegation instructions: ${journey.delegation.instructions}`);
    if (journey.delegation.completeWhen.length > 0) {
      lines.push(`Delegation completion criteria: ${journey.delegation.completeWhen.join("; ")}`);
    }
    if (journey.delegation.tools.length > 0) {
      lines.push(`Delegation tools: ${journey.delegation.tools.map((toolDefinition) => toolDefinition.name).join(", ")}`);
    }
  } else {
    const activeStates = resolveActiveStates(journey, stateMachineTurn);
    lines.push(
      stateMachineTurn?.activeStateIds.length
        ? `Active state: ${stateMachineTurn.activeStateIds.join(", ")}`
        : journey.initialStateId ? `Initial state: ${journey.initialStateId}` : "",
    );
    const renderedInstructions = new Set<string>();
    for (const state of activeStates) {
      for (const line of renderStateInstructionStack(journey, state).split("\n").filter(Boolean)) {
        if (renderedInstructions.has(line)) continue;
        renderedInstructions.add(line);
        lines.push(line);
      }
    }
    if (stateMachineTurn) lines.push(`Journey context: ${JSON.stringify(stateMachineTurn.journeyContext)}`);
  }
  return lines.filter(Boolean).join("\n");
}

export function renderStateInstructionStack(journey: CompiledJourney, state: CompiledJourney["states"][number]) {
  const stateById = new Map(journey.states.map((candidate) => [candidate.id, candidate]));
  const stack: string[] = [];
  let current: CompiledJourney["states"][number] | undefined = state;
  while (current) {
    if (current.instructions) stack.unshift(`State ${current.id} instructions: ${current.instructions}`);
    current = current.parentId ? stateById.get(current.parentId) : undefined;
  }
  return stack.join("\n");
}

export function renderEventsForCompaction(events: RuntimeEvent[]) {
  return events.map((event) => JSON.stringify({
    offset: event.offset,
    type: event.type,
    data: event.data,
    createdAt: event.createdAt,
  })).join("\n");
}

export function createGeneratedPreambleMessages(args: {
  agent: CompiledAgent;
  history: ConversationMessage[];
  purpose?: string;
  maxWords: number;
}): ModelMessage[] {
  return [
    {
      role: "system",
      content: [
        args.agent.instructions,
        `Write one brief wait-time preamble for the customer in ${args.maxWords} words or fewer.`,
        "Acknowledge that work is continuing, but do not claim a result, policy, tool output, queue status, or completion.",
        "Return only the customer-facing sentence.",
        args.purpose ? `Current work: ${args.purpose}` : "",
      ].filter(Boolean).join("\n"),
    },
    {
      role: "user",
      content: args.history.length > 0
        ? args.history.map((message) => `${message.role}: ${message.content}`).join("\n")
        : "No prior customer-visible conversation messages.",
    },
  ];
}

export function normalizeGeneratedPreamble(text: string, maxWords: number) {
  const singleLine = text.replace(/\s+/g, " ").trim();
  if (!singleLine) return "I am still checking that for you.";
  const words = singleLine.split(" ");
  const clipped = words.length > maxWords ? words.slice(0, maxWords).join(" ") : singleLine;
  return clipped.replace(/["']$/g, "");
}
