# Studio Dashboard Authoring

Dashboards are browser-sandboxed React artifacts. They can run arbitrary browser
code inside the sandbox, but they must access data through typed Dashboard Data
Layer capabilities instead of direct credentials or unrestricted network calls.

Create dashboards as versioned artifacts with:

- A title, slug, and target id.
- React component code with a stable exported `Dashboard` entry.
- Data queries and captured sample datasets.
- A fallback summary for failed rendering.

Publishing a dashboard requires an explicit authorized user action but does not
require a GitHub PR.
