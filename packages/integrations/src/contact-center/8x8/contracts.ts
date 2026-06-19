import type {
  EightByEightContactCenterApiGeneratedClient,
  EightByEightGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type EightByEightContactCenterJsonPrimitive = string | number | boolean | null;
export type EightByEightContactCenterJsonValue =
  | EightByEightContactCenterJsonPrimitive
  | EightByEightContactCenterJsonObject
  | readonly EightByEightContactCenterJsonValue[];
export type EightByEightContactCenterProviderExtensionValue = EightByEightContactCenterJsonValue | object | undefined;
export interface EightByEightContactCenterJsonObject {
  [key: string]: EightByEightContactCenterProviderExtensionValue;
}
export type EightByEightContactCenterProviderPayload = EightByEightContactCenterJsonObject | object;
export type EightByEightContactCenterProviderQuery = Record<string, EightByEightContactCenterProviderExtensionValue>;
export interface EightByEightContactCenterProviderResponse extends EightByEightContactCenterJsonObject {}
export interface EightByEightContactCenterProviderExtensionFields extends EightByEightContactCenterJsonObject {}

export interface EightByEightContactCenterClientOptions {
  apiBaseUrl: string;
  accessToken?: string;
  authorizationHeader?: string;
  defaultHandoffPath?: string;
  readinessPath?: string;
  fetch?: typeof fetch;
}

export interface EightByEightCredentialStatusInput {
  apiBaseUrl?: string;
  apiAccessConfigured?: boolean;
  routingConfigured?: boolean;
}

export interface EightByEightHandoffInput {
  payload: EightByEightContactCenterProviderPayload;
  path?: string;
  idempotencyKey?: string | undefined;
}

export interface EightByEightTenantInput {
  tenantId: string;
}

export interface EightByEightPlacePhoneCallInput extends EightByEightTenantInput {
  payload: EightByEightContactCenterProviderPayload;
  idempotencyKey?: string | undefined;
}

export interface EightByEightInteractionInput extends EightByEightTenantInput {
  interactionId: string;
}

export interface EightByEightAgentInteractionInput extends EightByEightInteractionInput {
  agentId: string;
}

export interface EightByEightTransactionCodesInput extends EightByEightAgentInteractionInput {
  payload: EightByEightContactCenterProviderPayload;
}

export interface EightByEightAgentLineInput extends EightByEightTenantInput {
  agentId: string;
  lineNo?: string | number;
}

export interface EightByEightAgentStatusInput extends EightByEightTenantInput {
  agentId: string;
  payload: EightByEightContactCenterProviderPayload;
}

export interface EightByEightListAgentStatusesInput extends EightByEightTenantInput {
  query?: EightByEightContactCenterProviderQuery | undefined;
}

export interface EightByEightGetAgentStatusInput extends EightByEightTenantInput {
  agentId: string;
}

export interface EightByEightBulkAgentStatusesInput extends EightByEightTenantInput {
  payload: EightByEightContactCenterProviderPayload;
}

export type EightByEightHttpMethod = "DELETE" | "GET" | "POST" | "PUT" | "PATCH" | "HEAD" | "OPTIONS";

export interface EightByEightResource {
  [key: string]: EightByEightContactCenterProviderExtensionValue;
}

export interface EightByEightOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: EightByEightContactCenterProviderQuery | undefined;
  body?: EightByEightContactCenterProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  idempotencyKey?: string | undefined;
  signal?: AbortSignal | undefined;
}

export interface EightByEightContactCenterClient {
  fullApi: EightByEightContactCenterApiGeneratedClient;
  requestOperation: EightByEightGeneratedOperationCaller;
  createHandoff(input: EightByEightHandoffInput): Promise<EightByEightContactCenterProviderResponse>;
  placePhoneCall(input: EightByEightPlacePhoneCallInput): Promise<EightByEightContactCenterProviderResponse>;
  setTransactionCodes(input: EightByEightTransactionCodesInput): Promise<EightByEightContactCenterProviderResponse>;
  endCall(input: EightByEightInteractionInput): Promise<EightByEightContactCenterProviderResponse>;
  hangupAgentCall(input: EightByEightAgentInteractionInput): Promise<EightByEightContactCenterProviderResponse>;
  releaseAgentLine(input: EightByEightAgentLineInput): Promise<EightByEightContactCenterProviderResponse>;
  releaseAgentLines(input: Omit<EightByEightAgentLineInput, "lineNo">): Promise<EightByEightContactCenterProviderResponse>;
  listAgentStatuses(input: EightByEightListAgentStatusesInput): Promise<EightByEightContactCenterProviderResponse>;
  getAgentStatus(input: EightByEightGetAgentStatusInput): Promise<EightByEightContactCenterProviderResponse>;
  setAgentStatusesBulk(input: EightByEightBulkAgentStatusesInput): Promise<EightByEightContactCenterProviderResponse>;
  setAgentStatus(input: EightByEightAgentStatusInput): Promise<EightByEightContactCenterProviderResponse>;
  readiness(): Promise<EightByEightContactCenterProviderResponse>;
}

export interface EightByEightLiveCheckOptions extends EightByEightContactCenterClientOptions {
  client?: Pick<EightByEightContactCenterClient, "readiness">;
}
