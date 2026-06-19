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
export const HubSpotFullApiWebsitePagesOperationKeys = [
  "cms:pages:2026-03:put-/cms/pages/2026-03/landing-pages/multi-language/set-new-lang-primary_setLangPrimary",
  "cms:pages:2026-03:get-/cms/pages/2026-03/site-pages_getPage",
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages_create",
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/clone_clone",
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/schedule_schedule",
  "cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}_getById",
  "cms:pages:2026-03:delete-/cms/pages/2026-03/site-pages/{objectId}_archive",
  "cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}_update",
  "cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}/draft_getDraftById",
  "cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}/draft_updateDraft",
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/draft/push-live_pushLive"
] as const;
export type HubSpotFullApiWebsitePagesOperationKey = typeof HubSpotFullApiWebsitePagesOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiWebsitePagesOperationPathParamMap {
  "cms:pages:2026-03:put-/cms/pages/2026-03/landing-pages/multi-language/set-new-lang-primary_setLangPrimary": {};
  "cms:pages:2026-03:get-/cms/pages/2026-03/site-pages_getPage": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages_create": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/clone_clone": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/schedule_schedule": {};
  "cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}_getById": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:delete-/cms/pages/2026-03/site-pages/{objectId}_archive": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}_update": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}/draft_getDraftById": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}/draft_updateDraft": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/draft/push-live_pushLive": { "objectId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiWebsitePagesOperationRequestMap {
  "cms:pages:2026-03:put-/cms/pages/2026-03/landing-pages/multi-language/set-new-lang-primary_setLangPrimary": HubSpotFullApiOperationInput<"cms:pages:2026-03:put-/cms/pages/2026-03/landing-pages/multi-language/set-new-lang-primary_setLangPrimary">;
  "cms:pages:2026-03:get-/cms/pages/2026-03/site-pages_getPage": HubSpotFullApiOperationInput<"cms:pages:2026-03:get-/cms/pages/2026-03/site-pages_getPage">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages_create": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages_create">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/clone_clone": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/clone_clone">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/schedule_schedule": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/schedule_schedule">;
  "cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}_getById": HubSpotFullApiOperationInput<"cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}_getById">;
  "cms:pages:2026-03:delete-/cms/pages/2026-03/site-pages/{objectId}_archive": HubSpotFullApiOperationInput<"cms:pages:2026-03:delete-/cms/pages/2026-03/site-pages/{objectId}_archive">;
  "cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}_update": HubSpotFullApiOperationInput<"cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}_update">;
  "cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}/draft_getDraftById": HubSpotFullApiOperationInput<"cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}/draft_getDraftById">;
  "cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}/draft_updateDraft": HubSpotFullApiOperationInput<"cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}/draft_updateDraft">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/draft/push-live_pushLive": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/draft/push-live_pushLive">;
}

export interface HubSpotFullApiWebsitePagesGeneratedClient {
  PagesPutCmsPages202603LandingPagesMultiLanguageSetNewLangPrimarySetLangPrimary(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:put-/cms/pages/2026-03/landing-pages/multi-language/set-new-lang-primary_setLangPrimary">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:put-/cms/pages/2026-03/landing-pages/multi-language/set-new-lang-primary_setLangPrimary"]>;
  PagesGetCmsPages202603SitePagesGetPage(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/site-pages_getPage">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:get-/cms/pages/2026-03/site-pages_getPage"]>;
  PagesPostCmsPages202603SitePagesCreate(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages_create">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/site-pages_create"]>;
  PagesPostCmsPages202603SitePagesCloneClone(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/clone_clone">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/clone_clone"]>;
  PagesPostCmsPages202603SitePagesScheduleSchedule(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/schedule_schedule">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/schedule_schedule"]>;
  PagesGetCmsPages202603SitePagesObjectIdGetById(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}_getById">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}_getById"]>;
  PagesDeleteCmsPages202603SitePagesObjectIdArchive(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:delete-/cms/pages/2026-03/site-pages/{objectId}_archive">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:delete-/cms/pages/2026-03/site-pages/{objectId}_archive"]>;
  PagesPatchCmsPages202603SitePagesObjectIdUpdate(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}_update">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}_update"]>;
  PagesGetCmsPages202603SitePagesObjectIdDraftGetDraftById(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}/draft_getDraftById">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}/draft_getDraftById"]>;
  PagesPatchCmsPages202603SitePagesObjectIdDraftUpdateDraft(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}/draft_updateDraft">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}/draft_updateDraft"]>;
  PagesPostCmsPages202603SitePagesObjectIdDraftPushLivePushLive(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/draft/push-live_pushLive">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/draft/push-live_pushLive"]>;
}

