# Runtime Events

**Runtime Events** are typed events emitted during conversation execution. They form the observable contract between the runtime and external systems (UIs, analytics, webhooks).

## Event categories

Cognidesk emits several categories of events:

| Category | Examples | Purpose |
|----------|----------|---------|
| Conversation | message, turn complete | Core conversation flow |
| Journey | activated, state changed, completed | Journey lifecycle |
| Tool | invoked, completed, failed | Tool execution |
| Knowledge | retrieved, injected | Knowledge retrieval |
| Custom | Developer-defined | App-specific events |

## Custom events

Define app-specific events with typed payloads:

```typescript
import { customRuntimeEvent } from "@cognidesk/core";
import { z } from "zod";

const leadCaptured = customRuntimeEvent("lead.captured", {
  payload: z.object({
    email: z.string().email(),
    source: z.string(),
  }),
  visibleToModel: true, // (1)!
});
```

1. When `true`, the event payload is included in the model's context.

## Emitting custom events

```typescript
await runtime.emitCustomEvent({
  conversationId: conversation.id,
  event: leadCaptured,
  payload: { email: "customer@example.com", source: "pricing-page" },
});
```

## Consuming events

Events are available via:

- **SSE streaming** — real-time push to clients
- **Event history** — query past events for a conversation
- **Event replay** — replay events for debugging or recovery
- **OpenTelemetry** — events as span events in traces

## Design principles

!!! info
    - Events are immutable once emitted
    - Every event has a timestamp and conversation scope
    - Custom events extend the built-in event vocabulary
    - `visibleToModel` controls whether the model sees the event in context
