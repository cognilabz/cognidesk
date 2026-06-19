// Generated from the RingCentral RingCX Voice OpenAPI spec (https://raw.githubusercontent.com/ringcentral/engage-voice-api-docs/main/specs/engage-voice_openapi3.json).
// Do not edit by hand; run scripts/generate-ringcentral-voice-api.mjs after checking upstream docs.

import type { RingCentralOperationRequestInput } from "./index.js";
import type {
  RingCentralVoiceApiOperationQueryMap,
  RingCentralVoiceApiOperationQueryRequiredMap,
  RingCentralVoiceApiOperationRequestBodyMap,
  RingCentralVoiceApiOperationRequestBodyRequiredMap,
  RingCentralVoiceApiOperationResponseMap,
} from "./voice-api-schema-types.generated.js";
import {
  createRingCentralVoiceApiActiveCallsGeneratedClient,
  RingCentralVoiceApiActiveCallsGeneratedFunctionNames,
  type RingCentralVoiceApiActiveCallsGeneratedClient,
  type RingCentralVoiceApiActiveCallsOperationPathParamMap,
  type RingCentralVoiceApiActiveCallsOperationRequestMap,
} from "./voice-api.generated/client/active-calls-chunk.generated.js";
import {
  createRingCentralVoiceApiAgentAccessGeneratedClient,
  RingCentralVoiceApiAgentAccessGeneratedFunctionNames,
  type RingCentralVoiceApiAgentAccessGeneratedClient,
  type RingCentralVoiceApiAgentAccessOperationPathParamMap,
  type RingCentralVoiceApiAgentAccessOperationRequestMap,
} from "./voice-api.generated/client/agent-access-chunk.generated.js";
import {
  createRingCentralVoiceApiAgentGroupsGeneratedClient,
  RingCentralVoiceApiAgentGroupsGeneratedFunctionNames,
  type RingCentralVoiceApiAgentGroupsGeneratedClient,
  type RingCentralVoiceApiAgentGroupsOperationPathParamMap,
  type RingCentralVoiceApiAgentGroupsOperationRequestMap,
} from "./voice-api.generated/client/agent-groups-chunk.generated.js";
import {
  createRingCentralVoiceApiAgentsGeneratedClient,
  RingCentralVoiceApiAgentsGeneratedFunctionNames,
  type RingCentralVoiceApiAgentsGeneratedClient,
  type RingCentralVoiceApiAgentsOperationPathParamMap,
  type RingCentralVoiceApiAgentsOperationRequestMap,
} from "./voice-api.generated/client/agents-chunk.generated.js";
import {
  createRingCentralVoiceApiAudioStreamingGeneratedClient,
  RingCentralVoiceApiAudioStreamingGeneratedFunctionNames,
  type RingCentralVoiceApiAudioStreamingGeneratedClient,
  type RingCentralVoiceApiAudioStreamingOperationPathParamMap,
  type RingCentralVoiceApiAudioStreamingOperationRequestMap,
} from "./voice-api.generated/client/audio-streaming-chunk.generated.js";
import {
  createRingCentralVoiceApiAuditLogsGeneratedClient,
  RingCentralVoiceApiAuditLogsGeneratedFunctionNames,
  type RingCentralVoiceApiAuditLogsGeneratedClient,
  type RingCentralVoiceApiAuditLogsOperationPathParamMap,
  type RingCentralVoiceApiAuditLogsOperationRequestMap,
} from "./voice-api.generated/client/audit-logs-chunk.generated.js";
import {
  createRingCentralVoiceApiCampaignsGeneratedClient,
  RingCentralVoiceApiCampaignsGeneratedFunctionNames,
  type RingCentralVoiceApiCampaignsGeneratedClient,
  type RingCentralVoiceApiCampaignsOperationPathParamMap,
  type RingCentralVoiceApiCampaignsOperationRequestMap,
} from "./voice-api.generated/client/campaigns-chunk.generated.js";
import {
  createRingCentralVoiceApiCountriesGeneratedClient,
  RingCentralVoiceApiCountriesGeneratedFunctionNames,
  type RingCentralVoiceApiCountriesGeneratedClient,
  type RingCentralVoiceApiCountriesOperationPathParamMap,
  type RingCentralVoiceApiCountriesOperationRequestMap,
} from "./voice-api.generated/client/countries-chunk.generated.js";
import {
  createRingCentralVoiceApiDialGroupsGeneratedClient,
  RingCentralVoiceApiDialGroupsGeneratedFunctionNames,
  type RingCentralVoiceApiDialGroupsGeneratedClient,
  type RingCentralVoiceApiDialGroupsOperationPathParamMap,
  type RingCentralVoiceApiDialGroupsOperationRequestMap,
} from "./voice-api.generated/client/dial-groups-chunk.generated.js";
import {
  createRingCentralVoiceApiIntegrationAccountControllerGeneratedClient,
  RingCentralVoiceApiIntegrationAccountControllerGeneratedFunctionNames,
  type RingCentralVoiceApiIntegrationAccountControllerGeneratedClient,
  type RingCentralVoiceApiIntegrationAccountControllerOperationPathParamMap,
  type RingCentralVoiceApiIntegrationAccountControllerOperationRequestMap,
} from "./voice-api.generated/client/integration-account-controller-chunk.generated.js";
import {
  createRingCentralVoiceApiIntegrationAgentControllerGeneratedClient,
  RingCentralVoiceApiIntegrationAgentControllerGeneratedFunctionNames,
  type RingCentralVoiceApiIntegrationAgentControllerGeneratedClient,
  type RingCentralVoiceApiIntegrationAgentControllerOperationPathParamMap,
  type RingCentralVoiceApiIntegrationAgentControllerOperationRequestMap,
} from "./voice-api.generated/client/integration-agent-controller-chunk.generated.js";
import {
  createRingCentralVoiceApiIntegrationAgentGroupControllerGeneratedClient,
  RingCentralVoiceApiIntegrationAgentGroupControllerGeneratedFunctionNames,
  type RingCentralVoiceApiIntegrationAgentGroupControllerGeneratedClient,
  type RingCentralVoiceApiIntegrationAgentGroupControllerOperationPathParamMap,
  type RingCentralVoiceApiIntegrationAgentGroupControllerOperationRequestMap,
} from "./voice-api.generated/client/integration-agent-group-controller-chunk.generated.js";
import {
  createRingCentralVoiceApiIntegrationUserControllerGeneratedClient,
  RingCentralVoiceApiIntegrationUserControllerGeneratedFunctionNames,
  type RingCentralVoiceApiIntegrationUserControllerGeneratedClient,
  type RingCentralVoiceApiIntegrationUserControllerOperationPathParamMap,
  type RingCentralVoiceApiIntegrationUserControllerOperationRequestMap,
} from "./voice-api.generated/client/integration-user-controller-chunk.generated.js";
import {
  createRingCentralVoiceApiLeadsGeneratedClient,
  RingCentralVoiceApiLeadsGeneratedFunctionNames,
  type RingCentralVoiceApiLeadsGeneratedClient,
  type RingCentralVoiceApiLeadsOperationPathParamMap,
  type RingCentralVoiceApiLeadsOperationRequestMap,
} from "./voice-api.generated/client/leads-chunk.generated.js";
import {
  createRingCentralVoiceApiLegacyAuthGeneratedClient,
  RingCentralVoiceApiLegacyAuthGeneratedFunctionNames,
  type RingCentralVoiceApiLegacyAuthGeneratedClient,
  type RingCentralVoiceApiLegacyAuthOperationPathParamMap,
  type RingCentralVoiceApiLegacyAuthOperationRequestMap,
} from "./voice-api.generated/client/legacy-auth-chunk.generated.js";
import {
  createRingCentralVoiceApiNumberManagementGeneratedClient,
  RingCentralVoiceApiNumberManagementGeneratedFunctionNames,
  type RingCentralVoiceApiNumberManagementGeneratedClient,
  type RingCentralVoiceApiNumberManagementOperationPathParamMap,
  type RingCentralVoiceApiNumberManagementOperationRequestMap,
} from "./voice-api.generated/client/number-management-chunk.generated.js";
import {
  createRingCentralVoiceApiOutboundGeneratedClient,
  RingCentralVoiceApiOutboundGeneratedFunctionNames,
  type RingCentralVoiceApiOutboundGeneratedClient,
  type RingCentralVoiceApiOutboundOperationPathParamMap,
  type RingCentralVoiceApiOutboundOperationRequestMap,
} from "./voice-api.generated/client/outbound-chunk.generated.js";
import {
  createRingCentralVoiceApiPublicIntegrationAPIGeneratedClient,
  RingCentralVoiceApiPublicIntegrationAPIGeneratedFunctionNames,
  type RingCentralVoiceApiPublicIntegrationAPIGeneratedClient,
  type RingCentralVoiceApiPublicIntegrationAPIOperationPathParamMap,
  type RingCentralVoiceApiPublicIntegrationAPIOperationRequestMap,
} from "./voice-api.generated/client/public-integration-api-chunk.generated.js";
import {
  createRingCentralVoiceApiQueueDispositionsGeneratedClient,
  RingCentralVoiceApiQueueDispositionsGeneratedFunctionNames,
  type RingCentralVoiceApiQueueDispositionsGeneratedClient,
  type RingCentralVoiceApiQueueDispositionsOperationPathParamMap,
  type RingCentralVoiceApiQueueDispositionsOperationRequestMap,
} from "./voice-api.generated/client/queue-dispositions-chunk.generated.js";
import {
  createRingCentralVoiceApiQueueEventsGeneratedClient,
  RingCentralVoiceApiQueueEventsGeneratedFunctionNames,
  type RingCentralVoiceApiQueueEventsGeneratedClient,
  type RingCentralVoiceApiQueueEventsOperationPathParamMap,
  type RingCentralVoiceApiQueueEventsOperationRequestMap,
} from "./voice-api.generated/client/queue-events-chunk.generated.js";
import {
  createRingCentralVoiceApiQueueGroupsGeneratedClient,
  RingCentralVoiceApiQueueGroupsGeneratedFunctionNames,
  type RingCentralVoiceApiQueueGroupsGeneratedClient,
  type RingCentralVoiceApiQueueGroupsOperationPathParamMap,
  type RingCentralVoiceApiQueueGroupsOperationRequestMap,
} from "./voice-api.generated/client/queue-groups-chunk.generated.js";
import {
  createRingCentralVoiceApiQueuePhoneBookGeneratedClient,
  RingCentralVoiceApiQueuePhoneBookGeneratedFunctionNames,
  type RingCentralVoiceApiQueuePhoneBookGeneratedClient,
  type RingCentralVoiceApiQueuePhoneBookOperationPathParamMap,
  type RingCentralVoiceApiQueuePhoneBookOperationRequestMap,
} from "./voice-api.generated/client/queue-phone-book-chunk.generated.js";
import {
  createRingCentralVoiceApiQueueScheduleGeneratedClient,
  RingCentralVoiceApiQueueScheduleGeneratedFunctionNames,
  type RingCentralVoiceApiQueueScheduleGeneratedClient,
  type RingCentralVoiceApiQueueScheduleOperationPathParamMap,
  type RingCentralVoiceApiQueueScheduleOperationRequestMap,
} from "./voice-api.generated/client/queue-schedule-chunk.generated.js";
import {
  createRingCentralVoiceApiQueueSkillsGeneratedClient,
  RingCentralVoiceApiQueueSkillsGeneratedFunctionNames,
  type RingCentralVoiceApiQueueSkillsGeneratedClient,
  type RingCentralVoiceApiQueueSkillsOperationPathParamMap,
  type RingCentralVoiceApiQueueSkillsOperationRequestMap,
} from "./voice-api.generated/client/queue-skills-chunk.generated.js";
import {
  createRingCentralVoiceApiQueueSpecialANIGeneratedClient,
  RingCentralVoiceApiQueueSpecialANIGeneratedFunctionNames,
  type RingCentralVoiceApiQueueSpecialANIGeneratedClient,
  type RingCentralVoiceApiQueueSpecialANIOperationPathParamMap,
  type RingCentralVoiceApiQueueSpecialANIOperationRequestMap,
} from "./voice-api.generated/client/queue-special-ani-chunk.generated.js";
import {
  createRingCentralVoiceApiQueuesGeneratedClient,
  RingCentralVoiceApiQueuesGeneratedFunctionNames,
  type RingCentralVoiceApiQueuesGeneratedClient,
  type RingCentralVoiceApiQueuesOperationPathParamMap,
  type RingCentralVoiceApiQueuesOperationRequestMap,
} from "./voice-api.generated/client/queues-chunk.generated.js";
import {
  createRingCentralVoiceApiReportingGeneratedClient,
  RingCentralVoiceApiReportingGeneratedFunctionNames,
  type RingCentralVoiceApiReportingGeneratedClient,
  type RingCentralVoiceApiReportingOperationPathParamMap,
  type RingCentralVoiceApiReportingOperationRequestMap,
} from "./voice-api.generated/client/reporting-chunk.generated.js";
import {
  createRingCentralVoiceApiRequeueShortcutsGeneratedClient,
  RingCentralVoiceApiRequeueShortcutsGeneratedFunctionNames,
  type RingCentralVoiceApiRequeueShortcutsGeneratedClient,
  type RingCentralVoiceApiRequeueShortcutsOperationPathParamMap,
  type RingCentralVoiceApiRequeueShortcutsOperationRequestMap,
} from "./voice-api.generated/client/requeue-shortcuts-chunk.generated.js";
import {
  createRingCentralVoiceApiRingCentralAuthGeneratedClient,
  RingCentralVoiceApiRingCentralAuthGeneratedFunctionNames,
  type RingCentralVoiceApiRingCentralAuthGeneratedClient,
  type RingCentralVoiceApiRingCentralAuthOperationPathParamMap,
  type RingCentralVoiceApiRingCentralAuthOperationRequestMap,
} from "./voice-api.generated/client/ring-central-auth-chunk.generated.js";
import {
  createRingCentralVoiceApiUsersGeneratedClient,
  RingCentralVoiceApiUsersGeneratedFunctionNames,
  type RingCentralVoiceApiUsersGeneratedClient,
  type RingCentralVoiceApiUsersOperationPathParamMap,
  type RingCentralVoiceApiUsersOperationRequestMap,
} from "./voice-api.generated/client/users-chunk.generated.js";

