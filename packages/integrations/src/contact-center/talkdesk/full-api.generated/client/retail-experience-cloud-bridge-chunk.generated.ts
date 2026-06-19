// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiRetailExperienceCloudBridgeOperationKeys = [
  "erc-ecommerce-customers-customer-id-get",
  "erc-ecommerce-customers-customer-id-orders-get",
  "erc-ecommerce-customers-customer-id-orders-order-id-get",
  "erc-ecommerce-customers-customer-id-orders-order-id-patch",
  "erc-ecommerce-customers-customer-id-orders-order-id-items-get",
  "erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put",
  "erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post",
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-post",
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get",
  "erc-ecommerce-customers-customer-id-shipments-get",
  "erc-ecommerce-customers-customer-id-shipments-schedule-post",
  "erc-ecommerce-customers-customer-id-most-recent-order-get",
  "erc-ecommerce-customers-shipments-available-slots-get",
  "erc-ecommerce-cart-items-put",
  "erc-ecommerce-cart-cart-id-delivery-address-put",
  "erc-ecommerce-cart-cart-id-delivery-option-put",
  "erc-ecommerce-cart-cart-id-bind-post",
  "erc-ecommerce-customers-cart-get",
  "erc-ecommerce-orders-get",
  "erc-ecommerce-products-get",
  "erc-ecommerce-brand-get",
  "erc-ecommerce-customers-technician-visits-available-slots-get",
  "erc-ecommerce-customers-customer-id-technician-visits-schedule-post",
  "erc-ecommerce-customers-customer-id-technician-visits-get",
  "erc-ecommerce-external-customers-get",
  "erc-ecommerce-shopify-webhooks-handler-credentials-get",
  "erc-ecommerce-shopify-webhooks-handler-credentials-put",
  "erc-ecommerce-shopify-webhooks-handler-credentials-delete",
  "erc-ecommerce-return-reasons-get",
  "erc-ecommerce-return-calculations-post",
  "erc-ecommerce-order-cancel-return-return-id-post",
  "erc-ecommerce-order-create-return-post",
  "erc-ecommerce-refund-suggested-post",
  "erc-ecommerce-refund-post",
  "erc-ecommerce-return-process-refund-post"
] as const;
export type TalkdeskFullApiRetailExperienceCloudBridgeOperationKey = typeof TalkdeskFullApiRetailExperienceCloudBridgeOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiRetailExperienceCloudBridgeOperationPathParamMap {
  "erc-ecommerce-customers-customer-id-get": { "customer_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-customer-id-orders-get": { "customer_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-customer-id-orders-order-id-get": { "customer_id": TalkdeskFullApiPathParamValue; "order_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-customer-id-orders-order-id-patch": { "customer_id": TalkdeskFullApiPathParamValue; "order_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-customer-id-orders-order-id-items-get": { "customer_id": TalkdeskFullApiPathParamValue; "order_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put": { "customer_id": TalkdeskFullApiPathParamValue; "order_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post": { "customer_id": TalkdeskFullApiPathParamValue; "order_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-post": { "customer_id": TalkdeskFullApiPathParamValue; "order_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get": { "customer_id": TalkdeskFullApiPathParamValue; "order_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-customer-id-shipments-get": { "customer_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-customer-id-shipments-schedule-post": { "customer_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-customer-id-most-recent-order-get": { "customer_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-shipments-available-slots-get": {};
  "erc-ecommerce-cart-items-put": {};
  "erc-ecommerce-cart-cart-id-delivery-address-put": { "cart_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-cart-cart-id-delivery-option-put": { "cart_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-cart-cart-id-bind-post": { "cart_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-cart-get": {};
  "erc-ecommerce-orders-get": {};
  "erc-ecommerce-products-get": {};
  "erc-ecommerce-brand-get": {};
  "erc-ecommerce-customers-technician-visits-available-slots-get": {};
  "erc-ecommerce-customers-customer-id-technician-visits-schedule-post": { "customer_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-customers-customer-id-technician-visits-get": { "customer_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-external-customers-get": {};
  "erc-ecommerce-shopify-webhooks-handler-credentials-get": {};
  "erc-ecommerce-shopify-webhooks-handler-credentials-put": {};
  "erc-ecommerce-shopify-webhooks-handler-credentials-delete": {};
  "erc-ecommerce-return-reasons-get": {};
  "erc-ecommerce-return-calculations-post": {};
  "erc-ecommerce-order-cancel-return-return-id-post": { "return_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-order-create-return-post": {};
  "erc-ecommerce-refund-suggested-post": {};
  "erc-ecommerce-refund-post": {};
  "erc-ecommerce-return-process-refund-post": {};
}

export interface TalkdeskFullApiRetailExperienceCloudBridgeOperationRequestMap {
  "erc-ecommerce-customers-customer-id-get": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-get">;
  "erc-ecommerce-customers-customer-id-orders-get": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-orders-get">;
  "erc-ecommerce-customers-customer-id-orders-order-id-get": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-orders-order-id-get">;
  "erc-ecommerce-customers-customer-id-orders-order-id-patch": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-orders-order-id-patch">;
  "erc-ecommerce-customers-customer-id-orders-order-id-items-get": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-orders-order-id-items-get">;
  "erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put">;
  "erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post">;
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-post": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-orders-order-id-cancel-post">;
  "erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get">;
  "erc-ecommerce-customers-customer-id-shipments-get": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-shipments-get">;
  "erc-ecommerce-customers-customer-id-shipments-schedule-post": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-shipments-schedule-post">;
  "erc-ecommerce-customers-customer-id-most-recent-order-get": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-most-recent-order-get">;
  "erc-ecommerce-customers-shipments-available-slots-get": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-shipments-available-slots-get">;
  "erc-ecommerce-cart-items-put": TalkdeskFullApiOperationInput<"erc-ecommerce-cart-items-put">;
  "erc-ecommerce-cart-cart-id-delivery-address-put": TalkdeskFullApiOperationInput<"erc-ecommerce-cart-cart-id-delivery-address-put">;
  "erc-ecommerce-cart-cart-id-delivery-option-put": TalkdeskFullApiOperationInput<"erc-ecommerce-cart-cart-id-delivery-option-put">;
  "erc-ecommerce-cart-cart-id-bind-post": TalkdeskFullApiOperationInput<"erc-ecommerce-cart-cart-id-bind-post">;
  "erc-ecommerce-customers-cart-get": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-cart-get">;
  "erc-ecommerce-orders-get": TalkdeskFullApiOperationInput<"erc-ecommerce-orders-get">;
  "erc-ecommerce-products-get": TalkdeskFullApiOperationInput<"erc-ecommerce-products-get">;
  "erc-ecommerce-brand-get": TalkdeskFullApiOperationInput<"erc-ecommerce-brand-get">;
  "erc-ecommerce-customers-technician-visits-available-slots-get": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-technician-visits-available-slots-get">;
  "erc-ecommerce-customers-customer-id-technician-visits-schedule-post": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-technician-visits-schedule-post">;
  "erc-ecommerce-customers-customer-id-technician-visits-get": TalkdeskFullApiOperationInput<"erc-ecommerce-customers-customer-id-technician-visits-get">;
  "erc-ecommerce-external-customers-get": TalkdeskFullApiOperationInput<"erc-ecommerce-external-customers-get">;
  "erc-ecommerce-shopify-webhooks-handler-credentials-get": TalkdeskFullApiOperationInput<"erc-ecommerce-shopify-webhooks-handler-credentials-get">;
  "erc-ecommerce-shopify-webhooks-handler-credentials-put": TalkdeskFullApiOperationInput<"erc-ecommerce-shopify-webhooks-handler-credentials-put">;
  "erc-ecommerce-shopify-webhooks-handler-credentials-delete": TalkdeskFullApiOperationInput<"erc-ecommerce-shopify-webhooks-handler-credentials-delete">;
  "erc-ecommerce-return-reasons-get": TalkdeskFullApiOperationInput<"erc-ecommerce-return-reasons-get">;
  "erc-ecommerce-return-calculations-post": TalkdeskFullApiOperationInput<"erc-ecommerce-return-calculations-post">;
  "erc-ecommerce-order-cancel-return-return-id-post": TalkdeskFullApiOperationInput<"erc-ecommerce-order-cancel-return-return-id-post">;
  "erc-ecommerce-order-create-return-post": TalkdeskFullApiOperationInput<"erc-ecommerce-order-create-return-post">;
  "erc-ecommerce-refund-suggested-post": TalkdeskFullApiOperationInput<"erc-ecommerce-refund-suggested-post">;
  "erc-ecommerce-refund-post": TalkdeskFullApiOperationInput<"erc-ecommerce-refund-post">;
  "erc-ecommerce-return-process-refund-post": TalkdeskFullApiOperationInput<"erc-ecommerce-return-process-refund-post">;
}

export interface TalkdeskFullApiRetailExperienceCloudBridgeGeneratedClient {
  ErcEcommerceCustomersCustomerIdGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-get"]>;
  ErcEcommerceCustomersCustomerIdOrdersGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-orders-get"]>;
  ErcEcommerceCustomersCustomerIdOrdersOrderIdGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-orders-order-id-get"]>;
  ErcEcommerceCustomersCustomerIdOrdersOrderIdPatch(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-patch">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-orders-order-id-patch"]>;
  ErcEcommerceCustomersCustomerIdOrdersOrderIdItemsGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-items-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-orders-order-id-items-get"]>;
  ErcEcommerceCustomersCustomerIdOrdersOrderIdItemsCancelPut(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put"]>;
  ErcEcommerceCustomersCustomerIdOrdersOrderIdChangeShippingAddressPost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post"]>;
  ErcEcommerceCustomersCustomerIdOrdersOrderIdCancelPost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-cancel-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-orders-order-id-cancel-post"]>;
  ErcEcommerceCustomersCustomerIdOrdersOrderIdCancelPreviewGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get"]>;
  ErcEcommerceCustomersCustomerIdShipmentsGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-shipments-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-shipments-get"]>;
  ErcEcommerceCustomersCustomerIdShipmentsSchedulePost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-shipments-schedule-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-shipments-schedule-post"]>;
  ErcEcommerceCustomersCustomerIdMostRecentOrderGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-most-recent-order-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-most-recent-order-get"]>;
  ErcEcommerceCustomersShipmentsAvailableSlotsGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-shipments-available-slots-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-shipments-available-slots-get"]>;
  ErcEcommerceCartItemsPut(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-cart-items-put">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-cart-items-put"]>;
  ErcEcommerceCartCartIdDeliveryAddressPut(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-cart-cart-id-delivery-address-put">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-cart-cart-id-delivery-address-put"]>;
  ErcEcommerceCartCartIdDeliveryOptionPut(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-cart-cart-id-delivery-option-put">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-cart-cart-id-delivery-option-put"]>;
  ErcEcommerceCartCartIdBindPost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-cart-cart-id-bind-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-cart-cart-id-bind-post"]>;
  ErcEcommerceCustomersCartGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-cart-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-cart-get"]>;
  ErcEcommerceOrdersGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-orders-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-orders-get"]>;
  ErcEcommerceProductsGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-products-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-products-get"]>;
  ErcEcommerceBrandGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-brand-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-brand-get"]>;
  ErcEcommerceCustomersTechnicianVisitsAvailableSlotsGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-technician-visits-available-slots-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-technician-visits-available-slots-get"]>;
  ErcEcommerceCustomersCustomerIdTechnicianVisitsSchedulePost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-technician-visits-schedule-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-technician-visits-schedule-post"]>;
  ErcEcommerceCustomersCustomerIdTechnicianVisitsGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-technician-visits-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-customers-customer-id-technician-visits-get"]>;
  ErcEcommerceExternalCustomersGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-external-customers-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-external-customers-get"]>;
  ErcEcommerceShopifyWebhooksHandlerCredentialsGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-shopify-webhooks-handler-credentials-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-shopify-webhooks-handler-credentials-get"]>;
  ErcEcommerceShopifyWebhooksHandlerCredentialsPut(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-shopify-webhooks-handler-credentials-put">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-shopify-webhooks-handler-credentials-put"]>;
  ErcEcommerceShopifyWebhooksHandlerCredentialsDelete(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-shopify-webhooks-handler-credentials-delete">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-shopify-webhooks-handler-credentials-delete"]>;
  ErcEcommerceReturnReasonsGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-return-reasons-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-return-reasons-get"]>;
  ErcEcommerceReturnCalculationsPost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-return-calculations-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-return-calculations-post"]>;
  ErcEcommerceOrderCancelReturnReturnIdPost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-order-cancel-return-return-id-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-order-cancel-return-return-id-post"]>;
  ErcEcommerceOrderCreateReturnPost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-order-create-return-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-order-create-return-post"]>;
  ErcEcommerceRefundSuggestedPost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-refund-suggested-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-refund-suggested-post"]>;
  ErcEcommerceRefundPost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-refund-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-refund-post"]>;
  ErcEcommerceReturnProcessRefundPost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-return-process-refund-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-return-process-refund-post"]>;
}

export const TalkdeskFullApiRetailExperienceCloudBridgeGeneratedFunctionNames = [
  "ErcEcommerceCustomersCustomerIdGet",
  "ErcEcommerceCustomersCustomerIdOrdersGet",
  "ErcEcommerceCustomersCustomerIdOrdersOrderIdGet",
  "ErcEcommerceCustomersCustomerIdOrdersOrderIdPatch",
  "ErcEcommerceCustomersCustomerIdOrdersOrderIdItemsGet",
  "ErcEcommerceCustomersCustomerIdOrdersOrderIdItemsCancelPut",
  "ErcEcommerceCustomersCustomerIdOrdersOrderIdChangeShippingAddressPost",
  "ErcEcommerceCustomersCustomerIdOrdersOrderIdCancelPost",
  "ErcEcommerceCustomersCustomerIdOrdersOrderIdCancelPreviewGet",
  "ErcEcommerceCustomersCustomerIdShipmentsGet",
  "ErcEcommerceCustomersCustomerIdShipmentsSchedulePost",
  "ErcEcommerceCustomersCustomerIdMostRecentOrderGet",
  "ErcEcommerceCustomersShipmentsAvailableSlotsGet",
  "ErcEcommerceCartItemsPut",
  "ErcEcommerceCartCartIdDeliveryAddressPut",
  "ErcEcommerceCartCartIdDeliveryOptionPut",
  "ErcEcommerceCartCartIdBindPost",
  "ErcEcommerceCustomersCartGet",
  "ErcEcommerceOrdersGet",
  "ErcEcommerceProductsGet",
  "ErcEcommerceBrandGet",
  "ErcEcommerceCustomersTechnicianVisitsAvailableSlotsGet",
  "ErcEcommerceCustomersCustomerIdTechnicianVisitsSchedulePost",
  "ErcEcommerceCustomersCustomerIdTechnicianVisitsGet",
  "ErcEcommerceExternalCustomersGet",
  "ErcEcommerceShopifyWebhooksHandlerCredentialsGet",
  "ErcEcommerceShopifyWebhooksHandlerCredentialsPut",
  "ErcEcommerceShopifyWebhooksHandlerCredentialsDelete",
  "ErcEcommerceReturnReasonsGet",
  "ErcEcommerceReturnCalculationsPost",
  "ErcEcommerceOrderCancelReturnReturnIdPost",
  "ErcEcommerceOrderCreateReturnPost",
  "ErcEcommerceRefundSuggestedPost",
  "ErcEcommerceRefundPost",
  "ErcEcommerceReturnProcessRefundPost"
] as const satisfies readonly (keyof TalkdeskFullApiRetailExperienceCloudBridgeGeneratedClient)[];

export function createTalkdeskFullApiRetailExperienceCloudBridgeGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiRetailExperienceCloudBridgeGeneratedClient {
  return {
    ErcEcommerceCustomersCustomerIdGet: (...args) => callOperation("erc-ecommerce-customers-customer-id-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-get">)),
    ErcEcommerceCustomersCustomerIdOrdersGet: (...args) => callOperation("erc-ecommerce-customers-customer-id-orders-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-get">)),
    ErcEcommerceCustomersCustomerIdOrdersOrderIdGet: (...args) => callOperation("erc-ecommerce-customers-customer-id-orders-order-id-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-get">)),
    ErcEcommerceCustomersCustomerIdOrdersOrderIdPatch: (...args) => callOperation("erc-ecommerce-customers-customer-id-orders-order-id-patch", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-patch">)),
    ErcEcommerceCustomersCustomerIdOrdersOrderIdItemsGet: (...args) => callOperation("erc-ecommerce-customers-customer-id-orders-order-id-items-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-items-get">)),
    ErcEcommerceCustomersCustomerIdOrdersOrderIdItemsCancelPut: (...args) => callOperation("erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-items-cancel-put">)),
    ErcEcommerceCustomersCustomerIdOrdersOrderIdChangeShippingAddressPost: (...args) => callOperation("erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-change-shipping-address-post">)),
    ErcEcommerceCustomersCustomerIdOrdersOrderIdCancelPost: (...args) => callOperation("erc-ecommerce-customers-customer-id-orders-order-id-cancel-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-cancel-post">)),
    ErcEcommerceCustomersCustomerIdOrdersOrderIdCancelPreviewGet: (...args) => callOperation("erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-orders-order-id-cancel-preview-get">)),
    ErcEcommerceCustomersCustomerIdShipmentsGet: (...args) => callOperation("erc-ecommerce-customers-customer-id-shipments-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-shipments-get">)),
    ErcEcommerceCustomersCustomerIdShipmentsSchedulePost: (...args) => callOperation("erc-ecommerce-customers-customer-id-shipments-schedule-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-shipments-schedule-post">)),
    ErcEcommerceCustomersCustomerIdMostRecentOrderGet: (...args) => callOperation("erc-ecommerce-customers-customer-id-most-recent-order-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-most-recent-order-get">)),
    ErcEcommerceCustomersShipmentsAvailableSlotsGet: (...args) => callOperation("erc-ecommerce-customers-shipments-available-slots-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-shipments-available-slots-get">)),
    ErcEcommerceCartItemsPut: (...args) => callOperation("erc-ecommerce-cart-items-put", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-cart-items-put">)),
    ErcEcommerceCartCartIdDeliveryAddressPut: (...args) => callOperation("erc-ecommerce-cart-cart-id-delivery-address-put", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-cart-cart-id-delivery-address-put">)),
    ErcEcommerceCartCartIdDeliveryOptionPut: (...args) => callOperation("erc-ecommerce-cart-cart-id-delivery-option-put", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-cart-cart-id-delivery-option-put">)),
    ErcEcommerceCartCartIdBindPost: (...args) => callOperation("erc-ecommerce-cart-cart-id-bind-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-cart-cart-id-bind-post">)),
    ErcEcommerceCustomersCartGet: (...args) => callOperation("erc-ecommerce-customers-cart-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-cart-get">)),
    ErcEcommerceOrdersGet: (...args) => callOperation("erc-ecommerce-orders-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-orders-get">)),
    ErcEcommerceProductsGet: (...args) => callOperation("erc-ecommerce-products-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-products-get">)),
    ErcEcommerceBrandGet: (...args) => callOperation("erc-ecommerce-brand-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-brand-get">)),
    ErcEcommerceCustomersTechnicianVisitsAvailableSlotsGet: (...args) => callOperation("erc-ecommerce-customers-technician-visits-available-slots-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-technician-visits-available-slots-get">)),
    ErcEcommerceCustomersCustomerIdTechnicianVisitsSchedulePost: (...args) => callOperation("erc-ecommerce-customers-customer-id-technician-visits-schedule-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-technician-visits-schedule-post">)),
    ErcEcommerceCustomersCustomerIdTechnicianVisitsGet: (...args) => callOperation("erc-ecommerce-customers-customer-id-technician-visits-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-customers-customer-id-technician-visits-get">)),
    ErcEcommerceExternalCustomersGet: (...args) => callOperation("erc-ecommerce-external-customers-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-external-customers-get">)),
    ErcEcommerceShopifyWebhooksHandlerCredentialsGet: (...args) => callOperation("erc-ecommerce-shopify-webhooks-handler-credentials-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-shopify-webhooks-handler-credentials-get">)),
    ErcEcommerceShopifyWebhooksHandlerCredentialsPut: (...args) => callOperation("erc-ecommerce-shopify-webhooks-handler-credentials-put", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-shopify-webhooks-handler-credentials-put">)),
    ErcEcommerceShopifyWebhooksHandlerCredentialsDelete: (...args) => callOperation("erc-ecommerce-shopify-webhooks-handler-credentials-delete", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-shopify-webhooks-handler-credentials-delete">)),
    ErcEcommerceReturnReasonsGet: (...args) => callOperation("erc-ecommerce-return-reasons-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-return-reasons-get">)),
    ErcEcommerceReturnCalculationsPost: (...args) => callOperation("erc-ecommerce-return-calculations-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-return-calculations-post">)),
    ErcEcommerceOrderCancelReturnReturnIdPost: (...args) => callOperation("erc-ecommerce-order-cancel-return-return-id-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-order-cancel-return-return-id-post">)),
    ErcEcommerceOrderCreateReturnPost: (...args) => callOperation("erc-ecommerce-order-create-return-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-order-create-return-post">)),
    ErcEcommerceRefundSuggestedPost: (...args) => callOperation("erc-ecommerce-refund-suggested-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-refund-suggested-post">)),
    ErcEcommerceRefundPost: (...args) => callOperation("erc-ecommerce-refund-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-refund-post">)),
    ErcEcommerceReturnProcessRefundPost: (...args) => callOperation("erc-ecommerce-return-process-refund-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-return-process-refund-post">)),
  };
}
