# @cognidesk/storage-sqlite

SQLite storage adapter for conversation persistence.

!!! info "Auto-generated from source"
    The complete type reference below is generated from TypeScript declarations. Run `pnpm docs:generate` to regenerate.

## Main exports

```typescript
import { createSqliteStorage } from "@cognidesk/storage-sqlite";
```

## createSqliteStorage(options)

Creates a SQLite-backed storage instance.

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `options.filename` | `string` | Path to SQLite database file |

**Returns:** `Storage`

## What's stored

- Conversations (metadata, agent assignment)
- Turns (messages, tool calls, responses)
- Journey state snapshots
- Runtime events

---

## Full type reference

--8<-- "api-reference/generated/storage-sqlite/dist.md"
