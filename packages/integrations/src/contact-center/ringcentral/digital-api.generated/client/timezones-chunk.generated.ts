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
export const RingCentralDigitalApiTimezonesOperationKeys = [
  "GET /timezones"
] as const;
export type RingCentralDigitalApiTimezonesOperationKey = typeof RingCentralDigitalApiTimezonesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiTimezonesOperationPathParamMap {
  "GET /timezones": {};
}

export interface RingCentralDigitalApiTimezonesOperationRequestMap {
  "GET /timezones": RingCentralDigitalApiOperationInput<"GET /timezones">;
}

export interface RingCentralDigitalApiTimezonesGeneratedClient {
  GetAllTimezones(...args: RingCentralDigitalApiOperationArgs<"GET /timezones">): Promise<RingCentralDigitalApiOperationResponseMap["GET /timezones"]>;
}

export const RingCentralDigitalApiTimezonesGeneratedFunctionNames = [
  "GetAllTimezones"
] as const satisfies readonly (keyof RingCentralDigitalApiTimezonesGeneratedClient)[];

export function createRingCentralDigitalApiTimezonesGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiTimezonesGeneratedClient {
  return {
    GetAllTimezones: (...args) => callOperation("GET /timezones", ...(args as RingCentralDigitalApiOperationArgs<"GET /timezones">)),
  };
}
