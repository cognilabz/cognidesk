import { useCallback, useEffect, useRef, useState } from "react";
import { createVoiceProtocolClient, type VoiceProtocolClient } from "./voice-protocol.js";
import type {
  ChatStartAction,
  ChatStartBehavior,
  ChatStartInput,
  StartVoiceResult,
  UseVoiceOptions,
  VoiceConnectionStatus,
  VoiceProtocolClientEvent,
  VoiceProtocolServerEvent,
} from "./types.js";

const capturePlaybackLeadSeconds = 0.08;

export interface UseVoiceResult {
  status: VoiceConnectionStatus;
  conversationId: string | null;
  channelSegmentId: string | null;
  connectionId: string | null;
  localStream: MediaStream | null;
  muted: boolean;
  error: Error | null;
  start(): Promise<StartVoiceResult>;
  stop(): void;
  setMuted(muted: boolean): void;
  sendEvent(event: VoiceProtocolClientEvent): void;
}

export function useVoice(options: UseVoiceOptions): UseVoiceResult {
  const [status, setStatus] = useState<VoiceConnectionStatus>("idle");
  const [conversationId, setConversationId] = useState(options.conversationId ?? null);
  const [channelSegmentId, setChannelSegmentId] = useState<string | null>(null);
  const [connectionId, setConnectionId] = useState<string | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [muted, setMutedState] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const protocolRef = useRef<VoiceProtocolClient | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const captureNodeRef = useRef<AudioWorkletNode | null>(null);
  const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const playbackSourcesRef = useRef<AudioBufferSourceNode[]>([]);
  const playbackUntilRef = useRef(0);
  const sequenceRef = useRef(0);
  const mutedRef = useRef(false);

  const stopPlayback = useCallback(() => {
    for (const source of playbackSourcesRef.current) {
      try {
        source.stop();
      } catch {
        // Already stopped.
      }
    }
    playbackSourcesRef.current = [];
    playbackUntilRef.current = audioContextRef.current?.currentTime ?? 0;
  }, []);

  const cleanup = useCallback(() => {
    protocolRef.current?.close(1000, "voice stopped");
    protocolRef.current = null;
    captureNodeRef.current?.disconnect();
    captureNodeRef.current = null;
    sourceNodeRef.current?.disconnect();
    sourceNodeRef.current = null;
    stopPlayback();
    localStreamRef.current?.getTracks().forEach((track) => track.stop());
    localStreamRef.current = null;
    setLocalStream(null);
    if (!options.audioContext) {
      void audioContextRef.current?.close();
      audioContextRef.current = null;
    }
  }, [options.audioContext, stopPlayback]);

  const sendEvent = useCallback((event: VoiceProtocolClientEvent) => {
    protocolRef.current?.sendEvent(event);
  }, []);

  const setMuted = useCallback((nextMuted: boolean) => {
    mutedRef.current = nextMuted;
    setMutedState(nextMuted);
    localStreamRef.current?.getAudioTracks().forEach((track) => {
      track.enabled = !nextMuted;
    });
  }, []);

  const stop = useCallback(() => {
    cleanup();
    setStatus("ended");
    options.onEnded?.();
  }, [cleanup, options]);

  const handleServerEvent = useCallback((event: VoiceProtocolServerEvent) => {
    options.onEvent?.(event);
    if (event.type === "input_audio_buffer.speech_started") {
      const context = audioContextRef.current;
      const playbackActive = isVoicePlaybackActive({
        currentTime: context?.currentTime,
        playbackUntil: playbackUntilRef.current,
      });
      if (context && playbackActive && options.suppressCaptureDuringPlayback === false) {
        const playedUntilMs = Math.max(0, Math.round(context.currentTime * 1000));
        stopPlayback();
        protocolRef.current?.sendEvent({
          type: "response.cancel",
          playedUntilMs,
          reason: "user_speech_started",
        });
      }
      return;
    }
    if (event.type !== "response.output_audio.delta") return;
    const delta = typeof event.delta === "string" ? event.delta : undefined;
    if (!delta) return;
    const context = audioContextRef.current;
    if (!context) return;
    playPcm16(context, delta, playbackSourcesRef.current, playbackUntilRef);
  }, [options, stopPlayback]);

  const start = useCallback(async () => {
    setStatus("requestingPermission");
    setError(null);
    cleanup();
    try {
      const contextPayload = options.initialContext ?? {};
      let voiceConversationId = conversationId;
      let createdConversation: StartVoiceResult["conversation"] | null = null;
      let createdEvents: StartVoiceResult["events"] = [];
      let createdInitialGreeting: string | undefined;
      if (!voiceConversationId) {
        const agentId = options.agentId;
        if (!agentId) throw new Error("agentId is required when conversationId is not provided.");
        const chatStart = await resolveChatStart(options.chatStart, {
          context: contextPayload,
          channel: "voice",
          ...(options.app !== undefined ? { app: options.app } : {}),
        });
        createdInitialGreeting = chatStartSpeechText(chatStart);
        const created = await options.client.createConversation({
          agentId,
          context: contextPayload,
          ...(options.privacy !== undefined ? { privacy: options.privacy } : {}),
          channel: "voice",
          ...(chatStart !== undefined ? { chatStart } : {}),
          ...(options.app !== undefined ? { app: options.app } : {}),
        });
        voiceConversationId = created.conversation.id;
        createdConversation = created.conversation;
        createdEvents = created.events ?? [];
        setConversationId(voiceConversationId);
        options.onConversationCreated?.(voiceConversationId);
      }

      const stream = await navigator.mediaDevices.getUserMedia(options.mediaConstraints ?? defaultVoiceMediaConstraints());
      localStreamRef.current = stream;
      setLocalStream(stream);
      stream.getAudioTracks().forEach((track) => {
        track.enabled = !mutedRef.current;
      });

      setStatus("connecting");
      const clientHints = {
        userAgent: navigator.userAgent,
        locale: navigator.language,
      };
      const result = await options.client.startVoiceSegment(voiceConversationId, {
        client: clientHints,
        ...(createdInitialGreeting ? { initialGreeting: createdInitialGreeting } : {}),
        ...(options.app !== undefined ? { app: options.app } : {}),
      });
      const connectedResult = createdConversation
        ? {
            ...result,
            conversation: createdConversation,
            events: [...createdEvents, ...result.events],
          }
        : result;

      const context = options.audioContext ?? new AudioContext({ sampleRate: 24000 });
      audioContextRef.current = context;
      if (context.state === "suspended") await context.resume();

      let ready = false;
      const readyPromise = new Promise<void>((resolve, reject) => {
        protocolRef.current = createVoiceProtocolClient({
          url: connectedResult.socket.url,
          ...(options.WebSocket ? { WebSocket: options.WebSocket } : {}),
          onOpen: () => undefined,
          onEvent: (event) => {
            handleServerEvent(event);
            if (event.type === "cognidesk.connection.ready" && !ready) {
              ready = true;
              resolve();
            }
          },
          onClose: () => {
            if (!ready) reject(new Error("Voice socket closed before it was ready."));
          },
          onError: () => reject(new Error("Voice socket failed.")),
        });
      });

      await readyPromise;
      await installCaptureWorklet(context, stream, (audio) => {
        if (shouldSuppressVoiceCapture({
          muted: mutedRef.current,
          currentTime: context.currentTime,
          playbackUntil: playbackUntilRef.current,
          suppressDuringPlayback: options.suppressCaptureDuringPlayback ?? true,
        })) return;
        sequenceRef.current += 1;
        protocolRef.current?.sendEvent({
          type: "input_audio_buffer.append",
          audio,
          sequence: sequenceRef.current,
        });
      }, captureNodeRef, sourceNodeRef);

      setConversationId(connectedResult.conversation.id);
      setChannelSegmentId(connectedResult.channelSegment.id);
      setConnectionId(connectedResult.connection.id);
      setStatus("connected");
      options.onConnected?.(connectedResult);
      return connectedResult;
    } catch (caught) {
      const nextError = caught instanceof Error ? caught : new Error("Failed to start voice connection.");
      setError(nextError);
      setStatus("error");
      cleanup();
      options.onError?.(nextError);
      throw nextError;
    }
  }, [cleanup, conversationId, handleServerEvent, options]);

  useEffect(() => {
    setConversationId(options.conversationId ?? null);
  }, [options.conversationId]);

  useEffect(() => cleanup, [cleanup]);

  return {
    status,
    conversationId,
    channelSegmentId,
    connectionId,
    localStream,
    muted,
    error,
    start,
    stop,
    setMuted,
    sendEvent,
  };
}

