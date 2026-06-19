// Generated endpoint chunk for GooglePlayFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GooglePlayGeneratedOperationCaller,
  GooglePlayFullApiOperationArgs,
  GooglePlayFullApiOperationInput,
  GooglePlayFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GooglePlayFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GooglePlayFullApiAndroidpublisher02OperationKeys = [
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates",
  "monetization.onetimeproducts.purchaseOptions.offers.cancel",
  "monetization.onetimeproducts.purchaseOptions.offers.deactivate",
  "monetization.onetimeproducts.purchaseOptions.offers.list",
  "monetization.subscriptions.archive",
  "monetization.subscriptions.basePlans.activate",
  "monetization.subscriptions.basePlans.batchMigratePrices",
  "monetization.subscriptions.basePlans.batchUpdateStates",
  "monetization.subscriptions.basePlans.deactivate",
  "monetization.subscriptions.basePlans.delete",
  "monetization.subscriptions.basePlans.migratePrices",
  "monetization.subscriptions.basePlans.offers.activate",
  "monetization.subscriptions.basePlans.offers.batchGet",
  "monetization.subscriptions.basePlans.offers.batchUpdate",
  "monetization.subscriptions.basePlans.offers.batchUpdateStates",
  "monetization.subscriptions.basePlans.offers.create",
  "monetization.subscriptions.basePlans.offers.deactivate",
  "monetization.subscriptions.basePlans.offers.delete",
  "monetization.subscriptions.basePlans.offers.get",
  "monetization.subscriptions.basePlans.offers.list",
  "monetization.subscriptions.basePlans.offers.patch",
  "monetization.subscriptions.batchGet",
  "monetization.subscriptions.batchUpdate",
  "monetization.subscriptions.create",
  "monetization.subscriptions.delete",
  "monetization.subscriptions.get",
  "monetization.subscriptions.list",
  "monetization.subscriptions.patch",
  "orders.batchget",
  "orders.get",
  "orders.refund",
  "purchases.products.acknowledge",
  "purchases.products.consume",
  "purchases.products.get",
  "purchases.productsv2.getproductpurchasev2",
  "purchases.subscriptions.acknowledge",
  "purchases.subscriptions.cancel",
  "purchases.subscriptions.defer",
  "purchases.subscriptions.get",
  "purchases.subscriptions.refund",
  "purchases.subscriptions.revoke",
  "purchases.subscriptionsv2.cancel",
  "purchases.subscriptionsv2.defer",
  "purchases.subscriptionsv2.get",
  "purchases.subscriptionsv2.revoke",
  "purchases.voidedpurchases.list",
  "reviews.get",
  "reviews.list",
  "reviews.reply",
  "systemapks.variants.create",
  "systemapks.variants.download",
  "systemapks.variants.get",
  "systemapks.variants.list",
  "users.create",
  "users.delete",
  "users.list",
  "users.patch"
] as const;
export type GooglePlayFullApiAndroidpublisher02OperationKey = typeof GooglePlayFullApiAndroidpublisher02OperationKeys[number];
// End hardened literal operation keys.