export type RingCentralVoiceApiPathParamValue = string | number;
export interface RingCentralVoiceApiOperationPathParamMap extends RingCentralVoiceApiActiveCallsOperationPathParamMap, RingCentralVoiceApiAgentAccessOperationPathParamMap, RingCentralVoiceApiAgentGroupsOperationPathParamMap, RingCentralVoiceApiAgentsOperationPathParamMap, RingCentralVoiceApiAudioStreamingOperationPathParamMap, RingCentralVoiceApiAuditLogsOperationPathParamMap, RingCentralVoiceApiCampaignsOperationPathParamMap, RingCentralVoiceApiCountriesOperationPathParamMap, RingCentralVoiceApiDialGroupsOperationPathParamMap, RingCentralVoiceApiIntegrationAccountControllerOperationPathParamMap, RingCentralVoiceApiIntegrationAgentControllerOperationPathParamMap, RingCentralVoiceApiIntegrationAgentGroupControllerOperationPathParamMap, RingCentralVoiceApiIntegrationUserControllerOperationPathParamMap, RingCentralVoiceApiLeadsOperationPathParamMap, RingCentralVoiceApiLegacyAuthOperationPathParamMap, RingCentralVoiceApiNumberManagementOperationPathParamMap, RingCentralVoiceApiOutboundOperationPathParamMap, RingCentralVoiceApiPublicIntegrationAPIOperationPathParamMap, RingCentralVoiceApiQueueDispositionsOperationPathParamMap, RingCentralVoiceApiQueueEventsOperationPathParamMap, RingCentralVoiceApiQueueGroupsOperationPathParamMap, RingCentralVoiceApiQueuePhoneBookOperationPathParamMap, RingCentralVoiceApiQueueScheduleOperationPathParamMap, RingCentralVoiceApiQueueSkillsOperationPathParamMap, RingCentralVoiceApiQueueSpecialANIOperationPathParamMap, RingCentralVoiceApiQueuesOperationPathParamMap, RingCentralVoiceApiReportingOperationPathParamMap, RingCentralVoiceApiRequeueShortcutsOperationPathParamMap, RingCentralVoiceApiRingCentralAuthOperationPathParamMap, RingCentralVoiceApiUsersOperationPathParamMap {}

