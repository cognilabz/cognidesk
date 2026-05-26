import type { z } from "zod";
import type { ConversationRecord, RuntimeEventInput } from "../storage.js";
import type {
  AgentModelSet,
  ModelAdapter,
  RuntimeEvent,
  RuntimeSnapshot,
  TextGenerationInput,
  TextGenerationOutput,
} from "../types.js";
import { renderEventsForCompaction } from "./rendering.js";
import {
  conversationCompactionSummarySchema,
  type ConversationCompactionSummary,
} from "./schemas.js";
import type { CompactConversationInput, CompactConversationResult, RuntimeOptions } from "./types.js";

type RuntimeEmit = <TEvent extends RuntimeEventInput>(event: TEvent) => Promise<RuntimeEvent>;

type GenerateTextWithTrace = (input: {
  conversationId: string;
  model: ModelAdapter;
  input: TextGenerationInput;
}) => Promise<TextGenerationOutput>;

export async function compactConversation<TSummary = ConversationCompactionSummary>(args: {
  options: RuntimeOptions;
  models: AgentModelSet;
  conversation: ConversationRecord;
  input: CompactConversationInput;
  generateTextWithTrace: GenerateTextWithTrace;
  emit: RuntimeEmit;
}): Promise<CompactConversationResult<TSummary>> {
  const summarySchema = args.options.compaction?.summarySchema ?? conversationCompactionSummarySchema;
  const instructions = args.options.compaction?.instructions
    ?? "Compact the conversation events into a concise structured memory. Preserve stable facts, open questions, and active commitments.";
  const fromOffset = args.input.fromOffset ?? 1;
  const allEvents = await args.options.storage.listEvents({ conversationId: args.input.conversationId });
  const selectedEvents = allEvents.filter((event) => (
    event.offset >= fromOffset && (args.input.toOffset === undefined || event.offset <= args.input.toOffset)
  ));
  if (selectedEvents.length === 0) {
    throw new Error(`No events found to compact for conversation '${args.input.conversationId}'.`);
  }
  const toOffset = args.input.toOffset ?? selectedEvents[selectedEvents.length - 1]?.offset ?? fromOffset;
  const emitted: RuntimeEvent[] = [];
  const started = await args.emit({
    conversationId: args.input.conversationId,
    type: "conversation.compaction.started",
    data: { fromOffset, toOffset },
  });
  emitted.push(started);

  const output = await args.generateTextWithTrace({
    conversationId: args.input.conversationId,
    model: args.models.compaction,
    input: {
      role: "compaction",
      promptTask: "compaction",
      promptPayload: {
        instructions,
        events: selectedEvents.map((event) => ({
          type: event.type,
          offset: event.offset,
          data: event.data,
          createdAt: event.createdAt,
        })),
        fromOffset,
        toOffset,
      },
      messages: [
        {
          role: "system",
          content: instructions,
        },
        {
          role: "user",
          content: renderEventsForCompaction(selectedEvents),
        },
      ],
      responseFormat: summarySchema,
      ...(args.input.signal ? { signal: args.input.signal } : {}),
    },
  });
  const summary = summarySchema.parse(output.structured ?? JSON.parse(output.text)) as TSummary;
  const currentSnapshot = await args.options.storage.getSnapshot(args.input.conversationId);
  const snapshot: RuntimeSnapshot = {
    conversationId: args.input.conversationId,
    lifecycle: args.conversation.lifecycle,
    activeStateIds: currentSnapshot?.activeStateIds ?? [],
    updatedAt: new Date().toISOString(),
    compactionSummary: summary,
    ...(currentSnapshot?.activeJourneyId ? { activeJourneyId: currentSnapshot.activeJourneyId } : {}),
    ...(currentSnapshot?.journeyContext !== undefined ? { journeyContext: currentSnapshot.journeyContext } : {}),
    ...(currentSnapshot?.journeyContexts ? { journeyContexts: currentSnapshot.journeyContexts } : {}),
    ...(currentSnapshot?.journeySummaries ? { journeySummaries: currentSnapshot.journeySummaries } : {}),
    ...(currentSnapshot?.definitionHash ? { definitionHash: currentSnapshot.definitionHash } : {}),
  };
  await args.options.storage.saveSnapshot(snapshot);
  const completed = await args.emit({
    conversationId: args.input.conversationId,
    type: "conversation.compaction.completed",
    data: {
      fromOffset,
      toOffset,
      schemaVersion: args.input.schemaVersion ?? args.options.compaction?.schemaVersion ?? "cognidesk.compaction.v1",
    },
  });
  emitted.push(completed);
  return { summary, snapshot, events: emitted };
}

export async function compactIfNeeded<TSummary = ConversationCompactionSummary>(args: {
  options: RuntimeOptions;
  models: AgentModelSet;
  conversation: ConversationRecord;
  input: {
    conversationId: string;
    schemaVersion?: string;
    signal?: AbortSignal;
  };
  generateTextWithTrace: GenerateTextWithTrace;
  emit: RuntimeEmit;
}) {
  const allEvents = await args.options.storage.listEvents({ conversationId: args.input.conversationId });
  if (allEvents.length < (args.options.compaction?.minEvents ?? 50)) return null;
  return compactConversation<TSummary>({
    options: args.options,
    models: args.models,
    conversation: args.conversation,
    input: {
      conversationId: args.input.conversationId,
      ...(args.input.schemaVersion ? { schemaVersion: args.input.schemaVersion } : {}),
      ...(args.input.signal ? { signal: args.input.signal } : {}),
    },
    generateTextWithTrace: args.generateTextWithTrace,
    emit: args.emit,
  });
}

export type CompactionSummarySchema = z.ZodType;
