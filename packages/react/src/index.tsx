import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import type { MessageSegment, RuntimeEvent, SupportReference } from "@cognidesk/core";
import type { AppearanceConfiguration } from "@cognidesk/ui";
import { elementKeys, resolveElementClassName, resolveInlineStyle } from "@cognidesk/ui";

export interface CognideskClientOptions {
  baseUrl: string;
  fetch?: typeof fetch;
  EventSource?: typeof EventSource;
}

export interface CreateConversationResult {
  conversation: {
    id: string;
    agentId: string;
    lifecycle: string;
    context: unknown;
    createdAt: string;
    updatedAt: string;
  };
}

export interface SendMessageResult {
  text: string;
  events: RuntimeEvent[];
  activeJourneyId?: string;
}

export interface RuntimeSnapshotResult {
  snapshot: {
    conversationId: string;
    lifecycle: string;
    activeJourneyId?: string;
    activeStateIds: string[];
    journeyContext?: unknown;
    compactionSummary?: unknown;
    definitionHash?: string;
    updatedAt: string;
  } | null;
}

export interface CognideskClient {
  createConversation(input?: { agentId?: string; context?: unknown; id?: string }): Promise<CreateConversationResult>;
  sendMessage(conversationId: string, message: string, options?: { turn?: unknown; app?: unknown }): Promise<SendMessageResult>;
  submitWidget(conversationId: string, input: { promptId: string; widgetKind: string; output: unknown }): Promise<{ event: RuntimeEvent }>;
  emitIntermediateMessage(conversationId: string, input: { text: string; traceId?: string }): Promise<{ events: RuntimeEvent[] }>;
  emitGeneratedPreamble(conversationId: string, input?: { purpose?: string; maxWords?: number; traceId?: string }): Promise<{ text: string; events: RuntimeEvent[] }>;
  compactConversation(conversationId: string, input?: { fromOffset?: number; toOffset?: number; schemaVersion?: string }): Promise<{ summary: unknown; snapshot: NonNullable<RuntimeSnapshotResult["snapshot"]>; events: RuntimeEvent[] }>;
  closeConversation(conversationId: string, input?: { reason?: string }): Promise<{ conversation: CreateConversationResult["conversation"] }>;
  requestHandoff(conversationId: string, input: { reason: string; summary?: string; payload?: unknown }): Promise<{ conversation: CreateConversationResult["conversation"]; event: RuntimeEvent }>;
  resumeConversation(conversationId: string, input?: { reason?: string; payload?: unknown }): Promise<{ conversation: CreateConversationResult["conversation"]; event: RuntimeEvent }>;
  getSnapshot(conversationId: string): Promise<RuntimeSnapshotResult>;
  listEvents(conversationId: string, options?: { afterOffset?: number }): Promise<{ events: RuntimeEvent[] }>;
  streamEvents(conversationId: string, handlers: { onEvent(event: RuntimeEvent): void; onError?(error: Event): void }, options?: { afterOffset?: number }): () => void;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  segments?: MessageSegment[];
  status: "sending" | "sent" | "failed";
}

export interface WidgetRendererProps {
  promptId: string;
  kind: string;
  input: unknown;
  submit(output: unknown): void;
}

export type WidgetRenderer = (props: WidgetRendererProps) => ReactNode;

export type WidgetRendererMap = Record<string, WidgetRenderer>;

export interface ChatWidgetProps {
  client: CognideskClient;
  conversationId?: string;
  agentId?: string;
  initialContext?: unknown;
  title?: ReactNode;
  placeholder?: string;
  appearance?: AppearanceConfiguration;
  widgets?: WidgetRendererMap;
  onConversationCreated?(conversationId: string): void;
  onWidgetSubmit?(args: { promptId: string; kind: string; output: unknown }): void;
}

export interface UseChatOptions {
  client: CognideskClient;
  conversationId?: string;
  agentId?: string;
  initialContext?: unknown;
  onConversationCreated?(conversationId: string): void;
}

export interface PromptState {
  promptId: string;
  kind: string;
  input: unknown;
}

