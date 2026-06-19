// Generated from official @cognidesk/integrations API documentation.
// Do not edit by hand; run scripts/generate-ticketing-provider-coverage.mjs after checking upstream docs.

import type { GorgiasOperationRequestInput } from "./index.js";
import type {
  GorgiasFullApiOperationQueryMap,
  GorgiasFullApiOperationQueryRequiredMap,
  GorgiasFullApiOperationRequestBodyMap,
  GorgiasFullApiOperationRequestBodyRequiredMap,
  GorgiasFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createGorgiasFullApiAccountGeneratedClient,
  GorgiasFullApiAccountGeneratedFunctionNames,
  type GorgiasFullApiAccountGeneratedClient,
  type GorgiasFullApiAccountOperationPathParamMap,
  type GorgiasFullApiAccountOperationRequestMap,
} from "./full-api.generated/client/account-chunk.generated.js";
import {
  createGorgiasFullApiCustomFieldsGeneratedClient,
  GorgiasFullApiCustomFieldsGeneratedFunctionNames,
  type GorgiasFullApiCustomFieldsGeneratedClient,
  type GorgiasFullApiCustomFieldsOperationPathParamMap,
  type GorgiasFullApiCustomFieldsOperationRequestMap,
} from "./full-api.generated/client/custom-fields-chunk.generated.js";
import {
  createGorgiasFullApiCustomersGeneratedClient,
  GorgiasFullApiCustomersGeneratedFunctionNames,
  type GorgiasFullApiCustomersGeneratedClient,
  type GorgiasFullApiCustomersOperationPathParamMap,
  type GorgiasFullApiCustomersOperationRequestMap,
} from "./full-api.generated/client/customers-chunk.generated.js";
import {
  createGorgiasFullApiEventsGeneratedClient,
  GorgiasFullApiEventsGeneratedFunctionNames,
  type GorgiasFullApiEventsGeneratedClient,
  type GorgiasFullApiEventsOperationPathParamMap,
  type GorgiasFullApiEventsOperationRequestMap,
} from "./full-api.generated/client/events-chunk.generated.js";
import {
  createGorgiasFullApiFilesGeneratedClient,
  GorgiasFullApiFilesGeneratedFunctionNames,
  type GorgiasFullApiFilesGeneratedClient,
  type GorgiasFullApiFilesOperationPathParamMap,
  type GorgiasFullApiFilesOperationRequestMap,
} from "./full-api.generated/client/files-chunk.generated.js";
import {
  createGorgiasFullApiIntegrationsGeneratedClient,
  GorgiasFullApiIntegrationsGeneratedFunctionNames,
  type GorgiasFullApiIntegrationsGeneratedClient,
  type GorgiasFullApiIntegrationsOperationPathParamMap,
  type GorgiasFullApiIntegrationsOperationRequestMap,
} from "./full-api.generated/client/integrations-chunk.generated.js";
import {
  createGorgiasFullApiJobsGeneratedClient,
  GorgiasFullApiJobsGeneratedFunctionNames,
  type GorgiasFullApiJobsGeneratedClient,
  type GorgiasFullApiJobsOperationPathParamMap,
  type GorgiasFullApiJobsOperationRequestMap,
} from "./full-api.generated/client/jobs-chunk.generated.js";
import {
  createGorgiasFullApiMacrosGeneratedClient,
  GorgiasFullApiMacrosGeneratedFunctionNames,
  type GorgiasFullApiMacrosGeneratedClient,
  type GorgiasFullApiMacrosOperationPathParamMap,
  type GorgiasFullApiMacrosOperationRequestMap,
} from "./full-api.generated/client/macros-chunk.generated.js";
import {
  createGorgiasFullApiMetricCardsGeneratedClient,
  GorgiasFullApiMetricCardsGeneratedFunctionNames,
  type GorgiasFullApiMetricCardsGeneratedClient,
  type GorgiasFullApiMetricCardsOperationPathParamMap,
  type GorgiasFullApiMetricCardsOperationRequestMap,
} from "./full-api.generated/client/metric-cards-chunk.generated.js";
import {
  createGorgiasFullApiReportingStatisticsGeneratedClient,
  GorgiasFullApiReportingStatisticsGeneratedFunctionNames,
  type GorgiasFullApiReportingStatisticsGeneratedClient,
  type GorgiasFullApiReportingStatisticsOperationPathParamMap,
  type GorgiasFullApiReportingStatisticsOperationRequestMap,
} from "./full-api.generated/client/reporting-statistics-chunk.generated.js";
import {
  createGorgiasFullApiRulesGeneratedClient,
  GorgiasFullApiRulesGeneratedFunctionNames,
  type GorgiasFullApiRulesGeneratedClient,
  type GorgiasFullApiRulesOperationPathParamMap,
  type GorgiasFullApiRulesOperationRequestMap,
} from "./full-api.generated/client/rules-chunk.generated.js";
import {
  createGorgiasFullApiSatisfactionSurveysGeneratedClient,
  GorgiasFullApiSatisfactionSurveysGeneratedFunctionNames,
  type GorgiasFullApiSatisfactionSurveysGeneratedClient,
  type GorgiasFullApiSatisfactionSurveysOperationPathParamMap,
  type GorgiasFullApiSatisfactionSurveysOperationRequestMap,
} from "./full-api.generated/client/satisfaction-surveys-chunk.generated.js";
import {
  createGorgiasFullApiSearchGeneratedClient,
  GorgiasFullApiSearchGeneratedFunctionNames,
  type GorgiasFullApiSearchGeneratedClient,
  type GorgiasFullApiSearchOperationPathParamMap,
  type GorgiasFullApiSearchOperationRequestMap,
} from "./full-api.generated/client/search-chunk.generated.js";
import {
  createGorgiasFullApiStatisticsGeneratedClient,
  GorgiasFullApiStatisticsGeneratedFunctionNames,
  type GorgiasFullApiStatisticsGeneratedClient,
  type GorgiasFullApiStatisticsOperationPathParamMap,
  type GorgiasFullApiStatisticsOperationRequestMap,
} from "./full-api.generated/client/statistics-chunk.generated.js";
import {
  createGorgiasFullApiTagsGeneratedClient,
  GorgiasFullApiTagsGeneratedFunctionNames,
  type GorgiasFullApiTagsGeneratedClient,
  type GorgiasFullApiTagsOperationPathParamMap,
  type GorgiasFullApiTagsOperationRequestMap,
} from "./full-api.generated/client/tags-chunk.generated.js";
import {
  createGorgiasFullApiTeamsGeneratedClient,
  GorgiasFullApiTeamsGeneratedFunctionNames,
  type GorgiasFullApiTeamsGeneratedClient,
  type GorgiasFullApiTeamsOperationPathParamMap,
  type GorgiasFullApiTeamsOperationRequestMap,
} from "./full-api.generated/client/teams-chunk.generated.js";
import {
  createGorgiasFullApiTicketMessagesGeneratedClient,
  GorgiasFullApiTicketMessagesGeneratedFunctionNames,
  type GorgiasFullApiTicketMessagesGeneratedClient,
  type GorgiasFullApiTicketMessagesOperationPathParamMap,
  type GorgiasFullApiTicketMessagesOperationRequestMap,
} from "./full-api.generated/client/ticket-messages-chunk.generated.js";
import {
  createGorgiasFullApiTicketsGeneratedClient,
  GorgiasFullApiTicketsGeneratedFunctionNames,
  type GorgiasFullApiTicketsGeneratedClient,
  type GorgiasFullApiTicketsOperationPathParamMap,
  type GorgiasFullApiTicketsOperationRequestMap,
} from "./full-api.generated/client/tickets-chunk.generated.js";
import {
  createGorgiasFullApiUsersGeneratedClient,
  GorgiasFullApiUsersGeneratedFunctionNames,
  type GorgiasFullApiUsersGeneratedClient,
  type GorgiasFullApiUsersOperationPathParamMap,
  type GorgiasFullApiUsersOperationRequestMap,
} from "./full-api.generated/client/users-chunk.generated.js";
import {
  createGorgiasFullApiViewsGeneratedClient,
  GorgiasFullApiViewsGeneratedFunctionNames,
  type GorgiasFullApiViewsGeneratedClient,
  type GorgiasFullApiViewsOperationPathParamMap,
  type GorgiasFullApiViewsOperationRequestMap,
} from "./full-api.generated/client/views-chunk.generated.js";
import {
  createGorgiasFullApiVoiceCallEventsGeneratedClient,
  GorgiasFullApiVoiceCallEventsGeneratedFunctionNames,
  type GorgiasFullApiVoiceCallEventsGeneratedClient,
  type GorgiasFullApiVoiceCallEventsOperationPathParamMap,
  type GorgiasFullApiVoiceCallEventsOperationRequestMap,
} from "./full-api.generated/client/voice-call-events-chunk.generated.js";
import {
  createGorgiasFullApiVoiceCallRecordingsGeneratedClient,
  GorgiasFullApiVoiceCallRecordingsGeneratedFunctionNames,
  type GorgiasFullApiVoiceCallRecordingsGeneratedClient,
  type GorgiasFullApiVoiceCallRecordingsOperationPathParamMap,
  type GorgiasFullApiVoiceCallRecordingsOperationRequestMap,
} from "./full-api.generated/client/voice-call-recordings-chunk.generated.js";
import {
  createGorgiasFullApiVoiceCallsGeneratedClient,
  GorgiasFullApiVoiceCallsGeneratedFunctionNames,
  type GorgiasFullApiVoiceCallsGeneratedClient,
  type GorgiasFullApiVoiceCallsOperationPathParamMap,
  type GorgiasFullApiVoiceCallsOperationRequestMap,
} from "./full-api.generated/client/voice-calls-chunk.generated.js";
import {
  createGorgiasFullApiWidgetsGeneratedClient,
  GorgiasFullApiWidgetsGeneratedFunctionNames,
  type GorgiasFullApiWidgetsGeneratedClient,
  type GorgiasFullApiWidgetsOperationPathParamMap,
  type GorgiasFullApiWidgetsOperationRequestMap,
} from "./full-api.generated/client/widgets-chunk.generated.js";

