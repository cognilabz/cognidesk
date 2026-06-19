import type {
  VonageGeneratedOperationCaller,
  VonageVoiceFullApiGeneratedClient,
} from "./full-api-client.generated.js";

export type VonageVoiceJsonPrimitive = string | number | boolean | null;
export type VonageVoiceJsonValue =
  | VonageVoiceJsonPrimitive
  | VonageVoiceJsonObject
  | readonly VonageVoiceJsonValue[];
export type VonageVoiceProviderExtensionValue = VonageVoiceJsonValue | object | undefined;
export interface VonageVoiceJsonObject {
  [key: string]: VonageVoiceProviderExtensionValue;
}
export type VonageVoiceProviderPayload = VonageVoiceJsonObject | object;
export type VonageVoiceProviderQuery = Record<string, VonageVoiceProviderExtensionValue>;
export interface VonageVoiceProviderResponse extends VonageVoiceJsonObject {}
export interface VonageVoiceProviderExtensionFields extends VonageVoiceJsonObject {}

export interface VonageVoiceClientOptions {
  applicationId: string;
  privateKey?: string;
  apiKey?: string;
  apiSecret?: string;
  defaultEventUrl?: string[];
  apiBaseUrl?: string;
  restBaseUrl?: string;
  jwtFactory?: () => string | Promise<string>;
  fetch?: typeof fetch;
}

export interface VonageCredentialStatusInput {
  applicationId?: string;
  privateKeyConfigured?: boolean;
  apiKeyConfigured?: boolean;
  fromNumber?: string;
  webhookSignatureSecretConfigured?: boolean;
  answerUrlConfigured?: boolean;
  eventUrlConfigured?: boolean;
  fallbackAnswerUrlConfigured?: boolean;
  signedCallbacksEnabled?: boolean;
  voiceApplicationRegion?: string;
}

export type VonageEndpoint =
  | { type: "phone"; number: string; dtmfAnswer?: string }
  | { type: "sip"; uri: string; headers?: Record<string, string> }
  | { type: "app"; user: string }
  | { type: "websocket"; uri: string; "content-type"?: string; headers?: Record<string, string> };

export interface VonageOutboundCallInput {
  to: VonageEndpoint[];
  from?: VonageEndpoint;
  answerUrl?: string[];
  ncco?: VonageNccoAction[];
  answerMethod?: "GET" | "POST";
  eventUrl?: string[];
  eventMethod?: "GET" | "POST";
  machineDetection?: "continue" | "hangup";
  advancedMachineDetection?: VonageVoiceJsonObject;
  randomFromNumber?: boolean;
  lengthTimer?: number;
  ringingTimer?: number;
}

export interface VonageCallResource {
  uuid: string;
  status?: string;
  direction?: string;
  conversation_uuid?: string;
  [key: string]: VonageVoiceProviderExtensionValue;
}

export type VonageCallAction =
  { action: "transfer"; destination: { type: "ncco"; ncco: VonageNccoAction[] } | { type: "url"; url: string[] } };

export type VonageHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface VonageResource {
  [key: string]: VonageVoiceProviderExtensionValue;
}

export interface VonageOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: URLSearchParams | Record<string, string | number | boolean | null | undefined | Array<string | number | boolean>>;
  headers?: Record<string, string> | undefined;
  json?: VonageVoiceJsonObject | readonly VonageVoiceJsonValue[] | undefined;
  form?: URLSearchParams | FormData | undefined;
  body?: BodyInit | undefined;
  signal?: AbortSignal | undefined;
}

export interface VonageVoiceClient {
  fullApi: VonageVoiceFullApiGeneratedClient;
  requestOperation: VonageGeneratedOperationCaller;
  createOutboundCall(input: VonageOutboundCallInput): Promise<VonageCallResource>;
  fetchCall(uuid: string): Promise<VonageCallResource>;
  updateCall(uuid: string, input: VonageCallAction): Promise<VonageVoiceProviderResponse>;
}

export interface VonageVoiceLiveCheckOptions extends VonageVoiceClientOptions {
  testCallUuid?: string;
  client?: Pick<VonageVoiceClient, "fetchCall">;
}

export interface VonageWebhook {
  kind: "answer" | "event" | "fallback";
  body: VonageVoiceJsonObject;
  verified: boolean;
  jwtClaims?: VonageVoiceJsonObject;
  originalRequest?: VonageVoiceJsonObject;
}

export interface ParseVonageWebhookOptions {
  kind?: "answer" | "event" | "fallback";
  signatureSecret?: string;
  expectedApiKey?: string;
  requireSignature?: boolean;
  verifyPayloadHash?: boolean;
}

export interface VonageJwtOptions {
  applicationId: string;
  privateKey: string;
  ttlSeconds?: number;
  now?: () => number;
  jti?: string;
}

export type VonageNccoAction =
  | { action: "talk"; text: string; language?: string; style?: number; bargeIn?: boolean }
  | { action: "connect"; endpoint: VonageEndpoint[]; from?: string; eventUrl?: string[]; eventMethod?: "GET" | "POST"; timeout?: number }
  | { action: "input"; type: string[]; eventUrl: string[]; eventMethod?: "GET" | "POST"; speech?: VonageVoiceJsonObject; dtmf?: VonageVoiceJsonObject }
  | { action: "record"; eventUrl: string[]; eventMethod?: "GET" | "POST"; split?: "conversation"; format?: "mp3" | "wav" | "ogg" };
