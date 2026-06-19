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
export const RingCentralDigitalApiSourcesOperationKeys = [
  "GET /content_sources",
  "GET /content_sources/{sourceId}",
  "PUT /content_sources/{sourceId}",
  "PUT /content_sources/{sourceId}/email_credentials"
] as const;
export type RingCentralDigitalApiSourcesOperationKey = typeof RingCentralDigitalApiSourcesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiSourcesOperationPathParamMap {
  "GET /content_sources": {};
  "GET /content_sources/{sourceId}": { "sourceId": RingCentralDigitalApiPathParamValue };
  "PUT /content_sources/{sourceId}": { "sourceId": RingCentralDigitalApiPathParamValue };
  "PUT /content_sources/{sourceId}/email_credentials": { "sourceId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiSourcesOperationRequestMap {
  "GET /content_sources": RingCentralDigitalApiOperationInput<"GET /content_sources">;
  "GET /content_sources/{sourceId}": RingCentralDigitalApiOperationInput<"GET /content_sources/{sourceId}">;
  "PUT /content_sources/{sourceId}": RingCentralDigitalApiOperationInput<"PUT /content_sources/{sourceId}">;
  "PUT /content_sources/{sourceId}/email_credentials": RingCentralDigitalApiOperationInput<"PUT /content_sources/{sourceId}/email_credentials">;
}

export interface RingCentralDigitalApiSourcesGeneratedClient {
  GetAllSources(...args: RingCentralDigitalApiOperationArgs<"GET /content_sources">): Promise<RingCentralDigitalApiOperationResponseMap["GET /content_sources"]>;
  GetSource(...args: RingCentralDigitalApiOperationArgs<"GET /content_sources/{sourceId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /content_sources/{sourceId}"]>;
  UpdateSource(...args: RingCentralDigitalApiOperationArgs<"PUT /content_sources/{sourceId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /content_sources/{sourceId}"]>;
  UpdateSourceEmailCredentials(...args: RingCentralDigitalApiOperationArgs<"PUT /content_sources/{sourceId}/email_credentials">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /content_sources/{sourceId}/email_credentials"]>;
}

export const RingCentralDigitalApiSourcesGeneratedFunctionNames = [
  "GetAllSources",
  "GetSource",
  "UpdateSource",
  "UpdateSourceEmailCredentials"
] as const satisfies readonly (keyof RingCentralDigitalApiSourcesGeneratedClient)[];

export function createRingCentralDigitalApiSourcesGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiSourcesGeneratedClient {
  return {
    GetAllSources: (...args) => callOperation("GET /content_sources", ...(args as RingCentralDigitalApiOperationArgs<"GET /content_sources">)),
    GetSource: (...args) => callOperation("GET /content_sources/{sourceId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /content_sources/{sourceId}">)),
    UpdateSource: (...args) => callOperation("PUT /content_sources/{sourceId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /content_sources/{sourceId}">)),
    UpdateSourceEmailCredentials: (...args) => callOperation("PUT /content_sources/{sourceId}/email_credentials", ...(args as RingCentralDigitalApiOperationArgs<"PUT /content_sources/{sourceId}/email_credentials">)),
  };
}
