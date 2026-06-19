// Generated from the RingCentral Engage Digital OpenAPI spec (https://raw.githubusercontent.com/ringcentral/engage-digital-api-docs/master/specs/engage-digital_openapi3.yaml).
// Do not edit by hand; run scripts/generate-ringcentral-digital-api.mjs after checking upstream docs.

import type { RingCentralOperationRequestInput } from "./index.js";
import type {
  RingCentralDigitalApiOperationQueryMap,
  RingCentralDigitalApiOperationQueryRequiredMap,
  RingCentralDigitalApiOperationRequestBodyMap,
  RingCentralDigitalApiOperationRequestBodyRequiredMap,
  RingCentralDigitalApiOperationResponseMap,
} from "./digital-api-schema-types.generated.js";
import {
  createRingCentralDigitalApiAgentStatusGeneratedClient,
  RingCentralDigitalApiAgentStatusGeneratedFunctionNames,
  type RingCentralDigitalApiAgentStatusGeneratedClient,
  type RingCentralDigitalApiAgentStatusOperationPathParamMap,
  type RingCentralDigitalApiAgentStatusOperationRequestMap,
} from "./digital-api.generated/client/agent-status-chunk.generated.js";
import {
  createRingCentralDigitalApiAttachmentsGeneratedClient,
  RingCentralDigitalApiAttachmentsGeneratedFunctionNames,
  type RingCentralDigitalApiAttachmentsGeneratedClient,
  type RingCentralDigitalApiAttachmentsOperationPathParamMap,
  type RingCentralDigitalApiAttachmentsOperationRequestMap,
} from "./digital-api.generated/client/attachments-chunk.generated.js";
import {
  createRingCentralDigitalApiBotsGeneratedClient,
  RingCentralDigitalApiBotsGeneratedFunctionNames,
  type RingCentralDigitalApiBotsGeneratedClient,
  type RingCentralDigitalApiBotsOperationPathParamMap,
  type RingCentralDigitalApiBotsOperationRequestMap,
} from "./digital-api.generated/client/bots-chunk.generated.js";
import {
  createRingCentralDigitalApiCategoriesGeneratedClient,
  RingCentralDigitalApiCategoriesGeneratedFunctionNames,
  type RingCentralDigitalApiCategoriesGeneratedClient,
  type RingCentralDigitalApiCategoriesOperationPathParamMap,
  type RingCentralDigitalApiCategoriesOperationRequestMap,
} from "./digital-api.generated/client/categories-chunk.generated.js";
import {
  createRingCentralDigitalApiChannelsGeneratedClient,
  RingCentralDigitalApiChannelsGeneratedFunctionNames,
  type RingCentralDigitalApiChannelsGeneratedClient,
  type RingCentralDigitalApiChannelsOperationPathParamMap,
  type RingCentralDigitalApiChannelsOperationRequestMap,
} from "./digital-api.generated/client/channels-chunk.generated.js";
import {
  createRingCentralDigitalApiCommunitiesGeneratedClient,
  RingCentralDigitalApiCommunitiesGeneratedFunctionNames,
  type RingCentralDigitalApiCommunitiesGeneratedClient,
  type RingCentralDigitalApiCommunitiesOperationPathParamMap,
  type RingCentralDigitalApiCommunitiesOperationRequestMap,
} from "./digital-api.generated/client/communities-chunk.generated.js";
import {
  createRingCentralDigitalApiContentsGeneratedClient,
  RingCentralDigitalApiContentsGeneratedFunctionNames,
  type RingCentralDigitalApiContentsGeneratedClient,
  type RingCentralDigitalApiContentsOperationPathParamMap,
  type RingCentralDigitalApiContentsOperationRequestMap,
} from "./digital-api.generated/client/contents-chunk.generated.js";
import {
  createRingCentralDigitalApiCustomFieldsGeneratedClient,
  RingCentralDigitalApiCustomFieldsGeneratedFunctionNames,
  type RingCentralDigitalApiCustomFieldsGeneratedClient,
  type RingCentralDigitalApiCustomFieldsOperationPathParamMap,
  type RingCentralDigitalApiCustomFieldsOperationRequestMap,
} from "./digital-api.generated/client/custom-fields-chunk.generated.js";
import {
  createRingCentralDigitalApiEventsGeneratedClient,
  RingCentralDigitalApiEventsGeneratedFunctionNames,
  type RingCentralDigitalApiEventsGeneratedClient,
  type RingCentralDigitalApiEventsOperationPathParamMap,
  type RingCentralDigitalApiEventsOperationRequestMap,
} from "./digital-api.generated/client/events-chunk.generated.js";
import {
  createRingCentralDigitalApiFoldersGeneratedClient,
  RingCentralDigitalApiFoldersGeneratedFunctionNames,
  type RingCentralDigitalApiFoldersGeneratedClient,
  type RingCentralDigitalApiFoldersOperationPathParamMap,
  type RingCentralDigitalApiFoldersOperationRequestMap,
} from "./digital-api.generated/client/folders-chunk.generated.js";
import {
  createRingCentralDigitalApiIdentitiesGeneratedClient,
  RingCentralDigitalApiIdentitiesGeneratedFunctionNames,
  type RingCentralDigitalApiIdentitiesGeneratedClient,
  type RingCentralDigitalApiIdentitiesOperationPathParamMap,
  type RingCentralDigitalApiIdentitiesOperationRequestMap,
} from "./digital-api.generated/client/identities-chunk.generated.js";
import {
  createRingCentralDigitalApiIdentityGroupsGeneratedClient,
  RingCentralDigitalApiIdentityGroupsGeneratedFunctionNames,
  type RingCentralDigitalApiIdentityGroupsGeneratedClient,
  type RingCentralDigitalApiIdentityGroupsOperationPathParamMap,
  type RingCentralDigitalApiIdentityGroupsOperationRequestMap,
} from "./digital-api.generated/client/identity-groups-chunk.generated.js";
import {
  createRingCentralDigitalApiInterventionCommentsGeneratedClient,
  RingCentralDigitalApiInterventionCommentsGeneratedFunctionNames,
  type RingCentralDigitalApiInterventionCommentsGeneratedClient,
  type RingCentralDigitalApiInterventionCommentsOperationPathParamMap,
  type RingCentralDigitalApiInterventionCommentsOperationRequestMap,
} from "./digital-api.generated/client/intervention-comments-chunk.generated.js";
import {
  createRingCentralDigitalApiInterventionsGeneratedClient,
  RingCentralDigitalApiInterventionsGeneratedFunctionNames,
  type RingCentralDigitalApiInterventionsGeneratedClient,
  type RingCentralDigitalApiInterventionsOperationPathParamMap,
  type RingCentralDigitalApiInterventionsOperationRequestMap,
} from "./digital-api.generated/client/interventions-chunk.generated.js";
import {
  createRingCentralDigitalApiLocalesGeneratedClient,
  RingCentralDigitalApiLocalesGeneratedFunctionNames,
  type RingCentralDigitalApiLocalesGeneratedClient,
  type RingCentralDigitalApiLocalesOperationPathParamMap,
  type RingCentralDigitalApiLocalesOperationRequestMap,
} from "./digital-api.generated/client/locales-chunk.generated.js";
import {
  createRingCentralDigitalApiPresenceStatusGeneratedClient,
  RingCentralDigitalApiPresenceStatusGeneratedFunctionNames,
  type RingCentralDigitalApiPresenceStatusGeneratedClient,
  type RingCentralDigitalApiPresenceStatusOperationPathParamMap,
  type RingCentralDigitalApiPresenceStatusOperationRequestMap,
} from "./digital-api.generated/client/presence-status-chunk.generated.js";
import {
  createRingCentralDigitalApiReplyAssistantEntriesGeneratedClient,
  RingCentralDigitalApiReplyAssistantEntriesGeneratedFunctionNames,
  type RingCentralDigitalApiReplyAssistantEntriesGeneratedClient,
  type RingCentralDigitalApiReplyAssistantEntriesOperationPathParamMap,
  type RingCentralDigitalApiReplyAssistantEntriesOperationRequestMap,
} from "./digital-api.generated/client/reply-assistant-entries-chunk.generated.js";
import {
  createRingCentralDigitalApiReplyAssistantGroupsGeneratedClient,
  RingCentralDigitalApiReplyAssistantGroupsGeneratedFunctionNames,
  type RingCentralDigitalApiReplyAssistantGroupsGeneratedClient,
  type RingCentralDigitalApiReplyAssistantGroupsOperationPathParamMap,
  type RingCentralDigitalApiReplyAssistantGroupsOperationRequestMap,
} from "./digital-api.generated/client/reply-assistant-groups-chunk.generated.js";
import {
  createRingCentralDigitalApiReplyAssistantVersionsGeneratedClient,
  RingCentralDigitalApiReplyAssistantVersionsGeneratedFunctionNames,
  type RingCentralDigitalApiReplyAssistantVersionsGeneratedClient,
  type RingCentralDigitalApiReplyAssistantVersionsOperationPathParamMap,
  type RingCentralDigitalApiReplyAssistantVersionsOperationRequestMap,
} from "./digital-api.generated/client/reply-assistant-versions-chunk.generated.js";
import {
  createRingCentralDigitalApiRolesGeneratedClient,
  RingCentralDigitalApiRolesGeneratedFunctionNames,
  type RingCentralDigitalApiRolesGeneratedClient,
  type RingCentralDigitalApiRolesOperationPathParamMap,
  type RingCentralDigitalApiRolesOperationRequestMap,
} from "./digital-api.generated/client/roles-chunk.generated.js";
import {
  createRingCentralDigitalApiSettingsGeneratedClient,
  RingCentralDigitalApiSettingsGeneratedFunctionNames,
  type RingCentralDigitalApiSettingsGeneratedClient,
  type RingCentralDigitalApiSettingsOperationPathParamMap,
  type RingCentralDigitalApiSettingsOperationRequestMap,
} from "./digital-api.generated/client/settings-chunk.generated.js";
import {
  createRingCentralDigitalApiSourcesGeneratedClient,
  RingCentralDigitalApiSourcesGeneratedFunctionNames,
  type RingCentralDigitalApiSourcesGeneratedClient,
  type RingCentralDigitalApiSourcesOperationPathParamMap,
  type RingCentralDigitalApiSourcesOperationRequestMap,
} from "./digital-api.generated/client/sources-chunk.generated.js";
import {
  createRingCentralDigitalApiSurveyResponsesGeneratedClient,
  RingCentralDigitalApiSurveyResponsesGeneratedFunctionNames,
  type RingCentralDigitalApiSurveyResponsesGeneratedClient,
  type RingCentralDigitalApiSurveyResponsesOperationPathParamMap,
  type RingCentralDigitalApiSurveyResponsesOperationRequestMap,
} from "./digital-api.generated/client/survey-responses-chunk.generated.js";
import {
  createRingCentralDigitalApiSurveysGeneratedClient,
  RingCentralDigitalApiSurveysGeneratedFunctionNames,
  type RingCentralDigitalApiSurveysGeneratedClient,
  type RingCentralDigitalApiSurveysOperationPathParamMap,
  type RingCentralDigitalApiSurveysOperationRequestMap,
} from "./digital-api.generated/client/surveys-chunk.generated.js";
import {
  createRingCentralDigitalApiTagsGeneratedClient,
  RingCentralDigitalApiTagsGeneratedFunctionNames,
  type RingCentralDigitalApiTagsGeneratedClient,
  type RingCentralDigitalApiTagsOperationPathParamMap,
  type RingCentralDigitalApiTagsOperationRequestMap,
} from "./digital-api.generated/client/tags-chunk.generated.js";
import {
  createRingCentralDigitalApiTasksGeneratedClient,
  RingCentralDigitalApiTasksGeneratedFunctionNames,
  type RingCentralDigitalApiTasksGeneratedClient,
  type RingCentralDigitalApiTasksOperationPathParamMap,
  type RingCentralDigitalApiTasksOperationRequestMap,
} from "./digital-api.generated/client/tasks-chunk.generated.js";
import {
  createRingCentralDigitalApiTeamsGeneratedClient,
  RingCentralDigitalApiTeamsGeneratedFunctionNames,
  type RingCentralDigitalApiTeamsGeneratedClient,
  type RingCentralDigitalApiTeamsOperationPathParamMap,
  type RingCentralDigitalApiTeamsOperationRequestMap,
} from "./digital-api.generated/client/teams-chunk.generated.js";
import {
  createRingCentralDigitalApiThreadsGeneratedClient,
  RingCentralDigitalApiThreadsGeneratedFunctionNames,
  type RingCentralDigitalApiThreadsGeneratedClient,
  type RingCentralDigitalApiThreadsOperationPathParamMap,
  type RingCentralDigitalApiThreadsOperationRequestMap,
} from "./digital-api.generated/client/threads-chunk.generated.js";
import {
  createRingCentralDigitalApiTimeSheetsGeneratedClient,
  RingCentralDigitalApiTimeSheetsGeneratedFunctionNames,
  type RingCentralDigitalApiTimeSheetsGeneratedClient,
  type RingCentralDigitalApiTimeSheetsOperationPathParamMap,
  type RingCentralDigitalApiTimeSheetsOperationRequestMap,
} from "./digital-api.generated/client/time-sheets-chunk.generated.js";
import {
  createRingCentralDigitalApiTimezonesGeneratedClient,
  RingCentralDigitalApiTimezonesGeneratedFunctionNames,
  type RingCentralDigitalApiTimezonesGeneratedClient,
  type RingCentralDigitalApiTimezonesOperationPathParamMap,
  type RingCentralDigitalApiTimezonesOperationRequestMap,
} from "./digital-api.generated/client/timezones-chunk.generated.js";
import {
  createRingCentralDigitalApiTopologiesGeneratedClient,
  RingCentralDigitalApiTopologiesGeneratedFunctionNames,
  type RingCentralDigitalApiTopologiesGeneratedClient,
  type RingCentralDigitalApiTopologiesOperationPathParamMap,
  type RingCentralDigitalApiTopologiesOperationRequestMap,
} from "./digital-api.generated/client/topologies-chunk.generated.js";
import {
  createRingCentralDigitalApiUserCapacitiesGeneratedClient,
  RingCentralDigitalApiUserCapacitiesGeneratedFunctionNames,
  type RingCentralDigitalApiUserCapacitiesGeneratedClient,
  type RingCentralDigitalApiUserCapacitiesOperationPathParamMap,
  type RingCentralDigitalApiUserCapacitiesOperationRequestMap,
} from "./digital-api.generated/client/user-capacities-chunk.generated.js";
import {
  createRingCentralDigitalApiUserSignaturesGeneratedClient,
  RingCentralDigitalApiUserSignaturesGeneratedFunctionNames,
  type RingCentralDigitalApiUserSignaturesGeneratedClient,
  type RingCentralDigitalApiUserSignaturesOperationPathParamMap,
  type RingCentralDigitalApiUserSignaturesOperationRequestMap,
} from "./digital-api.generated/client/user-signatures-chunk.generated.js";
import {
  createRingCentralDigitalApiUsersGeneratedClient,
  RingCentralDigitalApiUsersGeneratedFunctionNames,
  type RingCentralDigitalApiUsersGeneratedClient,
  type RingCentralDigitalApiUsersOperationPathParamMap,
  type RingCentralDigitalApiUsersOperationRequestMap,
} from "./digital-api.generated/client/users-chunk.generated.js";
import {
  createRingCentralDigitalApiUsersSourcesPermissionsGeneratedClient,
  RingCentralDigitalApiUsersSourcesPermissionsGeneratedFunctionNames,
  type RingCentralDigitalApiUsersSourcesPermissionsGeneratedClient,
  type RingCentralDigitalApiUsersSourcesPermissionsOperationPathParamMap,
  type RingCentralDigitalApiUsersSourcesPermissionsOperationRequestMap,
} from "./digital-api.generated/client/users-sources-permissions-chunk.generated.js";
import {
  createRingCentralDigitalApiWebhooksGeneratedClient,
  RingCentralDigitalApiWebhooksGeneratedFunctionNames,
  type RingCentralDigitalApiWebhooksGeneratedClient,
  type RingCentralDigitalApiWebhooksOperationPathParamMap,
  type RingCentralDigitalApiWebhooksOperationRequestMap,
} from "./digital-api.generated/client/webhooks-chunk.generated.js";

