# Omnichannel NG Changes

This page summarizes the current NG implementation decisions and the website-facing behavior SDK users should rely on.

## Package model

Official external provider modules ship in one package:

```bash
pnpm add @cognidesk/integrations
```

Provider modules are imported through category/provider subpaths:

```typescript
import { gmailEmailProviderManifest } from "@cognidesk/integrations/email/gmail";
import { genesysCloudContactCenterProviderManifest } from "@cognidesk/integrations/contact-center/genesys-cloud";
import { twilioSmsProviderManifest } from "@cognidesk/integrations/sms/twilio";
```

The root package stays lightweight. It exposes provider references, categories, and manifest loaders such as `integrationProviderReferences`, `integrationProviderCategories`, `loadProviderIntegration`, and `loadProviderIntegrationManifest`.

Infrastructure stays separate:

| Package | Role |
|---------|------|
| `@cognidesk/core` | Runtime, definitions, policies, events, and execution model |
| `@cognidesk/model` | Model adapters |
| `@cognidesk/storage` | Runtime persistence adapters |
| `@cognidesk/http` | HTTP/SSE transport |
| `@cognidesk/voice-websocket` | Browser Voice WebSocket transport adapter |
| `@cognidesk/studio-adapter` | Studio introspection and operator-change adapter |
| `@cognidesk/test-harness` | Provider conformance, eval, and typing guardrails |

## Voice boundary

There are two different voice concepts:

| Surface | Package | Meaning |
|---------|---------|---------|
| OpenAI Realtime Voice Provider Integration | `@cognidesk/integrations/voice/openai` | Connects Cognidesk voice runtime sessions to OpenAI Realtime as an entry channel and LLM-backed realtime session. |
| Voice browser transport | `@cognidesk/voice-websocket` | Exposes Cognidesk's browser voice protocol over WebSocket. |
| Voice Provider Integration | `@cognidesk/integrations/voice/elevenlabs`, `@cognidesk/integrations/voice/twilio`, `@cognidesk/integrations/voice/vonage`, `@cognidesk/integrations/voice/sip` | External voice-provider APIs, telephony objects, SIP/provider operations, and outbound-capable provider surfaces where supported. |

OpenAI Realtime is a Provider Integration even though it also hosts the LLM-backed realtime session. `@cognidesk/voice-websocket` remains the separately installed browser transport infrastructure.

## Configuration rules

Cognidesk does not invent product defaults for business behavior. SDK users configure the behavior they want.

| Rule | Behavior |
|------|----------|
| No hidden defaults | Consent, handoff, outbound contact, retention, channel routing, provider setup, and flow activation are SDK configuration. |
| Optional channels | A deployment may have no multichannel setup, one channel, or many channel sets. |
| Same agent, channel-adapted behavior | The same journeys, tools, knowledge, policies, and personas can run across channels, with channel-specific rendering and constraints where configured. |
| Conversation continuity is app-owned | SDK users decide whether a new chat starts a new conversation or whether a channel switch continues an existing conversation. |
| Channel-specific flow activation | A flow can be enabled or disabled per channel or channel set. |
| Provider readiness is explicit | Missing provider credentials, app subscriptions, queues, callbacks, product approvals, or webhook setup must surface as readiness state, not as silent fallback behavior. |

## Provider manifests

Every Provider Integration exports a Provider Manifest with:

- `id`, `category`, `provider`, `packageName`, and trust level
- `coverage.scope` and evidence
- supported directions
- channel capabilities and provider objects
- credential requirements
- privacy notes and limitations
- optional metadata such as channel coverage, generated API verification, and checked coverage artifacts

The package name for official Provider Integrations is always `@cognidesk/integrations`. The provider import path lives in the root integration registry.

## Coverage and conformance

Coverage scopes are intentionally explicit:

| Scope | Meaning |
|-------|---------|
| `local-protocol` | Cognidesk-owned protocol or local adapter surface. |
| `support-workflow-subset` | Selected support workflows such as send, receive, ticket, callback, handoff, readiness, or signature verification. |
| `provider-api-subset` | A broader typed subset of a provider API or platform slice. |
| `full-provider-api` | Full documented provider API coverage with generated operation and function catalogs, official evidence, and zero known missing operations in the claimed scope. |

Provider conformance checks package naming, manifest shape, capability vocabulary, provider-object evidence, credential safety, fail-closed behavior, connection-backed contract metadata, and optional live checks. Live checks without credentials must report `credential-blocked`.

## Handoff

SDK developers decide when and how handoff happens. Cognidesk provides the capability and provider surfaces; it does not decide escalation timing.

Contact-center Provider Integrations document which handoff surfaces they actually support:

- Genesys Cloud Open Messaging and callback surfaces are distinct from Web Messaging or Messenger deployments.
- Genesys Engage and PureConnect support on-premises surfaces where configured.
- Amazon Connect, NICE CXone, Talkdesk, Five9, 8x8, RingCentral, Aircall, Nextiva, and Zoom expose only the documented support surfaces in their manifests.
- Outbound voice, callback, or campaign actions are available only when the provider supports them and the SDK user configures the required provider-side permissions and routing.

## Consent, policy, and approvals

Consent behavior is fully configurable. Star ratings, marketing consent, outbound contact consent, recording consent, cobrowsing consent, and provider-specific consent types are SDK-defined policy, not hardcoded SDK defaults.

Policy configuration should cover:

- outbound contact eligibility
- channel-specific message windows and provider tags
- sensitive data exposure and redaction
- approval requirements for external side effects
- retention and deletion behavior
- handoff payload and transcript sharing
- provider-specific compliance constraints

## Studio visibility

Everything configurable in the SDK should be visible in Studio when the active Studio Target grants the required scope.

Studio should surface:

- provider modules and import paths
- coverage scope and evidence
- enabled channels and channel sets
- flow activation per channel
- capabilities and provider objects
- credential readiness
- consent and policy configuration
- handoff configuration
- provider limitations and missing setup

Operator chat changes should update SDK-backed configuration through reviewable workflows. Studio should not create a hidden parallel configuration model.

## Connection-backed providers

OpenAPI and MCP execution belongs in `@cognidesk/connections`, not in `@cognidesk/core`. Provider Integrations may opt into connection-backed execution by declaring reviewed contracts, operation aliases, and digest or compatibility metadata.

When a reviewed contract changes incompatibly, execution fails closed instead of silently changing provider behavior.

## Documentation map

- Use the [Provider Integrations guide](provider-packages.md) for categories, coverage scopes, handoff boundaries, and configuration rules.
- Use the [Provider Integration Catalog](provider-integrations-catalog.md) for every official provider module and import path.
- Use the [Voice guide](voice.md) for voice runtime adapters and the OpenAI/WebSocket connection model.
