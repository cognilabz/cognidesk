# Contact Center SDK-First Migration Readiness

Date: 2026-06-21

This note scopes the SDK-first migration for the contact-center providers owned by issue #38:

- `packages/integrations/src/contact-center/amazon-connect`
- `packages/integrations/src/contact-center/genesys-cloud`
- `packages/integrations/src/contact-center/ringcentral`

The final package extraction is blocked until the architecture gates from issues #19, #20, #21, #22, #27, and #28 land:

- #19 must supersede ADR-0081 and restore the per-provider package boundary. ADR-0081 currently says official providers publish from `@cognidesk/integrations`.
- #20 must add nested provider workspaces such as `integrations/*/*`; `pnpm-workspace.yaml` currently only includes `packages/*` and `apps/*`.
- #21 must provide `@cognidesk/integration-kit`; no local `packages/integration-kit` workspace or `defineIntegration()` contract exists yet.
- #22 must provide the metadata-only catalog and manifest-only import path so Studio/docs can list providers without loading provider SDKs.
- #27 and #28 should enforce deletion of generated monolith surfaces, package smoke tests, manifest-only imports, and docs/CI rules after provider packages exist.

The #38 implementation now starts by reconciling the missing #20 and #21 foundations locally: nested provider workspaces are discoverable, and `@cognidesk/integration-kit` owns the executable manifest/handler binding. The old monolith code remains intact until replacement package tests and smoke checks pass.

## Current Local Shape

### Amazon Connect

Current module:

- Exports generated `fullApi` and `requestOperation` for 765 operations from 11 AWS Connect-family model files.
- Uses handwritten direct HTTP helpers for `startTaskContact`, `startChatContact`, selected Connect Participant operations, `transferContact`, and `describeInstance`.
- Manifest declares `coverage.scope: "full-provider-api"` and cites generated AWS model evidence.

SDK viability:

- `@aws-sdk/client-connect` is official and viable for the core Amazon Connect support workflow surface.
- The existing generated surface also covers Connect Participant, Connect Cases, Connect Campaigns v1/v2, Contact Lens, AppIntegrations, Customer Profiles, Q Connect, Wisdom, and a Connect Health model. Most have matching AWS SDK v3 packages, but no npm package was found for `@aws-sdk/client-connect-health`.
- Final migration should use injected SDK clients and lazy construction, expose the configured raw clients, and downgrade any unrepresented Connect-family breadth from "full generated provider API" to explicit SDK-backed or gap metadata.

Likely SDK dependencies:

- `@aws-sdk/client-connect`
- `@aws-sdk/client-connectparticipant`
- `@aws-sdk/client-connectcases`
- `@aws-sdk/client-connectcampaigns`
- `@aws-sdk/client-connectcampaignsv2`
- `@aws-sdk/client-connect-contact-lens`
- `@aws-sdk/client-appintegrations`
- `@aws-sdk/client-customer-profiles`
- `@aws-sdk/client-qconnect`
- `@aws-sdk/client-wisdom`

Open gap:

- Preserve or explicitly drop the generated Connect Health slice. `@aws-sdk/client-connect-health` returned a registry 404 on 2026-06-21.

### Genesys Cloud

Current module:

- Exports generated `fullApi` and `requestOperation` for 3,147 Genesys Cloud Platform Swagger operations.
- Uses handwritten direct REST helpers for configured handoff, callbacks, Open Messaging message/event/receipt ingress, conversation read, queue list, readiness, and Open Messaging webhook signature verification.
- Manifest declares `coverage.scope: "full-provider-api"` and separates Genesys Cloud from Engage and PureConnect packages.

SDK viability:

- `purecloud-platform-client-v2` is the current official Genesys Cloud Platform JavaScript SDK and is viable for the generated Swagger clone replacement.
- Registry check on 2026-06-21 found version `255.1.0`, with `axios`, `configparser`, and `winston` dependencies. That dependency graph belongs in an independent provider package, not the manifest-only catalog.
- The SDK includes preview APIs, so final coverage metadata should distinguish stable normalized operations from raw SDK breadth and preview risk.

Migration target:

- Wrap official SDK API classes for callbacks, routing queues, conversations, Open Messaging ingress, and raw client access.
- Keep Open Messaging webhook signature verification local because it is Cognidesk/provider-webhook boundary behavior rather than a generated REST call.
- Keep manifest-only imports free of `purecloud-platform-client-v2`.

### RingCentral

Current module:

- Exports generated current RingCX Voice functions for 138 operations and Engage Digital functions for 149 operations.
- Uses direct HTTP for `requestVoiceOperation`, `requestDigitalOperation`, configured handoff, readiness, and legacy/current auth header selection.
- Manifest already uses `coverage.scope: "provider-api-subset"` rather than `full-provider-api`.

SDK viability:

- `@ringcentral/sdk` is official and current enough to validate as the preferred RingCentral platform SDK candidate.
- Registry check on 2026-06-21 found version `5.0.11`, with runtime dependencies including `node-fetch@2`.
- The official SDK documentation primarily describes the broader RingCentral platform/RingEX REST client. It is not yet proven to type the current RingCX Voice and Engage Digital OpenAPI slices that the local module generated from `engage-voice-api-docs` and `engage-digital-api-docs`.

Migration target:

- Use `@ringcentral/sdk` where the SDK can own authentication, request dispatch, retries, and raw platform access.
- Keep a reviewed, provider-package-local direct/generated RingCX slice only for RingCX Voice or Engage Digital operations that the official SDK does not type or route cleanly.
- Preserve the current fail-closed behavior for legacy RingCX hosts and configured handoff/readiness paths.

