# Cognidesk stabilization handoff

Use the current code, package manifests, tests, generated catalog, and build
output as the source of truth.

Provider runtime packages live under `integrations/{category}/{provider}` and
publish as `@cognidesk/integration-{category}-{provider}`. `packages/integration-kit`
contains shared authoring helpers. `packages/integration-catalog` contains the
metadata-only catalog. Applications import and register provider runtimes
explicitly.

The CI surface is intentionally small: the publish workflow installs
dependencies, prepares and verifies releases, builds, verifies package artifacts,
and publishes. Local stabilization checks are:

```bash
pnpm providers:catalog:data
pnpm providers:catalog
pnpm providers:architecture
pnpm provider-packages:check
pnpm build
pnpm docs:generate
pnpm docs:build
pnpm release:verify-packages -- --fail-size-budget
git diff --check
```

Flight Demo provider tokens can be supplied through `.env` for local smoke
tests. Keep generated docs in sync after manifest changes.
