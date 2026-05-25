import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import type { RuntimeEvent } from "@cognidesk/core";
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

export interface CognideskClient {
  createConversation(input?: { agentId?: string; context?: unknown; id?: string }): Promise<CreateConversationResult>;
  sendMessage(conversationId: string, message: string, options?: { turn?: unknown; app?: unknown }): Promise<SendMessageResult>;
  listEvents(conversationId: string, options?: { afterOffset?: number }): Promise<{ events: RuntimeEvent[] }>;
  streamEvents(conversationId: string, handlers: { onEvent(event: RuntimeEvent): void; onError?(error: Event): void }, options?: { afterOffset?: number }): () => void;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  status: "sending" | "sent" | "failed";
}

export interface WidgetRendererProps {
  promptId: string;
  kind: string;
  input: unknown;
  submit(output: unknown): void;
}

export type WidgetRenderer = (props: WidgetRendererProps) => ReactNode;

export interface ChatWidgetProps {
  client: CognideskClient;
  conversationId?: string;
  agentId?: string;
  initialContext?: unknown;
  title?: ReactNode;
  placeholder?: string;
  appearance?: AppearanceConfiguration;
  widgets?: Record<string, WidgetRenderer>;
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
        const role = inferMessageRole(event, current);
        if (role !== "assistant") return current;
        return [
          ...current,
          {
            id: event.id,
            role,
            text: event.data.text,
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
            {message.text}
          </div>
        ))}
      </div>
      <div className={resolveElementClassName(elementKeys.widgetOutlet, appearance)} style={resolveInlineStyle(elementKeys.widgetOutlet, appearance)}>
        {chat.prompts.map((prompt) => {
          const Widget = props.widgets?.[prompt.kind];
          if (!Widget) return null;
          return (
            <div key={prompt.promptId} className="cd-widget">
              {Widget({
                promptId: prompt.promptId,
                kind: prompt.kind,
                input: prompt.input,
                submit: (output) => {
                  props.onWidgetSubmit?.({ promptId: prompt.promptId, kind: prompt.kind, output });
                  chat.clearPrompt(prompt.promptId);
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
          disabled={chat.status === "starting" || chat.status === "sending"}
        />
        <button
          className={resolveElementClassName(elementKeys.composerSendButton, appearance)}
          style={resolveInlineStyle(elementKeys.composerSendButton, appearance)}
          type="submit"
          disabled={chat.status === "starting" || chat.status === "sending" || draft.trim().length === 0}
        >
          Send
        </button>
      </form>
      {chat.error ? <div className="cd-error">{chat.error.message}</div> : null}
    </div>
  );
}

function inferMessageRole(event: Extract<RuntimeEvent, { type: "message.completed" }>, messages: ChatMessage[]) {
  const previous = messages[messages.length - 1];
  if (!previous || previous.role === "assistant") return "assistant";
  if (event.data.text === previous.text) return "user";
  return "assistant";
}
