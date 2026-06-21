# RCS and TikTok SDK-First Migration Decision

Date: 2026-06-21

## Scope

Owned current monolith paths:

- `packages/integrations/src/messaging/rcs`
- `packages/integrations/src/social/tiktok`

This decision record covers the RCS and TikTok workstream for the per-provider SDK-first integration package migration tracked by #33, with architectural inputs from #19-#28.

## Foundation Stack

Issue #33 is the tracking issue for this workstream. This implementation is based on the combined foundation branch `codex/integrations-foundation-stack`, which contains:

- #20 nested workspaces
- #21 `@cognidesk/integration-kit`
- #22 metadata catalog
- #19 architecture ADR
- #26 provider migration matrix
- #28 provider-package guardrails/CI/docs

The RCS/TikTok packages live under `integrations/{category}/{provider}`, publish independently, expose root and `/manifest` entry points, and do not add an `@cognidesk/integrations` compatibility bridge.

The old aggregate `packages/integrations/src/messaging/rcs` and `packages/integrations/src/social/tiktok` implementations and tests are removed in this branch after the replacement package tests pass.

## Current Runtime Summary

### RCS

Original path: `packages/integrations/src/messaging/rcs`

Split package path: `integrations/messaging/rcs`

Current implementation:

- Direct HTTP support slice for Google RCS for Business / RBM.
- Selected operations: message send, text/media/card payload builders, agent events, file create/upload, phone capability checks, agent/launch/verification readiness reads.
- Webhook handling: challenge helper, Pub/Sub-style envelope parsing, `X-Goog-Signature` HMAC-SHA512 validation over the decoded message body.
- Readiness: agent, launch, verification, optional phone capability checks.
- Manifest: `support-workflow-subset`, explicitly not full RBM/RCS API coverage.
- Manifest-only import currently does not initialize an RCS client.

### TikTok

Original path: `packages/integrations/src/social/tiktok`

Split package path: `integrations/social/tiktok`

Current implementation:

- Direct HTTP support slice spanning multiple TikTok product surfaces.
- Selected operations: Display API user/video reads, Content Posting status read, Research API video comment reads, Business API video/comment list and comment create/reply helpers.
- Webhook handling: `TikTok-Signature` parsing and HMAC-SHA256 validation over `timestamp.rawBody`.
- Readiness: account/profile live check.
- Manifest: `support-workflow-subset`, explicitly not general TikTok DM or full TikTok platform coverage.
- Manifest-only import currently does not initialize a TikTok client.

## SDK Viability Findings

### RCS

Candidate findings:

- `googleapis@173.0.0` is current but does not expose `google.rcsbusinessmessaging` or `google.businesscommunications` at runtime in a temp install check.
- No service-specific `@googleapis/rcsbusinessmessaging` or `@googleapis/businesscommunications` npm packages exist.
- `rcsbusinessmessaging@1.0.2` is stale, last modified 2022-05-14.
- `@google/rcsbusinessmessaging@1.0.10` is the strongest SDK candidate, last modified 2025-04-30, Apache-2.0, Node `>=18.18.0`, integrity `sha512-pf1mkgwPLV1EVR6xVEFwWM10xkNRFfHvmBnEkOum1mRpUA4T/vSp8gGADYUN2jRziEHCNpTYBupaftK1Z276VQ==`.
- `@google/rcsbusinessmessaging` depends on `googleapis`, includes generated `rcsbusinessmessaging/v1` sources, and covers RBM messaging resources such as files, phones capabilities, agent events, agent messages, testers, users batch get, Dialogflow messages, and revoke/delete.
- `@google/rcsbusinessmessaging` does not cover the Business Communications management API used by current readiness helpers (`brands/*/agents/*`, launch, verification).
- The helper API uses module-level singleton initialization for auth/client state. That is a poor fit for Cognidesk package contracts unless the future package wraps only the generated `rcsbusinessmessaging_v1` class or accepts an injected client.

Decision implemented:

