import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { eq } from "drizzle-orm";

const tempDirs: string[] = [];

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("studio auth bootstrap", () => {
  it("does not create known local admin credentials by default", async () => {
    const { auth } = await loadStudioAuth();

    await auth.ensureBootstrapAdmin();

    expect(await auth.hasStudioUsers()).toBe(false);
  });

  it("creates the first boot admin from the setup flow once", async () => {
    const { auth, db, schema } = await loadStudioAuth();

    await expect(auth.createFirstBootAdmin({
      email: "Admin@Example.test",
      password: "first-boot-secret",
      name: "Studio Admin",
    })).resolves.toEqual({ ok: true });

    const users = await db.select({
      email: schema.user.email,
      name: schema.user.name,
      role: schema.user.role,
    }).from(schema.user);
    expect(users).toEqual([{
      email: "admin@example.test",
      name: "Studio Admin",
      role: "admin",
    }]);

    const audits = await db.select({
      action: schema.studioAuditLog.action,
      subjectId: schema.studioAuditLog.subjectId,
    }).from(schema.studioAuditLog);
    expect(audits).toEqual([{
      action: "studio.first_boot_admin.created",
      subjectId: "admin@example.test",
    }]);

    await expect(auth.createFirstBootAdmin({
      email: "other@example.test",
      password: "another-secret",
      name: "Other Admin",
    })).resolves.toMatchObject({ ok: false, status: 409 });
  });

  it("keeps explicit deployment bootstrap credentials supported", async () => {
    const { auth, db, schema } = await loadStudioAuth({
      STUDIO_BOOTSTRAP_ADMIN_EMAIL: "ops@example.test",
      STUDIO_BOOTSTRAP_ADMIN_PASSWORD: "deployment-secret",
    });

    await auth.ensureBootstrapAdmin();

    const [admin] = await db.select({
      email: schema.user.email,
      role: schema.user.role,
    }).from(schema.user).where(eq(schema.user.email, "ops@example.test"));
    expect(admin).toEqual({
      email: "ops@example.test",
      role: "admin",
    });
  });

  it("fails closed when deployment bootstrap credentials are partial", async () => {
    const { auth } = await loadStudioAuth({
      STUDIO_BOOTSTRAP_ADMIN_EMAIL: "ops@example.test",
    });

    await expect(auth.ensureBootstrapAdmin()).rejects.toThrow("must be configured together");
  });
});

async function loadStudioAuth(env: Record<string, string> = {}) {
  const tempDir = mkdtempSync(join(tmpdir(), "cognidesk-studio-auth-"));
  tempDirs.push(tempDir);
  vi.resetModules();
  vi.stubEnv("NODE_ENV", "development");
  vi.stubEnv("STUDIO_APP_URL", "http://127.0.0.1:3000");
  vi.stubEnv("STUDIO_DATABASE_PROVIDER", "sqlite");
  vi.stubEnv("STUDIO_DATABASE_URL", `file:${join(tempDir, "studio.sqlite")}`);
  vi.stubEnv("BETTER_AUTH_SECRET", "test-better-auth-secret");
  vi.stubEnv("STUDIO_BOOTSTRAP_ADMIN_EMAIL", "");
  vi.stubEnv("STUDIO_BOOTSTRAP_ADMIN_PASSWORD", "");
  vi.stubEnv("STUDIO_BOOTSTRAP_ADMIN_NAME", "");
  for (const [key, value] of Object.entries(env)) {
    vi.stubEnv(key, value);
  }

  const [auth, dbClient, schema] = await Promise.all([
    import("./auth"),
    import("@/server/db/client"),
    import("@/server/db/schema"),
  ]);
  await dbClient.ensureStudioDatabase();
  return { auth, db: dbClient.db, schema };
}