export type RingCentralVoiceApiOperationKey = keyof RingCentralVoiceApiOperationPathParamMap & string;

export type RingCentralVoiceApiOperationQueryInput<OperationKey extends RingCentralVoiceApiOperationKey> =
  RingCentralVoiceApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: RingCentralVoiceApiOperationQueryMap[OperationKey] }
    : { query?: RingCentralVoiceApiOperationQueryMap[OperationKey] };

export type RingCentralVoiceApiOperationBodyInput<OperationKey extends RingCentralVoiceApiOperationKey> =
  [RingCentralVoiceApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : RingCentralVoiceApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: RingCentralVoiceApiOperationRequestBodyMap[OperationKey] }
      : { body?: RingCentralVoiceApiOperationRequestBodyMap[OperationKey] };

export type RingCentralVoiceApiOperationInput<OperationKey extends RingCentralVoiceApiOperationKey> = Omit<RingCentralOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends RingCentralVoiceApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: RingCentralVoiceApiOperationPathParamMap[OperationKey] }
) & RingCentralVoiceApiOperationQueryInput<OperationKey> & RingCentralVoiceApiOperationBodyInput<OperationKey>;

export interface RingCentralVoiceApiOperationRequestMap extends RingCentralVoiceApiActiveCallsOperationRequestMap, RingCentralVoiceApiAgentAccessOperationRequestMap, RingCentralVoiceApiAgentGroupsOperationRequestMap, RingCentralVoiceApiAgentsOperationRequestMap, RingCentralVoiceApiAudioStreamingOperationRequestMap, RingCentralVoiceApiAuditLogsOperationRequestMap, RingCentralVoiceApiCampaignsOperationRequestMap, RingCentralVoiceApiCountriesOperationRequestMap, RingCentralVoiceApiDialGroupsOperationRequestMap, RingCentralVoiceApiIntegrationAccountControllerOperationRequestMap, RingCentralVoiceApiIntegrationAgentControllerOperationRequestMap, RingCentralVoiceApiIntegrationAgentGroupControllerOperationRequestMap, RingCentralVoiceApiIntegrationUserControllerOperationRequestMap, RingCentralVoiceApiLeadsOperationRequestMap, RingCentralVoiceApiLegacyAuthOperationRequestMap, RingCentralVoiceApiNumberManagementOperationRequestMap, RingCentralVoiceApiOutboundOperationRequestMap, RingCentralVoiceApiPublicIntegrationAPIOperationRequestMap, RingCentralVoiceApiQueueDispositionsOperationRequestMap, RingCentralVoiceApiQueueEventsOperationRequestMap, RingCentralVoiceApiQueueGroupsOperationRequestMap, RingCentralVoiceApiQueuePhoneBookOperationRequestMap, RingCentralVoiceApiQueueScheduleOperationRequestMap, RingCentralVoiceApiQueueSkillsOperationRequestMap, RingCentralVoiceApiQueueSpecialANIOperationRequestMap, RingCentralVoiceApiQueuesOperationRequestMap, RingCentralVoiceApiReportingOperationRequestMap, RingCentralVoiceApiRequeueShortcutsOperationRequestMap, RingCentralVoiceApiRingCentralAuthOperationRequestMap, RingCentralVoiceApiUsersOperationRequestMap {}

