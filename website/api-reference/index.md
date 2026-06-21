# API Reference

Hand-written package summaries and generated type references for the main public Cognidesk SDK packages.

!!! info "Hybrid documentation"
    Each package reference includes auto-generated type signatures alongside hand-written usage examples. Type signatures are generated from the TypeScript source using TypeDoc.

## Packages

| Package | Description |
|---------|-------------|
| [`@cognidesk/core`](core.md) | Runtime, agents, journeys, tools, knowledge, events |
| [`@cognidesk/http`](http.md) | HTTP + SSE transport adapter |
| [`@cognidesk/model`](model.md) | Model provider adapters |
| [`@cognidesk/react`](react.md) | React hooks and chat widget |
| [`@cognidesk/ui`](ui.md) | Prebuilt UI components |
| [`@cognidesk/storage`](storage.md) | Storage adapters |
| [`@cognidesk/otel`](otel.md) | OpenTelemetry instrumentation |
| Split provider packages | External Provider Integrations installed individually, such as `@cognidesk/email-gmail`, `@cognidesk/workplace-slack`, and `@cognidesk/voice-openai` |
| [`@cognidesk/voice-websocket`](voice-websocket.md) | Browser-facing Cognidesk Voice WebSocket adapter |
| [`@cognidesk/journey-index-json`](journey-index-json.md) | JSON-based journey index |
| [`@cognidesk/test-harness`](test-harness.md) | Runtime scenario and provider conformance testing |
| [`@cognidesk/studio-contracts`](studio-contracts.md) | Shared schemas for Studio target manifests, introspection, dashboards, auth, and operator sessions |

## Provider Integrations

Provider Integrations for email, messaging, SMS, workplace, social, ticketing, contact center, reviews, marketplace, video, voice provider APIs, and related support surfaces ship as individual `@cognidesk/{category}-{provider}` packages. OpenAI Realtime voice is available as `@cognidesk/voice-openai`. They are documented by capability in the [Provider Integrations guide](../guides/provider-packages.md).

Additional monorepo packages such as `@cognidesk/connections`, `@cognidesk/evals`, and Studio adapter packages support advanced workflows. Their user-facing behavior is documented in the guides while generated reference coverage expands.
