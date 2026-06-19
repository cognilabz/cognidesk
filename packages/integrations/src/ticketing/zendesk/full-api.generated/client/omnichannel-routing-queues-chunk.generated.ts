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
export const ZendeskFullApiOmnichannelRoutingQueuesOperationKeys = [
  "CreateQueue",
  "DeleteQueue",
  "ListQueueDefinitions",
  "ListQueues",
  "ReorderQueues",
  "ShowQueueById",
  "UpdateQueue"
] as const;
export type ZendeskFullApiOmnichannelRoutingQueuesOperationKey = typeof ZendeskFullApiOmnichannelRoutingQueuesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiOmnichannelRoutingQueuesOperationPathParamMap {
  "CreateQueue": {};
  "DeleteQueue": { "queue_id": ZendeskFullApiPathParamValue };
  "ListQueueDefinitions": {};
  "ListQueues": {};
  "ReorderQueues": {};
  "ShowQueueById": { "queue_id": ZendeskFullApiPathParamValue };
  "UpdateQueue": { "queue_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiOmnichannelRoutingQueuesOperationRequestMap {
  "CreateQueue": ZendeskFullApiOperationInput<"CreateQueue">;
  "DeleteQueue": ZendeskFullApiOperationInput<"DeleteQueue">;
  "ListQueueDefinitions": ZendeskFullApiOperationInput<"ListQueueDefinitions">;
  "ListQueues": ZendeskFullApiOperationInput<"ListQueues">;
  "ReorderQueues": ZendeskFullApiOperationInput<"ReorderQueues">;
  "ShowQueueById": ZendeskFullApiOperationInput<"ShowQueueById">;
  "UpdateQueue": ZendeskFullApiOperationInput<"UpdateQueue">;
}

export interface ZendeskFullApiOmnichannelRoutingQueuesGeneratedClient {
  CreateQueue(...args: ZendeskFullApiOperationArgs<"CreateQueue">): Promise<ZendeskFullApiOperationResponseMap["CreateQueue"]>;
  DeleteQueue(...args: ZendeskFullApiOperationArgs<"DeleteQueue">): Promise<ZendeskFullApiOperationResponseMap["DeleteQueue"]>;
  ListQueueDefinitions(...args: ZendeskFullApiOperationArgs<"ListQueueDefinitions">): Promise<ZendeskFullApiOperationResponseMap["ListQueueDefinitions"]>;
  ListQueues(...args: ZendeskFullApiOperationArgs<"ListQueues">): Promise<ZendeskFullApiOperationResponseMap["ListQueues"]>;
  ReorderQueues(...args: ZendeskFullApiOperationArgs<"ReorderQueues">): Promise<ZendeskFullApiOperationResponseMap["ReorderQueues"]>;
  ShowQueueById(...args: ZendeskFullApiOperationArgs<"ShowQueueById">): Promise<ZendeskFullApiOperationResponseMap["ShowQueueById"]>;
  UpdateQueue(...args: ZendeskFullApiOperationArgs<"UpdateQueue">): Promise<ZendeskFullApiOperationResponseMap["UpdateQueue"]>;
}

export const ZendeskFullApiOmnichannelRoutingQueuesGeneratedFunctionNames = [
  "CreateQueue",
  "DeleteQueue",
  "ListQueueDefinitions",
  "ListQueues",
  "ReorderQueues",
  "ShowQueueById",
  "UpdateQueue"
] as const satisfies readonly (keyof ZendeskFullApiOmnichannelRoutingQueuesGeneratedClient)[];

export function createZendeskFullApiOmnichannelRoutingQueuesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiOmnichannelRoutingQueuesGeneratedClient {
  return {
    CreateQueue: (...args) => callOperation("CreateQueue", ...(args as ZendeskFullApiOperationArgs<"CreateQueue">)),
    DeleteQueue: (...args) => callOperation("DeleteQueue", ...(args as ZendeskFullApiOperationArgs<"DeleteQueue">)),
    ListQueueDefinitions: (...args) => callOperation("ListQueueDefinitions", ...(args as ZendeskFullApiOperationArgs<"ListQueueDefinitions">)),
    ListQueues: (...args) => callOperation("ListQueues", ...(args as ZendeskFullApiOperationArgs<"ListQueues">)),
    ReorderQueues: (...args) => callOperation("ReorderQueues", ...(args as ZendeskFullApiOperationArgs<"ReorderQueues">)),
    ShowQueueById: (...args) => callOperation("ShowQueueById", ...(args as ZendeskFullApiOperationArgs<"ShowQueueById">)),
    UpdateQueue: (...args) => callOperation("UpdateQueue", ...(args as ZendeskFullApiOperationArgs<"UpdateQueue">)),
  };
}