export type GorgiasFullApiPathParamValue = string | number;
export interface GorgiasFullApiOperationPathParamMap extends GorgiasFullApiAccountOperationPathParamMap, GorgiasFullApiCustomFieldsOperationPathParamMap, GorgiasFullApiCustomersOperationPathParamMap, GorgiasFullApiEventsOperationPathParamMap, GorgiasFullApiFilesOperationPathParamMap, GorgiasFullApiIntegrationsOperationPathParamMap, GorgiasFullApiJobsOperationPathParamMap, GorgiasFullApiMacrosOperationPathParamMap, GorgiasFullApiMetricCardsOperationPathParamMap, GorgiasFullApiReportingStatisticsOperationPathParamMap, GorgiasFullApiRulesOperationPathParamMap, GorgiasFullApiSatisfactionSurveysOperationPathParamMap, GorgiasFullApiSearchOperationPathParamMap, GorgiasFullApiStatisticsOperationPathParamMap, GorgiasFullApiTagsOperationPathParamMap, GorgiasFullApiTeamsOperationPathParamMap, GorgiasFullApiTicketMessagesOperationPathParamMap, GorgiasFullApiTicketsOperationPathParamMap, GorgiasFullApiUsersOperationPathParamMap, GorgiasFullApiViewsOperationPathParamMap, GorgiasFullApiVoiceCallEventsOperationPathParamMap, GorgiasFullApiVoiceCallRecordingsOperationPathParamMap, GorgiasFullApiVoiceCallsOperationPathParamMap, GorgiasFullApiWidgetsOperationPathParamMap {}

