# Provider Integration Plan Alignment

Date: 2026-06-21

Source plan: ChatGPT group chat "Project Integration Plan" at `https://chatgpt.com/gg/6a36ea30b4e88198af1720242d92e75e`.

This file records how the external plan is represented in the repo and active GitHub/Codex workstreams. It is an orchestration checklist, not a replacement for ADR-0085, the migration matrix, or provider package tests.

## Current Alignment

| Plan requirement | Repo evidence | State | Owner |
| --- | --- | --- | --- |
| Move from one large `@cognidesk/integrations` runtime package to per-provider/category packages. | `docs/adr/0085-split-provider-integrations-into-sdk-backed-packages.md`, `pnpm-workspace.yaml`, `website/guides/provider-package-migration.md` | In progress | #19, #20, #23-#25, #29-#43 |
| Use package names that preserve category, such as `@cognidesk/integration-email-gmail` and `@cognidesk/integration-voice-twilio`. | ADR-0085, `docs/provider-migration-matrix.md`, generated catalog docs | In progress | #23-#25, #29-#43 |
| Keep a small provider-neutral integration kit. | `packages/integration-kit`, `pnpm providers:architecture` | Foundation present | #21 |
| Keep provider manifests, coverage, category profiles, readiness, and capability metadata. | `packages/integration-kit`, `packages/integration-catalog`, `packages/integrations/src/provider-catalog`, provider conformance tests | Foundation present | #21, #22, #28 |
| Make catalog metadata safe to load without importing provider SDK runtime code. | `packages/integration-catalog`, generated runtime-loader data, architecture guardrails | Foundation present | #22, #28 |
| Register runtime providers explicitly; do not auto-load installed provider packages. | ADR-0085, `website/guides/provider-package-migration.md`, architecture guardrail | Foundation present | #22, #28 |
| Use official SDKs where viable and keep direct/generated slices only when justified. | ADR-0085 SDK-first policy, `docs/provider-migration-matrix.md` provider decisions | In progress | #23-#25, #29-#43 |
| Separate Cognidesk adapter coverage from provider SDK/raw-client coverage. | ADR-0085, `docs/provider-api-coverage-audit.md`, provider conformance checks | Foundation present; provider-specific work remains | #26, #29-#43 |
| Bind manifest declarations to executable operation handlers. | `packages/integration-kit` conformance helpers; first-wave provider branches | In progress | #21, #23-#25, #29-#43 |
| Keep `/manifest` imports free of SDK initialization. | `pnpm provider-packages:check`, provider package architecture checks | Foundation present; provider-specific checks required | #28, #23-#25, #29-#43 |
| Delete generated full-provider clones when an official SDK-backed replacement lands. | First-wave branches #23-#25; migration matrix decisions | In progress | #23-#25, #29-#43 |
| Keep generated/direct code inside owning provider package with source/version/checksum/allowlist metadata when no SDK fits. | `docs/provider-migration-matrix.md` decisions | In progress | #29-#43 |
| Support independent provider publishing and package smoke checks. | `scripts/release-workspace.mjs`, `pnpm release:verify-packages -- --fail-size-budget`, integration package workflow | Foundation present; provider publish PRs still pending | #20, #28 |
| Migrate Gmail first, then validate with Outlook and Slack. | Pushed branches `codex/integrations-23-gmail-sdk-package`, `codex/integrations-24-microsoft-graph-packages`, `codex/integrations-25-chat-provider-packages` | Branches ready; PR creation blocked by permissions | #23, #24, #25 |
| Migrate remaining providers by cohort. | GitHub issues #29-#43, dirty provider-family worktrees, `docs/provider-migration-matrix.md` | In progress | #29-#43 |
| Remove old monolith and root generator pipeline after replacements exist. | #27, ADR-0085, `HANDOFF.md` | Blocked on provider replacements | #27 |

## Intentional Plan Deviation

The ChatGPT plan included a "legacy bridge" phase. ADR-0085 rejects that approach. The current migration policy is:

- no old-import compatibility package
- no `@cognidesk/integrations` bridge to split packages
- no subpath re-export shim
- no runtime `node_modules` scanning

Compatibility is handled through migration documentation and `pnpm providers:codemod:imports`. This deviation is intentional because a bridge would preserve the dependency and runtime-loading problems the refactor is meant to remove.

## Active Blockers

- Draft PR creation for #23, #24, and #25 failed from the orchestration environment with GitHub `createPullRequest` permission `must be a collaborator`; issue comments contain exact base/head/title handoffs.
- Most #29-#43 provider-family worktrees contain migration changes on top of `22fdbde` and still need final verification, commit, push, and PR handoff against `codex/integrations-foundation-stack`.
- Final #27 deletion is intentionally blocked until provider replacements have landed or the migration matrix explicitly drops a provider.

## Required Review Gate For Each Provider Branch

Before a provider migration branch is handed to review, run the scoped provider tests plus:

```bash
pnpm providers:architecture
pnpm provider-packages:check
pnpm providers:catalog:data
pnpm providers:catalog
pnpm providers:codemod:imports --check <changed paths>
pnpm --filter @cognidesk/integrations build
pnpm release:verify-packages -- --fail-size-budget
```

Generated catalog data, runtime-loader data, and `website/guides/provider-integrations-catalog.md` must be committed when their inputs change.
