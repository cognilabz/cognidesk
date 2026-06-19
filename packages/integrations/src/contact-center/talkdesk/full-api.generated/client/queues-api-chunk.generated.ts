// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiQueuesAPIOperationKeys = [
  "GetAllQueues",
  "AssignUsersToQueues",
  "UnassignUsersToQueues",
  "GetQueueUsers"
] as const;
export type TalkdeskFullApiQueuesAPIOperationKey = typeof TalkdeskFullApiQueuesAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiQueuesAPIOperationPathParamMap {
  "GetAllQueues": {};
  "AssignUsersToQueues": {};
  "UnassignUsersToQueues": {};
  "GetQueueUsers": { "queue_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiQueuesAPIOperationRequestMap {
  "GetAllQueues": TalkdeskFullApiOperationInput<"GetAllQueues">;
  "AssignUsersToQueues": TalkdeskFullApiOperationInput<"AssignUsersToQueues">;
  "UnassignUsersToQueues": TalkdeskFullApiOperationInput<"UnassignUsersToQueues">;
  "GetQueueUsers": TalkdeskFullApiOperationInput<"GetQueueUsers">;
}

export interface TalkdeskFullApiQueuesAPIGeneratedClient {
  GetAllQueues(...args: TalkdeskFullApiOperationArgs<"GetAllQueues">): Promise<TalkdeskFullApiOperationResponseMap["GetAllQueues"]>;
  AssignUsersToQueues(...args: TalkdeskFullApiOperationArgs<"AssignUsersToQueues">): Promise<TalkdeskFullApiOperationResponseMap["AssignUsersToQueues"]>;
  UnassignUsersToQueues(...args: TalkdeskFullApiOperationArgs<"UnassignUsersToQueues">): Promise<TalkdeskFullApiOperationResponseMap["UnassignUsersToQueues"]>;
  GetQueueUsers(...args: TalkdeskFullApiOperationArgs<"GetQueueUsers">): Promise<TalkdeskFullApiOperationResponseMap["GetQueueUsers"]>;
}

export const TalkdeskFullApiQueuesAPIGeneratedFunctionNames = [
  "GetAllQueues",
  "AssignUsersToQueues",
  "UnassignUsersToQueues",
  "GetQueueUsers"
] as const satisfies readonly (keyof TalkdeskFullApiQueuesAPIGeneratedClient)[];

export function createTalkdeskFullApiQueuesAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiQueuesAPIGeneratedClient {
  return {
    GetAllQueues: (...args) => callOperation("GetAllQueues", ...(args as TalkdeskFullApiOperationArgs<"GetAllQueues">)),
    AssignUsersToQueues: (...args) => callOperation("AssignUsersToQueues", ...(args as TalkdeskFullApiOperationArgs<"AssignUsersToQueues">)),
    UnassignUsersToQueues: (...args) => callOperation("UnassignUsersToQueues", ...(args as TalkdeskFullApiOperationArgs<"UnassignUsersToQueues">)),
    GetQueueUsers: (...args) => callOperation("GetQueueUsers", ...(args as TalkdeskFullApiOperationArgs<"GetQueueUsers">)),
  };
}
