# Provider Package Migration

This guide tracks the migration from legacy `@cognidesk/integrations/*` subpath imports to individual provider packages. It is the compatibility plan for the split package work: use install/import codemods and manifest-only registration, not a bridge package.

## Tracker issues

The package names below are target names for staged trackers; they may not exist in the workspace or npm until the linked issue lands.

| Issue | Scope | Examples |
|-------|-------|----------|
| #23 | Gmail SDK-backed package | `@cognidesk/integration-email-gmail` |
| #24 | Microsoft Graph Outlook/Teams packages | `@cognidesk/integration-email-outlook`, `@cognidesk/integration-workplace-teams` |
| #25 | Workplace/community SDK-backed packages | `@cognidesk/integration-workplace-slack`, `@cognidesk/integration-community-discord` |
| #29 | Email family | `@cognidesk/integration-email-mailgun`, `@cognidesk/integration-email-postmark`, `@cognidesk/integration-email-ses`, `@cognidesk/integration-email-imap` |
| #30 | Ecommerce | `@cognidesk/integration-ecommerce-shopify`, `@cognidesk/integration-ecommerce-stripe` |
| #31 | Marketplace | `@cognidesk/integration-marketplace-amazon`, `@cognidesk/integration-marketplace-ebay` |
| #32 | Meta | `@cognidesk/integration-messaging-whatsapp`, `@cognidesk/integration-social-instagram`, `@cognidesk/integration-social-messenger` |
| #33 | RCS/TikTok | `@cognidesk/integration-messaging-rcs`, `@cognidesk/integration-social-tiktok` |
| #34 | Review | `@cognidesk/integration-review-appstore`, `@cognidesk/integration-review-googleplay` |
| #35 | Helpdesk ticketing | `@cognidesk/integration-ticketing-front`, `@cognidesk/integration-ticketing-gorgias`, `@cognidesk/integration-ticketing-zendesk` |
| #36 | CRM ticketing | `@cognidesk/integration-ticketing-hubspot`, `@cognidesk/integration-ticketing-salesforce`, `@cognidesk/integration-ticketing-dynamics365` |
| #37 | Enterprise service clouds | `@cognidesk/integration-ticketing-oracle-service`, `@cognidesk/integration-ticketing-pega-customer-service`, `@cognidesk/integration-ticketing-sap-service-cloud` |
| #38 | Contact-center core | `@cognidesk/integration-contact-center-amazon-connect`, `@cognidesk/integration-contact-center-genesys-cloud`, `@cognidesk/integration-contact-center-ringcentral` |
| #39 | Contact-center long tail | `@cognidesk/integration-contact-center-8x8`, `@cognidesk/integration-contact-center-aircall`, `@cognidesk/integration-contact-center-nextiva` |
| #40 | Cloud speech | `@cognidesk/integration-voice-aws-speech`, `@cognidesk/integration-voice-azure-speech`, `@cognidesk/integration-voice-google-speech`, `@cognidesk/integration-voice-openai` |
| #41 | Voice/SMS providers | `@cognidesk/integration-voice-deepgram`, `@cognidesk/integration-voice-elevenlabs`, `@cognidesk/integration-voice-twilio`, `@cognidesk/integration-voice-vonage` |
| #42 | Video | `@cognidesk/integration-video-whereby`, `@cognidesk/integration-video-zoom` |
| #43 | Local/protocol | `@cognidesk/integration-form-cognidesk`, `@cognidesk/integration-help-center-cognidesk`, `@cognidesk/integration-cobrowsing-cognidesk`, `@cognidesk/integration-voice-sip` |
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
| #23 | `@cognidesk/integrations/email/gmail` | `@cognidesk/integration-email-gmail/manifest` | `@cognidesk/integration-email-gmail/runtime` |
| #24 | `@cognidesk/integrations/email/outlook` | `@cognidesk/integration-email-outlook/manifest` | `@cognidesk/integration-email-outlook/runtime` |
| #25 | `@cognidesk/integrations/workplace/slack` | `@cognidesk/integration-workplace-slack/manifest` | `@cognidesk/integration-workplace-slack/runtime` |
| #24 | `@cognidesk/integrations/workplace/teams` | `@cognidesk/integration-workplace-teams/manifest` | `@cognidesk/integration-workplace-teams/runtime` |
| #30 | `@cognidesk/integrations/ecommerce/stripe` | `@cognidesk/integration-ecommerce-stripe/manifest` | `@cognidesk/integration-ecommerce-stripe/runtime` |
| #40 | `@cognidesk/integrations/voice/openai` | `@cognidesk/integration-voice-openai/manifest` | `@cognidesk/integration-voice-openai/runtime` |

Use syntax-aware transforms over raw text replacement. The transform should:

1. Read `ImportDeclaration` and `ExportNamedDeclaration` module specifiers.
2. Map `@cognidesk/integrations/{category}/{provider}` to `@cognidesk/integration-{category}-{provider}`.
3. Route manifest-only symbols to `/manifest`.
4. Route runtime factories, clients, generated operation callers, webhook parsers, and readiness helpers to `/runtime`.
5. Leave application registration explicit instead of adding side-effect imports.

The codemod may add package-manager install instructions, but it must not write a compatibility bridge or runtime resolver.

## Manual migration shape

```typescript
import { createProviderRegistry } from "@cognidesk/core";
import { gmailEmailProviderManifest } from "@cognidesk/integration-email-gmail/manifest";
import { slackWorkplaceProviderManifest } from "@cognidesk/integration-workplace-slack/manifest";

export const providers = createProviderRegistry([
  gmailEmailProviderManifest,
  slackWorkplaceProviderManifest,
]);

export const providerRuntimeLoaders = {
  "email.gmail": () => import("@cognidesk/integration-email-gmail/runtime"),
  "workplace.slack": () => import("@cognidesk/integration-workplace-slack/runtime"),
};
```

Keep provider SDK setup inside the application or the specific provider runtime package. Catalog and manifest imports must remain safe to load in Studio, docs generation, and package conformance checks.
