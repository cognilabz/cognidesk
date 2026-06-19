// Generated provider schema DTOs for PostmarkFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type PostmarkFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type PostmarkFullApiSchemaJsonValue = PostmarkFullApiSchemaJsonPrimitive | readonly PostmarkFullApiSchemaJsonValue[] | { readonly [key: string]: PostmarkFullApiSchemaJsonValue | undefined };

export type PostmarkFullApiSchemaBounceActivationResponse = {
  Message?: string;
  Bounce?: PostmarkFullApiSchemaBounceInfoResponse;
};

export type PostmarkFullApiSchemaStandardPostmarkResponse = {
  ErrorCode?: number;
  Message?: string;
};

export type PostmarkFullApiSchemaDomainCreationModel = {
  Name?: string;
  ReturnPathDomain?: string;
};

export type PostmarkFullApiSchemaDomainExtendedInformation = {
  Name?: string;
  SPFVerified?: boolean;
  SPFHost?: string;
  SPFTextValue?: string;
  DKIMVerified?: boolean;
  WeakDKIM?: boolean;
  DKIMHost?: string;
  DKIMTestValue?: string;
  DKIMPendingHost?: string;
  DKIMPendingTextValue?: string;
  DKIMRevokedHost?: string;
  DKIMRevokedTextValue?: string;
  SafeToRemoveRevokedKeyFromDNS?: boolean;
  DKIMUpdateStatus?: string;
  ReturnPathDomain?: string;
  ReturnPathDomainVerified?: boolean;
  ReturnPathDomainCNAMEValue?: string;
  ID?: number;
};

export type PostmarkFullApiSchemaCreateInboundRuleRequest = {
  Rule?: string;
};

export type PostmarkFullApiSchemaSenderSignatureCreationModel = {
  FromEmail?: string;
  Name?: string;
  ReplyToEmail?: string;
  ReturnPathDomain?: string;
};

export type PostmarkFullApiSchemaSenderSignatureExtendedInformation = {
  Domain?: string;
  EmailAddress?: string;
  ReplyToEmailAddress?: string;
  Name?: string;
  Confirmed?: boolean;
  SPFVerified?: boolean;
  SPFHost?: string;
  SPFTextValue?: string;
  DKIMVerified?: boolean;
  WeakDKIM?: boolean;
  DKIMHost?: string;
  DKIMTestValue?: string;
  DKIMPendingHost?: string;
  DKIMPendingTextValue?: string;
  DKIMRevokedHost?: string;
  DKIMRevokedTextValue?: string;
  SafeToRemoveRevokedKeyFromDNS?: boolean;
  DKIMUpdateStatus?: string;
  ReturnPathDomain?: string;
  ReturnPathDomainVerified?: boolean;
  ReturnPathDomainCNAMEValue?: string;
  ID?: number;
};

export type PostmarkFullApiSchemaCreateServerPayload = {
  Name?: string;
  Color?: string;
  RawEmailEnabled?: boolean;
  DeliveryHookUrl?: string;
  SmtpApiActivated?: boolean;
  InboundHookUrl?: string;
  BounceHookUrl?: string;
  OpenHookUrl?: string;
  PostFirstOpenOnly?: boolean;
  TrackOpens?: boolean;
  TrackLinks?: "None" | "HtmlAndTextTracking" | "HtmlOnlyTracking" | "TextOnlyTracking";
  ClickHookUrl?: string;
  InboundDomain?: string;
  InboundSpamThreshold?: number;
};

export type PostmarkFullApiSchemaExtendedServerInfo = {
  ID?: number;
  Name?: string;
  ApiTokens?: ReadonlyArray<string>;
  ServerLink?: string;
  Color?: string;
  SmtpApiActivated?: boolean;
  RawEmailEnabled?: boolean;
  DeliveryHookUrl?: string;
  InboundAddress?: string;
  InboundHookUrl?: string;
  BounceHookUrl?: string;
  OpenHookUrl?: string;
  PostFirstOpenOnly?: boolean;
  TrackOpens?: boolean;
  TrackLinks?: "None" | "HtmlAndTextTracking" | "HtmlOnlyTracking" | "TextOnlyTracking";
  ClickHookUrl?: string;
  InboundDomain?: string;
  InboundHash?: string;
  InboundSpamThreshold?: number;
};

export type PostmarkFullApiSchemaStandardPostmarkResponse2 = {
  ErrorCode?: number;
  Message?: string;
};

export type PostmarkFullApiSchemaTemplateDetailResponse = {
  Name?: string;
  Alias?: string;
  TemplateID?: number;
  HtmlBody?: string;
  TextBody?: string;
  AssociatedServerId?: number;
  Subject?: string;
  Active?: boolean;
};

export type PostmarkFullApiSchemaEditServerConfigurationRequest = {
  Name?: string;
  Color?: "purple" | "blue" | "turqoise" | "green" | "red" | "yellow" | "grey";
  RawEmailEnabled?: boolean;
  DeliveryHookUrl?: string;
  SmtpApiActivated?: boolean;
  InboundHookUrl?: string;
  BounceHookUrl?: string;
  OpenHookUrl?: string;
  PostFirstOpenOnly?: boolean;
  TrackOpens?: boolean;
  TrackLinks?: "None" | "HtmlAndText" | "HtmlOnly" | "TextOnly";
  ClickHookUrl?: string;
  InboundDomain?: string;
  InboundSpamThreshold?: number;
};

export type PostmarkFullApiSchemaServerConfigurationResponse = {
  ID?: number;
  Name?: string;
  ApiTokens?: ReadonlyArray<string>;
  ServerLink?: string;
  Color?: "purple" | "blue" | "turqoise" | "green" | "red" | "yellow" | "grey";
  InboundAddress?: string;
  RawEmailEnabled?: boolean;
  DeliveryHookUrl?: string;
  SmtpApiActivated?: boolean;
  InboundHookUrl?: string;
  BounceHookUrl?: string;
  OpenHookUrl?: string;
  PostFirstOpenOnly?: boolean;
  TrackOpens?: boolean;
  TrackLinks?: "None" | "HtmlAndText" | "HtmlOnly" | "TextOnly";
  ClickHookUrl?: string;
  InboundDomain?: string;
  InboundHash?: string;
  InboundSpamThreshold?: number;
};

