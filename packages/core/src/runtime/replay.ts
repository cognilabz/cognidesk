import type { MessageSegment, RuntimeEvent } from "../types.js";
import { parseFieldConfirmationPromptId, parseFieldPromptId } from "./journey-state.js";

export interface ReplayedMessage {
  id: string;
  offset: number;
  role: "user" | "assistant";
  text: string;
  intermediate: boolean;
  aborted: boolean;
  reason?: string;
  segments?: MessageSegment[];
}

export interface ReplayedPrompt {
  promptId: string;
  offset: number;
  widgetKind: string;
  input: unknown;
}

export function replayRuntimeEvents(events: RuntimeEvent[]) {
  const messages: ReplayedMessage[] = [];
  const openPrompts = new Map<string, ReplayedPrompt>();
  let pendingRole: ReplayedMessage["role"] | null = null;
  let pendingStarted: RuntimeEvent | null = null;

  for (const event of events) {
    if (event.type === "channel.event.received" && isOperatorAgentMessageEvent(event)) {
      const text = operatorMessageText(event);
      if (text) {
        messages.push({
          id: event.id,
          offset: event.offset,
          role: "assistant",
          text,
          intermediate: false,
          aborted: false,
        });
      }
      pendingRole = null;
      pendingStarted = null;
      continue;
    }
    if (event.type === "message.started") {
      pendingRole = event.data.role;
      pendingStarted = event;
      continue;
    }
    if (event.type === "message.completed") {
      if (!pendingRole) continue;
      messages.push({
        id: event.id,
        offset: event.offset,
        role: pendingRole,
        text: event.data.text,
        intermediate: event.data.intermediate ?? false,
        aborted: false,
        ...(event.data.segments ? { segments: event.data.segments } : {}),
      });
      pendingRole = null;
      pendingStarted = null;
      continue;
    }
    if (event.type === "message.aborted") {
      messages.push({
        id: event.id,
        offset: event.offset,
        role: pendingRole ?? "assistant",
        text: event.data.partialText ?? "",
        intermediate: false,
        aborted: true,
        reason: event.data.reason,
      });
      pendingRole = null;
      pendingStarted = null;
      continue;
    }
    if (event.type === "ui.prompted") {
      openPrompts.set(event.data.promptId, {
        promptId: event.data.promptId,
        offset: event.offset,
        widgetKind: event.data.widgetKind,
        input: event.data.input,
      });
      continue;
    }
    if (event.type === "ui.submitted") {
      openPrompts.delete(event.data.promptId);
      continue;
    }
    if (event.type === "journey.extraction.accepted") {
      for (const prompt of openPrompts.values()) {
        const fieldPrompt = parseFieldPromptId(prompt.promptId) ?? parseFieldConfirmationPromptId(prompt.promptId);
        if (
          fieldPrompt
          && fieldPrompt.journeyId === event.data.journeyId
          && fieldPrompt.stateId === event.data.stateId
          && event.data.fields.includes(fieldPrompt.path)
        ) {
          openPrompts.delete(prompt.promptId);
        }
      }
    }
  }

  if (pendingStarted && pendingRole) {
    messages.push({
      id: pendingStarted.id,
      offset: pendingStarted.offset,
      role: pendingRole,
      text: "",
      intermediate: false,
      aborted: true,
      reason: "missing_message_completion",
    });
  }

  return { messages, openPrompts: [...openPrompts.values()] };
}

function isOperatorAgentMessageEvent(event: Extract<RuntimeEvent, { type: "channel.event.received" }>) {
  return event.data.intent === "agent-message" && event.data.actor?.type === "operator";
}

function operatorMessageText(event: Extract<RuntimeEvent, { type: "channel.event.received" }>) {
  const payload = event.data.payload;
  if (!isRecord(payload) || typeof payload.text !== "string" || payload.text.trim().length === 0) return null;
  const text = payload.text.trim();
  const name = event.data.actor?.displayName?.trim();
  return name ? `${name}: ${text}` : text;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
