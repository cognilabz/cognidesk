// Generated provider schema DTOs for KustomerFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type KustomerFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type KustomerFullApiSchemaJsonValue = KustomerFullApiSchemaJsonPrimitive | readonly KustomerFullApiSchemaJsonValue[] | { readonly [key: string]: KustomerFullApiSchemaJsonValue | undefined };

export type KustomerFullApiSchemaListAutomationsResponse = {
  meta?: {
  page?: number;
  pageSize?: number;
};
  links?: {
  self?: string;
  first?: string;
  prev?: string | null;
  next?: string | null;
};
  data?: ReadonlyArray<KustomerFullApiSchemaAutomation>;
};

export type KustomerFullApiSchemaAutomationResponse = {
  data?: KustomerFullApiSchemaAutomation;
};

export type KustomerFullApiSchemaListEvaluationsResponse = {
  meta?: {
  page?: number;
  pageSize?: number;
};
  links?: {
  self?: string;
  first?: string;
  prev?: string | null;
  next?: string | null;
};
  data?: ReadonlyArray<KustomerFullApiSchemaEvaluation>;
};

export type KustomerFullApiSchemaListEvaluationRunsResponse = {
  meta?: {
  page?: number;
  pageSize?: number;
};
  links?: {
  self?: string;
  first?: string;
  prev?: string | null;
  next?: string | null;
};
  data?: ReadonlyArray<KustomerFullApiSchemaEvaluationRun>;
};

export type KustomerFullApiSchemaEvaluationRunResponse = {
  data?: KustomerFullApiSchemaEvaluationRun;
};

export type KustomerFullApiSchemaListTestCaseResultsResponse = {
  meta?: {
  page?: number;
  pageSize?: number;
};
  links?: {
  self?: string;
  first?: string;
  prev?: string | null;
  next?: string | null;
};
  data?: ReadonlyArray<KustomerFullApiSchemaTestCaseResult>;
};

export type KustomerFullApiSchemaTestCaseResultResponse = {
  data?: KustomerFullApiSchemaTestCaseResult;
};

export type KustomerFullApiSchemaListTestCasesResponse = {
  meta?: {
  page?: number;
  pageSize?: number;
};
  links?: {
  self?: string;
  first?: string;
  prev?: string | null;
  next?: string | null;
};
  data?: ReadonlyArray<KustomerFullApiSchemaTestCase>;
};

export type KustomerFullApiSchemaCreateTestCaseRequest = {
  name: string;
  evaluationId: string;
  input: string;
  conversationId?: string;
  messageId?: string;
  resourceId: string;
  resourceType: "customer";
  toolCalls?: ReadonlyArray<{
  id?: string;
  name?: string;
  toolType?: string;
}>;
  resumeNode?: string;
  expectedOutput?: string;
};

export type KustomerFullApiSchemaTestCaseResponse = {
  data?: KustomerFullApiSchemaTestCase;
};

export type KustomerFullApiSchemaErrorResponse = {
  errors?: ReadonlyArray<{
  code?: string;
  message?: string;
  meta?: {};
}>;
};

export type KustomerFullApiSchemaUpdateTestCaseRequest = {
  name?: string;
  input: string;
  resourceId: string;
  resourceType: "customer";
  toolCalls?: ReadonlyArray<{
  id?: string;
  name?: string;
  toolType?: string;
}>;
  resumeNode?: string;
  expectedOutput?: string;
};

export type KustomerFullApiSchemaCreateEvaluationRequest = {
  name?: string;
  automationId: string;
};

export type KustomerFullApiSchemaEvaluationResponse = {
  data?: KustomerFullApiSchemaEvaluation;
};

export type KustomerFullApiSchemaUpdateEvaluationRequest = {
  name?: string;
};

export type KustomerFullApiSchemaRunEvaluationRequest = {
  runsPerTestCase?: number;
};

export type KustomerFullApiSchemaSummaryResponse = {
  data?: KustomerFullApiSchemaSummary;
};

export type KustomerFullApiSchemaBatchGetSummariesResponse = {
  meta?: {
  page?: number;
  pageSize?: number;
};
  links?: {
  self?: string;
  first?: string;
  prev?: string | null;
  next?: string | null;
};
  data?: ReadonlyArray<KustomerFullApiSchemaSummary>;
};

export type KustomerFullApiSchemaGetInstalledAppsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  current: string;
  version: string;
  status: string;
  statusAt: string;
  actions: {
  "kustomer.app.ai.nlp"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.conversation.find-body"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.conversation.create"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.find"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.conversation.update"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.company.find"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.find-by-external-id"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.kobject.find"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.create"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.update"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.klass.find-by-klassname"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.conversation.find-by-id"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.find-last"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.event.publish"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.find-by-email"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.klass.create"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.kobject.delete"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.kobject.create"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.kobject.update"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.create"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.update"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.find-by-phone"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.kobject.create-with-customer"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.kobject.find-by-external-id"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.regex-match.generic"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.find-by-id"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.find-by-external"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.rest-api.generic"?: {
  status: string;
  statusAt: string;
  id: string;
};
};
  cards: {
  "kustomer.customer.sentiment"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.conversation.sentiment"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "shopfiy-order-detail"?: {
  status: string;
  statusAt: string;
  id: string;
};
};
  hooks: {};
  klasses: {
  "shopify-order"?: {
  status: string;
  statusAt: string;
  id: string;
};
};
  triggers: {
  "kustomer.app.chat.message.receive"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.conversation.create"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.update"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.create"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.create"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.conversation.update"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.update"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.app.postmark.message.bounce"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.app.postmark.message.open"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.app.postmark.message.receive"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.app.shopify.order-update"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.app.twilio.message.receive"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.app.twilio.message.status"?: {
  status: string;
  statusAt: string;
  id: string;
};
};
  workflows: {
  "ai-message-nlp"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "chat-message-receive"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer-assign-user-on-message-send"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "postmark-bcc-receive"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "postmark-message-bounce"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "postmark-message-receive"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "postmark-message-open"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "shopify-event-processing"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "twilio-message-receive"?: {
  status: string;
  statusAt: string;
  id: string;
};
  "twilio-message-status"?: {
  status: string;
  statusAt: string;
  id: string;
};
};
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  remote?: {
  status: string;
  statusAt: string;
};
  installing?: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id?: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaGetInstalledAppsBySpecificVersionResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  current: string;
  version: string;
  status: string;
  statusAt: string;
  actions: {
  "kustomer.conversation.find-body": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.conversation.create": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.find": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.conversation.update": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.company.find": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.find-by-external-id": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.kobject.find": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.create": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.update": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.klass.find-by-klassname": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.conversation.find-by-id": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.find-last": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.event.publish": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.find-by-email": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.klass.create": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.kobject.delete": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.kobject.create": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.kobject.update": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.create": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.update": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.find-by-phone": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.kobject.create-with-customer": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.kobject.find-by-external-id": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.regex-match.generic": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.find-by-id": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.find-by-external": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.rest-api.generic": {
  status: string;
  statusAt: string;
  id: string;
};
};
  cards: {
  "kustomer.customer.sentiment": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.conversation.sentiment": {
  status: string;
  statusAt: string;
  id: string;
};
};
  hooks: {};
  klasses: {};
  triggers: {
  "kustomer.conversation.create": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.update": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.create": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.customer.create": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.conversation.update": {
  status: string;
  statusAt: string;
  id: string;
};
  "kustomer.message.update": {
  status: string;
  statusAt: string;
  id: string;
};
};
  workflows: {
  "kustomer-assign-user-on-message-send": {
  status: string;
  statusAt: string;
  id: string;
};
};
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetAvailableAppsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name?: string;
  version?: string;
  visibility?: string;
  dependencies?: ReadonlyArray<string>;
  default?: boolean;
  system?: boolean;
  title?: string;
  iconUrl?: string;
  vendor?: string;
  description?: string;
  screenshots?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  website?: string;
  actions?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  cards?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  hooks?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  klasses?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  triggers?: ReadonlyArray<{
  eventName: string;
  outputTemplate: {
  id: string;
  trackingId: string;
  body: string;
  sentAt: string;
  size: string;
  customer: string;
  session: string;
  links: string;
};
  outputSchema: {
  type: string;
  properties: {
  id: {
  type: string;
};
  trackingId: {
  type: string;
};
  body: {
  type: string;
};
  sentAt: {
  type: string;
};
  size: {
  type: string;
};
  customer: {
  type: string;
};
  conversation: {
  type: string;
};
  links: {
  type: string;
};
};
};
}>;
  workflows?: ReadonlyArray<{
  name: string;
  description: string;
  trigger: {
  transitions: ReadonlyArray<{
  condition: {
  values: ReadonlyArray<boolean>;
  op: string;
};
  target: string;
}>;
  appVersion: string;
  id: string;
  eventName: string;
};
  steps: ReadonlyArray<{
  params: {
  related: string;
  size: string;
  body: string;
  sentAt: string;
  app: string;
  channel: string;
  id: string;
  customer: string;
  conversation: string;
  meta: {
  trackingId: string;
};
};
  appVersion: string;
  action: string;
  id: string;
  transitions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
}>;
}>;
  createdAt?: string;
  updatedAt?: string;
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetAvailableAppResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  version: string;
  visibility: string;
  dependencies: ReadonlyArray<string>;
  default: boolean;
  system: boolean;
  title: string;
  iconUrl: string;
  vendor: string;
  description: string;
  screenshots: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  website: string;
  actions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  cards: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  hooks: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  klasses: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  triggers: ReadonlyArray<{
  eventName: string;
  outputTemplate: {
  id: string;
  trackingId: string;
  body: string;
  sentAt: string;
  size: string;
  customer: string;
  session: string;
  links: string;
};
  outputSchema: {
  type: string;
  properties: {
  id: {
  type: string;
};
  trackingId: {
  type: string;
};
  body: {
  type: string;
};
  sentAt: {
  type: string;
};
  size: {
  type: string;
};
  customer: {
  type: string;
};
  conversation: {
  type: string;
};
  links: {
  type: string;
};
};
};
}>;
  workflows: ReadonlyArray<{
  name: string;
  description: string;
  trigger: {
  transitions: ReadonlyArray<{
  condition: {
  values: ReadonlyArray<boolean>;
  op: string;
};
  target: string;
}>;
  appVersion: string;
  id: string;
  eventName: string;
};
  steps: ReadonlyArray<{
  params: {
  related: string;
  size: string;
  body: string;
  sentAt: string;
  app: string;
  channel: string;
  id: string;
  customer: string;
  conversation: string;
  meta: {
  trackingId: string;
};
};
  appVersion: string;
  action: string;
  id: string;
  transitions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
}>;
}>;
  createdAt: string;
  updatedAt: string;
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaCreateAttachmentRequest = {
  name: string;
  contentType: string;
  contentLength: number;
  ""?: string;
};

export type KustomerFullApiSchemaCreateAttachmentResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
  uploaded: boolean;
  redacted: boolean;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
  related: string;
};
};
  meta: {
  upload: {
  url: string;
  fields: {
  key: string;
  acl: string;
  "Content-Type": string;
  "X-Amz-Meta-Attachment-Id": string;
  bucket: string;
  "X-Amz-Algorithm": string;
  "X-Amz-Credential": string;
  "X-Amz-Date": string;
  Policy: string;
  "X-Amz-Signature": string;
};
};
};
};

export type KustomerFullApiSchemaGetAttachmentsbyIDOutboundOnlyResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
  uploaded: boolean;
  redacted: boolean;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
  related: string;
};
};
  meta: {
  upload: {
  url: string;
  fields: {
  key: string;
  acl: string;
  "Content-Type": string;
  "X-Amz-Meta-Attachment-Id": string;
  bucket: string;
  "X-Amz-Algorithm": string;
  "X-Amz-Credential": string;
  "X-Amz-Date": string;
  Policy: string;
  "X-Amz-Signature": string;
};
};
};
};

export type KustomerFullApiSchemaUpsertAttachmentRequest = {
  name?: string;
  redacted?: boolean;
  contentType?: string;
  contentLength?: number;
};

export type KustomerFullApiSchemaUpsertAttachmentResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
  uploaded: boolean;
  redacted: boolean;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
  related: string;
};
};
  meta: {
  upload: {
  url: string;
  fields: {
  key: string;
  acl: string;
  "Content-Type": string;
  "X-Amz-Meta-Attachment-Id": string;
  bucket: string;
  "X-Amz-Algorithm": string;
  "X-Amz-Credential": string;
  "X-Amz-Date": string;
  Policy: string;
  "X-Amz-Signature": string;
};
};
};
};

export type KustomerFullApiSchemaGetAuditLogsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  eventName: string;
  eventVerb: string;
  org: string;
  userId?: string;
  userType?: string;
  objectId?: string;
  objectType?: string;
  client?: string;
  ip?: string;
  changes?: {
  attributes?: {};
  relationships?: {};
};
  createdAt?: string;
  publishedAt?: string;
  expiresAt?: string;
};
  relationships: {
  user: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  first: string;
  previous: string;
  next: string;
};
};
};

export type KustomerFullApiSchemaGetAuthCustomerSettingsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  secret: string;
  corsWhitelist: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetAuthRolesResponseSuccess = {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};

export type KustomerFullApiSchemaGetAuthSettingsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  kustomer: {
  enabled: boolean;
};
  google: {
  enabled: boolean;
};
  saml: {
  idpPublicCerts: ReadonlyArray<string>;
  idpLoginUrl: string;
  idpLogoutUrl: string;
  idpIssuerId: string;
  forceAuth: boolean;
  signRequests: boolean;
  allowUnencryptedAssert: boolean;
  enabled: boolean;
};
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateAuthSettingsRequest = {
  kustomer: {
  enabled: boolean;
};
  google: {
  enabled: boolean;
};
  saml?: {
  idpPublicCerts?: ReadonlyArray<string>;
  idpLoginUrl?: string;
  idpLogoutUrl?: string;
  idpIssuerId?: string;
  forceAuth?: boolean;
  signRequests?: boolean;
  allowUnencryptedAssert?: boolean;
  enabled: boolean;
};
  app?: {
  userSessionExpirationMilliseconds?: number;
};
};

export type KustomerFullApiSchemaUpdateAuthSettingsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  kustomer: {
  enabled: boolean;
};
  google: {
  enabled: boolean;
};
  saml: {
  idpPublicCerts: ReadonlyArray<string>;
  idpLoginUrl: string;
  idpLogoutUrl: string;
  idpIssuerId: string;
  forceAuth: boolean;
  signRequests: boolean;
  allowUnencryptedAssert: boolean;
  enabled: boolean;
};
  app: {
  userSessionExpirationMilliseconds: number;
};
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetAuthTokensResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  lastTokenChars: string;
  name: string;
  ipAddress: string;
  userAgent: string;
  roles: ReadonlyArray<string>;
  updatedAt: string;
  createdAt: string;
  lastAccessedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  user: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateTokenRequest = (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);

export type KustomerFullApiSchemaCreateTokenResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  token: string;
  lastTokenChars: string;
  name: string;
  ipAddress: string;
  userAgent: string;
  roles: ReadonlyArray<string>;
  updatedAt: string;
  createdAt: string;
  lastAccessedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  user: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaErrorResponse2 = {
  errors: ReadonlyArray<{
  code: string;
  message: string;
  meta: {
  readonly [key: string]: KustomerFullApiSchemaJsonValue | undefined;
};
}>;
};

export type KustomerFullApiSchemaGetAuthTokenbyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  lastTokenChars: string;
  name: string;
  ipAddress: string;
  userAgent: string;
  roles: ReadonlyArray<string>;
  updatedAt: string;
  createdAt: string;
  lastAccessedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  user: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetCurrentAuthTokenResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  lastTokenChars: string;
  name: string;
  ipAddress: string;
  userAgent: string;
  roles: ReadonlyArray<string>;
  updatedAt: string;
  createdAt: string;
  lastAccessedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  user: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGETBrandsResponseGETBrands = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  default: boolean;
  createdAt: string;
  updatedAt: string;
  modifiedAt?: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaPOSTBrandsResponsePOSTBrands = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  iconUrl: string;
  default: boolean;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGETBrandbyIDResponseGETBrandbyID = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  default: boolean;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaPATCHBrandResourceResponsePATCHBrandresource = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  iconUrl: string;
  default: boolean;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGETDefaultBrandResponseGETdefaultbrand = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  default: boolean;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetBulkOperationByIdResponseSuccess = {
  data: {
  type: "bulk";
  id: string;
  attributes: {
  ids?: ReadonlyArray<string>;
  search?: string;
  context: string;
  status: "queued" | "running" | "complete";
  errors?: {};
  batchErrors?: boolean;
  lastBatchError?: {};
  completed: boolean;
  completedAt?: string;
  isLarge?: boolean;
  v2: boolean;
  batches?: {
  complete?: number;
  total?: number;
  idsTotal?: number;
};
  retentionPolicyRunId?: string;
  payload?: {};
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetBulkOperationBatchesResponseSuccess = {
  data?: ReadonlyArray<{
  type?: string;
  id?: string;
  attributes?: {
  status?: "queued" | "scheduled" | "complete";
  completed?: boolean;
  completedAt?: string | null;
  successCount?: number;
  failureCount?: number;
  objectIds?: ReadonlyArray<string>;
  errors?: ReadonlyArray<{
  id?: string;
  data?: {};
}>;
  v2?: boolean;
  createdAt?: string;
  updatedAt?: string;
  payload?: {};
};
  relationships?: {
  org?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  bulk?: {
  links?: {
  self?: string;
};
  data?: {
  type?: string;
  id?: string;
};
};
  createdBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links?: {
  self?: string;
};
}>;
  meta?: {
  page?: number;
  pages?: number;
  count?: number;
  limit?: number;
};
};

export type KustomerFullApiSchemaGetCardsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  url: string;
  contexts: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  app: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaErrorResponse3 = {
  errors: ReadonlyArray<{
  status: number;
  title: string;
  detail?: string;
}>;
};

export type KustomerFullApiSchemaGetCardResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  url: string;
  contexts: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateaCardRequest = {
  contexts?: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaUpdateaCardResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  url: string;
  contexts: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaCreateaCardRequest = {
  app?: string;
  name: string;
  description: string;
  url: string;
  contexts: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaCreateaCardResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  url: string;
  contexts: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaInstallaCardRequest = {
  contexts: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaInstallaCardResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  url: string;
  contexts: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaQueueMetricsResponseSuccess = {
  data: ReadonlyArray<{
  type: "session_queue";
  id: string;
  attributes: {
  name?: string;
  latestWaitTimeSeconds?: number | null;
  latestWaitTimeSinceQueueEntryOrLastUnpauseSeconds?: number | null;
  latestWaitTimeBeforeOrAfterLastPauseSeconds?: number | null;
};
  relationships: {
  org?: {
  data?: {
  type?: "org";
  id?: string;
};
  links?: {
  self?: string;
};
};
  queue?: {
  data?: {
  type?: "queue";
  id?: string;
};
  links?: {
  self?: string;
};
};
  latestWaitTimeWorkItem?: {
  data?: {
  type?: "work-item";
  id?: string;
};
  links?: {
  self?: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaGetChatSettingsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  teamName: string;
  greeting: string;
  autoreply: string;
  embedIconUrl: string;
  embedIconColor: string;
  enabled: boolean;
  updatedAt: string;
  modifiedAt: string;
  offhoursMessage: string;
  offhoursImageUrl: string;
  closableChat: boolean;
  noHistory: boolean;
  volumeControl: {
  enabled: boolean;
  markDoneAfterTimeout: boolean;
  mode: string;
  useDynamicWaitMessage: boolean;
  followUpChannels: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  hideWaitOption: boolean;
};
  singleSessionChat: boolean;
  showTypingIndicatorWeb: boolean;
  showTypingIndicatorCustomerWeb: boolean;
  showBrandingIdentifier: boolean;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
};

export type KustomerFullApiSchemaSetChatSettingsRequest = {
  teamName?: string | null;
  teamIconUrl?: string | null;
  greeting?: string | null;
  autoreply?: string | null;
  embedIconUrl?: string | null;
  embedIconColor?: string | null;
  fallbackFromEmail?: string | null;
  offhoursDisplay?: "online" | "offline" | "none";
  offhoursMessage?: string | null;
  offhoursImageUrl?: string | null;
  volumeControl?: KustomerFullApiSchemaSettingsVolumeControlJson;
  singleSessionChat?: boolean;
  closableChat?: boolean;
  noHistory?: boolean;
  activeForm?: string | null;
  domainCriteria?: KustomerFullApiSchemaSettingsDomainCriteriaJson;
  enabled?: boolean;
  showBrandingIdentifier?: boolean;
  showTypingIndicatorWeb?: boolean;
  showTypingIndicatorCustomerWeb?: boolean;
};

export type KustomerFullApiSchemaSetChatSettingsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  teamName: string;
  teamIconUrl: string | null;
  greeting: string;
  autoreply: string;
  embedIconUrl: string | null;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetCompaniesResponseFilterSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  externalId: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateaCompanyRequest = {
  name: string;
  externalId?: string;
  avatarUrl?: string | null;
  emails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  phones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  whatsapps?: ReadonlyArray<KustomerFullApiSchemaWhatsapp>;
  socials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  urls?: ReadonlyArray<KustomerFullApiSchemaUrl>;
  domains?: ReadonlyArray<KustomerFullApiSchemaDomain>;
  locations?: ReadonlyArray<KustomerFullApiSchemaLocation>;
  employeeCount?: number;
  tags?: KustomerFullApiSchemaTags;
  createdAt?: string;
  importedAt?: string;
  rev?: number;
  custom?: KustomerFullApiSchemaCustomAttrs;
  defaultLang?: KustomerFullApiSchemaLang;
};

export type KustomerFullApiSchemaCreateaCompanyResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetCompanybyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateCompanyAttributesRequest = {
  name?: string;
  externalId?: string | null;
  avatarUrl?: string | null;
  emails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  phones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  whatsapps?: ReadonlyArray<KustomerFullApiSchemaWhatsapp>;
  socials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  urls?: ReadonlyArray<KustomerFullApiSchemaUrl>;
  domains?: ReadonlyArray<KustomerFullApiSchemaDomain>;
  locations?: ReadonlyArray<KustomerFullApiSchemaLocation>;
  employeeCount?: number;
  tags?: KustomerFullApiSchemaTags;
  custom?: KustomerFullApiSchemaCustomAttrs;
  defaultLang?: KustomerFullApiSchemaLang;
  rev?: number;
  deleted?: boolean | null;
};

export type KustomerFullApiSchemaUpdateCompanyAttributesResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaFindCompanyKObjectsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  title: string;
  icon: string;
  images: ReadonlyArray<string>;
  s3DataUrl?: string;
  custom: {};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  updatedAt: string;
  createdAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  klass: {
  link: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  company: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaBulkCreateCompaniesRequest = ReadonlyArray<{
  name: string;
  externalId?: string;
  avatarUrl?: string | null;
  emails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  phones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  whatsapps?: ReadonlyArray<KustomerFullApiSchemaWhatsapp>;
  socials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  urls?: ReadonlyArray<KustomerFullApiSchemaUrl>;
  domains?: ReadonlyArray<KustomerFullApiSchemaDomain>;
  locations?: ReadonlyArray<KustomerFullApiSchemaLocation>;
  employeeCount?: number;
  tags?: KustomerFullApiSchemaTags;
  createdAt?: string;
  importedAt?: string;
  rev?: number;
  custom?: KustomerFullApiSchemaCustomAttrs;
  defaultLang?: KustomerFullApiSchemaLang;
}>;

export type KustomerFullApiSchemaBulkCreateCompaniesResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: ReadonlyArray<{
  name: string;
}>;
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaBulkBatchUpdateCompaniesRequest = ReadonlyArray<{
  id: string;
  name?: string;
  externalId?: string | null;
  avatarUrl?: string | null;
  emails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  phones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  socials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  urls?: ReadonlyArray<KustomerFullApiSchemaUrl>;
  domains?: ReadonlyArray<KustomerFullApiSchemaDomain>;
  locations?: ReadonlyArray<KustomerFullApiSchemaLocation>;
  employeeCount?: number;
  tags?: KustomerFullApiSchemaTags;
  custom?: KustomerFullApiSchemaCustomAttrs;
  defaultLang?: KustomerFullApiSchemaLang;
  deleted?: boolean | null;
}>;

export type KustomerFullApiSchemaBulkBatchUpdateCompaniesResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: ReadonlyArray<{
  id: string;
  name: string;
}>;
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetConversationsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  channels: ReadonlyArray<string>;
  status: string;
  messageCount: number;
  noteCount: number;
  satisfaction: number;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  suggestedTags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {};
  lastMessageIn: {};
  assignedUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  assignedTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  firstResponse: {};
  direction: string;
  outboundMessageCount: number;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateaConversationRequest = {
  id?: string;
  customer: string;
  externalId?: string;
  name?: string;
  status?: "open" | "done";
  priority?: number;
  createdAt?: string;
  importedAt?: string;
  direction?: "in" | "out";
  replyChannel?: string | null;
  tags?: KustomerFullApiSchemaTags;
  assignedUsers?: ReadonlyArray<string>;
  assignedTeams?: ReadonlyArray<string>;
  custom?: KustomerFullApiSchemaCustomAttrs;
  defaultLang?: KustomerFullApiSchemaLang;
  queue?: (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);
};

export type KustomerFullApiSchemaCreateaConversationResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  channels: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  status: string;
  messageCount: number;
  noteCount: number;
  satisfaction: number;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  suggestedTags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {};
  lastMessageIn: {};
  assignedUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  assignedTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  firstResponse: {};
  direction: string;
  outboundMessageCount: number;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaErrorResponse4 = {
  errors: ReadonlyArray<{
  code: string;
  message: string;
  meta?: {
  readonly [key: string]: KustomerFullApiSchemaJsonValue | undefined;
};
}>;
};

export type KustomerFullApiSchemaGetConversationResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  channels: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  status: string;
  messageCount: number;
  noteCount: number;
  satisfaction: number;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  suggestedTags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {};
  lastMessageIn: {};
  assignedUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  assignedTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  firstResponse: {};
  direction: string;
  outboundMessageCount: number;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateConversationAttributesRequest = ({
  externalId?: string | null;
  name?: string | null;
  direction?: "in" | "out";
  priority?: number;
  satisfaction?: number | null;
  satisfactionLevel?: KustomerFullApiSchemaConversationSatisfaction;
  suggestedShortcuts?: ReadonlyArray<{
  shortcutId: string;
  confidence: number;
}>;
  status?: "open" | "snoozed" | "done";
  replyChannel?: string | null;
  subStatus?: string;
  snooze?: {
  time?: string;
  status: "scheduled" | "canceled" | "elapsed";
};
  tags?: KustomerFullApiSchemaTags;
  suggestedTags?: ReadonlyArray<{
  tag: KustomerFullApiSchemaTagName;
  confidence: number;
}>;
  sentiment?: KustomerFullApiSchemaSentiment;
  assignedUsers?: ReadonlyArray<string>;
  assignedTeams?: ReadonlyArray<string>;
  custom?: KustomerFullApiSchemaCustomAttrs;
  deleted?: boolean | null;
  ended?: boolean;
  endedAt?: string;
  endedReason?: string;
  endedBy?: string;
  endedByType?: "user" | "customer";
  locked?: boolean;
  rev?: number;
  defaultLang?: KustomerFullApiSchemaLang;
  queue?: ((KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue) | (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue));
} | {
  customer?: string;
});

export type KustomerFullApiSchemaUpdateConversationAttributesResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  channels: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  status: string;
  messageCount: number;
  noteCount: number;
  satisfaction: number;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  suggestedTags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {};
  lastMessageIn: {};
  assignedUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  assignedTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  firstResponse: {};
  direction: string;
  outboundMessageCount: number;
  externalQueue: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateConversationRequest = ({
  externalId?: string | null;
  name?: string | null;
  direction?: "in" | "out";
  priority?: number;
  satisfaction?: number | null;
  satisfactionLevel?: KustomerFullApiSchemaConversationSatisfaction;
  suggestedShortcuts?: ReadonlyArray<{
  shortcutId: string;
  confidence: number;
}>;
  status?: "open" | "snoozed" | "done";
  replyChannel?: string | null;
  subStatus?: string;
  snooze?: {
  time?: string;
  status: "scheduled" | "canceled" | "elapsed";
};
  tags?: KustomerFullApiSchemaTags;
  suggestedTags?: ReadonlyArray<{
  tag: KustomerFullApiSchemaTagName;
  confidence: number;
}>;
  sentiment?: KustomerFullApiSchemaSentiment;
  assignedUsers?: ReadonlyArray<string>;
  assignedTeams?: ReadonlyArray<string>;
  custom?: KustomerFullApiSchemaCustomAttrs;
  deleted?: boolean | null;
  ended?: boolean;
  endedAt?: string;
  endedReason?: string;
  endedBy?: string;
  endedByType?: "user" | "customer";
  locked?: boolean;
  rev?: number;
  defaultLang?: KustomerFullApiSchemaLang;
  queue?: ((KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue) | (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue));
} | {
  customer?: string;
});

export type KustomerFullApiSchemaUpdateConversationResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  channels: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  status: string;
  messageCount: number;
  noteCount: number;
  satisfaction: number;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  suggestedTags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {};
  lastMessageIn: {};
  assignedUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  assignedTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  firstResponse: {};
  direction: string;
  outboundMessageCount: number;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetConversationAttachmentsResponseSuccess = {
  data: ReadonlyArray<{
  id?: string;
  type?: string;
  attributes?: {
  name: string;
  contentType: string;
  contentLength: number;
  redacted: boolean;
};
  relationships?: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  message: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links?: {
  self: string;
  related: string;
};
}>;
};

export type KustomerFullApiSchemaGetConversationEventsResponseSuccess = {
  meta: {};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  type: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  changes?: {
  attributes: {
  updatedAt?: {
  op: string;
  before: string;
  after: string;
};
  modifiedAt?: {
  op: string;
  before: string;
  after: string;
};
};
  relationships: {
  customer?: {
  op: string;
  before: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  after: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};
  location: string | null;
  meta: string | null;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaGetallForwardsbyConversationResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  app: string;
  channel: string;
  from: {
  name: string;
  email: string;
};
  to: ReadonlyArray<{
  name: string;
  email: string;
}>;
  body: string;
  payload?: {
  draftJs: {
  blocks: ReadonlyArray<{
  data: {};
  entityRanges: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  inlineStyleRanges: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  depth: number;
  type: string;
  text: string;
  key: string;
}>;
  entityMap: {};
};
};
  status: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  customer: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  conversation?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateaForwardbyConversationRequest = {
  channel: "email";
  app?: "gmail" | "postmark";
  customer?: string;
  status?: "draft" | "sent" | "failed";
  sendAt?: string;
  to?: ReadonlyArray<{
  email: string;
  name?: string;
}>;
  from?: {
  email: string;
  name?: string;
};
  body?: string;
  subject?: string;
  replyTo?: string;
  template?: string | null;
  payload?: {};
  attachments?: ReadonlyArray<{
  id: string;
  name: string;
  contentType: string;
  contentLength: number;
}>;
};

export type KustomerFullApiSchemaCreateaForwardbyConversationResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  app: string;
  channel: string;
  status: string;
  from: {
  name: string;
  email: string;
};
  to: ReadonlyArray<{
  name: string;
  email: string;
}>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  customer: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  conversation: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  attachments?: ReadonlyArray<{
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
}>;
};
};
};

export type KustomerFullApiSchemaGetMessagesbyConversationResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  externalId: string;
  channel: string;
  app: string;
  size: number;
  direction: string;
  preview: string;
  sentiment: {};
  meta: {
  inReplyTo: string;
  recipient: {
  mailboxHash: string;
  email: string;
};
  cc: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  to: ReadonlyArray<{
  email: string;
}>;
  from: string;
  subject: string;
};
  status: string;
  sentAt: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  related: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateaMessagefromConversationRequest = {
  id?: string;
  externalId?: string;
  customer?: string;
  conversation?: string;
  reference?: {
  message: string;
  type: "reply" | "replyAll" | "forward";
};
  channel: "email" | "sms" | "chat" | "facebook" | "twitter-dm" | "twitter-tweet" | "voice" | "instagram" | "whatsapp";
  preview?: string;
  subject?: string;
  direction?: "in" | "out";
  app: string;
  size?: number;
  related?: string;
  status?: "sent" | "received" | "error";
  error?: KustomerFullApiSchemaError;
  errorAt?: string;
  auto?: boolean;
  sentAt?: string;
  source?: "bulk" | "satisfaction";
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  attachments?: (ReadonlyArray<KustomerFullApiSchemaAttachment> | ReadonlyArray<string>);
  location?: {
  name?: string;
  address?: string;
  address2?: string;
  address3?: string;
  latitude?: number;
  longitude?: number;
  countryCode?: string;
  countryName?: string;
  regionCode?: string;
  regionName?: string;
  cityName?: string;
  zipCode?: string;
  areaCode?: string;
};
  meta?: {};
  custom?: KustomerFullApiSchemaCustomAttrs;
  sentiment?: KustomerFullApiSchemaSentiment;
  createdAt?: string;
  modifiedAt?: string;
  createdBy?: string;
  modifiedBy?: string;
  importedAt?: string;
  lang?: KustomerFullApiSchemaLang;
  queue?: (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);
};

export type KustomerFullApiSchemaCreateaMessagefromConversationResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  channel: string;
  app: string;
  size: number;
  direction: string;
  meta: {};
  status: string;
  sentAt: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetNotesbyConversationResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  body: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  userMentions: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateaNotewithinConversationRequest = {
  id?: string;
  conversation?: string;
  externalId?: string;
  body: string;
  userMentions?: ReadonlyArray<{
  user?: string;
  team?: string;
}>;
  attachments?: ReadonlyArray<KustomerFullApiSchemaAttachment>;
  createdAt?: string;
  modifiedAt?: string;
  createdBy?: string;
  modifiedBy?: string;
  importedAt?: string;
  lang?: KustomerFullApiSchemaLang;
};

export type KustomerFullApiSchemaCreateaNotewithinConversationResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  body: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  userMentions: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaRemoveTagsfromConversationResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  channels: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  status: string;
  messageCount: number;
  noteCount: number;
  satisfaction: number;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  suggestedTags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {};
  lastMessageIn: {};
  assignedUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  assignedTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  firstResponse: {};
  direction: string;
  outboundMessageCount: number;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaAppendTagstoConversationRequest = ReadonlyArray<string>;

export type KustomerFullApiSchemaAppendTagstoConversationResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  channels: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  status: string;
  messageCount: number;
  noteCount: number;
  satisfaction: number;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<string>;
  suggestedTags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {};
  lastMessageIn: {};
  assignedUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  assignedTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  firstResponse: {};
  direction: string;
  outboundMessageCount: number;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetconversationtimesbyconversationidResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  createdAt: string;
  createdByTeams: ReadonlyArray<string>;
  assignedUsers: ReadonlyArray<string>;
  assignedTeams: ReadonlyArray<string>;
  handleAt: string;
  handleTime: number;
  channels: ReadonlyArray<string>;
  messageAt?: string;
  messageTime?: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetV2conversationtimesbyconversationidResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  createdAt: string;
  createdByTeams: ReadonlyArray<string>;
  assignedUsers: ReadonlyArray<string>;
  assignedTeams: ReadonlyArray<string>;
  handleAt: string;
  handleTime: number;
  handleBy?: string;
  handlePauseAt?: string;
  handlePauseBy?: string;
  timerVersion: "v2";
  isFocused?: boolean;
  isInitialFocusSession?: boolean;
  agentActionTrigger?: "reply_sent" | "note_sent" | "conversation_done" | "conversation_reopened" | "conversation_snoozed" | "kobject_status_change";
  conversationStatus?: string;
  touched?: boolean;
  resolved?: boolean;
  snoozed?: boolean;
  reopened?: boolean;
  messageAt?: string;
  messageTime?: number;
  messagesSent?: number;
  noteAt?: string;
  noteTime?: number;
  notesSent?: number;
  channels: ReadonlyArray<"sms" | "chat" | "email" | "facebook" | "voice" | "twitter-dm" | "twitter-tweet" | "instagram" | "whatsapp">;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  handleBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaBulkDeleteConversationsResponseSuccess = KustomerFullApiSchemaBulkConversationsCommonResponseParams;

export type KustomerFullApiSchemaBulkCreateConversationsRequest = ReadonlyArray<{
  id?: string;
  customer: string;
  externalId?: string;
  name?: string;
  status?: "open" | "done";
  priority?: number;
  createdAt?: string;
  importedAt?: string;
  direction?: "in" | "out";
  replyChannel?: string | null;
  tags?: KustomerFullApiSchemaTags;
  assignedUsers?: ReadonlyArray<string>;
  assignedTeams?: ReadonlyArray<string>;
  custom?: KustomerFullApiSchemaCustomAttrs;
  defaultLang?: KustomerFullApiSchemaLang;
  queue?: (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);
}>;

export type KustomerFullApiSchemaBulkCreateConversationsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: ReadonlyArray<{
  externalId: string;
  name: string;
}>;
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaBulkBatchUpdateConversationsRequest = ReadonlyArray<({
  id: string;
  externalId?: string | null;
  name?: string | null;
  direction?: "in" | "out";
  priority?: number;
  satisfaction?: number | null;
  status?: "open" | "snoozed" | "done";
  replyChannel?: string | null;
  subStatus?: string;
  snooze?: {
  time?: string;
  status: "scheduled" | "canceled" | "elapsed";
};
  tags?: KustomerFullApiSchemaTags;
  suggestedTags?: ReadonlyArray<{
  tag: KustomerFullApiSchemaTagName;
  confidence: number;
}>;
  sentiment?: KustomerFullApiSchemaSentiment;
  assignedUsers?: ReadonlyArray<string>;
  assignedTeams?: ReadonlyArray<string>;
  custom?: KustomerFullApiSchemaCustomAttrs;
  deleted?: boolean | null;
  ended?: boolean;
  endedAt?: string;
  endedReason?: string;
  endedBy?: string;
  endedByType?: "user" | "customer";
  locked?: boolean;
  rev?: number;
  defaultLang?: KustomerFullApiSchemaLang;
  queue?: (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);
} | {
  id: string;
  customer?: string;
})>;

export type KustomerFullApiSchemaBulkBatchUpdateConversationsResponseSuccess = KustomerFullApiSchemaBulkConversationsCommonResponseParams;

export type KustomerFullApiSchemaGetConversationbyExternalIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  externalId: string;
  name: string;
  channels: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  status: string;
  messageCount: number;
  noteCount: number;
  satisfaction: number;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  suggestedTags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {};
  lastMessageIn: {};
  assignedUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  assignedTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  firstResponse: {};
  direction: string;
  outboundMessageCount: number;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetconversationtimebyidsResponsesuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  createdAt: string;
  createdByTeams: ReadonlyArray<string>;
  assignedUsers: ReadonlyArray<string>;
  assignedTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  handleAt: string;
  handleTime: number;
  channels: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetCustomersResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
  total: number;
  totalPages: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  displayName: string;
  displayColor: string;
  displayIcon: string;
  externalIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sharedExternalIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  emails: ReadonlyArray<{
  email: string;
  verified: boolean;
  type: string;
}>;
  sharedEmails: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  phones: ReadonlyArray<{
  phone: string;
  verified: boolean;
  type: string;
}>;
  sharedPhones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  socials: ReadonlyArray<{
  type: string;
  userid: string;
  username: string;
  url: string;
  verified: boolean;
}>;
  sharedSocials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  urls: ReadonlyArray<{
  url: string;
  type: string;
}>;
  locations: ReadonlyArray<{
  type: string;
  address: string;
}>;
  activeUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  watchers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recentLocation: {
  updatedAt: string;
};
  locale: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  lastActivityAt: string;
  lastMessageIn: {
  sentiment: {};
};
  lastConversation: {
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {};
};
  conversationCounts: {
  done: number;
  open: number;
  snoozed: number;
  all: number;
};
  preview: {};
  tags: ReadonlyArray<string>;
  progressiveStatus: string | null;
  verified: boolean;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
  last: string;
};
};

export type KustomerFullApiSchemaCreateaCustomerRequest = {
  name?: string | null;
  company?: string | null;
  externalId?: string | null;
  username?: string | null;
  signedUpAt?: string | null;
  lastActivityAt?: string | null;
  lastCustomerActivityAt?: string | null;
  lastSeenAt?: string | null;
  avatarUrl?: string | null;
  externalIds?: ReadonlyArray<KustomerFullApiSchemaExternalId>;
  sharedExternalIds?: ReadonlyArray<KustomerFullApiSchemaExternalId>;
  emails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  sharedEmails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  phones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  sharedPhones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  whatsapps?: ReadonlyArray<KustomerFullApiSchemaWhatsapp>;
  facebookIds?: ReadonlyArray<KustomerFullApiSchemaFacebookId>;
  instagramIds?: ReadonlyArray<KustomerFullApiSchemaInstagramId>;
  socials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  sharedSocials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  urls?: ReadonlyArray<KustomerFullApiSchemaUrl>;
  locations?: ReadonlyArray<KustomerFullApiSchemaLocation>;
  locale?: string | null;
  timeZone?: string | null;
  tags?: KustomerFullApiSchemaTags;
  sentiment?: KustomerFullApiSchemaSentiment;
  custom?: KustomerFullApiSchemaCustomAttrs;
  birthdayAt?: string | null;
  gender?: "m" | "f";
  createdAt?: string;
  importedAt?: string;
  rev?: number;
  defaultLang?: KustomerFullApiSchemaLang;
};

export type KustomerFullApiSchemaCreateaCustomerResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  displayName: string;
  displayColor: string;
  displayIcon: string;
  externalIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sharedExternalIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  emails: ReadonlyArray<{
  email: string;
  verified: boolean;
  type: string;
  id: string | null;
}>;
  sharedEmails: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  phones: ReadonlyArray<{
  phone: string;
  verified: boolean;
  type: string;
  id: string | null;
}>;
  sharedPhones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  socials: ReadonlyArray<{
  type: string;
  userid: string;
  username: string;
  url: string;
  verified: boolean;
  id: string | null;
}>;
  sharedSocials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  urls: ReadonlyArray<{
  url: string;
  type: string;
  id: string | null;
}>;
  locations: ReadonlyArray<{
  type: string;
  address: string;
  id: string | null;
}>;
  activeUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  watchers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recentLocation: {
  updatedAt: string;
};
  locale: string;
  defaultLang: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  lastActivityAt: string;
  lastConversation: {
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  conversationCounts: {
  all: number;
  snoozed: number;
  open: number;
  done: number;
};
  tags: ReadonlyArray<string>;
  progressiveStatus: string | null;
  verified: boolean;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetaCustomerEventResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  type: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string | null;
  changes: {
  attributes: {
  conversationCounts: {
  op: string;
  before: {
  all: number;
  snoozed: number;
  open: number;
  done: number;
};
  after: {
  all: number;
  snoozed: number;
  open: number;
  done: number;
};
};
  progressiveStatus: {
  op: string;
  before: string | null;
  after: string;
};
  rev: {
  op: string;
  before: number;
  after: number;
};
};
  relationships: {};
};
  location: string | null;
  meta: string | null;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: string | null;
  modifiedBy: string | null;
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetallEventsbyCustomerforSessionResponseSuccess = {
  meta: {};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  trackingEvent: string;
  app: string | null;
  publishedAt: string;
  createdAt: string;
  location: {
  countryCode: string;
  countryName: string;
  regionCode: string;
  cityName: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  areaCode: string;
  regionName: string;
};
  meta: {
  statusStr: string;
};
  sessionId: string;
  realIp: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: string | null;
  modifiedBy: string | null;
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaGetCustomerbyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  displayName: string;
  displayColor: string;
  displayIcon: string;
  externalId: string;
  externalIds: ReadonlyArray<{
  externalId: string;
  verified: boolean;
  id: string | null;
}>;
  sharedExternalIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  signedUpAt: string | null;
  avatarUrl: string | null;
  username: string | null;
  emails: ReadonlyArray<{
  email: string;
  verified: boolean;
  type: string;
  id: string | null;
}>;
  sharedEmails: ReadonlyArray<{
  email: string;
  verified: boolean;
  type: string;
  id: string | null;
}>;
  phones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sharedPhones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  socials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sharedSocials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  urls: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  locations: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  activeUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  watchers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recentLocation: {
  updatedAt: string;
};
  locale: string | null;
  timeZone: string | null;
  birthdayAt: string | null;
  gender: string | null;
  presence: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  lastSeenAt: string;
  lastActivityAt: string;
  lastCustomerActivityAt: string;
  lastMessageIn: {
  sentAt: string;
  sentiment: string | null;
};
  lastConversation: {
  id: string;
  sentiment: {
  confidence: number;
  polarity: number;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  conversationCounts: {
  all: number;
  snoozed: number;
  open: number;
  done: number;
};
  preview: {
  previewAt: string;
  type: string;
  text: string;
  subject: string;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {
  polarity: number;
  confidence: number;
};
  progressiveStatus: string;
  verified: boolean;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
  included?: ReadonlyArray<{
  type?: string;
  id?: string;
  attributes?: {};
  relationships?: {};
  links?: {};
}>;
};

export type KustomerFullApiSchemaGetCustomerbyIDMultiResponseSuccess = {
  data: ReadonlyArray<{
  type?: string;
  id?: string;
  attributes?: {};
  relationships?: {};
  links?: {};
}>;
  included?: ReadonlyArray<{
  type?: string;
  id?: string;
  attributes?: {};
  relationships?: {};
  links?: {};
}>;
};

export type KustomerFullApiSchemaUpdateCustomerAttributesRequest = {
  name?: string | null;
  company?: string | null;
  externalId?: string | null;
  username?: string | null;
  signedUpAt?: string | null;
  lastActivityAt?: string | null;
  lastCustomerActivityAt?: string | null;
  lastSeenAt?: string | null;
  avatarUrl?: string | null;
  externalIds?: ReadonlyArray<KustomerFullApiSchemaExternalId>;
  sharedExternalIds?: ReadonlyArray<KustomerFullApiSchemaExternalId>;
  emails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  sharedEmails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  phones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  sharedPhones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  whatsapps?: ReadonlyArray<KustomerFullApiSchemaWhatsapp>;
  facebookIds?: ReadonlyArray<KustomerFullApiSchemaFacebookId>;
  instagramIds?: ReadonlyArray<KustomerFullApiSchemaInstagramId>;
  socials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  sharedSocials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  urls?: ReadonlyArray<KustomerFullApiSchemaUrl>;
  locations?: ReadonlyArray<KustomerFullApiSchemaLocation>;
  locale?: string | null;
  timeZone?: string | null;
  tags?: KustomerFullApiSchemaTags;
  sentiment?: KustomerFullApiSchemaSentiment;
  custom?: KustomerFullApiSchemaCustomAttrs;
  birthdayAt?: string | null;
  gender?: "m" | "f";
  createdAt?: string;
  importedAt?: string;
  rev?: number;
  defaultLang?: KustomerFullApiSchemaLang;
};

export type KustomerFullApiSchemaUpdateCustomerAttributesResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  displayName: string;
  displayColor: string;
  displayIcon: string;
  externalId: string;
  externalIds: ReadonlyArray<{
  externalId: string;
  verified: boolean;
  id: string | null;
}>;
  sharedExternalIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  signedUpAt: string | null;
  avatarUrl: string | null;
  username: string | null;
  emails: ReadonlyArray<{
  type: string;
  email: string;
}>;
  sharedEmails: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  phones: ReadonlyArray<{
  type: string;
  phone: string;
}>;
  sharedPhones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  socials: ReadonlyArray<{
  type: string;
  userid: string;
  username: string;
  url: string;
}>;
  sharedSocials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  urls: ReadonlyArray<{
  url: string;
}>;
  locations: ReadonlyArray<{
  type: string;
  address: string;
}>;
  activeUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  watchers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recentLocation: {
  updatedAt: string;
};
  locale: string;
  gender: string;
  tags: ReadonlyArray<string>;
  timeZone: string | null;
  birthdayAt: string | null;
  presence: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  lastSeenAt: string;
  lastActivityAt: string;
  lastCustomerActivityAt: string;
  lastMessageIn: {
  sentAt: string;
  sentiment: string | null;
};
  lastConversation: {
  id: string;
  sentiment: {
  confidence: number;
  polarity: number;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  defaultLang: string;
  conversationCounts: {
  all: number;
  snoozed: number;
  open: number;
  done: number;
};
  preview: {
  previewAt: string;
  type: string;
  text: string;
  subject: string;
};
  sentiment: {
  polarity: number;
  confidence: number;
};
  progressiveStatus: string;
  verified: boolean;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateCustomerRequest = {
  name?: string | null;
  company?: string | null;
  externalId?: string | null;
  username?: string | null;
  signedUpAt?: string | null;
  lastActivityAt?: string | null;
  lastCustomerActivityAt?: string | null;
  lastSeenAt?: string | null;
  avatarUrl?: string | null;
  externalIds?: ReadonlyArray<KustomerFullApiSchemaExternalId>;
  sharedExternalIds?: ReadonlyArray<KustomerFullApiSchemaExternalId>;
  emails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  sharedEmails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  phones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  sharedPhones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  whatsapps?: ReadonlyArray<KustomerFullApiSchemaWhatsapp>;
  facebookIds?: ReadonlyArray<KustomerFullApiSchemaFacebookId>;
  instagramIds?: ReadonlyArray<KustomerFullApiSchemaInstagramId>;
  socials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  sharedSocials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  urls?: ReadonlyArray<KustomerFullApiSchemaUrl>;
  locations?: ReadonlyArray<KustomerFullApiSchemaLocation>;
  locale?: string | null;
  timeZone?: string | null;
  tags?: KustomerFullApiSchemaTags;
  sentiment?: KustomerFullApiSchemaSentiment;
  custom?: KustomerFullApiSchemaCustomAttrs;
  birthdayAt?: string | null;
  gender?: "m" | "f";
  createdAt?: string;
  importedAt?: string;
  rev?: number;
  defaultLang?: KustomerFullApiSchemaLang;
};

export type KustomerFullApiSchemaUpdateCustomerResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  displayName: string;
  displayColor: string;
  displayIcon: string;
  externalId: string;
  externalIds: ReadonlyArray<{
  externalId: string;
  verified: boolean;
  id: string | null;
}>;
  sharedExternalIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  signedUpAt: string | null;
  avatarUrl: string | null;
  username: string | null;
  emails: ReadonlyArray<{
  type: string;
  email: string;
}>;
  sharedEmails: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  phones: ReadonlyArray<{
  type: string;
  phone: string;
}>;
  sharedPhones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  socials: ReadonlyArray<{
  type: string;
  userid: string;
  username: string;
  url: string;
}>;
  sharedSocials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  urls: ReadonlyArray<{
  url: string;
}>;
  locations: ReadonlyArray<{
  type: string;
  address: string;
}>;
  activeUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  watchers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recentLocation: {
  updatedAt: string;
};
  locale: string;
  gender: string;
  tags: ReadonlyArray<string>;
  timeZone: string | null;
  birthdayAt: string | null;
  presence: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  lastSeenAt: string;
  lastActivityAt: string;
  lastCustomerActivityAt: string;
  lastMessageIn: {
  sentAt: string;
  sentiment: string | null;
};
  lastConversation: {
  id: string;
  sentiment: {
  confidence: number;
  polarity: number;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  defaultLang: string;
  conversationCounts: {
  all: number;
  snoozed: number;
  open: number;
  done: number;
};
  preview: {
  previewAt: string;
  type: string;
  text: string;
  subject: string;
};
  sentiment: {
  polarity: number;
  confidence: number;
};
  progressiveStatus: string;
  verified: boolean;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetConversationsbyCustomerResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  channels: ReadonlyArray<string>;
  status: string;
  messageCount: number;
  noteCount: number;
  satisfaction: number;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  suggestedTags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {};
  lastMessageIn: {};
  assignedUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  assignedTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  firstResponse: {};
  direction: string;
  outboundMessageCount: number;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateaConversationforaCustomerRequest = {
  id?: string;
  externalId?: string;
  campaign?: string;
  name?: string;
  status?: "open" | "done";
  priority?: number;
  createdAt?: string;
  importedAt?: string;
  direction?: "in" | "out";
  replyChannel?: string | null;
  tags?: KustomerFullApiSchemaTags;
  assignedUsers?: ReadonlyArray<string>;
  assignedTeams?: ReadonlyArray<string>;
  custom?: KustomerFullApiSchemaCustomAttrs;
  defaultLang?: KustomerFullApiSchemaLang;
  queue?: (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);
};

export type KustomerFullApiSchemaCreateaConversationforaCustomerResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  channels: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  status: string;
  messageCount: number;
  noteCount: number;
  satisfaction: number;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  suggestedTags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {};
  lastMessageIn: {};
  assignedUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  assignedTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  firstResponse: {};
  direction: string;
  outboundMessageCount: number;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetallDraftsbyCustomerResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  channel: string;
  body: string;
  payload?: {
  draftJs: {
  blocks: ReadonlyArray<{
  data: {};
  entityRanges: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  inlineStyleRanges: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  depth: number;
  type: string;
  text: string;
  key: string;
}>;
  entityMap: {};
};
};
  status: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  customer: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  conversation?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  included: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};

export type KustomerFullApiSchemaCreateaDraftbyCustomerRequest = ({
  channel: "email";
  conversation?: string;
  app?: "gmail" | "postmark";
  customer?: string;
  auto?: boolean;
  sendAt?: string | null;
  scheduled?: boolean;
  source?: "bulk" | "satisfaction";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: (ReadonlyArray<{
  email: string;
  name?: string;
}> | {
  email: string;
  name?: string;
});
  from?: {
  email: string;
  name?: string;
};
  body?: string;
  cc?: ReadonlyArray<{
  email: string;
  name?: string;
}>;
  bcc?: ReadonlyArray<{
  email: string;
  name?: string;
}>;
  subject?: string;
  replyTo?: string;
  headers?: ReadonlyArray<{
  name: string;
  value?: string;
}>;
  template?: string | null;
  payload?: {};
} | {
  channel: "sms";
  app?: "twilio" | "zipwhip";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  sendAt?: string | null;
  scheduled?: boolean;
  source?: "bulk" | "satisfaction";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
} | (KustomerFullApiSchemaCreateaDraftWhatsappParamsCommon & {
  app: "twilio_whatsapp" | "messagebird" | "whatsapp";
  body: string;
}) | (KustomerFullApiSchemaCreateaDraftWhatsappParamsCommon & KustomerFullApiSchemaCreateaDraftWhatsappInteractiveMeta) | (KustomerFullApiSchemaCreateaDraftWhatsappParamsCommon & KustomerFullApiSchemaCreateaDraftWhatsappTemplateMeta) | {
  channel: "chat";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  sendAt?: string | null;
  scheduled?: boolean;
  source?: "bulk" | "satisfaction";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
  attachments?: ReadonlyArray<string>;
} | {
  channel: "facebook";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  sendAt?: string | null;
  scheduled?: boolean;
  source?: "bulk" | "satisfaction";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
} | {
  channel: "twitter-tweet";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  sendAt?: string;
  scheduled?: boolean;
  source?: "bulk" | "satisfaction";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
} | {
  channel: "twitter-dm";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  sendAt?: string;
  scheduled?: boolean;
  source?: "bulk" | "satisfaction";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
} | {
  channel: "note";
  conversation?: string;
  customer?: string;
  sendAt?: string | null;
  scheduled?: boolean;
  source?: "bulk";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  body?: string;
  payload?: {};
  userMentions?: ReadonlyArray<{
  user?: string;
  team?: string;
}>;
} | {
  channel: "instagram";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  sendAt?: string | null;
  scheduled?: boolean;
  source?: "bulk" | "satisfaction";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
});

export type KustomerFullApiSchemaCreateaDraftbyCustomerResponseCreateanEmailDraft = {
  data: {
  id: string;
  type: string;
  attributes: {
  channel: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  customer: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetallCustomerEventsResponseSuccess = {
  meta: {};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  type: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string | null;
  location: string | null;
  meta: string | null;
  changes?: {
  attributes: {
  conversationCounts?: {
  op: string;
  before: {
  all: number;
  snoozed: number;
  open: number;
  done: number;
};
  after: {
  all: number;
  snoozed: number;
  open: number;
  done: number;
};
};
  progressiveStatus?: {
  op: string;
  before: string | null;
  after: string;
};
  rev: {
  op: string;
  before: number;
  after: number;
};
  presence?: {
  op: string;
  before: string | null;
  after: string;
};
  updatedAt?: {
  op: string;
  before: string;
  after: string;
};
  lastSeenAt?: {
  op: string;
  before: string | null;
  after: string;
};
  lastActivityAt?: {
  op: string;
  before: string;
  after: string;
};
  lastCustomerActivityAt?: {
  op: string;
  before: string | null;
  after: string;
};
};
  relationships: {};
};
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: string | null;
  modifiedBy: string | null;
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  message?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaFindCustomerKObjectsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  title: string;
  description?: string;
  icon: string;
  images: ReadonlyArray<string>;
  s3DataUrl?: string;
  custom: {
  orderStatusStr: string;
  shippingStatusStr: string;
  billingStatusStr: string;
  specialInstructionsStr: string;
  orderNumberNum: number;
  orderDescriptionStr: string;
  totalPriceNum: number;
  orderUpdatedAt: string;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  updatedAt: string;
  createdAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  klass: {
  link: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateCustomerKObjectRequest = {
  customer?: string;
  company?: string;
  externalId?: string;
  title: string;
  description?: string;
  images?: ReadonlyArray<string>;
  icon?: string;
  data?: {};
  custom?: KustomerFullApiSchemaCustomAttrs;
  tags?: KustomerFullApiSchemaTags;
  createdAt?: string;
  importedAt?: string;
};

export type KustomerFullApiSchemaCreateCustomerKObjectResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  title: string;
  icon: string;
  images: ReadonlyArray<string>;
  custom: {
  orderStatusStr: string;
  shippingStatusStr: string;
  billingStatusStr: string;
  specialInstructionsStr: string;
  orderNumberNum: number;
  orderDescriptionStr: string;
  totalPriceNum: number;
  orderUpdatedAt: string;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  updatedAt: string;
  createdAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  klass: {
  link: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetCustomerMergesbyCustomerResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  status: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  source: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  target: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaGetMessagesbyCustomerResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  externalId: string;
  channel: string;
  app: string;
  size: number;
  direction: string;
  preview: string;
  sentiment: {};
  meta: {
  inReplyTo: string;
  recipient: {
  mailboxHash: string;
  email: string;
};
  cc: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  to: ReadonlyArray<{
  email: string;
}>;
  from: string;
  subject: string;
};
  status: string;
  sentAt: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  related: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateaMessagebyCustomerRequest = {
  id?: string;
  externalId?: string;
  conversation?: string;
  reference?: {
  message: string;
  type: "reply" | "replyAll" | "forward";
};
  channel: "email" | "sms" | "chat" | "facebook" | "twitter-dm" | "twitter-tweet" | "voice" | "instagram" | "whatsapp";
  preview?: string;
  subject?: string;
  direction?: "in" | "out";
  app: string;
  size?: number;
  related?: string;
  status?: "sent" | "received" | "error";
  error?: KustomerFullApiSchemaError;
  errorAt?: string;
  auto?: boolean;
  sentAt?: string;
  source?: "bulk" | "satisfaction";
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  attachments?: (ReadonlyArray<KustomerFullApiSchemaAttachment> | ReadonlyArray<string>);
  location?: {
  name?: string;
  address?: string;
  address2?: string;
  address3?: string;
  latitude?: number;
  longitude?: number;
  countryCode?: string;
  countryName?: string;
  regionCode?: string;
  regionName?: string;
  cityName?: string;
  zipCode?: string;
  areaCode?: string;
};
  meta?: {};
  custom?: KustomerFullApiSchemaCustomAttrs;
  sentiment?: KustomerFullApiSchemaSentiment;
  createdAt?: string;
  modifiedAt?: string;
  createdBy?: string;
  modifiedBy?: string;
  importedAt?: string;
  lang?: KustomerFullApiSchemaLang;
  queue?: (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);
};

export type KustomerFullApiSchemaCreateaMessagebyCustomerResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  channel: string;
  app: string;
  size: number;
  direction: string;
  meta: {};
  status: string;
  sentAt: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetNotesbyCustomerResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  body: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  userMentions: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaGetCustomerSessionsResponseSuccess = {
  meta: {};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  sessionId: string;
  firstEventAt: string;
  lastEventAt: string;
  count: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCustomerArchiveSearchRequest = {
  queryContext?: string;
  includeDeleted?: boolean;
  timeZone?: string;
  and?: ({} | ReadonlyArray<{
  conversation_id?: {};
  conversation_created_at?: {};
  conversation_updated_at?: {};
  conversation_customer_id?: {};
  conversation_any_text?: {};
  conversation_deleted?: {};
  customer_id?: {};
  customer_companyId?: {};
  customer_created_at?: {};
  customer_updated_at?: {};
  customer_deleted?: {};
  customer_any_text_new?: {};
  message_id?: {};
  message_created_at?: {};
  message_updated_at?: {};
  message_conversation_id?: {};
  message_any_text?: {};
  kobject_id?: {};
  kobject_created_at?: {};
  kobject_updated_at?: {};
  kobject_customer_id?: {};
  kobject_company_id?: {};
  kobject_any_text?: {};
  "^kobject_.*_id$"?: {};
  "^kobject_.*_created_at$"?: {};
  "^kobject_.*_updated_at$"?: {};
  "^kobject_.*_customer_id$"?: {};
  "^kobject_.*_company_id$"?: {};
  "^kobject_.*_any_text$"?: {};
  company_created_at?: {};
  company_updated_at?: {};
}>);
  or?: ({} | ReadonlyArray<{
  conversation_id?: {};
  conversation_created_at?: {};
  conversation_updated_at?: {};
  conversation_customer_id?: {};
  conversation_any_text?: {};
  conversation_deleted?: {};
  customer_id?: {};
  customer_companyId?: {};
  customer_created_at?: {};
  customer_updated_at?: {};
  customer_deleted?: {};
  customer_any_text_new?: {};
  message_id?: {};
  message_created_at?: {};
  message_updated_at?: {};
  message_conversation_id?: {};
  message_any_text?: {};
  kobject_id?: {};
  kobject_created_at?: {};
  kobject_updated_at?: {};
  kobject_customer_id?: {};
  kobject_company_id?: {};
  kobject_any_text?: {};
  "^kobject_.*_id$"?: {};
  "^kobject_.*_created_at$"?: {};
  "^kobject_.*_updated_at$"?: {};
  "^kobject_.*_customer_id$"?: {};
  "^kobject_.*_company_id$"?: {};
  "^kobject_.*_any_text$"?: {};
  company_created_at?: {};
  company_updated_at?: {};
}>);
  not?: ({} | ReadonlyArray<{
  conversation_id?: {};
  conversation_created_at?: {};
  conversation_updated_at?: {};
  conversation_customer_id?: {};
  conversation_any_text?: {};
  conversation_deleted?: {};
  customer_id?: {};
  customer_companyId?: {};
  customer_created_at?: {};
  customer_updated_at?: {};
  customer_deleted?: {};
  customer_any_text_new?: {};
  message_id?: {};
  message_created_at?: {};
  message_updated_at?: {};
  message_conversation_id?: {};
  message_any_text?: {};
  kobject_id?: {};
  kobject_created_at?: {};
  kobject_updated_at?: {};
  kobject_customer_id?: {};
  kobject_company_id?: {};
  kobject_any_text?: {};
  "^kobject_.*_id$"?: {};
  "^kobject_.*_created_at$"?: {};
  "^kobject_.*_updated_at$"?: {};
  "^kobject_.*_customer_id$"?: {};
  "^kobject_.*_company_id$"?: {};
  "^kobject_.*_any_text$"?: {};
  company_created_at?: {};
  company_updated_at?: {};
}>);
  sort?: ({} | ReadonlyArray<{}>);
};

export type KustomerFullApiSchemaCustomerSearchResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
  total: number;
  totalPages: number;
  aggregations: {};
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  displayName: string;
  createdAt: string;
  updatedAt: string;
  lastActivityAt: string;
  verified: boolean;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string;
  last: string;
};
};

export type KustomerFullApiSchemaBulkDeleteCustomersResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<string>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: {};
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaBulkCreateCustomersRequest = ReadonlyArray<{
  name?: string | null;
  company?: string | null;
  externalId?: string | null;
  username?: string | null;
  signedUpAt?: string | null;
  lastActivityAt?: string | null;
  lastCustomerActivityAt?: string | null;
  lastSeenAt?: string | null;
  avatarUrl?: string | null;
  externalIds?: ReadonlyArray<KustomerFullApiSchemaExternalId>;
  sharedExternalIds?: ReadonlyArray<KustomerFullApiSchemaExternalId>;
  emails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  sharedEmails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  phones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  sharedPhones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  whatsapps?: ReadonlyArray<KustomerFullApiSchemaWhatsapp>;
  facebookIds?: ReadonlyArray<KustomerFullApiSchemaFacebookId>;
  instagramIds?: ReadonlyArray<KustomerFullApiSchemaInstagramId>;
  socials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  sharedSocials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  urls?: ReadonlyArray<KustomerFullApiSchemaUrl>;
  locations?: ReadonlyArray<KustomerFullApiSchemaLocation>;
  locale?: string | null;
  timeZone?: string | null;
  tags?: KustomerFullApiSchemaTags;
  sentiment?: KustomerFullApiSchemaSentiment;
  custom?: KustomerFullApiSchemaCustomAttrs;
  birthdayAt?: string | null;
  gender?: "m" | "f";
  createdAt?: string;
  importedAt?: string;
  rev?: number;
  defaultLang?: KustomerFullApiSchemaLang;
}>;

export type KustomerFullApiSchemaBulkCreateCustomersResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: ReadonlyArray<{
  name: string;
}>;
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaBulkBatchUpdateCustomersRequest = ReadonlyArray<{
  id: string;
  name?: string | null;
  company?: string | null;
  externalId?: string | null;
  username?: string | null;
  signedUpAt?: string | null;
  lastActivityAt?: string | null;
  lastCustomerActivityAt?: string | null;
  lastSeenAt?: string | null;
  avatarUrl?: string | null;
  externalIds?: ReadonlyArray<KustomerFullApiSchemaExternalId>;
  sharedExternalIds?: ReadonlyArray<KustomerFullApiSchemaExternalId>;
  emails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  sharedEmails?: ReadonlyArray<KustomerFullApiSchemaEmail>;
  phones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  sharedPhones?: ReadonlyArray<KustomerFullApiSchemaPhone>;
  facebookIds?: ReadonlyArray<KustomerFullApiSchemaFacebookId>;
  socials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  sharedSocials?: ReadonlyArray<KustomerFullApiSchemaSocial>;
  urls?: ReadonlyArray<KustomerFullApiSchemaUrl>;
  locations?: ReadonlyArray<KustomerFullApiSchemaLocation>;
  locale?: string | null;
  timeZone?: string | null;
  tags?: KustomerFullApiSchemaTags;
  sentiment?: KustomerFullApiSchemaSentiment;
  custom?: KustomerFullApiSchemaCustomAttrs;
  birthdayAt?: string | null;
  gender?: "m" | "f";
  createdAt?: string;
  importedAt?: string;
  rev?: number;
  defaultLang?: KustomerFullApiSchemaLang;
}>;

export type KustomerFullApiSchemaBulkBatchUpdateCustomersResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: ReadonlyArray<{
  id: string;
  name: string;
}>;
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetCustomerbyEmailResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  displayName: string;
  displayColor: string;
  displayIcon: string;
  externalId: string;
  externalIds: ReadonlyArray<{
  externalId: string;
  verified: boolean;
  id: string | null;
}>;
  sharedExternalIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  signedUpAt: string | null;
  avatarUrl: string | null;
  username: string | null;
  emails: ReadonlyArray<{
  email: string;
  verified: boolean;
  type: string;
  id: string | null;
}>;
  sharedEmails: ReadonlyArray<{
  email: string;
  verified: boolean;
  type: string;
  id: string | null;
}>;
  phones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sharedPhones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  socials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sharedSocials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  urls: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  locations: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  activeUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  watchers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recentLocation: {
  updatedAt: string;
};
  locale: string | null;
  timeZone: string | null;
  birthdayAt: string | null;
  gender: string | null;
  presence: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  lastSeenAt: string;
  lastActivityAt: string;
  lastCustomerActivityAt: string;
  lastMessageIn: {
  sentAt: string;
  sentiment: string | null;
};
  lastConversation: {
  id: string;
  sentiment: {
  confidence: number;
  polarity: number;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  conversationCounts: {
  all: number;
  snoozed: number;
  open: number;
  done: number;
};
  preview: {
  previewAt: string;
  type: string;
  text: string;
  subject: string;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {
  polarity: number;
  confidence: number;
};
  progressiveStatus: string;
  verified: boolean;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
  included?: ReadonlyArray<{
  type?: string;
  id?: string;
  attributes?: {};
  relationships?: {};
  links?: {};
}>;
};

export type KustomerFullApiSchemaGetCustomerbyExternalIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  displayName: string;
  displayColor: string;
  displayIcon: string;
  externalId: string;
  externalIds: ReadonlyArray<{
  externalId: string;
  verified: boolean;
  id: string | null;
}>;
  sharedExternalIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  signedUpAt: string | null;
  avatarUrl: string | null;
  username: string | null;
  emails: ReadonlyArray<{
  email: string;
  verified: boolean;
  type: string;
  id: string | null;
}>;
  sharedEmails: ReadonlyArray<{
  email: string;
  verified: boolean;
  type: string;
  id: string | null;
}>;
  phones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sharedPhones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  socials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sharedSocials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  urls: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  locations: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  activeUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  watchers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recentLocation: {
  updatedAt: string;
};
  locale: string | null;
  timeZone: string | null;
  birthdayAt: string | null;
  gender: string | null;
  presence: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  lastSeenAt: string;
  lastActivityAt: string;
  lastCustomerActivityAt: string;
  lastMessageIn: {
  sentAt: string;
  sentiment: string | null;
};
  lastConversation: {
  id: string;
  sentiment: {
  confidence: number;
  polarity: number;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  conversationCounts: {
  all: number;
  snoozed: number;
  open: number;
  done: number;
};
  preview: {
  previewAt: string;
  type: string;
  text: string;
  subject: string;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {
  polarity: number;
  confidence: number;
};
  progressiveStatus: string;
  verified: boolean;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
  included?: ReadonlyArray<{
  type?: string;
  id?: string;
  attributes?: {};
  relationships?: {};
  links?: {};
}>;
};

export type KustomerFullApiSchemaCreateaCustomerMergeRequest = {
  source: string;
  target: string;
};

export type KustomerFullApiSchemaCreateaCustomerMergeResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  status: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  source: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  target: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetaCustomerMergeResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  status: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  source: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  target: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetCustomerbyPhoneResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  displayName: string;
  displayColor: string;
  displayIcon: string;
  externalId: string;
  externalIds: ReadonlyArray<{
  externalId: string;
  verified: boolean;
  id: string | null;
}>;
  sharedExternalIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  signedUpAt: string | null;
  avatarUrl: string | null;
  username: string | null;
  emails: ReadonlyArray<{
  email: string;
  verified: boolean;
  type: string;
  id: string | null;
}>;
  sharedEmails: ReadonlyArray<{
  email: string;
  verified: boolean;
  type: string;
  id: string | null;
}>;
  phones: ReadonlyArray<{
  phone: string;
  type: string;
}>;
  sharedPhones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  socials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sharedSocials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  urls: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  locations: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  activeUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  watchers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recentLocation: {
  updatedAt: string;
};
  locale: string | null;
  timeZone: string | null;
  birthdayAt: string | null;
  gender: string | null;
  presence: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  lastSeenAt: string;
  lastActivityAt: string;
  lastCustomerActivityAt: string;
  lastMessageIn: {
  sentAt: string;
  sentiment: string | null;
};
  lastConversation: {
  id: string;
  sentiment: {
  confidence: number;
  polarity: number;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  conversationCounts: {
  all: number;
  snoozed: number;
  open: number;
  done: number;
};
  preview: {
  previewAt: string;
  type: string;
  text: string;
  subject: string;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: {
  polarity: number;
  confidence: number;
};
  progressiveStatus: string;
  verified: boolean;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  messages: {
  links: {
  self: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
  included?: ReadonlyArray<{
  type?: string;
  id?: string;
  attributes?: {};
  relationships?: {};
  links?: {};
}>;
};

export type KustomerFullApiSchemaCustomerSearchRequest = {
  searchHash?: string;
  queryContext?: string;
  includeDeleted?: boolean;
  timeZone?: string;
  and?: ({} | ReadonlyArray<{}>);
  or?: ({} | ReadonlyArray<{}>);
  not?: ({} | ReadonlyArray<{}>);
  sort?: ({} | ReadonlyArray<{}>);
  aggs?: {};
  fields?: ReadonlyArray<{}>;
};

export type KustomerFullApiSchemaGetAllSearchesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
  searchCount: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  data: {
  and?: ReadonlyArray<{
  customer_watchers?: {
  in: ReadonlyArray<string>;
};
  customer_status?: {
  equals: string;
};
  conversation_status?: {
  equals?: string;
  not_equals?: string;
};
  customer_last_seen_at?: {
  gte: string;
};
  customer_updated_at?: {
  gte: string;
};
  conversation_assigned_teams?: {
  not_equals: string;
};
  conversation_assigned_users?: {
  not_set: boolean;
};
  customer_active_users?: {
  not_set: boolean;
};
  message_channel?: {
  equals: string;
};
  customer_sentiment?: {
  equals: string;
};
}>;
  or?: ReadonlyArray<{
  customer_active_users?: {
  not_set?: boolean;
  equals?: string;
};
  conversation_assigned_users?: {
  equals: string;
};
}>;
  sort?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  queryContext?: string;
  fields?: ReadonlyArray<{
  key: string;
}>;
};
  dataHash: string;
  icon: string;
  showBadge: boolean;
  createdAt: string;
  modifiedAt?: string | null;
  defaultVisibility: string;
  teamVisibilities: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  userVisibilities: ReadonlyArray<{
  id: string;
  visibility: string;
}>;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessUsers: ReadonlyArray<string>;
  cacheable: boolean;
  badgeColor?: string | null;
  position?: number;
  updatedAt?: string;
  private?: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateSavedSearchRequest = {
  name: string;
  data: {
  queryContext?: string;
  and?: ({} | ReadonlyArray<{}>);
  or?: ({} | ReadonlyArray<{}>);
  not?: ({} | ReadonlyArray<{}>);
  sort?: ({} | ReadonlyArray<{}>);
  fields?: ReadonlyArray<{}>;
};
  icon?: string;
  badgeColor?: string;
  showBadge?: boolean;
  position?: number;
  routing?: KustomerFullApiSchemaSearchRouting;
  defaultVisibility?: "all" | "search" | "autopilot" | "none";
  userVisibilities?: ReadonlyArray<{
  id?: string;
  visibility?: "all" | "search" | "autopilot" | "none";
}>;
  teamVisibilities?: ReadonlyArray<{
  id?: string;
  visibility?: "all" | "search" | "autopilot" | "none";
}>;
  private?: boolean;
  accessTeams?: ReadonlyArray<string>;
  accessUsers?: ReadonlyArray<string>;
  externalId?: string;
  timeZone?: string;
  folderId?: string | null;
  readonly [key: string]: KustomerFullApiSchemaJsonValue | string | {
  queryContext?: string;
  and?: ({} | ReadonlyArray<{}>);
  or?: ({} | ReadonlyArray<{}>);
  not?: ({} | ReadonlyArray<{}>);
  sort?: ({} | ReadonlyArray<{}>);
  fields?: ReadonlyArray<{}>;
} | boolean | number | KustomerFullApiSchemaSearchRouting | "all" | "search" | "autopilot" | "none" | ReadonlyArray<{
  id?: string;
  visibility?: "all" | "search" | "autopilot" | "none";
}> | ReadonlyArray<string> | string | null | undefined;
};

export type KustomerFullApiSchemaCreateSavedSearchResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  data: {
  and: ReadonlyArray<{
  conversation_status: {
  not_equals: string;
};
}>;
  queryContext: string;
  fields: ReadonlyArray<{
  key: string;
}>;
};
  dataHash: string;
  icon: string;
  badgeColor: string | null;
  showBadge: boolean;
  position: number;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
  defaultVisibility: string;
  teamVisibilities: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  userVisibilities: ReadonlyArray<{
  id: string;
  visibility: string;
}>;
  private: boolean;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessUsers: ReadonlyArray<string>;
  cacheable: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaErrorResponse5 = {
  errors: ReadonlyArray<{
  code: string;
  message: string;
  meta?: {
  readonly [key: string]: KustomerFullApiSchemaJsonValue | undefined;
};
}>;
};

export type KustomerFullApiSchemaGetSavedSearchbyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  data: {
  and: ReadonlyArray<{
  conversation_status: {
  not_equals: string;
};
}>;
  queryContext: string;
  fields: ReadonlyArray<{
  key: string;
}>;
};
  dataHash: string;
  icon: string;
  badgeColor: string | null;
  showBadge: boolean;
  position: number;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
  defaultVisibility: string;
  teamVisibilities: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  userVisibilities: ReadonlyArray<{
  id: string;
  visibility: string;
}>;
  private: boolean;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessUsers: ReadonlyArray<string>;
  cacheable: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateSearchbyIDRequest = {
  name?: string;
  data?: {
  queryContext?: string;
  and?: ({} | ReadonlyArray<{}>);
  or?: ({} | ReadonlyArray<{}>);
  not?: ({} | ReadonlyArray<{}>);
  sort?: ({} | ReadonlyArray<{}>);
  fields?: ReadonlyArray<{}>;
};
  icon?: string;
  badgeColor?: string;
  showBadge?: boolean;
  position?: number;
  routing?: KustomerFullApiSchemaSearchRouting;
  deleted?: boolean;
  defaultVisibility?: "all" | "search" | "autopilot" | "none";
  userVisibilities?: ReadonlyArray<{
  id?: string;
  visibility?: "all" | "search" | "autopilot" | "none";
}>;
  teamVisibilities?: ReadonlyArray<{
  id?: string;
  visibility?: "all" | "search" | "autopilot" | "none";
}>;
  private?: boolean;
  accessTeams?: ReadonlyArray<string>;
  accessUsers?: ReadonlyArray<string>;
  externalId?: string;
  timeZone?: string;
  folderId?: string | null;
  readonly [key: string]: KustomerFullApiSchemaJsonValue | string | {
  queryContext?: string;
  and?: ({} | ReadonlyArray<{}>);
  or?: ({} | ReadonlyArray<{}>);
  not?: ({} | ReadonlyArray<{}>);
  sort?: ({} | ReadonlyArray<{}>);
  fields?: ReadonlyArray<{}>;
} | boolean | number | KustomerFullApiSchemaSearchRouting | "all" | "search" | "autopilot" | "none" | ReadonlyArray<{
  id?: string;
  visibility?: "all" | "search" | "autopilot" | "none";
}> | ReadonlyArray<string> | string | null | undefined;
};

export type KustomerFullApiSchemaUpdateSearchbyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  data: {
  and: ReadonlyArray<{
  customer_sentiment?: {
  equals: string;
};
  customer_custom_isVipBool?: {
  equals: string;
};
}>;
  or: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  queryContext: string;
  sort: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  dataHash: string;
  icon: string;
  badgeColor: string | null;
  showBadge: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
  defaultVisibility: string;
  teamVisibilities: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  userVisibilities: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  private: boolean;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  cacheable: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaCreateSearchFolderRequest = {
  name: string;
};

export type KustomerFullApiSchemaCreateSearchFolderResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateSearchFolderbyIDRequest = {
  name: string;
};

export type KustomerFullApiSchemaUpdateSearchFolderbyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetAllPinnedSearchesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  search: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  search: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaPinSearchRequest = {
  search: string;
};

export type KustomerFullApiSchemaPinSearchResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  search: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  search: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetSearchPositionsResponseSuccessFilterAll = {
  data: {
  type: string;
  id: string;
  attributes: {
  positions: ReadonlyArray<{
  type: string;
  id: string;
  children?: ReadonlyArray<{
  type: string;
  id: string;
}>;
}>;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateSearchPositionsRequest = {
  positions: ReadonlyArray<({
  type: "search";
  id: string;
} | {
  type: "folder";
  id: string;
  children?: ReadonlyArray<{
  type: "search";
  id: string;
}>;
})>;
  rev?: number;
};

export type KustomerFullApiSchemaUpdateSearchPositionsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  positions: ReadonlyArray<{
  type: string;
  id: string;
  children?: ReadonlyArray<{
  type: string;
  id: string;
}>;
}>;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetSchemaforSearchesResponseSuccess = {
  data: {
  type: string;
  attributes: {
  fields: {
  type: string;
  properties: {
  customer_any_text: {
  type: string;
  operator: string;
};
  customer_name: {
  type: string;
  operator: string;
};
  customer_gender: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  customer_presence: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  customer_email: {
  type: string;
  format: string;
  operator: string;
};
  customer_shared_email: {
  type: string;
  format: string;
  operator: string;
};
  customer_phone: {
  type: string;
  pattern: string;
  operator: string;
};
  customer_shared_phone: {
  type: string;
  pattern: string;
  operator: string;
};
  customer_whatsapp: {
  type: string;
  pattern: string;
  operator: string;
};
  customer_urls: {
  type: string;
  operator: string;
};
  customer_address: {
  type: string;
  operator: string;
};
  customer_locale: {
  type: string;
  operator: string;
};
  customer_activity_at: {
  type: string;
  format: string;
  operator: string;
};
  customer_last_seen_at: {
  type: string;
  format: string;
  operator: string;
};
  customer_signed_up_at: {
  type: string;
  format: string;
  operator: string;
};
  customer_last_message_sent_at: {
  type: string;
  format: string;
  operator: string;
};
  customer_last_message_out_sent_at: {
  type: string;
  format: string;
  operator: string;
};
  customer_last_message_unresponded_to_sent_at: {
  type: string;
  format: string;
  operator: string;
};
  customer_last_message_at: {
  type: string;
  format: string;
  operator: string;
};
  customer_externalId: {
  type: string;
  operator: string;
};
  customer_shared_externalId: {
  type: string;
  operator: string;
};
  customer_created_at: {
  type: string;
  format: string;
  operator: string;
};
  customer_updated_at: {
  type: string;
  format: string;
  operator: string;
};
  customer_modified_at: {
  type: string;
  format: string;
  operator: string;
};
  customer_created_by: {
  $ref: string;
  operator: string;
};
  customer_modified_by: {
  $ref: string;
  operator: string;
};
  customer_satisfaction_avg_score: {
  type: string;
  operator: string;
};
  customer_satisfaction_avg_rating: {
  type: string;
  operator: string;
};
  customer_conversations_count: {
  type: string;
  operator: string;
};
  customer_status: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  customer_progressive_status: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  customer_active_users: {
  $ref: string;
  operator: string;
};
  customer_watchers: {
  $ref: string;
  operator: string;
};
  customer_tags: {
  type: string;
  operator: string;
};
  customer_sentiment: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  customer_social_type: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  customer_social_userid: {
  type: string;
  operator: string;
};
  customer_social_username: {
  type: string;
  operator: string;
};
  customer_shared_social_type: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  customer_shared_social_userid: {
  type: string;
  operator: string;
};
  customer_shared_social_username: {
  type: string;
  operator: string;
};
  customer_default_lang: {
  type: string;
  operator: string;
};
  customer_imported_at: {
  type: string;
  format: string;
  operator: string;
};
  customer_imported: {
  type: string;
  operator: string;
};
  company_any_text: {
  type: string;
  operator: string;
};
  company_name: {
  type: string;
  operator: string;
};
  company_tags: {
  type: string;
  operator: string;
};
  company_default_lang: {
  type: string;
  operator: string;
};
  company_imported_at: {
  type: string;
  format: string;
  operator: string;
};
  company_imported: {
  type: string;
  operator: string;
};
  company_created_at: {
  type: string;
  format: string;
  operator: string;
};
  company_created_by: {
  $ref: string;
  operator: string;
};
  company_modified_at: {
  type: string;
  format: string;
  operator: string;
};
  company_modified_by: {
  $ref: string;
  operator: string;
};
  company_updated_at: {
  type: string;
  format: string;
  operator: string;
};
  message_any_text: {
  type: string;
  operator: string;
};
  message_body: {
  type: string;
  operator: string;
};
  message_channel: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  message_size: {
  type: string;
  operator: string;
};
  message_direction: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  message_sent_at: {
  type: string;
  format: string;
  operator: string;
};
  message_created_at: {
  type: string;
  format: string;
  operator: string;
};
  message_updated_at: {
  type: string;
  format: string;
  operator: string;
};
  message_created_by: {
  $ref: string;
  operator: string;
};
  message_modified_by: {
  $ref: string;
  operator: string;
};
  message_sentiment: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  message_customer_id: {
  type: string;
  operator: string;
};
  message_status: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  message_error_at: {
  type: string;
  format: string;
  operator: string;
};
  message_error_title: {
  type: string;
  operator: string;
};
  message_external_id: {
  type: string;
  operator: string;
};
  message_direction_type: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  message_created_by_teams: {
  type: string;
  operator: string;
};
  message_redacted: {
  type: string;
  operator: string;
};
  message_redacted_at: {
  type: string;
  format: string;
  operator: string;
};
  message_imported_at: {
  type: string;
  format: string;
  operator: string;
};
  message_imported: {
  type: string;
  operator: string;
};
  message_recipients: {
  type: string;
  operator: string;
};
  message_sender: {
  type: string;
  operator: string;
};
  message_shortcuts: {
  type: string;
  operator: string;
};
  message_subject: {
  type: string;
  operator: string;
};
  message_source: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  message_attachment_count: {
  type: string;
  operator: string;
};
  message_auto: {
  type: string;
  operator: string;
};
  message_lang: {
  type: string;
  operator: string;
};
  note_any_text: {
  type: string;
  operator: string;
};
  note_body: {
  type: string;
  operator: string;
};
  note_created_at: {
  type: string;
  format: string;
  operator: string;
};
  note_modified_at: {
  type: string;
  format: string;
  operator: string;
};
  note_updated_at: {
  type: string;
  format: string;
  operator: string;
};
  note_created_by: {
  $ref: string;
  operator: string;
};
  note_modified_by: {
  $ref: string;
  operator: string;
};
  note_deleted: {
  $ref: string;
  operator: string;
};
  note_user_mentions: {
  $ref: string;
  operator: string;
};
  note_team_mentions: {
  type: string;
  pattern: string;
  collection: string;
  operator: string;
};
  note_attachment_count: {
  $ref: string;
  operator: string;
};
  note_external_id: {
  type: string;
  operator: string;
};
  note_customer_id: {
  type: string;
  operator: string;
};
  note_conversation_id: {
  type: string;
  operator: string;
};
  note_lang: {
  type: string;
  operator: string;
};
  note_imported_at: {
  type: string;
  format: string;
  operator: string;
};
  note_imported: {
  type: string;
  operator: string;
};
  conversation_any_text: {
  type: string;
  operator: string;
};
  conversation_name: {
  type: string;
  operator: string;
};
  conversation_sentiment: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_status: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_sub_status: {
  type: string;
  operator: string;
};
  conversation_created_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_updated_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_modified_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_modified_by: {
  $ref: string;
  operator: string;
};
  conversation_message_count: {
  type: string;
  operator: string;
};
  conversation_note_count: {
  type: string;
  operator: string;
};
  conversation_satisfaction_survey_id: {
  type: string;
  operator: string;
};
  conversation_satisfaction_sent_by: {
  $ref: string;
  operator: string;
};
  conversation_satisfaction_sent_by_teams: {
  type: string;
  pattern: string;
  collection: string;
  operator: string;
};
  conversation_satisfaction_created_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_satisfaction_score: {
  type: string;
  operator: string;
};
  conversation_satisfaction_rating: {
  type: string;
  operator: string;
};
  conversation_satisfaction_status: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_channels: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_satisfaction: {
  type: string;
  operator: string;
};
  conversation_priority: {
  type: string;
  operator: string;
  minimum: number;
  maximum: number;
};
  conversation_tags: {
  type: string;
  operator: string;
};
  conversation_assigned_users: {
  $ref: string;
  operator: string;
};
  conversation_assigned_teams: {
  type: string;
  pattern: string;
  collection: string;
  operator: string;
};
  conversation_last_message_sent_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_last_message_out_sent_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_last_message_unresponded_to_sent_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_last_message_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_first_response_sent_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_first_response_time: {
  type: string;
  operator: string;
};
  conversation_first_response_created_by: {
  $ref: string;
  operator: string;
};
  conversation_last_response_created_by: {
  $ref: string;
  operator: string;
};
  conversation_last_message_direction: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_direction: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_outbound_message_count: {
  type: string;
  operator: string;
};
  conversation_customer_id: {
  type: string;
  operator: string;
};
  conversation_campaign_id: {
  type: string;
  operator: string;
};
  conversation_first_message_in_sent_at: {
  format: string;
  operator: string;
};
  conversation_first_message_in_direction_type: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_first_message_in_channel: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_first_message_out_sent_at: {
  format: string;
  operator: string;
};
  conversation_first_message_out_direction_type: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_first_message_out_channel: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_time_created_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_time_conversation_id: {
  type: string;
  operator: string;
};
  conversation_time_created_by_teams: {
  type: string;
  pattern: string;
  collection: string;
  operator: string;
};
  conversation_time_assigned_users: {
  $ref: string;
  operator: string;
};
  conversation_time_assigned_teams: {
  type: string;
  pattern: string;
  collection: string;
  operator: string;
};
  conversation_time_touched: {
  type: string;
  operator: string;
};
  conversation_time_reopened: {
  type: string;
  operator: string;
};
  conversation_time_snoozed: {
  type: string;
  operator: string;
};
  conversation_time_resolved: {
  type: string;
  operator: string;
};
  conversation_time_message_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_time_message_time: {
  type: string;
  operator: string;
};
  conversation_time_messages_sent: {
  type: string;
  operator: string;
};
  conversation_time_note_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_time_note_time: {
  type: string;
  operator: string;
};
  conversation_time_notes_sent: {
  type: string;
  operator: string;
};
  conversation_time_handle_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_time_handle_time: {
  type: string;
  operator: string;
};
  conversation_time_channels: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_default_lang: {
  type: string;
  operator: string;
};
  any_text: {
  type: string;
  operator: string;
};
  tracking_events: {
  type: string;
  operator: string;
};
  conversation_sla_status: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_sla_version_id: {
  type: string;
  operator: string;
};
  conversation_sla_id: {
  type: string;
  operator: string;
};
  conversation_sla_breached: {
  type: string;
  operator: string;
};
  conversation_sla_breach_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_sla_satisfied_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_sla_breach_metric: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_first_done_created_by: {
  $ref: string;
  operator: string;
};
  conversation_last_done_created_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_last_done_created_by: {
  $ref: string;
  operator: string;
};
  conversation_last_done_created_by_teams: {
  type: string;
  pattern: string;
  collection: string;
  operator: string;
};
  conversation_reply_channel: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_queue: {
  type: string;
  pattern: string;
  collection: string;
  operator: string;
};
  conversation_external_queue: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_ended: {
  type: string;
  operator: string;
};
  conversation_ended_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_ended_reason: {
  type: string;
  operator: string;
};
  conversation_imported_at: {
  type: string;
  format: string;
  operator: string;
};
  conversation_imported: {
  type: string;
  operator: string;
};
  kobject_any_text: {
  type: string;
  operator: string;
};
  kobject_created_at: {
  type: string;
  format: string;
  operator: string;
};
  kobject_updated_at: {
  type: string;
  format: string;
  operator: string;
};
  kobject_imported_at: {
  type: string;
  format: string;
  operator: string;
};
  kobject_imported: {
  type: string;
  operator: string;
};
};
  definitions: {
  user: {
  type: string;
  pattern: string;
  collection: string;
};
};
};
  operators: {
  type: string;
  properties: {
  string: {
  type: string;
  enum: ReadonlyArray<string>;
};
  string_notanalyzed: {
  type: string;
  enum: ReadonlyArray<string>;
};
  text: {
  type: string;
  enum: ReadonlyArray<string>;
};
  any: {
  type: string;
  enum: ReadonlyArray<string>;
};
  number: {
  type: string;
  enum: ReadonlyArray<string>;
};
  datetime: {
  type: string;
  enum: ReadonlyArray<string>;
};
  boolean: {
  type: string;
  enum: ReadonlyArray<string>;
};
  list: {
  type: string;
  enum: ReadonlyArray<string>;
};
  tree: {
  type: string;
  enum: ReadonlyArray<string>;
};
};
};
  sort: {
  type: string;
  properties: {
  fields: {
  type: string;
  enum: ReadonlyArray<string>;
};
};
};
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateaDraftRequest = (KustomerFullApiSchemaDraftEmail | KustomerFullApiSchemaDraftSms | KustomerFullApiSchemaDraftWhatsapp | KustomerFullApiSchemaDraftChat | KustomerFullApiSchemaDraftFacebook | KustomerFullApiSchemaDraftTwitterTweet | KustomerFullApiSchemaDraftTwitterDm | KustomerFullApiSchemaDraftNote | KustomerFullApiSchemaDraftInstagram);

export type KustomerFullApiSchemaUpdateaDraftResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  channel: string;
  body: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  customer: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetDraftAttachmentsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  draft: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateDraftAttachmentRequest = {
  name: string;
  contentType: string;
  contentLength: number;
};

export type KustomerFullApiSchemaCreateDraftAttachmentResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  draft: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  related: string;
};
};
};

export type KustomerFullApiSchemaGetDraftAttachmentResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  draft: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  related: string;
};
};
};

export type KustomerFullApiSchemaGetaDraftForwardByIDResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  app: string;
  channel: string;
  body: string;
  status: string;
  from: {
  name: string;
  email: string;
};
  to: ReadonlyArray<{
  name: string;
  email: string;
}>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  customer: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  attachments?: ReadonlyArray<{
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
}>;
};
};
};

export type KustomerFullApiSchemaUpdateaDraftForwardRequest = {
  status?: "draft" | "sent" | "failed";
  sendAt?: string;
  lang?: KustomerFullApiSchemaLang;
  to?: ReadonlyArray<{
  email: string;
  name?: string;
}>;
  from?: {
  email: string;
  name?: string;
};
  body?: string;
  subject?: string;
  replyTo?: string;
  template?: string | null;
  payload?: {};
  attachments?: ReadonlyArray<{
  id: string;
  name: string;
  contentType: string;
  contentLength: number;
}>;
};

export type KustomerFullApiSchemaUpdateaDraftForwardResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  app: string;
  channel: string;
  body: string;
  status: string;
  from: {
  name: string;
  email: string;
};
  to: ReadonlyArray<{
  name: string;
  email: string;
}>;
  sendAt: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  customer: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  attachments?: ReadonlyArray<{
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
}>;
};
};
};

export type KustomerFullApiSchemaGetForwardAttachmentsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  forward: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateForwardAttachmentRequest = {
  name: string;
  contentType: string;
  contentLength: number;
};

export type KustomerFullApiSchemaCreateForwardAttachmentResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  forward: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  related: string;
};
};
};

export type KustomerFullApiSchemaGetForwardAttachmentResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  forward: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  related: string;
};
};
};

export type KustomerFullApiSchemaGetEmailHooksResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  title: string;
  description: string;
  email: string;
  eventName: string;
  hash: string;
  key: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateEmailHookRequest = {
  title: string;
  description?: string;
  eventName?: string;
  outputTemplate?: {};
  outputSchema?: {};
};

export type KustomerFullApiSchemaCreateEmailHookResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  title: string;
  description: string;
  email: string;
  eventName: string;
  hash: string;
  key: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetanEmailHookResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  title: string;
  description: string;
  email: string;
  eventName: string;
  hash: string;
  key: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateEmailHookRequest = {
  debug?: boolean;
  description?: string;
  title?: string;
};

export type KustomerFullApiSchemaUpdateEmailHookResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  title: string;
  description: string;
  email: string;
  eventName: string;
  hash: string;
  key: string;
  debug: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetEmailHookTransactionsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  data: {
  "something.abutest": string;
  "abu.test1": string;
  "abu.test2": {
  "abu.test3": string;
  "abu.test4": string;
};
};
  createdAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  hook: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaGetFormHooksResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  title: string;
  description: string;
  eventName: string;
  hash: string;
  url: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateFormHookRequest = {
  title: string;
  description?: string;
  eventName?: string;
  outputTemplate?: {};
  outputSchema?: {};
};

export type KustomerFullApiSchemaCreateFormHookResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  title: string;
  description: string;
  eventName: string;
  hash: string;
  url: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaCreateFormHookTransactionResponseSuccessJSON = {
  data: {
  id: string;
  type: string;
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetaFormHookResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  title: string;
  description: string;
  eventName: string;
  hash: string;
  url: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateFormHookRequest = {
  debug?: boolean;
  description?: string;
  title?: string;
};

export type KustomerFullApiSchemaUpdateFormHookResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  title: string;
  description: string;
  eventName: string;
  hash: string;
  url: string;
  debug: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGETFormHookTransactionsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  data: {
  "something.abutest": string;
  "abu.test1": string;
  "abu.test2": {
  "abu.test3": string;
  "abu.test4": string;
};
};
  createdAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  hook: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateFormHookOrgTransactionResponseSuccesswithreCAPTCHA = {
  data: {
  id: string;
  type: string;
};
};

export type KustomerFullApiSchemaGetWebHooksResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  description: string;
  eventName: string;
  hash: string;
  url: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateWebHookRequest = {
  title: string;
  description?: string;
  eventName?: string;
  outputTemplate?: {};
  outputSchema?: {};
};

export type KustomerFullApiSchemaCreateWebHookResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  description: string;
  eventName: string;
  hash: string;
  url: string;
  debug: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaCreateWebHookTransactionResponseSuccessJSON = {
  data: {
  id: string;
  type: string;
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetaWebHookResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  description: string;
  eventName: string;
  hash: string;
  url: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateWebHookRequest = {
  debug?: boolean;
  description?: string;
  title?: string;
};

export type KustomerFullApiSchemaUpdateWebHookResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  description: string;
  eventName: string;
  hash: string;
  url: string;
  debug: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetWebHookTransactionsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  data: {
  unstructured: string;
};
  createdAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  hook: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaGetKlassesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  displayName: string;
  icon?: string;
  color?: string;
  klassSchema?: string;
  appVersion?: string;
  appDisabled?: boolean;
  status: string;
  mixins?: ReadonlyArray<"commentable" | "assignable" | "editable" | "creatable">;
  updatedAt: string;
  createdAt: string;
  s3DataUrl?: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  kobjects: {
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateaKlassRequest = {
  name: string;
  displayName?: string;
  icon?: string;
  color?: string;
  jsonSchema?: KustomerFullApiSchemaJsonValue;
  klassSchema?: "task";
  mixins?: ReadonlyArray<"commentable" | "assignable" | "editable" | "creatable">;
  status?: "enabled" | "disabled";
};

export type KustomerFullApiSchemaCreateaKlassResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  status: string;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  kobjects: {
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetKlassResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  displayName?: string;
  icon: string;
  color?: string;
  appDisabled?: boolean;
  status: string;
  mixins?: ReadonlyArray<"commentable" | "assignable" | "editable" | "creatable">;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  kobjects: {
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateaKlassRequest = {
  displayName?: string;
  icon?: string;
  color?: string;
  jsonSchema?: KustomerFullApiSchemaJsonValue;
  klassSchema?: "task";
  mixins?: ReadonlyArray<"commentable" | "assignable" | "editable" | "creatable">;
  status?: "enabled" | "disabled";
};

export type KustomerFullApiSchemaUpdateaKlassResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  displayName?: string;
  appDisabled?: boolean;
  mixins?: ReadonlyArray<"commentable" | "assignable" | "editable" | "creatable">;
  icon: string;
  status: string;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  kobjects: {
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetKObjectsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  title: string;
  icon: string;
  images: ReadonlyArray<string>;
  s3DataUrl?: string;
  custom: {};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  updatedAt: string;
  createdAt: string;
  rev: number;
  klassDisplayName?: string;
  klassMixins?: ReadonlyArray<"assignable">;
  firstDone?: KustomerFullApiSchemaKobjectResponseFirstDone;
  lastDone?: KustomerFullApiSchemaKobjectResponseLastDone;
  doneCount?: number;
  reopenCount?: number;
  reopenFromDoneCount?: number;
  queue?: string;
  assignedUser?: string;
  status?: "open" | "done";
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  queue?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  klass: {
  link: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateKObjectRequest = {
  customer?: string;
  company?: string;
  externalId?: string;
  title: string;
  description?: string;
  images?: ReadonlyArray<string>;
  icon?: string;
  data?: {};
  custom?: KustomerFullApiSchemaCustomAttrs;
  tags?: KustomerFullApiSchemaTags;
  createdAt?: string;
  importedAt?: string;
};

export type KustomerFullApiSchemaCreateKObjectResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  title: string;
  icon: string;
  images: ReadonlyArray<string>;
  custom: {
  orderStatusStr: string;
  shippingStatusStr: string;
  billingStatusStr: string;
  specialInstructionsStr: string;
  orderNumberNum: number;
  orderDescriptionStr: string;
  totalPriceNum: number;
  orderUpdatedAt: string;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  updatedAt: string;
  createdAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  klass: {
  link: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetKObjectResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  title: string;
  icon: string;
  images: ReadonlyArray<string>;
  custom: {
  orderStatusStr: string;
  shippingStatusStr: string;
  billingStatusStr: string;
  specialInstructionsStr: string;
  orderNumberNum: number;
  orderDescriptionStr: string;
  totalPriceNum: number;
  orderUpdatedAt: string;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  updatedAt: string;
  createdAt: string;
  rev: number;
  firstDone?: KustomerFullApiSchemaKobjectResponseFirstDone;
  lastDone?: KustomerFullApiSchemaKobjectResponseLastDone;
  doneCount?: number;
  reopenCount?: number;
  reopenFromDoneCount?: number;
  queue?: string;
  assignedUser?: string;
  status?: "open" | "done";
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  klass: {
  link: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateKObjectRequest = {
  externalId?: string;
  title?: string;
  description?: string;
  images?: ReadonlyArray<string>;
  icon?: string;
  data?: {};
  custom?: KustomerFullApiSchemaCustomAttrs;
  tags?: KustomerFullApiSchemaTags;
  createdAt?: string;
  importedAt?: string;
  rev?: number;
};

export type KustomerFullApiSchemaUpdateKObjectResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  title: string;
  description: string | null;
  icon: string;
  images: ReadonlyArray<string>;
  custom: {
  orderUpdatedAt: string;
  totalPriceNum: number;
  orderDescriptionStr: string;
  orderNumberNum: number;
  specialInstructionsStr: string;
  billingStatusStr: string;
  shippingStatusStr: string;
  orderStatusStr: string;
  refundedBool: boolean;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  updatedAt: string;
  createdAt: string;
  rev: number;
  firstDone?: KustomerFullApiSchemaKobjectResponseFirstDone;
  lastDone?: KustomerFullApiSchemaKobjectResponseLastDone;
  doneCount?: number;
  reopenCount?: number;
  reopenFromDoneCount?: number;
  queue?: string;
  assignedUser?: string;
  status?: "open" | "done";
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  klass: {
  link: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaBulkDeleteKObjectsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<string>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: {};
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaBulkCreateKObjectsRequest = ReadonlyArray<{
  customer?: string;
  company?: string;
  externalId?: string;
  title: string;
  description?: string;
  images?: ReadonlyArray<string>;
  icon?: string;
  data?: {};
  custom?: KustomerFullApiSchemaCustomAttrs;
  tags?: KustomerFullApiSchemaTags;
  createdAt?: string;
  importedAt?: string;
}>;

export type KustomerFullApiSchemaBulkCreateKObjectsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: ReadonlyArray<{
  title: string;
  customer: string;
  externalId: string;
  description: string;
}>;
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaBulkBatchUpdateKObjectsRequest = ReadonlyArray<{
  id: string;
  externalId?: string;
  title?: string;
  description?: string;
  images?: ReadonlyArray<string>;
  icon?: string;
  data?: {};
  custom?: KustomerFullApiSchemaCustomAttrs;
  tags?: KustomerFullApiSchemaTags;
  createdAt?: string;
  importedAt?: string;
  rev?: number;
}>;

export type KustomerFullApiSchemaBulkBatchUpdateKObjectsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: ReadonlyArray<{
  id: string;
  custom: {
  shippingStatusStr: string;
};
}>;
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetKViewsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  resource: string;
  template: string;
  context: string;
  meta: {
  displayName: string;
  icon: string;
};
  enabled: boolean;
  advanced: boolean;
  layout: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  components: {};
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaGetKViewsbyResourceResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  resource: string;
  template: string;
  context: string;
  enabled: boolean;
  advanced: boolean;
  layout: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  components: {};
  meta: {
  icon: string;
  displayName: string;
};
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaUpdateKViewsOrderRequest = {
  kviews: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaUpdateKViewsOrderResponseSuccess = {
  data: {
  type: string;
  attributes: {
  resource: string;
  context: string;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  kviews: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateKViewRequest = {
  template?: string;
  context?: "expanded-timeline" | "smartbar-details" | "smartbar-card";
  meta?: {} | null;
  enabled?: boolean;
  advanced?: boolean;
  layout?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  components?: {};
};

export type KustomerFullApiSchemaUpdateKViewResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  resource: string;
  template: string;
  context: string;
  meta: {
  displayName: string;
  icon: string;
};
  enabled: boolean;
  advanced: boolean;
  layout: ReadonlyArray<{
  type: string;
  id: string;
  children: ReadonlyArray<{
  type: string;
  id: string;
  children: ReadonlyArray<{
  id: string;
  type: string;
}>;
}>;
}>;
  components: {
  XNy_Ucje3U: {
  id: string;
  componentAttributes: {
  borderStyle: string;
  borderWidth: string;
  borderColor: string;
};
  componentType: string;
};
  dearOF7zcv: {
  id: string;
  componentAttributes: {
  borderStyle: string;
  borderWidth: string;
  borderColor: string;
};
  componentType: string;
};
  uZdCRe57g: {
  id: string;
  componentAttributes: {
  id: string;
  displayName: string;
  type: string;
  value: string;
};
  componentType: string;
};
};
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaCreateMediaRequest = {
  name: string;
  contentType: string;
  contentLength: number;
};

export type KustomerFullApiSchemaCreateMediaResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
  redacted: boolean;
  uploaded: boolean;
  createdAt: string;
  updatedAt: string;
  context: string;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
  meta: {
  provider: string;
  upload: {
  url: string;
  fields: {
  key: string;
  acl: string;
  "Content-Type": string;
  "X-Amz-Meta-Attachment-Id": string;
  bucket: string;
  "X-Amz-Algorithm": string;
  "X-Amz-Credential": string;
  "X-Amz-Date": string;
  Policy: string;
  "X-Amz-Signature": string;
};
};
};
};

export type KustomerFullApiSchemaGetMediabyIDResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
  redacted: boolean;
  uploaded: boolean;
  createdAt: string;
  updatedAt: string;
  context: string;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
  meta: {
  provider: string;
  upload: {
  url: string;
  fields: {
  key: string;
  acl: string;
  "Content-Type": string;
  "X-Amz-Meta-Attachment-Id": string;
  bucket: string;
  "X-Amz-Algorithm": string;
  "X-Amz-Credential": string;
  "X-Amz-Date": string;
  Policy: string;
  "X-Amz-Signature": string;
};
};
};
};

export type KustomerFullApiSchemaUpdateMediaRequest = {
  name?: string;
  redacted?: boolean;
};

export type KustomerFullApiSchemaUpdateMediaResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
  redacted: boolean;
  uploaded: boolean;
  createdAt: string;
  updatedAt: string;
  context: string;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
  meta: {
  provider: string;
  upload: {
  url: string;
  fields: {
  key: string;
  acl: string;
  "Content-Type": string;
  "X-Amz-Meta-Attachment-Id": string;
  bucket: string;
  "X-Amz-Algorithm": string;
  "X-Amz-Credential": string;
  "X-Amz-Date": string;
  Policy: string;
  "X-Amz-Signature": string;
};
};
};
};

export type KustomerFullApiSchemaGetMessagesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  externalId: string;
  channel: string;
  app: string;
  size: number;
  direction: string;
  preview: string;
  sentiment: {};
  meta: {
  inReplyTo: string;
  recipient: {
  mailboxHash: string;
  email: string;
};
  cc: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  to: ReadonlyArray<{
  email: string;
}>;
  from: string;
  subject: string;
};
  status: string;
  sentAt: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  related: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateMessageRequest = {
  id?: string;
  externalId?: string;
  customer?: string;
  conversation?: string;
  reference?: {
  message: string;
  type: "reply" | "replyAll" | "forward";
};
  channel: "email" | "sms" | "chat" | "facebook" | "twitter-dm" | "twitter-tweet" | "voice" | "instagram" | "whatsapp";
  preview?: string;
  subject?: string;
  direction: "in" | "out";
  app: string;
  size?: number;
  related?: string;
  status?: "sent" | "received" | "error";
  error?: KustomerFullApiSchemaError;
  errorAt?: string;
  auto?: boolean;
  sentAt?: string;
  source?: "bulk" | "satisfaction";
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  attachments?: (ReadonlyArray<KustomerFullApiSchemaAttachment> | ReadonlyArray<string>);
  location?: {
  name?: string;
  address?: string;
  address2?: string;
  address3?: string;
  latitude?: number;
  longitude?: number;
  countryCode?: string;
  countryName?: string;
  regionCode?: string;
  regionName?: string;
  cityName?: string;
  zipCode?: string;
  areaCode?: string;
};
  meta?: {};
  custom?: KustomerFullApiSchemaCustomAttrs;
  sentiment?: KustomerFullApiSchemaSentiment;
  createdAt?: string;
  modifiedAt?: string;
  createdBy?: string;
  modifiedBy?: string;
  importedAt?: string;
  lang?: KustomerFullApiSchemaLang;
  queue?: (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);
};

export type KustomerFullApiSchemaCreateMessageResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  channel: string;
  app: string;
  size: string;
  direction: string;
  preview: string;
  subject: string;
  meta: string;
  status: string;
  sentAt: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  lang: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetaMessageResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  externalId: string;
  channel: string;
  app: string;
  size: number;
  direction: string;
  preview: string;
  sentiment: {
  confidence: number;
  polarity: number;
};
  meta: {
  subject: string;
  from: string;
  to: ReadonlyArray<{
  email: string;
}>;
  cc: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recipient: {
  email: string;
  mailboxHash: string;
};
  inReplyTo: string;
};
  status: string;
  lang: string;
  sentAt: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  related: string;
};
};
};

export type KustomerFullApiSchemaUpdateMessageAttributesRequest = {
  conversation?: string;
  externalId?: string | null;
  preview?: string | null;
  subject?: string | null;
  status?: "sent" | "received" | "error";
  error?: KustomerFullApiSchemaError;
  errorAt?: string;
  sentAt?: string | null;
  size?: number;
  attachments?: ReadonlyArray<KustomerFullApiSchemaAttachment>;
  meta?: {};
  custom?: KustomerFullApiSchemaCustomAttrs;
  related?: string;
  sentiment?: KustomerFullApiSchemaSentiment;
  createdAt?: string;
  modifiedAt?: string;
  updatedAt?: string;
  createdBy?: string;
  modifiedBy?: string | null;
  lang?: KustomerFullApiSchemaLang;
};

export type KustomerFullApiSchemaUpdateMessageAttributesResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  externalId: string;
  channel: string;
  app: string;
  size: number;
  direction: string;
  preview: string;
  sentiment: {
  confidence: number;
  polarity: number;
};
  meta: {
  subject: string;
  from: string;
  to: ReadonlyArray<{
  email: string;
}>;
  cc: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recipient: {
  email: string;
  mailboxHash: string;
};
  inReplyTo: string;
};
  status: string;
  lang: string | null;
  sentAt: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  related: string;
};
};
};

export type KustomerFullApiSchemaUpdateaMessageRequest = {
  conversation?: string;
  externalId?: string | null;
  preview?: string | null;
  subject?: string | null;
  status?: "sent" | "received" | "error";
  error?: KustomerFullApiSchemaError;
  errorAt?: string;
  sentAt?: string | null;
  size?: number;
  attachments?: ReadonlyArray<KustomerFullApiSchemaAttachment>;
  meta?: {};
  custom?: KustomerFullApiSchemaCustomAttrs;
  related?: string;
  sentiment?: KustomerFullApiSchemaSentiment;
  createdAt?: string;
  modifiedAt?: string;
  updatedAt?: string;
  createdBy?: string;
  spam?: boolean;
  modifiedBy?: string | null;
  lang?: KustomerFullApiSchemaLang;
  reactions?: ReadonlyArray<KustomerFullApiSchemaReaction>;
};

export type KustomerFullApiSchemaUpdateaMessageResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  externalId: string;
  channel: string;
  app: string;
  size: number;
  direction: string;
  preview: string;
  sentiment: {
  confidence: number;
  polarity: number;
};
  meta: {
  subject: string;
  from: string;
  to: ReadonlyArray<{
  email: string;
}>;
  cc: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recipient: {
  email: string;
  mailboxHash: string;
};
  inReplyTo: string;
};
  status: string;
  lang: string;
  sentAt: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  related: string;
};
};
};

export type KustomerFullApiSchemaRedactMessageRequest = ({
  preview?: string;
} | {
  attachments?: ReadonlyArray<string>;
} | {
  meta?: {};
});

export type KustomerFullApiSchemaRedactMessageResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  preview: string;
  meta?: string;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  createdBy?: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  message?: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  conversation?: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  customer?: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  attachments?: ReadonlyArray<{
  data?: {
  id: string;
  type: string;
};
  links?: {
  self: string;
};
}>;
};
};
};

export type KustomerFullApiSchemaGetAttachmentbyMessageandAttachmentIDInboundorOutboundResponseGetAttachmentsbyMessageandAttachmentIDInboundorOutbound = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  contentType: string;
  contentLength: number;
  redacted: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  message: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  related: string;
};
};
};

export type KustomerFullApiSchemaBulkCreateMessagesRequest = ReadonlyArray<{
  id?: string;
  externalId?: string;
  customer?: string;
  conversation?: string;
  reference?: {
  message: string;
  type: "reply" | "replyAll" | "forward";
};
  channel: "email" | "sms" | "chat" | "facebook" | "twitter-dm" | "twitter-tweet" | "voice" | "instagram" | "whatsapp";
  preview?: string;
  subject?: string;
  direction?: "in" | "out";
  app: string;
  size?: number;
  related?: string;
  status?: "sent" | "received" | "error";
  error?: KustomerFullApiSchemaError;
  errorAt?: string;
  auto?: boolean;
  sentAt?: string;
  source?: "bulk" | "satisfaction";
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  attachments?: (ReadonlyArray<KustomerFullApiSchemaAttachment> | ReadonlyArray<string>);
  location?: {
  name?: string;
  address?: string;
  address2?: string;
  address3?: string;
  latitude?: number;
  longitude?: number;
  countryCode?: string;
  countryName?: string;
  regionCode?: string;
  regionName?: string;
  cityName?: string;
  zipCode?: string;
  areaCode?: string;
};
  meta?: {};
  custom?: KustomerFullApiSchemaCustomAttrs;
  sentiment?: KustomerFullApiSchemaSentiment;
  createdAt?: string;
  modifiedAt?: string;
  createdBy?: string;
  modifiedBy?: string;
  importedAt?: string;
  lang?: KustomerFullApiSchemaLang;
  queue?: (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);
}>;

export type KustomerFullApiSchemaBulkCreateMessagesResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: ReadonlyArray<{
  id: string;
  app: string;
  channel: string;
  preview: string;
  subject: string;
  size: number;
  createdAt: string;
}>;
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaBulkBatchUpdateMessagesRequest = ReadonlyArray<{
  id: string;
  conversation?: string;
  externalId?: string | null;
  preview?: string | null;
  subject?: string | null;
  status?: "sent" | "received" | "error";
  error?: KustomerFullApiSchemaError;
  errorAt?: string;
  sentAt?: string | null;
  size?: number;
  attachments?: ReadonlyArray<KustomerFullApiSchemaAttachment>;
  meta?: {};
  custom?: KustomerFullApiSchemaCustomAttrs;
  related?: string;
  sentiment?: KustomerFullApiSchemaSentiment;
  createdAt?: string;
  modifiedAt?: string;
  updatedAt?: string;
  createdBy?: string;
  modifiedBy?: string | null;
  lang?: KustomerFullApiSchemaLang;
}>;

export type KustomerFullApiSchemaBulkBatchUpdateMessagesResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: ReadonlyArray<{
  id: string;
  custom: {
  foobar: boolean;
};
}>;
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetaMessagebyExternalIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  externalId: string;
  channel: string;
  app: string;
  size: number;
  direction: string;
  preview: string;
  sentiment: {
  confidence: number;
  polarity: number;
};
  meta: {
  subject: string;
  from: string;
  to: ReadonlyArray<{
  email: string;
}>;
  cc: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recipient: {
  email: string;
  mailboxHash: string;
};
  inReplyTo: string;
};
  status: string;
  sentAt: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
  related: string;
};
};
};

export type KustomerFullApiSchemaGetCustomAttributeMetadataResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  properties: {
  shopifyCustomerIdNum: {
  type: string;
  displayName: string;
};
  myCustomStr: {
  modifiedBy: string;
  modifiedAt: string;
  updatedAt: string;
  type: string;
  enumeration: ReadonlyArray<string>;
  displayName: string;
};
  ordersId: {
  modifiedBy: string;
  modifiedAt: string;
  updatedAt: string;
  type: string;
  target: string;
  multi: boolean;
  displayName: string;
};
};
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateCustomAttributeMetadataRequest = {
  standardProperties?: {};
  relationships?: {};
  properties?: {};
  validations?: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaUpdateCustomAttributeMetadataResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  properties: {
  shopifyCustomerIdNum: {
  type: string;
  displayName: string;
};
  myCustomStr: {
  modifiedBy: string;
  modifiedAt: string;
  updatedAt: string;
  type: string;
  enumeration: ReadonlyArray<string>;
  displayName: string;
  sensitive?: {
  enabled?: boolean;
  maskType?: string;
};
};
  ordersId: {
  modifiedBy: string;
  modifiedAt: string;
  updatedAt: string;
  type: string;
  target: string;
  multi: boolean;
  displayName: string;
};
};
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetNotesforOrgResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  body: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateaNoteRequest = {
  id?: string;
  externalId?: string;
  body: string;
  userMentions?: ReadonlyArray<{
  user?: string;
  team?: string;
}>;
  createdAt?: string;
  modifiedAt?: string;
  createdBy?: string;
  modifiedBy?: string;
  lang?: KustomerFullApiSchemaLang;
};

export type KustomerFullApiSchemaCreateNoteResponseUntitledResponse = {
  data: {
  type: string;
  id: string;
  attributes: {
  body: string;
  externalId: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  userMentions: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetNotebyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  body: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateNotebyIDpatchRequest = {
  conversation?: string;
  externalId?: string | null;
  body?: string;
  userMentions?: ReadonlyArray<{
  user?: string;
  team?: string;
}>;
  deleted?: boolean | null;
  attachments?: ReadonlyArray<KustomerFullApiSchemaAttachment>;
  createdAt?: string;
  modifiedAt?: string;
  updatedAt?: string;
  createdBy?: string;
  modifiedBy?: string | null;
  lang?: KustomerFullApiSchemaLang;
};

export type KustomerFullApiSchemaUpdateNotebyIDpatchResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  body: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  userMentions: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateNotebyIDRequest = {
  conversation: string;
  externalId?: string | null;
  body: string;
  userMentions?: ReadonlyArray<{
  user?: string;
  team?: string;
}>;
  deleted?: boolean | null;
  attachments?: ReadonlyArray<KustomerFullApiSchemaAttachment>;
  createdAt?: string;
  modifiedAt?: string;
  updatedAt?: string;
  createdBy?: string;
  modifiedBy?: string | null;
  lang?: KustomerFullApiSchemaLang;
};

export type KustomerFullApiSchemaUpdateNotebyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  body: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  userMentions: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaBulkCreateNotesRequest = ReadonlyArray<{
  id?: string;
  conversation: string;
  externalId?: string;
  body: string;
  userMentions?: ReadonlyArray<{
  user?: string;
  team?: string;
}>;
  attachments?: ReadonlyArray<KustomerFullApiSchemaAttachment>;
  createdAt?: string;
  modifiedAt?: string;
  createdBy?: string;
  modifiedBy?: string;
  importedAt?: string;
  lang?: KustomerFullApiSchemaLang;
}>;

export type KustomerFullApiSchemaBulkCreateNotesResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: ReadonlyArray<{
  conversation: string;
  body: string;
  userMentions: ReadonlyArray<{
  user?: string;
  team?: string;
}>;
}>;
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaBulkBatchUpdateNotesRequest = ReadonlyArray<{
  id: string;
  conversation?: string;
  externalId?: string | null;
  body?: string;
  userMentions?: ReadonlyArray<{
  user?: string;
  team?: string;
}>;
  deleted?: boolean | null;
  attachments?: ReadonlyArray<KustomerFullApiSchemaAttachment>;
  createdAt?: string;
  modifiedAt?: string;
  updatedAt?: string;
  createdBy?: string;
  modifiedBy?: string | null;
  lang?: KustomerFullApiSchemaLang;
}>;

export type KustomerFullApiSchemaBulkBatchUpdateNotesResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: ReadonlyArray<{
  id: string;
  tags: ReadonlyArray<string>;
}>;
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetNotificationsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
  total: number;
  totalPages: number;
  unread: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
  last: string;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  status: string;
  event: {
  _meta: {
  id: string;
  publishedAt: string;
};
  sourceType: string;
  sourceId: string;
  client: string;
  isSync: string | null;
  persist: boolean;
  changes: string | null;
  createdAt: string;
  data: {
  links: {
  related: string;
  self: string;
};
  relationships: {
  conversation: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  customer: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  redactedBy: string | null;
  deletedBy: string | null;
  modifiedBy: string | null;
  createdBy: string | null;
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
};
  attributes: {
  firstCompany: string | null;
  rev: number;
  lang: string | null;
  source: string | null;
  createdByTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  importedAt: string | null;
  redacted: boolean;
  redactedAt: string | null;
  deletedAt: string | null;
  deleted: string | null;
  modifiedAt: string | null;
  updatedAt: string;
  createdAt: string;
  sentAt: string;
  auto: boolean;
  errorAt: string | null;
  error: string | null;
  assignedUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  assignedTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  responseBusinessTime: string | null;
  responseTime: string | null;
  status: string;
  custom: string | null;
  meta: {
  recipient: {
  mailboxHash: string;
  email: string;
};
  cc: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  to: ReadonlyArray<{
  email: string;
}>;
  from: string;
  subject: string;
};
  sentiment: string | null;
  subject: string | null;
  preview: string;
  location: string | null;
  directionType: string;
  direction: string;
  size: number;
  app: string;
  channel: string;
  externalId: string;
};
  id: string;
  type: string;
};
  orgName: string | null;
  partition: string;
  name: string;
  id: string;
  org: string;
};
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  user: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaUpdateNotificationsRequest = {
  status: "read" | "unread";
};

export type KustomerFullApiSchemaGetNotificationsLogsSettingsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  emails: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateNotificationsLogsSettingsRequest = {
  emails?: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaUpdateNotificationsLogsSettingsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  emails: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGETnotificationsUsersCurrentSettingsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  notify_kustomer_message_create: {
  web: string;
  email: string;
};
  notify_kustomer_message_create_by_app: {
  postmark: {
  web: string;
  email: string;
};
  gmail: {
  web: string;
  email: string;
};
  chat: {
  web: string;
  email: string;
};
  facebook: {
  web: string;
  email: string;
};
  twilio: {
  web: string;
  email: string;
};
  twitter: {
  web: string;
  email: string;
};
  twilio_whatsapp: {
  web: string;
  email: string;
};
  form: {
  web: string;
  email: string;
};
};
  notify_kustomer_conversation_firstmessagein: {
  web: string;
  email: string;
};
  notify_kustomer_conversation_firstmessagein_by_app: {
  postmark: {
  email: string;
  web: string;
};
  gmail: {
  web: string;
  email: string;
};
  chat: {
  web: string;
  email: string;
};
  facebook: {
  web: string;
  email: string;
};
  twilio: {
  web: string;
  email: string;
};
  twitter: {
  web: string;
  email: string;
};
  twilio_whatsapp: {
  web: string;
  email: string;
};
  form: {
  web: string;
  email: string;
};
};
  notify_kustomer_conversation_messagein: {
  web: string;
  email: string;
};
  notify_kustomer_conversation_messagein_by_app: {
  postmark: {
  email: string;
  web: string;
};
  gmail: {
  web: string;
  email: string;
};
  chat: {
  web: string;
  email: string;
};
  facebook: {
  web: string;
  email: string;
};
  twilio: {
  web: string;
  email: string;
};
  twitter: {
  web: string;
  email: string;
};
  twilio_whatsapp: {
  web: string;
  email: string;
};
  form: {
  web: string;
  email: string;
};
};
  notify_kustomer_conversation_assign: {
  web: string;
  email: string;
};
  notify_kustomer_conversation_unsnooze: {
  web: string;
  email: string;
};
  notify_kustomer_note_create: {
  web: string;
  email: string;
};
  notify_kustomer_note_mention: {
  web: string;
  email: string;
};
  notify_kustomer_note_mention_team: {
  web: string;
  email: string;
};
  notify_kustomer_kobject_create: {
  web: string;
  email: string;
};
  notify_kustomer_kobject_update: {
  web: string;
  email: string;
};
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  user: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateCurrentUserNotificationSettingsRequest = {
  notify_kustomer_conversation_firstmessagein?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_conversation_messagein?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_conversation_assign_message_create?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_conversation_assign_message_create_by_app?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_customer_follow_message_create?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_customer_follow_message_create_by_app?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_message_create?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_conversation_firstmessagein_by_app?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_conversation_messagein_by_app?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_message_create_by_app?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_conversation_assign?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_conversation_assistant_transfer?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_conversation_unsnooze?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_note_create?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_note_mention?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_note_mention_team?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_kobject_create?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_kobject_update?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_kobject_unsnooze?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_kobject_assigned_user?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_message_send_error?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_app_facebook_access_token_reauth_warning?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_app_instagram_access_token_reauth_warning?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_bulk_complete?: KustomerFullApiSchemaNotificationSettingPreference;
  "notify_kustomer_available-app-version_notify"?: KustomerFullApiSchemaNotificationSettingPreference;
  "notify_kustomer_installed-app_create"?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_channels_email_domain_verified?: KustomerFullApiSchemaNotificationSettingPreference;
  notify_kustomer_storage_metrics_notifications_create?: KustomerFullApiSchemaNotificationSettingPreference;
};

export type KustomerFullApiSchemaPUTnotificationsUsersCurrentSettingsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  notify_kustomer_message_create: {
  web: string;
  email: string;
};
  notify_kustomer_message_create_by_app: {
  postmark: {
  web: string;
  email: string;
};
  gmail: {
  web: string;
  email: string;
};
  chat: {
  web: string;
  email: string;
};
  facebook: {
  web: string;
  email: string;
};
  twilio: {
  web: string;
  email: string;
};
  twitter: {
  web: string;
  email: string;
};
  twilio_whatsapp: {
  web: string;
  email: string;
};
  form: {
  web: string;
  email: string;
};
};
  notify_kustomer_conversation_firstmessagein: {
  web: string;
  email: string;
};
  notify_kustomer_conversation_firstmessagein_by_app: {
  postmark: {
  email: string;
  web: string;
};
  gmail: {
  web: string;
  email: string;
};
  chat: {
  web: string;
  email: string;
};
  facebook: {
  web: string;
  email: string;
};
  twilio: {
  web: string;
  email: string;
};
  twitter: {
  web: string;
  email: string;
};
  twilio_whatsapp: {
  web: string;
  email: string;
};
  form: {
  web: string;
  email: string;
};
};
  notify_kustomer_conversation_messagein: {
  web: string;
  email: string;
};
  notify_kustomer_conversation_messagein_by_app: {
  postmark: {
  email: string;
  web: string;
};
  gmail: {
  web: string;
  email: string;
};
  chat: {
  web: string;
  email: string;
};
  facebook: {
  web: string;
  email: string;
};
  twilio: {
  web: string;
  email: string;
};
  twitter: {
  web: string;
  email: string;
};
  twilio_whatsapp: {
  web: string;
  email: string;
};
  form: {
  web: string;
  email: string;
};
};
  notify_kustomer_conversation_assign: {
  web: string;
  email: string;
};
  notify_kustomer_conversation_unsnooze: {
  web: string;
  email: string;
};
  notify_kustomer_note_create: {
  web: string;
  email: string;
};
  notify_kustomer_note_mention: {
  web: string;
  email: string;
};
  notify_kustomer_note_mention_team: {
  web: string;
  email: string;
};
  notify_kustomer_kobject_create: {
  web: string;
  email: string;
};
  notify_kustomer_kobject_update: {
  web: string;
  email: string;
};
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  user: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaListOutboundWebhooksResponseSuccess = {
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  name: string;
  enabled: boolean;
  url: string;
  isError: boolean;
  events: ReadonlyArray<string>;
  headers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  token: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateOutboundWebhookResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  enabled: boolean;
  url: string;
  isError: boolean;
  events: ReadonlyArray<string>;
  headers: ReadonlyArray<{
  name: string;
  value: string;
}>;
  token: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetOutboundWebhookResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  enabled: boolean;
  url: string;
  isError: boolean;
  events: ReadonlyArray<string>;
  headers: ReadonlyArray<{
  name: string;
  value: string;
}>;
  token: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateOutboundWebhookResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  enabled: boolean;
  url: string;
  isError: boolean;
  events: ReadonlyArray<string>;
  headers: ReadonlyArray<{
  name: string;
  value: string;
}>;
  token: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaListTransactionsForWebhookResponseListTransactionsForWebhook = {
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  webhookId: string;
  sentAt: number;
  nextRetry: string | null;
  status: string;
  eventName: string;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  hook: {
  data: {
  type: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaListSubscribableEventsResponseSuccess = {
  events: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaListTransactionsResponseListTransactions = {
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  webhookId: string;
  sentAt: number;
  nextRetry: string | null;
  status: string;
  eventName: string;
};
  relationships: {
  org: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  hook: {
  data: {
  type: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetOutboundAccountsResponseSuccess = {
  meta: {};
  data: ReadonlyArray<{
  type: string;
  attributes: {
  channel: string;
  name: string;
  account: string;
};
}>;
  links: {
  self: string;
};
};

export type KustomerFullApiSchemaGetPublicAuthSettingsResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  kustomer: {
  enabled: boolean;
};
  google: {
  enabled: boolean;
};
  saml: {
  enabled: boolean;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetArticlesPublicResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  article: {
  source: string;
  status: string;
  scope: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  metaKeywords: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  rev: number;
  _id: string;
  org: string;
  langVersions: {
  en_us: {
  outdated: boolean;
  unpublishedVersion: string | null;
  currentVersion: {
  number: number;
  id: string;
};
  draftVersion: string;
};
};
  title: string;
  hash: string;
  createdBy: string;
  updatedAt: string;
  createdAt: string;
  categories: ReadonlyArray<{
  knowledgeBase: string;
  id: string;
}>;
  modifiedAt: string;
  modifiedBy: string;
  publishedBy: string;
  publishedAt: string;
  knowledgeBases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  title: string;
  categories: ReadonlyArray<{
  knowledgeBase: string;
  id: string;
}>;
  knowledgeBases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  htmlBody: string;
  advanced: boolean;
  lang: string;
  slug: string;
  hash: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  modifiedAt: string;
  version: number;
  published: boolean;
  scope: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaSearchArticlesPublicResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
  total: number;
  totalPages: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
  last: string;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  article: string;
  title: string;
  primaryCategory: string;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
  knowledgeBases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  metaTitle: string;
  htmlBody: string;
  advanced: boolean;
  lang: string;
  slug: string;
  hash: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  modifiedAt: string;
  version: number;
  published: boolean;
  scope: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaGetCategoriesPublicResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  title: string;
  description: string | null;
  slug: string;
  disabled: boolean;
  hash: string;
  root: boolean;
  positions: ReadonlyArray<string>;
  categoryPositions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  parent: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  published: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaGetCategorybyIDPublicResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  title: string;
  description: string | null;
  slug: string;
  disabled: boolean;
  hash: string;
  root: boolean;
  positions: ReadonlyArray<string>;
  categoryPositions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  parent: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  published: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  data: {
  type: string;
  id: string;
};
};
};
};
  included: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};

export type KustomerFullApiSchemaGetFormbyIDPublicResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  slug: string;
  hash: string;
  body: string;
  layout: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  layoutV2: ReadonlyArray<{
  type: string;
  id: string;
  children: ReadonlyArray<{
  type: string;
  id: string;
  children: ReadonlyArray<{
  id: string;
  type: string;
}>;
}>;
}>;
  componentsV2: {
  D8sN3xT04: {
  componentType: string;
  id: string;
  componentAttributes: {
  formId: string;
  orgId: string;
  title: string;
  postUrl: string;
  successMessage: string;
  errorMessage: string;
  submitButtonText: string;
  loadingText: string;
  recaptcha: boolean;
  deflection: boolean;
  formHookEnabled: boolean;
  orgName: string;
};
};
  _pQ665Woy: {
  id: string;
  componentAttributes: {
  className: string;
};
  componentType: string;
};
  _eBMKOcbW7: {
  id: string;
  componentAttributes: {
  className: string;
};
  componentType: string;
};
  "JJsMafj-Hn": {
  id: string;
  componentAttributes: {
  hint: string;
  placeholder: string;
  type: string;
  label: string;
  name: string;
  id: string;
  description: string;
  className: string;
  required: boolean;
  updateAttribute: boolean;
  attributeProperty: string;
  attributeType: string;
  isCustomAttribute: boolean;
};
  componentType: string;
  attributeProperty: string;
  attributeType: string;
  isCustomAttribute: boolean;
};
  bMd3S0IfXh: {
  id: string;
  componentAttributes: {
  hint: string;
  placeholder: string;
  type: string;
  label: string;
  name: string;
  id: string;
  description: string;
  className: string;
  required: boolean;
  updateAttribute: boolean;
  deflection: boolean;
  suggestedArticlesLabel: string;
  attributeProperty: string;
  attributeType: string;
  isCustomAttribute: boolean;
};
  componentType: string;
  attributeProperty: string;
  attributeType: string;
  isCustomAttribute: boolean;
};
  S7ilDCzkdx: {
  id: string;
  componentAttributes: {
  hint: string;
  placeholder: string;
  type: string;
  label: string;
  name: string;
  id: string;
  description: string;
  className: string;
  required: boolean;
  updateAttribute: boolean;
  attributeProperty: string;
  attributeType: string;
  isCustomAttribute: boolean;
};
  componentType: string;
  attributeProperty: string;
  attributeType: string;
  isCustomAttribute: boolean;
};
};
  advanced: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  modifiedAt: string;
  published: boolean;
  snippets: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recaptcha: boolean;
  klass: string;
  channel: string;
  deflection: boolean;
  formHookEnabled: boolean;
  replyFrom: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetThemebyIDPublicResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  active: boolean;
  default: boolean;
  lastFileUpdatedAt: string;
  status: string;
  templateVersionId: string;
  manifest: ReadonlyArray<{
  name: string;
  variables: {
  headingsAndButtonsFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  headingBaseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  baseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  headingsColor?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryTextColor?: {
  name: string;
  type: string;
  value: string;
};
  linksColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonTextColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  borderPageColor?: {
  name: string;
  type: string;
  value: string;
};
  homepageOnly?: {
  name: string;
  type: string;
  label: string;
  value: boolean;
};
  announcementText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  textColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  backgroundColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaLink?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  navigation?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  navigationText: {
  name: string;
  label: string;
  type: string;
  value: string;
};
  navigationLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
  collapsible?: boolean;
};
  primaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  promptText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  heroImage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayOpacity?: {
  name: string;
  type: string;
  label: string;
  value: number;
};
  primaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  social?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  collapsible: boolean;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  socialIcon: {
  name: string;
  label: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  socialLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
};
  copyrightInfo?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
};
  label?: string;
  enabled?: boolean;
  link?: {
  label: string;
  description: string;
  buttonText: string;
  value: string;
  learnMoreLink?: string;
};
}>;
  configSnippets: ReadonlyArray<string>;
  jsxSnippets: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetThemeFilesPublicResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  type: string;
  content: string;
  compiled: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  snippets: ReadonlyArray<string>;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  theme: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetActiveThemePublicResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  active: boolean;
  default: boolean;
  lastFileUpdatedAt: string;
  status: string;
  templateVersionId: string;
  manifest: ReadonlyArray<{
  name: string;
  variables: {
  headingsAndButtonsFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  headingBaseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  baseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  headingsColor?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryTextColor?: {
  name: string;
  type: string;
  value: string;
};
  linksColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonTextColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  borderPageColor?: {
  name: string;
  type: string;
  value: string;
};
  homepageOnly?: {
  name: string;
  type: string;
  label: string;
  value: boolean;
};
  announcementText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  textColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  backgroundColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaLink?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  navigation?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  navigationText: {
  name: string;
  label: string;
  type: string;
  value: string;
};
  navigationLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
  collapsible?: boolean;
};
  primaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  promptText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  heroImage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayOpacity?: {
  name: string;
  type: string;
  label: string;
  value: number;
};
  primaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  social?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  collapsible: boolean;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  socialIcon: {
  name: string;
  label: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  socialLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
};
  copyrightInfo?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
};
  label?: string;
  enabled?: boolean;
  link?: {
  label: string;
  description: string;
  buttonText: string;
  value: string;
  learnMoreLink?: string;
};
}>;
  configSnippets: ReadonlyArray<string>;
  jsxSnippets: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetAllRoleGroupsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  display: boolean;
  system: boolean;
  roles: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaCreateaRoleGroupRequest = {
  name: string;
  description?: string;
  display?: boolean;
  roles?: KustomerFullApiSchemaAuthRole;
};

export type KustomerFullApiSchemaCreateaRoleGroupResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  display: boolean;
  system: boolean;
  roles: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetARoleGroupByIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  display: boolean;
  system: boolean;
  roles: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaUpdateaRoleGroupRequest = {
  name?: string;
  description?: string;
  display?: boolean;
  roles?: KustomerFullApiSchemaAuthRole;
};

export type KustomerFullApiSchemaUpdateaRoleGroupResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  display: boolean;
  system: boolean;
  roles: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetWorkItemsbyConversationResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  resourceType: string;
  status: "ivr" | "queued" | "routed" | "assigned" | "wrap-up" | "!wrap-up" | "completed";
  paused: boolean;
  channel: string;
  firstEnterQueueAt: string;
  queuedCount: number;
  priority: number;
  itemSize: number;
  ivr: {
  businessTime: number;
  time: number;
};
  handle: {
  completedAt: string;
  businessTime: number;
  time: number;
};
  wrapUp: {
  enteredAt: string;
  businessTime: number;
  time: number;
};
  completedAt: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  resourceRev: number;
  resourceCreatedAt: string;
  resourceDirection: string;
  resourceFirstQueueTime: number;
  resourceFirstRouteTime: number;
  resourceFirstAssignTime: number;
  rev: number;
  workItemNumber: number;
  lastRevision: {
  enteredQueueAt: string;
  queueTime: number;
  queueBusinessTime: number;
  routedAt: string;
  acceptedAt: string;
};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  resource: {
  data: {
  type: string;
  id: string;
};
};
  workSession: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  routedToSession: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  routedTo: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  lastRevision: {
  data: {
  type: string;
  id: string;
};
};
  assignedTo: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queue: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  acceptedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetQueueRulesResponseSuccess = {
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  name: string;
  criteria: {
  or: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  and: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  enabled: boolean;
  description: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queue: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateQueueRuleRequest = (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);

export type KustomerFullApiSchemaCreateQueueRuleResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  criteria: {
  and: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  or: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  enabled: boolean;
  description: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queue: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetQueueCriteriaResponseSuccess = {
  data: {
  type: string;
  attributes: {
  fields: {
  type: string;
  properties: {
  customer_name: {
  type: string;
  operator: string;
};
  customer_email: {
  type: string;
  format: string;
  operator: string;
};
  customer_phone: {
  type: string;
  pattern: string;
  operator: string;
};
  customer_activityAt: {
  type: string;
  format: string;
  operator: string;
};
  customer_lastSeenAt: {
  type: string;
  format: string;
  operator: string;
};
  customer_signedUpAt: {
  type: string;
  format: string;
  operator: string;
};
  customer_createdAt: {
  type: string;
  format: string;
  operator: string;
};
  customer_createdBy: {
  type: string;
  pattern: string;
  collection: string;
  operator: string;
};
  customer_company: {
  type: string;
  pattern: string;
  collection: string;
  operator: string;
};
  customer_conversationsCount: {
  type: string;
  operator: string;
};
  customer_sentiment: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_direction: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_name: {
  type: string;
  operator: string;
};
  conversation_defaultLang: {
  type: string;
  operator: string;
};
  conversation_sentiment: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_status: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_subStatus: {
  type: string;
  operator: string;
};
  conversation_createdAt: {
  type: string;
  format: string;
  operator: string;
};
  conversation_messageCount: {
  type: string;
  operator: string;
};
  conversation_noteCount: {
  type: string;
  operator: string;
};
  conversation_channel: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_replyChannel: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_satisfaction: {
  type: string;
  operator: string;
};
  conversation_tags: {
  type: string;
  pattern: string;
  collection: string;
  operator: string;
};
  conversation_firstResponseSentAt: {
  type: string;
  format: string;
  operator: string;
};
  conversation_firstResponseTime: {
  type: string;
  operator: string;
};
  conversation_lastMessageDirection: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  conversation_outboundMessageCount: {
  type: string;
  operator: string;
};
  message_channel: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  message_directionType: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  message_app: {
  type: string;
  operator: string;
};
  message_direction: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  message_status: {
  type: string;
  enum: ReadonlyArray<string>;
  operator: string;
};
  message_subject: {
  type: string;
  operator: string;
};
  message_preview: {
  type: string;
  operator: string;
};
  message_auto: {
  type: string;
  operator: string;
};
  message_meta_recipient_email: {
  type: string;
  operator: string;
};
  message_meta_from: {
  type: string;
  operator: string;
};
  message_meta_to: {
  type: string;
  operator: string;
};
  message_meta_subject: {
  type: string;
  operator: string;
};
  message_language: {
  type: string;
  operator: string;
};
};
  definitions: {
  user: {
  type: string;
  pattern: string;
  collection: string;
};
  string: {
  type: string;
  enum: ReadonlyArray<string>;
};
  string_notanalyzed: {
  type: string;
  enum: ReadonlyArray<string>;
};
  text: {
  type: string;
  enum: ReadonlyArray<string>;
};
  any: {
  type: string;
  enum: ReadonlyArray<string>;
};
  number: {
  type: string;
  enum: ReadonlyArray<string>;
};
  datetime: {
  type: string;
  enum: ReadonlyArray<string>;
};
  boolean: {
  type: string;
  enum: ReadonlyArray<string>;
};
  list: {
  type: string;
  enum: ReadonlyArray<string>;
};
  tree: {
  type: string;
  enum: ReadonlyArray<string>;
};
};
};
};
};
};

export type KustomerFullApiSchemaErrorResponse6 = {
  errors: ReadonlyArray<{
  code: string;
  message: string;
  meta: {
  readonly [key: string]: KustomerFullApiSchemaJsonValue | undefined;
};
}>;
};

export type KustomerFullApiSchemaGetQueueRuleResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  criteria: {
  and: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  or: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  enabled: boolean;
  description: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queue: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateQueueRuleRequest = (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);

export type KustomerFullApiSchemaUpdateQueueRuleResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  criteria: {
  and: ReadonlyArray<{
  customer_custom_isVipBool: {
  value: boolean;
  operator: string;
};
}>;
  or: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  enabled: boolean;
  description: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queue: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateQueueRuleOrderRequest = {
  rules: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaUpdateQueueRuleOrderResponseSuccess = {
  data: {
  type: string;
  attributes: {
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  rules: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetQueuesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  name: string;
  displayName: string;
  priority: number;
  itemSize: number;
  system: boolean;
  description: string;
  createdAt: number;
  restrictTransfersByUsers?: boolean;
  updatedAt?: string;
  modifiedAt?: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateQueueRequest = {
  name: string;
  key?: string;
  displayName?: string;
  description?: string;
  itemSize?: number;
  priority?: number;
  restrictTransfersByUsers?: boolean;
};

export type KustomerFullApiSchemaCreateQueueResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  displayName: string;
  priority: number;
  itemSize: number;
  restrictTransfersByUsers: boolean;
  system: boolean;
  description: string;
  updatedAt: string;
  createdAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetQueueResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  displayName: string;
  priority: number;
  itemSize: number;
  restrictTransfersByUsers: boolean;
  system: boolean;
  description: string;
  updatedAt: string;
  createdAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateQueueRequest = {
  name: string;
  key?: string;
  displayName?: string;
  description?: string;
  itemSize?: number;
  priority?: number;
  restrictTransfersByUsers?: boolean;
};

export type KustomerFullApiSchemaUpdateQueueResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  displayName: string;
  priority: number;
  itemSize: number;
  restrictTransfersByUsers: boolean;
  system: boolean;
  description: string;
  updatedAt: string;
  createdAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetWorkItemsinaqueueResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  resourceType: string;
  status: "ivr" | "queued" | "routed" | "assigned" | "wrap-up" | "!wrap-up" | "completed";
  paused: boolean;
  channel: string;
  firstEnterQueueAt: string;
  queuedCount: number;
  priority: number;
  itemSize: number;
  ivr?: {
  businessTime: number;
  time: number;
};
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  resourceCreatedAt: string;
  rev: number;
  workItemNumber: number;
  lastRevision: {
  enteredQueueAt: string;
  acceptedAt?: string;
};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  resource: {
  data: {
  type: string;
  id: string;
};
};
  lastRevision: {
  data: {
  type: string;
  id: string;
};
};
  queue: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  workSession?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  assignedTo?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  acceptedBy?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetNextWorkItemsinaQueueResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  resourceType: string;
  status: "ivr" | "queued" | "routed" | "assigned" | "wrap-up" | "!wrap-up" | "completed";
  paused: boolean;
  firstEnterQueueAt: string;
  queuedCount: number;
  priority: number;
  itemSize: number;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  resourceCreatedAt: string;
  rev: number;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  resource: {
  data: {
  type: string;
  id: string;
};
};
  queue: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetWorkSessionsbyQueueIDResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  routable: boolean;
  statusType: string;
  workItemCount: number;
  pausedWorkItemCount: number;
  signedInAt: string;
  signedOutAt?: string;
  capacity: ReadonlyArray<{
  priority: number;
  limit: number;
  remaining: number;
}>;
  capacityRemaining: number;
  totalCapacity: number;
  handledItemCount: number;
  handledConversationCount: number;
  totalTimeByStatus: {
  "5dee362707e4c501dd8218f8"?: {
  statusAt: string;
};
  "5dee362707e4c501dd8218f4"?: {
  statusAt: string;
  businessTime?: number;
  time?: number;
};
  "5dee362707e4c501dd8218f7"?: {
  statusAt: string;
};
  "5dee362707e4c501dd8218f5"?: {
  statusAt: string;
  businessTime: number;
  time: number;
};
};
  capacityStatus: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  rev: number;
  totalAvailable?: {
  statusAt: string;
  businessTime?: number;
  time?: number;
};
  totalAvailableIdleCapacity?: {
  businessTime: number;
  time: number;
};
  totalUnavailable?: {
  statusAt: string;
  businessTime?: number;
  time?: number;
};
  lastRevision?: {
  handledItemCount: number;
  totalAvailable: {
  statusAt: string;
};
};
  totalAvailableNotAtCapacity?: {
  businessTime: number;
  time: number;
};
  totalAvailableAtCapacity?: {
  businessTime: number;
  time: number;
};
  totalUnavailableIdleCapacity?: {
  businessTime: number;
  time: number;
};
  totalUnavailableNotAtCapacity?: {
  businessTime: number;
  time: number;
};
  lastAssignedItemAt?: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  user: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  routingSettings: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  status: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queues: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
  lastRevision?: {
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetAllTeamRoutingSettingsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  updatedAt: string;
  createdAt: string;
  modifiedAt: string;
  enabled: boolean;
  workItemCapacity: number;
  externalQueues: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  capacity: {};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queues: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetTeamRoutingSettingsResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  updatedAt: string;
  createdAt: string;
  modifiedAt: string;
  enabled: boolean;
  workItemCapacity: number;
  externalQueues: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  capacity: {};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queues: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateTeamRoutingSettingsRequest = {
  queues?: ReadonlyArray<string>;
  externalQueues?: ReadonlyArray<"amazon-connect">;
  enabled?: boolean;
  workItemCapacity?: number;
  capacity?: {};
};

export type KustomerFullApiSchemaUpdateTeamRoutingSettingsResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  updatedAt: string;
  createdAt: string;
  modifiedAt: string;
  enabled: boolean;
  workItemCapacity: number;
  externalQueues: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  capacity: {};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queues: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetRoutingUserStatusesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  statusType: string;
  selectable: boolean;
  system: boolean;
  enabled: boolean;
  routable: boolean;
  createdAt: string;
  updatedAt: string;
  description?: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaCreateRoutingUserStatusRequest = {
  name: string;
  description?: string;
  externalId?: string;
  enabled?: boolean;
  statusType: "unavailable" | "available" | "busy";
  selectable?: boolean;
};

export type KustomerFullApiSchemaCreateRoutingUserStatusResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  statusType: string;
  selectable: boolean;
  system: boolean;
  enabled: boolean;
  routable: boolean;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetRoutingUserStatusResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  statusType: string;
  selectable: boolean;
  system: boolean;
  enabled: boolean;
  routable: boolean;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaUpdateRoutingUserStatusRequest = {
  name?: string;
  description?: string;
  externalId?: string | null;
  enabled?: boolean;
};

export type KustomerFullApiSchemaUpdateRoutingUserStatusResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  statusType: string;
  selectable: boolean;
  system: boolean;
  enabled: boolean;
  routable: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetWorkSessionsbyUserIDResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  routable: boolean;
  statusType: string;
  workItemCount: number;
  pausedWorkItemCount: number;
  signedInAt: string;
  capacity: ReadonlyArray<{
  remaining: number;
  limit: number;
  priority: number;
}>;
  capacityRemaining: number;
  totalCapacity: number;
  handledItemCount: number;
  handledConversationCount: number;
  totalAvailable?: {
  statusAt: string;
  businessTime: number;
  time: number;
};
  totalAvailableIdleCapacity?: {
  businessTime: number;
  time: number;
};
  totalUnavailable?: {
  statusAt: string;
  businessTime?: number;
  time?: number;
};
  totalTimeByStatus: {
  "5dee3584c2440301c6f80afd"?: {
  statusAt: string;
  businessTime: number;
  time: number;
};
  "5dee3584c2440301c6f80b00"?: {
  statusAt: string;
};
  "5dee3584c2440301c6f80afe"?: {
  statusAt: string;
  businessTime: number;
  time: number;
};
  "5dee3584c2440301c6f80b01"?: {
  statusAt: string;
};
};
  capacityStatus: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  rev: number;
  lastRevision?: {
  handledItemCount: number;
  totalAvailable: {
  statusAt: string;
};
};
  signedOutAt?: string;
  totalAvailableNotAtCapacity?: {
  businessTime: number;
  time: number;
};
  totalAvailableAtCapacity?: {
  businessTime: number;
  time: number;
};
  totalUnavailableIdleCapacity?: {
  businessTime: number;
  time: number;
};
  totalUnavailableNotAtCapacity?: {
  businessTime: number;
  time: number;
};
  lastAssignedItemAt?: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  user: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  routingSettings: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  status: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queues: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
  lastRevision?: {
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetCurrentWorkSessionbyUserIDResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  routable: boolean;
  statusType: string;
  workItemCount: number;
  pausedWorkItemCount: number;
  signedInAt: string;
  capacity: ReadonlyArray<{
  remaining: number;
  limit: number;
  priority: number;
}>;
  capacityRemaining: number;
  totalCapacity: number;
  handledItemCount: number;
  handledConversationCount: number;
  totalAvailable: {
  statusAt: string;
  businessTime: number;
  time: number;
};
  totalAvailableIdleCapacity: {
  businessTime: number;
  time: number;
};
  totalUnavailable: {
  statusAt: string;
};
  totalTimeByStatus: {
  "5dee3697d1fe7d01f4cae9f0": {
  statusAt: string;
  businessTime: number;
  time: number;
};
  "5dee3697d1fe7d01f4cae9f3": {
  statusAt: string;
};
};
  capacityStatus: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  rev: number;
  lastRevision: {
  handledItemCount: number;
  totalAvailable: {
  statusAt: string;
};
};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  user: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  routingSettings: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  status: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queues: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetCurrentsUserTeamRoutingSettingsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  updatedAt: string;
  createdAt: string;
  modifiedAt: string;
  enabled: boolean;
  workItemCapacity: number;
  externalQueues: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  capacity: {};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queues: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetWorkItemsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  resourceType: string;
  status: "ivr" | "queued" | "routed" | "assigned" | "wrap-up" | "!wrap-up" | "completed";
  paused: boolean;
  channel: string;
  queuedCount: number;
  priority: number;
  itemSize: number;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  resourceCreatedAt: string;
  rev: number;
  workItemNumber: number;
  lastRevision?: {
  acceptedAt?: string;
  enteredQueueAt?: string;
  externalQueue?: string;
};
  firstEnterQueueAt?: string;
  resourceRev?: number;
  resourceDirection?: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  resource: {
  data: {
  type: string;
  id: string;
};
};
  lastRevision: {
  data: {
  type: string;
  id: string;
};
};
  assignedTo?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  acceptedBy?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  workSession?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queue?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateWorkItemRequest = {
  resource: {
  id: string;
  type: "conversation";
  rev?: number;
  createdAt?: string;
  direction?: "in" | "out";
};
  channel?: string;
  createdAt?: string;
  queue?: {
  id?: string;
  external?: "amazon-connect" | "aircall";
  enteredAt?: string;
};
  assignedTo?: string;
};

export type KustomerFullApiSchemaCreateWorkItemResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  resourceType: string;
  status: "ivr" | "queued" | "routed" | "assigned" | "wrap-up" | "!wrap-up" | "completed";
  paused: boolean;
  channel: string;
  queuedCount: number;
  priority: number;
  itemSize: number;
  ivr: {};
  handle: {};
  wrapUp: {};
  abandoned: {};
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  resourceRev: number;
  resourceCreatedAt: string;
  resourceDirection: string;
  rev: number;
  workItemNumber: number;
  firstRoutedResponse: {};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  resource: {
  data: {
  type: string;
  id: string;
};
};
  lastRevision: {
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetWorkItemResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  resourceType: string;
  status: "ivr" | "queued" | "routed" | "assigned" | "wrap-up" | "!wrap-up" | "completed";
  paused: boolean;
  channel: string;
  queuedCount: number;
  priority: number;
  itemSize: number;
  ivr: {};
  handle: {};
  wrapUp: {};
  abandoned: {};
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  resourceRev: number;
  resourceCreatedAt: string;
  resourceDirection: string;
  rev: number;
  workItemNumber: number;
  firstRoutedResponse: {};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  resource: {
  data: {
  type: string;
  id: string;
};
};
  lastRevision: {
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateWorkItemRequest = {
  queue?: (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);
  routed?: ({
  to: string;
  at?: string;
} | {
  rejectedBy: string;
} | {
  timedout: boolean;
});
  accepted?: {
  at?: string;
  by: string;
  workSession?: string;
};
  status?: "assigned" | "wrap-up" | "completed";
  paused?: boolean;
  assignedTo?: (string | null | string);
  rev: number;
  resource?: {
  rev?: number;
};
};

export type KustomerFullApiSchemaUpdateWorkItemResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  resourceType: string;
  status: "ivr" | "queued" | "routed" | "assigned" | "wrap-up" | "!wrap-up" | "completed";
  paused: boolean;
  channel: string;
  firstEnterQueueAt: string;
  queuedCount: number;
  priority: number;
  itemSize: number;
  ivr: {
  businessTime: number;
  time: number;
};
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  resourceRev: number;
  resourceCreatedAt: string;
  resourceDirection: string;
  resourceFirstQueueTime: number;
  rev: number;
  workItemNumber: number;
  lastRevision: {
  enteredQueueAt: string;
};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  resource: {
  data: {
  type: string;
  id: string;
};
};
  lastRevision: {
  data: {
  type: string;
  id: string;
};
};
  queue: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetWorkSessionsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  routable: boolean;
  statusType: string;
  workItemCount: number;
  pausedWorkItemCount: number;
  signedInAt: string;
  capacity: ReadonlyArray<{
  remaining: number;
  limit: number;
  priority: number;
}>;
  capacityRemaining: number;
  totalCapacity: number;
  handledItemCount: number;
  handledConversationCount: number;
  totalAvailable: {
  statusAt: string;
  businessTime?: number;
  time?: number;
};
  totalAvailableIdleCapacity?: {
  businessTime: number;
  time: number;
};
  totalUnavailable?: {
  statusAt: string;
};
  totalTimeByStatus: {
  "5dee34ba431fd301ab0fcbf3": {
  statusAt: string;
  businessTime?: number;
  time?: number;
};
  "5dee34ba431fd301ab0fcbf6"?: {
  statusAt: string;
};
};
  capacityStatus: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  rev: number;
  lastRevision?: {
  handledItemCount: number;
  totalAvailable: {
  statusAt: string;
};
};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  user: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  routingSettings: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  status: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queues: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
  lastRevision?: {
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetWorkSessionbyIDResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  routable: boolean;
  statusType: string;
  workItemCount: number;
  pausedWorkItemCount: number;
  signedInAt: string;
  capacity: ReadonlyArray<{
  remaining: number;
  limit: number;
  priority: number;
}>;
  capacityRemaining: number;
  totalCapacity: number;
  handledItemCount: number;
  handledConversationCount: number;
  totalAvailable: {
  statusAt: string;
  businessTime: number;
  time: number;
};
  totalAvailableIdleCapacity: {
  businessTime: number;
  time: number;
};
  totalUnavailable: {
  statusAt: string;
};
  totalTimeByStatus: {
  "5deb98ab714a13011af86f1f": {
  statusAt: string;
  businessTime: number;
  time: number;
};
  "5deb98ab714a13011af86f22": {
  statusAt: string;
};
};
  capacityStatus: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  rev: number;
  lastRevision: {
  handledItemCount: number;
  totalAvailable: {
  statusAt: string;
};
};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  user: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  routingSettings: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  status: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queues: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateWorkSessionbyIDRequest = {
  status: string;
  team?: string;
  rev?: number;
};

export type KustomerFullApiSchemaUpdateWorkSessionbyIDResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  routable: boolean;
  statusType: string;
  workItemCount: number;
  pausedWorkItemCount: number;
  signedInAt: string;
  capacity: ReadonlyArray<{
  remaining: number;
  limit: number;
  priority: number;
}>;
  capacityRemaining: number;
  totalCapacity: number;
  handledItemCount: number;
  handledConversationCount: number;
  totalAvailable: {
  statusAt: string;
};
  totalTimeByStatus: {
  "5deb992dfa0dc60131997deb": {
  statusAt: string;
};
};
  capacityStatus: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  rev: number;
  lastRevision: {
  handledItemCount: number;
  totalAvailable: {
  statusAt: string;
};
};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  user: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  routingSettings: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  status: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queues: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetWorkItemsByWorkSessionResponseSuccess = {
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  resourceType: string;
  status: "ivr" | "queued" | "routed" | "assigned" | "wrap-up" | "!wrap-up" | "completed";
  paused: boolean;
  channel: string;
  firstEnterQueueAt?: string;
  queuedCount: number;
  priority: number;
  itemSize: number;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  resourceCreatedAt: string;
  rev: number;
  workItemNumber: number;
  lastRevision: {
  enteredQueueAt?: string;
  acceptedAt: string;
};
  firstRoutedResponse?: {
  createdAt: string;
  id: string;
  time: number;
  businessTime: number;
};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  resource: {
  data: {
  type: string;
  id: string;
};
};
  workSession: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  lastRevision: {
  data: {
  type: string;
  id: string;
};
};
  assignedTo: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queue?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  acceptedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetCurrentWorkSessionResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  routable: boolean;
  statusType: string;
  workItemCount: number;
  pausedWorkItemCount: number;
  signedInAt: string;
  capacity: ReadonlyArray<{
  remaining: number;
  limit: number;
  priority: number;
}>;
  capacityRemaining: number;
  totalCapacity: number;
  handledItemCount: number;
  handledConversationCount: number;
  totalAvailable: {
  statusAt: string;
  businessTime: number;
  time: number;
};
  totalAvailableIdleCapacity: {
  businessTime: number;
  time: number;
};
  totalUnavailable: {
  statusAt: string;
};
  totalTimeByStatus: {
  "5deb9713b1e64300d50ba5d1": {
  statusAt: string;
  businessTime: number;
  time: number;
};
  "5deb9713b1e64300d50ba5d4": {
  statusAt: string;
};
};
  capacityStatus: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  rev: number;
  lastRevision: {
  handledItemCount: number;
  totalAvailable: {
  statusAt: string;
};
};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  user: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  routingSettings: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  status: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queues: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateCurrentWorkSessionRequest = {
  status: string;
  team?: string;
};

export type KustomerFullApiSchemaUpdateCurrentWorkSessionResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  routable: boolean;
  statusType: string;
  workItemCount: number;
  pausedWorkItemCount: number;
  signedInAt: string;
  capacity: ReadonlyArray<{
  priority: number;
  limit: number;
  remaining: number;
}>;
  capacityRemaining: number;
  totalCapacity: number;
  handledItemCount: number;
  handledConversationCount: number;
  totalAvailable: {
  statusAt: string;
};
  totalAvailableIdleCapacity: {};
  totalAvailableNotAtCapacity: {};
  totalAvailableAtCapacity: {};
  totalUnavailable: {};
  totalUnavailableIdleCapacity: {};
  totalUnavailableNotAtCapacity: {};
  totalUnavailableAtCapacity: {};
  totalBusy: {};
  totalBusyIdleCapacity: {};
  totalBusyNotAtCapacity: {};
  totalBusyAtCapacity: {};
  totalTimeByStatus: {
  "5deb97b4fa875900ecdd810b": {
  statusAt: string;
};
};
  capacityStatus: string;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  rev: number;
  lastRevision: {
  handledItemCount: number;
  totalAvailable: {};
  totalUnavailable: {};
  totalBusy: {};
};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  user: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  routingSettings: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  status: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queues: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
  lastRevision: {
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetWorkItemsinCurrentWorkSessionResponseSuccess = {
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  resourceType: string;
  status: "ivr" | "queued" | "routed" | "assigned" | "wrap-up" | "!wrap-up" | "completed";
  paused: boolean;
  channel: string;
  firstEnterQueueAt?: string;
  queuedCount: number;
  priority: number;
  itemSize: number;
  updatedAt: string;
  modifiedAt: string;
  createdAt: string;
  resourceCreatedAt: string;
  rev: number;
  workItemNumber: number;
  lastRevision: {
  enteredQueueAt?: string;
  acceptedAt: string;
};
  firstRoutedResponse?: {
  createdAt: string;
  id: string;
  time: number;
  businessTime: number;
};
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  team: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  resource: {
  data: {
  type: string;
  id: string;
};
};
  workSession: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  lastRevision: {
  data: {
  type: string;
  id: string;
};
};
  assignedTo: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  queue?: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  acceptedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetSatisfactionResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name?: string;
  formType?: string;
  enabled?: boolean;
  channel?: string;
  description?: string;
  from?: {
  account?: string;
  app?: string;
  channel?: string;
};
  metaTitle?: string;
  metaDescription?: string;
  delayTime?: number;
  scale?: {
  options?: number;
  type?: string;
  labelHigh?: string;
  labelLow?: string;
};
  introduction?: string;
  ratingPrompt?: string;
  questions?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  positiveQuestions?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  negativeQuestions?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  allQuestions?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  followUpType?: string;
  criteria?: {
  and?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  or?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  createdAt?: string;
  updatedAt?: string;
  modifiedAt?: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  template?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaGetSatisfactionResponseByIdSuccess = {
  data: {
  type: "satisfaction_response";
  id: string;
  attributes: {
  formType?: string;
  channel?: string;
  app?: string;
  status?: "offered" | "rated" | "commented" | "unresponded" | "canceled";
  answers?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  scheduledFor?: string | null;
  submittedAt?: string | null;
  lockedAt?: string | null;
  sentAt?: string | null;
  firstReadAt?: string | null;
  completedAt?: string | null;
  rating?: number | null;
  score?: number | null;
  createdAt?: string;
  updatedAt?: string;
  modifiedAt?: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  satisfaction: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  conversation?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetAllSchedulesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  hours: {
  "0": string | null;
  "1": ReadonlyArray<ReadonlyArray<number>>;
  "2": ReadonlyArray<ReadonlyArray<number>>;
  "3": ReadonlyArray<ReadonlyArray<number>>;
  "4": ReadonlyArray<ReadonlyArray<number>>;
  "5": ReadonlyArray<ReadonlyArray<number>>;
  "6": string | null;
};
  timezone: string;
  default: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateScheduleRequest = {
  name: string;
  hours: {
  "0": KustomerFullApiSchemaHourTuples;
  "1": KustomerFullApiSchemaHourTuples;
  "2": KustomerFullApiSchemaHourTuples;
  "3": KustomerFullApiSchemaHourTuples;
  "4": KustomerFullApiSchemaHourTuples;
  "5": KustomerFullApiSchemaHourTuples;
  "6": KustomerFullApiSchemaHourTuples;
};
  timezone: KustomerFullApiSchemaTimezones;
  default: boolean;
};

export type KustomerFullApiSchemaCreateScheduleResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  hours: {
  "0": string | null;
  "1": ReadonlyArray<ReadonlyArray<number>>;
  "2": ReadonlyArray<ReadonlyArray<number>>;
  "3": ReadonlyArray<ReadonlyArray<number>>;
  "4": ReadonlyArray<ReadonlyArray<number>>;
  "5": ReadonlyArray<ReadonlyArray<number>>;
  "6": string | null;
};
  timezone: string;
  default: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaDeleteSchedulebyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  hours: {
  "0": string | null;
  "1": ReadonlyArray<ReadonlyArray<number>>;
  "2": ReadonlyArray<ReadonlyArray<number>>;
  "3": ReadonlyArray<ReadonlyArray<number>>;
  "4": ReadonlyArray<ReadonlyArray<number>>;
  "5": ReadonlyArray<ReadonlyArray<number>>;
  "6": string | null;
};
  timezone: string;
  default: boolean;
  deleted: boolean;
  deletedAt: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  deletedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetSchedulebyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  hours: {
  "0": string | null;
  "1": ReadonlyArray<ReadonlyArray<number>>;
  "2": ReadonlyArray<ReadonlyArray<number>>;
  "3": ReadonlyArray<ReadonlyArray<number>>;
  "4": ReadonlyArray<ReadonlyArray<number>>;
  "5": ReadonlyArray<ReadonlyArray<number>>;
  "6": string | null;
};
  timezone: string;
  default: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
  included: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  enabled: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  schedule: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaUpdateSchedulebyIDRequest = {
  name: string;
  hours: {
  "0": KustomerFullApiSchemaHourTuples;
  "1": KustomerFullApiSchemaHourTuples;
  "2": KustomerFullApiSchemaHourTuples;
  "3": KustomerFullApiSchemaHourTuples;
  "4": KustomerFullApiSchemaHourTuples;
  "5": KustomerFullApiSchemaHourTuples;
  "6": KustomerFullApiSchemaHourTuples;
};
  timezone: KustomerFullApiSchemaTimezones;
  default: boolean;
};

export type KustomerFullApiSchemaUpdateSchedulebyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  hours: {
  "0": string | null;
  "1": ReadonlyArray<ReadonlyArray<number>>;
  "2": ReadonlyArray<ReadonlyArray<number>>;
  "3": ReadonlyArray<ReadonlyArray<number>>;
  "4": ReadonlyArray<ReadonlyArray<number>>;
  "5": ReadonlyArray<ReadonlyArray<number>>;
  "6": string | null;
};
  timezone: string;
  default: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetDefaultScheduleResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  hours: {
  "0": string | null;
  "1": ReadonlyArray<ReadonlyArray<number>>;
  "2": ReadonlyArray<ReadonlyArray<number>>;
  "3": ReadonlyArray<ReadonlyArray<number>>;
  "4": ReadonlyArray<ReadonlyArray<number>>;
  "5": ReadonlyArray<ReadonlyArray<number>>;
  "6": string | null;
};
  timezone: string;
  default: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
  included: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  enabled: boolean;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  schedule: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetSettingsResponseSuccess = {
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  name: string;
  value: (boolean | {
  en_us: {
  title: string;
  enabled: boolean;
};
});
  app: string;
  category: string;
  createdAt?: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaGetaSettingResponseSuccess = {
  data: {
  type: string;
  attributes: {
  name: string;
  value: boolean;
  app: string;
  category: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaUpdateaSettingRequest = {
  value: string | null;
};

export type KustomerFullApiSchemaUpdateaSettingResponseSuccess = {
  data: {
  type: string;
  attributes: {
  name: string;
  value: boolean;
  app: string;
  category: string;
  createdAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetAllShortcutsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  name: string;
  draft: {
  text: string;
};
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateaShortcutRequest = {
  name: string;
  parent?: string | null;
  draft?: {
  text?: string;
  template?: string;
};
  payload?: {};
  accessTeams?: ReadonlyArray<string>;
  accessUsers?: ReadonlyArray<string>;
  conversation?: KustomerFullApiSchemaConversationActions;
};

export type KustomerFullApiSchemaCreateaShortcutResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  draft: {
  text: string;
};
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  parent: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetaShortcutResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  draft: {
  text: string;
};
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateaShortcutRequest = {
  name?: string;
  parent?: string | null;
  draft?: {
  text?: string;
  template?: string;
};
  payload?: {};
  accessTeams?: ReadonlyArray<string>;
  accessUsers?: ReadonlyArray<string>;
  conversation?: KustomerFullApiSchemaConversationActions;
  deleted?: boolean;
};

export type KustomerFullApiSchemaUpdateaShortcutResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  draft: {
  text: string;
};
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  parent: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetShortcutCategoriesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  name: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateaShortcutCategoryRequest = {
  name: string;
  parent?: string | null;
};

export type KustomerFullApiSchemaCreateaShortcutCategoryResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  parent: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetaShortcutCategoryResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  parent: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateaShortcutCategoryRequest = {
  name?: string;
  parent?: string | null;
};

export type KustomerFullApiSchemaUpdateaShortcutCategoryResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  parent: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGETanSLAbyIDResponseSuccessversionsactive = {
  data: {
  type: string;
  id: string;
  attributes: {
  currentVersion: number;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  versions: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
};
  included: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  version: number;
  hours: string;
  metrics: {
  firstResponse: {
  enabled: boolean;
  times: {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
};
};
  longestUnrespondedMessage: {
  enabled: boolean;
  times: {
  "1": number;
  "2": number;
  "3": number;
  "4": number;
  "5": number;
};
};
  totalConversationOpenTime: {
  enabled: boolean;
  times: {};
};
  totalCustomerWaitTime: {
  enabled: boolean;
  times: {};
};
};
  criteria: {
  and: ReadonlyArray<{
  conversation_channel: {
  operator: string;
  value: string;
};
}>;
};
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  sla: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetSnippetsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  name: string;
  app: string;
  description: string;
  source: string;
  key: string;
  langs: {
  en_us: {
  value: string;
  outdated: boolean;
};
  en_ca: {
  value: string;
  outdated: boolean;
};
  en_gb: {
  value: string;
  outdated: boolean;
};
  af: {
  value: string;
  outdated: boolean;
};
  bg: {
  value: string;
  outdated: boolean;
};
  bs: {
  value: string;
  outdated: boolean;
};
  ca: {
  value: string;
  outdated: boolean;
};
  cs: {
  value: string;
  outdated: boolean;
};
  da: {
  value: string;
  outdated: boolean;
};
  de: {
  value: string;
  outdated: boolean;
};
  nl: {
  value: string;
  outdated: boolean;
};
  el: {
  value: string;
  outdated: boolean;
};
  es: {
  value: string;
  outdated: boolean;
};
  es_es: {
  value: string;
  outdated: boolean;
};
  et: {
  value: string;
  outdated: boolean;
};
  fi: {
  value: string;
  outdated: boolean;
};
  fil: {
  value: string;
  outdated: boolean;
};
  fr: {
  value: string;
  outdated: boolean;
};
  fr_ca: {
  value: string;
  outdated: boolean;
};
  hi: {
  value: string;
  outdated: boolean;
};
  hr: {
  value: string;
  outdated: boolean;
};
  hu: {
  value: string;
  outdated: boolean;
};
  id: {
  value: string;
  outdated: boolean;
};
  is: {
  value: string;
  outdated: boolean;
};
  it: {
  value: string;
  outdated: boolean;
};
  ja: {
  value: string;
  outdated: boolean;
};
  ka: {
  value: string;
  outdated: boolean;
};
  ko: {
  value: string;
  outdated: boolean;
};
  lt: {
  value: string;
  outdated: boolean;
};
  lv: {
  value: string;
  outdated: boolean;
};
  no: {
  value: string;
  outdated: boolean;
};
  pl: {
  value: string;
  outdated: boolean;
};
  pt: {
  value: string;
  outdated: boolean;
};
  pt_br: {
  value: string;
  outdated: boolean;
};
  ro: {
  value: string;
  outdated: boolean;
};
  ru: {
  value: string;
  outdated: boolean;
};
  sk: {
  value: string;
  outdated: boolean;
};
  sl: {
  value: string;
  outdated: boolean;
};
  sq: {
  value: string;
  outdated: boolean;
};
  sr: {
  value: string;
  outdated: boolean;
};
  sr_me: {
  value: string;
  outdated: boolean;
};
  sv: {
  value: string;
  outdated: boolean;
};
  th: {
  value: string;
  outdated: boolean;
};
  tr: {
  value: string;
  outdated: boolean;
};
  uk: {
  value: string;
  outdated: boolean;
};
  vi: {
  value: string;
  outdated: boolean;
};
  zh_cn: {
  value: string;
  outdated: boolean;
};
  zh_tw: {
  value: string;
  outdated: boolean;
};
  tw: {
  value: string;
  outdated: boolean;
};
  sw: {
  value: string;
  outdated: boolean;
};
  kk: {
  value: string;
  outdated: boolean;
};
  be: {
  value: string;
  outdated: boolean;
};
  ar_ma: {
  value: string;
  outdated: boolean;
};
  ar_eg: {
  value: string;
  outdated: boolean;
};
  fr_ma: {
  value: string;
  outdated: boolean;
};
  es_ar: {
  value: string;
  outdated: boolean;
};
  es_pa: {
  value: string;
  outdated: boolean;
};
  es_pe: {
  value: string;
  outdated: boolean;
};
  pa: {
  value: string;
  outdated: boolean;
};
  ur: {
  value: string;
  outdated: boolean;
};
  ar?: {
  value: string;
  outdated: boolean;
};
  fa?: {
  value: string;
  outdated: boolean;
};
  he?: {
  value: string;
  outdated: boolean;
};
};
  createdAt: string;
  updatedAt: string;
  category?: string;
};
  links: {
  self: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaCreateSnippetRequest = {
  name: string;
  category?: string;
  description?: string;
  source?: string;
  langs?: {};
};

export type KustomerFullApiSchemaCreateSnippetResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  category: string;
  key: string;
  langs: {
  en_us: {
  value: string;
  outdate: boolean;
};
  es: {
  value: string;
  outdate: boolean;
};
};
  createdAt: string;
};
  links: {
  self: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetSnippetsbyIDResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  app: string;
  description: string;
  source: string;
  key: string;
  langs: {
  en_us: {
  value: string;
  outdated: boolean;
};
  en_ca: {
  value: string;
  outdated: boolean;
};
  en_gb: {
  value: string;
  outdated: boolean;
};
  af: {
  value: string;
  outdated: boolean;
};
  bg: {
  value: string;
  outdated: boolean;
};
  bs: {
  value: string;
  outdated: boolean;
};
  ca: {
  value: string;
  outdated: boolean;
};
  cs: {
  value: string;
  outdated: boolean;
};
  da: {
  value: string;
  outdated: boolean;
};
  de: {
  value: string;
  outdated: boolean;
};
  nl: {
  value: string;
  outdated: boolean;
};
  el: {
  value: string;
  outdated: boolean;
};
  es: {
  value: string;
  outdated: boolean;
};
  es_es: {
  value: string;
  outdated: boolean;
};
  et: {
  value: string;
  outdated: boolean;
};
  fi: {
  value: string;
  outdated: boolean;
};
  fil: {
  value: string;
  outdated: boolean;
};
  fr: {
  value: string;
  outdated: boolean;
};
  fr_ca: {
  value: string;
  outdated: boolean;
};
  hi: {
  value: string;
  outdated: boolean;
};
  hr: {
  value: string;
  outdated: boolean;
};
  hu: {
  value: string;
  outdated: boolean;
};
  id: {
  value: string;
  outdated: boolean;
};
  is: {
  value: string;
  outdated: boolean;
};
  it: {
  value: string;
  outdated: boolean;
};
  ja: {
  value: string;
  outdated: boolean;
};
  ka: {
  value: string;
  outdated: boolean;
};
  ko: {
  value: string;
  outdated: boolean;
};
  lt: {
  value: string;
  outdated: boolean;
};
  lv: {
  value: string;
  outdated: boolean;
};
  no: {
  value: string;
  outdated: boolean;
};
  pl: {
  value: string;
  outdated: boolean;
};
  pt: {
  value: string;
  outdated: boolean;
};
  pt_br: {
  value: string;
  outdated: boolean;
};
  ro: {
  value: string;
  outdated: boolean;
};
  ru: {
  value: string;
  outdated: boolean;
};
  sk: {
  value: string;
  outdated: boolean;
};
  sl: {
  value: string;
  outdated: boolean;
};
  sq: {
  value: string;
  outdated: boolean;
};
  sr: {
  value: string;
  outdated: boolean;
};
  sr_me: {
  value: string;
  outdated: boolean;
};
  sv: {
  value: string;
  outdated: boolean;
};
  th: {
  value: string;
  outdated: boolean;
};
  tr: {
  value: string;
  outdated: boolean;
};
  uk: {
  value: string;
  outdated: boolean;
};
  vi: {
  value: string;
  outdated: boolean;
};
  zh_cn: {
  value: string;
  outdated: boolean;
};
  zh_tw: {
  value: string;
  outdated: boolean;
};
  tw: {
  value: string;
  outdated: boolean;
};
  sw: {
  value: string;
  outdated: boolean;
};
  kk: {
  value: string;
  outdated: boolean;
};
  be: {
  value: string;
  outdated: boolean;
};
  ar_ma: {
  value: string;
  outdated: boolean;
};
  ar_eg: {
  value: string;
  outdated: boolean;
};
  fr_ma: {
  value: string;
  outdated: boolean;
};
  es_ar: {
  value: string;
  outdated: boolean;
};
  es_pa: {
  value: string;
  outdated: boolean;
};
  es_pe: {
  value: string;
  outdated: boolean;
};
  pa: {
  value: string;
  outdated: boolean;
};
  ur: {
  value: string;
  outdated: boolean;
};
};
  createdAt: string;
  updatedAt: string;
};
  links: {
  self: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaPatchSnippetRequest = {
  name?: string;
  app?: string;
  category?: string;
  description?: string;
  langs?: {};
};

export type KustomerFullApiSchemaPatchSnippetResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  app: string;
  description: string;
  source: string;
  key: string;
  langs: {
  en_us: {
  value: string;
  outdated: boolean;
};
  en_ca: {
  value: string;
  outdated: boolean;
};
  en_gb: {
  value: string;
  outdated: boolean;
};
  af: {
  value: string;
  outdated: boolean;
};
  bg: {
  value: string;
  outdated: boolean;
};
  bs: {
  value: string;
  outdated: boolean;
};
  ca: {
  value: string;
  outdated: boolean;
};
  cs: {
  value: string;
  outdated: boolean;
};
  da: {
  value: string;
  outdated: boolean;
};
  de: {
  value: string;
  outdated: boolean;
};
  nl: {
  value: string;
  outdated: boolean;
};
  el: {
  value: string;
  outdated: boolean;
};
  es: {
  value: string;
  outdated: boolean;
};
  es_es: {
  value: string;
  outdated: boolean;
};
  et: {
  value: string;
  outdated: boolean;
};
  fi: {
  value: string;
  outdated: boolean;
};
  fil: {
  value: string;
  outdated: boolean;
};
  fr: {
  value: string;
  outdated: boolean;
};
  fr_ca: {
  value: string;
  outdated: boolean;
};
  hi: {
  value: string;
  outdated: boolean;
};
  hr: {
  value: string;
  outdated: boolean;
};
  hu: {
  value: string;
  outdated: boolean;
};
  id: {
  value: string;
  outdated: boolean;
};
  is: {
  value: string;
  outdated: boolean;
};
  it: {
  value: string;
  outdated: boolean;
};
  ja: {
  value: string;
  outdated: boolean;
};
  ka: {
  value: string;
  outdated: boolean;
};
  ko: {
  value: string;
  outdated: boolean;
};
  lt: {
  value: string;
  outdated: boolean;
};
  lv: {
  value: string;
  outdated: boolean;
};
  no: {
  value: string;
  outdated: boolean;
};
  pl: {
  value: string;
  outdated: boolean;
};
  pt: {
  value: string;
  outdated: boolean;
};
  pt_br: {
  value: string;
  outdated: boolean;
};
  ro: {
  value: string;
  outdated: boolean;
};
  ru: {
  value: string;
  outdated: boolean;
};
  sk: {
  value: string;
  outdated: boolean;
};
  sl: {
  value: string;
  outdated: boolean;
};
  sq: {
  value: string;
  outdated: boolean;
};
  sr: {
  value: string;
  outdated: boolean;
};
  sr_me: {
  value: string;
  outdated: boolean;
};
  sv: {
  value: string;
  outdated: boolean;
};
  th: {
  value: string;
  outdated: boolean;
};
  tr: {
  value: string;
  outdated: boolean;
};
  uk: {
  value: string;
  outdated: boolean;
};
  vi: {
  value: string;
  outdated: boolean;
};
  zh_cn: {
  value: string;
  outdated: boolean;
};
  zh_tw: {
  value: string;
  outdated: boolean;
};
  tw: {
  value: string;
  outdated: boolean;
};
  sw: {
  value: string;
  outdated: boolean;
};
  kk: {
  value: string;
  outdated: boolean;
};
  be: {
  value: string;
  outdated: boolean;
};
  ar_ma: {
  value: string;
  outdated: boolean;
};
  ar_eg: {
  value: string;
  outdated: boolean;
};
  fr_ma: {
  value: string;
  outdated: boolean;
};
  es_ar: {
  value: string;
  outdated: boolean;
};
  es_pa: {
  value: string;
  outdated: boolean;
};
  es_pe: {
  value: string;
  outdated: boolean;
};
  pa: {
  value: string;
  outdated: boolean;
};
  ur: {
  value: string;
  outdated: boolean;
};
};
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  links: {
  self: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaUpdateSnippetRequest = {
  name?: string;
  app?: string;
  category?: string;
  description?: string;
  langs?: {};
  deleted?: true;
};

export type KustomerFullApiSchemaUpdateSnippetResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  app: string;
  description: string;
  source: string;
  key: string;
  langs: {
  en_us: {
  value: string;
  outdated: boolean;
};
  en_ca: {
  value: string;
  outdated: boolean;
};
  en_gb: {
  value: string;
  outdated: boolean;
};
  af: {
  value: string;
  outdated: boolean;
};
  bg: {
  value: string;
  outdated: boolean;
};
  bs: {
  value: string;
  outdated: boolean;
};
  ca: {
  value: string;
  outdated: boolean;
};
  cs: {
  value: string;
  outdated: boolean;
};
  da: {
  value: string;
  outdated: boolean;
};
  de: {
  value: string;
  outdated: boolean;
};
  nl: {
  value: string;
  outdated: boolean;
};
  el: {
  value: string;
  outdated: boolean;
};
  es: {
  value: string;
  outdated: boolean;
};
  es_es: {
  value: string;
  outdated: boolean;
};
  et: {
  value: string;
  outdated: boolean;
};
  fi: {
  value: string;
  outdated: boolean;
};
  fil: {
  value: string;
  outdated: boolean;
};
  fr: {
  value: string;
  outdated: boolean;
};
  fr_ca: {
  value: string;
  outdated: boolean;
};
  hi: {
  value: string;
  outdated: boolean;
};
  hr: {
  value: string;
  outdated: boolean;
};
  hu: {
  value: string;
  outdated: boolean;
};
  id: {
  value: string;
  outdated: boolean;
};
  is: {
  value: string;
  outdated: boolean;
};
  it: {
  value: string;
  outdated: boolean;
};
  ja: {
  value: string;
  outdated: boolean;
};
  ka: {
  value: string;
  outdated: boolean;
};
  ko: {
  value: string;
  outdated: boolean;
};
  lt: {
  value: string;
  outdated: boolean;
};
  lv: {
  value: string;
  outdated: boolean;
};
  no: {
  value: string;
  outdated: boolean;
};
  pl: {
  value: string;
  outdated: boolean;
};
  pt: {
  value: string;
  outdated: boolean;
};
  pt_br: {
  value: string;
  outdated: boolean;
};
  ro: {
  value: string;
  outdated: boolean;
};
  ru: {
  value: string;
  outdated: boolean;
};
  sk: {
  value: string;
  outdated: boolean;
};
  sl: {
  value: string;
  outdated: boolean;
};
  sq: {
  value: string;
  outdated: boolean;
};
  sr: {
  value: string;
  outdated: boolean;
};
  sr_me: {
  value: string;
  outdated: boolean;
};
  sv: {
  value: string;
  outdated: boolean;
};
  th: {
  value: string;
  outdated: boolean;
};
  tr: {
  value: string;
  outdated: boolean;
};
  uk: {
  value: string;
  outdated: boolean;
};
  vi: {
  value: string;
  outdated: boolean;
};
  zh_cn: {
  value: string;
  outdated: boolean;
};
  zh_tw: {
  value: string;
  outdated: boolean;
};
  tw: {
  value: string;
  outdated: boolean;
};
  sw: {
  value: string;
  outdated: boolean;
};
  kk: {
  value: string;
  outdated: boolean;
};
  be: {
  value: string;
  outdated: boolean;
};
  ar_ma: {
  value: string;
  outdated: boolean;
};
  ar_eg: {
  value: string;
  outdated: boolean;
};
  fr_ma: {
  value: string;
  outdated: boolean;
};
  es_ar: {
  value: string;
  outdated: boolean;
};
  es_pa: {
  value: string;
  outdated: boolean;
};
  es_pe: {
  value: string;
  outdated: boolean;
};
  pa: {
  value: string;
  outdated: boolean;
};
  ur: {
  value: string;
  outdated: boolean;
};
};
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  links: {
  self: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetAllSnoozesResponseSuccess = {
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  enabled: boolean;
  value: (number | {
  day: {
  type: string;
  value: string;
};
  time: string;
});
  type: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: number;
};
  links: {
  self: string;
};
};
  modifiedBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaCreateaSnoozeRequest = {
  name: string;
  value: {};
  type: "relative" | "absolute" | "dynamic";
  enabled?: boolean;
};

export type KustomerFullApiSchemaCreateaSnoozeResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  enabled: boolean;
  value: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetSnoozebyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  enabled: boolean;
  value: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaUpdateSnoozebyIDRequest = (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);

export type KustomerFullApiSchemaUpdateSnoozebyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  enabled: boolean;
  value: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaGETspamsendersResponseGETspamsenders = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  sender: string;
  channel: string;
  list: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaUpsertaspamsenderResponseUpsertaspamsender = {
  data: {
  type: string;
  id: string;
  attributes: {
  sender: string;
  channel: string;
  list: string;
  createdAt: string;
  modifiedAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetTeamsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  members: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateTeamRequest = {
  icon?: string;
  name: string;
  displayName?: string;
  createdAt?: string;
  importedAt?: string;
  members?: ReadonlyArray<string>;
  externalId?: string;
};

export type KustomerFullApiSchemaCreateTeamResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  members: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetTeambyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  members: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateTeamAttributesRequest = {
  icon?: string;
  name?: string;
  displayName?: string;
  members?: ReadonlyArray<string>;
  createdAt?: string;
  deleted?: boolean | null;
};

export type KustomerFullApiSchemaUpdateTeamAttributesResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  members: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateTeambyIDRequest = {
  icon?: string;
  name: string;
  displayName?: string;
  members?: ReadonlyArray<string>;
  createdAt?: string;
  deleted?: boolean | null;
};

export type KustomerFullApiSchemaUpdateTeambyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  members: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaRemoveTeamMemberRequest = {
  members: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaRemoveTeamMemberResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  members: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaAddTeamMemberRequest = {
  members: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaAddTeamMemberResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  members: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaCreateaTrackingEventRequest = {
  trackingId?: string;
  sessionId?: string;
  name: string;
  meta?: {};
};

export type KustomerFullApiSchemaCreateaTrackingIdentityRequest = {
  remember?: boolean;
  trackingId?: string;
  sessionId?: string;
  name?: string;
  company?: string;
  externalId?: string;
  username?: string;
  signedUpAt?: string;
  birthdayAt?: string;
  gender?: "m" | "f";
  locale?: string;
  timeZone?: string;
  email?: string;
  phone?: string;
  location?: {
  type?: "home" | "work" | "other";
  name?: string | null;
  address?: string | null;
  address2?: string | null;
  address3?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  countryCode?: string | null;
  countryName?: string | null;
  regionCode?: string | null;
  regionName?: string | null;
  cityName?: string | null;
  zipCode?: string | null;
  areaCode?: string | null;
};
  tags?: ReadonlyArray<string>;
  custom?: {};
};

export type KustomerFullApiSchemaCreateaTrackingIdentityResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  trackingId: string;
  email: string;
  status: string;
  statusAt: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaCreateaTrackingIdentityEventRequest = {
  identity: KustomerFullApiSchemaIdentity;
  event: KustomerFullApiSchemaEvent;
};

export type KustomerFullApiSchemaCreateaTrackingIdentityEventResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  trackingId: string;
  email: string;
  status: string;
  statusAt: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  customer: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetUsersResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  displayName: string | null;
  name: string;
  userType: string;
  email: string;
  mobile: string | null;
  roles: ReadonlyArray<string>;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateInviteNewUserRequest = {
  displayName?: string | null;
  avatarUrl?: string | null;
  name: string;
  email: string;
  mobile?: string | null;
  emailSignature?: string | null;
  userType?: "user" | "machine" | "limited" | "hourly";
  roleGroups?: ReadonlyArray<string>;
  roles?: KustomerFullApiSchemaAuthRole;
};

export type KustomerFullApiSchemaCreateInviteNewUserResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  displayName: string | null;
  avatarUrl: string;
  name: string;
  userType: string;
  email: string;
  mobile: string | null;
  emailSignature: string | null;
  password: {
  allowNew: boolean;
  forceNew: boolean;
  updatedAt: string;
};
  roles: ReadonlyArray<string>;
  roleGroups: ReadonlyArray<string>;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetUserbyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  displayName: string | null;
  name: string;
  userType: string;
  email: string;
  mobile: string | null;
  roles: ReadonlyArray<string>;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateUserbyIDRequest = {
  displayName?: string | null;
  avatarUrl?: string | null;
  name?: string;
  email?: string;
  mobile?: string | null;
  emailSignature?: string | null;
  deleted?: boolean | null;
  password?: string;
  currentPassword?: string;
  userType?: "user" | "limited" | "hourly";
  roleGroups?: ReadonlyArray<string>;
  roles?: KustomerFullApiSchemaAuthRole;
};

export type KustomerFullApiSchemaUpdateUserbyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  displayName: string | null;
  name: string;
  userType: string;
  email: string;
  mobile: string | null;
  emailSignature: string | null;
  password: {
  allowNew: boolean;
  forceNew: boolean;
  updatedAt: string;
};
  roles: ReadonlyArray<string>;
  roleGroups: ReadonlyArray<string>;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetUserSettingsResponseSuccess = {
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  name: string;
  value: (boolean | {
  en_us: {
  title: string;
  enabled: boolean;
};
});
  app: string;
  category: string;
  createdAt?: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaGetSpecificUserSettingforCurrentUserResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  value: string;
  app: string;
  type: string;
  category: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  user: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaUpdateSpecificUserSettingResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  name: string;
  value: string;
  app: string;
  type: string;
  category: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  user: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
};

export type KustomerFullApiSchemaGetaUsersTeamsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  members: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaGetMultipleUsersbyIDsResponseSuccess = {
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  displayName: string | null;
  name: string;
  userType: string;
  email: string;
  mobile: string | null;
  roles: ReadonlyArray<string>;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetCurrentUserResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  displayName: string | null;
  avatarUrl: string;
  name: string;
  userType: string;
  email: string;
  emailVerifiedAt: string;
  mobile: string | null;
  password: {
  allowNew: boolean;
  forceNew: boolean;
  updatedAt: string;
};
  roles: ReadonlyArray<string>;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateCurrentUserRequest = {
  displayName?: string | null;
  avatarUrl?: string | null;
  name?: string;
  email?: string;
  mobile?: string | null;
  emailSignature?: string | null;
  deleted?: boolean | null;
  password?: string;
  currentPassword?: string;
  userType?: "user" | "limited" | "hourly";
  roleGroups?: ReadonlyArray<string>;
  roles?: KustomerFullApiSchemaAuthRole;
};

export type KustomerFullApiSchemaUpdateCurrentUserResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  displayName: string | null;
  name: string;
  userType: string;
  email: string;
  mobile: string | null;
  emailSignature: string | null;
  password: {
  allowNew: boolean;
  forceNew: boolean;
  updatedAt: string;
};
  roles: ReadonlyArray<string>;
  roleGroups: string;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetUserSettingsforCurrentUserResponseSuccess = {
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  name: string;
  value: string | null;
};
}>;
};

export type KustomerFullApiSchemaResetUsersPasswordRequest = {
  domain: string;
  email: string;
};

export type KustomerFullApiSchemaGetArticlesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  hash: string;
  title: string;
  source: string;
  status: string;
  scope: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  publishedAt: string;
  deleted: boolean;
  deletedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  knowledgeBases: ReadonlyArray<{
  id: string;
  featured: boolean;
}>;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  latestLangs: {
  en_us: {
  status: string;
  outdated: boolean;
};
};
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  deletedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  published_en_us: {
  data: {
  type: string;
  id: string;
};
};
  unpublished_en_us: {
  data: {
  type: string;
  id: string;
};
};
  categories: {
  data: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  accessUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  links: {
  self: string;
};
}>;
  included: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};

export type KustomerFullApiSchemaCreateanArticleRequest = {
  title: string;
  slug?: string;
  hash?: string;
  category?: string;
  categories?: KustomerFullApiSchemaArticleCategories;
  tags?: KustomerFullApiSchemaTags2;
  scope?: "public" | "internal";
  advanced?: boolean;
  source?: string;
  externalId?: string;
};

export type KustomerFullApiSchemaCreateanArticleResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  hash: string;
  title: string;
  source: string;
  status: string;
  scope: string;
  createdAt: string;
  updatedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
  knowledgeBases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  metaKeywords: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  draftLangs: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  draft_en_us: {
  data: {
  type: string;
  id: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
  accessUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  links: {
  self: string;
};
};
  included: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  lang: string;
  title: string;
  slug: string;
  metaKeywords: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  htmlBody: string;
  advanced: boolean;
  createdAt: string;
  updatedAt: string;
  rev: number;
  status: string;
  scope: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
}>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  accessUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
}>;
};

export type KustomerFullApiSchemaUpdateArticleResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  hash: string;
  title: string;
  source: string;
  status: string;
  scope: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  publishedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
  knowledgeBases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  latestLangs: {
  en_us: {
  status: string;
  outdated: boolean;
};
};
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  published_en_us: {
  data: {
  type: string;
  id: string;
};
};
  category: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
  accessUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateArticleRequest = {
  category?: string | null;
  categories?: KustomerFullApiSchemaArticleCategories;
  knowledgeBases?: KustomerFullApiSchemaArticleKnowledgeBases;
  tags?: KustomerFullApiSchemaTags2;
  scope?: "public" | "internal";
  published?: boolean;
  externalId?: string;
  deleted?: true;
  status?: "unpublished";
};

export type KustomerFullApiSchemaGetRoutesbyArticleIDResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  url: string;
  routableType: string;
  routableId: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreatearticlescheduleRequest = {
  publishAt: string;
  lang: string;
  tz: string;
};

export type KustomerFullApiSchemaCreatearticlescheduleResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  hash: string;
  title: string;
  source: string;
  status: string;
  scope: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  publishedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
  knowledgeBases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  latestLangs: {
  en_us: {
  status: string;
  outdated: boolean;
};
};
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  published_en_us: {
  data: {
  type: string;
  id: string;
};
};
  category: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
  accessUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaDeleteArticleScheduleResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  hash: string;
  title: string;
  source: string;
  status: string;
  scope: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  publishedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
  knowledgeBases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  latestLangs: {
  en_us: {
  status: string;
  outdated: boolean;
};
};
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  published_en_us: {
  data: {
  type: string;
  id: string;
};
};
  category: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
  accessUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateArticleScheduleRequest = {
  publishAt: string;
  tz: string;
};

export type KustomerFullApiSchemaUpdateArticleScheduleResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  hash: string;
  title: string;
  source: string;
  status: string;
  scope: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  publishedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
  knowledgeBases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  latestLangs: {
  en_us: {
  status: string;
  outdated: boolean;
};
};
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  published_en_us: {
  data: {
  type: string;
  id: string;
};
};
  category: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
  accessUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaErrorResponse7 = {
  errors: ReadonlyArray<{
  code: string;
  message: string;
  meta?: {
  readonly [key: string]: KustomerFullApiSchemaJsonValue | undefined;
};
}>;
};

export type KustomerFullApiSchemaGetArticleVersionsbyLanguageResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  lang: string;
  title: string;
  slug: string;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  htmlBody: string;
  advanced: boolean;
  createdAt: string;
  updatedAt: string;
  modifiedAt?: string;
  publishedAt?: string;
  version?: number;
  rev: number;
  status: string;
  scope: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
}>;
};

export type KustomerFullApiSchemaCreateaVersionRequest = {
  title?: string;
  slug?: string;
  tags?: KustomerFullApiSchemaTags2;
  advanced?: boolean;
  htmlBody?: string;
  metaDescription?: string;
  metaTitle?: string;
  metaKeywords?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};

export type KustomerFullApiSchemaCreateaVersionResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  lang: string;
  title: string;
  slug: string;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  htmlBody: string;
  advanced: boolean;
  createdAt: string;
  updatedAt: string;
  rev: number;
  status: string;
  scope: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
};
  included: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  hash: string;
  title: string;
  source: string;
  status: string;
  scope: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  publishedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
  latestLangs: {
  en_us: {
  status: string;
  outdated: boolean;
};
};
  draftLangs: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  published_en_us: {
  data: {
  type: string;
  id: string;
};
};
  draft_en_us: {
  data: {
  type: string;
  id: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaUpdateaDraftVersionRequest = {
  publishedAt?: string;
  markOthersOutOfDate?: boolean;
  title?: string;
  slug?: string;
  advanced?: boolean;
  tags?: KustomerFullApiSchemaTags2;
  htmlBody?: string;
  metaDescription?: string;
  metaTitle?: string;
  metaKeywords?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessTeams?: ReadonlyArray<string>;
  accessUsers?: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaUpdateaDraftVersionResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  lang: string;
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  htmlBody: string;
  advanced: boolean;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  rev: number;
  status: string;
  scope: string;
  tags: ReadonlyArray<string>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  accessUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
};
  included: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  hash: string;
  title: string;
  source: string;
  status: string;
  scope: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  publishedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
  knowledgeBases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  latestLangs: {
  en_us: {
  status: string;
  outdated: boolean;
};
};
  draftLangs: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  published_en_us: {
  data: {
  type: string;
  id: string;
};
};
  draft_en_us: {
  data: {
  type: string;
  id: string;
};
};
  unpublished_en_us: {
  data: {
  type: string;
  id: string;
};
};
  category: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
  accessUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaUpdateLatestPublishedArticleVersionRequest = {
  outdated?: boolean;
  status?: "unpublished";
};

export type KustomerFullApiSchemaUpdateLatestPublishedArticleVersionResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  lang: string;
  title: string;
  slug: string;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  htmlBody: string;
  advanced: boolean;
  createdAt: string;
  updatedAt: string;
  rev: number;
  status: string;
  scope: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
};
  included: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  hash: string;
  title: string;
  source: string;
  status: string;
  scope: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  publishedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
  latestLangs: {
  en_us: {
  status: string;
  outdated: boolean;
};
};
  draftLangs: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  published_en_us: {
  data: {
  type: string;
  id: string;
};
};
  draft_en_us: {
  data: {
  type: string;
  id: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaSearchArticlesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
  total: number;
  totalPages: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
  last: string;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  lang: string;
  title: string;
  slug: string;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  htmlBody: string;
  advanced: boolean;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  publishedAt: string;
  version: number;
  rev: number;
  status: string;
  scope: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  accessUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
}>;
};

export type KustomerFullApiSchemaGetCategoriesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  hash: string;
  langs: {
  en_us: {
  disabled: boolean;
  description: string;
  slug: string;
  title: string;
};
};
  createdAt: string;
  updatedAt: string;
  published: boolean;
  positions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categoryPositions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  root: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  parent: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateaCategoryRequest = {
  parent?: string;
  knowledgeBase?: string;
  langs?: {};
  externalId?: string;
  hash?: string;
  positions?: ReadonlyArray<string>;
  icon?: string | null;
};

export type KustomerFullApiSchemaCreateaCategoryResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  hash: string;
  langs: {
  en_us: {
  title: string;
  slug: string;
  description: string;
  disabled: boolean;
};
};
  createdAt: string;
  updatedAt: string;
  published: boolean;
  positions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categoryPositions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  root: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  parent: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetCategorybyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  hash: string;
  langs: {
  en_us: {
  title: string;
  slug: string;
  description: string;
  disabled: boolean;
};
};
  createdAt: string;
  updatedAt: string;
  published: boolean;
  positions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categoryPositions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  root: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  parent: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateCategoryRequest = {
  parent?: string;
  langs?: {};
  deleted?: true;
  externalId?: string;
  positions?: ReadonlyArray<string>;
  categoryPositions?: ReadonlyArray<string>;
  icon?: string | null;
};

export type KustomerFullApiSchemaUpdateCategoryResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  hash: string;
  langs: {
  en_us: {
  disabled: boolean;
  description: string;
  slug: string;
  title: string;
};
};
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  published: boolean;
  positions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categoryPositions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  root: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  parent: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetRoutesbyCategoryIDResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  url: string;
  routableType: string;
  routableId: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  category: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateaCategoryRouteRequest = {
  url: string;
  pattern?: string;
  position?: number;
};

export type KustomerFullApiSchemaCreateaCategoryRouteResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  url: string;
  routableType: string;
  routableId: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetFormsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  slug: string;
  hash: string;
  layout: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  layoutV2: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  advanced: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  published: boolean;
  snippets: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recaptcha: boolean;
  klass: string;
  channel: string;
  deflection: boolean;
  formHookEnabled: boolean;
  replyFrom: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateaFormRequest = {
  name: string;
  slug?: string;
  hash?: string;
  body?: string;
  published?: boolean;
  snippets?: ReadonlyArray<string>;
  layout?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  components?: {};
  layoutV2?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  componentsV2?: {};
  knowledgeBase?: string;
  advanced?: boolean;
  recaptcha?: boolean;
  klass?: "conversation";
  channel?: "email";
  deflection?: boolean;
  formHookEnabled?: boolean;
  replyFrom?: string;
};

export type KustomerFullApiSchemaCreateaFormResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  slug: string;
  hash: string;
  layout: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  layoutV2: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  componentsV2: {};
  advanced: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  published: boolean;
  snippets: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recaptcha: boolean;
  klass: string;
  channel: string;
  deflection: boolean;
  formHookEnabled: boolean;
  replyFrom: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetFormbyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  slug: string;
  hash: string;
  layout: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  layoutV2: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  componentsV2: {};
  advanced: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  published: boolean;
  snippets: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recaptcha: boolean;
  klass: string;
  channel: string;
  deflection: boolean;
  formHookEnabled: boolean;
  replyFrom: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateFormRequest = {
  name?: string;
  slug?: string;
  body?: string;
  published?: boolean;
  snippets?: ReadonlyArray<string>;
  layout?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  components?: {};
  layoutV2?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  componentsV2?: {};
  knowledgeBase?: string;
  advanced?: boolean;
  recaptcha?: boolean;
  klass?: "conversation";
  channel?: "email";
  deflection?: boolean;
  formHookEnabled?: boolean;
  replyFrom?: string | null;
};

export type KustomerFullApiSchemaUpdateFormResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  slug: string;
  hash: string;
  body: string;
  layout: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  layoutV2: ReadonlyArray<{
  type: string;
  id: string;
  children: ReadonlyArray<{
  type: string;
  id: string;
  children: ReadonlyArray<{
  id: string;
  type: string;
}>;
}>;
}>;
  componentsV2: {
  D8sN3xT04: {
  componentType: string;
  id: string;
  componentAttributes: {
  formId: string;
  orgId: string;
  title: string;
  postUrl: string;
  successMessage: string;
  errorMessage: string;
  submitButtonText: string;
  loadingText: string;
  recaptcha: boolean;
  deflection: boolean;
  formHookEnabled: boolean;
  orgName: string;
};
};
  _pQ665Woy: {
  id: string;
  componentAttributes: {
  className: string;
};
  componentType: string;
};
  _eBMKOcbW7: {
  id: string;
  componentAttributes: {
  className: string;
};
  componentType: string;
};
  "JJsMafj-Hn": {
  id: string;
  componentAttributes: {
  hint: string;
  placeholder: string;
  type: string;
  label: string;
  name: string;
  id: string;
  description: string;
  className: string;
  required: boolean;
  updateAttribute: boolean;
  attributeProperty: string;
  attributeType: string;
  isCustomAttribute: boolean;
};
  componentType: string;
  attributeProperty: string;
  attributeType: string;
  isCustomAttribute: boolean;
};
  bMd3S0IfXh: {
  id: string;
  componentAttributes: {
  hint: string;
  placeholder: string;
  type: string;
  label: string;
  name: string;
  id: string;
  description: string;
  className: string;
  required: boolean;
  updateAttribute: boolean;
  deflection: boolean;
  suggestedArticlesLabel: string;
  attributeProperty: string;
  attributeType: string;
  isCustomAttribute: boolean;
};
  componentType: string;
  attributeProperty: string;
  attributeType: string;
  isCustomAttribute: boolean;
};
  S7ilDCzkdx: {
  id: string;
  componentAttributes: {
  hint: string;
  placeholder: string;
  type: string;
  label: string;
  name: string;
  id: string;
  description: string;
  className: string;
  required: boolean;
  updateAttribute: boolean;
  attributeProperty: string;
  attributeType: string;
  isCustomAttribute: boolean;
};
  componentType: string;
  attributeProperty: string;
  attributeType: string;
  isCustomAttribute: boolean;
};
};
  advanced: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  modifiedAt: string;
  published: boolean;
  snippets: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recaptcha: boolean;
  klass: string;
  channel: string;
  deflection: boolean;
  formHookEnabled: boolean;
  replyFrom: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetInternalCategoriesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  hash: string;
  langs: {
  en_us: {
  title: string;
  slug: string;
  description: string;
  disabled: boolean;
};
};
  createdAt: string;
  updatedAt: string;
  published: boolean;
  positions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateanInternalCategoryRequest = {
  parent?: string;
  langs?: {};
  externalId?: string;
  hash?: string;
  positions?: ReadonlyArray<string>;
  icon?: string | null;
};

export type KustomerFullApiSchemaCreateanInternalCategoryResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  hash: string;
  langs: {
  en_us: {
  title: string;
  slug: string;
  description: string;
  disabled: boolean;
};
};
  createdAt: string;
  updatedAt: string;
  published: boolean;
  positions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetInternalCategorybyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  hash: string;
  langs: {
  en_us: {
  title: string;
  slug: string;
  description: string;
  disabled: boolean;
};
};
  createdAt: string;
  updatedAt: string;
  published: boolean;
  positions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaCreateKnowledgeBaseRequest = {
  name: string;
  brand: string;
  noIndex?: boolean;
  theme?: string | null;
  baseUrl?: string;
  subdomain: string;
  logo?: string;
  favicon?: string;
  homepageTitle?: string;
  includeAllData?: boolean;
  defaultLanguage?: string;
  languages?: {};
  metaTags?: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaCreateKnowledgeBaseResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  subdomain: string;
  default: boolean;
  homepageTitle: string;
  defaultLanguage: string;
  baseUrl: string;
  languages: {
  en_us: {
  enabled: boolean;
  title: string;
};
};
  noIndex: boolean;
  metaTags: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  brand: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetKnowledgeBasebyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  subdomain: string;
  default: boolean;
  logo: string;
  favicon: string;
  homepageTitle: string;
  includeAllData: boolean;
  defaultLanguage: string;
  baseUrl: string;
  languages: {
  en_us: {
  enabled: boolean;
  title: string;
};
  af: {
  enabled: boolean;
  title: string;
};
  de: {
  enabled: boolean;
  title: string;
};
  en_gb: {
  enabled: boolean;
  title: string;
};
  en_ca: {
  enabled: boolean;
  title: string;
};
  zh_cn: {
  enabled: boolean;
  title: string;
};
  es: {
  enabled: boolean;
  title: string;
};
};
  noIndex: boolean;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  brand: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  theme: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateKnowledgeBaseRequest = {
  name?: string;
  noIndex?: boolean;
  logo?: string;
  favicon?: string;
  theme?: string | null;
  baseUrl?: string;
  homepageTitle?: string;
  includeAllData?: boolean;
  defaultLanguage?: string;
  languages?: {};
  metaTags?: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaUpdateKnowledgeBaseResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  subdomain: string;
  default: boolean;
  logo: string;
  favicon: string;
  homepageTitle: string;
  includeAllData: boolean;
  defaultLanguage: string;
  baseUrl: string;
  languages: {
  en_us: {
  enabled: boolean;
  title: string;
};
  en_ca: {
  enabled: boolean;
  title: string;
};
  en_gb: {
  enabled: boolean;
  title: string;
};
  es: {
  enabled: boolean;
  title: string;
};
};
  noIndex: boolean;
  metaTags: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  brand: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaCreateCustomDomainRequest = {
  domain: string;
};

export type KustomerFullApiSchemaUpdateCustomDomainRequest = {
  domain: string;
};

export type KustomerFullApiSchemaGetRoutebyURLPublicResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  url: string;
  routableType: string;
  routableId: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  category: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
  included: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  hash: string;
  langs: {
  en_us: {
  title: string;
  slug: string;
  description: string;
  disabled: boolean;
};
};
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  published: boolean;
  deleted: boolean;
  deletedAt: string;
  positions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categoryPositions: ReadonlyArray<string>;
  root: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  knowledgeBase: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  deletedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  parent: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
};
};

export type KustomerFullApiSchemaGetRoutesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  url: string;
  routableType: string;
  routableId: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateaRouteRequest = {
  url: string;
  routableType: "article" | "category";
  routableId: string;
  pattern?: string;
  position?: number;
};

export type KustomerFullApiSchemaCreateaRouteResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  url: string;
  routableType: string;
  routableId: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetRoutebyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  url: string;
  routableType: string;
  routableId: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateRouteRequest = (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue);

export type KustomerFullApiSchemaUpdateRouteResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  url: string;
  routableType: string;
  routableId: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetArticleVersionbyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  lang: string;
  title: string;
  slug: string;
  metaDescription: string;
  metaKeywords: ReadonlyArray<string>;
  htmlBody: string;
  advanced: boolean;
  createdAt: string;
  updatedAt: string;
  rev: number;
  status: string;
  scope: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  article: {
  data: {
  id: string;
  type: string;
};
  links: {
  self: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
};
  included: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  hash: string;
  title: string;
  source: string;
  status: string;
  scope: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  publishedAt: string;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  categories: ReadonlyArray<{
  id: string;
  knowledgeBase: string;
}>;
  latestLangs: {
  en_us: {
  status: string;
  outdated: boolean;
};
};
  draftLangs: ReadonlyArray<string>;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  publishedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  published_en_us: {
  data: {
  type: string;
  id: string;
};
};
  draft_en_us: {
  data: {
  type: string;
  id: string;
};
};
  categories: {
  data: ReadonlyArray<{
  type: string;
  id: string;
}>;
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetTagsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateTagRequest = {
  name?: string;
};

export type KustomerFullApiSchemaCreateTagResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetTagsbyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateTagRequest = {
  name?: string;
};

export type KustomerFullApiSchemaUpdateTagResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetTemplatesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  title: string;
  description: string;
  manifest: ReadonlyArray<{
  name: string;
  variables: {
  headingsAndButtonsFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  headingBaseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  baseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  headingsColor?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryTextColor?: {
  name: string;
  type: string;
  value: string;
};
  linksColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonTextColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  borderPageColor?: {
  name: string;
  type: string;
  value: string;
};
  homepageOnly?: {
  name: string;
  type: string;
  label: string;
  value: boolean;
};
  announcementText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  textColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  backgroundColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaLink?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  navigation?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  navigationText: {
  name: string;
  label: string;
  type: string;
  value: string;
};
  navigationLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
  collapsible?: boolean;
};
  primaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  promptText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  heroImage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayOpacity?: {
  name: string;
  type: string;
  label: string;
  value: number;
};
  primaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  social?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  collapsible: boolean;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  socialIcon: {
  name: string;
  label: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  socialLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
};
  copyrightInfo?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
};
  label?: string;
  enabled?: boolean;
  link?: {
  label: string;
  description: string;
  buttonText: string;
  value: string;
  learnMoreLink?: string;
};
}>;
  jsxSnippets: ReadonlyArray<string>;
  images: ReadonlyArray<string>;
  version: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetTemplatesbyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  title: string;
  description: string;
  manifest: ReadonlyArray<{
  name: string;
  variables: {
  headingsAndButtonsFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  value: string;
};
  headingBaseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  value: string;
};
  baseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  headingsColor?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryTextColor?: {
  name: string;
  type: string;
  value: string;
};
  linksColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryButtonColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  borderPageColor?: {
  name: string;
  type: string;
  value: string;
};
  homepageOnly?: {
  name: string;
  type: string;
  label: string;
  value: boolean;
};
  announcementText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  textColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  backgroundColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaLink?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  navigation?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  label: string;
  value: ReadonlyArray<{
  textLabel: string;
  linkLabel: string;
  text: string;
  link: string;
}>;
  description?: string;
};
  primaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  promptText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  heroImage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayOpacity?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  primaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  copyrightInfo?: {
  name: string;
  type: string;
  label: string;
  description: string;
  value: string;
};
  facebook?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  twitter?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  instagram?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  pinterest?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  linkedin?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
};
  label?: string;
  enabled?: boolean;
  link?: {
  label: string;
  description: string;
  value: string;
};
  description?: string;
}>;
  jsxSnippets: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  images: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  version: string;
  createdAt: string;
  updatedAt: string;
};
  relationships: {};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetThemesResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  active: boolean;
  default: boolean;
  lastFileUpdatedAt: string;
  status: string;
  manifest: ReadonlyArray<{
  name: string;
  variables: {
  headingsAndButtonsFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  headingBaseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  baseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  headingsColor?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryTextColor?: {
  name: string;
  type: string;
  value: string;
};
  linksColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonTextColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  borderPageColor?: {
  name: string;
  type: string;
  value: string;
};
  homepageOnly?: {
  name: string;
  type: string;
  label: string;
  value: boolean;
};
  announcementText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  textColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  backgroundColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaLink?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  navigation?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  navigationText: {
  name: string;
  label: string;
  type: string;
  value: string;
};
  navigationLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
  collapsible?: boolean;
};
  primaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  promptText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  heroImage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayOpacity?: {
  name: string;
  type: string;
  label: string;
  value: number;
};
  primaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  social?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  collapsible: boolean;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  socialIcon: {
  name: string;
  label: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  socialLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
};
  copyrightInfo?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
};
  label?: string;
  enabled?: boolean;
  link?: {
  label: string;
  description: string;
  buttonText: string;
  value: string;
  learnMoreLink?: string;
};
}>;
  configSnippets: ReadonlyArray<string>;
  jsxSnippets: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  rev: number;
  templateVersionId?: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy?: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateaThemeRequest = {
  name: string;
  duplicateThemeId?: string;
  duplicateTemplateId?: string;
  status?: "draft" | "published";
};

export type KustomerFullApiSchemaCreateaThemeResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  active: boolean;
  default: boolean;
  lastFileUpdatedAt: string;
  status: string;
  templateVersionId: string;
  manifest: ReadonlyArray<{
  name: string;
  variables: {
  headingsAndButtonsFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  headingBaseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  baseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  headingsColor?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryTextColor?: {
  name: string;
  type: string;
  value: string;
};
  linksColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonTextColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  borderPageColor?: {
  name: string;
  type: string;
  value: string;
};
  homepageOnly?: {
  name: string;
  type: string;
  label: string;
  value: boolean;
};
  announcementText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  textColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  backgroundColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaLink?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  navigation?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  navigationText: {
  name: string;
  label: string;
  type: string;
  value: string;
};
  navigationLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
  collapsible?: boolean;
};
  primaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  promptText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  heroImage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayOpacity?: {
  name: string;
  type: string;
  label: string;
  value: number;
};
  primaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  social?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  collapsible: boolean;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  socialIcon: {
  name: string;
  label: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  socialLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
};
  copyrightInfo?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
};
  label?: string;
  enabled?: boolean;
  link?: {
  label: string;
  description: string;
  buttonText: string;
  value: string;
  learnMoreLink?: string;
};
}>;
  configSnippets: ReadonlyArray<string>;
  jsxSnippets: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetThemesbyIDResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  active: boolean;
  default: boolean;
  lastFileUpdatedAt: string;
  status: string;
  templateVersionId: string;
  manifest: ReadonlyArray<{
  name: string;
  variables: {
  headingsAndButtonsFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  headingBaseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  baseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  headingsColor?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryTextColor?: {
  name: string;
  type: string;
  value: string;
};
  linksColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonTextColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  borderPageColor?: {
  name: string;
  type: string;
  value: string;
};
  homepageOnly?: {
  name: string;
  type: string;
  label: string;
  value: boolean;
};
  announcementText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  textColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  backgroundColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaLink?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  navigation?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  navigationText: {
  name: string;
  label: string;
  type: string;
  value: string;
};
  navigationLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
  collapsible?: boolean;
};
  primaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  promptText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  heroImage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayOpacity?: {
  name: string;
  type: string;
  label: string;
  value: number;
};
  primaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  social?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  collapsible: boolean;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  socialIcon: {
  name: string;
  label: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  socialLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
};
  copyrightInfo?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
};
  label?: string;
  enabled?: boolean;
  link?: {
  label: string;
  description: string;
  buttonText: string;
  value: string;
  learnMoreLink?: string;
};
}>;
  configSnippets: ReadonlyArray<string>;
  jsxSnippets: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetThemeRevisionsResponseSuccess = {
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  status: string;
  createdAt: string;
  rev: number;
};
  relationships: {
  theme: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
}>;
};

export type KustomerFullApiSchemaGetThemeRevisionbyIDResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  status: string;
  createdAt: string;
  rev: number;
};
  relationships: {
  theme: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
};
  included: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  active: boolean;
  default: boolean;
  lastFileUpdatedAt: string;
  status: string;
  templateVersionId: string;
  manifest: ReadonlyArray<{
  name: string;
  variables: {
  headingsAndButtonsFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  headingBaseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  baseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  headingsColor?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryTextColor?: {
  name: string;
  type: string;
  value: string;
};
  linksColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonTextColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  borderPageColor?: {
  name: string;
  type: string;
  value: string;
};
  homepageOnly?: {
  name: string;
  type: string;
  label: string;
  value: boolean;
};
  announcementText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  textColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  backgroundColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaLink?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  navigation?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  navigationText: {
  name: string;
  label: string;
  type: string;
  value: string;
};
  navigationLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
  collapsible?: boolean;
};
  primaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  promptText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  heroImage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayOpacity?: {
  name: string;
  type: string;
  label: string;
  value: number;
};
  primaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  social?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  collapsible: boolean;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  socialIcon: {
  name: string;
  label: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  socialLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
};
  copyrightInfo?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
};
  label?: string;
  enabled?: boolean;
  link?: {
  label: string;
  description: string;
  buttonText: string;
  value: string;
  learnMoreLink?: string;
};
}>;
  configSnippets: ReadonlyArray<string>;
  jsxSnippets: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetThemeFilesbyRevisionResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  type: string;
  content: string;
  compiled: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  snippets: ReadonlyArray<string>;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  theme: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  themeRevision: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaCreateRevisionThemeFileRequest = {
  name: string;
  type: "page" | "component" | "asset";
  content?: string;
  snippets?: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaCreateRevisionThemeFileResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  snippets: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  theme: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  themeRevision: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetThemeFilebyRevisionResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  type: string;
  content: string;
  compiled: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  snippets: ReadonlyArray<string>;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  theme: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  themeRevision: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateRevisionThemeFileRequest = {
  name: string;
  type: "page" | "component" | "asset";
  content?: string;
  snippets?: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaUpdateRevisionThemeFileResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  type: string;
  content: string;
  compiled: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  snippets: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  theme: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  themeRevision: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaCreateThemeDraftRevisionRequest = ({
  name: string;
  manifest: KustomerFullApiSchemaManifest;
  jsxSnippets?: ReadonlyArray<string>;
} | {
  duplicateRevisionId: string;
});

export type KustomerFullApiSchemaCreateThemeDraftRevisionResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  active: boolean;
  default: boolean;
  lastFileUpdatedAt: string;
  status: string;
  templateVersionId: string;
  manifest: ReadonlyArray<{
  name: string;
  variables: {
  headingsAndButtonsFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  headingBaseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  baseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  headingsColor?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryTextColor?: {
  name: string;
  type: string;
  value: string;
};
  linksColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonTextColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  borderPageColor?: {
  name: string;
  type: string;
  value: string;
};
  homepageOnly?: {
  name: string;
  type: string;
  label: string;
  value: boolean;
};
  announcementText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  textColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  backgroundColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaLink?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  navigation?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  navigationText: {
  name: string;
  label: string;
  type: string;
  value: string;
};
  navigationLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
  collapsible?: boolean;
};
  primaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  promptText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  heroImage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayOpacity?: {
  name: string;
  type: string;
  label: string;
  value: number;
};
  primaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  social?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  collapsible: boolean;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  socialIcon: {
  name: string;
  label: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  socialLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
};
  copyrightInfo?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
};
  label?: string;
  enabled?: boolean;
  link?: {
  label: string;
  description: string;
  buttonText: string;
  value: string;
  learnMoreLink?: string;
};
}>;
  configSnippets: ReadonlyArray<string>;
  jsxSnippets: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateThemeDraftRevisionRequest = ({
  name: string;
  manifest: KustomerFullApiSchemaManifest;
  jsxSnippets: ReadonlyArray<string>;
} | {
  publish: boolean;
});

export type KustomerFullApiSchemaUpdateThemeDraftRevisionResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  active: boolean;
  default: boolean;
  lastFileUpdatedAt: string;
  status: string;
  templateVersionId: string;
  manifest: ReadonlyArray<{
  name: string;
  variables: {
  headingsAndButtonsFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  headingBaseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextFont?: {
  name: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  baseSizeFont?: {
  name: string;
  type: string;
  value: string;
};
  headingsColor?: {
  name: string;
  type: string;
  value: string;
};
  bodyTextColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryTextColor?: {
  name: string;
  type: string;
  value: string;
};
  linksColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryButtonTextColor?: {
  name: string;
  type: string;
  value: string;
};
  primaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  secondaryBackgroundPageColor?: {
  name: string;
  type: string;
  value: string;
};
  borderPageColor?: {
  name: string;
  type: string;
  value: string;
};
  homepageOnly?: {
  name: string;
  type: string;
  label: string;
  value: boolean;
};
  announcementText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  textColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  backgroundColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  ctaLink?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  navigation?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  navigationText: {
  name: string;
  label: string;
  type: string;
  value: string;
};
  navigationLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
  collapsible?: boolean;
};
  primaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryMessage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayTextColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  promptText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  heroImage?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayColor?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  overlayOpacity?: {
  name: string;
  type: string;
  label: string;
  value: number;
};
  primaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  secondaryText?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
  social?: {
  name: string;
  type: string;
  minItems: number;
  maxItems: number;
  collapsible: boolean;
  label: string;
  buttonText: string;
  value: ReadonlyArray<{
  socialIcon: {
  name: string;
  label: string;
  type: string;
  enum: ReadonlyArray<{
  label: string;
  value: string;
}>;
  value: string;
};
  socialLink: {
  name: string;
  label: string;
  type: string;
  value: string;
};
}>;
};
  copyrightInfo?: {
  name: string;
  type: string;
  label: string;
  value: string;
};
};
  label?: string;
  enabled?: boolean;
  link?: {
  label: string;
  description: string;
  buttonText: string;
  value: string;
  learnMoreLink?: string;
};
}>;
  configSnippets: ReadonlyArray<string>;
  jsxSnippets: ReadonlyArray<string>;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  rev: number;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetWorkflowVariableResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  maskedValue: string;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  workflow: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateWorkflowVariableRequest = {
  name?: string;
  value?: string;
  type?: "string";
};

export type KustomerFullApiSchemaUpdateWorkflowVariableResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  maskedValue: string;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  workflow: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetWorkflowsResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  lastError: {};
  trigger: {
  transitions: ReadonlyArray<{
  condition: {
  values: ReadonlyArray<{
  values: ReadonlyArray<string>;
  op: string;
}>;
  op: string;
};
  target: string;
}>;
  eventName: string;
  id: string;
};
  steps: ReadonlyArray<{
  id: string;
  action: string;
  params: {
  id: string;
  assignedUsers?: ReadonlyArray<string>;
};
  _id: string;
  errorCases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  transitions: ReadonlyArray<{
  target: string;
  condition: {
  op: string;
  values: ReadonlyArray<number>;
};
}>;
}>;
  enabled: boolean;
  editable: boolean;
  updatedAt: string;
  createdAt: string;
  containsVariables: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: string | null;
  modifiedBy: string | null;
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateWorkflowRequest = {
  name: string;
  replaces?: string | null;
  description?: string;
  meta?: KustomerFullApiSchemaWorkflowMeta;
  trigger?: (KustomerFullApiSchemaWorkflowTriggerCallable | KustomerFullApiSchemaWorkflowTriggerEvent);
  steps?: ReadonlyArray<{
  id: string;
  appVersion?: KustomerFullApiSchemaAppVersion;
  meta?: KustomerFullApiSchemaWorkflowMeta;
  action?: string;
  params?: {};
  transitions: KustomerFullApiSchemaWorkflowTransitions;
  errorCases?: KustomerFullApiSchemaWorkflowErrorCases;
}>;
  enabled?: boolean;
  logging?: boolean;
};

export type KustomerFullApiSchemaCreateWorkflowResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  lastError: {};
  trigger: {
  transitions: ReadonlyArray<{
  condition: {
  values: ReadonlyArray<{
  values: ReadonlyArray<string>;
  op: string;
}>;
  op: string;
};
  target: string;
}>;
  eventName: string;
  id: string;
};
  steps: ReadonlyArray<{
  id: string;
  action: string;
  params: {
  id: string;
  assignedUsers?: ReadonlyArray<string>;
};
  _id: string;
  errorCases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  transitions: ReadonlyArray<{
  target: string;
  condition: {
  op: string;
  values: ReadonlyArray<number>;
};
}>;
}>;
  enabled: boolean;
  editable: boolean;
  updatedAt: string;
  createdAt: string;
  containsVariables: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: string | null;
  modifiedBy: string | null;
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetWorkflowResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  lastError: {};
  trigger: {
  transitions: ReadonlyArray<{
  condition: {
  values: ReadonlyArray<{
  values: ReadonlyArray<string>;
  op: string;
}>;
  op: string;
};
  target: string;
}>;
  eventName: string;
  id: string;
};
  steps: ReadonlyArray<{
  id: string;
  action: string;
  params: {
  id: string;
  assignedUsers?: ReadonlyArray<string>;
};
  _id: string;
  errorCases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  transitions: ReadonlyArray<{
  target: string;
  condition: {
  op: string;
  values: ReadonlyArray<number>;
};
}>;
}>;
  enabled: boolean;
  editable: boolean;
  updatedAt: string;
  createdAt: string;
  containsVariables: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: string | null;
  modifiedBy: string | null;
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaUpdateWorkflowRequest = {
  name?: string;
  replaces?: string | null;
  description?: string;
  meta?: KustomerFullApiSchemaWorkflowMeta;
  trigger?: (KustomerFullApiSchemaWorkflowTriggerCallable | KustomerFullApiSchemaWorkflowTriggerEvent);
  steps?: ReadonlyArray<{
  id: string;
  appVersion?: KustomerFullApiSchemaAppVersion;
  meta?: KustomerFullApiSchemaWorkflowMeta;
  action?: string;
  params?: {};
  transitions: KustomerFullApiSchemaWorkflowTransitions;
  errorCases?: KustomerFullApiSchemaWorkflowErrorCases;
}>;
  enabled?: boolean;
  logging?: boolean;
};

export type KustomerFullApiSchemaUpdateWorkflowResponseSuccess = {
  data: {
  type: string;
  id: string;
  attributes: {
  name: string;
  description: string;
  lastError: {};
  trigger: {
  transitions: ReadonlyArray<{
  condition: {
  values: ReadonlyArray<{
  values: ReadonlyArray<string>;
  op: string;
}>;
  op: string;
};
  target: string;
}>;
  eventName: string;
  id: string;
};
  steps: ReadonlyArray<{
  id: string;
  action: string;
  params: {
  id: string;
  assignedUsers?: ReadonlyArray<string>;
};
  _id: string;
  errorCases: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  transitions: ReadonlyArray<{
  target: string;
  condition: {
  op: string;
  values: ReadonlyArray<number>;
};
}>;
}>;
  enabled: boolean;
  editable: boolean;
  updatedAt: string;
  createdAt: string;
  containsVariables: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: string | null;
  modifiedBy: string | null;
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaGetProcessesbyWorkflowResponseGetProcessesbyWorkflow = {
  meta: {
  pageSize: number;
  page: number;
  total: number;
  totalPages: number;
};
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string;
  last: string;
};
  data: ReadonlyArray<{
  type: string;
  id: string;
  attributes: {
  event: {
  id: string;
  name: string;
  org: string;
  partition: string;
  orgName: string | null;
  data: {
  type: string;
  id: string;
  attributes: {
  name: string | null;
  displayName: string;
  displayColor: string;
  displayIcon: string;
  externalId: string | null;
  externalIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sharedExternalIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  signedUpAt: string | null;
  avatarUrl: string | null;
  username: string | null;
  emails: ReadonlyArray<{
  type: string;
  verified: boolean;
  email: string;
}>;
  sharedEmails: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  phones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sharedPhones: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  smoochIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  whatsapps: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  facebookIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  instagramIds: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  socials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sharedSocials: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  urls: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  locations: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  activeUsers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  watchers: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  recentLocation: {
  updatedAt: string;
};
  locale: string | null;
  timeZone: string | null;
  birthdayAt: string | null;
  gender: string | null;
  presence: string | null;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
  lastSeenAt: string | null;
  lastActivityAt: string;
  lastCustomerActivityAt: string;
  deleted: boolean;
  deletedAt: string | null;
  importedAt: string | null;
  lastMessageIn: {
  sentiment: string | null;
  channel: string;
  sentAt: string;
};
  lastMessageOut: string | null;
  lastMessageUnrespondedTo: {
  sentAt: string;
  channel: string;
};
  lastMessageAt: string;
  lastConversation: {
  channels: ReadonlyArray<string>;
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  id: string;
};
  conversationCounts: {
  done: number;
  open: number;
  snoozed: number;
  all: number;
};
  preview: {
  subject: string;
  text: string;
  type: string;
  previewAt: string;
};
  tags: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  sentiment: string | null;
  custom: {
  someFieldNum: string | null;
  someFieldStr: string | null;
  testNum: string | null;
  textStr: string | null;
};
  progressiveStatus: string;
  verified: boolean;
  rev: number;
  recentItems: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  defaultLang: string | null;
  satisfactionLevel: {
  firstSatisfaction: {
  sentByTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  lastSatisfaction: {
  sentByTeams: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
};
  roleGroupVersions: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  accessOverride: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  companyName: string | null;
  firstName: string | null;
  lastName: string | null;
};
  relationships: {
  messages: {
  links: {
  self: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  modifiedBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  deletedBy: string | null;
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  leads: {
  links: {
  self: string;
};
  meta: {
  kobject: boolean;
};
};
  hats: {
  links: {
  self: string;
};
  meta: {
  kobject: boolean;
};
};
};
  links: {
  self: string;
};
};
  createdAt: string;
  changes: {
  attributes: {
  activeUsers: {
  op: string;
  before: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  after: ReadonlyArray<string>;
};
  updatedAt: {
  op: string;
  before: string;
  after: string;
};
  rev: {
  op: string;
  before: number;
  after: number;
};
};
  relationships: {};
};
};
  error: string;
  meta: {
  context: string;
  attempt: number;
  retry: boolean;
  workflowRev: number;
};
  status: string;
  updatedAt: string;
  createdAt: string;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  workflowRunner: {
  data: {
  type: string;
  id: string;
};
};
  workflow: {
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
}>;
};

export type KustomerFullApiSchemaGetAllVariablesforSpecificWorkflowIDResponseSuccess = {
  meta: {
  pageSize: number;
  page: number;
};
  data: ReadonlyArray<{
  id: string;
  type: string;
  attributes: {
  maskedValue: string;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  workflow: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
}>;
  links: {
  self: string;
  first: string;
  prev: string | null;
  next: string | null;
};
};

export type KustomerFullApiSchemaCreateWorkflowVariableforSpecificWorkflowIDRequest = {
  name: string;
  value: string;
  type: "string";
};

export type KustomerFullApiSchemaCreateWorkflowVariableforSpecificWorkflowIDResponseSuccess = {
  data: {
  id: string;
  type: string;
  attributes: {
  maskedValue: string;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  modifiedAt: string;
};
  relationships: {
  org: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  createdBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  modifiedBy: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
  workflow: {
  data: {
  type: string;
  id: string;
};
  links: {
  self: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaAutomation = {
  id?: string;
  type?: string;
  attributes?: {
  name?: string;
  machineUserId?: string;
  description?: string;
  version?: number;
  type?: "customer" | "rep" | "conversational" | "workflow";
  createdAt?: string;
  updatedAt?: string;
  modifiedAt?: string;
};
  relationships?: {
  org?: KustomerFullApiSchemaOrgRelationship;
  user?: KustomerFullApiSchemaUserRelationship;
  modifiedBy?: KustomerFullApiSchemaUserRelationship;
};
  links?: KustomerFullApiSchemaResourceLinks;
};

export type KustomerFullApiSchemaEvaluation = {
  id?: string;
  type?: string;
  attributes?: {
  orgId?: string;
  name?: string;
  automationId?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
};
  relationships?: {
  org?: KustomerFullApiSchemaOrgRelationship;
};
  links?: KustomerFullApiSchemaResourceLinks;
};

export type KustomerFullApiSchemaEvaluationRun = {
  id?: string;
  type?: string;
  attributes?: {
  orgId?: string;
  evaluationId?: string;
  status?: "pending" | "running" | "completed";
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  score?: number;
  scoreByTestCase?: {
  readonly [key: string]: number | undefined;
};
  durationInNanos?: number;
  runsPerTestCase?: number;
};
};

export type KustomerFullApiSchemaTestCaseResult = {
  id?: string;
  type?: string;
  attributes?: {
  orgId?: string;
  evaluationRunId?: string;
  testCaseId?: string;
  traceId?: string;
  input?: string;
  output?: string;
  outputMetadata?: {};
  error?: string;
  toolCalls?: ReadonlyArray<{
  id?: string;
  canonicalName?: string;
  toolType?: string;
  toolInput?: {};
  toolOutput?: {
  name?: string;
  result?: {};
  promptText?: string;
};
}>;
  status?: "pending" | "running" | "completed" | "error";
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  startedAt?: string;
  endedAt?: string;
  durationInNanos?: number;
  assertionResult?: {
  toolCallsResult?: ReadonlyArray<{
  toolId?: string;
  toolName?: string;
  toolType?: string;
  toolCalled?: boolean;
}>;
  inputResult?: {
  met?: boolean;
  explanation?: string;
  confidence?: number;
};
  assertionFailed?: boolean;
};
};
};

export type KustomerFullApiSchemaTestCase = {
  id?: string;
  type?: string;
  attributes?: {
  orgId?: string;
  name?: string;
  evaluationId?: string;
  resourceId?: string;
  resourceType?: "customer";
  toolCalls?: ReadonlyArray<{
  id?: string;
  name?: string;
  toolType?: string;
}>;
  input?: string;
  multiTurnData?: {
  sourceConversationId?: string;
  sourceEndMessageId?: string;
  conversationTitle?: string;
  conversationChannels?: ReadonlyArray<string>;
  conversationHistory?: ReadonlyArray<{}>;
};
  resumeNode?: string;
  expectedOutput?: string;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
};
  relationships?: {
  org?: KustomerFullApiSchemaOrgRelationship;
};
  links?: KustomerFullApiSchemaResourceLinks;
};

export type KustomerFullApiSchemaSummary = {
  id?: string;
  type?: string;
  attributes?: {
  resourceId?: string;
  resourceType?: "conversation" | "customer" | "kobject";
  text?: string;
  createdAt?: string;
  updatedAt?: string;
  lastSummarizedAt?: string;
};
  relationships?: {
  org?: {
  links?: {
  self?: string;
};
  data?: {
  type?: string;
  id?: string;
};
};
};
};

export type KustomerFullApiSchemaSettingsVolumeControlJson = {
  enabled?: boolean;
  mode?: "delayed" | "upfront";
  markDoneAfterTimeout?: boolean;
  useDynamicWaitMessage?: boolean;
  promptDelay?: number;
  upfrontWaitThreshold?: number;
  timeout?: number;
  followUpChannels?: ReadonlyArray<"email" | "sms" | "voice">;
  hideWaitOption?: boolean;
  customWaitMessage?: string | null;
};

export type KustomerFullApiSchemaSettingsDomainCriteriaJson = {
  and?: ReadonlyArray<{}>;
  or?: ReadonlyArray<{}>;
};

export type KustomerFullApiSchemaEmail = {
  type?: "home" | "work" | "other";
  email: string;
  verified?: boolean;
};

export type KustomerFullApiSchemaPhone = {
  type?: "mobile" | "home" | "work" | "fax" | "other";
  phone: string;
  verified?: boolean;
};

export type KustomerFullApiSchemaWhatsapp = {
  type?: "mobile";
  phone: string;
  verified?: boolean;
};

export type KustomerFullApiSchemaSocial = {
  type: "twitter" | "facebook" | "instagram" | "linkedin" | "pinterest";
  userid?: string;
  username: string;
  url?: string;
  verified?: boolean;
};

export type KustomerFullApiSchemaUrl = {
  type?: "website" | "blog" | "other";
  url: string;
};

export type KustomerFullApiSchemaDomain = {
  domain: string;
};

export type KustomerFullApiSchemaLocation = {
  type?: "home" | "work" | "other";
  name?: string | null;
  address?: string | null;
  address2?: string | null;
  address3?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  countryCode?: string | null;
  countryName?: string | null;
  regionCode?: string | null;
  regionName?: string | null;
  cityName?: string | null;
  zipCode?: string | null;
  areaCode?: string | null;
};

export type KustomerFullApiSchemaTags = ReadonlyArray<KustomerFullApiSchemaTagName>;

export type KustomerFullApiSchemaCustomAttrs = {};

export type KustomerFullApiSchemaLang = string | null;

export type KustomerFullApiSchemaConversationSatisfaction = {
  form?: string;
  formResponse?: string;
  createdAt: string;
  updatedAt?: string;
  status: "scheduled" | "offered" | "rated" | "commented" | "canceled" | "unresponded";
  scheduledFor?: string;
  firstAnswer?: string;
  sentAt?: string;
  score?: 0 | 1;
  rating?: number;
  channel?: "email" | "sms" | "chat" | "facebook" | "twitter-dm" | "twitter-tweet" | "voice" | "instagram" | "instagram-comment" | "whatsapp" | "form";
  sentBy?: string;
  sentByTeams?: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaTagName = string;

export type KustomerFullApiSchemaSentiment = {
  polarity: -1 | 0 | 1;
  confidence: number;
};

export type KustomerFullApiSchemaError = {
  status?: number;
  code?: string;
  title?: string;
  detail?: string;
  source?: {};
  meta?: {};
  links?: {};
};

export type KustomerFullApiSchemaAttachment = {
  _id: string;
  name: string;
  contentType: string;
  contentLength: number;
  sourceId?: string;
};

export type KustomerFullApiSchemaBulkConversationsCommonResponseParams = {
  data: {
  type: string;
  id: string;
  attributes: {
  ids: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
  context: string;
  status: string;
  v2: boolean;
  payload: {
  api: {
  data: ReadonlyArray<{
  id: string;
  status?: string;
  name?: string;
}>;
  path: string;
  user: {
  id: string;
  userType: string;
  roles: ReadonlyArray<string>;
  orgName: string;
  subject: string;
  org: string;
};
  requestId: string;
  service: string;
  method: string;
};
};
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};
  relationships: {
  org: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
  createdBy: {
  links: {
  self: string;
};
  data: {
  type: string;
  id: string;
};
};
};
  links: {
  self: string;
};
};
};

export type KustomerFullApiSchemaExternalId = {
  externalId: string;
  verified?: boolean;
};

export type KustomerFullApiSchemaFacebookId = {
  pageId: string;
  userId: string;
  name?: string;
};

export type KustomerFullApiSchemaInstagramId = {
  pageId: string;
  threadId: string;
  username: string;
  instagramId?: string;
};

export type KustomerFullApiSchemaCreateaDraftWhatsappParamsCommon = {
  channel: "whatsapp";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  sendAt?: string | null;
  source?: "bulk" | "satisfaction" | "biz-rules";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  payload?: {};
};

export type KustomerFullApiSchemaCreateaDraftWhatsappInteractiveMeta = {
  app: "whatsapp";
  meta: {
  interactive: ({
  type: "list";
  header?: {
  type: "text";
  text: string;
};
  body: {
  text: string;
};
  footer?: {
  text: string;
};
  action: {
  button: string;
  sections: ReadonlyArray<{
  title?: string;
  rows: ReadonlyArray<{
  id: string;
  title: string;
  description?: string;
}>;
}>;
};
} | {
  type: "button";
  header?: {
  type: "text";
  text: string;
};
  body: {
  text: string;
};
  footer?: {
  text: string;
};
  action: {
  buttons: ReadonlyArray<{
  type: "reply";
  reply: {
  id: string;
  title: string;
};
}>;
};
});
};
};

export type KustomerFullApiSchemaCreateaDraftWhatsappTemplateMeta = {
  app: "whatsapp";
  meta: {
  template: string;
  components?: {
  header?: ({
  type: "text";
  text: {
  readonly [key: string]: {
  type?: "text";
  text?: string;
} | undefined;
};
} | {
  type: "image" | "video" | "document";
  attachment: string;
});
  body?: {
  readonly [key: string]: {
  type?: "text";
  text?: string;
} | undefined;
};
  buttons?: ReadonlyArray<{
  index: number;
  sub_type: "url";
  readonly [key: string]: {
  type?: "text";
  text?: string;
} | number | "url" | undefined;
}>;
};
};
};

export type KustomerFullApiSchemaSearchRouting = {
  concurrencyLimit: number;
  timeout: number;
};

export type KustomerFullApiSchemaDraftEmail = {
  channel: "email";
  conversation?: string;
  app?: "gmail" | "postmark";
  customer?: string;
  auto?: boolean;
  scheduled?: boolean;
  sendAt?: string | null;
  source?: "bulk" | "satisfaction" | "biz-rules";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: (ReadonlyArray<{
  email: string;
  name?: string;
}> | {
  email: string;
  name?: string;
});
  from?: {
  email: string;
  name?: string;
};
  body?: string;
  htmlBody?: string;
  cc?: ReadonlyArray<{
  email: string;
  name?: string;
}>;
  bcc?: ReadonlyArray<{
  email: string;
  name?: string;
}>;
  subject?: string;
  replyTo?: string;
  headers?: ReadonlyArray<{
  name: string;
  value?: string;
}>;
  templateType?: "email-reply" | "email-autoresponse" | "email-satisfaction";
  template?: string | null;
  payload?: {};
};

export type KustomerFullApiSchemaDraftSms = {
  channel: "sms";
  app?: "twilio" | "zipwhip" | "messagebird";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  scheduled?: boolean;
  sendAt?: string | null;
  source?: "bulk" | "satisfaction" | "biz-rules";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
};

export type KustomerFullApiSchemaDraftWhatsapp = {
  channel: "whatsapp";
  app: "twilio_whatsapp" | "messagebird" | "whatsapp";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  scheduled?: boolean;
  sendAt?: string | null;
  source?: "bulk" | "satisfaction" | "biz-rules";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
};

export type KustomerFullApiSchemaDraftChat = {
  channel: "chat";
  app?: "chat" | "smooch";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  scheduled?: boolean;
  sendAt?: string | null;
  source?: "bulk" | "satisfaction" | "biz-rules";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
  responseButtons?: ReadonlyArray<{
  label: string;
  value: string;
}>;
  messageTemplate?: KustomerFullApiSchemaTemplateChat;
  attachments?: ReadonlyArray<string>;
};

export type KustomerFullApiSchemaDraftFacebook = {
  channel: "facebook";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  scheduled?: boolean;
  sendAt?: string | null;
  source?: "bulk" | "satisfaction" | "biz-rules";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
};

export type KustomerFullApiSchemaDraftTwitterTweet = {
  channel: "twitter-tweet";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  scheduled?: boolean;
  sendAt?: string;
  source?: "bulk" | "satisfaction" | "biz-rules";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
};

export type KustomerFullApiSchemaDraftTwitterDm = {
  channel: "twitter-dm";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  scheduled?: boolean;
  sendAt?: string;
  source?: "bulk" | "satisfaction" | "biz-rules";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
};

export type KustomerFullApiSchemaDraftNote = {
  channel: "note";
  conversation?: string;
  customer?: string;
  scheduled?: boolean;
  sendAt?: string | null;
  source?: "bulk" | "biz-rules";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  body?: string;
  payload?: {};
  userMentions?: ReadonlyArray<{
  user?: string;
  team?: string;
}>;
};

export type KustomerFullApiSchemaDraftInstagram = {
  channel: "instagram";
  conversation?: string;
  customer?: string;
  auto?: boolean;
  scheduled?: boolean;
  sendAt?: string | null;
  source?: "bulk" | "satisfaction" | "biz-rules";
  lang?: KustomerFullApiSchemaLang;
  shortcuts?: ReadonlyArray<string>;
  kbArticles?: ReadonlyArray<string>;
  to?: string;
  from?: string;
  body?: string;
  payload?: {};
};

export type KustomerFullApiSchemaKobjectResponseFirstDone = {
  time?: number;
  businessTime?: number;
  createdAt?: string;
  createdBy?: string;
  createdByTeam?: string;
  assignedTeam?: string;
  assignedUser?: string;
  commentCount?: number;
};

export type KustomerFullApiSchemaKobjectResponseLastDone = {
  time?: number;
  businessTime?: number;
  createdAt?: string;
  createdBy?: string;
  createdByTeam?: string;
  assignedTeam?: string;
  assignedUser?: string;
  commentCount?: number;
};

export type KustomerFullApiSchemaReaction = {
  subjectId: string;
  subjectType: "customer" | "user";
  name: "love";
  createdAt?: string;
};

export type KustomerFullApiSchemaNotificationSettingPreference = {
  web: "always" | "never";
  email: "always" | "loggedout" | "never";
};

export type KustomerFullApiSchemaAuthRole = ReadonlyArray<string>;

export type KustomerFullApiSchemaHourTuples = ReadonlyArray<ReadonlyArray<number>>;

export type KustomerFullApiSchemaTimezones = string;

export type KustomerFullApiSchemaConversationActions = {
  tags?: {
  operator?: "append" | "replace" | "remove";
  value?: ReadonlyArray<KustomerFullApiSchemaTagName2>;
};
  name?: {
  operator?: "replace" | "remove";
  value?: string;
};
  status?: {
  operator?: "replace" | "remove";
  value?: "open" | "done";
};
  subStatus?: {
  operator?: "replace" | "remove";
  value?: string;
};
  snooze?: {
  operator?: "replace";
  value?: string;
};
  queue?: {
  operator?: "replace";
  value?: ((KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue) | (KustomerFullApiSchemaJsonValue | KustomerFullApiSchemaJsonValue));
};
  assignedUsers?: {
  operator?: "append" | "replace" | "remove";
  value?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  assignedTeams?: {
  operator?: "append" | "replace" | "remove";
  value?: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  custom?: KustomerFullApiSchemaCustomAttrs2;
};

export type KustomerFullApiSchemaIdentity = {
  remember?: boolean;
  trackingId?: string;
  sessionId?: string;
  name?: string;
  company?: string;
  externalId?: string;
  username?: string;
  signedUpAt?: string;
  birthdayAt?: string;
  gender?: "m" | "f";
  locale?: string;
  timeZone?: string;
  email?: string;
  phone?: string;
  location?: {
  type?: "home" | "work" | "other";
  name?: string | null;
  address?: string | null;
  address2?: string | null;
  address3?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  countryCode?: string | null;
  countryName?: string | null;
  regionCode?: string | null;
  regionName?: string | null;
  cityName?: string | null;
  zipCode?: string | null;
  areaCode?: string | null;
};
  tags?: ReadonlyArray<string>;
  custom?: {};
};

export type KustomerFullApiSchemaEvent = {
  trackingId?: string;
  sessionId?: string;
  name: string;
  meta?: {};
};

export type KustomerFullApiSchemaArticleCategories = ReadonlyArray<{
  id: string;
}>;

export type KustomerFullApiSchemaTags2 = ReadonlyArray<KustomerFullApiSchemaTagName3>;

export type KustomerFullApiSchemaArticleKnowledgeBases = ReadonlyArray<{
  id: string;
  featured: boolean;
}>;

export type KustomerFullApiSchemaManifest = ReadonlyArray<{
  name: string;
  label?: string;
  description?: string;
  enabled?: boolean;
  link?: {
  label: string;
  learnMoreLink?: string;
  buttonText?: string;
  description?: string;
  value: string;
};
  variables: {};
}>;

export type KustomerFullApiSchemaWorkflowMeta = {};

export type KustomerFullApiSchemaWorkflowTriggerCallable = {
  id: string;
  eventName?: string;
  callable: boolean;
  schema: {};
  meta?: KustomerFullApiSchemaWorkflowMeta;
  transitions: KustomerFullApiSchemaWorkflowTransitions;
};

export type KustomerFullApiSchemaWorkflowTriggerEvent = {
  id: string;
  appVersion?: KustomerFullApiSchemaAppVersion;
  meta?: KustomerFullApiSchemaWorkflowMeta;
  eventName: string;
  transitions: KustomerFullApiSchemaWorkflowTransitions;
};

export type KustomerFullApiSchemaAppVersion = string;

export type KustomerFullApiSchemaWorkflowTransitions = ReadonlyArray<{
  meta?: KustomerFullApiSchemaWorkflowMeta;
  target: string;
  condition: {
  op: "and" | "or" | "exists" | "dne" | "true" | "false" | "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "lt-date" | "gt-date" | "contains" | "not-contains";
  values: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
}>;

export type KustomerFullApiSchemaWorkflowErrorCases = ReadonlyArray<{
  condition: {
  op: "and" | "or";
  values: ReadonlyArray<KustomerFullApiSchemaJsonValue>;
};
  errorAction: {
  type?: "continue" | "retry-workflow" | "retry-action" | "stop-processing";
};
}>;

export type KustomerFullApiSchemaOrgRelationship = {
  links?: {
  self?: string;
};
  data?: {
  type?: string;
  id?: string;
};
};

export type KustomerFullApiSchemaUserRelationship = {
  links?: {
  self?: string;
};
  data?: {
  type?: string;
  id?: string;
};
};

export type KustomerFullApiSchemaResourceLinks = {
  self?: string;
};

export type KustomerFullApiSchemaTemplateChat = (KustomerFullApiSchemaTemplateChatText | KustomerFullApiSchemaTemplateChatQuickReplies | KustomerFullApiSchemaTemplateChatDeflection | KustomerFullApiSchemaTemplateChatMll);

export type KustomerFullApiSchemaTagName2 = string;

export type KustomerFullApiSchemaCustomAttrs2 = {};

export type KustomerFullApiSchemaTagName3 = string;

export type KustomerFullApiSchemaTemplateChatText = {
  id?: string;
  templateType: "text";
  body: string;
};

export type KustomerFullApiSchemaTemplateChatQuickReplies = {
  id?: string;
  templateType: "quick_replies";
  body?: string;
  actions: ReadonlyArray<{
  displayText: string;
  valueType: "url" | "text";
  value: string;
}>;
};

export type KustomerFullApiSchemaTemplateChatDeflection = {
  id?: string;
  templateType: "deflection";
  body?: string;
  actions: ReadonlyArray<{
  displayText: string;
  valueType: "url" | "text";
  value: string;
}>;
  articles: ReadonlyArray<{
  id: string;
  type?: string;
  attributes?: {};
}>;
  followupText?: string;
};

export type KustomerFullApiSchemaTemplateChatMll = {
  id?: string;
  templateType: "mll";
  body?: string;
  actions: {
  tree: {};
};
};

export interface KustomerFullApiOperationQueryMap {
  "ListAIAutomations": {
  type?: "customer" | "rep" | "conversational" | "workflow";
  name?: string;
  triggers?: string;
  page?: number;
  pageSize?: number;
};
  "GetAIAutomation": {};
  "ListEvaluationsByAutomation": {
  page?: number;
  pageSize?: number;
};
  "ListEvaluationRuns": {
  evaluationIds?: ReadonlyArray<string>;
  page?: number;
  pageSize?: number;
};
  "GetEvaluationRun": {};
  "ListEvaluationTestCaseResults": {
  evaluationRunIds?: ReadonlyArray<string>;
  page?: number;
  pageSize?: number;
};
  "GetEvaluationTestCaseResult": {};
  "ListEvaluationTestCases": {
  evaluationIds?: ReadonlyArray<string>;
  page?: number;
  pageSize?: number;
};
  "CreateEvaluationTestCase": {};
  "DeleteEvaluationTestCase": {};
  "GetEvaluationTestCase": {};
  "UpdateEvaluationTestCase": {};
  "CreateEvaluation": {};
  "DeleteEvaluation": {};
  "GetEvaluation": {};
  "UpdateEvaluation": {};
  "RunEvaluation": {};
  "GetAISummaryByResourceId": {
  lang?: string;
};
  "BatchGetAISummaries": {
  resourceIds?: string;
  page?: number;
  pageSize?: number;
  lang?: string;
};
  "GetInstalledApps": {
  page?: number;
  pageSize?: number;
};
  "GetInstalledApps(BySpecificVersion)": {};
  "GetAvailableApps": {
  page?: number;
  pageSize?: number;
  fields?: string;
  system?: boolean;
};
  "GetAvailableApp": {};
  "CreateAttachment": {};
  "GetOutboundAttachmentByID": {};
  "UpsertAttachment": {};
  "GetAuditLogs": {
  count?: string;
  after?: string;
  before?: string;
  "filter[objectType]"?: "bill_subscription" | "business_rule" | "company" | "conversation" | "customer" | "message" | "search" | "shortcut" | "user" | "work_item" | "ip_rule" | "work_session" | "shopify_rest";
  "filter[objectId]"?: string;
  "filter[userId]"?: string;
  "filter[include]"?: string;
  "filter[start]"?: string;
  "filter[end]"?: string;
};
  "GetAuthCustomerSettings": {};
  "GetAuthRoles": {};
  "GetAuthSettings": {};
  "UpdateAuthSettings": {};
  "GetAuthTokens": {
  page?: number;
  pageSize?: number;
  userType?: "user" | "machine" | "limited" | "app";
  filter?: string;
};
  "CreateToken": {};
  "DeleteAuthTokenbyID": {};
  "GetAuthTokenbyID": {};
  "DeleteCurrentAuthToken": {};
  "GetCurrentAuthToken": {};
  "GETBrands": {
  page?: number;
  pageSize?: number;
};
  "POSTBrands": {};
  "GETBrandbyID": {};
  "PATCHBrandResource": {};
  "GETDefaultBrand": {};
  "GetBulkOperationById": {
  page?: number;
  pageSize?: number;
};
  "GetBulkOperationBatches": {
  page?: number;
  sort?: "createdAt" | "-createdAt";
  status?: "queued" | "scheduled" | "complete";
  completed?: "true" | "false";
  limit?: number;
  pageSize?: number;
};
  "GetCards": {
  page?: number;
  pageSize?: number;
  context?: string;
};
  "DeleteaCard": {};
  "GetCard": {};
  "UpdateaCard": {};
  "CreateaCard": {};
  "InstallaCard": {};
  "QueueMetrics": {
  rangeFrom?: number;
};
  "GetChatSettings": {};
  "SetChatSettings": {};
  "GetCompanies": {
  page?: number;
  pageSize?: number;
  externalId?: string;
  filter?: string;
};
  "CreateaCompany": {};
  "GetCompanybyID": {};
  "UpdateCompanyAttributes": {
  replace?: boolean;
};
  "FindCompanyKObjects": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
  fromDate?: string;
  fields?: string;
};
  "BulkCreateCompanies": {};
  "BulkBatchUpdateCompanies": {
  ids?: string;
};
  "GetConversations": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
  populateLinkedConversations?: boolean;
};
  "CreateaConversation": {};
  "DeleteConversation": {};
  "GetConversation": {
  include?: string;
};
  "UpdateConversationAttributes": {
  rev?: number;
};
  "UpdateConversation": {
  replace?: boolean;
};
  "GetConversationAttachments": {
  page?: number;
  pageSize?: number;
};
  "GetConversationEvents": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
};
  "GetallForwardsbyConversation": {};
  "CreateaForwardbyConversation": {};
  "GetMessagesbyConversation": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
  channel?: "email" | "sms" | "chat" | "facebook" | "facebook-wallpost" | "voice" | "twitter-dm" | "twitter-tweet" | "instagram" | "instagram-comment" | "whatsapp" | "form" | "sendbird-chat" | "portal" | "tiktok-shop";
  include?: string;
};
  "CreateaMessagefromConversation": {};
  "GetNotesbyConversation": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
  include?: string;
};
  "CreateaNotewithinConversation": {};
  "RemoveTagsfromConversation": {};
  "AppendTagstoConversation": {};
  "Getconversationtimesbyconversationid": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
};
  "GetV2conversationtimesbyconversationid": {
  page?: number;
  pageSize?: number;
  sort?: "asc";
};
  "BulkDeleteConversations": {
  ids?: string;
};
  "BulkCreateConversations": {};
  "BulkBatchUpdateConversations": {
  replace?: boolean;
  ids?: string;
};
  "GetConversationbyExternalID": {};
  "Getconversationtimebyids": {};
  "GetCustomers": {
  filter?: {
  createdAt?: {
  gt?: string;
  gte?: string;
  lt?: string;
  lte?: string;
};
  updatedAt?: {
  gt?: string;
  gte?: string;
  lt?: string;
  lte?: string;
};
};
  sort?: "createdAt" | "-createdAt" | "updatedAt" | "-updatedAt";
  page?: number;
  pageSize?: number;
};
  "CreateaCustomer": {};
  "GetaCustomerEvent": {};
  "GetallEventsbyCustomerforSession": {};
  "DeleteCustomer": {};
  "GetCustomerbyID": {
  include?: string;
};
  "UpdateCustomerAttributes": {
  rev?: number;
};
  "UpdateCustomer": {
  replace?: boolean;
};
  "GetConversationsbyCustomer": {};
  "CreateaConversationforaCustomer": {};
  "GetallDraftsbyCustomer": {
  page?: number;
  pageSize?: number;
  include?: string;
};
  "CreateaDraftbyCustomer": {
  createConversation?: boolean;
};
  "GetallCustomerEvents": {};
  "FindCustomerKObjects": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
  fromDate?: string;
  fields?: string;
};
  "CreateCustomerKObject": {};
  "GetCustomerMergesbyCustomer": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
};
  "GetMessagesbyCustomer": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
  channel?: "email" | "sms" | "chat" | "facebook" | "facebook-wallpost" | "voice" | "twitter-dm" | "twitter-tweet" | "instagram" | "instagram-comment" | "whatsapp" | "form" | "sendbird-chat" | "portal" | "tiktok-shop";
  recentToOrFrom?: string;
  include?: string;
};
  "CreateaMessagebyCustomer": {};
  "GetNotesbyCustomer": {
  page?: number;
  pageSize?: number;
  include?: string;
};
  "GetCustomerSessions": {};
  "DeleteUnmaskingWindowbyCustomer": {};
  "CreateUnmaskingWindowbyCustomer": {};
  "CustomerArchiveSearch": {
  page?: number;
  pageSize?: number;
  idsOnly?: boolean;
  id?: string;
};
  "BulkDeleteCustomers": {
  ids?: string;
};
  "BulkCreateCustomers": {};
  "BulkBatchUpdateCustomers": {
  replace?: boolean;
  ids?: string;
};
  "GetCustomerbyEmail": {
  include?: string;
};
  "GetCustomerbyExternalID": {
  include?: string;
};
  "CreateaCustomerMerge": {};
  "GetaCustomerMerge": {};
  "GetCustomerbyPhone": {
  include?: string;
};
  "CustomerSearch": {
  page?: number;
  pageSize?: number;
  idsOnly?: boolean;
  id?: string;
  withIntelliAggs?: boolean;
  trackTotalHits?: boolean;
};
  "GetAllSearches": {
  page?: number;
  pageSize?: number;
  filter?: "all" | "search" | "autopilot";
  sort?: "autopilot";
  count?: boolean;
};
  "CreateSavedSearch": {};
  "DeleteSearchbyID": {};
  "GetSavedSearchbyID": {
  count?: boolean;
  filter?: "all" | "search" | "autopilot";
};
  "UpdateSearchbyID": {};
  "CreateSearchFolder": {};
  "DeleteSearchFolderbyID": {};
  "UpdateSearchFolderbyID": {};
  "GetAllPinnedSearches": {
  page?: number;
  pageSize?: number;
};
  "PinSearch": {};
  "DeletePinnedSearchbyID": {};
  "GetSearchPositions": {
  filter?: "all";
};
  "UpdateSearchPositions": {};
  "GetSchemaforSearches": {};
  "DeleteaDraft": {
  force?: boolean;
  deleteConversation?: boolean;
};
  "UpdateaDraft": {
  force?: boolean;
};
  "GetDraftAttachments": {};
  "CreateDraftAttachment": {};
  "DeleteDraftAttachment": {};
  "GetDraftAttachment": {};
  "GetaDraftForwardByID": {
  include?: string;
};
  "UpdateaDraftForward": {
  force?: boolean;
};
  "GetForwardAttachments": {};
  "CreateForwardAttachment": {};
  "DeleteForwardAttachment": {};
  "GetForwardAttachment": {};
  "GetEmailHooks": {
  page?: number;
  pageSize?: number;
};
  "CreateEmailHook": {};
  "GetanEmailHook": {};
  "UpdateEmailHook": {};
  "GetEmailHookTransactions": {
  page?: number;
  pageSize?: number;
};
  "GetFormHooks": {
  page?: number;
  pageSize?: number;
};
  "CreateFormHook": {};
  "CreateFormHookTransaction": {};
  "GetaFormHook": {};
  "UpdateFormHook": {};
  "GETFormHookTransactions": {
  page?: number;
  pageSize?: number;
};
  "CreateFormHookOrgTransaction": {};
  "GetWebHooks": {
  page?: number;
  pageSize?: number;
};
  "CreateWebHook": {};
  "CreateWebHookTransaction": {};
  "GetaWebHook": {};
  "UpdateWebHook": {};
  "GetWebHookTransactions": {
  page?: number;
  pageSize?: number;
};
  "GetKlasses": {
  page?: number;
  pageSize?: number;
  name?: string;
  status?: string;
};
  "CreateaKlass": {};
  "DeleteaKlass": {};
  "GetKlass": {};
  "UpdateaKlass": {};
  "GetKObjects": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
  fromDate?: string;
  fields?: string;
};
  "CreateKObject": {};
  "DeleteKObject": {};
  "GetKObject": {
  getS3DataUrls?: boolean;
};
  "UpdateKObject": {
  replace?: boolean;
};
  "BulkDeleteKObjects": {};
  "BulkCreateKObjects": {};
  "BulkBatchUpdateKObjects": {};
  "GetKObjectByExternalID": {
  getS3DataUrls?: boolean;
};
  "GetKViews": {
  page?: number;
  pageSize?: number;
  appDisabled?: boolean;
};
  "GetKViewsbyResource": {
  page?: number;
  pageSize?: number;
  context?: string;
  enabled?: boolean;
  appDisabled?: boolean;
};
  "UpdateKViewsOrder": {};
  "UpdateKView": {};
  "CreateMedia": {};
  "GetMediabyID": {
  redirect?: boolean;
};
  "UpdateMedia": {
  rev?: number;
};
  "GetMessages": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
  include?: string;
};
  "CreateMessage": {};
  "GetaMessage": {
  include?: string;
};
  "UpdateMessageAttributes": {};
  "UpdateaMessage": {
  replace?: boolean;
};
  "RedactMessage": {};
  "GetMessageAttachment": {};
  "BulkCreateMessages": {};
  "BulkBatchUpdateMessages": {
  ids?: string;
};
  "GetaMessagebyExternalID": {
  include?: string;
};
  "GetCustomAttributeMetadata": {
  page?: number;
  pageSize?: number;
  translate?: "false";
  include?: string;
};
  "UpdateCustomAttributeMetadata": {
  translate?: "false";
};
  "GetNotesforOrg": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
};
  "CreateNote": {};
  "DeleteNotebyID": {};
  "GetNotebyID": {
  include?: string;
};
  "UpdateNoteAttributes": {};
  "UpdateNotebyID": {
  replace?: boolean;
};
  "BulkCreateNotes": {};
  "BulkBatchUpdateNotes": {
  ids?: string;
};
  "DeleteNotifications": {};
  "GetNotifications": {
  page?: number;
  pageSize?: number;
};
  "UpdateNotifications": {};
  "GetNotificationsLogsSettings": {};
  "UpdateNotificationsLogsSettings": {};
  "GetCurrentUserNotificationSettings": {};
  "UpdateCurrentUserNotificationSettings": {};
  "ListOutboundWebhooks": {
  appDisabled?: boolean;
  filter?: {};
  from?: string;
};
  "CreateOutboundWebhook": {};
  "DeleteOutboundWebhook": {};
  "GetOutboundWebhook": {};
  "UpdateOutboundWebhook": {};
  "ListTransactionsForWebhook": {};
  "ListSubscribableEvents": {};
  "ListTransactions": {};
  "GetOutboundAccounts": {};
  "GetPublicAuthSettings": {};
  "GetArticles(Public)": {
  page?: number;
  pageSize?: number;
  lang?: string;
  knowledgeBaseId?: string;
};
  "SearchArticles(Public)": {
  term?: string;
  lang?: string;
  index?: string;
  page?: number;
  pageSize?: number;
  knowledgeBaseId?: string;
};
  "GetCategories(Public)": {
  page?: number;
  pageSize?: number;
  includeRoot?: boolean;
  lang?: string;
};
  "GetCategorybyID(Public)": {
  includeChildren?: boolean;
  childrenLimit?: number;
  lang?: string;
};
  "GetFormbyID(Public)": {
  include?: string;
  lang?: string;
  preview?: boolean;
};
  "GetThemebyID(Public)": {
  include?: string;
  status?: "draft" | "published";
  revisionId?: string;
};
  "GetThemeFiles(Public)": {
  page?: number;
  pageSize?: number;
  include?: string;
  status?: "draft" | "published";
  revisionId?: string;
  lang?: string;
};
  "GetActiveTheme(Public)": {
  include?: string;
};
  "GetAllRoleGroups": {
  page?: number;
  pageSize?: number;
};
  "CreateaRoleGroup": {};
  "DeleteaRoleGroup": {};
  "GetARoleGroupByID": {};
  "UpdateaRoleGroup": {};
  "GetWorkItemsbyConversation": {
  page?: number;
  pageSize?: number;
  status?: "ivr" | "queued" | "routed" | "assigned" | "wrap-up" | "!wrap-up" | "completed";
};
  "GetQueueRules": {
  enabled?: boolean;
};
  "CreateQueueRule": {};
  "GetQueueCriteria": {};
  "DeleteQueueRule": {};
  "GetQueueRule": {};
  "UpdateQueueRule": {};
  "UpdateQueueRuleOrder": {};
  "GetQueues": {
  page?: number;
  pageSize?: number;
  system?: boolean;
  key?: string;
  all?: boolean;
};
  "CreateQueue": {};
  "GetQueue": {};
  "UpdateQueue": {};
  "GetWorkItemsinaqueue": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
  status?: "ivr" | "queued" | "routed" | "assigned" | "wrap-up" | "!wrap-up" | "completed";
};
  "GetNextWorkItemsinaQueue": {};
  "GetWorkSessionsbyQueueID": {
  page?: number;
  pageSize?: number;
  routable?: boolean;
  statusType?: "available" | "unavailable" | "busy" | "offline";
  channel?: string;
  app?: string;
};
  "GetAllTeamRoutingSettings": {
  page?: number;
  pageSize?: number;
};
  "GetTeamRoutingSettings": {};
  "UpdateTeamRoutingSettings": {};
  "GetRoutingUserStatuses": {
  page?: number;
  pageSize?: number;
};
  "CreateRoutingUserStatus": {};
  "GetRoutingUserStatus": {};
  "UpdateRoutingUserStatus": {};
  "GetWorkSessionsbyUserID": {
  page?: number;
  pageSize?: number;
  statusType?: "available" | "unavailable" | "busy" | "offline";
};
  "GetCurrentWorkSessionbyUserID": {
  statusType?: "available" | "unavailable" | "busy" | "offline";
};
  "GetCurrentsUserTeamRoutingSettings": {
  page?: number;
  pageSize?: number;
};
  "GetWorkItems": {
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
};
  "CreateWorkItem": {};
  "GetWorkItem": {};
  "UpdateWorkItem": {};
  "GetWorkSessions": {
  user?: boolean;
  active?: boolean;
  statusType?: "available" | "unavailable" | "busy" | "offline";
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
};
  "GetWorkSessionbyID": {};
  "UpdateWorkSessionbyID": {};
  "GetWorkItemsByWorkSession": {};
  "GetCurrentWorkSession": {};
  "UpdateCurrentWorkSession": {};
  "GetWorkItemsinCurrentWorkSession": {};
  "GetSatisfaction": {
  page?: number;
  pageSize?: number;
};
  "GetSatisfactionResponse": {};
  "GetAllSchedules": {
  page?: number;
  pageSize?: number;
  enabled?: boolean;
  include?: "holidays";
};
  "CreateSchedule": {};
  "DeleteSchedulebyID": {};
  "GetSchedulebyID": {
  include?: "holidays";
};
  "UpdateSchedulebyID": {
  include?: "holidays";
};
  "GetDefaultSchedule": {
  include?: "holidays";
};
  "GetSettings": {
  app?: string;
  category?: string;
  fields?: string;
};
  "GetaSetting": {
  fields?: string;
};
  "UpdateaSetting": {};
  "GetAllShortcuts": {
  page?: number;
  pageSize?: number;
  translate?: "false";
  deleted?: "true" | "false" | "all";
  name?: string;
  appCreated?: boolean;
  tagId?: string;
  lang?: string;
};
  "CreateaShortcut": {};
  "DeleteaShortcut": {};
  "GetaShortcut": {
  translate?: "false";
  deleted?: "true" | "false" | "all";
  lang?: string;
};
  "UpdateaShortcut": {};
  "GetShortcutCategories": {
  page?: number;
  pageSize?: number;
  translate?: "false";
  lang?: string;
};
  "CreateaShortcutCategory": {};
  "DeleteaShortcutCategory": {};
  "GetaShortcutCategory": {};
  "UpdateaShortcutCategory": {};
  "GetSLAByID": {
  versions?: "active" | "all";
};
  "GetSnippets": {
  page?: number;
  pageSize?: number;
  lang?: string;
};
  "CreateSnippet": {};
  "GetSnippetsbyID": {
  fields?: string;
  lang?: string;
};
  "PatchSnippet": {};
  "UpdateSnippet": {};
  "GetAllSnoozes": {
  resource?: "conversation" | "kobject";
  parentId?: string;
  parentName?: string;
};
  "GetSnoozes": {
  page?: number;
  pageSize?: number;
  resource?: "conversation" | "kobject";
  klassId?: string;
};
  "CreateaSnooze": {};
  "CreateSnooze": {
  resource: "conversation" | "kobject";
};
  "DeleteSnooze": {};
  "GetSnoozebyID": {};
  "GetSnoozeById": {};
  "UpdateSnooze": {};
  "UpdateSnoozebyID": {};
  "GetSnoozesByKlass": {};
  "GetSpamSenders": {
  customer?: string;
  includeDeleted?: boolean;
};
  "UpsertSpamSender": {};
  "DeleteSpamSender": {};
  "GetSubStatuses": {
  page?: number;
  pageSize?: number;
  resource: "conversation" | "kobject";
  parentId?: string;
  parentName?: string;
};
  "CreateSubStatus": {};
  "DeleteSubStatus": {};
  "GetSubStatusById": {};
  "UpdateSubStatus": {};
  "GetTeams": {
  page?: number;
  pageSize?: number;
  fields?: string;
  deleted?: boolean;
  roleGroups?: string;
};
  "CreateTeam": {};
  "DeleteTeam": {};
  "GetTeambyID": {};
  "UpdateTeamAttributes": {};
  "UpdateTeambyID": {};
  "RemoveTeamMember": {};
  "AddTeamMember": {};
  "CreateaTrackingEvent": {};
  "CreateaTrackingIdentity": {};
  "CreateaTrackingIdentityEvent": {};
  "GetUsers": {
  page?: number;
  pageSize?: number;
  pending?: boolean;
  deleted?: boolean;
  userType?: "user" | "machine" | "limited";
  email?: string;
};
  "CreateInviteNewUser": {};
  "GetUserbyID": {};
  "UpdateUserbyID": {};
  "GetUserSettings": {
  app?: string;
  category?: string;
  fields?: string;
};
  "GetSpecificUserSetting": {
  fields?: string;
};
  "UpdateSpecificUserSetting": {};
  "GetaUsersTeams": {
  page?: number;
  pageSize?: number;
  include?: "role-groups";
  fields?: string;
  deleted?: boolean;
};
  "GetMultipleUsersbyIDs": {};
  "GetCurrentUser": {};
  "UpdateCurrentUser": {};
  "GetUserSettingsforCurrentUser": {
  app?: string;
  category?: string;
  fields?: string;
};
  "GetSpecificUserSettingforCurrentUser": {
  fields?: string;
};
  "UpdateSpecificUserSettingforCurrentUser": {};
  "ResetUsersPassword": {};
  "GetArticles": {
  page?: number;
  pageSize?: number;
  includeLang?: string;
  includeBody?: boolean;
};
  "CreateanArticle": {};
  "GetArticlebyID": {
  include?: string;
};
  "UpdateArticle": {};
  "GetRoutesbyArticleID": {
  page?: number;
  pageSize?: number;
};
  "Createarticleschedule": {};
  "DeleteArticleSchedule": {};
  "UpdateArticleSchedule": {};
  "DeleteVersionsofaLanguage": {};
  "GetArticleVersionsbyLanguage": {
  page?: number;
  pageSize?: number;
  withBody?: "none";
};
  "CreateaVersion": {};
  "DeleteaDraftVersion": {};
  "UpdateaDraftVersion": {};
  "UpdateLatestPublishedArticleVersion": {};
  "SearchArticles": {
  term?: string;
  lang?: string;
  scope?: string;
  index?: string;
  page?: number;
  pageSize?: number;
  searchFields?: string;
  knowledgeBaseId?: string;
};
  "GetCategories": {
  page?: number;
  pageSize?: number;
};
  "CreateaCategory": {};
  "GetCategorybyID": {};
  "UpdateCategory": {};
  "GetRoutesbyCategoryID": {
  page?: number;
  pageSize?: number;
};
  "CreateaCategoryRoute": {};
  "GetForms": {
  page?: number;
  pageSize?: number;
  include?: string;
};
  "CreateaForm": {};
  "DeleteForm": {};
  "GetFormbyID": {
  include?: string;
};
  "UpdateForm": {};
  "GetInternalCategories": {
  page?: number;
  pageSize?: number;
};
  "CreateanInternalCategory": {};
  "GetInternalCategorybyID": {};
  "CreateKnowledgeBase": {};
  "GetKnowledgeBasebyID": {
  include?: string;
  lang?: string;
};
  "UpdateKnowledgeBase": {};
  "CreateCustomDomain": {};
  "DeleteCustomDomain": {};
  "UpdateCustomDomain": {};
  "GetCustomDomains": {
  page?: number;
  pageSize?: number;
  certificateStatus?: string;
};
  "GetCustomDomainByID": {};
  "GetRoutebyURL(Public)": {
  url: string;
};
  "GetRoutes": {
  page?: number;
  pageSize?: number;
  url?: string;
};
  "CreateaRoute": {};
  "DeleteRoutebyID": {};
  "GetRoutebyID": {};
  "UpdateRoute": {};
  "GetArticleVersionbyID": {
  include?: "article";
};
  "GetTags": {
  page?: number;
  pageSize?: number;
  name?: string;
};
  "CreateTag": {};
  "GetTagsbyID": {
  page?: number;
  pageSize?: number;
};
  "UpdateTag": {};
  "GetTemplates": {
  page?: number;
  pageSize?: number;
};
  "GetTemplatesbyID": {};
  "GetThemes": {};
  "CreateaTheme": {};
  "GetThemesbyID": {
  include?: string;
};
  "GetThemeRevisions": {};
  "GetThemeRevisionbyID": {
  include?: string;
};
  "GetThemeFilesbyRevision": {
  page?: number;
  pageSize?: number;
  include?: string;
};
  "CreateRevisionThemeFile": {};
  "DeleteRevisionThemeFile": {};
  "GetThemeFilebyRevision": {};
  "UpdateRevisionThemeFile": {};
  "DeleteThemeDraftRevision": {};
  "CreateThemeDraftRevision": {};
  "UpdateThemeDraftRevision": {};
  "DeleteWorkflowVariable": {};
  "GetWorkflowVariable": {};
  "UpdateWorkflowVariable": {};
  "GetWorkflows": {
  page?: number;
  pageSize?: number;
  enabled?: boolean;
  eventName?: string;
  callable?: boolean;
};
  "CreateWorkflow": {};
  "GetWorkflow": {};
  "UpdateWorkflow": {};
  "GetProcessesbyWorkflow": {
  createdAtFrom?: string;
  createdAtTo?: string;
  page?: number;
  pageSize?: number;
  sort?: "asc" | "desc";
};
  "GetAllVariablesforSpecificWorkflowID": {
  page?: number;
  pageSize?: number;
};
  "CreateWorkflowVariableforSpecificWorkflowID": {};
}

export interface KustomerFullApiOperationQueryRequiredMap {
  "ListAIAutomations": false;
  "GetAIAutomation": false;
  "ListEvaluationsByAutomation": false;
  "ListEvaluationRuns": false;
  "GetEvaluationRun": false;
  "ListEvaluationTestCaseResults": false;
  "GetEvaluationTestCaseResult": false;
  "ListEvaluationTestCases": false;
  "CreateEvaluationTestCase": false;
  "DeleteEvaluationTestCase": false;
  "GetEvaluationTestCase": false;
  "UpdateEvaluationTestCase": false;
  "CreateEvaluation": false;
  "DeleteEvaluation": false;
  "GetEvaluation": false;
  "UpdateEvaluation": false;
  "RunEvaluation": false;
  "GetAISummaryByResourceId": false;
  "BatchGetAISummaries": false;
  "GetInstalledApps": false;
  "GetInstalledApps(BySpecificVersion)": false;
  "GetAvailableApps": false;
  "GetAvailableApp": false;
  "CreateAttachment": false;
  "GetOutboundAttachmentByID": false;
  "UpsertAttachment": false;
  "GetAuditLogs": false;
  "GetAuthCustomerSettings": false;
  "GetAuthRoles": false;
  "GetAuthSettings": false;
  "UpdateAuthSettings": false;
  "GetAuthTokens": false;
  "CreateToken": false;
  "DeleteAuthTokenbyID": false;
  "GetAuthTokenbyID": false;
  "DeleteCurrentAuthToken": false;
  "GetCurrentAuthToken": false;
  "GETBrands": false;
  "POSTBrands": false;
  "GETBrandbyID": false;
  "PATCHBrandResource": false;
  "GETDefaultBrand": false;
  "GetBulkOperationById": false;
  "GetBulkOperationBatches": false;
  "GetCards": false;
  "DeleteaCard": false;
  "GetCard": false;
  "UpdateaCard": false;
  "CreateaCard": false;
  "InstallaCard": false;
  "QueueMetrics": false;
  "GetChatSettings": false;
  "SetChatSettings": false;
  "GetCompanies": false;
  "CreateaCompany": false;
  "GetCompanybyID": false;
  "UpdateCompanyAttributes": false;
  "FindCompanyKObjects": false;
  "BulkCreateCompanies": false;
  "BulkBatchUpdateCompanies": false;
  "GetConversations": false;
  "CreateaConversation": false;
  "DeleteConversation": false;
  "GetConversation": false;
  "UpdateConversationAttributes": false;
  "UpdateConversation": false;
  "GetConversationAttachments": false;
  "GetConversationEvents": false;
  "GetallForwardsbyConversation": false;
  "CreateaForwardbyConversation": false;
  "GetMessagesbyConversation": false;
  "CreateaMessagefromConversation": false;
  "GetNotesbyConversation": false;
  "CreateaNotewithinConversation": false;
  "RemoveTagsfromConversation": false;
  "AppendTagstoConversation": false;
  "Getconversationtimesbyconversationid": false;
  "GetV2conversationtimesbyconversationid": false;
  "BulkDeleteConversations": false;
  "BulkCreateConversations": false;
  "BulkBatchUpdateConversations": false;
  "GetConversationbyExternalID": false;
  "Getconversationtimebyids": false;
  "GetCustomers": false;
  "CreateaCustomer": false;
  "GetaCustomerEvent": false;
  "GetallEventsbyCustomerforSession": false;
  "DeleteCustomer": false;
  "GetCustomerbyID": false;
  "UpdateCustomerAttributes": false;
  "UpdateCustomer": false;
  "GetConversationsbyCustomer": false;
  "CreateaConversationforaCustomer": false;
  "GetallDraftsbyCustomer": false;
  "CreateaDraftbyCustomer": false;
  "GetallCustomerEvents": false;
  "FindCustomerKObjects": false;
  "CreateCustomerKObject": false;
  "GetCustomerMergesbyCustomer": false;
  "GetMessagesbyCustomer": false;
  "CreateaMessagebyCustomer": false;
  "GetNotesbyCustomer": false;
  "GetCustomerSessions": false;
  "DeleteUnmaskingWindowbyCustomer": false;
  "CreateUnmaskingWindowbyCustomer": false;
  "CustomerArchiveSearch": false;
  "BulkDeleteCustomers": false;
  "BulkCreateCustomers": false;
  "BulkBatchUpdateCustomers": false;
  "GetCustomerbyEmail": false;
  "GetCustomerbyExternalID": false;
  "CreateaCustomerMerge": false;
  "GetaCustomerMerge": false;
  "GetCustomerbyPhone": false;
  "CustomerSearch": false;
  "GetAllSearches": false;
  "CreateSavedSearch": false;
  "DeleteSearchbyID": false;
  "GetSavedSearchbyID": false;
  "UpdateSearchbyID": false;
  "CreateSearchFolder": false;
  "DeleteSearchFolderbyID": false;
  "UpdateSearchFolderbyID": false;
  "GetAllPinnedSearches": false;
  "PinSearch": false;
  "DeletePinnedSearchbyID": false;
  "GetSearchPositions": false;
  "UpdateSearchPositions": false;
  "GetSchemaforSearches": false;
  "DeleteaDraft": false;
  "UpdateaDraft": false;
  "GetDraftAttachments": false;
  "CreateDraftAttachment": false;
  "DeleteDraftAttachment": false;
  "GetDraftAttachment": false;
  "GetaDraftForwardByID": false;
  "UpdateaDraftForward": false;
  "GetForwardAttachments": false;
  "CreateForwardAttachment": false;
  "DeleteForwardAttachment": false;
  "GetForwardAttachment": false;
  "GetEmailHooks": false;
  "CreateEmailHook": false;
  "GetanEmailHook": false;
  "UpdateEmailHook": false;
  "GetEmailHookTransactions": false;
  "GetFormHooks": false;
  "CreateFormHook": false;
  "CreateFormHookTransaction": false;
  "GetaFormHook": false;
  "UpdateFormHook": false;
  "GETFormHookTransactions": false;
  "CreateFormHookOrgTransaction": false;
  "GetWebHooks": false;
  "CreateWebHook": false;
  "CreateWebHookTransaction": false;
  "GetaWebHook": false;
  "UpdateWebHook": false;
  "GetWebHookTransactions": false;
  "GetKlasses": false;
  "CreateaKlass": false;
  "DeleteaKlass": false;
  "GetKlass": false;
  "UpdateaKlass": false;
  "GetKObjects": false;
  "CreateKObject": false;
  "DeleteKObject": false;
  "GetKObject": false;
  "UpdateKObject": false;
  "BulkDeleteKObjects": false;
  "BulkCreateKObjects": false;
  "BulkBatchUpdateKObjects": false;
  "GetKObjectByExternalID": false;
  "GetKViews": false;
  "GetKViewsbyResource": false;
  "UpdateKViewsOrder": false;
  "UpdateKView": false;
  "CreateMedia": false;
  "GetMediabyID": false;
  "UpdateMedia": false;
  "GetMessages": false;
  "CreateMessage": false;
  "GetaMessage": false;
  "UpdateMessageAttributes": false;
  "UpdateaMessage": false;
  "RedactMessage": false;
  "GetMessageAttachment": false;
  "BulkCreateMessages": false;
  "BulkBatchUpdateMessages": false;
  "GetaMessagebyExternalID": false;
  "GetCustomAttributeMetadata": false;
  "UpdateCustomAttributeMetadata": false;
  "GetNotesforOrg": false;
  "CreateNote": false;
  "DeleteNotebyID": false;
  "GetNotebyID": false;
  "UpdateNoteAttributes": false;
  "UpdateNotebyID": false;
  "BulkCreateNotes": false;
  "BulkBatchUpdateNotes": false;
  "DeleteNotifications": false;
  "GetNotifications": false;
  "UpdateNotifications": false;
  "GetNotificationsLogsSettings": false;
  "UpdateNotificationsLogsSettings": false;
  "GetCurrentUserNotificationSettings": false;
  "UpdateCurrentUserNotificationSettings": false;
  "ListOutboundWebhooks": false;
  "CreateOutboundWebhook": false;
  "DeleteOutboundWebhook": false;
  "GetOutboundWebhook": false;
  "UpdateOutboundWebhook": false;
  "ListTransactionsForWebhook": false;
  "ListSubscribableEvents": false;
  "ListTransactions": false;
  "GetOutboundAccounts": false;
  "GetPublicAuthSettings": false;
  "GetArticles(Public)": false;
  "SearchArticles(Public)": false;
  "GetCategories(Public)": false;
  "GetCategorybyID(Public)": false;
  "GetFormbyID(Public)": false;
  "GetThemebyID(Public)": false;
  "GetThemeFiles(Public)": false;
  "GetActiveTheme(Public)": false;
  "GetAllRoleGroups": false;
  "CreateaRoleGroup": false;
  "DeleteaRoleGroup": false;
  "GetARoleGroupByID": false;
  "UpdateaRoleGroup": false;
  "GetWorkItemsbyConversation": false;
  "GetQueueRules": false;
  "CreateQueueRule": false;
  "GetQueueCriteria": false;
  "DeleteQueueRule": false;
  "GetQueueRule": false;
  "UpdateQueueRule": false;
  "UpdateQueueRuleOrder": false;
  "GetQueues": false;
  "CreateQueue": false;
  "GetQueue": false;
  "UpdateQueue": false;
  "GetWorkItemsinaqueue": false;
  "GetNextWorkItemsinaQueue": false;
  "GetWorkSessionsbyQueueID": false;
  "GetAllTeamRoutingSettings": false;
  "GetTeamRoutingSettings": false;
  "UpdateTeamRoutingSettings": false;
  "GetRoutingUserStatuses": false;
  "CreateRoutingUserStatus": false;
  "GetRoutingUserStatus": false;
  "UpdateRoutingUserStatus": false;
  "GetWorkSessionsbyUserID": false;
  "GetCurrentWorkSessionbyUserID": false;
  "GetCurrentsUserTeamRoutingSettings": false;
  "GetWorkItems": false;
  "CreateWorkItem": false;
  "GetWorkItem": false;
  "UpdateWorkItem": false;
  "GetWorkSessions": false;
  "GetWorkSessionbyID": false;
  "UpdateWorkSessionbyID": false;
  "GetWorkItemsByWorkSession": false;
  "GetCurrentWorkSession": false;
  "UpdateCurrentWorkSession": false;
  "GetWorkItemsinCurrentWorkSession": false;
  "GetSatisfaction": false;
  "GetSatisfactionResponse": false;
  "GetAllSchedules": false;
  "CreateSchedule": false;
  "DeleteSchedulebyID": false;
  "GetSchedulebyID": false;
  "UpdateSchedulebyID": false;
  "GetDefaultSchedule": false;
  "GetSettings": false;
  "GetaSetting": false;
  "UpdateaSetting": false;
  "GetAllShortcuts": false;
  "CreateaShortcut": false;
  "DeleteaShortcut": false;
  "GetaShortcut": false;
  "UpdateaShortcut": false;
  "GetShortcutCategories": false;
  "CreateaShortcutCategory": false;
  "DeleteaShortcutCategory": false;
  "GetaShortcutCategory": false;
  "UpdateaShortcutCategory": false;
  "GetSLAByID": false;
  "GetSnippets": false;
  "CreateSnippet": false;
  "GetSnippetsbyID": false;
  "PatchSnippet": false;
  "UpdateSnippet": false;
  "GetAllSnoozes": false;
  "GetSnoozes": false;
  "CreateaSnooze": false;
  "CreateSnooze": true;
  "DeleteSnooze": false;
  "GetSnoozebyID": false;
  "GetSnoozeById": false;
  "UpdateSnooze": false;
  "UpdateSnoozebyID": false;
  "GetSnoozesByKlass": false;
  "GetSpamSenders": false;
  "UpsertSpamSender": false;
  "DeleteSpamSender": false;
  "GetSubStatuses": true;
  "CreateSubStatus": false;
  "DeleteSubStatus": false;
  "GetSubStatusById": false;
  "UpdateSubStatus": false;
  "GetTeams": false;
  "CreateTeam": false;
  "DeleteTeam": false;
  "GetTeambyID": false;
  "UpdateTeamAttributes": false;
  "UpdateTeambyID": false;
  "RemoveTeamMember": false;
  "AddTeamMember": false;
  "CreateaTrackingEvent": false;
  "CreateaTrackingIdentity": false;
  "CreateaTrackingIdentityEvent": false;
  "GetUsers": false;
  "CreateInviteNewUser": false;
  "GetUserbyID": false;
  "UpdateUserbyID": false;
  "GetUserSettings": false;
  "GetSpecificUserSetting": false;
  "UpdateSpecificUserSetting": false;
  "GetaUsersTeams": false;
  "GetMultipleUsersbyIDs": false;
  "GetCurrentUser": false;
  "UpdateCurrentUser": false;
  "GetUserSettingsforCurrentUser": false;
  "GetSpecificUserSettingforCurrentUser": false;
  "UpdateSpecificUserSettingforCurrentUser": false;
  "ResetUsersPassword": false;
  "GetArticles": false;
  "CreateanArticle": false;
  "GetArticlebyID": false;
  "UpdateArticle": false;
  "GetRoutesbyArticleID": false;
  "Createarticleschedule": false;
  "DeleteArticleSchedule": false;
  "UpdateArticleSchedule": false;
  "DeleteVersionsofaLanguage": false;
  "GetArticleVersionsbyLanguage": false;
  "CreateaVersion": false;
  "DeleteaDraftVersion": false;
  "UpdateaDraftVersion": false;
  "UpdateLatestPublishedArticleVersion": false;
  "SearchArticles": false;
  "GetCategories": false;
  "CreateaCategory": false;
  "GetCategorybyID": false;
  "UpdateCategory": false;
  "GetRoutesbyCategoryID": false;
  "CreateaCategoryRoute": false;
  "GetForms": false;
  "CreateaForm": false;
  "DeleteForm": false;
  "GetFormbyID": false;
  "UpdateForm": false;
  "GetInternalCategories": false;
  "CreateanInternalCategory": false;
  "GetInternalCategorybyID": false;
  "CreateKnowledgeBase": false;
  "GetKnowledgeBasebyID": false;
  "UpdateKnowledgeBase": false;
  "CreateCustomDomain": false;
  "DeleteCustomDomain": false;
  "UpdateCustomDomain": false;
  "GetCustomDomains": false;
  "GetCustomDomainByID": false;
  "GetRoutebyURL(Public)": true;
  "GetRoutes": false;
  "CreateaRoute": false;
  "DeleteRoutebyID": false;
  "GetRoutebyID": false;
  "UpdateRoute": false;
  "GetArticleVersionbyID": false;
  "GetTags": false;
  "CreateTag": false;
  "GetTagsbyID": false;
  "UpdateTag": false;
  "GetTemplates": false;
  "GetTemplatesbyID": false;
  "GetThemes": false;
  "CreateaTheme": false;
  "GetThemesbyID": false;
  "GetThemeRevisions": false;
  "GetThemeRevisionbyID": false;
  "GetThemeFilesbyRevision": false;
  "CreateRevisionThemeFile": false;
  "DeleteRevisionThemeFile": false;
  "GetThemeFilebyRevision": false;
  "UpdateRevisionThemeFile": false;
  "DeleteThemeDraftRevision": false;
  "CreateThemeDraftRevision": false;
  "UpdateThemeDraftRevision": false;
  "DeleteWorkflowVariable": false;
  "GetWorkflowVariable": false;
  "UpdateWorkflowVariable": false;
  "GetWorkflows": false;
  "CreateWorkflow": false;
  "GetWorkflow": false;
  "UpdateWorkflow": false;
  "GetProcessesbyWorkflow": false;
  "GetAllVariablesforSpecificWorkflowID": false;
  "CreateWorkflowVariableforSpecificWorkflowID": false;
}

export interface KustomerFullApiOperationRequestBodyMap {
  "ListAIAutomations": never;
  "GetAIAutomation": never;
  "ListEvaluationsByAutomation": never;
  "ListEvaluationRuns": never;
  "GetEvaluationRun": never;
  "ListEvaluationTestCaseResults": never;
  "GetEvaluationTestCaseResult": never;
  "ListEvaluationTestCases": never;
  "CreateEvaluationTestCase": KustomerFullApiSchemaCreateTestCaseRequest;
  "DeleteEvaluationTestCase": never;
  "GetEvaluationTestCase": never;
  "UpdateEvaluationTestCase": KustomerFullApiSchemaUpdateTestCaseRequest;
  "CreateEvaluation": KustomerFullApiSchemaCreateEvaluationRequest;
  "DeleteEvaluation": never;
  "GetEvaluation": never;
  "UpdateEvaluation": KustomerFullApiSchemaUpdateEvaluationRequest;
  "RunEvaluation": KustomerFullApiSchemaRunEvaluationRequest;
  "GetAISummaryByResourceId": never;
  "BatchGetAISummaries": never;
  "GetInstalledApps": never;
  "GetInstalledApps(BySpecificVersion)": never;
  "GetAvailableApps": never;
  "GetAvailableApp": never;
  "CreateAttachment": KustomerFullApiSchemaCreateAttachmentRequest;
  "GetOutboundAttachmentByID": never;
  "UpsertAttachment": KustomerFullApiSchemaUpsertAttachmentRequest;
  "GetAuditLogs": never;
  "GetAuthCustomerSettings": never;
  "GetAuthRoles": never;
  "GetAuthSettings": never;
  "UpdateAuthSettings": KustomerFullApiSchemaUpdateAuthSettingsRequest;
  "GetAuthTokens": never;
  "CreateToken": KustomerFullApiSchemaCreateTokenRequest;
  "DeleteAuthTokenbyID": never;
  "GetAuthTokenbyID": never;
  "DeleteCurrentAuthToken": never;
  "GetCurrentAuthToken": never;
  "GETBrands": never;
  "POSTBrands": {
  name: string;
  iconUrl: string;
};
  "GETBrandbyID": never;
  "PATCHBrandResource": {
  name: string;
  iconUrl: string;
};
  "GETDefaultBrand": never;
  "GetBulkOperationById": never;
  "GetBulkOperationBatches": never;
  "GetCards": never;
  "DeleteaCard": never;
  "GetCard": never;
  "UpdateaCard": KustomerFullApiSchemaUpdateaCardRequest;
  "CreateaCard": KustomerFullApiSchemaCreateaCardRequest;
  "InstallaCard": KustomerFullApiSchemaInstallaCardRequest;
  "QueueMetrics": never;
  "GetChatSettings": never;
  "SetChatSettings": KustomerFullApiSchemaSetChatSettingsRequest;
  "GetCompanies": never;
  "CreateaCompany": KustomerFullApiSchemaCreateaCompanyRequest;
  "GetCompanybyID": never;
  "UpdateCompanyAttributes": KustomerFullApiSchemaUpdateCompanyAttributesRequest;
  "FindCompanyKObjects": never;
  "BulkCreateCompanies": KustomerFullApiSchemaBulkCreateCompaniesRequest;
  "BulkBatchUpdateCompanies": KustomerFullApiSchemaBulkBatchUpdateCompaniesRequest;
  "GetConversations": never;
  "CreateaConversation": KustomerFullApiSchemaCreateaConversationRequest;
  "DeleteConversation": never;
  "GetConversation": never;
  "UpdateConversationAttributes": KustomerFullApiSchemaUpdateConversationAttributesRequest;
  "UpdateConversation": KustomerFullApiSchemaUpdateConversationRequest;
  "GetConversationAttachments": never;
  "GetConversationEvents": never;
  "GetallForwardsbyConversation": never;
  "CreateaForwardbyConversation": KustomerFullApiSchemaCreateaForwardbyConversationRequest;
  "GetMessagesbyConversation": never;
  "CreateaMessagefromConversation": KustomerFullApiSchemaCreateaMessagefromConversationRequest;
  "GetNotesbyConversation": never;
  "CreateaNotewithinConversation": KustomerFullApiSchemaCreateaNotewithinConversationRequest;
  "RemoveTagsfromConversation": never;
  "AppendTagstoConversation": KustomerFullApiSchemaAppendTagstoConversationRequest;
  "Getconversationtimesbyconversationid": never;
  "GetV2conversationtimesbyconversationid": never;
  "BulkDeleteConversations": never;
  "BulkCreateConversations": KustomerFullApiSchemaBulkCreateConversationsRequest;
  "BulkBatchUpdateConversations": KustomerFullApiSchemaBulkBatchUpdateConversationsRequest;
  "GetConversationbyExternalID": never;
  "Getconversationtimebyids": never;
  "GetCustomers": never;
  "CreateaCustomer": KustomerFullApiSchemaCreateaCustomerRequest;
  "GetaCustomerEvent": never;
  "GetallEventsbyCustomerforSession": never;
  "DeleteCustomer": never;
  "GetCustomerbyID": never;
  "UpdateCustomerAttributes": KustomerFullApiSchemaUpdateCustomerAttributesRequest;
  "UpdateCustomer": KustomerFullApiSchemaUpdateCustomerRequest;
  "GetConversationsbyCustomer": never;
  "CreateaConversationforaCustomer": KustomerFullApiSchemaCreateaConversationforaCustomerRequest;
  "GetallDraftsbyCustomer": never;
  "CreateaDraftbyCustomer": KustomerFullApiSchemaCreateaDraftbyCustomerRequest;
  "GetallCustomerEvents": never;
  "FindCustomerKObjects": never;
  "CreateCustomerKObject": KustomerFullApiSchemaCreateCustomerKObjectRequest;
  "GetCustomerMergesbyCustomer": never;
  "GetMessagesbyCustomer": never;
  "CreateaMessagebyCustomer": KustomerFullApiSchemaCreateaMessagebyCustomerRequest;
  "GetNotesbyCustomer": never;
  "GetCustomerSessions": never;
  "DeleteUnmaskingWindowbyCustomer": never;
  "CreateUnmaskingWindowbyCustomer": never;
  "CustomerArchiveSearch": KustomerFullApiSchemaCustomerArchiveSearchRequest;
  "BulkDeleteCustomers": never;
  "BulkCreateCustomers": KustomerFullApiSchemaBulkCreateCustomersRequest;
  "BulkBatchUpdateCustomers": KustomerFullApiSchemaBulkBatchUpdateCustomersRequest;
  "GetCustomerbyEmail": never;
  "GetCustomerbyExternalID": never;
  "CreateaCustomerMerge": KustomerFullApiSchemaCreateaCustomerMergeRequest;
  "GetaCustomerMerge": never;
  "GetCustomerbyPhone": never;
  "CustomerSearch": KustomerFullApiSchemaCustomerSearchRequest;
  "GetAllSearches": never;
  "CreateSavedSearch": KustomerFullApiSchemaCreateSavedSearchRequest;
  "DeleteSearchbyID": never;
  "GetSavedSearchbyID": never;
  "UpdateSearchbyID": KustomerFullApiSchemaUpdateSearchbyIDRequest;
  "CreateSearchFolder": KustomerFullApiSchemaCreateSearchFolderRequest;
  "DeleteSearchFolderbyID": never;
  "UpdateSearchFolderbyID": KustomerFullApiSchemaUpdateSearchFolderbyIDRequest;
  "GetAllPinnedSearches": never;
  "PinSearch": KustomerFullApiSchemaPinSearchRequest;
  "DeletePinnedSearchbyID": never;
  "GetSearchPositions": never;
  "UpdateSearchPositions": KustomerFullApiSchemaUpdateSearchPositionsRequest;
  "GetSchemaforSearches": never;
  "DeleteaDraft": never;
  "UpdateaDraft": KustomerFullApiSchemaUpdateaDraftRequest;
  "GetDraftAttachments": never;
  "CreateDraftAttachment": KustomerFullApiSchemaCreateDraftAttachmentRequest;
  "DeleteDraftAttachment": never;
  "GetDraftAttachment": never;
  "GetaDraftForwardByID": never;
  "UpdateaDraftForward": KustomerFullApiSchemaUpdateaDraftForwardRequest;
  "GetForwardAttachments": never;
  "CreateForwardAttachment": KustomerFullApiSchemaCreateForwardAttachmentRequest;
  "DeleteForwardAttachment": never;
  "GetForwardAttachment": never;
  "GetEmailHooks": never;
  "CreateEmailHook": KustomerFullApiSchemaCreateEmailHookRequest;
  "GetanEmailHook": never;
  "UpdateEmailHook": KustomerFullApiSchemaUpdateEmailHookRequest;
  "GetEmailHookTransactions": never;
  "GetFormHooks": never;
  "CreateFormHook": KustomerFullApiSchemaCreateFormHookRequest;
  "CreateFormHookTransaction": never;
  "GetaFormHook": never;
  "UpdateFormHook": KustomerFullApiSchemaUpdateFormHookRequest;
  "GETFormHookTransactions": never;
  "CreateFormHookOrgTransaction": never;
  "GetWebHooks": never;
  "CreateWebHook": KustomerFullApiSchemaCreateWebHookRequest;
  "CreateWebHookTransaction": never;
  "GetaWebHook": never;
  "UpdateWebHook": KustomerFullApiSchemaUpdateWebHookRequest;
  "GetWebHookTransactions": never;
  "GetKlasses": never;
  "CreateaKlass": KustomerFullApiSchemaCreateaKlassRequest;
  "DeleteaKlass": never;
  "GetKlass": never;
  "UpdateaKlass": KustomerFullApiSchemaUpdateaKlassRequest;
  "GetKObjects": never;
  "CreateKObject": KustomerFullApiSchemaCreateKObjectRequest;
  "DeleteKObject": never;
  "GetKObject": never;
  "UpdateKObject": KustomerFullApiSchemaUpdateKObjectRequest;
  "BulkDeleteKObjects": never;
  "BulkCreateKObjects": KustomerFullApiSchemaBulkCreateKObjectsRequest;
  "BulkBatchUpdateKObjects": KustomerFullApiSchemaBulkBatchUpdateKObjectsRequest;
  "GetKObjectByExternalID": never;
  "GetKViews": never;
  "GetKViewsbyResource": never;
  "UpdateKViewsOrder": KustomerFullApiSchemaUpdateKViewsOrderRequest;
  "UpdateKView": KustomerFullApiSchemaUpdateKViewRequest;
  "CreateMedia": KustomerFullApiSchemaCreateMediaRequest;
  "GetMediabyID": never;
  "UpdateMedia": KustomerFullApiSchemaUpdateMediaRequest;
  "GetMessages": never;
  "CreateMessage": KustomerFullApiSchemaCreateMessageRequest;
  "GetaMessage": never;
  "UpdateMessageAttributes": KustomerFullApiSchemaUpdateMessageAttributesRequest;
  "UpdateaMessage": KustomerFullApiSchemaUpdateaMessageRequest;
  "RedactMessage": KustomerFullApiSchemaRedactMessageRequest;
  "GetMessageAttachment": never;
  "BulkCreateMessages": KustomerFullApiSchemaBulkCreateMessagesRequest;
  "BulkBatchUpdateMessages": KustomerFullApiSchemaBulkBatchUpdateMessagesRequest;
  "GetaMessagebyExternalID": never;
  "GetCustomAttributeMetadata": never;
  "UpdateCustomAttributeMetadata": KustomerFullApiSchemaUpdateCustomAttributeMetadataRequest;
  "GetNotesforOrg": never;
  "CreateNote": KustomerFullApiSchemaCreateaNoteRequest;
  "DeleteNotebyID": never;
  "GetNotebyID": never;
  "UpdateNoteAttributes": KustomerFullApiSchemaUpdateNotebyIDpatchRequest;
  "UpdateNotebyID": KustomerFullApiSchemaUpdateNotebyIDRequest;
  "BulkCreateNotes": KustomerFullApiSchemaBulkCreateNotesRequest;
  "BulkBatchUpdateNotes": KustomerFullApiSchemaBulkBatchUpdateNotesRequest;
  "DeleteNotifications": never;
  "GetNotifications": never;
  "UpdateNotifications": KustomerFullApiSchemaUpdateNotificationsRequest;
  "GetNotificationsLogsSettings": never;
  "UpdateNotificationsLogsSettings": KustomerFullApiSchemaUpdateNotificationsLogsSettingsRequest;
  "GetCurrentUserNotificationSettings": never;
  "UpdateCurrentUserNotificationSettings": KustomerFullApiSchemaUpdateCurrentUserNotificationSettingsRequest;
  "ListOutboundWebhooks": never;
  "CreateOutboundWebhook": never;
  "DeleteOutboundWebhook": never;
  "GetOutboundWebhook": never;
  "UpdateOutboundWebhook": never;
  "ListTransactionsForWebhook": never;
  "ListSubscribableEvents": never;
  "ListTransactions": never;
  "GetOutboundAccounts": never;
  "GetPublicAuthSettings": never;
  "GetArticles(Public)": never;
  "SearchArticles(Public)": never;
  "GetCategories(Public)": never;
  "GetCategorybyID(Public)": never;
  "GetFormbyID(Public)": never;
  "GetThemebyID(Public)": never;
  "GetThemeFiles(Public)": never;
  "GetActiveTheme(Public)": never;
  "GetAllRoleGroups": never;
  "CreateaRoleGroup": KustomerFullApiSchemaCreateaRoleGroupRequest;
  "DeleteaRoleGroup": never;
  "GetARoleGroupByID": never;
  "UpdateaRoleGroup": KustomerFullApiSchemaUpdateaRoleGroupRequest;
  "GetWorkItemsbyConversation": never;
  "GetQueueRules": never;
  "CreateQueueRule": KustomerFullApiSchemaCreateQueueRuleRequest;
  "GetQueueCriteria": never;
  "DeleteQueueRule": never;
  "GetQueueRule": never;
  "UpdateQueueRule": KustomerFullApiSchemaUpdateQueueRuleRequest;
  "UpdateQueueRuleOrder": KustomerFullApiSchemaUpdateQueueRuleOrderRequest;
  "GetQueues": never;
  "CreateQueue": KustomerFullApiSchemaCreateQueueRequest;
  "GetQueue": never;
  "UpdateQueue": KustomerFullApiSchemaUpdateQueueRequest;
  "GetWorkItemsinaqueue": never;
  "GetNextWorkItemsinaQueue": never;
  "GetWorkSessionsbyQueueID": never;
  "GetAllTeamRoutingSettings": never;
  "GetTeamRoutingSettings": never;
  "UpdateTeamRoutingSettings": KustomerFullApiSchemaUpdateTeamRoutingSettingsRequest;
  "GetRoutingUserStatuses": never;
  "CreateRoutingUserStatus": KustomerFullApiSchemaCreateRoutingUserStatusRequest;
  "GetRoutingUserStatus": never;
  "UpdateRoutingUserStatus": KustomerFullApiSchemaUpdateRoutingUserStatusRequest;
  "GetWorkSessionsbyUserID": never;
  "GetCurrentWorkSessionbyUserID": never;
  "GetCurrentsUserTeamRoutingSettings": never;
  "GetWorkItems": never;
  "CreateWorkItem": KustomerFullApiSchemaCreateWorkItemRequest;
  "GetWorkItem": never;
  "UpdateWorkItem": KustomerFullApiSchemaUpdateWorkItemRequest;
  "GetWorkSessions": never;
  "GetWorkSessionbyID": never;
  "UpdateWorkSessionbyID": KustomerFullApiSchemaUpdateWorkSessionbyIDRequest;
  "GetWorkItemsByWorkSession": never;
  "GetCurrentWorkSession": never;
  "UpdateCurrentWorkSession": KustomerFullApiSchemaUpdateCurrentWorkSessionRequest;
  "GetWorkItemsinCurrentWorkSession": never;
  "GetSatisfaction": never;
  "GetSatisfactionResponse": never;
  "GetAllSchedules": never;
  "CreateSchedule": KustomerFullApiSchemaCreateScheduleRequest;
  "DeleteSchedulebyID": never;
  "GetSchedulebyID": never;
  "UpdateSchedulebyID": KustomerFullApiSchemaUpdateSchedulebyIDRequest;
  "GetDefaultSchedule": never;
  "GetSettings": never;
  "GetaSetting": never;
  "UpdateaSetting": KustomerFullApiSchemaUpdateaSettingRequest;
  "GetAllShortcuts": never;
  "CreateaShortcut": KustomerFullApiSchemaCreateaShortcutRequest;
  "DeleteaShortcut": never;
  "GetaShortcut": never;
  "UpdateaShortcut": KustomerFullApiSchemaUpdateaShortcutRequest;
  "GetShortcutCategories": never;
  "CreateaShortcutCategory": KustomerFullApiSchemaCreateaShortcutCategoryRequest;
  "DeleteaShortcutCategory": never;
  "GetaShortcutCategory": never;
  "UpdateaShortcutCategory": KustomerFullApiSchemaUpdateaShortcutCategoryRequest;
  "GetSLAByID": never;
  "GetSnippets": never;
  "CreateSnippet": KustomerFullApiSchemaCreateSnippetRequest;
  "GetSnippetsbyID": never;
  "PatchSnippet": KustomerFullApiSchemaPatchSnippetRequest;
  "UpdateSnippet": KustomerFullApiSchemaUpdateSnippetRequest;
  "GetAllSnoozes": never;
  "GetSnoozes": never;
  "CreateaSnooze": KustomerFullApiSchemaCreateaSnoozeRequest;
  "CreateSnooze": {
  name: string;
  value: (number | {
  time?: string;
  day?: {
  value?: string;
  type?: string;
};
});
  type: "relative" | "absolute" | "dynamic";
  enabled?: boolean;
  klassId?: string;
};
  "DeleteSnooze": never;
  "GetSnoozebyID": never;
  "GetSnoozeById": never;
  "UpdateSnooze": {
  name?: string;
  value?: (number | {});
  enabled?: boolean;
};
  "UpdateSnoozebyID": KustomerFullApiSchemaUpdateSnoozebyIDRequest;
  "GetSnoozesByKlass": never;
  "GetSpamSenders": never;
  "UpsertSpamSender": never;
  "DeleteSpamSender": never;
  "GetSubStatuses": never;
  "CreateSubStatus": {
  label: string;
  description?: string;
  parentStatus: "open" | "done" | "snoozed";
  resourceType: "conversation" | "kobject";
  default?: boolean;
};
  "DeleteSubStatus": never;
  "GetSubStatusById": never;
  "UpdateSubStatus": {
  label?: string;
  description?: string;
  default?: boolean;
};
  "GetTeams": never;
  "CreateTeam": KustomerFullApiSchemaCreateTeamRequest;
  "DeleteTeam": never;
  "GetTeambyID": never;
  "UpdateTeamAttributes": KustomerFullApiSchemaUpdateTeamAttributesRequest;
  "UpdateTeambyID": KustomerFullApiSchemaUpdateTeambyIDRequest;
  "RemoveTeamMember": KustomerFullApiSchemaRemoveTeamMemberRequest;
  "AddTeamMember": KustomerFullApiSchemaAddTeamMemberRequest;
  "CreateaTrackingEvent": KustomerFullApiSchemaCreateaTrackingEventRequest;
  "CreateaTrackingIdentity": KustomerFullApiSchemaCreateaTrackingIdentityRequest;
  "CreateaTrackingIdentityEvent": KustomerFullApiSchemaCreateaTrackingIdentityEventRequest;
  "GetUsers": never;
  "CreateInviteNewUser": KustomerFullApiSchemaCreateInviteNewUserRequest;
  "GetUserbyID": never;
  "UpdateUserbyID": KustomerFullApiSchemaUpdateUserbyIDRequest;
  "GetUserSettings": never;
  "GetSpecificUserSetting": never;
  "UpdateSpecificUserSetting": KustomerFullApiSchemaUpdateaSettingRequest;
  "GetaUsersTeams": never;
  "GetMultipleUsersbyIDs": never;
  "GetCurrentUser": never;
  "UpdateCurrentUser": KustomerFullApiSchemaUpdateCurrentUserRequest;
  "GetUserSettingsforCurrentUser": never;
  "GetSpecificUserSettingforCurrentUser": never;
  "UpdateSpecificUserSettingforCurrentUser": KustomerFullApiSchemaUpdateaSettingRequest;
  "ResetUsersPassword": KustomerFullApiSchemaResetUsersPasswordRequest;
  "GetArticles": never;
  "CreateanArticle": KustomerFullApiSchemaCreateanArticleRequest;
  "GetArticlebyID": never;
  "UpdateArticle": KustomerFullApiSchemaUpdateArticleRequest;
  "GetRoutesbyArticleID": never;
  "Createarticleschedule": KustomerFullApiSchemaCreatearticlescheduleRequest;
  "DeleteArticleSchedule": never;
  "UpdateArticleSchedule": KustomerFullApiSchemaUpdateArticleScheduleRequest;
  "DeleteVersionsofaLanguage": never;
  "GetArticleVersionsbyLanguage": never;
  "CreateaVersion": KustomerFullApiSchemaCreateaVersionRequest;
  "DeleteaDraftVersion": never;
  "UpdateaDraftVersion": KustomerFullApiSchemaUpdateaDraftVersionRequest;
  "UpdateLatestPublishedArticleVersion": KustomerFullApiSchemaUpdateLatestPublishedArticleVersionRequest;
  "SearchArticles": never;
  "GetCategories": never;
  "CreateaCategory": KustomerFullApiSchemaCreateaCategoryRequest;
  "GetCategorybyID": never;
  "UpdateCategory": KustomerFullApiSchemaUpdateCategoryRequest;
  "GetRoutesbyCategoryID": never;
  "CreateaCategoryRoute": KustomerFullApiSchemaCreateaCategoryRouteRequest;
  "GetForms": never;
  "CreateaForm": KustomerFullApiSchemaCreateaFormRequest;
  "DeleteForm": never;
  "GetFormbyID": never;
  "UpdateForm": KustomerFullApiSchemaUpdateFormRequest;
  "GetInternalCategories": never;
  "CreateanInternalCategory": KustomerFullApiSchemaCreateanInternalCategoryRequest;
  "GetInternalCategorybyID": never;
  "CreateKnowledgeBase": KustomerFullApiSchemaCreateKnowledgeBaseRequest;
  "GetKnowledgeBasebyID": never;
  "UpdateKnowledgeBase": KustomerFullApiSchemaUpdateKnowledgeBaseRequest;
  "CreateCustomDomain": KustomerFullApiSchemaCreateCustomDomainRequest;
  "DeleteCustomDomain": never;
  "UpdateCustomDomain": KustomerFullApiSchemaUpdateCustomDomainRequest;
  "GetCustomDomains": never;
  "GetCustomDomainByID": never;
  "GetRoutebyURL(Public)": never;
  "GetRoutes": never;
  "CreateaRoute": KustomerFullApiSchemaCreateaRouteRequest;
  "DeleteRoutebyID": never;
  "GetRoutebyID": never;
  "UpdateRoute": KustomerFullApiSchemaUpdateRouteRequest;
  "GetArticleVersionbyID": never;
  "GetTags": never;
  "CreateTag": KustomerFullApiSchemaCreateTagRequest;
  "GetTagsbyID": never;
  "UpdateTag": KustomerFullApiSchemaUpdateTagRequest;
  "GetTemplates": never;
  "GetTemplatesbyID": never;
  "GetThemes": never;
  "CreateaTheme": KustomerFullApiSchemaCreateaThemeRequest;
  "GetThemesbyID": never;
  "GetThemeRevisions": never;
  "GetThemeRevisionbyID": never;
  "GetThemeFilesbyRevision": never;
  "CreateRevisionThemeFile": KustomerFullApiSchemaCreateRevisionThemeFileRequest;
  "DeleteRevisionThemeFile": never;
  "GetThemeFilebyRevision": never;
  "UpdateRevisionThemeFile": KustomerFullApiSchemaUpdateRevisionThemeFileRequest;
  "DeleteThemeDraftRevision": never;
  "CreateThemeDraftRevision": KustomerFullApiSchemaCreateThemeDraftRevisionRequest;
  "UpdateThemeDraftRevision": KustomerFullApiSchemaUpdateThemeDraftRevisionRequest;
  "DeleteWorkflowVariable": never;
  "GetWorkflowVariable": never;
  "UpdateWorkflowVariable": KustomerFullApiSchemaUpdateWorkflowVariableRequest;
  "GetWorkflows": never;
  "CreateWorkflow": KustomerFullApiSchemaCreateWorkflowRequest;
  "GetWorkflow": never;
  "UpdateWorkflow": KustomerFullApiSchemaUpdateWorkflowRequest;
  "GetProcessesbyWorkflow": never;
  "GetAllVariablesforSpecificWorkflowID": never;
  "CreateWorkflowVariableforSpecificWorkflowID": KustomerFullApiSchemaCreateWorkflowVariableforSpecificWorkflowIDRequest;
}

export interface KustomerFullApiOperationRequestBodyRequiredMap {
  "ListAIAutomations": false;
  "GetAIAutomation": false;
  "ListEvaluationsByAutomation": false;
  "ListEvaluationRuns": false;
  "GetEvaluationRun": false;
  "ListEvaluationTestCaseResults": false;
  "GetEvaluationTestCaseResult": false;
  "ListEvaluationTestCases": false;
  "CreateEvaluationTestCase": true;
  "DeleteEvaluationTestCase": false;
  "GetEvaluationTestCase": false;
  "UpdateEvaluationTestCase": true;
  "CreateEvaluation": true;
  "DeleteEvaluation": false;
  "GetEvaluation": false;
  "UpdateEvaluation": true;
  "RunEvaluation": false;
  "GetAISummaryByResourceId": false;
  "BatchGetAISummaries": false;
  "GetInstalledApps": false;
  "GetInstalledApps(BySpecificVersion)": false;
  "GetAvailableApps": false;
  "GetAvailableApp": false;
  "CreateAttachment": true;
  "GetOutboundAttachmentByID": false;
  "UpsertAttachment": true;
  "GetAuditLogs": false;
  "GetAuthCustomerSettings": false;
  "GetAuthRoles": false;
  "GetAuthSettings": false;
  "UpdateAuthSettings": false;
  "GetAuthTokens": false;
  "CreateToken": false;
  "DeleteAuthTokenbyID": false;
  "GetAuthTokenbyID": false;
  "DeleteCurrentAuthToken": false;
  "GetCurrentAuthToken": false;
  "GETBrands": false;
  "POSTBrands": true;
  "GETBrandbyID": false;
  "PATCHBrandResource": true;
  "GETDefaultBrand": false;
  "GetBulkOperationById": false;
  "GetBulkOperationBatches": false;
  "GetCards": false;
  "DeleteaCard": false;
  "GetCard": false;
  "UpdateaCard": false;
  "CreateaCard": false;
  "InstallaCard": false;
  "QueueMetrics": false;
  "GetChatSettings": false;
  "SetChatSettings": true;
  "GetCompanies": false;
  "CreateaCompany": true;
  "GetCompanybyID": false;
  "UpdateCompanyAttributes": true;
  "FindCompanyKObjects": false;
  "BulkCreateCompanies": true;
  "BulkBatchUpdateCompanies": true;
  "GetConversations": false;
  "CreateaConversation": true;
  "DeleteConversation": false;
  "GetConversation": false;
  "UpdateConversationAttributes": true;
  "UpdateConversation": true;
  "GetConversationAttachments": false;
  "GetConversationEvents": false;
  "GetallForwardsbyConversation": false;
  "CreateaForwardbyConversation": true;
  "GetMessagesbyConversation": false;
  "CreateaMessagefromConversation": true;
  "GetNotesbyConversation": false;
  "CreateaNotewithinConversation": true;
  "RemoveTagsfromConversation": false;
  "AppendTagstoConversation": true;
  "Getconversationtimesbyconversationid": false;
  "GetV2conversationtimesbyconversationid": false;
  "BulkDeleteConversations": false;
  "BulkCreateConversations": true;
  "BulkBatchUpdateConversations": true;
  "GetConversationbyExternalID": false;
  "Getconversationtimebyids": false;
  "GetCustomers": false;
  "CreateaCustomer": true;
  "GetaCustomerEvent": false;
  "GetallEventsbyCustomerforSession": false;
  "DeleteCustomer": false;
  "GetCustomerbyID": false;
  "UpdateCustomerAttributes": true;
  "UpdateCustomer": true;
  "GetConversationsbyCustomer": false;
  "CreateaConversationforaCustomer": true;
  "GetallDraftsbyCustomer": false;
  "CreateaDraftbyCustomer": true;
  "GetallCustomerEvents": false;
  "FindCustomerKObjects": false;
  "CreateCustomerKObject": true;
  "GetCustomerMergesbyCustomer": false;
  "GetMessagesbyCustomer": false;
  "CreateaMessagebyCustomer": true;
  "GetNotesbyCustomer": false;
  "GetCustomerSessions": false;
  "DeleteUnmaskingWindowbyCustomer": false;
  "CreateUnmaskingWindowbyCustomer": false;
  "CustomerArchiveSearch": true;
  "BulkDeleteCustomers": false;
  "BulkCreateCustomers": true;
  "BulkBatchUpdateCustomers": true;
  "GetCustomerbyEmail": false;
  "GetCustomerbyExternalID": false;
  "CreateaCustomerMerge": true;
  "GetaCustomerMerge": false;
  "GetCustomerbyPhone": false;
  "CustomerSearch": true;
  "GetAllSearches": false;
  "CreateSavedSearch": true;
  "DeleteSearchbyID": false;
  "GetSavedSearchbyID": false;
  "UpdateSearchbyID": true;
  "CreateSearchFolder": true;
  "DeleteSearchFolderbyID": false;
  "UpdateSearchFolderbyID": true;
  "GetAllPinnedSearches": false;
  "PinSearch": true;
  "DeletePinnedSearchbyID": false;
  "GetSearchPositions": false;
  "UpdateSearchPositions": true;
  "GetSchemaforSearches": false;
  "DeleteaDraft": false;
  "UpdateaDraft": true;
  "GetDraftAttachments": false;
  "CreateDraftAttachment": true;
  "DeleteDraftAttachment": false;
  "GetDraftAttachment": false;
  "GetaDraftForwardByID": false;
  "UpdateaDraftForward": true;
  "GetForwardAttachments": false;
  "CreateForwardAttachment": true;
  "DeleteForwardAttachment": false;
  "GetForwardAttachment": false;
  "GetEmailHooks": false;
  "CreateEmailHook": false;
  "GetanEmailHook": false;
  "UpdateEmailHook": false;
  "GetEmailHookTransactions": false;
  "GetFormHooks": false;
  "CreateFormHook": false;
  "CreateFormHookTransaction": false;
  "GetaFormHook": false;
  "UpdateFormHook": false;
  "GETFormHookTransactions": false;
  "CreateFormHookOrgTransaction": false;
  "GetWebHooks": false;
  "CreateWebHook": false;
  "CreateWebHookTransaction": false;
  "GetaWebHook": false;
  "UpdateWebHook": false;
  "GetWebHookTransactions": false;
  "GetKlasses": false;
  "CreateaKlass": true;
  "DeleteaKlass": false;
  "GetKlass": false;
  "UpdateaKlass": true;
  "GetKObjects": false;
  "CreateKObject": true;
  "DeleteKObject": false;
  "GetKObject": false;
  "UpdateKObject": true;
  "BulkDeleteKObjects": false;
  "BulkCreateKObjects": true;
  "BulkBatchUpdateKObjects": true;
  "GetKObjectByExternalID": false;
  "GetKViews": false;
  "GetKViewsbyResource": false;
  "UpdateKViewsOrder": false;
  "UpdateKView": false;
  "CreateMedia": true;
  "GetMediabyID": false;
  "UpdateMedia": true;
  "GetMessages": false;
  "CreateMessage": true;
  "GetaMessage": false;
  "UpdateMessageAttributes": true;
  "UpdateaMessage": true;
  "RedactMessage": true;
  "GetMessageAttachment": false;
  "BulkCreateMessages": true;
  "BulkBatchUpdateMessages": true;
  "GetaMessagebyExternalID": false;
  "GetCustomAttributeMetadata": false;
  "UpdateCustomAttributeMetadata": true;
  "GetNotesforOrg": false;
  "CreateNote": true;
  "DeleteNotebyID": false;
  "GetNotebyID": false;
  "UpdateNoteAttributes": true;
  "UpdateNotebyID": true;
  "BulkCreateNotes": true;
  "BulkBatchUpdateNotes": true;
  "DeleteNotifications": false;
  "GetNotifications": false;
  "UpdateNotifications": true;
  "GetNotificationsLogsSettings": false;
  "UpdateNotificationsLogsSettings": true;
  "GetCurrentUserNotificationSettings": false;
  "UpdateCurrentUserNotificationSettings": true;
  "ListOutboundWebhooks": false;
  "CreateOutboundWebhook": false;
  "DeleteOutboundWebhook": false;
  "GetOutboundWebhook": false;
  "UpdateOutboundWebhook": false;
  "ListTransactionsForWebhook": false;
  "ListSubscribableEvents": false;
  "ListTransactions": false;
  "GetOutboundAccounts": false;
  "GetPublicAuthSettings": false;
  "GetArticles(Public)": false;
  "SearchArticles(Public)": false;
  "GetCategories(Public)": false;
  "GetCategorybyID(Public)": false;
  "GetFormbyID(Public)": false;
  "GetThemebyID(Public)": false;
  "GetThemeFiles(Public)": false;
  "GetActiveTheme(Public)": false;
  "GetAllRoleGroups": false;
  "CreateaRoleGroup": false;
  "DeleteaRoleGroup": false;
  "GetARoleGroupByID": false;
  "UpdateaRoleGroup": false;
  "GetWorkItemsbyConversation": false;
  "GetQueueRules": false;
  "CreateQueueRule": true;
  "GetQueueCriteria": false;
  "DeleteQueueRule": false;
  "GetQueueRule": false;
  "UpdateQueueRule": true;
  "UpdateQueueRuleOrder": true;
  "GetQueues": false;
  "CreateQueue": true;
  "GetQueue": false;
  "UpdateQueue": true;
  "GetWorkItemsinaqueue": false;
  "GetNextWorkItemsinaQueue": false;
  "GetWorkSessionsbyQueueID": false;
  "GetAllTeamRoutingSettings": false;
  "GetTeamRoutingSettings": false;
  "UpdateTeamRoutingSettings": true;
  "GetRoutingUserStatuses": false;
  "CreateRoutingUserStatus": true;
  "GetRoutingUserStatus": false;
  "UpdateRoutingUserStatus": true;
  "GetWorkSessionsbyUserID": false;
  "GetCurrentWorkSessionbyUserID": false;
  "GetCurrentsUserTeamRoutingSettings": false;
  "GetWorkItems": false;
  "CreateWorkItem": true;
  "GetWorkItem": false;
  "UpdateWorkItem": true;
  "GetWorkSessions": false;
  "GetWorkSessionbyID": false;
  "UpdateWorkSessionbyID": true;
  "GetWorkItemsByWorkSession": false;
  "GetCurrentWorkSession": false;
  "UpdateCurrentWorkSession": true;
  "GetWorkItemsinCurrentWorkSession": false;
  "GetSatisfaction": false;
  "GetSatisfactionResponse": false;
  "GetAllSchedules": false;
  "CreateSchedule": true;
  "DeleteSchedulebyID": false;
  "GetSchedulebyID": false;
  "UpdateSchedulebyID": true;
  "GetDefaultSchedule": false;
  "GetSettings": false;
  "GetaSetting": false;
  "UpdateaSetting": true;
  "GetAllShortcuts": false;
  "CreateaShortcut": true;
  "DeleteaShortcut": false;
  "GetaShortcut": false;
  "UpdateaShortcut": true;
  "GetShortcutCategories": false;
  "CreateaShortcutCategory": true;
  "DeleteaShortcutCategory": false;
  "GetaShortcutCategory": false;
  "UpdateaShortcutCategory": true;
  "GetSLAByID": false;
  "GetSnippets": false;
  "CreateSnippet": true;
  "GetSnippetsbyID": false;
  "PatchSnippet": true;
  "UpdateSnippet": true;
  "GetAllSnoozes": false;
  "GetSnoozes": false;
  "CreateaSnooze": true;
  "CreateSnooze": true;
  "DeleteSnooze": false;
  "GetSnoozebyID": false;
  "GetSnoozeById": false;
  "UpdateSnooze": true;
  "UpdateSnoozebyID": true;
  "GetSnoozesByKlass": false;
  "GetSpamSenders": false;
  "UpsertSpamSender": false;
  "DeleteSpamSender": false;
  "GetSubStatuses": false;
  "CreateSubStatus": true;
  "DeleteSubStatus": false;
  "GetSubStatusById": false;
  "UpdateSubStatus": true;
  "GetTeams": false;
  "CreateTeam": false;
  "DeleteTeam": false;
  "GetTeambyID": false;
  "UpdateTeamAttributes": false;
  "UpdateTeambyID": false;
  "RemoveTeamMember": false;
  "AddTeamMember": false;
  "CreateaTrackingEvent": true;
  "CreateaTrackingIdentity": true;
  "CreateaTrackingIdentityEvent": true;
  "GetUsers": false;
  "CreateInviteNewUser": false;
  "GetUserbyID": false;
  "UpdateUserbyID": false;
  "GetUserSettings": false;
  "GetSpecificUserSetting": false;
  "UpdateSpecificUserSetting": true;
  "GetaUsersTeams": false;
  "GetMultipleUsersbyIDs": false;
  "GetCurrentUser": false;
  "UpdateCurrentUser": false;
  "GetUserSettingsforCurrentUser": false;
  "GetSpecificUserSettingforCurrentUser": false;
  "UpdateSpecificUserSettingforCurrentUser": true;
  "ResetUsersPassword": false;
  "GetArticles": false;
  "CreateanArticle": true;
  "GetArticlebyID": false;
  "UpdateArticle": true;
  "GetRoutesbyArticleID": false;
  "Createarticleschedule": true;
  "DeleteArticleSchedule": false;
  "UpdateArticleSchedule": true;
  "DeleteVersionsofaLanguage": false;
  "GetArticleVersionsbyLanguage": false;
  "CreateaVersion": true;
  "DeleteaDraftVersion": false;
  "UpdateaDraftVersion": true;
  "UpdateLatestPublishedArticleVersion": true;
  "SearchArticles": false;
  "GetCategories": false;
  "CreateaCategory": true;
  "GetCategorybyID": false;
  "UpdateCategory": true;
  "GetRoutesbyCategoryID": false;
  "CreateaCategoryRoute": true;
  "GetForms": false;
  "CreateaForm": true;
  "DeleteForm": false;
  "GetFormbyID": false;
  "UpdateForm": true;
  "GetInternalCategories": false;
  "CreateanInternalCategory": true;
  "GetInternalCategorybyID": false;
  "CreateKnowledgeBase": true;
  "GetKnowledgeBasebyID": false;
  "UpdateKnowledgeBase": true;
  "CreateCustomDomain": true;
  "DeleteCustomDomain": false;
  "UpdateCustomDomain": true;
  "GetCustomDomains": false;
  "GetCustomDomainByID": false;
  "GetRoutebyURL(Public)": false;
  "GetRoutes": false;
  "CreateaRoute": true;
  "DeleteRoutebyID": false;
  "GetRoutebyID": false;
  "UpdateRoute": true;
  "GetArticleVersionbyID": false;
  "GetTags": false;
  "CreateTag": true;
  "GetTagsbyID": false;
  "UpdateTag": true;
  "GetTemplates": false;
  "GetTemplatesbyID": false;
  "GetThemes": false;
  "CreateaTheme": true;
  "GetThemesbyID": false;
  "GetThemeRevisions": false;
  "GetThemeRevisionbyID": false;
  "GetThemeFilesbyRevision": false;
  "CreateRevisionThemeFile": true;
  "DeleteRevisionThemeFile": false;
  "GetThemeFilebyRevision": false;
  "UpdateRevisionThemeFile": true;
  "DeleteThemeDraftRevision": false;
  "CreateThemeDraftRevision": true;
  "UpdateThemeDraftRevision": true;
  "DeleteWorkflowVariable": false;
  "GetWorkflowVariable": false;
  "UpdateWorkflowVariable": false;
  "GetWorkflows": false;
  "CreateWorkflow": false;
  "GetWorkflow": false;
  "UpdateWorkflow": false;
  "GetProcessesbyWorkflow": false;
  "GetAllVariablesforSpecificWorkflowID": false;
  "CreateWorkflowVariableforSpecificWorkflowID": false;
}

export interface KustomerFullApiOperationResponseMap {
  "ListAIAutomations": KustomerFullApiSchemaListAutomationsResponse;
  "GetAIAutomation": KustomerFullApiSchemaAutomationResponse;
  "ListEvaluationsByAutomation": KustomerFullApiSchemaListEvaluationsResponse;
  "ListEvaluationRuns": KustomerFullApiSchemaListEvaluationRunsResponse;
  "GetEvaluationRun": KustomerFullApiSchemaEvaluationRunResponse;
  "ListEvaluationTestCaseResults": KustomerFullApiSchemaListTestCaseResultsResponse;
  "GetEvaluationTestCaseResult": KustomerFullApiSchemaTestCaseResultResponse;
  "ListEvaluationTestCases": KustomerFullApiSchemaListTestCasesResponse;
  "CreateEvaluationTestCase": KustomerFullApiSchemaTestCaseResponse;
  "DeleteEvaluationTestCase": KustomerFullApiSchemaErrorResponse;
  "GetEvaluationTestCase": KustomerFullApiSchemaTestCaseResponse;
  "UpdateEvaluationTestCase": KustomerFullApiSchemaTestCaseResponse;
  "CreateEvaluation": KustomerFullApiSchemaEvaluationResponse;
  "DeleteEvaluation": KustomerFullApiSchemaErrorResponse;
  "GetEvaluation": KustomerFullApiSchemaEvaluationResponse;
  "UpdateEvaluation": KustomerFullApiSchemaEvaluationResponse;
  "RunEvaluation": KustomerFullApiSchemaEvaluationRunResponse;
  "GetAISummaryByResourceId": KustomerFullApiSchemaSummaryResponse;
  "BatchGetAISummaries": KustomerFullApiSchemaBatchGetSummariesResponse;
  "GetInstalledApps": KustomerFullApiSchemaGetInstalledAppsResponseSuccess;
  "GetInstalledApps(BySpecificVersion)": KustomerFullApiSchemaGetInstalledAppsBySpecificVersionResponseSuccess;
  "GetAvailableApps": KustomerFullApiSchemaGetAvailableAppsResponseSuccess;
  "GetAvailableApp": KustomerFullApiSchemaGetAvailableAppResponseSuccess;
  "CreateAttachment": KustomerFullApiSchemaCreateAttachmentResponseSuccess;
  "GetOutboundAttachmentByID": KustomerFullApiSchemaGetAttachmentsbyIDOutboundOnlyResponseSuccess;
  "UpsertAttachment": KustomerFullApiSchemaUpsertAttachmentResponseSuccess;
  "GetAuditLogs": KustomerFullApiSchemaGetAuditLogsResponseSuccess;
  "GetAuthCustomerSettings": KustomerFullApiSchemaGetAuthCustomerSettingsResponseSuccess;
  "GetAuthRoles": KustomerFullApiSchemaGetAuthRolesResponseSuccess;
  "GetAuthSettings": KustomerFullApiSchemaGetAuthSettingsResponseSuccess;
  "UpdateAuthSettings": KustomerFullApiSchemaUpdateAuthSettingsResponseSuccess;
  "GetAuthTokens": KustomerFullApiSchemaGetAuthTokensResponseSuccess;
  "CreateToken": KustomerFullApiSchemaCreateTokenResponseSuccess;
  "DeleteAuthTokenbyID": KustomerFullApiSchemaErrorResponse2;
  "GetAuthTokenbyID": KustomerFullApiSchemaGetAuthTokenbyIDResponseSuccess;
  "DeleteCurrentAuthToken": KustomerFullApiSchemaErrorResponse2;
  "GetCurrentAuthToken": KustomerFullApiSchemaGetCurrentAuthTokenResponseSuccess;
  "GETBrands": KustomerFullApiSchemaGETBrandsResponseGETBrands;
  "POSTBrands": KustomerFullApiSchemaPOSTBrandsResponsePOSTBrands;
  "GETBrandbyID": KustomerFullApiSchemaGETBrandbyIDResponseGETBrandbyID;
  "PATCHBrandResource": KustomerFullApiSchemaPATCHBrandResourceResponsePATCHBrandresource;
  "GETDefaultBrand": KustomerFullApiSchemaGETDefaultBrandResponseGETdefaultbrand;
  "GetBulkOperationById": KustomerFullApiSchemaGetBulkOperationByIdResponseSuccess;
  "GetBulkOperationBatches": KustomerFullApiSchemaGetBulkOperationBatchesResponseSuccess;
  "GetCards": KustomerFullApiSchemaGetCardsResponseSuccess;
  "DeleteaCard": KustomerFullApiSchemaErrorResponse3;
  "GetCard": KustomerFullApiSchemaGetCardResponseSuccess;
  "UpdateaCard": KustomerFullApiSchemaUpdateaCardResponseSuccess;
  "CreateaCard": KustomerFullApiSchemaCreateaCardResponseSuccess;
  "InstallaCard": KustomerFullApiSchemaInstallaCardResponseSuccess;
  "QueueMetrics": KustomerFullApiSchemaQueueMetricsResponseSuccess;
  "GetChatSettings": KustomerFullApiSchemaGetChatSettingsResponseSuccess;
  "SetChatSettings": KustomerFullApiSchemaSetChatSettingsResponseSuccess;
  "GetCompanies": KustomerFullApiSchemaGetCompaniesResponseFilterSuccess;
  "CreateaCompany": KustomerFullApiSchemaCreateaCompanyResponseSuccess;
  "GetCompanybyID": KustomerFullApiSchemaGetCompanybyIDResponseSuccess;
  "UpdateCompanyAttributes": KustomerFullApiSchemaUpdateCompanyAttributesResponseSuccess;
  "FindCompanyKObjects": KustomerFullApiSchemaFindCompanyKObjectsResponseSuccess;
  "BulkCreateCompanies": KustomerFullApiSchemaBulkCreateCompaniesResponseSuccess;
  "BulkBatchUpdateCompanies": KustomerFullApiSchemaBulkBatchUpdateCompaniesResponseSuccess;
  "GetConversations": KustomerFullApiSchemaGetConversationsResponseSuccess;
  "CreateaConversation": KustomerFullApiSchemaCreateaConversationResponseSuccess;
  "DeleteConversation": KustomerFullApiSchemaErrorResponse4;
  "GetConversation": KustomerFullApiSchemaGetConversationResponseSuccess;
  "UpdateConversationAttributes": KustomerFullApiSchemaUpdateConversationAttributesResponseSuccess;
  "UpdateConversation": KustomerFullApiSchemaUpdateConversationResponseSuccess;
  "GetConversationAttachments": KustomerFullApiSchemaGetConversationAttachmentsResponseSuccess;
  "GetConversationEvents": KustomerFullApiSchemaGetConversationEventsResponseSuccess;
  "GetallForwardsbyConversation": KustomerFullApiSchemaGetallForwardsbyConversationResponseSuccess;
  "CreateaForwardbyConversation": KustomerFullApiSchemaCreateaForwardbyConversationResponseSuccess;
  "GetMessagesbyConversation": KustomerFullApiSchemaGetMessagesbyConversationResponseSuccess;
  "CreateaMessagefromConversation": KustomerFullApiSchemaCreateaMessagefromConversationResponseSuccess;
  "GetNotesbyConversation": KustomerFullApiSchemaGetNotesbyConversationResponseSuccess;
  "CreateaNotewithinConversation": KustomerFullApiSchemaCreateaNotewithinConversationResponseSuccess;
  "RemoveTagsfromConversation": KustomerFullApiSchemaRemoveTagsfromConversationResponseSuccess;
  "AppendTagstoConversation": KustomerFullApiSchemaAppendTagstoConversationResponseSuccess;
  "Getconversationtimesbyconversationid": KustomerFullApiSchemaGetconversationtimesbyconversationidResponseSuccess;
  "GetV2conversationtimesbyconversationid": KustomerFullApiSchemaGetV2conversationtimesbyconversationidResponseSuccess;
  "BulkDeleteConversations": KustomerFullApiSchemaBulkDeleteConversationsResponseSuccess;
  "BulkCreateConversations": KustomerFullApiSchemaBulkCreateConversationsResponseSuccess;
  "BulkBatchUpdateConversations": KustomerFullApiSchemaBulkBatchUpdateConversationsResponseSuccess;
  "GetConversationbyExternalID": KustomerFullApiSchemaGetConversationbyExternalIDResponseSuccess;
  "Getconversationtimebyids": KustomerFullApiSchemaGetconversationtimebyidsResponsesuccess;
  "GetCustomers": KustomerFullApiSchemaGetCustomersResponseSuccess;
  "CreateaCustomer": KustomerFullApiSchemaCreateaCustomerResponseSuccess;
  "GetaCustomerEvent": KustomerFullApiSchemaGetaCustomerEventResponseSuccess;
  "GetallEventsbyCustomerforSession": KustomerFullApiSchemaGetallEventsbyCustomerforSessionResponseSuccess;
  "DeleteCustomer": KustomerFullApiSchemaErrorResponse4;
  "GetCustomerbyID": (KustomerFullApiSchemaGetCustomerbyIDResponseSuccess | KustomerFullApiSchemaGetCustomerbyIDMultiResponseSuccess);
  "UpdateCustomerAttributes": KustomerFullApiSchemaUpdateCustomerAttributesResponseSuccess;
  "UpdateCustomer": KustomerFullApiSchemaUpdateCustomerResponseSuccess;
  "GetConversationsbyCustomer": KustomerFullApiSchemaGetConversationsbyCustomerResponseSuccess;
  "CreateaConversationforaCustomer": KustomerFullApiSchemaCreateaConversationforaCustomerResponseSuccess;
  "GetallDraftsbyCustomer": KustomerFullApiSchemaGetallDraftsbyCustomerResponseSuccess;
  "CreateaDraftbyCustomer": KustomerFullApiSchemaCreateaDraftbyCustomerResponseCreateanEmailDraft;
  "GetallCustomerEvents": KustomerFullApiSchemaGetallCustomerEventsResponseSuccess;
  "FindCustomerKObjects": KustomerFullApiSchemaFindCustomerKObjectsResponseSuccess;
  "CreateCustomerKObject": KustomerFullApiSchemaCreateCustomerKObjectResponseSuccess;
  "GetCustomerMergesbyCustomer": KustomerFullApiSchemaGetCustomerMergesbyCustomerResponseSuccess;
  "GetMessagesbyCustomer": KustomerFullApiSchemaGetMessagesbyCustomerResponseSuccess;
  "CreateaMessagebyCustomer": KustomerFullApiSchemaCreateaMessagebyCustomerResponseSuccess;
  "GetNotesbyCustomer": KustomerFullApiSchemaGetNotesbyCustomerResponseSuccess;
  "GetCustomerSessions": KustomerFullApiSchemaGetCustomerSessionsResponseSuccess;
  "DeleteUnmaskingWindowbyCustomer": KustomerFullApiSchemaErrorResponse4;
  "CreateUnmaskingWindowbyCustomer": KustomerFullApiSchemaErrorResponse4;
  "CustomerArchiveSearch": KustomerFullApiSchemaCustomerSearchResponseSuccess;
  "BulkDeleteCustomers": KustomerFullApiSchemaBulkDeleteCustomersResponseSuccess;
  "BulkCreateCustomers": KustomerFullApiSchemaBulkCreateCustomersResponseSuccess;
  "BulkBatchUpdateCustomers": KustomerFullApiSchemaBulkBatchUpdateCustomersResponseSuccess;
  "GetCustomerbyEmail": KustomerFullApiSchemaGetCustomerbyEmailResponseSuccess;
  "GetCustomerbyExternalID": KustomerFullApiSchemaGetCustomerbyExternalIDResponseSuccess;
  "CreateaCustomerMerge": KustomerFullApiSchemaCreateaCustomerMergeResponseSuccess;
  "GetaCustomerMerge": KustomerFullApiSchemaGetaCustomerMergeResponseSuccess;
  "GetCustomerbyPhone": KustomerFullApiSchemaGetCustomerbyPhoneResponseSuccess;
  "CustomerSearch": KustomerFullApiSchemaCustomerSearchResponseSuccess;
  "GetAllSearches": KustomerFullApiSchemaGetAllSearchesResponseSuccess;
  "CreateSavedSearch": KustomerFullApiSchemaCreateSavedSearchResponseSuccess;
  "DeleteSearchbyID": KustomerFullApiSchemaErrorResponse5;
  "GetSavedSearchbyID": KustomerFullApiSchemaGetSavedSearchbyIDResponseSuccess;
  "UpdateSearchbyID": KustomerFullApiSchemaUpdateSearchbyIDResponseSuccess;
  "CreateSearchFolder": KustomerFullApiSchemaCreateSearchFolderResponseSuccess;
  "DeleteSearchFolderbyID": KustomerFullApiSchemaErrorResponse5;
  "UpdateSearchFolderbyID": KustomerFullApiSchemaUpdateSearchFolderbyIDResponseSuccess;
  "GetAllPinnedSearches": KustomerFullApiSchemaGetAllPinnedSearchesResponseSuccess;
  "PinSearch": KustomerFullApiSchemaPinSearchResponseSuccess;
  "DeletePinnedSearchbyID": KustomerFullApiSchemaErrorResponse5;
  "GetSearchPositions": KustomerFullApiSchemaGetSearchPositionsResponseSuccessFilterAll;
  "UpdateSearchPositions": KustomerFullApiSchemaUpdateSearchPositionsResponseSuccess;
  "GetSchemaforSearches": KustomerFullApiSchemaGetSchemaforSearchesResponseSuccess;
  "DeleteaDraft": KustomerFullApiSchemaErrorResponse4;
  "UpdateaDraft": KustomerFullApiSchemaUpdateaDraftResponseSuccess;
  "GetDraftAttachments": KustomerFullApiSchemaGetDraftAttachmentsResponseSuccess;
  "CreateDraftAttachment": KustomerFullApiSchemaCreateDraftAttachmentResponseSuccess;
  "DeleteDraftAttachment": KustomerFullApiSchemaErrorResponse4;
  "GetDraftAttachment": KustomerFullApiSchemaGetDraftAttachmentResponseSuccess;
  "GetaDraftForwardByID": KustomerFullApiSchemaGetaDraftForwardByIDResponseSuccess;
  "UpdateaDraftForward": KustomerFullApiSchemaUpdateaDraftForwardResponseSuccess;
  "GetForwardAttachments": KustomerFullApiSchemaGetForwardAttachmentsResponseSuccess;
  "CreateForwardAttachment": KustomerFullApiSchemaCreateForwardAttachmentResponseSuccess;
  "DeleteForwardAttachment": KustomerFullApiSchemaErrorResponse4;
  "GetForwardAttachment": KustomerFullApiSchemaGetForwardAttachmentResponseSuccess;
  "GetEmailHooks": KustomerFullApiSchemaGetEmailHooksResponseSuccess;
  "CreateEmailHook": KustomerFullApiSchemaCreateEmailHookResponseSuccess;
  "GetanEmailHook": KustomerFullApiSchemaGetanEmailHookResponseSuccess;
  "UpdateEmailHook": KustomerFullApiSchemaUpdateEmailHookResponseSuccess;
  "GetEmailHookTransactions": KustomerFullApiSchemaGetEmailHookTransactionsResponseSuccess;
  "GetFormHooks": KustomerFullApiSchemaGetFormHooksResponseSuccess;
  "CreateFormHook": KustomerFullApiSchemaCreateFormHookResponseSuccess;
  "CreateFormHookTransaction": KustomerFullApiSchemaCreateFormHookTransactionResponseSuccessJSON;
  "GetaFormHook": KustomerFullApiSchemaGetaFormHookResponseSuccess;
  "UpdateFormHook": KustomerFullApiSchemaUpdateFormHookResponseSuccess;
  "GETFormHookTransactions": KustomerFullApiSchemaGETFormHookTransactionsResponseSuccess;
  "CreateFormHookOrgTransaction": KustomerFullApiSchemaCreateFormHookOrgTransactionResponseSuccesswithreCAPTCHA;
  "GetWebHooks": KustomerFullApiSchemaGetWebHooksResponseSuccess;
  "CreateWebHook": KustomerFullApiSchemaCreateWebHookResponseSuccess;
  "CreateWebHookTransaction": KustomerFullApiSchemaCreateWebHookTransactionResponseSuccessJSON;
  "GetaWebHook": KustomerFullApiSchemaGetaWebHookResponseSuccess;
  "UpdateWebHook": KustomerFullApiSchemaUpdateWebHookResponseSuccess;
  "GetWebHookTransactions": KustomerFullApiSchemaGetWebHookTransactionsResponseSuccess;
  "GetKlasses": KustomerFullApiSchemaGetKlassesResponseSuccess;
  "CreateaKlass": KustomerFullApiSchemaCreateaKlassResponseSuccess;
  "DeleteaKlass": KustomerFullApiSchemaErrorResponse4;
  "GetKlass": KustomerFullApiSchemaGetKlassResponseSuccess;
  "UpdateaKlass": KustomerFullApiSchemaUpdateaKlassResponseSuccess;
  "GetKObjects": KustomerFullApiSchemaGetKObjectsResponseSuccess;
  "CreateKObject": KustomerFullApiSchemaCreateKObjectResponseSuccess;
  "DeleteKObject": KustomerFullApiSchemaErrorResponse4;
  "GetKObject": KustomerFullApiSchemaGetKObjectResponseSuccess;
  "UpdateKObject": KustomerFullApiSchemaUpdateKObjectResponseSuccess;
  "BulkDeleteKObjects": KustomerFullApiSchemaBulkDeleteKObjectsResponseSuccess;
  "BulkCreateKObjects": KustomerFullApiSchemaBulkCreateKObjectsResponseSuccess;
  "BulkBatchUpdateKObjects": KustomerFullApiSchemaBulkBatchUpdateKObjectsResponseSuccess;
  "GetKObjectByExternalID": KustomerFullApiSchemaGetKObjectResponseSuccess;
  "GetKViews": KustomerFullApiSchemaGetKViewsResponseSuccess;
  "GetKViewsbyResource": KustomerFullApiSchemaGetKViewsbyResourceResponseSuccess;
  "UpdateKViewsOrder": KustomerFullApiSchemaUpdateKViewsOrderResponseSuccess;
  "UpdateKView": KustomerFullApiSchemaUpdateKViewResponseSuccess;
  "CreateMedia": KustomerFullApiSchemaCreateMediaResponseSuccess;
  "GetMediabyID": KustomerFullApiSchemaGetMediabyIDResponseSuccess;
  "UpdateMedia": KustomerFullApiSchemaUpdateMediaResponseSuccess;
  "GetMessages": KustomerFullApiSchemaGetMessagesResponseSuccess;
  "CreateMessage": KustomerFullApiSchemaCreateMessageResponseSuccess;
  "GetaMessage": KustomerFullApiSchemaGetaMessageResponseSuccess;
  "UpdateMessageAttributes": KustomerFullApiSchemaUpdateMessageAttributesResponseSuccess;
  "UpdateaMessage": KustomerFullApiSchemaUpdateaMessageResponseSuccess;
  "RedactMessage": KustomerFullApiSchemaRedactMessageResponseSuccess;
  "GetMessageAttachment": KustomerFullApiSchemaGetAttachmentbyMessageandAttachmentIDInboundorOutboundResponseGetAttachmentsbyMessageandAttachmentIDInboundorOutbound;
  "BulkCreateMessages": KustomerFullApiSchemaBulkCreateMessagesResponseSuccess;
  "BulkBatchUpdateMessages": KustomerFullApiSchemaBulkBatchUpdateMessagesResponseSuccess;
  "GetaMessagebyExternalID": KustomerFullApiSchemaGetaMessagebyExternalIDResponseSuccess;
  "GetCustomAttributeMetadata": KustomerFullApiSchemaGetCustomAttributeMetadataResponseSuccess;
  "UpdateCustomAttributeMetadata": KustomerFullApiSchemaUpdateCustomAttributeMetadataResponseSuccess;
  "GetNotesforOrg": KustomerFullApiSchemaGetNotesforOrgResponseSuccess;
  "CreateNote": KustomerFullApiSchemaCreateNoteResponseUntitledResponse;
  "DeleteNotebyID": KustomerFullApiSchemaErrorResponse4;
  "GetNotebyID": KustomerFullApiSchemaGetNotebyIDResponseSuccess;
  "UpdateNoteAttributes": KustomerFullApiSchemaUpdateNotebyIDpatchResponseSuccess;
  "UpdateNotebyID": KustomerFullApiSchemaUpdateNotebyIDResponseSuccess;
  "BulkCreateNotes": KustomerFullApiSchemaBulkCreateNotesResponseSuccess;
  "BulkBatchUpdateNotes": KustomerFullApiSchemaBulkBatchUpdateNotesResponseSuccess;
  "DeleteNotifications": KustomerFullApiSchemaErrorResponse5;
  "GetNotifications": KustomerFullApiSchemaGetNotificationsResponseSuccess;
  "UpdateNotifications": KustomerFullApiSchemaErrorResponse5;
  "GetNotificationsLogsSettings": KustomerFullApiSchemaGetNotificationsLogsSettingsResponseSuccess;
  "UpdateNotificationsLogsSettings": KustomerFullApiSchemaUpdateNotificationsLogsSettingsResponseSuccess;
  "GetCurrentUserNotificationSettings": KustomerFullApiSchemaGETnotificationsUsersCurrentSettingsResponseSuccess;
  "UpdateCurrentUserNotificationSettings": KustomerFullApiSchemaPUTnotificationsUsersCurrentSettingsResponseSuccess;
  "ListOutboundWebhooks": KustomerFullApiSchemaListOutboundWebhooksResponseSuccess;
  "CreateOutboundWebhook": KustomerFullApiSchemaCreateOutboundWebhookResponseSuccess;
  "DeleteOutboundWebhook": KustomerFullApiSchemaErrorResponse3;
  "GetOutboundWebhook": KustomerFullApiSchemaGetOutboundWebhookResponseSuccess;
  "UpdateOutboundWebhook": KustomerFullApiSchemaUpdateOutboundWebhookResponseSuccess;
  "ListTransactionsForWebhook": KustomerFullApiSchemaListTransactionsForWebhookResponseListTransactionsForWebhook;
  "ListSubscribableEvents": KustomerFullApiSchemaListSubscribableEventsResponseSuccess;
  "ListTransactions": KustomerFullApiSchemaListTransactionsResponseListTransactions;
  "GetOutboundAccounts": KustomerFullApiSchemaGetOutboundAccountsResponseSuccess;
  "GetPublicAuthSettings": KustomerFullApiSchemaGetPublicAuthSettingsResponseSuccess;
  "GetArticles(Public)": KustomerFullApiSchemaGetArticlesPublicResponseSuccess;
  "SearchArticles(Public)": KustomerFullApiSchemaSearchArticlesPublicResponseSuccess;
  "GetCategories(Public)": KustomerFullApiSchemaGetCategoriesPublicResponseSuccess;
  "GetCategorybyID(Public)": KustomerFullApiSchemaGetCategorybyIDPublicResponseSuccess;
  "GetFormbyID(Public)": KustomerFullApiSchemaGetFormbyIDPublicResponseSuccess;
  "GetThemebyID(Public)": KustomerFullApiSchemaGetThemebyIDPublicResponseSuccess;
  "GetThemeFiles(Public)": KustomerFullApiSchemaGetThemeFilesPublicResponseSuccess;
  "GetActiveTheme(Public)": KustomerFullApiSchemaGetActiveThemePublicResponseSuccess;
  "GetAllRoleGroups": KustomerFullApiSchemaGetAllRoleGroupsResponseSuccess;
  "CreateaRoleGroup": KustomerFullApiSchemaCreateaRoleGroupResponseSuccess;
  "DeleteaRoleGroup": KustomerFullApiSchemaErrorResponse2;
  "GetARoleGroupByID": KustomerFullApiSchemaGetARoleGroupByIDResponseSuccess;
  "UpdateaRoleGroup": KustomerFullApiSchemaUpdateaRoleGroupResponseSuccess;
  "GetWorkItemsbyConversation": KustomerFullApiSchemaGetWorkItemsbyConversationResponseSuccess;
  "GetQueueRules": KustomerFullApiSchemaGetQueueRulesResponseSuccess;
  "CreateQueueRule": KustomerFullApiSchemaCreateQueueRuleResponseSuccess;
  "GetQueueCriteria": KustomerFullApiSchemaGetQueueCriteriaResponseSuccess;
  "DeleteQueueRule": KustomerFullApiSchemaErrorResponse6;
  "GetQueueRule": KustomerFullApiSchemaGetQueueRuleResponseSuccess;
  "UpdateQueueRule": KustomerFullApiSchemaUpdateQueueRuleResponseSuccess;
  "UpdateQueueRuleOrder": KustomerFullApiSchemaUpdateQueueRuleOrderResponseSuccess;
  "GetQueues": KustomerFullApiSchemaGetQueuesResponseSuccess;
  "CreateQueue": KustomerFullApiSchemaCreateQueueResponseSuccess;
  "GetQueue": KustomerFullApiSchemaGetQueueResponseSuccess;
  "UpdateQueue": KustomerFullApiSchemaUpdateQueueResponseSuccess;
  "GetWorkItemsinaqueue": KustomerFullApiSchemaGetWorkItemsinaqueueResponseSuccess;
  "GetNextWorkItemsinaQueue": KustomerFullApiSchemaGetNextWorkItemsinaQueueResponseSuccess;
  "GetWorkSessionsbyQueueID": KustomerFullApiSchemaGetWorkSessionsbyQueueIDResponseSuccess;
  "GetAllTeamRoutingSettings": KustomerFullApiSchemaGetAllTeamRoutingSettingsResponseSuccess;
  "GetTeamRoutingSettings": KustomerFullApiSchemaGetTeamRoutingSettingsResponseSuccess;
  "UpdateTeamRoutingSettings": KustomerFullApiSchemaUpdateTeamRoutingSettingsResponseSuccess;
  "GetRoutingUserStatuses": KustomerFullApiSchemaGetRoutingUserStatusesResponseSuccess;
  "CreateRoutingUserStatus": KustomerFullApiSchemaCreateRoutingUserStatusResponseSuccess;
  "GetRoutingUserStatus": KustomerFullApiSchemaGetRoutingUserStatusResponseSuccess;
  "UpdateRoutingUserStatus": KustomerFullApiSchemaUpdateRoutingUserStatusResponseSuccess;
  "GetWorkSessionsbyUserID": KustomerFullApiSchemaGetWorkSessionsbyUserIDResponseSuccess;
  "GetCurrentWorkSessionbyUserID": KustomerFullApiSchemaGetCurrentWorkSessionbyUserIDResponseSuccess;
  "GetCurrentsUserTeamRoutingSettings": KustomerFullApiSchemaGetCurrentsUserTeamRoutingSettingsResponseSuccess;
  "GetWorkItems": KustomerFullApiSchemaGetWorkItemsResponseSuccess;
  "CreateWorkItem": KustomerFullApiSchemaCreateWorkItemResponseSuccess;
  "GetWorkItem": KustomerFullApiSchemaGetWorkItemResponseSuccess;
  "UpdateWorkItem": KustomerFullApiSchemaUpdateWorkItemResponseSuccess;
  "GetWorkSessions": KustomerFullApiSchemaGetWorkSessionsResponseSuccess;
  "GetWorkSessionbyID": KustomerFullApiSchemaGetWorkSessionbyIDResponseSuccess;
  "UpdateWorkSessionbyID": KustomerFullApiSchemaUpdateWorkSessionbyIDResponseSuccess;
  "GetWorkItemsByWorkSession": KustomerFullApiSchemaGetWorkItemsByWorkSessionResponseSuccess;
  "GetCurrentWorkSession": KustomerFullApiSchemaGetCurrentWorkSessionResponseSuccess;
  "UpdateCurrentWorkSession": KustomerFullApiSchemaUpdateCurrentWorkSessionResponseSuccess;
  "GetWorkItemsinCurrentWorkSession": KustomerFullApiSchemaGetWorkItemsinCurrentWorkSessionResponseSuccess;
  "GetSatisfaction": KustomerFullApiSchemaGetSatisfactionResponseSuccess;
  "GetSatisfactionResponse": KustomerFullApiSchemaGetSatisfactionResponseByIdSuccess;
  "GetAllSchedules": KustomerFullApiSchemaGetAllSchedulesResponseSuccess;
  "CreateSchedule": KustomerFullApiSchemaCreateScheduleResponseSuccess;
  "DeleteSchedulebyID": KustomerFullApiSchemaDeleteSchedulebyIDResponseSuccess;
  "GetSchedulebyID": KustomerFullApiSchemaGetSchedulebyIDResponseSuccess;
  "UpdateSchedulebyID": KustomerFullApiSchemaUpdateSchedulebyIDResponseSuccess;
  "GetDefaultSchedule": KustomerFullApiSchemaGetDefaultScheduleResponseSuccess;
  "GetSettings": KustomerFullApiSchemaGetSettingsResponseSuccess;
  "GetaSetting": KustomerFullApiSchemaGetaSettingResponseSuccess;
  "UpdateaSetting": KustomerFullApiSchemaUpdateaSettingResponseSuccess;
  "GetAllShortcuts": KustomerFullApiSchemaGetAllShortcutsResponseSuccess;
  "CreateaShortcut": KustomerFullApiSchemaCreateaShortcutResponseSuccess;
  "DeleteaShortcut": KustomerFullApiSchemaErrorResponse5;
  "GetaShortcut": KustomerFullApiSchemaGetaShortcutResponseSuccess;
  "UpdateaShortcut": KustomerFullApiSchemaUpdateaShortcutResponseSuccess;
  "GetShortcutCategories": KustomerFullApiSchemaGetShortcutCategoriesResponseSuccess;
  "CreateaShortcutCategory": KustomerFullApiSchemaCreateaShortcutCategoryResponseSuccess;
  "DeleteaShortcutCategory": KustomerFullApiSchemaErrorResponse5;
  "GetaShortcutCategory": KustomerFullApiSchemaGetaShortcutCategoryResponseSuccess;
  "UpdateaShortcutCategory": KustomerFullApiSchemaUpdateaShortcutCategoryResponseSuccess;
  "GetSLAByID": KustomerFullApiSchemaGETanSLAbyIDResponseSuccessversionsactive;
  "GetSnippets": KustomerFullApiSchemaGetSnippetsResponseSuccess;
  "CreateSnippet": KustomerFullApiSchemaCreateSnippetResponseSuccess;
  "GetSnippetsbyID": KustomerFullApiSchemaGetSnippetsbyIDResponseSuccess;
  "PatchSnippet": KustomerFullApiSchemaPatchSnippetResponseSuccess;
  "UpdateSnippet": KustomerFullApiSchemaUpdateSnippetResponseSuccess;
  "GetAllSnoozes": KustomerFullApiSchemaGetAllSnoozesResponseSuccess;
  "GetSnoozes": {
  meta?: {
  pageSize?: number;
  page?: number;
};
  data?: ReadonlyArray<{
  type?: string;
  id?: string;
  attributes?: {
  name?: string;
  enabled?: boolean;
  value?: (number | {
  time?: string;
  day?: {
  value?: string;
  type?: string;
};
});
  type?: "relative" | "absolute" | "dynamic";
  resource?: "conversation" | "kobject";
  createdAt?: string;
  updatedAt?: string;
  modifiedAt?: string;
};
  relationships?: {
  org?: {
  data?: {
  type?: string;
  id?: string;
};
  links?: {
  self?: string;
};
};
};
  links?: {
  self?: string;
};
}>;
  links?: {
  self?: string;
  first?: string;
  prev?: string | null;
  next?: string | null;
};
};
  "CreateaSnooze": KustomerFullApiSchemaCreateaSnoozeResponseSuccess;
  "CreateSnooze": {
  data?: {
  type?: string;
  id?: string;
  attributes?: {
  name?: string;
  enabled?: boolean;
  value?: (number | {});
  type?: string;
  resource?: string;
  createdAt?: string;
  updatedAt?: string;
  modifiedAt?: string;
};
  relationships?: {};
  links?: {
  self?: string;
};
};
};
  "DeleteSnooze": KustomerFullApiSchemaErrorResponse4;
  "GetSnoozebyID": KustomerFullApiSchemaGetSnoozebyIDResponseSuccess;
  "GetSnoozeById": {
  data?: {
  type?: string;
  id?: string;
  attributes?: {
  name?: string;
  enabled?: boolean;
  value?: (number | {});
  type?: string;
  resource?: string;
  createdAt?: string;
  updatedAt?: string;
  modifiedAt?: string;
};
  relationships?: {
  org?: {
  data?: {
  type?: string;
  id?: string;
};
  links?: {
  self?: string;
};
};
};
  links?: {
  self?: string;
};
};
};
  "UpdateSnooze": {
  data?: {
  type?: string;
  id?: string;
  attributes?: {
  name?: string;
  enabled?: boolean;
  value?: (number | {});
  type?: string;
  resource?: string;
  createdAt?: string;
  updatedAt?: string;
  modifiedAt?: string;
};
  relationships?: {};
  links?: {
  self?: string;
};
};
};
  "UpdateSnoozebyID": KustomerFullApiSchemaUpdateSnoozebyIDResponseSuccess;
  "GetSnoozesByKlass": {
  data?: ReadonlyArray<{
  type?: string;
  id?: string;
  attributes?: {
  name?: string;
  enabled?: boolean;
  value?: (number | {});
  type?: string;
  resource?: string;
};
  links?: {
  self?: string;
};
}>;
};
  "GetSpamSenders": KustomerFullApiSchemaGETspamsendersResponseGETspamsenders;
  "UpsertSpamSender": KustomerFullApiSchemaUpsertaspamsenderResponseUpsertaspamsender;
  "DeleteSpamSender": KustomerFullApiSchemaErrorResponse4;
  "GetSubStatuses": {
  meta?: {
  pageSize?: number;
  page?: number;
};
  data?: ReadonlyArray<{
  type?: string;
  id?: string;
  attributes?: {
  label?: string;
  description?: string;
  parentStatus?: string;
  resourceType?: string;
  default?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
  links?: {
  self?: string;
};
}>;
  links?: {
  self?: string;
  first?: string;
  prev?: string | null;
  next?: string | null;
};
};
  "CreateSubStatus": {
  data?: {
  type?: string;
  id?: string;
  attributes?: {
  label?: string;
  description?: string;
  parentStatus?: string;
  resourceType?: string;
  default?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
  links?: {
  self?: string;
};
};
};
  "DeleteSubStatus": {
  data?: {
  type?: string;
  id?: string;
  attributes?: {
  label?: string;
  description?: string;
  parentStatus?: string;
  resourceType?: string;
  default?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
  links?: {
  self?: string;
};
};
};
  "GetSubStatusById": {
  data?: ({
  type?: string;
  id?: string;
  attributes?: {
  label?: string;
  description?: string;
  parentStatus?: string;
  resourceType?: string;
  default?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
  links?: {
  self?: string;
};
} | ReadonlyArray<{
  type?: string;
  id?: string;
  attributes?: {};
  links?: {
  self?: string;
};
}>);
};
  "UpdateSubStatus": {
  data?: {
  type?: string;
  id?: string;
  attributes?: {
  label?: string;
  description?: string;
  parentStatus?: string;
  resourceType?: string;
  default?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
  links?: {
  self?: string;
};
};
};
  "GetTeams": KustomerFullApiSchemaGetTeamsResponseSuccess;
  "CreateTeam": KustomerFullApiSchemaCreateTeamResponseSuccess;
  "DeleteTeam": KustomerFullApiSchemaErrorResponse2;
  "GetTeambyID": KustomerFullApiSchemaGetTeambyIDResponseSuccess;
  "UpdateTeamAttributes": KustomerFullApiSchemaUpdateTeamAttributesResponseSuccess;
  "UpdateTeambyID": KustomerFullApiSchemaUpdateTeambyIDResponseSuccess;
  "RemoveTeamMember": KustomerFullApiSchemaRemoveTeamMemberResponseSuccess;
  "AddTeamMember": KustomerFullApiSchemaAddTeamMemberResponseSuccess;
  "CreateaTrackingEvent": KustomerFullApiSchemaErrorResponse4;
  "CreateaTrackingIdentity": KustomerFullApiSchemaCreateaTrackingIdentityResponseSuccess;
  "CreateaTrackingIdentityEvent": KustomerFullApiSchemaCreateaTrackingIdentityEventResponseSuccess;
  "GetUsers": KustomerFullApiSchemaGetUsersResponseSuccess;
  "CreateInviteNewUser": KustomerFullApiSchemaCreateInviteNewUserResponseSuccess;
  "GetUserbyID": KustomerFullApiSchemaGetUserbyIDResponseSuccess;
  "UpdateUserbyID": KustomerFullApiSchemaUpdateUserbyIDResponseSuccess;
  "GetUserSettings": KustomerFullApiSchemaGetUserSettingsResponseSuccess;
  "GetSpecificUserSetting": KustomerFullApiSchemaGetSpecificUserSettingforCurrentUserResponseSuccess;
  "UpdateSpecificUserSetting": KustomerFullApiSchemaUpdateSpecificUserSettingResponseSuccess;
  "GetaUsersTeams": KustomerFullApiSchemaGetaUsersTeamsResponseSuccess;
  "GetMultipleUsersbyIDs": KustomerFullApiSchemaGetMultipleUsersbyIDsResponseSuccess;
  "GetCurrentUser": KustomerFullApiSchemaGetCurrentUserResponseSuccess;
  "UpdateCurrentUser": KustomerFullApiSchemaUpdateCurrentUserResponseSuccess;
  "GetUserSettingsforCurrentUser": KustomerFullApiSchemaGetUserSettingsforCurrentUserResponseSuccess;
  "GetSpecificUserSettingforCurrentUser": KustomerFullApiSchemaGetSpecificUserSettingforCurrentUserResponseSuccess;
  "UpdateSpecificUserSettingforCurrentUser": KustomerFullApiSchemaGetSpecificUserSettingforCurrentUserResponseSuccess;
  "ResetUsersPassword": KustomerFullApiSchemaErrorResponse2;
  "GetArticles": KustomerFullApiSchemaGetArticlesResponseSuccess;
  "CreateanArticle": KustomerFullApiSchemaCreateanArticleResponseSuccess;
  "GetArticlebyID": KustomerFullApiSchemaUpdateArticleResponseSuccess;
  "UpdateArticle": KustomerFullApiSchemaUpdateArticleResponseSuccess;
  "GetRoutesbyArticleID": KustomerFullApiSchemaGetRoutesbyArticleIDResponseSuccess;
  "Createarticleschedule": KustomerFullApiSchemaCreatearticlescheduleResponseSuccess;
  "DeleteArticleSchedule": KustomerFullApiSchemaDeleteArticleScheduleResponseSuccess;
  "UpdateArticleSchedule": KustomerFullApiSchemaUpdateArticleScheduleResponseSuccess;
  "DeleteVersionsofaLanguage": KustomerFullApiSchemaErrorResponse7;
  "GetArticleVersionsbyLanguage": KustomerFullApiSchemaGetArticleVersionsbyLanguageResponseSuccess;
  "CreateaVersion": KustomerFullApiSchemaCreateaVersionResponseSuccess;
  "DeleteaDraftVersion": KustomerFullApiSchemaErrorResponse7;
  "UpdateaDraftVersion": KustomerFullApiSchemaUpdateaDraftVersionResponseSuccess;
  "UpdateLatestPublishedArticleVersion": KustomerFullApiSchemaUpdateLatestPublishedArticleVersionResponseSuccess;
  "SearchArticles": KustomerFullApiSchemaSearchArticlesResponseSuccess;
  "GetCategories": KustomerFullApiSchemaGetCategoriesResponseSuccess;
  "CreateaCategory": KustomerFullApiSchemaCreateaCategoryResponseSuccess;
  "GetCategorybyID": KustomerFullApiSchemaGetCategorybyIDResponseSuccess;
  "UpdateCategory": KustomerFullApiSchemaUpdateCategoryResponseSuccess;
  "GetRoutesbyCategoryID": KustomerFullApiSchemaGetRoutesbyCategoryIDResponseSuccess;
  "CreateaCategoryRoute": KustomerFullApiSchemaCreateaCategoryRouteResponseSuccess;
  "GetForms": KustomerFullApiSchemaGetFormsResponseSuccess;
  "CreateaForm": KustomerFullApiSchemaCreateaFormResponseSuccess;
  "DeleteForm": KustomerFullApiSchemaErrorResponse7;
  "GetFormbyID": KustomerFullApiSchemaGetFormbyIDResponseSuccess;
  "UpdateForm": KustomerFullApiSchemaUpdateFormResponseSuccess;
  "GetInternalCategories": KustomerFullApiSchemaGetInternalCategoriesResponseSuccess;
  "CreateanInternalCategory": KustomerFullApiSchemaCreateanInternalCategoryResponseSuccess;
  "GetInternalCategorybyID": KustomerFullApiSchemaGetInternalCategorybyIDResponseSuccess;
  "CreateKnowledgeBase": KustomerFullApiSchemaCreateKnowledgeBaseResponseSuccess;
  "GetKnowledgeBasebyID": KustomerFullApiSchemaGetKnowledgeBasebyIDResponseSuccess;
  "UpdateKnowledgeBase": KustomerFullApiSchemaUpdateKnowledgeBaseResponseSuccess;
  "CreateCustomDomain": KustomerFullApiSchemaErrorResponse7;
  "DeleteCustomDomain": KustomerFullApiSchemaErrorResponse7;
  "UpdateCustomDomain": KustomerFullApiSchemaErrorResponse7;
  "GetCustomDomains": KustomerFullApiSchemaErrorResponse7;
  "GetCustomDomainByID": KustomerFullApiSchemaErrorResponse7;
  "GetRoutebyURL(Public)": KustomerFullApiSchemaGetRoutebyURLPublicResponseSuccess;
  "GetRoutes": KustomerFullApiSchemaGetRoutesResponseSuccess;
  "CreateaRoute": KustomerFullApiSchemaCreateaRouteResponseSuccess;
  "DeleteRoutebyID": KustomerFullApiSchemaErrorResponse7;
  "GetRoutebyID": KustomerFullApiSchemaGetRoutebyIDResponseSuccess;
  "UpdateRoute": KustomerFullApiSchemaUpdateRouteResponseSuccess;
  "GetArticleVersionbyID": KustomerFullApiSchemaGetArticleVersionbyIDResponseSuccess;
  "GetTags": KustomerFullApiSchemaGetTagsResponseSuccess;
  "CreateTag": KustomerFullApiSchemaCreateTagResponseSuccess;
  "GetTagsbyID": KustomerFullApiSchemaGetTagsbyIDResponseSuccess;
  "UpdateTag": KustomerFullApiSchemaUpdateTagResponseSuccess;
  "GetTemplates": KustomerFullApiSchemaGetTemplatesResponseSuccess;
  "GetTemplatesbyID": KustomerFullApiSchemaGetTemplatesbyIDResponseSuccess;
  "GetThemes": KustomerFullApiSchemaGetThemesResponseSuccess;
  "CreateaTheme": KustomerFullApiSchemaCreateaThemeResponseSuccess;
  "GetThemesbyID": KustomerFullApiSchemaGetThemesbyIDResponseSuccess;
  "GetThemeRevisions": KustomerFullApiSchemaGetThemeRevisionsResponseSuccess;
  "GetThemeRevisionbyID": KustomerFullApiSchemaGetThemeRevisionbyIDResponseSuccess;
  "GetThemeFilesbyRevision": KustomerFullApiSchemaGetThemeFilesbyRevisionResponseSuccess;
  "CreateRevisionThemeFile": KustomerFullApiSchemaCreateRevisionThemeFileResponseSuccess;
  "DeleteRevisionThemeFile": KustomerFullApiSchemaErrorResponse7;
  "GetThemeFilebyRevision": KustomerFullApiSchemaGetThemeFilebyRevisionResponseSuccess;
  "UpdateRevisionThemeFile": KustomerFullApiSchemaUpdateRevisionThemeFileResponseSuccess;
  "DeleteThemeDraftRevision": KustomerFullApiSchemaErrorResponse7;
  "CreateThemeDraftRevision": KustomerFullApiSchemaCreateThemeDraftRevisionResponseSuccess;
  "UpdateThemeDraftRevision": KustomerFullApiSchemaUpdateThemeDraftRevisionResponseSuccess;
  "DeleteWorkflowVariable": void;
  "GetWorkflowVariable": KustomerFullApiSchemaGetWorkflowVariableResponseSuccess;
  "UpdateWorkflowVariable": KustomerFullApiSchemaUpdateWorkflowVariableResponseSuccess;
  "GetWorkflows": KustomerFullApiSchemaGetWorkflowsResponseSuccess;
  "CreateWorkflow": KustomerFullApiSchemaCreateWorkflowResponseSuccess;
  "GetWorkflow": KustomerFullApiSchemaGetWorkflowResponseSuccess;
  "UpdateWorkflow": KustomerFullApiSchemaUpdateWorkflowResponseSuccess;
  "GetProcessesbyWorkflow": KustomerFullApiSchemaGetProcessesbyWorkflowResponseGetProcessesbyWorkflow;
  "GetAllVariablesforSpecificWorkflowID": KustomerFullApiSchemaGetAllVariablesforSpecificWorkflowIDResponseSuccess;
  "CreateWorkflowVariableforSpecificWorkflowID": KustomerFullApiSchemaCreateWorkflowVariableforSpecificWorkflowIDResponseSuccess;
}
