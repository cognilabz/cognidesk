---
hide:
  - navigation
  - toc
---

# Cognidesk

## Build customer support agents as code.

Cognidesk is a TypeScript runtime SDK that gives you full control over conversations, state machines, tools, knowledge retrieval, and UI — without vendor lock-in.

<div class="grid cards" markdown>

-   :material-rocket-launch:{ .lg .middle } **Get started in 5 minutes**

    ---

    Install Cognidesk and create your first agent with tools and journeys.

    [:octicons-arrow-right-24: Getting Started](getting-started/index.md)

-   :material-book-open-variant:{ .lg .middle } **Understand the concepts**

    ---

    Learn the domain model: Agents, Journeys, Tools, Knowledge Sources, and Events.

    [:octicons-arrow-right-24: Concepts](concepts/index.md)

-   :material-tools:{ .lg .middle } **Follow the guides**

    ---

    Step-by-step walkthroughs for every SDK capability.

    [:octicons-arrow-right-24: Guides](guides/index.md)

-   :material-api:{ .lg .middle } **API Reference**

    ---

    Full type signatures and exports for every package.

    [:octicons-arrow-right-24: API Reference](api-reference/index.md)

</div>

## Quick example

```typescript
import { createAgent, createRuntime, tool } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage-sqlite";
import { z } from "zod";

const findTicket = tool("findTicket", {
  input: z.object({ bookingReference: z.string() }),
  output: z.object({ status: z.string() }),
  execute: async ({ input }) => ({
    status: `Ticket ${input.bookingReference} is confirmed.`,
  }),
});

const agent = createAgent("support", {
  instructions: "You are a helpful support agent.",
})
  .tools.add(findTicket)
  .compile();

const runtime = createRuntime({
  storage: createSqliteStorage({ filename: "data.sqlite" }),
  agent,
  models, // Your model configuration
});
```

## Why Cognidesk?

| Feature | Cognidesk | Typical AI frameworks |
|---------|-----------|----------------------|
| State machine journeys | :material-check: Built-in DSL | :material-close: DIY or none |
| Transport neutral | :material-check: Core has zero HTTP deps | :material-close: Framework-bound |
| Typed tools & knowledge | :material-check: Zod schemas everywhere | :material-close: Loose typing |
| Voice support | :material-check: First-class adapter | :material-close: Separate product |
| React UI kit | :material-check: Included | :material-close: Build your own |
| OpenTelemetry | :material-check: Native spans & metrics | :material-close: Manual instrumentation |
