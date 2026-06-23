# @cognidesk/react

React hooks, browser clients, chat widgets, voice helpers, and channel-event
utilities for Cognidesk frontends.

!!! info "Auto-generated from source"
    The complete type reference is generated from TypeScript declarations. Run `pnpm docs:generate` to regenerate.

## Main exports

```typescript
import {
  ChatWidget,
  createCognideskClient,
  reduceChannelEvent,
  useChat,
  useVoice,
} from "@cognidesk/react";
```

## Browser boundary

The package is meant for React/browser applications. Use server-side packages
such as `@cognidesk/http` and `@cognidesk/core` to host the runtime, then point
the React client at that HTTP surface.

## createCognideskClient(options)

Creates a client instance for connecting to the Cognidesk HTTP API.

## useChat(options)

React hook for managing chat state.

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| `messages` | `Message[]` | Current messages |
| `sendMessage` | `(text: string) => Promise<void>` | Send a user message through the HTTP client |
| `status` | `"idle" \| "starting" \| "sending" \| "streaming" \| "error"` | Current chat state |
| `error` | `Error \| null` | Last chat error |
| `submitWidget` | `(input) => Promise<{ event: RuntimeEvent }>` | Submit an open widget prompt |

## ChatWidget

Full-featured chat widget component with appearance configuration and custom widget support.

## Voice

`useVoice` and the voice protocol exports support browser-side voice sessions
against a Cognidesk voice transport. Pair them with a server-side voice provider
and `@cognidesk/voice-websocket`.

## Channel events

Channel event helpers and reducers let advanced UIs consume lower-level runtime
events directly. Use them when you need custom timeline, streaming, citation, or
widget behavior beyond the default `ChatWidget`.

---

## Full type reference

Open the generated [`@cognidesk/react` type reference](generated/packages/react/dist.md).
