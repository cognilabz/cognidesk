"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { ArrowLeft, ChevronDown, GitBranch, ListChecks, MessageSquare, SlidersHorizontal, X } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import type { StudioAgentIntrospection } from "@cognidesk/studio-contracts";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { JourneyGraph } from "../journey-graph";
import type { StudioConversationRow } from "./types";
import { formatDateTime } from "./format";
import { Metric, PageHeader, Panel, PanelHeader } from "./ui";

export function ConversationDetailView(props: {
  conversationId: string;
  conversation: StudioConversationRow | null;
  conversationError: string | null;
  events: unknown[];
  eventsError: string | null;
  introspection: StudioAgentIntrospection | null;
  introspectionError: string | null;
  snapshot: unknown;
  snapshotError: string | null;
}) {
  const snapshot = snapshotRecord(props.snapshot);
  const activeJourneyId = props.conversation?.activeJourneyId ?? stringField(snapshot, "activeJourneyId");
  const activeJourneyLabel = activeJourneyId ?? "-";
  const lifecycle = props.conversation?.lifecycle ?? stringField(snapshot, "lifecycle") ?? "unknown";
  const activeStateIds = props.conversation?.activeStateIds.length
    ? props.conversation.activeStateIds
    : stringArrayField(snapshot, "activeStateIds");
  const transcriptRows = useMemo(
    () => messageTranscriptRows(props.events),
    [props.events],
  );
  const traceIds = props.conversation?.traceIds ?? traceIdsFromEvents(props.events);
  const [detailMessageKey, setDetailMessageKey] = useState<string | null>(null);
  const detailMessage = detailMessageKey
    ? transcriptRows.find((message) => message.key === detailMessageKey) ?? null
    : null;
  const detailJourneyContext = detailJourneyContextForMessage(detailMessage);
  const detailJourneyId = detailJourneyContext.journeyId;
  const detailStateIds = detailJourneyContext.stateIds;
  const detailJourney = detailJourneyForContext(props.introspection?.journeys, detailJourneyContext);
  const detailMessageAnalysis = useMemo(
    () => bubbleAnalysisForMessage(props.events, detailMessage),
    [detailMessage, props.events],
  );
  const detailEventRows = useMemo(() => eventTableRows(props.events), [props.events]);
  const customerRelation = props.conversation?.customerRelation ?? null;

  return (
    <section>
      <PageHeader
        eyebrow="Conversation session"
        title={props.conversation?.customerLabel ?? `Conversation ${props.conversationId.slice(0, 8)}`}
        description={props.conversation?.summary ?? props.conversationError ?? "Runtime events and snapshot for the selected conversation."}
        actions={(
          <Link className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-800 transition hover:bg-slate-50" href="/">
            <ArrowLeft size={16} />
            Overview
          </Link>
        )}
      />
      <div className="space-y-6 px-8 py-6">
        <section className="grid grid-cols-4 gap-3 max-xl:grid-cols-2 max-md:grid-cols-1">
          <Metric label="State" value={labelLifecycle(lifecycle)} detail={props.conversationError ?? (props.conversation?.updatedAt ? `Updated ${formatDateTime(props.conversation.updatedAt)}` : "Live snapshot")} tone={lifecycle === "handoff" ? "red" : lifecycle === "active" ? "blue" : "green"} />
          <Metric label="Journey" value={activeJourneyLabel} detail={activeStateIds.length ? activeStateIds.join(", ") : "No active state"} tone="violet" />
          <Metric label="Messages" value={String(transcriptRows.length)} detail={props.eventsError ?? `${props.events.length} runtime events`} tone="slate" />
          <Metric label="Traces" value={String(traceIds.length)} detail={traceIds[0] ?? "No trace IDs"} tone="blue" />
        </section>

        {customerRelation ? <CustomerRelationPanel relation={customerRelation} /> : null}

        <Panel className="mx-auto w-full max-w-5xl">
          <PanelHeader
            title="Chat history"
            detail={transcriptRows.length ? "Click a bubble to inspect journey, trace, graph, and events." : props.eventsError ?? "No message events captured"}
          />
          <div className="grid gap-3 p-5" data-conversation-transcript-list="true">
            {transcriptRows.length ? transcriptRows.map((message) => {
              const userAligned = isUserTranscriptRole(message.role);
              return (
                <div
                  className={`flex w-full ${userAligned ? "justify-end" : "justify-start"}`}
                  data-conversation-message-align={userAligned ? "right" : "left"}
                  data-conversation-message-row="true"
                  key={message.key}
                >
                  <div
                    aria-label={`Open details for ${message.role} message at offset ${message.offset}`}
                    className={`group flex w-full cursor-pointer ${userAligned ? "justify-end" : "justify-start"} text-left focus:outline-none`}
                    data-conversation-message-bubble="true"
                    role="button"
                    tabIndex={0}
                    onClick={() => setDetailMessageKey(message.key)}
                    onKeyDown={(event) => {
                      if (event.key !== "Enter" && event.key !== " ") return;
                      event.preventDefault();
                      setDetailMessageKey(message.key);
                    }}
                    onMouseUp={() => setDetailMessageKey(message.key)}
                  >
                    <span
                      className={`block min-w-0 max-w-[min(76ch,100%)] rounded-lg border p-4 transition group-hover:-translate-y-px group-hover:shadow-sm group-focus-visible:ring-2 group-focus-visible:ring-blue-200 ${
                        userAligned
                          ? "border-blue-300 bg-blue-50 group-hover:bg-blue-100 dark:border-blue-500/70 dark:bg-blue-950/45 dark:group-hover:bg-blue-900/55"
                          : "border-slate-200 bg-white group-hover:bg-slate-50 dark:bg-slate-900/70 dark:group-hover:bg-slate-800/80"
                      }`}
                      data-conversation-message-bubble-surface="true"
                    >
                      <span className={`mb-2 flex flex-wrap items-center gap-2 text-xs ${userAligned ? "text-blue-700 dark:text-blue-200/80" : "text-slate-500"}`}>
                        <span className={`font-medium uppercase ${userAligned ? "text-blue-900 dark:text-blue-100" : "text-slate-700"}`}>{message.role}</span>
                        <span>{message.createdAt}</span>
                        <span>offset {message.offset}</span>
                        <JourneyContextBadge context={message} compact />
                        {message.traceId !== "-" ? <span className="truncate">trace {message.traceId}</span> : null}
                      </span>
                      <span className={`block whitespace-pre-wrap break-words text-sm leading-6 [overflow-wrap:anywhere] ${userAligned ? "text-slate-900 dark:text-blue-50" : "text-slate-800"}`}>{message.text}</span>
                    </span>
                  </div>
                </div>
              );
            }) : (
              <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
                No customer or assistant messages were found in the runtime events.
              </div>
            )}
          </div>
        </Panel>
      </div>
      <BubbleDetailDialog
        allEventRows={detailEventRows}
        key={detailMessage?.key ?? "conversation-bubble-dialog"}
        analysis={detailMessageAnalysis}
        eventCount={props.events.length}
        graphError={props.introspectionError}
        journey={detailJourney}
        message={detailMessage}
        onOpenChange={(open) => {
          if (!open) setDetailMessageKey(null);
        }}
        open={Boolean(detailMessage)}
        stateIds={detailStateIds}
        {...(detailJourneyId ? { journeyId: detailJourneyId } : {})}
      />
    </section>
  );
}

