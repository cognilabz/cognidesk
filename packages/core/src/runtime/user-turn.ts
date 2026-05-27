import type { RuntimeEventInput } from "../storage.js";
import type { RuntimeEvent } from "../types.js";
import {
  beginUserTurn,
  createAbortedTurnResult,
  finishUserTurn,
  throwIfTurnInterrupted,
} from "./active-turns.js";
import { isAbortLikeError } from "./errors.js";
import { listConversationMessages, listVisibleCustomEventContext } from "./history.js";
import { removeRawKnowledgeMarkers } from "./knowledge-markers.js";
import { resolveAvailableModelTools } from "./model-runner.js";
import { createResponseMessages } from "./response-messages.js";
import { createNextSnapshot } from "./snapshots.js";
import { toModelToolDefinition } from "./tools.js";
import type {
  HandleUserMessageResult,
} from "./types.js";
import type { HandleUserMessageDeps } from "./user-turn/types.js";

export async function handleUserMessage<TTurn>(
  args: HandleUserMessageDeps<TTurn>,
): Promise<HandleUserMessageResult> {
  const agent = args.requireAgent();
  const models = args.requireModels();
  const conversation = await args.requireConversation(args.input.conversationId);
  const turn = await beginUserTurn({
    activeTurns: args.activeTurns,
    conversationId: conversation.id,
    agent,
    emit: args.emit,
    ...(args.input.signal ? { signal: args.input.signal } : {}),
  });
  const userText = await args.redactUserMessage(conversation, args.input.text);
  const emitted: RuntimeEvent[] = [];
  if (turn.interruptedEvent) emitted.push(turn.interruptedEvent);
  const emit = async <TEvent extends RuntimeEventInput>(event: TEvent) => {
    const stored = await args.emit(event);
    emitted.push(stored);
    return stored;
  };

  try {
    if (args.options.compaction?.beforeTurn) {
      const compaction = await args.compactIfNeeded({
        conversationId: conversation.id,
        ...(args.options.compaction.schemaVersion ? { schemaVersion: args.options.compaction.schemaVersion } : {}),
        signal: turn.controller.signal,
      });
      throwIfTurnInterrupted(turn);
      if (compaction) emitted.push(...compaction.events);
    }

    await emit({
      conversationId: conversation.id,
      type: "message.started",
      data: { role: "user" },
    });
    await emit({
      conversationId: conversation.id,
      type: "message.completed",
      data: { text: userText },
    });

    const history = await listConversationMessages(args.options.storage, conversation.id);
    const previousSnapshot = await args.options.storage.getSnapshot(conversation.id);
    const selectedJourney = await args.selectJourney({
      agent,
      models,
      conversation,
      previousSnapshot,
      history,
      input: {
        ...args.input,
        signal: turn.controller.signal,
      },
      userText,
      emit,
    });
    throwIfTurnInterrupted(turn);
    const stateMachineTurn = selectedJourney?.kind === "stateMachine"
      ? await args.executeStateMachineTurn({
          journey: selectedJourney,
          models,
          conversation,
          previousSnapshot,
          userText,
          turn: args.input.turn ?? {},
          app: args.input.app ?? args.options.app ?? {},
          emit,
          signal: turn.controller.signal,
        })
      : null;
    throwIfTurnInterrupted(turn);
    const interruptedByLifecycle = await args.createLifecycleInterruptionResult({
      conversationId: conversation.id,
      events: emitted,
    });
    if (interruptedByLifecycle) return interruptedByLifecycle;

    const knowledge = await args.retrieveKnowledge({
      agent,
      journey: selectedJourney,
      stateMachineTurn,
      conversationId: conversation.id,
      message: userText,
      emit,
      signal: turn.controller.signal,
    });
    throwIfTurnInterrupted(turn);
    const visibleCustomEvents = await listVisibleCustomEventContext(args.options.storage, agent, conversation.id);
    const modelMessages = await args.redactModelMessages(conversation, createResponseMessages({
      agent,
      journey: selectedJourney,
      stateMachineTurn,
      userText,
      history,
      knowledge,
      visibleCustomEvents,
      compactionSummary: previousSnapshot?.compactionSummary,
      journeySummaries: previousSnapshot?.journeySummaries ?? [],
    }));
    const availableTools = resolveAvailableModelTools(agent, selectedJourney, stateMachineTurn);
    const modelTools = availableTools.map(toModelToolDefinition);
    throwIfTurnInterrupted(turn);
    let assistantStarted = false;
    const ensureAssistantStarted = async () => {
      if (assistantStarted) return;
      await emit({
        conversationId: conversation.id,
        type: "message.started",
        data: { role: "assistant" },
      });
      assistantStarted = true;
    };
    let streamedTextLength = 0;
    const response = await args.generateResponseWithTools({
      conversation,
      model: models.response,
      messages: modelMessages,
      promptPayload: {
        messages: modelMessages,
        tools: modelTools.map((tool) => ({
          name: tool.name,
          ...(tool.description ? { description: tool.description } : {}),
        })),
        selectedJourneyId: selectedJourney?.id ?? null,
        activeStateIds: stateMachineTurn?.activeStateIds ?? [],
        journeyContext: stateMachineTurn?.journeyContext ?? {},
      },
      tools: availableTools,
      modelTools,
      selectedJourney,
      stateMachineTurn,
      emit,
      ...(args.options.streaming?.syntheticDeltas ? {
        onTextDelta: async (textDelta: string) => {
          await ensureAssistantStarted();
          streamedTextLength += textDelta.length;
          await emit({
            conversationId: conversation.id,
            type: "message.delta",
            data: { textDelta },
          });
        },
      } : {}),
      signal: turn.controller.signal,
    });
    throwIfTurnInterrupted(turn);
    if (response.providerMetadata?.interruptedByLifecycle) {
      const interrupted = await args.createLifecycleInterruptionResult({
        conversationId: conversation.id,
        events: emitted,
      });
      if (interrupted) return interrupted;
    }
    const assistantText = removeRawKnowledgeMarkers(
      await args.redactAssistantMessage(conversation, response.text),
      knowledge,
    );
    throwIfTurnInterrupted(turn);
    const segments = await args.createCitationSegments({
      agent,
      conversation,
      text: assistantText,
      knowledge,
      signal: turn.controller.signal,
    });
    throwIfTurnInterrupted(turn);

    await ensureAssistantStarted();
    if (args.options.streaming?.syntheticDeltas && assistantText.length > 0 && streamedTextLength === 0) {
      await emit({
        conversationId: conversation.id,
        type: "message.delta",
        data: { textDelta: assistantText },
      });
    }
    await emit({
      conversationId: conversation.id,
      type: "message.completed",
      data: {
        text: assistantText,
        ...(segments ? { segments } : {}),
        ...(response.usage ? { usage: response.usage } : {}),
      },
    });

    const delegationCompletion = await args.evaluateDelegationCompletion({
      journey: selectedJourney,
      models,
      conversation,
      history: [...history, { role: "assistant", content: assistantText }],
      emit,
      signal: turn.controller.signal,
    });
    throwIfTurnInterrupted(turn);

    const snapshot = createNextSnapshot({
      conversationId: conversation.id,
      previousSnapshot,
      selectedJourney,
      stateMachineTurn,
      delegationCompletion,
      ...(args.options.journeyIndex ? { definitionHash: args.options.journeyIndex.definitionHash } : {}),
    });
    await args.options.storage.saveSnapshot(snapshot);

    if (args.options.compaction?.afterTurn) {
      const compaction = await args.compactIfNeeded({
        conversationId: conversation.id,
        ...(args.options.compaction.schemaVersion ? { schemaVersion: args.options.compaction.schemaVersion } : {}),
        signal: turn.controller.signal,
      });
      throwIfTurnInterrupted(turn);
      if (compaction) emitted.push(...compaction.events);
    }

    return {
      conversation,
      snapshot,
      events: emitted,
      text: assistantText,
      ...(snapshot.activeJourneyId ? { activeJourneyId: snapshot.activeJourneyId } : {}),
    };
  } catch (error) {
    if (turn.interruptedByNewMessage && isAbortLikeError(error)) {
      return createAbortedTurnResult({
        storage: args.options.storage,
        conversation,
        turn,
        events: emitted,
      });
    }
    throw error;
  } finally {
    finishUserTurn(args.activeTurns, turn);
  }
}
