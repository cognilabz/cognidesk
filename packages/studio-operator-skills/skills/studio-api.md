# Cognidesk Studio API

Use the Studio API as the source of truth for Studio-owned state: users,
sessions, target manifests, dashboard drafts, artifact versions, publication
events, credential grants, validation runs, and audit records.

Do not mutate target runtime state directly. Runtime inspection belongs to the
Studio Adapter and all mutable Studio artifacts must be saved back through
Studio APIs so versions, RBAC, and audit logs remain intact.

When answering, cite concrete API objects such as target ids, dashboard ids,
artifact keys, validation ids, session ids, and audit ids.

Use the Studio API base URL and Authorization header supplied in the active
runtime instructions. Useful v1 endpoints:

- `GET /api/studio/introspection` explains the compiled Agent, Journeys,
  Tools, Knowledge, Widgets, and prompt-visible instructions.
- `GET /api/studio/configuration` returns read-only metadata derived from the
  compiled SDK target, such as channel policy details exposed by the Agent
  definition. It is not a separate Studio-owned target config.
- `POST /api/studio/data` returns generic Studio datasets for reporting,
  textual analysis, and dashboards. Query with
  `{ capability, targetId, params }`. For `telemetry.traces`, pass
  `params.traceId` or `params.traceIds` for complete trace payloads, or
  `params.includeTraceData: true` with a search query to hydrate matching
  traces. The result preserves `rawTraces` and exposes flat `spans` with
  `attributes`, `resourceAttributes`, `scopeAttributes`, `events`, and `links`.
- `GET /api/studio/dashboards` lists saved dashboard artifacts.
- `GET /api/studio/conversations` lists recent Studio conversation summaries.
- `POST /api/studio/dashboards` saves a dashboard draft with `title`, `slug`,
  `description`, `code`, `datasets`, `spec`, and `fallback`. Each dataset must
  be:
  `{ id, title, description?, mode?, refreshMs?, source: { capability, targetId, params },
  capturedAt, data }`. `mode` is `"live"` for refreshable bindings and
  `"static"` for fixed captured inputs. `source.capability` must be one of
  `telemetry.traces`, `telemetry.metrics`, `cognidesk.agent`,
  `cognidesk.conversations`, `cognidesk.events`, or `cognidesk.snapshots`.
- `POST /api/studio/dashboard-data` is a legacy alias for `/api/studio/data`.
- `POST /api/studio/dashboards/:id/publish` publishes a saved draft only after
  the user has explicitly asked for publication.
- `DELETE /api/studio/dashboards/:id` deletes a saved dashboard draft or
  published dashboard from Studio metadata and artifact storage.