export function createCognideskClient(options: CognideskClientOptions): CognideskClient {
  const fetcher = options.fetch ?? fetch;
  const baseUrl = options.baseUrl.replace(/\/$/, "");

  return {
    async createConversation(input = {}) {
      const response = await fetcher(`${baseUrl}/conversations`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!response.ok) throw new Error(`Failed to create conversation: ${response.status}`);
      return await response.json() as CreateConversationResult;
    },
    async sendMessage(conversationId, message, sendOptions = {}) {
      const response = await fetcher(`${baseUrl}/conversations/${encodeURIComponent(conversationId)}/messages`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          message,
          ...(sendOptions.turn !== undefined ? { turn: sendOptions.turn } : {}),
          ...(sendOptions.app !== undefined ? { app: sendOptions.app } : {}),
        }),
      });
      if (!response.ok) throw new Error(`Failed to send message: ${response.status}`);
      return await response.json() as SendMessageResult;
    },
    async listEvents(conversationId, listOptions = {}) {
      const params = new URLSearchParams();
      if (listOptions.afterOffset !== undefined) params.set("after", String(listOptions.afterOffset));
      const suffix = params.size > 0 ? `?${params.toString()}` : "";
      const response = await fetcher(`${baseUrl}/conversations/${encodeURIComponent(conversationId)}/events${suffix}`);
      if (!response.ok) throw new Error(`Failed to list events: ${response.status}`);
      return await response.json() as { events: RuntimeEvent[] };
    },
    async submitWidget(conversationId, input) {
      const response = await fetcher(`${baseUrl}/conversations/${encodeURIComponent(conversationId)}/widgets/${encodeURIComponent(input.promptId)}/submissions`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          widgetKind: input.widgetKind,
          output: input.output,
        }),
      });
      if (!response.ok) throw new Error(`Failed to submit widget: ${response.status}`);
      return await response.json() as { event: RuntimeEvent };
    },
    async emitIntermediateMessage(conversationId, input) {
      const response = await fetcher(`${baseUrl}/conversations/${encodeURIComponent(conversationId)}/intermediate-messages`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          text: input.text,
          ...(input.traceId ? { traceId: input.traceId } : {}),
        }),
      });
      if (!response.ok) throw new Error(`Failed to emit intermediate message: ${response.status}`);
      return await response.json() as { events: RuntimeEvent[] };
    },
    async emitGeneratedPreamble(conversationId, input = {}) {
      const response = await fetcher(`${baseUrl}/conversations/${encodeURIComponent(conversationId)}/preambles`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.purpose ? { purpose: input.purpose } : {}),
          ...(input.maxWords !== undefined ? { maxWords: input.maxWords } : {}),
          ...(input.traceId ? { traceId: input.traceId } : {}),
        }),
      });
      if (!response.ok) throw new Error(`Failed to emit generated preamble: ${response.status}`);
      return await response.json() as { text: string; events: RuntimeEvent[] };
    },
    async compactConversation(conversationId, input = {}) {
      const response = await fetcher(`${baseUrl}/conversations/${encodeURIComponent(conversationId)}/compact`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.fromOffset !== undefined ? { fromOffset: input.fromOffset } : {}),
          ...(input.toOffset !== undefined ? { toOffset: input.toOffset } : {}),
          ...(input.schemaVersion ? { schemaVersion: input.schemaVersion } : {}),
        }),
      });
      if (!response.ok) throw new Error(`Failed to compact conversation: ${response.status}`);
      return await response.json() as { summary: unknown; snapshot: NonNullable<RuntimeSnapshotResult["snapshot"]>; events: RuntimeEvent[] };
    },
    async closeConversation(conversationId, input = {}) {
      const response = await fetcher(`${baseUrl}/conversations/${encodeURIComponent(conversationId)}/close`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.reason ? { reason: input.reason } : {}),
        }),
      });
      if (!response.ok) throw new Error(`Failed to close conversation: ${response.status}`);
      return await response.json() as { conversation: CreateConversationResult["conversation"] };
    },
    async requestHandoff(conversationId, input) {
      const response = await fetcher(`${baseUrl}/conversations/${encodeURIComponent(conversationId)}/handoff`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          reason: input.reason,
          ...(input.summary ? { summary: input.summary } : {}),
          ...(input.payload !== undefined ? { payload: input.payload } : {}),
        }),
      });
      if (!response.ok) throw new Error(`Failed to request handoff: ${response.status}`);
      return await response.json() as { conversation: CreateConversationResult["conversation"]; event: RuntimeEvent };
    },
    async resumeConversation(conversationId, input = {}) {
      const response = await fetcher(`${baseUrl}/conversations/${encodeURIComponent(conversationId)}/resume`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...(input.reason ? { reason: input.reason } : {}),
          ...(input.payload !== undefined ? { payload: input.payload } : {}),
        }),
      });
      if (!response.ok) throw new Error(`Failed to resume conversation: ${response.status}`);
      return await response.json() as { conversation: CreateConversationResult["conversation"]; event: RuntimeEvent };
    },
    async getSnapshot(conversationId) {
      const response = await fetcher(`${baseUrl}/conversations/${encodeURIComponent(conversationId)}/snapshot`);
      if (!response.ok) throw new Error(`Failed to get snapshot: ${response.status}`);
      return await response.json() as RuntimeSnapshotResult;
    },
    streamEvents(conversationId, handlers, streamOptions = {}) {
      const eventSourceConstructor = options.EventSource ?? globalThis.EventSource;
      if (!eventSourceConstructor) throw new Error("EventSource is not available in this environment.");
      const params = new URLSearchParams();
      if (streamOptions.afterOffset !== undefined) params.set("after", String(streamOptions.afterOffset));
      const suffix = params.size > 0 ? `?${params.toString()}` : "";
      const source = new eventSourceConstructor(`${baseUrl}/conversations/${encodeURIComponent(conversationId)}/events/stream${suffix}`);
      source.addEventListener("event", (event) => {
        handlers.onEvent(JSON.parse((event as MessageEvent).data) as RuntimeEvent);
      });
      if (handlers.onError) source.addEventListener("error", handlers.onError);
      return () => source.close();
    },
  };
}