export type PostmarkFullApiSchemaDomainEditingModel = {
  ReturnPathDomain?: string;
};

export type PostmarkFullApiSchemaSenderSignatureEditingModel = {
  Name?: string;
  ReplyToEmail?: string;
  ReturnPathDomain?: string;
};

export type PostmarkFullApiSchemaEditServerPayload = {
  Name?: string;
  Color?: string;
  RawEmailEnabled?: boolean;
  DeliveryHookUrl?: string;
  SmtpApiActivated?: boolean;
  InboundHookUrl?: string;
  BounceHookUrl?: string;
  OpenHookUrl?: string;
  PostFirstOpenOnly?: boolean;
  TrackOpens?: boolean;
  TrackLinks?: "None" | "HtmlAndTextTracking" | "HtmlOnlyTracking" | "TextOnlyTracking";
  ClickHookUrl?: string;
  InboundDomain?: string;
  InboundSpamThreshold?: number;
};

export type PostmarkFullApiSchemaBounceSearchResponse = {
  TotalCount?: number;
  Bounces?: ReadonlyArray<PostmarkFullApiSchemaBounceInfoResponse>;
};

export type PostmarkFullApiSchemaBounceDumpResponse = {
  Body?: string;
};

export type PostmarkFullApiSchemaMessageClickSearchResponse = {
  TotalCount?: number;
  Clicks?: ReadonlyArray<PostmarkFullApiSchemaExtendedMessageClickEventInformation>;
};

export type PostmarkFullApiSchemaDeliveryStatsResponse = {
  InactiveMails?: number;
  Bounces?: ReadonlyArray<PostmarkFullApiSchemaBounceCountElement>;
};

export type PostmarkFullApiSchemaInboundMessageFullDetailsResponse = {
  From?: string;
  FromName?: string;
  FromFull?: {
  Email?: string;
  Name?: string;
};
  To?: string;
  ToFull?: ReadonlyArray<PostmarkFullApiSchemaEmailNameAddressPair>;
  Cc?: string;
  CcFull?: ReadonlyArray<PostmarkFullApiSchemaEmailNameAddressPair>;
  ReplyTo?: string;
  OriginalRecipient?: string;
  Subject?: string;
  Date?: string;
  MailboxHash?: string;
  TextBody?: string;
  HtmlBody?: string;
  Tag?: string;
  Headers?: PostmarkFullApiSchemaHeaderCollection;
  Attachments?: PostmarkFullApiSchemaAttachmentCollection;
  MessageID?: string;
  BlockedReason?: string;
  Status?: string;
};

export type PostmarkFullApiSchemaMessageOpenSearchResponse = {
  TotalCount?: number;
  Opens?: ReadonlyArray<PostmarkFullApiSchemaExtendedMessageOpenEventInformation>;
};

export type PostmarkFullApiSchemaDynamicResponse = PostmarkFullApiSchemaJsonValue;

export type PostmarkFullApiSchemaOutboundMessageDetailsResponse = {
  TextBody?: string;
  HtmlBody?: string;
  Body?: string;
  Tag?: string;
  MessageID?: string;
  To?: ReadonlyArray<PostmarkFullApiSchemaEmailNameAddressPair>;
  Cc?: ReadonlyArray<PostmarkFullApiSchemaEmailNameAddressPair>;
  Bcc?: ReadonlyArray<PostmarkFullApiSchemaEmailNameAddressPair>;
  Recipients?: ReadonlyArray<string>;
  ReceivedAt?: string;
  From?: string;
  Subject?: string;
  Attachments?: PostmarkFullApiSchemaAttachmentCollection;
  Status?: string;
  TrackOpens?: boolean;
  TrackLinks?: "None" | "HtmlAndText" | "HtmlOnly" | "TextOnly";
  MessageEvents?: ReadonlyArray<PostmarkFullApiSchemaMessageEventDetails>;
};

export type PostmarkFullApiSchemaOutboundMessageDumpResponse = {
  Body?: string;
};

export type PostmarkFullApiSchemaOutboundOverviewStatsResponse = {
  Sent?: number;
  Bounced?: number;
  SMTPAPIErrors?: number;
  BounceRate?: number;
  SpamComplaints?: number;
  SpamComplaintsRate?: number;
  Opens?: number;
  UniqueOpens?: number;
  Tracked?: number;
  WithOpenTracking?: number;
  WithLinkTracking?: number;
  TotalClicks?: number;
  UniqueLinksClicked?: number;
  TotalTrackedLinksSent?: number;
  WithClientRecorded?: number;
  WithPlatformRecorded?: number;
};

export type PostmarkFullApiSchemaSentCountsResponse = {
  Sent?: number;
  Days?: ReadonlyArray<{
  Date?: string;
  Sent?: number;
}>;
};

export type PostmarkFullApiSchemaBounceInfoResponse = {
  ID?: string;
  Type?: string;
  TypeCode?: number;
  Name?: string;
  Tag?: string;
  MessageID?: string;
  Description?: string;
  Details?: string;
  Email?: string;
  BouncedAt?: string;
  DumpAvailable?: boolean;
  Inactive?: boolean;
  CanActivate?: boolean;
  Subject?: string;
  Content?: string;
};

export type PostmarkFullApiSchemaDomainListingResults = {
  TotalCount?: number;
  Domains?: ReadonlyArray<PostmarkFullApiSchemaDomainInformation>;
};

export type PostmarkFullApiSchemaSenderListingResults = {
  TotalCount?: number;
  SenderSignatures?: ReadonlyArray<PostmarkFullApiSchemaSenderSignatureInformation>;
};

export type PostmarkFullApiSchemaServerListingResponse = {
  TotalCount?: number;
  Servers?: ReadonlyArray<PostmarkFullApiSchemaExtendedServerInfo>;
};

