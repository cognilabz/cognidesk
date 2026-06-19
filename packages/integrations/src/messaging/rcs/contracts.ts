export const RCS_MESSAGING_SCOPE = "https://www.googleapis.com/auth/rcsbusinessmessaging";
export const RCS_BUSINESS_COMMUNICATIONS_SCOPE = "https://www.googleapis.com/auth/businesscommunications";

export type RcsMessagingJsonPrimitive = string | number | boolean | null;
export type RcsMessagingJsonValue =
  | RcsMessagingJsonPrimitive
  | RcsMessagingJsonObject
  | readonly RcsMessagingJsonValue[];
export type RcsMessagingProviderExtensionValue = RcsMessagingJsonValue | object | undefined;
export interface RcsMessagingJsonObject {
  [key: string]: RcsMessagingProviderExtensionValue;
}
export type RcsMessagingProviderPayload = RcsMessagingJsonObject | object;
export type RcsMessagingProviderQuery = Record<string, RcsMessagingProviderExtensionValue>;
export interface RcsMessagingProviderResponse extends RcsMessagingJsonObject {}
export interface RcsMessagingProviderExtensionFields extends RcsMessagingJsonObject {}

export interface RcsMessagingClientOptions {
  agentId: string;
  agentName?: string;
  accessToken?: string;
  tokenProvider?: RcsAccessTokenProvider;
  serviceAccount?: RcsServiceAccountCredentials;
  messagingApiBaseUrl?: string;
  managementApiBaseUrl?: string;
  region?: string;
  fetch?: typeof fetch;
}

export type RcsAccessTokenProvider = (input: {
  scopes: string[];
  fetch: typeof fetch;
}) => Promise<string> | string;

export interface RcsServiceAccountCredentials {
  clientEmail: string;
  privateKey: string;
  tokenUri?: string;
  scopes?: string[];
}

export interface RcsCredentialStatusInput {
  agentId?: string;
  agentName?: string;
  accessToken?: string;
  serviceAccountClientEmail?: string;
  tokenProviderConfigured?: boolean;
  webhookClientToken?: string;
  scopes?: string[];
  expiresAt?: string;
}

export type RcsMessageTrafficType =
  | "MESSAGE_TRAFFIC_TYPE_UNSPECIFIED"
  | "AUTHENTICATION"
  | "TRANSACTION"
  | "PROMOTION"
  | "SERVICEREQUEST"
  | "ACKNOWLEDGEMENT";

export interface RcsAgentMessage {
  contentMessage?: RcsContentMessage;
  expireTime?: string;
  ttl?: string;
  messageTrafficType?: RcsMessageTrafficType;
  representative?: RcsMessagingJsonObject;
  [key: string]: RcsMessagingProviderExtensionValue;
}

export interface RcsContentMessage {
  text?: string;
  richCard?: RcsRichCard;
  contentInfo?: RcsContentInfo;
  uploadedRbmFile?: RcsUploadedRbmFile;
  suggestions?: RcsSuggestion[];
  [key: string]: RcsMessagingProviderExtensionValue;
}

export interface RcsRichCard {
  standaloneCard?: RcsMessagingJsonObject;
  carouselCard?: RcsMessagingJsonObject;
  [key: string]: RcsMessagingProviderExtensionValue;
}

export interface RcsContentInfo {
  fileUrl: string;
  thumbnailUrl?: string;
  forceRefresh?: boolean;
}

export interface RcsUploadedRbmFile {
  fileName: string;
  thumbnailName?: string;
}

export interface RcsFileResource {
  name?: string;
  fileUrl?: string;
  thumbnailUrl?: string;
  [key: string]: RcsMessagingProviderExtensionValue;
}

export interface RcsCreateFileInput {
  fileUrl: string;
  thumbnailUrl?: string;
}

export interface RcsUploadFileInput {
  body: BodyInit;
  contentType: string;
}

export interface RcsSuggestion {
  reply?: RcsMessagingJsonObject;
  action?: RcsMessagingJsonObject;
  [key: string]: RcsMessagingProviderExtensionValue;
}

export interface RcsSendMessageInput {
  phoneNumber: string;
  messageId: string;
  message: RcsAgentMessage;
}

export interface RcsSendTextInput {
  phoneNumber: string;
  messageId: string;
  text: string;
  suggestions?: RcsSuggestion[];
  messageTrafficType?: RcsMessageTrafficType;
  expireTime?: string;
  ttl?: string;
}

