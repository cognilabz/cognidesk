import type { CompiledAgent, CompiledJourney } from "../definition.js";
import { JOURNEY_INDEX_PROJECTION_VERSION } from "./schema.js";

export function createJourneyRoutingText(journey: CompiledJourney) {
  const stateSummaries = journey.states
    .map((state) => [
      `state:${state.id}`,
      state.summary ? `summary:${state.summary}` : "",
      state.instructions ? `instructions:${state.instructions}` : "",
      state.collected.length > 0 ? `collect:${state.collected.map((field) => field.path).join(", ")}` : "",
    ].filter(Boolean).join(" "))
    .filter(Boolean);

  return [
    `journey:${journey.id}`,
    `kind:${journey.kind}`,
    `condition:${journey.condition}`,
    journey.tags.length > 0 ? `tags:${journey.tags.join(", ")}` : "",
    journey.examples.length > 0 ? `examples:${journey.examples.join(" | ")}` : "",
    ...stateSummaries,
  ].filter(Boolean).join("\n");
}

export function hashAgentRoutingDefinition(agent: CompiledAgent) {
  return stableHash({
    projectionVersion: JOURNEY_INDEX_PROJECTION_VERSION,
    agentId: agent.id,
    journeys: agent.journeys.map(journeyRoutingProjection),
  });
}

export function hashJourneyDefinition(journey: CompiledJourney) {
  return stableHash({
    projectionVersion: JOURNEY_INDEX_PROJECTION_VERSION,
    journey: journeyRoutingProjection(journey),
  });
}

function journeyRoutingProjection(journey: CompiledJourney) {
  return {
    id: journey.id,
    kind: journey.kind,
    condition: journey.condition,
    examples: journey.examples,
    tags: journey.tags,
    priority: journey.priority,
    stickiness: journey.stickiness,
    alwaysInclude: journey.alwaysInclude,
    hasAlwaysPredicate: typeof journey.always === "function",
    hasIncludeWhenPredicate: typeof journey.includeWhen === "function",
    hasMatcherPredicate: typeof journey.matcher === "function",
    hasGuardPredicate: typeof journey.guard === "function",
    contextReuseFields: journey.contextReuse?.fields ?? [],
    hasContextReusePredicate: typeof journey.contextReuse?.when === "function",
    initialStateId: journey.initialStateId,
    alternateEntries: journey.alternateEntries.map((entry) => ({
      stateId: entry.stateId,
      description: entry.description,
      priority: entry.priority,
      hasPredicate: typeof entry.when === "function",
    })),
    states: journey.states.map((state) => ({
      id: state.id,
      parentId: state.parentId,
      type: state.type,
      instructions: state.instructions,
      summary: state.summary,
      collected: state.collected,
      transitions: state.transitions,
      actions: state.actions,
      requiresVisit: state.requiresVisit,
    })),
  };
}

function stableHash(value: unknown) {
  const json = stableStringify(value);
  let hash = 0xcbf29ce484222325n;
  const prime = 0x100000001b3n;
  const mask = 0xffffffffffffffffn;
  for (let index = 0; index < json.length; index += 1) {
    hash ^= BigInt(json.charCodeAt(index));
    hash = (hash * prime) & mask;
  }
  return `fnv1a64:${hash.toString(16).padStart(16, "0")}`;
}

function stableStringify(value: unknown): string {
  if (value === null) return "null";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return JSON.stringify(value);
  if (typeof value === "bigint") return JSON.stringify(value.toString());
  if (typeof value === "undefined" || typeof value === "function" || typeof value === "symbol") return "null";
  if (Array.isArray(value)) return `[${value.map((item) => stableStringify(item)).join(",")}]`;
  if (typeof value === "object") {
    const record = value as Record<string, unknown>;
    const keys = Object.keys(record)
      .filter((key) => typeof record[key] !== "undefined" && typeof record[key] !== "function")
      .sort();
    return `{${keys.map((key) => `${JSON.stringify(key)}:${stableStringify(record[key])}`).join(",")}}`;
  }
  return "null";
}
