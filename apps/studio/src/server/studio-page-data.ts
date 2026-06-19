import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { StudioAgentIntrospection, StudioConfigurationSurface } from "@cognidesk/studio-contracts";
import { getStudioSession } from "@/server/auth";
import { userRole } from "@/server/rbac";
import { ensureDefaultTarget, fetchConfigurationSurface, fetchIntrospection, targetHealth } from "@/server/target";
import type { DashboardRow, Health, User } from "@/components/studio/types";

export async function requireStudioPageContext() {
  const session = await getStudioSession(await headers());
  if (!session) redirect("/login");
  const manifest = await ensureDefaultTarget(session.user.id);
  return {
    session,
    manifest,
    user: {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      role: userRole(session),
    } satisfies User,
  };
}

export async function loadStudioShellContext() {
  const context = await requireStudioPageContext();
  const health = await targetHealth() as Health;
  return {
    ...context,
    health,
  };
}

export async function loadIntrospectionResult(): Promise<
  | { ok: true; value: StudioAgentIntrospection; error: null }
  | { ok: false; value: null; error: string }
> {
  try {
    return { ok: true, value: await fetchIntrospection(), error: null };
  } catch (error) {
    return {
      ok: false,
      value: null,
      error: error instanceof Error ? error.message : "Introspection failed",
    };
  }
}

export async function loadConfigurationResult(): Promise<
  | { ok: true; value: StudioConfigurationSurface; error: null }
  | { ok: false; value: null; error: string }
> {
  try {
    return { ok: true, value: await fetchConfigurationSurface(), error: null };
  } catch (error) {
    return {
      ok: false,
      value: null,
      error: error instanceof Error ? error.message : "Configuration surface failed",
    };
  }
}

export function serializeDashboards(dashboards: Array<{
  id: string;
  targetId: string;
  ownerUserId: string;
  slug: string;
  title: string;
  description: string | null;
  status: "draft" | "published" | "archived";
  currentVersion: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
}>): DashboardRow[] {
  return dashboards.map((dashboard) => ({
    ...dashboard,
    createdAt: dashboard.createdAt.toISOString(),
    updatedAt: dashboard.updatedAt.toISOString(),
    publishedAt: dashboard.publishedAt?.toISOString() ?? null,
  }));
}