export type RingCentralVoiceApiOperationArgs<OperationKey extends RingCentralVoiceApiOperationKey> = {} extends RingCentralVoiceApiOperationPathParamMap[OperationKey]
  ? [input?: RingCentralVoiceApiOperationRequestMap[OperationKey]]
  : [input: RingCentralVoiceApiOperationRequestMap[OperationKey]];

export type RingCentralVoiceGeneratedOperationCaller = <OperationKey extends RingCentralVoiceApiOperationKey>(
  operationKey: OperationKey,
  ...args: RingCentralVoiceApiOperationArgs<OperationKey>
) => Promise<RingCentralVoiceApiOperationResponseMap[OperationKey]>;

export interface RingCentralVoiceApiGeneratedClient extends RingCentralVoiceApiActiveCallsGeneratedClient, RingCentralVoiceApiAgentAccessGeneratedClient, RingCentralVoiceApiAgentGroupsGeneratedClient, RingCentralVoiceApiAgentsGeneratedClient, RingCentralVoiceApiAudioStreamingGeneratedClient, RingCentralVoiceApiAuditLogsGeneratedClient, RingCentralVoiceApiCampaignsGeneratedClient, RingCentralVoiceApiCountriesGeneratedClient, RingCentralVoiceApiDialGroupsGeneratedClient, RingCentralVoiceApiIntegrationAccountControllerGeneratedClient, RingCentralVoiceApiIntegrationAgentControllerGeneratedClient, RingCentralVoiceApiIntegrationAgentGroupControllerGeneratedClient, RingCentralVoiceApiIntegrationUserControllerGeneratedClient, RingCentralVoiceApiLeadsGeneratedClient, RingCentralVoiceApiLegacyAuthGeneratedClient, RingCentralVoiceApiNumberManagementGeneratedClient, RingCentralVoiceApiOutboundGeneratedClient, RingCentralVoiceApiPublicIntegrationAPIGeneratedClient, RingCentralVoiceApiQueueDispositionsGeneratedClient, RingCentralVoiceApiQueueEventsGeneratedClient, RingCentralVoiceApiQueueGroupsGeneratedClient, RingCentralVoiceApiQueuePhoneBookGeneratedClient, RingCentralVoiceApiQueueScheduleGeneratedClient, RingCentralVoiceApiQueueSkillsGeneratedClient, RingCentralVoiceApiQueueSpecialANIGeneratedClient, RingCentralVoiceApiQueuesGeneratedClient, RingCentralVoiceApiReportingGeneratedClient, RingCentralVoiceApiRequeueShortcutsGeneratedClient, RingCentralVoiceApiRingCentralAuthGeneratedClient, RingCentralVoiceApiUsersGeneratedClient {}

