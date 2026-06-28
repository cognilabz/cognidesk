# Local Development

Use this runbook to start the Flight Demo, Cognidesk Studio, the Studio operator runtime, and optional OpenTelemetry services from a local checkout.

## Prerequisites

- Node.js 24.
- Corepack, using the pnpm version pinned in `package.json`.
- Docker with Compose v2. The commands below use `docker-compose` because this repository has been verified with that binary locally. If your Docker install exposes the plugin form, `docker compose ...` is equivalent.
- Optional repository-root `.env` file with provider credentials. Default local Flight Demo runs do not need external API secrets. Live model runs need the configured model provider key, and optional external integration Journeys need their own provider secrets.
- `apps/flight-demo/config.json`. If it does not exist, copy one of the examples:

```bash
cp apps/flight-demo/config.example.json apps/flight-demo/config.json
```

Keep API keys in `.env` or your shell environment. Do not commit real secrets.

## Flight Demo Integration Flags

The Flight Demo starts in local mode by default. Core booking, ticket-status,
check-in, baggage, and policy Journeys run without external API credentials.
Live integration Journeys are registered only when explicitly enabled.

| Journey | Env flag | Required provider setup |
| --- | --- | --- |
| Secure Email login | `FLIGHT_DEMO_SECURE_EMAIL_JOURNEY=true` | SMTP and IMAP env vars from `apps/flight-demo/README.md` |
| Discord human handoff | `FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=true` | `discord.enabled: true`, Discord app/guild/channel ids, and `DISCORD_BOT_TOKEN` |
| WhatsApp customer message | `FLIGHT_DEMO_WHATSAPP_JOURNEY=true` | WhatsApp Cloud API env vars from `apps/flight-demo/README.md` |

`FLIGHT_DEMO_EXTERNAL_APIS=true` enables live model/provider mode and defaults
all three integration Journeys to enabled. Each per-Journey flag overrides that
global default, so you can enable only WhatsApp while keeping local models:

```bash
FLIGHT_DEMO_EXTERNAL_APIS=false
FLIGHT_DEMO_SECURE_EMAIL_JOURNEY=false
FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=false
FLIGHT_DEMO_WHATSAPP_JOURNEY=true
```

Or run live models while disabling one integration:

```bash
FLIGHT_DEMO_EXTERNAL_APIS=true
FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=false
```

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

Create or refresh the Flight Demo knowledge index only when running live model/provider mode with `FLIGHT_DEMO_EXTERNAL_APIS=true`:

```bash
corepack pnpm --filter @cognidesk/flight-demo ingest:knowledge
```

Default local mode can skip ingestion; the API builds an in-memory knowledge index from `apps/flight-demo/knowledge/documents.json`.

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

After sign-in, use the [Studio guide](../studio/index.md) for the target overview, agent configuration, conversation observability, dashboard artifacts, and Operator workflows.

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

Discord handoff requires both the Journey flag and `apps/flight-demo/config.json`.

To enable it, set `FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=true`, configure `discord.enabled: true`, set the Discord application, guild, and support channel ids in the config file, and keep `DISCORD_BOT_TOKEN` in `.env`.

When the Flight Demo activates the `human-handoff` Journey, the server prepares or reuses a Discord support thread through the Discord gateway. The web app shows Discord readiness only; it does not show a customer-facing "Continue in Discord" button.

To run without Discord while keeping other integrations available, set:

```bash
FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=false
```

You can also disable it in config:

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
| Flight API fails because the knowledge index is missing | This should only happen in live model/provider mode. Run `corepack pnpm --filter @cognidesk/flight-demo ingest:knowledge`, or unset `FLIGHT_DEMO_EXTERNAL_APIS` for default local mode. |
| Studio adapter health returns 401 | Include `Authorization: Bearer dev-studio-token` for local adapter calls. |
| Studio root returns 307 | This is normal when unauthenticated; open `/login`. |
| Studio logs `artifact bucket is not ready yet` | Native Studio cannot reach MinIO at `127.0.0.1:9000`. Ignore it unless you need artifact storage, or start the Docker stack that includes MinIO. |
| Native `pnpm demo` logs OTLP connection errors | Start the local collector or run with `COGNIDESK_OTEL=false`. |
| Port `3000` is already in use | Stop Studio before using the Grafana telemetry demo, or use the root `--profile otel` stack where Studio owns port `3000`. |
| Discord startup fails | Verify `FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=true`, `DISCORD_BOT_TOKEN`, and the configured app, guild, and support channel ids, or disable Discord with `FLIGHT_DEMO_DISCORD_HANDOFF_JOURNEY=false`. |
