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
export const AppStoreFullApiSubscriptionsOperationKeys = [
  "subscriptions_appStoreReviewScreenshot_getToOneRelated",
  "subscriptions_appStoreReviewScreenshot_getToOneRelationship",
  "subscriptions_createInstance",
  "subscriptions_deleteInstance",
  "subscriptions_getInstance",
  "subscriptions_images_getToManyRelated",
  "subscriptions_images_getToManyRelationship",
  "subscriptions_introductoryOffers_deleteToManyRelationship",
  "subscriptions_introductoryOffers_getToManyRelated",
  "subscriptions_introductoryOffers_getToManyRelationship",
  "subscriptions_offerCodes_getToManyRelated",
  "subscriptions_offerCodes_getToManyRelationship",
  "subscriptions_planAvailabilities_getToManyRelated",
  "subscriptions_planAvailabilities_getToManyRelationship",
  "subscriptions_pricePoints_getToManyRelated",
  "subscriptions_pricePoints_getToManyRelationship",
  "subscriptions_prices_deleteToManyRelationship",
  "subscriptions_prices_getToManyRelated",
  "subscriptions_prices_getToManyRelationship",
  "subscriptions_promotedPurchase_getToOneRelated",
  "subscriptions_promotedPurchase_getToOneRelationship",
  "subscriptions_promotionalOffers_getToManyRelated",
  "subscriptions_promotionalOffers_getToManyRelationship",
  "subscriptions_subscriptionAvailability_getToOneRelated",
  "subscriptions_subscriptionAvailability_getToOneRelationship",
  "subscriptions_subscriptionLocalizations_getToManyRelated",
  "subscriptions_subscriptionLocalizations_getToManyRelationship",
  "subscriptions_updateInstance",
  "subscriptions_winBackOffers_getToManyRelated",
  "subscriptions_winBackOffers_getToManyRelationship"
] as const;
export type AppStoreFullApiSubscriptionsOperationKey = typeof AppStoreFullApiSubscriptionsOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiSubscriptionsOperationPathParamMap {
  "subscriptions_appStoreReviewScreenshot_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_appStoreReviewScreenshot_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_createInstance": {};
  "subscriptions_deleteInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_getInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_images_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_images_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_introductoryOffers_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_introductoryOffers_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_introductoryOffers_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_offerCodes_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_offerCodes_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_planAvailabilities_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_planAvailabilities_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_pricePoints_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_pricePoints_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_prices_deleteToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_prices_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_prices_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_promotedPurchase_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_promotedPurchase_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_promotionalOffers_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_promotionalOffers_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_subscriptionAvailability_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_subscriptionAvailability_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_subscriptionLocalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_subscriptionLocalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_updateInstance": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_winBackOffers_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "subscriptions_winBackOffers_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiSubscriptionsOperationRequestMap {
  "subscriptions_appStoreReviewScreenshot_getToOneRelated": AppStoreFullApiOperationInput<"subscriptions_appStoreReviewScreenshot_getToOneRelated">;
  "subscriptions_appStoreReviewScreenshot_getToOneRelationship": AppStoreFullApiOperationInput<"subscriptions_appStoreReviewScreenshot_getToOneRelationship">;
  "subscriptions_createInstance": AppStoreFullApiOperationInput<"subscriptions_createInstance">;
  "subscriptions_deleteInstance": AppStoreFullApiOperationInput<"subscriptions_deleteInstance">;
  "subscriptions_getInstance": AppStoreFullApiOperationInput<"subscriptions_getInstance">;
  "subscriptions_images_getToManyRelated": AppStoreFullApiOperationInput<"subscriptions_images_getToManyRelated">;
  "subscriptions_images_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptions_images_getToManyRelationship">;
  "subscriptions_introductoryOffers_deleteToManyRelationship": AppStoreFullApiOperationInput<"subscriptions_introductoryOffers_deleteToManyRelationship">;
  "subscriptions_introductoryOffers_getToManyRelated": AppStoreFullApiOperationInput<"subscriptions_introductoryOffers_getToManyRelated">;
  "subscriptions_introductoryOffers_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptions_introductoryOffers_getToManyRelationship">;
  "subscriptions_offerCodes_getToManyRelated": AppStoreFullApiOperationInput<"subscriptions_offerCodes_getToManyRelated">;
  "subscriptions_offerCodes_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptions_offerCodes_getToManyRelationship">;
  "subscriptions_planAvailabilities_getToManyRelated": AppStoreFullApiOperationInput<"subscriptions_planAvailabilities_getToManyRelated">;
  "subscriptions_planAvailabilities_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptions_planAvailabilities_getToManyRelationship">;
  "subscriptions_pricePoints_getToManyRelated": AppStoreFullApiOperationInput<"subscriptions_pricePoints_getToManyRelated">;
  "subscriptions_pricePoints_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptions_pricePoints_getToManyRelationship">;
  "subscriptions_prices_deleteToManyRelationship": AppStoreFullApiOperationInput<"subscriptions_prices_deleteToManyRelationship">;
  "subscriptions_prices_getToManyRelated": AppStoreFullApiOperationInput<"subscriptions_prices_getToManyRelated">;
  "subscriptions_prices_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptions_prices_getToManyRelationship">;
  "subscriptions_promotedPurchase_getToOneRelated": AppStoreFullApiOperationInput<"subscriptions_promotedPurchase_getToOneRelated">;
  "subscriptions_promotedPurchase_getToOneRelationship": AppStoreFullApiOperationInput<"subscriptions_promotedPurchase_getToOneRelationship">;
  "subscriptions_promotionalOffers_getToManyRelated": AppStoreFullApiOperationInput<"subscriptions_promotionalOffers_getToManyRelated">;
  "subscriptions_promotionalOffers_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptions_promotionalOffers_getToManyRelationship">;
  "subscriptions_subscriptionAvailability_getToOneRelated": AppStoreFullApiOperationInput<"subscriptions_subscriptionAvailability_getToOneRelated">;
  "subscriptions_subscriptionAvailability_getToOneRelationship": AppStoreFullApiOperationInput<"subscriptions_subscriptionAvailability_getToOneRelationship">;
  "subscriptions_subscriptionLocalizations_getToManyRelated": AppStoreFullApiOperationInput<"subscriptions_subscriptionLocalizations_getToManyRelated">;
  "subscriptions_subscriptionLocalizations_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptions_subscriptionLocalizations_getToManyRelationship">;
  "subscriptions_updateInstance": AppStoreFullApiOperationInput<"subscriptions_updateInstance">;
  "subscriptions_winBackOffers_getToManyRelated": AppStoreFullApiOperationInput<"subscriptions_winBackOffers_getToManyRelated">;
  "subscriptions_winBackOffers_getToManyRelationship": AppStoreFullApiOperationInput<"subscriptions_winBackOffers_getToManyRelationship">;
}

