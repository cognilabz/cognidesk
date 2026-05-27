"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Code2,
  FileText,
  PanelLeftClose,
  PanelLeftOpen,
  Sparkles,
} from "lucide-react";
import type { StudioTargetManifest } from "@cognidesk/studio-contracts";
import { Context, ContextContent, ContextHeader } from "@/components/ai-elements/context";
import { Conversation, ConversationContent } from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import { ModelSelector, ModelSelectorItem } from "@/components/ai-elements/model-selector";
import { PromptInput, PromptInputFooter, PromptInputSubmit, PromptInputTextarea, PromptInputTools } from "@/components/ai-elements/prompt-input";
import { Reasoning, ReasoningContent, ReasoningTrigger } from "@/components/ai-elements/reasoning";
import { Source, Sources } from "@/components/ai-elements/source";
import { Task, TaskItem } from "@/components/ai-elements/task";
import { Tool, ToolContent, ToolHeader } from "@/components/ai-elements/tool";
import type {
  OperatorEvent,
  OperatorEventEntry,
  OperatorMessage,
  OperatorSessionRow,
  ReasoningEffort,
} from "./types";
import { Button, formatDateTime } from "./ui";

const reasoningEfforts: Array<{ id: ReasoningEffort; label: string }> = [
  { id: "minimal", label: "Minimal" },
  { id: "low", label: "Low" },
  { id: "medium", label: "Medium" },
  { id: "high", label: "High" },
];

const suggestions = [
  {
    label: "Explain the agent",
    prompt: "Explain the current Cognidesk agent. Ground the answer in introspection and name the journeys, tools, knowledge, and widgets you found.",
  },
  {
    label: "Create a dashboard",
    prompt: "Create and save a Studio dashboard draft for recent conversations. Use the Studio dashboard API and include datasets, code, and a fallback summary.",
  },
  {
    label: "Inspect a change",
    prompt: "Inspect the source sandbox and propose one small improvement to the flight demo agent. Show your evidence before editing.",
  },
];