export function useChat(options: UseChatOptions) {
  const [conversationId, setConversationId] = useState(options.conversationId ?? null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [prompts, setPrompts] = useState<PromptState[]>([]);
  const [status, setStatus] = useState<"idle" | "starting" | "sending" | "streaming" | "error">("idle");
  const [error, setError] = useState<Error | null>(null);
  const lastOffsetRef = useRef(0);

  useEffect(() => {
    setConversationId(options.conversationId ?? null);
  }, [options.conversationId]);

  const ensureConversation = useCallback(async () => {
    if (conversationId) return conversationId;
    if (!options.agentId) throw new Error("agentId is required when conversationId is not provided.");
    setStatus("starting");
    const result = await options.client.createConversation({
      agentId: options.agentId,
      context: options.initialContext ?? {},
    });
    setConversationId(result.conversation.id);
    options.onConversationCreated?.(result.conversation.id);
    setStatus("idle");
    return result.conversation.id;
  }, [conversationId, options]);

  const applyEvent = useCallback((event: RuntimeEvent) => {
    lastOffsetRef.current = Math.max(lastOffsetRef.current, event.offset);
    if (event.type === "message.completed") {
      setMessages((current) => {
        if (current.some((message) => message.id === event.id)) return current;
        const role = inferMessageRole(event, current);
        if (role !== "assistant") return current;
        return [
          ...current,
          {
            id: event.id,
            role,
            text: event.data.text,
            ...(event.data.segments ? { segments: event.data.segments } : {}),
            status: "sent",
          },
        ];
      });
    }
    if (event.type === "ui.prompted") {
      setPrompts((current) => [
        ...current.filter((prompt) => prompt.promptId !== event.data.promptId),
        { promptId: event.data.promptId, kind: event.data.widgetKind, input: event.data.input },
      ]);
    }
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const id = `local_${Date.now()}`;
    setMessages((current) => [...current, { id, role: "user", text: trimmed, status: "sending" }]);
    setStatus("sending");
    setError(null);
    try {
      const idToUse = await ensureConversation();
      const result = await options.client.sendMessage(idToUse, trimmed);
      setMessages((current) => current.map((message) => (
        message.id === id ? { ...message, status: "sent" } : message
      )));
      for (const event of result.events) applyEvent(event);
      setStatus("idle");
    } catch (caught) {
      const nextError = caught instanceof Error ? caught : new Error("Failed to send message.");
      setError(nextError);
      setMessages((current) => current.map((message) => (
        message.id === id ? { ...message, status: "failed" } : message
      )));
      setStatus("error");
    }
  }, [applyEvent, ensureConversation, options.client]);

  useEffect(() => {
    if (!conversationId) return undefined;
    setStatus((current) => current === "idle" ? "streaming" : current);
    return options.client.streamEvents(conversationId, {
      onEvent: applyEvent,
      onError: () => setStatus("error"),
    }, { afterOffset: lastOffsetRef.current });
  }, [applyEvent, conversationId, options.client]);

  return useMemo(() => ({
    conversationId,
    messages,
    prompts,
    status,
    error,
    sendMessage,
    clearPrompt: (promptId: string) => setPrompts((current) => current.filter((prompt) => prompt.promptId !== promptId)),
  }), [conversationId, error, messages, prompts, sendMessage, status]);
}

export function ChatWidget(props: ChatWidgetProps) {
  const chat = useChat(props);
  const [draft, setDraft] = useState("");
  const appearance = props.appearance;
  const widgets = useMemo(() => ({
    ...defaultWidgetRenderers,
    ...props.widgets,
  }), [props.widgets]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const value = draft;
    setDraft("");
    void chat.sendMessage(value);
  };

  return (
    <div className={resolveElementClassName(elementKeys.root, appearance)} style={resolveInlineStyle(elementKeys.root, appearance)}>
      {props.title ? <div className="cd-header">{props.title}</div> : null}
      <div className={resolveElementClassName(elementKeys.messageList, appearance)} style={resolveInlineStyle(elementKeys.messageList, appearance)}>
        {chat.messages.map((message) => (
          <div
            key={message.id}
            className={resolveElementClassName(message.role === "user" ? elementKeys.messageUser : elementKeys.messageAssistant, appearance)}
            style={resolveInlineStyle(message.role === "user" ? elementKeys.messageUser : elementKeys.messageAssistant, appearance)}
            data-status={message.status}
          >
            <MessageContent message={message} appearance={appearance} />
          </div>
        ))}
      </div>
      <div className={resolveElementClassName(elementKeys.widgetOutlet, appearance)} style={resolveInlineStyle(elementKeys.widgetOutlet, appearance)}>
        {chat.prompts.map((prompt) => {
          const Widget = widgets[prompt.kind];
          if (!Widget) return null;
          return (
            <div key={prompt.promptId} className="cd-widget">
              {Widget({
                promptId: prompt.promptId,
                kind: prompt.kind,
                input: prompt.input,
                submit: (output) => {
                  props.onWidgetSubmit?.({ promptId: prompt.promptId, kind: prompt.kind, output });
                  if (!chat.conversationId) {
                    chat.clearPrompt(prompt.promptId);
                    return;
                  }
                  void props.client.submitWidget(chat.conversationId, {
                    promptId: prompt.promptId,
                    widgetKind: prompt.kind,
                    output,
                  }).finally(() => chat.clearPrompt(prompt.promptId));
                },
              })}
            </div>
          );
        })}
      </div>
      <form className={resolveElementClassName(elementKeys.composer, appearance)} style={resolveInlineStyle(elementKeys.composer, appearance)} onSubmit={submit}>
        <input
          className={resolveElementClassName(elementKeys.composerInput, appearance)}
          style={resolveInlineStyle(elementKeys.composerInput, appearance)}
          value={draft}
          placeholder={props.placeholder ?? "Message..."}
          onChange={(event) => setDraft(event.currentTarget.value)}
          disabled={chat.status === "starting"}
        />
        <button
          className={resolveElementClassName(elementKeys.composerSendButton, appearance)}
          style={resolveInlineStyle(elementKeys.composerSendButton, appearance)}
          type="submit"
          disabled={chat.status === "starting" || draft.trim().length === 0}
        >
          Send
        </button>
      </form>
      {chat.error ? <div className="cd-error">{chat.error.message}</div> : null}
    </div>
  );
}

export const defaultWidgetRenderers: WidgetRendererMap = {
  confirmation: ({ input, submit }) => {
    const data = asRecord(input);
    return (
      <div className="cd-widget-panel">
        {typeof data.title === "string" ? <div className="cd-widget-title">{data.title}</div> : null}
        {typeof data.message === "string" ? <div className="cd-widget-description">{data.message}</div> : null}
        <div className="cd-widget-actions">
          <button className="cd-widget-button cd-widget-button-primary" type="button" onClick={() => submit({ confirmed: true })}>
            {typeof data.confirmLabel === "string" ? data.confirmLabel : "Confirm"}
          </button>
          <button className="cd-widget-button" type="button" onClick={() => submit({ confirmed: false })}>
            {typeof data.cancelLabel === "string" ? data.cancelLabel : "Cancel"}
          </button>
        </div>
      </div>
    );
  },
  "text-input": ({ input, submit }) => {
    const data = asRecord(input);
    return (
      <form className="cd-widget-panel" onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        submit({ value: String(form.get("value") ?? "") });
      }}>
        <WidgetLabel input={data} />
        <input className="cd-widget-input" name="value" placeholder={typeof data.placeholder === "string" ? data.placeholder : undefined} />
        <button className="cd-widget-button cd-widget-button-primary" type="submit">Submit</button>
      </form>
    );
  },
  choice: ({ input, submit }) => {
    const data = asRecord(input);
    const options = Array.isArray(data.options) ? data.options.map(asRecord) : [];
    return (
      <div className="cd-widget-panel">
        <WidgetLabel input={data} />
        <div className="cd-widget-choice-list">
          {options.map((option) => {
            const id = typeof option.id === "string" ? option.id : "";
            return (
              <button key={id} className="cd-widget-choice" type="button" onClick={() => submit({ selectedId: id })}>
                <span className="cd-widget-choice-label">{typeof option.label === "string" ? option.label : id}</span>
                {typeof option.description === "string" ? <span className="cd-widget-choice-description">{option.description}</span> : null}
              </button>
            );
          })}
        </div>
      </div>
    );
  },
  "date-picker": ({ input, submit }) => {
    const data = asRecord(input);
    return (
      <form className="cd-widget-panel" onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        submit({ value: String(form.get("value") ?? "") });
      }}>
        <WidgetLabel input={data} />
        <input
          className="cd-widget-input"
          name="value"
          type="date"
          min={typeof data.min === "string" ? data.min : undefined}
          max={typeof data.max === "string" ? data.max : undefined}
        />
        <button className="cd-widget-button cd-widget-button-primary" type="submit">Submit</button>
      </form>
    );
  },
  form: ({ input, submit }) => {
    const data = asRecord(input);
    const fields = Array.isArray(data.fields) ? data.fields.map(asRecord) : [];
    return (
      <form className="cd-widget-panel" onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const values: Record<string, unknown> = {};
        for (const field of fields) {
          const path = typeof field.path === "string" ? field.path : "";
          if (!path) continue;
          values[path] = form.get(path);
        }
        submit({ values });
      }}>
        {typeof data.title === "string" ? <div className="cd-widget-title">{data.title}</div> : null}
        <div className="cd-widget-fields">
          {fields.map((field) => renderFormField(field))}
        </div>
        <button className="cd-widget-button cd-widget-button-primary" type="submit">Submit</button>
      </form>
    );
  },
};