export interface AppStoreFullApiSubscriptionsGeneratedClient {
  SubscriptionsAppStoreReviewScreenshotGetToOneRelated(...args: AppStoreFullApiOperationArgs<"subscriptions_appStoreReviewScreenshot_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_appStoreReviewScreenshot_getToOneRelated"]>;
  SubscriptionsAppStoreReviewScreenshotGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_appStoreReviewScreenshot_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_appStoreReviewScreenshot_getToOneRelationship"]>;
  SubscriptionsCreateInstance(...args: AppStoreFullApiOperationArgs<"subscriptions_createInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_createInstance"]>;
  SubscriptionsDeleteInstance(...args: AppStoreFullApiOperationArgs<"subscriptions_deleteInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_deleteInstance"]>;
  SubscriptionsGetInstance(...args: AppStoreFullApiOperationArgs<"subscriptions_getInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_getInstance"]>;
  SubscriptionsImagesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptions_images_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_images_getToManyRelated"]>;
  SubscriptionsImagesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_images_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_images_getToManyRelationship"]>;
  SubscriptionsIntroductoryOffersDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_introductoryOffers_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_introductoryOffers_deleteToManyRelationship"]>;
  SubscriptionsIntroductoryOffersGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptions_introductoryOffers_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_introductoryOffers_getToManyRelated"]>;
  SubscriptionsIntroductoryOffersGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_introductoryOffers_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_introductoryOffers_getToManyRelationship"]>;
  SubscriptionsOfferCodesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptions_offerCodes_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_offerCodes_getToManyRelated"]>;
  SubscriptionsOfferCodesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_offerCodes_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_offerCodes_getToManyRelationship"]>;
  SubscriptionsPlanAvailabilitiesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptions_planAvailabilities_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_planAvailabilities_getToManyRelated"]>;
  SubscriptionsPlanAvailabilitiesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_planAvailabilities_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_planAvailabilities_getToManyRelationship"]>;
  SubscriptionsPricePointsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptions_pricePoints_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_pricePoints_getToManyRelated"]>;
  SubscriptionsPricePointsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_pricePoints_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_pricePoints_getToManyRelationship"]>;
  SubscriptionsPricesDeleteToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_prices_deleteToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_prices_deleteToManyRelationship"]>;
  SubscriptionsPricesGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptions_prices_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_prices_getToManyRelated"]>;
  SubscriptionsPricesGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_prices_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_prices_getToManyRelationship"]>;
  SubscriptionsPromotedPurchaseGetToOneRelated(...args: AppStoreFullApiOperationArgs<"subscriptions_promotedPurchase_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_promotedPurchase_getToOneRelated"]>;
  SubscriptionsPromotedPurchaseGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_promotedPurchase_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_promotedPurchase_getToOneRelationship"]>;
  SubscriptionsPromotionalOffersGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptions_promotionalOffers_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_promotionalOffers_getToManyRelated"]>;
  SubscriptionsPromotionalOffersGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_promotionalOffers_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_promotionalOffers_getToManyRelationship"]>;
  SubscriptionsSubscriptionAvailabilityGetToOneRelated(...args: AppStoreFullApiOperationArgs<"subscriptions_subscriptionAvailability_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_subscriptionAvailability_getToOneRelated"]>;
  SubscriptionsSubscriptionAvailabilityGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_subscriptionAvailability_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_subscriptionAvailability_getToOneRelationship"]>;
  SubscriptionsSubscriptionLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptions_subscriptionLocalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_subscriptionLocalizations_getToManyRelated"]>;
  SubscriptionsSubscriptionLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_subscriptionLocalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_subscriptionLocalizations_getToManyRelationship"]>;
  SubscriptionsUpdateInstance(...args: AppStoreFullApiOperationArgs<"subscriptions_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_updateInstance"]>;
  SubscriptionsWinBackOffersGetToManyRelated(...args: AppStoreFullApiOperationArgs<"subscriptions_winBackOffers_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_winBackOffers_getToManyRelated"]>;
  SubscriptionsWinBackOffersGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"subscriptions_winBackOffers_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["subscriptions_winBackOffers_getToManyRelationship"]>;
}

