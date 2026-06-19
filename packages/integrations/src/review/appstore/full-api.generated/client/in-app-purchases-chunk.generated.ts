// Generated endpoint chunk for AppStoreFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AppStoreGeneratedOperationCaller,
  AppStoreFullApiOperationArgs,
  AppStoreFullApiOperationInput,
  AppStoreFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AppStoreFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AppStoreFullApiInAppPurchasesOperationKeys = [
  "inAppPurchases_getInstance",
  "inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelated",
  "inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelationship",
  "inAppPurchasesV2_content_getToOneRelated",
  "inAppPurchasesV2_content_getToOneRelationship",
  "inAppPurchasesV2_createInstance",
  "inAppPurchasesV2_deleteInstance",
  "inAppPurchasesV2_getInstance",
  "inAppPurchasesV2_iapPriceSchedule_getToOneRelated",
  "inAppPurchasesV2_iapPriceSchedule_getToOneRelationship",
  "inAppPurchasesV2_images_getToManyRelated",
  "inAppPurchasesV2_images_getToManyRelationship",
  "inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelated",
  "inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelationship",
  "inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelated",
  "inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelationship",
  "inAppPurchasesV2_offerCodes_getToManyRelated",
  "inAppPurchasesV2_offerCodes_getToManyRelationship",
  "inAppPurchasesV2_pricePoints_getToManyRelated",
  "inAppPurchasesV2_pricePoints_getToManyRelationship",
  "inAppPurchasesV2_promotedPurchase_getToOneRelated",
  "inAppPurchasesV2_promotedPurchase_getToOneRelationship",
  "inAppPurchasesV2_updateInstance"
] as const;
export type AppStoreFullApiInAppPurchasesOperationKey = typeof AppStoreFullApiInAppPurchasesOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiInAppPurchasesOperationPathParamMap {
  "inAppPurchases_getInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_content_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_content_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_createInstance": {};
  "inAppPurchasesV2_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_getInstance": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_iapPriceSchedule_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_iapPriceSchedule_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_images_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_images_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_offerCodes_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_offerCodes_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_pricePoints_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_pricePoints_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_promotedPurchase_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_promotedPurchase_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "inAppPurchasesV2_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiInAppPurchasesOperationRequestMap {
  "inAppPurchases_getInstance": AppStoreFullApiOperationInput<"inAppPurchases_getInstance">;
  "inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelated": AppStoreFullApiOperationInput<"inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelated">;
  "inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelationship": AppStoreFullApiOperationInput<"inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelationship">;
  "inAppPurchasesV2_content_getToOneRelated": AppStoreFullApiOperationInput<"inAppPurchasesV2_content_getToOneRelated">;
  "inAppPurchasesV2_content_getToOneRelationship": AppStoreFullApiOperationInput<"inAppPurchasesV2_content_getToOneRelationship">;
  "inAppPurchasesV2_createInstance": AppStoreFullApiOperationInput<"inAppPurchasesV2_createInstance">;
  "inAppPurchasesV2_deleteInstance": AppStoreFullApiOperationInput<"inAppPurchasesV2_deleteInstance">;
  "inAppPurchasesV2_getInstance": AppStoreFullApiOperationInput<"inAppPurchasesV2_getInstance">;
  "inAppPurchasesV2_iapPriceSchedule_getToOneRelated": AppStoreFullApiOperationInput<"inAppPurchasesV2_iapPriceSchedule_getToOneRelated">;
  "inAppPurchasesV2_iapPriceSchedule_getToOneRelationship": AppStoreFullApiOperationInput<"inAppPurchasesV2_iapPriceSchedule_getToOneRelationship">;
  "inAppPurchasesV2_images_getToManyRelated": AppStoreFullApiOperationInput<"inAppPurchasesV2_images_getToManyRelated">;
  "inAppPurchasesV2_images_getToManyRelationship": AppStoreFullApiOperationInput<"inAppPurchasesV2_images_getToManyRelationship">;
  "inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelated": AppStoreFullApiOperationInput<"inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelated">;
  "inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelationship": AppStoreFullApiOperationInput<"inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelationship">;
  "inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelated": AppStoreFullApiOperationInput<"inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelated">;
  "inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelationship": AppStoreFullApiOperationInput<"inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelationship">;
  "inAppPurchasesV2_offerCodes_getToManyRelated": AppStoreFullApiOperationInput<"inAppPurchasesV2_offerCodes_getToManyRelated">;
  "inAppPurchasesV2_offerCodes_getToManyRelationship": AppStoreFullApiOperationInput<"inAppPurchasesV2_offerCodes_getToManyRelationship">;
  "inAppPurchasesV2_pricePoints_getToManyRelated": AppStoreFullApiOperationInput<"inAppPurchasesV2_pricePoints_getToManyRelated">;
  "inAppPurchasesV2_pricePoints_getToManyRelationship": AppStoreFullApiOperationInput<"inAppPurchasesV2_pricePoints_getToManyRelationship">;
  "inAppPurchasesV2_promotedPurchase_getToOneRelated": AppStoreFullApiOperationInput<"inAppPurchasesV2_promotedPurchase_getToOneRelated">;
  "inAppPurchasesV2_promotedPurchase_getToOneRelationship": AppStoreFullApiOperationInput<"inAppPurchasesV2_promotedPurchase_getToOneRelationship">;
  "inAppPurchasesV2_updateInstance": AppStoreFullApiOperationInput<"inAppPurchasesV2_updateInstance">;
}

