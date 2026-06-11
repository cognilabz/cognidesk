# Storage

This guide covers configuring conversation persistence.

!!! note "Work in progress"
    This guide is being written. Check back soon for complete content.

## SQLite storage

The built-in SQLite adapter provides zero-config persistence:

```typescript
import { createSqliteStorage } from "@cognidesk/storage-sqlite";

const storage = createSqliteStorage({
  filename: "conversations.sqlite",
});

const runtime = createRuntime({ storage, agent, models });
```

## Storage contract

The storage interface is defined in `@cognidesk/core`. Any implementation that satisfies the contract can be used:

- Conversation CRUD
- Turn persistence
- Journey state snapshots
- Event storage and replay

## Custom storage adapters

Implement the storage interface to use your own database:

```typescript
import type { Storage } from "@cognidesk/core";

const customStorage: Storage = {
  // Implement the storage contract
};
```
