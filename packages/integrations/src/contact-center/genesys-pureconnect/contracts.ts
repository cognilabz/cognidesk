export type GenesysPureConnectJsonPrimitive = string | number | boolean | null;
export type GenesysPureConnectJsonValue =
  | GenesysPureConnectJsonPrimitive
  | GenesysPureConnectJsonObject
  | readonly GenesysPureConnectJsonValue[];
export type GenesysPureConnectProviderExtensionValue = GenesysPureConnectJsonValue | object | undefined;

export interface GenesysPureConnectJsonObject {
  [key: string]: GenesysPureConnectProviderExtensionValue;
}

export type GenesysPureConnectProviderPayload = GenesysPureConnectJsonObject | object;
export type GenesysPureConnectProviderQuery = Record<string, GenesysPureConnectProviderExtensionValue>;
export interface GenesysPureConnectProviderResponse extends GenesysPureConnectJsonObject {}
export interface GenesysPureConnectProviderExtensionFields extends GenesysPureConnectJsonObject {}

export interface GenesysPureConnectContactCenterClientOptions {
  icwsBaseUrl: string;
  authorizationHeader?: string;
  sessionId?: string;
  csrfToken?: string;
  sessionCookie?: string;
  defaultHandoffPath?: string;
  readinessPath?: string;
  fetch?: typeof fetch;
}

export interface GenesysPureConnectCredentialStatusInput {
  icwsBaseUrl?: string;
  sessionConfigured?: boolean;
  routingConfigured?: boolean;
}

export interface GenesysPureConnectCreateConnectionInput {
  payload: GenesysPureConnectProviderPayload;
  include?: string[];
  acceptLanguage?: string;
}

export interface GenesysPureConnectHandoffInput {
  payload: GenesysPureConnectProviderPayload;
  path?: string;
  idempotencyKey?: string | undefined;
}

export type GenesysPureConnectHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface GenesysPureConnectRequestInput {
  method: GenesysPureConnectHttpMethod;
  path: string;
  body?: BodyInit | GenesysPureConnectProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  acceptLanguage?: string | undefined;
  idempotencyKey?: string | undefined;
  returnResponse?: boolean | undefined;
}

export interface GenesysPureConnectSessionInput {
  sessionId?: string;
  csrfToken?: string;
  sessionCookie?: string;
}

export interface GenesysPureConnectSessionRequestInput extends GenesysPureConnectRequestInput, GenesysPureConnectSessionInput {}

export interface GenesysPureConnectInteractionInput extends GenesysPureConnectSessionInput {
  interactionId: string;
  query?: Record<string, string | number | boolean | undefined>;
}

export interface GenesysPureConnectInteractionBodyInput extends GenesysPureConnectSessionInput {
  interactionId?: string;
  payload: GenesysPureConnectProviderPayload;
}

export interface GenesysPureConnectMessagingSubscriptionInput extends GenesysPureConnectSessionInput {
  interactionId: string;
  mediaType?: "callback" | "chat" | "email";
  payload?: GenesysPureConnectProviderPayload;
}

export interface GenesysPureConnectRecordingExportUriInput extends GenesysPureConnectSessionInput {
  recordingId: string;
  attachmentId?: string | number;
}

export interface GenesysPureConnectConfigurationUserInput extends GenesysPureConnectSessionInput {
  userId: string;
  select?: string[];
}

export interface GenesysPureConnectContactCenterClient {
  request(input: GenesysPureConnectRequestInput & { returnResponse?: false }): Promise<GenesysPureConnectJsonObject>;
  request(input: GenesysPureConnectRequestInput & { returnResponse: true }): Promise<Response>;
  sessionRequest<T = GenesysPureConnectJsonObject>(input: GenesysPureConnectSessionRequestInput & { returnResponse?: false }): Promise<T>;
  sessionRequest(input: GenesysPureConnectSessionRequestInput & { returnResponse: true }): Promise<Response>;
  createConnection(input: GenesysPureConnectCreateConnectionInput): Promise<GenesysPureConnectProviderResponse>;
  createInteraction(input: GenesysPureConnectInteractionBodyInput): Promise<GenesysPureConnectProviderResponse>;
  getInteraction(input: GenesysPureConnectInteractionInput): Promise<GenesysPureConnectProviderResponse>;
  updateInteraction(input: Required<Pick<GenesysPureConnectInteractionBodyInput, "interactionId">> & GenesysPureConnectInteractionBodyInput): Promise<GenesysPureConnectProviderResponse>;
  createConference(input: GenesysPureConnectInteractionBodyInput): Promise<GenesysPureConnectProviderResponse>;
  createConsult(input: Required<Pick<GenesysPureConnectInteractionBodyInput, "interactionId">> & GenesysPureConnectInteractionBodyInput): Promise<GenesysPureConnectProviderResponse>;
  getMessages(input?: GenesysPureConnectSessionInput): Promise<GenesysPureConnectProviderResponse>;
  subscribeInteraction(input: GenesysPureConnectMessagingSubscriptionInput): Promise<GenesysPureConnectProviderResponse>;
  unsubscribeInteraction(input: GenesysPureConnectMessagingSubscriptionInput): Promise<GenesysPureConnectProviderResponse>;
  getRecordingExportUri(input: GenesysPureConnectRecordingExportUriInput): Promise<GenesysPureConnectProviderResponse>;
  getConfigurationUser(input: GenesysPureConnectConfigurationUserInput): Promise<GenesysPureConnectProviderResponse>;
  createHandoff(input: GenesysPureConnectHandoffInput): Promise<GenesysPureConnectProviderResponse>;
  readiness(): Promise<GenesysPureConnectProviderResponse>;
}

export interface GenesysPureConnectLiveCheckOptions extends GenesysPureConnectContactCenterClientOptions {
  client?: Pick<GenesysPureConnectContactCenterClient, "readiness">;
}
