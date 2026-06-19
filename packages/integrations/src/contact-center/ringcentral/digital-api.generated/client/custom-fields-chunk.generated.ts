// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiCustomFieldsOperationKeys = [
  "GET /custom_fields",
  "POST /custom_fields",
  "DELETE /custom_fields/{customFieldId}",
  "GET /custom_fields/{customFieldId}",
  "PUT /custom_fields/{customFieldId}"
] as const;
export type RingCentralDigitalApiCustomFieldsOperationKey = typeof RingCentralDigitalApiCustomFieldsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiCustomFieldsOperationPathParamMap {
  "GET /custom_fields": {};
  "POST /custom_fields": {};
  "DELETE /custom_fields/{customFieldId}": { "customFieldId": RingCentralDigitalApiPathParamValue };
  "GET /custom_fields/{customFieldId}": { "customFieldId": RingCentralDigitalApiPathParamValue };
  "PUT /custom_fields/{customFieldId}": { "customFieldId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiCustomFieldsOperationRequestMap {
  "GET /custom_fields": RingCentralDigitalApiOperationInput<"GET /custom_fields">;
  "POST /custom_fields": RingCentralDigitalApiOperationInput<"POST /custom_fields">;
  "DELETE /custom_fields/{customFieldId}": RingCentralDigitalApiOperationInput<"DELETE /custom_fields/{customFieldId}">;
  "GET /custom_fields/{customFieldId}": RingCentralDigitalApiOperationInput<"GET /custom_fields/{customFieldId}">;
  "PUT /custom_fields/{customFieldId}": RingCentralDigitalApiOperationInput<"PUT /custom_fields/{customFieldId}">;
}

export interface RingCentralDigitalApiCustomFieldsGeneratedClient {
  GetAllCustomFields(...args: RingCentralDigitalApiOperationArgs<"GET /custom_fields">): Promise<RingCentralDigitalApiOperationResponseMap["GET /custom_fields"]>;
  CreateCustomField(...args: RingCentralDigitalApiOperationArgs<"POST /custom_fields">): Promise<RingCentralDigitalApiOperationResponseMap["POST /custom_fields"]>;
  DeleteCustomField(...args: RingCentralDigitalApiOperationArgs<"DELETE /custom_fields/{customFieldId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /custom_fields/{customFieldId}"]>;
  GetCustomField(...args: RingCentralDigitalApiOperationArgs<"GET /custom_fields/{customFieldId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /custom_fields/{customFieldId}"]>;
  UpdateCustomField(...args: RingCentralDigitalApiOperationArgs<"PUT /custom_fields/{customFieldId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /custom_fields/{customFieldId}"]>;
}

export const RingCentralDigitalApiCustomFieldsGeneratedFunctionNames = [
  "GetAllCustomFields",
  "CreateCustomField",
  "DeleteCustomField",
  "GetCustomField",
  "UpdateCustomField"
] as const satisfies readonly (keyof RingCentralDigitalApiCustomFieldsGeneratedClient)[];

export function createRingCentralDigitalApiCustomFieldsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiCustomFieldsGeneratedClient {
  return {
    GetAllCustomFields: (...args) => callOperation("GET /custom_fields", ...(args as RingCentralDigitalApiOperationArgs<"GET /custom_fields">)),
    CreateCustomField: (...args) => callOperation("POST /custom_fields", ...(args as RingCentralDigitalApiOperationArgs<"POST /custom_fields">)),
    DeleteCustomField: (...args) => callOperation("DELETE /custom_fields/{customFieldId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /custom_fields/{customFieldId}">)),
    GetCustomField: (...args) => callOperation("GET /custom_fields/{customFieldId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /custom_fields/{customFieldId}">)),
    UpdateCustomField: (...args) => callOperation("PUT /custom_fields/{customFieldId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /custom_fields/{customFieldId}">)),
  };
}
