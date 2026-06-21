# Cognidesk Integration Refactor Handoff

Date: 2026-06-21

## Goal

Finish the provider integration refactor so every existing integration is covered by per-provider/package migration work, SDK/library usage is verified and adopted where viable, independent provider publishing works, and the ChatGPT integration plan is addressed without reintroducing the monolith.

## Current Baseline

- Main orchestration branch: `codex/integrations-foundation-stack`
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

## Thread Coordination State

Provider-family threads #23-#43, #27, #28, and #44 were sent the `22fdbde` foundation update. They should rebase or merge `codex/integrations-foundation-stack` before continuing. Threads #23, #24, #25, and #26 were also sent the `82d5e10` coordination handoff after the first-wave provider audit.

#27 and #44 worktree thread creation has been flaky in Codex app state. Multiple create attempts returned pending worktrees and then appeared as `notLoaded`/system-error threads. Until a clean thread is available, preserve their work in GitHub issues and this handoff:

- #27 must prepare cleanup maps/guardrails, not delete provider runtime prematurely.
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
- #25 follow-up: `packages/integrations/package.json` is staged in that worktree with the build-output fix; the provider branch owner still needs to review, stage generated/docs changes, commit, push, and open review.

Provider inventory ownership audit after `82d5e10`:

- Exact `packages/integrations/src/{category}/{provider}/index.ts` inventory count is 63 provider directories.
- `docs/provider-migration-matrix.md` has 63 provider rows: 23 `official-sdk`, 14 `generated-support-slice`, 20 `direct-http-support-slice`, 5 `local-protocol`, and 1 `delete-not-migrated`.
- Matrix rows and current provider directories match exactly; no provider is missing from the migration matrix.
- Issue-owned paths in #23-#25 plus #29-#43 cover all 63 providers once #25 is treated as owning both `workplace/slack` and `community/discord`.
- #25's title/scope covers Slack and Discord, but its body lacks an explicit owned-path line for `packages/integrations/src/workplace/slack`. A body edit failed with GitHub `UpdateIssue` permission denial, so the correction is recorded in a #25 comment: https://github.com/cognilabz/cognidesk/issues/25#issuecomment-4761881426. No duplicate Slack issue is needed unless Slack and Discord are intentionally split into separate PR lanes later.

First-wave PR handoff after branch owners committed:

- #23 is clean and pushed at `dd73d3e feat(integrations): migrate gmail provider package`.
- #24 is clean and pushed at `329d2d4 feat(integrations): split microsoft graph providers`.
- #25 is clean and pushed at `11a4164 feat(integrations): split slack and discord providers`.
- Draft PR creation from this thread failed with GitHub `createPullRequest` permission `must be a collaborator`. Open the PRs manually with base `codex/integrations-foundation-stack` and heads `codex/integrations-23-gmail-sdk-package`, `codex/integrations-24-microsoft-graph-packages`, and `codex/integrations-25-chat-provider-packages`.
- PR handoff comments were posted on #23, #24, and #25 with exact base/head/title instructions.

#29 email provider package lane:

- #29 is clean and pushed at `da467da feat(integrations): migrate email provider packages` on branch `codex/integrations-29-email-sdk-packages`.
- The branch adds `@cognidesk/email-mailgun`, `@cognidesk/email-postmark`, `@cognidesk/email-ses`, and `@cognidesk/email-imap` under `integrations/email/*`.
- The replacement packages use `mailgun.js`, `postmark`, `@aws-sdk/client-ses`, `@aws-sdk/client-sesv2`, and `imapflow` where viable.
- The old aggregate `packages/integrations/src/email/{imap,mailgun,postmark,ses}` implementations and tests were removed, and catalog/runtime loader/docs outputs were regenerated.
- Verification passed: all four email package tests, `pnpm providers:architecture`, `pnpm provider-packages:check`, catalog data/docs generation, old-import codemod check, aggregate builds after prerequisite packages, package smoke/size checks, targeted aggregate provider tests, and `git diff --check`.
- Draft PR creation failed through both the GitHub connector and `gh pr create` with permission errors (`Resource not accessible by integration` and `GraphQL: must be a collaborator`). Open the PR manually with base `codex/integrations-foundation-stack`, head `codex/integrations-29-email-sdk-packages`, and title `[Integrations] Split remaining email providers into SDK packages`.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/29#issuecomment-4761949585.

