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
export const RingCentralVoiceApiReportingOperationKeys = [
  "GET /voice/api/v1/admin/reports/{reportType}"
] as const;
export type RingCentralVoiceApiReportingOperationKey = typeof RingCentralVoiceApiReportingOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralVoiceApiReportingOperationPathParamMap {
  "GET /voice/api/v1/admin/reports/{reportType}": { "reportType": RingCentralVoiceApiPathParamValue };
}

export interface RingCentralVoiceApiReportingOperationRequestMap {
  "GET /voice/api/v1/admin/reports/{reportType}": RingCentralVoiceApiOperationInput<"GET /voice/api/v1/admin/reports/{reportType}">;
}

export interface RingCentralVoiceApiReportingGeneratedClient {
  GetReportCriteriaTemplate(...args: RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/reports/{reportType}">): Promise<RingCentralVoiceApiOperationResponseMap["GET /voice/api/v1/admin/reports/{reportType}"]>;
}

export const RingCentralVoiceApiReportingGeneratedFunctionNames = [
  "GetReportCriteriaTemplate"
] as const satisfies readonly (keyof RingCentralVoiceApiReportingGeneratedClient)[];

export function createRingCentralVoiceApiReportingGeneratedClient(
  callOperation: RingCentralVoiceGeneratedOperationCaller,
): RingCentralVoiceApiReportingGeneratedClient {
  return {
    GetReportCriteriaTemplate: (...args) => callOperation("GET /voice/api/v1/admin/reports/{reportType}", ...(args as RingCentralVoiceApiOperationArgs<"GET /voice/api/v1/admin/reports/{reportType}">)),
  };
}
