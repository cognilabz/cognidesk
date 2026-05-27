import { AdminView } from "@/components/studio/admin-view";
import { loadAdminOverview } from "@/server/admin";
import { requirePermission } from "@/server/rbac";
import { requireStudioPageContext } from "@/server/studio-page-data";

export const runtime = "nodejs";

export default async function AdminPage() {
  const { session, manifest, user } = await requireStudioPageContext();
  requirePermission(session, "admin:manage");
  const overview = await loadAdminOverview();
  return <AdminView manifest={manifest} user={user} overview={overview} />;
}
