// Generated from HubSpot's public OpenAPI catalog (https://api.hubspot.com/public/api/spec/v1/specs).
// Do not edit by hand; run scripts/generate-hubspot-full-api.mjs after checking upstream docs.

import type { HubSpotOperationRequestInput } from "./index.js";
import type {
  HubSpotFullApiOperationQueryMap,
  HubSpotFullApiOperationQueryRequiredMap,
  HubSpotFullApiOperationRequestBodyMap,
  HubSpotFullApiOperationRequestBodyRequiredMap,
  HubSpotFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createHubSpotFullApiABTestsGeneratedClient,
  HubSpotFullApiABTestsGeneratedFunctionNames,
  type HubSpotFullApiABTestsGeneratedClient,
  type HubSpotFullApiABTestsOperationPathParamMap,
  type HubSpotFullApiABTestsOperationRequestMap,
} from "./full-api.generated/client/a-b-tests-chunk.generated.js";
import {
  createHubSpotFullApiActorsGeneratedClient,
  HubSpotFullApiActorsGeneratedFunctionNames,
  type HubSpotFullApiActorsGeneratedClient,
  type HubSpotFullApiActorsOperationPathParamMap,
  type HubSpotFullApiActorsOperationRequestMap,
} from "./full-api.generated/client/actors-chunk.generated.js";
import {
  createHubSpotFullApiAdvancedGeneratedClient,
  HubSpotFullApiAdvancedGeneratedFunctionNames,
  type HubSpotFullApiAdvancedGeneratedClient,
  type HubSpotFullApiAdvancedOperationPathParamMap,
  type HubSpotFullApiAdvancedOperationRequestMap,
} from "./full-api.generated/client/advanced-chunk.generated.js";
import {
  createHubSpotFullApiAssetsGeneratedClient,
  HubSpotFullApiAssetsGeneratedFunctionNames,
  type HubSpotFullApiAssetsGeneratedClient,
  type HubSpotFullApiAssetsOperationPathParamMap,
  type HubSpotFullApiAssetsOperationRequestMap,
} from "./full-api.generated/client/assets-chunk.generated.js";
import {
  createHubSpotFullApiBasic01GeneratedClient,
  HubSpotFullApiBasic01GeneratedFunctionNames,
  type HubSpotFullApiBasic01GeneratedClient,
  type HubSpotFullApiBasic01OperationPathParamMap,
  type HubSpotFullApiBasic01OperationRequestMap,
} from "./full-api.generated/client/basic-01-chunk.generated.js";
import {
  createHubSpotFullApiBasic02GeneratedClient,
  HubSpotFullApiBasic02GeneratedFunctionNames,
  type HubSpotFullApiBasic02GeneratedClient,
  type HubSpotFullApiBasic02OperationPathParamMap,
  type HubSpotFullApiBasic02OperationRequestMap,
} from "./full-api.generated/client/basic-02-chunk.generated.js";
import {
  createHubSpotFullApiBasic03GeneratedClient,
  HubSpotFullApiBasic03GeneratedFunctionNames,
  type HubSpotFullApiBasic03GeneratedClient,
  type HubSpotFullApiBasic03OperationPathParamMap,
  type HubSpotFullApiBasic03OperationRequestMap,
} from "./full-api.generated/client/basic-03-chunk.generated.js";
import {
  createHubSpotFullApiBasic04GeneratedClient,
  HubSpotFullApiBasic04GeneratedFunctionNames,
  type HubSpotFullApiBasic04GeneratedClient,
  type HubSpotFullApiBasic04OperationPathParamMap,
  type HubSpotFullApiBasic04OperationRequestMap,
} from "./full-api.generated/client/basic-04-chunk.generated.js";
import {
  createHubSpotFullApiBasic05GeneratedClient,
  HubSpotFullApiBasic05GeneratedFunctionNames,
  type HubSpotFullApiBasic05GeneratedClient,
  type HubSpotFullApiBasic05OperationPathParamMap,
  type HubSpotFullApiBasic05OperationRequestMap,
} from "./full-api.generated/client/basic-05-chunk.generated.js";
import {
  createHubSpotFullApiBasic06GeneratedClient,
  HubSpotFullApiBasic06GeneratedFunctionNames,
  type HubSpotFullApiBasic06GeneratedClient,
  type HubSpotFullApiBasic06OperationPathParamMap,
  type HubSpotFullApiBasic06OperationRequestMap,
} from "./full-api.generated/client/basic-06-chunk.generated.js";
import {
  createHubSpotFullApiBasic07GeneratedClient,
  HubSpotFullApiBasic07GeneratedFunctionNames,
  type HubSpotFullApiBasic07GeneratedClient,
  type HubSpotFullApiBasic07OperationPathParamMap,
  type HubSpotFullApiBasic07OperationRequestMap,
} from "./full-api.generated/client/basic-07-chunk.generated.js";
import {
  createHubSpotFullApiBatch01GeneratedClient,
  HubSpotFullApiBatch01GeneratedFunctionNames,
  type HubSpotFullApiBatch01GeneratedClient,
  type HubSpotFullApiBatch01OperationPathParamMap,
  type HubSpotFullApiBatch01OperationRequestMap,
} from "./full-api.generated/client/batch-01-chunk.generated.js";
import {
  createHubSpotFullApiBatch02GeneratedClient,
  HubSpotFullApiBatch02GeneratedFunctionNames,
  type HubSpotFullApiBatch02GeneratedClient,
  type HubSpotFullApiBatch02OperationPathParamMap,
  type HubSpotFullApiBatch02OperationRequestMap,
} from "./full-api.generated/client/batch-02-chunk.generated.js";
import {
  createHubSpotFullApiBatch03GeneratedClient,
  HubSpotFullApiBatch03GeneratedFunctionNames,
  type HubSpotFullApiBatch03GeneratedClient,
  type HubSpotFullApiBatch03OperationPathParamMap,
  type HubSpotFullApiBatch03OperationRequestMap,
} from "./full-api.generated/client/batch-03-chunk.generated.js";
import {
  createHubSpotFullApiBatch04GeneratedClient,
  HubSpotFullApiBatch04GeneratedFunctionNames,
  type HubSpotFullApiBatch04GeneratedClient,
  type HubSpotFullApiBatch04OperationPathParamMap,
  type HubSpotFullApiBatch04OperationRequestMap,
} from "./full-api.generated/client/batch-04-chunk.generated.js";
import {
  createHubSpotFullApiBudgetGeneratedClient,
  HubSpotFullApiBudgetGeneratedFunctionNames,
  type HubSpotFullApiBudgetGeneratedClient,
  type HubSpotFullApiBudgetOperationPathParamMap,
  type HubSpotFullApiBudgetOperationRequestMap,
} from "./full-api.generated/client/budget-chunk.generated.js";
import {
  createHubSpotFullApiCallbacksGeneratedClient,
  HubSpotFullApiCallbacksGeneratedFunctionNames,
  type HubSpotFullApiCallbacksGeneratedClient,
  type HubSpotFullApiCallbacksOperationPathParamMap,
  type HubSpotFullApiCallbacksOperationRequestMap,
} from "./full-api.generated/client/callbacks-chunk.generated.js";
import {
  createHubSpotFullApiCentralFXRatesGeneratedClient,
  HubSpotFullApiCentralFXRatesGeneratedFunctionNames,
  type HubSpotFullApiCentralFXRatesGeneratedClient,
  type HubSpotFullApiCentralFXRatesOperationPathParamMap,
  type HubSpotFullApiCentralFXRatesOperationRequestMap,
} from "./full-api.generated/client/central-fx-rates-chunk.generated.js";
import {
  createHubSpotFullApiChannelAccountsGeneratedClient,
  HubSpotFullApiChannelAccountsGeneratedFunctionNames,
  type HubSpotFullApiChannelAccountsGeneratedClient,
  type HubSpotFullApiChannelAccountsOperationPathParamMap,
  type HubSpotFullApiChannelAccountsOperationRequestMap,
} from "./full-api.generated/client/channel-accounts-chunk.generated.js";
import {
  createHubSpotFullApiChannelsGeneratedClient,
  HubSpotFullApiChannelsGeneratedFunctionNames,
  type HubSpotFullApiChannelsGeneratedClient,
  type HubSpotFullApiChannelsOperationPathParamMap,
  type HubSpotFullApiChannelsOperationRequestMap,
} from "./full-api.generated/client/channels-chunk.generated.js";
import {
  createHubSpotFullApiDefinitionsGeneratedClient,
  HubSpotFullApiDefinitionsGeneratedFunctionNames,
  type HubSpotFullApiDefinitionsGeneratedClient,
  type HubSpotFullApiDefinitionsOperationPathParamMap,
  type HubSpotFullApiDefinitionsOperationRequestMap,
} from "./full-api.generated/client/definitions-chunk.generated.js";
import {
  createHubSpotFullApiEmailsGeneratedClient,
  HubSpotFullApiEmailsGeneratedFunctionNames,
  type HubSpotFullApiEmailsGeneratedClient,
  type HubSpotFullApiEmailsOperationPathParamMap,
  type HubSpotFullApiEmailsOperationRequestMap,
} from "./full-api.generated/client/emails-chunk.generated.js";
import {
  createHubSpotFullApiEventAttendeesGeneratedClient,
  HubSpotFullApiEventAttendeesGeneratedFunctionNames,
  type HubSpotFullApiEventAttendeesGeneratedClient,
  type HubSpotFullApiEventAttendeesOperationPathParamMap,
  type HubSpotFullApiEventAttendeesOperationRequestMap,
} from "./full-api.generated/client/event-attendees-chunk.generated.js";
import {
  createHubSpotFullApiEventStatusGeneratedClient,
  HubSpotFullApiEventStatusGeneratedFunctionNames,
  type HubSpotFullApiEventStatusGeneratedClient,
  type HubSpotFullApiEventStatusOperationPathParamMap,
  type HubSpotFullApiEventStatusOperationRequestMap,
} from "./full-api.generated/client/event-status-chunk.generated.js";
import {
  createHubSpotFullApiExchangeRatesGeneratedClient,
  HubSpotFullApiExchangeRatesGeneratedFunctionNames,
  type HubSpotFullApiExchangeRatesGeneratedClient,
  type HubSpotFullApiExchangeRatesOperationPathParamMap,
  type HubSpotFullApiExchangeRatesOperationRequestMap,
} from "./full-api.generated/client/exchange-rates-chunk.generated.js";
import {
  createHubSpotFullApiFilesGeneratedClient,
  HubSpotFullApiFilesGeneratedFunctionNames,
  type HubSpotFullApiFilesGeneratedClient,
  type HubSpotFullApiFilesOperationPathParamMap,
  type HubSpotFullApiFilesOperationRequestMap,
} from "./full-api.generated/client/files-chunk.generated.js";
import {
  createHubSpotFullApiFoldersGeneratedClient,
  HubSpotFullApiFoldersGeneratedFunctionNames,
  type HubSpotFullApiFoldersGeneratedClient,
  type HubSpotFullApiFoldersOperationPathParamMap,
  type HubSpotFullApiFoldersOperationRequestMap,
} from "./full-api.generated/client/folders-chunk.generated.js";
import {
  createHubSpotFullApiFunctionsGeneratedClient,
  HubSpotFullApiFunctionsGeneratedFunctionNames,
  type HubSpotFullApiFunctionsGeneratedClient,
  type HubSpotFullApiFunctionsOperationPathParamMap,
  type HubSpotFullApiFunctionsOperationRequestMap,
} from "./full-api.generated/client/functions-chunk.generated.js";
import {
  createHubSpotFullApiIdentifiersGeneratedClient,
  HubSpotFullApiIdentifiersGeneratedFunctionNames,
  type HubSpotFullApiIdentifiersGeneratedClient,
  type HubSpotFullApiIdentifiersOperationPathParamMap,
  type HubSpotFullApiIdentifiersOperationRequestMap,
} from "./full-api.generated/client/identifiers-chunk.generated.js";
import {
  createHubSpotFullApiInboxesGeneratedClient,
  HubSpotFullApiInboxesGeneratedFunctionNames,
  type HubSpotFullApiInboxesGeneratedClient,
  type HubSpotFullApiInboxesOperationPathParamMap,
  type HubSpotFullApiInboxesOperationRequestMap,
} from "./full-api.generated/client/inboxes-chunk.generated.js";
import {
  createHubSpotFullApiLabelsGeneratedClient,
  HubSpotFullApiLabelsGeneratedFunctionNames,
  type HubSpotFullApiLabelsGeneratedClient,
  type HubSpotFullApiLabelsOperationPathParamMap,
  type HubSpotFullApiLabelsOperationRequestMap,
} from "./full-api.generated/client/labels-chunk.generated.js";
import {
  createHubSpotFullApiLandingPagesGeneratedClient,
  HubSpotFullApiLandingPagesGeneratedFunctionNames,
  type HubSpotFullApiLandingPagesGeneratedClient,
  type HubSpotFullApiLandingPagesOperationPathParamMap,
  type HubSpotFullApiLandingPagesOperationRequestMap,
} from "./full-api.generated/client/landing-pages-chunk.generated.js";
import {
  createHubSpotFullApiLimitsGeneratedClient,
  HubSpotFullApiLimitsGeneratedFunctionNames,
  type HubSpotFullApiLimitsGeneratedClient,
  type HubSpotFullApiLimitsOperationPathParamMap,
  type HubSpotFullApiLimitsOperationRequestMap,
} from "./full-api.generated/client/limits-chunk.generated.js";
import {
  createHubSpotFullApiListAssociationsGeneratedClient,
  HubSpotFullApiListAssociationsGeneratedFunctionNames,
  type HubSpotFullApiListAssociationsGeneratedClient,
  type HubSpotFullApiListAssociationsOperationPathParamMap,
  type HubSpotFullApiListAssociationsOperationRequestMap,
} from "./full-api.generated/client/list-associations-chunk.generated.js";
import {
  createHubSpotFullApiMessagesGeneratedClient,
  HubSpotFullApiMessagesGeneratedFunctionNames,
  type HubSpotFullApiMessagesGeneratedClient,
  type HubSpotFullApiMessagesOperationPathParamMap,
  type HubSpotFullApiMessagesOperationRequestMap,
} from "./full-api.generated/client/messages-chunk.generated.js";
import {
  createHubSpotFullApiMetricsGeneratedClient,
  HubSpotFullApiMetricsGeneratedFunctionNames,
  type HubSpotFullApiMetricsGeneratedClient,
  type HubSpotFullApiMetricsOperationPathParamMap,
  type HubSpotFullApiMetricsOperationRequestMap,
} from "./full-api.generated/client/metrics-chunk.generated.js";
import {
  createHubSpotFullApiMultiLanguageGeneratedClient,
  HubSpotFullApiMultiLanguageGeneratedFunctionNames,
  type HubSpotFullApiMultiLanguageGeneratedClient,
  type HubSpotFullApiMultiLanguageOperationPathParamMap,
  type HubSpotFullApiMultiLanguageOperationRequestMap,
} from "./full-api.generated/client/multi-language-chunk.generated.js";
import {
  createHubSpotFullApiParticipantStateGeneratedClient,
  HubSpotFullApiParticipantStateGeneratedFunctionNames,
  type HubSpotFullApiParticipantStateGeneratedClient,
  type HubSpotFullApiParticipantStateOperationPathParamMap,
  type HubSpotFullApiParticipantStateOperationRequestMap,
} from "./full-api.generated/client/participant-state-chunk.generated.js";
import {
  createHubSpotFullApiRevisionsGeneratedClient,
  HubSpotFullApiRevisionsGeneratedFunctionNames,
  type HubSpotFullApiRevisionsGeneratedClient,
  type HubSpotFullApiRevisionsOperationPathParamMap,
  type HubSpotFullApiRevisionsOperationRequestMap,
} from "./full-api.generated/client/revisions-chunk.generated.js";
import {
  createHubSpotFullApiRolesGeneratedClient,
  HubSpotFullApiRolesGeneratedFunctionNames,
  type HubSpotFullApiRolesGeneratedClient,
  type HubSpotFullApiRolesOperationPathParamMap,
  type HubSpotFullApiRolesOperationRequestMap,
} from "./full-api.generated/client/roles-chunk.generated.js";
import {
  createHubSpotFullApiRowsGeneratedClient,
  HubSpotFullApiRowsGeneratedFunctionNames,
  type HubSpotFullApiRowsGeneratedClient,
  type HubSpotFullApiRowsOperationPathParamMap,
  type HubSpotFullApiRowsOperationRequestMap,
} from "./full-api.generated/client/rows-chunk.generated.js";
import {
  createHubSpotFullApiSearchGeneratedClient,
  HubSpotFullApiSearchGeneratedFunctionNames,
  type HubSpotFullApiSearchGeneratedClient,
  type HubSpotFullApiSearchOperationPathParamMap,
  type HubSpotFullApiSearchOperationRequestMap,
} from "./full-api.generated/client/search-chunk.generated.js";
import {
  createHubSpotFullApiSendTransactionalEmailGeneratedClient,
  HubSpotFullApiSendTransactionalEmailGeneratedFunctionNames,
  type HubSpotFullApiSendTransactionalEmailGeneratedClient,
  type HubSpotFullApiSendTransactionalEmailOperationPathParamMap,
  type HubSpotFullApiSendTransactionalEmailOperationRequestMap,
} from "./full-api.generated/client/send-transactional-email-chunk.generated.js";
import {
  createHubSpotFullApiSettingsGeneratedClient,
  HubSpotFullApiSettingsGeneratedFunctionNames,
  type HubSpotFullApiSettingsGeneratedClient,
  type HubSpotFullApiSettingsOperationPathParamMap,
  type HubSpotFullApiSettingsOperationRequestMap,
} from "./full-api.generated/client/settings-chunk.generated.js";
import {
  createHubSpotFullApiSMTPTokensGeneratedClient,
  HubSpotFullApiSMTPTokensGeneratedFunctionNames,
  type HubSpotFullApiSMTPTokensGeneratedClient,
  type HubSpotFullApiSMTPTokensOperationPathParamMap,
  type HubSpotFullApiSMTPTokensOperationRequestMap,
} from "./full-api.generated/client/smtp-tokens-chunk.generated.js";
import {
  createHubSpotFullApiSpendGeneratedClient,
  HubSpotFullApiSpendGeneratedFunctionNames,
  type HubSpotFullApiSpendGeneratedClient,
  type HubSpotFullApiSpendOperationPathParamMap,
  type HubSpotFullApiSpendOperationRequestMap,
} from "./full-api.generated/client/spend-chunk.generated.js";
import {
  createHubSpotFullApiStatusGeneratedClient,
  HubSpotFullApiStatusGeneratedFunctionNames,
  type HubSpotFullApiStatusGeneratedClient,
  type HubSpotFullApiStatusOperationPathParamMap,
  type HubSpotFullApiStatusOperationRequestMap,
} from "./full-api.generated/client/status-chunk.generated.js";
import {
  createHubSpotFullApiSubscriberStateChangesGeneratedClient,
  HubSpotFullApiSubscriberStateChangesGeneratedFunctionNames,
  type HubSpotFullApiSubscriberStateChangesGeneratedClient,
  type HubSpotFullApiSubscriberStateChangesOperationPathParamMap,
  type HubSpotFullApiSubscriberStateChangesOperationRequestMap,
} from "./full-api.generated/client/subscriber-state-changes-chunk.generated.js";
import {
  createHubSpotFullApiTablesGeneratedClient,
  HubSpotFullApiTablesGeneratedFunctionNames,
  type HubSpotFullApiTablesGeneratedClient,
  type HubSpotFullApiTablesOperationPathParamMap,
  type HubSpotFullApiTablesOperationRequestMap,
} from "./full-api.generated/client/tables-chunk.generated.js";
import {
  createHubSpotFullApiTeamsGeneratedClient,
  HubSpotFullApiTeamsGeneratedFunctionNames,
  type HubSpotFullApiTeamsGeneratedClient,
  type HubSpotFullApiTeamsOperationPathParamMap,
  type HubSpotFullApiTeamsOperationRequestMap,
} from "./full-api.generated/client/teams-chunk.generated.js";
import {
  createHubSpotFullApiThreadsGeneratedClient,
  HubSpotFullApiThreadsGeneratedFunctionNames,
  type HubSpotFullApiThreadsGeneratedClient,
  type HubSpotFullApiThreadsOperationPathParamMap,
  type HubSpotFullApiThreadsOperationRequestMap,
} from "./full-api.generated/client/threads-chunk.generated.js";
import {
  createHubSpotFullApiUsersGeneratedClient,
  HubSpotFullApiUsersGeneratedFunctionNames,
  type HubSpotFullApiUsersGeneratedClient,
  type HubSpotFullApiUsersOperationPathParamMap,
  type HubSpotFullApiUsersOperationRequestMap,
} from "./full-api.generated/client/users-chunk.generated.js";
import {
  createHubSpotFullApiWebsitePagesGeneratedClient,
  HubSpotFullApiWebsitePagesGeneratedFunctionNames,
  type HubSpotFullApiWebsitePagesGeneratedClient,
  type HubSpotFullApiWebsitePagesOperationPathParamMap,
  type HubSpotFullApiWebsitePagesOperationRequestMap,
} from "./full-api.generated/client/website-pages-chunk.generated.js";

