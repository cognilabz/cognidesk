import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getStudioSession } from "@/server/auth";
import { userRole } from "@/server/rbac";
import { ensureDefaultTarget, fetchIntrospection, targetHealth } from "@/server/target";
import { listDashboards } from "@/server/dashboards";
import { StudioApp } from "@/components/studio-app";

export const runtime = "nodejs";

export default async function HomePage() {
  const session = await getStudioSession(await headers());
  if (!session) redirect("/login");

  const manifest = await ensureDefaultTarget(session.user.id);
  const [health, dashboards, introspectionResult] = await Promise.all([
    targetHealth(),
    listDashboards(manifest.target.id),
    fetchIntrospection().then((value) => ({ ok: true as const, value })).catch((error) => ({
      ok: false as const,
      error: error instanceof Error ? error.message : "Introspection failed",
    })),
  ]);

  return (
    <StudioApp
      user={{
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        role: userRole(session),
      }}
      manifest={manifest}
      health={health}
      initialDashboards={dashboards.map((dashboard) => ({
        ...dashboard,
        createdAt: dashboard.createdAt.toISOString(),
        updatedAt: dashboard.updatedAt.toISOString(),
        publishedAt: dashboard.publishedAt?.toISOString() ?? null,
      }))}
      initialIntrospection={introspectionResult.ok ? introspectionResult.value : null}
      introspectionError={introspectionResult.ok ? null : introspectionResult.error}
      initialRenderedAt={new Date().toISOString()}
    />
  );
}
