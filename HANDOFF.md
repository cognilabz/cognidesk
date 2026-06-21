# Cognidesk Integration Refactor Handoff

Date: 2026-06-21

## Goal

Finish the provider integration refactor so every existing integration is covered by per-provider/package migration work, SDK/library usage is verified and adopted where viable, independent provider publishing works, and the ChatGPT integration plan is addressed without reintroducing the monolith.

## Current Baseline

- Main orchestration branch: `codex/integrations-foundation-stack`
- Last broadcast baseline commit: `22fdbde ci(integrations): verify provider catalog guardrails`
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

Provider-family threads #23-#43, #27, #28, and #44 were sent the `22fdbde` foundation update. They should rebase or merge `codex/integrations-foundation-stack` before continuing.

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

Known caveat:

- Full `pnpm providers:check` has previously reached architecture/typecheck/ESM build and then terminated with SIGTERM during the legacy monolith DTS build. A targeted `pnpm --filter @cognidesk/integrations build` passed during #28 guardrail verification, but the full aggregate command still needs a fresh end-to-end run before treating that caveat as resolved.

## Next Best Actions

1. Have #23/#24/#25 owners review their dirty worktrees, stage generated/docs/package changes, commit, push, and open PRs or hand them back for finalization.
2. Use #23/#24/#25 as the reference package patterns for #29-#43 provider-family migrations.
3. Run `pnpm providers:catalog:data && pnpm providers:catalog`, `pnpm providers:architecture`, `pnpm provider-packages:check`, `pnpm providers:codemod:imports --check <changed-app-or-package-paths>`, and package smoke/size checks before provider migration review.
4. Get #27 cleanup checklist work running in a clean branch or implement a checklist/guardrail directly if thread creation remains unavailable.
5. After each provider package lands, verify package conformance, catalog replacement, explicit registration docs, and old monolith deletion for that provider.
