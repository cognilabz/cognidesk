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
export const KustomerFullApiWorkItemsOperationKeys = [
  "GetWorkItemsbyConversation",
  "GetWorkItemsinaqueue",
  "GetNextWorkItemsinaQueue",
  "GetWorkItems",
  "CreateWorkItem",
  "GetWorkItem",
  "UpdateWorkItem"
] as const;
export type KustomerFullApiWorkItemsOperationKey = typeof KustomerFullApiWorkItemsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiWorkItemsOperationPathParamMap {
  "GetWorkItemsbyConversation": { "id": KustomerFullApiPathParamValue };
  "GetWorkItemsinaqueue": { "id": KustomerFullApiPathParamValue };
  "GetNextWorkItemsinaQueue": { "id": KustomerFullApiPathParamValue };
  "GetWorkItems": {};
  "CreateWorkItem": {};
  "GetWorkItem": { "id": KustomerFullApiPathParamValue };
  "UpdateWorkItem": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiWorkItemsOperationRequestMap {
  "GetWorkItemsbyConversation": KustomerFullApiOperationInput<"GetWorkItemsbyConversation">;
  "GetWorkItemsinaqueue": KustomerFullApiOperationInput<"GetWorkItemsinaqueue">;
  "GetNextWorkItemsinaQueue": KustomerFullApiOperationInput<"GetNextWorkItemsinaQueue">;
  "GetWorkItems": KustomerFullApiOperationInput<"GetWorkItems">;
  "CreateWorkItem": KustomerFullApiOperationInput<"CreateWorkItem">;
  "GetWorkItem": KustomerFullApiOperationInput<"GetWorkItem">;
  "UpdateWorkItem": KustomerFullApiOperationInput<"UpdateWorkItem">;
}

export interface KustomerFullApiWorkItemsGeneratedClient {
  kustomerGetWorkItemsbyConversation(...args: KustomerFullApiOperationArgs<"GetWorkItemsbyConversation">): Promise<KustomerFullApiOperationResponseMap["GetWorkItemsbyConversation"]>;
  kustomerGetWorkItemsinaqueue(...args: KustomerFullApiOperationArgs<"GetWorkItemsinaqueue">): Promise<KustomerFullApiOperationResponseMap["GetWorkItemsinaqueue"]>;
  kustomerGetNextWorkItemsinaQueue(...args: KustomerFullApiOperationArgs<"GetNextWorkItemsinaQueue">): Promise<KustomerFullApiOperationResponseMap["GetNextWorkItemsinaQueue"]>;
  kustomerGetWorkItems(...args: KustomerFullApiOperationArgs<"GetWorkItems">): Promise<KustomerFullApiOperationResponseMap["GetWorkItems"]>;
  kustomerCreateWorkItem(...args: KustomerFullApiOperationArgs<"CreateWorkItem">): Promise<KustomerFullApiOperationResponseMap["CreateWorkItem"]>;
  kustomerGetWorkItem(...args: KustomerFullApiOperationArgs<"GetWorkItem">): Promise<KustomerFullApiOperationResponseMap["GetWorkItem"]>;
  kustomerUpdateWorkItem(...args: KustomerFullApiOperationArgs<"UpdateWorkItem">): Promise<KustomerFullApiOperationResponseMap["UpdateWorkItem"]>;
}

export const KustomerFullApiWorkItemsGeneratedFunctionNames = [
  "kustomerGetWorkItemsbyConversation",
  "kustomerGetWorkItemsinaqueue",
  "kustomerGetNextWorkItemsinaQueue",
  "kustomerGetWorkItems",
  "kustomerCreateWorkItem",
  "kustomerGetWorkItem",
  "kustomerUpdateWorkItem"
] as const satisfies readonly (keyof KustomerFullApiWorkItemsGeneratedClient)[];

export function createKustomerFullApiWorkItemsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiWorkItemsGeneratedClient {
  return {
    kustomerGetWorkItemsbyConversation: (...args) => callOperation("GetWorkItemsbyConversation", ...(args as KustomerFullApiOperationArgs<"GetWorkItemsbyConversation">)),
    kustomerGetWorkItemsinaqueue: (...args) => callOperation("GetWorkItemsinaqueue", ...(args as KustomerFullApiOperationArgs<"GetWorkItemsinaqueue">)),
    kustomerGetNextWorkItemsinaQueue: (...args) => callOperation("GetNextWorkItemsinaQueue", ...(args as KustomerFullApiOperationArgs<"GetNextWorkItemsinaQueue">)),
    kustomerGetWorkItems: (...args) => callOperation("GetWorkItems", ...(args as KustomerFullApiOperationArgs<"GetWorkItems">)),
    kustomerCreateWorkItem: (...args) => callOperation("CreateWorkItem", ...(args as KustomerFullApiOperationArgs<"CreateWorkItem">)),
    kustomerGetWorkItem: (...args) => callOperation("GetWorkItem", ...(args as KustomerFullApiOperationArgs<"GetWorkItem">)),
    kustomerUpdateWorkItem: (...args) => callOperation("UpdateWorkItem", ...(args as KustomerFullApiOperationArgs<"UpdateWorkItem">)),
  };
}
