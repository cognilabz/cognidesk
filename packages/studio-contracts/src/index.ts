import { z } from "zod";

export const StudioRoleSchema = z.enum(["viewer", "dashboard_editor", "operator", "admin"]);
export type StudioRole = z.infer<typeof StudioRoleSchema>;

export const StudioPermissionSchema = z.enum([
  "studio:view",
  "dashboards:edit",
  "dashboards:publish",
  "operator:use",
  "operator:publish_code",
  "admin:manage",
]);
export type StudioPermission = z.infer<typeof StudioPermissionSchema>;

export const permissionsByRole: Record<StudioRole, StudioPermission[]> = {
  viewer: ["studio:view"],
  dashboard_editor: ["studio:view", "dashboards:edit", "dashboards:publish"],
  operator: ["studio:view", "dashboards:edit", "dashboards:publish", "operator:use", "operator:publish_code"],
  admin: ["studio:view", "dashboards:edit", "dashboards:publish", "operator:use", "operator:publish_code", "admin:manage"],
};

export function roleHasPermission(role: StudioRole, permission: StudioPermission) {
  return permissionsByRole[role].includes(permission);
}

export const StudioTargetManifestSchema = z.object({
  version: z.literal(1),
  target: z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    environment: z.string().default("local"),
  }),
  runtime: z.object({
    baseUrl: z.string().url(),
    apiBasePath: z.string().default("/api"),
    studioAdapterBasePath: z.string().default("/api/studio"),
    serviceAuthHeader: z.string().default("authorization"),
  }),
  telemetry: z.object({
    sources: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      kind: z.enum(["prometheus", "tempo", "otel-http"]),
      baseUrl: z.string().url(),
      headers: z.record(z.string(), z.string()).optional(),
    })).default([]),
  }).default({ sources: [] }),
  source: z.object({
    provider: z.literal("github"),
    owner: z.string().min(1),
    repo: z.string().min(1),
    defaultBranch: z.string().default("main"),
    root: z.string().default("."),
  }),
  code: z.object({
    allowedPaths: z.array(z.string()).default([]),
    validationCommands: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      command: z.string().min(1),
      workingDirectory: z.string().default("."),
    })).default([]),
  }).default({ allowedPaths: [], validationCommands: [] }),
  dashboards: z.object({
    artifactBucket: z.string().min(1),
    artifactPrefix: z.string().default("studio/dashboards"),
  }),
  operator: z.object({
    instructionsPath: z.string().default("AGENTS.md"),
    skillPacks: z.array(z.string()).default(["@cognidesk/studio-operator-skills"]),
    models: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      provider: z.string().min(1),
      model: z.string().min(1),
      default: z.boolean().optional(),
    })).default([]),
    allowedCredentialGrants: z.array(z.enum([
      "github",
      "package_registry",
      "telemetry",
      "artifact_store",
      "studio_adapter",
      "backend_service",
    ])).default([]),
  }).default({
    instructionsPath: "AGENTS.md",
    skillPacks: ["@cognidesk/studio-operator-skills"],
    models: [],
    allowedCredentialGrants: [],
  }),
});
export type StudioTargetManifest = z.infer<typeof StudioTargetManifestSchema>;
export type StudioTargetManifestInput = z.input<typeof StudioTargetManifestSchema>;

export const StudioTargetOverlaySchema = z.object({
  version: z.literal(1).optional(),
  target: z.object({
    id: z.string().min(1).optional(),
    name: z.string().min(1).optional(),
    environment: z.string().optional(),
  }).optional(),
  runtime: z.object({
    baseUrl: z.string().url().optional(),
    apiBasePath: z.string().optional(),
    studioAdapterBasePath: z.string().optional(),
    serviceAuthHeader: z.string().optional(),
  }).optional(),
  telemetry: z.object({
    sources: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      kind: z.enum(["prometheus", "tempo", "otel-http"]),
      baseUrl: z.string().url(),
      headers: z.record(z.string(), z.string()).optional(),
    })).optional(),
  }).optional(),
  source: z.object({
    provider: z.literal("github").optional(),
    owner: z.string().min(1).optional(),
    repo: z.string().min(1).optional(),
    defaultBranch: z.string().optional(),
    root: z.string().optional(),
  }).optional(),
  code: z.object({
    allowedPaths: z.array(z.string()).optional(),
    validationCommands: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      command: z.string().min(1),
      workingDirectory: z.string().default("."),
    })).optional(),
  }).optional(),
  dashboards: z.object({
    artifactBucket: z.string().min(1).optional(),
    artifactPrefix: z.string().optional(),
  }).optional(),
  operator: z.object({
    instructionsPath: z.string().optional(),
    skillPacks: z.array(z.string()).optional(),
    models: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      provider: z.string().min(1),
      model: z.string().min(1),
      default: z.boolean().optional(),
    })).optional(),
    allowedCredentialGrants: z.array(z.enum([
      "github",
      "package_registry",
      "telemetry",
      "artifact_store",
      "studio_adapter",
      "backend_service",
    ])).optional(),
  }).optional(),
});
export type StudioTargetOverlay = z.infer<typeof StudioTargetOverlaySchema>;