export type PostmarkFullApiSchemaTemplateListingResponse = {
  TotalCount?: number;
  "Templates API"?: ReadonlyArray<PostmarkFullApiSchemaTemplateRecordResponse>;
};

export type PostmarkFullApiSchemaCreateTemplateRequest = {
  Alias?: string;
  Name: string;
  Subject: string;
  HtmlBody?: string;
  TextBody?: string;
};

export type PostmarkFullApiSchemaTemplateRecordResponse = {
  Name?: string;
  Alias?: string;
  TemplateId?: number;
  Active?: boolean;
};

export type PostmarkFullApiSchemaTemplatesPushModel = {
  SourceServerId?: number;
  DestinationServerId?: number;
  PerformChanges?: boolean;
};

export type PostmarkFullApiSchemaTemplatesPushResponse = {
  TotalCount?: number;
  Templates?: ReadonlyArray<{
  Action?: string;
  TemplateId?: number;
  Alias?: string;
  Name?: string;
}>;
};

export type PostmarkFullApiSchemaDomainSPFResult = {
  SPFHost?: string;
  SPFVerified?: boolean;
  SPFTextValue?: string;
};

export type PostmarkFullApiSchemaDKIMRotationResponse = {
  Name?: string;
  DKIMVerified?: boolean;
  WeakDKIM?: boolean;
  DKIMHost?: string;
  DKIMTestValue?: string;
  DKIMPendingHost?: string;
  DKIMPendingTextValue?: string;
  DKIMRevokedHost?: string;
  DKIMRevokedTextValue?: string;
  SafeToRemoveRevokedKeyFromDNS?: boolean;
  DKIMUpdateStatus?: string;
  ID?: number;
};

export type PostmarkFullApiSchemaInboundSearchResponse = {
  TotalCount?: number;
  InboundMessages?: ReadonlyArray<PostmarkFullApiSchemaInboundMessageDetail>;
};

export type PostmarkFullApiSchemaOutboundSearchResponse = {
  TotalCount?: number;
  Messages?: ReadonlyArray<PostmarkFullApiSchemaOutboundMessageDetail>;
};

export type PostmarkFullApiSchemaSendEmailRequest = {
  From?: string;
  To?: string;
  Cc?: string;
  Bcc?: string;
  Subject?: string;
  Tag?: string;
  HtmlBody?: string;
  TextBody?: string;
  ReplyTo?: string;
  TrackOpens?: boolean;
  TrackLinks?: "None" | "HtmlAndText" | "HtmlOnly" | "TextOnly";
  Headers?: PostmarkFullApiSchemaHeaderCollection;
  Attachments?: PostmarkFullApiSchemaAttachmentCollection;
};

export type PostmarkFullApiSchemaSendEmailResponse = {
  To?: string;
  SubmittedAt?: string;
  MessageID?: string;
  ErrorCode?: number;
  Message?: string;
};

export type PostmarkFullApiSchemaSendEmailBatchRequest = ReadonlyArray<PostmarkFullApiSchemaSendEmailRequest>;

export type PostmarkFullApiSchemaSendEmailBatchResponse = ReadonlyArray<PostmarkFullApiSchemaSendEmailResponse>;

export type PostmarkFullApiSchemaSendEmailTemplatedBatchRequest = {
  Messages?: ReadonlyArray<PostmarkFullApiSchemaEmailWithTemplateRequest>;
};

export type PostmarkFullApiSchemaEmailWithTemplateRequest = {
  TemplateId: number;
  TemplateAlias: string;
  TemplateModel: {};
  InlineCss?: boolean;
  From: string;
  To: string;
  Cc?: string;
  Bcc?: string;
  Tag?: string;
  ReplyTo?: string;
  Headers?: PostmarkFullApiSchemaHeaderCollection;
  TrackOpens?: boolean;
  TrackLinks?: "None" | "HtmlAndText" | "HtmlOnly" | "TextOnly";
  Attachments?: PostmarkFullApiSchemaAttachmentCollection;
};

export type PostmarkFullApiSchemaTemplateValidationRequest = {
  Subject?: string;
  HtmlBody?: string;
  TextBody?: string;
  TestRenderModel?: {};
  InlineCssForHtmlTestRender?: boolean;
};

export type PostmarkFullApiSchemaTemplateValidationResponse = {
  AllContentIsValid?: boolean;
  TextBody?: PostmarkFullApiSchemaTemplateValidationResult;
  HtmlBody?: PostmarkFullApiSchemaTemplateValidationResult;
  Subject?: PostmarkFullApiSchemaTemplateValidationResult;
  SuggestedTemplateModel?: {};
};

export type PostmarkFullApiSchemaEditTemplateRequest = {
  Alias?: string;
  Name?: string;
  Subject?: string;
  HtmlBody?: string;
  TextBody?: string;
};

export type PostmarkFullApiSchemaExtendedMessageClickEventInformation = {
  ClickLocation?: string;
  Client?: {
  Name?: string;
  Company?: string;
  Family?: string;
};
  OS?: {
  Name?: string;
  Company?: string;
  Family?: string;
};
  Platform?: string;
  UserAgent?: string;
  OriginalLink?: string;
  Geo?: {
  CountryISOCode?: string;
  Country?: string;
  RegionISOCode?: string;
  Region?: string;
  City?: string;
  Zip?: string;
  Coords?: string;
  IP?: string;
};
  MessageID?: string;
  ReceivedAt?: string;
  Tag?: string;
  Recipient?: string;
};

export type PostmarkFullApiSchemaBounceCountElement = {
  Name?: string;
  Count?: number;
  Type?: string;
};

export type PostmarkFullApiSchemaEmailNameAddressPair = {
  Name?: string;
  Email?: string;
};

export type PostmarkFullApiSchemaHeaderCollection = ReadonlyArray<PostmarkFullApiSchemaMessageHeader>;

export type PostmarkFullApiSchemaAttachmentCollection = ReadonlyArray<PostmarkFullApiSchemaAttachment>;

