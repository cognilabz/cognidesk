# @cognidesk/http

HTTP and SSE transport adapter for the Cognidesk runtime.

!!! info "Auto-generated from source"
    The complete type reference below is generated from TypeScript declarations. Run `pnpm docs:generate` to regenerate.

## Main exports

```typescript
import { createCognideskHttpHandler } from "@cognidesk/http";
```

## createCognideskHttpHandler(options)

Creates a framework-agnostic HTTP handler.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `options.runtime` | `Runtime` | The Cognidesk runtime instance |
| `options.agentId` | `string` | Agent to serve |
| `options.basePath` | `string` | URL prefix for all routes |
| `options.customEvents` | `CustomEvent[]` | Optional custom events to expose |
| `options.journeyEvents` | `JourneyEvent[]` | Optional journey events to expose |

**Returns:** `HttpHandler`

## Endpoints

The handler exposes:

- `POST /conversations` — create a conversation
- `POST /conversations/:id/messages` — send a message
- `GET /conversations/:id/events` — list runtime events
- `GET /conversations/:id/events/stream` — stream runtime events over SSE
- `GET /conversations/:id/snapshot` — read the current runtime snapshot
- `GET /conversations/:id/replay` — replay messages and open prompts
- `POST /conversations/:id/custom-events/:eventName` — emit a registered custom event
- `POST /conversations/:id/journey-events/:eventName` — emit a registered journey event
- `POST /conversations/:id/widgets/:promptId/submissions` — submit a widget response
- `POST /conversations/:id/handoff` — request handoff
- `POST /conversations/:id/resume` — resume a conversation
- `POST /conversations/:id/close` — close a conversation
- `POST /conversations/:id/compact` — compact conversation history
- `POST /voice/conversations` and `POST /conversations/:id/voice-segments` — start voice when a voice handshake is configured

---

## Full type reference

Open the generated [`@cognidesk/http` type reference](generated/http/dist.md).
