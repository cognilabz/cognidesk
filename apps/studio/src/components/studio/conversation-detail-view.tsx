import Link from "next/link";
import { ArrowLeft, GitBranch, ListChecks, MessageSquare, RadioTower } from "lucide-react";
import type { StudioConversationRow } from "./types";
import { formatDateTime } from "./format";
import { DataTable, Metric, PageHeader, Panel, PanelHeader } from "./ui";

export function ConversationDetailView(props: {
  conversationId: string;
  conversation: StudioConversationRow | null;
  events: unknown[];
  eventsError: string | null;
  snapshot: unknown;
  snapshotError: string | null;
}) {
  const eventRows = eventTableRows(props.events);
  const transcriptRows = messageTranscriptRows(props.events);
  const snapshot = snapshotRecord(props.snapshot);
  const activeJourneyId = props.conversation?.activeJourneyId ?? stringField(snapshot, "activeJourneyId") ?? "-";
  const lifecycle = props.conversation?.lifecycle ?? stringField(snapshot, "lifecycle") ?? "unknown";
  const activeStateIds = props.conversation?.activeStateIds.length
    ? props.conversation.activeStateIds
    : stringArrayField(snapshot, "activeStateIds");
  const traceIds = props.conversation?.traceIds ?? traceIdsFromEvents(props.events);

  return (
    <section>
      <PageHeader
        eyebrow="Conversation session"
        title={props.conversation?.customerLabel ?? `Conversation ${props.conversationId.slice(0, 8)}`}
        description={props.conversation?.summary ?? "Runtime events and snapshot for the selected conversation."}
        actions={(
          <Link className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 transition hover:bg-slate-50" href="/">
            <ArrowLeft size={16} />
            Overview
          </Link>
        )}
      />
      <div className="space-y-6 px-8 py-6">
        <section className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
          <Metric label="State" value={labelLifecycle(lifecycle)} detail={props.conversation?.updatedAt ? `Updated ${formatDateTime(props.conversation.updatedAt)}` : "Live snapshot"} tone={lifecycle === "handoff" ? "red" : lifecycle === "active" ? "blue" : "green"} />
          <Metric label="Journey" value={activeJourneyId} detail={activeStateIds.length ? `${activeStateIds.length} active states` : "No active state"} tone="violet" />
          <Metric label="Messages" value={String(transcriptRows.length)} detail={props.eventsError ?? `${props.events.length} runtime events`} tone="slate" />
          <Metric label="Traces" value={String(traceIds.length)} detail={traceIds[0] ?? "No trace IDs"} tone="blue" />
        </section>

        <Panel>
          <PanelHeader title="Messages" detail={transcriptRows.length ? "Conversation transcript" : props.eventsError ?? "No message events captured"} />
          <div className="grid gap-3 p-5">
            {transcriptRows.length ? transcriptRows.map((message) => (
              <article
                className={`max-w-4xl rounded-lg border bg-white p-4 ${
                  message.role === "user" || message.role === "customer"
                    ? "border-blue-300"
                    : "border-slate-200"
                }`}
                key={message.key}
              >
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-medium uppercase text-slate-700">{message.role}</span>
                  <span>{message.createdAt}</span>
                  <span>offset {message.offset}</span>
                  {message.traceId !== "-" ? <span className="truncate">trace {message.traceId}</span> : null}
                </div>
                <p className="whitespace-pre-wrap break-words text-sm leading-6 text-slate-800 [overflow-wrap:anywhere]">{message.text}</p>
              </article>
            )) : (
              <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
                No customer or assistant messages were found in the runtime events.
              </div>
            )}
          </div>
        </Panel>

        <section className="grid grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] gap-4 max-xl:grid-cols-1">
          <Panel>
            <PanelHeader title="Session facts" />
            <DataTable
              columns={["Field", "Value"]}
              rows={[
                ["Conversation ID", props.conversationId],
                ["Agent", props.conversation?.agentId ?? stringField(snapshot, "agentId") ?? "-"],
                ["Lifecycle", labelLifecycle(lifecycle)],
                ["Active journey", activeJourneyId],
                ["Active states", activeStateIds.join(", ") || "-"],
                ["Trace IDs", traceIds.join(", ") || "-"],
                ["Created", props.conversation?.createdAt ? formatDateTime(props.conversation.createdAt) : "-"],
                ["Updated", props.conversation?.updatedAt ? formatDateTime(props.conversation.updatedAt) : stringField(snapshot, "updatedAt") ?? "-"],
              ]}
            />
          </Panel>
          <Panel>
            <PanelHeader title="Runtime snapshot" {...(props.snapshotError ? { detail: props.snapshotError } : {})} />
            <pre className="max-h-[34rem] overflow-auto p-5 text-xs leading-6 text-slate-700">{formatJson(props.snapshot)}</pre>
          </Panel>
        </section>

        <Panel>
          <PanelHeader title="Event timeline" detail={props.eventsError ?? `${eventRows.length} events`} />
          <div className="max-w-full overflow-x-auto overscroll-x-contain">
            <table className="w-full table-fixed border-collapse text-sm" style={{ minWidth: 980 }}>
              <thead>
                <tr>
                  {["Offset", "Time", "Kind", "Signal", "Trace", "Summary"].map((column) => (
                    <th className="border-b border-slate-200 px-4 py-3 text-left font-medium text-slate-500" key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {eventRows.length ? eventRows.map((event) => (
                  <tr key={event.key}>
                    <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">{event.offset}</td>
                    <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">{event.createdAt}</td>
                    <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">
                      <span className="inline-flex items-center gap-2">
                        {eventIcon(event.type)}
                        <span className="break-words">{event.type}</span>
                      </span>
                    </td>
                    <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">{event.signal}</td>
                    <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">
                      <span className="block max-w-[14rem] truncate" title={event.traceId}>{event.traceId}</span>
                    </td>
                    <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">
                      <span className="block max-w-[38rem] whitespace-normal break-words leading-6 [overflow-wrap:anywhere]" title={event.summary}>
                        {event.summary}
                      </span>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td className="px-4 py-8 text-center text-slate-500" colSpan={6}>
                      {props.eventsError ?? "No runtime events captured for this conversation."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </section>
  );
}

type EventRow = {
  key: string;
  offset: string;
  createdAt: string;
  type: string;
  signal: string;
  traceId: string;
  summary: string;
};

type TranscriptRow = {
  key: string;
  role: string;
  offset: string;
  createdAt: string;
  traceId: string;
  text: string;
};

export function messageTranscriptRows(events: unknown[]): TranscriptRow[] {
  const rows: TranscriptRow[] = [];
  let pendingRole: string | undefined;
  for (const [index, event] of events.entries()) {
    const record = asRecord(event);
    const data = asRecord(record?.data);
    const type = stringField(record, "type");
    if (type === "message.started") {
      pendingRole = stringField(data, "role") ?? pendingRole;
      continue;
    }
    if (type !== "message.completed") continue;
    const text = stringField(data, "text");
    if (!text) continue;
    rows.push(transcriptRow(record, pendingRole ?? stringField(data, "role") ?? "message", text, index));
    pendingRole = undefined;
  }
  if (rows.length) return rows;
  return channelTranscriptRows(events);
}

function channelTranscriptRows(events: unknown[]): TranscriptRow[] {
  const rows: TranscriptRow[] = [];
  for (const [index, event] of events.entries()) {
    const record = asRecord(event);
    const data = asRecord(record?.data);
    const type = stringField(record, "type");
    const text = stringField(data, "text") ?? stringField(asRecord(data?.payload), "text");
    if (!text) continue;
    if (type === "channel.received" || type === "channel.event.received") {
      rows.push(transcriptRow(record, "customer", text, index));
    }
    if (type === "channel.sent") {
      rows.push(transcriptRow(record, "assistant", text, index));
    }
  }
  return rows;
}

function transcriptRow(record: Record<string, unknown> | null, role: string, text: string, index: number): TranscriptRow {
  return {
    key: stringField(record, "id") ?? `${role}-${index}`,
    role,
    offset: numberField(record, "offset")?.toString() ?? "-",
    createdAt: stringField(record, "createdAt") ? formatDateTime(stringField(record, "createdAt") as string) : "-",
    traceId: stringField(asRecord(record?.telemetry), "traceId") ?? "-",
    text,
  };
}

function eventTableRows(events: unknown[]): EventRow[] {
  return events.map((event, index) => {
    const record = asRecord(event);
    const data = asRecord(record?.data);
    const type = stringField(record, "type") ?? "-";
    return {
      key: stringField(record, "id") ?? `${type}-${index}`,
      offset: numberField(record, "offset")?.toString() ?? "-",
      createdAt: stringField(record, "createdAt") ? formatDateTime(stringField(record, "createdAt") as string) : "-",
      type,
      signal: eventSignal(type, data),
      traceId: stringField(asRecord(record?.telemetry), "traceId") ?? "-",
      summary: eventSummary(type, data),
    };
  });
}

function eventSignal(type: string, data: Record<string, unknown> | null) {
  return stringField(data, "role")
    ?? stringField(data, "speaker")
    ?? stringField(data, "journeyId")
    ?? stringField(data, "stateId")
    ?? stringField(data, "toolName")
    ?? stringField(data, "actionName")
    ?? stringField(asRecord(data?.channel), "channel")
    ?? type.split(".")[0]
    ?? "-";
}

function eventSummary(type: string, data: Record<string, unknown> | null) {
  const text = stringField(data, "text")
    ?? stringField(data, "textDelta")
    ?? stringField(data, "partialText")
    ?? stringField(data, "message")
    ?? stringField(data, "reason")
    ?? stringField(data, "error");
  if (text) return truncate(text, 260);
  if (type === "message.generated") {
    const textLength = numberField(data, "textLength");
    const toolCallCount = numberField(data, "toolCallCount");
    return [`${textLength ?? 0} chars`, toolCallCount ? `${toolCallCount} tool calls` : ""].filter(Boolean).join(", ");
  }
  if (type === "tool.completed" || type === "action.completed") {
    const success = data?.success;
    return success === undefined ? "Completed" : success ? "Completed successfully" : "Completed with error";
  }
  return truncate(formatJson(data), 260);
}

function eventIcon(type: string) {
  if (type.startsWith("message.")) return <MessageSquare className="size-4 text-blue-500" aria-hidden="true" />;
  if (type.startsWith("journey.")) return <GitBranch className="size-4 text-violet-500" aria-hidden="true" />;
  if (type.startsWith("voice.") || type.startsWith("channel.")) return <RadioTower className="size-4 text-teal-600" aria-hidden="true" />;
  return <ListChecks className="size-4 text-slate-400" aria-hidden="true" />;
}

function traceIdsFromEvents(events: unknown[]) {
  return Array.from(new Set(events.map((event) => stringField(asRecord(asRecord(event)?.telemetry), "traceId")).filter((traceId): traceId is string => Boolean(traceId))));
}

function snapshotRecord(snapshot: unknown) {
  return asRecord(asRecord(snapshot)?.snapshot ?? snapshot);
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : null;
}

function stringField(record: Record<string, unknown> | null, key: string) {
  const value = record?.[key];
  return typeof value === "string" && value.trim() ? value : undefined;
}

function numberField(record: Record<string, unknown> | null, key: string) {
  const value = record?.[key];
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

function stringArrayField(record: Record<string, unknown> | null, key: string) {
  const value = record?.[key];
  return Array.isArray(value) ? value.filter((entry): entry is string => typeof entry === "string") : [];
}

function formatJson(value: unknown) {
  if (value === undefined) return "-";
  return JSON.stringify(value, null, 2) ?? "-";
}

function truncate(value: string, maxLength: number) {
  return value.length > maxLength ? `${value.slice(0, maxLength - 1)}...` : value;
}

function labelLifecycle(value: string) {
  return value[0]?.toUpperCase() + value.slice(1);
}
