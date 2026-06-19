// Generated from the archived official Slack Web API Swagger spec (https://raw.githubusercontent.com/slackapi/slack-api-specs/master/web-api/slack_web_openapi_v2.json).
// Do not edit by hand; run scripts/generate-slack-web-api.mjs after checking upstream docs.

import type { SlackOperationRequestInput } from "./index.js";
import type {
  SlackWebApiOperationQueryMap,
  SlackWebApiOperationQueryRequiredMap,
  SlackWebApiOperationRequestBodyMap,
  SlackWebApiOperationRequestBodyRequiredMap,
  SlackWebApiOperationResponseMap,
} from "./web-api-schema-types.generated.js";
import {
  createSlackWebApiAdminAppsGeneratedClient,
  SlackWebApiAdminAppsGeneratedFunctionNames,
  type SlackWebApiAdminAppsGeneratedClient,
  type SlackWebApiAdminAppsOperationPathParamMap,
  type SlackWebApiAdminAppsOperationRequestMap,
} from "./web-api.generated/client/admin-apps-chunk.generated.js";
import {
  createSlackWebApiAdminAppsApprovedGeneratedClient,
  SlackWebApiAdminAppsApprovedGeneratedFunctionNames,
  type SlackWebApiAdminAppsApprovedGeneratedClient,
  type SlackWebApiAdminAppsApprovedOperationPathParamMap,
  type SlackWebApiAdminAppsApprovedOperationRequestMap,
} from "./web-api.generated/client/admin-apps-approved-chunk.generated.js";
import {
  createSlackWebApiAdminAppsRequestsGeneratedClient,
  SlackWebApiAdminAppsRequestsGeneratedFunctionNames,
  type SlackWebApiAdminAppsRequestsGeneratedClient,
  type SlackWebApiAdminAppsRequestsOperationPathParamMap,
  type SlackWebApiAdminAppsRequestsOperationRequestMap,
} from "./web-api.generated/client/admin-apps-requests-chunk.generated.js";
import {
  createSlackWebApiAdminAppsRestrictedGeneratedClient,
  SlackWebApiAdminAppsRestrictedGeneratedFunctionNames,
  type SlackWebApiAdminAppsRestrictedGeneratedClient,
  type SlackWebApiAdminAppsRestrictedOperationPathParamMap,
  type SlackWebApiAdminAppsRestrictedOperationRequestMap,
} from "./web-api.generated/client/admin-apps-restricted-chunk.generated.js";
import {
  createSlackWebApiAdminConversationsGeneratedClient,
  SlackWebApiAdminConversationsGeneratedFunctionNames,
  type SlackWebApiAdminConversationsGeneratedClient,
  type SlackWebApiAdminConversationsOperationPathParamMap,
  type SlackWebApiAdminConversationsOperationRequestMap,
} from "./web-api.generated/client/admin-conversations-chunk.generated.js";
import {
  createSlackWebApiAdminConversationsEkmGeneratedClient,
  SlackWebApiAdminConversationsEkmGeneratedFunctionNames,
  type SlackWebApiAdminConversationsEkmGeneratedClient,
  type SlackWebApiAdminConversationsEkmOperationPathParamMap,
  type SlackWebApiAdminConversationsEkmOperationRequestMap,
} from "./web-api.generated/client/admin-conversations-ekm-chunk.generated.js";
import {
  createSlackWebApiAdminConversationsRestrictAccessGeneratedClient,
  SlackWebApiAdminConversationsRestrictAccessGeneratedFunctionNames,
  type SlackWebApiAdminConversationsRestrictAccessGeneratedClient,
  type SlackWebApiAdminConversationsRestrictAccessOperationPathParamMap,
  type SlackWebApiAdminConversationsRestrictAccessOperationRequestMap,
} from "./web-api.generated/client/admin-conversations-restrict-access-chunk.generated.js";
import {
  createSlackWebApiAdminEmojiGeneratedClient,
  SlackWebApiAdminEmojiGeneratedFunctionNames,
  type SlackWebApiAdminEmojiGeneratedClient,
  type SlackWebApiAdminEmojiOperationPathParamMap,
  type SlackWebApiAdminEmojiOperationRequestMap,
} from "./web-api.generated/client/admin-emoji-chunk.generated.js";
import {
  createSlackWebApiAdminInviteRequestsGeneratedClient,
  SlackWebApiAdminInviteRequestsGeneratedFunctionNames,
  type SlackWebApiAdminInviteRequestsGeneratedClient,
  type SlackWebApiAdminInviteRequestsOperationPathParamMap,
  type SlackWebApiAdminInviteRequestsOperationRequestMap,
} from "./web-api.generated/client/admin-invite-requests-chunk.generated.js";
import {
  createSlackWebApiAdminInviteRequestsApprovedGeneratedClient,
  SlackWebApiAdminInviteRequestsApprovedGeneratedFunctionNames,
  type SlackWebApiAdminInviteRequestsApprovedGeneratedClient,
  type SlackWebApiAdminInviteRequestsApprovedOperationPathParamMap,
  type SlackWebApiAdminInviteRequestsApprovedOperationRequestMap,
} from "./web-api.generated/client/admin-invite-requests-approved-chunk.generated.js";
import {
  createSlackWebApiAdminInviteRequestsDeniedGeneratedClient,
  SlackWebApiAdminInviteRequestsDeniedGeneratedFunctionNames,
  type SlackWebApiAdminInviteRequestsDeniedGeneratedClient,
  type SlackWebApiAdminInviteRequestsDeniedOperationPathParamMap,
  type SlackWebApiAdminInviteRequestsDeniedOperationRequestMap,
} from "./web-api.generated/client/admin-invite-requests-denied-chunk.generated.js";
import {
  createSlackWebApiAdminTeamsGeneratedClient,
  SlackWebApiAdminTeamsGeneratedFunctionNames,
  type SlackWebApiAdminTeamsGeneratedClient,
  type SlackWebApiAdminTeamsOperationPathParamMap,
  type SlackWebApiAdminTeamsOperationRequestMap,
} from "./web-api.generated/client/admin-teams-chunk.generated.js";
import {
  createSlackWebApiAdminTeamsAdminsGeneratedClient,
  SlackWebApiAdminTeamsAdminsGeneratedFunctionNames,
  type SlackWebApiAdminTeamsAdminsGeneratedClient,
  type SlackWebApiAdminTeamsAdminsOperationPathParamMap,
  type SlackWebApiAdminTeamsAdminsOperationRequestMap,
} from "./web-api.generated/client/admin-teams-admins-chunk.generated.js";
import {
  createSlackWebApiAdminTeamsOwnersGeneratedClient,
  SlackWebApiAdminTeamsOwnersGeneratedFunctionNames,
  type SlackWebApiAdminTeamsOwnersGeneratedClient,
  type SlackWebApiAdminTeamsOwnersOperationPathParamMap,
  type SlackWebApiAdminTeamsOwnersOperationRequestMap,
} from "./web-api.generated/client/admin-teams-owners-chunk.generated.js";
import {
  createSlackWebApiAdminTeamsSettingsGeneratedClient,
  SlackWebApiAdminTeamsSettingsGeneratedFunctionNames,
  type SlackWebApiAdminTeamsSettingsGeneratedClient,
  type SlackWebApiAdminTeamsSettingsOperationPathParamMap,
  type SlackWebApiAdminTeamsSettingsOperationRequestMap,
} from "./web-api.generated/client/admin-teams-settings-chunk.generated.js";
import {
  createSlackWebApiAdminUsergroupsGeneratedClient,
  SlackWebApiAdminUsergroupsGeneratedFunctionNames,
  type SlackWebApiAdminUsergroupsGeneratedClient,
  type SlackWebApiAdminUsergroupsOperationPathParamMap,
  type SlackWebApiAdminUsergroupsOperationRequestMap,
} from "./web-api.generated/client/admin-usergroups-chunk.generated.js";
import {
  createSlackWebApiAdminUsersGeneratedClient,
  SlackWebApiAdminUsersGeneratedFunctionNames,
  type SlackWebApiAdminUsersGeneratedClient,
  type SlackWebApiAdminUsersOperationPathParamMap,
  type SlackWebApiAdminUsersOperationRequestMap,
} from "./web-api.generated/client/admin-users-chunk.generated.js";
import {
  createSlackWebApiAdminUsersSessionGeneratedClient,
  SlackWebApiAdminUsersSessionGeneratedFunctionNames,
  type SlackWebApiAdminUsersSessionGeneratedClient,
  type SlackWebApiAdminUsersSessionOperationPathParamMap,
  type SlackWebApiAdminUsersSessionOperationRequestMap,
} from "./web-api.generated/client/admin-users-session-chunk.generated.js";
import {
  createSlackWebApiApiGeneratedClient,
  SlackWebApiApiGeneratedFunctionNames,
  type SlackWebApiApiGeneratedClient,
  type SlackWebApiApiOperationPathParamMap,
  type SlackWebApiApiOperationRequestMap,
} from "./web-api.generated/client/api-chunk.generated.js";
import {
  createSlackWebApiAppsGeneratedClient,
  SlackWebApiAppsGeneratedFunctionNames,
  type SlackWebApiAppsGeneratedClient,
  type SlackWebApiAppsOperationPathParamMap,
  type SlackWebApiAppsOperationRequestMap,
} from "./web-api.generated/client/apps-chunk.generated.js";
import {
  createSlackWebApiAppsEventAuthorizationsGeneratedClient,
  SlackWebApiAppsEventAuthorizationsGeneratedFunctionNames,
  type SlackWebApiAppsEventAuthorizationsGeneratedClient,
  type SlackWebApiAppsEventAuthorizationsOperationPathParamMap,
  type SlackWebApiAppsEventAuthorizationsOperationRequestMap,
} from "./web-api.generated/client/apps-event-authorizations-chunk.generated.js";
import {
  createSlackWebApiAppsPermissionsGeneratedClient,
  SlackWebApiAppsPermissionsGeneratedFunctionNames,
  type SlackWebApiAppsPermissionsGeneratedClient,
  type SlackWebApiAppsPermissionsOperationPathParamMap,
  type SlackWebApiAppsPermissionsOperationRequestMap,
} from "./web-api.generated/client/apps-permissions-chunk.generated.js";
import {
  createSlackWebApiAppsPermissionsResourcesGeneratedClient,
  SlackWebApiAppsPermissionsResourcesGeneratedFunctionNames,
  type SlackWebApiAppsPermissionsResourcesGeneratedClient,
  type SlackWebApiAppsPermissionsResourcesOperationPathParamMap,
  type SlackWebApiAppsPermissionsResourcesOperationRequestMap,
} from "./web-api.generated/client/apps-permissions-resources-chunk.generated.js";
import {
  createSlackWebApiAppsPermissionsScopesGeneratedClient,
  SlackWebApiAppsPermissionsScopesGeneratedFunctionNames,
  type SlackWebApiAppsPermissionsScopesGeneratedClient,
  type SlackWebApiAppsPermissionsScopesOperationPathParamMap,
  type SlackWebApiAppsPermissionsScopesOperationRequestMap,
} from "./web-api.generated/client/apps-permissions-scopes-chunk.generated.js";
import {
  createSlackWebApiAppsPermissionsUsersGeneratedClient,
  SlackWebApiAppsPermissionsUsersGeneratedFunctionNames,
  type SlackWebApiAppsPermissionsUsersGeneratedClient,
  type SlackWebApiAppsPermissionsUsersOperationPathParamMap,
  type SlackWebApiAppsPermissionsUsersOperationRequestMap,
} from "./web-api.generated/client/apps-permissions-users-chunk.generated.js";
import {
  createSlackWebApiAuthGeneratedClient,
  SlackWebApiAuthGeneratedFunctionNames,
  type SlackWebApiAuthGeneratedClient,
  type SlackWebApiAuthOperationPathParamMap,
  type SlackWebApiAuthOperationRequestMap,
} from "./web-api.generated/client/auth-chunk.generated.js";
import {
  createSlackWebApiBotsGeneratedClient,
  SlackWebApiBotsGeneratedFunctionNames,
  type SlackWebApiBotsGeneratedClient,
  type SlackWebApiBotsOperationPathParamMap,
  type SlackWebApiBotsOperationRequestMap,
} from "./web-api.generated/client/bots-chunk.generated.js";
import {
  createSlackWebApiCallsGeneratedClient,
  SlackWebApiCallsGeneratedFunctionNames,
  type SlackWebApiCallsGeneratedClient,
  type SlackWebApiCallsOperationPathParamMap,
  type SlackWebApiCallsOperationRequestMap,
} from "./web-api.generated/client/calls-chunk.generated.js";
import {
  createSlackWebApiCallsParticipantsGeneratedClient,
  SlackWebApiCallsParticipantsGeneratedFunctionNames,
  type SlackWebApiCallsParticipantsGeneratedClient,
  type SlackWebApiCallsParticipantsOperationPathParamMap,
  type SlackWebApiCallsParticipantsOperationRequestMap,
} from "./web-api.generated/client/calls-participants-chunk.generated.js";
import {
  createSlackWebApiChatGeneratedClient,
  SlackWebApiChatGeneratedFunctionNames,
  type SlackWebApiChatGeneratedClient,
  type SlackWebApiChatOperationPathParamMap,
  type SlackWebApiChatOperationRequestMap,
} from "./web-api.generated/client/chat-chunk.generated.js";
import {
  createSlackWebApiChatScheduledMessagesGeneratedClient,
  SlackWebApiChatScheduledMessagesGeneratedFunctionNames,
  type SlackWebApiChatScheduledMessagesGeneratedClient,
  type SlackWebApiChatScheduledMessagesOperationPathParamMap,
  type SlackWebApiChatScheduledMessagesOperationRequestMap,
} from "./web-api.generated/client/chat-scheduled-messages-chunk.generated.js";
import {
  createSlackWebApiConversationsGeneratedClient,
  SlackWebApiConversationsGeneratedFunctionNames,
  type SlackWebApiConversationsGeneratedClient,
  type SlackWebApiConversationsOperationPathParamMap,
  type SlackWebApiConversationsOperationRequestMap,
} from "./web-api.generated/client/conversations-chunk.generated.js";
import {
  createSlackWebApiDialogGeneratedClient,
  SlackWebApiDialogGeneratedFunctionNames,
  type SlackWebApiDialogGeneratedClient,
  type SlackWebApiDialogOperationPathParamMap,
  type SlackWebApiDialogOperationRequestMap,
} from "./web-api.generated/client/dialog-chunk.generated.js";
import {
  createSlackWebApiDndGeneratedClient,
  SlackWebApiDndGeneratedFunctionNames,
  type SlackWebApiDndGeneratedClient,
  type SlackWebApiDndOperationPathParamMap,
  type SlackWebApiDndOperationRequestMap,
} from "./web-api.generated/client/dnd-chunk.generated.js";
import {
  createSlackWebApiEmojiGeneratedClient,
  SlackWebApiEmojiGeneratedFunctionNames,
  type SlackWebApiEmojiGeneratedClient,
  type SlackWebApiEmojiOperationPathParamMap,
  type SlackWebApiEmojiOperationRequestMap,
} from "./web-api.generated/client/emoji-chunk.generated.js";
import {
  createSlackWebApiFilesGeneratedClient,
  SlackWebApiFilesGeneratedFunctionNames,
  type SlackWebApiFilesGeneratedClient,
  type SlackWebApiFilesOperationPathParamMap,
  type SlackWebApiFilesOperationRequestMap,
} from "./web-api.generated/client/files-chunk.generated.js";
import {
  createSlackWebApiFilesCommentsGeneratedClient,
  SlackWebApiFilesCommentsGeneratedFunctionNames,
  type SlackWebApiFilesCommentsGeneratedClient,
  type SlackWebApiFilesCommentsOperationPathParamMap,
  type SlackWebApiFilesCommentsOperationRequestMap,
} from "./web-api.generated/client/files-comments-chunk.generated.js";
import {
  createSlackWebApiFilesRemoteGeneratedClient,
  SlackWebApiFilesRemoteGeneratedFunctionNames,
  type SlackWebApiFilesRemoteGeneratedClient,
  type SlackWebApiFilesRemoteOperationPathParamMap,
  type SlackWebApiFilesRemoteOperationRequestMap,
} from "./web-api.generated/client/files-remote-chunk.generated.js";
import {
  createSlackWebApiMigrationGeneratedClient,
  SlackWebApiMigrationGeneratedFunctionNames,
  type SlackWebApiMigrationGeneratedClient,
  type SlackWebApiMigrationOperationPathParamMap,
  type SlackWebApiMigrationOperationRequestMap,
} from "./web-api.generated/client/migration-chunk.generated.js";
import {
  createSlackWebApiOauthGeneratedClient,
  SlackWebApiOauthGeneratedFunctionNames,
  type SlackWebApiOauthGeneratedClient,
  type SlackWebApiOauthOperationPathParamMap,
  type SlackWebApiOauthOperationRequestMap,
} from "./web-api.generated/client/oauth-chunk.generated.js";
import {
  createSlackWebApiOauthV2GeneratedClient,
  SlackWebApiOauthV2GeneratedFunctionNames,
  type SlackWebApiOauthV2GeneratedClient,
  type SlackWebApiOauthV2OperationPathParamMap,
  type SlackWebApiOauthV2OperationRequestMap,
} from "./web-api.generated/client/oauth-v2-chunk.generated.js";
import {
  createSlackWebApiPinsGeneratedClient,
  SlackWebApiPinsGeneratedFunctionNames,
  type SlackWebApiPinsGeneratedClient,
  type SlackWebApiPinsOperationPathParamMap,
  type SlackWebApiPinsOperationRequestMap,
} from "./web-api.generated/client/pins-chunk.generated.js";
import {
  createSlackWebApiReactionsGeneratedClient,
  SlackWebApiReactionsGeneratedFunctionNames,
  type SlackWebApiReactionsGeneratedClient,
  type SlackWebApiReactionsOperationPathParamMap,
  type SlackWebApiReactionsOperationRequestMap,
} from "./web-api.generated/client/reactions-chunk.generated.js";
import {
  createSlackWebApiRemindersGeneratedClient,
  SlackWebApiRemindersGeneratedFunctionNames,
  type SlackWebApiRemindersGeneratedClient,
  type SlackWebApiRemindersOperationPathParamMap,
  type SlackWebApiRemindersOperationRequestMap,
} from "./web-api.generated/client/reminders-chunk.generated.js";
import {
  createSlackWebApiRtmGeneratedClient,
  SlackWebApiRtmGeneratedFunctionNames,
  type SlackWebApiRtmGeneratedClient,
  type SlackWebApiRtmOperationPathParamMap,
  type SlackWebApiRtmOperationRequestMap,
} from "./web-api.generated/client/rtm-chunk.generated.js";
import {
  createSlackWebApiSearchGeneratedClient,
  SlackWebApiSearchGeneratedFunctionNames,
  type SlackWebApiSearchGeneratedClient,
  type SlackWebApiSearchOperationPathParamMap,
  type SlackWebApiSearchOperationRequestMap,
} from "./web-api.generated/client/search-chunk.generated.js";
import {
  createSlackWebApiStarsGeneratedClient,
  SlackWebApiStarsGeneratedFunctionNames,
  type SlackWebApiStarsGeneratedClient,
  type SlackWebApiStarsOperationPathParamMap,
  type SlackWebApiStarsOperationRequestMap,
} from "./web-api.generated/client/stars-chunk.generated.js";
import {
  createSlackWebApiTeamGeneratedClient,
  SlackWebApiTeamGeneratedFunctionNames,
  type SlackWebApiTeamGeneratedClient,
  type SlackWebApiTeamOperationPathParamMap,
  type SlackWebApiTeamOperationRequestMap,
} from "./web-api.generated/client/team-chunk.generated.js";
import {
  createSlackWebApiTeamProfileGeneratedClient,
  SlackWebApiTeamProfileGeneratedFunctionNames,
  type SlackWebApiTeamProfileGeneratedClient,
  type SlackWebApiTeamProfileOperationPathParamMap,
  type SlackWebApiTeamProfileOperationRequestMap,
} from "./web-api.generated/client/team-profile-chunk.generated.js";
import {
  createSlackWebApiUsergroupsGeneratedClient,
  SlackWebApiUsergroupsGeneratedFunctionNames,
  type SlackWebApiUsergroupsGeneratedClient,
  type SlackWebApiUsergroupsOperationPathParamMap,
  type SlackWebApiUsergroupsOperationRequestMap,
} from "./web-api.generated/client/usergroups-chunk.generated.js";
import {
  createSlackWebApiUsergroupsUsersGeneratedClient,
  SlackWebApiUsergroupsUsersGeneratedFunctionNames,
  type SlackWebApiUsergroupsUsersGeneratedClient,
  type SlackWebApiUsergroupsUsersOperationPathParamMap,
  type SlackWebApiUsergroupsUsersOperationRequestMap,
} from "./web-api.generated/client/usergroups-users-chunk.generated.js";
import {
  createSlackWebApiUsersGeneratedClient,
  SlackWebApiUsersGeneratedFunctionNames,
  type SlackWebApiUsersGeneratedClient,
  type SlackWebApiUsersOperationPathParamMap,
  type SlackWebApiUsersOperationRequestMap,
} from "./web-api.generated/client/users-chunk.generated.js";
import {
  createSlackWebApiUsersProfileGeneratedClient,
  SlackWebApiUsersProfileGeneratedFunctionNames,
  type SlackWebApiUsersProfileGeneratedClient,
  type SlackWebApiUsersProfileOperationPathParamMap,
  type SlackWebApiUsersProfileOperationRequestMap,
} from "./web-api.generated/client/users-profile-chunk.generated.js";
import {
  createSlackWebApiViewsGeneratedClient,
  SlackWebApiViewsGeneratedFunctionNames,
  type SlackWebApiViewsGeneratedClient,
  type SlackWebApiViewsOperationPathParamMap,
  type SlackWebApiViewsOperationRequestMap,
} from "./web-api.generated/client/views-chunk.generated.js";
import {
  createSlackWebApiWorkflowsGeneratedClient,
  SlackWebApiWorkflowsGeneratedFunctionNames,
  type SlackWebApiWorkflowsGeneratedClient,
  type SlackWebApiWorkflowsOperationPathParamMap,
  type SlackWebApiWorkflowsOperationRequestMap,
} from "./web-api.generated/client/workflows-chunk.generated.js";

