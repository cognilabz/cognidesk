# Provider Integrations

Provider Integrations connect Cognidesk conversations to external systems without turning the SDK into a full clone of every partner API.

Official external providers ship as individual packages named `@cognidesk/integration-{category}-{provider}`. Install only the providers your application enables, such as `@cognidesk/integration-email-gmail`, `@cognidesk/integration-workplace-slack`, `@cognidesk/integration-email-outlook`, `@cognidesk/integration-workplace-teams`, or `@cognidesk/integration-voice-openai`.

Provider workspaces live under `integrations/{category}/{provider}` and publish as individual provider packages.

Use this guide when you decide which Provider Integration belongs in a channel, which capabilities to enable, and which provider setup must still be supplied by your application.

For the full provider-by-provider list, see the [Provider Integration Catalog](provider-integrations-catalog.md). For the broader NG architecture changes, see [Omnichannel NG Changes](omnichannel-changes.md).

## Install provider packages

=== "pnpm"

    ```bash
    pnpm add @cognidesk/integration-email-gmail @cognidesk/integration-workplace-slack @cognidesk/integration-email-outlook @cognidesk/integration-workplace-teams @cognidesk/integration-voice-openai
    ```

=== "npm"

    ```bash
    npm install @cognidesk/integration-email-gmail @cognidesk/integration-workplace-slack @cognidesk/integration-email-outlook @cognidesk/integration-workplace-teams @cognidesk/integration-voice-openai
    ```

Each package owns its manifest, runtime adapter exports, provider-specific helpers, conformance evidence, package-size budget, and optional provider SDK peer dependencies. The application decides which packages are registered and when runtime code is loaded.

## Register providers explicitly

Provider packages are metadata-visible but do not enable live provider behavior by being installed. Register manifests in application code, then wire runtime loaders where your channel intake, webhook worker, voice server, or operator workflow needs them.

```typescript
import { createProviderRegistry } from "@cognidesk/core";
import { gmailEmailProviderManifest } from "@cognidesk/integration-email-gmail/manifest";
import { outlookEmailProviderManifest } from "@cognidesk/integration-email-outlook/manifest";
import { slackWorkplaceProviderManifest } from "@cognidesk/integration-workplace-slack/manifest";
import { teamsWorkplaceProviderManifest } from "@cognidesk/integration-workplace-teams/manifest";
import { openAIVoiceProviderManifest } from "@cognidesk/integration-voice-openai/manifest";

export const providerRegistry = createProviderRegistry([
  gmailEmailProviderManifest,
  outlookEmailProviderManifest,
  slackWorkplaceProviderManifest,
  teamsWorkplaceProviderManifest,
  openAIVoiceProviderManifest,
]);
```

## Supply lazy loaders

Keep provider SDK runtime code behind application-owned lazy loaders. This lets manifest and catalog imports stay cheap and keeps optional provider SDK dependencies isolated to the provider that needs them.

```typescript
export const providerRuntimeLoaders = {
  "email.gmail": () => import("@cognidesk/integration-email-gmail/runtime"),
  "email.outlook": () => import("@cognidesk/integration-email-outlook/runtime"),
  "workplace.slack": () => import("@cognidesk/integration-workplace-slack/runtime"),
  "workplace.teams": () => import("@cognidesk/integration-workplace-teams/runtime"),
  "voice.openai": () => import("@cognidesk/integration-voice-openai/runtime"),
} satisfies Record<string, () => Promise<unknown>>;
```

## Provider categories

Cognidesk groups Provider Integrations by business category rather than a flat integration list.

