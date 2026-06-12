# Installation

## Install the core package

=== "pnpm"

    ```bash
    pnpm add @cognidesk/core
    ```

=== "npm"

    ```bash
    npm install @cognidesk/core
    ```

=== "yarn"

    ```bash
    yarn add @cognidesk/core
    ```

## Add optional packages

Cognidesk is modular. Install only what you need:

| Package | Purpose |
|---------|---------|
| `@cognidesk/core` | Runtime, agents, journeys, tools, knowledge |
| `@cognidesk/http` | HTTP/SSE transport adapter |
| `@cognidesk/model` | Model provider adapters |
| `@cognidesk/react` | React hooks and chat widget |
| `@cognidesk/ui` | Prebuilt UI components |
| `@cognidesk/storage` | Storage adapters |
| `@cognidesk/otel` | OpenTelemetry instrumentation |
| `@cognidesk/voice-openai` | Voice via OpenAI Realtime |
| `@cognidesk/voice-websocket` | Voice WebSocket adapter |
| `@cognidesk/journey-index-json` | JSON-based journey index |

### Full installation example

=== "pnpm"

    ```bash
    pnpm add @cognidesk/core @cognidesk/http @cognidesk/model @cognidesk/storage @libsql/client
    ```

=== "npm"

    ```bash
    npm install @cognidesk/core @cognidesk/http @cognidesk/model @cognidesk/storage @libsql/client
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
