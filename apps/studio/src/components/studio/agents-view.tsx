"use client";

import { useMemo, useState } from "react";
import { Bot, PanelLeftClose, PanelLeftOpen, Workflow } from "lucide-react";
import type { StudioAgentIntrospection, StudioConfigurationSurface, StudioJourneySummary } from "@cognidesk/studio-contracts";
import { JourneyGraph } from "@/components/journey-graph";
import {
  activeJourneyRows,
  agentPolicyRows,
  capabilityAvailabilityRows,
  channelBehaviorRows,
  channelFlowRows,
  channelHandoffRows,
  channelConfigurationRows,
  channelPolicyRows,
  channelSetRows,
  knowledgeRows,
  providerCredentialRows,
  providerPackageRows,
  providerReadinessRows,
  toolRows,
  widgetRows,
} from "./data";
import { formatDateTime } from "./format";
import { DataTable, EmptyState, PageHeader, Panel, PanelHeader } from "./ui";

type AgentSection = "overview" | "instructions" | "configuration" | "journeys" | "tools" | "knowledge" | "widgets";

const agentSections: Array<[AgentSection, string]> = [
  ["overview", "Overview"],
  ["instructions", "Instructions"],
  ["configuration", "Configuration"],
  ["journeys", "Journeys"],
  ["tools", "Tools"],
  ["knowledge", "Knowledge"],
  ["widgets", "Widgets"],
];

