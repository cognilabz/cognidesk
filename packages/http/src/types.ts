import type {
  CognideskRuntime,
  CompactConversationInput,
  CompactConversationResult,
  ConversationRecord,
  CreateRuntimeConversationInput,
  CustomRuntimeEventDefinition,
  EmitGeneratedPreambleInput,
  EmitIntermediateMessageInput,
  EmitJourneyEventResult,
  HandleUserMessageInput,
  HandleUserMessageResult,
  JourneyEventDefinition,
  RequestHandoffInput,
  ReplayConversationInput,
  ReplayConversationResult,
  ResumeConversationInput,
  RuntimeEvent,
  RuntimeSnapshot,
  SubmitWidgetInput,
} from "@cognidesk/core";

export interface CognideskHttpRuntime {
  createConversation(input: CreateRuntimeConversationInput): Promise<ConversationRecord>;
  handleUserMessage(input: HandleUserMessageInput): Promise<HandleUserMessageResult>;
  submitWidget?(input: SubmitWidgetInput): Promise<RuntimeEvent>;
  emitCustomEvent?(input: { conversationId: string; event: CustomRuntimeEventDefinition; payload: unknown; traceId?: string }): Promise<RuntimeEvent>;
  emitJourneyEvent?(input: { conversationId: string; event: JourneyEventDefinition; payload: unknown; routing?: "none" | "activeJourneyOnly" | "full" | "targeted"; target?: { journeyId?: string; stateId?: string }; app?: unknown; traceId?: string; signal?: AbortSignal }): Promise<EmitJourneyEventResult>;
  emitIntermediateMessage?(input: EmitIntermediateMessageInput): Promise<{ events: RuntimeEvent[] }>;
  emitGeneratedPreamble?(input: EmitGeneratedPreambleInput): Promise<{ text: string; events: RuntimeEvent[] }>;
  compactConversation?(input: CompactConversationInput): Promise<CompactConversationResult<unknown>>;
  closeConversation?(conversationId: string, reason?: string): Promise<ConversationRecord>;
  requestHandoff?(input: RequestHandoffInput): Promise<{ conversation: ConversationRecord; event: RuntimeEvent }>;
  resumeConversation?(input: ResumeConversationInput): Promise<{ conversation: ConversationRecord; event: RuntimeEvent }>;
  replayConversation?(input: ReplayConversationInput): Promise<ReplayConversationResult>;
  getSnapshot?(conversationId: string): Promise<RuntimeSnapshot | null>;
  listEvents(conversationId: string, afterOffset?: number): Promise<RuntimeEvent[]>;
}

export interface CognideskHttpHandlerOptions {
  runtime: CognideskHttpRuntime | CognideskRuntime;
  basePath?: string;
  agentId?: string;
  customEvents?: CustomRuntimeEventDefinition[];
  journeyEvents?: JourneyEventDefinition[];
  ssePollIntervalMs?: number;
  cors?: boolean;
}

export interface CognideskHttpHandler {
  handle(request: Request): Promise<Response>;
}

export interface CreateConversationBody {
  id?: string;
  agentId?: string;
  context?: unknown;
}

export interface CreateMessageBody {
  message?: string;
  text?: string;
  turn?: unknown;
  app?: unknown;
}

export interface CreateWidgetSubmissionBody {
  widgetKind?: string;
  output?: unknown;
}

export interface CreateRuntimeEventBody {
  payload?: unknown;
  traceId?: string;
}

export interface CreateJourneyEventBody extends CreateRuntimeEventBody {
  routing?: "none" | "activeJourneyOnly" | "full" | "targeted";
  target?: {
    journeyId?: string;
    stateId?: string;
  };
  app?: unknown;
}

export interface CreateHandoffBody {
  reason?: string;
  summary?: string;
  payload?: unknown;
}

export interface CreateResumeBody {
  reason?: string;
  payload?: unknown;
}

export interface CreateCloseBody {
  reason?: string;
}

export interface CreateIntermediateMessageBody {
  text?: string;
  traceId?: string;
}

export interface CreateGeneratedPreambleBody {
  purpose?: string;
  maxWords?: number;
  traceId?: string;
}

export interface CreateCompactionBody {
  fromOffset?: number;
  toOffset?: number;
  schemaVersion?: string;
}