#30 ecommerce provider package lane:

- #30 is clean and pushed at `7aa3780 feat(integrations): migrate ecommerce provider packages` on branch `codex/integrations-30-ecommerce-sdk`.
- The branch adds `@cognidesk/ecommerce-stripe` and `@cognidesk/ecommerce-shopify` under `integrations/ecommerce/*`.
- Registry checks on 2026-06-21 showed `stripe@22.2.2` and `@shopify/admin-api-client@1.1.2` as current `latest` packages, with upstream repositories under Stripe and Shopify.
- The old aggregate Stripe generated full-API clone, Shopify Admin GraphQL inventory, ecommerce aggregate exports/tests, and obsolete generator scripts were removed.
- Verification passed: SDK registry checks, both ecommerce package tests, `pnpm providers:architecture`, split package builds, `pnpm provider-packages:check`, catalog data/docs generation, old-import codemod check, aggregate build after prerequisites, package smoke/size checks, targeted aggregate provider tests, and `git diff --check`.
- Draft PR creation failed through `gh pr create` with `GraphQL: must be a collaborator`. Open the PR manually with base `codex/integrations-foundation-stack`, head `codex/integrations-30-ecommerce-sdk`, and title `[Integrations] Migrate Stripe and Shopify to SDK packages`.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/30#issuecomment-4761968360.

#31 marketplace provider package lane:

- #31 is clean and pushed at `7d80906 feat(integrations): stage marketplace provider packages` on branch `codex/integrations-31-marketplace-amazon-ebay`.
- The branch adds staged `@cognidesk/marketplace-amazon` and `@cognidesk/marketplace-ebay` packages under `integrations/marketplace/*`.
- Amazon is recorded as `official-sdk-plus-support-slice`: it uses official `@amazon-sp-api-release/amazon-sp-api-sdk-js` as a lazy raw-client escape hatch and keeps local helpers for restricted-data-token and normalized support operations.
- eBay is recorded as a constrained direct support slice because no broad official Node/TypeScript REST SDK covers the selected Sell Fulfillment, Commerce Message, Commerce Notification, Developer Key Management, and Identity operations.
- Verification passed after relinking workspace modules with `CI=true pnpm install --prefer-offline`: both marketplace package tests/builds, `pnpm providers:architecture`, `pnpm provider-packages:check`, catalog data/docs generation, old-import codemod check, aggregate build after prerequisites, targeted aggregate provider tests, package smoke/size checks, and `git diff --check`.
- Unlike #29/#30, #31 intentionally keeps old aggregate marketplace subpaths in place. Final deletion is blocked on porting the legacy Amazon/eBay adapter tests listed in `docs/provider-migration-decisions/marketplace-amazon-ebay-sdk-first.md`, then removing `packages/integrations/src/marketplace/{amazon,ebay}` and the old aggregate marketplace exports/build entries without compatibility re-exports.
- Draft PR creation failed through `gh pr create` with `GraphQL: must be a collaborator`. Open the staged PR manually with base `codex/integrations-foundation-stack`, head `codex/integrations-31-marketplace-amazon-ebay`, and title `[Integrations] Stage Amazon/eBay marketplace provider packages`.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/31#issuecomment-4761992709.

#32 Meta messaging provider package lane:

