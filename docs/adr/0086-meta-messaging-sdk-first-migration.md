# Meta messaging integrations SDK-first migration

Status: implemented for issue #32 after reconciling the issue #20 nested-workspace and issue #21 integration-kit foundations.

This record covers the Meta-owned support-channel integrations previously under `packages/integrations/src/messaging/whatsapp`, `packages/integrations/src/social/instagram`, and `packages/integrations/src/social/messenger`. The split packages are now present at `integrations/messaging/whatsapp`, `integrations/social/instagram`, and `integrations/social/messenger`, using package names `@cognidesk/messaging-whatsapp`, `@cognidesk/social-instagram`, and `@cognidesk/social-messenger`.

The migration strategy is to keep these providers as normalized support adapters over constrained Meta Graph support slices, with SDK/raw-client escape hatches where the maintained Meta SDK is useful. None of these packages should claim full Meta Graph, full Messenger Platform, full Instagram Platform, or full WhatsApp Business Platform coverage.

## Verified options

- `facebook-nodejs-business-sdk` is the maintained Meta Business SDK for JavaScript. The upstream repository describes it as a Business SDK covering the Marketing API plus Pages, Business Manager, Instagram, and other Facebook APIs, and its latest GitHub release observed during this workstream was `v25.0.2` on 2026-06-08. It is broad Graph/Marketing infrastructure and should never be imported by manifest-only or catalog entry points.
- `npm view facebook-nodejs-business-sdk` on 2026-06-21 reported npm `latest` as `24.0.1`, modified `2025-11-21T07:53:28.504Z`, with repository `facebook/facebook-nodejs-business-sdk`.
- If Messenger or Instagram package code later uses `facebook-nodejs-business-sdk`, it should do so only behind runtime client code and either use the matching `@types/facebook-nodejs-business-sdk` package as a dev dependency or wrap a narrow local interface.
- `whatsapp` is the WhatsApp Business Platform Node.js SDK package documented by the WhatsApp GitHub organization, but the project documentation now states that the project is archived. Its quickstart centers message sending and environment-variable configuration, while the current Cognidesk support slice also needs media upload/get/download, phone-number readiness, business profile read/update, and application-owned webhook hosting. It is therefore not suitable as the primary runtime dependency.
- `npm view whatsapp` on 2026-06-21 reported npm `latest` as `0.0.5-Alpha`, modified `2024-02-12T23:00:40.338Z`, with repository `WhatsApp/WhatsApp-Nodejs-SDK`.
- The current WhatsApp implementation is already a reviewed support slice from Meta's official Business Messaging OpenAPI v23 artifact: 7 selected operations from 78 paths / 113 operations, with `fullProviderApi: false` and `fullMetaGraphCoverage: false`.
- The current Messenger and Instagram implementations are checked Graph inventories, not generated full-provider clones. Messenger has 8 selected implemented operations and Instagram has 6 selected implemented operations, both with `fullMetaGraphCoverage: false`.

## Package decisions

### `@cognidesk/messaging-whatsapp`

Use a constrained direct Cloud API support slice instead of the `whatsapp` alpha SDK as the primary runtime dependency. Preserve the existing typed helpers for messages, template payload construction, media, phone-number readiness, business profile read/update, webhook challenge handling, X-Hub-Signature-256 validation, readiness, and credential status.

Expose raw HTTP/Graph client access through `createWhatsAppMessagingClient`. Do not import the official `whatsapp` package from manifest-only exports, and do not add it unless a later audit finds a stable release that covers media/profile/readiness without SDK-owned server bootstrapping.

### `@cognidesk/social-messenger`

Use `facebook-nodejs-business-sdk` only inside runtime client code where its Page methods map cleanly to the supported Messenger edges, or keep the current direct Graph support slice when a narrower implementation is simpler and more type-safe. In either case, the package remains a support-workflow subset around Page messages, sender actions, reusable attachments, conversations/message reads, Page readiness, webhook challenge handling, and X-Hub-Signature-256 validation.

Do not surface legacy Handover Protocol as current Cognidesk handoff coverage. Existing low-level thread-control helpers can remain legacy escape hatches, while Meta Conversation Routing setup stays outside the adapter.

### `@cognidesk/social-instagram`

Keep Instagram Messaging on the Business Messaging/Page access token model. Use a constrained Graph support slice for send, conversations, message read, account/page readiness, webhook challenge handling, and X-Hub-Signature-256 validation. `facebook-nodejs-business-sdk` may be available as a raw Graph client escape hatch if it helps SDK users with adjacent Page/Graph reads, but the normalized adapter should not depend on broad Instagram Platform coverage.

Do not mix this adapter with the separate Instagram API with Instagram Login conversations surface, media publishing, comments/moderation, mentions, insights, discovery, or account-management coverage.

## Implemented package guardrails

- `pnpm-workspace.yaml` includes `integrations/*/*`, and each Meta package has a `/manifest` export.
- Each package depends only on `@cognidesk/core` and `@cognidesk/integration-kit`; no Meta runtime SDK is pulled into manifest-only imports.
- Runtime entry points expose `define*Integration` wrappers bound with `defineIntegration`, plus raw support clients such as `createWhatsAppMessagingClient`, `createMessengerSocialClient`, and `createInstagramSocialClient`.
- Existing webhook verification remains fail-closed by default, with unsigned parsing available only through explicit `requireSignature: false`.
- Package tests cover conformance binding, manifest-only import separation, webhook signatures, normalized webhook events, raw client access, typecheck, build, and package smoke.
- Metadata uses the new package names and keeps `support-workflow-subset` / `fullMetaGraphCoverage: false`.
- No generated full-provider Meta Graph clone is introduced.

## GitHub tracker

Issue #32 is the dedicated tracker for this workstream.
