import type {
  MailgunFullApiGeneratedClient,
  MailgunGeneratedOperationCaller,
} from "./full-api-client.generated.js";

export type MailgunEmailJsonPrimitive = string | number | boolean | null;
export type MailgunEmailJsonValue =
  | MailgunEmailJsonPrimitive
  | MailgunEmailJsonObject
  | readonly MailgunEmailJsonValue[];
export type MailgunEmailProviderExtensionValue = MailgunEmailJsonValue | object | undefined;
export interface MailgunEmailJsonObject {
  [key: string]: MailgunEmailProviderExtensionValue;
}
export type MailgunEmailProviderPayload = MailgunEmailJsonObject | object;
export type MailgunEmailProviderQuery = Record<string, MailgunEmailProviderExtensionValue>;
export interface MailgunEmailProviderResponse extends MailgunEmailJsonObject {}
export interface MailgunEmailProviderExtensionFields extends MailgunEmailJsonObject {}

export interface MailgunEmailClientOptions {
  apiKey: string;
  domain: string;
  region?: "us" | "eu" | string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
}

export interface MailgunCredentialStatusInput {
  apiKeyConfigured?: boolean;
  domain?: string;
  region?: "us" | "eu" | string;
  webhookSigningKeyConfigured?: boolean;
}

export type MailgunJsonPrimitive = string | number | boolean | null;
export type MailgunJsonValue = MailgunJsonPrimitive | MailgunJsonObject | MailgunJsonValue[];
export interface MailgunJsonObject {
  [key: string]: MailgunJsonValue | undefined;
}

export interface MailgunAttachmentInput {
  name: string;
  content: Blob | string;
  filename?: string;
}

export interface MailgunEmailInput {
  from: string;
  to: string | string[];
  subject: string;
  cc?: string | string[];
  bcc?: string | string[];
  text?: string;
  html?: string;
  "o:tag"?: string | string[];
  "o:tracking"?: boolean | "yes" | "no" | "htmlonly";
  "o:tracking-clicks"?: boolean | "yes" | "no" | "htmlonly";
  "o:tracking-opens"?: boolean | "yes" | "no";
  template?: string;
  "t:version"?: string;
  "h:Reply-To"?: string;
  attachment?: MailgunAttachmentInput[];
  inline?: MailgunAttachmentInput[];
  variables?: MailgunJsonObject;
  custom?: Record<string, string | number | boolean | undefined>;
}

export interface MailgunSendResponse {
  id?: string;
  message?: string;
}

export interface MailgunMimeInput {
  to?: string | string[];
  message: Blob | ArrayBuffer | Uint8Array | string;
}

export interface MailgunEventsSearchInput {
  begin?: string;
  end?: string;
  ascending?: "yes" | "no" | boolean;
  limit?: number;
  event?: string;
  recipient?: string;
  messageId?: string;
  tags?: string | string[];
  severity?: string;
}

export interface MailgunEventsResponse {
  items?: MailgunEventResource[];
  paging?: Record<string, string>;
}

export interface MailgunEventResource {
  id?: string;
  event?: string;
  severity?: string;
  timestamp?: number;
  recipient?: string;
  sender?: string;
  subject?: string;
  tags?: string[];
  message?: {
    headers?: {
      from?: string;
      to?: string;
      subject?: string;
      "message-id"?: string;
    };
    attachments?: MailgunStoredAttachment[];
    size?: number;
  };
  storage?: {
    key?: string;
    url?: string;
  };
  reason?: string;
  delivery_status?: {
    code?: number;
    message?: string;
    description?: string;
    session_seconds?: number;
  };
  user_variables?: MailgunJsonObject;
}

export interface MailgunRoutesSearchInput {
  skip?: number;
  limit?: number;
}

export interface MailgunRoutesResponse {
  total_count?: number;
  items?: MailgunRouteResource[];
}

export interface MailgunRouteResource {
  id?: string;
  priority?: number;
  description?: string;
  expression?: string;
  actions?: string[];
  created_at?: string;
}

export type MailgunSuppressionList = "bounces" | "complaints" | "unsubscribes";

export interface MailgunSuppressionRecord {
  address?: string;
  code?: string;
  error?: string;
  created_at?: string;
  tags?: string[];
}

export interface MailgunDomainTemplatesInput {
  limit?: number;
  page?: "first" | "last" | "next" | "previous" | string;
  p?: string;
}

export interface MailgunDomainTemplatesResponse {
  items?: MailgunDomainTemplateResource[];
  paging?: Record<string, string>;
}

export interface MailgunDomainTemplateResource {
  name?: string;
  description?: string;
  createdAt?: string;
  created_at?: string;
  version?: {
    tag?: string;
    engine?: string;
    active?: boolean;
    createdAt?: string;
  };
}

export interface MailgunStoredAttachment {
  name?: string;
  "content-type"?: string;
  size?: number;
  url?: string;
}

export interface MailgunStoredMessage {
  recipients?: string;
  sender?: string;
  subject?: string;
  from?: string;
  "body-plain"?: string;
  "body-html"?: string;
  "stripped-text"?: string;
  "stripped-html"?: string;
  "message-headers"?: Array<[string, string]>;
  attachments?: MailgunStoredAttachment[];
}

export interface MailgunWebhookResource {
  id?: string;
  url?: string;
  urls?: string[];
}

export type MailgunWebhookName =
  | "accepted"
  | "clicked"
  | "complained"
  | "delivered"
  | "opened"
  | "permanent_fail"
  | "temporary_fail"
  | "unsubscribed";

export interface MailgunDomainResource {
  id?: string;
  name?: string;
  state?: string;
  type?: string;
  require_tls?: boolean;
  skip_verification?: boolean;
  smtp_login?: string;
  spam_action?: string;
  created_at?: string;
  receiving_dns_records?: MailgunDnsRecord[];
  sending_dns_records?: MailgunDnsRecord[];
}

