// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiCustomObjectInstancesOperationKeys = [
  "deleteCustomObjectInstancesById",
  "getCustomObjectInstancesByExternalId",
  "createCustomObjectInstances",
  "deleteCustomObjectInstancesByExternalId",
  "getCustomObjectInstancesById"
] as const;
export type IntercomFullApiCustomObjectInstancesOperationKey = typeof IntercomFullApiCustomObjectInstancesOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiCustomObjectInstancesOperationPathParamMap {
  "deleteCustomObjectInstancesById": { "custom_object_type_identifier": IntercomFullApiPathParamValue };
  "getCustomObjectInstancesByExternalId": { "custom_object_type_identifier": IntercomFullApiPathParamValue };
  "createCustomObjectInstances": { "custom_object_type_identifier": IntercomFullApiPathParamValue };
  "deleteCustomObjectInstancesByExternalId": { "custom_object_type_identifier": IntercomFullApiPathParamValue; "custom_object_instance_id": IntercomFullApiPathParamValue };
  "getCustomObjectInstancesById": { "custom_object_type_identifier": IntercomFullApiPathParamValue; "custom_object_instance_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiCustomObjectInstancesOperationRequestMap {
  "deleteCustomObjectInstancesById": IntercomFullApiOperationInput<"deleteCustomObjectInstancesById">;
  "getCustomObjectInstancesByExternalId": IntercomFullApiOperationInput<"getCustomObjectInstancesByExternalId">;
  "createCustomObjectInstances": IntercomFullApiOperationInput<"createCustomObjectInstances">;
  "deleteCustomObjectInstancesByExternalId": IntercomFullApiOperationInput<"deleteCustomObjectInstancesByExternalId">;
  "getCustomObjectInstancesById": IntercomFullApiOperationInput<"getCustomObjectInstancesById">;
}

export interface IntercomFullApiCustomObjectInstancesGeneratedClient {
  intercomDeleteCustomObjectInstancesById(...args: IntercomFullApiOperationArgs<"deleteCustomObjectInstancesById">): Promise<IntercomFullApiOperationResponseMap["deleteCustomObjectInstancesById"]>;
  intercomGetCustomObjectInstancesByExternalId(...args: IntercomFullApiOperationArgs<"getCustomObjectInstancesByExternalId">): Promise<IntercomFullApiOperationResponseMap["getCustomObjectInstancesByExternalId"]>;
  intercomCreateCustomObjectInstances(...args: IntercomFullApiOperationArgs<"createCustomObjectInstances">): Promise<IntercomFullApiOperationResponseMap["createCustomObjectInstances"]>;
  intercomDeleteCustomObjectInstancesByExternalId(...args: IntercomFullApiOperationArgs<"deleteCustomObjectInstancesByExternalId">): Promise<IntercomFullApiOperationResponseMap["deleteCustomObjectInstancesByExternalId"]>;
  intercomGetCustomObjectInstancesById(...args: IntercomFullApiOperationArgs<"getCustomObjectInstancesById">): Promise<IntercomFullApiOperationResponseMap["getCustomObjectInstancesById"]>;
}

export const IntercomFullApiCustomObjectInstancesGeneratedFunctionNames = [
  "intercomDeleteCustomObjectInstancesById",
  "intercomGetCustomObjectInstancesByExternalId",
  "intercomCreateCustomObjectInstances",
  "intercomDeleteCustomObjectInstancesByExternalId",
  "intercomGetCustomObjectInstancesById"
] as const satisfies readonly (keyof IntercomFullApiCustomObjectInstancesGeneratedClient)[];

export function createIntercomFullApiCustomObjectInstancesGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiCustomObjectInstancesGeneratedClient {
  return {
    intercomDeleteCustomObjectInstancesById: (...args) => callOperation("deleteCustomObjectInstancesById", ...(args as IntercomFullApiOperationArgs<"deleteCustomObjectInstancesById">)),
    intercomGetCustomObjectInstancesByExternalId: (...args) => callOperation("getCustomObjectInstancesByExternalId", ...(args as IntercomFullApiOperationArgs<"getCustomObjectInstancesByExternalId">)),
    intercomCreateCustomObjectInstances: (...args) => callOperation("createCustomObjectInstances", ...(args as IntercomFullApiOperationArgs<"createCustomObjectInstances">)),
    intercomDeleteCustomObjectInstancesByExternalId: (...args) => callOperation("deleteCustomObjectInstancesByExternalId", ...(args as IntercomFullApiOperationArgs<"deleteCustomObjectInstancesByExternalId">)),
    intercomGetCustomObjectInstancesById: (...args) => callOperation("getCustomObjectInstancesById", ...(args as IntercomFullApiOperationArgs<"getCustomObjectInstancesById">)),
  };
}