| Category | Example imports | Typical use |
|----------|-----------------|-------------|
| Email | `@cognidesk/integration-email-gmail`, `@cognidesk/integration-email-outlook`, `@cognidesk/integration-email-ses` | Send, receive, draft, sync, and mailbox readiness workflows |
| Messaging | `@cognidesk/integration-messaging-whatsapp`, `@cognidesk/integration-messaging-rcs` | Mobile messaging channels with provider-specific consent and webhook setup |
| SMS | `@cognidesk/integration-sms-twilio` | SMS support workflows |
| Workplace | `@cognidesk/integration-workplace-slack`, `@cognidesk/integration-workplace-teams` | Internal support workspaces and operator collaboration |
| Social | `@cognidesk/integration-social-messenger`, `@cognidesk/integration-social-instagram`, `@cognidesk/integration-social-tiktok` | Social inbox, comment, and webhook workflows |
| Ticketing | `@cognidesk/integration-ticketing-zendesk`, `@cognidesk/integration-ticketing-servicenow`, `@cognidesk/integration-ticketing-salesforce` | Case, ticket, note, attachment, queue, and handoff workflows |
| Contact center | `@cognidesk/integration-contact-center-genesys-cloud`, `@cognidesk/integration-contact-center-genesys-engage`, `@cognidesk/integration-contact-center-amazon-connect`, `@cognidesk/integration-contact-center-nice-cxone` | Human handoff, callbacks, contact-center tasks, and selected digital routing surfaces |
| Reviews | `@cognidesk/integration-review-appstore`, `@cognidesk/integration-review-googleplay` | App review ingestion, response, and readiness workflows |
| Marketplace | `@cognidesk/integration-marketplace-amazon`, `@cognidesk/integration-marketplace-ebay` | Order, buyer-message, fulfillment, review, and notification workflows |
| Ecommerce | `@cognidesk/integration-ecommerce-shopify`, `@cognidesk/integration-ecommerce-stripe` | Commerce, payment, customer, and order support workflows |
| Video | `@cognidesk/integration-video-whereby`, `@cognidesk/integration-video-zoom` | Meeting, recording, and video support workflows |
| Voice provider APIs | `@cognidesk/integration-voice-openai`, `@cognidesk/integration-voice-elevenlabs`, `@cognidesk/integration-voice-azure-speech`, `@cognidesk/integration-voice-aws-speech`, `@cognidesk/integration-voice-google-speech`, `@cognidesk/integration-voice-deepgram`, `@cognidesk/integration-voice-twilio`, `@cognidesk/integration-voice-vonage` | Realtime voice entry channels, Speech Provider STT/TTS, provider voice APIs, telephony objects, and outbound-capable provider surfaces |
| Local support surfaces | `@cognidesk/integration-cobrowsing-cognidesk`, `@cognidesk/integration-form-cognidesk`, `@cognidesk/integration-help-center-cognidesk` | Cognidesk-owned local protocol and support-workflow surfaces |

Infrastructure packages stay separate: `@cognidesk/model`, `@cognidesk/storage`, `@cognidesk/http`, `@cognidesk/voice-websocket`, `@cognidesk/react`, `@cognidesk/ui`, and Studio packages are not Provider Integrations.

`@cognidesk/integration-voice-openai` is the OpenAI Realtime voice entry-channel adapter. `@cognidesk/integration-voice-elevenlabs`, `@cognidesk/integration-voice-azure-speech`, `@cognidesk/integration-voice-aws-speech`, `@cognidesk/integration-voice-google-speech`, and `@cognidesk/integration-voice-deepgram` can also create Speech Provider-backed voice adapters where STT/TTS are provider-owned but the background LLM is the Cognidesk Agent Model Set. `@cognidesk/voice-websocket` remains voice runtime infrastructure. Other voice provider APIs such as Twilio Voice, Vonage, and SIP also live in individual `@cognidesk/integration-voice-*` provider packages.

Provider modules may add provider-specific sub-capabilities when a core capability word would be too broad. For example, Genesys Cloud exposes an Open Messaging handoff capability separately from outbound callback creation, and Genesys Engage exposes on-prem chat handoff separately from GMS callback creation.

## Coverage scope

Every Provider Manifest declares a `coverage.scope`.

