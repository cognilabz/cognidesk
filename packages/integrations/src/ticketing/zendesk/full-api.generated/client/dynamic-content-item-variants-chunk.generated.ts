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
export const ZendeskFullApiDynamicContentItemVariantsOperationKeys = [
  "CreateDynamicContentVariant",
  "CreateManyDynamicContentVariants",
  "DeleteDynamicContentVariant",
  "DynamicContentListVariants",
  "ShowDynamicContentVariant",
  "UpdateDynamicContentVariant",
  "UpdateManyDynamicContentVariants"
] as const;
export type ZendeskFullApiDynamicContentItemVariantsOperationKey = typeof ZendeskFullApiDynamicContentItemVariantsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiDynamicContentItemVariantsOperationPathParamMap {
  "CreateDynamicContentVariant": { "dynamic_content_item_id": ZendeskFullApiPathParamValue };
  "CreateManyDynamicContentVariants": { "dynamic_content_item_id": ZendeskFullApiPathParamValue };
  "DeleteDynamicContentVariant": { "dynamic_content_item_id": ZendeskFullApiPathParamValue; "dynamic_content_variant_id": ZendeskFullApiPathParamValue };
  "DynamicContentListVariants": { "dynamic_content_item_id": ZendeskFullApiPathParamValue };
  "ShowDynamicContentVariant": { "dynamic_content_item_id": ZendeskFullApiPathParamValue; "dynamic_content_variant_id": ZendeskFullApiPathParamValue };
  "UpdateDynamicContentVariant": { "dynamic_content_item_id": ZendeskFullApiPathParamValue; "dynamic_content_variant_id": ZendeskFullApiPathParamValue };
  "UpdateManyDynamicContentVariants": { "dynamic_content_item_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiDynamicContentItemVariantsOperationRequestMap {
  "CreateDynamicContentVariant": ZendeskFullApiOperationInput<"CreateDynamicContentVariant">;
  "CreateManyDynamicContentVariants": ZendeskFullApiOperationInput<"CreateManyDynamicContentVariants">;
  "DeleteDynamicContentVariant": ZendeskFullApiOperationInput<"DeleteDynamicContentVariant">;
  "DynamicContentListVariants": ZendeskFullApiOperationInput<"DynamicContentListVariants">;
  "ShowDynamicContentVariant": ZendeskFullApiOperationInput<"ShowDynamicContentVariant">;
  "UpdateDynamicContentVariant": ZendeskFullApiOperationInput<"UpdateDynamicContentVariant">;
  "UpdateManyDynamicContentVariants": ZendeskFullApiOperationInput<"UpdateManyDynamicContentVariants">;
}

export interface ZendeskFullApiDynamicContentItemVariantsGeneratedClient {
  CreateDynamicContentVariant(...args: ZendeskFullApiOperationArgs<"CreateDynamicContentVariant">): Promise<ZendeskFullApiOperationResponseMap["CreateDynamicContentVariant"]>;
  CreateManyDynamicContentVariants(...args: ZendeskFullApiOperationArgs<"CreateManyDynamicContentVariants">): Promise<ZendeskFullApiOperationResponseMap["CreateManyDynamicContentVariants"]>;
  DeleteDynamicContentVariant(...args: ZendeskFullApiOperationArgs<"DeleteDynamicContentVariant">): Promise<ZendeskFullApiOperationResponseMap["DeleteDynamicContentVariant"]>;
  DynamicContentListVariants(...args: ZendeskFullApiOperationArgs<"DynamicContentListVariants">): Promise<ZendeskFullApiOperationResponseMap["DynamicContentListVariants"]>;
  ShowDynamicContentVariant(...args: ZendeskFullApiOperationArgs<"ShowDynamicContentVariant">): Promise<ZendeskFullApiOperationResponseMap["ShowDynamicContentVariant"]>;
  UpdateDynamicContentVariant(...args: ZendeskFullApiOperationArgs<"UpdateDynamicContentVariant">): Promise<ZendeskFullApiOperationResponseMap["UpdateDynamicContentVariant"]>;
  UpdateManyDynamicContentVariants(...args: ZendeskFullApiOperationArgs<"UpdateManyDynamicContentVariants">): Promise<ZendeskFullApiOperationResponseMap["UpdateManyDynamicContentVariants"]>;
}

export const ZendeskFullApiDynamicContentItemVariantsGeneratedFunctionNames = [
  "CreateDynamicContentVariant",
  "CreateManyDynamicContentVariants",
  "DeleteDynamicContentVariant",
  "DynamicContentListVariants",
  "ShowDynamicContentVariant",
  "UpdateDynamicContentVariant",
  "UpdateManyDynamicContentVariants"
] as const satisfies readonly (keyof ZendeskFullApiDynamicContentItemVariantsGeneratedClient)[];

export function createZendeskFullApiDynamicContentItemVariantsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiDynamicContentItemVariantsGeneratedClient {
  return {
    CreateDynamicContentVariant: (...args) => callOperation("CreateDynamicContentVariant", ...(args as ZendeskFullApiOperationArgs<"CreateDynamicContentVariant">)),
    CreateManyDynamicContentVariants: (...args) => callOperation("CreateManyDynamicContentVariants", ...(args as ZendeskFullApiOperationArgs<"CreateManyDynamicContentVariants">)),
    DeleteDynamicContentVariant: (...args) => callOperation("DeleteDynamicContentVariant", ...(args as ZendeskFullApiOperationArgs<"DeleteDynamicContentVariant">)),
    DynamicContentListVariants: (...args) => callOperation("DynamicContentListVariants", ...(args as ZendeskFullApiOperationArgs<"DynamicContentListVariants">)),
    ShowDynamicContentVariant: (...args) => callOperation("ShowDynamicContentVariant", ...(args as ZendeskFullApiOperationArgs<"ShowDynamicContentVariant">)),
    UpdateDynamicContentVariant: (...args) => callOperation("UpdateDynamicContentVariant", ...(args as ZendeskFullApiOperationArgs<"UpdateDynamicContentVariant">)),
    UpdateManyDynamicContentVariants: (...args) => callOperation("UpdateManyDynamicContentVariants", ...(args as ZendeskFullApiOperationArgs<"UpdateManyDynamicContentVariants">)),
  };
}
