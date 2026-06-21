# Ticketing SDK-first workstream

Status: split package implementation added for issue #35 as of 2026-06-21.

This note scopes the helpdesk/product-support ticketing migration for:

- `packages/integrations/src/ticketing/zendesk`
- `packages/integrations/src/ticketing/freshdesk`
- `packages/integrations/src/ticketing/front`
- `packages/integrations/src/ticketing/gorgias`
- `packages/integrations/src/ticketing/help-scout`
- `packages/integrations/src/ticketing/kustomer`

## Foundation state

This branch reconciles the #20 and #21 foundation work before implementing the helpdesk cohort:

- `pnpm-workspace.yaml` includes nested `integrations/*/*` workspaces.
- `packages/integration-kit` provides `defineIntegration()`, manifest/handler binding checks, readiness/webhook helpers, and conformance test utilities.
- Each new helpdesk package depends only on `@cognidesk/core`, `@cognidesk/integration-kit`, and local dev tooling.
- Issue #22 catalog integration and #28 broader CI/docs guardrails can consume these packages, but the package runtime work no longer blocks on them.

## Current local state

| Provider | Current implementation | Webhook/event handling | Current tests |
| --- | --- | --- | --- |
| Zendesk | New `@cognidesk/ticketing-zendesk` package uses a constrained direct Zendesk Support API slice. Old monolith runtime/tests are removed in this branch. | Webhooks are represented as listable Support API objects; no local inbound verifier in this package. | `integrations/ticketing/zendesk/test/adapter.test.ts` covers manifest, operation binding, and request construction. |
| Freshdesk | New `@cognidesk/ticketing-freshdesk` package uses a constrained direct Freshdesk v2 support slice. | SDK-user shared-secret custom header validation and JSON parsing preserved. | `integrations/ticketing/freshdesk/test/adapter.test.ts` covers manifest, operation binding, request construction, and webhook parsing. |
| Front | New `@cognidesk/ticketing-front` package uses a constrained direct Front Core/Channel API support slice. Old generated clone is removed. | No local inbound verifier/parser exported. | `integrations/ticketing/front/test/adapter.test.ts` covers manifest, operation binding, request construction, and multipart fail-closed behavior. |
| Gorgias | New `@cognidesk/ticketing-gorgias` package uses a constrained direct Gorgias REST support slice. Old generated clone is removed. | No local inbound verifier/parser exported. | `integrations/ticketing/gorgias/test/adapter.test.ts` covers manifest, operation binding, and request construction. |
| Help Scout | New `@cognidesk/ticketing-help-scout` package uses a constrained direct Inbox API support slice. | Manifest marks webhooks/workflows/reports as not covered. | `integrations/ticketing/help-scout/test/adapter.test.ts` covers manifest, operation binding, and request construction. |
| Kustomer | New `@cognidesk/ticketing-kustomer` package uses a constrained direct Kustomer REST support slice. Old generated clone is removed. | No local inbound verifier/parser exported. | `integrations/ticketing/kustomer/test/adapter.test.ts` covers manifest, operation binding, request construction, and documented-channel fail-closed behavior. |

## SDK viability matrix

