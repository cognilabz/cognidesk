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
- `GET /conversations/:id/events` — SSE event stream
- `POST /conversations/:id/custom-events` — emit custom events
- `POST /conversations/:id/journey-events` — emit journey events

---

## Full type reference

--8<-- "api-reference/generated/http/dist.md"
