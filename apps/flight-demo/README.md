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

Copy `config.example.json` or `config.openrouter.example.json` to `config.json`. The config file chooses the provider and model for each runtime role. API keys stay in environment variables and should not be committed.

For OpenRouter, put this in the repository root `.env`:

```sh
OPENROUTER_KEY=sk-or-...
```

The demo server and ingestion script load `.env` automatically from the repository root and from `apps/flight-demo/.env`.

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

The demo still uses Cognidesk's `KnowledgeSource` contract and Cognidesk's OpenAI model adapter for embeddings. Ranking is embedding-only cosine similarity for v1.

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
