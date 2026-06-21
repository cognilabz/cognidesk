# Releasing SDK packages

The platform SDK packages use a fixed-version release train. Every publishable
package in `packages/*` must share the same version, and internal
`@cognidesk/*` platform dependencies are pinned to that exact train version.
Provider packages under `integrations/*/*` are publishable workspaces too, but
they keep independent package versions.

Publishable packages are discovered from package metadata: `private` must not be
`true`, and `publishConfig` must be present. Release tooling discovers
publishable packages from `packages/*` and `integrations/*/*`; app workspaces are
included in pnpm workspace discovery but are not publishable.

## Dev releases

Every push to `main` publishes the platform SDK train to the npm `dev` dist-tag.
Nested provider packages are included in the publish plan when their current
version is not already present on npm, including first-time provider packages.

Committed package versions stay stable, for example `0.0.2`. In CI, the publish
workflow temporarily rewrites package manifests to the next patch prerelease:

```text
0.0.2       -> committed stable source version
0.0.3-dev.N -> generated dev publish version
```

`N` is derived from versions already published to npm. If `0.0.3-dev.0` and
`0.0.3-dev.1` exist, the next `main` publish is `0.0.3-dev.2`.

Install the early-access channel with:

```bash
pnpm add @cognidesk/core@dev
```

Preview the next dev version locally without changing files:

```bash
pnpm release:prepare-dev -- --dry-run
```

## Stable releases

Stable releases are intentional and use the npm `latest` dist-tag. Prepare a
release by bumping the whole SDK train:

```bash
pnpm release:prepare
```

For a non-interactive bump:

```bash
pnpm release:prepare -- --bump minor
```

The script updates platform package versions, exact internal platform dependency
versions, and `pnpm-lock.yaml`. Provider package versions are not changed by the
platform release train. It then prints the commit and tag commands.

Stable publishing requires a matching `vX.Y.Z` tag. If package manifests say
`0.0.3`, the release tag must be `v0.0.3`.

```bash
pnpm check
pnpm build
pnpm release:verify-packages
git add packages pnpm-lock.yaml
git commit -m "Release SDK 0.0.3"
git tag v0.0.3
git push origin main v0.0.3
```

`pnpm release:verify-packages` expects built `dist` output. It verifies the
public export paths for `@cognidesk/core`, `@cognidesk/http`,
`@cognidesk/react`, the legacy `@cognidesk/integrations` package when present,
and every nested provider package from a temporary consumer-style
`node_modules`. It also prints a per-package `dist` and declaration chunk size
report. CI runs the same check with `--fail-size-budget`, using default budgets
of 100 MiB per package and 7 MiB per declaration chunk unless a package sets
`cognidesk.sizeBudget` in its manifest.

When the release commit lands on `main`, the dev workflow starts the next dev
line automatically. For example, after `0.0.3` is committed, `main` publishes
`0.0.4-dev.0`.

## Provider-generated surfaces

Provider API surfaces are regenerated explicitly by maintainers, not during
`npm install`, `pnpm install`, or consumer package installation. Install-time
generation would make SDK installs network-dependent and harder to audit.

List available provider generators:

```bash
pnpm providers:generate:list
```

Regenerate provider surfaces after checking the upstream provider docs/specs:

```bash
pnpm providers:generate
```

That command runs the provider generator scripts, hardens generated request and
response typing, and then splits generated endpoint clients into smaller
resource/tag chunks behind the stable `*-client.generated.ts` compatibility
files. The generated schema DTO files may remain shared when provider component
types are cross-cutting.

For a local split-only refresh after generated files already exist:

```bash
pnpm providers:split-generated
```

Before releasing a provider-generation change, review generated diffs and run:

```bash
pnpm --filter @cognidesk/integrations build
pnpm release:verify-packages
pnpm providers:check
```

`@cognidesk/integrations` uses a build-only `prepack` hook so packed artifacts
contain current `dist` output. Its test guardrails also check that normal
runtime dependencies stay limited to internal SDK packages, provider SDKs remain
optional peers backed by dev dependencies for local builds, published `dist`
stays under 100 MiB, and declaration chunks stay under 7 MiB. The integrations
build cleans stale artifacts and does not publish source maps because the
generated provider surface is already large. It must not run networked provider
generation from install-time hooks.
