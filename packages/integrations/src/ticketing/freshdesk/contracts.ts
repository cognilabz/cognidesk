export type FreshdeskJsonPrimitive = string | number | boolean | null;
export type FreshdeskJsonValue =
  | FreshdeskJsonPrimitive
  | FreshdeskJsonObject
  | readonly FreshdeskJsonValue[];
export type FreshdeskProviderExtensionValue = FreshdeskJsonValue | object | undefined;
export interface FreshdeskJsonObject {
  [key: string]: FreshdeskProviderExtensionValue;
}
export type FreshdeskProviderPayload = FreshdeskJsonObject | object;
export type FreshdeskProviderQuery = Record<string, FreshdeskProviderExtensionValue>;
export interface FreshdeskProviderResponse extends FreshdeskJsonObject {}
export interface FreshdeskProviderExtensionFields extends FreshdeskJsonObject {}

export interface FreshdeskTicketingClientOptions {
  domain: string;
  apiKey: string;
  apiBasePath?: string;
  fetch?: typeof fetch;
}

export interface FreshdeskCredentialStatusInput {
  domain?: string;
  apiKey?: string;
  webhookSecret?: string;
  webhookHeaderName?: string;
  scopes?: string[];
}

export type FreshdeskPriority = 1 | 2 | 3 | 4;
export type FreshdeskStatus = 2 | 3 | 4 | 5 | 6 | 7;
export type FreshdeskSource = 1 | 2 | 3 | 7 | 9 | 10 | string | number;

export interface FreshdeskTicketResource {
  id?: number;
  subject?: string;
  description?: string;
  description_text?: string;
  requester_id?: number;
  responder_id?: number | null;
  email?: string;
  status?: number;
  priority?: number;
  source?: FreshdeskSource;
  group_id?: number | null;
  product_id?: number | null;
  tags?: string[];
  custom_fields?: FreshdeskJsonObject;
  created_at?: string;
  updated_at?: string;
  [key: string]: FreshdeskProviderExtensionValue;
}

export interface FreshdeskContactResource {
  id?: number;
  name?: string;
  email?: string;
  phone?: string | null;
  mobile?: string | null;
  company_id?: number | null;
  active?: boolean;
  custom_fields?: FreshdeskJsonObject;
  created_at?: string;
  updated_at?: string;
  [key: string]: FreshdeskProviderExtensionValue;
}

export interface FreshdeskConversationResource {
  id?: number;
  ticket_id?: number;
  body?: string;
  body_text?: string;
  private?: boolean;
  user_id?: number;
  source?: number;
  incoming?: boolean;
  created_at?: string;
  updated_at?: string;
  [key: string]: FreshdeskProviderExtensionValue;
}

export interface FreshdeskAgentResource {
  id?: number;
  available?: boolean;
  occasional?: boolean;
  ticket_scope?: number;
  type?: string;
  contact?: {
    email?: string;
    name?: string;
    [key: string]: FreshdeskProviderExtensionValue;
  };
  [key: string]: FreshdeskProviderExtensionValue;
}

export interface FreshdeskGroupResource {
  id?: number;
  name?: string;
  description?: string | null;
  agent_ids?: number[];
  [key: string]: FreshdeskProviderExtensionValue;
}

export interface FreshdeskCreateTicketInput {
  subject: string;
  description: string;
  email?: string;
  requesterId?: number;
  status?: FreshdeskStatus;
  priority?: FreshdeskPriority;
  source?: FreshdeskSource;
  type?: string;
  responderId?: number;
  groupId?: number;
  productId?: number;
  companyId?: number;
  tags?: string[];
  customFields?: FreshdeskProviderExtensionFields;
  additionalFields?: FreshdeskProviderExtensionFields;
}

export interface FreshdeskUpdateTicketInput {
  subject?: string;
  description?: string;
  status?: FreshdeskStatus;
  priority?: FreshdeskPriority;
  responderId?: number | null;
  groupId?: number | null;
  productId?: number | null;
  type?: string | null;
  tags?: string[];
  customFields?: FreshdeskProviderExtensionFields;
  additionalFields?: FreshdeskProviderExtensionFields;
}

export interface FreshdeskGetTicketInput {
  include?: Array<"requester" | "company" | "stats" | "conversations"> | string[];
}

export interface FreshdeskSearchInput {
  query?: string;
  page?: number;
  limit?: number;
}

