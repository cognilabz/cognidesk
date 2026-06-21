# Cognidesk Integration Refactor Handoff

Date: 2026-06-21

## Goal

Finish the provider integration refactor so every existing integration is covered by per-provider/package migration work, SDK/library usage is verified and adopted where viable, independent provider publishing works, and the ChatGPT integration plan is addressed without reintroducing the monolith.

## Current Baseline

- Main orchestration branch: `codex/integrations-foundation-stack`
- Foundation draft PR: https://github.com/cognilabz/cognidesk/pull/46 (base `main`)
- Last code guardrail baseline commit: `22fdbde ci(integrations): verify provider catalog guardrails`
- Latest orchestration handoff is the current head of `codex/integrations-foundation-stack`.
- The branch includes #44 old-import codemod work and the #28 CI/catalog guardrail follow-up.
- ADR-0085 is the source of truth for package boundaries.
- Old `@cognidesk/integrations/*` imports are removed by migration docs/codemods, not by a bridge package or shim.
- Runtime provider auto-discovery by scanning `node_modules` is forbidden.

## Foundation Already Landed

- `pnpm-workspace.yaml` supports nested provider packages under `integrations/*/*`.
- `@cognidesk/integration-kit` exists for provider-neutral contracts and conformance helpers.
- `@cognidesk/integration-catalog` exists for metadata-only catalog entries.
- `scripts/generate-integration-catalog.ts` now discovers split provider packages and prefers split manifests over legacy monolith entries when ids match.
- Generated provider catalog docs now render target package names, `/manifest`, `/runtime`, and `integrations/{category}/{provider}` workspace paths.
- `website/guides/provider-package-migration.md` records the no-bridge migration policy and initial codemod mapping.
- `docs/provider-integration-plan-alignment.md` maps the ChatGPT "Project Integration Plan" requirements to repo evidence, owners, intentional deviations, and active blockers.
- `pnpm providers:codemod:imports` runs the syntax-aware old-import codemod from `scripts/migrate-provider-imports.mjs`.
- The Integration Packages workflow regenerates provider catalog data before build and fails on stale catalog data, runtime-loader data, or catalog docs.

## Active Issues And Workstreams

- #23: Gmail reference package, `@cognidesk/email-gmail`, official `@googleapis/gmail`.
- #24: Microsoft Graph Outlook/Teams packages, `@cognidesk/email-outlook` and `@cognidesk/workplace-teams`.
- #25: Slack/Discord packages, `@cognidesk/workplace-slack` and `@cognidesk/community-discord`.
- #26: Provider migration matrix. It now treats #20/#21/#22 as landed and blocks broad migrations on #23/#24/#25 reference patterns.
- #27: Delete the legacy monolith and root generator pipeline only after provider replacements exist.
- #28: Docs, CI, smoke checks, package conformance, release docs. The workflow/catalog guardrail slice is implemented on the orchestration branch.
- #29-#43: Provider-family migration threads covering every remaining current integration.
- #44: Old-import codemod. Implemented on the orchestration branch with parser-backed import/export rewrites, fail-closed diagnostics, docs wiring, and fixtures.
- #45: SAP Service Cloud SDK follow-up. Tracks adopting SAP Cloud SDK once a redistributable/pinned Service Cloud EDMX or equivalent deterministic source exists.

## Thread Coordination State

Provider-family threads #23-#43, #27, #28, and #44 were sent the `22fdbde` foundation update. They should rebase or merge `codex/integrations-foundation-stack` before continuing. Threads #23, #24, #25, and #26 were also sent the `82d5e10` coordination handoff after the first-wave provider audit.

#27 now has a clean cleanup-map/guardrail branch. #44 remains implemented directly on the orchestration branch:

- #27 prepared cleanup maps/guardrails and intentionally did not delete provider runtime prematurely.
- #44 is implemented directly on the orchestration branch. If a clean separate thread appears later, use this implementation as the baseline and extend fixtures instead of adding a bridge/shim/runtime resolver.

## Required Provider Package Behavior

For each split provider package:

- Create `integrations/{category}/{provider}`.
- Publish as `@cognidesk/{category}-{provider}`.
- Include a `src/manifest.ts` entry that imports without initializing SDK clients.
- Use the official maintained SDK/library when suitable.
- If no viable SDK exists, keep only a reviewed generated/direct support slice with source/version/checksum/allowlist metadata.
- Keep raw provider SDK access as an escape hatch, but do not count raw SDK breadth as Cognidesk adapter coverage.
- Remove old monolith provider code only when the replacement package and tests exist, unless the migration matrix says `delete-not-migrated`.
- Run `pnpm providers:catalog:data && pnpm providers:catalog`; stale `@cognidesk/integrations/*` entries for a migrated split package are a failure.

