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
export const NiceCxoneFullApiCustomFieldDefinitionsOperationKeys = [
  "digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields",
  "digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions",
  "digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions"
] as const;
export type NiceCxoneFullApiCustomFieldDefinitionsOperationKey = typeof NiceCxoneFullApiCustomFieldDefinitionsOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiCustomFieldDefinitionsOperationPathParamMap {
  "digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields": {};
  "digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions": {};
  "digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions": {};
}

export interface NiceCxoneFullApiCustomFieldDefinitionsOperationRequestMap {
  "digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields": NiceCxoneFullApiOperationInput<"digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields">;
  "digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions": NiceCxoneFullApiOperationInput<"digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions">;
  "digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions": NiceCxoneFullApiOperationInput<"digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions">;
}

export interface NiceCxoneFullApiCustomFieldDefinitionsGeneratedClient {
  DigitalCustomfieldsApiDocsGetContactCustomFieldDefinitions(...args: NiceCxoneFullApiOperationArgs<"digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields">): Promise<NiceCxoneFullApiOperationResponseMap["digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields"]>;
  DigitalCustomfieldsApiDocsGetCustomerCustomFieldDefinitions(...args: NiceCxoneFullApiOperationArgs<"digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions">): Promise<NiceCxoneFullApiOperationResponseMap["digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions"]>;
  DigitalCustomfieldsApiDocsCreateOrUpdateCustomerCustomFieldDefinition(...args: NiceCxoneFullApiOperationArgs<"digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions">): Promise<NiceCxoneFullApiOperationResponseMap["digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions"]>;
}

export const NiceCxoneFullApiCustomFieldDefinitionsGeneratedFunctionNames = [
  "DigitalCustomfieldsApiDocsGetContactCustomFieldDefinitions",
  "DigitalCustomfieldsApiDocsGetCustomerCustomFieldDefinitions",
  "DigitalCustomfieldsApiDocsCreateOrUpdateCustomerCustomFieldDefinition"
] as const satisfies readonly (keyof NiceCxoneFullApiCustomFieldDefinitionsGeneratedClient)[];

export function createNiceCxoneFullApiCustomFieldDefinitionsGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiCustomFieldDefinitionsGeneratedClient {
  return {
    DigitalCustomfieldsApiDocsGetContactCustomFieldDefinitions: (...args) => callOperation("digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields", ...(args as NiceCxoneFullApiOperationArgs<"digital-customfields-api-docs:getContactCustomFieldDefinitions:GET:/consumer-contact-custom-fields">)),
    DigitalCustomfieldsApiDocsGetCustomerCustomFieldDefinitions: (...args) => callOperation("digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions", ...(args as NiceCxoneFullApiOperationArgs<"digital-customfields-api-docs:getCustomerCustomFieldDefinitions:GET:/customers/custom-field-definitions">)),
    DigitalCustomfieldsApiDocsCreateOrUpdateCustomerCustomFieldDefinition: (...args) => callOperation("digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions", ...(args as NiceCxoneFullApiOperationArgs<"digital-customfields-api-docs:createOrUpdateCustomerCustomFieldDefinition:PUT:/customers/custom-field-definitions">)),
  };
}
