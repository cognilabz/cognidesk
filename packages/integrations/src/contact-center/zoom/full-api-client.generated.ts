// Generated from the Zoom Contact Center OpenAPI spec (https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json).
// Do not edit by hand; run scripts/generate-zoom-contact-center-api.mjs after checking upstream docs.

import type { ZoomContactCenterOperationRequestInput } from "./index.js";
import type {
  ZoomContactCenterFullApiOperationQueryMap,
  ZoomContactCenterFullApiOperationQueryRequiredMap,
  ZoomContactCenterFullApiOperationRequestBodyMap,
  ZoomContactCenterFullApiOperationRequestBodyRequiredMap,
  ZoomContactCenterFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createZoomContactCenterFullApiAddressBooksGeneratedClient,
  ZoomContactCenterFullApiAddressBooksGeneratedFunctionNames,
  type ZoomContactCenterFullApiAddressBooksGeneratedClient,
  type ZoomContactCenterFullApiAddressBooksOperationPathParamMap,
  type ZoomContactCenterFullApiAddressBooksOperationRequestMap,
} from "./full-api.generated/client/address-books-chunk.generated.js";
import {
  createZoomContactCenterFullApiAgentStatusesGeneratedClient,
  ZoomContactCenterFullApiAgentStatusesGeneratedFunctionNames,
  type ZoomContactCenterFullApiAgentStatusesGeneratedClient,
  type ZoomContactCenterFullApiAgentStatusesOperationPathParamMap,
  type ZoomContactCenterFullApiAgentStatusesOperationRequestMap,
} from "./full-api.generated/client/agent-statuses-chunk.generated.js";
import {
  createZoomContactCenterFullApiAssetLibraryGeneratedClient,
  ZoomContactCenterFullApiAssetLibraryGeneratedFunctionNames,
  type ZoomContactCenterFullApiAssetLibraryGeneratedClient,
  type ZoomContactCenterFullApiAssetLibraryOperationPathParamMap,
  type ZoomContactCenterFullApiAssetLibraryOperationRequestMap,
} from "./full-api.generated/client/asset-library-chunk.generated.js";
import {
  createZoomContactCenterFullApiBlockListRulesGeneratedClient,
  ZoomContactCenterFullApiBlockListRulesGeneratedFunctionNames,
  type ZoomContactCenterFullApiBlockListRulesGeneratedClient,
  type ZoomContactCenterFullApiBlockListRulesOperationPathParamMap,
  type ZoomContactCenterFullApiBlockListRulesOperationRequestMap,
} from "./full-api.generated/client/block-list-rules-chunk.generated.js";
import {
  createZoomContactCenterFullApiCallControlGeneratedClient,
  ZoomContactCenterFullApiCallControlGeneratedFunctionNames,
  type ZoomContactCenterFullApiCallControlGeneratedClient,
  type ZoomContactCenterFullApiCallControlOperationPathParamMap,
  type ZoomContactCenterFullApiCallControlOperationRequestMap,
} from "./full-api.generated/client/call-control-chunk.generated.js";
import {
  createZoomContactCenterFullApiCampaignsGeneratedClient,
  ZoomContactCenterFullApiCampaignsGeneratedFunctionNames,
  type ZoomContactCenterFullApiCampaignsGeneratedClient,
  type ZoomContactCenterFullApiCampaignsOperationPathParamMap,
  type ZoomContactCenterFullApiCampaignsOperationRequestMap,
} from "./full-api.generated/client/campaigns-chunk.generated.js";
import {
  createZoomContactCenterFullApiDispositionsGeneratedClient,
  ZoomContactCenterFullApiDispositionsGeneratedFunctionNames,
  type ZoomContactCenterFullApiDispositionsGeneratedClient,
  type ZoomContactCenterFullApiDispositionsOperationPathParamMap,
  type ZoomContactCenterFullApiDispositionsOperationRequestMap,
} from "./full-api.generated/client/dispositions-chunk.generated.js";
import {
  createZoomContactCenterFullApiEngagementsGeneratedClient,
  ZoomContactCenterFullApiEngagementsGeneratedFunctionNames,
  type ZoomContactCenterFullApiEngagementsGeneratedClient,
  type ZoomContactCenterFullApiEngagementsOperationPathParamMap,
  type ZoomContactCenterFullApiEngagementsOperationRequestMap,
} from "./full-api.generated/client/engagements-chunk.generated.js";
import {
  createZoomContactCenterFullApiFlowsGeneratedClient,
  ZoomContactCenterFullApiFlowsGeneratedFunctionNames,
  type ZoomContactCenterFullApiFlowsGeneratedClient,
  type ZoomContactCenterFullApiFlowsOperationPathParamMap,
  type ZoomContactCenterFullApiFlowsOperationRequestMap,
} from "./full-api.generated/client/flows-chunk.generated.js";
import {
  createZoomContactCenterFullApiFollowUpTasksGeneratedClient,
  ZoomContactCenterFullApiFollowUpTasksGeneratedFunctionNames,
  type ZoomContactCenterFullApiFollowUpTasksGeneratedClient,
  type ZoomContactCenterFullApiFollowUpTasksOperationPathParamMap,
  type ZoomContactCenterFullApiFollowUpTasksOperationRequestMap,
} from "./full-api.generated/client/follow-up-tasks-chunk.generated.js";
import {
  createZoomContactCenterFullApiInboxesGeneratedClient,
  ZoomContactCenterFullApiInboxesGeneratedFunctionNames,
  type ZoomContactCenterFullApiInboxesGeneratedClient,
  type ZoomContactCenterFullApiInboxesOperationPathParamMap,
  type ZoomContactCenterFullApiInboxesOperationRequestMap,
} from "./full-api.generated/client/inboxes-chunk.generated.js";
import {
  createZoomContactCenterFullApiLogsGeneratedClient,
  ZoomContactCenterFullApiLogsGeneratedFunctionNames,
  type ZoomContactCenterFullApiLogsGeneratedClient,
  type ZoomContactCenterFullApiLogsOperationPathParamMap,
  type ZoomContactCenterFullApiLogsOperationRequestMap,
} from "./full-api.generated/client/logs-chunk.generated.js";
import {
  createZoomContactCenterFullApiMessagingGeneratedClient,
  ZoomContactCenterFullApiMessagingGeneratedFunctionNames,
  type ZoomContactCenterFullApiMessagingGeneratedClient,
  type ZoomContactCenterFullApiMessagingOperationPathParamMap,
  type ZoomContactCenterFullApiMessagingOperationRequestMap,
} from "./full-api.generated/client/messaging-chunk.generated.js";
import {
  createZoomContactCenterFullApiNotesGeneratedClient,
  ZoomContactCenterFullApiNotesGeneratedFunctionNames,
  type ZoomContactCenterFullApiNotesGeneratedClient,
  type ZoomContactCenterFullApiNotesOperationPathParamMap,
  type ZoomContactCenterFullApiNotesOperationRequestMap,
} from "./full-api.generated/client/notes-chunk.generated.js";
import {
  createZoomContactCenterFullApiOperatingHoursGeneratedClient,
  ZoomContactCenterFullApiOperatingHoursGeneratedFunctionNames,
  type ZoomContactCenterFullApiOperatingHoursGeneratedClient,
  type ZoomContactCenterFullApiOperatingHoursOperationPathParamMap,
  type ZoomContactCenterFullApiOperatingHoursOperationRequestMap,
} from "./full-api.generated/client/operating-hours-chunk.generated.js";
import {
  createZoomContactCenterFullApiQueuesGeneratedClient,
  ZoomContactCenterFullApiQueuesGeneratedFunctionNames,
  type ZoomContactCenterFullApiQueuesGeneratedClient,
  type ZoomContactCenterFullApiQueuesOperationPathParamMap,
  type ZoomContactCenterFullApiQueuesOperationRequestMap,
} from "./full-api.generated/client/queues-chunk.generated.js";
import {
  createZoomContactCenterFullApiRecordingsGeneratedClient,
  ZoomContactCenterFullApiRecordingsGeneratedFunctionNames,
  type ZoomContactCenterFullApiRecordingsGeneratedClient,
  type ZoomContactCenterFullApiRecordingsOperationPathParamMap,
  type ZoomContactCenterFullApiRecordingsOperationRequestMap,
} from "./full-api.generated/client/recordings-chunk.generated.js";
import {
  createZoomContactCenterFullApiRegionsGeneratedClient,
  ZoomContactCenterFullApiRegionsGeneratedFunctionNames,
  type ZoomContactCenterFullApiRegionsGeneratedClient,
  type ZoomContactCenterFullApiRegionsOperationPathParamMap,
  type ZoomContactCenterFullApiRegionsOperationRequestMap,
} from "./full-api.generated/client/regions-chunk.generated.js";
import {
  createZoomContactCenterFullApiReportsV1LegacyGeneratedClient,
  ZoomContactCenterFullApiReportsV1LegacyGeneratedFunctionNames,
  type ZoomContactCenterFullApiReportsV1LegacyGeneratedClient,
  type ZoomContactCenterFullApiReportsV1LegacyOperationPathParamMap,
  type ZoomContactCenterFullApiReportsV1LegacyOperationRequestMap,
} from "./full-api.generated/client/reports-v1-legacy-chunk.generated.js";
import {
  createZoomContactCenterFullApiReportsV2CXAnalyticsGeneratedClient,
  ZoomContactCenterFullApiReportsV2CXAnalyticsGeneratedFunctionNames,
  type ZoomContactCenterFullApiReportsV2CXAnalyticsGeneratedClient,
  type ZoomContactCenterFullApiReportsV2CXAnalyticsOperationPathParamMap,
  type ZoomContactCenterFullApiReportsV2CXAnalyticsOperationRequestMap,
} from "./full-api.generated/client/reports-v2-cx-analytics-chunk.generated.js";
import {
  createZoomContactCenterFullApiRolesGeneratedClient,
  ZoomContactCenterFullApiRolesGeneratedFunctionNames,
  type ZoomContactCenterFullApiRolesGeneratedClient,
  type ZoomContactCenterFullApiRolesOperationPathParamMap,
  type ZoomContactCenterFullApiRolesOperationRequestMap,
} from "./full-api.generated/client/roles-chunk.generated.js";
import {
  createZoomContactCenterFullApiRoutingProfilesGeneratedClient,
  ZoomContactCenterFullApiRoutingProfilesGeneratedFunctionNames,
  type ZoomContactCenterFullApiRoutingProfilesGeneratedClient,
  type ZoomContactCenterFullApiRoutingProfilesOperationPathParamMap,
  type ZoomContactCenterFullApiRoutingProfilesOperationRequestMap,
} from "./full-api.generated/client/routing-profiles-chunk.generated.js";
import {
  createZoomContactCenterFullApiRTMSGeneratedClient,
  ZoomContactCenterFullApiRTMSGeneratedFunctionNames,
  type ZoomContactCenterFullApiRTMSGeneratedClient,
  type ZoomContactCenterFullApiRTMSOperationPathParamMap,
  type ZoomContactCenterFullApiRTMSOperationRequestMap,
} from "./full-api.generated/client/rtms-chunk.generated.js";
import {
  createZoomContactCenterFullApiSkillsGeneratedClient,
  ZoomContactCenterFullApiSkillsGeneratedFunctionNames,
  type ZoomContactCenterFullApiSkillsGeneratedClient,
  type ZoomContactCenterFullApiSkillsOperationPathParamMap,
  type ZoomContactCenterFullApiSkillsOperationRequestMap,
} from "./full-api.generated/client/skills-chunk.generated.js";
import {
  createZoomContactCenterFullApiSMSGeneratedClient,
  ZoomContactCenterFullApiSMSGeneratedFunctionNames,
  type ZoomContactCenterFullApiSMSGeneratedClient,
  type ZoomContactCenterFullApiSMSOperationPathParamMap,
  type ZoomContactCenterFullApiSMSOperationRequestMap,
} from "./full-api.generated/client/sms-chunk.generated.js";
import {
  createZoomContactCenterFullApiTeamsGeneratedClient,
  ZoomContactCenterFullApiTeamsGeneratedFunctionNames,
  type ZoomContactCenterFullApiTeamsGeneratedClient,
  type ZoomContactCenterFullApiTeamsOperationPathParamMap,
  type ZoomContactCenterFullApiTeamsOperationRequestMap,
} from "./full-api.generated/client/teams-chunk.generated.js";
import {
  createZoomContactCenterFullApiUsersGeneratedClient,
  ZoomContactCenterFullApiUsersGeneratedFunctionNames,
  type ZoomContactCenterFullApiUsersGeneratedClient,
  type ZoomContactCenterFullApiUsersOperationPathParamMap,
  type ZoomContactCenterFullApiUsersOperationRequestMap,
} from "./full-api.generated/client/users-chunk.generated.js";
import {
  createZoomContactCenterFullApiVariablesGeneratedClient,
  ZoomContactCenterFullApiVariablesGeneratedFunctionNames,
  type ZoomContactCenterFullApiVariablesGeneratedClient,
  type ZoomContactCenterFullApiVariablesOperationPathParamMap,
  type ZoomContactCenterFullApiVariablesOperationRequestMap,
} from "./full-api.generated/client/variables-chunk.generated.js";

