# Contact Center SDK-First Audit

Date: 2026-06-21

Tracking issue: https://github.com/cognilabz/cognidesk/issues/39

This audit covers the long-tail contact-center integrations owned by the SDK-first migration workstream:

- `packages/integrations/src/contact-center/8x8`
- `packages/integrations/src/contact-center/aircall`
- `packages/integrations/src/contact-center/five9`
- `packages/integrations/src/contact-center/genesys-engage`
- `packages/integrations/src/contact-center/genesys-pureconnect`
- `packages/integrations/src/contact-center/nextiva`
- `packages/integrations/src/contact-center/nice-cxone`
- `packages/integrations/src/contact-center/talkdesk`
- `packages/integrations/src/contact-center/zoom`

## Gate Status

#20 and #21 have been reconciled into the #39 implementation branch:

- `pnpm-workspace.yaml` includes `integrations/*/*`.
- `packages/integration-kit` provides `defineIntegration()`, category operation aliases, readiness/error/webhook helpers, and manifest/handler binding checks.
- The contact-center packages below are implemented as split workspaces under `integrations/contact-center/*`.

The old monolith code remains in place for now. It should only be deleted after replacement package catalog/smoke wiring and downstream migration tests pass.

## Decision Matrix

| Provider | Current local surface | SDK/library finding | Migration decision while blocked | Required next package shape |
| --- | --- | --- | --- | --- |
| 8x8 | Generated selected Contact Center/OpenAPI slice plus typed helpers for handoff, outbound phone interaction, call control, agent status, and readiness. | No viable official server-side JS Contact Center REST SDK found. 8x8 publishes official machine-readable OpenAPI files and a separate Partner/UI SDK surface. | Implemented generated support-operation slice. Do not broaden to full 8x8. | `@cognidesk/contact-center-8x8` with an allowlisted OpenAPI slice: source URLs, checksums, selected operation IDs, and explicit excluded surfaces. |
| Aircall | Configured-path handoff plus `/v1/ping` readiness; broader Public API is marked provider-supported-not-typed. | `aircall-everywhere` is maintained and official-looking, but it embeds/controls the Aircall Workspace iframe and is not a server-side Public API client. No viable official REST SDK found. | Implemented constrained direct HTTP support slice. | `@cognidesk/contact-center-aircall` with `contactCenter.handoff.request` only if the host supplies a reviewed path. Add separate future browser/agent-app package only if Aircall Everywhere becomes a product target. |
| Five9 | Configured-path handoff/readiness only. | Five9 documents a browser CRM SDK loaded from Five9 and customer/developer-program APIs. The npm `five9` package is third-party and stale; no viable official server-side JS package found. | Implemented constrained direct HTTP support slice. | `@cognidesk/contact-center-five9` with host-configured handoff/readiness only, or a reviewed Web2Campaign/CRM-SDK slice if customer docs can be pinned. |
| Genesys Engage / GMS | Typed GMS callback create, typed GMS Chat API v2 customer lifecycle/file operations, configured on-prem handoff/readiness. | `engagement-client-js` exists but is old and targets Genesys Predictive Engagement, not GMS Chat API v2 or Engage on-prem callback services. Genesys Cloud JS SDK is not applicable to Engage/GMS. | Implemented direct support-operation slice. | `@cognidesk/contact-center-genesys-engage` with allowlisted GMS Callback create and GMS Chat API v2 customer operations only. |
| Genesys PureConnect / ICWS | Typed ICWS connection/session helpers, selected interaction/messaging/recording/configuration helpers, configured Interaction Web Tools handoff/readiness. | No viable official JS SDK package found for PureConnect ICWS/Interaction Web Tools. | Implemented direct support-operation slice. | `@cognidesk/contact-center-genesys-pureconnect` with allowlisted ICWS paths and explicit deployment-mode metadata. |
| Nextiva | Configured handoff/readiness plus generic request helper for SDK-owned endpoints. | `ncx-sdk` and `ncx-web-sdk` exist under Nextiva-linked repositories, but they need license, runtime, API-surface, and Contact Center REST fit review before adoption. | Implemented direct slice with mutation-gated extension request; SDK adoption remains deferred. | Either wrap a verified Nextiva SDK if it covers the required support operations, or keep a direct HTTP allowlist. Broad generic requests must remain host-policy gated. |
| NICE CXone | Generated public OpenAPI surface plus configured handoff/readiness. Manifest currently claims `full-provider-api`. | NICE publishes maintained `@nice-devone/*` packages, including auth, agent, digital, and chat web SDKs, but several are `UNLICENSED` and focus on agent/browser/digital app surfaces rather than a server-side REST package. | Implemented reviewed generated support slice; SDK adoption remains deferred on license/runtime fit. | `@cognidesk/contact-center-nice-cxone` uses selected callback/chat/end-contact operations plus a mutation-gated provider extension request. |
| Talkdesk | Generated public OpenAPI bundle plus typed direct callback, case creation, configured handoff/readiness. Manifest currently claims `full-provider-api`. | No viable official npm REST client found. Talkdesk publishes official API docs and a public OpenAPI bundle; API access is account/partner gated. | Implemented generated support slice and narrowed adapter coverage to reviewed support operations. | `@cognidesk/contact-center-talkdesk` with direct callback, case creation, and configured handoff/readiness. |
| Zoom Contact Center | Generated official Contact Center REST OpenAPI plus generated webhook catalog, configured handoff/readiness. Manifest currently claims `full-provider-api`. | `@zoom/appssdk` is maintained, but it is the Zoom Apps SDK for embedded Zoom client apps, not a Contact Center REST client. No separate official Contact Center REST JS SDK found. | Implemented selected Contact Center REST support slice, not SDK-backed REST. | `@cognidesk/contact-center-zoom` with selected engagement read/start operations, configured handoff/readiness, and mutation-gated extension request. A separate Zoom app package may use `@zoom/appssdk` if embedded Contact Center app context becomes a target. |

