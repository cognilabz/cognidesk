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

describe("studio admin users", () => {
  it("creates users through the admin surface and records an audit entry", async () => {
    const { admin, context, db, schema } = await loadStudioAdmin();

    const created = await admin.createStudioUser(context, {
      name: "Flight Operator",
      email: "Operator@Example.test",
      password: "operator-secret",
      role: "operator",
      emailVerified: true,
    });

    expect(created).toMatchObject({
      name: "Flight Operator",
      email: "operator@example.test",
      role: "operator",
      emailVerified: true,
      banned: false,
      hasPassword: true,
    });

    const [auditEntry] = await db.select({
      action: schema.studioAuditLog.action,
      subjectId: schema.studioAuditLog.subjectId,
    }).from(schema.studioAuditLog)
      .where(eq(schema.studioAuditLog.action, "studio.admin.user.created"));
    expect(auditEntry).toEqual({
      action: "studio.admin.user.created",
      subjectId: created.id,
    });
  });

  it("updates user settings, disables accounts, and removes active sessions", async () => {
    const { admin, auth, context } = await loadStudioAdmin();
    const created = await admin.createStudioUser(context, {
      name: "Support Agent",
      email: "support@example.test",
      password: "support-secret",
      role: "viewer",
      emailVerified: false,
    });
    await signInHeaders(auth, "support@example.test", "support-secret");

    const updated = await admin.updateStudioUser(context, {
      userId: created.id,
      name: "Senior Support Agent",
      email: "senior-support@example.test",
      role: "dashboard_editor",
      emailVerified: true,
      banned: true,
      banReason: "Offboarded",
    });

    expect(updated).toMatchObject({
      name: "Senior Support Agent",
      email: "senior-support@example.test",
      role: "dashboard_editor",
      emailVerified: true,
      banned: true,
      banReason: "Offboarded",
      activeSessionCount: 0,
    });
  });

  it("sets a replacement password that can be used for the next login", async () => {
    const { admin, auth, context } = await loadStudioAdmin();
    const created = await admin.createStudioUser(context, {
      name: "Reset Target",
      email: "reset@example.test",
      password: "old-secret",
      role: "viewer",
    });

    await admin.setStudioUserPassword(context, {
      userId: created.id,
      newPassword: "new-secret-123",
    });

    await expect(signInHeaders(auth, "reset@example.test", "new-secret-123")).resolves.toBeInstanceOf(Headers);
  });
});

async function loadStudioAdmin() {
  const tempDir = mkdtempSync(join(tmpdir(), "cognidesk-studio-admin-"));
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

  const [auth, admin, dbClient, schema] = await Promise.all([
    import("./auth"),
    import("./admin"),
    import("@/server/db/client"),
    import("@/server/db/schema"),
  ]);
  await dbClient.ensureStudioDatabase();
  await auth.createFirstBootAdmin({
    email: "admin@example.test",
    password: "admin-secret",
    name: "Studio Admin",
  });
  const headers = await signInHeaders(auth, "admin@example.test", "admin-secret");
  const session = await auth.getStudioSession(headers);
  expect(session).not.toBeNull();
  return {
    admin,
    auth,
    context: { headers, session: session! },
    db: dbClient.db,
    schema,
  };
}

async function signInHeaders(authModule: typeof import("./auth"), email: string, password: string) {
  const response = await authModule.auth.handler(new Request("http://127.0.0.1:3000/api/auth/sign-in/email", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }));
  expect(response.ok).toBe(true);
  const setCookie = response.headers.get("set-cookie");
  expect(setCookie).toBeTruthy();
  return new Headers({
    cookie: cookieHeader(setCookie ?? ""),
  });
}

function cookieHeader(setCookie: string) {
  return setCookie
    .split(/,(?=\s*[^;,]+=)/)
    .map((cookie) => cookie.split(";")[0]?.trim())
    .filter(Boolean)
    .join("; ");
}
