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
export const GorgiasFullApiCustomFieldsOperationKeys = [
  "list-custom-fields",
  "create-custom-field",
  "update-custom-fields",
  "get-custom-field",
  "update-custom-field"
] as const;
export type GorgiasFullApiCustomFieldsOperationKey = typeof GorgiasFullApiCustomFieldsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiCustomFieldsOperationPathParamMap {
  "list-custom-fields": {};
  "create-custom-field": {};
  "update-custom-fields": {};
  "get-custom-field": { "id": GorgiasFullApiPathParamValue };
  "update-custom-field": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiCustomFieldsOperationRequestMap {
  "list-custom-fields": GorgiasFullApiOperationInput<"list-custom-fields">;
  "create-custom-field": GorgiasFullApiOperationInput<"create-custom-field">;
  "update-custom-fields": GorgiasFullApiOperationInput<"update-custom-fields">;
  "get-custom-field": GorgiasFullApiOperationInput<"get-custom-field">;
  "update-custom-field": GorgiasFullApiOperationInput<"update-custom-field">;
}

export interface GorgiasFullApiCustomFieldsGeneratedClient {
  gorgiasListCustomFields(...args: GorgiasFullApiOperationArgs<"list-custom-fields">): Promise<GorgiasFullApiOperationResponseMap["list-custom-fields"]>;
  gorgiasCreateCustomField(...args: GorgiasFullApiOperationArgs<"create-custom-field">): Promise<GorgiasFullApiOperationResponseMap["create-custom-field"]>;
  gorgiasUpdateCustomFields(...args: GorgiasFullApiOperationArgs<"update-custom-fields">): Promise<GorgiasFullApiOperationResponseMap["update-custom-fields"]>;
  gorgiasGetCustomField(...args: GorgiasFullApiOperationArgs<"get-custom-field">): Promise<GorgiasFullApiOperationResponseMap["get-custom-field"]>;
  gorgiasUpdateCustomField(...args: GorgiasFullApiOperationArgs<"update-custom-field">): Promise<GorgiasFullApiOperationResponseMap["update-custom-field"]>;
}

export const GorgiasFullApiCustomFieldsGeneratedFunctionNames = [
  "gorgiasListCustomFields",
  "gorgiasCreateCustomField",
  "gorgiasUpdateCustomFields",
  "gorgiasGetCustomField",
  "gorgiasUpdateCustomField"
] as const satisfies readonly (keyof GorgiasFullApiCustomFieldsGeneratedClient)[];

export function createGorgiasFullApiCustomFieldsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiCustomFieldsGeneratedClient {
  return {
    gorgiasListCustomFields: (...args) => callOperation("list-custom-fields", ...(args as GorgiasFullApiOperationArgs<"list-custom-fields">)),
    gorgiasCreateCustomField: (...args) => callOperation("create-custom-field", ...(args as GorgiasFullApiOperationArgs<"create-custom-field">)),
    gorgiasUpdateCustomFields: (...args) => callOperation("update-custom-fields", ...(args as GorgiasFullApiOperationArgs<"update-custom-fields">)),
    gorgiasGetCustomField: (...args) => callOperation("get-custom-field", ...(args as GorgiasFullApiOperationArgs<"get-custom-field">)),
    gorgiasUpdateCustomField: (...args) => callOperation("update-custom-field", ...(args as GorgiasFullApiOperationArgs<"update-custom-field">)),
  };
}
