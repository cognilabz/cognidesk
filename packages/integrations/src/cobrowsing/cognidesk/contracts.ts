export type CobrowsingSessionStatus = "created" | "started" | "joined" | "ended";
export type CobrowsingParticipantRole = "customer" | "agent" | "observer";
export type CobrowsingConsentMode = "required" | "optional" | "not-required";
export type CobrowsingRecordingMode = "disabled" | "allowed" | "required";

export type CobrowsingSessionJsonPrimitive = string | number | boolean | null;
export type CobrowsingSessionJsonValue =
  | CobrowsingSessionJsonPrimitive
  | CobrowsingSessionJsonObject
  | readonly CobrowsingSessionJsonValue[];
export type CobrowsingSessionProviderExtensionValue = CobrowsingSessionJsonValue | object | undefined;
export interface CobrowsingSessionJsonObject {
  [key: string]: CobrowsingSessionProviderExtensionValue;
}
export type CobrowsingSessionProviderPayload = CobrowsingSessionJsonObject | object;
export type CobrowsingSessionProviderQuery = Record<string, CobrowsingSessionProviderExtensionValue>;
export interface CobrowsingSessionProviderResponse extends CobrowsingSessionJsonObject {}
export interface CobrowsingSessionProviderExtensionFields extends CobrowsingSessionJsonObject {}

export interface CobrowsingConsentPolicy {
  mode: CobrowsingConsentMode;
  promptId?: string;
  evidenceRequired?: boolean;
  retentionDays?: number;
}

export interface CobrowsingRecordingPolicy {
  mode: CobrowsingRecordingMode;
  retentionDays?: number;
  requireSeparateConsent?: boolean;
}

export interface CobrowsingRedactionPolicy {
  enabled: boolean;
  selectors?: string[];
  fieldNames?: string[];
  maskText?: string;
}

export interface CobrowsingSecurityPolicy {
  allowedOrigins: string[];
  consent: CobrowsingConsentPolicy;
  recording: CobrowsingRecordingPolicy;
  redaction: CobrowsingRedactionPolicy;
}

export interface CobrowsingCredentialStatusInput {
  sessionStoreConfigured?: boolean;
  sessionTokenSigningConfigured?: boolean;
  consentPolicyConfigured?: boolean;
  recordingPolicyConfigured?: boolean;
  redactionPolicyConfigured?: boolean;
  allowedOrigins?: string[];
  webhookVerifierConfigured?: boolean;
  scopes?: string[];
}

export interface CobrowsingSession {
  id: string;
  status: CobrowsingSessionStatus;
  origin: string;
  allowedOrigins: string[];
  conversationId?: string;
  customerId?: string;
  agentId?: string;
  createdAt: string;
  updatedAt: string;
  startedAt?: string;
  joinedAt?: string;
  endedAt?: string;
  endedBy?: string;
  endReason?: string;
  consent: CobrowsingConsentPolicy;
  recording: CobrowsingRecordingPolicy;
  redaction: CobrowsingRedactionPolicy;
  participants: CobrowsingSessionParticipant[];
  metadata?: CobrowsingSessionProviderExtensionFields;
}

export interface CobrowsingSessionParticipant {
  id: string;
  role: CobrowsingParticipantRole;
  joinedAt: string;
  displayName?: string;
  metadata?: CobrowsingSessionProviderExtensionFields;
}

export interface CobrowsingSessionStore {
  create(session: CobrowsingSession): Promise<CobrowsingSession>;
  get(sessionId: string): Promise<CobrowsingSession | undefined>;
  update(session: CobrowsingSession): Promise<CobrowsingSession>;
}

export interface CreateCobrowsingSessionInput {
  id?: string;
  origin: string;
  conversationId?: string;
  customerId?: string;
  agentId?: string;
  policy?: Partial<CobrowsingSecurityPolicy>;
  metadata?: CobrowsingSessionProviderExtensionFields;
}

export interface JoinCobrowsingSessionInput {
  sessionId: string;
  participantId: string;
  role: CobrowsingParticipantRole;
  origin: string;
  sessionToken?: string;
  displayName?: string;
  metadata?: CobrowsingSessionProviderExtensionFields;
}

export interface EndCobrowsingSessionInput {
  sessionId: string;
  endedBy?: string;
  reason?: string;
}

export interface CobrowsingSessionClientOptions {
  store: CobrowsingSessionStore;
  policy: CobrowsingSecurityPolicy;
  sessionTokenSharedSecret?: string;
  now?: () => Date;
  idFactory?: () => string;
}

export interface CobrowsingSessionTokenClaims {
  sessionId: string;
  origin: string;
  participantId?: string;
  role?: CobrowsingParticipantRole;
  audience?: string;
  issuedAt: number;
  expiresAt: number;
  metadata?: CobrowsingSessionProviderExtensionFields;
}

export interface CreateCobrowsingSessionTokenInput {
  sharedSecret: string;
  claims: Omit<CobrowsingSessionTokenClaims, "issuedAt" | "expiresAt"> & {
    issuedAt?: number;
    expiresAt?: number;
    expiresInSeconds?: number;
  };
}

export interface ValidateCobrowsingSessionTokenInput {
  sharedSecret: string;
  token: string;
  nowSeconds?: number;
  expectedSessionId?: string;
  expectedAudience?: string;
  allowedOrigins?: string[];
}

export type CobrowsingSessionTokenValidation =
  | { valid: true; claims: CobrowsingSessionTokenClaims }
  | { valid: false; reason: string };

export type NormalizedCobrowsingEventType =
  | "cobrowse.session.started"
  | "cobrowse.session.joined"
  | "cobrowse.session.ended"
  | "cobrowse.control.requested"
  | "cobrowse.redaction.applied"
  | "cobrowse.redaction.cleared";

export interface RawCobrowsingSessionEvent {
  id?: string;
  type?: string;
  eventType?: string;
  createdAt?: string;
  timestamp?: string;
  data?: CobrowsingSessionJsonObject;
  [key: string]: CobrowsingSessionProviderExtensionValue;
}

export interface NormalizedCobrowsingEvent {
  id: string;
  type: NormalizedCobrowsingEventType;
  sessionId: string;
  occurredAt: string;
  participantId?: string;
  role?: CobrowsingParticipantRole;
  origin?: string;
  controlRequestId?: string;
  redactionRuleId?: string;
  rawType: string;
  raw: RawCobrowsingSessionEvent;
  data: CobrowsingSessionJsonObject;
}

export interface ValidateCobrowsingSignedRequestInput {
  sharedSecret: string;
  rawBody: string | Buffer;
  signatureHeader: string;
  nowSeconds?: number;
  timestampToleranceSeconds?: number;
}

export interface ParseCobrowsingWebhookRequestOptions {
  sharedSecret?: string;
  signatureHeaderName?: string;
  requireSignature?: boolean;
  verifier?: (input: {
    request: Request;
    rawBody: string;
    signatureHeader: string | null;
  }) => boolean | Promise<boolean>;
  nowSeconds?: number;
  timestampToleranceSeconds?: number;
}

export interface CobrowsingSignedWebhookRequest {
  rawBody: string;
  contentType?: string;
  signatureHeader?: string;
  verified: boolean;
  json: RawCobrowsingSessionEvent;
  event: NormalizedCobrowsingEvent;
}
