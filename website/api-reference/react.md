# @cognidesk/react

React hooks and chat widget for Cognidesk.

!!! info "Auto-generated from source"
    The complete type reference below is generated from TypeScript declarations. Run `pnpm docs:generate` to regenerate.

## Main exports

```typescript
import { createCognideskClient, useChat, ChatWidget } from "@cognidesk/react";
```

## createCognideskClient(options)

Creates a client instance for connecting to the Cognidesk HTTP API.

## useChat(options)

React hook for managing chat state.

**Returns:**

| Property | Type | Description |
|----------|------|-------------|
| `messages` | `Message[]` | Current messages |
| `sendMessage` | `(text: string) => void` | Send a user message |
| `isStreaming` | `boolean` | Whether a response is streaming |

## ChatWidget

Full-featured chat widget component with appearance configuration and custom widget support.

---

## Full type reference

--8<-- "api-reference/generated/react/dist.md"