| Scope | Meaning |
|-------|---------|
| `local-protocol` | Cognidesk-owned protocol or local adapter contract, not a full external provider API. |
| `support-workflow-subset` | A small provider surface for support workflows such as send, receive, draft, handoff, ticket, callback, or readiness. |
| `provider-api-subset` | A broader typed subset of provider APIs, still not the full provider API. |
| `full-provider-api` | Reserved for provider modules with evidence that the full external API surface is implemented and tested. |

Treat `support-workflow-subset` as the default. A passing provider conformance test proves that the manifest metadata, capability naming, credential readiness, fail-closed behavior, and selected request shapes are valid. It does not prove full partner API coverage.

Importing a provider SDK is not Cognidesk adapter coverage by itself. `full-provider-api` claims require Cognidesk-owned manifests, typed support semantics, generated or reviewed operation inventory evidence, conformance results, and package-size budgets that fail CI when exceeded.

## Capability model

Provider Integrations declare generic channel capabilities such as:

- `receive`
- `send`
- `draft`
- `thread`
- `attach`
- `media`
- `handoff`
- `schedule`
- `transfer`
- provider-object operations such as `create-provider-object`, `read-provider-object`, and `search-provider-object`

A capability must name the provider objects it touches. A module that exposes `send` must say what it sends, such as a WhatsApp message, Messenger message, Gmail message, callback, task contact, or Slack message. This keeps broad words like "handoff" and "transfer" from hiding provider-specific behavior.

Provider-specific capabilities are marked as extensions. Examples:

- `contact-center.open-messaging-handoff`
- `contact-center.on-prem-chat-handoff`
- `social.webhook-signature`
- `whatsapp.webhook-signature`

Use extension capabilities when the business feature matters to SDK configuration, Studio visibility, or operator workflows.

## Configuration ownership

Cognidesk does not invent provider setup for the SDK user.

If a provider requires an app subscription, webhook product, queue, campaign, callback service, Page connection, app review, or outbound-contact permission, represent that as SDK configuration and provider readiness. Do not treat payload parsing as proof that the provider can deliver traffic.

Common readiness examples:

| Provider area | SDK-user-owned setup |
|---------------|----------------------|
| Gmail | Google Cloud Pub/Sub topic, subscription, push worker, and history sync strategy |
| Outlook and Teams | Microsoft Graph subscription renewal, delete, reauthorization, and expiration monitoring |
| Slack | HTTP Events API or Interactivity endpoint setup; Socket Mode requires separate app-level WebSocket handling |
| WhatsApp | WABA messages webhook subscription, Cloud API access, templates, and messaging-window policy |
| Messenger | Page subscribed-apps setup, `pages_manage_metadata`, webhook fields, and message-window/tag policy |
| Instagram | Instagram messaging webhook fields, app review, Page access, and Instagram-specific HUMAN_AGENT policy |
| TikTok | Webhook callback URL registration, signature secret, product approvals, and Business comment access |
| RCS | Agent approval, launch status, recipient reachability, uploaded file constraints, and provider approval |
| Genesys Cloud | Region, OAuth scopes, queue/callback routing, Open Messaging integration details, and webhook secret |
| Genesys Engage | On-prem GMS base URL, authentication, callback service names, chat paths, and deployment routing |

When a required setting is missing, provider helpers should fail closed or report `missing`, `insufficient-scope`, `permission-blocked`, or `unavailable` readiness instead of guessing.

## Contact-center handoff

Contact-center Provider Integrations are intentionally explicit about their supported handoff surfaces. They expose support handoff surfaces where the official provider API supports them, but they do not automatically claim the full administration, analytics, workforce, campaign, recording, or routing API surface.

Important examples:

| Provider Integration import | Implemented support surface | Boundary |
|-----------------------------|-----------------------------|----------|
| `@cognidesk/integration-contact-center-genesys-cloud` | Callback creation, Open Messaging inbound message/event/receipt delivery, conversation read, queue list, readiness, and Open Messaging webhook signature verification | Web Messaging/Messenger deployments, native chat widgets, transfer, full routing mutation, analytics, recordings, campaigns, and Open Messaging integration administration remain outside the adapter |
| `@cognidesk/integration-contact-center-genesys-engage` | GMS callback creation and SDK-configured on-prem chat or handoff paths | Full Engage, Workspace, WebChatService, WebRTC, GMS Chat lifecycle, Consumer Messaging, and Third-Party Messaging remain outside the adapter |
| `@cognidesk/integration-contact-center-amazon-connect` | Selected task/contact handoff and instance readiness helpers | Broader contacts, queues, users, campaigns, participant/chat APIs, analytics, and instance administration remain outside the adapter |
| `@cognidesk/integration-contact-center-aircall` | Direct callback, case creation, and configured support-workflow paths | Broader users, calls, recordings, reports, queues, flows, campaigns, transfer, and management APIs remain outside the adapter |

If you want Genesys chat handoff, configure the matching surface explicitly:

- Genesys Cloud Open Messaging for server-side external messaging delivery into Genesys Cloud.
- Genesys Cloud Web Messaging or Messenger only when your application owns the customer-site deployment and JavaScript/widget setup.
- Genesys Engage/GMS or WebChatService paths for on-premises deployments.

Do not model all of these as "call or callback." They are different provider surfaces with different setup, permissions, and failure modes.

## Social and messaging boundaries

Social and messaging providers have strict policy and subscription requirements.

| Provider Integration import | Important boundary |
|-----------------------------|--------------------|
| `@cognidesk/integration-messaging-whatsapp` | Free-form service messages are only safe inside the customer-service window. Template messages require SDK-user-selected, approved templates. |
| `@cognidesk/integration-social-messenger` | Send behavior depends on Meta's 24-hour standard messaging window or SDK-user-approved `MESSAGE_TAG` policy. Page webhook subscription is separate from webhook parsing. |
| `@cognidesk/integration-social-instagram` | Instagram messaging uses Instagram-specific response and HUMAN_AGENT policy. Do not assume general Messenger tags are safe defaults. |
| `@cognidesk/integration-social-tiktok` | The module supports selected Display API, Research API, Business comment, posting-status, and webhook surfaces. TikTok public APIs used here do not expose a generic customer-service DM inbox. |
| `@cognidesk/integration-messaging-discord` | HTTP interactions and REST helpers are separate from Gateway ingestion and Discord Webhook Events subscriptions. |
| `@cognidesk/integration-community-forum` | The module is Discourse-compatible and does not imply arbitrary forum-platform coverage. |

## Studio visibility

Anything configurable in the SDK should be visible in Studio when the active Studio Target grants the required scope.

Provider Manifest metadata should expose:

- category and import path
- coverage scope and evidence
- supported directions
- capabilities and provider objects
- credential requirements
- credential status
- privacy notes
- limitations

Studio operator changes should update SDK-backed configuration through reviewable workflows. Studio should not create a parallel hidden configuration model for provider setup.

## Generated provider code

Generated provider API coverage is committed to the owning provider package and published in package artifacts. It is not generated during `npm install`.

Maintainers review provider specs or fixtures before changing generated slices. Provider metadata and public docs are regenerated from manifests:

```bash
pnpm providers:catalog:data
pnpm providers:catalog
pnpm providers:architecture
pnpm provider-packages:check
```

## Verification

Provider tests should use official provider documentation as the source of truth for request shape, credential requirements, and feature boundaries. Mock-only tests are useful for SDK contracts, but they are not proof of full external API coverage.

Before enabling a provider capability in production:

1. Confirm the Provider Integration declares the exact capability and provider object you need.
2. Confirm credential status is configured and not only syntactically present.
3. Confirm provider-side subscriptions, queues, callbacks, app review, or product approvals are complete.
4. Run provider conformance and the module's focused tests.
5. Run at least one live or sandbox check for the enabled provider surface.