export const RINGCENTRAL_VOICE_API_GENERATED_FUNCTION_COUNT = 138 as const;
export const RINGCENTRAL_VOICE_API_GENERATED_FUNCTION_NAMES = [
  ...RingCentralVoiceApiActiveCallsGeneratedFunctionNames,
  ...RingCentralVoiceApiAgentAccessGeneratedFunctionNames,
  ...RingCentralVoiceApiAgentGroupsGeneratedFunctionNames,
  ...RingCentralVoiceApiAgentsGeneratedFunctionNames,
  ...RingCentralVoiceApiAudioStreamingGeneratedFunctionNames,
  ...RingCentralVoiceApiAuditLogsGeneratedFunctionNames,
  ...RingCentralVoiceApiCampaignsGeneratedFunctionNames,
  ...RingCentralVoiceApiCountriesGeneratedFunctionNames,
  ...RingCentralVoiceApiDialGroupsGeneratedFunctionNames,
  ...RingCentralVoiceApiIntegrationAccountControllerGeneratedFunctionNames,
  ...RingCentralVoiceApiIntegrationAgentControllerGeneratedFunctionNames,
  ...RingCentralVoiceApiIntegrationAgentGroupControllerGeneratedFunctionNames,
  ...RingCentralVoiceApiIntegrationUserControllerGeneratedFunctionNames,
  ...RingCentralVoiceApiLeadsGeneratedFunctionNames,
  ...RingCentralVoiceApiLegacyAuthGeneratedFunctionNames,
  ...RingCentralVoiceApiNumberManagementGeneratedFunctionNames,
  ...RingCentralVoiceApiOutboundGeneratedFunctionNames,
  ...RingCentralVoiceApiPublicIntegrationAPIGeneratedFunctionNames,
  ...RingCentralVoiceApiQueueDispositionsGeneratedFunctionNames,
  ...RingCentralVoiceApiQueueEventsGeneratedFunctionNames,
  ...RingCentralVoiceApiQueueGroupsGeneratedFunctionNames,
  ...RingCentralVoiceApiQueuePhoneBookGeneratedFunctionNames,
  ...RingCentralVoiceApiQueueScheduleGeneratedFunctionNames,
  ...RingCentralVoiceApiQueueSkillsGeneratedFunctionNames,
  ...RingCentralVoiceApiQueueSpecialANIGeneratedFunctionNames,
  ...RingCentralVoiceApiQueuesGeneratedFunctionNames,
  ...RingCentralVoiceApiReportingGeneratedFunctionNames,
  ...RingCentralVoiceApiRequeueShortcutsGeneratedFunctionNames,
  ...RingCentralVoiceApiRingCentralAuthGeneratedFunctionNames,
  ...RingCentralVoiceApiUsersGeneratedFunctionNames,
] as const satisfies readonly (keyof RingCentralVoiceApiGeneratedClient)[];

export function createRingCentralVoiceApiGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiGeneratedClient {
  return Object.assign(
    {},
    createRingCentralVoiceApiActiveCallsGeneratedClient(callOperation),
    createRingCentralVoiceApiAgentAccessGeneratedClient(callOperation),
    createRingCentralVoiceApiAgentGroupsGeneratedClient(callOperation),
    createRingCentralVoiceApiAgentsGeneratedClient(callOperation),
    createRingCentralVoiceApiAudioStreamingGeneratedClient(callOperation),
    createRingCentralVoiceApiAuditLogsGeneratedClient(callOperation),
    createRingCentralVoiceApiCampaignsGeneratedClient(callOperation),
    createRingCentralVoiceApiCountriesGeneratedClient(callOperation),
    createRingCentralVoiceApiDialGroupsGeneratedClient(callOperation),
    createRingCentralVoiceApiIntegrationAccountControllerGeneratedClient(callOperation),
    createRingCentralVoiceApiIntegrationAgentControllerGeneratedClient(callOperation),
    createRingCentralVoiceApiIntegrationAgentGroupControllerGeneratedClient(callOperation),
    createRingCentralVoiceApiIntegrationUserControllerGeneratedClient(callOperation),
    createRingCentralVoiceApiLeadsGeneratedClient(callOperation),
    createRingCentralVoiceApiLegacyAuthGeneratedClient(callOperation),
    createRingCentralVoiceApiNumberManagementGeneratedClient(callOperation),
    createRingCentralVoiceApiOutboundGeneratedClient(callOperation),
    createRingCentralVoiceApiPublicIntegrationAPIGeneratedClient(callOperation),
    createRingCentralVoiceApiQueueDispositionsGeneratedClient(callOperation),
    createRingCentralVoiceApiQueueEventsGeneratedClient(callOperation),
    createRingCentralVoiceApiQueueGroupsGeneratedClient(callOperation),
    createRingCentralVoiceApiQueuePhoneBookGeneratedClient(callOperation),
    createRingCentralVoiceApiQueueScheduleGeneratedClient(callOperation),
    createRingCentralVoiceApiQueueSkillsGeneratedClient(callOperation),
    createRingCentralVoiceApiQueueSpecialANIGeneratedClient(callOperation),
    createRingCentralVoiceApiQueuesGeneratedClient(callOperation),
    createRingCentralVoiceApiReportingGeneratedClient(callOperation),
    createRingCentralVoiceApiRequeueShortcutsGeneratedClient(callOperation),
    createRingCentralVoiceApiRingCentralAuthGeneratedClient(callOperation),
    createRingCentralVoiceApiUsersGeneratedClient(callOperation),
  ) as RingCentralVoiceApiGeneratedClient;
}
