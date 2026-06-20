import type { VoiceControlSurface } from "@cognidesk/voice-websocket";
import { createVoiceBackgroundWorkStore } from "./background.js";
import { retrieveVoiceKnowledge } from "./knowledge.js";
import { requestToolRun } from "./tool-run.js";
import type { FlightDemoVoiceControlInput } from "./types.js";
import { createVoiceControlTools } from "./tools.js";

export function createFlightDemoVoiceControlSurface(input: FlightDemoVoiceControlInput): VoiceControlSurface {
  const backgroundWork = createVoiceBackgroundWorkStore(input);
  return {
    tools: createVoiceControlTools(input.agent),
    async createSessionInstructions({ session }) {
      const replay = await input.runtime.replayConversation({
        conversationId: session.conversation.id,
      });
      const snapshot = await input.runtime.getSnapshot(session.conversation.id);
      return [
        "# Cognidesk Voice Runtime Context",
        `Agent id: ${input.agent.id}`,
        "",
        "# Base Agent Instructions",
        input.agent.instructions,
        "",
        "# Voice Answer Authority",
        "Use the Voice Instruction Layer and full history for greetings, small talk, clarification, and interruption recovery.",
        "Use retrieve_voice_knowledge before factual policy or domain answers.",
        "Use request_tool_run for quick read-only flight availability, flight information, and ticket status checks.",
        "Use submit_voice_journey_proposal when the customer is trying to advance, correct, replace, cancel, or hand off workflow state.",
        "Prefer submit_voice_journey_proposal with background=true for workflow progress so the customer can keep talking while Cognidesk works.",
        "Use get_voice_background_work before answering questions about work that may still be running.",
        "Use cancel_voice_background_work only when the customer explicitly cancels or replaces running work.",
        "Never claim a side effect completed until request_tool_run or a background completion update returns a successful result.",
        "",
        "# Voice Turn Intent Policy",
        "Small talk, greetings, and lightweight clarifications are side exchanges; answer them directly without mutating workflow state.",
        "Policy and domain facts require retrieve_voice_knowledge unless they are already present in the validated runtime context.",
        "Workflow progress, corrections, cancellations, replacements, or handoff require Cognidesk validation through submit_voice_journey_proposal.",
        "",
        "# Available Journeys",
        input.agent.journeys.map((journey) => `- ${journey.id}: ${journey.condition}`).join("\n"),
        "",
        "# Active Runtime Snapshot",
        JSON.stringify(snapshot ?? { activeJourneyId: null, activeStateIds: [] }),
        "",
        "# Voice Background Work",
        backgroundWork.describeForPrompt(session.conversation.id),
        "",
        "# Canonical Conversation History",
        replay.messages.length > 0
          ? replay.messages.map((message) => `${message.role}: ${message.text}`).join("\n")
          : "No prior customer-visible messages.",
      ].join("\n");
    },
    async handleToolCall(call) {
      if (call.name === "retrieve_voice_knowledge") {
        return retrieveVoiceKnowledge(input, call);
      }
      if (call.name === "submit_voice_journey_proposal") {
        return backgroundWork.submitProposal(call);
      }
      if (call.name === "get_voice_background_work") {
        return backgroundWork.getStatus(call);
      }
      if (call.name === "cancel_voice_background_work") {
        return backgroundWork.cancel(call);
      }
      if (call.name === "request_tool_run") {
        return requestToolRun(input, call);
      }
      return {
        output: {
          ok: false,
          error: `Unknown voice control tool '${call.name}'.`,
        },
      };
    },
  };
}