export type RingCentralDigitalApiPathParamValue = string | number;
export interface RingCentralDigitalApiOperationPathParamMap extends RingCentralDigitalApiAgentStatusOperationPathParamMap, RingCentralDigitalApiAttachmentsOperationPathParamMap, RingCentralDigitalApiBotsOperationPathParamMap, RingCentralDigitalApiCategoriesOperationPathParamMap, RingCentralDigitalApiChannelsOperationPathParamMap, RingCentralDigitalApiCommunitiesOperationPathParamMap, RingCentralDigitalApiContentsOperationPathParamMap, RingCentralDigitalApiCustomFieldsOperationPathParamMap, RingCentralDigitalApiEventsOperationPathParamMap, RingCentralDigitalApiFoldersOperationPathParamMap, RingCentralDigitalApiIdentitiesOperationPathParamMap, RingCentralDigitalApiIdentityGroupsOperationPathParamMap, RingCentralDigitalApiInterventionCommentsOperationPathParamMap, RingCentralDigitalApiInterventionsOperationPathParamMap, RingCentralDigitalApiLocalesOperationPathParamMap, RingCentralDigitalApiPresenceStatusOperationPathParamMap, RingCentralDigitalApiReplyAssistantEntriesOperationPathParamMap, RingCentralDigitalApiReplyAssistantGroupsOperationPathParamMap, RingCentralDigitalApiReplyAssistantVersionsOperationPathParamMap, RingCentralDigitalApiRolesOperationPathParamMap, RingCentralDigitalApiSettingsOperationPathParamMap, RingCentralDigitalApiSourcesOperationPathParamMap, RingCentralDigitalApiSurveyResponsesOperationPathParamMap, RingCentralDigitalApiSurveysOperationPathParamMap, RingCentralDigitalApiTagsOperationPathParamMap, RingCentralDigitalApiTasksOperationPathParamMap, RingCentralDigitalApiTeamsOperationPathParamMap, RingCentralDigitalApiThreadsOperationPathParamMap, RingCentralDigitalApiTimeSheetsOperationPathParamMap, RingCentralDigitalApiTimezonesOperationPathParamMap, RingCentralDigitalApiTopologiesOperationPathParamMap, RingCentralDigitalApiUserCapacitiesOperationPathParamMap, RingCentralDigitalApiUserSignaturesOperationPathParamMap, RingCentralDigitalApiUsersOperationPathParamMap, RingCentralDigitalApiUsersSourcesPermissionsOperationPathParamMap, RingCentralDigitalApiWebhooksOperationPathParamMap {}

