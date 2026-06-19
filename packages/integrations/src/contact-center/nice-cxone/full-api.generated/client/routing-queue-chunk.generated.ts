// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiRoutingQueueOperationKeys = [
  "digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues"
] as const;
export type NiceCxoneFullApiRoutingQueueOperationKey = typeof NiceCxoneFullApiRoutingQueueOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiRoutingQueueOperationPathParamMap {
  "digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues": {};
}

export interface NiceCxoneFullApiRoutingQueueOperationRequestMap {
  "digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues": NiceCxoneFullApiOperationInput<"digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues">;
}

export interface NiceCxoneFullApiRoutingQueueGeneratedClient {
  DigitalRoutingqueueApiDocsSearchRoutingQueues(...args: NiceCxoneFullApiOperationArgs<"digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues">): Promise<NiceCxoneFullApiOperationResponseMap["digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues"]>;
}

export const NiceCxoneFullApiRoutingQueueGeneratedFunctionNames = [
  "DigitalRoutingqueueApiDocsSearchRoutingQueues"
] as const satisfies readonly (keyof NiceCxoneFullApiRoutingQueueGeneratedClient)[];

export function createNiceCxoneFullApiRoutingQueueGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiRoutingQueueGeneratedClient {
  return {
    DigitalRoutingqueueApiDocsSearchRoutingQueues: (...args) => callOperation("digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues", ...(args as NiceCxoneFullApiOperationArgs<"digital-routingqueue-api-docs:searchRoutingQueues:GET:/routing-queues">)),
  };
}
