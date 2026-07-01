import { DashboardsView } from "@/components/studio/dashboards-view";
import { ensureDemoTelemetryDashboards, getDashboardCode, listDashboards } from "@/server/dashboards";
import {
  loadIntrospectionResult,
  requireStudioPageContext,
  serializeDashboards,
} from "@/server/studio-page-data";
import { fetchTargetConversations } from "@/server/target";
import type { Metadata } from "next";

export const runtime = "nodejs";
export const metadata: Metadata = {
  title: "Dashboards | Cognidesk Studio",
  description: "Review and publish generated Studio dashboards.",
};

export default async function DashboardsPage() {
  const { dashboards, introspectionResult, conversations, firstDashboard } =
    await loadDashboardsPageData();

  return (
    <DashboardsView
      dashboards={serializeDashboards(dashboards)}
      conversations={conversations}
      introspection={introspectionResult.value}
      initialPreviewDashboard={firstDashboard}
    />
  );
}

function loadDashboardsPageData() {
  return requireStudioPageContext().then(({ manifest, session }) =>
    ensureDemoTelemetryDashboards({
      telemetrySources: manifest.telemetry.sources,
      userId: session.user.id,
      targetId: manifest.target.id,
    }).then(() =>
      Promise.all([
        listDashboards(manifest.target.id),
        loadIntrospectionResult(),
      ]).then(([dashboards, introspectionResult]) =>
        Promise.all([
          fetchTargetConversations({ limit: 1000 }),
          dashboards[0]
            ? getDashboardCode(dashboards[0].id)
            : Promise.resolve(null),
        ]).then(([conversations, firstDashboard]) => ({
          dashboards,
          introspectionResult,
          conversations,
          firstDashboard,
        }))
      )
    )
  );
}