export type GorgiasFullApiOperationKey = keyof GorgiasFullApiOperationPathParamMap & string;

export type GorgiasFullApiOperationQueryInput<OperationKey extends GorgiasFullApiOperationKey> =
  GorgiasFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: GorgiasFullApiOperationQueryMap[OperationKey] }
    : { query?: GorgiasFullApiOperationQueryMap[OperationKey] };

export type GorgiasFullApiOperationBodyInput<OperationKey extends GorgiasFullApiOperationKey> =
  [GorgiasFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : GorgiasFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: GorgiasFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: GorgiasFullApiOperationRequestBodyMap[OperationKey] };

export type GorgiasFullApiOperationInput<OperationKey extends GorgiasFullApiOperationKey> = Omit<GorgiasOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends GorgiasFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: GorgiasFullApiOperationPathParamMap[OperationKey] }
) & GorgiasFullApiOperationQueryInput<OperationKey> & GorgiasFullApiOperationBodyInput<OperationKey>;

export interface GorgiasFullApiOperationRequestMap extends GorgiasFullApiAccountOperationRequestMap, GorgiasFullApiCustomFieldsOperationRequestMap, GorgiasFullApiCustomersOperationRequestMap, GorgiasFullApiEventsOperationRequestMap, GorgiasFullApiFilesOperationRequestMap, GorgiasFullApiIntegrationsOperationRequestMap, GorgiasFullApiJobsOperationRequestMap, GorgiasFullApiMacrosOperationRequestMap, GorgiasFullApiMetricCardsOperationRequestMap, GorgiasFullApiReportingStatisticsOperationRequestMap, GorgiasFullApiRulesOperationRequestMap, GorgiasFullApiSatisfactionSurveysOperationRequestMap, GorgiasFullApiSearchOperationRequestMap, GorgiasFullApiStatisticsOperationRequestMap, GorgiasFullApiTagsOperationRequestMap, GorgiasFullApiTeamsOperationRequestMap, GorgiasFullApiTicketMessagesOperationRequestMap, GorgiasFullApiTicketsOperationRequestMap, GorgiasFullApiUsersOperationRequestMap, GorgiasFullApiViewsOperationRequestMap, GorgiasFullApiVoiceCallEventsOperationRequestMap, GorgiasFullApiVoiceCallRecordingsOperationRequestMap, GorgiasFullApiVoiceCallsOperationRequestMap, GorgiasFullApiWidgetsOperationRequestMap {}

