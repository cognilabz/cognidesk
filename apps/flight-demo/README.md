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

Copy `config.example.json` to `config.json` and set `OPENAI_API_KEY` in your shell. The config file chooses the model for each runtime role. API keys stay in environment variables and should not be committed.

Default role mapping:

- `response`: `gpt-5.5`
- `compaction`: `gpt-5.5`
- `matcher`: `gpt-5.4-mini`
- `extraction`: `gpt-5.4-mini`
- `citationPostProcessing`: `gpt-5.4-mini`
- `journeyEmbedding`: `text-embedding-3-small`

## Knowledge Ingestion

The JSON Knowledge Index in `.data/knowledge-index.json` is app-owned demo infrastructure. It is intentionally not a Cognidesk v1 Knowledge database package or a recommendation for production retrieval storage.

The demo still uses Cognidesk's `KnowledgeSource` contract and Cognidesk's OpenAI model adapter for embeddings. Ranking is embedding-only cosine similarity for v1.

Run ingestion after creating `config.json`:

```sh
pnpm --filter @cognidesk/flight-demo ingest:knowledge
```

The server fails startup if the Knowledge Index is missing or was generated with a different embedding model.
