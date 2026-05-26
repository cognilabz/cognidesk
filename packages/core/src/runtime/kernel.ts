import type { JourneyEventDefinition } from "../definition.js";
import type { RuntimeEvent } from "../types.js";
import { emitRuntimeJourneyEvent } from "./facade-events.js";
import { submitRuntimeWidget } from "./facade-conversations.js";
import { createRuntimeCore } from "./kernel-core.js";
import { createRuntimeRouting } from "./kernel-routing.js";
import {
  createRuntimeState,
  type RuntimeState,
} from "./kernel-state.js";
import { handleUserMessage as handleUserMessageWithDeps } from "./user-turn.js";
import type {
  ActiveTurn,
  EmitJourneyEventInput,
  HandleUserMessageInput,
  RuntimeOptions,
  SubmitWidgetInput,
} from "./types.js";

export function createRuntimeKernel(
  options: RuntimeOptions,
  activeTurns: Map<string, ActiveTurn>,
) {
  const core = createRuntimeCore(options);
  let state!: RuntimeState;
  const routing = createRuntimeRouting(options, core, () => state);
  state = createRuntimeState(options, core, routing);

  return {
    ...core,
    ...routing,
    ...state,
    emitJourneyEvent<TEvent extends JourneyEventDefinition>(input: EmitJourneyEventInput<TEvent>) {
      return emitRuntimeJourneyEvent({
        options,
        requireConversation: core.requireConversation,
        emit: core.emit,
        processJourneyEvent: state.processJourneyEvent,
      }, input);
    },
    submitWidget(input: SubmitWidgetInput): Promise<RuntimeEvent> {
      return submitRuntimeWidget(
        core.requireConversation,
        core.emit,
        state.processWidgetSubmission,
        input,
      );
    },
    handleUserMessage<TTurn = unknown>(input: HandleUserMessageInput<TTurn>) {
      return handleUserMessageWithDeps({
        options,
        activeTurns,
        input,
        requireAgent: core.requireAgent,
        requireModels: core.requireModels,
        requireConversation: core.requireConversation,
        emit: core.emit,
        compactIfNeeded: core.compactIfNeeded,
        selectJourney: routing.selectJourney,
        executeStateMachineTurn: state.executeStateMachineTurn,
        createLifecycleInterruptionResult: core.createLifecycleInterruptionResult,
        retrieveKnowledge: routing.retrieveKnowledge,
        redactUserMessage: core.redactUserMessage,
        redactModelMessages: core.redactModelMessages,
        generateResponseWithTools: core.generateResponseWithTools,
        redactAssistantMessage: core.redactAssistantMessage,
        createCitationSegments: core.createCitationSegments,
        evaluateDelegationCompletion: routing.evaluateDelegationCompletion,
      });
    },
  };
}

export type RuntimeKernel = ReturnType<typeof createRuntimeKernel>;
