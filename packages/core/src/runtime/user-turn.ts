import type { RuntimeEventInput } from "../storage.js";
import { runtimeLogger } from "../logging.js";
import type { RuntimeEvent } from "../types.js";
import { addTelemetryContentEvent, telemetryEventNames } from "../telemetry.js";
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
  const logger = runtimeLogger(args.options, { conversationId: conversation.id });
  logger.info({
    userTextLength: args.input.text.length,
    hasTurnPayload: args.input.turn !== undefined,
  }, "User turn started");
  const turn = await beginUserTurn({
    activeTurns: args.activeTurns,
    conversationId: conversation.id,
    agent,
    emit: args.emit,
    ...(args.input.signal ? { signal: args.input.signal } : {}),
  });
  const userText = await args.redactUserMessage(conversation, args.input.text);
  addTelemetryContentEvent(args.options, telemetryEventNames.userMessage, {
    "cognidesk.user.message.text": args.input.text,
    "cognidesk.user.message.redacted_text": userText,
  });
  const emitted: RuntimeEvent[] = [];
  if (turn.interruptedEvent) emitted.push(turn.interruptedEvent);
  const emit = async <TEvent extends RuntimeEventInput>(event: TEvent) => {
    const stored = await args.emit(event);
    emitted.push(stored);
    return stored;
  };

  try {
    if (args.options.compaction?.beforeTurn) {
      logger.debug("Checking before-turn compaction");
      const compaction = await args.compactIfNeeded({
        conversationId: conversation.id,
        ...(args.options.compaction.schemaVersion ? { schemaVersion: args.options.compaction.schemaVersion } : {}),
        signal: turn.controller.signal,
      });
      throwIfTurnInterrupted(turn);
      if (compaction) {
        logger.info({
          eventCount: compaction.events.length,
        }, "Before-turn compaction completed");
        emitted.push(...compaction.events);
      }
    }

    logger.debug("Recording user message events");
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
    logger.debug({
      historyMessages: history.length,
      previousJourneyId: previousSnapshot?.activeJourneyId,
    }, "Selecting journey");
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
    logger.info({
      selectedJourneyId: selectedJourney?.id ?? null,
      selectedJourneyKind: selectedJourney?.kind ?? null,
    }, "Journey selected");
    const stateMachineTurn = selectedJourney?.kind === "stateMachine"
      ? await args.executeStateMachineTurn({
          journey: selectedJourney,
          models,
          conversation,
          previousSnapshot,
          userText,
          ...(args.input.channel ? { channel: args.input.channel } : {}),
          turn: args.input.turn ?? {},
          app: args.input.app ?? args.options.app ?? {},
          emit,
          signal: turn.controller.signal,
        })
      : null;
    throwIfTurnInterrupted(turn);
    if (stateMachineTurn) {
      logger.debug({
        activeStateIds: stateMachineTurn.activeStateIds,
        completedJourneyId: stateMachineTurn.completed?.journeyId,
        completedStateId: stateMachineTurn.completed?.stateId,
      }, "State machine turn completed");
    }
    const interruptedByLifecycle = await args.createLifecycleInterruptionResult({
      conversationId: conversation.id,
      events: emitted,
    });
    if (interruptedByLifecycle) {
      logger.info("User turn interrupted by lifecycle change");
      return interruptedByLifecycle;
    }

    logger.debug("Retrieving knowledge");
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
    logger.debug({ knowledgeItems: knowledge.length }, "Knowledge retrieval completed");
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
      ...(args.input.channel ? { channel: args.input.channel } : {}),
    }));
    const availableTools = resolveAvailableModelTools(agent, selectedJourney, stateMachineTurn);
    const modelTools = availableTools.map(toModelToolDefinition);
    logger.debug({
      modelMessageCount: modelMessages.length,
      availableToolNames: availableTools.map((tool) => tool.name),
      visibleCustomEventCount: visibleCustomEvents.length,
    }, "Generating assistant response");
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
          await args.input.onAssistantTextDelta?.(textDelta);
        },
      } : {}),
      signal: turn.controller.signal,
    });
    throwIfTurnInterrupted(turn);
    logger.info({
      responseTextLength: response.text.length,
      toolCallCount: response.toolCalls?.length ?? 0,
      usage: response.usage,
    }, "Assistant response generated");
    if (response.providerMetadata?.interruptedByLifecycle) {
      const interrupted = await args.createLifecycleInterruptionResult({
        conversationId: conversation.id,
        events: emitted,
      });
      if (interrupted) {
        logger.info("Assistant response interrupted by lifecycle change");
        return interrupted;
      }
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
    logger.debug({ citationSegments: segments?.length ?? 0 }, "Citation processing completed");

    await ensureAssistantStarted();
    if (args.options.streaming?.syntheticDeltas && assistantText.length > 0 && streamedTextLength === 0) {
      await emit({
        conversationId: conversation.id,
        type: "message.delta",
        data: { textDelta: assistantText },
      });
      await args.input.onAssistantTextDelta?.(assistantText);
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
    if (delegationCompletion) {
      logger.info({
        journeyId: delegationCompletion.journeyId,
      }, "Delegation journey completed");
    }

    const snapshot = createNextSnapshot({
      conversationId: conversation.id,
      previousSnapshot,
      selectedJourney,
      stateMachineTurn,
      delegationCompletion,
      ...(args.options.journeyIndex ? { definitionHash: args.options.journeyIndex.definitionHash } : {}),
    });
    await args.options.storage.saveSnapshot(snapshot);
    logger.debug({
      activeJourneyId: snapshot.activeJourneyId,
      activeStateIds: snapshot.activeStateIds,
    }, "Runtime snapshot saved");

    if (args.options.compaction?.afterTurn) {
      logger.debug("Checking after-turn compaction");
      const compaction = await args.compactIfNeeded({
        conversationId: conversation.id,
        ...(args.options.compaction.schemaVersion ? { schemaVersion: args.options.compaction.schemaVersion } : {}),
        signal: turn.controller.signal,
      });
      throwIfTurnInterrupted(turn);
      if (compaction) {
        logger.info({
          eventCount: compaction.events.length,
        }, "After-turn compaction completed");
        emitted.push(...compaction.events);
      }
    }

    logger.info({
      emittedEventCount: emitted.length,
      activeJourneyId: snapshot.activeJourneyId,
    }, "User turn completed");
    return {
      conversation,
      snapshot,
      events: emitted,
      text: assistantText,
      ...(snapshot.activeJourneyId ? { activeJourneyId: snapshot.activeJourneyId } : {}),
    };
  } catch (error) {
    if (turn.interruptedByNewMessage && isAbortLikeError(error)) {
      logger.info("User turn aborted by a newer message");
      return createAbortedTurnResult({
        storage: args.options.storage,
        conversation,
        turn,
        events: emitted,
      });
    }
    logger.error({
      error: error instanceof Error ? error.message : "User turn failed.",
    }, "User turn failed");
    throw error;
  } finally {
    finishUserTurn(args.activeTurns, turn);
  }
}