export type HubSpotFullApiPathParamValue = string | number;
export interface HubSpotFullApiOperationPathParamMap extends HubSpotFullApiABTestsOperationPathParamMap, HubSpotFullApiActorsOperationPathParamMap, HubSpotFullApiAdvancedOperationPathParamMap, HubSpotFullApiAssetsOperationPathParamMap, HubSpotFullApiBasic01OperationPathParamMap, HubSpotFullApiBasic02OperationPathParamMap, HubSpotFullApiBasic03OperationPathParamMap, HubSpotFullApiBasic04OperationPathParamMap, HubSpotFullApiBasic05OperationPathParamMap, HubSpotFullApiBasic06OperationPathParamMap, HubSpotFullApiBasic07OperationPathParamMap, HubSpotFullApiBatch01OperationPathParamMap, HubSpotFullApiBatch02OperationPathParamMap, HubSpotFullApiBatch03OperationPathParamMap, HubSpotFullApiBatch04OperationPathParamMap, HubSpotFullApiBudgetOperationPathParamMap, HubSpotFullApiCallbacksOperationPathParamMap, HubSpotFullApiCentralFXRatesOperationPathParamMap, HubSpotFullApiChannelAccountsOperationPathParamMap, HubSpotFullApiChannelsOperationPathParamMap, HubSpotFullApiDefinitionsOperationPathParamMap, HubSpotFullApiEmailsOperationPathParamMap, HubSpotFullApiEventAttendeesOperationPathParamMap, HubSpotFullApiEventStatusOperationPathParamMap, HubSpotFullApiExchangeRatesOperationPathParamMap, HubSpotFullApiFilesOperationPathParamMap, HubSpotFullApiFoldersOperationPathParamMap, HubSpotFullApiFunctionsOperationPathParamMap, HubSpotFullApiIdentifiersOperationPathParamMap, HubSpotFullApiInboxesOperationPathParamMap, HubSpotFullApiLabelsOperationPathParamMap, HubSpotFullApiLandingPagesOperationPathParamMap, HubSpotFullApiLimitsOperationPathParamMap, HubSpotFullApiListAssociationsOperationPathParamMap, HubSpotFullApiMessagesOperationPathParamMap, HubSpotFullApiMetricsOperationPathParamMap, HubSpotFullApiMultiLanguageOperationPathParamMap, HubSpotFullApiParticipantStateOperationPathParamMap, HubSpotFullApiRevisionsOperationPathParamMap, HubSpotFullApiRolesOperationPathParamMap, HubSpotFullApiRowsOperationPathParamMap, HubSpotFullApiSearchOperationPathParamMap, HubSpotFullApiSendTransactionalEmailOperationPathParamMap, HubSpotFullApiSettingsOperationPathParamMap, HubSpotFullApiSMTPTokensOperationPathParamMap, HubSpotFullApiSpendOperationPathParamMap, HubSpotFullApiStatusOperationPathParamMap, HubSpotFullApiSubscriberStateChangesOperationPathParamMap, HubSpotFullApiTablesOperationPathParamMap, HubSpotFullApiTeamsOperationPathParamMap, HubSpotFullApiThreadsOperationPathParamMap, HubSpotFullApiUsersOperationPathParamMap, HubSpotFullApiWebsitePagesOperationPathParamMap {}