| Provider | Candidate library check | Decision for new package | Rationale |
| --- | --- | --- | --- |
| Zendesk | Zendesk documents `node-zendesk`, but marks it "Officially Supported: No". npm shows `node-zendesk@6.0.1`, modified 2024-12-20, with only `cross-fetch` as a dependency. | `@cognidesk/ticketing-zendesk` should not treat `node-zendesk` as an official SDK. Prefer a constrained Support API slice backed by Zendesk's official OAS, or wrap `node-zendesk` only as a raw-client option after explicit community-maintenance review. | The package goal is SDK-first, not community-client-first. The current full-provider clone should be removed or narrowed because adapter coverage should not imply Cognidesk owns Zendesk's whole Support SDK surface. |
| Freshdesk | `@freshworks/api-sdk@0.3.0` is beta and Freshworks' announcement says the initial SDK supports Freshteam; npm metadata says it currently supports Freshworks HTTP APIs. `@freshworks/freshdesk@0.0.1` exists but is stale/very early and uses old `superagent`. | Keep a direct HTTP checked support slice for `@cognidesk/ticketing-freshdesk`. Do not migrate to the Freshworks SDK for Freshdesk ticketing yet. | The existing adapter is already a constrained subset with Freshdesk v2 evidence and webhook handling. The available SDKs are not clearly maintained, official Freshdesk-ticketing clients. |
| Front | `front-sdk@0.8.2` is explicitly deprecated on npm and uses deprecated `request` dependencies. Front's official developer docs split Core API, Channel API, and Plugin SDK; the Plugin SDK is for in-Front app UI, not backend Core API ticketing operations. | Keep a direct HTTP support slice for `@cognidesk/ticketing-front`; remove generated full Front clone or replace it with a checked allowlisted slice. | No viable official/maintained backend JavaScript SDK was found. The deprecated community SDK is unsuitable for new package runtime dependencies. |
| Gorgias | Gorgias docs expose REST API docs and credentials. npm search finds community/client/framework packages, but no official maintained backend JavaScript API client. | Keep a direct HTTP support slice for `@cognidesk/ticketing-gorgias`; remove generated full Gorgias clone or narrow it to an allowlisted support slice. | The provider has a documented REST API but no verified official JS client. Current generated full clone should not survive the SDK-first package split. |
| Help Scout | `@helpscout/javascript-sdk` is official for Help Scout Apps/sidebar UI context. Help Scout's open-source page lists community Node.js wrappers, not an official Node Inbox API client. | Keep a direct HTTP Inbox API support slice for `@cognidesk/ticketing-help-scout`. | The official JS SDK is not a backend Inbox API client. Current local subset is already appropriately constrained and should be moved once contracts exist. |
| Kustomer | Kustomer exposes app-platform and chat SDKs. npm has `@kustomer/apps-client`, `@kustomer/apps-server-sdk`, and React Native chat packages, but these target app/chat SDK flows and bring app-server dependencies such as Express/Puppeteer. Kustomer REST API remains the backend source. | Keep a direct HTTP support slice for `@cognidesk/ticketing-kustomer`; remove generated full Kustomer clone or narrow it to an allowlisted support slice. | No viable official backend REST JS client was verified. Apps/chat SDKs are the wrong runtime boundary for normalized ticketing operations. |

## Minimal spikes completed

- Checked local workspace gates with `pnpm-workspace.yaml` and `rg @cognidesk/integration-kit`.
- Inspected issues #19-#28, especially #20, #21, #22, #26, #27, and #28.
- Inspected owned provider source paths, manifests, generated files, client entry points, tests, and webhook/readiness exports.
- Verified SDK candidates through official provider docs or npm metadata:
  - Zendesk Node.js API client docs: https://developer.zendesk.com/documentation/ticketing/api-clients/nodejs/
  - Front API overview: https://help.front.com/en/articles/2482
  - Freshworks API SDK announcement: https://community.freshworks.dev/t/freshworks-api-sdk-for-node-js/5232
  - Gorgias developer docs: https://developers.gorgias.com/
  - Help Scout JavaScript SDK docs: https://developer.helpscout.com/apps/javascript-sdk/
  - Help Scout open-source clients: https://developer.helpscout.com/open-source/
  - Kustomer developer portal: https://developer.kustomer.com/

## Implemented package layout

- `integrations/ticketing/zendesk` -> `@cognidesk/ticketing-zendesk`
- `integrations/ticketing/freshdesk` -> `@cognidesk/ticketing-freshdesk`
- `integrations/ticketing/front` -> `@cognidesk/ticketing-front`
- `integrations/ticketing/gorgias` -> `@cognidesk/ticketing-gorgias`
- `integrations/ticketing/help-scout` -> `@cognidesk/ticketing-help-scout`
- `integrations/ticketing/kustomer` -> `@cognidesk/ticketing-kustomer`

Each package has:

