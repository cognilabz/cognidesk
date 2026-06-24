# Cognidesk Studio

Cognidesk Studio is the local web application for inspecting a Cognidesk target,
viewing conversations and telemetry-backed dashboards, and launching operator
workflows against an allowed source workspace.

Studio is licensed under Apache-2.0 as part of the Cognidesk monorepo.

For the full local Flight Demo, Studio, Docker, OpenTelemetry, Discord, and
troubleshooting workflow, see `website/getting-started/local-development.md`.

## Run locally

From the repository root:

```bash
corepack enable
corepack pnpm install --frozen-lockfile
corepack pnpm demo
```

`pnpm demo` starts:

| Service | URL | Notes |
|---------|-----|-------|
| Flight demo frontend | `http://localhost:5173` | Reference target UI. |
| Flight demo API | `http://localhost:8787/api` | Target runtime and Studio adapter. |
| Studio | `http://localhost:3000` | Web app. |
| Studio operator runtime | `ws://localhost:4099/ws` | Operator WebSocket service. |

The development bootstrap admin is created only when the Studio database is
empty:

| Field | Default |
|-------|---------|
| Email | `admin@local.cognidesk.dev` |
| Password | `cognidesk-studio-admin` |

Override the bootstrap account with `STUDIO_BOOTSTRAP_ADMIN_EMAIL`,
`STUDIO_BOOTSTRAP_ADMIN_PASSWORD`, and `STUDIO_BOOTSTRAP_ADMIN_NAME`.

## Configuration

Important local environment variables:

| Variable | Default | Purpose |
|----------|---------|---------|
| `STUDIO_APP_URL` | `http://127.0.0.1:3000` | Better Auth base URL and trusted origin. |
| `STUDIO_DATABASE_PROVIDER` | `sqlite` | SQLite only. `postgres` fails closed with an explicit unsupported-storage error. |
| `STUDIO_DATABASE_URL` | `file:./data/studio.sqlite` | SQLite filename, `:memory:`, or `file:` URL. |
| `BETTER_AUTH_SECRET` | local development secret | Auth signing secret. Set a real secret outside local dev. |
| `STUDIO_TARGET_MANIFEST` | `../../cognidesk.studio.json` | Target manifest to inspect. |
| `STUDIO_TARGET_OVERLAY` | unset | Optional manifest overlay, used by Docker compose. |
| `COGNIDESK_STUDIO_TARGET_TOKEN` | `dev-studio-token` | Bearer token Studio uses for target adapter calls. |
| `STUDIO_OPERATOR_RUNTIME_WS_URL` | `ws://127.0.0.1:4099/ws` | Operator runtime WebSocket endpoint. |
| `STUDIO_OPERATOR_RUNTIME_SECRET` | local development secret | Shared secret Studio uses to authenticate to the operator runtime. Set a real secret outside local dev. |
| `STUDIO_S3_ENDPOINT` | local dev: `http://127.0.0.1:9000` | Artifact object-store endpoint. Set explicitly outside local dev when not using ambient S3 config. |
| `STUDIO_S3_REGION` | `us-east-1` | Artifact object-store region. |
| `STUDIO_S3_ACCESS_KEY_ID` | local dev: `minioadmin` | Artifact object-store access key. Set together with `STUDIO_S3_SECRET_ACCESS_KEY` outside local dev when static credentials are required. |
| `STUDIO_S3_SECRET_ACCESS_KEY` | local dev: `minioadmin` | Artifact object-store secret key. Set together with `STUDIO_S3_ACCESS_KEY_ID` outside local dev when static credentials are required. |
| `STUDIO_S3_FORCE_PATH_STYLE` | local dev: `true`; otherwise `false` | Required for local MinIO. |

## Target manifest

`cognidesk.studio.json` describes the target runtime, telemetry sources, source
repository, editable path allowlist, validation commands, dashboard artifact
bucket, operator instructions, and available operator models.

`deploy/studio/compose-overlay.json` rewrites local host URLs to Docker service
names when Studio runs under compose.

## Database

SQLite is the only supported Studio database provider today. `postgres` settings
fail closed with an explicit unsupported-storage error instead of silently using
the wrong client. Migrations run through:

```bash
pnpm --filter @cognidesk/studio db:migrate
```

## Production cautions

- Set a strong `BETTER_AUTH_SECRET`.
- Set a strong `STUDIO_OPERATOR_RUNTIME_SECRET` on both Studio and the operator
  runtime.
- Set explicit bootstrap admin credentials or create users through your own
  provisioning flow.
- Configure artifact storage explicitly outside local development; local MinIO endpoint and credentials are rejected in production/hosted mode.
- Treat `COGNIDESK_STUDIO_TARGET_TOKEN` as a service credential.
- Review the target manifest allowlist before enabling operator workflows.
