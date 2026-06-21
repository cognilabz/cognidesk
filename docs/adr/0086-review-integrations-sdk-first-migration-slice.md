---
Status: accepted
Depends on: ADR-0085, issue #34
---

# Migrate review integrations with SDK-first provider boundaries

## Context

The Google Play and App Store review integrations currently live under
`packages/integrations/src/review/googleplay` and `packages/integrations/src/review/appstore`.
Both expose normalized review helpers, credential readiness, JWT/token handling, and generated
full-provider API clones from provider machine-readable specs.

The active integration architecture changed the target shape:

- ADR-0085 accepts per-provider packages, SDK-first transport, no compatibility bridge, and
  adapter-vs-provider-client coverage semantics.
- #20 adds nested provider workspaces and independent provider releases.
- #21 creates `@cognidesk/integration-kit` operation and conformance contracts.
- #22 creates a metadata-only catalog so manifest imports do not initialize provider clients.
- #34 tracks the Google Play and App Store review migration.

The #20 and #21 foundations have been reconciled for this migration: `integrations/*/*`
workspaces are discoverable, and the review packages bind manifests to executable handlers through
`@cognidesk/integration-kit`.

## Decision

Prepare the review migration as split provider packages:

- `integrations/review/googleplay` publishes `@cognidesk/review-googleplay`.
- `integrations/review/appstore` publishes `@cognidesk/review-appstore`.
- Depend on `@cognidesk/integration-kit` for manifest, operation binding, credential readiness,
  errors, pagination, and conformance.
- Expose normalized review operations as the Cognidesk adapter surface.
- Expose provider SDK/raw clients only as provider escape hatches, not as Cognidesk-owned full API
  clones.
- Keep `manifest` exports metadata-only and free of provider SDK/client initialization.
- Remove the old aggregate review runtime and tests once the split package tests pass; this branch
  removes `packages/integrations/src/review/{appstore,googleplay}` and the aggregate review
  exports/build entries.

## Google Play

Use the official Google Node client for Android Publisher. Prefer `@googleapis/androidpublisher`
over the broad `googleapis` package to avoid installing unrelated Google API clients. The spike on
2026-06-21 found `@googleapis/androidpublisher@36.0.0` available on npm, while `googleapis@173.0.0`
is the broad aggregate package.

Target adapter operations:

- list reviews for a package
- read one review
- reply to or update a review reply
- readiness check against one bounded reviews/app call

Keep support for SDK-user auth clients, access-token suppliers, raw access tokens, and
service-account credentials. Service-account material is routed through the official Google auth
client rather than a Cognidesk-owned token endpoint exchange.

The generated Android Publisher full-provider clone is not copied into the new package.
Advanced Android Publisher API access should go through the official client escape hatch.

## App Store Connect

No official Apple JavaScript or TypeScript SDK for the App Store Connect API review surface was found
on 2026-06-21. Apple publishes App Store Connect as a REST API with an OpenAPI specification and JWT
API-key authentication. Apple does publish an official Node package named
`@apple/app-store-server-library`, but that library targets App Store Server API, App Store Server
Notifications, Retention Messaging API, and Advanced Commerce API. It is not an App Store Connect
customer-review client and should not be used for this review integration.

Therefore `@cognidesk/review-appstore` should use a constrained direct REST support slice unless an
official App Store Connect JavaScript/TypeScript SDK appears before implementation.

Target adapter operations:

- list customer reviews for the configured app
- follow Apple-provided `links.next` only for that app's customer review collection
- read one customer review
- create or update a customer review response
- delete a customer review response when policy permits
- readiness check against the configured app resource

The support slice should keep ES256 JWT creation or accept an SDK-user JWT factory, pin the reviewed
OpenAPI version/source/checksum used for request shape, and avoid generated full-provider clones in
the final package.

Reviewed package metadata pins Apple's App Store Connect OpenAPI zip downloaded from
`https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip`
on 2026-06-21. The reviewed document inside the archive is `openapi.oas.json`, version `4.4`, with
checksum `sha256:352ccca83f6460761bc513b87ed667974afb1347649d49b7cd98cd9041236bec`; the archive
checksum was `sha256:18d2e448db9ebac9f6fb183e786342f67dfaa0c515995d782694a776e26c2dfd`.

The explicit reviewed operation allowlist is:

- `GET /v1/apps/{id}/customerReviews` for `appstore.reviews.list` and Apple-provided `links.next` pagination on the configured app.
- `GET /v1/customerReviews/{id}` for `appstore.reviews.get`.
- `POST /v1/customerReviewResponses` for `appstore.reviewResponses.createOrUpdate`.
- `DELETE /v1/customerReviewResponses/{id}` for `appstore.reviewResponses.delete`.
- `GET /v1/apps/{id}` for readiness and the reviewed raw-client escape hatch.

## Manifest-only import rule

The final packages must provide manifest/catalog entry points that do not import:

- provider runtime SDKs
- generated full API clients
- request transports
- auth/JWT material
- credential-bearing client factories

The current monolith still imports generated count constants in review manifests for legacy
full-provider evidence. The split review package tests guard their `manifest` source files against
importing provider clients, request transports, JWT helpers, or provider SDK modules directly.

## Tracking issue

GitHub issue #34 is the tracking issue for this migration. The issue body replaces the draft issue
body from the initial spike and keeps the same acceptance criteria: reconcile #20 and #21 first,
ship provider packages through the SDK-first architecture, keep `*/manifest` imports metadata-only,
avoid old import compatibility bridges, and delete migrated monolith runtime code only after the
replacement package tests pass.
