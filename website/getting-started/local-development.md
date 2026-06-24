# Local Development

Use this runbook to start the Flight Demo, Cognidesk Studio, the Studio operator runtime, and optional OpenTelemetry services from a local checkout.

## Prerequisites

- Node.js 24.
- Corepack, using the pnpm version pinned in `package.json`.
- Docker with Compose v2. The commands below use `docker-compose` because this repository has been verified with that binary locally. If your Docker install exposes the plugin form, `docker compose ...` is equivalent.
- A repository-root `.env` file with provider credentials. For the current OpenAI demo config, set `OPENAI_API_KEY`. Discord human handoff also needs `DISCORD_BOT_TOKEN`.
- `apps/flight-demo/config.json`. If it does not exist, copy one of the examples:

```bash
cp apps/flight-demo/config.example.json apps/flight-demo/config.json
```

Keep API keys in `.env` or your shell environment. Do not commit real secrets.

## Native Dev Run

Use this mode when you are actively editing TypeScript and want fast rebuilds.

```bash
corepack enable
corepack pnpm install --frozen-lockfile
```

Export the local `.env` values into the current shell before starting services:

```bash
set -a
. ./.env
set +a
```

Create or refresh the Flight Demo knowledge index:

```bash
corepack pnpm --filter @cognidesk/flight-demo ingest:knowledge
```

Start the Flight Demo frontend, Flight Demo API, Studio, and Studio operator runtime:

```bash
COGNIDESK_OTEL=false corepack pnpm demo
```

`pnpm demo` defaults OpenTelemetry export to `http://127.0.0.1:4318`. Use `COGNIDESK_OTEL=false` when no local collector is running. If you have started the local collector, omit that prefix:

```bash
corepack pnpm demo
```

| Surface | URL |
| --- | --- |
| Flight Demo frontend | `http://localhost:5173` |
| Flight Demo API | `http://localhost:8787/api` |
| Cognidesk Studio | `http://localhost:3000` |
| Studio operator runtime | `ws://localhost:4099/ws` |

The default local Studio login is:

| Field | Value |
| --- | --- |
| Email | `admin@local.cognidesk.dev` |
| Password | `cognidesk-studio-admin` |

## Docker Dev Run

Docker Compose loads the repository-root `.env` file automatically.

Start the local app stack:

```bash
docker-compose up --build
```

This starts:

| Service | URL |
| --- | --- |
| Flight Demo frontend | `http://localhost:5173` |
| Flight Demo API | `http://localhost:8787/api` |
| Cognidesk Studio | `http://localhost:3000` |
| Studio operator runtime | `ws://localhost:4099/ws` |
| MinIO S3 endpoint | `http://localhost:9000` |
| MinIO console | `http://localhost:9001` |

Stop the stack:

```bash
docker-compose down
```

Remove local Docker volumes only when you intentionally want a clean database and object store:

```bash
docker-compose down -v
```

## Studio Plus OpenTelemetry

Use the profiled root compose stack when you want Studio and the Flight Demo running with Prometheus and Tempo available to Studio.

```bash
docker-compose --profile otel up --build
```

Additional telemetry endpoints:

| Service | URL |
| --- | --- |
| OpenTelemetry Collector HTTP OTLP | `http://localhost:4318` |
| OpenTelemetry Collector gRPC OTLP | `localhost:4317` |
| Prometheus | `http://localhost:9090` |
| Tempo | `http://localhost:3200` |

Studio reads telemetry source definitions from `cognidesk.studio.json`. Under Compose, `deploy/studio/compose-overlay.json` rewrites local host URLs to Docker service names.

For native app development with only the telemetry services in Docker, start just the telemetry dependencies first:

```bash
docker-compose --profile otel up -d tempo otel-collector prometheus
```

Then start native apps with OpenTelemetry enabled:

```bash
set -a
. ./.env
set +a
corepack pnpm demo
```

## Grafana Telemetry Demo

Use `docker-compose.otel.yml` when you specifically want Grafana, Loki, Promtail, Prometheus, Tempo, and the Flight Demo in one stack:

```bash
docker-compose -f docker-compose.otel.yml up --build
```

Open Grafana at `http://localhost:3000`.

This stack does not start Cognidesk Studio because Grafana owns port `3000`. If you need Studio and telemetry at the same time, use the root stack with `--profile otel`.

For local Docker environments that cannot create bridge networks, use the host-network fallback:

```bash
docker-compose -f docker-compose.otel.host.yml up --build
```

The host-network fallback keeps Grafana on `http://localhost:3000` and moves the Flight Demo API to `http://localhost:18787/api`.

## Smoke Checks

Run these checks from the repository root after startup:

```bash
curl -fsS http://127.0.0.1:5173/ >/dev/null
curl -fsS -H 'Authorization: Bearer dev-studio-token' \
  http://127.0.0.1:8787/api/studio/health
curl -sS -o /dev/null -w '%{http_code}\n' http://127.0.0.1:3000/login
```

Expected results:

- Flight frontend returns HTTP 200.
- Studio adapter health returns JSON with `"ok": true`.
- Studio login returns HTTP 200.

When OpenTelemetry services are running:

```bash
curl -fsS http://127.0.0.1:9090/-/ready
curl -fsS http://127.0.0.1:3200/ready
```

## Discord Human Handoff

Discord support is controlled by `apps/flight-demo/config.json`.

To enable it, configure `discord.enabled: true`, set the Discord application, guild, and support channel ids in the config file, and keep `DISCORD_BOT_TOKEN` in `.env`.

When the Flight Demo activates the `human-handoff` Journey, the server prepares or reuses a Discord support thread through the Discord gateway. The web app shows Discord readiness only; it does not show a customer-facing "Continue in Discord" button.

To run without Discord while keeping the rest of the app local, set:

```json
{
  "discord": {
    "enabled": false
  }
}
```

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `docker compose` is unknown | Use `docker-compose`, or install the Docker Compose plugin. |
| `Cannot connect to the Docker daemon` | Start Docker Desktop, OrbStack, or Colima, then confirm the active context with `docker context ls`. |
| Flight API fails because the knowledge index is missing | Run `corepack pnpm --filter @cognidesk/flight-demo ingest:knowledge`. |
| Studio adapter health returns 401 | Include `Authorization: Bearer dev-studio-token` for local adapter calls. |
| Studio root returns 307 | This is normal when unauthenticated; open `/login`. |
| Studio logs `artifact bucket is not ready yet` | Native Studio cannot reach MinIO at `127.0.0.1:9000`. Ignore it unless you need artifact storage, or start the Docker stack that includes MinIO. |
| Native `pnpm demo` logs OTLP connection errors | Start the local collector or run with `COGNIDESK_OTEL=false`. |
| Port `3000` is already in use | Stop Studio before using the Grafana telemetry demo, or use the root `--profile otel` stack where Studio owns port `3000`. |
| Discord startup fails | Verify `DISCORD_BOT_TOKEN` and the configured app, guild, and support channel ids, or disable Discord in `config.json`. |
