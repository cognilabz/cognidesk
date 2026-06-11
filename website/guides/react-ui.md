# React UI

This guide covers integrating Cognidesk into React applications with the chat widget and hooks.

!!! note "Work in progress"
    This guide is being written. Check back soon for complete content.

## Setup

```bash
pnpm add @cognidesk/react @cognidesk/ui
```

## Client creation

```typescript
import { createCognideskClient } from "@cognidesk/react";

const client = createCognideskClient({
  baseUrl: "/api",
});
```

## Chat widget

Drop in a full chat interface:

```tsx
import { ChatWidget } from "@cognidesk/react";

function App() {
  return <ChatWidget client={client} agentId="flight-support" />;
}
```

## useChat hook

For custom UI, use the lower-level hook:

```tsx
import { useChat } from "@cognidesk/react";

function CustomChat() {
  const { messages, sendMessage, isStreaming } = useChat({
    client,
    agentId: "flight-support",
  });

  return (
    <div>
      {messages.map((m) => (
        <div key={m.id}>{m.content}</div>
      ))}
    </div>
  );
}
```

## Appearance configuration

Style the widget with CSS variables and element classes:

```tsx
<ChatWidget
  client={client}
  agentId="flight-support"
  appearance={{
    variables: { "--cd-color-primary": "#0f172a" },
    elements: { root: "shadow-lg" },
    widgets: {
      confirmation: {
        elements: {
          panel: "rounded-md border p-3",
          primaryButton: "bg-emerald-700",
        },
      },
    },
  }}
/>
```

## Custom widgets

Replace built-in widget kinds with custom React components:

```tsx
<ChatWidget
  client={client}
  agentId="flight-support"
  widgets={{
    "seat-map": ({ input, submit }) => (
      <SeatMap value={input} onSelect={(seatId) => submit({ seatId })} />
    ),
  }}
/>
```