## Package Names Pending ADR

Issue #19 proposes the per-provider naming shape that ADR-0074 originally used and ADR-0081 later superseded. If the new ADR restores that shape, use:

- `@cognidesk/integration-contact-center-amazon-connect`
- `@cognidesk/integration-contact-center-genesys-cloud`
- `@cognidesk/integration-contact-center-ringcentral`

Do not create these packages until nested workspaces and release scripts can discover and publish them.

## Final Migration Checklist

For each provider package:

1. Add a manifest-only export that imports only shared manifest/schema code, never the provider SDK.
2. Add a runtime export that constructs or accepts official SDK clients lazily.
3. Preserve normalized contact-center operations, readiness, credential statuses, webhook/event helpers, mappers, privacy notes, limitations, and raw-client escape hatches.
4. Replace generated full-provider clones where official SDK coverage is viable.
5. Retain direct/generated provider-package-local slices only for reviewed support workflow gaps not covered by the SDK.
6. Update coverage metadata from generated clone claims to SDK-backed normalized coverage plus raw SDK/gap metadata.
7. Add conformance tests for manifest/runtime operation parity, credential fail-closed behavior, manifest-only import behavior, raw-client access, and no SDK initialization on metadata import.
8. Add package smoke checks for `npm pack`, external temp project import, declaration resolution, Node runtime compatibility, and size budgets.
9. Remove old monolith exports and generator scripts only after replacement packages and docs/catalog updates pass.

## Tracking Issue

The dedicated tracking issue now exists as https://github.com/cognilabz/cognidesk/issues/38.

The body below was the drafted issue body used to seed that workstream.

## Original Draft GitHub Issue Body

Title:

```text
[Integrations] Migrate Amazon Connect, Genesys Cloud, and RingCentral contact-center providers to SDK-first packages
```

Body:

```markdown
## Goal

Extract the clear SDK-backed contact-center integrations from `@cognidesk/integrations` into independent provider packages, replacing generated full-provider clones or broad direct HTTP clients with official SDK usage where the SDK covers the support workflow surface.

## Providers

- `packages/integrations/src/contact-center/amazon-connect` -> `@cognidesk/integration-contact-center-amazon-connect`
- `packages/integrations/src/contact-center/genesys-cloud` -> `@cognidesk/integration-contact-center-genesys-cloud`
- `packages/integrations/src/contact-center/ringcentral` -> `@cognidesk/integration-contact-center-ringcentral`

Final package names are pending the ADR from #19.

## Dependency Gates

Do not merge final provider packages until:

- #19 supersedes ADR-0081 with the per-provider SDK-first package boundary.
- #20 supports nested provider workspaces and independent provider releases.
- #21 publishes usable `@cognidesk/integration-kit` operation contracts.
- #22 provides metadata-only catalog and explicit runtime registration patterns.
- #28 adds package/import/conformance smoke checks for the new package architecture.

## SDK Verification

- Amazon Connect: use AWS SDK v3 clients. `@aws-sdk/client-connect` is viable for core Connect operations; preserving the old generated Connect-family raw breadth also likely requires `@aws-sdk/client-connectparticipant`, `@aws-sdk/client-connectcases`, `@aws-sdk/client-connectcampaigns`, `@aws-sdk/client-connectcampaignsv2`, `@aws-sdk/client-connect-contact-lens`, `@aws-sdk/client-appintegrations`, `@aws-sdk/client-customer-profiles`, `@aws-sdk/client-qconnect`, and `@aws-sdk/client-wisdom`. `@aws-sdk/client-connect-health` was not found on npm during the 2026-06-21 check, so Connect Health needs an explicit gap decision.
- Genesys Cloud: use `purecloud-platform-client-v2`; preserve normalized callbacks, Open Messaging ingress, readiness, queue/conversation helpers, and webhook signature verification.
- RingCentral: use `@ringcentral/sdk` where it cleanly covers auth/request dispatch/raw platform access; keep a reviewed RingCX Voice/Engage Digital slice only for operations not covered by the official SDK.

## Acceptance Criteria

- Each package has manifest-only imports that do not import or initialize provider SDKs.
- Each runtime package uses official SDK clients where viable and supports SDK client injection.
- Normalized contact-center operations, readiness, credential statuses, webhooks/events, privacy notes, limitations, and raw-client escape hatches are preserved.
- Generated full-provider clones are removed for SDK-covered surfaces.
- Any direct/generated leftovers are provider-package-local reviewed support slices with source/version evidence and explicit metadata gaps.
- Coverage metadata distinguishes normalized adapter coverage, raw SDK coverage, preview APIs, and unsupported provider surfaces.
- Conformance tests fail when manifests and executable handlers drift.
- Package smoke tests cover type declarations, external imports, `npm pack`, Node runtime compatibility, package size, and manifest-only import behavior.
- Old `@cognidesk/integrations/contact-center/*` exports and root generator scripts are deleted only after replacement packages and catalog/docs updates pass.

## Notes From Current Code

- Amazon Connect and Genesys Cloud currently claim `full-provider-api` based on generated clones. Those claims should be reworked around SDK-backed coverage rather than carried forward unchanged.
- RingCentral already claims `provider-api-subset`, but it still uses generated Voice/Digital OpenAPI clients plus direct HTTP.
- Current `pnpm-workspace.yaml` only includes `packages/*` and `apps/*`, and no `packages/integration-kit` exists yet, so this work is blocked from final implementation in the current repo state.
```