export type ZoomContactCenterFullApiPathParamValue = string | number;
export interface ZoomContactCenterFullApiOperationPathParamMap extends ZoomContactCenterFullApiAddressBooksOperationPathParamMap, ZoomContactCenterFullApiAgentStatusesOperationPathParamMap, ZoomContactCenterFullApiAssetLibraryOperationPathParamMap, ZoomContactCenterFullApiBlockListRulesOperationPathParamMap, ZoomContactCenterFullApiCallControlOperationPathParamMap, ZoomContactCenterFullApiCampaignsOperationPathParamMap, ZoomContactCenterFullApiDispositionsOperationPathParamMap, ZoomContactCenterFullApiEngagementsOperationPathParamMap, ZoomContactCenterFullApiFlowsOperationPathParamMap, ZoomContactCenterFullApiFollowUpTasksOperationPathParamMap, ZoomContactCenterFullApiInboxesOperationPathParamMap, ZoomContactCenterFullApiLogsOperationPathParamMap, ZoomContactCenterFullApiMessagingOperationPathParamMap, ZoomContactCenterFullApiNotesOperationPathParamMap, ZoomContactCenterFullApiOperatingHoursOperationPathParamMap, ZoomContactCenterFullApiQueuesOperationPathParamMap, ZoomContactCenterFullApiRecordingsOperationPathParamMap, ZoomContactCenterFullApiRegionsOperationPathParamMap, ZoomContactCenterFullApiReportsV1LegacyOperationPathParamMap, ZoomContactCenterFullApiReportsV2CXAnalyticsOperationPathParamMap, ZoomContactCenterFullApiRolesOperationPathParamMap, ZoomContactCenterFullApiRoutingProfilesOperationPathParamMap, ZoomContactCenterFullApiRTMSOperationPathParamMap, ZoomContactCenterFullApiSkillsOperationPathParamMap, ZoomContactCenterFullApiSMSOperationPathParamMap, ZoomContactCenterFullApiTeamsOperationPathParamMap, ZoomContactCenterFullApiUsersOperationPathParamMap, ZoomContactCenterFullApiVariablesOperationPathParamMap {}

