"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
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
  channelWidgetRows,
  integrationLifecycleRows,
  journeyChannelActivationRows,
  providerCredentialRows,
  providerPackageRows,
  providerReadinessRows,
  toolRows,
  widgetRows,
  type JourneyChannelActivationRow,
} from "./data";
import { formatDateTime } from "./format";
import { Button, DataTable, EmptyState, PageHeader, Panel, PanelHeader } from "./ui";

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

type KnowledgeSourceRecord = StudioAgentIntrospection["knowledge"][number] & Record<string, unknown>;

export function AgentsView(props: {
  introspection: StudioAgentIntrospection | null;
  configuration: StudioConfigurationSurface | null;
  error: string | null;
  configurationError?: string | null;
}) {
  const { error, introspection } = props;
  const [section, setSection] = useState<AgentSection>("overview");
  const [activeJourneyId, setActiveJourneyId] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const configuration = props.configuration ?? introspection?.configurationSurface ?? null;
  const stateMachines = introspection?.journeys.filter((journey) => journey.kind === "stateMachine") ?? [];
  const delegations = introspection?.journeys.filter((journey) => journey.kind === "delegation") ?? [];
  const activeJourney = useMemo(() => {
    if (!introspection) return null;
    return introspection.journeys.find((journey) => journey.id === activeJourneyId) ?? null;
  }, [activeJourneyId, introspection]);

  if (!introspection && !configuration) {
    return <section className="p-8"><EmptyState title="Agent configuration" text={error ?? "Waiting for Studio Adapter data."} /></section>;
  }

  if (!introspection) {
    return (
      <section>
        <PageHeader eyebrow="Agent builder" title="Configuration" />
        <div className="max-w-full overflow-hidden p-8">
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
    sectionContent = <KnowledgeSection introspection={introspection} />;
  } else if (section === "widgets") {
    sectionContent = <WidgetsSection introspection={introspection} configuration={configuration} />;
  } else {
    sectionContent = <JourneyDetail journey={activeJourney} configuration={configuration} />;
  }

  return (
    <section className={`grid min-h-[calc(100vh-5rem)] overflow-hidden ${sidebarCollapsed ? "grid-cols-[64px_minmax(0,1fr)]" : "grid-cols-[300px_minmax(0,1fr)]"} max-xl:grid-cols-1`}>
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
        {section === "journeys" ? (
          <>
            <JourneyGroup collapsed={sidebarCollapsed} title="State Machine Journeys" icon="state-machine" journeys={stateMachines} activeJourney={activeJourney} setSection={setSection} setActiveJourneyId={setActiveJourneyId} />
            <JourneyGroup collapsed={sidebarCollapsed} title="Delegation Journeys" icon="delegation" journeys={delegations} activeJourney={activeJourney} setSection={setSection} setActiveJourneyId={setActiveJourneyId} />
          </>
        ) : null}
      </aside>
      <section className="min-w-0 overflow-hidden">
        <PageHeader
          eyebrow="Agent builder"
          title={section === "journeys" ? activeJourney?.id ?? "Select a journey" : titleForSection(section)}
        />
        <div className="max-w-full overflow-hidden p-8">{sectionContent}</div>
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
    <div className="grid min-w-0 gap-4">
      <Panel>
        <PanelHeader
          title="Channel sets"
          detail={`Captured ${formatDateTime(configuration.capturedAt)}`}
        />
        <DataTable
          columns={["Set", "State", "Channel IDs", "Channel kinds", "Conversation continuity", "Metadata"]}
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
        <PanelHeader
          title="Integration readiness"
          detail="Catalog coverage, target setup, credentials, and blockers."
        />
        <DataTable
          columns={["Integration", "ID", "Category", "Catalog", "Target", "Readiness", "Status", "Credentials", "Blockers"]}
          rows={integrationLifecycleRows(configuration)}
          emptyText="No integration readiness metadata returned."
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

function WidgetsSection(props: {
  introspection: StudioAgentIntrospection;
  configuration: StudioConfigurationSurface | null;
}) {
  return (
    <div className="grid min-w-0 gap-4">
      <Panel>
        <PanelHeader
          title="Registered widgets"
          detail={`${props.introspection.agent.widgetCount} agent-level widgets reported`}
        />
        <DataTable
          columns={["Kind"]}
          rows={widgetRows(props.introspection)}
          emptyText="No registered agent widgets were returned by introspection."
        />
      </Panel>
      <Panel>
        <PanelHeader
          title="Channel widget policy"
          detail="Whether each channel allows widget UI in assistant responses."
        />
        <DataTable
          columns={["Channel", "Kind", "State", "Widgets", "Markdown", "Draft first", "Policy fields"]}
          rows={channelWidgetRows(props.configuration)}
          emptyText="No channel widget policy returned."
        />
      </Panel>
    </div>
  );
}

function KnowledgeSection({ introspection }: { introspection: StudioAgentIntrospection }) {
  const sources = useMemo(() => collectKnowledgeSources(introspection), [introspection]);
  const [activeSourceName, setActiveSourceName] = useState("");
  const activeSource = sources.find((source) => source.name === activeSourceName) ?? sources[0] ?? null;

  if (!activeSource) {
    return (
      <EmptyState
        title="Knowledge sources"
        text={knowledgeEmptyText(introspection)}
      />
    );
  }

  const usageRows = knowledgeUsageRows(introspection, activeSource.name);
  const documentRows = knowledgeDocumentRows(activeSource);
  const detailRows = knowledgeDetailRows(activeSource);
  const documentCount = knowledgeDocumentCount(activeSource);

  return (
    <div className="grid min-w-0 gap-4 xl:grid-cols-[280px_minmax(0,1fr)]">
      <Panel>
        <PanelHeader title="Knowledge sources" detail={`${sources.length} available`} />
        <div className="grid gap-1 p-3">
          {sources.map((source) => {
            const usageCount = knowledgeUsageRows(introspection, source.name).length;
            const sourceDocumentCount = knowledgeDocumentCount(source);
            const active = activeSource.name === source.name;
            return (
              <button
                className={`min-w-0 rounded-lg px-3 py-2 text-left text-sm ${active ? "bg-slate-100 text-slate-950" : "text-slate-600 hover:bg-slate-50"}`}
                key={source.name}
                type="button"
                onClick={() => setActiveSourceName(source.name)}
                title={source.name}
              >
                <span className="block truncate font-medium">{source.name}</span>
                <span className="mt-1 block truncate text-xs text-slate-500">
                  {sourceDocumentCount === null ? `${usageCount} journeys` : `${sourceDocumentCount} docs / ${usageCount} journeys`}
                </span>
              </button>
            );
          })}
        </div>
      </Panel>
      <div className="grid min-w-0 gap-4">
        <Panel>
          <PanelHeader
            title={activeSource.name}
            detail={documentCount === null ? "Source-level details" : `${documentCount} documents reported`}
          />
          <DataTable
            columns={["Field", "Value"]}
            rows={detailRows}
            emptyText="No source details returned."
          />
        </Panel>
        <Panel>
          <PanelHeader title="Documents and linked sources" />
          <DataTable
            columns={["Type", "Name", "ID", "Metadata", "Content"]}
            rows={documentRows}
            emptyText="No document or linked source details were returned for this knowledge source."
          />
        </Panel>
        <Panel>
          <PanelHeader title="Journey usage" />
          <DataTable
            columns={["Journey", "Kind", "Condition"]}
            rows={usageRows}
            emptyText="No journeys reference this knowledge source."
          />
        </Panel>
      </div>
    </div>
  );
}

function collectKnowledgeSources(introspection: StudioAgentIntrospection) {
  const byName = new Map<string, KnowledgeSourceRecord>();
  const addSource = (source: StudioAgentIntrospection["knowledge"][number]) => {
    const previous = byName.get(source.name);
    byName.set(source.name, { ...(previous ?? {}), ...(source as KnowledgeSourceRecord), name: source.name });
  };

  introspection.knowledge.forEach(addSource);
  introspection.journeys.forEach((journey) => journey.knowledge.forEach(addSource));

  return Array.from(byName.values()).sort((left, right) => left.name.localeCompare(right.name));
}

function knowledgeEmptyText(introspection: StudioAgentIntrospection) {
  const journeyKnowledgeCount = introspection.journeys.reduce((count, journey) => count + journey.knowledge.length, 0);
  if (introspection.agent.knowledgeCount > 0 || journeyKnowledgeCount > 0) {
    return "The adapter reported knowledge usage, but did not include source records to inspect.";
  }
  return "Only agent policy and configuration data is available from this target. No knowledge source, document, or metadata records were returned.";
}

function knowledgeUsageRows(introspection: StudioAgentIntrospection, sourceName: string) {
  return introspection.journeys
    .filter((journey) => journey.knowledge.some((source) => source.name === sourceName))
    .map((journey) => [
      journey.id,
      journey.kind === "delegation" ? "Delegation" : "State machine",
      journey.condition || "-",
    ]);
}

function knowledgeDetailRows(source: KnowledgeSourceRecord) {
  const rows: string[][] = [["Name", source.name]];
  const optionalFields: Array<[string, string[]]> = [
    ["Description", ["description", "summary"]],
    ["Kind", ["kind", "type", "sourceType"]],
    ["Provider", ["provider", "providerPackageId"]],
    ["Status", ["status", "state"]],
  ];

  optionalFields.forEach(([label, keys]) => {
    const value = firstString(source, keys);
    if (value) rows.push([label, value]);
  });

  const documentCount = knowledgeDocumentCount(source);
  if (documentCount !== null) rows.push(["Documents", String(documentCount)]);

  const linkedSourceCount = knowledgeLinkedSourceCount(source);
  if (linkedSourceCount !== null) rows.push(["Linked sources", String(linkedSourceCount)]);

  const metadata = recordValue(source.metadata);
  if (metadata) rows.push(["Metadata", summarizeRecord(metadata)]);

  for (const [key, value] of Object.entries(source)) {
    if (knowledgeKnownKeys.has(key) || value === undefined || Array.isArray(value) || recordValue(value)) continue;
    rows.push([humanizeKey(key), summarizeValue(value)]);
    if (rows.length >= 12) break;
  }

  if (rows.length === 1) rows.push(["Detail level", "Only the source name was returned by introspection."]);
  return rows;
}

function knowledgeDocumentRows(source: KnowledgeSourceRecord) {
  return [
    ...knowledgeItems(source, ["documents", "documentSources", "sourceDocuments", "items", "entries"])
      .map((item, index) => knowledgeItemRow("Document", item, index)),
    ...knowledgeItems(source, ["sources", "sourceRefs", "linkedSources"])
      .map((item, index) => knowledgeItemRow("Source", item, index)),
  ];
}

function knowledgeDocumentCount(source: KnowledgeSourceRecord) {
  return firstNumber(source, ["documentCount", "documentsCount", "itemCount", "entryCount", "count"])
    ?? firstNumber(recordValue(source.metadata), ["documentCount", "documentsCount", "itemCount", "entryCount", "count"])
    ?? countItems(source, ["documents", "documentSources", "sourceDocuments", "items", "entries"]);
}

function knowledgeLinkedSourceCount(source: KnowledgeSourceRecord) {
  return firstNumber(source, ["sourceCount", "sourcesCount", "linkedSourceCount"])
    ?? firstNumber(recordValue(source.metadata), ["sourceCount", "sourcesCount", "linkedSourceCount"])
    ?? countItems(source, ["sources", "sourceRefs", "linkedSources"]);
}

function knowledgeItems(source: KnowledgeSourceRecord, keys: string[]) {
  for (const key of keys) {
    const value = source[key];
    if (Array.isArray(value)) return value;
  }
  return [];
}

function countItems(source: KnowledgeSourceRecord, keys: string[]) {
  const items = knowledgeItems(source, keys);
  return items.length > 0 ? items.length : null;
}

function knowledgeItemRow(type: string, item: unknown, index: number) {
  const record = recordValue(item);
  if (!record) return [type, summarizeValue(item) || `${type} ${index + 1}`, "-", "-", "-"];

  const name = firstString(record, ["name", "title", "label", "sourceName", "path", "url"])
    ?? firstString(record, ["id", "key", "slug"])
    ?? `${type} ${index + 1}`;
  const id = firstString(record, ["id", "key", "slug"]) ?? "-";
  const metadata = recordValue(record.metadata);
  const content = firstString(record, ["content", "contentSnippet", "snippet"]);
  return [
    type,
    name,
    id,
    metadata ? summarizeRecord(metadata) : summarizeInlineMetadata(record),
    content ? summarizeSnippet(content) : "-",
  ];
}

const knowledgeKnownKeys = new Set([
  "name",
  "title",
  "label",
  "description",
  "summary",
  "content",
  "contentSnippet",
  "snippet",
  "kind",
  "type",
  "sourceType",
  "provider",
  "providerPackageId",
  "status",
  "state",
  "metadata",
  "documents",
  "documentSources",
  "sourceDocuments",
  "items",
  "entries",
  "sources",
  "sourceRefs",
  "linkedSources",
  "documentCount",
  "documentsCount",
  "itemCount",
  "entryCount",
  "sourceCount",
  "sourcesCount",
  "linkedSourceCount",
  "count",
]);

function firstString(record: Record<string, unknown> | null, keys: string[]) {
  if (!record) return null;
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) return value;
    if (typeof value === "number" || typeof value === "boolean") return String(value);
  }
  return null;
}

function firstNumber(record: Record<string, unknown> | null, keys: string[]) {
  if (!record) return null;
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "number" && Number.isFinite(value)) return value;
    if (typeof value === "string") {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) return parsed;
    }
  }
  return null;
}

