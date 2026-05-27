import { HomeView } from "@/components/studio/home-view";
import { ensureDemoConversations, listStudioConversations } from "@/server/conversations";
import { listDashboards } from "@/server/dashboards";
import {
  loadIntrospectionResult,
  requireStudioPageContext,
  serializeDashboards,
} from "@/server/studio-page-data";

export const runtime = "nodejs";

export default async function HomePage() {
  const { manifest } = await requireStudioPageContext();
  const [dashboards, introspectionResult] = await Promise.all([
    listDashboards(manifest.target.id),
    loadIntrospectionResult(),
  ]);
  await ensureDemoConversations(manifest, introspectionResult.value);
  const conversations = await listStudioConversations(manifest.target.id);

  return (
    <HomeView
      manifest={manifest}
      dashboards={serializeDashboards(dashboards)}
      conversations={conversations}
      introspection={introspectionResult.value}
      introspectionError={introspectionResult.error}
    />
  );
}