export const AppStoreFullApiSubscriptionsGeneratedFunctionNames = [
  "SubscriptionsAppStoreReviewScreenshotGetToOneRelated",
  "SubscriptionsAppStoreReviewScreenshotGetToOneRelationship",
  "SubscriptionsCreateInstance",
  "SubscriptionsDeleteInstance",
  "SubscriptionsGetInstance",
  "SubscriptionsImagesGetToManyRelated",
  "SubscriptionsImagesGetToManyRelationship",
  "SubscriptionsIntroductoryOffersDeleteToManyRelationship",
  "SubscriptionsIntroductoryOffersGetToManyRelated",
  "SubscriptionsIntroductoryOffersGetToManyRelationship",
  "SubscriptionsOfferCodesGetToManyRelated",
  "SubscriptionsOfferCodesGetToManyRelationship",
  "SubscriptionsPlanAvailabilitiesGetToManyRelated",
  "SubscriptionsPlanAvailabilitiesGetToManyRelationship",
  "SubscriptionsPricePointsGetToManyRelated",
  "SubscriptionsPricePointsGetToManyRelationship",
  "SubscriptionsPricesDeleteToManyRelationship",
  "SubscriptionsPricesGetToManyRelated",
  "SubscriptionsPricesGetToManyRelationship",
  "SubscriptionsPromotedPurchaseGetToOneRelated",
  "SubscriptionsPromotedPurchaseGetToOneRelationship",
  "SubscriptionsPromotionalOffersGetToManyRelated",
  "SubscriptionsPromotionalOffersGetToManyRelationship",
  "SubscriptionsSubscriptionAvailabilityGetToOneRelated",
  "SubscriptionsSubscriptionAvailabilityGetToOneRelationship",
  "SubscriptionsSubscriptionLocalizationsGetToManyRelated",
  "SubscriptionsSubscriptionLocalizationsGetToManyRelationship",
  "SubscriptionsUpdateInstance",
  "SubscriptionsWinBackOffersGetToManyRelated",
  "SubscriptionsWinBackOffersGetToManyRelationship"
] as const satisfies readonly (keyof AppStoreFullApiSubscriptionsGeneratedClient)[];

export function createAppStoreFullApiSubscriptionsGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiSubscriptionsGeneratedClient {
  return {
    SubscriptionsAppStoreReviewScreenshotGetToOneRelated: (...args) => callOperation("subscriptions_appStoreReviewScreenshot_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptions_appStoreReviewScreenshot_getToOneRelated">)),
    SubscriptionsAppStoreReviewScreenshotGetToOneRelationship: (...args) => callOperation("subscriptions_appStoreReviewScreenshot_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_appStoreReviewScreenshot_getToOneRelationship">)),
    SubscriptionsCreateInstance: (...args) => callOperation("subscriptions_createInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptions_createInstance">)),
    SubscriptionsDeleteInstance: (...args) => callOperation("subscriptions_deleteInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptions_deleteInstance">)),
    SubscriptionsGetInstance: (...args) => callOperation("subscriptions_getInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptions_getInstance">)),
    SubscriptionsImagesGetToManyRelated: (...args) => callOperation("subscriptions_images_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptions_images_getToManyRelated">)),
    SubscriptionsImagesGetToManyRelationship: (...args) => callOperation("subscriptions_images_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_images_getToManyRelationship">)),
    SubscriptionsIntroductoryOffersDeleteToManyRelationship: (...args) => callOperation("subscriptions_introductoryOffers_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_introductoryOffers_deleteToManyRelationship">)),
    SubscriptionsIntroductoryOffersGetToManyRelated: (...args) => callOperation("subscriptions_introductoryOffers_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptions_introductoryOffers_getToManyRelated">)),
    SubscriptionsIntroductoryOffersGetToManyRelationship: (...args) => callOperation("subscriptions_introductoryOffers_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_introductoryOffers_getToManyRelationship">)),
    SubscriptionsOfferCodesGetToManyRelated: (...args) => callOperation("subscriptions_offerCodes_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptions_offerCodes_getToManyRelated">)),
    SubscriptionsOfferCodesGetToManyRelationship: (...args) => callOperation("subscriptions_offerCodes_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_offerCodes_getToManyRelationship">)),
    SubscriptionsPlanAvailabilitiesGetToManyRelated: (...args) => callOperation("subscriptions_planAvailabilities_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptions_planAvailabilities_getToManyRelated">)),
    SubscriptionsPlanAvailabilitiesGetToManyRelationship: (...args) => callOperation("subscriptions_planAvailabilities_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_planAvailabilities_getToManyRelationship">)),
    SubscriptionsPricePointsGetToManyRelated: (...args) => callOperation("subscriptions_pricePoints_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptions_pricePoints_getToManyRelated">)),
    SubscriptionsPricePointsGetToManyRelationship: (...args) => callOperation("subscriptions_pricePoints_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_pricePoints_getToManyRelationship">)),
    SubscriptionsPricesDeleteToManyRelationship: (...args) => callOperation("subscriptions_prices_deleteToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_prices_deleteToManyRelationship">)),
    SubscriptionsPricesGetToManyRelated: (...args) => callOperation("subscriptions_prices_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptions_prices_getToManyRelated">)),
    SubscriptionsPricesGetToManyRelationship: (...args) => callOperation("subscriptions_prices_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_prices_getToManyRelationship">)),
    SubscriptionsPromotedPurchaseGetToOneRelated: (...args) => callOperation("subscriptions_promotedPurchase_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptions_promotedPurchase_getToOneRelated">)),
    SubscriptionsPromotedPurchaseGetToOneRelationship: (...args) => callOperation("subscriptions_promotedPurchase_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_promotedPurchase_getToOneRelationship">)),
    SubscriptionsPromotionalOffersGetToManyRelated: (...args) => callOperation("subscriptions_promotionalOffers_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptions_promotionalOffers_getToManyRelated">)),
    SubscriptionsPromotionalOffersGetToManyRelationship: (...args) => callOperation("subscriptions_promotionalOffers_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_promotionalOffers_getToManyRelationship">)),
    SubscriptionsSubscriptionAvailabilityGetToOneRelated: (...args) => callOperation("subscriptions_subscriptionAvailability_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptions_subscriptionAvailability_getToOneRelated">)),
    SubscriptionsSubscriptionAvailabilityGetToOneRelationship: (...args) => callOperation("subscriptions_subscriptionAvailability_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_subscriptionAvailability_getToOneRelationship">)),
    SubscriptionsSubscriptionLocalizationsGetToManyRelated: (...args) => callOperation("subscriptions_subscriptionLocalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptions_subscriptionLocalizations_getToManyRelated">)),
    SubscriptionsSubscriptionLocalizationsGetToManyRelationship: (...args) => callOperation("subscriptions_subscriptionLocalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_subscriptionLocalizations_getToManyRelationship">)),
    SubscriptionsUpdateInstance: (...args) => callOperation("subscriptions_updateInstance", ...(args as AppStoreFullApiOperationArgs<"subscriptions_updateInstance">)),
    SubscriptionsWinBackOffersGetToManyRelated: (...args) => callOperation("subscriptions_winBackOffers_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"subscriptions_winBackOffers_getToManyRelated">)),
    SubscriptionsWinBackOffersGetToManyRelationship: (...args) => callOperation("subscriptions_winBackOffers_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"subscriptions_winBackOffers_getToManyRelationship">)),
  };
}
