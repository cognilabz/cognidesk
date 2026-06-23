export type SipTransport = "udp" | "tcp" | "tls" | "ws" | "wss";
export type SipMediaEncryption = "none" | "srtp" | "dtls-srtp";
export type SipCallDirection = "inbound" | "outbound";
export type SipCallState =
  | "new"
  | "inviting"
  | "ringing"
  | "answered"
  | "early-media"
  | "held"
  | "transferring"
  | "completed"
  | "failed";
export type SipTransferStatus = "requested" | "accepted" | "completed" | "failed" | "cancelled";
export type SipRecordingStatus = "started" | "paused" | "resumed" | "completed" | "failed";
export type SipTranscriptionStatus = "partial" | "completed" | "failed";

export type SipVoiceJsonPrimitive = string | number | boolean | null;
export type SipVoiceJsonValue =
  | SipVoiceJsonPrimitive
  | SipVoiceJsonObject
  | readonly SipVoiceJsonValue[];
export type SipVoiceProviderExtensionValue = SipVoiceJsonValue | object | undefined;
export interface SipVoiceJsonObject {
  [key: string]: SipVoiceProviderExtensionValue;
}
export type SipVoiceProviderPayload = SipVoiceJsonObject | object;
export type SipVoiceProviderQuery = Record<string, SipVoiceProviderExtensionValue>;
export interface SipVoiceProviderResponse extends SipVoiceJsonObject {}
export interface SipVoiceProviderExtensionFields extends SipVoiceJsonObject {}

export interface SipVoiceConfig {
  registrarUri: string;
  domain: string;
  authUsername: string;
  authPassword: string;
  proxyUri?: string;
  outboundProxyUri?: string;
  transport?: SipTransport;
  tlsEnabled?: boolean;
  srtpEnabled?: boolean;
  mediaEncryption?: SipMediaEncryption;
  webhookCallbackUrl?: string;
  webhookSharedSecret?: string;
  webhookHmacSecret?: string;
  localAddressOfRecord?: string;
  userAgent?: string;
  metadata?: SipVoiceProviderExtensionFields;
}

export interface SipCredentialStatusInput {
  registrarUri?: string;
  proxyUri?: string;
  outboundProxyUri?: string;
  domain?: string;
  authUsername?: string;
  authPassword?: string;
  tlsEnabled?: boolean;
  srtpEnabled?: boolean;
  mediaEncryption?: SipMediaEncryption;
  webhookCallbackUrl?: string;
  webhookSharedSecret?: string;
  webhookHmacSecret?: string;
}

export interface SipAddress {
  uri: string;
  displayName?: string;
}

export interface SipSessionDescription {
  type: "offer" | "answer";
  sdp: string;
  contentType?: "application/sdp";
  metadata?: SipVoiceProviderExtensionFields;
}

export interface SipCallReference {
  callId: string;
  providerCallId?: string;
  dialogId?: string;
}

export interface SipCallControlHeaders {
  headers?: Record<string, string>;
  metadata?: SipVoiceProviderExtensionFields;
}

export interface SipOutboundCallInput extends SipCallControlHeaders {
  to: SipAddress | string;
  from: SipAddress | string;
  offer?: SipSessionDescription;
  callbackUrl?: string;
  transport?: SipTransport;
  mediaEncryption?: SipMediaEncryption;
}

export interface SipAnswerCallInput extends SipCallReference, SipCallControlHeaders {
  answer?: SipSessionDescription;
}

export interface SipRejectCallInput extends SipCallReference, SipCallControlHeaders {
  statusCode?: number;
  reason?: string;
}

export interface SipHangupCallInput extends SipCallReference, SipCallControlHeaders {
  reason?: string;
}

export interface SipTransferCallInput extends SipCallReference, SipCallControlHeaders {
  target: SipAddress | string;
  mode?: "blind" | "attended";
  replacesCallId?: string;
}

export interface SipRecordingControlInput extends SipCallReference, SipCallControlHeaders {
  recordingId?: string;
}

export interface SipDtmfInput extends SipCallReference, SipCallControlHeaders {
  digits: string;
  durationMs?: number;
}

export interface SipMediaSessionUpdateInput extends SipCallReference, SipCallControlHeaders {
  offer?: SipSessionDescription;
  answer?: SipSessionDescription;
  reason?: "hold" | "resume" | "renegotiate";
}

export interface SipCallControlResult {
  callId: string;
  providerCallId?: string;
  dialogId?: string;
  state?: SipCallState;
  localDescription?: SipSessionDescription;
  remoteDescription?: SipSessionDescription;
  headers?: Record<string, string>;
  raw?: unknown;
}

export interface SipReadinessResult {
  ok: boolean;
  registrarReachable?: boolean;
  registered?: boolean;
  proxyReachable?: boolean;
  tlsReady?: boolean;
  srtpReady?: boolean;
  webhookReachable?: boolean;
  details?: SipVoiceJsonObject;
  missing?: string[];
}

export interface SipStackReadinessContext {
  config: SipVoiceConfig;
  signal?: AbortSignal;
}

