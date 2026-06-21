---
Status: accepted
Supersedes: ADR-0081, ADR-0084
---

# Split provider integrations into SDK-backed packages

Cognidesk will replace the `@cognidesk/integrations` monolith direction with independently installable provider/category packages, a small shared integration kit, and a separate metadata-only provider catalog. Official Provider Integrations are normalized support adapters around provider clients. They are not replacement SDKs for the provider, and they must not make broad full-platform claims unless the package has explicit evidence for that exact provider API surface.

Official provider runtime packages are named `@cognidesk/{category}-{provider}`. Examples include `@cognidesk/email-gmail`, `@cognidesk/workplace-slack`, `@cognidesk/ticketing-zendesk`, `@cognidesk/voice-twilio`, and `@cognidesk/contact-center-genesys-cloud`. Create a separate package whenever an integration has its own external dependency graph, runtime requirements, credential/setup lifecycle, generated API surface, or release lifecycle. Provider-neutral infrastructure packages such as Core, HTTP, storage, model, React, UI, OpenTelemetry, connections, evals, test-harness, Studio packages, and `voice-websocket` remain separate from provider runtime packages.

The shared integration kit owns adapter authoring helpers, manifest builders, conformance wiring, category profile helpers, capability vocabulary support, provider-object typing helpers, credential/readiness primitives, and raw-client escape-hatch conventions. It must stay provider-neutral and must not depend on official provider SDKs. Core may continue to own foundational provider-neutral contracts, but executable provider runtime code belongs in provider packages, not Core and not the kit.

The catalog is metadata-only. It can aggregate manifests, package names, categories, coverage, capabilities, setup requirements, evidence, and documentation links, but it must not import provider runtime clients or provider SDKs. Installing a catalog must not install Twilio, Slack, Google, Zendesk, Microsoft, or any other provider client as a transitive runtime dependency.

## SDK-first policy

Provider packages wrap the official maintained provider SDK when it is suitable for the package's runtime target, authentication model, API coverage, release behavior, license, and bundle/runtime constraints. A provider package should expose Cognidesk support-adapter operations and manifest metadata while letting SDK users access the underlying provider capability through documented raw-client escapes when needed.

Use direct HTTP, generated OpenAPI/Discovery slices, or a small raw client only when no viable official SDK exists, when the official SDK is unmaintained or incompatible with Cognidesk's supported runtime, when a provider publishes official machine-readable specs that are a better source of truth for the selected surface, or when the package intentionally covers a protocol/local adapter rather than a vendor SDK. Generated/direct clients must name the provider source, version or revision when known, generation date, selected surface, and known gaps.

Provider packages may depend on their official SDK as a normal package dependency when that SDK is the runtime transport. Use optional peers only for genuinely optional secondary surfaces. Missing provider credentials, disabled provider products, insufficient scopes, or missing optional transport dependencies must fail closed with provider-specific setup/readiness errors.

## Adapter coverage vs provider-client coverage

Manifest coverage must separate Cognidesk adapter coverage from provider SDK or raw-client coverage.

- Adapter coverage describes which Cognidesk support capabilities are normalized and conformance-tested, such as `send`, `receive`, `draft`, `handoff`, `transfer`, or provider-object operations.
- Provider-client coverage describes which external provider API surface is reachable through the package's SDK/raw client, such as a selected REST slice, a generated full API catalog, or an official SDK surface.
- A package can have narrow adapter coverage and broad raw-client coverage. For example, a Zendesk package may normalize ticket read/write support workflows while also exposing an official SDK or generated raw client for more Zendesk endpoints.
- `full-provider-api` claims require official evidence, operation/function catalogs or equivalent SDK coverage evidence, zero known missing operations inside the claimed scope, and conformance checks that keep the wording from drifting.

The manifest should make both layers visible so Studio, docs, and SDK users do not mistake a friendly support helper for a complete replacement provider SDK.

## Extension operations

Provider-specific extension operations are allowed when generic channel capabilities would hide important provider behavior. Extensions must be schema-described, policy-governed, conformance-visible, and tied to explicit provider objects, side effects, audience, privacy, and setup requirements. They must not become private magic strings or unreviewed shortcuts around capability checks.

