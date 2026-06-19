export type SesEmailJsonPrimitive = string | number | boolean | null;
export type SesEmailJsonValue =
  | SesEmailJsonPrimitive
  | SesEmailJsonObject
  | readonly SesEmailJsonValue[];
export type SesEmailProviderExtensionValue = SesEmailJsonValue | object | undefined;
export interface SesEmailJsonObject {
  [key: string]: SesEmailProviderExtensionValue;
}
export type SesEmailProviderPayload = SesEmailJsonObject | object;
export type SesEmailProviderQuery = Record<string, SesEmailProviderExtensionValue>;
export interface SesEmailProviderResponse extends SesEmailJsonObject {}
export interface SesEmailProviderExtensionFields extends SesEmailJsonObject {}

export interface SesEmailClientOptions {
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
  sessionToken?: string;
  apiBaseUrl?: string;
  fetch?: typeof fetch;
  crypto?: SesCryptoProvider;
  now?: () => Date;
  signal?: AbortSignal | undefined;
}

export interface SesCredentialStatusInput {
  accessKeyConfigured?: boolean;
  secretKeyConfigured?: boolean;
  region?: string;
  senderIdentity?: string;
  snsConfigured?: boolean;
  sqsConfigured?: boolean;
  webhookVerificationConfigured?: boolean;
  sessionTokenConfigured?: boolean;
}

export interface SesEmailAddress {
  EmailAddress: string;
}

export type SesJsonPrimitive = string | number | boolean | null;
export type SesJsonValue = SesJsonPrimitive | SesJsonObject | SesJsonValue[];
export interface SesJsonObject {
  [key: string]: SesJsonValue | undefined;
}

export interface SesDestination {
  ToAddresses?: string[];
  CcAddresses?: string[];
  BccAddresses?: string[];
}

export interface SesMessageBodyPart {
  Data: string;
  Charset?: string;
}

export type SesAttachmentContentDisposition = "ATTACHMENT" | "INLINE";
export type SesAttachmentContentTransferEncoding =
  | "BASE64"
  | "QUOTED_PRINTABLE"
  | "SEVEN_BIT";

export interface SesAttachment {
  RawContent: string;
  FileName: string;
  ContentDescription?: string;
  ContentDisposition?: SesAttachmentContentDisposition;
  ContentId?: string;
  ContentTransferEncoding?: SesAttachmentContentTransferEncoding;
  ContentType?: string;
}

export interface SesSimpleEmailContent {
  Subject: SesMessageBodyPart;
  Body: {
    Text?: SesMessageBodyPart;
    Html?: SesMessageBodyPart;
  };
  Headers?: Array<{ Name: string; Value: string }>;
  Attachments?: SesAttachment[];
}

export interface SesTemplateEmailContent {
  TemplateName?: string;
  TemplateArn?: string;
  TemplateData?: string;
  Headers?: Array<{ Name: string; Value: string }>;
  Attachments?: SesAttachment[];
}

export interface SesRawEmailContent {
  Data: string;
}

export interface SesEmailContent {
  Simple?: SesSimpleEmailContent;
  Template?: SesTemplateEmailContent;
  Raw?: SesRawEmailContent;
}

export interface SesProviderRequestOptions {
  signal?: AbortSignal | undefined;
}

export interface SesSendEmailInput extends SesProviderRequestOptions {
  FromEmailAddress?: string;
  FromEmailAddressIdentityArn?: string;
  Destination?: SesDestination;
  ReplyToAddresses?: string[];
  FeedbackForwardingEmailAddress?: string;
  FeedbackForwardingEmailAddressIdentityArn?: string;
  Content: SesEmailContent;
  EmailTags?: Array<{ Name: string; Value: string }>;
  ConfigurationSetName?: string;
  EndpointId?: string;
  ListManagementOptions?: {
    ContactListName: string;
    TopicName?: string;
  };
  TenantName?: string;
}

export interface SesSendEmailResponse {
  MessageId?: string;
}

export interface SesIdentitySummary {
  IdentityType?: "EMAIL_ADDRESS" | "DOMAIN" | "MANAGED_DOMAIN";
  IdentityName?: string;
  SendingEnabled?: boolean;
  VerificationStatus?:
    | "PENDING"
    | "SUCCESS"
    | "FAILED"
    | "TEMPORARY_FAILURE"
    | "NOT_STARTED";
}

export interface SesListEmailIdentitiesInput extends SesProviderRequestOptions {
  NextToken?: string;
  PageSize?: number;
}

export interface SesListEmailIdentitiesResponse {
  EmailIdentities?: SesIdentitySummary[];
  NextToken?: string;
}

export interface SesAccountResponse {
  DedicatedIpAutoWarmupEnabled?: boolean;
  EnforcementStatus?: string;
  ProductionAccessEnabled?: boolean;
  SendingEnabled?: boolean;
  SendQuota?: {
    Max24HourSend?: number;
    MaxSendRate?: number;
    SentLast24Hours?: number;
  };
  SuppressionAttributes?: {
    SuppressedReasons?: SesSuppressionReason[];
  };
}

