import type { StudioTargetManifest } from "@cognidesk/studio-contracts";
import { useEffect, useRef, useState } from "react";
import type {
  OperatorChatItem,
  OperatorEvent,
  OperatorEventEntry,
  OperatorSessionRow,
  ReasoningEffort,
} from "../types";
import {
  compactActivityEvents,
  defaultModel,
  isAssistantTyping,
  messageToChatItem,
  shouldDisplayActivityEvent,
  storedMessageToChatItem,
  welcomeMessage,
} from "./activity";
import { useOperatorDashboards } from "./dashboards";
import {
  activityEventEntry,
  approvalRequiredEntry,
  diffUpdatedEntry,
  reasoningSummaryEntry,
  toolCompletedEntry,
  toolStartedEntry,
  validationCompletedEntry,
} from "./event-builders";
import {
  canOpenOperatorSession,
  canStartNewOperatorSession,
  operatorEventSessionId,
  shouldApplyOperatorEvent,
} from "./event-routing";
import { useOperatorViewLayout } from "./layout";
import {
  createOperatorSession,
  deleteOperatorSession,
  fetchOperatorSession,
  fetchOperatorSessions,
  persistOperatorMessage,
  renameOperatorSession,
} from "./sessions";

export type OperatorViewProps = {
  manifest: StudioTargetManifest;
  initialSessions: OperatorSessionRow[];
};

