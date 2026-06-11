# Tools

A **Tool** is a typed function that the agent can invoke during a conversation. Tools are how agents take actions — looking up data, calling APIs, or performing operations.

## Defining a tool

Every tool has a name, typed input/output schemas (using Zod), and an execute function:

```typescript
import { tool } from "@cognidesk/core";
import { z } from "zod";

const findTicket = tool("findTicket", {
  input: z.object({
    bookingReference: z.string().describe("The booking reference to look up"),
  }),
  output: z.object({
    status: z.string(),
    departure: z.string().optional(),
  }),
  execute: async ({ input }) => {
    const ticket = await db.findTicket(input.bookingReference);
    return { status: ticket.status, departure: ticket.departure };
  },
});
```

## Type safety

Tools are fully typed end-to-end:

- **Input**: Validated before execution via Zod schema
- **Output**: Validated after execution
- **Context**: Available in the execute function

The model sees the schema as a function signature and knows exactly what arguments to provide.

## Adding tools to an agent

```typescript
const builder = createAgent("support", { instructions: "..." });
builder.tools.add(findTicket);
builder.tools.add(cancelBooking);
```

## Tools in journeys

Tools can be invoked as part of a journey state transition:

```typescript
const lookup = states.get("lookup").runTool(findTicket, {
  input: ({ context }) => ({ bookingReference: context.bookingReference ?? "" }),
  assign: { ticketStatus: ({ output }) => output.status },
});
```

This provides deterministic tool execution — the runtime calls the tool at the right point in the flow rather than relying on the model to decide.

## Best practices

!!! tip
    - Keep tools focused on a single responsibility
    - Use `.describe()` on Zod fields to help the model understand parameters
    - Validate and sanitize inputs in the execute function
    - Return structured data, not natural language
