import type {
  AmazonConnectFullApiGeneratedClient,
  AmazonConnectGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type AmazonConnectJsonPrimitive = string | number | boolean | null;
export type AmazonConnectJsonValue =
  | AmazonConnectJsonPrimitive
  | AmazonConnectJsonObject
  | readonly AmazonConnectJsonValue[];
export type AmazonConnectProviderExtensionValue = AmazonConnectJsonValue | object | undefined;
export interface AmazonConnectJsonObject {
  [key: string]: AmazonConnectProviderExtensionValue;
}
export type AmazonConnectProviderPayload = AmazonConnectJsonObject | object;
export type AmazonConnectProviderQuery = Record<string, AmazonConnectProviderExtensionValue>;
export interface AmazonConnectProviderResponse extends AmazonConnectJsonObject {}
export interface AmazonConnectProviderExtensionFields extends AmazonConnectJsonObject {}

export interface AmazonConnectClientOptions {
  region: string;
  instanceId: string;
  authorizationHeader?: string;
  signedHeaders?: Record<string, string>;
  endpointOverrides?: Record<string, string>;
  fetch?: typeof fetch;
}

export interface AmazonConnectCredentialStatusInput {
  region?: string;
  instanceId?: string;
  apiAccessConfigured?: boolean;
}

export interface AmazonConnectTaskReference {
  arn?: string;
  status?: string;
  statusReason?: string;
  type: "URL" | "NUMBER" | "STRING" | "DATE" | "EMAIL";
  value: string;
}

export interface AmazonConnectStartTaskInput {
  name: string;
  description?: string;
  clientToken?: string;
  contactFlowId?: string;
  quickConnectId?: string;
  taskTemplateId?: string;
  previousContactId?: string;
  relatedContactId?: string;
  scheduledTime?: number;
  attributes?: Record<string, string>;
  references?: Record<string, AmazonConnectTaskReference>;
  segmentAttributes?: AmazonConnectJsonObject;
  attachments?: Array<{ fileName: string; s3Url: string }>;
}

export interface AmazonConnectStartTaskResult {
  contactId?: string;
  raw: AmazonConnectProviderResponse;
}

export interface AmazonConnectChatMessage {
  content: string;
  contentType: "text/plain" | "text/markdown" | "application/json" | "application/vnd.amazonaws.connect.message.interactive.response" | string;
}

export interface AmazonConnectStartChatInput {
  contactFlowId: string;
  participantDetails: { displayName: string };
  attributes?: Record<string, string>;
  clientToken?: string;
  customerId?: string;
  chatDurationInMinutes?: number;
  initialMessage?: AmazonConnectChatMessage;
  supportedMessagingContentTypes?: string[];
  relatedContactId?: string;
  persistentChat?: AmazonConnectJsonObject;
  participantConfiguration?: AmazonConnectJsonObject;
  segmentAttributes?: AmazonConnectJsonObject;
  disconnectOnCustomerExit?: ["AGENT"];
}

export interface AmazonConnectStartChatResult {
  contactId?: string;
  participantId?: string;
  participantToken?: string;
  continuedFromContactId?: string;
  raw: AmazonConnectProviderResponse;
}

export interface AmazonConnectParticipantConnectionInput {
  participantToken: string;
  type?: Array<"WEBSOCKET" | "CONNECTION_CREDENTIALS" | "WEBRTC_CONNECTION" | string>;
  connectParticipant?: boolean;
}

export interface AmazonConnectParticipantMessageInput {
  connectionToken: string;
  content: string;
  contentType: "text/plain" | "text/markdown" | "application/json" | "application/vnd.amazonaws.connect.message.interactive.response" | string;
  clientToken?: string;
}

export interface AmazonConnectParticipantEventInput {
  connectionToken: string;
  contentType:
    | "application/vnd.amazonaws.connect.event.typing"
    | "application/vnd.amazonaws.connect.event.message.delivered"
    | "application/vnd.amazonaws.connect.event.message.read"
    | string;
  content?: string;
  clientToken?: string;
}

export interface AmazonConnectTranscriptInput {
  connectionToken: string;
  contactId?: string;
  maxResults?: number;
  nextToken?: string;
  scanDirection?: "FORWARD" | "BACKWARD";
  sortOrder?: "DESCENDING" | "ASCENDING";
  startPosition?: AmazonConnectJsonObject;
}

export interface AmazonConnectTransferContactInput {
  contactId: string;
  contactFlowId: string;
  queueId?: string;
  userId?: string;
  clientToken?: string;
}

export type AmazonConnectHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface AmazonConnectResource {
  [key: string]: AmazonConnectProviderExtensionValue;
}

export interface AmazonConnectOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: AmazonConnectProviderQuery | undefined;
  body?: AmazonConnectProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  bearerToken?: string | undefined;
}

export interface AmazonConnectContactCenterClient {
  fullApi: AmazonConnectFullApiGeneratedClient;
  requestOperation: AmazonConnectGeneratedOperationCaller;
  startTaskContact(input: AmazonConnectStartTaskInput): Promise<AmazonConnectStartTaskResult>;
  startChatContact(input: AmazonConnectStartChatInput): Promise<AmazonConnectStartChatResult>;
  createParticipantConnection(input: AmazonConnectParticipantConnectionInput): Promise<AmazonConnectProviderResponse>;
  sendParticipantMessage(input: AmazonConnectParticipantMessageInput): Promise<AmazonConnectProviderResponse>;
  sendParticipantEvent(input: AmazonConnectParticipantEventInput): Promise<AmazonConnectProviderResponse>;
  getParticipantTranscript(input: AmazonConnectTranscriptInput): Promise<AmazonConnectProviderResponse>;
  transferContact(input: AmazonConnectTransferContactInput): Promise<AmazonConnectProviderResponse>;
  describeInstance(): Promise<AmazonConnectProviderResponse>;
}

export interface AmazonConnectLiveCheckOptions extends AmazonConnectClientOptions {
  client?: Pick<AmazonConnectContactCenterClient, "describeInstance">;
}
