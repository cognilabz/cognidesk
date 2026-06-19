export const SALESFORCE_DEFAULT_API_VERSION = "v67.0";

export type SalesforceJsonPrimitive = string | number | boolean | null;
export type SalesforceJsonValue =
  | SalesforceJsonPrimitive
  | SalesforceJsonObject
  | readonly SalesforceJsonValue[];
export type SalesforceProviderExtensionValue = SalesforceJsonValue | object | undefined;
export interface SalesforceJsonObject {
  [key: string]: SalesforceProviderExtensionValue;
}
export type SalesforceProviderPayload = SalesforceJsonObject | object;
export type SalesforceProviderQuery = Record<string, SalesforceProviderExtensionValue>;
export interface SalesforceProviderResponse extends SalesforceJsonObject {}
export interface SalesforceProviderExtensionFields extends SalesforceJsonObject {}

export interface SalesforceTicketingClientOptions {
  instanceUrl: string;
  accessToken: string;
  apiVersion?: string;
  fetch?: typeof fetch;
}

export interface SalesforceCredentialStatusInput {
  instanceUrl?: string;
  accessToken?: string;
  apiVersion?: string;
  webhookSecret?: string;
  verifierConfigured?: boolean;
  scopes?: string[];
  expiresAt?: string;
}

export type SalesforceRecord = SalesforceJsonObject & { Id?: string };

export interface SalesforceCaseResource extends SalesforceRecord {
  Id?: string;
  CaseNumber?: string;
  Subject?: string | null;
  Description?: string | null;
  Status?: string;
  Priority?: string | null;
  Origin?: string | null;
  ContactId?: string | null;
  AccountId?: string | null;
  OwnerId?: string | null;
}

export interface SalesforceContactResource extends SalesforceRecord {
  Id?: string;
  Email?: string | null;
  FirstName?: string | null;
  LastName?: string | null;
  Name?: string | null;
  AccountId?: string | null;
}

export interface SalesforceAccountResource extends SalesforceRecord {
  Id?: string;
  Name?: string | null;
  Website?: string | null;
}

export interface SalesforceCaseCommentResource extends SalesforceRecord {
  Id?: string;
  ParentId?: string;
  CommentBody?: string;
  IsPublished?: boolean;
}

export interface SalesforceFeedItemResource extends SalesforceRecord {
  Id?: string;
  ParentId?: string;
  Body?: string;
  Type?: string;
  Visibility?: string;
}

export interface SalesforceCreateCaseInput {
  subject?: string;
  description?: string;
  status?: string;
  priority?: string;
  origin?: string;
  contactId?: string;
  accountId?: string;
  ownerId?: string;
  suppliedEmail?: string;
  suppliedName?: string;
  suppliedPhone?: string;
  reason?: string;
  type?: string;
  fields?: SalesforceJsonObject;
}

export interface SalesforceUpdateCaseInput extends SalesforceCreateCaseInput {}

export interface SalesforceAssignmentRuleOptions {
  useDefaultRule?: boolean;
  assignmentRuleId?: string;
}

export interface SalesforceCaseSearchInput {
  soql?: string;
  fields?: string[];
  where?: string;
  orderBy?: string;
  limit?: number;
  offset?: number;
}

export interface SalesforceSearchInput {
  soql?: string;
  objectName: "Case" | "Contact" | "Account" | (string & {});
  fields?: string[];
  where?: string;
  orderBy?: string;
  limit?: number;
  offset?: number;
}

export interface SalesforceQueryResult<T extends SalesforceRecord = SalesforceRecord> {
  totalSize: number;
  done: boolean;
  records: T[];
  nextRecordsUrl?: string;
}

export interface SalesforceCreateResult {
  id: string;
  success: boolean;
  errors: SalesforceJsonValue[];
}

export interface SalesforceUserInfo {
  user_id?: string;
  organization_id?: string;
  preferred_username?: string;
  email?: string;
  name?: string;
  profile?: string;
  [key: string]: SalesforceProviderExtensionValue;
}

