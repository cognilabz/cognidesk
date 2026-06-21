# Provider Package Migration

This guide tracks the migration from legacy `@cognidesk/integrations/*` subpath imports to individual provider packages. It is the compatibility plan for the split package work: use install/import codemods and manifest-only registration, not a bridge package.

## Tracker issues

The package names below are target names for staged trackers; they may not exist in the workspace or npm until the linked issue lands.

| Issue | Scope | Examples |
|-------|-------|----------|
| #23 | Gmail SDK-backed package | `@cognidesk/email-gmail` |
| #24 | Microsoft Graph Outlook/Teams packages | `@cognidesk/email-outlook`, `@cognidesk/workplace-teams` |
| #25 | Workplace/community SDK-backed packages | `@cognidesk/workplace-slack`, `@cognidesk/community-discord` |
| #29 | Email family | `@cognidesk/email-mailgun`, `@cognidesk/email-postmark`, `@cognidesk/email-ses`, `@cognidesk/email-imap` |
| #30 | Ecommerce | `@cognidesk/ecommerce-shopify`, `@cognidesk/ecommerce-stripe` |
| #31 | Marketplace | `@cognidesk/marketplace-amazon`, `@cognidesk/marketplace-ebay` |
| #32 | Meta | `@cognidesk/messaging-whatsapp`, `@cognidesk/social-instagram`, `@cognidesk/social-messenger` |
| #33 | RCS/TikTok | `@cognidesk/messaging-rcs`, `@cognidesk/social-tiktok` |
| #34 | Review | `@cognidesk/review-appstore`, `@cognidesk/review-googleplay` |
| #35 | Helpdesk ticketing | `@cognidesk/ticketing-front`, `@cognidesk/ticketing-gorgias`, `@cognidesk/ticketing-zendesk` |
| #36 | CRM ticketing | `@cognidesk/ticketing-hubspot`, `@cognidesk/ticketing-salesforce`, `@cognidesk/ticketing-dynamics365` |
| #37 | Enterprise service clouds | `@cognidesk/ticketing-oracle-service`, `@cognidesk/ticketing-pega-customer-service`, `@cognidesk/ticketing-sap-service-cloud` |
| #38 | Contact-center core | `@cognidesk/contact-center-amazon-connect`, `@cognidesk/contact-center-genesys-cloud`, `@cognidesk/contact-center-ringcentral` |
| #39 | Contact-center long tail | `@cognidesk/contact-center-8x8`, `@cognidesk/contact-center-aircall`, `@cognidesk/contact-center-nextiva` |
| #40 | Cloud speech | `@cognidesk/voice-aws-speech`, `@cognidesk/voice-azure-speech`, `@cognidesk/voice-google-speech`, `@cognidesk/voice-openai` |
| #41 | Voice/SMS providers | `@cognidesk/voice-deepgram`, `@cognidesk/voice-elevenlabs`, `@cognidesk/voice-twilio`, `@cognidesk/voice-vonage` |
| #42 | Video | `@cognidesk/video-whereby`, `@cognidesk/video-zoom` |
| #43 | Local/protocol | `@cognidesk/form-cognidesk`, `@cognidesk/help-center-cognidesk`, `@cognidesk/cobrowsing-cognidesk`, `@cognidesk/voice-sip` |
| #44 | Old-import codemod | syntax-aware migration from `@cognidesk/integrations/*` subpaths to provider package manifest/runtime imports |

## Compatibility policy

The ChatGPT Phase 7 compatibility suggestion is addressed through migration docs and codemod guidance only. Do not add:

- an old-import compatibility package
- an `@cognidesk/integrations` bridge to split packages
- runtime `node_modules` scanning to discover installed providers
- a central provider SDK barrel that imports runtime SDK code for every provider

Old imports should fail during normal TypeScript or bundler resolution after the legacy workspace is removed. The supported transition path is a source codemod plus explicit application registration.

Package-size budgets must fail CI. Raw provider SDK breadth does not count as Cognidesk adapter coverage; adapter coverage requires Cognidesk manifests, typed support semantics, conformance evidence, and scoped tests.

## Import codemod rules

Run the import codemod in check mode before opening a migration PR, then write mode when you are ready to update application imports:

```bash
pnpm providers:codemod:imports --check apps/flight-demo packages
pnpm providers:codemod:imports --write apps/flight-demo packages
```

The codemod parses TypeScript/JavaScript import and named export declarations. It rewrites safe cases and fails closed for side-effect imports, namespace/default imports, star re-exports, malformed legacy subpaths, or symbols that cannot be classified as manifest or runtime.

| Tracker | Legacy import | Manifest import | Runtime import |
|---------|---------------|-----------------|----------------|
| #23 | `@cognidesk/integrations/email/gmail` | `@cognidesk/email-gmail/manifest` | `@cognidesk/email-gmail/runtime` |
| #24 | `@cognidesk/integrations/email/outlook` | `@cognidesk/email-outlook/manifest` | `@cognidesk/email-outlook/runtime` |
| #25 | `@cognidesk/integrations/workplace/slack` | `@cognidesk/workplace-slack/manifest` | `@cognidesk/workplace-slack/runtime` |
| #24 | `@cognidesk/integrations/workplace/teams` | `@cognidesk/workplace-teams/manifest` | `@cognidesk/workplace-teams/runtime` |
| #30 | `@cognidesk/integrations/ecommerce/stripe` | `@cognidesk/ecommerce-stripe/manifest` | `@cognidesk/ecommerce-stripe/runtime` |
| #40 | `@cognidesk/integrations/voice/openai` | `@cognidesk/voice-openai/manifest` | `@cognidesk/voice-openai/runtime` |

Use syntax-aware transforms over raw text replacement. The transform should:

1. Read `ImportDeclaration` and `ExportNamedDeclaration` module specifiers.
2. Map `@cognidesk/integrations/{category}/{provider}` to `@cognidesk/{category}-{provider}`.
3. Route manifest-only symbols to `/manifest`.
4. Route runtime factories, clients, generated operation callers, webhook parsers, and readiness helpers to `/runtime`.
5. Leave application registration explicit instead of adding side-effect imports.

The codemod may add package-manager install instructions, but it must not write a compatibility bridge or runtime resolver.

## Manual migration shape

```typescript
import { createProviderRegistry } from "@cognidesk/core";
import { gmailEmailProviderManifest } from "@cognidesk/email-gmail/manifest";
import { slackWorkplaceProviderManifest } from "@cognidesk/workplace-slack/manifest";

export const providers = createProviderRegistry([
  gmailEmailProviderManifest,
  slackWorkplaceProviderManifest,
]);

export const providerRuntimeLoaders = {
  "email.gmail": () => import("@cognidesk/email-gmail/runtime"),
  "workplace.slack": () => import("@cognidesk/workplace-slack/runtime"),
};
```

Keep provider SDK setup inside the application or the specific provider runtime package. Catalog and manifest imports must remain safe to load in Studio, docs generation, and package conformance checks.