function MessageContent(props: { message: ChatMessage; appearance: AppearanceConfiguration | undefined }) {
  if (!props.message.segments?.length) return <>{props.message.text}</>;
  return (
    <>
      {props.message.segments.map((segment) => {
        const title = formatSupportReferences(segment.references);
        if (!title) return <span key={segment.id}>{segment.text}</span>;
        return (
          <span
            key={segment.id}
            className={resolveElementClassName(elementKeys.messageSourceSegment, props.appearance)}
            style={resolveInlineStyle(elementKeys.messageSourceSegment, props.appearance)}
            title={title}
          >
            {segment.text}
          </span>
        );
      })}
    </>
  );
}

function WidgetLabel(props: { input: Record<string, unknown> }) {
  return (
    <div>
      {typeof props.input.label === "string" ? <label className="cd-widget-title">{props.input.label}</label> : null}
      {typeof props.input.description === "string" ? <div className="cd-widget-description">{props.input.description}</div> : null}
    </div>
  );
}

function renderFormField(field: Record<string, unknown>) {
  const path = typeof field.path === "string" ? field.path : "";
  const label = typeof field.label === "string" ? field.label : path;
  const type = typeof field.type === "string" ? field.type : "text";
  const required = field.required !== false;
  if (type === "choice") {
    const options = Array.isArray(field.options) ? field.options.map(asRecord) : [];
    return (
      <label key={path} className="cd-widget-field">
        <span className="cd-widget-field-label">{label}</span>
        <select className="cd-widget-input" name={path} required={required}>
          {options.map((option) => {
            const id = typeof option.id === "string" ? option.id : "";
            return <option key={id} value={id}>{typeof option.label === "string" ? option.label : id}</option>;
          })}
        </select>
      </label>
    );
  }
  return (
    <label key={path} className="cd-widget-field">
      <span className="cd-widget-field-label">{label}</span>
      <input className="cd-widget-input" name={path} type={toHtmlInputType(type)} required={required} />
    </label>
  );
}

function toHtmlInputType(type: string) {
  if (type === "email" || type === "date" || type === "number") return type;
  return "text";
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value) ? value as Record<string, unknown> : {};
}

export function formatSupportReferences(references: SupportReference[] | undefined) {
  if (!references?.length) return "";
  return references.map((reference) => {
    if (reference.type === "knowledge") return `Knowledge: ${reference.id}`;
    return `Tool result: ${reference.id}`;
  }).join("\n");
}

function inferMessageRole(event: Extract<RuntimeEvent, { type: "message.completed" }>, messages: ChatMessage[]) {
  const previous = messages[messages.length - 1];
  if (!previous || previous.role === "assistant") return "assistant";
  if (event.data.text === previous.text) return "user";
  return "assistant";
}
