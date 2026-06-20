# Studio Operator Runtime

The Studio operator runtime is a WebSocket service used by Cognidesk Studio to
run operator sessions against disposable source sandboxes.

It is intentionally separated from the Studio web app so source checkout,
Codex-backed editing, validation commands, and credential grants stay behind a
small operational boundary.

## Run locally

From the repository root:

```bash
corepack enable
pnpm install
pnpm --filter @cognidesk/studio-operator-runtime dev
```

The service listens on `ws://127.0.0.1:4099/ws` by default.

## Requirements

- Node.js 24 with Corepack enabled.
- The Codex CLI available on `PATH` when running outside the provided Dockerfile.
- `git`, `gh`, `rg`, Python 3, and build tooling in the sandbox environment.
- Credentials only when the target workflow needs them.

The Dockerfile installs the Codex CLI plus the expected shell tooling for local
compose runs.

## Configuration

| Variable | Default | Purpose |
|----------|---------|---------|
| `HOST` | `127.0.0.1` | Bind host. Compose sets `0.0.0.0`. |
| `PORT` | `4099` | WebSocket port. |
| `STUDIO_API_BASE_URL` | `http://127.0.0.1:3000` | Studio API used for session coordination. |
| `STUDIO_DEFAULT_TARGET_ID` | unset | Optional default Studio target id. |
| `STUDIO_OPERATOR_SANDBOX_ROOT` | `/tmp/cognidesk-studio-sandboxes` | Parent directory for disposable source workspaces. |
| `STUDIO_SOURCE_REPO_URL` | unset | Repository URL used by compose-backed sandboxes. |
| `GITHUB_TOKEN` / `GH_TOKEN` | unset | Optional GitHub credentials for PR and repository workflows. |
| `OPENAI_API_KEY` | unset | Optional model credential for Codex-backed sessions. |

## Security posture

Operator sessions are powerful by design. The runtime can create source
sandboxes, run validation commands, and delegate work to Codex. Local compose
uses disposable sandbox roots and development credentials, but production
deployments must provide their own containment, credential scoping, network
policy, and audit review.

Review these controls before exposing the service beyond local development:

- Target manifest `code.allowedPaths`.
- Target manifest `code.validationCommands`.
- Target manifest `operator.allowedCredentialGrants`.
- Sandbox root isolation and cleanup policy.
- GitHub and model credential scope.
