// Generated from the Mailgun OpenAPI spec (https://documentation.mailgun.com/_spec/docs/mailgun/api-reference/send/mailgun.json?download).
// Do not edit by hand; run scripts/generate-mailgun-full-api.mjs after checking upstream docs.

import type { MailgunOperationRequestInput } from "./index.js";
import type {
  MailgunFullApiOperationQueryMap,
  MailgunFullApiOperationQueryRequiredMap,
  MailgunFullApiOperationRequestBodyMap,
  MailgunFullApiOperationRequestBodyRequiredMap,
  MailgunFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createMailgunFullApiAccountManagementGeneratedClient,
  MailgunFullApiAccountManagementGeneratedFunctionNames,
  type MailgunFullApiAccountManagementGeneratedClient,
  type MailgunFullApiAccountManagementOperationPathParamMap,
  type MailgunFullApiAccountManagementOperationRequestMap,
} from "./full-api.generated/client/account-management-chunk.generated.js";
import {
  createMailgunFullApiAccountTemplatesGeneratedClient,
  MailgunFullApiAccountTemplatesGeneratedFunctionNames,
  type MailgunFullApiAccountTemplatesGeneratedClient,
  type MailgunFullApiAccountTemplatesOperationPathParamMap,
  type MailgunFullApiAccountTemplatesOperationRequestMap,
} from "./full-api.generated/client/account-templates-chunk.generated.js";
import {
  createMailgunFullApiAccountWebhooksGeneratedClient,
  MailgunFullApiAccountWebhooksGeneratedFunctionNames,
  type MailgunFullApiAccountWebhooksGeneratedClient,
  type MailgunFullApiAccountWebhooksOperationPathParamMap,
  type MailgunFullApiAccountWebhooksOperationRequestMap,
} from "./full-api.generated/client/account-webhooks-chunk.generated.js";
import {
  createMailgunFullApiAlertsGeneratedClient,
  MailgunFullApiAlertsGeneratedFunctionNames,
  type MailgunFullApiAlertsGeneratedClient,
  type MailgunFullApiAlertsOperationPathParamMap,
  type MailgunFullApiAlertsOperationRequestMap,
} from "./full-api.generated/client/alerts-chunk.generated.js";
import {
  createMailgunFullApiAllowlistGeneratedClient,
  MailgunFullApiAllowlistGeneratedFunctionNames,
  type MailgunFullApiAllowlistGeneratedClient,
  type MailgunFullApiAllowlistOperationPathParamMap,
  type MailgunFullApiAllowlistOperationRequestMap,
} from "./full-api.generated/client/allowlist-chunk.generated.js";
import {
  createMailgunFullApiBounceClassificationGeneratedClient,
  MailgunFullApiBounceClassificationGeneratedFunctionNames,
  type MailgunFullApiBounceClassificationGeneratedClient,
  type MailgunFullApiBounceClassificationOperationPathParamMap,
  type MailgunFullApiBounceClassificationOperationRequestMap,
} from "./full-api.generated/client/bounce-classification-chunk.generated.js";
import {
  createMailgunFullApiBouncesGeneratedClient,
  MailgunFullApiBouncesGeneratedFunctionNames,
  type MailgunFullApiBouncesGeneratedClient,
  type MailgunFullApiBouncesOperationPathParamMap,
  type MailgunFullApiBouncesOperationRequestMap,
} from "./full-api.generated/client/bounces-chunk.generated.js";
import {
  createMailgunFullApiComplaintsGeneratedClient,
  MailgunFullApiComplaintsGeneratedFunctionNames,
  type MailgunFullApiComplaintsGeneratedClient,
  type MailgunFullApiComplaintsOperationPathParamMap,
  type MailgunFullApiComplaintsOperationRequestMap,
} from "./full-api.generated/client/complaints-chunk.generated.js";
import {
  createMailgunFullApiCredentialsGeneratedClient,
  MailgunFullApiCredentialsGeneratedFunctionNames,
  type MailgunFullApiCredentialsGeneratedClient,
  type MailgunFullApiCredentialsOperationPathParamMap,
  type MailgunFullApiCredentialsOperationRequestMap,
} from "./full-api.generated/client/credentials-chunk.generated.js";
import {
  createMailgunFullApiCustomMessageLimitGeneratedClient,
  MailgunFullApiCustomMessageLimitGeneratedFunctionNames,
  type MailgunFullApiCustomMessageLimitGeneratedClient,
  type MailgunFullApiCustomMessageLimitOperationPathParamMap,
  type MailgunFullApiCustomMessageLimitOperationRequestMap,
} from "./full-api.generated/client/custom-message-limit-chunk.generated.js";
import {
  createMailgunFullApiDelegatedDIPPsGeneratedClient,
  MailgunFullApiDelegatedDIPPsGeneratedFunctionNames,
  type MailgunFullApiDelegatedDIPPsGeneratedClient,
  type MailgunFullApiDelegatedDIPPsOperationPathParamMap,
  type MailgunFullApiDelegatedDIPPsOperationRequestMap,
} from "./full-api.generated/client/delegated-dipps-chunk.generated.js";
import {
  createMailgunFullApiDKIMSecurityGeneratedClient,
  MailgunFullApiDKIMSecurityGeneratedFunctionNames,
  type MailgunFullApiDKIMSecurityGeneratedClient,
  type MailgunFullApiDKIMSecurityOperationPathParamMap,
  type MailgunFullApiDKIMSecurityOperationRequestMap,
} from "./full-api.generated/client/dkim-security-chunk.generated.js";
import {
  createMailgunFullApiDomainKeysGeneratedClient,
  MailgunFullApiDomainKeysGeneratedFunctionNames,
  type MailgunFullApiDomainKeysGeneratedClient,
  type MailgunFullApiDomainKeysOperationPathParamMap,
  type MailgunFullApiDomainKeysOperationRequestMap,
} from "./full-api.generated/client/domain-keys-chunk.generated.js";
import {
  createMailgunFullApiDomainTemplatesGeneratedClient,
  MailgunFullApiDomainTemplatesGeneratedFunctionNames,
  type MailgunFullApiDomainTemplatesGeneratedClient,
  type MailgunFullApiDomainTemplatesOperationPathParamMap,
  type MailgunFullApiDomainTemplatesOperationRequestMap,
} from "./full-api.generated/client/domain-templates-chunk.generated.js";
import {
  createMailgunFullApiDomainTrackingGeneratedClient,
  MailgunFullApiDomainTrackingGeneratedFunctionNames,
  type MailgunFullApiDomainTrackingGeneratedClient,
  type MailgunFullApiDomainTrackingOperationPathParamMap,
  type MailgunFullApiDomainTrackingOperationRequestMap,
} from "./full-api.generated/client/domain-tracking-chunk.generated.js";
import {
  createMailgunFullApiDomainWebhooksGeneratedClient,
  MailgunFullApiDomainWebhooksGeneratedFunctionNames,
  type MailgunFullApiDomainWebhooksGeneratedClient,
  type MailgunFullApiDomainWebhooksOperationPathParamMap,
  type MailgunFullApiDomainWebhooksOperationRequestMap,
} from "./full-api.generated/client/domain-webhooks-chunk.generated.js";
import {
  createMailgunFullApiDomainsGeneratedClient,
  MailgunFullApiDomainsGeneratedFunctionNames,
  type MailgunFullApiDomainsGeneratedClient,
  type MailgunFullApiDomainsOperationPathParamMap,
  type MailgunFullApiDomainsOperationRequestMap,
} from "./full-api.generated/client/domains-chunk.generated.js";
import {
  createMailgunFullApiDynamicIPPoolsGeneratedClient,
  MailgunFullApiDynamicIPPoolsGeneratedFunctionNames,
  type MailgunFullApiDynamicIPPoolsGeneratedClient,
  type MailgunFullApiDynamicIPPoolsOperationPathParamMap,
  type MailgunFullApiDynamicIPPoolsOperationRequestMap,
} from "./full-api.generated/client/dynamic-ip-pools-chunk.generated.js";
import {
  createMailgunFullApiEventsGeneratedClient,
  MailgunFullApiEventsGeneratedFunctionNames,
  type MailgunFullApiEventsGeneratedClient,
  type MailgunFullApiEventsOperationPathParamMap,
  type MailgunFullApiEventsOperationRequestMap,
} from "./full-api.generated/client/events-chunk.generated.js";
import {
  createMailgunFullApiForwardsGeneratedClient,
  MailgunFullApiForwardsGeneratedFunctionNames,
  type MailgunFullApiForwardsGeneratedClient,
  type MailgunFullApiForwardsOperationPathParamMap,
  type MailgunFullApiForwardsOperationRequestMap,
} from "./full-api.generated/client/forwards-chunk.generated.js";
import {
  createMailgunFullApiIPAddressWarmupGeneratedClient,
  MailgunFullApiIPAddressWarmupGeneratedFunctionNames,
  type MailgunFullApiIPAddressWarmupGeneratedClient,
  type MailgunFullApiIPAddressWarmupOperationPathParamMap,
  type MailgunFullApiIPAddressWarmupOperationRequestMap,
} from "./full-api.generated/client/ip-address-warmup-chunk.generated.js";
import {
  createMailgunFullApiIPAllowlistGeneratedClient,
  MailgunFullApiIPAllowlistGeneratedFunctionNames,
  type MailgunFullApiIPAllowlistGeneratedClient,
  type MailgunFullApiIPAllowlistOperationPathParamMap,
  type MailgunFullApiIPAllowlistOperationRequestMap,
} from "./full-api.generated/client/ip-allowlist-chunk.generated.js";
import {
  createMailgunFullApiIPPoolsGeneratedClient,
  MailgunFullApiIPPoolsGeneratedFunctionNames,
  type MailgunFullApiIPPoolsGeneratedClient,
  type MailgunFullApiIPPoolsOperationPathParamMap,
  type MailgunFullApiIPPoolsOperationRequestMap,
} from "./full-api.generated/client/ip-pools-chunk.generated.js";
import {
  createMailgunFullApiIPsGeneratedClient,
  MailgunFullApiIPsGeneratedFunctionNames,
  type MailgunFullApiIPsGeneratedClient,
  type MailgunFullApiIPsOperationPathParamMap,
  type MailgunFullApiIPsOperationRequestMap,
} from "./full-api.generated/client/ips-chunk.generated.js";
import {
  createMailgunFullApiKeysGeneratedClient,
  MailgunFullApiKeysGeneratedFunctionNames,
  type MailgunFullApiKeysGeneratedClient,
  type MailgunFullApiKeysOperationPathParamMap,
  type MailgunFullApiKeysOperationRequestMap,
} from "./full-api.generated/client/keys-chunk.generated.js";
import {
  createMailgunFullApiLimitsGeneratedClient,
  MailgunFullApiLimitsGeneratedFunctionNames,
  type MailgunFullApiLimitsGeneratedClient,
  type MailgunFullApiLimitsOperationPathParamMap,
  type MailgunFullApiLimitsOperationRequestMap,
} from "./full-api.generated/client/limits-chunk.generated.js";
import {
  createMailgunFullApiLogsGeneratedClient,
  MailgunFullApiLogsGeneratedFunctionNames,
  type MailgunFullApiLogsGeneratedClient,
  type MailgunFullApiLogsOperationPathParamMap,
  type MailgunFullApiLogsOperationRequestMap,
} from "./full-api.generated/client/logs-chunk.generated.js";
import {
  createMailgunFullApiMailingListsGeneratedClient,
  MailgunFullApiMailingListsGeneratedFunctionNames,
  type MailgunFullApiMailingListsGeneratedClient,
  type MailgunFullApiMailingListsOperationPathParamMap,
  type MailgunFullApiMailingListsOperationRequestMap,
} from "./full-api.generated/client/mailing-lists-chunk.generated.js";
import {
  createMailgunFullApiMessagesGeneratedClient,
  MailgunFullApiMessagesGeneratedFunctionNames,
  type MailgunFullApiMessagesGeneratedClient,
  type MailgunFullApiMessagesOperationPathParamMap,
  type MailgunFullApiMessagesOperationRequestMap,
} from "./full-api.generated/client/messages-chunk.generated.js";
import {
  createMailgunFullApiMetricsGeneratedClient,
  MailgunFullApiMetricsGeneratedFunctionNames,
  type MailgunFullApiMetricsGeneratedClient,
  type MailgunFullApiMetricsOperationPathParamMap,
  type MailgunFullApiMetricsOperationRequestMap,
} from "./full-api.generated/client/metrics-chunk.generated.js";
import {
  createMailgunFullApiOpenapiScoutOtherGeneratedClient,
  MailgunFullApiOpenapiScoutOtherGeneratedFunctionNames,
  type MailgunFullApiOpenapiScoutOtherGeneratedClient,
  type MailgunFullApiOpenapiScoutOtherOperationPathParamMap,
  type MailgunFullApiOpenapiScoutOtherOperationRequestMap,
} from "./full-api.generated/client/openapi-scout-other-chunk.generated.js";
import {
  createMailgunFullApiOpenapiTowerOtherGeneratedClient,
  MailgunFullApiOpenapiTowerOtherGeneratedFunctionNames,
  type MailgunFullApiOpenapiTowerOtherGeneratedClient,
  type MailgunFullApiOpenapiTowerOtherOperationPathParamMap,
  type MailgunFullApiOpenapiTowerOtherOperationRequestMap,
} from "./full-api.generated/client/openapi-tower-other-chunk.generated.js";
import {
  createMailgunFullApiRoutesGeneratedClient,
  MailgunFullApiRoutesGeneratedFunctionNames,
  type MailgunFullApiRoutesGeneratedClient,
  type MailgunFullApiRoutesOperationPathParamMap,
  type MailgunFullApiRoutesOperationRequestMap,
} from "./full-api.generated/client/routes-chunk.generated.js";
import {
  createMailgunFullApiSendAlertsGeneratedClient,
  MailgunFullApiSendAlertsGeneratedFunctionNames,
  type MailgunFullApiSendAlertsGeneratedClient,
  type MailgunFullApiSendAlertsOperationPathParamMap,
  type MailgunFullApiSendAlertsOperationRequestMap,
} from "./full-api.generated/client/send-alerts-chunk.generated.js";
import {
  createMailgunFullApiStatsGeneratedClient,
  MailgunFullApiStatsGeneratedFunctionNames,
  type MailgunFullApiStatsGeneratedClient,
  type MailgunFullApiStatsOperationPathParamMap,
  type MailgunFullApiStatsOperationRequestMap,
} from "./full-api.generated/client/stats-chunk.generated.js";
import {
  createMailgunFullApiSubaccountsGeneratedClient,
  MailgunFullApiSubaccountsGeneratedFunctionNames,
  type MailgunFullApiSubaccountsGeneratedClient,
  type MailgunFullApiSubaccountsOperationPathParamMap,
  type MailgunFullApiSubaccountsOperationRequestMap,
} from "./full-api.generated/client/subaccounts-chunk.generated.js";
import {
  createMailgunFullApiTagsGeneratedClient,
  MailgunFullApiTagsGeneratedFunctionNames,
  type MailgunFullApiTagsGeneratedClient,
  type MailgunFullApiTagsOperationPathParamMap,
  type MailgunFullApiTagsOperationRequestMap,
} from "./full-api.generated/client/tags-chunk.generated.js";
import {
  createMailgunFullApiTagsNewGeneratedClient,
  MailgunFullApiTagsNewGeneratedFunctionNames,
  type MailgunFullApiTagsNewGeneratedClient,
  type MailgunFullApiTagsNewOperationPathParamMap,
  type MailgunFullApiTagsNewOperationRequestMap,
} from "./full-api.generated/client/tags-new-chunk.generated.js";
import {
  createMailgunFullApiUnsubscribeGeneratedClient,
  MailgunFullApiUnsubscribeGeneratedFunctionNames,
  type MailgunFullApiUnsubscribeGeneratedClient,
  type MailgunFullApiUnsubscribeOperationPathParamMap,
  type MailgunFullApiUnsubscribeOperationRequestMap,
} from "./full-api.generated/client/unsubscribe-chunk.generated.js";
import {
  createMailgunFullApiUsersGeneratedClient,
  MailgunFullApiUsersGeneratedFunctionNames,
  type MailgunFullApiUsersGeneratedClient,
  type MailgunFullApiUsersOperationPathParamMap,
  type MailgunFullApiUsersOperationRequestMap,
} from "./full-api.generated/client/users-chunk.generated.js";

