import { beforeAll, describe, expect, it, vi } from "vitest";

process.env.STUDIO_DATABASE_PROVIDER = "sqlite";
process.env.STUDIO_DATABASE_URL = ":memory:";

vi.mock("@/server/artifacts", () => ({
  deleteArtifact: vi.fn(async () => undefined),
  getArtifactText: vi.fn(async () => ""),
  putArtifact: vi.fn(async () => undefined),
}));

describe("dashboard persistence", () => {
  let modules!: Awaited<ReturnType<typeof loadModules>>;

  beforeAll(async () => {
    modules = await loadModules();
    await modules.ensureStudioDatabase();

    const now = new Date();
    const manifest = {
      version: 1,
      target: { id: "dashboard-target", name: "Dashboard Target", environment: "test" },
      runtime: {
        baseUrl: "http://localhost:4000",
        apiBasePath: "/api",
        studioAdapterBasePath: "/api/studio",
        serviceAuthHeader: "authorization",
      },
      telemetry: { sources: [] },
      source: { provider: "github", owner: "cognilabz", repo: "cognidesk", defaultBranch: "main", root: "." },
      code: { allowedPaths: [], validationCommands: [] },
      dashboards: { artifactBucket: "studio", artifactPrefix: "studio/dashboards" },
      operator: {
        instructionsPath: "AGENTS.md",
        skillPacks: [],
        models: [],
        allowedCredentialGrants: [],
      },
    };

    await modules.db.insert(modules.schema.user).values({
      id: "dashboard-owner",
      name: "Dashboard Owner",
      email: "dashboard-owner@example.com",
      role: "operator",
    }).onConflictDoNothing();
    await modules.db.insert(modules.schema.studioTargets).values({
      id: "dashboard-target",
      name: "Dashboard Target",
      environment: "test",
      manifestJson: JSON.stringify(manifest),
      effectiveManifestJson: JSON.stringify(manifest),
      createdAt: now,
      updatedAt: now,
    }).onConflictDoNothing();
  });

  it("seeds draft dashboards without a published timestamp and stays idempotent by slug", async () => {
    await modules.ensureDemoTelemetryDashboards({
      userId: "dashboard-owner",
      targetId: "dashboard-target",
    });
    await modules.ensureDemoTelemetryDashboards({
      userId: "dashboard-owner",
      targetId: "dashboard-target",
    });

    const dashboards = await modules.listDashboards("dashboard-target");
    expect(dashboards).toHaveLength(2);
    expect(dashboards.map((dashboard) => dashboard.slug).sort()).toEqual([
      "otel-support-workload",
      "otel-trace-latency",
    ]);
    expect(dashboards.map((dashboard) => dashboard.publishedAt)).toEqual([null, null]);
  });
});

async function loadModules() {
  const [{ db, ensureStudioDatabase }, schema, dashboards] = await Promise.all([
    import("@/server/db/client"),
    import("@/server/db/schema"),
    import("@/server/dashboards/persistence"),
  ]);
  return {
    db,
    ensureDemoTelemetryDashboards: dashboards.ensureDemoTelemetryDashboards,
    ensureStudioDatabase,
    listDashboards: dashboards.listDashboards,
    schema,
  };
}
