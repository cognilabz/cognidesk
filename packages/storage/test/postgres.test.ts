import { Pool } from "pg";
import { describe, it } from "vitest";
import { defineStorageAdapterConformanceSuite } from "../src/conformance.js";
import { createPostgresStorage, type PostgresStorageAdapter } from "../src/postgres.js";

const postgresUrl = process.env.COGNIDESK_STORAGE_POSTGRES_URL;

if (postgresUrl) {
  defineStorageAdapterConformanceSuite<PostgresStorageAdapter>({
    name: "Postgres storage adapter",
    createStorage: () => createPostgresStorage({ url: postgresUrl }),
    cleanup: async (storage) => {
      try {
        await resetPostgresStorage(postgresUrl);
      } finally {
        await storage.close();
      }
    },
  });
} else {
  describe.skip("Postgres storage adapter", () => {
    it("runs conformance when COGNIDESK_STORAGE_POSTGRES_URL is set", () => undefined);
  });
}

async function resetPostgresStorage(url: string) {
  const pool = new Pool({ connectionString: url });
  try {
    await pool.query("TRUNCATE runtime_snapshots, runtime_events, conversations CASCADE");
  } finally {
    await pool.end();
  }
}
