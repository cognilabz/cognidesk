import type { StudioAgentIntrospection, StudioJourneySummary } from "@cognidesk/studio-contracts";
import type { StudioConversationRow } from "./types";

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

export function conversationLifecycleDistribution(conversations: StudioConversationRow[]) {
  return ["active", "handoff", "closed"].map((lifecycle) => ({
    name: labelLifecycle(lifecycle),
    value: conversations.filter((conversation) => conversation.lifecycle === lifecycle).length,
  })).filter((entry) => entry.value > 0);
}

export function conversationJourneyActivity(conversations: StudioConversationRow[]) {
  const byJourney = new Map<string, { journey: string; conversations: number; events: number }>();
  for (const conversation of conversations) {
    const journey = conversation.activeJourneyId ?? "unassigned";
    const current = byJourney.get(journey) ?? { journey: truncate(journey, 18), conversations: 0, events: 0 };
    current.conversations += 1;
    current.events += conversation.eventCount ?? 0;
    byJourney.set(journey, current);
  }
  return [...byJourney.values()].sort((left, right) => right.conversations - left.conversations);
}

export function conversationRows(conversations: StudioConversationRow[]) {
  return conversations.map((conversation) => [
    conversation.customerLabel,
    labelLifecycle(conversation.lifecycle),
    conversation.activeJourneyId ?? "-",
    String(conversation.eventCount ?? 0),
    conversation.summary,
  ]);
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

function labelLifecycle(value: string) {
  return value[0]?.toUpperCase() + value.slice(1);
}
