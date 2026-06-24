# React UI

This guide covers integrating Cognidesk into React applications with the chat widget and hooks.

## Setup

```bash
pnpm add @cognidesk/react @cognidesk/ui
```

Import the default styles once in your app entrypoint:

```typescript
import "@cognidesk/ui/styles.css";
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

Use `chatStart` when a new session should open with a real assistant message in
the transcript. The value can be static or computed at runtime, and `autoStart`
creates the conversation as soon as the widget mounts:

```tsx
<ChatWidget
  client={client}
  agentId="flight-support"
  autoStart
  initialContext={{ locale: navigator.language }}
  app={{ surface: "flight-demo", returningCustomer: true }}
  chatStart={({ app }) => ({
    type: "message",
    text: app && typeof app === "object" && "returningCustomer" in app
      ? "Welcome back. How can I help with your flight today?"
      : "Hi! How can I help with your flight today?",
    visibleToModel: true,
  })}
/>
```

## useChat hook

For custom UI, use the lower-level hook:

```tsx
import { useChat } from "@cognidesk/react";

function CustomChat() {
  const { messages, sendMessage, status, error } = useChat({
    client,
    agentId: "flight-support",
  });

  return (
    <div>
      {messages.map((m) => (
        <div key={m.id}>{m.text}</div>
      ))}
      {status === "streaming" ? <span>Streaming...</span> : null}
      {error ? <strong>{error.message}</strong> : null}
      <button onClick={() => void sendMessage("Check ticket ABC123")}>Send</button>
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
