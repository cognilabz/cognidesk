import { DashboardsView } from "@/components/studio/dashboards-view";
import { ensureDemoConversations, listStudioConversations } from "@/server/conversations";
import { ensureDemoTelemetryDashboards, getDashboardCode, listDashboards } from "@/server/dashboards";
import {
  loadIntrospectionResult,
  requireStudioPageContext,
  serializeDashboards,
} from "@/server/studio-page-data";

export const runtime = "nodejs";

export default async function DashboardsPage() {
  const { manifest, session } = await requireStudioPageContext();
  await ensureDemoTelemetryDashboards({
    userId: session.user.id,
    targetId: manifest.target.id,
  });
  const [dashboards, introspectionResult] = await Promise.all([
    listDashboards(manifest.target.id),
    loadIntrospectionResult(),
  ]);
  await ensureDemoConversations(manifest, introspectionResult.value);
  const conversations = await listStudioConversations(manifest.target.id);
  const firstDashboard = dashboards[0] ? await getDashboardCode(dashboards[0].id) : null;

  return (
    <DashboardsView
      dashboards={serializeDashboards(dashboards)}
      conversations={conversations}
      introspection={introspectionResult.value}
      initialPreviewDashboard={firstDashboard}
    />
  );
}
