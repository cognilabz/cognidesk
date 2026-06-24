# Releasing SDK and Provider packages

Platform SDK packages in `packages/*` use a fixed-version release train.
Provider packages under `integrations/*/*` are publishable workspaces with
independent versions.

Publishable packages are discovered from package metadata: `private` must not be
`true`, and `publishConfig` must be present. Release tooling discovers packages
from `packages/*` and `integrations/*/*`; apps are workspace members but are not
published.

## Dev releases

Every push to `main` publishes the platform SDK train to the npm `dev` dist-tag.
Provider packages are included when their current version is not already present
on npm.

Preview the next dev version locally without changing files:

```bash
pnpm release:prepare-dev -- --dry-run
```

## Stable releases

Stable releases use the npm `latest` dist-tag and require a matching `vX.Y.Z`
tag. Prepare a platform SDK release with:

```bash
pnpm release:prepare
```

For a non-interactive bump:

```bash
pnpm release:prepare -- --bump minor
```

Before tagging a stable release, run:

```bash
pnpm check
pnpm build
pnpm release:verify-packages -- --fail-size-budget
```

`pnpm release:verify-packages` expects built `dist` output. It verifies public
export paths for SDK packages and provider packages from a temporary
consumer-style `node_modules`, then prints per-package `dist` and declaration
chunk size reports. CI runs the same check with `--fail-size-budget`.

## Provider package artifacts

Provider API slices are reviewed and committed inside the owning provider
package. They are never generated during install. When provider metadata or
generated files change, review the package diff and run:

```bash
pnpm providers:catalog:data
pnpm providers:catalog
pnpm providers:architecture
pnpm provider-packages:check
pnpm build
pnpm release:verify-packages -- --fail-size-budget
```

## Independent provider releases

Provider packages use their own versions because providers can add coverage,
change optional SDK peer dependencies, or update generated artifacts without
forcing a platform-wide SDK release.

A provider package release should include:

- a package manifest with `cognidesk.providerPackage: true` or
  `cognidesk.release: "independent-provider"`
- a manifest-only export, usually `./manifest`, that does not import provider
  SDK runtime code
- application-loadable runtime exports, usually `./runtime`, for provider SDK or
  generated API code
- package-size budgets under `cognidesk.packageSizeBudgetBytes`
- `publishConfig.access: "public"` and the correct repository directory

For a first publish:

```bash
pnpm build
pnpm providers:architecture
pnpm provider-packages:check
cd integrations/email/gmail
npm publish --access public --tag latest --provenance
```

For later provider-only releases, bump only that provider package and any exact
internal dependency pins it owns. Do not run `pnpm release:prepare` unless the
fixed SDK train is also being released.
