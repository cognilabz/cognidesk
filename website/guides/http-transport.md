# HTTP Transport

This guide covers exposing your agent over HTTP using the built-in adapter.

!!! note "Work in progress"
    This guide is being written. Check back soon for complete content.

## Setting up the HTTP handler

```typescript
import { createCognideskHttpHandler } from "@cognidesk/http";

const handler = createCognideskHttpHandler({
  runtime,
  agentId: agent.id,
  basePath: "/api",
});
```

## Endpoints

The HTTP adapter exposes:

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/conversations` | Create a conversation |
| POST | `/api/conversations/:id/messages` | Send a message |
| GET | `/api/conversations/:id/events` | SSE event stream |
| POST | `/api/conversations/:id/events` | Emit custom events |
| POST | `/api/conversations/:id/journey-events` | Emit journey events |

## Framework integration

The handler is framework-agnostic. Adapt it to your server:

=== "Node.js / Express"

    ```typescript
    app.use("/api", handler.express());
    ```

=== "Hono"

    ```typescript
    app.route("/api", handler.hono());
    ```

=== "Fastify"

    ```typescript
    fastify.register(handler.fastify(), { prefix: "/api" });
    ```

## Custom events and journey events

Expose custom events and journey events via HTTP:

```typescript
const handler = createCognideskHttpHandler({
  runtime,
  agentId: agent.id,
  basePath: "/api",
  customEvents: [leadCaptured],
  journeyEvents: [ticketSynced],
});
```
