import type {
  AnyTool,
  CompiledAgent,
  KnowledgeSource,
  RuntimeConfigurationSource,
  WidgetDefinition,
} from "@cognidesk/core";
import {
  StudioAgentIntrospectionSchema,
  type StudioAgentIntrospection,
  type StudioJourneySummary,
  type StudioKnowledgeSummary,
  type StudioToolSummary,
  type StudioWidgetSummary,
} from "@cognidesk/studio-contracts";
import { introspectConfiguration } from "./configuration.js";
import type { StudioAdapterConfigurationSource } from "./types.js";

export function introspectAgent(
  targetId: string,
  agent: CompiledAgent,
  configuration?: StudioAdapterConfigurationSource,
  runtimeSource?: RuntimeConfigurationSource,
): StudioAgentIntrospection {
  return StudioAgentIntrospectionSchema.parse({
    targetId,
    agent: {
      id: agent.id,
      instructions: agent.instructions,
      logLevel: agent.logLevel,
      journeyCount: agent.journeys.length,
      toolCount: agent.tools.length,
      knowledgeCount: agent.knowledge.length,
      widgetCount: agent.widgets.length,
      ...(agent.persona !== undefined ? { persona: agent.persona } : {}),
      ...(agent.channels ? { channelPolicies: agent.channels } : {}),
      ...(agent.handoff !== undefined ? { handoffPolicy: agent.handoff } : {}),
    },
    journeys: introspectJourneys(agent),
    tools: agent.tools.map(summarizeTool),
    knowledge: agent.knowledge.map(summarizeKnowledge),
    widgets: agent.widgets.map(summarizeWidget),
    configurationSurface: introspectConfiguration(targetId, agent, configuration, runtimeSource),
    capturedAt: new Date().toISOString(),
  });
}

export function introspectJourneys(agent: CompiledAgent): StudioJourneySummary[] {
  return agent.journeys.map((journey) => ({
    id: journey.id,
    kind: journey.kind,
    condition: journey.condition,
    examples: journey.examples,
    tags: journey.tags,
    priority: journey.priority,
    stickiness: journey.stickiness,
    alwaysInclude: journey.alwaysInclude,
    graph: journey.toGraph(),
    mermaid: journey.toMermaid(),
    ...(journey.delegation
      ? {
          delegation: {
            goal: journey.delegation.goal,
            ...(journey.delegation.instructions ? { instructions: journey.delegation.instructions } : {}),
            completeWhen: journey.delegation.completeWhen,
            tools: journey.delegation.tools.map(summarizeTool),
          },
        }
      : {}),
    tools: journey.tools.map(summarizeTool),
    knowledge: journey.knowledge.map(summarizeKnowledge),
  }));
}

function summarizeTool(tool: AnyTool): StudioToolSummary {
  return {
    name: tool.name,
    ...(tool.description ? { description: tool.description } : {}),
    sideEffect: tool.sideEffect,
  };
}

function summarizeKnowledge(source: KnowledgeSource): StudioKnowledgeSummary {
  return { name: source.name };
}

function summarizeWidget(widget: WidgetDefinition): StudioWidgetSummary {
  return { kind: widget.kind };
}
