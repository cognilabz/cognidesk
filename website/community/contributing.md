# Contributing

Thank you for your interest in contributing to Cognidesk!

## Getting started

1. Fork the repository
2. Clone your fork
3. Install dependencies:

```bash
pnpm install
```

4. Run checks:

```bash
pnpm check
```

## Development setup

Cognidesk is a pnpm monorepo with Turborepo for task orchestration.

### Structure

```
packages/          # SDK packages
  core/            # Runtime, agents, journeys, tools, knowledge
  http/            # HTTP + SSE transport adapter
  model/           # Model provider adapters
  react/           # React hooks and chat widget
  ui/              # Prebuilt UI components
  storage/         # Storage adapters
  otel/            # OpenTelemetry instrumentation
  voice-openai/    # OpenAI Realtime voice adapter
  voice-websocket/ # Voice WebSocket adapter
  ...
apps/              # Demo applications
  flight-demo/     # Full-featured example
```

### Running the demo

```bash
pnpm demo
```

## Architecture decisions

This project uses Architecture Decision Records (ADRs) to document significant technical decisions. You can find them in [`docs/adr/`](https://github.com/cognilabz/cognidesk/tree/main/docs/adr).

The domain language and terminology are defined in [`CONTEXT.md`](https://github.com/cognilabz/cognidesk/blob/main/CONTEXT.md). Please use the established vocabulary when contributing code or documentation.

## Pull requests

1. Create a feature branch from `main`
2. Make your changes
3. Ensure `pnpm check` passes
4. Submit a pull request with a clear description

## Code style

- TypeScript strict mode
- Use the established domain language from CONTEXT.md
- Keep functions focused and well-typed
- Add TSDoc comments for public API exports

## Reporting bugs

Open an issue with:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment (Node version, OS, package versions)