function recordValue(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : null;
}

function summarizeRecord(record: Record<string, unknown>) {
  const entries = Object.entries(record).filter(([, value]) => value !== undefined);
  return entries.length > 0
    ? entries.slice(0, 6).map(([key, value]) => `${humanizeKey(key)}: ${summarizeValue(value)}`).join(", ")
    : "{}";
}

function summarizeInlineMetadata(record: Record<string, unknown>) {
  const metadata = Object.fromEntries(
    Object.entries(record).filter(([key, value]) => !knowledgeKnownKeys.has(key) && value !== undefined)
  );
  return Object.keys(metadata).length > 0 ? summarizeRecord(metadata) : "-";
}

function summarizeValue(value: unknown) {
  if (value === null || value === undefined || value === "") return "-";
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    const preview = value
      .filter((item) => ["string", "number", "boolean"].includes(typeof item))
      .slice(0, 3)
      .map(String);
    return preview.length > 0 ? `${preview.join(", ")}${value.length > preview.length ? ` +${value.length - preview.length}` : ""}` : `${value.length} items`;
  }
  const record = recordValue(value);
  return record ? `${Object.keys(record).length} fields` : String(value);
}

function summarizeSnippet(value: string) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= 260) return normalized;
  return `${normalized.slice(0, 257).trimEnd()}...`;
}