export type MailgunFullApiPathParamValue = string | number;
export interface MailgunFullApiOperationPathParamMap extends MailgunFullApiAccountManagementOperationPathParamMap, MailgunFullApiAccountTemplatesOperationPathParamMap, MailgunFullApiAccountWebhooksOperationPathParamMap, MailgunFullApiAlertsOperationPathParamMap, MailgunFullApiAllowlistOperationPathParamMap, MailgunFullApiBounceClassificationOperationPathParamMap, MailgunFullApiBouncesOperationPathParamMap, MailgunFullApiComplaintsOperationPathParamMap, MailgunFullApiCredentialsOperationPathParamMap, MailgunFullApiCustomMessageLimitOperationPathParamMap, MailgunFullApiDelegatedDIPPsOperationPathParamMap, MailgunFullApiDKIMSecurityOperationPathParamMap, MailgunFullApiDomainKeysOperationPathParamMap, MailgunFullApiDomainTemplatesOperationPathParamMap, MailgunFullApiDomainTrackingOperationPathParamMap, MailgunFullApiDomainWebhooksOperationPathParamMap, MailgunFullApiDomainsOperationPathParamMap, MailgunFullApiDynamicIPPoolsOperationPathParamMap, MailgunFullApiEventsOperationPathParamMap, MailgunFullApiForwardsOperationPathParamMap, MailgunFullApiIPAddressWarmupOperationPathParamMap, MailgunFullApiIPAllowlistOperationPathParamMap, MailgunFullApiIPPoolsOperationPathParamMap, MailgunFullApiIPsOperationPathParamMap, MailgunFullApiKeysOperationPathParamMap, MailgunFullApiLimitsOperationPathParamMap, MailgunFullApiLogsOperationPathParamMap, MailgunFullApiMailingListsOperationPathParamMap, MailgunFullApiMessagesOperationPathParamMap, MailgunFullApiMetricsOperationPathParamMap, MailgunFullApiOpenapiScoutOtherOperationPathParamMap, MailgunFullApiOpenapiTowerOtherOperationPathParamMap, MailgunFullApiRoutesOperationPathParamMap, MailgunFullApiSendAlertsOperationPathParamMap, MailgunFullApiStatsOperationPathParamMap, MailgunFullApiSubaccountsOperationPathParamMap, MailgunFullApiTagsOperationPathParamMap, MailgunFullApiTagsNewOperationPathParamMap, MailgunFullApiUnsubscribeOperationPathParamMap, MailgunFullApiUsersOperationPathParamMap {}

