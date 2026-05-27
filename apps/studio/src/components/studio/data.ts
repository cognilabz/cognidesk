import type { StudioAgentIntrospection, StudioJourneySummary } from "@cognidesk/studio-contracts";

export function journeyRows(introspection: StudioAgentIntrospection | null) {
  return introspection?.journeys.map((journey) => [
    journey.id,
    journey.kind === "delegation" ? "Prompt-based" : "XState",
    String(journey.graph.states.length),
    String(journey.tools.length),
    String(journey.knowledge.length),
    journey.stickiness,
  ]) ?? [];
}

export function journeyComplexity(introspection: StudioAgentIntrospection | null) {
  return introspection?.journeys.map((journey) => ({
    name: truncate(journey.id, 16),
    states: journey.graph.states.length,
    tools: journey.tools.length,
    knowledge: journey.knowledge.length,
  })) ?? [];
}

export function journeyKindDistribution(introspection: StudioAgentIntrospection | null) {
  if (!introspection) return [];
  const xstate = introspection.journeys.filter((journey) => journey.kind === "stateMachine").length;
  const prompt = introspection.journeys.filter((journey) => journey.kind === "delegation").length;
  return [
    { name: "XState", value: xstate },
    { name: "Prompt-based", value: prompt },
  ].filter((entry) => entry.value > 0);
}

export function telemetryRows(introspection: StudioAgentIntrospection | null) {
  if (!introspection) return [];
  return [
    ["Agent", introspection.agent.id],
    ["Captured", introspection.capturedAt],
    ["Journeys", String(introspection.agent.journeyCount)],
    ["Tools", String(introspection.agent.toolCount)],
    ["Knowledge sources", String(introspection.agent.knowledgeCount)],
    ["Widgets", String(introspection.agent.widgetCount)],
  ];
}

export function toolRows(introspection: StudioAgentIntrospection | null) {
  return introspection?.tools.map((tool) => [
    tool.name,
    tool.sideEffect ? "Yes" : "No",
    tool.description ?? "-",
  ]) ?? [];
}

export function knowledgeRows(introspection: StudioAgentIntrospection | null) {
  return introspection?.knowledge.map((source) => [source.name]) ?? [];
}

export function widgetRows(introspection: StudioAgentIntrospection | null) {
  return introspection?.widgets.map((widget) => [widget.kind]) ?? [];
}

export function activeJourneyRows(journey: StudioJourneySummary | null) {
  if (!journey) return [];
  return journey.graph.states.map((state) => [
    state.id,
    state.type,
    String(state.transitions.length),
    String(state.actions.length),
    state.requiresVisit ? "Yes" : "No",
  ]);
}

function truncate(value: string, max: number) {
  return value.length > max ? `${value.slice(0, max - 1)}...` : value;
}