- `src/manifest.ts` as a manifest-only entry point.
- `src/index.ts` with a fetch-backed support-slice client, raw request escape hatch, and `defineIntegration()` operation binding.
- package-local Vitest coverage for manifest metadata, operation conformance, and request construction.

The old aggregate paths for these six providers are deleted in this branch after the split package tests pass. Remaining ticketing providers stay in the aggregate until their own issue lanes (#36/#37) complete.

## Tracking issue

Tracked by:

```text
#35 [Integrations] Migrate helpdesk ticketing providers to SDK-backed packages
```

The original draft below is retained only as historical context for the package-split acceptance criteria:

```markdown
## Goal

Move Zendesk, Freshdesk, Front, Gorgias, Help Scout, and Kustomer ticketing integrations out of `@cognidesk/integrations` into independent `@cognidesk/ticketing-*` packages, using official/maintained SDKs where viable and constrained direct support slices where no viable backend SDK exists.

## Dependencies

- Depends on #20 for nested `integrations/*/*` workspaces and independent provider releases.
- Depends on #21 for `@cognidesk/integration-kit` operation contracts, readiness helpers, webhook result types, and conformance utilities.
- Coordinates with #22 for metadata-only catalog imports and explicit runtime registration.
- Must satisfy #28 package smoke, manifest-only import, and CI guardrails before old monolith code is removed under #27.

## Provider decisions

- Zendesk: `node-zendesk` is documented by Zendesk but not officially supported; do not treat it as an official SDK. Build `@cognidesk/ticketing-zendesk` as a normalized Support API adapter with a constrained official-OAS-backed support slice or a separately reviewed raw community-client escape hatch.
- Freshdesk: no viable official Freshdesk ticketing Node SDK verified. Move the existing Freshdesk v2 checked support subset and webhook shared-secret parser into `@cognidesk/ticketing-freshdesk`.
- Front: no viable official backend JS SDK verified; deprecated `front-sdk` is unsuitable. Move selected Core/Channel API support helpers into `@cognidesk/ticketing-front` and delete/narrow generated full Front clones.
- Gorgias: no viable official backend JS SDK verified. Move selected REST support helpers into `@cognidesk/ticketing-gorgias` and delete/narrow generated full Gorgias clones.
- Help Scout: official JavaScript SDK is for Help Scout Apps UI context, not backend Inbox API. Move the existing Inbox API support slice into `@cognidesk/ticketing-help-scout`.
- Kustomer: app/chat SDK packages target Kustomer app/chat runtimes, not backend REST ticketing operations. Move selected REST support helpers into `@cognidesk/ticketing-kustomer` and delete/narrow generated full Kustomer clones.

## Scope

- Create `integrations/ticketing/{zendesk,freshdesk,front,gorgias,help-scout,kustomer}` packages with public names `@cognidesk/ticketing-*`.
- Preserve normalized ticketing operations, credential readiness, provider object metadata, mappers, webhook/event handling where implemented, and raw-client/request escape hatches.
- Change manifest coverage to distinguish normalized adapter coverage from raw SDK/direct API escape hatches.
- Ensure manifest-only imports do not initialize provider clients, provider SDKs, or transport code.
- Remove generated full-provider clones for Front, Gorgias, and Kustomer; replace Zendesk full clone with a constrained policy unless a reviewed SDK path is accepted.
- Keep direct/generated support slices pinned, documented, and allowlisted where no viable SDK exists.

## Acceptance Criteria

- Each package installs only its provider-specific runtime dependencies plus shared Cognidesk packages.
- Manifest declarations and executable handlers are contract-bound through `@cognidesk/integration-kit`.
- Provider package tests cover manifest import, operation conformance, request construction, readiness credential gating, webhook/event parsing where present, package smoke, and type declarations.
- `@cognidesk/ticketing-*/manifest` imports without initializing runtime clients.
- No provider claims `full-provider-api` merely because a raw SDK, generated clone, or REST escape hatch exists.
- Old monolith provider paths are deleted only after replacement packages and catalog/docs updates pass.
```