export type HubSpotFullApiOperationKey = keyof HubSpotFullApiOperationPathParamMap & string;

export type HubSpotFullApiOperationQueryInput<OperationKey extends HubSpotFullApiOperationKey> =
  HubSpotFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: HubSpotFullApiOperationQueryMap[OperationKey] }
    : { query?: HubSpotFullApiOperationQueryMap[OperationKey] };

export type HubSpotFullApiOperationBodyInput<OperationKey extends HubSpotFullApiOperationKey> =
  [HubSpotFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : HubSpotFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: HubSpotFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: HubSpotFullApiOperationRequestBodyMap[OperationKey] };

export type HubSpotFullApiOperationInput<OperationKey extends HubSpotFullApiOperationKey> = Omit<HubSpotOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends HubSpotFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: HubSpotFullApiOperationPathParamMap[OperationKey] }
) & HubSpotFullApiOperationQueryInput<OperationKey> & HubSpotFullApiOperationBodyInput<OperationKey>;

export interface HubSpotFullApiOperationRequestMap extends HubSpotFullApiABTestsOperationRequestMap, HubSpotFullApiActorsOperationRequestMap, HubSpotFullApiAdvancedOperationRequestMap, HubSpotFullApiAssetsOperationRequestMap, HubSpotFullApiBasic01OperationRequestMap, HubSpotFullApiBasic02OperationRequestMap, HubSpotFullApiBasic03OperationRequestMap, HubSpotFullApiBasic04OperationRequestMap, HubSpotFullApiBasic05OperationRequestMap, HubSpotFullApiBasic06OperationRequestMap, HubSpotFullApiBasic07OperationRequestMap, HubSpotFullApiBatch01OperationRequestMap, HubSpotFullApiBatch02OperationRequestMap, HubSpotFullApiBatch03OperationRequestMap, HubSpotFullApiBatch04OperationRequestMap, HubSpotFullApiBudgetOperationRequestMap, HubSpotFullApiCallbacksOperationRequestMap, HubSpotFullApiCentralFXRatesOperationRequestMap, HubSpotFullApiChannelAccountsOperationRequestMap, HubSpotFullApiChannelsOperationRequestMap, HubSpotFullApiDefinitionsOperationRequestMap, HubSpotFullApiEmailsOperationRequestMap, HubSpotFullApiEventAttendeesOperationRequestMap, HubSpotFullApiEventStatusOperationRequestMap, HubSpotFullApiExchangeRatesOperationRequestMap, HubSpotFullApiFilesOperationRequestMap, HubSpotFullApiFoldersOperationRequestMap, HubSpotFullApiFunctionsOperationRequestMap, HubSpotFullApiIdentifiersOperationRequestMap, HubSpotFullApiInboxesOperationRequestMap, HubSpotFullApiLabelsOperationRequestMap, HubSpotFullApiLandingPagesOperationRequestMap, HubSpotFullApiLimitsOperationRequestMap, HubSpotFullApiListAssociationsOperationRequestMap, HubSpotFullApiMessagesOperationRequestMap, HubSpotFullApiMetricsOperationRequestMap, HubSpotFullApiMultiLanguageOperationRequestMap, HubSpotFullApiParticipantStateOperationRequestMap, HubSpotFullApiRevisionsOperationRequestMap, HubSpotFullApiRolesOperationRequestMap, HubSpotFullApiRowsOperationRequestMap, HubSpotFullApiSearchOperationRequestMap, HubSpotFullApiSendTransactionalEmailOperationRequestMap, HubSpotFullApiSettingsOperationRequestMap, HubSpotFullApiSMTPTokensOperationRequestMap, HubSpotFullApiSpendOperationRequestMap, HubSpotFullApiStatusOperationRequestMap, HubSpotFullApiSubscriberStateChangesOperationRequestMap, HubSpotFullApiTablesOperationRequestMap, HubSpotFullApiTeamsOperationRequestMap, HubSpotFullApiThreadsOperationRequestMap, HubSpotFullApiUsersOperationRequestMap, HubSpotFullApiWebsitePagesOperationRequestMap {}