export type PostmarkFullApiSchemaExtendedMessageOpenEventInformation = {
  FirstOpen?: boolean;
  Client?: {
  Name?: string;
  Company?: string;
  Family?: string;
};
  OS?: {
  Name?: string;
  Company?: string;
  Family?: string;
};
  Platform?: string;
  UserAgent?: string;
  Geo?: {
  CountryISOCode?: string;
  Country?: string;
  RegionISOCode?: string;
  Region?: string;
  City?: string;
  Zip?: string;
  Coords?: string;
  IP?: string;
};
  MessageID?: string;
  ReceivedAt?: string;
  Tag?: string;
  Recipient?: string;
};

export type PostmarkFullApiSchemaMessageEventDetails = {
  Recipient?: string;
  Type?: string;
  ReceivedAt?: string;
  Details?: {
  Summary?: string;
  BounceID?: string;
  DeliveryMessage?: string;
  DestinationServer?: string;
  DestinationIP?: string;
};
};

export type PostmarkFullApiSchemaDomainInformation = {
  Name?: string;
  SPFVerified?: boolean;
  DKIMVerified?: boolean;
  WeakDKIM?: boolean;
  ReturnPathDomainVerified?: boolean;
  ID?: number;
};

export type PostmarkFullApiSchemaSenderSignatureInformation = {
  Domain?: string;
  EmailAddress?: string;
  ReplyToEmailAddress?: string;
  Name?: string;
  Confirmed?: boolean;
  ID?: number;
};

export type PostmarkFullApiSchemaInboundMessageDetail = {
  From?: string;
  FromName?: string;
  FromFull?: {
  Email?: string;
  Name?: string;
};
  To?: string;
  ToFull?: ReadonlyArray<PostmarkFullApiSchemaEmailNameAddressPair>;
  Cc?: string;
  CcFull?: ReadonlyArray<PostmarkFullApiSchemaEmailNameAddressPair>;
  ReplyTo?: string;
  OriginalRecipient?: string;
  Subject?: string;
  Date?: string;
  MailboxHash?: string;
  Tag?: string;
  Attachments?: PostmarkFullApiSchemaAttachmentCollection;
  MessageID?: string;
  Status?: string;
};

export type PostmarkFullApiSchemaOutboundMessageDetail = {
  Tag?: string;
  MessageID?: string;
  To?: ReadonlyArray<PostmarkFullApiSchemaEmailNameAddressPair>;
  Cc?: ReadonlyArray<PostmarkFullApiSchemaEmailNameAddressPair>;
  Bcc?: ReadonlyArray<PostmarkFullApiSchemaEmailNameAddressPair>;
  Recipients?: ReadonlyArray<string>;
  ReceivedAt?: string;
  From?: string;
  Subject?: string;
  Attachments?: PostmarkFullApiSchemaAttachmentCollection;
  Status?: string;
  TrackOpens?: boolean;
  TrackLinks?: "None" | "HtmlAndText" | "HtmlOnly" | "TextOnly";
};

export type PostmarkFullApiSchemaTemplateValidationResult = {
  ContentIsValid?: boolean;
  ValidationErrors?: ReadonlyArray<PostmarkFullApiSchemaTemplateValidationError>;
  RenderedContent?: string;
};

export type PostmarkFullApiSchemaMessageHeader = {
  Name?: string;
  Value?: string;
};

export type PostmarkFullApiSchemaAttachment = {
  Name?: string;
  Content?: string;
  ContentType?: string;
  ContentID?: string;
};

export type PostmarkFullApiSchemaTemplateValidationError = {
  Message?: string;
  Line?: number;
  CharacterPosition?: number;
};