export interface MailgunDnsRecord {
  record_type?: string;
  valid?: "valid" | "unknown" | "invalid" | string;
  name?: string;
  value?: string;
  priority?: string;
}

export interface MailgunDomainResponse {
  domain?: MailgunDomainResource;
  receiving_dns_records?: MailgunDnsRecord[];
  sending_dns_records?: MailgunDnsRecord[];
}

export type MailgunHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface MailgunResource extends MailgunJsonObject {}

export type MailgunQueryValue = string | number | boolean | readonly (string | number | boolean)[] | undefined | null;
export type MailgunQueryParams = Record<string, MailgunQueryValue>;
export type MailgunPathParams = Record<string, string | number | boolean | undefined>;

export interface MailgunOperationRequestInput {
  pathParams?: MailgunPathParams | undefined;
  query?: MailgunQueryParams | undefined;
  /** Escape hatch for generated OpenAPI operations whose schemas are not projected into TypeScript yet. */
  body?: MailgunEmailProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
}

export interface MailgunEventWebhook {
  signature?: {
    timestamp?: string;
    token?: string;
    signature?: string;
    "parent-signature"?: string;
  };
  "event-data"?: MailgunEventResource;
}

export interface MailgunInboundRouteMessage {
  signature?: string | undefined;
  timestamp?: string | undefined;
  token?: string | undefined;
  subject?: string | undefined;
  sender?: string | undefined;
  from?: string | undefined;
  recipient?: string | undefined;
  "body-plain"?: string | undefined;
  "body-html"?: string | undefined;
  "body-mime"?: string | undefined;
  "message-headers"?: string | undefined;
  "attachment-count"?: string | undefined;
  verifiedSignature: boolean;
  fields: Record<string, FormDataEntryValue>;
}

export interface ParseMailgunWebhookOptions {
  signingKey?: string;
  requireVerifiedSignature?: boolean;
  toleranceSeconds?: number;
  now?: () => number;
}

export interface MailgunOperationRequestMap {
  "POST /v3/{domain_name}/messages": {
    pathParams: { domain_name: string };
    body: FormData | URLSearchParams | MailgunEmailInput;
  };
  "POST /v3/{domain_name}/messages.mime": {
    pathParams: { domain_name: string };
    body: FormData;
  };
  "GET /v3/domains/{domain_name}/messages/{storage_key}": {
    pathParams: { domain_name: string; storage_key: string };
  };
  "GET /v3/{domain_name}/events": {
    pathParams: { domain_name: string };
    query?: MailgunEventsSearchInput & MailgunQueryParams;
  };
  "GET /v4/domains/{name}": {
    pathParams: { name: string };
  };
  "GET /v3/domains/{domain}/webhooks": {
    pathParams: { domain: string };
  };
  "GET /v3/routes": {
    query?: MailgunRoutesSearchInput & MailgunQueryParams;
  };
  "GET /v3/{domain_name}/bounces/{address}": { pathParams: { domain_name: string; address: string } };
  "GET /v3/{domain_name}/complaints/{address}": { pathParams: { domain_name: string; address: string } };
  "GET /v3/{domain_name}/unsubscribes/{address}": { pathParams: { domain_name: string; address: string } };
  "GET /v3/{domain_name}/templates": {
    pathParams: { domain_name: string };
    query?: MailgunDomainTemplatesInput & MailgunQueryParams;
  };
}

export interface MailgunOperationResponseMap {
  "POST /v3/{domain_name}/messages": MailgunSendResponse;
  "POST /v3/{domain_name}/messages.mime": MailgunSendResponse;
  "GET /v3/domains/{domain_name}/messages/{storage_key}": MailgunStoredMessage;
  "GET /v3/{domain_name}/events": MailgunEventsResponse;
  "GET /v4/domains/{name}": MailgunDomainResponse;
  "GET /v3/domains/{domain}/webhooks": { webhooks?: Record<MailgunWebhookName | string, MailgunWebhookResource | string[]> };
  "GET /v3/routes": MailgunRoutesResponse;
  "GET /v3/{domain_name}/bounces/{address}": MailgunSuppressionRecord;
  "GET /v3/{domain_name}/complaints/{address}": MailgunSuppressionRecord;
  "GET /v3/{domain_name}/unsubscribes/{address}": MailgunSuppressionRecord;
  "GET /v3/{domain_name}/templates": MailgunDomainTemplatesResponse;
}

export interface MailgunEmailClient {
  fullApi: MailgunFullApiGeneratedClient;
  requestOperation: MailgunGeneratedOperationCaller;
  sendEmail(input: MailgunEmailInput): Promise<MailgunSendResponse>;
  sendMime(input: MailgunMimeInput): Promise<MailgunSendResponse>;
  getStoredMessage(storageKey: string): Promise<MailgunStoredMessage>;
  searchEvents(input?: MailgunEventsSearchInput): Promise<MailgunEventsResponse>;
  getDomain(): Promise<MailgunDomainResponse>;
  listWebhooks(): Promise<MailgunWebhookResource[]>;
  listRoutes(input?: MailgunRoutesSearchInput): Promise<MailgunRoutesResponse>;
  getSuppression(list: MailgunSuppressionList, address: string): Promise<MailgunSuppressionRecord>;
  listDomainTemplates(input?: MailgunDomainTemplatesInput): Promise<MailgunDomainTemplatesResponse>;
}

export interface MailgunLiveCheckOptions extends MailgunEmailClientOptions {
  client?: Pick<MailgunEmailClient, "getDomain" | "listWebhooks">;
}
