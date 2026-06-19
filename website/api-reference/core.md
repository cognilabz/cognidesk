# @cognidesk/core

The core package contains the runtime, agent builder, journey DSL, tool and knowledge definitions, and event system.

## Responsibility boundary

`@cognidesk/core` is the transport-neutral runtime and contract package. It owns
the definitions that every adapter depends on, but it does not make your app use
a particular HTTP server, database, model provider, React UI, or Studio setup.

| Need | Use |
|------|-----|
| Build agents, journeys, tools, knowledge sources, runtime events, storage contracts, privacy hooks, telemetry contracts, and journey indexes | `@cognidesk/core` |
| Expose a runtime over REST or SSE | `@cognidesk/http` |
| Map concrete LLM or embedding providers into Cognidesk model roles | `@cognidesk/model` |
| Persist conversations in SQLite/libSQL or Postgres | `@cognidesk/storage` |
| Build browser chat or voice UI | `@cognidesk/react` and `@cognidesk/ui` |
| Validate Studio manifests, introspection, dashboards, and operator events | `@cognidesk/studio-contracts` |
| Test agent scenarios or Provider Integration conformance | `@cognidesk/test-harness` |

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
    The complete type reference is generated from the TypeScript declarations using TypeDoc. Run `pnpm docs:generate` to regenerate.

    Descriptions will improve as TSDoc comments are added to the source code.

Open the generated [`@cognidesk/core` type reference](generated/core/dist.md).
