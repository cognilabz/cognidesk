# Provider Metadata and Generated Docs

Provider packages live under `integrations/{category}/{provider}` and publish as
`@cognidesk/integration-{category}-{provider}`. Each package owns its runtime
code, manifest, tests, generated provider slices, and release metadata.

Generated provider source is committed inside the owning provider package. It is
not produced during `pnpm install`, `npm install`, or consumer installation.
When a provider package contains generated files, keep Cognidesk behavior in the
handwritten runtime, contracts, manifest, readiness, webhook, and policy helpers.
Generated files should mirror an official provider spec or a reviewed package
fixture only.

The Provider Integration Catalog is generated from manifest-only exports:

```bash
pnpm providers:catalog:data
pnpm providers:catalog
```

`pnpm providers:catalog:data` refreshes
`packages/integration-catalog/src/catalog.generated.ts`. `pnpm
providers:catalog` writes `website/guides/provider-integrations-catalog.md`.
Do not edit either generated file by hand; update the provider manifest and
regenerate.

The API reference is generated from built declaration files:

```bash
pnpm build
pnpm docs:generate
```

Run `pnpm providers:catalog:data` before `pnpm docs:generate` when provider
metadata changed.

## Verification

Before publishing provider metadata or generated docs, run:

```bash
pnpm providers:catalog:data
pnpm providers:catalog
pnpm providers:architecture
pnpm provider-packages:check
pnpm build
pnpm docs:generate
```

Run `pnpm docs:build` when MkDocs is installed in the environment.