export const HubSpotFullApiWebsitePagesGeneratedFunctionNames = [
  "PagesPutCmsPages202603LandingPagesMultiLanguageSetNewLangPrimarySetLangPrimary",
  "PagesGetCmsPages202603SitePagesGetPage",
  "PagesPostCmsPages202603SitePagesCreate",
  "PagesPostCmsPages202603SitePagesCloneClone",
  "PagesPostCmsPages202603SitePagesScheduleSchedule",
  "PagesGetCmsPages202603SitePagesObjectIdGetById",
  "PagesDeleteCmsPages202603SitePagesObjectIdArchive",
  "PagesPatchCmsPages202603SitePagesObjectIdUpdate",
  "PagesGetCmsPages202603SitePagesObjectIdDraftGetDraftById",
  "PagesPatchCmsPages202603SitePagesObjectIdDraftUpdateDraft",
  "PagesPostCmsPages202603SitePagesObjectIdDraftPushLivePushLive"
] as const satisfies readonly (keyof HubSpotFullApiWebsitePagesGeneratedClient)[];

export function createHubSpotFullApiWebsitePagesGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiWebsitePagesGeneratedClient {
  return {
    PagesPutCmsPages202603LandingPagesMultiLanguageSetNewLangPrimarySetLangPrimary: (...args) => callOperation("cms:pages:2026-03:put-/cms/pages/2026-03/landing-pages/multi-language/set-new-lang-primary_setLangPrimary", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:put-/cms/pages/2026-03/landing-pages/multi-language/set-new-lang-primary_setLangPrimary">)),
    PagesGetCmsPages202603SitePagesGetPage: (...args) => callOperation("cms:pages:2026-03:get-/cms/pages/2026-03/site-pages_getPage", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/site-pages_getPage">)),
    PagesPostCmsPages202603SitePagesCreate: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/site-pages_create", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages_create">)),
    PagesPostCmsPages202603SitePagesCloneClone: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/clone_clone", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/clone_clone">)),
    PagesPostCmsPages202603SitePagesScheduleSchedule: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/schedule_schedule", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/schedule_schedule">)),
    PagesGetCmsPages202603SitePagesObjectIdGetById: (...args) => callOperation("cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}_getById", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}_getById">)),
    PagesDeleteCmsPages202603SitePagesObjectIdArchive: (...args) => callOperation("cms:pages:2026-03:delete-/cms/pages/2026-03/site-pages/{objectId}_archive", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:delete-/cms/pages/2026-03/site-pages/{objectId}_archive">)),
    PagesPatchCmsPages202603SitePagesObjectIdUpdate: (...args) => callOperation("cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}_update", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}_update">)),
    PagesGetCmsPages202603SitePagesObjectIdDraftGetDraftById: (...args) => callOperation("cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}/draft_getDraftById", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/site-pages/{objectId}/draft_getDraftById">)),
    PagesPatchCmsPages202603SitePagesObjectIdDraftUpdateDraft: (...args) => callOperation("cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}/draft_updateDraft", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:patch-/cms/pages/2026-03/site-pages/{objectId}/draft_updateDraft">)),
    PagesPostCmsPages202603SitePagesObjectIdDraftPushLivePushLive: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/draft/push-live_pushLive", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/{objectId}/draft/push-live_pushLive">)),
  };
}