export type GorgiasFullApiOperationArgs<OperationKey extends GorgiasFullApiOperationKey> = {} extends GorgiasFullApiOperationPathParamMap[OperationKey]
  ? [input?: GorgiasFullApiOperationRequestMap[OperationKey]]
  : [input: GorgiasFullApiOperationRequestMap[OperationKey]];

export type GorgiasGeneratedOperationCaller = <OperationKey extends GorgiasFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: GorgiasFullApiOperationArgs<OperationKey>
) => Promise<GorgiasFullApiOperationResponseMap[OperationKey]>;

export interface GorgiasFullApiGeneratedClient extends GorgiasFullApiAccountGeneratedClient, GorgiasFullApiCustomFieldsGeneratedClient, GorgiasFullApiCustomersGeneratedClient, GorgiasFullApiEventsGeneratedClient, GorgiasFullApiFilesGeneratedClient, GorgiasFullApiIntegrationsGeneratedClient, GorgiasFullApiJobsGeneratedClient, GorgiasFullApiMacrosGeneratedClient, GorgiasFullApiMetricCardsGeneratedClient, GorgiasFullApiReportingStatisticsGeneratedClient, GorgiasFullApiRulesGeneratedClient, GorgiasFullApiSatisfactionSurveysGeneratedClient, GorgiasFullApiSearchGeneratedClient, GorgiasFullApiStatisticsGeneratedClient, GorgiasFullApiTagsGeneratedClient, GorgiasFullApiTeamsGeneratedClient, GorgiasFullApiTicketMessagesGeneratedClient, GorgiasFullApiTicketsGeneratedClient, GorgiasFullApiUsersGeneratedClient, GorgiasFullApiViewsGeneratedClient, GorgiasFullApiVoiceCallEventsGeneratedClient, GorgiasFullApiVoiceCallRecordingsGeneratedClient, GorgiasFullApiVoiceCallsGeneratedClient, GorgiasFullApiWidgetsGeneratedClient {}