## Minimal Support Slice Rule

For providers without a viable official server-side SDK, the new provider package should include:

- `implementation.strategy`: `generated-support-slice` or `direct-http-support-slice`.
- `source`: official URL(s), provider doc version if available, fetched timestamp, and content checksum.
- `allowlist`: stable operation IDs, method/path, expected auth mode, required scopes/roles, mutation classification, and normalized Cognidesk operation binding.
- `exclusions`: explicit provider-supported-but-not-typed families.
- `manifestOnlySafe`: a test proving `@cognidesk/contact-center-*/manifest` does not import generated clients, fetch implementations, or provider SDK runtimes.

## Dedicated GitHub Issue Draft

Title:

```text
[Integrations] Migrate long-tail contact-center providers to SDK-first packages
```

Body:

```markdown
## Goal

Audit and migrate the long-tail contact-center integrations currently under `packages/integrations/src/contact-center/*` into independently installable provider packages, using official/maintained SDKs where viable and reviewed support-operation slices otherwise.

## Scope

- Providers: 8x8, Aircall, Five9, Genesys Engage/GMS, Genesys PureConnect/ICWS, Nextiva, NICE CXone, Talkdesk, and Zoom Contact Center.
- Wait for #20 nested provider workspaces and #21 `@cognidesk/integration-kit` contracts before final package implementation.
- Align with #22 so manifest-only imports do not initialize provider clients, generated code, fetch transports, or provider SDK runtimes.
- Use official/maintained SDK packages only when they cover the required server-side support operations and have acceptable runtime/module/license behavior.
- Where no viable SDK exists, keep only a reviewed direct/generated support-operation slice with source/version/checksum/allowlist metadata.
- Preserve normalized contact-center operations, readiness, webhooks/events, mappers, manifests, and conformance tests.

## Provider Decisions From 2026-06-21 Audit

- 8x8: no viable official server-side JS Contact Center SDK found; retain selected official OpenAPI support slice with checksums and allowlist.
- Aircall: `aircall-everywhere` is an iframe Workspace SDK, not a server-side Public API client; retain constrained configured-path support slice.
- Five9: CRM SDK is browser/ADT-oriented and npm `five9` is third-party/stale; retain constrained configured-path support slice unless customer docs enable a pinned allowlist.
- Genesys Engage/GMS: no viable GMS Chat/Callback JS SDK; retain direct GMS support slice.
- Genesys PureConnect/ICWS: no viable ICWS JS SDK; retain direct ICWS support slice.
- Nextiva: `ncx-sdk`/`ncx-web-sdk` require license/runtime/API-fit spike before adoption; otherwise use reviewed direct allowlist and remove broad generic request behavior.
- NICE CXone: maintained `@nice-devone/*` SDKs exist but need license/runtime/API-fit review; if not acceptable, retain a reviewed generated support slice and narrow full-provider claims.
- Talkdesk: no viable official npm REST SDK found; retain selected official OpenAPI support slice and narrow adapter coverage to selected operations.
- Zoom Contact Center: `@zoom/appssdk` is an embedded app SDK, not Contact Center REST; retain selected official Contact Center REST/webhook slice.

## Acceptance Criteria

- Each provider has a new package decision recorded as `official-sdk`, `generated-support-slice`, `direct-http-support-slice`, `browser/app-sdk-deferred`, or `not-migrated`.
- New packages install only their own provider dependencies plus shared Cognidesk packages.
- Manifest-only imports are covered by tests and do not initialize provider clients or generated runtime modules.
- Generated/direct slices include source URLs, version/revision where available, fetched timestamp, content checksum, and operation allowlist.
- Normalized contact-center operation handlers are bound to manifest declarations through `@cognidesk/integration-kit`.
- Existing readiness/webhook/event behavior is preserved or explicitly marked out of scope.
- Old `@cognidesk/integrations/contact-center/*` paths are deleted as replacements land; no compatibility re-exports are added.
```
