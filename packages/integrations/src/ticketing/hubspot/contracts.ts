import type {
  HubSpotFullApiGeneratedClient,
  HubSpotGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type HubSpotJsonPrimitive = string | number | boolean | null;
export type HubSpotJsonValue =
  | HubSpotJsonPrimitive
  | HubSpotJsonObject
  | readonly HubSpotJsonValue[];
export type HubSpotProviderExtensionValue = HubSpotJsonValue | object | undefined;
export interface HubSpotJsonObject {
  [key: string]: HubSpotProviderExtensionValue;
}
export type HubSpotProviderPayload = HubSpotJsonObject | object;
export type HubSpotProviderQuery = Record<string, HubSpotProviderExtensionValue>;
export interface HubSpotProviderResponse extends HubSpotJsonObject {}
export interface HubSpotProviderExtensionFields extends HubSpotJsonObject {}

export interface HubSpotCredentialStatusInput {
  privateAppToken?: string;
  portalId?: string | number;
  appId?: string | number;
  webhookSecret?: string;
  scopes?: string[];
  expiresAt?: string;
}

export interface HubSpotTicketingClientOptions {
  privateAppToken: string;
  baseUrl?: string;
  fetch?: typeof fetch;
}

export type HubSpotHttpMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export interface HubSpotResource {
  [key: string]: HubSpotProviderExtensionValue;
}

export interface HubSpotOperationRequestInput {
  pathParams?: Record<string, string | number | boolean | undefined> | undefined;
  query?: HubSpotProviderQuery | undefined;
  body?: HubSpotProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
}

export type HubSpotPropertyValue = string | number | boolean | null;
export type HubSpotProperties = Record<string, HubSpotPropertyValue>;
export type HubSpotAssociationCategory = "HUBSPOT_DEFINED" | "USER_DEFINED" | (string & {});

export interface HubSpotAssociationInput {
  to: { id: string | number };
  types: Array<{
    associationCategory: HubSpotAssociationCategory;
    associationTypeId: number;
  }>;
}

export interface HubSpotObjectResponse<TProperties extends HubSpotProperties = HubSpotProperties> {
  id: string;
  properties: TProperties;
  createdAt?: string;
  updatedAt?: string;
  archived?: boolean;
  associations?: Record<string, { results?: Array<{ id: string; type?: string }> }>;
  [key: string]: HubSpotProviderExtensionValue;
}

export interface HubSpotListResponse<T> {
  results: T[];
  paging?: { next?: { after?: string; link?: string } };
}

export interface HubSpotSearchRequest {
  query?: string;
  filterGroups?: Array<{
    filters: Array<{
      propertyName: string;
      operator: string;
      value?: string | number | boolean;
      values?: Array<string | number | boolean>;
    }>;
  }>;
  sorts?: Array<string | { propertyName: string; direction: "ASCENDING" | "DESCENDING" }>;
  properties?: string[];
  limit?: number;
  after?: string;
  [key: string]: HubSpotProviderExtensionValue;
}

export interface HubSpotSearchResponse<T> extends HubSpotListResponse<T> {
  total?: number;
}

export interface HubSpotReadOptions {
  properties?: string[];
  propertiesWithHistory?: string[];
  associations?: string[];
  archived?: boolean;
  idProperty?: string;
}

export interface HubSpotCreateTicketInput {
  subject?: string;
  pipeline?: string;
  pipelineStage?: string;
  priority?: string;
  ownerId?: string | number;
  sourceConversationId?: string;
  properties?: HubSpotProperties;
  associations?: HubSpotAssociationInput[];
}

export interface HubSpotUpdateObjectInput {
  properties: HubSpotProperties;
  idProperty?: string;
}

export interface HubSpotCreateContactInput {
  email?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  properties?: HubSpotProperties;
  associations?: HubSpotAssociationInput[];
}

export interface HubSpotCreateCompanyInput {
  name?: string;
  domain?: string;
  properties?: HubSpotProperties;
  associations?: HubSpotAssociationInput[];
}

export interface HubSpotCreateNoteInput {
  body: string;
  timestamp?: string | number;
  ownerId?: string | number;
  attachmentIds?: Array<string | number>;
  properties?: HubSpotProperties;
  associations?: HubSpotAssociationInput[];
}

export interface HubSpotCreateHandoffNoteInput extends Omit<HubSpotCreateNoteInput, "associations"> {
  ticketId: string | number;
  associationTypeId: number;
  associationCategory?: HubSpotAssociationCategory;
  additionalAssociations?: HubSpotAssociationInput[];
}

export interface HubSpotAccountDetails {
  portalId?: number;
  accountType?: string;
  timeZone?: string;
  utcOffset?: string;
  utcOffsetMilliseconds?: number;
  [key: string]: HubSpotProviderExtensionValue;
}

export interface HubSpotAssociationLabel {
  typeId: number;
  label: string | null;
  category: HubSpotAssociationCategory;
  [key: string]: HubSpotProviderExtensionValue;
}

export interface HubSpotAssociationCreateResponse extends HubSpotProviderResponse {
  id?: string;
}

export interface HubSpotPropertyDefinition {
  name: string;
  label?: string;
  type?: string;
  fieldType?: string;
  [key: string]: HubSpotProviderExtensionValue;
}

export interface HubSpotOwner {
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  archived?: boolean;
  [key: string]: HubSpotProviderExtensionValue;
}

export interface HubSpotPipeline {
  id: string;
  label?: string;
  stages?: Array<HubSpotJsonObject>;
  [key: string]: HubSpotProviderExtensionValue;
}

export interface HubSpotTicketingClient {
  fullApi: HubSpotFullApiGeneratedClient;
  requestOperation: HubSpotGeneratedOperationCaller;
  createTicket(input: HubSpotCreateTicketInput): Promise<HubSpotObjectResponse>;
  getTicket(ticketId: string | number, options?: HubSpotReadOptions): Promise<HubSpotObjectResponse>;
  updateTicket(ticketId: string | number, input: HubSpotUpdateObjectInput): Promise<HubSpotObjectResponse>;
  searchTickets(input?: HubSpotSearchRequest): Promise<HubSpotSearchResponse<HubSpotObjectResponse>>;
  createContact(input: HubSpotCreateContactInput): Promise<HubSpotObjectResponse>;
  getContact(contactId: string | number, options?: HubSpotReadOptions): Promise<HubSpotObjectResponse>;
  updateContact(contactId: string | number, input: HubSpotUpdateObjectInput): Promise<HubSpotObjectResponse>;
  searchContacts(input?: HubSpotSearchRequest): Promise<HubSpotSearchResponse<HubSpotObjectResponse>>;
  createCompany(input: HubSpotCreateCompanyInput): Promise<HubSpotObjectResponse>;
  getCompany(companyId: string | number, options?: HubSpotReadOptions): Promise<HubSpotObjectResponse>;
  updateCompany(companyId: string | number, input: HubSpotUpdateObjectInput): Promise<HubSpotObjectResponse>;
  searchCompanies(input?: HubSpotSearchRequest): Promise<HubSpotSearchResponse<HubSpotObjectResponse>>;
  createNote(input: HubSpotCreateNoteInput): Promise<HubSpotObjectResponse>;
  updateNote(noteId: string | number, input: HubSpotUpdateObjectInput): Promise<HubSpotObjectResponse>;
  createHandoffNote(input: HubSpotCreateHandoffNoteInput): Promise<HubSpotObjectResponse>;
  associateTicket(input: {
    ticketId: string | number;
    toObjectType: string;
    toObjectId: string | number;
    associationTypeId: number;
  }): Promise<HubSpotAssociationCreateResponse>;
  getAssociationLabels(fromObjectType: string, toObjectType: string): Promise<HubSpotAssociationLabel[]>;
  listProperties(
    objectType: "tickets" | "contacts" | "companies" | "notes" | (string & {}),
  ): Promise<HubSpotPropertyDefinition[]>;
  listOwners(): Promise<HubSpotOwner[]>;
  listTicketPipelines(): Promise<HubSpotPipeline[]>;
  getTicketPipeline(pipelineId: string): Promise<HubSpotPipeline>;
  getAccountDetails(): Promise<HubSpotAccountDetails>;
}

export interface HubSpotLiveCheckOptions extends HubSpotTicketingClientOptions {
  client?: Pick<HubSpotTicketingClient, "getAccountDetails">;
}

export interface HubSpotWebhookEvent {
  eventId?: number;
  subscriptionId?: number;
  portalId?: number;
  appId?: number;
  occurredAt?: number;
  subscriptionType?: string;
  attemptNumber?: number;
  objectId?: number;
  changeFlag?: string;
  changeSource?: string;
  sourceId?: string;
  propertyName?: string;
  propertyValue?: string;
  [key: string]: HubSpotProviderExtensionValue;
}

export interface HubSpotSignatureInput {
  clientSecret: string;
  method: string;
  requestUri: string;
  rawBody?: string;
  timestamp: string | number;
}

export interface HubSpotSignatureValidationInput extends HubSpotSignatureInput {
  signature: string;
  now?: number;
  maxAgeMs?: number | false;
}

export interface ParseHubSpotSignedRequestOptions {
  clientSecret: string;
  publicUrl?: string;
  now?: number;
  maxAgeMs?: number | false;
}
