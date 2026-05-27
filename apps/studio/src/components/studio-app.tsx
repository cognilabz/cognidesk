"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { StudioAgentIntrospection, StudioDashboardArtifact } from "@cognidesk/studio-contracts";
import { AppShell } from "@/components/studio/app-shell";
import { AdminView } from "@/components/studio/admin-view";
import { AgentsView } from "@/components/studio/agents-view";
import { agentDashboardCode, DashboardsView } from "@/components/studio/dashboards-view";
import { HomeView } from "@/components/studio/home-view";
import { OperatorView } from "@/components/studio/operator-view";
import type {
  DashboardRow,
  Health,
  OperatorEvent,
  OperatorEventEntry,
  OperatorMessage,
  PreviewDashboard,
  ReasoningEffort,
  StudioAppProps,
  StudioView,
} from "@/components/studio/types";

export function StudioApp(props: StudioAppProps) {
  const router = useRouter();
  const socketRef = useRef<WebSocket | null>(null);
  const assistantDraftRef = useRef("");
  const [view, setView] = useState<StudioView>("monitoring");
  const [health, setHealth] = useState<Health>(props.health);
  const [introspection, setIntrospection] = useState<StudioAgentIntrospection | null>(props.initialIntrospection);
  const [introspectionError, setIntrospectionError] = useState(props.introspectionError);
  const [dashboards, setDashboards] = useState<DashboardRow[]>(props.initialDashboards);
  const [activeJourneyId, setActiveJourneyId] = useState(props.initialIntrospection?.journeys[0]?.id ?? "");
  const [previewDashboard, setPreviewDashboard] = useState<PreviewDashboard>(null);
  const [operatorSessionId, setOperatorSessionId] = useState<string | null>(null);
  const [operatorSessions, setOperatorSessions] = useState<Array<{ id: string; title: string; updatedAt: string }>>([]);
  const [operatorInput, setOperatorInput] = useState("");
  const [selectedModel, setSelectedModel] = useState(props.manifest.operator.models.find((model) => model.default)?.id ?? props.manifest.operator.models[0]?.id ?? "gpt-5.5");
  const [selectedReasoningEffort, setSelectedReasoningEffort] = useState<ReasoningEffort>("low");
  const [operatorMessages, setOperatorMessages] = useState<OperatorMessage[]>([
    { id: "welcome", role: "assistant", text: "Ready to inspect the active Cognidesk agent, query Studio/telemetry APIs, edit source in a sandbox, author dashboards, validate changes, and prepare PRs." },
  ]);
  const [operatorEvents, setOperatorEvents] = useState<OperatorEventEntry[]>([]);
  const [artifacts, setArtifacts] = useState<Record<string, unknown>[]>([]);
  const [diffFiles, setDiffFiles] = useState<Array<{ path: string; status: string }>>([]);
  const activeJourney = useMemo(() => {
    if (!introspection) return null;
    return introspection.journeys.find((journey) => journey.id === activeJourneyId) ?? introspection.journeys[0] ?? null;
  }, [activeJourneyId, introspection]);

  useEffect(() => {
    void loadOperatorSessions();
  }, []);

  async function refreshTarget() {
    const [targetResponse, introspectionResponse, dashboardsResponse] = await Promise.all([
      fetch("/api/studio/target"),
      fetch("/api/studio/introspection"),
      fetch("/api/studio/dashboards"),
    ]);
    if (targetResponse.ok) {
      const targetData = await targetResponse.json() as { health: Health };
      setHealth(targetData.health);
    }
    if (introspectionResponse.ok) {
      setIntrospection(await introspectionResponse.json() as StudioAgentIntrospection);
      setIntrospectionError(null);
    } else {
      const body = await introspectionResponse.json().catch(() => ({ error: "Introspection failed" }));
      setIntrospectionError(String(body.error ?? "Introspection failed"));
    }
    if (dashboardsResponse.ok) {
      const data = await dashboardsResponse.json() as { dashboards: DashboardRow[] };
      setDashboards(data.dashboards);
    }
  }

  async function saveAgentDashboard() {
    const capturedAt = new Date().toISOString();
    const response = await fetch("/api/studio/dashboards", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: "Agent Structure Board",
        slug: "agent-structure-board",
        description: "Real dashboard artifact backed by Cognidesk agent introspection.",
        code: agentDashboardCode,
        datasets: [{
          id: "agent",
          title: "Agent introspection",
          description: "Compiled Cognidesk agent structure from the Studio Adapter.",
          source: {
            capability: "cognidesk.agent",
            targetId: props.manifest.target.id,
            params: {},
          },
          capturedAt,
          data: introspection,
        }],
        fallback: { summary: "Agent structure dashboard" },
      }),
    });
    if (!response.ok) {
      const body = await response.json().catch(() => ({ error: "Dashboard save failed" }));
      addOperatorEvent("error", "Dashboard save failed", String(body.error ?? "Dashboard save failed"));
      return;
    }
    const data = await response.json() as { dashboard: StudioDashboardArtifact };
    addOperatorEvent("artifact", `Saved ${data.dashboard.title}`, `v${data.dashboard.version}`);
    await refreshTarget();
  }

  async function loadOperatorSessions() {
    const response = await fetch("/api/studio/operator/sessions");
    if (!response.ok) return;
    const data = await response.json() as { sessions: Array<{ id: string; title: string; updatedAt: string | Date }> };
    setOperatorSessions(data.sessions.map((session) => ({
      id: session.id,
      title: session.title,
      updatedAt: String(session.updatedAt),
    })));
  }

  async function openOperatorSession(id: string) {
    const response = await fetch(`/api/studio/operator/sessions/${id}`);
    if (!response.ok) return;
    const data = await response.json() as {
      messages: Array<{ id: string; role: "user" | "assistant" | "system" | "tool"; content: unknown }>;
    };
    setOperatorSessionId(id);
    setOperatorMessages(data.messages.map((message) => ({
      id: message.id,
      role: message.role === "tool" ? "system" : message.role,
      text: typeof message.content === "string" ? message.content : JSON.stringify(message.content, null, 2),
    })));
    addOperatorEvent("activity", "Loaded operator session", id);
  }

  async function openDashboard(id: string) {
    const response = await fetch(`/api/studio/dashboards/${id}`);
    if (!response.ok) return;
    setPreviewDashboard(await response.json() as { artifact: StudioDashboardArtifact; code: string });
  }

  async function publishDashboard(id: string) {
    const response = await fetch(`/api/studio/dashboards/${id}/publish`, { method: "POST" });
    if (response.ok) {
      const data = await response.json() as { dashboard: StudioDashboardArtifact };
      addOperatorEvent("artifact", `Published ${data.dashboard.title}`, `v${data.dashboard.version}`);
      await refreshTarget();
    }
  }

  async function sendOperatorMessage() {
    const message = operatorInput.trim();
    if (!message) return;
    setOperatorInput("");
    assistantDraftRef.current = "";
    setOperatorMessages((items) => [...items, { id: crypto.randomUUID(), role: "user", text: message }, { id: crypto.randomUUID(), role: "assistant", text: "" }]);
    addOperatorEvent("activity", "Turn queued", selectedModel);
    const socket = await ensureOperatorSocket();
    if (!operatorSessionId) {
      const response = await fetch("/api/studio/operator/sessions", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title: message.slice(0, 80), targetId: props.manifest.target.id, modelId: selectedModel }),
      });
      const data = await response.json() as { session: { id: string } };
      setOperatorSessionId(data.session.id);
      await persistOperatorMessage(data.session.id, "user", message);
      await loadOperatorSessions();
      socket.send(JSON.stringify({
        type: "session.start",
        sessionId: data.session.id,
        targetId: props.manifest.target.id,
        modelId: selectedModel,
        reasoningEffort: selectedReasoningEffort,
        message,
      }));
    } else {
      await persistOperatorMessage(operatorSessionId, "user", message);
      socket.send(JSON.stringify({
        type: "turn.start",
        sessionId: operatorSessionId,
        modelId: selectedModel,
        reasoningEffort: selectedReasoningEffort,
        message,
      }));
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
    if (event.type === "assistant.delta") {
      assistantDraftRef.current += event.delta;
      setOperatorMessages((items) => {
        const lastIndex = items.length - 1;
        return items.map((item, index) => (
          index === lastIndex && item.role === "assistant"
            ? { ...item, text: item.text + event.delta }
            : item
        ));
      });
    } else if (event.type === "activity") {
      addOperatorEvent("activity", event.message, event.surface);
    } else if (event.type === "reasoning.summary") {
      addOperatorEvent("reasoning", "Reasoning summary", event.summary);
    } else if (event.type === "tool.started") {
      addOperatorEvent("tool", `Tool started: ${event.name}`, stringifySmall(event.input));
    } else if (event.type === "tool.completed") {
      addOperatorEvent("tool", `Tool completed: ${event.name}`, stringifySmall(event.output));
    } else if (event.type === "artifact.upserted") {
      setArtifacts((items) => [event.artifact, ...items].slice(0, 12));
      addOperatorEvent("artifact", String(event.artifact.title ?? event.artifact.type ?? "Artifact updated"), stringifySmall(event.artifact));
    } else if (event.type === "sandbox.diff.updated") {
      setDiffFiles(event.files);
      addOperatorEvent("diff", event.summary, event.files.map((file) => `${file.status}: ${file.path}`).join("\n"));
    } else if (event.type === "validation.completed") {
      addOperatorEvent("validation", `Validation ${event.commandId}`, `exit ${event.exitCode}\n${event.output}`);
    } else if (event.type === "approval.required") {
      addOperatorEvent("approval", event.title, event.action);
    } else if (event.type === "error") {
      addOperatorEvent("error", event.message);
    } else if (event.type === "turn.completed") {
      if (event.sessionId && assistantDraftRef.current.trim()) {
        void persistOperatorMessage(event.sessionId, "assistant", assistantDraftRef.current);
        void loadOperatorSessions();
      }
      addOperatorEvent("activity", "Turn completed");
    }
  }

  function addOperatorEvent(kind: OperatorEventEntry["kind"], title: string, detail?: string) {
    setOperatorEvents((items) => [{
      id: crypto.randomUUID(),
      kind,
      title,
      ...(detail ? { detail } : {}),
    }, ...items].slice(0, 40));
  }

  async function signOut() {
    await fetch("/api/auth/sign-out", { method: "POST" });
    router.replace("/login");
    router.refresh();
  }

  async function persistOperatorMessage(sessionId: string, role: "user" | "assistant" | "system" | "tool", content: unknown) {
    await fetch(`/api/studio/operator/sessions/${sessionId}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ role, content }),
    });
  }

  return (
    <AppShell
      view={view}
      setView={setView}
      targetName={props.manifest.target.name}
      health={health}
      user={props.user}
      refreshTarget={() => void refreshTarget()}
      signOut={() => void signOut()}
    >
      {view === "monitoring" ? (
        <HomeView manifest={props.manifest} health={health} introspection={introspection} dashboards={dashboards} introspectionError={introspectionError} renderedAt={props.initialRenderedAt} />
      ) : null}
      {view === "agents" ? (
        <AgentsView introspection={introspection} error={introspectionError} activeJourney={activeJourney} setActiveJourneyId={setActiveJourneyId} />
      ) : null}
      {view === "dashboards" ? (
        <DashboardsView dashboards={dashboards} previewDashboard={previewDashboard} introspection={introspection} saveAgentDashboard={saveAgentDashboard} openDashboard={openDashboard} publishDashboard={publishDashboard} />
      ) : null}
      {view === "operator" ? (
        <OperatorView
          manifest={props.manifest}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          selectedReasoningEffort={selectedReasoningEffort}
          setSelectedReasoningEffort={setSelectedReasoningEffort}
          messages={operatorMessages}
          input={operatorInput}
          setInput={setOperatorInput}
          send={sendOperatorMessage}
          events={operatorEvents}
          artifacts={artifacts}
          diffFiles={diffFiles}
          sessions={operatorSessions}
          openSession={openOperatorSession}
        />
      ) : null}
      {view === "admin" ? <AdminView manifest={props.manifest} user={props.user} /> : null}
    </AppShell>
  );
}

function stringifySmall(value: unknown) {
  if (value === undefined) return undefined;
  const text = typeof value === "string" ? value : JSON.stringify(value, null, 2);
  return text.length > 1200 ? `${text.slice(0, 1200)}...` : text;
}
