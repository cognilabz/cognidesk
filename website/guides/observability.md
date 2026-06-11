# Observability

This guide covers OpenTelemetry integration for monitoring and debugging.

!!! note "Work in progress"
    This guide is being written. Check back soon for complete content.

## Setup

```bash
pnpm add @cognidesk/otel
```

## Basic configuration

```typescript
import { createOtelInstrumentation } from "@cognidesk/otel";

const instrumentation = createOtelInstrumentation({
  serviceName: "my-support-agent",
});

const runtime = createRuntime({
  storage,
  agent,
  models,
  instrumentation,
});
```

## What's instrumented

| Component | Spans | Metrics | Events |
|-----------|:-----:|:-------:|:------:|
| Conversation turns | :material-check: | :material-check: | :material-check: |
| Journey transitions | :material-check: | :material-check: | :material-check: |
| Tool execution | :material-check: | :material-check: | :material-check: |
| Knowledge retrieval | :material-check: | :material-check: | :material-check: |
| Model calls | :material-check: | :material-check: | — |
| SSE streaming | :material-check: | — | — |

## Grafana dashboards

The flight demo includes pre-built Grafana dashboards. Run the OTEL stack:

```bash
docker compose -f docker-compose.otel.yml up --build
```

Open `http://localhost:3000` for provisioned Cognidesk dashboards showing:

- Conversation throughput and latency
- Journey activation and completion rates
- Tool execution times and error rates
- Model token usage
