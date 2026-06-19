import type OpenAI from "openai";
import type {
  RealtimeClientEvent,
  RealtimeServerEvent,
  RealtimeSessionCreateRequest,
} from "openai/resources/realtime/realtime";

export const OPENAI_REALTIME_V1_MODEL = "gpt-realtime-2";

export type VoiceOpenaiJsonPrimitive = string | number | boolean | null;
export type VoiceOpenaiJsonValue =
  | VoiceOpenaiJsonPrimitive
  | VoiceOpenaiJsonObject
  | readonly VoiceOpenaiJsonValue[];
export type VoiceOpenaiProviderExtensionValue = VoiceOpenaiJsonValue | object | undefined;
export interface VoiceOpenaiJsonObject {
  [key: string]: VoiceOpenaiProviderExtensionValue;
}
export type VoiceOpenaiProviderPayload = VoiceOpenaiJsonObject | object;
export type VoiceOpenaiProviderQuery = Record<string, VoiceOpenaiProviderExtensionValue>;
export interface VoiceOpenaiProviderResponse extends VoiceOpenaiJsonObject {}
export interface VoiceOpenaiProviderExtensionFields extends VoiceOpenaiJsonObject {}

export interface OpenAIVoiceProviderOptions {
  apiKey?: string;
  client?: OpenAI;
  model?: typeof OPENAI_REALTIME_V1_MODEL;
  voice?: string;
  transcriptionLanguage?: string;
  baseURL?: string;
  realtime?: OpenAIRealtimeFactory;
  sessionDefaults?: Partial<RealtimeSessionCreateRequest>;
}

export interface OpenAIRealtimeFactoryInput {
  client: OpenAI;
  model: typeof OPENAI_REALTIME_V1_MODEL;
}

export interface OpenAIRealtimeSocket {
  send(event: RealtimeClientEvent): void;
  close(props?: { code: number; reason: string }): void;
  on(event: "event", listener: (event: RealtimeServerEvent) => void): void;
  on(event: "error", listener: (error: unknown) => void): void;
}

export type OpenAIRealtimeFactory = (
  input: OpenAIRealtimeFactoryInput,
) => Promise<OpenAIRealtimeSocket>;