export function OperatorView(props: {
  manifest: StudioTargetManifest;
  initialSessions: OperatorSessionRow[];
}) {
  const socketRef = useRef<WebSocket | null>(null);
  const assistantDraftRef = useRef("");
  const [sessionSidebarCollapsed, setSessionSidebarCollapsed] = useState(false);
  const [operatorSessionId, setOperatorSessionId] = useState<string | null>(null);
  const [sessions, setSessions] = useState<OperatorSessionRow[]>(props.initialSessions);
  const [sessionSearch, setSessionSearch] = useState("");
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState(defaultModel(props.manifest));
  const [selectedReasoningEffort, setSelectedReasoningEffort] = useState<ReasoningEffort>("low");
  const [messages, setMessages] = useState<OperatorMessage[]>([welcomeMessage(props.manifest.target.name)]);
  const [workLog, setWorkLog] = useState<OperatorEventEntry[]>([]);
  const [artifacts, setArtifacts] = useState<Record<string, unknown>[]>([]);
  const [diffFiles, setDiffFiles] = useState<Array<{ path: string; status: string }>>([]);
  const [isWorking, setIsWorking] = useState(false);

  const filteredSessions = useMemo(() => {
    const query = sessionSearch.trim().toLowerCase();
    if (!query) return sessions;
    return sessions.filter((session) => session.title.toLowerCase().includes(query));
  }, [sessionSearch, sessions]);
  const activeSession = sessions.find((session) => session.id === operatorSessionId) ?? null;
  const latestReasoning = workLog.find((event) => event.kind === "reasoning");

  useEffect(() => {
    document.getElementById("operator-bottom")?.scrollIntoView({ block: "end" });
  }, [messages, workLog]);

  async function startNewSession() {
    const response = await fetch("/api/studio/operator/sessions", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: "New Studio Operator session",
        targetId: props.manifest.target.id,
        modelId: selectedModel,
      }),
    });
    if (!response.ok) {
      addOperatorEvent("error", "Could not create session");
      return;
    }
    const data = await response.json() as { session: { id: string; title: string; updatedAt: string | Date; modelId: string | null } };
    setOperatorSessionId(data.session.id);
    setMessages([welcomeMessage(props.manifest.target.name)]);
    setWorkLog([]);
    setArtifacts([]);
    setDiffFiles([]);
    setInput("");
    await loadOperatorSessions();
  }

  async function loadOperatorSessions() {
    const response = await fetch("/api/studio/operator/sessions");
    if (!response.ok) return;
    const data = await response.json() as { sessions: Array<{ id: string; title: string; updatedAt: string | Date; modelId: string | null }> };
    setSessions(data.sessions.map((session) => ({
      id: session.id,
      title: session.title,
      updatedAt: String(session.updatedAt),
      modelId: session.modelId,
    })));
  }

  async function openOperatorSession(id: string) {
    const response = await fetch(`/api/studio/operator/sessions/${id}`);
    if (!response.ok) return;
    const data = await response.json() as {
      messages: Array<{ id: string; role: "user" | "assistant" | "system" | "tool"; content: unknown }>;
      artifacts: Array<{ artifact: unknown; title: string; type: string }>;
    };
    setOperatorSessionId(id);
    setMessages(data.messages.length
      ? data.messages.map((message) => ({
        id: message.id,
        role: message.role === "tool" ? "system" : message.role,
        text: typeof message.content === "string" ? message.content : JSON.stringify(message.content, null, 2),
      }))
      : [welcomeMessage(props.manifest.target.name)]);
    setArtifacts(data.artifacts.map((artifact) => (
      typeof artifact.artifact === "object" && artifact.artifact !== null
        ? artifact.artifact as Record<string, unknown>
        : { title: artifact.title, type: artifact.type, value: artifact.artifact }
    )));
    setDiffFiles([]);
    setWorkLog([]);
    addOperatorEvent("activity", "Opened session", id);
  }

  async function sendOperatorMessage(messageOverride?: string) {
    const message = (messageOverride ?? input).trim();
    if (!message || isWorking) return;
    setInput("");
    setIsWorking(true);
    assistantDraftRef.current = "";
    setMessages((items) => [...items, { id: crypto.randomUUID(), role: "user", text: message }, { id: crypto.randomUUID(), role: "assistant", text: "" }]);
    addOperatorEvent("activity", "Queued turn", selectedModel, "conversation");

    try {
      const socket = await ensureOperatorSocket();
      let sessionId = operatorSessionId;
      if (!sessionId) {
        const response = await fetch("/api/studio/operator/sessions", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ title: message.slice(0, 80), targetId: props.manifest.target.id, modelId: selectedModel }),
        });
        const data = await response.json() as { session: { id: string } };
        sessionId = data.session.id;
        setOperatorSessionId(sessionId);
        await persistOperatorMessage(sessionId, "user", message);
        await loadOperatorSessions();
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
      addOperatorEvent("error", error instanceof Error ? error.message : "Operator connection failed");
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
    return new Promise<WebSocket>((resolve, reject) => {
      socket.onopen = () => resolve(socket);
      socket.onerror = () => reject(new Error("Operator socket failed"));
    });
  }

  function handleOperatorEvent(event: OperatorEvent) {
    if (event.type === "session.ready") {
      setOperatorSessionId(event.sessionId);
      addOperatorEvent("activity", "Session ready", event.modelId ?? event.targetId, "conversation");
    } else if (event.type === "assistant.delta") {
      assistantDraftRef.current += event.delta;
      setMessages((items) => {
        const lastIndex = items.length - 1;
        return items.map((item, index) => (
          index === lastIndex && item.role === "assistant"
            ? { ...item, text: item.text + event.delta }
            : item
        ));
      });
    } else if (event.type === "activity") {
      addOperatorEvent("activity", humanizeActivity(event.message), event.surface, event.surface);
    } else if (event.type === "reasoning.summary") {
      addOperatorEvent("reasoning", "Working plan updated", event.summary, "evidence");
    } else if (event.type === "tool.started") {
      addOperatorEvent("tool", `Started ${event.name}`, stringifySmall(event.input), "conversation");
    } else if (event.type === "tool.completed") {
      addOperatorEvent("tool", `Finished ${event.name}`, stringifySmall(event.output), "conversation");
    } else if (event.type === "artifact.upserted") {
      setArtifacts((items) => [event.artifact, ...items].slice(0, 12));
      addOperatorEvent("artifact", String(event.artifact.title ?? event.artifact.type ?? "Artifact updated"), stringifySmall(event.artifact), "artifacts");
    } else if (event.type === "sandbox.diff.updated") {
      setDiffFiles(event.files);
      addOperatorEvent("diff", event.summary, event.files.map((file) => `${file.status}: ${file.path}`).join("\n"), "sandbox_diff");
    } else if (event.type === "validation.completed") {
      addOperatorEvent("validation", `Validation ${event.commandId}`, `exit ${event.exitCode}\n${event.output}`, "validation_runs");
    } else if (event.type === "approval.required") {
      addOperatorEvent("approval", event.title, event.action, "approvals");
    } else if (event.type === "error") {
      setIsWorking(false);
      addOperatorEvent("error", event.message);
    } else if (event.type === "turn.completed") {
      setIsWorking(false);
      if (event.sessionId && assistantDraftRef.current.trim()) {
        void persistOperatorMessage(event.sessionId, "assistant", assistantDraftRef.current);
        void loadOperatorSessions();
      }
      addOperatorEvent("activity", "Turn completed", undefined, "conversation");
    }
  }

  function addOperatorEvent(kind: OperatorEventEntry["kind"], title: string, detail?: string, surface?: string) {
    setWorkLog((items) => [{
      id: crypto.randomUUID(),
      kind,
      title,
      ...(detail ? { detail } : {}),
      ...(surface ? { surface } : {}),
    }, ...items].slice(0, 40));
  }

  async function persistOperatorMessage(sessionId: string, role: "user" | "assistant" | "system" | "tool", content: unknown) {
    await fetch(`/api/studio/operator/sessions/${sessionId}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ role, content }),
    });
  }

  return (
    <section className={`grid h-[calc(100vh-5rem)] min-h-0 ${sessionSidebarCollapsed ? "grid-cols-[64px_minmax(0,1fr)_320px]" : "grid-cols-[280px_minmax(0,1fr)_340px]"} max-xl:grid-cols-[minmax(0,1fr)]`}>
      <aside className="grid min-h-0 grid-rows-[auto_auto_minmax(0,1fr)] border-r border-slate-200 bg-slate-50 p-4 max-xl:hidden">
        <div className={`mb-3 flex items-center gap-2 ${sessionSidebarCollapsed ? "justify-center" : "justify-between"}`}>
          <span className={`text-sm font-medium text-slate-600 ${sessionSidebarCollapsed ? "hidden" : ""}`}>Sessions</span>
          <button
            className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100"
            type="button"
            onClick={() => setSessionSidebarCollapsed((value) => !value)}
            aria-label={sessionSidebarCollapsed ? "Expand sessions" : "Collapse sessions"}
            title={sessionSidebarCollapsed ? "Expand sessions" : "Collapse sessions"}
          >
            {sessionSidebarCollapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
        </div>
        <Button className={`mb-3 w-full ${sessionSidebarCollapsed ? "justify-center px-0" : "justify-start"}`} variant="default" onClick={startNewSession} title="New session">
          <Code2 size={15} />
          <span className={sessionSidebarCollapsed ? "hidden" : ""}>New session</span>
        </Button>
        <div className="min-h-0 overflow-y-auto">
          {!sessionSidebarCollapsed ? (
            <input
              className="mb-4 h-9 w-full rounded-lg border border-slate-200 px-3 text-sm"
              aria-label="Search sessions"
              placeholder="Search sessions"
              value={sessionSearch}
              onChange={(event) => setSessionSearch(event.target.value)}
            />
          ) : null}
          <div className="grid gap-1">
            {filteredSessions.slice(0, 40).map((session) => (
              <button
                className={`grid min-h-12 gap-1 rounded-lg px-3 text-left text-sm ${
                  operatorSessionId === session.id ? "bg-white text-slate-950 shadow-sm ring-1 ring-slate-200" : "text-slate-600 hover:bg-white"
                } ${sessionSidebarCollapsed ? "place-items-center px-0" : ""}`}
                type="button"
                key={session.id}
                onClick={() => openOperatorSession(session.id)}
                title={session.title}
              >
                {sessionSidebarCollapsed ? <FileText size={15} /> : (
                  <>
                    <span className="truncate">{session.title}</span>
                    <small className="text-xs text-slate-500">{formatDateTime(session.updatedAt)}</small>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <section className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)_auto]">
        <header className="flex min-h-16 items-center justify-between gap-4 border-b border-slate-200 px-5 max-lg:flex-col max-lg:items-stretch max-lg:py-4">
          <div className="min-w-0">
            <h1 className="truncate text-base font-semibold text-slate-950">{activeSession?.title ?? "Studio Operator"}</h1>
            <p className="mt-1 text-xs text-slate-500">{props.manifest.target.name} / {props.manifest.target.environment}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ModelSelector value={selectedModel} onValueChange={setSelectedModel} aria-label="Model">
              {props.manifest.operator.models.map((model) => <ModelSelectorItem key={model.id} value={model.id}>{model.label}</ModelSelectorItem>)}
            </ModelSelector>
            <div className="inline-flex rounded-lg border border-slate-200 bg-white p-1">
              {reasoningEfforts.map((effort) => (
                <button
                  className={`h-7 rounded-md px-2 text-xs ${selectedReasoningEffort === effort.id ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-50"}`}
                  key={effort.id}
                  type="button"
                  onClick={() => setSelectedReasoningEffort(effort.id)}
                >
                  {effort.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <Conversation>
          <ConversationContent id="operator-scroll">
            <div className="mx-auto grid max-w-4xl gap-6">
              {latestReasoning ? (
                <Reasoning open={isWorking}>
                  <ReasoningTrigger>Operator progress</ReasoningTrigger>
                  <ReasoningContent>{latestReasoning.detail ?? latestReasoning.title}</ReasoningContent>
                </Reasoning>
              ) : null}

              {messages.map((message) => (
                <Message key={message.id} role={message.role}>
                  <span className="text-xs text-slate-500">{message.role}</span>
                  <MessageContent role={message.role}>
                    {message.role === "assistant"
                      ? <MessageResponse isStreaming={isWorking && message.text === ""}>{message.text}</MessageResponse>
                      : <p className="whitespace-pre-wrap">{message.text}</p>}
                  </MessageContent>
                </Message>
              ))}

              {messages.length <= 1 ? (
                <section className="grid grid-cols-3 gap-3 max-lg:grid-cols-1">
                  {suggestions.map((suggestion) => (
                    <button
                      className="rounded-lg border border-slate-200 bg-white p-4 text-left text-sm text-slate-700 hover:bg-slate-50"
                      key={suggestion.label}
                      type="button"
                      onClick={() => sendOperatorMessage(suggestion.prompt)}
                    >
                      <Sparkles className="mb-3 text-slate-500" size={17} />
                      <strong className="block text-slate-950">{suggestion.label}</strong>
                    </button>
                  ))}
                </section>
              ) : null}
              <div id="operator-bottom" />
            </div>
          </ConversationContent>
        </Conversation>

        <footer className="border-t border-slate-200 bg-white p-5">
          <div className="mx-auto max-w-4xl">
            <PromptInput onSubmit={() => sendOperatorMessage()}>
              <PromptInputTextarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void sendOperatorMessage();
                  }
                }}
                placeholder="Ask Operator to explain the agent, inspect code, or create and save a dashboard"
              />
              <PromptInputFooter>
                <PromptInputTools>
                  <span className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">
                    <Sparkles size={14} />
                    {isWorking ? "Working" : "Ready"}
                  </span>
                </PromptInputTools>
                <PromptInputSubmit disabled={!input.trim() || isWorking} />
              </PromptInputFooter>
            </PromptInput>
          </div>
        </footer>
      </section>

      <Context className="max-xl:hidden">
        <ContextHeader>
          <h2 className="text-sm font-semibold text-slate-950">Workspace</h2>
          <p className="mt-1 text-xs text-slate-500">{props.manifest.target.id}</p>
        </ContextHeader>
        <ContextContent>
          <div className="grid gap-4">
            <Task>
              <TaskItem status={isWorking ? "active" : workLog.length ? "done" : "pending"}>
                {isWorking ? "Operator is working" : workLog.length ? "Last turn complete" : "No active turn"}
              </TaskItem>
              {workLog.slice(0, 5).map((event) => (
                <TaskItem key={event.id} status={event.kind === "error" ? "pending" : "done"}>
                  <span className="block truncate">{event.title}</span>
                  {event.detail ? <span className="mt-1 line-clamp-2 block text-xs text-slate-500">{event.detail}</span> : null}
                </TaskItem>
              ))}
            </Task>

            <Sources>
              <Source title="Agent introspection" detail="/api/studio/introspection" />
              <Source title="Dashboard API" detail="/api/studio/dashboards" />
              <Source title="Source sandbox" detail={diffFiles.length ? `${diffFiles.length} changed files` : "No changes"} />
            </Sources>

            {artifacts.length ? (
              <Tool>
                <ToolHeader kind="artifact" title="Artifacts" />
                <ToolContent>
                  {artifacts.slice(0, 6).map((artifact) => String(artifact.title ?? artifact.type ?? "Artifact")).join("\n")}
                </ToolContent>
              </Tool>
            ) : null}

            {diffFiles.length ? (
              <Tool>
                <ToolHeader kind="diff" title="Sandbox diff" />
                <ToolContent>
                  {diffFiles.map((file) => `${file.status}: ${file.path}`).join("\n")}
                </ToolContent>
              </Tool>
            ) : null}
          </div>
        </ContextContent>
      </Context>
    </section>
  );
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

function humanizeActivity(value: string) {
  if (value.startsWith("turn/")) return value.replace("turn/", "Turn ");
  if (value.startsWith("item/")) return value.replace("item/", "Item ");
  return value;
}

function stringifySmall(value: unknown) {
  if (value === undefined) return undefined;
  const text = typeof value === "string" ? value : JSON.stringify(value, null, 2);
  return text.length > 1200 ? `${text.slice(0, 1200)}...` : text;
}
