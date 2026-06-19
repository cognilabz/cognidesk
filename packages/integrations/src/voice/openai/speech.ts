import type { RealtimeClientEvent } from "openai/resources/realtime/realtime";
import type { VoiceOpenaiJsonObject } from "./contracts.js";

export function createSpeechResponse(input: { id: string; text: string }): RealtimeClientEvent {
  return {
    type: "response.create",
    response: {
      conversation: "none",
      output_modalities: ["audio"],
      metadata: {
        cognidesk_voice_kind: "speech",
        cognidesk_voice_id: input.id,
      },
      input: [{
        type: "message",
        role: "user",
        content: [{
          type: "input_text",
          text: `Read the following text aloud exactly, with a natural service-agent tone and no extra words:\n\n${input.text}`,
        }],
      }],
      instructions: "Read the supplied text exactly. Do not add a greeting, explanation, or closing.",
    },
  };
}

export function createPreambleResponse(input: { id: string; text: string }): RealtimeClientEvent {
  return {
    type: "response.create",
    response: {
      conversation: "none",
      output_modalities: ["audio"],
      metadata: {
        cognidesk_voice_kind: "preamble",
        cognidesk_voice_id: input.id,
      },
      input: [{
        type: "message",
        role: "user",
        content: [{
          type: "input_text",
          text: [
            "The customer just said:",
            input.text,
            "",
            "Generate and speak one short wait-time preamble for a flight-service voice agent while Cognidesk continues checking the request.",
          ].join("\n"),
        }],
      }],
      instructions: [
        "Generate exactly one natural spoken sentence.",
        "Do not use a fixed phrase. Vary the wording.",
        "Do not claim a booking, policy result, tool result, queue state, or completion.",
        "Use German if the customer appears to be speaking German; use English if they appear to be speaking English.",
        "For the greeting 'Hallo', prefer German.",
      ].join(" "),
    },
  };
}

export function responseHasSpeechId(response: { metadata?: unknown }, id: string) {
  const metadata = response.metadata;
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) return false;
  return (metadata as VoiceOpenaiJsonObject).cognidesk_voice_id === id;
}

export function createId(prefix: string) {
  const random = globalThis.crypto?.randomUUID?.()
    ?? Math.random().toString(36).slice(2);
  return `${prefix}_${random}`;
}
