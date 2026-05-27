import { useState } from "react";
import { Boxes, CheckCircle2, ChevronDown, ChevronRight, Code2, Send, TerminalSquare } from "lucide-react";
import { Streamdown } from "streamdown";
import type { StudioTargetManifest } from "@cognidesk/studio-contracts";
import type { OperatorEventEntry, OperatorMessage, ReasoningEffort } from "./types";
import { Button, formatDateTime } from "./ui";

const reasoningEfforts: Array<{ id: ReasoningEffort; label: string }> = [
  { id: "low", label: "Low" },
  { id: "medium", label: "Medium" },
  { id: "high", label: "High" },
  { id: "xhigh", label: "Extra high" },
  { id: "minimal", label: "Minimal" },
  { id: "none", label: "None" },
];

export function OperatorView(props: {
  manifest: StudioTargetManifest;
  selectedModel: string;
  setSelectedModel: (model: string) => void;
  selectedReasoningEffort: ReasoningEffort;
  setSelectedReasoningEffort: (effort: ReasoningEffort) => void;
  messages: OperatorMessage[];
  sessions: Array<{ id: string; title: string; updatedAt: string }>;
  openSession: (id: string) => void;
  input: string;
  setInput: (value: string) => void;
  send: () => void;
  events: OperatorEventEntry[];
  artifacts: Record<string, unknown>[];
  diffFiles: Array<{ path: string; status: string }>;
}) {
  const [showContext, setShowContext] = useState(true);
  return (
    <section className="grid min-h-[calc(100vh-5rem)] grid-cols-[280px_minmax(0,1fr)] max-xl:grid-cols-1">
      <aside className="border-r border-slate-200 bg-slate-50 p-5 max-xl:border-b max-xl:border-r-0">
        <Button className="mb-3 w-full justify-start" variant="default">
          <Code2 size={15} />
          New session
        </Button>
        <input className="mb-4 h-9 w-full rounded-lg border border-slate-200 px-3 text-sm" aria-label="Search sessions" placeholder="Search sessions" />
        <div className="grid gap-1">
          {props.sessions.slice(0, 18).map((session) => (
            <button className="grid min-h-12 gap-1 rounded-lg px-3 text-left text-sm text-slate-600 hover:bg-white" type="button" key={session.id} onClick={() => props.openSession(session.id)}>
              <span className="truncate">{session.title}</span>
              <small className="text-xs text-slate-500">{formatDateTime(session.updatedAt)}</small>
            </button>
          ))}
        </div>
      </aside>

      <section className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)_auto]">
        <header className="flex min-h-16 items-center justify-between gap-4 border-b border-slate-200 px-5 max-lg:flex-col max-lg:items-stretch max-lg:py-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Studio Operator</span>
            <ChevronRight size={15} />
            <strong className="text-slate-950">Sandbox chat</strong>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <label className="grid gap-1 text-xs text-slate-500">
              Model
              <select className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-950" value={props.selectedModel} onChange={(event) => props.setSelectedModel(event.target.value)}>
                {props.manifest.operator.models.map((model) => <option key={model.id} value={model.id}>{model.label}</option>)}
              </select>
            </label>
            <label className="grid gap-1 text-xs text-slate-500">
              Thinking
              <select className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-950" value={props.selectedReasoningEffort} onChange={(event) => props.setSelectedReasoningEffort(event.target.value as ReasoningEffort)}>
                {reasoningEfforts.map((effort) => <option key={effort.id} value={effort.id}>{effort.label}</option>)}
              </select>
            </label>
          </div>
        </header>

        <div className="min-h-0 overflow-auto bg-white px-7 py-6">
          <div className="mx-auto grid max-w-4xl gap-6">
            {props.events.length ? <OperatorTimeline events={props.events} /> : null}
            {props.messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
        </div>

        <footer className="border-t border-slate-200 bg-white p-5">
          <div className="mx-auto grid max-w-4xl gap-3">
            <textarea
              className="min-h-24 resize-y rounded-lg border border-slate-200 px-4 py-3 text-sm leading-6"
              value={props.input}
              onChange={(event) => props.setInput(event.target.value)}
              placeholder="Ask anything, inspect traces, change agent code, or create a dashboard"
            />
            <div className="flex items-center justify-between gap-3">
              <Button onClick={() => setShowContext(!showContext)} variant="ghost">
                {showContext ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                Context
              </Button>
              <button className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white" type="button" onClick={props.send} aria-label="Send">
                <Send size={18} />
              </button>
            </div>
            {showContext ? (
              <OperatorContext artifacts={props.artifacts} diffFiles={props.diffFiles} events={props.events} />
            ) : null}
          </div>
        </footer>
      </section>
    </section>
  );
}