export type MailgunFullApiOperationKey = keyof MailgunFullApiOperationPathParamMap & string;

export type MailgunFullApiOperationQueryInput<OperationKey extends MailgunFullApiOperationKey> =
  MailgunFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: MailgunFullApiOperationQueryMap[OperationKey] }
    : { query?: MailgunFullApiOperationQueryMap[OperationKey] };

export type MailgunFullApiOperationBodyInput<OperationKey extends MailgunFullApiOperationKey> =
  [MailgunFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : MailgunFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: MailgunFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: MailgunFullApiOperationRequestBodyMap[OperationKey] };

export type MailgunFullApiOperationInput<OperationKey extends MailgunFullApiOperationKey> = Omit<MailgunOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends MailgunFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: MailgunFullApiOperationPathParamMap[OperationKey] }
) & MailgunFullApiOperationQueryInput<OperationKey> & MailgunFullApiOperationBodyInput<OperationKey>;

export interface MailgunFullApiOperationRequestMap extends MailgunFullApiAccountManagementOperationRequestMap, MailgunFullApiAccountTemplatesOperationRequestMap, MailgunFullApiAccountWebhooksOperationRequestMap, MailgunFullApiAlertsOperationRequestMap, MailgunFullApiAllowlistOperationRequestMap, MailgunFullApiBounceClassificationOperationRequestMap, MailgunFullApiBouncesOperationRequestMap, MailgunFullApiComplaintsOperationRequestMap, MailgunFullApiCredentialsOperationRequestMap, MailgunFullApiCustomMessageLimitOperationRequestMap, MailgunFullApiDelegatedDIPPsOperationRequestMap, MailgunFullApiDKIMSecurityOperationRequestMap, MailgunFullApiDomainKeysOperationRequestMap, MailgunFullApiDomainTemplatesOperationRequestMap, MailgunFullApiDomainTrackingOperationRequestMap, MailgunFullApiDomainWebhooksOperationRequestMap, MailgunFullApiDomainsOperationRequestMap, MailgunFullApiDynamicIPPoolsOperationRequestMap, MailgunFullApiEventsOperationRequestMap, MailgunFullApiForwardsOperationRequestMap, MailgunFullApiIPAddressWarmupOperationRequestMap, MailgunFullApiIPAllowlistOperationRequestMap, MailgunFullApiIPPoolsOperationRequestMap, MailgunFullApiIPsOperationRequestMap, MailgunFullApiKeysOperationRequestMap, MailgunFullApiLimitsOperationRequestMap, MailgunFullApiLogsOperationRequestMap, MailgunFullApiMailingListsOperationRequestMap, MailgunFullApiMessagesOperationRequestMap, MailgunFullApiMetricsOperationRequestMap, MailgunFullApiOpenapiScoutOtherOperationRequestMap, MailgunFullApiOpenapiTowerOtherOperationRequestMap, MailgunFullApiRoutesOperationRequestMap, MailgunFullApiSendAlertsOperationRequestMap, MailgunFullApiStatsOperationRequestMap, MailgunFullApiSubaccountsOperationRequestMap, MailgunFullApiTagsOperationRequestMap, MailgunFullApiTagsNewOperationRequestMap, MailgunFullApiUnsubscribeOperationRequestMap, MailgunFullApiUsersOperationRequestMap {}

