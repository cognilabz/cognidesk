# HTTP Transport

The HTTP adapter exposes a Cognidesk runtime through Web `Request` and `Response` objects. It does not bind Cognidesk Core to Express, Fastify, Hono, Next.js, or any other server framework.

## Setting up the HTTP handler

```typescript
import { createCognideskHttpHandler } from "@cognidesk/http";

const handler = createCognideskHttpHandler({
  runtime,
  agentId: agent.id,
  basePath: "/api",
});

const response = await handler.handle(request);
```

## Endpoints

Paths below include the `basePath` value from the handler example.

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/conversations` | Create a conversation |
| POST | `/api/voice/conversations` | Start a new voice conversation when voice handshakes are configured |
| POST | `/api/conversations/:id/voice-segments` | Start a voice segment on an existing conversation |
| POST | `/api/conversations/:id/messages` | Send a text message |
| GET | `/api/conversations/:id/events` | List runtime events |
| GET | `/api/conversations/:id/events/stream` | Stream runtime events over SSE |
| GET | `/api/conversations/:id/snapshot` | Read the latest runtime snapshot |
| GET | `/api/conversations/:id/replay` | Replay customer-visible messages and open prompts |
| POST | `/api/conversations/:id/custom-events/:eventName` | Emit a registered custom runtime event |
| POST | `/api/conversations/:id/journey-events/:eventName` | Emit a registered journey event |
| POST | `/api/conversations/:id/widgets/:promptId/submissions` | Submit a widget response |
| POST | `/api/conversations/:id/handoff` | Request handoff |
| POST | `/api/conversations/:id/resume` | Resume a paused or handed-off conversation |
| POST | `/api/conversations/:id/close` | Close a conversation |
| POST | `/api/conversations/:id/intermediate-messages` | Emit an intermediate assistant message |
| POST | `/api/conversations/:id/preambles` | Generate and emit a wait-time preamble |
| POST | `/api/conversations/:id/compact` | Compact conversation history |

## Session privacy payloads

`POST /api/conversations` and `POST /api/voice/conversations` accept a
`privacy` object beside `agentId`, `context`, `channel`, and `chatStart`.

```json
{
  "agentId": "support",
  "context": { "customerId": "customer_123" },
  "channel": "chat",
  "privacy": {
    "traceContent": "none",
    "customerRelationVisibility": "none",
    "masks": [
      {
        "name": "email",
        "pattern": "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}",
        "flags": "gi",
        "replacement": "[email]"
      }
    ]
  }
}
```

Channel Event adapters can pass the same object when the event should start a
new Conversation:

```json
{
  "createConversation": {
    "agentId": "support",
    "context": { "customerId": "customer_123" },
    "privacy": {
      "traceContent": "none",
      "masks": [
        { "name": "booking", "pattern": "CD-[A-Z]{2}\\d{3}-\\d{4}", "replacement": "[booking]" }
      ]
    }
  },
  "event": {
    "channel": "email",
    "nature": "message",
    "direction": "inbound",
    "intent": "customer-message",
    "text": "Please check CD-CL102-4821."
  }
}
```

There are no built-in mask rules. `traceContent: "none"` removes message and
content payloads from trace surfaces while preserving structural workflow
events such as Journey activation and state entry.

## Framework integration

Mount the handler anywhere you can construct a Web `Request`.

=== "Fetch API"

    ```typescript
    export default {
      fetch(request: Request) {
        return handler.handle(request);
      },
    };
    ```

=== "Node.js"

    ```typescript
    import { createServer } from "node:http";

    const server = createServer(async (nodeRequest, nodeResponse) => {
      const request = toWebRequest(nodeRequest);
      const response = await handler.handle(request);
      nodeResponse.writeHead(response.status, Object.fromEntries(response.headers));
      nodeResponse.end(response.body ? Buffer.from(await response.arrayBuffer()) : undefined);
    });
    ```

## Custom events and journey events

Register event definitions on the handler before exposing event routes:

```typescript
const handler = createCognideskHttpHandler({
  runtime,
  agentId: agent.id,
  basePath: "/api",
  customEvents: [leadCaptured],
  journeyEvents: [ticketSynced],
});
```

Clients then post to `/api/conversations/:id/custom-events/leadCaptured` or `/api/conversations/:id/journey-events/ticketSynced` with a JSON `payload`.
