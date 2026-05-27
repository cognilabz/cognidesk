import type { StudioTargetManifest } from "@cognidesk/studio-contracts";
import type { User } from "./types";
import { DataTable, PageHeader, Panel, PanelHeader } from "./ui";

export function AdminView({ manifest, user }: { manifest: StudioTargetManifest; user: User }) {
  return (
    <section>
      <PageHeader
        eyebrow="Admin"
        title="Configuration"
        description="Only implemented administration surfaces are shown here. Future RBAC, credential, and audit screens should be added as real routes or panels before links appear."
      />
      <div className="grid gap-4 p-8">
        <Panel>
          <PanelHeader title="Target" />
          <DataTable
            columns={["Setting", "Value"]}
            rows={[
              ["Signed in", `${user.name} (${user.email})`],
              ["Role", user.role],
              ["Target", `${manifest.target.name} / ${manifest.target.environment}`],
              ["Adapter", `${manifest.runtime.baseUrl}${manifest.runtime.studioAdapterBasePath}`],
              ["Source", `${manifest.source.owner}/${manifest.source.repo}:${manifest.source.defaultBranch}`],
              ["Artifact storage", `${manifest.dashboards.artifactBucket}/${manifest.dashboards.artifactPrefix}`],
            ]}
          />
        </Panel>
        <Panel>
          <PanelHeader title="Validation commands" />
          <DataTable
            columns={["ID", "Label", "Command", "Working directory"]}
            rows={manifest.code.validationCommands.map((command) => [command.id, command.label, command.command, command.workingDirectory])}
            emptyText="No validation commands configured."
          />
        </Panel>
        <Panel>
          <PanelHeader title="Telemetry sources" />
          <DataTable
            columns={["ID", "Label", "Kind", "Base URL"]}
            rows={manifest.telemetry.sources.map((source) => [source.id, source.label, source.kind, source.baseUrl])}
            emptyText="No telemetry sources configured."
          />
        </Panel>
      </div>
    </section>
  );
}
