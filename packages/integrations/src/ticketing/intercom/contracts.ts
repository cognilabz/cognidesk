import type {
  IntercomFullApiGeneratedClient,
  IntercomGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type IntercomJsonPrimitive = string | number | boolean | null;
export type IntercomJsonValue =
  | IntercomJsonPrimitive
  | IntercomJsonObject
  | readonly IntercomJsonValue[];
export type IntercomProviderExtensionValue = IntercomJsonValue | object | undefined;
export interface IntercomJsonObject {
  [key: string]: IntercomProviderExtensionValue;
}
export type IntercomProviderPayload = IntercomJsonObject | object;
export type IntercomProviderQuery = Record<string, IntercomProviderExtensionValue>;
export interface IntercomProviderResponse extends IntercomJsonObject {}
export interface IntercomProviderExtensionFields extends IntercomJsonObject {}

export interface IntercomTicketingClientOptions {
  accessToken: string;
  apiBaseUrl?: string;
  apiVersion?: IntercomApiVersion;
  fetch?: typeof fetch;
}

export type IntercomApiVersion =
  | "1.0"
  | "1.1"
  | "1.2"
  | "1.3"
  | "1.4"
  | "2.0"
  | "2.1"
  | "2.2"
  | "2.3"
  | "2.4"
  | "2.5"
  | "2.6"
  | "2.7"
  | "2.8"
  | "2.9"
  | "2.10"
  | "2.11"
  | "2.12"
  | "2.13"
  | "2.14"
  | "2.15"
  | "Preview"
  | "Unstable";

export interface IntercomCredentialStatusInput {
  accessToken?: string;
  webhookSecret?: string;
  scopes?: string[];
  expiresAt?: string;
}

export interface IntercomContactReference {
  id: string;
  type?: "contact" | "lead" | "user";
  [key: string]: IntercomProviderExtensionValue;
}

export interface IntercomConversationResource {
  type?: "conversation";
  id?: string;
  title?: string | null;
  created_at?: number;
  updated_at?: number;
  state?: "open" | "closed" | "snoozed" | string;
  open?: boolean;
  read?: boolean;
  priority?: "priority" | "not_priority" | string;
  admin_assignee_id?: number | string | null;
  team_assignee_id?: number | string | null;
  custom_attributes?: IntercomJsonObject;
  [key: string]: IntercomProviderExtensionValue;
}

export interface IntercomMessageResource {
  type?: string;
  id?: string;
  created_at?: number;
  body?: string;
  subject?: string;
  message_type?: string;
  conversation_id?: string;
  [key: string]: IntercomProviderExtensionValue;
}

export interface IntercomTicketResource {
  type?: "ticket";
  id?: string;
  ticket_id?: string;
  category?: "Customer" | "Back-office" | "Tracker" | string;
  ticket_attributes?: IntercomJsonObject;
  admin_assignee_id?: string | null;
  team_assignee_id?: string | null;
  open?: boolean;
  is_shared?: boolean;
  created_at?: number;
  updated_at?: number;
  [key: string]: IntercomProviderExtensionValue;
}

export interface IntercomSearchQuery {
  field?: string;
  operator?: "=" | "!=" | "IN" | "NIN" | ">" | "<" | "~" | "!~" | "^" | "$" | string;
  value?: IntercomProviderExtensionValue;
  operator_type?: "AND" | "OR" | string;
  queries?: IntercomSearchQuery[];
  [key: string]: IntercomProviderExtensionValue;
}

export interface IntercomCursorPaginationInput {
  per_page?: number;
  starting_after?: string | null;
}

export interface IntercomCreateConversationInput {
  from: IntercomContactReference;
  body: string;
  subject?: string;
  attachmentUrls?: string[];
  createdAt?: number;
  additionalFields?: IntercomProviderExtensionFields;
}

export interface IntercomGetConversationInput {
  displayAs?: "plaintext";
  includeTranslations?: boolean;
}

export interface IntercomUpdateConversationInput {
  read?: boolean;
  title?: string;
  customAttributes?: IntercomJsonObject;
  companyId?: string | null;
  displayAs?: "plaintext";
  additionalFields?: IntercomProviderExtensionFields;
}

export interface IntercomReplyConversationInput {
  messageType: "comment" | "note";
  type: "admin" | "user" | "contact";
  adminId?: string | number;
  intercomUserId?: string;
  body: string;
  attachmentUrls?: string[];
  createdAt?: number;
  additionalFields?: IntercomProviderExtensionFields;
}

export interface IntercomManageConversationInput {
  messageType: "close" | "open" | "snoozed" | "assignment";
  type: "admin" | "team" | "user" | "contact";
  adminId?: string | number;
  assigneeId?: string | number;
  teamAssigneeId?: string | number;
  snoozedUntil?: number;
  body?: string;
  additionalFields?: IntercomProviderExtensionFields;
}

export interface IntercomSearchConversationsInput {
  query: IntercomSearchQuery;
  pagination?: IntercomCursorPaginationInput;
}

export interface IntercomSearchConversationsResult {
  type?: string;
  conversations: IntercomConversationResource[];
  totalCount?: number;
  pages?: IntercomPages;
  [key: string]: IntercomProviderExtensionValue;
}

export interface IntercomCreateTicketInput {
  ticketTypeId: string;
  contacts: IntercomContactReference[];
  skipNotifications?: boolean;
  conversationToLinkId?: string;
  companyId?: string;
  createdAt?: number;
  ticketAttributes?: IntercomJsonObject;
  assignment?: {
    adminAssigneeId?: string;
    teamAssigneeId?: string;
  };
  additionalFields?: IntercomProviderExtensionFields;
}

export interface IntercomUpdateTicketInput {
  skipNotifications?: boolean;
  ticketAttributes?: IntercomJsonObject;
  ticketStateId?: string;
  companyId?: string | null;
  open?: boolean;
  isShared?: boolean;
  snoozedUntil?: number;
  adminId?: string | number;
  assigneeId?: string;
  additionalFields?: IntercomProviderExtensionFields;
}

export interface IntercomSearchTicketsInput {
  query: IntercomSearchQuery;
  pagination?: IntercomCursorPaginationInput;
}

export interface IntercomSearchTicketsResult {
  type?: string;
  tickets: IntercomTicketResource[];
  totalCount?: number;
  pages?: IntercomPages;
  [key: string]: IntercomProviderExtensionValue;
}

export interface IntercomPages {
  type?: "pages" | string;
  page?: number;
  per_page?: number;
  total_pages?: number;
  next?: {
    per_page?: number;
    starting_after?: string | null;
    [key: string]: IntercomProviderExtensionValue;
  } | null;
  [key: string]: IntercomProviderExtensionValue;
}

export interface IntercomAdminIdentity {
  type?: "admin" | string;
  id?: string | number;
  email?: string;
  name?: string;
  app?: {
    id?: string;
    name?: string;
    [key: string]: IntercomProviderExtensionValue;
  };
  [key: string]: IntercomProviderExtensionValue;
}

export interface IntercomTicketingClient {
  fullApi: IntercomFullApiGeneratedClient;
  requestOperation: IntercomGeneratedOperationCaller;
  createConversation(input: IntercomCreateConversationInput): Promise<IntercomMessageResource>;
  getConversation(
    conversationId: string | number,
    input?: IntercomGetConversationInput,
  ): Promise<IntercomConversationResource>;
  updateConversation(
    conversationId: string | number,
    input: IntercomUpdateConversationInput,
  ): Promise<IntercomConversationResource>;
  replyConversation(
    conversationId: string | number | "last",
    input: IntercomReplyConversationInput,
  ): Promise<IntercomConversationResource>;
  manageConversation(
    conversationId: string | number,
    input: IntercomManageConversationInput,
  ): Promise<IntercomConversationResource>;
  searchConversations(input: IntercomSearchConversationsInput): Promise<IntercomSearchConversationsResult>;
  createTicket(input: IntercomCreateTicketInput): Promise<IntercomTicketResource>;
  getTicket(ticketId: string | number): Promise<IntercomTicketResource>;
  updateTicket(ticketId: string | number, input: IntercomUpdateTicketInput): Promise<IntercomTicketResource>;
  searchTickets(input: IntercomSearchTicketsInput): Promise<IntercomSearchTicketsResult>;
  identifyAdmin(): Promise<IntercomAdminIdentity>;
}

export interface IntercomLiveCheckOptions extends IntercomTicketingClientOptions {
  client?: Pick<IntercomTicketingClient, "identifyAdmin">;
}

export type IntercomHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface IntercomResource {
  [key: string]: IntercomProviderExtensionValue;
}

export interface IntercomClientRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined>;
  query?: IntercomProviderQuery;
  body?: IntercomProviderPayload;
  rawBody?: BodyInit;
  contentType?: string;
}

export interface IntercomOperationRequestInput extends IntercomClientRequestInput {}

export interface ValidateIntercomRequestSignatureInput {
  webhookSecret: string;
  rawBody: string | Buffer;
  signature: string;
}

export interface ParseIntercomSignedRequestOptions {
  webhookSecret?: string;
  requireSignature?: boolean;
}

export interface IntercomSignedRequest {
  rawBody: string;
  contentType?: string;
  json?: IntercomProviderExtensionValue;
}

export interface IntercomSearchConversationsResponse {
  type?: string;
  conversations?: IntercomConversationResource[];
  total_count?: number;
  pages?: IntercomPages;
  [key: string]: IntercomProviderExtensionValue;
}

export interface IntercomSearchTicketsResponse {
  type?: string;
  tickets?: IntercomTicketResource[];
  total_count?: number;
  pages?: IntercomPages;
  [key: string]: IntercomProviderExtensionValue;
}

export interface IntercomErrorResponse {
  errors?: Array<{
    code?: string;
    message?: string;
    field?: string;
  }>;
  request_id?: string | null;
  type?: string;
}
