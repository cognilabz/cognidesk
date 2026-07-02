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
export const StudioDataCapabilitySchema = StudioDashboardDataCapabilitySchema;
export type StudioDataCapability = StudioDashboardDataCapability;

export const StudioDashboardDataQuerySchema = z.object({
  capability: StudioDashboardDataCapabilitySchema,
  targetId: z.string(),
  params: z.record(z.string(), z.unknown()).default({}),
});
export type StudioDashboardDataQuery = z.infer<typeof StudioDashboardDataQuerySchema>;
export const StudioDataQuerySchema = StudioDashboardDataQuerySchema;
export type StudioDataQuery = StudioDashboardDataQuery;

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
export const StudioDatasetSchema = StudioDashboardDatasetSchema;
export type StudioDataset = StudioDashboardDataset;

export const StudioDashboardMetricAggregateSchema = z.enum(["sum", "avg", "max", "count", "countNonNull"]);
export type StudioDashboardMetricAggregate = z.infer<typeof StudioDashboardMetricAggregateSchema>;

export const STUDIO_DASHBOARD_PATH_SYNTAX = [
  "Row fields use dot paths such as totalTokens, usage.totalTokens, or metrics.modelCalls.",
  "Attribute keys containing dots may use bracket syntax such as attributes[\"gen_ai.request.model\"].",
  "Metric widgets may aggregate rows with aggregate: sum|avg|max|count|countNonNull plus valuePath, or valuePath shorthand such as sum(totalTokens).",
  "Renderer-computed conversation metrics use $metrics.<name>, for example $metrics.totalConversations or $metrics.journeyCounts.human-handoff.",
  "Unsupported computed paths such as $computed.rows[*].total are rejected.",
] as const;

export const StudioDashboardWidgetSchema = z.object({
  id: z.string(),
  title: z.string(),
  kind: z.enum(["metric", "line", "bar", "donut", "table", "insight"]),
  datasetId: z.string().optional(),
  description: z.string().optional(),
  valuePath: z.string().optional(),
  aggregate: StudioDashboardMetricAggregateSchema.optional(),
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
}).passthrough().superRefine((widget, ctx) => {
  const pathFields = [
    ["valuePath", widget.valuePath],
    ["labelPath", widget.labelPath],
    ["xPath", widget.xPath],
    ["yPath", widget.yPath],
  ] as const;
  for (const [field, path] of pathFields) {
    if (!path) continue;
    const message = validateStudioDashboardPath(path);
    if (message) ctx.addIssue({ code: "custom", path: [field], message });
  }
  widget.series?.forEach((series, index) => {
    const message = validateStudioDashboardPath(series.path);
    if (message) ctx.addIssue({ code: "custom", path: ["series", index, "path"], message });
  });
  if (widget.aggregate) {
    if (widget.kind !== "metric") {
      ctx.addIssue({ code: "custom", path: ["aggregate"], message: "Dashboard row aggregation is supported on metric widgets." });
    }
    if (widget.aggregate !== "count" && !widget.valuePath) {
      ctx.addIssue({ code: "custom", path: ["valuePath"], message: `Metric aggregate '${widget.aggregate}' requires a valuePath.` });
    }
  }
  if (widget.kind !== "metric" && widget.valuePath && parseMetricAggregateExpression(widget.valuePath)) {
    ctx.addIssue({ code: "custom", path: ["valuePath"], message: "Aggregation expression valuePath is supported on metric widgets." });
  }
});
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

export function validateStudioDashboardPath(path: string): string | null {
  const trimmed = path.trim();
  if (!trimmed) return "Dashboard path cannot be empty.";
  const aggregateExpression = parseMetricAggregateExpression(trimmed);
  if (aggregateExpression) return validateDashboardRowPath(aggregateExpression.path);
  if (trimmed.startsWith("$")) {
    if (trimmed.startsWith("$metrics.")) {
      const metricPath = trimmed.slice("$metrics.".length);
      return validateDashboardRowPath(metricPath);
    }
    return `Unsupported dashboard path '${path}'. ${STUDIO_DASHBOARD_PATH_SYNTAX.join(" ")}`;
  }
  return validateDashboardRowPath(trimmed);
}

function parseMetricAggregateExpression(expression: string) {
  const open = expression.indexOf("(");
  if (open <= 0 || !expression.endsWith(")")) return null;
  const aggregate = expression.slice(0, open);
  if (!StudioDashboardMetricAggregateSchema.safeParse(aggregate).success) return null;
  const path = expression.slice(open + 1, -1).trim();
  if (!path) return null;
  return { aggregate, path };
}

function validateDashboardRowPath(path: string): string | null {
  if (!path.trim()) return "Dashboard row path cannot be empty.";
  if (path.includes("*")) return `Unsupported dashboard path '${path}'. Wildcard paths are not part of the Studio dashboard contract.`;
  if (path.startsWith("$")) return `Unsupported dashboard path '${path}'. Only $metrics.<name> renderer metrics may use a $ prefix.`;
  const parts = parseDashboardPath(path);
  if (!parts?.length) return `Unsupported dashboard path '${path}'. ${STUDIO_DASHBOARD_PATH_SYNTAX.join(" ")}`;
  return null;
}

function parseDashboardPath(path: string): string[] | null {
  const parts: string[] = [];
  let current = "";
  for (let index = 0; index < path.length; index += 1) {
    const char = path[index]!;
    if (char === ".") {
      if (current) {
        parts.push(current);
        current = "";
        continue;
      }
      if (path[index - 1] === "]") continue;
      return null;
    }
    if (char === "[") {
      if (current) {
        parts.push(current);
        current = "";
      }
      const end = path.indexOf("]", index + 1);
      if (end < 0) return null;
      const content = path.slice(index + 1, end).trim();
      if (!content) return null;
      const quoted = (content.startsWith("\"") && content.endsWith("\"")) || (content.startsWith("'") && content.endsWith("'"));
      parts.push(quoted ? content.slice(1, -1) : content);
      index = end;
      continue;
    }
    current += char;
  }
  if (current) parts.push(current);
  return parts.every((part) => part.length > 0) ? parts : null;
}
