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
export const RingCentralDigitalApiTopologiesOperationKeys = [
  "PUT /topologies/{topologyId}/activate",
  "PUT /topologies/{topologyId}",
  "DELETE /topologies/{topologyId}",
  "GET /topologies/{topologyId}",
  "POST /topologies",
  "GET /topologies"
] as const;
export type RingCentralDigitalApiTopologiesOperationKey = typeof RingCentralDigitalApiTopologiesOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiTopologiesOperationPathParamMap {
  "PUT /topologies/{topologyId}/activate": { "topologyId": RingCentralDigitalApiPathParamValue };
  "PUT /topologies/{topologyId}": { "topologyId": RingCentralDigitalApiPathParamValue };
  "DELETE /topologies/{topologyId}": { "topologyId": RingCentralDigitalApiPathParamValue };
  "GET /topologies/{topologyId}": { "topologyId": RingCentralDigitalApiPathParamValue };
  "POST /topologies": {};
  "GET /topologies": {};
}

export interface RingCentralDigitalApiTopologiesOperationRequestMap {
  "PUT /topologies/{topologyId}/activate": RingCentralDigitalApiOperationInput<"PUT /topologies/{topologyId}/activate">;
  "PUT /topologies/{topologyId}": RingCentralDigitalApiOperationInput<"PUT /topologies/{topologyId}">;
  "DELETE /topologies/{topologyId}": RingCentralDigitalApiOperationInput<"DELETE /topologies/{topologyId}">;
  "GET /topologies/{topologyId}": RingCentralDigitalApiOperationInput<"GET /topologies/{topologyId}">;
  "POST /topologies": RingCentralDigitalApiOperationInput<"POST /topologies">;
  "GET /topologies": RingCentralDigitalApiOperationInput<"GET /topologies">;
}

export interface RingCentralDigitalApiTopologiesGeneratedClient {
  ActivateTopology(...args: RingCentralDigitalApiOperationArgs<"PUT /topologies/{topologyId}/activate">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /topologies/{topologyId}/activate"]>;
  UpdateTopology(...args: RingCentralDigitalApiOperationArgs<"PUT /topologies/{topologyId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /topologies/{topologyId}"]>;
  DeleteTopology(...args: RingCentralDigitalApiOperationArgs<"DELETE /topologies/{topologyId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /topologies/{topologyId}"]>;
  GetTopology(...args: RingCentralDigitalApiOperationArgs<"GET /topologies/{topologyId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /topologies/{topologyId}"]>;
  CreateTopology(...args: RingCentralDigitalApiOperationArgs<"POST /topologies">): Promise<RingCentralDigitalApiOperationResponseMap["POST /topologies"]>;
  GetAllTopologies(...args: RingCentralDigitalApiOperationArgs<"GET /topologies">): Promise<RingCentralDigitalApiOperationResponseMap["GET /topologies"]>;
}

export const RingCentralDigitalApiTopologiesGeneratedFunctionNames = [
  "ActivateTopology",
  "UpdateTopology",
  "DeleteTopology",
  "GetTopology",
  "CreateTopology",
  "GetAllTopologies"
] as const satisfies readonly (keyof RingCentralDigitalApiTopologiesGeneratedClient)[];

export function createRingCentralDigitalApiTopologiesGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiTopologiesGeneratedClient {
  return {
    ActivateTopology: (...args) => callOperation("PUT /topologies/{topologyId}/activate", ...(args as RingCentralDigitalApiOperationArgs<"PUT /topologies/{topologyId}/activate">)),
    UpdateTopology: (...args) => callOperation("PUT /topologies/{topologyId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /topologies/{topologyId}">)),
    DeleteTopology: (...args) => callOperation("DELETE /topologies/{topologyId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /topologies/{topologyId}">)),
    GetTopology: (...args) => callOperation("GET /topologies/{topologyId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /topologies/{topologyId}">)),
    CreateTopology: (...args) => callOperation("POST /topologies", ...(args as RingCentralDigitalApiOperationArgs<"POST /topologies">)),
    GetAllTopologies: (...args) => callOperation("GET /topologies", ...(args as RingCentralDigitalApiOperationArgs<"GET /topologies">)),
  };
}
