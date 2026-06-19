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
export const IntercomFullApiSubscriptionTypesOperationKeys = [
  "attachSubscriptionTypeToContact",
  "detachSubscriptionTypeToContact",
  "listSubscriptionTypes"
] as const;
export type IntercomFullApiSubscriptionTypesOperationKey = typeof IntercomFullApiSubscriptionTypesOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiSubscriptionTypesOperationPathParamMap {
  "attachSubscriptionTypeToContact": { "contact_id": IntercomFullApiPathParamValue };
  "detachSubscriptionTypeToContact": { "contact_id": IntercomFullApiPathParamValue; "subscription_id": IntercomFullApiPathParamValue };
  "listSubscriptionTypes": {};
}

export interface IntercomFullApiSubscriptionTypesOperationRequestMap {
  "attachSubscriptionTypeToContact": IntercomFullApiOperationInput<"attachSubscriptionTypeToContact">;
  "detachSubscriptionTypeToContact": IntercomFullApiOperationInput<"detachSubscriptionTypeToContact">;
  "listSubscriptionTypes": IntercomFullApiOperationInput<"listSubscriptionTypes">;
}

export interface IntercomFullApiSubscriptionTypesGeneratedClient {
  intercomAttachSubscriptionTypeToContact(...args: IntercomFullApiOperationArgs<"attachSubscriptionTypeToContact">): Promise<IntercomFullApiOperationResponseMap["attachSubscriptionTypeToContact"]>;
  intercomDetachSubscriptionTypeToContact(...args: IntercomFullApiOperationArgs<"detachSubscriptionTypeToContact">): Promise<IntercomFullApiOperationResponseMap["detachSubscriptionTypeToContact"]>;
  intercomListSubscriptionTypes(...args: IntercomFullApiOperationArgs<"listSubscriptionTypes">): Promise<IntercomFullApiOperationResponseMap["listSubscriptionTypes"]>;
}

export const IntercomFullApiSubscriptionTypesGeneratedFunctionNames = [
  "intercomAttachSubscriptionTypeToContact",
  "intercomDetachSubscriptionTypeToContact",
  "intercomListSubscriptionTypes"
] as const satisfies readonly (keyof IntercomFullApiSubscriptionTypesGeneratedClient)[];

export function createIntercomFullApiSubscriptionTypesGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiSubscriptionTypesGeneratedClient {
  return {
    intercomAttachSubscriptionTypeToContact: (...args) => callOperation("attachSubscriptionTypeToContact", ...(args as IntercomFullApiOperationArgs<"attachSubscriptionTypeToContact">)),
    intercomDetachSubscriptionTypeToContact: (...args) => callOperation("detachSubscriptionTypeToContact", ...(args as IntercomFullApiOperationArgs<"detachSubscriptionTypeToContact">)),
    intercomListSubscriptionTypes: (...args) => callOperation("listSubscriptionTypes", ...(args as IntercomFullApiOperationArgs<"listSubscriptionTypes">)),
  };
}