function humanizeKey(key: string) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]/g, " ")
    .replace(/^\w/, (letter) => letter.toUpperCase());
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
    <div className="mt-6 grid min-w-0 gap-1">
      <span className={`px-1 py-2 text-xs text-slate-500 ${props.collapsed ? "hidden" : ""}`}>{props.title}</span>
      {props.journeys.map((journey) => (
        <button
          className={`flex min-h-10 w-full min-w-0 max-w-full items-center gap-2 overflow-hidden rounded-lg px-3 text-left text-sm ${
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
          <Icon className="shrink-0" size={15} />
          <span className={`min-w-0 flex-1 truncate ${props.collapsed ? "hidden" : ""}`}>{journey.id}</span>
        </button>
      ))}
    </div>
  );
}

function JourneyDetail({ journey, configuration }: { journey: StudioJourneySummary | null; configuration: StudioConfigurationSurface | null }) {
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
        <JourneyChannelActivationPanel journey={journey} configuration={configuration} />
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
      <JourneyChannelActivationPanel journey={journey} configuration={configuration} />
      <Panel>
        <PanelHeader title="Examples" />
        <pre className="whitespace-pre-wrap px-5 py-4 font-mono text-sm leading-7 text-slate-800">{journey.examples.join("\n") || "No examples returned."}</pre>
      </Panel>
    </div>
  );
}

function JourneyChannelActivationPanel(props: {
  journey: StudioJourneySummary;
  configuration: StudioConfigurationSurface | null;
}) {
  const router = useRouter();
  const [isRefreshing, startRefresh] = useTransition();
  const [busyChannelId, setBusyChannelId] = useState<string | null>(null);
  const [status, setStatus] = useState<{ tone: "success" | "error"; message: string } | null>(null);
  const rows = useMemo(
    () => journeyChannelActivationRows(props.configuration, props.journey.id),
    [props.configuration, props.journey.id],
  );

  async function toggleJourneyChannel(row: JourneyChannelActivationRow) {
    if (row.activation === "channel-disabled") return;
    const nextEnabled = row.activation !== "explicit-enabled";
    setBusyChannelId(row.channelId);
    setStatus(null);
    try {
      const response = await fetch("/api/studio/configuration/changes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          reason: `${nextEnabled ? "Enable" : "Disable"} journey '${props.journey.id}' for channel '${row.channelId}'.`,
          operations: [{
            op: "set-flow-enabled",
            channelId: row.channelId,
            journeyId: props.journey.id,
            value: nextEnabled,
          }],
        }),
      });
      const payload = await response.json() as { message?: string; error?: string; status?: string; accepted?: boolean; applied?: boolean };
      if (!response.ok) {
        throw new Error(payload.message ?? payload.error ?? `Configuration change failed with ${response.status}.`);
      }
      setStatus({
        tone: "success",
        message: payload.message ?? (payload.applied ? "Configuration change applied." : payload.accepted ? "Configuration change accepted." : "Configuration change submitted."),
      });
      startRefresh(() => router.refresh());
    } catch (error) {
      setStatus({
        tone: "error",
        message: error instanceof Error ? error.message : "Configuration change failed.",
      });
    } finally {
      setBusyChannelId(null);
    }
  }

  return (
    <Panel>
      <PanelHeader
        title="Channel activation"
        detail="Journey availability and widget policy by channel."
        actions={status ? (
          <span className={`max-w-md text-right text-xs font-medium ${status.tone === "success" ? "text-emerald-700" : "text-rose-700"}`}>
            {status.message}
          </span>
        ) : null}
      />
      {rows.length ? (
        <div className="max-w-full overflow-x-auto overscroll-x-contain">
          <table className="w-full min-w-[920px] table-fixed border-collapse text-sm">
            <thead>
              <tr>
                {["Channel", "Kind", "Channel state", "Journey", "Widgets", "Providers", "Policies", "Reason", "Action"].map((column) => (
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-medium text-slate-500" key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={`${props.journey.id}-${row.channelId}`}>
                  <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">
                    <span className="block break-words font-medium text-slate-950">{row.channelId}</span>
                  </td>
                  <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">{row.channel}</td>
                  <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">{row.channelEnabled ? "Enabled" : "Disabled"}</td>
                  <td className="border-b border-slate-100 px-4 py-3 align-top">
                    <ActivationBadge activation={row.activation} />
                  </td>
                  <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">{labelWidgetPolicy(row.widgets)}</td>
                  <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">
                    <span className="block break-words [overflow-wrap:anywhere]">{row.providerPackages}</span>
                  </td>
                  <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">
                    <span className="block break-words [overflow-wrap:anywhere]">{row.policyIds}</span>
                  </td>
                  <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">
                    <span className="block break-words [overflow-wrap:anywhere]">{row.reason}</span>
                  </td>
                  <td className="border-b border-slate-100 px-4 py-3 align-top">
                    <Button
                      className="min-w-24"
                      disabled={row.activation === "channel-disabled" || busyChannelId === row.channelId || isRefreshing}
                      {...(row.activation === "channel-disabled" ? { title: "Enable the channel before changing journey availability." } : {})}
                      onClick={() => void toggleJourneyChannel(row)}
                    >
                      {busyChannelId === row.channelId ? "Saving" : row.activation === "explicit-enabled" ? "Disable" : "Enable"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState title="No channel activation" text="No channel configuration surface was returned for this journey." />
      )}
    </Panel>
  );
}

function ActivationBadge(props: { activation: JourneyChannelActivationRow["activation"] }) {
  const labels = {
    "explicit-enabled": "Explicit enabled",
    "explicit-disabled": "Explicit disabled",
    "implicit-allowed": "Implicit allowed",
    "channel-disabled": "Channel disabled",
  };
  const classes = {
    "explicit-enabled": "border-emerald-200 bg-emerald-50 text-emerald-700",
    "explicit-disabled": "border-rose-200 bg-rose-50 text-rose-700",
    "implicit-allowed": "border-blue-200 bg-blue-50 text-blue-700",
    "channel-disabled": "border-slate-200 bg-slate-50 text-slate-500",
  };
  return (
    <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${classes[props.activation]}`}>
      {labels[props.activation]}
    </span>
  );
}

function labelWidgetPolicy(value: JourneyChannelActivationRow["widgets"]) {
  if (value === "enabled") return "Enabled";
  if (value === "disabled") return "Disabled";
  return "Not specified";
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