export interface SipStackGateway {
  checkReadiness?(context: SipStackReadinessContext): Promise<SipReadinessResult> | SipReadinessResult;
  createOutboundCall?(input: SipOutboundCallInput, context: { config: SipVoiceConfig; signal?: AbortSignal }): Promise<SipCallControlResult> | SipCallControlResult;
  answerCall?(input: SipAnswerCallInput, context: { config: SipVoiceConfig; signal?: AbortSignal }): Promise<SipCallControlResult> | SipCallControlResult;
  rejectCall?(input: SipRejectCallInput, context: { config: SipVoiceConfig; signal?: AbortSignal }): Promise<SipCallControlResult> | SipCallControlResult;
  hangupCall?(input: SipHangupCallInput, context: { config: SipVoiceConfig; signal?: AbortSignal }): Promise<SipCallControlResult> | SipCallControlResult;
  transferCall?(input: SipTransferCallInput, context: { config: SipVoiceConfig; signal?: AbortSignal }): Promise<SipCallControlResult> | SipCallControlResult;
  startRecording?(input: SipRecordingControlInput, context: { config: SipVoiceConfig; signal?: AbortSignal }): Promise<SipCallControlResult> | SipCallControlResult;
  stopRecording?(input: SipRecordingControlInput, context: { config: SipVoiceConfig; signal?: AbortSignal }): Promise<SipCallControlResult> | SipCallControlResult;
  sendDtmf?(input: SipDtmfInput, context: { config: SipVoiceConfig; signal?: AbortSignal }): Promise<SipCallControlResult> | SipCallControlResult;
  updateMediaSession?(input: SipMediaSessionUpdateInput, context: { config: SipVoiceConfig; signal?: AbortSignal }): Promise<SipCallControlResult> | SipCallControlResult;
}

export interface SipVoiceClientOptions {
  config: SipVoiceConfig;
  gateway?: SipStackGateway;
}

export interface SipVoiceClient {
  checkReadiness(context?: { signal?: AbortSignal }): Promise<SipReadinessResult>;
  createOutboundCall(input: SipOutboundCallInput, context?: { signal?: AbortSignal }): Promise<SipCallControlResult>;
  answerCall(input: SipAnswerCallInput, context?: { signal?: AbortSignal }): Promise<SipCallControlResult>;
  rejectCall(input: SipRejectCallInput, context?: { signal?: AbortSignal }): Promise<SipCallControlResult>;
  hangupCall(input: SipHangupCallInput, context?: { signal?: AbortSignal }): Promise<SipCallControlResult>;
  transferCall(input: SipTransferCallInput, context?: { signal?: AbortSignal }): Promise<SipCallControlResult>;
  startRecording(input: SipRecordingControlInput, context?: { signal?: AbortSignal }): Promise<SipCallControlResult>;
  stopRecording(input: SipRecordingControlInput, context?: { signal?: AbortSignal }): Promise<SipCallControlResult>;
  sendDtmf(input: SipDtmfInput, context?: { signal?: AbortSignal }): Promise<SipCallControlResult>;
  updateMediaSession(input: SipMediaSessionUpdateInput, context?: { signal?: AbortSignal }): Promise<SipCallControlResult>;
}

export interface SipLiveCheckOptions {
  config: SipVoiceConfig;
  gateway?: Pick<SipStackGateway, "checkReadiness">;
}

export type SipWebhookEvent =
  | SipCallStatusWebhookEvent
  | SipCallTransferWebhookEvent
  | SipRecordingWebhookEvent
  | SipTranscriptionWebhookEvent;

export interface SipWebhookBaseEvent {
  type: SipWebhookEvent["type"];
  callId?: string;
  providerCallId?: string;
  occurredAt?: string;
  raw: SipVoiceProviderResponse;
}

export interface SipCallStatusWebhookEvent extends Omit<SipWebhookBaseEvent, "type"> {
  type: "call.status";
  status: SipCallState;
  direction?: SipCallDirection;
  from?: string;
  to?: string;
  reason?: string;
  sdp?: string;
}

export interface SipCallTransferWebhookEvent extends Omit<SipWebhookBaseEvent, "type"> {
  type: "call.transfer";
  transferStatus: SipTransferStatus;
  target?: string;
  reason?: string;
}

export interface SipRecordingWebhookEvent extends Omit<SipWebhookBaseEvent, "type"> {
  type: "recording";
  recordingId?: string;
  recordingStatus: SipRecordingStatus;
  recordingUrl?: string;
  durationSeconds?: number;
}

export interface SipTranscriptionWebhookEvent extends Omit<SipWebhookBaseEvent, "type"> {
  type: "transcription";
  transcriptionId?: string;
  transcriptionStatus: SipTranscriptionStatus;
  speaker?: "customer" | "agent" | "assistant" | "unknown";
  text?: string;
  confidence?: number;
  isFinal?: boolean;
}

export interface ParseSipVoiceWebhookOptions {
  sharedSecret?: string;
  sharedSecretHeader?: string;
  requireSharedSecret?: boolean;
  hmacSecret?: string;
  signatureHeader?: string;
  signatureAlgorithm?: "sha1" | "sha256" | "sha512";
  requireSignature?: boolean;
  timestampHeader?: string;
}
