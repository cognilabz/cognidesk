# Custom Events

This guide covers defining and emitting app-specific runtime events.

!!! note "Work in progress"
    This guide is being written. Check back soon for complete content.

## Defining a custom event

```typescript
import { customRuntimeEvent } from "@cognidesk/core";
import { z } from "zod";

const leadCaptured = customRuntimeEvent("lead.captured", {
  payload: z.object({
    email: z.string().email(),
    source: z.string(),
  }),
  visibleToModel: true,
});
```

## Registering events

```typescript
agentBuilder.customEvents.add(leadCaptured);
```

## Emitting events

```typescript
await runtime.emitCustomEvent({
  conversationId: conversation.id,
  event: leadCaptured,
  payload: { email: "customer@example.com", source: "pricing-page" },
});
```

## Exposing via HTTP

```typescript
const handler = createCognideskHttpHandler({
  runtime,
  agentId: agent.id,
  basePath: "/api",
  customEvents: [leadCaptured],
});
```

Custom events are then available via the HTTP API and SSE streaming.