export interface PostmarkFullApiOperationQueryMap {
  "server:PUT:/bounces/{bounceid}/activate": {};
  "server:PUT:/messages/inbound/{messageid}/bypass": {};
  "account:POST:/domains": {};
  "server:POST:/triggers/inboundrules": {};
  "account:POST:/senders": {};
  "account:POST:/servers": {};
  "account:DELETE:/domains/{domainid}": {};
  "server:DELETE:/triggers/inboundrules/{triggerid}": {};
  "account:DELETE:/senders/{signatureid}": {};
  "account:DELETE:/servers/{serverid}": {};
  "server:DELETE:/templates/{templateIdOrAlias}": {};
  "server:PUT:/server": {};
  "account:PUT:/domains/{domainid}": {};
  "account:PUT:/senders/{signatureid}": {};
  "account:PUT:/servers/{serverid}": {};
  "server:GET:/stats/outbound/bounces": {
  tag?: string;
  fromdate?: string;
  todate?: string;
};
  "server:GET:/bounces": {
  count: number;
  offset: number;
  type?: "HardBounce" | "Transient" | "Unsubscribe" | "Subscribe" | "AutoResponder" | "AddressChange" | "DnsError" | "SpamNotification" | "OpenRelayTest" | "Unknown" | "SoftBounce" | "VirusNotification" | "MailFrontier Matador." | "BadEmailAddress" | "SpamComplaint" | "ManuallyDeactivated" | "Unconfirmed" | "Blocked" | "SMTPApiError" | "InboundError" | "DMARCPolicy" | "TemplateRenderingFailed";
  inactive?: boolean;
  emailFilter?: string;
  messageID?: string;
  tag?: string;
  todate?: string;
  fromdate?: string;
};
  "server:GET:/bounces/{bounceid}/dump": {};
  "server:GET:/messages/outbound/clicks/{messageid}": {
  count: number;
  offset: number;
};
  "server:GET:/server": {};
  "server:GET:/deliverystats": {};
  "account:GET:/domains/{domainid}": {};
  "server:GET:/messages/inbound/{messageid}/details": {};
  "server:GET:/messages/outbound/opens/{messageid}": {
  count: number;
  offset: number;
};
  "server:GET:/stats/outbound/clicks": {
  tag?: string;
  fromdate?: string;
  todate?: string;
};
  "server:GET:/stats/outbound/clicks/browserfamilies": {
  tag?: string;
  fromdate?: string;
  todate?: string;
};
  "server:GET:/stats/outbound/clicks/location": {
  tag?: string;
  fromdate?: string;
  todate?: string;
};
  "server:GET:/stats/outbound/clicks/platforms": {
  tag?: string;
  fromdate?: string;
  todate?: string;
};
  "server:GET:/messages/outbound/{messageid}/details": {};
  "server:GET:/messages/outbound/{messageid}/dump": {};
  "server:GET:/stats/outbound/opens": {
  tag?: string;
  fromdate?: string;
  todate?: string;
};
  "server:GET:/stats/outbound/opens/emailclients": {
  tag?: string;
  fromdate?: string;
  todate?: string;
};
  "server:GET:/stats/outbound/opens/platforms": {
  tag?: string;
  fromdate?: string;
  todate?: string;
};
  "server:GET:/stats/outbound": {
  tag?: string;
  fromdate?: string;
  todate?: string;
};
  "account:GET:/senders/{signatureid}": {};
  "server:GET:/stats/outbound/sends": {
  tag?: string;
  fromdate?: string;
  todate?: string;
};
  "account:GET:/servers/{serverid}": {};
  "server:GET:/bounces/{bounceid}": {};
  "server:GET:/templates/{templateIdOrAlias}": {};
  "server:GET:/stats/outbound/spam": {
  tag?: string;
  fromdate?: string;
  todate?: string;
};
  "server:GET:/stats/outbound/tracked": {
  tag?: string;
  fromdate?: string;
  todate?: string;
};
  "account:GET:/domains": {
  count: number;
  offset: number;
};
  "server:GET:/triggers/inboundrules": {
  count: number;
  offset: number;
};
  "account:GET:/senders": {
  count: number;
  offset: number;
};
  "account:GET:/servers": {
  count: number;
  offset: number;
  name?: string;
};
  "server:GET:/templates": {
  Count: number;
  Offset: number;
};
  "server:POST:/templates": {};
  "account:PUT:/templates/push": {};
  "account:PUT:/domains/{domainid}/verifydkim": {};
  "account:POST:/senders/{signatureid}/requestnewdkim": {};
  "account:PUT:/domains/{domainid}/verifyreturnpath": {};
  "account:POST:/domains/{domainid}/verifyspf": {};
  "account:POST:/senders/{signatureid}/verifyspf": {};
  "account:POST:/senders/{signatureid}/resend": {};
  "server:PUT:/messages/inbound/{messageid}/retry": {};
  "account:POST:/domains/{domainid}/rotatedkim": {};
  "server:GET:/messages/outbound/clicks": {
  count: number;
  offset: number;
  recipient?: string;
  tag?: string;
  client_name?: string;
  client_company?: string;
  client_family?: string;
  os_name?: string;
  os_family?: string;
  os_company?: string;
  platform?: string;
  country?: string;
  region?: string;
  city?: string;
};
  "server:GET:/messages/inbound": {
  count: number;
  offset: number;
  recipient?: string;
  fromemail?: string;
  subject?: string;
  mailboxhash?: string;
  tag?: string;
  status?: "blocked" | "processed" | "queued" | "failed" | "scheduled";
  todate?: string;
  fromdate?: string;
};
  "server:GET:/messages/outbound/opens": {
  count: number;
  offset: number;
  recipient?: string;
  tag?: string;
  client_name?: string;
  client_company?: string;
  client_family?: string;
  os_name?: string;
  os_family?: string;
  os_company?: string;
  platform?: string;
  country?: string;
  region?: string;
  city?: string;
};
  "server:GET:/messages/outbound": {
  count: number;
  offset: number;
  recipient?: string;
  fromemail?: string;
  tag?: string;
  status?: "queued" | "sent";
  todate?: string;
  fromdate?: string;
};
  "server:POST:/email": {};
  "server:POST:/email/batch": {};
  "server:POST:/email/batchWithTemplates": {};
  "server:POST:/email/withTemplate": {};
  "server:POST:/templates/validate": {};
  "server:PUT:/templates/{templateIdOrAlias}": {};
}

export interface PostmarkFullApiOperationQueryRequiredMap {
  "server:PUT:/bounces/{bounceid}/activate": false;
  "server:PUT:/messages/inbound/{messageid}/bypass": false;
  "account:POST:/domains": false;
  "server:POST:/triggers/inboundrules": false;
  "account:POST:/senders": false;
  "account:POST:/servers": false;
  "account:DELETE:/domains/{domainid}": false;
  "server:DELETE:/triggers/inboundrules/{triggerid}": false;
  "account:DELETE:/senders/{signatureid}": false;
  "account:DELETE:/servers/{serverid}": false;
  "server:DELETE:/templates/{templateIdOrAlias}": false;
  "server:PUT:/server": false;
  "account:PUT:/domains/{domainid}": false;
  "account:PUT:/senders/{signatureid}": false;
  "account:PUT:/servers/{serverid}": false;
  "server:GET:/stats/outbound/bounces": false;
  "server:GET:/bounces": true;
  "server:GET:/bounces/{bounceid}/dump": false;
  "server:GET:/messages/outbound/clicks/{messageid}": true;
  "server:GET:/server": false;
  "server:GET:/deliverystats": false;
  "account:GET:/domains/{domainid}": false;
  "server:GET:/messages/inbound/{messageid}/details": false;
  "server:GET:/messages/outbound/opens/{messageid}": true;
  "server:GET:/stats/outbound/clicks": false;
  "server:GET:/stats/outbound/clicks/browserfamilies": false;
  "server:GET:/stats/outbound/clicks/location": false;
  "server:GET:/stats/outbound/clicks/platforms": false;
  "server:GET:/messages/outbound/{messageid}/details": false;
  "server:GET:/messages/outbound/{messageid}/dump": false;
  "server:GET:/stats/outbound/opens": false;
  "server:GET:/stats/outbound/opens/emailclients": false;
  "server:GET:/stats/outbound/opens/platforms": false;
  "server:GET:/stats/outbound": false;
  "account:GET:/senders/{signatureid}": false;
  "server:GET:/stats/outbound/sends": false;
  "account:GET:/servers/{serverid}": false;
  "server:GET:/bounces/{bounceid}": false;
  "server:GET:/templates/{templateIdOrAlias}": false;
  "server:GET:/stats/outbound/spam": false;
  "server:GET:/stats/outbound/tracked": false;
  "account:GET:/domains": true;
  "server:GET:/triggers/inboundrules": true;
  "account:GET:/senders": true;
  "account:GET:/servers": true;
  "server:GET:/templates": true;
  "server:POST:/templates": false;
  "account:PUT:/templates/push": false;
  "account:PUT:/domains/{domainid}/verifydkim": false;
  "account:POST:/senders/{signatureid}/requestnewdkim": false;
  "account:PUT:/domains/{domainid}/verifyreturnpath": false;
  "account:POST:/domains/{domainid}/verifyspf": false;
  "account:POST:/senders/{signatureid}/verifyspf": false;
  "account:POST:/senders/{signatureid}/resend": false;
  "server:PUT:/messages/inbound/{messageid}/retry": false;
  "account:POST:/domains/{domainid}/rotatedkim": false;
  "server:GET:/messages/outbound/clicks": true;
  "server:GET:/messages/inbound": true;
  "server:GET:/messages/outbound/opens": true;
  "server:GET:/messages/outbound": true;
  "server:POST:/email": false;
  "server:POST:/email/batch": false;
  "server:POST:/email/batchWithTemplates": false;
  "server:POST:/email/withTemplate": false;
  "server:POST:/templates/validate": false;
  "server:PUT:/templates/{templateIdOrAlias}": false;
}

