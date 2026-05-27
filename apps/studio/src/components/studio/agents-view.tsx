"use client";

import { useMemo, useState } from "react";
import { Bot, PanelLeftClose, PanelLeftOpen, Workflow } from "lucide-react";
import type { StudioAgentIntrospection, StudioJourneySummary } from "@cognidesk/studio-contracts";
import { JourneyGraph } from "@/components/journey-graph";
import { activeJourneyRows, knowledgeRows, toolRows, widgetRows } from "./data";
import { DataTable, EmptyState, PageHeader, Panel, PanelHeader, formatDateTime } from "./ui";

type AgentSection = "overview" | "instructions" | "journeys" | "tools" | "knowledge" | "widgets";

const agentSections: Array<[AgentSection, string]> = [
  ["overview", "Overview"],
  ["instructions", "Instructions"],
  ["journeys", "Journeys"],
  ["tools", "Tools"],
  ["knowledge", "Knowledge"],
  ["widgets", "Widgets"],
];

export function AgentsView(props: {
  introspection: StudioAgentIntrospection | null;
  error: string | null;
}) {
  const [section, setSection] = useState<AgentSection>("journeys");
  const [activeJourneyId, setActiveJourneyId] = useState(props.introspection?.journeys[0]?.id ?? "");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const stateMachines = props.introspection?.journeys.filter((journey) => journey.kind === "stateMachine") ?? [];
  const delegations = props.introspection?.journeys.filter((journey) => journey.kind === "delegation") ?? [];
  const activeJourney = useMemo(() => {
    if (!props.introspection) return null;
    return props.introspection.journeys.find((journey) => journey.id === activeJourneyId) ?? props.introspection.journeys[0] ?? null;
  }, [activeJourneyId, props.introspection]);
  const sectionContent = useMemo(() => {
    if (!props.introspection) return <EmptyState title="Agent configuration" text={props.error ?? "Waiting for Studio Adapter data."} />;
    if (section === "overview") {
      return (
        <Panel>
          <PanelHeader title="Agent summary" detail={`Captured ${formatDateTime(props.introspection.capturedAt)}`} />
          <DataTable
            columns={["Area", "Count"]}
            rows={[
              ["Journeys", String(props.introspection.agent.journeyCount)],
              ["Tools", String(props.introspection.agent.toolCount)],
              ["Knowledge", String(props.introspection.agent.knowledgeCount)],
              ["Widgets", String(props.introspection.agent.widgetCount)],
            ]}
          />
        </Panel>
      );
    }
    if (section === "instructions") {
      return (
        <Panel>
          <PanelHeader title="Agent instructions" detail="Base configuration reported by the adapter." />
          <pre className="whitespace-pre-wrap px-5 py-4 font-mono text-sm leading-7 text-slate-800">{props.introspection.agent.instructions || "No instructions returned."}</pre>
        </Panel>
      );
    }
    if (section === "tools") {
      return <Panel><PanelHeader title="Tools" /><DataTable columns={["Name", "Side effect", "Description"]} rows={toolRows(props.introspection)} emptyText="No tools returned." /></Panel>;
    }
    if (section === "knowledge") {
      return <Panel><PanelHeader title="Knowledge sources" /><DataTable columns={["Name"]} rows={knowledgeRows(props.introspection)} emptyText="No knowledge sources returned." /></Panel>;
    }
    if (section === "widgets") {
      return <Panel><PanelHeader title="Widgets" /><DataTable columns={["Kind"]} rows={widgetRows(props.introspection)} emptyText="No widgets returned." /></Panel>;
    }
    return <JourneyDetail journey={activeJourney} />;
  }, [activeJourney, props.error, props.introspection, section]);

  if (!props.introspection) {
    return <section className="p-8"><EmptyState title="Agent configuration" text={props.error ?? "Waiting for Studio Adapter data."} /></section>;
  }

  return (
    <section className={`grid min-h-[calc(100vh-5rem)] ${sidebarCollapsed ? "grid-cols-[64px_minmax(0,1fr)]" : "grid-cols-[300px_minmax(0,1fr)]"} max-xl:grid-cols-1`}>
      <aside className="border-r border-slate-200 bg-slate-50 p-5 max-xl:border-b max-xl:border-r-0">
        <div className={`mb-5 flex items-start gap-3 ${sidebarCollapsed ? "justify-center" : "justify-between"}`}>
          <div className={sidebarCollapsed ? "hidden" : ""}>
            <strong className="block text-slate-950">{props.introspection.agent.id}</strong>
            <span className="text-sm text-slate-500">{props.introspection.agent.journeyCount} journeys / {props.introspection.agent.toolCount} tools</span>
          </div>
          <button
            className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 max-xl:hidden"
            type="button"
            onClick={() => setSidebarCollapsed((value) => !value)}
            aria-label={sidebarCollapsed ? "Expand agent sidebar" : "Collapse agent sidebar"}
            title={sidebarCollapsed ? "Expand agent sidebar" : "Collapse agent sidebar"}
          >
            {sidebarCollapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
        </div>
        <div className="grid gap-1">
          {agentSections.map(([id, label]) => (
            <button
              className={`min-h-9 rounded-lg px-3 text-left text-sm ${section === id ? "bg-white text-slate-950 shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:bg-slate-100"} ${sidebarCollapsed ? "px-0 text-center" : ""}`}
              key={id}
              type="button"
              onClick={() => setSection(id)}
              title={label}
            >
              {sidebarCollapsed ? label.slice(0, 1) : label}
            </button>
          ))}
        </div>
        <JourneyGroup collapsed={sidebarCollapsed} title="XState journeys" icon="xstate" journeys={stateMachines} activeJourney={activeJourney} setSection={setSection} setActiveJourneyId={setActiveJourneyId} />
        <JourneyGroup collapsed={sidebarCollapsed} title="Prompt-based journeys" icon="prompt" journeys={delegations} activeJourney={activeJourney} setSection={setSection} setActiveJourneyId={setActiveJourneyId} />
      </aside>
      <section className="min-w-0">
        <PageHeader
          eyebrow="Agent builder"
          title={section === "journeys" ? activeJourney?.id ?? "Journeys" : titleForSection(section)}
        />
        <div className="p-8">{sectionContent}</div>
      </section>
    </section>
  );
}

function JourneyGroup(props: {
  collapsed: boolean;
  title: string;
  icon: "xstate" | "prompt";
  journeys: StudioJourneySummary[];
  activeJourney: StudioJourneySummary | null;
  setSection: (section: AgentSection) => void;
  setActiveJourneyId: (id: string) => void;
}) {
  const Icon = props.icon === "xstate" ? Workflow : Bot;
  return (
    <div className="mt-6 grid gap-1">
      <span className={`px-1 py-2 text-xs text-slate-500 ${props.collapsed ? "hidden" : ""}`}>{props.title}</span>
      {props.journeys.map((journey) => (
        <button
          className={`flex min-h-10 items-center gap-2 rounded-lg px-3 text-left text-sm ${
            props.activeJourney?.id === journey.id ? "bg-white text-slate-950 shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:bg-slate-100"
          } ${props.collapsed ? "justify-center px-0" : ""}`}
          key={journey.id}
          type="button"
          onClick={() => {
            props.setSection("journeys");
            props.setActiveJourneyId(journey.id);
          }}
          title={journey.id}
        >
          <Icon size={15} />
          <span className={`truncate ${props.collapsed ? "hidden" : ""}`}>{journey.id}</span>
        </button>
      ))}
    </div>
  );
}

function JourneyDetail({ journey }: { journey: StudioJourneySummary | null }) {
  if (!journey) return <EmptyState title="No journey selected" text="Select a journey from the left side." />;
  if (journey.kind === "delegation") {
    return (
      <div className="grid gap-4">
        <Panel>
          <PanelHeader title="Prompt-based journey configuration" detail={journey.condition} />
          <ConfigBlock title="Goal" body={journey.delegation?.goal ?? "No goal returned."} />
          <ConfigBlock title="Instructions" body={journey.delegation?.instructions ?? "No journey-specific instructions returned."} />
          <ConfigBlock title="Complete when" body={journey.delegation?.completeWhen.join("\n") || "No completion criteria returned."} />
        </Panel>
        <Panel>
          <PanelHeader title="Tools and knowledge" />
          <DataTable
            columns={["Type", "Name", "Side effect"]}
            rows={[
              ...journey.tools.map((tool) => ["Tool", tool.name, tool.sideEffect ? "Yes" : "No"]),
              ...journey.knowledge.map((knowledge) => ["Knowledge", knowledge.name, "-"]),
            ]}
            emptyText="No tools or knowledge linked to this journey."
          />
        </Panel>
      </div>
    );
  }
  return (
    <div className="grid gap-4">
      <Panel>
        <PanelHeader title="XState journey graph" detail={journey.condition} />
        <div className="p-5">
          <JourneyGraph journey={journey} />
        </div>
      </Panel>
      <Panel>
        <PanelHeader title="States" />
        <DataTable columns={["State", "Type", "Transitions", "Actions", "Requires visit"]} rows={activeJourneyRows(journey)} />
      </Panel>
      <Panel>
        <PanelHeader title="Examples" />
        <pre className="whitespace-pre-wrap px-5 py-4 font-mono text-sm leading-7 text-slate-800">{journey.examples.join("\n") || "No examples returned."}</pre>
      </Panel>
    </div>
  );
}

function ConfigBlock(props: { title: string; body: string }) {
  return (
    <section className="border-t border-slate-200">
      <h3 className="bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-950">{props.title}</h3>
      <pre className="whitespace-pre-wrap px-5 py-4 font-mono text-sm leading-7 text-slate-800">{props.body}</pre>
    </section>
  );
}

function titleForSection(section: AgentSection) {
  return {
    overview: "Overview",
    instructions: "Instructions",
    journeys: "Journeys",
    tools: "Tools",
    knowledge: "Knowledge",
    widgets: "Widgets",
  }[section];
}
