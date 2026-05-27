export { createCognideskClient } from "./client.js";
export { ChatWidget } from "./chat-widget.js";
export { defaultWidgetRenderers } from "./default-widgets.js";
export { reduceChatRuntimeEvent, type ChatActivity, type ChatEventReducerState, type ChatMessage, type PromptState } from "./event-reducer.js";
export { collectSupportSourceLinks, formatSupportReferences, type SupportSourceLink } from "./support-references.js";
export type {
  ChatWidgetProps,
  CognideskClient,
  CognideskClientOptions,
  CreateConversationResult,
  ReplayConversationResult,
  RuntimeSnapshotResult,
  SendMessageResult,
  UseChatOptions,
  WidgetRenderer,
  WidgetRendererMap,
  WidgetRendererProps,
} from "./types.js";
export { useChat } from "./use-chat.js";
