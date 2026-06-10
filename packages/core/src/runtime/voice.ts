import type { ConversationRecord } from "../storage.js";
import type {
  CommitVoiceTranscriptReferenceInput,
  CommitVoiceTranscriptInput,
  CommitVoiceTranscriptResult,
  RecordVoiceInterruptionInput,
  RuntimeEvent,
  StartVoiceConversationInput,
  StartVoiceResult,
  StartVoiceSegmentInput,
  VoiceChannelSegment,
  VoiceConnection,
} from "../types.js";
import type {
  CreateRuntimeConversationInput,
  RuntimeEventEmitter,
  RuntimeOptions,
  HandleUserMessageResult,
  HandleVoiceUserMessageInput,
  HandleVoiceUserMessageResult,
} from "./types.js";

export async function startRuntimeVoiceConversation<TConversationContext = unknown>(
  options: RuntimeOptions,
  createConversation: <TContext = unknown>(input: CreateRuntimeConversationInput<TContext>) => Promise<ConversationRecord<TContext>>,
  startVoiceSegment: (input: StartVoiceSegmentInput & { app?: unknown }) => Promise<StartVoiceResult>,
  input: StartVoiceConversationInput<TConversationContext>,
): Promise<StartVoiceResult> {
  const conversation = await createConversation<TConversationContext>({
    ...optionalStringField("id", input.id),
    agentId: input.agentId,
    context: input.context,
  });
  return startVoiceSegment({
    conversationId: conversation.id,
    ...(input.client !== undefined ? { client: input.client } : {}),
    ...(input.app !== undefined ? { app: input.app } : {}),
  });
}

export async function startRuntimeVoiceSegment(
  options: RuntimeOptions,
  requireConversation: (conversationId: string) => Promise<ConversationRecord>,
  emit: RuntimeEventEmitter,
  input: StartVoiceSegmentInput,
): Promise<StartVoiceResult> {
  const conversation = await requireConversation(input.conversationId);
  if (conversation.lifecycle !== "active") {
    throw new Error(`Conversation '${conversation.id}' is '${conversation.lifecycle}' and cannot start a voice segment.`);
  }
  await assertNoActiveVoiceSegment(options, conversation.id);

  const channelSegment: VoiceChannelSegment = {
    id: createId("voice_segment"),
    conversationId: conversation.id,
    channel: "voice",
    startedAt: nowIso(),
  };

  const provider = options.agent?.voice?.modelSet?.provider;
  const connection: VoiceConnection = {
    id: createId("voice_connection"),
    channelSegmentId: channelSegment.id,
    status: "starting",
    adapter: "cognidesk-voice-websocket",
    ...(provider ? { provider } : {}),
  };

  const event = await emit({
    conversationId: conversation.id,
    type: "voice.segment.started",
    data: {
      channelSegmentId: channelSegment.id,
      connectionId: connection.id,
      adapter: connection.adapter,
      ...(connection.provider ? { provider: connection.provider } : {}),
    },
  });

  return {
    conversation,
    channelSegment,
    connection,
    events: [event],
  };
}

export async function endRuntimeVoiceSegment(
  emit: RuntimeEventEmitter,
  input: {
    conversationId: string;
    channelSegmentId: string;
    connectionId?: string;
    reason?: string;
  },
) {
  return emit({
    conversationId: input.conversationId,
    type: "voice.segment.ended",
    data: {
      channelSegmentId: input.channelSegmentId,
      ...optionalStringField("connectionId", input.connectionId),
      ...optionalStringField("reason", input.reason),
    },
  });
}

export async function commitRuntimeVoiceTranscript(
  emit: RuntimeEventEmitter,
  input: CommitVoiceTranscriptInput,
): Promise<CommitVoiceTranscriptResult> {
  const started = await emit({
    conversationId: input.conversationId,
    type: "message.started",
    data: { role: input.speaker },
  });
  const message = await emit({
    conversationId: input.conversationId,
    type: "message.completed",
    data: { text: input.text },
  });
  const event = await emit({
    conversationId: input.conversationId,
    type: "voice.transcript.committed",
    data: {
      channelSegmentId: input.channelSegmentId,
      speaker: input.speaker,
      messageEventId: message.id,
      ...optionalStringField("recordingReferenceId", input.recordingReferenceId),
      ...optionalNumberField("startedAtMs", input.startedAtMs),
      ...optionalNumberField("endedAtMs", input.endedAtMs),
      ...optionalStringField("transcriptionSource", input.transcriptionSource),
      ...(input.metadata !== undefined ? { metadata: input.metadata } : {}),
    },
  });
  return { message, event, events: [started, message, event] };
}

export async function commitRuntimeVoiceTranscriptReference(
  emit: RuntimeEventEmitter,
  input: CommitVoiceTranscriptReferenceInput,
): Promise<RuntimeEvent> {
  return emit({
    conversationId: input.conversationId,
    type: "voice.transcript.committed",
    data: {
      channelSegmentId: input.channelSegmentId,
      speaker: input.speaker,
      messageEventId: input.messageEventId,
      ...optionalStringField("recordingReferenceId", input.recordingReferenceId),
      ...optionalNumberField("startedAtMs", input.startedAtMs),
      ...optionalNumberField("endedAtMs", input.endedAtMs),
      ...optionalStringField("transcriptionSource", input.transcriptionSource),
      ...(input.metadata !== undefined ? { metadata: input.metadata } : {}),
    },
  });
}

