// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiCustomersOperationKeys = [
  "GetCustomers",
  "CreateaCustomer",
  "DeleteCustomer",
  "GetCustomerbyID",
  "UpdateCustomerAttributes",
  "UpdateCustomer",
  "GetCustomerbyEmail",
  "GetCustomerbyExternalID",
  "GetCustomerbyPhone"
] as const;
export type KustomerFullApiCustomersOperationKey = typeof KustomerFullApiCustomersOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiCustomersOperationPathParamMap {
  "GetCustomers": {};
  "CreateaCustomer": {};
  "DeleteCustomer": { "id": KustomerFullApiPathParamValue };
  "GetCustomerbyID": { "id": KustomerFullApiPathParamValue };
  "UpdateCustomerAttributes": { "id": KustomerFullApiPathParamValue };
  "UpdateCustomer": { "id": KustomerFullApiPathParamValue };
  "GetCustomerbyEmail": { "email": KustomerFullApiPathParamValue };
  "GetCustomerbyExternalID": { "externalId": KustomerFullApiPathParamValue };
  "GetCustomerbyPhone": { "phone": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiCustomersOperationRequestMap {
  "GetCustomers": KustomerFullApiOperationInput<"GetCustomers">;
  "CreateaCustomer": KustomerFullApiOperationInput<"CreateaCustomer">;
  "DeleteCustomer": KustomerFullApiOperationInput<"DeleteCustomer">;
  "GetCustomerbyID": KustomerFullApiOperationInput<"GetCustomerbyID">;
  "UpdateCustomerAttributes": KustomerFullApiOperationInput<"UpdateCustomerAttributes">;
  "UpdateCustomer": KustomerFullApiOperationInput<"UpdateCustomer">;
  "GetCustomerbyEmail": KustomerFullApiOperationInput<"GetCustomerbyEmail">;
  "GetCustomerbyExternalID": KustomerFullApiOperationInput<"GetCustomerbyExternalID">;
  "GetCustomerbyPhone": KustomerFullApiOperationInput<"GetCustomerbyPhone">;
}

export interface KustomerFullApiCustomersGeneratedClient {
  kustomerGetCustomers(...args: KustomerFullApiOperationArgs<"GetCustomers">): Promise<KustomerFullApiOperationResponseMap["GetCustomers"]>;
  kustomerCreateaCustomer(...args: KustomerFullApiOperationArgs<"CreateaCustomer">): Promise<KustomerFullApiOperationResponseMap["CreateaCustomer"]>;
  kustomerDeleteCustomer(...args: KustomerFullApiOperationArgs<"DeleteCustomer">): Promise<KustomerFullApiOperationResponseMap["DeleteCustomer"]>;
  kustomerGetCustomerbyID(...args: KustomerFullApiOperationArgs<"GetCustomerbyID">): Promise<KustomerFullApiOperationResponseMap["GetCustomerbyID"]>;
  kustomerUpdateCustomerAttributes(...args: KustomerFullApiOperationArgs<"UpdateCustomerAttributes">): Promise<KustomerFullApiOperationResponseMap["UpdateCustomerAttributes"]>;
  kustomerUpdateCustomer(...args: KustomerFullApiOperationArgs<"UpdateCustomer">): Promise<KustomerFullApiOperationResponseMap["UpdateCustomer"]>;
  kustomerGetCustomerbyEmail(...args: KustomerFullApiOperationArgs<"GetCustomerbyEmail">): Promise<KustomerFullApiOperationResponseMap["GetCustomerbyEmail"]>;
  kustomerGetCustomerbyExternalID(...args: KustomerFullApiOperationArgs<"GetCustomerbyExternalID">): Promise<KustomerFullApiOperationResponseMap["GetCustomerbyExternalID"]>;
  kustomerGetCustomerbyPhone(...args: KustomerFullApiOperationArgs<"GetCustomerbyPhone">): Promise<KustomerFullApiOperationResponseMap["GetCustomerbyPhone"]>;
}

export const KustomerFullApiCustomersGeneratedFunctionNames = [
  "kustomerGetCustomers",
  "kustomerCreateaCustomer",
  "kustomerDeleteCustomer",
  "kustomerGetCustomerbyID",
  "kustomerUpdateCustomerAttributes",
  "kustomerUpdateCustomer",
  "kustomerGetCustomerbyEmail",
  "kustomerGetCustomerbyExternalID",
  "kustomerGetCustomerbyPhone"
] as const satisfies readonly (keyof KustomerFullApiCustomersGeneratedClient)[];

export function createKustomerFullApiCustomersGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiCustomersGeneratedClient {
  return {
    kustomerGetCustomers: (...args) => callOperation("GetCustomers", ...(args as KustomerFullApiOperationArgs<"GetCustomers">)),
    kustomerCreateaCustomer: (...args) => callOperation("CreateaCustomer", ...(args as KustomerFullApiOperationArgs<"CreateaCustomer">)),
    kustomerDeleteCustomer: (...args) => callOperation("DeleteCustomer", ...(args as KustomerFullApiOperationArgs<"DeleteCustomer">)),
    kustomerGetCustomerbyID: (...args) => callOperation("GetCustomerbyID", ...(args as KustomerFullApiOperationArgs<"GetCustomerbyID">)),
    kustomerUpdateCustomerAttributes: (...args) => callOperation("UpdateCustomerAttributes", ...(args as KustomerFullApiOperationArgs<"UpdateCustomerAttributes">)),
    kustomerUpdateCustomer: (...args) => callOperation("UpdateCustomer", ...(args as KustomerFullApiOperationArgs<"UpdateCustomer">)),
    kustomerGetCustomerbyEmail: (...args) => callOperation("GetCustomerbyEmail", ...(args as KustomerFullApiOperationArgs<"GetCustomerbyEmail">)),
    kustomerGetCustomerbyExternalID: (...args) => callOperation("GetCustomerbyExternalID", ...(args as KustomerFullApiOperationArgs<"GetCustomerbyExternalID">)),
    kustomerGetCustomerbyPhone: (...args) => callOperation("GetCustomerbyPhone", ...(args as KustomerFullApiOperationArgs<"GetCustomerbyPhone">)),
  };
}