export type ZoomContactCenterFullApiOperationKey = keyof ZoomContactCenterFullApiOperationPathParamMap & string;

export type ZoomContactCenterFullApiOperationQueryInput<OperationKey extends ZoomContactCenterFullApiOperationKey> =
  ZoomContactCenterFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: ZoomContactCenterFullApiOperationQueryMap[OperationKey] }
    : { query?: ZoomContactCenterFullApiOperationQueryMap[OperationKey] };

export type ZoomContactCenterFullApiOperationBodyInput<OperationKey extends ZoomContactCenterFullApiOperationKey> =
  [ZoomContactCenterFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : ZoomContactCenterFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: ZoomContactCenterFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: ZoomContactCenterFullApiOperationRequestBodyMap[OperationKey] };

export type ZoomContactCenterFullApiOperationInput<OperationKey extends ZoomContactCenterFullApiOperationKey> = Omit<ZoomContactCenterOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends ZoomContactCenterFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: ZoomContactCenterFullApiOperationPathParamMap[OperationKey] }
) & ZoomContactCenterFullApiOperationQueryInput<OperationKey> & ZoomContactCenterFullApiOperationBodyInput<OperationKey>;

export interface ZoomContactCenterFullApiOperationRequestMap extends ZoomContactCenterFullApiAddressBooksOperationRequestMap, ZoomContactCenterFullApiAgentStatusesOperationRequestMap, ZoomContactCenterFullApiAssetLibraryOperationRequestMap, ZoomContactCenterFullApiBlockListRulesOperationRequestMap, ZoomContactCenterFullApiCallControlOperationRequestMap, ZoomContactCenterFullApiCampaignsOperationRequestMap, ZoomContactCenterFullApiDispositionsOperationRequestMap, ZoomContactCenterFullApiEngagementsOperationRequestMap, ZoomContactCenterFullApiFlowsOperationRequestMap, ZoomContactCenterFullApiFollowUpTasksOperationRequestMap, ZoomContactCenterFullApiInboxesOperationRequestMap, ZoomContactCenterFullApiLogsOperationRequestMap, ZoomContactCenterFullApiMessagingOperationRequestMap, ZoomContactCenterFullApiNotesOperationRequestMap, ZoomContactCenterFullApiOperatingHoursOperationRequestMap, ZoomContactCenterFullApiQueuesOperationRequestMap, ZoomContactCenterFullApiRecordingsOperationRequestMap, ZoomContactCenterFullApiRegionsOperationRequestMap, ZoomContactCenterFullApiReportsV1LegacyOperationRequestMap, ZoomContactCenterFullApiReportsV2CXAnalyticsOperationRequestMap, ZoomContactCenterFullApiRolesOperationRequestMap, ZoomContactCenterFullApiRoutingProfilesOperationRequestMap, ZoomContactCenterFullApiRTMSOperationRequestMap, ZoomContactCenterFullApiSkillsOperationRequestMap, ZoomContactCenterFullApiSMSOperationRequestMap, ZoomContactCenterFullApiTeamsOperationRequestMap, ZoomContactCenterFullApiUsersOperationRequestMap, ZoomContactCenterFullApiVariablesOperationRequestMap {}

