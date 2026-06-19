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
export const HubSpotFullApiMultiLanguageOperationKeys = [
  "cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/attach-to-lang-group_attachToLangGroup",
  "cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/create-language-variation_createLangVariation",
  "cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/detach-from-lang-group_detachFromLangGroup",
  "cms:tags:2026-03:put-/cms/blogs/2026-03/tags/multi-language/set-new-lang-primary_setLangPrimary",
  "cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/update-languages_updateLangs",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/attach-to-lang-group_attachToLangGroup",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/create-language-variation_createLangVariation",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/detach-from-lang-group_detachFromLangGroup",
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/update-languages_updateLangs",
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/attach-to-lang-group_attachToLangGroup",
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/create-language-variation_createLangVariation",
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/detach-from-lang-group_detachFromLangGroup",
  "cms:pages:2026-03:put-/cms/pages/2026-03/site-pages/multi-language/set-new-lang-primary_setLangPrimary",
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/update-languages_updateLangs",
  "cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/attach-to-lang-group",
  "cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/create-language-variation",
  "cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/detach-from-lang-group",
  "cms:blog-settings:2026-03:put-/cms/blog-settings/2026-03/settings/multi-language/set-new-lang-primary",
  "cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/update-languages",
  "cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/attach-to-lang-group_attachToLangGroup",
  "cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/create-language-variation_createLangVariation",
  "cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/detach-from-lang-group_detachFromLangGroup",
  "cms:authors:2026-03:put-/cms/blogs/2026-03/authors/multi-language/set-new-lang-primary_setLangPrimary",
  "cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/update-languages_updateLangs",
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/attach-to-lang-group_attachToLangGroup",
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/create-language-variation_createLangVariation",
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/detach-from-lang-group_detachFromLangGroup",
  "cms:posts:2026-03:put-/cms/blogs/2026-03/posts/multi-language/set-new-lang-primary_setLangPrimary",
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/update-languages_updateLangs"
] as const;
export type HubSpotFullApiMultiLanguageOperationKey = typeof HubSpotFullApiMultiLanguageOperationKeys[number];
// End hardened literal operation keys.

export interface HubSpotFullApiMultiLanguageOperationPathParamMap {
  "cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/attach-to-lang-group_attachToLangGroup": {};
  "cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/create-language-variation_createLangVariation": {};
  "cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/detach-from-lang-group_detachFromLangGroup": {};
  "cms:tags:2026-03:put-/cms/blogs/2026-03/tags/multi-language/set-new-lang-primary_setLangPrimary": {};
  "cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/update-languages_updateLangs": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/attach-to-lang-group_attachToLangGroup": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/create-language-variation_createLangVariation": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/detach-from-lang-group_detachFromLangGroup": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/update-languages_updateLangs": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/attach-to-lang-group_attachToLangGroup": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/create-language-variation_createLangVariation": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/detach-from-lang-group_detachFromLangGroup": {};
  "cms:pages:2026-03:put-/cms/pages/2026-03/site-pages/multi-language/set-new-lang-primary_setLangPrimary": {};
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/update-languages_updateLangs": {};
  "cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/attach-to-lang-group": {};
  "cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/create-language-variation": {};
  "cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/detach-from-lang-group": {};
  "cms:blog-settings:2026-03:put-/cms/blog-settings/2026-03/settings/multi-language/set-new-lang-primary": {};
  "cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/update-languages": {};
  "cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/attach-to-lang-group_attachToLangGroup": {};
  "cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/create-language-variation_createLangVariation": {};
  "cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/detach-from-lang-group_detachFromLangGroup": {};
  "cms:authors:2026-03:put-/cms/blogs/2026-03/authors/multi-language/set-new-lang-primary_setLangPrimary": {};
  "cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/update-languages_updateLangs": {};
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/attach-to-lang-group_attachToLangGroup": {};
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/create-language-variation_createLangVariation": {};
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/detach-from-lang-group_detachFromLangGroup": {};
  "cms:posts:2026-03:put-/cms/blogs/2026-03/posts/multi-language/set-new-lang-primary_setLangPrimary": {};
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/update-languages_updateLangs": {};
}