export type RingCentralDigitalApiOperationKey = keyof RingCentralDigitalApiOperationPathParamMap & string;

export type RingCentralDigitalApiOperationQueryInput<OperationKey extends RingCentralDigitalApiOperationKey> =
  RingCentralDigitalApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: RingCentralDigitalApiOperationQueryMap[OperationKey] }
    : { query?: RingCentralDigitalApiOperationQueryMap[OperationKey] };

export type RingCentralDigitalApiOperationBodyInput<OperationKey extends RingCentralDigitalApiOperationKey> =
  [RingCentralDigitalApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : RingCentralDigitalApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: RingCentralDigitalApiOperationRequestBodyMap[OperationKey] }
      : { body?: RingCentralDigitalApiOperationRequestBodyMap[OperationKey] };

export type RingCentralDigitalApiOperationInput<OperationKey extends RingCentralDigitalApiOperationKey> = Omit<RingCentralOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends RingCentralDigitalApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: RingCentralDigitalApiOperationPathParamMap[OperationKey] }
) & RingCentralDigitalApiOperationQueryInput<OperationKey> & RingCentralDigitalApiOperationBodyInput<OperationKey>;

export interface RingCentralDigitalApiOperationRequestMap extends RingCentralDigitalApiAgentStatusOperationRequestMap, RingCentralDigitalApiAttachmentsOperationRequestMap, RingCentralDigitalApiBotsOperationRequestMap, RingCentralDigitalApiCategoriesOperationRequestMap, RingCentralDigitalApiChannelsOperationRequestMap, RingCentralDigitalApiCommunitiesOperationRequestMap, RingCentralDigitalApiContentsOperationRequestMap, RingCentralDigitalApiCustomFieldsOperationRequestMap, RingCentralDigitalApiEventsOperationRequestMap, RingCentralDigitalApiFoldersOperationRequestMap, RingCentralDigitalApiIdentitiesOperationRequestMap, RingCentralDigitalApiIdentityGroupsOperationRequestMap, RingCentralDigitalApiInterventionCommentsOperationRequestMap, RingCentralDigitalApiInterventionsOperationRequestMap, RingCentralDigitalApiLocalesOperationRequestMap, RingCentralDigitalApiPresenceStatusOperationRequestMap, RingCentralDigitalApiReplyAssistantEntriesOperationRequestMap, RingCentralDigitalApiReplyAssistantGroupsOperationRequestMap, RingCentralDigitalApiReplyAssistantVersionsOperationRequestMap, RingCentralDigitalApiRolesOperationRequestMap, RingCentralDigitalApiSettingsOperationRequestMap, RingCentralDigitalApiSourcesOperationRequestMap, RingCentralDigitalApiSurveyResponsesOperationRequestMap, RingCentralDigitalApiSurveysOperationRequestMap, RingCentralDigitalApiTagsOperationRequestMap, RingCentralDigitalApiTasksOperationRequestMap, RingCentralDigitalApiTeamsOperationRequestMap, RingCentralDigitalApiThreadsOperationRequestMap, RingCentralDigitalApiTimeSheetsOperationRequestMap, RingCentralDigitalApiTimezonesOperationRequestMap, RingCentralDigitalApiTopologiesOperationRequestMap, RingCentralDigitalApiUserCapacitiesOperationRequestMap, RingCentralDigitalApiUserSignaturesOperationRequestMap, RingCentralDigitalApiUsersOperationRequestMap, RingCentralDigitalApiUsersSourcesPermissionsOperationRequestMap, RingCentralDigitalApiWebhooksOperationRequestMap {}