export function useOperatorController(props: OperatorViewProps) {
  const socketRef = useRef<WebSocket | null>(null);
  const assistantDraftRef = useRef("");
  const assistantMessageIdRef = useRef<string | null>(null);
  const operatorSessionIdRef = useRef<string | null>(null);
  const activeTurnSessionIdRef = useRef<string | null>(null);
  const initialOpenSessionIdRef = useRef(props.initialSessions[0]?.id ?? null);
  const persistQueueRef = useRef(Promise.resolve());
  const [operatorSessionId, setOperatorSessionId] = useState<string | null>(null);
  const [sessions, setSessions] = useState<OperatorSessionRow[]>(props.initialSessions);
  const [sessionSearch, setSessionSearch] = useState("");
  const [renamingSessionId, setRenamingSessionId] = useState<string | null>(null);
  const [renamingTitle, setRenamingTitle] = useState("");
  const [pendingDeleteSession, setPendingDeleteSession] = useState<OperatorSessionRow | null>(null);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState(() => defaultModel(props.manifest));
  const [modelSelectorOpen, setModelSelectorOpen] = useState(false);
  const [selectedReasoningEffort, setSelectedReasoningEffort] = useState<ReasoningEffort>("low");
  const [chatItems, setChatItems] = useState<OperatorChatItem[]>([
    messageToChatItem(welcomeMessage(props.manifest.target.name)),
  ]);
  const [artifacts, setArtifacts] = useState<Record<string, unknown>[]>([]);
  const [diffFiles, setDiffFiles] = useState<Array<{ path: string; status: string }>>([]);
  const [isWorking, setIsWorking] = useState(false);

  const {
    checkDashboardFromChat: checkDashboard,
    dashboardActionError,
    dashboardChecks,
    dashboardSnapshotRef,
    deleteDashboardFromChat: deleteDashboard,
    fetchDashboardSnapshot,
    openDashboardFromChat: openDashboard,
    previewDashboard,
    publishDashboardFromChat,
    pushArtifactEvent,
    reconcileDashboardEvents,
    setDashboardActionError,
    setPreviewDashboard,
    surfaceDashboardChanges,
  } = useOperatorDashboards({ pushOperatorEvent, setArtifacts, setChatItems });

  const layout = useOperatorViewLayout({ hasPreviewDashboard: Boolean(previewDashboard) });
  const filteredSessions = filterSessions(sessions, sessionSearch);
  const activeSession = sessions.find((session) => session.id === operatorSessionId) ?? null;
  const selectedModelData = props.manifest.operator.models.find((model) => model.id === selectedModel);
  const hasUserMessages = chatItems.some((item) => item.type === "message" && item.role === "user");
  const visibleChatItems = compactActivityEvents(chatItems);
  const assistantIsTyping = isAssistantTyping(visibleChatItems);
  const canStartNewSession = canStartNewOperatorSession(activeTurnSessionIdRef.current, isWorking);
  operatorSessionIdRef.current = operatorSessionId;

  useEffect(() => {
    const sessionId = initialOpenSessionIdRef.current;
    if (!sessionId) return;
    initialOpenSessionIdRef.current = null;
    void openOperatorSession(sessionId);
  }, []);

  function openDashboardPanel(options: { resetWidth?: boolean } = {}) {
    setDashboardActionError(null);
    layout.openDashboardPanel(options);
  }

  function closeDashboardPanel(options?: { resetWidth?: boolean }) {
    layout.closeDashboardPanel(options);
  }

  async function startNewSession() {
    if (!canStartNewOperatorSession(activeTurnSessionIdRef.current, isWorking)) {
      pushActiveTurnBlockedEvent();
      return;
    }
    try {
      const nextSession = await createOperatorSession({
        title: "Untitled Operator session",
        targetId: props.manifest.target.id,
        modelId: selectedModel,
      });
      setSessions((items) => [nextSession, ...items.filter((item) => item.id !== nextSession.id)]);
      resetActiveSession(nextSession.id);
    } catch {
      pushOperatorEvent({ kind: "error", title: "Could not create session", status: "error" });
    }
  }

  async function loadOperatorSessions() {
    const loadedSessions = await fetchOperatorSessions();
    if (loadedSessions) setSessions(loadedSessions);
  }

  async function openOperatorSession(id: string) {
    if (!canOpenOperatorSession(id, activeTurnSessionIdRef.current)) {
      pushActiveTurnBlockedEvent();
      return;
    }
    const data = await fetchOperatorSession(id);
    if (!data) return;
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
    clearTurnState();
  }

  function beginRenameSession(session: OperatorSessionRow) {
    setRenamingSessionId(session.id);
    setRenamingTitle(session.title);
  }

  async function commitRenameSession(sessionId: string) {
    const title = renamingTitle.trim();
    if (!title) return;
    const nextSession = await renameOperatorSession(sessionId, title);
    if (!nextSession) {
      pushOperatorEvent({ kind: "error", title: "Could not rename session", status: "error" });
      return;
    }
    setSessions((items) => items.map((item) => item.id === sessionId ? nextSession : item));
    setRenamingSessionId(null);
    setRenamingTitle("");
  }

  async function confirmDeleteSession() {
    if (!pendingDeleteSession) return;
    const session = pendingDeleteSession;
    if (activeTurnSessionIdRef.current === session.id) {
      setPendingDeleteSession(null);
      pushActiveTurnBlockedEvent();
      return;
    }
    const deleted = await deleteOperatorSession(session);
    if (!deleted) {
      pushOperatorEvent({ kind: "error", title: "Could not delete session", status: "error" });
      return;
    }
    setPendingDeleteSession(null);
    setSessions((items) => items.filter((item) => item.id !== session.id));
    if (operatorSessionId === session.id) {
      resetActiveSession(null);
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
      { id: createClientId(), role: "user", text: message, type: "message" },
    ]);
    try {
      dashboardSnapshotRef.current = await fetchDashboardSnapshot().catch(() => new Map());
      const socket = await ensureOperatorSocket();
      let sessionId = operatorSessionId;
      if (!sessionId) {
        const nextSession = await createSessionForMessage(message);
        sessionId = nextSession.id;
        setOperatorSessionId(sessionId);
        operatorSessionIdRef.current = sessionId;
        setSessions((items) => [nextSession, ...items.filter((item) => item.id !== nextSession.id)]);
        await persistOperatorMessage(sessionId, "user", message);
        activeTurnSessionIdRef.current = sessionId;
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
        activeTurnSessionIdRef.current = sessionId;
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
      activeTurnSessionIdRef.current = null;
      pushOperatorEvent({
        kind: "error",
        title: error instanceof Error ? error.message : "Operator connection failed",
        status: "error",
      });
    }
  }

  async function stopOperatorTurn() {
    const sessionId = activeTurnSessionIdRef.current ?? operatorSessionIdRef.current;
    if (!sessionId) return;
    try {
      const socket = await ensureOperatorSocket();
      socket.send(JSON.stringify({ type: "turn.interrupt", sessionId }));
      setIsWorking(false);
      activeTurnSessionIdRef.current = null;
      finishAssistantSegment({ sessionId });
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
    const eventSessionId = operatorEventSessionId(event);
    if (!shouldApplyOperatorEvent(event, operatorSessionIdRef.current, activeTurnSessionIdRef.current)) return;
    if (event.type === "session.ready") {
      setOperatorSessionId(event.sessionId);
      operatorSessionIdRef.current = event.sessionId;
    } else if (event.type === "assistant.delta") {
      appendAssistantDelta(event.delta);
    } else if (event.type === "activity") {
      pushOperatorEvent(activityEventEntry(event, isWorking), eventSessionId);
    } else if (event.type === "reasoning.summary") {
      pushOperatorEvent(reasoningSummaryEntry(event), eventSessionId);
    } else if (event.type === "tool.started") {
      pushOperatorEvent(toolStartedEntry(event), eventSessionId);
    } else if (event.type === "tool.completed") {
      pushOperatorEvent(toolCompletedEntry(event), eventSessionId);
    } else if (event.type === "artifact.upserted") {
      pushArtifactEvent(event.artifact);
    } else if (event.type === "sandbox.diff.updated") {
      setDiffFiles(event.files);
      pushOperatorEvent(diffUpdatedEntry(event), eventSessionId);
    } else if (event.type === "validation.completed") {
      pushOperatorEvent(validationCompletedEntry(event), eventSessionId);
    } else if (event.type === "approval.required") {
      pushOperatorEvent(approvalRequiredEntry(event), eventSessionId);
    } else if (event.type === "error") {
      setIsWorking(false);
      if (eventSessionId && activeTurnSessionIdRef.current === eventSessionId) {
        activeTurnSessionIdRef.current = null;
      }
      pushOperatorEvent({ kind: "error", title: event.message, status: "error" }, eventSessionId);
    } else if (event.type === "turn.completed") {
      setIsWorking(false);
      activeTurnSessionIdRef.current = null;
      markActivityEventsComplete();
      finishAssistantSegment({ reloadSessions: Boolean(event.sessionId), sessionId: event.sessionId });
      void surfaceDashboardChanges();
    }
  }

  function appendAssistantDelta(delta: string) {
    assistantDraftRef.current += delta;
    let assistantId = assistantMessageIdRef.current;
    if (!assistantId) {
      assistantId = createClientId();
      assistantMessageIdRef.current = assistantId;
    }
    const nextAssistantId = assistantId;
    const nextText = assistantDraftRef.current;
    setChatItems((items) => {
      const existing = items.some((item) => item.type === "message" && item.id === nextAssistantId);
      if (!existing) {
        return [
          ...items,
          { id: nextAssistantId, role: "assistant", text: nextText, type: "message", streaming: true },
        ];
      }
      return items.map((item) => (
        item.type === "message" && item.id === nextAssistantId
          ? { ...item, text: nextText, streaming: true }
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

  function finishAssistantSegment(options: { reloadSessions?: boolean; sessionId?: string | null } = {}) {
    const text = assistantDraftRef.current.trim();
    markAssistantComplete();
    assistantDraftRef.current = "";
    assistantMessageIdRef.current = null;
    const sessionId = options.sessionId ?? operatorSessionIdRef.current;
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

  function pushOperatorEvent(event: Omit<OperatorEventEntry, "id">, eventSessionId?: string | null) {
    const entry: OperatorEventEntry = { id: createClientId(), ...event };
    if (entry.kind === "activity" && !shouldDisplayActivityEvent(entry)) return;
    finishAssistantSegment({ sessionId: eventSessionId ?? null });
    setChatItems((items) => [...items, { id: entry.id, event: entry, type: "event" }]);
    const sessionId = eventSessionId ?? operatorSessionIdRef.current;
    if (sessionId) {
      queuePersistOperatorMessage(sessionId, "tool", { type: "operator.event", event: entry });
    }
  }

  function pushActiveTurnBlockedEvent() {
    pushOperatorEvent({
      kind: "error",
      title: "Finish or stop the current Operator turn before switching sessions.",
      status: "error",
    });
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

  async function createSessionForMessage(message: string) {
    return await createOperatorSession({
      title: message.slice(0, 80),
      targetId: props.manifest.target.id,
      modelId: selectedModel,
    });
  }

  function resetActiveSession(sessionId: string | null) {
    setOperatorSessionId(sessionId);
    operatorSessionIdRef.current = sessionId;
    setChatItems([messageToChatItem(welcomeMessage(props.manifest.target.name))]);
    setArtifacts([]);
    clearTurnState();
    persistQueueRef.current = Promise.resolve();
  }

  function clearTurnState() {
    setDiffFiles([]);
    setPreviewDashboard(null);
    closeDashboardPanel();
    setDashboardActionError(null);
    setInput("");
    assistantDraftRef.current = "";
    assistantMessageIdRef.current = null;
    activeTurnSessionIdRef.current = null;
  }

  function reviseDashboardFromPanel() {
    if (!previewDashboard) return;
    setInput(`Update dashboard ${previewDashboard.artifact.id} (${previewDashboard.artifact.title}). Keep the existing dashboardId, preserve useful datasets, and revise the React code plus spec for: `);
  }

  return {
    activeSession,
    artifacts,
    assistantIsTyping,
    beginRenameSession,
    canStartNewSession,
    checkDashboardFromChat: (id: string) => checkDashboard(id, openDashboardPanel),
    closeDashboardPanel,
    commitRenameSession,
    confirmDeleteSession,
    dashboardActionError,
    dashboardChecks,
    dashboardPanelVisible: layout.dashboardPanelVisible,
    deleteDashboardFromChat: (id: string) => deleteDashboard(id, closeDashboardPanel),
    diffFiles,
    effectiveDashboardPanelMaximized: layout.effectiveDashboardPanelMaximized,
    filteredSessions,
    hasUserMessages,
    input,
    isWorking,
    modelSelectorOpen,
    openDashboardFromChat: (id: string) => openDashboard(id, openDashboardPanel),
    openDashboardPanel,
    openOperatorSession,
    operatorGridStyle: layout.operatorGridStyle,
    operatorLayoutRef: layout.operatorLayoutRef,
    operatorSessionId,
    pendingDeleteSession,
    previewDashboard,
    publishDashboardFromChat,
    renamingSessionId,
    renamingTitle,
    reviseDashboardFromPanel,
    selectedModel,
    selectedModelData,
    selectedReasoningEffort,
    sendOperatorMessage,
    sessionSearch,
    sessionSidebarCollapsed: layout.sessionSidebarCollapsed,
    setInput,
    setModelSelectorOpen,
    setPendingDeleteSession,
    setRenamingSessionId,
    setRenamingTitle,
    setSelectedModel,
    setSelectedReasoningEffort,
    setSessionSearch,
    setSessionSidebarCollapsed: layout.setSessionSidebarCollapsed,
    startDashboardResize: layout.startDashboardResize,
    startNewSession,
    startSessionSidebarResize: layout.startSessionSidebarResize,
    stopOperatorTurn,
    toggleDashboardMaximized: layout.toggleDashboardMaximized,
    visibleChatItems,
  };
}

function filterSessions(sessions: OperatorSessionRow[], sessionSearch: string) {
  const query = sessionSearch.trim().toLowerCase();
  if (!query) return sessions;
  return sessions.filter((session) => session.title.toLowerCase().includes(query));
}

function createClientId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const randomValues = typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function"
    ? crypto.getRandomValues(new Uint32Array(2))
    : null;
  const entropy = randomValues
    ? `${randomValues[0]?.toString(36) ?? "0"}${randomValues[1]?.toString(36) ?? "0"}`
    : Math.random().toString(36).slice(2);
  return `operator-${Date.now().toString(36)}-${entropy}`;
}