export type SlackWebApiPathParamValue = string | number;
export interface SlackWebApiOperationPathParamMap extends SlackWebApiAdminAppsOperationPathParamMap, SlackWebApiAdminAppsApprovedOperationPathParamMap, SlackWebApiAdminAppsRequestsOperationPathParamMap, SlackWebApiAdminAppsRestrictedOperationPathParamMap, SlackWebApiAdminConversationsOperationPathParamMap, SlackWebApiAdminConversationsEkmOperationPathParamMap, SlackWebApiAdminConversationsRestrictAccessOperationPathParamMap, SlackWebApiAdminEmojiOperationPathParamMap, SlackWebApiAdminInviteRequestsOperationPathParamMap, SlackWebApiAdminInviteRequestsApprovedOperationPathParamMap, SlackWebApiAdminInviteRequestsDeniedOperationPathParamMap, SlackWebApiAdminTeamsOperationPathParamMap, SlackWebApiAdminTeamsAdminsOperationPathParamMap, SlackWebApiAdminTeamsOwnersOperationPathParamMap, SlackWebApiAdminTeamsSettingsOperationPathParamMap, SlackWebApiAdminUsergroupsOperationPathParamMap, SlackWebApiAdminUsersOperationPathParamMap, SlackWebApiAdminUsersSessionOperationPathParamMap, SlackWebApiApiOperationPathParamMap, SlackWebApiAppsOperationPathParamMap, SlackWebApiAppsEventAuthorizationsOperationPathParamMap, SlackWebApiAppsPermissionsOperationPathParamMap, SlackWebApiAppsPermissionsResourcesOperationPathParamMap, SlackWebApiAppsPermissionsScopesOperationPathParamMap, SlackWebApiAppsPermissionsUsersOperationPathParamMap, SlackWebApiAuthOperationPathParamMap, SlackWebApiBotsOperationPathParamMap, SlackWebApiCallsOperationPathParamMap, SlackWebApiCallsParticipantsOperationPathParamMap, SlackWebApiChatOperationPathParamMap, SlackWebApiChatScheduledMessagesOperationPathParamMap, SlackWebApiConversationsOperationPathParamMap, SlackWebApiDialogOperationPathParamMap, SlackWebApiDndOperationPathParamMap, SlackWebApiEmojiOperationPathParamMap, SlackWebApiFilesOperationPathParamMap, SlackWebApiFilesCommentsOperationPathParamMap, SlackWebApiFilesRemoteOperationPathParamMap, SlackWebApiMigrationOperationPathParamMap, SlackWebApiOauthOperationPathParamMap, SlackWebApiOauthV2OperationPathParamMap, SlackWebApiPinsOperationPathParamMap, SlackWebApiReactionsOperationPathParamMap, SlackWebApiRemindersOperationPathParamMap, SlackWebApiRtmOperationPathParamMap, SlackWebApiSearchOperationPathParamMap, SlackWebApiStarsOperationPathParamMap, SlackWebApiTeamOperationPathParamMap, SlackWebApiTeamProfileOperationPathParamMap, SlackWebApiUsergroupsOperationPathParamMap, SlackWebApiUsergroupsUsersOperationPathParamMap, SlackWebApiUsersOperationPathParamMap, SlackWebApiUsersProfileOperationPathParamMap, SlackWebApiViewsOperationPathParamMap, SlackWebApiWorkflowsOperationPathParamMap {}