## Verification Snapshot

Passed on `0c083a4`:

- `pnpm providers:catalog:data`
- `pnpm providers:catalog`
- `pnpm providers:architecture`
- `pnpm provider-packages:check`
- `pnpm --filter @cognidesk/integrations exec vitest run test/provider-migration-matrix.test.ts`
- `pnpm --dir packages/integrations exec vitest run generated-surface-integrity`
- `pnpm packages:check-version-train`
- `pnpm release:verify-stable`
- `git diff --check`

Additional #44 verification:

- `node --check scripts/migrate-provider-imports.mjs`
- `node --test scripts/migrate-provider-imports.test.mjs`
- `pnpm providers:codemod:imports --check scripts/migrate-provider-imports.test.mjs`
- `pnpm providers:architecture`
- `git diff --check`

Additional #28 workflow/catalog guardrail verification:

- `node --check scripts/check-integration-package-architecture.mjs`
- `node --test scripts/check-integration-package-architecture.test.mjs`
- `pnpm providers:architecture`
- `pnpm provider-packages:check`
- `pnpm providers:catalog:data` (first attempt was interrupted by SIGTERM during `@cognidesk/integration-kit` DTS; direct rerun of the package build passed, then the full command passed)
- `pnpm providers:catalog`
- `git diff --exit-code -- packages/integration-catalog/src/catalog.generated.ts packages/integrations/src/provider-catalog/runtime-loaders.generated.ts website/guides/provider-integrations-catalog.md`
- `pnpm --filter @cognidesk/integrations build`
- `pnpm release:verify-packages -- --fail-size-budget`
- `git diff --check`

First-wave provider branch audit after `22fdbde`:

- #23 `codex/integrations-23-gmail-sdk-package`: `@cognidesk/email-gmail` exists under `integrations/email/gmail` using `@googleapis/gmail`; package tests, architecture, conformance, catalog data/docs, codemod check, legacy aggregate build, and package smoke/size budgets passed.
- #24 `codex/integrations-24-microsoft-graph-packages`: `@cognidesk/email-outlook` and `@cognidesk/workplace-teams` exist using `@microsoft/microsoft-graph-client`; Outlook/Teams tests, architecture, conformance, catalog data/docs, codemod check, legacy aggregate build, and package smoke/size budgets passed.
- #25 `codex/integrations-25-chat-provider-packages`: `@cognidesk/workplace-slack` uses `@slack/web-api`; `@cognidesk/community-discord` uses `discord.js`; Slack/Discord tests, architecture, conformance, catalog data/docs, codemod check, legacy aggregate build, and package smoke/size budgets passed after fixing `packages/integrations` workplace build output to `dist/workplace/teams`.
- #25 follow-up after checking the latest `origin/main` merge `940d98b [codex] Fix flight demo Discord and voice handoff (#18)`: the branch is now pushed at `96a40ac feat(integrations): fold discord gateway into provider package`. The new Discord Gateway flight-demo package from main was folded into `integrations/community/discord` instead of preserving a second `@cognidesk/integration-discord` package. Keep the ChatGPT/ADR naming rule: npm package `@cognidesk/community-discord`; visible integration/catalog names such as `Discord Integration`, `createDiscordIntegration`, and `discordIntegrationManifest`.
- #25 follow-up verification passed: browser recheck of the ChatGPT plan naming examples, `pnpm --filter @cognidesk/community-discord test`, catalog data/docs generation, `node --check scripts/generate-provider-integration-catalog.mjs`, architecture/conformance checks, scoped old-import codemod check, Flight Demo typecheck/test, release package smoke/size budget, and `git diff --check`/`git diff --cached --check`. A full old-import codemod over `apps/flight-demo` still flags voice imports from `@cognidesk/integrations/voice/*`; leave those for #40/#41.

Provider inventory ownership audit after `82d5e10`:

- Exact `packages/integrations/src/{category}/{provider}/index.ts` inventory count is 63 provider directories.
- `docs/provider-migration-matrix.md` has 63 provider rows: 23 `official-sdk`, 14 `generated-support-slice`, 20 `direct-http-support-slice`, 5 `local-protocol`, and 1 `delete-not-migrated`.
- Matrix rows and current provider directories match exactly; no provider is missing from the migration matrix.
- Issue-owned paths in #23-#25 plus #29-#43 cover all 63 providers once #25 is treated as owning both `workplace/slack` and `community/discord`.
- #25's title/scope covers Slack and Discord, but its body lacks an explicit owned-path line for `packages/integrations/src/workplace/slack`. A body edit failed with GitHub `UpdateIssue` permission denial, so the correction is recorded in a #25 comment: https://github.com/cognilabz/cognidesk/issues/25#issuecomment-4761881426. No duplicate Slack issue is needed unless Slack and Discord are intentionally split into separate PR lanes later.

