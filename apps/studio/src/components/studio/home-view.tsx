import { Activity, Database, GitPullRequestArrow } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { StudioAgentIntrospection, StudioTargetManifest } from "@cognidesk/studio-contracts";
import type { DashboardRow, Health } from "./types";
import { journeyComplexity, journeyRows, telemetryRows } from "./data";
import { DataTable, EmptyState, Metric, PageHeader, Panel, PanelHeader, formatDateTime } from "./ui";

export function HomeView(props: {
  manifest: StudioTargetManifest;
  health: Health;
  introspection: StudioAgentIntrospection | null;
  dashboards: DashboardRow[];
  introspectionError: string | null;
  renderedAt: string;
}) {
  const complexity = journeyComplexity(props.introspection);
  return (
    <section>
      <PageHeader
        eyebrow={`${props.manifest.target.environment} / ${props.manifest.target.id}`}
        title="Agent runtime"
        description="Current information reported by the configured Cognidesk Studio Adapter and target manifest. Empty states mean the target has not exposed that data yet."
      />
      <div className="space-y-6 px-8 py-6">
        <section className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
          <Metric label="Adapter" value={props.health.ok ? "Online" : "Offline"} detail={`${props.manifest.runtime.baseUrl}${props.manifest.runtime.studioAdapterBasePath}`} tone={props.health.ok ? "green" : "red"} />
          <Metric label="Agent" value={props.introspection?.agent.id ?? "Unavailable"} detail={props.introspection ? `Captured ${formatDateTime(props.introspection.capturedAt)}` : props.introspectionError ?? "No introspection"} tone="blue" />
          <Metric label="Journeys" value={String(props.introspection?.agent.journeyCount ?? 0)} detail={`${props.introspection?.agent.toolCount ?? 0} tools / ${props.introspection?.agent.knowledgeCount ?? 0} knowledge sources`} tone="violet" />
          <Metric label="Dashboards" value={String(props.dashboards.length)} detail={`${props.dashboards.filter((dashboard) => dashboard.status === "published").length} published artifacts`} tone="slate" />
        </section>

        <section className="grid grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)] gap-4 max-xl:grid-cols-1">
          <Panel>
            <PanelHeader title="Journey structure" detail="Actual journeys, states, tools, and knowledge exposed by the agent." />
            {complexity.length ? (
              <div className="h-80 p-5">
                <ResponsiveContainer>
                  <BarChart data={complexity}>
                    <CartesianGrid stroke="#e5e7eb" vertical={false} />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="states" fill="#3f83ff" name="States" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="tools" fill="#0aa979" name="Tools" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="knowledge" fill="#8b6dff" name="Knowledge" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="p-5">
                <EmptyState title="No agent structure yet" text={props.introspectionError ?? "The adapter did not return introspection data."} />
              </div>
            )}
          </Panel>

          <Panel>
            <PanelHeader title="Connected surfaces" detail={`Rendered ${formatDateTime(props.renderedAt)}`} />
            <div className="grid gap-3 p-5 text-sm">
              <SurfaceLine icon={<Activity size={16} />} label="Telemetry sources" value={props.manifest.telemetry.sources.map((source) => `${source.label} (${source.kind})`).join(", ") || "None configured"} />
              <SurfaceLine icon={<Database size={16} />} label="Artifact storage" value={`${props.manifest.dashboards.artifactBucket}/${props.manifest.dashboards.artifactPrefix}`} />
              <SurfaceLine icon={<GitPullRequestArrow size={16} />} label="Source" value={`${props.manifest.source.owner}/${props.manifest.source.repo}:${props.manifest.source.defaultBranch}`} />
            </div>
          </Panel>
        </section>

        <section className="grid grid-cols-2 gap-4 max-xl:grid-cols-1">
          <Panel>
            <PanelHeader title="Journeys" detail="No synthetic issue list. These rows are the compiled agent journeys." />
            <DataTable columns={["Journey", "Kind", "States", "Tools", "Knowledge", "Stickiness"]} rows={journeyRows(props.introspection)} emptyText="No journeys returned by the adapter." />
          </Panel>
          <Panel>
            <PanelHeader title="Runtime facts" detail="Raw facts available from the Studio Adapter." />
            <DataTable columns={["Fact", "Value"]} rows={telemetryRows(props.introspection)} emptyText="No runtime facts returned by the adapter." />
          </Panel>
        </section>
      </div>
    </section>
  );
}

function SurfaceLine(props: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="grid gap-1 rounded-lg border border-slate-200 p-3">
      <span className="flex items-center gap-2 text-slate-500">{props.icon}{props.label}</span>
      <strong className="break-words font-medium text-slate-950">{props.value}</strong>
    </div>
  );
}
