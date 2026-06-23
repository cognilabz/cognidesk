# Marketplace Amazon/eBay SDK-First Migration Decision

Status: implemented in `codex/integrations-31-marketplace-amazon-ebay`
Date: 2026-06-21

## Scope

Owned legacy paths:

- `packages/integrations/src/marketplace/amazon`
- `packages/integrations/src/marketplace/ebay`

Split package names:

- `integrations/marketplace/amazon` published as `@cognidesk/integration-marketplace-amazon`
- `integrations/marketplace/ebay` published as `@cognidesk/integration-marketplace-ebay`

This branch reconciles the #20 nested workspace foundation and #21 `@cognidesk/integration-kit` foundation before adding the marketplace packages.

## Issue Context

- #19 adopts per-provider SDK-backed package architecture and rejects old monolith compatibility shims.
- #20 provides nested provider workspaces and independent provider release tooling.
- #21 provides `@cognidesk/integration-kit` operation/readiness/webhook/testing contracts.
- #22 requires metadata-only catalog imports and explicit runtime registration.
- #26 asks every provider to record a migration decision and reject generated full-provider clones unless no viable SDK/library exists.
- #27 removes the old monolith and root provider-generation pipeline only after replacements land.
- #28 adds docs and CI smoke checks for nested provider packages, manifest-only imports, package size, and provider SDK import boundaries.
- #31 tracks this Amazon/eBay marketplace migration.

## Current Local State

- `pnpm-workspace.yaml` includes `integrations/*/*`.
- `packages/integration-kit` exists and provides `defineIntegration()`, provider manifest helpers, readiness/webhook utilities, and testing conformance helpers.
- `@cognidesk/integration-marketplace-amazon` exists as a split package with `/manifest`, `/runtime`, and root exports.
- `@cognidesk/integration-marketplace-ebay` exists as a split package with `/manifest`, `/runtime`, and root exports.
- The old `@cognidesk/integrations` marketplace subpaths remain in place until replacement package adoption and cleanup work removes the monolith; no compatibility re-exports were added.

## SDK Viability Evidence

### Amazon Marketplace / SP-API

Decision: migrate away from Cognidesk-owned generated full-provider API clones. Use the official Amazon SDK as a lazy raw-client escape hatch and keep local support helpers for RDT and normalized marketplace operations.

Evidence checked on 2026-06-21:

- Amazon documents a prebuilt JavaScript SDK tutorial and installs `@amazon-sp-api-release/amazon-sp-api-sdk-js`.
- `npm view @amazon-sp-api-release/amazon-sp-api-sdk-js` reports version `1.9.0`, Apache License 2.0, repository `amzn/selling-partner-api-sdk`, and modified time `2026-05-29T13:03:51.597Z`.
- The official SDK repository describes itself as the official SDK for Amazon Selling Partner API and its README states JavaScript has basic API support and rate limiting, but not RDT support.
- `npm pack --dry-run --json @amazon-sp-api-release/amazon-sp-api-sdk-js@1.9.0` reports shasum `783d6bf23750405b0dceb7f859fa40fade74b182`, integrity `sha512-t9VwXEtsgTH05SvmFbEWjYxOZyqdGE1YjTDyUImUv9XdSmr+oenG2cCw2zgfjugWNO2QGSz98rSynKBip5aJMA==`, unpacked size about 13.7 MB, and generated `.d.ts` files under API subdirectories.
- The real package test loads `@amazon-sp-api-release/amazon-sp-api-sdk-js` through `loadAmazonSpApiOfficialSdk()` and proves `SellersSpApi`, `OrdersSpApi`, and `NotificationsSpApi` are present. Import is slow enough to require an explicit 20s test timeout, reinforcing the manifest-only import boundary.
- The npm package has no root `types` or `typings` metadata, so `@cognidesk/integration-marketplace-amazon` includes a package-local typed facade for the raw SDK loader while keeping normalized support operations typed locally.

Required Amazon preservation:

- LWA token refresh and credential readiness.
- Restricted Data Token creation and v0 buyer-info fail-closed behavior.
- Orders v0 compatibility while Amazon's deprecation window remains relevant, plus v2026 `searchOrdersV2026`/`getOrderV2026` helpers with `includedData`.
- Solicitations helpers, Sellers marketplace participation live check, Notifications destination/subscription helpers, and notification parsing.
- Optional SigV4 helper only as a provider extension for SDK-user legacy/gateway paths.
- Manifest-only import must not import or instantiate the Amazon SDK.

Amazon migration shape:

