import type { CognideskHttpRuntime } from "../src/index.js";
import type {
  ConversationRecord,
  CreateRuntimeConversationInput,
  CustomRuntimeEventDefinition,
  HandleUserMessageInput,
  HandleUserMessageResult,
  JourneyEventDefinition,
  RequestHandoffInput,
  ReplayConversationInput,
  ReplayConversationResult,
  ResumeConversationInput,
  RuntimeEvent,
  RuntimeSnapshot,
  StartVoiceConversationInput,
  StartVoiceResult,
  StartVoiceSegmentInput,
  SubmitWidgetInput,
} from "@cognidesk/core";

export class FakeRuntime implements CognideskHttpRuntime {
  private events: RuntimeEvent[] = [];

  async createConversation(_input: CreateRuntimeConversationInput): Promise<ConversationRecord> {
    return {
      id: "conversation_1",
      agentId: "flight-service",
      lifecycle: "active",
      context: {},
      createdAt: "2026-05-25T00:00:00.000Z",
      updatedAt: "2026-05-25T00:00:00.000Z",
    };
  }

  async handleUserMessage(input: HandleUserMessageInput): Promise<HandleUserMessageResult> {
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { text: `Handled: ${input.text}` },
    } satisfies RuntimeEvent;
    this.events.push(event);
    return {
      conversation: await this.createConversation({ agentId: "flight-service", context: {} }),
      snapshot: {
        conversationId: input.conversationId,
        lifecycle: "active" as const,
        activeJourneyId: "ticket-status",
        activeStateIds: ["identifyTicket"],
        updatedAt: "2026-05-25T00:00:00.000Z",
      },
      events: [event],
      text: `Handled: ${input.text}`,
      activeJourneyId: "ticket-status",
    };
  }

  async listEvents(_conversationId: string, afterOffset = 0) {
    return this.events.filter((event) => event.offset > afterOffset);
  }

  async startVoiceConversation(input: StartVoiceConversationInput): Promise<StartVoiceResult> {
    const conversation = await this.createConversation({
      ...("id" in input && input.id ? { id: input.id } : {}),
      agentId: input.agentId,
      context: input.context,
    });
    return this.startVoiceSegment({
      conversationId: conversation.id,
      ...(input.app !== undefined ? { app: input.app } : {}),
    });
  }

  async startVoiceSegment(input: StartVoiceSegmentInput): Promise<StartVoiceResult> {
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "voice.segment.started",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        channelSegmentId: "voice_segment_1",
        connectionId: "voice_connection_1",
        adapter: "cognidesk-voice-websocket",
        provider: "test",
      },
    } satisfies RuntimeEvent;
    this.events.push(event);
    return {
      conversation: await this.createConversation({ agentId: "flight-service", context: {} }),
      channelSegment: {
        id: "voice_segment_1",
        conversationId: input.conversationId,
        channel: "voice",
        startedAt: "2026-05-25T00:00:00.000Z",
      },
      connection: {
        id: "voice_connection_1",
        channelSegmentId: "voice_segment_1",
        status: "starting",
        adapter: "cognidesk-voice-websocket",
        provider: "test",
      },
      events: [event],
    };
  }

  async emitCustomEvent(input: Parameters<NonNullable<CognideskHttpRuntime["emitCustomEvent"]>>[0]): Promise<RuntimeEvent> {
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: `custom.${input.event.name}`,
      createdAt: "2026-05-25T00:00:00.000Z",
      data: input.payload,
    } satisfies RuntimeEvent;
    this.events.push(event);
    return event;
  }

  async emitJourneyEvent(input: Parameters<NonNullable<CognideskHttpRuntime["emitJourneyEvent"]>>[0]) {
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "journey.event.emitted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        name: input.event.name,
        payload: input.payload,
        routing: input.routing ?? input.event.routing ?? "activeJourneyOnly",
        ...(input.target ? { target: input.target } : {}),
      },
    } satisfies RuntimeEvent;
    this.events.push(event);
    return {
      event,
      snapshot: {
        conversationId: input.conversationId,
        lifecycle: "active" as const,
        activeStateIds: input.target?.stateId ? [input.target.stateId] : [],
        updatedAt: "2026-05-25T00:00:00.000Z",
        ...(input.target?.journeyId ? { activeJourneyId: input.target.journeyId } : {}),
      },
      events: [event],
    };
  }

  async submitWidget(input: SubmitWidgetInput): Promise<RuntimeEvent> {
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "ui.submitted",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        promptId: input.promptId,
        widgetKind: input.widgetKind,
        output: input.output,
      },
    } satisfies RuntimeEvent;
    this.events.push(event);
    return event;
  }

  async requestHandoff(input: RequestHandoffInput): Promise<{ conversation: ConversationRecord; event: RuntimeEvent }> {
    const conversation = {
      ...await this.createConversation({ agentId: "flight-service", context: {} }),
      lifecycle: "handoff" as const,
    };
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "handoff.requested",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        reason: input.reason,
        ...(input.summary ? { summary: input.summary } : {}),
        ...(input.payload !== undefined ? { payload: input.payload } : {}),
      },
    } satisfies RuntimeEvent;
    this.events.push(event);
    return { conversation, event };
  }

  async resumeConversation(input: ResumeConversationInput): Promise<{ conversation: ConversationRecord; event: RuntimeEvent }> {
    const conversation = {
      ...await this.createConversation({ agentId: "flight-service", context: {} }),
      lifecycle: "active" as const,
    };
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "handoff.resumed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        ...(input.reason ? { reason: input.reason } : {}),
        ...(input.payload !== undefined ? { payload: input.payload } : {}),
      },
    } satisfies RuntimeEvent;
    this.events.push(event);
    return { conversation, event };
  }

  async closeConversation(conversationId: string, reason?: string): Promise<ConversationRecord> {
    const event = {
      id: `event_${this.events.length + 1}`,
      conversationId,
      offset: this.events.length + 1,
      type: "conversation.closed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: reason ? { reason } : {},
    } satisfies RuntimeEvent;
    this.events.push(event);
    return {
      ...await this.createConversation({ agentId: "flight-service", context: {} }),
      lifecycle: "closed" as const,
    };
  }

  async emitIntermediateMessage(input: { conversationId: string; text: string; visibleToModel?: boolean }): Promise<{ events: RuntimeEvent[] }> {
    const started = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "message.started",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { role: "assistant" as const },
    } satisfies RuntimeEvent;
    const completed = {
      id: `event_${this.events.length + 2}`,
      conversationId: input.conversationId,
      offset: this.events.length + 2,
      type: "message.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        text: input.text,
        intermediate: true,
        ...(input.visibleToModel ? { visibleToModel: true } : {}),
      },
    } satisfies RuntimeEvent;
    this.events.push(started, completed);
    return { events: [started, completed] };
  }

  async emitGeneratedPreamble(input: { conversationId: string; purpose?: string; maxWords?: number }): Promise<{ text: string; events: RuntimeEvent[] }> {
    const text = input.purpose ? "I am still checking that for you." : "Still working.";
    const result = await this.emitIntermediateMessage({
      conversationId: input.conversationId,
      text,
    });
    return { text, events: result.events };
  }

  async compactConversation(input: { conversationId: string; fromOffset?: number; toOffset?: number; schemaVersion?: string }) {
    const snapshot = {
      conversationId: input.conversationId,
      lifecycle: "active" as const,
      activeStateIds: [],
      compactionSummary: { summary: "Compacted." },
      updatedAt: "2026-05-25T00:00:00.000Z",
    } satisfies RuntimeSnapshot;
    this.snapshot = snapshot;
    const started = {
      id: `event_${this.events.length + 1}`,
      conversationId: input.conversationId,
      offset: this.events.length + 1,
      type: "conversation.compaction.started",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: { fromOffset: input.fromOffset ?? 1, toOffset: input.toOffset ?? this.events.length },
    } satisfies RuntimeEvent;
    const completed = {
      id: `event_${this.events.length + 2}`,
      conversationId: input.conversationId,
      offset: this.events.length + 2,
      type: "conversation.compaction.completed",
      createdAt: "2026-05-25T00:00:00.000Z",
      data: {
        fromOffset: input.fromOffset ?? 1,
        toOffset: input.toOffset ?? this.events.length,
        schemaVersion: input.schemaVersion ?? "test.v1",
      },
    } satisfies RuntimeEvent;
    this.events.push(started, completed);
    return { summary: { summary: "Compacted." }, snapshot, events: [started, completed] };
  }

  async getSnapshot(_conversationId: string): Promise<RuntimeSnapshot | null> {
    return this.snapshot;
  }

  async replayConversation(input: ReplayConversationInput): Promise<ReplayConversationResult> {
    return {
      conversation: await this.createConversation({ agentId: "flight-service", context: {} }),
      snapshot: this.snapshot,
      events: this.events.filter((event) => event.offset > (input.afterOffset ?? 0)),
      messages: [],
      openPrompts: [],
    };
  }

  private snapshot: RuntimeSnapshot | null = null;
}
