// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiEventsOperationKeys = [
  "GET /events",
  "GET /events/{eventId}"
] as const;
export type RingCentralDigitalApiEventsOperationKey = typeof RingCentralDigitalApiEventsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiEventsOperationPathParamMap {
  "GET /events": {};
  "GET /events/{eventId}": { "eventId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiEventsOperationRequestMap {
  "GET /events": RingCentralDigitalApiOperationInput<"GET /events">;
  "GET /events/{eventId}": RingCentralDigitalApiOperationInput<"GET /events/{eventId}">;
}

export interface RingCentralDigitalApiEventsGeneratedClient {
  GetAllEvents(...args: RingCentralDigitalApiOperationArgs<"GET /events">): Promise<RingCentralDigitalApiOperationResponseMap["GET /events"]>;
  GetEvent(...args: RingCentralDigitalApiOperationArgs<"GET /events/{eventId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /events/{eventId}"]>;
}

export const RingCentralDigitalApiEventsGeneratedFunctionNames = [
  "GetAllEvents",
  "GetEvent"
] as const satisfies readonly (keyof RingCentralDigitalApiEventsGeneratedClient)[];

export function createRingCentralDigitalApiEventsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiEventsGeneratedClient {
  return {
    GetAllEvents: (...args) => callOperation("GET /events", ...(args as RingCentralDigitalApiOperationArgs<"GET /events">)),
    GetEvent: (...args) => callOperation("GET /events/{eventId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /events/{eventId}">)),
  };
}
