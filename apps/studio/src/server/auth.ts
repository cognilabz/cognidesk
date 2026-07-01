import { randomUUID } from "node:crypto";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { admin, createAccessControl } from "better-auth/plugins";
import { and, eq, gt } from "drizzle-orm";
import { db, ensureStudioDatabase } from "@/server/db/client";
import { schema, session as sessionTable, studioAuditLog, user } from "@/server/db/schema";
import { studioEnv, studioTrustedOrigins } from "@/server/config";
import type { StudioRole } from "@cognidesk/studio-contracts";

const env = studioEnv();
const trustedOrigins = studioTrustedOrigins(env.appUrl);

const studioAdminStatements = {
  user: [
    "create",
    "list",
    "set-role",
    "ban",
    "delete",
    "set-password",
    "set-email",
    "get",
    "update",
  ],
  session: [
    "list",
    "revoke",
    "delete",
  ],
} as const;

const studioAdminAccessControl = createAccessControl(studioAdminStatements);
const studioAdminRole = studioAdminAccessControl.newRole(studioAdminStatements);
const studioUserRole = studioAdminAccessControl.newRole({
  user: [],
  session: [],
});

export const auth = betterAuth({
  baseURL: env.appUrl,
  secret: env.betterAuthSecret,
  trustedOrigins,
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    requireEmailVerification: false,
  },
  plugins: [
    admin({
      defaultRole: "viewer",
      adminRoles: ["admin"],
      ac: studioAdminAccessControl,
      roles: {
        viewer: studioUserRole,
        dashboard_editor: studioUserRole,
        operator: studioUserRole,
        admin: studioAdminRole,
      },
    }),
  ],
});

export type StudioAuthSession = typeof auth.$Infer.Session & {
  user: typeof auth.$Infer.Session.user & { role?: StudioRole };
};

export async function getStudioSession(headers: Headers): Promise<StudioAuthSession | null> {
  const cookieSession = await auth.api.getSession({ headers }) as StudioAuthSession | null;
  if (cookieSession) return cookieSession;

  const token = bearerToken(headers);
  if (!token) return null;
  await ensureStudioDatabase();
  const [row] = await db.select({
    session: sessionTable,
    user,
  })
    .from(sessionTable)
    .innerJoin(user, eq(sessionTable.userId, user.id))
    .where(and(eq(sessionTable.token, token), gt(sessionTable.expiresAt, new Date())))
    .limit(1);
  if (!row) return null;

  return {
    session: row.session,
    user: row.user,
  } as StudioAuthSession;
}

export async function hasStudioUsers() {
  await ensureStudioDatabase();
  const [existing] = await db.select({ id: user.id }).from(user).limit(1);
  return Boolean(existing);
}

export interface CreateFirstBootAdminInput {
  email: string;
  password: string;
  name: string;
}

export type CreateFirstBootAdminResult =
  | { ok: true }
  | { ok: false; status: number; message: string };

let firstBootAdminCreation: Promise<CreateFirstBootAdminResult> | null = null;

export async function createFirstBootAdmin(input: CreateFirstBootAdminInput): Promise<CreateFirstBootAdminResult> {
  firstBootAdminCreation ??= createFirstBootAdminOnce(input).finally(() => {
    firstBootAdminCreation = null;
  });
  return firstBootAdminCreation;
}

export async function ensureBootstrapAdmin() {
  await ensureStudioDatabase();
  const [existing] = await db.select({ id: user.id }).from(user).limit(1);
  if (existing) return;

  const email = process.env.STUDIO_BOOTSTRAP_ADMIN_EMAIL?.trim();
  const password = process.env.STUDIO_BOOTSTRAP_ADMIN_PASSWORD?.trim();
  const name = process.env.STUDIO_BOOTSTRAP_ADMIN_NAME?.trim() || "Cognidesk Studio Admin";
  if (!email && !password) return;
  if (!email || !password) {
    throw new Error("STUDIO_BOOTSTRAP_ADMIN_EMAIL and STUDIO_BOOTSTRAP_ADMIN_PASSWORD must be configured together.");
  }

  await createAdminUser({ email, password, name }, "studio.bootstrap_admin.created");
}

async function createFirstBootAdminOnce(input: CreateFirstBootAdminInput): Promise<CreateFirstBootAdminResult> {
  const email = input.email.trim().toLowerCase();
  const name = input.name.trim();
  const password = input.password;
  if (!name) return { ok: false, status: 400, message: "Admin name is required." };
  if (!email || !email.includes("@")) return { ok: false, status: 400, message: "A valid admin email is required." };
  if (password.length < 8) return { ok: false, status: 400, message: "Admin password must be at least 8 characters." };
  if (await hasStudioUsers()) return { ok: false, status: 409, message: "Studio already has an admin user." };

  try {
    await createAdminUser({ email, password, name }, "studio.first_boot_admin.created");
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      status: 400,
      message: error instanceof Error ? error.message : "Admin setup failed.",
    };
  }
}

async function createAdminUser(input: CreateFirstBootAdminInput, auditAction: string) {
  await auth.api.signUpEmail({
    body: {
      email: input.email,
      password: input.password,
      name: input.name,
    },
  });
  await Promise.all([
    db.update(user).set({ role: "admin" }).where(eq(user.email, input.email)),
    db.insert(studioAuditLog).values({
      id: randomUUID(),
      userId: null,
      targetId: null,
      action: auditAction,
      subjectType: "user",
      subjectId: input.email,
      metadataJson: JSON.stringify({ email: input.email }),
      createdAt: new Date(),
    }),
  ]);
}

function bearerToken(headers: Headers) {
  const value = headers.get("authorization");
  if (!value) return null;
  const match = value.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || null;
}
