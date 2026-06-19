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
export const KustomerFullApiQueuesOperationKeys = [
  "GetQueues",
  "CreateQueue",
  "GetQueue",
  "UpdateQueue"
] as const;
export type KustomerFullApiQueuesOperationKey = typeof KustomerFullApiQueuesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiQueuesOperationPathParamMap {
  "GetQueues": {};
  "CreateQueue": {};
  "GetQueue": { "id": KustomerFullApiPathParamValue };
  "UpdateQueue": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiQueuesOperationRequestMap {
  "GetQueues": KustomerFullApiOperationInput<"GetQueues">;
  "CreateQueue": KustomerFullApiOperationInput<"CreateQueue">;
  "GetQueue": KustomerFullApiOperationInput<"GetQueue">;
  "UpdateQueue": KustomerFullApiOperationInput<"UpdateQueue">;
}

export interface KustomerFullApiQueuesGeneratedClient {
  kustomerGetQueues(...args: KustomerFullApiOperationArgs<"GetQueues">): Promise<KustomerFullApiOperationResponseMap["GetQueues"]>;
  kustomerCreateQueue(...args: KustomerFullApiOperationArgs<"CreateQueue">): Promise<KustomerFullApiOperationResponseMap["CreateQueue"]>;
  kustomerGetQueue(...args: KustomerFullApiOperationArgs<"GetQueue">): Promise<KustomerFullApiOperationResponseMap["GetQueue"]>;
  kustomerUpdateQueue(...args: KustomerFullApiOperationArgs<"UpdateQueue">): Promise<KustomerFullApiOperationResponseMap["UpdateQueue"]>;
}

export const KustomerFullApiQueuesGeneratedFunctionNames = [
  "kustomerGetQueues",
  "kustomerCreateQueue",
  "kustomerGetQueue",
  "kustomerUpdateQueue"
] as const satisfies readonly (keyof KustomerFullApiQueuesGeneratedClient)[];

export function createKustomerFullApiQueuesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiQueuesGeneratedClient {
  return {
    kustomerGetQueues: (...args) => callOperation("GetQueues", ...(args as KustomerFullApiOperationArgs<"GetQueues">)),
    kustomerCreateQueue: (...args) => callOperation("CreateQueue", ...(args as KustomerFullApiOperationArgs<"CreateQueue">)),
    kustomerGetQueue: (...args) => callOperation("GetQueue", ...(args as KustomerFullApiOperationArgs<"GetQueue">)),
    kustomerUpdateQueue: (...args) => callOperation("UpdateQueue", ...(args as KustomerFullApiOperationArgs<"UpdateQueue">)),
  };
}
