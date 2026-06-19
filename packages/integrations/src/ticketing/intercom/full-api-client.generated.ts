// Generated from official @cognidesk/integrations API documentation.
// Do not edit by hand; run scripts/generate-ticketing-provider-coverage.mjs after checking upstream docs.

import type { IntercomOperationRequestInput } from "./index.js";
import type {
  IntercomFullApiOperationQueryMap,
  IntercomFullApiOperationQueryRequiredMap,
  IntercomFullApiOperationRequestBodyMap,
  IntercomFullApiOperationRequestBodyRequiredMap,
  IntercomFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createIntercomFullApiAdminsGeneratedClient,
  IntercomFullApiAdminsGeneratedFunctionNames,
  type IntercomFullApiAdminsGeneratedClient,
  type IntercomFullApiAdminsOperationPathParamMap,
  type IntercomFullApiAdminsOperationRequestMap,
} from "./full-api.generated/client/admins-chunk.generated.js";
import {
  createIntercomFullApiAIContentGeneratedClient,
  IntercomFullApiAIContentGeneratedFunctionNames,
  type IntercomFullApiAIContentGeneratedClient,
  type IntercomFullApiAIContentOperationPathParamMap,
  type IntercomFullApiAIContentOperationRequestMap,
} from "./full-api.generated/client/ai-content-chunk.generated.js";
import {
  createIntercomFullApiArticlesGeneratedClient,
  IntercomFullApiArticlesGeneratedFunctionNames,
  type IntercomFullApiArticlesGeneratedClient,
  type IntercomFullApiArticlesOperationPathParamMap,
  type IntercomFullApiArticlesOperationRequestMap,
} from "./full-api.generated/client/articles-chunk.generated.js";
import {
  createIntercomFullApiAwayStatusReasonsGeneratedClient,
  IntercomFullApiAwayStatusReasonsGeneratedFunctionNames,
  type IntercomFullApiAwayStatusReasonsGeneratedClient,
  type IntercomFullApiAwayStatusReasonsOperationPathParamMap,
  type IntercomFullApiAwayStatusReasonsOperationRequestMap,
} from "./full-api.generated/client/away-status-reasons-chunk.generated.js";
import {
  createIntercomFullApiBrandsGeneratedClient,
  IntercomFullApiBrandsGeneratedFunctionNames,
  type IntercomFullApiBrandsGeneratedClient,
  type IntercomFullApiBrandsOperationPathParamMap,
  type IntercomFullApiBrandsOperationRequestMap,
} from "./full-api.generated/client/brands-chunk.generated.js";
import {
  createIntercomFullApiCallsGeneratedClient,
  IntercomFullApiCallsGeneratedFunctionNames,
  type IntercomFullApiCallsGeneratedClient,
  type IntercomFullApiCallsOperationPathParamMap,
  type IntercomFullApiCallsOperationRequestMap,
} from "./full-api.generated/client/calls-chunk.generated.js";
import {
  createIntercomFullApiCompaniesGeneratedClient,
  IntercomFullApiCompaniesGeneratedFunctionNames,
  type IntercomFullApiCompaniesGeneratedClient,
  type IntercomFullApiCompaniesOperationPathParamMap,
  type IntercomFullApiCompaniesOperationRequestMap,
} from "./full-api.generated/client/companies-chunk.generated.js";
import {
  createIntercomFullApiContactsGeneratedClient,
  IntercomFullApiContactsGeneratedFunctionNames,
  type IntercomFullApiContactsGeneratedClient,
  type IntercomFullApiContactsOperationPathParamMap,
  type IntercomFullApiContactsOperationRequestMap,
} from "./full-api.generated/client/contacts-chunk.generated.js";
import {
  createIntercomFullApiConversationsGeneratedClient,
  IntercomFullApiConversationsGeneratedFunctionNames,
  type IntercomFullApiConversationsGeneratedClient,
  type IntercomFullApiConversationsOperationPathParamMap,
  type IntercomFullApiConversationsOperationRequestMap,
} from "./full-api.generated/client/conversations-chunk.generated.js";
import {
  createIntercomFullApiCustomObjectInstancesGeneratedClient,
  IntercomFullApiCustomObjectInstancesGeneratedFunctionNames,
  type IntercomFullApiCustomObjectInstancesGeneratedClient,
  type IntercomFullApiCustomObjectInstancesOperationPathParamMap,
  type IntercomFullApiCustomObjectInstancesOperationRequestMap,
} from "./full-api.generated/client/custom-object-instances-chunk.generated.js";
import {
  createIntercomFullApiDataAttributesGeneratedClient,
  IntercomFullApiDataAttributesGeneratedFunctionNames,
  type IntercomFullApiDataAttributesGeneratedClient,
  type IntercomFullApiDataAttributesOperationPathParamMap,
  type IntercomFullApiDataAttributesOperationRequestMap,
} from "./full-api.generated/client/data-attributes-chunk.generated.js";
import {
  createIntercomFullApiDataEventsGeneratedClient,
  IntercomFullApiDataEventsGeneratedFunctionNames,
  type IntercomFullApiDataEventsGeneratedClient,
  type IntercomFullApiDataEventsOperationPathParamMap,
  type IntercomFullApiDataEventsOperationRequestMap,
} from "./full-api.generated/client/data-events-chunk.generated.js";
import {
  createIntercomFullApiDataExportGeneratedClient,
  IntercomFullApiDataExportGeneratedFunctionNames,
  type IntercomFullApiDataExportGeneratedClient,
  type IntercomFullApiDataExportOperationPathParamMap,
  type IntercomFullApiDataExportOperationRequestMap,
} from "./full-api.generated/client/data-export-chunk.generated.js";
import {
  createIntercomFullApiEmailsGeneratedClient,
  IntercomFullApiEmailsGeneratedFunctionNames,
  type IntercomFullApiEmailsGeneratedClient,
  type IntercomFullApiEmailsOperationPathParamMap,
  type IntercomFullApiEmailsOperationRequestMap,
} from "./full-api.generated/client/emails-chunk.generated.js";
import {
  createIntercomFullApiExportGeneratedClient,
  IntercomFullApiExportGeneratedFunctionNames,
  type IntercomFullApiExportGeneratedClient,
  type IntercomFullApiExportOperationPathParamMap,
  type IntercomFullApiExportOperationRequestMap,
} from "./full-api.generated/client/export-chunk.generated.js";
import {
  createIntercomFullApiFinAgentGeneratedClient,
  IntercomFullApiFinAgentGeneratedFunctionNames,
  type IntercomFullApiFinAgentGeneratedClient,
  type IntercomFullApiFinAgentOperationPathParamMap,
  type IntercomFullApiFinAgentOperationRequestMap,
} from "./full-api.generated/client/fin-agent-chunk.generated.js";
import {
  createIntercomFullApiHelpCenterGeneratedClient,
  IntercomFullApiHelpCenterGeneratedFunctionNames,
  type IntercomFullApiHelpCenterGeneratedClient,
  type IntercomFullApiHelpCenterOperationPathParamMap,
  type IntercomFullApiHelpCenterOperationRequestMap,
} from "./full-api.generated/client/help-center-chunk.generated.js";
import {
  createIntercomFullApiInternalArticlesGeneratedClient,
  IntercomFullApiInternalArticlesGeneratedFunctionNames,
  type IntercomFullApiInternalArticlesGeneratedClient,
  type IntercomFullApiInternalArticlesOperationPathParamMap,
  type IntercomFullApiInternalArticlesOperationRequestMap,
} from "./full-api.generated/client/internal-articles-chunk.generated.js";
import {
  createIntercomFullApiIPAllowlistGeneratedClient,
  IntercomFullApiIPAllowlistGeneratedFunctionNames,
  type IntercomFullApiIPAllowlistGeneratedClient,
  type IntercomFullApiIPAllowlistOperationPathParamMap,
  type IntercomFullApiIPAllowlistOperationRequestMap,
} from "./full-api.generated/client/ip-allowlist-chunk.generated.js";
import {
  createIntercomFullApiJobsGeneratedClient,
  IntercomFullApiJobsGeneratedFunctionNames,
  type IntercomFullApiJobsGeneratedClient,
  type IntercomFullApiJobsOperationPathParamMap,
  type IntercomFullApiJobsOperationRequestMap,
} from "./full-api.generated/client/jobs-chunk.generated.js";
import {
  createIntercomFullApiMessagesGeneratedClient,
  IntercomFullApiMessagesGeneratedFunctionNames,
  type IntercomFullApiMessagesGeneratedClient,
  type IntercomFullApiMessagesOperationPathParamMap,
  type IntercomFullApiMessagesOperationRequestMap,
} from "./full-api.generated/client/messages-chunk.generated.js";
import {
  createIntercomFullApiNewsGeneratedClient,
  IntercomFullApiNewsGeneratedFunctionNames,
  type IntercomFullApiNewsGeneratedClient,
  type IntercomFullApiNewsOperationPathParamMap,
  type IntercomFullApiNewsOperationRequestMap,
} from "./full-api.generated/client/news-chunk.generated.js";
import {
  createIntercomFullApiNotesGeneratedClient,
  IntercomFullApiNotesGeneratedFunctionNames,
  type IntercomFullApiNotesGeneratedClient,
  type IntercomFullApiNotesOperationPathParamMap,
  type IntercomFullApiNotesOperationRequestMap,
} from "./full-api.generated/client/notes-chunk.generated.js";
import {
  createIntercomFullApiSegmentsGeneratedClient,
  IntercomFullApiSegmentsGeneratedFunctionNames,
  type IntercomFullApiSegmentsGeneratedClient,
  type IntercomFullApiSegmentsOperationPathParamMap,
  type IntercomFullApiSegmentsOperationRequestMap,
} from "./full-api.generated/client/segments-chunk.generated.js";
import {
  createIntercomFullApiSubscriptionTypesGeneratedClient,
  IntercomFullApiSubscriptionTypesGeneratedFunctionNames,
  type IntercomFullApiSubscriptionTypesGeneratedClient,
  type IntercomFullApiSubscriptionTypesOperationPathParamMap,
  type IntercomFullApiSubscriptionTypesOperationRequestMap,
} from "./full-api.generated/client/subscription-types-chunk.generated.js";
import {
  createIntercomFullApiSwitchGeneratedClient,
  IntercomFullApiSwitchGeneratedFunctionNames,
  type IntercomFullApiSwitchGeneratedClient,
  type IntercomFullApiSwitchOperationPathParamMap,
  type IntercomFullApiSwitchOperationRequestMap,
} from "./full-api.generated/client/switch-chunk.generated.js";
import {
  createIntercomFullApiTagsGeneratedClient,
  IntercomFullApiTagsGeneratedFunctionNames,
  type IntercomFullApiTagsGeneratedClient,
  type IntercomFullApiTagsOperationPathParamMap,
  type IntercomFullApiTagsOperationRequestMap,
} from "./full-api.generated/client/tags-chunk.generated.js";
import {
  createIntercomFullApiTeamsGeneratedClient,
  IntercomFullApiTeamsGeneratedFunctionNames,
  type IntercomFullApiTeamsGeneratedClient,
  type IntercomFullApiTeamsOperationPathParamMap,
  type IntercomFullApiTeamsOperationRequestMap,
} from "./full-api.generated/client/teams-chunk.generated.js";
import {
  createIntercomFullApiTicketStatesGeneratedClient,
  IntercomFullApiTicketStatesGeneratedFunctionNames,
  type IntercomFullApiTicketStatesGeneratedClient,
  type IntercomFullApiTicketStatesOperationPathParamMap,
  type IntercomFullApiTicketStatesOperationRequestMap,
} from "./full-api.generated/client/ticket-states-chunk.generated.js";
import {
  createIntercomFullApiTicketTypeAttributesGeneratedClient,
  IntercomFullApiTicketTypeAttributesGeneratedFunctionNames,
  type IntercomFullApiTicketTypeAttributesGeneratedClient,
  type IntercomFullApiTicketTypeAttributesOperationPathParamMap,
  type IntercomFullApiTicketTypeAttributesOperationRequestMap,
} from "./full-api.generated/client/ticket-type-attributes-chunk.generated.js";
import {
  createIntercomFullApiTicketTypesGeneratedClient,
  IntercomFullApiTicketTypesGeneratedFunctionNames,
  type IntercomFullApiTicketTypesGeneratedClient,
  type IntercomFullApiTicketTypesOperationPathParamMap,
  type IntercomFullApiTicketTypesOperationRequestMap,
} from "./full-api.generated/client/ticket-types-chunk.generated.js";
import {
  createIntercomFullApiTicketsGeneratedClient,
  IntercomFullApiTicketsGeneratedFunctionNames,
  type IntercomFullApiTicketsGeneratedClient,
  type IntercomFullApiTicketsOperationPathParamMap,
  type IntercomFullApiTicketsOperationRequestMap,
} from "./full-api.generated/client/tickets-chunk.generated.js";
import {
  createIntercomFullApiVisitorsGeneratedClient,
  IntercomFullApiVisitorsGeneratedFunctionNames,
  type IntercomFullApiVisitorsGeneratedClient,
  type IntercomFullApiVisitorsOperationPathParamMap,
  type IntercomFullApiVisitorsOperationRequestMap,
} from "./full-api.generated/client/visitors-chunk.generated.js";
import {
  createIntercomFullApiWorkflowsGeneratedClient,
  IntercomFullApiWorkflowsGeneratedFunctionNames,
  type IntercomFullApiWorkflowsGeneratedClient,
  type IntercomFullApiWorkflowsOperationPathParamMap,
  type IntercomFullApiWorkflowsOperationRequestMap,
} from "./full-api.generated/client/workflows-chunk.generated.js";

