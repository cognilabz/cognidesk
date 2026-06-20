import { eq } from "drizzle-orm";
import { beforeAll, describe, expect, it } from "vitest";

process.env.STUDIO_DATABASE_PROVIDER = "sqlite";
process.env.STUDIO_DATABASE_URL = ":memory:";

describe("operator session persistence", () => {
  let modules!: Awaited<ReturnType<typeof loadModules>>;

  beforeAll(async () => {
    modules = await loadModules();
    await modules.ensureStudioDatabase();

    const now = new Date();
    const manifest = {
      version: 1,
      target: { id: "target", name: "Target", environment: "test" },
      runtime: {
        baseUrl: "http://localhost:4000",
        apiBasePath: "/api",
        studioAdapterBasePath: "/api/studio",
        serviceAuthHeader: "authorization",
      },
      telemetry: { sources: [] },
      source: { provider: "github", owner: "cognilabz", repo: "cognidesk", defaultBranch: "main", root: "." },
      code: { allowedPaths: [], validationCommands: [] },
      dashboards: { artifactBucket: "studio" },
      operator: {
        instructionsPath: "AGENTS.md",
        skillPacks: [],
        models: [],
        allowedCredentialGrants: [],
      },
    };

    await modules.db.insert(modules.schema.user).values([
      { id: "owner", name: "Owner", email: "owner@example.com", role: "operator" },
      { id: "intruder", name: "Intruder", email: "intruder@example.com", role: "operator" },
      { id: "admin", name: "Admin", email: "admin@example.com", role: "admin" },
    ]);
    await modules.db.insert(modules.schema.studioTargets).values({
      id: "target",
      name: "Target",
      environment: "test",
      manifestJson: JSON.stringify(manifest),
      effectiveManifestJson: JSON.stringify(manifest),
      createdAt: now,
      updatedAt: now,
    });
    await modules.db.insert(modules.schema.operatorSessions).values({
      id: "owner-session",
      targetId: "target",
      userId: "owner",
      title: "Owner session",
      status: "active",
      createdAt: now,
      updatedAt: now,
    });
  });

  it("requires ownership or admin scope before appending messages", async () => {
    await expect(modules.appendOperatorMessage({
      sessionId: "owner-session",
      userId: "intruder",
      role: "user",
      content: { text: "cross-account append" },
    })).resolves.toBe(false);
    await expect(messageCount()).resolves.toBe(0);

    await expect(modules.appendOperatorMessage({
      sessionId: "owner-session",
      userId: "owner",
      role: "user",
      content: { text: "owned append" },
    })).resolves.toBe(true);
    await expect(messageCount()).resolves.toBe(1);

    await expect(modules.appendOperatorMessage({
      sessionId: "owner-session",
      userId: "admin",
      includeAll: true,
      role: "assistant",
      content: { text: "admin append" },
    })).resolves.toBe(true);
    await expect(messageCount()).resolves.toBe(2);
  });

  async function messageCount() {
    const rows = await modules.db.select().from(modules.schema.operatorMessages)
      .where(eq(modules.schema.operatorMessages.sessionId, "owner-session"));
    return rows.length;
  }
});

async function loadModules() {
  const [{ db, ensureStudioDatabase }, schema, { appendOperatorMessage }] = await Promise.all([
    import("@/server/db/client"),
    import("@/server/db/schema"),
    import("@/server/operator-sessions"),
  ]);
  return { db, ensureStudioDatabase, schema, appendOperatorMessage };
}
