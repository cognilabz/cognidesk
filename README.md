<div align="center">

# Cognidesk

**TypeScript runtime SDK for building customer support agents as code.**

[![SDK License](https://img.shields.io/badge/SDK-Apache--2.0-purple.svg)](LICENSES/Apache-2.0.txt)
[![Studio License](https://img.shields.io/badge/Studio-source--available-slate.svg)](LICENSES/Cognidesk-Studio-Source-Available-License.txt)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-24+-green.svg)](https://nodejs.org/)

[Documentation](https://cognidesk.cognilabz.com) · [Quick Start](https://cognidesk.cognilabz.com/getting-started/quick-start/) · [Examples](https://cognidesk.cognilabz.com/examples/) · [API Reference](https://cognidesk.cognilabz.com/api-reference/)

</div>

---

## What is Cognidesk?

Cognidesk gives you full control over AI-powered customer support conversations — state machine journeys, typed tools, knowledge retrieval, and UI — without vendor lock-in. Core is transport-neutral: no HTTP, no framework, no runtime dependency baked in.

```typescript
import { createAgent, createRuntime, tool } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage/sqlite";
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
  models, // See the Quick Start for createModelSet configuration.
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
| `@cognidesk/storage` | Storage adapters |
| `@cognidesk/otel` | OpenTelemetry instrumentation |
| `@cognidesk/{category}-{provider}` | External Provider Integration packages installed individually, such as `@cognidesk/email-gmail`, `@cognidesk/workplace-slack`, and `@cognidesk/voice-openai` |
| `@cognidesk/voice-websocket` | Voice WebSocket adapter |
| `@cognidesk/journey-index-json` | JSON-based journey index |

## Quick start

```bash
pnpm add @cognidesk/core @cognidesk/http @cognidesk/model @cognidesk/storage @libsql/client @ai-sdk/openai zod
```

Read the full [Quick Start guide →](https://cognidesk.cognilabz.com/getting-started/quick-start/)

## Demo

Repository development uses Node.js 24 and the pinned pnpm version from
`package.json`:

```bash
corepack enable
pnpm install
```

Run the flight support demo locally:

```bash
cp apps/flight-demo/config.openrouter.example.json apps/flight-demo/config.json
export OPENROUTER_KEY=sk-or-...
pnpm --filter @cognidesk/flight-demo ingest:knowledge
pnpm demo
```

Open `http://localhost:5173` for the demo frontend,
`http://localhost:8787/api` for the API, and `http://localhost:3000` for
Cognidesk Studio. The default local Studio login is
`admin@local.cognidesk.dev` / `cognidesk-studio-admin`.

Docker uses the same config and model credentials:

```bash
docker compose up --build
```

Use the OpenTelemetry compose file when you want Grafana, Tempo, Prometheus,
Loki, and Promtail:

```bash
docker compose -f docker-compose.otel.yml up --build
```

## Development

```bash
pnpm check
```

See [docs/releasing.md](docs/releasing.md) for SDK dev and stable release flow.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup, architecture decisions, and pull request guidelines.

## License

The Cognidesk SDK packages are licensed under [Apache-2.0](LICENSES/Apache-2.0.txt).
Cognidesk Studio is source-available under the [Cognidesk Studio Source Available License](LICENSES/Cognidesk-Studio-Source-Available-License.txt).

See [LICENSE](LICENSE) for the repository license map.