export type IntercomFullApiPathParamValue = string | number;
export interface IntercomFullApiOperationPathParamMap extends IntercomFullApiAdminsOperationPathParamMap, IntercomFullApiAIContentOperationPathParamMap, IntercomFullApiArticlesOperationPathParamMap, IntercomFullApiAwayStatusReasonsOperationPathParamMap, IntercomFullApiBrandsOperationPathParamMap, IntercomFullApiCallsOperationPathParamMap, IntercomFullApiCompaniesOperationPathParamMap, IntercomFullApiContactsOperationPathParamMap, IntercomFullApiConversationsOperationPathParamMap, IntercomFullApiCustomObjectInstancesOperationPathParamMap, IntercomFullApiDataAttributesOperationPathParamMap, IntercomFullApiDataEventsOperationPathParamMap, IntercomFullApiDataExportOperationPathParamMap, IntercomFullApiEmailsOperationPathParamMap, IntercomFullApiExportOperationPathParamMap, IntercomFullApiFinAgentOperationPathParamMap, IntercomFullApiHelpCenterOperationPathParamMap, IntercomFullApiInternalArticlesOperationPathParamMap, IntercomFullApiIPAllowlistOperationPathParamMap, IntercomFullApiJobsOperationPathParamMap, IntercomFullApiMessagesOperationPathParamMap, IntercomFullApiNewsOperationPathParamMap, IntercomFullApiNotesOperationPathParamMap, IntercomFullApiSegmentsOperationPathParamMap, IntercomFullApiSubscriptionTypesOperationPathParamMap, IntercomFullApiSwitchOperationPathParamMap, IntercomFullApiTagsOperationPathParamMap, IntercomFullApiTeamsOperationPathParamMap, IntercomFullApiTicketStatesOperationPathParamMap, IntercomFullApiTicketTypeAttributesOperationPathParamMap, IntercomFullApiTicketTypesOperationPathParamMap, IntercomFullApiTicketsOperationPathParamMap, IntercomFullApiVisitorsOperationPathParamMap, IntercomFullApiWorkflowsOperationPathParamMap {}

