import type { MessageSegment, RuntimeEvent } from "@cognidesk/core";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  segments?: MessageSegment[];
  status: "sending" | "streaming" | "sent" | "failed" | "aborted";
}

export interface PromptState {
  promptId: string;
  kind: string;
  input: unknown;
}

export interface ChatEventReducerState {
  messages: ChatMessage[];
  prompts: PromptState[];
  lastOffset: number;
}

export function reduceChatRuntimeEvent(
  state: ChatEventReducerState,
  event: RuntimeEvent,
): ChatEventReducerState {
  const lastOffset = Math.max(state.lastOffset, event.offset);
  if (event.type === "message.started" && event.data.role === "assistant") {
    if (state.messages.some((message) => message.id === event.id)) return { ...state, lastOffset };
    const last = state.messages.at(-1);
    if (last?.role === "assistant" && last.status === "streaming") return { ...state, lastOffset };
    return {
      ...state,
      lastOffset,
      messages: [
        ...state.messages,
        {
          id: event.id,
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
        messages: [
          ...state.messages.slice(0, -1),
          {
            ...last,
            text: `${last.text}${event.data.textDelta}`,
          },
        ],
      };
    }
    return {
      ...state,
      lastOffset,
      messages: [
        ...state.messages,
        {
          id: event.id,
          role: "assistant",
          text: event.data.textDelta,
          status: "streaming",
        },
      ],
    };
  }
  if (event.type === "message.completed") {
    if (state.messages.some((message) => message.id === event.id)) return { ...state, lastOffset };
    const role = inferMessageRole(event, state.messages);
    if (role !== "assistant") return { ...state, lastOffset };
    const last = state.messages.at(-1);
    if (last?.role === "assistant" && last.status === "streaming") {
      return {
        ...state,
        lastOffset,
        messages: [
          ...state.messages.slice(0, -1),
          {
            id: event.id,
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
      messages: [
        ...state.messages,
        {
          id: event.id,
          role,
          text: event.data.text,
          ...(event.data.segments ? { segments: event.data.segments } : {}),
          status: "sent",
        },
      ],
    };
  }
  if (event.type === "message.aborted") {
    if (state.messages.some((message) => message.id === event.id)) return { ...state, lastOffset };
    const last = state.messages.at(-1);
    if (last?.role === "assistant" && last.status === "streaming") {
      return {
        ...state,
        lastOffset,
        messages: [
          ...state.messages.slice(0, -1),
          {
            id: event.id,
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
      messages: [
        ...state.messages,
        {
          id: event.id,
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
      prompts: [
        ...state.prompts.filter((prompt) => prompt.promptId !== event.data.promptId),
        { promptId: event.data.promptId, kind: event.data.widgetKind, input: event.data.input },
      ],
    };
  }
  if (event.type === "ui.submitted") {
    return {
      ...state,
      lastOffset,
      prompts: state.prompts.filter((prompt) => prompt.promptId !== event.data.promptId),
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
