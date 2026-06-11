# Journeys

A **Journey** is a state machine that guides a conversation through structured steps. Journeys are the core differentiator of Cognidesk — they give you deterministic control over conversation flow while still leveraging LLM flexibility.

## Why state machines?

Most AI frameworks let the model decide what to do next. This works for simple Q&A but breaks down for structured workflows:

- Collecting required information in a specific order
- Enforcing business rules between steps
- Handling conditional paths (auth required, feature flags)
- Providing deterministic audit trails

Cognidesk journeys solve this by defining **states** and **transitions** that the runtime enforces.

## Anatomy of a journey

```typescript
const ticketStatus = agentBuilder.stateMachineJourney("ticket-status", {
  condition: "Customer wants ticket status", // (1)!
  examples: ["Can you check ticket ABC123?"], // (2)!
  context: z.object({ // (3)!
    bookingReference: z.string().optional(),
    ticketStatus: z.string().optional(),
  }),
});
```

1. Natural language condition for journey activation
2. Example utterances that trigger this journey
3. Typed context that persists across states

## States and transitions

```typescript
const states = ticketStatus.defineStates("identify", "lookup");

const identify = states.get("identify").collect("bookingReference");
const lookup = states.get("lookup").runTool(findTicket, {
  input: ({ context }) => ({ bookingReference: context.bookingReference ?? "" }),
  assign: { ticketStatus: ({ output }) => output.status },
});

ticketStatus.initial(identify);
identify.transitionTo(lookup);
```

## Guards

Guards conditionally allow or block journey activation:

```typescript
const secured = agentBuilder.stateMachineJourney("secured-review", {
  condition: "Customer needs secured review",
  context: z.object({}),
  guard: ({ app }) =>
    app.authenticated
      ? { allow: true }
      : { allow: false, code: "auth_required", message: "Please authenticate first." },
});
```

## Context reuse

Journeys can reuse context from previous journey instances:

```typescript
const status = agentBuilder.stateMachineJourney("ticket-status", {
  // ...
  contextReuse: {
    fields: ["bookingReference"],
    when: ({ previousContext, turn }) =>
      previousContext.bookingReference !== undefined && turn.reusePreviousTicket === true,
  },
});
```

## Journey Events

Journeys can declare typed events for app-driven state changes:

```typescript
const ticketSynced = ticketStatus.event("ticket.synced", {
  payload: z.object({ bookingReference: z.string() }),
  routing: "activeJourneyOnly",
});

lookup.on(ticketSynced).target(lookup);
```

## Key principles

!!! tip "Design principles"
    - Each journey owns its own typed context
    - States are explicit — no hidden transitions
    - Guards run before activation, not during
    - Journey events enable external systems to drive state changes