export type MailgunFullApiOperationArgs<OperationKey extends MailgunFullApiOperationKey> = {} extends MailgunFullApiOperationPathParamMap[OperationKey]
  ? [input?: MailgunFullApiOperationRequestMap[OperationKey]]
  : [input: MailgunFullApiOperationRequestMap[OperationKey]];

export type MailgunGeneratedOperationCaller = <OperationKey extends MailgunFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: MailgunFullApiOperationArgs<OperationKey>
) => Promise<MailgunFullApiOperationResponseMap[OperationKey]>;

export interface MailgunFullApiGeneratedClient extends MailgunFullApiAccountManagementGeneratedClient, MailgunFullApiAccountTemplatesGeneratedClient, MailgunFullApiAccountWebhooksGeneratedClient, MailgunFullApiAlertsGeneratedClient, MailgunFullApiAllowlistGeneratedClient, MailgunFullApiBounceClassificationGeneratedClient, MailgunFullApiBouncesGeneratedClient, MailgunFullApiComplaintsGeneratedClient, MailgunFullApiCredentialsGeneratedClient, MailgunFullApiCustomMessageLimitGeneratedClient, MailgunFullApiDelegatedDIPPsGeneratedClient, MailgunFullApiDKIMSecurityGeneratedClient, MailgunFullApiDomainKeysGeneratedClient, MailgunFullApiDomainTemplatesGeneratedClient, MailgunFullApiDomainTrackingGeneratedClient, MailgunFullApiDomainWebhooksGeneratedClient, MailgunFullApiDomainsGeneratedClient, MailgunFullApiDynamicIPPoolsGeneratedClient, MailgunFullApiEventsGeneratedClient, MailgunFullApiForwardsGeneratedClient, MailgunFullApiIPAddressWarmupGeneratedClient, MailgunFullApiIPAllowlistGeneratedClient, MailgunFullApiIPPoolsGeneratedClient, MailgunFullApiIPsGeneratedClient, MailgunFullApiKeysGeneratedClient, MailgunFullApiLimitsGeneratedClient, MailgunFullApiLogsGeneratedClient, MailgunFullApiMailingListsGeneratedClient, MailgunFullApiMessagesGeneratedClient, MailgunFullApiMetricsGeneratedClient, MailgunFullApiOpenapiScoutOtherGeneratedClient, MailgunFullApiOpenapiTowerOtherGeneratedClient, MailgunFullApiRoutesGeneratedClient, MailgunFullApiSendAlertsGeneratedClient, MailgunFullApiStatsGeneratedClient, MailgunFullApiSubaccountsGeneratedClient, MailgunFullApiTagsGeneratedClient, MailgunFullApiTagsNewGeneratedClient, MailgunFullApiUnsubscribeGeneratedClient, MailgunFullApiUsersGeneratedClient {}

