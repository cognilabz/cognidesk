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
export const RingCentralDigitalApiSettingsOperationKeys = [
  "GET /settings",
  "PUT /settings"
] as const;
export type RingCentralDigitalApiSettingsOperationKey = typeof RingCentralDigitalApiSettingsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiSettingsOperationPathParamMap {
  "GET /settings": {};
  "PUT /settings": {};
}

export interface RingCentralDigitalApiSettingsOperationRequestMap {
  "GET /settings": RingCentralDigitalApiOperationInput<"GET /settings">;
  "PUT /settings": RingCentralDigitalApiOperationInput<"PUT /settings">;
}

export interface RingCentralDigitalApiSettingsGeneratedClient {
  GetAllSettings(...args: RingCentralDigitalApiOperationArgs<"GET /settings">): Promise<RingCentralDigitalApiOperationResponseMap["GET /settings"]>;
  UpdateSettings(...args: RingCentralDigitalApiOperationArgs<"PUT /settings">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /settings"]>;
}

export const RingCentralDigitalApiSettingsGeneratedFunctionNames = [
  "GetAllSettings",
  "UpdateSettings"
] as const satisfies readonly (keyof RingCentralDigitalApiSettingsGeneratedClient)[];

export function createRingCentralDigitalApiSettingsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiSettingsGeneratedClient {
  return {
    GetAllSettings: (...args) => callOperation("GET /settings", ...(args as RingCentralDigitalApiOperationArgs<"GET /settings">)),
    UpdateSettings: (...args) => callOperation("PUT /settings", ...(args as RingCentralDigitalApiOperationArgs<"PUT /settings">)),
  };
}
