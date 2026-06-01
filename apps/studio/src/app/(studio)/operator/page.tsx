import { OperatorView } from "@/components/studio/operator-view";
import { listOperatorSessions } from "@/server/operator-sessions";
import { requirePermission, userRole } from "@/server/rbac";
import { requireStudioPageContext } from "@/server/studio-page-data";
import type { Metadata } from "next";

export const runtime = "nodejs";
export const metadata: Metadata = {
  title: "Operator | Cognidesk Studio",
  description: "Run Studio operator sessions against the configured target.",
};

export default async function OperatorPage() {
  const { session, manifest } = await requireStudioPageContext();
  requirePermission(session, "operator:use");
  const sessions = await listOperatorSessions(session.user.id, userRole(session) === "admin");

  return (
    <OperatorView
      manifest={manifest}
      initialSessions={sessions.map((item) => ({
        id: item.id,
        title: item.title,
        updatedAt: item.updatedAt.toISOString(),
        modelId: item.modelId,
      }))}
    />
  );
}
