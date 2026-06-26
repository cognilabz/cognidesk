import { HomeView } from "@/components/studio/home-view";
import { listDashboards } from "@/server/dashboards";
import {
  loadIntrospectionResult,
  requireStudioPageContext,
  serializeDashboards,
} from "@/server/studio-page-data";
import { fetchTargetConversations } from "@/server/target";
import type { Metadata } from "next";

export const runtime = "nodejs";
export const metadata: Metadata = {
  title: "Home | Cognidesk Studio",
  description: "Review Studio target status, dashboards, and conversations.",
};

export default async function HomePage() {
  const { manifest, dashboards, introspectionResult, conversations } =
    await loadHomePageData();

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

function loadHomePageData() {
  return requireStudioPageContext().then(({ manifest }) =>
    Promise.all([
      listDashboards(manifest.target.id),
      loadIntrospectionResult(),
      fetchTargetConversations(),
    ]).then(([dashboards, introspectionResult, conversations]) => ({
      manifest,
      dashboards,
      introspectionResult,
      conversations,
    }))
  );
}