export type IntercomFullApiOperationKey = keyof IntercomFullApiOperationPathParamMap & string;

export type IntercomFullApiOperationQueryInput<OperationKey extends IntercomFullApiOperationKey> =
  IntercomFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: IntercomFullApiOperationQueryMap[OperationKey] }
    : { query?: IntercomFullApiOperationQueryMap[OperationKey] };

export type IntercomFullApiOperationBodyInput<OperationKey extends IntercomFullApiOperationKey> =
  [IntercomFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : IntercomFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: IntercomFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: IntercomFullApiOperationRequestBodyMap[OperationKey] };

export type IntercomFullApiOperationInput<OperationKey extends IntercomFullApiOperationKey> = Omit<IntercomOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends IntercomFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: IntercomFullApiOperationPathParamMap[OperationKey] }
) & IntercomFullApiOperationQueryInput<OperationKey> & IntercomFullApiOperationBodyInput<OperationKey>;

export interface IntercomFullApiOperationRequestMap extends IntercomFullApiAdminsOperationRequestMap, IntercomFullApiAIContentOperationRequestMap, IntercomFullApiArticlesOperationRequestMap, IntercomFullApiAwayStatusReasonsOperationRequestMap, IntercomFullApiBrandsOperationRequestMap, IntercomFullApiCallsOperationRequestMap, IntercomFullApiCompaniesOperationRequestMap, IntercomFullApiContactsOperationRequestMap, IntercomFullApiConversationsOperationRequestMap, IntercomFullApiCustomObjectInstancesOperationRequestMap, IntercomFullApiDataAttributesOperationRequestMap, IntercomFullApiDataEventsOperationRequestMap, IntercomFullApiDataExportOperationRequestMap, IntercomFullApiEmailsOperationRequestMap, IntercomFullApiExportOperationRequestMap, IntercomFullApiFinAgentOperationRequestMap, IntercomFullApiHelpCenterOperationRequestMap, IntercomFullApiInternalArticlesOperationRequestMap, IntercomFullApiIPAllowlistOperationRequestMap, IntercomFullApiJobsOperationRequestMap, IntercomFullApiMessagesOperationRequestMap, IntercomFullApiNewsOperationRequestMap, IntercomFullApiNotesOperationRequestMap, IntercomFullApiSegmentsOperationRequestMap, IntercomFullApiSubscriptionTypesOperationRequestMap, IntercomFullApiSwitchOperationRequestMap, IntercomFullApiTagsOperationRequestMap, IntercomFullApiTeamsOperationRequestMap, IntercomFullApiTicketStatesOperationRequestMap, IntercomFullApiTicketTypeAttributesOperationRequestMap, IntercomFullApiTicketTypesOperationRequestMap, IntercomFullApiTicketsOperationRequestMap, IntercomFullApiVisitorsOperationRequestMap, IntercomFullApiWorkflowsOperationRequestMap {}

