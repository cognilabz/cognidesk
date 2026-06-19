// Generated endpoint chunk for HubSpotFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  HubSpotGeneratedOperationCaller,
  HubSpotFullApiOperationArgs,
  HubSpotFullApiOperationInput,
  HubSpotFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { HubSpotFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const HubSpotFullApiRevisionsOperationKeys = [
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions_getPreviousVersions",
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}_getPreviousVersion",
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion",
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft",
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions_getPage",
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions/{revisionId}_getById"
] as const;
export type HubSpotFullApiRevisionsOperationKey = typeof HubSpotFullApiRevisionsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiRevisionsOperationPathParamMap {
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions_getPreviousVersions": { "objectId": HubSpotFullApiPathParamValue };
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}_getPreviousVersion": { "objectId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion": { "objectId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft": { "objectId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions_getPage": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue };
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions/{revisionId}_getById": { "appId": HubSpotFullApiPathParamValue; "definitionId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiRevisionsOperationRequestMap {
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions_getPreviousVersions": HubSpotFullApiOperationInput<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions_getPreviousVersions">;
  "cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}_getPreviousVersion": HubSpotFullApiOperationInput<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}_getPreviousVersion">;
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion": HubSpotFullApiOperationInput<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion">;
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft": HubSpotFullApiOperationInput<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft">;
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions_getPage": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions_getPage">;
  "automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions/{revisionId}_getById": HubSpotFullApiOperationInput<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions/{revisionId}_getById">;
}

export interface HubSpotFullApiRevisionsGeneratedClient {
  PostsGetCmsBlogs202603PostsObjectIdRevisionsGetPreviousVersions(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions_getPreviousVersions">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions_getPreviousVersions"]>;
  PostsGetCmsBlogs202603PostsObjectIdRevisionsRevisionIdGetPreviousVersion(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}_getPreviousVersion">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}_getPreviousVersion"]>;
  PostsPostCmsBlogs202603PostsObjectIdRevisionsRevisionIdRestoreRestorePreviousVersion(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion"]>;
  PostsPostCmsBlogs202603PostsObjectIdRevisionsRevisionIdRestoreToDraftRestorePreviousVersionToDraft(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft"]>;
  ActionsV4GetAutomationActions202603AppIdDefinitionIdRevisionsGetPage(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions_getPage">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions_getPage"]>;
  ActionsV4GetAutomationActions202603AppIdDefinitionIdRevisionsRevisionIdGetById(...args: HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions/{revisionId}_getById">): Promise<HubSpotFullApiOperationResponseMap["automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions/{revisionId}_getById"]>;
}

export const HubSpotFullApiRevisionsGeneratedFunctionNames = [
  "PostsGetCmsBlogs202603PostsObjectIdRevisionsGetPreviousVersions",
  "PostsGetCmsBlogs202603PostsObjectIdRevisionsRevisionIdGetPreviousVersion",
  "PostsPostCmsBlogs202603PostsObjectIdRevisionsRevisionIdRestoreRestorePreviousVersion",
  "PostsPostCmsBlogs202603PostsObjectIdRevisionsRevisionIdRestoreToDraftRestorePreviousVersionToDraft",
  "ActionsV4GetAutomationActions202603AppIdDefinitionIdRevisionsGetPage",
  "ActionsV4GetAutomationActions202603AppIdDefinitionIdRevisionsRevisionIdGetById"
] as const satisfies readonly (keyof HubSpotFullApiRevisionsGeneratedClient)[];

export function createHubSpotFullApiRevisionsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiRevisionsGeneratedClient {
  return {
    PostsGetCmsBlogs202603PostsObjectIdRevisionsGetPreviousVersions: (...args) => callOperation("cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions_getPreviousVersions", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions_getPreviousVersions">)),
    PostsGetCmsBlogs202603PostsObjectIdRevisionsRevisionIdGetPreviousVersion: (...args) => callOperation("cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}_getPreviousVersion", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:get-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}_getPreviousVersion">)),
    PostsPostCmsBlogs202603PostsObjectIdRevisionsRevisionIdRestoreRestorePreviousVersion: (...args) => callOperation("cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore_restorePreviousVersion">)),
    PostsPostCmsBlogs202603PostsObjectIdRevisionsRevisionIdRestoreToDraftRestorePreviousVersionToDraft: (...args) => callOperation("cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/{objectId}/revisions/{revisionId}/restore-to-draft_restorePreviousVersionToDraft">)),
    ActionsV4GetAutomationActions202603AppIdDefinitionIdRevisionsGetPage: (...args) => callOperation("automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions_getPage", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions_getPage">)),
    ActionsV4GetAutomationActions202603AppIdDefinitionIdRevisionsRevisionIdGetById: (...args) => callOperation("automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions/{revisionId}_getById", ...(args as HubSpotFullApiOperationArgs<"automation:actions-v4:2026-03:get-/automation/actions/2026-03/{appId}/{definitionId}/revisions/{revisionId}_getById">)),
  };
}