export type HubSpotFullApiOperationArgs<OperationKey extends HubSpotFullApiOperationKey> = {} extends HubSpotFullApiOperationPathParamMap[OperationKey]
  ? [input?: HubSpotFullApiOperationRequestMap[OperationKey]]
  : [input: HubSpotFullApiOperationRequestMap[OperationKey]];

export type HubSpotGeneratedOperationCaller = <OperationKey extends HubSpotFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: HubSpotFullApiOperationArgs<OperationKey>
) => Promise<HubSpotFullApiOperationResponseMap[OperationKey]>;

export interface HubSpotFullApiGeneratedClient extends HubSpotFullApiABTestsGeneratedClient, HubSpotFullApiActorsGeneratedClient, HubSpotFullApiAdvancedGeneratedClient, HubSpotFullApiAssetsGeneratedClient, HubSpotFullApiBasic01GeneratedClient, HubSpotFullApiBasic02GeneratedClient, HubSpotFullApiBasic03GeneratedClient, HubSpotFullApiBasic04GeneratedClient, HubSpotFullApiBasic05GeneratedClient, HubSpotFullApiBasic06GeneratedClient, HubSpotFullApiBasic07GeneratedClient, HubSpotFullApiBatch01GeneratedClient, HubSpotFullApiBatch02GeneratedClient, HubSpotFullApiBatch03GeneratedClient, HubSpotFullApiBatch04GeneratedClient, HubSpotFullApiBudgetGeneratedClient, HubSpotFullApiCallbacksGeneratedClient, HubSpotFullApiCentralFXRatesGeneratedClient, HubSpotFullApiChannelAccountsGeneratedClient, HubSpotFullApiChannelsGeneratedClient, HubSpotFullApiDefinitionsGeneratedClient, HubSpotFullApiEmailsGeneratedClient, HubSpotFullApiEventAttendeesGeneratedClient, HubSpotFullApiEventStatusGeneratedClient, HubSpotFullApiExchangeRatesGeneratedClient, HubSpotFullApiFilesGeneratedClient, HubSpotFullApiFoldersGeneratedClient, HubSpotFullApiFunctionsGeneratedClient, HubSpotFullApiIdentifiersGeneratedClient, HubSpotFullApiInboxesGeneratedClient, HubSpotFullApiLabelsGeneratedClient, HubSpotFullApiLandingPagesGeneratedClient, HubSpotFullApiLimitsGeneratedClient, HubSpotFullApiListAssociationsGeneratedClient, HubSpotFullApiMessagesGeneratedClient, HubSpotFullApiMetricsGeneratedClient, HubSpotFullApiMultiLanguageGeneratedClient, HubSpotFullApiParticipantStateGeneratedClient, HubSpotFullApiRevisionsGeneratedClient, HubSpotFullApiRolesGeneratedClient, HubSpotFullApiRowsGeneratedClient, HubSpotFullApiSearchGeneratedClient, HubSpotFullApiSendTransactionalEmailGeneratedClient, HubSpotFullApiSettingsGeneratedClient, HubSpotFullApiSMTPTokensGeneratedClient, HubSpotFullApiSpendGeneratedClient, HubSpotFullApiStatusGeneratedClient, HubSpotFullApiSubscriberStateChangesGeneratedClient, HubSpotFullApiTablesGeneratedClient, HubSpotFullApiTeamsGeneratedClient, HubSpotFullApiThreadsGeneratedClient, HubSpotFullApiUsersGeneratedClient, HubSpotFullApiWebsitePagesGeneratedClient {}

