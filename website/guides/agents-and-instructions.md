# Agents & Instructions

This guide covers agent configuration, instruction design, and compilation.

!!! note "Work in progress"
    This guide is being written. Check back soon for complete content.

## Overview

Agents are the top-level entry point to Cognidesk. An agent definition encapsulates:

- **Instructions** — the system prompt that shapes behavior
- **Tools** — actions the agent can take
- **Knowledge sources** — context the agent can retrieve
- **Journeys** — structured conversation flows
- **Custom events** — app-specific event types

## Creating an agent

```typescript
import { createAgent } from "@cognidesk/core";

const builder = createAgent("flight-support", {
  instructions: `You are a concise flight support agent for FlightCo.
  
Rules:
- Never invent flight information
- Always ask for a booking reference before looking up tickets
- Be empathetic but brief
- If you cannot help, offer to connect the customer with a human agent`,
});
```

## Instruction design tips

!!! tip "Effective instructions"
    - Start with a role statement ("You are...")
    - List explicit rules as bullet points
    - Define boundaries (what the agent should NOT do)
    - Keep instructions under 500 tokens for best performance

## Compilation

```typescript
const agent = builder.compile();
```

Compilation validates:

- All referenced tools exist
- All journey schemas are valid
- No circular dependencies between journeys
- Knowledge sources have valid retrieval functions