Extensions that create external state, contact a customer, affect routing/handoff, expose sensitive data, create support artifacts, or change provider configuration must be declared in the provider manifest and visible to Studio when the active target has the required scope.

## Runtime registration

Provider runtimes are registered explicitly by the application or Studio target configuration. Cognidesk must not auto-load all installed provider packages, scan dependencies for executable providers, or import providers from the catalog at runtime. The catalog can help users discover packages, but execution requires an explicit package import/registration and provider configuration.

This keeps dependency loading, credentials, scopes, webhook handling, outbound contact policy, and provider readiness under SDK-user control.

## Versioning and migration

Each provider package versions independently because providers change SDKs, API versions, authentication, scopes, product entitlements, webhook signatures, generated surfaces, and runtime requirements on their own schedules. Shared kit and catalog changes use their own version cadence. Provider migration work should avoid forcing unrelated provider releases.

Old `@cognidesk/integrations`, `@cognidesk/integrations/<category>/<provider>`, and aggregate-package imports are removed rather than bridged. Do not ship a compatibility package, old-import shim, subpath re-export, temporary legacy bridge package, or bridge phase for this migration. Any prior migration plan that proposed a temporary old-import bridge is rejected by this ADR and by issue #27's cleanup scope. Breaking imports should point developers at the new provider package and explicit registration path.

Migration support should be documentation and codemods, not runtime compatibility. The migration guide should map old aggregate imports to new provider packages, show explicit runtime registration, call out removed providers or changed package names, and provide codemods for mechanical import rewrites where the new package has equivalent adapter coverage. When behavior changes, the codemod must leave a review marker or fail closed rather than silently changing runtime semantics.

## Consequences

ADR-0081 is superseded. Official executable provider runtimes no longer live in one aggregate `@cognidesk/integrations` package, and the root package is not retained as a runtime discovery or compatibility bridge.

ADR-0084 is superseded where it places concrete category profiles in the aggregate integration package. Concrete profiles and helper defaults belong in the shared integration kit or metadata-only catalog as provider-neutral metadata; executable provider behavior remains in provider packages.

ADR-0074's category-provider naming direction is restored and expanded by this decision, but ADR-0085 is the current source of truth because it also defines SDK-first wrapping, raw-client policy, catalog/runtime separation, explicit registration, and versioning.

Provider-neutral contracts, Channel Capabilities, Provider Manifests, Provider Objects, coverage metadata, conformance evidence, and Studio visibility remain required. The package split changes executable distribution boundaries; it does not weaken provider setup, policy, privacy, conformance, or capability rules.

## Follow-up documentation targets

The current docs still describe the superseded aggregate package and should be migrated with the package/tooling work:

- `README.md`: package table entry for `@cognidesk/integrations` and category/provider subpath examples.
- `website/guides/provider-packages.md`: Provider Integrations guide, category import examples, generated-code workflow, and examples that use `@cognidesk/integrations/<category>/<provider>`.
- `website/guides/provider-integrations-catalog.md` and `scripts/generate-provider-integration-catalog.mjs`: generated catalog import/package fields and explanatory text.
- `website/api-reference/integrations.md` and generated API reference output for `@cognidesk/integrations`.
- Migration/codemod documentation: package mapping from old subpaths to new provider packages, explicit registration examples, unsupported-provider notes, and safe codemod behavior.
- `docs/provider-generation.md`: generated source, build, test, and catalog commands that target the aggregate package.
- `docs/provider-api-coverage-audit.md`: provider coverage records that name aggregate-package imports instead of provider packages.
- `website/community/repository-map.md`: repository/package map entry for `packages/integrations/`.
- `website/concepts/transport-neutrality.md` and `website/guides/voice.md`: OpenAI/voice provider examples that still use integration subpaths.

## Coordination notes

Issue #27 owns deleting the monolith and root provider generation pipeline after replacements exist; it also explicitly rejects a legacy bridge package or compatibility shim. Provider-family migration work is tracked across issues #29 through #43 and should align to this ADR rather than redeciding the package boundary.

The orchestration handoff records verified foundation implementation work on branches for issues #20, #21, #22, and #28: nested provider workspaces and independent releases, the integration kit, the metadata-only catalog with explicit runtime registration, and docs/CI/smoke updates. Those foundation branches may merge independently, but provider migrations should treat their verified outputs as the implementation baseline for this ADR.