export const HUBSPOT_FULL_API_GENERATED_FUNCTION_COUNT = 1182 as const;
export const HUBSPOT_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...HubSpotFullApiABTestsGeneratedFunctionNames,
  ...HubSpotFullApiActorsGeneratedFunctionNames,
  ...HubSpotFullApiAdvancedGeneratedFunctionNames,
  ...HubSpotFullApiAssetsGeneratedFunctionNames,
  ...HubSpotFullApiBasic01GeneratedFunctionNames,
  ...HubSpotFullApiBasic02GeneratedFunctionNames,
  ...HubSpotFullApiBasic03GeneratedFunctionNames,
  ...HubSpotFullApiBasic04GeneratedFunctionNames,
  ...HubSpotFullApiBasic05GeneratedFunctionNames,
  ...HubSpotFullApiBasic06GeneratedFunctionNames,
  ...HubSpotFullApiBasic07GeneratedFunctionNames,
  ...HubSpotFullApiBatch01GeneratedFunctionNames,
  ...HubSpotFullApiBatch02GeneratedFunctionNames,
  ...HubSpotFullApiBatch03GeneratedFunctionNames,
  ...HubSpotFullApiBatch04GeneratedFunctionNames,
  ...HubSpotFullApiBudgetGeneratedFunctionNames,
  ...HubSpotFullApiCallbacksGeneratedFunctionNames,
  ...HubSpotFullApiCentralFXRatesGeneratedFunctionNames,
  ...HubSpotFullApiChannelAccountsGeneratedFunctionNames,
  ...HubSpotFullApiChannelsGeneratedFunctionNames,
  ...HubSpotFullApiDefinitionsGeneratedFunctionNames,
  ...HubSpotFullApiEmailsGeneratedFunctionNames,
  ...HubSpotFullApiEventAttendeesGeneratedFunctionNames,
  ...HubSpotFullApiEventStatusGeneratedFunctionNames,
  ...HubSpotFullApiExchangeRatesGeneratedFunctionNames,
  ...HubSpotFullApiFilesGeneratedFunctionNames,
  ...HubSpotFullApiFoldersGeneratedFunctionNames,
  ...HubSpotFullApiFunctionsGeneratedFunctionNames,
  ...HubSpotFullApiIdentifiersGeneratedFunctionNames,
  ...HubSpotFullApiInboxesGeneratedFunctionNames,
  ...HubSpotFullApiLabelsGeneratedFunctionNames,
  ...HubSpotFullApiLandingPagesGeneratedFunctionNames,
  ...HubSpotFullApiLimitsGeneratedFunctionNames,
  ...HubSpotFullApiListAssociationsGeneratedFunctionNames,
  ...HubSpotFullApiMessagesGeneratedFunctionNames,
  ...HubSpotFullApiMetricsGeneratedFunctionNames,
  ...HubSpotFullApiMultiLanguageGeneratedFunctionNames,
  ...HubSpotFullApiParticipantStateGeneratedFunctionNames,
  ...HubSpotFullApiRevisionsGeneratedFunctionNames,
  ...HubSpotFullApiRolesGeneratedFunctionNames,
  ...HubSpotFullApiRowsGeneratedFunctionNames,
  ...HubSpotFullApiSearchGeneratedFunctionNames,
  ...HubSpotFullApiSendTransactionalEmailGeneratedFunctionNames,
  ...HubSpotFullApiSettingsGeneratedFunctionNames,
  ...HubSpotFullApiSMTPTokensGeneratedFunctionNames,
  ...HubSpotFullApiSpendGeneratedFunctionNames,
  ...HubSpotFullApiStatusGeneratedFunctionNames,
  ...HubSpotFullApiSubscriberStateChangesGeneratedFunctionNames,
  ...HubSpotFullApiTablesGeneratedFunctionNames,
  ...HubSpotFullApiTeamsGeneratedFunctionNames,
  ...HubSpotFullApiThreadsGeneratedFunctionNames,
  ...HubSpotFullApiUsersGeneratedFunctionNames,
  ...HubSpotFullApiWebsitePagesGeneratedFunctionNames,
] as const satisfies readonly (keyof HubSpotFullApiGeneratedClient)[];

