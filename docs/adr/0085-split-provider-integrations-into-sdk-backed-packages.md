---
Status: accepted
---

# Split provider integrations into SDK-backed packages

Cognidesk ships executable Provider Integrations as independently installable provider/category packages, backed by a small shared integration kit and a separate metadata-only provider catalog. Official Provider Integrations are normalized support adapters around provider clients. They are not replacement SDKs for the provider, and they must not make broad full-platform claims unless the package has explicit evidence for that exact provider API surface.

Official provider runtime packages are named `@cognidesk/integration-{category}-{provider}`. Examples include `@cognidesk/integration-email-gmail`, `@cognidesk/integration-workplace-slack`, `@cognidesk/integration-ticketing-zendesk`, `@cognidesk/integration-voice-twilio`, and `@cognidesk/integration-contact-center-genesys-cloud`. Create a separate package whenever an integration has its own external dependency graph, runtime requirements, credential/setup lifecycle, generated API surface, or release lifecycle. Provider-neutral infrastructure packages such as Core, HTTP, storage, model, React, UI, OpenTelemetry, connections, evals, test-harness, Studio packages, and `voice-websocket` remain separate from provider runtime packages.

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

## Versioning

Each provider package versions independently because providers change SDKs, API versions, authentication, scopes, product entitlements, webhook signatures, generated surfaces, and runtime requirements on their own schedules. Shared kit and catalog changes use their own version cadence. Provider migration work should avoid forcing unrelated provider releases.

The retired aggregate provider package is not part of the runtime surface. Provider execution requires the current package name, an explicit runtime import, and application-owned registration.

## Consequences

Category-provider naming is the current package boundary. ADR-0085 is the source of truth for SDK-first wrapping, raw-client policy, catalog/runtime separation, explicit registration, and versioning.

Provider-neutral contracts, Channel Capabilities, Provider Manifests, Provider Objects, coverage metadata, conformance evidence, and Studio visibility remain required. The package split changes executable distribution boundaries; it does not weaken provider setup, policy, privacy, conformance, or capability rules.

## Current implementation contract

Provider workspaces live under `integrations/{category}/{provider}`. Package manifests, runtime exports, conformance tests, catalog generation, and release verification should all use the package name shape defined here. The catalog remains metadata-only, and runtime loading remains explicit.
