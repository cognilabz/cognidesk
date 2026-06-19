// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiEventsOperationKeys = [
  "list-events",
  "get-event"
] as const;
export type FrontFullApiEventsOperationKey = typeof FrontFullApiEventsOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiEventsOperationPathParamMap {
  "list-events": {};
  "get-event": { "event_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiEventsOperationRequestMap {
  "list-events": FrontFullApiOperationInput<"list-events">;
  "get-event": FrontFullApiOperationInput<"get-event">;
}

export interface FrontFullApiEventsGeneratedClient {
  frontListEvents(...args: FrontFullApiOperationArgs<"list-events">): Promise<FrontFullApiOperationResponseMap["list-events"]>;
  frontGetEvent(...args: FrontFullApiOperationArgs<"get-event">): Promise<FrontFullApiOperationResponseMap["get-event"]>;
}

export const FrontFullApiEventsGeneratedFunctionNames = [
  "frontListEvents",
  "frontGetEvent"
] as const satisfies readonly (keyof FrontFullApiEventsGeneratedClient)[];

export function createFrontFullApiEventsGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiEventsGeneratedClient {
  return {
    frontListEvents: (...args) => callOperation("list-events", ...(args as FrontFullApiOperationArgs<"list-events">)),
    frontGetEvent: (...args) => callOperation("get-event", ...(args as FrontFullApiOperationArgs<"get-event">)),
  };
}
