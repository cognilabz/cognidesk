# Agents

An **Agent** is the top-level definition in Cognidesk. It encapsulates everything the AI needs to operate: instructions, tools, knowledge sources, journeys, and custom events.

## Definition vs. compilation

Cognidesk separates agent *definition* (builder pattern) from agent *compilation* (frozen, validated artifact):

```typescript
// Definition phase — mutable
const builder = createAgent("support", {
  instructions: "You are a helpful support agent.",
});
builder.tools.add(findTicket);
builder.knowledge.add(faq);

// Compilation — immutable, validated
const agent = builder.compile();
```

!!! info "Why compile?"
    Compilation validates that all journeys, tools, and knowledge sources are correctly wired. It catches configuration errors at startup rather than at runtime.

## Agent identity

Each agent has a unique string `id` used to:

- Route conversations to the correct agent
- Scope storage (conversations belong to an agent)
- Identify the agent in telemetry and events

## Instructions

Instructions are the system prompt for the agent. They define tone, behavior, and constraints:

```typescript
const agent = createAgent("support", {
  instructions: `You are a concise customer support agent for FlightCo.
Rules:
- Never invent flight information
- Always ask for a booking reference before looking up tickets
- Be empathetic but brief`,
});
```

## What belongs on an agent

| Capability | Method | Purpose |
|-----------|--------|---------|
| Tools | `builder.tools.add(...)` | Actions the agent can take |
| Knowledge | `builder.knowledge.add(...)` | Context the agent can retrieve |
| Journeys | `builder.stateMachineJourney(...)` | Structured conversation flows |
| Custom Events | `builder.customEvents.add(...)` | App-layer event types |

## Next steps

- [Tools](tools.md) — define typed actions
- [Journeys](journeys.md) — add structured flows
- [Knowledge Sources](knowledge-sources.md) — provide retrieval context
