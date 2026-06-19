// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiCustomerOperationKeys = [
  "digital-customer-api-docs:searchCustomers:GET:/customers",
  "digital-customer-api-docs:getCustomer:GET:/customers/{customerId}",
  "digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes",
  "digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes",
  "digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}",
  "digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}",
  "digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge",
  "digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}",
  "digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields"
] as const;
export type NiceCxoneFullApiCustomerOperationKey = typeof NiceCxoneFullApiCustomerOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiCustomerOperationPathParamMap {
  "digital-customer-api-docs:searchCustomers:GET:/customers": {};
  "digital-customer-api-docs:getCustomer:GET:/customers/{customerId}": { "customerId": NiceCxoneFullApiPathParamValue };
  "digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes": { "customerId": NiceCxoneFullApiPathParamValue };
  "digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes": { "customerId": NiceCxoneFullApiPathParamValue };
  "digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}": { "customerId": NiceCxoneFullApiPathParamValue; "noteId": NiceCxoneFullApiPathParamValue };
  "digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}": { "customerId": NiceCxoneFullApiPathParamValue; "noteId": NiceCxoneFullApiPathParamValue };
  "digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge": { "customerId": NiceCxoneFullApiPathParamValue };
  "digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}": { "customerId": NiceCxoneFullApiPathParamValue; "customFieldIdentifier": NiceCxoneFullApiPathParamValue };
  "digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields": { "customerId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiCustomerOperationRequestMap {
  "digital-customer-api-docs:searchCustomers:GET:/customers": NiceCxoneFullApiOperationInput<"digital-customer-api-docs:searchCustomers:GET:/customers">;
  "digital-customer-api-docs:getCustomer:GET:/customers/{customerId}": NiceCxoneFullApiOperationInput<"digital-customer-api-docs:getCustomer:GET:/customers/{customerId}">;
  "digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes": NiceCxoneFullApiOperationInput<"digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes">;
  "digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes": NiceCxoneFullApiOperationInput<"digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes">;
  "digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}": NiceCxoneFullApiOperationInput<"digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}">;
  "digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}": NiceCxoneFullApiOperationInput<"digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}">;
  "digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge": NiceCxoneFullApiOperationInput<"digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge">;
  "digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}": NiceCxoneFullApiOperationInput<"digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}">;
  "digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields": NiceCxoneFullApiOperationInput<"digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields">;
}

export interface NiceCxoneFullApiCustomerGeneratedClient {
  DigitalCustomerApiDocsSearchCustomers(...args: NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:searchCustomers:GET:/customers">): Promise<NiceCxoneFullApiOperationResponseMap["digital-customer-api-docs:searchCustomers:GET:/customers"]>;
  DigitalCustomerApiDocsGetCustomer(...args: NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:getCustomer:GET:/customers/{customerId}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-customer-api-docs:getCustomer:GET:/customers/{customerId}"]>;
  DigitalCustomerApiDocsGetCustomerNotes(...args: NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes">): Promise<NiceCxoneFullApiOperationResponseMap["digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes"]>;
  DigitalCustomerApiDocsCreateCustomerNote(...args: NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes">): Promise<NiceCxoneFullApiOperationResponseMap["digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes"]>;
  DigitalCustomerApiDocsUpdateCustomerNote(...args: NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}"]>;
  DigitalCustomerApiDocsDeleteCustomerNote(...args: NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}"]>;
  DigitalCustomerApiDocsMergeCustomer(...args: NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge">): Promise<NiceCxoneFullApiOperationResponseMap["digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge"]>;
  DigitalCustomerApiDocsRemoveCustomerCustomFieldValue(...args: NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}">): Promise<NiceCxoneFullApiOperationResponseMap["digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}"]>;
  DigitalCustomerApiDocsUpdateCustomerCustomFields(...args: NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields">): Promise<NiceCxoneFullApiOperationResponseMap["digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields"]>;
}

export const NiceCxoneFullApiCustomerGeneratedFunctionNames = [
  "DigitalCustomerApiDocsSearchCustomers",
  "DigitalCustomerApiDocsGetCustomer",
  "DigitalCustomerApiDocsGetCustomerNotes",
  "DigitalCustomerApiDocsCreateCustomerNote",
  "DigitalCustomerApiDocsUpdateCustomerNote",
  "DigitalCustomerApiDocsDeleteCustomerNote",
  "DigitalCustomerApiDocsMergeCustomer",
  "DigitalCustomerApiDocsRemoveCustomerCustomFieldValue",
  "DigitalCustomerApiDocsUpdateCustomerCustomFields"
] as const satisfies readonly (keyof NiceCxoneFullApiCustomerGeneratedClient)[];

export function createNiceCxoneFullApiCustomerGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiCustomerGeneratedClient {
  return {
    DigitalCustomerApiDocsSearchCustomers: (...args) => callOperation("digital-customer-api-docs:searchCustomers:GET:/customers", ...(args as NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:searchCustomers:GET:/customers">)),
    DigitalCustomerApiDocsGetCustomer: (...args) => callOperation("digital-customer-api-docs:getCustomer:GET:/customers/{customerId}", ...(args as NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:getCustomer:GET:/customers/{customerId}">)),
    DigitalCustomerApiDocsGetCustomerNotes: (...args) => callOperation("digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes", ...(args as NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:getCustomerNotes:GET:/customers/{customerId}/notes">)),
    DigitalCustomerApiDocsCreateCustomerNote: (...args) => callOperation("digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes", ...(args as NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:createCustomerNote:POST:/customers/{customerId}/notes">)),
    DigitalCustomerApiDocsUpdateCustomerNote: (...args) => callOperation("digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}", ...(args as NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:updateCustomerNote:PUT:/customers/{customerId}/notes/{noteId}">)),
    DigitalCustomerApiDocsDeleteCustomerNote: (...args) => callOperation("digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}", ...(args as NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:deleteCustomerNote:DELETE:/customers/{customerId}/notes/{noteId}">)),
    DigitalCustomerApiDocsMergeCustomer: (...args) => callOperation("digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge", ...(args as NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:mergeCustomer:PUT:/customers/{customerId}/merge">)),
    DigitalCustomerApiDocsRemoveCustomerCustomFieldValue: (...args) => callOperation("digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}", ...(args as NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:removeCustomerCustomFieldValue:DELETE:/customers/{customerId}/custom-fields/{customFieldIdentifier}">)),
    DigitalCustomerApiDocsUpdateCustomerCustomFields: (...args) => callOperation("digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields", ...(args as NiceCxoneFullApiOperationArgs<"digital-customer-api-docs:updateCustomerCustomFields:PUT:/customers/{customerId}/custom-fields">)),
  };
}
