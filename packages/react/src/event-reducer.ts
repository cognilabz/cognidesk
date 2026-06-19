import type { MessageSegment, RuntimeEvent } from "@cognidesk/core";
import type { ChatActivityLabelFormatter, ChatActivityLabelInput } from "./types.js";

export interface ChatMessage {
  id: string;
  offset?: number;
  role: "user" | "assistant";
  text: string;
  segments?: MessageSegment[];
  status: "sending" | "streaming" | "sent" | "failed" | "aborted";
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
          status: "sent",
        },
      ],
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
