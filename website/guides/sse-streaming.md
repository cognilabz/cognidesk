# SSE Streaming

This guide covers real-time event streaming to clients.

!!! note "Work in progress"
    This guide is being written. Check back soon for complete content.

## Overview

Cognidesk uses Server-Sent Events (SSE) to push real-time updates to clients. This enables:

- Streaming assistant responses (token by token)
- Journey state change notifications
- Tool execution progress
- Custom event delivery

## Client connection

```typescript
const eventSource = new EventSource("/api/conversations/123/events");

eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  // Handle event
};
```

## Event types

| Event | When |
|-------|------|
| `message.delta` | Streaming text tokens |
| `message.complete` | Final message with citations |
| `journey.stateChanged` | Journey state transition |
| `tool.executing` | Tool invocation started |
| `tool.complete` | Tool execution finished |

## Synthetic deltas

Enable token-by-token streaming even when the model returns full responses:

```typescript
const runtime = createRuntime({
  // ...
  streaming: { syntheticDeltas: true },
});
```