export const MAILGUN_FULL_API_GENERATED_FUNCTION_COUNT = 265 as const;
export const MAILGUN_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...MailgunFullApiAccountManagementGeneratedFunctionNames,
  ...MailgunFullApiAccountTemplatesGeneratedFunctionNames,
  ...MailgunFullApiAccountWebhooksGeneratedFunctionNames,
  ...MailgunFullApiAlertsGeneratedFunctionNames,
  ...MailgunFullApiAllowlistGeneratedFunctionNames,
  ...MailgunFullApiBounceClassificationGeneratedFunctionNames,
  ...MailgunFullApiBouncesGeneratedFunctionNames,
  ...MailgunFullApiComplaintsGeneratedFunctionNames,
  ...MailgunFullApiCredentialsGeneratedFunctionNames,
  ...MailgunFullApiCustomMessageLimitGeneratedFunctionNames,
  ...MailgunFullApiDelegatedDIPPsGeneratedFunctionNames,
  ...MailgunFullApiDKIMSecurityGeneratedFunctionNames,
  ...MailgunFullApiDomainKeysGeneratedFunctionNames,
  ...MailgunFullApiDomainTemplatesGeneratedFunctionNames,
  ...MailgunFullApiDomainTrackingGeneratedFunctionNames,
  ...MailgunFullApiDomainWebhooksGeneratedFunctionNames,
  ...MailgunFullApiDomainsGeneratedFunctionNames,
  ...MailgunFullApiDynamicIPPoolsGeneratedFunctionNames,
  ...MailgunFullApiEventsGeneratedFunctionNames,
  ...MailgunFullApiForwardsGeneratedFunctionNames,
  ...MailgunFullApiIPAddressWarmupGeneratedFunctionNames,
  ...MailgunFullApiIPAllowlistGeneratedFunctionNames,
  ...MailgunFullApiIPPoolsGeneratedFunctionNames,
  ...MailgunFullApiIPsGeneratedFunctionNames,
  ...MailgunFullApiKeysGeneratedFunctionNames,
  ...MailgunFullApiLimitsGeneratedFunctionNames,
  ...MailgunFullApiLogsGeneratedFunctionNames,
  ...MailgunFullApiMailingListsGeneratedFunctionNames,
  ...MailgunFullApiMessagesGeneratedFunctionNames,
  ...MailgunFullApiMetricsGeneratedFunctionNames,
  ...MailgunFullApiOpenapiScoutOtherGeneratedFunctionNames,
  ...MailgunFullApiOpenapiTowerOtherGeneratedFunctionNames,
  ...MailgunFullApiRoutesGeneratedFunctionNames,
  ...MailgunFullApiSendAlertsGeneratedFunctionNames,
  ...MailgunFullApiStatsGeneratedFunctionNames,
  ...MailgunFullApiSubaccountsGeneratedFunctionNames,
  ...MailgunFullApiTagsGeneratedFunctionNames,
  ...MailgunFullApiTagsNewGeneratedFunctionNames,
  ...MailgunFullApiUnsubscribeGeneratedFunctionNames,
  ...MailgunFullApiUsersGeneratedFunctionNames,
] as const satisfies readonly (keyof MailgunFullApiGeneratedClient)[];

