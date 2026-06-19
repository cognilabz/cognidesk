// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiCustomersOperationKeys = [
  "delete-customers",
  "list-customers",
  "create-customer",
  "list-customer-custom-fields-values",
  "update-customer-custom-field-values",
  "delete-customer-custom-field-value",
  "update-customer-custom-field-value",
  "update-customer-data",
  "delete-customer",
  "get-customer",
  "update-customer",
  "merge-customers"
] as const;
export type GorgiasFullApiCustomersOperationKey = typeof GorgiasFullApiCustomersOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiCustomersOperationPathParamMap {
  "delete-customers": {};
  "list-customers": {};
  "create-customer": {};
  "list-customer-custom-fields-values": { "customer_id": GorgiasFullApiPathParamValue };
  "update-customer-custom-field-values": { "customer_id": GorgiasFullApiPathParamValue };
  "delete-customer-custom-field-value": { "customer_id": GorgiasFullApiPathParamValue; "id": GorgiasFullApiPathParamValue };
  "update-customer-custom-field-value": { "customer_id": GorgiasFullApiPathParamValue; "id": GorgiasFullApiPathParamValue };
  "update-customer-data": { "customer_id": GorgiasFullApiPathParamValue };
  "delete-customer": { "id": GorgiasFullApiPathParamValue };
  "get-customer": { "id": GorgiasFullApiPathParamValue };
  "update-customer": { "id": GorgiasFullApiPathParamValue };
  "merge-customers": {};
}

export interface GorgiasFullApiCustomersOperationRequestMap {
  "delete-customers": GorgiasFullApiOperationInput<"delete-customers">;
  "list-customers": GorgiasFullApiOperationInput<"list-customers">;
  "create-customer": GorgiasFullApiOperationInput<"create-customer">;
  "list-customer-custom-fields-values": GorgiasFullApiOperationInput<"list-customer-custom-fields-values">;
  "update-customer-custom-field-values": GorgiasFullApiOperationInput<"update-customer-custom-field-values">;
  "delete-customer-custom-field-value": GorgiasFullApiOperationInput<"delete-customer-custom-field-value">;
  "update-customer-custom-field-value": GorgiasFullApiOperationInput<"update-customer-custom-field-value">;
  "update-customer-data": GorgiasFullApiOperationInput<"update-customer-data">;
  "delete-customer": GorgiasFullApiOperationInput<"delete-customer">;
  "get-customer": GorgiasFullApiOperationInput<"get-customer">;
  "update-customer": GorgiasFullApiOperationInput<"update-customer">;
  "merge-customers": GorgiasFullApiOperationInput<"merge-customers">;
}

export interface GorgiasFullApiCustomersGeneratedClient {
  gorgiasDeleteCustomers(...args: GorgiasFullApiOperationArgs<"delete-customers">): Promise<GorgiasFullApiOperationResponseMap["delete-customers"]>;
  gorgiasListCustomers(...args: GorgiasFullApiOperationArgs<"list-customers">): Promise<GorgiasFullApiOperationResponseMap["list-customers"]>;
  gorgiasCreateCustomer(...args: GorgiasFullApiOperationArgs<"create-customer">): Promise<GorgiasFullApiOperationResponseMap["create-customer"]>;
  gorgiasListCustomerCustomFieldsValues(...args: GorgiasFullApiOperationArgs<"list-customer-custom-fields-values">): Promise<GorgiasFullApiOperationResponseMap["list-customer-custom-fields-values"]>;
  gorgiasUpdateCustomerCustomFieldValues(...args: GorgiasFullApiOperationArgs<"update-customer-custom-field-values">): Promise<GorgiasFullApiOperationResponseMap["update-customer-custom-field-values"]>;
  gorgiasDeleteCustomerCustomFieldValue(...args: GorgiasFullApiOperationArgs<"delete-customer-custom-field-value">): Promise<GorgiasFullApiOperationResponseMap["delete-customer-custom-field-value"]>;
  gorgiasUpdateCustomerCustomFieldValue(...args: GorgiasFullApiOperationArgs<"update-customer-custom-field-value">): Promise<GorgiasFullApiOperationResponseMap["update-customer-custom-field-value"]>;
  gorgiasUpdateCustomerData(...args: GorgiasFullApiOperationArgs<"update-customer-data">): Promise<GorgiasFullApiOperationResponseMap["update-customer-data"]>;
  gorgiasDeleteCustomer(...args: GorgiasFullApiOperationArgs<"delete-customer">): Promise<GorgiasFullApiOperationResponseMap["delete-customer"]>;
  gorgiasGetCustomer(...args: GorgiasFullApiOperationArgs<"get-customer">): Promise<GorgiasFullApiOperationResponseMap["get-customer"]>;
  gorgiasUpdateCustomer(...args: GorgiasFullApiOperationArgs<"update-customer">): Promise<GorgiasFullApiOperationResponseMap["update-customer"]>;
  gorgiasMergeCustomers(...args: GorgiasFullApiOperationArgs<"merge-customers">): Promise<GorgiasFullApiOperationResponseMap["merge-customers"]>;
}

