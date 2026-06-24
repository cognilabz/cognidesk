import type { MessageSegment, RuntimeEvent } from "@cognidesk/core";
import type { ChatActivityLabelFormatter, ChatActivityLabelInput } from "./types.js";

export interface ChatMessage {
  id: string;
  offset?: number;
  role: "user" | "assistant";
  text: string;
  segments?: MessageSegment[];
  status: "sending" | "streaming" | "sent" | "failed" | "aborted";
  intermediate?: boolean;
  visibleToModel?: boolean;
}

export interface PromptState {
  promptId: string;
  offset: number;
  displayOffset?: number;
  kind: string;
  input: unknown;
  status: "open" | "submitted";
  output?: unknown;
}

export interface ChatActivity {
  id: string;
  label: string;
  status: "running" | "done";
  expiresAt?: number;
}

export const PENDING_PROMPT_DISPLAY_OFFSET = Number.MAX_SAFE_INTEGER;

export interface ChatEventReducerState {
  messages: ChatMessage[];
  prompts: PromptState[];
  activities: ChatActivity[];
  lastOffset: number;
  pendingMessageRole?: "user" | "assistant" | undefined;
}

export interface ChatEventReducerOptions {
  formatActivityLabel?: ChatActivityLabelFormatter;
}

export function reduceChatRuntimeEvent(
  state: ChatEventReducerState,
  event: RuntimeEvent,
  options?: ChatEventReducerOptions,
): ChatEventReducerState {
  if (event.offset <= state.lastOffset) return state;
  const lastOffset = Math.max(state.lastOffset, event.offset);
  if (event.type === "message.started") {
    if (event.data.role === "user") {
      return { ...state, lastOffset, pendingMessageRole: "user" };
    }
    if (state.messages.some((message) => message.id === event.id)) return { ...state, lastOffset, pendingMessageRole: "assistant" };
    const last = state.messages.at(-1);
    if (last?.role === "assistant" && last.status === "streaming") return { ...state, lastOffset, pendingMessageRole: "assistant" };
    return {
      ...state,
      lastOffset,
      pendingMessageRole: "assistant",
      activities: upsertActivity(clearWidgetActivities(state.activities), {
        id: "response",
        label: resolveActivityLabel(options, {
          kind: "response",
          event,
          defaultLabel: "Writing response",
        }),
        status: "running",
      }),
      messages: [
        ...state.messages,
        {
          id: event.id,
          offset: event.offset,
          role: "assistant",
          text: "",
          status: "streaming",
        },
      ],
    };
  }
  if (event.type === "message.delta") {
    const last = state.messages.at(-1);
    if (last?.role === "assistant" && last.status === "streaming") {
      return {
        ...state,
        lastOffset,
        activities: clearNonToolActivities(state.activities),
        messages: [
          ...state.messages.slice(0, -1),
          {
            ...last,
            offset: last.offset ?? event.offset,
            text: `${last.text}${event.data.textDelta}`,
          },
        ],
      };
    }
    return {
      ...state,
      lastOffset,
      activities: clearNonToolActivities(state.activities),
      messages: [
        ...state.messages,
        {
          id: event.id,
          offset: event.offset,
          role: "assistant",
          text: event.data.textDelta,
          status: "streaming",
        },
      ],
    };
  }
  if (event.type === "message.completed") {
    if (state.messages.some((message) => message.id === event.id)) return { ...state, lastOffset, pendingMessageRole: undefined, activities: [] };
    const role = state.pendingMessageRole ?? inferMessageRole(event, state.messages);
    const last = state.messages.at(-1);
    if (role === "user" && last?.role === "user" && last.text === event.data.text && (last.status === "sending" || last.status === "sent")) {
      return {
        ...state,
        lastOffset,
        pendingMessageRole: undefined,
        messages: [
          ...state.messages.slice(0, -1),
          {
            ...last,
            id: last.id.startsWith("local_") ? last.id : event.id,
            offset: event.offset,
            status: "sent",
          },
        ],
      };
    }
    if (role === "assistant" && last?.role === "assistant" && last.status === "streaming") {
      return {
        ...state,
        lastOffset,
        pendingMessageRole: undefined,
        activities: [],
        prompts: anchorPendingPrompts(state.prompts, event.offset),
        messages: [
          ...state.messages.slice(0, -1),
          {
            id: event.id,
            offset: last.offset ?? event.offset,
            role,
            text: event.data.text,
            ...(event.data.segments ? { segments: event.data.segments } : {}),
            ...(event.data.intermediate !== undefined ? { intermediate: event.data.intermediate } : {}),
            ...(event.data.visibleToModel !== undefined ? { visibleToModel: event.data.visibleToModel } : {}),
            status: "sent",
          },
        ],
      };
    }
    return {
      ...state,
      lastOffset,
      pendingMessageRole: undefined,
      activities: role === "assistant" ? [] : state.activities,
      prompts: role === "assistant" ? anchorPendingPrompts(state.prompts, event.offset) : state.prompts,
      messages: [
        ...state.messages,
        {
          id: event.id,
          offset: event.offset,
          role,
          text: event.data.text,
          ...(event.data.segments ? { segments: event.data.segments } : {}),
          ...(event.data.intermediate !== undefined ? { intermediate: event.data.intermediate } : {}),
          ...(event.data.visibleToModel !== undefined ? { visibleToModel: event.data.visibleToModel } : {}),
          status: "sent",
        },
      ],
    };
  }
  if (event.type === "voice.interrupted" && event.data.source === "userSpeech") {
    const last = state.messages.at(-1);
    if (last?.role !== "assistant" || last.status !== "sent" || last.intermediate !== true) {
      return { ...state, lastOffset };
    }
    return {
      ...state,
      lastOffset,
      messages: state.messages.slice(0, -1),
    };
  }
  if (event.type === "message.aborted") {
    if (state.messages.some((message) => message.id === event.id)) return { ...state, lastOffset, activities: [] };
    const last = state.messages.at(-1);
    if (last?.role === "assistant" && last.status === "streaming") {
      return {
        ...state,
        lastOffset,
        activities: [],
        messages: [
          ...state.messages.slice(0, -1),
          {
            id: event.id,
            offset: last.offset ?? event.offset,
            role: "assistant",
            text: "Response interrupted.",
            status: "aborted",
          },
        ],
      };
    }
    return {
      ...state,
      lastOffset,
      activities: [],
      messages: [
        ...state.messages,
        {
          id: event.id,
          offset: event.offset,
          role: "assistant",
          text: "Response interrupted.",
          status: "aborted",
        },
      ],
    };
  }
  if (event.type === "voice.transcript.committed" && event.data.speaker === "assistant") {
    const messageIndex = state.messages.findIndex((message) => message.id === event.data.messageEventId);
    const transcriptMessage = messageIndex >= 0 ? state.messages[messageIndex] : undefined;
    const previousMessage = messageIndex > 0 ? state.messages[messageIndex - 1] : undefined;
    if (
      transcriptMessage?.role === "assistant"
      && transcriptMessage.status === "sent"
      && previousMessage?.role === "assistant"
      && normalizeMessageText(previousMessage.text) === normalizeMessageText(transcriptMessage.text)
    ) {
      return {
        ...state,
        lastOffset,
        messages: state.messages.filter((_, index) => index !== messageIndex),
      };
    }
    return { ...state, lastOffset };
  }
  if (event.type === "channel.event.received" && isOperatorAgentMessageEvent(event)) {
    const text = operatorMessageText(event);
    if (!text || state.messages.some((message) => message.id === event.id)) {
      return { ...state, lastOffset };
    }
    const typingId = operatorTypingActivityId(event.data.actor);
    const operatorName = operatorDisplayName(event.data.actor);
    const joinedMessage = hasOperatorJoinedMessage(state.messages, operatorName)
      ? []
      : [{
          id: `${event.id}:operator_joined`,
          offset: event.offset - 0.1,
          role: "assistant" as const,
          text: `${operatorName} joined the chat.`,
          status: "sent" as const,
        }];
    return {
      ...state,
      lastOffset,
      pendingMessageRole: undefined,
      activities: typingId ? removeActivity(state.activities, typingId) : state.activities,
      prompts: anchorPendingPrompts(state.prompts, event.offset),
      messages: [
        ...state.messages,
        ...joinedMessage,
        {
          id: event.id,
          offset: event.offset,
          role: "assistant",
          text,
          status: "sent",
        },
      ],
    };
  }
  if (event.type === "ui.prompted") {
    return {
      ...state,
      lastOffset,
      activities: state.activities.filter((activity) => activity.id.startsWith("tool:")),
      prompts: [
        ...state.prompts.filter((prompt) => prompt.promptId !== event.data.promptId),
        {
          promptId: event.data.promptId,
          offset: event.offset,
          displayOffset: shouldDisplayPromptImmediately(event.data.promptId, event.data.widgetKind)
            ? event.offset
            : PENDING_PROMPT_DISPLAY_OFFSET,
          kind: event.data.widgetKind,
          input: event.data.input,
          status: "open",
        },
      ],
    };
  }
  if (event.type === "ui.submitted") {
    return {
      ...state,
      lastOffset,
      activities: upsertActivity(state.activities, {
        id: `widget:${event.data.promptId}`,
        label: resolveActivityLabel(options, {
          kind: "widget",
          event,
          name: event.data.widgetKind,
          defaultLabel: "Submitting response",
        }),
        status: "running",
      }),
      prompts: state.prompts.map((prompt) => (
        prompt.promptId === event.data.promptId
          ? {
              ...prompt,
              status: "submitted",
              offset: prompt.offset,
              output: event.data.output,
            }
          : prompt
      )),
    };
  }
  if (event.type === "journey.candidates.retrieved") {
    return {
      ...state,
      lastOffset,
      activities: upsertActivity(state.activities, {
        id: "intent",
        label: resolveActivityLabel(options, {
          kind: "intent",
          event,
          defaultLabel: "Understanding request",
        }),
        status: "running",
      }),
    };
  }
  if (event.type === "journey.matched") {
    return {
      ...state,
      lastOffset,
      activities: removeActivity(state.activities, "intent"),
      prompts: event.data.candidates.length === 0
        ? state.prompts.filter((prompt) => prompt.status === "submitted")
        : state.prompts,
    };
  }
  if (event.type === "journey.activated") {
    return {
      ...state,
      lastOffset,
      prompts: state.prompts.filter((prompt) => prompt.status === "submitted" || promptJourneyId(prompt.promptId) === event.data.journeyId),
    };
  }
  if (event.type === "journey.completed") {
    return {
      ...state,
      lastOffset,
      activities: clearWidgetActivities(state.activities),
      prompts: state.prompts.filter((prompt) => prompt.status === "submitted"),
    };
  }
  if (event.type === "journey.extraction.proposed") {
    return {
      ...state,
      lastOffset,
      activities: upsertActivity(state.activities, {
        id: "extraction",
        label: resolveActivityLabel(options, {
          kind: "extraction",
          event,
          defaultLabel: "Reading details",
        }),
        status: "running",
      }),
    };
  }
  if (event.type === "journey.extraction.accepted") {
    return {
      ...state,
      lastOffset,
      activities: removeActivity(clearWidgetActivities(state.activities), "extraction"),
      prompts: state.prompts.filter((prompt) => prompt.status === "submitted" || !isExtractedFieldPrompt(prompt.promptId, event.data)),
    };
  }
  if (event.type === "action.started") {
    return {
      ...state,
      lastOffset,
      activities: upsertActivity(clearWidgetActivities(state.activities), {
        id: `action:${event.data.actionName}`,
        label: resolveActivityLabel(options, {
          kind: "action",
          event,
          name: event.data.actionName,
          defaultLabel: formatActionActivity(event.data.actionName),
        }),
        status: "running",
      }),
    };
  }
  if (event.type === "action.completed") {
    return {
      ...state,
      lastOffset,
      activities: removeActivity(state.activities, `action:${event.data.actionName}`),
    };
  }
  if (event.type === "tool.started") {
    return {
      ...state,
      lastOffset,
      activities: upsertActivity(clearWidgetActivities(state.activities), {
        id: `tool:${event.data.toolName}`,
        label: resolveActivityLabel(options, {
          kind: "tool",
          event,
          name: event.data.toolName,
          defaultLabel: formatToolActivity(event.data.toolName),
        }),
        status: "running",
      }),
    };
  }
  if (event.type === "tool.completed") {
    return {
      ...state,
      lastOffset,
      activities: removeActivity(state.activities, `tool:${event.data.toolName}`),
    };
  }
  if (event.type === "custom.discord.operator_joined") {
    const data = isRecord(event.data) ? event.data : {};
    const operatorName = typeof data.operatorName === "string" && data.operatorName.trim()
      ? data.operatorName.trim()
      : "A human agent";
    const typingId = typeof data.operatorId === "string" && data.operatorId.trim()
      ? `typing:${data.operatorId.trim()}`
      : undefined;
    if (
      state.messages.some((message) => message.id === event.id)
      || hasOperatorJoinedMessage(state.messages, operatorName)
    ) {
      return { ...state, lastOffset, activities: typingId ? removeActivity(state.activities, typingId) : state.activities };
    }
    return {
      ...state,
      lastOffset,
      activities: typingId ? removeActivity(state.activities, typingId) : state.activities,
      messages: [
        ...state.messages,
        {
          id: event.id,
          offset: event.offset,
          role: "assistant",
          text: `${operatorName} joined the chat.`,
          status: "sent",
        },
      ],
    };
  }
  if (event.type === "custom.discord.operator_typing.started") {
    const data = isRecord(event.data) ? event.data : {};
    const operatorName = typeof data.operatorName === "string" && data.operatorName.trim()
      ? data.operatorName.trim()
      : "Human agent";
    const operatorId = typeof data.operatorId === "string" && data.operatorId.trim()
      ? data.operatorId.trim()
      : operatorName;
    const expiresAt = parseExpiresAt(data.expiresAt);
    if (expiresAt !== undefined && expiresAt <= Date.now()) {
      return {
        ...state,
        lastOffset,
        activities: removeActivity(state.activities, `typing:${operatorId}`),
      };
    }
    return {
      ...state,
      lastOffset,
      activities: upsertActivity(clearWidgetActivities(state.activities), {
        id: `typing:${operatorId}`,
        label: `${operatorName} is typing`,
        status: "running",
        ...(expiresAt ? { expiresAt } : {}),
      }),
    };
  }
  if (event.type === "knowledge.retrieved") {
    return {
      ...state,
      lastOffset,
      activities: upsertActivity(state.activities, {
        id: `knowledge:${event.data.sourceName}`,
        label: resolveActivityLabel(options, {
          kind: "knowledge",
          event,
          name: event.data.sourceName,
          defaultLabel: "Checking knowledge",
        }),
        status: "done",
      }),
    };
  }
  return { ...state, lastOffset };
}

