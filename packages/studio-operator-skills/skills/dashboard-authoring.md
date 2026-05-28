# Studio Dashboard Authoring

Dashboards are browser-sandboxed React artifacts. They can run arbitrary browser
code inside the sandbox, but they must access data through typed Dashboard Data
Layer capabilities instead of direct credentials or unrestricted network calls.

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
