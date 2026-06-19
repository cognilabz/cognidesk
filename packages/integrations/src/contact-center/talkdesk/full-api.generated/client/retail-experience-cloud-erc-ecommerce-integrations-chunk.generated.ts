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
export const TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsOperationKeys = [
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post",
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post",
  "erc-ecommerce-connections-customers-customer-id-shipments-get",
  "erc-ecommerce-connections-customers-customer-id-shipments-schedule-post",
  "erc-ecommerce-connections-customers-customer-id-get",
  "erc-ecommerce-connections-customers-customer-id-orders-get",
  "erc-ecommerce-connections-customers-customer-id-most-recent-order-get",
  "erc-ecommerce-connections-customers-shipments-available-slots-get",
  "erc-ecommerce-connections-products-get",
  "ercEcommerceConnectionsGetCustomerOrderItems",
  "ercEcommerceConnectionsCancelCustomerOrderItems",
  "erc-ecommerce-connections-customers-cart-get"
] as const;
export type TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsOperationKey = typeof TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsOperationPathParamMap {
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post": { "customer_id": TalkdeskFullApiPathParamValue; "order_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post": { "customer_id": TalkdeskFullApiPathParamValue; "order_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-connections-customers-customer-id-shipments-get": { "customer_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-connections-customers-customer-id-shipments-schedule-post": { "customer_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-connections-customers-customer-id-get": { "customer_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-connections-customers-customer-id-orders-get": { "customer_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-connections-customers-customer-id-most-recent-order-get": { "customer_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-connections-customers-shipments-available-slots-get": {};
  "erc-ecommerce-connections-products-get": {};
  "ercEcommerceConnectionsGetCustomerOrderItems": { "customer_id": TalkdeskFullApiPathParamValue; "order_id": TalkdeskFullApiPathParamValue };
  "ercEcommerceConnectionsCancelCustomerOrderItems": { "customer_id": TalkdeskFullApiPathParamValue; "order_id": TalkdeskFullApiPathParamValue };
  "erc-ecommerce-connections-customers-cart-get": {};
}

export interface TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsOperationRequestMap {
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post": TalkdeskFullApiOperationInput<"erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post">;
  "erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post": TalkdeskFullApiOperationInput<"erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post">;
  "erc-ecommerce-connections-customers-customer-id-shipments-get": TalkdeskFullApiOperationInput<"erc-ecommerce-connections-customers-customer-id-shipments-get">;
  "erc-ecommerce-connections-customers-customer-id-shipments-schedule-post": TalkdeskFullApiOperationInput<"erc-ecommerce-connections-customers-customer-id-shipments-schedule-post">;
  "erc-ecommerce-connections-customers-customer-id-get": TalkdeskFullApiOperationInput<"erc-ecommerce-connections-customers-customer-id-get">;
  "erc-ecommerce-connections-customers-customer-id-orders-get": TalkdeskFullApiOperationInput<"erc-ecommerce-connections-customers-customer-id-orders-get">;
  "erc-ecommerce-connections-customers-customer-id-most-recent-order-get": TalkdeskFullApiOperationInput<"erc-ecommerce-connections-customers-customer-id-most-recent-order-get">;
  "erc-ecommerce-connections-customers-shipments-available-slots-get": TalkdeskFullApiOperationInput<"erc-ecommerce-connections-customers-shipments-available-slots-get">;
  "erc-ecommerce-connections-products-get": TalkdeskFullApiOperationInput<"erc-ecommerce-connections-products-get">;
  "ercEcommerceConnectionsGetCustomerOrderItems": TalkdeskFullApiOperationInput<"ercEcommerceConnectionsGetCustomerOrderItems">;
  "ercEcommerceConnectionsCancelCustomerOrderItems": TalkdeskFullApiOperationInput<"ercEcommerceConnectionsCancelCustomerOrderItems">;
  "erc-ecommerce-connections-customers-cart-get": TalkdeskFullApiOperationInput<"erc-ecommerce-connections-customers-cart-get">;
}