export interface FreshdeskListInput {
  page?: number;
  limit?: number;
}

export interface FreshdeskSearchResult<T> {
  total?: number;
  results: T[];
}

export interface FreshdeskListTicketsInput {
  email?: string;
  requesterId?: number;
  companyId?: number;
  updatedSince?: string;
  include?: Array<"requester" | "stats" | "description"> | string[];
  page?: number;
  limit?: number;
}

export interface FreshdeskCreateContactInput {
  name?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  companyId?: number;
  tags?: string[];
  customFields?: FreshdeskProviderExtensionFields;
  additionalFields?: FreshdeskProviderExtensionFields;
}

export interface FreshdeskUpdateContactInput extends FreshdeskCreateContactInput {}

export interface FreshdeskCreateReplyInput {
  body: string;
  userId?: number;
  ccEmails?: string[];
  bccEmails?: string[];
  additionalFields?: FreshdeskProviderExtensionFields;
}

export interface FreshdeskCreateNoteInput {
  body: string;
  private?: boolean;
  userId?: number;
  notifyEmails?: string[];
  additionalFields?: FreshdeskProviderExtensionFields;
}

export interface FreshdeskHandoffInput {
  status?: FreshdeskStatus;
  responderId?: number | null;
  groupId?: number | null;
  note?: string;
  publicReply?: string;
  tags?: string[];
  customFields?: FreshdeskProviderExtensionFields;
  additionalFields?: FreshdeskProviderExtensionFields;
}

export interface FreshdeskTicketingClient {
  createTicket(input: FreshdeskCreateTicketInput): Promise<FreshdeskTicketResource>;
  getTicket(ticketId: number | string, input?: FreshdeskGetTicketInput): Promise<FreshdeskTicketResource>;
  updateTicket(ticketId: number | string, input: FreshdeskUpdateTicketInput): Promise<FreshdeskTicketResource>;
  listTickets(input?: FreshdeskListTicketsInput): Promise<FreshdeskTicketResource[]>;
  searchTickets(input?: FreshdeskSearchInput): Promise<FreshdeskSearchResult<FreshdeskTicketResource>>;
  createContact(input: FreshdeskCreateContactInput): Promise<FreshdeskContactResource>;
  getContact(contactId: number | string): Promise<FreshdeskContactResource>;
  updateContact(contactId: number | string, input: FreshdeskUpdateContactInput): Promise<FreshdeskContactResource>;
  searchContacts(input?: FreshdeskSearchInput): Promise<FreshdeskSearchResult<FreshdeskContactResource>>;
  listConversations(ticketId: number | string): Promise<FreshdeskConversationResource[]>;
  createReply(ticketId: number | string, input: FreshdeskCreateReplyInput): Promise<FreshdeskConversationResource>;
  createNote(ticketId: number | string, input: FreshdeskCreateNoteInput): Promise<FreshdeskConversationResource>;
  attachHandoff(ticketId: number | string, input: FreshdeskHandoffInput): Promise<FreshdeskHandoffResult>;
  getCurrentAgent(): Promise<FreshdeskAgentResource>;
  getAgent(agentId: number | string): Promise<FreshdeskAgentResource>;
  listAgents(input?: FreshdeskListInput): Promise<FreshdeskAgentResource[]>;
  getGroup(groupId: number | string): Promise<FreshdeskGroupResource>;
  listGroups(input?: FreshdeskListInput): Promise<FreshdeskGroupResource[]>;
  listAdminGroupAgents(groupId: number | string): Promise<FreshdeskAgentResource[]>;
}

export interface FreshdeskHandoffResult {
  ticket?: FreshdeskTicketResource;
  note?: FreshdeskConversationResource;
  reply?: FreshdeskConversationResource;
}

export interface FreshdeskLiveCheckOptions extends FreshdeskTicketingClientOptions {
  client?: Pick<FreshdeskTicketingClient, "getCurrentAgent">;
}

export interface ValidateFreshdeskWebhookSecretInput {
  expectedSecret: string;
  actualSecret?: string | null;
}

export interface ParseFreshdeskWebhookOptions {
  webhookSecret?: string;
  headerName?: string;
  requireSecret?: boolean;
}

export interface FreshdeskWebhookEvent {
  rawBody: string;
  contentType?: string;
  event?: string;
  json?: unknown;
}
