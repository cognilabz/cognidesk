import { DefinitionError as CognideskDefinitionError } from "../types.js";
import type { JourneyGraph } from "./compiled-types.js";

export function pushUnique<T>(items: T[], item: T) {
  if (!items.includes(item)) items.push(item);
}

export function assertUniqueNames(items: Array<{ name: string }>, label: string) {
  assertUniqueValues(items, label, (item) => item.name);
}

export function assertUniqueIds(items: Array<{ id: string }>, label: string) {
  assertUniqueValues(items, label, (item) => item.id);
}

export function assertUniqueKinds(items: Array<{ kind: string }>, label: string) {
  assertUniqueValues(items, label, (item) => item.kind);
}

function assertUniqueValues<T>(items: T[], label: string, value: (item: T) => string) {
  const seen = new Set<string>();
  for (const item of items) {
    const key = value(item);
    if (seen.has(key)) {
      throw new CognideskDefinitionError(`${label} '${key}' is already registered.`);
    }
    seen.add(key);
  }
}

export function graphToMermaid(graph: JourneyGraph) {
  const lines = ["stateDiagram-v2"];
  if (graph.initialStateId) lines.push(`  [*] --> ${graph.initialStateId}`);
  for (const state of graph.states) {
    if (state.type === "final") lines.push(`  ${state.id} --> [*]`);
    for (const transition of state.transitions) {
      lines.push(`  ${state.id} --> ${transition.targetId}${transition.description ? `: ${transition.description}` : ""}`);
    }
  }
  return lines.join("\n");
}

export function sanitizeGraph(graph: JourneyGraph): JourneyGraph {
  return {
    ...graph,
    states: graph.states.map((state) => ({
      id: state.id,
      type: state.type,
      ...(state.parentId ? { parentId: state.parentId } : {}),
      ...(state.initialStateId ? { initialStateId: state.initialStateId } : {}),
      ...(state.instructions ? { instructions: state.instructions } : {}),
      ...(state.summary ? { summary: state.summary } : {}),
      collected: state.collected.map((field) => ({
        path: field.path,
        required: field.required,
        extract: field.extract,
      })),
      transitions: state.transitions.map((transition) => ({
        kind: transition.kind,
        targetId: transition.targetId,
        ...(transition.eventName ? { eventName: transition.eventName } : {}),
        ...(transition.description ? { description: transition.description } : {}),
        ...(transition.priority !== undefined ? { priority: transition.priority } : {}),
      })),
      actions: state.actions,
      requiresVisit: state.requiresVisit,
    })),
    ...(graph.alternateEntries ? { alternateEntries: graph.alternateEntries } : {}),
  };
}
