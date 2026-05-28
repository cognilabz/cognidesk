"use client";

import { Activity, Database, GitPullRequestArrow } from "lucide-react";
import type { StudioAgentIntrospection, StudioTargetManifest } from "@cognidesk/studio-contracts";
import type { DashboardRow, StudioConversationRow } from "./types";
import { conversationJourneyActivity, conversationRows, telemetryRows } from "./data";
import { DataTable, EmptyState, Metric, PageHeader, Panel, PanelHeader, formatDateTime } from "./ui";

export function HomeView(props: {
  manifest: StudioTargetManifest;
  introspection: StudioAgentIntrospection | null;
  dashboards: DashboardRow[];
  conversations: StudioConversationRow[];
  introspectionError: string | null;
}) {
  const activity = conversationJourneyActivity(props.conversations);
  const activeConversations = props.conversations.filter((conversation) => conversation.lifecycle === "active").length;
  const handoffs = props.conversations.filter((conversation) => conversation.lifecycle === "handoff").length;
  return (
    <section>
      <PageHeader
        eyebrow={`${props.manifest.target.environment} / ${props.manifest.target.id}`}
        title="Recent conversations"
      />
      <div className="space-y-6 px-8 py-6">
        <section className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
          <Metric label="Conversations" value={String(props.conversations.length)} detail={`${activeConversations} active now`} tone="blue" />
          <Metric label="Handoffs" value={String(handoffs)} detail="Needs operator attention" tone={handoffs ? "red" : "green"} />
          <Metric label="Agent" value={props.introspection?.agent.id ?? "Offline"} detail={props.introspection ? `${props.introspection.agent.journeyCount} journeys` : props.introspectionError ?? "No introspection"} tone="violet" />
          <Metric label="Dashboards" value={String(props.dashboards.length)} detail={`${props.dashboards.filter((dashboard) => dashboard.status === "published").length} published`} tone="slate" />
        </section>

        <section className="grid grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)] gap-4 max-xl:grid-cols-1">
          <Panel>
            <PanelHeader title="Conversation activity" />
            {activity.length ? (
              <ActivityBars data={activity} />
            ) : (
              <div className="p-5">
                <EmptyState title="No conversations" text="No conversation records have been captured yet." />
              </div>
            )}
          </Panel>

          <Panel>
            <PanelHeader title="Connected target" />
            <div className="grid gap-3 p-5 text-sm">
              <SurfaceLine icon={<Activity size={16} />} label="Telemetry" value={props.manifest.telemetry.sources.map((source) => source.label).join(", ") || "None"} />
              <SurfaceLine icon={<Database size={16} />} label="Artifacts" value={`${props.manifest.dashboards.artifactBucket}/${props.manifest.dashboards.artifactPrefix}`} />
              <SurfaceLine icon={<GitPullRequestArrow size={16} />} label="Source" value={`${props.manifest.source.owner}/${props.manifest.source.repo}:${props.manifest.source.defaultBranch}`} />
            </div>
          </Panel>
        </section>

        <section className="grid grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] gap-4 max-xl:grid-cols-1">
          <Panel>
            <PanelHeader title="Latest conversations" />
            <DataTable columns={["Customer", "State", "Journey", "Events", "Summary"]} rows={conversationRows(props.conversations)} emptyText="No conversations available." />
          </Panel>
          <Panel>
            <PanelHeader title="Agent facts" {...(props.introspection ? { detail: `Captured ${formatDateTime(props.introspection.capturedAt)}` } : {})} />
            <DataTable columns={["Fact", "Value"]} rows={telemetryRows(props.introspection)} emptyText={props.introspectionError ?? "No runtime facts available."} />
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

function ActivityBars({ data }: { data: Array<{ journey: string; conversations: number; events: number }> }) {
  const max = Math.max(1, ...data.flatMap((entry) => [entry.conversations, entry.events]));
  const chartHeight = 220;
  return (
    <div className="grid h-80 grid-rows-[1fr_auto] gap-4 p-5">
      <div className="flex min-h-0 items-end gap-4 border-b border-slate-200">
        {data.map((entry) => (
          <div className="flex min-w-0 flex-1 items-end justify-center gap-1" key={entry.journey}>
            <span className="block w-5 rounded-t bg-blue-600" style={{ height: `${Math.max(6, (entry.conversations / max) * chartHeight)}px` }} title={`${entry.conversations} conversations`} />
            <span className="block w-5 rounded-t bg-teal-700" style={{ height: `${Math.max(6, (entry.events / max) * chartHeight)}px` }} title={`${entry.events} events`} />
          </div>
        ))}
      </div>
      <div className="grid gap-2 text-xs text-slate-500" style={{ gridTemplateColumns: `repeat(${Math.max(1, data.length)}, minmax(0, 1fr))` }}>
        {data.map((entry) => <span className="truncate text-center" key={entry.journey}>{entry.journey}</span>)}
      </div>
    </div>
  );
}
