// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiTriggerCategoriesOperationKeys = [
  "BatchOperateTriggerCategories",
  "CreateTriggerCategory",
  "DeleteTriggerCategory",
  "ListTriggerCategories",
  "ShowTriggerCategoryById",
  "UpdateTriggerCategory"
] as const;
export type ZendeskFullApiTriggerCategoriesOperationKey = typeof ZendeskFullApiTriggerCategoriesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiTriggerCategoriesOperationPathParamMap {
  "BatchOperateTriggerCategories": {};
  "CreateTriggerCategory": {};
  "DeleteTriggerCategory": { "trigger_category_id": ZendeskFullApiPathParamValue };
  "ListTriggerCategories": {};
  "ShowTriggerCategoryById": { "trigger_category_id": ZendeskFullApiPathParamValue };
  "UpdateTriggerCategory": { "trigger_category_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiTriggerCategoriesOperationRequestMap {
  "BatchOperateTriggerCategories": ZendeskFullApiOperationInput<"BatchOperateTriggerCategories">;
  "CreateTriggerCategory": ZendeskFullApiOperationInput<"CreateTriggerCategory">;
  "DeleteTriggerCategory": ZendeskFullApiOperationInput<"DeleteTriggerCategory">;
  "ListTriggerCategories": ZendeskFullApiOperationInput<"ListTriggerCategories">;
  "ShowTriggerCategoryById": ZendeskFullApiOperationInput<"ShowTriggerCategoryById">;
  "UpdateTriggerCategory": ZendeskFullApiOperationInput<"UpdateTriggerCategory">;
}

export interface ZendeskFullApiTriggerCategoriesGeneratedClient {
  BatchOperateTriggerCategories(...args: ZendeskFullApiOperationArgs<"BatchOperateTriggerCategories">): Promise<ZendeskFullApiOperationResponseMap["BatchOperateTriggerCategories"]>;
  CreateTriggerCategory(...args: ZendeskFullApiOperationArgs<"CreateTriggerCategory">): Promise<ZendeskFullApiOperationResponseMap["CreateTriggerCategory"]>;
  DeleteTriggerCategory(...args: ZendeskFullApiOperationArgs<"DeleteTriggerCategory">): Promise<ZendeskFullApiOperationResponseMap["DeleteTriggerCategory"]>;
  ListTriggerCategories(...args: ZendeskFullApiOperationArgs<"ListTriggerCategories">): Promise<ZendeskFullApiOperationResponseMap["ListTriggerCategories"]>;
  ShowTriggerCategoryById(...args: ZendeskFullApiOperationArgs<"ShowTriggerCategoryById">): Promise<ZendeskFullApiOperationResponseMap["ShowTriggerCategoryById"]>;
  UpdateTriggerCategory(...args: ZendeskFullApiOperationArgs<"UpdateTriggerCategory">): Promise<ZendeskFullApiOperationResponseMap["UpdateTriggerCategory"]>;
}

export const ZendeskFullApiTriggerCategoriesGeneratedFunctionNames = [
  "BatchOperateTriggerCategories",
  "CreateTriggerCategory",
  "DeleteTriggerCategory",
  "ListTriggerCategories",
  "ShowTriggerCategoryById",
  "UpdateTriggerCategory"
] as const satisfies readonly (keyof ZendeskFullApiTriggerCategoriesGeneratedClient)[];

export function createZendeskFullApiTriggerCategoriesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiTriggerCategoriesGeneratedClient {
  return {
    BatchOperateTriggerCategories: (...args) => callOperation("BatchOperateTriggerCategories", ...(args as ZendeskFullApiOperationArgs<"BatchOperateTriggerCategories">)),
    CreateTriggerCategory: (...args) => callOperation("CreateTriggerCategory", ...(args as ZendeskFullApiOperationArgs<"CreateTriggerCategory">)),
    DeleteTriggerCategory: (...args) => callOperation("DeleteTriggerCategory", ...(args as ZendeskFullApiOperationArgs<"DeleteTriggerCategory">)),
    ListTriggerCategories: (...args) => callOperation("ListTriggerCategories", ...(args as ZendeskFullApiOperationArgs<"ListTriggerCategories">)),
    ShowTriggerCategoryById: (...args) => callOperation("ShowTriggerCategoryById", ...(args as ZendeskFullApiOperationArgs<"ShowTriggerCategoryById">)),
    UpdateTriggerCategory: (...args) => callOperation("UpdateTriggerCategory", ...(args as ZendeskFullApiOperationArgs<"UpdateTriggerCategory">)),
  };
}