export type IntercomFullApiOperationArgs<OperationKey extends IntercomFullApiOperationKey> = {} extends IntercomFullApiOperationPathParamMap[OperationKey]
  ? [input?: IntercomFullApiOperationRequestMap[OperationKey]]
  : [input: IntercomFullApiOperationRequestMap[OperationKey]];

export type IntercomGeneratedOperationCaller = <OperationKey extends IntercomFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: IntercomFullApiOperationArgs<OperationKey>
) => Promise<IntercomFullApiOperationResponseMap[OperationKey]>;

export interface IntercomFullApiGeneratedClient extends IntercomFullApiAdminsGeneratedClient, IntercomFullApiAIContentGeneratedClient, IntercomFullApiArticlesGeneratedClient, IntercomFullApiAwayStatusReasonsGeneratedClient, IntercomFullApiBrandsGeneratedClient, IntercomFullApiCallsGeneratedClient, IntercomFullApiCompaniesGeneratedClient, IntercomFullApiContactsGeneratedClient, IntercomFullApiConversationsGeneratedClient, IntercomFullApiCustomObjectInstancesGeneratedClient, IntercomFullApiDataAttributesGeneratedClient, IntercomFullApiDataEventsGeneratedClient, IntercomFullApiDataExportGeneratedClient, IntercomFullApiEmailsGeneratedClient, IntercomFullApiExportGeneratedClient, IntercomFullApiFinAgentGeneratedClient, IntercomFullApiHelpCenterGeneratedClient, IntercomFullApiInternalArticlesGeneratedClient, IntercomFullApiIPAllowlistGeneratedClient, IntercomFullApiJobsGeneratedClient, IntercomFullApiMessagesGeneratedClient, IntercomFullApiNewsGeneratedClient, IntercomFullApiNotesGeneratedClient, IntercomFullApiSegmentsGeneratedClient, IntercomFullApiSubscriptionTypesGeneratedClient, IntercomFullApiSwitchGeneratedClient, IntercomFullApiTagsGeneratedClient, IntercomFullApiTeamsGeneratedClient, IntercomFullApiTicketStatesGeneratedClient, IntercomFullApiTicketTypeAttributesGeneratedClient, IntercomFullApiTicketTypesGeneratedClient, IntercomFullApiTicketsGeneratedClient, IntercomFullApiVisitorsGeneratedClient, IntercomFullApiWorkflowsGeneratedClient {}