export function AgentsView(props: {
  introspection: StudioAgentIntrospection | null;
  configuration: StudioConfigurationSurface | null;
  error: string | null;
  configurationError?: string | null;
}) {
  const { error, introspection } = props;
  const [section, setSection] = useState<AgentSection>("journeys");
  const [activeJourneyId, setActiveJourneyId] = useState(introspection?.journeys[0]?.id ?? "");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const configuration = props.configuration ?? introspection?.configurationSurface ?? null;
  const stateMachines = introspection?.journeys.filter((journey) => journey.kind === "stateMachine") ?? [];
  const delegations = introspection?.journeys.filter((journey) => journey.kind === "delegation") ?? [];
  const activeJourney = useMemo(() => {
    if (!introspection) return null;
    return introspection.journeys.find((journey) => journey.id === activeJourneyId) ?? introspection.journeys[0] ?? null;
  }, [activeJourneyId, introspection]);

  if (!introspection && !configuration) {
    return <section className="p-8"><EmptyState title="Agent configuration" text={error ?? "Waiting for Studio Adapter data."} /></section>;
  }

  if (!introspection) {
    return (
      <section>
        <PageHeader eyebrow="Agent builder" title="Configuration" />
        <div className="p-8">
          <ConfigurationSection configuration={configuration} error={props.configurationError ?? error} />
        </div>
      </section>
    );
  }

  let sectionContent;
  if (section === "overview") {
    sectionContent = (
      <Panel>
        <PanelHeader title="Agent summary" detail={`Captured ${formatDateTime(introspection.capturedAt)}`} />
        <DataTable
          columns={["Area", "Count"]}
          rows={[
            ["Journeys", String(introspection.agent.journeyCount)],
            ["Tools", String(introspection.agent.toolCount)],
            ["Knowledge", String(introspection.agent.knowledgeCount)],
            ["Widgets", String(introspection.agent.widgetCount)],
          ]}
        />
        <DataTable
          columns={["Configuration", "Fields"]}
          rows={agentPolicyRows(introspection)}
          emptyText="No agent-level policy returned."
        />
      </Panel>
    );
  } else if (section === "instructions") {
    sectionContent = (
      <Panel>
        <PanelHeader title="Agent instructions" detail="Base configuration reported by the adapter." />
        <pre className="whitespace-pre-wrap px-5 py-4 font-mono text-sm leading-7 text-slate-800">{introspection.agent.instructions || "No instructions returned."}</pre>
      </Panel>
    );
  } else if (section === "configuration") {
    sectionContent = <ConfigurationSection configuration={configuration} error={props.configurationError ?? null} />;
  } else if (section === "tools") {
    sectionContent = <Panel><PanelHeader title="Tools" /><DataTable columns={["Name", "Side effect", "Description"]} rows={toolRows(introspection)} emptyText="No tools returned." /></Panel>;
  } else if (section === "knowledge") {
    sectionContent = <Panel><PanelHeader title="Knowledge sources" /><DataTable columns={["Name"]} rows={knowledgeRows(introspection)} emptyText="No knowledge sources returned." /></Panel>;
  } else if (section === "widgets") {
    sectionContent = <Panel><PanelHeader title="Widgets" /><DataTable columns={["Kind"]} rows={widgetRows(introspection)} emptyText="No widgets returned." /></Panel>;
  } else {
    sectionContent = <JourneyDetail journey={activeJourney} />;
  }

  return (
    <section className={`grid min-h-[calc(100vh-5rem)] ${sidebarCollapsed ? "grid-cols-[64px_minmax(0,1fr)]" : "grid-cols-[300px_minmax(0,1fr)]"} max-xl:grid-cols-1`}>
      <aside className="border-r border-slate-200 bg-slate-50 p-5 max-xl:border-b max-xl:border-r-0">
        <div className={`mb-5 flex items-start gap-3 ${sidebarCollapsed ? "justify-center" : "justify-between"}`}>
          <div className={sidebarCollapsed ? "hidden" : ""}>
            <strong className="block text-slate-950">{introspection.agent.id}</strong>
            <span className="text-sm text-slate-500">
              {introspection.agent.journeyCount} journeys / {introspection.agent.toolCount} tools
            </span>
          </div>
          <button
            className="grid size-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 max-xl:hidden"
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
        <JourneyGroup collapsed={sidebarCollapsed} title="State Machine Journeys" icon="state-machine" journeys={stateMachines} activeJourney={activeJourney} setSection={setSection} setActiveJourneyId={setActiveJourneyId} />
        <JourneyGroup collapsed={sidebarCollapsed} title="Delegation Journeys" icon="delegation" journeys={delegations} activeJourney={activeJourney} setSection={setSection} setActiveJourneyId={setActiveJourneyId} />
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

function ConfigurationSection(props: {
  configuration: StudioConfigurationSurface | null;
  error?: string | null;
}) {
  if (!props.configuration) {
    return (
      <EmptyState
        title="Configuration surface"
        text={props.error ?? "No configuration surface returned by the Studio Adapter."}
      />
    );
  }
  const { configuration } = props;
  return (
    <div className="grid gap-4">
      <Panel>
        <PanelHeader
          title="Channel sets"
          detail={`Captured ${formatDateTime(configuration.capturedAt)}`}
        />
        <DataTable
          columns={["Set", "State", "Channel IDs", "Channels", "Conversation continuity", "Metadata"]}
          rows={channelSetRows(configuration)}
          emptyText="No channel sets returned."
        />
      </Panel>
      <Panel>
        <PanelHeader
          title="Channels"
        />
        <DataTable
          columns={["ID", "Channel", "Audience", "State", "Sets", "Providers", "Capabilities", "Policies", "Metadata"]}
          rows={channelConfigurationRows(configuration)}
          emptyText="No channel configuration returned."
        />
      </Panel>
      <Panel>
        <PanelHeader title="Flow activation by channel" />
        <DataTable
          columns={["Channel", "Journey", "State", "Policies", "Providers", "Reason", "Metadata"]}
          rows={channelFlowRows(configuration)}
          emptyText="No per-channel flow activation returned."
        />
      </Panel>
      <Panel>
        <PanelHeader title="Outbound and handoff policy" />
        <DataTable
          columns={["Channel", "Policy", "State", "Providers / destinations", "Gate", "Policy IDs", "Metadata"]}
          rows={channelHandoffRows(configuration)}
          emptyText="No outbound or handoff policy returned."
        />
      </Panel>
      <Panel>
        <PanelHeader title="SDK policy details" />
        <DataTable
          columns={["Channel", "Policy", "Owner", "Fields"]}
          rows={channelPolicyRows(configuration)}
          emptyText="No SDK policy details returned."
        />
      </Panel>
      <Panel>
        <PanelHeader title="Channel behavior" />
        <DataTable
          columns={["Channel", "Tone", "Max words", "Max chars", "Markdown", "Widgets", "Draft first", "Other policy"]}
          rows={channelBehaviorRows(configuration)}
          emptyText="No channel behavior policy returned."
        />
      </Panel>
      <Panel>
        <PanelHeader title="Provider packages" />
        <DataTable
          columns={["Provider", "Package", "Category", "Trust", "Coverage", "Directions", "Audience", "Capabilities", "Credentials", "Privacy", "Limitations", "Maintainers", "Metadata"]}
          rows={providerPackageRows(configuration)}
          emptyText="No provider packages returned."
        />
      </Panel>
      <Panel>
        <PanelHeader title="Capability availability" />
        <DataTable
          columns={["Provider", "Capability", "Status", "Enabled for", "Blockers", "Metadata"]}
          rows={capabilityAvailabilityRows(configuration)}
          emptyText="No capability availability returned."
        />
      </Panel>
      <Panel>
        <PanelHeader title="Provider readiness" />
        <DataTable
          columns={["Provider", "Status", "Live", "Sandbox", "Source", "Checked", "Blockers", "Actions", "Metadata"]}
          rows={providerReadinessRows(configuration)}
          emptyText="No provider readiness returned."
        />
      </Panel>
      <Panel>
        <PanelHeader title="Credential status" />
        <DataTable
          columns={["Provider", "Requirement", "State", "Scopes", "Expires", "Message"]}
          rows={providerCredentialRows(configuration)}
          emptyText="No credential status returned."
        />
      </Panel>
    </div>
  );
}

function JourneyGroup(props: {
  collapsed: boolean;
  title: string;
  icon: "state-machine" | "delegation";
  journeys: StudioJourneySummary[];
  activeJourney: StudioJourneySummary | null;
  setSection: (section: AgentSection) => void;
  setActiveJourneyId: (id: string) => void;
}) {
  const Icon = props.icon === "state-machine" ? Workflow : Bot;
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
          <PanelHeader title="Delegation Journey configuration" detail={journey.condition} />
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
        <PanelHeader title="State Machine Journey graph" detail={journey.condition} />
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
    configuration: "Configuration",
    journeys: "Journeys",
    tools: "Tools",
    knowledge: "Knowledge",
    widgets: "Widgets",
  }[section];
}
