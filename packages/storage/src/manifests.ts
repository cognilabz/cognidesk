import { defineProviderPackage, type ChannelCapabilityDeclaration } from "@cognidesk/core";

function storageCapabilities(databaseLabel: string): ChannelCapabilityDeclaration[] {
  return [
    {
      capability: "storage.create-conversation",
      label: "Create conversations",
      description: `Creates durable Cognidesk Conversation records in ${databaseLabel}.`,
      audiences: ["customer-facing", "internal-support"],
      providerObjects: [{ kind: "conversation", label: "Conversation" }],
      sideEffect: true,
      extension: true,
    },
    {
      capability: "storage.append-event",
      label: "Append runtime events",
      description: `Persists ordered Runtime Events for each Conversation in ${databaseLabel}.`,
      audiences: ["customer-facing", "internal-support"],
      providerObjects: [{ kind: "runtimeEvent", label: "Runtime Event" }],
      sideEffect: true,
      exposesSensitiveData: true,
      extension: true,
    },
    {
      capability: "storage.snapshot",
      label: "Save runtime snapshots",
      description: `Stores the current Runtime Snapshot for a Conversation in ${databaseLabel}.`,
      audiences: ["customer-facing", "internal-support"],
      providerObjects: [{ kind: "runtimeSnapshot", label: "Runtime Snapshot" }],
      sideEffect: true,
      exposesSensitiveData: true,
      extension: true,
    },
    {
      capability: "storage.read-conversation",
      label: "Read conversations and events",
      description: `Reads Conversations, ordered Runtime Events, and Runtime Snapshots from ${databaseLabel}.`,
      audiences: ["customer-facing", "internal-support"],
      providerObjects: [
        { kind: "conversation", label: "Conversation" },
        { kind: "runtimeEvent", label: "Runtime Event" },
        { kind: "runtimeSnapshot", label: "Runtime Snapshot" },
      ],
      exposesSensitiveData: true,
      extension: true,
    },
  ];
}

export const sqliteStorageProviderManifest = defineProviderPackage({
  id: "storage.sqlite",
  name: "SQLite Storage Adapter",
  packageName: "@cognidesk/storage",
  provider: "sqlite",
  category: "storage",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  coverage: {
    scope: "local-protocol",
    notes: [
      "This manifest covers Cognidesk conversation, runtime event, and runtime snapshot persistence on a SQLite-compatible database.",
      "It is not full SQLite API coverage; SQL dialect breadth, migrations beyond Cognidesk schema helpers, backup, replication, encryption, and administration remain SDK-user responsibilities.",
    ],
    evidence: [
      { label: "SQLite documentation", url: "https://sqlite.org/docs.html" },
      { label: "SQLite SQL language", url: "https://sqlite.org/lang.html" },
    ],
  },
  capabilities: storageCapabilities("a SQLite-compatible database"),
  privacyNotes: [
    "Conversation context, Runtime Events, and Runtime Snapshots are stored in the SDK-user-configured SQLite location.",
    "Retention, encryption, backup, and deletion policies are owned by the SDK user.",
  ],
  limitations: [
    "SQLite is best suited for local development, embedded deployments, and small operational footprints.",
    "Distributed concurrency and high-availability behavior depend on the selected SQLite-compatible backend.",
  ],
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export const postgresStorageProviderManifest = defineProviderPackage({
  id: "storage.postgres",
  name: "Postgres Storage Adapter",
  packageName: "@cognidesk/storage",
  provider: "postgres",
  category: "storage",
  trustLevel: "official",
  directions: ["bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  coverage: {
    scope: "local-protocol",
    notes: [
      "This manifest covers Cognidesk conversation, runtime event, and runtime snapshot persistence through an SDK-user-managed Postgres connection.",
      "It is not full PostgreSQL API coverage; SQL feature breadth, extensions, replication, backup, roles, tuning, and database administration remain SDK-user responsibilities.",
    ],
    evidence: [
      { label: "PostgreSQL documentation", url: "https://www.postgresql.org/docs/current/index.html" },
      { label: "PostgreSQL frontend/backend protocol", url: "https://www.postgresql.org/docs/current/protocol.html" },
    ],
  },
  credentialRequirements: [
    {
      id: "postgres-connection",
      label: "Postgres connection",
      description: "Connection string, PoolConfig, or injected pg client supplied by the SDK user.",
      required: true,
    },
  ],
  capabilities: storageCapabilities("an SDK-user-managed Postgres database"),
  privacyNotes: [
    "Conversation context, Runtime Events, and Runtime Snapshots are stored in the SDK-user-configured Postgres database.",
    "Retention, encryption, backup, deletion, regionality, and access-control policies are owned by the SDK user.",
  ],
  limitations: [
    "Live readiness depends on the SDK-user-managed Postgres service, credentials, schema permissions, and network access.",
  ],
  maintainers: [{ name: "Cognidesk", type: "official" }],
});

export const storageProviderManifests = [
  sqliteStorageProviderManifest,
  postgresStorageProviderManifest,
] as const;