export interface PostmarkFullApiOperationRequestBodyMap {
  "server:PUT:/bounces/{bounceid}/activate": never;
  "server:PUT:/messages/inbound/{messageid}/bypass": never;
  "account:POST:/domains": PostmarkFullApiSchemaDomainCreationModel;
  "server:POST:/triggers/inboundrules": PostmarkFullApiSchemaCreateInboundRuleRequest;
  "account:POST:/senders": PostmarkFullApiSchemaSenderSignatureCreationModel;
  "account:POST:/servers": PostmarkFullApiSchemaCreateServerPayload;
  "account:DELETE:/domains/{domainid}": never;
  "server:DELETE:/triggers/inboundrules/{triggerid}": never;
  "account:DELETE:/senders/{signatureid}": never;
  "account:DELETE:/servers/{serverid}": never;
  "server:DELETE:/templates/{templateIdOrAlias}": never;
  "server:PUT:/server": PostmarkFullApiSchemaEditServerConfigurationRequest;
  "account:PUT:/domains/{domainid}": PostmarkFullApiSchemaDomainEditingModel;
  "account:PUT:/senders/{signatureid}": PostmarkFullApiSchemaSenderSignatureEditingModel;
  "account:PUT:/servers/{serverid}": PostmarkFullApiSchemaEditServerPayload;
  "server:GET:/stats/outbound/bounces": never;
  "server:GET:/bounces": never;
  "server:GET:/bounces/{bounceid}/dump": never;
  "server:GET:/messages/outbound/clicks/{messageid}": never;
  "server:GET:/server": never;
  "server:GET:/deliverystats": never;
  "account:GET:/domains/{domainid}": never;
  "server:GET:/messages/inbound/{messageid}/details": never;
  "server:GET:/messages/outbound/opens/{messageid}": never;
  "server:GET:/stats/outbound/clicks": never;
  "server:GET:/stats/outbound/clicks/browserfamilies": never;
  "server:GET:/stats/outbound/clicks/location": never;
  "server:GET:/stats/outbound/clicks/platforms": never;
  "server:GET:/messages/outbound/{messageid}/details": never;
  "server:GET:/messages/outbound/{messageid}/dump": never;
  "server:GET:/stats/outbound/opens": never;
  "server:GET:/stats/outbound/opens/emailclients": never;
  "server:GET:/stats/outbound/opens/platforms": never;
  "server:GET:/stats/outbound": never;
  "account:GET:/senders/{signatureid}": never;
  "server:GET:/stats/outbound/sends": never;
  "account:GET:/servers/{serverid}": never;
  "server:GET:/bounces/{bounceid}": never;
  "server:GET:/templates/{templateIdOrAlias}": never;
  "server:GET:/stats/outbound/spam": never;
  "server:GET:/stats/outbound/tracked": never;
  "account:GET:/domains": never;
  "server:GET:/triggers/inboundrules": never;
  "account:GET:/senders": never;
  "account:GET:/servers": never;
  "server:GET:/templates": never;
  "server:POST:/templates": PostmarkFullApiSchemaCreateTemplateRequest;
  "account:PUT:/templates/push": PostmarkFullApiSchemaTemplatesPushModel;
  "account:PUT:/domains/{domainid}/verifydkim": never;
  "account:POST:/senders/{signatureid}/requestnewdkim": never;
  "account:PUT:/domains/{domainid}/verifyreturnpath": never;
  "account:POST:/domains/{domainid}/verifyspf": never;
  "account:POST:/senders/{signatureid}/verifyspf": never;
  "account:POST:/senders/{signatureid}/resend": never;
  "server:PUT:/messages/inbound/{messageid}/retry": never;
  "account:POST:/domains/{domainid}/rotatedkim": never;
  "server:GET:/messages/outbound/clicks": never;
  "server:GET:/messages/inbound": never;
  "server:GET:/messages/outbound/opens": never;
  "server:GET:/messages/outbound": never;
  "server:POST:/email": PostmarkFullApiSchemaSendEmailRequest;
  "server:POST:/email/batch": PostmarkFullApiSchemaSendEmailBatchRequest;
  "server:POST:/email/batchWithTemplates": PostmarkFullApiSchemaSendEmailTemplatedBatchRequest;
  "server:POST:/email/withTemplate": PostmarkFullApiSchemaEmailWithTemplateRequest;
  "server:POST:/templates/validate": PostmarkFullApiSchemaTemplateValidationRequest;
  "server:PUT:/templates/{templateIdOrAlias}": PostmarkFullApiSchemaEditTemplateRequest;
}