export type RingCentralDigitalApiOperationArgs<OperationKey extends RingCentralDigitalApiOperationKey> = {} extends RingCentralDigitalApiOperationPathParamMap[OperationKey]
  ? [input?: RingCentralDigitalApiOperationRequestMap[OperationKey]]
  : [input: RingCentralDigitalApiOperationRequestMap[OperationKey]];

export type RingCentralDigitalGeneratedOperationCaller = <OperationKey extends RingCentralDigitalApiOperationKey>(
  operationKey: OperationKey,
  ...args: RingCentralDigitalApiOperationArgs<OperationKey>
) => Promise<RingCentralDigitalApiOperationResponseMap[OperationKey]>;

export interface RingCentralDigitalApiGeneratedClient extends RingCentralDigitalApiAgentStatusGeneratedClient, RingCentralDigitalApiAttachmentsGeneratedClient, RingCentralDigitalApiBotsGeneratedClient, RingCentralDigitalApiCategoriesGeneratedClient, RingCentralDigitalApiChannelsGeneratedClient, RingCentralDigitalApiCommunitiesGeneratedClient, RingCentralDigitalApiContentsGeneratedClient, RingCentralDigitalApiCustomFieldsGeneratedClient, RingCentralDigitalApiEventsGeneratedClient, RingCentralDigitalApiFoldersGeneratedClient, RingCentralDigitalApiIdentitiesGeneratedClient, RingCentralDigitalApiIdentityGroupsGeneratedClient, RingCentralDigitalApiInterventionCommentsGeneratedClient, RingCentralDigitalApiInterventionsGeneratedClient, RingCentralDigitalApiLocalesGeneratedClient, RingCentralDigitalApiPresenceStatusGeneratedClient, RingCentralDigitalApiReplyAssistantEntriesGeneratedClient, RingCentralDigitalApiReplyAssistantGroupsGeneratedClient, RingCentralDigitalApiReplyAssistantVersionsGeneratedClient, RingCentralDigitalApiRolesGeneratedClient, RingCentralDigitalApiSettingsGeneratedClient, RingCentralDigitalApiSourcesGeneratedClient, RingCentralDigitalApiSurveyResponsesGeneratedClient, RingCentralDigitalApiSurveysGeneratedClient, RingCentralDigitalApiTagsGeneratedClient, RingCentralDigitalApiTasksGeneratedClient, RingCentralDigitalApiTeamsGeneratedClient, RingCentralDigitalApiThreadsGeneratedClient, RingCentralDigitalApiTimeSheetsGeneratedClient, RingCentralDigitalApiTimezonesGeneratedClient, RingCentralDigitalApiTopologiesGeneratedClient, RingCentralDigitalApiUserCapacitiesGeneratedClient, RingCentralDigitalApiUserSignaturesGeneratedClient, RingCentralDigitalApiUsersGeneratedClient, RingCentralDigitalApiUsersSourcesPermissionsGeneratedClient, RingCentralDigitalApiWebhooksGeneratedClient {}