export type SlackWebApiOperationKey = keyof SlackWebApiOperationPathParamMap & string;

export type SlackWebApiOperationQueryInput<OperationKey extends SlackWebApiOperationKey> =
  SlackWebApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: SlackWebApiOperationQueryMap[OperationKey] }
    : { query?: SlackWebApiOperationQueryMap[OperationKey] };

export type SlackWebApiOperationBodyInput<OperationKey extends SlackWebApiOperationKey> =
  [SlackWebApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : SlackWebApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: SlackWebApiOperationRequestBodyMap[OperationKey] }
      : { body?: SlackWebApiOperationRequestBodyMap[OperationKey] };

export type SlackWebApiOperationInput<OperationKey extends SlackWebApiOperationKey> = Omit<SlackOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends SlackWebApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: SlackWebApiOperationPathParamMap[OperationKey] }
) & SlackWebApiOperationQueryInput<OperationKey> & SlackWebApiOperationBodyInput<OperationKey>;

export interface SlackWebApiOperationRequestMap extends SlackWebApiAdminAppsOperationRequestMap, SlackWebApiAdminAppsApprovedOperationRequestMap, SlackWebApiAdminAppsRequestsOperationRequestMap, SlackWebApiAdminAppsRestrictedOperationRequestMap, SlackWebApiAdminConversationsOperationRequestMap, SlackWebApiAdminConversationsEkmOperationRequestMap, SlackWebApiAdminConversationsRestrictAccessOperationRequestMap, SlackWebApiAdminEmojiOperationRequestMap, SlackWebApiAdminInviteRequestsOperationRequestMap, SlackWebApiAdminInviteRequestsApprovedOperationRequestMap, SlackWebApiAdminInviteRequestsDeniedOperationRequestMap, SlackWebApiAdminTeamsOperationRequestMap, SlackWebApiAdminTeamsAdminsOperationRequestMap, SlackWebApiAdminTeamsOwnersOperationRequestMap, SlackWebApiAdminTeamsSettingsOperationRequestMap, SlackWebApiAdminUsergroupsOperationRequestMap, SlackWebApiAdminUsersOperationRequestMap, SlackWebApiAdminUsersSessionOperationRequestMap, SlackWebApiApiOperationRequestMap, SlackWebApiAppsOperationRequestMap, SlackWebApiAppsEventAuthorizationsOperationRequestMap, SlackWebApiAppsPermissionsOperationRequestMap, SlackWebApiAppsPermissionsResourcesOperationRequestMap, SlackWebApiAppsPermissionsScopesOperationRequestMap, SlackWebApiAppsPermissionsUsersOperationRequestMap, SlackWebApiAuthOperationRequestMap, SlackWebApiBotsOperationRequestMap, SlackWebApiCallsOperationRequestMap, SlackWebApiCallsParticipantsOperationRequestMap, SlackWebApiChatOperationRequestMap, SlackWebApiChatScheduledMessagesOperationRequestMap, SlackWebApiConversationsOperationRequestMap, SlackWebApiDialogOperationRequestMap, SlackWebApiDndOperationRequestMap, SlackWebApiEmojiOperationRequestMap, SlackWebApiFilesOperationRequestMap, SlackWebApiFilesCommentsOperationRequestMap, SlackWebApiFilesRemoteOperationRequestMap, SlackWebApiMigrationOperationRequestMap, SlackWebApiOauthOperationRequestMap, SlackWebApiOauthV2OperationRequestMap, SlackWebApiPinsOperationRequestMap, SlackWebApiReactionsOperationRequestMap, SlackWebApiRemindersOperationRequestMap, SlackWebApiRtmOperationRequestMap, SlackWebApiSearchOperationRequestMap, SlackWebApiStarsOperationRequestMap, SlackWebApiTeamOperationRequestMap, SlackWebApiTeamProfileOperationRequestMap, SlackWebApiUsergroupsOperationRequestMap, SlackWebApiUsergroupsUsersOperationRequestMap, SlackWebApiUsersOperationRequestMap, SlackWebApiUsersProfileOperationRequestMap, SlackWebApiViewsOperationRequestMap, SlackWebApiWorkflowsOperationRequestMap {}

