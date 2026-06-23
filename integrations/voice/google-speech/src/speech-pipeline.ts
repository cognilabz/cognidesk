import type { VoiceModelSet } from "@cognidesk/core";
import type {
  VoiceBrowserClientEvent,
  VoiceJsonObject,
  VoiceProvider,
  VoiceProviderConnectInput,
  VoiceProviderSession,
} from "@cognidesk/voice-websocket";

export interface SpeechPipelineTranscription {
  text: string;
  itemId?: string;
  startedAtMs?: number;
  endedAtMs?: number;
  metadata?: VoiceJsonObject;
}

export interface SpeechPipelineSynthesis {
  audio: ArrayBuffer | Uint8Array | ReadableStream<Uint8Array>;
  transcript?: string;
  metadata?: VoiceJsonObject;
}

export interface SpeechPipelineTranscribeInput {
  audio: Uint8Array;
  sampleRate: number;
  signal: AbortSignal;
  session: VoiceProviderConnectInput["session"];
  profile?: VoiceProviderConnectInput["profile"];
}

export interface SpeechPipelineSynthesizeInput {
  text: string;
  signal: AbortSignal;
  session: VoiceProviderConnectInput["session"];
  profile?: VoiceProviderConnectInput["profile"];
}

export interface SpeechPipelineVoiceProviderOptions {
  id: string;
  provider: string;
  model?: string;
  transcriptionSource: string;
  sampleRate?: number;
  silenceThreshold?: number;
  endSilenceMs?: number;
  minSpeechMs?: number;
  maxSpeechMs?: number;
  transcribe(input: SpeechPipelineTranscribeInput): Promise<SpeechPipelineTranscription | null>;
  synthesize(input: SpeechPipelineSynthesizeInput): Promise<SpeechPipelineSynthesis>;
}

interface PendingAudio {
  chunks: Uint8Array[];
  durationMs: number;
  silenceMs: number;
  startedAtMs: number;
  endedAtMs: number;
  inSpeech: boolean;
}

