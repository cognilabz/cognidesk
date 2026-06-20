# @cognidesk/integrations

`@cognidesk/integrations` is the official external Provider Integration package.

Install it once and import provider modules through category/provider subpaths:

```bash
pnpm add @cognidesk/integrations
```

```typescript
import { gmailEmailProviderManifest } from "@cognidesk/integrations/email/gmail";
import { zendeskTicketingProviderManifest } from "@cognidesk/integrations/ticketing/zendesk";
import { genesysCloudContactCenterProviderManifest } from "@cognidesk/integrations/contact-center/genesys-cloud";
import { createOpenAIVoiceProvider } from "@cognidesk/integrations/voice/openai";
import { createAwsSpeechVoiceProvider } from "@cognidesk/integrations/voice/aws-speech";
import { createAzureSpeechVoiceProvider } from "@cognidesk/integrations/voice/azure-speech";
import { createDeepgramSpeechVoiceProvider } from "@cognidesk/integrations/voice/deepgram";
import { createGoogleSpeechVoiceProvider } from "@cognidesk/integrations/voice/google-speech";
```

## Root exports

The root export is intentionally lightweight. It is for discovery, registry metadata, and manifest loading:

| Export | Purpose |
|--------|---------|
| `integrationProviderReferences` | Static registry of official Provider Integration references. |
| `IntegrationProviderReference` | Type for provider registry entries, including `id`, `category`, `provider`, `importPath`, `modulePath`, and `manifestExport`. |
| `IntegrationProviderId` | Union of official provider reference IDs. |
| `integrationProviderCategories` | Sorted list of categories available in the package. |
| `getIntegrationProviderReference(id)` | Optional lookup for a provider reference. |
| `requireIntegrationProviderReference(id)` | Lookup that throws for unknown provider IDs. |
| `loadProviderIntegration(idOrReference)` | Dynamically imports a typed provider module. |
| `loadProviderIntegrationManifest(idOrReference)` | Dynamically imports a provider module and returns its Provider Manifest. |

Provider clients, generated API functions, parsers, signature helpers, and credential-readiness helpers live on provider subpaths, not on the root export.

## Provider subpaths

See the [Provider Integration Catalog](../guides/provider-integrations-catalog.md) for the complete list of provider subpaths.

Common examples:

| Provider | Import |
|----------|--------|
| Gmail | `@cognidesk/integrations/email/gmail` |
| Outlook | `@cognidesk/integrations/email/outlook` |
| WhatsApp | `@cognidesk/integrations/messaging/whatsapp` |
| Twilio SMS | `@cognidesk/integrations/sms/twilio` |
| Zendesk | `@cognidesk/integrations/ticketing/zendesk` |
| ServiceNow | `@cognidesk/integrations/ticketing/servicenow` |
| Genesys Cloud | `@cognidesk/integrations/contact-center/genesys-cloud` |
| Amazon Connect | `@cognidesk/integrations/contact-center/amazon-connect` |
| Slack | `@cognidesk/integrations/workplace/slack` |
| OpenAI Realtime Voice | `@cognidesk/integrations/voice/openai` |
| ElevenLabs | `@cognidesk/integrations/voice/elevenlabs` |
| Azure AI Speech | `@cognidesk/integrations/voice/azure-speech` |
| AWS Speech | `@cognidesk/integrations/voice/aws-speech` |
| Google Cloud Speech | `@cognidesk/integrations/voice/google-speech` |
| Deepgram | `@cognidesk/integrations/voice/deepgram` |

## Voice adapter boundary

`@cognidesk/integrations/voice/openai` is a Provider Integration because OpenAI Realtime can be the voice entry channel and the LLM-backed realtime session.

`@cognidesk/integrations/voice/elevenlabs`, `@cognidesk/integrations/voice/azure-speech`, `@cognidesk/integrations/voice/aws-speech`, `@cognidesk/integrations/voice/google-speech`, and `@cognidesk/integrations/voice/deepgram` can also create Speech Provider-backed `VoiceProvider`s. In those sessions, the speech provider performs STT/TTS while the Cognidesk Agent Model Set remains the background LLM.

`@cognidesk/voice-websocket` remains separate browser transport infrastructure that provider adapters can use.

---

## Full type reference

Open the generated [`@cognidesk/integrations` root type reference](generated/integrations/dist.md).

## OpenAI Realtime Voice type reference

See the generated [`@cognidesk/integrations/voice/openai` type reference](generated/integrations/dist/voice/openai.md).

## Enterprise Speech Provider type references

- [`@cognidesk/integrations/voice/aws-speech`](generated/integrations/dist/voice/aws-speech.md)
- [`@cognidesk/integrations/voice/google-speech`](generated/integrations/dist/voice/google-speech.md)
- [`@cognidesk/integrations/voice/deepgram`](generated/integrations/dist/voice/deepgram.md)
