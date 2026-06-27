import { z } from "zod";
import { StudioConfigurationSurfaceSchema } from "./configuration.js";
import {
  StudioKnowledgeSummarySchema,
  StudioToolSummarySchema,
  StudioWidgetSummarySchema,
} from "./summaries.js";

export const StudioJourneyGraphStateSchema = z.object({
  id: z.string(),
  parentId: z.string().optional(),
  initialStateId: z.string().optional(),
  type: z.enum(["state", "parallel", "final"]),
  instructions: z.string().optional(),
  summary: z.string().optional(),
  collected: z.array(z.object({
    path: z.string(),
    required: z.boolean(),
    extract: z.boolean(),
  })),
  transitions: z.array(z.object({
    kind: z.enum(["event", "conversational"]),
    targetId: z.string(),
    eventName: z.string().optional(),
    description: z.string().optional(),
    priority: z.number().optional(),
  })),
  actions: z.array(z.object({
    type: z.enum(["entry", "exit", "transition"]),
    name: z.string(),
  })),
  requiresVisit: z.boolean(),
});

export const StudioJourneyGraphSchema = z.object({
  id: z.string(),
  kind: z.enum(["stateMachine", "delegation"]),
  initialStateId: z.string().optional(),
  alternateEntries: z.array(z.object({
    stateId: z.string(),
    description: z.string().optional(),
    priority: z.number().optional(),
  })).optional(),
  states: z.array(StudioJourneyGraphStateSchema),
});
export type StudioJourneyGraph = z.infer<typeof StudioJourneyGraphSchema>;

export const StudioJourneySummarySchema = z.object({
  id: z.string(),
  kind: z.enum(["stateMachine", "delegation"]),
  condition: z.string(),
  examples: z.array(z.string()),
  tags: z.array(z.string()),
  priority: z.number(),
  stickiness: z.enum(["low", "medium", "high"]),
  alwaysInclude: z.boolean(),
  graph: StudioJourneyGraphSchema,
  mermaid: z.string(),
  delegation: z.object({
    goal: z.string(),
    instructions: z.string().optional(),
    completeWhen: z.array(z.string()),
    tools: z.array(StudioToolSummarySchema),
  }).optional(),
  tools: z.array(StudioToolSummarySchema),
  knowledge: z.array(StudioKnowledgeSummarySchema),
});
export type StudioJourneySummary = z.infer<typeof StudioJourneySummarySchema>;

export const StudioAgentIntrospectionSchema = z.object({
  targetId: z.string(),
  agent: z.object({
    id: z.string(),
    instructions: z.string(),
    logLevel: z.string().optional(),
    journeyCount: z.number().int(),
    toolCount: z.number().int(),
    knowledgeCount: z.number().int(),
    widgetCount: z.number().int(),
    persona: z.unknown().optional(),
    channelPolicies: z.record(z.string(), z.unknown()).optional(),
    behavior: z.unknown().optional(),
    handoffPolicy: z.unknown().optional(),
  }),
  journeys: z.array(StudioJourneySummarySchema),
  tools: z.array(StudioToolSummarySchema),
  knowledge: z.array(StudioKnowledgeSummarySchema),
  widgets: z.array(StudioWidgetSummarySchema),
  configurationSurface: StudioConfigurationSurfaceSchema.optional(),
  capturedAt: z.string(),
});
export type StudioAgentIntrospection = z.infer<typeof StudioAgentIntrospectionSchema>;

export const StudioConversationSummarySchema = z.object({
  id: z.string(),
  agentId: z.string(),
  lifecycle: z.enum(["active", "handoff", "closed"]),
  createdAt: z.string(),
  updatedAt: z.string(),
  activeJourneyId: z.string().optional(),
  activeStateIds: z.array(z.string()).default([]),
  eventCount: z.number().int().optional(),
  traceIds: z.array(z.string()).default([]),
  tokenUsage: z.object({
    inputTokens: z.number().int().nonnegative().optional(),
    outputTokens: z.number().int().nonnegative().optional(),
    cachedInputTokens: z.number().int().nonnegative().optional(),
    reasoningTokens: z.number().int().nonnegative().optional(),
    totalTokens: z.number().int().nonnegative().optional(),
  }).optional(),
});
export type StudioConversationSummary = z.infer<typeof StudioConversationSummarySchema>;
