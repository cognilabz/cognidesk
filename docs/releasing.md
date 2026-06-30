# Releasing SDK, Studio, and Provider packages

Platform SDK packages in `packages/*` use a fixed-version release train.
Provider packages under `integrations/*/*` are publishable workspaces with
independent versions. Publishable app packages under `apps/*`, such as
`@cognidesk/studio` and `@cognidesk/studio-operator-runtime`, can also be
released independently.

Publishable packages are discovered from package metadata: `private` must not be
`true`, and `publishConfig` must be present. Release tooling discovers packages
from `packages/*`, `integrations/*/*`, and `apps/*`. Private apps remain
workspace members only.

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

The manual `Publish SDK and Provider Packages` GitHub Actions workflow uses npm
trusted publishing through GitHub OIDC, not an npm token. For a stable SDK train
publish, the workflow prepares the release version, runs verification, commits
the package version changes to `main`, publishes packages to npm, and then
creates the GitHub release. The release commit intentionally happens before npm
publish so branch-protection failures stop the run before any package is
published. Single-package publishes can target an independent provider package
or an app package such as `@cognidesk/studio-operator-runtime`.

If `main` requires pull requests, the repository ruleset must explicitly allow
the release workflow actor to bypass that rule for this manual release path.
Without that repository-level bypass, the workflow fails before npm publish and
the release version must be merged through a normal pull request before
publishing.

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

## Independent Studio app releases

Studio service packages are app packages, not part of the fixed SDK train. A
Studio app release should include:

- a package manifest with `publishConfig.access: "public"`
- a fixed package version that has not already been published
- materialized internal workspace dependencies in the publish manifest
- package README text that starts with the exact package name, such as
  `# @cognidesk/studio-operator-runtime`
- verification that the app builds and the publish smoke checks pass

For a Studio package release, run verification locally:

```bash
pnpm build
pnpm release:verify-packages -- --package @cognidesk/studio-operator-runtime --fail-size-budget
pnpm release:verify-consumer-install -- --package @cognidesk/studio-operator-runtime
pnpm release:publish -- --package @cognidesk/studio-operator-runtime --tag latest --dry-run
```

For the real publish, trigger the manual GitHub Actions workflow with
`publish_scope=provider` and the app package name in `provider_package`, for
example `@cognidesk/studio-operator-runtime`. The workflow's single-package
input name is provider-oriented for historical reasons, but it also accepts
publishable app package names. Local npm-token publishing is only a fallback for
bootstrapping or recovering a package when trusted publishing is not available.
Prefer the GitHub Actions workflow so npm provenance is attached to the release.