export const RINGCENTRAL_DIGITAL_API_GENERATED_FUNCTION_COUNT = 149 as const;
export const RINGCENTRAL_DIGITAL_API_GENERATED_FUNCTION_NAMES = [
  ...RingCentralDigitalApiAgentStatusGeneratedFunctionNames,
  ...RingCentralDigitalApiAttachmentsGeneratedFunctionNames,
  ...RingCentralDigitalApiBotsGeneratedFunctionNames,
  ...RingCentralDigitalApiCategoriesGeneratedFunctionNames,
  ...RingCentralDigitalApiChannelsGeneratedFunctionNames,
  ...RingCentralDigitalApiCommunitiesGeneratedFunctionNames,
  ...RingCentralDigitalApiContentsGeneratedFunctionNames,
  ...RingCentralDigitalApiCustomFieldsGeneratedFunctionNames,
  ...RingCentralDigitalApiEventsGeneratedFunctionNames,
  ...RingCentralDigitalApiFoldersGeneratedFunctionNames,
  ...RingCentralDigitalApiIdentitiesGeneratedFunctionNames,
  ...RingCentralDigitalApiIdentityGroupsGeneratedFunctionNames,
  ...RingCentralDigitalApiInterventionCommentsGeneratedFunctionNames,
  ...RingCentralDigitalApiInterventionsGeneratedFunctionNames,
  ...RingCentralDigitalApiLocalesGeneratedFunctionNames,
  ...RingCentralDigitalApiPresenceStatusGeneratedFunctionNames,
  ...RingCentralDigitalApiReplyAssistantEntriesGeneratedFunctionNames,
  ...RingCentralDigitalApiReplyAssistantGroupsGeneratedFunctionNames,
  ...RingCentralDigitalApiReplyAssistantVersionsGeneratedFunctionNames,
  ...RingCentralDigitalApiRolesGeneratedFunctionNames,
  ...RingCentralDigitalApiSettingsGeneratedFunctionNames,
  ...RingCentralDigitalApiSourcesGeneratedFunctionNames,
  ...RingCentralDigitalApiSurveyResponsesGeneratedFunctionNames,
  ...RingCentralDigitalApiSurveysGeneratedFunctionNames,
  ...RingCentralDigitalApiTagsGeneratedFunctionNames,
  ...RingCentralDigitalApiTasksGeneratedFunctionNames,
  ...RingCentralDigitalApiTeamsGeneratedFunctionNames,
  ...RingCentralDigitalApiThreadsGeneratedFunctionNames,
  ...RingCentralDigitalApiTimeSheetsGeneratedFunctionNames,
  ...RingCentralDigitalApiTimezonesGeneratedFunctionNames,
  ...RingCentralDigitalApiTopologiesGeneratedFunctionNames,
  ...RingCentralDigitalApiUserCapacitiesGeneratedFunctionNames,
  ...RingCentralDigitalApiUserSignaturesGeneratedFunctionNames,
  ...RingCentralDigitalApiUsersGeneratedFunctionNames,
  ...RingCentralDigitalApiUsersSourcesPermissionsGeneratedFunctionNames,
  ...RingCentralDigitalApiWebhooksGeneratedFunctionNames,
] as const satisfies readonly (keyof RingCentralDigitalApiGeneratedClient)[];

export function createRingCentralDigitalApiGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiGeneratedClient {
  return Object.assign(
    {},
    createRingCentralDigitalApiAgentStatusGeneratedClient(callOperation),
    createRingCentralDigitalApiAttachmentsGeneratedClient(callOperation),
    createRingCentralDigitalApiBotsGeneratedClient(callOperation),
    createRingCentralDigitalApiCategoriesGeneratedClient(callOperation),
    createRingCentralDigitalApiChannelsGeneratedClient(callOperation),
    createRingCentralDigitalApiCommunitiesGeneratedClient(callOperation),
    createRingCentralDigitalApiContentsGeneratedClient(callOperation),
    createRingCentralDigitalApiCustomFieldsGeneratedClient(callOperation),
    createRingCentralDigitalApiEventsGeneratedClient(callOperation),
    createRingCentralDigitalApiFoldersGeneratedClient(callOperation),
    createRingCentralDigitalApiIdentitiesGeneratedClient(callOperation),
    createRingCentralDigitalApiIdentityGroupsGeneratedClient(callOperation),
    createRingCentralDigitalApiInterventionCommentsGeneratedClient(callOperation),
    createRingCentralDigitalApiInterventionsGeneratedClient(callOperation),
    createRingCentralDigitalApiLocalesGeneratedClient(callOperation),
    createRingCentralDigitalApiPresenceStatusGeneratedClient(callOperation),
    createRingCentralDigitalApiReplyAssistantEntriesGeneratedClient(callOperation),
    createRingCentralDigitalApiReplyAssistantGroupsGeneratedClient(callOperation),
    createRingCentralDigitalApiReplyAssistantVersionsGeneratedClient(callOperation),
    createRingCentralDigitalApiRolesGeneratedClient(callOperation),
    createRingCentralDigitalApiSettingsGeneratedClient(callOperation),
    createRingCentralDigitalApiSourcesGeneratedClient(callOperation),
    createRingCentralDigitalApiSurveyResponsesGeneratedClient(callOperation),
    createRingCentralDigitalApiSurveysGeneratedClient(callOperation),
    createRingCentralDigitalApiTagsGeneratedClient(callOperation),
    createRingCentralDigitalApiTasksGeneratedClient(callOperation),
    createRingCentralDigitalApiTeamsGeneratedClient(callOperation),
    createRingCentralDigitalApiThreadsGeneratedClient(callOperation),
    createRingCentralDigitalApiTimeSheetsGeneratedClient(callOperation),
    createRingCentralDigitalApiTimezonesGeneratedClient(callOperation),
    createRingCentralDigitalApiTopologiesGeneratedClient(callOperation),
    createRingCentralDigitalApiUserCapacitiesGeneratedClient(callOperation),
    createRingCentralDigitalApiUserSignaturesGeneratedClient(callOperation),
    createRingCentralDigitalApiUsersGeneratedClient(callOperation),
    createRingCentralDigitalApiUsersSourcesPermissionsGeneratedClient(callOperation),
    createRingCentralDigitalApiWebhooksGeneratedClient(callOperation),
  ) as RingCentralDigitalApiGeneratedClient;
}
