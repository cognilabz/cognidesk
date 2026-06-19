import { z } from "zod";
import type { CompiledAgent } from "@cognidesk/core";
import type { VoiceControlTool } from "@cognidesk/voice-websocket";
import { flightTools } from "../agent/tools/flight-tools.js";
import type { FlightToolName } from "./types.js";

export const safeToolNames = ["searchFlights", "suggestFlightOptions", "getTicketStatus", "getFlightInfo"] as const;
export const sideEffectToolNames = ["bookFlight"] as const;
export const allToolNames = [...safeToolNames, ...sideEffectToolNames] as FlightToolName[];
export const voiceTurnIntents = ["advance_journey", "side_exchange", "cancel_or_replace", "correction", "handoff"] as const;

export const voiceJourneyProposalSchema = z.object({
  intent: z.enum(voiceTurnIntents),
  userTranscript: z.string().min(1),
  replacementTranscript: z.string().min(1).optional(),
  targetJourneyId: z.string().min(1).optional(),
  background: z.boolean().optional(),
  reason: z.string().optional(),
  confirmationEvidence: z.string().optional(),
  spokenResponsePlan: z.object({
    immediate: z.string().optional(),
    completion: z.string().optional(),
  }).optional(),
});

export function createVoiceControlTools(agent: CompiledAgent): VoiceControlTool[] {
  const journeyIds = agent.journeys.map((journey) => journey.id);
  return [{
    name: "retrieve_voice_knowledge",
    description: "Retrieve scoped Cogni Air policy or service knowledge before answering factual policy/domain questions.",
    parameters: {
      type: "object",
      additionalProperties: false,
      properties: {
        query: {
          type: "string",
          description: "The concise policy or domain question to retrieve grounding for.",
        },
      },
      required: ["query"],
    },
  }, {
    name: "submit_voice_journey_proposal",
    description: "Submit a validated voice turn proposal when the customer is advancing, correcting, replacing, cancelling, or handing off workflow work.",
    parameters: {
      type: "object",
      additionalProperties: false,
      properties: {
        intent: {
          type: "string",
          enum: [...voiceTurnIntents],
        },
        userTranscript: {
          type: "string",
          description: "The latest customer utterance, cleaned up only enough for text workflow processing.",
        },
        replacementTranscript: {
          type: "string",
          description: "Use only for cancel_or_replace or correction when the workflow should continue with a corrected request.",
        },
        targetJourneyId: {
          type: "string",
          enum: journeyIds,
        },
        background: {
          type: "boolean",
          description: "Prefer true so the voice conversation stays responsive while Cognidesk works.",
        },
        reason: {
          type: "string",
          description: "Why this utterance should affect workflow state.",
        },
        confirmationEvidence: {
          type: "string",
          description: "Short transcript evidence for explicit confirmation, when applicable.",
        },
        spokenResponsePlan: {
          type: "object",
          additionalProperties: false,
          properties: {
            immediate: { type: "string" },
            completion: { type: "string" },
          },
        },
      },
      required: ["intent", "userTranscript"],
    },
  }, {
    name: "get_voice_background_work",
    description: "Inspect running or recently completed Cognidesk voice background work before answering status questions.",
    parameters: {
      type: "object",
      additionalProperties: false,
      properties: {
        workId: {
          type: "string",
          description: "Specific background work id. Omit to get the active/latest work for this conversation.",
        },
      },
    },
  }, {
    name: "cancel_voice_background_work",
    description: "Cancel running Cognidesk voice background work when the customer explicitly cancels or replaces it.",
    parameters: {
      type: "object",
      additionalProperties: false,
      properties: {
        workId: {
          type: "string",
          description: "Specific background work id. Omit to cancel active work for this conversation.",
        },
        reason: {
          type: "string",
        },
      },
    },
  }, {
    name: "request_tool_run",
    description: "Request a validated Cognidesk flight-demo tool run for quick flight search, flight status, ticket status, or confirmed mocked booking creation.",
    parameters: {
      type: "object",
      additionalProperties: false,
      properties: {
        toolName: {
          type: "string",
          enum: [...allToolNames],
        },
        arguments: {
          type: "object",
          description: "Arguments for the named Cognidesk tool.",
        },
        confirmed: {
          type: "boolean",
          description: "True only when the customer explicitly confirmed a side-effect action in their latest speech.",
        },
        confirmationEvidence: {
          type: "string",
          description: "Short transcript evidence for explicit confirmation, required for side-effect tools.",
        },
        reason: {
          type: "string",
          description: "Why this tool is needed for the customer-facing answer.",
        },
      },
      required: ["toolName", "arguments"],
    },
  }];
}

export function isFlightToolName(value: string): value is FlightToolName {
  return allToolNames.includes(value as FlightToolName);
}

export function flightToolForName(name: FlightToolName) {
  return flightTools[name];
}
