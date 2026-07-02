# Studio Dashboard Authoring

Dashboards are browser-sandboxed React artifacts. They can run arbitrary browser
code inside the sandbox, but they must access data through typed Studio data
layer capabilities instead of direct credentials or unrestricted network calls.

Create dashboards as versioned artifacts with:

- A title, slug, and target id.
- React component code with a stable exported `Dashboard` entry.
- Data queries and captured sample datasets in the full
  `StudioDashboardDataset` shape: `{ id, title, description?, mode?,
  refreshMs?, source:
  { capability, targetId, params }, capturedAt, data }`.
- `mode: "live"` for datasets the component should refresh through the
  Dashboard Data Layer, and `mode: "static"` for fixed user-provided or captured
  sample data.
- A render `spec` with `{ layout, summary, widgets }` describing the requested
  metric cards, charts, tables, and insight blocks. Widget kinds are `metric`,
  `line`, `bar`, `donut`, `table`, and `insight`.
- A fallback summary for failed rendering.

Publishing a dashboard requires an explicit authorized user action but does not
require a GitHub PR.

Use `cognidesk.conversations` for live conversation lists. Do not reuse a demo
dashboard shape when the user asked for different cards, graphs, or metrics.
Use `telemetry.traces` for trace/span dashboards; when span attributes matter,
request complete traces through `traceId`, `traceIds`, or `includeTraceData` so
flat span rows and raw trace payloads are available.
Metric widgets can aggregate generic row paths with `aggregate: "sum" | "avg" |
"max" | "count" | "countNonNull"` plus `valuePath`, or shorthand such as
`sum(attributes["usage.total_tokens"])`.
Do not invent unsupported computed paths such as `$computed.rows[*].total`.
For exact conversation Journey counters in renderer specs, use metric value paths
such as `$metrics.journeyCounts.human-handoff`; reserve
`$metrics.handoverConversations` for broader handoff/escalation-related counts.
