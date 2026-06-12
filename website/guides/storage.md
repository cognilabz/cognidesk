# Storage

This guide covers configuring conversation persistence.

!!! note "Work in progress"
    This guide is being written. Check back soon for complete content.

## SQLite storage

The built-in SQLite adapter provides local conversation persistence:

```bash
pnpm add @cognidesk/storage @libsql/client
```

```typescript
import { createSqliteStorage } from "@cognidesk/storage/sqlite";

const storage = createSqliteStorage({
  filename: "conversations.sqlite",
});

const runtime = createRuntime({ storage, agent, models });
```

## Postgres storage

Use Postgres for production deployments that need a server database:

```bash
pnpm add @cognidesk/storage pg
```

```typescript
import { createPostgresStorage } from "@cognidesk/storage/postgres";

const storage = createPostgresStorage({
  url: process.env.DATABASE_URL!,
});

const runtime = createRuntime({ storage, agent, models });
```

## Storage contract

The storage interface is defined in `@cognidesk/core`. Any implementation that satisfies the contract can be used:

- Conversation records
- Runtime Event storage and replay
- Runtime Snapshot persistence
- Conversation lifecycle updates

## Custom storage adapters

Implement the storage interface to use your own database:

```typescript
import type { StorageAdapter } from "@cognidesk/core";

const customStorage: StorageAdapter = {
  // Implement the storage contract
};
```
