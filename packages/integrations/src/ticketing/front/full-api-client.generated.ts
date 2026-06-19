// Generated from official @cognidesk/integrations API documentation.
// Do not edit by hand; run scripts/generate-ticketing-provider-coverage.mjs after checking upstream docs.

import type { FrontOperationRequestInput } from "./index.js";
import type {
  FrontFullApiOperationQueryMap,
  FrontFullApiOperationQueryRequiredMap,
  FrontFullApiOperationRequestBodyMap,
  FrontFullApiOperationRequestBodyRequiredMap,
  FrontFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createFrontFullApiAccountsGeneratedClient,
  FrontFullApiAccountsGeneratedFunctionNames,
  type FrontFullApiAccountsGeneratedClient,
  type FrontFullApiAccountsOperationPathParamMap,
  type FrontFullApiAccountsOperationRequestMap,
} from "./full-api.generated/client/accounts-chunk.generated.js";
import {
  createFrontFullApiAnalyticsGeneratedClient,
  FrontFullApiAnalyticsGeneratedFunctionNames,
  type FrontFullApiAnalyticsGeneratedClient,
  type FrontFullApiAnalyticsOperationPathParamMap,
  type FrontFullApiAnalyticsOperationRequestMap,
} from "./full-api.generated/client/analytics-chunk.generated.js";
import {
  createFrontFullApiApplicationMessageTemplatesGeneratedClient,
  FrontFullApiApplicationMessageTemplatesGeneratedFunctionNames,
  type FrontFullApiApplicationMessageTemplatesGeneratedClient,
  type FrontFullApiApplicationMessageTemplatesOperationPathParamMap,
  type FrontFullApiApplicationMessageTemplatesOperationRequestMap,
} from "./full-api.generated/client/application-message-templates-chunk.generated.js";
import {
  createFrontFullApiApplicationsGeneratedClient,
  FrontFullApiApplicationsGeneratedFunctionNames,
  type FrontFullApiApplicationsGeneratedClient,
  type FrontFullApiApplicationsOperationPathParamMap,
  type FrontFullApiApplicationsOperationRequestMap,
} from "./full-api.generated/client/applications-chunk.generated.js";
import {
  createFrontFullApiAttachmentsGeneratedClient,
  FrontFullApiAttachmentsGeneratedFunctionNames,
  type FrontFullApiAttachmentsGeneratedClient,
  type FrontFullApiAttachmentsOperationPathParamMap,
  type FrontFullApiAttachmentsOperationRequestMap,
} from "./full-api.generated/client/attachments-chunk.generated.js";
import {
  createFrontFullApiCallsGeneratedClient,
  FrontFullApiCallsGeneratedFunctionNames,
  type FrontFullApiCallsGeneratedClient,
  type FrontFullApiCallsOperationPathParamMap,
  type FrontFullApiCallsOperationRequestMap,
} from "./full-api.generated/client/calls-chunk.generated.js";
import {
  createFrontFullApiChannelsGeneratedClient,
  FrontFullApiChannelsGeneratedFunctionNames,
  type FrontFullApiChannelsGeneratedClient,
  type FrontFullApiChannelsOperationPathParamMap,
  type FrontFullApiChannelsOperationRequestMap,
} from "./full-api.generated/client/channels-chunk.generated.js";
import {
  createFrontFullApiCommentsGeneratedClient,
  FrontFullApiCommentsGeneratedFunctionNames,
  type FrontFullApiCommentsGeneratedClient,
  type FrontFullApiCommentsOperationPathParamMap,
  type FrontFullApiCommentsOperationRequestMap,
} from "./full-api.generated/client/comments-chunk.generated.js";
import {
  createFrontFullApiContactGroupsGeneratedClient,
  FrontFullApiContactGroupsGeneratedFunctionNames,
  type FrontFullApiContactGroupsGeneratedClient,
  type FrontFullApiContactGroupsOperationPathParamMap,
  type FrontFullApiContactGroupsOperationRequestMap,
} from "./full-api.generated/client/contact-groups-chunk.generated.js";
import {
  createFrontFullApiContactHandlesGeneratedClient,
  FrontFullApiContactHandlesGeneratedFunctionNames,
  type FrontFullApiContactHandlesGeneratedClient,
  type FrontFullApiContactHandlesOperationPathParamMap,
  type FrontFullApiContactHandlesOperationRequestMap,
} from "./full-api.generated/client/contact-handles-chunk.generated.js";
import {
  createFrontFullApiContactListsGeneratedClient,
  FrontFullApiContactListsGeneratedFunctionNames,
  type FrontFullApiContactListsGeneratedClient,
  type FrontFullApiContactListsOperationPathParamMap,
  type FrontFullApiContactListsOperationRequestMap,
} from "./full-api.generated/client/contact-lists-chunk.generated.js";
import {
  createFrontFullApiContactNotesGeneratedClient,
  FrontFullApiContactNotesGeneratedFunctionNames,
  type FrontFullApiContactNotesGeneratedClient,
  type FrontFullApiContactNotesOperationPathParamMap,
  type FrontFullApiContactNotesOperationRequestMap,
} from "./full-api.generated/client/contact-notes-chunk.generated.js";
import {
  createFrontFullApiContactsGeneratedClient,
  FrontFullApiContactsGeneratedFunctionNames,
  type FrontFullApiContactsGeneratedClient,
  type FrontFullApiContactsOperationPathParamMap,
  type FrontFullApiContactsOperationRequestMap,
} from "./full-api.generated/client/contacts-chunk.generated.js";
import {
  createFrontFullApiConversationsGeneratedClient,
  FrontFullApiConversationsGeneratedFunctionNames,
  type FrontFullApiConversationsGeneratedClient,
  type FrontFullApiConversationsOperationPathParamMap,
  type FrontFullApiConversationsOperationRequestMap,
} from "./full-api.generated/client/conversations-chunk.generated.js";
import {
  createFrontFullApiCustomFieldsGeneratedClient,
  FrontFullApiCustomFieldsGeneratedFunctionNames,
  type FrontFullApiCustomFieldsGeneratedClient,
  type FrontFullApiCustomFieldsOperationPathParamMap,
  type FrontFullApiCustomFieldsOperationRequestMap,
} from "./full-api.generated/client/custom-fields-chunk.generated.js";
import {
  createFrontFullApiDraftsGeneratedClient,
  FrontFullApiDraftsGeneratedFunctionNames,
  type FrontFullApiDraftsGeneratedClient,
  type FrontFullApiDraftsOperationPathParamMap,
  type FrontFullApiDraftsOperationRequestMap,
} from "./full-api.generated/client/drafts-chunk.generated.js";
import {
  createFrontFullApiEventsGeneratedClient,
  FrontFullApiEventsGeneratedFunctionNames,
  type FrontFullApiEventsGeneratedClient,
  type FrontFullApiEventsOperationPathParamMap,
  type FrontFullApiEventsOperationRequestMap,
} from "./full-api.generated/client/events-chunk.generated.js";
import {
  createFrontFullApiInboxesGeneratedClient,
  FrontFullApiInboxesGeneratedFunctionNames,
  type FrontFullApiInboxesGeneratedClient,
  type FrontFullApiInboxesOperationPathParamMap,
  type FrontFullApiInboxesOperationRequestMap,
} from "./full-api.generated/client/inboxes-chunk.generated.js";
import {
  createFrontFullApiKnowledgeBaseArticlesGeneratedClient,
  FrontFullApiKnowledgeBaseArticlesGeneratedFunctionNames,
  type FrontFullApiKnowledgeBaseArticlesGeneratedClient,
  type FrontFullApiKnowledgeBaseArticlesOperationPathParamMap,
  type FrontFullApiKnowledgeBaseArticlesOperationRequestMap,
} from "./full-api.generated/client/knowledge-base-articles-chunk.generated.js";
import {
  createFrontFullApiKnowledgeBaseCategoriesGeneratedClient,
  FrontFullApiKnowledgeBaseCategoriesGeneratedFunctionNames,
  type FrontFullApiKnowledgeBaseCategoriesGeneratedClient,
  type FrontFullApiKnowledgeBaseCategoriesOperationPathParamMap,
  type FrontFullApiKnowledgeBaseCategoriesOperationRequestMap,
} from "./full-api.generated/client/knowledge-base-categories-chunk.generated.js";
import {
  createFrontFullApiKnowledgeBasesGeneratedClient,
  FrontFullApiKnowledgeBasesGeneratedFunctionNames,
  type FrontFullApiKnowledgeBasesGeneratedClient,
  type FrontFullApiKnowledgeBasesOperationPathParamMap,
  type FrontFullApiKnowledgeBasesOperationRequestMap,
} from "./full-api.generated/client/knowledge-bases-chunk.generated.js";
import {
  createFrontFullApiLinksGeneratedClient,
  FrontFullApiLinksGeneratedFunctionNames,
  type FrontFullApiLinksGeneratedClient,
  type FrontFullApiLinksOperationPathParamMap,
  type FrontFullApiLinksOperationRequestMap,
} from "./full-api.generated/client/links-chunk.generated.js";
import {
  createFrontFullApiMessageTemplateFoldersGeneratedClient,
  FrontFullApiMessageTemplateFoldersGeneratedFunctionNames,
  type FrontFullApiMessageTemplateFoldersGeneratedClient,
  type FrontFullApiMessageTemplateFoldersOperationPathParamMap,
  type FrontFullApiMessageTemplateFoldersOperationRequestMap,
} from "./full-api.generated/client/message-template-folders-chunk.generated.js";
import {
  createFrontFullApiMessageTemplatesGeneratedClient,
  FrontFullApiMessageTemplatesGeneratedFunctionNames,
  type FrontFullApiMessageTemplatesGeneratedClient,
  type FrontFullApiMessageTemplatesOperationPathParamMap,
  type FrontFullApiMessageTemplatesOperationRequestMap,
} from "./full-api.generated/client/message-templates-chunk.generated.js";
import {
  createFrontFullApiMessagesGeneratedClient,
  FrontFullApiMessagesGeneratedFunctionNames,
  type FrontFullApiMessagesGeneratedClient,
  type FrontFullApiMessagesOperationPathParamMap,
  type FrontFullApiMessagesOperationRequestMap,
} from "./full-api.generated/client/messages-chunk.generated.js";
import {
  createFrontFullApiRulesGeneratedClient,
  FrontFullApiRulesGeneratedFunctionNames,
  type FrontFullApiRulesGeneratedClient,
  type FrontFullApiRulesOperationPathParamMap,
  type FrontFullApiRulesOperationRequestMap,
} from "./full-api.generated/client/rules-chunk.generated.js";
import {
  createFrontFullApiShiftsGeneratedClient,
  FrontFullApiShiftsGeneratedFunctionNames,
  type FrontFullApiShiftsGeneratedClient,
  type FrontFullApiShiftsOperationPathParamMap,
  type FrontFullApiShiftsOperationRequestMap,
} from "./full-api.generated/client/shifts-chunk.generated.js";
import {
  createFrontFullApiSignaturesGeneratedClient,
  FrontFullApiSignaturesGeneratedFunctionNames,
  type FrontFullApiSignaturesGeneratedClient,
  type FrontFullApiSignaturesOperationPathParamMap,
  type FrontFullApiSignaturesOperationRequestMap,
} from "./full-api.generated/client/signatures-chunk.generated.js";
import {
  createFrontFullApiStatusesGeneratedClient,
  FrontFullApiStatusesGeneratedFunctionNames,
  type FrontFullApiStatusesGeneratedClient,
  type FrontFullApiStatusesOperationPathParamMap,
  type FrontFullApiStatusesOperationRequestMap,
} from "./full-api.generated/client/statuses-chunk.generated.js";
import {
  createFrontFullApiTagsGeneratedClient,
  FrontFullApiTagsGeneratedFunctionNames,
  type FrontFullApiTagsGeneratedClient,
  type FrontFullApiTagsOperationPathParamMap,
  type FrontFullApiTagsOperationRequestMap,
} from "./full-api.generated/client/tags-chunk.generated.js";
import {
  createFrontFullApiTeammateGroupsGeneratedClient,
  FrontFullApiTeammateGroupsGeneratedFunctionNames,
  type FrontFullApiTeammateGroupsGeneratedClient,
  type FrontFullApiTeammateGroupsOperationPathParamMap,
  type FrontFullApiTeammateGroupsOperationRequestMap,
} from "./full-api.generated/client/teammate-groups-chunk.generated.js";
import {
  createFrontFullApiTeammatesGeneratedClient,
  FrontFullApiTeammatesGeneratedFunctionNames,
  type FrontFullApiTeammatesGeneratedClient,
  type FrontFullApiTeammatesOperationPathParamMap,
  type FrontFullApiTeammatesOperationRequestMap,
} from "./full-api.generated/client/teammates-chunk.generated.js";
import {
  createFrontFullApiTeamsGeneratedClient,
  FrontFullApiTeamsGeneratedFunctionNames,
  type FrontFullApiTeamsGeneratedClient,
  type FrontFullApiTeamsOperationPathParamMap,
  type FrontFullApiTeamsOperationRequestMap,
} from "./full-api.generated/client/teams-chunk.generated.js";
import {
  createFrontFullApiTimeOffGeneratedClient,
  FrontFullApiTimeOffGeneratedFunctionNames,
  type FrontFullApiTimeOffGeneratedClient,
  type FrontFullApiTimeOffOperationPathParamMap,
  type FrontFullApiTimeOffOperationRequestMap,
} from "./full-api.generated/client/time-off-chunk.generated.js";
import {
  createFrontFullApiTokenIdentityGeneratedClient,
  FrontFullApiTokenIdentityGeneratedFunctionNames,
  type FrontFullApiTokenIdentityGeneratedClient,
  type FrontFullApiTokenIdentityOperationPathParamMap,
  type FrontFullApiTokenIdentityOperationRequestMap,
} from "./full-api.generated/client/token-identity-chunk.generated.js";
import {
  createFrontFullApiViewsGeneratedClient,
  FrontFullApiViewsGeneratedFunctionNames,
  type FrontFullApiViewsGeneratedClient,
  type FrontFullApiViewsOperationPathParamMap,
  type FrontFullApiViewsOperationRequestMap,
} from "./full-api.generated/client/views-chunk.generated.js";