function inferMessageRole(event: Extract<RuntimeEvent, { type: "message.completed" }>, messages: ChatMessage[]) {
  const previous = messages[messages.length - 1];
  if (!previous || previous.role === "assistant") return "assistant";
  if (event.data.text === previous.text) return "user";
  return "assistant";
}

function upsertActivity(activities: ChatActivity[], activity: ChatActivity) {
  return [
    ...activities.filter((candidate) => candidate.id !== activity.id),
    activity,
  ];
}

function removeActivity(activities: ChatActivity[], id: string) {
  return activities.filter((activity) => activity.id !== id);
}

function clearNonToolActivities(activities: ChatActivity[]) {
  return activities.filter((activity) => activity.id.startsWith("tool:"));
}

function clearWidgetActivities(activities: ChatActivity[]) {
  return activities.filter((activity) => !activity.id.startsWith("widget:"));
}

function resolveActivityLabel(options: ChatEventReducerOptions | undefined, input: ChatActivityLabelInput) {
  return options?.formatActivityLabel?.(input) ?? input.defaultLabel;
}

function formatToolActivity(toolName: string) {
  return humanizeName(toolName);
}

function formatActionActivity(actionName: string) {
  return humanizeName(actionName);
}

function humanizeName(value: string) {
  const spaced = value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .trim();
  return spaced ? `${spaced[0]?.toUpperCase() ?? ""}${spaced.slice(1)}` : "Working";
}

