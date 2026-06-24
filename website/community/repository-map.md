# Repository Map

This map explains where the major parts of the monorepo live and which docs to
update when behavior changes.

## Start here

| Path | What lives there | Update when |
|------|------------------|-------------|
| `website/` | Source for the public documentation site, built with MkDocs Material. | User-facing concepts, guides, examples, or API reference landing pages change. |
| `README.md` | Repository and SDK overview for GitHub visitors. | The top-level product shape, quick start, package list, or demo command changes. |
| `CONTEXT.md` | Canonical domain vocabulary. | A term, boundary, or avoided phrase changes. |
| `docs/adr/` | Architecture Decision Records. | A durable technical decision is made or replaced. |
| `docs/` | Release notes, provider metadata notes, and supporting engineering docs. | Internal engineering workflows or release/provider processes change. |

## Packages

| Path | Package | Responsibility |
|------|---------|----------------|
| `packages/core/` | `@cognidesk/core` | Runtime, agents, journeys, tools, knowledge contracts, runtime events, and transport-neutral execution. |
| `packages/http/` | `@cognidesk/http` | HTTP routes and SSE transport adapter for the core runtime. |
| `packages/model/` | `@cognidesk/model` | Model adapter helpers and role-based model sets. |
| `packages/react/` | `@cognidesk/react` | React hooks, chat widget primitives, voice client hooks, and browser-side event handling. |
| `packages/ui/` | `@cognidesk/ui` | Prebuilt UI components shared by Cognidesk frontends. |
| `packages/storage/` | `@cognidesk/storage` | Runtime storage adapters such as SQLite/libSQL and Postgres. |
| `packages/otel/` | `@cognidesk/otel` | OpenTelemetry spans, metrics, and runtime instrumentation helpers. |
| `integrations/{category}/{provider}/` | `@cognidesk/integration-{category}-{provider}` | Provider Integration packages for external providers. |
| `packages/integration-catalog/` | `@cognidesk/integration-catalog` | Provider catalog metadata for docs, Studio, and manifest-only discovery. |
| `packages/voice-websocket/` | `@cognidesk/voice-websocket` | Browser-facing voice WebSocket protocol and Node adapter surfaces. |
| `packages/journey-index-json/` | `@cognidesk/journey-index-json` | JSON-backed journey index support. |
| `packages/connections/` | `@cognidesk/connections` | Reviewed OpenAPI/MCP connection helpers for provider operation aliases. |
| `packages/test-harness/` | `@cognidesk/test-harness` | Scenario and provider conformance testing utilities. |
| `packages/evals/` | `@cognidesk/evals` | Eval-suite helpers layered on the test harness. |
| `packages/studio-contracts/` | `@cognidesk/studio-contracts` | Shared Studio/runtime schemas, target manifests, dashboards, and introspection contracts. |
| `packages/studio-adapter/` | `@cognidesk/studio-adapter` | Optional application adapter for Studio target introspection. |
| `packages/studio-operator-skills/` | `@cognidesk/studio-operator-skills` | Default operator skill assets used by Studio operator workflows. |

## Apps and operations

| Path | Responsibility |
|------|----------------|
| `apps/flight-demo/` | Reference flight-support application with journeys, tools, knowledge, HTTP transport, React UI, voice, and observability. |
| `apps/studio/` | Cognidesk Studio web application. |
| `apps/studio-operator-runtime/` | WebSocket operator runtime that executes Studio source-workspace tasks in disposable sandboxes. |
| `observability/` | Grafana dashboards and OpenTelemetry, Prometheus, Tempo, Loki, and Promtail configuration. |
| `deploy/studio/` | Studio deployment overlays and supporting deployment configuration. |
| `scripts/` | Release, package publishing, provider catalog, and docs-generation helpers. |

## Common workflows

| Task | Command |
|------|---------|
| Install dependencies | `pnpm install` |
| Run the main verification suite | `pnpm check` |
| Run a package test suite | `pnpm --filter @cognidesk/core test` |
| Run a package typecheck | `pnpm --filter @cognidesk/core typecheck` |
| Run the demo stack | `pnpm demo` |
| Refresh provider catalog data | `pnpm providers:catalog:data` |
| Generate provider catalog page and API docs | `pnpm providers:catalog:data && pnpm docs:generate` |
| Build the documentation site | `pnpm docs:build` |
| Serve the documentation site locally | `pnpm docs:serve` |

## Documentation ownership

- Put user-facing tutorials, concepts, examples, and reference landing pages in
  `website/`.
- Put public API explanations in the package source as TSDoc when they belong
  beside exported types. Regenerate the rendered API pages with
  `pnpm docs:generate`.
- Put demo-specific setup details in `apps/flight-demo/README.md`, then mirror
  the user-facing summary in `website/examples/flight-demo.md`.
- Put durable decisions in `docs/adr/` and link them from related docs.
- Keep generated output, build caches, `.next/`, `.turbo/`, coverage, and other
  derived artifacts out of hand-written documentation changes.

## Review checklist

- New public package exports have TSDoc or a nearby guide explaining their role.
- New docs pages are linked from `mkdocs.yml`.
- Examples include required environment variables and the shortest runnable
  command.
- Changes that affect setup or generated docs include the relevant verification
  command in the pull request.
