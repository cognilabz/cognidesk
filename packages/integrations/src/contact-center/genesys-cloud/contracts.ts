import type {
  GenesysCloudFullApiGeneratedClient,
  GenesysCloudGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type GenesysCloudJsonPrimitive = string | number | boolean | null;
export type GenesysCloudJsonValue =
  | GenesysCloudJsonPrimitive
  | GenesysCloudJsonObject
  | readonly GenesysCloudJsonValue[];
export type GenesysCloudProviderExtensionValue = GenesysCloudJsonValue | object | undefined;

export interface GenesysCloudJsonObject {
  [key: string]: GenesysCloudProviderExtensionValue;
}

export type GenesysCloudProviderPayload = GenesysCloudJsonObject | object;
export type GenesysCloudProviderQuery = Record<string, GenesysCloudProviderExtensionValue>;
export interface GenesysCloudProviderResponse extends GenesysCloudJsonObject {}
export interface GenesysCloudProviderExtensionFields extends GenesysCloudJsonObject {}

export interface GenesysCloudContactCenterClientOptions {
  apiBaseUrl: string;
  accessToken?: string;
  defaultHandoffPath?: string;
  readinessPath?: string;
  fetch?: typeof fetch;
}

export interface GenesysCloudCredentialStatusInput {
  apiBaseUrl?: string;
  apiAccessConfigured?: boolean;
  routingConfigured?: boolean;
  openMessagingConfigured?: boolean;
}

export interface GenesysCloudHandoffInput {
  payload: GenesysCloudProviderPayload;
  path?: string;
  idempotencyKey?: string | undefined;
}

export interface GenesysCloudCreateCallbackInput {
  callback: GenesysCloudJsonObject;
  idempotencyKey?: string | undefined;
}

export type GenesysCloudHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD";

export interface GenesysCloudResource {
  [key: string]: GenesysCloudProviderExtensionValue;
}

export interface GenesysCloudClientRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: GenesysCloudProviderQuery | undefined;
  body?: GenesysCloudProviderPayload | undefined;
  contentType?: string | undefined;
  idempotencyKey?: string | undefined;
}

export interface GenesysCloudOperationRequestInput extends GenesysCloudClientRequestInput {}

export interface GenesysCloudCreateOpenMessageInput {
  integrationId: string;
  message: GenesysCloudJsonObject;
  idempotencyKey?: string | undefined;
}

export interface GenesysCloudCreateOpenEventInput {
  integrationId: string;
  event: GenesysCloudJsonObject;
  idempotencyKey?: string | undefined;
}

export interface GenesysCloudCreateOpenReceiptInput {
  integrationId: string;
  receipt: GenesysCloudJsonObject;
  idempotencyKey?: string | undefined;
}

export interface GenesysCloudGetConversationInput {
  conversationId: string;
}

export interface GenesysCloudListQueuesInput {
  pageSize?: number;
  pageNumber?: number;
  name?: string;
}

export interface GenesysCloudContactCenterClient {
  fullApi: GenesysCloudFullApiGeneratedClient;
  requestOperation: GenesysCloudGeneratedOperationCaller;
  createHandoff(input: GenesysCloudHandoffInput): Promise<GenesysCloudProviderResponse>;
  createCallback(input: GenesysCloudCreateCallbackInput): Promise<GenesysCloudProviderResponse>;
  createOpenMessage(input: GenesysCloudCreateOpenMessageInput): Promise<GenesysCloudProviderResponse>;
  createOpenEvent(input: GenesysCloudCreateOpenEventInput): Promise<GenesysCloudProviderResponse>;
  createOpenReceipt(input: GenesysCloudCreateOpenReceiptInput): Promise<GenesysCloudProviderResponse>;
  getConversation(input: GenesysCloudGetConversationInput): Promise<GenesysCloudProviderResponse>;
  listQueues(input?: GenesysCloudListQueuesInput): Promise<GenesysCloudProviderResponse>;
  readiness(): Promise<GenesysCloudProviderResponse>;
}

export interface GenesysCloudLiveCheckOptions extends GenesysCloudContactCenterClientOptions {
  client?: Pick<GenesysCloudContactCenterClient, "readiness">;
}