export type FrontFullApiPathParamValue = string | number;
export interface FrontFullApiOperationPathParamMap extends FrontFullApiAccountsOperationPathParamMap, FrontFullApiAnalyticsOperationPathParamMap, FrontFullApiApplicationMessageTemplatesOperationPathParamMap, FrontFullApiApplicationsOperationPathParamMap, FrontFullApiAttachmentsOperationPathParamMap, FrontFullApiCallsOperationPathParamMap, FrontFullApiChannelsOperationPathParamMap, FrontFullApiCommentsOperationPathParamMap, FrontFullApiContactGroupsOperationPathParamMap, FrontFullApiContactHandlesOperationPathParamMap, FrontFullApiContactListsOperationPathParamMap, FrontFullApiContactNotesOperationPathParamMap, FrontFullApiContactsOperationPathParamMap, FrontFullApiConversationsOperationPathParamMap, FrontFullApiCustomFieldsOperationPathParamMap, FrontFullApiDraftsOperationPathParamMap, FrontFullApiEventsOperationPathParamMap, FrontFullApiInboxesOperationPathParamMap, FrontFullApiKnowledgeBaseArticlesOperationPathParamMap, FrontFullApiKnowledgeBaseCategoriesOperationPathParamMap, FrontFullApiKnowledgeBasesOperationPathParamMap, FrontFullApiLinksOperationPathParamMap, FrontFullApiMessageTemplateFoldersOperationPathParamMap, FrontFullApiMessageTemplatesOperationPathParamMap, FrontFullApiMessagesOperationPathParamMap, FrontFullApiRulesOperationPathParamMap, FrontFullApiShiftsOperationPathParamMap, FrontFullApiSignaturesOperationPathParamMap, FrontFullApiStatusesOperationPathParamMap, FrontFullApiTagsOperationPathParamMap, FrontFullApiTeammateGroupsOperationPathParamMap, FrontFullApiTeammatesOperationPathParamMap, FrontFullApiTeamsOperationPathParamMap, FrontFullApiTimeOffOperationPathParamMap, FrontFullApiTokenIdentityOperationPathParamMap, FrontFullApiViewsOperationPathParamMap {}