function Message({ message }: { message: OperatorMessage }) {
  if (message.role === "assistant") {
    return (
      <article className="prose prose-slate max-w-none">
        <span className="mb-2 block text-xs text-slate-500">assistant</span>
        <Streamdown isAnimating={message.text === ""}>{message.text || "Working..."}</Streamdown>
      </article>
    );
  }
  if (message.role === "system") {
    return <p className="rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-500">{message.text}</p>;
  }
  return (
    <article className="ml-auto max-w-2xl rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
      <span className="mb-2 block text-xs text-slate-500">user</span>
      <p className="whitespace-pre-wrap text-sm leading-6 text-slate-900">{message.text}</p>
    </article>
  );
}

function OperatorTimeline({ events }: { events: OperatorEventEntry[] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-slate-50">
      <div className="border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-950">Run events</div>
      <div className="divide-y divide-slate-200">
        {events.slice(0, 10).map((event) => (
          <div className="grid grid-cols-[24px_minmax(0,1fr)] gap-3 px-4 py-3 text-sm" key={event.id}>
            <EventIcon kind={event.kind} />
            <div>
              <strong className="font-medium text-slate-900">{event.title}</strong>
              {event.detail ? <p className="mt-1 whitespace-pre-wrap text-slate-600">{event.detail}</p> : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function OperatorContext({ artifacts, diffFiles, events }: { artifacts: Record<string, unknown>[]; diffFiles: Array<{ path: string; status: string }>; events: OperatorEventEntry[] }) {
  return (
    <div className="grid gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
      <details>
        <summary className="cursor-pointer font-medium text-slate-800">Evidence ({events.length})</summary>
        <div className="mt-2 grid gap-2">
          {events.length ? events.slice(0, 8).map((event) => <p className="text-slate-600" key={event.id}>{event.title}</p>) : <p className="text-slate-500">No evidence yet.</p>}
        </div>
      </details>
      <details>
        <summary className="cursor-pointer font-medium text-slate-800">Artifacts ({artifacts.length})</summary>
        <div className="mt-2 grid gap-2">
          {artifacts.length ? artifacts.map((artifact, index) => <p className="text-slate-600" key={index}>{String(artifact.title ?? artifact.type ?? "Artifact")}</p>) : <p className="text-slate-500">No artifacts yet.</p>}
        </div>
      </details>
      <details>
        <summary className="cursor-pointer font-medium text-slate-800">Sandbox diff ({diffFiles.length})</summary>
        <div className="mt-2 grid gap-2">
          {diffFiles.length ? diffFiles.map((file) => <p className="font-mono text-xs text-slate-600" key={file.path}>{file.status}: {file.path}</p>) : <p className="text-slate-500">No sandbox diff yet.</p>}
        </div>
      </details>
    </div>
  );
}

function EventIcon({ kind }: { kind: OperatorEventEntry["kind"] }) {
  const className = "mt-0.5 text-slate-500";
  if (kind === "tool") return <TerminalSquare className={className} size={16} />;
  if (kind === "artifact") return <Boxes className={className} size={16} />;
  if (kind === "diff") return <Code2 className={className} size={16} />;
  return <CheckCircle2 className={className} size={16} />;
}