function isExtractedFieldPrompt(
  promptId: string,
  extraction: { journeyId: string; stateId: string; fields: string[] },
) {
  const fieldPrompt = parsePromptParts(promptId, "field") ?? parsePromptParts(promptId, "confirm-field");
  return Boolean(
    fieldPrompt
      && fieldPrompt.journeyId === extraction.journeyId
      && fieldPrompt.stateId === extraction.stateId
      && extraction.fields.includes(fieldPrompt.path),
  );
}

function promptJourneyId(promptId: string) {
  const [, journeyId] = promptId.split(":");
  return journeyId;
}

function anchorPendingPrompts(prompts: PromptState[], assistantOffset: number) {
  return prompts.map((prompt) => (
    prompt.status === "open"
      && (prompt.displayOffset === undefined || prompt.displayOffset === PENDING_PROMPT_DISPLAY_OFFSET)
      && prompt.offset < assistantOffset
      ? { ...prompt, displayOffset: assistantOffset + 0.1 }
      : prompt
  ));
}

function parseExpiresAt(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "string") return undefined;
  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? timestamp : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
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

function operatorTypingActivityId(actor: Extract<RuntimeEvent, { type: "channel.event.received" }>["data"]["actor"]) {
  if (!actor || actor.type !== "operator") return null;
  return `typing:${actor.id?.trim() || actor.displayName?.trim() || "Human agent"}`;
}

function operatorDisplayName(actor: Extract<RuntimeEvent, { type: "channel.event.received" }>["data"]["actor"]) {
  return actor?.type === "operator" && actor.displayName?.trim()
    ? actor.displayName.trim()
    : "A human agent";
}

function hasOperatorJoinedMessage(messages: ChatMessage[], operatorName: string) {
  return messages.some((message) => message.role === "assistant" && message.text === `${operatorName} joined the chat.`);
}

function normalizeMessageText(text: string) {
  return text.trim().replace(/\s+/g, " ");
}

function shouldDisplayPromptImmediately(promptId: string, widgetKind: string) {
  return widgetKind === "confirmation" && promptId.startsWith("confirm:");
}

function parsePromptParts(promptId: string, kind: "field" | "confirm-field") {
  const [promptKind, journeyId, stateId, encodedPath] = promptId.split(":");
  if (promptKind !== kind || !journeyId || !stateId || !encodedPath) return null;
  return {
    journeyId,
    stateId,
    path: decodeURIComponent(encodedPath),
  };
}