export function createSpeechPipelineVoiceProvider(options: SpeechPipelineVoiceProviderOptions): VoiceProvider {
  const sampleRate = options.sampleRate ?? 24_000;
  const silenceThreshold = options.silenceThreshold ?? 500;
  const endSilenceMs = options.endSilenceMs ?? 800;
  const minSpeechMs = options.minSpeechMs ?? 240;
  const maxSpeechMs = options.maxSpeechMs ?? 15_000;

  return {
    id: options.id,
    async connect(input): Promise<VoiceProviderSession> {
      assertProfileModel(input.profile?.modelSet, options);
      const pending: PendingAudio = {
        chunks: [],
        durationMs: 0,
        silenceMs: 0,
        startedAtMs: 0,
        endedAtMs: 0,
        inSpeech: false,
      };
      let closed = false;
      let flushQueue = Promise.resolve();
      let speechGeneration = 0;
      let activeSynthesisAbort: AbortController | null = null;

      const flushPendingAudio = async () => {
        if (closed || input.signal.aborted) {
          clearPendingAudio(pending);
          return;
        }
        if (pending.chunks.length === 0) {
          clearPendingAudio(pending);
          return;
        }
        const audio = concatChunks(pending.chunks);
        const hadSpeech = pending.inSpeech;
        const durationMs = pending.durationMs;
        const startedAtMs = pending.startedAtMs;
        const endedAtMs = pending.endedAtMs;
        clearPendingAudio(pending);
        if (hadSpeech) {
          await input.onEvent({
            kind: "server_event",
            event: {
              type: "input_audio_buffer.speech_stopped",
              event_id: createVoiceProviderEventId("speech_stopped"),
              audio_end_ms: endedAtMs,
            },
          });
        }
        if (!hadSpeech || durationMs < minSpeechMs || closed || input.signal.aborted) return;
        const transcription = await options.transcribe({
          audio,
          sampleRate,
          signal: input.signal,
          session: input.session,
          ...(input.profile ? { profile: input.profile } : {}),
        });
        const text = transcription?.text.trim();
        if (!text) return;
        await input.onEvent({
          kind: "input_transcript.completed",
          text,
          itemId: transcription?.itemId ?? createVoiceProviderEventId("speech_item"),
          startedAtMs: transcription?.startedAtMs ?? startedAtMs,
          endedAtMs: transcription?.endedAtMs ?? endedAtMs,
          transcriptionSource: options.transcriptionSource,
          ...(transcription?.metadata ? { metadata: transcription.metadata } : {}),
        });
      };

      const scheduleFlush = () => {
        flushQueue = flushQueue.then(flushPendingAudio, flushPendingAudio);
      };

      const speakText = async (text: string) => {
        const generation = ++speechGeneration;
        const responseId = createVoiceProviderEventId("response");
        const itemId = createVoiceProviderEventId("item");
        const synthesisAbort = new AbortController();
        activeSynthesisAbort?.abort();
        activeSynthesisAbort = synthesisAbort;
        const onSessionAbort = () => synthesisAbort.abort();
        if (input.signal.aborted) {
          synthesisAbort.abort();
        } else {
          input.signal.addEventListener("abort", onSessionAbort, { once: true });
        }
        let synthesis: SpeechPipelineSynthesis;
        try {
          synthesis = await options.synthesize({
            text,
            signal: synthesisAbort.signal,
            session: input.session,
            ...(input.profile ? { profile: input.profile } : {}),
          });
        } finally {
          input.signal.removeEventListener("abort", onSessionAbort);
          if (activeSynthesisAbort === synthesisAbort) activeSynthesisAbort = null;
        }
        if (closed || generation !== speechGeneration || synthesisAbort.signal.aborted) return;
        for await (const chunk of audioChunks(synthesis.audio)) {
          if (closed || generation !== speechGeneration || synthesisAbort.signal.aborted) return;
          await input.onEvent({
            kind: "server_event",
            event: {
              type: "response.output_audio.delta",
              event_id: createVoiceProviderEventId("audio_delta"),
              response_id: responseId,
              item_id: itemId,
              output_index: 0,
              content_index: 0,
              delta: base64FromBytes(chunk),
            },
          });
        }
        await input.onEvent({
          kind: "server_event",
          event: {
            type: "response.output_audio.done",
            event_id: createVoiceProviderEventId("audio_done"),
            response_id: responseId,
            item_id: itemId,
            output_index: 0,
            content_index: 0,
          },
        });
        await input.onEvent({
          kind: "server_event",
          event: {
            type: "response.output_audio_transcript.done",
            event_id: createVoiceProviderEventId("audio_transcript_done"),
            response_id: responseId,
            item_id: itemId,
            output_index: 0,
            content_index: 0,
            transcript: synthesis.transcript ?? text,
          },
        });
        await input.onEvent({
          kind: "server_event",
          event: {
            type: "response.done",
            event_id: createVoiceProviderEventId("response_done"),
            response: {
              id: responseId,
              status: "completed",
              provider: options.provider,
              model: options.model ?? input.profile?.modelSet?.model ?? "speech-pipeline",
              ...(synthesis.metadata ? { metadata: synthesis.metadata } : {}),
            },
          },
        });
      };

      return {
        async send(event: VoiceBrowserClientEvent) {
          if (closed) return;
          if (event.type === "input_audio_buffer.append") {
            const chunk = bytesFromBase64(event.audio);
            if (chunk.byteLength === 0) return;
            const durationMs = pcm16DurationMs(chunk, sampleRate);
            const silent = isSilentPcm16(chunk, silenceThreshold);
            if (!pending.inSpeech && !silent) {
              pending.inSpeech = true;
              pending.startedAtMs = pending.endedAtMs;
              await input.onEvent({
                kind: "server_event",
                event: {
                  type: "input_audio_buffer.speech_started",
                  event_id: createVoiceProviderEventId("speech_started"),
                  audio_start_ms: pending.startedAtMs,
                },
              });
            }
            pending.chunks.push(chunk);
            pending.durationMs += durationMs;
            pending.endedAtMs += durationMs;
            pending.silenceMs = silent ? pending.silenceMs + durationMs : 0;
            if (pending.inSpeech && (pending.silenceMs >= endSilenceMs || pending.durationMs >= maxSpeechMs)) {
              scheduleFlush();
            }
            return;
          }
          if (event.type === "input_audio_buffer.commit") {
            scheduleFlush();
            await flushQueue;
            return;
          }
          if (event.type === "input_audio_buffer.clear") {
            clearPendingAudio(pending);
            return;
          }
          if (event.type === "response.cancel") {
            speechGeneration++;
            activeSynthesisAbort?.abort();
          }
        },
        async speak({ text }) {
          await speakText(text);
        },
        async preamble({ text }) {
          await speakText(text);
        },
        async close() {
          closed = true;
          activeSynthesisAbort?.abort();
          if (pending.chunks.length > 0) {
            await flushQueue.catch(() => undefined);
          }
        },
      };
    },
  };
}

