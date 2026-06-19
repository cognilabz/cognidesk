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
export const RingCentralDigitalApiIdentitiesOperationKeys = [
  "GET /identities",
  "GET /identities/{identityId}",
  "POST /identities/import"
] as const;
export type RingCentralDigitalApiIdentitiesOperationKey = typeof RingCentralDigitalApiIdentitiesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiIdentitiesOperationPathParamMap {
  "GET /identities": {};
  "GET /identities/{identityId}": { "identityId": RingCentralDigitalApiPathParamValue };
  "POST /identities/import": {};
}

export interface RingCentralDigitalApiIdentitiesOperationRequestMap {
  "GET /identities": RingCentralDigitalApiOperationInput<"GET /identities">;
  "GET /identities/{identityId}": RingCentralDigitalApiOperationInput<"GET /identities/{identityId}">;
  "POST /identities/import": RingCentralDigitalApiOperationInput<"POST /identities/import">;
}

export interface RingCentralDigitalApiIdentitiesGeneratedClient {
  GetAllIdentities(...args: RingCentralDigitalApiOperationArgs<"GET /identities">): Promise<RingCentralDigitalApiOperationResponseMap["GET /identities"]>;
  GetIdentity(...args: RingCentralDigitalApiOperationArgs<"GET /identities/{identityId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /identities/{identityId}"]>;
  ImportIdentity(...args: RingCentralDigitalApiOperationArgs<"POST /identities/import">): Promise<RingCentralDigitalApiOperationResponseMap["POST /identities/import"]>;
}

export const RingCentralDigitalApiIdentitiesGeneratedFunctionNames = [
  "GetAllIdentities",
  "GetIdentity",
  "ImportIdentity"
] as const satisfies readonly (keyof RingCentralDigitalApiIdentitiesGeneratedClient)[];

export function createRingCentralDigitalApiIdentitiesGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiIdentitiesGeneratedClient {
  return {
    GetAllIdentities: (...args) => callOperation("GET /identities", ...(args as RingCentralDigitalApiOperationArgs<"GET /identities">)),
    GetIdentity: (...args) => callOperation("GET /identities/{identityId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /identities/{identityId}">)),
    ImportIdentity: (...args) => callOperation("POST /identities/import", ...(args as RingCentralDigitalApiOperationArgs<"POST /identities/import">)),
  };
}
