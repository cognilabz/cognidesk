<div align="center">

# Cognidesk

**TypeScript runtime SDK for building customer support agents as code.**

[![SDK License](https://img.shields.io/badge/SDK-Apache--2.0-purple.svg)](LICENSES/Apache-2.0.txt)
[![Studio License](https://img.shields.io/badge/Studio-source--available-slate.svg)](LICENSES/Cognidesk-Studio-Source-Available-License.txt)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)

[Documentation](https://docs.cognidesk.dev) · [Quick Start](https://docs.cognidesk.dev/getting-started/quick-start/) · [Examples](https://docs.cognidesk.dev/examples/) · [API Reference](https://docs.cognidesk.dev/api-reference/)

</div>

---

## What is Cognidesk?

Cognidesk gives you full control over AI-powered customer support conversations — state machine journeys, typed tools, knowledge retrieval, and UI — without vendor lock-in. Core is transport-neutral: no HTTP, no framework, no runtime dependency baked in.

```typescript
import { createAgent, createRuntime, tool } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage-sqlite";
import { z } from "zod";

const findTicket = tool("findTicket", {
  input: z.object({ bookingReference: z.string() }),
  output: z.object({ status: z.string() }),
  execute: async ({ input }) => ({
    status: `Ticket ${input.bookingReference} is confirmed.`,
  }),
});

const agent = createAgent("support", {
  instructions: "You are a helpful support agent.",
})
  .tools.add(findTicket)
  .compile();

const runtime = createRuntime({
  storage: createSqliteStorage({ filename: "data.sqlite" }),
  agent,
  models,
});
```

## Features

- **State Machine Journeys** — deterministic conversation flows with typed context, guards, and alternate entries
- **Typed Tools & Knowledge** — Zod-validated inputs/outputs with source attribution
- **Transport Neutral** — core has zero HTTP dependencies; ship anywhere
- **React UI Kit** — drop-in chat widget with appearance configuration and custom widgets
- **Voice** — real-time voice via OpenAI Realtime with server-mediated connections
- **OpenTelemetry** — native spans, metrics, and pre-built Grafana dashboards
- **SSE Streaming** — real-time token streaming with synthetic deltas

## Packages

| Package | Description |
|---------|-------------|
| `@cognidesk/core` | Runtime, agents, journeys, tools, knowledge, events |
| `@cognidesk/http` | HTTP + SSE transport adapter |
| `@cognidesk/model` | Model provider adapters (OpenAI, OpenRouter) |
| `@cognidesk/react` | React hooks and chat widget |
| `@cognidesk/ui` | Prebuilt UI components |
| `@cognidesk/storage-sqlite` | SQLite storage adapter |
| `@cognidesk/otel` | OpenTelemetry instrumentation |
| `@cognidesk/voice-openai` | OpenAI Realtime voice adapter |
| `@cognidesk/voice-websocket` | Voice WebSocket adapter |
| `@cognidesk/journey-index-json` | JSON-based journey index |

## Quick start

```bash
pnpm add @cognidesk/core @cognidesk/http @cognidesk/storage-sqlite
```

Read the full [Quick Start guide →](https://docs.cognidesk.dev/getting-started/quick-start/)

## Demo

Run the flight support demo:

```bash
docker compose up --build
```

Open `http://localhost:5173` for the frontend, `http://localhost:8787/api` for the API.

## Development

```bash
pnpm install
pnpm check
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup, architecture decisions, and pull request guidelines.

## License

The Cognidesk SDK packages are licensed under [Apache-2.0](LICENSES/Apache-2.0.txt).
Cognidesk Studio is source-available under the [Cognidesk Studio Source Available License](LICENSES/Cognidesk-Studio-Source-Available-License.txt).

See [LICENSE](LICENSE) for the repository license map.
