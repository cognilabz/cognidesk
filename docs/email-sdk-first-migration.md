# Email SDK-first migration implementation

Status: implemented for issue #29.
Last verified: 2026-06-21.

This note covers the email providers owned by the remaining SDK-first workstream:

- `packages/integrations/src/email/mailgun`
- `packages/integrations/src/email/postmark`
- `packages/integrations/src/email/ses`
- `packages/integrations/src/email/imap`

The split packages now live under `integrations/email/*` and use
`@cognidesk/integration-kit` operation binding. They do not import, re-export,
or bridge through `@cognidesk/integrations`; legacy monolith exports are owned by
the deletion workstream and the old-import codemod is tracked separately by
issue #44.

## Import migration

| Legacy monolith import | Split package import |
| --- | --- |
| `@cognidesk/integrations/email/mailgun` | `@cognidesk/integration-email-mailgun` |
| `@cognidesk/integrations/email/postmark` | `@cognidesk/integration-email-postmark` |
| `@cognidesk/integrations/email/ses` | `@cognidesk/integration-email-ses` |
| `@cognidesk/integrations/email/imap` | `@cognidesk/integration-email-imap` |

## Foundation usage

- `pnpm-workspace.yaml` includes `packages/*`, `integrations/*/*`, and `apps/*`.
- `packages/integration-kit` publishes `@cognidesk/integration-kit` with
  manifest validation, executable operation binding, normalized integration
  errors, and conformance helpers.
- `packages/integration-catalog` discovers the split `src/manifest.ts` exports
  and prefers split package manifests over matching legacy monolith entries.

## Verified package candidates

The package checks below were done with `npm view` and `npm pack` on
2026-06-21, then by inspecting the published declaration files under `/tmp`.

| Provider | Target package | Library decision | Verified package | Evidence from published types |
| --- | --- | --- | --- | --- |
| Mailgun | `@cognidesk/integration-email-mailgun` | SDK-backed provider package | `mailgun.js@13.2.0` | Default `Mailgun` class exposes `client(options)`. `IMailgunClient` exposes `messages`, `domains`, `webhooks`, `events`, `suppressions`, `routes`, `metrics`, `logs`, and other SDK clients. `MessagesClient` exposes `create()` and `retrieveStoredEmail()`. |
| Postmark | `@cognidesk/integration-email-postmark` | SDK-backed provider package | `postmark@4.0.7` | Exports `ServerClient`, `AccountClient`, models, and errors. `ServerClient` exposes `sendEmail()`, `sendEmailWithTemplate()`, `getOutboundMessages()`, `getOutboundMessageDetails()`, `getInboundMessageDetails()`, `getWebhooks()`, `getMessageStreams()`, `getSuppressions()`, `createSuppressions()`, and `deleteSuppressions()`. |
| Amazon SES | `@cognidesk/integration-email-ses` | SDK-backed provider package using AWS SDK v3 | `@aws-sdk/client-sesv2@3.1073.0` plus `@aws-sdk/client-ses@3.1073.0` only for classic SES operations still in the support slice | `@aws-sdk/client-sesv2` exports `SESv2Client`, commands, paginators, models, and service exceptions. The typed surface includes `SendEmailCommand`, `GetAccountCommand`, `ListEmailIdentitiesCommand`, and `DeleteSuppressedDestinationCommand`. `@aws-sdk/client-ses` includes classic `SendRawEmailCommand`, identity, template, and receipt-rule operations. |
| IMAP | `@cognidesk/integration-email-imap` | Focused protocol adapter backed by a maintained IMAP library | `imapflow@1.4.2` | Exports `ImapFlow` and typed options. The client exposes `connect()`, `logout()`, `mailboxOpen()`, `status()`, `idle()`, `search()`, `fetch()`, and message flag mutation methods. |

## Provider decisions

### Mailgun

Decision: migrate to an SDK-backed `@cognidesk/integration-email-mailgun` package.

Current state:

- `manifest.ts` imports generated operation/function counts and claims
  `coverage.scope: "full-provider-api"`.
- `index.ts` exports generated full API client, operations, schema types, and
  handwritten helpers.
- `client.ts` owns direct `fetch` request construction, Basic auth, region URL
  selection, and `fullApi` operation dispatch.
- `form.ts`, `contracts.ts`, `webhooks.ts`, and tests contain useful
  Cognidesk-owned behavior.

Implemented shape:

- Replace generated full API exports with official `mailgun.js` client usage.
- Keep normalized support operations for send, MIME send where supported, stored
  message read, event search, domain readiness, webhook listing, routes,
  templates, suppressions, inbound route parsing, and webhook signature
  verification.
- Expose the configured `mailgun.js` client as the raw-provider escape hatch.
- Change coverage from `full-provider-api` to normalized adapter coverage with
  implementation metadata:
  `strategy: "official-sdk"`, `sdkPackage: "mailgun.js"`.
- Keep `/manifest` free of `mailgun.js` imports.

### Postmark

Decision: migrate to an SDK-backed `@cognidesk/integration-email-postmark` package.

Current state:

- `manifest.ts` imports generated counts and claims `full-provider-api`.
- `client.ts` owns direct HTTP calls for server-token and account-token
  endpoints.
