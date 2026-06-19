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
export const HubSpotFullApiLandingPagesOperationKeys = [
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages_getPage",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages_create",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/clone_clone",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/schedule_schedule",
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}_getById",
  "cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/{objectId}_archive",
  "cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}_update",
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/draft_getDraftById",
  "cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}/draft_updateDraft",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/push-live_pushLive",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/reset_resetDraft"
] as const;
export type HubSpotFullApiLandingPagesOperationKey = typeof HubSpotFullApiLandingPagesOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiLandingPagesOperationPathParamMap {
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages_getPage": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages_create": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/clone_clone": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/schedule_schedule": {};
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}_getById": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/{objectId}_archive": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}_update": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/draft_getDraftById": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}/draft_updateDraft": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/push-live_pushLive": { "objectId": HubSpotFullApiPathParamValue };
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/reset_resetDraft": { "objectId": HubSpotFullApiPathParamValue };
}

export interface HubSpotFullApiLandingPagesOperationRequestMap {
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages_getPage": HubSpotFullApiOperationInput<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages_getPage">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages_create": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages_create">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/clone_clone": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/clone_clone">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/schedule_schedule": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/schedule_schedule">;
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}_getById": HubSpotFullApiOperationInput<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}_getById">;
  "cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/{objectId}_archive": HubSpotFullApiOperationInput<"cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/{objectId}_archive">;
  "cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}_update": HubSpotFullApiOperationInput<"cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}_update">;
  "cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/draft_getDraftById": HubSpotFullApiOperationInput<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/draft_getDraftById">;
  "cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}/draft_updateDraft": HubSpotFullApiOperationInput<"cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}/draft_updateDraft">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/push-live_pushLive": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/push-live_pushLive">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/reset_resetDraft": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/reset_resetDraft">;
}

export interface HubSpotFullApiLandingPagesGeneratedClient {
  PagesGetCmsPages202603LandingPagesGetPage(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages_getPage">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages_getPage"]>;
  PagesPostCmsPages202603LandingPagesCreate(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages_create">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages_create"]>;
  PagesPostCmsPages202603LandingPagesCloneClone(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/clone_clone">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/clone_clone"]>;
  PagesPostCmsPages202603LandingPagesScheduleSchedule(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/schedule_schedule">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/schedule_schedule"]>;
  PagesGetCmsPages202603LandingPagesObjectIdGetById(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}_getById">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}_getById"]>;
  PagesDeleteCmsPages202603LandingPagesObjectIdArchive(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/{objectId}_archive">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/{objectId}_archive"]>;
  PagesPatchCmsPages202603LandingPagesObjectIdUpdate(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}_update">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}_update"]>;
  PagesGetCmsPages202603LandingPagesObjectIdDraftGetDraftById(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/draft_getDraftById">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/draft_getDraftById"]>;
  PagesPatchCmsPages202603LandingPagesObjectIdDraftUpdateDraft(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}/draft_updateDraft">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}/draft_updateDraft"]>;
  PagesPostCmsPages202603LandingPagesObjectIdDraftPushLivePushLive(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/push-live_pushLive">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/push-live_pushLive"]>;
  PagesPostCmsPages202603LandingPagesObjectIdDraftResetResetDraft(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/reset_resetDraft">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/reset_resetDraft"]>;
}

export const HubSpotFullApiLandingPagesGeneratedFunctionNames = [
  "PagesGetCmsPages202603LandingPagesGetPage",
  "PagesPostCmsPages202603LandingPagesCreate",
  "PagesPostCmsPages202603LandingPagesCloneClone",
  "PagesPostCmsPages202603LandingPagesScheduleSchedule",
  "PagesGetCmsPages202603LandingPagesObjectIdGetById",
  "PagesDeleteCmsPages202603LandingPagesObjectIdArchive",
  "PagesPatchCmsPages202603LandingPagesObjectIdUpdate",
  "PagesGetCmsPages202603LandingPagesObjectIdDraftGetDraftById",
  "PagesPatchCmsPages202603LandingPagesObjectIdDraftUpdateDraft",
  "PagesPostCmsPages202603LandingPagesObjectIdDraftPushLivePushLive",
  "PagesPostCmsPages202603LandingPagesObjectIdDraftResetResetDraft"
] as const satisfies readonly (keyof HubSpotFullApiLandingPagesGeneratedClient)[];

export function createHubSpotFullApiLandingPagesGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiLandingPagesGeneratedClient {
  return {
    PagesGetCmsPages202603LandingPagesGetPage: (...args) => callOperation("cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages_getPage", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages_getPage">)),
    PagesPostCmsPages202603LandingPagesCreate: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages_create", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages_create">)),
    PagesPostCmsPages202603LandingPagesCloneClone: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/clone_clone", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/clone_clone">)),
    PagesPostCmsPages202603LandingPagesScheduleSchedule: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/schedule_schedule", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/schedule_schedule">)),
    PagesGetCmsPages202603LandingPagesObjectIdGetById: (...args) => callOperation("cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}_getById", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}_getById">)),
    PagesDeleteCmsPages202603LandingPagesObjectIdArchive: (...args) => callOperation("cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/{objectId}_archive", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:delete-/cms/pages/2026-03/landing-pages/{objectId}_archive">)),
    PagesPatchCmsPages202603LandingPagesObjectIdUpdate: (...args) => callOperation("cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}_update", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}_update">)),
    PagesGetCmsPages202603LandingPagesObjectIdDraftGetDraftById: (...args) => callOperation("cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/draft_getDraftById", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:get-/cms/pages/2026-03/landing-pages/{objectId}/draft_getDraftById">)),
    PagesPatchCmsPages202603LandingPagesObjectIdDraftUpdateDraft: (...args) => callOperation("cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}/draft_updateDraft", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:patch-/cms/pages/2026-03/landing-pages/{objectId}/draft_updateDraft">)),
    PagesPostCmsPages202603LandingPagesObjectIdDraftPushLivePushLive: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/push-live_pushLive", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/push-live_pushLive">)),
    PagesPostCmsPages202603LandingPagesObjectIdDraftResetResetDraft: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/reset_resetDraft", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/{objectId}/draft/reset_resetDraft">)),
  };
}
