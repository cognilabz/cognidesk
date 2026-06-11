# Tools

This guide covers defining, registering, and using tools in your agent.

!!! note "Work in progress"
    This guide is being written. Check back soon for complete content.

## Defining a tool

```typescript
import { tool } from "@cognidesk/core";
import { z } from "zod";

const cancelBooking = tool("cancelBooking", {
  input: z.object({
    bookingReference: z.string().describe("Booking reference to cancel"),
    reason: z.enum(["customer_request", "duplicate", "fraud"]),
  }),
  output: z.object({
    success: z.boolean(),
    refundAmount: z.number().optional(),
  }),
  execute: async ({ input }) => {
    const result = await bookingService.cancel(input.bookingReference, input.reason);
    return { success: result.ok, refundAmount: result.refund };
  },
});
```

## Registering tools

```typescript
const builder = createAgent("support", { instructions: "..." });
builder.tools.add(cancelBooking);
builder.tools.add(findTicket);
builder.tools.add(searchFlights);
```

## Tools in journey states

Tools can be bound to specific journey states for deterministic execution:

```typescript
const lookup = states.get("lookup").runTool(findTicket, {
  input: ({ context }) => ({ bookingReference: context.bookingReference ?? "" }),
  assign: { ticketStatus: ({ output }) => output.status },
});
```

## Error handling

Tool execution errors are captured and surfaced to the model as structured error responses, allowing it to recover gracefully.