export interface HubSpotFullApiMultiLanguageOperationRequestMap {
  "cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/attach-to-lang-group_attachToLangGroup": HubSpotFullApiOperationInput<"cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/attach-to-lang-group_attachToLangGroup">;
  "cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/create-language-variation_createLangVariation": HubSpotFullApiOperationInput<"cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/create-language-variation_createLangVariation">;
  "cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/detach-from-lang-group_detachFromLangGroup": HubSpotFullApiOperationInput<"cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/detach-from-lang-group_detachFromLangGroup">;
  "cms:tags:2026-03:put-/cms/blogs/2026-03/tags/multi-language/set-new-lang-primary_setLangPrimary": HubSpotFullApiOperationInput<"cms:tags:2026-03:put-/cms/blogs/2026-03/tags/multi-language/set-new-lang-primary_setLangPrimary">;
  "cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/update-languages_updateLangs": HubSpotFullApiOperationInput<"cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/update-languages_updateLangs">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/attach-to-lang-group_attachToLangGroup": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/attach-to-lang-group_attachToLangGroup">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/create-language-variation_createLangVariation": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/create-language-variation_createLangVariation">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/detach-from-lang-group_detachFromLangGroup": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/detach-from-lang-group_detachFromLangGroup">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/update-languages_updateLangs": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/update-languages_updateLangs">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/attach-to-lang-group_attachToLangGroup": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/attach-to-lang-group_attachToLangGroup">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/create-language-variation_createLangVariation": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/create-language-variation_createLangVariation">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/detach-from-lang-group_detachFromLangGroup": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/detach-from-lang-group_detachFromLangGroup">;
  "cms:pages:2026-03:put-/cms/pages/2026-03/site-pages/multi-language/set-new-lang-primary_setLangPrimary": HubSpotFullApiOperationInput<"cms:pages:2026-03:put-/cms/pages/2026-03/site-pages/multi-language/set-new-lang-primary_setLangPrimary">;
  "cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/update-languages_updateLangs": HubSpotFullApiOperationInput<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/update-languages_updateLangs">;
  "cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/attach-to-lang-group": HubSpotFullApiOperationInput<"cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/attach-to-lang-group">;
  "cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/create-language-variation": HubSpotFullApiOperationInput<"cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/create-language-variation">;
  "cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/detach-from-lang-group": HubSpotFullApiOperationInput<"cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/detach-from-lang-group">;
  "cms:blog-settings:2026-03:put-/cms/blog-settings/2026-03/settings/multi-language/set-new-lang-primary": HubSpotFullApiOperationInput<"cms:blog-settings:2026-03:put-/cms/blog-settings/2026-03/settings/multi-language/set-new-lang-primary">;
  "cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/update-languages": HubSpotFullApiOperationInput<"cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/update-languages">;
  "cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/attach-to-lang-group_attachToLangGroup": HubSpotFullApiOperationInput<"cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/attach-to-lang-group_attachToLangGroup">;
  "cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/create-language-variation_createLangVariation": HubSpotFullApiOperationInput<"cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/create-language-variation_createLangVariation">;
  "cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/detach-from-lang-group_detachFromLangGroup": HubSpotFullApiOperationInput<"cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/detach-from-lang-group_detachFromLangGroup">;
  "cms:authors:2026-03:put-/cms/blogs/2026-03/authors/multi-language/set-new-lang-primary_setLangPrimary": HubSpotFullApiOperationInput<"cms:authors:2026-03:put-/cms/blogs/2026-03/authors/multi-language/set-new-lang-primary_setLangPrimary">;
  "cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/update-languages_updateLangs": HubSpotFullApiOperationInput<"cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/update-languages_updateLangs">;
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/attach-to-lang-group_attachToLangGroup": HubSpotFullApiOperationInput<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/attach-to-lang-group_attachToLangGroup">;
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/create-language-variation_createLangVariation": HubSpotFullApiOperationInput<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/create-language-variation_createLangVariation">;
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/detach-from-lang-group_detachFromLangGroup": HubSpotFullApiOperationInput<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/detach-from-lang-group_detachFromLangGroup">;
  "cms:posts:2026-03:put-/cms/blogs/2026-03/posts/multi-language/set-new-lang-primary_setLangPrimary": HubSpotFullApiOperationInput<"cms:posts:2026-03:put-/cms/blogs/2026-03/posts/multi-language/set-new-lang-primary_setLangPrimary">;
  "cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/update-languages_updateLangs": HubSpotFullApiOperationInput<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/update-languages_updateLangs">;
}

