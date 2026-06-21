# Provider Integration Packages

Official Provider Integrations are moving to individual packages named `@cognidesk/{category}-{provider}`. Install and register only the providers your application enables.

Examples:

```bash
pnpm add @cognidesk/email-gmail @cognidesk/workplace-slack @cognidesk/email-outlook @cognidesk/workplace-teams @cognidesk/voice-openai
```

```typescript
import { gmailEmailProviderManifest } from "@cognidesk/email-gmail/manifest";
import { slackWorkplaceProviderManifest } from "@cognidesk/workplace-slack/manifest";
import { outlookEmailProviderManifest } from "@cognidesk/email-outlook/manifest";
import { teamsWorkplaceProviderManifest } from "@cognidesk/workplace-teams/manifest";
import { openAIVoiceProviderManifest } from "@cognidesk/voice-openai/manifest";
```

The split package work is staged behind #20-#26/#28. Until those packages and generated type references land, this page keeps legacy generated reference links available for maintainers who need to inspect the current workspace state.

## Catalog and manifest exports

`@cognidesk/integration-catalog` will own provider discovery metadata once the split packages are present. Provider package manifest imports must stay lightweight and must not import provider SDK runtime code.

Application code should register manifests explicitly, then supply lazy loaders for provider runtime modules.

See the [Provider Integration Catalog](../guides/provider-integrations-catalog.md) for the staged package list.

Common examples:

| Provider | Manifest import |
|----------|-----------------|
| Gmail | `@cognidesk/email-gmail/manifest` |
| Outlook | `@cognidesk/email-outlook/manifest` |
| Slack | `@cognidesk/workplace-slack/manifest` |
| Teams | `@cognidesk/workplace-teams/manifest` |
| OpenAI Realtime Voice | `@cognidesk/voice-openai/manifest` |
| Stripe | `@cognidesk/ecommerce-stripe/manifest` |
| Zendesk | `@cognidesk/ticketing-zendesk/manifest` |
| Genesys Cloud | `@cognidesk/contact-center-genesys-cloud/manifest` |

## Voice adapter boundary

`@cognidesk/voice-openai` is a Provider Integration because OpenAI Realtime can be the voice entry channel and the LLM-backed realtime session.

`@cognidesk/voice-elevenlabs`, `@cognidesk/voice-azure-speech`, `@cognidesk/voice-aws-speech`, `@cognidesk/voice-google-speech`, and `@cognidesk/voice-deepgram` can also create Speech Provider-backed `VoiceProvider`s. In those sessions, the speech provider performs STT/TTS while the Cognidesk Agent Model Set remains the background LLM.

`@cognidesk/voice-websocket` remains separate browser transport infrastructure that provider adapters can use.

---

## Full type reference

Legacy generated type reference: [`@cognidesk/integrations` root](generated/integrations/dist.md).

## OpenAI Realtime Voice type reference

Legacy generated type reference: [`@cognidesk/integrations/voice/openai`](generated/integrations/dist/voice/openai.md).

## Enterprise Speech Provider type references

- [`@cognidesk/integrations/voice/aws-speech`](generated/integrations/dist/voice/aws-speech.md)
- [`@cognidesk/integrations/voice/google-speech`](generated/integrations/dist/voice/google-speech.md)
- [`@cognidesk/integrations/voice/deepgram`](generated/integrations/dist/voice/deepgram.md)
