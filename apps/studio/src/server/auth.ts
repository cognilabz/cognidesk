import { randomUUID } from "node:crypto";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { and, eq, gt } from "drizzle-orm";
import { db, ensureStudioDatabase } from "@/server/db/client";
import { schema, session as sessionTable, studioAuditLog, user } from "@/server/db/schema";
import { allowsLocalStudioDefaults, studioEnv, studioTrustedOrigins } from "@/server/config";
import type { StudioRole } from "@cognidesk/studio-contracts";

const env = studioEnv();
const trustedOrigins = studioTrustedOrigins(env.appUrl);

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
  user: {
    additionalFields: {
      role: {
        type: ["viewer", "dashboard_editor", "operator", "admin"],
        required: false,
        defaultValue: "viewer",
        input: false,
      },
    },
  },
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

export async function ensureBootstrapAdmin() {
  await ensureStudioDatabase();
  const [existing] = await db.select({ id: user.id }).from(user).limit(1);
  if (existing) return;

  const email = process.env.STUDIO_BOOTSTRAP_ADMIN_EMAIL
    ?? (allowsLocalStudioDefaults() ? "admin@local.cognidesk.dev" : undefined);
  const password = process.env.STUDIO_BOOTSTRAP_ADMIN_PASSWORD
    ?? (allowsLocalStudioDefaults() ? "cognidesk-studio-admin" : undefined);
  const name = process.env.STUDIO_BOOTSTRAP_ADMIN_NAME ?? "Cognidesk Studio Admin";
  if (!email || !password) return;

  await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });
  await Promise.all([
    db.update(user).set({ role: "admin" }).where(eq(user.email, email)),
    db.insert(studioAuditLog).values({
      id: randomUUID(),
      userId: null,
      targetId: null,
      action: "studio.bootstrap_admin.created",
      subjectType: "user",
      subjectId: email,
      metadataJson: JSON.stringify({ email }),
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
