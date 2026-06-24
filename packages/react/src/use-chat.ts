import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { reduceChatRuntimeEvent, type ChatEventReducerState } from "./event-reducer.js";
import type { ChatStartAction, ChatStartBehavior, ChatStartInput, UseChatOptions } from "./types.js";

export function useChat(options: UseChatOptions) {
  const [conversationId, setConversationId] = useState(options.conversationId ?? null);
  const [chatState, setChatState] = useState<ChatEventReducerState>({
    messages: [],
    prompts: [],
    activities: [],
    lastOffset: 0,
  });
  const [status, setStatus] = useState<"idle" | "starting" | "sending" | "streaming" | "error">("idle");
  const [error, setError] = useState<Error | null>(null);
  const lastOffsetRef = useRef(0);
  const createConversationRef = useRef<Promise<string> | null>(null);
  const autoStartRequestedRef = useRef(false);
  const stopStreamRef = useRef<(() => void) | null>(null);
  const streamConversationIdRef = useRef<string | null>(null);
  const formatActivityLabel = options.formatActivityLabel;

  const applyEvent = useCallback((event: Parameters<typeof reduceChatRuntimeEvent>[1]) => {
    setChatState((current) => {
      const next = reduceChatRuntimeEvent(
        current,
        event,
        formatActivityLabel ? { formatActivityLabel } : undefined,
      );
      lastOffsetRef.current = next.lastOffset;
      return next;
    });
  }, [formatActivityLabel]);

  const stopStream = useCallback(() => {
    stopStreamRef.current?.();
    stopStreamRef.current = null;
    streamConversationIdRef.current = null;
  }, []);

  const startStream = useCallback((id: string) => {
    if (streamConversationIdRef.current === id && stopStreamRef.current) return;
    stopStream();
    streamConversationIdRef.current = id;
    setStatus((current) => current === "idle" ? "streaming" : current);
    stopStreamRef.current = options.client.streamEvents(id, {
      onEvent: applyEvent,
      onError: () => setStatus("error"),
    }, { afterOffset: lastOffsetRef.current });
  }, [applyEvent, options.client, stopStream]);

  const ensureConversation = useCallback(async () => {
    if (conversationId) {
      startStream(conversationId);
      return conversationId;
    }
    if (createConversationRef.current) return createConversationRef.current;
    const agentId = options.agentId;
    if (!agentId) throw new Error("agentId is required when conversationId is not provided.");
    setStatus("starting");
    createConversationRef.current = (async () => {
      const context = options.initialContext ?? {};
      const chatStart = await resolveChatStart(options.chatStart, {
        context,
        ...(options.channel !== undefined ? { channel: options.channel } : {}),
        ...(options.app !== undefined ? { app: options.app } : {}),
      });
      const result = await options.client.createConversation({
        agentId,
        context,
        ...(options.channel !== undefined ? { channel: options.channel } : {}),
        ...(chatStart !== undefined ? { chatStart } : {}),
        ...(options.app !== undefined ? { app: options.app } : {}),
      });
      setConversationId(result.conversation.id);
      options.onConversationCreated?.(result.conversation.id);
      for (const event of result.events ?? []) applyEvent(event);
      startStream(result.conversation.id);
      setStatus("idle");
      return result.conversation.id;
    })().finally(() => {
      createConversationRef.current = null;
    });
    return createConversationRef.current;
  }, [applyEvent, conversationId, options, startStream]);

  useEffect(() => {
    stopStream();
    setConversationId(options.conversationId ?? null);
    lastOffsetRef.current = 0;
    createConversationRef.current = null;
    autoStartRequestedRef.current = false;
    setChatState({ messages: [], prompts: [], activities: [], lastOffset: 0 });
    setError(null);
  }, [options.conversationId, stopStream]);

  useEffect(() => {
    if (!options.autoStart || options.conversationId || conversationId || autoStartRequestedRef.current) return;
    autoStartRequestedRef.current = true;
    void ensureConversation().catch((caught) => {
      const nextError = caught instanceof Error ? caught : new Error("Failed to start conversation.");
      setError(nextError);
      setStatus("error");
    });
  }, [conversationId, ensureConversation, options.autoStart, options.conversationId]);

  useEffect(() => {
    const expiringActivities = chatState.activities.filter((activity) => typeof activity.expiresAt === "number");
    if (expiringActivities.length === 0) return undefined;
    const now = Date.now();
    const nextExpiration = Math.min(...expiringActivities.map((activity) => activity.expiresAt ?? Number.POSITIVE_INFINITY));
    const timeout = window.setTimeout(() => {
      const currentTime = Date.now();
      setChatState((current) => ({
        ...current,
        activities: current.activities.filter((activity) => (
          typeof activity.expiresAt !== "number" || activity.expiresAt > currentTime
        )),
      }));
    }, Math.max(0, nextExpiration - now));
    return () => window.clearTimeout(timeout);
  }, [chatState.activities]);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const id = `local_${Date.now()}`;
    setChatState((current) => ({
      ...current,
      messages: [...current.messages, { id, role: "user", text: trimmed, status: "sending" }],
      activities: [{
        id: "thinking",
        label: "Thinking",
        status: "running",
      }],
    }));
    setStatus("sending");
    setError(null);
    try {
      const idToUse = await ensureConversation();
      setStatus("sending");
      const result = await options.client.sendMessage(idToUse, trimmed, {
        ...(options.channel !== undefined ? { channel: options.channel } : {}),
      });
      setChatState((current) => ({
        ...current,
        messages: current.messages.map((message) => (
          message.id === id ? { ...message, status: "sent" } : message
        )),
        activities: current.activities.filter((activity) => activity.id !== "thinking"),
      }));
      for (const event of result.events) applyEvent(event);
      setStatus("idle");
    } catch (caught) {
      const nextError = caught instanceof Error ? caught : new Error("Failed to send message.");
      setError(nextError);
      setChatState((current) => ({
        ...current,
        messages: current.messages.map((message) => (
          message.id === id ? { ...message, status: "failed" } : message
        )),
      }));
      setStatus("error");
    }
  }, [applyEvent, ensureConversation, options.channel, options.client]);

  const submitWidget = useCallback(async (input: { promptId: string; widgetKind: string; output: unknown }) => {
    if (!conversationId) throw new Error("A conversation is required before submitting widgets.");
    setError(null);
    setStatus("sending");
    try {
      const afterOffset = lastOffsetRef.current;
      const result = await options.client.submitWidget(conversationId, input);
      applyEvent(result.event);
      const replay = await options.client.listEvents(conversationId, { afterOffset }).catch(() => null);
      for (const event of replay?.events ?? []) applyEvent(event);
      setStatus("idle");
      return result;
    } catch (caught) {
      const nextError = caught instanceof Error ? caught : new Error("Failed to submit widget.");
      setError(nextError);
      setStatus("error");
      throw nextError;
    }
  }, [applyEvent, conversationId, options.client]);

  useEffect(() => {
    if (!conversationId) return undefined;
    startStream(conversationId);
    return stopStream;
  }, [conversationId, startStream, stopStream]);

  return useMemo(() => ({
    conversationId,
    messages: chatState.messages,
    prompts: chatState.prompts,
    activities: chatState.activities,
    status,
    error,
    sendMessage,
    submitWidget,
    clearPrompt: (promptId: string) => setChatState((current) => ({
      ...current,
      prompts: current.prompts.filter((prompt) => prompt.promptId !== promptId),
    })),
  }), [chatState.activities, chatState.messages, chatState.prompts, conversationId, error, sendMessage, status, submitWidget]);
}

async function resolveChatStart(
  behavior: ChatStartBehavior | undefined,
  input: ChatStartInput,
): Promise<ChatStartAction> {
  if (typeof behavior !== "function") return behavior;
  return behavior(input);
}
