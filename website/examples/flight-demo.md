# Flight Demo

A complete customer support agent for a fictional airline. This example demonstrates all major Cognidesk features working together.

## What it shows

| Feature | Implementation |
|---------|---------------|
| Agent with instructions | Concise flight support persona |
| Tools | Ticket lookup, flight search, booking |
| Knowledge sources | FAQ retrieval |
| State machine journeys | Ticket status flow with identification |
| Custom events | Lead capture |
| Journey events | External ticket sync |
| HTTP transport | REST + SSE |
| React chat widget | Full UI with custom widgets |
| Voice | Real-time voice conversations |
| OpenTelemetry | Pre-built Grafana dashboards |

## Running with Docker

```bash
docker compose up --build
```

Then open:

- **Frontend**: `http://localhost:5173`
- **API**: `http://localhost:8787/api`

## Running locally

```bash
pnpm demo
```

This starts both the API and Vite frontend via Turbo's terminal UI.

## With OpenTelemetry

```bash
docker compose -f docker-compose.otel.yml up --build
```

Open `http://localhost:3000` for Grafana dashboards showing:

- Conversation throughput and latency
- Journey activation rates
- Tool execution metrics
- Model token usage

## Configuration

The demo uses a `config.json` file for model provider settings. Set your model credentials via environment variables (e.g., `OPENROUTER_KEY`).

## Source code

The demo source lives in `apps/flight-demo/` in the repository.