export type EventRow = {
  key: string;
  eventIndex: number;
  offset: string;
  createdAt: string;
  type: string;
  signal: string;
  traceId: string;
  summary: string;
};

export type TranscriptRow = {
  key: string;
  role: string;
  offset: string;
  createdAt: string;
  traceId: string;
  text: string;
  journeyId?: string;
  stateIds: string[];
};

export type JourneyStepContext = {
  journeyId?: string;
  stateIds: string[];
};

export type BubbleAnalysis = {
  relatedRows: EventRow[];
  traceRows: EventRow[];
  journeyRows: EventRow[];
  nearbyRows: EventRow[];
};

type BubbleDetailTab = "message" | "journey" | "events";
type EventTableMatchFilter = "related" | "trace" | "journey" | "unmatched";

export type EventTableFilterState = {
  query: string;
  types: string[];
  signals: string[];
  matches: EventTableMatchFilter[];
};

const emptyEventTableFilter: EventTableFilterState = {
  query: "",
  types: [],
  signals: [],
  matches: [],
};

const eventMatchFilterOptions: Array<EventHeaderFilterOption<EventTableMatchFilter>> = [
  { value: "related", label: "Bubble related", description: "Events directly tied to the selected bubble" },
  { value: "trace", label: "Trace", description: "Events in the same telemetry trace" },
  { value: "journey", label: "Journey", description: "Events in the related journey context" },
  { value: "unmatched", label: "Unmatched", description: "Events outside bubble, trace, and journey matches" },
];

export function messageTranscriptRows(events: unknown[]): TranscriptRow[] {
  const rows: TranscriptRow[] = [];
  const contexts = journeyContextsForEvents(events);
  let pendingRole: string | undefined;
  let pendingContext: JourneyStepContext | undefined;
  for (const [index, event] of events.entries()) {
    const record = asRecord(event);
    const data = asRecord(record?.data);
    const type = stringField(record, "type");
    if (type === "message.started") {
      pendingRole = stringField(data, "role") ?? pendingRole;
      pendingContext = contexts[index];
      continue;
    }
    if (type !== "message.completed") continue;
    const text = stringField(data, "text");
    if (!text) continue;
    rows.push(transcriptRow(record, pendingRole ?? stringField(data, "role") ?? "message", text, index, contextForRow(contexts[index], pendingContext)));
    pendingRole = undefined;
    pendingContext = undefined;
  }
  return dedupeTranscriptRows([...rows, ...channelTranscriptRows(events, contexts)])
    .sort((left, right) => numericOffset(left) - numericOffset(right));
}

export function detailJourneyContextForMessage(message: TranscriptRow | null): JourneyStepContext {
  if (!message?.journeyId || message.stateIds.length === 0) return { stateIds: [] };
  return {
    journeyId: message.journeyId,
    stateIds: message.stateIds,
  };
}

export function detailJourneyForContext(
  journeys: StudioAgentIntrospection["journeys"] | undefined,
  context: JourneyStepContext,
) {
  if (!context.journeyId || context.stateIds.length === 0) return null;

  const journey = journeys?.find((candidate) => candidate.id === context.journeyId) ?? null;
  if (!journey) return null;

  const graphStateIds = new Set(
    journey.graph.states.length > 0
      ? journey.graph.states.map((state) => state.id)
      : [journey.id],
  );
  return context.stateIds.some((stateId) => graphStateIds.has(stateId)) ? journey : null;
}

function channelTranscriptRows(events: unknown[], contexts: JourneyStepContext[]): TranscriptRow[] {
  const rows: TranscriptRow[] = [];
  for (const [index, event] of events.entries()) {
    const record = asRecord(event);
    const data = asRecord(record?.data);
    const type = stringField(record, "type");
    const text = stringField(data, "text") ?? stringField(asRecord(data?.payload), "text");
    if (!text) continue;
    if (type === "channel.received" || type === "channel.event.received") {
      rows.push(transcriptRow(record, "customer", text, index, contexts[index]));
    }
    if (type === "channel.sent") {
      rows.push(transcriptRow(record, "assistant", text, index, contexts[index]));
    }
  }
  return rows;
}

function transcriptRow(record: Record<string, unknown> | null, role: string, text: string, index: number, context?: JourneyStepContext): TranscriptRow {
  const row: TranscriptRow = {
    key: stringField(record, "id") ?? `${role}-${index}`,
    role,
    offset: numberField(record, "offset")?.toString() ?? "-",
    createdAt: stringField(record, "createdAt") ? formatDateTime(stringField(record, "createdAt") as string) : "-",
    traceId: stringField(asRecord(record?.telemetry), "traceId") ?? "-",
    text,
    stateIds: context?.stateIds ?? [],
  };
  if (context?.journeyId) row.journeyId = context.journeyId;
  return row;
}

function dedupeTranscriptRows(rows: TranscriptRow[]) {
  const uniqueRows: TranscriptRow[] = [];
  for (const row of rows) {
    const duplicate = uniqueRows.some((candidate) => {
      const sameRole = normalizeTranscriptRole(candidate.role) === normalizeTranscriptRole(row.role);
      const sameText = candidate.text.trim() === row.text.trim();
      if (!sameRole || !sameText) return false;
      if (candidate.traceId !== "-" && row.traceId !== "-") return candidate.traceId === row.traceId;
      return candidate.createdAt === row.createdAt;
    });
    if (!duplicate) uniqueRows.push(row);
  }
  return uniqueRows;
}

function normalizeTranscriptRole(role: string) {
  return role === "customer" ? "user" : role;
}

function isUserTranscriptRole(role: string) {
  return normalizeTranscriptRole(role) === "user";
}

function numericOffset(row: TranscriptRow) {
  const parsed = Number(row.offset);
  return Number.isFinite(parsed) ? parsed : Number.MAX_SAFE_INTEGER;
}

