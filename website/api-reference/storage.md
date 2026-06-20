# @cognidesk/storage

Built-in storage adapters for conversation persistence.

!!! info "Auto-generated from source"
    The complete type reference below is generated from TypeScript declarations. Run `pnpm docs:generate` to regenerate.

## Main exports

```typescript
import { createSqliteStorage } from "@cognidesk/storage/sqlite";
import { createPostgresStorage } from "@cognidesk/storage/postgres";
```

The root `@cognidesk/storage` import exposes shared storage contract types. Provider factories live on subpaths so applications only load the database driver they use. SQLite requires `@libsql/client`; Postgres requires `pg`.

## SQLite storage

```typescript
const storage = createSqliteStorage({
  filename: "conversations.sqlite",
});
```

## Postgres storage

```typescript
const storage = createPostgresStorage({
  url: process.env.DATABASE_URL!,
});
```

## Conformance

Third-party adapters can use `@cognidesk/storage/conformance` to verify that they satisfy the `StorageAdapter` contract.

---

## Full type reference

- [`@cognidesk/storage`](generated/storage/dist.md)
- [`@cognidesk/storage/sqlite`](generated/storage/dist/sqlite.md)
- [`@cognidesk/storage/postgres`](generated/storage/dist/postgres.md)
- [`@cognidesk/storage/conformance`](generated/storage/dist/conformance.md)