export type SlackWebApiOperationArgs<OperationKey extends SlackWebApiOperationKey> = {} extends SlackWebApiOperationPathParamMap[OperationKey]
  ? [input?: SlackWebApiOperationRequestMap[OperationKey]]
  : [input: SlackWebApiOperationRequestMap[OperationKey]];

export type SlackWebApiGeneratedOperationCaller = <OperationKey extends SlackWebApiOperationKey>(
  operationKey: OperationKey,
  ...args: SlackWebApiOperationArgs<OperationKey>
) => Promise<SlackWebApiOperationResponseMap[OperationKey]>;

export interface SlackWebApiGeneratedClient extends SlackWebApiAdminAppsGeneratedClient, SlackWebApiAdminAppsApprovedGeneratedClient, SlackWebApiAdminAppsRequestsGeneratedClient, SlackWebApiAdminAppsRestrictedGeneratedClient, SlackWebApiAdminConversationsGeneratedClient, SlackWebApiAdminConversationsEkmGeneratedClient, SlackWebApiAdminConversationsRestrictAccessGeneratedClient, SlackWebApiAdminEmojiGeneratedClient, SlackWebApiAdminInviteRequestsGeneratedClient, SlackWebApiAdminInviteRequestsApprovedGeneratedClient, SlackWebApiAdminInviteRequestsDeniedGeneratedClient, SlackWebApiAdminTeamsGeneratedClient, SlackWebApiAdminTeamsAdminsGeneratedClient, SlackWebApiAdminTeamsOwnersGeneratedClient, SlackWebApiAdminTeamsSettingsGeneratedClient, SlackWebApiAdminUsergroupsGeneratedClient, SlackWebApiAdminUsersGeneratedClient, SlackWebApiAdminUsersSessionGeneratedClient, SlackWebApiApiGeneratedClient, SlackWebApiAppsGeneratedClient, SlackWebApiAppsEventAuthorizationsGeneratedClient, SlackWebApiAppsPermissionsGeneratedClient, SlackWebApiAppsPermissionsResourcesGeneratedClient, SlackWebApiAppsPermissionsScopesGeneratedClient, SlackWebApiAppsPermissionsUsersGeneratedClient, SlackWebApiAuthGeneratedClient, SlackWebApiBotsGeneratedClient, SlackWebApiCallsGeneratedClient, SlackWebApiCallsParticipantsGeneratedClient, SlackWebApiChatGeneratedClient, SlackWebApiChatScheduledMessagesGeneratedClient, SlackWebApiConversationsGeneratedClient, SlackWebApiDialogGeneratedClient, SlackWebApiDndGeneratedClient, SlackWebApiEmojiGeneratedClient, SlackWebApiFilesGeneratedClient, SlackWebApiFilesCommentsGeneratedClient, SlackWebApiFilesRemoteGeneratedClient, SlackWebApiMigrationGeneratedClient, SlackWebApiOauthGeneratedClient, SlackWebApiOauthV2GeneratedClient, SlackWebApiPinsGeneratedClient, SlackWebApiReactionsGeneratedClient, SlackWebApiRemindersGeneratedClient, SlackWebApiRtmGeneratedClient, SlackWebApiSearchGeneratedClient, SlackWebApiStarsGeneratedClient, SlackWebApiTeamGeneratedClient, SlackWebApiTeamProfileGeneratedClient, SlackWebApiUsergroupsGeneratedClient, SlackWebApiUsergroupsUsersGeneratedClient, SlackWebApiUsersGeneratedClient, SlackWebApiUsersProfileGeneratedClient, SlackWebApiViewsGeneratedClient, SlackWebApiWorkflowsGeneratedClient {}