export type FrontFullApiOperationKey = keyof FrontFullApiOperationPathParamMap & string;

export type FrontFullApiOperationQueryInput<OperationKey extends FrontFullApiOperationKey> =
  FrontFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: FrontFullApiOperationQueryMap[OperationKey] }
    : { query?: FrontFullApiOperationQueryMap[OperationKey] };

export type FrontFullApiOperationBodyInput<OperationKey extends FrontFullApiOperationKey> =
  [FrontFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : FrontFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: FrontFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: FrontFullApiOperationRequestBodyMap[OperationKey] };

export type FrontFullApiOperationInput<OperationKey extends FrontFullApiOperationKey> = Omit<FrontOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends FrontFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: FrontFullApiOperationPathParamMap[OperationKey] }
) & FrontFullApiOperationQueryInput<OperationKey> & FrontFullApiOperationBodyInput<OperationKey>;

export interface FrontFullApiOperationRequestMap extends FrontFullApiAccountsOperationRequestMap, FrontFullApiAnalyticsOperationRequestMap, FrontFullApiApplicationMessageTemplatesOperationRequestMap, FrontFullApiApplicationsOperationRequestMap, FrontFullApiAttachmentsOperationRequestMap, FrontFullApiCallsOperationRequestMap, FrontFullApiChannelsOperationRequestMap, FrontFullApiCommentsOperationRequestMap, FrontFullApiContactGroupsOperationRequestMap, FrontFullApiContactHandlesOperationRequestMap, FrontFullApiContactListsOperationRequestMap, FrontFullApiContactNotesOperationRequestMap, FrontFullApiContactsOperationRequestMap, FrontFullApiConversationsOperationRequestMap, FrontFullApiCustomFieldsOperationRequestMap, FrontFullApiDraftsOperationRequestMap, FrontFullApiEventsOperationRequestMap, FrontFullApiInboxesOperationRequestMap, FrontFullApiKnowledgeBaseArticlesOperationRequestMap, FrontFullApiKnowledgeBaseCategoriesOperationRequestMap, FrontFullApiKnowledgeBasesOperationRequestMap, FrontFullApiLinksOperationRequestMap, FrontFullApiMessageTemplateFoldersOperationRequestMap, FrontFullApiMessageTemplatesOperationRequestMap, FrontFullApiMessagesOperationRequestMap, FrontFullApiRulesOperationRequestMap, FrontFullApiShiftsOperationRequestMap, FrontFullApiSignaturesOperationRequestMap, FrontFullApiStatusesOperationRequestMap, FrontFullApiTagsOperationRequestMap, FrontFullApiTeammateGroupsOperationRequestMap, FrontFullApiTeammatesOperationRequestMap, FrontFullApiTeamsOperationRequestMap, FrontFullApiTimeOffOperationRequestMap, FrontFullApiTokenIdentityOperationRequestMap, FrontFullApiViewsOperationRequestMap {}