export function mergeStudioTargetManifest(
  base: StudioTargetManifestInput,
  overlay: StudioTargetOverlay = {},
): StudioTargetManifest {
  return StudioTargetManifestSchema.parse(deepMerge(base as Record<string, unknown>, overlay as Record<string, unknown>));
}

function deepMerge(base: Record<string, unknown>, overlay: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(overlay)) {
    if (value === undefined) continue;
    const baseValue = result[key];
    result[key] = isPlainRecord(baseValue) && isPlainRecord(value)
      ? deepMerge(baseValue, value)
      : value;
  }
  return result;
}

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

export const StudioToolSummarySchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  sideEffect: z.boolean(),
});
export type StudioToolSummary = z.infer<typeof StudioToolSummarySchema>;

export const StudioKnowledgeSummarySchema = z.object({
  name: z.string(),
});
export type StudioKnowledgeSummary = z.infer<typeof StudioKnowledgeSummarySchema>;

export const StudioWidgetSummarySchema = z.object({
  kind: z.string(),
});
export type StudioWidgetSummary = z.infer<typeof StudioWidgetSummarySchema>;

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
  }),
  journeys: z.array(StudioJourneySummarySchema),
  tools: z.array(StudioToolSummarySchema),
  knowledge: z.array(StudioKnowledgeSummarySchema),
  widgets: z.array(StudioWidgetSummarySchema),
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
});
export type StudioConversationSummary = z.infer<typeof StudioConversationSummarySchema>;

export const StudioTelemetryMetricPointSchema = z.object({
  timestamp: z.string(),
  value: z.number(),
  labels: z.record(z.string(), z.string()).default({}),
});
export type StudioTelemetryMetricPoint = z.infer<typeof StudioTelemetryMetricPointSchema>;

export const StudioTraceSummarySchema = z.object({
  traceId: z.string(),
  rootSpanName: z.string().optional(),
  serviceName: z.string().optional(),
  startedAt: z.string().optional(),
  durationMs: z.number().optional(),
  status: z.enum(["ok", "error", "unknown"]).default("unknown"),
  spanCount: z.number().int().optional(),
});
export type StudioTraceSummary = z.infer<typeof StudioTraceSummarySchema>;

export const StudioDashboardDataCapabilitySchema = z.enum([
  "telemetry.traces",
  "telemetry.metrics",
  "cognidesk.agent",
  "cognidesk.conversations",
  "cognidesk.events",
  "cognidesk.snapshots",
]);
export type StudioDashboardDataCapability = z.infer<typeof StudioDashboardDataCapabilitySchema>;

export const StudioDashboardDataQuerySchema = z.object({
  capability: StudioDashboardDataCapabilitySchema,
  targetId: z.string(),
  params: z.record(z.string(), z.unknown()).default({}),
});
export type StudioDashboardDataQuery = z.infer<typeof StudioDashboardDataQuerySchema>;

export const StudioDashboardDatasetSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  mode: z.enum(["static", "live"]).default("static"),
  refreshMs: z.number().int().positive().optional(),
  source: StudioDashboardDataQuerySchema,
  capturedAt: z.string(),
  data: z.unknown(),
});
export type StudioDashboardDataset = z.infer<typeof StudioDashboardDatasetSchema>;

export const StudioDashboardWidgetSchema = z.object({
  id: z.string(),
  title: z.string(),
  kind: z.enum(["metric", "line", "bar", "donut", "table", "insight"]),
  datasetId: z.string().optional(),
  description: z.string().optional(),
  valuePath: z.string().optional(),
  labelPath: z.string().optional(),
  xPath: z.string().optional(),
  yPath: z.string().optional(),
  series: z.array(z.object({
    label: z.string(),
    path: z.string(),
  })).optional(),
  unit: z.string().optional(),
  tone: z.enum(["slate", "blue", "green", "amber", "red", "violet", "teal"]).optional(),
  limit: z.number().int().positive().optional(),
  columns: z.array(z.object({
    label: z.string(),
    path: z.string(),
  })).optional(),
}).passthrough();
export type StudioDashboardWidget = z.infer<typeof StudioDashboardWidgetSchema>;