export const SLACK_WEB_API_GENERATED_FUNCTION_COUNT = 174 as const;
export const SLACK_WEB_API_GENERATED_FUNCTION_NAMES = [
  ...SlackWebApiAdminAppsGeneratedFunctionNames,
  ...SlackWebApiAdminAppsApprovedGeneratedFunctionNames,
  ...SlackWebApiAdminAppsRequestsGeneratedFunctionNames,
  ...SlackWebApiAdminAppsRestrictedGeneratedFunctionNames,
  ...SlackWebApiAdminConversationsGeneratedFunctionNames,
  ...SlackWebApiAdminConversationsEkmGeneratedFunctionNames,
  ...SlackWebApiAdminConversationsRestrictAccessGeneratedFunctionNames,
  ...SlackWebApiAdminEmojiGeneratedFunctionNames,
  ...SlackWebApiAdminInviteRequestsGeneratedFunctionNames,
  ...SlackWebApiAdminInviteRequestsApprovedGeneratedFunctionNames,
  ...SlackWebApiAdminInviteRequestsDeniedGeneratedFunctionNames,
  ...SlackWebApiAdminTeamsGeneratedFunctionNames,
  ...SlackWebApiAdminTeamsAdminsGeneratedFunctionNames,
  ...SlackWebApiAdminTeamsOwnersGeneratedFunctionNames,
  ...SlackWebApiAdminTeamsSettingsGeneratedFunctionNames,
  ...SlackWebApiAdminUsergroupsGeneratedFunctionNames,
  ...SlackWebApiAdminUsersGeneratedFunctionNames,
  ...SlackWebApiAdminUsersSessionGeneratedFunctionNames,
  ...SlackWebApiApiGeneratedFunctionNames,
  ...SlackWebApiAppsGeneratedFunctionNames,
  ...SlackWebApiAppsEventAuthorizationsGeneratedFunctionNames,
  ...SlackWebApiAppsPermissionsGeneratedFunctionNames,
  ...SlackWebApiAppsPermissionsResourcesGeneratedFunctionNames,
  ...SlackWebApiAppsPermissionsScopesGeneratedFunctionNames,
  ...SlackWebApiAppsPermissionsUsersGeneratedFunctionNames,
  ...SlackWebApiAuthGeneratedFunctionNames,
  ...SlackWebApiBotsGeneratedFunctionNames,
  ...SlackWebApiCallsGeneratedFunctionNames,
  ...SlackWebApiCallsParticipantsGeneratedFunctionNames,
  ...SlackWebApiChatGeneratedFunctionNames,
  ...SlackWebApiChatScheduledMessagesGeneratedFunctionNames,
  ...SlackWebApiConversationsGeneratedFunctionNames,
  ...SlackWebApiDialogGeneratedFunctionNames,
  ...SlackWebApiDndGeneratedFunctionNames,
  ...SlackWebApiEmojiGeneratedFunctionNames,
  ...SlackWebApiFilesGeneratedFunctionNames,
  ...SlackWebApiFilesCommentsGeneratedFunctionNames,
  ...SlackWebApiFilesRemoteGeneratedFunctionNames,
  ...SlackWebApiMigrationGeneratedFunctionNames,
  ...SlackWebApiOauthGeneratedFunctionNames,
  ...SlackWebApiOauthV2GeneratedFunctionNames,
  ...SlackWebApiPinsGeneratedFunctionNames,
  ...SlackWebApiReactionsGeneratedFunctionNames,
  ...SlackWebApiRemindersGeneratedFunctionNames,
  ...SlackWebApiRtmGeneratedFunctionNames,
  ...SlackWebApiSearchGeneratedFunctionNames,
  ...SlackWebApiStarsGeneratedFunctionNames,
  ...SlackWebApiTeamGeneratedFunctionNames,
  ...SlackWebApiTeamProfileGeneratedFunctionNames,
  ...SlackWebApiUsergroupsGeneratedFunctionNames,
  ...SlackWebApiUsergroupsUsersGeneratedFunctionNames,
  ...SlackWebApiUsersGeneratedFunctionNames,
  ...SlackWebApiUsersProfileGeneratedFunctionNames,
  ...SlackWebApiViewsGeneratedFunctionNames,
  ...SlackWebApiWorkflowsGeneratedFunctionNames,
] as const satisfies readonly (keyof SlackWebApiGeneratedClient)[];