export function createMailgunFullApiGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiGeneratedClient {
  return Object.assign(
    {},
    createMailgunFullApiAccountManagementGeneratedClient(callOperation),
    createMailgunFullApiAccountTemplatesGeneratedClient(callOperation),
    createMailgunFullApiAccountWebhooksGeneratedClient(callOperation),
    createMailgunFullApiAlertsGeneratedClient(callOperation),
    createMailgunFullApiAllowlistGeneratedClient(callOperation),
    createMailgunFullApiBounceClassificationGeneratedClient(callOperation),
    createMailgunFullApiBouncesGeneratedClient(callOperation),
    createMailgunFullApiComplaintsGeneratedClient(callOperation),
    createMailgunFullApiCredentialsGeneratedClient(callOperation),
    createMailgunFullApiCustomMessageLimitGeneratedClient(callOperation),
    createMailgunFullApiDelegatedDIPPsGeneratedClient(callOperation),
    createMailgunFullApiDKIMSecurityGeneratedClient(callOperation),
    createMailgunFullApiDomainKeysGeneratedClient(callOperation),
    createMailgunFullApiDomainTemplatesGeneratedClient(callOperation),
    createMailgunFullApiDomainTrackingGeneratedClient(callOperation),
    createMailgunFullApiDomainWebhooksGeneratedClient(callOperation),
    createMailgunFullApiDomainsGeneratedClient(callOperation),
    createMailgunFullApiDynamicIPPoolsGeneratedClient(callOperation),
    createMailgunFullApiEventsGeneratedClient(callOperation),
    createMailgunFullApiForwardsGeneratedClient(callOperation),
    createMailgunFullApiIPAddressWarmupGeneratedClient(callOperation),
    createMailgunFullApiIPAllowlistGeneratedClient(callOperation),
    createMailgunFullApiIPPoolsGeneratedClient(callOperation),
    createMailgunFullApiIPsGeneratedClient(callOperation),
    createMailgunFullApiKeysGeneratedClient(callOperation),
    createMailgunFullApiLimitsGeneratedClient(callOperation),
    createMailgunFullApiLogsGeneratedClient(callOperation),
    createMailgunFullApiMailingListsGeneratedClient(callOperation),
    createMailgunFullApiMessagesGeneratedClient(callOperation),
    createMailgunFullApiMetricsGeneratedClient(callOperation),
    createMailgunFullApiOpenapiScoutOtherGeneratedClient(callOperation),
    createMailgunFullApiOpenapiTowerOtherGeneratedClient(callOperation),
    createMailgunFullApiRoutesGeneratedClient(callOperation),
    createMailgunFullApiSendAlertsGeneratedClient(callOperation),
    createMailgunFullApiStatsGeneratedClient(callOperation),
    createMailgunFullApiSubaccountsGeneratedClient(callOperation),
    createMailgunFullApiTagsGeneratedClient(callOperation),
    createMailgunFullApiTagsNewGeneratedClient(callOperation),
    createMailgunFullApiUnsubscribeGeneratedClient(callOperation),
    createMailgunFullApiUsersGeneratedClient(callOperation),
  ) as MailgunFullApiGeneratedClient;
}