export const INTERCOM_FULL_API_GENERATED_FUNCTION_COUNT = 160 as const;
export const INTERCOM_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...IntercomFullApiAdminsGeneratedFunctionNames,
  ...IntercomFullApiAIContentGeneratedFunctionNames,
  ...IntercomFullApiArticlesGeneratedFunctionNames,
  ...IntercomFullApiAwayStatusReasonsGeneratedFunctionNames,
  ...IntercomFullApiBrandsGeneratedFunctionNames,
  ...IntercomFullApiCallsGeneratedFunctionNames,
  ...IntercomFullApiCompaniesGeneratedFunctionNames,
  ...IntercomFullApiContactsGeneratedFunctionNames,
  ...IntercomFullApiConversationsGeneratedFunctionNames,
  ...IntercomFullApiCustomObjectInstancesGeneratedFunctionNames,
  ...IntercomFullApiDataAttributesGeneratedFunctionNames,
  ...IntercomFullApiDataEventsGeneratedFunctionNames,
  ...IntercomFullApiDataExportGeneratedFunctionNames,
  ...IntercomFullApiEmailsGeneratedFunctionNames,
  ...IntercomFullApiExportGeneratedFunctionNames,
  ...IntercomFullApiFinAgentGeneratedFunctionNames,
  ...IntercomFullApiHelpCenterGeneratedFunctionNames,
  ...IntercomFullApiInternalArticlesGeneratedFunctionNames,
  ...IntercomFullApiIPAllowlistGeneratedFunctionNames,
  ...IntercomFullApiJobsGeneratedFunctionNames,
  ...IntercomFullApiMessagesGeneratedFunctionNames,
  ...IntercomFullApiNewsGeneratedFunctionNames,
  ...IntercomFullApiNotesGeneratedFunctionNames,
  ...IntercomFullApiSegmentsGeneratedFunctionNames,
  ...IntercomFullApiSubscriptionTypesGeneratedFunctionNames,
  ...IntercomFullApiSwitchGeneratedFunctionNames,
  ...IntercomFullApiTagsGeneratedFunctionNames,
  ...IntercomFullApiTeamsGeneratedFunctionNames,
  ...IntercomFullApiTicketStatesGeneratedFunctionNames,
  ...IntercomFullApiTicketTypeAttributesGeneratedFunctionNames,
  ...IntercomFullApiTicketTypesGeneratedFunctionNames,
  ...IntercomFullApiTicketsGeneratedFunctionNames,
  ...IntercomFullApiVisitorsGeneratedFunctionNames,
  ...IntercomFullApiWorkflowsGeneratedFunctionNames,
] as const satisfies readonly (keyof IntercomFullApiGeneratedClient)[];

