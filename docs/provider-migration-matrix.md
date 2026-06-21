# Provider Migration Matrix

Date: 2026-06-21

Issue: https://github.com/cognilabz/cognidesk/issues/26

This matrix records the migration decision for every current provider directory under `packages/integrations/src`. It is intentionally a planning contract, not a runtime migration. The `codex/integrations-foundation-stack` base contains the nested workspace, integration kit, metadata catalog, and guardrail layers; executable provider packages still land through #23-#25 and provider-family trackers #29-#43.

## Dependency Gate

Runtime provider migrations are blocked until the reference provider packages exist.

| Gate | Current repo evidence | State | Effect |
| --- | --- | --- | --- |
| #20 nested provider workspaces | `pnpm-workspace.yaml` includes `integrations/*/*`. | Landed | New provider package workspaces live under `integrations/{category}/{provider}`. |
| #21 integration kit | `packages/integration-kit` exists with provider-neutral helpers and conformance utilities. | Landed | Runtime handlers can move only into packages that use kit contracts and provider-specific tests. |
| #22 metadata catalog | `packages/integration-catalog` exists and catalog docs are generated from metadata. | Landed | Catalog generation stays metadata-only and must not import runtime provider modules. |
| #23 Gmail reference | Gmail still lives under `packages/integrations/src/email/gmail` with generated full API files. | Open | Treat Gmail as the first SDK-backed reference, not as a pattern already landed. |
| #24 Microsoft Graph reference | Outlook and Teams still use local `graph-api.generated` surfaces. | Open | Treat Graph auth, pagination, and subscription handling as unresolved. |
| #25 Slack and Discord reference | Slack still uses `web-api.generated`; Discord still has generated HTTP API code inside the monolith. | Open | Treat workplace/community event and package split patterns as unresolved. |

Additional local evidence:

- `packages/integrations/package.json` remains the legacy staging source.
- `pnpm providers:generate:list` still lists monolith generators for provider surfaces.
- `docs/adr/0085-split-provider-integrations-into-sdk-backed-packages.md` is the package-boundary source of truth. ADR-0081 is superseded.

## Decision Values

- `official-sdk`: migrate the provider package around the official SDK, with manifest-bound normalized operations and a raw client escape hatch. A raw SDK object alone is not a `full-provider-api` claim.
- `generated-support-slice`: keep generated code only inside the owning provider package, scoped to reviewed support operations, with source, version, checksum, and allowlist metadata. No install-time generation.
- `direct-http-support-slice`: keep handwritten/direct HTTP code only inside the owning provider package, with reviewed operation allowlists and fail-closed readiness.
- `local-protocol`: keep a Cognidesk-owned or standards/protocol adapter contract rather than an external provider API clone.
- `delete-not-migrated`: remove the monolith provider because a replacement already exists or because the surface should not become a new provider package.

## Package Rules

- New provider packages use category/provider naming such as `@cognidesk/email-gmail`.
- Providers that span categories are split by category. Twilio becomes `@cognidesk/sms-twilio` and `@cognidesk/voice-twilio`; Zoom becomes `@cognidesk/contact-center-zoom` and `@cognidesk/video-zoom`.
- As replacements land, delete old monolith provider code from `@cognidesk/integrations`. Do not add compatibility re-exports.
- Manifest-only imports must not initialize SDK clients.
- Generated or direct support slices must include source/version/checksum/allowlist metadata before migration.

## SDK Sanity Check

Registry checks run on 2026-06-21 confirmed package existence and Node-compatible entrypoints/types for the named SDK-first cohort and reference SDKs: `stripe` 22.2.2, `@shopify/shopify-api` 13.0.0, `twilio` 6.0.2, AWS SDK v3 service clients 3.1073.0, `@hubspot/api-client` 13.5.0, `@googleapis/gmail` 17.0.0, `@microsoft/microsoft-graph-client` 3.0.7, `@slack/web-api` 7.17.0, and `discord.js` 14.26.4. Additional viable SDK candidates checked include `mailgun.js`, `postmark`, `@googleapis/androidpublisher`, `purecloud-platform-client-v2`, `@deepgram/sdk`, `@elevenlabs/elevenlabs-js`, `@vonage/server-sdk`, `@ringcentral/sdk`, `intercom-client`, `jsforce`, and `microsoft-cognitiveservices-speech-sdk`.

The SDK checks do not unblock migration. They only establish first-pass package viability for the matrix.

## Provider Decisions