function BubbleDetailDialog(props: {
  analysis: BubbleAnalysis;
  allEventRows: EventRow[];
  eventCount: number;
  graphError: string | null;
  journey: StudioAgentIntrospection["journeys"][number] | null;
  journeyId?: string;
  message: TranscriptRow | null;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  stateIds: string[];
}) {
  const [activeTab, setActiveTab] = useState<BubbleDetailTab>(props.journey ? "journey" : "message");
  const modalScrollerRef = useRef<HTMLDivElement | null>(null);
  const [modalPortalContainer, setModalPortalContainer] = useState<HTMLDivElement | null>(null);
  const [eventFilterMenuOpen, setEventFilterMenuOpen] = useState(false);
  const setModalScroller = useCallback((node: HTMLDivElement | null) => {
    modalScrollerRef.current = node;
    setModalPortalContainer(node);
  }, []);
  const handleDialogOpenChange = useCallback((open: boolean) => {
    if (!open && eventFilterMenuOpen) return;
    props.onOpenChange(open);
  }, [eventFilterMenuOpen, props.onOpenChange]);
  const tabs: Array<{ id: BubbleDetailTab; label: string; count?: number; icon: typeof MessageSquare }> = [
    { id: "message", label: "Message", icon: MessageSquare },
    { id: "journey", label: "Journey", icon: GitBranch },
    { id: "events", label: "Events", count: props.allEventRows.length, icon: ListChecks },
  ];

  useEffect(() => {
    if (!props.open || !props.message) return;

    const animationFrame = window.requestAnimationFrame(() => {
      modalScrollerRef.current?.focus({ preventScroll: true });
    });
    return () => window.cancelAnimationFrame(animationFrame);
  }, [activeTab, props.message, props.open]);

  useEffect(() => {
    const scroller = modalScrollerRef.current;
    if (!props.open || !scroller) return;

    const handleWheel = (event: WheelEvent) => {
      if (isEventFilterMenuTarget(event.target)) {
        scrollEventFilterMenuByWheel(event);
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (!(event.target instanceof Node) || !scroller.contains(event.target)) return;
      if (event.deltaY === 0) return;
      const deltaY = wheelDeltaPixels(event, scroller.clientHeight);
      if (scrollModalBodyBy(scroller, deltaY)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener("wheel", handleWheel, { capture: true, passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { capture: true });
  }, [modalPortalContainer, props.open]);

  return (
    <DialogPrimitive.Root open={props.open} onOpenChange={handleDialogOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 bg-slate-950/45"
          style={{ zIndex: 1000 }}
        />
        <DialogPrimitive.Content
          className="overflow-y-auto overscroll-contain rounded-lg border border-slate-200 bg-white text-slate-950 antialiased shadow-lg outline-none transition-none [scrollbar-gutter:stable]"
          data-conversation-bubble-modal="true"
          data-conversation-bubble-modal-body="true"
          ref={setModalScroller}
          tabIndex={-1}
          onEscapeKeyDown={(event) => {
            if (eventFilterMenuOpen || isEventFilterMenuTarget(event.target)) event.preventDefault();
          }}
          onInteractOutside={(event) => {
            if (eventFilterMenuOpen || isEventFilterMenuTarget(event.target)) event.preventDefault();
          }}
          onKeyDown={handleModalBodyKeyDown}
          onMouseDown={handleModalBodyMouseDown}
          style={{
            height: "80vh",
            left: "10vw",
            position: "fixed",
            textRendering: "geometricPrecision",
            top: "10vh",
            WebkitOverflowScrolling: "touch",
            width: "80vw",
            zIndex: 1001,
          }}
        >
          <div className="sticky top-0 z-10 bg-white">
            <div className="flex items-start gap-3 border-b border-slate-200 px-5 py-4">
              <div className="min-w-0 flex-1">
                <DialogPrimitive.Title className="truncate text-base font-semibold leading-6 text-slate-950" data-conversation-bubble-modal-title="true">
                  Bubble details
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="mt-0.5 truncate text-sm leading-5 text-slate-500" data-conversation-bubble-modal-description="true">
                  {props.message ? `${props.message.role} message at offset ${props.message.offset}` : "No bubble selected"}
                </DialogPrimitive.Description>
              </div>
              <DialogPrimitive.Close className="-mr-1 grid size-9 shrink-0 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-200" data-conversation-bubble-modal-close="true">
                <X className="size-4" aria-hidden="true" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            </div>
            {props.message ? (
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
                <div className="flex gap-1 rounded-lg bg-slate-100 p-1" role="tablist" aria-label="Bubble detail sections">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const selected = activeTab === tab.id;
                    return (
                      <button
                        aria-selected={selected}
                        className={`inline-flex min-h-8 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md px-2 text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                          selected
                            ? "bg-white text-slate-950 shadow-sm"
                            : "text-slate-600 hover:bg-white/70 hover:text-slate-900"
                        }`}
                        data-conversation-bubble-tab={tab.id}
                        key={tab.id}
                        role="tab"
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <Icon className="size-3.5 shrink-0" aria-hidden="true" />
                        <span className="truncate">{tab.label}</span>
                        {typeof tab.count === "number" ? <span className="shrink-0 text-slate-400">{tab.count}</span> : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
          {props.message ? (
            <div className="px-5 py-4" data-conversation-bubble-modal-panel="true">
                {activeTab === "message" ? <BubbleMessagePanel message={props.message} /> : null}
                {activeTab === "journey" ? (
                  <JourneyDetailPanel
                    activeStateIds={props.stateIds}
                    eventCount={props.eventCount}
                    graphError={props.graphError}
                    journey={props.journey}
                    {...(props.journeyId ? { journeyId: props.journeyId } : {})}
                  />
                ) : null}
                {activeTab === "events" ? (
                  <BubbleAnalysisPanel
                    allEventRows={props.allEventRows}
                    analysis={props.analysis}
                    dropdownPortalContainer={modalPortalContainer}
                    message={props.message}
                    onFilterMenuOpenChange={setEventFilterMenuOpen}
                  />
                ) : null}
            </div>
          ) : (
            <div className="p-8 text-sm text-slate-500">Select a message bubble to inspect details.</div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function handleModalBodyMouseDown(event: MouseEvent<HTMLDivElement>) {
  if (!shouldFocusModalBody(event.target, event.currentTarget)) return;
  event.currentTarget.focus({ preventScroll: true });
}

function handleModalBodyKeyDown(event: KeyboardEvent<HTMLDivElement>) {
  if (isEventFilterMenuTarget(event.target)) return;

  const scroller = event.currentTarget;
  const pageDelta = Math.max(120, scroller.clientHeight * 0.85);
  let handled = false;

  if (event.key === "ArrowDown") handled = scrollModalBodyBy(scroller, 48);
  if (event.key === "ArrowUp") handled = scrollModalBodyBy(scroller, -48);
  if (event.key === "PageDown") handled = scrollModalBodyBy(scroller, pageDelta);
  if (event.key === "PageUp") handled = scrollModalBodyBy(scroller, -pageDelta);
  if (event.key === "Home") handled = scrollModalBodyTo(scroller, 0);
  if (event.key === "End") handled = scrollModalBodyTo(scroller, Number.POSITIVE_INFINITY);

  if (handled) event.preventDefault();
}

function isEventFilterMenuTarget(target: EventTarget | null) {
  return target instanceof Element && Boolean(target.closest("[data-conversation-event-filter-menu]"));
}

function shouldFocusModalBody(target: EventTarget | null, modalBody: HTMLDivElement) {
  if (target === modalBody) return true;
  if (!(target instanceof Element)) return true;
  if (isEventFilterMenuTarget(target)) return false;

  return !target.closest(
    "a[href],button,input,select,textarea,[role='button'],[role='menuitem'],[role='menuitemcheckbox'],[role='tab'],[tabindex]",
  );
}

function scrollEventFilterMenuByWheel(event: WheelEvent) {
  if (!(event.target instanceof Element)) return false;

  const menu = event.target.closest("[data-conversation-event-filter-menu]");
  const scroller = event.target.closest<HTMLElement>("[data-conversation-event-filter-scroll]")
    ?? menu?.querySelector<HTMLElement>("[data-conversation-event-filter-scroll]");
  if (!scroller) return false;

  const currentScrollTop = scroller.scrollTop;
  scrollElementTo(scroller, currentScrollTop + wheelDeltaPixels(event, scroller.clientHeight));
  return scroller.scrollTop !== currentScrollTop;
}

function wheelDeltaPixels(event: WheelEvent, pageHeight: number) {
  if (event.deltaMode === 1) return event.deltaY * 16;
  if (event.deltaMode === 2) return event.deltaY * pageHeight;
  return event.deltaY;
}

function scrollModalBodyBy(scroller: HTMLDivElement, deltaY: number) {
  return scrollElementTo(scroller, scroller.scrollTop + deltaY);
}

function scrollModalBodyTo(scroller: HTMLDivElement, nextScrollTop: number) {
  return scrollElementTo(scroller, nextScrollTop);
}

function scrollElementTo(scroller: HTMLElement, nextScrollTop: number) {
  const maxScrollTop = scroller.scrollHeight - scroller.clientHeight;
  if (maxScrollTop <= 0) return false;

  const currentScrollTop = scroller.scrollTop;
  const boundedScrollTop = Math.max(0, Math.min(maxScrollTop, nextScrollTop));
  if (boundedScrollTop === currentScrollTop) return false;

  scroller.scrollTop = boundedScrollTop;
  return true;
}

function BubbleMessagePanel(props: { message: TranscriptRow }) {
  return (
    <section className="grid gap-3">
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
        <span className="font-medium uppercase text-slate-700">{props.message.role}</span>
        <span>{props.message.createdAt}</span>
        <span>offset {props.message.offset}</span>
        <JourneyContextBadge context={props.message} compact />
        {props.message.traceId !== "-" ? <span className="truncate">trace {props.message.traceId}</span> : null}
      </div>
      <p className="whitespace-pre-wrap break-words text-sm leading-6 text-slate-800 [overflow-wrap:anywhere]">{props.message.text}</p>
    </section>
  );
}

function CustomerRelationPanel(props: { relation: NonNullable<StudioConversationRow["customerRelation"]> }) {
  const detail = props.relation.privacy?.label ?? props.relation.relationLabel ?? "SDK provided";
  return (
    <Panel className="mx-auto w-full max-w-5xl">
      <PanelHeader title="Customer relation" detail={detail} />
      <div className="grid gap-3 p-5 text-sm md:grid-cols-3">
        <PrivacyField label="Relation" value={props.relation.relationLabel ?? "SDK provided"} />
        <PrivacyField label="Customer ID" value={props.relation.id ?? "-"} />
        <PrivacyField label="Label" value={props.relation.label ?? "-"} />
        <div className="grid gap-1 md:col-span-3">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Attributes</span>
          {props.relation.attributes.length ? (
            <div className="flex flex-wrap gap-2">
              {props.relation.attributes.map((attribute) => (
                <span
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700"
                  key={`${attribute.label}:${attribute.value}:${attribute.kind ?? "unknown"}`}
                  title={attribute.kind}
                >
                  <span className="font-medium">{attribute.label}</span>
                  <span>{attribute.value}</span>
                </span>
              ))}
            </div>
          ) : (
            <span className="text-slate-500">-</span>
          )}
        </div>
        {props.relation.privacy ? (
          <div className="grid gap-2 rounded-lg border border-slate-200 p-3 md:col-span-3">
            <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Privacy</span>
            {props.relation.privacy.label ? <strong className="font-medium text-slate-950">{props.relation.privacy.label}</strong> : null}
            {props.relation.privacy.description ? <p className="text-sm leading-6 text-slate-600">{props.relation.privacy.description}</p> : null}
            {props.relation.privacy.policyIds?.length ? (
              <div className="flex flex-wrap gap-2">
                {props.relation.privacy.policyIds.map((policyId) => (
                  <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600" key={policyId}>{policyId}</span>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </Panel>
  );
}

function PrivacyField(props: { label: string; value: string }) {
  return (
    <div className="grid gap-1 rounded-lg border border-slate-200 p-3">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{props.label}</span>
      <strong className="break-words font-medium text-slate-950">{props.value}</strong>
    </div>
  );
}

function JourneyDetailPanel(props: {
  activeStateIds: string[];
  eventCount: number;
  graphError: string | null;
  journey: StudioAgentIntrospection["journeys"][number] | null;
  journeyId?: string;
}) {
  if (!props.journey) {
    return (
      <section className="rounded-lg border border-dashed border-slate-300 p-4 text-sm text-slate-600">
        <JourneyContextBadge context={{ ...(props.journeyId ? { journeyId: props.journeyId } : {}), stateIds: props.activeStateIds }} />
        <p className="mt-3 leading-6">
          {props.journeyId
            ? props.graphError ?? "No matching journey graph was returned for this bubble."
            : "This bubble has no journey context."}
        </p>
      </section>
    );
  }

  return (
    <section className="grid min-h-[calc(80vh-11rem)] min-w-0 grid-rows-[auto_minmax(360px,1fr)] gap-3" data-conversation-bubble-journey-panel="true">
      <div className="rounded-lg border border-slate-200 p-3">
        <JourneyContextSummary
          focusLabel="Bubble"
          activeStateIds={props.activeStateIds}
          eventCount={props.eventCount}
          matchedJourneyId={props.journey.id}
          {...(props.journeyId ? { activeJourneyId: props.journeyId } : {})}
        />
      </div>
      <JourneyGraph
        journey={props.journey}
        activeStateIds={props.activeStateIds}
        className="h-full min-h-[360px]"
        focusMode="center"
        interactive
      />
    </section>
  );
}

function JourneyContextSummary(props: {
  focusLabel: string;
  activeJourneyId?: string;
  activeStateIds: string[];
  eventCount: number;
  matchedJourneyId: string;
}) {
  return (
    <div className="grid gap-3 text-sm sm:grid-cols-2">
      <div>
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{props.focusLabel} journey</span>
        <strong className="mt-1 block break-words text-slate-950">{props.activeJourneyId ?? "-"}</strong>
      </div>
      <div>
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{props.focusLabel} step</span>
        <strong className="mt-1 block break-words text-slate-950">{props.activeStateIds.join(", ") || "-"}</strong>
      </div>
      <div>
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Graph</span>
        <span className="mt-1 block break-words text-slate-700">{props.matchedJourneyId}</span>
      </div>
      <div>
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Runtime events</span>
        <span className="mt-1 block text-slate-700">{props.eventCount}</span>
      </div>
    </div>
  );
}

function BubbleAnalysisPanel(props: {
  message: TranscriptRow | null;
  analysis: BubbleAnalysis;
  allEventRows: EventRow[];
  dropdownPortalContainer: HTMLElement | null;
  onFilterMenuOpenChange: (open: boolean) => void;
}) {
  if (!props.message) {
    return (
      <div className="grid h-full min-h-64 place-items-center text-center text-sm text-slate-500">
        No message bubble is available for analysis.
      </div>
    );
  }

  const relatedKeys = new Set(props.analysis.relatedRows.map((row) => row.key));
  const traceKeys = new Set(props.analysis.traceRows.map((row) => row.key));
  const journeyKeys = new Set(props.analysis.journeyRows.map((row) => row.key));

  return (
    <aside className="grid gap-4 text-sm" data-conversation-bubble-analysis="true">
      <div className="grid gap-3 rounded-lg border border-slate-200 p-3 md:grid-cols-4">
        <EventCount label="Total events" value={props.allEventRows.length} />
        <EventCount label="Bubble related" value={props.analysis.relatedRows.length} />
        <EventCount label="Trace events" value={props.analysis.traceRows.length} />
        <EventCount label="Journey events" value={props.analysis.journeyRows.length} />
      </div>
      <div className="grid gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Selected bubble</span>
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <strong className="text-sm text-slate-950">{props.message.role} at offset {props.message.offset}</strong>
          <span>{props.message.createdAt}</span>
          <JourneyContextBadge context={props.message} compact />
          {props.message.traceId !== "-" ? <span className="break-all">trace {props.message.traceId}</span> : null}
        </div>
      </div>
      <EventGraph rows={props.analysis.nearbyRows.length ? props.analysis.nearbyRows : props.analysis.relatedRows} />
      <FullEventTable
        dropdownPortalContainer={props.dropdownPortalContainer}
        journeyKeys={journeyKeys}
        onFilterMenuOpenChange={props.onFilterMenuOpenChange}
        relatedKeys={relatedKeys}
        rows={props.allEventRows}
        traceKeys={traceKeys}
      />
    </aside>
  );
}

function EventCount(props: { label: string; value: number }) {
  return (
    <div>
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{props.label}</span>
      <strong className="mt-1 block text-lg leading-6 text-slate-950">{props.value}</strong>
    </div>
  );
}

function EventGraph(props: { rows: EventRow[] }) {
  return (
    <div>
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Event graph</span>
      {props.rows.length ? (
        <ol className="relative mt-2 grid gap-2 before:absolute before:bottom-2 before:left-2 before:top-2 before:w-px before:bg-slate-200">
          {props.rows.slice(-4).map((row) => (
            <li className="relative grid gap-1 pl-6" key={`graph-${row.key}`}>
              <span className="absolute left-0 top-1.5 size-4 rounded-full border border-blue-300 bg-white" aria-hidden="true" />
              <span className="flex min-w-0 flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-slate-500">#{row.offset}</span>
                <strong className="break-words text-slate-800">{row.type}</strong>
              </span>
              <span className="line-clamp-2 break-words text-xs leading-5 text-slate-500">{row.summary}</span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-2 text-sm leading-6 text-slate-500">No related events were found near this bubble.</p>
      )}
    </div>
  );
}

function FullEventTable(props: {
  rows: EventRow[];
  relatedKeys: Set<string>;
  traceKeys: Set<string>;
  journeyKeys: Set<string>;
  dropdownPortalContainer: HTMLElement | null;
  onFilterMenuOpenChange: (open: boolean) => void;
}) {
  const [filter, setFilter] = useState<EventTableFilterState>(emptyEventTableFilter);
  const typeOptions = useMemo(() => eventValueOptions(props.rows, (row) => row.type), [props.rows]);
  const signalOptions = useMemo(() => eventValueOptions(props.rows, (row) => row.signal), [props.rows]);
  const matchOptions = useMemo(() => eventMatchFilterOptions.map((option) => ({
    ...option,
    count: props.rows.filter((row) => eventRowMatchesRelation(row, option.value, {
      relatedKeys: props.relatedKeys,
      traceKeys: props.traceKeys,
      journeyKeys: props.journeyKeys,
    })).length,
  })), [props.journeyKeys, props.relatedKeys, props.rows, props.traceKeys]);
  const filteredRows = useMemo(
    () => filterEventTableRows(props.rows, filter, {
      relatedKeys: props.relatedKeys,
      traceKeys: props.traceKeys,
      journeyKeys: props.journeyKeys,
    }),
    [filter, props.journeyKeys, props.relatedKeys, props.rows, props.traceKeys],
  );
  const filtersActive = !sameEventTableFilter(filter, emptyEventTableFilter);

  return (
    <section data-conversation-event-list="true">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">All conversation events</span>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {filteredRows.length === props.rows.length ? `${props.rows.length} rows` : `${filteredRows.length} of ${props.rows.length} rows`}
        </span>
      </div>
      {props.rows.length ? (
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950/70">
          <table className="w-full min-w-[920px] table-fixed border-collapse bg-white text-xs dark:bg-slate-950/70">
            <thead>
              <tr className="bg-slate-50 text-left text-slate-500 dark:bg-slate-900 dark:text-slate-300">
                <th className="w-20 border-b border-slate-200 px-3 py-2 font-medium dark:border-slate-700">Offset</th>
                <th className="w-52 border-b border-slate-200 px-3 py-2 font-medium dark:border-slate-700">Type</th>
                <th className="w-36 border-b border-slate-200 px-3 py-2 font-medium dark:border-slate-700">Signal</th>
                <th className="w-36 border-b border-slate-200 px-3 py-2 font-medium dark:border-slate-700">Match</th>
                <th className="border-b border-slate-200 px-3 py-2 font-medium dark:border-slate-700">Summary</th>
              </tr>
              <tr className="bg-white text-left text-slate-500 dark:bg-slate-950 dark:text-slate-300">
                <th className="border-b border-slate-200 px-3 py-2 align-middle font-medium dark:border-slate-700">
                  <button
                    aria-label="Reset event filters"
                    className="inline-grid size-8 place-items-center rounded-md border border-slate-200 bg-slate-50 text-slate-500 transition hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50"
                    disabled={!filtersActive}
                    title="Reset event filters"
                    type="button"
                    onClick={() => setFilter(emptyEventTableFilter)}
                  >
                    <X className="size-4" aria-hidden="true" />
                  </button>
                </th>
                <th className="border-b border-slate-200 px-3 py-2 align-middle font-medium dark:border-slate-700">
                  <EventHeaderFilterMenu
                    dataFilter="type"
                    emptyLabel="Any type"
                    label="Type"
                    manyLabel="types"
                    options={typeOptions}
                    portalContainer={props.dropdownPortalContainer}
                    selectedValues={filter.types}
                    onOpenChange={props.onFilterMenuOpenChange}
                    onClear={() => setFilter((current) => ({ ...current, types: [] }))}
                    onToggle={(type) => setFilter((current) => ({ ...current, types: toggleSelectedValue(current.types, type) }))}
                  />
                </th>
                <th className="border-b border-slate-200 px-3 py-2 align-middle font-medium dark:border-slate-700">
                  <EventHeaderFilterMenu
                    dataFilter="signal"
                    emptyLabel="Any signal"
                    label="Signal"
                    manyLabel="signals"
                    options={signalOptions}
                    portalContainer={props.dropdownPortalContainer}
                    selectedValues={filter.signals}
                    onOpenChange={props.onFilterMenuOpenChange}
                    onClear={() => setFilter((current) => ({ ...current, signals: [] }))}
                    onToggle={(signal) => setFilter((current) => ({ ...current, signals: toggleSelectedValue(current.signals, signal) }))}
                  />
                </th>
                <th className="border-b border-slate-200 px-3 py-2 align-middle font-medium dark:border-slate-700">
                  <EventHeaderFilterMenu
                    dataFilter="match"
                    emptyLabel="Any relation"
                    label="Match"
                    manyLabel="relations"
                    options={matchOptions}
                    portalContainer={props.dropdownPortalContainer}
                    selectedValues={filter.matches}
                    onOpenChange={props.onFilterMenuOpenChange}
                    onClear={() => setFilter((current) => ({ ...current, matches: [] }))}
                    onToggle={(match) => setFilter((current) => ({ ...current, matches: toggleSelectedValue(current.matches, match) }))}
                  />
                </th>
                <th className="border-b border-slate-200 px-3 py-2 align-middle font-medium dark:border-slate-700">
                  <label className="block">
                    <span className="sr-only">Search event summary, type, offset, or trace</span>
                    <input
                      className="h-8 w-full min-w-0 rounded-md border border-slate-200 bg-white px-2 text-xs text-slate-950 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      data-conversation-event-filter="query"
                      placeholder="Search events..."
                      value={filter.query}
                      onChange={(event) => setFilter((current) => ({ ...current, query: event.target.value }))}
                    />
                  </label>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => {
                const traceMatch = props.traceKeys.has(row.key);
                const journeyMatch = props.journeyKeys.has(row.key);
                const relatedMatch = props.relatedKeys.has(row.key);
                return (
                  <tr
                    className={relatedMatch ? "bg-blue-50/70 dark:bg-blue-950/25" : "bg-white dark:bg-slate-950/70"}
                    data-conversation-event-row="true"
                    data-conversation-event-related={relatedMatch ? "true" : "false"}
                    key={`full-event-${row.key}`}
                  >
                    <td className="border-b border-slate-100 px-3 py-2 align-top font-mono text-slate-500 dark:border-slate-800 dark:text-slate-400">{row.offset}</td>
                    <td className="border-b border-slate-100 px-3 py-2 align-top dark:border-slate-800">
                      <span className="block break-words font-medium text-slate-800 dark:text-slate-100">{row.type}</span>
                      <span className="mt-1 block break-all text-[11px] text-slate-500 dark:text-slate-400">{row.traceId}</span>
                    </td>
                    <td className="border-b border-slate-100 px-3 py-2 align-top text-slate-700 dark:border-slate-800 dark:text-slate-300">{row.signal}</td>
                    <td className="border-b border-slate-100 px-3 py-2 align-top dark:border-slate-800">
                      <span className="flex flex-wrap gap-1">
                        {relatedMatch ? <EventMatchBadge label="Bubble" /> : null}
                        {traceMatch ? <EventMatchBadge label="Trace" /> : null}
                        {journeyMatch ? <EventMatchBadge label="Journey" /> : null}
                        {!relatedMatch && !traceMatch && !journeyMatch ? <span className="text-slate-400 dark:text-slate-500">-</span> : null}
                      </span>
                    </td>
                    <td className="border-b border-slate-100 px-3 py-2 align-top dark:border-slate-800">
                      <span className="block whitespace-normal break-words leading-5 text-slate-600 [overflow-wrap:anywhere] dark:text-slate-300">{row.summary}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filteredRows.length === 0 ? (
            <div className="border-t border-slate-100 p-5 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
              No events match the active filters.
            </div>
          ) : null}
        </div>
      ) : (
        <p className="rounded-lg border border-dashed border-slate-300 p-5 text-sm text-slate-500">
          No runtime events captured for this conversation.
        </p>
      )}
    </section>
  );
}

type EventHeaderFilterOption<T extends string> = {
  value: T;
  label: string;
  description?: string;
  count?: number;
};

function EventHeaderFilterMenu<T extends string>(props: {
  dataFilter: "type" | "signal" | "match";
  emptyLabel: string;
  label: string;
  manyLabel: string;
  options: Array<EventHeaderFilterOption<T>>;
  portalContainer: HTMLElement | null;
  selectedValues: T[];
  onClear: () => void;
  onOpenChange: (open: boolean) => void;
  onToggle: (value: T) => void;
}) {
  const [open, setOpen] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const active = props.selectedValues.length > 0;
  const valueLabel = selectedValuesLabel(props.options, props.selectedValues, props.emptyLabel, props.manyLabel);
  const handleOpenChange = useCallback((nextOpen: boolean) => {
    setOpen(nextOpen);
    props.onOpenChange(nextOpen);
  }, [props.onOpenChange]);

  useEffect(() => {
    if (!open) return;

    const animationFrame = window.requestAnimationFrame(() => {
      const menu = document.querySelector<HTMLElement>(`[data-conversation-event-filter-menu="${props.dataFilter}"]`);
      const selectedOption = menu?.querySelector<HTMLElement>("[data-conversation-event-filter-option][data-state='checked']");
      const firstOption = menu?.querySelector<HTMLElement>("[data-conversation-event-filter-option]");
      const scrollArea = menu?.querySelector<HTMLElement>("[data-conversation-event-filter-scroll]");
      (selectedOption ?? firstOption ?? scrollArea ?? menu)?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [open, props.dataFilter]);

  useEffect(() => {
    const scroller = scrollAreaRef.current;
    if (!open || !scroller) return;

    const handleWheel = (event: WheelEvent) => {
      scrollElementTo(scroller, scroller.scrollTop + wheelDeltaPixels(event, scroller.clientHeight));
      event.preventDefault();
      event.stopPropagation();
    };

    scroller.addEventListener("wheel", handleWheel, { passive: false });
    return () => scroller.removeEventListener("wheel", handleWheel);
  }, [open]);

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <button
          aria-label={`Filter events by ${props.label.toLowerCase()}`}
          className={`group inline-flex h-8 w-full min-w-0 items-center justify-between gap-2 rounded-md border px-2.5 text-xs font-medium outline-none transition focus:ring-2 focus:ring-blue-100 ${
            active
              ? "border-blue-200 bg-blue-50 text-blue-800 hover:border-blue-300 hover:bg-blue-100 dark:border-blue-400/40 dark:bg-blue-400/10 dark:text-blue-100"
              : "border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          }`}
          data-conversation-event-filter={props.dataFilter}
          data-filter-active={active ? "true" : "false"}
          type="button"
        >
          <span className="flex min-w-0 items-center gap-1.5">
            <SlidersHorizontal className={`size-3.5 shrink-0 ${active ? "text-blue-600 dark:text-blue-200" : "text-slate-400"}`} aria-hidden="true" />
            <span className="truncate">{valueLabel}</span>
          </span>
          <ChevronDown className="size-3.5 shrink-0 text-slate-400 transition group-data-[state=open]:rotate-180" aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="z-[1100] w-72 rounded-lg border-slate-200 bg-white p-2 text-slate-950 shadow-xl shadow-slate-950/10 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
        data-conversation-event-filter-menu={props.dataFilter}
        portalContainer={props.portalContainer ?? undefined}
        sideOffset={6}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
        }}
        onEscapeKeyDown={(event) => {
          event.stopPropagation();
        }}
        onInteractOutside={(event) => {
          if (isEventFilterMenuTarget(event.target)) event.preventDefault();
        }}
      >
        <DropdownMenuLabel className="flex items-center justify-between gap-3 px-2 py-1.5">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{props.label}</span>
          <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
            active
              ? "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200"
              : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300"
          }`}
          >
            {active ? `${props.selectedValues.length} selected` : "All"}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuItem
          className="rounded-md px-2 py-2 text-xs text-slate-600 focus:bg-slate-100 focus:text-slate-950 dark:text-slate-300 dark:focus:bg-slate-800 dark:focus:text-slate-50"
          onSelect={(event) => {
            event.preventDefault();
            props.onClear();
          }}
        >
          <span className="inline-grid size-4 place-items-center rounded border border-slate-200 bg-slate-50 text-[10px] text-slate-400 dark:border-slate-700 dark:bg-slate-900">
            *
          </span>
          <span>{props.emptyLabel}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-2 bg-slate-100 dark:bg-slate-800" />
        <div
          className="max-h-72 overflow-y-auto overscroll-contain pr-1"
          data-conversation-event-filter-scroll="true"
          ref={scrollAreaRef}
          tabIndex={-1}
        >
          {props.options.length ? props.options.map((option) => (
            <DropdownMenuCheckboxItem
              checked={props.selectedValues.includes(option.value)}
              className="items-start rounded-md py-2 pr-2 text-xs focus:bg-blue-50 focus:text-slate-950 data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-800 dark:focus:bg-blue-400/10 dark:focus:text-slate-50 dark:data-[state=checked]:bg-blue-400/10 dark:data-[state=checked]:text-blue-100"
              data-conversation-event-filter-option={option.value}
              key={option.value}
              onCheckedChange={() => props.onToggle(option.value)}
              onSelect={(event) => event.preventDefault()}
            >
              <span className="grid min-w-0 flex-1 gap-0.5">
                <span className="truncate font-medium">{option.label}</span>
                {option.description ? <span className="line-clamp-2 text-[11px] font-normal leading-4 text-slate-500 dark:text-slate-400">{option.description}</span> : null}
              </span>
              {typeof option.count === "number" ? (
                <span className="ml-2 shrink-0 rounded-full bg-slate-100 px-1.5 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                  {option.count}
                </span>
              ) : null}
            </DropdownMenuCheckboxItem>
          )) : (
            <div className="px-2 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
              No filter values found.
            </div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function EventMatchBadge(props: { label: string }) {
  return (
    <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700 dark:border-blue-400/30 dark:bg-blue-400/10 dark:text-blue-200">
      {props.label}
    </span>
  );
}

export function filterEventTableRows(
  rows: EventRow[],
  filter: EventTableFilterState,
  keys: {
    relatedKeys: ReadonlySet<string>;
    traceKeys: ReadonlySet<string>;
    journeyKeys: ReadonlySet<string>;
  },
) {
  const query = filter.query.trim().toLowerCase();
  return rows.filter((row) => {
    if (filter.types.length && !filter.types.includes(row.type)) return false;
    if (filter.signals.length && !filter.signals.includes(row.signal)) return false;

    if (filter.matches.length && !filter.matches.some((match) => eventRowMatchesRelation(row, match, keys))) return false;

    if (!query) return true;
    return [
      row.offset,
      row.createdAt,
      row.type,
      row.signal,
      row.traceId,
      row.summary,
    ].some((value) => value.toLowerCase().includes(query));
  });
}

function eventValueOptions(rows: EventRow[], select: (row: EventRow) => string): Array<EventHeaderFilterOption<string>> {
  const counts = new Map<string, number>();
  for (const row of rows) {
    const value = select(row);
    if (!value || value === "-") continue;
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([value, count]) => ({ value, label: value, count }));
}

function selectedValuesLabel<T extends string>(options: Array<EventHeaderFilterOption<T>>, selectedValues: T[], emptyLabel: string, manyLabel: string) {
  if (!selectedValues.length) return emptyLabel;
  if (selectedValues.length === 1) {
    return options.find((option) => option.value === selectedValues[0])?.label ?? selectedValues[0];
  }
  return `${selectedValues.length} ${manyLabel}`;
}

function toggleSelectedValue<T extends string>(values: T[], value: T) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

function eventRowMatchesRelation(
  row: EventRow,
  match: EventTableMatchFilter,
  keys: {
    relatedKeys: ReadonlySet<string>;
    traceKeys: ReadonlySet<string>;
    journeyKeys: ReadonlySet<string>;
  },
) {
  const relatedMatch = keys.relatedKeys.has(row.key);
  const traceMatch = keys.traceKeys.has(row.key);
  const journeyMatch = keys.journeyKeys.has(row.key);
  if (match === "related") return relatedMatch;
  if (match === "trace") return traceMatch;
  if (match === "journey") return journeyMatch;
  return !relatedMatch && !traceMatch && !journeyMatch;
}

function sameEventTableFilter(left: EventTableFilterState, right: EventTableFilterState) {
  return left.query === right.query
    && sameStringSelection(left.types, right.types)
    && sameStringSelection(left.signals, right.signals)
    && sameStringSelection(left.matches, right.matches);
}

function sameStringSelection(left: readonly string[], right: readonly string[]) {
  if (left.length !== right.length) return false;
  const rightValues = new Set(right);
  return left.every((value) => rightValues.has(value));
}

function EventMiniTable(props: { title: string; rows: EventRow[]; emptyText: string }) {
  return (
    <div>
      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{props.title}</span>
      {props.rows.length ? (
        <div className="mt-2 max-h-32 overflow-auto rounded-lg border border-slate-200">
          <table className="w-full table-fixed border-collapse text-xs">
            <tbody>
              {props.rows.slice(-5).map((row) => (
                <tr key={`${props.title}-${row.key}`}>
                  <td className="w-14 border-b border-slate-100 px-2 py-2 align-top font-mono text-slate-500">{row.offset}</td>
                  <td className="border-b border-slate-100 px-2 py-2 align-top">
                    <span className="block break-words font-medium text-slate-800">{row.type}</span>
                    <span className="mt-1 line-clamp-2 break-words leading-5 text-slate-500">{row.summary}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="mt-2 text-xs leading-5 text-slate-500">{props.emptyText}</p>
      )}
    </div>
  );
}

function JourneyContextBadge(props: { context: JourneyStepContext; compact?: boolean }) {
  const journeyId = props.context.journeyId;
  const stateLabel = props.context.stateIds.join(", ");
  if (!journeyId && !stateLabel) {
    return props.compact ? null : <span className="text-sm text-slate-500">No journey context</span>;
  }
  return (
    <span
      className={`inline-flex min-w-0 items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-2 py-1 text-violet-700 ${
        props.compact ? "max-w-full text-[11px]" : "text-xs"
      }`}
      data-conversation-journey-context="true"
      title={[journeyId ? `Journey ${journeyId}` : "", stateLabel ? `Step ${stateLabel}` : ""].filter(Boolean).join(" / ")}
    >
      <GitBranch className="size-3 shrink-0" aria-hidden="true" />
      {journeyId ? <span className="truncate">{journeyId}</span> : null}
      {stateLabel ? <span className="shrink-0 text-violet-400">/</span> : null}
      {stateLabel ? <span className="truncate">{stateLabel}</span> : null}
    </span>
  );
}

function journeyContextsForEvents(events: unknown[], fallbackContext?: JourneyStepContext) {
  let current = normalizeJourneyContext(fallbackContext);
  return events.map((event) => {
    const record = asRecord(event);
    const data = asRecord(record?.data);
    const type = stringField(record, "type") ?? "";
    const directJourneyId = eventJourneyId(data);
    const directStateIds = eventStateIds(data);

    if (type === "journey.completed") {
      const completedJourneyId = directJourneyId ?? current.journeyId;
      const completedContext = normalizeJourneyContext({
        ...(completedJourneyId ? { journeyId: completedJourneyId } : {}),
        stateIds: directStateIds.length ? directStateIds : current.stateIds,
      });
      current = { stateIds: [] };
      return completedContext;
    }

    if (type === "journey.activated" && directJourneyId) {
      current = { journeyId: directJourneyId, stateIds: [] };
      return current;
    }

    if (type === "journey.state.entered" && directJourneyId && directStateIds.length) {
      current = { journeyId: directJourneyId, stateIds: directStateIds };
      return current;
    }

    const nextJourneyId = directJourneyId ?? current.journeyId;
    current = normalizeJourneyContext({
      ...(nextJourneyId ? { journeyId: nextJourneyId } : {}),
      stateIds: directStateIds.length ? directStateIds : current.stateIds,
    });
    return current;
  });
}

function eventJourneyId(data: Record<string, unknown> | null) {
  return stringField(data, "journeyId")
    ?? stringField(asRecord(data?.target), "journeyId");
}

function eventStateIds(data: Record<string, unknown> | null) {
  const explicitStateIds = stringArrayField(data, "activeStateIds");
  if (explicitStateIds.length) return explicitStateIds;
  const directStateId = stringField(data, "stateId")
    ?? stringField(asRecord(data?.target), "stateId");
  return directStateId ? [directStateId] : [];
}

function contextForRow(current?: JourneyStepContext, pending?: JourneyStepContext) {
  if (current?.journeyId || current?.stateIds.length) return current;
  return pending;
}

function normalizeJourneyContext(context?: JourneyStepContext): JourneyStepContext {
  return {
    ...(context?.journeyId ? { journeyId: context.journeyId } : {}),
    stateIds: Array.from(new Set(context?.stateIds ?? [])),
  };
}

export function bubbleAnalysisForMessage(events: unknown[], message: TranscriptRow | null): BubbleAnalysis {
  if (!message) {
    return {
      relatedRows: [],
      traceRows: [],
      journeyRows: [],
      nearbyRows: [],
    };
  }

  const rows = eventTableRows(events);
  const messageOffset = numericOffset(message);
  const traceRows = message.traceId !== "-"
    ? rows.filter((row) => row.traceId === message.traceId)
    : [];
  const journeyRows = rows.filter((row) => eventMatchesJourneyContext(events[row.eventIndex], message));
  const nearbyRows = Number.isFinite(messageOffset)
    ? rows
      .filter((row) => {
        const offset = numericEventOffset(row);
        return offset <= messageOffset && offset >= Math.max(0, messageOffset - 16);
      })
      .slice(-8)
    : [];

  return {
    traceRows,
    journeyRows,
    nearbyRows,
    relatedRows: uniqueEventRows([
      ...traceRows,
      ...journeyRows,
      ...nearbyRows,
    ]).sort((left, right) => numericEventOffset(left) - numericEventOffset(right)),
  };
}

function eventMatchesJourneyContext(event: unknown, context: JourneyStepContext) {
  const data = asRecord(asRecord(event)?.data);
  const journeyId = eventJourneyId(data);
  const stateIds = eventStateIds(data);
  return Boolean(context.journeyId && journeyId === context.journeyId)
    || stateIds.some((stateId) => context.stateIds.includes(stateId));
}

function uniqueEventRows(rows: EventRow[]) {
  const seen = new Set<string>();
  const uniqueRows: EventRow[] = [];
  for (const row of rows) {
    if (seen.has(row.key)) continue;
    seen.add(row.key);
    uniqueRows.push(row);
  }
  return uniqueRows;
}

function numericEventOffset(row: EventRow) {
  const parsed = Number(row.offset);
  return Number.isFinite(parsed) ? parsed : Number.MAX_SAFE_INTEGER;
}

export function eventTableRows(events: unknown[]): EventRow[] {
  return events.map((event, index) => {
    const record = asRecord(event);
    const data = asRecord(record?.data);
    const type = stringField(record, "type") ?? "-";
    return {
      key: stringField(record, "id") ?? `${type}-${index}`,
      eventIndex: index,
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
