# Flight Demo

The flight demo runs Cognidesk with real runtime modules, SQLite storage, mocked flight-service APIs, and a dependency-free local model fallback by default. Real model calls, embeddings, voice, Discord, SMTP/IMAP, and WhatsApp delivery are opt-in.

For the full local Studio, Docker, OpenTelemetry, Discord, and troubleshooting workflow, see `website/getting-started/local-development.md`.

## Agent Structure

The demo agent is split by authoring concern so it can be used as a reference shape:

- `server/agent/domain`: app-owned schemas and domain types
- `server/agent/data`: mocked Demo Data
- `server/agent/tools`: Tool definitions that wrap mocked flight-service APIs
- `server/agent/knowledge`: Knowledge Source wiring
- `server/agent/journeys`: one module per Journey
- `server/agent/models`: Agent Model Set construction
- `server/agent/index.ts`: composition, compile, and Journey Index build

## Configuration

Copy `config.example.json`, `config.openrouter.example.json`, `config.providers.example.json`, `config.azure-speech.example.json`, `config.aws-speech.example.json`, `config.google-speech.example.json`, or `config.deepgram.example.json` to `config.json`. The config file chooses the provider and model for each runtime role. API keys stay in environment variables and should not be committed.

By default the server starts without external API credentials. It uses a deterministic local demo Model Set and builds an in-memory Knowledge Index from `knowledge/documents.json` when `.data/knowledge-index.json` is missing or generated for another embedding provider.

## Privacy Consent Prompt

The customer-facing app shows a GDPR consent prompt when the page loads. The
choice is stored in local storage under
`cognidesk.flightDemo.privacyConsent.v1` and reused for later page loads.

If the customer chooses `No`, new Cognidesk Conversations are created with these
SDK privacy settings:

- `traceContent: "none"` so message text is not written into trace, replay, or
  telemetry content surfaces.
- `customerRelationVisibility: "none"` so the demo does not expose a generic
  customer relation in Studio unless an app changes this policy.
- Explicit demo-owned mask rules for email addresses, phone numbers, and Flight
  Demo booking references such as `CD-CL102-4821`.

If the customer chooses `Consent`, the demo does not pass session privacy
settings and keeps local runtime events readable for development. The SDK does
not ship default privacy masks; the demo masks live in `src/privacy.ts` and are
passed to new ChatWidget, chat, and voice Conversations at session start.

### External Integration Opt-In

Default local mode is dependency-free: no real model calls, no external embedding service, no voice provider secrets, and no live Discord, SMTP/IMAP, or WhatsApp Journeys are required. The app still starts with mocked flight-service APIs and a deterministic local Model Set.

Set this env var to enable real providers from `config.json` and default all external-integration Journeys to enabled:

```sh
FLIGHT_DEMO_EXTERNAL_APIS=true
```

Use the per-Journey flags when you want only one live integration while keeping the rest of the demo local:

| Journey | Enables | Env flag |
| --- | --- | --- |
| `secure-email-login` | SMTP delivery and IMAP reply verification for account-protected requests | `FLIGHT_DEMO_SECURE_EMAIL_JOURNEY=true` |
| `human-handoff` | Discord support-thread handoff | `FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=true` |
| `whatsapp-customer-message` | WhatsApp verification links, confirmation links, and notifications | `FLIGHT_DEMO_WHATSAPP_JOURNEY=true` |

Each per-Journey flag overrides `FLIGHT_DEMO_EXTERNAL_APIS`. For example, this runs with local models and only the WhatsApp Journey registered:

```sh
FLIGHT_DEMO_EXTERNAL_APIS=false
FLIGHT_DEMO_SECURE_EMAIL_JOURNEY=false
FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=false
FLIGHT_DEMO_WHATSAPP_JOURNEY=true
```

This enables live models and all external integrations except Discord handoff:

```sh
FLIGHT_DEMO_EXTERNAL_APIS=true
FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=false
```

When a Journey is disabled, it is not registered in the agent and its channel policy is omitted. When a Journey is enabled, the provider still needs its normal config and env secrets; missing credentials show up as blocked provider readiness instead of silently falling back to a mock delivery.

For OpenRouter, put this in the repository root `.env`:

```sh
OPENROUTER_KEY=sk-or-...
```

The demo server and ingestion script load `.env` automatically from the repository root and from `apps/flight-demo/.env`.