export type FrontFullApiOperationArgs<OperationKey extends FrontFullApiOperationKey> = {} extends FrontFullApiOperationPathParamMap[OperationKey]
  ? [input?: FrontFullApiOperationRequestMap[OperationKey]]
  : [input: FrontFullApiOperationRequestMap[OperationKey]];

export type FrontGeneratedOperationCaller = <OperationKey extends FrontFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: FrontFullApiOperationArgs<OperationKey>
) => Promise<FrontFullApiOperationResponseMap[OperationKey]>;

export interface FrontFullApiGeneratedClient extends FrontFullApiAccountsGeneratedClient, FrontFullApiAnalyticsGeneratedClient, FrontFullApiApplicationMessageTemplatesGeneratedClient, FrontFullApiApplicationsGeneratedClient, FrontFullApiAttachmentsGeneratedClient, FrontFullApiCallsGeneratedClient, FrontFullApiChannelsGeneratedClient, FrontFullApiCommentsGeneratedClient, FrontFullApiContactGroupsGeneratedClient, FrontFullApiContactHandlesGeneratedClient, FrontFullApiContactListsGeneratedClient, FrontFullApiContactNotesGeneratedClient, FrontFullApiContactsGeneratedClient, FrontFullApiConversationsGeneratedClient, FrontFullApiCustomFieldsGeneratedClient, FrontFullApiDraftsGeneratedClient, FrontFullApiEventsGeneratedClient, FrontFullApiInboxesGeneratedClient, FrontFullApiKnowledgeBaseArticlesGeneratedClient, FrontFullApiKnowledgeBaseCategoriesGeneratedClient, FrontFullApiKnowledgeBasesGeneratedClient, FrontFullApiLinksGeneratedClient, FrontFullApiMessageTemplateFoldersGeneratedClient, FrontFullApiMessageTemplatesGeneratedClient, FrontFullApiMessagesGeneratedClient, FrontFullApiRulesGeneratedClient, FrontFullApiShiftsGeneratedClient, FrontFullApiSignaturesGeneratedClient, FrontFullApiStatusesGeneratedClient, FrontFullApiTagsGeneratedClient, FrontFullApiTeammateGroupsGeneratedClient, FrontFullApiTeammatesGeneratedClient, FrontFullApiTeamsGeneratedClient, FrontFullApiTimeOffGeneratedClient, FrontFullApiTokenIdentityGeneratedClient, FrontFullApiViewsGeneratedClient {}