export async function handleRuntimeVoiceUserMessage<TTurn = unknown>(
  emit: RuntimeEventEmitter,
  handleUserMessage: (input: {
    conversationId: string;
    text: string;
    channel?: "chat" | "voice";
    turn?: TTurn;
    app?: unknown;
    signal?: AbortSignal;
    recordUserMessage?: boolean;
    assistantMessageMode?: "canonical" | "intermediate" | "none";
    onAssistantTextDelta?(textDelta: string): Promise<void> | void;
  }) => Promise<HandleUserMessageResult>,
  input: HandleVoiceUserMessageInput<TTurn>,
): Promise<HandleVoiceUserMessageResult> {
  const result = await handleUserMessage({
    conversationId: input.conversationId,
    text: input.text,
    channel: "voice",
    ...(input.turn !== undefined ? { turn: input.turn } : {}),
    ...(input.app !== undefined ? { app: input.app } : {}),
    ...(input.signal ? { signal: input.signal } : {}),
    ...(input.recordUserMessage !== undefined ? { recordUserMessage: input.recordUserMessage } : {}),
    ...(input.assistantMessageMode ? { assistantMessageMode: input.assistantMessageMode } : {}),
    ...(input.onAssistantTextDelta ? { onAssistantTextDelta: input.onAssistantTextDelta } : {}),
  });
  const userMessage = findMessageCompletedForRole(result.events, "user");
  const assistantMessage = findMessageCompletedForRole(result.events, "assistant");
  const voiceEvents: RuntimeEvent[] = [];
  if (userMessage) {
    voiceEvents.push(await commitRuntimeVoiceTranscriptReference(emit, {
      conversationId: input.conversationId,
      channelSegmentId: input.channelSegmentId,
      speaker: "user",
      text: input.text,
      messageEventId: userMessage.id,
      ...optionalStringField("recordingReferenceId", input.recordingReferenceId),
      ...optionalNumberField("startedAtMs", input.startedAtMs),
      ...optionalNumberField("endedAtMs", input.endedAtMs),
      ...optionalStringField("transcriptionSource", input.transcriptionSource),
      ...(input.metadata !== undefined ? { metadata: input.metadata } : {}),
    }));
  }
  if (assistantMessage) {
    voiceEvents.push(await commitRuntimeVoiceTranscriptReference(emit, {
      conversationId: input.conversationId,
      channelSegmentId: input.channelSegmentId,
      speaker: "assistant",
      text: result.text,
      messageEventId: assistantMessage.id,
      transcriptionSource: "cognidesk-runtime",
    }));
  }
  return {
    ...result,
    events: [...result.events, ...voiceEvents],
    voiceEvents,
  };
}

export async function recordRuntimeVoiceInterruption(
  emit: RuntimeEventEmitter,
  input: RecordVoiceInterruptionInput,
): Promise<RuntimeEvent> {
  return emit({
    conversationId: input.conversationId,
    type: "voice.interrupted",
    data: {
      channelSegmentId: input.channelSegmentId,
      ...optionalStringField("connectionId", input.connectionId),
      ...optionalStringField("interruptedMessageId", input.interruptedMessageId),
      ...(input.source ? { source: input.source } : {}),
      ...optionalStringField("reason", input.reason),
      ...optionalStringField("recordingReferenceId", input.recordingReferenceId),
      ...optionalNumberField("offsetMs", input.offsetMs),
    },
  });
}

export async function assertNoActiveVoiceSegment(options: RuntimeOptions, conversationId: string) {
  const events = await options.storage.listEvents({ conversationId });
  const active = new Set<string>();
  for (const event of events) {
    if (event.type === "voice.segment.started") {
      active.add(event.data.channelSegmentId);
      continue;
    }
    if (event.type === "voice.segment.ended" || event.type === "voice.connection.failed") {
      active.delete(event.data.channelSegmentId);
    }
  }
  if (active.size > 0) {
    throw new Error(`Conversation '${conversationId}' already has an active voice segment.`);
  }
}

export function hasActiveVoiceSegment(events: RuntimeEvent[]) {
  const active = new Set<string>();
  for (const event of events) {
    if (event.type === "voice.segment.started") active.add(event.data.channelSegmentId);
    if (event.type === "voice.segment.ended" || event.type === "voice.connection.failed") {
      active.delete(event.data.channelSegmentId);
    }
  }
  return active.size > 0;
}

function nowIso() {
  return new Date().toISOString();
}

function createId(prefix: string) {
  const random = globalThis.crypto?.randomUUID?.()
    ?? Math.random().toString(36).slice(2);
  return `${prefix}_${random}`;
}

function optionalStringField<TKey extends string>(key: TKey, value: string | undefined) {
  return value ? { [key]: value } as Record<TKey, string> : {};
}

function optionalNumberField<TKey extends string>(key: TKey, value: number | undefined) {
  return value !== undefined ? { [key]: value } as Record<TKey, number> : {};
}

function findMessageCompletedForRole(events: RuntimeEvent[], role: "user" | "assistant") {
  let activeRole: "user" | "assistant" | undefined;
  for (const event of events) {
    if (event.type === "message.started") {
      activeRole = event.data.role;
      continue;
    }
    if (event.type !== "message.completed") continue;
    if (activeRole === role && event.data.intermediate !== true) return event;
    activeRole = undefined;
  }
  return undefined;
}
