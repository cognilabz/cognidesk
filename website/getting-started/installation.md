# Installation

Cognidesk is modular. A minimal direct-runtime project needs Core, a storage adapter, a model adapter, a concrete model provider, and your schema library imports.

## Install the runtime packages

=== "pnpm"

    ```bash
    pnpm add @cognidesk/core @cognidesk/model @cognidesk/storage @libsql/client @ai-sdk/openai zod
    ```

=== "npm"

    ```bash
    npm install @cognidesk/core @cognidesk/model @cognidesk/storage @libsql/client @ai-sdk/openai zod
    ```

=== "yarn"

    ```bash
    yarn add @cognidesk/core @cognidesk/model @cognidesk/storage @libsql/client @ai-sdk/openai zod
    ```

## Add optional packages

Install only the adapters and surfaces your application uses:

| Package | Purpose |
|---------|---------|
| `@cognidesk/core` | Runtime, agents, journeys, tools, knowledge |
| `@cognidesk/http` | HTTP/SSE transport adapter |
| `@cognidesk/model` | Vercel AI SDK model adapter and model-role helpers |
| `@cognidesk/react` | React hooks and chat widget |
| `@cognidesk/ui` | Prebuilt UI components |
| `@cognidesk/storage` | SQLite/libSQL and Postgres runtime storage adapters |
| `@cognidesk/otel` | OpenTelemetry instrumentation |
| `@cognidesk/integration-{category}-{provider}` | External Provider Integrations installed one provider at a time, such as `@cognidesk/integration-email-gmail`, `@cognidesk/integration-workplace-slack`, `@cognidesk/integration-email-outlook`, `@cognidesk/integration-workplace-teams`, and `@cognidesk/integration-voice-openai` |
| `@cognidesk/integration-catalog` | Provider discovery metadata used by docs, Studio, and application-owned lazy loaders for split provider packages under `integrations/{category}/{provider}` |
| `@cognidesk/voice-websocket` | Browser-facing Cognidesk Voice WebSocket transport |
| `@cognidesk/journey-index-json` | JSON-based journey index |
| `@cognidesk/connections` | Reviewed OpenAPI/MCP connection helpers for selected operation aliases |
| `@cognidesk/evals` | Eval-suite helpers built on the test harness |
| `@cognidesk/test-harness` | Runtime scenario harness and provider conformance checks |
| `@cognidesk/studio` | Studio operations web application for inspecting configured targets, conversations, telemetry, dashboards, and operator workflows |
| `@cognidesk/studio-operator-runtime` | WebSocket runtime for Studio operator sessions and source-workspace sandboxes |
| `@cognidesk/studio-adapter` | Optional Studio target introspection adapter |

`@cognidesk/studio` and `@cognidesk/studio-operator-runtime` are the published
Studio service packages. Studio still needs normal application configuration,
including a target manifest, Studio database settings, auth secrets, and the
operator runtime when source-work workflows are enabled. For the repository demo
stack, use the [Local Development](local-development.md) runbook.

### Provider package examples

Install only the provider packages your application enables. Provider workspaces live under `integrations/{category}/{provider}` and publish as `@cognidesk/integration-{category}-{provider}` packages.

=== "pnpm"

    ```bash
    pnpm add @cognidesk/integration-email-gmail @cognidesk/integration-workplace-slack @cognidesk/integration-email-outlook @cognidesk/integration-workplace-teams @cognidesk/integration-voice-openai
    ```

=== "npm"

    ```bash
    npm install @cognidesk/integration-email-gmail @cognidesk/integration-workplace-slack @cognidesk/integration-email-outlook @cognidesk/integration-workplace-teams @cognidesk/integration-voice-openai
    ```

### Full installation example

=== "pnpm"

    ```bash
    pnpm add @cognidesk/core @cognidesk/http @cognidesk/model @cognidesk/storage @libsql/client @ai-sdk/openai zod
    ```

=== "npm"

    ```bash
    npm install @cognidesk/core @cognidesk/http @cognidesk/model @cognidesk/storage @libsql/client @ai-sdk/openai zod
    ```

## TypeScript configuration

Cognidesk requires `strict` mode and ES2022+ target:

```json title="tsconfig.json"
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler"
  }
}
```

## Next steps

Once installed, follow the [Quick Start](quick-start.md) to build your first agent.