export const FRONT_FULL_API_GENERATED_FUNCTION_COUNT = 255 as const;
export const FRONT_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...FrontFullApiAccountsGeneratedFunctionNames,
  ...FrontFullApiAnalyticsGeneratedFunctionNames,
  ...FrontFullApiApplicationMessageTemplatesGeneratedFunctionNames,
  ...FrontFullApiApplicationsGeneratedFunctionNames,
  ...FrontFullApiAttachmentsGeneratedFunctionNames,
  ...FrontFullApiCallsGeneratedFunctionNames,
  ...FrontFullApiChannelsGeneratedFunctionNames,
  ...FrontFullApiCommentsGeneratedFunctionNames,
  ...FrontFullApiContactGroupsGeneratedFunctionNames,
  ...FrontFullApiContactHandlesGeneratedFunctionNames,
  ...FrontFullApiContactListsGeneratedFunctionNames,
  ...FrontFullApiContactNotesGeneratedFunctionNames,
  ...FrontFullApiContactsGeneratedFunctionNames,
  ...FrontFullApiConversationsGeneratedFunctionNames,
  ...FrontFullApiCustomFieldsGeneratedFunctionNames,
  ...FrontFullApiDraftsGeneratedFunctionNames,
  ...FrontFullApiEventsGeneratedFunctionNames,
  ...FrontFullApiInboxesGeneratedFunctionNames,
  ...FrontFullApiKnowledgeBaseArticlesGeneratedFunctionNames,
  ...FrontFullApiKnowledgeBaseCategoriesGeneratedFunctionNames,
  ...FrontFullApiKnowledgeBasesGeneratedFunctionNames,
  ...FrontFullApiLinksGeneratedFunctionNames,
  ...FrontFullApiMessageTemplateFoldersGeneratedFunctionNames,
  ...FrontFullApiMessageTemplatesGeneratedFunctionNames,
  ...FrontFullApiMessagesGeneratedFunctionNames,
  ...FrontFullApiRulesGeneratedFunctionNames,
  ...FrontFullApiShiftsGeneratedFunctionNames,
  ...FrontFullApiSignaturesGeneratedFunctionNames,
  ...FrontFullApiStatusesGeneratedFunctionNames,
  ...FrontFullApiTagsGeneratedFunctionNames,
  ...FrontFullApiTeammateGroupsGeneratedFunctionNames,
  ...FrontFullApiTeammatesGeneratedFunctionNames,
  ...FrontFullApiTeamsGeneratedFunctionNames,
  ...FrontFullApiTimeOffGeneratedFunctionNames,
  ...FrontFullApiTokenIdentityGeneratedFunctionNames,
  ...FrontFullApiViewsGeneratedFunctionNames,
] as const satisfies readonly (keyof FrontFullApiGeneratedClient)[];

