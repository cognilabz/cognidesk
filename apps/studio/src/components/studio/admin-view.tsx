import type { StudioTargetManifest } from "@cognidesk/studio-contracts";
import type { AdminOverview } from "@/server/admin";
import type { User } from "./types";
import { formatDateTime } from "./format";
import { DataTable, Metric, PageHeader, Panel, PanelHeader } from "./ui";

export function AdminView({ manifest, user, overview }: { manifest: StudioTargetManifest; user: User; overview: AdminOverview }) {
  const activeSessions = overview.operatorSessions.filter((session) => session.status === "active").length;
  return (
    <section>
      <PageHeader eyebrow="Admin" title="Workspace controls" />
      <div className="grid gap-4 p-8">
        <section className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
          <Metric label="Signed in" value={user.name} detail={user.role} tone="blue" />
          <Metric label="Users" value={String(overview.users.length)} detail="Configured Studio accounts" tone="violet" />
          <Metric label="Operator sessions" value={String(overview.operatorSessions.length)} detail={`${activeSessions} active`} tone="green" />
          <Metric label="Target" value={manifest.target.name} detail={manifest.target.environment} tone="slate" />
        </section>

        <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4 max-xl:grid-cols-1">
          <Panel>
            <PanelHeader title="Access" />
            <DataTable
              columns={["Name", "Email", "Role", "Updated"]}
              rows={overview.users.map((row) => [row.name, row.email, row.role, formatDateTime(row.updatedAt)])}
              emptyText="No users found."
            />
          </Panel>
          <Panel>
            <PanelHeader title="Credential grants" />
            <DataTable
              columns={["Category", "Label", "Target", "Created"]}
              rows={overview.credentialGrants.map((grant) => [grant.category, grant.label, grant.targetId, formatDateTime(grant.createdAt)])}
              emptyText="No credential grants have been issued."
            />
          </Panel>
        </section>

        <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-4 max-xl:grid-cols-1">
          <Panel>
            <PanelHeader title="Operator sessions" />
            <DataTable
              columns={["Title", "Model", "Status", "Updated"]}
              rows={overview.operatorSessions.map((session) => [session.title, session.modelId ?? "-", session.status, formatDateTime(session.updatedAt)])}
              emptyText="No operator sessions yet."
            />
          </Panel>
          <Panel>
            <PanelHeader title="Audit trail" />
            <DataTable
              columns={["Action", "Subject", "Target", "Time"]}
              rows={overview.auditEntries.map((entry) => [
                entry.action,
                `${entry.subjectType}${entry.subjectId ? ` / ${entry.subjectId}` : ""}`,
                entry.targetId ?? "-",
                formatDateTime(entry.createdAt),
              ])}
              emptyText="No audit entries yet."
            />
          </Panel>
        </section>
      </div>
    </section>
  );
}