export const GORGIAS_FULL_API_GENERATED_FUNCTION_COUNT = 113 as const;
export const GORGIAS_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...GorgiasFullApiAccountGeneratedFunctionNames,
  ...GorgiasFullApiCustomFieldsGeneratedFunctionNames,
  ...GorgiasFullApiCustomersGeneratedFunctionNames,
  ...GorgiasFullApiEventsGeneratedFunctionNames,
  ...GorgiasFullApiFilesGeneratedFunctionNames,
  ...GorgiasFullApiIntegrationsGeneratedFunctionNames,
  ...GorgiasFullApiJobsGeneratedFunctionNames,
  ...GorgiasFullApiMacrosGeneratedFunctionNames,
  ...GorgiasFullApiMetricCardsGeneratedFunctionNames,
  ...GorgiasFullApiReportingStatisticsGeneratedFunctionNames,
  ...GorgiasFullApiRulesGeneratedFunctionNames,
  ...GorgiasFullApiSatisfactionSurveysGeneratedFunctionNames,
  ...GorgiasFullApiSearchGeneratedFunctionNames,
  ...GorgiasFullApiStatisticsGeneratedFunctionNames,
  ...GorgiasFullApiTagsGeneratedFunctionNames,
  ...GorgiasFullApiTeamsGeneratedFunctionNames,
  ...GorgiasFullApiTicketMessagesGeneratedFunctionNames,
  ...GorgiasFullApiTicketsGeneratedFunctionNames,
  ...GorgiasFullApiUsersGeneratedFunctionNames,
  ...GorgiasFullApiViewsGeneratedFunctionNames,
  ...GorgiasFullApiVoiceCallEventsGeneratedFunctionNames,
  ...GorgiasFullApiVoiceCallRecordingsGeneratedFunctionNames,
  ...GorgiasFullApiVoiceCallsGeneratedFunctionNames,
  ...GorgiasFullApiWidgetsGeneratedFunctionNames,
] as const satisfies readonly (keyof GorgiasFullApiGeneratedClient)[];

export function createGorgiasFullApiGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiGeneratedClient {
  return Object.assign(
    {},
    createGorgiasFullApiAccountGeneratedClient(callOperation),
    createGorgiasFullApiCustomFieldsGeneratedClient(callOperation),
    createGorgiasFullApiCustomersGeneratedClient(callOperation),
    createGorgiasFullApiEventsGeneratedClient(callOperation),
    createGorgiasFullApiFilesGeneratedClient(callOperation),
    createGorgiasFullApiIntegrationsGeneratedClient(callOperation),
    createGorgiasFullApiJobsGeneratedClient(callOperation),
    createGorgiasFullApiMacrosGeneratedClient(callOperation),
    createGorgiasFullApiMetricCardsGeneratedClient(callOperation),
    createGorgiasFullApiReportingStatisticsGeneratedClient(callOperation),
    createGorgiasFullApiRulesGeneratedClient(callOperation),
    createGorgiasFullApiSatisfactionSurveysGeneratedClient(callOperation),
    createGorgiasFullApiSearchGeneratedClient(callOperation),
    createGorgiasFullApiStatisticsGeneratedClient(callOperation),
    createGorgiasFullApiTagsGeneratedClient(callOperation),
    createGorgiasFullApiTeamsGeneratedClient(callOperation),
    createGorgiasFullApiTicketMessagesGeneratedClient(callOperation),
    createGorgiasFullApiTicketsGeneratedClient(callOperation),
    createGorgiasFullApiUsersGeneratedClient(callOperation),
    createGorgiasFullApiViewsGeneratedClient(callOperation),
    createGorgiasFullApiVoiceCallEventsGeneratedClient(callOperation),
    createGorgiasFullApiVoiceCallRecordingsGeneratedClient(callOperation),
    createGorgiasFullApiVoiceCallsGeneratedClient(callOperation),
    createGorgiasFullApiWidgetsGeneratedClient(callOperation),
  ) as GorgiasFullApiGeneratedClient;
}