export interface HubSpotFullApiMultiLanguageGeneratedClient {
  TagsPostCmsBlogs202603TagsMultiLanguageAttachToLangGroupAttachToLangGroup(...args: HubSpotFullApiOperationArgs<"cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/attach-to-lang-group_attachToLangGroup">): Promise<HubSpotFullApiOperationResponseMap["cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/attach-to-lang-group_attachToLangGroup"]>;
  TagsPostCmsBlogs202603TagsMultiLanguageCreateLanguageVariationCreateLangVariation(...args: HubSpotFullApiOperationArgs<"cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/create-language-variation_createLangVariation">): Promise<HubSpotFullApiOperationResponseMap["cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/create-language-variation_createLangVariation"]>;
  TagsPostCmsBlogs202603TagsMultiLanguageDetachFromLangGroupDetachFromLangGroup(...args: HubSpotFullApiOperationArgs<"cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/detach-from-lang-group_detachFromLangGroup">): Promise<HubSpotFullApiOperationResponseMap["cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/detach-from-lang-group_detachFromLangGroup"]>;
  TagsPutCmsBlogs202603TagsMultiLanguageSetNewLangPrimarySetLangPrimary(...args: HubSpotFullApiOperationArgs<"cms:tags:2026-03:put-/cms/blogs/2026-03/tags/multi-language/set-new-lang-primary_setLangPrimary">): Promise<HubSpotFullApiOperationResponseMap["cms:tags:2026-03:put-/cms/blogs/2026-03/tags/multi-language/set-new-lang-primary_setLangPrimary"]>;
  TagsPostCmsBlogs202603TagsMultiLanguageUpdateLanguagesUpdateLangs(...args: HubSpotFullApiOperationArgs<"cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/update-languages_updateLangs">): Promise<HubSpotFullApiOperationResponseMap["cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/update-languages_updateLangs"]>;
  PagesPostCmsPages202603LandingPagesMultiLanguageAttachToLangGroupAttachToLangGroup(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/attach-to-lang-group_attachToLangGroup">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/attach-to-lang-group_attachToLangGroup"]>;
  PagesPostCmsPages202603LandingPagesMultiLanguageCreateLanguageVariationCreateLangVariation(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/create-language-variation_createLangVariation">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/create-language-variation_createLangVariation"]>;
  PagesPostCmsPages202603LandingPagesMultiLanguageDetachFromLangGroupDetachFromLangGroup(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/detach-from-lang-group_detachFromLangGroup">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/detach-from-lang-group_detachFromLangGroup"]>;
  PagesPostCmsPages202603LandingPagesMultiLanguageUpdateLanguagesUpdateLangs(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/update-languages_updateLangs">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/update-languages_updateLangs"]>;
  PagesPostCmsPages202603SitePagesMultiLanguageAttachToLangGroupAttachToLangGroup(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/attach-to-lang-group_attachToLangGroup">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/attach-to-lang-group_attachToLangGroup"]>;
  PagesPostCmsPages202603SitePagesMultiLanguageCreateLanguageVariationCreateLangVariation(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/create-language-variation_createLangVariation">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/create-language-variation_createLangVariation"]>;
  PagesPostCmsPages202603SitePagesMultiLanguageDetachFromLangGroupDetachFromLangGroup(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/detach-from-lang-group_detachFromLangGroup">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/detach-from-lang-group_detachFromLangGroup"]>;
  PagesPutCmsPages202603SitePagesMultiLanguageSetNewLangPrimarySetLangPrimary(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:put-/cms/pages/2026-03/site-pages/multi-language/set-new-lang-primary_setLangPrimary">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:put-/cms/pages/2026-03/site-pages/multi-language/set-new-lang-primary_setLangPrimary"]>;
  PagesPostCmsPages202603SitePagesMultiLanguageUpdateLanguagesUpdateLangs(...args: HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/update-languages_updateLangs">): Promise<HubSpotFullApiOperationResponseMap["cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/update-languages_updateLangs"]>;
  BlogSettingsPostCmsBlogSettings202603SettingsMultiLanguageAttachToLangGroup(...args: HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/attach-to-lang-group">): Promise<HubSpotFullApiOperationResponseMap["cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/attach-to-lang-group"]>;
  BlogSettingsPostCmsBlogSettings202603SettingsMultiLanguageCreateLanguageVariation(...args: HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/create-language-variation">): Promise<HubSpotFullApiOperationResponseMap["cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/create-language-variation"]>;
  BlogSettingsPostCmsBlogSettings202603SettingsMultiLanguageDetachFromLangGroup(...args: HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/detach-from-lang-group">): Promise<HubSpotFullApiOperationResponseMap["cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/detach-from-lang-group"]>;
  BlogSettingsPutCmsBlogSettings202603SettingsMultiLanguageSetNewLangPrimary(...args: HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:put-/cms/blog-settings/2026-03/settings/multi-language/set-new-lang-primary">): Promise<HubSpotFullApiOperationResponseMap["cms:blog-settings:2026-03:put-/cms/blog-settings/2026-03/settings/multi-language/set-new-lang-primary"]>;
  BlogSettingsPostCmsBlogSettings202603SettingsMultiLanguageUpdateLanguages(...args: HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/update-languages">): Promise<HubSpotFullApiOperationResponseMap["cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/update-languages"]>;
  AuthorsPostCmsBlogs202603AuthorsMultiLanguageAttachToLangGroupAttachToLangGroup(...args: HubSpotFullApiOperationArgs<"cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/attach-to-lang-group_attachToLangGroup">): Promise<HubSpotFullApiOperationResponseMap["cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/attach-to-lang-group_attachToLangGroup"]>;
  AuthorsPostCmsBlogs202603AuthorsMultiLanguageCreateLanguageVariationCreateLangVariation(...args: HubSpotFullApiOperationArgs<"cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/create-language-variation_createLangVariation">): Promise<HubSpotFullApiOperationResponseMap["cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/create-language-variation_createLangVariation"]>;
  AuthorsPostCmsBlogs202603AuthorsMultiLanguageDetachFromLangGroupDetachFromLangGroup(...args: HubSpotFullApiOperationArgs<"cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/detach-from-lang-group_detachFromLangGroup">): Promise<HubSpotFullApiOperationResponseMap["cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/detach-from-lang-group_detachFromLangGroup"]>;
  AuthorsPutCmsBlogs202603AuthorsMultiLanguageSetNewLangPrimarySetLangPrimary(...args: HubSpotFullApiOperationArgs<"cms:authors:2026-03:put-/cms/blogs/2026-03/authors/multi-language/set-new-lang-primary_setLangPrimary">): Promise<HubSpotFullApiOperationResponseMap["cms:authors:2026-03:put-/cms/blogs/2026-03/authors/multi-language/set-new-lang-primary_setLangPrimary"]>;
  AuthorsPostCmsBlogs202603AuthorsMultiLanguageUpdateLanguagesUpdateLangs(...args: HubSpotFullApiOperationArgs<"cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/update-languages_updateLangs">): Promise<HubSpotFullApiOperationResponseMap["cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/update-languages_updateLangs"]>;
  PostsPostCmsBlogs202603PostsMultiLanguageAttachToLangGroupAttachToLangGroup(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/attach-to-lang-group_attachToLangGroup">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/attach-to-lang-group_attachToLangGroup"]>;
  PostsPostCmsBlogs202603PostsMultiLanguageCreateLanguageVariationCreateLangVariation(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/create-language-variation_createLangVariation">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/create-language-variation_createLangVariation"]>;
  PostsPostCmsBlogs202603PostsMultiLanguageDetachFromLangGroupDetachFromLangGroup(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/detach-from-lang-group_detachFromLangGroup">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/detach-from-lang-group_detachFromLangGroup"]>;
  PostsPutCmsBlogs202603PostsMultiLanguageSetNewLangPrimarySetLangPrimary(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:put-/cms/blogs/2026-03/posts/multi-language/set-new-lang-primary_setLangPrimary">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:put-/cms/blogs/2026-03/posts/multi-language/set-new-lang-primary_setLangPrimary"]>;
  PostsPostCmsBlogs202603PostsMultiLanguageUpdateLanguagesUpdateLangs(...args: HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/update-languages_updateLangs">): Promise<HubSpotFullApiOperationResponseMap["cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/update-languages_updateLangs"]>;
}

export const HubSpotFullApiMultiLanguageGeneratedFunctionNames = [
  "TagsPostCmsBlogs202603TagsMultiLanguageAttachToLangGroupAttachToLangGroup",
  "TagsPostCmsBlogs202603TagsMultiLanguageCreateLanguageVariationCreateLangVariation",
  "TagsPostCmsBlogs202603TagsMultiLanguageDetachFromLangGroupDetachFromLangGroup",
  "TagsPutCmsBlogs202603TagsMultiLanguageSetNewLangPrimarySetLangPrimary",
  "TagsPostCmsBlogs202603TagsMultiLanguageUpdateLanguagesUpdateLangs",
  "PagesPostCmsPages202603LandingPagesMultiLanguageAttachToLangGroupAttachToLangGroup",
  "PagesPostCmsPages202603LandingPagesMultiLanguageCreateLanguageVariationCreateLangVariation",
  "PagesPostCmsPages202603LandingPagesMultiLanguageDetachFromLangGroupDetachFromLangGroup",
  "PagesPostCmsPages202603LandingPagesMultiLanguageUpdateLanguagesUpdateLangs",
  "PagesPostCmsPages202603SitePagesMultiLanguageAttachToLangGroupAttachToLangGroup",
  "PagesPostCmsPages202603SitePagesMultiLanguageCreateLanguageVariationCreateLangVariation",
  "PagesPostCmsPages202603SitePagesMultiLanguageDetachFromLangGroupDetachFromLangGroup",
  "PagesPutCmsPages202603SitePagesMultiLanguageSetNewLangPrimarySetLangPrimary",
  "PagesPostCmsPages202603SitePagesMultiLanguageUpdateLanguagesUpdateLangs",
  "BlogSettingsPostCmsBlogSettings202603SettingsMultiLanguageAttachToLangGroup",
  "BlogSettingsPostCmsBlogSettings202603SettingsMultiLanguageCreateLanguageVariation",
  "BlogSettingsPostCmsBlogSettings202603SettingsMultiLanguageDetachFromLangGroup",
  "BlogSettingsPutCmsBlogSettings202603SettingsMultiLanguageSetNewLangPrimary",
  "BlogSettingsPostCmsBlogSettings202603SettingsMultiLanguageUpdateLanguages",
  "AuthorsPostCmsBlogs202603AuthorsMultiLanguageAttachToLangGroupAttachToLangGroup",
  "AuthorsPostCmsBlogs202603AuthorsMultiLanguageCreateLanguageVariationCreateLangVariation",
  "AuthorsPostCmsBlogs202603AuthorsMultiLanguageDetachFromLangGroupDetachFromLangGroup",
  "AuthorsPutCmsBlogs202603AuthorsMultiLanguageSetNewLangPrimarySetLangPrimary",
  "AuthorsPostCmsBlogs202603AuthorsMultiLanguageUpdateLanguagesUpdateLangs",
  "PostsPostCmsBlogs202603PostsMultiLanguageAttachToLangGroupAttachToLangGroup",
  "PostsPostCmsBlogs202603PostsMultiLanguageCreateLanguageVariationCreateLangVariation",
  "PostsPostCmsBlogs202603PostsMultiLanguageDetachFromLangGroupDetachFromLangGroup",
  "PostsPutCmsBlogs202603PostsMultiLanguageSetNewLangPrimarySetLangPrimary",
  "PostsPostCmsBlogs202603PostsMultiLanguageUpdateLanguagesUpdateLangs"
] as const satisfies readonly (keyof HubSpotFullApiMultiLanguageGeneratedClient)[];

export function createHubSpotFullApiMultiLanguageGeneratedClient(
  callOperation: HubSpotGeneratedOperationCaller,
): HubSpotFullApiMultiLanguageGeneratedClient {
  return {
    TagsPostCmsBlogs202603TagsMultiLanguageAttachToLangGroupAttachToLangGroup: (...args) => callOperation("cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/attach-to-lang-group_attachToLangGroup", ...(args as HubSpotFullApiOperationArgs<"cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/attach-to-lang-group_attachToLangGroup">)),
    TagsPostCmsBlogs202603TagsMultiLanguageCreateLanguageVariationCreateLangVariation: (...args) => callOperation("cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/create-language-variation_createLangVariation", ...(args as HubSpotFullApiOperationArgs<"cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/create-language-variation_createLangVariation">)),
    TagsPostCmsBlogs202603TagsMultiLanguageDetachFromLangGroupDetachFromLangGroup: (...args) => callOperation("cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/detach-from-lang-group_detachFromLangGroup", ...(args as HubSpotFullApiOperationArgs<"cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/detach-from-lang-group_detachFromLangGroup">)),
    TagsPutCmsBlogs202603TagsMultiLanguageSetNewLangPrimarySetLangPrimary: (...args) => callOperation("cms:tags:2026-03:put-/cms/blogs/2026-03/tags/multi-language/set-new-lang-primary_setLangPrimary", ...(args as HubSpotFullApiOperationArgs<"cms:tags:2026-03:put-/cms/blogs/2026-03/tags/multi-language/set-new-lang-primary_setLangPrimary">)),
    TagsPostCmsBlogs202603TagsMultiLanguageUpdateLanguagesUpdateLangs: (...args) => callOperation("cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/update-languages_updateLangs", ...(args as HubSpotFullApiOperationArgs<"cms:tags:2026-03:post-/cms/blogs/2026-03/tags/multi-language/update-languages_updateLangs">)),
    PagesPostCmsPages202603LandingPagesMultiLanguageAttachToLangGroupAttachToLangGroup: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/attach-to-lang-group_attachToLangGroup", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/attach-to-lang-group_attachToLangGroup">)),
    PagesPostCmsPages202603LandingPagesMultiLanguageCreateLanguageVariationCreateLangVariation: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/create-language-variation_createLangVariation", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/create-language-variation_createLangVariation">)),
    PagesPostCmsPages202603LandingPagesMultiLanguageDetachFromLangGroupDetachFromLangGroup: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/detach-from-lang-group_detachFromLangGroup", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/detach-from-lang-group_detachFromLangGroup">)),
    PagesPostCmsPages202603LandingPagesMultiLanguageUpdateLanguagesUpdateLangs: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/update-languages_updateLangs", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/landing-pages/multi-language/update-languages_updateLangs">)),
    PagesPostCmsPages202603SitePagesMultiLanguageAttachToLangGroupAttachToLangGroup: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/attach-to-lang-group_attachToLangGroup", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/attach-to-lang-group_attachToLangGroup">)),
    PagesPostCmsPages202603SitePagesMultiLanguageCreateLanguageVariationCreateLangVariation: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/create-language-variation_createLangVariation", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/create-language-variation_createLangVariation">)),
    PagesPostCmsPages202603SitePagesMultiLanguageDetachFromLangGroupDetachFromLangGroup: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/detach-from-lang-group_detachFromLangGroup", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/detach-from-lang-group_detachFromLangGroup">)),
    PagesPutCmsPages202603SitePagesMultiLanguageSetNewLangPrimarySetLangPrimary: (...args) => callOperation("cms:pages:2026-03:put-/cms/pages/2026-03/site-pages/multi-language/set-new-lang-primary_setLangPrimary", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:put-/cms/pages/2026-03/site-pages/multi-language/set-new-lang-primary_setLangPrimary">)),
    PagesPostCmsPages202603SitePagesMultiLanguageUpdateLanguagesUpdateLangs: (...args) => callOperation("cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/update-languages_updateLangs", ...(args as HubSpotFullApiOperationArgs<"cms:pages:2026-03:post-/cms/pages/2026-03/site-pages/multi-language/update-languages_updateLangs">)),
    BlogSettingsPostCmsBlogSettings202603SettingsMultiLanguageAttachToLangGroup: (...args) => callOperation("cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/attach-to-lang-group", ...(args as HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/attach-to-lang-group">)),
    BlogSettingsPostCmsBlogSettings202603SettingsMultiLanguageCreateLanguageVariation: (...args) => callOperation("cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/create-language-variation", ...(args as HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/create-language-variation">)),
    BlogSettingsPostCmsBlogSettings202603SettingsMultiLanguageDetachFromLangGroup: (...args) => callOperation("cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/detach-from-lang-group", ...(args as HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/detach-from-lang-group">)),
    BlogSettingsPutCmsBlogSettings202603SettingsMultiLanguageSetNewLangPrimary: (...args) => callOperation("cms:blog-settings:2026-03:put-/cms/blog-settings/2026-03/settings/multi-language/set-new-lang-primary", ...(args as HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:put-/cms/blog-settings/2026-03/settings/multi-language/set-new-lang-primary">)),
    BlogSettingsPostCmsBlogSettings202603SettingsMultiLanguageUpdateLanguages: (...args) => callOperation("cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/update-languages", ...(args as HubSpotFullApiOperationArgs<"cms:blog-settings:2026-03:post-/cms/blog-settings/2026-03/settings/multi-language/update-languages">)),
    AuthorsPostCmsBlogs202603AuthorsMultiLanguageAttachToLangGroupAttachToLangGroup: (...args) => callOperation("cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/attach-to-lang-group_attachToLangGroup", ...(args as HubSpotFullApiOperationArgs<"cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/attach-to-lang-group_attachToLangGroup">)),
    AuthorsPostCmsBlogs202603AuthorsMultiLanguageCreateLanguageVariationCreateLangVariation: (...args) => callOperation("cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/create-language-variation_createLangVariation", ...(args as HubSpotFullApiOperationArgs<"cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/create-language-variation_createLangVariation">)),
    AuthorsPostCmsBlogs202603AuthorsMultiLanguageDetachFromLangGroupDetachFromLangGroup: (...args) => callOperation("cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/detach-from-lang-group_detachFromLangGroup", ...(args as HubSpotFullApiOperationArgs<"cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/detach-from-lang-group_detachFromLangGroup">)),
    AuthorsPutCmsBlogs202603AuthorsMultiLanguageSetNewLangPrimarySetLangPrimary: (...args) => callOperation("cms:authors:2026-03:put-/cms/blogs/2026-03/authors/multi-language/set-new-lang-primary_setLangPrimary", ...(args as HubSpotFullApiOperationArgs<"cms:authors:2026-03:put-/cms/blogs/2026-03/authors/multi-language/set-new-lang-primary_setLangPrimary">)),
    AuthorsPostCmsBlogs202603AuthorsMultiLanguageUpdateLanguagesUpdateLangs: (...args) => callOperation("cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/update-languages_updateLangs", ...(args as HubSpotFullApiOperationArgs<"cms:authors:2026-03:post-/cms/blogs/2026-03/authors/multi-language/update-languages_updateLangs">)),
    PostsPostCmsBlogs202603PostsMultiLanguageAttachToLangGroupAttachToLangGroup: (...args) => callOperation("cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/attach-to-lang-group_attachToLangGroup", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/attach-to-lang-group_attachToLangGroup">)),
    PostsPostCmsBlogs202603PostsMultiLanguageCreateLanguageVariationCreateLangVariation: (...args) => callOperation("cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/create-language-variation_createLangVariation", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/create-language-variation_createLangVariation">)),
    PostsPostCmsBlogs202603PostsMultiLanguageDetachFromLangGroupDetachFromLangGroup: (...args) => callOperation("cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/detach-from-lang-group_detachFromLangGroup", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/detach-from-lang-group_detachFromLangGroup">)),
    PostsPutCmsBlogs202603PostsMultiLanguageSetNewLangPrimarySetLangPrimary: (...args) => callOperation("cms:posts:2026-03:put-/cms/blogs/2026-03/posts/multi-language/set-new-lang-primary_setLangPrimary", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:put-/cms/blogs/2026-03/posts/multi-language/set-new-lang-primary_setLangPrimary">)),
    PostsPostCmsBlogs202603PostsMultiLanguageUpdateLanguagesUpdateLangs: (...args) => callOperation("cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/update-languages_updateLangs", ...(args as HubSpotFullApiOperationArgs<"cms:posts:2026-03:post-/cms/blogs/2026-03/posts/multi-language/update-languages_updateLangs">)),
  };
}
