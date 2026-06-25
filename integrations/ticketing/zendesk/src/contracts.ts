import type { ZendeskClientOptions as NodeZendeskClientOptions } from "node-zendesk";
import type { createZendeskTicketingIntegration } from "./integration.js";

export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonValue[];

export interface JsonObject {
  [key: string]: JsonValue | undefined;
}

export type ZendeskTicketingProviderPayload = JsonObject | object;

export interface ZendeskSdkResponse<T = ZendeskTicketingProviderPayload> {
  response?: unknown;
  result?: T;
  [key: string]: unknown;
}

export interface ZendeskSdkResource {
  show?(id: number): Promise<unknown>;
  create?(input: ZendeskTicketingProviderPayload): Promise<unknown>;
  update?(id: number, input: ZendeskTicketingProviderPayload): Promise<unknown>;
  list?(): Promise<unknown>;
  query?(query: string): Promise<unknown>;
  me?(): Promise<unknown>;
  upload?(data: ZendeskUploadFileInput["data"], options: ZendeskUploadOptions): Promise<unknown>;
  _rawRequest?(method: string, path: string, body?: unknown): Promise<unknown>;
}

export interface ZendeskTicketingRawClient {
  tickets: ZendeskSdkResource;
  search: ZendeskSdkResource;
  attachments: ZendeskSdkResource;
  users: ZendeskSdkResource;
  organizations: ZendeskSdkResource;
  webhooks: ZendeskSdkResource;
}

export interface ZendeskUploadFileInput {
  filename: string;
  data: BodyInit | Buffer | NodeJS.ReadableStream;
  contentType?: string;
  token?: string;
  binary?: boolean;
}

export interface ZendeskUploadOptions {
  filename: string;
  binary: boolean;
  token?: string;
}

export interface ZendeskTicketingClientOptions {
  instanceUrl: string;
  accessToken?: string;
  email?: string;
  apiToken?: string;
  apiBasePath?: string;
  fetch?: typeof fetch;
  rawClient?: ZendeskTicketingRawClient;
  createSdkClient?: (options: NodeZendeskClientOptions) => ZendeskTicketingRawClient;
  sdkOptions?: Partial<NodeZendeskClientOptions>;
}

export interface ZendeskTicketingClient {
  rawClient: ZendeskTicketingRawClient;
  rawRequest<T = JsonValue>(path: string, init?: RequestInit): Promise<T>;
  createTicket(input: JsonObject): Promise<JsonObject>;
  getTicket(ticketId: string | number): Promise<JsonObject>;
  updateTicket(ticketId: string | number, patch: JsonObject): Promise<JsonObject>;
  searchTickets(query: string | JsonObject): Promise<ZendeskTicketingProviderPayload>;
  createComment(ticketId: string | number, comment: JsonObject, publicComment?: boolean): Promise<JsonObject>;
  uploadFile(input: ZendeskUploadFileInput): Promise<JsonObject>;
  getUser(userId: string | number): Promise<JsonObject>;
  getOrganization(organizationId: string | number): Promise<JsonObject>;
  listWebhooks(): Promise<ZendeskTicketingProviderPayload>;
  readiness(): Promise<JsonObject>;
}

export interface ZendeskTicketingIntegrationOptions extends ZendeskTicketingClientOptions {
  ticketingClient?: ZendeskTicketingClient;
}

export type ZendeskTicketingIntegration = ReturnType<typeof createZendeskTicketingIntegration>;