export function createIntercomFullApiGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiGeneratedClient {
  return Object.assign(
    {},
    createIntercomFullApiAdminsGeneratedClient(callOperation),
    createIntercomFullApiAIContentGeneratedClient(callOperation),
    createIntercomFullApiArticlesGeneratedClient(callOperation),
    createIntercomFullApiAwayStatusReasonsGeneratedClient(callOperation),
    createIntercomFullApiBrandsGeneratedClient(callOperation),
    createIntercomFullApiCallsGeneratedClient(callOperation),
    createIntercomFullApiCompaniesGeneratedClient(callOperation),
    createIntercomFullApiContactsGeneratedClient(callOperation),
    createIntercomFullApiConversationsGeneratedClient(callOperation),
    createIntercomFullApiCustomObjectInstancesGeneratedClient(callOperation),
    createIntercomFullApiDataAttributesGeneratedClient(callOperation),
    createIntercomFullApiDataEventsGeneratedClient(callOperation),
    createIntercomFullApiDataExportGeneratedClient(callOperation),
    createIntercomFullApiEmailsGeneratedClient(callOperation),
    createIntercomFullApiExportGeneratedClient(callOperation),
    createIntercomFullApiFinAgentGeneratedClient(callOperation),
    createIntercomFullApiHelpCenterGeneratedClient(callOperation),
    createIntercomFullApiInternalArticlesGeneratedClient(callOperation),
    createIntercomFullApiIPAllowlistGeneratedClient(callOperation),
    createIntercomFullApiJobsGeneratedClient(callOperation),
    createIntercomFullApiMessagesGeneratedClient(callOperation),
    createIntercomFullApiNewsGeneratedClient(callOperation),
    createIntercomFullApiNotesGeneratedClient(callOperation),
    createIntercomFullApiSegmentsGeneratedClient(callOperation),
    createIntercomFullApiSubscriptionTypesGeneratedClient(callOperation),
    createIntercomFullApiSwitchGeneratedClient(callOperation),
    createIntercomFullApiTagsGeneratedClient(callOperation),
    createIntercomFullApiTeamsGeneratedClient(callOperation),
    createIntercomFullApiTicketStatesGeneratedClient(callOperation),
    createIntercomFullApiTicketTypeAttributesGeneratedClient(callOperation),
    createIntercomFullApiTicketTypesGeneratedClient(callOperation),
    createIntercomFullApiTicketsGeneratedClient(callOperation),
    createIntercomFullApiVisitorsGeneratedClient(callOperation),
    createIntercomFullApiWorkflowsGeneratedClient(callOperation),
  ) as IntercomFullApiGeneratedClient;
}
