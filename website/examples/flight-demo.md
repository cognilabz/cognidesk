# Flight Demo

A complete customer support agent for a fictional airline. This example demonstrates all major Cognidesk features working together.

## What it shows

| Feature | Implementation |
|---------|---------------|
| Agent with instructions | Concise flight support persona |
| Tools | Ticket lookup, flight search, booking |
| Knowledge sources | FAQ retrieval |
| State machine journeys | Ticket status flow with identification |
| Studio target adapter | Introspection, configuration surfaces, conversations, dashboards |
| Mocked flight-service APIs | Ticket lookup, flight search, booking |
| HTTP transport | REST + SSE |
| React chat widget | Full UI with custom widgets |
| Voice | Real-time voice conversations |
| OpenTelemetry | Pre-built Grafana dashboards |

## Running with Docker

Create the demo config first. The default OpenRouter example keeps API keys in
environment variables:

```bash
cp apps/flight-demo/config.openrouter.example.json apps/flight-demo/config.json
export OPENROUTER_KEY=sk-or-...
```

```bash
docker compose up --build
```

Then open:

- **Frontend**: `http://localhost:5173`
- **API**: `http://localhost:8787/api`
- **Studio**: `http://localhost:3000`

The default compose command ingests the demo knowledge index before starting the
API and frontend.

## Running locally

```bash
corepack enable
pnpm install
cp apps/flight-demo/config.openrouter.example.json apps/flight-demo/config.json
export OPENROUTER_KEY=sk-or-...
pnpm --filter @cognidesk/flight-demo ingest:knowledge
pnpm demo
```

This starts the flight demo API and Vite frontend, Cognidesk Studio, and the
Studio operator runtime via Turbo's terminal UI.

| Surface | URL |
|---------|-----|
| Flight demo frontend | `http://localhost:5173` |
| Flight demo API | `http://localhost:8787/api` |
| Cognidesk Studio | `http://localhost:3000` |
| Studio operator runtime | `ws://localhost:4099/ws` |

The default local Studio login is `admin@local.cognidesk.dev` /
`cognidesk-studio-admin`.

## With OpenTelemetry

```bash
docker compose -f docker-compose.otel.yml up --build
```

Open `http://localhost:3000` for Grafana dashboards showing:

- Conversation throughput and latency
- Journey activation rates
- Tool execution metrics
- Model token usage

For local environments that cannot create Docker bridge networks, use:

```bash
docker compose -f docker-compose.otel.host.yml up --build
```

## Configuration

The demo uses `apps/flight-demo/config.json` for model, embedding, voice, and
storage settings. Copy one of these templates:

| Template | Use when |
|----------|----------|
| `config.openrouter.example.json` | You want the quickest single-key setup with `OPENROUTER_KEY`. |
| `config.example.json` | You want OpenAI defaults with `OPENAI_API_KEY`. |
| `config.providers.example.json` | You want a non-default text provider and, when needed, a separate embedding provider. |
| `config.google-speech.example.json` | You want Google Cloud Speech for voice. |
| `config.azure-speech.example.json` | You want Azure AI Speech for voice. |
| `config.aws-speech.example.json` | You want Amazon Transcribe and Polly for voice. |
| `config.deepgram.example.json` | You want Deepgram for voice. |

API keys stay in environment variables and should not be committed.

## Try it

Use these prompts after the frontend opens:

| Prompt | Expected path |
|--------|---------------|
| `Find flights from Vienna to Berlin tomorrow.` | Activates the booking Journey and asks for or confirms trip details. |
| `What is the status of booking CD-CL204-4821?` | Uses the ticket-status Journey and mocked ticket-status tool. |
| `What baggage is included in economy?` | Uses Knowledge retrieval and includes source-backed policy guidance. |
| `My flight was cancelled and I need a person.` | Activates the handoff Journey. |

## Source code

The demo source lives in `apps/flight-demo/` in the repository.
