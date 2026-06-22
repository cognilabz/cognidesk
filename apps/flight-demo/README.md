# Flight Demo

The flight demo runs Cognidesk with real runtime modules, real model calls, real embeddings, SQLite storage, and mocked flight-service APIs.

## Agent Structure

The demo agent is split by authoring concern so it can be used as a reference shape:

- `server/agent/domain`: app-owned schemas and domain types
- `server/agent/data`: mocked Demo Data
- `server/agent/tools`: Tool definitions that wrap mocked integrations
- `server/agent/knowledge`: Knowledge Source wiring
- `server/agent/journeys`: one module per Journey
- `server/agent/models`: Agent Model Set construction
- `server/agent/index.ts`: composition, compile, and Journey Index build

`server/flight-agent.ts` stays as a compatibility entry point for tests and server code.

## Configuration

Copy `config.example.json`, `config.openrouter.example.json`, `config.providers.example.json`, `config.azure-speech.example.json`, `config.aws-speech.example.json`, `config.google-speech.example.json`, or `config.deepgram.example.json` to `config.json`. The config file chooses the provider and model for each runtime role. API keys stay in environment variables and should not be committed.

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

## Discord Continuation

The flight demo can sync one conversation between web chat, web voice, and Discord threads through `@cognidesk/integration-community-discord`. Discord support is disabled unless `discord.enabled` is true in `config.json`.

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

Messages sent in the configured support channel create a Discord thread and start a Cognidesk conversation. Messages sent inside that thread resume the same conversation. The web app shows recent conversations in the sidebar and supports `?conversationId=...` resume links. `Continue in Discord` creates or reuses a Discord thread for the active web conversation, stops any active web voice session first, mirrors prior completed messages, and opens the Discord thread.

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

The demo still uses Cognidesk's `KnowledgeSource` contract and the configured embedding Model Provider. Ranking is embedding-only cosine similarity for v1.

Run ingestion after creating `config.json`:

```sh
pnpm --filter @cognidesk/flight-demo ingest:knowledge
```

The server fails startup if the Knowledge Index is missing or was generated with a different embedding model.

## Local Run

```sh
pnpm install
pnpm --filter @cognidesk/flight-demo ingest:knowledge
pnpm demo
```

This starts the API and Vite frontend in Turbo's terminal UI so you can switch between each service's logs. Open `http://localhost:5173`. The React app uses `http://localhost:8787/api` by default.

## OpenTelemetry Demo

```sh
docker compose -f docker-compose.otel.yml up --build
```

The OpenTelemetry demo starts the flight app with `COGNIDESK_OTEL=true` and `COGNIDESK_TELEMETRY_CONTENT=full`, exports traces and metrics through the OpenTelemetry Collector, collects container logs with Promtail/Loki, and provisions Grafana dashboards at `http://localhost:3000`.

The stack uses real model calls only. Make sure the configured API key, such as `OPENROUTER_KEY` for the default config, is available in the shell that starts Docker Compose.

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
| `My flight was cancelled and I need a person.` | The handoff Journey should activate and collect a short summary for human support. |