export interface PostmarkFullApiOperationRequestBodyRequiredMap {
  "server:PUT:/bounces/{bounceid}/activate": false;
  "server:PUT:/messages/inbound/{messageid}/bypass": false;
  "account:POST:/domains": false;
  "server:POST:/triggers/inboundrules": false;
  "account:POST:/senders": false;
  "account:POST:/servers": false;
  "account:DELETE:/domains/{domainid}": false;
  "server:DELETE:/triggers/inboundrules/{triggerid}": false;
  "account:DELETE:/senders/{signatureid}": false;
  "account:DELETE:/servers/{serverid}": false;
  "server:DELETE:/templates/{templateIdOrAlias}": false;
  "server:PUT:/server": false;
  "account:PUT:/domains/{domainid}": false;
  "account:PUT:/senders/{signatureid}": false;
  "account:PUT:/servers/{serverid}": false;
  "server:GET:/stats/outbound/bounces": false;
  "server:GET:/bounces": false;
  "server:GET:/bounces/{bounceid}/dump": false;
  "server:GET:/messages/outbound/clicks/{messageid}": false;
  "server:GET:/server": false;
  "server:GET:/deliverystats": false;
  "account:GET:/domains/{domainid}": false;
  "server:GET:/messages/inbound/{messageid}/details": false;
  "server:GET:/messages/outbound/opens/{messageid}": false;
  "server:GET:/stats/outbound/clicks": false;
  "server:GET:/stats/outbound/clicks/browserfamilies": false;
  "server:GET:/stats/outbound/clicks/location": false;
  "server:GET:/stats/outbound/clicks/platforms": false;
  "server:GET:/messages/outbound/{messageid}/details": false;
  "server:GET:/messages/outbound/{messageid}/dump": false;
  "server:GET:/stats/outbound/opens": false;
  "server:GET:/stats/outbound/opens/emailclients": false;
  "server:GET:/stats/outbound/opens/platforms": false;
  "server:GET:/stats/outbound": false;
  "account:GET:/senders/{signatureid}": false;
  "server:GET:/stats/outbound/sends": false;
  "account:GET:/servers/{serverid}": false;
  "server:GET:/bounces/{bounceid}": false;
  "server:GET:/templates/{templateIdOrAlias}": false;
  "server:GET:/stats/outbound/spam": false;
  "server:GET:/stats/outbound/tracked": false;
  "account:GET:/domains": false;
  "server:GET:/triggers/inboundrules": false;
  "account:GET:/senders": false;
  "account:GET:/servers": false;
  "server:GET:/templates": false;
  "server:POST:/templates": true;
  "account:PUT:/templates/push": true;
  "account:PUT:/domains/{domainid}/verifydkim": false;
  "account:POST:/senders/{signatureid}/requestnewdkim": false;
  "account:PUT:/domains/{domainid}/verifyreturnpath": false;
  "account:POST:/domains/{domainid}/verifyspf": false;
  "account:POST:/senders/{signatureid}/verifyspf": false;
  "account:POST:/senders/{signatureid}/resend": false;
  "server:PUT:/messages/inbound/{messageid}/retry": false;
  "account:POST:/domains/{domainid}/rotatedkim": false;
  "server:GET:/messages/outbound/clicks": false;
  "server:GET:/messages/inbound": false;
  "server:GET:/messages/outbound/opens": false;
  "server:GET:/messages/outbound": false;
  "server:POST:/email": false;
  "server:POST:/email/batch": false;
  "server:POST:/email/batchWithTemplates": true;
  "server:POST:/email/withTemplate": true;
  "server:POST:/templates/validate": false;
  "server:PUT:/templates/{templateIdOrAlias}": true;
}