Supported text model providers are:

- `openai`
- `openrouter`
- `anthropic`
- `google`
- `mistral`
- `cohere`
- `groq`
- `xai`
- `azure-openai`
- `openai-compatible`

The demo still needs embeddings for the Journey Index and Knowledge retrieval. `openai`, `openrouter`, `google`, `mistral`, `cohere`, `azure-openai`, and `openai-compatible` can provide `roles.journeyEmbedding` directly. `anthropic`, `groq`, and `xai` need a separate `models.embedding` block, as shown in `config.providers.example.json`.

Default API key environment variables:

| Provider | Env var |
| --- | --- |
| `openai` | `OPENAI_API_KEY` |
| `openrouter` | `OPENROUTER_KEY` |
| `anthropic` | `ANTHROPIC_API_KEY` |
| `google` | `GOOGLE_GENERATIVE_AI_API_KEY` |
| `mistral` | `MISTRAL_API_KEY` |
| `cohere` | `COHERE_API_KEY` |
| `groq` | `GROQ_API_KEY` |
| `xai` | `XAI_API_KEY` |
| `azure-openai` | `AZURE_OPENAI_API_KEY` |
| `openai-compatible` | `OPENAI_COMPATIBLE_API_KEY` |

`azure-openai` also requires either `resourceName` or `baseURL`. `openai-compatible` requires `baseURL` and accepts an optional `name`, which is used as the provider name for the AI SDK adapter.

Supported voice providers are:

- `openai` for OpenAI Realtime voice sessions
- `elevenlabs` for ElevenLabs speech-to-text and text-to-speech with the configured Cognidesk Agent Model Set as the background LLM
- `azure-speech` for Azure AI Speech STT/TTS with the configured Cognidesk Agent Model Set as the background LLM
- `aws-speech` for Amazon Transcribe and Amazon Polly STT/TTS with the configured Cognidesk Agent Model Set as the background LLM
- `google-speech` for Google Cloud Speech-to-Text and Text-to-Speech with the configured Cognidesk Agent Model Set as the background LLM
- `deepgram` for Deepgram STT/TTS with the configured Cognidesk Agent Model Set as the background LLM

Default voice environment variables:

| Provider | Env vars |
| --- | --- |
| `openai` | `OPENAI_API_KEY` |
| `elevenlabs` | `ELEVENLABS_API_KEY` |
| `azure-speech` | `AZURE_SPEECH_KEY`, `AZURE_SPEECH_REGION` |
| `aws-speech` | `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`; optional `AWS_SESSION_TOKEN` |
| `google-speech` | `GOOGLE_CLOUD_ACCESS_TOKEN` |
| `deepgram` | `DEEPGRAM_API_KEY` |

## Discord Human Handoff

The flight demo can sync one conversation between web chat, web voice, and Discord threads through `@cognidesk/integration-messaging-discord`. Discord support is disabled unless `FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=true` or `FLIGHT_DEMO_EXTERNAL_APIS=true`, and `discord.enabled` is true in `config.json`.

1. Create a Discord application and bot, then enable the Message Content Intent for the bot.
2. Invite the bot to the test guild with these permissions: View Channel, Read Message History, Send Messages, Create Public Threads, Send Messages in Threads, and Add Reactions.
3. Set `DISCORD_BOT_TOKEN` in the repository root `.env` or `apps/flight-demo/.env`.
4. Configure the demo:

```json
{
  "discord": {
    "enabled": true,
    "botTokenEnv": "DISCORD_BOT_TOKEN",
    "applicationId": "your-application-id",
    "guildId": "your-guild-id",
    "supportChannelId": "your-support-channel-id",
    "webAppUrl": "http://localhost:5173",
    "threadAutoArchiveDuration": 1440,
    "mirrorPollIntervalMs": 1000
  }
}
```

Messages sent in the configured support channel create a Discord thread and start a Cognidesk conversation. Messages sent inside that thread resume the same conversation. The web app shows recent conversations in the sidebar and supports `?conversationId=...` resume links. With `FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=true`, Discord is prepared by the server when the `human-handoff` Journey activates; the web app shows readiness status only and does not render a customer-facing "Continue in Discord" button.

## Secure Email SMTP

