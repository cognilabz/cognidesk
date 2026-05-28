"use client";

import type { StudioTargetManifest } from "@cognidesk/studio-contracts";
import {
  CheckIcon,
  FileTextIcon,
  MoreHorizontalIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  SparklesIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
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
  OperatorChatMessageItem,
  OperatorEvent,
  OperatorEventEntry,
  OperatorMessage,
  OperatorSessionRow,
  ReasoningEffort,
} from "./types";
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
  const [isWorking, setIsWorking] = useState(false);

  const filteredSessions = useMemo(() => {
    const query = sessionSearch.trim().toLowerCase();
    if (!query) return sessions;
    return sessions.filter((session) => session.title.toLowerCase().includes(query));
  }, [sessionSearch, sessions]);
  const activeSession = sessions.find((session) => session.id === operatorSessionId) ?? null;
  const selectedModelData = props.manifest.operator.models.find((model) => model.id === selectedModel);
  const hasUserMessages = chatItems.some((item) => item.type === "message" && item.role === "user");
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
    setInput("");
    assistantDraftRef.current = "";
    assistantMessageIdRef.current = null;
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
    setChatItems(data.messages.length
      ? data.messages.map(storedMessageToChatItem)
      : [messageToChatItem(welcomeMessage(props.manifest.target.name))]);
    setArtifacts(data.artifacts.map((artifact) => (
      typeof artifact.artifact === "object" && artifact.artifact !== null
        ? artifact.artifact as Record<string, unknown>
        : { title: artifact.title, type: artifact.type, value: artifact.artifact }
    )));
    setDiffFiles([]);
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
    pushOperatorEvent({
      kind: "activity",
      title: "Queued turn",
      detail: selectedModel,
      surface: "conversation",
      status: "running",
    });

    try {
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
      markAssistantComplete();
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
      pushOperatorEvent({
        kind: "activity",
        title: "Session ready",
        detail: event.modelId ?? event.targetId,
        surface: "conversation",
        status: "completed",
      });
    } else if (event.type === "assistant.delta") {
      appendAssistantDelta(event.delta);
    } else if (event.type === "activity") {
      const activityDetail = event.surface;
      pushOperatorEvent({
        kind: "activity",
        title: humanizeActivity(event.message),
        ...(activityDetail ? { detail: activityDetail, surface: activityDetail } : {}),
        status: isWorking ? "running" : "completed",
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
      markAssistantComplete();
      if (event.sessionId && assistantDraftRef.current.trim()) {
        void persistOperatorMessage(event.sessionId, "assistant", assistantDraftRef.current);
        void loadOperatorSessions();
      }
      assistantDraftRef.current = "";
      assistantMessageIdRef.current = null;
      pushOperatorEvent({
        kind: "activity",
        title: "Turn completed",
        surface: "conversation",
        status: "completed",
      });
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

  function pushOperatorEvent(event: Omit<OperatorEventEntry, "id">) {
    const entry: OperatorEventEntry = { id: crypto.randomUUID(), ...event };
    setChatItems((items) => [...items, { id: entry.id, event: entry, type: "event" }]);
    const sessionId = operatorSessionIdRef.current;
    if (sessionId) {
      void persistOperatorMessage(sessionId, "tool", { type: "operator.event", event: entry });
    }
  }

  async function persistOperatorMessage(sessionId: string, role: "user" | "assistant" | "system" | "tool", content: unknown) {
    await fetch(`/api/studio/operator/sessions/${sessionId}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ role, content }),
    });
  }

  return (
    <section
      className={cn(
        "dark grid h-[calc(100vh-5rem)] min-h-0 overflow-hidden bg-[#101010] text-foreground",
        sessionSidebarCollapsed ? "grid-cols-[68px_minmax(0,1fr)]" : "grid-cols-[300px_minmax(0,1fr)]",
        "max-lg:grid-cols-[minmax(0,1fr)]"
      )}
    >
      <aside className="grid min-h-0 grid-rows-[auto_auto_auto_minmax(0,1fr)] border-white/10 border-r bg-[#181818] max-lg:hidden">
        <div className={cn("flex items-center gap-2 px-3 py-3", sessionSidebarCollapsed ? "justify-center" : "justify-between")}>
          <span className={cn("text-sm font-medium text-slate-300", sessionSidebarCollapsed && "sr-only")}>Sessions</span>
          <Button
            aria-label={sessionSidebarCollapsed ? "Expand sessions" : "Collapse sessions"}
            className="text-slate-400 hover:bg-white/10 hover:text-slate-100"
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
            className={cn("w-full justify-start bg-slate-100 text-slate-950 hover:bg-white", sessionSidebarCollapsed && "justify-center px-0")}
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
                className="border-white/10 bg-[#111] pl-9 text-slate-100 placeholder:text-slate-500 focus-visible:ring-white/20"
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

      <section className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)_auto]">
        <header className="flex min-h-16 items-center justify-between gap-4 border-white/10 border-b bg-[#101010] px-5 max-md:flex-col max-md:items-stretch max-md:py-4">
          <div className="min-w-0">
            <h1 className="truncate text-base font-semibold text-slate-100">{activeSession?.title ?? "Studio Operator"}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="rounded-full border border-white/10 px-2 py-1">{props.manifest.target.name}</span>
              {diffFiles.length ? <span className="rounded-full border border-emerald-400/30 px-2 py-1 text-emerald-200">{diffFiles.length} changed</span> : null}
              {artifacts.length ? <span className="rounded-full border border-sky-400/30 px-2 py-1 text-sky-200">{artifacts.length} artifacts</span> : null}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ModelSelector onOpenChange={setModelSelectorOpen} open={modelSelectorOpen}>
              <ModelSelectorTrigger asChild>
                <Button
                  className="border-white/10 bg-[#1b1b1b] text-slate-100 hover:bg-[#242424]"
                  size="sm"
                  type="button"
                  variant="outline"
                >
                  <ModelSelectorLogo provider="openai" />
                  <span className="max-w-40 truncate">{selectedModelData?.label ?? selectedModel}</span>
                </Button>
              </ModelSelectorTrigger>
              <ModelSelectorContent className="border-white/10 bg-[#181818] text-slate-100">
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

            <div className="inline-flex rounded-md border border-white/10 bg-[#1b1b1b] p-1">
              {reasoningEfforts.map((effort) => (
                <button
                  className={cn(
                    "h-7 rounded px-2 text-xs transition",
                    selectedReasoningEffort === effort.id
                      ? "bg-slate-100 text-slate-950"
                      : "text-slate-400 hover:bg-white/10 hover:text-slate-100"
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

        <Conversation className="min-h-0 bg-[#101010]">
          <ConversationContent className="h-full gap-5 overflow-y-auto px-4 py-8">
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-5">
              {chatItems.map((item) => item.type === "message" ? (
                <ChatMessage item={item} key={item.id} />
              ) : (
                <OperatorEventWidget event={item.event} key={item.id} />
              ))}

              {!hasUserMessages ? (
                <Suggestions className="px-0">
                  {suggestions.map((suggestion) => (
                    <Suggestion
                      className="border-white/10 bg-[#1b1b1b] text-slate-200 hover:bg-[#242424]"
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
          <ConversationScrollButton className="bottom-5 border-white/10 bg-[#242424] text-slate-100 hover:bg-[#303030]" />
        </Conversation>

        <footer className="border-white/10 border-t bg-[#101010] px-4 py-4">
          <div className="mx-auto max-w-4xl">
            <PromptInput
              className="rounded-xl border border-white/10 bg-[#1b1b1b] shadow-2xl shadow-black/20"
              onSubmit={(message) => void sendOperatorMessage(message.text)}
            >
              <PromptInputBody>
                <PromptInputTextarea
                  className="min-h-20 resize-none text-slate-100 placeholder:text-slate-500"
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
                  <PromptInputButton className="text-slate-400" disabled type="button" variant="ghost">
                    <span className={cn("size-2 rounded-full", isWorking ? "animate-pulse bg-emerald-300" : "bg-slate-500")} />
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

      <Dialog
        onOpenChange={(open) => {
          if (!open) setPendingDeleteSession(null);
        }}
        open={pendingDeleteSession !== null}
      >
        <DialogContent className="dark border-white/10 bg-[#1b1b1b] text-slate-100">
          <DialogHeader>
            <DialogTitle>Delete session?</DialogTitle>
            <DialogDescription className="text-slate-400">
              {pendingDeleteSession?.title ?? "This session"} will be removed from Studio.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              className="border-white/10 text-slate-100 hover:bg-white/10"
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

function ChatMessage({ item }: { item: OperatorChatMessageItem }) {
  return (
    <Message className={cn(item.role === "assistant" && "max-w-[88%]")} data-testid="operator-message" from={item.role}>
      <MessageContent className={cn(item.role === "assistant" && "max-w-3xl text-slate-100")}>
        {item.role === "assistant" ? (
          item.text ? (
            <MessageResponse isAnimating={item.streaming ?? false}>{item.text}</MessageResponse>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-slate-400">
              <span className="size-2 animate-pulse rounded-full bg-emerald-300" />
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

function OperatorEventWidget({ event }: { event: OperatorEventEntry }) {
  if (event.kind === "activity") {
    return <InlineActivityEvent event={event} />;
  }
  if (event.kind === "reasoning") {
    return (
      <div className="operator-event-in mx-auto w-full max-w-3xl" data-testid="operator-event">
        <Reasoning
          className="mb-0 rounded-lg border border-white/10 bg-[#181818] p-3"
          defaultOpen={event.status === "running"}
          isStreaming={event.status === "running"}
        >
          <ReasoningTrigger
            className="text-slate-400 hover:text-slate-100"
            getThinkingMessage={() => (
              <span className="text-sm">{event.title}</span>
            )}
          />
          <ReasoningContent className="mt-3 text-slate-300">{event.detail ?? event.title}</ReasoningContent>
        </Reasoning>
      </div>
    );
  }
  if (event.kind === "diff") {
    return (
      <div className="operator-event-in mx-auto w-full max-w-3xl" data-testid="operator-event">
        <Task className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 p-3">
          <TaskTrigger className="text-emerald-100" title={event.title} />
          <TaskContent>
            {event.files?.length ? event.files.map((file) => (
              <TaskItem className="flex flex-wrap items-center gap-2 text-slate-300" key={`${file.status}:${file.path}`}>
                <TaskItemFile className="border-emerald-400/20 bg-emerald-400/10 text-emerald-100">{file.status}</TaskItemFile>
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
      <Tool className={cn("mb-0 border-white/10 bg-[#181818]", event.kind === "error" && "border-red-400/30 bg-red-400/5")} defaultOpen={event.status !== "completed"}>
        <ToolHeader
          state={toolStateForEvent(event)}
          title={event.title}
          toolName={event.name ?? event.kind}
          type="dynamic-tool"
        />
        <ToolContent className="text-slate-300">
          {event.action ? <DetailBlock label="Action" value={event.action} /> : null}
          {event.input !== undefined ? <DetailBlock label="Input" value={event.input} /> : null}
          {event.output !== undefined ? <DetailBlock label="Output" value={event.output} /> : null}
          {event.detail ? <DetailBlock label="Details" value={event.detail} /> : null}
        </ToolContent>
      </Tool>
    </div>
  );
}

function InlineActivityEvent({ event }: { event: OperatorEventEntry }) {
  return (
    <div className="operator-event-in mx-auto flex w-full max-w-3xl items-center gap-2 text-sm text-slate-500" data-testid="operator-event">
      <span className={cn(
        "size-2 rounded-full",
        event.status === "running" && "animate-pulse bg-emerald-300",
        event.status === "completed" && "bg-slate-500",
        event.status === "error" && "bg-red-400",
        event.status === "pending" && "animate-pulse bg-amber-300"
      )} />
      <span>{event.title}</span>
      {event.detail ? <span className="truncate text-slate-600">{event.detail}</span> : null}
    </div>
  );
}

function DetailBlock(props: { label: string; value: unknown }) {
  return (
    <div className="grid gap-2">
      <span className="text-xs font-medium uppercase text-slate-500">{props.label}</span>
      <pre className="max-h-72 overflow-auto whitespace-pre-wrap rounded-md bg-black/30 p-3 text-xs leading-5 text-slate-300">
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
      <div className="grid gap-2 rounded-lg border border-white/10 bg-[#232323] p-2">
        <Input
          aria-label="Rename session"
          autoFocus
          className="border-white/10 bg-[#111] text-slate-100"
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
        props.active ? "bg-[#2a2a2a]" : "hover:bg-[#202020]",
        props.collapsed && "justify-center"
      )}
    >
      <button
        className={cn(
          "min-w-0 flex-1 rounded-md px-2 py-2 text-left text-sm text-slate-300",
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
              className="self-center text-slate-500 opacity-0 hover:bg-white/10 hover:text-slate-100 group-hover:opacity-100 data-[state=open]:opacity-100"
              size="icon-xs"
              type="button"
              variant="ghost"
            >
              <MoreHorizontalIcon />
              <span className="sr-only">Session actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="border-white/10 bg-[#202020] text-slate-100">
            <DropdownMenuItem onSelect={props.onRename}>
              <PencilIcon className="mr-2 size-4" />
              Rename
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-300 focus:text-red-200" onSelect={props.onDelete}>
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
  return event as unknown as OperatorEventEntry;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function humanizeActivity(value: string) {
  if (value.startsWith("turn/")) return value.replace("turn/", "Turn ");
  if (value.startsWith("item/")) return value.replace("item/", "Item ");
  return value;
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
  if (typeof value === "string") return value;
  return JSON.stringify(value, null, 2);
}
