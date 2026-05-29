import { DataTable, PageHeader, Panel, PanelHeader } from "@/components/studio/ui";
import { requireStudioPageContext } from "@/server/studio-page-data";

export const runtime = "nodejs";

export default async function SettingsPage() {
  const { user } = await requireStudioPageContext();

  return (
    <section>
      <PageHeader eyebrow="Account" title="User settings" />
      <div className="grid gap-4 p-8">
        <Panel>
          <PanelHeader title="Profile" />
          <DataTable
            columns={["Setting", "Value"]}
            rows={[
              ["Name", user.name],
              ["Email", user.email],
              ["Role", user.role],
            ]}
          />
        </Panel>
      </div>
    </section>
  );
}
