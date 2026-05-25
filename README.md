# Cognidesk

Cognidesk is a TypeScript runtime SDK for building customer support agents as code.

The current repository is being implemented from the language in [CONTEXT.md](./CONTEXT.md) and the ADRs in [docs/adr](./docs/adr).

## SDK Shape

```ts
import { z } from "zod";
import {
  buildJourneyIndex,
  createAgent,
  createRuntime,
  knowledgeSource,
  tool,
} from "@cognidesk/core";
import { createCognideskHttpHandler } from "@cognidesk/http";
import { createSqliteStorage } from "@cognidesk/storage-sqlite";

const findTicket = tool("findTicket", {
  input: z.object({ bookingReference: z.string() }),
  output: z.object({ status: z.string() }),
  execute: async ({ input }) => ({ status: `Ticket ${input.bookingReference} is confirmed.` }),
});

const faq = knowledgeSource("support-faq", {
  query: z.object({ query: z.string() }),
  metadata: z.object({ source: z.string() }),
  retrieve: async () => ({
    items: [{
      id: "ticket-status-faq",
      content: "Ticket status is available with the booking reference.",
      metadata: { source: "faq" },
    }],
  }),
});

const agentBuilder = createAgent("flight-support", {
  instructions: "You are a concise customer support agent.",
});
agentBuilder.tools.add(findTicket);
agentBuilder.knowledge.add(faq);

const status = agentBuilder.stateMachineJourney("ticket-status", {
  condition: "Customer wants ticket status",
  context: z.object({
    bookingReference: z.string().optional(),
    ticketStatus: z.string().optional(),
  }),
});
const states = status.defineStates("identify", "lookup");
const identify = states.get("identify").collect("bookingReference");
const lookup = states.get("lookup").runTool(findTicket, {
  input: ({ context }) => ({ bookingReference: context.bookingReference ?? "" }),
  assign: { ticketStatus: ({ output }) => output.status },
});
status.initial(identify);
identify.transitionTo(lookup);

const agent = agentBuilder.compile();
const models = /* OpenAI, OpenRouter, or app-provided ModelAdapter set */;
const storage = createSqliteStorage({ filename: "support.sqlite" });
const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
const runtime = createRuntime({ storage, agent, models, journeyIndex });
await runtime.initialize();

const http = createCognideskHttpHandler({ runtime, agentId: agent.id, basePath: "/api" });
```

Core remains transport-neutral. The HTTP package exposes POST message submission, widget submissions, handoff requests, event history, and SSE event streaming. The React package provides `createCognideskClient`, `useChat`, and `ChatWidget`; assistant message segments can carry knowledge/tool references for source hovers.

## Flight Demo

Run the mocked flight service demo:

```bash
docker compose up --build
```

Then open `http://localhost:5173`. The API is served at `http://localhost:8787/api` and persists SQLite data in the `flight_demo_data` Docker volume.

For local development without Docker, run these in separate terminals:

```bash
pnpm --filter @cognidesk/flight-demo dev:server
pnpm --filter @cognidesk/flight-demo dev
```

## Development

```bash
pnpm install
pnpm check
```
