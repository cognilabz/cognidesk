"use client";

import type { StudioTargetManifest } from "@cognidesk/studio-contracts";
import {
  ChevronDownIcon,
  CheckIcon,
  BarChart3Icon,
  FileTextIcon,
  EyeIcon,
  MoreHorizontalIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  PanelRightCloseIcon,
  PanelRightOpenIcon,
  PencilIcon,
  PlusIcon,
  RefreshCwIcon,
  SearchIcon,
  SparklesIcon,
  SquareTerminalIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import { type CSSProperties, useMemo, useRef, useState } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorName,
  ModelSelectorTrigger,
} from "@/components/ai-elements/model-selector";
import {
  PromptInput,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai-elements/reasoning";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";
import {
  Task,
  TaskContent,
  TaskItem,
  TaskItemFile,
  TaskTrigger,
} from "@/components/ai-elements/task";
import { Tool, ToolContent, ToolHeader } from "@/components/ai-elements/tool";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type {
  OperatorChatItem,
  OperatorChatEventItem,
  OperatorChatMessageItem,
  PreviewDashboard,
  OperatorEvent,
  OperatorEventEntry,
  OperatorMessage,
  OperatorSessionRow,
  ReasoningEffort,
} from "./types";
import { DashboardRenderer, type DashboardCheckResult } from "./dashboard-renderer";
import { formatDateTime } from "./ui";

const reasoningEfforts: Array<{ id: ReasoningEffort; label: string }> = [
  { id: "minimal", label: "Minimal" },
  { id: "low", label: "Low" },
  { id: "medium", label: "Medium" },
  { id: "high", label: "High" },
];

const suggestions = [
  {
    label: "Explain the agent",
    prompt:
      "Explain the current Cognidesk agent. Ground the answer in introspection and name the journeys, tools, knowledge, and widgets you found.",
  },
  {
    label: "Create a dashboard",
    prompt:
      "Create and save a Studio dashboard draft for recent conversations. Use the Studio dashboard API and include datasets, code, and a fallback summary.",
  },
  {
    label: "Inspect a change",
    prompt:
      "Inspect the source sandbox and propose one small improvement to the flight demo agent. Show your evidence before editing.",
  },
];

export function OperatorView(props: {
  manifest: StudioTargetManifest;
  initialSessions: OperatorSessionRow[];
}) {
  const socketRef = useRef<WebSocket | null>(null);
  const assistantDraftRef = useRef("");
  const assistantMessageIdRef = useRef<string | null>(null);
  const operatorSessionIdRef = useRef<string | null>(null);
  const persistQueueRef = useRef(Promise.resolve());
  const dashboardSnapshotRef = useRef<Map<string, string>>(new Map());
  const surfacedDashboardVersionsRef = useRef<Set<string>>(new Set());
  const [sessionSidebarCollapsed, setSessionSidebarCollapsed] = useState(false);
  const [operatorSessionId, setOperatorSessionId] = useState<string | null>(null);
  const [sessions, setSessions] = useState<OperatorSessionRow[]>(props.initialSessions);
  const [sessionSearch, setSessionSearch] = useState("");
  const [renamingSessionId, setRenamingSessionId] = useState<string | null>(null);
  const [renamingTitle, setRenamingTitle] = useState("");
  const [pendingDeleteSession, setPendingDeleteSession] = useState<OperatorSessionRow | null>(null);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState(defaultModel(props.manifest));
  const [modelSelectorOpen, setModelSelectorOpen] = useState(false);
  const [selectedReasoningEffort, setSelectedReasoningEffort] = useState<ReasoningEffort>("low");
  const [chatItems, setChatItems] = useState<OperatorChatItem[]>([
    messageToChatItem(welcomeMessage(props.manifest.target.name)),
  ]);
  const [artifacts, setArtifacts] = useState<Record<string, unknown>[]>([]);
  const [diffFiles, setDiffFiles] = useState<Array<{ path: string; status: string }>>([]);
  const [previewDashboard, setPreviewDashboard] = useState<PreviewDashboard>(null);
  const [dashboardDialogOpen, setDashboardDialogOpen] = useState(false);
  const [dashboardPanelOpen, setDashboardPanelOpen] = useState(false);
  const [dashboardPanelWidth, setDashboardPanelWidth] = useState(560);
  const [dashboardChecks, setDashboardChecks] = useState<Record<string, DashboardCheckResult>>({});
  const [dashboardActionError, setDashboardActionError] = useState<string | null>(null);
  const [isWorking, setIsWorking] = useState(false);

  const filteredSessions = useMemo(() => {
    const query = sessionSearch.trim().toLowerCase();
    if (!query) return sessions;
    return sessions.filter((session) => session.title.toLowerCase().includes(query));
  }, [sessionSearch, sessions]);
  const activeSession = sessions.find((session) => session.id === operatorSessionId) ?? null;
  const selectedModelData = props.manifest.operator.models.find((model) => model.id === selectedModel);
  const hasUserMessages = chatItems.some((item) => item.type === "message" && item.role === "user");
  const visibleChatItems = useMemo(() => compactActivityEvents(chatItems), [chatItems]);
  const assistantIsTyping = isAssistantTyping(visibleChatItems);
  const operatorGridStyle = {
    "--session-column": `${sessionSidebarCollapsed ? 68 : 300}px`,
    "--dashboard-column": `${dashboardPanelWidth}px`,
  } as CSSProperties;
  operatorSessionIdRef.current = operatorSessionId;

  async function startNewSession() {
    const response = await fetch("/api/studio/operator/sessions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: "Untitled Operator session",
        targetId: props.manifest.target.id,
        modelId: selectedModel,
      }),
    });
    if (!response.ok) {
      pushOperatorEvent({ kind: "error", title: "Could not create session", status: "error" });
      return;
    }
    const data = await response.json() as { session: RawOperatorSession };
    const nextSession = normalizeSession(data.session);
    setSessions((items) => [nextSession, ...items.filter((item) => item.id !== nextSession.id)]);
    setOperatorSessionId(nextSession.id);
    operatorSessionIdRef.current = nextSession.id;
    setChatItems([messageToChatItem(welcomeMessage(props.manifest.target.name))]);
    setArtifacts([]);
    setDiffFiles([]);
    setPreviewDashboard(null);
    setDashboardDialogOpen(false);
    setDashboardPanelOpen(false);
    setDashboardActionError(null);
    setInput("");
    assistantDraftRef.current = "";
    assistantMessageIdRef.current = null;
    persistQueueRef.current = Promise.resolve();
  }

  async function loadOperatorSessions() {
    const response = await fetch("/api/studio/operator/sessions");
    if (!response.ok) return;
    const data = await response.json() as { sessions: RawOperatorSession[] };
    setSessions(data.sessions.map(normalizeSession));
  }

  async function openOperatorSession(id: string) {
    const response = await fetch(`/api/studio/operator/sessions/${id}`);
    if (!response.ok) return;
    const data = await response.json() as {
      messages: Array<{ id: string; role: "user" | "assistant" | "system" | "tool"; content: unknown }>;
      artifacts: Array<{ artifact: unknown; title: string; type: string }>;
    };
    setOperatorSessionId(id);
    operatorSessionIdRef.current = id;
    const loadedChatItems = data.messages.length
      ? data.messages.map(storedMessageToChatItem)
      : [messageToChatItem(welcomeMessage(props.manifest.target.name))];
    setChatItems(loadedChatItems);
    void reconcileDashboardEvents(loadedChatItems);
    setArtifacts(data.artifacts.map((artifact) => (
      typeof artifact.artifact === "object" && artifact.artifact !== null
        ? artifact.artifact as Record<string, unknown>
        : { title: artifact.title, type: artifact.type, value: artifact.artifact }
    )));
    setDiffFiles([]);
    setPreviewDashboard(null);
    setDashboardDialogOpen(false);
    setDashboardPanelOpen(false);
    setDashboardActionError(null);
    assistantDraftRef.current = "";
    assistantMessageIdRef.current = null;
  }

  function beginRenameSession(session: OperatorSessionRow) {
    setRenamingSessionId(session.id);
    setRenamingTitle(session.title);
  }

  async function commitRenameSession(sessionId: string) {
    const title = renamingTitle.trim();
    if (!title) return;
    const response = await fetch(`/api/studio/operator/sessions/${sessionId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (!response.ok) {
      pushOperatorEvent({ kind: "error", title: "Could not rename session", status: "error" });
      return;
    }
    const data = await response.json() as { session: RawOperatorSession };
    const nextSession = normalizeSession(data.session);
    setSessions((items) => items.map((item) => item.id === sessionId ? nextSession : item));
    setRenamingSessionId(null);
    setRenamingTitle("");
  }

  async function confirmDeleteSession() {
    if (!pendingDeleteSession) return;
    const session = pendingDeleteSession;
    const response = await fetch(`/api/studio/operator/sessions/${session.id}`, { method: "DELETE" });
    if (!response.ok) {
      pushOperatorEvent({ kind: "error", title: "Could not delete session", status: "error" });
      return;
    }
    setPendingDeleteSession(null);
    setSessions((items) => items.filter((item) => item.id !== session.id));
    if (operatorSessionId === session.id) {
      setOperatorSessionId(null);
      operatorSessionIdRef.current = null;
      setChatItems([messageToChatItem(welcomeMessage(props.manifest.target.name))]);
      setArtifacts([]);
      setDiffFiles([]);
      setPreviewDashboard(null);
      setDashboardDialogOpen(false);
      setDashboardPanelOpen(false);
      assistantDraftRef.current = "";
      assistantMessageIdRef.current = null;
    }
  }

  async function sendOperatorMessage(messageOverride?: string) {
    const message = (messageOverride ?? input).trim();
    if (!message || isWorking) return;
    setInput("");
    setIsWorking(true);
    assistantDraftRef.current = "";
    assistantMessageIdRef.current = null;
    setChatItems((items) => [
      ...items,
      { id: crypto.randomUUID(), role: "user", text: message, type: "message" },
    ]);
    try {
      dashboardSnapshotRef.current = await fetchDashboardSnapshot().catch(() => new Map());
      const socket = await ensureOperatorSocket();
      let sessionId = operatorSessionId;
      if (!sessionId) {
        const response = await fetch("/api/studio/operator/sessions", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            title: message.slice(0, 80),
            targetId: props.manifest.target.id,
            modelId: selectedModel,
          }),
        });
        if (!response.ok) throw new Error("Could not create Operator session");
        const data = await response.json() as { session: RawOperatorSession };
        const nextSession = normalizeSession(data.session);
        sessionId = nextSession.id;
        setOperatorSessionId(sessionId);
        operatorSessionIdRef.current = sessionId;
        setSessions((items) => [nextSession, ...items.filter((item) => item.id !== nextSession.id)]);
        await persistOperatorMessage(sessionId, "user", message);
        socket.send(JSON.stringify({
          type: "session.start",
          sessionId,
          targetId: props.manifest.target.id,
          modelId: selectedModel,
          reasoningEffort: selectedReasoningEffort,
          message,
        }));
      } else {
        await persistOperatorMessage(sessionId, "user", message);
        socket.send(JSON.stringify({
          type: "turn.start",
          sessionId,
          modelId: selectedModel,
          reasoningEffort: selectedReasoningEffort,
          message,
        }));
      }
    } catch (error) {
      setIsWorking(false);
      pushOperatorEvent({
        kind: "error",
        title: error instanceof Error ? error.message : "Operator connection failed",
        status: "error",
      });
    }
  }

  async function stopOperatorTurn() {
    const sessionId = operatorSessionIdRef.current;
    if (!sessionId) return;
    try {
      const socket = await ensureOperatorSocket();
      socket.send(JSON.stringify({ type: "turn.interrupt", sessionId }));
      setIsWorking(false);
      finishAssistantSegment();
      pushOperatorEvent({
        kind: "activity",
        title: "Interrupt requested",
        surface: "conversation",
        status: "completed",
      });
    } catch (error) {
      pushOperatorEvent({
        kind: "error",
        title: error instanceof Error ? error.message : "Could not interrupt Operator turn",
        status: "error",
      });
    }
  }

  function ensureOperatorSocket() {
    if (socketRef.current?.readyState === WebSocket.OPEN) return Promise.resolve(socketRef.current);
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const socket = new WebSocket(`${protocol}://${window.location.host}/api/studio/operator/ws`);
    socketRef.current = socket;
    socket.onmessage = async (event) => {
      const raw = typeof event.data === "string" ? event.data : await event.data.text();
      handleOperatorEvent(JSON.parse(raw) as OperatorEvent);
    };
    socket.onclose = () => {
      if (isWorking) {
        setIsWorking(false);
        pushOperatorEvent({ kind: "error", title: "Operator socket closed", status: "error" });
      }
    };
    return new Promise<WebSocket>((resolve, reject) => {
      socket.onopen = () => resolve(socket);
      socket.onerror = () => reject(new Error("Operator socket failed"));
    });
  }

  function handleOperatorEvent(event: OperatorEvent) {
    if (event.type === "session.ready") {
      setOperatorSessionId(event.sessionId);
      operatorSessionIdRef.current = event.sessionId;
    } else if (event.type === "assistant.delta") {
      appendAssistantDelta(event.delta);
    } else if (event.type === "activity") {
      const activityDetail = event.surface && event.surface !== "conversation" ? event.surface : undefined;
      const detail = event.detail ?? activityDetail;
      const title = humanizeActivity(event.message);
      pushOperatorEvent({
        kind: "activity",
        title,
        ...(detail ? { detail } : {}),
        ...(event.category ? { category: event.category } : {}),
        ...(event.input !== undefined ? { input: event.input } : {}),
        ...(event.output !== undefined ? { output: event.output } : {}),
        ...(activityDetail ? { surface: activityDetail } : {}),
        status: activityStatus(title, isWorking),
      });
    } else if (event.type === "reasoning.summary") {
      pushOperatorEvent({
        kind: "reasoning",
        title: "Working plan updated",
        detail: event.summary,
        surface: "evidence",
        status: "running",
      });
    } else if (event.type === "tool.started") {
      pushOperatorEvent({
        kind: "tool",
        title: `Running ${event.name}`,
        name: event.name,
        input: event.input,
        surface: "conversation",
        status: "running",
      });
    } else if (event.type === "tool.completed") {
      pushOperatorEvent({
        kind: "tool",
        title: `Finished ${event.name}`,
        name: event.name,
        output: event.output,
        surface: "conversation",
        status: "completed",
      });
    } else if (event.type === "artifact.upserted") {
      const artifactDetail = stringifySmall(event.artifact);
      setArtifacts((items) => [event.artifact, ...items].slice(0, 12));
      pushOperatorEvent({
        kind: "artifact",
        title: String(event.artifact.title ?? event.artifact.type ?? "Artifact updated"),
        ...(artifactDetail ? { detail: artifactDetail } : {}),
        output: event.artifact,
        surface: "artifacts",
        status: "completed",
      });
    } else if (event.type === "sandbox.diff.updated") {
      setDiffFiles(event.files);
      pushOperatorEvent({
        kind: "diff",
        title: event.summary,
        detail: event.files.map((file) => `${file.status}: ${file.path}`).join("\n"),
        files: event.files,
        surface: "sandbox_diff",
        status: "completed",
      });
    } else if (event.type === "validation.completed") {
      pushOperatorEvent({
        kind: "validation",
        title: `Validation ${event.commandId}`,
        detail: event.output,
        output: event.output,
        surface: "validation_runs",
        status: event.exitCode === 0 ? "completed" : "error",
      });
    } else if (event.type === "approval.required") {
      const approvalDetail = stringifySmall(event.payload);
      pushOperatorEvent({
        kind: "approval",
        title: event.title,
        ...(approvalDetail ? { detail: approvalDetail } : {}),
        approvalId: event.approvalId,
        action: event.action,
        surface: "approvals",
        status: "pending",
      });
    } else if (event.type === "error") {
      setIsWorking(false);
      pushOperatorEvent({ kind: "error", title: event.message, status: "error" });
    } else if (event.type === "turn.completed") {
      setIsWorking(false);
      markActivityEventsComplete();
      finishAssistantSegment({ reloadSessions: Boolean(event.sessionId) });
      void surfaceDashboardChanges();
    }
  }

  function appendAssistantDelta(delta: string) {
    assistantDraftRef.current += delta;
    let assistantId = assistantMessageIdRef.current;
    if (!assistantId) {
      assistantId = crypto.randomUUID();
      assistantMessageIdRef.current = assistantId;
    }
    const nextAssistantId = assistantId;
    setChatItems((items) => {
      const existing = items.some((item) => item.type === "message" && item.id === nextAssistantId);
      if (!existing) {
        return [
          ...items,
          { id: nextAssistantId, role: "assistant", text: delta, type: "message", streaming: true },
        ];
      }
      return items.map((item) => (
        item.type === "message" && item.id === nextAssistantId
          ? { ...item, text: item.text + delta, streaming: true }
          : item
      ));
    });
  }

  function markAssistantComplete() {
    const assistantId = assistantMessageIdRef.current;
    if (!assistantId) return;
    setChatItems((items) => items.map((item) => (
      item.type === "message" && item.id === assistantId ? { ...item, streaming: false } : item
    )));
  }

  function finishAssistantSegment(options: { reloadSessions?: boolean } = {}) {
    const text = assistantDraftRef.current.trim();
    markAssistantComplete();
    assistantDraftRef.current = "";
    assistantMessageIdRef.current = null;
    const sessionId = operatorSessionIdRef.current;
    if (sessionId && text) {
      queuePersistOperatorMessage(sessionId, "assistant", text, options);
    } else if (options.reloadSessions) {
      void loadOperatorSessions();
    }
  }

  function markActivityEventsComplete() {
    setChatItems((items) => items.map((item) => (
      item.type === "event" && item.event.kind === "activity" && item.event.status === "running"
        ? { ...item, event: { ...item.event, status: "completed" } }
        : item
    )));
  }

  function pushOperatorEvent(event: Omit<OperatorEventEntry, "id">) {
    const entry: OperatorEventEntry = { id: crypto.randomUUID(), ...event };
    if (entry.kind === "activity" && !shouldDisplayActivityEvent(entry)) return;
    finishAssistantSegment();
    setChatItems((items) => [...items, { id: entry.id, event: entry, type: "event" }]);
    const sessionId = operatorSessionIdRef.current;
    if (sessionId) {
      queuePersistOperatorMessage(sessionId, "tool", { type: "operator.event", event: entry });
    }
  }

  function queuePersistOperatorMessage(
    sessionId: string,
    role: "user" | "assistant" | "system" | "tool",
    content: unknown,
    options: { reloadSessions?: boolean } = {},
  ) {
    persistQueueRef.current = persistQueueRef.current
      .catch(() => undefined)
      .then(() => persistOperatorMessage(sessionId, role, content))
      .then(() => {
        if (options.reloadSessions) void loadOperatorSessions();
      });
    void persistQueueRef.current;
  }

  async function persistOperatorMessage(sessionId: string, role: "user" | "assistant" | "system" | "tool", content: unknown) {
    await fetch(`/api/studio/operator/sessions/${sessionId}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ role, content }),
    });
  }

  async function fetchDashboardRows() {
    const response = await fetch("/api/studio/dashboards", { cache: "no-store" });
    if (!response.ok) return [];
    const data = await response.json() as { dashboards: RawDashboardRow[] };
    return data.dashboards;
  }

  async function fetchDashboardSnapshot() {
    const rows = await fetchDashboardRows();
    return new Map(rows.map((dashboard) => [dashboard.id, dashboardSnapshotValue(dashboard)]));
  }

  async function fetchDashboardPreview(id: string): Promise<PreviewDashboard> {
    const response = await fetch(`/api/studio/dashboards/${id}`, { cache: "no-store" });
    if (!response.ok) return null;
    return await response.json() as PreviewDashboard;
  }

  async function surfaceDashboardChanges() {
    const rows = await fetchDashboardRows().catch(() => []);
    if (!rows.length) return;
    const previous = dashboardSnapshotRef.current;
    dashboardSnapshotRef.current = new Map(rows.map((dashboard) => [dashboard.id, dashboardSnapshotValue(dashboard)]));
    const changed = rows.filter((dashboard) => previous.get(dashboard.id) !== dashboardSnapshotValue(dashboard));
    const dashboard = changed[0];
    if (!dashboard) return;
    const preview = await fetchDashboardPreview(dashboard.id);
    if (!preview) return;
    const surfacedKey = `${preview.artifact.id}:v${preview.artifact.version}`;
    if (surfacedDashboardVersionsRef.current.has(surfacedKey)) return;
    surfacedDashboardVersionsRef.current.add(surfacedKey);
    setArtifacts((items) => [preview.artifact as unknown as Record<string, unknown>, ...items].slice(0, 12));
    pushOperatorEvent({
      kind: "dashboard",
      title: preview.artifact.title,
      ...(preview.artifact.description ? { detail: preview.artifact.description } : {}),
      dashboardId: preview.artifact.id,
      dashboardSlug: preview.artifact.slug,
      dashboardStatus: preview.artifact.status,
      dashboardVersion: preview.artifact.version,
      artifactKey: preview.artifact.artifactKey,
      output: preview.artifact,
      surface: "artifacts",
      status: "completed",
    });
  }

  async function openDashboardFromChat(id: string) {
    const preview = await fetchDashboardPreview(id);
    if (!preview) {
      setDashboardActionError("Dashboard could not be opened.");
      return;
    }
    setDashboardActionError(null);
    setPreviewDashboard(preview);
    setDashboardDialogOpen(true);
  }

  async function openDashboardPanelFromChat(id: string) {
    const preview = await fetchDashboardPreview(id);
    if (!preview) {
      setDashboardActionError("Dashboard could not be opened.");
      return;
    }
    setDashboardActionError(null);
    setPreviewDashboard(preview);
    setDashboardDialogOpen(false);
    setDashboardPanelOpen(true);
  }

  async function publishDashboardFromChat(id: string) {
    const response = await fetch(`/api/studio/dashboards/${id}/publish`, { method: "POST" });
    if (!response.ok) {
      setDashboardActionError("Dashboard could not be published.");
      return;
    }
    const data = await response.json() as { dashboard: NonNullable<PreviewDashboard>["artifact"] };
    updateDashboardEvents(id, {
      dashboardStatus: data.dashboard.status,
      dashboardVersion: data.dashboard.version,
      artifactKey: data.dashboard.artifactKey,
      output: data.dashboard,
    });
    setPreviewDashboard((current) => current?.artifact.id === id ? { ...current, artifact: data.dashboard } : current);
    setDashboardActionError(null);
  }

  async function deleteDashboardFromChat(id: string) {
    const response = await fetch(`/api/studio/dashboards/${id}`, { method: "DELETE" });
    if (!response.ok) {
      setDashboardActionError("Dashboard could not be deleted.");
      return;
    }
    updateDashboardEvents(id, {
      dashboardStatus: "deleted",
      status: "completed",
    });
    if (previewDashboard?.artifact.id === id) {
      setDashboardDialogOpen(false);
      setDashboardPanelOpen(false);
      setPreviewDashboard(null);
    }
    setDashboardActionError(null);
  }

  async function checkDashboardFromChat(id: string) {
    const preview = await fetchDashboardPreview(id);
    if (!preview) {
      setDashboardActionError("Dashboard could not be checked.");
      return;
    }
    const issues: string[] = [];
    if (!hasDashboardExport(preview.code)) issues.push("Generated React code does not export Dashboard.");
    if (!preview.artifact.datasets.length) issues.push("No datasets are attached.");
    if (!preview.artifact.renderer.spec?.widgets?.length) issues.push("No render spec widgets are attached.");
    for (const dataset of preview.artifact.datasets.filter((dataset) => dataset.mode === "live")) {
      const response = await fetch("/api/studio/dashboard-data", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dataset.source),
      });
      if (!response.ok) issues.push(`Live dataset failed: ${dataset.title}`);
    }
    const result: DashboardCheckResult = {
      status: issues.length ? "failed" : "passed",
      checkedAt: new Date().toISOString(),
      issues,
    };
    setDashboardChecks((items) => ({ ...items, [id]: result }));
    setPreviewDashboard(preview);
    if (!dashboardPanelOpen) setDashboardDialogOpen(true);
    setDashboardActionError(null);
  }

  function reviseDashboardFromDialog() {
    if (!previewDashboard) return;
    setInput(`Update dashboard ${previewDashboard.artifact.id} (${previewDashboard.artifact.title}). Keep the existing dashboardId, preserve useful datasets, and revise the React code plus spec for: `);
    setDashboardDialogOpen(false);
  }

  function updateDashboardEvents(id: string, patch: Partial<OperatorEventEntry>) {
    setChatItems((items) => items.map((item) => {
      if (item.type !== "event" || item.event.dashboardId !== id) return item;
      return { ...item, event: { ...item.event, ...patch } };
    }));
  }

  async function reconcileDashboardEvents(items: OperatorChatItem[]) {
    const dashboardIds = [...new Set(items
      .map((item) => item.type === "event" ? item.event.dashboardId : undefined)
      .filter((id): id is string => Boolean(id)))];
    if (!dashboardIds.length) return;
    const previews = await Promise.all(dashboardIds.map(async (id) => [id, await fetchDashboardPreview(id)] as const));
    const previewById = new Map(previews);
    setChatItems((current) => current.map((item) => {
      if (item.type !== "event" || !item.event.dashboardId) return item;
      if (!previewById.has(item.event.dashboardId)) return item;
      const preview = previewById.get(item.event.dashboardId);
      if (!preview) {
        return {
          ...item,
          event: {
            ...item.event,
            dashboardStatus: "deleted",
            status: "completed",
          },
        };
      }
      return {
        ...item,
        event: {
          ...item.event,
          title: preview.artifact.title,
          ...(preview.artifact.description ? { detail: preview.artifact.description } : {}),
          dashboardSlug: preview.artifact.slug,
          dashboardStatus: preview.artifact.status,
          dashboardVersion: preview.artifact.version,
          artifactKey: preview.artifact.artifactKey,
          output: preview.artifact,
          status: "completed",
        },
      };
    }));
  }

  return (
    <section
      className={cn(
        "grid h-[calc(100vh-4rem)] min-h-0 overflow-hidden bg-white text-slate-950",
        dashboardPanelOpen
          ? "grid-cols-[var(--session-column)_minmax(0,1fr)_minmax(380px,var(--dashboard-column))]"
          : "grid-cols-[var(--session-column)_minmax(0,1fr)]",
        "max-lg:grid-cols-[minmax(0,1fr)]"
      )}
      style={operatorGridStyle}
    >
      <aside className="grid min-h-0 grid-rows-[auto_auto_auto_minmax(0,1fr)] border-r border-slate-200 bg-slate-50 max-lg:hidden">
        <div className={cn("flex items-center gap-2 px-3 py-3", sessionSidebarCollapsed ? "justify-center" : "justify-between")}>
          <span className={cn("text-sm font-medium text-slate-600", sessionSidebarCollapsed && "sr-only")}>Sessions</span>
          <Button
            aria-label={sessionSidebarCollapsed ? "Expand sessions" : "Collapse sessions"}
            className="text-slate-500 hover:bg-slate-100 hover:text-slate-950"
            onClick={() => setSessionSidebarCollapsed((value) => !value)}
            size="icon-sm"
            title={sessionSidebarCollapsed ? "Expand sessions" : "Collapse sessions"}
            type="button"
            variant="ghost"
          >
            {sessionSidebarCollapsed ? <PanelLeftOpenIcon /> : <PanelLeftCloseIcon />}
          </Button>
        </div>

        <div className="px-3 pb-3">
          <Button
            className={cn("w-full justify-start bg-white text-slate-950 hover:bg-slate-100", sessionSidebarCollapsed && "justify-center px-0")}
            onClick={startNewSession}
            title="New session"
            type="button"
          >
            <PlusIcon />
            <span className={sessionSidebarCollapsed ? "sr-only" : ""}>New session</span>
          </Button>
        </div>

        {!sessionSidebarCollapsed ? (
          <div className="px-3 pb-3">
            <label className="relative block">
              <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-500" />
              <Input
                aria-label="Search sessions"
                className="border-slate-200 bg-white pl-9 text-slate-950 placeholder:text-slate-400 focus-visible:ring-slate-300"
                onChange={(event) => setSessionSearch(event.target.value)}
                placeholder="Search sessions"
                value={sessionSearch}
              />
            </label>
          </div>
        ) : null}

        <div className="min-h-0 overflow-y-auto px-2 pb-3">
          <div className="grid gap-1">
            {filteredSessions.slice(0, 60).map((session) => (
              <SessionRow
                active={operatorSessionId === session.id}
                collapsed={sessionSidebarCollapsed}
                key={session.id}
                onDelete={() => setPendingDeleteSession(session)}
                onOpen={() => void openOperatorSession(session.id)}
                onRename={() => beginRenameSession(session)}
                onRenameCommit={() => void commitRenameSession(session.id)}
                onRenameTitleChange={setRenamingTitle}
                onRenameCancel={() => {
                  setRenamingSessionId(null);
                  setRenamingTitle("");
                }}
                renaming={renamingSessionId === session.id}
                renamingTitle={renamingTitle}
                session={session}
              />
            ))}
          </div>
        </div>
      </aside>

      <section className="grid min-h-0 min-w-0 grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden">
        <header className="flex min-h-16 items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 max-md:flex-col max-md:items-stretch max-md:py-4">
          <div className="min-w-0">
            <h1 className="truncate text-base font-semibold text-slate-950">{activeSession?.title ?? "Studio Operator"}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1">{props.manifest.target.name}</span>
              {diffFiles.length ? <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-emerald-700">{diffFiles.length} changed</span> : null}
              {artifacts.length ? <span className="rounded-full border border-sky-200 bg-sky-50 px-2 py-1 text-sky-700">{artifacts.length} artifacts</span> : null}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ModelSelector onOpenChange={setModelSelectorOpen} open={modelSelectorOpen}>
              <ModelSelectorTrigger asChild>
                <Button
                  className="border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                  size="sm"
                  type="button"
                  variant="outline"
                >
                  <ModelSelectorLogo provider="openai" />
                  <span className="max-w-40 truncate">{selectedModelData?.label ?? selectedModel}</span>
                </Button>
              </ModelSelectorTrigger>
              <ModelSelectorContent className="border-slate-200 bg-white text-slate-950">
                <ModelSelectorInput placeholder="Search models..." />
                <ModelSelectorList>
                  <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
                  <ModelSelectorGroup heading="Available models">
                    {props.manifest.operator.models.map((model) => (
                      <ModelSelectorItem
                        key={model.id}
                        onSelect={() => {
                          setSelectedModel(model.id);
                          setModelSelectorOpen(false);
                        }}
                        value={model.id}
                      >
                        <ModelSelectorLogo provider="openai" />
                        <ModelSelectorName>{model.label}</ModelSelectorName>
                        {model.id === selectedModel ? <CheckIcon className="ml-auto size-4" /> : <span className="ml-auto size-4" />}
                      </ModelSelectorItem>
                    ))}
                  </ModelSelectorGroup>
                </ModelSelectorList>
              </ModelSelectorContent>
            </ModelSelector>

            <div className="inline-flex rounded-md border border-slate-200 bg-slate-50 p-1">
              {reasoningEfforts.map((effort) => (
                <button
                  className={cn(
                    "h-7 rounded px-2 text-xs transition",
                    selectedReasoningEffort === effort.id
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-500 hover:bg-white hover:text-slate-950"
                  )}
                  key={effort.id}
                  onClick={() => setSelectedReasoningEffort(effort.id)}
                  type="button"
                >
                  {effort.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <Conversation className="min-h-0 bg-white">
          <ConversationContent className="h-full gap-5 overflow-y-auto px-4 py-8">
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-5">
              {visibleChatItems.map((item) => item.type === "message" ? (
                <ChatMessage
                  continuing={shouldMarkItemContinuing(item, visibleChatItems, isWorking, assistantIsTyping)}
                  item={item}
                  key={item.id}
                />
              ) : (
                <OperatorEventWidget
                  checkResult={item.event.dashboardId ? dashboardChecks[item.event.dashboardId] ?? null : null}
                  continuing={shouldMarkItemContinuing(item, visibleChatItems, isWorking, assistantIsTyping)}
                  event={item.event}
                  key={item.id}
                  onCheckDashboard={checkDashboardFromChat}
                  onDeleteDashboard={deleteDashboardFromChat}
                  onOpenDashboard={openDashboardFromChat}
                  onOpenDashboardPanel={openDashboardPanelFromChat}
                  onPublishDashboard={publishDashboardFromChat}
                />
              ))}
              {shouldShowStandaloneWorkingIndicator(visibleChatItems, isWorking, assistantIsTyping) ? <InlineWorkingIndicator /> : null}

              {!hasUserMessages ? (
                <Suggestions className="px-0">
                  {suggestions.map((suggestion) => (
                    <Suggestion
                      className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      disabled={isWorking}
                      key={suggestion.label}
                      onClick={() => void sendOperatorMessage(suggestion.prompt)}
                      suggestion={suggestion.label}
                      variant="outline"
                    >
                      <SparklesIcon className="size-4" />
                      {suggestion.label}
                    </Suggestion>
                  ))}
                </Suggestions>
              ) : null}
            </div>
          </ConversationContent>
          <ConversationScrollButton className="bottom-5 border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50" />
        </Conversation>

        <footer className="border-t border-slate-200 bg-white px-4 py-4">
          <div className="mx-auto max-w-4xl">
            <PromptInput
              className="rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70"
              onSubmit={(message) => void sendOperatorMessage(message.text)}
            >
              <PromptInputBody>
                <PromptInputTextarea
                  className="min-h-20 resize-none text-slate-950 placeholder:text-slate-400"
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      void sendOperatorMessage();
                    }
                  }}
                  placeholder="Ask Operator to explain, edit, create dashboards, or save work"
                  value={input}
                />
              </PromptInputBody>
              <PromptInputFooter>
                <PromptInputTools>
                  <PromptInputButton className="text-slate-500" disabled type="button" variant="ghost">
                    <span className={cn("size-2 rounded-full", isWorking ? "animate-pulse bg-emerald-500" : "bg-slate-400")} />
                    {isWorking ? "Working" : "Ready"}
                  </PromptInputButton>
                </PromptInputTools>
                <PromptInputSubmit
                  disabled={!isWorking && !input.trim()}
                  onStop={() => void stopOperatorTurn()}
                  status={isWorking ? "streaming" : "ready"}
                />
              </PromptInputFooter>
            </PromptInput>
          </div>
        </footer>
      </section>

      {dashboardPanelOpen ? (
        <aside className="grid min-h-0 min-w-[380px] grid-rows-[auto_auto_minmax(0,1fr)] border-l border-slate-200 bg-white max-lg:hidden">
          <div className="flex min-h-16 items-center justify-between gap-3 border-b border-slate-200 px-4">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase text-slate-500">Dashboard view</p>
              <h2 className="truncate text-sm font-semibold text-slate-950">
                {previewDashboard?.artifact.title ?? "No dashboard selected"}
              </h2>
            </div>
            <Button
              aria-label="Close dashboard sidebar"
              className="text-slate-500 hover:bg-slate-100 hover:text-slate-950"
              onClick={() => setDashboardPanelOpen(false)}
              size="icon-sm"
              title="Close dashboard sidebar"
              type="button"
              variant="ghost"
            >
              <PanelRightCloseIcon />
            </Button>
          </div>
          <div className="border-b border-slate-200 px-4 py-3">
            <label className="grid gap-2 text-xs font-medium uppercase text-slate-500">
              Sidebar width
              <input
                aria-label="Dashboard sidebar width"
                className="w-full accent-slate-950"
                max={920}
                min={380}
                onChange={(event) => setDashboardPanelWidth(Number(event.target.value))}
                step={20}
                type="range"
                value={dashboardPanelWidth}
              />
            </label>
          </div>
          <div className="min-h-0 overflow-y-auto bg-slate-50/60 p-4">
            {dashboardActionError ? (
              <div className="mb-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {dashboardActionError}
              </div>
            ) : null}
            {previewDashboard ? (
              <div className="grid gap-3">
                <div className="flex flex-wrap gap-2">
                  <Button
                    className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    onClick={() => void checkDashboardFromChat(previewDashboard.artifact.id)}
                    size="sm"
                    type="button"
                    variant="outline"
                  >
                    <RefreshCwIcon />
                    Check
                  </Button>
                  {previewDashboard.artifact.status !== "published" ? (
                    <Button onClick={() => void publishDashboardFromChat(previewDashboard.artifact.id)} size="sm" type="button">
                      <CheckIcon />
                      Publish
                    </Button>
                  ) : null}
                  <Button
                    className="border-red-200 bg-white text-red-600 hover:bg-red-50"
                    onClick={() => void deleteDashboardFromChat(previewDashboard.artifact.id)}
                    size="sm"
                    type="button"
                    variant="outline"
                  >
                    <Trash2Icon />
                    Delete
                  </Button>
                </div>
                <DashboardRenderer
                  checkResult={dashboardChecks[previewDashboard.artifact.id] ?? null}
                  compact
                  previewDashboard={previewDashboard}
                />
              </div>
            ) : (
              <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-500">
                Open a dashboard from the chat card to pin it here.
              </div>
            )}
          </div>
        </aside>
      ) : null}

      <Dialog onOpenChange={setDashboardDialogOpen} open={dashboardDialogOpen}>
        <DialogContent className="grid max-h-[92vh] w-[min(1480px,96vw)] max-w-none grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden border-slate-200 bg-white text-slate-950">
          <DialogHeader>
            <DialogTitle>{previewDashboard?.artifact.title ?? "Dashboard"}</DialogTitle>
            <DialogDescription className="text-slate-500">
              {previewDashboard ? `${previewDashboard.artifact.status} / v${previewDashboard.artifact.version}` : "Loading"}
            </DialogDescription>
          </DialogHeader>
          <div className="min-h-0 overflow-y-auto pr-1">
            {dashboardActionError ? (
              <div className="mb-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {dashboardActionError}
              </div>
            ) : null}
            {previewDashboard ? (
              <DashboardRenderer
                checkResult={dashboardChecks[previewDashboard.artifact.id] ?? null}
                compact
                previewDashboard={previewDashboard}
              />
            ) : null}
          </div>
          <DialogFooter className="gap-2 sm:justify-between">
            <div className="flex flex-wrap gap-2">
              <Button
                className="border-slate-200 text-slate-700 hover:bg-slate-50"
                onClick={reviseDashboardFromDialog}
                type="button"
                variant="outline"
              >
                <PencilIcon />
                Ask for changes
              </Button>
              {previewDashboard ? (
                <Button
                  className="border-slate-200 text-slate-700 hover:bg-slate-50"
                  onClick={() => void openDashboardPanelFromChat(previewDashboard.artifact.id)}
                  type="button"
                  variant="outline"
                >
                  <PanelRightOpenIcon />
                  Sidebar
                </Button>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-2">
              {previewDashboard ? (
                <>
                  <Button
                    className="border-slate-200 text-slate-700 hover:bg-slate-50"
                    onClick={() => void checkDashboardFromChat(previewDashboard.artifact.id)}
                    type="button"
                    variant="outline"
                  >
                    <RefreshCwIcon />
                    Check
                  </Button>
                  {previewDashboard.artifact.status !== "published" ? (
                    <Button onClick={() => void publishDashboardFromChat(previewDashboard.artifact.id)} type="button">
                      <CheckIcon />
                      Publish
                    </Button>
                  ) : null}
                  <Button
                    className="border-red-200 bg-white text-red-600 hover:bg-red-50"
                    onClick={() => void deleteDashboardFromChat(previewDashboard.artifact.id)}
                    type="button"
                    variant="outline"
                  >
                    <Trash2Icon />
                    Delete
                  </Button>
                </>
              ) : null}
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        onOpenChange={(open) => {
          if (!open) setPendingDeleteSession(null);
        }}
        open={pendingDeleteSession !== null}
      >
        <DialogContent className="border-slate-200 bg-white text-slate-950">
          <DialogHeader>
            <DialogTitle>Delete session?</DialogTitle>
            <DialogDescription className="text-slate-500">
              {pendingDeleteSession?.title ?? "This session"} will be removed from Studio.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              className="border-slate-200 text-slate-700 hover:bg-slate-50"
              onClick={() => setPendingDeleteSession(null)}
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
            <Button onClick={() => void confirmDeleteSession()} type="button" variant="destructive">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ChatMessage({ continuing = false, item }: { continuing?: boolean; item: OperatorChatMessageItem }) {
  return (
    <Message className={cn(item.role === "assistant" && "max-w-[88%]")} data-testid="operator-message" from={item.role}>
      <MessageContent className={cn(item.role === "assistant" && "max-w-3xl text-slate-800")}>
        {item.role === "assistant" ? (
          item.text ? (
            <>
              <MessageResponse isAnimating={item.streaming ?? false}>{item.text}</MessageResponse>
              {continuing ? <InlineContinuationStatus className="mt-3" /> : null}
            </>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-slate-500">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
              Working
            </span>
          )
        ) : (
          <p className="whitespace-pre-wrap">{item.text}</p>
        )}
      </MessageContent>
    </Message>
  );
}

function OperatorEventWidget({
  checkResult,
  continuing = false,
  event,
  onCheckDashboard,
  onDeleteDashboard,
  onOpenDashboard,
  onOpenDashboardPanel,
  onPublishDashboard,
}: {
  checkResult?: DashboardCheckResult | null | undefined;
  continuing?: boolean;
  event: OperatorEventEntry;
  onCheckDashboard: (id: string) => void | Promise<void>;
  onDeleteDashboard: (id: string) => void | Promise<void>;
  onOpenDashboard: (id: string) => void | Promise<void>;
  onOpenDashboardPanel: (id: string) => void | Promise<void>;
  onPublishDashboard: (id: string) => void | Promise<void>;
}) {
  if (event.kind === "activity") {
    return <InlineActivityEvent continuing={continuing} event={event} />;
  }
  if (event.kind === "dashboard") {
    return (
      <DashboardEventCard
        checkResult={checkResult ?? null}
        continuing={continuing}
        event={event}
        onCheckDashboard={onCheckDashboard}
        onDeleteDashboard={onDeleteDashboard}
        onOpenDashboard={onOpenDashboard}
        onOpenDashboardPanel={onOpenDashboardPanel}
        onPublishDashboard={onPublishDashboard}
      />
    );
  }
  if (event.kind === "reasoning") {
    return (
      <div className="operator-event-in mx-auto w-full max-w-3xl" data-testid="operator-event">
        <Reasoning
          className="mb-0 rounded-lg border border-slate-200 bg-slate-50 p-3"
          defaultOpen={event.status === "running"}
          isStreaming={event.status === "running"}
        >
          <ReasoningTrigger
            className="text-slate-600 hover:text-slate-950"
            getThinkingMessage={() => (
              <span className="text-sm">{event.title}</span>
            )}
          />
          <ReasoningContent className="mt-3 text-slate-700">{event.detail ?? event.title}</ReasoningContent>
        </Reasoning>
      </div>
    );
  }
  if (event.kind === "diff") {
    return (
      <div className="operator-event-in mx-auto w-full max-w-3xl" data-testid="operator-event">
        <Task className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
          <TaskTrigger className="text-emerald-800" title={event.title} />
          <TaskContent>
            {event.files?.length ? event.files.map((file) => (
              <TaskItem className="flex flex-wrap items-center gap-2 text-slate-700" key={`${file.status}:${file.path}`}>
                <TaskItemFile className="border-emerald-200 bg-emerald-100 text-emerald-800">{file.status}</TaskItemFile>
                <span className="break-all">{file.path}</span>
              </TaskItem>
            )) : <TaskItem>{event.detail}</TaskItem>}
          </TaskContent>
        </Task>
      </div>
    );
  }
  return (
    <div className="operator-event-in mx-auto w-full max-w-3xl" data-testid="operator-event">
      <Tool className={cn("mb-0 border-slate-200 bg-white", event.kind === "error" && "border-red-200 bg-red-50")} defaultOpen={event.status !== "completed"}>
        <ToolHeader
          state={toolStateForEvent(event)}
          title={event.title}
          toolName={event.name ?? event.kind}
          type="dynamic-tool"
        />
        <ToolContent className="text-slate-700">
          {event.action ? <DetailBlock label="Action" value={event.action} /> : null}
          {event.input !== undefined ? <DetailBlock label="Input" value={event.input} /> : null}
          {event.output !== undefined ? <DetailBlock label="Output" value={event.output} /> : null}
          {event.detail ? <DetailBlock label="Details" value={event.detail} /> : null}
        </ToolContent>
      </Tool>
      {continuing ? <InlineContinuationStatus className="mt-2" /> : null}
    </div>
  );
}

function InlineActivityEvent({ continuing = false, event }: { continuing?: boolean; event: OperatorEventEntry }) {
  const history = event.history ?? [];
  if (history.length > 1) {
    const summary = activityRunSummary(event, history);
    const activeTitle = activeActivityTitle(history);
    const visibleHistory = displayHistoryRows(history);
    const isActive = event.status === "running" && Boolean(activeTitle);
    const isContinuing = continuing && !isActive;
    return (
      <details className="operator-event-in group mx-auto w-full max-w-3xl text-sm text-slate-500" data-testid="operator-event">
        <summary className="inline-flex max-w-full cursor-pointer list-none items-center gap-2 rounded-md px-0 py-1 text-slate-500 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300">
          <SquareTerminalIcon className="size-4 shrink-0 text-slate-400" />
          {isActive ? <ActivityStatusDot /> : null}
          <AnimatedActivityText active={isActive} text={activeTitle ?? summary} />
          {isContinuing ? <InlineContinuationStatus /> : null}
          <ChevronDownIcon className="size-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
        </summary>
        <ol className="mt-2 grid gap-1.5 pl-6">
          {visibleHistory.map((entry) => (
            <li className="min-w-0" key={entry.id}>
              <p className="truncate text-slate-500">{entry.count > 1 ? `${entry.title} x${entry.count}` : entry.title}</p>
              {entry.detail ? <p className="truncate text-xs text-slate-400">{entry.detail}</p> : null}
            </li>
          ))}
        </ol>
      </details>
    );
  }

  return (
    <div className="operator-event-in mx-auto w-full max-w-3xl text-sm text-slate-500" data-testid="operator-event">
      <span className="inline-flex max-w-full items-center gap-2 rounded-md py-1 text-slate-500">
        <SquareTerminalIcon className="size-4 shrink-0 text-slate-400" />
        {event.status === "running" ? <ActivityStatusDot /> : null}
        <AnimatedActivityText active={event.status === "running" && isStartedActivityTitle(event.title)} text={event.title} />
        {event.detail ? <span className="truncate text-slate-400">{event.detail}</span> : null}
        {continuing && event.status !== "running" ? <InlineContinuationStatus /> : null}
      </span>
    </div>
  );
}

function DashboardEventCard({
  checkResult,
  continuing = false,
  event,
  onCheckDashboard,
  onDeleteDashboard,
  onOpenDashboard,
  onOpenDashboardPanel,
  onPublishDashboard,
}: {
  checkResult?: DashboardCheckResult | null | undefined;
  continuing?: boolean;
  event: OperatorEventEntry;
  onCheckDashboard: (id: string) => void | Promise<void>;
  onDeleteDashboard: (id: string) => void | Promise<void>;
  onOpenDashboard: (id: string) => void | Promise<void>;
  onOpenDashboardPanel: (id: string) => void | Promise<void>;
  onPublishDashboard: (id: string) => void | Promise<void>;
}) {
  const dashboardId = event.dashboardId;
  const deleted = event.dashboardStatus === "deleted";
  return (
    <div className="operator-event-in mx-auto w-full max-w-3xl" data-testid="operator-dashboard-event">
      <section className={cn(
        "rounded-lg border bg-white p-4",
        deleted ? "border-slate-200 opacity-75" : "border-sky-200",
      )}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase text-sky-700">
              <BarChart3Icon className="size-4" />
              Dashboard
            </p>
            <h3 className="mt-2 truncate text-base font-semibold text-slate-950">{event.title}</h3>
            <p className="mt-1 text-sm text-slate-500">
              {deleted ? "Deleted" : `${event.dashboardStatus ?? "draft"} / v${event.dashboardVersion ?? 1}`}
              {event.dashboardSlug ? ` / ${event.dashboardSlug}` : ""}
            </p>
          </div>
          {dashboardId && !deleted ? (
            <div className="flex flex-wrap gap-2">
              <Button
                className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                onClick={() => void onOpenDashboard(dashboardId)}
                size="sm"
                type="button"
                variant="outline"
              >
                <EyeIcon />
                Open
              </Button>
              <Button
                className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                onClick={() => void onOpenDashboardPanel(dashboardId)}
                size="sm"
                type="button"
                variant="outline"
              >
                <PanelRightOpenIcon />
                Sidebar
              </Button>
              <Button
                className="border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                onClick={() => void onCheckDashboard(dashboardId)}
                size="sm"
                type="button"
                variant="outline"
              >
                <RefreshCwIcon />
                Check
              </Button>
              {event.dashboardStatus !== "published" ? (
                <Button
                  className="bg-slate-950 text-white hover:bg-slate-800"
                  onClick={() => void onPublishDashboard(dashboardId)}
                  size="sm"
                  type="button"
                >
                  <CheckIcon />
                  Publish
                </Button>
              ) : null}
              <Button
                className="border-red-200 bg-white text-red-600 hover:bg-red-50"
                onClick={() => void onDeleteDashboard(dashboardId)}
                size="sm"
                type="button"
                variant="outline"
              >
                <Trash2Icon />
                Delete
              </Button>
            </div>
          ) : null}
        </div>
        {event.detail ? <p className="mt-3 text-sm leading-6 text-slate-600">{event.detail}</p> : null}
        {event.artifactKey ? (
          <details className="mt-3 rounded-md bg-slate-50 text-xs text-slate-500">
            <summary className="cursor-pointer list-none px-2 py-2 font-medium text-slate-600">Artifact info</summary>
            <p className="break-all px-2 pb-2">{event.artifactKey}</p>
          </details>
        ) : null}
        {checkResult ? (
          <div className={cn(
            "mt-3 rounded-md border p-3 text-sm",
            checkResult.status === "passed" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-800",
          )}>
            <p className="font-medium">Check {checkResult.status}</p>
            {checkResult.issues.length ? (
              <ul className="mt-2 list-disc pl-5">
                {checkResult.issues.map((issue) => <li key={issue}>{issue}</li>)}
              </ul>
            ) : null}
          </div>
        ) : null}
      </section>
      {continuing ? <InlineContinuationStatus className="mt-2" /> : null}
    </div>
  );
}

function ActivityStatusDot() {
  return <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-emerald-500" />;
}

function InlineWorkingIndicator() {
  return (
    <div className="operator-event-in mx-auto w-full max-w-3xl text-sm" data-testid="operator-working-indicator">
      <span className="inline-flex max-w-full items-center gap-2 rounded-md py-1 text-slate-500">
        <SquareTerminalIcon className="size-4 shrink-0 text-slate-400" />
        <ActivityStatusDot />
        <span className="operator-working-text min-w-0 truncate">Starting work</span>
        <span aria-hidden="true" className="inline-flex w-5 shrink-0 justify-start text-slate-400">
          <span className="animate-pulse">.</span>
          <span className="animate-pulse [animation-delay:150ms]">.</span>
          <span className="animate-pulse [animation-delay:300ms]">.</span>
        </span>
      </span>
    </div>
  );
}

function InlineContinuationStatus({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex shrink-0 items-center gap-1.5 text-xs text-slate-400", className)}>
      <ActivityStatusDot />
      <span className="operator-working-text">Continuing</span>
      <span aria-hidden="true" className="inline-flex w-4 justify-start text-slate-400">
        <span className="animate-pulse">.</span>
        <span className="animate-pulse [animation-delay:150ms]">.</span>
        <span className="animate-pulse [animation-delay:300ms]">.</span>
      </span>
    </span>
  );
}

function AnimatedActivityText({ active, text }: { active: boolean; text: string }) {
  return (
    <span className={cn("min-w-0 truncate", active && "text-slate-700")}>
      {text}
      {active ? (
        <span aria-hidden="true" className="inline-flex w-5 justify-start text-slate-400">
          <span className="animate-pulse">.</span>
          <span className="animate-pulse [animation-delay:150ms]">.</span>
          <span className="animate-pulse [animation-delay:300ms]">.</span>
        </span>
      ) : null}
    </span>
  );
}

function DetailBlock(props: { label: string; value: unknown }) {
  return (
    <div className="grid gap-2">
      <span className="text-xs font-medium uppercase text-slate-500">{props.label}</span>
      <pre className="max-h-72 overflow-auto whitespace-pre-wrap rounded-md bg-slate-100 p-3 text-xs leading-5 text-slate-700">
        {formatUnknown(props.value)}
      </pre>
    </div>
  );
}

function SessionRow(props: {
  active: boolean;
  collapsed: boolean;
  onDelete: () => void;
  onOpen: () => void;
  onRename: () => void;
  onRenameCancel: () => void;
  onRenameCommit: () => void;
  onRenameTitleChange: (value: string) => void;
  renaming: boolean;
  renamingTitle: string;
  session: OperatorSessionRow;
}) {
  if (props.renaming && !props.collapsed) {
    return (
      <div className="grid gap-2 rounded-lg border border-slate-200 bg-white p-2">
        <Input
          aria-label="Rename session"
          autoFocus
          className="border-slate-200 bg-white text-slate-950"
          onChange={(event) => props.onRenameTitleChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") props.onRenameCommit();
            if (event.key === "Escape") props.onRenameCancel();
          }}
          value={props.renamingTitle}
        />
        <div className="flex justify-end gap-1">
          <Button onClick={props.onRenameCancel} size="icon-xs" type="button" variant="ghost">
            <XIcon />
          </Button>
          <Button onClick={props.onRenameCommit} size="icon-xs" type="button" variant="secondary">
            <CheckIcon />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group flex items-stretch gap-1 rounded-lg p-1 transition",
        props.active ? "bg-white shadow-sm ring-1 ring-slate-200" : "hover:bg-slate-100",
        props.collapsed && "justify-center"
      )}
    >
      <button
        className={cn(
          "min-w-0 flex-1 rounded-md px-2 py-2 text-left text-sm text-slate-700",
          props.collapsed ? "grid place-items-center px-0" : "grid gap-1"
        )}
        onClick={props.onOpen}
        title={props.session.title}
        type="button"
      >
        {props.collapsed ? <FileTextIcon className="size-4" /> : (
          <>
            <span className="truncate">{props.session.title}</span>
            <span className="text-xs text-slate-500">{formatDateTime(props.session.updatedAt)}</span>
          </>
        )}
      </button>

      {!props.collapsed ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="self-center text-slate-400 opacity-0 hover:bg-slate-100 hover:text-slate-950 group-hover:opacity-100 data-[state=open]:opacity-100"
              size="icon-xs"
              type="button"
              variant="ghost"
            >
              <MoreHorizontalIcon />
              <span className="sr-only">Session actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="border-slate-200 bg-white text-slate-950">
            <DropdownMenuItem onSelect={props.onRename}>
              <PencilIcon className="mr-2 size-4" />
              Rename
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600 focus:text-red-700" onSelect={props.onDelete}>
              <Trash2Icon className="mr-2 size-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
    </div>
  );
}

type RawOperatorSession = {
  id: string;
  title: string;
  updatedAt: string | Date;
  modelId: string | null;
};

type RawDashboardRow = {
  id: string;
  status: "draft" | "published" | "archived";
  currentVersion: number;
  updatedAt: string | Date;
};

function dashboardSnapshotValue(dashboard: RawDashboardRow) {
  return `${dashboard.status}:v${dashboard.currentVersion}:${String(dashboard.updatedAt)}`;
}

function hasDashboardExport(code: string) {
  return /\bexport\s+(default\s+)?function\s+Dashboard\b/.test(code)
    || /\bexport\s+const\s+Dashboard\b/.test(code)
    || /\bexport\s*\{\s*Dashboard\s*\}/.test(code);
}

function normalizeSession(session: RawOperatorSession): OperatorSessionRow {
  return {
    id: session.id,
    title: session.title,
    updatedAt: String(session.updatedAt),
    modelId: session.modelId,
  };
}

function defaultModel(manifest: StudioTargetManifest) {
  return manifest.operator.models.find((model) => model.default)?.id ?? manifest.operator.models[0]?.id ?? "gpt-5.5";
}

function welcomeMessage(targetName: string): OperatorMessage {
  return {
    id: "welcome",
    role: "assistant",
    text: `Ready to work on ${targetName}. I can explain the agent, inspect or edit the sandbox, and create dashboard drafts through Studio APIs.`,
  };
}

function messageToChatItem(message: OperatorMessage): OperatorChatMessageItem {
  return { ...message, type: "message" };
}

type ActivityHistoryEntry = NonNullable<OperatorEventEntry["history"]>[number];
type ActivityHistoryRow = ActivityHistoryEntry & { count: number };

function activityRunSummary(event: OperatorEventEntry, history: ActivityHistoryEntry[]) {
  const concrete = compactHistoryRows(history).filter(isConcreteActivityEntry);
  if (!concrete.length) {
    const verb = event.status === "running" ? "Working across" : "Completed";
    return `${verb} ${history.length} operator ${history.length === 1 ? "update" : "updates"}`;
  }

  const parts: string[] = [];
  const files = countByCategory(concrete, "file");
  const searches = countByCategory(concrete, "search");
  const lists = countByCategory(concrete, "list");
  const commands = countByCategory(concrete, "command");
  const tools = uniqueToolNames(concrete);

  if (files) parts.push(`Explored ${files} ${files === 1 ? "file" : "files"}`);
  if (searches) parts.push(`${searches} ${searches === 1 ? "search" : "searches"}`);
  if (lists) parts.push(`${lists} ${lists === 1 ? "list" : "lists"}`);
  if (commands) parts.push(`ran ${commands} ${commands === 1 ? "command" : "commands"}`);
  for (const tool of tools.slice(0, 2)) parts.push(`used ${tool}`);
  if (tools.length > 2) parts.push(`used ${tools.length - 2} more tools`);

  return parts.length ? sentenceCase(parts.join(", ")) : concrete[concrete.length - 1]?.title ?? event.title;
}

function activeActivityTitle(history: ActivityHistoryEntry[]) {
  const lastConcrete = compactHistoryRows(history).filter(isConcreteActivityEntry).at(-1);
  if (!lastConcrete || !isStartedActivityTitle(lastConcrete.title)) return null;
  return lastConcrete.title.replace(/\.$/, "");
}

function compactHistoryRows(history: ActivityHistoryEntry[]): ActivityHistoryRow[] {
  const rows: ActivityHistoryRow[] = [];
  for (const entry of history) {
    const previous = rows[rows.length - 1];
    if (previous && isStartedCompletedPair(previous, entry)) {
      rows[rows.length - 1] = { ...entry, count: previous.count };
      continue;
    }
    if (previous && previous.title === entry.title && previous.detail === entry.detail) {
      previous.count += 1;
      continue;
    }
    rows.push({ ...entry, count: 1 });
  }
  return rows;
}

function displayHistoryRows(history: ActivityHistoryEntry[]) {
  const rows = compactHistoryRows(history);
  const concrete = rows.filter(isConcreteActivityEntry);
  return concrete.length ? concrete : rows;
}

function isStartedCompletedPair(previous: ActivityHistoryEntry, next: ActivityHistoryEntry) {
  if (activityCategory(previous) !== activityCategory(next)) return false;
  if (!["file", "search", "list", "command", "tool"].includes(activityCategory(next))) return false;
  if ((previous.detail ?? "") !== (next.detail ?? "")) return false;
  return isStartedActivityTitle(previous.title) && isCompletedActivityTitle(next.title);
}

function isStartedActivityTitle(title: string) {
  return /^(reading|searching|listing|running|using|querying)\b/i.test(title);
}

function isCompletedActivityTitle(title: string) {
  return /^(read|searched|listed|ran|used|queried)\b/i.test(title);
}

function isConcreteActivityEntry(entry: ActivityHistoryEntry) {
  const title = entry.title.toLowerCase();
  if (entry.category && ["file", "search", "list", "command", "tool"].includes(entry.category)) return true;
  if (/^(read|reading|searched|searching|listed|listing|ran|running|used|using|queried|querying)\b/.test(title)) return true;
  return false;
}

function shouldDisplayActivityEvent(event: Pick<OperatorEventEntry, "kind" | "title" | "category">) {
  return event.kind === "activity" && isConcreteActivityEntry({
    id: "candidate",
    title: humanizeActivity(event.title),
    ...(event.category ? { category: event.category } : {}),
  });
}

function countByCategory(history: ActivityHistoryEntry[], category: string) {
  return history.filter((entry) => activityCategory(entry) === category).length;
}

function activityCategory(entry: ActivityHistoryEntry) {
  if (entry.category) return entry.category;
  const title = entry.title.toLowerCase();
  if (/^(read|reading)\b/.test(title)) return "file";
  if (/^(searched|searching)\b/.test(title)) return "search";
  if (/^(listed|listing)\b/.test(title)) return "list";
  if (/^(ran|running)\b/.test(title)) return "command";
  if (/^(used|using)\b/.test(title)) return "tool";
  return "other";
}

function uniqueToolNames(history: ActivityHistoryEntry[]) {
  const names = new Set<string>();
  for (const entry of history) {
    if (activityCategory(entry) !== "tool") continue;
    const name = entry.title
      .replace(/^(Used|Using)\s+/i, "")
      .replace(/\.$/, "")
      .trim();
    if (name) names.add(name);
  }
  return [...names];
}

function sentenceCase(value: string) {
  return value ? `${value[0]!.toUpperCase()}${value.slice(1)}` : value;
}

function compactActivityEvents(items: OperatorChatItem[]): OperatorChatItem[] {
  const compacted: OperatorChatItem[] = [];
  let activityRun: OperatorChatEventItem[] = [];

  function flushActivityRun() {
    if (!activityRun.length) return;
    if (activityRun.length === 1) {
      const only = activityRun[0]!;
      compacted.push({ ...only, event: normalizeActivityEvent(only.event) });
      activityRun = [];
      return;
    }

    const first = normalizeActivityEvent(activityRun[0]!.event);
    const latest = normalizeActivityEvent(activityRun[activityRun.length - 1]!.event);
    compacted.push({
      id: first.id,
      type: "event",
      event: {
        ...latest,
        id: first.id,
        history: activityRun.map((item) => ({
          id: item.event.id,
          title: humanizeActivity(item.event.title),
          ...(usefulActivityDetail(item.event.detail) ? { detail: usefulActivityDetail(item.event.detail)! } : {}),
          ...(item.event.category ? { category: item.event.category } : {}),
          ...(item.event.input !== undefined ? { input: item.event.input } : {}),
          ...(item.event.output !== undefined ? { output: item.event.output } : {}),
          ...(item.event.status ? { status: item.event.status } : {}),
        })),
      },
    });
    activityRun = [];
  }

  for (const item of items) {
    if (item.type === "event" && item.event.kind === "activity") {
      const normalized = normalizeActivityEvent(item.event);
      if (!shouldDisplayActivityEvent(normalized)) continue;
      if (shouldCompactActivity(normalized)) {
        activityRun.push({ ...item, event: normalized });
      } else {
        flushActivityRun();
        compacted.push({ ...item, event: normalized });
      }
    } else {
      flushActivityRun();
      compacted.push(item);
    }
  }
  flushActivityRun();
  return compacted;
}

function isAssistantTyping(items: OperatorChatItem[]) {
  return items.some((item) => item.type === "message" && item.role === "assistant" && Boolean(item.streaming));
}

function shouldMarkItemContinuing(
  item: OperatorChatItem,
  items: OperatorChatItem[],
  isWorking: boolean,
  assistantIsTyping: boolean,
) {
  if (!isWorking || assistantIsTyping) return false;
  const last = items.at(-1);
  if (!last || last.id !== item.id) return false;
  if (item.type === "message") return item.role === "assistant" && !item.streaming;
  return item.event.status !== "running";
}

function shouldShowStandaloneWorkingIndicator(
  items: OperatorChatItem[],
  isWorking: boolean,
  assistantIsTyping: boolean,
) {
  if (!isWorking || assistantIsTyping) return false;
  const last = items.at(-1);
  if (!last) return true;
  return last.type === "message" && last.role !== "assistant";
}

function shouldCompactActivity(event: OperatorEventEntry) {
  return event.kind === "activity" && event.status !== "error";
}

function normalizeActivityEvent(event: OperatorEventEntry): OperatorEventEntry {
  if (event.kind !== "activity") return event;
  const { detail: _detail, title: _title, history: _history, ...rest } = event;
  const detail = usefulActivityDetail(event.detail);
  return {
    ...rest,
    title: humanizeActivity(event.title),
    ...(detail ? { detail } : {}),
    ...(event.history ? {
      history: event.history.map((entry) => {
        const { detail: entryDetail, title: entryTitle, ...restEntry } = entry;
        const nextDetail = usefulActivityDetail(entryDetail);
        return {
          ...restEntry,
          title: humanizeActivity(entryTitle),
          ...(nextDetail ? { detail: nextDetail } : {}),
          ...(restEntry.category ? { category: restEntry.category } : {}),
          ...(restEntry.input !== undefined ? { input: restEntry.input } : {}),
          ...(restEntry.output !== undefined ? { output: restEntry.output } : {}),
        };
      }),
    } : {}),
  };
}

function usefulActivityDetail(detail: string | undefined) {
  if (!detail || detail === "conversation") return undefined;
  return redactSensitiveText(detail);
}

function activityStatus(title: string, working: boolean): NonNullable<OperatorEventEntry["status"]> {
  if (isStartedActivityTitle(title)) return "running";
  if (isCompletedActivityTitle(title)) return "completed";
  return working ? "running" : "completed";
}

function storedMessageToChatItem(message: {
  id: string;
  role: "user" | "assistant" | "system" | "tool";
  content: unknown;
}): OperatorChatItem {
  const event = storedOperatorEvent(message.content);
  if (event) {
    return { id: message.id, event, type: "event" };
  }
  return messageToChatItem({
    id: message.id,
    role: message.role === "tool" ? "system" : message.role,
    text: typeof message.content === "string" ? message.content : JSON.stringify(message.content, null, 2),
  });
}

function storedOperatorEvent(content: unknown): OperatorEventEntry | null {
  if (!isRecord(content) || content.type !== "operator.event" || !isRecord(content.event)) return null;
  const event = content.event;
  if (
    typeof event.id !== "string" ||
    typeof event.kind !== "string" ||
    typeof event.title !== "string"
  ) {
    return null;
  }
  const entry = event as unknown as OperatorEventEntry;
  return entry.kind === "activity" ? normalizeActivityEvent(entry) : entry;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function humanizeActivity(value: string) {
  const normalized = value.trim().replace(/\.$/, "");
  const lower = normalized.toLowerCase();
  if (lower === "turn started") return "Started the operator turn";
  if (lower === "turn completed") return "Finished the operator turn";
  if (lower === "item started") return "Started a Codex step";
  if (lower === "item completed") return "Finished a Codex step";
  if (normalized === "turn/started") return "Started the operator turn";
  if (normalized === "turn/completed") return "Finished the operator turn";
  if (normalized === "item/started") return "Started a Codex step";
  if (normalized === "item/completed") return "Finished a Codex step";
  if (normalized === "item/agentMessage/started") return "Started writing the assistant response";
  if (normalized === "item/agentMessage/completed") return "Finished writing the assistant response";
  if (normalized.startsWith("turn/")) return labelPath(normalized.replace("turn/", "Turn "));
  if (normalized.startsWith("item/")) return labelPath(normalized.replace("item/", "Item "));
  return redactSensitiveText(value);
}

function labelPath(value: string) {
  return value
    .split("/")
    .map((part) => part.replace(/([a-z])([A-Z])/g, "$1 $2"))
    .join(" ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function toolStateForEvent(event: OperatorEventEntry) {
  if (event.kind === "approval") return "approval-requested";
  if (event.status === "error") return "output-error";
  if (event.status === "pending") return "input-streaming";
  if (event.status === "running") return "input-available";
  return "output-available";
}

function stringifySmall(value: unknown) {
  if (value === undefined) return undefined;
  const text = typeof value === "string" ? value : JSON.stringify(value, null, 2);
  return text.length > 1600 ? `${text.slice(0, 1600)}...` : text;
}

function formatUnknown(value: unknown) {
  if (typeof value === "string") return redactSensitiveText(value);
  return redactSensitiveText(JSON.stringify(value, null, 2));
}

function redactSensitiveText(value: string) {
  return value
    .replace(/(authorization:\s*bearer\s+)[^'"\s]+/gi, "$1[redacted]")
    .replace(/(bearer\s+)[A-Za-z0-9._~+/=-]{12,}/gi, "$1[redacted]")
    .replace(/((?:token|secret|api[_-]?key|password)=)[^&\s'"]+/gi, "$1[redacted]");
}
