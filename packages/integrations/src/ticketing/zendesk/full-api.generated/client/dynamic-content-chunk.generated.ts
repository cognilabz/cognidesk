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
export const ZendeskFullApiDynamicContentOperationKeys = [
  "CreateDynamicContent",
  "DeleteDynamicContentItem",
  "ListDynamicContents",
  "ShowDynamicContentItem",
  "ShowManyDynamicContents",
  "UpdateDynamicContentItem"
] as const;
export type ZendeskFullApiDynamicContentOperationKey = typeof ZendeskFullApiDynamicContentOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiDynamicContentOperationPathParamMap {
  "CreateDynamicContent": {};
  "DeleteDynamicContentItem": { "dynamic_content_item_id": ZendeskFullApiPathParamValue };
  "ListDynamicContents": {};
  "ShowDynamicContentItem": { "dynamic_content_item_id": ZendeskFullApiPathParamValue };
  "ShowManyDynamicContents": {};
  "UpdateDynamicContentItem": { "dynamic_content_item_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiDynamicContentOperationRequestMap {
  "CreateDynamicContent": ZendeskFullApiOperationInput<"CreateDynamicContent">;
  "DeleteDynamicContentItem": ZendeskFullApiOperationInput<"DeleteDynamicContentItem">;
  "ListDynamicContents": ZendeskFullApiOperationInput<"ListDynamicContents">;
  "ShowDynamicContentItem": ZendeskFullApiOperationInput<"ShowDynamicContentItem">;
  "ShowManyDynamicContents": ZendeskFullApiOperationInput<"ShowManyDynamicContents">;
  "UpdateDynamicContentItem": ZendeskFullApiOperationInput<"UpdateDynamicContentItem">;
}

export interface ZendeskFullApiDynamicContentGeneratedClient {
  CreateDynamicContent(...args: ZendeskFullApiOperationArgs<"CreateDynamicContent">): Promise<ZendeskFullApiOperationResponseMap["CreateDynamicContent"]>;
  DeleteDynamicContentItem(...args: ZendeskFullApiOperationArgs<"DeleteDynamicContentItem">): Promise<ZendeskFullApiOperationResponseMap["DeleteDynamicContentItem"]>;
  ListDynamicContents(...args: ZendeskFullApiOperationArgs<"ListDynamicContents">): Promise<ZendeskFullApiOperationResponseMap["ListDynamicContents"]>;
  ShowDynamicContentItem(...args: ZendeskFullApiOperationArgs<"ShowDynamicContentItem">): Promise<ZendeskFullApiOperationResponseMap["ShowDynamicContentItem"]>;
  ShowManyDynamicContents(...args: ZendeskFullApiOperationArgs<"ShowManyDynamicContents">): Promise<ZendeskFullApiOperationResponseMap["ShowManyDynamicContents"]>;
  UpdateDynamicContentItem(...args: ZendeskFullApiOperationArgs<"UpdateDynamicContentItem">): Promise<ZendeskFullApiOperationResponseMap["UpdateDynamicContentItem"]>;
}

export const ZendeskFullApiDynamicContentGeneratedFunctionNames = [
  "CreateDynamicContent",
  "DeleteDynamicContentItem",
  "ListDynamicContents",
  "ShowDynamicContentItem",
  "ShowManyDynamicContents",
  "UpdateDynamicContentItem"
] as const satisfies readonly (keyof ZendeskFullApiDynamicContentGeneratedClient)[];

export function createZendeskFullApiDynamicContentGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiDynamicContentGeneratedClient {
  return {
    CreateDynamicContent: (...args) => callOperation("CreateDynamicContent", ...(args as ZendeskFullApiOperationArgs<"CreateDynamicContent">)),
    DeleteDynamicContentItem: (...args) => callOperation("DeleteDynamicContentItem", ...(args as ZendeskFullApiOperationArgs<"DeleteDynamicContentItem">)),
    ListDynamicContents: (...args) => callOperation("ListDynamicContents", ...(args as ZendeskFullApiOperationArgs<"ListDynamicContents">)),
    ShowDynamicContentItem: (...args) => callOperation("ShowDynamicContentItem", ...(args as ZendeskFullApiOperationArgs<"ShowDynamicContentItem">)),
    ShowManyDynamicContents: (...args) => callOperation("ShowManyDynamicContents", ...(args as ZendeskFullApiOperationArgs<"ShowManyDynamicContents">)),
    UpdateDynamicContentItem: (...args) => callOperation("UpdateDynamicContentItem", ...(args as ZendeskFullApiOperationArgs<"UpdateDynamicContentItem">)),
  };
}