export const GorgiasFullApiCustomersGeneratedFunctionNames = [
  "gorgiasDeleteCustomers",
  "gorgiasListCustomers",
  "gorgiasCreateCustomer",
  "gorgiasListCustomerCustomFieldsValues",
  "gorgiasUpdateCustomerCustomFieldValues",
  "gorgiasDeleteCustomerCustomFieldValue",
  "gorgiasUpdateCustomerCustomFieldValue",
  "gorgiasUpdateCustomerData",
  "gorgiasDeleteCustomer",
  "gorgiasGetCustomer",
  "gorgiasUpdateCustomer",
  "gorgiasMergeCustomers"
] as const satisfies readonly (keyof GorgiasFullApiCustomersGeneratedClient)[];

export function createGorgiasFullApiCustomersGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiCustomersGeneratedClient {
  return {
    gorgiasDeleteCustomers: (...args) => callOperation("delete-customers", ...(args as GorgiasFullApiOperationArgs<"delete-customers">)),
    gorgiasListCustomers: (...args) => callOperation("list-customers", ...(args as GorgiasFullApiOperationArgs<"list-customers">)),
    gorgiasCreateCustomer: (...args) => callOperation("create-customer", ...(args as GorgiasFullApiOperationArgs<"create-customer">)),
    gorgiasListCustomerCustomFieldsValues: (...args) => callOperation("list-customer-custom-fields-values", ...(args as GorgiasFullApiOperationArgs<"list-customer-custom-fields-values">)),
    gorgiasUpdateCustomerCustomFieldValues: (...args) => callOperation("update-customer-custom-field-values", ...(args as GorgiasFullApiOperationArgs<"update-customer-custom-field-values">)),
    gorgiasDeleteCustomerCustomFieldValue: (...args) => callOperation("delete-customer-custom-field-value", ...(args as GorgiasFullApiOperationArgs<"delete-customer-custom-field-value">)),
    gorgiasUpdateCustomerCustomFieldValue: (...args) => callOperation("update-customer-custom-field-value", ...(args as GorgiasFullApiOperationArgs<"update-customer-custom-field-value">)),
    gorgiasUpdateCustomerData: (...args) => callOperation("update-customer-data", ...(args as GorgiasFullApiOperationArgs<"update-customer-data">)),
    gorgiasDeleteCustomer: (...args) => callOperation("delete-customer", ...(args as GorgiasFullApiOperationArgs<"delete-customer">)),
    gorgiasGetCustomer: (...args) => callOperation("get-customer", ...(args as GorgiasFullApiOperationArgs<"get-customer">)),
    gorgiasUpdateCustomer: (...args) => callOperation("update-customer", ...(args as GorgiasFullApiOperationArgs<"update-customer">)),
    gorgiasMergeCustomers: (...args) => callOperation("merge-customers", ...(args as GorgiasFullApiOperationArgs<"merge-customers">)),
  };
}