First-wave PR handoff after branch owners committed:

- #23 is clean and pushed at `dd73d3e feat(integrations): migrate gmail provider package`.
- #24 is clean and pushed at `329d2d4 feat(integrations): split microsoft graph providers`.
- #25 is clean and pushed at `96a40ac feat(integrations): fold discord gateway into provider package` after the original `11a4164 feat(integrations): split slack and discord providers`.
- Draft PRs are open: #47 for Gmail, #48 for Microsoft Graph Outlook/Teams, and #49 for Slack/Discord.
- PR handoff comments were posted on #23, #24, and #25 with exact base/head/title instructions.

#27 legacy monolith cleanup guardrail lane:

- #27 is clean and pushed at `b85c116 docs(integrations): track monolith cleanup readiness` on branch `codex/integrations-27-delete-monolith`.
- The branch records deletion readiness and cleanup guardrails instead of removing runtime code ahead of provider PR merges.
- Verification passed: `node --check scripts/check-integrations-cleanup-map.mjs`, `node --check scripts/check-integration-package-architecture.mjs`, `node --test scripts/check-integration-package-architecture.test.mjs`, `pnpm providers:cleanup-map`, `pnpm providers:architecture`, `pnpm --filter @cognidesk/integrations exec vitest run test/provider-migration-matrix.test.ts`, and `git diff --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/50.
- Issue comment: https://github.com/cognilabz/cognidesk/issues/27#issuecomment-4762370708.

#29 email provider package lane:

- #29 is clean and pushed at `da467da feat(integrations): migrate email provider packages` on branch `codex/integrations-29-email-sdk-packages`.
- The branch adds `@cognidesk/email-mailgun`, `@cognidesk/email-postmark`, `@cognidesk/email-ses`, and `@cognidesk/email-imap` under `integrations/email/*`.
- The replacement packages use `mailgun.js`, `postmark`, `@aws-sdk/client-ses`, `@aws-sdk/client-sesv2`, and `imapflow` where viable.
- The old aggregate `packages/integrations/src/email/{imap,mailgun,postmark,ses}` implementations and tests were removed, and catalog/runtime loader/docs outputs were regenerated.
- Verification passed: all four email package tests, `pnpm providers:architecture`, `pnpm provider-packages:check`, catalog data/docs generation, old-import codemod check, aggregate builds after prerequisite packages, package smoke/size checks, targeted aggregate provider tests, and `git diff --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/51.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/29#issuecomment-4761949585.

#30 ecommerce provider package lane:

- #30 is clean and pushed at `7aa3780 feat(integrations): migrate ecommerce provider packages` on branch `codex/integrations-30-ecommerce-sdk`.
- The branch adds `@cognidesk/ecommerce-stripe` and `@cognidesk/ecommerce-shopify` under `integrations/ecommerce/*`.
- Registry checks on 2026-06-21 showed `stripe@22.2.2` and `@shopify/admin-api-client@1.1.2` as current `latest` packages, with upstream repositories under Stripe and Shopify.
- The old aggregate Stripe generated full-API clone, Shopify Admin GraphQL inventory, ecommerce aggregate exports/tests, and obsolete generator scripts were removed.
- Verification passed: SDK registry checks, both ecommerce package tests, `pnpm providers:architecture`, split package builds, `pnpm provider-packages:check`, catalog data/docs generation, old-import codemod check, aggregate build after prerequisites, package smoke/size checks, targeted aggregate provider tests, and `git diff --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/52.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/30#issuecomment-4761968360.

#31 marketplace provider package lane:

- #31 is clean and pushed at `7d80906 feat(integrations): stage marketplace provider packages` on branch `codex/integrations-31-marketplace-amazon-ebay`.
- The branch adds staged `@cognidesk/marketplace-amazon` and `@cognidesk/marketplace-ebay` packages under `integrations/marketplace/*`.
- Amazon is recorded as `official-sdk-plus-support-slice`: it uses official `@amazon-sp-api-release/amazon-sp-api-sdk-js` as a lazy raw-client escape hatch and keeps local helpers for restricted-data-token and normalized support operations.
- eBay is recorded as a constrained direct support slice because no broad official Node/TypeScript REST SDK covers the selected Sell Fulfillment, Commerce Message, Commerce Notification, Developer Key Management, and Identity operations.
- Verification passed after relinking workspace modules with `CI=true pnpm install --prefer-offline`: both marketplace package tests/builds, `pnpm providers:architecture`, `pnpm provider-packages:check`, catalog data/docs generation, old-import codemod check, aggregate build after prerequisites, targeted aggregate provider tests, package smoke/size checks, and `git diff --check`.
- Unlike #29/#30, #31 intentionally keeps old aggregate marketplace subpaths in place. Final deletion is blocked on porting the legacy Amazon/eBay adapter tests listed in `docs/provider-migration-decisions/marketplace-amazon-ebay-sdk-first.md`, then removing `packages/integrations/src/marketplace/{amazon,ebay}` and the old aggregate marketplace exports/build entries without compatibility re-exports.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/53.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/31#issuecomment-4761992709.

#32 Meta messaging provider package lane:

- #32 is clean and pushed at `6013074 feat(integrations): migrate meta messaging packages` on branch `codex/integrations-32-meta-messaging`.
- The branch adds `@cognidesk/messaging-whatsapp`, `@cognidesk/social-instagram`, and `@cognidesk/social-messenger` under `integrations/*/*`.
- ADR-0086 records the SDK decision: keep constrained direct Meta Graph/Cloud API support slices because `whatsapp` is still alpha/archived and `facebook-nodejs-business-sdk` is broad Business/Marketing/Page infrastructure rather than a narrow primary runtime fit.
- The old aggregate `packages/integrations/src/messaging/whatsapp`, `packages/integrations/src/social/instagram`, and `packages/integrations/src/social/messenger` implementations/tests were removed, and catalog/runtime loader/docs outputs were regenerated.
- Verification passed: Meta SDK candidate npm registry checks, `CI=true pnpm install --prefer-offline`, all three Meta package tests, `pnpm providers:architecture`, `pnpm provider-packages:check`, catalog data/docs generation, old-import codemod check, aggregate build after prerequisites, targeted aggregate provider tests, package smoke/size checks, and `git diff --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/54.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/32#issuecomment-4762011276.

