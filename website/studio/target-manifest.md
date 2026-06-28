# Studio Target Manifest

The target manifest tells Studio what it is allowed to inspect and operate. It is the bridge between a running Cognidesk application, its telemetry, its source repository, and the operator runtime.

In local development the manifest is `cognidesk.studio.json`. `pnpm demo` points Studio at that file with `STUDIO_TARGET_MANIFEST`.

## What the manifest describes

| Section | Why it matters |
|---------|----------------|
| Target identity | Gives Studio a stable target id, display name, environment, and runtime base URL. |
| Runtime adapter | Defines where Studio calls health, introspection, configuration, conversations, snapshots, events, metrics, and traces. |
| Telemetry sources | Lists Prometheus, Tempo, or other configured sources Studio can query for operational signals. |
| Source repository | Tells Operator which repository and default branch represent the target. |
| Allowed paths | Limits source work to explicit files or directories instead of giving Operator the whole checkout by default. |
| Validation commands | Defines commands Operator can run after edits, such as type checks, tests, lint, or docs builds. |
| Dashboard artifacts | Configures the S3-compatible bucket/prefix where generated dashboard artifacts are stored. |
| Operator models | Lists the models and reasoning settings available in the Operator UI. |
| Operator instructions | Gives Operator target-specific guidance, constraints, and expected workflows. |
| Credential grants | Describes which credentials are available for which bounded actions. |

## Adapter boundary

The target owns the runtime and decides what Studio can see. Studio calls adapter endpoints for:

| Adapter surface | Examples |
|-----------------|----------|
| Health | Target id, agent id, adapter readiness, captured time. |
| Agent introspection | Agent id, instructions, journeys, tools, knowledge, widgets, configuration surface. |
| Configuration | Channels, channel sets, outbound policy, handoff rules, providers, capability readiness, credential status. |
| Conversations | Conversation list, conversation detail, runtime events, runtime snapshot. |
| Telemetry | Metrics queries and trace lookup when configured. |

The local Flight Demo mounts these endpoints under `http://localhost:8787/api/studio/*` and Studio authenticates with the local bearer token `dev-studio-token`.

## Overlays

The manifest can be overlaid for Docker or hosted environments. That is useful when a local URL such as `http://127.0.0.1:8787/api` must become a compose service URL such as `http://flight-demo:8787/api` inside a container network.

Use overlays for deployment-specific addresses and credentials, not for changing what the target fundamentally is.

## Production checklist

- Use a strong target token.
- Keep adapter endpoints private to Studio or trusted infrastructure.
- Review allowed paths before enabling Operator source workflows.
- Keep validation commands explicit and deterministic.
- Configure artifact storage outside local MinIO defaults.
- Treat telemetry content as sensitive when prompts, messages, tool payloads, or knowledge snippets are exported.
