import type {
  ZendeskFullApiGeneratedClient,
  ZendeskGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type ZendeskJsonPrimitive = string | number | boolean | null;
export type ZendeskJsonValue =
  | ZendeskJsonPrimitive
  | ZendeskJsonObject
  | readonly ZendeskJsonValue[];
export type ZendeskProviderExtensionValue = ZendeskJsonValue | object | undefined;
export interface ZendeskJsonObject {
  [key: string]: ZendeskProviderExtensionValue;
}
export type ZendeskProviderPayload = ZendeskJsonObject | object;
export type ZendeskProviderQuery = Record<string, ZendeskProviderExtensionValue>;
export interface ZendeskProviderResponse extends ZendeskJsonObject {}
export interface ZendeskProviderExtensionFields extends ZendeskJsonObject {}

export interface ZendeskTicketingClientOptions {
  instanceUrl: string;
  email?: string;
  apiToken?: string;
  accessToken?: string;
  apiBasePath?: string;
  fetch?: typeof fetch;
}

export interface ZendeskCredentialStatusInput {
  instanceUrl?: string;
  email?: string;
  apiToken?: string;
  accessToken?: string;
}

export interface ZendeskTicketResource {
  id?: number;
  url?: string;
  external_id?: string | null;
  subject?: string;
  raw_subject?: string;
  description?: string;
  priority?: string;
  status?: string;
  type?: string;
  requester_id?: number;
  assignee_id?: number | null;
  group_id?: number | null;
  tags?: string[];
  custom_fields?: Array<{ id: number; value: unknown }>;
  [key: string]: ZendeskProviderExtensionValue;
}

export interface ZendeskTicketCommentInput {
  body?: string;
  html_body?: string;
  public?: boolean;
  uploads?: string[];
  [key: string]: ZendeskProviderExtensionValue;
}

export interface ZendeskCreateTicketInput {
  subject: string;
  comment: ZendeskTicketCommentInput;
  requesterId?: number;
  requesterEmail?: string;
  priority?: "urgent" | "high" | "normal" | "low";
  status?: "new" | "open" | "pending" | "hold" | "solved";
  type?: "problem" | "incident" | "question" | "task";
  tags?: string[];
  customFields?: Array<{ id: number; value: unknown }>;
  additionalFields?: ZendeskProviderExtensionFields;
}

export interface ZendeskUpdateTicketInput {
  subject?: string;
  comment?: ZendeskTicketCommentInput;
  priority?: "urgent" | "high" | "normal" | "low";
  status?: "new" | "open" | "pending" | "hold" | "solved" | "closed";
  assigneeId?: number | null;
  groupId?: number | null;
  tags?: string[];
  customFields?: Array<{ id: number; value: unknown }>;
  additionalFields?: ZendeskProviderExtensionFields;
}

export interface ZendeskSearchTicketsInput {
  query?: string;
  sortBy?: "updated_at" | "created_at" | "priority" | "status" | "ticket_type";
  sortOrder?: "asc" | "desc";
  limit?: number;
  page?: number;
}

export interface ZendeskSearchTicketsResult {
  tickets: ZendeskTicketResource[];
  count?: number;
  nextPage?: string | null;
  previousPage?: string | null;
}

export interface ZendeskCurrentUserResource {
  id?: number;
  email?: string;
  name?: string;
  role?: string;
  active?: boolean;
  [key: string]: ZendeskProviderExtensionValue;
}

export interface ZendeskUploadResource {
  token?: string;
  attachment?: ZendeskJsonObject;
  attachments?: Array<ZendeskJsonObject>;
  [key: string]: ZendeskProviderExtensionValue;
}

export interface ZendeskUploadFileInput {
  filename: string;
  contentType?: string;
  token?: string;
  data: BodyInit;
}

export interface ZendeskTicketCommentsResult {
  comments: Array<ZendeskJsonObject>;
  nextPage?: string | null;
  previousPage?: string | null;
}

export interface ZendeskTicketingClient {
  fullApi: ZendeskFullApiGeneratedClient;
  requestOperation: ZendeskGeneratedOperationCaller;
  createTicket(input: ZendeskCreateTicketInput): Promise<ZendeskTicketResource>;
  getTicket(ticketId: number | string): Promise<ZendeskTicketResource>;
  updateTicket(ticketId: number | string, input: ZendeskUpdateTicketInput): Promise<ZendeskTicketResource>;
  searchTickets(input?: ZendeskSearchTicketsInput): Promise<ZendeskSearchTicketsResult>;
  listTicketComments(ticketId: number | string): Promise<ZendeskTicketCommentsResult>;
  uploadFile(input: ZendeskUploadFileInput): Promise<ZendeskUploadResource>;
  getUser(userId: number | string): Promise<ZendeskProviderResponse>;
  getOrganization(organizationId: number | string): Promise<ZendeskProviderResponse>;
  listWebhooks(): Promise<Array<ZendeskJsonObject>>;
  getCurrentUser(): Promise<ZendeskCurrentUserResource>;
}

export interface ZendeskLiveCheckOptions extends ZendeskTicketingClientOptions {
  client?: Pick<ZendeskTicketingClient, "getCurrentUser">;
}

export type ZendeskHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ZendeskResource {
  [key: string]: ZendeskProviderExtensionValue;
}

export interface ZendeskClientRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: ZendeskProviderQuery | undefined;
  body?: ZendeskProviderPayload | undefined;
  rawBody?: BodyInit | undefined;
  contentType?: string | undefined;
}

export interface ZendeskOperationRequestInput extends ZendeskClientRequestInput {}
