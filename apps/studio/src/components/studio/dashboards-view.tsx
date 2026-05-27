import { BarChart3, CheckCircle2, Code2 } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { StudioAgentIntrospection, StudioDashboardArtifact } from "@cognidesk/studio-contracts";
import type { DashboardRow, PreviewDashboard } from "./types";
import { journeyComplexity, journeyKindDistribution } from "./data";
import { Button, DataTable, EmptyState, Metric, PageHeader, Panel, PanelHeader } from "./ui";

export function DashboardsView(props: {
  dashboards: DashboardRow[];
  previewDashboard: PreviewDashboard;
  introspection: StudioAgentIntrospection | null;
  saveAgentDashboard: () => void;
  openDashboard: (id: string) => void;
  publishDashboard: (id: string) => void;
}) {
  return (
    <section className="grid min-h-[calc(100vh-5rem)] grid-cols-[260px_minmax(0,1fr)] max-xl:grid-cols-1">
      <aside className="border-r border-slate-200 bg-slate-50 p-5 max-xl:border-b max-xl:border-r-0">
        <div className="mb-5 flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-slate-600">Dashboards</span>
          <Button className="min-h-8 px-2" onClick={props.saveAgentDashboard}>
            <Code2 size={15} />
            New
          </Button>
        </div>
        <div className="grid gap-1">
          {props.dashboards.map((dashboard) => (
            <button
              className={`grid min-h-12 grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2 rounded-lg px-3 text-left text-sm ${
                props.previewDashboard?.artifact.id === dashboard.id ? "bg-white text-slate-950 shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:bg-slate-100"
              }`}
              key={dashboard.id}
              type="button"
              onClick={() => props.openDashboard(dashboard.id)}
            >
              <BarChart3 size={15} />
              <span className="truncate">{dashboard.title}</span>
              <small className="col-start-2 text-xs text-slate-500">{dashboard.status} / v{dashboard.currentVersion}</small>
            </button>
          ))}
        </div>
      </aside>
      <section className="min-w-0">
        <PageHeader
          eyebrow="Real demo dashboard"
          title={props.previewDashboard?.artifact.title ?? "Agent structure dashboard"}
          description="This demo dashboard is backed by Cognidesk adapter data. It shows actual compiled journeys, tools, knowledge, states, and artifact bindings."
          actions={props.previewDashboard && props.previewDashboard.artifact.status !== "published" ? (
            <Button onClick={() => props.publishDashboard(props.previewDashboard!.artifact.id)}>
              <CheckCircle2 size={16} />
              Publish
            </Button>
          ) : null}
        />
        <div className="p-8">
          <AgentDashboard introspection={props.introspection} artifact={props.previewDashboard?.artifact ?? null} />
        </div>
      </section>
    </section>
  );
}

