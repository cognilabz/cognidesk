import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { reduceChatRuntimeEvent, type ChatMessage, type PromptState } from "./event-reducer.js";
import type { UseChatOptions } from "./types.js";

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

  const applyEvent = useCallback((event: Parameters<typeof reduceChatRuntimeEvent>[1]) => {
    lastOffsetRef.current = Math.max(lastOffsetRef.current, event.offset);
    setMessages((current) => reduceChatRuntimeEvent({
      messages: current,
      prompts: [],
      lastOffset: lastOffsetRef.current,
    }, event).messages);
    setPrompts((current) => reduceChatRuntimeEvent({
      messages: [],
      prompts: current,
      lastOffset: lastOffsetRef.current,
    }, event).prompts);
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
