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
export const ZendeskFullApiObjectTriggersOperationKeys = [
  "CreateObjectTrigger",
  "DeleteManyObjectTriggers",
  "DeleteObjectTrigger",
  "GetObjectTrigger",
  "ListActiveObjectTriggers",
  "ListObjectTriggers",
  "ListObjectTriggersDefinitions",
  "SearchObjectTriggers",
  "UpdateManyObjectTriggers",
  "UpdateObjectTrigger"
] as const;
export type ZendeskFullApiObjectTriggersOperationKey = typeof ZendeskFullApiObjectTriggersOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiObjectTriggersOperationPathParamMap {
  "CreateObjectTrigger": { "custom_object_key": ZendeskFullApiPathParamValue };
  "DeleteManyObjectTriggers": { "custom_object_key": ZendeskFullApiPathParamValue };
  "DeleteObjectTrigger": { "custom_object_key": ZendeskFullApiPathParamValue; "trigger_id": ZendeskFullApiPathParamValue };
  "GetObjectTrigger": { "custom_object_key": ZendeskFullApiPathParamValue; "trigger_id": ZendeskFullApiPathParamValue };
  "ListActiveObjectTriggers": { "custom_object_key": ZendeskFullApiPathParamValue };
  "ListObjectTriggers": { "custom_object_key": ZendeskFullApiPathParamValue };
  "ListObjectTriggersDefinitions": { "custom_object_key": ZendeskFullApiPathParamValue };
  "SearchObjectTriggers": { "custom_object_key": ZendeskFullApiPathParamValue };
  "UpdateManyObjectTriggers": { "custom_object_key": ZendeskFullApiPathParamValue };
  "UpdateObjectTrigger": { "custom_object_key": ZendeskFullApiPathParamValue; "trigger_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiObjectTriggersOperationRequestMap {
  "CreateObjectTrigger": ZendeskFullApiOperationInput<"CreateObjectTrigger">;
  "DeleteManyObjectTriggers": ZendeskFullApiOperationInput<"DeleteManyObjectTriggers">;
  "DeleteObjectTrigger": ZendeskFullApiOperationInput<"DeleteObjectTrigger">;
  "GetObjectTrigger": ZendeskFullApiOperationInput<"GetObjectTrigger">;
  "ListActiveObjectTriggers": ZendeskFullApiOperationInput<"ListActiveObjectTriggers">;
  "ListObjectTriggers": ZendeskFullApiOperationInput<"ListObjectTriggers">;
  "ListObjectTriggersDefinitions": ZendeskFullApiOperationInput<"ListObjectTriggersDefinitions">;
  "SearchObjectTriggers": ZendeskFullApiOperationInput<"SearchObjectTriggers">;
  "UpdateManyObjectTriggers": ZendeskFullApiOperationInput<"UpdateManyObjectTriggers">;
  "UpdateObjectTrigger": ZendeskFullApiOperationInput<"UpdateObjectTrigger">;
}

export interface ZendeskFullApiObjectTriggersGeneratedClient {
  CreateObjectTrigger(...args: ZendeskFullApiOperationArgs<"CreateObjectTrigger">): Promise<ZendeskFullApiOperationResponseMap["CreateObjectTrigger"]>;
  DeleteManyObjectTriggers(...args: ZendeskFullApiOperationArgs<"DeleteManyObjectTriggers">): Promise<ZendeskFullApiOperationResponseMap["DeleteManyObjectTriggers"]>;
  DeleteObjectTrigger(...args: ZendeskFullApiOperationArgs<"DeleteObjectTrigger">): Promise<ZendeskFullApiOperationResponseMap["DeleteObjectTrigger"]>;
  GetObjectTrigger(...args: ZendeskFullApiOperationArgs<"GetObjectTrigger">): Promise<ZendeskFullApiOperationResponseMap["GetObjectTrigger"]>;
  ListActiveObjectTriggers(...args: ZendeskFullApiOperationArgs<"ListActiveObjectTriggers">): Promise<ZendeskFullApiOperationResponseMap["ListActiveObjectTriggers"]>;
  ListObjectTriggers(...args: ZendeskFullApiOperationArgs<"ListObjectTriggers">): Promise<ZendeskFullApiOperationResponseMap["ListObjectTriggers"]>;
  ListObjectTriggersDefinitions(...args: ZendeskFullApiOperationArgs<"ListObjectTriggersDefinitions">): Promise<ZendeskFullApiOperationResponseMap["ListObjectTriggersDefinitions"]>;
  SearchObjectTriggers(...args: ZendeskFullApiOperationArgs<"SearchObjectTriggers">): Promise<ZendeskFullApiOperationResponseMap["SearchObjectTriggers"]>;
  UpdateManyObjectTriggers(...args: ZendeskFullApiOperationArgs<"UpdateManyObjectTriggers">): Promise<ZendeskFullApiOperationResponseMap["UpdateManyObjectTriggers"]>;
  UpdateObjectTrigger(...args: ZendeskFullApiOperationArgs<"UpdateObjectTrigger">): Promise<ZendeskFullApiOperationResponseMap["UpdateObjectTrigger"]>;
}

export const ZendeskFullApiObjectTriggersGeneratedFunctionNames = [
  "CreateObjectTrigger",
  "DeleteManyObjectTriggers",
  "DeleteObjectTrigger",
  "GetObjectTrigger",
  "ListActiveObjectTriggers",
  "ListObjectTriggers",
  "ListObjectTriggersDefinitions",
  "SearchObjectTriggers",
  "UpdateManyObjectTriggers",
  "UpdateObjectTrigger"
] as const satisfies readonly (keyof ZendeskFullApiObjectTriggersGeneratedClient)[];

export function createZendeskFullApiObjectTriggersGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiObjectTriggersGeneratedClient {
  return {
    CreateObjectTrigger: (...args) => callOperation("CreateObjectTrigger", ...(args as ZendeskFullApiOperationArgs<"CreateObjectTrigger">)),
    DeleteManyObjectTriggers: (...args) => callOperation("DeleteManyObjectTriggers", ...(args as ZendeskFullApiOperationArgs<"DeleteManyObjectTriggers">)),
    DeleteObjectTrigger: (...args) => callOperation("DeleteObjectTrigger", ...(args as ZendeskFullApiOperationArgs<"DeleteObjectTrigger">)),
    GetObjectTrigger: (...args) => callOperation("GetObjectTrigger", ...(args as ZendeskFullApiOperationArgs<"GetObjectTrigger">)),
    ListActiveObjectTriggers: (...args) => callOperation("ListActiveObjectTriggers", ...(args as ZendeskFullApiOperationArgs<"ListActiveObjectTriggers">)),
    ListObjectTriggers: (...args) => callOperation("ListObjectTriggers", ...(args as ZendeskFullApiOperationArgs<"ListObjectTriggers">)),
    ListObjectTriggersDefinitions: (...args) => callOperation("ListObjectTriggersDefinitions", ...(args as ZendeskFullApiOperationArgs<"ListObjectTriggersDefinitions">)),
    SearchObjectTriggers: (...args) => callOperation("SearchObjectTriggers", ...(args as ZendeskFullApiOperationArgs<"SearchObjectTriggers">)),
    UpdateManyObjectTriggers: (...args) => callOperation("UpdateManyObjectTriggers", ...(args as ZendeskFullApiOperationArgs<"UpdateManyObjectTriggers">)),
    UpdateObjectTrigger: (...args) => callOperation("UpdateObjectTrigger", ...(args as ZendeskFullApiOperationArgs<"UpdateObjectTrigger">)),
  };
}