When `FLIGHT_DEMO_SECURE_EMAIL_JOURNEY=true`, account-protected chat requests, such as sending a boarding pass to the account email, switch into the `secure-email-login` Journey. When booking reference and account email are known, the server sends a real SMTP verification email through `@cognidesk/integration-email-smtp`. The chat workflow is then gated until the customer replies to that email with the generated confirmation code, which is read through `@cognidesk/integration-email-imap`. There is no mock delivery fallback.

SMTP and IMAP settings are configured in `config.json` under `email`; secrets stay in `.env`. For iCloud Mail, use an Apple app-specific password, not your normal Apple ID password:

```sh
FLIGHT_EMAIL_SMTP_HOST=smtp.mail.me.com
FLIGHT_EMAIL_SMTP_PORT=587
FLIGHT_EMAIL_SMTP_SECURE=false
FLIGHT_EMAIL_SMTP_USER=your-address@icloud.com
FLIGHT_EMAIL_SMTP_PASSWORD=xxxx-xxxx-xxxx-xxxx
FLIGHT_EMAIL_FROM=your-address@icloud.com
FLIGHT_EMAIL_IMAP_HOST=imap.mail.me.com
FLIGHT_EMAIL_IMAP_PORT=993
FLIGHT_EMAIL_IMAP_SECURE=true
FLIGHT_EMAIL_IMAP_USER=your-address@icloud.com
FLIGHT_EMAIL_IMAP_MAILBOX=INBOX
```

Optional variables:

```sh
FLIGHT_EMAIL_REPLY_TO=your-address@icloud.com
FLIGHT_EMAIL_IMAP_PASSWORD=xxxx-xxxx-xxxx-xxxx
FLIGHT_EMAIL_IMAP_POLL_INTERVAL_MS=15000
FLIGHT_EMAIL_RECIPIENT_OVERRIDE=demo-recipient@example.com
FLIGHT_EMAIL_LOGIN_BASE_URL=https://auth.cognidesk.local/flight-demo/login
```

`FLIGHT_EMAIL_IMAP_PASSWORD` can be omitted when it is the same as `FLIGHT_EMAIL_SMTP_PASSWORD`. `FLIGHT_EMAIL_RECIPIENT_OVERRIDE` is only for local smoke tests. If it is unset, the email is sent to the account email provided in the demo conversation.

## WhatsApp Customer Message

Set `FLIGHT_DEMO_WHATSAPP_JOURNEY=true` to register the `whatsapp-customer-message` Journey without enabling Secure Email or Discord handoff. The Journey can send verification links, confirmation links, or support notifications only after explicit customer confirmation.

Minimal send-only WhatsApp environment variables:

```sh
FLIGHT_WHATSAPP_PROVIDER=cloud-api
FLIGHT_WHATSAPP_ACCESS_TOKEN=...
FLIGHT_WHATSAPP_PHONE_NUMBER_ID=...
```

Optional variables for demo links and inbound webhook verification:

```sh
FLIGHT_WHATSAPP_CONFIRMATION_BASE_URL=https://auth.cognidesk.local/flight-demo/whatsapp
FLIGHT_WHATSAPP_APP_SECRET=...
FLIGHT_WHATSAPP_WEBHOOK_VERIFY_TOKEN=...
```

`FLIGHT_WHATSAPP_CONFIRMATION_BASE_URL` is only used by the demo when the outgoing WhatsApp message is a `verification-link` or `confirmation-link`; the URL is written into the message text. Plain notification messages do not use it. `FLIGHT_WHATSAPP_APP_SECRET` and `FLIGHT_WHATSAPP_WEBHOOK_VERIFY_TOKEN` are only needed when receiving or verifying Meta webhooks. Send-only delivery needs the access token and phone number ID.

The recipient phone number is always collected from the customer in the demo conversation before the send is confirmed.

For a safe local smoke test, type your own WhatsApp-enabled test number in the chat prompt.

### WhatsApp via linked device

For a consumer-friendly local demo without a WhatsApp Business Account, use the community WhatsApp Web linked-device adapter. It follows the same non-Business-API approach as WhatsApp Web clients such as `wacli`, but it sends directly through the built-in Node/Baileys integration instead of shelling out to a CLI.

Then run the Flight Demo with:

```sh
FLIGHT_DEMO_WHATSAPP_JOURNEY=true
FLIGHT_WHATSAPP_PROVIDER=web
```