export interface RcsSendMediaInput {
  phoneNumber: string;
  messageId: string;
  contentInfo?: RcsContentInfo;
  uploadedRbmFile?: RcsUploadedRbmFile;
  suggestions?: RcsSuggestion[];
  messageTrafficType?: RcsMessageTrafficType;
  expireTime?: string;
  ttl?: string;
}

export interface RcsSendCardInput {
  phoneNumber: string;
  messageId: string;
  richCard: RcsRichCard;
  suggestions?: RcsSuggestion[];
  messageTrafficType?: RcsMessageTrafficType;
  expireTime?: string;
  ttl?: string;
}

export type RcsAgentEventType = "READ" | "IS_TYPING";

export interface RcsAgentEvent {
  eventType: RcsAgentEventType;
  messageId?: string;
  [key: string]: RcsMessagingProviderExtensionValue;
}

export interface RcsSendAgentEventInput {
  phoneNumber: string;
  eventId?: string;
  event: RcsAgentEvent;
}

export interface RcsCapabilityResponse {
  features?: string[];
  carrier?: string;
  [key: string]: RcsMessagingProviderExtensionValue;
}

export interface RcsAgentResource {
  name?: string;
  displayName?: string;
  rcsBusinessMessagingAgent?: RcsMessagingJsonObject;
  [key: string]: RcsMessagingProviderExtensionValue;
}

export interface RcsMessagingClient {
  sendMessage(input: RcsSendMessageInput): Promise<RcsAgentMessage>;
  sendText(input: RcsSendTextInput): Promise<RcsAgentMessage>;
  sendMedia(input: RcsSendMediaInput): Promise<RcsAgentMessage>;
  sendCard(input: RcsSendCardInput): Promise<RcsAgentMessage>;
  sendAgentEvent(input: RcsSendAgentEventInput): Promise<RcsAgentEvent>;
  sendReadReceipt(input: { phoneNumber: string; messageId: string; eventId?: string }): Promise<RcsAgentEvent>;
  sendTyping(input: { phoneNumber: string; eventId?: string }): Promise<RcsAgentEvent>;
  createFile(input: RcsCreateFileInput): Promise<RcsFileResource>;
  uploadFile(input: RcsUploadFileInput): Promise<RcsFileResource>;
  getCapabilities(input: { phoneNumber: string; requestId?: string }): Promise<RcsCapabilityResponse>;
  getAgent(agentName?: string): Promise<RcsAgentResource>;
  getAgentLaunch(agentName?: string): Promise<RcsMessagingProviderResponse>;
  getAgentVerification(agentName?: string): Promise<RcsMessagingProviderResponse>;
}

export interface RcsLiveCheckOptions extends RcsMessagingClientOptions {
  capabilityPhoneNumber?: string;
  client?: Pick<RcsMessagingClient, "getAgent" | "getAgentLaunch" | "getAgentVerification" | "getCapabilities">;
}

export interface ValidateRcsWebhookSignatureInput {
  clientToken: string;
  encodedMessageBody: string;
  signature: string;
}

export interface ParseRcsWebhookOptions {
  clientToken?: string;
  requireSignature?: boolean;
  verifier?: RcsWebhookVerifier;
  sharedSecret?: string;
  jwtVerifier?: RcsJwtVerifier;
}

export type RcsWebhookVerifier = (input: {
  request: Request;
  rawBody: string;
  envelope: RcsWebhookEnvelope;
  decodedBody: string;
}) => boolean | Promise<boolean>;

export type RcsJwtVerifier = (input: {
  token: string;
  request: Request;
  rawBody: string;
  envelope: RcsWebhookEnvelope;
  decodedBody: string;
}) => boolean | Promise<boolean>;

export interface RcsWebhookEnvelope {
  message?: {
    body?: string;
    data?: string;
    messageId?: string;
    publishTime?: string;
    attributes?: Record<string, string>;
    [key: string]: RcsMessagingProviderExtensionValue;
  };
  subscription?: string;
  clientToken?: string;
  secret?: string;
  [key: string]: RcsMessagingProviderExtensionValue;
}

export type RcsWebhookEventKind =
  | "verification"
  | "message"
  | "delivery-receipt"
  | "read-receipt"
  | "typing"
  | "subscription"
  | "suggestion"
  | "platform"
  | "unknown";

export interface RcsWebhookEvent {
  kind: RcsWebhookEventKind;
  rawBody: string;
  encodedMessageBody?: string;
  decodedBody?: string;
  envelope: RcsWebhookEnvelope;
  payload: RcsMessagingJsonObject;
}
