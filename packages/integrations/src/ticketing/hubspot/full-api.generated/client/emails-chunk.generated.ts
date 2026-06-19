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
export const HubSpotFullApiEmailsOperationKeys = [
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/ab-test/create-variation_createAbTestVariation",
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/clone_clone",
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}_getById",
  "marketing:marketing-emails:2026-03:delete-/marketing/emails/2026-03/{emailId}_archive",
  "marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}_update",
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/ab-test/get-variation_getAbTestVariation",
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/draft_getDraft",
  "marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}/draft_upsertDraft",
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/draft/reset_resetDraft",
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/publish_publishOrSend",
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions_getRevisions",
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}_getRevisionById",
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore_restoreRevision",
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore-to-draft_restoreDraftRevision",
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/unpublish_unpublishOrCancel"
] as const;
export type HubSpotFullApiEmailsOperationKey = typeof HubSpotFullApiEmailsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiEmailsOperationPathParamMap {
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/ab-test/create-variation_createAbTestVariation": {};
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/clone_clone": {};
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}_getById": { "emailId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:delete-/marketing/emails/2026-03/{emailId}_archive": { "emailId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}_update": { "emailId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/ab-test/get-variation_getAbTestVariation": { "emailId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/draft_getDraft": { "emailId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}/draft_upsertDraft": { "emailId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/draft/reset_resetDraft": { "emailId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/publish_publishOrSend": { "emailId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions_getRevisions": { "emailId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}_getRevisionById": { "emailId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore_restoreRevision": { "emailId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore-to-draft_restoreDraftRevision": { "emailId": HubSpotFullApiPathParamValue; "revisionId": HubSpotFullApiPathParamValue };
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/unpublish_unpublishOrCancel": { "emailId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiEmailsOperationRequestMap {
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/ab-test/create-variation_createAbTestVariation": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/ab-test/create-variation_createAbTestVariation">;
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/clone_clone": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/clone_clone">;
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}_getById": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}_getById">;
  "marketing:marketing-emails:2026-03:delete-/marketing/emails/2026-03/{emailId}_archive": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:delete-/marketing/emails/2026-03/{emailId}_archive">;
  "marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}_update": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}_update">;
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/ab-test/get-variation_getAbTestVariation": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/ab-test/get-variation_getAbTestVariation">;
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/draft_getDraft": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/draft_getDraft">;
  "marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}/draft_upsertDraft": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}/draft_upsertDraft">;
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/draft/reset_resetDraft": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/draft/reset_resetDraft">;
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/publish_publishOrSend": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/publish_publishOrSend">;
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions_getRevisions": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions_getRevisions">;
  "marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}_getRevisionById": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}_getRevisionById">;
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore_restoreRevision": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore_restoreRevision">;
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore-to-draft_restoreDraftRevision": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore-to-draft_restoreDraftRevision">;
  "marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/unpublish_unpublishOrCancel": HubSpotFullApiOperationInput<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/unpublish_unpublishOrCancel">;
}

export interface HubSpotFullApiEmailsGeneratedClient {
  MarketingEmailsPostMarketingEmails202603AbTestCreateVariationCreateAbTestVariation(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/ab-test/create-variation_createAbTestVariation">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/ab-test/create-variation_createAbTestVariation"]>;
  MarketingEmailsPostMarketingEmails202603CloneClone(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/clone_clone">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/clone_clone"]>;
  MarketingEmailsGetMarketingEmails202603EmailIdGetById(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}_getById">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}_getById"]>;
  MarketingEmailsDeleteMarketingEmails202603EmailIdArchive(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:delete-/marketing/emails/2026-03/{emailId}_archive">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:delete-/marketing/emails/2026-03/{emailId}_archive"]>;
  MarketingEmailsPatchMarketingEmails202603EmailIdUpdate(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}_update">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}_update"]>;
  MarketingEmailsGetMarketingEmails202603EmailIdAbTestGetVariationGetAbTestVariation(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/ab-test/get-variation_getAbTestVariation">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/ab-test/get-variation_getAbTestVariation"]>;
  MarketingEmailsGetMarketingEmails202603EmailIdDraftGetDraft(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/draft_getDraft">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/draft_getDraft"]>;
  MarketingEmailsPatchMarketingEmails202603EmailIdDraftUpsertDraft(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}/draft_upsertDraft">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}/draft_upsertDraft"]>;
  MarketingEmailsPostMarketingEmails202603EmailIdDraftResetResetDraft(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/draft/reset_resetDraft">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/draft/reset_resetDraft"]>;
  MarketingEmailsPostMarketingEmails202603EmailIdPublishPublishOrSend(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/publish_publishOrSend">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/publish_publishOrSend"]>;
  MarketingEmailsGetMarketingEmails202603EmailIdRevisionsGetRevisions(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions_getRevisions">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions_getRevisions"]>;
  MarketingEmailsGetMarketingEmails202603EmailIdRevisionsRevisionIdGetRevisionById(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}_getRevisionById">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}_getRevisionById"]>;
  MarketingEmailsPostMarketingEmails202603EmailIdRevisionsRevisionIdRestoreRestoreRevision(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore_restoreRevision">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore_restoreRevision"]>;
  MarketingEmailsPostMarketingEmails202603EmailIdRevisionsRevisionIdRestoreToDraftRestoreDraftRevision(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore-to-draft_restoreDraftRevision">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore-to-draft_restoreDraftRevision"]>;
  MarketingEmailsPostMarketingEmails202603EmailIdUnpublishUnpublishOrCancel(...args: HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/unpublish_unpublishOrCancel">): Promise<HubSpotFullApiOperationResponseMap["marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/unpublish_unpublishOrCancel"]>;
}