export interface SalesforceOrganizationResource extends SalesforceRecord {
  Id?: string;
  Name?: string;
  OrganizationType?: string;
  InstanceName?: string;
  IsSandbox?: boolean;
}

export interface SalesforceCreateCaseCommentInput {
  caseId: string;
  body: string;
  isPublished?: boolean;
  fields?: SalesforceJsonObject;
}

export interface SalesforceCreateFeedItemInput {
  parentId: string;
  body: string;
  type?: "TextPost" | "ContentPost" | "LinkPost" | string;
  visibility?: "AllUsers" | "InternalUsers" | "SharedUsers" | string;
  fields?: SalesforceJsonObject;
}

export interface SalesforceFindByEmailInput {
  email: string;
  fields?: string[];
  limit?: number;
}

export interface SalesforceTicketingClient {
  describeSObject(objectName: string): Promise<SalesforceProviderResponse>;
  getUserInfo(): Promise<SalesforceUserInfo>;
  getOrganization(): Promise<SalesforceOrganizationResource | undefined>;
  createCase(input: SalesforceCreateCaseInput, assignment?: SalesforceAssignmentRuleOptions): Promise<SalesforceCreateResult>;
  getCase(caseId: string, fields?: string[]): Promise<SalesforceCaseResource>;
  updateCase(caseId: string, input: SalesforceUpdateCaseInput, assignment?: SalesforceAssignmentRuleOptions): Promise<void>;
  searchCases(input?: SalesforceCaseSearchInput): Promise<SalesforceQueryResult<SalesforceCaseResource>>;
  createCaseComment(input: SalesforceCreateCaseCommentInput): Promise<SalesforceCreateResult>;
  listCaseComments(caseId: string, fields?: string[]): Promise<SalesforceQueryResult<SalesforceCaseCommentResource>>;
  createFeedItem(input: SalesforceCreateFeedItemInput): Promise<SalesforceCreateResult>;
  listFeedItems(parentId: string, fields?: string[]): Promise<SalesforceQueryResult<SalesforceFeedItemResource>>;
  getContact(contactId: string, fields?: string[]): Promise<SalesforceContactResource>;
  findContactsByEmail(input: SalesforceFindByEmailInput): Promise<SalesforceQueryResult<SalesforceContactResource>>;
  getAccount(accountId: string, fields?: string[]): Promise<SalesforceAccountResource>;
  searchAccounts(input?: Omit<SalesforceSearchInput, "objectName">): Promise<SalesforceQueryResult<SalesforceAccountResource>>;
  query<T extends SalesforceRecord = SalesforceRecord>(soql: string): Promise<SalesforceQueryResult<T>>;
}

export interface SalesforceLiveCheckOptions extends SalesforceTicketingClientOptions {
  client?: Pick<SalesforceTicketingClient, "getUserInfo" | "getOrganization">;
}

export interface ValidateSalesforceWebhookSecretInput {
  expectedSecret: string;
  actualSecret?: string | null;
}

export interface SalesforceWebhookVerifierInput {
  request: Request;
  rawBody: string;
}

export interface ParseSalesforceEventRequestOptions {
  webhookSecret?: string;
  headerName?: string;
  requireVerification?: boolean;
  verifier?: (input: SalesforceWebhookVerifierInput) => boolean | Promise<boolean>;
}

export type SalesforceEventPayload =
  | { kind: "json"; json: unknown }
  | { kind: "outbound-message"; message: SalesforceOutboundMessage }
  | { kind: "text"; text: string };

export interface SalesforceParsedEventRequest {
  rawBody: string;
  contentType?: string;
  eventType?: string;
  payload: SalesforceEventPayload;
  verified: boolean;
}

export interface SalesforceOutboundMessage {
  organizationId?: string;
  actionId?: string;
  sessionId?: string;
  enterpriseUrl?: string;
  partnerUrl?: string;
  notifications: SalesforceOutboundNotification[];
}

export interface SalesforceOutboundNotification {
  id?: string;
  sObject: Record<string, string>;
}