Optional linked-device variables:

```sh
FLIGHT_WHATSAPP_WEB_AUTH_STATE_DIR=/absolute/path/to/.data/whatsapp-web
FLIGHT_WHATSAPP_WEB_PAIRING_PHONE=15550123
FLIGHT_WHATSAPP_WEB_CONNECT_TIMEOUT_MS=45000
FLIGHT_WHATSAPP_WEB_SEND_TIMEOUT_MS=30000
```

On first use, scan the QR code printed by the server from WhatsApp's Linked Devices screen. If `FLIGHT_WHATSAPP_WEB_PAIRING_PHONE` is set, the server requests and prints a pairing code instead; use the account phone number in E.164 format without `+`.

This is a third-party WhatsApp Web integration, not an official WhatsApp Business Platform API. Use a demo/automation account when possible, understand that the local auth-state directory contains session credentials, and confirm every outbound send in the demo UI.

WhatsApp environment variable reference:

| Variable | Applies to | Required | Purpose |
| --- | --- | --- | --- |
| `FLIGHT_DEMO_WHATSAPP_JOURNEY` | all WhatsApp modes | yes | Enables only the Flight Demo WhatsApp customer-message journey. `FLIGHT_DEMO_WHATSAPP_ENABLED` and `COGNIDESK_FLIGHT_DEMO_WHATSAPP_JOURNEY` are accepted aliases; `FLIGHT_DEMO_EXTERNAL_APIS=true` enables all external-integration journeys by default. |
| `FLIGHT_WHATSAPP_PROVIDER` | all WhatsApp modes | optional | Selects delivery: `cloud-api` for Meta Cloud API, `web` for WhatsApp Web linked-device. Defaults to `cloud-api`. |
| `FLIGHT_WHATSAPP_ACCESS_TOKEN` | `cloud-api` | send-only yes | Meta access token used to call the WhatsApp Cloud API. |
| `FLIGHT_WHATSAPP_PHONE_NUMBER_ID` | `cloud-api` | send-only yes | Meta `phone_number_id` used as the sender number for Cloud API sends. |
| `FLIGHT_WHATSAPP_APP_SECRET` | `cloud-api` webhooks | no for send-only | Meta app secret used only to validate inbound webhook signatures. |
| `FLIGHT_WHATSAPP_WEBHOOK_VERIFY_TOKEN` | `cloud-api` webhooks | no for send-only | Verify token used only for webhook challenge setup. |
| `FLIGHT_WHATSAPP_CONFIRMATION_BASE_URL` | all WhatsApp modes | optional | Base URL written into demo verification/confirmation messages. It is not a webhook callback and is not needed for plain notifications. |
| `FLIGHT_WHATSAPP_WEB_AUTH_STATE_DIR` | `web` | optional | Local directory where the linked-device session credentials are stored. Defaults to `.data/whatsapp-web` under the Flight Demo app. |
| `FLIGHT_WHATSAPP_WEB_PAIRING_PHONE` | `web` | optional | Phone number used to request a pairing code instead of scanning a QR code. Use digits/E.164 without `+`, for example `15550123`. |
| `FLIGHT_WHATSAPP_WEB_CONNECT_TIMEOUT_MS` | `web` | optional | Max time to wait for the linked-device session to open. Defaults to `45000`. |
| `FLIGHT_WHATSAPP_WEB_SEND_TIMEOUT_MS` | `web` | optional | Max time to wait for one outbound WhatsApp Web send. Defaults to `30000`. |

There is intentionally no WhatsApp recipient override. The customer phone number is always collected in the demo conversation and shown before the explicit send confirmation.

Full WhatsApp environment variable example:

```sh
FLIGHT_WHATSAPP_PROVIDER=cloud-api
FLIGHT_WHATSAPP_ACCESS_TOKEN=...
FLIGHT_WHATSAPP_PHONE_NUMBER_ID=...
FLIGHT_WHATSAPP_APP_SECRET=...
FLIGHT_WHATSAPP_WEBHOOK_VERIFY_TOKEN=...
FLIGHT_WHATSAPP_CONFIRMATION_BASE_URL=https://auth.cognidesk.local/flight-demo/whatsapp
FLIGHT_WHATSAPP_WEB_AUTH_STATE_DIR=/absolute/path/to/.data/whatsapp-web
FLIGHT_WHATSAPP_WEB_PAIRING_PHONE=15550123
FLIGHT_WHATSAPP_WEB_CONNECT_TIMEOUT_MS=45000
FLIGHT_WHATSAPP_WEB_SEND_TIMEOUT_MS=30000
```

