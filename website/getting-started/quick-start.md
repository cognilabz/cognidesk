# Quick Start

Build a small customer-support agent that runs directly against the runtime. This example uses OpenAI through the Vercel AI SDK, but Cognidesk only depends on its own `ModelAdapter` contract.

## 0. Create a project

```bash
mkdir cognidesk-quick-start
cd cognidesk-quick-start
pnpm init
pnpm add @cognidesk/core @cognidesk/model @cognidesk/storage @libsql/client @ai-sdk/openai zod
pnpm add -D tsx typescript @types/node
```

Create these files:

```text
cognidesk-quick-start/
  .env
  agent.ts
  conversation.ts
  models.ts
  runtime.ts
  tsconfig.json
```

```json title="tsconfig.json"
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "types": ["node"]
  }
}
```

Use concrete model defaults while you are learning, then tune roles separately:

```sh title=".env"
OPENAI_API_KEY=sk-...
OPENAI_RESPONSE_MODEL=gpt-5.4-mini
OPENAI_MATCHER_MODEL=gpt-5.4-mini
OPENAI_EXTRACTION_MODEL=gpt-5.4-mini
OPENAI_CITATION_MODEL=gpt-5.4-mini
OPENAI_COMPACTION_MODEL=gpt-5.4-mini
OPENAI_EMBEDDING_MODEL=text-embedding-3-small
```

## 1. Configure models

```typescript title="models.ts"
import { createOpenAI } from "@ai-sdk/openai";
import { createModelSet } from "@cognidesk/model";

const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const models = createModelSet({
  response: openai.responses(requireEnv("OPENAI_RESPONSE_MODEL")),
  matcher: openai.responses(requireEnv("OPENAI_MATCHER_MODEL")),
  extraction: openai.responses(requireEnv("OPENAI_EXTRACTION_MODEL")),
  citationPostProcessing: openai.responses(requireEnv("OPENAI_CITATION_MODEL")),
  compaction: openai.responses(requireEnv("OPENAI_COMPACTION_MODEL")),
  journeyEmbedding: openai.embedding(requireEnv("OPENAI_EMBEDDING_MODEL")),
});

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required.`);
  return value;
}
```

## 2. Create an agent with a tool

```typescript title="agent.ts"
import { createAgent, tool } from "@cognidesk/core";
import { z } from "zod";

const findTicket = tool("findTicket", {
  description: "Look up a support ticket by booking reference.",
  input: z.object({ bookingReference: z.string() }),
  output: z.object({ status: z.string() }),
  execute: async ({ input }) => ({
    status: `Ticket ${input.bookingReference} is confirmed.`,
  }),
});

const agentBuilder = createAgent("flight-support", {
  instructions: "You are a concise flight support agent. Help customers check ticket status.",
});
agentBuilder.tools.add(findTicket);

export const agent = agentBuilder.compile();
```

## 3. Set up the runtime

```typescript title="runtime.ts"
import { createRuntime } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage/sqlite";
import { agent } from "./agent";
import { models } from "./models";

const storage = createSqliteStorage({ filename: "support.sqlite" });

export const runtime = createRuntime({
  storage,
  agent,
  models,
});

await runtime.initialize();
```

## 4. Run a conversation

```typescript title="conversation.ts"
import { agent } from "./agent";
import { runtime } from "./runtime";

const conversation = await runtime.createConversation({
  agentId: agent.id,
  context: {},
});

const response = await runtime.handleUserMessage({
  conversationId: conversation.id,
  text: "Can you check ticket ABC123?",
});

console.log(response.text);
```

Run it:

```bash
node --env-file=.env ./node_modules/.bin/tsx conversation.ts
```

The exact wording comes from the configured model, but the answer should say
that ticket `ABC123` is confirmed.

## 5. Add HTTP transport

```typescript title="server.ts"
import { createCognideskHttpHandler } from "@cognidesk/http";
import { agent } from "./agent";
import { runtime } from "./runtime";

export const handler = createCognideskHttpHandler({
  runtime,
  agentId: agent.id,
  basePath: "/api",
});

const response = await handler.handle(request);
```

Install `@cognidesk/http` when you are ready to expose the runtime through an
HTTP server:

```bash
pnpm add @cognidesk/http
```

## What's next?

- Learn the [Concepts](../concepts/index.md) behind the SDK
- Add [State Machine Journeys](../guides/journeys.md) for structured flows
- Connect a [React Chat Widget](../guides/react-ui.md)
- Enable [Voice](../guides/voice.md) conversations
