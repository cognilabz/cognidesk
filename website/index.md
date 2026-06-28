---
hide:
  - navigation
  - toc
---

<div class="cd-home">
<h1 id="cognidesk">Cognidesk</h1>
<h2 id="build-customer-support-agents-as-code">Build customer support agents as code.</h2>
<p>Cognidesk is a TypeScript runtime SDK that gives you full control over conversations, state machines, tools, knowledge retrieval, and UI — without vendor lock-in.</p>
<figure class="cd-runtime-map" aria-label="Cognidesk runtime flow from channel event to resolved support output">
<div class="cd-runtime-map__top">
<span>Runtime surface</span>
<span>policy aware</span>
</div>
<div class="cd-runtime-map__canvas">
<div class="cd-runtime-node cd-runtime-node--event"><span>Channel Event</span><strong>Chat, voice, email, ticket</strong></div>
<div class="cd-runtime-node cd-runtime-node--journey"><span>Journey</span><strong>Stateful support path</strong></div>
<div class="cd-runtime-node cd-runtime-node--tools"><span>Tools + Knowledge</span><strong>Typed actions and context</strong></div>
<div class="cd-runtime-node cd-runtime-node--output"><span>Output Resolution</span><strong>Reply, draft, approve, handoff</strong></div>
</div>
</figure>
</div>

<div class="grid cards" markdown>

-   :material-rocket-launch:{ .lg .middle } **Get started in 5 minutes**

    ---

    Install Cognidesk and create your first agent with tools and journeys.

    [:octicons-arrow-right-24: Getting Started](getting-started/index.md)

-   :material-book-open-variant:{ .lg .middle } **Understand the concepts**

    ---

    Learn the domain model: Agents, Journeys, Tools, Knowledge Sources, Provider Integrations, and Events.

    [:octicons-arrow-right-24: Concepts](concepts/index.md)

-   :material-tools:{ .lg .middle } **Follow the guides**

    ---

    Step-by-step walkthroughs for every SDK capability.

    [:octicons-arrow-right-24: Guides](guides/index.md)

-   :material-monitor-dashboard:{ .lg .middle } **Operate with Studio**

    ---

    Inspect targets, conversations, journeys, dashboards, and operator workflows.

    [:octicons-arrow-right-24: Studio](studio/index.md)

-   :material-api:{ .lg .middle } **API Reference**

    ---

    Generated type signatures plus hand-written package summaries.

    [:octicons-arrow-right-24: API Reference](api-reference/index.md)

</div>

## Quick example

```typescript
import { createAgent, createRuntime, tool } from "@cognidesk/core";
import { createSqliteStorage } from "@cognidesk/storage/sqlite";
import { z } from "zod";

const findTicket = tool("findTicket", {
  input: z.object({ bookingReference: z.string() }),
  output: z.object({ status: z.string() }),
  execute: async ({ input }) => ({
    status: `Ticket ${input.bookingReference} is confirmed.`,
  }),
});

const agentBuilder = createAgent("support", {
  instructions: "You are a helpful support agent.",
});
agentBuilder.tools.add(findTicket);
const agent = agentBuilder.compile();

const runtime = createRuntime({
  storage: createSqliteStorage({ filename: "data.sqlite" }),
  agent,
  models, // See the Quick Start for createModelSet configuration
});
```

## Why Cognidesk?

| Feature | Cognidesk | Typical AI frameworks |
|---------|-----------|----------------------|
| State machine journeys | :material-check: Built-in DSL | :material-close: DIY or none |
| Transport neutral | :material-check: Core has zero HTTP deps | :material-close: Framework-bound |
| Typed tools & knowledge | :material-check: Zod schemas everywhere | :material-close: Loose typing |
| Voice support | :material-check: First-class adapter | :material-close: Separate product |
| Provider Integrations | :material-check: Scoped email, messaging, ticketing, social, workplace, and contact-center modules | :material-close: Flat integrations or vendor lock-in |
| React UI kit | :material-check: Included | :material-close: Build your own |
| OpenTelemetry | :material-check: Native spans & metrics | :material-close: Manual instrumentation |
