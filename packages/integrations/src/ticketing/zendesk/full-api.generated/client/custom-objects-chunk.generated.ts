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
export const ZendeskFullApiCustomObjectsOperationKeys = [
  "CreateCustomObject",
  "CustomObjectsLimit",
  "DeleteCustomObject",
  "ListCustomObjects",
  "ShowCustomObject",
  "UpdateCustomObject"
] as const;
export type ZendeskFullApiCustomObjectsOperationKey = typeof ZendeskFullApiCustomObjectsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiCustomObjectsOperationPathParamMap {
  "CreateCustomObject": {};
  "CustomObjectsLimit": {};
  "DeleteCustomObject": { "custom_object_key": ZendeskFullApiPathParamValue };
  "ListCustomObjects": {};
  "ShowCustomObject": { "custom_object_key": ZendeskFullApiPathParamValue };
  "UpdateCustomObject": { "custom_object_key": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiCustomObjectsOperationRequestMap {
  "CreateCustomObject": ZendeskFullApiOperationInput<"CreateCustomObject">;
  "CustomObjectsLimit": ZendeskFullApiOperationInput<"CustomObjectsLimit">;
  "DeleteCustomObject": ZendeskFullApiOperationInput<"DeleteCustomObject">;
  "ListCustomObjects": ZendeskFullApiOperationInput<"ListCustomObjects">;
  "ShowCustomObject": ZendeskFullApiOperationInput<"ShowCustomObject">;
  "UpdateCustomObject": ZendeskFullApiOperationInput<"UpdateCustomObject">;
}

export interface ZendeskFullApiCustomObjectsGeneratedClient {
  CreateCustomObject(...args: ZendeskFullApiOperationArgs<"CreateCustomObject">): Promise<ZendeskFullApiOperationResponseMap["CreateCustomObject"]>;
  CustomObjectsLimit(...args: ZendeskFullApiOperationArgs<"CustomObjectsLimit">): Promise<ZendeskFullApiOperationResponseMap["CustomObjectsLimit"]>;
  DeleteCustomObject(...args: ZendeskFullApiOperationArgs<"DeleteCustomObject">): Promise<ZendeskFullApiOperationResponseMap["DeleteCustomObject"]>;
  ListCustomObjects(...args: ZendeskFullApiOperationArgs<"ListCustomObjects">): Promise<ZendeskFullApiOperationResponseMap["ListCustomObjects"]>;
  ShowCustomObject(...args: ZendeskFullApiOperationArgs<"ShowCustomObject">): Promise<ZendeskFullApiOperationResponseMap["ShowCustomObject"]>;
  UpdateCustomObject(...args: ZendeskFullApiOperationArgs<"UpdateCustomObject">): Promise<ZendeskFullApiOperationResponseMap["UpdateCustomObject"]>;
}

export const ZendeskFullApiCustomObjectsGeneratedFunctionNames = [
  "CreateCustomObject",
  "CustomObjectsLimit",
  "DeleteCustomObject",
  "ListCustomObjects",
  "ShowCustomObject",
  "UpdateCustomObject"
] as const satisfies readonly (keyof ZendeskFullApiCustomObjectsGeneratedClient)[];

export function createZendeskFullApiCustomObjectsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiCustomObjectsGeneratedClient {
  return {
    CreateCustomObject: (...args) => callOperation("CreateCustomObject", ...(args as ZendeskFullApiOperationArgs<"CreateCustomObject">)),
    CustomObjectsLimit: (...args) => callOperation("CustomObjectsLimit", ...(args as ZendeskFullApiOperationArgs<"CustomObjectsLimit">)),
    DeleteCustomObject: (...args) => callOperation("DeleteCustomObject", ...(args as ZendeskFullApiOperationArgs<"DeleteCustomObject">)),
    ListCustomObjects: (...args) => callOperation("ListCustomObjects", ...(args as ZendeskFullApiOperationArgs<"ListCustomObjects">)),
    ShowCustomObject: (...args) => callOperation("ShowCustomObject", ...(args as ZendeskFullApiOperationArgs<"ShowCustomObject">)),
    UpdateCustomObject: (...args) => callOperation("UpdateCustomObject", ...(args as ZendeskFullApiOperationArgs<"UpdateCustomObject">)),
  };
}