export interface PostmarkFullApiOperationResponseMap {
  "server:PUT:/bounces/{bounceid}/activate": PostmarkFullApiSchemaBounceActivationResponse;
  "server:PUT:/messages/inbound/{messageid}/bypass": PostmarkFullApiSchemaStandardPostmarkResponse;
  "account:POST:/domains": PostmarkFullApiSchemaDomainExtendedInformation;
  "server:POST:/triggers/inboundrules": {
  ID?: number;
  Rule?: string;
};
  "account:POST:/senders": PostmarkFullApiSchemaSenderSignatureExtendedInformation;
  "account:POST:/servers": PostmarkFullApiSchemaExtendedServerInfo;
  "account:DELETE:/domains/{domainid}": PostmarkFullApiSchemaStandardPostmarkResponse2;
  "server:DELETE:/triggers/inboundrules/{triggerid}": PostmarkFullApiSchemaStandardPostmarkResponse;
  "account:DELETE:/senders/{signatureid}": PostmarkFullApiSchemaStandardPostmarkResponse2;
  "account:DELETE:/servers/{serverid}": PostmarkFullApiSchemaStandardPostmarkResponse2;
  "server:DELETE:/templates/{templateIdOrAlias}": PostmarkFullApiSchemaTemplateDetailResponse;
  "server:PUT:/server": PostmarkFullApiSchemaServerConfigurationResponse;
  "account:PUT:/domains/{domainid}": PostmarkFullApiSchemaDomainExtendedInformation;
  "account:PUT:/senders/{signatureid}": PostmarkFullApiSchemaSenderSignatureExtendedInformation;
  "account:PUT:/servers/{serverid}": PostmarkFullApiSchemaExtendedServerInfo;
  "server:GET:/stats/outbound/bounces": {
  HardBounce?: number;
  SMTPApiError?: number;
  SoftBounce?: number;
  Transient?: number;
  Days?: ReadonlyArray<{
  Date?: string;
  HardBounce?: number;
  SoftBounce?: number;
  SMTPApiError?: number;
  Transient?: number;
}>;
};
  "server:GET:/bounces": PostmarkFullApiSchemaBounceSearchResponse;
  "server:GET:/bounces/{bounceid}/dump": PostmarkFullApiSchemaBounceDumpResponse;
  "server:GET:/messages/outbound/clicks/{messageid}": PostmarkFullApiSchemaMessageClickSearchResponse;
  "server:GET:/server": PostmarkFullApiSchemaServerConfigurationResponse;
  "server:GET:/deliverystats": PostmarkFullApiSchemaDeliveryStatsResponse;
  "account:GET:/domains/{domainid}": PostmarkFullApiSchemaDomainExtendedInformation;
  "server:GET:/messages/inbound/{messageid}/details": PostmarkFullApiSchemaInboundMessageFullDetailsResponse;
  "server:GET:/messages/outbound/opens/{messageid}": PostmarkFullApiSchemaMessageOpenSearchResponse;
  "server:GET:/stats/outbound/clicks": PostmarkFullApiSchemaDynamicResponse;
  "server:GET:/stats/outbound/clicks/browserfamilies": {};
  "server:GET:/stats/outbound/clicks/location": PostmarkFullApiSchemaDynamicResponse;
  "server:GET:/stats/outbound/clicks/platforms": PostmarkFullApiSchemaDynamicResponse;
  "server:GET:/messages/outbound/{messageid}/details": PostmarkFullApiSchemaOutboundMessageDetailsResponse;
  "server:GET:/messages/outbound/{messageid}/dump": PostmarkFullApiSchemaOutboundMessageDumpResponse;
  "server:GET:/stats/outbound/opens": {
  Opens?: number;
  Unique?: number;
  Days?: ReadonlyArray<{
  Date?: string;
  Opens?: number;
  Unique?: number;
}>;
};
  "server:GET:/stats/outbound/opens/emailclients": {
  Desktop?: number;
  WebMail?: number;
  Mobile?: number;
  Unknown?: number;
  Days?: ReadonlyArray<PostmarkFullApiSchemaDynamicResponse>;
};
  "server:GET:/stats/outbound/opens/platforms": {
  Desktop?: number;
  WebMail?: number;
  Mobile?: number;
  Unknown?: number;
  Days?: ReadonlyArray<{
  Date?: string;
  Desktop?: number;
  WebMail?: number;
  Mobile?: number;
  Unknown?: number;
}>;
};
  "server:GET:/stats/outbound": PostmarkFullApiSchemaOutboundOverviewStatsResponse;
  "account:GET:/senders/{signatureid}": PostmarkFullApiSchemaSenderSignatureExtendedInformation;
  "server:GET:/stats/outbound/sends": PostmarkFullApiSchemaSentCountsResponse;
  "account:GET:/servers/{serverid}": PostmarkFullApiSchemaExtendedServerInfo;
  "server:GET:/bounces/{bounceid}": PostmarkFullApiSchemaBounceInfoResponse;
  "server:GET:/templates/{templateIdOrAlias}": PostmarkFullApiSchemaTemplateDetailResponse;
  "server:GET:/stats/outbound/spam": {
  SpamComplaint?: number;
  Days?: ReadonlyArray<{
  Date?: string;
  SpamComplaint?: number;
}>;
};
  "server:GET:/stats/outbound/tracked": {
  Tracked?: number;
  Days?: ReadonlyArray<{
  Date?: string;
  Tracked?: number;
}>;
};
  "account:GET:/domains": PostmarkFullApiSchemaDomainListingResults;
  "server:GET:/triggers/inboundrules": {
  TotalCount?: number;
  InboundRules?: ReadonlyArray<{
  ID?: number;
  Rule?: string;
}>;
};
  "account:GET:/senders": PostmarkFullApiSchemaSenderListingResults;
  "account:GET:/servers": PostmarkFullApiSchemaServerListingResponse;
  "server:GET:/templates": PostmarkFullApiSchemaTemplateListingResponse;
  "server:POST:/templates": PostmarkFullApiSchemaTemplateRecordResponse;
  "account:PUT:/templates/push": PostmarkFullApiSchemaTemplatesPushResponse;
  "account:PUT:/domains/{domainid}/verifydkim": PostmarkFullApiSchemaDomainExtendedInformation;
  "account:POST:/senders/{signatureid}/requestnewdkim": PostmarkFullApiSchemaStandardPostmarkResponse2;
  "account:PUT:/domains/{domainid}/verifyreturnpath": PostmarkFullApiSchemaDomainExtendedInformation;
  "account:POST:/domains/{domainid}/verifyspf": PostmarkFullApiSchemaDomainSPFResult;
  "account:POST:/senders/{signatureid}/verifyspf": PostmarkFullApiSchemaSenderSignatureExtendedInformation;
  "account:POST:/senders/{signatureid}/resend": PostmarkFullApiSchemaStandardPostmarkResponse2;
  "server:PUT:/messages/inbound/{messageid}/retry": PostmarkFullApiSchemaStandardPostmarkResponse;
  "account:POST:/domains/{domainid}/rotatedkim": PostmarkFullApiSchemaDKIMRotationResponse;
  "server:GET:/messages/outbound/clicks": PostmarkFullApiSchemaMessageClickSearchResponse;
  "server:GET:/messages/inbound": PostmarkFullApiSchemaInboundSearchResponse;
  "server:GET:/messages/outbound/opens": PostmarkFullApiSchemaMessageOpenSearchResponse;
  "server:GET:/messages/outbound": PostmarkFullApiSchemaOutboundSearchResponse;
  "server:POST:/email": PostmarkFullApiSchemaSendEmailResponse;
  "server:POST:/email/batch": PostmarkFullApiSchemaSendEmailBatchResponse;
  "server:POST:/email/batchWithTemplates": PostmarkFullApiSchemaSendEmailBatchResponse;
  "server:POST:/email/withTemplate": PostmarkFullApiSchemaSendEmailResponse;
  "server:POST:/templates/validate": PostmarkFullApiSchemaTemplateValidationResponse;
  "server:PUT:/templates/{templateIdOrAlias}": PostmarkFullApiSchemaTemplateRecordResponse;
}
