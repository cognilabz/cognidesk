# @cognidesk/core

The core package contains the runtime, agent builder, journey DSL, tool and knowledge definitions, and event system.

## Main exports

```typescript
import {
  createAgent,
  createRuntime,
  tool,
  knowledgeSource,
  customRuntimeEvent,
  buildJourneyIndex,
} from "@cognidesk/core";
```

## createAgent(id, options)

Creates an agent builder instance.

```typescript
const builder = createAgent("flight-support", {
  instructions: "You are a concise flight support agent.",
});
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | `string` | Unique agent identifier |
| `options.instructions` | `string` | System prompt for the agent |

**Returns:** `AgentBuilder`

## createRuntime(options)

Creates the conversation runtime.

```typescript
const runtime = createRuntime({ storage, agent, models });
await runtime.initialize();
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `options.storage` | `Storage` | Storage adapter |
| `options.agent` | `Agent` | Compiled agent |
| `options.models` | `ModelSet` | Model configuration |
| `options.journeyIndex` | `JourneyIndex` | Optional journey index |
| `options.streaming` | `StreamingOptions` | Optional streaming config |

**Returns:** `Runtime`

## tool(name, options)

Defines a typed tool.

```typescript
const findTicket = tool("findTicket", {
  input: z.object({ bookingReference: z.string() }),
  output: z.object({ status: z.string() }),
  execute: async ({ input }) => ({ status: "confirmed" }),
});
```

## knowledgeSource(name, options)

Defines a knowledge retrieval source.

## customRuntimeEvent(name, options)

Defines a custom event type with a typed payload.

## buildJourneyIndex(agent, options)

Builds an embedding-based journey activation index.

---

## Full type reference

!!! info "Auto-generated from source"
    The complete type reference below is generated from the TypeScript declarations using TypeDoc. Run `pnpm docs:generate` to regenerate.

    Descriptions will improve as TSDoc comments are added to the source code.

--8<-- "api-reference/generated/core/dist.md"
