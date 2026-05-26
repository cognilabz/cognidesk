import type { MessageSegment, RuntimeEvent } from "@cognidesk/core";
import type { AppearanceConfiguration } from "@cognidesk/ui";
import type { ReactNode } from "react";

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

export interface ReplayConversationResult {
  conversation: CreateConversationResult["conversation"];
  snapshot: RuntimeSnapshotResult["snapshot"];
  events: RuntimeEvent[];
  messages: Array<{
    id: string;
    offset: number;
    role: "user" | "assistant";
    text: string;
    intermediate: boolean;
    aborted: boolean;
    reason?: string;
    segments?: MessageSegment[];
  }>;
  openPrompts: Array<{
    promptId: string;
    offset: number;
    widgetKind: string;
    input: unknown;
  }>;
}

export interface CognideskClient {
  createConversation(input?: { agentId?: string; context?: unknown; id?: string }): Promise<CreateConversationResult>;
  sendMessage(conversationId: string, message: string, options?: { turn?: unknown; app?: unknown }): Promise<SendMessageResult>;
  submitWidget(conversationId: string, input: { promptId: string; widgetKind: string; output: unknown }): Promise<{ event: RuntimeEvent }>;
  emitCustomEvent(conversationId: string, eventName: string, input?: { payload?: unknown; traceId?: string }): Promise<{ event: RuntimeEvent }>;
  emitJourneyEvent(conversationId: string, eventName: string, input?: { payload?: unknown; routing?: "none" | "activeJourneyOnly" | "full" | "targeted"; target?: { journeyId?: string; stateId?: string }; app?: unknown; traceId?: string }): Promise<{ event: RuntimeEvent; snapshot: RuntimeSnapshotResult["snapshot"]; events: RuntimeEvent[] }>;
  emitIntermediateMessage(conversationId: string, input: { text: string; traceId?: string }): Promise<{ events: RuntimeEvent[] }>;
  emitGeneratedPreamble(conversationId: string, input?: { purpose?: string; maxWords?: number; traceId?: string }): Promise<{ text: string; events: RuntimeEvent[] }>;
  compactConversation(conversationId: string, input?: { fromOffset?: number; toOffset?: number; schemaVersion?: string }): Promise<{ summary: unknown; snapshot: NonNullable<RuntimeSnapshotResult["snapshot"]>; events: RuntimeEvent[] }>;
  closeConversation(conversationId: string, input?: { reason?: string }): Promise<{ conversation: CreateConversationResult["conversation"] }>;
  requestHandoff(conversationId: string, input: { reason: string; summary?: string; payload?: unknown }): Promise<{ conversation: CreateConversationResult["conversation"]; event: RuntimeEvent }>;
  resumeConversation(conversationId: string, input?: { reason?: string; payload?: unknown }): Promise<{ conversation: CreateConversationResult["conversation"]; event: RuntimeEvent }>;
  replayConversation(conversationId: string, options?: { afterOffset?: number }): Promise<ReplayConversationResult>;
  getSnapshot(conversationId: string): Promise<RuntimeSnapshotResult>;
  listEvents(conversationId: string, options?: { afterOffset?: number }): Promise<{ events: RuntimeEvent[] }>;
  streamEvents(conversationId: string, handlers: { onEvent(event: RuntimeEvent): void; onError?(error: Event): void }, options?: { afterOffset?: number }): () => void;
}

export interface WidgetRendererProps {
  promptId: string;
  kind: string;
  input: unknown;
  appearance?: AppearanceConfiguration | undefined;
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
