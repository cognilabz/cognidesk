# Ecommerce SDK-first migration

Status date: 2026-06-21

Implementation status: `@cognidesk/integration-ecommerce-stripe` and `@cognidesk/integration-ecommerce-shopify` now live under `integrations/ecommerce/*` as SDK-backed provider packages. The old `@cognidesk/integrations/ecommerce/*` monolith subpaths and generated ecommerce provider clones were removed after replacement tests passed.

This workstream depended on the foundation work from:

- #20, `[Integrations] Support nested provider workspaces and independent provider releases`
- #21, `[Integrations] Extract @cognidesk/integration-kit with executable operation contracts`
- #22, `[Integrations] Build metadata-only integration catalog and explicit runtime registration`

## Current owned surface

| Provider | Current import | Current implementation | Removed monolith surface | Current tests |
| --- | --- | --- | --- | --- |
| Stripe | `@cognidesk/integration-ecommerce-stripe` | Official `stripe` SDK client plus Cognidesk support operations, readiness, raw client access, and webhook parsing | `packages/integrations/src/ecommerce/stripe` including `full-api-*` generated files | `integrations/ecommerce/stripe/test/*` |
| Shopify | `@cognidesk/integration-ecommerce-shopify` | Official `@shopify/admin-api-client` Admin GraphQL client plus selected support operations, readiness, raw client access, and webhook HMAC parsing | `packages/integrations/src/ecommerce/shopify` including `admin-graphql-inventory.generated.ts` | `integrations/ecommerce/shopify/test/*` |

## SDK verification spikes

| Provider | Candidate package | Verified package state | Fit for support workflow | Raw-client escape hatch | Recommendation |
| --- | --- | --- | --- | --- | --- |
| Stripe | `stripe` | `22.2.2`, MIT, ESM/CJS exports, types included, no runtime dependencies, peer `@types/node >=18` | Covers current helpers: customers, PaymentIntents, Checkout Sessions, subscriptions, invoices, refunds, disputes, webhook endpoints, Connect request options, webhook construction/signature validation | Expose configured `Stripe` instance and keep `stripe.rawRequest` for advanced operations | Use official SDK. Delete generated Stripe full API clone in the migrated package. Do not preserve `fullApi` or `requestOperation` compatibility exports. |
| Shopify | `@shopify/admin-api-client` | `1.1.2`, MIT, ESM/CJS exports, types included, depends on `@shopify/graphql-client` | Directly matches current Admin GraphQL support helpers and raw GraphQL execution; supports custom fetch injection and constructs the same Admin GraphQL endpoint shape | Expose configured Admin API client with `request`/`fetch` | Prefer this lightweight client for `@cognidesk/integration-ecommerce-shopify`. Keep webhook HMAC validation locally or via integration-kit because this package is only the API client. |
| Shopify | `@shopify/shopify-api` | `13.0.0`, MIT, ESM/CJS exports, types included, depends on `@shopify/admin-api-client`, Storefront client, OAuth/webhook/app utilities | Broader app SDK with OAuth, REST/Admin clients, webhook helpers, and runtime adapters | Expose only if app lifecycle/OAuth/webhook registration is in scope | Keep as optional/future escalation. It is heavier than needed for the current private Admin token support surface. |

Temp install proof:

- `stripe` exposes all current helper families and `webhooks.constructEvent` plus `rawRequest`.
- `@shopify/admin-api-client` sends `POST https://example.myshopify.com/admin/api/2026-04/graphql.json` with `x-shopify-access-token`, JSON body, and returns typed `data` from `client.request`.

## Migration matrix

| Provider | Target package | Status | Final package contents | Old generated code removal | Manifest-only import rule | Tests |
| --- | --- | --- | --- | --- | --- | --- |
| Stripe | `@cognidesk/integration-ecommerce-stripe` | Implemented | `manifest`, normalized commerce operation handlers, credential/readiness helpers, webhook parsing result shape, `createStripeEcommerceClient` wrapping official `Stripe`, raw `Stripe` client access | Removed `full-api-*` generated files and old monolith public exports | `@cognidesk/integration-ecommerce-stripe/manifest` does not import `stripe` or instantiate `new Stripe(...)` | Contract binding tests, manifest-only import guard, webhook tests, readiness tests, SDK routing tests |
| Shopify | `@cognidesk/integration-ecommerce-shopify` | Implemented | `manifest`, normalized Admin GraphQL support operations, credential/readiness helpers, webhook HMAC parsing, raw Admin GraphQL escape hatch via official admin client | Removed `admin-graphql-inventory.generated.ts` and old monolith public exports | `@cognidesk/integration-ecommerce-shopify/manifest` does not import `@shopify/admin-api-client` or initialize a client | Contract binding tests, manifest-only import guard, webhook HMAC tests, readiness tests, Admin GraphQL mock tests |

