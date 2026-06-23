# Provider Integration Packages

Official Provider Integrations are moving to individual packages named `@cognidesk/integration-{category}-{provider}`. Install and register only the providers your application enables.

Examples:

```bash
pnpm add @cognidesk/integration-email-gmail @cognidesk/integration-workplace-slack @cognidesk/integration-email-outlook @cognidesk/integration-workplace-teams @cognidesk/integration-voice-openai
```

```typescript
import { gmailEmailProviderManifest } from "@cognidesk/integration-email-gmail/manifest";
import { slackWorkplaceProviderManifest } from "@cognidesk/integration-workplace-slack/manifest";
import { outlookEmailProviderManifest } from "@cognidesk/integration-email-outlook/manifest";
import { teamsWorkplaceProviderManifest } from "@cognidesk/integration-workplace-teams/manifest";
import { openAIVoiceProviderManifest } from "@cognidesk/integration-voice-openai/manifest";
```

The split package work is staged behind #28, first-wave package issues #23-#25, and provider-family trackers #29-#43. Until those packages and generated type references land, this page keeps legacy generated reference links available for maintainers who need to inspect the current workspace state.

## Catalog and manifest exports

`@cognidesk/integration-catalog` will own provider discovery metadata once the split packages are present. Provider package manifest imports must stay lightweight and must not import provider SDK runtime code.

Application code should register manifests explicitly, then supply lazy loaders for provider runtime modules.

See the [Provider Integration Catalog](../guides/provider-integrations-catalog.md) for the staged package list and [Provider Package Migration](../guides/provider-package-migration.md) for old-import codemod rules.

Common examples:

| Provider | Manifest import |
|----------|-----------------|
| Gmail | `@cognidesk/integration-email-gmail/manifest` |
| Outlook | `@cognidesk/integration-email-outlook/manifest` |
| Slack | `@cognidesk/integration-workplace-slack/manifest` |
| Teams | `@cognidesk/integration-workplace-teams/manifest` |
| OpenAI Realtime Voice | `@cognidesk/integration-voice-openai/manifest` |
| Stripe | `@cognidesk/integration-ecommerce-stripe/manifest` |
| Zendesk | `@cognidesk/integration-ticketing-zendesk/manifest` |
| Genesys Cloud | `@cognidesk/integration-contact-center-genesys-cloud/manifest` |

## Voice adapter boundary

`@cognidesk/integration-voice-openai` is a Provider Integration because OpenAI Realtime can be the voice entry channel and the LLM-backed realtime session.

`@cognidesk/integration-voice-elevenlabs`, `@cognidesk/integration-voice-azure-speech`, `@cognidesk/integration-voice-aws-speech`, `@cognidesk/integration-voice-google-speech`, and `@cognidesk/integration-voice-deepgram` can also create Speech Provider-backed `VoiceProvider`s. In those sessions, the speech provider performs STT/TTS while the Cognidesk Agent Model Set remains the background LLM.

`@cognidesk/voice-websocket` remains separate browser transport infrastructure that provider adapters can use.

---

## Full type reference

Legacy generated type reference: [`@cognidesk/integrations` root](generated/integrations/dist.md).

## OpenAI Realtime Voice type reference

Legacy generated type reference: [`@cognidesk/integrations/voice/openai`](generated/integrations/dist/voice/openai.md).

## Enterprise Speech Provider type references

- [`@cognidesk/integrations/voice/aws-speech`](generated/integrations/dist/voice/aws-speech.md)
- [`@cognidesk/integrations/voice/google-speech`](generated/integrations/dist/voice/google-speech.md)
