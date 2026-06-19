import type { RealtimeSessionCreateRequest } from "openai/resources/realtime/realtime";
import type { VoiceControlTool } from "@cognidesk/voice-websocket";
import { OPENAI_REALTIME_V1_MODEL } from "./contracts.js";

export function buildRealtimeSession(input: {
  defaults?: Partial<RealtimeSessionCreateRequest>;
  model: typeof OPENAI_REALTIME_V1_MODEL;
  voice?: string;
  instructions?: string;
  transcriptionLanguage?: string;
  control?: {
    tools: VoiceControlTool[];
    instructions?: string;
  };
}): RealtimeSessionCreateRequest {
  const realtimeControlEnabled = Boolean(input.control);
  const realtimeTools = input.control ? input.control.tools.map(toRealtimeFunctionTool) : undefined;
  const sessionInstructions = buildSessionInstructions({
    ...(input.instructions ? { profileInstructions: input.instructions } : {}),
    ...(input.control?.instructions ? { controlInstructions: input.control.instructions } : {}),
    realtimeControlEnabled,
  });
  const base: RealtimeSessionCreateRequest = {
    type: "realtime",
    model: input.model,
    output_modalities: ["audio"],
    ...(realtimeTools ? {
      tools: realtimeTools,
      tool_choice: "auto",
      parallel_tool_calls: false,
    } : {}),
    reasoning: { effort: "low" },
    audio: {
      input: {
        format: { type: "audio/pcm", rate: 24000 },
        noise_reduction: { type: "near_field" },
        transcription: {
          model: "gpt-realtime-whisper",
          ...(input.transcriptionLanguage ? { language: input.transcriptionLanguage } : {}),
        },
        turn_detection: {
          type: "server_vad",
          create_response: realtimeControlEnabled,
          interrupt_response: true,
          prefix_padding_ms: 250,
          silence_duration_ms: 420,
        },
      },
      output: {
        format: { type: "audio/pcm", rate: 24000 },
        ...(input.voice ? { voice: input.voice } : {}),
      },
    },
    instructions: sessionInstructions,
  };
  return mergeSession(base, input.defaults);
}

function buildSessionInstructions(input: {
  profileInstructions?: string;
  controlInstructions?: string;
  realtimeControlEnabled: boolean;
}) {
  if (!input.realtimeControlEnabled) {
    return input.profileInstructions ?? [
      "You are the voice transport for a Cognidesk agent.",
      "Transcribe user speech accurately.",
      "# Preambles",
      "When asked for a preamble, generate exactly one brief, natural wait-time sentence. Do not claim a result or repeat the same wording.",
      "# Language",
      "Prefer German and English. If a short greeting sounds like 'Hallo', treat it as German unless the user clearly continues in another language.",
      "When asked to speak supplied text, preserve the wording and keep the delivery natural and concise.",
    ].join(" ");
  }
  return [
    "You are the live realtime voice layer for a Cognidesk customer-support agent.",
    "Speak naturally and quickly, but keep Cognidesk authoritative for facts, customer-specific state, workflow progress, and side effects.",
    "Use lightweight conversation and the supplied history for greetings, small talk, clarifications, and interruption recovery.",
    "Use the available Cognidesk voice control tools for policy knowledge, flight/customer state, tool work, confirmations, or workflow changes.",
    "Do not claim a booking, policy answer, flight status, eligibility, handoff, or other substantive result until it comes from a control tool result or validated runtime context.",
    "Ask at most one missing detail at a time.",
    "Do not mention widgets, buttons, Markdown, JSON, tool names, internal state, Runtime Events, or provider events to the customer.",
    input.profileInstructions,
    input.controlInstructions,
  ].filter(Boolean).join("\n\n");
}

function toRealtimeFunctionTool(tool: VoiceControlTool): NonNullable<RealtimeSessionCreateRequest["tools"]>[number] {
  return {
    type: "function",
    name: tool.name,
    ...(tool.description ? { description: tool.description } : {}),
    ...(tool.parameters ? { parameters: tool.parameters } : {}),
  };
}

function mergeSession(
  base: RealtimeSessionCreateRequest,
  defaults: Partial<RealtimeSessionCreateRequest> | undefined,
): RealtimeSessionCreateRequest {
  if (!defaults) return base;
  return {
    ...base,
    ...defaults,
    audio: {
      ...base.audio,
      ...defaults.audio,
      input: {
        ...base.audio?.input,
        ...defaults.audio?.input,
      },
      output: {
        ...base.audio?.output,
        ...defaults.audio?.output,
      },
    },
  };
}
