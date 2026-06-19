import type {
  VoiceBrowserServerEvent,
  VoiceInputTranscriptEvent,
} from "./protocol.js";

export function mergeInputTranscript(
  current: VoiceInputTranscriptEvent | null,
  next: VoiceInputTranscriptEvent,
): VoiceInputTranscriptEvent {
  if (!current) return next;
  const merged: VoiceInputTranscriptEvent = {
    kind: "input_transcript.completed",
    text: `${current.text} ${next.text}`.trim(),
  };
  const itemId = next.itemId ?? current.itemId;
  if (itemId) merged.itemId = itemId;
  const startedAtMs = current.startedAtMs ?? next.startedAtMs;
  if (startedAtMs !== undefined) merged.startedAtMs = startedAtMs;
  const endedAtMs = next.endedAtMs ?? current.endedAtMs;
  if (endedAtMs !== undefined) merged.endedAtMs = endedAtMs;
  const transcriptionSource = next.transcriptionSource ?? current.transcriptionSource;
  if (transcriptionSource) merged.transcriptionSource = transcriptionSource;
  const metadata = {
    ...(current.metadata ?? {}),
    ...(next.metadata ?? {}),
  };
  if (Object.keys(metadata).length > 0) merged.metadata = metadata;
  return merged;
}

export function isAgentResponseSignal(event: VoiceBrowserServerEvent) {
  return event.type === "response.output_audio.delta"
    || event.type === "response.output_audio_transcript.delta"
    || event.type === "response.output_audio_transcript.done"
    || event.type === "response.done";
}

export function takeSpeakablePrefix(text: string, force: boolean): { text: string; consumed: number } | null {
  if (!text.trim()) return null;
  if (force) return { text: normalizeSpeechText(text), consumed: text.length };
  const sentenceBoundary = findLastSentenceBoundary(text);
  if (sentenceBoundary > 0) {
    return {
      text: normalizeSpeechText(text.slice(0, sentenceBoundary)),
      consumed: sentenceBoundary,
    };
  }
  if (text.length < 180) return null;
  const softBoundary = findSoftBoundary(text, 140);
  if (softBoundary <= 0) return null;
  return {
    text: normalizeSpeechText(text.slice(0, softBoundary)),
    consumed: softBoundary,
  };
}

export function normalizeSpeechText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

export function debounceMsForTranscript(text: string, baseMs: number) {
  const wordCount = text.trim().split(" ").filter(Boolean).length;
  return wordCount <= 2 ? Math.max(baseMs, 900) : baseMs;
}

function findLastSentenceBoundary(text: string) {
  let boundary = -1;
  const pattern = /[.!?。！？](?:["')\]]+)?\s+/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    boundary = match.index + match[0].length;
  }
  return boundary;
}

function findSoftBoundary(text: string, minIndex: number) {
  const candidates = [", ", "; ", ": ", "\n", " "];
  for (const candidate of candidates) {
    const boundary = text.lastIndexOf(candidate);
    if (boundary >= minIndex) return boundary + candidate.length;
  }
  return -1;
}