export function defaultVoiceMediaConstraints(): MediaStreamConstraints {
  return {
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
    },
  };
}

export function shouldSuppressVoiceCapture(input: {
  muted: boolean;
  currentTime?: number | undefined;
  playbackUntil: number;
  suppressDuringPlayback?: boolean;
}): boolean {
  if (input.muted) return true;
  if (input.suppressDuringPlayback === false) return false;
  return isVoicePlaybackActive(input);
}

export function isVoicePlaybackActive(input: {
  currentTime?: number | undefined;
  playbackUntil: number;
}): boolean {
  if (input.currentTime === undefined) return false;
  return input.playbackUntil > input.currentTime + capturePlaybackLeadSeconds;
}

async function resolveChatStart(
  behavior: ChatStartBehavior | undefined,
  input: ChatStartInput,
): Promise<ChatStartAction> {
  if (typeof behavior !== "function") return behavior;
  return behavior(input);
}

function chatStartSpeechText(action: ChatStartAction): string | undefined {
  if (!action) return undefined;
  if (typeof action === "string") return normalizeText(action);
  if (action.type === "message") return normalizeText(action.text);
  return undefined;
}

function normalizeText(text: string) {
  const trimmed = text.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

async function installCaptureWorklet(
  context: AudioContext,
  stream: MediaStream,
  onAudio: (base64Pcm16: string) => void,
  captureNodeRef: { current: AudioWorkletNode | null },
  sourceNodeRef: { current: MediaStreamAudioSourceNode | null },
) {
  const url = URL.createObjectURL(new Blob([captureWorkletSource()], { type: "text/javascript" }));
  try {
    await context.audioWorklet.addModule(url);
  } finally {
    URL.revokeObjectURL(url);
  }
  const source = context.createMediaStreamSource(stream);
  const node = new AudioWorkletNode(context, "cognidesk-voice-capture");
  node.port.onmessage = (event) => {
    if (!(event.data instanceof ArrayBuffer)) return;
    onAudio(base64FromBytes(new Uint8Array(event.data)));
  };
  source.connect(node);
  captureNodeRef.current = node;
  sourceNodeRef.current = source;
}

function playPcm16(
  context: AudioContext,
  base64: string,
  sources: AudioBufferSourceNode[],
  playbackUntilRef: { current: number },
) {
  const bytes = bytesFromBase64(base64);
  const sampleCount = Math.floor(bytes.byteLength / 2);
  if (sampleCount === 0) return;
  const buffer = context.createBuffer(1, sampleCount, 24000);
  const channel = buffer.getChannelData(0);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  for (let index = 0; index < sampleCount; index += 1) {
    channel[index] = Math.max(-1, Math.min(1, view.getInt16(index * 2, true) / 32768));
  }
  const source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  const startAt = Math.max(context.currentTime + 0.01, playbackUntilRef.current);
  playbackUntilRef.current = startAt + buffer.duration;
  source.addEventListener("ended", () => {
    const index = sources.indexOf(source);
    if (index >= 0) sources.splice(index, 1);
  });
  sources.push(source);
  source.start(startAt);
}

function bytesFromBase64(base64: string) {
  const binary = globalThis.atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

function base64FromBytes(bytes: Uint8Array) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    const chunk = bytes.subarray(offset, offset + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return globalThis.btoa(binary);
}

function captureWorkletSource() {
  return `
class CognideskVoiceCaptureProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.samples = [];
    this.cursor = 0;
    this.ratio = sampleRate / 24000;
  }

  process(inputs) {
    const input = inputs[0] && inputs[0][0];
    if (!input) return true;
    while (this.cursor < input.length) {
      const sample = input[Math.floor(this.cursor)] || 0;
      const clamped = Math.max(-1, Math.min(1, sample));
      this.samples.push(clamped < 0 ? clamped * 32768 : clamped * 32767);
      this.cursor += this.ratio;
      if (this.samples.length >= 480) this.flush();
    }
    this.cursor -= input.length;
    return true;
  }

  flush() {
    const pcm = new Int16Array(this.samples.splice(0, this.samples.length));
    this.port.postMessage(pcm.buffer, [pcm.buffer]);
  }
}

registerProcessor("cognidesk-voice-capture", CognideskVoiceCaptureProcessor);
`;
}
