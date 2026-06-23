# [Integrations] Package local and protocol adapters without provider SDK pretense

Note: issue #43 now tracks this workstream. This draft is retained as the branch-local body/source checklist.

## Goal

Move Cognidesk-owned local/protocol integration surfaces out of the old `@cognidesk/integrations` monolith into clean package boundaries, while preserving the rule that these packages are not external provider SDKs and should not claim full provider API coverage.

## Owned paths

- `packages/integrations/src/cobrowsing/cognidesk`
- `packages/integrations/src/form/cognidesk`
- `packages/integrations/src/help-center/cognidesk`
- `packages/integrations/src/community/forum`
- `packages/integrations/src/voice/sip`
- Record that `packages/integrations/src/email/imap` is owned by the email-provider workstream and must not be duplicated here.

## Proposed package boundaries

- `@cognidesk/integration-cobrowsing-cognidesk`
- `@cognidesk/integration-form-cognidesk`
- `@cognidesk/integration-help-center-cognidesk`
- `@cognidesk/integration-community-forum` unless the ADR requires concrete `@cognidesk/integration-community-discourse` naming
- `@cognidesk/integration-voice-sip`
- `@cognidesk/integration-email-imap` remains owned by the email-provider workstream and is already staged on issue #29

## Scope

- Keep cobrowsing, form, help-center, and SIP as Cognidesk-owned local/protocol adapters.
- Keep community forum as a scoped Discourse-compatible support adapter unless a maintained and policy-approved Discourse SDK choice is adopted.
- Verify SIP gateway library options such as `drachtio-srf`, but do not make a SIP stack a required dependency of the generic `@cognidesk/integration-voice-sip` package.
- Coordinate IMAP by reference only; the email workstream owns `@cognidesk/integration-email-imap` and recorded `imapflow` as the viable IMAP client.
- Split manifest-only exports from runtime helpers so metadata/catalog imports do not initialize crypto, HTTP clients, SIP gateway code, IMAP clients, or provider SDKs.
- Normalize adapters through `@cognidesk/integration-kit` once issue #21 is available.
- Remove old monolith exports only after replacement packages and conformance/package tests exist; do not add compatibility re-exports.

## Dependency gate

Do not implement or delete additional provider packages unless the combined foundation stack is available in the worktree. This branch is based on `codex/integrations-foundation-stack`, including issue #20 nested provider workspaces, issue #21 `@cognidesk/integration-kit` contracts, issue #22 catalog generation, issue #19 architecture, issue #26 provider matrix, and issue #28 guardrails for the first local/protocol package pass.

## Acceptance criteria

- Every owned path has a recorded decision: local protocol, scoped direct support slice, optional bridge candidate, email-owned handoff, or delete/not migrated.
- Final packages export `./manifest` without importing runtime helpers or optional provider/client libraries.
- `@cognidesk/integration-voice-sip` does not bundle a SIP transaction/dialog stack, registrar, SBC, RTP/SRTP media engine, or provider Voice REST SDK.
- Cobrowsing, form, and help-center packages keep only Cognidesk-owned runtime behavior and SDK-user-supplied storage/source/policy boundaries.
- Community forum package either remains a reviewed Discourse-compatible direct support slice or adopts an explicitly approved maintained SDK/library with documented trade-offs.
- IMAP ownership is reconciled with the email-provider workstream; this issue does not extract or modify the email package.
- Integration-kit conformance, manifest import, package export, dependency, and package smoke tests pass for each final package.
- Old `@cognidesk/integrations/*` subpaths are removed only after replacement packages and tests exist, with no compatibility shim.

## Verification

- `pnpm --filter <new-package> typecheck`
- `pnpm --filter <new-package> test`
- package export smoke from a temporary consumer project
- manifest-only import smoke proving no runtime SDK/client initialization
- integration-kit conformance tests for each package
