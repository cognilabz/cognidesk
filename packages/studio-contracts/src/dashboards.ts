import { z } from "zod";

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
  "cognidesk.configuration",
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