- #32 is clean and pushed at `6013074 feat(integrations): migrate meta messaging packages` on branch `codex/integrations-32-meta-messaging`.
- The branch adds `@cognidesk/messaging-whatsapp`, `@cognidesk/social-instagram`, and `@cognidesk/social-messenger` under `integrations/*/*`.
- ADR-0086 records the SDK decision: keep constrained direct Meta Graph/Cloud API support slices because `whatsapp` is still alpha/archived and `facebook-nodejs-business-sdk` is broad Business/Marketing/Page infrastructure rather than a narrow primary runtime fit.
- The old aggregate `packages/integrations/src/messaging/whatsapp`, `packages/integrations/src/social/instagram`, and `packages/integrations/src/social/messenger` implementations/tests were removed, and catalog/runtime loader/docs outputs were regenerated.
- Verification passed: Meta SDK candidate npm registry checks, `CI=true pnpm install --prefer-offline`, all three Meta package tests, `pnpm providers:architecture`, `pnpm provider-packages:check`, catalog data/docs generation, old-import codemod check, aggregate build after prerequisites, targeted aggregate provider tests, package smoke/size checks, and `git diff --check`.
- Draft PR creation failed through `gh pr create` with `GraphQL: must be a collaborator`. Open the PR manually with base `codex/integrations-foundation-stack`, head `codex/integrations-32-meta-messaging`, and title `[Integrations] Migrate Meta messaging providers to split packages`.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/32#issuecomment-4762011276.

#33 RCS/TikTok provider package lane:

- #33 is clean and pushed at `e58a8a8 feat(integrations): migrate rcs and tiktok packages` on branch `codex/integrations-33-rcs-tiktok`.
- The branch adds `@cognidesk/messaging-rcs` and `@cognidesk/social-tiktok` under `integrations/*/*`.
- The SDK decision record keeps both providers as constrained direct support slices: RCS SDK candidates were partial or singleton-shaped for the integration-kit contract, and no official/maintained TikTok Node SDK covered the mixed Display/Research/Business/webhook surface.
- The old aggregate `packages/integrations/src/messaging/rcs` and `packages/integrations/src/social/tiktok` implementations/tests were removed, along with aggregate exports, catalog references, and aggregate build inputs.
- Verification passed: lockfile reconciliation, both split package tests, `pnpm providers:architecture`, `pnpm provider-packages:check`, catalog data/docs generation, old-import codemod check, aggregate build after prerequisites, targeted aggregate provider tests, package smoke/size checks, and `git diff --check`.
- Draft PR creation failed through `gh pr create` with `GraphQL: must be a collaborator`. Open the PR manually with base `codex/integrations-foundation-stack`, head `codex/integrations-33-rcs-tiktok`, and title `[Integrations] Migrate RCS and TikTok provider packages`.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/33#issuecomment-4762026640.

#34 review provider package lane:

- #34 is clean and pushed at `68a7af0 feat(integrations): migrate review provider packages` on branch `codex/integrations-34-review-sdk`.
- The branch adds `@cognidesk/review-googleplay` and `@cognidesk/review-appstore` under `integrations/review/*`.
- Google Play uses the official `@googleapis/androidpublisher` SDK package as the runtime/provider escape hatch.
- App Store remains a constrained App Store Connect REST/JWT support slice because Apple has no official App Store Connect customer-review JavaScript/TypeScript SDK; `@apple/app-store-server-library` targets App Store Server APIs, not App Store Connect customer reviews.
- The old aggregate `packages/integrations/src/review/{appstore,googleplay}` implementations/tests, generated full-provider clones, aggregate exports, catalog references, runtime loaders, and review build entry were removed.
- `@cognidesk/integration-kit` now passes run-scoped credentials from `integration.run(..., context)` into operation handlers; #34 includes the contract test that protects this behavior.
- Verification passed: both split review package tests/builds, integration-kit contract test, `pnpm providers:architecture`, `pnpm provider-packages:check`, catalog data/docs generation, old-import codemod check, aggregate build after prerequisites, targeted aggregate provider tests, package smoke/size checks, and `git diff --check`/`git diff --cached --check`.
- Draft PR creation failed through `gh pr create` with `GraphQL: must be a collaborator`. Open the PR manually with base `codex/integrations-foundation-stack`, head `codex/integrations-34-review-sdk`, and title `[Integrations] Migrate review providers to split packages`.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/34#issuecomment-4762048394.