export type ZoomContactCenterFullApiOperationArgs<OperationKey extends ZoomContactCenterFullApiOperationKey> = {} extends ZoomContactCenterFullApiOperationPathParamMap[OperationKey]
  ? [input?: ZoomContactCenterFullApiOperationRequestMap[OperationKey]]
  : [input: ZoomContactCenterFullApiOperationRequestMap[OperationKey]];

export type ZoomContactCenterGeneratedOperationCaller = <OperationKey extends ZoomContactCenterFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: ZoomContactCenterFullApiOperationArgs<OperationKey>
) => Promise<ZoomContactCenterFullApiOperationResponseMap[OperationKey]>;

export interface ZoomContactCenterFullApiGeneratedClient extends ZoomContactCenterFullApiAddressBooksGeneratedClient, ZoomContactCenterFullApiAgentStatusesGeneratedClient, ZoomContactCenterFullApiAssetLibraryGeneratedClient, ZoomContactCenterFullApiBlockListRulesGeneratedClient, ZoomContactCenterFullApiCallControlGeneratedClient, ZoomContactCenterFullApiCampaignsGeneratedClient, ZoomContactCenterFullApiDispositionsGeneratedClient, ZoomContactCenterFullApiEngagementsGeneratedClient, ZoomContactCenterFullApiFlowsGeneratedClient, ZoomContactCenterFullApiFollowUpTasksGeneratedClient, ZoomContactCenterFullApiInboxesGeneratedClient, ZoomContactCenterFullApiLogsGeneratedClient, ZoomContactCenterFullApiMessagingGeneratedClient, ZoomContactCenterFullApiNotesGeneratedClient, ZoomContactCenterFullApiOperatingHoursGeneratedClient, ZoomContactCenterFullApiQueuesGeneratedClient, ZoomContactCenterFullApiRecordingsGeneratedClient, ZoomContactCenterFullApiRegionsGeneratedClient, ZoomContactCenterFullApiReportsV1LegacyGeneratedClient, ZoomContactCenterFullApiReportsV2CXAnalyticsGeneratedClient, ZoomContactCenterFullApiRolesGeneratedClient, ZoomContactCenterFullApiRoutingProfilesGeneratedClient, ZoomContactCenterFullApiRTMSGeneratedClient, ZoomContactCenterFullApiSkillsGeneratedClient, ZoomContactCenterFullApiSMSGeneratedClient, ZoomContactCenterFullApiTeamsGeneratedClient, ZoomContactCenterFullApiUsersGeneratedClient, ZoomContactCenterFullApiVariablesGeneratedClient {}

