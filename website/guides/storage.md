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

## Customer data and login sessions

Cognidesk does not require a specific Customer Store shape. Keep your canonical
customer profile, credentials, consents, and sensitive PII in your application
database. Use Conversation context only as a generic session binding point: a
stable `customerId` plus any small support-safe customer data your agent needs.

```typescript
import { createRuntime } from "@cognidesk/core";
import { createPostgresStorage } from "@cognidesk/storage/postgres";

type CustomerSessionContext = {
  customerId?: string;
  customer?: Record<string, unknown>;
  login?: Record<string, unknown>;
};

const storage = createPostgresStorage({ url: process.env.DATABASE_URL! });
const runtime = createRuntime({ storage, agent, models });

async function startCustomerSession(input: {
  email: string;
  password: string;
}) {
  const customer = await customerStore.verifyLogin(input);
  if (!customer) throw new Error("Invalid login");

  return await runtime.createConversation<CustomerSessionContext>({
    agentId: "support",
    channel: "chat",
    context: {
      customerId: customer.id,
      customer: {
        emailMasked: maskEmail(customer.email),
        displayName: customer.displayName,
      },
      login: {
        method: customer.loginMethod,
        authenticatedAt: new Date().toISOString(),
      },
    },
  });
}
```

When a later request needs full customer data, read it from your Customer Store
using the id stored in the session context:

```typescript
const conversation =
  await runtime.getConversation<CustomerSessionContext>(conversationId);

if (!conversation?.context.customerId) throw new Error("Customer session missing");

const customer = await customerStore.getCustomer(
  conversation.context.customerId,
);
```

To show an authenticated customer their prior support sessions, filter
Conversation records by the same canonical customer id:

```typescript
const customerId = authSession.customerId;

const customerSessions =
  await runtime.listConversations<CustomerSessionContext>({
    agentId: "support",
    customerId,
    limit: 25,
  });
```

Provider webhooks and channel events should use the same binding idea: put the
provider identity on the Channel Event, resolve it to your canonical customer id,
then create or resume the Conversation with `context.customerId`. Built-in
storage adapters also accept `context.customer.id` for applications that prefer
to keep the identifier inside their own nested `customer` object.

Studio and adapter customer relations use that same existing context. When
privacy allows it, Cognidesk surfaces only a generic relation `{ id }` derived
from `context.customerId` or `context.customer.id`. No other customer profile
fields are required, and no duplicate customer relation field needs to be added
for Studio.

```typescript
await runtime.createConversation({
  agentId: "support",
  context: {
    customerId: customer.id,
  },
  privacy: {
    traceContent: "none",
    customerRelationVisibility: "none",
  },
});
```

With `traceContent: "none"`, the generic relation is hidden unless the session
sets `customerRelationVisibility: "id"` explicitly.

## Custom storage adapters

Implement the storage interface to use your own database:

```typescript
import type { StorageAdapter } from "@cognidesk/core";

const customStorage: StorageAdapter = {
  // Implement the storage contract
};
```