#33 RCS/TikTok provider package lane:

- #33 is clean and pushed at `e58a8a8 feat(integrations): migrate rcs and tiktok packages` on branch `codex/integrations-33-rcs-tiktok`.
- The branch adds `@cognidesk/messaging-rcs` and `@cognidesk/social-tiktok` under `integrations/*/*`.
- The SDK decision record keeps both providers as constrained direct support slices: RCS SDK candidates were partial or singleton-shaped for the integration-kit contract, and no official/maintained TikTok Node SDK covered the mixed Display/Research/Business/webhook surface.
- The old aggregate `packages/integrations/src/messaging/rcs` and `packages/integrations/src/social/tiktok` implementations/tests were removed, along with aggregate exports, catalog references, and aggregate build inputs.
- Verification passed: lockfile reconciliation, both split package tests, `pnpm providers:architecture`, `pnpm provider-packages:check`, catalog data/docs generation, old-import codemod check, aggregate build after prerequisites, targeted aggregate provider tests, package smoke/size checks, and `git diff --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/55.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/33#issuecomment-4762026640.

#34 review provider package lane:

- #34 is clean and pushed at `68a7af0 feat(integrations): migrate review provider packages` on branch `codex/integrations-34-review-sdk`.
- The branch adds `@cognidesk/review-googleplay` and `@cognidesk/review-appstore` under `integrations/review/*`.
- Google Play uses the official `@googleapis/androidpublisher` SDK package as the runtime/provider escape hatch.
- App Store remains a constrained App Store Connect REST/JWT support slice because Apple has no official App Store Connect customer-review JavaScript/TypeScript SDK; `@apple/app-store-server-library` targets App Store Server APIs, not App Store Connect customer reviews.
- The old aggregate `packages/integrations/src/review/{appstore,googleplay}` implementations/tests, generated full-provider clones, aggregate exports, catalog references, runtime loaders, and review build entry were removed.
- `@cognidesk/integration-kit` now passes run-scoped credentials from `integration.run(..., context)` into operation handlers; #34 includes the contract test that protects this behavior.
- Verification passed: both split review package tests/builds, integration-kit contract test, `pnpm providers:architecture`, `pnpm provider-packages:check`, catalog data/docs generation, old-import codemod check, aggregate build after prerequisites, targeted aggregate provider tests, package smoke/size checks, and `git diff --check`/`git diff --cached --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/56.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/34#issuecomment-4762048394.

#35 helpdesk ticketing provider package lane:

- #35 is clean and pushed at `be3d18a feat(integrations): migrate helpdesk ticketing packages` on branch `codex/integrations-35-helpdesk-ticketing-stack`.
- The branch adds `@cognidesk/ticketing-zendesk`, `@cognidesk/ticketing-freshdesk`, `@cognidesk/ticketing-front`, `@cognidesk/ticketing-gorgias`, `@cognidesk/ticketing-help-scout`, and `@cognidesk/ticketing-kustomer` under `integrations/ticketing/*`.
- All six remain constrained direct REST support slices: no official maintained backend JavaScript/TypeScript SDK was adopted for this cohort after checking the available provider packages and runtime boundaries.
- The old aggregate `packages/integrations/src/ticketing/{zendesk,freshdesk,front,gorgias,help-scout,kustomer}` implementations/tests, generated full-provider clones, aggregate exports, catalog references, and aggregate build inputs were removed.
- `docs/ticketing-sdk-first-workstream.md` records the SDK/library decisions and keeps #36/#37 as the next ticketing cohorts.
- Verification passed: package tests/builds for all six split ticketing packages, `pnpm providers:catalog:data`, `pnpm providers:catalog`, `pnpm providers:architecture`, `pnpm provider-packages:check`, old-import codemod check, aggregate build after prerequisites, targeted aggregate provider tests, package smoke/size checks, and `git diff --check`/`git diff --cached --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/57.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/35#issuecomment-4762083916.

#36 CRM/platform ticketing provider package lane:

- #36 is clean and pushed at `87e45b8 feat(integrations): migrate platform ticketing packages` on branch `codex/integrations-36-ticketing-platform-stack`.
- The branch adds `@cognidesk/ticketing-hubspot`, `@cognidesk/ticketing-intercom`, `@cognidesk/ticketing-salesforce`, `@cognidesk/ticketing-dynamics365`, `@cognidesk/ticketing-servicenow`, and `@cognidesk/ticketing-zoho-desk` under `integrations/ticketing/*`.
- HubSpot uses official `@hubspot/api-client`; Intercom uses pinned `intercom-client@7.0.3`; Salesforce uses maintained `jsforce`.
- Dynamics 365, ServiceNow, and Zoho Desk remain constrained direct support slices because no suitable official/maintained server-side runtime SDK was found for those adapter surfaces.
- The old aggregate ticketing subpaths for these six providers were removed from `@cognidesk/integrations` exports/build entries. HubSpot/Intercom generated full-provider API clones and the old Salesforce direct aggregate slice were deleted from the monolith.
- `scripts/generate-integration-catalog.ts` now discovers split packages before loading legacy aggregate references, so deleted aggregate source files are no longer required once a split provider owns the manifest.
- Verification passed: workspace relink, catalog data/docs generation, shared test-harness build, all six split package tests/builds, architecture/conformance checks, scoped old-import codemod check, legacy aggregate build, targeted aggregate provider tests, UI/HTTP/React builds, package smoke/size budget checks, and `git diff --check`/`git diff --cached --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/58.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/36#issuecomment-4762197844.

#37 enterprise service-cloud ticketing provider package lane:

- #37 is clean and pushed at `f2c6de7 feat(integrations): migrate enterprise ticketing packages` on branch `codex/integrations-37-oracle-pega-sap`.
- The branch adds `@cognidesk/ticketing-oracle-service`, `@cognidesk/ticketing-pega-customer-service`, and `@cognidesk/ticketing-sap-service-cloud` under `integrations/ticketing/*`.
- Oracle remains a constrained direct Fusion Service REST support slice after registry verification rejected `oci-fusionapps@2.135.0` for this adapter surface; that package manages OCI Fusion Apps Service resources, not Fusion Service `serviceRequests`.
- Pega remains a constrained direct DX API support slice after registry verification rejected `@pega/constellationjs@25.1.3` for this adapter surface; it is Constellation UI/client orchestration, not a maintained server-side Customer Service case SDK.
- SAP records `@sap-cloud-sdk/odata-v2@4.7.0`, `@sap-cloud-sdk/generator@4.7.0`, and `@sap-cloud-sdk/http-client@4.7.0` as viable, but keeps the reviewed direct OData `ServiceRequestCollection` slice until a redistributable/pinned Service Cloud EDMX or equivalent deterministic source is available.
- Follow-up #45 was created for SAP Cloud SDK adoption after the source artifact/provenance blocker is resolved.
- The old aggregate ticketing subpaths for Oracle, Pega, and SAP were removed from `@cognidesk/integrations` exports/build entries and legacy runtime loaders; tests were moved into the split packages.
- `@cognidesk/integration-kit` now preserves manifest literal operation aliases from `defineIntegrationProviderPackage`, so split integrations keep typed `integration.run(...)` operation inputs.
- `scripts/generate-integration-catalog.ts` now discovers split provider packages before importing legacy monolith sources, so deleted legacy source files do not block catalog generation.
- Verification passed: workspace relink, catalog data/docs generation, shared test-harness build, all three split package tests/typechecks/builds, integration-kit and integration-catalog tests, architecture/conformance checks, scoped old-import codemod check, legacy aggregate build, targeted aggregate provider tests, UI/HTTP/React builds, release workspace tests, package smoke/size budget checks, npm registry SDK checks, and `git diff --check`/`git diff --cached --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/59.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/37#issuecomment-4762255607.

#38 contact-center core provider package lane:

- #38 is clean and pushed at `abcce55 feat(integrations): migrate contact-center SDK packages` on branch `codex/integrations-38-contact-center-sdk`.
- The branch adds `@cognidesk/contact-center-amazon-connect`, `@cognidesk/contact-center-genesys-cloud`, and `@cognidesk/contact-center-ringcentral` under `integrations/contact-center/*`.
- Amazon Connect uses official AWS SDK v3 clients `@aws-sdk/client-connect` and `@aws-sdk/client-connectparticipant` for normalized task/chat/participant/transfer workflows. The previous generated Connect-family full-provider clone is intentionally not carried forward as Cognidesk adapter coverage.
- Genesys Cloud uses `purecloud-platform-client-v2` and keeps local Open Messaging signature verification at the webhook boundary.
- RingCentral uses `@ringcentral/sdk` for auth/request dispatch and raw platform access, while RingCX Voice/Engage Digital gaps stay explicitly scoped as not fully typed by that SDK.
- The old aggregate contact-center subpaths for Amazon Connect, Genesys Cloud, and RingCentral were removed from `@cognidesk/integrations` exports/build entries, provider catalog refs, runtime loaders, monolith tests, generator scripts, and generated full-API clone files.
- Package naming fixtures were tightened away from stale `@cognidesk/integration-*` examples. Provider packages must use `@cognidesk/{category}-{provider}`; `@cognidesk/integration-kit` and `@cognidesk/integration-catalog` remain legitimate provider-neutral infrastructure packages.
- Verification passed: `corepack pnpm` workspace relink, catalog data/docs generation, shared test-harness build, all three split package tests/typechecks/builds, integration-kit and integration-catalog tests, architecture/conformance checks, scoped old-import codemod check, full legacy aggregate build to an uncapped temp logfile, targeted aggregate provider tests, release workspace tests, package smoke/size budget checks, HTTP/React/UI builds, voice-openai and voice-websocket build/tests for the naming check, and `git diff --check`/`git diff --cached --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/60.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/38#issuecomment-4762294902.

#39 contact-center long-tail provider package lane:

- #39 is clean and pushed at `a1571b7 feat(integrations): migrate long-tail contact-center packages` on branch `codex/integrations-39-contact-center-sdk`.
- The branch adds nine split packages under `integrations/contact-center/*`: `@cognidesk/contact-center-8x8`, `@cognidesk/contact-center-aircall`, `@cognidesk/contact-center-five9`, `@cognidesk/contact-center-genesys-engage`, `@cognidesk/contact-center-genesys-pureconnect`, `@cognidesk/contact-center-nextiva`, `@cognidesk/contact-center-nice-cxone`, `@cognidesk/contact-center-talkdesk`, and `@cognidesk/contact-center-zoom`.
- The branch removes the old long-tail monolith exports, runtime/catalog references, source directories, tests, obsolete generated-provider scripts, and generated full-provider clone surfaces for those nine providers. It intentionally leaves #38-owned Amazon Connect, Genesys Cloud, and RingCentral untouched except for the legacy RingCentral build-output fix required by aggregate tests while #38 remains separate.
- Package names follow the ChatGPT/ADR rule `@cognidesk/{category}-{provider}` and no old-import bridge/shim/runtime resolver was added.
- Verification passed: catalog data/docs generation, architecture, codemod, split package typecheck/test/build, provider package conformance, aggregate integrations build/tests, full repo build, release package smoke/size, version train, stable release, stale import guard, naming guard, and `git diff --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/61.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/39#issuecomment-4762339756.

#40 cloud speech/OpenAI voice provider package lane:

- #40 is clean and pushed at `9313251 docs(integrations): show provider integration names` on branch `codex/integrations-40-voice-speech-sdk`, after the original implementation commit `456686d feat(integrations): migrate cloud voice providers`.
- The branch adds `@cognidesk/voice-aws-speech`, `@cognidesk/voice-azure-speech`, `@cognidesk/voice-google-speech`, and the rehomed canonical `@cognidesk/voice-openai` under `integrations/voice/*`.
- The ChatGPT package naming rule is applied explicitly: source paths are `integrations/{category}/{provider}` and public packages are `@cognidesk/{category}-{provider}`. OpenAI Realtime voice is therefore `integrations/voice/openai` published as `@cognidesk/voice-openai`, with visible manifest metadata such as `OpenAI Realtime Voice Integration`, `integrationPackageName`, and `/manifest` + `/runtime` entry points.
- `@cognidesk/voice-openai` depends on `@cognidesk/voice-websocket` because OpenAI Realtime voice uses the shared Cognidesk browser voice transport. That dependency is package-to-package reuse, not a reason to make WebSocket a provider integration.
- `@cognidesk/voice-websocket` remains in `packages/voice-websocket` intentionally because it is Cognidesk browser voice transport/session infrastructure, not an external Provider Integration. Do not move it to `integrations/voice/websocket` or count it as a provider package/catalog provider.
- The old `packages/integrations/src/voice/openai` monolith path still exists intentionally until #40 import/codemod/application checks and #27 cleanup converge. Do not add a bridge/shim; delete the legacy subpath when the replacement is fully wired.
- Verification passed: workspace relink, shared package builds, all four split voice package tests/builds, voice SDK-first migration guard, `pnpm providers:architecture`, `pnpm provider-packages:check`, catalog data/docs generation, legacy aggregate `@cognidesk/integrations` build, focused voice package build, codemod import check, release package smoke/size checks, and `git diff --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/62.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/40#issuecomment-4762165439.
- Follow-up package-naming/browser recheck comment: https://github.com/cognilabz/cognidesk/issues/40#issuecomment-4762373256. The catalog docs now visibly show `Integration | OpenAI Realtime Voice Integration` next to `Package | @cognidesk/voice-openai`.

#41 voice telephony/SMS provider package lane:

- #41 is clean and pushed at `e6cd623 feat(integrations): migrate voice and sms SDK packages` on branch `codex/integrations-41-voice-sms-sdk`.
- The branch adds final replacement packages `@cognidesk/voice-deepgram`, `@cognidesk/voice-elevenlabs`, `@cognidesk/voice-twilio`, `@cognidesk/sms-twilio`, and `@cognidesk/voice-vonage` under `integrations/{category}/{provider}`.
- The old monolith exports/build entries/runtime-loader refs/provider refs/source/tests/generators for `voice/deepgram`, `voice/elevenlabs`, `voice/twilio`, `sms/twilio`, and `voice/vonage` were removed after split package verification. No old-import bridge was added.
- SDKs adopted where viable: `@deepgram/sdk`, `@elevenlabs/elevenlabs-js`, `twilio`, and `@vonage/server-sdk`.
- `@cognidesk/voice-websocket` stayed infrastructure-only in `packages/voice-websocket`; it is not a provider package.
- Verification passed: catalog/docs generation, architecture/conformance/codemod checks, split package typecheck/build/test, manifest/runtime import smokes, `pnpm build`, `pnpm test`, `pnpm providers:check`, release smoke/size, strict package naming scans, stale-reference scans, and diff checks.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/63.
- PR/issue handoff comment: https://github.com/cognilabz/cognidesk/issues/41#issuecomment-4762376419.

#42 video provider package lane:

- #42 is clean and pushed at `ddd1a0c feat(integrations): migrate video provider packages` on branch `codex/integrations-42-video-sdk`.
- The branch adds final replacement packages `@cognidesk/video-zoom` and `@cognidesk/video-whereby` under `integrations/video/*`.
- Both remain constrained generated REST support slices after SDK viability review; browser meeting/video SDKs were not treated as suitable server-side adapter runtimes.
- The old aggregate video exports, source/tests, runtime loaders, provider refs, build entries, and generator scripts were removed. The only remaining old video import is the deliberate codemod fixture in `scripts/migrate-provider-imports.test.mjs`.
- `@cognidesk/integration-kit` gets a narrow type-only return refinement for `defineIntegrationProviderPackage` so split package manifests preserve exact operation aliases through declaration generation.
- Verification passed: video package tests/typechecks/builds, conformance, architecture, codemod, aggregate integrations build/tests, catalog/docs generation, release smoke/size, package naming scan, stale video path scan, and manifest/runtime import boundaries.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/64.
- PR/issue handoff comment: https://github.com/cognilabz/cognidesk/issues/42#issuecomment-4762377897.

#43 local/protocol provider package lane:

- #43 is clean and pushed at `19baf7c feat(integrations): migrate local protocol packages` on branch `codex/integrations-43-local-protocol-adapters`.
- The branch adds `@cognidesk/cobrowsing-cognidesk`, `@cognidesk/community-forum`, `@cognidesk/form-cognidesk`, `@cognidesk/help-center-cognidesk`, and `@cognidesk/voice-sip` under `integrations/{category}/{provider}`.
- These are local/protocol or Cognidesk-owned bridge adapters, so they depend on shared Cognidesk packages and `@cognidesk/integration-kit`, not external provider SDKs. SIP remains a reviewed protocol adapter rather than a full SIP stack.
- The old aggregate local/protocol subpaths and tests were removed from `@cognidesk/integrations` after replacement package tests/builds passed; no old-import bridges or compatibility shims were added.
- Package-naming fixtures were tightened again so provider examples use `@cognidesk/{category}-{provider}` (`@cognidesk/email-gmail`, `@cognidesk/email-acme`, `@cognidesk/sms-acme`) instead of stale `@cognidesk/integration-*` names. `@cognidesk/integration-kit` and `@cognidesk/integration-catalog` remain legitimate provider-neutral infrastructure packages.
- Verification passed: frozen install with linked workspace packages disabled, catalog data/docs generation, all five split package tests/typechecks/builds, architecture/conformance checks, scoped old-import codemod check, local/protocol migration doc guard, full `pnpm providers:check`, package version/release train checks, release workspace test, package smoke/size checks, direct dist import smoke for `.`/`./manifest`/`./runtime`, integration-kit tests, stale old-import and stale provider naming scans, and `git diff --check`/`git diff --cached --check`.
- Draft PR: https://github.com/cognilabz/cognidesk/pull/65.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/43#issuecomment-4762332846.

ChatGPT plan recheck:

- Re-read the in-app browser conversation "Project Integration Plan" on 2026-06-21.
- The plan's major requirements are tracked in `docs/provider-integration-plan-alignment.md`: per-provider packages, SDK-first policy, integration kit, metadata-only catalog, explicit runtime registration, adapter-vs-SDK coverage, independent publishing, first-wave Gmail/Graph/Slack validation, provider cohorts, and eventual monolith deletion.
- Package naming follows the plan examples: provider packages are `@cognidesk/{category}-{provider}` such as `@cognidesk/email-gmail`, `@cognidesk/workplace-slack`, `@cognidesk/ecommerce-stripe`, `@cognidesk/sms-twilio`, and `@cognidesk/voice-twilio`. The word `Integration` is made visible through manifest/catalog metadata rows, not by prefixing provider npm packages with `@cognidesk/integration-*`.
- The plan's legacy-bridge phase is intentionally rejected by ADR-0085 and replaced with migration docs plus `pnpm providers:codemod:imports`.

## Next Best Actions

1. Review draft PR #46 first; it establishes the foundation branch that all provider PRs use as base.
2. Review provider/cleanup drafts #47-#65 against `codex/integrations-foundation-stack`. Use #23/#24/#25/#29/#30/#32/#33/#34/#35/#36/#37/#38/#39/#40/#41/#42/#43 as final replacement patterns, and #31 as the staged-package example where legacy test parity still blocks deletion.
3. Run `pnpm providers:catalog:data && pnpm providers:catalog`, `pnpm providers:architecture`, `pnpm provider-packages:check`, `pnpm providers:codemod:imports --check <changed-app-or-package-paths>`, and package smoke/size checks before taking each provider PR out of draft.
4. If GitHub issue-body edit permission becomes available, add `packages/integrations/src/workplace/slack` to #25's explicit owned paths.
5. Review #27's cleanup map after provider PRs are queued; do not delete the remaining legacy monolith surfaces until their replacement package branches are merged and the cleanup guardrails are green on the combined tree.
6. After each provider package lands, verify package conformance, catalog replacement, explicit registration docs, and old monolith deletion for that provider.
7. Track #45 separately from #37: SAP Service Cloud remains honest as a reviewed support slice until the SAP Cloud SDK source artifact/provenance blocker is removed.
