# Observability

Cognidesk emits OpenTelemetry spans and metrics from runtime operations, model calls, tool execution, storage-facing operations, and demo telemetry helpers.

## Setup

```bash
pnpm add @cognidesk/otel
```

## Basic configuration

Start OpenTelemetry once at process boot, before you create the runtime:

```typescript
import { startCognideskOtel } from "@cognidesk/otel";

const otel = startCognideskOtel({
  serviceName: "my-support-agent",
  serviceVersion: "0.1.0",
  environment: process.env.NODE_ENV ?? "development",
  otlpEndpoint: process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
});

const runtime = createRuntime({
  storage,
  agent,
  models,
  telemetry: {
    content: "redacted",
  },
});

process.once("beforeExit", () => {
  void otel.shutdown();
});
```

Use `telemetry.content: "redacted"` unless you intentionally want message, prompt, tool, and knowledge content exported to your telemetry backend.

## What's instrumented

| Component | Spans | Metrics | Notes |
|-----------|:-----:|:-------:|-------|
| Runtime operations | :material-check: | :material-check: | Includes initialize, create conversation, user turns, events, replay, snapshots, handoff, resume, and compaction |
| Journey selection and transitions | :material-check: | :material-check: | Uses the configured journey index and runtime state machine |
| Tool execution | :material-check: | :material-check: | Includes validation, retries, policy blocks, approval handling, and execution results |
| Knowledge retrieval | :material-check: | :material-check: | Content export depends on telemetry content mode and privacy hooks |
| Model calls | :material-check: | :material-check: | Includes token usage when providers return it |
| HTTP/SSE adapter | :material-check: | — | HTTP routing remains outside Core |

## Demo telemetry

The flight demo can seed synthetic metrics and spans for local Studio dashboards:

```typescript
import { startCognideskDemoTelemetrySeed } from "@cognidesk/otel";

const seed = startCognideskDemoTelemetrySeed({
  serviceName: "cognidesk-flight-demo",
});

seed.shutdown();
```

The root demo script also supports OpenTelemetry through environment variables such as `COGNIDESK_OTEL=true`, `COGNIDESK_TELEMETRY_CONTENT=redacted`, and `OTEL_EXPORTER_OTLP_ENDPOINT=http://127.0.0.1:4318`.

## Local stack modes

| Mode | Command | Includes | Open |
|------|---------|----------|------|
| Demo only | `docker compose up --build` | Flight demo, Studio, Studio operator runtime, MinIO. OTel services are available behind the `otel` profile. | `http://localhost:5173`, `http://localhost:3000` |
| Demo plus profiled OTel services | `docker compose --profile otel up --build` | Demo services plus OpenTelemetry Collector, Tempo, and Prometheus. | `http://localhost:9090`, `http://localhost:3200` |
| Full telemetry demo | `docker compose -f docker-compose.otel.yml up --build` | Flight demo, OpenTelemetry Collector, Tempo, Prometheus, Loki, Promtail, and Grafana dashboards. | `http://localhost:3000` |
| Host-network fallback | `docker compose -f docker-compose.otel.host.yml up --build` | Full telemetry demo with host-oriented endpoints for environments that cannot create Docker bridge networks. | `http://localhost:3000` |

The Studio target manifest points at Prometheus and Tempo. Under compose,
`deploy/studio/compose-overlay.json` rewrites those endpoints from local host
URLs to Docker service names.
