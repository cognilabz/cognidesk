# Quick Start

Build a working customer support agent in under 5 minutes.

## 1. Create an agent with a tool

```typescript title="agent.ts"
import { createAgent, createRuntime, tool } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage/sqlite";
import { z } from "zod";

// Define a tool the agent can use
const findTicket = tool("findTicket", {
  input: z.object({ bookingReference: z.string() }),
  output: z.object({ status: z.string() }),
  execute: async ({ input }) => ({
    status: `Ticket ${input.bookingReference} is confirmed.`,
  }),
});

// Create the agent
const agentBuilder = createAgent("flight-support", {
  instructions: "You are a concise flight support agent. Help customers check ticket status.",
});
agentBuilder.tools.add(findTicket);
const agent = agentBuilder.compile();
```

## 2. Set up the runtime

```typescript title="runtime.ts"
const storage = createSqliteStorage({ filename: "support.sqlite" });

const runtime = createRuntime({
  storage,
  agent,
  models, // (1)!
});

await runtime.initialize();
```

1. See [Models & Providers](../guides/models-and-providers.md) for configuration.

## 3. Run a conversation

```typescript title="conversation.ts"
const conversation = await runtime.createConversation({
  agentId: agent.id,
  context: {},
});

const response = await runtime.sendMessage({
  conversationId: conversation.id,
  message: "Can you check ticket ABC123?",
});

console.log(response);
```

## 4. Add HTTP transport (optional)

```typescript title="server.ts"
import { createCognideskHttpHandler } from "@cognidesk/http";

const handler = createCognideskHttpHandler({
  runtime,
  agentId: agent.id,
  basePath: "/api",
});

// Use with any HTTP framework (Node, Hono, Express, Fastify...)
```

## What's next?

- Learn the [Concepts](../concepts/index.md) behind the SDK
- Add [State Machine Journeys](../guides/journeys.md) for structured flows
- Connect a [React Chat Widget](../guides/react-ui.md)
- Enable [Voice](../guides/voice.md) conversations