<!-- provider-migration-matrix:start -->
| Provider | Current evidence | Decision | Target package | Notes |
| --- | --- | --- | --- | --- |
| `cobrowsing/cognidesk` | Local protocol helpers with client, request, readiness, and webhooks; no generated surface. | local-protocol | `@cognidesk/cobrowsing-cognidesk` | Move only after #21 exposes local-protocol conformance. Keep SDK-user-owned store, consent, origin, signing, and relay responsibilities explicit. |
| `community/discord` | Generated Discord HTTP API surface plus interactions, request, readiness, and tests. | official-sdk | `@cognidesk/community-discord` | Reference issue #25 says reconcile with `packages/integration-discord` and keep `discord.js` usage. Retain only small direct/generated support slices for interactions or signed events if `discord.js` does not cover them. |
| `community/forum` | Discourse-compatible direct implementation in `index.ts`; checked selected API evidence in tests/docs. | direct-http-support-slice | `@cognidesk/community-forum` | Keep as a Discourse-compatible support slice, not arbitrary forum-platform coverage. Add source/version/checksum/allowlist metadata before packaging. |
| `contact-center/8x8` | Generated official 8x8 contact-center API slice plus direct support helpers. | generated-support-slice | `@cognidesk/contact-center-8x8` | Keep generated slice scoped to reviewed contact-center support operations. Do not claim full 8x8 platform coverage. |
| `contact-center/aircall` | Direct support implementation in `index.ts`; checked inventory tests. | direct-http-support-slice | `@cognidesk/contact-center-aircall` | No broad SDK-first migration until an official runtime SDK is verified. Keep callback/case support operations allowlisted. |
| `contact-center/amazon-connect` | Generated Connect-family API surface plus AWS SigV4/request helpers. | official-sdk | `@cognidesk/contact-center-amazon-connect` | Cohort A. Use AWS SDK v3 Connect-family clients. Keep a small generated/direct support slice only for gaps such as reviewed webhook or payload normalization. |
| `contact-center/five9` | Direct support implementation in `index.ts`; checked inventory tests. | direct-http-support-slice | `@cognidesk/contact-center-five9` | Keep only reviewed contact-center support operations. Do not infer full Five9 API coverage from configured HTTP paths. |
| `contact-center/genesys-cloud` | Generated Genesys Cloud full API surface plus direct client, readiness, and webhooks. | official-sdk | `@cognidesk/contact-center-genesys-cloud` | Use the official Genesys Cloud JS SDK if it fits runtime/auth injection. Retain generated support metadata only for support slices that the SDK cannot cover cleanly. |
| `contact-center/genesys-engage` | Direct GMS/chat/request helpers for on-prem Genesys Engage surfaces. | direct-http-support-slice | `@cognidesk/contact-center-genesys-engage` | Keep on-prem GMS/WebChatService slices explicit. Do not merge with Genesys Cloud or PureConnect. |
| `contact-center/genesys-pureconnect` | Direct ICWS-style support helpers. | direct-http-support-slice | `@cognidesk/contact-center-genesys-pureconnect` | Keep as a separate PureConnect deployment slice with reviewed endpoint inventory. |
| `contact-center/nextiva` | Direct support implementation in `index.ts`; checked inventory tests. | direct-http-support-slice | `@cognidesk/contact-center-nextiva` | Keep support-operation allowlist and readiness. Do not claim broader contact-center platform coverage. |
| `contact-center/nice-cxone` | Generated full API files and generated chunks; minimal handwritten layer. | generated-support-slice | `@cognidesk/contact-center-nice-cxone` | Keep generated code inside the package with source/version/checksum/allowlist metadata. Add normalized operation handlers before migration. |
| `contact-center/ringcentral` | Generated RingCX Voice and Engage Digital slices. | generated-support-slice | `@cognidesk/contact-center-ringcentral` | `@ringcentral/sdk` exists but must be verified against the RingCX and Engage Digital surfaces before SDK-first migration. Keep current slices separate from broader RingCentral platform claims. |
| `contact-center/talkdesk` | Generated Talkdesk API surface and tests. | generated-support-slice | `@cognidesk/contact-center-talkdesk` | Keep generated support slice scoped to reviewed Talkdesk contact-center operations. |
| `contact-center/zoom` | Generated Zoom Contact Center API surface. | generated-support-slice | `@cognidesk/contact-center-zoom` | Split from `video/zoom`. Keep contact-center-specific source/version/checksum/allowlist metadata and do not share a broad Zoom provider package. |
| `ecommerce/shopify` | Direct Admin GraphQL helpers plus generated Admin GraphQL root-field inventory. | official-sdk | `@cognidesk/ecommerce-shopify` | Implemented in #30 with `@shopify/admin-api-client`, normalized Admin GraphQL support operations, webhook HMAC validation, readiness, and raw Admin GraphQL escape hatch. Old monolith helpers and generated Admin GraphQL inventory are removed. |
| `ecommerce/stripe` | Generated Stripe OpenAPI surface plus direct client, validation, and webhook helpers. | official-sdk | `@cognidesk/ecommerce-stripe` | Implemented in #30 with `stripe`, normalized commerce support operations, SDK webhook verification, readiness, and raw Stripe client escape hatch. Old monolith generated full API clone is removed. |
| `email/gmail` | Generated Gmail full API surface plus OAuth/request/mapping/webhook helpers. | official-sdk | `@cognidesk/email-gmail` | Reference issue #23. Use `@googleapis/gmail`; preserve normalized DTOs, readiness, Pub/Sub parsing, and support workflow handlers. |
| `email/imap` | Injected IMAP connector/readiness contract in `index.ts`; no bundled IMAP client. | local-protocol | `@cognidesk/email-imap` | Keep as protocol/injected-connector package. Do not add a runtime IMAP dependency until #21 defines connector conformance. |
| `email/mailgun` | Generated Mailgun OpenAPI surface plus direct request, form, and webhook helpers. | official-sdk | `@cognidesk/email-mailgun` | `mailgun.js` is viable. Use SDK-first for common mail workflows and retain generated/direct slices only for reviewed gaps. |
| `email/outlook` | Generated Microsoft Graph email slice plus request, mapping, and webhook helpers. | official-sdk | `@cognidesk/email-outlook` | Reference issue #24. Use `@microsoft/microsoft-graph-client`; keep subscription and webhook behavior under contract tests. |
| `email/postmark` | Generated Postmark Swagger surface plus direct request/readiness/webhook helpers. | official-sdk | `@cognidesk/email-postmark` | Use `postmark` for SDK-first send/message workflows. Retain generated support metadata only for account/server gaps. |
| `email/ses` | Generated AWS SES API surface plus SigV4/signing/SNS helpers. | official-sdk | `@cognidesk/email-ses` | Cohort A. Use AWS SDK v3 SES/SESV2 clients. Keep SNS and signing support helpers where they are Cognidesk behavior. |
| `form/cognidesk` | Local Cognidesk form protocol in `index.ts`; no external provider API. | local-protocol | `@cognidesk/form-cognidesk` | Move only after #21 local-protocol contracts exist. |
| `help-center/cognidesk` | Local Cognidesk help-center protocol in `index.ts`; no external provider API. | local-protocol | `@cognidesk/help-center-cognidesk` | Move only after #21 local-protocol contracts exist. |
| `marketplace/amazon` | Generated Amazon SP-API model surface plus SigV4 and notification helpers. | generated-support-slice | `@cognidesk/marketplace-amazon` | Keep generated SP-API slice with source/version/checksum/allowlist metadata. Preserve restricted-data-token and SigV4 behavior as explicit support operations. |
| `marketplace/ebay` | Selected eBay typed wrapper catalog plus signing and webhook helpers. | generated-support-slice | `@cognidesk/marketplace-ebay` | Keep selected official eBay API slices only. Do not broaden to full eBay platform coverage. |
| `messaging/rcs` | Direct RCS/RBM support helpers with selected inventory evidence. | direct-http-support-slice | `@cognidesk/messaging-rcs` | Keep selected operations and readiness. Anonymous discovery gaps remain direct-support metadata, not full coverage. |
| `messaging/whatsapp` | Direct WhatsApp Cloud API message builders, credentials, readiness, and webhooks. | direct-http-support-slice | `@cognidesk/messaging-whatsapp` | Keep Meta Cloud API support allowlist and policy constraints. No full Meta Graph claim. |
| `review/appstore` | Generated App Store Connect OpenAPI surface plus JWT/request helpers. | generated-support-slice | `@cognidesk/review-appstore` | Keep generated slice with source/version/checksum/allowlist metadata. Apple JWT behavior remains handwritten support code. |
| `review/googleplay` | Generated Android Publisher API surface plus service-account/JWT helpers. | official-sdk | `@cognidesk/review-googleplay` | Use `@googleapis/androidpublisher` if runtime/auth injection fits. Keep direct service-account helpers only for support gaps. |
| `sms/twilio` | Generated Twilio Messaging-domain API surface plus direct request/readiness/webhook helpers. | official-sdk | `@cognidesk/sms-twilio` | Cohort A. Use `twilio`; split from `voice/twilio`. Retain SMS-specific webhook validation as Cognidesk support code. |
| `social/instagram` | Direct Instagram Messaging/Graph support helpers with selected inventory evidence. | direct-http-support-slice | `@cognidesk/social-instagram` | Keep selected support surface and app-review/readiness constraints. No full Meta or Instagram platform claim. |
| `social/messenger` | Direct Messenger Platform/Graph support helpers with selected inventory evidence. | direct-http-support-slice | `@cognidesk/social-messenger` | Keep selected Page messaging and webhook support operations. No full Meta Graph claim. |
| `social/tiktok` | Direct TikTok selected support helpers with checked inventory evidence. | direct-http-support-slice | `@cognidesk/social-tiktok` | Keep selected Display/Research/content status/comment/webhook operations only. |
| `ticketing/dynamics365` | Direct Dataverse Customer Service support implementation in `index.ts`; checked inventory tests. | direct-http-support-slice | `@cognidesk/ticketing-dynamics365` | Keep tenant-specific Dataverse metadata and permissions explicit. Do not treat Microsoft Graph reference as a Dynamics SDK pattern. |
| `ticketing/freshdesk` | Direct Freshdesk v2 support helpers with checked inventory evidence. | direct-http-support-slice | `@cognidesk/ticketing-freshdesk` | Keep selected Freshdesk ticket/contact/agent/group operations. No full Freshdesk API claim. |
| `ticketing/front` | Generated Front Core/Channel API surface and tests. | generated-support-slice | `@cognidesk/ticketing-front` | Keep generated support slice scoped to reviewed support workflows. Add checksum/allowlist metadata before packaging. |
| `ticketing/gorgias` | Generated Gorgias public API surface and tests. | generated-support-slice | `@cognidesk/ticketing-gorgias` | Keep generated support slice scoped to official docs-derived operations. |
| `ticketing/help-scout` | Direct Help Scout support implementation in `index.ts`; checked inventory tests. | direct-http-support-slice | `@cognidesk/ticketing-help-scout` | Keep selected Inbox API support operations and explicit gap inventory. |
| `ticketing/hubspot` | Generated HubSpot public API surface plus direct client, readiness, and webhooks. | official-sdk | `@cognidesk/ticketing-hubspot` | Cohort A. Use `@hubspot/api-client`; retain generated/direct support slices only for SDK gaps with allowlist metadata. |
| `ticketing/intercom` | Generated Intercom stable REST API surface plus direct webhook/request helpers. | official-sdk | `@cognidesk/ticketing-intercom` | `intercom-client` is viable. Verify stable API coverage and keep generated support metadata only where the SDK is incomplete. |
| `ticketing/kustomer` | Generated Kustomer public API registry surface and tests. | generated-support-slice | `@cognidesk/ticketing-kustomer` | Keep generated support slice scoped to selected support workflows and checked source metadata. |
| `ticketing/oracle-service` | Direct Oracle Fusion Service support implementation in `index.ts`; checked inventory tests. | direct-http-support-slice | `@cognidesk/ticketing-oracle-service` | Keep tenant-specific service request metadata, privileges, and custom OData gaps explicit. |
| `ticketing/pega-customer-service` | Direct Pega Customer Service support implementation in `index.ts`; checked inventory tests. | direct-http-support-slice | `@cognidesk/ticketing-pega-customer-service` | Keep DX API support slice and app-specific API gaps explicit. |
| `ticketing/salesforce` | Direct Salesforce Service Cloud support helpers and checked inventory evidence. | direct-http-support-slice | `@cognidesk/ticketing-salesforce` | `jsforce` exists, but migration should stay direct/support-slice until org-specific metadata, permissions, and object coverage are contract-tested. |
| `ticketing/sap-service-cloud` | Direct SAP Service Cloud support implementation in `index.ts`; checked inventory tests. | direct-http-support-slice | `@cognidesk/ticketing-sap-service-cloud` | Keep tenant `$metadata`, communication arrangement, and custom OData gaps explicit. |
| `ticketing/servicenow` | Direct ServiceNow support implementation in `index.ts`; checked inventory tests. | direct-http-support-slice | `@cognidesk/ticketing-servicenow` | Keep instance-specific table, ACL, plugin, and scripted REST gaps explicit. |
| `ticketing/zendesk` | Generated Zendesk Support API surface plus handwritten manifest/readiness credentials. | generated-support-slice | `@cognidesk/ticketing-zendesk` | No verified official npm SDK package was found under `@zendesk/api-client`; keep generated Support API slice unless a viable official SDK is proven. |
| `ticketing/zoho-desk` | Direct Zoho Desk support implementation in `index.ts`; checked inventory tests. | direct-http-support-slice | `@cognidesk/ticketing-zoho-desk` | Keep selected ticket/contact/thread support operations and explicit gaps. |
| `video/whereby` | Generated Whereby API root files plus direct client, readiness, request, and webhooks. | generated-support-slice | `@cognidesk/video-whereby` | Keep generated support slice and direct webhook helpers inside package with checksum/allowlist metadata. |
| `video/zoom` | Generated Zoom Meetings API surface plus direct credentials/readiness/webhook helpers. | generated-support-slice | `@cognidesk/video-zoom` | Split from `contact-center/zoom`. Keep Meetings-specific source/version/checksum/allowlist metadata. |
| `voice/aws-speech` | Generated AWS speech inventories plus client/contracts/credentials. | official-sdk | `@cognidesk/voice-aws-speech` | Cohort A. Use AWS SDK v3 Transcribe Streaming, Transcribe, and Polly clients; keep Cognidesk speech-pipeline behavior handwritten. |
| `voice/azure-speech` | Generated Azure Speech inventory files; minimal handwritten layer. | official-sdk | `@cognidesk/voice-azure-speech` | Use the official Microsoft Speech SDK where it fits Node runtime. Retain direct short-audio REST slice only for documented SDK gaps. |
| `voice/deepgram` | Generated Deepgram OpenAPI surface; minimal handwritten layer. | official-sdk | `@cognidesk/voice-deepgram` | Use `@deepgram/sdk`; keep generated support metadata only for SDK gaps and speech-pipeline adapters. |
| `voice/elevenlabs` | Generated ElevenLabs OpenAPI surface plus direct speech provider helpers. | official-sdk | `@cognidesk/voice-elevenlabs` | Use `@elevenlabs/elevenlabs-js`; keep generated support metadata only for reviewed gaps. |
| `voice/google-speech` | Generated Google Speech root files plus direct credentials/request helpers. | official-sdk | `@cognidesk/voice-google-speech` | Use official Google Cloud Speech/Text-to-Speech clients after verifying runtime package split. Keep Cognidesk speech-pipeline code handwritten. |
| `voice/openai` | Monolith wrapper duplicates the existing `packages/voice-openai` package that already uses the official `openai` SDK. | delete-not-migrated | `@cognidesk/voice-openai` | Do not create a new provider package. Remove the monolith duplicate once imports and docs converge on the existing package. |
| `voice/sip` | Cognidesk SIP gateway contract, readiness, request, and webhook helpers. | local-protocol | `@cognidesk/voice-sip` | Keep as BYOC/local protocol package. Do not implement a SIP stack in the provider migration. |
| `voice/twilio` | Generated Twilio Voice-domain API surface plus direct request/readiness/webhook helpers. | official-sdk | `@cognidesk/voice-twilio` | Cohort A. Use `twilio`; split from `sms/twilio`. Retain voice webhook validation and Cognidesk telephony semantics as support code. |
| `voice/vonage` | Generated Vonage Voice/Application/Conversation/Numbers slices plus direct credentials/webhooks. | official-sdk | `@cognidesk/voice-vonage` | Use `@vonage/server-sdk`; keep generated/direct support slices only for SDK gaps with allowlist metadata. |
| `workplace/slack` | Generated Slack Web API surface plus client, readiness, request, events, and signed-request tests. | official-sdk | `@cognidesk/workplace-slack` | Reference issue #25. Use `@slack/web-api`; treat Socket Mode, OAuth, and incoming webhooks as separate extensions or future packages. |
| `workplace/teams` | Generated Microsoft Graph Teams slice plus request/notification helpers. | official-sdk | `@cognidesk/workplace-teams` | Reference issue #24. Use `@microsoft/microsoft-graph-client`; share Graph helper internals only after Outlook/Teams contract shape is agreed. |
<!-- provider-migration-matrix:end -->

## Stop Point

Because the reference package gate remains open, stop here for issue #26. Broad provider-family migrations should start only after at least one of #23, #24, or #25 provides a reference package pattern with contract tests.
