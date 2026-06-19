// Generated provider schema DTOs for MailgunFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type MailgunFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type MailgunFullApiSchemaJsonValue = MailgunFullApiSchemaJsonPrimitive | readonly MailgunFullApiSchemaJsonValue[] | { readonly [key: string]: MailgunFullApiSchemaJsonValue | undefined };

export type MailgunFullApiSchemaPOSTV3DomainNameMessagesMultipartFormDataRequestBody = {
  from: string;
  to: ReadonlyArray<string>;
  cc?: ReadonlyArray<string>;
  bcc?: ReadonlyArray<string>;
  subject: string;
  text?: string;
  html?: string;
  "amp-html"?: string;
  attachment?: ReadonlyArray<string>;
  inline?: ReadonlyArray<string>;
  template?: string;
  "t:version"?: string;
  "t:text"?: "yes";
  "t:variables"?: string;
  "o:tag"?: ReadonlyArray<string>;
  "o:dkim"?: "yes" | "no" | "true" | "false";
  "o:secondary-dkim"?: string;
  "o:secondary-dkim-public"?: string;
  "o:deliverytime"?: string;
  "o:deliver-within"?: string;
  "o:deliverytime-optimize-period"?: string;
  "o:time-zone-localize"?: string;
  "o:testmode"?: "yes";
  "o:tracking"?: "yes" | "no" | "true" | "false" | "htmlonly";
  "o:tracking-clicks"?: "yes" | "no" | "true" | "false" | "htmlonly";
  "o:tracking-opens"?: "yes" | "no" | "true" | "false";
  "o:require-tls"?: "yes" | "no" | "true" | "false";
  "o:skip-verification"?: "yes" | "no" | "true" | "false";
  "o:sending-ip"?: string;
  "o:sending-ip-pool"?: string;
  "o:tracking-pixel-location-top"?: "yes" | "no" | "true" | "false" | "htmlonly";
  "o:archive-to"?: string;
  "o:suppress-headers"?: string;
  "h:X-My-Header"?: string;
  "v:my-var"?: string;
  "recipient-variables"?: string;
  readonly [key: string]: MailgunFullApiSchemaJsonValue | string | ReadonlyArray<string> | "yes" | "yes" | "no" | "true" | "false" | "yes" | "no" | "true" | "false" | "htmlonly" | undefined;
};

export type MailgunFullApiSchemaGithubComMailgunInfluxHttpapiSendMessageResponse = {
  id: string;
  message: string;
};

export type MailgunFullApiSchemaPOSTV3DomainNameMessagesMimeMultipartFormDataRequestBody = {
  to: ReadonlyArray<string>;
  message: string;
  template?: string;
  "t:version"?: string;
  "t:text"?: "yes";
  "t:variables"?: string;
  "o:tag"?: ReadonlyArray<string>;
  "o:dkim"?: "yes" | "no" | "true" | "false";
  "o:secondary-dkim"?: string;
  "o:secondary-dkim-public"?: string;
  "o:deliverytime"?: string;
  "o:deliver-within"?: string;
  "o:deliverytime-optimize-period"?: string;
  "o:time-zone-localize"?: string;
  "o:testmode"?: "yes";
  "o:tracking"?: "yes" | "no" | "true" | "false" | "htmlonly";
  "o:tracking-clicks"?: "yes" | "no" | "true" | "false" | "htmlonly";
  "o:tracking-opens"?: "yes" | "no" | "true" | "false";
  "o:require-tls"?: "yes" | "no" | "true" | "false";
  "o:skip-verification"?: "yes" | "no" | "true" | "false";
  "o:sending-ip"?: string;
  "o:sending-ip-pool"?: string;
  "o:tracking-pixel-location-top"?: "yes" | "no" | "true" | "false" | "htmlonly";
  "o:archive-to"?: string;
  "o:suppress-headers"?: string;
  "h:X-My-Header"?: string;
  "v:my-var"?: string;
  "recipient-variables"?: string;
  readonly [key: string]: MailgunFullApiSchemaJsonValue | ReadonlyArray<string> | string | "yes" | "yes" | "no" | "true" | "false" | "yes" | "no" | "true" | "false" | "htmlonly" | undefined;
};

export type MailgunFullApiSchemaGithubComMailgunInfluxHttpapiGetMessageResponseBasicExample = {
  "Content-Transfer-Encoding": string;
  "Content-Type": string;
  From: string;
  "Message-Id": string;
  "Mime-Version": string;
  Subject: string;
  To: string;
  "X-Mailgun-Tag": string;
  sender: string;
  recipients: string;
  "body-html": string;
  "body-plain": string;
  "stripped-html": string;
  "stripped-text": string;
  "stripped-signature": string;
  "message-headers": ReadonlyArray<ReadonlyArray<string>>;
  "X-Mailgun-Template-Name": string;
  "X-Mailgun-Template-Variables": string;
};

export type MailgunFullApiSchemaPOSTV3DomainsDomainNameMessagesStorageKeyMultipartFormDataRequestBody = {
  to: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiListDomainResponse = {
  total_count: number;
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunDomainsClientGolangDomain>;
};

export type MailgunFullApiSchemaPOSTV4DomainsMultipartFormDataRequestBody = {
  archive_to?: string;
  dkim_host_name?: string;
  dkim_key_size?: string;
  dkim_selector?: string;
  encrypt_incoming_message?: boolean;
  force_dkim_authority?: boolean;
  force_root_dkim_host?: boolean;
  wildcard?: boolean;
  name: string;
  pool_id?: string;
  ips?: string;
  require_tls?: boolean;
  skip_verification?: boolean;
  spam_action?: string;
  smtp_password?: string;
  use_automatic_sender_security?: boolean;
  webhooks_redact_pii?: boolean;
  web_prefix?: string;
  web_scheme?: string;
  message_ttl?: number;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiCreateDomainResp = {
  message: string;
  domain: (MailgunFullApiSchemaGithubComMailgunDomainsClientGolangDomain | MailgunFullApiSchemaJsonValue);
  receiving_dns_records: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunDomainsClientGolangRecord | MailgunFullApiSchemaJsonValue)>;
  sending_dns_records: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunDomainsClientGolangRecord | MailgunFullApiSchemaJsonValue)>;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiFindDomainByNameResp = {
  domain: (MailgunFullApiSchemaGithubComMailgunDomainsClientGolangDomain | MailgunFullApiSchemaJsonValue);
  receiving_dns_records?: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunDomainsClientGolangRecord | MailgunFullApiSchemaJsonValue)>;
  sending_dns_records?: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunDomainsClientGolangRecord | MailgunFullApiSchemaJsonValue)>;
};

export type MailgunFullApiSchemaPUTV4DomainsNameMultipartFormDataRequestBody = {
  archive_to?: string;
  mailfrom_host?: string;
  message_ttl?: number;
  require_tls?: boolean;
  skip_verification?: boolean;
  smtp_password?: string;
  spam_action?: string;
  use_automatic_sender_security?: boolean;
  webhooks_redact_pii?: boolean;
  web_scheme?: string;
  web_prefix?: string;
  wildcard?: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUpdateDomainResp = {
  message: string;
  domain: (MailgunFullApiSchemaGithubComMailgunDomainsClientGolangDomain | MailgunFullApiSchemaJsonValue);
  receiving_dns_records?: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunDomainsClientGolangRecord | MailgunFullApiSchemaJsonValue)>;
  sending_dns_records?: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunDomainsClientGolangRecord | MailgunFullApiSchemaJsonValue)>;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiVerifyDomainResponse = {
  message: string;
  domain: (MailgunFullApiSchemaGithubComMailgunDomainsClientGolangDomain | MailgunFullApiSchemaJsonValue);
  sending_dns_records: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunDomainsClientGolangRecord | MailgunFullApiSchemaJsonValue)>;
  receiving_dns_records: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunDomainsClientGolangRecord | MailgunFullApiSchemaJsonValue)>;
};