- Provider package depends on `@amazon-sp-api-release/amazon-sp-api-sdk-js`.
- Cognidesk exposes normalized marketplace support operations through `integration-kit` operation binding.
- Raw SP-API breadth should be available through injected or constructed official SDK clients, not through Cognidesk-generated full-provider wrappers.
- Coverage is normalized support coverage plus `implementation.strategy: "official-sdk-plus-support-slice"`, with explicit notes for helper operations still implemented locally because the JavaScript SDK does not cover RDT support.

### eBay Marketplace

Decision: keep a constrained direct/support-slice package for `@cognidesk/integration-marketplace-ebay`; optionally use eBay-owned utility SDKs only for OAuth, digital signatures, or event-notification verification if they pass package/runtime review.

Evidence checked on 2026-06-21:

- eBay's SDKs and Widgets page lists Node.js SDKs for Digital Signature, Event Notification, and OAuth, but not a broad official Node SDK for Sell Fulfillment, Commerce Message, Commerce Notification lifecycle, Developer Key Management, and Identity REST operations.
- `npm view digital-signature-nodejs-sdk` reports version `3.0.1`, Apache-2.0, repository `eBay/digital-signature-nodejs-sdk`, and modified time `2023-07-31T23:11:34.276Z`.
- `npm view event-notification-nodejs-sdk` reports version `1.0.3`, repository `eBay/event-notification-nodejs-sdk`, and modified time `2023-06-15T21:52:53.428Z`; it depends on older `axios`, `express`, `lru-cache`, and `ebay-oauth-nodejs-client`.
- `npm view ebay-oauth-nodejs-client` reports version `1.2.2`, repository `eBay/ebay-oauth-nodejs-client`, and modified time `2022-09-13T18:11:09.431Z`.
- `npm view ebay-api` reports active version `9.5.2`, modified `2026-05-11T08:17:20.577Z`, and TypeScript declarations, but it is community-maintained under `hendt/ebay-api`, not eBay official.

Required eBay preservation:

- Selected operation catalog metadata for the implemented support slice.
- Sell Fulfillment order/search/shipping fulfillment/refund/payment dispute operations.
- Commerce Message conversation read/search/send/update/bulk update.
- Commerce Notification config/destination/subscription/filter/topic/public-key lifecycle helpers.
- Developer Key Management signing key helpers and Identity user live check.
- Notification challenge response, notification signature parsing/verification, and regulated refund request signing.
- Credential readiness must distinguish user OAuth token, application token, client keyset, marketplace, notification token, and optional digital signature keys.
- Manifest-only import must not create an eBay client or fetch public keys.

eBay migration shape:

- Provider package keeps direct HTTP support-slice code unless a later official eBay REST SDK appears for the selected APIs.
- If eBay utility SDKs are adopted, keep them narrow and optional where they replace local protocol helpers without broadening runtime dependencies.
- Include source/version/checksum/allowlist metadata for the selected official OpenAPI URLs already recorded in `ebaySelectedApiSpecs`.
- Do not replace the support slice with the community `ebay-api` package unless the architecture owners explicitly accept a non-official broad client.

## Tests Preserved Or Added

- New split package tests assert operation binding, manifest-only imports, SDK/client viability, and support-slice metadata.
- Existing monolith marketplace code remains in place while split-package tests and follow-up coverage are completed before deletion.

Follow-up test ports remain useful before deleting the monolith:

- Amazon: port old `adapter/client-operations.test.ts`, `adapter/credentials.test.ts`, `adapter/notifications.test.ts`, `adapter/sigv4.test.ts`, `adapter/manifest.test.ts`, `adapter/conformance.test.ts`, and `public-types.test.ts` into the split package before old code deletion.
- eBay: port old `adapter/client-operations.test.ts`, `adapter/digital-signatures.test.ts`, `adapter/notifications.test.ts`, `adapter/manifest.test.ts`, `adapter/conformance.test.ts`, and `public-types.test.ts` into the split package before old code deletion.
- Keep running #28's `provider-packages:check` and package import smoke checks when package exports or support-slice metadata change.

## Final Decision For This Thread

Create `@cognidesk/integration-marketplace-amazon` and `@cognidesk/integration-marketplace-ebay` as split provider packages now that #20 and #21 foundations are reconciled in this branch. Amazon uses an official-SDK-plus-support-slice strategy; eBay uses a direct support-slice strategy with selected official OpenAPI source metadata. Keep the old monolith code until replacement package tests, docs/catalog wiring, and cleanup work are ready to remove it without compatibility re-exports.