Default text role mapping:

- `response`: `gpt-5.4-mini`
- `compaction`: `gpt-5.4-mini`
- `matcher`: `gpt-5.4-mini`
- `extraction`: `gpt-5.4-mini`
- `citationPostProcessing`: `gpt-5.4-mini`
- `journeyEmbedding`: `text-embedding-3-small`

OpenRouter text role mapping in `config.openrouter.example.json`:

- `response`: `openai/gpt-5.4-mini`
- `compaction`: `openai/gpt-5.4-mini`
- `matcher`: `openai/gpt-5.4-mini`
- `extraction`: `openai/gpt-5.4-mini`
- `citationPostProcessing`: `openai/gpt-5.4-mini`
- `journeyEmbedding`: `openai/text-embedding-3-small`

## Knowledge Ingestion

The JSON Knowledge Index in `.data/knowledge-index.json` is app-owned demo infrastructure. It is intentionally not a Cognidesk v1 Knowledge database package or a recommendation for production retrieval storage.

The demo still uses Cognidesk's `KnowledgeSource` contract and the selected embedding provider. Ranking is embedding-only cosine similarity for v1.

Run ingestion after creating `config.json` when you want to use the configured external embedding provider:

```sh
corepack pnpm --filter @cognidesk/flight-demo ingest:knowledge
```

With `FLIGHT_DEMO_EXTERNAL_APIS=true`, the server fails startup if the Knowledge Index is missing or was generated with a different embedding model. In the default local mode, the server builds a local in-memory index from `knowledge/documents.json` instead.

## Local Run

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm demo
```

This starts the API and Vite frontend in Turbo's terminal UI so you can switch between each service's logs. Open `http://localhost:5173`. The React app uses `http://localhost:8787/api` by default.

For live models and all integrations, set `FLIGHT_DEMO_EXTERNAL_APIS=true`, provide the required provider secrets, and run `corepack pnpm --filter @cognidesk/flight-demo ingest:knowledge` before starting the demo. For a single live integration with local models, use one of the per-Journey flags instead.

## OpenTelemetry Demo

```sh
docker-compose -f docker-compose.otel.yml up --build
```

The OpenTelemetry demo starts the flight app with `COGNIDESK_OTEL=true` and `COGNIDESK_TELEMETRY_CONTENT=full`, exports traces and metrics through the OpenTelemetry Collector, collects container logs with Promtail/Loki, and provisions Grafana dashboards at `http://localhost:3000`.

The stack is intended for live-provider runs. Set `FLIGHT_DEMO_EXTERNAL_APIS=true` and make sure the configured API key, such as `OPENROUTER_KEY` for the default config, is available in the shell that starts Docker Compose. Individual integration Journeys can still be overridden with their per-Journey flags.

For local environments that cannot create Docker bridge networks, use `docker-compose.otel.host.yml` from the repository root; it keeps the same Grafana entrypoint and moves the demo API to `http://localhost:18787/api` to avoid common local port collisions.

## Test Prompts

Use these prompts to exercise the demo agent. The expected behavior below is intentionally directional, not the exact answer text.

| What to ask | What should happen |
| --- | --- |
| `Find flights from Vienna to Berlin tomorrow.` | The booking Journey should activate, the route/date should be extracted, and the agent should move toward showing or selecting mocked flights. |
| `Book a ticket from Vienna to Paris tomorrow for Alex Morgan.` | The booking Journey should collect route, date, and passenger details, then ask for confirmation before creating a mocked booking. |
| `What is the status of booking CD-CL204-4821?` | The ticket-status Journey should activate and use the mocked ticket-status tool. |
| `Can I check in for CL204?` | The status/check-in path should activate; if a booking reference is required, the agent should ask for it rather than inventing one. |
| `What baggage is included in economy?` | The base support agent should use Knowledge retrieval and answer with baggage policy direction plus a source reference. |
| `My flight was cancelled and I need a person.` | With `FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=true`, the handoff Journey should activate and collect a short summary for human support. In default local mode, the agent should explain that live handoff is disabled. |
