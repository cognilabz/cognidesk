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

`typedoc.json` includes generated reference coverage for every provider package
under `integrations/{category}/{provider}` by reading each built
`dist/index.d.ts` and `dist/manifest.d.ts`, plus `dist/runtime.d.ts` when a
runtime subpath exists. New provider packages must be built before docs
generation so those declaration files exist.

## Reproducible MkDocs build

Use the checked-in Python requirements instead of a globally installed MkDocs.
The requirements file pins MkDocs Material and the imaging dependencies used by
the `social` plugin.

```bash
python3 -m venv /tmp/cognidesk-docs-venv
. /tmp/cognidesk-docs-venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements-docs.txt
pnpm build
pnpm docs:generate
pnpm docs:build
```

If a docs build changes generated API pages unexpectedly, rebuild the package
declarations first with `pnpm build`, then rerun `pnpm docs:generate`. Do not
edit `website/api-reference/generated/**` by hand.

## Verification

Before publishing provider metadata or generated docs, run:

```bash
pnpm providers:catalog:data
pnpm providers:catalog
pnpm providers:architecture
pnpm provider-packages:check
pnpm build
pnpm docs:generate
pnpm docs:build
```