export type MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse = {
  message: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiGetAllDomainWebhooksResp = {
  webhooks: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhooksResponse;
};

export type MailgunFullApiSchemaPOSTV3DomainsDomainWebhooksMultipartFormDataRequestBody = {
  id: "accepted" | "clicked" | "opened" | "unsubscribed" | "delivered" | "permanent_fail" | "temporary_fail" | "complained";
  url: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiCreateDomainWebhookResp = {
  message: string;
  webhook: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhookResponse;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiGetDomainWebhookResp = {
  webhook: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhookResponse;
};

export type MailgunFullApiSchemaPUTV3DomainsDomainNameWebhooksWebhookNameMultipartFormDataRequestBody = {
  url: string;
};

export type MailgunFullApiSchemaPUTV4DomainsDomainWebhooksApplicationXWwwFormUrlencodedRequestBody = {
  url: string;
  event_types: "accepted" | "clicked" | "opened" | "unsubscribed" | "delivered" | "permanent_fail" | "temporary_fail" | "complained";
};

export type MailgunFullApiSchemaPOSTV4DomainsDomainWebhooksApplicationXWwwFormUrlencodedRequestBody = {
  url: string;
  event_types: "accepted" | "clicked" | "opened" | "unsubscribed" | "delivered" | "permanent_fail" | "temporary_fail" | "complained";
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiGetDomainTrackingResp = {
  tracking: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiTrackingSettings;
};

export type MailgunFullApiSchemaPUTV3DomainsNameTrackingClickMultipartFormDataRequestBody = {
  active?: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUpdateDomainTrackingClickResp = {
  message: string;
  click: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiClickSettings;
};

export type MailgunFullApiSchemaPUTV3DomainsNameTrackingOpenMultipartFormDataRequestBody = {
  active?: boolean;
  place_at_the_top?: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUpdateDomainTrackingOpenResp = {
  message: string;
  open: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiOpenSettings;
};

export type MailgunFullApiSchemaPUTV3DomainsNameTrackingUnsubscribeMultipartFormDataRequestBody = {
  active?: boolean;
  html_footer?: string;
  text_footer?: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUpdateDomainTrackingUnsubscribeResp = {
  message: string;
  unsubscribe: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUnsubscribeSettings;
};

export type MailgunFullApiSchemaGETV1DkimKeysMultipartFormDataRequestBody = {
  page: string;
  limit: number;
  signing_domain?: string;
  selector?: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiDomainKeyListResponse = {
  items: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunDomainsHttpapiDomainKeyResponse | MailgunFullApiSchemaJsonValue)>;
  paging?: (MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingResponse | MailgunFullApiSchemaJsonValue);
};

export type MailgunFullApiSchemaPOSTV1DkimKeysMultipartFormDataRequestBody = {
  signing_domain: string;
  selector: string;
  bits?: number;
  pem?: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiDomainKeyResponse = {
  signing_domain: string;
  selector: string;
  dns_record?: (MailgunFullApiSchemaGithubComMailgunDomainsClientGolangRecord | MailgunFullApiSchemaJsonValue);
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUpdateDomainKeyResp = {
  message: string;
  authority: string;
  selector: string;
  active: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiAuthorityKeysResponse = {
  items: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunDomainsHttpapiDomainKeyResponse | MailgunFullApiSchemaJsonValue)>;
};

export type MailgunFullApiSchemaPUTV3DomainsNameDkimAuthorityMultipartFormDataRequestBody = {
  self?: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiReassignDkimAuthorityResp = {
  message: string;
  sending_dns_records: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunDomainsClientGolangRecord | MailgunFullApiSchemaJsonValue)>;
  changed: boolean;
};

export type MailgunFullApiSchemaPUTV3DomainsNameDkimSelectorMultipartFormDataRequestBody = {
  dkim_selector?: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiAccountLevelWebhooksResp = {
  webhooks: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunDomainsHttpapiAccountLevelWebhookView>;
};

export type MailgunFullApiSchemaPOSTV1WebhooksMultipartFormDataRequestBody = {
  description?: string;
  event_types: "accepted" | "clicked" | "opened" | "unsubscribed" | "delivered" | "permanent_fail" | "temporary_fail" | "complained";
  url: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiCreateAccountLevelWebhookResp = {
  webhook_id: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiAccountLevelWebhookView = {
  webhook_id: string;
  description: string;
  url: string;
  event_types: ReadonlyArray<string>;
  created_at: string;
};

export type MailgunFullApiSchemaPUTV1WebhooksWebhookIdMultipartFormDataRequestBody = {
  description?: string;
  event_types: "accepted" | "clicked" | "opened" | "unsubscribed" | "delivered" | "permanent_fail" | "temporary_fail" | "complained";
  url: string;
};

export type MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiInvalidParameterError = {
  Field: string;
  Value: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiGetDomainSendingQueuesResp = {
  regular: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiExceededQueueQuotaJSON;
  scheduled: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiExceededQueueQuotaJSON;
};

export type MailgunFullApiSchemaPUTV1DkimManagementDomainsNameRotationMultipartFormDataRequestBody = {
  rotation_enabled: boolean;
  rotation_interval?: string;
};

export type MailgunFullApiSchemaGithubComMailgunPendulumApiDomainResponse = {
  domain: MailgunFullApiSchemaGithubComMailgunPendulumApiDomain;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiSubaccountsListSubaccountDIPPsResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunTowerApiSubaccountsListSubaccountDIPPsResponseItem>;
  total_count: number;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiStartSagaResponse = {
  message: string;
  reference_id: string;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiDomainDippSpilloverDIPPSpilloverResponseDoc = {
  extra_dedicated_ips: MailgunFullApiSchemaGithubComMailgunTowerApiDomainDippSpilloverDIPPSpilloverDoc;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiDomainDippSpilloverDIPPSpilloverSettingsRequest = {
  extra_dedicated_ips: MailgunFullApiSchemaGithubComMailgunTowerApiDomainDippSpilloverDIPPSpilloverRequest;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiAccountDippSpilloverDIPPSpilloverResponseDoc = {
  extra_dedicated_ips: MailgunFullApiSchemaGithubComMailgunTowerApiAccountDippSpilloverDIPPSpilloverDoc;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiAccountDippSpilloverDIPPSpilloverSettingsRequest = {
  extra_dedicated_ips: MailgunFullApiSchemaGithubComMailgunTowerApiAccountDippSpilloverDIPPSpilloverRequest;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiAccountListIpsDocResponse = {
  assignable_to_pools?: ReadonlyArray<string>;
  details: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunTowerApiAccountListIpsDetailsDocResponse>;
  items: ReadonlyArray<string>;
  total_count: number;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiAccountGetDocResponse = {
  dedicated: boolean;
  ip: string;
  rdns: string;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiAccountDomainsResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunTowerApiAccountItem>;
  total_count: number;
};

export type MailgunFullApiSchemaPOSTV3IpsAddrIpBandMultipartFormDataRequestBody = {
  ip_band: string;
};

export type MailgunFullApiSchemaString = string;

export type MailgunFullApiSchemaGithubComMailgunTowerApiAccountListIpsDetailedIPsResponseDoc = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunTowerApiAccountListIpsAccountIPDoc>;
  total_count: number;
};

export type MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiResponse = {
  readonly [key: string]: {} | undefined;
};

export type MailgunFullApiSchemaPOSTV3DynamicPoolsAllMultipartFormDataRequestBody = {
  good_reputation: string;
  poor_reputation: string;
  new_senders: string;
};

export type MailgunFullApiSchemaPATCHV3DynamicPoolsPoolNameMultipartFormDataRequestBody = {
  add_ip: string;
  remove_ip: string;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiIpPoolsListSuccessResponse = {
  ip_pools: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunTowerApiIpPoolsListDIPPDetailsResponse>;
  message: string;
};

export type MailgunFullApiSchemaPOSTV3IpPoolsMultipartFormDataRequestBody = {
  description: string;
  ip?: string;
  name: string;
};

export type MailgunFullApiSchemaPATCHV3IpPoolsPoolIdMultipartFormDataRequestBody = {
  add_ip?: string;
  description?: string;
  link_domain?: string;
  name?: string;
  remove_ip?: string;
  unlink_domain?: string;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiIpPoolsAddIpAddMultipleIPsRequestBody = {
  ips: ReadonlyArray<string>;
};

export type MailgunFullApiSchemaPUTV3IpPoolsPoolIdDelegateMultipartFormDataRequestBody = {
  subaccount_id: string;
};

export type MailgunFullApiSchemaDELETEV3IpPoolsPoolIdDelegateMultipartFormDataRequestBody = {
  subaccount_id: string;
};

export type MailgunFullApiSchemaGithubComMailgunBandersnatchApiDomainListResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBandersnatchModelDomain>;
  total_items: number;
  paging: MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingURLs;
};

export type MailgunFullApiSchemaGithubComMailgunBandersnatchModelHistoryRecord = {
  id: string;
  owning_account_id: string;
  account_id: string;
  account_name: string;
  domain_id: string;
  domain_name: string;
  new_band: string;
  prev_band: string;
  reason: string;
  bounce_rate: number | null;
  complaint_rate?: number | null;
  processed_count?: number | null;
  initiated_by?: string;
  timestamp: string;
};

export type MailgunFullApiSchemaPUTV1DynamicPoolsDomainsNameOverrideMultipartFormDataRequestBody = {
  pool: string;
};

export type MailgunFullApiSchemaGithubComMailgunBandersnatchApiListHistoryResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBandersnatchModelHistoryRecord>;
  total_items: number;
  paging: MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingURLs;
};

export type MailgunFullApiSchemaGithubComMailgunTerminatorHttpapiStatusResponse = {
  status: {};
  error: string | null;
  certificate?: string;
};

export type MailgunFullApiSchemaGithubComMailgunTerminatorHttpapiGenerateResponse = {
  message: string;
  location: string;
};

export type MailgunFullApiSchemaEventSeverityType = "temporary" | "permanent";

export type MailgunFullApiSchemaEventResponse = {
  method?: string;
  id?: string;
  event?: MailgunFullApiSchemaEventType;
  timestamp?: number;
  "log-level"?: "info" | "warn" | "error";
  flags?: {
  "is-authenticated"?: boolean;
  "is-routed"?: boolean;
  "is-amp"?: boolean;
  "is-encrypted"?: boolean;
  "is-test-mode"?: boolean;
};
  reject?: {
  reason?: string;
  description?: string;
};
  message?: MailgunFullApiSchemaMessageObject;
  tags?: ReadonlyArray<string>;
  "user-variables"?: {};
  storage?: {
  key?: string;
  url?: string;
  region?: string;
};
  geolocation?: {
  country?: string;
  region?: string;
  city?: string;
};
  "client-info"?: {
  "client-type"?: string;
  "client-os"?: string;
  "device-type"?: string;
  "client-name"?: string;
  "user-agent"?: string;
};
  ip?: string;
  "delivery-status"?: MailgunFullApiSchemaDeliveryStatusObject;
  batch?: {
  id?: string;
};
  severity?: MailgunFullApiSchemaEventSeverityType;
  "recipient-domain"?: string;
  "recipient-provider"?: string;
  template?: {
  name?: string;
  version?: string;
  "is-text"?: string;
};
  envelope?: MailgunFullApiSchemaEnvelopeObject;
};

export type MailgunFullApiSchemaGithubComMailgunScoutApiTagListResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunScoutModelTagsTagItem>;
  paging: MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingResponse;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelTagsTagItem = {
  tag: string;
  description: string;
  "first-seen"?: string;
  "last-seen"?: string;
};

export type MailgunFullApiSchemaGithubComMailgunScoutApiTagAggregateResponse = {
  tag?: string;
  provider?: {
  readonly [key: string]: {
  readonly [key: string]: number | undefined;
} | undefined;
};
  country?: {
  readonly [key: string]: {
  readonly [key: string]: number | undefined;
} | undefined;
};
  device?: {
  readonly [key: string]: {
  readonly [key: string]: number | undefined;
} | undefined;
};
};

export type MailgunFullApiSchemaGithubComMailgunScoutApiStatsResponse = {
  tag?: string;
  description: string;
  start: string;
  end: string;
  type?: MailgunFullApiSchemaGithubComMailgunScoutModelTypesStatType;
  resolution: string;
  stats: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunScoutModelStatsStatsItem>;
};

export type MailgunFullApiSchemaGithubComMailgunScoutApiStatTypesResponse = {
  items: ReadonlyArray<string>;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelTypesTagLimitItem = {
  id?: string;
  limit: number;
  count: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutApiProvidersAggregateResponse = {
  providers?: {
  readonly [key: string]: {
  readonly [key: string]: number | undefined;
} | undefined;
};
};

export type MailgunFullApiSchemaGithubComMailgunScoutApiDevicesAggregateResponse = {
  devices?: {
  readonly [key: string]: {
  readonly [key: string]: number | undefined;
} | undefined;
};
};

export type MailgunFullApiSchemaGithubComMailgunScoutApiCountriesAggregateResponse = {
  countries?: {
  readonly [key: string]: {
  readonly [key: string]: number | undefined;
} | undefined;
};
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangQuery = {
  start?: string;
  end?: string;
  resolution?: string;
  duration?: string;
  dimensions?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangDimensionName>;
  metrics?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangMetric>;
  filter?: MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangFilterPredicateGroup;
  include_subaccounts?: boolean;
  include_aggregates?: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiRegularMetricsResponse = {
  start?: string;
  end?: string;
  resolution?: string;
  duration?: string;
  dimensions?: ReadonlyArray<string>;
  pagination?: MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangPagination;
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiRegularItem>;
  aggregates?: MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiRegularAggregates;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangUsageQuery = {
  start?: string;
  end?: string;
  resolution?: string;
  duration?: string;
  dimensions?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangUsageDimensionName>;
  metrics?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangUsageMetric>;
  filter?: MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangFilterPredicateGroup;
  include_subaccounts?: boolean;
  include_aggregates?: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiUsageMetricsResponse = {
  start?: string;
  end?: string;
  resolution?: string;
  duration?: string;
  dimensions?: ReadonlyArray<string>;
  pagination?: MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangPagination;
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiUsageItem>;
  aggregates?: MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiUsageAggregates;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelLogsRequest = {
  start?: string;
  end?: string;
  duration: string;
  events?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelEvent>;
  metric_events?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelMetricEvent>;
  filter?: MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelFilterPredicateGroup;
  include_subaccounts?: boolean;
  include_totals?: boolean;
  pagination?: MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelPagination;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelLogsResponse = {
  start: string;
  end: string;
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelLogEvent>;
  pagination: MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelPagingResponse;
  aggregates?: MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelAggregates;
};

export type MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelUpdateTagRequest = {
  tag?: string;
  description?: string;
};

export type MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelListTagsRequest = {
  pagination?: MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelPagination;
  include_subaccounts?: boolean;
  include_metrics?: boolean;
  tag?: string;
};

export type MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelTagsResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelTag>;
  pagination?: MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelPagination;
};

export type MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelDeleteTagRequest = {
  tag?: string;
};

export type MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelTagLimitCountResponse = {
  limit: number;
  count: number;
  limit_reached: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiSendAlertListResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunThresholdsApiSendAlertItem>;
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiSendAlertRequest = {
  name: string;
  metric: MailgunFullApiSchemaGithubComMailgunThresholdsApiMetric;
  comparator: MailgunFullApiSchemaGithubComMailgunThresholdsApiMetricComparator;
  limit: string;
  dimension: MailgunFullApiSchemaGithubComMailgunThresholdsApiDimension;
  alert_channels?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunThresholdsApiAlertChannel>;
  filters?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunThresholdsApiFilter>;
  period?: string;
  description?: string;
};

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiSendAlertItem = {
  id?: string;
  parent_account_id?: string;
  subaccount_id?: string;
  account_group?: string;
  name: string;
  created_at: string;
  updated_at?: string;
  last_checked?: string;
  description?: string;
  alert_channels?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunThresholdsApiAlertChannel>;
  filters?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunThresholdsApiFilter>;
  metric: MailgunFullApiSchemaGithubComMailgunThresholdsApiMetric;
  comparator: MailgunFullApiSchemaGithubComMailgunThresholdsApiMetricComparator;
  limit: string;
  dimension: MailgunFullApiSchemaGithubComMailgunThresholdsApiDimension;
  period?: string;
};

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiThresholdLimitListResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunThresholdsApiThresholdLimitItem>;
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiLimitRequest = {
  name: string;
  metric: MailgunFullApiSchemaGithubComMailgunThresholdsApiLimitMetric;
  comparator: MailgunFullApiSchemaGithubComMailgunThresholdsApiMetricComparator;
  limit: string;
  dimension: MailgunFullApiSchemaGithubComMailgunThresholdsApiDimension;
  filters?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunThresholdsApiFilter>;
  period?: string;
  description?: string;
};

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiThresholdLimitItem = {
  id?: string;
  parent_account_id?: string;
  subaccount_id?: string;
  account_group?: string;
  name: string;
  created_at: string;
  updated_at?: string;
  last_checked?: string;
  description?: string;
  filters?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunThresholdsApiFilter>;
  metric: MailgunFullApiSchemaGithubComMailgunThresholdsApiLimitMetric;
  comparator: MailgunFullApiSchemaGithubComMailgunThresholdsApiMetricComparator;
  limit: string;
  dimension: MailgunFullApiSchemaGithubComMailgunThresholdsApiDimension;
  period?: string;
};

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiHitListResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunThresholdsApiHitListItem>;
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalApiListAlertsEventsResp = {
  events: ReadonlyArray<string>;
};

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalApiMutateEventSettingReq = {
  event_type: string;
  channel: MailgunFullApiSchemaGithubComMailgunAlertsChannelsChannel;
  settings: MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsChannelSettings;
};

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsEventSettings = {
  id?: string;
  event_type: string;
  channel: MailgunFullApiSchemaGithubComMailgunAlertsChannelsChannel;
  settings: MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsChannelSettings;
  disabled_at?: string | null;
};

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalApiSettingsResponse = {
  events: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsEventSettings>;
  webhooks: MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsWebhooks;
  slack: MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsSlack;
};

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsSlack = {
  token: string;
  team_id: string | null;
  team_name: string | null;
  scope: string | null;
};

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalApiResetWebhooksSigningKeyResp = {
  signing_key: string;
};

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalApiTestWebhookRequest = {
  event_type: string;
  url: string;
};

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalApiTestEmailRequest = {
  event_type: string;
  emails: ReadonlyArray<string>;
};

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalApiTestSlackRequest = {
  event_type: string;
  channel_ids?: ReadonlyArray<string>;
};

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalApiSlackChannel = {
  id: string;
  name: string;
  is_archived: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalApiListSlackChannelsResp = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAlertsInternalApiSlackChannel>;
  paging: MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingResponse;
};

export type MailgunFullApiSchemaPOSTV3DomainIDUnsubscribesImportMultipartFormDataRequestBody = {
  file: string;
};

export type MailgunFullApiSchemaPOSTV3DomainIDBouncesImportMultipartFormDataRequestBody = {
  file: string;
};

export type MailgunFullApiSchemaPOSTV3DomainIDComplaintsImportMultipartFormDataRequestBody = {
  file: string;
};

export type MailgunFullApiSchemaPOSTV3DomainIDWhitelistsImportMultipartFormDataRequestBody = {
  file: string;
};

export type MailgunFullApiSchemaGithubComMailgunBlackbookModelBounce = {
  address: string;
  code: string;
  error: string;
  created_at: MailgunFullApiSchemaGithubComMailgunMimeRFC822Time;
};

export type MailgunFullApiSchemaGithubComMailgunBlackbookApiSuppressionResponse = {
  message: string;
  address: string;
};

export type MailgunFullApiSchemaGithubComMailgunBlackbookApiGetBouncesPaginationResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBlackbookModelBounce>;
  paging: MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingResponse;
};

export type MailgunFullApiSchemaGithubComMailgunBlackbookApiBouncesList = ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBlackbookModelBounce>;

export type MailgunFullApiSchemaGithubComMailgunBlackbookModelUnsubscribe = {
  address: string;
  tags: ReadonlyArray<string>;
  created_at: MailgunFullApiSchemaGithubComMailgunMimeRFC822Time;
};

export type MailgunFullApiSchemaGithubComMailgunBlackbookApiGetUnsubscribesPaginationResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBlackbookModelUnsubscribe>;
  paging: MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingResponse;
};

export type MailgunFullApiSchemaGithubComMailgunBlackbookApiUnsubscribesList = ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBlackbookModelUnsubscribe>;

export type MailgunFullApiSchemaGithubComMailgunBlackbookModelComplaint = {
  address: string;
  created_at: MailgunFullApiSchemaGithubComMailgunMimeRFC822Time;
};

export type MailgunFullApiSchemaGithubComMailgunBlackbookApiGetComplaintsPaginationResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBlackbookModelComplaint>;
  paging: MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingResponse;
};

export type MailgunFullApiSchemaGithubComMailgunBlackbookApiComplaintsList = ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBlackbookModelComplaint>;

export type MailgunFullApiSchemaGithubComMailgunBlackbookModelWhitelist = {
  type: string;
  value: string;
  createdAt: MailgunFullApiSchemaGithubComMailgunMimeRFC822Time;
  reason: string;
};

export type MailgunFullApiSchemaGithubComMailgunBlackbookApiDeleteWhitelistRecordResponse = {
  message: string;
  value: string;
};

export type MailgunFullApiSchemaGithubComMailgunBlackbookApiGetWhitelistPaginationResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBlackbookModelWhitelist>;
  paging: MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingResponse;
};

export type MailgunFullApiSchemaPOSTV3DomainIDWhitelistsApplicationFormDataRequestBody = {
  address: string;
  domain?: string;
};

export type MailgunFullApiSchemaGithubComMailgunBlackbookApiInsertWhitelistRecordResponse = {
  message: string;
  type: string;
  value: string;
};

export type MailgunFullApiSchemaRouteResponse = {
  id?: string;
  priority?: number;
  description?: string;
  expression?: string;
  actions?: ReadonlyArray<string>;
  created_at?: string;
};

export type MailgunFullApiSchemaMailingListResponse = {
  address?: string;
  name?: string;
  description?: string;
  access_level?: string;
  reply_preference?: string;
  created_at?: string;
  members_count?: number;
};

export type MailgunFullApiSchemaListMemberResponse = {
  address?: string;
  name?: string;
  vars?: {};
  subscribed?: boolean;
};

export type MailgunFullApiSchemaListMemberRequest = {
  name?: string;
  address?: string;
  subscribed?: boolean;
  vars?: {};
};

export type MailgunFullApiSchemaPaginateMailingListResponse = {
  paging?: {
  first?: string;
  next?: string;
  previous?: string;
  last?: string;
};
  items?: ReadonlyArray<MailgunFullApiSchemaMailingListResponse>;
};

export type MailgunFullApiSchemaPaginateListMemberResponse = {
  paging?: {
  first?: string;
  next?: string;
  last?: string;
  previous?: string;
};
  items?: ReadonlyArray<MailgunFullApiSchemaListMemberResponse>;
};

export type MailgunFullApiSchemaGithubComMailgunTempleHttpapiGetPageResponse = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunTempleModelTemplate> | null;
  paging: MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingResponse;
};

export type MailgunFullApiSchemaPOSTV3DomainNameTemplatesMultipartFormDataRequestBody = {
  name: string;
  description?: string;
  createdBy?: string;
  template?: string;
  tag?: string;
  comment?: string;
  headers?: string;
};

export type MailgunFullApiSchemaGithubComMailgunTempleHttpapiCreateTemplateOrVersionResponse = {
  message: string;
  template: (MailgunFullApiSchemaGithubComMailgunTempleModelTemplate | MailgunFullApiSchemaJsonValue);
};

export type MailgunFullApiSchemaGithubComMailgunTempleHttpapiGetVersionsPageResponse = {
  template: (MailgunFullApiSchemaGithubComMailgunTempleModelTemplate | MailgunFullApiSchemaJsonValue);
  paging: MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingResponse;
};

export type MailgunFullApiSchemaPOSTV3DomainNameTemplatesTemplateNameVersionsMultipartFormDataRequestBody = {
  template: string;
  tag: string;
  comment?: string;
  active?: string;
  headers?: string;
};

export type MailgunFullApiSchemaGithubComMailgunTempleHttpapiGetTemplateOrVersionResponse = {
  template: (MailgunFullApiSchemaGithubComMailgunTempleModelTemplate | MailgunFullApiSchemaJsonValue);
};

export type MailgunFullApiSchemaPUTV3DomainNameTemplatesTemplateNameMultipartFormDataRequestBody = {
  description: string;
};

export type MailgunFullApiSchemaGithubComMailgunTempleHttpapiUpdateOrDeleteTemplateOrVersionResponse = {
  message: string;
  template: MailgunFullApiSchemaGithubComMailgunTempleHttpapiTemplateUpdate;
};

export type MailgunFullApiSchemaPUTV3DomainNameTemplatesTemplateNameVersionsVersionNameMultipartFormDataRequestBody = {
  template?: string;
  comment?: string;
  active?: string;
  headers?: string;
};

export type MailgunFullApiSchemaGithubComMailgunTempleHttpapiTemplateCopyParams = {
  requests: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunTempleHttpapiTemplateCopyRequest>;
  source_versions?: ReadonlyArray<string>;
};

export type MailgunFullApiSchemaGithubComMailgunTempleHttpapiTemplateCopyResponse = {
  message: string;
  failed_copies: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunTempleHttpapiTemplateCopyRequest>;
  error?: string;
};

export type MailgunFullApiSchemaGithubComMailgunTempleHttpapiVersionCopyResponse = {
  message: string;
  version: (MailgunFullApiSchemaGithubComMailgunTempleModelVersion | MailgunFullApiSchemaJsonValue);
  template: (MailgunFullApiSchemaGithubComMailgunTempleModelVersion | MailgunFullApiSchemaJsonValue);
};

export type MailgunFullApiSchemaPOSTV4TemplatesMultipartFormDataRequestBody = {
  name: string;
  description?: string;
  createdBy?: string;
  template?: string;
  tag?: string;
  comment?: string;
  headers?: string;
};

export type MailgunFullApiSchemaPOSTV4TemplatesTemplateNameVersionsMultipartFormDataRequestBody = {
  template: string;
  tag: string;
  comment?: string;
  active?: string;
  headers?: string;
};

export type MailgunFullApiSchemaPUTV4TemplatesTemplateNameMultipartFormDataRequestBody = {
  description: string;
};

export type MailgunFullApiSchemaPUTV4TemplatesTemplateNameVersionsVersionNameMultipartFormDataRequestBody = {
  template?: string;
  comment?: string;
  active?: string;
  headers?: string;
};

export type MailgunFullApiSchemaGithubComMailgunAccountsApiGenericMessage = {
  message?: string;
};

export type MailgunFullApiSchemaGithubComMailgunAccountsApiHTTPSigningKey = {
  message?: string;
  http_signing_key?: string;
};

export type MailgunFullApiSchemaGithubComMailgunAccountsApiRecipientResponse = {
  email?: string;
  activated?: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunAccountsApiGenericSuccess = {
  success?: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunAccountsApiSubaccountResponse = {
  subaccount?: MailgunFullApiSchemaGithubComMailgunAccountsApiSubaccount;
};

export type MailgunFullApiSchemaGithubComMailgunAccountsApiSubaccountListResponse = {
  subaccounts?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAccountsApiSubaccount>;
  total?: number;
};

export type MailgunFullApiSchemaGithubComMailgunAccountsApiCustomMessageLimitResponse = {
  limit?: number;
  current?: number;
  period?: string;
};

export type MailgunFullApiSchemaGithubComMailgunAccountsApiFeaturesResponse = {
  readonly [key: string]: MailgunFullApiSchemaJsonValue | undefined;
};

export type MailgunFullApiSchemaGithubComMailgunCerberusKeysKeysResp = {
  total_count: number;
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunCerberusKeysKeyInfoResp>;
};

export type MailgunFullApiSchemaPOSTV1KeysMultipartFormDataRequestBody = {
  domain_name?: string;
  kind?: "domain" | "user" | "web";
  description?: string;
  expiration?: number;
  role: "admin" | "basic" | "sending" | "developer";
  user_id?: string;
  user_name?: string;
  email?: string;
};

export type MailgunFullApiSchemaGithubComMailgunCerberusKeysCreateKeyResp = {
  message: string;
  key: MailgunFullApiSchemaGithubComMailgunCerberusKeysKeyInfoSecretResp;
};

export type MailgunFullApiSchemaGithubComMailgunCerberusKeysPublicKeyResp = {
  key: string;
  message: string;
};

export type MailgunFullApiSchemaGithubComMailgunCerberusCredentialsListCredsResp = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunCerberusCredentialsCredentialMetadata>;
  total_count: number;
};

export type MailgunFullApiSchemaPOSTV3DomainsDomainNameCredentialsMultipartFormDataRequestBody = {
  login: string;
  mailbox?: string;
  system?: boolean;
  password?: string;
};

export type MailgunFullApiSchemaGithubComMailgunCerberusCredentialsCreateCredsResp = {
  message: string;
  note?: string;
  credentials?: {
  readonly [key: string]: string | undefined;
};
};

export type MailgunFullApiSchemaGithubComMailgunCerberusCredentialsDeleteDomainCredsResp = {
  message: string;
  count: number;
};

export type MailgunFullApiSchemaPUTV3DomainsDomainNameCredentialsSpecMultipartFormDataRequestBody = {
  password?: string;
};

export type MailgunFullApiSchemaGithubComMailgunCerberusCredentialsDeleteCredsResp = {
  message: string;
  spec: string;
};

export type MailgunFullApiSchemaGithubComMailgunCerberusWhitelistV2WhitelistResp = {
  addresses: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunCerberusWhitelistWhitelistRespEntry>;
};

export type MailgunFullApiSchemaPUTV2IpWhitelistMultipartFormDataRequestBody = {
  address: string;
  description?: string;
};

export type MailgunFullApiSchemaPOSTV2IpWhitelistMultipartFormDataRequestBody = {
  address: string;
  description?: string;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiListStatsResp = {
  items: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesStat | MailgunFullApiSchemaJsonValue)>;
  _duration: string;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiListAccountStatsResp = {
  items: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesAccountStat | MailgunFullApiSchemaJsonValue)>;
  total?: number | null;
  req?: {};
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiListDomainStatsResp = {
  items: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesDomainStat | MailgunFullApiSchemaJsonValue)>;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiListEntityStatsResp = {
  items: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesEntityStat | MailgunFullApiSchemaJsonValue)>;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalConfigEntities = {
  readonly [key: string]: MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalConfigEntity | undefined;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalConfigRules = {
  readonly [key: string]: MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalConfigRule | undefined;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiMetricsRequest = {
  start?: MailgunFullApiSchemaGithubComMailgunHolsterV4ClockRFC822Time;
  end?: MailgunFullApiSchemaGithubComMailgunHolsterV4ClockRFC822Time;
  resolution?: MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesResolution;
  duration?: string;
  dimensions?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiDimension>;
  metrics?: ReadonlyArray<string>;
  filter?: MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiFilterPredicateGroup;
  include_subaccounts?: boolean;
  pagination?: MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiPaginationReq;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiMetricsResponse = {
  start: string;
  end: string;
  resolution: MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesResolution;
  duration?: string;
  dimensions?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiDimension>;
  pagination: MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiPaginationResp;
  items: ReadonlyArray<(MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesMetricsItem | MailgunFullApiSchemaJsonValue)>;
};

export type MailgunFullApiSchemaGithubComMailgunPathfinderHttpapiForwardsRule = {
  id: string;
  account_id: string;
  domain_name: string;
  domain_id: string;
  match: string;
  forward: MailgunFullApiSchemaGithubComMailgunPathfinderHttpapiForward;
  created_at: string;
  updated_at: string;
};

export type MailgunFullApiSchemaGithubComMailgunPathfinderHttpapiListForwardsRulesResp = {
  items: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunPathfinderHttpapiForwardsRule>;
  paging: MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingResponse;
};

export type MailgunFullApiSchemaGithubComMailgunUsersApiUserListResponse = {
  users?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunUsersApiUserResponse>;
  total?: number;
};

export type MailgunFullApiSchemaGithubComMailgunUsersApiUserResponse = {
  id?: string;
  activated?: boolean;
  name?: string;
  is_disabled?: boolean;
  email?: string;
  email_details?: {
  address?: string;
  is_valid?: boolean;
  reason?: string;
  parts?: {
  domain?: string;
  local_part?: string;
  display_name?: string;
};
};
  role?: string;
  account_id?: string;
  opened_ip?: string;
  is_master?: boolean;
  metadata?: {};
  tfa_enabled?: boolean;
  tfa_active?: boolean;
  tfa_created_at?: (string | MailgunFullApiSchemaJsonValue);
  password_updated_at?: (string | MailgunFullApiSchemaJsonValue);
  preferences?: {
  time_zone?: string;
  time_format?: string;
  programming_language?: string;
};
  auth?: MailgunFullApiSchemaGithubComMailgunUsersApiUserAuthResponse;
  github_user_id?: (string | MailgunFullApiSchemaJsonValue);
  salesforce_user_id?: (string | MailgunFullApiSchemaJsonValue);
  migration_status?: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsClientGolangDomain = {
  archive_to?: string;
  created_at: string;
  id: string;
  is_disabled: boolean;
  name: string;
  require_tls: boolean;
  skip_verification: boolean;
  smtp_login: string;
  smtp_password?: string;
  spam_action: string;
  subaccount_id?: string;
  state: string;
  type: string;
  tracking_host?: string;
  use_automatic_sender_security: boolean;
  webhooks_redact_pii?: boolean;
  web_prefix: string;
  web_scheme: string;
  wildcard: boolean;
  disabled?: (MailgunFullApiSchemaGithubComMailgunDomainsClientGolangDisabled | MailgunFullApiSchemaJsonValue);
  encrypt_incoming_message: boolean;
  message_ttl: number;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsClientGolangRecord = {
  is_active: boolean;
  cached: ReadonlyArray<string>;
  name?: string;
  priority?: string;
  record_type: string;
  valid: string;
  value: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhooksResponse = {
  accepted?: (MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhookURLs | MailgunFullApiSchemaJsonValue);
  delivered?: (MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhookURLs | MailgunFullApiSchemaJsonValue);
  opened?: (MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhookURLs | MailgunFullApiSchemaJsonValue);
  clicked?: (MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhookURLs | MailgunFullApiSchemaJsonValue);
  unsubscribed?: (MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhookURLs | MailgunFullApiSchemaJsonValue);
  complained?: (MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhookURLs | MailgunFullApiSchemaJsonValue);
  temporary_fail?: (MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhookURLs | MailgunFullApiSchemaJsonValue);
  permanent_fail?: (MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhookURLs | MailgunFullApiSchemaJsonValue);
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhookResponse = {
  urls?: ReadonlyArray<string>;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiTrackingSettings = {
  open: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiOpenSettings;
  click: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiClickSettings;
  unsubscribe: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUnsubscribeSettings;
  web_scheme: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiClickSettings = {
  active: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiOpenSettings = {
  active: boolean;
  place_at_the_top: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUnsubscribeSettings = {
  active: boolean;
  html_footer: string;
  text_footer: string;
};

export type MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingResponse = {
  previous: string;
  first: string;
  next: string;
  last: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiExceededQueueQuotaJSON = {
  is_disabled: boolean;
  disabled?: MailgunFullApiSchemaGithubComMailgunDomainsHttpapiExceededQueueQuotaDisabledJSON;
};

export type MailgunFullApiSchemaGithubComMailgunPendulumApiDomain = {
  id: string;
  account_id: string;
  sid: string;
  name: string;
  state: string;
  active_selector?: string;
  rotation_enabled: string;
  rotation_interval: string;
  records?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunPendulumDkimDNSRecord>;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiSubaccountsListSubaccountDIPPsResponseItem = {
  pool_id: string;
  subaccount_id: string;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiDomainDippSpilloverDIPPSpilloverDoc = {
  pool_id: string;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiDomainDippSpilloverDIPPSpilloverRequest = {
  pool_id: string | null;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiAccountDippSpilloverDIPPSpilloverDoc = {
  pool_id: string;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiAccountDippSpilloverDIPPSpilloverRequest = {
  pool_id: string | null;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiAccountListIpsDetailsDocResponse = {
  ip: string;
  is_on_warmup: boolean;
  dedicated: boolean;
  enabled: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiAccountItem = {
  ips: ReadonlyArray<string>;
  domain: string;
  linked_at?: string;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiAccountListIpsAccountIPDoc = {
  address: string;
  parent_account_id: string;
  account_id: string;
  pool_ids: ReadonlyArray<string>;
  dedicated: boolean;
  created_at?: string;
  pool_last_modified_at: string;
  domains_last_modified_at: string;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiIpPoolsListDIPPDetailsResponse = {
  description: string;
  ips: ReadonlyArray<string>;
  metadata: MailgunFullApiSchemaGithubComMailgunTowerApiIpPoolsListPoolMetadata;
  is_inherited: boolean;
  is_linked: boolean;
  name: string;
  pool_id: string;
};

export type MailgunFullApiSchemaGithubComMailgunBandersnatchModelDomain = {
  id: string;
  account_id: string;
  account_name: string;
  name: string;
  registered_at: string;
  pool: string;
  override: boolean;
  bounce_rate?: number | null;
  complaint_rate?: number | null;
  processed_count?: number | null;
};

export type MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiPagingPagingURLs = {
  Next: string;
  Previous: string;
  First: string;
  Last: string;
};

export type MailgunFullApiSchemaEventType = "accepted" | "delivered" | "failed" | "rejected" | "clicked" | "opened" | "unsubscribed" | "stored" | "complained" | "email_validation" | "list_member_uploaded" | "list_member_upload_error" | "list_uploaded";

export type MailgunFullApiSchemaMessageObject = {
  attachments: ReadonlyArray<{
  filename: string;
  "content-type": string;
  size: number;
}>;
  headers: {
  "message-id": string;
  from: string;
  to?: string;
  subject?: string;
};
  size: number;
  "scheduled-for"?: string;
};

export type MailgunFullApiSchemaDeliveryStatusObject = {
  code?: number;
  "attempt-no"?: number;
  message?: string;
  description?: string;
  "enhanced-code"?: string;
  mxhost?: string;
  "certificate-verified"?: boolean;
  tls?: boolean;
  utf8?: boolean;
  "first-delivery-attempt-seconds"?: number;
  "session-seconds"?: number;
  "retry-seconds"?: number;
};

export type MailgunFullApiSchemaEnvelopeObject = {
  sender?: string;
  targets?: string;
  transport?: string;
  "sending-ip"?: string;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelTypesStatType = {
  type: string;
  key: string;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsStatsItem = {
  time: string;
  accepted?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsAccepted;
  delivered?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsDelivered;
  failed?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsFailed;
  stored?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsStored;
  opened?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsOpened;
  clicked?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsClicked;
  unsubscribed?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsUnsubscribed;
  complained?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsComplained;
  campaign?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsCampaign;
  email_validation?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsEmailValidation;
  seed_test?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsSeedTest;
  ip_blocklist_monitoring?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsBlocklistMonitoring;
  domain_blocklist_monitoring?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsBlocklistMonitoring;
  email_preview?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsEmailPreview;
  email_preview_failed?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsEmailPreviewFailed;
  link_validation?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsLinkValidation;
  link_validation_failed?: MailgunFullApiSchemaGithubComMailgunScoutModelStatsLinkValidationFailed;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangDimensionName = "bot" | "country" | "ip_pool" | "recipient_domain" | "recipient_provider" | "ip" | "domain" | "tag" | "device" | "subaccount" | "time";

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangMetric = "accepted_incoming_count" | "accepted_outgoing_count" | "accepted_count" | "delivered_smtp_count" | "delivered_http_count" | "delivered_optimized_count" | "delivered_count" | "processed_count" | "sent_count" | "opened_count" | "clicked_count" | "unique_opened_count" | "unique_clicked_count" | "unsubscribed_count" | "complained_count" | "failed_count" | "temporary_failed_count" | "permanent_failed_count" | "temporary_failed_esp_block_count" | "permanent_failed_esp_block_count" | "webhook_count" | "rate_limit_count" | "permanent_failed_optimized_count" | "permanent_failed_old_count" | "bounced_count" | "hard_bounces_count" | "soft_bounces_count" | "delayed_bounce_count" | "suppressed_bounces_count" | "suppressed_unsubscribed_count" | "suppressed_complaints_count" | "delivered_first_attempt_count" | "delayed_first_attempt_count" | "delivered_two_plus_attempts_count" | "delivered_rate" | "opened_rate" | "clicked_rate" | "unique_opened_rate" | "unique_opened_rate" | "unsubscribed_rate" | "complained_rate" | "bounce_rate" | "permanent_fail_rate" | "temporary_fail_rate" | "delayed_rate" | "delayed_first_attempt_rate";

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangFilterPredicateGroup = {
  AND: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangFilterPredicate>;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangPagination = {
  sort: string;
  skip: number;
  limit: number;
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiRegularItem = {
  dimensions?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangDimension>;
  metrics?: MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiRegularMetrics;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiRegularAggregates = {
  metrics: MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiRegularMetrics;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangUsageDimensionName = "subaccount" | "time";

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangUsageMetric = "email_validation_count" | "email_validation_public_count" | "email_validation_valid_count" | "email_validation_single_count" | "email_validation_bulk_count" | "email_validation_list_count" | "email_validation_mailgun_count" | "email_validation_mailjet_count" | "email_preview_count" | "email_preview_failed_count" | "link_validation_count" | "link_validation_failed_count" | "seed_test_count" | "ip_blocklist_monitoring_count" | "domain_blocklist_monitoring_count" | "accessibility_count" | "accessibility_failed_count" | "image_validation_count" | "image_validation_failed_count" | "spam_content_check_count" | "spam_content_check_failed_count" | "archived_count" | "processed_count";

export type MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiUsageItem = {
  dimensions?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangDimension>;
  metrics?: MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiUsageMetrics;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiUsageAggregates = {
  metrics: MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiUsageMetrics;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelEvent = "accepted" | "delivered" | "failed" | "opened" | "unique_opened" | "clicked" | "unique_clicked" | "unsubscribed" | "complained" | "rejected" | "stored" | "email_validation" | "list_uploaded" | "list_member_uploaded" | "list_member_upload_error" | "trapped";

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelMetricEvent = "accepted_incoming" | "accepted_outgoing" | "accepted" | "delivered_smtp" | "delivered_http" | "delivered_optimized" | "delivered" | "stored" | "opened" | "clicked" | "unique_opened" | "unique_clicked" | "complained" | "unsubscribed" | "failed" | "processed" | "sent" | "temporary_failed" | "permanent_failed" | "esp_block" | "temporary_failed_esp_block" | "permanent_failed_esp_block" | "webhook_failure" | "permanent_failed_optimized" | "permanent_failed_old" | "bounced" | "hard_bounces" | "soft_bounces" | "delayed_bounce" | "suppressed_bounces" | "suppressed_unsubscribed" | "suppressed_complaints" | "delivered_first_attempt" | "delivered_subsequent" | "delivered_two_plus_attempts" | "delayed_first_attempt";

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelFilterPredicateGroup = {
  AND: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelFilterPredicate>;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelPagination = {
  sort?: string;
  token?: string;
  limit?: number;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelLogEvent = {
  id: string;
  event: string;
  "@timestamp": string;
  account?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelAccount | MailgunFullApiSchemaJsonValue);
  campaigns?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelCampaign>;
  tags?: ReadonlyArray<string>;
  method?: string;
  "originating-ip"?: string;
  "api-key-id"?: string;
  "delivered-at"?: string;
  "delivery-status"?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelDeliveryStatus | MailgunFullApiSchemaJsonValue);
  "i-delivery-optimizer"?: string;
  domain: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelDomain | MailgunFullApiSchemaJsonValue);
  recipient?: string;
  "recipient-domain"?: string;
  "recipient-provider"?: string;
  envelope?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelEnvelope | MailgunFullApiSchemaJsonValue);
  storage?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelStorage | MailgunFullApiSchemaJsonValue);
  template?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelTemplate | MailgunFullApiSchemaJsonValue);
  "log-level"?: string;
  "user-variables"?: string;
  message?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelMessage | MailgunFullApiSchemaJsonValue);
  flags?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelFlags | MailgunFullApiSchemaJsonValue);
  "primary-dkim"?: string;
  ip?: string;
  geolocation?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelGeoLocation | MailgunFullApiSchemaJsonValue);
  "client-info"?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelClientInfo | MailgunFullApiSchemaJsonValue);
  severity?: string;
  reason?: string;
  routes?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelRoutes | MailgunFullApiSchemaJsonValue);
  "mailing-list"?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelMailingList | MailgunFullApiSchemaJsonValue);
  url?: string;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelPagingResponse = {
  previous?: string;
  next?: string;
  first?: string;
  last?: string;
  total?: number;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelAggregates = {
  all?: number;
  metrics?: {
  readonly [key: string]: number | undefined;
};
};

export type MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelPagination = {
  sort?: string;
  skip?: number;
  limit?: number;
  total?: number;
  include_total?: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelTag = {
  account_id: string;
  parent_account_id: string;
  tag: string;
  description: string;
  first_seen?: MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelCustomTime;
  last_seen?: MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelCustomTime;
  metrics?: MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangMetrics;
  account_name: string;
};

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiMetric = "hard_bounce_rate" | "temporary_fail_rate" | "delivered_rate" | "complained_rate";

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiMetricComparator = "=" | "!=" | "<" | "<=" | ">" | ">=";

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiDimension = "domain" | "ip" | "ip_pool" | "recipient_provider" | "subaccount";

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiAlertChannel = "email" | "slack" | "webhook";

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiFilter = {
  dimension: MailgunFullApiSchemaGithubComMailgunThresholdsApiDimension;
  comparator: MailgunFullApiSchemaGithubComMailgunThresholdsApiFilterComparator;
  values: ReadonlyArray<string>;
};

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiLimitMetric = "email_preview_success_count" | "seed_test_count";

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiHitListItem = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  triggered: boolean;
  expires_at: string;
  latest_value: string;
  metric: MailgunFullApiSchemaGithubComMailgunThresholdsApiMetric;
  comparator: MailgunFullApiSchemaGithubComMailgunThresholdsApiMetricComparator;
  limit: string;
  parent_account_id?: string;
  subaccount_id?: string;
  dimension?: MailgunFullApiSchemaGithubComMailgunThresholdsApiDimension;
  dimension_value?: string;
};

export type MailgunFullApiSchemaGithubComMailgunAlertsChannelsChannel = "email" | "webhook" | "slack";

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsChannelSettings = {
  url?: string;
  emails?: ReadonlyArray<string>;
  channel_ids?: ReadonlyArray<string>;
  disabled_channel_ids?: {
  readonly [key: string]: MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsDisabledChannel | undefined;
};
};

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsWebhooks = {
  signing_key: string;
};

export type MailgunFullApiSchemaGithubComMailgunMimeRFC822Time = {};

export type MailgunFullApiSchemaGithubComMailgunTempleModelTemplate = {
  name: string;
  description?: string;
  createdAt?: string;
  createdBy?: string;
  id?: string;
  domain?: string;
  version?: (MailgunFullApiSchemaGithubComMailgunTempleModelVersion | MailgunFullApiSchemaJsonValue);
  versions?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunTempleModelVersion> | null;
};

export type MailgunFullApiSchemaGithubComMailgunTempleHttpapiTemplateUpdate = {
  name: string;
  version?: (MailgunFullApiSchemaGithubComMailgunTempleHttpapiVersionUpdate | MailgunFullApiSchemaJsonValue);
};

export type MailgunFullApiSchemaGithubComMailgunTempleHttpapiTemplateCopyRequest = {
  account_id: string;
  name: string;
  domain?: string;
};

export type MailgunFullApiSchemaGithubComMailgunTempleModelVersion = {
  tag: string;
  template?: string;
  engine: string;
  mjml: string;
  createdAt: string;
  comment: string;
  active: boolean;
  id: string;
  headers?: {
  readonly [key: string]: string | undefined;
};
};

export type MailgunFullApiSchemaGithubComMailgunAccountsApiSubaccount = {
  id?: string;
  name?: string;
  created_at?: string;
  updated_at?: string;
  status?: MailgunFullApiSchemaGithubComMailgunAccountsApiSubaccountStatus;
  features?: MailgunFullApiSchemaGithubComMailgunAccountsApiFeaturesResponse;
};

export type MailgunFullApiSchemaGithubComMailgunCerberusKeysKeyInfoResp = {
  id: string;
  description: string;
  kind: MailgunFullApiSchemaGithubComMailgunCerberusKeysKind;
  role: MailgunFullApiSchemaGithubComMailgunCerberusKeysRole;
  created_at: string;
  updated_at: string;
  expires_at?: string;
  disabled_reason?: string;
  is_disabled: boolean;
  domain_name: (string | MailgunFullApiSchemaJsonValue);
  requestor: (string | MailgunFullApiSchemaJsonValue);
  user_name: (string | MailgunFullApiSchemaJsonValue);
};

export type MailgunFullApiSchemaGithubComMailgunCerberusKeysKeyInfoSecretResp = {
  id: string;
  description: string;
  kind: MailgunFullApiSchemaGithubComMailgunCerberusKeysKind;
  role: MailgunFullApiSchemaGithubComMailgunCerberusKeysRole;
  created_at: string;
  updated_at: string;
  expires_at?: string;
  disabled_reason?: string;
  is_disabled: boolean;
  domain_name: (string | MailgunFullApiSchemaJsonValue);
  requestor: (string | MailgunFullApiSchemaJsonValue);
  user_name: (string | MailgunFullApiSchemaJsonValue);
  secret: string;
};

export type MailgunFullApiSchemaGithubComMailgunCerberusCredentialsCredentialMetadata = {
  mailbox: string;
  login: string;
  created_at: string;
  size_bytes: (string | MailgunFullApiSchemaJsonValue);
};

export type MailgunFullApiSchemaGithubComMailgunCerberusWhitelistWhitelistRespEntry = {
  ip_address: string;
  description: string;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesStat = {
  subaccount?: (MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesSubaccount | MailgunFullApiSchemaJsonValue);
  domain?: (MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesDomain | MailgunFullApiSchemaJsonValue);
  "rule-id"?: string;
  "entity-id"?: string;
  "short-explanation"?: string;
  bounced: MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesBouncedStat;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesAccountStat = {
  domain: MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesDomain;
  bounced: MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesBouncedStat;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesDomainStat = {
  "entity-id": string;
  "entity-name": string;
  bounced: MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesBouncedStat;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesEntityStat = {
  "rule-id": string;
  category: string;
  severity: string;
  "sample-text": string;
  explanation: string;
  bounced: MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesBouncedStat;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalConfigEntity = {
  name: string;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalConfigRule = {
  entity_id?: string;
  class?: string;
  "sample-text"?: string;
  explanation?: string;
  "short-explanation"?: string;
};

export type MailgunFullApiSchemaGithubComMailgunHolsterV4ClockRFC822Time = {};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesResolution = "day" | "hour";

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiDimension = "entity-name" | "domain.name" | "envelope.sending-ip" | "account.name" | "envelope.i-ip-pool-name" | "tags" | "tag" | "recipient-domain" | "group-id" | "criticality" | "severity" | "category" | "timestamp";

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiFilterPredicateGroup = {
  AND: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiFilterPredicate>;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiPaginationReq = {
  sort?: string;
  skip?: number;
  limit?: number;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiPaginationResp = {
  sort: string;
  skip: number;
  limit: number;
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesMetricsItem = {
  "account.id"?: string | null;
  "account.name"?: string | null;
  "entity-name"?: string | null;
  "recipient-provider"?: string | null;
  "recipient-domain"?: string | null;
  "domain.name"?: string | null;
  "envelope.i-ip-pool-id"?: string | null;
  "envelope.i-ip-pool-name"?: string | null;
  "envelope.sending-ip"?: string | null;
  timestamp?: string | null;
  tags?: string | null;
  tag?: string | null;
  criticality?: string | null;
  severity?: string | null;
  category?: string | null;
  "group-id"?: string | null;
  "sample-text"?: string | null;
  explanation?: string | null;
  metrics: MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesMetricsCountsAndRates;
};

export type MailgunFullApiSchemaGithubComMailgunPathfinderHttpapiForward = {
  urls: ReadonlyArray<string>;
  recipients?: ReadonlyArray<string>;
  store?: string;
};

export type MailgunFullApiSchemaGithubComMailgunUsersApiUserAuthResponse = {
  method: string;
  prior_method?: string;
  prior_details?: {};
};

export type MailgunFullApiSchemaGithubComMailgunDomainsClientGolangDisabled = {
  code: string;
  note: string;
  permanently: boolean;
  reason: string;
  until?: string;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiWebhookURLs = {
  urls: ReadonlyArray<string>;
};

export type MailgunFullApiSchemaGithubComMailgunDomainsHttpapiExceededQueueQuotaDisabledJSON = {
  until: string;
  reason: string;
};

export type MailgunFullApiSchemaGithubComMailgunPendulumDkimDNSRecord = {
  name: string;
  type: string;
  identifier: string;
  value: string;
  comment: string;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiIpPoolsListPoolMetadata = {
  assignments: {
  readonly [key: string]: MailgunFullApiSchemaGithubComMailgunTowerApiIpPoolsListIPAssignment | undefined;
};
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsAccepted = {
  incoming: number;
  outgoing: number;
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsDelivered = {
  smtp: number;
  http: number;
  optimized: number;
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsFailed = {
  temporary: {
  espblock: number;
  total: number;
};
  permanent: {
  "suppress-bounce": number;
  "suppress-unsubscribe": number;
  "suppress-complaint": number;
  bounce: number;
  "delayed-bounce": number;
  webhook: number;
  optimized: number;
  total: number;
};
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsStored = {
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsOpened = {
  total: number;
  unique?: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsClicked = {
  total: number;
  unique?: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsUnsubscribed = {
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsComplained = {
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsCampaign = {
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsEmailValidation = {
  total: number;
  public: number;
  valid: number;
  single: number;
  bulk: number;
  list: number;
  mailgun: number;
  mailjet: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsSeedTest = {
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsBlocklistMonitoring = {
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsEmailPreview = {
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsEmailPreviewFailed = {
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsLinkValidation = {
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunScoutModelStatsLinkValidationFailed = {
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangFilterPredicate = {
  attribute: MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangFilterAttribute;
  comparator: MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangFilterComparator;
  values?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangLabeledValue>;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangDimension = {
  dimension: string;
  value: string;
  display_value: string;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiRegularMetrics = {
  accepted_incoming_count?: number | null;
  accepted_outgoing_count?: number | null;
  accepted_count?: number | null;
  delivered_smtp_count?: number | null;
  delivered_http_count?: number | null;
  delivered_optimized_count?: number | null;
  delivered_count?: number | null;
  stored_count?: number | null;
  processed_count?: number | null;
  sent_count?: number | null;
  opened_count?: number | null;
  clicked_count?: number | null;
  unique_opened_count?: number | null;
  unique_clicked_count?: number | null;
  unsubscribed_count?: number | null;
  complained_count?: number | null;
  failed_count?: number | null;
  temporary_failed_count?: number | null;
  permanent_failed_count?: number | null;
  temporary_failed_esp_block_count?: number | null;
  permanent_failed_esp_block_count?: number | null;
  rate_limit_count?: number | null;
  webhook_count?: number | null;
  permanent_failed_optimized_count?: number | null;
  permanent_failed_old_count?: number | null;
  bounced_count?: number | null;
  hard_bounces_count?: number | null;
  soft_bounces_count?: number | null;
  delayed_bounce_count?: number | null;
  suppressed_bounces_count?: number | null;
  suppressed_unsubscribed_count?: number | null;
  suppressed_complaints_count?: number | null;
  delivered_first_attempt_count?: number | null;
  delayed_first_attempt_count?: number | null;
  delivered_subsequent_count?: number | null;
  delivered_two_plus_attempts_count?: number | null;
  delivered_rate?: string;
  opened_rate?: string;
  clicked_rate?: string;
  unique_opened_rate?: string;
  unique_clicked_rate?: string;
  unsubscribed_rate?: string;
  complained_rate?: string;
  bounce_rate?: string;
  fail_rate?: string;
  permanent_fail_rate?: string;
  temporary_fail_rate?: string;
  delayed_rate?: string;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiUsageMetrics = {
  processed_count?: number | null;
  email_validation_count?: number | null;
  email_validation_public_count?: number | null;
  email_validation_valid_count?: number | null;
  email_validation_single_count?: number | null;
  email_validation_bulk_count?: number | null;
  email_validation_list_count?: number | null;
  email_validation_mailgun_count?: number | null;
  email_validation_mailjet_count?: number | null;
  email_preview_count?: number | null;
  email_preview_failed_count?: number | null;
  link_validation_count?: number | null;
  link_validation_failed_count?: number | null;
  seed_test_count?: number | null;
  ip_blocklist_monitoring_count?: number | null;
  domain_blocklist_monitoring_count?: number | null;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelFilterPredicate = {
  attribute: MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelFilterAttribute;
  comparator: string;
  values: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelLabeledValue>;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelAccount = {
  "parent-id"?: string;
  id?: string;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelCampaign = {
  id?: string;
  name?: string;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelDeliveryStatus = {
  message?: string;
  "attempt-no"?: number;
  code?: number;
  "bounce-type"?: string;
  description?: string;
  "session-seconds"?: number;
  "retry-seconds"?: number;
  "enhanced-code"?: string;
  "mx-host"?: string;
  "certificate-verified"?: boolean;
  tls?: boolean;
  utf8?: boolean;
  "first-delivery-attempt-seconds"?: number;
  "last-code"?: number;
  "last-message"?: string;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelDomain = {
  name: string;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelEnvelope = {
  sender?: string;
  transport?: string;
  "sending-ip"?: string;
  targets?: string;
  "i-ip-pool-id"?: string;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelStorage = {
  region?: string;
  env?: string;
  key?: string;
  url?: ReadonlyArray<string>;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelTemplate = {
  name?: string;
  version?: string;
  "is-text"?: boolean;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelMessage = {
  headers?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelMessageHeaders | MailgunFullApiSchemaJsonValue);
  attachments?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelAttachment>;
  recipients?: ReadonlyArray<string>;
  size?: number;
  "scheduled-for"?: number;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelFlags = {
  "is-authenticated": boolean;
  "is-system-test": boolean;
  "is-routed": boolean;
  "is-amp"?: boolean;
  "is-test-mode": boolean;
  "is-delayed-bounce": boolean;
  "is-callback": boolean;
  "is-encrypted"?: boolean;
  "is-webhook": boolean;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelGeoLocation = {
  city?: string;
  country?: string;
  region?: string;
  timezone?: string;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelClientInfo = {
  "client-name"?: string;
  "client-os"?: string;
  "client-type"?: string;
  "device-type"?: string;
  "user-agent"?: string;
  ip?: string;
  bot?: string;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelRoutes = {
  actions?: string;
  description?: string;
  expression?: string;
  id?: string;
  priority?: number;
  match?: (MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelRoutesMatch | MailgunFullApiSchemaJsonValue);
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelMailingList = {
  address?: string;
  "list-id"?: string;
  sid?: string;
};

export type MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelCustomTime = {};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangMetrics = {
  accepted_incoming_count?: number;
  accepted_outgoing_count?: number;
  accepted_count?: number;
  delivered_smtp_count?: number;
  delivered_http_count?: number;
  delivered_optimized_count?: number;
  delivered_count?: number;
  stored_count?: number;
  sent_count?: number;
  opened_count?: number;
  clicked_count?: number;
  unique_opened_count?: number;
  unique_clicked_count?: number;
  unsubscribed_count?: number;
  complained_count?: number;
  failed_count?: number;
  temporary_failed_count?: number;
  permanent_failed_count?: number;
  esp_block_count?: number;
  temporary_failed_esp_block_count?: number;
  permanent_failed_esp_block_count?: number;
  rate_limit_count?: number;
  webhook_count?: number;
  permanent_failed_optimized_count?: number;
  permanent_failed_old_count?: number;
  bounced_count?: number;
  hard_bounces_count?: number;
  soft_bounces_count?: number;
  delayed_bounce_count?: number;
  suppressed_bounces_count?: number;
  suppressed_unsubscribed_count?: number;
  suppressed_complaints_count?: number;
  delivered_first_attempt_count?: number;
  delayed_first_attempt_count?: number;
  delivered_subsequent_count?: number;
  delivered_two_plus_attempts_count?: number;
  processed_count?: number;
  delivered_rate?: string;
  opened_rate?: string;
  clicked_rate?: string;
  unique_opened_rate?: string;
  unique_clicked_rate?: string;
  unsubscribed_rate?: string;
  complained_rate?: string;
  bounce_rate?: string;
  hard_bounce_rate?: string;
  soft_bounce_rate?: string;
  fail_rate?: string;
  permanent_fail_rate?: string;
  temporary_fail_rate?: string;
  delayed_rate?: string;
  email_validation_count?: number;
  email_validation_public_count?: number;
  email_validation_valid_count?: number;
  email_validation_single_count?: number;
  email_validation_bulk_count?: number;
  email_validation_list_count?: number;
  email_validation_mailgun_count?: number;
  email_validation_mailjet_count?: number;
  email_preview_count?: number;
  email_preview_failed_count?: number;
  link_validation_count?: number;
  link_validation_failed_count?: number;
  seed_test_count?: number;
  accessibility_count?: number;
  accessibility_failed_count?: number;
  image_validation_count?: number;
  image_validation_failed_count?: number;
};

export type MailgunFullApiSchemaGithubComMailgunThresholdsApiFilterComparator = "=" | "!=" | "contains" | "not contains" | "<" | "<=" | ">" | ">=";

export type MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsDisabledChannel = {
  disabled_at: string;
  reason: string;
};

export type MailgunFullApiSchemaGithubComMailgunTempleHttpapiVersionUpdate = {
  tag: string;
};

export type MailgunFullApiSchemaGithubComMailgunAccountsApiSubaccountStatus = "disabled" | "open" | "closed";

export type MailgunFullApiSchemaGithubComMailgunCerberusKeysKind = "domain" | "user" | "web";

export type MailgunFullApiSchemaGithubComMailgunCerberusKeysRole = "admin" | "basic" | "sending" | "developer";

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesSubaccount = {
  id: string;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesDomain = {
  name: string;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesBouncedStat = {
  total: number;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiFilterPredicate = {
  attribute: MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiFilterAttribute;
  comparator: string;
  values?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiLabeledValue>;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationEntitiesMetricsCountsAndRates = {
  critical_bounce_count: number;
  non_critical_bounce_count: number;
  critical_delay_count: number;
  non_critical_delay_count: number;
  classified_failures_count: number;
  delivered_smtp_count: number | null;
  critical_bounce_rate: number | null;
  non_critical_bounce_rate: number | null;
  critical_delay_rate: number | null;
  non_critical_delay_rate: number | null;
};

export type MailgunFullApiSchemaGithubComMailgunTowerApiIpPoolsListIPAssignment = {
  linked_at: string;
};

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangFilterAttribute = "bot" | "country" | "ip_pool" | "recipient_domain" | "recipient_provider" | "ip" | "domain" | "tag" | "device" | "subaccount";

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangFilterComparator = "=" | "!=" | "contains" | "not contains";

export type MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangLabeledValue = {
  label: string;
  value: string;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelFilterAttribute = "id" | "domain" | "ip" | "ip_pool" | "recipient_domain" | "recipient_provider" | "country" | "bot" | "device" | "subaccount" | "event" | "attachment_filename" | "from" | "message_id" | "subject" | "mailing_list_address" | "to" | "size" | "recipient" | "tag" | "severity" | "user_variables" | "delivered_at" | "delivery_status_code" | "delivery_status_bounce_type" | "delivery_status_message" | "is_routed" | "i_classification_rule_id" | "i_classification_group_id" | "recipients";

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelLabeledValue = {
  label: string;
  value: string;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelMessageHeaders = {
  to?: string;
  "message-id"?: string;
  from?: string;
  subject?: string;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelAttachment = {
  filename?: string;
  "content-type"?: string;
  size?: number;
};

export type MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelRoutesMatch = {
  recipient?: string;
};

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiFilterAttribute = "entity-name" | "domain.name" | "envelope.sending-ip" | "account.name" | "envelope.i-ip-pool-name" | "tags" | "tag" | "recipient-domain" | "group-id" | "criticality" | "severity" | "category";

export type MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiLabeledValue = {
  label: string;
  value: string;
};

export interface MailgunFullApiOperationQueryMap {
  "POST /v3/{domain_name}/messages": {};
  "POST /v3/{domain_name}/messages.mime": {};
  "GET /v3/domains/{domain_name}/messages/{storage_key}": {};
  "POST /v3/domains/{domain_name}/messages/{storage_key}": {};
  "GET /v4/domains": {
  limit?: number;
  skip?: number;
  state?: string;
  sort?: string;
  authority?: string;
  search?: string;
  include_subaccounts?: boolean;
};
  "POST /v4/domains": {};
  "GET /v4/domains/{name}": {};
  "PUT /v4/domains/{name}": {};
  "PUT /v4/domains/{name}/verify": {};
  "DELETE /v3/domains/{name}": {};
  "GET /v3/domains/{domain}/webhooks": {};
  "POST /v3/domains/{domain}/webhooks": {};
  "GET /v3/domains/{domain_name}/webhooks/{webhook_name}": {};
  "PUT /v3/domains/{domain_name}/webhooks/{webhook_name}": {};
  "DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}": {};
  "PUT /v4/domains/{domain}/webhooks": {};
  "POST /v4/domains/{domain}/webhooks": {};
  "DELETE /v4/domains/{domain}/webhooks": {
  url: ReadonlyArray<string>;
};
  "GET /v3/domains/{name}/tracking": {};
  "PUT /v3/domains/{name}/tracking/click": {};
  "PUT /v3/domains/{name}/tracking/open": {};
  "PUT /v3/domains/{name}/tracking/unsubscribe": {};
  "GET /v1/dkim/keys": {};
  "POST /v1/dkim/keys": {};
  "DELETE /v1/dkim/keys": {
  signing_domain: string;
  selector: string;
};
  "PUT /v4/domains/{authority_name}/keys/{selector}/activate": {};
  "GET /v4/domains/{authority_name}/keys": {};
  "PUT /v4/domains/{authority_name}/keys/{selector}/deactivate": {};
  "PUT /v3/domains/{name}/dkim_authority": {};
  "PUT /v3/domains/{name}/dkim_selector": {};
  "GET /v1/webhooks": {
  webhook_ids?: string;
};
  "POST /v1/webhooks": {};
  "DELETE /v1/webhooks": {
  webhook_ids?: string;
  all?: boolean;
};
  "GET /v1/webhooks/{webhook_id}": {};
  "PUT /v1/webhooks/{webhook_id}": {};
  "DELETE /v1/webhooks/{webhook_id}": {};
  "GET /v3/domains/{name}/sending_queues": {};
  "PUT /v1/dkim_management/domains/{name}/rotation": {};
  "POST /v1/dkim_management/domains/{name}/rotate": {};
  "GET /v5/accounts/subaccounts/ip_pools/all": {};
  "PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool": {};
  "DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool": {
  pool_id: string;
};
  "GET /v3/ips/domain/{name}": {};
  "PATCH /v3/ips/domain/{name}": {};
  "DELETE /v3/domains/{name}/ips/{ip}": {
  ip?: string;
  pool_id?: string;
};
  "DELETE /v3/domains/{name}/pool/{ip}": {
  ip?: string;
  pool_id?: string;
};
  "POST /v3/domains/{name}/dynamic_pools": {
  replacement_ip: string;
};
  "DELETE /v3/domains/{name}/dynamic_pools": {
  replacement_ip: string;
  replacement_pool_id: string;
};
  "GET /v3/domains/dynamic_pools/assignable": {
  subaccount_id?: string;
  domain?: string;
};
  "POST /v3/domains/all/dynamic_pools/enroll": {
  include_subaccounts: boolean;
};
  "GET /v3/ips/account/settings": {};
  "PATCH /v3/ips/account/settings": {};
  "GET /v3/ips": {
  dedicated?: boolean;
  enabled?: boolean;
};
  "GET /v3/ips/{ip}": {};
  "GET /v3/ips/{ip}/domains": {
  limit: number;
  search: string;
  skip: number;
};
  "POST /v3/ips/{ip}/domains": {};
  "DELETE /v3/ips/{ip}/domains": {
  alternative: string;
};
  "POST /v3/ips/{addr}/ip_band": {};
  "GET /v3/ips/request/new": {};
  "POST /v3/ips/request/new": {};
  "GET /v3/ips/details/all": {
  limit?: number;
  skip?: number;
  pool_id?: string;
  domain_id?: string;
  subaccount_id?: string;
  ip?: string;
  sort_by?: string;
  sort_order?: string;
};
  "GET /v3/dynamic_pools": {};
  "POST /v3/dynamic_pools/all": {};
  "DELETE /v3/dynamic_pools/all": {};
  "POST /v3/dynamic_pools/{pool_name}/{ip}": {};
  "PATCH /v3/dynamic_pools/{pool_name}": {};
  "GET /v3/ip_pools": {};
  "POST /v3/ip_pools": {};
  "GET /v3/ip_pools/{pool_id}": {};
  "DELETE /v3/ip_pools/{pool_id}": {
  ip: string;
  pool_id: string;
};
  "PATCH /v3/ip_pools/{pool_id}": {};
  "GET /v3/ip_pools/{pool_id}/domains": {
  limit?: number;
  page?: string;
};
  "PUT /v3/ip_pools/{pool_id}/ips/{ip}": {};
  "DELETE /v3/ip_pools/{pool_id}/ips/{ip}": {};
  "POST /v3/ip_pools/{pool_id}/ips.json": {};
  "PUT /v3/ip_pools/{pool_id}/delegate": {};
  "DELETE /v3/ip_pools/{pool_id}/delegate": {};
  "PATCH /v3/ips/subaccounts": {};
  "GET /v3/ip_warmups": {
  page?: string;
  limit?: string;
};
  "GET /v3/ip_warmups/{addr}": {};
  "POST /v3/ip_warmups/{addr}": {};
  "DELETE /v3/ip_warmups/{addr}": {};
  "GET /v1/dynamic_pools/domains": {
  limit?: number;
  account?: string;
  pool?: string;
  sort_by?: "bounce_rate" | "complaint_rate" | "name";
  sort_order?: "ascending" | "descending";
};
  "GET /v1/dynamic_pools/domains/{name}/preview": {};
  "GET /v1/dynamic_pools/domains/{name}/history": {};
  "PUT /v1/dynamic_pools/domains/{name}/override": {};
  "DELETE /v1/dynamic_pools/domains/{name}/override": {};
  "GET /v1/dynamic_pools/history": {
  Limit?: number;
  include_subaccounts?: boolean;
  domain?: string;
  before?: string;
  after?: string;
  moved_to?: string;
  moved_from?: string;
};
  "DELETE /v3/{domain_name}/envelopes": {};
  "GET /v2/x509/{domain}/status": {};
  "PUT /v2/x509/{domain}": {};
  "POST /v2/x509/{domain}": {};
  "GET /v3/{domain_name}/events": {
  begin?: string;
  end?: string;
  ascending?: "yes" | "no";
  limit?: number;
  event?: string;
  list?: string;
  attachment?: string;
  from?: string;
  "message-id"?: string;
  subject?: string;
  to?: string;
  size?: string;
  recipient?: string;
  recipients?: string;
  tags?: string;
  severity?: MailgunFullApiSchemaEventSeverityType;
};
  "GET /v3/{domain}/tags": {
  page?: string;
  limit?: number;
  tag?: string;
  prefix?: string;
};
  "GET /v3/{domain}/tag": {
  tag: string;
};
  "PUT /v3/{domain}/tag": {
  tag: string;
  description?: string;
};
  "DELETE /v3/{domain}/tag": {
  tag?: string;
};
  "GET /v3/{domain}/tag/stats/aggregates": {
  tag: string;
  type: string;
};
  "GET /v3/{domain}/tag/stats": {
  start?: string;
  end?: string;
  resolution?: string;
  duration?: string;
  provider?: string;
  device?: string;
  country?: string;
  event: string;
  tag: string;
};
  "GET /v3/domains/{domain}/tag/devices": {};
  "GET /v3/domains/{domain}/tag/providers": {};
  "GET /v3/domains/{domain}/tag/countries": {};
  "GET /v3/stats/total": {
  start?: string;
  end?: string;
  resolution?: string;
  duration?: string;
  event: string;
};
  "GET /v3/{domain}/stats/total": {
  start?: string;
  end?: string;
  resolution?: string;
  duration?: string;
  event: string;
};
  "GET /v3/stats/total/domains": {
  event: string;
  limit?: string;
  resolution?: string;
  timestamp: string;
};
  "GET /v3/stats/filter": {
  start?: string;
  end?: string;
  resolution?: string;
  duration?: string;
  event: string;
  filter?: string;
  group?: string;
};
  "GET /v3/domains/{domain}/limits/tag": {};
  "GET /v3/{domain}/aggregates/providers": {};
  "GET /v3/{domain}/aggregates/devices": {};
  "GET /v3/{domain}/aggregates/countries": {};
  "POST /v1/analytics/metrics": {};
  "POST /v1/analytics/usage/metrics": {};
  "POST /v1/analytics/logs": {};
  "PUT /v1/analytics/tags": {};
  "POST /v1/analytics/tags": {};
  "DELETE /v1/analytics/tags": {};
  "GET /v1/analytics/tags/limits": {};
  "GET /v1/thresholds/alerts/send": {};
  "POST /v1/thresholds/alerts/send": {};
  "GET /v1/thresholds/alerts/send/{name}": {};
  "PUT /v1/thresholds/alerts/send/{name}": {};
  "DELETE /v1/thresholds/alerts/send/{name}": {};
  "GET /v1/thresholds/limits": {};
  "POST /v1/thresholds/limits": {};
  "GET /v1/thresholds/limits/{name}": {};
  "PUT /v1/thresholds/limits/{name}": {};
  "DELETE /v1/thresholds/limits/{name}": {};
  "GET /v1/thresholds/hits": {};
  "GET /v1/alerts/events": {};
  "POST /v1/alerts/settings/events": {};
  "PUT /v1/alerts/settings/events/{id}": {};
  "DELETE /v1/alerts/settings/events/{id}": {};
  "GET /v1/alerts/settings": {};
  "PUT /v1/alerts/settings/slack": {};
  "DELETE /v1/alerts/settings/slack": {};
  "PUT /v1/alerts/settings/webhooks/signing_key": {};
  "POST /v1/alerts/webhooks/test": {};
  "POST /v1/alerts/email/test": {};
  "POST /v1/alerts/slack/test": {};
  "DELETE /v1/alerts/slack/oauth": {};
  "GET /v1/alerts/slack/channels/{id}": {};
  "GET /v1/alerts/slack/channels": {
  page?: string;
  limit?: number;
};
  "POST /v3/{domain_name}/unsubscribes/import": {};
  "POST /v3/{domain_name}/bounces/import": {};
  "POST /v3/{domain_name}/complaints/import": {};
  "POST /v3/{domain_name}/whitelists/import": {};
  "GET /v3/{domain_name}/bounces/{address}": {};
  "DELETE /v3/{domain_name}/bounces/{address}": {};
  "GET /v3/{domain_name}/bounces": {
  limit: number;
  page: string;
  term: string;
};
  "POST /v3/{domain_name}/bounces": {};
  "DELETE /v3/{domain_name}/bounces": {};
  "GET /v3/{domain_name}/unsubscribes/{address}": {};
  "DELETE /v3/{domain_name}/unsubscribes/{address}": {};
  "GET /v3/{domain_name}/unsubscribes": {
  limit?: number;
  page?: string;
  address: string;
  term: string;
};
  "POST /v3/{domain_name}/unsubscribes": {};
  "DELETE /v3/{domain_name}/unsubscribes": {};
  "GET /v3/{domain_name}/complaints/{address}": {};
  "DELETE /v3/{domain_name}/complaints/{address}": {};
  "GET /v3/{domain_name}/complaints": {
  limit?: number;
  page?: string;
  address: string;
  term: string;
};
  "POST /v3/{domain_name}/complaints": {};
  "DELETE /v3/{domain_name}/complaints": {};
  "GET /v3/{domain_name}/whitelists/{value}": {};
  "DELETE /v3/{domain_name}/whitelists/{value}": {};
  "GET /v3/{domain_name}/whitelists": {
  limit?: number;
  page?: string;
  address: string;
  term: string;
};
  "POST /v3/{domain_name}/whitelists": {};
  "DELETE /v3/{domain_name}/whitelists": {};
  "POST /v3/routes": {};
  "GET /v3/routes": {
  skip?: string;
  limit?: string;
};
  "GET /v3/routes/{id}": {};
  "PUT /v3/routes/{id}": {};
  "DELETE /v3/routes/{id}": {};
  "GET /v3/routes/match": {
  address: string;
};
  "POST /v3/lists": {};
  "GET /v3/lists": {
  limit?: string;
  skip?: string;
  address?: string;
};
  "GET /v3/lists/{list_address}/members": {
  address?: string;
  subscribed?: boolean;
  limit?: number;
  skip?: number;
};
  "POST /v3/lists/{list_address}/members": {};
  "POST /v3/lists/{list_address}/members.json": {
  members: (string | ReadonlyArray<ReadonlyArray<MailgunFullApiSchemaListMemberRequest>>);
  upsert?: boolean;
};
  "POST /v3/lists/{list_address}/members.csv": {};
  "GET /v3/lists/{list_address}/members/{member_address}": {};
  "PUT /v3/lists/{list_address}/members/{member_address}": {};
  "DELETE /v3/lists/{list_address}/members/{member_address}": {};
  "PUT /v3/lists/{list_address}": {};
  "DELETE /v3/lists/{list_address}": {};
  "GET /v3/lists/{list_address}": {};
  "GET /v3/lists/pages": {
  limit?: number;
};
  "GET /v3/lists/{list_address}/members/pages": {
  subscribed?: boolean;
  limit?: number;
  address?: string;
  page?: string;
};
  "GET /v3/{domain_name}/templates": {
  page?: "first" | "last" | "next" | "previous";
  limit?: number;
  p?: string;
};
  "POST /v3/{domain_name}/templates": {};
  "DELETE /v3/{domain_name}/templates": {};
  "GET /v3/{domain_name}/templates/{template_name}/versions": {
  page?: "first" | "last" | "next" | "previous";
  limit?: number;
  p?: string;
};
  "POST /v3/{domain_name}/templates/{template_name}/versions": {};
  "GET /v3/{domain_name}/templates/{template_name}": {
  active?: string;
};
  "PUT /v3/{domain_name}/templates/{template_name}": {};
  "DELETE /v3/{domain_name}/templates/{template_name}": {};
  "GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}": {};
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}": {};
  "DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}": {};
  "PUT /v3/{domain_name}/templates/{template_name}/copy": {};
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": {
  comment?: string;
};
  "PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}": {};
  "GET /v4/templates": {
  page?: "first" | "last" | "next" | "previous";
  limit?: number;
  p?: string;
};
  "POST /v4/templates": {};
  "DELETE /v4/templates": {};
  "GET /v4/templates/{template_name}/versions": {
  page?: "first" | "last" | "next" | "previous";
  limit?: number;
  p?: string;
};
  "POST /v4/templates/{template_name}/versions": {};
  "GET /v4/templates/{template_name}": {
  active?: string;
};
  "PUT /v4/templates/{template_name}": {};
  "DELETE /v4/templates/{template_name}": {};
  "GET /v4/templates/{template_name}/versions/{version_name}": {};
  "PUT /v4/templates/{template_name}/versions/{version_name}": {};
  "DELETE /v4/templates/{template_name}/versions/{version_name}": {};
  "PUT /v4/templates/{template_name}/copy": {};
  "PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": {
  comment?: string;
};
  "PUT /v4/templates/{template_name}/rename/{new_template_name}": {};
  "PUT /v5/accounts": {
  name?: string;
  inactive_session_timeout?: number;
  absolute_session_timeout?: number;
  logout_redirect_url?: string;
};
  "GET /v5/accounts/http_signing_key": {};
  "POST /v5/accounts/http_signing_key": {};
  "GET /v5/sandbox/auth_recipients": {};
  "POST /v5/sandbox/auth_recipients": {
  email: string;
};
  "DELETE /v5/sandbox/auth_recipients/{email}": {};
  "POST /v5/accounts/resend_activation_email": {};
  "PUT /v5/accounts/features": {};
  "GET /v5/accounts/subaccounts/{subaccount_id}": {};
  "GET /v5/accounts/subaccounts": {
  sort?: "asc" | "desc";
  filter?: string;
  limit?: number;
  skip?: number;
  enabled?: boolean;
  closed?: boolean;
};
  "POST /v5/accounts/subaccounts": {
  name: string;
};
  "DELETE /v5/accounts/subaccounts": {};
  "POST /v5/accounts/subaccounts/{subaccount_id}/disable": {
  reason?: string;
  note?: string;
};
  "POST /v5/accounts/subaccounts/{subaccount_id}/enable": {};
  "GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": {};
  "PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": {
  limit: number;
};
  "DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": {};
  "GET /v5/accounts/limit/custom/monthly": {};
  "PUT /v5/accounts/limit/custom/monthly": {
  limit: number;
};
  "DELETE /v5/accounts/limit/custom/monthly": {};
  "PUT /v5/accounts/limit/custom/enable": {};
  "PUT /v5/accounts/subaccounts/{subaccount_id}/features": {};
  "GET /v1/keys": {
  domain_name?: string;
  kind?: "domain" | "user" | "web";
};
  "POST /v1/keys": {};
  "DELETE /v1/keys/{key_id}": {};
  "POST /v1/keys/public": {};
  "GET /v3/domains/{domain_name}/credentials": {
  skip?: number;
  limit?: number;
};
  "POST /v3/domains/{domain_name}/credentials": {};
  "DELETE /v3/domains/{domain_name}/credentials": {};
  "PUT /v3/domains/{domain_name}/credentials/{spec}": {};
  "DELETE /v3/domains/{domain_name}/credentials/{spec}": {};
  "GET /v2/ip_whitelist": {};
  "PUT /v2/ip_whitelist": {};
  "POST /v2/ip_whitelist": {};
  "DELETE /v2/ip_whitelist": {
  address: string;
};
  "GET /v1/bounce-classification/stats": {
  group?: string;
  limit?: number;
  include_subaccounts?: boolean;
};
  "GET /v1/bounce-classification/domains": {
  limit?: number;
  skip?: number;
  query?: string;
  include_subaccounts?: boolean;
};
  "GET /v1/bounce-classification/domains/{domain}/entities": {
  include_subaccounts?: boolean;
};
  "GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules": {
  include_subaccounts?: boolean;
};
  "GET /v1/bounce-classification/domains/{domain}/events": {
  "rule-id"?: string;
  "entity-id"?: string;
  sort?: string;
  page?: string;
  limit?: number;
};
  "GET /v1/bounce-classification/config/entities": {};
  "GET /v1/bounce-classification/config/rules": {};
  "POST /v2/bounce-classification/metrics": {};
  "GET /v3/forwards/{id}": {};
  "PUT /v3/forwards/{id}": {
  match: string;
  "forward.url": string;
  "forward.recipient": string;
  "forward.store": string;
};
  "DELETE /v3/forwards/{id}": {
  "domain.name"?: string;
};
  "GET /v3/forwards": {
  page: string;
  limit: number;
  "domain.name"?: string;
};
  "POST /v3/forwards": {
  match: string;
  "forward.url": string;
  "forward.recipient": string;
  "forward.store": string;
};
  "GET /v5/users": {
  role?: "basic" | "billing" | "support" | "developer" | "admin";
  limit?: number;
  skip?: number;
};
  "GET /v5/users/{user_id}": {};
  "GET /v5/users/me": {};
}

export interface MailgunFullApiOperationQueryRequiredMap {
  "POST /v3/{domain_name}/messages": false;
  "POST /v3/{domain_name}/messages.mime": false;
  "GET /v3/domains/{domain_name}/messages/{storage_key}": false;
  "POST /v3/domains/{domain_name}/messages/{storage_key}": false;
  "GET /v4/domains": false;
  "POST /v4/domains": false;
  "GET /v4/domains/{name}": false;
  "PUT /v4/domains/{name}": false;
  "PUT /v4/domains/{name}/verify": false;
  "DELETE /v3/domains/{name}": false;
  "GET /v3/domains/{domain}/webhooks": false;
  "POST /v3/domains/{domain}/webhooks": false;
  "GET /v3/domains/{domain_name}/webhooks/{webhook_name}": false;
  "PUT /v3/domains/{domain_name}/webhooks/{webhook_name}": false;
  "DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}": false;
  "PUT /v4/domains/{domain}/webhooks": false;
  "POST /v4/domains/{domain}/webhooks": false;
  "DELETE /v4/domains/{domain}/webhooks": true;
  "GET /v3/domains/{name}/tracking": false;
  "PUT /v3/domains/{name}/tracking/click": false;
  "PUT /v3/domains/{name}/tracking/open": false;
  "PUT /v3/domains/{name}/tracking/unsubscribe": false;
  "GET /v1/dkim/keys": false;
  "POST /v1/dkim/keys": false;
  "DELETE /v1/dkim/keys": true;
  "PUT /v4/domains/{authority_name}/keys/{selector}/activate": false;
  "GET /v4/domains/{authority_name}/keys": false;
  "PUT /v4/domains/{authority_name}/keys/{selector}/deactivate": false;
  "PUT /v3/domains/{name}/dkim_authority": false;
  "PUT /v3/domains/{name}/dkim_selector": false;
  "GET /v1/webhooks": false;
  "POST /v1/webhooks": false;
  "DELETE /v1/webhooks": false;
  "GET /v1/webhooks/{webhook_id}": false;
  "PUT /v1/webhooks/{webhook_id}": false;
  "DELETE /v1/webhooks/{webhook_id}": false;
  "GET /v3/domains/{name}/sending_queues": false;
  "PUT /v1/dkim_management/domains/{name}/rotation": false;
  "POST /v1/dkim_management/domains/{name}/rotate": false;
  "GET /v5/accounts/subaccounts/ip_pools/all": false;
  "PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool": false;
  "DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool": true;
  "GET /v3/ips/domain/{name}": false;
  "PATCH /v3/ips/domain/{name}": false;
  "DELETE /v3/domains/{name}/ips/{ip}": false;
  "DELETE /v3/domains/{name}/pool/{ip}": false;
  "POST /v3/domains/{name}/dynamic_pools": true;
  "DELETE /v3/domains/{name}/dynamic_pools": true;
  "GET /v3/domains/dynamic_pools/assignable": false;
  "POST /v3/domains/all/dynamic_pools/enroll": true;
  "GET /v3/ips/account/settings": false;
  "PATCH /v3/ips/account/settings": false;
  "GET /v3/ips": false;
  "GET /v3/ips/{ip}": false;
  "GET /v3/ips/{ip}/domains": true;
  "POST /v3/ips/{ip}/domains": false;
  "DELETE /v3/ips/{ip}/domains": true;
  "POST /v3/ips/{addr}/ip_band": false;
  "GET /v3/ips/request/new": false;
  "POST /v3/ips/request/new": false;
  "GET /v3/ips/details/all": false;
  "GET /v3/dynamic_pools": false;
  "POST /v3/dynamic_pools/all": false;
  "DELETE /v3/dynamic_pools/all": false;
  "POST /v3/dynamic_pools/{pool_name}/{ip}": false;
  "PATCH /v3/dynamic_pools/{pool_name}": false;
  "GET /v3/ip_pools": false;
  "POST /v3/ip_pools": false;
  "GET /v3/ip_pools/{pool_id}": false;
  "DELETE /v3/ip_pools/{pool_id}": true;
  "PATCH /v3/ip_pools/{pool_id}": false;
  "GET /v3/ip_pools/{pool_id}/domains": false;
  "PUT /v3/ip_pools/{pool_id}/ips/{ip}": false;
  "DELETE /v3/ip_pools/{pool_id}/ips/{ip}": false;
  "POST /v3/ip_pools/{pool_id}/ips.json": false;
  "PUT /v3/ip_pools/{pool_id}/delegate": false;
  "DELETE /v3/ip_pools/{pool_id}/delegate": false;
  "PATCH /v3/ips/subaccounts": false;
  "GET /v3/ip_warmups": false;
  "GET /v3/ip_warmups/{addr}": false;
  "POST /v3/ip_warmups/{addr}": false;
  "DELETE /v3/ip_warmups/{addr}": false;
  "GET /v1/dynamic_pools/domains": false;
  "GET /v1/dynamic_pools/domains/{name}/preview": false;
  "GET /v1/dynamic_pools/domains/{name}/history": false;
  "PUT /v1/dynamic_pools/domains/{name}/override": false;
  "DELETE /v1/dynamic_pools/domains/{name}/override": false;
  "GET /v1/dynamic_pools/history": false;
  "DELETE /v3/{domain_name}/envelopes": false;
  "GET /v2/x509/{domain}/status": false;
  "PUT /v2/x509/{domain}": false;
  "POST /v2/x509/{domain}": false;
  "GET /v3/{domain_name}/events": false;
  "GET /v3/{domain}/tags": false;
  "GET /v3/{domain}/tag": true;
  "PUT /v3/{domain}/tag": true;
  "DELETE /v3/{domain}/tag": false;
  "GET /v3/{domain}/tag/stats/aggregates": true;
  "GET /v3/{domain}/tag/stats": true;
  "GET /v3/domains/{domain}/tag/devices": false;
  "GET /v3/domains/{domain}/tag/providers": false;
  "GET /v3/domains/{domain}/tag/countries": false;
  "GET /v3/stats/total": true;
  "GET /v3/{domain}/stats/total": true;
  "GET /v3/stats/total/domains": true;
  "GET /v3/stats/filter": true;
  "GET /v3/domains/{domain}/limits/tag": false;
  "GET /v3/{domain}/aggregates/providers": false;
  "GET /v3/{domain}/aggregates/devices": false;
  "GET /v3/{domain}/aggregates/countries": false;
  "POST /v1/analytics/metrics": false;
  "POST /v1/analytics/usage/metrics": false;
  "POST /v1/analytics/logs": false;
  "PUT /v1/analytics/tags": false;
  "POST /v1/analytics/tags": false;
  "DELETE /v1/analytics/tags": false;
  "GET /v1/analytics/tags/limits": false;
  "GET /v1/thresholds/alerts/send": false;
  "POST /v1/thresholds/alerts/send": false;
  "GET /v1/thresholds/alerts/send/{name}": false;
  "PUT /v1/thresholds/alerts/send/{name}": false;
  "DELETE /v1/thresholds/alerts/send/{name}": false;
  "GET /v1/thresholds/limits": false;
  "POST /v1/thresholds/limits": false;
  "GET /v1/thresholds/limits/{name}": false;
  "PUT /v1/thresholds/limits/{name}": false;
  "DELETE /v1/thresholds/limits/{name}": false;
  "GET /v1/thresholds/hits": false;
  "GET /v1/alerts/events": false;
  "POST /v1/alerts/settings/events": false;
  "PUT /v1/alerts/settings/events/{id}": false;
  "DELETE /v1/alerts/settings/events/{id}": false;
  "GET /v1/alerts/settings": false;
  "PUT /v1/alerts/settings/slack": false;
  "DELETE /v1/alerts/settings/slack": false;
  "PUT /v1/alerts/settings/webhooks/signing_key": false;
  "POST /v1/alerts/webhooks/test": false;
  "POST /v1/alerts/email/test": false;
  "POST /v1/alerts/slack/test": false;
  "DELETE /v1/alerts/slack/oauth": false;
  "GET /v1/alerts/slack/channels/{id}": false;
  "GET /v1/alerts/slack/channels": false;
  "POST /v3/{domain_name}/unsubscribes/import": false;
  "POST /v3/{domain_name}/bounces/import": false;
  "POST /v3/{domain_name}/complaints/import": false;
  "POST /v3/{domain_name}/whitelists/import": false;
  "GET /v3/{domain_name}/bounces/{address}": false;
  "DELETE /v3/{domain_name}/bounces/{address}": false;
  "GET /v3/{domain_name}/bounces": true;
  "POST /v3/{domain_name}/bounces": false;
  "DELETE /v3/{domain_name}/bounces": false;
  "GET /v3/{domain_name}/unsubscribes/{address}": false;
  "DELETE /v3/{domain_name}/unsubscribes/{address}": false;
  "GET /v3/{domain_name}/unsubscribes": true;
  "POST /v3/{domain_name}/unsubscribes": false;
  "DELETE /v3/{domain_name}/unsubscribes": false;
  "GET /v3/{domain_name}/complaints/{address}": false;
  "DELETE /v3/{domain_name}/complaints/{address}": false;
  "GET /v3/{domain_name}/complaints": true;
  "POST /v3/{domain_name}/complaints": false;
  "DELETE /v3/{domain_name}/complaints": false;
  "GET /v3/{domain_name}/whitelists/{value}": false;
  "DELETE /v3/{domain_name}/whitelists/{value}": false;
  "GET /v3/{domain_name}/whitelists": true;
  "POST /v3/{domain_name}/whitelists": false;
  "DELETE /v3/{domain_name}/whitelists": false;
  "POST /v3/routes": false;
  "GET /v3/routes": false;
  "GET /v3/routes/{id}": false;
  "PUT /v3/routes/{id}": false;
  "DELETE /v3/routes/{id}": false;
  "GET /v3/routes/match": true;
  "POST /v3/lists": false;
  "GET /v3/lists": false;
  "GET /v3/lists/{list_address}/members": false;
  "POST /v3/lists/{list_address}/members": false;
  "POST /v3/lists/{list_address}/members.json": true;
  "POST /v3/lists/{list_address}/members.csv": false;
  "GET /v3/lists/{list_address}/members/{member_address}": false;
  "PUT /v3/lists/{list_address}/members/{member_address}": false;
  "DELETE /v3/lists/{list_address}/members/{member_address}": false;
  "PUT /v3/lists/{list_address}": false;
  "DELETE /v3/lists/{list_address}": false;
  "GET /v3/lists/{list_address}": false;
  "GET /v3/lists/pages": false;
  "GET /v3/lists/{list_address}/members/pages": false;
  "GET /v3/{domain_name}/templates": false;
  "POST /v3/{domain_name}/templates": false;
  "DELETE /v3/{domain_name}/templates": false;
  "GET /v3/{domain_name}/templates/{template_name}/versions": false;
  "POST /v3/{domain_name}/templates/{template_name}/versions": false;
  "GET /v3/{domain_name}/templates/{template_name}": false;
  "PUT /v3/{domain_name}/templates/{template_name}": false;
  "DELETE /v3/{domain_name}/templates/{template_name}": false;
  "GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}": false;
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}": false;
  "DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}": false;
  "PUT /v3/{domain_name}/templates/{template_name}/copy": false;
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": false;
  "PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}": false;
  "GET /v4/templates": false;
  "POST /v4/templates": false;
  "DELETE /v4/templates": false;
  "GET /v4/templates/{template_name}/versions": false;
  "POST /v4/templates/{template_name}/versions": false;
  "GET /v4/templates/{template_name}": false;
  "PUT /v4/templates/{template_name}": false;
  "DELETE /v4/templates/{template_name}": false;
  "GET /v4/templates/{template_name}/versions/{version_name}": false;
  "PUT /v4/templates/{template_name}/versions/{version_name}": false;
  "DELETE /v4/templates/{template_name}/versions/{version_name}": false;
  "PUT /v4/templates/{template_name}/copy": false;
  "PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": false;
  "PUT /v4/templates/{template_name}/rename/{new_template_name}": false;
  "PUT /v5/accounts": false;
  "GET /v5/accounts/http_signing_key": false;
  "POST /v5/accounts/http_signing_key": false;
  "GET /v5/sandbox/auth_recipients": false;
  "POST /v5/sandbox/auth_recipients": true;
  "DELETE /v5/sandbox/auth_recipients/{email}": false;
  "POST /v5/accounts/resend_activation_email": false;
  "PUT /v5/accounts/features": false;
  "GET /v5/accounts/subaccounts/{subaccount_id}": false;
  "GET /v5/accounts/subaccounts": false;
  "POST /v5/accounts/subaccounts": true;
  "DELETE /v5/accounts/subaccounts": false;
  "POST /v5/accounts/subaccounts/{subaccount_id}/disable": false;
  "POST /v5/accounts/subaccounts/{subaccount_id}/enable": false;
  "GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": false;
  "PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": true;
  "DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": false;
  "GET /v5/accounts/limit/custom/monthly": false;
  "PUT /v5/accounts/limit/custom/monthly": true;
  "DELETE /v5/accounts/limit/custom/monthly": false;
  "PUT /v5/accounts/limit/custom/enable": false;
  "PUT /v5/accounts/subaccounts/{subaccount_id}/features": false;
  "GET /v1/keys": false;
  "POST /v1/keys": false;
  "DELETE /v1/keys/{key_id}": false;
  "POST /v1/keys/public": false;
  "GET /v3/domains/{domain_name}/credentials": false;
  "POST /v3/domains/{domain_name}/credentials": false;
  "DELETE /v3/domains/{domain_name}/credentials": false;
  "PUT /v3/domains/{domain_name}/credentials/{spec}": false;
  "DELETE /v3/domains/{domain_name}/credentials/{spec}": false;
  "GET /v2/ip_whitelist": false;
  "PUT /v2/ip_whitelist": false;
  "POST /v2/ip_whitelist": false;
  "DELETE /v2/ip_whitelist": true;
  "GET /v1/bounce-classification/stats": false;
  "GET /v1/bounce-classification/domains": false;
  "GET /v1/bounce-classification/domains/{domain}/entities": false;
  "GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules": false;
  "GET /v1/bounce-classification/domains/{domain}/events": false;
  "GET /v1/bounce-classification/config/entities": false;
  "GET /v1/bounce-classification/config/rules": false;
  "POST /v2/bounce-classification/metrics": false;
  "GET /v3/forwards/{id}": false;
  "PUT /v3/forwards/{id}": true;
  "DELETE /v3/forwards/{id}": false;
  "GET /v3/forwards": true;
  "POST /v3/forwards": true;
  "GET /v5/users": false;
  "GET /v5/users/{user_id}": false;
  "GET /v5/users/me": false;
}

export interface MailgunFullApiOperationRequestBodyMap {
  "POST /v3/{domain_name}/messages": MailgunFullApiSchemaPOSTV3DomainNameMessagesMultipartFormDataRequestBody;
  "POST /v3/{domain_name}/messages.mime": MailgunFullApiSchemaPOSTV3DomainNameMessagesMimeMultipartFormDataRequestBody;
  "GET /v3/domains/{domain_name}/messages/{storage_key}": never;
  "POST /v3/domains/{domain_name}/messages/{storage_key}": MailgunFullApiSchemaPOSTV3DomainsDomainNameMessagesStorageKeyMultipartFormDataRequestBody;
  "GET /v4/domains": never;
  "POST /v4/domains": MailgunFullApiSchemaPOSTV4DomainsMultipartFormDataRequestBody;
  "GET /v4/domains/{name}": never;
  "PUT /v4/domains/{name}": MailgunFullApiSchemaPUTV4DomainsNameMultipartFormDataRequestBody;
  "PUT /v4/domains/{name}/verify": never;
  "DELETE /v3/domains/{name}": never;
  "GET /v3/domains/{domain}/webhooks": never;
  "POST /v3/domains/{domain}/webhooks": MailgunFullApiSchemaPOSTV3DomainsDomainWebhooksMultipartFormDataRequestBody;
  "GET /v3/domains/{domain_name}/webhooks/{webhook_name}": never;
  "PUT /v3/domains/{domain_name}/webhooks/{webhook_name}": MailgunFullApiSchemaPUTV3DomainsDomainNameWebhooksWebhookNameMultipartFormDataRequestBody;
  "DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}": never;
  "PUT /v4/domains/{domain}/webhooks": MailgunFullApiSchemaPUTV4DomainsDomainWebhooksApplicationXWwwFormUrlencodedRequestBody;
  "POST /v4/domains/{domain}/webhooks": MailgunFullApiSchemaPOSTV4DomainsDomainWebhooksApplicationXWwwFormUrlencodedRequestBody;
  "DELETE /v4/domains/{domain}/webhooks": never;
  "GET /v3/domains/{name}/tracking": never;
  "PUT /v3/domains/{name}/tracking/click": MailgunFullApiSchemaPUTV3DomainsNameTrackingClickMultipartFormDataRequestBody;
  "PUT /v3/domains/{name}/tracking/open": MailgunFullApiSchemaPUTV3DomainsNameTrackingOpenMultipartFormDataRequestBody;
  "PUT /v3/domains/{name}/tracking/unsubscribe": MailgunFullApiSchemaPUTV3DomainsNameTrackingUnsubscribeMultipartFormDataRequestBody;
  "GET /v1/dkim/keys": MailgunFullApiSchemaGETV1DkimKeysMultipartFormDataRequestBody;
  "POST /v1/dkim/keys": MailgunFullApiSchemaPOSTV1DkimKeysMultipartFormDataRequestBody;
  "DELETE /v1/dkim/keys": never;
  "PUT /v4/domains/{authority_name}/keys/{selector}/activate": never;
  "GET /v4/domains/{authority_name}/keys": never;
  "PUT /v4/domains/{authority_name}/keys/{selector}/deactivate": never;
  "PUT /v3/domains/{name}/dkim_authority": MailgunFullApiSchemaPUTV3DomainsNameDkimAuthorityMultipartFormDataRequestBody;
  "PUT /v3/domains/{name}/dkim_selector": MailgunFullApiSchemaPUTV3DomainsNameDkimSelectorMultipartFormDataRequestBody;
  "GET /v1/webhooks": never;
  "POST /v1/webhooks": MailgunFullApiSchemaPOSTV1WebhooksMultipartFormDataRequestBody;
  "DELETE /v1/webhooks": never;
  "GET /v1/webhooks/{webhook_id}": never;
  "PUT /v1/webhooks/{webhook_id}": MailgunFullApiSchemaPUTV1WebhooksWebhookIdMultipartFormDataRequestBody;
  "DELETE /v1/webhooks/{webhook_id}": never;
  "GET /v3/domains/{name}/sending_queues": never;
  "PUT /v1/dkim_management/domains/{name}/rotation": MailgunFullApiSchemaPUTV1DkimManagementDomainsNameRotationMultipartFormDataRequestBody;
  "POST /v1/dkim_management/domains/{name}/rotate": never;
  "GET /v5/accounts/subaccounts/ip_pools/all": never;
  "PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool": never;
  "DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool": never;
  "GET /v3/ips/domain/{name}": never;
  "PATCH /v3/ips/domain/{name}": MailgunFullApiSchemaGithubComMailgunTowerApiDomainDippSpilloverDIPPSpilloverSettingsRequest;
  "DELETE /v3/domains/{name}/ips/{ip}": never;
  "DELETE /v3/domains/{name}/pool/{ip}": never;
  "POST /v3/domains/{name}/dynamic_pools": never;
  "DELETE /v3/domains/{name}/dynamic_pools": never;
  "GET /v3/domains/dynamic_pools/assignable": never;
  "POST /v3/domains/all/dynamic_pools/enroll": never;
  "GET /v3/ips/account/settings": never;
  "PATCH /v3/ips/account/settings": MailgunFullApiSchemaGithubComMailgunTowerApiAccountDippSpilloverDIPPSpilloverSettingsRequest;
  "GET /v3/ips": never;
  "GET /v3/ips/{ip}": never;
  "GET /v3/ips/{ip}/domains": never;
  "POST /v3/ips/{ip}/domains": never;
  "DELETE /v3/ips/{ip}/domains": never;
  "POST /v3/ips/{addr}/ip_band": MailgunFullApiSchemaPOSTV3IpsAddrIpBandMultipartFormDataRequestBody;
  "GET /v3/ips/request/new": never;
  "POST /v3/ips/request/new": never;
  "GET /v3/ips/details/all": never;
  "GET /v3/dynamic_pools": never;
  "POST /v3/dynamic_pools/all": MailgunFullApiSchemaPOSTV3DynamicPoolsAllMultipartFormDataRequestBody;
  "DELETE /v3/dynamic_pools/all": never;
  "POST /v3/dynamic_pools/{pool_name}/{ip}": never;
  "PATCH /v3/dynamic_pools/{pool_name}": MailgunFullApiSchemaPATCHV3DynamicPoolsPoolNameMultipartFormDataRequestBody;
  "GET /v3/ip_pools": never;
  "POST /v3/ip_pools": MailgunFullApiSchemaPOSTV3IpPoolsMultipartFormDataRequestBody;
  "GET /v3/ip_pools/{pool_id}": never;
  "DELETE /v3/ip_pools/{pool_id}": never;
  "PATCH /v3/ip_pools/{pool_id}": MailgunFullApiSchemaPATCHV3IpPoolsPoolIdMultipartFormDataRequestBody;
  "GET /v3/ip_pools/{pool_id}/domains": never;
  "PUT /v3/ip_pools/{pool_id}/ips/{ip}": never;
  "DELETE /v3/ip_pools/{pool_id}/ips/{ip}": never;
  "POST /v3/ip_pools/{pool_id}/ips.json": MailgunFullApiSchemaGithubComMailgunTowerApiIpPoolsAddIpAddMultipleIPsRequestBody;
  "PUT /v3/ip_pools/{pool_id}/delegate": MailgunFullApiSchemaPUTV3IpPoolsPoolIdDelegateMultipartFormDataRequestBody;
  "DELETE /v3/ip_pools/{pool_id}/delegate": MailgunFullApiSchemaDELETEV3IpPoolsPoolIdDelegateMultipartFormDataRequestBody;
  "PATCH /v3/ips/subaccounts": never;
  "GET /v3/ip_warmups": never;
  "GET /v3/ip_warmups/{addr}": never;
  "POST /v3/ip_warmups/{addr}": never;
  "DELETE /v3/ip_warmups/{addr}": never;
  "GET /v1/dynamic_pools/domains": never;
  "GET /v1/dynamic_pools/domains/{name}/preview": never;
  "GET /v1/dynamic_pools/domains/{name}/history": never;
  "PUT /v1/dynamic_pools/domains/{name}/override": MailgunFullApiSchemaPUTV1DynamicPoolsDomainsNameOverrideMultipartFormDataRequestBody;
  "DELETE /v1/dynamic_pools/domains/{name}/override": never;
  "GET /v1/dynamic_pools/history": never;
  "DELETE /v3/{domain_name}/envelopes": never;
  "GET /v2/x509/{domain}/status": never;
  "PUT /v2/x509/{domain}": never;
  "POST /v2/x509/{domain}": never;
  "GET /v3/{domain_name}/events": never;
  "GET /v3/{domain}/tags": never;
  "GET /v3/{domain}/tag": never;
  "PUT /v3/{domain}/tag": never;
  "DELETE /v3/{domain}/tag": never;
  "GET /v3/{domain}/tag/stats/aggregates": never;
  "GET /v3/{domain}/tag/stats": never;
  "GET /v3/domains/{domain}/tag/devices": never;
  "GET /v3/domains/{domain}/tag/providers": never;
  "GET /v3/domains/{domain}/tag/countries": never;
  "GET /v3/stats/total": never;
  "GET /v3/{domain}/stats/total": never;
  "GET /v3/stats/total/domains": never;
  "GET /v3/stats/filter": never;
  "GET /v3/domains/{domain}/limits/tag": never;
  "GET /v3/{domain}/aggregates/providers": never;
  "GET /v3/{domain}/aggregates/devices": never;
  "GET /v3/{domain}/aggregates/countries": never;
  "POST /v1/analytics/metrics": MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangQuery;
  "POST /v1/analytics/usage/metrics": MailgunFullApiSchemaGithubComMailgunAnalyticsClientGolangUsageQuery;
  "POST /v1/analytics/logs": MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelLogsRequest;
  "PUT /v1/analytics/tags": MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelUpdateTagRequest;
  "POST /v1/analytics/tags": MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelListTagsRequest;
  "DELETE /v1/analytics/tags": MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelDeleteTagRequest;
  "GET /v1/analytics/tags/limits": never;
  "GET /v1/thresholds/alerts/send": never;
  "POST /v1/thresholds/alerts/send": MailgunFullApiSchemaGithubComMailgunThresholdsApiSendAlertRequest;
  "GET /v1/thresholds/alerts/send/{name}": never;
  "PUT /v1/thresholds/alerts/send/{name}": MailgunFullApiSchemaGithubComMailgunThresholdsApiSendAlertRequest;
  "DELETE /v1/thresholds/alerts/send/{name}": never;
  "GET /v1/thresholds/limits": never;
  "POST /v1/thresholds/limits": MailgunFullApiSchemaGithubComMailgunThresholdsApiLimitRequest;
  "GET /v1/thresholds/limits/{name}": never;
  "PUT /v1/thresholds/limits/{name}": MailgunFullApiSchemaGithubComMailgunThresholdsApiLimitRequest;
  "DELETE /v1/thresholds/limits/{name}": never;
  "GET /v1/thresholds/hits": never;
  "GET /v1/alerts/events": never;
  "POST /v1/alerts/settings/events": MailgunFullApiSchemaGithubComMailgunAlertsInternalApiMutateEventSettingReq;
  "PUT /v1/alerts/settings/events/{id}": MailgunFullApiSchemaGithubComMailgunAlertsInternalApiMutateEventSettingReq;
  "DELETE /v1/alerts/settings/events/{id}": never;
  "GET /v1/alerts/settings": never;
  "PUT /v1/alerts/settings/slack": MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsSlack;
  "DELETE /v1/alerts/settings/slack": never;
  "PUT /v1/alerts/settings/webhooks/signing_key": never;
  "POST /v1/alerts/webhooks/test": MailgunFullApiSchemaGithubComMailgunAlertsInternalApiTestWebhookRequest;
  "POST /v1/alerts/email/test": MailgunFullApiSchemaGithubComMailgunAlertsInternalApiTestEmailRequest;
  "POST /v1/alerts/slack/test": MailgunFullApiSchemaGithubComMailgunAlertsInternalApiTestSlackRequest;
  "DELETE /v1/alerts/slack/oauth": never;
  "GET /v1/alerts/slack/channels/{id}": never;
  "GET /v1/alerts/slack/channels": never;
  "POST /v3/{domain_name}/unsubscribes/import": MailgunFullApiSchemaPOSTV3DomainIDUnsubscribesImportMultipartFormDataRequestBody;
  "POST /v3/{domain_name}/bounces/import": MailgunFullApiSchemaPOSTV3DomainIDBouncesImportMultipartFormDataRequestBody;
  "POST /v3/{domain_name}/complaints/import": MailgunFullApiSchemaPOSTV3DomainIDComplaintsImportMultipartFormDataRequestBody;
  "POST /v3/{domain_name}/whitelists/import": MailgunFullApiSchemaPOSTV3DomainIDWhitelistsImportMultipartFormDataRequestBody;
  "GET /v3/{domain_name}/bounces/{address}": never;
  "DELETE /v3/{domain_name}/bounces/{address}": never;
  "GET /v3/{domain_name}/bounces": never;
  "POST /v3/{domain_name}/bounces": MailgunFullApiSchemaGithubComMailgunBlackbookApiBouncesList;
  "DELETE /v3/{domain_name}/bounces": never;
  "GET /v3/{domain_name}/unsubscribes/{address}": never;
  "DELETE /v3/{domain_name}/unsubscribes/{address}": never;
  "GET /v3/{domain_name}/unsubscribes": never;
  "POST /v3/{domain_name}/unsubscribes": MailgunFullApiSchemaGithubComMailgunBlackbookApiUnsubscribesList;
  "DELETE /v3/{domain_name}/unsubscribes": never;
  "GET /v3/{domain_name}/complaints/{address}": never;
  "DELETE /v3/{domain_name}/complaints/{address}": never;
  "GET /v3/{domain_name}/complaints": never;
  "POST /v3/{domain_name}/complaints": MailgunFullApiSchemaGithubComMailgunBlackbookApiComplaintsList;
  "DELETE /v3/{domain_name}/complaints": never;
  "GET /v3/{domain_name}/whitelists/{value}": never;
  "DELETE /v3/{domain_name}/whitelists/{value}": never;
  "GET /v3/{domain_name}/whitelists": never;
  "POST /v3/{domain_name}/whitelists": MailgunFullApiSchemaPOSTV3DomainIDWhitelistsApplicationFormDataRequestBody;
  "DELETE /v3/{domain_name}/whitelists": never;
  "POST /v3/routes": {
  priority?: number;
  description?: string;
  expression: string;
  action?: ReadonlyArray<string>;
};
  "GET /v3/routes": never;
  "GET /v3/routes/{id}": never;
  "PUT /v3/routes/{id}": {
  id?: string;
  priority?: number;
  description?: string;
  expression?: string;
  action?: ReadonlyArray<string>;
};
  "DELETE /v3/routes/{id}": never;
  "GET /v3/routes/match": never;
  "POST /v3/lists": {
  address: string;
  name?: string;
  description?: string;
  access_level?: string;
  reply_preference?: string;
};
  "GET /v3/lists": never;
  "GET /v3/lists/{list_address}/members": never;
  "POST /v3/lists/{list_address}/members": {
  address?: string;
  name?: string;
  vars?: {};
  subscribed?: boolean;
  upsert?: boolean;
};
  "POST /v3/lists/{list_address}/members.json": never;
  "POST /v3/lists/{list_address}/members.csv": {
  subscribed?: boolean;
  upsert?: boolean;
  members?: string;
};
  "GET /v3/lists/{list_address}/members/{member_address}": never;
  "PUT /v3/lists/{list_address}/members/{member_address}": {
  address?: string;
  name?: string;
  vars?: {};
  subscribed?: boolean;
};
  "DELETE /v3/lists/{list_address}/members/{member_address}": never;
  "PUT /v3/lists/{list_address}": {
  address?: string;
  description?: string;
  name?: string;
  access_level?: string;
  reply_reference?: string;
  "list-id"?: string;
};
  "DELETE /v3/lists/{list_address}": never;
  "GET /v3/lists/{list_address}": never;
  "GET /v3/lists/pages": never;
  "GET /v3/lists/{list_address}/members/pages": never;
  "GET /v3/{domain_name}/templates": never;
  "POST /v3/{domain_name}/templates": MailgunFullApiSchemaPOSTV3DomainNameTemplatesMultipartFormDataRequestBody;
  "DELETE /v3/{domain_name}/templates": never;
  "GET /v3/{domain_name}/templates/{template_name}/versions": never;
  "POST /v3/{domain_name}/templates/{template_name}/versions": MailgunFullApiSchemaPOSTV3DomainNameTemplatesTemplateNameVersionsMultipartFormDataRequestBody;
  "GET /v3/{domain_name}/templates/{template_name}": never;
  "PUT /v3/{domain_name}/templates/{template_name}": MailgunFullApiSchemaPUTV3DomainNameTemplatesTemplateNameMultipartFormDataRequestBody;
  "DELETE /v3/{domain_name}/templates/{template_name}": never;
  "GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}": never;
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}": MailgunFullApiSchemaPUTV3DomainNameTemplatesTemplateNameVersionsVersionNameMultipartFormDataRequestBody;
  "DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}": never;
  "PUT /v3/{domain_name}/templates/{template_name}/copy": MailgunFullApiSchemaGithubComMailgunTempleHttpapiTemplateCopyParams;
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": never;
  "PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}": never;
  "GET /v4/templates": never;
  "POST /v4/templates": MailgunFullApiSchemaPOSTV4TemplatesMultipartFormDataRequestBody;
  "DELETE /v4/templates": never;
  "GET /v4/templates/{template_name}/versions": never;
  "POST /v4/templates/{template_name}/versions": MailgunFullApiSchemaPOSTV4TemplatesTemplateNameVersionsMultipartFormDataRequestBody;
  "GET /v4/templates/{template_name}": never;
  "PUT /v4/templates/{template_name}": MailgunFullApiSchemaPUTV4TemplatesTemplateNameMultipartFormDataRequestBody;
  "DELETE /v4/templates/{template_name}": never;
  "GET /v4/templates/{template_name}/versions/{version_name}": never;
  "PUT /v4/templates/{template_name}/versions/{version_name}": MailgunFullApiSchemaPUTV4TemplatesTemplateNameVersionsVersionNameMultipartFormDataRequestBody;
  "DELETE /v4/templates/{template_name}/versions/{version_name}": never;
  "PUT /v4/templates/{template_name}/copy": MailgunFullApiSchemaGithubComMailgunTempleHttpapiTemplateCopyParams;
  "PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": never;
  "PUT /v4/templates/{template_name}/rename/{new_template_name}": never;
  "PUT /v5/accounts": never;
  "GET /v5/accounts/http_signing_key": never;
  "POST /v5/accounts/http_signing_key": never;
  "GET /v5/sandbox/auth_recipients": never;
  "POST /v5/sandbox/auth_recipients": never;
  "DELETE /v5/sandbox/auth_recipients/{email}": never;
  "POST /v5/accounts/resend_activation_email": never;
  "PUT /v5/accounts/features": {
  webhooks_redact_pii?: string;
  ai_insights?: string;
};
  "GET /v5/accounts/subaccounts/{subaccount_id}": never;
  "GET /v5/accounts/subaccounts": never;
  "POST /v5/accounts/subaccounts": never;
  "DELETE /v5/accounts/subaccounts": never;
  "POST /v5/accounts/subaccounts/{subaccount_id}/disable": never;
  "POST /v5/accounts/subaccounts/{subaccount_id}/enable": never;
  "GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": never;
  "PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": never;
  "DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": never;
  "GET /v5/accounts/limit/custom/monthly": never;
  "PUT /v5/accounts/limit/custom/monthly": never;
  "DELETE /v5/accounts/limit/custom/monthly": never;
  "PUT /v5/accounts/limit/custom/enable": never;
  "PUT /v5/accounts/subaccounts/{subaccount_id}/features": {
  email_preview?: string;
  inbox_placement?: string;
  sending?: string;
  validations?: string;
  validations_bulk?: string;
};
  "GET /v1/keys": never;
  "POST /v1/keys": MailgunFullApiSchemaPOSTV1KeysMultipartFormDataRequestBody;
  "DELETE /v1/keys/{key_id}": never;
  "POST /v1/keys/public": never;
  "GET /v3/domains/{domain_name}/credentials": never;
  "POST /v3/domains/{domain_name}/credentials": MailgunFullApiSchemaPOSTV3DomainsDomainNameCredentialsMultipartFormDataRequestBody;
  "DELETE /v3/domains/{domain_name}/credentials": never;
  "PUT /v3/domains/{domain_name}/credentials/{spec}": MailgunFullApiSchemaPUTV3DomainsDomainNameCredentialsSpecMultipartFormDataRequestBody;
  "DELETE /v3/domains/{domain_name}/credentials/{spec}": never;
  "GET /v2/ip_whitelist": never;
  "PUT /v2/ip_whitelist": MailgunFullApiSchemaPUTV2IpWhitelistMultipartFormDataRequestBody;
  "POST /v2/ip_whitelist": MailgunFullApiSchemaPOSTV2IpWhitelistMultipartFormDataRequestBody;
  "DELETE /v2/ip_whitelist": never;
  "GET /v1/bounce-classification/stats": never;
  "GET /v1/bounce-classification/domains": never;
  "GET /v1/bounce-classification/domains/{domain}/entities": never;
  "GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules": never;
  "GET /v1/bounce-classification/domains/{domain}/events": never;
  "GET /v1/bounce-classification/config/entities": never;
  "GET /v1/bounce-classification/config/rules": never;
  "POST /v2/bounce-classification/metrics": MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiMetricsRequest;
  "GET /v3/forwards/{id}": never;
  "PUT /v3/forwards/{id}": never;
  "DELETE /v3/forwards/{id}": never;
  "GET /v3/forwards": never;
  "POST /v3/forwards": never;
  "GET /v5/users": never;
  "GET /v5/users/{user_id}": never;
  "GET /v5/users/me": never;
}

export interface MailgunFullApiOperationRequestBodyRequiredMap {
  "POST /v3/{domain_name}/messages": true;
  "POST /v3/{domain_name}/messages.mime": true;
  "GET /v3/domains/{domain_name}/messages/{storage_key}": false;
  "POST /v3/domains/{domain_name}/messages/{storage_key}": true;
  "GET /v4/domains": false;
  "POST /v4/domains": true;
  "GET /v4/domains/{name}": false;
  "PUT /v4/domains/{name}": true;
  "PUT /v4/domains/{name}/verify": false;
  "DELETE /v3/domains/{name}": false;
  "GET /v3/domains/{domain}/webhooks": false;
  "POST /v3/domains/{domain}/webhooks": true;
  "GET /v3/domains/{domain_name}/webhooks/{webhook_name}": false;
  "PUT /v3/domains/{domain_name}/webhooks/{webhook_name}": true;
  "DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}": false;
  "PUT /v4/domains/{domain}/webhooks": true;
  "POST /v4/domains/{domain}/webhooks": true;
  "DELETE /v4/domains/{domain}/webhooks": false;
  "GET /v3/domains/{name}/tracking": false;
  "PUT /v3/domains/{name}/tracking/click": true;
  "PUT /v3/domains/{name}/tracking/open": true;
  "PUT /v3/domains/{name}/tracking/unsubscribe": true;
  "GET /v1/dkim/keys": true;
  "POST /v1/dkim/keys": true;
  "DELETE /v1/dkim/keys": false;
  "PUT /v4/domains/{authority_name}/keys/{selector}/activate": false;
  "GET /v4/domains/{authority_name}/keys": false;
  "PUT /v4/domains/{authority_name}/keys/{selector}/deactivate": false;
  "PUT /v3/domains/{name}/dkim_authority": true;
  "PUT /v3/domains/{name}/dkim_selector": true;
  "GET /v1/webhooks": false;
  "POST /v1/webhooks": true;
  "DELETE /v1/webhooks": false;
  "GET /v1/webhooks/{webhook_id}": false;
  "PUT /v1/webhooks/{webhook_id}": true;
  "DELETE /v1/webhooks/{webhook_id}": false;
  "GET /v3/domains/{name}/sending_queues": false;
  "PUT /v1/dkim_management/domains/{name}/rotation": true;
  "POST /v1/dkim_management/domains/{name}/rotate": false;
  "GET /v5/accounts/subaccounts/ip_pools/all": false;
  "PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool": false;
  "DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool": false;
  "GET /v3/ips/domain/{name}": false;
  "PATCH /v3/ips/domain/{name}": true;
  "DELETE /v3/domains/{name}/ips/{ip}": false;
  "DELETE /v3/domains/{name}/pool/{ip}": false;
  "POST /v3/domains/{name}/dynamic_pools": false;
  "DELETE /v3/domains/{name}/dynamic_pools": false;
  "GET /v3/domains/dynamic_pools/assignable": false;
  "POST /v3/domains/all/dynamic_pools/enroll": false;
  "GET /v3/ips/account/settings": false;
  "PATCH /v3/ips/account/settings": true;
  "GET /v3/ips": false;
  "GET /v3/ips/{ip}": false;
  "GET /v3/ips/{ip}/domains": false;
  "POST /v3/ips/{ip}/domains": false;
  "DELETE /v3/ips/{ip}/domains": false;
  "POST /v3/ips/{addr}/ip_band": true;
  "GET /v3/ips/request/new": false;
  "POST /v3/ips/request/new": false;
  "GET /v3/ips/details/all": false;
  "GET /v3/dynamic_pools": false;
  "POST /v3/dynamic_pools/all": true;
  "DELETE /v3/dynamic_pools/all": false;
  "POST /v3/dynamic_pools/{pool_name}/{ip}": false;
  "PATCH /v3/dynamic_pools/{pool_name}": true;
  "GET /v3/ip_pools": false;
  "POST /v3/ip_pools": true;
  "GET /v3/ip_pools/{pool_id}": false;
  "DELETE /v3/ip_pools/{pool_id}": false;
  "PATCH /v3/ip_pools/{pool_id}": true;
  "GET /v3/ip_pools/{pool_id}/domains": false;
  "PUT /v3/ip_pools/{pool_id}/ips/{ip}": false;
  "DELETE /v3/ip_pools/{pool_id}/ips/{ip}": false;
  "POST /v3/ip_pools/{pool_id}/ips.json": true;
  "PUT /v3/ip_pools/{pool_id}/delegate": true;
  "DELETE /v3/ip_pools/{pool_id}/delegate": true;
  "PATCH /v3/ips/subaccounts": false;
  "GET /v3/ip_warmups": false;
  "GET /v3/ip_warmups/{addr}": false;
  "POST /v3/ip_warmups/{addr}": false;
  "DELETE /v3/ip_warmups/{addr}": false;
  "GET /v1/dynamic_pools/domains": false;
  "GET /v1/dynamic_pools/domains/{name}/preview": false;
  "GET /v1/dynamic_pools/domains/{name}/history": false;
  "PUT /v1/dynamic_pools/domains/{name}/override": true;
  "DELETE /v1/dynamic_pools/domains/{name}/override": false;
  "GET /v1/dynamic_pools/history": false;
  "DELETE /v3/{domain_name}/envelopes": false;
  "GET /v2/x509/{domain}/status": false;
  "PUT /v2/x509/{domain}": false;
  "POST /v2/x509/{domain}": false;
  "GET /v3/{domain_name}/events": false;
  "GET /v3/{domain}/tags": false;
  "GET /v3/{domain}/tag": false;
  "PUT /v3/{domain}/tag": false;
  "DELETE /v3/{domain}/tag": false;
  "GET /v3/{domain}/tag/stats/aggregates": false;
  "GET /v3/{domain}/tag/stats": false;
  "GET /v3/domains/{domain}/tag/devices": false;
  "GET /v3/domains/{domain}/tag/providers": false;
  "GET /v3/domains/{domain}/tag/countries": false;
  "GET /v3/stats/total": false;
  "GET /v3/{domain}/stats/total": false;
  "GET /v3/stats/total/domains": false;
  "GET /v3/stats/filter": false;
  "GET /v3/domains/{domain}/limits/tag": false;
  "GET /v3/{domain}/aggregates/providers": false;
  "GET /v3/{domain}/aggregates/devices": false;
  "GET /v3/{domain}/aggregates/countries": false;
  "POST /v1/analytics/metrics": true;
  "POST /v1/analytics/usage/metrics": true;
  "POST /v1/analytics/logs": true;
  "PUT /v1/analytics/tags": true;
  "POST /v1/analytics/tags": true;
  "DELETE /v1/analytics/tags": true;
  "GET /v1/analytics/tags/limits": false;
  "GET /v1/thresholds/alerts/send": false;
  "POST /v1/thresholds/alerts/send": true;
  "GET /v1/thresholds/alerts/send/{name}": false;
  "PUT /v1/thresholds/alerts/send/{name}": true;
  "DELETE /v1/thresholds/alerts/send/{name}": false;
  "GET /v1/thresholds/limits": false;
  "POST /v1/thresholds/limits": true;
  "GET /v1/thresholds/limits/{name}": false;
  "PUT /v1/thresholds/limits/{name}": true;
  "DELETE /v1/thresholds/limits/{name}": false;
  "GET /v1/thresholds/hits": false;
  "GET /v1/alerts/events": false;
  "POST /v1/alerts/settings/events": true;
  "PUT /v1/alerts/settings/events/{id}": true;
  "DELETE /v1/alerts/settings/events/{id}": false;
  "GET /v1/alerts/settings": false;
  "PUT /v1/alerts/settings/slack": true;
  "DELETE /v1/alerts/settings/slack": false;
  "PUT /v1/alerts/settings/webhooks/signing_key": false;
  "POST /v1/alerts/webhooks/test": true;
  "POST /v1/alerts/email/test": true;
  "POST /v1/alerts/slack/test": true;
  "DELETE /v1/alerts/slack/oauth": false;
  "GET /v1/alerts/slack/channels/{id}": false;
  "GET /v1/alerts/slack/channels": false;
  "POST /v3/{domain_name}/unsubscribes/import": true;
  "POST /v3/{domain_name}/bounces/import": true;
  "POST /v3/{domain_name}/complaints/import": true;
  "POST /v3/{domain_name}/whitelists/import": true;
  "GET /v3/{domain_name}/bounces/{address}": false;
  "DELETE /v3/{domain_name}/bounces/{address}": false;
  "GET /v3/{domain_name}/bounces": false;
  "POST /v3/{domain_name}/bounces": true;
  "DELETE /v3/{domain_name}/bounces": false;
  "GET /v3/{domain_name}/unsubscribes/{address}": false;
  "DELETE /v3/{domain_name}/unsubscribes/{address}": false;
  "GET /v3/{domain_name}/unsubscribes": false;
  "POST /v3/{domain_name}/unsubscribes": true;
  "DELETE /v3/{domain_name}/unsubscribes": false;
  "GET /v3/{domain_name}/complaints/{address}": false;
  "DELETE /v3/{domain_name}/complaints/{address}": false;
  "GET /v3/{domain_name}/complaints": false;
  "POST /v3/{domain_name}/complaints": true;
  "DELETE /v3/{domain_name}/complaints": false;
  "GET /v3/{domain_name}/whitelists/{value}": false;
  "DELETE /v3/{domain_name}/whitelists/{value}": false;
  "GET /v3/{domain_name}/whitelists": false;
  "POST /v3/{domain_name}/whitelists": true;
  "DELETE /v3/{domain_name}/whitelists": false;
  "POST /v3/routes": false;
  "GET /v3/routes": false;
  "GET /v3/routes/{id}": false;
  "PUT /v3/routes/{id}": false;
  "DELETE /v3/routes/{id}": false;
  "GET /v3/routes/match": false;
  "POST /v3/lists": false;
  "GET /v3/lists": false;
  "GET /v3/lists/{list_address}/members": false;
  "POST /v3/lists/{list_address}/members": false;
  "POST /v3/lists/{list_address}/members.json": false;
  "POST /v3/lists/{list_address}/members.csv": false;
  "GET /v3/lists/{list_address}/members/{member_address}": false;
  "PUT /v3/lists/{list_address}/members/{member_address}": false;
  "DELETE /v3/lists/{list_address}/members/{member_address}": false;
  "PUT /v3/lists/{list_address}": false;
  "DELETE /v3/lists/{list_address}": false;
  "GET /v3/lists/{list_address}": false;
  "GET /v3/lists/pages": false;
  "GET /v3/lists/{list_address}/members/pages": false;
  "GET /v3/{domain_name}/templates": false;
  "POST /v3/{domain_name}/templates": true;
  "DELETE /v3/{domain_name}/templates": false;
  "GET /v3/{domain_name}/templates/{template_name}/versions": false;
  "POST /v3/{domain_name}/templates/{template_name}/versions": true;
  "GET /v3/{domain_name}/templates/{template_name}": false;
  "PUT /v3/{domain_name}/templates/{template_name}": true;
  "DELETE /v3/{domain_name}/templates/{template_name}": false;
  "GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}": false;
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}": true;
  "DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}": false;
  "PUT /v3/{domain_name}/templates/{template_name}/copy": true;
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": false;
  "PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}": false;
  "GET /v4/templates": false;
  "POST /v4/templates": true;
  "DELETE /v4/templates": false;
  "GET /v4/templates/{template_name}/versions": false;
  "POST /v4/templates/{template_name}/versions": true;
  "GET /v4/templates/{template_name}": false;
  "PUT /v4/templates/{template_name}": true;
  "DELETE /v4/templates/{template_name}": false;
  "GET /v4/templates/{template_name}/versions/{version_name}": false;
  "PUT /v4/templates/{template_name}/versions/{version_name}": true;
  "DELETE /v4/templates/{template_name}/versions/{version_name}": false;
  "PUT /v4/templates/{template_name}/copy": true;
  "PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": false;
  "PUT /v4/templates/{template_name}/rename/{new_template_name}": false;
  "PUT /v5/accounts": false;
  "GET /v5/accounts/http_signing_key": false;
  "POST /v5/accounts/http_signing_key": false;
  "GET /v5/sandbox/auth_recipients": false;
  "POST /v5/sandbox/auth_recipients": false;
  "DELETE /v5/sandbox/auth_recipients/{email}": false;
  "POST /v5/accounts/resend_activation_email": false;
  "PUT /v5/accounts/features": false;
  "GET /v5/accounts/subaccounts/{subaccount_id}": false;
  "GET /v5/accounts/subaccounts": false;
  "POST /v5/accounts/subaccounts": false;
  "DELETE /v5/accounts/subaccounts": false;
  "POST /v5/accounts/subaccounts/{subaccount_id}/disable": false;
  "POST /v5/accounts/subaccounts/{subaccount_id}/enable": false;
  "GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": false;
  "PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": false;
  "DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": false;
  "GET /v5/accounts/limit/custom/monthly": false;
  "PUT /v5/accounts/limit/custom/monthly": false;
  "DELETE /v5/accounts/limit/custom/monthly": false;
  "PUT /v5/accounts/limit/custom/enable": false;
  "PUT /v5/accounts/subaccounts/{subaccount_id}/features": false;
  "GET /v1/keys": false;
  "POST /v1/keys": true;
  "DELETE /v1/keys/{key_id}": false;
  "POST /v1/keys/public": false;
  "GET /v3/domains/{domain_name}/credentials": false;
  "POST /v3/domains/{domain_name}/credentials": true;
  "DELETE /v3/domains/{domain_name}/credentials": false;
  "PUT /v3/domains/{domain_name}/credentials/{spec}": true;
  "DELETE /v3/domains/{domain_name}/credentials/{spec}": false;
  "GET /v2/ip_whitelist": false;
  "PUT /v2/ip_whitelist": true;
  "POST /v2/ip_whitelist": true;
  "DELETE /v2/ip_whitelist": false;
  "GET /v1/bounce-classification/stats": false;
  "GET /v1/bounce-classification/domains": false;
  "GET /v1/bounce-classification/domains/{domain}/entities": false;
  "GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules": false;
  "GET /v1/bounce-classification/domains/{domain}/events": false;
  "GET /v1/bounce-classification/config/entities": false;
  "GET /v1/bounce-classification/config/rules": false;
  "POST /v2/bounce-classification/metrics": true;
  "GET /v3/forwards/{id}": false;
  "PUT /v3/forwards/{id}": false;
  "DELETE /v3/forwards/{id}": false;
  "GET /v3/forwards": false;
  "POST /v3/forwards": false;
  "GET /v5/users": false;
  "GET /v5/users/{user_id}": false;
  "GET /v5/users/me": false;
}

export interface MailgunFullApiOperationResponseMap {
  "POST /v3/{domain_name}/messages": MailgunFullApiSchemaGithubComMailgunInfluxHttpapiSendMessageResponse;
  "POST /v3/{domain_name}/messages.mime": MailgunFullApiSchemaGithubComMailgunInfluxHttpapiSendMessageResponse;
  "GET /v3/domains/{domain_name}/messages/{storage_key}": MailgunFullApiSchemaGithubComMailgunInfluxHttpapiGetMessageResponseBasicExample;
  "POST /v3/domains/{domain_name}/messages/{storage_key}": MailgunFullApiSchemaGithubComMailgunInfluxHttpapiSendMessageResponse;
  "GET /v4/domains": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiListDomainResponse;
  "POST /v4/domains": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiCreateDomainResp;
  "GET /v4/domains/{name}": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiFindDomainByNameResp;
  "PUT /v4/domains/{name}": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUpdateDomainResp;
  "PUT /v4/domains/{name}/verify": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiVerifyDomainResponse;
  "DELETE /v3/domains/{name}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/domains/{domain}/webhooks": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiGetAllDomainWebhooksResp;
  "POST /v3/domains/{domain}/webhooks": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiCreateDomainWebhookResp;
  "GET /v3/domains/{domain_name}/webhooks/{webhook_name}": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiGetDomainWebhookResp;
  "PUT /v3/domains/{domain_name}/webhooks/{webhook_name}": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiCreateDomainWebhookResp;
  "DELETE /v3/domains/{domain_name}/webhooks/{webhook_name}": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiCreateDomainWebhookResp;
  "PUT /v4/domains/{domain}/webhooks": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiGetAllDomainWebhooksResp;
  "POST /v4/domains/{domain}/webhooks": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiGetAllDomainWebhooksResp;
  "DELETE /v4/domains/{domain}/webhooks": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiGetAllDomainWebhooksResp;
  "GET /v3/domains/{name}/tracking": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiGetDomainTrackingResp;
  "PUT /v3/domains/{name}/tracking/click": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUpdateDomainTrackingClickResp;
  "PUT /v3/domains/{name}/tracking/open": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUpdateDomainTrackingOpenResp;
  "PUT /v3/domains/{name}/tracking/unsubscribe": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUpdateDomainTrackingUnsubscribeResp;
  "GET /v1/dkim/keys": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiDomainKeyListResponse;
  "POST /v1/dkim/keys": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiDomainKeyResponse;
  "DELETE /v1/dkim/keys": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "PUT /v4/domains/{authority_name}/keys/{selector}/activate": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUpdateDomainKeyResp;
  "GET /v4/domains/{authority_name}/keys": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiAuthorityKeysResponse;
  "PUT /v4/domains/{authority_name}/keys/{selector}/deactivate": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiUpdateDomainKeyResp;
  "PUT /v3/domains/{name}/dkim_authority": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiReassignDkimAuthorityResp;
  "PUT /v3/domains/{name}/dkim_selector": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v1/webhooks": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiAccountLevelWebhooksResp;
  "POST /v1/webhooks": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiCreateAccountLevelWebhookResp;
  "DELETE /v1/webhooks": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v1/webhooks/{webhook_id}": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiAccountLevelWebhookView;
  "PUT /v1/webhooks/{webhook_id}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v1/webhooks/{webhook_id}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiInvalidParameterError;
  "GET /v3/domains/{name}/sending_queues": MailgunFullApiSchemaGithubComMailgunDomainsHttpapiGetDomainSendingQueuesResp;
  "PUT /v1/dkim_management/domains/{name}/rotation": MailgunFullApiSchemaGithubComMailgunPendulumApiDomainResponse;
  "POST /v1/dkim_management/domains/{name}/rotate": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v5/accounts/subaccounts/ip_pools/all": MailgunFullApiSchemaGithubComMailgunTowerApiSubaccountsListSubaccountDIPPsResponse;
  "PUT /v5/accounts/subaccounts/{subaccountId}/ip_pool": MailgunFullApiSchemaGithubComMailgunTowerApiStartSagaResponse;
  "DELETE /v5/accounts/subaccounts/{subaccountId}/ip_pool": MailgunFullApiSchemaGithubComMailgunTowerApiStartSagaResponse;
  "GET /v3/ips/domain/{name}": MailgunFullApiSchemaGithubComMailgunTowerApiDomainDippSpilloverDIPPSpilloverResponseDoc;
  "PATCH /v3/ips/domain/{name}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v3/domains/{name}/ips/{ip}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v3/domains/{name}/pool/{ip}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "POST /v3/domains/{name}/dynamic_pools": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v3/domains/{name}/dynamic_pools": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/domains/dynamic_pools/assignable": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "POST /v3/domains/all/dynamic_pools/enroll": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/ips/account/settings": MailgunFullApiSchemaGithubComMailgunTowerApiAccountDippSpilloverDIPPSpilloverResponseDoc;
  "PATCH /v3/ips/account/settings": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/ips": MailgunFullApiSchemaGithubComMailgunTowerApiAccountListIpsDocResponse;
  "GET /v3/ips/{ip}": MailgunFullApiSchemaGithubComMailgunTowerApiAccountGetDocResponse;
  "GET /v3/ips/{ip}/domains": MailgunFullApiSchemaGithubComMailgunTowerApiAccountDomainsResponse;
  "POST /v3/ips/{ip}/domains": MailgunFullApiSchemaGithubComMailgunTowerApiStartSagaResponse;
  "DELETE /v3/ips/{ip}/domains": MailgunFullApiSchemaGithubComMailgunTowerApiStartSagaResponse;
  "POST /v3/ips/{addr}/ip_band": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/ips/request/new": MailgunFullApiSchemaString;
  "POST /v3/ips/request/new": MailgunFullApiSchemaString;
  "GET /v3/ips/details/all": MailgunFullApiSchemaGithubComMailgunTowerApiAccountListIpsDetailedIPsResponseDoc;
  "GET /v3/dynamic_pools": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiResponse;
  "POST /v3/dynamic_pools/all": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v3/dynamic_pools/all": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "POST /v3/dynamic_pools/{pool_name}/{ip}": MailgunFullApiSchemaString;
  "PATCH /v3/dynamic_pools/{pool_name}": MailgunFullApiSchemaString;
  "GET /v3/ip_pools": MailgunFullApiSchemaGithubComMailgunTowerApiIpPoolsListSuccessResponse;
  "POST /v3/ip_pools": MailgunFullApiSchemaString;
  "GET /v3/ip_pools/{pool_id}": MailgunFullApiSchemaString;
  "DELETE /v3/ip_pools/{pool_id}": MailgunFullApiSchemaString;
  "PATCH /v3/ip_pools/{pool_id}": MailgunFullApiSchemaString;
  "GET /v3/ip_pools/{pool_id}/domains": MailgunFullApiSchemaString;
  "PUT /v3/ip_pools/{pool_id}/ips/{ip}": MailgunFullApiSchemaString;
  "DELETE /v3/ip_pools/{pool_id}/ips/{ip}": MailgunFullApiSchemaString;
  "POST /v3/ip_pools/{pool_id}/ips.json": MailgunFullApiSchemaString;
  "PUT /v3/ip_pools/{pool_id}/delegate": MailgunFullApiSchemaString;
  "DELETE /v3/ip_pools/{pool_id}/delegate": MailgunFullApiSchemaString;
  "PATCH /v3/ips/subaccounts": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/ip_warmups": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/ip_warmups/{addr}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "POST /v3/ip_warmups/{addr}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v3/ip_warmups/{addr}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v1/dynamic_pools/domains": MailgunFullApiSchemaGithubComMailgunBandersnatchApiDomainListResponse;
  "GET /v1/dynamic_pools/domains/{name}/preview": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiResponse;
  "GET /v1/dynamic_pools/domains/{name}/history": MailgunFullApiSchemaGithubComMailgunBandersnatchModelHistoryRecord;
  "PUT /v1/dynamic_pools/domains/{name}/override": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiResponse;
  "DELETE /v1/dynamic_pools/domains/{name}/override": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiResponse;
  "GET /v1/dynamic_pools/history": MailgunFullApiSchemaGithubComMailgunBandersnatchApiListHistoryResponse;
  "DELETE /v3/{domain_name}/envelopes": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v2/x509/{domain}/status": MailgunFullApiSchemaGithubComMailgunTerminatorHttpapiStatusResponse;
  "PUT /v2/x509/{domain}": MailgunFullApiSchemaGithubComMailgunTerminatorHttpapiGenerateResponse;
  "POST /v2/x509/{domain}": MailgunFullApiSchemaGithubComMailgunTerminatorHttpapiGenerateResponse;
  "GET /v3/{domain_name}/events": {
  items?: ReadonlyArray<MailgunFullApiSchemaEventResponse>;
  paging?: {
  next?: string;
  previous?: string;
};
};
  "GET /v3/{domain}/tags": MailgunFullApiSchemaGithubComMailgunScoutApiTagListResponse;
  "GET /v3/{domain}/tag": MailgunFullApiSchemaGithubComMailgunScoutModelTagsTagItem;
  "PUT /v3/{domain}/tag": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v3/{domain}/tag": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/{domain}/tag/stats/aggregates": MailgunFullApiSchemaGithubComMailgunScoutApiTagAggregateResponse;
  "GET /v3/{domain}/tag/stats": MailgunFullApiSchemaGithubComMailgunScoutApiStatsResponse;
  "GET /v3/domains/{domain}/tag/devices": MailgunFullApiSchemaGithubComMailgunScoutApiStatTypesResponse;
  "GET /v3/domains/{domain}/tag/providers": MailgunFullApiSchemaGithubComMailgunScoutApiStatTypesResponse;
  "GET /v3/domains/{domain}/tag/countries": MailgunFullApiSchemaGithubComMailgunScoutApiStatTypesResponse;
  "GET /v3/stats/total": MailgunFullApiSchemaGithubComMailgunScoutApiStatsResponse;
  "GET /v3/{domain}/stats/total": MailgunFullApiSchemaGithubComMailgunScoutApiStatsResponse;
  "GET /v3/stats/total/domains": MailgunFullApiSchemaGithubComMailgunScoutApiStatsResponse;
  "GET /v3/stats/filter": MailgunFullApiSchemaGithubComMailgunScoutApiStatsResponse;
  "GET /v3/domains/{domain}/limits/tag": MailgunFullApiSchemaGithubComMailgunScoutModelTypesTagLimitItem;
  "GET /v3/{domain}/aggregates/providers": MailgunFullApiSchemaGithubComMailgunScoutApiProvidersAggregateResponse;
  "GET /v3/{domain}/aggregates/devices": MailgunFullApiSchemaGithubComMailgunScoutApiDevicesAggregateResponse;
  "GET /v3/{domain}/aggregates/countries": MailgunFullApiSchemaGithubComMailgunScoutApiCountriesAggregateResponse;
  "POST /v1/analytics/metrics": MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiRegularMetricsResponse;
  "POST /v1/analytics/usage/metrics": MailgunFullApiSchemaGithubComMailgunAnalyticsInternalApiUsageMetricsResponse;
  "POST /v1/analytics/logs": MailgunFullApiSchemaGithubComMailgunLogsApiPkgApiModelLogsResponse;
  "PUT /v1/analytics/tags": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "POST /v1/analytics/tags": MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelTagsResponse;
  "DELETE /v1/analytics/tags": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v1/analytics/tags/limits": MailgunFullApiSchemaGithubComMailgunTagsApiPkgApiModelTagLimitCountResponse;
  "GET /v1/thresholds/alerts/send": MailgunFullApiSchemaGithubComMailgunThresholdsApiSendAlertListResponse;
  "POST /v1/thresholds/alerts/send": MailgunFullApiSchemaGithubComMailgunThresholdsApiSendAlertItem;
  "GET /v1/thresholds/alerts/send/{name}": MailgunFullApiSchemaGithubComMailgunThresholdsApiSendAlertItem;
  "PUT /v1/thresholds/alerts/send/{name}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v1/thresholds/alerts/send/{name}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v1/thresholds/limits": MailgunFullApiSchemaGithubComMailgunThresholdsApiThresholdLimitListResponse;
  "POST /v1/thresholds/limits": MailgunFullApiSchemaGithubComMailgunThresholdsApiThresholdLimitItem;
  "GET /v1/thresholds/limits/{name}": MailgunFullApiSchemaGithubComMailgunThresholdsApiThresholdLimitItem;
  "PUT /v1/thresholds/limits/{name}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v1/thresholds/limits/{name}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v1/thresholds/hits": MailgunFullApiSchemaGithubComMailgunThresholdsApiHitListResponse;
  "GET /v1/alerts/events": MailgunFullApiSchemaGithubComMailgunAlertsInternalApiListAlertsEventsResp;
  "POST /v1/alerts/settings/events": MailgunFullApiSchemaGithubComMailgunAlertsInternalSettingsEventSettings;
  "PUT /v1/alerts/settings/events/{id}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v1/alerts/settings/events/{id}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v1/alerts/settings": MailgunFullApiSchemaGithubComMailgunAlertsInternalApiSettingsResponse;
  "PUT /v1/alerts/settings/slack": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v1/alerts/settings/slack": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "PUT /v1/alerts/settings/webhooks/signing_key": MailgunFullApiSchemaGithubComMailgunAlertsInternalApiResetWebhooksSigningKeyResp;
  "POST /v1/alerts/webhooks/test": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "POST /v1/alerts/email/test": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "POST /v1/alerts/slack/test": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v1/alerts/slack/oauth": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v1/alerts/slack/channels/{id}": MailgunFullApiSchemaGithubComMailgunAlertsInternalApiSlackChannel;
  "GET /v1/alerts/slack/channels": MailgunFullApiSchemaGithubComMailgunAlertsInternalApiListSlackChannelsResp;
  "POST /v3/{domain_name}/unsubscribes/import": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "POST /v3/{domain_name}/bounces/import": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "POST /v3/{domain_name}/complaints/import": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "POST /v3/{domain_name}/whitelists/import": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/{domain_name}/bounces/{address}": MailgunFullApiSchemaGithubComMailgunBlackbookModelBounce;
  "DELETE /v3/{domain_name}/bounces/{address}": MailgunFullApiSchemaGithubComMailgunBlackbookApiSuppressionResponse;
  "GET /v3/{domain_name}/bounces": MailgunFullApiSchemaGithubComMailgunBlackbookApiGetBouncesPaginationResponse;
  "POST /v3/{domain_name}/bounces": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v3/{domain_name}/bounces": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/{domain_name}/unsubscribes/{address}": MailgunFullApiSchemaGithubComMailgunBlackbookModelUnsubscribe;
  "DELETE /v3/{domain_name}/unsubscribes/{address}": MailgunFullApiSchemaGithubComMailgunBlackbookApiSuppressionResponse;
  "GET /v3/{domain_name}/unsubscribes": MailgunFullApiSchemaGithubComMailgunBlackbookApiGetUnsubscribesPaginationResponse;
  "POST /v3/{domain_name}/unsubscribes": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v3/{domain_name}/unsubscribes": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/{domain_name}/complaints/{address}": MailgunFullApiSchemaGithubComMailgunBlackbookModelComplaint;
  "DELETE /v3/{domain_name}/complaints/{address}": MailgunFullApiSchemaGithubComMailgunBlackbookApiSuppressionResponse;
  "GET /v3/{domain_name}/complaints": MailgunFullApiSchemaGithubComMailgunBlackbookApiGetComplaintsPaginationResponse;
  "POST /v3/{domain_name}/complaints": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "DELETE /v3/{domain_name}/complaints": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/{domain_name}/whitelists/{value}": MailgunFullApiSchemaGithubComMailgunBlackbookModelWhitelist;
  "DELETE /v3/{domain_name}/whitelists/{value}": MailgunFullApiSchemaGithubComMailgunBlackbookApiDeleteWhitelistRecordResponse;
  "GET /v3/{domain_name}/whitelists": MailgunFullApiSchemaGithubComMailgunBlackbookApiGetWhitelistPaginationResponse;
  "POST /v3/{domain_name}/whitelists": MailgunFullApiSchemaGithubComMailgunBlackbookApiInsertWhitelistRecordResponse;
  "DELETE /v3/{domain_name}/whitelists": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "POST /v3/routes": {
  message?: string;
  route?: MailgunFullApiSchemaRouteResponse;
};
  "GET /v3/routes": {
  total_count?: number;
  items?: ReadonlyArray<MailgunFullApiSchemaRouteResponse>;
};
  "GET /v3/routes/{id}": {
  route?: MailgunFullApiSchemaRouteResponse;
};
  "PUT /v3/routes/{id}": {
  message?: string;
  route?: MailgunFullApiSchemaRouteResponse;
};
  "DELETE /v3/routes/{id}": {
  message?: string;
  id?: string;
};
  "GET /v3/routes/match": {
  route?: MailgunFullApiSchemaRouteResponse;
};
  "POST /v3/lists": {
  list?: MailgunFullApiSchemaMailingListResponse;
};
  "GET /v3/lists": {
  total_count?: number;
  items?: ReadonlyArray<MailgunFullApiSchemaMailingListResponse>;
};
  "GET /v3/lists/{list_address}/members": {
  total_count?: number;
  items?: ReadonlyArray<MailgunFullApiSchemaListMemberResponse>;
};
  "POST /v3/lists/{list_address}/members": {
  member?: MailgunFullApiSchemaListMemberResponse;
  message?: string;
};
  "POST /v3/lists/{list_address}/members.json": {
  list?: MailgunFullApiSchemaMailingListResponse;
  "task-id"?: string;
  message?: string;
};
  "POST /v3/lists/{list_address}/members.csv": {
  list?: MailgunFullApiSchemaMailingListResponse;
  "task-id"?: string;
  message?: string;
};
  "GET /v3/lists/{list_address}/members/{member_address}": MailgunFullApiSchemaListMemberResponse;
  "PUT /v3/lists/{list_address}/members/{member_address}": {
  member?: MailgunFullApiSchemaListMemberResponse;
  message?: string;
};
  "DELETE /v3/lists/{list_address}/members/{member_address}": {
  member?: {
  address?: string;
};
};
  "PUT /v3/lists/{list_address}": {
  message?: string;
  list?: MailgunFullApiSchemaMailingListResponse;
};
  "DELETE /v3/lists/{list_address}": {
  address?: string;
  message?: string;
};
  "GET /v3/lists/{list_address}": {
  list?: MailgunFullApiSchemaMailingListResponse;
};
  "GET /v3/lists/pages": MailgunFullApiSchemaPaginateMailingListResponse;
  "GET /v3/lists/{list_address}/members/pages": MailgunFullApiSchemaPaginateListMemberResponse;
  "GET /v3/{domain_name}/templates": MailgunFullApiSchemaGithubComMailgunTempleHttpapiGetPageResponse;
  "POST /v3/{domain_name}/templates": MailgunFullApiSchemaGithubComMailgunTempleHttpapiCreateTemplateOrVersionResponse;
  "DELETE /v3/{domain_name}/templates": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/{domain_name}/templates/{template_name}/versions": MailgunFullApiSchemaGithubComMailgunTempleHttpapiGetVersionsPageResponse;
  "POST /v3/{domain_name}/templates/{template_name}/versions": MailgunFullApiSchemaGithubComMailgunTempleHttpapiCreateTemplateOrVersionResponse;
  "GET /v3/{domain_name}/templates/{template_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiGetTemplateOrVersionResponse;
  "PUT /v3/{domain_name}/templates/{template_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiUpdateOrDeleteTemplateOrVersionResponse;
  "DELETE /v3/{domain_name}/templates/{template_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiUpdateOrDeleteTemplateOrVersionResponse;
  "GET /v3/{domain_name}/templates/{template_name}/versions/{version_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiGetTemplateOrVersionResponse;
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiUpdateOrDeleteTemplateOrVersionResponse;
  "DELETE /v3/{domain_name}/templates/{template_name}/versions/{version_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiUpdateOrDeleteTemplateOrVersionResponse;
  "PUT /v3/{domain_name}/templates/{template_name}/copy": MailgunFullApiSchemaGithubComMailgunTempleHttpapiTemplateCopyResponse;
  "PUT /v3/{domain_name}/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiVersionCopyResponse;
  "PUT /v3/{domain_name}/templates/{template_name}/rename/{new_template_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiUpdateOrDeleteTemplateOrVersionResponse;
  "GET /v4/templates": MailgunFullApiSchemaGithubComMailgunTempleHttpapiGetPageResponse;
  "POST /v4/templates": MailgunFullApiSchemaGithubComMailgunTempleHttpapiCreateTemplateOrVersionResponse;
  "DELETE /v4/templates": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v4/templates/{template_name}/versions": MailgunFullApiSchemaGithubComMailgunTempleHttpapiGetVersionsPageResponse;
  "POST /v4/templates/{template_name}/versions": MailgunFullApiSchemaGithubComMailgunTempleHttpapiCreateTemplateOrVersionResponse;
  "GET /v4/templates/{template_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiGetTemplateOrVersionResponse;
  "PUT /v4/templates/{template_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiUpdateOrDeleteTemplateOrVersionResponse;
  "DELETE /v4/templates/{template_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiUpdateOrDeleteTemplateOrVersionResponse;
  "GET /v4/templates/{template_name}/versions/{version_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiGetTemplateOrVersionResponse;
  "PUT /v4/templates/{template_name}/versions/{version_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiUpdateOrDeleteTemplateOrVersionResponse;
  "DELETE /v4/templates/{template_name}/versions/{version_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiUpdateOrDeleteTemplateOrVersionResponse;
  "PUT /v4/templates/{template_name}/copy": MailgunFullApiSchemaGithubComMailgunTempleHttpapiTemplateCopyResponse;
  "PUT /v4/templates/{template_name}/versions/{version_name}/copy/{new_version_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiVersionCopyResponse;
  "PUT /v4/templates/{template_name}/rename/{new_template_name}": MailgunFullApiSchemaGithubComMailgunTempleHttpapiUpdateOrDeleteTemplateOrVersionResponse;
  "PUT /v5/accounts": MailgunFullApiSchemaGithubComMailgunAccountsApiGenericMessage;
  "GET /v5/accounts/http_signing_key": MailgunFullApiSchemaGithubComMailgunAccountsApiHTTPSigningKey;
  "POST /v5/accounts/http_signing_key": MailgunFullApiSchemaGithubComMailgunAccountsApiHTTPSigningKey;
  "GET /v5/sandbox/auth_recipients": {
  recipients?: ReadonlyArray<MailgunFullApiSchemaGithubComMailgunAccountsApiRecipientResponse>;
};
  "POST /v5/sandbox/auth_recipients": {
  recipient?: MailgunFullApiSchemaGithubComMailgunAccountsApiRecipientResponse;
};
  "DELETE /v5/sandbox/auth_recipients/{email}": MailgunFullApiSchemaGithubComMailgunAccountsApiGenericMessage;
  "POST /v5/accounts/resend_activation_email": MailgunFullApiSchemaGithubComMailgunAccountsApiGenericSuccess;
  "PUT /v5/accounts/features": MailgunFullApiSchemaGithubComMailgunAccountsApiGenericSuccess;
  "GET /v5/accounts/subaccounts/{subaccount_id}": MailgunFullApiSchemaGithubComMailgunAccountsApiSubaccountResponse;
  "GET /v5/accounts/subaccounts": MailgunFullApiSchemaGithubComMailgunAccountsApiSubaccountListResponse;
  "POST /v5/accounts/subaccounts": MailgunFullApiSchemaGithubComMailgunAccountsApiSubaccountResponse;
  "DELETE /v5/accounts/subaccounts": MailgunFullApiSchemaGithubComMailgunAccountsApiGenericMessage;
  "POST /v5/accounts/subaccounts/{subaccount_id}/disable": MailgunFullApiSchemaGithubComMailgunAccountsApiSubaccountResponse;
  "POST /v5/accounts/subaccounts/{subaccount_id}/enable": MailgunFullApiSchemaGithubComMailgunAccountsApiSubaccountResponse;
  "GET /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": MailgunFullApiSchemaGithubComMailgunAccountsApiCustomMessageLimitResponse;
  "PUT /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": MailgunFullApiSchemaGithubComMailgunAccountsApiGenericSuccess;
  "DELETE /v5/accounts/subaccounts/{subaccount_id}/limit/custom/monthly": MailgunFullApiSchemaGithubComMailgunAccountsApiGenericSuccess;
  "GET /v5/accounts/limit/custom/monthly": MailgunFullApiSchemaGithubComMailgunAccountsApiCustomMessageLimitResponse;
  "PUT /v5/accounts/limit/custom/monthly": MailgunFullApiSchemaGithubComMailgunAccountsApiGenericSuccess;
  "DELETE /v5/accounts/limit/custom/monthly": MailgunFullApiSchemaGithubComMailgunAccountsApiGenericSuccess;
  "PUT /v5/accounts/limit/custom/enable": MailgunFullApiSchemaGithubComMailgunAccountsApiGenericSuccess;
  "PUT /v5/accounts/subaccounts/{subaccount_id}/features": {
  features?: MailgunFullApiSchemaGithubComMailgunAccountsApiFeaturesResponse;
};
  "GET /v1/keys": MailgunFullApiSchemaGithubComMailgunCerberusKeysKeysResp;
  "POST /v1/keys": MailgunFullApiSchemaGithubComMailgunCerberusKeysCreateKeyResp;
  "DELETE /v1/keys/{key_id}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "POST /v1/keys/public": MailgunFullApiSchemaGithubComMailgunCerberusKeysPublicKeyResp;
  "GET /v3/domains/{domain_name}/credentials": MailgunFullApiSchemaGithubComMailgunCerberusCredentialsListCredsResp;
  "POST /v3/domains/{domain_name}/credentials": MailgunFullApiSchemaGithubComMailgunCerberusCredentialsCreateCredsResp;
  "DELETE /v3/domains/{domain_name}/credentials": MailgunFullApiSchemaGithubComMailgunCerberusCredentialsDeleteDomainCredsResp;
  "PUT /v3/domains/{domain_name}/credentials/{spec}": MailgunFullApiSchemaGithubComMailgunCerberusCredentialsCreateCredsResp;
  "DELETE /v3/domains/{domain_name}/credentials/{spec}": MailgunFullApiSchemaGithubComMailgunCerberusCredentialsDeleteCredsResp;
  "GET /v2/ip_whitelist": MailgunFullApiSchemaGithubComMailgunCerberusWhitelistV2WhitelistResp;
  "PUT /v2/ip_whitelist": MailgunFullApiSchemaGithubComMailgunCerberusWhitelistV2WhitelistResp;
  "POST /v2/ip_whitelist": MailgunFullApiSchemaGithubComMailgunCerberusWhitelistV2WhitelistResp;
  "DELETE /v2/ip_whitelist": MailgunFullApiSchemaGithubComMailgunCerberusWhitelistV2WhitelistResp;
  "GET /v1/bounce-classification/stats": MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiListStatsResp;
  "GET /v1/bounce-classification/domains": MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiListAccountStatsResp;
  "GET /v1/bounce-classification/domains/{domain}/entities": MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiListDomainStatsResp;
  "GET /v1/bounce-classification/domains/{domain}/entities/{entity-id}/rules": MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiListEntityStatsResp;
  "GET /v1/bounce-classification/domains/{domain}/events": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v1/bounce-classification/config/entities": MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalConfigEntities;
  "GET /v1/bounce-classification/config/rules": MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalConfigRules;
  "POST /v2/bounce-classification/metrics": MailgunFullApiSchemaGithubComMailgunBounceClassificationInternalApiMetricsResponse;
  "GET /v3/forwards/{id}": MailgunFullApiSchemaGithubComMailgunPathfinderHttpapiForwardsRule;
  "PUT /v3/forwards/{id}": MailgunFullApiSchemaGithubComMailgunPathfinderHttpapiForwardsRule;
  "DELETE /v3/forwards/{id}": MailgunFullApiSchemaGithubComMailgunScaffoldHttpapiGenericResponse;
  "GET /v3/forwards": MailgunFullApiSchemaGithubComMailgunPathfinderHttpapiListForwardsRulesResp;
  "POST /v3/forwards": MailgunFullApiSchemaGithubComMailgunPathfinderHttpapiForwardsRule;
  "GET /v5/users": MailgunFullApiSchemaGithubComMailgunUsersApiUserListResponse;
  "GET /v5/users/{user_id}": MailgunFullApiSchemaGithubComMailgunUsersApiUserResponse;
  "GET /v5/users/me": MailgunFullApiSchemaGithubComMailgunUsersApiUserResponse;
}