export function createHubSpotFullApiGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiGeneratedClient {
  return Object.assign(
    {},
    createHubSpotFullApiABTestsGeneratedClient(callOperation),
    createHubSpotFullApiActorsGeneratedClient(callOperation),
    createHubSpotFullApiAdvancedGeneratedClient(callOperation),
    createHubSpotFullApiAssetsGeneratedClient(callOperation),
    createHubSpotFullApiBasic01GeneratedClient(callOperation),
    createHubSpotFullApiBasic02GeneratedClient(callOperation),
    createHubSpotFullApiBasic03GeneratedClient(callOperation),
    createHubSpotFullApiBasic04GeneratedClient(callOperation),
    createHubSpotFullApiBasic05GeneratedClient(callOperation),
    createHubSpotFullApiBasic06GeneratedClient(callOperation),
    createHubSpotFullApiBasic07GeneratedClient(callOperation),
    createHubSpotFullApiBatch01GeneratedClient(callOperation),
    createHubSpotFullApiBatch02GeneratedClient(callOperation),
    createHubSpotFullApiBatch03GeneratedClient(callOperation),
    createHubSpotFullApiBatch04GeneratedClient(callOperation),
    createHubSpotFullApiBudgetGeneratedClient(callOperation),
    createHubSpotFullApiCallbacksGeneratedClient(callOperation),
    createHubSpotFullApiCentralFXRatesGeneratedClient(callOperation),
    createHubSpotFullApiChannelAccountsGeneratedClient(callOperation),
    createHubSpotFullApiChannelsGeneratedClient(callOperation),
    createHubSpotFullApiDefinitionsGeneratedClient(callOperation),
    createHubSpotFullApiEmailsGeneratedClient(callOperation),
    createHubSpotFullApiEventAttendeesGeneratedClient(callOperation),
    createHubSpotFullApiEventStatusGeneratedClient(callOperation),
    createHubSpotFullApiExchangeRatesGeneratedClient(callOperation),
    createHubSpotFullApiFilesGeneratedClient(callOperation),
    createHubSpotFullApiFoldersGeneratedClient(callOperation),
    createHubSpotFullApiFunctionsGeneratedClient(callOperation),
    createHubSpotFullApiIdentifiersGeneratedClient(callOperation),
    createHubSpotFullApiInboxesGeneratedClient(callOperation),
    createHubSpotFullApiLabelsGeneratedClient(callOperation),
    createHubSpotFullApiLandingPagesGeneratedClient(callOperation),
    createHubSpotFullApiLimitsGeneratedClient(callOperation),
    createHubSpotFullApiListAssociationsGeneratedClient(callOperation),
    createHubSpotFullApiMessagesGeneratedClient(callOperation),
    createHubSpotFullApiMetricsGeneratedClient(callOperation),
    createHubSpotFullApiMultiLanguageGeneratedClient(callOperation),
    createHubSpotFullApiParticipantStateGeneratedClient(callOperation),
    createHubSpotFullApiRevisionsGeneratedClient(callOperation),
    createHubSpotFullApiRolesGeneratedClient(callOperation),
    createHubSpotFullApiRowsGeneratedClient(callOperation),
    createHubSpotFullApiSearchGeneratedClient(callOperation),
    createHubSpotFullApiSendTransactionalEmailGeneratedClient(callOperation),
    createHubSpotFullApiSettingsGeneratedClient(callOperation),
    createHubSpotFullApiSMTPTokensGeneratedClient(callOperation),
    createHubSpotFullApiSpendGeneratedClient(callOperation),
    createHubSpotFullApiStatusGeneratedClient(callOperation),
    createHubSpotFullApiSubscriberStateChangesGeneratedClient(callOperation),
    createHubSpotFullApiTablesGeneratedClient(callOperation),
    createHubSpotFullApiTeamsGeneratedClient(callOperation),
    createHubSpotFullApiThreadsGeneratedClient(callOperation),
    createHubSpotFullApiUsersGeneratedClient(callOperation),
    createHubSpotFullApiWebsitePagesGeneratedClient(callOperation),
  ) as HubSpotFullApiGeneratedClient;
}
