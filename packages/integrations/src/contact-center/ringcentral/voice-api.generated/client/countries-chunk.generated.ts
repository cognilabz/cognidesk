// Generated endpoint chunk for RingCentralVoiceApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralVoiceGeneratedOperationCaller,
  RingCentralVoiceApiOperationArgs,
  RingCentralVoiceApiOperationInput,
  RingCentralVoiceApiPathParamValue,
} from "../../voice-api-client.generated.js";
import type { RingCentralVoiceApiOperationResponseMap } from "../../voice-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralVoiceApiCountriesOperationKeys = [
  "GET /voice/api/v1/admin/accounts/{accountId}/countries/available"
] as const;
export type RingCentralVoiceApiCountriesOperationKey = typeof RingCentralVoiceApiCountriesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiCountriesOperationPathParamMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/countries/available": { "accountId": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiCountriesOperationRequestMap {
  "GET /voice/api/v1/admin/accounts/{accountId}/countries/available": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/accounts/{accountId}/countries/available">;
}

export interface RingCentralVoiceApiCountriesGeneratedClient {
  GetCountryList(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/countries/available">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/accounts/{accountId}/countries/available"]>;
}

export const RingCentralVoiceApiCountriesGeneratedFunctionNames = [
  "GetCountryList"
] as const satisfies readonly (keyof RingCentralVoiceApiCountriesGeneratedClient)[];

export function createRingCentralVoiceApiCountriesGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiCountriesGeneratedClient {
  return {
    GetCountryList: (...args) => callOperation("GET /voice/api/v1/admin/accounts/{accountId}/countries/available", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/accounts/{accountId}/countries/available">)),
  };
}