export function pcm16WavBlob(audio: Uint8Array, sampleRate = 24_000) {
  return new Blob([pcm16WavBytes(audio, sampleRate)], { type: "audio/wav" });
}

export function pcm16WavBytes(audio: Uint8Array, sampleRate = 24_000) {
  const header = new ArrayBuffer(44);
  const view = new DataView(header);
  writeAscii(view, 0, "RIFF");
  view.setUint32(4, 36 + audio.byteLength, true);
  writeAscii(view, 8, "WAVE");
  writeAscii(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeAscii(view, 36, "data");
  view.setUint32(40, audio.byteLength, true);
  const bytes = new Uint8Array(44 + audio.byteLength);
  bytes.set(new Uint8Array(header), 0);
  bytes.set(audio, 44);
  return bytes;
}

function assertProfileModel(modelSet: VoiceModelSet | undefined, options: SpeechPipelineVoiceProviderOptions) {
  if (!modelSet) return;
  if (modelSet.provider !== options.provider) {
    throw new Error(`${options.id} cannot run voice provider '${modelSet.provider}'.`);
  }
}

function clearPendingAudio(pending: PendingAudio) {
  pending.chunks = [];
  pending.durationMs = 0;
  pending.silenceMs = 0;
  pending.inSpeech = false;
}

function concatChunks(chunks: Uint8Array[]) {
  const total = chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0);
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}

function pcm16DurationMs(chunk: Uint8Array, sampleRate: number) {
  return chunk.byteLength / 2 / sampleRate * 1000;
}

function isSilentPcm16(chunk: Uint8Array, threshold: number) {
  const view = new DataView(chunk.buffer, chunk.byteOffset, chunk.byteLength);
  for (let offset = 0; offset + 1 < chunk.byteLength; offset += 2) {
    if (Math.abs(view.getInt16(offset, true)) > threshold) return false;
  }
  return true;
}

async function* audioChunks(audio: SpeechPipelineSynthesis["audio"]) {
  if (audio instanceof ReadableStream) {
    const reader = audio.getReader();
    try {
      while (true) {
        const next = await reader.read();
        if (next.done) return;
        if (next.value.byteLength > 0) yield next.value;
      }
    } finally {
      reader.releaseLock();
    }
    return;
  }
  const bytes = audio instanceof Uint8Array ? audio : new Uint8Array(audio);
  if (bytes.byteLength > 0) yield bytes;
}

function bytesFromBase64(value: string) {
  return new Uint8Array(Buffer.from(value, "base64"));
}

function base64FromBytes(value: Uint8Array) {
  return Buffer.from(value).toString("base64");
}

function writeAscii(view: DataView, offset: number, value: string) {
  for (let index = 0; index < value.length; index += 1) {
    view.setUint8(offset + index, value.charCodeAt(index));
  }
}

function createVoiceProviderEventId(prefix: string) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}