- Created `@cognidesk/messaging-rcs`.
- Did not add `@google/rcsbusinessmessaging` as a runtime dependency in this pass because the package is only a partial fit and does not cover Business Communications readiness reads.
- Kept a constrained direct HTTP support slice for RBM messaging and Business Communications readiness reads.
- Preserved host-owned auth/config and client injection.
- Do not claim `full-provider-api`; keep `support-workflow-subset`.

### TikTok

Candidate findings:

- No official TikTok Developers Node/TypeScript SDK was found for the mixed Display API, Research API, Content Posting status, webhook, and Business comment surface.
- Search results are dominated by community wrappers, React Native/native SDK bridges, scraper/live packages, and unrelated embed/pixel packages.
- `tiktok-business-api-sdk-official@1.1.3` is the strongest Business API candidate, last modified 2026-02-27, integrity `sha512-T9vqo/dLFJpuus0dTOyOXLLbX2i+qajVtBnP5x0Y2/opb1DyyLnX7l0jlq0E99rf47plXiRL+EN/d5x/TpE9Mg==`.
- That package is a Swagger Codegen JavaScript bundle for TikTok Business API version `1.2.1`, with CommonJS-style README examples, no declared TypeScript types, broad ads/business models, and `superagent@^5.3.0`.
- Its `CommentsApi` covers ad-comment endpoints such as `/open_api/v1.3/comment/list/` and `/open_api/v1.3/comment/post/`, not the current adapter's `/open_api/v1.3/business/comment/*` selected paths.
- It does not cover TikTok Developers Open API Display, Research API, Content Posting status, or webhooks.

Decision implemented:

- Created `@cognidesk/social-tiktok`.
- Keep TikTok as a constrained direct HTTP support slice for the current mixed surface.
- Do not add `tiktok-business-api-sdk-official` as a final dependency now. It can be evaluated later for a separate Business API comment/ads slice only if the operation paths and package quality meet the integration-kit contract.
- Do not claim `full-provider-api`; keep `support-workflow-subset`.
- Continue to document that generic customer-service DMs are not covered by the public APIs used here.

## Package Metadata

Each provider package now records:

- `implementation.strategy`: `direct-http-support-slice`.
- `release`: `independent-provider`.
- root, `/manifest`, and `/runtime` export targets.
- checked source/version metadata.
- SHA-256 checksum for the selected operation allowlist.
- selected and implemented operation counts.
- explicit excluded/full-provider non-coverage.
- `coverage.scope`: remain `support-workflow-subset`.
- Manifest-only entry point must not import provider SDKs or initialize provider clients.
- Runtime entry point must support client injection for tests and host-owned auth/config.

## Future Spikes

Useful follow-up spikes:

- RCS spike: a disposable test/prototype that imports `@google/rcsbusinessmessaging/src/rcsbusinessmessaging/v1.js` or the package root and proves per-client instantiation, auth injection, region/root URL handling, and no singleton leakage.
- RCS spike: a Google auth replacement for handwritten service-account JWT minting.
- TikTok spike: compare `tiktok-business-api-sdk-official` `CommentsApi` methods against the currently selected Business comment paths and document whether those are equivalent, adjacent, or different surfaces.

No SDK dependency was landed because neither candidate met the complete runtime/support-slice fit for this workstream.

## Tracking Issue

Issue #33 exists and is the dedicated tracking issue for this workstream: <https://github.com/cognilabz/cognidesk/issues/33>.

## Verification Notes

Inspection and verification performed:

- Current RCS/TikTok source, manifests, credentials, readiness, webhooks, and tests.
- `packages/integrations/package.json` export/build shape.
- Issue #33 and issues #19-#28, especially #20, #21, #22, #26, #27, and #28.
- Npm metadata and tarball smoke checks for `googleapis`, `@google/rcsbusinessmessaging`, `rcsbusinessmessaging`, and `tiktok-business-api-sdk-official`.
- Temp runtime check for `googleapis@173.0.0` confirmed `google.rcsbusinessmessaging` and `google.businesscommunications` are not exposed.
- Focused typecheck/test/build/import smoke for `@cognidesk/integration-kit`, `@cognidesk/messaging-rcs`, and `@cognidesk/social-tiktok`.
