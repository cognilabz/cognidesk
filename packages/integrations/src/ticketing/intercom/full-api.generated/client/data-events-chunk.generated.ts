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
export const IntercomFullApiDataEventsOperationKeys = [
  "lisDataEvents",
  "createDataEvent",
  "dataEventSummaries"
] as const;
export type IntercomFullApiDataEventsOperationKey = typeof IntercomFullApiDataEventsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiDataEventsOperationPathParamMap {
  "lisDataEvents": {};
  "createDataEvent": {};
  "dataEventSummaries": {};
}

export interface IntercomFullApiDataEventsOperationRequestMap {
  "lisDataEvents": IntercomFullApiOperationInput<"lisDataEvents">;
  "createDataEvent": IntercomFullApiOperationInput<"createDataEvent">;
  "dataEventSummaries": IntercomFullApiOperationInput<"dataEventSummaries">;
}

export interface IntercomFullApiDataEventsGeneratedClient {
  intercomLisDataEvents(...args: IntercomFullApiOperationArgs<"lisDataEvents">): Promise<IntercomFullApiOperationResponseMap["lisDataEvents"]>;
  intercomCreateDataEvent(...args: IntercomFullApiOperationArgs<"createDataEvent">): Promise<IntercomFullApiOperationResponseMap["createDataEvent"]>;
  intercomDataEventSummaries(...args: IntercomFullApiOperationArgs<"dataEventSummaries">): Promise<IntercomFullApiOperationResponseMap["dataEventSummaries"]>;
}

export const IntercomFullApiDataEventsGeneratedFunctionNames = [
  "intercomLisDataEvents",
  "intercomCreateDataEvent",
  "intercomDataEventSummaries"
] as const satisfies readonly (keyof IntercomFullApiDataEventsGeneratedClient)[];

export function createIntercomFullApiDataEventsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiDataEventsGeneratedClient {
  return {
    intercomLisDataEvents: (...args) => callOperation("lisDataEvents", ...(args as IntercomFullApiOperationArgs<"lisDataEvents">)),
    intercomCreateDataEvent: (...args) => callOperation("createDataEvent", ...(args as IntercomFullApiOperationArgs<"createDataEvent">)),
    intercomDataEventSummaries: (...args) => callOperation("dataEventSummaries", ...(args as IntercomFullApiOperationArgs<"dataEventSummaries">)),
  };
}
