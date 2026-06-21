# Releasing SDK and Provider packages

The platform SDK packages use a fixed-version release train. Every publishable
package in `packages/*` must share the same version, and internal
`@cognidesk/*` platform dependencies are pinned to that exact train version.
Provider packages under `integrations/*/*` are publishable workspaces too, but
they keep independent package versions.

Provider packages are independent. A package marked with
`cognidesk.providerPackage: true`, `cognidesk.kind: "provider-package"`, or
`cognidesk.release: "independent-provider"` is excluded from the fixed train and
is released under its own version.

Publishable packages are discovered from package metadata: `private` must not be
`true`, and `publishConfig` must be present. Release tooling discovers
publishable packages from `packages/*` and `integrations/*/*`; app workspaces are
included in pnpm workspace discovery but are not publishable.

## Fixed-train dev releases

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

## Fixed-train stable releases

Stable releases are intentional and use the npm `latest` dist-tag. Prepare a
release by bumping the fixed SDK train:

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
pnpm release:verify-packages -- --fail-size-budget
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
pnpm build
pnpm providers:architecture
pnpm provider-packages:check
pnpm release:verify-packages -- --fail-size-budget
pnpm providers:check
```

The legacy `@cognidesk/integrations` workspace remains a staging source while
first-wave packages from #23-#25 and provider-family packages from #29-#43 move
out under `integrations/{category}/{provider}`. Its guardrails still check that
normal runtime dependencies stay limited, provider SDK runtime imports do not
leak into catalog/manifest-only entry points, package-size budgets fail CI,
old-import compatibility bridges are not added, runtime source does not scan
`node_modules` to discover providers, raw SDK breadth is not counted as adapter
coverage, and generated provider surfaces are not produced from install-time
hooks.

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

First-time provider package publication is intentionally explicit. The fixed SDK
release prepare step does not bump independent provider packages, but the publish
workflow includes publishable provider workspaces when their current version is
not already on npm. Maintainers can also publish a provider package from its
package directory after it has passed `pnpm provider-packages:check` and
`npm pack --dry-run --json` shows only the intended `dist` artifacts.

Use the first-wave or provider-family tracker for the package being published:
#23 Gmail, #24 Outlook/Teams, #25 Slack/Discord, #29 email, #30 ecommerce, #31
marketplace, #32 Meta, #33 RCS/TikTok, #34 review, #35 helpdesk ticketing, #36
CRM ticketing, #37 enterprise service clouds, #38 contact-center core, #39
contact-center long tail, #40 cloud speech, #41 voice/SMS, #42 video, or #43
local/protocol.

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