- `readiness.ts`, `webhooks.ts`, `contracts.ts`, and tests contain useful
  Cognidesk-owned behavior.

Implemented shape:

- Use `postmark.ServerClient` for server-scoped operations and
  `postmark.AccountClient` only for account-scoped support operations that remain
  declared in the manifest.
- Keep normalized send, template send, inbound/outbound message detail/search,
  message streams, webhooks, suppression list, readiness, and inbound webhook
  parsing.
- Expose the configured Postmark clients as raw-provider escape hatches.
- Change coverage from `full-provider-api` to normalized adapter coverage with
  implementation metadata:
  `strategy: "official-sdk"`, `sdkPackage: "postmark"`.
- Keep `/manifest` free of `postmark` imports.

### Amazon SES

Decision: migrate to an SDK-backed `@cognidesk/integration-email-ses` package using AWS SDK
v3 service clients.

Current state:

- `client.ts`, `request.ts`, and `signing.ts` implement direct REST/query
  transport and SigV4 signing.
- `manifest.ts` imports generated counts and claims `full-provider-api`.
- `sns.ts`, credentials, readiness checks, and SES support DTOs are useful
  Cognidesk-owned behavior.

Implemented shape:

- Use `SESv2Client` from `@aws-sdk/client-sesv2` for current support operations:
  send email, account readiness, email identities, templates, configuration
  sets, and suppression management.
- Use `SESClient` from `@aws-sdk/client-ses` only for classic SES operations that
  remain in the declared support slice, such as `SendRawEmailCommand` or receipt
  rule support if explicitly retained.
- Delete Cognidesk-owned SigV4 signing once AWS SDK v3 clients own request
  signing.
- Keep SNS/SQS notification parsing and fail-closed signature verification hooks.
- Expose configured AWS SDK clients as raw-provider escape hatches.
- Change coverage from `full-provider-api` to normalized adapter coverage with
  implementation metadata:
  `strategy: "official-sdk"`,
  `sdkPackages: ["@aws-sdk/client-sesv2", "@aws-sdk/client-ses"]`.
- Keep `/manifest` free of AWS SDK client imports.

### IMAP

Decision: migrate to a focused protocol package backed by ImapFlow, not a
generated API clone.

Current state:

- `src/email/imap/index.ts` is already a narrow readiness-only adapter with an
  injected connector.
- It does not implement IMAP `SEARCH`, `FETCH`, `STORE`, mailbox management,
  attachment retrieval, `IDLE`, UID sync, or MIME parsing.

Implemented shape:

- Create `@cognidesk/integration-email-imap` as a protocol-library provider package.
- Use `imapflow` as the default maintained IMAP client library for Node runtime
  support.
- Keep the first package focused: credential/readiness checks, mailbox status,
  and optional normalized read/search/fetch operations only if the email
  operation contracts require them.
- Keep MIME parsing and attachment policy explicit. ImapFlow provides message
  fetch primitives but Cognidesk should not silently become a full mailbox
  synchronization product.
- Expose an injected or created `ImapFlow` client as the raw-protocol escape
  hatch.
- Keep `/manifest` free of `imapflow` imports.

## Files to preserve during extraction

The useful Cognidesk-owned files are the normalized contracts, mappers, readiness
logic, credential status helpers, and webhook/event parsers. Generated full API
clones and direct transport stacks should not move into the new SDK-backed
packages unless a provider has no viable library.

| Provider | Preserve | Replace or delete after migration |
| --- | --- | --- |
| Mailgun | `contracts.ts`, `form.ts`, `credentials.ts`, `manifest.ts`, `webhooks.ts`, selected client operation semantics, tests | `full-api-*`, `full-api.generated/**`, most of `request.ts`, `fullApi` escape hatch |
| Postmark | `contracts.ts`, `credentials.ts`, `manifest.ts`, `readiness.ts`, `webhooks.ts`, selected client operation semantics, tests | `full-api-*`, `full-api.generated/**`, most of `request.ts`, `fullApi` escape hatch |
| SES | `contracts.ts`, `credentials.ts`, `manifest.ts`, `sns.ts`, readiness semantics, tests | `full-api-*`, `full-api.generated/**`, `request.ts`, `signing.ts`, `fullApi` escape hatch |
| IMAP | current manifest/readiness contract and tests | injected-connector-only runtime once ImapFlow-backed package shape is ready |

## Conformance targets

Each final package should have tests for:

- package metadata and manifest parsing;
- manifest declarations bound to executable operation handlers;
- manifest-only import that does not import or initialize provider SDK clients;
- credential-blocked readiness for missing credentials or missing injected
  clients;
- SDK error normalization into integration-kit errors;
- webhook/event parsing and fail-closed signature verification where applicable;
- raw-client escape hatch without re-exporting full provider API clones as
  Cognidesk-owned operations;
- external temp-project import smoke for manifest-only exports.

## Follow-up

Remaining work belongs to the broader integration migration:

- issue #27 should remove migrated monolith email code when consumers have moved
  to split packages;
- issue #44 should own the syntax-aware old-import codemod and release-note
  mapping;
- other provider-family threads should follow the same manifest-only package
  pattern and avoid old monolith bridges.