export const ZOOM_CONTACT_CENTER_FULL_API_GENERATED_FUNCTION_COUNT = 312 as const;
export const ZOOM_CONTACT_CENTER_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...ZoomContactCenterFullApiAddressBooksGeneratedFunctionNames,
  ...ZoomContactCenterFullApiAgentStatusesGeneratedFunctionNames,
  ...ZoomContactCenterFullApiAssetLibraryGeneratedFunctionNames,
  ...ZoomContactCenterFullApiBlockListRulesGeneratedFunctionNames,
  ...ZoomContactCenterFullApiCallControlGeneratedFunctionNames,
  ...ZoomContactCenterFullApiCampaignsGeneratedFunctionNames,
  ...ZoomContactCenterFullApiDispositionsGeneratedFunctionNames,
  ...ZoomContactCenterFullApiEngagementsGeneratedFunctionNames,
  ...ZoomContactCenterFullApiFlowsGeneratedFunctionNames,
  ...ZoomContactCenterFullApiFollowUpTasksGeneratedFunctionNames,
  ...ZoomContactCenterFullApiInboxesGeneratedFunctionNames,
  ...ZoomContactCenterFullApiLogsGeneratedFunctionNames,
  ...ZoomContactCenterFullApiMessagingGeneratedFunctionNames,
  ...ZoomContactCenterFullApiNotesGeneratedFunctionNames,
  ...ZoomContactCenterFullApiOperatingHoursGeneratedFunctionNames,
  ...ZoomContactCenterFullApiQueuesGeneratedFunctionNames,
  ...ZoomContactCenterFullApiRecordingsGeneratedFunctionNames,
  ...ZoomContactCenterFullApiRegionsGeneratedFunctionNames,
  ...ZoomContactCenterFullApiReportsV1LegacyGeneratedFunctionNames,
  ...ZoomContactCenterFullApiReportsV2CXAnalyticsGeneratedFunctionNames,
  ...ZoomContactCenterFullApiRolesGeneratedFunctionNames,
  ...ZoomContactCenterFullApiRoutingProfilesGeneratedFunctionNames,
  ...ZoomContactCenterFullApiRTMSGeneratedFunctionNames,
  ...ZoomContactCenterFullApiSkillsGeneratedFunctionNames,
  ...ZoomContactCenterFullApiSMSGeneratedFunctionNames,
  ...ZoomContactCenterFullApiTeamsGeneratedFunctionNames,
  ...ZoomContactCenterFullApiUsersGeneratedFunctionNames,
  ...ZoomContactCenterFullApiVariablesGeneratedFunctionNames,
] as const satisfies readonly (keyof ZoomContactCenterFullApiGeneratedClient)[];

export function createZoomContactCenterFullApiGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiGeneratedClient {
  return Object.assign(
    {},
    createZoomContactCenterFullApiAddressBooksGeneratedClient(callOperation),
    createZoomContactCenterFullApiAgentStatusesGeneratedClient(callOperation),
    createZoomContactCenterFullApiAssetLibraryGeneratedClient(callOperation),
    createZoomContactCenterFullApiBlockListRulesGeneratedClient(callOperation),
    createZoomContactCenterFullApiCallControlGeneratedClient(callOperation),
    createZoomContactCenterFullApiCampaignsGeneratedClient(callOperation),
    createZoomContactCenterFullApiDispositionsGeneratedClient(callOperation),
    createZoomContactCenterFullApiEngagementsGeneratedClient(callOperation),
    createZoomContactCenterFullApiFlowsGeneratedClient(callOperation),
    createZoomContactCenterFullApiFollowUpTasksGeneratedClient(callOperation),
    createZoomContactCenterFullApiInboxesGeneratedClient(callOperation),
    createZoomContactCenterFullApiLogsGeneratedClient(callOperation),
    createZoomContactCenterFullApiMessagingGeneratedClient(callOperation),
    createZoomContactCenterFullApiNotesGeneratedClient(callOperation),
    createZoomContactCenterFullApiOperatingHoursGeneratedClient(callOperation),
    createZoomContactCenterFullApiQueuesGeneratedClient(callOperation),
    createZoomContactCenterFullApiRecordingsGeneratedClient(callOperation),
    createZoomContactCenterFullApiRegionsGeneratedClient(callOperation),
    createZoomContactCenterFullApiReportsV1LegacyGeneratedClient(callOperation),
    createZoomContactCenterFullApiReportsV2CXAnalyticsGeneratedClient(callOperation),
    createZoomContactCenterFullApiRolesGeneratedClient(callOperation),
    createZoomContactCenterFullApiRoutingProfilesGeneratedClient(callOperation),
    createZoomContactCenterFullApiRTMSGeneratedClient(callOperation),
    createZoomContactCenterFullApiSkillsGeneratedClient(callOperation),
    createZoomContactCenterFullApiSMSGeneratedClient(callOperation),
    createZoomContactCenterFullApiTeamsGeneratedClient(callOperation),
    createZoomContactCenterFullApiUsersGeneratedClient(callOperation),
    createZoomContactCenterFullApiVariablesGeneratedClient(callOperation),
  ) as ZoomContactCenterFullApiGeneratedClient;
}
