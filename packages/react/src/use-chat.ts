import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { reduceChatRuntimeEvent, type ChatEventReducerState } from "./event-reducer.js";
import type { UseChatOptions } from "./types.js";

export function useChat(options: UseChatOptions) {
  const [conversationId, setConversationId] = useState(options.conversationId ?? null);
  const [chatState, setChatState] = useState<ChatEventReducerState>({
    messages: [],
    prompts: [],
    lastOffset: 0,
  });
  const [status, setStatus] = useState<"idle" | "starting" | "sending" | "streaming" | "error">("idle");
  const [error, setError] = useState<Error | null>(null);
  const lastOffsetRef = useRef(0);
  const createConversationRef = useRef<Promise<string> | null>(null);

  useEffect(() => {
    setConversationId(options.conversationId ?? null);
    lastOffsetRef.current = 0;
    createConversationRef.current = null;
    setChatState({ messages: [], prompts: [], lastOffset: 0 });
    setError(null);
  }, [options.conversationId]);

  const ensureConversation = useCallback(async () => {
    if (conversationId) return conversationId;
    if (createConversationRef.current) return createConversationRef.current;
    if (!options.agentId) throw new Error("agentId is required when conversationId is not provided.");
    setStatus("starting");
    createConversationRef.current = options.client.createConversation({
      agentId: options.agentId,
      context: options.initialContext ?? {},
    }).then((result) => {
      setConversationId(result.conversation.id);
      options.onConversationCreated?.(result.conversation.id);
      return result.conversation.id;
    }).finally(() => {
      createConversationRef.current = null;
      setStatus("idle");
    });
    return createConversationRef.current;
  }, [conversationId, options]);

  const applyEvent = useCallback((event: Parameters<typeof reduceChatRuntimeEvent>[1]) => {
    setChatState((current) => {
      const next = reduceChatRuntimeEvent(current, event);
      lastOffsetRef.current = next.lastOffset;
      return next;
    });
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const id = `local_${Date.now()}`;
    setChatState((current) => ({
      ...current,
      messages: [...current.messages, { id, role: "user", text: trimmed, status: "sending" }],
    }));
    setStatus("sending");
    setError(null);
    try {
      const idToUse = await ensureConversation();
      const result = await options.client.sendMessage(idToUse, trimmed);
      setChatState((current) => ({
        ...current,
        messages: current.messages.map((message) => (
          message.id === id ? { ...message, status: "sent" } : message
        )),
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
  }, [applyEvent, ensureConversation, options.client]);

  const submitWidget = useCallback(async (input: { promptId: string; widgetKind: string; output: unknown }) => {
    if (!conversationId) throw new Error("A conversation is required before submitting widgets.");
    setError(null);
    try {
      const result = await options.client.submitWidget(conversationId, input);
      applyEvent(result.event);
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
    setStatus((current) => current === "idle" ? "streaming" : current);
    return options.client.streamEvents(conversationId, {
      onEvent: applyEvent,
      onError: () => setStatus("error"),
    }, { afterOffset: lastOffsetRef.current });
  }, [applyEvent, conversationId, options.client]);

  return useMemo(() => ({
    conversationId,
    messages: chatState.messages,
    prompts: chatState.prompts,
    status,
    error,
    sendMessage,
    submitWidget,
    clearPrompt: (promptId: string) => setChatState((current) => ({
      ...current,
      prompts: current.prompts.filter((prompt) => prompt.promptId !== promptId),
    })),
  }), [chatState.messages, chatState.prompts, conversationId, error, sendMessage, status, submitWidget]);
}
