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
export const HubSpotFullApiABTestsOperationKeys = [
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/create-variation_createABTestVariation",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/end_endActiveABTest",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/rerun_rerunPreviousABTest",
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/create-variation_createABTestVariation",
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/end_endActiveABTest",
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/rerun_rerunPreviousABTest"
] as const;
export type HubSpotFullApiABTestsOperationKey = typeof HubSpotFullApiABTestsOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiABTestsOperationPathParamMap {
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/create-variation_createABTestVariation": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/end_endActiveABTest": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/rerun_rerunPreviousABTest": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/create-variation_createABTestVariation": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/end_endActiveABTest": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/rerun_rerunPreviousABTest": {};
}

export interface HubSpotFullApiABTestsOperationRequestMap {
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/create-variation_createABTestVariation": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/create-variation_createABTestVariation">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/end_endActiveABTest": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/end_endActiveABTest">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/rerun_rerunPreviousABTest": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/rerun_rerunPreviousABTest">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/create-variation_createABTestVariation": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/create-variation_createABTestVariation">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/end_endActiveABTest": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/end_endActiveABTest">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/rerun_rerunPreviousABTest": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/rerun_rerunPreviousABTest">;
}

export interface HubSpotFullApiABTestsGeneratedClient {
  PagesPostCmsPages202603LandingPagesAbTestCreateVariationCreateABTestVariation(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/create-variation_createABTestVariation">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/create-variation_createABTestVariation"]>;
  PagesPostCmsPages202603LandingPagesAbTestEndEndActiveABTest(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/end_endActiveABTest">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/end_endActiveABTest"]>;
  PagesPostCmsPages202603LandingPagesAbTestRerunRerunPreviousABTest(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/rerun_rerunPreviousABTest">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/rerun_rerunPreviousABTest"]>;
  PagesPostCmsPages202603SitePagesAbTestCreateVariationCreateABTestVariation(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/create-variation_createABTestVariation">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/create-variation_createABTestVariation"]>;
  PagesPostCmsPages202603SitePagesAbTestEndEndActiveABTest(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/end_endActiveABTest">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/end_endActiveABTest"]>;
  PagesPostCmsPages202603SitePagesAbTestRerunRerunPreviousABTest(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/rerun_rerunPreviousABTest">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/rerun_rerunPreviousABTest"]>;
}

export const HubSpotFullApiABTestsGeneratedFunctionNames = [
  "PagesPostCmsPages202603LandingPagesAbTestCreateVariationCreateABTestVariation",
  "PagesPostCmsPages202603LandingPagesAbTestEndEndActiveABTest",
  "PagesPostCmsPages202603LandingPagesAbTestRerunRerunPreviousABTest",
  "PagesPostCmsPages202603SitePagesAbTestCreateVariationCreateABTestVariation",
  "PagesPostCmsPages202603SitePagesAbTestEndEndActiveABTest",
  "PagesPostCmsPages202603SitePagesAbTestRerunRerunPreviousABTest"
] as const satisfies readonly (keyof HubSpotFullApiABTestsGeneratedClient)[];

export function createHubSpotFullApiABTestsGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiABTestsGeneratedClient {
  return {
    PagesPostCmsPages202603LandingPagesAbTestCreateVariationCreateABTestVariation: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/create-variation_createABTestVariation", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/create-variation_createABTestVariation">)),
    PagesPostCmsPages202603LandingPagesAbTestEndEndActiveABTest: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/end_endActiveABTest", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/end_endActiveABTest">)),
    PagesPostCmsPages202603LandingPagesAbTestRerunRerunPreviousABTest: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/rerun_rerunPreviousABTest", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/ab-test/rerun_rerunPreviousABTest">)),
    PagesPostCmsPages202603SitePagesAbTestCreateVariationCreateABTestVariation: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/create-variation_createABTestVariation", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/create-variation_createABTestVariation">)),
    PagesPostCmsPages202603SitePagesAbTestEndEndActiveABTest: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/end_endActiveABTest", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/end_endActiveABTest">)),
    PagesPostCmsPages202603SitePagesAbTestRerunRerunPreviousABTest: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/rerun_rerunPreviousABTest", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/ab-test/rerun_rerunPreviousABTest">)),
  };
}