export const StudioDashboardSpecSchema = z.object({
  layout: z.enum(["overview", "timeseries", "comparison", "operations"]).default("overview"),
  summary: z.string().optional(),
  widgets: z.array(StudioDashboardWidgetSchema).default([]),
}).passthrough();
export type StudioDashboardSpec = z.infer<typeof StudioDashboardSpecSchema>;

export const StudioDashboardArtifactSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  version: z.number().int().positive(),
  status: z.enum(["draft", "published", "archived"]),
  ownerUserId: z.string(),
  targetId: z.string(),
  artifactKey: z.string(),
  renderer: z.object({
    kind: z.literal("react-component"),
    entry: z.string().default("Dashboard"),
    spec: StudioDashboardSpecSchema.optional(),
  }),
  datasets: z.array(StudioDashboardDatasetSchema).default([]),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string().optional(),
});
export type StudioDashboardArtifact = z.infer<typeof StudioDashboardArtifactSchema>;

export const StudioOperatorSurfaceSchema = z.enum([
  "conversation",
  "evidence",
  "artifacts",
  "sandbox_diff",
  "validation_runs",
  "approvals",
]);
export type StudioOperatorSurface = z.infer<typeof StudioOperatorSurfaceSchema>;

export const StudioOperatorReasoningEffortSchema = z.enum(["none", "minimal", "low", "medium", "high", "xhigh"]);
export type StudioOperatorReasoningEffort = z.infer<typeof StudioOperatorReasoningEffortSchema>;

export const StudioOperatorClientEventSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("session.start"),
    sessionId: z.string().optional(),
    targetId: z.string(),
    modelId: z.string().optional(),
    reasoningEffort: StudioOperatorReasoningEffortSchema.optional(),
    message: z.string().optional(),
  }),
  z.object({
    type: z.literal("turn.start"),
    sessionId: z.string(),
    message: z.string(),
    modelId: z.string().optional(),
    reasoningEffort: StudioOperatorReasoningEffortSchema.optional(),
  }),
  z.object({
    type: z.literal("turn.interrupt"),
    sessionId: z.string(),
  }),
  z.object({
    type: z.literal("approval.resolve"),
    sessionId: z.string(),
    approvalId: z.string(),
    approved: z.boolean(),
    payload: z.unknown().optional(),
  }),
]);
export type StudioOperatorClientEvent = z.infer<typeof StudioOperatorClientEventSchema>;

export const StudioOperatorServerEventSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("session.ready"),
    sessionId: z.string(),
    targetId: z.string(),
    modelId: z.string().optional(),
  }),
  z.object({
    type: z.literal("activity"),
    sessionId: z.string(),
    message: z.string(),
    detail: z.string().optional(),
    category: z.string().optional(),
    input: z.unknown().optional(),
    output: z.unknown().optional(),
    surface: StudioOperatorSurfaceSchema.optional(),
  }),
  z.object({
    type: z.literal("assistant.delta"),
    sessionId: z.string(),
    delta: z.string(),
  }),
  z.object({
    type: z.literal("artifact.upserted"),
    sessionId: z.string(),
    artifact: z.record(z.string(), z.unknown()),
  }),
  z.object({
    type: z.literal("reasoning.summary"),
    sessionId: z.string(),
    summary: z.string(),
  }),
  z.object({
    type: z.literal("tool.started"),
    sessionId: z.string(),
    name: z.string(),
    input: z.unknown().optional(),
  }),
  z.object({
    type: z.literal("tool.completed"),
    sessionId: z.string(),
    name: z.string(),
    output: z.unknown().optional(),
  }),
  z.object({
    type: z.literal("sandbox.diff.updated"),
    sessionId: z.string(),
    summary: z.string(),
    files: z.array(z.object({
      path: z.string(),
      status: z.enum(["added", "modified", "deleted", "renamed"]),
    })),
  }),
  z.object({
    type: z.literal("validation.completed"),
    sessionId: z.string(),
    commandId: z.string(),
    exitCode: z.number().int(),
    output: z.string(),
  }),
  z.object({
    type: z.literal("approval.required"),
    sessionId: z.string(),
    approvalId: z.string(),
    action: z.enum(["publish_dashboard", "create_pr", "grant_credentials"]),
    title: z.string(),
    payload: z.unknown(),
  }),
  z.object({
    type: z.literal("turn.completed"),
    sessionId: z.string(),
  }),
  z.object({
    type: z.literal("error"),
    sessionId: z.string().optional(),
    message: z.string(),
  }),
]);
export type StudioOperatorServerEvent = z.infer<typeof StudioOperatorServerEventSchema>;

export function jsonResponse<T>(value: T, init?: ResponseInit) {
  return new Response(JSON.stringify(value), {
    ...init,
    headers: {
      "content-type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
}