export const HubSpotFullApiEmailsGeneratedFunctionNames = [
  "MarketingEmailsPostMarketingEmails202603AbTestCreateVariationCreateAbTestVariation",
  "MarketingEmailsPostMarketingEmails202603CloneClone",
  "MarketingEmailsGetMarketingEmails202603EmailIdGetById",
  "MarketingEmailsDeleteMarketingEmails202603EmailIdArchive",
  "MarketingEmailsPatchMarketingEmails202603EmailIdUpdate",
  "MarketingEmailsGetMarketingEmails202603EmailIdAbTestGetVariationGetAbTestVariation",
  "MarketingEmailsGetMarketingEmails202603EmailIdDraftGetDraft",
  "MarketingEmailsPatchMarketingEmails202603EmailIdDraftUpsertDraft",
  "MarketingEmailsPostMarketingEmails202603EmailIdDraftResetResetDraft",
  "MarketingEmailsPostMarketingEmails202603EmailIdPublishPublishOrSend",
  "MarketingEmailsGetMarketingEmails202603EmailIdRevisionsGetRevisions",
  "MarketingEmailsGetMarketingEmails202603EmailIdRevisionsRevisionIdGetRevisionById",
  "MarketingEmailsPostMarketingEmails202603EmailIdRevisionsRevisionIdRestoreRestoreRevision",
  "MarketingEmailsPostMarketingEmails202603EmailIdRevisionsRevisionIdRestoreToDraftRestoreDraftRevision",
  "MarketingEmailsPostMarketingEmails202603EmailIdUnpublishUnpublishOrCancel"
] as const satisfies readonly (keyof HubSpotFullApiEmailsGeneratedClient)[];

export function createHubSpotFullApiEmailsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiEmailsGeneratedClient {
  return {
    MarketingEmailsPostMarketingEmails202603AbTestCreateVariationCreateAbTestVariation: (...args) => callOperation("marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/ab-test/create-variation_createAbTestVariation", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/ab-test/create-variation_createAbTestVariation">)),
    MarketingEmailsPostMarketingEmails202603CloneClone: (...args) => callOperation("marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/clone_clone", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/clone_clone">)),
    MarketingEmailsGetMarketingEmails202603EmailIdGetById: (...args) => callOperation("marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}_getById", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}_getById">)),
    MarketingEmailsDeleteMarketingEmails202603EmailIdArchive: (...args) => callOperation("marketing:marketing-emails:2026-03:delete-/marketing/emails/2026-03/{emailId}_archive", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:delete-/marketing/emails/2026-03/{emailId}_archive">)),
    MarketingEmailsPatchMarketingEmails202603EmailIdUpdate: (...args) => callOperation("marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}_update", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}_update">)),
    MarketingEmailsGetMarketingEmails202603EmailIdAbTestGetVariationGetAbTestVariation: (...args) => callOperation("marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/ab-test/get-variation_getAbTestVariation", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/ab-test/get-variation_getAbTestVariation">)),
    MarketingEmailsGetMarketingEmails202603EmailIdDraftGetDraft: (...args) => callOperation("marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/draft_getDraft", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/draft_getDraft">)),
    MarketingEmailsPatchMarketingEmails202603EmailIdDraftUpsertDraft: (...args) => callOperation("marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}/draft_upsertDraft", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:patch-/marketing/emails/2026-03/{emailId}/draft_upsertDraft">)),
    MarketingEmailsPostMarketingEmails202603EmailIdDraftResetResetDraft: (...args) => callOperation("marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/draft/reset_resetDraft", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/draft/reset_resetDraft">)),
    MarketingEmailsPostMarketingEmails202603EmailIdPublishPublishOrSend: (...args) => callOperation("marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/publish_publishOrSend", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/publish_publishOrSend">)),
    MarketingEmailsGetMarketingEmails202603EmailIdRevisionsGetRevisions: (...args) => callOperation("marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions_getRevisions", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions_getRevisions">)),
    MarketingEmailsGetMarketingEmails202603EmailIdRevisionsRevisionIdGetRevisionById: (...args) => callOperation("marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}_getRevisionById", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:get-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}_getRevisionById">)),
    MarketingEmailsPostMarketingEmails202603EmailIdRevisionsRevisionIdRestoreRestoreRevision: (...args) => callOperation("marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore_restoreRevision", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore_restoreRevision">)),
    MarketingEmailsPostMarketingEmails202603EmailIdRevisionsRevisionIdRestoreToDraftRestoreDraftRevision: (...args) => callOperation("marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore-to-draft_restoreDraftRevision", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/revisions/{revisionId}/restore-to-draft_restoreDraftRevision">)),
    MarketingEmailsPostMarketingEmails202603EmailIdUnpublishUnpublishOrCancel: (...args) => callOperation("marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/unpublish_unpublishOrCancel", ...(args as HubSpotFullApiOperationArgs<"marketing:marketing-emails:2026-03:post-/marketing/emails/2026-03/{emailId}/unpublish_unpublishOrCancel">)),
  };
}
