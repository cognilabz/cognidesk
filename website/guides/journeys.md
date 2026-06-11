# Journeys

This guide covers building state machine journeys for structured conversation flows.

!!! note "Work in progress"
    This guide is being written. Check back soon for complete content.

## Creating a journey

```typescript
const ticketStatus = agentBuilder.stateMachineJourney("ticket-status", {
  condition: "Customer wants to check ticket status",
  examples: ["What's the status of my booking?", "Can you check ticket ABC123?"],
  context: z.object({
    bookingReference: z.string().optional(),
    ticketStatus: z.string().optional(),
  }),
});
```

## Defining states

```typescript
const states = ticketStatus.defineStates("identify", "lookup", "confirm");

const identify = states.get("identify").collect("bookingReference");
const lookup = states.get("lookup").runTool(findTicket, {
  input: ({ context }) => ({ bookingReference: context.bookingReference ?? "" }),
  assign: { ticketStatus: ({ output }) => output.status },
});
```

## Transitions

```typescript
ticketStatus.initial(identify);
identify.transitionTo(lookup);
```

## Alternate entries

Skip states when context is already available:

```typescript
ticketStatus.alternateEntry(lookup, {
  description: "Skip identification when reference was reused.",
  priority: 10,
  when: ({ context }) => context.bookingReference !== undefined,
});
```

## Guards

Conditionally allow or block journey activation:

```typescript
guard: ({ app }) =>
  app.authenticated
    ? { allow: true }
    : { allow: false, code: "auth_required", message: "Please log in." },
```

## Journey Events

Enable external systems to drive state changes:

```typescript
const ticketSynced = ticketStatus.event("ticket.synced", {
  payload: z.object({ bookingReference: z.string() }),
  routing: "activeJourneyOnly",
});

lookup.on(ticketSynced).target(lookup);
```
