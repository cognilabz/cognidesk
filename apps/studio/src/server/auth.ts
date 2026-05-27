import { randomUUID } from "node:crypto";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { eq } from "drizzle-orm";
import { db, ensureStudioDatabase } from "@/server/db/client";
import { schema, studioAuditLog, user } from "@/server/db/schema";
import { studioEnv } from "@/server/config";
import type { StudioRole } from "@cognidesk/studio-contracts";

const env = studioEnv();
const trustedOrigins = localTrustedOrigins(env.appUrl);

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
  return await auth.api.getSession({ headers }) as StudioAuthSession | null;
}

export async function ensureBootstrapAdmin() {
  await ensureStudioDatabase();
  const [existing] = await db.select({ id: user.id }).from(user).limit(1);
  if (existing) return;

  const email = process.env.STUDIO_BOOTSTRAP_ADMIN_EMAIL
    ?? (process.env.NODE_ENV === "production" ? undefined : "admin@local.cognidesk.dev");
  const password = process.env.STUDIO_BOOTSTRAP_ADMIN_PASSWORD
    ?? (process.env.NODE_ENV === "production" ? undefined : "cognidesk-studio-admin");
  const name = process.env.STUDIO_BOOTSTRAP_ADMIN_NAME ?? "Cognidesk Studio Admin";
  if (!email || !password) return;

  await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
    },
  });
  await db.update(user).set({ role: "admin" }).where(eq(user.email, email));
  await db.insert(studioAuditLog).values({
    id: randomUUID(),
    userId: null,
    targetId: null,
    action: "studio.bootstrap_admin.created",
    subjectType: "user",
    subjectId: email,
    metadataJson: JSON.stringify({ email }),
    createdAt: new Date(),
  });
}

function localTrustedOrigins(appUrl: string) {
  const origins = new Set([appUrl]);
  try {
    const url = new URL(appUrl);
    if (url.hostname === "localhost") {
      origins.add(`${url.protocol}//127.0.0.1${url.port ? `:${url.port}` : ""}`);
    }
    if (url.hostname === "127.0.0.1") {
      origins.add(`${url.protocol}//localhost${url.port ? `:${url.port}` : ""}`);
    }
  } catch {
    // Keep the configured origin only.
  }
  return [...origins];
}