export interface GooglePlayFullApiAndroidpublisher02OperationPathParamMap {
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "purchaseOptionId": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.purchaseOptions.offers.cancel": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "purchaseOptionId": GooglePlayFullApiPathParamValue; "offerId": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.purchaseOptions.offers.deactivate": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "purchaseOptionId": GooglePlayFullApiPathParamValue; "offerId": GooglePlayFullApiPathParamValue };
  "monetization.onetimeproducts.purchaseOptions.offers.list": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "purchaseOptionId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.archive": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.activate": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.batchMigratePrices": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.batchUpdateStates": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.deactivate": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.delete": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.migratePrices": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.offers.activate": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue; "offerId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.offers.batchGet": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.offers.batchUpdate": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.offers.batchUpdateStates": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.offers.create": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.offers.deactivate": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue; "offerId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.offers.delete": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue; "offerId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.offers.get": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue; "offerId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.offers.list": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.basePlans.offers.patch": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "basePlanId": GooglePlayFullApiPathParamValue; "offerId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.batchGet": { "packageName": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.batchUpdate": { "packageName": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.create": { "packageName": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.delete": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.get": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.list": { "packageName": GooglePlayFullApiPathParamValue };
  "monetization.subscriptions.patch": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue };
  "orders.batchget": { "packageName": GooglePlayFullApiPathParamValue };
  "orders.get": { "packageName": GooglePlayFullApiPathParamValue; "orderId": GooglePlayFullApiPathParamValue };
  "orders.refund": { "packageName": GooglePlayFullApiPathParamValue; "orderId": GooglePlayFullApiPathParamValue };
  "purchases.products.acknowledge": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.products.consume": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.products.get": { "packageName": GooglePlayFullApiPathParamValue; "productId": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.productsv2.getproductpurchasev2": { "packageName": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.subscriptions.acknowledge": { "packageName": GooglePlayFullApiPathParamValue; "subscriptionId": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.subscriptions.cancel": { "packageName": GooglePlayFullApiPathParamValue; "subscriptionId": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.subscriptions.defer": { "packageName": GooglePlayFullApiPathParamValue; "subscriptionId": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.subscriptions.get": { "packageName": GooglePlayFullApiPathParamValue; "subscriptionId": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.subscriptions.refund": { "packageName": GooglePlayFullApiPathParamValue; "subscriptionId": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.subscriptions.revoke": { "packageName": GooglePlayFullApiPathParamValue; "subscriptionId": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.subscriptionsv2.cancel": { "packageName": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.subscriptionsv2.defer": { "packageName": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.subscriptionsv2.get": { "packageName": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.subscriptionsv2.revoke": { "packageName": GooglePlayFullApiPathParamValue; "token": GooglePlayFullApiPathParamValue };
  "purchases.voidedpurchases.list": { "packageName": GooglePlayFullApiPathParamValue };
  "reviews.get": { "packageName": GooglePlayFullApiPathParamValue; "reviewId": GooglePlayFullApiPathParamValue };
  "reviews.list": { "packageName": GooglePlayFullApiPathParamValue };
  "reviews.reply": { "packageName": GooglePlayFullApiPathParamValue; "reviewId": GooglePlayFullApiPathParamValue };
  "systemapks.variants.create": { "packageName": GooglePlayFullApiPathParamValue; "versionCode": GooglePlayFullApiPathParamValue };
  "systemapks.variants.download": { "packageName": GooglePlayFullApiPathParamValue; "versionCode": GooglePlayFullApiPathParamValue; "variantId": GooglePlayFullApiPathParamValue };
  "systemapks.variants.get": { "packageName": GooglePlayFullApiPathParamValue; "versionCode": GooglePlayFullApiPathParamValue; "variantId": GooglePlayFullApiPathParamValue };
  "systemapks.variants.list": { "packageName": GooglePlayFullApiPathParamValue; "versionCode": GooglePlayFullApiPathParamValue };
  "users.create": { "parent": GooglePlayFullApiPathParamValue };
  "users.delete": { "name": GooglePlayFullApiPathParamValue };
  "users.list": { "parent": GooglePlayFullApiPathParamValue };
  "users.patch": { "name": GooglePlayFullApiPathParamValue };
}

export interface GooglePlayFullApiAndroidpublisher02OperationRequestMap {
  "monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates">;
  "monetization.onetimeproducts.purchaseOptions.offers.cancel": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.purchaseOptions.offers.cancel">;
  "monetization.onetimeproducts.purchaseOptions.offers.deactivate": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.purchaseOptions.offers.deactivate">;
  "monetization.onetimeproducts.purchaseOptions.offers.list": GooglePlayFullApiOperationInput<"monetization.onetimeproducts.purchaseOptions.offers.list">;
  "monetization.subscriptions.archive": GooglePlayFullApiOperationInput<"monetization.subscriptions.archive">;
  "monetization.subscriptions.basePlans.activate": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.activate">;
  "monetization.subscriptions.basePlans.batchMigratePrices": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.batchMigratePrices">;
  "monetization.subscriptions.basePlans.batchUpdateStates": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.batchUpdateStates">;
  "monetization.subscriptions.basePlans.deactivate": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.deactivate">;
  "monetization.subscriptions.basePlans.delete": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.delete">;
  "monetization.subscriptions.basePlans.migratePrices": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.migratePrices">;
  "monetization.subscriptions.basePlans.offers.activate": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.offers.activate">;
  "monetization.subscriptions.basePlans.offers.batchGet": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.offers.batchGet">;
  "monetization.subscriptions.basePlans.offers.batchUpdate": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.offers.batchUpdate">;
  "monetization.subscriptions.basePlans.offers.batchUpdateStates": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.offers.batchUpdateStates">;
  "monetization.subscriptions.basePlans.offers.create": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.offers.create">;
  "monetization.subscriptions.basePlans.offers.deactivate": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.offers.deactivate">;
  "monetization.subscriptions.basePlans.offers.delete": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.offers.delete">;
  "monetization.subscriptions.basePlans.offers.get": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.offers.get">;
  "monetization.subscriptions.basePlans.offers.list": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.offers.list">;
  "monetization.subscriptions.basePlans.offers.patch": GooglePlayFullApiOperationInput<"monetization.subscriptions.basePlans.offers.patch">;
  "monetization.subscriptions.batchGet": GooglePlayFullApiOperationInput<"monetization.subscriptions.batchGet">;
  "monetization.subscriptions.batchUpdate": GooglePlayFullApiOperationInput<"monetization.subscriptions.batchUpdate">;
  "monetization.subscriptions.create": GooglePlayFullApiOperationInput<"monetization.subscriptions.create">;
  "monetization.subscriptions.delete": GooglePlayFullApiOperationInput<"monetization.subscriptions.delete">;
  "monetization.subscriptions.get": GooglePlayFullApiOperationInput<"monetization.subscriptions.get">;
  "monetization.subscriptions.list": GooglePlayFullApiOperationInput<"monetization.subscriptions.list">;
  "monetization.subscriptions.patch": GooglePlayFullApiOperationInput<"monetization.subscriptions.patch">;
  "orders.batchget": GooglePlayFullApiOperationInput<"orders.batchget">;
  "orders.get": GooglePlayFullApiOperationInput<"orders.get">;
  "orders.refund": GooglePlayFullApiOperationInput<"orders.refund">;
  "purchases.products.acknowledge": GooglePlayFullApiOperationInput<"purchases.products.acknowledge">;
  "purchases.products.consume": GooglePlayFullApiOperationInput<"purchases.products.consume">;
  "purchases.products.get": GooglePlayFullApiOperationInput<"purchases.products.get">;
  "purchases.productsv2.getproductpurchasev2": GooglePlayFullApiOperationInput<"purchases.productsv2.getproductpurchasev2">;
  "purchases.subscriptions.acknowledge": GooglePlayFullApiOperationInput<"purchases.subscriptions.acknowledge">;
  "purchases.subscriptions.cancel": GooglePlayFullApiOperationInput<"purchases.subscriptions.cancel">;
  "purchases.subscriptions.defer": GooglePlayFullApiOperationInput<"purchases.subscriptions.defer">;
  "purchases.subscriptions.get": GooglePlayFullApiOperationInput<"purchases.subscriptions.get">;
  "purchases.subscriptions.refund": GooglePlayFullApiOperationInput<"purchases.subscriptions.refund">;
  "purchases.subscriptions.revoke": GooglePlayFullApiOperationInput<"purchases.subscriptions.revoke">;
  "purchases.subscriptionsv2.cancel": GooglePlayFullApiOperationInput<"purchases.subscriptionsv2.cancel">;
  "purchases.subscriptionsv2.defer": GooglePlayFullApiOperationInput<"purchases.subscriptionsv2.defer">;
  "purchases.subscriptionsv2.get": GooglePlayFullApiOperationInput<"purchases.subscriptionsv2.get">;
  "purchases.subscriptionsv2.revoke": GooglePlayFullApiOperationInput<"purchases.subscriptionsv2.revoke">;
  "purchases.voidedpurchases.list": GooglePlayFullApiOperationInput<"purchases.voidedpurchases.list">;
  "reviews.get": GooglePlayFullApiOperationInput<"reviews.get">;
  "reviews.list": GooglePlayFullApiOperationInput<"reviews.list">;
  "reviews.reply": GooglePlayFullApiOperationInput<"reviews.reply">;
  "systemapks.variants.create": GooglePlayFullApiOperationInput<"systemapks.variants.create">;
  "systemapks.variants.download": GooglePlayFullApiOperationInput<"systemapks.variants.download">;
  "systemapks.variants.get": GooglePlayFullApiOperationInput<"systemapks.variants.get">;
  "systemapks.variants.list": GooglePlayFullApiOperationInput<"systemapks.variants.list">;
  "users.create": GooglePlayFullApiOperationInput<"users.create">;
  "users.delete": GooglePlayFullApiOperationInput<"users.delete">;
  "users.list": GooglePlayFullApiOperationInput<"users.list">;
  "users.patch": GooglePlayFullApiOperationInput<"users.patch">;
}

export interface GooglePlayFullApiAndroidpublisher02GeneratedClient {
  MonetizationOnetimeproductsPurchaseOptionsOffersBatchUpdateStates(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates"]>;
  MonetizationOnetimeproductsPurchaseOptionsOffersCancel(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.cancel">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.purchaseOptions.offers.cancel"]>;
  MonetizationOnetimeproductsPurchaseOptionsOffersDeactivate(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.deactivate">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.purchaseOptions.offers.deactivate"]>;
  MonetizationOnetimeproductsPurchaseOptionsOffersList(...args: GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.list">): Promise<GooglePlayFullApiOperationResponseMap["monetization.onetimeproducts.purchaseOptions.offers.list"]>;
  MonetizationSubscriptionsArchive(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.archive">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.archive"]>;
  MonetizationSubscriptionsBasePlansActivate(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.activate">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.activate"]>;
  MonetizationSubscriptionsBasePlansBatchMigratePrices(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.batchMigratePrices">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.batchMigratePrices"]>;
  MonetizationSubscriptionsBasePlansBatchUpdateStates(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.batchUpdateStates">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.batchUpdateStates"]>;
  MonetizationSubscriptionsBasePlansDeactivate(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.deactivate">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.deactivate"]>;
  MonetizationSubscriptionsBasePlansDelete(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.delete">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.delete"]>;
  MonetizationSubscriptionsBasePlansMigratePrices(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.migratePrices">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.migratePrices"]>;
  MonetizationSubscriptionsBasePlansOffersActivate(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.activate">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.offers.activate"]>;
  MonetizationSubscriptionsBasePlansOffersBatchGet(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.batchGet">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.offers.batchGet"]>;
  MonetizationSubscriptionsBasePlansOffersBatchUpdate(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.batchUpdate">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.offers.batchUpdate"]>;
  MonetizationSubscriptionsBasePlansOffersBatchUpdateStates(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.batchUpdateStates">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.offers.batchUpdateStates"]>;
  MonetizationSubscriptionsBasePlansOffersCreate(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.create">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.offers.create"]>;
  MonetizationSubscriptionsBasePlansOffersDeactivate(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.deactivate">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.offers.deactivate"]>;
  MonetizationSubscriptionsBasePlansOffersDelete(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.delete">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.offers.delete"]>;
  MonetizationSubscriptionsBasePlansOffersGet(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.get">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.offers.get"]>;
  MonetizationSubscriptionsBasePlansOffersList(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.list">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.offers.list"]>;
  MonetizationSubscriptionsBasePlansOffersPatch(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.patch">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.basePlans.offers.patch"]>;
  MonetizationSubscriptionsBatchGet(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.batchGet">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.batchGet"]>;
  MonetizationSubscriptionsBatchUpdate(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.batchUpdate">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.batchUpdate"]>;
  MonetizationSubscriptionsCreate(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.create">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.create"]>;
  MonetizationSubscriptionsDelete(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.delete">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.delete"]>;
  MonetizationSubscriptionsGet(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.get">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.get"]>;
  MonetizationSubscriptionsList(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.list">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.list"]>;
  MonetizationSubscriptionsPatch(...args: GooglePlayFullApiOperationArgs<"monetization.subscriptions.patch">): Promise<GooglePlayFullApiOperationResponseMap["monetization.subscriptions.patch"]>;
  OrdersBatchget(...args: GooglePlayFullApiOperationArgs<"orders.batchget">): Promise<GooglePlayFullApiOperationResponseMap["orders.batchget"]>;
  OrdersGet(...args: GooglePlayFullApiOperationArgs<"orders.get">): Promise<GooglePlayFullApiOperationResponseMap["orders.get"]>;
  OrdersRefund(...args: GooglePlayFullApiOperationArgs<"orders.refund">): Promise<GooglePlayFullApiOperationResponseMap["orders.refund"]>;
  PurchasesProductsAcknowledge(...args: GooglePlayFullApiOperationArgs<"purchases.products.acknowledge">): Promise<GooglePlayFullApiOperationResponseMap["purchases.products.acknowledge"]>;
  PurchasesProductsConsume(...args: GooglePlayFullApiOperationArgs<"purchases.products.consume">): Promise<GooglePlayFullApiOperationResponseMap["purchases.products.consume"]>;
  PurchasesProductsGet(...args: GooglePlayFullApiOperationArgs<"purchases.products.get">): Promise<GooglePlayFullApiOperationResponseMap["purchases.products.get"]>;
  PurchasesProductsv2Getproductpurchasev2(...args: GooglePlayFullApiOperationArgs<"purchases.productsv2.getproductpurchasev2">): Promise<GooglePlayFullApiOperationResponseMap["purchases.productsv2.getproductpurchasev2"]>;
  PurchasesSubscriptionsAcknowledge(...args: GooglePlayFullApiOperationArgs<"purchases.subscriptions.acknowledge">): Promise<GooglePlayFullApiOperationResponseMap["purchases.subscriptions.acknowledge"]>;
  PurchasesSubscriptionsCancel(...args: GooglePlayFullApiOperationArgs<"purchases.subscriptions.cancel">): Promise<GooglePlayFullApiOperationResponseMap["purchases.subscriptions.cancel"]>;
  PurchasesSubscriptionsDefer(...args: GooglePlayFullApiOperationArgs<"purchases.subscriptions.defer">): Promise<GooglePlayFullApiOperationResponseMap["purchases.subscriptions.defer"]>;
  PurchasesSubscriptionsGet(...args: GooglePlayFullApiOperationArgs<"purchases.subscriptions.get">): Promise<GooglePlayFullApiOperationResponseMap["purchases.subscriptions.get"]>;
  PurchasesSubscriptionsRefund(...args: GooglePlayFullApiOperationArgs<"purchases.subscriptions.refund">): Promise<GooglePlayFullApiOperationResponseMap["purchases.subscriptions.refund"]>;
  PurchasesSubscriptionsRevoke(...args: GooglePlayFullApiOperationArgs<"purchases.subscriptions.revoke">): Promise<GooglePlayFullApiOperationResponseMap["purchases.subscriptions.revoke"]>;
  PurchasesSubscriptionsv2Cancel(...args: GooglePlayFullApiOperationArgs<"purchases.subscriptionsv2.cancel">): Promise<GooglePlayFullApiOperationResponseMap["purchases.subscriptionsv2.cancel"]>;
  PurchasesSubscriptionsv2Defer(...args: GooglePlayFullApiOperationArgs<"purchases.subscriptionsv2.defer">): Promise<GooglePlayFullApiOperationResponseMap["purchases.subscriptionsv2.defer"]>;
  PurchasesSubscriptionsv2Get(...args: GooglePlayFullApiOperationArgs<"purchases.subscriptionsv2.get">): Promise<GooglePlayFullApiOperationResponseMap["purchases.subscriptionsv2.get"]>;
  PurchasesSubscriptionsv2Revoke(...args: GooglePlayFullApiOperationArgs<"purchases.subscriptionsv2.revoke">): Promise<GooglePlayFullApiOperationResponseMap["purchases.subscriptionsv2.revoke"]>;
  PurchasesVoidedpurchasesList(...args: GooglePlayFullApiOperationArgs<"purchases.voidedpurchases.list">): Promise<GooglePlayFullApiOperationResponseMap["purchases.voidedpurchases.list"]>;
  ReviewsGet(...args: GooglePlayFullApiOperationArgs<"reviews.get">): Promise<GooglePlayFullApiOperationResponseMap["reviews.get"]>;
  ReviewsList(...args: GooglePlayFullApiOperationArgs<"reviews.list">): Promise<GooglePlayFullApiOperationResponseMap["reviews.list"]>;
  ReviewsReply(...args: GooglePlayFullApiOperationArgs<"reviews.reply">): Promise<GooglePlayFullApiOperationResponseMap["reviews.reply"]>;
  SystemapksVariantsCreate(...args: GooglePlayFullApiOperationArgs<"systemapks.variants.create">): Promise<GooglePlayFullApiOperationResponseMap["systemapks.variants.create"]>;
  SystemapksVariantsDownload(...args: GooglePlayFullApiOperationArgs<"systemapks.variants.download">): Promise<GooglePlayFullApiOperationResponseMap["systemapks.variants.download"]>;
  SystemapksVariantsGet(...args: GooglePlayFullApiOperationArgs<"systemapks.variants.get">): Promise<GooglePlayFullApiOperationResponseMap["systemapks.variants.get"]>;
  SystemapksVariantsList(...args: GooglePlayFullApiOperationArgs<"systemapks.variants.list">): Promise<GooglePlayFullApiOperationResponseMap["systemapks.variants.list"]>;
  UsersCreate(...args: GooglePlayFullApiOperationArgs<"users.create">): Promise<GooglePlayFullApiOperationResponseMap["users.create"]>;
  UsersDelete(...args: GooglePlayFullApiOperationArgs<"users.delete">): Promise<GooglePlayFullApiOperationResponseMap["users.delete"]>;
  UsersList(...args: GooglePlayFullApiOperationArgs<"users.list">): Promise<GooglePlayFullApiOperationResponseMap["users.list"]>;
  UsersPatch(...args: GooglePlayFullApiOperationArgs<"users.patch">): Promise<GooglePlayFullApiOperationResponseMap["users.patch"]>;
}

export const GooglePlayFullApiAndroidpublisher02GeneratedFunctionNames = [
  "MonetizationOnetimeproductsPurchaseOptionsOffersBatchUpdateStates",
  "MonetizationOnetimeproductsPurchaseOptionsOffersCancel",
  "MonetizationOnetimeproductsPurchaseOptionsOffersDeactivate",
  "MonetizationOnetimeproductsPurchaseOptionsOffersList",
  "MonetizationSubscriptionsArchive",
  "MonetizationSubscriptionsBasePlansActivate",
  "MonetizationSubscriptionsBasePlansBatchMigratePrices",
  "MonetizationSubscriptionsBasePlansBatchUpdateStates",
  "MonetizationSubscriptionsBasePlansDeactivate",
  "MonetizationSubscriptionsBasePlansDelete",
  "MonetizationSubscriptionsBasePlansMigratePrices",
  "MonetizationSubscriptionsBasePlansOffersActivate",
  "MonetizationSubscriptionsBasePlansOffersBatchGet",
  "MonetizationSubscriptionsBasePlansOffersBatchUpdate",
  "MonetizationSubscriptionsBasePlansOffersBatchUpdateStates",
  "MonetizationSubscriptionsBasePlansOffersCreate",
  "MonetizationSubscriptionsBasePlansOffersDeactivate",
  "MonetizationSubscriptionsBasePlansOffersDelete",
  "MonetizationSubscriptionsBasePlansOffersGet",
  "MonetizationSubscriptionsBasePlansOffersList",
  "MonetizationSubscriptionsBasePlansOffersPatch",
  "MonetizationSubscriptionsBatchGet",
  "MonetizationSubscriptionsBatchUpdate",
  "MonetizationSubscriptionsCreate",
  "MonetizationSubscriptionsDelete",
  "MonetizationSubscriptionsGet",
  "MonetizationSubscriptionsList",
  "MonetizationSubscriptionsPatch",
  "OrdersBatchget",
  "OrdersGet",
  "OrdersRefund",
  "PurchasesProductsAcknowledge",
  "PurchasesProductsConsume",
  "PurchasesProductsGet",
  "PurchasesProductsv2Getproductpurchasev2",
  "PurchasesSubscriptionsAcknowledge",
  "PurchasesSubscriptionsCancel",
  "PurchasesSubscriptionsDefer",
  "PurchasesSubscriptionsGet",
  "PurchasesSubscriptionsRefund",
  "PurchasesSubscriptionsRevoke",
  "PurchasesSubscriptionsv2Cancel",
  "PurchasesSubscriptionsv2Defer",
  "PurchasesSubscriptionsv2Get",
  "PurchasesSubscriptionsv2Revoke",
  "PurchasesVoidedpurchasesList",
  "ReviewsGet",
  "ReviewsList",
  "ReviewsReply",
  "SystemapksVariantsCreate",
  "SystemapksVariantsDownload",
  "SystemapksVariantsGet",
  "SystemapksVariantsList",
  "UsersCreate",
  "UsersDelete",
  "UsersList",
  "UsersPatch"
] as const satisfies readonly (keyof GooglePlayFullApiAndroidpublisher02GeneratedClient)[];

export function createGooglePlayFullApiAndroidpublisher02GeneratedClient(
  callOperation: GooglePlayGeneratedOperationCaller,
): GooglePlayFullApiAndroidpublisher02GeneratedClient {
  return {
    MonetizationOnetimeproductsPurchaseOptionsOffersBatchUpdateStates: (...args) => callOperation("monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.batchUpdateStates">)),
    MonetizationOnetimeproductsPurchaseOptionsOffersCancel: (...args) => callOperation("monetization.onetimeproducts.purchaseOptions.offers.cancel", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.cancel">)),
    MonetizationOnetimeproductsPurchaseOptionsOffersDeactivate: (...args) => callOperation("monetization.onetimeproducts.purchaseOptions.offers.deactivate", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.deactivate">)),
    MonetizationOnetimeproductsPurchaseOptionsOffersList: (...args) => callOperation("monetization.onetimeproducts.purchaseOptions.offers.list", ...(args as GooglePlayFullApiOperationArgs<"monetization.onetimeproducts.purchaseOptions.offers.list">)),
    MonetizationSubscriptionsArchive: (...args) => callOperation("monetization.subscriptions.archive", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.archive">)),
    MonetizationSubscriptionsBasePlansActivate: (...args) => callOperation("monetization.subscriptions.basePlans.activate", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.activate">)),
    MonetizationSubscriptionsBasePlansBatchMigratePrices: (...args) => callOperation("monetization.subscriptions.basePlans.batchMigratePrices", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.batchMigratePrices">)),
    MonetizationSubscriptionsBasePlansBatchUpdateStates: (...args) => callOperation("monetization.subscriptions.basePlans.batchUpdateStates", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.batchUpdateStates">)),
    MonetizationSubscriptionsBasePlansDeactivate: (...args) => callOperation("monetization.subscriptions.basePlans.deactivate", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.deactivate">)),
    MonetizationSubscriptionsBasePlansDelete: (...args) => callOperation("monetization.subscriptions.basePlans.delete", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.delete">)),
    MonetizationSubscriptionsBasePlansMigratePrices: (...args) => callOperation("monetization.subscriptions.basePlans.migratePrices", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.migratePrices">)),
    MonetizationSubscriptionsBasePlansOffersActivate: (...args) => callOperation("monetization.subscriptions.basePlans.offers.activate", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.activate">)),
    MonetizationSubscriptionsBasePlansOffersBatchGet: (...args) => callOperation("monetization.subscriptions.basePlans.offers.batchGet", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.batchGet">)),
    MonetizationSubscriptionsBasePlansOffersBatchUpdate: (...args) => callOperation("monetization.subscriptions.basePlans.offers.batchUpdate", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.batchUpdate">)),
    MonetizationSubscriptionsBasePlansOffersBatchUpdateStates: (...args) => callOperation("monetization.subscriptions.basePlans.offers.batchUpdateStates", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.batchUpdateStates">)),
    MonetizationSubscriptionsBasePlansOffersCreate: (...args) => callOperation("monetization.subscriptions.basePlans.offers.create", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.create">)),
    MonetizationSubscriptionsBasePlansOffersDeactivate: (...args) => callOperation("monetization.subscriptions.basePlans.offers.deactivate", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.deactivate">)),
    MonetizationSubscriptionsBasePlansOffersDelete: (...args) => callOperation("monetization.subscriptions.basePlans.offers.delete", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.delete">)),
    MonetizationSubscriptionsBasePlansOffersGet: (...args) => callOperation("monetization.subscriptions.basePlans.offers.get", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.get">)),
    MonetizationSubscriptionsBasePlansOffersList: (...args) => callOperation("monetization.subscriptions.basePlans.offers.list", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.list">)),
    MonetizationSubscriptionsBasePlansOffersPatch: (...args) => callOperation("monetization.subscriptions.basePlans.offers.patch", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.basePlans.offers.patch">)),
    MonetizationSubscriptionsBatchGet: (...args) => callOperation("monetization.subscriptions.batchGet", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.batchGet">)),
    MonetizationSubscriptionsBatchUpdate: (...args) => callOperation("monetization.subscriptions.batchUpdate", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.batchUpdate">)),
    MonetizationSubscriptionsCreate: (...args) => callOperation("monetization.subscriptions.create", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.create">)),
    MonetizationSubscriptionsDelete: (...args) => callOperation("monetization.subscriptions.delete", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.delete">)),
    MonetizationSubscriptionsGet: (...args) => callOperation("monetization.subscriptions.get", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.get">)),
    MonetizationSubscriptionsList: (...args) => callOperation("monetization.subscriptions.list", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.list">)),
    MonetizationSubscriptionsPatch: (...args) => callOperation("monetization.subscriptions.patch", ...(args as GooglePlayFullApiOperationArgs<"monetization.subscriptions.patch">)),
    OrdersBatchget: (...args) => callOperation("orders.batchget", ...(args as GooglePlayFullApiOperationArgs<"orders.batchget">)),
    OrdersGet: (...args) => callOperation("orders.get", ...(args as GooglePlayFullApiOperationArgs<"orders.get">)),
    OrdersRefund: (...args) => callOperation("orders.refund", ...(args as GooglePlayFullApiOperationArgs<"orders.refund">)),
    PurchasesProductsAcknowledge: (...args) => callOperation("purchases.products.acknowledge", ...(args as GooglePlayFullApiOperationArgs<"purchases.products.acknowledge">)),
    PurchasesProductsConsume: (...args) => callOperation("purchases.products.consume", ...(args as GooglePlayFullApiOperationArgs<"purchases.products.consume">)),
    PurchasesProductsGet: (...args) => callOperation("purchases.products.get", ...(args as GooglePlayFullApiOperationArgs<"purchases.products.get">)),
    PurchasesProductsv2Getproductpurchasev2: (...args) => callOperation("purchases.productsv2.getproductpurchasev2", ...(args as GooglePlayFullApiOperationArgs<"purchases.productsv2.getproductpurchasev2">)),
    PurchasesSubscriptionsAcknowledge: (...args) => callOperation("purchases.subscriptions.acknowledge", ...(args as GooglePlayFullApiOperationArgs<"purchases.subscriptions.acknowledge">)),
    PurchasesSubscriptionsCancel: (...args) => callOperation("purchases.subscriptions.cancel", ...(args as GooglePlayFullApiOperationArgs<"purchases.subscriptions.cancel">)),
    PurchasesSubscriptionsDefer: (...args) => callOperation("purchases.subscriptions.defer", ...(args as GooglePlayFullApiOperationArgs<"purchases.subscriptions.defer">)),
    PurchasesSubscriptionsGet: (...args) => callOperation("purchases.subscriptions.get", ...(args as GooglePlayFullApiOperationArgs<"purchases.subscriptions.get">)),
    PurchasesSubscriptionsRefund: (...args) => callOperation("purchases.subscriptions.refund", ...(args as GooglePlayFullApiOperationArgs<"purchases.subscriptions.refund">)),
    PurchasesSubscriptionsRevoke: (...args) => callOperation("purchases.subscriptions.revoke", ...(args as GooglePlayFullApiOperationArgs<"purchases.subscriptions.revoke">)),
    PurchasesSubscriptionsv2Cancel: (...args) => callOperation("purchases.subscriptionsv2.cancel", ...(args as GooglePlayFullApiOperationArgs<"purchases.subscriptionsv2.cancel">)),
    PurchasesSubscriptionsv2Defer: (...args) => callOperation("purchases.subscriptionsv2.defer", ...(args as GooglePlayFullApiOperationArgs<"purchases.subscriptionsv2.defer">)),
    PurchasesSubscriptionsv2Get: (...args) => callOperation("purchases.subscriptionsv2.get", ...(args as GooglePlayFullApiOperationArgs<"purchases.subscriptionsv2.get">)),
    PurchasesSubscriptionsv2Revoke: (...args) => callOperation("purchases.subscriptionsv2.revoke", ...(args as GooglePlayFullApiOperationArgs<"purchases.subscriptionsv2.revoke">)),
    PurchasesVoidedpurchasesList: (...args) => callOperation("purchases.voidedpurchases.list", ...(args as GooglePlayFullApiOperationArgs<"purchases.voidedpurchases.list">)),
    ReviewsGet: (...args) => callOperation("reviews.get", ...(args as GooglePlayFullApiOperationArgs<"reviews.get">)),
    ReviewsList: (...args) => callOperation("reviews.list", ...(args as GooglePlayFullApiOperationArgs<"reviews.list">)),
    ReviewsReply: (...args) => callOperation("reviews.reply", ...(args as GooglePlayFullApiOperationArgs<"reviews.reply">)),
    SystemapksVariantsCreate: (...args) => callOperation("systemapks.variants.create", ...(args as GooglePlayFullApiOperationArgs<"systemapks.variants.create">)),
    SystemapksVariantsDownload: (...args) => callOperation("systemapks.variants.download", ...(args as GooglePlayFullApiOperationArgs<"systemapks.variants.download">)),
    SystemapksVariantsGet: (...args) => callOperation("systemapks.variants.get", ...(args as GooglePlayFullApiOperationArgs<"systemapks.variants.get">)),
    SystemapksVariantsList: (...args) => callOperation("systemapks.variants.list", ...(args as GooglePlayFullApiOperationArgs<"systemapks.variants.list">)),
    UsersCreate: (...args) => callOperation("users.create", ...(args as GooglePlayFullApiOperationArgs<"users.create">)),
    UsersDelete: (...args) => callOperation("users.delete", ...(args as GooglePlayFullApiOperationArgs<"users.delete">)),
    UsersList: (...args) => callOperation("users.list", ...(args as GooglePlayFullApiOperationArgs<"users.list">)),
    UsersPatch: (...args) => callOperation("users.patch", ...(args as GooglePlayFullApiOperationArgs<"users.patch">)),
  };
}
