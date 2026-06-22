# Local/protocol integrations SDK-first migration

Date: 2026-06-21

Tracking issue: https://github.com/cognilabz/cognidesk/issues/43

This workstream audits integration surfaces that should not be rewritten as faux provider SDKs. The goal is to keep Cognidesk-owned local/protocol behavior in clean package boundaries while the external SDK-first migration removes the old `@cognidesk/integrations` monolith.

## Foundation reconciliation

This branch is based on `codex/integrations-foundation-stack`, which provides the committed foundation prerequisites before moving local/protocol code:

- nested provider workspaces from issue #20, with `integrations/*/*` in `pnpm-workspace.yaml`
- `@cognidesk/integration-kit` contracts from issue #21, including manifest/handler binding and reusable conformance tests
- metadata catalog generation from issue #22
- architecture, provider-matrix, and docs/CI guardrails from issues #19, #26, and #28

Current local state: the combined foundation stack is present in this worktree. The first local/protocol packages now live under `integrations/*/*`; their old `@cognidesk/integrations` subpaths, provider-catalog references, and aggregate build entries have been removed rather than bridged.

## Decision matrix

| Former monolith path | Final package boundary | Ownership decision | Runtime dependency decision | Manifest-only requirement |
| --- | --- | --- | --- | --- |
| `packages/integrations/src/cobrowsing/cognidesk` | `@cognidesk/integration-cobrowsing-cognidesk` | Keep as a Cognidesk-owned local protocol adapter. It owns session-store contracts, signed session tokens, event normalization, readiness, and webhook parsing only. | No external cobrowsing SDK. Keep runtime dependencies to Node/Web crypto primitives and Cognidesk contracts. | Split package exports `/manifest` from a file that does not import client, store, token, or webhook runtime helpers. |
| `packages/integrations/src/form/cognidesk` | `@cognidesk/integration-form-cognidesk` | Keep as a Cognidesk-owned form protocol adapter. It owns form definition validation, submission normalization, channel events, readiness, and HMAC parsing. | No external forms provider SDK. Do not add generic form-hosting, storage, analytics, or file-upload dependencies. | Split package exports `/manifest` without importing `node:crypto` webhook runtime code. |
| `packages/integrations/src/help-center/cognidesk` | `@cognidesk/integration-help-center-cognidesk` | Keep as a Cognidesk-owned local/generic HTTP help-center adapter. It owns local article search/fetch, generic HTTP source calls, readiness, and HMAC webhook normalization. | No external help-center SDK. Provider-specific Zendesk/Intercom/Freshdesk knowledge APIs belong in their provider packages or app-supplied sources. | Split package `/manifest` import does not pull generic HTTP client or HMAC runtime code. |
| `packages/integrations/src/community/forum` | `@cognidesk/integration-community-forum` | Keep as a scoped Discourse-compatible support adapter unless architecture decides to rename it to `@cognidesk/integration-community-discourse`. It owns selected topic/reply/read/search/current-user/webhook operations only. | `discourse2@1.2.0` exists and is generated from the Discourse OpenAPI spec, but it is community-maintained rather than an official provider SDK. Keep the current direct support slice unless the provider-migration ADR explicitly allows this third-party generated client. | Split package exports `/manifest` without importing `node:crypto` or request runtime code. |
| `packages/integrations/src/voice/sip` | `@cognidesk/integration-voice-sip` | Keep as a Cognidesk-owned local protocol adapter. It defines a SIP stack gateway contract and callback normalizer, not a SIP stack. | `drachtio-srf@5.0.24` is an actively published server-side SIP application framework, but it requires the separate drachtio SIP server and is an implementation choice for the SDK user. Do not make it a required dependency of `@cognidesk/integration-voice-sip`; consider a future optional bridge package only if a concrete drachtio integration is requested. | Split package `/manifest` remains free of gateway/webhook runtime imports. |
| `packages/integrations/src/email/imap` | `@cognidesk/integration-email-imap` | Final ownership belongs to the sibling email-provider workstream, which has already staged the split IMAP package on issue #29. This local/protocol workstream must not duplicate IMAP package extraction. | `imapflow@1.4.2` is a maintained Node IMAP client and is the viable library choice recorded by the email-provider lane. | Email workstream owns the IMAP `/manifest` split and runtime dependency boundary. |

## Implemented package boundaries

- `integrations/cobrowsing/cognidesk` publishes `@cognidesk/integration-cobrowsing-cognidesk`.
- `integrations/form/cognidesk` publishes `@cognidesk/integration-form-cognidesk`.
- `integrations/help-center/cognidesk` publishes `@cognidesk/integration-help-center-cognidesk`.
- `integrations/community/forum` publishes `@cognidesk/integration-community-forum`.
- `integrations/voice/sip` publishes `@cognidesk/integration-voice-sip`.

Each package exports `.` and `./runtime` for runtime helpers plus `./manifest` for manifest-only imports. Each package also exposes an integration factory that binds manifest operation declarations to executable handlers through `@cognidesk/integration-kit`.

## Candidate library notes

- SIP: `drachtio-srf@5.0.24` was published on 2026-06-05 and targets server-side SIP applications, with `drachtio-server` providing the SIP engine. It is suitable as an SDK-user gateway implementation, not as a required Cognidesk adapter dependency.
- IMAP: `imapflow@1.4.2` was published on 2026-06-19 and covers IMAP fetch/search/mailbox management. The email-provider lane owns `@cognidesk/integration-email-imap` and recorded `imapflow` as the viable package dependency there; #43 only records the handoff decision.
- Forum: `discourse2@1.2.0` was published on 2025-10-11 and is a typed generated Discourse API client. Because it is not an official SDK, this workstream should keep a small direct support slice unless the ADR permits third-party generated provider clients.
- Cognidesk form, help-center, and cobrowsing adapters have no external provider SDK to wrap. Their package value is the Cognidesk support contract, readiness, event normalization, and conformance evidence.

## Package-boundary shape

Each local/protocol package uses this shape:

```text
integrations/<category>/<provider>/
  package.json
  src/manifest.ts
  src/index.ts
  src/runtime files...
  test/conformance.test.ts
  test/manifest-import.test.ts
```

Package rules:

- `package.json` exports `.`, `./runtime`, and `./manifest`; `./manifest` must import only manifest data and integration-kit/core types.
- Runtime helpers live behind `.` and `./runtime`, never behind `./manifest`.
- Dependencies are limited to `@cognidesk/integration-kit`, necessary Cognidesk packages, and adapter-specific optional peer dependencies only when a concrete bridge package truly needs them.
- Tests must include integration-kit conformance, manifest/handler binding, `./manifest` import smoke, package export smoke, and a dependency assertion proving no accidental provider SDK is pulled into manifest-only imports.
- Old `@cognidesk/integrations/<category>/<provider>` exports are removed after replacement packages and tests exist; no compatibility re-exports.

## Handoff notes

- Do not duplicate IMAP extraction; the `SDK: Email providers` thread owns `@cognidesk/integration-email-imap` and issue #29 has staged that package.
- Coordinate catalog metadata with issue #22 so local/protocol packages appear as available without initializing runtime helpers.
- Coordinate docs/CI with issue #28 so package-size and manifest-only import checks cover these packages too.
