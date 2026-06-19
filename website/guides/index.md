# Guides

Step-by-step walkthroughs and working notes for Cognidesk capabilities. Each
guide assumes you've read the [Concepts](../concepts/index.md) section.

!!! note "Guide status"
    Some core guides are intentionally marked as work in progress while the API
    surface is still settling. Use the Quick Start, Flight Demo, and API
    reference when you need the most runnable examples today.

## Core

- [Agents & Instructions](agents-and-instructions.md) — configure agent behavior and personality
- [Tools](tools.md) — define and use typed tools
- [Knowledge Sources](knowledge-sources.md) — integrate retrieval-augmented context
- [Journeys](journeys.md) — build state machine conversation flows
- [Custom Events](custom-events.md) — define and emit app-specific events

## Infrastructure

- [Storage](storage.md) — configure conversation persistence
- [Models & Providers](models-and-providers.md) — set up LLM providers
- [Provider Integrations](provider-packages.md) — configure scoped external provider modules, capabilities, readiness, and handoff surfaces

## Transport

- [HTTP Transport](http-transport.md) — expose your agent over REST + SSE
- [SSE Streaming](sse-streaming.md) — real-time event streaming to clients

## Frontend

- [React UI](react-ui.md) — chat widget and hooks for React apps

## Advanced

- [Voice](voice.md) — real-time voice conversations
- [Observability](observability.md) — OpenTelemetry integration
- [Provider Integration Catalog](provider-integrations-catalog.md) — inspect every official provider subpath, scope, capabilities, setup, and boundaries
- [Omnichannel NG Changes](omnichannel-changes.md) — review the new SDK configuration, channel, policy, handoff, Studio, and integration-package rules