## Final implementation notes

- Keep Cognidesk normalized adapter coverage separate from raw SDK coverage. A raw official client does not mean `full-provider-api`.
- Preserve support-workflow helpers and raw-client escape hatches, but do not re-export old `@cognidesk/integrations/*` paths.
- Keep manifest-only exports dependency-light. Runtime SDK imports belong behind client factories and executable handlers.
- Keep webhook validation based on raw request bodies and constant-time comparison. Stripe may use the official SDK verifier if the normalized Cognidesk return shape is preserved.
- Move provider-specific generated material only when no SDK covers the support surface; generated files must be support-slice scoped, source/version/checksum pinned, and provider-package local.

## Import migration and codemod notes

There is intentionally no compatibility bridge for the removed ecommerce subpaths. Application code should migrate imports directly:

| Old import | New import |
| --- | --- |
| `@cognidesk/integrations/ecommerce/stripe` manifest-only usage | `@cognidesk/integration-ecommerce-stripe/manifest` |
| `@cognidesk/integrations/ecommerce/stripe` runtime usage | `@cognidesk/integration-ecommerce-stripe/runtime` |
| `@cognidesk/integrations/ecommerce/shopify` manifest-only usage | `@cognidesk/integration-ecommerce-shopify/manifest` |
| `@cognidesk/integrations/ecommerce/shopify` runtime usage | `@cognidesk/integration-ecommerce-shopify/runtime` |

Use the parser-backed codemod instead of raw text replacement:

```bash
pnpm providers:codemod:imports --check apps packages
pnpm providers:codemod:imports --write apps packages
```

After the syntax-aware import rewrite, review usages that referenced removed generated clone exports such as Stripe `fullApi`, generic `requestOperation`, or Shopify generated Admin GraphQL inventory helpers. Replace those with normalized operation handlers, `createStripeEcommerceClient().rawClient`, or `createShopifyEcommerceClient().rawClient` depending on whether the call is a Cognidesk support workflow or an application-owned raw provider operation.

## Dedicated GitHub issue draft

Title:

```text
[Integrations] Migrate Stripe and Shopify ecommerce providers to SDK-backed packages
```

Body:

```markdown
## Goal

Move the ecommerce integrations out of `@cognidesk/integrations` into independent SDK-backed provider packages:

- `integrations/ecommerce/stripe` published as `@cognidesk/integration-ecommerce-stripe`
- `integrations/ecommerce/shopify` published as `@cognidesk/integration-ecommerce-shopify`

Use official provider clients where they cover the support workflow surface, preserve Cognidesk-normalized operations and webhook handling, and remove generated full-provider API clones after replacements and tests exist.

## Dependencies

Blocked until:

- #20 adds nested provider workspaces and independent provider release support.
- #21 adds `@cognidesk/integration-kit` executable operation contracts and reusable conformance tests.
- #22 defines metadata-only catalog/manifest export rules.

## Scope

- Stripe: use the official `stripe` Node SDK after verification.
- Shopify: prefer `@shopify/admin-api-client` for the current Admin GraphQL support surface; use `@shopify/shopify-api` only if app OAuth/webhook registration/runtime adapter needs require it.
- Preserve support-workflow helpers for account/shop readiness, customer/order/product/payment lookup, search/list flows, draft order/payment/refund/subscription/dispute/webhook endpoint actions, and raw-client escape hatches.
- Preserve webhook validation and normalized parsed-event return shapes.
- Change coverage semantics from generated/full-provider coverage to normalized support-operation coverage plus explicit raw official-client escape hatch coverage.
- Ensure manifest-only imports do not import or initialize Stripe/Shopify runtime clients.
- Delete migrated old monolith ecommerce code only after replacement packages and tests pass.
- Do not add compatibility re-exports for old `@cognidesk/integrations/ecommerce/*` imports.

## Acceptance Criteria

- `@cognidesk/integration-ecommerce-stripe` installs `stripe` and no unrelated provider SDKs.
- `@cognidesk/integration-ecommerce-shopify` installs Shopify admin client dependencies and no unrelated provider SDKs.
- Manifest declarations bind exactly to executable integration-kit handlers.
- Manifest-only imports are SDK-runtime-free and covered by smoke tests.
- Raw Stripe/Admin GraphQL clients remain available as explicit escape hatches without claiming full Cognidesk adapter coverage.
- Stripe generated `full-api-*` files are removed when the Stripe package lands.
- Shopify generated/admin inventory is removed or moved to catalog metadata if still needed, with no generated per-root-field wrapper surface.
- Contract, package, webhook, readiness, and type tests cover both migrated packages.
```
