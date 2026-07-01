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

describe("studio account settings", () => {
  it("updates the signed-in user's own profile settings", async () => {
    const { account, auth, context, db, schema } = await loadStudioAccount();

    const updated = await account.updateAccountProfile(context, {
      name: "Michael Studio",
      email: "Michael.Studio@Example.test",
    });

    expect(updated).toMatchObject({
      id: context.session.user.id,
      name: "Michael Studio",
      email: "michael.studio@example.test",
      emailVerified: false,
      role: "admin",
    });
    await expect(signInHeaders(auth, "michael.studio@example.test", "admin-secret")).resolves.toBeInstanceOf(Headers);

    const [auditEntry] = await db.select({
      action: schema.studioAuditLog.action,
      subjectId: schema.studioAuditLog.subjectId,
    }).from(schema.studioAuditLog)
      .where(eq(schema.studioAuditLog.action, "studio.account.profile.updated"));
    expect(auditEntry).toEqual({
      action: "studio.account.profile.updated",
      subjectId: context.session.user.id,
    });
  });

  it("changes the signed-in user's own password", async () => {
    const { account, auth, context } = await loadStudioAccount();

    await account.changeAccountPassword(context, {
      currentPassword: "admin-secret",
      newPassword: "next-admin-secret",
      revokeOtherSessions: false,
    });

    await expect(signInOk(auth, "admin@example.test", "admin-secret")).resolves.toBe(false);
    await expect(signInHeaders(auth, "admin@example.test", "next-admin-secret")).resolves.toBeInstanceOf(Headers);
  });

  it("revokes other sessions without signing out the current session", async () => {
    const { account, auth, context } = await loadStudioAccount();
    const otherHeaders = await signInHeaders(auth, "admin@example.test", "admin-secret");

    await account.changeAccountPassword(context, {
      currentPassword: "admin-secret",
      newPassword: "next-admin-secret",
    });

    await expect(auth.getStudioSession(context.headers)).resolves.not.toBeNull();
    await expect(auth.getStudioSession(otherHeaders)).resolves.toBeNull();
  });

  it("rejects a duplicate profile email", async () => {
    const { account, admin, context } = await loadStudioAccount();
    await admin.createStudioUser(context, {
      name: "Existing User",
      email: "existing@example.test",
      password: "existing-secret",
      role: "viewer",
    });

    await expect(account.updateAccountProfile(context, {
      name: "Studio Admin",
      email: "existing@example.test",
    })).rejects.toThrow("Email is already in use.");
  });
});

async function loadStudioAccount() {
  const tempDir = mkdtempSync(join(tmpdir(), "cognidesk-studio-account-"));
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

  const [auth, account, admin, dbClient, schema] = await Promise.all([
    import("./auth"),
    import("./account"),
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
    account,
    admin,
    auth,
    context: { headers, session: session! },
    db: dbClient.db,
    schema,
  };
}

async function signInHeaders(authModule: typeof import("./auth"), email: string, password: string) {
  const response = await signInResponse(authModule, email, password);
  expect(response.ok).toBe(true);
  const setCookie = response.headers.get("set-cookie");
  expect(setCookie).toBeTruthy();
  return new Headers({
    cookie: cookieHeader(setCookie ?? ""),
  });
}

async function signInOk(authModule: typeof import("./auth"), email: string, password: string) {
  return (await signInResponse(authModule, email, password)).ok;
}

async function signInResponse(authModule: typeof import("./auth"), email: string, password: string) {
  return authModule.auth.handler(new Request("http://127.0.0.1:3000/api/auth/sign-in/email", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }));
}

function cookieHeader(setCookie: string) {
  return setCookie
    .split(/,(?=\s*[^;,]+=)/)
    .map((cookie) => cookie.split(";")[0]?.trim())
    .filter(Boolean)
    .join("; ");
}
