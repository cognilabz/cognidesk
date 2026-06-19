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
export const IntercomFullApiAwayStatusReasonsOperationKeys = [
  "listAwayStatusReasons"
] as const;
export type IntercomFullApiAwayStatusReasonsOperationKey = typeof IntercomFullApiAwayStatusReasonsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiAwayStatusReasonsOperationPathParamMap {
  "listAwayStatusReasons": {};
}

export interface IntercomFullApiAwayStatusReasonsOperationRequestMap {
  "listAwayStatusReasons": IntercomFullApiOperationInput<"listAwayStatusReasons">;
}

export interface IntercomFullApiAwayStatusReasonsGeneratedClient {
  intercomListAwayStatusReasons(...args: IntercomFullApiOperationArgs<"listAwayStatusReasons">): Promise<IntercomFullApiOperationResponseMap["listAwayStatusReasons"]>;
}

export const IntercomFullApiAwayStatusReasonsGeneratedFunctionNames = [
  "intercomListAwayStatusReasons"
] as const satisfies readonly (keyof IntercomFullApiAwayStatusReasonsGeneratedClient)[];

export function createIntercomFullApiAwayStatusReasonsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiAwayStatusReasonsGeneratedClient {
  return {
    intercomListAwayStatusReasons: (...args) => callOperation("listAwayStatusReasons", ...(args as IntercomFullApiOperationArgs<"listAwayStatusReasons">)),
  };
}