export interface TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsGeneratedClient {
  ErcEcommerceConnectionsCustomersCustomerIdOrdersOrderIdCancelPost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post"]>;
  ErcEcommerceConnectionsCustomersCustomerIdOrdersOrderIdChangeShippingAddressPost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post"]>;
  ErcEcommerceConnectionsCustomersCustomerIdShipmentsGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-shipments-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-connections-customers-customer-id-shipments-get"]>;
  ErcEcommerceConnectionsCustomersCustomerIdShipmentsSchedulePost(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-shipments-schedule-post">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-connections-customers-customer-id-shipments-schedule-post"]>;
  ErcEcommerceConnectionsCustomersCustomerIdGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-connections-customers-customer-id-get"]>;
  ErcEcommerceConnectionsCustomersCustomerIdOrdersGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-orders-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-connections-customers-customer-id-orders-get"]>;
  ErcEcommerceConnectionsCustomersCustomerIdMostRecentOrderGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-most-recent-order-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-connections-customers-customer-id-most-recent-order-get"]>;
  ErcEcommerceConnectionsCustomersShipmentsAvailableSlotsGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-shipments-available-slots-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-connections-customers-shipments-available-slots-get"]>;
  ErcEcommerceConnectionsProductsGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-products-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-connections-products-get"]>;
  ErcEcommerceConnectionsGetCustomerOrderItems(...args: TalkdeskFullApiOperationArgs<"ercEcommerceConnectionsGetCustomerOrderItems">): Promise<TalkdeskFullApiOperationResponseMap["ercEcommerceConnectionsGetCustomerOrderItems"]>;
  ErcEcommerceConnectionsCancelCustomerOrderItems(...args: TalkdeskFullApiOperationArgs<"ercEcommerceConnectionsCancelCustomerOrderItems">): Promise<TalkdeskFullApiOperationResponseMap["ercEcommerceConnectionsCancelCustomerOrderItems"]>;
  ErcEcommerceConnectionsCustomersCartGet(...args: TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-cart-get">): Promise<TalkdeskFullApiOperationResponseMap["erc-ecommerce-connections-customers-cart-get"]>;
}

export const TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsGeneratedFunctionNames = [
  "ErcEcommerceConnectionsCustomersCustomerIdOrdersOrderIdCancelPost",
  "ErcEcommerceConnectionsCustomersCustomerIdOrdersOrderIdChangeShippingAddressPost",
  "ErcEcommerceConnectionsCustomersCustomerIdShipmentsGet",
  "ErcEcommerceConnectionsCustomersCustomerIdShipmentsSchedulePost",
  "ErcEcommerceConnectionsCustomersCustomerIdGet",
  "ErcEcommerceConnectionsCustomersCustomerIdOrdersGet",
  "ErcEcommerceConnectionsCustomersCustomerIdMostRecentOrderGet",
  "ErcEcommerceConnectionsCustomersShipmentsAvailableSlotsGet",
  "ErcEcommerceConnectionsProductsGet",
  "ErcEcommerceConnectionsGetCustomerOrderItems",
  "ErcEcommerceConnectionsCancelCustomerOrderItems",
  "ErcEcommerceConnectionsCustomersCartGet"
] as const satisfies readonly (keyof TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsGeneratedClient)[];

export function createTalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiRetailExperienceCloudERCEcommerceIntegrationsGeneratedClient {
  return {
    ErcEcommerceConnectionsCustomersCustomerIdOrdersOrderIdCancelPost: (...args) => callOperation("erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-orders-order-id-cancel-post">)),
    ErcEcommerceConnectionsCustomersCustomerIdOrdersOrderIdChangeShippingAddressPost: (...args) => callOperation("erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-orders-order-id-change-shipping-address-post">)),
    ErcEcommerceConnectionsCustomersCustomerIdShipmentsGet: (...args) => callOperation("erc-ecommerce-connections-customers-customer-id-shipments-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-shipments-get">)),
    ErcEcommerceConnectionsCustomersCustomerIdShipmentsSchedulePost: (...args) => callOperation("erc-ecommerce-connections-customers-customer-id-shipments-schedule-post", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-shipments-schedule-post">)),
    ErcEcommerceConnectionsCustomersCustomerIdGet: (...args) => callOperation("erc-ecommerce-connections-customers-customer-id-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-get">)),
    ErcEcommerceConnectionsCustomersCustomerIdOrdersGet: (...args) => callOperation("erc-ecommerce-connections-customers-customer-id-orders-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-orders-get">)),
    ErcEcommerceConnectionsCustomersCustomerIdMostRecentOrderGet: (...args) => callOperation("erc-ecommerce-connections-customers-customer-id-most-recent-order-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-customer-id-most-recent-order-get">)),
    ErcEcommerceConnectionsCustomersShipmentsAvailableSlotsGet: (...args) => callOperation("erc-ecommerce-connections-customers-shipments-available-slots-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-shipments-available-slots-get">)),
    ErcEcommerceConnectionsProductsGet: (...args) => callOperation("erc-ecommerce-connections-products-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-products-get">)),
    ErcEcommerceConnectionsGetCustomerOrderItems: (...args) => callOperation("ercEcommerceConnectionsGetCustomerOrderItems", ...(args as TalkdeskFullApiOperationArgs<"ercEcommerceConnectionsGetCustomerOrderItems">)),
    ErcEcommerceConnectionsCancelCustomerOrderItems: (...args) => callOperation("ercEcommerceConnectionsCancelCustomerOrderItems", ...(args as TalkdeskFullApiOperationArgs<"ercEcommerceConnectionsCancelCustomerOrderItems">)),
    ErcEcommerceConnectionsCustomersCartGet: (...args) => callOperation("erc-ecommerce-connections-customers-cart-get", ...(args as TalkdeskFullApiOperationArgs<"erc-ecommerce-connections-customers-cart-get">)),
  };
}