export interface SesListTemplatesInput extends SesProviderRequestOptions {
  NextToken?: string;
  PageSize?: number;
}

export interface SesListTemplatesResponse {
  TemplatesMetadata?: SesEmailTemplateMetadata[];
  NextToken?: string;
}

export interface SesEmailTemplateMetadata {
  TemplateName?: string;
  CreatedTimestamp?: number;
}

export interface SesListConfigurationSetsInput extends SesProviderRequestOptions {
  NextToken?: string;
  PageSize?: number;
}

export interface SesListConfigurationSetsResponse {
  ConfigurationSets?: SesConfigurationSetSummary[];
  NextToken?: string;
}

export interface SesConfigurationSetSummary {
  ConfigurationSetName?: string;
}

export type SesSuppressionReason = "BOUNCE" | "COMPLAINT";

export type SesHttpMethod = "DELETE" | "GET" | "PATCH" | "POST" | "PUT";

export interface SesResource extends SesJsonObject {}

export type SesQueryValue =
  | string
  | number
  | boolean
  | readonly (string | number | boolean)[]
  | undefined
  | null;
export type SesQueryParams = Record<string, SesQueryValue>;
export type SesPathParams = Record<string, string | number | boolean | undefined>;

export interface SesOperationRequestInput extends SesProviderRequestOptions {
  pathParams?: SesPathParams | undefined;
  query?: SesQueryParams | undefined;
  /** Escape hatch for generated AWS API model operations whose shapes are not projected into TypeScript yet. */
  body?: SesEmailProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
}

export interface SesListSuppressedDestinationsInput extends SesProviderRequestOptions {
  NextToken?: string;
  PageSize?: number;
  StartDate?: string | number;
  EndDate?: string | number;
  TenantName?: string;
}

export interface SesListSuppressedDestinationsResponse {
  SuppressedDestinationSummaries?: Array<{
    EmailAddress?: string;
    LastUpdateTime?: number;
    Reason?: SesSuppressionReason;
  }>;
  NextToken?: string;
}

export interface SesSuppressedDestinationResponse {
  SuppressedDestination?: {
    EmailAddress?: string;
    LastUpdateTime?: number;
    Reason?: SesSuppressionReason;
    Attributes?: {
      MessageId?: string;
      FeedbackId?: string;
    };
  };
}

export interface SesDeleteSuppressedDestinationInput extends SesProviderRequestOptions {
  EmailAddress: string;
  TenantName?: string;
}

export interface SesConfigurationSetEventDestinationsResponse {
  EventDestinations?: SesEventDestination[];
}

export interface SesEventDestination {
  Name?: string;
  Enabled?: boolean;
  MatchingEventTypes?: string[];
  KinesisFirehoseDestination?: SesJsonObject;
  CloudWatchDestination?: SesJsonObject;
  SnsDestination?: { TopicArn?: string };
  EventBridgeDestination?: { EventBusArn?: string };
  PinpointDestination?: { ApplicationArn?: string };
}

export interface SesOperationRequestMap {
  "sesv2:SendEmail": { body: SesSendEmailInput };
  "sesv2:GetAccount": {};
  "sesv2:ListEmailIdentities": { query?: SesListEmailIdentitiesInput & SesQueryParams };
  "sesv2:ListEmailTemplates": { query?: SesListTemplatesInput & SesQueryParams };
  "sesv2:ListConfigurationSets": { query?: SesListConfigurationSetsInput & SesQueryParams };
  "sesv2:GetConfigurationSetEventDestinations": { pathParams: { ConfigurationSetName: string } };
  "sesv2:ListSuppressedDestinations": { query?: SesListSuppressedDestinationsInput & SesQueryParams };
  "sesv2:GetSuppressedDestination": { pathParams: { EmailAddress: string } };
  "sesv2:DeleteSuppressedDestination": {
    pathParams: { EmailAddress: string };
    query?: Pick<SesDeleteSuppressedDestinationInput, "TenantName"> & SesQueryParams;
  };
}

export interface SesOperationResponseMap {
  "sesv2:SendEmail": SesSendEmailResponse;
  "sesv2:GetAccount": SesAccountResponse;
  "sesv2:ListEmailIdentities": SesListEmailIdentitiesResponse;
  "sesv2:ListEmailTemplates": SesListTemplatesResponse;
  "sesv2:ListConfigurationSets": SesListConfigurationSetsResponse;
  "sesv2:GetConfigurationSetEventDestinations": SesConfigurationSetEventDestinationsResponse;
  "sesv2:ListSuppressedDestinations": SesListSuppressedDestinationsResponse;
  "sesv2:GetSuppressedDestination": SesSuppressedDestinationResponse;
  "sesv2:DeleteSuppressedDestination": Record<string, never>;
}

export interface SesCryptoProvider {
  sha256Hex(input: string): Promise<string>;
  hmacSha256(key: Uint8Array | string, input: string): Promise<Uint8Array>;
}