export function createFrontFullApiGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiGeneratedClient {
  return Object.assign(
    {},
    createFrontFullApiAccountsGeneratedClient(callOperation),
    createFrontFullApiAnalyticsGeneratedClient(callOperation),
    createFrontFullApiApplicationMessageTemplatesGeneratedClient(callOperation),
    createFrontFullApiApplicationsGeneratedClient(callOperation),
    createFrontFullApiAttachmentsGeneratedClient(callOperation),
    createFrontFullApiCallsGeneratedClient(callOperation),
    createFrontFullApiChannelsGeneratedClient(callOperation),
    createFrontFullApiCommentsGeneratedClient(callOperation),
    createFrontFullApiContactGroupsGeneratedClient(callOperation),
    createFrontFullApiContactHandlesGeneratedClient(callOperation),
    createFrontFullApiContactListsGeneratedClient(callOperation),
    createFrontFullApiContactNotesGeneratedClient(callOperation),
    createFrontFullApiContactsGeneratedClient(callOperation),
    createFrontFullApiConversationsGeneratedClient(callOperation),
    createFrontFullApiCustomFieldsGeneratedClient(callOperation),
    createFrontFullApiDraftsGeneratedClient(callOperation),
    createFrontFullApiEventsGeneratedClient(callOperation),
    createFrontFullApiInboxesGeneratedClient(callOperation),
    createFrontFullApiKnowledgeBaseArticlesGeneratedClient(callOperation),
    createFrontFullApiKnowledgeBaseCategoriesGeneratedClient(callOperation),
    createFrontFullApiKnowledgeBasesGeneratedClient(callOperation),
    createFrontFullApiLinksGeneratedClient(callOperation),
    createFrontFullApiMessageTemplateFoldersGeneratedClient(callOperation),
    createFrontFullApiMessageTemplatesGeneratedClient(callOperation),
    createFrontFullApiMessagesGeneratedClient(callOperation),
    createFrontFullApiRulesGeneratedClient(callOperation),
    createFrontFullApiShiftsGeneratedClient(callOperation),
    createFrontFullApiSignaturesGeneratedClient(callOperation),
    createFrontFullApiStatusesGeneratedClient(callOperation),
    createFrontFullApiTagsGeneratedClient(callOperation),
    createFrontFullApiTeammateGroupsGeneratedClient(callOperation),
    createFrontFullApiTeammatesGeneratedClient(callOperation),
    createFrontFullApiTeamsGeneratedClient(callOperation),
    createFrontFullApiTimeOffGeneratedClient(callOperation),
    createFrontFullApiTokenIdentityGeneratedClient(callOperation),
    createFrontFullApiViewsGeneratedClient(callOperation),
  ) as FrontFullApiGeneratedClient;
}
