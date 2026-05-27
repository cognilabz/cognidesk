"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BarChart3, CheckCircle2, PanelLeftClose, PanelLeftOpen, Sparkles } from "lucide-react";
import type { StudioAgentIntrospection } from "@cognidesk/studio-contracts";
import type { DashboardRow, PreviewDashboard, StudioConversationRow } from "./types";
import { conversationJourneyActivity, conversationLifecycleDistribution, conversationRows } from "./data";
import { Button, DataTable, EmptyState, Metric, PageHeader, Panel, PanelHeader, formatDateTime } from "./ui";

export function DashboardsView(props: {
  dashboards: DashboardRow[];
  initialPreviewDashboard: PreviewDashboard;
  introspection: StudioAgentIntrospection | null;
  conversations: StudioConversationRow[];
}) {
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [previewDashboard, setPreviewDashboard] = useState<PreviewDashboard>(props.initialPreviewDashboard);

  async function openDashboard(id: string) {
    const response = await fetch(`/api/studio/dashboards/${id}`);
    if (!response.ok) return;
    setPreviewDashboard(await response.json() as PreviewDashboard);
  }

  async function publishDashboard(id: string) {
    const response = await fetch(`/api/studio/dashboards/${id}/publish`, { method: "POST" });
    if (!response.ok) return;
    const data = await response.json() as { dashboard: NonNullable<PreviewDashboard>["artifact"] };
    setPreviewDashboard((current) => current ? { ...current, artifact: data.dashboard } : current);
    router.refresh();
  }

  return (
    <section className={`grid min-h-[calc(100vh-5rem)] ${sidebarCollapsed ? "grid-cols-[64px_minmax(0,1fr)]" : "grid-cols-[280px_minmax(0,1fr)]"} max-xl:grid-cols-1`}>
      <aside className="border-r border-slate-200 bg-slate-50 p-4 max-xl:border-b max-xl:border-r-0">
        <div className={`mb-5 flex items-center gap-2 ${sidebarCollapsed ? "justify-center" : "justify-between"}`}>
          <span className={`text-sm font-medium text-slate-600 ${sidebarCollapsed ? "hidden" : ""}`}>Dashboards</span>
          <button
            className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 max-xl:hidden"
            type="button"
            onClick={() => setSidebarCollapsed((value) => !value)}
            aria-label={sidebarCollapsed ? "Expand dashboards sidebar" : "Collapse dashboards sidebar"}
            title={sidebarCollapsed ? "Expand dashboards sidebar" : "Collapse dashboards sidebar"}
          >
            {sidebarCollapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
        </div>

        <Button className={`mb-4 w-full ${sidebarCollapsed ? "justify-center px-0" : "justify-start"}`} onClick={() => router.push("/operator")} title="Create with Operator">
          <Sparkles size={15} />
          <span className={sidebarCollapsed ? "hidden" : ""}>Create with Operator</span>
        </Button>

        <div className="grid gap-1">
          {props.dashboards.map((dashboard) => (
            <button
              className={`grid min-h-12 grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2 rounded-lg px-3 text-left text-sm ${
                previewDashboard?.artifact.id === dashboard.id ? "bg-white text-slate-950 shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:bg-slate-100"
              } ${sidebarCollapsed ? "grid-cols-1 justify-items-center px-0" : ""}`}
              key={dashboard.id}
              type="button"
              onClick={() => openDashboard(dashboard.id)}
              title={dashboard.title}
            >
              <BarChart3 size={15} />
              <span className={`truncate ${sidebarCollapsed ? "hidden" : ""}`}>{dashboard.title}</span>
              <small className={`col-start-2 text-xs text-slate-500 ${sidebarCollapsed ? "hidden" : ""}`}>{dashboard.status} / v{dashboard.currentVersion}</small>
            </button>
          ))}
          {!props.dashboards.length && !sidebarCollapsed ? <p className="px-3 py-2 text-sm text-slate-500">No saved dashboards.</p> : null}
        </div>
      </aside>

      <section className="min-w-0">
        <PageHeader
          eyebrow="Conversation dashboards"
          title={previewDashboard?.artifact.title ?? "Conversation operations"}
          actions={previewDashboard && previewDashboard.artifact.status !== "published" ? (
            <Button onClick={() => publishDashboard(previewDashboard.artifact.id)}>
              <CheckCircle2 size={16} />
              Publish
            </Button>
          ) : null}
        />
        <div className="p-8">
          <ConversationDashboard
            conversations={props.conversations}
            introspection={props.introspection}
            previewDashboard={previewDashboard}
          />
        </div>
      </section>
    </section>
  );
}

function ConversationDashboard(props: {
  conversations: StudioConversationRow[];
  introspection: StudioAgentIntrospection | null;
  previewDashboard: PreviewDashboard;
}) {
  const activity = conversationJourneyActivity(props.conversations);
  const lifecycle = conversationLifecycleDistribution(props.conversations);
  const handoffs = props.conversations.filter((conversation) => conversation.lifecycle === "handoff").length;
  const closed = props.conversations.filter((conversation) => conversation.lifecycle === "closed").length;
  const totalEvents = props.conversations.reduce((sum, conversation) => sum + (conversation.eventCount ?? 0), 0);

  if (!props.conversations.length) {
    return <EmptyState title="No conversation data" text="No conversation records are available for this target." />;
  }

  return (
    <div className="grid gap-4">
      <section className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
        <Metric label="Conversations" value={String(props.conversations.length)} detail={`${closed} closed`} tone="blue" />
        <Metric label="Handoffs" value={String(handoffs)} detail="Escalated conversations" tone={handoffs ? "red" : "green"} />
        <Metric label="Events" value={String(totalEvents)} detail="Runtime events in sample set" tone="violet" />
        <Metric label="Agent" value={props.introspection?.agent.id ?? "Unknown"} detail={`${props.introspection?.agent.journeyCount ?? 0} journeys`} tone="slate" />
      </section>

      <section className="grid grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] gap-4 max-xl:grid-cols-1">
        <Panel>
          <PanelHeader title="Journey workload" />
          <ActivityBars data={activity} />
        </Panel>
        <Panel>
          <PanelHeader title="Conversation state" />
          <LifecycleBars data={lifecycle} />
        </Panel>
      </section>

      <section className="grid grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] gap-4 max-xl:grid-cols-1">
        <Panel>
          <PanelHeader title="Recent conversations" />
          <DataTable columns={["Customer", "State", "Journey", "Events", "Summary"]} rows={conversationRows(props.conversations)} />
        </Panel>
        <Panel>
          <PanelHeader title="Saved artifact" />
          {props.previewDashboard ? (
            <DataTable
              columns={["Field", "Value"]}
              rows={[
                ["Dashboard", props.previewDashboard.artifact.title],
                ["Version", `v${props.previewDashboard.artifact.version}`],
                ["Status", props.previewDashboard.artifact.status],
                ["Updated", formatDateTime(props.previewDashboard.artifact.updatedAt)],
                ["Datasets", String(props.previewDashboard.artifact.datasets.length)],
              ]}
            />
          ) : (
            <EmptyState title="No artifact selected" text="Select a saved dashboard or ask Operator to create one." />
          )}
        </Panel>
      </section>
    </div>
  );
}

function ActivityBars({ data }: { data: Array<{ journey: string; conversations: number; events: number }> }) {
  const max = Math.max(1, ...data.flatMap((entry) => [entry.conversations, entry.events]));
  return (
    <div className="grid h-96 grid-rows-[1fr_auto] gap-4 p-5">
      <div className="flex min-h-0 items-end gap-4 border-b border-slate-200">
        {data.map((entry) => (
          <div className="flex min-w-0 flex-1 items-end justify-center gap-1" key={entry.journey}>
            <span className="w-6 rounded-t bg-blue-600" style={{ height: `${Math.max(4, (entry.conversations / max) * 100)}%` }} title={`${entry.conversations} conversations`} />
            <span className="w-6 rounded-t bg-teal-700" style={{ height: `${Math.max(4, (entry.events / max) * 100)}%` }} title={`${entry.events} events`} />
          </div>
        ))}
      </div>
      <div className="grid gap-2 text-xs text-slate-500" style={{ gridTemplateColumns: `repeat(${Math.max(1, data.length)}, minmax(0, 1fr))` }}>
        {data.map((entry) => <span className="truncate text-center" key={entry.journey}>{entry.journey}</span>)}
      </div>
    </div>
  );
}

function LifecycleBars({ data }: { data: Array<{ name: string; value: number }> }) {
  const total = Math.max(1, data.reduce((sum, entry) => sum + entry.value, 0));
  const colors = ["bg-blue-600", "bg-rose-600", "bg-teal-700"];
  return (
    <div className="grid h-80 content-center gap-4 p-5">
      {data.map((entry, index) => (
        <div className="grid gap-2" key={entry.name}>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-800">{entry.name}</span>
            <span className="text-slate-500">{entry.value}</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <div className={`h-full rounded-full ${colors[index % colors.length] ?? "bg-blue-600"}`} style={{ width: `${(entry.value / total) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