#35 helpdesk ticketing provider package lane:

- #35 is clean and pushed at `be3d18a feat(integrations): migrate helpdesk ticketing packages` on branch `codex/integrations-35-helpdesk-ticketing-stack`.
- The branch adds `@cognidesk/ticketing-zendesk`, `@cognidesk/ticketing-freshdesk`, `@cognidesk/ticketing-front`, `@cognidesk/ticketing-gorgias`, `@cognidesk/ticketing-help-scout`, and `@cognidesk/ticketing-kustomer` under `integrations/ticketing/*`.
- All six remain constrained direct REST support slices: no official maintained backend JavaScript/TypeScript SDK was adopted for this cohort after checking the available provider packages and runtime boundaries.
- The old aggregate `packages/integrations/src/ticketing/{zendesk,freshdesk,front,gorgias,help-scout,kustomer}` implementations/tests, generated full-provider clones, aggregate exports, catalog references, and aggregate build inputs were removed.
- `docs/ticketing-sdk-first-workstream.md` records the SDK/library decisions and keeps #36/#37 as the next ticketing cohorts.
- Verification passed: package tests/builds for all six split ticketing packages, `pnpm providers:catalog:data`, `pnpm providers:catalog`, `pnpm providers:architecture`, `pnpm provider-packages:check`, old-import codemod check, aggregate build after prerequisites, targeted aggregate provider tests, package smoke/size checks, and `git diff --check`/`git diff --cached --check`.
- Draft PR creation failed through `gh pr create` with `GraphQL: must be a collaborator`. Open the PR manually with base `codex/integrations-foundation-stack`, head `codex/integrations-35-helpdesk-ticketing-stack`, and title `[Integrations] Migrate helpdesk ticketing providers to split packages`.
- PR handoff comment: https://github.com/cognilabz/cognidesk/issues/35#issuecomment-4762083916.

ChatGPT plan recheck:

- Re-read the in-app browser conversation "Project Integration Plan" on 2026-06-21.
- The plan's major requirements are tracked in `docs/provider-integration-plan-alignment.md`: per-provider packages, SDK-first policy, integration kit, metadata-only catalog, explicit runtime registration, adapter-vs-SDK coverage, independent publishing, first-wave Gmail/Graph/Slack validation, provider cohorts, and eventual monolith deletion.
- The plan's legacy-bridge phase is intentionally rejected by ADR-0085 and replaced with migration docs plus `pnpm providers:codemod:imports`.

Known caveat:

- Full `pnpm providers:check` has previously reached architecture/typecheck/ESM build and then terminated with SIGTERM during the legacy monolith DTS build. A targeted `pnpm --filter @cognidesk/integrations build` passed during #28 guardrail verification, but the full aggregate command still needs a fresh end-to-end run before treating that caveat as resolved.

## Next Best Actions

1. Have someone with collaborator rights open draft PRs for #23/#24/#25/#29/#30/#31/#32/#33/#34/#35 against `codex/integrations-foundation-stack`.
2. Use #23/#24/#25/#29/#30/#32/#33/#34/#35 as reference package patterns for final replacement/deletion migrations, and use #31 as a staged-package example where legacy test parity still blocks deletion.
3. Run `pnpm providers:catalog:data && pnpm providers:catalog`, `pnpm providers:architecture`, `pnpm provider-packages:check`, `pnpm providers:codemod:imports --check <changed-app-or-package-paths>`, and package smoke/size checks before provider migration review.
4. If GitHub issue-body edit permission becomes available, add `packages/integrations/src/workplace/slack` to #25's explicit owned paths.
5. Get #27 cleanup checklist work running in a clean branch or implement a checklist/guardrail directly if thread creation remains unavailable.
6. After each provider package lands, verify package conformance, catalog replacement, explicit registration docs, and old monolith deletion for that provider.
