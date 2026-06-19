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
export const RingCentralDigitalApiLocalesOperationKeys = [
  "GET /interface_locales",
  "GET /locales"
] as const;
export type RingCentralDigitalApiLocalesOperationKey = typeof RingCentralDigitalApiLocalesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiLocalesOperationPathParamMap {
  "GET /interface_locales": {};
  "GET /locales": {};
}

export interface RingCentralDigitalApiLocalesOperationRequestMap {
  "GET /interface_locales": RingCentralDigitalApiOperationInput<"GET /interface_locales">;
  "GET /locales": RingCentralDigitalApiOperationInput<"GET /locales">;
}

export interface RingCentralDigitalApiLocalesGeneratedClient {
  GetAllUiLocales(...args: RingCentralDigitalApiOperationArgs<"GET /interface_locales">): Promise<RingCentralDigitalApiOperationResponseMap["GET /interface_locales"]>;
  GetAllLocales(...args: RingCentralDigitalApiOperationArgs<"GET /locales">): Promise<RingCentralDigitalApiOperationResponseMap["GET /locales"]>;
}

export const RingCentralDigitalApiLocalesGeneratedFunctionNames = [
  "GetAllUiLocales",
  "GetAllLocales"
] as const satisfies readonly (keyof RingCentralDigitalApiLocalesGeneratedClient)[];

export function createRingCentralDigitalApiLocalesGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiLocalesGeneratedClient {
  return {
    GetAllUiLocales: (...args) => callOperation("GET /interface_locales", ...(args as RingCentralDigitalApiOperationArgs<"GET /interface_locales">)),
    GetAllLocales: (...args) => callOperation("GET /locales", ...(args as RingCentralDigitalApiOperationArgs<"GET /locales">)),
  };
}
