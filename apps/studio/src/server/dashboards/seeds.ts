import { StudioDashboardSpecSchema, type StudioDashboardDataset } from "@cognidesk/studio-contracts";

export function demoTelemetryDashboardSeeds(targetId: string) {
  const capturedAt = new Date().toISOString();
  const metrics = (id: string, title: string, description: string, params: Record<string, unknown>): StudioDashboardDataset => ({
    id,
    title,
    description,
    mode: "live",
    refreshMs: 15000,
    source: {
      capability: "telemetry.metrics",
      targetId,
      params,
    },
    capturedAt,
    data: [],
  });
  const traces = (id: string, title: string, description: string, params: Record<string, unknown>): StudioDashboardDataset => ({
    id,
    title,
    description,
    mode: "live",
    refreshMs: 20000,
    source: {
      capability: "telemetry.traces",
      targetId,
      params,
    },
    capturedAt,
    data: { traces: [] },
  });

  return [
    {
      title: "OTEL Support Workload",
      slug: "otel-support-workload",
      description: "Live synthetic support workload emitted by the flight demo into the local OTEL stack.",
      datasets: [
        metrics("demo-support-rate", "Support request rate", "Prometheus range query for synthetic support requests by route.", {
          query: "sum by (flight_demo_route) (rate(cognidesk_demo_support_requests_total[5m]))",
          rangeSeconds: 3600,
          step: 60,
        }),
        metrics("demo-queue-depth", "Queue depth", "Current synthetic queue depth by route.", {
          query: "cognidesk_demo_queue_depth",
        }),
        metrics("demo-sla-minutes", "SLA estimate", "Current synthetic SLA wait estimate by support tier.", {
          query: "cognidesk_demo_sla_minutes",
        }),
      ],
      spec: StudioDashboardSpecSchema.parse({
        layout: "operations",
        summary: "Live OTEL metrics from the local flight demo support workload.",
        widgets: [
          {
            id: "support-rate",
            title: "Support request rate",
            kind: "line",
            datasetId: "demo-support-rate",
            xPath: "time",
          },
          {
            id: "queue-depth",
            title: "Queue depth by route",
            kind: "bar",
            datasetId: "demo-queue-depth",
            labelPath: "flight_demo_route",
            valuePath: "value",
          },
          {
            id: "sla-minutes",
            title: "SLA minutes by tier",
            kind: "bar",
            datasetId: "demo-sla-minutes",
            labelPath: "flight_demo_support_tier",
            valuePath: "value",
          },
          {
            id: "metric-samples",
            title: "Metric samples",
            kind: "table",
            datasetId: "demo-queue-depth",
            limit: 8,
            columns: [
              { label: "Route", path: "flight_demo_route" },
              { label: "Channel", path: "flight_demo_channel" },
              { label: "Priority", path: "flight_demo_priority" },
              { label: "Value", path: "value" },
            ],
          },
        ],
      }),
    },
    {
      title: "OTEL Trace Latency",
      slug: "otel-trace-latency",
      description: "Live Tempo trace search for synthetic support-case spans emitted by the flight demo.",
      datasets: [
        traces("demo-traces", "Flight demo traces", "Tempo search for recent flight demo spans.", {
          serviceName: "cognidesk-flight-demo",
        }),
      ],
      spec: StudioDashboardSpecSchema.parse({
        layout: "timeseries",
        summary: "Synthetic trace latency and span volume from Tempo.",
        widgets: [
          {
            id: "trace-count",
            title: "Recent traces",
            kind: "metric",
            datasetId: "demo-traces",
            tone: "violet",
          },
          {
            id: "trace-duration",
            title: "Trace duration by root span",
            kind: "bar",
            datasetId: "demo-traces",
            labelPath: "name",
            valuePath: "durationMs",
          },
          {
            id: "trace-spans",
            title: "Span count by trace",
            kind: "bar",
            datasetId: "demo-traces",
            labelPath: "name",
            valuePath: "spanCount",
          },
          {
            id: "trace-table",
            title: "Recent trace search results",
            kind: "table",
            datasetId: "demo-traces",
            limit: 10,
            columns: [
              { label: "Trace", path: "name" },
              { label: "Duration", path: "durationMs" },
              { label: "Spans", path: "spanCount" },
              { label: "Status", path: "status" },
            ],
          },
        ],
      }),
    },
  ];
}