export function createSlackWebApiGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiGeneratedClient {
  return Object.assign(
    {},
    createSlackWebApiAdminAppsGeneratedClient(callOperation),
    createSlackWebApiAdminAppsApprovedGeneratedClient(callOperation),
    createSlackWebApiAdminAppsRequestsGeneratedClient(callOperation),
    createSlackWebApiAdminAppsRestrictedGeneratedClient(callOperation),
    createSlackWebApiAdminConversationsGeneratedClient(callOperation),
    createSlackWebApiAdminConversationsEkmGeneratedClient(callOperation),
    createSlackWebApiAdminConversationsRestrictAccessGeneratedClient(callOperation),
    createSlackWebApiAdminEmojiGeneratedClient(callOperation),
    createSlackWebApiAdminInviteRequestsGeneratedClient(callOperation),
    createSlackWebApiAdminInviteRequestsApprovedGeneratedClient(callOperation),
    createSlackWebApiAdminInviteRequestsDeniedGeneratedClient(callOperation),
    createSlackWebApiAdminTeamsGeneratedClient(callOperation),
    createSlackWebApiAdminTeamsAdminsGeneratedClient(callOperation),
    createSlackWebApiAdminTeamsOwnersGeneratedClient(callOperation),
    createSlackWebApiAdminTeamsSettingsGeneratedClient(callOperation),
    createSlackWebApiAdminUsergroupsGeneratedClient(callOperation),
    createSlackWebApiAdminUsersGeneratedClient(callOperation),
    createSlackWebApiAdminUsersSessionGeneratedClient(callOperation),
    createSlackWebApiApiGeneratedClient(callOperation),
    createSlackWebApiAppsGeneratedClient(callOperation),
    createSlackWebApiAppsEventAuthorizationsGeneratedClient(callOperation),
    createSlackWebApiAppsPermissionsGeneratedClient(callOperation),
    createSlackWebApiAppsPermissionsResourcesGeneratedClient(callOperation),
    createSlackWebApiAppsPermissionsScopesGeneratedClient(callOperation),
    createSlackWebApiAppsPermissionsUsersGeneratedClient(callOperation),
    createSlackWebApiAuthGeneratedClient(callOperation),
    createSlackWebApiBotsGeneratedClient(callOperation),
    createSlackWebApiCallsGeneratedClient(callOperation),
    createSlackWebApiCallsParticipantsGeneratedClient(callOperation),
    createSlackWebApiChatGeneratedClient(callOperation),
    createSlackWebApiChatScheduledMessagesGeneratedClient(callOperation),
    createSlackWebApiConversationsGeneratedClient(callOperation),
    createSlackWebApiDialogGeneratedClient(callOperation),
    createSlackWebApiDndGeneratedClient(callOperation),
    createSlackWebApiEmojiGeneratedClient(callOperation),
    createSlackWebApiFilesGeneratedClient(callOperation),
    createSlackWebApiFilesCommentsGeneratedClient(callOperation),
    createSlackWebApiFilesRemoteGeneratedClient(callOperation),
    createSlackWebApiMigrationGeneratedClient(callOperation),
    createSlackWebApiOauthGeneratedClient(callOperation),
    createSlackWebApiOauthV2GeneratedClient(callOperation),
    createSlackWebApiPinsGeneratedClient(callOperation),
    createSlackWebApiReactionsGeneratedClient(callOperation),
    createSlackWebApiRemindersGeneratedClient(callOperation),
    createSlackWebApiRtmGeneratedClient(callOperation),
    createSlackWebApiSearchGeneratedClient(callOperation),
    createSlackWebApiStarsGeneratedClient(callOperation),
    createSlackWebApiTeamGeneratedClient(callOperation),
    createSlackWebApiTeamProfileGeneratedClient(callOperation),
    createSlackWebApiUsergroupsGeneratedClient(callOperation),
    createSlackWebApiUsergroupsUsersGeneratedClient(callOperation),
    createSlackWebApiUsersGeneratedClient(callOperation),
    createSlackWebApiUsersProfileGeneratedClient(callOperation),
    createSlackWebApiViewsGeneratedClient(callOperation),
    createSlackWebApiWorkflowsGeneratedClient(callOperation),
  ) as SlackWebApiGeneratedClient;
}