function AgentDashboard({ introspection, artifact }: { introspection: StudioAgentIntrospection | null; artifact: StudioDashboardArtifact | null }) {
  const complexity = journeyComplexity(introspection);
  const distribution = journeyKindDistribution(introspection);
  if (!introspection) {
    return <EmptyState title="No dashboard data" text="The target adapter did not return agent introspection, so Studio cannot render a truthful demo dashboard yet." />;
  }
  return (
    <div className="grid gap-4">
      <section className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
        <Metric label="Agent" value={introspection.agent.id} detail="Compiled SDK target" tone="blue" />
        <Metric label="Journeys" value={String(introspection.agent.journeyCount)} detail={`${distribution.map((item) => `${item.name}: ${item.value}`).join(" / ")}`} tone="violet" />
        <Metric label="Tools" value={String(introspection.agent.toolCount)} detail="From adapter introspection" tone="green" />
        <Metric label="Knowledge" value={String(introspection.agent.knowledgeCount)} detail={`${introspection.agent.widgetCount} widgets`} tone="slate" />
      </section>
      <section className="grid grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] gap-4 max-xl:grid-cols-1">
        <Panel>
          <PanelHeader title="Journey complexity" detail="States, tools, and knowledge per compiled journey." />
          <div className="h-96 p-5">
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
        </Panel>
        <Panel>
          <PanelHeader title="Journey kind distribution" />
          <div className="h-80 p-5">
            <ResponsiveContainer>
              <PieChart>
                <Tooltip />
                <Pie data={distribution} dataKey="value" nameKey="name" outerRadius={100} label>
                  {distribution.map((entry, index) => <Cell key={entry.name} fill={["#3f83ff", "#8b6dff"][index % 2] ?? "#3f83ff"} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </section>
      <Panel>
        <PanelHeader title="Dashboard data bindings" detail={artifact ? `${artifact.datasets.length} persisted datasets in artifact v${artifact.version}` : "Live preview from current adapter data"} />
        <DataTable
          columns={["Dataset", "Capability", "State"]}
          rows={(artifact?.datasets ?? []).map((dataset) => [dataset.title, dataset.source.capability, "Persisted"])}
          emptyText="This live preview uses current adapter data. Save a dashboard artifact to persist dataset bindings."
        />
      </Panel>
    </div>
  );
}

export const agentDashboardCode = `
function Dashboard({ React, datasets, helpers }) {
  const e = React.createElement;
  const agentDataset = datasets.find((dataset) => dataset.id === "agent");
  const agent = agentDataset && agentDataset.data ? agentDataset.data : null;
  const journeys = agent && Array.isArray(agent.journeys) ? agent.journeys : [];
  const rows = journeys.map((journey) => ({
    id: journey.id,
    kind: journey.kind === "delegation" ? "Prompt-based" : "XState",
    states: journey.graph && Array.isArray(journey.graph.states) ? journey.graph.states.length : 0,
    tools: Array.isArray(journey.tools) ? journey.tools.length : 0,
    knowledge: Array.isArray(journey.knowledge) ? journey.knowledge.length : 0
  }));
  const max = Math.max(1, ...rows.map((row) => row.states + row.tools + row.knowledge));
  return e("main", { style: { padding: 24, color: "#242528", background: "#fff", minHeight: "100vh", fontFamily: "ui-sans-serif, system-ui" } },
    e("h1", { style: { margin: 0, fontSize: 24 } }, "Agent structure dashboard"),
    e("p", { style: { color: "#64748b" } }, agent ? "Live adapter snapshot for " + agent.agent.id : "No agent dataset available."),
    e("section", { style: { display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 12, marginTop: 20 } },
      [["Journeys", rows.length], ["Tools", agent ? agent.agent.toolCount : 0], ["Knowledge", agent ? agent.agent.knowledgeCount : 0], ["Widgets", agent ? agent.agent.widgetCount : 0]].map(([label, value]) =>
        e("article", { key: label, style: { border: "1px solid #e2e8f0", borderRadius: 8, padding: 14 } },
          e("span", { style: { color: "#64748b", fontSize: 13 } }, label),
          e("strong", { style: { display: "block", fontSize: 26, marginTop: 8 } }, helpers.formatNumber(value))
        )
      )
    ),
    e("section", { style: { border: "1px solid #e2e8f0", borderRadius: 8, padding: 18, marginTop: 16 } },
      e("h2", { style: { margin: "0 0 14px", fontSize: 18 } }, "Journey complexity"),
      e("svg", { viewBox: "0 0 760 300", width: "100%", height: 300 },
        rows.map((row, index) => e("g", { key: row.id, transform: "translate(" + (24 + index * 110) + ",0)" },
          e("rect", { x: 0, y: 250 - (row.states / max) * 210, width: 22, height: (row.states / max) * 210, fill: "#3f83ff", rx: 4 }),
          e("rect", { x: 26, y: 250 - (row.tools / max) * 210, width: 22, height: (row.tools / max) * 210, fill: "#0aa979", rx: 4 }),
          e("rect", { x: 52, y: 250 - (row.knowledge / max) * 210, width: 22, height: (row.knowledge / max) * 210, fill: "#8b6dff", rx: 4 }),
          e("text", { x: 0, y: 282, fontSize: 11, fill: "#64748b" }, row.id.slice(0, 12))
        ))
      )
    )
  );
}
`;