export interface AppStoreFullApiInAppPurchasesGeneratedClient {
  InAppPurchasesGetInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchases_getInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchases_getInstance"]>;
  InAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelated"]>;
  InAppPurchasesV2AppStoreReviewScreenshotGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelationship"]>;
  InAppPurchasesV2ContentGetToOneRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_content_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_content_getToOneRelated"]>;
  InAppPurchasesV2ContentGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_content_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_content_getToOneRelationship"]>;
  InAppPurchasesV2CreateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_createInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_createInstance"]>;
  InAppPurchasesV2DeleteInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_deleteInstance"]>;
  InAppPurchasesV2GetInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_getInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_getInstance"]>;
  InAppPurchasesV2IapPriceScheduleGetToOneRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_iapPriceSchedule_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_iapPriceSchedule_getToOneRelated"]>;
  InAppPurchasesV2IapPriceScheduleGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_iapPriceSchedule_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_iapPriceSchedule_getToOneRelationship"]>;
  InAppPurchasesV2ImagesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_images_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_images_getToManyRelated"]>;
  InAppPurchasesV2ImagesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_images_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_images_getToManyRelationship"]>;
  InAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelated"]>;
  InAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelationship"]>;
  InAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelated"]>;
  InAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelationship"]>;
  InAppPurchasesV2OfferCodesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_offerCodes_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_offerCodes_getToManyRelated"]>;
  InAppPurchasesV2OfferCodesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_offerCodes_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_offerCodes_getToManyRelationship"]>;
  InAppPurchasesV2PricePointsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_pricePoints_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_pricePoints_getToManyRelated"]>;
  InAppPurchasesV2PricePointsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_pricePoints_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_pricePoints_getToManyRelationship"]>;
  InAppPurchasesV2PromotedPurchaseGetToOneRelated(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_promotedPurchase_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_promotedPurchase_getToOneRelated"]>;
  InAppPurchasesV2PromotedPurchaseGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_promotedPurchase_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_promotedPurchase_getToOneRelationship"]>;
  InAppPurchasesV2UpdateInstance(...args: AppStoreFullApiOperationArgs<"inAppPurchasesV2_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["inAppPurchasesV2_updateInstance"]>;
}

export const AppStoreFullApiInAppPurchasesGeneratedFunctionNames = [
  "InAppPurchasesGetInstance",
  "InAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated",
  "InAppPurchasesV2AppStoreReviewScreenshotGetToOneRelationship",
  "InAppPurchasesV2ContentGetToOneRelated",
  "InAppPurchasesV2ContentGetToOneRelationship",
  "InAppPurchasesV2CreateInstance",
  "InAppPurchasesV2DeleteInstance",
  "InAppPurchasesV2GetInstance",
  "InAppPurchasesV2IapPriceScheduleGetToOneRelated",
  "InAppPurchasesV2IapPriceScheduleGetToOneRelationship",
  "InAppPurchasesV2ImagesGetToManyRelated",
  "InAppPurchasesV2ImagesGetToManyRelationship",
  "InAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated",
  "InAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelationship",
  "InAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated",
  "InAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelationship",
  "InAppPurchasesV2OfferCodesGetToManyRelated",
  "InAppPurchasesV2OfferCodesGetToManyRelationship",
  "InAppPurchasesV2PricePointsGetToManyRelated",
  "InAppPurchasesV2PricePointsGetToManyRelationship",
  "InAppPurchasesV2PromotedPurchaseGetToOneRelated",
  "InAppPurchasesV2PromotedPurchaseGetToOneRelationship",
  "InAppPurchasesV2UpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiInAppPurchasesGeneratedClient)[];

export function createAppStoreFullApiInAppPurchasesGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiInAppPurchasesGeneratedClient {
  return {
    InAppPurchasesGetInstance: (...args) => callOperation("inAppPurchases_getInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchases_getInstance">)),
    InAppPurchasesV2AppStoreReviewScreenshotGetToOneRelated: (...args) => callOperation("inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelated">)),
    InAppPurchasesV2AppStoreReviewScreenshotGetToOneRelationship: (...args) => callOperation("inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_appStoreReviewScreenshot_getToOneRelationship">)),
    InAppPurchasesV2ContentGetToOneRelated: (...args) => callOperation("inAppPurchasesV2_content_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_content_getToOneRelated">)),
    InAppPurchasesV2ContentGetToOneRelationship: (...args) => callOperation("inAppPurchasesV2_content_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_content_getToOneRelationship">)),
    InAppPurchasesV2CreateInstance: (...args) => callOperation("inAppPurchasesV2_createInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_createInstance">)),
    InAppPurchasesV2DeleteInstance: (...args) => callOperation("inAppPurchasesV2_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_deleteInstance">)),
    InAppPurchasesV2GetInstance: (...args) => callOperation("inAppPurchasesV2_getInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_getInstance">)),
    InAppPurchasesV2IapPriceScheduleGetToOneRelated: (...args) => callOperation("inAppPurchasesV2_iapPriceSchedule_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_iapPriceSchedule_getToOneRelated">)),
    InAppPurchasesV2IapPriceScheduleGetToOneRelationship: (...args) => callOperation("inAppPurchasesV2_iapPriceSchedule_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_iapPriceSchedule_getToOneRelationship">)),
    InAppPurchasesV2ImagesGetToManyRelated: (...args) => callOperation("inAppPurchasesV2_images_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_images_getToManyRelated">)),
    InAppPurchasesV2ImagesGetToManyRelationship: (...args) => callOperation("inAppPurchasesV2_images_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_images_getToManyRelationship">)),
    InAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelated: (...args) => callOperation("inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelated">)),
    InAppPurchasesV2InAppPurchaseAvailabilityGetToOneRelationship: (...args) => callOperation("inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_inAppPurchaseAvailability_getToOneRelationship">)),
    InAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelated: (...args) => callOperation("inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelated">)),
    InAppPurchasesV2InAppPurchaseLocalizationsGetToManyRelationship: (...args) => callOperation("inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_inAppPurchaseLocalizations_getToManyRelationship">)),
    InAppPurchasesV2OfferCodesGetToManyRelated: (...args) => callOperation("inAppPurchasesV2_offerCodes_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_offerCodes_getToManyRelated">)),
    InAppPurchasesV2OfferCodesGetToManyRelationship: (...args) => callOperation("inAppPurchasesV2_offerCodes_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_offerCodes_getToManyRelationship">)),
    InAppPurchasesV2PricePointsGetToManyRelated: (...args) => callOperation("inAppPurchasesV2_pricePoints_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_pricePoints_getToManyRelated">)),
    InAppPurchasesV2PricePointsGetToManyRelationship: (...args) => callOperation("inAppPurchasesV2_pricePoints_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_pricePoints_getToManyRelationship">)),
    InAppPurchasesV2PromotedPurchaseGetToOneRelated: (...args) => callOperation("inAppPurchasesV2_promotedPurchase_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_promotedPurchase_getToOneRelated">)),
    InAppPurchasesV2PromotedPurchaseGetToOneRelationship: (...args) => callOperation("inAppPurchasesV2_promotedPurchase_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_promotedPurchase_getToOneRelationship">)),
    InAppPurchasesV2UpdateInstance: (...args) => callOperation("inAppPurchasesV2_updateInstance", ...(args as AppStoreFullApiOperationArgs<"inAppPurchasesV2_updateInstance">)),
  };
}
